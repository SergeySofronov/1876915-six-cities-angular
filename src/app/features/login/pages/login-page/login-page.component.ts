
import { AfterViewInit, ChangeDetectionStrategy, Component, computed, signal, viewChild } from '@angular/core';
import { AbstractControl, FormsModule, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { CitiesDefaults, LoginMessages, USER_PASSWORD_MAX_LENGTH as MAX, USER_PASSWORD_MIN_LENGTH as MIN } from '@app/const';

//Disclaimer: Template-driven form used + manual form-field validation

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements AfterViewInit {
  public cityName = computed(() => CitiesDefaults[Math.round(Math.random() * (CitiesDefaults.length - 1))].name);
  public isSubmitting = signal(false);
  public errorMessages = LoginMessages;

  private readonly form = viewChild<NgForm>('loginForm');

  ngAfterViewInit() {
    setTimeout(() => {
      const controls = this.form()?.form.controls;
      if (controls) {
        const emailControl = controls['email'];
        const passwordControl = controls['password'];

        emailControl.setValidators([Validators.required, this.emailValidator()]);
        passwordControl.setValidators([Validators.required, this.passwordValidator()]);

        emailControl.setValue('');
        passwordControl.setValue('');
      }
    });
  }

  public handleSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
    loginForm.reset();
  }

  public emailValidator = (): ValidatorFn => {
    return (control: AbstractControl) => {
      const isValid = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
        .test(control.value);

      return isValid ? null : { message: this.errorMessages.InvalidEmail };
    }
  }

  public passwordValidator = (): ValidatorFn => {
    return (control: AbstractControl) => {
      const isValid = new RegExp(`^(?=.{${MIN},${MAX}}$)((\\d+)([a-zA-Z]+)|([a-zA-Z]+)(\\d+))`).test(control.value);

      return isValid ? null : { message: this.errorMessages.InvalidPassword };
    }
  }
}
