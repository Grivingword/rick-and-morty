import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PaymentComponent } from './payment.component';
import { SeatComponent } from './seat.component';
import { PersonalComponent } from './personal.component';
import { ConfirmationComponent } from './confirmation.component';
import { MenusComponent } from './menus.component';
import { SharedNgModule } from "../../../../../shared-ng.module";

const routes: Routes = [
  {
    path: '', component: MenusComponent, children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: 'personal', component: PersonalComponent },
      { path: 'confirmation', component: ConfirmationComponent },
      { path: 'seat', component: SeatComponent },
      { path: 'payment', component: PaymentComponent }
    ]
  }
  ]

@NgModule({
  declarations: [
    MenusComponent,
    PaymentComponent,
    ConfirmationComponent,
    PersonalComponent,
    SeatComponent,

  ],
  imports: [
    SharedNgModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenusModule {
}

