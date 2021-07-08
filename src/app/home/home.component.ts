import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  id: number | undefined;
  firstname: string | undefined;
  lastname : number | undefined;
  email : number | undefined;
 

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.id = params.id || 0;
      this.firstname = params.firstname;
      this.lastname = params.lastname;
      this.email = params.email;
     
    });
  }


  logout(){
    this.router.navigate(['/login']);
  }

}
