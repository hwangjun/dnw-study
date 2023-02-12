import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/createBoard.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService : BoardsService) {}

    @Get('list')
    find() {
        return this.boardsService.findAll();
    }
}
