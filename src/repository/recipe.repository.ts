import { Recipe } from '../models/recipe';
import { AbstractRepository } from '../core/abstract.repository';

export class RecipeRepository extends AbstractRepository<Recipe> {

    constructor() {
        super('recipe');
    }
    private GET_RECIPE_BY_SEARCH = 'SELECT * FROM recipes WHERE title LIKE ? OR description LIKE ?' ;

    // Recherche des documents avec barre de recherche
    async searchRecipe(word: string) {
        const searchWord = '%' + word + '%';
        const result = await this.db.query(this.GET_RECIPE_BY_SEARCH, [searchWord, searchWord]);
        return result;
    }

}
