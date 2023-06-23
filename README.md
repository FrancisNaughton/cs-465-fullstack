# cs-465-fullstack
CS-465 Full Stack Development with MEAN
## **Architecture**
### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). Why did the backend use a NoSQL MongoDB database?
During the development of this project, different types of frontend development techniques and strategies were utilized to bring this project together. To start, the initial website strictly used Express HTML which we then converted the view engine to express-handlebars or .hbs. We did this to relieve server-side speeds by preserving the resources on the client's device. Later on we implemented Angular JS components to handle the trips, trip-cards, ect. The backend dealt more heavily with Node.js and Express, which takes care of the web server. The project uses MongoDB and Mongoose ODM, a data modeling library. The trip information is pulled from the database and inserted into dynamic elements that display the items as the user requests them. Angular single-page applications are great for keeping server resources and load times at a minimum. SPAs also give the user a smoother more natural way to navigate the website's 'pages'. The backend used a NoSQL MongoDB database because of its overall flexibility as a non-relation database option. 
## **Functionality**
### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON is an object notation that Javascript can work with for a variety of reasons.
