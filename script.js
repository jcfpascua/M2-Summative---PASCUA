const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xd2b48c });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

const wallMaterial = new THREE.MeshBasicMaterial({ color: 0x00008b, side: THREE.DoubleSide });
const backWallGeometry = new THREE.PlaneGeometry(10, 5);
const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
backWall.position.set(0, 2.5, -5);
scene.add(backWall);

const leftWallGeometry = new THREE.PlaneGeometry(10, 5);
const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
leftWall.rotation.y = Math.PI / 2;
leftWall.position.set(-5, 2.5, 0);
scene.add(leftWall);

const rightWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
rightWall.rotation.y = -Math.PI / 2;
rightWall.position.set(5, 2.5, 0);
scene.add(rightWall);

const studyTableGeometry = new THREE.BoxGeometry(2, 2, 1);
const studyTableMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const studyTable = new THREE.Mesh(studyTableGeometry, studyTableMaterial);
studyTable.position.set(3, 0.1, -2); // Positioned on the right side
scene.add(studyTable);

const chairGeometry = new THREE.BoxGeometry(0.5, 2.5, 0.5);
const chairMaterial = new THREE.MeshBasicMaterial({ color: 0x654321 });
const chair = new THREE.Mesh(chairGeometry, chairMaterial);
chair.position.set(3, 0.2, -2.5); 
scene.add(chair);

const carpetGeometry = new THREE.BoxGeometry(3, 0.75, 2);
const carpetMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const carpet = new THREE.Mesh(carpetGeometry, carpetMaterial);
carpet.position.set(0, 1, 4);
scene.add(carpet);

const headboardGeometry = new THREE.BoxGeometry(2, 2.5, 0.2);
const headboardMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 });
const headboard = new THREE.Mesh(headboardGeometry, headboardMaterial);
headboard.position.set(0, 0.5, -1.6);
scene.add(headboard);

const footboardGeometry = new THREE.BoxGeometry(2, 1.5, 3.2);
const footboardMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 });
const footboard = new THREE.Mesh(footboardGeometry, footboardMaterial);
footboard.position.set(0, 0.5, -0.4);
scene.add(footboard);

const pillowGeometry = new THREE.BoxGeometry(2, 1.5, 1.5);
const pillowMaterial = new THREE.MeshBasicMaterial({ color: 0xfffff0 });
const pillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
pillow.position.set(0, 0.6, -1);
scene.add(pillow);

const windowWidth = 10; 
const windowHeight = 2.5; 
const windowGeometry = new THREE.PlaneGeometry(windowWidth, windowHeight);
const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x87ceeb, side: THREE.DoubleSide });

const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
window1.position.set(0, 2.3, -5);
scene.add(window1);

const roofGeometry = new THREE.PlaneGeometry(10, 10);
const roofMaterial = new THREE.MeshBasicMaterial({ color: 0xd2b48c });
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.rotation.x = Math.PI / 2;
roof.position.set(0, 5, 0);
scene.add(roof);

const lampStandGeometry = new THREE.CylinderGeometry(0.01, 0.1, 1);
const lampStandMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const lampStand = new THREE.Mesh(lampStandGeometry, lampStandMaterial);
lampStand.position.set(-2, 0.75, -2);
scene.add(lampStand);

const lampBaseGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.3);
const lampBaseMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const lampBase = new THREE.Mesh(lampBaseGeometry, lampBaseMaterial);
lampBase.position.set(-2, 0.15, -2);
scene.add(lampBase);

const lampShadeGeometry = new THREE.ConeGeometry(0.3, 0.5);
const lampShadeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const lampShade = new THREE.Mesh(lampShadeGeometry, lampShadeMaterial);
lampShade.position.set(-2, 1.25, -2);
lampShade.rotation.x = Math.PI;
scene.add(lampShade);

camera.position.set(0, 2, 5); 
camera.lookAt(0, 2, 0); 

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
