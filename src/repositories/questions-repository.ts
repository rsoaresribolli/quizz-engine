import { Question } from "src/entities/question";

export abstract class QuestionsRepository { 
    abstract create(question: Question): void;
    abstract findById(questionId: string): Question;    
}