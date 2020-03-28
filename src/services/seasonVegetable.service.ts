import { SeasonalVegetableRepository } from '../repository/seasonalVegetable.repository';
import { SeasonalVegetable } from '../models/seasonalVegetable';
import { AbstractService } from '../core/abstract.service';

export class SeasonalVegetableService extends AbstractService<SeasonalVegetable> {

        repository = new SeasonalVegetableRepository();

        getSeasonalsFruits() {
                const search = this.repository.getSeasonalsFruits();
                return search;
            }

        getSeasonalsVegetables() {
                const search = this.repository.getSeasonalsVegetables();
                return search;
        }

}
