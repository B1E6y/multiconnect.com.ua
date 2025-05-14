class armPage {

    get armBtn() {return $('div[class="col-6 p-3 cardItem"][data-product-id="3"]') }
    get arm() {return $('#cardId > div > div:nth-child(3) > div.card_info > h1') }
    get moreBtn() {return $('a[href="/home/more/go"]')}
    get version() {return $('/html/body/div[1]/div[2]/div[1]/section/div/div[1]/div[1]/div/div/a/div[1]/span[2]') }  
    get date() {return $('/html/body/div[1]/div[2]/div[1]/section/div/div[1]/div[1]/div/div/a/div[2]/span[2]')}
    get whatNew() {return $('[class="new-product-box min-height box2 armgo_box mobile_block"]')}
    get priceForm() {return $('[class="title roboto-bold mb-px-30"]')}
    get price() {return $('[class="col-6 position-relative row"]')}
   

    async armExists () {
        console.log("Does ARM Workplace button exists? " + await this.armBtn.isExisting());  
        }

        async armClickable () {
           console.log("Does ARM Workplace button clickable? " + await this.arm.isClickable());   
        }

        async armClick () {
            this.arm.click();  
        }

        async moreBtnClick () {
            this.moreBtn.click();  
        }

        async getVersion () {
            console.log("Version of ARM Workplace is: " + await this.version.getText());   
        }

        async getDate () {
            console.log("Version release date of ARM Workplace is: " + await this.date.getText());  
        }

        async newIs () {
            console.log("What new in this ARM Workplace update: " + await this.whatNew.getText());  
        }
        
        async priceScroll () {
            this.priceForm.scrollIntoView();  
        }

        async priceIs () {
            console.log("Price of ARM Workplace for a year for one user is: " + await this.price.getText());  
        }

}            

module.exports = new armPage()