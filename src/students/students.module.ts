import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { StudentsMiddleware } from 'src/middleware/students.middleware';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(StudentsMiddleware)
      .forRoutes({ path: '/students/:studentId', method: RequestMethod.GET });

    consumer
      .apply(StudentsMiddleware)
      .forRoutes({ path: '/students/:studentId', method: RequestMethod.PUT });
  }
}
