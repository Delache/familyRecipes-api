import { PreparationListRepository } from '../repository/preparationList.repository';
import { PreparationList } from '../models/preparationList';
import { AbstractService } from '../core/abstract.service';

export class PreparationListService extends AbstractService<PreparationList> {

        repository = new PreparationListRepository();

}
