# Feed Reader Testing

## Table of Contents

* [About](#About)
* [Tests](#Tests)
* [Installation](#Installation-and-Getting-Started)

## About

This is a feed reader application that allows the user to select a RSS Feed and see the entries displayed.

It has been created with the Jasmine framework using "test-driven development". Tests are written before the code, showing the expections of the functionality of the application. These tests will initially fail. Code is then written to provide the functionality that will meet the expectations and pass the test.

## Tests

The application was developed using test-driven development. These are the expectations that were tested:

* The user is able to select from the RSS Feeds
... Each feed has a name
... Each feed has an URL
* The RSS Feeds are selected from a menu
... This menu is hidden by default
... It can be shown and hidden by clicking a menu icon
* Each RSS Feed will display at least one entry
* New entries are shown when a different RSS Feed is selected

## Installation and Getting Started

Clone the repository to a local project directory.

The application is found at _index.html_ in the _dist_ folder.

## Building the Application

Many work tools to build and test the application. Source files are in the _app_ folder. Actual application files are in the _dist_ folder.

### Dependencies

   The appliation was built using:

   * gulp
   * gulp-sass (SASS)
   * gulp-autoprefixer (autoprefixing)
   * browser-sync (live editing)
   * gulp-eslint (linter)
   * gulp-concat (concatenate script files)
   * gulp-uglify (minify)

   The test were built with gulp, using:

   * gulp-jasmine-browser (jasmine test suites in browser)

   ### Installing the Build Tools

   Install the build tools listed above into the root folder. See Node Package Manager for installation instructions.

   ### Using the Build Tools

   *When amending the HTML and SASS file*

   Use the _gulp_ command in the terminal to see live editing. This will:

   * change the styles if you change the _app/sass/style.scss_ SASS file
   * change the HTML if you change the _app/index.html_ HTML file
   * lint the JS files in the _app/js/app.js_ JS file

   *When amending the JS file*

   Use the _gulp scripts-dist_ command if you change the _app/js/app.js_ file.