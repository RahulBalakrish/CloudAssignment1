# Cloud Assignment 01
## Database Health Check API /healthz api

1. Curl commannd for Get request with query parameters {Should return 400 Bad Request}
curl -vvvv "http://localhost:3000/healthz?param=d" -X GET

2. Curl commannd for Get request with payload in Body {Should return 400 Bad Request}
curl -vvvv http://localhost:3000/healthz -X GET -d {"hello":"world"}

3. Curl command for Get request without Payload in Body {Should return 200 OK}
curl -vvvv http://localhost:3000/healthz -X GET

4. Curl command for Post request for the /healthz API {Should return 405 Method Not Allowed}
curl -vvvv http://localhost:3000/healthz -X POST

5. To stop the Postgresql
brew services stop postgresql

6. To start the Postgresql
brew services start postgresql