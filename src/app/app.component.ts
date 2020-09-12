import { Component, OnInit } from "@angular/core";
import { NgxOpenmrsHttpclientServiceService } from "projects/ngx-openmrs-httpclient-service/src/public-api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "openmrs-httpclient-service";

  constructor(private httpClient: NgxOpenmrsHttpclientServiceService) {}

  ngOnInit() {
    this.httpClient.get("3333");
  }
}
