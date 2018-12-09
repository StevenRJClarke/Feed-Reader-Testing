/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 $(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Tests that each feed in the allFeeds object has an URL
         */
         it('has feeds with URLs that are defined', function() {
            // Loop through each element of the allFeeds object

            allFeeds.forEach(function(element) {
                //Find the URL of the feed
                const url = element.url;

                //Is the URL defined?
                expect(url).toBeDefined();

                //Does the URL not have 0 length?
                expect(url.length).not.toBe(0);
            })
        });


        /* Tests that each feed in the allFeeds object has a name
         */
         it('has feeds with names that are defined', function() {
            // Loop through each element of the allFeeds object

            allFeeds.forEach(function(element) {
                //Find the name of the feed
                const name = element.name;

                //Is the name defined?
                expect(name).toBeDefined();

                //Does the name not have 0 length?
                expect(name.length).not.toBe(0);
            })
        });
     });


    /* Test suite for the menu that allows the user to select
       the feed
    */
    describe('The menu', function() {

        /* Tests that the menu is hidden when the page is loaded
         */
         it('is hidden by default', function() {
            /* <body> has class 'menu-hidden' on loading, which moves
               menu 12em to the left of the screen where it cannot be
               seen. This class is toggled when menu icon clicked.

               Test if body has class 'menu-hidden'
               */
               expect($('body').hasClass('menu-hidden')).toBe(true)

           });

         /* Tests that the menu can be revealed and hidden by clicking on
            the menu icon
          */
          it('changes visibility when the menu icon is clicked', function() {
              /* Click the menu icon to open the menu.
                 Expect the menu to be shown: <body> will not have class
                 'menu-hidden'
                 */
                 $('.menu-icon-link').click();
                 expect($('body').hasClass('menu-hidden')).toBe(false);

              /* Click the menu icon again to close the menu.
                 Expect the menu to be hidden: <body> will have class
                 'menu-hidden'
                 */
                 $('.menu-icon-link').click();
                 expect($('body').hasClass('menu-hidden')).toBe(true);
             });

      });

    /* Test suite to check the initial entries in the feed*/
    describe('Initial Entries', function() {

        /* Tests that there is at least one entry in the feed.
         */
         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            })
        });

         it('contains at least a single entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(1);
            done();

        });
     });

    /* Test suite to check that when the user selects a new feed, new entries
       are shown
    */
    describe('New Feed Selection', function() {

        /* Test that when the user selects the CSS Tricks feed, the entries
           are different to those in the Udacity Blog feed.
         */
         let firstFeed = '',
               secondFeed = '';

         beforeEach(function(done) {
            /* Load the Udacity Blog and get its feeds*/
            loadFeed(0, function() {
                /* Get the first entry of the first feed */
                firstFeed = $('.feed .entry')[0];

                /* Load the CSS Tricks and get its feeds*/
                loadFeed(1, function() {
                    /* Get the first entry of the second feed */
                    secondFeed = $('.feed .entry')[0];
                    done();
                });
            });
        });

         it('changes content when new feed selected', function(done) {
            expect(firstFeed).not.toEqual(secondFeed);
            done();
        });
     });
}());
