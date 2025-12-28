import BasePage from './base.page';
import {PERSONAL_CREDENTIALS_FOR_TEST} from '../../helpers/const.js'

class MyInfoPage extends BasePage {
    
    get profilePicture() {
       return $('.employee-image:nth-child(1)')
    }
    get profilePictureButtonAddNewPicture() {
        return $('button.oxd-icon-button.oxd-icon-button--solid-main.employee-image-action')
    }
    
    get profilePictureSave() {
        return $('button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space')
    }

    get personalDetails() {
       return $('div.orangehrm-tabs > div:nth-child(1) > a')
    }

    get personalDetailsFirstName() {
        return $('input[name="firstName"]')
    }
    
    get personalDetailsMiddleName() {
        return $('input[name="middleName"]')
    }
    
    get personalDetailsLastName() {
        return $('input[name="lastName"]')
    }

    get personalDetailsEmployeeId() {
        return $('//label[text()="Employee Id"]/following::input[1]')
    }

    get personalDetailsOthersId() {
        return $('//label[text()="Other Id"]/following::input[1]')
    }

    get personalDetailsDriverLicenseNumber() {
        return $(`//label[text()="Driver's License Number"]/following::input[1]`)
    }

    get personalDetailsLicenseExpiryDate() {
        return $(`//label[text()="License Expiry Date"]/following::input[1]`)
    }

    get personalDetailsNationality() {
        // return $(`//label[text()="Nationality"]/following::div[contains(@class,"oxd-select-text")][1]`)
        return $(`(//div[@class="oxd-select-wrapper"])[1]`);
    }

    get personalDetailsMartialStatus() {
        return $(`(//div[@class="oxd-select-wrapper"])[2]`);
        // return $(`//label[text()="Marital Status"]/following::div[contains(@class,"oxd-select-text")][1]`)
    }

    get personalDetailsDateOfBirth() {
        return $(`//label[text()="Date of Birth"]/following::input[1]`)
    }

    get personalDetailsGenderMale() {
        return $(`//label[normalize-space()="Male"]/input`)
    }

    get personalDetailsGenderFemale() {
        return $(`//label[normalize-space()="Female"]/input`)
    }

    get personalDetailsSaveButton() {
        return $(`(//button[normalize-space()="Save"])[1]`)
    }


    async changeProfilePicture() {
        await this.profilePicture.click()
    }

    async buttonAddPicture() {
        await this.profilePictureButtonAddNewPicture.click()
    }

    async profilePictureSaveChanges() {
        await this.profilePictureSave.click()
    }

    async verifyPersonalDetailsFormIsVisible() {
    await expect(this.personalDetailsFirstName).toBeDisplayed();
    await expect(this.personalDetailsLastName).toBeDisplayed();
    await expect(this.personalDetailsEmployeeId).toBeDisplayed();
    await expect(this.personalDetailsSaveButton).toBeDisplayed();
    }

    async choosePersonalDetails() {
        await this.personalDetails.click()
    }

    async clearField() {
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }

    async fillPersonalData() {

        // (firstName)
            await this.personalDetailsFirstName.waitForDisplayed();
            await this.personalDetailsFirstName.click();
            await this.clearField();
            await this.personalDetailsFirstName.setValue(PERSONAL_CREDENTIALS_FOR_TEST.firstName);

        // (middleName)
            await this.personalDetailsMiddleName.waitForDisplayed();
            await this.personalDetailsMiddleName.click();
            await this.clearField();
            await this.personalDetailsMiddleName.setValue(PERSONAL_CREDENTIALS_FOR_TEST.middleName);

        // (lastName)
            await this.personalDetailsLastName.waitForDisplayed();
            await this.personalDetailsLastName.click();
            await this.clearField();
            await this.personalDetailsLastName.setValue(PERSONAL_CREDENTIALS_FOR_TEST.lastName);

        // (employeeId)
            await this.personalDetailsEmployeeId.waitForDisplayed();
            await this.personalDetailsEmployeeId.click();
            await this.clearField();
            await this.personalDetailsEmployeeId.setValue(PERSONAL_CREDENTIALS_FOR_TEST.employeeId);

        // (otherId)
            await this.personalDetailsOthersId.waitForDisplayed();
            await this.personalDetailsOthersId.click();
            await this.clearField();
            await this.personalDetailsOthersId.setValue(PERSONAL_CREDENTIALS_FOR_TEST.otherId);

        // (driverLicense)
            await this.personalDetailsDriverLicenseNumber.waitForDisplayed();
             await this.personalDetailsDriverLicenseNumber.click();
            await this.clearField();
            await this.personalDetailsDriverLicenseNumber.setValue(PERSONAL_CREDENTIALS_FOR_TEST.driverLicense);

        // (licenseExpiry)
            await this.personalDetailsLicenseExpiryDate.click();
            await this.clearField();
            await this.personalDetailsLicenseExpiryDate.setValue(PERSONAL_CREDENTIALS_FOR_TEST.licenseExpiry);
            await this.personalDetailsLicenseExpiryDate.click();

        // (nationality)
            // await this.selectDropdown(this.personalDetailsNationality, PERSONAL_CREDENTIALS_FOR_TEST.nationality);
            // await this.selectDropdown(PERSONAL_CREDENTIALS_FOR_TEST.nationality);

        // (maritalStatus)
            // await this.selectDropdown(this.personalDetailsMaritalStatus, PERSONAL_CREDENTIALS_FOR_TEST.maritalStatus);

        // (dateOfBirth)
            await this.personalDetailsDateOfBirth.click();
            await this.clearField();
            await this.personalDetailsDateOfBirth.setValue(PERSONAL_CREDENTIALS_FOR_TEST.dateOfBirth);
            await this.personalDetailsDateOfBirth.click();

        // (gender)
            // await this.selectGender(PERSONAL_CREDENTIALS_FOR_TEST.gender);
    
    }

    async verifyPersonalDetailsValues() {
    
        await expect(this.personalDetailsFirstName).toHaveValue(PERSONAL_CREDENTIALS_FOR_TEST.firstName);

        await expect(this.personalDetailsMiddleName).toHaveValue(PERSONAL_CREDENTIALS_FOR_TEST.middleName);

        await expect(this.personalDetailsLastName).toHaveValue(PERSONAL_CREDENTIALS_FOR_TEST.lastName);

        await expect(this.personalDetailsEmployeeId).toHaveValue(PERSONAL_CREDENTIALS_FOR_TEST.employeeId);

        await expect(this.personalDetailsOthersId).toHaveValue(PERSONAL_CREDENTIALS_FOR_TEST.otherId);
    
        await expect(this.personalDetailsDriverLicenseNumber).toHaveValue(PERSONAL_CREDENTIALS_FOR_TEST.driverLicense);
    
        await expect(this.personalDetailsLicenseExpiryDate).toHaveValue(PERSONAL_CREDENTIALS_FOR_TEST.licenseExpiry);

        await expect(this.personalDetailsDateOfBirth).toHaveValue(PERSONAL_CREDENTIALS_FOR_TEST.dateOfBirth);
    }
    


    async selectDropdown(dropdownSelector, value) {
        const dropdown = await $('.oxd-select-text');
        await dropdown.waitForClickable();
        await dropdown.click();

        const listbox = await $('div[role="listbox"]');
        await listbox.waitForDisplayed();

        const option = await $(`//div[@role="listbox" and text()="${value}"]`);
        await option.scrollIntoView();
        await option.click();
    }

    async selectGender(gender) {
        if (gender.toLowerCase() === 'male') {
            await this.personalDetailsGenderMale.click();
        }
        if (gender.toLowerCase() === 'female') {
            await this.personalDetailsGenderFemale.click();
        }
    }

    async savePersonalDetails() {
        await this.personalDetailsSaveButton.waitForClickable();
        await this.personalDetailsSaveButton.click();
    }
}

export default new MyInfoPage();
