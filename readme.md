# TV Chat App

## Getting Started

- Setup sass: `ionic setup sass`
- Install the required cordova plugins:

```
ionic plugin add org.apache.cordova.inappbrowser
```

- Setup the required bower packages:

```
bower install ngCordova angularfire lodash angular-moment openfb --save-dev
```

- Edit your `ionic.app.scss` file adding:

```scss
$ionicons-font-path: "../lib/ionic/fonts" !default;
$light:                           #fff;
$assertive:                       #D31996;
$positive:                        #19DD89;
$dark:                            #000;

@import url(http://fonts.googleapis.com/css?family=Oxygen);
$font-family-sans-serif: "Oxygen", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif !default;

// Include all of Ionic
@import "www/lib/ionic/scss/ionic";
@import "www/scss/app/intro";
@import "www/scss/app/search";
@import "www/scss/app/show";
```
