/**
 * Opens new windows and search in various search engines.
 */
function search(event) {
    /**
     * Create windows for each search engine.
     */
    function create_windows(width, height) {
        // Search Google
        browser.windows.create({
            url: 'https://www.google.com/search?q=' + searchString,
            left: 0,
            top: 0,
            width: width,
            height: height
        });
        // Search Wikipedia
        browser.windows.create({
            url: 'https://en.wikipedia.org/w/index.php?search=' + searchString,
            left: 0,
            top: height,
            width: width,
            height: height
        });
        // Search Ecosia
        browser.windows.create({
            url: 'https://www.ecosia.org/search?q=' + searchString,
            left: width,
            top: 0,
            width: width,
            height: height
        });
        // Search Google Images
        browser.windows.create({
            url: 'https://www.google.com/search?tbm=isch&q=' + searchString,
            left: width,
            top: height,
            width: width,
            height: height
        });

    }

    /**
     * Deal with JS types and cleanly divide by two.
     */
    function divideByTwo(str) {
        return (parseFloat(str) / 2) | 0;
    }

    // Get value entered in search box.
    const searchString = document.getElementById('search-field').value;

    // Get current window's size.
    browser.windows.getCurrent().then(function (windowInfo) {
        create_windows(divideByTwo(windowInfo.width), divideByTwo(windowInfo.height));
    }).catch(reportError);
}

/**
 * Just log the error to the console.
 */
function reportError(error) {
    // TODO: Show the error to the user.
    console.error(`Something went wrong.\n${error}`);
}

// Add listener to button.
document.getElementById('search-form').addEventListener('submit', search);

// TODO: Trim common results from Google, Wikipedia and Ecosia.
