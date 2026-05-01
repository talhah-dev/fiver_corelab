"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const cardUrl = new URL("./card.glb", import.meta.url).href;
const lanyardTextureUrl = new URL("./lanyard.png", import.meta.url).href;

function canUseWebGL() {
  if (typeof window === "undefined" || !window.WebGLRenderingContext) {
    return false;
  }

  const canvas = document.createElement("canvas");
  const context =
    canvas.getContext("webgl2") ||
    canvas.getContext("webgl") ||
    canvas.getContext("experimental-webgl");

  return Boolean(context);
}

export default function Lanyard({
  position = [0, 0, 20],
  gravity = [0, -40, 0],
  className = "",
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !canUseWebGL()) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(position[0], position[1], position[2]);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambientLight = new THREE.AmbientLight(0xf4ffe7, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x9bff00, 2.2);
    keyLight.position.set(4, 6, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1.4);
    fillLight.position.set(-5, 2, 8);
    scene.add(fillLight);

    const texture = new THREE.TextureLoader().load(lanyardTextureUrl);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 1);

    const cordCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.2, 3.2, 0),
      new THREE.Vector3(-0.8, 1.4, 0.25),
      new THREE.Vector3(-0.35, 0.15, 0),
      new THREE.Vector3(0, -0.7, 0),
      new THREE.Vector3(0.35, 0.15, 0),
      new THREE.Vector3(0.8, 1.4, 0.25),
      new THREE.Vector3(1.2, 3.2, 0),
    ]);
    const cordGeometry = new THREE.TubeGeometry(cordCurve, 72, 0.045, 10, false);
    const cordMaterial = new THREE.MeshStandardMaterial({
      color: 0x9bff00,
      map: texture,
      roughness: 0.48,
      metalness: 0.08,
    });
    const cord = new THREE.Mesh(cordGeometry, cordMaterial);
    group.add(cord);

    const loader = new GLTFLoader();
    let card = null;

    loader.load(
      cardUrl,
      (gltf) => {
        card = gltf.scene;
        card.scale.setScalar(2.1);
        card.position.set(0, -1.85, 0);
        card.rotation.set(0.12, 0, 0);
        group.add(card);
      },
      undefined,
      () => {
        const fallbackGeometry = new THREE.BoxGeometry(2.2, 3.2, 0.08);
        const fallbackMaterial = new THREE.MeshStandardMaterial({
          color: 0xf4ffe7,
          roughness: 0.34,
          metalness: 0.12,
        });
        card = new THREE.Mesh(fallbackGeometry, fallbackMaterial);
        card.position.set(0, -1.85, 0);
        group.add(card);
      },
    );

    const pointer = new THREE.Vector2(0, 0);
    const onPointerMove = (event) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    mount.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    let frameId = 0;
    const clock = new THREE.Clock();
    const gravityPull = Math.min(Math.abs(gravity[1] ?? -40) / 40, 1.6);

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y += (pointer.x * 0.22 - group.rotation.y) * 0.04;
      group.rotation.x += (-pointer.y * 0.12 - group.rotation.x) * 0.04;
      group.position.y = Math.sin(elapsed * 1.35) * 0.08 * gravityPull;

      if (card) {
        card.rotation.z = Math.sin(elapsed * 1.2) * 0.035;
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      mount.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      scene.traverse((object) => {
        if (object.isMesh) {
          object.geometry?.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material?.dispose();
          }
        }
      });
      texture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [gravity, position]);

  return (
    <section
      className={`relative h-[620px] overflow-hidden bg-[#071607] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,255,0,0.14),transparent_52%)]" />
      <div ref={mountRef} className="relative h-full w-full" />
    </section>
  );
}
