import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    canSave: boolean;
    canList: boolean;
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },

        {
            title: 'Participante',
            url: '/participantes',
            icon: 'list'
        },

        {
            title: 'Documento',
            url: '/documento-clinico',
            icon: 'list'
        },

        {
            title: 'Histórico',
            url: '/list',
            icon: 'list'
        },

        {
            title: 'Logout',
            url: '',
            icon: 'logout'
        },

    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        private navCtrl: NavController,
        private authService: AuthService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    goToPage(p) {
        if (p.title == 'Logout') {
            this.authService.logout();
            this.navCtrl.navigateRoot('/login');
            return;
        }
        this.navCtrl.navigateRoot(p.url);
    }
}
