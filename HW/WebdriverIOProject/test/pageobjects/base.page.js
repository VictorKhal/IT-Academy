// import { browser } from '@wdio/globals'

export default class BasePage {
    async navigate(endpoint = '') {
        return browser.url(`https://opensource-demo.orangehrmlive.com/${endpoint}`)
    }
}