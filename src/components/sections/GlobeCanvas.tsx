"use client";

import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { Vector3 } from "three";

// Custom shader for a blue planet with realistic, filled continents
const PlanetMaterial = shaderMaterial(
  {
    color1: new THREE.Color("#07102a"), // deep blue for ocean
    color2: new THREE.Color("#183a6f"), // lighter blue for gradient
    continentColor: new THREE.Color("#3cc8ff"), // cyan-blue for continents
    lightPos: new Vector3(1.5, 2.5, 2.0),
    time: 0,
  },
  // vertex shader
  `varying vec2 vUv;
varying vec3 vNormal;
void main() {
  vUv = uv;
  vNormal = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
  // fragment shader
  `uniform vec3 color1;
uniform vec3 color2;
uniform vec3 continentColor;
uniform vec3 lightPos;
uniform float time;
varying vec2 vUv;
varying vec3 vNormal;

// Function for filled continent shapes (approximate, stylized)
float continentMask(vec2 uv) {
  // Rotate UV for animation
  float t = time * 0.08;
  vec2 ruv = vec2(
    0.5 + (uv.x - 0.5) * cos(t) - (uv.y - 0.5) * sin(t),
    0.5 + (uv.x - 0.5) * sin(t) + (uv.y - 0.5) * cos(t)
  );
  vec2 st = ruv * vec2(2.0, 1.0);
  float mask = 0.0;
  // North America
  mask += smoothstep(0.22, 0.0, length(st - vec2(0.32, 0.68)));
  // South America
  mask += smoothstep(0.14, 0.0, length(st - vec2(0.42, 0.38)));
  // Europe
  mask += smoothstep(0.11, 0.0, length(st - vec2(0.66, 0.7)));
  // Africa
  mask += smoothstep(0.18, 0.0, length(st - vec2(0.65, 0.48)));
  // Asia
  mask += smoothstep(0.28, 0.0, length(st - vec2(0.82, 0.65)));
  // Australia
  mask += smoothstep(0.09, 0.0, length(st - vec2(1.05, 0.32)));
  // Antarctica
  mask += smoothstep(0.18, 0.0, length(st - vec2(0.7, 0.03)));
  // Edges slightly rough for organic look
  mask *= 0.9 + 0.1 * sin(st.x * 24.0 + st.y * 18.0);
  return clamp(mask, 0.0, 1.0);
}

void main() {
  // Spherical gradient for ocean
  float grad = smoothstep(0.0, 1.0, vUv.y);
  vec3 base = mix(color1, color2, grad);

  // Lighting
  float light = dot(normalize(vNormal), normalize(lightPos));
  light = clamp(light, 0.3, 1.0);
  base *= light;

  // Continents
  float continents = continentMask(vUv);
  base = mix(base, continentColor, continents);

  // Subtle highlight
  float highlight = pow(max(dot(normalize(vNormal), vec3(0.5,1.0,1.0)), 0.0), 2.0);
  base += highlight * 0.13 * continentColor;

  gl_FragColor = vec4(base, 1.0);
}`
);
extend({ PlanetMaterial });

function AnimatedPlanet() {
  const ref = useRef<any>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.material.uniforms.time.value = state.clock.getElapsedTime();
      ref.current.rotation.y += 0.0025; // slow, continuous rotation
    }
  });
  return (
    <Sphere ref={ref} args={[1, 96, 96]} position={[0, -0.15, 0]}>
      {/* @ts-ignore */}
      <planetMaterial attach="material" />
    </Sphere>
  );
}

export default function GlobeCanvas() {
  // Slightly crop the bottom and add a soft CSS glow
  return (
    <div style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: "32%",
      pointerEvents: "none",
      zIndex: 10,
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        left: "50%",
        bottom: 0,
        transform: "translateX(-50%)",
        width: "90%",
        height: "60px",
        background: "radial-gradient(ellipse at center, #00d8ff44 0%, transparent 80%)",
        filter: "blur(12px)",
        zIndex: 1
      }} />
      <Canvas camera={{ position: [0, 0, 3], fov: 42 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 2, 5]} intensity={1.1} />
        <AnimatedPlanet />
      </Canvas>
    </div>
  );
}
