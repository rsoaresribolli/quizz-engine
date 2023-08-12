import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { QuestionsController } from './questions.controller';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [QuestionsController],
  providers: [AppService],
})
export class AppModule {}
