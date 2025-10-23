import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const highlights = [
    {
      icon: Code2,
      title: "Intelligent Systems",
      description: "Building AI solutions that bridge creativity and reasoning"
    },
    {
      icon: Sparkles,
      title: "LLM Applications",
      description: "Specializing in RAG systems and prompt engineering"
    },
    {
      icon: Heart,
      title: "Human Connection",
      description: "Creating technology that inspires and connects people"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6" data-testid="text-about-heading">
            About Me
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-about-description">
            {personalInfo.bio}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group p-8 rounded-2xl border border-border bg-card hover-elevate active-elevate-2 transition-all duration-300 h-full" data-testid={`card-highlight-${index}`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-chart-2 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-xl mb-3" data-testid={`text-highlight-title-${index}`}>
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-highlight-description-${index}`}>
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
