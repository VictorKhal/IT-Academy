import { expect } from '@wdio/globals';
import BasePage from '../pageobjects/base.page.js';
import LoginPage from '../pageobjects/login.page.js';
import DashboardPage from '../pageobjects/dashboard.page.js'
import { WRONG_CREDENTIAL_NOTIFICATION, CREDENTIALS, TITLE_DASHBOARD } from '../../helpers/const.js';

const basePage = new BasePage ();

describe('Login with invalid credentials', async function() {
    it('should get error notification "Invalid credentials"', async () => {
        await basePage.navigate();
        await LoginPage.login(CREDENTIALS.invalidCredentials.login, CREDENTIALS.invalidCredentials.password);
        await expect(await LoginPage.wrongCredentialNotification).toHaveText(WRONG_CREDENTIAL_NOTIFICATION);
    })
})

describe('Login with valid credentials', async function() {
    it('should open dashboard page after login', async () => {
        await basePage.navigate();
        await LoginPage.validLogin();
        await expect(DashboardPage.dashboardTitle).toHaveText(TITLE_DASHBOARD);
    })
})
