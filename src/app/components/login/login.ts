import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'models';
import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../../services/index';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent  {
    @ViewChild(NgForm)
    ngForm: NgForm;

    model = new UserLogin();
    constructor(
            private authService: AuthenticationService,
            private router : Router
    ) { }

    login() {
        if (this.ngForm.form.invalid) {
            return;
        }else{
            this.authService.authenticate(this.model);
            this.router.navigate(['/'], "channel");
        }
    }
}
