import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-todo-reactive-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './todo-reactive-form.component.html',
    styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent implements OnInit {
    loginForm!: FormGroup;
    errorMessage: string = '';

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            login: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            const { login, password } = this.loginForm.value;
            const success = this.authService.login(login, password);

            if (success) {
                this.router.navigate(['/todos']);
            } else {
                this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
            }
        }
    }

    get login() {
        return this.loginForm.get('login');
    }

    get password() {
        return this.loginForm.get('password');
    }
}
