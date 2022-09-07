import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DateComponent } from './date/date.component';
import { TextareaComponent } from './textarea/textarea.component';
import { InputComponent } from './input/input.component';
import { SectionComponent } from './section/section.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicDesignerFieldDirective } from './dynamic-designer-field.directive';
import { SharedNgModule } from '../../shared-ng.module';


@NgModule({
  declarations: [
    TextareaComponent,
    InputComponent,
    DateComponent,
    CheckboxComponent,
    SectionComponent,
    DynamicFormComponent,
    DynamicDesignerFieldDirective,
  ],
  imports: [
    CommonModule,
    SharedNgModule
  ],
  exports: [
    DynamicFormComponent,
    DynamicDesignerFieldDirective,
  ]
})
export class DynamicFormModule {
}
