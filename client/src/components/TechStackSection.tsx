import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { techStack } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function TechStackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6" data-testid="text-skills-heading">
            Tech Stack
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-description">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-semibold text-2xl mb-6 text-center md:text-left" data-testid={`text-category-${categoryIndex}`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 transition-all duration-300 cursor-default"
                      data-testid={`badge-tech-${categoryIndex}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
