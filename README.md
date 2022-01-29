ABOUT:
 This project resembles a prototype of a blog type website, yet unfinished. 
The idea is to upload posts with up to 10 images through upload page or delete them through main page as an admin, who has access to the dashboard. 
Posts are shown on the home page in new to old chronology, which are divided by back-end pagening. 
Web site has possibility to register new users with sending verification links to the given email. 
Logged in users have access to the user profile and are allowed to manage profile data. 
All passwords are hashed upon storaging in database. 
Web site has complete file upload/input validation. 
Authorisation is made by using JWT and cookie. 
Emails are sent through Nodemailer by using test account of Gmail used specifically for this project. 
Also, this web site has a basic design made by using Material UI, therefore is fully responsive and can be viewed by any device.

INSTRUCTION:
1) Turn On MySQL database, import database data from "Database_Export" folder;
2) Clone 2 repositories: "back_end", "front_end";
3) Open 2 separate terminals:
###  1. Start "back_end" by using `npm install`, `npm install nodemon`, `npm start` in project root directory;
###  2. Start "front_end" by using `npm install`, `npm start` in project root directory;
3) In "back_end" project locate and edit .env file to connect to the database;

PORTS:
back-end: 3001; (do not change or else, rewrite fetching URL)
front-end: 3000; (do not change or else, rewrite CORS URL)
database: 3002;

USERS:
 admin: "IamSoulfuller@gmail.com", "a1234567a";
 user: "FutureIntent@gmail.com", "a12345a";
 user: "FutureeeIntent@gmail.com", "a123a";
 user: "blackListTest@inbox.lv", "a123a";
 user: "TestTest@inbox.lv", "a123a";
