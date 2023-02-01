# Facebox

Facebox is a simple dockerised full-stack application that stores people's names and faces. The motivation behind this is because I found it difficult to remember new friends' names and faces especially during orientation. This project was built with Java, Spring Boot, React.js, MySQL, Docker

## How to Use Facebox
1. Be sure to have `Docker` and `mvn` (optional) installed on your computer
2. Run `docker-compose up` to start the frontend and database server
3. Start the backend server by using one of the two methods:
    * Use any IDE such as IntelliJ to start the application `FaceboxApplication.java`
    * Run `mvn -DskipTests clean install` then run `java -jar facebox-0.0.1-SNAPSHOT.jar`
    
4. You can now access the application at `localhost:3000` :)

## Limitation
1. There was a problem when trying to dockerise the backend server as it was not able to connect to the dockerised MySQL server. The current solution to this is to run the backend server as mentioned in Step 3 of the previous section
