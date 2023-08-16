import { Question as RawQuestion, Answer as RawAnswer } from "@prisma/client";
import { Question } from "src/questions/entities/question.entity";

export class PrismaQuestionMapper {
    static toDomain(rawQuestion: RawQuestion, rawAnsers: RawAnswer[]) {

        return new Question(rawQuestion.statement, [], rawQuestion.id)

    }
}