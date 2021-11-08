import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [HeaderComponent, DetailsComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [HeaderComponent, DetailsComponent],
})
export class ComponentsModule {}
