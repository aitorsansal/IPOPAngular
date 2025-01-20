import { Component, inject, OnInit } from '@angular/core';
import { SetPagesService } from '../../services/set-pages.service';
import { PagesChanger } from '../../model/PagesChanger.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { bootstrapInstagram, bootstrapTwitch, bootstrapTwitterX, bootstrapLinkedin, bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curriculum',
  imports: [NgIcon, MatDividerModule, CommonModule, MatProgressBarModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css',
  providers: [ 
    provideIcons({ bootstrapInstagram, bootstrapTwitch, bootstrapTwitterX, bootstrapLinkedin, bootstrapGithub })]
})
export class CurriculumComponent implements OnInit {
  
  http = inject(HttpClient);
  aboutMeText : string = '';
  formations :any[] = []
  experiences :any[] = []
  skills : any[] = []

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
      let form = (data as any).default;
      this.aboutMeText = form;
    });
    this.http.get<any[]>('assets/formations.json', { responseType: 'json' }). subscribe((data) => {this.formations = data;});
    this.http.get<any[]>('assets/experiences.json', { responseType: 'json' }). subscribe((data) => {this.experiences = data;});
    this.http.get<any[]>('assets/skills.json', { responseType: 'json' }). subscribe((data) => {this.skills = data;});
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
