import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './tag.entity';
import { TagsRepository } from './tags.repository';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagsRepository : TagsRepository
  ) {}

  create(createTagDto: CreateTagDto) {
    const tag = new Tag();
    tag.name = createTagDto.name;
    return this.tagsRepository.save(createTagDto);
  }

  findAll() {
    return this.tagsRepository.find();
  }

  findOne(id: number) {
    return  (
      this.tagsRepository
        .createQueryBuilder('tag')
        .where('id = :id', { id })
        .getOne()
    );
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const tag = await this.findOne(id);
    tag.name = updateTagDto.name;
    return this.tagsRepository.save(tag);
  }

  async remove(id: number) {
    const tag = await this.findOne(id);
    await this.tagsRepository.delete(id);
  }
}
