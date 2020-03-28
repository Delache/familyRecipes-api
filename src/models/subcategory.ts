export class Subcategory {

    public id!: number;
    public category_id: number;
    public name!: string;
    public description!: string;

    constructor(input: Subcategory) {
        Object.assign(this, input);
    }
}
