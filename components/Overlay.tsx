
import React from 'react';

const TechCard: React.FC<{ title: string; subtitle?: string; children: React.ReactNode; className?: string; icon?: string }> = ({ title, subtitle, children, className = "", icon = "::" }) => (
  <div className={`group relative backdrop-blur-3xl bg-slate-950/70 border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] transition-all duration-700 hover:bg-slate-900/80 hover:border-cyan-500/50 ${className}`}>
    <div className="absolute top-0 right-0 p-6 text-[10px] font-mono text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors uppercase select-none tracking-[0.4em] font-black">
      {icon} CORE_UNIT_DATA
    </div>
    <div className="mb-10">
      <h3 className="text-white font-cyber font-black text-xl md:text-2xl tracking-tighter uppercase mb-2 group-hover:text-cyan-400 transition-colors duration-500 glow-white-soft">{title}</h3>
      {subtitle && <p className="text-[11px] font-mono text-cyan-400/70 uppercase tracking-[0.5em] font-black">{subtitle}</p>}
      <div className="w-16 h-[2px] bg-cyan-500/30 mt-6 group-hover:w-full transition-all duration-1000 ease-out shadow-[0_0_10px_#06b6d4]" />
    </div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = "cyan" }) => (
  <span className={`px-4 py-2 text-[10px] font-mono border border-${color}-500/20 text-${color}-400/90 rounded-md uppercase tracking-[0.1em] bg-${color}-500/10 mr-3 mb-3 inline-block hover:border-${color}-500 hover:text-${color}-200 transition-all duration-300 cursor-default font-black shadow-[0_0_5px_rgba(6,182,212,0.1)]`}>
    {children}
  </span>
);

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-32 max-w-6xl">
    <div className="flex items-center gap-8 mb-10">
      <div className="w-24 h-[1px] bg-cyan-500 shadow-[0_0_20px_#06b6d4]" />
      <span className="font-mono text-cyan-400 text-xs font-black uppercase tracking-[1.2em] glow-cyan-subtle">{subtitle}</span>
    </div>
    <h2 className="text-6xl md:text-[10vw] lg:text-[8.5vw] font-cyber font-black tracking-tighter uppercase leading-[0.85] py-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 glow-white-heavy">
      {title}
    </h2>
  </div>
);

const Overlay: React.FC = () => {
  return (
    <div className="relative text-white font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 00 HERO - APPLE COMMAND CENTER */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 lg:px-48 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
             <div className="flex items-center gap-10 text-cyan-400">
               <span className="text-[11px] font-mono tracking-[0.8em] uppercase font-black opacity-80 italic glow-cyan-subtle">SYSLOG: CONNECTION_STABLE // AUTH_LEVEL_4</span>
               <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.2)]" />
             </div>
             
             <h1 className="text-[14vw] md:text-[11vw] lg:text-[9.5vw] font-black font-cyber leading-[0.75] tracking-tighter relative group cursor-default">
               SARKER<br/>
               <span className="text-transparent text-outline-cyan opacity-90 group-hover:opacity-100 transition-opacity duration-700 glow-cyan-hover">AYAN</span><br/>
               MALIK
               <div className="absolute -left-16 top-0 w-1 h-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 blur-2xl hidden 2xl:block" />
             </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-24 border-t border-white/10 mt-24">
            <div className="lg:col-span-8 space-y-12">
              <div className="backdrop-blur-3xl bg-slate-950/40 border-l-[4px] border-cyan-500 p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(6,182,212,0.05)]">
                <p className="text-2xl md:text-5xl text-white font-extralight leading-[1.2] tracking-tighter">
                  <span className="text-cyan-400 font-mono text-[12px] uppercase tracking-[0.6em] font-black block mb-8 underline underline-offset-8 decoration-cyan-500/50 glow-cyan-subtle">Primary Mission:</span>
                  Architecting <span className="text-white font-bold italic glow-white-soft">Secure Scalability</span> for global cloud environments. Mastering the synergy of <span className="text-cyan-400/90 font-bold glow-cyan-subtle">Network Resilience</span> and <span className="text-white font-bold glow-white-soft">Defensive Security</span>.
                </p>
              </div>
              <div className="flex flex-wrap gap-12 font-mono text-[12px] text-white/80 uppercase tracking-[0.6em] font-black">
                <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_15px_#06b6d4]" />
                  GEO: DARWIN_AU
                </div>
                <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <div className="w-2.5 h-2.5 bg-white/40 rounded-full" />
                  KEY: SECURE_AUTH_09
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 TECHNICAL ARSENAL */}
      <section className="min-h-screen py-64 px-6 md:px-24 lg:px-48 bg-slate-950/20 flex items-center">
        <div className="max-w-[1600px] mx-auto w-full">
          <SectionTitle title="Technical Arsenal" subtitle="The Capabilities Matrix" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <TechCard title="Networking Cluster" subtitle="L1-L7 Architecture" icon="NET_01">
              <div className="flex flex-wrap pt-4">
                {['Cisco Routing', 'Switching', 'VLAN Segment', 'NAT Logic', 'ACL Security', 'Wireshark', 'Packet Tracer', 'VPN Tunneling'].map(s => <Badge key={s}>{s}</Badge>)}
              </div>
            </TechCard>
            
            <TechCard title="Cloud Infrastructure" subtitle="AWS Enterprise Ops" icon="AWS_02">
              <div className="flex flex-wrap pt-4">
                {['AWS VPC', 'EC2 Cluster', 'RDS Instances', 'S3 Storage', 'IAM RBAC', 'Auto Scaling', 'Multi-AZ', 'Lambda'].map(s => <Badge key={s} color="blue">{s}</Badge>)}
              </div>
            </TechCard>

            <TechCard title="Defensive Security" subtitle="Threat Neutralization" icon="SEC_03">
              <div className="flex flex-wrap pt-4">
                {['STRIDE Modeling', 'Firewall Policy', 'SMBv3 Hardening', 'Encryption', 'SIEM Platform', 'NIST Framework', 'Vuln Scans'].map(s => <Badge key={s} color="red">{s}</Badge>)}
              </div>
            </TechCard>

            <TechCard title="Systems Engineering" subtitle="Full Stack Protocol" icon="DEV_04">
              <div className="flex flex-wrap pt-4">
                {['Java (OOP)', 'Python', 'SQL Hub', 'Neo4j Graph', 'MongoDB', 'React Native', 'Supabase', 'REST API'].map(s => <Badge key={s} color="purple">{s}</Badge>)}
              </div>
            </TechCard>
          </div>
        </div>
      </section>

      {/* 02 PROJECT LOGS - GLOW ENHANCED */}
      <section className="min-h-screen py-64 px-6 md:px-24 lg:px-48 bg-black/60 relative">
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-48 border-b border-white/10 pb-20 gap-10">
            <h2 className="text-[12vw] md:text-[9vw] font-cyber font-black tracking-tighter uppercase leading-none opacity-20 select-none glow-white-heavy">Project Logs</h2>
            <div className="text-right">
              <p className="font-mono text-[11px] text-cyan-400 uppercase tracking-[1em] font-black italic mb-2 glow-cyan-subtle">Operational Data</p>
              <p className="font-mono text-[11px] text-white/40 uppercase tracking-[0.8em]">SEC_ARCHIVE_V1.3</p>
            </div>
          </div>

          <div className="space-y-48">
            {/* AWS Case Study */}
            <div className="group relative">
              <div className="absolute -left-12 top-0 h-full w-[2px] bg-cyan-500 opacity-40 group-hover:opacity-100 group-hover:shadow-[0_0_15px_#06b6d4] transition-all duration-700" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                <div className="lg:col-span-5 space-y-10">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-cyan-400 text-[12px] uppercase tracking-[0.6em] font-black underline underline-offset-[14px] decoration-2 glow-cyan-subtle">UNIT_01</span>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-cyber font-black leading-tight uppercase tracking-tighter group-hover:text-cyan-400 transition-colors duration-500 glow-white-soft group-hover:glow-cyan-hover">AWS Cloud Infrastructure</h3>
                  <div className="flex flex-wrap gap-3 pt-6">
                    <Badge>Multi-Tier VPC</Badge><Badge>RDS CLUSTER</Badge><Badge>IAM-SEC</Badge>
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-12">
                  <p className="text-2xl md:text-4xl text-white/80 font-extralight leading-[1.3] tracking-tight group-hover:text-white transition-colors duration-700 glow-white-soft">
                    Deployed a high-availability enterprise environment on AWS utilizing segmented subnets and zero-trust IAM policies. Engineered for maximum resilience with automated multi-region failover.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-10 border border-white/10 bg-slate-950/60 rounded-xl hover:border-cyan-500/40 transition-all shadow-xl group/card">
                      <p className="text-cyan-400 font-mono text-[10px] font-black mb-6 tracking-[0.4em] uppercase underline underline-offset-4 decoration-1 glow-cyan-subtle group-hover/card:glow-cyan-heavy">Sec_Hardening</p>
                      <p className="text-white/70 text-[12px] leading-relaxed uppercase tracking-[0.2em] font-mono group-hover/card:text-white">WAF L7 // NACL // KMS // VPC FLOW</p>
                    </div>
                    <div className="p-10 border border-white/10 bg-slate-950/60 rounded-xl hover:border-cyan-500/40 transition-all shadow-xl group/card">
                      <p className="text-cyan-400 font-mono text-[10px] font-black mb-6 tracking-[0.4em] uppercase underline underline-offset-4 decoration-1 glow-cyan-subtle group-hover/card:glow-cyan-heavy">Data_Ops</p>
                      <p className="text-white/70 text-[12px] leading-relaxed uppercase tracking-[0.2em] font-mono group-hover/card:text-white">RDS NORMAL // MULTI-AZ // BACKUP_LOK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NoSQL System */}
            <div className="group relative">
               <div className="absolute -left-12 top-0 h-full w-[2px] bg-purple-500 opacity-40 group-hover:opacity-100 group-hover:shadow-[0_0_15px_#a855f7] transition-all duration-700" />
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                <div className="lg:col-span-5 space-y-10">
                   <div className="flex items-center gap-6">
                    <span className="font-mono text-purple-400 text-[12px] uppercase tracking-[0.6em] font-black underline underline-offset-[14px] decoration-2 glow-purple-subtle">UNIT_02</span>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-cyber font-black leading-tight uppercase tracking-tighter group-hover:text-purple-400 transition-colors duration-500 glow-white-soft group-hover:glow-purple-hover">OSINT Intelligence</h3>
                  <div className="flex flex-wrap gap-3 pt-6">
                    <Badge color="purple">Neo4j Graph</Badge><Badge color="purple">MongoDB</Badge><Badge color="purple">ACH LOGIC</Badge>
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-12">
                  <p className="text-2xl md:text-4xl text-white/80 font-extralight leading-[1.3] tracking-tight group-hover:text-white transition-colors duration-700 glow-white-soft">
                    Next-gen risk analysis engine mapping complex global data relationships through high-fidelity graph databases. Leveraged ACH frameworks to eliminate cognitive intelligence bias.
                  </p>
                  <div className="p-10 bg-purple-950/30 border border-purple-500/30 rounded-xl overflow-hidden relative group/box shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent translate-x-[-100%] group-hover/box:translate-x-[100%] transition-transform duration-[4s] ease-in-out" />
                    <p className="font-mono text-[11px] text-purple-300 uppercase tracking-[0.5em] animate-pulse relative z-10 font-black glow-purple-subtle">SYSLOG: ANALYZING_RELATION_LINK_V9 // STATUS: PROCESSING</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 OPERATIONAL TIMELINE */}
      <section className="min-h-screen py-64 px-6 md:px-24 lg:px-48 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <SectionTitle title="Operational Timeline" subtitle="The Professional Evolution" />
          
          <div className="space-y-64 relative">
            <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-white/10 to-transparent hidden md:block shadow-[0_0_10px_rgba(6,182,212,0.2)]" />
            
            {/* Role 1 */}
            <div className="relative pl-12 md:pl-40 group">
               <div className="absolute left-[-2px] md:left-[10px] top-0 w-6 h-6 bg-cyan-500 rounded-full shadow-[0_0_25px_#06b6d4] group-hover:scale-125 transition-transform duration-500 border-4 border-black" />
               <div className="flex flex-col mb-12">
                  <h3 className="text-5xl md:text-8xl font-cyber font-black uppercase tracking-tighter leading-[0.85] group-hover:text-cyan-400 transition-colors duration-500 mb-6 glow-white-soft">Network Engineer Intern</h3>
                  <p className="text-cyan-400 font-mono text-sm uppercase font-black tracking-[0.6em] mt-4 bg-cyan-500/10 px-6 py-2 rounded-full border border-cyan-500/30 self-start glow-cyan-subtle shadow-[0_0_15px_rgba(6,182,212,0.1)]">Nazmec // 2025 - PRESENT</p>
               </div>
               <div className="text-white font-extralight space-y-10 text-2xl md:text-4xl max-w-5xl leading-snug tracking-tight group-hover:text-white transition-colors duration-700 glow-white-soft">
                  <p>Developing LAN/WAN solutions within Cisco ecosystems. Executing real-time vulnerability scans and optimizing routing protocols for high-security environments.</p>
                  <div className="flex flex-wrap gap-4 pt-6">
                     <Badge>Vulnerability Scan</Badge><Badge>Cisco R&S</Badge><Badge>Agile Infrastructure</Badge>
                  </div>
               </div>
            </div>

            {/* Role 2 */}
            <div className="relative pl-12 md:pl-40 group opacity-60 hover:opacity-100 transition-all duration-700">
               <div className="absolute left-[-2px] md:left-[10px] top-0 w-6 h-6 bg-white/40 rounded-full group-hover:bg-cyan-500 transition-colors duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_25px_#06b6d4] border-4 border-black" />
               <div className="flex flex-col mb-12">
                  <h3 className="text-5xl md:text-8xl font-cyber font-black uppercase tracking-tighter leading-[0.85] mb-6 glow-white-soft">Backend Developer</h3>
                  <p className="text-white/60 font-mono text-sm uppercase tracking-[0.6em] mt-4 bg-white/5 px-6 py-2 rounded-full border border-white/10 self-start">iMigrateEMC // Mar 2025 - Dec 2025</p>
               </div>
               <div className="text-white/60 space-y-10 text-2xl md:text-4xl max-w-5xl leading-snug font-extralight tracking-tight group-hover:text-white transition-colors duration-700">
                  <p>Engineered server-side architectures using <span className="text-white font-bold glow-white-soft">Supabase</span> and <span className="text-white font-bold glow-white-soft">React Native</span>. Focused on high-performance API endpoints and automated database triggers.</p>
                  <div className="flex flex-wrap gap-4 pt-6">
                     <Badge color="purple">Supabase-DB</Badge><Badge color="purple">Expo-Native</Badge><Badge color="purple">API Design</Badge>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 ACADEMIC BASE */}
      <section className="min-h-screen py-64 px-6 md:px-24 lg:px-48 bg-black/80">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-32 lg:gap-48">
          <div className="space-y-20">
             <h2 className="text-6xl font-cyber font-black tracking-tighter uppercase border-b-[12px] border-cyan-500 inline-block pb-8 leading-none glow-white-soft">Academic Base</h2>
             <div className="p-14 md:p-20 bg-slate-900/40 border border-white/10 rounded-3xl space-y-12 backdrop-blur-3xl relative group overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <h3 className="text-5xl md:text-6xl font-black font-cyber relative z-10 tracking-tighter glow-white-soft">Bachelor of IT</h3>
               <p className="text-cyan-400 font-mono text-[12px] uppercase tracking-[0.6em] font-black relative z-10 italic glow-cyan-subtle">Core Specialized: Networking & Security</p>
               <div className="space-y-4 relative z-10">
                 <p className="text-white font-black text-3xl glow-white-soft">Federation University AU</p>
                 <p className="text-white/60 font-mono text-xs tracking-[0.5em] uppercase font-bold">Class of 2025</p>
               </div>
               <div className="pt-16 border-t border-white/10 space-y-10 relative z-10">
                 <p className="text-xs text-white/50 uppercase tracking-[0.5em] font-black font-mono">Knowledge Matrix Validated:</p>
                 <p className="text-2xl text-white/80 leading-snug italic font-extralight tracking-tight glow-white-soft">Network Defense, Advanced Cloud Engineering, Defensive Cyber Strategy, IT Management.</p>
               </div>
             </div>
          </div>

          <div className="space-y-20">
            <h2 className="text-6xl font-cyber font-black tracking-tighter uppercase border-b-[12px] border-cyan-500 inline-block pb-8 leading-none glow-white-soft">Verified Certs</h2>
            <div className="grid grid-cols-1 gap-8">
               {[
                 { title: "AWS ACADEMY GRADUATE", sub: "CLOUD CLUSTER CLOUD_09" },
                 { title: "CISCO NETWORKING CORE", sub: "ROUTING & SWITCHING EXPERTISE" },
                 { title: "PYTHON SOFTWARE LOGIC", sub: "HACKERRANK CERTIFIED" },
                 { title: "ACADEMIC EXCELLENCE", sub: "FEDUNI HONORS LIST" },
                 { title: "RSA REGULATORY COMPLIANCE", sub: "SECURITY PROTOCOL PASS" }
               ].map((cert, i) => (
                 <div key={i} className="group flex items-center justify-between p-10 border border-white/10 bg-slate-950/60 hover:bg-slate-900/80 hover:border-cyan-500/60 transition-all duration-500 cursor-default rounded-2xl shadow-xl">
                    <div className="space-y-3">
                      <p className="font-black font-cyber text-xl group-hover:text-cyan-400 transition-colors uppercase tracking-tight glow-white-soft group-hover:glow-cyan-hover">{cert.title}</p>
                      <p className="text-[11px] font-mono text-white/60 uppercase tracking-[0.4em] font-black group-hover:text-white/90 transition-colors">{cert.sub}</p>
                    </div>
                    <div className="w-16 h-16 border-2 border-white/10 flex items-center justify-center font-mono text-[12px] text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 font-black transition-all rounded-full shadow-2xl">
                      PASS
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 FOOTER */}
      <footer className="py-64 px-6 md:px-24 lg:px-48 border-t border-white/10 bg-black relative">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-32 relative z-10">
          <div className="space-y-20">
            <h2 className="text-[14vw] md:text-[11rem] font-cyber font-black opacity-10 leading-none select-none tracking-tighter glow-white-soft">AYAN MALIK</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 font-mono text-[12px] text-white/60 uppercase tracking-[0.8em] font-black">
              <div className="space-y-8">
                 <p className="text-cyan-400 tracking-[0.6em] underline underline-offset-[16px] decoration-4 glow-cyan-subtle">IDENTITY_NODE</p>
                 <p className="text-white/90">SARKER AYAN MALIK</p>
                 <p className="lowercase tracking-widest text-white/60">sarkerayanmalik@gmail.com</p>
                 <p className="text-white font-black text-xl tracking-normal glow-white-soft">+61 413 269 957</p>
              </div>
              <div className="space-y-8">
                 <p className="text-cyan-400 tracking-[0.6em] underline underline-offset-[16px] decoration-4 glow-cyan-subtle">TERMINAL_LOK</p>
                 <p className="text-white/90">DARWIN_CITY_AU</p>
                 <p>STATUS: OPTIMIZED</p>
                 <p>SECURE_SESSION: TRUE</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-10 w-full md:w-[500px]">
            <a href="https://linkedin.com/in/sarker-ayan-malik" target="_blank" className="relative group px-12 py-14 bg-cyan-600 text-black font-cyber font-black text-2xl text-center overflow-hidden transition-all active:scale-95 shadow-[0_40px_80px_-20px_rgba(6,182,212,0.5)] rounded-2xl">
              <span className="relative z-10 uppercase tracking-widest">Connect_LinkedIn</span>
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
            </a>
            <a href="https://github.com/sarkerayanmalik" target="_blank" className="px-12 py-14 border-[2px] border-cyan-500/30 font-cyber font-black text-2xl text-center hover:bg-cyan-500/10 hover:border-cyan-500 transition-all hover:shadow-[0_40px_80px_-25px_rgba(6,182,212,0.2)] rounded-2xl">Source_Data_Archive</a>
          </div>
        </div>
        
        <div className="max-w-[1600px] mx-auto mt-64 pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 opacity-40 group">
           <p className="text-[11px] font-mono uppercase tracking-[2.5em] font-black italic glow-cyan-subtle">System_v1.3_Production_Locked</p>
           <div className="flex items-center gap-12">
              <div className="w-64 h-[2px] bg-cyan-500/20 group-hover:w-[400px] group-hover:bg-cyan-500 transition-all duration-1500 shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
              <div className="w-5 h-5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_15px_#06b6d4]" />
           </div>
        </div>
      </footer>
      
      <style>{`
        .text-outline-cyan {
          -webkit-text-stroke: 2.5px rgba(6, 182, 212, 0.55);
        }
        @media (max-width: 768px) {
          .text-outline-cyan { -webkit-text-stroke: 1.2px rgba(6, 182, 212, 0.55); }
        }

        .glow-cyan-subtle {
          text-shadow: 0 0 8px rgba(6, 182, 212, 0.4);
        }
        .glow-cyan-heavy {
          text-shadow: 0 0 15px rgba(6, 182, 212, 0.8), 0 0 30px rgba(6, 182, 212, 0.4);
        }
        .glow-cyan-hover:hover {
          text-shadow: 0 0 20px rgba(6, 182, 212, 0.9), 0 0 40px rgba(6, 182, 212, 0.5);
          color: #06b6d4;
        }
        .glow-purple-subtle {
          text-shadow: 0 0 8px rgba(168, 85, 247, 0.4);
        }
        .glow-purple-hover:hover {
          text-shadow: 0 0 20px rgba(168, 85, 247, 0.9), 0 0 40px rgba(168, 85, 247, 0.5);
          color: #a855f7;
        }
        .glow-white-soft {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }
        .glow-white-heavy {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Overlay;
