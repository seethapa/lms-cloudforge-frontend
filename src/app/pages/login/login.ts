import { Component, inject,ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/internal/operators/finalize';
import { AuthService } from '../../core/services/auth.service';


@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 private auth = inject(AuthService);
  private router = inject(Router);
  private http = inject(HttpClient);
   private cdr = inject(ChangeDetectorRef); // 🔥 ADD THIS

  email = '';
  password = '';
 loading = false;
 error = '';

onSubmit() {
  this.error = '';
  this.loading = true;

  this.auth.loginAndLoadProfile(this.email, this.password)
    .pipe(finalize(() => {
      this.loading = false;
      this.cdr.detectChanges(); // still recommended
    }))
    .subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => {
        this.error =
          err.status === 401 ? 'Invalid email or password'
          : err.status === 0 ? 'Server not reachable'
          : 'Login failed';
      }
    });
}


// onSubmit() {
//   this.error = ''; // reset error

//   this.auth.login(this.email, this.password)
//     .subscribe({
//       next: () => {

//         // Fetch profile after successful login
//         this.http.get('https://localhost:7216/api/users/me')
//           .subscribe({
//             next: (user) => {
//               this.auth.setUser(user);
//               this.router.navigate(['/home']);
//             },
//             error: () => {
//               this.error = 'Failed to load user profile. Please try again.';
//             }
//           });
//       },
//       error: (err) => {
//         // Handle login error
//         if (err.status === 401) {
//           this.error = 'Invalid email or password';
//         } else if (err.status === 0) {
//           this.error = 'Server not reachable. Please check your connection.';
//         } else {
//           this.error = 'Login failed. Please try again later.';
//         }
//       }
//     });
// }


// handleLogin() {
//   // login logic
  
// }

onBack() {
  // navigate back
}

onSignup() {
  // navigate to signup
}
}

