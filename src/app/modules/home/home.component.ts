import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  imports: [MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sideBarElements = [
    { text: 'Carta Presentación', path: '/presentation', icon:'note' },
    { text: 'Currículum vitae', path: '/curriculum', icon:'star' },
    { text: 'Elevator pitch', path: '/elevator', icon:'volume_up' },
    { text: 'Videocurrículum', path: '/videocurriculum', icon:'videocam' }
  ]
}

