import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../../../../_shared/components/dynamic-form/dynamic-form.component';
import { CAT_DATA_TYPE } from '../../../../_core/_constants/CatDataType';

@Component({
  selector: 'app-dynamic-form-preview',
  templateUrl: './dynamic-form-preview.component.html',
  styleUrls: ['./dynamic-form-preview.component.scss']
})
export class DynamicFormPreviewComponent implements OnInit {
  @ViewChild('staticFormComponent', {static: true}) staticForm: DynamicFormComponent;

  staticFormData = [
    [
      {
        type: CAT_DATA_TYPE.SECTION,
        name: CAT_DATA_TYPE.SECTION,
        field_name_text: CAT_DATA_TYPE.SECTION,
        system_field: true
      }
    ],
    [{
      field_name: 'i_string',
      field_name_text: 'Input - string',
      max_length: null,
      name: 'string',
      required: true,
      tooltip: 'Input - string',
      type: 'input',
      value: ' '
    },
      {
        field_name: 'i_integer',
        field_name_text: 'Input - integer',
        max_length: null,
        name: 'integer',
        required: true,
        tooltip: 'Input - integer',
        type: 'input',
        value: 0
      },
      {
        field_name: 'i_text',
        field_name_text: 'Input - text',
        max_length: null,
        name: 'text',
        required: true,
        tooltip: 'Input - text',
        type: 'input',
        value: ' '
      }],
    [{
      field_name: 't_text',
      field_name_text: 'textarea - text',
      max_length: null,
      name: 'text',
      required: true,
      tooltip: 'textarea - text',
      type: 'textarea',
      value: ' '
    },
    ],
    [
      {
        field_name: 'c_boolean',
        field_name_text: 'checkbox - boolean',
        name: 'boolean',
        required: true,
        tooltip: 'checkbox - boolean',
        type: 'checkbox',
        value: null
      }, {
      field_name: 'd_datetime',
      field_name_text: 'date - datetime',
      max_length: 0,
      name: 'datetime',
      required: true,
      tooltip: 'date - datetime',
      type: 'date',
      value: null
    }
    ]
  ];
  stringData = JSON.stringify(this.staticFormData)
  constructor() { }

  ngOnInit(): void {
    this.staticForm.createControls(this.staticFormData);
  }

  getFormValue() {
    const values = this.staticForm.returnFormValues();
    console.log(values);
  }

  disableForm() {
    this.staticForm.disableForm();
  }

  enableForm() {
    this.staticForm.enableForm();
  }

  resetForm(){
    this.staticForm.reset()
  }

}
