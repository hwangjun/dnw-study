import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from "@nestjs/swagger";

const swaggerCustomOptions : SwaggerCustomOptions = {
    swaggerOptions : {
    }
}


/**
 * @author Ryan
 * @description Swagger 세팅
 */
export function setupSwagger(app: INestApplication): void {
    const options = new DocumentBuilder()
      .setTitle('nestjs api')
      .setDescription('nestjs Swagger API 서버')
      .setVersion('1.0.0')
      //JWT 토큰 설정
      /* .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          name: 'JWT',
          in: 'header',
        },
        'access-token',
      ) */
      .build();
  
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document, swaggerCustomOptions);
  }