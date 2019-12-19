import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { ActivatedRoute } from "@angular/router";
import { URLS } from "src/models/url";
import { AppService } from '../app.service';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  userData:any;
  constructor(private appService: AppService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.getUserData(res.get("id"));
    });
  }
  getUserData(id) {
    const url = URLS.users + "/" + id;
    this.appService.getData(url).subscribe(
      (res: any) => {
        this.userData = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
