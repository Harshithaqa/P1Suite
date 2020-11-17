const { browser } = require("protractor");


describe('PSC P1testcases', function() {
	var obj=  require("./JsObjectpage.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
  it('psc application', function() {
   obj.getURL();
	//obj.getURL3();

  },500000);

  
 

//Test4 registration

using(d.Datadrivenregister, function (data, description) {
	it("User should registered successfully", function() {

		// obj.getURL();
		browser.ignoreSynchronization = true;
    	
		browser.sleep(5000);
	  
	  
	  obj.register.click().then(function(){
	   browser.sleep(3000);
	
	  });
	  
	  obj.languagedropdown.click().then(function(){
		browser.sleep(2000);
	
	  });
		
	  obj.english.click().then(function(){
		browser.sleep(1000);
	
	  });
		
	  obj.newemail.sendKeys(data.newemail)
		
	  obj.fn.sendKeys(data.fn)
	 
	 obj.ln.sendKeys(data.ln);
	  
	  obj.address1.sendKeys(data.address1);
	  
	  obj.address2.sendKeys(data.address2);
	  
	  obj.postalcode.sendKeys(data.postalcode);
	  
	  obj.city.sendKeys(data.city)
	  
	  obj.statedropdown.click().then(function(){
		browser.sleep(1000);
	
	  }); 
	  
	  obj.stateselection.click().then(function(){
		browser.sleep(1000);
	
		
	  }); 
	  
	  

	  obj.ch0.click().then(function(){
		browser.sleep(1000);
	
	  }); 
	obj.registerbutton.click().then(function(){
	 browser.sleep(5000);
	
	 });
	 expect(obj.resultUS.getText()).toBe(data.resultUS);
	 obj.resultUS.getText().then(function(text){
	 console.log(text);
	 browser.sleep(2000);
   
	 });

},250000);	
	});	

  
 using(d.Datadrivenmail, function (data, description) {
    it("Should navigate to account activation page", function() {
	//it('TS-'+description, function() {

		browser.waitForAngularEnabled(false);


			obj.getURL4();
			browser.sleep(3000);


		
			obj.entermailid.sendKeys(data.id).then(function(){
						   browser.sleep(2000);
						   }); 
		   obj.viewmail.click().then(function(){
							   browser.sleep(150000);
							 
				}); 
				obj.reload.click().then(function(){
					browser.sleep(25000);
				  
	 }); 
	 

				obj.openmail.click().then(function(){
				 browser.sleep(24000);
				 
				  }); 
				  browser.switchTo().frame(0);

				  browser.actions().mouseMove(obj.link).perform();
				  browser.actions().click(protractor.Button.RIGHT).perform();

				  browser.actions().mouseMove(obj.link).keyDown(protractor.Key.CONTROL).click().perform();
				  browser.actions().mouseMove(obj.link).keyDown(protractor.Key.CONTROL).click().keyUp(protractor.Key.CONTROL).perform();
							   
		/* obj.link.click().then(function(){
						browser.sleep(9000);

			 }); 
*/
	 
			 browser.getAllWindowHandles().then(function(handles){
				browser.waitForAngularEnabled(false);
			  browser.switchTo().window(handles[1]).then(function(){
				browser.sleep(9000);
				
			  });
			});
			
			expect(obj.accountactivation.getText()).toBe(data.accountactivation);
			 obj.accountactivation.getText().then(function(text){
			 console.log(text);
			 browser.sleep(2000);
		   
			 });
		
			
			},250000);

			it("Should successfully set the new password", function() {

		
		
			 browser.sleep(8000);

  			

			 
			 obj.activationpassword.sendKeys(data.activationpassword).then(function(){
			   browser.sleep(4000);
			 });
			 
			 obj.activationconfirmationpassword.sendKeys(data.activationconfirmationpassword).then(function(){
				browser.sleep(4000);
			  });
			  obj.activationemail.sendKeys(data.activationemailid).then(function(){
				browser.sleep(5000);
			   });
			   obj.activationpassword.sendKeys(data.activationpassword).then(function(){
				browser.sleep(4000);
			  });

			  obj.confirmbutton.click().then(function(){
				browser.sleep(5000);
	
				 });
				 
				 expect(obj.Confirmmessage.getText()).toBe(data.Confirmmessage);
			  obj.Confirmmessage.getText().then(function(text){
			  console.log(text);
				browser.sleep(1000);
			  });



				 obj.loginbut.click().then(function(){
					browser.sleep(10000);
				   
					});


		  },2500000);
	  });

	    	
//test1 - new user login




  using(d.Datadrivena, function (data, description) {
    it("Should logged in with new credentials and should land on Secure account page", function() {
//	 obj.getURL();
	 browser.ignoreSynchronization = true;
    	
    	   browser.sleep(8000);
    	 
      obj.email.sendKeys(data.email);
      obj.password.sendKeys(data.password).then(function(){
		browser.sleep(2000);
	  });
      obj.login.click().then(function(){
        browser.sleep(7000);
        
      });
	//  expect(obj.securepage.getText()).toBe(data.Securepage);
	  //obj.securepage.getText().then(function(text){
	  //console.log(text);
		//browser.sleep(1000);
	 // });

	},200000);

	it("Should successfully add the secure account", function() {

	obj.qa1.click().then(function(){
		browser.sleep(2000);
		}); 
	
	obj.selectqa1.click().then(function(){
		browser.sleep(2000);
		}); 
	
	obj.ans1.sendKeys(data.ans1).then(function(){
		browser.sleep(2000);
	});
	
	obj.qa2.click().then(function(){
		browser.sleep(2000);
		}); 
	
	obj.selectqa2.click().then(function(){
	  browser.sleep(2000);
	   });  
	
	obj.ans2.sendKeys(data.ans2).then(function(){
		browser.sleep(2000);
	});
	
	obj.qa3.click().then(function(){
		browser.sleep(2000);
		}); 
	
	obj.selectqa3.click().then(function(){
	  browser.sleep(2000);
	   });  
	
	obj.ans3.sendKeys(data.ans3).then(function(){
		browser.sleep(2000);
	});
	obj.secure1.click().then(function(){
		browser.sleep(5000);
		 });

		
		 expect(obj.securecomplete.getText()).toBe(data.securecomplete);
    obj.securecomplete.getText().then(function(text){
      console.log(text);
      browser.sleep(8000);
  
 }); 
  

		 
	obj.continue1.click().then(function(){
		browser.sleep(8000);
		 });    
	
	
     
   },250000);	
  
  });


//test2 - add student
  using(d.Datadrivenb, function (data, description) {
  it("Should successfully add the Student", function() {
 
	browser.sleep(5000);

	obj.state.click().then(function(){
		browser.sleep(5000);
		
		});
		obj.selectstate.click().then(function(){
		browser.sleep(5000);
		
		});
		obj.district.click().then(function(){
		  browser.sleep(5000);
		
		});
		obj.districtsulphur.click().then(function(){
		  browser.sleep(5000);
		
		});
		
		obj.studentid.sendKeys(data.studentid).then(function(){
		  browser.sleep(2000);
		
		});
		obj.fname.sendKeys(data.fname).then(function(){
		  browser.sleep(2000);
		
		});
		obj.lname.sendKeys(data.lname).then(function(){
		  browser.sleep(2000);
		
		});
		obj.relation.click().then(function(){
		browser.sleep(2000);
		});
		obj.relationselect.click().then(function(){
		browser.sleep(2000);
		});
		obj.studentbutton.click().then(function(){
		browser.sleep(5000);
		});
	  
  expect(obj.success.getText()).toBe(data.success);
  obj.success.getText().then(function(text){
	console.log(text);
	browser.sleep(5000);
  });

  //obj.closeadd.click().then(function(){
	//browser.sleep(2000);
	// }); 

	  
  obj.continue2.click().then(function(){
	browser.sleep(5000);
	 });    

	 obj.continue2.click().then(function(){
		browser.sleep(5000);
		 });    
	
  },200000);  
  });  
  
 

//test3 - payment method

  using(d.Datadrivenc, function (data, description) {
  it("Should successfully add the Payment methods", function() {

 

  obj.paymentdropdown.click().then(function(){
  browser.sleep(4000);
  });

  obj.paymentselection.click().then(function(){
  browser.sleep(4000);
  });

  obj.nickname.sendKeys(data.nickname).then(function(){
  browser.sleep(5000);
  });

  obj.cardnumber.sendKeys(data.cardnumber).then(function(){
  browser.sleep(5000);
  });

  obj.expirydate.sendKeys(data.expirydate).then(function(){
  browser.sleep(5000);
  });

  obj.cvv.sendKeys(data.cvv1).then(function(){
  browser.sleep(5000);
  });

  obj.checkbox1.click().then(function(){
  browser.sleep(5000);
  });

  obj.checkbox2.click().then(function(){
  browser.sleep(5000);
  });

  obj.addpaymentbutton.click().then(function(){
  browser.sleep(4000);
  });

  expect(obj.paymentmethodsuccess.getText()).toBe(data.paymentmethodsuccess);
  obj.paymentmethodsuccess.getText().then(function(text){
	console.log(text);
	browser.sleep(5000);
  });
 // obj.closeadd2.click().then(function(){
	//browser.sleep(5000);
	// });  
	 
	


  obj.continue2.click().then(function(){
	browser.sleep(5000);
	 });    
	 obj.continue2.click().then(function(){
		browser.sleep(5000);
		 });    

  },200000);
  });       
  
  using(d.Datadrivennotification, function (data, description) {
	it('TS-'+description, function() {
  
			 obj.mealtoggle.click().then(function(){
			 browser.sleep(9000);
			 });
			
				 obj.fundamo.click().then(function(){
				  browser.sleep(1000);
				   });
				obj.fundamoselect.click().then(function(){
					browser.sleep(1000);
					 });
					 obj.dayofmonth.click().then(function(){
					   browser.sleep(2000);
  
				   });
				   obj.dayofmonthselect.click().then(function(){
					browser.sleep(2000);
  
				}); 
				obj.updatebutton.click().then(function(){
				  browser.sleep(8000);
  
			  });

			  
				 expect(obj.notificationsuccess.getText()).toBe(data.result3);
				 obj.notificationsuccess.getText().then(function(text){
				   console.log(text);
				   browser.sleep(1000);
				 });
			
			  obj.continue2.click().then(function(){
				browser.sleep(2000);
				 });    
				 obj.gtd.click().then(function(){
					browser.sleep(15000);
					 });    
	
					 
	
					 obj.cancel.click().then(function(){
						browser.sleep(10000);
					 
					   });

					   obj.menu.click().then(function(){
						browser.sleep(15000);
						 });   
						

					 obj.logoutbutton.click().then(function(){
						browser.sleep(8000);
				  
					  });
			 
	  
	},200000);
  });
});
  
 
