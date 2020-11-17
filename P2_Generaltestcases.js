const { browser } = require("protractor");

 describe('PSC Priority 2 testcases', function() {
	var obj=  require("./JsObjectpage.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
 
  
  //test2 - add student
    using(d.Datadrivenb, function (data, description) {
        it('TS-'+description, function() {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);

		browser.sleep(10000);
		
                
		obj.email.sendKeys(data.emailm);
	  obj.password.sendKeys(data.passwordm);
	  obj.login.click().then(function(){
			 browser.sleep(25000);
			 
    });
               
         obj.cancel.click().then(function(){
      browser.sleep(8000);
    
     });
      
        obj.student.click().then(function(){
        browser.sleep(8000);
      
        });
        obj.addstudent.click().then(function(){
        browser.sleep(8000);
      
        });
       
 
        obj.studentid.sendKeys(data.studentid);
        browser.sleep(2000);

        obj.fname.sendKeys(data.fname);
        browser.sleep(2000);

        obj.lname.sendKeys(data.lname);
        browser.sleep(2000);

        obj.relation.click().then(function(){
        browser.sleep(4000);
        });
        obj.relationselect.click().then(function(){
        browser.sleep(4000);
        });
        obj.studentbutton.click().then(function(){
        browser.sleep(2000);
        });
      
  obj.removestu.click().then(function(){
    browser.sleep(5000);
    });
    
      expect(obj.removepopup.getText()).toBe(data.removepopup);
      obj.removepopup.getText().then(function(text){
      console.log(text);
      browser.sleep(2000);
    
      });

      obj.remove1.click().then(function(){
  browser.sleep(10000);
  });
     
    
    },250000);
    
     
     });  
  
    
      
//Deleting Default payment menthod

 using(d.Datadrivenb, function (data, description) {
        it('TS-'+description, function() {
         
   
    browser.sleep(5000);
    obj.paymentmethod.click().then(function(){
            browser.sleep(4000);
            });
          

 obj.defaultpayment.click().then(function(){
        browser.sleep(2000);
        });
  

 expect(obj.deletedefaultpayment.getText()).toContain("is scheduled to be used");
  
},250000);
});
//cart functionality

using(d.Datadrivend, function (data, description) {
        it('TS-'+description, function() {

    browser.sleep(8000);
    obj.menudashboard.click().then(function(){
      browser.sleep(15000);
      });
                    
     
        obj.cancel.click().then(function(){
          browser.sleep(8000);
        
         });
         obj.fees.click().then(function(){
          browser.sleep(8000);
        });
      

obj.addfee.click().then(function(){
browser.sleep(8000);

});
obj.addfeetocart.click().then(function(){
  browser.sleep(10000);
  
  });
  obj.addcart1.click().then(function(){
    browser.sleep(8000);
    
    });
obj.amount.sendKeys(data.amount01).then(function(){
browser.sleep(1000);

});
obj.addtocartbutton.click().then(function(){
browser.sleep(8000);

});

obj.addfund.click().then(function(){
  browser.sleep(8000);
  
  });
obj.amount.sendKeys(data.amount01).then(function(){
browser.sleep(1000);

});
obj.addtocartbutton.click().then(function(){
browser.sleep(5000);

});

obj.clickoncart.click().then(function(){
browser.sleep(6000);

});
expect(obj.feecartamount.getText()).toBe(data.feecartamount);
          obj.feecartamount.getText().then(function(text){
          console.log(text);
          browser.sleep(4000);
        
          });
    expect(obj.mealcartamount.getText()).toBe(data.mealcartamount);
          obj.mealcartamount.getText().then(function(text){
          console.log(text);
          browser.sleep(4000);
        
          });
    expect(obj.fundcartamount.getText()).toBe(data.fundcartamount);
          obj.fundcartamount.getText().then(function(text){
          console.log(text);
          browser.sleep(4000);
        
          });

 obj.checkboxfee.click().then(function(){
browser.sleep(4000);
});
obj.deletefee.click().then(function(){
  browser.sleep(4000);
  });
  obj.yes.click().then(function(){
    browser.sleep(4000);
    });

   
  },200000);
});


//Messages 

using(d.Datadrivend, function (data, description) {
        it('TS-'+description, function() {

    obj.menudashboard.click().then(function(){
      browser.sleep(15000);
      });
    
     
        obj.cancel.click().then(function(){
          browser.sleep(10000);
        
         });

/*obj.addcart.click().then(function(){
browser.sleep(8000);

});

obj.amount.sendKeys(data.amount01).then(function(){
browser.sleep(1000);

});
obj.addtocartbutton.click().then(function(){
browser.sleep(5000);

});*/
obj.clickoncart.click().then(function(){
browser.sleep(6000);

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
browser.sleep(15000);
});


expect(obj.successfulpayment.getText()).toBe(data.successfulpayment);
obj.successfulpayment.getText().then(function(text){
console.log(text);
browser.sleep(5000);
});

obj.returntodashboardbutton.click().then(function(){
browser.sleep(15000);
});

obj.cancel.click().then(function(){
  browser.sleep(8000);
  });
  

  },200000);
});

using(d.Datadrivend, function (data, description) {
        it('TS-'+description, function() {
        
      obj.messages.click().then(function(){
      browser.sleep(5000);
      });
      
      
      
      
      obj.message1.click().then(function(){
      browser.sleep(6000);
      
      });
      
      expect(obj.closepopup1.getText()).toBe(data.closepopup1);
                  obj.closepopup1.getText().then(function(text){
                  console.log(text);
                  browser.sleep(2000);
                
                  });

      obj.closepopup1.click().then(function(){
      browser.sleep(6000);
      
      });
      
    
            },200000);
          });

          //Meal Restriction

          using(d.Datadriven2, function (data, description) {
            it("Should successfully update the meals data", function() {
            //browser.wait(EC.visibilityOf(obj.freeclose.click()), 9999);
            
            obj.menudashboard.click().then(function(){
              browser.sleep(15000);
              });
              obj.cancel.click().then(function(){
                browser.sleep(8000);
                
                });
            obj.mealmenu.click().then(function(){
                browser.sleep(2000);
                
              });
            
            
            obj.mealrestriction.click().then(function(){
              browser.sleep(9000);
            });
            
          //  obj.selectstudentandstaff.click().then(function(){
            //    browser.sleep(9000);
              //});
            
           //   obj.Michael.click().then(function(){
             //   browser.sleep(9000);
              //});
            
            
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
             browser.sleep(10000);
            });
            
            obj.menudashboard.click().then(function(){
              browser.sleep(15000);
              });
              obj.cancel.click().then(function(){
                browser.sleep(15000);
                
                });   
           
          
       /*   //Auto-replenishment page     
              
                obj.mealmenu.click().then(function(){
                  browser.sleep(8000);
                  
                });

obj.manageauto1.click().then(function(){
  browser.sleep(5000);
  
});
/*obj.amttoadd.click().then(function(){
  browser.sleep(4000);
});

obj.add30.click().then(function(){
  browser.sleep(4000);
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
obj.saveauto.click().then(function(){
  browser.sleep(8000);
});

expect(obj.autosuccess.getText()).toBe(data.autosuccess);
obj.autosuccess.getText().then(function(text){
  console.log(text);
  browser.sleep(1000);
});   
*/


                
        },200000);
      });


//Fund Account



          using(d.Datadrivend, function (data, description) {
            it('TS-'+description, function() {
     
                       obj.menudashboard.click().then(function(){
                           browser.sleep(8000);
                         });
     
                   obj.cancel.click().then(function(){
                     browser.sleep(8000);
                     });
                     

                     browser.executeScript('window.scrollTo(0,10000);').then(function (){
                      browser.sleep(6000);

    obj.addfund.click().then(function(){
    browser.sleep(8000);
    });
  });

    
      obj.fundamount.sendKeys(data.fundamt1).then(function(){
          browser.sleep(1000);
          
        });
      obj.addfundtocart.click().then(function(){
          browser.sleep(5000);
          
      });

      obj.clickoncart.click().then(function(){
          browser.sleep(5000);
          
    });
    
expect(obj.fundcartamount.getText()).toBe(data.fundcartamount);
      obj.fundcartamount.getText().then(function(text){
      console.log(text);
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
      browser.sleep(5000);
      });
      
    
  obj.returntodashboardbutton.click().then(function(){
    browser.sleep(10000);
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
    
      obj.fundsel.click().then(function(){
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
        
            },200000);
   
           });

//Meal History

           using(d.Datadriven, function (data, description) {
            it('TS-'+description, function() {
                browser.sleep(8000);

                     obj.mealmenu.click().then(function(){
                      browser.sleep(6000);
                      });
                      obj.mealhistory.click().then(function(){
                        browser.sleep(10000);
                        });
  
                   
                        obj.selectmealreport.click().then(function(){
                          browser.sleep(8000);
                          });
              
              
                          obj.selectmealactivityreport.click().then(function(){
                            browser.sleep(3000);
                            });
                           // var ECrep = protractor.ExpectedConditions;
              // Waits for the element with id 'myCheckbox' to be selected.
              //browser.wait(ECrep.elementToBeSelected($('selectstudent')), 9000);
                          //  browser.executeScript('window.scrollTo(0,0);').then(function () {
                            obj.selectstu.click().then(function(){
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
              
                          obj.selectmealreport.click().then(function(){
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
                              obj.selectstu.click().then(function(){
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
                                        browser.sleep(6000);
                                      }); 
                                    
                        
       
  
                    });
                  },200000);
                });
  
           //charges
            
           using(d.Datadrivencartcharge, function (data, description) {
            it('TS-'+description, function() {
            
      
              obj.menudashboard.click().then(function(){
                  browser.sleep(8000);
                });

          obj.cancel.click().then(function(){
            browser.sleep(6000);
            });
            
            obj.addcart1.click().then(function(){
              browser.sleep(8000);
              
              });
              
              obj.amount.sendKeys(data.amount01).then(function(){
              browser.sleep(1000);
              
              });
              obj.addtocartbutton.click().then(function(){
              browser.sleep(5000);
              
              });
              obj.clickoncart.click().then(function(){
              browser.sleep(6000);
              
              });
               
              
              
              obj.clickonselect.click().then(function(){
              browser.sleep(4000);
              });
              
              
              obj.continue.click().then(function(){
                browser.sleep(8000);
                });
         
          
          
            obj.help1.click().then(function(){
              browser.sleep(4000);
              });
      
              expect(obj.transactionalfee.getText()).toBe(data.transactionalfee);
             obj.transactionalfee.getText().then(function(text){
             console.log(text);
             browser.sleep(3000);
             
             });
      
             expect(obj.icfee.getText()).toBe(data.icfee);
             obj.icfee.getText().then(function(text){
             console.log(text);
             browser.sleep(8000);
             
             });
      
             obj.cancelicon.click().then(function(){
            browser.sleep(4000);
            });
      
            obj.paymentsel.click().then(function(){
            browser.sleep(4000);
            });
            
            obj.achcart.click().then(function(){
            browser.sleep(4000);
            });
              
            obj.continue.click().then(function(){
              browser.sleep(8000);
              });
       
            obj.help1.click().then(function(){
            browser.sleep(4000);
            });
      
      
            expect(obj.transactionalfee1.getText()).toBe(data.transfee);
             obj.transactionalfee1.getText().then(function(text){
             console.log(text);
             browser.sleep(3000);
             
             });
      
             expect(obj.icfee1.getText()).toBe(data.icfee2);
             obj.icfee1.getText().then(function(text){
             console.log(text);
             browser.sleep(6000);
             
             });
      
             obj.cancelicon.click().then(function(){
            browser.sleep(5000);
            });
            //obj.selectall.click().then(function(){
            //browser.sleep(4000);
            //});
            
            obj.delall.click().then(function(){
            browser.sleep(5000);
            });
            obj.yes.click().then(function(){
            browser.sleep(8000);
            });
      
            obj.logoutbutton.click().then(function(){
                browser.sleep(8000);
                });  
      
            },200000);
          });






    });
