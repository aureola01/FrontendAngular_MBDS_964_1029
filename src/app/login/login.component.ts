import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.loading = true
    this.authService.logIn(this.email, this.password).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        if (error.status == 400)
          this.error = "Identifiant invalide";
        this.loading = false
        if (error.status == 500)
          this.error = "Erreur serveur"
        this.loading = false
      }
    );
  }
}
