import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("questions")
export class QuestionsController {
  constructor(private questionService: AppService) {}

  @Get(":id")
  getQuestion(@Param("id") id: string) {
    return this.questionService.getQuestion(id);
  }
}
