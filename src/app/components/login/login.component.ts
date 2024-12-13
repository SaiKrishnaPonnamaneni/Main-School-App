import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;
  constructor(private _authService:AuthService ){

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
      alert("succes");
     },
     err=>{
      alert("Faild");
     }

    )

  }


}
