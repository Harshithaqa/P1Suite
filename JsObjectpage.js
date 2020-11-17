const { element } = require("protractor");


function  PSCpageobjects()
{


	this.getURL=function() {
        //browser.waitForAngularEnabled(false);
        browser.get('https://dev.payschoolscentral.com');
        
    };

    this.getURL3=function() {
		//browser.waitForAngularEnabled(false);
		browser.get('https://www.guerrillamail.com/');
	};
	
	this.getURL4=function() {
		//browser.waitForAngularEnabled(false);
		browser.get('https://maildrop.cc/');
    };
    
    
    this.getURL1=function() {
        browser.waitForAngularEnabled(false);
       browser.get('https://online-barcode-reader.inliteresearch.com/');      
    };
    
//maildrop 

this.entermailid=element(by.xpath('//body/div[@id="root"]/div[1]/div[1]/div[1]/nav[1]/div[2]/form[1]/div[1]/input[1]'));
this.viewmail=element(by.xpath('//span[contains(text(),"View Inbox")]'));
this.body=element(by.xpath('//body'));
this.openmail=element(by.xpath('//body/div[@id="root"]/div[1]/section[1]/div[2]/div[1]/div[1]/a[1]'));

this.payschool=element(by.xpath('//a[contains(text(),"PaySchools Central")]'));
this.reload=element(by.xpath('//body/div[@id="root"]/div[1]/section[1]/div[1]/button[1]'));




			//New User Registration
	
			this.register=element(by.buttonText('REGISTER'));
			this.languagedropdown=element(by.xpath('/html/body/app-root/app-full-layout/app-register/div/form/div/div[2]/div/mat-form-field[1]/div/div[1]/div/mat-select/div/div[2]/div'));
			this.english=element(by.xpath('(//*[@class="mat-option-text"])[1]'));
			this.newemail=element(by.xpath('//input[@placeholder="Email"]'));
			this.fn=element(by.xpath('//input[@placeholder="First Name"]'));
			this.ln=element(by.xpath('//input[@placeholder="Last Name"]'));
			this.address1=element(by.xpath('//input[@placeholder="Address Line 1"]'));
			this.address2=element(by.xpath('//input[@placeholder="Address Line 2"]'));
			this.postalcode=element(by.xpath('//input[@placeholder="Postal Code"]'));
			this.city=element(by.xpath('//input[@placeholder="City"]'));
			this.statedropdown=element(by.xpath('(//*[@role="listbox"])[2]'));
			this.stateselection=element(by.className('cdk-overlay-pane')).element(by.css('mat-option:nth-child(1)'));
			this.ph=element(by.xpath('//input[@placeholder="Phone Number"]'));
			this.mb=element(by.xpath('//input[@placeholder="Mobile Number"]'));
			this.ch0=element(by.xpath('/html/body/app-root/app-full-layout/app-register/div/form/div/div[2]/div/div[1]/div/mat-checkbox/label/div'));
			this.registerbutton=element(by.xpath('//button[@class="btn btn-orange mt-3"]'));
			this.rtl=element(by.xpath('//button[@class="btn btn-white"]")]'));
			this.resultUS=element(by.xpath('//h2[contains(text(),"Registration Success")]'));
			this.useralreadyexists=element(by.xpath('//span[contains(text(),"The registration was unsuccessful due to - User al")]'));
			this.invalidemailid=element(by.xpath('//div//mat-error[contains(text()," Invalid email address.")]'));
			this.FNrequired=element(by.xpath('//div//mat-error[contains(text()," First Name is required.")]'));
			this.LNrequired=element(by.xpath('//div//mat-error[contains(text()," Last Name is required.")]'));
			this.Addressrequired=element(by.xpath('//div//mat-error[contains(text()," Address Line 1 is required.")]'));
			this.Postalcoderequired=element(by.xpath('//div//mat-error[contains(text()," Postal Code is required. ")]'));
			this.Cityrequired=element(by.xpath('//div//mat-error[contains(text()," City is required")]'));
			this.Staterequired=element(by.xpath('//div//mat-error[contains(text()," State is required")]'));

			this.r12=element(by.xpath('/html[1]/body[1]/div[3]/div[1]/div[1]/snack-bar-container[1]/simple-snack-bar[1]/span[1]'));



			//Guerrilla mail 
			this.drop=element(by.xpath('//select[@id="gm-host-select"]'));
			this.dropselect=element(by.xpath('//select[@id="gm-host-select"]//option[@value="guerrillamail.com"]'));
			this.idselect=element(by.xpath('//span[@class="editable button"]'));
			this.identer=element(by.xpath('//span//input[@type="text"]'));
			this.mailset=element(by.xpath('//button[contains(text(),"Set")]'));
			this.welcomeclick=element(by.xpath('//td[contains(text(),"Payschools Central - Confirm Your Account")]'));
			this.pubmail=element(by.xpath('//input[@placeholder="Enter Public Mailinator Inbox"]'));
			this.gobut=element(by.xpath('//div//button[contains(text(),"GO")]'));
			this.inbox=element(by.xpath('//td//a[contains(text(),"Payschools Central - Confirm Your Account")]'));
			this.link=element(by.xpath('//a[contains(text(),"this link.")]'));
			this.transactionmail=element(by.xpath('/html[1]/body[1]/div[4]/div[1]/div[3]/div[2]/form[1]/table[1]/tbody[1]/tr[1]/td[3]'));
			this.readata=element(by.xpath('//body/div[@id="guerrilla_mail"]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]'));
			this.psclink=element(by.xpath('//a[contains(text(),"PaySchools Central")]'));


			//Activation of new email in PSC 
			this.accountactivation=element(by.xpath('//h1[contains(text(),"Account Activation")]'));
			this.activationemail=element(by.css('[placeholder="Email"]'));
			this.activationpassword=element(by.xpath('//*[@name="Password"]'));
			this.activationconfirmationpassword=element(by.xpath('//*[@name="ConfirmPassword"]'));
			this.Confirmmessage=element(by.xpath('//h2[contains(text(),"Successfully set password")]'));
			this.loginbut=element(by.xpath('//button[@class="btn btn-white"]'));
			this.confirmbutton=element(by.xpath('//button[@class="btn btn-orange"]'));

			//New User login
			this.email=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-login[1]/div[1]/div[2]/div[2]/div[1]/form[1]/mat-form-field[1]/div[1]/div[1]/div[1]/input[1]'));
			this.password= element(by.xpath('//*[@placeholder="Password"]'));
			this.login=element(by.xpath('//button[@class="btn btn-orange"]'));
			this.cancel = element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-remove-dialog[1]/div[1]/div[1]/div[2]/a[1]/mat-icon[1]'));
			this.returntodashboard=element(by.xpath('//p[contains(text(),"Return To Dashboard")]'));
			this.menudashboard=element(by.xpath('//span[contains(text(),"Dashboard")]'));
			this.logoutbutton=element(by.xpath('//span[contains(text(),"Logout")]'));
			this.rtdbutton=element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-checkout-messages[1]/div[1]/div[2]/div[1]/button[1]'));
			this.warningpopup=element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-common-dialog[1]/div[1]/p[1]'));
			this.cancelbutton1=element(by.xpath('//mat-icon[contains(text(),"cancel")]'));
			this.continuebutton=element(by.xpath('//button[contains(text(),"Continue")]'));
			this.forwardbutton=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-dashboard[1]/div[2]/div[1]/app-all-patrons[1]/div[1]/form[1]/div[1]/div[2]/mat-tab-group[1]/mat-tab-header[1]/div[3]/div[1]'));
			this.menu=element(by.xpath('//app-header/div[1]/div[1]/div[1]/div[1]/app-side-menu[1]/div[1]/div[1]/button[1]/span[1]/i[1]'));
			this.invalidemailaddress=element(by.xpath('//div//mat-error[contains(text()," Invalid email address.")]'));
			this.invalidpassword=element(by.xpath('//div//mat-error[contains(text()," Password is required")]'));
			this.invalidemailandpassowrd=element(by.xpath('//span[contains(text(),"We are sorry, either your Email address or password is invalid.")]'));
			this.invalidemail=element(by.xpath('//span[contains(text(),"We are sorry, either your Email address or password is invalid.")]'));

			//forgot password
			this.forpass=element(by.xpath('//a//p[contains(text(),"I forgot my password")]'));
			this.ema=element(by.xpath('//input[@placeholder="Email"]'));
			this.respass=element(by.xpath('//div//span[contains(text(),"How would you like to reset your password?")]'));
			this.emailme=element(by.xpath('//div//button[contains(text(),"Email me")]'));
			this.r13=element(by.xpath('//mat-error//span[contains(text(),"Invalid email address.")]'));
			this.text=element(by.xpath('//div//button[contains(text(),"Text/Call ")]'));
			this.r14=element(by.xpath('//span[contains(text(),"We are sorry, you do not have a phone number on file with your account. Please use the Email link to reset your password.")]'));
			this.returntologin=element(by.xpath('//p[contains(text(),"Return To Login")]'));
			this.closemessage=element(by.xpath('//span[contains(text(),"Close")]'));

			//Secure account
			this.secure=element(by.cssContainingText('.sub-header', 'Secure Account'));
			this.result4=element(by.xpath('//span[contains(text(),"Secure account updated successfully")]'));

			this.qa1=element(by.className("mat-select-trigger")).element(by.css("span:nth-child(1)"));
			this.selectqa1=element(by.className('cdk-overlay-pane')).element(by.css('mat-option:nth-child(2)'));
			this.ans1=element(by.xpath('(//input[@placeholder="Your Answer"])[1]')); 
			this.qa2=element(by.xpath('(//*[@class="mat-select-trigger"])[2]'));
			this.selectqa2=element(by.className('cdk-overlay-pane')).element(by.css('mat-option:nth-child(3)'));
			this.ans2=element(by.xpath('(//input[@placeholder="Your Answer"])[2]')); 
			this.qa3=element(by.xpath('(//*[@class="mat-select-trigger"])[3]'));
			this.selectqa3=element(by.className('cdk-overlay-pane')).element(by.css('mat-option:nth-child(4)'));
			this.ans3=element(by.xpath('(//input[@placeholder="Your Answer"])[3]')); 
			this.update1=element(by.xpath('//button[contains(text(),"Update")]'));
			this.secure1=element(by.xpath('//button[contains(text(),"SECURE")]'));
			this.continue1=element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-common-dialog[1]/div[1]/div[2]/div[1]/button[1]'));
			this.securecomplete=element(by.xpath('//h2[contains(text(),"Account security complete")]'));
			this.answerrequired=element(by.xpath('//div//div[contains(text(),"Answer is required")]'));
			this.r20=element(by.xpath('//div//mat-error[contains(text()," Question required.")]'));
			this.r21=element(by.xpath('//span[contains(text(),"Answers to security questions must be unique, please provide a different answer or select a different question.")]'));


			//Add student and Delete student

				this.clickoutside=element(by.xpath('//body/app-root[1]/app-full-layout[1]/app-add-patrons[1]/div[2]/form[1]/div[2]/div[2]'));
				this.student=element(by.id('YourStudents'));
				this.addstudent=element(by.buttonText('Add Student / Staff'));
				this.state=element(by.name('IntStateId'));
				this.selectstate=element(by.className('cdk-overlay-pane')).element(by.css('mat-option:nth-child(1)'));
				this.district=element(by.xpath('//body/app-root[1]/app-full-layout[1]/app-add-patrons[1]/div[2]/form[1]/div[1]/div[2]/div[2]/mat-form-field[2]/div[1]/div[1]/div[1]'));
				this.districtsaugus=element(by.xpath('//span[contains(text(),"Saugus")]'));
				this.districtsulphur=element(by.xpath('//span[contains(text(),"Sulphur")]'));
				this.studentid=element(by.name('PatronId'));
				this.fname=element(by.name('FirstName'));
				this.lname=element(by.name('LastName'));
				this.relation=element(by.xpath('/html/body/app-root/app-full-layout/app-add-patrons/div[2]/form/div/div[2]/div[2]/mat-form-field[6]/div/div[1]/div/mat-select/div/div[1]/span'));
				this.relationselect=element(by.xpath('//span[contains(text(),"Non-Guardian")]'));
				this.studentbutton=element(by.xpath('//button[@class="btn btn-primary mt-4"]'));
				this.success=element(by.xpath('//span[contains(text(),"Student successfully added.")]'));
				this.continue2=element(by.xpath('//button[contains(text(),"Continue")]'));
				this.deletestudent=element(by.xpath('//body/app-root[1]/app-full-layout[1]/app-add-patrons[1]/div[2]/form[1]/div[1]/div[2]/div[2]/div[2]/i[1]'));
				this.removepopup=element(by.xpath('//h2[contains(text(),"Remove Student or Staff")]'));
				this.viewpageremove=element(by.xpath('//div//span//mat-icon[contains(text(),"cancel")]'));
				this.yes=element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-remove-dialog[1]/div[1]/div[2]/div[1]/button[1]'));
				this.r15=element(by.xpath('//div//mat-error[contains(text(),"Please enter Student Id ")]'));
				this.r16=element(by.xpath('//span[contains(text(),"No match found for patron")]'));
				this.r17=element(by.xpath('//div//mat-error[contains(text(),"Please enter first name ")]'));
				this.r18=element(by.xpath('//div//mat-error[contains(text(),"Please enter last name ")]'));
				this.r19=element(by.xpath('//div//mat-error[contains(text(),"Relationship is required ")]'));


			//Add Payment and Delete Payment method

			this.paymentmethod=element(by.id('PaymentMethods'));
			this.addpayment=element(by.buttonText('Add Payment Method'));
			this.paymentdropdown=element(by.name('paymenttype'));
			this.paymentdropdown1=element(by.xpath('//body/app-root[1]/app-full-layout[1]/app-add-payment-methods[1]/div[2]/form[1]/div[2]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]/div[1]'));

			this.paymentmethoddropdown=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-cart[1]/div[1]/div[1]/div[4]/div[1]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]'));
			this.usenewcard=element(by.xpath('//span[contains(text(),"USE NEW CARD")]'));
			this.paymentselection=element(by.css('mat-option:nth-child(1)'));
			this.nickname=element(by.name('NickName'));
			this.cardnumber=element(by.name('Number'));
			this.expirydate=element(by.name('expdate'));
			this.cvv=element(by.name('Cvv'));
			this.paymentselection1=element(by.css('mat-option:nth-child(2)'));
			this.Accounttypedropdown1=element(by.name('AccountType'));
			this.Accounttype1=element(by.xpath('//span[contains(text(),"Savings")]'));
			this.Accountnumber1=element(by.name('AccountNumber'));
			this.routingnumber1=element(by.name('RoutingNumber'));
			this.checkbox1=element(by.name('Terms'));
			this.checkbox2=element(by.name('Default'));
			this.checkbox3=element(by.name('ACHTerms'));
			this.addpaymentbutton=element(by.xpath('//button[contains(text(),"ADD PAYMENT METHOD")]'));
			this.paymentmethodsuccess=element(by.xpath('//span[contains(text(),"Successfully added")]'));
			this.cancelpayment=element(by.xpath('//body/app-root[1]/app-full-layout[1]/app-view-payment-methods[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/span[1]/mat-icon[2]'));
			this.paymentremove=element(by.xpath('//h2[contains(text(),"Remove Payment Method")]'));
			this.cancelpaymentyes=element(by.buttonText('YES'));
			this.successfulpayment=element(by.xpath('//h2[contains(text(),"Success")]'));
			this.paymentsuccess1=element(by.buttonText('YES'));
			this.defaultpayment=element(by.xpath('//body/app-root[1]/app-full-layout[1]/app-view-payment-methods[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/span[1]/mat-icon[2]'));
			this.deletedefaultpayment=element(by.xpath('//body/div[2]/div[1]/div[1]/snack-bar-container[1]/simple-snack-bar[1]'));
			this.newcardfirstname=element(by.xpath('//*[@placeholder="First Name"]'));
			this.newcardlastname=element(by.xpath('//*[@placeholder="Last Name"]'));
			this.newcardnumber=element(by.xpath('//*[@placeholder="Card Number"]'));
			this.newcarddate=element(by.xpath('//*[@placeholder="MM/YY"]'));
			this.newcardcvv=element(by.xpath('//*[@placeholder="CVV Number"]'))
			this.submitcard=element(by.xpath('//button[contains(text(),"Submit")]'));
			this.saveforfuture=element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-checkout-onthefly-dialog[1]/div[1]/form[1]/div[7]/div[1]/div[1]/mat-checkbox[1]/label[1]/div[1]'));
			this.cardnickname=element(by.xpath('//*[@placeholder="Nick Name"]'));
			this.newcard=element(by.xpath('//span[contains(text(),"USE NEW CARD")]'));
			this.maxlimit=element(by.xpath('//span[contains(text(),"Error due to - Only 5 payment methods may be added")]'));

			this.error1=element(by.xpath('//div[contains(text(),"Enter 16 digit card number")]'));

			this.error2=element(by.xpath('//div[contains(text(),"Enter valid future date in MM")]'));
		
			this.error3=element(by.xpath('//div[contains(text(),"Enter 15 digit card number")]'));
			this.error4=element(by.xpath('//div[contains(text(),"Enter Nick Name")]'));
			this.error5=element(by.xpath('//div[contains(text(),"Enter 4 digit Cvv number")]'));
			this.error6=element(by.xpath('//div[contains(text(),"Please enter valid CVV number")]'));
			this.error7=element(by.xpath('//div//mat-error[contains(text(),"Please enter valid account number.")]'));
			this.error8=element(by.xpath('//div//mat-error[contains(text(),"Please enter valid routing number.")]'));
			this.error9=element(by.xpath('//div[contains(text(),"Enter 3 digit Cvv number")]'));
			this.error10=element(by.xpath('/html[1]/body[1]/div[2]/div[1]/div[1]/snack-bar-container[1]/simple-snack-bar[1]/span[1]'));
			this.error11=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-add-payment-methods[1]/div[2]/form[1]/div[2]/div[2]/mat-form-field[1]/div[1]/div[3]/div[1]/mat-error[1]'));
			this.error12=element(by.xpath('//div//mat-error[contains(text(),"Select Account type")]'));
			this.error13=element(by.xpath('/html[1]/body[1]/div[2]/div[1]/div[1]/snack-bar-container[1]/simple-snack-bar[1]/span[1]'));
		
		
			this.returntodashboardbutton=element(by.xpath('//button[contains(text(),"Return To Dashboard")]'));

			this.newcardname=element(by.xpath('//body/app-root[1]/app-full-layout[1]/app-view-payment-methods[1]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/p[1]'));










			// Notification page


			this.notification=element(by.xpath('//p/span[contains(text(),"Notifications")]'));
			this.mealtoggle=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-notifications[1]/div[1]/form[1]/div[1]/div[2]/div[2]/div[2]/div[2]/div[2]/mat-slide-toggle[1]/label[1]'))
			this.notificationsuccess=element(by.xpath('//span[contains(text(),"Notifications added successfully")]'));
			this.fundamo=element(by.name('FundAccountBalance'));
			this.fundamoselect=element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[1]/mat-option[5]/span[1]'));
			this.dayofmonth=element(by.name('DayofMonthStatement'));
			this.dayofmonthselect=element(by.xpath('//mat-option//span[@class="mat-option-text"][contains(text(),"14th")]'));
			this.updatebutton=element(by.buttonText('Update'));
			this.gtd=element(by.xpath('//button[contains(text(),"Go to Dashboard")]'));
			this.resultnot=element(by.xpath('//span[contains(text(),"Notifications added Successfully"]'));


			//Messages


			this.messages=element(by.xpath('//span[contains(text(),"Messages")]'));
			this.message1=element(by.xpath('(//*[@class="fc-gray"])[1]'));
			this.closepopup1=element(by.className('dialog-close-icon mat-icon notranslate material-icons mat-icon-no-color'));
			this.deletemessage=element(by.xpath('//button[@class="btn btn-white"]'));
			this.message2=element(by.xpath('//p[@class="text-message-pop"]'));
			this.deleteicon=element(by.xpath('//mat-icon[contains(text(),"delete")]'));
			this.warningmessage=element(by.xpath('//p[contains(text(),"Please select a message to delete")]'));


			//cart

			this.clickoncart=element(by.className('custom-hide'));
			this.clickonselect=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-cart[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/table[1]/thead[1]/tr[1]/th[1]/mat-checkbox[1]/label[1]/div[1]'));
			this.continue=element(by.xpath('//button[contains(text(),"CONTINUE")]'));
			this.paymentcheckbox=element(by.className('checkbox-display')).element(by.css('label:nth-child(1)'));
			this.delete=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-cart[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[7]/mat-icon[1]'));
			this.yes=element(by.xpath('//button[contains(text(),"Yes")]'));
			this.makepayment=element(by.buttonText('MAKE PAYMENT'));
			this.selectall=element(by.xpath('//thead/tr[1]/th[1]/mat-checkbox[1]/label[1]/div[1]'));
			this.paymentsel=element(by.xpath('//div[@class="mat-select-value"]'));
			this.achcart=element(by.xpath('//span[contains(text()," TestACh ")]'));
			this.delall=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-cart[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/div[1]/h6[1]/span[1]/a[1]/mat-icon[1]'));
			this.cartcheckboxtext=element(by.xpath('//body/ngb-modal-window[1]/div[1]/div[1]/app-cart-dialog[1]/div[1]/div[6]/div[2]'));
			this.cartcheckbox=element(by.xpath('//body/ngb-modal-window[1]/div[1]/div[1]/app-cart-dialog[1]/div[1]/div[6]/div[1]/mat-checkbox[1]/label[1]/div[1]'));
			this.transactionunder$5=element(by.xpath('//h2[contains(text(),"There is a problem - Transactions under $5.00 are ")]'));
			this.returntocart=element(by.xpath('//button[contains(text(),"Return To Cart")]'));
			this.closepopup=element(by.xpath('//mat-icon[contains(text(),"cancel")]'))
			this.noitemsincart=element(by.xpath('//div[contains(text(),"No items in Cart")]'));
			//Meal functionality
			this.addcart1=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-dashboard[1]/div[2]/div[2]/form[1]/div[1]/div[2]/app-meals[1]/div[2]/div[1]/table[1]/tbody[1]/tr[2]/td[3]/span[1]/mat-icon[1]'));

			this.addcart=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-dashboard[1]/div[2]/div[2]/form[1]/div[1]/div[2]/app-meals[1]/div[2]/div[1]/table[1]/tbody[1]/tr[2]/td[4]/span[1]/mat-icon[1]'));
			this.amount=element(by.xpath('//input[@name="Amount"]'));
			this.addtocartbutton=element(by.buttonText('Add to Cart'));
			this.mealcartamount=element(by.xpath('//td[contains(text(),"$ 5.00")]'));
			this.incart=element(by.xpath('//tbody//tr[contains(text()," In-Cart $ 5.00 ")]'));
			this.edit=element(by.xpath('//span//mat-icon[contains(text(),"edit")]'));
			
			//Meal Restriction
			this.mealmenu=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-dashboard[1]/div[2]/div[2]/form[1]/div[1]/div[2]/app-meals[1]/div[1]/div[1]/div[2]/span[1]/i[1]'));
			this.mealrestriction=element(by.buttonText('Meal Restrictions'));
			this.selectstudentandstaff=element(by.xpath('//div//span[contains(text(),"Select Student / Staff")]'))
			this.Michael=element(by.xpath('//span[contains(text(),"Aguilar")]'));
			this.mealamount=element(by.xpath('//*[@placeholder="Enter Amount To Add"]'));
			this.noalacart=element(by.xpath('(//*[@class="mat-slide-toggle-thumb-container"])[1]'));
			this.nobreakfast=element(by.xpath('(//*[@class="mat-slide-toggle-thumb-container"])[2]'));
			this.nosecondmeal=element(by.xpath('(//*[@class="mat-slide-toggle-thumb-container"])[3]'));
			this.alacarte=element(by.xpath('//span[contains(text(),"A La Carte")]'));
			this.meals=element(by.xpath('//span[@class="mat-checkbox-label"][contains(text(),"Meals")]'));
			this.Frozen=element(by.xpath('//span[contains(text(),"Frozen Treats")]'));
			this.searchitems=element(by.xpath('//*[@placeholder="Search For An Item"]'));
			this.breakfast=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-meal-restrictions[1]/div[2]/div[1]/form[2]/div[1]/div[2]/div[4]/div[3]/div[1]/div[1]/h6[1]/mat-checkbox[1]/label[1]/div[1]'));
			this.savebutton=element(by.buttonText('SAVE'));
			this.result3=element(by.xpath('//h2[contains(text(),"Success")]'));
			this.ok=element(by.buttonText('OK'));
			this.manageauto1=element(by.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/button[1]'));
			this.mealhistory=element(by.xpath('//body/div[2]/div[2]/div[1]/div[1]/div[1]/button[2]'));


			//Fees

			this.fees=element(by.xpath('//mat-panel-title[contains(text(),"Fees")]'));
			this.addfee=element(by.xpath('//div[@class="row vertical-align expansion-content ng-star-inserted"]//div[@class="col-3 custom-add"]//span//mat-icon[contains(text()," shopping_cart")]'));
			this.addfee1=element(by.xpath('//mat-tab-body/div[1]/div[1]/div[2]/mat-accordion[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[4]/div[5]/span[1]/mat-icon[1]'));

			this.addfeetocart=element(by.className('btn btn-orange'));
			this.optionfee=element(by.xpath('(//*[@class="mat-row ng-star-inserted"])[2]')).element(by.css('td:nth-child(3)'));
			this.incartfee=element(by.xpath('//div//p[contains(text()," In-Cart $ 100.00")]'));
			this.incartver=element(by.xpath('//p[contains(text()," In-Cart $ 10.00")]'));
			this.schedulefee1=element(by.xpath('//mat-tab-body/div[1]/div[1]/div[2]/mat-accordion[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[2]/div[5]/span[3]/mat-icon[1]'));

			this.schedulefee=element(by.xpath('//mat-tab-body/div[1]/div[1]/div[2]/mat-accordion[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[2]/div[4]/span[3]/mat-icon[1]'));
			this.firsttinstallment=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-dashboard[1]/div[2]/div[3]/form[1]/div[1]/div[2]/app-fees[1]/mat-tab-group[1]/div[1]/mat-tab-body[2]/div[1]/div[1]/mat-accordion[1]/mat-expansion-panel[1]/div[1]/div[1]/form[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[1]/input[1]'));
			this.paymentdate=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-dashboard[1]/div[2]/div[3]/form[1]/div[1]/div[2]/app-fees[1]/mat-tab-group[1]/div[1]/mat-tab-body[2]/div[1]/div[1]/mat-accordion[1]/mat-expansion-panel[1]/div[1]/div[1]/form[1]/div[1]/mat-form-field[2]/div[1]/div[1]/div[2]/mat-datepicker-toggle[1]/button[1]'));
			this.selectdate=element(by.xpath('//div[contains(text(),"30")]'));
			this.back=element(by.xpath('//button[contains(text(),"Back")]'));
			this.addschedule=element(by.xpath('//button[contains(text(),"Add/Update Schedule")]'));
			this.cartschedule=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-dashboard[1]/div[2]/div[3]/form[1]/div[1]/div[2]/app-fees[1]/mat-tab-group[1]/div[1]/mat-tab-body[1]/div[1]/div[1]/div[2]/mat-accordion[1]/mat-expansion-panel[1]/div[1]/div[1]/div[1]/div[2]/div[4]/span[1]/mat-icon[1]'));
			this.ignore=element(by.xpath('//button[contains(text(),"Ignore")]'));
			this.amountdue=element(by.xpath('//div[contains(text(),"$80.00")]'));
			this.feedropdown=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-dashboard[1]/div[2]/div[3]/form[1]/div[1]/div[2]/app-fees[1]/mat-tab-group[1]/div[1]/mat-tab-body[1]/div[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]'));
			this.selectscheduledfee=element(by.xpath('//span[contains(text(),"Scheduled Fees")]'));
			this.feecartamount=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-cart[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[5]'));
			this.ash=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-dashboard[1]/div[2]/div[1]/app-all-patrons[1]/div[1]/form[1]/div[1]/div[2]/mat-tab-group[1]/mat-tab-header[1]/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]'));
			this.feedrop=element(by.xpath('//span//mat-panel-title[contains(text(),"Fees")]'));
			this.amountdue1=element(by.xpath('//div[contains(text(),"$100.00")]'));
			this.deleteschedulefee=element(by.xpath('//mat-icon[contains(text(),"delete")]'));
			this.confirmdelete=element(by.xpath('//button[contains(text(),"Yes")]'));
			this.selectallfee=element(by.xpath('//span[contains(text(),"All Fees")]'));
			this.checkboxfee=element(by.xpath('//tbody/tr[3]/td[1]/mat-checkbox[1]/label[1]/div[1]'));
			this.deletefee=element(by.xpath('//tbody/tr[3]/td[7]/mat-icon[1]'));
			this.scheduledfee=element(by.xpath('//div//div[contains(text(),"Sports fee")]'));
			this.selectinactivestu=element(by.xpath('//mat-tab-header/div[2]/div[1]/div[1]/div[5]/div[1]/a[1]'));
			this.nofeestodisplay=element(by.xpath('//div[contains(text(),"No Fees to display")]'));
			this.Cole=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-dashboard[1]/div[2]/div[1]/app-all-patrons[1]/div[1]/form[1]/div[1]/div[2]/mat-tab-group[1]/mat-tab-header[1]/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]'));




			//Fund
			this.selectastudent=element(by.xpath('//mat-tab-header/div[2]/div[1]/div[1]/div[5]/div[1]/a[1]'));
			this.allstudent=element(by.xpath('//mat-tab-header/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]'));
			this.inactivestu=element(by.xpath('//select//option[contains(text(),"Cole Johnson")]'));
			this.activestu=element(by.xpath('//option[contains(text(),"Jack Johnson")]'));
			this.differentfamilystu=element(by.xpath('//option[contains(text(),"Ava Johnson")]'));

			this.selectapatron=element(by.xpath('//select//option[contains(text(),"Jack Johnson")]'));

			this.addfund=element(by.xpath('//div[@class="table-responsive mt-2 ng-star-inserted"]//table[@class="table"]//td//mat-icon[contains(text()," shopping_cart")]'));
			this.fundamount=element(by.name('Amount'));
			this.addfundtocart=element(by.buttonText('Add to Cart'));
			this.fundtransfericon=element(by.xpath('//button[@class="custom-transfer mat-icon-button"]//i[contains(text(),"swap_horizontal_circle")]'));
			this.patdrop=element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-fund-transfer-dialog[1]/div[1]/div[2]/form[1]/div[1]/select[1]'));
			this.patdrop1=element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-fund-transfer-dialog[1]/div[1]/div[2]/form[1]/div[7]/select[1]'));

			this.patsel=element(by.xpath('//select//option[contains(text(),"Michael Aguilar ")]'));
			this.selectaccounttype=element(by.xpath('//select//option[contains(text(),"Select Account type")]'));
			this.selectprog=element(by.xpath('//select//option[contains(text()," After School Program")]'));
			this.amttotrans=element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-fund-transfer-dialog[1]/div[1]/div[2]/form[1]/div[6]/div[2]/input[1]'));
			this.selectpat=element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-fund-transfer-dialog[1]/div[1]/div[2]/form[1]/div[7]/select[1]/option[3]'));
			this.selectpat1=element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-fund-transfer-dialog[1]/div[1]/div[2]/form[1]/div[7]/select[1]/option[2]'));

			this.chkboxtrans=element(by.xpath('//div[@class="mat-checkbox-inner-container"]'));
			this.transfer=element(by.xpath('//button[contains(text(),"TRANSFER")]'));
			this.rettodsh=element(by.xpath('//p[@class="fc-gray underline-text"]'));
			this.fundmenu=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-dashboard[1]/div[2]/div[4]/form[1]/div[1]/div[2]/app-fund[1]/div[1]/div[1]/div[2]/span[1]/i[1]'));
			this.manageautoreplishment=element(by.xpath('//body/div[2]/div[2]/div[1]/div[1]/div[1]/button[1]'));
			this.autosuccess=element(by.xpath('//span[contains(text(),"Auto Replenishment saved successfully")]'));
			this.autoturnedoff=element(by.xpath('//span[contains(text(),"All Auto Replenishment turn off successfully")]'));
			this.mealhistory=element(by.xpath('//body/div[2]/div[2]/div[1]/div[1]/div[1]/button[2]'));
			this.selectstudent2=element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[1]/mat-option[2]/mat-pseudo-checkbox[1]'));
			this.fundcartamount=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-cart[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[5]'));
			this.differentfamily=element(by.xpath('//span[contains(text(),"The source and target students do not belong to th")]'));
			this.inactivepatron=element(by.xpath('//select//option[contains(text(),"John Alexander")]'));
			this.norecords=element(by.xpath('//div[contains(text(),"No records found")]'));
			this.samefamily=element(by.xpath('//span[contains(text(),"Sharing is not allowed on this patrons account. Pl")]'));



			//charge

			this.transactionalfee=element(by.xpath('//tr//td[contains(text(),"$0.00")]'));
			this.icfee=element(by.xpath('//tr//td[contains(text(),"$0.00")]'));
			this.help1=element(by.xpath('//mat-icon[contains(text(),"help_outline")]'));
			this.transactionalfee1=element(by.xpath('//tr//td[contains(text(),"$0.00")]'));
			this.icfee1=element(by.xpath('//tr//td[contains(text(),"$0.00")]'));
			this.cancelicon=element(by.xpath('//a//mat-icon[contains(text(),"cancel")]'));


			//your profile


			this.profile=element(by.xpath('//span[contains(text(),"Your Profile")]'));
			this.emailt=element(by.xpath('//div//input[@placeholder="Email"]'));
			this.r22=element(by.xpath('//div//mat-error[contains(text()," Email is required.")]'));
			this.firstnm=element(by.xpath('//div//input[@placeholder="First Name"]'));
			this.lastnm=element(by.xpath('//div//input[@placeholder="Last Name"]'));
			this.r23=element(by.xpath('//div//mat-error[contains(text()," Invalid email address.")]'));
			this.pinc=element(by.xpath('//input[@placeholder="Postal Code"]'));
			this.r24=element(by.xpath('//div[contains(text()," Enter Nick Name ")]'));
			this.r25=element(by.xpath('//div[contains(text()," Enter 16 digit card number ")]'));
			this.r26=element(by.xpath('//div[contains(text(),"  Enter valid future date in MM/YY format ")]'));
			this.update=element(by.xpath('//button[contains(text(),"UPDATE")]'));
			this.successmessage=element(by.xpath('//span[contains(text(),"Profile updated successfully.")]'));

			//Autoreplenishment

			this.autoreplenish=element(by.xpath('//p/span[contains(text(),"Auto Replenishment")]'));
			this.accountdrop=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/div[1]/div[2]/div[1]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]'));
			this.selectmeal=element(by.xpath('//mat-option//span[contains(text(),"Meal Account")]'));
			this.amttoadd=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/app-auto-replenishment-meal[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]'));
			this.add30=element(by.xpath('//mat-option//span[contains(text(),"$30")]'));
			this.ballevel=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/app-auto-replenishment-meal[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]'));
			this.ten$=element(by.xpath('//mat-option//span[@class="mat-option-text"][contains(text()," $10 ")]'));
			this.datepick=element(by.xpath('//div[@class="col-md-8"]//div[@class="ps-card"]//div[@class="mat-form-field-flex"]//div//mat-datepicker-toggle[@class="mat-datepicker-toggle"]//button[@class="mat-icon-button"]'));
			this.dateselection=element(by.xpath('//table//tbody//tr//td//div[contains(text(),"30")]'));
			this.paydrop=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/app-auto-replenishment-meal[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[5]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]/div[1]'));
			this.paydrop1=element(by.xpath('//span[@class="mat-option-text"]'));
			this.save=element(by.xpath('//button[contains(text(),"Save")]'));
			this.autocheckbox=element(by.xpath('//div[@class="mat-checkbox-inner-container"]'));
			this.saveauto=element(by.xpath('//button[@class="btn btn-white"]'));
			this.autoclose=element.all(by.xpath('//div[@class="cdk-overlay-container"]//span[contains(text(),"close")]'));
			this.selectfund=element(by.xpath('//mat-option//span[contains(text(),"Fund Account")]'));
			this.amttoadd1=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/app-auto-replenishment-fund[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[4]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]'));
			this.add301=element(by.xpath('//mat-option//span[contains(text(),"$30")]'));
			this.ballevel1=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/app-auto-replenishment-fund[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]/div[1]'));
			this.ten$1=element(by.xpath('//mat-option//span[@class="mat-option-text"][contains(text()," $10 ")]'));
			this.paymentmethodrep=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/app-auto-replenishment-fund[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[6]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]/div[1]'));
			this.paymentmethodrep1=element(by.xpath('//span[@class="mat-option-text"]'));
			this.sav1=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/app-auto-replenishment-fund[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[3]/div[2]/button[1]'));
			this.toggleoff=element(by.xpath('//div[@class="mat-slide-toggle-thumb"]'));
			this.yesbutton=element(by.xpath('//button[contains(text(),"YES")]'));
			this.turnoffauto=element(by.xpath('//button[@class="btn btn-primary turnoff-ar"]'));
			this.viewallhistory=element(by.xpath('//button[contains(text(),"VIEW ALL HISTORY")]'));

			//Payment history

			this.paymenthistoryheader=element(by.xpath('//h1[contains(text(),"Payment History")]'));
			this.paymenthistory=element(by.xpath('//span[contains(text(),"Payment History")]'));
			this.typesel=element(by.xpath('//mat-select[@name="Type"]//div[@class="mat-select-value"]'));
			this.fundsel=element(by.xpath('//span[contains(text(),"Fund")]'));
			
			this.mealsel=element(by.xpath('//span[@class="mat-option-text"][contains(text(),"Meal")]'));
			this.Feeselect=element(by.xpath('//span[contains(text(),"Fees")]'));
			this.preorder1=element(by.xpath('//span[@class="mat-option-text"][contains(text()," Preorder ")]'));
			this.typedrop=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-payment-history[1]/div[2]/div[1]/div[2]/div[1]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]'));

			this.typedropauto=element(by.xpath('//span[contains(text()," Auto Replenishment ")]'));
			this.mealselect=element(by.xpath('//body/div[2]/div[2]/div[1]/div[1]/div[1]/mat-option[2]/span[1]'));
			this.unsuccess=element(by.xpath('//body/div[2]/div[2]/div[1]/div[1]/div[1]/mat-option[7]/span[1]'));
			this.daysdrop=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-payment-history[1]/div[2]/div[1]/div[2]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]'));
			this.daysdrop90=element(by.xpath('//span[contains(text()," 90 days ")]'));

			this.dateselect=element(by.xpath('//span[@class="mat-option-text"][contains(text()," 7 days ")]'));
			this.datesel=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-payment-history[1]/div[2]/div[1]/div[2]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]'));
			this.cussel=element(by.xpath('//span[contains(text(),"Custom Date")]'));
			this.fromdatecal=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-payment-history[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[2]/mat-datepicker-toggle[1]/button[1]/span[1]/*[local-name()="svg"][1]'));
			this.datefebsel=element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/mat-datepicker-content[1]/mat-calendar[1]/mat-calendar-header[1]/div[1]/div[1]/button[2]'));
			this.yeardrop=element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/mat-datepicker-content[1]/mat-calendar[1]/mat-calendar-header[1]/div[1]/div[1]/button[1]/span[1]'));
			this.yearsel=element(by.xpath('//div[contains(text(),"2020")]'));
			this.monsel=element(by.xpath('//div[contains(text(),"JAN")]'));
			this.firstsel=element(by.xpath('//tr[1]//td[2]//div[1]'));
			this.enddatesel=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-payment-history[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/mat-form-field[1]/div[1]/div[1]/div[2]/mat-datepicker-toggle[1]/button[1]/span[1]/*[local-name()="svg"][1]'));

			this.thirtysel=element(by.xpath('//div[contains(text(),"30")]'));
			this.createpdfbuttonpay=element(by.xpath('//button[contains(text(),"Create PDF Report")]'));
			this.sendemailpay=element(by.xpath('//button[contains(text(),"Send email")]'));
			this.okpay=element(by.xpath('//button[@class="btn btn-white"]'));
			this.downloadpay=element(by.xpath('//button[contains(text(),"Download Now")]'));
			this.createexcelpay=element(by.xpath('//button[contains(text(),"Create Excel Report")]'));
			this.success1=element(by.xpath('//tbody/tr[11]/td[1]'));


			this.fromdatesel=element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/mat-datepicker-content[1]/mat-calendar[1]/div[1]/mat-month-view[1]/table[1]/tbody[1]/tr[6]/td[4]/div[1]'));

			this.filterbut=element(by.xpath('//button[@class="custom-width mat-button"]'));
			this.expres=element(by.xpath('//div[contains(text()," No records found ")]'));


			//Reports

			this.reports=element(by.xpath('//p/span[contains(text(),"Reports")]'));
			this.selectreport=element(by.xpath('//div/span[contains(text(),"Select Report Type")]'));
			this.selectmealactivityreport=element(by.xpath('//span[contains(text(),"Meal Activity Report")]'));
			this.selectmealaccount=element(by.xpath('//span[contains(text(),"Meal Account Report")]'));
			this.selectfundacc=element(by.xpath('//div/span[contains(text(),"Select Fund Account")]'));
			this.selectafterschool=element(by.xpath('//span[contains(text()," After School Program")]'));
			this.selectmealreport=element(by.xpath('//body/app-root[1]/app-full-layout[1]/app-reports[1]/div[2]/div[1]/div[2]/form[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]'));
			this.selectstu=element(by.xpath('//body/app-root[1]/app-full-layout[1]/app-reports[1]/div[2]/div[1]/div[2]/form[1]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]'));
			this.selectstudent=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-reports[1]/div[2]/div[1]/div[2]/form[1]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]/div[1]'));
			this.selectstudent1=element(by.xpath('//div//mat-option//span[contains(text(),"All")]'));
			this.clickout=element(by.xpath('//div[@class="col-md-8 ps-card"]'));
			this.dropclose=element(by.xpath('//div[@class="col-md-8 ps-card"]//form[@class="ng-star-inserted ng-touched ng-dirty ng-valid"]//div//mat-form-field//div[@class="mat-form-field-wrapper"]//div[@class="mat-form-field-flex"]//div//mat-select[@formcontrolname="students"]'));
			this.date=element(by.xpath('//div//mat-select[@formcontrolname="mealDateType"]'));
			this.dateselect=element(by.xpath('//span[@class="mat-option-text"][contains(text(),"90 days")]'));
			this.datecustom=element(by.xpath('//span[@class="mat-option-text"][contains(text()," Custom Date ")]'));
			this.fromdate=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-reports[1]/div[2]/div[1]/div[2]/form[1]/div[3]/div[1]/div[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[2]/mat-datepicker-toggle[1]/button[1]'));
			this.prevmonth=element(by.xpath('//button[@class="mat-calendar-previous-button mat-icon-button"]'));
			this.dateselectpre=element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/mat-datepicker-content[1]/mat-calendar[1]/div[1]/mat-month-view[1]/table[1]/tbody[1]/tr[2]/td[1]/div[1]'));
			this.fromdatetext=element(by.xpath('//div//input[@id="mat-input-3"]'));
			this.todatetext=element(by.xpath('//div//input[@id="mat-input-4"]'));
			this.todatecus=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-reports[1]/div[2]/div[1]/div[2]/form[1]/div[3]/div[1]/div[1]/div[3]/mat-form-field[1]/div[1]/div[1]/div[2]/mat-datepicker-toggle[1]/button[1]'));
			this.todateselcus=element(by.xpath('//div[contains(text(),"30")]'));
			this.createpdfbutton=element(by.xpath('//form[@class="ng-star-inserted ng-touched ng-dirty ng-valid"]//button[@class="btn btn-orange"][contains(text(),"Create PDF Report")]'));
			this.sendemail=element(by.buttonText('Send email'));
			this.close6=element(by.xpath('//span[contains(text(),"close")]'));
			this.ok2=element(by.xpath('//button[contains(text(),"OK")]'));
			this.downloadnow=element(by.buttonText('Download Now'));
			this.createexcel=element(by.buttonText('Create Excel Report'));
			this.selectstudentfun=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-reports[1]/div[2]/div[2]/div[2]/div[3]/form[1]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]'));
			this.selectstudent1fun=element(by.xpath('//div//mat-option//span[contains(text(),"All")]'));
			this.dropclose2=element(by.xpath('//div[@class="cdk-overlay-container"]'));
			this.ddclose=element(by.xpath('//div[@class="cdk-overlay-container"]//div[@class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]'));
			this.dclose=element(by.xpath('//div[@class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]'));
			this.date1=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-reports[1]/div[2]/div[2]/div[2]/div[3]/form[1]/div[3]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]/div[1]'));
			this.createpdfbutton1=element(by.xpath('//form[@class="ng-touched ng-dirty ng-valid"]//button[@class="btn btn-orange"][contains(text(),"Create PDF Report")]'));
			this.sendemail=element(by.buttonText('Send email'));
			this.downloadnow1=element(by.buttonText('Download Now'));
			this.createexcel1=element(by.xpath('//form[@class="ng-touched ng-dirty ng-valid"]//button[@class="btn btn-orange"][contains(text(),"Create Excel Report")]'));
			this.createexcel2=element(by.xpath('//button[contains(text(),"Create Excel Report")]'));
			this.downloadnow2=element(by.xpath('//button[contains(text(),"Download Now")]'));
			this.dateselect=element(by.xpath('//span[@class="mat-option-text"][contains(text()," 7 days ")]'));
			this.amou=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-payment-history[1]/div[2]/div[2]/div[2]/div[1]/table[1]/tbody[1]/tr[8]/td[1]'));


			//Digital ID
				

			this.digital1=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-header[1]/div[1]/div[1]/div[1]/div[1]/app-side-menu[1]/div[1]/div[2]/mat-list[1]/a[9]'));
			this.digital=element(by.xpath('//span[contains(text(),"Digital ID")]'));
			this.nostudent=element(by.xpath('//b[contains(text(),"Click Here")]'));
			this.inactivestudent=element(by.xpath('//div//span//mat-icon[contains(text(),"brightness_1")]'));
			this.remove=element(by.xpath('//div//span//mat-icon[contains(text(),"cancel")]'));
			this.remove1=element(by.xpath('//button[contains(text(),"YES")]'));
			this.removestu=element(by.xpath('//body/app-root[1]/app-full-layout[1]/app-add-patrons[1]/div[2]/form[1]/div[1]/div[2]/div[1]/div[2]/i[1]'));

			this.Schoolname=element(by.xpath('//p[@class="school-name"]'));
			this.districtname=element(by.xpath('//p[@class="district"]'));
			this.Name=element(by.xpath('//p[contains(text(),"Matthew Frenz")]'));
			this.ID=element(by.xpath('//p[contains(text(),"ID#: 371338")]'));
			this.Grade=element(by.xpath('//p[contains(text(),"Grade: 05")]'));
			this.HR=element(by.xpath('//p[contains(text(),"HR: 136")]'));
			this.Download=element(by.xpath('//button[@class="btn btn-orange"]'));
			this.image=element(by.xpath('//img[@class="student-img"]'));
			this.barcode=element(by.xpath('//div[@class="barcode"]//*[local-name()="svg"][1]/*[name()="rect"][1]'));
			this.returntodashboard=element(by.xpath('//p[@class="fc-gray underline-text"]'));
			this.privacy=element(by.xpath('//a[contains(text(),"Privacy")]'));
			this.terms=element(by.xpath('//a[contains(text(),"Terms")]'));
			this.help=element(by.xpath('//a[contains(text(),"Help")]'));
			this.forward=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-digital-id[1]/div[2]/form[1]/div[1]/div[2]/mat-tab-group[1]/mat-tab-header[1]/div[3]/div[1]'));
			this.jack=element(by.xpath('//a[contains(text(),"Jack Klunk")]'));
			this.Samuel=element(by.xpath('//mat-tab-header/div[2]/div[1]/div[1]/div[4]/div[1]/a[1]'));

			this.upload=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/section[1]/div[1]/div[1]/div[1]/aside[1]/div[1]/input[1]'));


			this.submit=element(by.xpath('//input[@id="MainContent_cmdReadBarcodesRed"]'));

			this.format=element(by.xpath('//td[contains(text(),"Code39")]'));

			this.stuID=element(by.xpath('//pre[contains(text(),"371338")]'));



			//preodermeals

			this.Cart=element(by.xpath('//h1[contains(text(),"Cart")]'));

			this.backtopsc=element(by.xpath('/html[1]/body[1]/form[1]/header[1]/div[1]/div[2]/nav[1]/div[2]/ul[1]/li[7]/a[1]'));
			this.Dashboard=element(by.xpath('//h1[@class="ps-card-title"]'));
			this.nextweek=element(by.xpath('//input[@id="Content_Content_btnForward"]'));
			this.preorder=element(by.xpath('//span[contains(text(),"Pre-Order Meals")]'));
			this.zerodollar=element(by.xpath('//td[contains(text(),"$ 0.00")]'));
			this.reduced=element(by.xpath('//td[contains(text(),"$ 0.40")]'));
			this.denied=element(by.xpath('//td[contains(text(),"$ 2.80")]'));

			this.preordermeal=element(by.xpath('//tr[2]//td[3][contains(text()," Preorder Meal ")]'));
			this.viewcart=element(by.xpath('//div[@class="tab"]'));
			this.emptycart=element(by.xpath('//input[@id="btnEmptyCartDialog"]'));
			this.emptycartconfirm=element(by.xpath('//input[@id="btnEmptyCart"]'));

			this.checkcart=element(by.xpath('//span[@class="custom-hide"]'));
			this.details=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[3]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));
			this.details1=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[8]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));
			this.details2=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[13]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));

			this.details3=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[9]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));
			this.addon=element(by.xpath('//body/div[5]/div[2]/div[4]/div[1]/div[2]/div[1]/input[1]'));
			this.addtocart=element(by.xpath('/html[1]/body[1]/div[5]/div[2]/input[2]'));

			this.details4=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[10]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));

			this.details5=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[11]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));

			this.details6=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[11]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));

			this.okbutton=element(by.xpath('//input[@id="btnAgree"]'));

			this.selectitem=element(by.xpath('/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/input[1]'));
			this.add=element(by.xpath('/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/input[1]'));
			this.checkoutmmo=element(by.xpath('//input[@class="btn-green checkoutButtonClass"]'));
			this.placeorder=element(by.xpath('//input[@value="Place Order"]'));
			this.preexp=element(by.xpath('//tr//td[contains(text()," Preorder Meal ")]'));

			this.clickonselectmmo=element.all(by.className('mat-header-row ng-star-inserted')).all(by.tagName('mat-checkbox'));
			this.close=element(by.xpath('//a//mat-icon[contains(text(),"cancel")]'));
			this.purchasebut=element(by.xpath('//button[contains(text(),"Purchased")]'));
			this.removemeal=element(by.xpath('//div[@id="removeMeal"]//input[@class="btn-red floatLeft"]'));
			this.delete=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-cart[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[7]/mat-icon[1]'));

			this.return=element(by.xpath('//button[@class="btn btn-white"]'));


//Quickapps

 this.rfd=element(by.className('display-lang'));
 //this.result1=element(by.cssContainingText('Dashboard'));

	 
 //this.privacy=element(by.linkText('Privacy'));
 //this.close=element(by.buttonText('CLOSE'));

 this.menufd=element(by.className('mat-button'));
 this.menu1fd=element(by.className('mat-button'));

this.freemealbutton=element(by.xpath("//span[contains(text(),'Free')]"));
this.title=element(by.xpath("//h1[@class='ps-card-title ng-star-inserted']"));

this.address=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-quik-apps[1]/app-contact-information[1]/div[1]/form[1]/div[1]/div[2]/div[2]/mat-form-field[4]/div[1]/div[1]/div[1]/input[1]'));
this.quickmail=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-quik-apps[1]/app-contact-information[1]/div[1]/form[1]/div[1]/div[2]/div[2]/mat-form-field[3]/div[1]/div[1]/div[1]'));


this.zipcode=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-quik-apps[1]/app-contact-information[1]/div[1]/form[1]/div[1]/div[2]/div[2]/mat-form-field[6]/div[1]/div[1]/div[1]/input[1]'));
this.f_name= element(by.name('FirstName'));
this.l_name=element(by.name('LastName'));
//this.ph_no=element(by.name('PhoneNumber'));
//this.m_no=element(by.name('SMSNumber'));
//this.ed=element(by.xpath('/html/body/app-root/app-quik-apps/app-contact-information/div/form/div/div[2]/div[2]/mat-form-field[11]/div/div[1]/div/mat-select/div/div[2]'));
//this.eds=element(by.xpath('/html/body/div[3]/div[2]/div/div/div/mat-option[2]/span'));
this.cb=element(by.xpath('//button[@type="submit"]'));
this.savepop=element(by.xpath('//h2[contains(text(),"Update your PaySchools Central Information?")]'));
this.checkbox=element(by.xpath('/html/body/ngb-modal-window/div/div/app-contact-information-dialog/div/div[2]/mat-checkbox/label/div'));
this.saveb=element(by.xpath('/html/body/ngb-modal-window/div/div/app-contact-information-dialog/div/button'));
this.r=element(by.xpath('//h1[contains(text(),"Application")]'));
this.returntoapplication=element(by.buttonText('Return to Application'))
//this.returntoapplication=element(by.className('main')).element(by.css("button:nth-child(1)"));
this.Rexptd=element(by.xpath('//h1[@class="ps-card-title ng-star-inserted"]'));
this.cb1=element(by.buttonText("CONTINUE"));
this.Rexptd1=element(by.xpath('//h1[@class="ps-card-title ng-star-inserted"]'));
this.addstudent1=element(by.xpath('//button[contains(text(),"ADD STUDENTS")]'));
this.studentid1=element(by.name('studentid'));	
this.firstname=element(by.name('fname'));
this.lastname=element(by.name('lname'));
this.addbutton=element(by.buttonText('ADD'))
this.cancelbutton=element(by.buttonText('CANCEL'));
this.cb2=element(by.xpath('/html/body/app-root/app-full-layout/app-quik-apps/app-verify-students/div/div[2]/div[2]/div[2]/button[2]'));
this.r2=element(by.xpath('/html/body/app-root/app-full-layout/app-tab-header/div[1]/div/div[2]/h1'));
this.atd=element(by.xpath('(//*[@class="mat-select-arrow"])[1]'));
this.atdselection=element(by.xpath('//span[@class="mat-option-text"][contains(text(),"None of These")]'));
this.ssd=element(by.xpath('(//*[@class="mat-select-arrow"])[2]'));
this.ssdselection=element(by.xpath('(//*[@class="mat-option-text"])[1]'));
this.cb3=element(by.xpath('//button[contains(text(),"Continue")]'));
this.r3=element(by.xpath('/html/body/app-root/app-full-layout/app-tab-header/div[1]/div/div[2]/h1'));
this.addmember=element(by.xpath('//button[contains(text(),"Add Member")]'));
this.FN=element(by.xpath('//*[@id="fname"]'));
this.LN=element(by.xpath('//input[@id="lname"]'));
this.cancel1=element(by.xpath('/html/body/ngb-modal-window/div/div/app-add-member-dialog/div/form/div[3]/div[2]/button'));
this.cb4=element(by.xpath('/html/body/app-root/app-full-layout/app-quik-apps/app-verify-members/div/div/div[2]/button[2]'));
this.r4=element(by.xpath('//h1[contains(text(),"Member Assistance")]'));
this.cb5=element(by.xpath('/html/body/app-root/app-full-layout/app-quik-apps/app-member-assistance/div/div/div[2]/div[3]/div/mat-tab-group/div/mat-tab-body/div/form/div/div[2]/div[2]/div[2]/button[2]'));
this.r5=element(by.xpath('//h1[@class="ps-card-title ng-star-inserted"]'));
this.cb6=element(by.xpath('/html/body/app-root/app-full-layout/app-quik-apps/app-statements/div/div/div[2]/div[2]/button'));
this.r6=element(by.xpath('//h1[@class="ps-card-title ng-star-inserted"]'));
this.iagree=element(by.xpath('//div[@class="mat-checkbox-inner-container"]'));
this.cb7=element(by.xpath('/html/body/app-root/app-full-layout/app-quik-apps/app-summary-review/div/div/div[2]/button[1]'));
this.r7=element(by.xpath('//h1[@class="ps-card-title ng-star-inserted"]'));

//this.rb1=element(by.className("ps-card card-custom ng-star-inserted")).element(by.id("mat-radio-17"));
//this.rb2=element(by.id('mat-radio-18')).all(by.tagName('md-radio-button'));
this.rbt=element.all(by.name('Ethnicity'));
this.c1=element(by.xpath('/html/body/app-root/app-full-layout/app-quik-apps/app-sign-app/div/div/div[2]/form/div[1]/div/div[2]/div[3]/mat-checkbox/label/div'));
this.c2=element(by.xpath('/html/body/app-root/app-full-layout/app-quik-apps/app-sign-app/div/div/div[2]/form/div[1]/div/div[2]/div[4]/mat-checkbox/label/div'));
this.c3=element(by.xpath('/html/body/app-root/app-full-layout/app-quik-apps/app-sign-app/div/div/div[2]/form/div[1]/div/div[2]/div[5]/mat-checkbox/label/div'));
this.c4=element(by.xpath('/html/body/app-root/app-full-layout/app-quik-apps/app-sign-app/div/div/div[2]/form/div[1]/div/div[2]/div[6]/mat-checkbox/label/div'));
this.c5=element(by.xpath('/html/body/app-root/app-full-layout/app-quik-apps/app-sign-app/div/div/div[2]/form/div[1]/div/div[2]/div[7]/mat-checkbox/label/div'));
this.r8=element(by.buttonText('SIGN'));

this.logout=element(by.xpath('/html/body/div[1]/div[1]/div/div/div/div/div[3]/div/ul/li[4]/ul/li[15]/a/span'));


this.noSSN=element(by.xpath('//body/app-root[1]/app-full-layout[1]/app-quik-apps[1]/app-sign-app[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[3]/div[4]/mat-checkbox[1]/label[1]/div[1]'));
this.confirmpassword=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-quik-apps[1]/app-sign-app[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[3]/div[7]/mat-form-field[1]/div[1]/div[1]/div[1]/input[1]'));
this.sign=element(by.xpath('//button[contains(text(),"SIGN")]'));
this.menuicon=element(by.xpath('//app-header/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/button[1]/span[1]/i[1]'));
this.backtopscdashboard=element(by.xpath('//body/div[2]/div[2]/div[1]/div[1]/div[1]/button[2]'));



};
module.exports= new PSCpageobjects();




































