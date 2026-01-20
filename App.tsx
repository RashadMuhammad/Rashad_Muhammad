import React, { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle.tsx";
import ProjectCard from "./components/ProjectCard.tsx";
import ChatWidget from "./components/ChatWidget.tsx";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILLS } from "./constants.tsx";

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = ["home", "projects", "experience", "skills", "contact"];
    sections.forEach((s) => {
      const el = document.getElementById(s);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-950/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-primary-600">
                MUHAMMAD RASHAD
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const section = document.getElementById(link.id);
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-sm font-semibold transition-colors ${
                    activeSection === link.id
                      ? "text-primary-600"
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
              <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
            </div>

            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 dark:text-slate-400"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg font-bold ${
                  activeSection === link.id
                    ? "text-primary-600"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6 dark:bg-primary-900/40 dark:text-primary-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Available for Full Stack Projects
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Building Scalable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
                  Enterprise Solutions.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                Hi, I'm {PERSONAL_INFO.name}. A {PERSONAL_INFO.title}{" "}
                specializing in .NET, SQL, and modern web technologies — focused
                on building reliable, high-performance business applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const section = document.getElementById("projects");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 bg-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-colors"
                >
                  View My Work
                </button>

                <button
                  onClick={() => {
                    const section = document.getElementById("contact");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-colors dark:bg-slate-900 dark:border-slate-800 dark:text-white dark:hover:bg-slate-800"
                >
                  Get In Touch
                </button>
              </div>
              <div className="mt-4">
                <a
                  href="/Uploads/Muhammad_Rashad.pdf"
                  download
                  className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 inline-block"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-primary-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        </section>

        <section
          id="projects"
          className="py-24 bg-slate-50 dark:bg-slate-950/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 mb-2">
                  Portfolio
                </h2>
                <h3 className="text-4xl font-extrabold">Featured Projects</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 mb-2">
                Capability
              </h2>
              <h3 className="text-4xl font-extrabold">Technical Expertise</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="p-6 rounded-2xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold">{skill.name}</span>
                    <span className="text-xs font-mono text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="mt-3 text-[10px] uppercase font-black text-slate-400 tracking-wider">
                    {skill.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="py-24 bg-slate-50 dark:bg-slate-950/50"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 mb-2">
                Journey
              </h2>
              <h3 className="text-4xl font-extrabold">Career Path</h3>
            </div>
            <div className="space-y-12 relative">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
                    <h4 className="font-extrabold text-xl text-primary-600">
                      {exp.role}
                    </h4>
                    <span className="text-sm font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded h-fit">
                      {exp.period}
                    </span>
                  </div>
                  <div className="font-bold text-lg mb-4 text-slate-800 dark:text-slate-200">
                    @ {exp.company}
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-600 dark:text-slate-400 flex gap-3"
                      >
                        <span className="text-primary-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 mb-2">
                  Inquiry
                </h2>
                <h3 className="text-4xl font-extrabold mb-6">
                  Let's work together.
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
                  I'm currently looking for new opportunities and
                  collaborations.
                </p>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center dark:bg-primary-900/20">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Email Me
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white">
                        <a href={`mailto:${PERSONAL_INFO.email}`}>
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center dark:bg-primary-900/20">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Call Me
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white">
                        <a href={`tel:${PERSONAL_INFO.phone}`}>
                          {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl dark:bg-slate-900 dark:border-slate-800">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      type="text"
                      placeholder="Name"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                    />
                    <input
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      type="email"
                      placeholder="Email"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                    />
                  </div>
                  <textarea
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    rows={5}
                    placeholder="Message"
                    className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  ></textarea>
                  <button
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
          reserved.
        </div>
      </footer> */}

      {showToast && (
        <div className="fixed top-24 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl">
          Message Sent Successfully!
        </div>
      )}

      <ChatWidget />
    </div>
  );
};

export default App;
