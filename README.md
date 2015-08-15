## Ember Auth example using SimpleAuth and Torii

## About

The idea is to implement authentication using the [Simple-Auth](http://ember-simple-auth.com/) library for OAtuh2.

The authentication methods implemented here are:

- [ember-simple-auth-oauth2](https://github.com/simplabs/ember-simple-auth/tree/master/packages/ember-simple-auth-oauth2) and a fake OAuth2 server in Node with a username/password form
- [ember-simple-auth-torii](https://github.com/simplabs/ember-simple-auth/tree/master/packages/ember-simple-auth-torii) and the torii's facebook provider with a "Login with Facebook" button

> Checkout the commit history to see all the steps

## Docs

- [https://github.com/simplabs/ember-simple-auth](https://github.com/simplabs/ember-simple-auth)
- [https://github.com/Vestorly/torii](https://github.com/Vestorly/torii)
- [http://ember-simple-auth.com/ember-simple-auth-api-docs.html](http://ember-simple-auth.com/ember-simple-auth-api-docs.html)
- [http://ember-simple-auth.com/ember-simple-auth-oauth2-api-docs.html](http://ember-simple-auth.com/ember-simple-auth-oauth2-api-docs.html)
- [http://ember-simple-auth.com/ember-simple-auth-torii-api-docs.html](http://ember-simple-auth.com/ember-simple-auth-torii-api-docs.html)
- [https://github.com/simplabs/ember-cli-simple-auth](https://github.com/simplabs/ember-cli-simple-auth)
- [https://github.com/simplabs/ember-cli-simple-auth-torii](https://github.com/simplabs/ember-cli-simple-auth-torii)
- [https://github.com/simplabs/ember-cli-simple-auth-example](https://github.com/simplabs/ember-cli-simple-auth-example)

## Other tutorials

- 2015/08 - [create-your-first-ember-2-dot-0-app-from-authentication-to-calling-an-api](https://auth0.com/blog/2015/08/11/create-your-first-ember-2-dot-0-app-from-authentication-to-calling-an-api/)
- 2015/07 - [auth0-ember-simple-auth](https://auth0.com/blog/2015/06/26/auth0-ember-simple-auth/)
- 2015/03 - [twitter-authentication-ember-js-torii](http://www.sitepoint.com/twitter-authentication-ember-js-torii/)
- 2015/03 - [ember-simple-auth-tutorial-and-common-problems](http://johnmosesman.com/ember-simple-auth-tutorial-and-common-problems/)
- 2015/03 - [ember-simple-auth-torii-example](http://www.programwitherik.com/ember-simple-auth-torii-example-application/)
- 2014/08 - [using-ember-simple-auth-with-ember-cli](http://log.simplabs.com/post/90339547725/using-ember-simple-auth-with-ember-cli)
- 2014/07 - [Using Ember Simple Auth with ember-cli](https://www.youtube.com/watch?v=EkedSQH6yBo)
- 2014/06 - [authentication-for-single-page-apps](http://madhatted.com/2014/6/17/authentication-for-single-page-apps)

__Not using simple-auth__

- 2015/02 - [ember-vs-angular-authentication](http://brewhouse.io/blog/2015/02/12/ember-vs-angular-authentication.html)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

