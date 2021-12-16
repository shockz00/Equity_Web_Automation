import{ url, login_username, login_password } from '../../../../config'
import LoginPage from '../../../Page-Objects/Pages/LoginPage'
// import logo from '../../Page-Objects/Components/Logo'

/*describe('Login Failed Test',()=>{

     before(function(){
         cy.visit(url)
        

    })
 cy.pause
     it('should try to login with invalid credentials',()=>{
        LoginPage.login('invalid username','invalid password')

     })
    
     it('should display error message',()=>{
        LoginPage.displayErrorMessages()
     })

 })*/

describe('Login Success Test', ()=>{
  
     before(function(){
        cy.visit(url)
        

     })

     

    it('should Login to Application',()=>{
    LoginPage.Login(login_username, login_password)
    
    })
})