import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { NovedadesComponent } from './novedades/novedades.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendasComponent,
    NovedadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
