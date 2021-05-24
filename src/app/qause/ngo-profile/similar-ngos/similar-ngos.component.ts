import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QauseService } from '@common/services/qause.service';

@Component({
  selector: 'app-similar-ngos',
  templateUrl: './similar-ngos.component.html',
  styleUrls: ['./similar-ngos.component.css']
})
export class SimilarNGOsComponent implements OnInit {
  @Input() profileDetails;
  allSimilarNGO: any;
  slideritems : any = 4;
  constructor(
    private qauseService: QauseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private elementRef: ElementRef
  ) {
  }

  ngOnInit(): void {
    var windowwidth = window.innerWidth;
    if (windowwidth <= 1024 && windowwidth > 991){
      this.slideritems=3;
    }
    if (windowwidth <= 991 && windowwidth > 767){
      this.slideritems=2;
    }
    if (windowwidth <= 736){
      this.slideritems=2;
    }

    if (windowwidth <= 576){
      this.slideritems=1;
    }
    let category = sessionStorage.getItem('nc');
    let state = sessionStorage.getItem('ns');
    this.qauseService.getSimilarNGOs(category, state).subscribe(data => {
      if (data.finalNgos)
        this.allSimilarNGO = data.finalNgos;
    }, err => {
      alert(err.error.message)
    })
  }

  onNavigate(websiteName): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.navigate(['/ngo', websiteName]);
  }

}
