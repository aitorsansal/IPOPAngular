import { AfterViewInit, Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterOutlet, BottomBarComponent, CommonModule],
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent {
  title = 'IPOPAngular';


  sideBarElements = [
    { text: 'Carta Presentación', path: '/presentation', icon:'note' },
    { text: 'Currículum vitae', path: '/curriculum', icon:'star' },
    { text: 'Elevator pitch', path: '/elevator', icon:'volume_up' },
    { text: 'Videocurrículum', path: '/videocurriculum', icon:'videocam' }
  ]

}
