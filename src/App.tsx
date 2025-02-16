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
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-lg shadow-lg ${isScrolled ? 'animate-pulse' : ''}`}>
        <div className="container mx-auto px-6">
          <div className="relative flex items-center justify-between h-20">
            {/* Logo/Name */}
            <div className="flex-shrink-0">
              <span
                className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 rounded-md px-2 py-1 shadow-lg shadow-blue-500/50 dark:shadow-purple-500/50 animate-gradient-x"
              >
                YO
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
        <div className="container mx-auto px-6 py-20 text-center relative z-10 animate-gradient">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
              Hi, I&apos;m <span className="animate-pulse text-blue-400">Yahya Oubedda</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200 animate-fade-in">
               An experienced Full Stack Software Engineer 
               with a passion for creating innovative solutions.
            </p>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <a href="https://github.com/velvetvi123" className="glass-effect p-4 rounded-lg hover:scale-110 transition-transform duration-300 animate-bounce">
              <Github size={24} />
            </a>
            <a href="" className="glass-effect p-4 rounded-lg hover:scale-110 transition-transform duration-300 animate-bounce">
              <Linkedin size={24} />
            </a>
            <a href="mailto:yahya.oub@gmail.com" className="glass-effect p-4 rounded-lg hover:scale-110 transition-transform duration-300 animate-bounce">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-24 bg-white" id="about">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent animate-gradient hover:scale-110 transition-transform duration-500">About Me</h2>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"></h2>
          <div className="max-w-3xl mx-auto glass-effect p-8 rounded-2xl flex flex-col items-center">
            <img 
              src="yahya.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full mb-6 object-cover shadow-md shadow-slate-600/50 transform transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            <p className="text-lg font-light leading-8 text-gray-800 text-center bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
              <span className="font-medium">As a seasoned software engineer</span>, I am passionate about modern IT technologies and how they can be used to drive innovation and solve complex problems. 
              I thrive on solving <span className="font-medium">complex problems</span> and delivering impactful solutions. 
              I am always eager to <span className="font-medium">learn</span> and grow, and am actively seeking new challenges and opportunities to <span className="font-medium">push boundaries</span> in the ever-evolving tech world.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gray-50" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent animate-gradient hover:scale-110 transition-transform duration-500">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js',
              'Python', 'Django', 'Docker', 'fLask','Mysql',
              'PostgreSQL', 'MongoDB', 'Redis','Devops', 'Git/Github',
            ].map((skill) => (
              <div key={skill} className="glass-effect rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-black to-black">
                <Code2 size={32} className="text-blue-500" />
                <p className="font-medium text-black">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-24 bg-white" id="experience">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent animate-gradient hover:scale-110 transition-transform duration-500">Experience</h2>
          <div className="max-w-4xl mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-50" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent animate-gradient hover:scale-110 transition-transform duration-500">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title={
                <span className="font-extrabold leading-tight text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient">
                    DentiaPro
                  </span>
                  <span className="block text-gray-600 text-lg md:text-xl lg:text-2xl font-light">
                    CRM for dental clinics
                  </span>
                </span>
              }
              description="As the co-founder of DentiaPro CRM, I spearheaded the development of an innovative, high-performance solution designed specifically for dental clinics. By optimizing backend architecture and implementing advanced DevOps practices, I ensured a secure, scalable, and efficient platform that streamlines operations and enhances patient management. DentiaPro enables dental professionals to focus on delivering exceptional care while our technology seamlessly manages the rest. Discover how DentiaPro is transforming dental clinic management with cutting-edge technology."
              tags={['React', 'Postgresql', 'Django Rest Framework']}
              githubUrl="https://github.com"
              liveUrl="https://dentia-pro-landing.vercel.app/"
            />
            <ProjectCard
              title={
                <span className="font-extrabold leading-tight text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient">
                    Techblog
                  </span>
                  <span className="block text-gray-600 text-lg md:text-xl lg:text-2xl font-light">
                    Personal tech blog
                  </span>
                </span>
              }
              description="As the co-founder of TechBlog, I am proud to introduce a professional blogging platform tailored for the tech industry, designed to empower developers, engineers, and tech enthusiasts to share their expertise, industry insights, and innovations. Built with a modern, scalable tech stack, TechBlog offers a seamless and engaging user experience, featuring intuitive navigation, responsive design, and robust performance. Our platform supports rich content creation, enabling users to publish in-depth articles, integrate multimedia, and foster meaningful discussions. With user authentication, post management, and interactive community features, TechBlog is set to become a go-to space for thought leadership in technology. We’re excited to launch soon—stay tuned"
              tags={['Next.js', 'Postgresql', 'Django Rest Framework']}
              githubUrl="https://github.com/Outtacosmos-ai/TechBlog_MVP-Project"
              liveUrl=""
            />
            <ProjectCard
              title={
                <span className="font-extrabold leading-tight text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient">
                    Unix Shell
                  </span>
                  <span className="block text-gray-600 text-lg md:text-xl lg:text-2xl font-light">
                  Custom Linux Shell: A Deep Dive into System Programming and OS Concepts
                  </span>
                </span>
              }
              description="Developed in C, this custom Linux/Bash shell is a fully functional command-line interpreter capable of executing Linux and Bash commands. Through this project, I honed my problem-solving skills and deepened my understanding of complex data structures such as binary trees, linked lists, and hash tables. Additionally, I gained invaluable insights into operating system fundamentals, including process management, memory allocation, system calls, and the intricate interaction between software and hardware. Implementing features like command parsing, redirections, pipes, and background process execution, I explored the inner workings of the UNIX kernel and developed a deeper appreciation for low-level programming and system security. This project was a significant milestone in my journey as a software engineer, reinforcing my expertise in C programming, operating system design, and performance optimization."
              tags={['C', 'Linux', 'Unix','Bash Scripting','Shell','Operating system']}
              githubUrl="https://github.com/oussama7chaouki/simple_shell"
              liveUrl="https://github.com/oussama7chaouki/simple_shell"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-gray-900" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-gray-300 bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent animate-gradient hover:animate-pulse-slow">
            {`Get In Touch`.split("").map((char, index) => (
              <span key={index} className="inline-block animate-pulse" style={{ animationDelay: `${index * 0.1}s` }}>
                {char}
              </span>
            ))}
          </h2>
          <div className="max-w-lg mx-auto glass-effect p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col space-y-6 items-center">
              <a
                href="mailto:yahya.oub@gmail.com"
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail size={28} className="animate-spin-slow" />
                <span className="text-lg font-medium">yahya.oub@gmail.com</span>
              </a>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/velvetvi123"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110"
                >
                  <Github size={32} className="animate-bounce-slow" />
                </a>
                <a
                  href="https://www.linkedin.com/in/oubedda-yahya-2a6872285/"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
                >
                  <Linkedin size={32} className="animate-pulse-slow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <p className="text-gray-300 text-center md:text-left">
              Created by <span className="font-bold">YAHYA OUBEDDA</span> in 2024
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:yahya.oub@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail size={20} />
                <span className="text-sm font-medium">Email me</span>
              </a>
              <a
                href="https://github.com/velvetvi123"
                className="flex items-center space-x-3 text-gray-300 hover:text-gray-900 transition-colors duration-300"
              >
                <Github size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/oubedda-yahya-2a6872285/"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-600 transition-colors duration-300"
              >
                <Linkedin size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;