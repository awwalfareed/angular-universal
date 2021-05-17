import { Component, OnInit , HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidemenu: boolean = false;
  navToggle = '';

  constructor() { }

  ngOnInit(): void {
  }
  header_variable = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0  ){
      this.header_variable = true;
    }
    else{
      this.header_variable = false;
    }
  }
   toggle() {
    this.sidemenu = !this.sidemenu;
    if(this.sidemenu){
      this.navToggle = 'open';
    }
    else{
      this.navToggle = '';
    }
  }
}
