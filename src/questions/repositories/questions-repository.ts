import { Question } from "src/questions/entities/question.entity";
export abstract class QuestionsRepository { 
    abstract create(question: Question): void;
    abstract findOne(questionId: string): Promise<Question | null>;    
}