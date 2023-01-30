import {getColor} from "./values.js";
// Set up the renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("shapeCanvas") });
renderer.setSize(720, 480);
// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(60, 720 / 480, 0.1, 1000);
camera.position.z = -3;
const controls = new THREE.OrbitControls(camera,renderer.domElement);

// Create a cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x00000 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// Add the cube to the scene
scene.add(cube);

// Add a light to the scene
const light = new THREE.PointLight(0xffffff);
const light2 = new THREE.PointLight(0xffffff);
const light3 = new THREE.PointLight(0xffffff);
const light4 = new THREE.PointLight(0xffffff);

light.position.set(10, 10, 10);
light2.position.set(-10,-10,-10);
light3.position.set(-10,10,-10);
light4.position.set(10,-10,10);
scene.add(light);
scene.add(light2);
scene.add(light3);
scene.add(light4);

// Render the scene
function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.0025;
    cube.rotation.y += 0.0025;
    renderer.render(scene, camera);
    cubeMaterial.color.set(getColor())
}
render();