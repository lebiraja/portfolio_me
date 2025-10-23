import { useState } from "react";
import { MessageCircle, Github, Linkedin, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "@/data/portfolio";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: "GitHub",
      icon: Github,
      url: socialLinks.github,
      testId: "link-float-github"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: socialLinks.linkedin,
      testId: "link-float-linkedin"
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:${socialLinks.email}`,
      testId: "link-float-email"
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Contact options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-center gap-3 px-4 py-3 rounded-full bg-card border border-border hover-elevate active-elevate-2 transition-all duration-300 shadow-lg hover:shadow-2xl whitespace-nowrap"
                data-testid={contact.testId}
              >
                <contact.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />
                <span className="text-sm font-medium">{contact.name}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-chart-2 text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid="button-floating-contact"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}
