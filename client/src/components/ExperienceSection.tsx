import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6" data-testid="text-experience-heading">
            Experience
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-experience-description">
            My journey in AI and technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-primary hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-chart-2 border-4 border-background animate-pulse-glow hidden md:block" />

                {/* Content card */}
                <div className="md:ml-24 p-8 rounded-2xl border border-border bg-card hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-experience-${exp.id}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-chart-2 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xl mb-1" data-testid={`text-experience-title-${exp.id}`}>
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium mb-1" data-testid={`text-experience-org-${exp.id}`}>
                        {exp.organization}
                      </p>
                      <p className="text-sm text-muted-foreground font-mono" data-testid={`text-experience-period-${exp.id}`}>
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-experience-description-${exp.id}`}>
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
