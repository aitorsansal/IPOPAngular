import { Component, inject, OnInit } from '@angular/core';
import { SetPagesService } from '../../services/set-pages.service';
import { PagesChanger } from '../../model/PagesChanger.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {MatDividerModule} from '@angular/material/divider';
import { bootstrapInstagram, bootstrapTwitch, bootstrapTwitterX, bootstrapLinkedin, bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  selector: 'app-curriculum',
  imports: [NgIcon, MatDividerModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css',
  providers: [ 
    provideIcons({ bootstrapInstagram, bootstrapTwitch, bootstrapTwitterX, bootstrapLinkedin, bootstrapGithub })]
})
export class CurriculumComponent implements OnInit {
  
  http = inject(HttpClient);
  aboutMeText : string = '';

  pageService = inject(SetPagesService)
  ngOnInit(): void {
    let pages : PagesChanger = {
      next:'carta presentación',
      previous:'',
      nextActive:true,
      previousActive:false,
      nextLink:'/presentation',
      previousLink:'',
      centerElement:'Currículum vitae'
    }

    this.pageService.updatePages(pages)

    this.http.get('assets/aboutMe.txt', { responseType: 'text' }).subscribe((data) => {
      this.aboutMeText = data;
    });
  }

  socialIcons =[
    {
      icon: 'bootstrapInstagram',
      link:'https://www.instagram.com/aitorsansal?igsh=NjFjMml0MHY4N2w='
    },
    {
      icon: 'bootstrapTwitch',
      link:'https://twitch.tv/aitorsansal'
    },
    {
      icon: 'bootstrapTwitterX',
      link:''
    },
    {
      icon: 'bootstrapLinkedin',
      link:''
    },
    {
      icon: 'bootstrapGithub',
      link:'https://github.com/aitorsansal'
    }
  ]

  
}
