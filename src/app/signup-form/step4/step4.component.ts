import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { NgoSignupFormFour } from '@stateManagement/actions/ngo.action';
import { Router } from '@angular/router';
import * as fromNgo from '@stateManagement/reducers/ngo.reducer';
import { Observable } from 'rxjs';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { NgoService } from '@common/services/ngo.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  @ViewChild('ngoStepFour') ngoStepFour: any;
  displayBasic: boolean;
  model: any = {};
  founderBio: string;
  uploadedFiles: any[] = [];
  coverImage: any;
  coverImageName: any;
  isLoading: boolean = false;
  allSteps: any;
  stepOneData: any;
  stepTwoData: any;
  stepThreeData: any;
  founderImgFile: File;
  ngoLogoImgFile: File;
  respData: any;
  display = 'none';
  ulpoadedFiles: any = [];
  imgId: any = 0;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  currentProcessingImg: any = 0;
  maxWords: boolean = false;
  fourthStep: any;

  constructor(
    private router: Router,
    private store: Store,
    private ngoService: NgoService
  ) { }
  ngOnInit(): void {
    const allData = JSON.parse(localStorage.getItem('ngo'));
    this.allSteps = allData;
    this.imageFunction(this.allSteps);
    this.getFourthStepLocalStorageData()
  }
  getFourthStepLocalStorageData(){
    if (JSON.stringify(localStorage.getItem('fs')) != null) {
      let fourthStep = JSON.parse(localStorage.getItem('fs'));
      this.croppedImage = fourthStep.coverUrl;
      this.coverImageName = fourthStep.coverName;
      this.model.story = fourthStep.ngoStory;
      this.ulpoadedFiles.push({ imgId: this.imgId, imgBase64: fourthStep.coverUrl });
      this.stepFourDataURLtoFile(fourthStep.coverUrl, fourthStep.coverName);
    }
  }
  imageFunction(steps) {
    let steponedata = steps.stepOne;
    let stepthreedata = steps.stepThree;
    this.stepOneDataURLtoFile(steponedata.image, steponedata.imageName);
    this.stepThreeDataURLtoFile(stepthreedata.founderImg, stepthreedata.founderImgName);
  }

  // convert base64 url in image file object
  stepOneDataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    this.ngoLogoImgFile = new File([u8arr], filename, { type: mime });
    return new File([u8arr], filename, { type: mime });
  }
  stepThreeDataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    this.founderImgFile = new File([u8arr], filename, { type: mime });
    return new File([u8arr], filename, { type: mime });
  }
  stepFourDataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    this.coverImage = new File([u8arr], filename, { type: mime });
    return new File([u8arr], filename, { type: mime });
  }
  // submit all steps
  submitStepFour({ value, valid }: { value: any, valid: boolean }) {
    console.log(valid, value)
    if (valid == true) {
      this.isLoading = true;
      let steponedata = this.allSteps.stepOne;
      let steptwodata = this.allSteps.stepTwo;
      let stepthreedata = this.allSteps.stepThree;
      let subData = this.allSteps.stepOne.subCategories;
      let faci = this.allSteps.stepOne.facilities;
      const ngoData = new FormData();
      ngoData.append('images', this.ngoLogoImgFile, steponedata.imageName);
      ngoData.append('images', this.founderImgFile, stepthreedata.founderImgName);
      ngoData.append('images', this.coverImage, this.coverImageName);
      steponedata.category ? ngoData.append('category', steponedata.category) : null;
      for (let i = 0; i < subData.length; i++) {
        var array = subData[i];
        ngoData.append('subCategories', array.toString());
      }
      for (let i = 0; i < faci.length; i++) {
        var array = faci[i];
        ngoData.append('facilities', array.toString());
      }
      steptwodata.facebook ? ngoData.append('facebook', steptwodata.facebook) : null;
      steptwodata.instagram ? ngoData.append('instagram', steptwodata.instagram) : null;
      steptwodata.youtube ? ngoData.append('youtube', steptwodata.youtube) : null;
      steptwodata.publicMobile ? ngoData.append('publicMobile', steptwodata.publicMobile) : null;
      steptwodata.publicEmail ? ngoData.append('publicEmail', steptwodata.publicEmail) : null;
      steptwodata.foundingYear ? ngoData.append('foundingYear', steptwodata.foundingYear) : null;
      stepthreedata.founderBio ? ngoData.append('founderBio', stepthreedata.founderBio) : null;
      stepthreedata.founderName ? ngoData.append('founderName', stepthreedata.founderName) : null;
      value.story ? ngoData.append('story', value.story) : null;
      this.store.dispatch(new NgoSignupFormFour(ngoData));
      this.getFunctionResp();
      sessionStorage.setItem('activetab', 'story');
    }
  }
  getFunctionResp() {
    const data = this.store.pipe(select(fromNgo.getData)) as Observable<any[]>
    data.subscribe(data => {
      this.respData = data;
      if (this.respData.success) {
        this.isLoading = false;
        this.displayBasic = true;
        this.getNGOData();
      }
    });
  }
  getNGOData() {
    this.ngoService.getCurrentNgoDetails().subscribe(resp => {
      if (resp) {
        sessionStorage.setItem('cnd', btoa(JSON.stringify(resp)));
      }
    })
  }
  // goto dashboard page after submit all steps data
  storyPage() {
    this.router.navigate(['/ngobackend/dashboard']);
    localStorage.clear();
  }

  // textRange(event): void {
  //   if(event.textValue.length > 500){
  //     this.maxWords = true;
  //   }else if(event.textValue.length <= 500){
  //     this.maxWords = false;
  //   }
  // }
  countWords(event) {
    let count = event.textValue.split(' ').length;
    if (count > 500 || count < 10) {
      this.maxWords = true;
    } else {
      this.maxWords = false;
    }
  }
  // =====Upload Cover Image Functionality ===== //
  onCoverImgUpload(event) {
    this.ulpoadedFiles.length = 0;
    let img = event.files[0];
    this.coverImageName = img.name;
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
  }
  //Save Cropped Image locally
  SaveCropedImage() {
    var imgObj = this.ulpoadedFiles.find(x => x.imgId === this.currentProcessingImg);
    imgObj.imgBase64 = this.croppedImage;
    this.threeImageDataURLtoFile(imgObj.imgBase64, this.coverImageName);
    this.onCloseHandled();
  }
  // convert base64 url in image file object
  threeImageDataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    this.coverImage = new File([u8arr], filename, { type: mime });
    return new File([u8arr], filename, { type: mime });
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
 goBack(){
   let data={
     coverName:this.coverImageName,
     coverUrl:this.croppedImage,
     ngoStory:this.model.story
   }
   localStorage.setItem('fs',JSON.stringify(data));
 }
}
