import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotoComponent } from './foto/foto.component';
import { ChosenDogsComponent } from './chosen-dogs/chosen-dogs.component';
import { LikedDogsService } from './liked-dogs.service';


@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    ChosenDogsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [LikedDogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
