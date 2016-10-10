/*jslint this, browser*/
/*global extend, window*/
/*property
    add, addEventListener, append, appendChild, apply, classList, contains,
    css, element, getAttribute, getComputedStyle, hide, innerHTML, parentNode,
    remove, removeChild, removeEventListener, replace, setAttribute, show,
    style, textContent, toUpperCase, value
*/

(function () {
    "use strict";
    extend.add("attr", function (attribute, value) {
        if (value === undefined) {
            return this.element.getAttribute(attribute);
        }
        this.element.setAttribute(attribute, value);
    });
    extend.add("val", function (value) {
        if (value === undefined) {
            return this.element.value;
        }
        this.element.value = value;
    });
    extend.add("css", function (property, value) {
        property = property.replace(
            /-([a-z])/g,
            function (ignore, group) {
                return group.toUpperCase();
            }
        );
        if (value === undefined) {
            return window.getComputedStyle(this.element)[property];
        }
        this.element.style[property] = value;
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
        this.element.classList.add.apply(
            this.element.classList,
            arguments
        );
    });
    extend.add("removeClass", function () {
        this.element.classList.remove.apply(
            this.element.classList,
            arguments
        );
    });
    extend.add("hasClass", function (name) {
        return this.element.classList.contains(name);
    });

    extend.add("text", function (text) {
        if (text === undefined) {
            return this.element.textContent;
        }
        this.element.textContent = text;
    });
    extend.add("html", function (html) {
        if (html === undefined) {
            return this.element.innerHTML;
        }
        this.element.innerHTML = html;
    });

    extend.add("on", function (trigger, handler) {
        this.element.addEventListener(trigger, handler);
    });
    extend.add("off", function (trigger, handler) {
        this.element.removeEventListener(trigger, handler);
    });

    extend.add("parent", function () {
        return extend(this.element.parentNode);
    });

    extend.add("append", function (child) {
        this.element.appendChild(extend(child).element);
    });
    extend.add("appendTo", function (parent) {
        extend(parent).append(this);
    });
    extend.add("remove", function () {
        this.element.parentNode.removeChild(this.element);
    });
}());