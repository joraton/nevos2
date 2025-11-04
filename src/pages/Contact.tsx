import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Clock,
  Sparkles,
  Star,
  MessageCircle,
  Loader2,
  Send,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !subject || !message) {
      toast.error("Veuillez remplir tous les champs requis.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        "https://n8n.srv785651.hstgr.cloud/webhook/f09ac54c-5203-4f19-b8f2-6799f5758fd1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName, email, phone, subject, message }),
        }
      );

      if (!res.ok) throw new Error("Erreur lors de l'envoi");

      toast.success("Message envoyé. Nous vous répondrons sous 24h.");
      navigate("/contact-confirmation");
    } catch (err) {
      toast.error("Impossible d'envoyer le message. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Décor de fond amélioré avec particules flottantes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-2xl rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Particules flottantes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge avec icône amélioré */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              <span className="text-sm font-semibold text-primary tracking-wide">Parlons de votre projet</span>
            </motion.div>

            {/* Titre principal amélioré */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-tight tracking-tight"
            >
              Contactez-nous
            </motion.h1>

            {/* Description améliorée */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Une question, un projet ou besoin d'un devis ? Nous sommes à votre écoute pour vous accompagner dans votre transformation digitale.
            </motion.p>

            {/* Indicateurs de confiance améliorés */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-base text-muted-foreground bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50 shadow-sm"
              >
                <Star className="w-5 h-5 text-accent" />
                <span className="font-medium">Réponse sous 24h</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-base text-muted-foreground bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50 shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">Conseil gratuit</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Grid 2/5 infos, 3/5 formulaire */}
      <section className="py-20 bg-card relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Colonne gauche (2/5) - Informations */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Carte coordonnées améliorée */}
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-background/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-border/50 hover:shadow-3xl hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Effet de brillance subtil */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold mb-10 text-primary relative z-10"
                >
                  Nos coordonnées
                </motion.h3>

                {/* Email amélioré */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="group flex items-start p-6 rounded-2xl hover:bg-primary/10 transition-all duration-300 relative z-10 mb-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mr-5 group-hover:shadow-lg transition-all duration-300"
                  >
                    <Mail className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2 text-lg">Email</p>
                    <a href="mailto:Nevos.website@gmail.com" className="text-primary hover:text-accent transition-colors font-medium text-base hover:underline">
                      Nevos.website@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Téléphone amélioré */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="group flex items-start p-6 rounded-2xl hover:bg-primary/10 transition-all duration-300 relative z-10 mb-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mr-5 group-hover:shadow-lg transition-all duration-300"
                  >
                    <Phone className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2 text-lg">Téléphone</p>
                    <a href="tel:0652980191" className="text-primary hover:text-accent transition-colors font-medium text-base hover:underline">
                      06 52 98 01 91
                    </a>
                  </div>
                </motion.div>

                {/* Horaires améliorés */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="group flex items-start p-6 rounded-2xl hover:bg-primary/10 transition-all duration-300 relative z-10"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center mr-5 group-hover:shadow-lg transition-all duration-300"
                  >
                    <Clock className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2 text-lg">Horaires</p>
                    <p className="text-muted-foreground font-medium text-base">Tous les jours de 9h à 22h</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Carte Pourquoi nous choisir améliorée */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-primary rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                
                <motion.h4 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-bold mb-8 relative z-10"
                >
                  Pourquoi nous choisir ?
                </motion.h4>
                <div className="space-y-5 relative z-10">
                  {[
                    "Réponse rapide garantie",
                    "Devis gratuit et personnalisé", 
                    "Accompagnement sur mesure",
                    "Support continu après livraison"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 hover:bg-white/10 rounded-lg p-3 transition-all duration-300"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-3 h-3 bg-white rounded-full shadow-lg"
                      />
                      <span className="text-base font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Colonne droite (3/5) - Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-3"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-background/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-border/50 hover:shadow-3xl hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Effet de brillance subtil */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-bold mb-8 text-primary relative z-10"
                >
                  Envoyez-nous un message
                </motion.h3>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  {/* Nom complet amélioré */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="fullName" className="text-base font-semibold text-foreground">
                      Nom complet *
                    </Label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        id="fullName"
                        required
                        placeholder="Jean Dupont"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="h-14 text-base border-2 border-border/50 focus:border-primary/50 rounded-xl bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Email amélioré */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="email" className="text-base font-semibold text-foreground">
                      Email *
                    </Label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="jean.dupont@exemple.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-14 text-base border-2 border-border/50 focus:border-primary/50 rounded-xl bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Téléphone amélioré */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="phone" className="text-base font-semibold text-foreground">
                      Téléphone
                    </Label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+33 6 12 34 56 78"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-14 text-base border-2 border-border/50 focus:border-primary/50 rounded-xl bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Sujet amélioré */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="subject" className="text-base font-semibold text-foreground">
                      Sujet *
                    </Label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <select
                        id="subject"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full h-14 px-4 text-base bg-background/50 backdrop-blur-sm border-2 border-border/50 focus:border-primary/50 rounded-xl text-foreground focus:outline-none focus:ring-0 transition-all duration-300 hover:border-primary/30"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="Demande de devis">💼 Demande de devis</option>
                        <option value="Renseignements">❓ Renseignements</option>
                        <option value="Support technique">🛠️ Support technique</option>
                        <option value="Autre">💬 Autre</option>
                      </select>
                    </motion.div>
                  </motion.div>

                  {/* Message amélioré */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="message" className="text-base font-semibold text-foreground">
                      Message *
                    </Label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="text-base border-2 border-border/50 focus:border-primary/50 rounded-xl bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 resize-none"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Bouton d'envoi amélioré */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-16 text-lg font-semibold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group" 
                        disabled={loading}
                      >
                        {/* Effet de brillance au survol */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        {loading ? (
                          <>
                            <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                            Envoyer le message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="text-sm text-muted-foreground text-center leading-relaxed"
                  >
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                  </motion.p>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
