# url-shortner
Service to shorten the provided url. For now a url mapping is maintained in global object. For future scope url mapping is to be kept in redis.

### Steps to setup the project
1. git clone "repo_url"
2. cd url-shortner
3. npm install
4. node app.js

### Steps to use the service
1. Service to shorten the url

        curl -X POST \
        http://localhost:3000/shorten-url \
        -H 'Content-Type: application/json' \
        -H 'Postman-Token: 824af09b-f1a4-4c31-a83e-bf4892a830de' \
        -H 'cache-control: no-cache' \
        -d '{ "url": "https://zora.medium.com/white-voluntourists-dont-belong-on-indian-reservations-c49027851441" }'
        
2. Use the response short url in browser.
 
