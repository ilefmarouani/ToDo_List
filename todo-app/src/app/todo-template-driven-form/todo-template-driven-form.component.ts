import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interfaces/todo';

@Component({
    selector: 'app-todo-template-driven-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './todo-template-driven-form.component.html',
    styleUrls: ['./todo-template-driven-form.component.css']
})
export class TodoTemplateDrivenFormComponent implements OnInit {
    todo: Todo = {
        name: '',
        description: '',
        done: false,
        creation_date: new Date(),
        end_date: new Date()
    };

    constructor(
        private todoService: TodoService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    addTodo(): void {
        this.todoService.addTodo(this.todo).subscribe({
            next: () => {
                alert('Todo ajouté avec succès !');
                this.router.navigate(['/todos']);
            },
            error: (err) => {
                console.error('Error adding todo:', err);
                alert('Erreur lors de l\'ajout du todo');
            }
        });
    }

    onCancel(): void {
        this.router.navigate(['/todos']);
    }
}
