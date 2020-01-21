import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { AngularMaterialModule } from './core/angular-material.module';
import { CoreComponent } from './core/components/core.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './core/services/interceptor';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import {
  MqttModule,
  IMqttServiceOptions
} from 'ngx-mqtt';
import { TokenInterceptor } from './core/services/tokenInterceptor';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'ifcomputing.com',
  port: 9001,
  path: '/mqtt',
  username: 'fgodoy',
  password: 'Pipeaxe96!'
};

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
