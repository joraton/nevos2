import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import logoNevos from "../../asset/Logo nevosoff.png";

const footerLinks = {
  company: [
    { name: "À Propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ],
  legal: [
    { name: "Mentions Légales", href: "/legal" },
    { name: "Politique de confidentialité", href: "/privacy" },
    { name: "CGV", href: "/terms" },
  ],
  social: [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-background via-card to-background border-t border-border overflow-hidden">
      {/* Particules d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          />
        ))}
      </div>

      {/* Effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <img src={logoNevos} alt="Nevos" className="h-16 w-auto -my-1" />
              <span className="font-heading leading-none font-bold text-2xl text-foreground">Nevos</span>
            </motion.div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Créateurs d'expériences digitales puissantes et orientées conversion.
            </p>
            <div className="flex space-x-3">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--primary-foreground))"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  className="w-12 h-12 rounded-xl bg-secondary/80 backdrop-blur-sm flex items-center justify-center text-secondary-foreground hover:shadow-lg transition-all duration-300 border border-border/50"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading font-bold text-foreground mb-6 text-lg">Entreprise</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 text-base font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-bold text-foreground mb-6 text-lg">Légal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 text-base font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-heading font-bold text-foreground mb-6 text-lg">Contact</h3>
            <ul className="space-y-5">
              <motion.li 
                className="flex items-start space-x-4 text-muted-foreground text-base group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="mt-1"
                >
                  <Mail size={20} className="text-primary group-hover:text-accent transition-colors duration-300" />
                </motion.div>
                <a 
                  href="mailto:nevos.website@gmail.com" 
                  className="hover:text-primary transition-colors duration-300 font-medium break-all"
                >
                  nevos.website@gmail.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start space-x-4 text-muted-foreground text-base group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="mt-1"
                >
                  <Phone size={20} className="text-primary group-hover:text-accent transition-colors duration-300" />
                </motion.div>
                <a 
                  href="tel:0652980191" 
                  className="hover:text-primary transition-colors duration-300 font-medium"
                >
                  06 52 98 01 91
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start space-x-4 text-muted-foreground text-base group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="mt-1"
                >
                  <MapPin size={20} className="text-primary group-hover:text-accent transition-colors duration-300" />
                </motion.div>
                <span className="font-medium">Paris, France</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-10 border-t border-border/50 text-center relative"
        >
          {/* Effet de brillance sur la bordure */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <motion.p 
            className="text-muted-foreground text-base font-medium"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            © {new Date().getFullYear()} <span className="text-primary font-semibold">Nevos</span>. Tous droits réservés.
          </motion.p>
          
          {/* Petit indicateur décoratif */}
          <motion.div
            className="mx-auto mt-4 w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </footer>
  );
};
