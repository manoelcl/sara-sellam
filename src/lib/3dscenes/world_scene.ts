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
	Vector2,
	WebGLRenderer
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new Scene();

const axis = new Object3D();

interface Rot {
	[name: string]: Vector2;
}

const camera_rotations: Rot = {
	'Santiago de Compostela': new Vector2(-1.1, -0.25),
	Constantine: new Vector2(-0.925, -0.04),
	Ginebra: new Vector2(-1.14, -0.05)
};

let currentCity: String = '';
let targetRotation: Vector2 = new Vector2();
export const setCity = (name: String) => {
	if (currentCity === name) return;
	let rot = get_rot_from_string(name);
	targetRotation.x = rot.x;
	targetRotation.y = rot.y;
};

const get_rot_from_string = (name: String) => camera_rotations[name as keyof typeof String];

const camera = new PerspectiveCamera(12, 2 /*window.innerWidth / window.innerHeight*/, 0.1, 1000);
camera.position.set(0, -0.3, 2.1);
camera.rotation.x = 0;
axis.add(camera);
setCity('Santiago de Compostela');
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
	if (axis.rotation.x != targetRotation.x) {
		axis.rotation.x += (-axis.rotation.x + targetRotation.x) * 0.1;
	}
	if (axis.rotation.y != targetRotation.y) {
		axis.rotation.y += (-axis.rotation.y + targetRotation.y) * 0.1;
	}
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
