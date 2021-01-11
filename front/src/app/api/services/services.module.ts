import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GlobalEmitterService } from "./global-emitter.service";

@NgModule({
  imports: [CommonModule],
  providers: [GlobalEmitterService],
})
export class ServicesModule {}
