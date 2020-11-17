const { browser } = require("protractor");


describe('PSC Priority 2 testcases', function() {
	var obj=  require("./JsObjectpage.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
 

//Payment History


  using(d.Datadrivenfee, function (data, description) {
    it('TS-'+description, function() {

      obj.getURL();
      browser.sleep(10000);

      browser.waitForAngularEnabled(false);

    	obj.email.sendKeys(data.emailf).then(function(){
        browser.sleep(2000);
      });

      obj.password.sendKeys(data.passwordf).then(function(){
	    	browser.sleep(2000);
      });
      
      obj.login.click().then(function(){
         browser.sleep(25000);

        });
        obj.cancel.click().then(function(){
          browser.sleep(8000);
 
         });

//Meal History
/*
obj.addcart.click().then(function(){
  browser.sleep(5000);
  
  });

obj.amount.sendKeys(data.amount21);
//.then(function(){
//	browser.sleep(1000);
  
  //});
obj.addtocartbutton.click().then(function(){
  browser.sleep(5000);
  
});

obj.clickoncart.click().then(function(){
browser.sleep(8000);

});
expect(obj.mealcartamount.getText()).toBe(data.amou);
          obj.mealcartamount.getText().then(function(text){
          console.log(text);
          browser.sleep(8000);
        
          });


  obj.clickonselect.click().then(function(){
    browser.sleep(2000);
  });

  obj.continue.click().then(function(){
    browser.sleep(4000);
  });
  obj.paymentcheckbox.click().then(function(){
    browser.sleep(4000);
  });
  obj.makepayment.click().then(function(){
    browser.sleep(10000);
  });

  obj.returntodashboardbutton.click().then(function(){
    browser.sleep(10000);
  });

  obj.cancel.click().then(function(){
    browser.sleep(7000);
  });
  obj.paymenthistory.click().then(function(){
      browser.sleep(3000);
      });
    
      obj.typesel.click().then(function(){
        browser.sleep(2000);
      });
    
      obj.mealselect.click().then(function(){
        browser.sleep(4000);
      });
    obj.datesel.click().then(function(){
          browser.sleep(5000);
        });
      
      obj.dateselect.click().then(function(){
        browser.sleep(5000);
      });
    
    expect(obj.amou.getText()).toBe(data.amou);
    obj.amou.getText().then(function(text){
    console.log(text);
    browser.sleep(3000);
    
    });
    
    expect(obj.success1.getText()).toBe(data.success);
    obj.success1.getText().then(function(text){
    console.log(text);
    browser.sleep(8000);
    
    });
    
     obj.returntodashboard.click().then(function(){
          browser.sleep(10000);
        });
       obj.cancel.click().then(function(){
            browser.sleep(10000);
          });*/
        
      },200000);
    
    });


/*
    //Fee history

    using(d.Datadrivenfee, function (data, description) {
      it('TS-'+description, function() {
    


      obj.fees.click().then(function(){
        browser.sleep(5000);
      });
    
      obj.addfee1.click().then(function(){
           browser.sleep(4000);
       });
    
       
      obj.addfeetocart.click().then(function(){
        browser.sleep(8000);
      });
      
      obj.clickoncart.click().then(function(){
          browser.sleep(8000);
          
    });
    
    expect(obj.feecartamount.getText()).toBe(data.feecartamount);
              obj.feecartamount.getText().then(function(text){
              console.log(text);
              browser.sleep(8000);
            
              });
    obj.clickonselect.click().then(function(){
       browser.sleep(8000);
    });
    
    
/*    expect(obj.optionfee.getText()).toBe(data.optionfee);
    obj.optionfee.getText().then(function(text){
      console.log(text);
      browser.sleep(8000);
    
    });*/
    /*
    obj.continue.click().then(function(){
       browser.sleep(2000);
    });
    
    obj.paymentcheckbox.click().then(function(){
       browser.sleep(5000);
    });
    
    obj.makepayment.click().then(function(){
     browser.sleep(10000);
    });
    
    obj.returntodashboardbutton.click().then(function(){
    browser.sleep(10000);
    
    }); 
        
     obj.cancel.click().then(function(){
          browser.sleep(10000);
        });
        
     
      obj.paymenthistory.click().then(function(){
      browser.sleep(3000);
      });
    
      obj.typesel.click().then(function(){
        browser.sleep(2000);
      });
    
      obj.Feeselect.click().then(function(){
        browser.sleep(4000);
      });
    obj.datesel.click().then(function(){
          browser.sleep(5000);
        });
      
      obj.dateselect.click().then(function(){
        browser.sleep(5000);
      });
    
    expect(obj.success1.getText()).toBe(data.success);
    obj.success1.getText().then(function(text){
    console.log(text);
    browser.sleep(1000);
    
    });
    

    obj.menudashboard.click().then(function(){
      browser.sleep(10000);

     });

        
    obj.cancel.click().then(function(){
      browser.sleep(8000);

     });

  /*  browser.refresh();
  
    browser.sleep(8000);

        obj.typesel.click().then(function(){
          browser.sleep(2000);
        });

      //unsuccessful

    obj.unsuccess.click().then(function(){
      browser.sleep(4000);
    });


   obj.datesel.click().then(function(){
          browser.sleep(5000);
        });
      
      obj.dateselect.click().then(function(){
        browser.sleep(5000);
      });
  //expect(obj.amou.getText()).toBe(data.amou);
  //obj.amou.getText().then(function(text){
  //console.log(text);
  //browser.sleep(3000);
  
  //});
  
  expect(obj.expres.getText()).toBe(data.result27);
  obj.expres.getText().then(function(text){
  console.log(text);
  browser.sleep(1000);
  
  });*/
   /* },2500000);
  });
 

    using(d.Datadrivenspecificstudent, function (data, description) {
        it('TS-'+description, function() {

   /* obj.email.sendKeys(data.emailf).then(function(){
      browser.sleep(2000);
    });

    obj.password.sendKeys(data.passwordf).then(function(){
      browser.sleep(2000);
    });
    
    obj.login.click().then(function(){
       browser.sleep(10000);

      });

*/

/*
         obj.ash.click().then(function(){

            browser.sleep(15000);
   });
   
         obj.addcart1.click().then(function(){

            browser.sleep(6000);
   });
   
         obj.amount.sendKeys(data.amount);
         obj.addtocartbutton.click().then(function(){

            browser.sleep(7000);
         });
      
        
              expect(obj.incart.getText()).toBe(data.incart);
       obj.incart.getText().then(function(text){
         console.log(text);
         browser.sleep(4000);
       });

       obj.edit.click().then(function(){
         browser.sleep(7000);
           });
        obj.amount.clear();

obj.amount.sendKeys(data.amountadd);
obj.addtocartbutton.click().then(function(){
browser.sleep(5000);

});

obj.clickoncart.click().then(function(){
browser.sleep(5000);

});



obj.clickonselect.click().then(function(){
  browser.sleep(4000);
});

obj.continue.click().then(function(){
  browser.sleep(4000);
});
obj.paymentcheckbox.click().then(function(){
  browser.sleep(4000);
});
obj.makepayment.click().then(function(){
  browser.sleep(10000);
});

obj.returntodashboardbutton.click().then(function(){
  browser.sleep(9000);
});

  obj.cancel.click().then(function(){
      browser.sleep(8000);
    });
  
      obj.paymenthistory.click().then(function(){
      browser.sleep(3000);
      });
    
      obj.typesel.click().then(function(){
        browser.sleep(2000);
      });
    
      obj.mealsel.click().then(function(){
        browser.sleep(4000);
      });
    obj.datesel.click().then(function(){
          browser.sleep(5000);
        });
      
      obj.dateselect.click().then(function(){
        browser.sleep(5000);
      });
    
    expect(obj.amou.getText()).toBe(data.amou1);
    obj.amou.getText().then(function(text){
    console.log(text);
    browser.sleep(3000);
    
    });
    
    expect(obj.success1.getText()).toBe(data.success1);
    obj.success1.getText().then(function(text){
    console.log(text);
    browser.sleep(7000);
    
    });
    
      obj.menudashboard.click().then(function(){
          browser.sleep(10000);
        });

      obj.cancel.click().then(function(){
            browser.sleep(15000);
          });

          obj.fees.click().then(function(){
    browser.sleep(5000);
   });

   obj.addfee.click().then(function(){
        browser.sleep(4000);
    });
   obj.addfeetocart.click().then(function(){
    browser.sleep(4000);
   });

   obj.Cole.click().then(function(){
    browser.sleep(15000);
});

 obj.fees.click().then(function(){

    browser.sleep(5000);
 });

expect(obj.incartfee.getText()).toBe(data.incartfee);
    obj.incartfee.getText().then(function(text){
    console.log(text);
    browser.sleep(3000);
    
    });
    obj.edit.click().then(function(){

        browser.sleep(4000);
     });


     obj.amount.clear();

     obj.amount.sendKeys(data.amount2);
     browser.sleep(2000);

     obj.addtocartbutton.click().then(function(){

        browser.sleep(4000);
     });
     obj.menudashboard.click().then(function(){

        browser.sleep(8000);
     });
    
     obj.cancel.click().then(function(){

      browser.sleep(15000);
   });
     obj.fees.click().then(function(){
        browser.sleep(8000);
       });
       expect(obj.incartver.getText()).toBe(data.incartver);
       obj.incartver.getText().then(function(text){
       console.log(text);
       browser.sleep(3000);
       
       });
       obj.clickoncart.click().then(function(){
        browser.sleep(5000);
        
      });
    
     
      obj.clickonselect.click().then(function(){
        browser.sleep(4000);
      });
    
      
      obj.delall.click().then(function(){
        browser.sleep(4000);
      });
    
      obj.yes.click().then(function(){
        browser.sleep(4000);
  });
  
  obj.menudashboard.click().then(function(){

    browser.sleep(8000);
 });

 obj.cancel.click().then(function(){

  browser.sleep(15000);
});
    },2000000);
});
*/

using(d.Datadrivenspecificstudent, function (data, description) {
it('TS-'+description, function() {

  
  browser.sleep(15000);

obj.Cole.click().then(function(){

  browser.sleep(15000);
 });

 obj.fees.click().then(function(){
  browser.sleep(8000);
});

 obj.schedulefee.click().then(function(){

  browser.sleep(9000);
 });

 obj.firsttinstallment.clear();


 obj.firsttinstallment.sendKeys(data.firsttinstallment).then(function(){
  browser.sleep(6000);
});

 obj.paymentdate.click().then(function(){

  browser.sleep(9000);
 });
 obj.selectdate.click().then(function(){

  browser.sleep(9000);
 });

 obj.addschedule.click().then(function(){

  browser.sleep(9000);
 });
 obj.back.click().then(function(){

  browser.sleep(15000);
 });
 obj.fees.click().then(function(){
  browser.sleep(8000);
});

 obj.cartschedule.click().then(function(){

  browser.sleep(9000);
 });
 obj.amount.clear();

 obj.amount.sendKeys(data.amount01).then(function(){
  browser.sleep(1000);
  
  });
  obj.addtocartbutton.click().then(function(){
  browser.sleep(5000);
  
  });
     

  obj.feedropdown.click().then(function(){
    browser.sleep(4000);
    
    });

    obj.selectscheduledfee.click().then(function(){
    browser.sleep(5000);
    
    });
    obj.fees.click().then(function(){
      browser.sleep(8000);
    });

  expect(obj.amountdue.getText()).toBe(data.amountdue);
    obj.amountdue.getText().then(function(text){
    console.log(text);
    browser.sleep(3000);
    
    });


    obj.feedropdown.click().then(function(){
      browser.sleep(1000);
      
      });
     
  
      obj.selectallfee.click().then(function(){
      browser.sleep(5000);
      
      });
      obj.fees.click().then(function(){
        browser.sleep(8000);
      });

    obj.schedulefee.click().then(function(){

      browser.sleep(9000);
     });
     obj.deleteschedulefee.click().then(function(){

      browser.sleep(9000);
     });
     obj.confirmdelete.click().then(function(){

      browser.sleep(10000);
     });

    

      obj.fees.click().then(function(){
        browser.sleep(8000);
      });
  
    expect(obj.amountdue1.getText()).toContains(data.amountdue1);
      obj.amountdue1.getText().then(function(text){
      console.log(text);
      browser.sleep(3000);
      
      });
     
      obj.logoutbutton.click().then(function(){
        browser.sleep(8000);
      });
  


    },200000);

});




});

