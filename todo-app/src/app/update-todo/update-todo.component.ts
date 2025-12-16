import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'app-update-todo',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './update-todo.component.html',
    styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
    @Input() todo!: Todo;
    @Output() closeModal = new EventEmitter<void>();

    editedTodo!: Todo;

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        // Créer une copie du todo pour l'édition
        this.editedTodo = { ...this.todo };
    }

    onClose(): void {
        this.closeModal.emit();
    }

    updateTodo(): void {
        this.todoService.updateTodo(this.editedTodo).subscribe({
            next: () => {
                alert('Todo mis à jour avec succès !');
                this.closeModal.emit();
            },
            error: (err) => {
                console.error('Error updating todo:', err);
                alert('Erreur lors de la mise à jour du todo');
            }
        });
    }
}
