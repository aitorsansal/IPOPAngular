import { Component, inject, linkedSignal, OnInit } from '@angular/core';
import { SetPagesService } from '../../services/set-pages.service';
import { PagesChanger } from '../../model/PagesChanger.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { bootstrapInstagram, bootstrapTwitch, bootstrapTwitterX, 
  bootstrapLinkedin, bootstrapGithub, bootstrapCodeSquare,
   bootstrapBook, bootstrapEnvelope, bootstrapStarFill } from '@ng-icons/bootstrap-icons';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curriculum',
  imports: [NgIcon, MatDividerModule, 
    CommonModule, MatProgressBarModule,
  MatTooltipModule, MatGridListModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css',
  providers: [ 
    provideIcons({ bootstrapInstagram, bootstrapTwitch, bootstrapTwitterX,
      bootstrapLinkedin, bootstrapGithub, bootstrapCodeSquare,
       bootstrapBook, bootstrapEnvelope, bootstrapStarFill })]
})
export class CurriculumComponent implements OnInit {
  
  http = inject(HttpClient);
  aboutMeText : string = '';
  formations :any[] = []
  experiences :any[] = []
  skills : any[] = []
  languages : any[] = []
  socialIcons : any[] = []

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
    this.http.get<any[]>('assets/skills.json', { responseType: 'json' }). subscribe((data) => {
      data.sort((el1, el2) => -(el1.level - el2.level));
      this.skills = data;
      });
    this.http.get<any[]>('assets/languages.json', { responseType: 'json' }). subscribe((data) => {this.languages = data;});    
    this.http.get<any[]>('assets/socials.json', { responseType: 'json' }). subscribe((data) => {this.socialIcons = data;});
  }


}
