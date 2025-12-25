import BasePage from './base.page.js';

class AdminPage extends BasePage {
    get header() {
        return $('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
    }
    get addBtn() {
        return $('button=Add')
    }

    async isOpened() {
        return this.header.isDisplayed()
    }

    async clickAddUser() {
        await this.click(this.addBtn)
    }
}

export default new AdminPage();
