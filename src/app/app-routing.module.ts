import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerFormComponent } from './components/owner-form/owner-form.component';
import { OwnersListComponent } from './components/owners-list/owners-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'owners', pathMatch: 'full'},
  {path: 'owners', component: OwnersListComponent},
  {path: 'add', component: OwnerFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
