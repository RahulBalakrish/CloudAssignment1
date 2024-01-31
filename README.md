


curl -vvvv "http://localhost:3000/healthz?param=d" -X GET

curl -vvvv http://localhost:3000/healthz -X GET -d {"hello":"world"}

curl -vvvv http://localhost:3000/healthz -X GET

curl -vvvv http://localhost:3000/healthz -X POST