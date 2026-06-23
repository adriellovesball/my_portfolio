/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import avatarImg from "./assets/images/jeffrey_avatar_new.jpg";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Layout, 
  Palette, 
  Zap, 
  Layers, 
  ArrowRight,
  Plus,
  ArrowUpRight,
  Award,
  Trophy,
  Medal,
  Star,
  MapPin,
  Clock,
  Laptop,
  Code,
  Sparkles,
  Heart,
  Phone,
  Send,
  X,
  Check,
  Atom,
  Shield,
  Globe,
  Paintbrush,
  Network,
  Binary,
  Brain,
  LineChart,
  Terminal,
  FileText,
  Table,
  Presentation,
  Search,
  Keyboard
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    id: "web-music-player",
    title: "Web Music Player",
    short: "Interactive web music player.",
    description: "A sleek and responsive web music player application featuring an intuitive interface and smooth audio playback controls.",
    tech: ["React.js", "Audio API", "Tailwind CSS"],
    image: "https://iad.microlink.io/HPAtNheCPm89_hs42wc6pDdxYhCx34lI7D9_jmCO_H2NN1KfZlHkrkxZufcPQE8JbaPcWzq6otW9mhD-yNTVRg.png",
    color: "bg-[#2D5BFF]",
    link: "https://cray-wave.vercel.app"
  },
  {
    id: "weather-rest",
    title: "REST APIs Weather hub",
    short: "Precise location-aware weather client.",
    description: "A clean interface leveraging weather REST API endpoints, implementing reactive client cache, geolocation queries, and custom graphical dashboards with SVG chart systems.",
    tech: ["Next.js", "REST APIs", "Tailwind CSS"],
    image: "https://picsum.photos/seed/weather/800/600",
    color: "bg-[#39FF14]"
  },
  {
    id: "taskforge",
    title: "TaskForge Dashboard",
    short: "Visual sprint management workspace.",
    description: "A local planning space allowing developers to structure academic workflows, draft programming notes, and maintain study streak timers. Complete with rich reactive state.",
    tech: ["React.js", "JavaScript", "HTML/CSS"],
    image: "https://picsum.photos/seed/task/800/600",
    color: "bg-[#FF007F]"
  }
];

const SKILLS_CATEGORIES = {
  stack: [
    { name: "React.js", color: "text-[#00D8FF] bg-[#122A3A]", icon: Atom },
    { name: "Next.js", color: "text-white bg-[#222]", icon: Layers },
    { name: "Tailwind CSS", color: "text-[#38BDF8] bg-[#0F2D3A]", icon: Palette },
    { name: "TypeScript", color: "text-[#3178C6] bg-[#0E2435]", icon: Shield },
    { name: "JavaScript", color: "text-[#F7DF1E] bg-[#2F2C0B]", icon: Code },
    { name: "HTML5", color: "text-[#E34F26] bg-[#2F150E]", icon: Globe },
    { name: "CSS3", color: "text-[#1572B6] bg-[#0D202F]", icon: Paintbrush },
    { name: "REST APIs", color: "text-[#E23F5F] bg-[#2E0E18]", icon: Network }
  ],
  theories: [
    { name: "Computer Science", color: "text-[#A855F7] bg-[#240F3E]", icon: Binary },
    { name: "Problem Solving", color: "text-[#10B981] bg-[#00261A]", icon: Brain },
    { name: "Analytical Thinking", color: "text-[#F59E0B] bg-[#321E07]", icon: LineChart },
    { name: "Python Basics", color: "text-[#3776AB] bg-[#0F2231]", icon: Terminal }
  ],
  productivity: [
    { name: "Microsoft Word", color: "text-blue-400 bg-blue-950/40", icon: FileText },
    { name: "Microsoft Excel", color: "text-green-400 bg-green-950/40", icon: Table },
    { name: "PowerPoint", color: "text-orange-400 bg-orange-950/40", icon: Presentation },
    { name: "Research", color: "text-purple-400 bg-purple-950/40", icon: Search },
    { name: "Typing Speed", color: "text-pink-400 bg-pink-950/40", icon: Keyboard }
  ]
};

export default function App() {
  const [time, setTime] = useState("");
  const [activeSkillTab, setActiveSkillTab] = useState<"stack" | "theories" | "productivity">("stack");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  // Local message state
  const [senderName, setSenderName] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [sendingState, setSendingState] = useState<"idle" | "sent">("idle");

  // Keep a live local clock for Lagos, Nigeria (UTC+1)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      setTime(new Date().toLocaleTimeString("en-US", options));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("jeffadr46@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setSendingState("sent");
    // Generate a mailto link action as real action
    const mailtoUrl = `mailto:jeffadr46@gmail.com?subject=Hello%20from%20${encodeURIComponent(senderName)}&body=${encodeURIComponent(senderMessage)}`;
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setSendingState("idle");
      setSenderName("");
      setSenderMessage("");
      setContactOpen(false);
    }, 1200);
  };

  return (
    <div id="bento-root" className="min-h-screen bg-[#070708] text-[#F3F4F6] p-4 sm:p-6 md:p-12 lg:p-16 flex flex-col justify-center items-center">
      <div className="max-w-[1000px] w-full space-y-6">
        
        {/* Top Header Marquee Bar */}
        <div id="status-marquee" className="w-full flex flex-col sm:flex-row justify-between items-center bg-[#121214] border border-[#1e1e22] rounded-[1.25rem] px-5 py-3 gap-3 md:gap-0">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#39FF14]"></span>
            </span>
            <span className="font-mono text-xs text-stone-400 tracking-wider uppercase font-semibold">
              Open to Internships & entry-level roles
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-stone-400 font-semibold">
            <span className="flex items-center gap-1.5 ">
              <Clock className="w-3.5 h-3.5 text-[#39FF14]" />
              LAGOS, NG: {time || "00:00:00 AM"}
            </span>
          </div>
        </div>

        {/* TOP ROW: Profile picture and intro summary */}
        <div id="bento-hero-row" className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Avatar Card (Left) */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="md:col-span-4 bg-[#121214] border border-[#1e1e22] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center group relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-[#1e1e22] border border-[#2b2b31] text-[10px] uppercase font-mono tracking-wider font-bold px-3 py-1 rounded-full text-stone-400">
              Web Dev
            </div>
            <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-2 border-[#1e1e22] mb-5 bg-[#1c1c1f] relative group-hover:border-[#39FF14] transition-colors duration-300">
              <img 
                src={avatarImg} 
                alt="Jeffrey Adriel" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-2xl font-bold font-display tracking-tight text-white mb-1">
              Jeffrey Adriel Oleabhie
            </h1>
            <p className="text-[#39FF14] font-mono text-xs uppercase tracking-wider font-semibold">
              Front-End Engineer
            </p>
            <div className="flex gap-2.5 mt-5">
              <a 
                href="https://github.com/jeffadr46" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1c1c1f] hover:bg-white hover:text-black border border-[#28282d] transition-all"
                title="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://linkedin.com/in/jeffrey-adriel-oleabhie" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1c1c1f] hover:bg-white hover:text-black border border-[#28282d] transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <button 
                onClick={() => setContactOpen(true)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1c1c1f] hover:bg-[#39FF14] hover:text-black hover:border-transparent border border-[#28282d] transition-all cursor-pointer"
                title="Contact Mail"
              >
                <Mail className="w-4.5 h-4.5" />
              </button>
            </div>
          </motion.div>

          {/* Intro description bento card (Right) */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="md:col-span-8 bg-[#121214] border border-[#1e1e22] rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] tracking-widest text-[#39FF14] uppercase font-bold">
                  About Me / Profile
                </span>
                <Sparkles className="w-5 h-5 text-stone-500 group-hover:text-[#39FF14] transition-colors" />
              </div>
              <p className="text-lg md:text-xl font-medium text-stone-200 leading-relaxed font-sans">
                My name is <span className="text-white font-semibold underline decoration-2 decoration-[#39FF14] underline-offset-4">Jeffrey Adriel Oleabhie</span>, a motivated, detail-oriented Computer Science student in Covenant University. Possessing a solid foundation in computer literacy, web architectures, and basic programming, I am excited about creating fluid web interfaces. I'm actively looking to apply my technical skill sets to help build incredible digital products.
              </p>
            </div>

            {/* Interests Inner section */}
            <div className="mt-8 pt-6 border-t border-[#1e1e22] flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-stone-400 font-bold mr-1">
                Primary Interests:
              </span>
              <div className="flex flex-wrap gap-2">
                {["🎮 Computer Gaming", "💻 Coding & Tech", "🧠 Problem Solving", "🔍 Technical Research", "🏀 Basketball"].map((h) => (
                  <span 
                    key={h}
                    className="text-xs bg-[#19191c] border border-[#232328] font-medium text-stone-300 px-3.5 py-1.5 rounded-full"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* MIDDLE ROW: Experience Cards */}
        <div id="bento-experience-section" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Experience Card 1 - Entry level */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[#121214] border border-[#1e1e22] rounded-[2rem] p-8 relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#39FF14]">
                  Experience Block 01
                </span>
                <h3 className="text-xl font-bold font-display text-white mt-1">
                  Internship Seeker
                </h3>
              </div>
              <span className="text-xs font-mono font-bold bg-[#1d1d1f] border border-[#2b2b31] text-stone-300 px-3 py-1 rounded-full">
                Available Now
              </span>
            </div>
            
            <ul className="space-y-4 text-sm text-stone-400 font-sans">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#39FF14] shrink-0" />
                <span>Completed a suite of personal portfolio projects and reactive user interfaces showcasing modern styling structures.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#39FF14] shrink-0" />
                <span>Gained rigorous hands-on experience using Microsoft Office tools for analytical planning and reporting tasks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#39FF14] shrink-0" />
                <span>Developing custom scripting setups and exploring integration boundaries using standard client-side APIs.</span>
              </li>
            </ul>
          </motion.div>

          {/* Experience Card 2 - Academic pursuits */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[#121214] border border-[#1e1e22] rounded-[2rem] p-8 relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#2D5BFF]">
                  Experience Block 02
                </span>
                <h3 className="text-xl font-bold font-display text-white mt-1">
                  Covenant University Student
                </h3>
              </div>
              <span className="text-xs font-mono font-bold bg-[#1d1d1f] border border-[#2b2b31] text-stone-300 px-3 py-1 rounded-full">
                Ongoing
              </span>
            </div>
            
            <ul className="space-y-4 text-sm text-stone-400 font-sans">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2D5BFF] shrink-0" />
                <span>Developing core understanding of algorithms, structural computation, databases, and general software layouts.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2D5BFF] shrink-0" />
                <span>Participating in peer development sprints, reviewing coding schemas, and collaborating on systems homework.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2D5BFF] shrink-0" />
                <span>Maintained strong academic focus while simultaneously expanding practical knowledge of modern UI development.</span>
              </li>
            </ul>
          </motion.div>
          
        </div>

        {/* LOWER SECTION: Tools/Skills Card (Column 1) and Education timeline (Column 2) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* SKILLS CARD with interactive tabs (Spans 7 Cols) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-7 bg-[#121214] border border-[#1e1e22] rounded-[2rem] p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#39FF14]">
                  Skills & Tools Spectrum
                </span>
                <div className="flex bg-[#1a1a1d] border border-[#25252b] rounded-full p-1 gap-1">
                  {(["stack", "theories", "productivity"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveSkillTab(tab)}
                      className={`text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                        activeSkillTab === tab 
                          ? "bg-[#39FF14] text-black font-extrabold" 
                          : "text-stone-400 hover:text-white"
                      }`}
                    >
                      {tab === "stack" ? "Web" : tab === "theories" ? "Core" : "Office"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic skills space */}
              <div className="min-h-[140px] pt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSkillTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-wrap gap-2.5"
                  >
                    {SKILLS_CATEGORIES[activeSkillTab].map((skill) => {
                      const IconComponent = skill.icon;
                      return (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-2 text-sm font-semibold truncate px-4 py-2.5 rounded-2xl border border-transparent transition-all hover:scale-105 hover:shadow-md cursor-default ${skill.color}`}
                        >
                          <IconComponent className="w-4 h-4 shrink-0 opacity-80" />
                          <span>{skill.name}</span>
                        </span>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1e1e22] text-[11px] font-mono text-stone-500 leading-snug">
              Toggle tabs to explore full skill spectrum spanning standard web tech, academic computer science theories, and standard office management tools.
            </div>
          </motion.div>

          {/* EDUCATION & TIMELINE CARD (Spans 5 Cols) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-5 bg-[#121214] border border-[#1e1e22] rounded-[2rem] p-8 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-stone-400 block mb-6">
                Academic Journey
              </span>
              
              <div className="space-y-6 relative border-l-2 border-[#1e1e22] pl-5 ml-1">
                
                {/* School 1 */}
                <div className="relative group/edu">
                  <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#39FF14] border-2 border-[#121214]" />
                  <span className="text-[10px] font-mono text-[#39FF14] font-bold block">
                    2024 — PRESENT
                  </span>
                  <h4 className="text-base font-bold font-display text-white mt-1">
                    BSc. Computer Science
                  </h4>
                  <p className="text-xs text-stone-400 font-medium">
                    Covenant University <span className="text-stone-500">• In Progress</span>
                  </p>
                </div>

                {/* School 2 */}
                <div className="relative group/edu">
                  <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-stone-500 border-2 border-[#121214]" />
                  <span className="text-[10px] font-mono text-stone-400 font-bold block">
                    GRADUATED 2023
                  </span>
                  <h4 className="text-base font-bold font-display text-white mt-1">
                    WAEC O’Level Certification
                  </h4>
                  <p className="text-xs text-stone-400 font-medium">
                    Deeper Life High School, Benin City
                  </p>
                  <p className="text-[10px] text-stone-500 mt-1 uppercase font-semibold tracking-wider font-mono">
                    WAEC O’Level Completed
                  </p>
                </div>

              </div>
            </div>

            <div className="pt-6 text-[10px] font-mono text-stone-500">
              Covenant University is one of Africa's leading institutions for system programming, research, and technical leadership.
            </div>
          </motion.div>

        </div>

        {/* WORK / SELECTED PROJECTS SEGMENT */}
        <div id="bento-works-row" className="bg-[#121214] border border-[#1e1e22] rounded-[2rem] p-8">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#1e1e22]">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#39FF14]">
                Tactile Experience
              </span>
              <h2 className="text-2xl font-bold font-display text-white mt-1">
                Personal Web Craft
              </h2>
            </div>
            <span className="font-mono text-xs text-stone-500 tracking-wider">
              {PROJECTS.length} Showcases • Click to explore details
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROJECTS.map((proj) => (
              <motion.div
                key={proj.id}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setSelectedProject(proj)}
                className="bg-[#19191c] border border-[#222227] rounded-[1.5rem] p-5 cursor-pointer flex flex-col justify-between hover:border-[#1e1e22] group"
              >
                <div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[#242429] bg-stone-900 relative">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5 flex gap-1">
                      {proj.tech.slice(0, 2).map((t) => (
                        <span key={t} className="text-[9px] font-mono uppercase bg-black/70 py-1 px-2.5 rounded-full backdrop-blur-xs font-semibold text-stone-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-[#39FF14] transition-colors flex items-center justify-between">
                    {proj.title}
                    <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-[#39FF14] transition-all" />
                  </h3>
                  <p className="text-xs text-stone-400 mt-1.5 leading-relaxed font-sans">
                    {proj.short}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#222227] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-stone-500 font-bold uppercase">
                    Click card for deep spec
                  </span>
                  <span className="text-[10px] font-mono text-[#39FF14] font-bold bg-[#152e18] px-2 py-0.5 rounded-full uppercase">
                    Active
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM SOCIAL LINKS BAR */}
        <div id="bento-socials-row" className="bg-[#121214] border border-[#1e1e22] rounded-[2rem] p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col text-center md:text-left">
            <span className="font-mono text-[10px] tracking-widest text-[#39FF14] uppercase font-bold">
              Want to network?
            </span>
            <span className="text-xl font-bold text-white mt-1 font-display">
              Let's establish a connection!
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="https://github.com/jeffadr46" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1c1c1f] hover:bg-white hover:text-black border border-[#2b2b31] transition-all text-sm font-semibold cursor-pointer active:scale-95"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/jeffrey-adriel-oleabhie" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1c1c1f] hover:bg-white hover:text-black border border-[#2b2b31] transition-all text-sm font-semibold cursor-pointer active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <button 
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#39FF14] text-black hover:bg-[#34e012] transition-all text-sm font-extrabold cursor-pointer active:scale-95"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </button>
          </div>
        </div>

        {/* DETAILS FOOTER / SUMMARY STATS ROW */}
        <div id="bento-details" className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#121214]/60 border border-[#1e1e22] rounded-[1.25rem] p-4 text-center">
            <span className="block text-stone-500 font-mono text-[9px] uppercase tracking-wider">Role</span>
            <span className="block text-white text-sm font-semibold truncate mt-1">Internship Seeker</span>
          </div>
          <div className="bg-[#121214]/60 border border-[#1e1e22] rounded-[1.25rem] p-4 text-center cursor-pointer relative group" onClick={copyEmail}>
            <span className="block text-stone-500 font-mono text-[9px] uppercase tracking-wider group-hover:text-[#39FF14] transition-colors">
              {copiedEmail ? "Copied!" : "Primary Email (Click)"}
            </span>
            <span className="block text-white text-sm font-semibold truncate mt-1">jeffadr46@gmail.com</span>
          </div>
          <div className="bg-[#121214]/60 border border-[#1e1e22] rounded-[1.25rem] p-4 text-center">
            <span className="block text-stone-500 font-mono text-[9px] uppercase tracking-wider">Phone Link</span>
            <span className="block text-white text-sm font-semibold truncate mt-1">+234 7078480013</span>
          </div>
          <div className="bg-[#121214]/60 border border-[#1e1e22] rounded-[1.25rem] p-4 text-center">
            <span className="block text-stone-500 font-mono text-[9px] uppercase tracking-wider">Nationality</span>
            <span className="block text-white text-sm font-semibold truncate mt-1">Nigeria</span>
          </div>
        </div>

        {/* Simple Humble Copyright */}
        <div className="text-center pt-4 opacity-30 text-xs font-mono font-medium uppercase tracking-widest text-stone-400">
          © 2026 JEFFREY ADRIEL OLEABHIE / ALL RIGHTS RESERVED
        </div>

      </div>

      {/* FOOTER ACCENTS BLOCK & MODAL OVERLAYS */}
      
      {/* 1. PROJECT SPEC LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-[#121214] border border-[#232329] rounded-[2rem] max-w-xl w-full p-6 sm:p-8 relative overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-[#1c1c1f] text-stone-400 hover:text-white border border-[#2b2b31] transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] w-full bg-stone-950 rounded-2xl overflow-hidden border border-[#1e1e22] mb-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-2 mb-3">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="text-xs font-mono bg-[#1c1c1f] text-[#39FF14] px-3 py-1 rounded-full border border-[#2b2b31] font-semibold">
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6 font-sans">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {selectedProject.link && (
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center flex-1 h-12 bg-white text-black font-extrabold text-sm rounded-xl cursor-pointer hover:bg-stone-200 transition-colors"
                  >
                    Visit Live Site
                  </a>
                )}
                <a 
                  href={`mailto:jeffadr46@gmail.com?subject=Regarding%20your%20Project:%20${encodeURIComponent(selectedProject.title)}`}
                  className="inline-flex items-center justify-center flex-1 h-12 bg-[#39FF14] text-black font-extrabold text-sm rounded-xl cursor-pointer hover:bg-[#34e012] transition-colors"
                >
                  Inquire Project Details
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center justify-center h-12 px-6 bg-[#1a1a1d] text-stone-300 hover:text-white border border-[#25252a] font-semibold text-sm rounded-xl cursor-pointer"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. CONTACT DRAWER MODAL */}
      <AnimatePresence>
        {contactOpen && (
          <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-md">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-[#121214] border border-[#232329] rounded-[2rem] max-w-md w-full p-6 sm:p-8 relative"
            >
              <button 
                onClick={() => setContactOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-[#1c1c1f] text-stone-400 hover:text-white border border-[#2b2b31] transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="font-mono text-[10px] tracking-widest text-[#39FF14] uppercase font-bold block mb-1">
                  Start Conversation
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  Send A Message
                </h3>
                <p className="text-xs text-stone-400 mt-1.5 font-sans leading-relaxed">
                  Type your details below! Submitting will launch your email client pre-filled with this message for instant delivery.
                </p>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4 font-sans">
                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-1.5 font-semibold">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Enter your name" 
                    className="w-full bg-[#1a1a1d] border border-[#25252a] rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-600 focus:border-[#39FF14] transition-colors focus:ring-0 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-1.5 font-semibold">Your Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Hi Jeffrey, I'd love to chat about an internship opportunity..." 
                    className="w-full bg-[#1a1a1d] border border-[#25252a] rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-600 focus:border-[#39FF14] transition-colors focus:ring-0 resize-none outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button 
                    type="submit"
                    disabled={sendingState === "sent"}
                    className="w-full h-12 bg-[#39FF14] text-black font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-[#34e012] disabled:opacity-50 transition-colors"
                  >
                    {sendingState === "sent" ? (
                      <>
                        <Check className="w-4 h-4 animate-bounce" />
                        Launching Email Mail Client...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Pre-Filled Email
                      </>
                    )}
                  </button>
                  <button 
                    type="button"
                    onClick={copyEmail}
                    className="w-full h-11 bg-transparent hover:bg-[#1a1a1d] border border-[#25252a] text-stone-300 font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Copy Address: jeffadr46@gmail.com
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
