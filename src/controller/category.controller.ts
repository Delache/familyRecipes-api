import { CategoryService } from './../services/category.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const CategoryController = (app: Application) => {
    const service = new CategoryService();
    let router = Router();
    router = commonController(app, service, router);
    app.use('/categories', router);
};
