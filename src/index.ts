import * as THREE from "three";
import {
  green,
  grey,
  red,
} from "./textures/grids.ts";
import type { RigidBody } from "@dimforge/rapier3d";
import chroma from "chroma-js";

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

const PIXEL_RATIO = window.devicePixelRatio ?? 1;

type DeepPartial<T extends object> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type RemoveUndefined<T> = {
  [K in keyof T as T[K] extends undefined ? never : K]: T[K];
};

function removeUndef<T>(obj: T): RemoveUndefined<T> {
  const newObj: any = {};

  for (const key in obj) {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

type StatsOptions = {
  graphColor: string;
  lineThickness: number;
  background: boolean;
  backgroundColor?: string;
  graphStyle: "line" | "filled" | "gradient",
  width: number;
  height: number;
  bufferSize: number;
}

const DEFAULT_STATS_OPTIONS: StatsOptions = {
  graphColor: "green",
  graphStyle: "gradient",
  lineThickness: 2,
  background: false,
  width: 500,
  height: 300,
  bufferSize: 250,
}

class Graph {
  public options: StatsOptions;
  public data: number[] = [];

  private context: CanvasRenderingContext2D;
  private offscreenGraphContext: OffscreenCanvasRenderingContext2D;
  private readonly deviceWidth: number;
  private readonly deviceHeight: number;
  private readonly gradient: CanvasGradient;

  constructor(options?: DeepPartial<StatsOptions>) {
    this.options = {
      ...DEFAULT_STATS_OPTIONS,
      ...removeUndef(options),
    };

    if (this.options?.background && this.options.backgroundColor === undefined) {
      const chromeGraphColor = chroma(this.options.graphColor);
      this.options.backgroundColor = chromeGraphColor.darken(1.5).css();
    }

    this.deviceWidth = this.options.width * PIXEL_RATIO;
    this.deviceHeight = this.options.height * PIXEL_RATIO;

    const container = this.createContainerElement();
    const canvas = this.createCanvasElement(container);
    this.context = this.createCanvasContext(canvas);
    this.offscreenGraphContext = this.createOffscreenCanvasContext();
    this.gradient = this.createGradient();
  }

  private createContainerElement(): HTMLElement {
    const container = document.createElement("div");

    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.zIndex = "10000";

    document.body.appendChild(container);

    return container;
  }

  private createCanvasElement(container: HTMLElement = document.body): HTMLCanvasElement {
    const canvas = document.createElement("canvas");

    canvas.width = this.deviceWidth;
    canvas.height = this.deviceHeight;
    canvas.style.width = `${this.deviceWidth / PIXEL_RATIO}px`;
    canvas.style.height = `${this.deviceHeight / PIXEL_RATIO}px`;

    container.appendChild(canvas);

    return canvas;
  }

  private createCanvasContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const context = canvas.getContext("2d");

    if (context === null) {
      throw new Error("Canvas context could not be created.");
    }

    context.font = `bold ${12 * PIXEL_RATIO}px monospace`;

    return context;
  }

  private createOffscreenCanvasContext(): OffscreenCanvasRenderingContext2D {
    const offscreenGraphCanvas = new OffscreenCanvas(this.deviceWidth, this.deviceHeight);
    const offscreenGraphContext = offscreenGraphCanvas.getContext("2d");

    if (offscreenGraphContext === null) {
      throw new Error("Failed to set up stats panel, offscreen canvas context could not be created.");
    }

    this.offscreenGraphContext = offscreenGraphContext;
    this.offscreenGraphContext.imageSmoothingEnabled = false;

    return offscreenGraphContext;
  }

  private createGradient(): CanvasGradient {
    const gradient = this.offscreenGraphContext.createLinearGradient(
      0,
      0,
      0,
      this.deviceHeight,
    );

    const chromeGraphColor = chroma(this.options.graphColor);

    gradient.addColorStop(0, chromeGraphColor.alpha(0.5).css());
    gradient.addColorStop(1, chromeGraphColor.alpha(0).css());

    return gradient;
  }

  private testing() {
    if (window.frame === undefined) {
      window.frame = 0;
      window.height = 0;
    }
    window.frame = window.frame + 1;
    const metaHeight = this.deviceHeight * 2;
    window.height = Math.sin(window.frame / 200) * (metaHeight / 2) + (metaHeight / 2)
    const y = Math.sin(window.frame / 40) * (window.height / 2) + (window.height / 2);
    this.data.push(y);

    if (this.data.length > this.options.bufferSize) {
      this.data.shift();
    }
  }

  draw() {
    this.testing();

    this.offscreenGraphContext.clearRect(0, 0, this.deviceWidth, this.deviceHeight);

    this.offscreenGraphContext.beginPath();
    this.offscreenGraphContext.strokeStyle = this.options.graphColor;
    this.offscreenGraphContext.lineWidth = this.options.lineThickness * PIXEL_RATIO;

    const segmentWidth = (this.deviceWidth / this.options.bufferSize);

    let lastX = 0;
    let lastY = 0;

    for (let i = this.data.length - 1; i >= 0; i--) {
      const x = this.deviceWidth - (segmentWidth * ((this.data.length - i)));
      const y = this.deviceHeight - (this.data[i] ?? 0) - this.offscreenGraphContext.lineWidth / 2

      if (i === this.data.length - 1) {
        this.offscreenGraphContext.moveTo(
          this.deviceWidth,
          y,
        );
      }

      /*if (this.options.graphStyle !== "line") {
        this.offscreenGraphContext.fillStyle = this.options.graphStyle === "gradient" ? this.gradient : this.options.graphColor;
        this.offscreenGraphContext.fillRect(
          x,
          y,
          segmentWidth,
          this.deviceHeight - y,
        );
      }*/

      this.offscreenGraphContext.lineTo(
        x,
        y,
      );

      lastX = x;
      lastY = y;
    }

    if (this.options.graphStyle !== "line") {
      this.offscreenGraphContext.lineTo(
        lastX - this.offscreenGraphContext.lineWidth,
        lastY,
      );
      this.offscreenGraphContext.lineTo(
        lastX - this.offscreenGraphContext.lineWidth,
        this.deviceHeight + this.offscreenGraphContext.lineWidth,
      );
      this.offscreenGraphContext.lineTo(
        this.deviceWidth + this.offscreenGraphContext.lineWidth,
        this.deviceHeight + this.offscreenGraphContext.lineWidth,
      );
      this.offscreenGraphContext.lineTo(
        this.deviceWidth + this.offscreenGraphContext.lineWidth,
        lastY,
      );
    }

    this.offscreenGraphContext.fillStyle = this.options.graphStyle === "gradient"
      ? this.gradient
      : this.options.graphColor;

    this.offscreenGraphContext.stroke();
    if (this.options.graphStyle !== "line") {
      this.offscreenGraphContext.fill()
      this.offscreenGraphContext.clearRect(
        lastX - this.offscreenGraphContext.lineWidth * 2,
        0,
        this.offscreenGraphContext.lineWidth * 2,
        this.deviceHeight,
      );
    }

    this.context.clearRect(0, 0, this.deviceWidth, this.deviceHeight);

    if (this.options.background && this.options.backgroundColor) {
      this.context.fillStyle = this.options.backgroundColor;
      this.context.fillRect(0, 0, this.deviceWidth, this.deviceHeight);
    }

    this.context.drawImage(this.offscreenGraphContext.canvas, 0, 0);
  }
}

function setupStats() {

}

const stats = new Graph();

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
