import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
    selector: 'app-contact',
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contentService = inject(ContentService);
  seoService = inject(SeoService);

  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  submitted = false;

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Contact | Portfolio',
      description: 'Get in touch for collaboration or inquiries.',
      type: 'website'
    });
  }

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      // In a real app, you would send this to a backend
      console.log('Form submitted:', this.formData);
      this.submitted = true;
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.formData = { name: '', email: '', message: '' };
        this.submitted = false;
      }, 3000);
    }
  }
}
