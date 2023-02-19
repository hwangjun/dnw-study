import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeORMConfig } from './configs/typeorm.config';
import { BoardsController } from './boards/boards.controller';
import { BoardsService } from './boards/boards.service';
import { BoardsModule } from './boards/boards.module';
import { ConfigModule } from '@nestjs/config';
import { TagsController } from './tags/tags.controller';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule,
    TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
