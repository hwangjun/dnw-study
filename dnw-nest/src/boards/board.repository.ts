import { Repository } from 'typeorm';
import { Board } from './boards.entity';

export interface BoardRepository extends Repository<Board> {
    this: Repository<Board>;
}