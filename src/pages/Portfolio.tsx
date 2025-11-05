import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { BackgroundPathsHero } from "@/components/ui/background-paths-hero";
import ShimmerButton from "@/components/ui/shimmer-button";

const categories = ["Tous", "Restaurant", "Commerce"];

const allProjects = [
  {
    title: "Café Parisien",
    category: "Restaurant",
    description: "Template pour un café parisien.",
    link: "https://preview--gourmand-cafe-web.lovable.app/",
    badge: "Projet #1",
    image: "/asset/preview--gourmand-cafe-web.lovable.app_(ordi).png"
  },
  {
    title: "Restaurant Japonais",
    category: "Restaurant", 
    description: "Restaurant japonais avec carte multilingue et commande en ligne.",
    link: "https://preview--yuji-template.lovable.app/",
    badge: "Projet #2",
    image: "/asset/Template jap.png"
  },
  {
    title: "Bistrot Traditionnel",
    category: "Restaurant",
    description: "Bistrot traditionnel avec présentation élégante et galerie photo.",
    link: "https://brasserie-honore-accueil.lovable.app/",
    badge: "Projet #3",
    image: "/asset/Template brasserie.png"
  },
  {
    title: "Restaurant Italien",
    category: "Restaurant",
    description: "Restaurant italien avec menu de pizzas, pâtes et réservation en ligne.",
    link: "https://preview--pizzeria-mama.lovable.app/",
    badge: "Projet #4",
    image: "/asset/Template italien.png"
  },
  {
    title: "Boulangerie Artisanale",
    category: "Commerce",
    description: "Boulangerie artisanale avec catalogue de produits et commande en ligne.",
    link: "https://preview--boulangerie-template.lovable.app/",
    badge: "Projet #5",
    image: "/asset/Template.boulangerie.png"
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous"
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with 36 Floating Paths */}
      <BackgroundPathsHero
        title="Nos Réalisations"
        subtitle="Découvrez quelques exemples de sites que nous avons créés pour des entreprises. Chaque projet est unique et adapté à l'identité de votre marque."
      />

      {/* Filters */}
      <section className="py-8 bg-card sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={`${project.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12, transition: { duration: 0.3, ease: "easeOut" } }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative h-full"
              >
                {/* Gradient background directly on the card container */}
                <div className="absolute -inset-0.5 rounded-3xl opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-500 bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,transparent)]" />

                <LiquidGlassCard className="relative border border-border rounded-3xl h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-background dark:bg-card">
                  {/* Aperçu image cliquable */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ouvrir ${project.title}`}
                    className="relative mb-4 rounded-xl overflow-hidden border border-border/60 bg-muted/20 aspect-[16/9] block group"
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} - Aperçu`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] filter brightness-105 contrast-110 saturate-105 [image-rendering:optimizeQuality] [will-change:transform]"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"; }}
                      />
                    ) : (
                      <div className="w-full h-full bg-muted animate-pulse" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/10" />
                  </a>
                  {/* Badge */}
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                    {project.badge}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Link */}
                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group/link"
                    >
                      Voir le template
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucun projet trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Votre Projet Sera Le Prochain
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Rejoignez nos clients satisfaits et donnez vie à votre vision digitale.
            </p>
            <ShimmerButton
              className="text-lg px-10 py-6 mx-auto mt-6 w-fit"
              background="oklch(0.2097 0.008 274.5332)"
              shimmerColor="#ffffff"
              borderRadius="12px"
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); window.location.assign('/contact'); }}
            >
              Démarrer un projet →
            </ShimmerButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
