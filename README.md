# RESTFUL APIs in Node.js

## Package Setup

`npm init  -y` - Initialize a package.json config file to install 3rd-Party Packages from NPM

`npm i express nodemon` - Installs Express and Nodemon packages from NPM

Next create your `server.js` which will contain the following:

[Require express and Initialize it. Configure express to parse JSON and URL encoded data. Finally, create a server using the `listen()` method from Express.](./server.js#L1-L13)

## Getting Started: Create an Array to Store User Data.

For Simplicity purposes, you'll not be using a database but rather a simple user array in your app.js, add the following code after the line that parse the URL encoded [Data](./app.js).

## How to Set Up Routes in Express.js

To perform operation on your data , you need to setup routing. Routes will determine how your application will respond o requests made to a particular endpoint. Each route has an HTTP method, a URL, and a handler function tha handles the HTTP request and response. To setup the routes, add to your [Server File](./server.js#L15-L33) after file **uses** array.

## How to Perform CRUD Operations in Node.js

Create the functions that will manipulate the user data and return a response according to the route matched These functions will create read and update and delete user data.

### How to Create a New USer Data

To Create a new user data, you will need to:

* Check if the request body is empty - if it is, send an error response.
* Extract the user data from the request body
* Validate the user data.
* Push the user dat5a to the array.

_Note_:  You are Using an array for simplicity purposes. In real case scenario, you would be interacting with a database.
[Editing your POST route](./server.js#L-35-L65)





























































































































