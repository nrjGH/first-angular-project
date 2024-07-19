import { HttpClient } from "@angular/common/http";
import { Injectable, InjectableProvider } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class DataService{

    private url = "https://dummyjson.com/users";

    constructor(private http:HttpClient){}

    getData(): Observable<any>{
        return this.http.get(this.url)
    }
}