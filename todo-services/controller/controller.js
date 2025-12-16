const Todo = require("../model/todo.js");

// Récupérer tous les todos d'un utilisateur
exports.getAllTodos = async (req, res) => {
    try {
        const userId = req.headers['x-user-id'];
        if (!userId) {
            return res.status(400).json({ message: "User ID required" });
        }
        const todos = await Todo.find({ userId: userId });
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Récupérer un todo par son ID
exports.getTodoById = async (req, res) => {
    try {
        const userId = req.headers['x-user-id'];
        const todo = await Todo.findOne({ todoId: req.params.id, userId: userId });
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Créer un nouveau todo
exports.createTodo = async (req, res) => {
    const userId = req.headers['x-user-id'];
    if (!userId) {
        return res.status(400).json({ message: "User ID required" });
    }

    const todo = new Todo({
        name: req.body.name,
        description: req.body.description,
        done: req.body.done || false,
        creation_date: new Date(),
        end_date: req.body.end_date,
        userId: userId
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Modifier un todo
exports.updateTodo = async (req, res) => {
    try {
        const userId = req.headers['x-user-id'];
        const todo = await Todo.findOne({ todoId: req.params.id, userId: userId });
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        if (req.body.name != null) {
            todo.name = req.body.name;
        }
        if (req.body.description != null) {
            todo.description = req.body.description;
        }
        if (req.body.done != null) {
            todo.done = req.body.done;
        }
        if (req.body.end_date != null) {
            todo.end_date = req.body.end_date;
        }

        const updatedTodo = await todo.save();
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer un todo
exports.deleteTodo = async (req, res) => {
    try {
        const userId = req.headers['x-user-id'];
        const todo = await Todo.findOne({ todoId: req.params.id, userId: userId });
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        await Todo.deleteOne({ todoId: req.params.id, userId: userId });
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
