# install sam

$ pip install -r requirements.txt


## run docker

```
$ docker-machine start default
$ eval "$(docker-machine env default)"
```

## install package

```
cd src
npm install
```

# run lambda + API gateway server

```
$ sam local start-api
```

## test 
```
$curl -i http://localhost:3000/1.0/test
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 18
Server: Werkzeug/0.14.1 Python/3.6.2
Date: Wed, 03 Oct 2018 18:56:45 GMT

{"message":"test"}
```



```
$curl -i  -X POST  http://localhost:3000/1.0/hello/my_message
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 24
Server: Werkzeug/0.14.1 Python/3.6.2
Date: Wed, 03 Oct 2018 18:56:58 GMT

{"message":"my_message"} 
```


```
$ curl -i http://localhost:3000/1.0/not_found
HTTP/1.0 404 NOT FOUND
Content-Type: application/json
Content-Length: 23
Server: Werkzeug/0.14.1 Python/3.6.2
Date: Wed, 03 Oct 2018 18:57:29 GMT

{"message":"404 error"}
```
