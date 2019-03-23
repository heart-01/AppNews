import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http'; //import เพื่อให้แอปเรียกใช้งานข้อมูลจากภายนอกเพจได้
import 'rxjs/add/operator/map'; //import เพื่อให้แอปเรียกใช้งานข้อมูลจากภายนอกเพจได้

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {

  popnews:any=0; // ประกาศตัวแปร popnews

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {   //เพิ่ม public http:Http เพื่อจะเรียกดูข้อมูลจากภายนอก
      this.http.get('https://www.reddit.com/r/popular/new.json?limit=20') //เรียกแสดงข้อมูลจาก url
      .map(res=>res.json()) 
      .subscribe(data=>{
        this.popnews = data.data.children; //ผลลัพจาก get จะนำมาใส่ตัวแปร popnews
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }

}
