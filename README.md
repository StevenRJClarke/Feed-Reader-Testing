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