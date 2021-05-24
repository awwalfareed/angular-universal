import { Component, OnInit } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() {
    // translate.addLangs(['en', 'hi']);
    // translate.setDefaultLang('en');

    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
  }

  ngOnInit(): void {
  }

}
