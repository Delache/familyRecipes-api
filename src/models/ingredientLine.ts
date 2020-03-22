export class IngredientLine {

    public id!: number;
    public quantity!: number;
    public unit_id!: number;
    public ingredient_id!: number;

    constructor(input: IngredientLine) {
        Object.assign(this, input);
    }
}
