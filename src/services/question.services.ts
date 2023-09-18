import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { Question } from "src/models/question.model";

@Injectable({
    providedIn: 'root'
})
export class QuestionServices {

    SERVER_URL = 'https://localhost:60431/api/'

    constructor(private http: HttpClient) { }

    getQuestions(): Observable<Question[]> {
        return  this.http.get<Question[]>(`${ this.SERVER_URL }Question`);
    }
}