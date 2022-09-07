import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormBuilder } from '../DynamicFormBuilder';
import { CAT_DATA_TYPE } from '../../../_core/_constants/CatDataType';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  dataForm: any;
  form: FormGroup;
  fields: any;

  constructor(
      private fb: FormBuilder,
      private cdref: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
  }

  createControls(dataForm) {
    this.dataForm = dataForm;
    this.fields = DynamicFormBuilder.flatDeep(dataForm, Infinity);
    const controls = DynamicFormBuilder.buildFormArch([], this.fields);
    this.form = this.addControls(controls);
    this.cdref.detectChanges();
  }

  returnFormField(field) {
    return DynamicFormBuilder.returnFormField(field);
  }

  get value() {
    return this.form.value;
  }

  isValid(): boolean {
    if (!this.form) {
      return false;
    }
    return this.form.valid;
  }

  addControls(fields: any[] = null) {
    const group = this.fb.group({});

    this.fields = fields;

    fields.forEach(field => {

      if (field.type === 'button') {
        return;
      }

      const fieldValue = (field.type === 'date') ?
          ((field.value === null || field.value === undefined) || field.value === '') ?
              '' : new Date(field.value).toISOString() : field.value;

      const control = this.fb.control(
          fieldValue, this.bindValidations(field.validations || [])
      );

      group.addControl(field.name, control);

      if (field.readonly !== undefined && field.readonly === true) {
        control.disable();
      }
    });

    return group;
  }

  bindValidations(validations: any) {

    if (validations.length > 0) {

      const validList = [];

      validations.forEach(valid => {

        validList.push(valid.validator);

      });

      return Validators.compose(validList);

    }

    return null;

  }

  getFieldsAndValues() {
    const self = this;
    const fields = [];
    this.fields.forEach(function (field, index) {

      const value = self.form.get(field.name).value;

      if (field.type === 'textarea' && ((value === null || value === undefined) || value === '')) {
        self.form.get(field.name).setValue(' ');
      }

      const data = {
        id: field.id,
        value: value
      };

      fields.push(data);
    });

    return fields;
  }

  getNameAndValues() {
    const self = this;
    const fields = {};
    this.fields.forEach(function (field, index) {

      const value = self.form.get(field.name).value;

      if (field.type === 'textarea' && ((value === null || value === undefined) || value === '')) {
        self.form.get(field.name).setValue(' ');
      }

      fields[field.name] = value;

    });

    return fields;
  }

  empty() {
    this.form = this.fb.group({});
    this.fields = [];
  }

  reset() {
    if (this.form !== undefined) {
      this.form.reset();
    }
  }

  disableForm(): void {
    this.form.disable();
  }

  enableForm(): void {
    this.form.enable();
  }

  returnFormValues() {
    const ignores = [CAT_DATA_TYPE.SECTION];
    const data = JSON.parse(JSON.stringify(this.form.value));
    ignores.forEach(key => delete data[key]);
    return data;
  }

  calcWidth(item) {
    return 100 / item.length;
  }

}
