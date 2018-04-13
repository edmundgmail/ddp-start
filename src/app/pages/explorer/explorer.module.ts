import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import {ExplorerComponent} from "./explorer.component";


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ExplorerComponent,
  ],
})
export class ExplorerModule{ }
