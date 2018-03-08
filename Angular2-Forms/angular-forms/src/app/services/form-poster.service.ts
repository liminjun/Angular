import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
import {Employee} from '../models/employee.model';
import { Observable } from "rxjs/Observable";

@Injectable()
export class FormPoster{
    handleError(error: any){
       return Observable.throw(error.statusText);
    }
    extraData(res: Response) {
        let body=res.json();
        return body.fields||{};
    }
    constructor(private http:Http){

    }
    postEmployeeForm(employee:Employee):Observable<any>{
        console.log('posting employee',employee);
        let body=JSON.stringify(employee);
        let headers=new Headers({'Content-Type':"application/json"});
        let options=new RequestOptions({"Headers":headers});

        return this.http.post('http://localhost:3100/postemployee',body,options)
        .map(this.extraData)
        .catch(this.handleError);
    }
}