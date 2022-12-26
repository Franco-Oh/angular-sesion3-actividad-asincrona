import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyModule } from './body/body.module';
import { ListaComponent } from './body/lista/lista.component';
import { HeadModule } from './head/head.module';
import { TituloComponent } from './head/titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeadModule,
    BodyModule
  ],
  providers: [],
  bootstrap: [AppComponent, TituloComponent, ListaComponent]
})
export class AppModule { }
