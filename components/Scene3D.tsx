
import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, Stars, Instances, Instance, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InfrastructureMatrix: React.FC = () => {
  const mainGroup = useRef<THREE.Group>(null);
  const cloudRef = useRef<THREE.Group>(null);
  const networkRef = useRef<THREE.Group>(null);
  const networkMaterialRef = useRef<THREE.MeshStandardMaterial>(null);
  const securityRef = useRef<THREE.Group>(null);
  const dataRef = useRef<THREE.Group>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { viewport } = useThree();

  // Optimized Grid Points for high-perf instancing
  const gridPoints = useMemo(() => {
    const points = [];
    for (let x = -20; x < 20; x += 4) {
      for (let z = -20; z < 20; z += 4) {
        points.push({
          pos: new THREE.Vector3(x, -4, z),
          phase: Math.random() * Math.PI * 2,
          speed: 0.5 + Math.random() * 0.5
        });
      }
    }
    return points;
  }, []);

  useEffect(() => {
    if (!mainGroup.current || !cameraRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          ease: "none"
        },
      });

      // Cinematic Travel Path
      tl.to(cameraRef.current.position, { z: 4, y: 5, x: -3, duration: 2.5, ease: "power2.inOut" })
        .to(networkRef.current!.rotation, { y: Math.PI * 0.7, duration: 2 }, 0)
        .to(cloudRef.current!.position, { y: 1, z: 2, duration: 2.5 }, 0.8)
        .to(cloudRef.current!.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 2.5 }, 0.8);

      tl.to(cameraRef.current.position, { x: 6, y: 6, z: 10, duration: 3, ease: "power2.inOut" })
        .to(securityRef.current!.position, { y: 2, z: 4, duration: 2.5 }, 1.8)
        .to(securityRef.current!.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 2.5 }, 1.8)
        .to(cloudRef.current!.position, { x: -10, y: 4, opacity: 0.2, duration: 2.5 }, 1.8);

      tl.to(cameraRef.current.position, { x: 0, y: 12, z: 15, duration: 4, ease: "power3.inOut" })
        .to(cameraRef.current.rotation, { x: -Math.PI * 0.25, duration: 4 }, 3.5)
        .to(dataRef.current!.position, { y: -1, z: 6, duration: 3 }, 4)
        .to(dataRef.current!.scale, { x: 1.8, y: 1.8, z: 1.8, duration: 3 }, 4);

      tl.to(cameraRef.current.position, { y: 3, z: 22, x: 0, duration: 3, ease: "power2.out" })
        .to(cameraRef.current.rotation, { x: 0, duration: 3 }, "-=3");
    });

    return () => ctx.revert();
  }, [viewport.width]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Animate Network Grid Pulse
    if (networkMaterialRef.current) {
      // Dynamic Pulse logic for material
      const pulseIntensity = 8 + Math.sin(t * 2) * 4;
      networkMaterialRef.current.emissiveIntensity = pulseIntensity;
    }

    if (networkRef.current) {
      networkRef.current.rotation.y = t * 0.04;
      // Individual node movement simulation via group children if we were using refs, 
      // but here we apply a subtle global jitter to the core grid
      networkRef.current.position.y = -0.05 + Math.sin(t * 0.5) * 0.05;
    }

    if (cloudRef.current) {
        cloudRef.current.position.y += Math.sin(t * 1.2) * 0.005;
        cloudRef.current.rotation.z = Math.cos(t * 0.4) * 0.15;
    }

    if (dataRef.current) {
        dataRef.current.rotation.y = t * 0.08;
        dataRef.current.rotation.x = Math.sin(t * 0.15) * 0.1;
    }

    if (securityRef.current) {
        securityRef.current.rotation.y = t * 0.15;
        securityRef.current.position.y += Math.cos(t * 1.8) * 0.002;
    }
  });

  return (
    <group ref={mainGroup}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 2, 18]} fov={35} />
      
      {/* 01: Networking Core Infrastructure - Optimized Pulse */}
      <group ref={networkRef}>
        <Instances range={gridPoints.length}>
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshStandardMaterial 
            ref={networkMaterialRef}
            color="#00f2ff" 
            emissive="#00f2ff" 
            emissiveIntensity={12} 
            metalness={1} 
            roughness={0} 
          />
          {gridPoints.map((point, i) => (
            <Instance 
              key={i} 
              position={point.pos} 
              scale={Math.random() + 0.8} 
            />
          ))}
        </Instances>
        <gridHelper args={[80, 40, "#00f2ff", "#080808"]} position={[0, -4, 0]} opacity={0.08} transparent />
      </group>

      {/* 02: Cloud Nodes Architecture */}
      <group ref={cloudRef} position={[0, -30, -20]} scale={[0.1, 0.1, 0.1]}>
        <Float speed={4} rotationIntensity={1.5} floatIntensity={3}>
          <mesh>
            <boxGeometry args={[8, 0.2, 8]} />
            <meshStandardMaterial color="#050505" metalness={1} roughness={0.1} />
          </mesh>
          <mesh position={[0, 2, 0]}>
            <dodecahedronGeometry args={[2, 0]} />
            <MeshDistortMaterial 
              color="#00f2ff" 
              emissive="#00f2ff" 
              emissiveIntensity={4} 
              distort={0.5} 
              speed={4} 
              wireframe 
              transparent
              opacity={0.8}
            />
          </mesh>
          {/* Neural Connection Nodes with individual pulsing behavior */}
          {[[-3, 1.5, 3], [3, 2.5, -3], [-4, 0.8, -2], [2, 1, 4]].map((p, i) => (
            <mesh key={i} position={p as any}>
              <sphereGeometry args={[0.25, 32, 32]} />
              <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={6} />
            </mesh>
          ))}
        </Float>
      </group>

      {/* 03: Security Defensive Shielding */}
      <group ref={securityRef} position={[0, -40, -15]} scale={[0.1, 0.1, 0.1]}>
        <mesh>
          <torusGeometry args={[10, 0.08, 16, 100]} />
          <meshStandardMaterial color="#ff0055" emissive="#ff0055" emissiveIntensity={15} metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[9.9, 64]} />
          <meshStandardMaterial color="#ff0055" transparent opacity={0.05} wireframe />
        </mesh>
        <Float speed={6} rotationIntensity={3}>
           <mesh>
             <octahedronGeometry args={[3, 0]} />
             <meshStandardMaterial color="#ff0055" wireframe emissive="#ff0055" emissiveIntensity={3} transparent opacity={0.6} />
           </mesh>
        </Float>
      </group>

      {/* 04: Intelligence Synthesis Graph */}
      <group ref={dataRef} position={[0, -50, 8]} scale={[0.1, 0.1, 0.1]}>
         {Array.from({ length: 60 }).map((_, i) => (
           <group key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
             <mesh position={[Math.random() * 10, 0, 0]}>
               <boxGeometry args={[0.3, 0.3, 0.3]} />
               <meshStandardMaterial 
                  color={i % 2 === 0 ? "#00f2ff" : "#ff00ff"} 
                  emissive={i % 2 === 0 ? "#00f2ff" : "#ff00ff"} 
                  emissiveIntensity={4} 
                  metalness={1}
               />
             </mesh>
             <mesh rotation={[0, 0, Math.PI / 2]}>
               <cylinderGeometry args={[0.015, 0.015, 10]} />
               <meshStandardMaterial color="white" transparent opacity={0.08} />
             </mesh>
           </group>
         ))}
      </group>

      <Stars radius={200} depth={60} count={10000} factor={7} saturation={0} fade speed={3} />
      <Environment preset="night" />
      <ContactShadows opacity={0.5} scale={25} blur={3} far={5} />
    </group>
  );
};

const Scene3D: React.FC = () => {
  return (
    <>
      <fog attach="fog" args={['#010101', 5, 50]} />
      <InfrastructureMatrix />
      <ambientLight intensity={0.5} />
      <spotLight position={[30, 30, 20]} angle={0.2} penumbra={1} intensity={3} castShadow />
      <pointLight position={[-15, -15, -15]} color="#00f2ff" intensity={4} />
      <pointLight position={[15, 15, 15]} color="#ff00ff" intensity={1.5} />
    </>
  );
};

export default Scene3D;
