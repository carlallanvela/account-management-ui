# account-management-ui

This is the frontend for the account-management backend.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

# account-management

The backend for this application is created using Java and SpringBoot. 

Please see READ ME on how to use and deploy: https://github.com/carlallanvela/account-management/

# Live UI in AWS

Deployed a working frontend to AWS S3. It connects to AWS Elastic Beanstalk to access APIS. UI can be accessed via: 
http://account-management-ui.s3-website.us-east-2.amazonaws.com/

# Live Endpoints in AWS

Deployed a working version to AWS Elastic Beanstalk. APIs can be accessed via: 
http://account-management-dev.us-west-2.elasticbeanstalk.com

Sample requests:
View Accounts:
`http://account-management-dev.us-west-2.elasticbeanstalk.com/jpa/accounts`

View Transactions:
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
