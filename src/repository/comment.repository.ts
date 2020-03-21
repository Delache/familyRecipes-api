
import { AbstractRepository } from '../core/abstract.repository';
import { Comment } from '../models/comment';

export class CommentRepository extends AbstractRepository<Comment> {

    constructor() {
        super('comment');
    }
}
