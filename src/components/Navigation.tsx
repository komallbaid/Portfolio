import { Github, Linkedin, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact', 'resume'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-primary/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                <span className="text-2xl text-primary-foreground">KB</span>
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent blur-lg opacity-30" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Experience', 'Projects', 'Contact', 'Resume'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative group transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={{
                    boxShadow: activeSection === item.toLowerCase() ? '0 0 10px rgba(0, 212, 255, 0.6)' : 'none',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/komallbaid"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:text-primary"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/komallbaid/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:text-primary"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://wa.me/919109529801"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:text-primary"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}