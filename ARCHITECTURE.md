# Architecture front-end — TéléSport

## 1. Présentation

TéléSport est une application front-end développée avec React et TypeScript. Elle permet de consulter des statistiques sur les Jeux Olympiques, notamment les médailles, les participations et les performances par pays.

L'architecture sépare les pages, les composants d'interface, la gestion des données, les types TypeScript et les fonctions de calcul. Cette organisation facilite la maintenance et l'évolution de l'application.

## 2. Organisation du projet

Le code source est organisé de la manière suivante :

- **`app/`** : configuration générale de l'application et navigation.
  - `App.tsx` : point d'entrée du composant principal de l'application.
  - `router.tsx` : configuration des routes.
- **`components/`** : composants d'interface réutilisables.
  - `StatCard.tsx` : affiche une statistique sous forme de carte.
  - `GeneralStatCards.tsx` : regroupe les cartes de statistiques générales.
  - `CountryCards.tsx` : regroupe les cartes de statistiques d'un pays.
  - `MedalChart.tsx` : affiche la répartition des médailles.
  - `CountryChart.tsx` : affiche l'évolution des performances d'un pays.
- **`pages/`** : composants correspondant aux pages de l'application.
  - `Home.tsx` : présente le tableau de bord général.
  - `Country.tsx` : présente les statistiques détaillées d'un pays.
- **`hooks/`** : hooks personnalisés pour l'accès aux données.
  - `useData.ts` : fournit les données olympiques et l'état de chargement.
  - `useCountry.ts` : recherche un pays à partir de son identifiant et expose son état de chargement.
- **`data/`** : contient les données locales dans `olympics.json`.
- **`models/`** : contient les interfaces TypeScript décrivant les données, notamment `Country.ts` et `Participation.ts`.
- **`utils/`** : regroupe les fonctions de calcul métier et de préparation des données pour les graphiques.
  - Les fonctions `calculateTotal...` calculent les statistiques.
  - Les fonctions `build...Chart` préparent les données destinées aux graphiques.
- **`index.css`** : contient les styles globaux.
- **`main.tsx`** : initialise l'application React.

## 3. Rôle des composants

L'architecture distingue les composants selon leurs responsabilités.

### Composants orientés données (_smart components_)

Les pages `Home` et `Country` utilisent les hooks personnalisés pour accéder aux données et gérer les différents états d'affichage. Elles organisent les composants nécessaires à chaque page.

Les hooks centralisent l'accès aux données et la recherche d'un pays, afin d'éviter de répéter cette logique dans les pages.

### Composants orientés affichage (_dumb components_)

Les composants comme `StatCard`, `GeneralStatCards`, `CountryCards`, `MedalChart` et `CountryChart` sont dédiés à la présentation des statistiques et des graphiques.

Ils reçoivent les données nécessaires via leurs props. Cette séparation favorise leur réutilisation et limite le mélange entre logique métier et interface.

## 4. Gestion des données avec les hooks personnalisés

### `useData`

Ce hook centralise l'accès aux données olympiques provenant actuellement du fichier local `olympics.json`. Il expose les données ainsi qu'un indicateur de chargement `isLoading`.

Les pages peuvent ainsi afficher un état de chargement avant de présenter leur contenu, sans gérer directement la source des données.

### `useCountry`

Ce hook réutilise `useData` pour rechercher un pays à partir de son identifiant. Il retourne le pays correspondant, lorsqu'il existe, ainsi que l'état de chargement.

La page `Country` peut ainsi distinguer le chargement des données d'un pays introuvable.

## 5. Navigation

Le routage est centralisé dans `app/router.tsx`. Il permet d'accéder au tableau de bord général et à la page détaillée d'un pays.

Cette séparation rend la navigation plus lisible et facilite l'ajout de nouvelles pages.

## 6. Préparation à une future API back-end

Les données sont actuellement fournies par un fichier JSON local. Leur accès étant centralisé dans `useData`, la source pourra évoluer vers une API sans obliger les pages à connaître les détails des requêtes HTTP.

Lors du passage à une API, le hook pourra gérer les appels asynchrones, les états de chargement et les erreurs. Les pages et les composants pourront continuer à consommer les données selon un contrat similaire, sous réserve des adaptations nécessaires au nouveau format de réponse.

Les interfaces TypeScript du dossier `models/` aideront à conserver un typage cohérent des données reçues.

## 7. Bénéfices de cette architecture

Cette organisation permet de :

- séparer les responsabilités entre données, calculs, navigation et affichage ;
- réutiliser les composants d'interface ;
- centraliser l'accès aux données dans des hooks personnalisés ;
- améliorer la lisibilité et la maintenabilité du code ;
- préparer l'évolution de l'application vers une source de données distante.
