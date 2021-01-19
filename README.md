# Atlantic_technical_assessment
technical assessment for the Atlantic's engineering role on the Story Products team

## Usage
1. Run 'npm install' from the root. This installs the necessary dependencies for the service to run.
1. Ensure that a MySQL database server is 
installed (https://dev.mysql.com/doc/refman/8.0/en/installing.html) 
and setup (https://dev.mysql.com/doc/refman/8.0/en/connecting-disconnecting.html), and the user root has password as 'password', or you can manually change it to fit your MySQL username and password in ./database/db_mysql.js.
1. Run 'npm run start' from the root(terminal). This will start an Express server on port 3000, and create table "articles" in MySQL if not exists.
1. Once the Express server is running, the service can be accessed at 'localhost:3000'. and you can send post request in JSON to 'localhost:3000/api/articleUpload' API endpoint.