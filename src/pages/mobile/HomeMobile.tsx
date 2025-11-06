import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { unzipSync } from "fflate";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LogoLoop from "@/components/LogoLoop";
import ShimmerButton from "@/components/ui/shimmer-button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { Globe as GlobeIcon, CalendarDays, Truck, CheckCircle, Palette } from "lucide-react";

export default function HomeMobile() {
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    return () => { html.style.scrollBehavior = prev; };
  }, []);

  // Animations scroll: framer-motion whileInView (aligné avec Footer mobile)

  // Référence pour l’animation Lottie dans le héros
  const heroAnimRef = useRef<HTMLDivElement | null>(null);

  // Charger et rendre le fichier .lottie (zip) en JSON via fflate + lottie-web
  useEffect(() => {
    let anim: any;
    const loadLottie = async () => {
      try {
        // 1) Essayer d’abord un export JSON si disponible
        let data: any | null = null;
        const jsonRes = await fetch("/asset/news.json");
        if (jsonRes.ok) {
          data = await jsonRes.json();
        } else {
          // 2) Fallback: charger le .lottie local
          const res = await fetch("/asset/news.lottie");
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          try {
            const text = await res.clone().text();
            data = JSON.parse(text);
          } catch {
            const buf = await res.arrayBuffer();
            const files = unzipSync(new Uint8Array(buf));
            const jsonEntry = Object.keys(files).find((p) => p.endsWith(".json"));
            if (!jsonEntry) throw new Error("Aucun JSON trouvé dans le .lottie");
            const jsonStr = new TextDecoder("utf-8").decode(files[jsonEntry]);
            data = JSON.parse(jsonStr);
          }
        }
        if (heroAnimRef.current) {
          anim = lottie.loadAnimation({
            container: heroAnimRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: data,
          });
        }
      } catch (e) {
        console.error("Erreur chargement Lottie:", e);
      }
    };
    loadLottie();
    return () => { if (anim) anim.destroy(); };
  }, []);

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

  return (
    <div className="min-h-screen no-motion">
      {/* Hero simplifié */}
      <section className="relative min-h-[100svh] flex items-center justify-center bg-gradient-to-br from-background via-accent/10 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <motion.div
              className="mx-auto mb-6 w-56 h-56"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div ref={heroAnimRef} style={{ width: "100%", height: "100%" }} />
            </motion.div>
            <motion.h1
              className="font-heading text-4xl font-bold text-foreground mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Montrez vos <span className="animated-gradient-text">compétences</span> au monde
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Restaurant, artisan, commerçant ? Nous concevons des sites web professionnels pour attirer plus de clients, valoriser votre savoir-faire et développer votre activité locale.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <ShimmerButton
                  className="text-base px-6 py-4 w-full sm:w-auto"
                  background="oklch(0.2097 0.008 274.5332)"
                  shimmerColor="#ffffff"
                >
                  Commencer maintenant →
                </ShimmerButton>
              </Link>
              <Button asChild size="lg" variant="outline" className="text-base px-6 py-4">
                <Link to="/portfolio">Découvrir nos projets</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies (LogoLoop animé, comme desktop) */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <motion.h3
              className="font-heading text-xl font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              technologies maîtrisées
            </motion.h3>
          </div>
          {(() => {
            const techLogos = [
              { node: <SiReact />, title: "React", href: "https://react.dev" },
              { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
              { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
              { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
            ];
            return (
              <motion.div
                className="relative h-24 w-full overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <LogoLoop
                  logos={techLogos}
                  speed={60}
                  direction="left"
                  logoHeight={36}
                  gap={40}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="var(--background)"
                  width="100%"
                  ariaLabel="Logo des technologies"
                />
              </motion.div>
            );
          })()}
        </div>
      </section>

      {/* Services (contenu complet) */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <motion.h2
              className="font-heading text-3xl font-bold text-foreground mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Nos services
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Des solutions web sur-mesure conçues pour les petites entreprises, optimisées pour l'expérience utilisateur, la performance et la conversion.
            </motion.p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <s.icon className="text-primary" size={24} />
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{s.description}</p>
                  {Array.isArray((s as any).features) && (
                    <ul className="space-y-2 text-muted-foreground">
                      {(s as any).features.map((f: string, i: number) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prototype Gratuit (contenu complet) */}
      <section className="py-16 bg-gradient-to-br from-background via-card/30 to-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-primary/30 shadow-lg flex items-center justify-center">
                <Palette className="text-primary" size={40} />
              </div>
            </motion.div>
            <motion.h2
              className="font-heading text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Prototype <span className="text-primary font-bold">Gratuit</span>
            </motion.h2>
            <motion.p
              className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Nous réalisons <span className="font-semibold text-primary">gratuitement</span> un prototype de votre site web une fois que vous nous contactez pour une demande. Visualisez votre projet avant de vous engager !
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {["Maquette personnalisée","Design adapté à votre marque","Aucun engagement","Livraison sous 72h"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-left">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.div
              className="mb-6 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact" className="block w-full sm:w-auto">
                <ShimmerButton
                  className="text-base px-8 py-4 w-full sm:w-auto font-semibold"
                  borderRadius="12px"
                  background="oklch(0.2097 0.008 274.5332)"
                  shimmerColor="#ffffff"
                >
                  Demander mon prototype gratuit →
                </ShimmerButton>
              </Link>
            </motion.div>
            <motion.p
              className="text-xs text-muted-foreground/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              * Prototype réalisé après étude de votre demande et validation du projet
            </motion.p>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              className="mb-4 flex flex-col sm:flex-row items-center justify-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="text-primary" size={18} />
                <span>Livraison rapide</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="text-primary" size={18} />
                <span>Support 24/7</span>
              </div>
            </motion.div>
            <motion.h2
              className="font-heading text-3xl font-bold text-foreground mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transformez votre vision en réalité digitale
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Rejoignez les entrepreneurs qui ont fait confiance à notre expertise pour <span className="font-semibold">propulser leur business en ligne</span>.
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/contact" className="block w-full sm:w-auto">
                <ShimmerButton
                  className="text-base px-8 py-5 w-full sm:w-auto"
                  background="oklch(0.2097 0.008 274.5332)"
                  shimmerColor="#ffffff"
                >
                  Démarrer mon projet
                </ShimmerButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}