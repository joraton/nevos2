import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Lightbulb, Users, Clock } from "lucide-react";
import "@/components/SpaceBG.css";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Section Héros (refonte avec image) */}
      <section className="relative py-24 bg-gradient-to-br from-[var(--background)] via-card/50 to-[var(--background)] space-bg">
        {/* Arrière-plan spatial subtil */}
        <div className="space-stars" />
        <div className="space-nebula" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bloc texte */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <span className="inline-block mb-4 px-4 py-1 rounded-full border border-border text-xs tracking-wider uppercase text-muted-foreground">
                Votre partenaire digital de confiance
              </span>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
                À propos de Nevos
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Nous créons des expériences web élégantes, performantes et accessibles, conçues pour accélérer la visibilité et la croissance de votre entreprise.
              </p>
              <div className="flex items-center gap-4">
                <Button asChild size="lg" className="px-8 py-6">
                  <Link
                    to="/contact"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    Discutons de votre projet →
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Bloc image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <motion.img
                src="/asset/a propos.png"
                alt="Présentation de Nevos"
                className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-white/10 object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              {/* Lueur décorative */}
              <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 blur-xl" />
            </motion.div>
          </div>
        </div>
  </section>

      {/* Section Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block mb-3 px-3 py-1 rounded-full border border-border text-xs tracking-wider uppercase text-muted-foreground">Notre parcours</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Notre histoire</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative"
          >
            <ol className="relative border-l border-border">
              <motion.li className="mb-10 ml-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-background bg-gradient-to-br from-primary/25 to-accent/25">
                  <svg className="w-2.5 h-2.5 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 font-heading text-xl md:text-2xl font-semibold text-foreground">
                  1. Le constat initial
                  <span className="ml-3 bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-sm">Départ</span>
                </h3>
                <p className="text-muted-foreground">
                  Notre histoire commence avec un constat simple : trop d'entreprises repoussaient la création d'un site web parce que les coûts initiaux étaient trop élevés, ou parce qu'elles redoutaient des résultats « cheap » à bas prix.
                </p>
              </motion.li>

              <motion.li className="mb-10 ml-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-background bg-gradient-to-br from-primary/25 to-accent/25">
                  <svg className="w-2.5 h-2.5 text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
                  </svg>
                </span>
                <h3 className="mb-1 font-heading text-xl md:text-2xl font-semibold text-foreground">2. La solution Nevos</h3>
                <p className="text-muted-foreground">
                  Chez Nevos, nous avons renversé le modèle traditionnel : proposer des sites vitrine au design soigné et aux performances irréprochables, accessibles via un abonnement mensuel tout compris. Pas de factures surprises, pas de compromis sur la qualité ; une solution claire, agile et évolutive.
                </p>
              </motion.li>

              <motion.li className="ml-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-background bg-gradient-to-br from-primary/25 to-accent/25">
                  <svg className="w-2.5 h-2.5 text-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
                  </svg>
                </span>
                <h3 className="mb-1 font-heading text-xl md:text-2xl font-semibold text-foreground">3. Notre mission</h3>
                <p className="text-muted-foreground">
                  Offrir à chaque entreprise l’outil digital qui lui permet de gagner en visibilité, de séduire davantage de clients et d’accélérer sa croissance. Une exigence créative alliée à une tarification équitable, qui inspire chaque ligne de code.
                </p>
                <div className="mt-4">
                  <Button asChild size="sm" variant="default" className="px-4">
                    <Link
                      to="/services"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      Découvrir nos services →
                    </Link>
                  </Button>
                </div>
              </motion.li>
            </ol>
          </motion.div>
        </div>
      </section>

      

      {/* Section Nos Valeurs */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block mb-3 px-3 py-1 rounded-full border border-border text-xs tracking-wider uppercase text-muted-foreground">Ce qui nous guide</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">Nos valeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Des principes fondamentaux qui guident chacune de nos actions et décisions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Créativité */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="p-8 text-center h-full group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 ring-1 ring-primary/20 mx-auto mb-6 flex items-center justify-center transition-transform group-hover:rotate-6">
                  <Lightbulb className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Créativité</h3>
                <p className="text-muted-foreground text-sm">Nous innovons constamment pour vous proposer des designs uniques et des fonctionnalités adaptées.</p>
              </Card>
            </motion.div>

            {/* Transparence */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="p-8 text-center h-full group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 ring-1 ring-primary/20 mx-auto mb-6 flex items-center justify-center transition-transform group-hover:rotate-6">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Transparence</h3>
                <p className="text-muted-foreground text-sm">Nous favorisons une communication claire et honnête, sans frais cachés ni mauvaises surprises.</p>
              </Card>
            </motion.div>

            {/* Réactivité */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="p-8 text-center h-full group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 ring-1 ring-primary/20 mx-auto mb-6 flex items-center justify-center transition-transform group-hover:rotate-6">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Réactivité</h3>
                <p className="text-muted-foreground text-sm">Nous nous engageons à répondre rapidement à vos demandes et à respecter les délais convenus.</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Arrière-plan spatial subtil */}
        <div className="space-stars" />
        <div className="space-nebula" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block mb-3 px-3 py-1 rounded-full border border-border text-xs tracking-wider uppercase text-muted-foreground">Prêt à démarrer ?</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Un projet digital en tête ?</h2>
            <p className="text-lg text-muted-foreground mb-8">Dites-nous tout ! Notre équipe vous contacte le jour même pour discuter de votre projet.</p>
            <Button asChild size="lg" className="text-lg px-10 py-6">
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Je passe à l'action →
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
