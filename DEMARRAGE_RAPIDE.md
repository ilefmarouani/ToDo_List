# 🚀 Nos Commandes de démarrage rapide

## 📋 Nos Prérequis
- MongoDB installé et démarré sur localhost:27017
- Node.js et npm installés

## 🎯 Démarrage en 3 étapes

### 1️⃣ Terminal 1 - Notre Backend (todo-services)

```bash
cd c:\Users\marou\Angular\TODO_LIST\todo-services
npm start
```

✅ **Résultat attendu** : `Server is running on port: 3000`

---

### 2️⃣ Terminal 2 - Notre Frontend (todo-app)

```bash
cd c:\Users\marou\Angular\TODO_LIST\todo-app
npm start
```

✅ **Résultat attendu** : `Angular Live Development Server is listening on localhost:4200`

---

### 3️⃣ Navigateur

Ouvrons : **http://localhost:4200**

**Option 1 - Créons notre compte** (Recommandé) :
1. Cliquons sur **Sign Up**
2. Remplissons le formulaire avec nos informations
3. Connectons-nous avec nos nouveaux identifiants

**Option 2 - Compte par défaut** :
- Login : `mail@gmail.com`
- Password : `passwd`

---

## 🔧 Nos Commandes utiles

### Notre Backend
```bash
# Installer les dépendances (déjà fait)
cd todo-services
npm install

# Démarrer notre serveur
npm start
```

### Notre Frontend
```bash
# Installer les dépendances (déjà fait)
cd todo-app
npm install

# Démarrer notre serveur de développement
npm start

# Build de production (optionnel)
npm run build
```

### MongoDB
```bash
# Démarrer MongoDB (si nécessaire)
mongod

# Vérifier la connexion
mongosh
```

---

## 🎯 Nos URLs importantes

- **Notre Frontend** : http://localhost:4200
- **Notre Backend API** : http://localhost:3000
- **Notre MongoDB** : mongodb://localhost:27017/todo_db

---

## ✅ Vérification du bon fonctionnement

### Notre Backend
```bash
# Tester notre API directement (nécessite header x-user-id)
curl -H "x-user-id: 1" http://localhost:3000/todos
```

### Notre Frontend
1. Ouvrir http://localhost:4200
2. Créer un compte ou se connecter avec mail@gmail.com / passwd
3. Vérifier que notre page "Todos" s'affiche
4. 🆕 Ajouter un todo pour vérifier que tout fonctionne

---

## 🐛 Résoudre nos problèmes

### Port déjà utilisé (Backend - 3000)
```bash
# Windows - Trouver le processus
netstat -ano | findstr :3000

# Tuer le processus
taskkill /PID <PID> /F
```

### Port déjà utilisé (Frontend - 4200)
```bash
# Windows - Trouver le processus
netstat -ano | findstr :4200

# Tuer le processus
taskkill /PID <PID> /F
```

### MongoDB ne démarre pas
1. Vérifions que MongoDB est bien installé
2. Vérifions le service MongoDB dans les services Windows
3. Redémarrons le service si nécessaire

---

## 📦 Structure de nos fichiers créés

```
TODO_LIST/
├── todo-services/           ✅ Notre Backend complet
│   ├── controller/          # 🆕 Avec filtrage par userId
│   ├── db/
│   ├── model/              # 🆕 Todo avec userId
│   ├── server.js
│   └── package.json
│
└── todo-app/               ✅ Notre Frontend complet
    ├── src/
    │   ├── app/
    │   │   ├── directives/
    │   │   ├── head-bar/
    │   │   ├── interfaces/
    │   │   ├── pipes/
    │   │   ├── services/
    │   │   ├── signup/          # 🆕 Composant inscription
    │   │   ├── todo-detail/     # 🆕 Avec bouton fermeture
    │   │   ├── todo-list/
    │   │   ├── todo-reactive-form/
    │   │   ├── todo-template-driven-form/
    │   │   ├── update-todo/     # 🆕 Avec bouton fermeture
    │   │   ├── app.config.ts
    │   │   ├── app.html
    │   │   ├── app.routes.ts    # 🆕 Route /signup
    │   │   └── app.ts
    │   ├── styles.css          # 🆕 Bootstrap intégré
    │   └── main.ts             # 🆕 Zone.js importé
    └── package.json
```

---

## 🎉 C'est prêt !

Notre application TODO List MEAN Stack est complète et fonctionnelle !

**Nouvelles fonctionnalités** :
- 🆕 Inscription utilisateur
- 🆕 Filtrage par utilisateur (chacun voit ses propres tâches)
- 🆕 Boutons de fermeture sur les modales
- 🆕 Gestion multi-utilisateurs

**Bon développement ! 🚀**
