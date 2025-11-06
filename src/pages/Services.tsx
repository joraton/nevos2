import { motion, easeOut, easeInOut } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import BackgroundPaths from "@/components/BackgroundPaths";
import { useIsMobile } from "@/hooks/useIsMobile";
import ServicesMobile from "@/pages/mobile/ServicesMobile";
import {
  Globe,
  CalendarDays,
  ShoppingCart,
  Settings,
  Wrench,
  Gauge,
  Palette,
  FileText,
  Code2,
  Accessibility,
  Target,
  Sparkles,
  CheckCircle,
  Upload,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const isMobile = useIsMobile(768);
  const shouldAnimate = !isMobile;
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: isMobile ? 'auto' : 'smooth' });
  };

  // Désactiver le smooth scroll sur mobile pour cette page
  // (la feuille globale définit html{scroll-behavior:smooth})
  // On force à auto le temps de la visite
  // pour respecter l’absence totale d’animations sur mobile
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

  // Animation variants pour le fade-in
  const fadeInUp = shouldAnimate
    ? {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.7, ease: easeOut },
      }
    : {};

  const fadeIn = shouldAnimate
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.8, ease: easeOut },
      }
    : {};

  const staggerContainer = shouldAnimate
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-100px" },
        transition: { staggerChildren: 0.1 },
      }
    : {};

  return isMobile ? (
    <ServicesMobile />
  ) : (
    <div className={`min-h-screen pt-20`}>
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-30"
            style={{
              background: "radial-gradient(circle, oklch(0.6723 0.1606 244.9955 / 0.4) 0%, transparent 70%)",
              top: "-10%",
              left: "10%",
            }}
            animate={shouldAnimate ? { x: [0, 100, 0], y: [0, 80, 0], scale: [1, 1.1, 1] } : undefined}
            transition={shouldAnimate ? { duration: 20, repeat: Infinity, ease: easeInOut } : undefined}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
            style={{
              background: "radial-gradient(circle, oklch(0.6692 0.1607 245.0110 / 0.35) 0%, transparent 70%)",
              bottom: "-5%",
              right: "15%",
            }}
            animate={shouldAnimate ? { x: [0, -120, 0], y: [0, -100, 0], scale: [1, 1.2, 1] } : undefined}
            transition={shouldAnimate ? { duration: 25, repeat: Infinity, ease: easeInOut } : undefined}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
            style={{
              background: "radial-gradient(circle, oklch(0.6818 0.1584 243.3540 / 0.3) 0%, transparent 70%)",
              top: "40%",
              right: "5%",
            }}
            animate={shouldAnimate ? { x: [0, 60, 0], y: [0, -60, 0], scale: [1, 0.9, 1] } : undefined}
            transition={shouldAnimate ? { duration: 18, repeat: Infinity, ease: easeInOut } : undefined}
          />
        </div>

        {/* Background Paths Animation - Static on mobile */}
        <BackgroundPaths position={1} isMobile={isMobile} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={shouldAnimate ? { duration: 0.8, ease: easeOut } : undefined}
            className="text-center max-w-4xl mx-auto"
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            <motion.div
              initial={shouldAnimate ? { opacity: 0, scale: 0.9 } : undefined}
              animate={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
              transition={shouldAnimate ? { delay: 0.2, duration: 0.6 } : undefined}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              data-aos={shouldAnimate ? 'zoom-in' : undefined}
            >
              <span className="text-sm font-medium text-primary">Votre partenaire digital</span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight" data-aos={shouldAnimate ? 'fade-up' : undefined}>
              Nos <span className="relative inline-block">
                <span className="relative z-10">Services</span>
                <motion.span
                  className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -rotate-1"
                  initial={shouldAnimate ? { scaleX: 0 } : undefined}
                  animate={shouldAnimate ? { scaleX: 1 } : undefined}
                  transition={shouldAnimate ? { delay: 0.5, duration: 0.8 } : undefined}
                />
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4" data-aos={shouldAnimate ? 'fade-up' : undefined}>
              Sites élégants, faciles à maintenir, pensés pour convertir — de l'idée au lancement, avec accompagnement continu.
            </p>

            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              transition={shouldAnimate ? { delay: 0.6, duration: 0.6 } : undefined}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4"
              data-aos={shouldAnimate ? 'fade-up' : undefined}
            >
              {[
                "Design sur‑mesure",
                "Performance et accessibilité",
                "Sans engagement, mise en service rapide",
              ].map((t, idx) => (
                <motion.span
                  key={t}
                  initial={shouldAnimate ? { opacity: 0, scale: 0.8 } : undefined}
                  animate={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
                  transition={shouldAnimate ? { delay: 0.7 + idx * 0.1, duration: 0.5 } : undefined}
                  className="px-5 py-2 text-sm font-medium rounded-full glass-card hover:bg-primary/10 transition-all duration-300 cursor-default hover:scale-105"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Aperçu */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto"
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            <div className="glass-card p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border-2 border-primary/20 shadow-xl">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                <span className="font-semibold text-foreground">Nevos</span> conçoit des sites vitrine modernes et efficaces pour petites entreprises et indépendants. Nous maîtrisons la mise en page, les animations, la clarté des messages, et nous privilégions la simplicité pour que ton site travaille pour toi. Et tu gardes la main grâce à un{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-medium text-primary">espace d'administration facile</span>
                  <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -rotate-1" />
                </span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bloc Services */}
      <section className="relative py-16 sm:py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.9317_0.0118_231.6594/0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.9317_0.0118_231.6594/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Ce que nous proposons
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Des modules simples et utiles, centrés sur l'essentiel.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial={shouldAnimate ? "initial" : undefined}
            whileInView={shouldAnimate ? "whileInView" : undefined}
            viewport={shouldAnimate ? { once: true, margin: "-100px" } : undefined}
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            {[
              {
                title: "Site vitrine moderne",
                icon: Globe,
                bullets: [
                  "Pages essentielles (Accueil, À propos, Services, Contact)",
                  "Mise en page soignée et responsive",
                  "Textes clairs et visuels adaptés",
                ],
              },
              {
                title: "Réservation en ligne",
                icon: CalendarDays,
                bullets: [
                  "Formulaire simple, confirmation automatique",
                  "Gestion d'indisponibilités",
                  "Notifications basiques",
                  "Idéal pour restaurants, cabinets, coaching, soins",
                ],
              },
              {
                title: "Click & Collect / Commande à retirer",
                icon: ShoppingCart,
                bullets: [
                  "Catalogue simple, panier, options produits",
                  "Confirmation de commande",
                  "Adapté aux artisans (boulangerie, boucherie, pâtisserie…)",
                ],
              },
              {
                title: "Espace Admin (modifier soi‑même)",
                icon: Settings,
                bullets: [
                  "Modifier textes, images, sections et pages courantes",
                  "Rôles simples (propriétaire, éditeur)",
                  "Brouillons, publication, historique et sauvegardes de base",
                  "Interface claire, formation incluse",
                ],
              },
              {
                title: "Maintenance & accompagnement",
                icon: Wrench,
                bullets: [
                  "Mises à jour régulières, correctifs et petites évolutions",
                  "Suivi de la stabilité",
                  "Support humain",
                ],
              },
              {
                title: "Performance & accessibilité",
                icon: Gauge,
                bullets: [
                  "Chargement rapide et lisibilité",
                  "Contrastes et hiérarchie claire",
                  "Ergonomie mobile",
                ],
              },
            ].map((s, idx) => (
              <motion.div
                key={idx}
                initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
                whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                viewport={shouldAnimate ? { once: true, margin: "-50px" } : undefined}
                transition={shouldAnimate ? { delay: idx * 0.15, duration: 0.6, ease: easeOut } : undefined}
                whileHover={shouldAnimate ? { y: -8, transition: { duration: 0.2 } } : undefined}
                className="group"
                data-aos={shouldAnimate ? 'fade-up' : undefined}
              >
                <Card className="p-8 h-full glass-card-hover relative overflow-hidden border-2 border-border hover:border-primary/50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {s.title}
                      </h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      {s.bullets.map((b, i) => (
                        <motion.li
                          key={i}
                          initial={shouldAnimate ? { opacity: 0, x: -10 } : undefined}
                          whileInView={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
                          viewport={shouldAnimate ? { once: true } : undefined}
                          transition={shouldAnimate ? { delay: idx * 0.1 + i * 0.05 } : undefined}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1.5 inline-block w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                          <span className="leading-relaxed">{b}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compétences */}
      <section className="relative py-16 sm:py-24 bg-card overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_oklch(0.6692_0.1607_245.0110/0.05),transparent_60%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Compétences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ce qui fait la qualité et la simplicité d'usage.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { title: "Design & UI", icon: Palette, bullets: ["Mise en page soignée", "Typographies lisibles", "Système de cartes", "Animations maîtrisées"] },
              { title: "UX & contenu", icon: FileText, bullets: ["Structure orientée conversion", "Titres clairs", "CTA efficaces", "Messages simples"] },
              { title: "Frontend", icon: Code2, bullets: ["Composants réutilisables", "Rendu rapide", "Qualité du code", "Animations légères"] },
              { title: "Accessibilité", icon: Accessibility, bullets: ["Navigation intuitive", "Lisibilité", "Compatibilité mobile"] },
              { title: "Maintenance", icon: Wrench, bullets: ["Suivi", "Corrections", "Évolutions", "Accompagnement Admin"] },
            ].map((c, idx) => (
              <motion.div
                key={idx}
                initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
                whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                viewport={shouldAnimate ? { once: true, margin: "-50px" } : undefined}
                transition={shouldAnimate ? { delay: idx * 0.15, duration: 0.6, ease: easeOut } : undefined}
                whileHover={shouldAnimate ? { y: -6, transition: { duration: 0.2 } } : undefined}
                className="group"
                data-aos={shouldAnimate ? 'fade-up' : undefined}
              >
                <Card className="p-8 h-full glass-card-hover border-2 border-border hover:border-primary/40 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent rounded-full translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                        <c.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {c.title}
                      </h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      {c.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Processus */}
      <section className="relative py-16 sm:py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Processus
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Du cadrage à l'accompagnement continu.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              { title: "1) Cadrage", desc: "Objectifs, audience, pages, ton, priorités.", icon: Target },
              { title: "2) Prototype rapide", desc: "Aperçu du style et de l'ergonomie pour validation.", icon: Sparkles },
              { title: "3) Design & contenu", desc: "Construction des sections, texte d'accroche, CTA.", icon: Palette },
              { title: "4) Développement", desc: "Composants, pages, animations, performance, accessibilité.", icon: Code2 },
              { title: "5) Recette", desc: "Tests, corrections, finalisation des contenus.", icon: CheckCircle },
              { title: "6) Mise en ligne", desc: "Publication, configuration, préparation à l'administration.", icon: Upload },
              { title: "7) Accompagnement", desc: "Maintenance, support, évolutions au fil de l'eau.", icon: LifeBuoy },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                initial={shouldAnimate ? { opacity: 0, y: 30, scale: 0.95 } : undefined}
                whileInView={shouldAnimate ? { opacity: 1, y: 0, scale: 1 } : undefined}
                viewport={shouldAnimate ? { once: true, margin: "-50px" } : undefined}
                transition={shouldAnimate ? { delay: idx * 0.1, duration: 0.6, ease: easeOut } : undefined}
                className="group relative"
                data-aos={shouldAnimate ? 'fade-up' : undefined}
              >
                <Card className="p-6 h-full glass-card hover:shadow-lg transition-all duration-300 border-2 border-border group-hover:border-primary/30">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={shouldAnimate ? { rotate: 360, scale: 1.1 } : undefined}
                      transition={shouldAnimate ? { duration: 0.6 } : undefined}
                      className="mb-4 p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300"
                    >
                      <p.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </motion.div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {idx < 6 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ (Accordéon) */}
      <section className="relative py-16 sm:py-24 bg-card overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.6723_0.1606_244.9955/0.08),transparent_60%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              FAQ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les réponses aux questions les plus courantes.
            </p>
          </motion.div>

          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            viewport={shouldAnimate ? { once: true, margin: "-100px" } : undefined}
            transition={shouldAnimate ? { duration: 0.7, ease: easeOut } : undefined}
            className="max-w-4xl mx-auto glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-border"
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Puis‑je modifier mon site moi‑même ?",
                  a: "Absolument ! C'est l'un des grands avantages de nos sites. Nous intégrons un espace d'administration intuitif qui te permet de modifier facilement les textes, images, sections et même d'ajouter de nouvelles pages. Pas besoin de toucher au code ou d'être un expert technique. Nous te formons à son utilisation lors de la livraison du site, et nous restons disponibles si tu as des questions par la suite. Tu gardes ainsi le contrôle total sur ton contenu, tout en nous sollicitant uniquement pour les évolutions plus techniques."
                },
                {
                  q: "Est‑ce sans engagement ?",
                  a: "Oui, nous travaillons en toute transparence et sans engagement à long terme. Tu peux démarrer ton projet sans contrainte de durée. Chaque projet fait l'objet d'un devis personnalisé adapté à tes besoins et à ton budget. Si tu optes pour un abonnement mensuel, tu n'es pas verrouillé sur plusieurs années : tu peux ajuster ou arrêter selon l'évolution de ton activité. Notre objectif est de construire une relation de confiance durable, pas de te lier par des contrats contraignants."
                },
                {
                  q: "Quelles pages sont incluses de base ?",
                  a: "Dans notre offre de base, nous créons les pages essentielles pour un site vitrine professionnel : une page d'Accueil percutante, une page À propos pour présenter ton histoire et tes valeurs, une page Services détaillant ce que tu proposes, et une page Contact pour faciliter les prises de contact. Si ton activité le nécessite, nous pouvons ajouter d'autres pages comme une Galerie photo, une FAQ, un Blog, ou encore des modules spécifiques comme la Réservation en ligne ou le Click & Collect. Tout est modulable selon tes besoins !"
                },
                {
                  q: "Comment se passe la création ?",
                  a: "Notre processus est simple et collaboratif. On commence par un cadrage pour définir ensemble tes objectifs, ton audience cible et les fonctionnalités nécessaires. Ensuite, nous créons un prototype rapide pour valider l'ergonomie et le style visuel. Une fois approuvé, nous passons au design complet et au développement, en intégrant animations et optimisations. Tu peux suivre l'avancement et faire des retours à chaque étape. Après une phase de recette (tests et ajustements), nous mettons le site en ligne et te formons à son administration. Simple, transparent et efficace !"
                },
                {
                  q: "Quel est le délai moyen ?",
                  a: "Nous sommes réactifs ! Tu peux recevoir un premier prototype visuel en 72 heures pour valider rapidement la direction artistique. Pour un site complet, compte entre 2 et 4 semaines selon le périmètre du projet. Un site vitrine simple avec 4-5 pages sera prêt en 2 semaines, tandis qu'un site plus élaboré avec réservation en ligne et administration avancée prendra plutôt 3 à 4 semaines. Ces délais incluent les allers-retours et ajustements pour que le résultat te convienne parfaitement. Nous restons flexibles et nous adaptons à ton planning si tu as une date de lancement particulière."
                },
                {
                  q: "La maintenance est‑elle obligatoire ?",
                  a: "Elle n'est pas obligatoire, mais vivement recommandée pour garantir la sécurité, la performance et la pérennité de ton site. La maintenance inclut les mises à jour techniques régulières, les correctifs de sécurité, les sauvegardes automatiques, l'hébergement et le support pour les petites évolutions. Notre formule tout compris est à 30€/mois et te permet de dormir tranquille. Sans maintenance, ton site reste fonctionnel, mais tu devras gérer toi-même les mises à jour, l'hébergement et risquer des vulnérabilités ou des incompatibilités. On en discute ensemble pour trouver la solution la plus adaptée à ta situation."
                },
                {
                  q: "Réservation en ligne ?",
                  a: "Oui, nous proposons un module de réservation en ligne simple et efficace, parfait pour les restaurants, cabinets médicaux, salons de coiffure, coachs, ou toute activité nécessitant une prise de rendez-vous. Le système permet à tes clients de réserver un créneau directement depuis ton site, avec confirmation automatique par email. Tu peux gérer tes disponibilités, bloquer certains créneaux, et recevoir des notifications pour chaque nouvelle réservation. L'interface d'administration est intuitive et te permet de visualiser ton planning en un coup d'œil. On peut également intégrer des options comme la durée variable selon le service, ou un système d'acompte si besoin."
                },
                {
                  q: "Commande à retirer (Click & Collect) ?",
                  a: "Oui, nous créons des solutions de Click & Collect sur mesure, idéales pour les boulangeries, boucheries, pâtisseries, traiteurs, ou tout commerce de proximité. Tes clients peuvent parcourir ton catalogue de produits, ajouter des articles à leur panier, choisir des options (taille, personnalisation, etc.), et passer commande pour un retrait en magasin. Ils reçoivent une confirmation avec récapitulatif, et toi tu reçois les commandes en temps réel. L'interface te permet de gérer facilement ton catalogue, tes disponibilités, et de communiquer avec tes clients. Tout est pensé pour être simple et fluide, sans les complications des gros systèmes e-commerce."
                },
                {
                  q: "Aide à la rédaction des contenus ?",
                  a: "Oui, nous t'accompagnons dans la formulation de tes messages clés ! Écrire pour le web, c'est un art : il faut être clair, concis et percutant. Nous t'aidons à structurer tes idées, à trouver les bons accroches, et à mettre en valeur ce qui te différencie. Que ce soit pour ta page d'accueil, la présentation de tes services ou tes appels à l'action, nous pouvons co-écrire les textes avec toi ou reformuler tes contenus pour qu'ils soient plus impactants. L'objectif : que ton message résonne avec ton audience et incite à l'action. Tu gardes bien sûr le dernier mot sur tous les textes !"
                },
                {
                  q: "Comment vous contacter ?",
                  a: "Nous sommes facilement joignables et réactifs ! Tu peux nous contacter par email ou par téléphone, tous les jours de la semaine. Nous répondons généralement sous quelques heures maximum, et souvent bien plus vite. Pour démarrer, le plus simple est de remplir le formulaire de contact sur notre site en nous donnant quelques détails sur ton projet. Nous te recontactons rapidement pour échanger et établir un premier devis. Pas de process lourd ni de rendez-vous commercial interminable : juste une discussion franche et humaine pour voir comment on peut t'aider. On est là pour toi !"
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={shouldAnimate ? { opacity: 0, x: -30 } : undefined}
                  whileInView={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
                  viewport={shouldAnimate ? { once: true, margin: "-20px" } : undefined}
                  transition={shouldAnimate ? { delay: idx * 0.08, duration: 0.5, ease: easeOut } : undefined}
                >
                  <AccordionItem
                    value={`item-${idx}`}
                    className="border-b border-border/50 last:border-0 pb-4 last:pb-0"
                  >
                    <AccordionTrigger className="font-heading text-base md:text-lg text-foreground hover:text-primary transition-colors duration-300 text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed pl-2 border-l-2 border-primary/30">
                        {item.a}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Tarifs indicatifs */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-background via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_oklch(0.6723_0.1606_244.9955/0.08),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tarifs indicatifs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparents et ajustables selon le périmètre de ton projet.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { title: "Site vitrine (base)", desc: "À partir de 700 € — site professionnel avec design moderne et responsive.", featured: false },
              { title: "Maintenance + Hébergement", desc: "30 € / mois — mises à jour, sécurité, sauvegardes et support technique.", featured: false },
              { title: "Admin (mise en place et formation)", desc: "Inclus dans le projet, avec prise en main guidée.", featured: false },
              { title: "Modules additionnels", desc: "Réservation en ligne, Click & Collect, e-commerce — tarifs sur mesure selon vos besoins.", featured: false },
              { title: "Tarif adapté à votre projet", desc: "Les tarifs évoluent selon vos besoins spécifiques : nombre de pages, fonctionnalités, modules personnalisés. Chaque devis est sur mesure.", featured: true },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
                whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                viewport={shouldAnimate ? { once: true, margin: "-50px" } : undefined}
                transition={shouldAnimate ? { delay: idx * 0.12, duration: 0.6, ease: easeOut } : undefined}
                whileHover={shouldAnimate ? { y: -4, transition: { duration: 0.2 } } : undefined}
                className={`group ${t.featured ? 'lg:col-span-3' : ''}`}
                data-aos={shouldAnimate ? 'fade-up' : undefined}
              >
                <Card className={`p-8 h-full glass-card-hover relative overflow-hidden ${
                  t.featured
                    ? 'border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-transparent'
                    : 'border-2 border-border hover:border-primary/30'
                }`}>
                  {t.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      Recommandé
                    </div>
                  )}

                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500" />

                  <div className={`relative z-10 ${t.featured ? 'text-center max-w-3xl mx-auto' : ''}`}>
                    <h3 className={`font-heading ${
                      t.featured ? 'text-2xl' : 'text-xl'
                    } font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300`}>
                      {t.title}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${
                      t.featured ? 'text-lg' : ''
                    }`}>
                      {t.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_oklch(0.6723_0.1606_244.9955/0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,oklch(0.6723_0.1606_244.9955/0.05)_50%,transparent_100%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            viewport={shouldAnimate ? { once: true, margin: "-100px" } : undefined}
            transition={shouldAnimate ? { duration: 0.8, ease: easeOut } : undefined}
            className="text-center max-w-4xl mx-auto"
            data-aos={shouldAnimate ? 'fade-up' : undefined}
          >
            <motion.h2
              initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={shouldAnimate ? { once: true, margin: "-50px" } : undefined}
              transition={shouldAnimate ? { duration: 0.7, ease: easeOut } : undefined}
              className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Prêt à démarrer votre projet ?
            </motion.h2>

            <motion.p
              initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={shouldAnimate ? { once: true, margin: "-50px" } : undefined}
              transition={shouldAnimate ? { delay: 0.15, duration: 0.7, ease: easeOut } : undefined}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-12 max-w-2xl mx-auto px-4"
            >
              Découvrez nos réalisations, lancez-vous ou apprenez-en plus sur notre approche collaborative.
            </motion.p>

            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={shouldAnimate ? { once: true, margin: "-50px" } : undefined}
              transition={shouldAnimate ? { delay: 0.3, duration: 0.7, ease: easeOut } : undefined}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base group border-2 hover:border-primary/50">
              <Link to="/portfolio" onClick={scrollTop} className="flex items-center gap-2">
                  Voir des exemples
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/contact" onClick={scrollTop} className="flex items-center gap-2">
                  Démarrer votre projet
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base group">
              <Link to="/about" onClick={scrollTop} className="flex items-center gap-2">
                  En savoir plus
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
