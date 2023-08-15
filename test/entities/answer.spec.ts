import { Answer } from "../../src/questions/entities/answer.entity"

describe("Answer", () => {
    it("should be able to create an answer", () => {
        const answer = new Answer({text: "This is an answer."});

        expect(answer).toBeTruthy();
    })
})