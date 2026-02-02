import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  updateMetaTags(tags: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
  }): void {
    if (tags.title) {
      this.title.setTitle(tags.title);
      this.meta.updateTag({ property: 'og:title', content: tags.title });
      this.meta.updateTag({ name: 'twitter:title', content: tags.title });
    }

    if (tags.description) {
      this.meta.updateTag({ name: 'description', content: tags.description });
      this.meta.updateTag({ property: 'og:description', content: tags.description });
      this.meta.updateTag({ name: 'twitter:description', content: tags.description });
    }

    if (tags.image) {
      this.meta.updateTag({ property: 'og:image', content: tags.image });
      this.meta.updateTag({ name: 'twitter:image', content: tags.image });
    }

    if (tags.url) {
      this.meta.updateTag({ property: 'og:url', content: tags.url });
    }

    if (tags.type) {
      this.meta.updateTag({ property: 'og:type', content: tags.type });
    }

    // Twitter card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  updateProjectMeta(projectTitle: string, description: string, image?: string): void {
    this.updateMetaTags({
      title: `${projectTitle} | Portfolio`,
      description: description,
      image: image,
      type: 'article'
    });
  }
}
