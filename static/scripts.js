const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('threeCanvas'), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a rotating sphere
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x00ffff, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Lighting for a cool glow effect
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 3;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
// Smooth scrolling for navigation links within the page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic text animation in the hero section
document.addEventListener('DOMContentLoaded', (event) => {
    const dynamicText = document.getElementById('dynamicText');
    const textArray = [
        "A passionate tech enthusiast...",
        "Expert in Python, Java, C...",
        "Skilled in AI and cloud computing...",
        "Loves to create innovative projects..."
    ];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < textArray[textIndex].length) {
            dynamicText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(deleteText, 2000);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            dynamicText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, 50);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeText, 500);
        }
    }

    typeText();
});


