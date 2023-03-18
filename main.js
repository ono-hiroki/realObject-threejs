import * as THREE from 'three';

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


renderer.render(scene, camera);

