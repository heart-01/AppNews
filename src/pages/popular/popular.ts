import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http'; //import เพื่อให้แอปเรียกใช้งานข้อมูลจากภายนอกเพจได้
import 'rxjs/add/operator/map'; //import เพื่อให้แอปเรียกใช้งานข้อมูลจากภายนอกเพจได้

import{ DetailPage } from '../detail/detail'; //import DetailPage เพื่อลิงก์ไปหน้าอื่น

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
      .map(res=>res.json()) //ได้ขอมูลแล้วมาเก็บไว้ในรูปแบบ json
      .subscribe(data=>{   
        this.popnews = data.data.children; //data ตัวแรกคือ subscribe data ตัวที่ 2 คือโครงสร้างข้อมูลที่ในJSON API ส่วน children จะเป็นโครงสร้างที่อยู่ใน data อีกทีเพื่อดึงข้อมูลมา และนำผลลัพธ์จาก get จะนำมาใส่ตัวแปร popnews
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }

  viewDetail(item){
    this.navCtrl.push(DetailPage,{data_detail:item}); //เปิดหน้า DetailPage แล้วส่ง data_detail ไปด้วย
  }

}
