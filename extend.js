/*jslint this*/
/*property
    add, apply, isPrototypeOf, object, prototype
*/

// Copyright (c) 2016 Sam Heybey.
// See https://github.com/sheybey/extendjs/blob/master/LICENSE for details.

var extend = (function () {
    "use strict";
    var Wrapper = function (object) {
        this.object = object;
    };
    var e = function (object) {
        if (object === null || object === undefined) {
            throw new Error("null or undefined passed to extend");
        }

        if (Wrapper.prototype.isPrototypeOf(object)) {
            return object;
        }
        return new Wrapper(object);
    };

    e.add = function (name, callable) {
        Wrapper.prototype[name] = function () {
            var r = callable.apply(this, arguments);
            return r === undefined
                ? this
                : r;
        };
    };

    return e;
}());