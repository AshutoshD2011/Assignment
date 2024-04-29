import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { NewPersonComponent } from './new-person/new-person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { EditComponent } from './edit/edit.component';
import { CardViewComponent } from './card-view/card-view.component';

const routes: Routes = [
  {path:'',component:NewPersonComponent},
  {path:'add-person',component:NewPersonComponent},
  {path:'person-list',component:PersonListComponent},
  {path:'edit-person/:id',component:EditComponent},
  {path:'card-view',component:CardViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
