# RESTFUL APIs in Node.js

## Package Setup

`npm init  -y` --> Initialize a package.json config file to install 3rd-Party Packages from NPM

`npm i express nodemon` --> Installs Express and Nodemon packages from NPM

Next create your `server.js` which will contain the following:

[Require express and Initialize it. Configure express to parse JSON and URL encoded data. Finally, create a server using the `listen()` method from Express.](./server.js#L1-L13)

## Getting Started: Create an Array to Store User Data.

For Simplicity purposes, you'll not be using a database but rather a simple user array in your app.js, add the following code after the line that parse the URL encoded [Data](./app.js).

## How to Set Up Routes in Express.js

To perform operation on your data , you need to setup routing. Routes will determine how your application will respond o requests made to a particular endpoint. Each route has an HTTP method, a URL, and a handler function tha handles the HTTP request and response. To setup the routes, add to your [Server File](./server.js#L15-L33) after file **uses** array.

## How to Perform CRUD Operations in Node.js

Create the functions that will manipulate the user data and return a response according to the route matched These functions will create read and update and delete user data.

### How to Create a New User Data

To Create a new user data, you will need to:

* Check if the request body is empty - if it is, send an error response.
* Extract the user data from the request body
* Validate the user data.
* Push the user dat5a to the array.

_Note_:  You are Using an array for simplicity purposes. In real case scenario, you would be interacting with a database.
[Editing your POST route](./server.js#L-35-L65)

### How to Read Users

To retrieve all users, return the [users array in your response](./server.js#L-67-L78).

Using a APIs Tester like Postman, you should receive the array of users in the response body.

#### Retrieving Users

To retrieve [one-user only](./server.js#L-80-L-99):

* Get the user ID from the URL parameter.
* Use `find()` to identify which specific data you are requesting.
* Return the user in the response.

### How to Update Users

To [update the User](./server.js#L-101-L-123):

* Retrieve the user ID from the URL
* Use `find()` to check whether the user exists
* Use `indexOf()` to get the index of the user being referenced
* Use the index of to edit the user data when the data sent through the request body.



























































































































