import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      toast({
        title: "Email copied!",
        description: "Email address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const contacts = [
    {
      name: "GitHub",
      icon: Github,
      url: socialLinks.github,
      color: "from-gray-600 to-gray-800",
      testId: "link-github"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: socialLinks.linkedin,
      color: "from-blue-600 to-blue-800",
      testId: "link-linkedin"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6" data-testid="text-contact-heading">
            Let's Connect
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12" data-testid="text-contact-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Email section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-card">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm md:text-base" data-testid="text-email">
                {socialLinks.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg hover-elevate active-elevate-2 transition-all duration-300"
                data-testid="button-copy-email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Social links */}
          <div className="flex gap-6 justify-center">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="group"
                data-testid={contact.testId}
              >
                <div className="w-16 h-16 rounded-2xl border border-border bg-card flex items-center justify-center hover-elevate active-elevate-2 transition-all duration-300 hover:border-primary/50">
                  <contact.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
