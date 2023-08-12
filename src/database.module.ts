import { Module } from "@nestjs/common";
import { QuestionsRepository } from "./repositories/questions-repository";
import { InMemoryRepository } from "./external/in-memory-questions-repository";

@Module({
    providers: [
        {
        provide: QuestionsRepository,
        useClass: InMemoryRepository,
        },
    ],
    exports: [
        QuestionsRepository
    ]
})
export class DatabaseModule {}
  