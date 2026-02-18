
import React, { useEffect, useState } from 'react';

const BOOT_LOGS = [
  "BIOS: Secure Boot Enabled",
  "INIT: Loading Kernel v6.12.0-secure",
  "NET: Initializing Cisco Routing Table...",
  "CLOUD: Establishing AWS VPC Tunnel...",
  "SEC: Loading STRIDE Threat Profiles...",
  "DATA: Mounting Neo4j Knowledge Graph...",
  "UI: Rendering Neural Interface...",
  "IDENTITY: Verifying Credentials..."
];

const Loader: React.FC<{ onFinished: () => void }> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isWelcome, setIsWelcome] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          setIsWelcome(true);
          setTimeout(onFinished, 1800);
          return 100;
        }
        return p + (p < 85 ? 1 : 2);
      });
    }, 20);

    const logTimer = setInterval(() => {
      setLogIndex(i => (i + 1) % BOOT_LOGS.length);
    }, 300);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center p-6 font-mono overflow-hidden">
      {!isWelcome ? (
        <div className="w-full max-w-md animate-in fade-in duration-500">
          <div className="flex justify-between items-end mb-2">
            <div className="space-y-1">
              <p className="text-cyan-500 text-[10px] uppercase tracking-widest animate-pulse font-bold">System Initialization</p>
              <h2 className="text-white text-lg font-bold">SARKER_AYAN_MALIK_OS</h2>
            </div>
            <span className="text-cyan-500 text-2xl font-black">{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden border border-white/10 mb-6">
            <div 
              className="h-full bg-cyan-500 shadow-[0_0_15px_#06b6d4] transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="bg-black/60 border border-white/5 p-4 rounded-lg h-32 flex flex-col justify-end overflow-hidden">
            <div className="space-y-1">
               {BOOT_LOGS.slice(0, logIndex + 1).map((log, i) => (
                 <p key={i} className="text-[10px] text-white/40 leading-none">
                   <span className="text-cyan-900 pr-2">[{new Date().getMilliseconds()}]</span>
                   {log}
                 </p>
               ))}
               <p className="text-[10px] text-cyan-500 animate-pulse">_</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-4 animate-in zoom-in-95 fade-in duration-700">
           <div className="relative inline-block">
             <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 animate-pulse" />
             <h1 className="relative text-5xl md:text-8xl font-cyber font-black text-white tracking-[0.2em] uppercase">
               WELCOME
             </h1>
           </div>
           <div className="h-[2px] w-48 bg-cyan-500 mx-auto mt-4 animate-all duration-1000 scale-x-150" />
        </div>
      )}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
};

export default Loader;
