import { UnitService } from '../services/unit.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const UnitController = (app: Application) => {
    const service = new UnitService();
    let router = Router();
    router = commonController(app, service, router);
    app.use('/units', router);
};
