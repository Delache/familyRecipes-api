import { SubCategoryRepository } from '../repository/subCategory.repository';
import { SubCategory } from '../models/subCategory';
import { AbstractService } from '../core/abstract.service';

export class SubCategoryService extends AbstractService<SubCategory> {

        repository = new SubCategoryRepository();

}
