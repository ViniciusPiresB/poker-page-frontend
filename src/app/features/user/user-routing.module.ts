import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUserComponent} from "./list-user/list-user.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
