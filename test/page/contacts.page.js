class contactsPage {

        get contacts() {return $('a[href="https://multiconnect.com.ua/content/25-kontakty"]') }
        get contactsTitle() {return $('[class="rte"] h1') }
        get address() {return $('#center_column > div > div > p:nth-child(5)')}
        get schedule() {return $('#center_column > div > div > p:nth-child(8)') }  
        get phoneNumber() {return $('[class="binct-phone-number-1"][data-binct-original="1"]')}
        get email() {return $('#center_column > div > div > p:nth-child(12) > a')}
        get companyMap() {return $('img[src="https://multiconnect.com.ua/img/cms/%D0%BA%D0%B0%D1%80%D1%82%D0%B0%203_1.jpg"]')}
        get warehouse() {return $('#center_column > div > div > p:nth-child(17)')}
        get houseSchedule() {return $('#center_column > div > div > p:nth-child(20)')}
        get houseMap() {return $('img[src="https://multiconnect.com.ua/img/cms/%D0%97%D0%B8%D0%BD%D0%B0%20%D0%91%D0%91.jpg"]')}
        
        async contactsExists () {
            console.log("Does Contacts button exists? " + await this.contacts.isExisting());  
            }

            async contactsClickable () {
               console.log("Does Contacts button clickable? " + await this.contacts.isClickable());   
            }

            async contactsClick () {
                this.contacts.click();  
            }

            async contactsTitleIs () {
                console.log("Contacts title is: " + await this.contactsTitle.getText());   
            }

            async addressIs () {
                console.log("Address of company is: " + await this.address.getText());  
            }

            async scheduleIs () {
                console.log("Work schedule is: " + await this.schedule.getText());  
            }
    
            async phoneNumberIs () {
                console.log("Phone number is: " + await this.phoneNumber.getText());  
            }

            async emailIs () {
                console.log("Email is: " + await this.email.getText());  
            }

            async companyMapIs () {
                console.log("Company map is displayed? " + await this.companyMap.isDisplayedInViewport());  
            }

            async houseAddreslIs () {
                console.log("Address of warehouse is: " + await this.warehouse.getText());  
            }

            async houseScheduleIs () {
                console.log("Warehouse schedule is: " + await this.houseSchedule.getText());  
            }

            async houseMapIs () {
                console.log("Warehouse map is displayed? " + await this.houseMap.isDisplayedInViewport());  
            }


            


    
}            

module.exports = new contactsPage()