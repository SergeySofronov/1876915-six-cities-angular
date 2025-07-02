import { Component, computed } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CitiesDefaults, USER_PASSWORD_MAX_LENGTH as MAX, USER_PASSWORD_MIN_LENGTH as MIN } from '@app/const';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  public cityName = computed(() => CitiesDefaults[Math.round(Math.random() * (CitiesDefaults.length - 1))].name);

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(MIN), Validators.maxLength(MAX), Validators.pattern(`^(?=.{${MIN},${MAX}}$)((\\d+)([a-zA-Z]+)|([a-zA-Z]+)(\\d+))`)]),
  });

}
