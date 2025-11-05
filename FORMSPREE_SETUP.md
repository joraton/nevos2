# Configuration Formspree - Guide Simple

## Étape 1: Créer un compte Formspree (2 minutes)

1. Aller sur https://formspree.io/
2. Cliquer sur "Get Started" ou "Sign Up"
3. S'inscrire avec votre email : **nevos.website@gmail.com**
4. Confirmer l'email

## Étape 2: Créer un nouveau formulaire

1. Une fois connecté, cliquer sur "New Form"
2. Donner un nom à votre formulaire : "Contact Nevos"
3. Formspree vous donnera un ID unique, par exemple : `xwkgopqr`

## Étape 3: Copier votre Form ID

Vous verrez quelque chose comme :
```
https://formspree.io/f/xwkgopqr
```

L'ID est la partie après `/f/` (dans cet exemple: `xwkgopqr`)

## Étape 4: Mettre à jour le code

Ouvrir le fichier : `src/pages/Contact.tsx`

Trouver la ligne 45 :
```typescript
"https://formspree.io/f/YOUR_FORM_ID",
```

Remplacer `YOUR_FORM_ID` par votre ID, par exemple :
```typescript
"https://formspree.io/f/xwkgopqr",
```

## Étape 5: C'est tout ! 🎉

Maintenant, chaque fois que quelqu'un remplit le formulaire :
- ✅ Vous recevrez un email à **nevos.website@gmail.com**
- ✅ L'email contiendra tous les détails : nom, email, téléphone, sujet, message
- ✅ Vous pouvez répondre directement depuis votre boîte email

## Plan Gratuit Formspree

- ✅ 50 soumissions/mois gratuites
- ✅ Pas de limite de temps
- ✅ Emails de notification
- ✅ Spam protection

Si vous dépassez 50 soumissions/mois, vous pouvez upgrader pour 10$/mois.

## Tester le formulaire

1. Aller sur votre page contact
2. Remplir et envoyer le formulaire
3. Vérifier votre boîte email **nevos.website@gmail.com**
4. Vous devriez recevoir l'email dans quelques secondes !

## Bonus: Personnaliser les emails

Dans votre dashboard Formspree, vous pouvez :
- Personnaliser l'objet de l'email
- Ajouter une auto-réponse pour le visiteur
- Voir toutes les soumissions dans le dashboard
- Exporter les données en CSV
