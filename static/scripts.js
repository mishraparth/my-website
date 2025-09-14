// 🎬 Hide loading screen after page load
window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  if (loader) loader.style.display = 'none';
});

// 🎥 Setup Three.js scene
const canvas = document.getElementById('threeCanvas');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, 500);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
camera.position.z = 5;

// 💠 Rotating cube
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// 💡 Lighting
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// 🌌 Particle system
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 500;
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({
  color: 0x00ffff,
  size: 0.05,
  sizeAttenuation: true
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// 🔁 Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  particles.rotation.y += 0.002;
  renderer.render(scene, camera);
}
animate();

// 📱 Responsive canvas resize (optional)
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / 500;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, 500);
});
