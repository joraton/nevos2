import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";
// Highlighter retiré
import { ServiceCard } from "@/components/ServiceCard";
import Globe from "@/components/Globe";
import { StaticGlobe } from "@/components/StaticGlobe";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Palette, Globe as GlobeIcon, CalendarDays, Truck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getOptimizedAnimation, addWillChange, getScrollAnimation } from "@/utils/animations";
import HomeMobile from "@/pages/mobile/HomeMobile";

// Services (depuis accueil.md)
const services = [
  {
    icon: GlobeIcon,
    title: "Site vitrine professionnel",
    description:
      "Présentez votre entreprise avec un site élégant et optimisé pour convertir vos visiteurs en clients.",
    features: [
      "Design sur-mesure adapté à votre identité",
      "Optimisation pour les moteurs de recherche",
      "Compatible pour tous appareils",
      "Chargement rapide",
    ],
  },
  {
    icon: CalendarDays,
    title: "Outils de réservation",
    description:
      "Facilitez la prise de rendez-vous avec un système de réservation intégré à votre site.",
    features: [
      "Module de réservation en ligne",
      "Gestion de la disponibilité en temps réel",
      "Notifications automatiques",
      "Interface administrateur intuitive",
    ],
  },
  {
    icon: Truck,
    title: "Délai de livraison rapide",
    description:
      "Votre site web complet livré en seulement 2 semaines, de la conception à la mise en ligne.",
    features: [
      "Livraison garantie en 14 jours",
      "Suivi en temps réel du projet",
      "Révisions incluses pendant le développement",
      "Mise en ligne immédiate après validation",
    ],
  },
];

// (Supprimé) Processus — non requis par accueil.md

// (Supprimé) Projets — non requis par accueil.md

// (Supprimé) Témoignages — non requis par accueil.md

export default function Home() {
  const isMobile = useIsMobile(768);
  const shouldAnimate = !isMobile;
  const [globeSize, setGlobeSize] = useState(500);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: isMobile ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    const updateGlobeSize = () => {
      if (window.innerWidth < 640) {
        setGlobeSize(280);
      } else if (window.innerWidth < 1024) {
        setGlobeSize(380);
      } else {
        setGlobeSize(500);
      }
    };

    updateGlobeSize();
    window.addEventListener('resize', updateGlobeSize);
    return () => window.removeEventListener('resize', updateGlobeSize);
  }, []);

  // Désactiver le smooth scroll sur mobile pour cette page
  useEffect(() => {
    if (!isMobile) return;
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    return () => {
      html.style.scrollBehavior = previous;
    };
  }, [isMobile]);

  // Initialiser AOS sur desktop uniquement
  useEffect(() => {
    if (!shouldAnimate) return;
    AOS.init({ duration: 700, once: true, offset: 50, easing: 'ease-out' });
  }, [shouldAnimate]);

  return isMobile ? (
    <HomeMobile />
  ) : (
    <div className={`min-h-screen`}>
      {/* Hero Section with Globe */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--background)] via-[var(--accent)] to-[var(--background)] pt-[env(safe-area-inset-top)]">
        {/* Animated beams background behind content and planet - Disabled on mobile for performance */}
        {!isMobile && <BackgroundBeams className="absolute inset-0 z-0 opacity-60" />}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Contenu texte */}
            <motion.div
              {...getOptimizedAnimation(isMobile, {
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
              })}
              className="relative z-10 text-center lg:text-left"
              style={addWillChange(isMobile, ['opacity', 'transform'])}
              data-aos={shouldAnimate ? 'fade-up' : undefined}
            >
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Montrez vos <span className="animated-gradient-text">compétences</span> au monde
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mb-8 sm:mb-10 leading-relaxed">
                Restaurant, artisan, commerçant ? Nous concevons des sites web professionnels pour attirer plus de clients, valoriser votre savoir-faire et développer votre activité locale.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center sm:items-start">
                <Link to="/contact" onClick={scrollTop}>
                  <ShimmerButton
                    className="text-base sm:text-lg w-full sm:w-auto"
                    background="oklch(0.2097 0.008 274.5332)"
                    shimmerColor="#ffffff"
                  >
                    Commencer maintenant →
                  </ShimmerButton>
                </Link>
                <Button asChild size="lg" variant="outline" className="text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 border-border text-foreground hover:bg-foreground/10 w-full sm:w-auto">
                  <Link to="/portfolio" onClick={scrollTop}>Découvrir nos projets</Link>
                  </Button>
              </div>
            </motion.div>

            {/* Globe - caché sur téléphone, visible à partir de sm */}
            <motion.div
              {...getOptimizedAnimation(isMobile, {
                initial: { opacity: 0, x: 50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 0.2 },
              })}
              className="relative z-10 hidden sm:flex justify-center"
              style={addWillChange(isMobile, ['opacity', 'transform'])}
            >
              {isMobile ? (
                <StaticGlobe
                  size={globeSize}
                  className="drop-shadow-2xl"
                />
              ) : (
                <Globe
                  size={globeSize}
                  rotationSpeed={0.001}
                  className="drop-shadow-2xl"
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Loop Transition */}
      <section className="py-8 sm:py-12 bg-background overflow-x-hidden" data-aos={shouldAnimate ? 'fade-up' : undefined}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">technologies maitrisées</h3>
          </div>
        </div>
        {/* Désactiver LogoLoop sur mobile pour éviter tout blocage potentiel */}
        {isMobile ? (
          <div className="flex items-center justify-center gap-8 h-24">
            <SiReact className="text-foreground" size={36} />
            <SiNextdotjs className="text-foreground" size={36} />
            <SiTypescript className="text-foreground" size={36} />
            <SiTailwindcss className="text-foreground" size={36} />
          </div>
        ) : (
          (() => {
            const techLogos = [
              { node: <SiReact />, title: "React", href: "https://react.dev" },
              { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
              { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
              { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
            ]
            return (
              <div className="relative h-24 md:h-28 w-full overflow-hidden">
                <LogoLoop
                  logos={techLogos}
                  speed={60}
                  direction="left"
                  logoHeight={48}
                  gap={40}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="var(--background)"
                  width="100%"
                  ariaLabel="Logo des technologies"
                />
              </div>
            )
          })()
        )}
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-background" data-aos={shouldAnimate ? 'fade-up' : undefined}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...getScrollAnimation(isMobile)}
            className="text-center mb-12 sm:mb-16"
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Nos services
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Des solutions web sur-mesure conçues pour les petites entreprises, optimisées pour l'expérience utilisateur, la performance et la conversion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                {...getScrollAnimation(isMobile, { delay: idx, stagger: true })}
                data-aos={shouldAnimate ? 'fade-up' : undefined}
              >
                <ServiceCard {...service} index={idx} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prototype Gratuit */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="hidden sm:block absolute top-1/2 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            {...getScrollAnimation(isMobile, { delay: 0 })}
            className="max-w-3xl mx-auto"
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            {/* Carte principale */}
            <motion.div
              {...getScrollAnimation(isMobile, { delay: 0.2 })}
              className="relative group"
            >
              {/* Glow effect subtil */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/90 backdrop-blur-xl border border-border/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl text-center">
                {/* Icône en haut */}
                <motion.div
                  {...getScrollAnimation(isMobile, { delay: 0.3 })}
                  className="flex justify-center mb-8"
                  data-aos={shouldAnimate ? 'zoom-in' : undefined}
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-primary/30 shadow-lg flex items-center justify-center backdrop-blur-sm">
                    <Palette className="text-primary" size={40} />
                  </div>
                </motion.div>

                {/* Titre avec gradient */}
                <motion.h2
                  {...getScrollAnimation(isMobile, { delay: 0.4 })}
                  className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                  data-aos={shouldAnimate ? 'fade-up' : undefined}
                >
                  Prototype <span className="text-primary font-bold">Gratuit</span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  {...getScrollAnimation(isMobile, { delay: 0.5 })}
                  className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
                  data-aos={shouldAnimate ? 'fade-up' : undefined}
                >
                  Nous réalisons <span className="font-semibold text-primary">gratuitement</span> un prototype de votre site web une fois que vous nous contactez pour une demande. Visualisez votre projet avant de vous engager !
                </motion.p>

                {/* Liste des bénéfices en 2 colonnes */}
                <motion.div
                  {...getScrollAnimation(isMobile, { delay: 0.6 })}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto"
                  data-aos={shouldAnimate ? 'fade-up' : undefined}
                >
                  {[
                    "Maquette personnalisée",
                    "Design adapté à votre marque", 
                    "Aucun engagement",
                    "Livraison sous 72h"
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      {...getScrollAnimation(isMobile, { delay: 0.7 + idx * 0.1 })}
                      className="flex items-center gap-3 text-left"
                    >
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  {...getScrollAnimation(isMobile, { delay: 0.8 })}
                  className="mb-6 flex justify-center"
                  data-aos={shouldAnimate ? 'fade-up' : undefined}
                >
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="block w-full sm:w-auto"
                  >
                    <ShimmerButton
                      className="text-base sm:text-lg w-full sm:w-auto max-w-full px-8 sm:px-12 py-4 font-semibold whitespace-normal sm:whitespace-nowrap"
                      borderRadius="12px"
                      background="oklch(0.2097 0.008 274.5332)"
                      shimmerColor="#ffffff"
                    >
                      Demander mon prototype gratuit →
                    </ShimmerButton>
                  </Link>
                </motion.div>

                {/* Note en bas */}
                <motion.p
                  {...getScrollAnimation(isMobile, { delay: 0.9 })}
                  className="text-xs text-muted-foreground/80"
                  data-aos={shouldAnimate ? 'fade' : undefined}
                >
                  * Prototype réalisé après étude de votre demande et validation du projet
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-16 sm:py-24 bg-background" data-aos={shouldAnimate ? 'fade-up' : undefined}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...getScrollAnimation(isMobile, { delay: 0 })}
            className="text-center max-w-4xl mx-auto"
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            <div className="mb-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="text-primary" size={18} />
                <span>Livraison rapide</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="text-primary" size={18} />
                <span>Support 24/7</span>
              </div>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Transformez votre vision en <span className="animated-gradient-text">réalité digitale</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
              Rejoignez les entrepreneurs qui ont fait confiance à notre expertise pour <span className="font-semibold">propulser leur business en ligne</span>.
            </p>

            <div className="flex justify-center">
              <Button asChild size="lg" className="text-base sm:text-lg px-8 py-5 sm:px-10 sm:py-6">
                <Link to="/contact" onClick={scrollTop}>Démarrer mon projet</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
