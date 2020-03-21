export class Comment {

    public id!: number;
    public user_id!: number;
    public recip_id!: number;
    public content!: string;

    constructor(input: Comment) {
        Object.assign(this, input);
    }
}
