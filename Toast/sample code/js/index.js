var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});
	
	$('#amazingButton').on('click', function() {
		createDialog();
	});


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'Toasty Time!', duration: 1000}); 	
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Think carefully...',  // message
        dialogDismissed,         // callback
        'Do you think you are amazing?,            // title
        ['Of course', 'Nope']                  // buttons
    );

}

        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "Why the f*** you lying!", duration: 3000});
   	else if(buttonIndex==2) new Toast({content: 'Thanks for being honest :)', duration: 3000});

}
    
    function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Is it?! Pls tell me!',  // message
        dialogDismissed,         // callback
        'Its peanut butter toasty time?',            // title
        ['Indeed', 'Nah mate']                  // buttons
    );

}    	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "Get your birthday suit on then!", duration: 3000});
   	else if(buttonIndex==2) new Toast({content: 'Ill just be queit and forever alone then :(', duration: 3000});

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 1000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
	window.plugin.notification.local.add({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"This is an example notification",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}
