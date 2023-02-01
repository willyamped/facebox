FROM maven:3.6.3-jdk-11

WORKDIR /app

COPY . .

RUN mvn -DskipTests clean install

COPY target/facebox-0.0.1-SNAPSHOT.jar .

CMD ["java", "-jar", "facebox-0.0.1-SNAPSHOT.jar"]
