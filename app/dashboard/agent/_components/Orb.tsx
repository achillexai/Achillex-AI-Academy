"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

interface OrbProps {
  currentVolume: number;
  isSessionActive: boolean;
}

const Orb: React.FC<OrbProps> = ({ currentVolume, isSessionActive }) => {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const ballRef = useRef<THREE.Mesh | null>(null);
  const originalPositionsRef = useRef<any | null>(null);
  const noise = createNoise3D();

  useEffect(() => {
    initViz();
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isSessionActive && ballRef.current) {
      updateBallMorph(ballRef.current, currentVolume);
    } else if (
      !isSessionActive &&
      ballRef.current &&
      originalPositionsRef.current
    ) {
      resetBallMorph(ballRef.current, originalPositionsRef.current);
    }
  }, [currentVolume, isSessionActive]);

  const initViz = () => {
    const scene = new THREE.Scene();
    const group = new THREE.Group();
    const camera = new THREE.PerspectiveCamera(20, 1, 1, 100);
    camera.position.set(0, 0, 100);
    camera.lookAt(scene.position);

    const icosahedronGeometry = new THREE.IcosahedronGeometry(14, 8);
    const gradientTexture = createGradientTexture();
    const lambertMaterial = new THREE.MeshLambertMaterial({
      map: gradientTexture,
      wireframe: true,
      emissive: new THREE.Color(0xe0ffff), // Light cyan
      emissiveIntensity: 0.4,
      color: new THREE.Color(0xffffff), // White base color
    });

    scene.add(camera);
    sceneRef.current = scene;
    groupRef.current = group;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const outElement = document.getElementById("out");
    if (outElement) {
      outElement.innerHTML = ""; // Clear any existing renderer
      outElement.appendChild(renderer.domElement);

      // Set renderer size to match container width
      const width = outElement.clientWidth;
      renderer.setSize(width, width);

      // Style the canvas element to maintain aspect ratio
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.objectFit = "contain";
    }

    rendererRef.current = renderer;

    const ball = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
    ball.position.set(0, 0, 0);
    ballRef.current = ball;

    // Store the original positions of the vertices
    originalPositionsRef.current =
      ball.geometry.attributes.position.array.slice();

    group.add(ball);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Increased intensity
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0x00e5ff); // Changed light color to cyan
    spotLight.intensity = 1.2; // Increased intensity
    spotLight.position.set(-10, 40, 20);
    spotLight.lookAt(ball.position);
    spotLight.castShadow = true;
    scene.add(spotLight);

    scene.add(group);

    render();
  };

  const createGradientTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (!ctx) return new THREE.Texture();

    const gradient = ctx.createLinearGradient(0, 0, 256, 256);
    gradient.addColorStop(0, "#FFFFFF"); // Pure white
    gradient.addColorStop(0.3, "#E0FFFF"); // Light cyan
    gradient.addColorStop(0.7, "#B0E2FF"); // Lighter blue
    gradient.addColorStop(1, "#87CEEB"); // Sky blue

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
  };

  const render = () => {
    if (
      !groupRef.current ||
      !ballRef.current ||
      !cameraRef.current ||
      !rendererRef.current ||
      !sceneRef.current
    ) {
      return;
    }

    groupRef.current.rotation.y += 0.003;
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    requestAnimationFrame(render);
  };

  const onWindowResize = () => {
    if (!cameraRef.current || !rendererRef.current) return;

    const outElement = document.getElementById("out");
    if (outElement) {
      const width = outElement.clientWidth;
      rendererRef.current.setSize(width, width);

      cameraRef.current.aspect = 1;
      cameraRef.current.updateProjectionMatrix();
    }
  };

  const updateBallMorph = (mesh: THREE.Mesh, volume: number) => {
    const geometry = mesh.geometry as THREE.BufferGeometry;
    const positionAttribute = geometry.getAttribute("position");

    for (let i = 0; i < positionAttribute.count; i++) {
      const vertex = new THREE.Vector3(
        positionAttribute.getX(i),
        positionAttribute.getY(i),
        positionAttribute.getZ(i)
      );

      const offset = 14;
      const amp = 2.5;
      const time = window.performance.now();
      vertex.normalize();
      const rf = 0.000001; // Increase for faster morphing, decrease for slower
      const distance =
        offset +
        volume * 4 +
        noise(
          vertex.x + time * rf * 7,
          vertex.y + time * rf * 8,
          vertex.z + time * rf * 9
        ) *
          amp *
          volume;
      vertex.multiplyScalar(distance);

      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    positionAttribute.needsUpdate = true;
    geometry.computeVertexNormals();
  };

  const resetBallMorph = (
    mesh: THREE.Mesh,
    originalPositions: Float32Array
  ) => {
    const geometry = mesh.geometry as THREE.BufferGeometry;
    const positionAttribute = geometry.getAttribute("position");

    for (let i = 0; i < positionAttribute.count; i++) {
      positionAttribute.setXYZ(
        i,
        originalPositions[i * 3],
        originalPositions[i * 3 + 1],
        originalPositions[i * 3 + 2]
      );
    }

    positionAttribute.needsUpdate = true;
    geometry.computeVertexNormals();
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div id="out" className="aspect-square w-full"></div>
    </div>
  );
};

export default Orb;
