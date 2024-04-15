import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {ListUserComponent} from "./list-user/list-user.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    ListUserComponent,
    HttpClientModule,
  ]
})
export class UserModule { }
