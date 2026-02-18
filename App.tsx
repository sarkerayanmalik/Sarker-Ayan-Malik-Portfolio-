
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer, Noise, ChromaticAberration, Scanline, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import Scene3D from './components/Scene3D';
import Overlay from './components/Overlay';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);

  useEffect(() => {
    // Force scroll to top on refresh for perfect animation synchronization
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative w-full bg-[#000000] selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* 3D Engine Layer - High Fidelity */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        <Canvas 
          shadows 
          gl={{ 
            antialias: true,
            powerPreference: "high-performance",
            alpha: false,
            stencil: false,
            depth: true,
            toneMapping: THREE.ACESFilmicToneMapping
          }}
          camera={{ position: [0, 2, 15], fov: 40 }}
        >
          <color attach="background" args={['#010101']} />
          <Suspense fallback={null}>
            <Scene3D />
            <EffectComposer multisampling={8}>
              <Bloom 
                intensity={0.45} 
                luminanceThreshold={0.88} 
                luminanceSmoothing={0.25} 
                mipmapBlur 
              />
              <Noise opacity={0.03} />
              <Scanline opacity={0.01} />
              <Vignette eskil={false} offset={0.1} darkness={1.1} />
              <ChromaticAberration 
                offset={new THREE.Vector2(0.0004, 0.0004)} 
              />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>

      {/* Custom Boot Loader */}
      {!loaderFinished && <Loader onFinished={() => setLoaderFinished(true)} />}
      
      {/* Application Interface Overlay */}
      <div className={`relative z-10 w-full transition-all duration-1500 ease-out ${loaderFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
        <Overlay />
      </div>

      {/* Aesthetic Technical HUD - Corner Accents */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40">
        <div className="absolute top-10 left-10 w-32 h-[1px] bg-white/10" />
        <div className="absolute top-10 left-10 w-[1px] h-32 bg-white/10" />
        <div className="absolute bottom-10 right-10 w-32 h-[1px] bg-white/10" />
        <div className="absolute bottom-10 right-10 w-[1px] h-32 bg-white/10" />
      </div>

      <div className="fixed top-12 left-12 z-50 pointer-events-none hidden lg:block">
        <p className="text-[10px] font-mono text-cyan-400/40 uppercase tracking-[1em] font-black">Secure_Connection_Link_LOK</p>
      </div>

      <div className="fixed bottom-12 right-12 z-50 pointer-events-none hidden md:flex items-center gap-12">
        <div className="text-right">
          <p className="text-cyan-400 font-mono text-[11px] uppercase tracking-[0.8em] font-black">SYS_STATUS: OPTIMAL</p>
          <p className="text-white/30 font-mono text-[10px] uppercase tracking-[0.4em] mt-1 font-bold italic">NODE_AYAN_V1.3</p>
        </div>
        <div className="w-16 h-16 border-2 border-white/5 rounded-2xl flex items-center justify-center bg-slate-950/80 backdrop-blur-3xl relative overflow-hidden group shadow-[0_0_30px_rgba(6,182,212,0.1)]">
           <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/15 transition-colors duration-700" />
           <div className="w-3 h-3 bg-cyan-500 animate-pulse rounded-full shadow-[0_0_20px_#06b6d4] relative z-10" />
        </div>
      </div>
    </main>
  );
};

export default App;
