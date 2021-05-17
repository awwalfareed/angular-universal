import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Store, select } from '@ngrx/store';
import { GetNgoCategories, NgoSignupFormOne } from '@stateManagement/actions/ngo.action';
import * as fromNgo from '@stateManagement/reducers/ngo.reducer';
import { Observable } from 'rxjs';
import { NgoCategories } from '@common/models/Categories';
import { NgoService } from '@common/services/ngo.service';
import { SettingService } from '@common/services/setting.service';
import { AppCommonUtility } from '@common/utils/app-common-utility'
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component implements OnInit { 
  @ViewChild("steponeForm") steponeForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  model: any = {};
  ngoCategory: any[];
  allCategories: any[];
  filteredSubcategoriesMultiple: any[];
  filteredFacilitiesMultiple: any[];
  allFacilitiesData: any;
  currentUserData: any;
  ngoFacilities: any[];
  ngoData: any;
  uploadedFiles: any[]=[];
  getuploadedFiles: any;
  getsubdata: any[] = [];
  getfacilitydata: any[] = [];
  isLoading: boolean = false;
  ngoLogoUrl: any;
  ngoLogoUrlName: any=null;
  allSteps: any;
  selectItemList: any;
  selectFacility: any[];
  file: any[] = [];
  display = 'none';
  ulpoadedFiles: any = [];
  imgId: any = 0;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  currentProcessingImg: any = 0;
  displayCroppedImage: boolean;
  subCategoryVal: boolean = false;
  constructor(
    private store: Store,
    private ngoService: NgoService,
    private settingService: SettingService,
    private router: Router,) { 
    // get localstorage data
    if (JSON.stringify(localStorage.getItem('ngo')) != null) {
      this.allSteps = JSON.parse(localStorage.getItem('ngo'));
    }
    // get current user
    if (JSON.parse(this.settingService.storageType.getItem('currentUser')) != null) {
      this.currentUserData = JSON.parse(this.settingService.storageType.getItem('currentUser'));
    } else if (JSON.parse(this.settingService.storageType.getItem('currentUser')) == null) {
      this.currentUserData = JSON.parse(localStorage.getItem('currentUser'));
    }
  }
 
  ngOnInit(): void {
    this.getCat();
    this.getAllStepsFromLocalstorage();
    this.ngoData = this.currentUserData.currentUser;
    this.store.dispatch(new GetNgoCategories());
  }
  changeFacilities(e) {
    this.selectFacility = e.value;
  }
  getAllStepsFromLocalstorage() {
    if ((JSON.stringify(this.allSteps.stepOne)) != null) {
      this.model = this.allSteps.stepOne;
      this.selectItemList = this.allSteps.stepOne.category;
      this.imgId = this.imgId + 1;
      this.ulpoadedFiles.push({ imgId: this.imgId, imgBase64: this.allSteps.stepOne.image });
      this.ngoLogoUrl = this.allSteps.stepOne.image;
      this.croppedImage = this.allSteps.stepOne.image;
      this.ngoLogoUrlName = this.allSteps.stepOne.imageName;
    }
  }
  // get all categories
  getCat() {
    const getCategory = this.store.pipe(select(fromNgo.getData)) as Observable<NgoCategories[]>
    getCategory.subscribe(data => {
      this.allCategories = data;
      this.ngoCategory = AppCommonUtility.createDropdownwithObjKey(data, "name","name");
    });
  }
  // change category
  changeCategory(e) {
    this.model.subCategories = null;
    this.ngoService.setCurrentNgoData(e.value);
    this.subCategoryVal = true;
  }
  // Sub Categories
  filterSubcategoryMultiple(event) {
    this.ngoService.getCurrentNgoData().subscribe(data => {
      let getsubcat = this.allCategories;
      for (let i = 0; i < getsubcat.length; i++) {
        if (data[0] == getsubcat[i].name) {
          this.getsubdata.length = 0;
          this.getsubdata.push(getsubcat[i].subCategories);
        }
      }
    })
    let query = event.query;
    this.filteredSubcategoriesMultiple = this.filterSubcategory(query, this.getsubdata[0]);  
  } 
  filterSubcategory(query, subCategories: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < subCategories.length; i++) {
      let subCat = subCategories[i];
      if (subCat.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(subCat);
      }
    }
    return filtered;
  }
  // Facilities
  filterFacilitiesMultiple(e) {
    this.getfacilitydata.length = null;
    this.ngoService.getAllNgoFacilities().subscribe(list => {
      let data = list;
      this.allFacilitiesData = data[0].names;
      for (let i = 0; i < this.allFacilitiesData.length; i++){
        this.getfacilitydata.push(this.allFacilitiesData[i])
      }
      let query = e.query;
      this.filteredFacilitiesMultiple = this.filterfacilities(query, this.getfacilitydata); 
    })
  }
  filterfacilities(query, facility: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < facility.length; i++) {
      let fac = facility[i];
      if (fac.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(fac);
      }
    }
    return filtered;
  }
  //save step one in localstorage
  submitStepOne({ value, valid }: { value: any, valid: boolean }) {
    if (valid == true) {
      this.isLoading = true;
      this.model.category = this.selectItemList;
      this.model.image = this.ngoLogoUrl
      this.model.imageName = this.ngoLogoUrlName
      this.store.dispatch(new NgoSignupFormOne(this.model));
      this.router.navigate(['/signupform/step2'])
    }
  }

  // ====Upload Logo Functionality ======//
  onNgoLogoUpload(event) {
    this.ulpoadedFiles.length = 0;
    let img = event.files[0];
    this.ngoLogoUrlName = img.name;
    for (let file of event.files) {
      this.imageProcess(event, file);
    } 
  }
  imageProcess(event: any, file: any) {
    //Setting images in our required format
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.imgId = this.imgId + 1;
      this.ulpoadedFiles.push({ imgId: this.imgId, imgBase64: reader.result, imgFile: file });
      this.cropImage(this.imgId);
    };
  }
  //get a Image using Image Id to crop
  //cropping process done here 
  cropImage(imgId) {
    this.currentProcessingImg = imgId;
    var imgObj = this.ulpoadedFiles.find(x => x.imgId === imgId);
    var event = {
      target: {
        files: [imgObj.imgFile]
      }
    };
    this.imageChangedEvent = event;
    this.openModal();
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.ngoLogoUrl = event.base64;
  }
  //Save Cropped Image locally
  SaveCropedImage() {
    var imgObj = this.ulpoadedFiles.find(x => x.imgId === this.currentProcessingImg);
    imgObj.imgBase64 = this.croppedImage;
    this.onCloseHandled();
  }
  onCloseHandled() {
    this.displayCroppedImage = true;
    this.imageChangedEvent = null;
    this.display = 'none';
  }
  openModal() {
    this.display = 'block';
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

}