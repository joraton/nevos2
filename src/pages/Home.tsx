import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";
// Highlighter retiré
import { ServiceCard } from "@/components/ServiceCard";
import Globe from "@/components/Globe";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Palette, Globe as GlobeIcon, CalendarDays, Truck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

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
  return (
    <div className="min-h-screen">
      {/* Hero Section with Globe */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--background)] via-[var(--accent)] to-[var(--background)]">
        {/* Animated beams background behind content and planet */}
        <BackgroundBeams className="absolute inset-0 z-0 opacity-60" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center lg:text-left"
            >
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Montrez vos <span className="animated-gradient-text">compétences</span> au monde
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mb-10 leading-relaxed">
                Créez des expériences digitales qui marquent les esprits et propulsent votre expertise à l'échelle mondiale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <ShimmerButton
                  onClick={() => window.location.assign('/contact')}
                  className="text-lg"
                  background="oklch(0.2097 0.008 274.5332)"
                  shimmerColor="#ffffff"
                >
                  Commencer maintenant →
                </ShimmerButton>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-border text-foreground hover:bg-foreground/10">
                  <Link to="/portfolio">Découvrir nos projets</Link>
                </Button>
              </div>
            </motion.div>

            {/* Globe */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 flex justify-center"
            >
             <Globe 
                size={500}
                rotationSpeed={0.001}
                className="drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Loop Transition */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">technologies maitrisées</h3>
          </div>
        </div>
        {(() => {
          const techLogos = [
            { node: <SiReact />, title: "React", href: "https://react.dev" },
            { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
            { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
            { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
          ]
          return (
            <div className="relative h-24 md:h-28 w-screen overflow-hidden">
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
                width="100vw"
                ariaLabel="Logo des technologies"
              />
            </div>
          )
        })()}
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions web sur-mesure conçues pour les petites entreprises, optimisées pour l'expérience utilisateur, la performance et la conversion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Prototype Gratuit */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            {/* Carte principale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative group"
            >
              {/* Glow effect subtil */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/90 backdrop-blur-xl border border-border/40 rounded-3xl p-8 md:p-12 shadow-xl text-center">
                {/* Icône en haut */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex justify-center mb-8"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-primary/30 shadow-lg flex items-center justify-center backdrop-blur-sm">
                    <Palette className="text-primary" size={40} />
                  </div>
                </motion.div>

                {/* Titre avec gradient */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="font-heading text-4xl md:text-5xl font-bold mb-6"
                >
                  Prototype <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gratuit</span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                  Nous réalisons <span className="font-semibold text-primary">gratuitement</span> un prototype de votre site web une fois que vous nous contactez pour une demande. Visualisez votre projet avant de vous engager !
                </motion.p>

                {/* Liste des bénéfices en 2 colonnes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto"
                >
                  {[
                    "Maquette personnalisée",
                    "Design adapté à votre marque", 
                    "Aucun engagement",
                    "Livraison sous 72h"
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + idx * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 text-left"
                    >
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="mb-6 flex justify-center"
                >
                  <ShimmerButton
                    className="text-lg px-12 py-4 font-semibold"
                    borderRadius="12px"
                    background="oklch(0.2097 0.008 274.5332)"
                    shimmerColor="#ffffff"
                    onClick={() => window.location.assign('/contact')}
                  >
                    Demander mon prototype gratuit →
                  </ShimmerButton>
                </motion.div>

                {/* Note en bas */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="text-xs text-muted-foreground/80"
                >
                  * Prototype réalisé après étude de votre demande et validation du projet
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-4 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="text-primary" size={18} />
                <span>Livraison rapide</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="text-primary" size={18} />
                <span>Support 24/7</span>
              </div>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Transformez votre vision en <span className="animated-gradient-text">réalité digitale</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Rejoignez les entrepreneurs qui ont fait confiance à notre expertise pour <span className="font-semibold">propulser leur business en ligne</span>.
            </p>
            <p className="mb-8 text-primary">
              Offre limitée — <span className="font-semibold">30% sur les frais de mise en service</span>
            </p>

            <div className="flex justify-center">
              <Button asChild size="lg" className="text-lg px-10 py-6">
                <Link to="/contact">Démarrer mon projet</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
