import { AuthserviceProvider } from './../providers/authservice/authservice';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'Firebase';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NgxErrorsModule } from '@ultimate/ngxerrors';


const config = {
  apiKey: "AIzaSyB_5JncyIs1H-xrE_KtwLBz9l5lkxLAE8Y",
  authDomain: "doctor-84029.firebaseapp.com",
  databaseURL: "https://doctor-84029.firebaseio.com",
  projectId: "doctor-84029",
  storageBucket: "doctor-84029.appspot.com"
   

};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private auth:AuthserviceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    // firebase.initializeApp(config);
  }
}
