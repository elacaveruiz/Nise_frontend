import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginUsuarioService } from './login-registro.service';
import { HttpParams } from '@angular/common/http';
import { loginDTO } from './loginDTO';
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

  async onSubmit(){
    const registroData= this.loginform.value;
    let httpData = await this.LoginUsuarioService.login(registroData);
    localStorage.setItem('token', JSON.stringify(httpData));

  }


}
