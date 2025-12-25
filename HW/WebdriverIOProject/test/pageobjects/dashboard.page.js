import BasePage from './base.page';

class DashboardPage extends BasePage {
    get dashboardTitle() { 
        return $('div.oxd-topbar-header-title > span > h6');
    }
    get adminMenu() {
        return $('a[href*="admin"]');
    }

    async isOpened() {
        return this.dashboardTitle.isDisplayed();
    }

    async goToAdmin() {
        await this.click(this.adminMenu);
    }
}

export default new DashboardPage();
