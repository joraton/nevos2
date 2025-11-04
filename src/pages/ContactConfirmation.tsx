import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ContactConfirmation() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary/30">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary">Message envoyé</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Merci pour votre message !
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Nous reviendrons vers vous sous 24h avec une réponse détaillée.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link to="/">
                <Button variant="default">
                  Retour à l’accueil
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="gap-2">
                  Nous écrire à nouveau
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}