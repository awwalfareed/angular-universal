import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-loader',
  templateUrl: './signup-loader.component.html',
  styleUrls: ['./signup-loader.component.css']
})
export class SignupLoaderComponent implements OnInit {
  @Input() isLoaded: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
