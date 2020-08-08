import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { MaterialModule } from './material-module';

@NgModule({
  imports: [MaterialModule],
  declarations: [
  ],
  exports: [
    MaterialModule
  ],
  providers: [MenuItems]
})
export class SharedModule {}
