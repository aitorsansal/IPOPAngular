import { Component, inject, OnInit } from '@angular/core';
import { PagesChanger } from '../../model/PagesChanger.model';
import { SetPagesService } from '../../services/set-pages.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent implements OnInit {

    pageService = inject(SetPagesService)
    http = inject(HttpClient);
    presentationCard : string = '';
    ngOnInit(): void {
      let pages : PagesChanger = {
        next:'elevator pitch',
        previous:'currículum vitae',
        nextActive:true,
        previousActive:true,
        nextLink:'/elevator',
        previousLink:'/curriculum',
        centerElement:'Presentación Personal'
      }
  
      this.pageService.updatePages(pages)
      
      this.http.get('assets/presentation.txt', { responseType: 'text' }).subscribe((data) => {
        this.presentationCard = data;
      });
    }

}
