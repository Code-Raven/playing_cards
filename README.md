# playing_cards

Read Me
====================

Setup
---------------------
- create two directories, app and tests
- move project files to app, and test files to tests
- nav to root dir, npm init (installs package.json - metadata for npm/project)
- install test test runner karma (npm install karma --save-dev)
- needed before installing jasmin (npm install jasmine-core@2.0.4)
- install unit testing framework jasmine (npm install karma-jasmine --save-dev)
- install to access karma command line (npm install -g karma-cli)
- install chrome launcher to run unit tests (npm install karma-chrome-launcher --save-dev)
- set-up testing (karma init), enter, enter, enter
- tell karma where to find your .js source files (app/**/*.js)
- tell karma where to find your .js test files (tests/**/*.js), enter, enter, enter
- create first test.js in tests dir (karma start karma.conf.js)
- download and include angular-mochs.js, and include in config directory

http://jasmine.github.io/1.3/introduction.html#section-Matchers
https://docs.angularjs.org/guide/unit-testing
https://rocketeer.be/articles/testing-with-angular-js/
http://www.sitepoint.com/mocking-dependencies-angularjs-tests/
https://joshldavis.com/2013/05/27/difference-between-tdd-and-bdd/

TODO'S
---------------------