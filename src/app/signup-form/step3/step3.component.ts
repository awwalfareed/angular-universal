import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgoSignupFormThree } from '@stateManagement/actions/ngo.action';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { response } from 'express';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  @ViewChild('ngoStepThreeForm') ngoStepThreeForm: any;
  model: any = {};
  founderBio: string;
  founderName;
  uploadedFiles: any[] = [];
  founderImg: any;
  isLoading: boolean = false;
  founderImgName: any = null;
  allSteps: any;
  file: any[] = [];
  display = 'none';
  ulpoadedFiles: any = [];
  imgId: any = 0;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  currentProcessingImg: any = 0;
  maxWords: boolean = false;

  constructor(
    private router: Router,
    private store: Store,
  ) {
    // get localstorage data
    if (JSON.stringify(localStorage.getItem('ngo')) != null) {
      this.allSteps = JSON.parse(localStorage.getItem('ngo'));
    }
    
  }

  ngOnInit(): void {
    this.getAllStepsFromLocalstorage(); 
     // get Current NGO Details
     if(localStorage.getItem('cp')){
      let response = atob(localStorage.getItem('cp'));
      this.model.founderName = response
    }
  }

  getAllStepsFromLocalstorage() {
    if ((JSON.stringify(this.allSteps.stepThree)) != null) {
      this.model = this.allSteps.stepThree;
      this.founderImg = this.allSteps.stepThree.founderImg;
      this.croppedImage = this.allSteps.stepThree.founderImg;
      this.founderImgName = this.allSteps.stepThree.founderImgName;
      this.imgId = this.imgId + 1;
      this.ulpoadedFiles.push({ imgId: this.imgId, imgBase64: this.allSteps.stepThree.founderImg });
    }
  }
  submitStepThird({ value, valid }: { value: any, valid: boolean }) {
    if (valid == true) {
        this.isLoading = true;
        this.model.founderImg = this.founderImg;
        this.model.founderImgName = this.founderImgName;
        this.store.dispatch(new NgoSignupFormThree(this.model));
        this.router.navigate(['/signupform/step4'])
    }
  }

  // textRange(event): void {
  //   if(event.textValue.length > 500){
  //     this.maxWords = true;
  //   }else if(event.textValue.length <= 500){
  //     this.maxWords = false;
  //   }
  // }
  countWords(event) {
    let count =  event.textValue.split(' ').length;
    if (count > 500 || count < 10) {
      this.maxWords = true;
    }else{
      this.maxWords = false;
    }
 }
  //====Upload Founder Image Functionality =====//
  onFounderImgUpload(event) {
    this.ulpoadedFiles.length = 0;
    let img = event.files[0];
    this.founderImgName = img.name;
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
    this.founderImg = event.base64;
  }
  //Save Cropped Image locally
  SaveCropedImage() {
    var imgObj = this.ulpoadedFiles.find(x => x.imgId === this.currentProcessingImg);
    imgObj.imgBase64 = this.croppedImage;
    this.onCloseHandled();
  }
  onCloseHandled() {
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



