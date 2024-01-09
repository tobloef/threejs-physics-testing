import {Quaternion, Vector3} from "three";
import {FrequencyGraph, Graph, GraphOld, StopwatchGraph, TimeGraph} from "./utils/graph/graph.ts";
import {createThreeScene} from "./sandbox/create-three-scene.ts";

const {world, camera, scene, renderer, cubes, spinningCube} = createThreeScene();

const MAX_DELTA_TIME = 1 / 10;
const FIXED_DELTA_TIME = 1 / 30;
let prevCubeInfo: Array<[Vector3, Quaternion]>;
const interpolatePhysics = true;

world.timestep = FIXED_DELTA_TIME;
let previousTime = 0;
let timeAccumulator = 0;

const stats = {
  fps: new FrequencyGraph({
    style: {
      color: "orange",
    },
    bounds: {
      y: {
        min: 0,
        max: 130,
      },
      timeMs: 2000,
    }
  }),
  update: new StopwatchGraph({
    style: {
      color: "red",
    },
    bounds: {
      y: {
        min: 0,
        max: 5,
      },
      timeMs: 2000,
    }
  }),
  fixedUpdate: new StopwatchGraph({
    style: {
      color: "green",
    },
    bounds: {
      y: {
        min: 0,
        max: 10,
      },
      timeMs: 2000,
    }
  }),
}

document.body.appendChild(stats.update.canvas);
stats.update.canvas.style.position = "fixed";
stats.update.canvas.style.top = "0";
stats.update.canvas.style.right = "0";
stats.update.canvas.style.width = "300px";
stats.update.canvas.style.height = "150px";

document.body.appendChild(stats.fixedUpdate.canvas);
stats.fixedUpdate.canvas.style.position = "fixed";
stats.fixedUpdate.canvas.style.bottom = "0";
stats.fixedUpdate.canvas.style.right = "0";
stats.fixedUpdate.canvas.style.width = "300px";
stats.fixedUpdate.canvas.style.height = "150px";

document.body.appendChild(stats.fps.canvas);
stats.fps.canvas.style.position = "fixed";
stats.fps.canvas.style.bottom = "0";
stats.fps.canvas.style.left = "0";
stats.fps.canvas.style.width = "300px";
stats.fps.canvas.style.height = "150px";

const onAnimationFrame = () => {
  const now = performance.now() / 1000;

  let deltaTime = now - previousTime;
  previousTime = now;

  if (deltaTime > MAX_DELTA_TIME) {
    deltaTime = MAX_DELTA_TIME;
  }

  timeAccumulator += deltaTime;

  while (timeAccumulator >= FIXED_DELTA_TIME) {
    stats.fixedUpdate.start();
    fixedUpdate(FIXED_DELTA_TIME);
    stats.fixedUpdate.stop();
    timeAccumulator -= FIXED_DELTA_TIME;
  }

  const frameProgress = timeAccumulator / FIXED_DELTA_TIME;

  stats.update.start();
  update(deltaTime, frameProgress);
  stats.update.stop();

  stats.fps.measure();

  requestAnimationFrame(onAnimationFrame);
}

let f = 0;

onAnimationFrame();

function fixedUpdate(fixedDeltaTime: number) {
  for (let i = 0; i < cubes.length; i++) {
    const cube = cubes[i]!;

    const rapierPos = cube.body.translation();
    const rapierRot = cube.body.rotation();
    const threePos = new Vector3(rapierPos.x, rapierPos.y, rapierPos.z);
    const threeRot = new Quaternion(rapierRot.x, rapierRot.y, rapierRot.z, rapierRot.w);

    if (prevCubeInfo === undefined) {
      prevCubeInfo = [];
    }

    prevCubeInfo[i] = [
      threePos,
      threeRot,
    ]

    cube.body.applyImpulse({
      x: Math.sin(f * 2 + 2) * fixedDeltaTime,
      y: Math.sin(f * 7) * 3 * fixedDeltaTime,
      z: 0,
    }, true);
  }

  world.step();
}

function update(deltaTime: number, frameProgress: number) {
  f += deltaTime;

  if (prevCubeInfo !== undefined) {
    for (let i = 0; i < cubes.length; i++) {
      const cube = cubes[i]!;
      const [prevPos, prevRot] = prevCubeInfo[i]!;

      const rapierPos = cube.body.translation();
      const rapierRot = cube.body.rotation();
      const threePos = new Vector3(rapierPos.x, rapierPos.y, rapierPos.z);
      const threeRot = new Quaternion(rapierRot.x, rapierRot.y, rapierRot.z, rapierRot.w);

      if (interpolatePhysics) {
        cube.mesh.position.lerpVectors(prevPos, threePos, frameProgress);
        cube.mesh.quaternion.slerpQuaternions(prevRot, threeRot, frameProgress)
      } else {
        cube.mesh.position.copy(threePos);
        cube.mesh.quaternion.copy(threeRot);
      }
    }
  }

  spinningCube.rotation.y += deltaTime * 2;
  spinningCube.rotation.x += deltaTime * 2;

  renderer.render(scene, camera);
}
