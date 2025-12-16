# TODO List - Frontend Angular

Application Angular pour gérer notre liste de tâches avec authentification et gestion multi-utilisateurs.

## 🚀 Fonctionnalités

- ✅ **Inscription** - Création de compte utilisateur
- ✅ **Authentification** - Login/logout avec localStorage
- ✅ **Gestion multi-utilisateurs** - Chaque utilisateur a sa propre liste de tâches
- ✅ **CRUD complet** - Créer, lire, modifier, supprimer des tâches
- ✅ **Formulaires réactifs** - Login avec Reactive Forms
- ✅ **Formulaires template-driven** - Ajout et modification de tâches
- ✅ **Modales** - Affichage des détails et modification
- ✅ **Pipe personnalisé** - Tâches urgentes (< 2 jours) en rouge
- ✅ **Directive personnalisée** - Effet d'ombre au survol
- ✅ **Icônes FontAwesome** - Interface moderne
- ✅ **Design Bootstrap 5** - Interface responsive

## 📁 Structure du projet

```
todo-app/
├── src/
│   ├── app/
│   │   ├── directives/
│   │   │   └── todo.directive.ts          # Directive pour l'effet d'ombre
│   │   ├── head-bar/                      # Barre de navigation
│   │   ├── interfaces/
│   │   │   ├── todo.ts                    # Interface Todo
│   │   │   └── user.ts                    # Interface User
│   │   ├── pipes/
│   │   │   └── todo.pipe.ts               # Pipe pour les todos urgents
│   │   ├── services/
│   │   │   ├── auth.service.ts            # Service d'authentification
│   │   │   └── todo.service.ts            # Service Todo (API calls)
│   │   ├── signup/                        # Composant inscription
│   │   ├── todo-detail/                   # Composant détails (modal)
│   │   ├── todo-list/                     # Composant liste des todos
│   │   ├── todo-reactive-form/            # Composant login (Reactive Form)
│   │   ├── todo-template-driven-form/     # Composant nouveau todo
│   │   ├── update-todo/                   # Composant modification (modal)
│   │   ├── app.config.ts                  # Configuration de l'app
│   │   ├── app.html                       # Template principal
│   │   ├── app.routes.ts                  # Configuration des routes
│   │   └── app.ts                         # Composant principal
│   ├── proxy.config.json                  # Configuration proxy backend
│   └── styles.css                         # Styles globaux
├── angular.json                           # Configuration Angular
└── package.json                           # Dépendances
```

## 🔧 Installation

1. Les dépendances sont déjà installées, mais si besoin :
```bash
npm install
```

2. Assurons-nous que le backend est démarré sur le port 3000

## ▶️ Démarrage

```bash
npm start
```

Notre application sera accessible sur `http://localhost:4200`

## 🔐 Authentification

### Compte par défaut
- **Login** : mail@gmail.com
- **Password** : passwd

### Créer un nouveau compte
1. Clique sur **Sign Up** sur la page de login
2. Remplis le formulaire avec nos informations
3. Connecte-toi avec notre nouveau compte
4. Nous aurons notre propre liste de tâches !

## 📝 Routes disponibles

- `/` - Redirige vers `/login`
- `/login` - Page de connexion (Reactive Form)
- `/signup` - Page d'inscription (Reactive Form)
- `/todos` - Liste de nos todos (nécessite authentification)
- `/new` - Ajouter un nouveau todo (Template-Driven Form)

## 🎨 Composants

### SignupComponent
Formulaire d'inscription avec validation :
- **Nom** (min 2 caractères)
- **Email** (validation email)
- **Mot de passe** (min 6 caractères)
- **Confirmation du mot de passe**

### HeadBarComponent
Barre de navigation avec les boutons :
- **Todos** : Affiche notre liste des tâches
- **New** : Formulaire d'ajout de tâche
- **Sign In / Sign Out** : Connexion / Déconnexion

### TodoListComponent
- Affiche notre liste complète des todos
- Icônes FontAwesome pour les actions :
  - 📋 `faList` : Afficher les détails
  - ✏️ `faPenToSquare` : Modifier
  - 🗑️ `faTrash` : Supprimer
  - ✅/❌ Statut done/not done
- Application de la directive `appTodo` pour l'effet d'ombre
- Application du pipe `todoPipe` pour identifier les todos urgents

### TodoDetailComponent
Modal qui affiche les détails d'un todo :
- Nom de la tâche
- Date de création
- Description
- Statut (done/not done) - cliquable pour changer l'état
- Bouton de fermeture (×) avec effet hover

### TodoTemplateDrivenFormComponent
Formulaire Template-Driven pour créer un nouveau todo :
- Titre
- Date d'échéance
- Description

### UpdateTodoComponent
Modal avec formulaire Template-Driven pour modifier un todo existant.
- Bouton de fermeture (×) avec effet hover

### TodoReactiveFormComponent
Formulaire Reactive Form pour l'authentification :
- Validation des champs (email, password min 3 caractères)
- Stockage du token dans localStorage
- Lien vers la page d'inscription

## 🎯 Directive personnalisée

**TodoDirective** (`appTodo`)
- Ajoute une ombre au survol d'un todo
- Utilise `@HostListener` pour détecter mouseenter/mouseleave
- Modifie la propriété CSS `box-shadow`

## 🔀 Pipe personnalisé

**TodoPipe** (`todoPipe`)
- Identifie les todos dont la date d'échéance est à moins de 2 jours
- Ajoute une propriété `urgent: true` pour l'affichage
- Les todos urgents ont une bordure rouge

## 🌐 Services

### TodoService
- `getTodos()` - Récupère tous nos todos
- `getTodoById(id)` - Récupère un todo par son ID
- `addTodo(todo)` - Ajoute un nouveau todo
- `updateTodo(todo)` - Modifie un todo
- `deleteTodo(id)` - Supprime un todo
- **Gestion automatique du userId** - Envoie automatiquement notre ID utilisateur dans les headers

### AuthService
- `register(name, login, password)` - Crée un nouveau compte
- `login(login, password)` - Nous authentifie
- `logout()` - Nous déconnecte
- `isAuthenticated()` - Vérifie si nous sommes connectés
- `getToken()` - Récupère notre token
- `getCurrentUser()` - Récupère nos informations
- **Stockage localStorage** - Gestion des utilisateurs dans le navigateur

## 🎨 Technologies utilisées

- **Angular 21** (Standalone Components)
- **Bootstrap 5** (Design et layout)
- **FontAwesome** (Icônes)
- **TypeScript**
- **RxJS** (Observables pour les appels HTTP)
- **Reactive Forms** et **Template-Driven Forms**
- **Zone.js** (Détection de changements)

## 📡 Communication Backend

Le TodoService ajoute automatiquement le header `x-user-id` à toutes les requêtes pour que le backend puisse filtrer nos todos.

Configuration directe : `http://localhost:3000/todos`

## ✨ Fonctionnalités avancées

1. **Inscription** : Création de compte avec validation complète
2. **Multi-utilisateurs** : Chaque utilisateur a sa propre liste de tâches
3. **Authentification** : Système de login avec stockage du token
4. **Guards implicites** : Les boutons changent selon notre état d'authentification
5. **Formulaires** : Validation côté client avec feedback visuel
6. **Modales** : Affichage des détails et modification en modal
7. **Effet visuel** : Ombre au survol grâce à la directive
8. **Alertes visuelles** : Bordure rouge pour les todos urgents
9. **Boutons de fermeture** : Croix (×) cliquables avec effet hover sur les modales

## 🐛 Débogage

Pour voir les erreurs éventuelles, ouvrons la console du navigateur (F12).

## 📞 Support

Pour toute question, vérifions que :
1. MongoDB est démarré
2. Le backend est lancé sur le port 3000
3. Le frontend est lancé sur le port 4200
4. Aucun conflit de port n'existe

## 🎉 C'est parti !

Notre application TODO List est prête à être utilisée. Créons notre compte et commençons à gérer nos tâches !
