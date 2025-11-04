import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
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
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
              Nos Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sites élégants, faciles à maintenir, pensés pour convertir — de l’idée au lancement, avec accompagnement continu.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                "Design sur‑mesure",
                "Performance et accessibilité",
                "Sans engagement, mise en service rapide",
              ].map((t) => (
                <span key={t} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aperçu */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Nevos conçoit des sites vitrine modernes et efficaces pour petites entreprises et indépendants. Nous maîtrisons la mise en page, les animations, la clarté des messages, et nous privilégions la simplicité pour que ton site travaille pour toi. Et tu gardes la main grâce à un espace d’administration facile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bloc Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-3">Ce que nous proposons</h2>
            <p className="text-muted-foreground">Des modules simples et utiles, centrés sur l’essentiel.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  "Gestion d’indisponibilités",
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
              <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <s.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-heading text-xl font-semibold text-foreground">{s.title}</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-3">Compétences</h2>
            <p className="text-muted-foreground">Ce qui fait la qualité et la simplicité d’usage.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Design & UI", icon: Palette, bullets: ["Mise en page soignée", "Typographies lisibles", "Système de cartes", "Animations maîtrisées"] },
              { title: "UX & contenu", icon: FileText, bullets: ["Structure orientée conversion", "Titres clairs", "CTA efficaces", "Messages simples"] },
              { title: "Frontend", icon: Code2, bullets: ["Composants réutilisables", "Rendu rapide", "Qualité du code", "Animations légères"] },
              { title: "Accessibilité", icon: Accessibility, bullets: ["Navigation intuitive", "Lisibilité", "Compatibilité mobile"] },
              { title: "Maintenance", icon: Wrench, bullets: ["Suivi", "Corrections", "Évolutions", "Accompagnement Admin"] },
            ].map((c, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <c.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-heading text-xl font-semibold text-foreground">{c.title}</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {c.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-3">Processus</h2>
            <p className="text-muted-foreground">Du cadrage à l’accompagnement continu.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "1) Cadrage", desc: "Objectifs, audience, pages, ton, priorités.", icon: Target },
              { title: "2) Prototype rapide", desc: "Aperçu du style et de l’ergonomie pour validation.", icon: Sparkles },
              { title: "3) Design & contenu", desc: "Construction des sections, texte d’accroche, CTA.", icon: Palette },
              { title: "4) Développement", desc: "Composants, pages, animations, performance, accessibilité.", icon: Code2 },
              { title: "5) Recette", desc: "Tests, corrections, finalisation des contenus.", icon: CheckCircle },
              { title: "6) Mise en ligne", desc: "Publication, configuration, préparation à l’administration.", icon: Upload },
              { title: "7) Accompagnement", desc: "Maintenance, support, évolutions au fil de l’eau.", icon: LifeBuoy },
            ].map((p, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <p.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-heading text-lg font-semibold text-foreground">{p.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{p.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (Accordéon) */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-3">FAQ</h2>
            <p className="text-muted-foreground">Les réponses aux questions les plus courantes.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {[
                { q: "Puis‑je modifier mon site moi‑même ?", a: "Oui, via l’Admin: textes, images, sections, pages. Formation incluse." },
                { q: "Est‑ce sans engagement ?", a: "Oui. Tu peux démarrer sans engagement. Le devis reste personnalisé." },
                { q: "Quelles pages sont incluses de base ?", a: "Accueil, À propos, Services, Contact. Options: Galerie, FAQ, Réservation, Commande." },
                { q: "Comment se passe la création ?", a: "Prototype pour valider, puis design et développement, recette, mise en ligne." },
                { q: "Quel est le délai moyen ?", a: "Prototype en 72h. Site complet: 2 à 4 semaines selon périmètre." },
                { q: "La maintenance est‑elle obligatoire ?", a: "Recommandée, mais modulable. Elle assure mises à jour et corrections." },
                { q: "Réservation en ligne ?", a: "Oui, module simple avec confirmations et indisponibilités." },
                { q: "Commande à retirer (Click & Collect) ?", a: "Oui, catalogue simple avec options et récapitulatif de commande." },
                { q: "Aide à la rédaction des contenus ?", a: "Oui, accompagnement à la formulation des messages clés." },
                { q: "Comment vous contacter ?", a: "Email et téléphone, tous les jours. Réponse rapide." },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="font-heading text-lg text-foreground">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Tarifs indicatifs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-3">Tarifs indicatifs</h2>
            <p className="text-muted-foreground">Transparents et ajustables selon le périmètre de ton projet.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Site vitrine (standard)", desc: "À partir de 1 200 € (selon nombre de pages et animations)." },
              { title: "Réservation ou Click & Collect", desc: "Module additionnel: 500 € – 1 500 € selon fonctionnalités." },
              { title: "Admin (mise en place et formation)", desc: "Inclus dans le projet, avec prise en main guidée." },
              { title: "Maintenance", desc: "49 € – 149 € / mois selon couverture." },
              { title: "Option abonnement", desc: "70 € – 110 € / mois + 350 € de mise en service (alternative au forfait unique)." },
              { title: "Tarif moyen", desc: "Un site vitrine avec un module se situe souvent autour de 1 800 € — à ajuster selon ton besoin. Le devis reste personnalisé." },
            ].map((t, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="p-6 h-full">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{t.title}</h3>
                  <p className="text-muted-foreground">{t.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="secondary" size="lg" className="px-6">
                <Link to="/portfolio">Voir des exemples</Link>
              </Button>
              <Button asChild size="lg" className="px-6">
                <Link to="/contact">Démarrer votre projet</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6">
                <Link to="/about">En savoir plus sur notre approche</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
