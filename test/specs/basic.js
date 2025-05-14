const blogPage = require('../page/blog.page.js')
const contactsPage = require('../page/contacts.page.js')

describe("Should check the services of multiconnect.com.ua" , async () => {
    
    it('Go to website multiconnect.com.ua', async () => {
        await browser.url('https://multiconnect.com.ua/');
        await browser.maximizeWindow();
        await browser.pause(100);
        })

    it('Should check the form on Blog page', 
        async () => {

        await blogPage.blogExists();
        await browser.pause(100);

        await blogPage.blogClickable();
        await browser.pause(100);

        await blogPage.blogClick();
        await browser.pause(100);

        await blogPage.homeText();
        await browser.pause(100);  

        await blogPage.btnOneIs();
        await browser.pause(100);

        await blogPage.btnOneTitleIs();
        await browser.pause(100);

        await blogPage.btnTwoIs();
        await browser.pause(100);

        await blogPage.btnTwoTitleIs();
        await browser.pause(100);

        await blogPage.btnThreeIs();
        await browser.pause(100);

        await blogPage.btnThreeTitleIs();
        await browser.pause(100);

        await blogPage.btnFourIs();
        await browser.pause(100);

        await blogPage.btnFourTitleIs();
        await browser.pause(100);

        await blogPage.btnFiveIs();
        await browser.pause(100);

        await blogPage.btnFiveTitleIs();
        await browser.pause(100);

        await blogPage.btnSixIs();
        await browser.pause(100);

        await blogPage.btnSixTitleIs();
        await browser.back();
        })

    it('Should check the Сontacts page', 
        async () => {
    
        await contactsPage.contactsExists();
        await browser.pause(100);
    
        await contactsPage.contactsClickable();
        await browser.pause(100);
    
        await contactsPage.contactsClick();
        await browser.pause(100);
    
        await contactsPage.contactsTitleIs();
        await browser.pause(100);
    
        await contactsPage.addressIs();
        await browser.pause(100);
    
        await contactsPage.scheduleIs();
        await browser.pause(100);
    
        await contactsPage.phoneNumberIs();
        await browser.pause(100);

        await contactsPage.emailIs();
        await browser.pause(100);
 
        await contactsPage.companyMapIs();
        await browser.pause(100);

        await contactsPage.houseAddreslIs();
        await browser.pause(100);

        await contactsPage.houseScheduleIs();
        await browser.pause(100);

        await contactsPage.houseMapIs();
        await browser.back();
        })    

        }   
)
