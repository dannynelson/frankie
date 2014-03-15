# Angular Phonegap Boilerplate

A framework for creating scalable hybrid mobile apps with angular and ionic.

## Install

```
$ git clone git://github.com/dannynelson/angular-phonegap-boilerplate
$ cd angular-phonegap-boilerplate
$ npm install
$ grunt watch:build
```

## Developing client app
Develop all client related code in the `client` directory. Run `grunt build` to compile all the code to `phonegap/www` directory for testing.

After the build, you can view the code in the browser by running `Python -m SimpleHTTPServer` in the `phonegap/www` directory.

## Installing dependencies
All client and server dependencies installed via npm. Anything not available via npm can be installed with napa. See package.json for details.

## Client Structure
Client files organized into two main sections
- *common* - all standalone components reused throughout the app. Includes all js, styles, and assets.
- *app* - Everything that is just used once in the app. This can include templates, controllers, services, page-specific css files, and spec tests. 
