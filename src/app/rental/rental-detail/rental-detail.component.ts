import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  private _rental: Rental;

  constructor(private route: ActivatedRoute, private rentalService: RentalService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.populateRental(params['rentalId']));
  }

  private populateRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe((rental: Rental) => {
      this.rental = rental;
    });
  }

  public get rental(): Rental {
    return this._rental;
  }
  public set rental(value: Rental) {
    this._rental = value;
  }
}
