# AWS SAM Sample app
This repository is sample app for AWS SAM (Serverless Application Model).

## install sam tool

$ pip install -r requirements.txt

## run docker

```
$ docker-machine start default
$ eval "$(docker-machine env default)"
```

## install npm package

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



### session test


set cookie

```
$ curl -i http://localhost:3000/1.0/test/setSession
HTTP/1.0 200 OK
Set-Cookie: SID=%7B%22status%22%3A%22ok%22%7D.eTkTgF7CmPnvB9WX2f9JLba5qgXjVf969xI6KdXCVmY; Path=/; Expires=Thu, 04 Oct 2018 07:20:09 GMT
Content-Type: application/json
Content-Length: 18
Server: Werkzeug/0.14.1 Python/3.6.2
Date: Wed, 03 Oct 2018 22:34:33 GMT

{"message":"test"}
```

get cookie

```
$ curl -i -H "Cookie: SID=%7B%22status%22%3A%22ok%22%7D.eTkTgF7CmPnvB9WX2f9JLba5qgXjVf969xI6KdXCVmY;" http://localhost:3000/1.0/test/getSession
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 27
Server: Werkzeug/0.14.1 Python/3.6.2
Date: Wed, 03 Oct 2018 22:35:19 GMT

{"session":{"status":"ok"}} 
```

## user auth test


valid user

```
$ curl -i -H "Cookie: SID=%7B%22status%22%3A%22ok%22%7D.eTkTgF7CmPnvB9WX2f9JLba5qgXjVf969xI6KdXCVmY;" http://localhost:3000/1.0/test/user_auth
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 40
Server: Werkzeug/0.14.1 Python/3.6.2
Date: Wed, 03 Oct 2018 22:44:25 GMT

{"user":{"id":1,"username":"test_user"}}
```

invalid user

```
$ curl -i http://localhost:3000/1.0/test/user_auth
HTTP/1.0 401 UNAUTHORIZED
Content-Type: application/json
Content-Length: 23
Server: Werkzeug/0.14.1 Python/3.6.2
Date: Wed, 03 Oct 2018 22:44:54 GMT

{"message":"401 error"} 
```
