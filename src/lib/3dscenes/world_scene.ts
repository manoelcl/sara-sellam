import {
	AmbientLight,
	BoxGeometry,
	DirectionalLight,
	HemisphereLight,
	Mesh,
	MeshStandardMaterial,
	Object3D,
	PerspectiveCamera,
	Scene,
	WebGLRenderer
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new Scene();

const axis = new Object3D();

const camera = new PerspectiveCamera(12, 2 /*window.innerWidth / window.innerHeight*/, 0.1, 1000);
camera.position.set(0, -0.3, 2.1);
camera.rotation.x = 0;
axis.add(camera);
axis.rotation.x = -1.05;
axis.rotation.y = -0.2;
scene.add(axis);
const loader = new GLTFLoader();

const directionalLight = new DirectionalLight('white', 2);
directionalLight.position.set(0, 2, -1.3).normalize();
scene.add(directionalLight);
const ambientLight = new AmbientLight();
scene.add(ambientLight);

let renderer: WebGLRenderer;

function resizeCanvasToDisplaySize() {
	const canvas = renderer.domElement;
	// look up the size the canvas is being displayed
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;

	// adjust displayBuffer size to match
	if (canvas.width !== width || canvas.height !== height) {
		// you must pass false here or three.js sadly fights the browser
		renderer.setSize(width, height, false);
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	}
}
const animate = () => {
	renderer.render(scene, camera);
	resizeCanvasToDisplaySize();
	requestAnimationFrame(animate);
};

const resize = () => {
	renderer.setSize(1200, 900);
	camera.aspect = 1.33;
	camera.updateProjectionMatrix();
};

export const createScene = (el: HTMLCanvasElement, path: any) => {
	renderer = new WebGLRenderer({ antialias: true, canvas: el });
	renderer.setClearColor('0xfff', 0);
	animate();
	var loadedScene;
	console.log(path);
	loader.load(
		path,
		function (gltf) {
			loadedScene = gltf.scene;
			loadedScene.position.set(0, 0, 0);
			scene.add(loadedScene);
		},
		undefined,
		function (error) {
			console.error(error);
		}
	);
};

export const printName = (name: String) => {
	console.log(name);
};
