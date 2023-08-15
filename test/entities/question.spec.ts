import { Answer } from "../../src/questions/entities/answer.entity";
import { Question } from "../../src/questions/entities/question.entity";

describe("Question", () => {
    it("should have answers and correct answers", () => {
        // Arrange
        const correctAnswers: Answer[] = [
            new Answer({text: "answer3", isCorrect: true}),
            new Answer({text: "answer4", isCorrect: true})
        ];
        
        const answers: Answer[] = [
            new Answer({text: "answer1"}),
            new Answer({text: "answer2"}),
            ...correctAnswers
        ];

        // Act
        const question = new Question("Questio 1", answers);

        // Assert
        expect(question.answers).toBe(answers);
        expect(question.correctAnswers).toStrictEqual(correctAnswers);
    });

    it("should allow to check incorrect answer", () => {
        // Arrange
        const correctAnswers: Answer[] = [
            new Answer({text: "answer3", isCorrect: true}),
            new Answer({text: "answer4", isCorrect: true})
        ];
        
        const answers: Answer[] = [
            new Answer({text: "answer1"}),
            new Answer({text: "answer2"}),
            ...correctAnswers
        ];

        const chosenAnswers: Answer[] = [
            answers[1]
        ];

        const question = new Question("Questio 1", answers);

        // Act
        const isAnswerCorrect = question.isAnswerCorrect(chosenAnswers);

        // Assert
        expect(isAnswerCorrect).toBeFalsy();
    });

    it("should allow to check correct answer", () => {
        // Arrange
        const correctAnswers: Answer[] = [
            new Answer({text: "answer3", isCorrect: true}),
            new Answer({text: "answer4", isCorrect: true})
        ];
        
        const answers: Answer[] = [
            new Answer({text: "answer1"}),
            new Answer({text: "answer2"}),
            ...correctAnswers
        ];

        const chosenAnswers: Answer[] = [
            ...correctAnswers
        ];

        const question = new Question("Questio 1", answers);

        // Act
        const isAnswerCorrect = question.isAnswerCorrect(chosenAnswers);

        // Assert
        expect(isAnswerCorrect).toBeTruthy();
    });

})