export class Recipe {

    public id!: number;
    public name!: string;
    public category_id!; number;
    public sub_category_id!: number;
    public user_id!: number;
    public cooking_time: string;
    public preparation_time!: string;
    public share_nb!: number;
    public photo!: string;
    public description!: string;

    constructor(input: Recipe) {
        Object.assign(this, input);
    }
}
