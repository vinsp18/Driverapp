import { HomePage } from './../home/home';
import { Component,KeyValueChanges } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  name;
  phnnumber;
  dln;
  vehn;
  item : Observable<any[]>
itemRef:AngularFireList<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public db : AngularFireDatabase) {
    this.itemRef=db.list('Driverdetails/');
    this.item=this.itemRef.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  save(name:string,phnnum:number,dln:string,vehn:string)
  {
  this.itemRef.push({name:name,phnnumber:phnnum,dln:dln,vehn:vehn});
  this.navCtrl.push(HomePage);
  } 
  gf(){
    this.name="";
    this.phnnumber="";
    this.dln="";
    this.vehn="";
  }
    
}
