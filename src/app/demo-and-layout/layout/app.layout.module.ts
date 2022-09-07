import { NgModule } from '@angular/core';
import { AppMenuitemComponent } from './menu-item/app.menuitem.component';
import { AppTopBarComponent } from './topbar/app.topbar.component';
import { AppConfigModule } from './config/config.module';
import { AppSidebarComponent } from "./sidebar/app.sidebar.component";
import { AppLayoutComponent } from "./app.layout.component";
import { CommonModule } from "@angular/common";
import { SharedNgModule } from "../../shared-ng.module";

@NgModule({
  declarations: [
    AppMenuitemComponent,
    AppTopBarComponent,
    AppSidebarComponent,
    AppLayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedNgModule,
    AppConfigModule
  ],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule {
}
