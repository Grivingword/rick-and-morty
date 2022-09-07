import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',

  template: `
    <div  *ngIf="visualizerForm; else IsEditForm">
        <textarea [placeholder]="field.tooltip" [readonly]="true" [autoResize]="true" pInputTextarea></textarea>
    </div>

    <ng-template #IsEditForm>
      <div [formGroup]="group" class="w-100 mb-2 lg:mb-0 pad-item">
        
        <span class="p-float-label">
         <textarea [formControlName]="field.name" [placeholder]="field.label" [autoResize]="true"
                   pInputTextarea></textarea>
          <label>{{field.label}}</label>
          </span>
        
            <ng-container *ngFor="let validation of field.validations;">
              <span *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</span>
            </ng-container>
        
      </div>
    </ng-template>
  `
  ,

  styleUrls: ['../dynamic-designer-field.components.scss']
})
export class TextareaComponent implements OnInit {
  field: any;
  group: FormGroup;
  visualizerForm: boolean;

  constructor() {
  }

  ngOnInit() {
    this.visualizerForm = this.group === undefined;
  }

}
