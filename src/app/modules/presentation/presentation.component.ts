import { Component, inject, OnInit } from '@angular/core';
import { PagesChanger } from '../../model/PagesChanger.model';
import { SetPagesService } from '../../services/set-pages.service';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent implements OnInit {

    pageService = inject(SetPagesService)
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
  
    }

}
