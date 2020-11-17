describe('PSC P1testcases', function() {
	var obj=  require("./JsObjectpage.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
 

 
   
   

//userlogin


using(d.Datadrivenw, function (data, description) {
	it("Should update the notification changes successfully", function() {
    obj.getURL();

		browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);

		browser.sleep(4000);
		
		
		obj.email.sendKeys(data.email);
	  obj.password.sendKeys(data.password2);
	  obj.login.click().then(function(){
			 browser.sleep(25000);
			 
    });
    /*obj.cancel.click().then(function(){
      browser.sleep(8000);
   
       });*/
       
       //Notification
 obj.notification.click().then(function(){
    browser.sleep(6000);
    });
    
       obj.mealtoggle.click().then(function(){
       browser.sleep(9000);
       });
       
           obj.fundamo.click().then(function(){
            browser.sleep(5000);
             });
          obj.fundamoselect.click().then(function(){
              browser.sleep(5000);
               });
               obj.dayofmonth.click().then(function(){
                 browser.sleep(5000);
  
             });
             obj.dayofmonthselect.click().then(function(){
              browser.sleep(5000);
  
          }); 
          obj.updatebutton.click().then(function(){
            browser.sleep(5000);
  
        });
      
				 expect(obj.notificationsuccess.getText()).toBe(data.result3);
				 obj.notificationsuccess.getText().then(function(text){
				   console.log(text);
				   browser.sleep(1000);
         });


    
 
        browser.sleep(5000);

       obj.profile.click().then(function(){
        browser.sleep(5000);
    });

    obj.firstnm.clear();
    browser.sleep(1000);

        //obj.emailt.sendKeys(data.emailt);   
        obj.firstnm.sendKeys(data.firstnm);

        obj.lastnm.clear();

        //obj.emailt.sendKeys(data.emailt);   
        obj.lastnm.sendKeys(data.lastnm);
        obj.pinc.clear();
        obj.pinc.sendKeys(data.pinc);
        browser.sleep(1000);

        obj.update.click().then(function(){
          browser.sleep(5000);
       });
       expect(obj.successmessage.getText()).toBe(data.respr);
       obj.successmessage.getText().then(function(text){
         console.log(text);
         browser.sleep(2000);
      
      });
    },200000);
  }); 


//Secure
using(d.Datadrivena, function (data, description) {
	it("Should update the secure account successfully", function() {
        browser.ignoreSynchronization = true;
            browser.sleep(6000);

  obj.secure.click().then(function(){
    browser.sleep(6000);
    }); 
  
  obj.qa1.click().then(function(){
    browser.sleep(1000);
    });	

obj.selectqa1.click().then(function(){
    browser.sleep(1000);
    });	
  
  obj.ans1.sendKeys(data.ans1).then(function(){
    browser.sleep(1000);
  });
  
  
  obj.qa2.click().then(function(){
    browser.sleep(1000);
    });	
  
  
obj.selectqa2.click().then(function(){
  browser.sleep(1000);
   });	
  
  obj.ans2.sendKeys(data.ans2).then(function(){
    browser.sleep(1000);
  });
  
  obj.qa3.click().then(function(){
    browser.sleep(1000);
    });	

  obj.selectqa3.click().then(function(){
  browser.sleep(1000);
   });	
  

  obj.ans3.sendKeys(data.ans3).then(function(){
    browser.sleep(6000);
  });
  
  obj.update1.click().then(function(){
  browser.sleep(1000);
   });	


   var ECsecure = protractor.ExpectedConditions;
browser.driver.wait(ECsecure.visibilityOf(obj.result4), 9999);

   

   expect(obj.result4.getText()).toBe(data.result4);
    obj.result4.getText().then(function(text){
      console.log(text);
      browser.sleep(1000);
  
 }); 

    },200000);

    });
  


    using(d.Datadrivenb, function (data, description) {
        it("Should add and delete the Student successfully", function() {
            browser.ignoreSynchronization = true;
            browser.sleep(4000);

//Add student
obj.student.click().then(function(){
    browser.sleep(8000);
  
    });
    obj.addstudent.click().then(function(){
    browser.sleep(3000);
  
    });
   
    obj.studentid.sendKeys(data.studentid);
    obj.fname.sendKeys(data.fname);
    obj.lname.sendKeys(data.lname);
    obj.relation.click().then(function(){
    browser.sleep(4000);
    });
    obj.relationselect.click().then(function(){
    browser.sleep(4000);
    });
    obj.studentbutton.click().then(function(){
    browser.sleep(2000);
    });
  
    expect(obj.success.getText()).toBe(data.success);
    obj.success.getText().then(function(text){
    console.log(text);
    browser.sleep(15000);
    });
  
    // var EC2 = protractor.ExpectedConditions;
    //browser.wait(EC2.visibilityOf(obj.deletestudent, 9999));
  
   

      obj.deletestudent.click().then(function(){
        browser.sleep(5000);
        });
        
  
   /* obj.deletestudent.click().then(function(){
    browser.sleep(5000);
  });*/
  

   expect(obj.removepopup.getText()).toBe(data.removepopup);
    obj.removepopup.getText().then(function(text){
    console.log(text);
    browser.sleep(15000);
  
    });
    obj.remove1.click().then(function(){
      browser.sleep(8000);
      });
      obj.student.click().then(function(){
        browser.sleep(8000);
      
        });
        obj.addstudent.click().then(function(){
        browser.sleep(6000);
      
        });
   obj.studentid.sendKeys(data.studentid);
    obj.fname.sendKeys(data.fname);
    obj.lname.sendKeys(data.lname);
    obj.relation.click().then(function(){
    browser.sleep(4000);
    });
    obj.relationselect.click().then(function(){
    browser.sleep(4000);
    });
    obj.studentbutton.click().then(function(){
    browser.sleep(5000);
    });
  
    
 },200000);
  
});
   
   
   /*
 //test3 - payment method

 using(d.Datadrivenc, function (data, description) {
    it("Should add and remove the payment methods successfully", function() {
      browser.sleep(4000);

     
    obj.paymentmethod.click().then(function(){
    browser.sleep(8000);
    });
  
    obj.addpayment.click().then(function(){
    browser.sleep(4000);
    });
  
  
    obj.paymentdropdown.click().then(function(){
    browser.sleep(4000);
    });
  
    obj.paymentselection.click().then(function(){
    browser.sleep(4000);
    });
  
    obj.nickname.sendKeys(data.nickname).then(function(){
    browser.sleep(1000);
    });
  
    obj.cardnumber.sendKeys(data.cardnumber).then(function(){
    browser.sleep(1000);
    });
  
    obj.expirydate.sendKeys(data.expirydate).then(function(){
    browser.sleep(1000);
    });
  
    obj.cvv.sendKeys(data.cvv1).then(function(){
    browser.sleep(1000);
    });
  
    obj.checkbox1.click().then(function(){
    browser.sleep(1000);
    });
  
    obj.checkbox2.click().then(function(){
    browser.sleep(1000);
    });
  
    obj.addpaymentbutton.click().then(function(){
    browser.sleep(5000);
    });
  
    expect(obj.paymentmethodsuccess.getText()).toBe(data.paymentmethodsuccess);
  obj.paymentmethodsuccess.getText().then(function(text){
	console.log(text);
  browser.sleep(5000);
  });

    obj.cancelpayment.click().then(function(){
    browser.sleep(5000);
    });
  
    expect(obj.paymentremove.getText()).toBe(data.paymentremove);
    obj.paymentremove.getText().then(function(text){
    console.log(text);
    browser.sleep(8000);
  
    });
    
    
    obj.cancelpaymentyes.click().then(function(){
    browser.sleep(5000);
    }); 
  
  
    },200000);
    });       
    
  
    //Adding ACH card
  
    using(d.Datadrivenc1, function (data, description) {
      it("Should successfully add the ACH card", function() {

        browser.sleep(5000);

    
      obj.paymentdropdown.click().then(function(){
      browser.sleep(2000);
      });
    
      obj.paymentselection1.click().then(function(){
      browser.sleep(2000);
      });
    
      obj.nickname.sendKeys(data.nickname1).then(function(){
      browser.sleep(1000);
      });
    
      obj.Accounttypedropdown1.click().then(function(){
      browser.sleep(1000);
      });
    
      obj.Accounttype1.click().then(function(){
      browser.sleep(1000);
      });
    
      obj.Accountnumber1.sendKeys(data.Accountnumber1).then(function(){
      browser.sleep(1000);
      });
    
      obj.routingnumber1.sendKeys(data.routingnumber1).then(function(){
      browser.sleep(1000);
      });
    
      
      obj.checkbox3.click().then(function(){
      browser.sleep(2000);
      });
    
      obj.checkbox2.click().then(function(){
      browser.sleep(2000);
      });
    
      obj.addpaymentbutton.click().then(function(){
      browser.sleep(8000);
      });
    
      
      expect(obj.paymentmethodsuccess.getText()).toBe(data.paymentmethodsuccess);
      obj.paymentmethodsuccess.getText().then(function(text){
      console.log(text);
      browser.sleep(5000);
      });
    
      obj.menudashboard.click().then(function(){
        browser.sleep(15000);
        });
      
    
    
          obj.cancel.click().then(function(){
            browser.sleep(8000);
          
           });
    
  
              },200000);
          
          
      });*/
    
//Meals
using(d.Datadrivend, function (data, description) {
    it("Should make a payment successfully ", function() {
        browser.sleep(3000);

        obj.menudashboard.click().then(function(){
          browser.sleep(15000);
          });
        
      
      
     /*obj.cancel.click().then(function(){
      browser.sleep(8000);
   
       });*/

   obj.addcart.click().then(function(){
    browser.sleep(8000);
    
});

obj.amount.sendKeys(data.amount01).then(function(){
    browser.sleep(1000);
    
  });
obj.addtocartbutton.click().then(function(){
    browser.sleep(5000);
    
});
obj.clickoncart.click().then(function(){
    browser.sleep(8000);
    
});


obj.clickonselect.click().then(function(){
  browser.sleep(4000);
});



obj.continue.click().then(function(){
  browser.sleep(8000);
});

obj.paymentcheckbox.click().then(function(){
  browser.sleep(2000);
});

obj.makepayment.click().then(function(){
  browser.sleep(20000);
});


expect(obj.successfulpayment.getText()).toBe(data.successfulpayment);
obj.successfulpayment.getText().then(function(text){
console.log(text);
browser.sleep(5000);
});

obj.returntodashboardbutton.click().then(function(){
    browser.sleep(15000);
    });



},200000);	
});	



using(d.Datadriven2, function (data, description) {
it("Should successfully update the meals data", function() {
//browser.wait(EC.visibilityOf(obj.freeclose.click()), 9999);


 /*obj.cancel.click().then(function(){
      browser.sleep(8000);
   
       });*/


obj.mealmenu.click().then(function(){
    browser.sleep(2000);
    
  });


obj.mealrestriction.click().then(function(){
  browser.sleep(9000);
});

obj.selectstudentandstaff.click().then(function(){
    browser.sleep(9000);
  });

  obj.Michael.click().then(function(){
    browser.sleep(9000);
  });


obj.noalacart.click().then(function(){
  browser.sleep(1000);
});

obj.nobreakfast.click().then(function(){
  browser.sleep(1000);
});

obj.nosecondmeal.click().then(function(){
  browser.sleep(1000);
});

obj.alacarte.click().then(function(){
browser.sleep(5000);
});

obj.meals.click().then(function(){
  browser.sleep(5000);
  });

obj.Frozen.click().then(function(){
  browser.sleep(5000);
  });

obj.searchitems.sendKeys(data.searchitems).then(function(){
  browser.sleep(5000);
});
obj.breakfast.click().then(function(){
    browser.sleep(5000);
    });

obj.savebutton.click().then(function(){
  browser.sleep(10000);
  });

 expect(obj.result3.getText()).toBe(data.result3);
  obj.result3.getText().then(function(text){
    console.log(text);
    browser.sleep(1000);

});


obj.ok.click().then(function(){
 browser.sleep(8000);
});

obj.menudashboard.click().then(function(){
  browser.sleep(15000);
  });
},200000); 
});

//Fund

using(d.Datadrivenfund, function (data, description) {
it('Should successfully update the Fund data', function() {

 /*obj.cancel.click().then(function(){
      browser.sleep(8000);
   
       });*/
  browser.executeScript('window.scrollTo(0,10000);').then(function (){
    obj.addfund.click().then(function(){
    browser.sleep(1000);
    });
    });

    
      obj.fundamount.sendKeys(data.fundamt).then(function(){
          browser.sleep(1000);
          
        });
      obj.addfundtocart.click().then(function(){
          browser.sleep(5000);
          
      });

      obj.clickoncart.click().then(function(){
          browser.sleep(5000);
          
    });
    
    obj.clickonselect.click().then(function(){
      browser.sleep(4000);
    });
    
      
   // expect(obj.result01.getText()).toBe(data.result01);
    //obj.result01.getText().then(function(text){
    //console.log(text);
    //browser.sleep(3000);
   
   //});
  
  
  
    obj.continue.click().then(function(){
        browser.sleep(6000);
    });
    

      
     
      
      obj.paymentcheckbox.click().then(function(){
        browser.sleep(3000);
      });
      
      obj.makepayment.click().then(function(){
        browser.sleep(9000);
      });
    
      expect(obj.successfulpayment.getText()).toBe(data.successfulpayment);
      obj.successfulpayment.getText().then(function(text){
      console.log(text);
      browser.sleep(10000);
      });
      
    
  obj.returntodashboardbutton.click().then(function(){
    browser.sleep(10000);
    });
  


 /*obj.cancel.click().then(function(){
      browser.sleep(8000);
   
       });*/

browser.executeScript('window.scrollTo(0,10000);').then(function () {
  browser.sleep(4000);

obj.fundtransfericon.click().then(function(){
  browser.sleep(4000);
  
});


});
obj.patdrop.click().then(function(){
  browser.sleep(1000);
  
});

obj.patsel.click().then(function(){
  browser.sleep(1000);
  
});
obj.selectaccounttype.click().then(function(){
  browser.sleep(1000);
  
});
obj.selectprog.click().then(function(){
  browser.sleep(5000);
  
});

//obj.amttotrans.sendKeys("1").then(function(){
  obj.amttotrans.sendKeys(data.amounttotransfer).then(function(){
browser.sleep(1000);
  });

  obj.patdrop1.click().then(function(){
    browser.sleep(5000);
    
  });
  obj.selectpat1.click().then(function(){
  browser.sleep(4000);
    });

    
  obj.chkboxtrans.click().then(function(){
  browser.sleep(1000);
   });
obj.transfer.click().then(function(){
  browser.sleep(8000);
     });

    /* obj.ok.click().then(function(){
      browser.sleep(8000);
     });*/

    obj.logoutbutton.click().then(function(){
        browser.sleep(15000);
        
        });
    
        },200000);

});

//Fees  

using(d.Datadriven, function (data, description) {
it('Fees functionality', function() {
    browser.ignoreSynchronization = true;
   // obj.getURL();
    browser.sleep(15000);
    
    
    obj.email.sendKeys(data.email);
  obj.password.sendKeys(data.password2);
  obj.login.click().then(function(){
         browser.sleep(25000);
         
});
obj.cancel.click().then(function(){
  browser.sleep(8000);
});


},200000);
});

 using(d.Datadrivenfee, function (data, description) {
    it('TS-'+description, function() {
      browser.sleep(15000);

  obj.fees.click().then(function(){
    browser.sleep(5000);
  });

  obj.addfee.click().then(function(){
       browser.sleep(6000);
   });

   //obj.amount.sendKeys(data.amount21).then(function(){
    //browser.sleep(1000);
    
  //});
  obj.addfeetocart.click().then(function(){
    browser.sleep(4000);
  });
  
  obj.clickoncart.click().then(function(){
      browser.sleep(3000);
      
});

obj.clickonselect.click().then(function(){
   browser.sleep(3000);
});


expect(obj.optionfee.getText()).toBe(data.optionfee);
obj.optionfee.getText().then(function(text){
  console.log(text);
  browser.sleep(2000);

});

obj.continue.click().then(function(){
   browser.sleep(2000);
});

obj.paymentcheckbox.click().then(function(){
   browser.sleep(5000);
});


obj.cartcheckbox.click().then(function(){
  browser.sleep(5000);
  });
obj.makepayment.click().then(function(){
 browser.sleep(8000);
});




obj.returntodashboardbutton.click().then(function(){
browser.sleep(10000);

}); 
obj.cancel.click().then(function(){
browser.sleep(8000);
});

obj.messages.click().then(function(){
browser.sleep(10000);
});




obj.message1.click().then(function(){
browser.sleep(6000);

});

obj.closepopup1.click().then(function(){
browser.sleep(10000);

});



//test - delete Messages




obj.message1.click().then(function(){
browser.sleep(6000);

});

obj.deletemessage.click().then(function(){
browser.sleep(5000);


});




},200000);
});


using(d.Datadrivenmanagereports, function (data, description) {
    it('Should be able to send and download the reports successfully', function() {
  
      //obj.getURL();
      //browser.sleep(4000);
     //obj.getURL();
     browser.ignoreSynchronization = true;
          
    
          obj.reports.click().then(function(){
          browser.sleep(8000);
          });
         
          obj.selectreport.click().then(function(){
            browser.sleep(8000);
            });


            obj.selectmealactivityreport.click().then(function(){
              browser.sleep(3000);
              });
             
              obj.selectstudent.click().then(function(){
                 browser.sleep(7000);

                  });
                 // obj.selectstudent.click().then(function(){
                 //browser.sleep(1000);
                 //  });
           //obj.selectstudent1.click().then(function(){
           //browser.sleep(5000);
          // browser.actions().sendKeys(protractor.Key.space).perform();
           //browser.sleep(5000);
           obj.selectstudent1.click().then(function(){
           // broswer.sleep(2000);
           
           obj.dropclose.sendKeys(protractor.Key.ESCAPE);
          
             //browser.sendKeys(protractor.Key.ESCAPE);
           });
            //});
           // obj.clickout.click().then(function(){
              browser.sleep(3000);
            //});

            obj.date.click().then(function(){
              browser.sleep(4000);
            });
            obj.dateselect.click().then(function(){
              browser.sleep(2000);
            });
            obj.createpdfbutton.click().then(function(){
              browser.sleep(2000);
            });
            obj.sendemail.click().then(function(){
              browser.sleep(2000);
            });
           
            obj.createpdfbutton.click().then(function(){
              browser.sleep(4000);
            });
            obj.downloadnow.click().then(function(){
              browser.sleep(4000);
            });
            obj.createexcel.click().then(function(){
              browser.sleep(4000);
            });
            obj.sendemail.click().then(function(){
              browser.sleep(4000);
            });
            
            obj.createexcel.click().then(function(){
              browser.sleep(4000);
            });
            obj.downloadnow.click().then(function(){
              browser.sleep(6000);
            });

            //browser.executeScript('window.scrollTo(0,0);').then(function () {
            //var ECacc = protractor.ExpectedConditions;
     // browser.wait(ECacc.visibilityOf( obj.selectreport.click()), 9999);
            browser.refresh();

            browser.sleep(8000);

            obj.selectreport.click().then(function(){
              browser.sleep(6000);
              });
            //});

            
              obj.selectmealaccount.click().then(function(){
                browser.sleep(3000);
                });
               // var ECrep = protractor.ExpectedConditions;
  // Waits for the element with id 'myCheckbox' to be selected.
  //browser.wait(ECrep.elementToBeSelected($('selectstudent')), 9000);
              //  browser.executeScript('window.scrollTo(0,0);').then(function () {
                obj.selectstudent.click().then(function(){
                   browser.sleep(7000);
  
                    });
                   // obj.selectstudent.click().then(function(){
                   //browser.sleep(1000);
                   //  });
             //obj.selectstudent1.click().then(function(){
             //browser.sleep(5000);
            // browser.actions().sendKeys(protractor.Key.space).perform();
             //browser.sleep(5000);
             obj.selectstudent1.click().then(function(){
             // broswer.sleep(2000);
             
             obj.dropclose.sendKeys(protractor.Key.ESCAPE);
            
               //browser.sendKeys(protractor.Key.ESCAPE);
             });
              //});
             // obj.clickout.click().then(function(){
                browser.sleep(3000);
                obj.date.click().then(function(){
                  browser.sleep(4000);
                });
                obj.dateselect.click().then(function(){
                  browser.sleep(2000);
                });

              //});
              obj.createpdfbutton.click().then(function(){
                browser.sleep(2000);
              });
              obj.sendemail.click().then(function(){
                browser.sleep(2000);
              });
              //browser.refresh();
              
              //var ECclose = protractor.ExpectedConditions;
              //browser.wait(ECclose.visibilityOf(obj.close6.click()), 9000);
              //obj.close6.click().then(function(){
                //browser.sleep(1000);
              //});
              
              obj.createpdfbutton.click().then(function(){
                browser.sleep(4000);
              });
              obj.downloadnow.click().then(function(){
                browser.sleep(4000);
              });
              obj.createexcel.click().then(function(){
                browser.sleep(4000);
              });
              obj.sendemail.click().then(function(){
                browser.sleep(2000);
              });
              
              obj.createexcel.click().then(function(){
                browser.sleep(4000);
              });
              obj.downloadnow.click().then(function(){
                browser.sleep(4000);
              });


  
              

              browser.executeScript('window.scrollTo(0,10000);').then(function () {

                obj.selectfundacc.click().then(function(){
                  browser.sleep(3000);
                  });
                  obj.selectafterschool.click().then(function(){
                    browser.sleep(3000);
                    });
                    obj.selectstudentfun.click().then(function(){
                      browser.sleep(7000);
     
                       });
                       obj.selectstudent1fun.click().then(function(){

                        obj.dropclose.sendKeys(protractor.Key.ESCAPE);
                       });

                       obj.date1.click().then(function(){
                        browser.sleep(4000);
                      });
                      obj.dateselect.click().then(function(){
                        browser.sleep(2000);
                      });
          
                        //browser.sleep(7000);
       
                   
                         obj.createpdfbutton1.click().then(function(){
                         browser.sleep(4000);
                    });
                    //obj.createpdfbutton1.click().then(function(){
                     // browser.sleep(2000);
                 //});
                        
                        obj.sendemail.click().then(function(){
                          browser.sleep(4000);
                        });
                        
                        obj.createpdfbutton1.click().then(function(){
                          browser.sleep(4000);
                        });
                        obj.downloadnow1.click().then(function(){
                          browser.sleep(5000);
                        });

                        
                      //});
                       // var EC25 = protractor.ExpectedConditions;
                       //browser.wait(EC25.visibilityOf(obj.createexcel1.click()), 9999);
                       //var EC25 = protractor.ExpectedConditions;
                       //expect(createexcel1.isEnabled()).toBe(true);
                       //expect<any>($('#saveChangesBtn').isEnabled()).toBe(true);
                       //browser.wait(EC25.elementToBeClickable(createexcel1), 5000);
                       //obj.createxcel1.click();

                        obj.createexcel1.click().then(function(){
                          browser.sleep(4000);
                        });

                        obj.sendemail.click().then(function(){
                          browser.sleep(4000);
                        });
                        
                        obj.createexcel1.click().then(function(){
                          browser.sleep(4000);
                        });
                        obj.downloadnow1.click().then(function(){
                          browser.sleep(8000);
                        }); 
                      /*  obj.rettodsh.click().then(function(){
                          browser.sleep(15000);
                        });
              
                       /* obj.cancel.click().then(function(){
                          browser.sleep(8000);
                       
                           });*/
                        obj.logoutbutton.click().then(function(){
                          browser.sleep(8000);
                          
                          });                        
                    });
                },500000);
            });
 

});





