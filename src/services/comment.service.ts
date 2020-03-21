import { CommentRepository } from '../repository/comment.repository';
import { Comment } from '../models/comment';
import { AbstractService } from '../core/abstract.service';

export class CommentService extends AbstractService<Comment> {

        repository = new CommentRepository();

}
