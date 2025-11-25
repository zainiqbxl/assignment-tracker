# Assignment Tracker

## Description
Assignment Tracker is a web application to help students keep track of assignments. 

Users can:
- add new assignments (title, course, due date, status, notes)
- view a list of all assignments
- eit existing assignments
- delete assignments (with confirmation)
- the app uses Bootstrap for styling, EJS for templatig and MongoDB Atlas for data storage.

TECHNOLOGIES USED:
• NodeJS  
• ExpressJS  
• MongoDB Atlas  
• Mongoose ORM  
• EJS Templating Engine  
• Bootstrap 5  
• dotenv  
• CSS (custom styling)  

INSTALLATION & RUNNING THE APP:
1. Install dependencies:
   npm install

2. Create a .env file in the project root:
   MONGO_URL=your_mongo_connection_string_here

3. Start the server:
   nodemon app.js

4. Visit the app:
   http://localhost:3000

EXTERNAL CODE SOURCES:
============== SOURCE #1 ==============
ExpressJS basic server setup

Source:
ExpressJS Official Documentation  
URL: https://expressjs.com/en/starter/hello-world.html  
Author: ExpressJS Development Team

Used in:
app.js (server initialization)

Original snippet (from Express docs):
const express = require('express')
const app = express()
app.listen(3000)

Modified version used by student:
const express = require("express");
const app = express();
app.listen(3000, () => console.log("Server running"));

============== SOURCE #2 ==============
Mongoose connection example

Source:
Mongoose Official Documentation  
URL: https://mongoosejs.com/docs/connections.html  
Author: Mongoose Development Team

Used in:
app.js (MongoDB connection logic)

Original snippet:
mongoose.connect(uri)
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));

Used and modified in project:
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

============== SOURCE #3 ==============
Bootstrap 5 CDN stylesheet

Source:
Bootstrap Official Website  
URL: https://getbootstrap.com/docs/5.0/getting-started/introduction/  
Author: Bootstrap Team (Twitter / Open Source Contributors)

Used in:
views/partials/header.ejs

Original snippet:
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">

Student used identical CDN (allowed by assignment):
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">

============== SOURCE #4 ==============
Delete confirmation popup

Source:
MDN Web Docs – window.confirm()  
URL: https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm  
Author: Mozilla Developer Network Team

Used in:
views/index.ejs (delete confirmation)

Original snippet:
onclick="return confirm('Are you sure?')"

Used in project:
onclick="return confirm('Delete?')"

============== SOURCE #5 ==============
EJS Template Syntax Guide

Source:
EJS Official GitHub  
URL: https://github.com/mde/ejs  
Author: EJS Open Source Contributors

Used for:
Rendering loops and variables

Example syntax used:
<% items.forEach(item => { %>
  <%= item.name %>
<% }) %>

============== SOURCE #6 ==============
NodeJS dotenv configuration

Source:
dotenv NPM Documentation  
URL: https://www.npmjs.com/package/dotenv  
Author: Motdotla & dotenv contributors

Used in:
app.js

Snippet:
require("dotenv").config();

============== SOURCE #7 ==============
GitHub .gitignore Node template

Source:
GitHub Official gitignore Templates  
URL: https://github.com/github/gitignore/blob/main/Node.gitignore  
Author: GitHub Contributors

Used for:
Ignoring node_modules and .env

Used snippet:
node_modules/
.env

============== SOURCE #8 ==============
HTML5 Layout Structure (General Reference)

Source:
W3Schools HTML Template  
URL: https://www.w3schools.com/html/html_basic.asp  
Author: Refsnes Data / W3Schools

Used for:
Basic HTML structure (doctype, head, body tags)

============== SOURCE #9 ==============
MongoDB Atlas Setup Instructions

Source:
MongoDB Documentation  
URL: https://www.mongodb.com/docs/atlas/  
Author: MongoDB Inc.

Used for:
Creating the database connection string

-----------------------------------------------------------
6. CONFIRMATION OF ACADEMIC HONESTY
-----------------------------------------------------------
• All external code sources have been listed above.  
• External code accounts for LESS THAN 10% of the full project.  
• All other code (controllers, models, routes, forms, UI logic,
  CSS, and all CRUD operations) was written manually by the student.  
• All cited code was modified and understood.  
• No uncredited external sources were used.
