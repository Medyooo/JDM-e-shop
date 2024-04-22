# Les Jardins du Maroc - API RESTful

## Aperçu

L'API RESTful des Jardins du Maroc est une interface de programmation conçue pour faciliter l'intégration et l'interaction avec notre plateforme e-commerce. Développée avec Express.js, elle offre des fonctionnalités complètes pour la gestion des produits, des marques, des utilisateurs et des commandes. Elle prend également en charge le téléchargement d'images avec Multer.

## Documentation API

La documentation complète de l'API, y compris les endpoints, les méthodes HTTP, les paramètres attendus, et les exemples de réponses, est disponible sur Postman. Pour y accéder, cliquez sur le lien suivant :

[Documentation API Postman](https://documenter.getpostman.com/view/29521516/2sA35LUyo6)

## Fonctionnalités

- Opérations CRUD pour les catégories, sous-catégories et marques.
- Gestion complète des produits, incluant les avis et évaluations.
- Authentification et gestion des utilisateurs.
-Listes de souhaits et gestion des adresses utilisateurs.
- Gestion des commandes et du panier d'achat.
- Application des coupons et des remises.
- Téléchargement et traitement d'images pour les produits via Multer.
- Envoi d'emails pour la réinitialisation des mots de passe via NodeMailer.

## Prérequis

Node.js
npm (gestionnaire de paquets Node.js)
Postman ou un autre client HTTP pour tester l'API

## Configuration de l'Environnement

Pour lancer l'API, vous devez configurer les variables d'environnement nécessaires. Créez un fichier `.env` à la racine du projet avec le contenu suivant :

```plaintext
# Configuration du serveur
PORT=8000
NODE_ENV=development
BASE_URL=http://localhost:8000

# Configuration de la base de données MongoDB
DB_URI=votre_chaine_de_connexion_mongodb

# Configuration de JWT pour l'authentification
JWT_SECRET_KEY=votre_cle_secrete_jwt
JWT_EXPIRE_TIME=90d

# Configuration du serveur SMTP pour l'envoi d'emails
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=votre_email
EMAIL_PASSWORD=votre_mot_de_passe_email

```
Remplacez `your_mongodb_connection_string`, `your_jwt_secret_key`, `your_email_address`, et `your_email_password` avec vos propres valeurs.

## Installation Locale

Pour installer et exécuter l'API sur votre machine locale, exécutez les commandes suivantes :

```bash
git clone https://github.com/Medyooo/LesJardinsDuMaroc-Project
cd API
npm install
npm start

```

## Support
Pour obtenir de l'aide ou si vous avez des questions, n'hésitez pas à mr contacter à arbielbaidi6@gmail.com ou ouvrez une issue sur le dépôt GitHub.
