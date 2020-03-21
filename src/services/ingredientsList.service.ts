import { IngredientsListRepository } from '../repository/ingredientsList.repository';
import { IngredientsList } from '../models/ingredientsList';
import { AbstractService } from '../core/abstract.service';

export class IngredientsListService extends AbstractService<IngredientsList> {

        repository = new IngredientsListRepository();

}
