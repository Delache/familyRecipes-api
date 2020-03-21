import { Recipe } from '../models/recipe';
import { AbstractRepository } from '../core/abstract.repository';

export class RecipeRepository extends AbstractRepository<Recipe> {

    constructor() {
        super('recipe');
    }
}
