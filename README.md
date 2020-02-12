# CustomChat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Getting started on deving

- Download repo + install node.js and angular (vscode reccomended)
- Ask Bryce for access to firebase.
- Go to firebase > custom-chat > project-overview > project-settings
- Create src/environments/environment.ts
- Inside put:

```
export const environment = {
    production: false,
    firebase: {
      apiKey: X,
      authDomain: X,
      databaseURL: X,
      projectId: X,
      storageBucket: X,
      messagingSenderId: X,
      appId: X,
      measurementId: X,
    },
    messageUrl: "https://us-central1-custom-chat-915ec.cloudfunctions.net/sendMessage",
    likeUrl: "https://us-central1-custom-chat-915ec.cloudfunctions.net/likeMessage"
  };
```
- Replace all the X's with what you get from under the custom chat settings in firebase
- run `firebase login` (no idea if you have to do this)
- run `ng serve`

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
