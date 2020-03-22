export class Unit {

    public id!: number;
    public name!: number;

    constructor(input: Unit) {
        Object.assign(this, input);
    }
}
