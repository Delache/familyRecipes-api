
import { AbstractRepository } from '../core/abstract.repository';
import { Ingredient } from '../models/ingredient';

export class IngredientRepository extends AbstractRepository<Ingredient> {

    constructor() {
        super('ingredient');
    }
}
