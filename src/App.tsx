import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeSection } from './components/ResumeSection';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <ResumeSection />
        <Footer />
      </div>
      <Toaster 
        position="top-right"
        theme="dark"
        toastOptions={{
          style: {
            background: '#18181b',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            color: '#f4f4f5',
          },
        }}
      />
    </div>
  );
}