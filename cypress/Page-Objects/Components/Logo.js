export default class Logo {

    static ClickOnLogo(){
        cy.get('//body/app-root[1]/div[1]/app-access[1]/div[1]/div[1]/div[1]/app-discover-information[1]/div[1]/div[1]/div[1]/img[1]').click()
    }

}