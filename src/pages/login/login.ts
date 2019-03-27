import { SignupPage } from './../signup/signup';
import { AuthserviceProvider } from './../../providers/authservice/authservice';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
	loginError: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth,private Platform:Platform,private auth:AuthserviceProvider,
		private fb: FormBuilder) { this.loginForm = fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
      .then(
        () => this.navCtrl.setRoot(HomePage),
        error => this.loginError = error.message
      );
  }

    signup(){
   this.navCtrl.push(SignupPage);
   }

  loginWithGoogle() {
  this.auth.signInWithGoogle()
    .then(
      () => this.navCtrl.setRoot(HomePage),
      error => console.log(error.message)
    );
  }

}
