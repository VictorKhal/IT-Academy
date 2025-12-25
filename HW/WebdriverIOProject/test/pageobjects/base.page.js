// import { browser } from '@wdio/globals'

export default class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async navigate(endpoint = '') {
        return browser.url(`https://opensource-demo.orangehrmlive.com/${endpoint}`)
    }
}










// class BasePage {
//     async open() {
//         await browser.setTimeout({ 'pageLoad': 5000 })
//         await browser.url('https://opensource-demo.orangehrmlive.com')
//     }

//     async click(element) {
//         await element.waitForClickable()
//         await element.click()
//     }

//     async type(element, value) {
//         await element.waitForDisplayed()
//         await element.setValue(value)
//     }
// }

// module.exports = BasePage
