
import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import ProjectCard from './components/ProjectCard';
import ChatWidget from './components/ChatWidget';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILLS } from './constants';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Section Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ['home', 'projects', 'experience', 'skills', 'contact'];
    sections.forEach((s) => {
      const el = document.getElementById(s);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-950/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-primary-600">AS.</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`text-sm font-semibold transition-colors ${
                    activeSection === link.id 
                      ? 'text-primary-600' 
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
              <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 dark:text-slate-400"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg font-bold ${
                  activeSection === link.id ? 'text-primary-600' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6 dark:bg-primary-900/40 dark:text-primary-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Available for projects
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Crafting digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
                  masterpieces.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                Hi, I'm {PERSONAL_INFO.name}. A {PERSONAL_INFO.title} who loves turning complex problems into elegant, high-performance solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-8 py-4 bg-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-all hover:-translate-y-1">
                  View My Work
                </a>
                <a href="#contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-white dark:hover:bg-slate-800">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-primary-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 mb-2">Portfolio</h2>
                <h3 className="text-4xl font-extrabold">Featured Projects</h3>
              </div>
              <a href="#" className="hidden sm:flex items-center gap-2 text-primary-600 font-bold hover:underline">
                View all projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 mb-2">Capability</h2>
              <h3 className="text-4xl font-extrabold">Technical Expertise</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="p-6 rounded-2xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold">{skill.name}</span>
                    <span className="text-xs font-mono text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="mt-3 text-[10px] uppercase font-black text-slate-400 tracking-wider">{skill.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 mb-2">Journey</h2>
              <h3 className="text-4xl font-extrabold">Career Path</h3>
            </div>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-800">
              {EXPERIENCES.map((exp, index) => (
                <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 z-10">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                    <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
                      <h4 className="font-extrabold text-xl text-primary-600">{exp.role}</h4>
                      <span className="text-sm font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded h-fit">{exp.period}</span>
                    </div>
                    <div className="font-bold text-lg mb-4 text-slate-800 dark:text-slate-200">@ {exp.company}</div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex gap-3">
                          <span className="text-primary-500 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 mb-2">Inquiry</h2>
                <h3 className="text-4xl font-extrabold mb-6">Let's work together.</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
                  I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center dark:bg-primary-900/20">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Me</div>
                      <div className="font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center dark:bg-primary-900/20">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</div>
                      <div className="font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-12">
                  <a href={PERSONAL_INFO.github} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href={PERSONAL_INFO.linkedin} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl dark:bg-slate-900 dark:border-slate-800">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2 dark:text-slate-300">Name</label>
                      <input 
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 dark:text-slate-300">Email Address</label>
                      <input 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 dark:text-slate-300">Message</label>
                    <textarea 
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      rows={5} 
                      placeholder="Tell me about your project..." 
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 hover:bg-primary-700 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tighter text-primary-600">AS.</span>
            <span className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Alex Sterling. Built with React & Tailwind.</span>
          </div>
          <div className="flex gap-8">
             {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-primary-600 transition-colors">
                  {link.name}
                </a>
              ))}
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-6 z-50 animate-in slide-in-from-right-10 duration-300">
          <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-bold">Message Sent Successfully!</span>
          </div>
        </div>
      )}

      {/* AI Chat Assistant Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;
