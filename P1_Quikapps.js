describe('Protractor psc2', function() {
	var obj=  require("./JsObjectpage.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");

    

   
   
	//Test1
	using(d.Datadriven1, function (data, description) {
	it('Should land on Contact Information page', function() {

		browser.ignoreSynchronization = true;

		browser.sleep(4000);
		
	obj.email.sendKeys(data.emailfd);
    obj.password.sendKeys(data.passwordfd).then(function(){
		browser.sleep(5000);
		
	});

	
	
	
    obj.login.click().then(function(){
    	browser.sleep(25000);

	});
	
		 obj.cancel.click().then(function(){
		 browser.sleep(8000);
				 
			 });


    expect(obj.rfd.getText()).toBe(data.rfd);
    obj.rfd.getText().then(function(text){
			console.log(text);
			browser.sleep(1000);
	
	});
	

obj.freemealbutton.click();
browser.sleep(2000);

    expect(obj.title.getText()).toBe(data.title);
    obj.title.getText().then(function(text){
			console.log(text);
			browser.sleep(8000);

	});

	
	},200000);	
	});	
	

	
	
	//Test3
	using(d.Datadrivenq2, function (data, description) {
	it('Should update the information', function() {
		browser.sleep(8000);


			  
		  //fistname
		  obj.f_name.clear();
		  obj.f_name.sendKeys(data.f_name).then(function(){
			   browser.sleep(4000);
		 
		 
		   });
		 
		 
		//lastname
		  obj.l_name.clear();
		  obj.l_name.sendKeys(data.l_name).then(function(){
			   browser.sleep(4000);
			   
		 
		   });
		
		 //address1  
	 	obj.address.clear();
	obj.address.sendKeys(data.address1);
	browser.sleep(8000);


		
		
		   
		   
		//zipcode
		  obj.zipcode.clear();
		  obj.zipcode.sendKeys(data.zipcode).then(function(){
				browser.sleep(4000);
			}); 
		  
		  
		  
		  
		  
		  //cityname
		  obj.city.clear();
		    obj.city.sendKeys(data.city).then(function(){
		    	browser.sleep(4000);

		    });
		  
		  
	
		  
		  
		// PhoneNumber
		   //obj.ph_no.clear();
		  //obj.ph_no.sendKeys(data.ph_no).then(function(){
		   	//browser.sleep(1000);

		   //});
		   
		   
		   //SMSNumber
		  //obj.ph_no.clear();
		  //obj.m_no.sendKeys(data.m_no).then(function(){
			//   	browser.sleep(1000);

			  // });
		  
		  
		  
		//emaildropdown
		 //  obj.ed.click().then(function(){
		 //  	browser.sleep(1000);
		   	
		 //});
		   
		 //emailselection
	//	obj.eds.click().then(function(){
			//   	browser.sleep(1000);
			   	
			// });
		  
		  
		//continuebutton
		  obj.cb.click().then(function(){
		    	browser.sleep(5000);
		    	
		    	
		    });  
		
			expect(obj.savepop.getText()).toBe(data.savepop);
			obj.savepop.getText().then(function(text){
					console.log(text);
					browser.sleep(5000);

			});
		


		},200000);	
	
	});
	
	  //Test4
	using(d.Datadriven3, function (data, description) {
		it('Should navigate to Application page', function() {
			
		
			 //checkbox
			obj.checkbox.click().then(function(){
					browser.sleep(1000);
					
					
			   });
			  
			   //savebutton
			  obj.saveb.click().then(function(){
				   
				   browser.sleep(5000);
			   });
			  
			  expect(obj.r.getText()).toBe(data.r); 
			  obj.r.getText().then(function(text){
				console.log(text);
		});
	
		
		
		},200000);
		});
		
		
	 //Test5
	using(d.Datadrivenq4, function (data, description) {
		it('Should navigate to Verify Student page', function() {
			
		
		//returntoapplication
			obj.returntoapplication.click().then(function(){
			   browser.sleep(1000);
		});
		
			
			  expect(obj.Rexptd.getText()).toBe(data.Rexptd); 
			
			  
			  
			  //continue
			obj.cb1.click().then(function(){
					browser.sleep(1000);
					
					
				});
			  
			  
				expect(obj.Rexptd1.getText()).toBe(data.Rexptd1); 

		},200000);
		});
		
		

	//Test6
	using(d.Datadriven5, function (data, description) {
		it('Should add a student', function() {
			
		
		 //addstudent
		  obj.addstudent1.click().then(function(){
				   browser.sleep(1000);
				   
				   
			   });
		  
		  //studentid
	
		  obj.studentid1.sendKeys(data.studentid).then(function(){
				   browser.sleep(1000);
				   
				   
			   });
		//fistname
	
		  obj.firstname.sendKeys(data.fisrtname).then(function(){
				   browser.sleep(1000);
				   
				   
			   });  
		  
		//lastname
	
		  obj.lastname.sendKeys(data.lastname).then(function(){
				   browser.sleep(1000);
				   
				   
			   });
	


//obj.addbutton.click();
			   //CANCELbutton
		  
		  obj.cancelbutton.click().then(function(){
				   browser.sleep(1000);
				   
				   
			   });
		  
		
		},200000);
		});
		
		
			
		 
  //Test7
	using(d.Datadriven6, function (data, description) {
		it('Should navigate to Student Assistance page', function() {
			

		//continue2
		  obj.cb2.click().then(function(){
			   browser.sleep(1000);
			   
			   
		   });
		
		   expect(obj.r2.getText()).toBe(data.r2); 

		
		
		//studentassistancetype
		 obj.atd.click().then(function(){
			  browser.sleep(1000);
		   
			   
		   });
		   
		  //studentassistancetypedropdownselection
		  
	obj.atdselection.click().then(function(){
						browser.sleep(1000);
						   
						   
					   });
			
	//studentspecialsituationdropdown
	
	obj.ssd.click().then(function(){
						browser.sleep(1000);
						   
						   
					   });		  
				  
				  
	//studentspecialsituationdropdownselection
	
	obj.ssdselection.click().then(function(){
						browser.sleep(1000);
						   
						   
					   });				
	
		},200000);
		});
		


//Test8
using(d.Datadriven7, function (data, description) {
	it('Should navigate to Verify members page', function() {
	
	
	//continue3
	obj.cb3.click().then(function(){
		 browser.sleep(4000);
		 
		 
	 });
	
	
	
	
	expect(obj.r3.getText()).toBe(data.r3); 
	
	
				  
		},200000);
		});
		
		
		
	
	//Test9
	using(d.Datadriven8, function (data, description) {
	it('Should add a member', function() {
	
	
	//addmenber
		obj.addmember.click().then(function(){
			 browser.sleep(1000);
			 
			 
		 });
	
		
		
	//firstname
	obj.FN.sendKeys(data.FN).then(function(){
		 browser.sleep(1000);
		 
		 
	 });
	
	//lastname
	obj.LN.sendKeys(data.LN).then(function(){
		 browser.sleep(1000);
		 
		 
	 });
	
	//CANCELbutton
	
	obj.cancel1.click().then(function(){
			   browser.sleep(1000);
			   
			   
		   });
	
	


	//cb4button
	
	obj.cb4.click().then(function(){
			   browser.sleep(1000);
			   
			   
		   });
		   expect(obj.r4.getText()).toBe(data.r4); 

				  
		},200000);
		});
		
		


	
		
	//Test11
	using(d.Datadriven9, function (data, description) {
	it('Should land to Statements page', function() {
	
		//cb5button
	
		obj.continuebutton.click().then(function(){
				   browser.sleep(1000);
				   
				   
			   });
		
		expect(obj.r5.getText()).toBe(data.r5); 
		
		
	},200000);
	});
		
		
	
	//Test12
	using(d.Datadriven10, function (data, description) {
	it('Should navigate to Summary and Review page', function() {
	
		//cb6button
	
		obj.cb6.click().then(function(){
				   browser.sleep(1000);
				   
				   
			   });
		
		expect(obj.r6.getText()).toBe(data.r6); 
		
		
	},200000);
	});
	
	


//Test13
using(d.Datadriven11, function (data, description) {
	it('Should navigate to Sign your application page', function() {
	
		//iagreecheckbox
		obj.iagree.click().then(function(){
			   browser.sleep(1000);
			   
			   
		   });
		
		
		//cb7button
	
		obj.cb7.click().then(function(){
				   browser.sleep(5000);
				   
				   
			   });
		
		 
		
	expect(obj.r7.getText()).toBe(data.r7);	
		
		//radiobutton1
		//obj.rb1.click().then(function(){
		  // 	browser.sleep(1000);
			   
			   
		  // });
		
	
		//radiobutton2
		//obj.get(0).rb2.click().then(function(){
		 //  	browser.sleep(1000);
			   
			   
		  // });
		
		//obj.rbt.first().click().then(function(){
		//	   browser.sleep(1000);
			   
			   
		  // });
		
		
		
		var i;
		for (i=0;i<3;i++){
		//c1
		obj.c1.click().then(function(){
			   browser.sleep(1000);
			   
			   
		   });
		
	
		
		//c2
		obj.c2.click().then(function(){
			   browser.sleep(1000);
			   
			   
		   });
		
		
	
		//c3
		obj.c3.click().then(function(){
			   browser.sleep(1000);
			   
			   
		   });
		
		
	
		//c4
		obj.c4.click().then(function(){
			   browser.sleep(1000);
			   
			   
		   });
		
		
		//c5
		obj.c5.click().then(function(){
			   browser.sleep(1000);
			   
			   
		   });
	
		
		}
		expect(obj.r7.getText()).toBe(data.r7);	
		   obj.r7.getText().then(function(text){
			console.log(text);
	});
		
			obj.noSSN.click().then(function(){
				browser.sleep(1000);
				
				
			});
			obj.confirmpassword.sendKeys(data.password).then(function(){
				browser.sleep(1000);
				
				
			});
			obj.sign.click().then(function(){
				browser.sleep(8000);
				
				
			});
		
			
			obj.menuicon.click().then(function(){
				browser.sleep(4000);
				
				
			});

			
			obj.backtopscdashboard.click().then(function(){
				browser.sleep(15000);
				
				
			});

			
			obj.cancel.click().then(function(){
				browser.sleep(8000);
				
				
			});

			
			obj.logoutbutton.click().then(function(){
				browser.sleep(8000);
				
				
			});
		//obj.rbt.last().click().then(function(){
		//	   browser.sleep(5000);
			   
			   
		  // });

		   
		   //	   expect(obj.r8.getText()).toBe(data.r8);	
		
	},200000);
	});
	
/*//Test14
using(d.Datadriven13, function (data, description) {
	it('TS-'+description, function() {
	


	expect(obj.r8.getText()).toBe(data.r8);

});

});


*/

      
        	});	