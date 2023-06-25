# cs-465-fullstack
CS-465 Full Stack Development with MEAN
## **Architecture**
### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). Why did the backend use a NoSQL MongoDB database?
  During the development of this project, we utilized a variety of libraries and tools to get this site functioning. To start, the initial website strictly used Express HTML which we then converted the view engine to express-handlebars or .hbs. We did this to relieve server-side speeds by preserving the resources on the client's device. Later on, we implemented Angular JS components to handle the trips, trip-cards, ect. The backend dealt more heavily with Node.js and Express, which takes care of the web server. The project uses MongoDB and Mongoose ODM, a data modeling library. The trip information is pulled from the database and inserted into dynamic elements that display the items as the user requests them. Angular single-page applications are great for keeping server resources and load times at a minimum. SPAs also give the user a smoother more natural way to navigate the website's 'pages'. The backend used a NoSQL MongoDB database because of its overall flexibility as a non-relation database option. 
## **Functionality**
### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
  JSON, or Javascript object notation, is a format mainly used to transmit data between different parts of the application. Unlike Javascript, JSON is not executable code. Javascript is a programming language that gets compiled and executed. In this project, they're used in tandem to store trips and users as Javascript objects in the backend. The front end displays the objects and data depending on what is requested. 
### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.
  There were a couple of instances where we refactored the code to increase efficiency and reduce server load. For one, the trip cards were tied into the trip listing component so the resources only need to load once. This component works with our database and displays the trip objects efficiently. Reusable UI components are great because they reduce the application's size, decrease the amount of time it takes to develop new components and help with keeping the application consistent. 
## **Testing**
### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full-stack application.
  In a full-stack application, the methods are the background operations that provide programmed functionality to the web app. Common HTTP request methods are GET, POST, PUT, and DELETE. These methods can be used to access and alter database information as well as test configured API endpoints. For this project, the API endpoints include the database's contents, a page to view and update existing trips, and a page to add new trips to the roster. As a security measure, the admin must log in to obtain the token required to view the API endpoints. Having the API endpoints unprotected would allow anyone to access critical website management components as well as the application's database. Applications like Postman are great for testing endpoints with simple HTTP requests.
## **Reflection**
### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
  This course has helped me understand how full-stack applications of this nature work with non-relational databases. Thus far, I have only worked with relational databases that use MySQL instead of NoSQL. It was interesting learning about the versatile skillset that full-stack development requires and seeing where I personally needed more studying. I plan on pursuing a career in data analytics, so seeing how the backend of SPAs functions has given me a better understanding of data as a whole.
