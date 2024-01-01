import * as THREE from "three";
import {
  green,
  grey,
  red,
} from "./textures/grids.ts";
import type { RigidBody } from "@dimforge/rapier3d";

const RAPIER = await import("@dimforge/rapier3d");

const canvasElement = document.querySelector("canvas");

if (!canvasElement) {
  throw new Error("No canvas element found!");
}

const renderer = new THREE.WebGLRenderer({
  canvas: canvasElement,
  antialias: true,
});
renderer.shadowMap.enabled = true;

const camera = new THREE.PerspectiveCamera(75);
camera.position.z = 5;
camera.position.y = 5;
camera.rotation.x = degToRad(-35);

const onResize = () => {
  const rect = canvasElement.getBoundingClientRect();
  const dpr = window.devicePixelRatio ?? 1;

  const aspect = rect.width / rect.height;

  renderer.setPixelRatio(dpr);

  renderer.setSize(
    rect.width,
    rect.height,
    false,
  );

  camera.aspect = aspect;
  camera.updateProjectionMatrix();
}

onResize();
observeResize(canvasElement, onResize);

const scene = new THREE.Scene();
scene.background = new THREE.Color("darkgrey");
scene.fog = new THREE.Fog("darkgrey", 10, 50);

const hemiLight = new THREE.HemisphereLight("white", "grey", 0.5);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight("white", 3);
dirLight.position.set(10, 10, 10);
dirLight.castShadow = true;
dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
scene.add(dirLight);

const gridGreyTexture = new THREE.TextureLoader().load(grey);
gridGreyTexture.wrapT = THREE.RepeatWrapping;
gridGreyTexture.wrapS = THREE.RepeatWrapping;

const gridGreyMat = new THREE.MeshStandardMaterial({
  map: gridGreyTexture,
});

const gridGreenTexture = new THREE.TextureLoader().load(green);
gridGreenTexture.wrapT = THREE.RepeatWrapping;
gridGreenTexture.wrapS = THREE.RepeatWrapping;
const gridGreenMat = new THREE.MeshStandardMaterial({
  map: gridGreenTexture,
});

const gridRedTexture = new THREE.TextureLoader().load(red);
gridRedTexture.wrapT = THREE.RepeatWrapping;
gridRedTexture.wrapS = THREE.RepeatWrapping;
const gridRedMat = new THREE.MeshStandardMaterial({
  map: gridRedTexture,
});

const whiteMat = new THREE.MeshStandardMaterial({
  color: "white",
});

const floorSize = 100;

const grid = new THREE.GridHelper(floorSize, floorSize, 0x000000, 0x000000);
grid.material.opacity = 0.2;
grid.material.transparent = true;
grid.position.y = 0.001;
scene.add(grid);

const floorGeo = new THREE.PlaneGeometry(floorSize, floorSize);
const floor = new THREE.Mesh(
  floorGeo,
  whiteMat,
);
floor.rotation.x = degToRad(-90);
floor.receiveShadow = true;
scene.add(floor);

const spinningCube = new THREE.Mesh(
  new THREE.BoxGeometry(0.1, 0.1, 0.1),
  gridRedMat,
);
spinningCube.castShadow = true;
spinningCube.receiveShadow = true;
spinningCube.position.set(0, 4.5, 4.5);
scene.add(spinningCube);

function setUvs2(mesh: THREE.Mesh, scale: number = 1) {
  const pos = mesh.geometry.getAttribute("position");
  const nor = mesh.geometry.getAttribute("normal");
  const uvs = mesh.geometry.getAttribute("uv");

  for (let i = 0; i < pos.count; i++) {
    let x = 0;
    let y = 0;

    const nx = Math.abs(nor.getX(i));
    const ny = Math.abs(nor.getY(i));
    const nz = Math.abs(nor.getZ(i));

    // if facing X
    if (nx >= ny && nx >= nz) {
      x = pos.getZ(i);
      y = pos.getY(i);
    }

    // if facing Y
    if (ny >= nx && ny >= nz) {
      x = pos.getX(i);
      y = pos.getZ(i);
    }

    // if facing Z
    if (nz >= nx && nz >= ny) {
      x = pos.getX(i);
      y = pos.getY(i);
    }

    uvs.setXY(i, x * scale, y * scale);
  }
}

setUvs2(floor);

const gravity = {x: 0.0, y: -9.81, z: 0.0};
const world = new RAPIER.World(gravity);

world.createCollider(
  RAPIER.ColliderDesc.cuboid(100, 0.1, 100),
);

type Cube = {
  body: RigidBody,
  mesh: THREE.Mesh,
};

let cubes: Cube[] = [];

let xSize = 10;
let ySize = 5;
let zSize = 5;

for (let x = 0; x < xSize; x++) {
  for (let y = 0; y < ySize; y++) {
    for (let z = 0; z < zSize; z++) {
      const scale = 0.5;

      let rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(
        x * scale - xSize / 2 * scale,
        y * scale + 5,
        z * scale - zSize / 2 * scale,
      );
      let rigidBody = world.createRigidBody(rigidBodyDesc);
      let colliderDesc = RAPIER.ColliderDesc.cuboid(scale / 2, scale / 2, scale / 2);
      world.createCollider(colliderDesc, rigidBody);

      const cubeMesh = new THREE.Mesh(
        new THREE.BoxGeometry(scale, scale, scale),
        gridGreenMat,
      );
      cubeMesh.castShadow = true;
      cubeMesh.receiveShadow = true;
      setUvs2(cubeMesh)
      scene.add(cubeMesh);

      cubes.push({
        body: rigidBody,
        mesh: cubeMesh,
      });
    }
  }
}

let frame = 0;

let previousPositions: THREE.Vector3[] = [];

const getFPS = (): Promise<number> => new Promise(resolve =>
  requestAnimationFrame(t1 =>
    requestAnimationFrame(t2 => resolve(Math.round(1000 / (t2 - t1)))),
  ),
)

const pps = 60;

function animate() {
  const factor = 1;
  world.timestep = 1.0 / pps * factor;
  if (frame++ % factor === 0) world.step();

  spinningCube.rotation.x += 0.05;
  spinningCube.rotation.y += 0.05;

  for (let i = 0; i < cubes.length; i++) {
    const cube = cubes[i]!;
    cube.mesh.position.set(
      cube.body.translation().x,
      cube.body.translation().y,
      cube.body.translation().z,
    );
    cube.mesh.quaternion.set(
      cube.body.rotation().x,
      cube.body.rotation().y,
      cube.body.rotation().z,
      cube.body.rotation().w,
    );
  }

  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

const MAX_DELTA_TIME = 1;
const FIXED_DELTA_TIME = 1 / 20;
let previousTime = 0;
let timeAccumulator = 0;

declare global {
  interface Window {
    __STAT_COUNTERS: number;
  }
}

const PIXEL_RATIO = window.devicePixelRatio ?? 1;

let a = 0;
let f = 0;
let t = 60 * 5;

class Stats {
  private context: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private offscreenGraphContext: OffscreenCanvasRenderingContext2D;

  constructor() {
    if (window.__STAT_COUNTERS === undefined) {
      window.__STAT_COUNTERS = 0;
    }

    this.width = 500 * PIXEL_RATIO;
    this.height = 300 * PIXEL_RATIO;

    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.zIndex = "10000";
    document.body.appendChild(container);

    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.style.width = `${this.width / PIXEL_RATIO}px`;
    canvas.style.height = `${this.height / PIXEL_RATIO}px`;
    container.appendChild(canvas);

    const context = canvas.getContext("2d");

    if (context === null) {
      throw new Error("Failed to set up stats panel, canvas context could not be created.");
    }

    this.context = context;

    this.context.font = `bold ${8 * PIXEL_RATIO}px monospace`;

    const offscreenGraphCanvas = new OffscreenCanvas(this.width, this.height);
    const offscreenGraphContext = offscreenGraphCanvas.getContext("2d");

    if (offscreenGraphContext === null) {
      throw new Error("Failed to set up stats panel, offscreen canvas context could not be created.");
    }

    this.offscreenGraphContext = offscreenGraphContext;
    this.offscreenGraphContext.imageSmoothingEnabled = false;

    window.__STAT_COUNTERS++;
  }

  draw() {
    const start = performance.now();

    const stepWidth = 2 * PIXEL_RATIO;
    const lineHeight = 2 * PIXEL_RATIO;

    const prevImage = this.offscreenGraphContext.canvas.transferToImageBitmap();

    this.offscreenGraphContext.clearRect(0, 0, this.width, this.height);
    this.offscreenGraphContext.drawImage(prevImage, -stepWidth, 0);
    prevImage.close();

    const y = Math.round(Math.random() * 20) + 60;

    const gradient = this.offscreenGraphContext.createLinearGradient(
      0,
      0,
      stepWidth,
      this.height,
    );
    gradient.addColorStop(0, "rgba(255, 0, 0, 0.5)");
    gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    this.offscreenGraphContext.fillStyle = gradient;

    this.offscreenGraphContext.fillRect(
      this.width - stepWidth,
      y,
      stepWidth,
      this.height - y,
    );

    this.offscreenGraphContext.fillStyle = "red";
    this.offscreenGraphContext.fillRect(
      this.width - stepWidth,
      y,
      stepWidth,
      lineHeight,
    );

    this.context.clearRect(0, 0, this.width, this.height);
    this.context.drawImage(this.offscreenGraphContext.canvas, 0, 0);

    const end = performance.now();
    const delta = end - start;

    if (f < t) {
      a += delta;
      f++;
    }

    if (f === t) {
      console.debug(a / t);
      f++;
    }
  }
}

function setupStats() {

}

const stats = new Stats();

const onAnimationFrame = () => {
  stats.draw();

  const now = performance.now() / 1000;

  let deltaTime = now - previousTime;
  previousTime = now;

  if (deltaTime > MAX_DELTA_TIME) {
    deltaTime = MAX_DELTA_TIME;
  }

  timeAccumulator += deltaTime;

  while (timeAccumulator >= FIXED_DELTA_TIME) {
    fixedUpdate(FIXED_DELTA_TIME);
    timeAccumulator -= FIXED_DELTA_TIME;
  }

  const frameProgress = timeAccumulator / FIXED_DELTA_TIME;

  update(deltaTime, frameProgress);

  requestAnimationFrame(onAnimationFrame);
}

onAnimationFrame();

function fixedUpdate(fixedDeltaTime: number) {
  world.step();
}

function update(deltaTime: number, frameProgress: number) {
  renderer.render(scene, camera);
}

type Dispose = () => void;

function observeResize<T extends HTMLElement>(
  element: T,
  callback: (e: T) => void,
): Dispose {
  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry.target as T);
    });
  });

  resizeObserver.observe(element);

  return () => {
    resizeObserver.disconnect();
  };
}

function degToRad(deg: number) {
  return deg * Math.PI / 180;
}
