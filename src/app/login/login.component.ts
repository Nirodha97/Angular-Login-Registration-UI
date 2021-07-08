import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_emailControl = new FormControl('', [Validators.required]); 
  login_passwordControl = new FormControl('', [Validators.required]);



  getErrorMessage() {
    if (this.login_emailControl.hasError('required')) {
      return 'You must enter a value';
    }
  
    else if (this.login_passwordControl.hasError('required')) {
      return 'You must enter a value';
    }

    return null;
  }
  hide=true;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  signup(){
    this.router.navigate(['/']);
  }

  login(){
   
    let body = new HttpParams({
      fromObject:{
        'email':this.login_emailControl.value,
        'password':this.login_passwordControl.value, 
      }
    })



    var url ="http://52.15.72.215:3000/api/login";
    this.http.post(url ,body,{responseType: 'text'}).subscribe(
      (data :any) =>{
        if(data!="wrong")
        {
          alert(data);
          var obj = JSON.parse(data);
          var id =obj[0].id;
          var firstname =obj[0].firstname;
          var lastname =obj[0].lastname;
          var email =obj[0].email;
          //alert(x);
          this.router.navigate(['/home'],{queryParams:{id: id,firstname: firstname, lastname: lastname,email: email }});
        }
        else{
          alert("Email or Password Incorrect !");
        }

        
        }
    );
    
  }

}
