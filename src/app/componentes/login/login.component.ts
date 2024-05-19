import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formLogin: FormGroup;
  




  constructor(private authService: AuthService, private doctorService: DoctorService) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })

  }

  onSubmit() {
    this.authService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.doctorService.Navegar();
      })
      .catch(error => console.log(error));
  }



  

}
