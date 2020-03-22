export class Category {

    public id!: number;
    public name!: string;
    public description!: string;

    constructor(input: Category) {
        Object.assign(this, input);
    }
}
