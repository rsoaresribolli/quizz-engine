import { randomUUID } from "crypto";
import { Answer } from "./answer.entity";

export class Question {
    private _id: string;
    private _statement: string;
    private _answers: Answer[];
    private _correctAnswers: Answer[];
    private _createdAt: Date;

    constructor(statement: string, answers: Answer[], correctAnswers: Answer[], id?: string) {
        this._id = id ?? randomUUID();
        this._statement = statement;
        this._answers = answers;
        this._correctAnswers = correctAnswers;
        this._createdAt = this._createdAt ?? new Date();
    }

    public get id() {
        return this._id;
    }

    public get answers() {
        return this._answers;
    }

    public get correctAnswers() {
        return this._correctAnswers;
    }

    public isAnswerCorrect(answers: Answer[]) {
        const haveSameNumberOfAnswers = answers.length === this._correctAnswers.length;
        const areAnswersEqual = answers.every(a => this._correctAnswers.some(ca => ca.id === a.id));
        return  haveSameNumberOfAnswers && areAnswersEqual;
    }

}