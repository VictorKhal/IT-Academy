import { browser, expect } from '@wdio/globals';
import BasePage from '../pageobjects/base.page.js';
import LoginPage from '../pageobjects/login.page.js';
import DashboardPage from '../pageobjects/dashboard.page.js';
import path from 'path';
import MyInfoPage from '../pageobjects/myInfo.page.js';
import { PERSONAL_CREDENTIALS_FOR_TEST } from '../../helpers/const.js';

const basePage = new BasePage ();

describe('Change user info', () => {
    
    it('Should change profile picture', async () => {
        await basePage.navigate();
        await LoginPage.validLogin();
        await DashboardPage.myInfoItem();
        await MyInfoPage.changeProfilePicture();
        const filePath = path.join(process.cwd(), './helpers/dragon.png');
        const remoteFilePath = await browser.uploadFile(filePath);
        const fileInput = await $('div > div:nth-child(2) > input.oxd-file-input');
        await fileInput.addValue(remoteFilePath)
        await MyInfoPage.profilePictureSaveChanges();
    });

    it ('Fields to be displayed', async () => {
        await MyInfoPage.choosePersonalDetails();
        await MyInfoPage.verifyPersonalDetailsFormIsVisible();
    }) 


    it ('Should fill personal details', async () => {
        await MyInfoPage.fillPersonalData(PERSONAL_CREDENTIALS_FOR_TEST);
        await MyInfoPage.savePersonalDetails();
    }) 
    
    it ('Fields to be displayed', async () => {
        await MyInfoPage.verifyPersonalDetailsValues();
    })
})