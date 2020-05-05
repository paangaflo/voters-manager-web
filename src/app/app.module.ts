import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataService } from "./data.service";
import { VoteListComponent } from './vote-list/vote-list.component';
import { VoteDetailComponent } from './vote-detail/vote-detail.component';
import { PastTrialsComponent } from './past-trials/past-trials.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoginSingupComponent } from './login-singup/login-singup.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteListComponent,
    VoteDetailComponent,
    PastTrialsComponent,
    HowItWorksComponent,
    LoginSingupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
