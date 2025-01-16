import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BottomBarElement } from '../../model/BottomBarElement.model';
import { SetPagesService } from '../../services/set-pages.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bottom-bar',
  imports: [MatIconModule, RouterLink],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css'
})
export class BottomBarComponent implements OnInit {
 
  leftElement : BottomBarElement = {
    text:'testing',
    icon:'home',
    isActive:true,
    linkTo:''
  }
  rightElement : BottomBarElement = {
    text:'testing 2',
    icon:'close',
    isActive:true,
    linkTo:''
  }

  centerElement: string = ''

  pagesService = inject(SetPagesService)

 
  ngOnInit(): void {
    this.pagesService.changePagesObservable.subscribe({
      next: (value) => {
        this.leftElement.text = value.previous
        this.leftElement.isActive = value.previousActive
        this.leftElement.linkTo = value.previousLink
        this.rightElement.text = value.next
        this.rightElement.isActive = value.nextActive
        this.rightElement.linkTo = value.nextLink
        this.centerElement = value.centerElement
      }
    })
  }
}
