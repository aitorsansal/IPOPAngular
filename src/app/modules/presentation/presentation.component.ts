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
        next:'currículum vitae',
        previous:'',
        nextActive:true,
        previousActive:false,
        nextLink:'/curriculum',
        previousLink:'',
        centerElement:'Presentación Personal'
      }
  
      this.pageService.updatePages(pages)
  
    }

}
