import { SeasonalVegetableService } from '../services/seasonVegetable.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const SeasonalVegetableController = (app: Application) => {
    const service = new SeasonalVegetableService();
    let router = Router();

    router.get('/fruits', async (req, res) => {
        try {
            const result = await service.getSeasonalsFruits();
            res.send(result);
        } catch (error) {
            res.status(404).send('status introuvable');
        }
    });
    router.get('/vegetables', async (req, res) => {
        try {
            const result = await service.getSeasonalsVegetables();
            res.send(result);
        } catch (error) {
            res.status(404).send('status introuvable');
        }
    });

    router = commonController(app, service, router);
    app.use('/seasonal', router);
};
