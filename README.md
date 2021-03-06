# account-management-ui

This is the frontend for the account-management backend.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

# account-management

The backend for this application is created using <b>Java</b> and <b>SpringBoot</b>. 

Please see READ ME on how to use and deploy: 

https://github.com/carlallanvela/account-management/

# Live UI in AWS [Environment Temporarily Terminated]

Deployed a working frontend to <b>AWS S3</b>. It connects to <b>AWS Elastic Beanstalk</b> to access APIs. 

UI can be accessed via: 

http://account-management-ui.s3-website.us-east-2.amazonaws.com/

# Live Endpoints in AWS [Environment Temporarily Terminated]

Deployed a working version to <b>AWS Elastic Beanstalk</b>. 

APIs can be accessed via: 

http://account-management-dev.us-west-2.elasticbeanstalk.com

<b> Sample requests:</b>
<b>View Accounts:</b>

`http://account-management-dev.us-west-2.elasticbeanstalk.com/jpa/accounts`

<b>View Transactions:</b>

`http://account-management-dev.us-west-2.elasticbeanstalk.com/jpa/accounts/10002/transactions`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## TODOs
1) Loading wheel.
2) Login.
