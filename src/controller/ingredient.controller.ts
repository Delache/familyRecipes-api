import { IngredientService } from '../services/ingredient.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const IngredientController = (app: Application) => {
    const service = new IngredientService();
    let router = Router();
    router = commonController(app, service, router);
    app.use('/ingredients', router);
};
