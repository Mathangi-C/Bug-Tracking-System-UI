import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { BugDetailsComponent } from './bug-details/bug-details.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { UpdateBugComponent } from './update-bug/update-bug.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBugComponent,
    BugDetailsComponent,
    BugListComponent,
    UpdateBugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
