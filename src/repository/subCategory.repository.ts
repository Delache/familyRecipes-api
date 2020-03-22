
import { AbstractRepository } from '../core/abstract.repository';
import { SubCategory } from '../models/subCategory';

export class SubCategoryRepository extends AbstractRepository<SubCategory> {

    constructor() {
        super('sub_category');
    }
}
