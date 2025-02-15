import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, BookOpen, Menu, X } from 'lucide-react';
import { Timeline } from './components/Timeline';
import { ProjectCard } from './components/ProjectCard';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="relative flex items-center justify-between h-20">
            {/* Logo/Name */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                JD
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg py-4 slide-in">
              <div className="px-4 space-y-2">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
              John Developer
            </h1>
            <p className="text-xl md:text-2xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              Full Stack Software Engineer
            </p>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <a href="https://github.com" className="glass-effect p-4 rounded-lg hover:scale-110 transition-transform duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="glass-effect p-4 rounded-lg hover:scale-110 transition-transform duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john@example.com" className="glass-effect p-4 rounded-lg hover:scale-110 transition-transform duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white" id="about">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">About Me</h2>
          <div className="max-w-3xl mx-auto glass-effect p-8 rounded-2xl">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate software engineer with 5+ years of experience building web applications.
              I specialize in React, Node.js, and cloud technologies. When I'm not coding, you can find
              me contributing to open-source projects or writing technical blog posts.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gray-50" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js',
              'Python', 'AWS', 'Docker', 'GraphQL',
              'PostgreSQL', 'MongoDB', 'Redis', 'Git'
            ].map((skill) => (
              <div key={skill} className="glass-effect rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-24 bg-white" id="experience">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Experience</h2>
          <Timeline />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-50" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce platform built with React, Node.js, and MongoDB"
              tags={['React', 'Node.js', 'MongoDB']}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A real-time task management application with team collaboration features"
              tags={['React', 'Firebase', 'Tailwind']}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="AI Chat Interface"
              description="An AI-powered chat interface built with OpenAI's GPT-3 API"
              tags={['React', 'OpenAI', 'WebSocket']}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Get In Touch</h2>
          <div className="max-w-lg mx-auto glass-effect p-8 rounded-2xl">
            <div className="flex flex-col space-y-6 items-center">
              <a
                href="mailto:john@example.com"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail size={24} />
                <span className="text-lg font-medium">john@example.com</span>
              </a>
              <div className="flex space-x-6">
                <a
                  href="https://github.com"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">© 2024 John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;