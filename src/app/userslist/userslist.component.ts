import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { URLS } from "src/models/url";

@Component({
  selector: "app-userslist",
  templateUrl: "./userslist.component.html",
  styleUrls: ["./userslist.component.scss"]
})
export class UserslistComponent implements OnInit {
  allUserData: any = [];
  gitUserData: any = [];
  loadingData: boolean = true;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    const url = URLS.users;
    this.appService.getData(url).subscribe(
      (res: any) => {
        this.loadingData = false;
        this.gitUserData = res;
        this.allUserData = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  onSearch(searchKey) {
    this.allUserData = this.gitUserData.filter(el => {
      return el.login.toLowerCase().includes(searchKey.toLowerCase());
    });
  }
}
