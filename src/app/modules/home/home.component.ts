import { Component, inject, OnInit } from '@angular/core';
import { SetPagesService } from '../../services/set-pages.service';
import { PagesChanger } from '../../model/PagesChanger.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  pagesService = inject(SetPagesService)

    ngOnInit(): void {
      let pages : PagesChanger = {
        next:'carta presentación',
        previous:'',
        nextActive:true,
        previousActive:false,
        nextLink:'/presentation',
        previousLink:'',
        centerElement:'Home Page'
      }
  
      this.pagesService.updatePages(pages)
  
    }
}
