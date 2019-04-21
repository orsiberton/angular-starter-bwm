export class Rental {

    private _id: string;
    private _title: string;
    private _city: string;
    private _street: string;
    private _category: string;
    private _image: string;
    private _bedrooms: number;
    private _description: string;
    private _dailyRate: number;
    private _shared: boolean;
    private _createdAt: string;

    public constructor(id: string, title: string, city: string, street: string, category: string,
        image: string, bedrooms: number, description: string, dailyRate: number, shared: boolean,
        createdAt: string) {
        this._id = id;
        this._title = title;
        this._city = city;
        this._street = street;
        this._category = category;
        this._image = image;
        this._bedrooms = bedrooms;
        this._description = description;
        this._dailyRate = dailyRate;
        this._shared = shared;
        this._createdAt = createdAt;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }

    public get street(): string {
        return this._street;
    }
    public set street(value: string) {
        this._street = value;
    }

    public get category(): string {
        return this._category;
    }
    public set category(value: string) {
        this._category = value;
    }

    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }

    public get bedrooms(): number {
        return this._bedrooms;
    }
    public set bedrooms(value: number) {
        this._bedrooms = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get dailyRate(): number {
        return this._dailyRate;
    }
    public set dailyRate(value: number) {
        this._dailyRate = value;
    }

    public get shared(): boolean {
        return this._shared;
    }
    public set shared(value: boolean) {
        this._shared = value;
    }

    public get createdAt(): string {
        return this._createdAt;
    }
    public set createdAt(value: string) {
        this._createdAt = value;
    }
}
