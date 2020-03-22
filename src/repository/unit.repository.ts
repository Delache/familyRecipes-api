
import { AbstractRepository } from '../core/abstract.repository';
import { Unit } from '../models/unit';

export class UnitRepository extends AbstractRepository<Unit> {

    constructor() {
        super('unit');
    }
}
