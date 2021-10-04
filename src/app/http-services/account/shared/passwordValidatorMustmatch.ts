import { FormGroup } from "@angular/forms";


export function MustMatch(controlName: string, matchingcontrolName: string){
  return (formGrup: FormGroup) => {
    const control = formGrup.controls[controlName];
    const matchingControl = formGrup.controls[matchingcontrolName];

    if (matchingControl.errors && !matchingControl.errors.MustMatch){
      return;
    }

    if(control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
