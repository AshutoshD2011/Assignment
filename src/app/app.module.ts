import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPersonComponent } from './new-person/new-person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AgePipe } from './age.pipe';
import { EditComponent } from './edit/edit.component';
import { CardViewComponent } from './card-view/card-view.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewPersonComponent,
    PersonListComponent,
    NoPageFoundComponent,
    AgePipe,
    EditComponent,
    CardViewComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
