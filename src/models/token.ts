export class Token {

    public id?: number;
    public user_id!: number;
    public value!: string;
    // public expiration!: string;
    // tslint:disable-next-line: variable-name

    constructor(input: Token) {
        Object.assign(this, input);
    }
}
