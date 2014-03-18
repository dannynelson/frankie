# Angular Phonegap Boilerplate

A framework for creating scalable hybrid mobile apps with angular and ionic.

## Install

```
$ git clone git://github.com/dannynelson/angular-phonegap-boilerplate
$ cd angular-phonegap-boilerplate
$ npm install
$ npm install
$ grunt watch:build
```

Notes:

1. `npm install` must be run twice since 'napa' dependencies aren't installed until the second run of `npm install`.

2. Leave `grunt watch:build` running while you develop. This way the application will be rebuilt each time you make a change, allowing the server to display your new changes.

## Running a Server

```
$ cd phonegap/www
$ python -m SimpleHTTPServer
```

Navigate to `localhost:8000` in your browser to see the magic!

## Developing client app
Develop all client related code in the `client` directory. Run `grunt build` to compile all the code to `phonegap/www` directory for testing.

After the build, you can view the code in the browser by running `Python -m SimpleHTTPServer` in the `phonegap/www` directory.

## Installing dependencies
All client and server dependencies installed via npm. Anything not available via npm can be installed with napa. See package.json for details.

## Client Structure
Client files organized into two main sections
- *common* - all standalone components reused throughout the app. Includes all js, styles, and assets.
- *app* - Everything that is just used once in the app. This can include templates, controllers, services, page-specific css files, and spec tests.
