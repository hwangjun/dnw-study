import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Board } from "src/boards/boards.entity";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mariadb',
    host: 'host.docker.internal', /* process.env.DB_HOST, */
    port: 3306, /* parseInt(process.env.DB_PORT), */
    username: 'dnw', /* process.env.DB_USER, */
    password: 'dnw1234', /* process.env.DB_PASS, */
    database: 'study', /* process.env.DB_DATABASE, */ 
    synchronize: true, /* Boolean(process.env.DB_SYNCHRONIZE), */
    entities: [Board],
  };