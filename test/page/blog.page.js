class blogPage {

        get home() {return $('a[href="https://multiconnect.com.ua/uk/smartblog"]')}
        get blog() {return $('a[href="https://multiconnect.com.ua/smartblog-category"]') }
        get btnOne() {return $('a[href="https://multiconnect.com.ua/uk/smartblog/35/MultiConnect-in-social-media"]') }
        get btnOneTitle() {return $('h2[class="title_block_exclusive"] a[href="https://multiconnect.com.ua/uk/smartblog/35/MultiConnect-in-social-media"]')}
        get btnTwo() {return $('a[href="https://multiconnect.com.ua/uk/smartblog/34/Kak-pravilno-vybrat-i-zakazat-rvd"]')}
        get btnTwoTitle() {return $('h2[class="title_block_exclusive"] a[href="https://multiconnect.com.ua/uk/smartblog/34/Kak-pravilno-vybrat-i-zakazat-rvd"]')}
        get btnThree() {return $('a[href="https://multiconnect.com.ua/uk/smartblog/33/pravila-hranenia-rvd"]') } 
        get btnThreeTitle() {return $('h2[class="title_block_exclusive"] a[href="https://multiconnect.com.ua/uk/smartblog/33/pravila-hranenia-rvd"]')} 
        get btnFour() {return $('a[href="https://multiconnect.com.ua/uk/smartblog/31/fitingi-dlya-rvd"]')}
        get btnFourTitle() {return $('h2[class="title_block_exclusive"] a[href="https://multiconnect.com.ua/uk/smartblog/31/fitingi-dlya-rvd"]')}
        get btnFive() {return $('a[href="https://multiconnect.com.ua/uk/smartblog/30/rvd"]')}
        get btnFiveTitle() {return $('h2[class="title_block_exclusive"] a[href="https://multiconnect.com.ua/uk/smartblog/30/rvd"]')}
        get btnSix() {return $('a[href="https://multiconnect.com.ua/uk/smartblog/29/promyslovi-shlangy"]')}
        get btnSixTitle() {return $('h2[class="title_block_exclusive"] a[href="https://multiconnect.com.ua/uk/smartblog/29/promyslovi-shlangy"]')}
        

            async blogExists () {
            console.log("Does Blog button exists? " + await this.blog.isExisting());  
            }

            async blogClickable () {
               console.log("Does Blog button clickable? " + await this.blog.isClickable());   
            }

            async blogClick () {
                this.blog.click();  
            }

            async homeText () {
                console.log("Text with home is: " + await this.home.getText());  
                }

            async btnOneIs () {
                console.log("btnOne is displayed: " + await this.btnOne.isDisplayed());   
            }

            async btnOneTitleIs () {
                console.log("btnOne title is: " + await this.btnOneTitle.getText());   
            }

            async btnTwoIs () {
                console.log("btnTwo is displayed: " + await this.btnTwo.isDisplayed());  
            }

            async btnTwoTitleIs () {
                console.log("btnTwo title is: " + await this.btnTwoTitle.getText());   
            }

            async btnThreeIs () {
                console.log("btnThree is displayed: " + await this.btnThree.isDisplayed());  
            }

            async btnThreeTitleIs () {
                console.log("btnThree title is: " + await this.btnThreeTitle.getText());   
            }
            
            async btnFourIs () {
                console.log("btnFour is displayed: " + await this.btnFour.isDisplayed());  
            }

            async btnFourTitleIs () {
                console.log("btnFour title is: " + await this.btnFourTitle.getText());   
            }
    
            async btnFiveIs () {
                console.log("btnFive is displayed: " + await this.btnFive.isDisplayed());  
            }

            async btnFiveTitleIs () {
                console.log("btnFive title is: " + await this.btnFiveTitle.getText());   
            }

            async btnSixIs () {
                console.log("btnSix is displayed: " + await this.btnSix.isDisplayed());  
            }

            async btnSixTitleIs () {
                console.log("btnSix title is: " + await this.btnSixTitle.getText());   
            }

  
}            

module.exports = new blogPage()