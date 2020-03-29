import { CategoryRepository } from '../repository/category.repository';
import { Category } from '../models/category';
import { AbstractService } from '../core/abstract.service';

export class CategoryService extends AbstractService<Category> {

        repository = new CategoryRepository();

        getSubcategories(id: number) {
                const search = this.repository.getSubcategories(id);
                return search;
        }

        getRecipesByCategory(id: number) {
                const search = this.repository.getRecipesByCategory(id);
                return search;
        }

        getRecipesBySubcategory(id: number, id2: number) {
                const search = this.repository.getRecipesBySubcategory(id, id2);
                return search;
        }
}
