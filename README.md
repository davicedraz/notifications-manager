# Notifications Manager

  *A generic solution for managing, scheduling and sending notifications in order to be scalable and resilient*

## Design 

![Architecture](docs/arch/notifications-manager.png)

## Setup & Run

```bash
docker network create notifications-net
```

```
docker-compose -f ./notifications-api/docker-compose.yaml up --build -d
```

```
docker-compose -f ./notifications-service-worker/docker-compose.yaml up
```

```
docker build -t notifications-client-example .
```

```
docker run -p 8080:8080 --network notifications-net --name notifications-example-client notifications-example-client
```