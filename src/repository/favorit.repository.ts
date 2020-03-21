
import { AbstractRepository } from '../core/abstract.repository';
import { Favorit } from '../models/favorit';

export class FavoritRepository extends AbstractRepository<Favorit> {

    constructor() {
        super('favorit');
    }
}
