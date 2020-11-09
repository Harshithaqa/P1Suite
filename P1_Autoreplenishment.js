describe('Protractor psc2', function() {
	var obj=  require("./JsObjectpage.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
  it('psc application', function() {
    obj.getURL();
   
  },500000);



//userlogin


using(d.Datadriven, function (data, description) {
	it('Autoreplenishment functioanlity', function() {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);

	//	obj.getURL();
		browser.sleep(4000);
		
		
		obj.email.sendKeys(data.email);
	  obj.password.sendKeys(data.password2);
	  obj.login.click().then(function(){
			 browser.sleep(25000);
			 
    });
    obj.cancel.click().then(function(){
      browser.sleep(8000);
    });


   //autoreplenishment

   obj.autoreplenish.click().then(function(){
    browser.sleep(8000);
    });
  
    
  
    obj.accountdrop.click().then(function(){
      browser.sleep(4000);
      });
  
      
  
    obj.selectmeal.click().then(function(){
      browser.sleep(4000);
      });
  
      obj.amttoadd.click().then(function(){
        browser.sleep(2000);
      });
      
      obj.add30.click().then(function(){
        browser.sleep(2000);
      });
  
   
      obj.ballevel.click().then(function(){
        browser.sleep(2000);
      });
  
  
      obj.ten$.click().then(function(){
        browser.sleep(2000);
      });
  
      obj.datepick.click().then(function(){
        browser.sleep(2000);
      });
      
  
  
      obj.dateselection.click().then(function(){
        browser.sleep(2000);
      });
      obj.paydrop.click().then(function(){
        browser.sleep(2000);
      });
      
      obj.paydrop1.click().then(function(){
        browser.sleep(4000);
      });
      obj.save.click().then(function(){
        browser.sleep(2000);
      });
      obj.autocheckbox.click().then(function(){
        browser.sleep(2000);
      });
     
  
     // expect(obj.saveauto.getText()).toBe(data.autosave);
  //	obj.saveauto.getText().then(function(text){
  //	console.log(text);
  //	browser.sleep(1000);
  //	});
    obj.saveauto.click().then(function(){
      browser.sleep(4000);
    });
    
  
  browser.refresh();
  browser.sleep(5000);
  
  obj.accountdrop.click().then(function(){
    browser.sleep(5000);
    });
  
    
  
  obj.selectfund.click().then(function(){
    browser.sleep(8000);
    });
  
   
  
    obj.ballevel1.click().then(function(){
      browser.sleep(2000);
    });
  
  
    obj.ten$1.click().then(function(){
      browser.sleep(2000);
    });
  
    obj.amttoadd1.click().then(function(){
      browser.sleep(2000);
    });
    
    obj.add301.click().then(function(){
      browser.sleep(2000);
    });
  
  
    obj.datepick.click().then(function(){
      browser.sleep(2000);
    });
    
    obj.dateselection.click().then(function(){
      browser.sleep(2000);
    });
    obj.paymentmethodrep.click().then(function(){
      browser.sleep(2000);
    });
    
    obj.paymentmethodrep1.click().then(function(){
      browser.sleep(4000);
    });
    
    obj.sav1.click().then(function(){
      browser.sleep(4000);
    });
    obj.autocheckbox.click().then(function(){
      browser.sleep(2000);
    });
    obj.saveauto.click().then(function(){
      browser.sleep(8000);
    });
  
    obj.toggleoff.click().then(function(){
      browser.sleep(2000);
    });
  
    obj.yesbutton.click().then(function(){
      browser.sleep(6000);
    });
   
  
    obj.autoclose.click().then(function(){
      browser.sleep(8000);
    });
  
  
   // browser.switchTo().alert().accept().then(function(){
  
    //}
  
    browser.executeScript('window.scrollTo(0,10000);').then(function () {
  
      obj.turnoffauto.click().then(function(){
        browser.sleep(3000);
        });
      });
        obj.yesbutton.click().then(function(){
          browser.sleep(6000);
        });
        obj.viewallhistory.click().then(function(){
          browser.sleep(4000);
        });
        obj.typedrop.click().then(function(){
          browser.sleep(4000);
        });
        obj.typedropauto.click().then(function(){
          browser.sleep(4000);
        });
        obj.daysdrop.click().then(function(){
          browser.sleep(4000);
        });
        obj.daysdrop90.click().then(function(){
          browser.sleep(4000);
        });
        obj.createpdfbuttonpay.click().then(function(){
          browser.sleep(4000);
        });
        obj.sendemail.click().then(function(){
          browser.sleep(8000);
        });
        obj.ok2.click().then(function(){
          browser.sleep(5000);
        });
        obj.createpdfbuttonpay.click().then(function(){
          browser.sleep(5000);
        });
        obj.downloadnow.click().then(function(){
          browser.sleep(5000);
        });
        obj.createexcelpay.click().then(function(){
          browser.sleep(4000);
        });
        obj.sendemail.click().then(function(){
          browser.sleep(8000);
        });
        obj.ok2.click().then(function(){
          browser.sleep(4000);
        });
        obj.createexcelpay.click().then(function(){
          browser.sleep(4000);
        });
        obj.downloadnow.click().then(function(){
          browser.sleep(15000);
        });
    /*    obj.returntodashboard.click().then(function(){
          browser.sleep(10000);
          });
   
          obj.cancel.click().then(function(){
            browser.sleep(8000);
         
           });
*/

           obj.logoutbutton.click().then(function(){
            browser.sleep(8000);
            
            });
            
  },2500000);
  
  
  });



});

