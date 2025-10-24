import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Copy, Check, Phone, MessageCircle, Instagram, QrCode } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      toast({
        title: `${label} copied!`,
        description: `${label} copied to clipboard`,
      });
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const contactMethods = [
    {
      name: "Email",
      icon: Mail,
      value: socialLinks.email,
      type: "copy",
      color: "from-blue-500 to-cyan-500",
      testId: "contact-email"
    },
    {
      name: "Phone",
      icon: Phone,
      value: socialLinks.phone,
      type: "copy",
      color: "from-green-500 to-emerald-500",
      testId: "contact-phone"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      value: `https://wa.me/${socialLinks.whatsapp}`,
      type: "link",
      color: "from-green-600 to-green-800",
      testId: "contact-whatsapp"
    },
    {
      name: "Instagram",
      icon: Instagram,
      value: socialLinks.instagram,
      type: "link",
      color: "from-pink-500 to-purple-600",
      testId: "contact-instagram"
    },
    {
      name: "Snapchat",
      icon: QrCode,
      value: `https://snapchat.com/add/${socialLinks.snapchat}`,
      type: "link",
      color: "from-yellow-400 to-yellow-600",
      testId: "contact-snapchat"
    },
    {
      name: "GitHub",
      icon: Github,
      value: socialLinks.github,
      type: "link",
      color: "from-gray-600 to-gray-800",
      testId: "contact-github"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      value: socialLinks.linkedin,
      type: "link",
      color: "from-blue-600 to-blue-800",
      testId: "contact-linkedin"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl -z-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            animate={inView ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : {}}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <h2 className="font-serif font-bold text-5xl md:text-6xl bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent" 
                data-testid="text-contact-heading">
              Let's Connect
            </h2>
          </motion.div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            Reach out through any of these channels. I'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {contactMethods.map((method, index) => {
            const isLink = method.type === "link";
            const isCopied = copied === method.name;

            const content = (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.4 }
                  }
                }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
                data-testid={method.testId}
              >
                {/* Glow background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>

                {/* Card container */}
                <div className={`relative h-24 md:h-28 rounded-2xl bg-gradient-to-br ${method.color} p-1`}>
                  <div className="w-full h-full rounded-xl bg-card/95 backdrop-blur-md flex flex-col items-center justify-center gap-2 hover:bg-card transition-colors duration-300 overflow-hidden">
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>

                    {/* Icon */}
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                      className="relative z-10"
                    >
                      <method.icon className="w-6 md:w-7 h-6 md:h-7 text-primary group-hover:text-chart-2 transition-colors" />
                    </motion.div>

                    {/* Name */}
                    <span className="text-xs md:text-sm font-semibold text-center relative z-10 line-clamp-1">
                      {method.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            );

            if (isLink) {
              return (
                <a
                  key={method.name}
                  href={method.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  {content}
                </a>
              );
            }

            return (
              <button
                key={method.name}
                onClick={() => handleCopy(method.value, method.name)}
                className="cursor-pointer text-left"
                title={`Click to copy ${method.name}`}
              >
                {content}
              </button>
            );
          })}
        </motion.div>

        {/* Quick tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground inline-flex items-center gap-2 bg-gradient-to-r from-primary/5 to-chart-2/5 px-4 py-2 rounded-full border border-primary/10">
            💡 Click cards with icons to copy contact info, or click gradient cards to visit
          </p>
        </motion.div>
      </div>
    </section>
  );
}
