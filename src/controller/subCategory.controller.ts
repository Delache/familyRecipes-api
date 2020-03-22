import { SubCategoryService } from './../services/subCategory.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const SubCategoryController = (app: Application) => {
    const service = new SubCategoryService();
    let router = Router();
    router = commonController(app, service, router);
    app.use('/subcategories', router);
};
