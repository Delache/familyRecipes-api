import { IngredientsList } from '../models/ingredientsList';
import { AbstractRepository } from '../core/abstract.repository';

export class IngredientsListRepository extends AbstractRepository<IngredientsList> {

    constructor() {
        super('ingredients_list');
    }
}
