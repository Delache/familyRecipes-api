import { UnitRepository } from '../repository/unit.repository';
import { Unit } from '../models/unit';
import { AbstractService } from '../core/abstract.service';

export class UnitService extends AbstractService<Unit> {

        repository = new UnitRepository();

}
