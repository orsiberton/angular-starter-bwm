import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  private _rentals: Array<Rental> = [];

  constructor(private rentalService: RentalService) {
  }

  ngOnInit() {
    const rentalObservable = this.rentalService.getRentals();

    rentalObservable.subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;
      },
      (err) => {

      },
      () => {

      });
  }

  public get rentals(): Array<Rental> {
    return this._rentals;
  }
  public set rentals(value: Array<Rental>) {
    this._rentals = value;
  }

}
