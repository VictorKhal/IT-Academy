import { $ } from '@wdio/globals'
import BasePage from './base.page';
import { CREDENTIALS } from '../../helpers/const';


class LoginPage extends BasePage {
    loginForSystem = CREDENTIALS.validCredentials.login;
    passwordForSystem = CREDENTIALS.validCredentials.password;
   
    get loginField () {
        return $('input[name="username"]');
    }

    get passwordField () {
        return $('input[name="password"]');
    }

    get buttonSubmit () {
        return $('button[type="submit"]');
    }

    get wrongCredentialNotification() {
        return $('div.oxd-alert-content.oxd-alert-content--error > p');
    }


    async fillCredentials(username, password) {
        if (username) {
            await this.loginField.waitForDisplayed();
            await this.loginField.setValue(username);
        }

        if (password) {
            await this.passwordField.waitForDisplayed();
            await this.passwordField.setValue(password);
        }
    }

    async login(username, password) {
        await this.fillCredentials(username, password);
        await this.buttonSubmit.click();
    }

    async validLogin() {
        await this.login(this.loginForSystem, this.passwordForSystem);
    }

}

export default new LoginPage();
