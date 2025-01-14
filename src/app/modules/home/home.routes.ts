import { Routes } from "@angular/router";
import { CurriculumComponent } from "../curriculum/curriculum.component";
import { ElevatorComponent } from "../elevator/elevator.component";
import { PresentationComponent } from "../presentation/presentation.component";
import { VideocurriculumComponent } from "../videocurriculum/videocurriculum.component";
import { HomeComponent } from "./home.component";

export const homeRoutes: Routes = [
    {
        path:'presentation',
        loadChildren : () => import('../presentation/presentation.routes').then(m => m.presentationRoutes),
    },
    {
        path:'curriculum',
        loadChildren:() => import('../curriculum/curriculum.routes').then(m =>m.curriculumRoutes),
    },
    {
        path:'elevator',
        loadChildren:() => import('../elevator/elevator.routes').then(m => m.elevatorRoutes),
    },
    {
        path:'videocurriculum',
        loadChildren : () => import('../videocurriculum/videocurriculum.routes').then(m => m.videocurriculumRoutes),
    },
    { path: '**', component:HomeComponent}      
]