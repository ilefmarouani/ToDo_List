import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interfaces/todo';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList, faPenToSquare, faTrash, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { TodoDirective } from '../directives/todo.directive';
import { TodoPipe } from '../pipes/todo.pipe';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { UpdateTodoComponent } from '../update-todo/update-todo.component';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule, TodoDirective, TodoPipe, TodoDetailComponent, UpdateTodoComponent],
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    todos: Todo[] = [];
    faList = faList;
    faPenToSquare = faPenToSquare;
    faTrash = faTrash;
    faCheck = faCheck;
    faX = faX;

    selectedTodo: Todo | null = null;
    showDetailModal: boolean = false;
    showUpdateModal: boolean = false;

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.loadTodos();
    }

    loadTodos(): void {
        this.todoService.getTodos().subscribe({
            next: (data) => {
                this.todos = data;
            },
            error: (err) => {
                console.error('Error loading todos:', err);
            }
        });
    }

    deleteTodo(todo: Todo): void {
        if (confirm(`Voulez-vous vraiment supprimer "${todo.name}" ?`)) {
            this.todoService.deleteTodo(todo.todoId!).subscribe({
                next: () => {
                    this.loadTodos();
                },
                error: (err) => {
                    console.error('Error deleting todo:', err);
                }
            });
        }
    }

    showDetail(todo: Todo): void {
        this.selectedTodo = todo;
        this.showDetailModal = true;
    }

    showUpdate(todo: Todo): void {
        this.selectedTodo = todo;
        this.showUpdateModal = true;
    }

    onDetailClose(): void {
        this.showDetailModal = false;
        this.selectedTodo = null;
        this.loadTodos();
    }

    onUpdateClose(): void {
        this.showUpdateModal = false;
        this.selectedTodo = null;
        this.loadTodos();
    }
}
