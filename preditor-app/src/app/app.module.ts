import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParticipanteService } from './shared/services/participante.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AuthService } from './shared/services/auth.service';
import { RequestinterceptorService } from './shared/interceptors/requestinterceptor.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ParticipanteService,
    SQLite,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: RequestinterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
