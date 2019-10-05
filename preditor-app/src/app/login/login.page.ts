import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    model: { username: string, password: string } = {
        password: '',
        username: ''
    };
    constructor(
        public menuCtrl: MenuController,
        private authService: AuthService,
        private router: NavController
    ) { }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }

    logIn() {
        this.authService.logIn(this.model).then(status => {
            if (status) {
                this.router.navigateRoot('/home');
            }
        }).catch(error => {
            alert(error.message);
        });
    }

}
