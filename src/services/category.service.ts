import { CategoryRepository } from '../repository/category.repository';
import { Category } from '../models/category';
import { AbstractService } from '../core/abstract.service';

export class CategoryService extends AbstractService<Category> {

        repository = new CategoryRepository();

}
