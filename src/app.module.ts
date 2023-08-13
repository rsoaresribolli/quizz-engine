import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [QuestionsModule],
  providers: [AppService],
})
export class AppModule {}
