const { browser } = require("protractor");

describe('PSC:', function() {
	var obj=  require("./JsObjectpage.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  var path = require("path");
  var remote = require("./node_modules/selenium-webdriver/remote");
  const fs = require('fs'); 

  
 it('psc url', function() {
	  var EC = protractor.ExpectedConditions;

    obj.getURL();
	
    expect (browser.getTitle()).toBe('PaySchools Central');
  
  
  },500000);

 
  using(d.Datadrivendigitalid, function (data, description) {
		 it("DigitalID and Preorder should be disabled for no patron and inactive patron" , function() {
                  browser.waitForAngularEnabled(false);

               
                var EC = protractor.ExpectedConditions;
                browser.sleep(10000);

              
                obj.email1.sendKeys(data.email2);
                //console.log(data.email[i]);
                obj.password1.sendKeys(data.password2);
                obj.login4.click().then(function(){
                    browser.sleep(25000);
                });

                obj.nostudent.getText().then(function(text){
                    if(text==='Click Here'){
                    expect(obj.digital.isEnabled()).toBe(true).then(function(){
                      console.log("Digital ID is disabled for no patrons");
                  
                    });
                
                    expect((obj.preorder).isPresent()).toBe(false);

      }
       else
       console.log("Digital ID is enabled for no patrons");


});

    //expect(obj.digital.isEnabled()).toBe(true).then(function(){
      //console.log("Digital ID is disabled for no patrons");
  
    //});
    //expect((obj.preorder).isPresent()).toBe(false);
  
  
  obj.student1.click().then(function(){
  browser.sleep(5000);
  
  });
  obj.addstudent1.click().then(function(){
  browser.sleep(2000);
  
  });
  obj.state.click().then(function(){
  browser.sleep(5000);
  
  });
  obj.selectstate.click().then(function(){
  browser.sleep(5000);
  
  });
  obj.district1.click().then(function(){
    browser.sleep(5000);
  
  });
  obj.districtselect1.click().then(function(){
    browser.sleep(5000);
  
  });
  
  obj.studentid.sendKeys(data.studentid).then(function(){
    browser.sleep(1000);
  
  });
  obj.fname.sendKeys(data.fname).then(function(){
    browser.sleep(1000);
  
  });
  obj.lname.sendKeys(data.lname).then(function(){
    browser.sleep(1000);
  
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

  obj.student1.click().then(function(){
    browser.sleep(5000);
    
    });

  //  expect(obj.inactivestudent.getCssValue("color")).toEqual('rgba(169, 68, 66, 1)').then(function(){
    //  console.log("Digital ID is disabled for inactive patrons");

//});



   //expect(obj.digital.isEnabled()).toBe(true).then(function(){
     // console.log("Digital ID is disabled for inactive patrons");
    
   // });

    obj.inactivestudent.getCssValue('color').then(function(color){
      if(color=="rgba(169, 68, 66, 1)"){
    
          expect(obj.digital.isEnabled()).toBe(true).then(function(){
            console.log("Digital ID is disabled for inactive patrons");
          
          });
        expect((obj.preorder).isPresent()).toBe(true);
        
      }
       else
       {
       console.log("Digital ID is enabled for inactive patrons");
    
       }
});

 
  //expect((obj.preorder).isPresent()).toBe(true);
  
  obj.remove.click().then(function(){
    browser.sleep(5000);
    });
    obj.remove1.click().then(function(){
      browser.sleep(5000);
      });
  
  
        obj.logoutbutton1.click().then(function(){	   
          browser.sleep(5000);
      });
  
    },2500000);
  
  });
  

 using(d.Datadrivenpre, function (data, description) {
		

	it("PreOrder should be enabled for active patron" , function() {

		
    var EC = protractor.ExpectedConditions;

        obj.email1.sendKeys(data.emailm);
                      
         
                  obj.password1.sendKeys(data.passwordm);

                  obj.login4.click().then(function(){
                         browser.sleep(25000);
                         
                  });
 
      obj.cancel.click().then(function(){
    browser.sleep(8000);
  });

  expect((obj.preorder).isEnabled()).toBe(true);
  },200000);

it("Should land on Dashboard" , function() {

       obj.preorder.click().then(function(){
          browser.sleep(8000);
        
          });
obj.okbutton.click().then(function(){
  browser.sleep(5000);
});
  
    obj.backtopsc.click().then(function(){
            browser.sleep(10000);
          
            });
      obj.cancel.click().then(function(){
        browser.sleep(8000);
      });
    
     expect((obj.Dashboard).isPresent()).toBe(true);

},200000);

it("Should verify the amount for Free, Reduced and Denied patrons" , function() {


       obj.preorder.click().then(function(){
              browser.sleep(15000);
            
              });
    
       // obj.nextweek.click().then(function(){
            //    browser.sleep(10000);
              
           //     });
    
  obj.details.click().then(function(){
          browser.sleep(5000);
        
          });
   /* obj.addon.click().then(function(){
            browser.sleep(3000);
          
            });
      obj.addtocart.click().then(function(){
              browser.sleep(5000);
            
              });
        

*/




    obj.details2.click().then(function(){
            browser.sleep(5000);
          
            });

      obj.details1.click().then(function(){
              browser.sleep(3000);
            
              });

    obj.checkoutmmo.click().then(function(){
            browser.sleep(3000);
          
            });

      obj.placeorder.click().then(function(){
              browser.sleep(25000);
            
            });
      expect(obj.zerodollar.getText()).toBe(data.zerodollar);
            obj.zerodollar.getText().then(function(text){
            console.log(text);
            browser.sleep(1000);
          
            });

      expect(obj.reduced.getText()).toBe(data.reduced);
          obj.reduced.getText().then(function(text){
          console.log(text);
          browser.sleep(1000);
        
          });

    expect(obj.denied.getText()).toBe(data.denied);
          obj.denied.getText().then(function(text){
          console.log(text);
          browser.sleep(1000);
        
          });
   },200000);

  it("Should land on PSC cart screen" , function() {



           obj.preorder.click().then(function(){
                  browser.sleep(15000);
                
                  });


         //   obj.nextweek.click().then(function(){
           //         browser.sleep(10000);
                  
             //       });
        

  obj.details3.click().then(function(){
          browser.sleep(8000);
        
          });
  
   /* obj.addon.click().then(function(){
            browser.sleep(3000);
          
            });
      obj.addtocart.click().then(function(){
              browser.sleep(5000);
            
              });
        */



      obj.details4.click().then(function(){
             browser.sleep(3000);
            
              });
        obj.details5.click().then(function(){
               browser.sleep(8000);
              
                });
          
  /*  obj.addon.click().then(function(){
            browser.sleep(3000);
          
            });
      obj.addtocart.click().then(function(){
              browser.sleep(5000);
            
              });*/
  
      
     obj.checkoutmmo.click().then(function(){
            browser.sleep(3000);
          
            });

      obj.placeorder.click().then(function(){
              browser.sleep(15000);
            
            });


 expect((obj.Cart).isPresent()).toBe(true);

// expect(browser.getCurrentUrl()).toEqual('https://dev.payschoolscentral.com/');  

  },200000);

  it("Should make a successfull payment for PreOrder meals" , function() {


 browser.sleep(8000);


   obj.clickonselectmmo.click().then(function(){
        browser.sleep(3000);
      });
    
      obj.continuemmo.click().then(function(){
        browser.sleep(8000);
      });
      obj.paymentcheckmmo.click().then(function(){
        browser.sleep(2000);
      });
      obj.makepaymentmmo.click().then(function(){
        browser.sleep(25000);
      });

     expect(obj.rtdmmo.getText()).toBe(data.rtdmmo);
          obj.rtdmmo.getText().then(function(text){
          console.log(text);
          browser.sleep(1000);
        
          });

     obj.rtdmmo.click().then(function(){
          browser.sleep(10000);
        });
      obj.cancel.click().then(function(){
        browser.sleep(8000);
      });
    },200000);

    it("Message should contains Preorder text" , function() {


  
      obj.message.click().then(function(){
          browser.sleep(8000);
        
          });

    obj.message1.click().then(function(){
              browser.sleep(5000);
            
              });
        
        
            expect(obj.message2.getText()).toContain("(Preorder)");


                    browser.sleep(8000);

               obj.close.click().then(function(){
                      browser.sleep(5000);
                    
                      });

               },200000);

              it("Preorder meals should be Purchased" , function() {

             obj.preorderp.click().then(function(){
                browser.sleep(10000);
              
                });
      //    obj.nextweek.click().then(function(){
        //          browser.sleep(10000);
                
          //        });
      
           
          expect(obj.purchasebut.getText()).toContain(data.purchasebut);
                obj.purchasebut.getText().then(function(text){
                console.log(text);
                browser.sleep(4000);
              
                });
          obj.purchasebut.click().then(function(){
                  browser.sleep(5000);
                
                  });
 
            obj.removemeal.click().then(function(){
                    browser.sleep(5000);
                  
                    });

				obj.details.click().then(function(){
                browser.sleep(5000);
              
                });
      /*    obj.addon.click().then(function(){
                  browser.sleep(3000);
                
                  });
            obj.addtocart.click().then(function(){
                    browser.sleep(5000);
                  
                    });*/
			
      obj.details6.click().then(function(){
             browser.sleep(5000);
            
              });
        
       
        obj.checkoutmmo.click().then(function(){
                browser.sleep(3000);
              
                });
    
          obj.placeorder.click().then(function(){
                  browser.sleep(25000);
                
                });

          expect(obj.preordermeal.getText()).toBe(data.preordermeals);
                obj.preordermeal.getText().then(function(text){
                console.log(text);
                browser.sleep(1000);
              
                });

        },200000);

        it("Should remove the Preorder meals in the PSC cart" , function() {


          obj.preorder.click().then(function(){
                  browser.sleep(10000);
                
                  });
         //   obj.nextweek.click().then(function(){
           //         browser.sleep(10000);
                  
             //       });
        
            obj.viewcart.click().then(function(){
                    browser.sleep(5000);
                  
                    });
              obj.emptycart.click().then(function(){
                      browser.sleep(5000);
                    
                      });

                obj.emptycartconfirm.click().then(function(){
                        browser.sleep(15000);
                      
                        });

                  
                

                  obj.backtopsc.click().then(function(){
                          browser.sleep(10000);
                        
                          });
                    obj.cancel.click().then(function(){
                            browser.sleep(10000);
                          
                            });
                                   
                  
                  expect(obj.checkcart.getText()).toBe(data.checkcart);
                        obj.checkcart.getText().then(function(text){
                        console.log(text);
                        browser.sleep(1000);
                      
                        });

                },200000);

                it("Should remove the Preorder meals from the MMO" , function() {

                  obj.preorder.click().then(function(){
                          browser.sleep(8000);
                        
                          });

            //        obj.nextweek.click().then(function(){
              //              browser.sleep(10000);
                          
               //             });
                

                    obj.details.click().then(function(){
                            browser.sleep(5000);
                          
                            });
                      
                    /*  obj.addon.click().then(function(){
                              browser.sleep(3000);
                            
                              });
                        obj.addtocart.click().then(function(){
                                browser.sleep(5000);
                              
                                });*/

obj.details6.click().then(function(){
             browser.sleep(5000);
            
              });


        obj.checkoutmmo.click().then(function(){
                browser.sleep(3000);
              
                });
    
          obj.placeorder.click().then(function(){
                  browser.sleep(25000);
                
                });


          obj.delete.click().then(function(){
                  browser.sleep(3000);
                
                });
          obj.yes.click().then(function(){
                  browser.sleep(3000);
                
                });
          obj.preorder.click().then(function(){
                  browser.sleep(25000);
                
                  });
            
          //  obj.nextweek.click().then(function(){
            //        browser.sleep(10000);
                  
              //      });
        
            //expect(obj.Addtocart1.getText()).toBe(data.AddtoCart);
               // obj.Addtocart1.getText().then(function(text){
               // console.log(text);
               // browser.sleep(4000);
              
               // });
            
          obj.details.click().then(function(){
                  browser.sleep(5000);
                
                  });
          /*  obj.addon.click().then(function(){
                    browser.sleep(3000);
                  
                    });
              obj.addtocart.click().then(function(){
                      browser.sleep(5000);
                    
                      });*/

            obj.checkoutmmo.click().then(function(){
                    browser.sleep(3000);
                  
                    });
        
              obj.placeorder.click().then(function(){
                      browser.sleep(30000);
                    
                    });
				  
				//browser.navigate().back();

        obj.rtd21.click().then(function(){
                            browser.sleep(10000);
                                  
                           });
          obj.cancel.click().then(function(){
            browser.sleep(8000);
          });

        },250000);


        it("Message should contains Preorder and Food Service text" , function() {

      

          // var EC46 = protractor.ExpectedConditions;
            //  browser.wait(EC46.visibilityOf(obj.addcart21.click()),9000);
         
         obj.addcart.click().then(function(){
           browser.sleep(4000);
           
           });
         
         obj.amount21.sendKeys(data.amount21).then(function(){
         	browser.sleep(3000);
           
           });
         obj.amounttoadd21.click().then(function(){
           browser.sleep(5000);
           
         });
         
         obj.clickoncart21.click().then(function(){
         browser.sleep(10000);
         
         });
         
         
           ///obj.clickoncart21.click().then(function(){
             //browser.sleep(5000);
             
          // });
         
          
           obj.clickonselect21.click().then(function(){
             browser.sleep(8000);
           });
         
           obj.continue21.click().then(function(){
             browser.sleep(6000);
           });
           obj.paymentcheck21.click().then(function(){
             browser.sleep(4000);
           });
           obj.makepayment21.click().then(function(){
             browser.sleep(10000);
           });
         
           obj.return.click().then(function(){
             browser.sleep(8000);
           });
           obj.cancel.click().then(function(){
            browser.sleep(8000);
          });
         
         

         obj.message.click().then(function(){
                browser.sleep(10000);
              
                });
      
          obj.message1.click().then(function(){
                    browser.sleep(10000);
                  
                    });
             
                  expect(obj.message2.getText()).toContain("(Preorder)");
      
                    expect(obj.message2.getText()).toContain("Food Service");
      
        
                          browser.sleep(8000);
                    obj.close.click().then(function(){
                            browser.sleep(3000);
                          
                            });
                    },200000);

                    it("Transaction status should be Success" , function() {

         
           obj.paymenthistory.click().then(function(){
           browser.sleep(3000);
           });
         
           obj.typesel.click().then(function(){
             browser.sleep(2000);
           });
         
           obj.preorder1.click().then(function(){
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
         
          },200000);


//download

it("should display no records found message" , function() {

           obj.createpdfbuttonpay.click().then(function(){
            browser.sleep(2000);
          });
          obj.sendemailpay.click().then(function(){
            browser.sleep(8000);
          });
          obj.okpay.click().then(function(){
            browser.sleep(4000);
          });
          obj.createpdfbuttonpay.click().then(function(){
            browser.sleep(4000);
          });
          obj.downloadpay.click().then(function(){
            browser.sleep(4000);
          });
          obj.createexcelpay.click().then(function(){
            browser.sleep(4000);
          });
          obj.sendemailpay.click().then(function(){
            browser.sleep(8000);
          });
          obj.okpay.click().then(function(){
            browser.sleep(4000);
          });
          obj.createexcelpay.click().then(function(){
            browser.sleep(4000);
          });
          obj.downloadpay.click().then(function(){
            browser.sleep(6000);
          });


//no records found
          browser.refresh();
          browser.sleep(6000);

  obj.typesel1.click().then(function(){
    browser.sleep(5000);
  });

  obj.preorder1.click().then(function(){
    browser.sleep(5000);
  });

  obj.datesel.click().then(function(){
    browser.sleep(5000);
  });

  obj.cussel.click().then(function(){
    browser.sleep(5000);
  });

  obj.fromdatecal.click().then(function(){
    browser.sleep(5000);
  });
 // obj.datefebsel.click().then(function(){
   // browser.sleep(2000);
  //});

  obj.yeardrop.click().then(function(){
    browser.sleep(5000);
  });
  
  obj.yearsel.click().then(function(){
    browser.sleep(5000);
  });
  obj.monsel.click().then(function(){
    browser.sleep(5000);
  });
  obj.firstsel.click().then(function(){
    browser.sleep(5000);
  });
  obj.enddatesel.click().then(function(){
    browser.sleep(5000);
  });

  obj.yeardrop1.click().then(function(){
    browser.sleep(5000);
  });
  obj.yearsel1.click().then(function(){
    browser.sleep(5000);
  });
  obj.monsel1.click().then(function(){
    browser.sleep(5000);
  });
  obj.firstsel1.click().then(function(){
    browser.sleep(5000);
  });
  obj.filterbut.click().then(function(){
    browser.sleep(8000);
  });
  expect(obj.expres.getText()).toBe(data.expres);
  obj.expres.getText().then(function(text){
    console.log(text);
    browser.sleep(2000);
 
 });
},200000);
 
  });

using(d.Datadrivendigital, function (data, description) {
		
  it("Should verify all the labels of the DigitalID page" , function() {
      var EC = protractor.ExpectedConditions;

      browser.ignoreSynchronization = true;
     // obj.getURL();

     browser.sleep(5000);

      
      obj.digital.click().then(function(){
          browser.sleep(8000);

    }); 


   // obj.Student.click().then(function(){
     // browser.sleep(8000);

// }); 
expect((obj.Schoolname).isPresent()).toBe(true);
expect(obj.Schoolname.getText()).toBe(data.Schoolname);
                         obj.Schoolname.getText().then(function(text){
                             console.log(text);
                             browser.sleep(1000);
                       
                       });
expect((obj.district).isPresent()).toBe(true);
expect(obj.district.getText()).toBe(data.District);
                         obj.district.getText().then(function(text){
                             console.log(text);
                             browser.sleep(1000);
                       
                       });
expect((obj.Name).isPresent()).toBe(true);
expect(obj.Name.getText()).toBe(data.Studentname);
                         obj.Name.getText().then(function(text){
                             console.log(text);
                             browser.sleep(1000);
                       
                       });
expect((obj.ID).isPresent()).toBe(true);
expect(obj.ID.getText()).toBe(data.ID);
                         obj.ID.getText().then(function(text){
                             console.log(text);
                             browser.sleep(1000);
                       
                       });
expect((obj.Grade).isPresent()).toBe(true);
expect(obj.Grade.getText()).toBe(data.Grade);
                         obj.Grade.getText().then(function(text){
                             console.log(text);
                             browser.sleep(1000);
                       
                       });
expect((obj.HR).isPresent()).toBe(true);
expect(obj.HR.getText()).toBe(data.HR);
                         obj.HR.getText().then(function(text){
                             console.log(text);
                             browser.sleep(1000);
                       
                       });
expect((obj.Download).isPresent()).toBe(true);
obj.Download.click().then(function(){
 browser.sleep(5000);

});



expect((obj.image).isPresent()).toBe(true).then(function(){
console.log("Image is present");

});
expect((obj.barcode).isPresent()).toBe(true).then(function(){
console.log("Barcode is present");

});
expect((obj.returntodashboard).isPresent()).toBe(true).then(function(){
console.log("Return to Dashboard is present");

});
expect((obj.privacy).isPresent()).toBe(true).then(function(){
console.log("Privacy is present");

});
expect((obj.help).isPresent()).toBe(true).then(function(){
console.log("Help is present");

});
expect((obj.terms).isPresent()).toBe(true).then(function(){
console.log("Terms is present");

});

},200000);

it("Should not display ID card for inactive patron" , function() {

expect((obj.jack).isPresent()).toBe(false).then(function(){
console.log("ID card is not displaying for an inactive student ");

});

obj.forward.click().then(function(){
 browser.sleep(2000);

});
obj.forward.click().then(function(){
 browser.sleep(2000);

});
expect((obj.Samuel).isPresent()).toBe(true).then(function(){
console.log("Samuel  is present");

});


},200000);

it("Format and Student ID should be valid" , function() {

browser.setFileDetector(new remote.FileDetector());

    obj.getURL1();
    browser.sleep(8000);
    
   var fileToUpload = 'C:/Users/Harshitha TN/Downloads/371338.png';
   absolutePath = path.resolve(__dirname,fileToUpload);


   
obj.upload.sendKeys(absolutePath).then(function(){
browser.sleep(8000);
                  
});



browser.driver.sleep(5000);



obj.submit.click().then(function(){
  browser.driver.sleep(5000);

});

//handlePromise = browser.getAllWindowHandles();

    browser.getAllWindowHandles().then(function(handles){
      //handlePromise.then(function(handles) {

    browser.waitForAngularEnabled(false);

    //WebDriverWait wait=new WebDriverWait(driver,5).until(ExpectedConditions.numberOfWindowsToBe(2)); //induce WebDriverWait
   // var newtab = handles[1];
    var handle = browser.switchTo().window(handles[0]).then(function(){   
    //browser.switchTo().window(handles[1]).then(function(){
  browser.driver.sleep(5000);
    
  });

});

expect(obj.format.getText()).toBe(data.format);
obj.format.getText().then(function(text){
    console.log(text);
    browser.sleep(2000);

});

expect(obj.stuID.getText()).toBe(data.stuID);
obj.stuID.getText().then(function(text){
  console.log(text);
  browser.sleep(8000);

});


browser.close();


},25000000);

});

});
