import { CategoryService } from './../services/category.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const CategoryController = (app: Application) => {
    const service = new CategoryService();
    let router = Router();

    router.get('/:categoryId/subcategories', async (req, res) => {
        try {
            const categoryId = parseInt(req.params.categoryId, 10);
            const result = await service.getSubcategories(categoryId);
            res.send(result);
        } catch (error) {
            res.status(404).send('status introuvable');
        }
    });

    router.get('/:categoryId/recipes:', async (req, res) => {
        try {
            const categoryId = parseInt(req.params.categoryId, 10);
            const result = await service.getRecipesByCategory(categoryId);
            res.send(result);
        } catch (error) {
            res.status(404).send('status introuvable');
        }
    });

    router.get('/:categoryId/subcategories/:subcategoryId/recipes', async (req, res) => {
        try {
            const categoryId = parseInt(req.params.categoryId, 10);
            const subcategoryId = parseInt(req.params.categoryId, 10);
            const result = await service.getRecipesBySubcategory(categoryId, subcategoryId);
            res.send(result);
        } catch (error) {
            res.status(404).send('status introuvable');
        }
    });

    router = commonController(app, service, router);
    app.use('/categories', router);

};
