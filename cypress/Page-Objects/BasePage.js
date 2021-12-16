
export default class BasePage {

    static pause(ms){
        cy.wait(ms)
    }

    static loginfo(Message){
        cy.log(Message)
    }

   /* static setMobileViewport(){
        cy.viewport('iphone-x')
    }

    static setTabletViewport(){
        cy.viewport('ipad-2')
    }*/

    static setDesktopViewport(){
        cy.viewport('macbook-13')
    }

    static setLargeDesktopViewport(){
        cy.viewport( 1980, 1080 )
    }
}