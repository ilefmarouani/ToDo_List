import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-todo-detail',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './todo-detail.component.html',
    styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
    @Input() todo!: Todo;
    @Output() closeModal = new EventEmitter<void>();

    faCheck = faCheck;

    constructor(private todoService: TodoService) { }

    onClose(): void {
        this.closeModal.emit();
    }

    toggleDone(): void {
        this.todo.done = !this.todo.done;
        this.updateTodo(this.todo);
    }

    updateTodo(todo: Todo): void {
        this.todoService.updateTodo(todo).subscribe({
            next: () => {
                console.log('Todo updated successfully');
            },
            error: (err) => {
                console.error('Error updating todo:', err);
            }
        });
    }
}
