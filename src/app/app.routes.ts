import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        loadChildren : () => import('./modules/home/home.routes').then(m => m.homeRoutes)
    },
    {
        path:'presentation',
        loadChildren : () => import('./modules/presentation/presentation.routes').then(m => m.presentationRoutes),
    },
    {
        path:'curriculum',
        loadChildren:() => import('./modules/curriculum/curriculum.routes').then(m =>m.curriculumRoutes),
    },
    {
        path:'elevator',
        loadChildren:() => import('./modules/elevator/elevator.routes').then(m => m.elevatorRoutes),
    },
    {
        path:'videocurriculum',
        loadChildren : () => import('./modules/videocurriculum/videocurriculum.routes').then(m => m.videocurriculumRoutes),
    },
    { path: '**', redirectTo:'/'}  
];
