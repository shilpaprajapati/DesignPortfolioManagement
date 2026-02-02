import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../../core/services/content.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  contentService = inject(ContentService);
  themeService = inject(ThemeService);

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
}
