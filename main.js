import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

console.log(THREE);
const canvas = document.getElementById('canvas')

// scene
const scene = new THREE.Scene();

// sizes
const sizes = {
    width: innerWidth,
    height: innerHeight,
};

const camera = new THREE.PerspectiveCamera(
    75, sizes.width / sizes.height, 0.1, 3000
);
camera.position.set(0, 500, 1000);
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true,});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

// envimage
const urls = [
    '/envimage/right.png',
    '/envimage/left.png',
    '/envimage/up.png',
    '/envimage/down.png',
    '/envimage/front.png',
    '/envimage/back.png',
]

const loader = new THREE.CubeTextureLoader();
scene.background = loader.load(urls);

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;


function animate(){
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}

animate();


