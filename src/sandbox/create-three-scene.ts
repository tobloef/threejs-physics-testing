import * as THREE from "three";
import {degToRad} from "../utils/deg-to-rad.ts";
import {green, grey, red} from "../textures/grids.ts";
import {setWorldSpaceUvs} from "../utils/three/set-world-space-uvs.ts";
import {RigidBody} from "@dimforge/rapier3d";
import {observeResize} from "../utils/observe-resize.ts";

const RAPIER = await import("@dimforge/rapier3d");

export function createThreeScene() {
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
  scene.add(floor);

  const spinningCube = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.1, 0.1),
    gridRedMat,
  );
  spinningCube.position.set(0, 4.5, 4.5);
  scene.add(spinningCube);

  setWorldSpaceUvs(floor);

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
  let ySize = 10;
  let zSize = 10;

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
        setWorldSpaceUvs(cubeMesh)
        scene.add(cubeMesh);

        cubes.push({
          body: rigidBody,
          mesh: cubeMesh,
        });
      }
    }
  }

  return {
    world,
    cubes,
    spinningCube,
    renderer,
    scene,
    camera,
  }
}