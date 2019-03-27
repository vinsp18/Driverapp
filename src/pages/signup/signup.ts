import { AuthserviceProvider } from './../../providers/authservice/authservice';
import { HomePage } from './../home/home';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated'; 
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
 
  signupError: string;
  form: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public db : AngularFireDatabase,fb:FormBuilder,private auth: AuthserviceProvider) {

    this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup()
  {
 
  let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.signupError = error.message
		);
  
  } 
  
 
}
