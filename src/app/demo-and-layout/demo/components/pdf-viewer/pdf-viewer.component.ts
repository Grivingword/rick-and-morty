import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from "../../../../../environments/environment";

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {
  @ViewChild('pdfJsViewerComponent') pdfJsViewerComponent;

  pdfJsAssetsPath = environment.pdfJsAssetsPath;
  src = '/assets/pdfjs/demo/demo.pdf';

  constructor() { }

  ngOnInit(): void {
  }

}
