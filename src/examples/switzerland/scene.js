// default scene loaded in src/engine/engine.js
import {
  AmbientLight,
  BackSide,
  Clock,
  HemisphereLight,
  LoadingManager,
  Mesh,
  MeshBasicMaterial,
  PointLight,
  Scene,
  SphereBufferGeometry,
  TextureLoader,
  Vector3,
} from "three";

import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader.js";

// Assets
const skyBoxTextureFile = require("./assets/images/skybox.jpg");
let woodenFloorTextureFile = require("./assets/images/floor.jpg");
let plantTextureFile1 = require("./assets/images/plant_blad.png");
let plantTextureFile2 = require("./assets/images/plant_tak_0.png");
let plantTextureFile3 = require("./assets/images/plant_tak.png");

// Utils
const clock = new Clock();
const textureLoader = new TextureLoader();
const scene = new Scene();

// Skybox
const skyBoxTexture = textureLoader.load(skyBoxTextureFile);
const skyBoxSphere = new SphereBufferGeometry(1200, 380, 380);
const skyBoxMesh = new MeshBasicMaterial({
  side: BackSide,
  map: skyBoxTexture,
});
const skyBox = new Mesh(skyBoxSphere, skyBoxMesh);
scene.add(skyBox);

// Models
let logoFile = require("./assets/models/logo.dae");
let logo;
let roomFile = require("./assets/models/room.dae");
let room;

const loadingManager = new LoadingManager(function () {
  scene.add(logo);
  scene.add(room);
});

const loader = new ColladaLoader(loadingManager);

loader.load(logoFile, function (collada) {
  logo = collada.scene;
  logo.scale.set(0.02, 0.02, 0.02);
  logo.position.set(80, -10, 60);

  logo.Update = () => {
    logo.rotateOnAxis(new Vector3(0, 0, 1), 0.004);
    logo.position.y = Math.cos(clock.getElapsedTime()) * 3 - 10;
  };
});

loader.load(roomFile, function (collada) {
  room = collada.scene;
  room.position.set(0, -20, 0);
});

// Lights
const ambientLight = new AmbientLight(0xe8e8e8, 0.2);
scene.add(ambientLight);

const hemiLight = new HemisphereLight(0xffeeb1, 0x080820, 0.6);
scene.add(hemiLight);

const ceilingLight = new PointLight(0xffffff, 0.5, 500);
ceilingLight.position.set(0, 30, 0);
ceilingLight.castShadow = true;
scene.add(ceilingLight);

// Export
export { scene };
