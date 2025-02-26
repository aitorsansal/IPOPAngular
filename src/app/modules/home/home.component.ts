import { Component, inject, OnInit } from '@angular/core';
import { SetPagesService } from '../../services/set-pages.service';
import { PagesChanger } from '../../model/PagesChanger.model';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapInstagram, bootstrapTwitch, bootstrapTwitterX, 
  bootstrapLinkedin, bootstrapGithub, bootstrapCodeSquare,
   bootstrapBook, bootstrapEnvelope, bootstrapStarFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, NgIcon],
  providers: [ 
    provideIcons({ bootstrapInstagram, bootstrapTwitch, bootstrapTwitterX,
      bootstrapLinkedin, bootstrapGithub, bootstrapCodeSquare,
       bootstrapBook, bootstrapEnvelope, bootstrapStarFill })]
})
export class HomeComponent implements OnInit {
  pagesService = inject(SetPagesService);
  http = inject(HttpClient);
  sanitizer = inject(DomSanitizer);
  aboutMeText: SafeHtml = '';
  projects : any[] = []
  socialIcons : any[] = []

  ngOnInit(): void {
    let pages: PagesChanger = {
      next: 'currículum vitae',
      previous: '',
      nextActive: true,
      previousActive: false,
      nextLink: '/curriculum',
      previousLink: '',
      centerElement: 'Home Page'
    };

    this.pagesService.updatePages(pages);
    this.http.get('assets/aboutMe.txt', { responseType: 'text' }).subscribe(data => {
      // Define a mapping object for replacements
      const replacements = {
        'Python': '<span style="color: var(--sl-color-accent-high)"><i>Python</i></span>',
        'MySQL': '<span style="color: var(--sl-color-accent-high)"><i>MySQL</i></span>',
        'Kotlin Jetpack Compose': '<span style="color: var(--sl-color-accent-high)"><i>Kotlin Jetpack Compose</i></span>',
        'Angular': '<span style="color: var(--sl-color-accent-high)"><i>Angular</i></span>',
        'React': '<span style="color: var(--sl-color-accent-high)"><i>React</i></span>',
        'Astro': '<span style="color: var(--sl-color-accent-high)"><i>Astro</i></span>',
        'JavaScript': '<span style="color: var(--sl-color-accent-high)"><i>JavaScript</i></span>',
        'Twitch': '<a href="https://www.twitch.tv/aitorsansal">Twitch</a>',
      };

      // Replace newline characters with <br> tags
      let formattedData = data.replace(/\n/g, '<br>');

      // Perform replacements using the mapping object
      for (const [key, value] of Object.entries(replacements)) {
        formattedData = formattedData.replace(new RegExp(key, 'g'), value);
      }

      this.aboutMeText = this.sanitizer.bypassSecurityTrustHtml(formattedData);
      this.http.get<any[]>('assets/socials.json', { responseType: 'json' }). subscribe((data) => {this.socialIcons = data;});
    });

    this.http.get<any[]>("assets/projects.json", {responseType: 'json'}).pipe(
      map(projects => projects.map(project => {
        if (project.pdf) {
          project.pdf = this.sanitizer.bypassSecurityTrustResourceUrl(project.pdf);
        }
        return project;
      }))
    ).subscribe(data => {
      this.projects = data;
      console.log(this.projects)
    });

  }
}
