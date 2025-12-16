import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private users: User[] = [];
    private readonly USERS_KEY = 'app_users';

    constructor() {
        this.loadUsers();
    }

    private loadUsers(): void {
        const usersStr = localStorage.getItem(this.USERS_KEY);
        if (usersStr) {
            this.users = JSON.parse(usersStr);
        } else {
            // Utilisateur par défaut
            this.users = [
                {
                    id: 1,
                    login: "mail@gmail.com",
                    password: "passwd",
                    token: "jfci33ade"
                }
            ];
            this.saveUsers();
        }
    }

    private saveUsers(): void {
        localStorage.setItem(this.USERS_KEY, JSON.stringify(this.users));
    }

    private generateToken(): string {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    }

    register(name: string, login: string, password: string): { success: boolean, message?: string } {
        // Vérifier si l'email existe déjà
        const existingUser = this.users.find(u => u.login === login);
        if (existingUser) {
            return { success: false, message: 'Cet email est déjà utilisé' };
        }

        // Créer le nouvel utilisateur
        const newUser: User = {
            id: this.users.length + 1,
            login: login,
            password: password,
            token: this.generateToken(),
            name: name
        };

        this.users.push(newUser);
        this.saveUsers();

        return { success: true };
    }

    login(login: string, password: string): boolean {
        const user = this.users.find(u => u.login === login && u.password === password);
        if (user) {
            localStorage.setItem('token', user.token);
            localStorage.setItem('user', JSON.stringify(user));
            return true;
        }
        return false;
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    isAuthenticated(): boolean {
        return localStorage.getItem('token') !== null;
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    getCurrentUser(): User | null {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    }
}
