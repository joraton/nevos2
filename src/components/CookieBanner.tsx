import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X, Settings } from "lucide-react";
import { Link } from "react-router-dom";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
}

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Toujours true car nécessaires
    analytics: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Afficher le banner après un léger délai pour ne pas être trop intrusif
      setTimeout(() => {
        setShowBanner(true);
      }, 1500);
    } else {
      // Charger les préférences sauvegardées
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (e) {
        // Si ancien format, considérer comme tout accepté
        setPreferences({ necessary: true, analytics: true });
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    setShowBanner(false);
    setShowSettings(false);

    // Ici vous pouvez ajouter la logique pour activer/désactiver les services analytics
    if (prefs.analytics) {
      console.log("Analytics activé");
      // Activer Google Analytics, etc.
    } else {
      console.log("Analytics désactivé");
      // Désactiver Google Analytics, etc.
    }
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true };
    savePreferences(allAccepted);
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly = { necessary: true, analytics: false };
    savePreferences(necessaryOnly);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden">
            {!showSettings ? (
              // Vue simple
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Cookie className="h-5 w-5 text-primary" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                        Gestion des cookies
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. Les cookies techniques sont nécessaires au fonctionnement du site.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={acceptAll}
                        size="sm"
                        className="w-full"
                      >
                        Tout accepter
                      </Button>
                      <Button
                        onClick={acceptNecessaryOnly}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        Nécessaires uniquement
                      </Button>
                      <Button
                        onClick={() => setShowSettings(true)}
                        variant="ghost"
                        size="sm"
                        className="w-full"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Personnaliser
                      </Button>
                    </div>

                    <Link
                      to="/privacy"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors underline block text-center"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      En savoir plus sur notre politique de confidentialité
                    </Link>
                  </div>

                  <button
                    onClick={acceptNecessaryOnly}
                    className="p-1 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
                    aria-label="Fermer"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            ) : (
              // Vue détaillée avec options
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Settings className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      Préférences de cookies
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-1 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Retour"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>

                <div className="space-y-4 mb-4">
                  {/* Cookies nécessaires */}
                  <div className="p-4 rounded-lg border border-border bg-muted/20">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                          Cookies techniques
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                            Nécessaires
                          </span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Indispensables au fonctionnement du site (navigation, sécurité, préférences). Ces cookies ne peuvent pas être désactivés.
                        </p>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        <input
                          type="checkbox"
                          checked={true}
                          disabled
                          className="w-5 h-5 rounded border-border cursor-not-allowed opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Cookies analytics */}
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          Cookies de mesure d'audience
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Pour analyser l'utilisation du site et améliorer nos services. Ces données sont anonymisées et ne sont pas partagées.
                        </p>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                          className="w-5 h-5 rounded border-border cursor-pointer accent-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    onClick={saveCustomPreferences}
                    size="sm"
                    className="w-full"
                  >
                    Enregistrer mes préférences
                  </Button>
                  <Button
                    onClick={acceptAll}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Tout accepter
                  </Button>
                </div>

                <Link
                  to="/privacy"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors underline block text-center mt-3"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Voir la politique de confidentialité
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
