import { Component, inject, OnInit } from '@angular/core';
import { SetPagesService } from '../../services/set-pages.service';
import { PagesChanger } from '../../model/PagesChanger.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {MatDividerModule} from '@angular/material/divider';
import { bootstrapInstagram, bootstrapTwitch, bootstrapTwitterX, bootstrapLinkedin, bootstrapGithub } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-curriculum',
  imports: [NgIcon, MatDividerModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css',
  providers: provideIcons({ bootstrapInstagram, bootstrapTwitch, bootstrapTwitterX, bootstrapLinkedin, bootstrapGithub })
})
export class CurriculumComponent implements OnInit {
  
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

  formations = [
    {
      duration:'Septiembre 2023 - Marzo 2025',
      titulation: 'Desarrollo de aplicaciones multiplataforma (DAM)',
      place: 'Institut Montilivi'
    },
    {
      duration:'Septiembre 2021 - Junio 2023',
      titulation:'Animación 3D, juegos y entornos interactivos',
      place:'CIFOG'
    }
  ]
}
