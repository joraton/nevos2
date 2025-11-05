import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Legal() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-background via-card/30 to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mentions Légales
            </h1>
            <p className="text-lg text-muted-foreground">
              Informations légales concernant le site Nevos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto prose prose-slate dark:prose-invert prose-headings:font-heading"
          >
            {/* Éditeur du site */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Éditeur du site</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  <strong>Raison sociale :</strong> Nevos
                </p>
                <p>
                  <strong>Forme juridique :</strong> Entreprise individuelle / Micro-entreprise
                </p>
                <p>
                  <strong>Siège social :</strong> 49 rue Saint Louis, Villemomble 93250
                </p>
                <p>
                  <strong>SIRET :</strong> [Numéro à compléter]
                </p>
                <p>
                  <strong>Email :</strong> nevos.website@gmail.com
                </p>
                <p>
                  <strong>Téléphone :</strong> 06 52 98 01 91
                </p>
                <p>
                  <strong>Directeur de la publication :</strong> Darmouni Jonathan
                </p>
              </div>
            </section>

            {/* Hébergement */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Hébergement du site</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Ce site est hébergé par :
                </p>
                <p>
                  <strong>Hébergeur :</strong> Vercel Inc.
                </p>
                <p>
                  <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
                </p>
                <p>
                  <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a>
                </p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Propriété intellectuelle</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  L'ensemble du contenu de ce site (textes, images, logos, vidéos, design, structure) est la propriété exclusive de Nevos, sauf mentions contraires.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de Nevos.
                </p>
                <p>
                  Les marques, logos et signes distinctifs reproduits sur ce site sont la propriété de Nevos ou de tiers ayant autorisé leur utilisation. Toute reproduction ou utilisation non autorisée est passible de poursuites.
                </p>
              </div>
            </section>

            {/* Protection des données personnelles */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Protection des données personnelles</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p>
                  Les données personnelles collectées via le formulaire de contact sont uniquement utilisées pour répondre à vos demandes et ne sont en aucun cas transmises à des tiers sans votre consentement.
                </p>
                <p>
                  Pour exercer vos droits, vous pouvez nous contacter à l'adresse suivante : <strong>nevos.website@gmail.com</strong>
                </p>
                <p>
                  <strong>Responsable du traitement des données :</strong> Nevos
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite.
                </p>
                <p>
                  Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site. Il permet de mémoriser des informations relatives à votre navigation.
                </p>
                <p>
                  Vous pouvez désactiver les cookies depuis les paramètres de votre navigateur. Cependant, cela peut affecter votre expérience de navigation sur le site.
                </p>
                <p>
                  <strong>Types de cookies utilisés :</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cookies techniques nécessaires au fonctionnement du site</li>
                  <li>Cookies de mesure d'audience (anonymisés)</li>
                </ul>
              </div>
            </section>

            {/* Responsabilité */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation de responsabilité</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Nevos s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Nevos ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
                </p>
                <p>
                  Nevos ne saurait être tenu responsable des erreurs, omissions ou résultats qui pourraient être obtenus par un mauvais usage des informations présentes sur le site.
                </p>
                <p>
                  Les liens hypertextes présents sur ce site peuvent renvoyer vers des sites tiers. Nevos n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
                <p>
                  Nevos se réserve le droit de modifier ou corriger le contenu de ce site à tout moment et sans préavis.
                </p>
              </div>
            </section>

            {/* Droit applicable */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Droit applicable et juridiction compétente</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Les présentes mentions légales sont régies par le droit français.
                </p>
                <p>
                  En cas de litige et à défaut d'accord amiable, le tribunal compétent sera celui du ressort du siège social de Nevos.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Pour toute question concernant ces mentions légales ou pour exercer vos droits, vous pouvez nous contacter :
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Par email :</strong> nevos.website@gmail.com</li>
                  <li><strong>Par courrier :</strong> Nevos, 49 rue Saint Louis, Villemomble 93250</li>
                </ul>
              </div>
            </section>

            {/* Date de mise à jour */}
            <section className="mb-12">
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Dernière mise à jour :</strong> Novembre 2025
                </p>
              </div>
            </section>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
