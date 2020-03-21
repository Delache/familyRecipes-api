import { FavoritService } from '../services/favorit.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const FavoritController = (app: Application) => {
    const service = new FavoritService();
    let router = Router();
    router = commonController(app, service, router);
    app.use('/favorits', router);
};
