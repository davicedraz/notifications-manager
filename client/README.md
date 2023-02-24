# Dummy client for testing

  *A simple server of an HTML page to test receiving notifications*

## Run
```bash
npx serve
```

## Using Docker

Create a Docker network called notifications-net by running the command:
```bash
docker network create notifications-net
```
Build the example of Client Docker image by running the command:
```bash
docker build -t notifications-client-example
```
Start the client container by running:

```
docker run -p 8080:8080 --network notifications-net --name notifications-client-example notifications-client-example
```