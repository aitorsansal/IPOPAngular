import { Component, inject, OnInit } from '@angular/core';
import { PagesChanger } from '../../model/PagesChanger.model';
import { SetPagesService } from '../../services/set-pages.service';

@Component({
  selector: 'app-videocurriculum',
  imports: [],
  templateUrl: './videocurriculum.component.html',
  styleUrl: './videocurriculum.component.css'
})
export class VideocurriculumComponent implements OnInit {
  
    pageService = inject(SetPagesService)
    ngOnInit(): void {
      let pages : PagesChanger = {
        next:'',
        previous:'elevator pitch',
        nextActive:false,
        previousActive:true,
        nextLink:'',
        previousLink:'/elevator',
        centerElement:'VideoCurrículum'
      }
  
      this.pageService.updatePages(pages)
  
    }
}
