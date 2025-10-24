import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Heart, Zap, Star, Target, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const whatIDo = [
    "Building intelligent systems with cutting-edge AI",
    "Creating meaningful digital experiences",
    "Solving complex problems through innovative tech"
  ];

  const passions = [
    { emoji: "🎬", label: "Anime" },
    { emoji: "✈️", label: "Travel" },
    { emoji: "💡", label: "Innovation" }
  ];

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

  // Orbiting elements animation
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const reverseOrbitVariants = {
    animate: {
      rotate: -360,
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background animated orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Profile Photo Section with Orbiting Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-[28rem] flex items-center justify-center"
          >
            {/* Orbiting Container (Half capsules) - VISIBLE ON TOP */}
            <motion.div
              className="absolute w-96 h-96 rounded-full z-20"
              variants={orbitVariants}
              animate="animate"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 bg-gradient-to-r from-primary to-chart-2 rounded-full opacity-40" />
              <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-24 h-12 bg-gradient-to-r from-chart-2 to-primary rounded-full opacity-40" />
            </motion.div>

            {/* Reverse Orbiting Container (Icons) - VISIBLE ON TOP */}
            <motion.div
              className="absolute w-80 h-80 rounded-full z-20"
              variants={reverseOrbitVariants}
              animate="animate"
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center shadow-lg"
                variants={floatingVariants}
                animate="animate"
              >
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                className="absolute top-1/4 right-0 translate-x-1/2 w-12 h-12 bg-gradient-to-br from-chart-2 to-primary rounded-full flex items-center justify-center shadow-lg"
                variants={floatingVariants}
                animate="animate"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-primary/80 to-chart-2/80 rounded-full flex items-center justify-center shadow-lg"
                variants={floatingVariants}
                animate="animate"
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>

            {/* Profile Photo - CENTERED IN MIDDLE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-chart-2 to-primary animate-spin" style={{ padding: "2px", animationDuration: "3s" }} />
              <div className="relative w-72 md:w-96 lg:w-[28rem] aspect-square rounded-full bg-card p-1">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <img
                    src="/images/lebi_profile.jpg"
                    alt="Lebi Raja"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Pulsing glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-chart-2/30 blur-2xl animate-pulse" />
              </div>
            </motion.div>
          </motion.div>

          {/* Bio and Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an AI enthusiast and full-stack developer passionate about building intelligent systems that solve real-world problems.
              </p>
            </motion.div>

            {/* Bio Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <p className="text-base leading-relaxed">
                {personalInfo.bio} 🚀
              </p>
            </motion.div>

            {/* What I Do */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold text-xl">What I Do</h3>
              <div className="space-y-3">
                {whatIDo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <ArrowRight className="w-5 h-5 text-primary group-hover:text-chart-2 transition-colors" />
                    </motion.div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* My Passions */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold text-xl">My Passions</h3>
              <div className="flex flex-wrap gap-3">
                {passions.map((passion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.15 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-chart-2/20 border border-primary/30 text-sm font-medium hover:border-primary/60 transition-colors cursor-pointer"
                  >
                    <span className="text-lg mr-2">{passion.emoji}</span>
                    {passion.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative group p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-chart-2 flex items-center justify-center mb-6"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <highlight.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-semibold text-xl mb-3" data-testid={`text-highlight-title-${index}`}>
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-highlight-description-${index}`}>
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
