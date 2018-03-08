import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Employee } from './models/employee.model';
import { FormPoster } from './services/form-poster.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  model=new Employee('Lee','Li',true,"1000",'default');
  hasPirmaryLanguageError=false;

  constructor(private formPoster:FormPoster){

  }
  submitForm(form:NgForm){
    console.log(this.model);
  }
  firstNameToUpperCase(value:string){
    if(value.length>0){
      this.model.firstName=value.charAt(0).toUpperCase()+value.slice(1);
    }else{
      this.model.firstName=value;
    }
  }
  validatePrimaryLanguage(value){
    if(this.model.primaryLanguage==='default'){
      this.hasPirmaryLanguageError=true;
    }else{
      this.hasPirmaryLanguageError=false;
    }
  }
}
