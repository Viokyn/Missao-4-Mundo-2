import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LivroListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}