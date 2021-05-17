import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  @Input() uploadFiles;
  // @Input() imgOne;
  // @Input() imgTwo;
  // @Input() imgThree;
  // @Input() imgFour?;
  @Input() bordered;
  @Output() imgUploader = new EventEmitter<any>();
  //@Output() makePrimary= new EventEmitter<any>();
  @Output() cropImg = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onImageUpload(event){
    this.imgUploader.emit(event);
  }

  // primary(event){
  //   console.log('Primary', event)
  //   this.makePrimary.emit(event);
  // }

  cropImage(val){
    this.cropImg.emit(val);
  }
}
