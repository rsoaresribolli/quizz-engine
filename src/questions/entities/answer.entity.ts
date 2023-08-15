import { randomUUID } from "crypto";

export interface IAnswerParams {
    text: string;
    id?: string;
    isCorrect?: boolean;
}

export class Answer {
    private _id: string;
    private _text: string;
    private _isCorrect: boolean;

    constructor(params: IAnswerParams) {
        this._id = params.id ?? randomUUID();
        this._text = params.text;
        this._isCorrect = params.isCorrect ?? false;
    }
    
    public get id() {
        return this._id;
    }

    public get text() {
        return this._text
    }

    public get isCorrect() {
        return this._isCorrect;
    }

    public set text(text: string) {
        this._text = text;
    }

    public setCorrect(): void {
        this._isCorrect = true;
    }
}