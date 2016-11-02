/*jslint this, browser*/
/*global extend, window*/
/*property
    add, addEventListener, append, appendChild, apply, classList, contains,
    create, createElement, css, getAttribute, getComputedStyle, hide,
    innerHTML, object, parentNode, remove, removeChild, removeEventListener,
    replace, setAttribute, show, style, textContent, toUpperCase, value
*/

// Copyright (c) 2016 Sam Heybey.
// See https://github.com/sheybey/extendjs/blob/master/LICENSE for details.

(function () {
    "use strict";
    extend.create = function (name) {
        return extend(document.createElement(name));
    };

    extend.add("attr", function (attribute, value) {
        if (value === undefined) {
            return this.object.getAttribute(attribute);
        }
        this.object.setAttribute(attribute, value);
    });
    extend.add("val", function (value) {
        if (value === undefined) {
            return this.object.value;
        }
        this.object.value = value;
    });
    extend.add("css", function (property, value) {
        property = property.replace(
            /-([a-z])/g,
            function (ignore, group) {
                return group.toUpperCase();
            }
        );
        if (value === undefined) {
            return window.getComputedStyle(this.object)[property];
        }
        this.object.style[property] = value;
    });

    extend.add("hide", function () {
        this.css("display", "none");
    });
    extend.add("show", function () {
        this.css("display", "");
    });
    extend.add("toggle", function () {
        if (this.css("display") === "none") {
            this.show();
        } else {
            this.hide();
        }
    });

    extend.add("addClass", function () {
        this.object.classList.add.apply(
            this.object.classList,
            arguments
        );
    });
    extend.add("removeClass", function () {
        this.object.classList.remove.apply(
            this.object.classList,
            arguments
        );
    });
    extend.add("hasClass", function (name) {
        return this.object.classList.contains(name);
    });

    extend.add("text", function (text) {
        if (text === undefined) {
            return this.object.textContent;
        }
        this.object.textContent = text;
    });
    extend.add("html", function (html) {
        if (html === undefined) {
            return this.object.innerHTML;
        }
        this.object.innerHTML = html;
    });

    extend.add("on", function (trigger, handler) {
        this.object.addEventListener(trigger, handler);
    });
    extend.add("off", function (trigger, handler) {
        this.object.removeEventListener(trigger, handler);
    });

    extend.add("parent", function () {
        return extend(this.object.parentNode);
    });

    extend.add("append", function (child) {
        this.object.appendChild(extend(child).object);
    });
    extend.add("appendTo", function (parent) {
        extend(parent).append(this);
    });
    extend.add("remove", function () {
        this.object.parentNode.removeChild(this.object);
    });
}());