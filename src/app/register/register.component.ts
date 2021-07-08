import { HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 

  

firstnameControl = new FormControl('', [Validators.required]);  //To get values
lastnameControl = new FormControl('', [Validators.required]);
emailControl = new FormControl('', [Validators.required,Validators.email]);
passwordControl = new FormControl('', [Validators.required]);
conformpasswordControl = new FormControl('', [Validators.required]);

getErrorMessage() {
  if (this.firstnameControl.hasError('required')) {
    return 'You must enter a value';
  }

  else if (this.lastnameControl.hasError('required')) {
    return 'You must enter a value';
  }

  else if (this.emailControl.hasError('required')) {
    return 'You must enter a value';
  }
  else if(this.emailControl.hasError('email')){
    return 'Not a valid email';
  }

  else if (this.passwordControl.hasError('required')) {
    return 'You must enter a value';
  }

 else if (this.conformpasswordControl.hasError('required')) {
    return 'You must enter a value';
  }

  
    return null;
  
  
}
  hide=true;
 
  constructor( private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }


  signup(){
  
    //1.Collect Parameters
    let body = new HttpParams({
      fromObject:{
          'firstname': this.firstnameControl.value,
          'lastname': this.lastnameControl.value,
          'email': this.emailControl.value,
          'password': this.passwordControl.value,
         
      }
    });
   
    
   
    if(this.passwordControl.value==this.conformpasswordControl.value){
       //2.Send to URL
    var url ="http://52.15.72.215:3000/api/user";
    this.http.post(url ,body,{responseType: 'text'}).subscribe(
      (data :any) =>{
        if(data="Insert Success")
        {
          this.router.navigate(['/login']);
        }
          alert(data);
        }
    );
    }

    else{
      alert("Password does not match");
    }
   
    
  }

  

}
