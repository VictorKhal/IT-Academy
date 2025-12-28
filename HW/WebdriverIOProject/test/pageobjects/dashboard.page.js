import BasePage from './base.page';
import MainMenu from './component/mainMenuItems';

class DashboardPage extends BasePage {
    get dashboardTitle() { 
        return $('div.oxd-topbar-header-title > span > h6:nth-child(1)');
    }
    
    async isOpened() {
        return this.dashboardTitle.isDisplayed();
    }

    async adminItem() {
        await MainMenu.adminItem.click();
    }

    async pimItem() {
        await MainMenu.pimItem.click();
    }


    async leaveItem() {
        await MainMenu.leaveItem.click();
    }

    async timeItem() {
        await MainMenu.timeItem.click();
    }

    async recruitmentItem() {
        await MainMenu.recruitmentItem.click();
    }

    async myInfoItem() {
        await MainMenu.myInfoItem.click();
    }

    async performanceItem() {
        await MainMenu.performanceItem.click();
    }

    async dashboardItem() {
        await MainMenu.dashboardItem.click();
    }

    async directoryItem() {
        await MainMenu.directoryItem.click();
    }

    async maintenanceItem() {
        await MainMenu.maintenanceItem.click();
    }

    async claimItem() {
        await MainMenu.claimItem.click();
    }
    async buzzItem() {
        await MainMenu.buzzItem.click();
    }

}

export default new DashboardPage();
