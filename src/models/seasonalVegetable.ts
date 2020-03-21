export class SeasonalVegetable {

    public id!: number;
    public name!: string;
    public is_fruit!: boolean;
    public month!: number;

    constructor(input: SeasonalVegetable) {
        Object.assign(this, input);
    }
}
