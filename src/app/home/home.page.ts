import { Component } from '@angular/core';
import { sanitizeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: string = "Romeu";

  humor = "sad";
  checked_humor = false;
  cores = ["primary", "danger", "Success", "Warning"];
  idx = 0;

  constructor() { }

  trocarCor(): void {
    console.log("Chamou TrocarCor")
    if (this.idx >= this.cores.length) {
      this.idx = 0;
    }
      this.cor = this.cores[this.idx];
      this.idx ++;
    }
    cor = "primary";
  
  mudarHumor(): void {
    console.log('Chamou mudarHumor!');
    this.checked_humor =  !this.checked_humor;
    if(this.checked_humor == true){
      this.humor = "happy";
    } else{
      this.humor = "sad"
    }
  }



}