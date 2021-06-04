declare namespsce Cypress{
    interface Chainable<Subject =any>{
        /**
         * Click DOM Element in the website application
         * @example
         * cy.login('email','password').click()  //Click button
         */
       login(email: string, password: string Chainable<Subject>)
    }

}