# TP React : Navigation et Rendu Dynamique

Ce projet a été réalisé dans le cadre d'un Travail Pratique (TP) React visant à maîtriser les concepts fondamentaux de la navigation, du rendu conditionnel et de l'affichage de listes.

## Objectifs pédagogiques

Ce projet met en pratique les compétences suivantes :

* **Navigation (SPA)** : Mise en place d'une navigation en *single-page application* avec **React Router DOM** (`<Routes>`, `<Route>`, `<Link>`).
* **Rendu Conditionnel** : Affichage d'éléments d'interface de manière dynamique en utilisant l'opérateur ternaire et le state (`useState`).
* **Itération et Listes** : Génération dynamique d'éléments HTML à partir d'un tableau de données en utilisant la méthode `.map()`.
* **Intégration de Médias** : Importation et affichage d'images (`.png`) et de médias (`.mp3`) dans les composants.
* **Styling** : Application de styles CSS basiques aux composants (`className` et import de `.css`).

## Fonctionnalités implémentées

Le projet est structuré autour de plusieurs composants pour démontrer ces concepts :

* **Navigation principale** : Une barre de navigation permettant de basculer entre la page `Accueil` et `À propos`.
* **État de connexion** : Un composant `Connexion` qui utilise `useState` pour basculer un état "Connecté" / "Déconnecté" (rendu conditionnel).
* **Liste de tâches** : Un composant `ListeTaches` qui affiche une liste de tâches à partir d'un tableau de données en utilisant `.map()`.
* **Médias** : La page d'accueil intègre un composant `Logo` (image) et `LecteurAudio` (balise `<audio>`).
* **Styling** : Un fichier `App.css` applique un style centralisé au titre de l'application.

## Technologies utilisées

* [React](https://reactjs.org/) (v18+)
* [React Router DOM](https://reactrouter.com/) (v6+)
* [Create React App](https://create-react-app.dev/) (pour l'initialisation du projet)

## Démarrage

Ce projet a été initialisé avec `create-react-app`.

1.  **Clonez le dépôt** (ou téléchargez les fichiers)
2.  **Installez les dépendances** (y compris `react-router-dom`) :
    ```bash
    npm install
    ```
3.  **Lancez le serveur de développement** :
    ```bash
    npm start
    ```

L'application sera visible à l'adresse [http://localhost:3000](http://localhost:3000).


<img width="1919" height="887" alt="Screenshot 2025-11-17 171746" src="https://github.com/user-attachments/assets/8023a849-f6be-418a-955d-04311bf84222" />

