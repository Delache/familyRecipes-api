import { PreparationList } from '../models/preparationList';
import { AbstractRepository } from '../core/abstract.repository';

export class PreparationListRepository extends AbstractRepository<PreparationList> {

    constructor() {
        super('preparation_list');
    }
}
