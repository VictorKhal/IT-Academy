import { $ } from '@wdio/globals'
import BasePage from './base.page';


class LoginPage extends BasePage {
   
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
        return $('div.oxd-alert-content.oxd-alert-content--error > p')
    }


    async fillCredentials(username, password) {
        if(username) {
            await this.loginField.waitForDisplayed();
            await this.loginField.setValue(username);
        }
        if(password) {
            await this.passwordField.waitForDisplayed();
            await this.passwordField.setValue(password);
        }
    }

    async login(username, password) {
        await this.fillCredentials(username, password);
        await this.buttonSubmit.click();
    }

    async goToLoginPage() {
        if(await (await browser.getWindowSize()).width < 1000) {
            await this.openRightMenuButton.waitForClickable();
            await this.openRightMenuButton.click();
            await this.rightMenuEnterButton.waitForClickable();
            await this.rightMenuEnterButton.click();
        } else {
            await this.enterButton.click();
        }
    }
}

export default new LoginPage();
