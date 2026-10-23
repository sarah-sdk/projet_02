# Notes d'architecture - Projet TéléSport

## 1. Problèmes identifiés

### 1.1. Organisation du code et responsabilités

#### 1.1.1. Les responsabilités ne sont pas séparées

Actuellement, on retrouve plusieurs composants, de la logique métier, la préparation des graphiques et la configuration du routing dans un même fichier. Tout est un peu mélangé, ce qui rend le fichier long et difficile à parcourir.

#### 1.1.2. Les noms de fichiers et de composants

Les composants `Home` et `Country` sont déclarés directement dans `App.tsx`, alors que ce fichier devrait surtout s'occuper de l'organisation générale de l'application. Il faudrait mieux séparer les composants dans des fichiers adaptés à leur rôle.

### 1.2. Le typage TypeScript

On utilise TypeScript, mais il y a beaucoup de type déclaré `any`. On perd une bonne partie de l'intérêt du typage, puisque TypeScript ne peut pas contrôler le type des données manipulées.

### 1.3. Les données et les calculs

#### 1.3.1. Les données directement dans le fichier

Les données des pays sont écrites directement dans le fichier avec le reste du code. Les séparer permettrait de mieux coller à la réalité d'une application appelant un back-end.

#### 1.3.2. Les calculs et les graphiques dans les composants

Les composants font aussi des calculs, comme le total des médailles ou le nombre d'athlètes, et préparent les données des graphiques. Ca rajoute du code dans les composants, alors que leur rôle principal est de gérer l'affichage.

#### 1.3.3 Valeur écrite en dur

Le nombre d'éditions des Jeux est fixé à 5 directement dans le code. Si les données changent, il faudra penser à modifier cette valeur manuellement. Ce serait mieux de la calculer à partir des données.

### 1.4. La gestion des données et des états

#### 1.4.1. Un `useEffect` et un `setTimeOut` qui semblent inutiles

Les données sont déjà disponibles dans le fichier, mais elles sont chargées avec un `useEffect` et un `setTimeOut`. L'intérêt me semble limité de simuler un chargement sur cet appel.

#### 1.4.2. Un état de chargement à revoir

Le composant affiche "Chargement..." tant que les données ne sont pas disponibles. Il faudrait mieux utiliser des états dédiés.

#### 1.4.3. Recherche d'un pays par id

Dans le composant `Country`, il n'est pas pris en compte le fait de requêter un pays avec un id qui n'existe pas.

### 1.5. Les composants et la navigation

#### 1.5.1. Les cartes sont dupliquées

Les cartes qui affichent les statistiques sont écrites directement dans le composant. Comme elles se ressemblent beaucoup, ce serait mieux d'utiliser un composant réutilisable afin de ne pas dupliquer inutilement du code.

#### 1.5.2. Le composant `Country` n'est pas relié au routing

Aucune route ne permet d'accéder et d'afficher ce composant. L'état actuel de l'application semble parler d'une feature pas encore réalisée.

### 1.6. Nettoyage du code

Il reste plusieurs `console.log` dans le code, traces de développement qui n'ont rien à faire sur une application déployée.

## 2. Proposition d'une nouvelle architecture

```
src/
├── app/      # Configuration générale de l'application
│   ├── App.tsx
│   └── router.tsx
├── components/      # Composants réutilisables
│   └── StatCard.tsx
├── pages/      # Composants correspondants aux pages de l'application
│   ├── Home.tsx
│   └── Country.tsx
├── hooks/      # Accès aux données et logique réutilisable
│   ├── useData.ts
│   └── useCountry.ts
├── utils/      # Fonctions utilitaires et calculs métier
│   └── calculateTotalMedals.ts
├── models/      # Types
│   └── Country.ts
└── data/      # Réponses simulées du back-end
    └── olympics.json
```
