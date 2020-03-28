import { RecipeRepository } from '../repository/recipe.repository';
import { Recipe } from '../models/recipe';
import { AbstractService } from '../core/abstract.service';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les Artists doit apparaitre.
 * Attention ! Mettez le moins possible d'elements dans le controlleur
 */
export class RecipeService extends AbstractService<Recipe> {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    repository = new RecipeRepository();

    async getBySearch(word: string) {
      const search = await this.repository.searchRecipe(word);
      return search;
    }
    public create(recipe: Recipe) {
        this.upload(recipe);
      }

}
