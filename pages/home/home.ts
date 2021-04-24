import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ['home.css']
})
export class HomePage {
  original_price: number;
  discounted_price:number;
  percent_off: number;
  sales_tax: number;
  finalprice: number;
  savings: number;
  tax:number; 

  constructor(public navCtrl: NavController) {}

  calculatePERCENTOFF() {
    this.discounted_price = this.original_price * (1-this.percent_off/100);
    this.tax = this.discounted_price * this.sales_tax/100;
    this.finalprice = this.discounted_price + this.tax;
    this.savings = (this.original_price - this.finalprice) + this.original_price * this.sales_tax/100;

  }
}
