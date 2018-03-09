import {Injectable} from "@angular/core";
import {Http,Response,Headers,RequestOptions} from "@angular/http";
import {Employee} from '../models/employee.model';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

@Injectable()
export class FormPoster{
    extractLanguages(res: Response) {
        let body=res.json();
        return body.data||{};
    }
    handleError(error: any){
       return Observable.throw(error.statusText);
    }
    extraData(res: Response) {
        let body=res.json();
        return body.fields||{};
    }
    constructor(private http:Http){

    }
    getLanguages():Observable<any>{
        return this.http.get('http://localhost:3100/get-languages')
        .delay(5000)
        .map(this.extractLanguages)
        .catch(this.handleError);
    }
    postEmployeeForm(employee:Employee):Observable<any>{
        console.log('posting employee',employee);
        let body=JSON.stringify(employee);
        let headers=new Headers({'Content-Type':"application/json"});
        let options=new RequestOptions({"headers":headers});

        return this.http.post('http://localhost:3100/postemployee',body,options)
        .map(this.extraData)
        .catch(this.handleError);
    }
}