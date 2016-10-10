/*jslint this, browser*/
/*property
    add, apply, element, isPrototypeOf, prototype, create, createElement
*/

var extend = (function () {
    "use strict";
    var Wrapper = function (element) {
        this.element = element;
    };
    var e = function (element) {
        if (element === null || element === undefined) {
            throw new Error("null or undefined passed to extend");
        }

        if (Wrapper.prototype.isPrototypeOf(element)) {
            return element;
        }
        return new Wrapper(element);
    };

    e.add = function (name, callable) {
        Wrapper.prototype[name] = function () {
            var r = callable.apply(this, arguments);
            return r === undefined
                ? this
                : r;
        };
    };
    e.create = function (name) {
        return e(document.createElement(name));
    };

    return e;
}());