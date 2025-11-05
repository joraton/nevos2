import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";

export default function Privacy() {
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
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Politique de Confidentialité
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Nous respectons votre vie privée et nous engageons à protéger vos données personnelles
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
            {/* Introduction */}
            <section className="mb-12">
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 mb-8">
                <p className="text-muted-foreground mb-0">
                  La présente politique de confidentialité décrit comment Nevos collecte, utilise, partage et protège vos données personnelles lorsque vous utilisez notre site web. Nous nous engageons à respecter votre vie privée et à protéger vos informations conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                </p>
              </div>
            </section>

            {/* Responsable du traitement */}
            <section className="mb-12">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 mt-1">
                  <UserCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2 mt-0">1. Responsable du traitement des données</h2>
                </div>
              </div>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Le responsable du traitement de vos données personnelles est :
                </p>
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p><strong>Nevos</strong></p>
                  <p>Adresse : 49 rue Saint Louis, Villemomble 93250</p>
                  <p>Email : nevos.website@gmail.com</p>
                  <p>Téléphone : 06 52 98 01 91</p>
                </div>
              </div>
            </section>

            {/* Données collectées */}
            <section className="mb-12">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 mt-1">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2 mt-0">2. Données personnelles collectées</h2>
                </div>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Nous collectons les données personnelles suivantes lorsque vous utilisez notre site :
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.1. Données collectées via le formulaire de contact</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Nom et prénom</strong> : pour vous identifier et personnaliser notre réponse</li>
                  <li><strong>Adresse email</strong> : pour vous répondre et échanger avec vous</li>
                  <li><strong>Numéro de téléphone</strong> (optionnel) : pour vous contacter si nécessaire</li>
                  <li><strong>Nom de l'entreprise</strong> (optionnel) : pour comprendre le contexte de votre demande</li>
                  <li><strong>Message</strong> : pour traiter votre demande ou question</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.2. Données collectées automatiquement</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Données de navigation</strong> : pages visitées, durée de visite, type d'appareil</li>
                  <li><strong>Adresse IP</strong> : pour des raisons de sécurité et statistiques (anonymisée)</li>
                  <li><strong>Cookies</strong> : pour améliorer votre expérience utilisateur (voir section Cookies)</li>
                </ul>
              </div>
            </section>

            {/* Finalités du traitement */}
            <section className="mb-12">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 mt-1">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2 mt-0">3. Finalités du traitement</h2>
                </div>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Vos données personnelles sont collectées et traitées pour les finalités suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Répondre à vos demandes</strong> : traiter vos questions et demandes de contact</li>
                  <li><strong>Gérer notre relation commerciale</strong> : établir des devis, suivre les projets</li>
                  <li><strong>Améliorer notre site</strong> : analyser l'utilisation du site pour l'optimiser</li>
                  <li><strong>Respecter nos obligations légales</strong> : conservation des données pour la comptabilité, etc.</li>
                  <li><strong>Envoyer des communications</strong> : uniquement si vous avez donné votre consentement explicite</li>
                </ul>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mt-4">
                  <p className="mb-0">
                    <strong>Base légale :</strong> Le traitement de vos données repose sur votre consentement, l'exécution d'un contrat, le respect d'obligations légales et notre intérêt légitime à améliorer nos services.
                  </p>
                </div>
              </div>
            </section>

            {/* Durée de conservation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Durée de conservation des données</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <p className="font-semibold text-foreground">Données du formulaire de contact</p>
                    <p className="mb-0">Conservées pendant <strong>3 ans</strong> à compter de notre dernier échange</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <p className="font-semibold text-foreground">Données clients (projets réalisés)</p>
                    <p className="mb-0">Conservées pendant <strong>10 ans</strong> conformément aux obligations comptables et fiscales</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <p className="font-semibold text-foreground">Cookies et données de navigation</p>
                    <p className="mb-0">Conservées pendant <strong>13 mois maximum</strong></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Destinataires des données */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Destinataires de vos données</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Vos données personnelles sont destinées exclusivement à :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>L'équipe Nevos</strong> : pour traiter vos demandes et gérer notre relation</li>
                  <li><strong>Notre hébergeur</strong> : Vercel Inc. pour le stockage sécurisé des données</li>
                  <li><strong>Nos prestataires techniques</strong> : uniquement dans le cadre de leurs missions (emailing, analytics)</li>
                </ul>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mt-4">
                  <p className="mb-0">
                    <strong>Important :</strong> Nous ne vendons, ne louons et ne transférons jamais vos données personnelles à des tiers à des fins commerciales. Tous nos prestataires sont soumis à des obligations strictes de confidentialité et de sécurité.
                  </p>
                </div>
              </div>
            </section>

            {/* Sécurité des données */}
            <section className="mb-12">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 mt-1">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2 mt-0">6. Sécurité de vos données</h2>
                </div>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>La destruction accidentelle ou illicite</li>
                  <li>La perte, l'altération ou la divulgation non autorisée</li>
                  <li>L'accès non autorisé</li>
                </ul>
                <p>
                  <strong>Mesures de sécurité mises en place :</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chiffrement SSL/TLS pour les échanges de données</li>
                  <li>Hébergement sécurisé avec sauvegardes régulières</li>
                  <li>Accès restreint aux données (authentification, mots de passe sécurisés)</li>
                  <li>Mises à jour régulières des systèmes de sécurité</li>
                </ul>
              </div>
            </section>

            {/* Vos droits */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Vos droits</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Droit d'accès</h3>
                    <p className="text-sm mb-0">Obtenir une copie de vos données personnelles</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Droit de rectification</h3>
                    <p className="text-sm mb-0">Corriger des données inexactes ou incomplètes</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Droit à l'effacement</h3>
                    <p className="text-sm mb-0">Demander la suppression de vos données</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Droit d'opposition</h3>
                    <p className="text-sm mb-0">Vous opposer au traitement de vos données</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Droit à la limitation</h3>
                    <p className="text-sm mb-0">Limiter le traitement de vos données</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Droit à la portabilité</h3>
                    <p className="text-sm mb-0">Récupérer vos données dans un format exploitable</p>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 mt-6">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Comment exercer vos droits ?</h3>
                      <p className="mb-2">Pour exercer l'un de ces droits, contactez-nous :</p>
                      <ul className="list-none space-y-1 mb-2">
                        <li><strong>Par email :</strong> nevos.website@gmail.com</li>
                        <li><strong>Par courrier :</strong> Nevos, 49 rue Saint Louis, Villemomble 93250</li>
                      </ul>
                      <p className="text-sm mb-0">
                        Nous vous répondrons dans un délai maximum de <strong>1 mois</strong>. Une pièce d'identité pourra vous être demandée pour vérifier votre identité.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm">
                  <strong>Droit de réclamation :</strong> Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies et technologies similaires</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience et réaliser des statistiques de visite.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Qu'est-ce qu'un cookie ?</h3>
                <p>
                  Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d'un site web. Il permet de mémoriser des informations relatives à votre navigation.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Types de cookies utilisés</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <p className="font-semibold text-foreground">Cookies strictement nécessaires</p>
                    <p className="text-sm mb-0">Indispensables au fonctionnement du site (navigation, sécurité). Ils ne nécessitent pas votre consentement.</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <p className="font-semibold text-foreground">Cookies de mesure d'audience</p>
                    <p className="text-sm mb-0">Pour analyser l'utilisation du site et améliorer nos services (anonymisés). Soumis à votre consentement.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Gestion des cookies</h3>
                <p>
                  Vous pouvez à tout moment désactiver les cookies depuis les paramètres de votre navigateur. Attention, cela peut affecter votre expérience de navigation.
                </p>
                <p className="text-sm">
                  <strong>Guides de gestion des cookies :</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><a href="https://support.google.com/chrome" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chrome</a></li>
                  <li><a href="https://support.mozilla.org/fr/kb/effacer-les-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firefox</a></li>
                  <li><a href="https://support.apple.com/fr-fr/HT201265" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Edge</a></li>
                </ul>
              </div>
            </section>

            {/* Transferts internationaux */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Transferts de données hors UE</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Vos données personnelles sont hébergées et traitées au sein de l'Union Européenne.
                </p>
                <p>
                  Dans le cas où certains de nos prestataires techniques seraient situés hors de l'Union Européenne, nous nous assurons que des garanties appropriées sont mises en place (clauses contractuelles types approuvées par la Commission européenne, certification Privacy Shield, etc.).
                </p>
              </div>
            </section>

            {/* Modifications */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Modifications de la politique de confidentialité</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment pour refléter les évolutions légales, réglementaires ou de nos pratiques.
                </p>
                <p>
                  Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Nous contacter</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, n'hésitez pas à nous contacter :
                </p>
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <p><strong>Nevos</strong></p>
                  <p>Email : <a href="mailto:nevos.website@gmail.com" className="text-primary hover:underline">nevos.website@gmail.com</a></p>
                  <p>Adresse : 49 rue Saint Louis, Villemomble 93250</p>
                  <p className="mb-0">Téléphone : 06 52 98 01 91</p>
                </div>
              </div>
            </section>

            {/* Date de mise à jour */}
            <section className="mb-12">
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground mb-0">
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
