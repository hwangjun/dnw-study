import { Injectable, NotFoundException } from '@nestjs/common';
// import { Board } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/createBoard.dto';
import { BoardRepository } from './board.repository';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './boards.entity';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Board)
        private boardRepository: BoardRepository,
    ) {}

    findAll() {
        return this.boardRepository.find();
    }
}
