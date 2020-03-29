import { AbstractRepository } from '../core/abstract.repository';
import { Category } from '../models/category';

export class CategoryRepository extends AbstractRepository<Category> {

    constructor() {
        super('category');
    }
    getSubcategoriesQuery = 'SELECT * FROM sub_category where category_id = ?';
    getRecipeByCategoryQuery = 'SELECT * FROM recipe join user on user_id = user.id where category_id = ? ';
    getRecipeBySubcategoryQuery = 'SELECT * FROM recipe join user on user_id = user.id where subcategory_id = ? AND category_id = ?';

    async getSubcategories(categoryId: number) {
        const result = await this.db.query(this.getSubcategoriesQuery, categoryId);
        return result;
    }

    async getRecipesByCategory(categoryId: number) {
        const result = await this.db.query(this.getRecipeByCategoryQuery, categoryId);
        return result;
    }

    async getRecipesBySubcategory(subcategoryId: number, categoryId: number) {
        const result = await this.db.query(this.getRecipeBySubcategoryQuery, [subcategoryId, categoryId] );
        return result;
    }
}
