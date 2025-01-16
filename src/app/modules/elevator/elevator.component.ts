import { Component, inject, OnInit } from '@angular/core';
import { PagesChanger } from '../../model/PagesChanger.model';
import { SetPagesService } from '../../services/set-pages.service';

@Component({
  selector: 'app-elevator',
  imports: [],
  templateUrl: './elevator.component.html',
  styleUrl: './elevator.component.css'
})
export class ElevatorComponent implements OnInit {

    pageService = inject(SetPagesService)
    ngOnInit(): void {
      let pages : PagesChanger = {
        next:'videocurrículum',
        previous:'currículum vitae',
        nextActive:true,
        previousActive:true,
        nextLink:'/videocurriculum',
        previousLink:'/curriculum',
        centerElement:'Elevator Pitch'
      }
  
      this.pageService.updatePages(pages)
    }

}
