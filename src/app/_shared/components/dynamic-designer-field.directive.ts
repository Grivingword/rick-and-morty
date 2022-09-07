import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { InputComponent } from './input/input.component';
import { DateComponent } from './date/date.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SectionComponent } from './section/section.component';
import { FormGroup } from '@angular/forms';

const componentMapper = {
    input: InputComponent,
    date: DateComponent,
    checkbox: CheckboxComponent,
    textarea: TextareaComponent,
    section: SectionComponent,
};

@Directive({
  selector: '[dynamicDesignerField]'
})
export class DynamicDesignerFieldDirective implements OnInit {
  @Input() field: any;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

}
