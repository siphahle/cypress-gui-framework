describe("Support form tests",() =>{
    it ("Opens the support form page and fills in the form",() =>{

        cy.visit("https://www.ayoba.me/contact-en/");

        //Text input Name id = zen_name
        cy.get('#zen_name').type("Siphahle");
        //Text input Email id = zen_email
        cy.get('#zen_email').type("siphahle.nomnganga@gmail.com");
        //Phone number drop down id = 360002776780
        cy.get('#360002776780')
        // Select Email Subject
        .select("General Feedback");
        //Select Phone Number Country Code
        cy.get('#phoneDialingCodes')
        .select("(+27) South Africa");
        //Enter Phone Number
        cy.get('#userPhoneNumber').type("073333333");
        //Enter Email Message
        cy.get('#zen_desc').type("My app is failing to load Andriod");
        //Click Submit Button
        cy.get('#zrf_submit').click();
        // Verify if the Success is displayed
        cy.get('#zrf-confirm').should(
            "contain.text","Your question has been sent, we will reply asap!"
        )

    });
   
}); 