# ── Stage 1: Build ──────────────────────────────────────────────────────────
FROM maven:3.9.5-eclipse-temurin-21 AS builder

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline -B

COPY src ./src
RUN mvn clean package -DskipTests

# ── Stage 2: Runtime ─────────────────────────────────────────────────────────
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

RUN addgroup -S bookit && adduser -S bookit -G bookit

COPY --from=builder /app/target/*.jar app.jar

RUN chown bookit:bookit app.jar

USER bookit

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
