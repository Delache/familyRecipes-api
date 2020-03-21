import { IngredientsListService } from './../services/ingredientsList.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const IngredientsListController = (app: Application) => {
    const service = new IngredientsListService();
    let router = Router();
    router = commonController(app, service, router);
    app.use('/ingredientslist', router);
};
