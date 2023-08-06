import { Answer } from "../../src/entities/answer";
import { Question } from "../../src/entities/question";

describe("Question", () => {
    it("should have answers and correct answers", () => {
        // Arrange
        const correctAnswers: Answer[] = [
            new Answer("answer3"),
            new Answer("answer4")
        ];
        
        const answers: Answer[] = [
            new Answer("answer1"),
            new Answer("answer2"),
            ...correctAnswers
        ];

        // Act
        const question = new Question("Questio 1", answers, correctAnswers);

        // Assert
        expect(question.answers).toBe(answers);
        expect(question.correctAnswers).toBe(correctAnswers);
    });

    it("should allow to check incorrect answer", () => {
        // Arrange
        const correctAnswers: Answer[] = [
            new Answer("answer3"),
            new Answer("answer4")
        ];
        
        const answers: Answer[] = [
            new Answer("answer1"),
            new Answer("answer2"),
            ...correctAnswers
        ];

        const chosenAnswers: Answer[] = [
            answers[1]
        ];

        const question = new Question("Questio 1", answers, correctAnswers);

        // Act
        const isAnswerCorrect = question.isAnswerCorrect(chosenAnswers);

        // Assert
        expect(isAnswerCorrect).toBeFalsy();
    });

    it("should allow to check correct answer", () => {
        // Arrange
        const correctAnswers: Answer[] = [
            new Answer("answer3"),
            new Answer("answer4")
        ];
        
        const answers: Answer[] = [
            new Answer("answer1"),
            new Answer("answer2"),
            ...correctAnswers
        ];

        const chosenAnswers: Answer[] = [
            ...correctAnswers
        ];

        const question = new Question("Questio 1", answers, correctAnswers);

        // Act
        const isAnswerCorrect = question.isAnswerCorrect(chosenAnswers);

        // Assert
        expect(isAnswerCorrect).toBeTruthy();
    });

})