import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-head-bar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './head-bar.component.html',
    styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent implements OnInit {
    isAuthenticated: boolean = false;

    constructor(public authService: AuthService) { }

    ngOnInit(): void {
        this.checkAuth();
    }

    checkAuth(): void {
        this.isAuthenticated = this.authService.isAuthenticated();
    }

    onSignOut(): void {
        this.authService.logout();
        this.checkAuth();
    }

    onNavigate(): void {
        this.checkAuth();
    }
}
