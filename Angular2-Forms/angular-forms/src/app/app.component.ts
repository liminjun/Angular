import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Employee } from './models/employee.model';
import { FormPoster } from './services/form-poster.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  model = new Employee('Lee', 'Li', true, "1000", 'default');
  hasPirmaryLanguageError = false;

  
  languages=[];


  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
 
  bsValue: Date = new Date();
  mytime: Date = new Date();
  onOffSwitch:string="On";

  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = true;

  constructor(private formPoster: FormPoster) {
    this.formPoster.getLanguages()
    .subscribe(
      data=>this.languages=data.languages,
      error=>console.log('error',error)
    );
  }
  submitForm(form: NgForm) {
    
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPirmaryLanguageError)
      return;
    this.formPoster.postEmployeeForm(this.model)
    .subscribe(
      data=>console.log('success',data),
      error=>console.log('error',error)
    );
  }
  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }
  validatePrimaryLanguage(value) {
    if (this.model.primaryLanguage === 'default') {
      this.hasPirmaryLanguageError = true;
    } else {
      this.hasPirmaryLanguageError = false;
    }
  }
}
