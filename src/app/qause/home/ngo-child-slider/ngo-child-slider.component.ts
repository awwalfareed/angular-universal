import { Component, OnInit } from '@angular/core';
// import { QauseService } from '@common/services/qause.service';
import { DialogService, DynamicDialogRef, SelectItem } from 'primeng';
import { DonationComponent } from '../../commonComponents/paymentDialogue/donation/donation.component';
import { FailedDonationComponent } from '../../commonComponents/paymentDialogue/failed-donation/failed-donation.component';
import { ThanyouDonationComponent } from '../../commonComponents/paymentDialogue/thanyou-donation/thanyou-donation.component';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-ngo-child-slider',
  templateUrl: './ngo-child-slider.component.html',
  styleUrls: ['./ngo-child-slider.component.css'],
  providers: [DialogService]
})


export class NgoChildSliderComponent implements OnInit {
    childData: any;
    cities: City[];
    selectedCity2: City;
    selecteddropdown: string[] = [];
    selectedPhoneCode: any = 91;
    items: SelectItem[];
    item: any;
    ref: DynamicDialogRef;

  constructor(
    // public qauseService: QauseService,
    public dialogService: DialogService,
)   {
      this.cities = [
        {name: '1', code: 'NY'},
        {name: '2', code: 'RM'},
        {name: '3', code: 'LDN'},
        {name: '4', code: 'IST'},
        {name: '5', code: 'PRS'}
      ];
    }
  ngOnInit(): void {
    // this.qauseService.getHomeJSON().subscribe(resp=>{
    //   this.childData = resp.childSlider;
    // })
  }

    // modal
    displayModal: boolean;

    displayBasic: boolean;

    displayBasic2: boolean;

    displayMaximizable: boolean;

    displayPosition: boolean;

    position: string;


  showBasicDialog() {
    this.ref = this.dialogService.open(DonationComponent, {
      contentStyle: {"padding" : "0px" , "background": "#f5f9fb"},
      width: 'auto'
    });
  }

  showBasicDialog2() {
    this.ref = this.dialogService.open(FailedDonationComponent, {
      contentStyle: {"background": "#f1f2f4" , "padding" : "40px"},
      width: 'auto'
    });
  }
  showBasicDialog3() {
    this.ref = this.dialogService.open(ThanyouDonationComponent, {
      contentStyle: {"background": "#fff" , "padding" : "40px"},
      width: 'auto'
    });
  }

  showMaximizableDialog() {
      this.displayMaximizable = true;
  }

  showPositionDialog(position: string) {
      this.position = position;
      this.displayPosition = true;
  }

}
