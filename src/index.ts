import * as THREE from 'three';
import * as CANNON from "cannon-es";
import {green, grey} from "./textures/grids.ts";

const canvasElement = document.querySelector('canvas');

if (!canvasElement) {
  throw new Error('No canvas element found!');
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
    false
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

function setUvs2(mesh: THREE.Mesh, scale: number = 1) {
  const pos = mesh.geometry.getAttribute('position');
  const nor = mesh.geometry.getAttribute('normal');
  const uvs = mesh.geometry.getAttribute('uv');

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

const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0),
  allowSleep: true,
});

const floorBody = new CANNON.Body({
  type: CANNON.Body.STATIC,
  shape: new CANNON.Plane(),
  quaternion: new CANNON.Quaternion().setFromEuler(
    degToRad(-90),
    0,
    0,
  ),
});
world.addBody(floorBody);

type Cube = {
  body: CANNON.Body,
  mesh: THREE.Mesh,
};

let cubes: Cube[] = [];

let xSize = 6;
let ySize = 6;
let zSize = 6

for (let x = 0; x < xSize; x++) {
  for (let y = 0; y < ySize; y++) {
    for (let z = 0; z < zSize; z++) {
      const scale = 0.5;

      const cubeBody = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Box(new CANNON.Vec3(scale / 2, scale / 2, scale / 2)),
        sleepSpeedLimit: 0.3,
      });
      cubeBody.position.set(
        x * scale - xSize/2 * scale,
        y * scale + 5,
        z * scale - zSize/2 * scale,
      );
      world.addBody(cubeBody);

      const cubeMesh = new THREE.Mesh(
        new THREE.BoxGeometry(scale, scale, scale),
        gridGreenMat,
      );
      cubeMesh.castShadow = true;
      cubeMesh.receiveShadow = true;
      setUvs2(cubeMesh)
      scene.add(cubeMesh);

      cubes.push({
        body: cubeBody,
        mesh: cubeMesh,
      });
    }
  }
}

function animate() {
  world.fixedStep();

  cubes.forEach((cube) => {
    cube.mesh.position.set(
      cube.body.position.x,
      cube.body.position.y,
      cube.body.position.z,
    );
    cube.mesh.quaternion.set(
      cube.body.quaternion.x,
      cube.body.quaternion.y,
      cube.body.quaternion.z,
      cube.body.quaternion.w,
    );
  });

  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

animate();

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
