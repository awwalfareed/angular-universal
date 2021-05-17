import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  @Input() open: boolean;
  @Input() imageUrl: any;

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
