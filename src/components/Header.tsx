import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Nos réalisations", href: "/portfolio" },
  { name: "À Propos", href: "/about" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-0.5">
            <img src="/asset/Logo nevosoff.png" alt="Nevos" className="h-16 w-auto md:h-20 -my-1 md:-my-2" />
            <span className="font-heading leading-none font-bold text-xl text-foreground">Nevos</span>
          </Link>

          {/* Desktop Navigation - Pill Style */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="pill-nav">
              <div className="pill-nav-items">
                <ul className="pill-list">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`pill${location.pathname === item.href ? " is-active" : ""}`}
                        aria-label={item.name}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        <span className="label-stack">
                          <span className="pill-label">{item.name}</span>
                          <span className="pill-label-hover" aria-hidden="true">{item.name}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <ShimmerButton
                className="text-lg"
                background="oklch(0.2097 0.008 274.5332)"
                shimmerColor="#ffffff"
              >
                Démarrer un projet →
              </ShimmerButton>
            </Link>
          </div>

          {/* Mobile Menu Button (animated + accessible) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
            className={`md:hidden p-3 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-2xl transition-all duration-500 ease-out border backdrop-blur-sm group relative overflow-hidden text-foreground ${
              isMobileMenuOpen
                ? "bg-gradient-to-r from-primary/20 to-primary/30 border-primary/30 shadow-lg"
                : "hover:bg-gradient-to-r hover:from-secondary/30 hover:to-secondary/30 border-border/50"
            }`}
            style={{ WebkitTapHighlightColor: "transparent" } as any}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              {isMobileMenuOpen ? (
                <X size={24} className="transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="transform group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu (gradient + blur + transitions) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-background to-muted shadow-2xl border-b border-border py-4 transition-all duration-500 ease-out z-40"
            >
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`font-medium px-5 py-4 min-h-[48px] rounded-2xl transition-all duration-300 border backdrop-blur-sm group relative overflow-hidden ${
                      location.pathname === item.href
                        ? "bg-primary/15 text-foreground border-primary/30 shadow-md"
                        : "text-muted-foreground hover:bg-secondary/25 hover:text-foreground border-border/50"
                    }`}
                    style={{ WebkitTapHighlightColor: "transparent" } as any}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="mx-4"
                >
                  <ShimmerButton
                    className="text-lg w-full min-h-[52px]"
                    background="oklch(0.2097 0.008 274.5332)"
                    shimmerColor="#ffffff"
                  >
                    Démarrer un projet →
                  </ShimmerButton>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
