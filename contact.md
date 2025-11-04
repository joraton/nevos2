


          
Je vais examiner la page Contact pour t'expliquer exactement comment l'agence est présentée et comment reproduire cette mise en page.
        
            
toolName: view_files
            
status: success
          
            
filePath: /Users/joai/Documents/nevos-vdef/src/pages/Contact.tsx
          

        
            
toolName: view_files
            
status: success
          
            
filePath: /Users/joai/Documents/nevos-vdef/src/pages/Contact.tsx
          
Parfait ! Voici exactement comment l'agence **Nevos** est présentée sur la page Contact et comment reproduire cette mise en page :

## 📋 **Informations de l'agence Nevos**

### **Coordonnées principales :**
- **Email :** Nevos.website@gmail.com
- **Téléphone :** 06 52 98 01 91
- **Horaires :** Tous les jours de 9h à 22h

### **Promesses de service :**
- ⭐ Réponse sous 24h
- 💬 Conseil gratuit
- 📋 Devis gratuit et personnalisé
- 🎯 Accompagnement sur mesure
- 🛠️ Support continu après livraison

## 🎨 **Structure et design de la page Contact**

### **1. Section Hero (En-tête)**
```jsx
// Badge avec icône
<div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-blue-400/30">
  <Sparkles className="w-4 h-4 text-cyan-400" />
  <span className="text-sm font-medium text-cyan-300">Parlons de votre projet</span>
</div>

// Titre principal avec gradient
<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent leading-tight">
  Contactez-nous
</h1>

// Description
<p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
  Une question, un projet ou besoin d'un devis ? Nous sommes à votre écoute 
  pour vous accompagner dans votre transformation digitale.
</p>

// Indicateurs de confiance
<div className="flex items-center justify-center gap-6 mt-8">
  <div className="flex items-center gap-2 text-sm text-gray-400">
    <Star className="w-4 h-4 text-yellow-400 fill-current" />
    <span>Réponse sous 24h</span>
  </div>
  <div className="flex items-center gap-2 text-sm text-gray-400">
    <MessageCircle className="w-4 h-4 text-green-400" />
    <span>Conseil gratuit</span>
  </div>
</div>
```

### **2. Layout principal (Grid 2/3)**
```jsx
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
  {/* Colonne gauche (2/5) - Informations */}
  <div className="lg:col-span-2 space-y-6">
    {/* Carte coordonnées + Carte avantages */}
  </div>
  
  {/* Colonne droite (3/5) - Formulaire */}
  <div className="lg:col-span-3">
    {/* Formulaire de contact */}
  </div>
</div>
```

### **3. Carte des coordonnées**
```jsx
<div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-700/50 hover:shadow-2xl transition-all duration-300">
  <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Nos coordonnées</h3>
  
  {/* Email */}
  <div className="group flex items-start p-4 rounded-2xl hover:bg-blue-900/30 transition-all duration-300">
    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
      <Mail className="h-6 w-6 text-white" />
    </div>
    <div>
      <p className="font-semibold text-gray-200 mb-1">Email</p>
      <a href="mailto:Nevos.website@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
        Nevos.website@gmail.com
      </a>
    </div>
  </div>
  
  {/* Téléphone */}
  <div className="group flex items-start p-4 rounded-2xl hover:bg-blue-900/30 transition-all duration-300">
    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
      <Phone className="h-6 w-6 text-white" />
    </div>
    <div>
      <p className="font-semibold text-gray-200 mb-1">Téléphone</p>
      <a href="tel:0652980191" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
        06 52 98 01 91
      </a>
    </div>
  </div>
  
  {/* Horaires */}
  <div className="group flex items-start p-4 rounded-2xl hover:bg-blue-900/30 transition-all duration-300">
    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
      <Clock className="h-6 w-6 text-white" />
    </div>
    <div>
      <p className="font-semibold text-gray-200 mb-1">Horaires</p>
      <p className="text-gray-300 font-medium">
        Tous les jours de 9h à 22h
      </p>
    </div>
  </div>
</div>
```

### **4. Carte "Pourquoi nous choisir"**
```jsx
<div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl">
  <h4 className="text-xl font-bold mb-4">Pourquoi nous choisir ?</h4>
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-white rounded-full"></div>
      <span className="text-sm">Réponse rapide garantie</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-white rounded-full"></div>
      <span className="text-sm">Devis gratuit et personnalisé</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-white rounded-full"></div>
      <span className="text-sm">Accompagnement sur mesure</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-white rounded-full"></div>
      <span className="text-sm">Support continu après livraison</span>
    </div>
  </div>
</div>
```

### **5. Formulaire de contact**
Le formulaire comprend :
- **Nom complet*** (requis)
- **Email*** (requis)
- **Téléphone** (optionnel)
- **Sujet*** avec options :
  - 💼 Demande de devis
  - ❓ Renseignements
  - 🛠️ Support technique
  - 💬 Autre
- **Message*** (requis)

### **6. Fonctionnalités techniques**
- **Webhook n8n** : `https://n8n.srv785651.hstgr.cloud/webhook/f09ac54c-5203-4f19-b8f2-6799f5758fd1`
- **Redirection** : `/contact-confirmation` après envoi
- **Validation** : Champs requis avec gestion d'erreurs
- **État de chargement** : Spinner pendant l'envoi

### **7. Effets visuels**
- **Fond sombre** : `bg-gradient-to-br from-gray-900 via-black to-gray-900`
- **Éléments animés** : Bulles colorées avec `blur-3xl` et `animate-pulse`
- **Cartes glassmorphism** : `backdrop-blur-sm` avec bordures translucides
- **Hover effects** : Scale, couleurs, ombres
- **Gradients** : Textes et boutons avec dégradés cyan/blue

## 🚀 **Pour reproduire cette page :**

1. **Structure HTML/React** avec grid responsive
2. **Tailwind CSS** pour le styling
3. **Lucide React** pour les icônes
4. **État React** pour la gestion du formulaire
5. **Fetch API** pour l'envoi des données
6. **React Router** pour la navigation

Cette page présente Nevos comme une agence digitale moderne, accessible et professionnelle avec un design premium et des interactions fluides.
        