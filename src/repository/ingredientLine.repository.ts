import { IngredientLine } from '../models/ingredientLine';
import { AbstractRepository } from '../core/abstract.repository';

export class IngredientLineRepository extends AbstractRepository<IngredientLine> {

    constructor() {
        super('ingredient_line');
    }
}
