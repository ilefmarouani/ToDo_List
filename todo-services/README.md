# TODO List - Backend Services

Backend REST API pour notre application TODO List utilisant Node.js, Express.js et MongoDB.

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Assurons-nous que MongoDB est installé et en cours d'exécution sur `localhost:27017`

3. La base de données `todo_db` sera créée automatiquement avec la collection `todos`

## Démarrage

Lancer le serveur en mode développement :
```bash
npm start
```

Le serveur démarre sur le port 3000 par défaut.

## Routes API

Toutes les routes nécessitent le header `x-user-id` pour filtrer les todos par utilisateur.

- **GET** `/todos` - Récupérer tous les todos de l'utilisateur connecté
- **GET** `/todos/:id` - Récupérer un todo par son ID (de l'utilisateur connecté)
- **POST** `/todos` - Créer un nouveau todo (associé à l'utilisateur)
- **PUT** `/todos/:id` - Modifier un todo (de l'utilisateur connecté)
- **DELETE** `/todos/:id` - Supprimer un todo (de l'utilisateur connecté)

## Structure du projet

```
todo-services/
├── controller/
│   └── controller.js    # Contrôleur avec les fonctions CRUD
├── db/
│   └── db.js           # Configuration de la connexion MongoDB
├── model/
│   └── todo.js         # Modèle Mongoose pour les todos
├── package.json        # Dépendances du projet
├── server.js           # Point d'entrée de l'application
└── README.md          # Documentation
```

## Modèle de données Todo

```javascript
{
  todoId: Number,        // Auto-incrémenté
  name: String,
  description: String,
  done: Boolean,
  creation_date: Date,
  end_date: Date,
  userId: String         // ID de l'utilisateur (requis)
}
```

## Sécurité

L'API filtre automatiquement les todos par utilisateur en utilisant le header `x-user-id`. Chaque utilisateur ne peut voir, modifier ou supprimer que ses propres tâches.

## Technologies utilisées

- **Node.js** - Environnement JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de données NoSQL
- **Mongoose** - ODM pour MongoDB
- **mongoose-sequence** - Auto-incrémentation des IDs
- **CORS** - Gestion des requêtes cross-origin
