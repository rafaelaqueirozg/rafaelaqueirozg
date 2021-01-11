import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '../http';
import { AuthenticationGuard } from './guards';
import { AuthenticationService } from './services';

@NgModule({
  imports: [CommonModule, HttpModule],
  providers: [AuthenticationService, AuthenticationGuard],
  declarations: [],
  exports: [],
})
export class AuthenticationModule {}
