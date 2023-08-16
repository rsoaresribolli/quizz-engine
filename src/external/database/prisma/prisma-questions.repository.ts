import { Question } from "src/questions/entities/question.entity";
import { QuestionsRepository } from "src/questions/repositories/questions-repository";
import { PrismaService } from "./prisma.service";
import { Injectable } from "@nestjs/common";
import { PrismaQuestionMapper } from "./prisma-question.mapper";

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
    constructor(private prisma: PrismaService) {}

    create(question: Question): void {
        throw new Error("Method not implemented.");
    }

    async findOne(questionId: string): Promise<Question | null> {
        const question = await this.prisma.question.findUnique({
            where: {
                id: questionId
            },
            include: {
                answers: true
            }
        });
        
        if (!question) {
            return null;
        }
        
        return PrismaQuestionMapper.toDomain(question, question.answers);
    }

}