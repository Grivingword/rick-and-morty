import { Injectable } from '@angular/core';
import { CAT_DATA_TYPE } from '../../_core/_constants/CatDataType';

@Injectable({
    providedIn: 'root'
})
export class DynamicFormDesigner {

    static buildForm(type, field) {
        switch (type.toLowerCase()) {
            case CAT_DATA_TYPE.STRING:
                return DynamicFormDesigner.stringField(field);
            case CAT_DATA_TYPE.TEXT:
                return DynamicFormDesigner.textField(field);
            case CAT_DATA_TYPE.DATE_TIME:
                return DynamicFormDesigner.dateTimeField(field);
            case CAT_DATA_TYPE.BOOLEAN:
                return DynamicFormDesigner.booleanField(field);
            case CAT_DATA_TYPE.INTEGER:
                return DynamicFormDesigner.numberField(field);
            case CAT_DATA_TYPE.SECTION:
                return DynamicFormDesigner.sectionField(field);
            default:
                break;
        }
    }


    private static sectionField(field: any) {
        return {
            type: CAT_DATA_TYPE.SECTION,
            name: CAT_DATA_TYPE.SECTION,
            field_name_text: field.field_name_text,
            tooltip: field.field_name_text,
            system_field: false,
            dropped: true
        };
    }

    private static stringField(field: any) {
        return {
            type: 'input',
            name: field.name,
            field_name_text: field.field_name_text,
            tooltip: field?.field_name_text,
            required: field.required,
            max_length: field.max_length,
            value: field.value,
            system_field: false,
            dropped: true
        };
    }

    private static numberField(field: any) {
        return {
            type: 'input',
            name: field.name,
            field_name_text: field.field_name_text,
            tooltip: field?.field_name_text,
            required: field.required,
            max_length: field.max_length,
            value: field.value,
            system_field: false,
            dropped: true
        };
    }

    private static textField(field: any) {
        return {
            type: 'textarea',
            name: field.name,
            field_name_text: field.field_name_text,
            tooltip: field?.field_name_text,
            required: field.required,
            max_length: field.max_length,
            value: field.value,
            system_field: false,
            dropped: true
        };
    }

    private static dateTimeField(field: any) {
        return {
            type: 'date',
            name: field.name,
            field_name_text: field.field_name_text,
            tooltip: field?.field_name_text,
            required: field.required,
            max_length: field.max_length,
            value: field.value,
            system_field: false,
            dropped: true
        };
    }

    private static booleanField(field: any) {
        return {
            type: 'checkbox',
            name: field.name,
            field_name_text: field.field_name_text,
            tooltip: field?.field_name_text,
            required: field.required,
            max_length: field.max_length,
            value: field.value,
            system_field: false,
            dropped: true
        };
    }
}
