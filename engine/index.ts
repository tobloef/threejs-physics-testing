import * as THREE from 'three';

export async function engine() {
  const canvasElement = document.querySelector('canvas');

  if (!canvasElement) {
    throw new Error('No canvas element found!');
  }

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
  });

  const camera = new THREE.PerspectiveCamera(75);

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
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;

  function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
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