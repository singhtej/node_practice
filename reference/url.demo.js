const url = require('url');

const myURL = new URL('https://example.org:8000/singh');
// Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// Host (root domain)
console.log(myURL.host);

// Hostname
console.log(myURL.hostname);
// hostname does not get port

// pathname
console.log(myURL.pathname);

// Serialized query
console.log(myURL.search);

// Params object
console.log(myURL.searchParams);

// Add param
myURL.searchParams.append('abc','123');
console.log(myURL.searchParams);

