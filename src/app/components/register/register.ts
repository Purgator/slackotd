import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/index';
import { UserRegistration } from 'models';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: 'register.html'
})
export class RegisterComponent {
    @ViewChild(NgForm)
    ngForm: NgForm;

    model = new UserRegistration();

    constructor(
        private registrationService: RegistrationService,
        private router : Router
    ) { }

    register() {
        if (this.ngForm.form.invalid) {
            document.getElementById("badRegister").innerHTML = "Veuillez renseigner votre username et votre mot de passe.";
            document.getElementById("badRegister").hidden = false;
            return;
        }else{
            document.getElementById("badRegister").hidden = true;
            this.registrationService.usernameExists(this.model.username).then((success) => {
                document.getElementById("badRegister").hidden = true;
                this.registrationService.register(this.model)
                .then((onfulfilled) => 
                {
                    document.getElementById("badRegister").hidden = true;
                    this.router.navigate(['/login'], "login");
                }, (rejected) => {
                    document.getElementById("badRegister").innerHTML = "Cet utilisateur existe déjà";
                    document.getElementById("badRegister").hidden = false;
                });
            })
                
            /*
            this.registrationService.usernameExists(this.model.username).then((success) => {
                document.getElementById("badRegister").innerHTML = "Cet utilisateur existe déjà";
                document.getElementById("badRegister").hidden = false;
            }, (rejected) => {
                this.registrationService.register(this.model)
            .then((onfulfilled) => 
            {
                document.getElementById("badRegister").hidden = true;
                this.router.navigate(['/login'], "login");
            });
            });
            */
        }
    }
}
