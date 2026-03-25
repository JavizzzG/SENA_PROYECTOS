import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { PwaInstallComponent } from './components/pwa-install/pwa-install.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavHeaderComponent, PwaInstallComponent],
  template: `
    <app-nav-header />
    <main class="main-content">
      <router-outlet />
    </main>
    <app-pwa-install />
  `,
  styles: [`
    :host { display: block; min-height: 100vh; }
    .main-content { padding-top: 72px; }
  `]
})
export class AppComponent {}
