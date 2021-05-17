import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['../joinus/joinus.component.css']
})
export class JoinusComponent implements OnInit {
  private loggedIn: boolean;
  constructor(  private router: Router) { }
  ngOnInit() {
  }

} 
