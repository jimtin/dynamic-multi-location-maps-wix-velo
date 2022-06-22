import {getLocationData} from 'backend/queryLastTenLocations'

// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world

$w.onReady(function () {
	$w('#wixForms1').onWixFormSubmitted((event) => {
		retrieveLocationData();
	});

	// When the element receives a message, do the following
	$w('#googleMapsFrame').onMessage((event) => {
		let receivedData = event.data;
		// Send the received message to our processMessage function
		processMessage(receivedData);
	});
}); 

// Function to retrieve the data from the database
export async function retrieveLocationData() {
	// Retrieve the location data from our backend function. Make sure we await it's return before continuing. 
	let locationArray = await getLocationData();
	
	// Post the location data to the HTML Element
	sendMessage(locationArray);
}

// Function to process received data from HTML Element
export async function processMessage(receivedMessage) {
	// First switch on the received message type
	switch (receivedMessage.type) {
		// Case cmd is a command to our site to do something
		case "cmd":
			// Switch based on the command which is passed in the message
			switch(receivedMessage.message){
				// If the command is 'getLoc', get the location data
				case "getLoc":
					retrieveLocationData();
					break;
				// Set our default case (which is to do nothing)
				default:
					break;
			}
			break;
		// Case debug means a debug message has been sent
		case "debug":
			// Log the debug message to the console
			console.log(receivedMessage.message);
			break;
		// Our default case is to log the whole message to the console.
		default:
			console.log(receivedMessage);
			break;
	}
}

// Function to send message to HTML Element
export async function sendMessage(message){
	// Send the data
	$w('#googleMapsFrame').postMessage(message);
}
