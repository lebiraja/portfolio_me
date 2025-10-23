import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }} />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-chart-2/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-chart-2/30 to-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm" data-testid="text-location">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </span>
          </div>

          <h1 className="font-serif font-bold text-6xl md:text-7xl lg:text-8xl mb-6" data-testid="text-hero-name">
            <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: '200% auto' }}>
              {personalInfo.name}
            </span>
          </h1>

          <p className="font-medium text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8" data-testid="text-hero-role">
            {personalInfo.role}
          </p>

          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-muted-foreground mb-12" data-testid="text-hero-bio">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="group px-8 py-3 rounded-full bg-gradient-to-r from-primary to-chart-2 text-primary-foreground font-medium hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-2xl"
              data-testid="button-view-projects"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-primary/20 backdrop-blur-sm bg-background/50 hover-elevate active-elevate-2 transition-all duration-300"
              data-testid="button-get-in-touch"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" data-testid="icon-scroll-indicator" />
      </motion.div>
    </section>
  );
}
