import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxOpenmrsHttpclientServiceComponent } from "./ngx-openmrs-httpclient-service.component";

@NgModule({
  declarations: [NgxOpenmrsHttpclientServiceComponent],
  imports: [HttpClientModule],
  exports: [NgxOpenmrsHttpclientServiceComponent]
})
export class NgxOpenmrsHttpclientServiceModule {}
