import { IngredientLineRepository } from '../repository/ingredientLine.repository';
import { IngredientLine } from '../models/ingredientLine';
import { AbstractService } from '../core/abstract.service';

export class IngredientLineService extends AbstractService<IngredientLine> {

        repository = new IngredientLineRepository();

}
