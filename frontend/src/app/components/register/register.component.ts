import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
    fullname:string="";
    email:string="";
    password:string="";

  registerForm = new FormGroup({
    fullname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(12),
    ]),
   
  });

  registerSubmitted() {
    console.log(this.registerForm.value);
  }

  get Fullname(): FormControl {
    return this.registerForm.get('fullname') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get Password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }





constructor(private http: HttpClient){

}
register(){
  let bodyData={
    "fullname":this.registerForm.value.fullname,
    "email":this.registerForm.value.email,
    "password":this.registerForm.value.password
  
  };
  this.http.post('http://localhost:5000/user/create',bodyData,{responseType:'text'}).subscribe((resultData:any)=>{
    console.log(resultData);
    alert("Registered Successfully");


    this.fullname="";
    this.email="";

    this.password="";

  })
}
}

