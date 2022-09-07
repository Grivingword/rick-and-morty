import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({

  selector: 'app-date',

  template: `
    <div *ngIf="visualizerForm; else IsEditForm">
      <p-calendar [placeholder]="field.label" [showIcon]="true" inputId="icon" [disabled]="true"></p-calendar>
    </div>

    <ng-template #IsEditForm>
      <div [formGroup]="group" class="w-100 mb-2 lg:mb-0 pad-item">
        
        <span class="p-float-label">
          <p-calendar [formControlName]="field.name" [placeholder]="field.label" [showIcon]="true"
                      inputId="icon"></p-calendar>
          <label>{{field.label}}</label>
          </span>

        <ng-container *ngFor="let validation of field.validations;">
          <div *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</div>
        </ng-container>
        
      </div>
    </ng-template>
  `,

  styleUrls: ['../dynamic-designer-field.components.scss']

})

export class DateComponent implements OnInit {
  field: any;
  group: FormGroup;
  visualizerForm: boolean;

  constructor() {
  }

  ngOnInit() {
    this.visualizerForm = this.group == undefined;
  }

}
