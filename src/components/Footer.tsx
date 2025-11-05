import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { name: "À Propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ],
  legal: [
    { name: "Mentions Légales", href: "/legal" },
    { name: "Politique de confidentialité", href: "/privacy" },
  ],
  social: [
    { icon: Instagram, href: "https://www.instagram.com/nevos.website/", label: "Instagram" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-card/50 via-background to-card/50 border-t border-border overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, oklch(0.6723 0.1606 244.9955 / 0.3) 0%, transparent 70%)",
            top: "-30%",
            right: "-10%",
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, oklch(0.6692 0.1607 245.0110 / 0.25) 0%, transparent 70%)",
            bottom: "-20%",
            left: "-5%",
          }}
          animate={{
            x: [0, 70, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
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
              <img src="/asset/Logo nevosoff.png" alt="Nevos" className="h-16 w-auto -my-1" />
              <span className="font-heading leading-none font-bold text-2xl text-foreground">Nevos</span>
            </motion.div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
              Nous créons des sites web qui captivent, convertissent et propulsent votre entreprise vers le succès.
            </p>
            <div className="flex space-x-2">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                  }}
                  className="w-10 h-10 rounded-lg bg-primary/10 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 border border-primary/20"
                >
                  <social.icon size={18} />
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
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-foreground transition-all duration-200 text-base hover:translate-x-1 inline-block group relative"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
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
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-foreground transition-all duration-200 text-base hover:translate-x-1 inline-block group relative"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
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
                  className="hover:text-primary transition-colors duration-300 font-medium break-words text-sm sm:text-base"
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
                <span className="font-medium">49 rue Saint Louis<br />Villemomble 93250</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-8 border-t border-border/30 relative"
        >
          {/* Effet de brillance sur la bordure */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-muted-foreground text-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              © {new Date().getFullYear()} <span className="text-foreground font-semibold">Nevos</span>. Tous droits réservés.
            </motion.p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Made with passion in France
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
