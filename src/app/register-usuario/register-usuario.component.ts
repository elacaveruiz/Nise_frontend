import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterUsuarioService } from './register-usuario.service';

@Component({
  selector: 'app-register-usuario',
  templateUrl: './register-usuario.component.html',
  styleUrls: ['./register-usuario.component.css']
})
export class RegisterUsuarioComponent {

  registroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerUsuarioService : RegisterUsuarioService){
      this.registroForm = this.formBuilder.group({
        nombre: '',
        telefono: '',
        direccion: '',
        email: '',
        dni: '',
        activo: 'TRUE',
        preferenciaTipoAnimal: '',
        preferenciaTipoTamanyo: '',
        preferenciaSexo: '',
        loginDTO: this.formBuilder.group({
          username: '',
          password: '',
          rol: 'USUARIO'
        })
      });
    }


    onSubmit(){
      const registroData= this.registroForm.value;
      console.log(registroData);

      this.registerUsuarioService.save(registroData).subscribe(result => {
        console.log('Datos guardados', result);
      })
    }

}
