import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({

  selector: 'app-checkbox',

  template: `
    <div *ngIf="visualizerForm; else IsEditForm">
      <label> {{field.tooltip}}: </label>
      <p [class.activate]="!checked"> No </p>
      <p-inputSwitch (change)="toggle($event)" [disabled]="true"></p-inputSwitch>
      <p [class.activate]="checked"> Si </p>
    </div>

    <ng-template #IsEditForm>

      <div [formGroup]="group" class="w-100 mb-2 lg:mb-0 checkbox pad-item">
        <div class="p-inputgroup">
          
          <span class="p-inputgroup-addon">{{field.label}}:</span>
          <span [class.activate]="!checked" class="p-inputgroup-addon">No</span>
          
          <p-inputSwitch [formControlName]="field.name" (onChange)="toggle($event)"></p-inputSwitch>
          
          <span [class.activate]="checked" class="p-inputgroup-addon">Si</span>
          
        </div>
      </div>
    </ng-template>
  `,

  styleUrls: ['../dynamic-designer-field.components.scss']

})

export class CheckboxComponent implements OnInit {
  checked = false;
  field: any;
  group: FormGroup;
  visualizerForm: boolean;

  constructor() {
  }

  ngOnInit() {
    this.visualizerForm = this.group === undefined;
  }

  toggle(e) {
    this.checked = e.checked;
  }

}
