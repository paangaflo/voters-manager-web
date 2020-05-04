export class Vote {
    _id: number;
    _person: string;
    _category: string;
    _description: string;
    _image: string;
    _time: string;
    _positive: number;
    _negative: number;

    constructor() { }

    get id(): number {
        return this._id;
    }
    get person(): string {
        return this._person;
    }
    get category(): string {
        return this._category;
    }
    get description(): string {
        return this._description;
    }
    get image(): string {
        return this._image;
    }
    get time(): string {
        return this._time;
    }
    get positive(): number {
        return this._positive;
    }
    get negative(): number {
        return this._negative;
    }

    set id(value: number) {
        this._id = value;
    }
    set person(value: string) {
        this._person = value;
    }
    set category(value: string) {
        this._category = value;
    }
    set description(value: string) {
        this._description = value;
    }
    set image(value: string) {
        this._image = value;
    }
    set time(value: string) {
        this._time = value;
    }
    set positive(value: number) {
        this._positive = value;
    }
    set negative(value: number) {
        this._negative = value;
    }
}