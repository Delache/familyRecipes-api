
import { AbstractRepository } from '../core/abstract.repository';
import { Category } from '../models/category';

export class CategoryRepository extends AbstractRepository<Category> {

    constructor() {
        super('category');
    }
}
