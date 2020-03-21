export class Favorit {

    public id!: number;
    public user_id!: number;
    public recip_id!: number;

    constructor(input: Favorit) {
        Object.assign(this, input);
    }
}
