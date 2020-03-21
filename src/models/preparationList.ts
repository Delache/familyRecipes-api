export class PreparationList {

    public id!: number;
    public recip_id!: number;
    public step_nb!: number;
    public ingredient_line_id!: number;
    public ingredient_line_id!: number;
    public description!: string;

    constructor(input: PreparationList) {
        Object.assign(this, input);
    }
}
