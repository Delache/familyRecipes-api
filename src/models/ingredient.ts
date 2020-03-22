export class Ingredient {

    public id!: number;
    public name!: string;
    public description!: string;

    constructor(input: Ingredient) {
        Object.assign(this, input);
    }
}
