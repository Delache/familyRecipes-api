import { PreparationListService } from './../services/preparationList.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const PreparationListController = (app: Application) => {
    const service = new PreparationListService();
    let router = Router();
    router = commonController(app, service, router);
    app.use('/preparationlist', router);
};
