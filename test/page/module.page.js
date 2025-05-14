class modulePage {

    get moduleBtn() {return $('div[class="col-6 p-3 cardItem"][data-product-id="2"]') }
    get module() {return $('#cardId > div > div:nth-child(4) > div.card_info > h1') }
    get moreBtn() {return $('a[href="/home/more/sms"]')}
    get version() {return $('/html/body/div[1]/div[2]/div[1]/section/div/div[1]/div[1]/div/div/a/div[1]/span[2]') }  
    get date() {return $('/html/body/div[1]/div[2]/div[1]/section/div/div[1]/div[1]/div/div/a/div[2]/span[2]')}
    get whatNew() {return $('[class="new-product-box min-height box2 armgo_box mobile_block"]')}
    get priceForm() {return $('[class="title roboto-bold mb-px-30"]')}
    get price() {return $('[class="col-6 position-relative row"]')}
   
    

    async moduleExists () {
        console.log("Does Matching Module Server button exists? " + await this.moduleBtn.isExisting());  
        }

        async moduleClickable () {
           console.log("Does Matching Module Server button clickable? " + await this.module.isClickable());   
        }

        async moduleClick () {
            this.module.click();  
        }

        async moreBtnClick () {
            this.moreBtn.click();  
        }

        async getVersion () {
            console.log("Version of Matching Module Server is: " + await this.version.getText());   
        }

        async getDate () {
            console.log("Version release date of Matching Module Server is: " + await this.date.getText());  
        }

        async newIs () {
            console.log("What new in this Matching Module Server update: " + await this.whatNew.getText());  
        }

        async priceScroll () {
            this.priceForm.scrollIntoView();  
        }

        async priceIs () {
            console.log("Price of Matching Module Server for a year for one user is: " + await this.price.getText());  
        }

        
        
        

}            

module.exports = new modulePage()