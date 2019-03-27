import { SignupPage } from './../pages/signup/signup';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { environment } from './environement/environement';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthserviceProvider } from '../providers/authservice/authservice';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import { Http , HttpModule } from '@angular/http';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RegisterPage } from '../pages/register/register';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
    NgxErrorsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Device,
    AuthserviceProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {}
