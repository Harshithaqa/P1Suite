

var HtmlReporter = require('protractor-beautiful-reporter');



allScriptsTimeout:50000;
getPageTimeout:50000;
exports.config = {
	directConnect: true,
// seleniumAddress: 'http://localhost:4444/wd/hub',
 //direct connect

 //specs: ['P3_Email.js'],


 //specs: ['PSC.NewUserLogin.js','PSC.ExistingUser.js','autoreplenishment.js','quikapps.js'],
//specs: ['P1_Generaltestcases.js','P1_Autoreplenishment.js','P1_Quikapps.js','P2_Generaltestcases.js',],

 specs: ['P1_Generaltestcases.js','P1_Autoreplenishment.js','P1_Quikapps.js','P2_Generaltestcases.js','P2_Reports.js','P3_GeneralTestcases.js','P3_NewCardTransaction.js','P3_ScheduledFee.js','P3_Email.js','P1_Registration.js'],
 chromeDriver : './node_modules/webdriver-manager/SeleniumSoftware/chromedriver.exe',
 seleniumServerJar: './node_modules/webdriver-manager/SeleniumSoftware/selenium-server-standalone-3.141.59.jar',
 capabilities : {
	'browserName': "chrome", 
	chromeOptions: {
		"debuggerAddress":"192.168.1.112:72293"
	}
},
//directConnect: true,
 //chromeDriver : './node_modules/webdriver-manager/selenium/chromedriver.exe',
 //SELENIUM_PROMISE_MANAGER: false,

	onPrepare: function() {
		browser.driver.manage().window().maximize();

		// Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
		jasmine.getEnv().addReporter(new HtmlReporter({
			preserveDirectory: false,

		   baseDirectory: 'Reports/screenshots'
		   	  , filename: 'my-report.html'

		   , docName: 'index.html'

		}).getJasmine2Reporter());
	 },

	 jasmineNodeOpts: {
		defaultTimeoutInterval: 26000000,
		},	
  
  
  
  
  
  
  
 /*onPrepare :function()
 {
		browser.driver.manage().window().maximize();
		 jasmine.getEnv().addReporter(
			        new Jasmine2HtmlReporter({
			          savePath: 'target/screenshots'
			        })
			      );
		 
	
 },
 
	
	jasmineNodeOpts: {
	    showColors: true, // Use colors in the command line report.
	 },
	

	  
	  
	/* jasmineNodeOpts: {
		// If true, print colors to the terminal.
		showColors: true,
		// Default time to wait in ms before a test fails.
		defaultTimeoutInterval: 30000,
		// Function called to print jasmine results.
		print: function() {},
		// If set, only execute specs whose names match the pattern, which is
		// internally compiled to a RegExp.
		grep: 'pattern',
		// Inverts 'grep' matches
		invertGrep: false
	  }  */
	  
	  
	//Options to be passed to Jasmine.
	 // jasmineNodeOpts: {
	  //  defaultTimeoutInterval: 30000
	 // }
 };