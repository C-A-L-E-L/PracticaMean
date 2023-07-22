import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';

//
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GastoService } from './services/gasto.service';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GastoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
