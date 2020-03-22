import { IngredientRepository } from '../repository/ingredient.repository';
import { Ingredient } from '../models/ingredient';
import { AbstractService } from '../core/abstract.service';

export class IngredientService extends AbstractService<Ingredient> {

        repository = new IngredientRepository();

}
