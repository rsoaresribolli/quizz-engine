import { Injectable } from "@nestjs/common";
import { Answer } from "src/questions/entities/answer.entity";
import { Question } from "src/questions/entities/question.entity";
import { QuestionsRepository } from "src/questions/repositories/questions-repository";

const answers = [
    new Answer({text: "5"}),
    new Answer({text: "6"}),
    new Answer({text: "22"}),
    new Answer({text: "4", isCorrect: true})
]

const questions = [
    new Question("How much is 2 + 2?", answers, "1")
]

@Injectable()
export class InMemoryRepository implements QuestionsRepository {
    create(question: Question): void {
        throw new Error("Method not implemented.");
    }
    findOne(questionId: string): Question {
        return questions.find(q => q.id === questionId);
    }

}