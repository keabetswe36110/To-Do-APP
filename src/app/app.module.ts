import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AllComponent } from './all/all.component';
import { PendingComponent } from './pending/pending.component';
import { CompletedComponent } from './completed/completed.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { InProgressComponent } from './in-progress/in-progress.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    AllComponent,
    PendingComponent,
    CompletedComponent,
    AddToDoComponent,
    InProgressComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  // 
  bootstrap: [AppComponent]
})
export class AppModule { }
