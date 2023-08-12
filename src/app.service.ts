import { Injectable } from '@nestjs/common';
import { QuestionsRepository } from './repositories/questions-repository';
import { Question } from './entities/question';

@Injectable()
export class AppService {
  constructor(private questionsRepository: QuestionsRepository) {}
  
  getQuestion(id: string): Question {
    return this.questionsRepository.findById(id);
  }
}
