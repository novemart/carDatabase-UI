import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnersListComponent } from './components/owners-list/owners-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CardatabaseService } from './services/cardatabase.service';
import { OwnerFormComponent } from './components/owner-form/owner-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OwnersListComponent,
    OwnerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CardatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
