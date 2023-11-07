import { Component, OnInit } from '@angular/core';
import { RegisterProtectoraService } from './register-protectora.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register-protectora',
  templateUrl: './register-protectora.component.html',
  styleUrls: ['./register-protectora.component.css']
})
export class RegisterProtectoraComponent implements OnInit{

  ngOnInit(): void {
  }


  registroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerProtectoraService : RegisterProtectoraService){
    this.registroForm = this.formBuilder.group({
      nombre: '',
      localidad: '',
      telefono: '',
      email: '',
      loginDTO: this.formBuilder.group({
        username: '',
        password: '',
        rol: 'PROTECTORA'
      })
    });
  }

  onSubmit() {
    const registroData = this.registroForm.value;
    console.log(registroData);

    this.registerProtectoraService.save(registroData).subscribe(result => {
      console.log('Datos guardados', result);
      }
    );
  }
}
