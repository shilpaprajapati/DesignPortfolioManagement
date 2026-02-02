import { Injectable, signal, effect } from '@angular/core';
import { ContentService } from './content.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public darkMode = signal<boolean>(false);

  constructor(private contentService: ContentService) {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    this.darkMode.set(savedDarkMode);

    // Apply dark mode class
    effect(() => {
      if (this.darkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', this.darkMode().toString());
    });

    // Apply theme colors from JSON
    effect(() => {
      const siteConfig = this.contentService.siteConfig();
      if (siteConfig?.theme) {
        const theme = siteConfig.theme;
        document.documentElement.style.setProperty('--color-primary', theme.primary);
        document.documentElement.style.setProperty('--color-background', theme.background);
        document.documentElement.style.setProperty('--color-background-dark', theme.backgroundDark);
        document.documentElement.style.setProperty('--color-text', theme.text);
        document.documentElement.style.setProperty('--color-text-dark', theme.textDark);
        document.documentElement.style.setProperty('--color-accent', theme.accent);
      }
    });
  }

  toggleDarkMode(): void {
    this.darkMode.update(value => !value);
  }
}
