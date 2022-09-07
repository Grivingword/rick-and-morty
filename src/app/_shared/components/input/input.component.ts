import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CAT_DATA_TYPE } from '../../../_core/_constants/CatDataType';

@Component({

  selector: 'app-input',

  template: `
    <div *ngIf="visualizerForm; else IsEditForm">
        <input [placeholder]="field.tooltip" [type]="field.inputType" [readonly]="true" pInputText>
    </div>

    <ng-template #IsEditForm>
      <div [formGroup]="group" class="w-100 mb-5 lg:mb-0 pad-item">
          <span class="p-float-label">
          <input [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType" pInputText>
          <label>{{field.label}}</label>
          </span>

        <ng-container *ngFor="let validation of field.validations;">
          <span *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</span>
        </ng-container>

      </div>

    </ng-template>
  `,

  styleUrls: ['../dynamic-designer-field.components.scss']

})

export class InputComponent implements OnInit {
  field: any;
  group: FormGroup;
  visualizerForm: boolean;
  constructor() {
  }

  ngOnInit() {
    this.visualizerForm = this.group === undefined;
  }

}
