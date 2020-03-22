import { IngredientLineService } from './../services/ingredientLine.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const IngredientLineController = (app: Application) => {
    const service = new IngredientLineService();
    let router = Router();
    router = commonController(app, service, router);
    app.use('/ingredientline', router);
};
