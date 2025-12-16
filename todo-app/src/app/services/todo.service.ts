import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private apiUrl = 'http://localhost:3000/todos';

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) { }

    private getHeaders(): HttpHeaders {
        const user = this.authService.getCurrentUser();
        const userId = user?.id || '1';
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'x-user-id': userId.toString()
        });
    }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.apiUrl, { headers: this.getHeaders() });
    }

    getTodoById(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
    }

    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(this.apiUrl, todo, { headers: this.getHeaders() });
    }

    updateTodo(todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(`${this.apiUrl}/${todo.todoId}`, todo, { headers: this.getHeaders() });
    }

    deleteTodo(todoId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${todoId}`, { headers: this.getHeaders() });
    }
}
