class MyInfoNavigation {
   get profilePicture() {
       return $('.employee-image:nth-child(1)')
    }

    get personalDetails() {
       return $('div.orangehrm-tabs > div:nth-child(1) > a')
    }

    get contactDetails() {
       return $('div.orangehrm-tabs > div:nth-child(2) > a')
    }

    get emergencyContact() {
       return $('div.orangehrm-tabs > div:nth-child(3) > a')
    }
}