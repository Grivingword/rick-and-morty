import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfigComponent } from './app.config.component';
import { SharedNgModule } from "../../../shared-ng.module";

@NgModule({
    imports: [
        CommonModule,
        SharedNgModule
    ],
    declarations: [
        AppConfigComponent
    ],
    exports: [
        AppConfigComponent
    ]
})
export class AppConfigModule { }
