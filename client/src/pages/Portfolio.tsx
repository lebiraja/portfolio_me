import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { FloatingContact } from "@/components/FloatingContact";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <FloatingContact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-footer">
            © {new Date().getFullYear()} Lebi Raja. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}
