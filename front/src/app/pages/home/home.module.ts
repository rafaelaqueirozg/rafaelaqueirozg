import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  NzButtonModule,
  NzIconModule,
  NzLayoutModule,
  NzMenuModule,
} from 'ng-zorro-antd';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
  ],
})
export class HomeModule {}
