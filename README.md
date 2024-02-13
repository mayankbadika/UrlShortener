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

Stateless mechanism for authentication:

User Login: When a user successfully logs in, the server generates a JWT containing relevant user information (such as user ID, roles, etc.), signs it with a secret key, and sends it back to the client, typically in a response header (e.g., Set-Cookie) or in the response body.

JWT in Cookie: The client (browser) receives the JWT and stores it, often in a cookie or local storage. Storing it in a cookie is a common approach as it's automatically sent with subsequent HTTP requests to the same domain.

Subsequent Requests: When the client makes subsequent requests to the server, it automatically includes the JWT in the request headers (or cookies, if stored there). The server can then extract the JWT from the request headers or cookies.

JWT Verification: Upon receiving a request with the JWT, the server verifies the JWT's authenticity and integrity using the secret key. This involves checking the signature, expiration time, and any other relevant information to ensure the token is valid.

User Authentication: If the JWT verification is successful, the server considers the user authenticated based on the information contained within the JWT. The server can then proceed to handle the request according to the user's permissions and access rights specified in the token payload.

This approach provides a stateless mechanism for authentication, where the server does not need to store session state. Instead, all necessary information for authentication is contained within the JWT itself. However, it's crucial to protect the JWT from tampering or theft, as anyone with access to a valid JWT can potentially impersonate the user associated with it. Therefore, using HTTPS and secure cookies, along with proper token expiration and signature validation, are essential security measures.





