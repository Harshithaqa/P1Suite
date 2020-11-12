const { browser } = require("protractor");

describe('PSCpageobjects', function() {
	var obj=  require("./JsObjectpage.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  

  using(d.Datadrivend, function (data, description) {
    it("Should add and remove the payment methods successfully",async function() {
      obj.getURL();
browser.sleep(6000);

browser.waitForAngularEnabled(false);

    //  browser.ignoreSynchronization = true;

        var EC = protractor.ExpectedConditions;

    await obj.email.sendKeys(data.email2);
    await  obj.password.sendKeys(data.password1);

    await  obj.login.click();
       browser.sleep(10000);

      await obj.cancel.click();
          
      browser.sleep(8000);

      
        
      await  obj.addcart.click();
      
      await obj.amount.sendKeys(data.mealamount);
      await obj.addtocartbutton.click();
      await  obj.clickoncart.click();
      await  obj.clickonselect.click();
    
    
    
      await obj.continue.click();
      await obj.paymentcheckbox.click();
      await obj.makepayment.click();

      await obj.rtdbutton.click();

    },200000);
});

/*
using(d.Datadrivenmail, function (data, description) {
    it("Should navigate to account activation page", function() {
	//it('TS-'+description, function() {
		browser.waitForAngularEnabled(false);

	 browser.ignoreSynchronization = true;
	 browser.sleep(8000);

			obj.getURL4();
			browser.sleep(3000);

		
			 obj.entermailid.sendKeys(data.id2).then(function(){
							browser.sleep(8000);
							}); 
			obj.viewmail.click().then(function(){
								browser.sleep(8000);
							  
                 }); 
                 

                 obj.openmail.click().then(function(){
                  browser.sleep(24000);
                  
                   }); 
                   browser.switchTo().frame(0);

                 //  browser.switchTo().frame(element(by.xpath("//body/div[@id='root']/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/iframe[1]")).getWebElement());

                                      expect(obj.body.getText()).toContain("(Food Service)")
                                      obj.body.getText().then(function(text){
                                        console.log(text);
                                              browser.sleep(5000);
                                      });
                  obj.payschool.click().then(function(){
                      browser.sleep(24000);
                                        
                          }); 
                          


				   

			},250000);


        });*/
      });








        
 



















