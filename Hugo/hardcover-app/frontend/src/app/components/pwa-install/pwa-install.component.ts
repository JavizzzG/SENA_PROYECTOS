import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pwa-install',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pwa-banner" *ngIf="showBanner()">
      <div class="pwa-banner-icon">📚</div>
      <div class="pwa-banner-text">
        <strong>Add to Home Screen</strong>
        <span>Install Hardcover for quick access</span>
      </div>
      <div class="pwa-banner-actions">
        <button class="pwa-banner-install" (click)="install()">Install</button>
        <button class="pwa-banner-dismiss" (click)="dismiss()">✕</button>
      </div>
    </div>
  `,
  styles: [`
    .pwa-banner {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 200;
      display: flex;
      align-items: center;
      gap: 12px;
      background: var(--ink-2);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 14px 16px;
      box-shadow: var(--shadow-lg);
      min-width: 300px;
      max-width: calc(100vw - 32px);
      animation: fadeUp 0.4s ease both;
    }
    .pwa-banner-icon {
      font-size: 24px;
      flex-shrink: 0;
    }
    .pwa-banner-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .pwa-banner-text strong {
      font-size: 13px;
      color: var(--text-primary);
    }
    .pwa-banner-text span {
      font-size: 11px;
      color: var(--text-muted);
    }
    .pwa-banner-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .pwa-banner-install {
      font-family: var(--font-mono);
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--gold);
      background: var(--gold-dim);
      border: 1px solid var(--border);
      padding: 6px 14px;
      border-radius: var(--radius);
      cursor: pointer;
      transition: background 0.2s;
    }
    .pwa-banner-install:hover {
      background: rgba(201,168,76,0.25);
    }
    .pwa-banner-dismiss {
      color: var(--text-muted);
      font-size: 14px;
      cursor: pointer;
      padding: 4px 6px;
      background: none;
      border: none;
    }
    .pwa-banner-dismiss:hover {
      color: var(--text-primary);
    }
  `]
})
export class PwaInstallComponent implements OnInit {
  showBanner = signal(false);
  private deferredPrompt: any = null;

  ngOnInit() {
    window.addEventListener('beforeinstallprompt', (e: any) => {
      e.preventDefault();
      this.deferredPrompt = e;
      if (!localStorage.getItem('pwa-dismissed')) {
        setTimeout(() => this.showBanner.set(true), 3000);
      }
    });

    window.addEventListener('appinstalled', () => {
      this.showBanner.set(false);
      this.deferredPrompt = null;
    });
  }

  async install() {
    if (!this.deferredPrompt) return;
    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;
    if (outcome === 'accepted') this.showBanner.set(false);
    this.deferredPrompt = null;
  }

  dismiss() {
    this.showBanner.set(false);
    localStorage.setItem('pwa-dismissed', '1');
  }
}
