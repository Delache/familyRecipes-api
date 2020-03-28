import { SubcategoryService } from './../services/subcategory.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const SubcategoryController = (app: Application) => {
    const service = new SubcategoryService();
    let router = Router();
    router = commonController(app, service, router);
    app.use('/categories/:id/subcategories', router);
};
