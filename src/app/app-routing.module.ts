import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugDetailsComponent } from './bug-details/bug-details.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { UpdateBugComponent } from './update-bug/update-bug.component';

const routes: Routes = [
  { path: '', redirectTo: 'bug', pathMatch: 'full' },
  { path: 'bug', component: BugListComponent },
  { path: 'add', component: CreateBugComponent },
  { path: 'update/:id', component: UpdateBugComponent },
  { path: 'details/:id', component: BugDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
