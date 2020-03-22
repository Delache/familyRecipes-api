export class SubCategory {

    public id!: number;
    public category_id: number;
    public name!: string;
    public description!: string;

    constructor(input: SubCategory) {
        Object.assign(this, input);
    }
}
