import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';

import { ConfirmComponent } from './confirm dialog/confirm.component';

@NgModule({
    declarations: [HeaderComponent,
                   ConfirmComponent],
    exports: [HeaderComponent,
              ConfirmComponent]
})
export class SharedModule { }