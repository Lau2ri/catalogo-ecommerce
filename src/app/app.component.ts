import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogModule } from './catalog/catalog.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatalogModule],
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class AppComponent {
  title = 'catalogo-ecommerce';
}
