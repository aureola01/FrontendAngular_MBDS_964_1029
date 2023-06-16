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

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.logIn(this.email, this.password).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        if (error.status == 400)
          this.error = "Identifiant invalide";
        if (error.status == 500)
          this.error = "Erreur serveur"
      }
    );
  }
}
