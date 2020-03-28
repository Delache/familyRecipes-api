import { SubCategoryRepository} from '../repository/subCategory.repository';
import { Subcategory } from '../models/subcategory';
import { AbstractService } from '../core/abstract.service';

export class SubcategoryService extends AbstractService<Subcategory> {
        repository = new SubCategoryRepository();

}
