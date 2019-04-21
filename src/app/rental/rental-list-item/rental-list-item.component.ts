import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bwm-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {

  private _currentRental: any;

  constructor() { }

  ngOnInit() {
  }

  get currentRental() {
    return this._currentRental;
  }

  @Input()
  set currentRental(rental: any) {
    this._currentRental = rental;
  }

}
