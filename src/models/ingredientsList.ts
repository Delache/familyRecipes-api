export class IngredientsList {

    public id!: number;
    public recip_id!: number;
    public ingredient_line_id!: number;

    constructor(input: IngredientsList) {
        Object.assign(this, input);
    }
}
