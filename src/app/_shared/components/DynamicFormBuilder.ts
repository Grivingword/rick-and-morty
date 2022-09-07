import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { CAT_DATA_TYPE } from '../../_core/_constants/CatDataType';


@Injectable({
    providedIn: 'root'
})
export class DynamicFormBuilder {

    static returnFormField(field) {
        switch (field.name.toLowerCase()) {
            case CAT_DATA_TYPE.STRING:
                return DynamicFormBuilder.stringField(field);
            case CAT_DATA_TYPE.TEXT:
                return DynamicFormBuilder.textField(field);
            case CAT_DATA_TYPE.DATE_TIME:
                return DynamicFormBuilder.dateTimeField(field);
            case CAT_DATA_TYPE.CATALOG:
                return DynamicFormBuilder.catalogField(field);
            case CAT_DATA_TYPE.BOOLEAN:
                return DynamicFormBuilder.booleanField(field);
            case CAT_DATA_TYPE.INTEGER:
                return DynamicFormBuilder.numberField(field);
            case CAT_DATA_TYPE.SECTION:
                return DynamicFormBuilder.sectionField(field);
            default:
                break;
        }
    }

    static buildFormArch(form, metadata) {
        for (const field of metadata) {
            const fieldType = field.name.toLowerCase();
            switch (fieldType) {
                case CAT_DATA_TYPE.STRING:
                    form.push(DynamicFormBuilder.stringField(field));
                    break;
                case CAT_DATA_TYPE.TEXT:
                    form.push(DynamicFormBuilder.textField(field));
                    break;
                case CAT_DATA_TYPE.DATE_TIME:
                    form.push(DynamicFormBuilder.dateTimeField(field));
                    break;
                case CAT_DATA_TYPE.CATALOG:
                    form.push(DynamicFormBuilder.catalogField(field));
                    break;
                case CAT_DATA_TYPE.BOOLEAN:
                    form.push(DynamicFormBuilder.booleanField(field));
                    break;
                case CAT_DATA_TYPE.INTEGER:
                    form.push(DynamicFormBuilder.numberField(field));
                    break;
                case CAT_DATA_TYPE.SECTION:
                    form.push(DynamicFormBuilder.sectionField(field));
                    break;
                default:
                    form.push();
                    break;
            }
        }
        return form;
    }

    private static sectionField(field: any) {
        return {
            type: CAT_DATA_TYPE.SECTION,
            name: CAT_DATA_TYPE.SECTION,
            field_name_text: field.field_name_text,
            system_field: field.system_field
        };
    }

    private static stringField(field: any) {
        const validations = [];

        if (field.required) {
            validations.push(
                {
                    name: 'required',
                    validator: Validators.required,
                    message: field.field_name_text + ' requerido'
                }
            );
        }

        if (field.max_length > 0) {
            validations.push({
                name: 'maxlength',
                validator: Validators.maxLength(field.max_length),
                message: field.field_name_text + ' requiere máximo ' + field.max_length + ' caracteres'
            });
        }

        if (field.min_length > 0) {
            validations.push({
                name: 'minlength',
                validator: Validators.minLength(field.min_length),
                message: field.field_name_text + ' requiere mínimo ' + field.min_length + ' caracteres'
            });
        }

        return {
            type: 'input',
            label: field.tooltip,
            inputType: 'text',
            name: field.field_name !== undefined ? field.field_name : field.field_name_text,
            value: field.value == null ? '' : field.value,
            validations: validations
        };
    }

    private static numberField(field: any) {
        const validations = [];

        if (field.required) {
            validations.push(
                {
                    name: 'required',
                    validator: Validators.required,
                    message: field.field_name_text + ' requerido'
                }
            );
        }

        if (field.max_length > 0) {
            validations.push({
                    name: 'maxlength',
                    validator: Validators.maxLength(field.max_length),
                    message: field.field_name_text + ' requiere máximo ' + field.max_length + ' caracteres'
                },
                {
                    name: 'maxlength',
                    validator: Validators.pattern('^[0-9]*$'),
                    message: 'El dato debe ser numérico'
                });
        }

        if (field.min_length > 0) {
            validations.push({
                name: 'minlength',
                validator: Validators.minLength(field.min_length),
                message: field.field_name_text + ' requiere mínimo ' + field.min_length + ' caracteres'
            }, {
                name: 'minlength',
                validator: Validators.pattern('^[0-9]*$'),
                message: 'El dato debe ser numérico'
            });
        }
        return {
            type: 'input',
            label: field.tooltip,
            inputType: 'number',
            name: field.field_name !== undefined ? field.field_name : field.field_name_text,
            value: field.value,
            validations: validations
        };
    }

    private static textField(field: any) {
        const validations = [];

        if (field.required) {
            validations.push(
                {
                    name: 'required',
                    validator: Validators.required,
                    message: field.field_name_text + ' requerido'
                }
            );
        }

        if (field.max_length > 0) {
            validations.push({
                name: 'maxlength',
                validator: Validators.maxLength(field.max_length),
                message: field.field_name_text + ' requiere maximo ' + field.max_length + ' caracteres'
            });
        }

        if (field.min_length > 0) {
            validations.push({
                name: 'minlength',
                validator: Validators.minLength(field.min_length),
                message: field.field_name_text + ' requiere mínimo ' + field.min_length + ' caracteres'
            });
        }

        return {
            type: 'textarea',
            label: field.tooltip,
            inputType: 'text',
            name: field.field_name !== undefined ? field.field_name : field.field_name_text,
            value: field.value == null ? '' : field.value,
            validations: validations
        };
    }

    private static dateTimeField(field: any) {
        const validations = [];

        if (field.required) {
            validations.push(
                {
                    name: 'required',
                    validator: Validators.required,
                    message: field.field_name_text + ' requerido'
                }
            );
        }


        return {

            type: 'date',
            label: field.tooltip,
            name: field.field_name !== undefined ? field.field_name : field.field_name_text,
            validations: validations,
            value: field.value == null ? new Date() : field.value,
        };
    }

    private static catalogField(field: any) {
        const validations = [];

        const value = parseInt(field.value, 10) > 0 ? parseInt(field.value, 10) : '';

        if (field.required) {
            validations.push(
                {
                    name: 'required',
                    validator: Validators.required,
                    message: field.field_name_text + ' requerido'
                }
            );
        }

        return {
            type: 'select',
            label: field.tooltip,
            name: field.field_name !== undefined ? field.field_name : field.field_name_text,
            options: field.catalogData,
            validations: validations,
            value: value
        };
    }

    private static booleanField(field: any) {
        const validations = [];

        if (field.required) {
            validations.push(
                {
                    name: 'required',
                    validator: Validators.required,
                    message: field.field_name_text + ' requerido'
                }
            );
        }

        return {
            type: 'checkbox',
            label: field.tooltip,
            name: field.field_name !== undefined ? field.field_name : field.field_name_text,
            validations: validations,
            value: field.value == null ? false : field.value == '1',
        };
    }

    static flatDeep(arr, d = 1) {
        return d > 0 ? arr?.reduce((acc, val) => acc.concat(Array.isArray(val) ? this.flatDeep(val, d - 1) : val), [])
            : arr.slice();
    }
}
