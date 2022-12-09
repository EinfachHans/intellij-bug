import { Component } from '@angular/core';
import { IVehicleValuation } from 'dependency';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public valuation: IVehicleValuation;

  constructor() {
  }

}
