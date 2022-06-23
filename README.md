# dynamic-multi-location-maps-wix-velo

# Multi Markers on Google Maps with Wix Velo
Welcome to a tutorial series I've put together for dynamically updating a Google Maps object with customised markers. I hope it adds value to you. 

This is the code repository for the tutorial series. Below is a quick overview and links to each episode in the series. 

Enjoy, and don't forget to give me star or shoutout <3 

## Episodes In the Series
### Episode 1: Setting up Our Website
Link: https://appnologyjames.medium.com/setting-up-our-website-multiple-markers-on-google-maps-with-wix-velo-d110a3542994
**Overview:**
This episode sets up the website we'll be using for the rest of series. We cover the following:
1. Designing the page
2. Setting up our form to gather locations
3. Setting our database collection with the right permissions

We also cover some of the security issues in our design, such as:
1. Being careful with HTML Elements
2. Restricting text box inputs
3. Adding ReCAPTCHAs

### Episode 2: Querying Location Database and Calculating the Midpoint
Link: https://appnologyjames.medium.com/querying-location-collection-and-calculating-midpoint-multiple-markers-on-google-maps-with-wix-d93e3389a12a
**Overview:**
This episode explores querying our backend database (called a collection on Wix) to get the last 10 locations submitted, then calculating the midpoint. We cover the following:
1. Setting up our backend `.jsw` file for backend functionality
2. Querying a collection
3. Calculating the midpoint from location data
4. Returning a JSON object with all the required information

We also cover some of the security aspects of our design choices, including:
1. Using backend functions to reduce the risk of information overexposure and enhancing the user experience

### Episode 3: Displaying Map and Marker
Link: https://appnologyjames.medium.com/displaying-map-marker-multiple-markers-on-google-maps-with-wix-velo-7a9f2209fc7a
**Overview**
This episode explores getting our HTML Frame to display a standard Google Map with a customised marker. We cover:
1. Setting up a Google Maps API Key
2. Displaying a generic Google Map
3. Adding a marker
4. Customising the marker with an image and title

We also cover some of the security aspects of our design choices, including: 
1. Securing our Google Maps API Key

### Episode 4: HTML Elements and Sending Data
Link: https://appnologyjames.medium.com/html-elements-and-sending-data-multiple-markers-on-google-maps-with-wix-velo-2f4e8a6f3336
**Overview**
This episode covers setting up our HTML Element (iframe) and parent pages to exchange information. We cover: 
1. Setting up our HTML Component to send and receive data
2. Setting up our Parent page to send and receive data
3. Integrating some troubleshooting functions which work with the Wix logging platform
4. Retrieving and Processing our map data
5. Giving it a quick trial - YAY!

We also cover some of the security aspects of our design choices, including: 
1. Ensuring our HTML component only sends messages to our parent frame, not indisciminantly
2. Filtering received messages through use of the `target` property

### Auto Updating and Resizing Map
Link: https://appnologyjames.medium.com/auto-updating-and-resizing-map-multiple-markers-on-google-maps-with-wix-velo-874b68c77483
**Overview**
In this final episode, we finish off our series by making sure that the map dynamically updates and resizes when a new location is submitted. We cover:
1. Triggering a map update upon form submission
2. Resizing the map to make sure all locations are within view of the frame

We also cover on some of the choice we can make to trigger an update and why some of them aren't suitable for our use case. 

# Conclusion
I hope you enjoy the series <3
