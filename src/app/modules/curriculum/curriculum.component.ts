import { Component, inject, OnInit } from '@angular/core';
import { SetPagesService } from '../../services/set-pages.service';
import { PagesChanger } from '../../model/PagesChanger.model';

@Component({
  selector: 'app-curriculum',
  imports: [],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent implements OnInit {
  
  pageService = inject(SetPagesService)
  ngOnInit(): void {
    let pages : PagesChanger = {
      next:'elevator pitch',
      previous:'carta presentación',
      nextActive:true,
      previousActive:true,
      nextLink:'/elevator',
      previousLink:'/presentation',
      centerElement:'Currículum vitae'
    }

    this.pageService.updatePages(pages)

  }
}
