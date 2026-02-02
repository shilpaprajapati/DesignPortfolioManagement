import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PortfolioData, Category, PortfolioItem } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private portfolioData = signal<PortfolioData | null>(null);
  
  // Public signals
  public siteConfig = computed(() => this.portfolioData()?.site);
  public skills = computed(() => this.portfolioData()?.skills || []);
  public categories = computed(() => this.portfolioData()?.categories || []);
  public allItems = computed(() => {
    const categories = this.portfolioData()?.categories || [];
    return categories.flatMap(cat => cat.items);
  });
  public featuredItems = computed(() => {
    return this.allItems().filter(item => item.featured);
  });

  constructor(private http: HttpClient) {
    this.loadContent();
  }

  private loadContent(): void {
    this.http.get<PortfolioData>('/assets/content/portfolio.json')
      .subscribe({
        next: (data) => {
          this.portfolioData.set(data);
        },
        error: (error) => {
          console.error('Error loading portfolio data:', error);
        }
      });
  }

  getItemById(id: string): PortfolioItem | undefined {
    return this.allItems().find(item => item.id === id);
  }

  getItemsByCategory(categoryId: string): PortfolioItem[] {
    const category = this.categories().find(cat => cat.id === categoryId);
    return category?.items || [];
  }

  getItemsByTool(tool: string): PortfolioItem[] {
    return this.allItems().filter(item => 
      item.tools.some(t => t.toLowerCase() === tool.toLowerCase())
    );
  }

  getItemsByTag(tag: string): PortfolioItem[] {
    return this.allItems().filter(item => 
      item.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  }

  getAllTools(): string[] {
    const tools = new Set<string>();
    this.allItems().forEach(item => {
      item.tools.forEach(tool => tools.add(tool));
    });
    return Array.from(tools).sort();
  }

  getAllTags(): string[] {
    const tags = new Set<string>();
    this.allItems().forEach(item => {
      item.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }
}
