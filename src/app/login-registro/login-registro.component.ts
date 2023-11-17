import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginUsuarioService } from './login-registro.service';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html',
  styleUrls: ['./login-registro.component.css']
})
export class LoginRegistroComponent {

  loginform: FormGroup;

  constructor(private formBuilder: FormBuilder, private LoginUsuarioService: LoginUsuarioService){
      this.loginform = formBuilder.group({
        username: '',
        password: '',
      });
  } 

  onSubmit(){
    const registroData= this.loginform.value;
    console.log(registroData);

    this.LoginUsuarioService.login(registroData).subscribe(result => {
    window.localStorage.setItem('tokenObject', JSON.stringify(result));
    });
  }



}
