import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';
import { PortfolioItem } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  contentService = inject(ContentService);
  seoService = inject(SeoService);

  selectedCategory = signal<string>('all');
  selectedTool = signal<string>('all');
  selectedTag = signal<string>('all');

  ngOnInit(): void {
    const siteConfig = this.contentService.siteConfig();
    if (siteConfig) {
      this.seoService.updateMetaTags({
        title: `${siteConfig.designerName} - ${siteConfig.tagline}`,
        description: siteConfig.bio,
        type: 'website'
      });
    }
  }

  get filteredItems(): PortfolioItem[] {
    let items = this.contentService.allItems();

    if (this.selectedCategory() !== 'all') {
      items = this.contentService.getItemsByCategory(this.selectedCategory());
    }

    if (this.selectedTool() !== 'all') {
      items = items.filter(item => 
        item.tools.some(t => t.toLowerCase() === this.selectedTool().toLowerCase())
      );
    }

    if (this.selectedTag() !== 'all') {
      items = items.filter(item => 
        item.tags.some(t => t.toLowerCase() === this.selectedTag().toLowerCase())
      );
    }

    return items;
  }

  setCategory(categoryId: string): void {
    this.selectedCategory.set(categoryId);
  }

  setTool(tool: string): void {
    this.selectedTool.set(tool);
  }

  setTag(tag: string): void {
    this.selectedTag.set(tag);
  }
}
