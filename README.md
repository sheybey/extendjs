# extendjs - Barebones object wrapper library

This is a library designed to allow easy extension of objects that you
shouldn't be touching the prototype of. Just register a method using
`extend.add(name, callable)` and extend away.

No relation to extendjs.com. The name will be changed at some point.

## Files

### `extend.js`
Contains the extend function, which has no functionality in of itself. This
file does not depend on a browser environment.

### `extend-stdlib.js`
Optional "standard library," which contains several jQuery-like functions.
Mainly intended to ease web development, and as such, depends on a browser.

## Usage

```javascript
extend.add("text", function (text) {
	this.object.textContent = text;
});

var h1 = extend(document.querySelector("h1"));
var h2 = extend(document.createElement("h2"));

h1.text("Heading!");
h2.text("New heading!");
```

Unless your function returns a value, it is automatically chainable.
```javascript
extend.add("hide", function () { 
	this.object.style.display = "none";
});

h1.text("Now you see it...").hide(); // Now you don't.
```