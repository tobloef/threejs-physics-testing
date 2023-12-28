import * as THREE from 'three';
import {green, grey} from "./textures/grids.ts";

export async function engine() {
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

  const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    gridGreenMat
  );
  cube1.position.y = 2;
  cube1.position.x = 2;
  cube1.castShadow = true;
  scene.add(cube1);

  const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    gridGreenMat
  );
  cube2.position.y = 2;
  cube2.position.x = -2;
  cube2.castShadow = true;
  scene.add(cube2);

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

  setUvs2(cube1);
  setUvs2(cube2);
  setUvs2(floor);

  function animate() {
    [
      cube1,
      cube2,
    ].forEach((mesh) => {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    });
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
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