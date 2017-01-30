import { Component, Input } from '@angular/core';
import { Channel } from 'models';
import { Router } from '@angular/router';

@Component({
    selector: 'menu',
    templateUrl: 'menu.html'
})
export class MenuComponent {
    @Input() channels: Channel[] = [];

    constructor(
        private router: Router){}

}