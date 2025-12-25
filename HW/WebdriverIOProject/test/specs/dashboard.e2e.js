import { browser, expect } from '@wdio/globals';
import BasePage from '../pageobjects/base.page.js';``
import LoginPage from '../pageobjects/login.page.js';
import DashboardPage from '../pageobjects/dashboard.page.js'
// import AdminPage from '../pageobjects/admin.page.js'
import { TITLE_DASHBOARD, TITLE_ADMIN, TITLE_PIM, TITLE_LEAVE, TITLE_TIME, TITLE_RECRUITMENT, TITLE_MY_INFO, TITLE_PERFORMANCE, TITLE_DIRECTORY, TITLE_CLAIM, TITLE_BUZZ } from '../../helpers/const.js';

const basePage = new BasePage ();

describe('Dashboard functionality', () => {
    it('Navigate to Admin page', async () => {

        await basePage.navigate();
        await LoginPage.validLogin();
        await DashboardPage.adminItem();
        await expect(DashboardPage.dashboardTitle).toHaveText(TITLE_ADMIN);
        // await browser.pause(250); // без паузы не проходит
        // expect(await AdminPage.isOpened()).toBe(true);
    })

    it('Navigate to PIM page', async () => {
        await DashboardPage.pimItem();
        // browser.pause(10000);
        await expect(DashboardPage.dashboardTitle).toHaveText(TITLE_PIM);
    })

    it('Navigate to Leave page', async () => {
        await DashboardPage.leaveItem();
        // browser.pause(10000);
        await expect(DashboardPage.dashboardTitle).toHaveText(TITLE_LEAVE);
    })

    it('Navigate to Time page', async () => {
        await DashboardPage.timeItem();
        await expect(DashboardPage.dashboardTitle).toHaveText(TITLE_TIME);
    })

    it('Navigate to Recruitment page', async () => {
        await DashboardPage.recruitmentItem();
        await expect(DashboardPage.dashboardTitle).toHaveText(TITLE_RECRUITMENT);
    })

    it('Navigate to My info page', async () => {
        await DashboardPage.myInfoItem();
        await expect(DashboardPage.dashboardTitle).toHaveText(TITLE_MY_INFO);
    })

    it('Navigate to Performance page', async () => {
        await DashboardPage.performanceItem();
        await expect(DashboardPage.dashboardTitle).toHaveText(TITLE_PERFORMANCE);
    })

    it('Navigate to Dashboard page', async () => {
        await DashboardPage.dashboardItem();
        await expect(DashboardPage.dashboardTitle).toHaveText(TITLE_DASHBOARD);
    })

    it('Navigate to Directory page', async () => {
        await DashboardPage.directoryItem();
        await expect(DashboardPage.dashboardTitle).toHaveText(TITLE_DIRECTORY);
    })

    it('Navigate to Claim page', async () => {
        await DashboardPage.claimItem();
        await expect(DashboardPage.dashboardTitle).toHaveText(TITLE_CLAIM);
    })

    it('Navigate to Buzz page', async () => {
        await DashboardPage.buzzItem();
        await expect(DashboardPage.dashboardTitle).toHaveText(TITLE_BUZZ);
    })

    // it('Admin Add button exists', async () => {
    //     const AdminPage = require('../pageobjects/component/admin.page.js')
    //     expect(await AdminPage.addBtn.isDisplayed()).toBe(true)
    // })
})
