import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6" data-testid="text-projects-heading">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-description">
            Innovative solutions at the intersection of AI, automation, and human creativity
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="group relative overflow-hidden rounded-2xl border border-border bg-card hover-elevate active-elevate-2 transition-all duration-500 hover:shadow-2xl"
                data-testid={`card-project-${project.id}`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Project thumbnail placeholder with gradient */}
                    <div className={`flex-shrink-0 w-full lg:w-80 h-48 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden relative`}>
                      <div className="absolute inset-0 bg-background/10 backdrop-blur-sm" />
                      <div className="relative z-10 text-4xl font-bold text-white/90">
                        {project.name.slice(0, 2)}
                      </div>
                    </div>

                    {/* Project content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-serif font-bold text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors" data-testid={`text-project-name-${project.id}`}>
                            {project.name}
                          </h3>
                          <p className="text-sm font-medium text-primary" data-testid={`text-project-tagline-${project.id}`}>
                            {project.tagline}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6" data-testid={`text-project-description-${project.id}`}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, techIndex) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs font-mono"
                            data-testid={`badge-project-tech-${project.id}-${techIndex}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          asChild
                          variant="default"
                          size="sm"
                          className="gap-2"
                          data-testid={`button-github-${project.id}`}
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            View on GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
