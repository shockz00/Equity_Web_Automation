import BasePage  from "../BasePage";
Cypress.config('pageLoadTimeout', 100000)

export default class BuyGoodsPage extends BasePage{

    static buygoods(incorrect_till,tillnumber){
        cy.buygoods(incorrect_till,tillnumber)
    }

    static Buygoods(tillnumber,amount){
        cy.BuyGoods(tillnumber),amount
    }
        
    static displaygoodserror() {
        cy.isVisible("'The amount cannot be less'")
    }

}


