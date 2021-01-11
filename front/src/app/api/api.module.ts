import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication';
import { HttpModule } from './http';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [CommonModule, AuthenticationModule, HttpModule, ServicesModule],
  declarations: [],
  exports: [AuthenticationModule, HttpModule, ServicesModule],
})
export class ApiModule {}
