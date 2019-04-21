import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {

    private _rentals: Rental[] = [
        new Rental('1', 'Central Apartment', 'New York', 'Times Square', 'apartment',
            'http://via.placeholder.com/350x250', 3, 'Very nice apartment', 34, false, '24/12/2017'),
        new Rental('2', 'Central Apartment 2', 'New York 2', 'Times Square 2', 'apartment',
            'http://via.placeholder.com/350x250', 3, 'Very nice apartment', 34, false, '24/12/2017'),
        new Rental('3', 'Central Apartment 3', 'New York 3', 'Times Square 3', 'apartment',
            'http://via.placeholder.com/350x250', 3, 'Very nice apartment', 34, false, '24/12/2017'),
        new Rental('4', 'Central Apartment 4', 'New York 4', 'Times Square 4', 'apartment',
            'http://via.placeholder.com/350x250', 3, 'Very nice apartment', 34, false, '24/12/2017'),
        new Rental('5', 'Central Apartment 5', 'New York 5', 'Times Square 5', 'apartment',
            'http://via.placeholder.com/350x250', 3, 'Very nice apartment', 34, false, '24/12/2017')
    ];

    public get rentals(): Rental[] {
        return this._rentals;
    }

    public getRentalById(rentalId: string): Observable<Rental> {
        return new Observable<Rental>((observer) => {
            setTimeout(() => {
                const foundRental = this.rentals.find(rental => rental.id === rentalId);
                observer.next(foundRental);
            }, 500);
        });
    }

    public getRentals(): Observable<Rental[]> {
        return new Observable<Rental[]>((observer) => {
            setTimeout(() => {
                observer.next(this.rentals);
            }, 300);
        });
    }

}
