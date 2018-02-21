import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  option:BarcodeScannerOptions;
  data ={ };

  constructor(public navCtrl: NavController, private barcodeScanner:BarcodeScanner) {

  }

  scan(){
    this.option ={
      prompt:"Porfavor Scanea tu código"
    }
    this.barcodeScanner.scan(this.option).then((barcodeData) => {
// Success! Barcode data is here
      console.log("Esta bien abrio camara");
      console.log(barcodeData);

      this.data = barcodeData;

    }, (err) => {
// An error occurred
      console.log("Un error a Ocurrido");
    });
  }

}
