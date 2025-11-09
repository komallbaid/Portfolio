
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { usePortfolioContent } from './hooks/usePortfolioContent';

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <div className="animate-pulse text-2xl">Loading portfolio…</div>
        <div className="text-sm opacity-70 mt-2">If this takes long, check /public/content/content.json</div>
      </div>
    </div>
  );
}

function ErrorScreen({ message }: { message: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <div className="text-rose-400 text-xl">Oops, couldn’t load content.</div>
        <div className="text-sm opacity-80 mt-2">{message}</div>
      </div>
    </div>
  );
}

export default function App() {
  const { content, loading, error } = usePortfolioContent();
  if (loading) return <LoadingScreen />;
  if (error || !content) return <ErrorScreen message={error ?? "Missing content"} />;

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection hero={content.hero} />
        <AboutSection about={content.about} />
        <ExperienceSection experience={content.experience} />
        <ProjectsSection projects={content.projects} />
        <ResumeSection resumeHref={content.hero?.cta_secondary?.href ?? "/Komal_resume_latest.pdf"} />
        <Footer contact={content.contact} />
      </div>
    </div>
  );
}
