import { Repository } from 'typeorm';
import { Tag } from './tag.entity';

export interface TagsRepository extends Repository<Tag> {
    this: Repository<Tag>;
}