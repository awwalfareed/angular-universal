import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-qause-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class QauseHomeComponent implements OnInit {

    constructor(public _router: Router) {}

    ngOnInit() {
        
    }

}