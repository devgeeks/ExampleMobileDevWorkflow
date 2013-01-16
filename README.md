# Example Mobile Dev Workflow

## Requirements

- Cordova CLI - [https://github.com/apache/cordova-cli/](https://github.com/apache/cordova-cli/)
	- Cordova / PhoneGap command line interface
- Bower - [http://twitter.github.com/bower/](http://twitter.github.com/bower/)
	- Component package manager for js/css libraries
- Grunt - [http://gruntjs.com/](http://gruntjs.com/)
	- Build tool for minimising, running and tests
- Node and npm - [http://nodejs.org/](http://nodejs.org/)
	- Node package manager for Grunt Add-ons
- PhantomJS - [http://phantomjs.org/](http://phantomjs.org/)
	- Headless webkit for running tests

## Getting started

- clone the project
- cd into the project folder
- `npm install` to install any node_modules
- `bower install` to install any js/css components
- `cordova platform add ios` and/or `cordova platform add android`

## First test

To make sure everything is set up from the above, run your first tests

Run `grunt test` - This will lint the source (`grunt lint`), concat the source into a single js file (`grunt concat`) and finally run the headless Jasmine tests (`grunt jasmine`).

## Workflow

JavaScript files are in `src`. They are kept out of the www tree so that they can be linted without trying to lint the concatenated and minified versions. However, the index.html should have a script tag only for the JavaScript files in either `www/components` (managed by Bower) or `www/js`.

Building and testing the project is normally done via the Grunt tasks below.

## Grunt tasks

`grunt lint`

- runs JSHint on the src files `src/**/*.js`

`grunt concat`

- concatenates the src files in `src/models/*.js`, `src/collections/*.js`, `src/views/*.js` and `src/app.js` (in that order) into `www/js/<package-name-from-package.json>.js`

`grunt min`

- minifies `www/js/<package-name-from-package.json>.js` into `www/js/<package-name-from-package.json>.min.js` (so should only be called after calling `grunt concat` above)

`grunt jasmine`

- runs Jasmine tests in `www/spec/**/*.js` based on the template `www/spec/SpecRunner.html`

`grunt watch`

- starts watching the same files as `grunt lint` as well as the files from `grunt jasmine` and when changes are detected runs `lint concat jasmine`

#### Custom tasks

`grunt` (default tasks)

- runs `lint concat min jasmine`

`grunt test`

- runs `lint concat jasmine`

`grunt debug_ios`

- runs `lint concat shell:debug_ios` to debug iOS platform on the simulator

`grunt debug_android`

- runs `lint concat shell:debug_android` to debug Android platform on the emulator (or a plugged in device)
