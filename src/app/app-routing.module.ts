import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserslistComponent } from "./userslist/userslist.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "", redirectTo: "userslist", pathMatch: "full" },
  { path: "userslist", component: UserslistComponent },
  { path: "user/:id", component: UserComponent },
  { path: "**", redirectTo: "userslist",pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
