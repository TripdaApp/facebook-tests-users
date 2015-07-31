# facebook-tests-users
Script to remove facebook test users

## Install

Run npm install 
```sh
$ npm install
```

## Configuration
Add your api key and app secret in config.js e.g:

```javascript
return module.exports = {
    appId: '',
    appSecret: ''
};
```

## Usage
To remove users via command line, run node remove_users.js and pass amount as parameter.
e.g: Removing 100 users
```sh
$ node remove_users.js 100
```

## Usage with express
```sh
$ node index.js
```

To remove users execute an GET to path delete-users passing the number of users you want to remove.
e.g:
```
http://localhost:5000/delete-users/100
```

### Remove using CURL
```sh
curl -X 'http://localhost:5000/delete-users/2'
```
