import { randomUUID } from "crypto";

export class Answer {
    private _id: string;
    private _text: string;

    constructor(text: string, id?: string) {
        this._id = id ?? randomUUID();
        this._text = text;
    }
    
    public get id() {
        return this._id;
    }

     public get text() {
        return this._text
    }

    public set text(text: string) {
        this._text = text;
    }
}