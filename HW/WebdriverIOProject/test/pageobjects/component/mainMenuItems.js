import { $ } from '@wdio/globals'
import Base from '../base.page.js';

class MainMenu extends Base {
    get adminItem() {
        return $('div.oxd-sidepanel-body > ul > li:nth-child(1) > a');
    }

    get pimItem() {
        return $('div.oxd-sidepanel-body > ul > li:nth-child(2) > a');
    }

    get leaveItem() {
        return $('div.oxd-sidepanel-body > ul > li:nth-child(3) > a');
    }

    get timeItem() {
        return $('div.oxd-sidepanel-body > ul > li:nth-child(4) > a');
    }

    get recruitmentItem() {
        return $('div.oxd-sidepanel-body > ul > li:nth-child(5) > a');
    }

    get myInfoItem() {
        return $('div.oxd-sidepanel-body > ul > li:nth-child(6) > a');
    }

    get performanceItem() {
        return $('div.oxd-sidepanel-body > ul > li:nth-child(7) > a');
    }

    get dashboardItem() {
        return $('div.oxd-sidepanel-body > ul > li:nth-child(8) > a');
    }

    get directoryItem() {
        return $('div.oxd-sidepanel-body > ul > li:nth-child(9) > a');
    }

    get maintenanceItem() {
        return $('div.oxd-sidepanel-body > ul > li:nth-child(10) > a');
    }

    get claimItem() {
        return $('div.oxd-sidepanel-body > ul > li:nth-child(11) > a');
    }
    get buzzItem() {
        return $('div.oxd-sidepanel-body > ul > li:nth-child(12) > a');
    }

}

export default new MainMenu();