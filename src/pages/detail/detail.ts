import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  details:any=0; // ตั้งค่าตัวแปร details ชนิด any ที่ต้อง set ค่า 0 เพื่อเวลาเปิดหน้านี้โดยที่ไม่ได้ส่งค่ามาจะได้มีค่า default

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.details=navParams.get('data_detail') //นำข้อมูลตัวแปร data_detail ที่ส่งเข้ามาไว้ในตัวแปร details
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
