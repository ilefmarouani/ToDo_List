import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: TodoReactiveFormComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'todos', component: TodoListComponent },
    { path: 'new', component: TodoTemplateDrivenFormComponent },
    { path: '**', redirectTo: '/login' }
];
