import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';

@Component({
    selector: 'app-qause',
    templateUrl: './qause.component.html',
    styleUrls: ['./qause.component.css']
})
export class QauseComponent implements OnInit {
    isLoginNGO: boolean = false;

    constructor(
        public _router: Router,
        private actions$: Actions,
        ) {
        // get Current NGO Details
        this.actions$.pipe(ofType('SET_TOKEN')).subscribe((data:any) => {
        if(data.payload.success){
            setTimeout(() => {
                this.getCurrentNGODetails();
            }, 2000);
            };
        });
    };

  ngOnInit():void {
    this.getCurrentNGODetails();
  }

  getCurrentNGODetails() {
        if (sessionStorage.getItem('currentUser')) {
          this.isLoginNGO = true;
        };
    };


}
