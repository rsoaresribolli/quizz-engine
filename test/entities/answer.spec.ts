import { Answer } from "../../src/questions/entities/answer.entity"

describe("Answer", () => {
    it("should be able to create an answer", () => {
        const answer = new Answer("This is an answer.");

        expect(answer).toBeTruthy();
    })
})