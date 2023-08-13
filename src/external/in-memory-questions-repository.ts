import { Injectable } from "@nestjs/common";
import { Answer } from "src/questions/entities/answer.entity";
import { Question } from "src/questions/entities/question.entity";
import { QuestionsRepository } from "src/repositories/questions-repository";

const correctAnswers = [
    new Answer("4")
]

const answers = [
    new Answer("5"),
    new Answer("6"),
    new Answer("22")
]

const questions = [
    new Question("How much is 2 + 2?", answers, correctAnswers, "1")
]

@Injectable()
export class InMemoryRepository implements QuestionsRepository {
    create(question: Question): void {
        throw new Error("Method not implemented.");
    }
    findById(questionId: string): Question {
        return questions.find(q => q.id === questionId);
    }

}