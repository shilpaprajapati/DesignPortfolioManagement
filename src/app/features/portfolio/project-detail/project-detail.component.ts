import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContentService } from '../../../core/services/content.service';
import { SeoService } from '../../../core/services/seo.service';
import { PortfolioItem } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  contentService = inject(ContentService);
  seoService = inject(SeoService);

  project?: PortfolioItem;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.project = this.contentService.getItemById(id);
      
      if (this.project) {
        this.seoService.updateProjectMeta(
          this.project.title,
          this.project.description,
          this.project.thumbnail
        );
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  copyLink(): void {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
  }
}
