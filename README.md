URL Shortener App
Welcome to our URL shortener app! This application allows users to shorten URLs for easy sharing and management.

Authentication
For authentication, we implement the following process:

Logging In:

Upon user login, we generate a UUID and create an entry in a map associating the UUID with the user object.
The UUID is stored in a cookie for future authentication.

Checking Authentication:

When a user needs to be authenticated, we query the cookie to retrieve the UUID.
We then check if a user exists for that UUID in the map.
If a user exists, we set the user in the request of middlewares, providing us a reference to the user for actions such as creating a URL entry or accessing URLs created by that user.
Usage
Shortening URLs:

Users can shorten URLs by providing the original URL.
The application generates a shortened URL, which users can then use for sharing.
Managing URLs:

Authenticated users have access to manage their shortened URLs.
This includes viewing, updating, and deleting URLs as needed.
Technologies Used
Node.js
Express.js
MongoDB (or any database of your choice)
UUID generation library (e.g., uuid or uuidv4)
Getting Started
To get started with our URL shortener app, follow these steps:

Clone the repository.
Install dependencies using npm install.
Set up your database (MongoDB or any other database you prefer).
Configure the application to connect to your database.
Start the server using npm start.
Access the application through your web browser.
Contributors
[Your Name]
[Your Team Members' Names]
Feel free to contribute to our project by submitting bug reports, feature requests, or pull requests. Happy URL shortening!