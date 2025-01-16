import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PagesChanger } from '../model/PagesChanger.model';

@Injectable({
  providedIn: 'root'
})
export class SetPagesService {

  constructor() { }

  private changePagesSubject: Subject<PagesChanger> = new Subject<PagesChanger>();

  changePagesObservable: Observable<PagesChanger> = this.changePagesSubject.asObservable();

  updatePages(newPages : PagesChanger){
    this.changePagesSubject.next(newPages)
  }
}
