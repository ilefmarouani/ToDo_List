// Imports et const
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

// Création de node js server
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

// Connexion à la base de données
const db = require("./db/db.js");

// Import du controller
const todoController = require("./controller/controller.js");

// Routes REST API
app.get("/todos", todoController.getAllTodos);
app.get("/todos/:id", todoController.getTodoById);
app.post("/todos", todoController.createTodo);
app.put("/todos/:id", todoController.updateTodo);
app.delete("/todos/:id", todoController.deleteTodo);

app.listen(port, (err) => console.log(`Server is running on port: ${port}`));
