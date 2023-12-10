import { NgModule } from '@angular/core';

import { NavbarComponent } from '../app/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ],
})
export class SharedModule { }
