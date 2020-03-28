import {CommentService } from './../services/comment.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const CommentController = (app: Application) => {
    const service = new CommentService();
    let router = Router();
    router = commonController(app, service, router);
    app.use('recipes/:id/comments', router);
};
