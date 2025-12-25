import BasePage from './base.page';

class MyInfoPage extends BasePage {
    get header() {
        return $('h6=Personal Details')
    }
    get myInfoMenu() {
        return $('a[href*="viewMyDetails"]')
    }

    async openMyInfo() {
        await this.click(this.myInfoMenu)
    }

    async isOpened() {
        return this.header.isDisplayed()
    }
}

module.exports = new MyInfoPage()
