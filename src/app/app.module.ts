import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxOpenmrsHttpclientServiceModule } from "projects/ngx-openmrs-httpclient-service/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxOpenmrsHttpclientServiceModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
