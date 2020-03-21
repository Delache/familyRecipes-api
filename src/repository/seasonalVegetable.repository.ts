import { SeasonalVegetable } from './../models/seasonalVegetable';
import { AbstractRepository } from '../core/abstract.repository';

export class SeasonalVegetableRepository extends AbstractRepository<SeasonalVegetable> {

    constructor() {
        super('vegetable_garden');
    }

    query = 'SELECT name FROM seasonal_garden '

              + 'WHERE month = {currentMonth}';
    queryDated = this.query.replace('{currentMonth}', new Date().getMonth().toString(10));

    private GET_SEASONALS_FRUITS = this.queryDated + ' AND is_fruit = 1;';
    private GET_SEASONALS_VEGETABLES = this.queryDated + ' AND is_fruit = 0;';

    async getSeasonalsFruits() {
        console.log(this.GET_SEASONALS_FRUITS);
        const result = await this.db.query(this.GET_SEASONALS_FRUITS);
        return result;
    }

    async getSeasonalsVegetables() {
        const result = await this.db.query(this.GET_SEASONALS_VEGETABLES);
        return result;
    }
}
