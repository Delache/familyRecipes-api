import { FavoritRepository } from '../repository/favorit.repository';
import { Favorit } from '../models/favorit';
import { AbstractService } from '../core/abstract.service';

export class FavoritService extends AbstractService<Favorit> {

        repository = new FavoritRepository();

}
