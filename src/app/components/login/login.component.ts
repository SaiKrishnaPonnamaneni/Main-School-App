import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;
  constructor(private _authService:AuthService, private _router:Router ){

    this.loginForm = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
    })
  }

  ngOnint():  void{

  }
  login(){
    this._authService.doLogin(this.loginForm.value).subscribe(
     value=>{
      localStorage.setItem("token",value.token);
      this._router.navigateByUrl("/dashboard");
      alert("succes");
     },
     err=>{
      alert("Faild");
     }

    )

  }


}
