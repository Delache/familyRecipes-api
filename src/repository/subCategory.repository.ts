import { AbstractRepository } from '../core/abstract.repository';
import { Subcategory } from '../models/subcategory';

export class SubCategoryRepository extends AbstractRepository<Subcategory> {

    constructor() {
        super('sub_category');
    }
}
