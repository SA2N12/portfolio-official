/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  User, 
  MessageSquare,
  ChevronRight,
  Globe,
  Layout,
  Cpu
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const PROJECTS = [
  {
    title: "Sortir.com",
    description: "Plateforme événementielle majeure pour découvrir les sorties et événements culturels.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Beway Intranet",
    description: "Solution intranet sur mesure pour la gestion interne et la communication d'entreprise.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "Thermiup.fr",
    description: "Site vitrine et configurateur pour solutions d'économie d'énergie thermique.",
    tags: ["WordPress", "PHP", "UI/UX"],
    link: "#",
    icon: <Cpu className="w-6 h-6" />
  }
];

const EXPERIENCES = [
  {
    role: "Développeur Web Freelance",
    company: "Indépendant",
    period: "2023 - Présent",
    description: "Accompagnement de clients dans la création de solutions web sur mesure, du design à la mise en production."
  },
  {
    role: "Développeur Web Fullstack",
    company: "Stagiaire",
    period: "2022",
    description: "Développement de fonctionnalités backend et frontend sur des applications métier complexes."
  },
  {
    role: "Développeur Wordpress / UI/UX Designer",
    company: "Alternance",
    period: "2021 - 2022",
    description: "Conception d'interfaces centrées utilisateur et déploiement de sites sous WordPress."
  }
];

const SERVICES = [
  {
    title: "Développement Fullstack",
    description: "Création d'applications web complètes, de la base de données à l'interface utilisateur.",
    icon: <Code2 className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Design UI/UX",
    description: "Conception d'interfaces modernes et intuitives centrées sur l'expérience utilisateur.",
    icon: <Layout className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Solutions WordPress",
    description: "Développement de thèmes et plugins sur mesure pour des sites vitrines performants.",
    icon: <Cpu className="w-8 h-8 text-purple-500" />
  }
];

const SKILLS = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", 
  "PostgreSQL", "MongoDB", "Framer Motion", "UI/UX Design", 
  "WordPress", "PHP", "Docker", "Git", "Vercel"
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-black font-black">J</div>
            <span>Jules Le Corre</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            {["Expérience", "Projets", "Compétences", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all"
            >
              Parlons-en
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-orange-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Disponible pour de nouveaux projets
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            Salut, moi c'est <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Jules.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-12"
          >
            Je suis <span className="text-white">développeur web</span> passionné par la création d'expériences numériques fluides, performantes et esthétiques.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projets"
              className="px-8 py-4 bg-orange-500 text-black font-bold rounded-2xl flex items-center gap-2 hover:bg-orange-400 transition-all"
            >
              Voir mes projets <ChevronRight className="w-5 h-5" />
            </motion.a>
            <div className="flex items-center gap-4 px-4">
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/20 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all"
              >
                <div className="mb-6">{service.icon}</div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-white/50 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="expérience" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500 mb-4">Parcours</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Expérience.</h3>
            </div>
            <p className="text-white/40 max-w-md text-lg">
              Plusieurs années à concevoir des solutions web robustes pour des entreprises et clients variés.
            </p>
          </div>

          <div className="grid gap-6">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                    <p className="text-orange-500 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-white/40 font-mono text-sm bg-white/5 px-4 py-2 rounded-full">
                    {exp.period}
                  </div>
                </div>
                <p className="mt-6 text-white/60 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="py-32 overflow-hidden border-y border-white/5">
        <div className="flex flex-col items-center mb-16 px-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500 mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Compétences.</h3>
        </div>
        
        <div className="flex flex-col gap-8">
          <div className="flex whitespace-nowrap">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 px-4"
            >
              {[...SKILLS, ...SKILLS].map((skill, i) => (
                <div key={i} className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-xl font-bold tracking-tight flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex whitespace-nowrap">
            <motion.div 
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 px-4"
            >
              {[...SKILLS, ...SKILLS].reverse().map((skill, i) => (
                <div key={i} className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-xl font-bold tracking-tight flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500 mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Projets.</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  {project.icon}
                </div>
                
                <div className="mb-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-white/10 text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                  <p className="text-white/50 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.link}
                  className="mt-8 inline-flex items-center gap-2 text-orange-500 font-bold group-hover:text-orange-400 transition-colors"
                >
                  Voir le projet <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500 mb-6">Contact</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Prêt à lancer votre <span className="italic font-serif text-orange-500">prochain</span> projet ?
            </h3>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Que vous ayez une idée précise ou que vous souhaitiez simplement discuter de vos besoins, je suis à votre écoute.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:lecorrejules10@gmail.com"
                className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-orange-500 hover:text-white transition-all shadow-xl shadow-white/5"
              >
                <Mail className="w-5 h-5" /> Me contacter par email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} Jules Le Corre. Tous droits réservés.
          </div>
          
          <div className="flex items-center gap-8 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          
          <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            System Status: Operational
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 p-4 bg-orange-500 text-black rounded-full shadow-2xl hover:bg-orange-400 transition-colors"
          >
            <ChevronRight className="w-6 h-6 -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
