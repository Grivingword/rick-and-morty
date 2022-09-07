import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-input',

  template: `
      <div class="text-900 font-bold text-3xl mb-1 text-start">{{field.field_name_text}}</div>
  `,

  styleUrls: ['../dynamic-designer-field.components.scss']

})

export class SectionComponent implements OnInit {

    field: any;

    constructor() {}

    ngOnInit() {

    }

}
