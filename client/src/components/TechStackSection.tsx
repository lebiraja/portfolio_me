import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { techStack } from "@/data/portfolio";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function TechStackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  // Mapping tech names to SimpleIcons CDN icon names
  const techLogos: Record<string, { icon: string; color: string }> = {
    // Languages
    "Python": { icon: "python", color: "3776AB" },
    "Java": { icon: "openjdk", color: "000000" },
    "JavaScript": { icon: "javascript", color: "F7DF1E" },
    "C": { icon: "c", color: "A8B9CC" },
    "C++": { icon: "cplusplus", color: "00599C" },
    "HTML": { icon: "html5", color: "E34C26" },
    "CSS": { icon: "css3", color: "1572B6" },
    // Frameworks & Tools
    "Streamlit": { icon: "streamlit", color: "FF0000" },
    "Flask": { icon: "flask", color: "000000" },
    "React": { icon: "react", color: "61DAFB" },
    "FastAPI": { icon: "fastapi", color: "009688" },
    "OpenCV": { icon: "opencv", color: "5C3EE8" },
    "MediaPipe": { icon: "mediapipe", color: "0097A7" },
    "PyAutoGUI": { icon: "python", color: "3776AB" },
    // AI/ML Tools
    "TensorFlow": { icon: "tensorflow", color: "FF6F00" },
    "PyTorch": { icon: "pytorch", color: "EE4C2C" },
    "NLTK": { icon: "python", color: "3776AB" },
    "Scikit-learn": { icon: "scikit", color: "F7931E" },
    "Ollama": { icon: "ollama", color: "000000" },
    "ChromaDB": { icon: "python", color: "3776AB" },
    // Databases
    "MySQL": { icon: "mysql", color: "4479A1" },
    "MongoDB": { icon: "mongodb", color: "47A248" },
    "Firebase": { icon: "firebase", color: "FFCA28" },
    "PostgreSQL": { icon: "postgresql", color: "336791" },
    // Other Skills
    "REST APIs": { icon: "postman", color: "FF6C37" },
    "Data Cleaning": { icon: "pandas", color: "150458" },
    "RAG Pipelines": { icon: "python", color: "3776AB" },
    "Google APIs": { icon: "google", color: "4285F4" },
    "Computer Vision": { icon: "opencv", color: "5C3EE8" },
    "Prompt Engineering": { icon: "openai", color: "412991" }
  };

  const getTechLogo = (tech: string) => {
    const info = techLogos[tech];
    if (!info) {
      return {
        icon: tech.toLowerCase().replace(/[^a-z0-9-]/g, ""),
        color: "999999"
      };
    }
    return info;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            animate={inView ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : {}}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block"
          >
            <h2 className="font-serif font-bold text-5xl md:text-6xl bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent" 
                data-testid="text-skills-heading">
              Tech Stack
            </h2>
          </motion.div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6" data-testid="text-skills-description">
            Tools and technologies powering my solutions
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-20">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.12 }}
            >
              <div className="relative">
                {/* Category header with animated line */}
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="font-semibold text-2xl md:text-3xl" data-testid={`text-category-${categoryIndex}`}>
                    {category.category}
                  </h3>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.12 + 0.2 }}
                    className="flex-1 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"
                  ></motion.div>
                </div>

                {/* Tech icons grid */}
                <motion.div
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {category.technologies.map((tech, techIndex) => {
                    const logoInfo = getTechLogo(tech);
                    const logoUrl = `https://cdn.simpleicons.org/${logoInfo.icon}/${logoInfo.color}`;

                    return (
                      <TooltipProvider key={tech}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.div
                              variants={itemVariants}
                              whileHover={{ scale: 1.15, y: -8 }}
                              whileTap={{ scale: 0.95 }}
                              className="group relative flex items-center justify-center"
                              data-testid={`badge-tech-${categoryIndex}-${techIndex}`}
                            >
                              {/* Glow background */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                animate={inView ? { scale: [1, 1.2, 1] } : {}}
                                transition={{ duration: 3, repeat: Infinity, delay: techIndex * 0.1 }}
                              ></motion.div>

                              {/* Card container */}
                              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card/50 backdrop-blur-md border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden group">
                                {/* Shimmer effect */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                  initial={{ x: "-100%" }}
                                  whileHover={{ x: "100%" }}
                                  transition={{ duration: 0.5 }}
                                ></motion.div>

                                {/* Logo */}
                                <motion.img
                                  src={logoUrl}
                                  alt={tech}
                                  className="w-10 md:w-12 h-10 md:h-12 object-contain relative z-10"
                                  animate={inView ? { rotate: [0, 5, -5, 0] } : {}}
                                  transition={{ duration: 2, repeat: Infinity, delay: techIndex * 0.08 }}
                                />
                              </div>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-card/95 backdrop-blur-md border border-primary/20">
                            <p className="font-medium text-sm">{tech}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
