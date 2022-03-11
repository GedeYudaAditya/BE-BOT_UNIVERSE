/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function (e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function (s, n) {
        "use strict";

        function e(e) {
            return 0 <= function (e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                    if (+o[i] < +n[i]) return 1;
                    if (+n[i] < +o[i]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var r = {};

        function u(e) {
            var t = n.console;
            s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
        }

        function t(e, t, r, n) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return u(n), r
                },
                set: function (e) {
                    u(n), r = e
                }
            })
        }

        function o(e, t, r, n) {
            e[t] = function () {
                return u(n), r.apply(this, arguments)
            }
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function () {
            r = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
        var i, a, c, d = {},
            l = s.fn.init,
            p = s.find,
            f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (i in s.fn.init = function (e) {
                var t = Array.prototype.slice.call(arguments);
                return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t)
            }, s.fn.init.prototype = s.fn, s.find = function (t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && f.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(y, function (e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        u("Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return p.apply(this, r)
            }, p) Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
        o(s.fn, "size", function () {
            return this.length
        }, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function () {
            return JSON.parse.apply(null, arguments)
        }, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function (e) {
            return null == e ? "" : (e + "").replace(m, "")
        }, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function (e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }), o(s, "type", function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "jQuery.type is deprecated"), o(s, "isFunction", function (e) {
            return "function" == typeof e
        }, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function (e) {
            return null != e && e === e.window
        }, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function () {
            var e = a.apply(this, arguments);
            return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
        }, e("4.0.0") || s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
        }));
        var g = s.fn.removeAttr,
            h = s.fn.toggleClass,
            v = /\S+/g;

        function j(e) {
            return e.replace(/-([a-z])/g, function (e, t) {
                return t.toUpperCase()
            })
        }
        s.fn.removeAttr = function (e) {
            var r = this;
            return s.each(e.match(v), function (e, t) {
                s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), g.apply(this, arguments)
        };
        var Q, b = !(s.fn.toggleClass = function (t) {
                return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
                    var e = this.getAttribute && this.getAttribute("class") || "";
                    e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
                }))
            }),
            w = /^[a-z]/,
            x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function (e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function () {
                var e;
                return b = !0, e = r.apply(this, arguments), b = !1, e
            })
        }), s.swap = function (e, t, r, n) {
            var o, i, a = {};
            for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) a[i] = e.style[i], e.style[i] = t[i];
            for (i in o = r.apply(e, n || []), t) e.style[i] = a[i];
            return o
        }, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function () {
                return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function (e, t) {
            var r, n, o = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function (e, t) {
                s.fn.css.call(o, e, t)
            }), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
        };
        var A, k, S, M, N = s.data;
        s.data = function (e, t, r) {
            var n, o, i;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i];
                return N.call(this, e, o), t
            }
            return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments)
        }, s.fx && (S = s.Tween.prototype.run, M = function (e) {
            return e
        }, s.Tween.prototype.run = function () {
            1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments)
        }, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
                return n.document.hidden || u(k), A
            },
            set: function (e) {
                u(k), A = e
            }
        }));
        var R = s.fn.load,
            H = s.event.add,
            C = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function (e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                o = s.event.props;
            if (o.length) {
                u("jQuery.event.props are deprecated and removed: " + o.join());
                while (o.length) s.event.addProp(o.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
                while (o.length) s.event.addProp(o.pop());
            return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, s.event.add = function (e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments)
        }, s.each(["load", "unload", "error"], function (e, t) {
            s.fn[t] = function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }
        }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, r) {
            s.fn[r] = function (e, t) {
                return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }
        }), s(function () {
            s(n.document).triggerHandler("ready")
        }), s.event.special.ready = {
            setup: function () {
                this === n.document && u("'ready' event is deprecated")
            }
        }, s.fn.extend({
            bind: function (e, t, r) {
                return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
            },
            unbind: function (e, t) {
                return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
            },
            delegate: function (e, t, r, n) {
                return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
            },
            undelegate: function (e, t, r) {
                return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
            },
            hover: function (e, t) {
                return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
            }
        });

        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }

        function P(e) {
            var t = e.replace(O, "<$1></$2>");
            t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
        }
        var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            q = s.htmlPrefilter;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
            s.htmlPrefilter = function (e) {
                return P(e), e.replace(O, "<$1></$2>")
            }
        }, s.htmlPrefilter = function (e) {
            return P(e), q(e)
        };
        var D, _ = s.fn.offset;
        s.fn.offset = function () {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, s.ajax && (D = s.param, s.param = function (e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
        });
        var E, F, J = s.fn.andSelf || s.fn.addBack;
        return s.fn.andSelf = function () {
            return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments)
        }, s.Deferred && (E = s.Deferred, F = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], s.Deferred = function (e) {
            var i = E(),
                a = i.promise();
            return i.pipe = a.pipe = function () {
                var o = arguments;
                return u("deferred.pipe() is deprecated"), s.Deferred(function (n) {
                    s.each(F, function (e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }, e && e.call(i, i), i
        }, s.Deferred.exceptionHook = E.exceptionHook), s
    });
jQuery(function ($) {
    $('.zilla-likes').on('click', function () {
        var link = $(this);
        if (link.hasClass('active')) return false;
        var id = $(this).attr('id'),
            postfix = link.find('.zilla-likes-postfix').text();
        $.ajax({
            type: 'POST',
            url: zilla_likes.ajaxurl,
            data: {
                action: 'zilla-likes',
                likes_id: id,
                postfix: postfix,
            },
            xhrFields: {
                withCredentials: true,
            },
            success: function (data) {
                link.html(data).addClass('active').attr('title', 'You already like this');
            },
        });
        return false;
    });
    if ($('body.ajax-zilla-likes').length) {
        $('.zilla-likes').each(function () {
            var id = $(this).attr('id');
            $(this).load(zilla_likes.ajaxurl, {
                action: 'zilla-likes',
                post_id: id,
            });
        });
    }
});

function supportsTransitions() {
    return getSupportedTransition() != '';
}

function getSupportedTransition() {
    var b = document.body || document.documentElement,
        s = b.style,
        p = 'transition';
    if (typeof s[p] == 'string') {
        return p;
    }
    var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
    p = p.charAt(0).toUpperCase() + p.substr(1);
    for (var i = 0; i < v.length; i++) {
        if (typeof s[v[i] + p] == 'string') {
            return true;
        }
    }
    return '';
}
window.supportedTransition = getSupportedTransition();
window.supportsTransitions = supportsTransitions();

function supportsAnimations() {
    return getSupportedAnimation() != '';
}

function getSupportedAnimation() {
    var t, el = document.createElement("fakeelement");
    var animations = {
        "animation": "animationend",
        "OAnimation": "oAnimationEnd",
        "MozAnimation": "animationend",
        "WebkitAnimation": "webkitAnimationEnd",
        'msAnimation': 'MSAnimationEnd'
    };
    for (t in animations) {
        if (el.style[t] !== undefined) {
            return t;
        }
    }
    return '';
}
window.supportedAnimation = getSupportedAnimation();
window.supportsAnimations = supportsAnimations();

function getMobileMenuType() {
    if (!document.getElementById('site-header')) return 'default';
    var m = document.getElementById('site-header').className.match(/mobile-menu-layout-([a-zA-Z0-9]+)/);
    window.gemMobileMenuType = m ? m[1] : 'default';
    return window.gemMobileMenuType;
}
getMobileMenuType();
(function () {
    var logoFixTimeout = false;
    window.thegemDesktopMenuLogoFixed = false;
    window.thegemWasDesktop = false;
    window.megaMenuWithSettingsFixed = false;

    function getElementPosition(elem) {
        var w = elem.offsetWidth,
            h = elem.offsetHeight,
            l = 0,
            t = 0;
        while (elem) {
            l += elem.offsetLeft;
            t += elem.offsetTop;
            elem = elem.offsetParent;
        }
        return {
            "left": l,
            "top": t,
            "width": w,
            "height": h
        };
    }

    function fixMenuLogoPosition() {
        if (logoFixTimeout) {
            clearTimeout(logoFixTimeout);
        }
        var headerMain = document.querySelector('#site-header .header-main');
        if (headerMain == null) {
            return false;
        }
        var headerMainClass = headerMain.className;
        if (headerMainClass.indexOf('logo-position-menu_center') == -1 || headerMainClass.indexOf('header-layout-fullwidth_hamburger') != -1 || headerMainClass.indexOf('header-layout-vertical') != -1) {
            return false;
        }
        logoFixTimeout = setTimeout(function () {
            var page = document.getElementById('page'),
                primaryMenu = document.getElementById('primary-menu'),
                primaryNavigation = document.getElementById('primary-navigation'),
                windowWidth = page.offsetWidth,
                pageComputedStyles = window.getComputedStyle(page, null),
                pageMargin = parseFloat(pageComputedStyles['marginLeft']);
            if (isNaN(pageMargin)) {
                pageMargin = 0;
            }
            if (headerMainClass.indexOf('header-layout-fullwidth') != -1) {
                var logoItem = primaryMenu.querySelector('.menu-item-logo'),
                    items = primaryNavigation.querySelectorAll('#primary-menu > li'),
                    lastItem = null;
                for (var i = items.length - 1; i >= 0; i--) {
                    if (items[i].className.indexOf('mobile-only') == -1) {
                        lastItem = items[i];
                        break;
                    }
                }
                primaryMenu.style.display = '';
                logoItem.style.marginLeft = '';
                logoItem.style.marginRight = '';
                if (windowWidth < 1212 || lastItem === null) {
                    primaryMenu.classList.remove("menu_center-preload");
                    return;
                }
                window.thegemDesktopMenuLogoFixed = true;
                primaryMenu.style.display = 'block';
                var pageCenter = windowWidth / 2 + pageMargin,
                    logoOffset = getElementPosition(logoItem),
                    offset = pageCenter - logoOffset.left - logoItem.offsetWidth / 2;
                logoItem.style.marginLeft = offset + 'px';
                var primaryMenuOffsetWidth = primaryMenu.offsetWidth,
                    primaryMenuOffsetLeft = getElementPosition(primaryMenu).left,
                    lastItemOffsetWidth = lastItem.offsetWidth,
                    lastItemOffsetLeft = getElementPosition(lastItem).left,
                    rightItemsOffset = primaryMenuOffsetWidth - lastItemOffsetLeft - lastItemOffsetWidth + primaryMenuOffsetLeft;
                logoItem.style.marginRight = rightItemsOffset + 'px';
            } else {
                if (windowWidth < 1212) {
                    primaryNavigation.style.textAlign = '';
                    primaryMenu.style.position = '';
                    primaryMenu.style.left = '';
                    primaryMenu.classList.remove("menu_center-preload");
                    return;
                }
                window.thegemDesktopMenuLogoFixed = true;
                primaryNavigation.style.textAlign = 'left';
                primaryMenu.style.left = 0 + 'px';
                var pageCenter = windowWidth / 2,
                    primaryMenuOffsetLeft = getElementPosition(primaryMenu).left,
                    logoOffset = getElementPosition(document.querySelector('#site-header .header-main #primary-navigation .menu-item-logo')),
                    pageOffset = getElementPosition(page),
                    offset = pageCenter - (logoOffset.left - pageOffset.left) - document.querySelector('#site-header .header-main #primary-navigation .menu-item-logo').offsetWidth / 2;
                if (primaryMenuOffsetLeft + offset >= 0) {
                    primaryMenu.style.position = 'relative';
                    primaryMenu.style.left = offset + 'px';
                } else {
                    primaryMenu.style.position = '';
                    primaryMenu.style.left = '';
                }
            }
            primaryMenu.classList.remove("menu_center-preload");
        }, 50);
    }
    window.fixMenuLogoPosition = fixMenuLogoPosition;
    if (window.gemOptions.clientWidth > 1212) {
        window.addEventListener('load', function (event) {
            window.fixMenuLogoPosition();
        }, false);
    }
})();
(function ($) {
    var isVerticalMenu = $('.header-main').hasClass('header-layout-vertical'),
        isHamburgerMenu = $('.header-main').hasClass('header-layout-fullwidth_hamburger'),
        isPerspectiveMenu = $('#thegem-perspective').length > 0;
    $(window).resize(function () {
        window.updateGemClientSize(false);
        window.updateGemInnerSize();
    });
    window.menuResizeTimeoutHandler = false;
    var megaMenuSettings = {};

    function getOffset(elem) {
        if (elem.getBoundingClientRect && window.gemBrowser.platform.name != 'ios') {
            var bound = elem.getBoundingClientRect(),
                html = elem.ownerDocument.documentElement,
                htmlScroll = getScroll(html),
                elemScrolls = getScrolls(elem),
                isFixed = (styleString(elem, 'position') == 'fixed');
            return {
                x: parseInt(bound.left) + elemScrolls.x + ((isFixed) ? 0 : htmlScroll.x) - html.clientLeft,
                y: parseInt(bound.top) + elemScrolls.y + ((isFixed) ? 0 : htmlScroll.y) - html.clientTop
            };
        }
        var element = elem,
            position = {
                x: 0,
                y: 0
            };
        if (isBody(elem)) return position;
        while (element && !isBody(element)) {
            position.x += element.offsetLeft;
            position.y += element.offsetTop;
            if (window.gemBrowser.name == 'firefox') {
                if (!borderBox(element)) {
                    position.x += leftBorder(element);
                    position.y += topBorder(element);
                }
                var parent = element.parentNode;
                if (parent && styleString(parent, 'overflow') != 'visible') {
                    position.x += leftBorder(parent);
                    position.y += topBorder(parent);
                }
            } else if (element != elem && window.gemBrowser.name == 'safari') {
                position.x += leftBorder(element);
                position.y += topBorder(element);
            }
            element = element.offsetParent;
        }
        if (window.gemBrowser.name == 'firefox' && !borderBox(elem)) {
            position.x -= leftBorder(elem);
            position.y -= topBorder(elem);
        }
        return position;
    };

    function getScroll(elem) {
        return {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop
        };
    };

    function getScrolls(elem) {
        var element = elem.parentNode,
            position = {
                x: 0,
                y: 0
            };
        while (element && !isBody(element)) {
            position.x += element.scrollLeft;
            position.y += element.scrollTop;
            element = element.parentNode;
        }
        return position;
    };

    function styleString(element, style) {
        return $(element).css(style);
    };

    function styleNumber(element, style) {
        return parseInt(styleString(element, style)) || 0;
    };

    function borderBox(element) {
        return styleString(element, '-moz-box-sizing') == 'border-box';
    };

    function topBorder(element) {
        return styleNumber(element, 'border-top-width');
    };

    function leftBorder(element) {
        return styleNumber(element, 'border-left-width');
    };

    function isBody(element) {
        return (/^(?:body|html)$/i).test(element.tagName);
    };

    function checkMegaMenuSettings() {
        if (window.customMegaMenuSettings == undefined || window.customMegaMenuSettings == null) {
            return false;
        }
        var uri = window.location.pathname;
        window.customMegaMenuSettings.forEach(function (item) {
            for (var i = 0; i < item.urls.length; i++) {
                if (uri.match(item.urls[i])) {
                    megaMenuSettings[item.menuItem] = item.data;
                }
            }
        });
    }

    function fixMegaMenuWithSettings() {
        if (isResponsiveMenuVisible() && !window.thegemWasDesktop) {
            return false;
        }
        window.megaMenuWithSettingsFixed = true;
        checkMegaMenuSettings();
        $('#primary-menu > li.megamenu-enable').each(function () {
            var m = this.className.match(/(menu-item-(\d+))/);
            if (!m) {
                return;
            }
            var itemId = parseInt(m[2]);
            if (megaMenuSettings[itemId] == undefined || megaMenuSettings[itemId] == null) {
                return;
            }
            var $item = $('> ul', this);
            if (megaMenuSettings[itemId].masonry != undefined) {
                if (megaMenuSettings[itemId].masonry) {
                    $item.addClass('megamenu-masonry');
                } else {
                    $item.removeClass('megamenu-masonry');
                }
            }
            if (megaMenuSettings[itemId].style != undefined) {
                $(this).removeClass('megamenu-style-default megamenu-style-grid').addClass('megamenu-style-' + megaMenuSettings[itemId].style);
            }
            var css = {};
            if (megaMenuSettings[itemId].backgroundImage != undefined) {
                css.backgroundImage = megaMenuSettings[itemId].backgroundImage;
            }
            if (megaMenuSettings[itemId].backgroundPosition != undefined) {
                css.backgroundPosition = megaMenuSettings[itemId].backgroundPosition;
            }
            if (megaMenuSettings[itemId].padding != undefined) {
                css.padding = megaMenuSettings[itemId].padding;
            }
            if (megaMenuSettings[itemId].borderRight != undefined) {
                css.borderRight = megaMenuSettings[itemId].borderRight;
            }
            $item.css(css);
        });
    }

    function isResponsiveMenuVisible() {
        return $('.primary-navigation .menu-toggle').is(':visible');
    }
    window.isResponsiveMenuVisible = isResponsiveMenuVisible;

    function isTopAreaVisible() {
        return window.gemSettings.topAreaMobileDisable ? window.gemOptions.clientWidth >= 768 : true;
    }
    window.isTopAreaVisible = isTopAreaVisible;

    function isVerticalToggleVisible() {
        return window.gemOptions.clientWidth > 1600;
    }
    $('#primary-menu > li.megamenu-enable').hover(function () {
        fix_megamenu_position(this);
    }, function () {});
    $('#primary-menu > li.megamenu-enable:hover').each(function () {
        fix_megamenu_position(this);
    });
    $('#primary-menu > li.megamenu-enable').each(function () {
        var $item = $('> ul', this);
        if ($item.length == 0) return;
        $item.addClass('megamenu-item-inited');
    });

    function fix_megamenu_position(elem, containerWidthCallback) {
        if (!$('.megamenu-inited', elem).length && isResponsiveMenuVisible()) {
            return false;
        }
        var $item = $('> ul', elem);
        if ($item.length == 0) return;
        var self = $item.get(0);
        $item.addClass('megamenu-item-inited');
        var default_item_css = {
            width: 'auto',
            height: 'auto'
        };
        if (!isVerticalMenu && !isHamburgerMenu && !isPerspectiveMenu) {
            default_item_css.left = 0;
        }
        $item.removeClass('megamenu-masonry-inited megamenu-fullwidth').css(default_item_css);
        $(' > li', $item).css({
            left: 0,
            top: 0
        }).each(function () {
            var old_width = $(this).data('old-width') || -1;
            if (old_width != -1) {
                $(this).width(old_width).data('old-width', -1);
            }
        });
        if (isResponsiveMenuVisible()) {
            return;
        }
        if (containerWidthCallback !== undefined) {
            var container_width = containerWidthCallback();
        } else if (isVerticalMenu) {
            var container_width = window.gemOptions.clientWidth - $('#site-header-wrapper').outerWidth();
        } else if (isPerspectiveMenu) {
            var container_width = window.gemOptions.clientWidth - $('#primary-navigation').outerWidth();
        } else if (isHamburgerMenu) {
            var container_width = window.gemOptions.clientWidth - $('#primary-menu').outerWidth();
        } else {
            var $container = $item.closest('.header-main'),
                container_width = $container.width(),
                container_padding_left = parseInt($container.css('padding-left')),
                container_padding_right = parseInt($container.css('padding-right')),
                parent_width = $item.parent().outerWidth();
        }
        var megamenu_width = $item.outerWidth();
        if (megamenu_width > container_width) {
            megamenu_width = container_width;
            var new_megamenu_width = container_width - parseInt($item.css('padding-left')) - parseInt($item.css('padding-right'));
            var columns = $item.data('megamenu-columns') || 4;
            var column_width = parseFloat(new_megamenu_width - columns * parseInt($(' > li.menu-item:first', $item).css('margin-left'))) / columns;
            var column_width_int = parseInt(column_width);
            $(' > li', $item).each(function () {
                $(this).data('old-width', $(this).width()).css('width', column_width_int);
            });
            $item.addClass('megamenu-fullwidth').width(new_megamenu_width - (column_width - column_width_int) * columns);
        }
        if (!isVerticalMenu && !isHamburgerMenu && !isPerspectiveMenu && containerWidthCallback === undefined) {
            if (megamenu_width > parent_width) {
                var left = -(megamenu_width - parent_width) / 2;
            } else {
                var left = 0;
            }
            var container_offset = getOffset($container[0]);
            var megamenu_offset = getOffset(self);
            if ((megamenu_offset.x - container_offset.x - container_padding_left + left) < 0) {
                left = -(megamenu_offset.x - container_offset.x - container_padding_left);
            }
            if ((megamenu_offset.x + megamenu_width + left) > (container_offset.x + $container.outerWidth() - container_padding_right)) {
                left -= (megamenu_offset.x + megamenu_width + left) - (container_offset.x + $container.outerWidth() - container_padding_right);
            }
            $item.css('left', left).css('left');
        }
        if ($item.hasClass('megamenu-masonry')) {
            var positions = {},
                max_bottom = 0;
            $item.width($item.width() - 1);
            var new_row_height = $('.megamenu-new-row', $item).outerHeight() + parseInt($('.megamenu-new-row', $item).css('margin-bottom'));
            $('> li.menu-item', $item).each(function () {
                var pos = $(this).position();
                if (positions[pos.left] != null && positions[pos.left] != undefined) {
                    var top_position = positions[pos.left];
                } else {
                    var top_position = pos.top;
                }
                positions[pos.left] = top_position + $(this).outerHeight() + new_row_height + parseInt($(this).css('margin-bottom'));
                if (positions[pos.left] > max_bottom)
                    max_bottom = positions[pos.left];
                $(this).css({
                    left: pos.left,
                    top: top_position
                })
            });
            $item.height(max_bottom - new_row_height - parseInt($item.css('padding-top')) - 1);
            $item.addClass('megamenu-masonry-inited');
        }
        if ($item.hasClass('megamenu-empty-right')) {
            var mega_width = $item.width();
            var max_rights = {
                columns: [],
                position: -1
            };
            $('> li.menu-item', $item).removeClass('megamenu-no-right-border').each(function () {
                var pos = $(this).position();
                var column_right_position = pos.left + $(this).width();
                if (column_right_position > max_rights.position) {
                    max_rights.position = column_right_position;
                    max_rights.columns = [];
                }
                if (column_right_position == max_rights.position) {
                    max_rights.columns.push($(this));
                }
            });
            if (max_rights.columns.length && max_rights.position >= (mega_width - 7)) {
                max_rights.columns.forEach(function ($li) {
                    $li.addClass('megamenu-no-right-border');
                });
            }
        }
        if (isVerticalMenu || isHamburgerMenu || isPerspectiveMenu) {
            var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                itemOffset = $item.offset(),
                itemHeight = $item.outerHeight(),
                scrollTop = $(window).scrollTop();
            if (itemOffset.top - scrollTop + itemHeight > clientHeight) {
                $item.css({
                    top: clientHeight - itemOffset.top + scrollTop - itemHeight - 20
                });
            }
        }
        $item.addClass('megamenu-inited');
    }
    window.fix_megamenu_position = fix_megamenu_position;

    function primary_menu_reinit() {
        if (isResponsiveMenuVisible()) {
            if (window.gemMobileMenuType == 'default') {
                var $submenuDisabled = $('#primary-navigation .dl-submenu-disabled');
                if ($submenuDisabled.length) {
                    $submenuDisabled.addClass('dl-submenu').removeClass('dl-submenu-disabled');
                }
            }
            if ($('#primary-menu').hasClass('no-responsive')) {
                $('#primary-menu').removeClass('no-responsive');
            }
            if (!$('#primary-navigation').hasClass('responsive')) {
                $('#primary-navigation').addClass('responsive');
            }
            $('.menu-overlay').addClass('mobile');
            if (window.thegemDesktopMenuLogoFixed) {
                window.fixMenuLogoPosition();
            }
            if ($('body').hasClass('mobile-cart-position-top')) {
                $('.mobile-cart > .minicart-menu-link.temp').remove();
                $('#primary-navigation .menu-item-cart > *').appendTo('.mobile-cart');
            }
        } else {
            window.thegemWasDesktop = true;
            if (window.gemMobileMenuType == 'overlay' && !$('.header-layout-overlay').length && $('.menu-overlay').hasClass('active')) {
                $('.mobile-menu-layout-overlay .menu-toggle').click();
            }
            $('#primary-navigation').addClass('without-transition');
            if (window.gemMobileMenuType == 'default') {
                $('#primary-navigation .dl-submenu').addClass('dl-submenu-disabled').removeClass('dl-submenu');
            }
            $('#primary-menu').addClass('no-responsive');
            $('#primary-navigation').removeClass('responsive');
            $('.menu-overlay').removeClass('mobile');
            window.fixMenuLogoPosition();
            if (!window.megaMenuWithSettingsFixed) {
                fixMegaMenuWithSettings();
            }
            $('#primary-navigation').removeClass('without-transition');
            if ($('body').hasClass('mobile-cart-position-top')) {
                $('.mobile-cart > .minicart-menu-link.temp').remove();
                $('.mobile-cart > *').appendTo('#primary-navigation .menu-item-cart');
            }
        }
    }
    $(function () {
        function getScrollY(elem) {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
        $(document).on('click touchend', '.mobile-cart > a', function (e) {
            e.preventDefault();
            $('.mobile-cart .minicart').addClass('minicart-show');
            $('body').data('scroll-position', getScrollY())
            $('body').addClass('mobile-minicart-opened');
        });
        $(document).on('click', '.mobile-cart-header-close, .mobile-minicart-overlay', function (e) {
            e.preventDefault();
            $('.mobile-cart .minicart').removeClass('minicart-show');
            $('body').removeClass('mobile-minicart-opened');
            if ($('body').data('scroll-position')) {
                window.scrollTo(0, $('body').data('scroll-position'))
            }
        });
        if (isResponsiveMenuVisible() && typeof window.gemResponsiveCartClicked !== 'undefined' && window.gemResponsiveCartClicked) {
            console.log($('.mobile-cart-position-top .mobile-cart > a'));
            $('.mobile-cart-position-top .mobile-cart > a').trigger('click');
            window.gemResponsiveCartClicked = null;
        }
    });
    if (window.gemMobileMenuType == 'default') {
        $('#primary-navigation .submenu-languages').addClass('dl-submenu');
    }
    $('#primary-navigation ul#primary-menu > li.menu-item-language, #primary-navigation ul#primary-menu > li.menu-item-type-wpml_ls_menu_item').addClass('menu-item-parent');
    $('#primary-navigation ul#primary-menu > li.menu-item-language > a, #primary-navigation ul#primary-menu > li.menu-item-type-wpml_ls_menu_item > a').after('<span class="menu-item-parent-toggle"></span>');
    fixMegaMenuWithSettings();
    if (window.gemMobileMenuType == 'default') {
        var updateMobileMenuPosition = function () {
            var siteHeaderHeight = $('#site-header').outerHeight(),
                windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            if ($('#thegem-perspective #primary-menu').length) {
                $('#thegem-perspective > .mobile-menu-layout-default').css({
                    top: siteHeaderHeight
                });
            }
            $('#primary-menu').css({
                maxHeight: windowHeight - siteHeaderHeight
            });
        };
        $(window).resize(function () {
            if (isResponsiveMenuVisible() && $('#primary-menu').hasClass('dl-menuopen')) {
                setTimeout(updateMobileMenuPosition, 50);
            } else {
                $('#primary-menu').css({
                    maxHeight: ''
                });
            }
        });
        $('#site-header .dl-trigger').on('click', function () {
            updateMobileMenuPosition();
        });
        if (typeof $.fn.dlmenu === 'function') {
            $('#primary-navigation').dlmenu({
                animationClasses: {
                    classin: 'dl-animate-in',
                    classout: 'dl-animate-out'
                },
                onLevelClick: function (el, name) {},
                backLabel: thegem_dlmenu_settings.backLabel,
                showCurrentLabel: thegem_dlmenu_settings.showCurrentLabel
            });
        }
    }
    primary_menu_reinit();
    $('#primary-menu > li').hover(function () {
        var $items = $('ul:not(.minicart ul), .minicart, .minisearch', this);
        $items.removeClass('invert vertical-invert');
        if (!$(this).hasClass('megamenu-enable')) {
            $items.css({
                top: ''
            });
        }
        if ($(this).hasClass('megamenu-enable') || $(this).closest('.header-layout-overlay').length || $(this).closest('.mobile-menu-layout-overlay').length && isResponsiveMenuVisible()) {
            return;
        }
        var topItemTranslate = 0;
        if ($('>ul', this).css('transform')) {
            topItemTranslate = parseInt($('>ul', this).css('transform').split(',')[5]);
        }
        if (isNaN(topItemTranslate)) {
            topItemTranslate = 0;
        }
        var windowScroll = $(window).scrollTop(),
            siteHeaderOffset = $('#site-header').offset(),
            siteHeaderOffsetTop = siteHeaderOffset.top - windowScroll,
            siteHeaderHeight = $('#site-header').outerHeight(),
            pageOffset = $('#page').offset(),
            pageWidth = $('#page').width();
        $items.each(function () {
            var $item = $(this),
                self = this,
                $parentList = $item.parent().closest('ul');
            var itemOffset = $item.offset(),
                itemOffsetTop = itemOffset.top - windowScroll,
                itemOffsetLeft = itemOffset.left;
            var leftItemTranslate = 0;
            if ($item.css('transform')) {
                leftItemTranslate = parseInt(getComputedStyle(this).transform.split(',')[4]);
                var levelUL = getLevelULByPrimaryMenu(self);
                if (levelUL > 0) {
                    leftItemTranslate = leftItemTranslate * levelUL;
                }
            }
            if (isNaN(leftItemTranslate)) {
                leftItemTranslate = 0;
            }
            if ($parentList.hasClass('invert')) {
                if ($parentList.offset().left - $item.outerWidth() > pageOffset.left) {
                    $item.addClass('invert');
                }
            } else {
                if (itemOffsetLeft - leftItemTranslate - pageOffset.left + $item.outerWidth() > pageWidth) {
                    $item.addClass('invert');
                }
            }
            if (isVerticalMenu || isPerspectiveMenu || isHamburgerMenu) {
                if (itemOffsetTop - topItemTranslate + $item.outerHeight() > $(window).height()) {
                    $item.addClass('vertical-invert');
                    var itemOffsetFix = itemOffsetTop - topItemTranslate + $item.outerHeight() - $(window).height();
                    if (itemOffsetTop - topItemTranslate - itemOffsetFix < 0) {
                        itemOffsetFix = 0;
                    }
                    $item.css({
                        top: -itemOffsetFix + 'px'
                    });
                }
            } else {
                if (itemOffsetTop - topItemTranslate + $item.outerHeight() > $(window).height()) {
                    $item.addClass('vertical-invert');
                    var itemOffsetFix = itemOffsetTop - topItemTranslate + $item.outerHeight() - $(window).height();
                    if (itemOffsetTop - topItemTranslate - itemOffsetFix < siteHeaderOffsetTop + siteHeaderHeight) {
                        itemOffsetFix -= siteHeaderOffsetTop + siteHeaderHeight - (itemOffsetTop - topItemTranslate - itemOffsetFix);
                        if (itemOffsetFix < 0) {
                            itemOffsetFix = 0;
                        }
                    }
                    if (itemOffsetFix > 0) {
                        $item.css({
                            top: -itemOffsetFix + 'px'
                        });
                    }
                }
            }
        });
    }, function () {});

    function getLevelULByPrimaryMenu(item) {
        var parentUL = $(item).parent('li').parent('ul');
        var level = 0;
        while (!parentUL.is('#primary-menu')) {
            parentUL = parentUL.parent('li').parent('ul');
            level++;
        }
        return level;
    }
    $('.hamburger-toggle').click(function (e) {
        e.preventDefault();
        $(this).closest('#primary-navigation').toggleClass('hamburger-active');
        $('.hamburger-overlay').toggleClass('active');
    });
    $('.overlay-toggle, .mobile-menu-layout-overlay .menu-toggle').click(function (e) {
        var $element = this;
        e.preventDefault();
        if ($('.menu-overlay').hasClass('active')) {
            $('.menu-overlay').removeClass('active');
            $('.primary-navigation').addClass('close');
            $('.primary-navigation').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) {
                $('.primary-navigation').removeClass('overlay-active close');
                $('.overlay-menu-wrapper').removeClass('active');
            });
            $(document).off('keydown.overlay-close');
            $('#primary-menu').off('click.overlay-close');
        } else {
            $('.overlay-menu-wrapper').addClass('active');
            $('.primary-navigation').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
            $('.primary-navigation').addClass('overlay-active').removeClass('close');
            if (isResponsiveMenuVisible()) {
                $('#site-header').removeClass('hidden');
                $('.menu-overlay').addClass('mobile');
            } else {
                $('.menu-overlay').removeClass('mobile');
            }
            $('.menu-overlay').addClass('active');
            $(document).on('keydown.overlay-close', function (event) {
                if (event.keyCode == 27) {
                    $element.click();
                }
            });
            $('#primary-menu').on('click.overlay-close', 'li:not(.menu-item-search)', function () {
                $element.click();
            });
        }
    });
    $('.mobile-menu-layout-slide-horizontal .primary-navigation #primary-menu li.menu-item-current, .mobile-menu-layout-slide-vertical .primary-navigation #primary-menu li.menu-item-current').each(function () {
        if (!isResponsiveMenuVisible()) {
            return;
        }
        $(this).addClass('opened');
        $('> ul', this).show();
    });

    function getScrollY(elem) {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    $('.mobile-menu-layout-slide-horizontal .menu-toggle, .mobile-menu-layout-slide-vertical .menu-toggle, .mobile-menu-slide-wrapper .mobile-menu-slide-close').click(function (e) {
        if (!isResponsiveMenuVisible()) {
            return;
        }
        e.preventDefault();
        $('#site-header').removeClass('hidden');
        $('.mobile-menu-slide-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) {
            $(this).removeClass('animation');
        });
        $('.mobile-menu-slide-wrapper').addClass('animation').toggleClass('opened');
        $('#site-header').toggleClass('menu-slide-opened');
        if ($('.mobile-menu-slide-wrapper').hasClass('opened')) {
            $('body').data('scroll-position', getScrollY())
            $('body').addClass('menu-scroll-locked');
        } else {
            $('body').removeClass('menu-scroll-locked');
            if ($('body').data('scroll-position')) {
                window.scrollTo(0, $('body').data('scroll-position'))
            }
        }
        setTimeout(function () {
            $(document).on('click.mobile-menu-out-click', function (e) {
                if ($('.mobile-menu-slide-wrapper').hasClass('opened')) {
                    if (!$(e.target).is('#site-header *') && !$(e.target).is('#thegem-perspective *')) {
                        e.preventDefault();
                        $('.mobile-menu-slide-wrapper .mobile-menu-slide-close').trigger('click');
                        $(document).off('click.mobile-menu-out-click');
                    }
                }
            });
        }, 500);
    });
    if (isResponsiveMenuVisible() && typeof window.gemResponsiveMenuClicked !== 'undefined' && window.gemResponsiveMenuClicked) {
        $('.primary-navigation .menu-toggle').trigger('click');
        window.gemResponsiveMenuClicked = null;
    }
    $('.mobile-menu-layout-slide-horizontal .primary-navigation #primary-menu .menu-item-parent-toggle, .mobile-menu-layout-slide-vertical .primary-navigation #primary-menu .menu-item-parent-toggle').on('click', function (e) {
        if (!isResponsiveMenuVisible()) {
            return;
        }
        e.preventDefault();
        var self = this;
        $(this).closest('li').toggleClass('opened');
        $(this).siblings('ul').slideToggle(200, function () {
            if (!$(self).closest('li').hasClass('opened')) {
                $(self).siblings('ul').find('li').removeClass('opened');
                $(self).siblings('ul').css('display', '');
                $(self).siblings('ul').find('ul').css('display', '');
            }
        });
    });
    $('.header-layout-overlay #primary-menu .menu-item-parent-toggle, .mobile-menu-layout-overlay .primary-navigation #primary-menu .menu-item-parent-toggle').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$('#primary-menu').hasClass('no-responsive') && !$(this).hasClass('menu-item-parent-toggle')) {
            return;
        }
        var $itemLink = $(this);
        var $item = $itemLink.closest('li');
        if ($item.hasClass('menu-item-parent') && ($item.closest('ul').hasClass('nav-menu') || $item.parent().closest('li').hasClass('menu-overlay-item-open'))) {
            e.preventDefault();
            if ($item.hasClass('menu-overlay-item-open')) {
                $(' > ul, .menu-overlay-item-open > ul', $item).each(function () {
                    $(this).css({
                        height: $(this).outerHeight() + 'px'
                    });
                });
                setTimeout(function () {
                    $(' > ul, .menu-overlay-item-open > ul', $item).css({
                        height: ''
                    });
                    $('.menu-overlay-item-open', $item).add($item).removeClass('menu-overlay-item-open');
                }, 50);
            } else {
                var $oldActive = $('.primary-navigation .menu-overlay-item-open').not($item.parents());
                $('> ul', $oldActive).not($item.parents()).each(function () {
                    $(this).css({
                        height: $(this).outerHeight() + 'px'
                    });
                });
                setTimeout(function () {
                    $('> ul', $oldActive).not($item.parents()).css({
                        height: ''
                    });
                    $oldActive.removeClass('menu-overlay-item-open');
                }, 50);
                $('> ul', $item).css({
                    height: 'auto'
                });
                var itemHeight = $('> ul', $item).outerHeight();
                $('> ul', $item).css({
                    height: ''
                });
                setTimeout(function () {
                    $('> ul', $item).css({
                        height: itemHeight + 'px'
                    });
                    $item.addClass('menu-overlay-item-open');
                    $('> ul', $item).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                        $('> ul', $item).css({
                            height: 'auto'
                        });
                    });
                }, 50);
            }
        }
    });
    $('.vertical-toggle').click(function (e) {
        e.preventDefault();
        $(this).closest('#site-header-wrapper').toggleClass('vertical-active');
    });
    $(function () {
        $(window).resize(function () {
            if (window.menuResizeTimeoutHandler) {
                clearTimeout(window.menuResizeTimeoutHandler);
            }
            window.menuResizeTimeoutHandler = setTimeout(primary_menu_reinit, 50);
        });
    });
    $('#primary-navigation').on('click', 'a', function (e) {
        var $item = $(this);
        if ($('#primary-menu').hasClass('no-responsive') && window.gemSettings.isTouch && $item.next('ul').length) {
            e.preventDefault();
        }
    });
    $(document).on('click', function (e) {
        if ($('.hamburger-overlay').hasClass('active') && !$(e.target).closest("#primary-menu").length && !$(e.target).closest(".hamburger-toggle").length) {
            $('.hamburger-toggle').trigger('click');
        }
        if ($("#site-header-wrapper").hasClass('vertical-active')) {
            if (!$("#site-header-wrapper").is(e.target) && $("#site-header-wrapper").has(e.target).length === 0) {
                $('.vertical-toggle').trigger('click');
            }
        }
    });
})(jQuery);
(function ($) {
    var transitionEndEvent = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        } [window.supportedTransition],
        clickEventName = 'click';

    function initPerspective() {
        var $menuToggleButton = $('.perspective-toggle'),
            $perspective = $('#thegem-perspective'),
            $page = $('#page');
        if (!$perspective.length) {
            return false;
        }
        $menuToggleButton.on(clickEventName, function (event) {
            if ($perspective.hasClass('animate')) {
                return;
            }
            var documentScrollTop = $(window).scrollTop();
            $(window).scrollTop(0);
            var pageWidth = $page.outerWidth(),
                perspectiveWidth = $perspective.outerWidth(),
                pageCss = {
                    width: pageWidth
                };
            if (pageWidth < perspectiveWidth) {
                pageCss.marginLeft = $page[0].offsetLeft;
            }
            $page.css(pageCss);
            $perspective.addClass('modalview animate');
            $page.scrollTop(documentScrollTop);
            event.preventDefault();
            event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        });
        $('#primary-navigation').on(clickEventName, function (event) {
            if (isResponsiveMenuVisible()) {
                return;
            }
            event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        });
        $('#thegem-perspective .perspective-menu-close').on(clickEventName, function (event) {
            $perspective.click();
            event.preventDefault();
            event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        });
        $perspective.on(clickEventName, function (event) {
            if (!$perspective.hasClass('animate')) {
                return;
            }
            var onEndTransitionCallback = function (event) {
                if (window.supportsTransitions && (event.originalEvent.target.id !== 'page' || event.originalEvent.propertyName.indexOf('transform') == -1)) {
                    return;
                }
                $(this).off(transitionEndEvent, onEndTransitionCallback);
                var pageScrollTop = $page.scrollTop();
                $perspective.removeClass('modalview');
                $page.css({
                    width: '',
                    marginLeft: ''
                });
                $(window).scrollTop(pageScrollTop);
                $page.scrollTop(0);
                $(window).resize();
            };
            if (window.supportsTransitions) {
                $perspective.on(transitionEndEvent, onEndTransitionCallback);
            } else {
                onEndTransitionCallback.call();
            }
            $perspective.removeClass('animate');
        });
    }
    initPerspective();
})(jQuery);
(function ($) {
    $.fn.checkbox = function () {
        $(this).each(function () {
            var $el = $(this);
            var typeClass = $el.attr('type');
            $el.hide();
            $el.next('.' + typeClass + '-sign').remove();
            var $checkbox = $('<span class="' + typeClass + '-sign" />').insertAfter($el);
            $checkbox.click(function () {
                if ($checkbox.closest('label').length) return;
                if ($el.attr('type') == 'radio') {
                    $el.prop('checked', true).trigger('change').trigger('click');
                } else {
                    $el.prop('checked', !($el.is(':checked'))).trigger('change');
                }
            });
            $el.change(function () {
                $('input[name="' + $el.attr('name') + '"]').each(function () {
                    if ($(this).is(':checked')) {
                        $(this).next('.' + $(this).attr('type') + '-sign').addClass('checked');
                    } else {
                        $(this).next('.' + $(this).attr('type') + '-sign').removeClass('checked');
                    }
                });
            });
            if ($el.is(':checked')) {
                $checkbox.addClass('checked');
            } else {
                $checkbox.removeClass('checked');
            }
        });
    }
    $.fn.combobox = function () {
        $(this).each(function () {
            var $el = $(this);
            $el.insertBefore($el.parent('.combobox-wrapper'));
            $el.next('.combobox-wrapper').remove();
            $el.css({
                'opacity': 0,
                'position': 'absolute',
                'left': 0,
                'right': 0,
                'top': 0,
                'bottom': 0
            });
            var $comboWrap = $('<span class="combobox-wrapper" />').insertAfter($el);
            var $text = $('<span class="combobox-text" />').appendTo($comboWrap);
            var $button = $('<span class="combobox-button" />').appendTo($comboWrap);
            $el.appendTo($comboWrap);
            $el.change(function () {
                $text.text($('option:selected', $el).text());
            });
            $text.text($('option:selected', $el).text());
            $el.comboWrap = $comboWrap;
        });
    }
})(jQuery);
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], function ($) {
            return factory($)
        })
    } else if (typeof module === "object" && typeof module.exports === "object") {
        exports = factory(require("jquery"))
    } else {
        factory(jQuery)
    }
})(function ($) {
    $.easing.jswing = $.easing.swing;
    var pow = Math.pow,
        sqrt = Math.sqrt,
        sin = Math.sin,
        cos = Math.cos,
        PI = Math.PI,
        c1 = 1.70158,
        c2 = c1 * 1.525,
        c3 = c1 + 1,
        c4 = 2 * PI / 3,
        c5 = 2 * PI / 4.5;

    function bounceOut(x) {
        var n1 = 7.5625,
            d1 = 2.75;
        if (x < 1 / d1) {
            return n1 * x * x
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + .75
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + .9375
        } else {
            return n1 * (x -= 2.625 / d1) * x + .984375
        }
    }
    $.extend($.easing, {
        def: "easeOutQuad",
        swing: function (x) {
            return $.easing[$.easing.def](x)
        },
        easeInQuad: function (x) {
            return x * x
        },
        easeOutQuad: function (x) {
            return 1 - (1 - x) * (1 - x)
        },
        easeInOutQuad: function (x) {
            return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2
        },
        easeInCubic: function (x) {
            return x * x * x
        },
        easeOutCubic: function (x) {
            return 1 - pow(1 - x, 3)
        },
        easeInOutCubic: function (x) {
            return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2
        },
        easeInQuart: function (x) {
            return x * x * x * x
        },
        easeOutQuart: function (x) {
            return 1 - pow(1 - x, 4)
        },
        easeInOutQuart: function (x) {
            return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2
        },
        easeInQuint: function (x) {
            return x * x * x * x * x
        },
        easeOutQuint: function (x) {
            return 1 - pow(1 - x, 5)
        },
        easeInOutQuint: function (x) {
            return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2
        },
        easeInSine: function (x) {
            return 1 - cos(x * PI / 2)
        },
        easeOutSine: function (x) {
            return sin(x * PI / 2)
        },
        easeInOutSine: function (x) {
            return -(cos(PI * x) - 1) / 2
        },
        easeInExpo: function (x) {
            return x === 0 ? 0 : pow(2, 10 * x - 10)
        },
        easeOutExpo: function (x) {
            return x === 1 ? 1 : 1 - pow(2, -10 * x)
        },
        easeInOutExpo: function (x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2
        },
        easeInCirc: function (x) {
            return 1 - sqrt(1 - pow(x, 2))
        },
        easeOutCirc: function (x) {
            return sqrt(1 - pow(x - 1, 2))
        },
        easeInOutCirc: function (x) {
            return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2
        },
        easeInElastic: function (x) {
            return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4)
        },
        easeOutElastic: function (x) {
            return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1
        },
        easeInOutElastic: function (x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1
        },
        easeInBack: function (x) {
            return c3 * x * x * x - c1 * x * x
        },
        easeOutBack: function (x) {
            return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2)
        },
        easeInOutBack: function (x) {
            return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
        },
        easeInBounce: function (x) {
            return 1 - bounceOut(1 - x)
        },
        easeOutBounce: bounceOut,
        easeInOutBounce: function (x) {
            return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
        }
    })
});
(function ($) {
    function HeaderAnimation(el, options) {
        this.el = el;
        this.$el = $(el);
        this.options = {
            startTop: 1
        };
        $.extend(this.options, options);
        this.initialize();
    }
    HeaderAnimation.prototype = {
        initialize: function () {
            var self = this;
            this.$page = $('#page').length ? $('#page') : $('body');
            this.$wrapper = $('#site-header-wrapper');
            this.$topArea = $('#top-area');
            this.topAreaInSiteHeader = $('#site-header #top-area').length > 0;
            this.$headerMain = $('.header-main', this.$el);
            this.hasAdminBar = document.body.className.indexOf('admin-bar') != -1;
            this.adminBarOffset = 0;
            this.adminBarHeight = 0;
            this.topOffset = 0;
            this.oldScrollY = 0;
            this.isResponsive = null;
            this.isResponsiveOld = null;
            this.elHeight = this.$el.outerHeight();
            this.elHeightOld = this.$el.outerHeight();
            this.hideWrapper = this.$wrapper.hasClass('site-header-wrapper-transparent');
            this.videoBackground = $('.page-title-block .gem-video-background').length && $('.page-title-block .gem-video-background').data('headerup');
            if (this.$el.hasClass('header-on-slideshow') && $('#main-content > *').first().is('.gem-slideshow, .block-slideshow')) {
                this.$wrapper.css({
                    position: 'absolute'
                });
            }
            if (this.$el.hasClass('header-on-slideshow') && $('#main-content > *').first().is('.gem-slideshow, .block-slideshow')) {
                this.$wrapper.addClass('header-on-slideshow');
            } else {
                this.$el.removeClass('header-on-slideshow');
            }
            if (this.videoBackground) {
                this.$el.addClass('header-on-slideshow');
                this.$wrapper.addClass('header-on-slideshow');
            }
            this.initHeader();
            $(document).ready(function () {
                self.updateAdminBarInfo();
                self.updateStartTop();
            });
            $(window).scroll(function () {
                self.scrollHandler();
            });
            if ($('#thegem-perspective').length) {
                this.$page.scroll(function () {
                    self.scrollHandler();
                });
            }
            $(window).resize(function () {
                setTimeout(function () {
                    self.initHeader();
                    self.scrollHandler();
                }, 0);
            });
            if (document.readyState === 'complete') {
                self.$el.addClass('ios-load');
            } else {
                window.onload = function () {
                    self.$el.addClass('ios-load');
                };
            }
        },
        initHeader: function () {
            this.isResponsiveOld = this.isResponsive;
            this.isResponsive = window.isResponsiveMenuVisible();
            this.elHeightOld = this.elHeight;
            this.elHeight = this.$el.outerHeight();
            if (this.isResponsive) {
                this.$el.addClass('shrink-mobile');
            } else {
                this.$el.removeClass('shrink-mobile');
            }
            this.updateAdminBarInfo();
            this.updateStartTop();
            if (this.isResponsive != this.isResponsiveOld || this.elHeight != this.elHeightOld) {
                this.initializeStyles();
            }
        },
        updateAdminBarInfo: function () {
            if (this.hasAdminBar) {
                this.adminBarHeight = $('#wpadminbar').outerHeight();
                this.adminBarOffset = this.hasAdminBar && $('#wpadminbar').css('position') == 'fixed' ? parseInt(this.adminBarHeight) : 0;
            }
        },
        updateStartTop: function () {
            if (this.$topArea.length && this.$topArea.is(':visible') && !this.topAreaInSiteHeader) {
                this.options.startTop = this.$topArea.outerHeight();
            } else {
                this.options.startTop = 1;
            }
            if (this.hasAdminBar && this.adminBarOffset == 0) {
                this.options.startTop += this.adminBarHeight;
            }
        },
        setMargin: function ($img) {
            var $small = $img.siblings('img.small'),
                w = 0;
            if (this.$headerMain.hasClass('logo-position-right')) {
                w = $small.width();
            } else if (this.$headerMain.hasClass('logo-position-center') || this.$headerMain.hasClass('logo-position-menu_center')) {
                w = $img.width();
                var smallWidth = $small.width(),
                    offset = (w - smallWidth) / 2;
                w = smallWidth + offset;
                $small.css('margin-right', offset + 'px');
            }
            if (!w) {
                w = $img.width();
            }
            $small.css('margin-left', '-' + w + 'px');
            $img.parent().css('min-width', w + 'px');
            $small.show();
        },
        initializeStyles: function () {
            var self = this;
            if (this.$headerMain.hasClass('logo-position-menu_center')) {
                var $img = $('#primary-navigation .menu-item-logo a .logo img.default', this.$el);
            } else {
                var $img = $('.site-title .site-logo a .logo img', this.$el);
            }
            if ($img.length && $img[0].complete) {
                self.setMargin($img);
                self.initializeHeight();
                setTimeout(function () {
                    self.initializeHeight();
                }, 50);
            } else {
                $img.on('load error', function () {
                    self.setMargin($img);
                    self.initializeHeight();
                    setTimeout(function () {
                        self.initializeHeight();
                    }, 50);
                });
            }
        },
        initializeHeight: function () {
            if (this.hideWrapper) {
                return false;
            }
            var shrink = this.$el.hasClass('shrink');
            if (shrink) {
                this.$el.removeClass('shrink').addClass('without-transition');
            }
            var elHeight = this.$el.outerHeight();
            if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                this.$wrapper.css('min-height', elHeight);
            } else {
                this.$wrapper.height(elHeight);
            }
            if (shrink) {
                this.$el.addClass('shrink').removeClass('without-transition');
            }
        },
        scrollHandler: function () {
            if (window.gemSettings.fullpageEnabled || $('body').hasClass('vc_editor')) {
                return;
            }
            var self = this,
                scrollY = this.getScrollY();
            if (scrollY >= this.options.startTop) {
                if (this.$wrapper.hasClass('sticky-header-on-mobile-disabled') && scrollY < $('#site-header-wrapper').height()) {
                    return;
                }
                if (!this.$el.hasClass('shrink')) {
                    var shrinkClass = 'shrink fixed';
                    if (window.gemSettings.fillTopArea) {
                        shrinkClass += ' fill';
                    }
                    if (this.$wrapper.hasClass('sticky-header-on-mobile-disabled')) {
                        shrinkClass += ' hide-immediately';
                    }
                    this.$el.addClass(shrinkClass);
                }
                var top = 0;
                if (this.$page[0].scrollTop > 0) {
                    top += this.$page[0].scrollTop;
                } else {
                    if (this.hasAdminBar) {
                        top += this.adminBarOffset;
                    }
                }
                this.$el.css({
                    top: top != 0 ? top : ''
                });
            } else {
                if (this.$el.hasClass('shrink')) {
                    this.$el.removeClass('shrink fixed');
                }
                if (this.hasAdminBar) {
                    this.$el.css({
                        top: ''
                    });
                }
            }
            if (this.isResponsive && !this.$wrapper.hasClass('sticky-header-on-mobile')) {
                if (!$('.mobile-menu-slide-wrapper.opened').length && !$('#primary-menu.dl-menuopen').length && !$('.menu-overlay.active').length) {
                    var hideScroll = 300;
                    if (this.$wrapper.hasClass('sticky-header-on-mobile-disabled')) {
                        hideScroll = 0;
                    }
                    if (scrollY - this.oldScrollY > 0 && scrollY > hideScroll && !this.$el.hasClass('hidden')) {
                        self.$el.addClass('hidden');
                    }
                    if (scrollY - this.oldScrollY < 0 && this.$el.hasClass('hidden')) {
                        self.$el.removeClass('hide-immediately');
                        self.$el.removeClass('hidden');
                    }
                } else {
                    self.$el.removeClass('hidden');
                }
            }
            this.oldScrollY = scrollY;
        },
        getScrollY: function () {
            return window.pageYOffset || document.documentElement.scrollTop + this.$page[0].scrollTop;
        },
    };
    $.fn.headerAnimation = function (options) {
        options = options || {};
        return new HeaderAnimation(this.get(0), options);
    };
})(jQuery);
(function () {
    var defaultOptions = {
        frameRate: 150,
        animationTime: 400,
        stepSize: 100,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: true,
        arrowScroll: 50,
        fixedBackground: true,
        excluded: ''
    };
    var options = defaultOptions;
    var isExcluded = false;
    var isFrame = false;
    var direction = {
        x: 0,
        y: 0
    };
    var initDone = false;
    var root = document.documentElement;
    var activeElement;
    var observer;
    var refreshSize;
    var deltaBuffer = [];
    var deltaBufferTimer;
    var isMac = /^Mac/.test(navigator.platform);
    var key = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    };
    var arrowKeys = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };

    function initTest() {
        if (options.keyboardSupport) {
            addEvent('keydown', keydown);
        }
    }

    function init() {
        if (initDone || !document.body) return;
        initDone = true;
        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;
        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
        activeElement = body;
        initTest();
        if (top != self) {
            isFrame = true;
        } else if (isOldSafari && scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {
            var fullPageElem = document.createElement('div');
            fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' + 'top:0; left:0; right:0; height:' +
                root.scrollHeight + 'px';
            document.body.appendChild(fullPageElem);
            var pendingRefresh;
            refreshSize = function () {
                if (pendingRefresh) return;
                pendingRefresh = setTimeout(function () {
                    if (isExcluded) return;
                    fullPageElem.style.height = '0';
                    fullPageElem.style.height = root.scrollHeight + 'px';
                    pendingRefresh = null;
                }, 500);
            };
            setTimeout(refreshSize, 10);
            addEvent('resize', refreshSize);
            var config = {
                attributes: true,
                childList: true,
                characterData: false
            };
            observer = new MutationObserver(refreshSize);
            observer.observe(body, config);
            if (root.offsetHeight <= windowHeight) {
                var clearfix = document.createElement('div');
                clearfix.style.clear = 'both';
                body.appendChild(clearfix);
            }
        }
        if (!options.fixedBackground && !isExcluded) {
            body.style.backgroundAttachment = 'scroll';
            html.style.backgroundAttachment = 'scroll';
        }
    }

    function cleanup() {
        observer && observer.disconnect();
        removeEvent(wheelEvent, wheel);
        removeEvent('mousedown', mousedown);
        removeEvent('keydown', keydown);
        removeEvent('resize', refreshSize);
        removeEvent('load', init);
    }
    var que = [];
    var pending = false;
    var lastScroll = Date.now();

    function scrollArray(elem, left, top) {
        directionCheck(left, top);
        if (options.accelerationMax != 1) {
            var now = Date.now();
            var elapsed = now - lastScroll;
            if (elapsed < options.accelerationDelta) {
                var factor = (1 + (50 / elapsed)) / 2;
                if (factor > 1) {
                    factor = Math.min(factor, options.accelerationMax);
                    left *= factor;
                    top *= factor;
                }
            }
            lastScroll = Date.now();
        }
        que.push({
            x: left,
            y: top,
            lastX: (left < 0) ? 0.99 : -0.99,
            lastY: (top < 0) ? 0.99 : -0.99,
            start: Date.now()
        });
        if (pending) {
            return;
        }
        var scrollRoot = getScrollRoot();
        var isWindowScroll = (elem === scrollRoot || elem === document.body);
        if (elem.$scrollBehavior == null && isScrollBehaviorSmooth(elem)) {
            elem.$scrollBehavior = elem.style.scrollBehavior;
            elem.style.scrollBehavior = 'auto';
        }
        var step = function (time) {
            var now = Date.now();
            var scrollX = 0;
            var scrollY = 0;
            for (var i = 0; i < que.length; i++) {
                var item = que[i];
                var elapsed = now - item.start;
                var finished = (elapsed >= options.animationTime);
                var position = (finished) ? 1 : elapsed / options.animationTime;
                if (options.pulseAlgorithm) {
                    position = pulse(position);
                }
                var x = (item.x * position - item.lastX) >> 0;
                var y = (item.y * position - item.lastY) >> 0;
                scrollX += x;
                scrollY += y;
                item.lastX += x;
                item.lastY += y;
                if (finished) {
                    que.splice(i, 1);
                    i--;
                }
            }
            if (isWindowScroll) {
                window.scrollBy(scrollX, scrollY);
            } else {
                if (scrollX) elem.scrollLeft += scrollX;
                if (scrollY) elem.scrollTop += scrollY;
            }
            if (!left && !top) {
                que = [];
            }
            if (que.length) {
                requestFrame(step, elem, (1000 / options.frameRate + 1));
            } else {
                pending = false;
                if (elem.$scrollBehavior != null) {
                    elem.style.scrollBehavior = elem.$scrollBehavior;
                    elem.$scrollBehavior = null;
                }
            }
        };
        requestFrame(step, elem, 0);
        pending = true;
    }

    function wheel(event) {
        if (!initDone) {
            init();
        }
        var target = event.target;
        if (event.defaultPrevented || event.ctrlKey) {
            return true;
        }
        if (isNodeName(activeElement, 'embed') || (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) || isNodeName(activeElement, 'object') || target.shadowRoot) {
            return true;
        }
        var deltaX = -event.wheelDeltaX || event.deltaX || 0;
        var deltaY = -event.wheelDeltaY || event.deltaY || 0;
        if (isMac) {
            if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
                deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
            }
            if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
                deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
            }
        }
        if (!deltaX && !deltaY) {
            deltaY = -event.wheelDelta || 0;
        }
        if (event.deltaMode === 1) {
            deltaX *= 40;
            deltaY *= 40;
        }
        var overflowing = overflowingAncestor(target);
        if (!overflowing) {
            if (isFrame && isChrome) {
                Object.defineProperty(event, "target", {
                    value: window.frameElement
                });
                return parent.wheel(event);
            }
            return true;
        }
        if (isTouchpad(deltaY)) {
            return true;
        }
        if (Math.abs(deltaX) > 1.2) {
            deltaX *= options.stepSize / 120;
        }
        if (Math.abs(deltaY) > 1.2) {
            deltaY *= options.stepSize / 120;
        }
        scrollArray(overflowing, deltaX, deltaY);
        event.preventDefault();
        scheduleClearCache();
    }

    function keydown(event) {
        var target = event.target;
        var modifier = event.ctrlKey || event.altKey || event.metaKey || (event.shiftKey && event.keyCode !== key.spacebar);
        if (!document.body.contains(activeElement)) {
            activeElement = document.activeElement;
        }
        var inputNodeNames = /^(textarea|select|embed|object)$/i;
        var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (event.defaultPrevented || inputNodeNames.test(target.nodeName) || isNodeName(target, 'input') && !buttonTypes.test(target.type) || isNodeName(activeElement, 'video') || isInsideYoutubeVideo(event) || target.isContentEditable || modifier) {
            return true;
        }
        if ((isNodeName(target, 'button') || isNodeName(target, 'input') && buttonTypes.test(target.type)) && event.keyCode === key.spacebar) {
            return true;
        }
        if (isNodeName(target, 'input') && target.type == 'radio' && arrowKeys[event.keyCode]) {
            return true;
        }
        var shift, x = 0,
            y = 0;
        var overflowing = overflowingAncestor(activeElement);
        if (!overflowing) {
            return (isFrame && isChrome) ? parent.keydown(event) : true;
        }
        var clientHeight = overflowing.clientHeight;
        if (overflowing == document.body) {
            clientHeight = window.innerHeight;
        }
        switch (event.keyCode) {
            case key.up:
                y = -options.arrowScroll;
                break;
            case key.down:
                y = options.arrowScroll;
                break;
            case key.spacebar:
                shift = event.shiftKey ? 1 : -1;
                y = -shift * clientHeight * 0.9;
                break;
            case key.pageup:
                y = -clientHeight * 0.9;
                break;
            case key.pagedown:
                y = clientHeight * 0.9;
                break;
            case key.home:
                if (overflowing == document.body && document.scrollingElement)
                    overflowing = document.scrollingElement;
                y = -overflowing.scrollTop;
                break;
            case key.end:
                var scroll = overflowing.scrollHeight - overflowing.scrollTop;
                var scrollRemaining = scroll - clientHeight;
                y = (scrollRemaining > 0) ? scrollRemaining + 10 : 0;
                break;
            case key.left:
                x = -options.arrowScroll;
                break;
            case key.right:
                x = options.arrowScroll;
                break;
            default:
                return true;
        }
        scrollArray(overflowing, x, y);
        event.preventDefault();
        scheduleClearCache();
    }

    function mousedown(event) {
        activeElement = event.target;
    }
    var uniqueID = (function () {
        var i = 0;
        return function (el) {
            return el.uniqueID || (el.uniqueID = i++);
        };
    })();
    var cacheX = {};
    var cacheY = {};
    var clearCacheTimer;
    var smoothBehaviorForElement = {};

    function scheduleClearCache() {
        clearTimeout(clearCacheTimer);
        clearCacheTimer = setInterval(function () {
            cacheX = cacheY = smoothBehaviorForElement = {};
        }, 1 * 1000);
    }

    function setCache(elems, overflowing, x) {
        var cache = x ? cacheX : cacheY;
        for (var i = elems.length; i--;)
            cache[uniqueID(elems[i])] = overflowing;
        return overflowing;
    }

    function getCache(el, x) {
        return (x ? cacheX : cacheY)[uniqueID(el)];
    }

    function overflowingAncestor(el) {
        var elems = [];
        var body = document.body;
        var rootScrollHeight = root.scrollHeight;
        do {
            var cached = getCache(el, false);
            if (cached) {
                return setCache(elems, cached);
            }
            elems.push(el);
            if (rootScrollHeight === el.scrollHeight) {
                var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
                var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
                if (isFrame && isContentOverflowing(root) || !isFrame && isOverflowCSS) {
                    return setCache(elems, getScrollRoot());
                }
            } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
                return setCache(elems, el);
            }
        } while ((el = el.parentElement));
    }

    function isContentOverflowing(el) {
        return (el.clientHeight + 10 < el.scrollHeight);
    }

    function overflowNotHidden(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow !== 'hidden');
    }

    function overflowAutoOrScroll(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow === 'scroll' || overflow === 'auto');
    }

    function isScrollBehaviorSmooth(el) {
        var id = uniqueID(el);
        if (smoothBehaviorForElement[id] == null) {
            var scrollBehavior = getComputedStyle(el, '')['scroll-behavior'];
            smoothBehaviorForElement[id] = ('smooth' == scrollBehavior);
        }
        return smoothBehaviorForElement[id];
    }

    function addEvent(type, fn, arg) {
        window.addEventListener(type, fn, arg || false);
    }

    function removeEvent(type, fn, arg) {
        window.removeEventListener(type, fn, arg || false);
    }

    function isNodeName(el, tag) {
        return el && (el.nodeName || '').toLowerCase() === tag.toLowerCase();
    }

    function directionCheck(x, y) {
        x = (x > 0) ? 1 : -1;
        y = (y > 0) ? 1 : -1;
        if (direction.x !== x || direction.y !== y) {
            direction.x = x;
            direction.y = y;
            que = [];
            lastScroll = 0;
        }
    }
    try {
        if (window.localStorage && localStorage.SS_deltaBuffer) {
            try {
                deltaBuffer = localStorage.SS_deltaBuffer.split(',');
            } catch (e) {}
        }
    } catch (e) {}

    function isTouchpad(deltaY) {
        if (!deltaY) return;
        if (!deltaBuffer.length) {
            deltaBuffer = [deltaY, deltaY, deltaY];
        }
        deltaY = Math.abs(deltaY);
        deltaBuffer.push(deltaY);
        deltaBuffer.shift();
        clearTimeout(deltaBufferTimer);
        deltaBufferTimer = setTimeout(function () {
            try {
                localStorage.SS_deltaBuffer = deltaBuffer.join(',');
            } catch (e) {}
        }, 1000);
        var dpiScaledWheelDelta = deltaY > 120 && allDeltasDivisableBy(deltaY);
        return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100) && !dpiScaledWheelDelta;
    }

    function isDivisible(n, divisor) {
        return (Math.floor(n / divisor) == n / divisor);
    }

    function allDeltasDivisableBy(divisor) {
        return (isDivisible(deltaBuffer[0], divisor) && isDivisible(deltaBuffer[1], divisor) && isDivisible(deltaBuffer[2], divisor));
    }

    function isInsideYoutubeVideo(event) {
        var elem = event.target;
        var isControl = false;
        if (document.URL.indexOf('www.youtube.com/watch') != -1) {
            do {
                isControl = (elem.classList && elem.classList.contains('html5-video-controls'));
                if (isControl) break;
            } while ((elem = elem.parentNode));
        }
        return isControl;
    }
    var requestFrame = (function () {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback, element, delay) {
            window.setTimeout(callback, delay || (1000 / 60));
        });
    })();
    var MutationObserver = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
    var getScrollRoot = (function () {
        var SCROLL_ROOT = document.scrollingElement;
        return function () {
            if (!SCROLL_ROOT) {
                var dummy = document.createElement('div');
                dummy.style.cssText = 'height:10000px;width:1px;';
                document.body.appendChild(dummy);
                var bodyScrollTop = document.body.scrollTop;
                var docElScrollTop = document.documentElement.scrollTop;
                window.scrollBy(0, 3);
                if (document.body.scrollTop != bodyScrollTop)
                    (SCROLL_ROOT = document.body);
                else
                    (SCROLL_ROOT = document.documentElement);
                window.scrollBy(0, -3);
                document.body.removeChild(dummy);
            }
            return SCROLL_ROOT;
        };
    })();

    function pulse_(x) {
        var val, start, expx;
        x = x * options.pulseScale;
        if (x < 1) {
            val = x - (1 - Math.exp(-x));
        } else {
            start = Math.exp(-1);
            x -= 1;
            expx = 1 - Math.exp(-x);
            val = start + (expx * (1 - start));
        }
        return val * options.pulseNormalize;
    }

    function pulse(x) {
        if (x >= 1) return 1;
        if (x <= 0) return 0;
        if (options.pulseNormalize == 1) {
            options.pulseNormalize /= pulse_(1);
        }
        return pulse_(x);
    }
    var userAgent = window.navigator.userAgent;
    var isEdge = /Edge/.test(userAgent);
    var isChrome = /chrome/i.test(userAgent) && !isEdge;
    var isSafari = /safari/i.test(userAgent) && !isEdge;
    var isMobile = /mobile/i.test(userAgent);
    var isIEWin7 = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
    var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
    var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;
    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassive = true;
            }
        }));
    } catch (e) {}
    var wheelOpt = supportsPassive ? {
        passive: false
    } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    if (wheelEvent && isEnabledForBrowser) {
        addEvent(wheelEvent, wheel, wheelOpt);
        addEvent('mousedown', mousedown);
        addEvent('load', init);
    }

    function SmoothScroll(optionsToSet) {
        for (var key in optionsToSet)
            if (defaultOptions.hasOwnProperty(key))
                options[key] = optionsToSet[key];
    }
    SmoothScroll.destroy = cleanup;
    if (window.SmoothScrollOptions)
        SmoothScroll(window.SmoothScrollOptions);
    if (typeof define === 'function' && define.amd)
        define(function () {
            return SmoothScroll;
        });
    else if ('object' == typeof exports)
        module.exports = SmoothScroll;
    else
        window.SmoothScroll = SmoothScroll;
})();
(function ($) {
    $.fn.thegemPreloader = function (callback) {
        $(this).each(function () {
            var $el = $(this),
                hasSrc = ['img', 'iframe'].indexOf($el[0].nodeName.toLowerCase()) != -1;
            $el.data('thegemPreloader', $('img, iframe', $el).add($el.filter('img, iframe')).length);
            if ($el.data('thegemPreloader') == 0 || (hasSrc && !$el.attr('src'))) {
                $el.prev('.preloader').remove();
                callback();
                $el.trigger('thegem-preloader-loaded');
                return;
            }
            if (!$el.prev('.preloader').length) {
                $('<div class="preloader">').insertBefore($el);
            }
            $('img, iframe', $el).add($el.filter('img, iframe')).each(function () {
                function preloaderItemLoaded() {
                    $el.data('thegemPreloader', $el.data('thegemPreloader') - 1);
                    if ($el.data('thegemPreloader') == 0) {
                        $el.prev('.preloader').remove();
                        callback();
                        $el.trigger('thegem-preloader-loaded');
                    }
                }
                if (!$(this).attr('src')) {
                    preloaderItemLoaded();
                    return;
                }
                var $obj = $('<img>');
                if ($(this).prop('tagName').toLowerCase() == 'iframe') {
                    $obj = $(this);
                }
                $obj.attr('src', $(this).attr('src'));
                $obj.on('load error', preloaderItemLoaded);
            });
        });
    }
})(jQuery);
(function ($) {
    var oWidth = $.fn.width;
    $.fn.width = function (argument) {
        if (arguments.length == 0 && this.length == 1 && this[0] === window) {
            if (window.gemOptions.innerWidth != -1) {
                return window.gemOptions.innerWidth;
            }
            var width = oWidth.apply(this, arguments);
            window.updateGemInnerSize(width);
            return width;
        }
        return oWidth.apply(this, arguments);
    };
    var $page = $('#page');
    $(window).on('load', function () {
        var $preloader = $('#page-preloader');
        if ($preloader.length && !$preloader.hasClass('preloader-loaded')) {
            $preloader.addClass('preloader-loaded');
        }
    });
    $('#site-header.animated-header').headerAnimation();
    $.fn.updateTabs = function () {
        jQuery('.gem-tabs', this).each(function (index) {
            var $tabs = $(this);
            $tabs.thegemPreloader(function () {
                $tabs.easyResponsiveTabs({
                    type: 'default',
                    width: 'auto',
                    fit: false,
                    activate: function (currentTab, e) {
                        var $tab = $(currentTab.target);
                        var controls = $tab.attr('aria-controls');
                        $tab.closest('.ui-tabs').find('.gem_tab[aria-labelledby="' + controls + '"]').trigger('tab-update');
                    }
                });
            });
        });
        jQuery('.gem-tour', this).each(function (index) {
            var $tabs = $(this);
            $tabs.thegemPreloader(function () {
                $tabs.easyResponsiveTabs({
                    type: 'vertical',
                    width: 'auto',
                    fit: false,
                    activate: function (currentTab, e) {
                        var $tab = $(currentTab.target);
                        var controls = $tab.attr('aria-controls');
                        $tab.closest('.ui-tabs').find('.gem_tab[aria-labelledby="' + controls + '"]').trigger('tab-update');
                    }
                });
            });
        });
    };

    function fullwidth_block_after_update($item) {
        $item.trigger('updateTestimonialsCarousel');
        $item.trigger('updateClientsCarousel');
        $item.trigger('fullwidthUpdate');
    }

    function fullwidth_block_update($item, pageOffset, pagePaddingLeft, pageWidth, skipTrigger) {
        var $prevElement = $item.prev(),
            extra_padding = 0;
        if ($prevElement.length == 0 || $prevElement.hasClass('fullwidth-block')) {
            $prevElement = $item.parent();
            extra_padding = parseInt($prevElement.css('padding-left'));
        }
        var offsetKey = window.gemSettings.isRTL ? 'right' : 'left';
        var cssData = {
            width: pageWidth
        };
        cssData[offsetKey] = pageOffset.left - ($prevElement.length ? $prevElement.offset().left : 0) + parseInt(pagePaddingLeft) - extra_padding;
        $item.css(cssData);
        if (!skipTrigger) {
            fullwidth_block_after_update($item);
        }
    }
    var inlineFullwidths = [],
        notInlineFullwidths = [];
    $('.fullwidth-block').each(function () {
        var $item = $(this),
            $parents = $item.parents('.vc_row'),
            fullw = {
                isInline: false
            };
        $parents.each(function () {
            if (this.hasAttribute('data-vc-full-width')) {
                fullw.isInline = true;
                return false;
            }
        });
        if (fullw.isInline) {
            inlineFullwidths.push(this);
        } else {
            notInlineFullwidths.push(this);
        }
    });

    function update_fullwidths(inline, init) {
        var $needUpdate = [];
        (inline ? inlineFullwidths : notInlineFullwidths).forEach(function (item) {
            $needUpdate.push(item);
        });
        if ($needUpdate.length > 0) {
            var pageOffset = $page.offset(),
                pagePaddingLeft = $page.css('padding-left'),
                pageWidth = $page.width();
            $needUpdate.forEach(function (item) {
                fullwidth_block_update($(item), pageOffset, pagePaddingLeft, pageWidth);
            });
        }
    }
    if (!window.disableGemSlideshowPreloaderHandle) {
        jQuery('.gem-slideshow-with-preloader:not(.gem-slideshow-rs)').each(function () {
            var $slideshow = $(this);
            $slideshow.thegemPreloader(function () {});
        });
    }
    var revapi = jQuery(document).ready(function () {});
    revapi.one('revolution.slide.onloaded', function () {
        jQuery('.gem-slideshow').prev('.slideshow-preloader').remove();
    });
    $(function () {
        $('#gem-icons-loading-hide').remove();
        if (window.tgpLazyItems === undefined) {
            $('#thegem-preloader-inline-css').remove();
        }
        jQuery('iframe').not('.gem-video-background iframe, .wcppec-checkout-buttons iframe').each(function () {
            $(this).thegemPreloader(function () {});
        });
        jQuery('.gem-video-background').each(function () {
            var $videoBG = $(this);
            var $videoContainer = $('.gem-video-background-inner', this);
            var ratio = $videoBG.data('aspect-ratio') ? $videoBG.data('aspect-ratio') : '16:9';
            var regexp = /(\d+):(\d+)/;
            var $fullwidth = $videoBG.closest('.fullwidth-block');
            ratio = regexp.exec(ratio);
            if (!ratio || parseInt(ratio[1]) == 0 || parseInt(ratio[2]) == 0) {
                ratio = 16 / 9;
            } else {
                ratio = parseInt(ratio[1]) / parseInt(ratio[2]);
            }

            function gemVideoUpdate() {
                $videoContainer.removeAttr('style');
                if ($videoContainer.width() / $videoContainer.height() > ratio) {
                    $videoContainer.css({
                        height: ($videoContainer.width() / ratio) + 'px',
                        marginTop: -($videoContainer.width() / ratio - $videoBG.height()) / 2 + 'px'
                    });
                } else {
                    $videoContainer.css({
                        width: ($videoContainer.height() * ratio) + 'px',
                        marginLeft: -($videoContainer.height() * ratio - $videoBG.width()) / 2 + 'px'
                    });
                }
            }
            if ($videoBG.closest('.page-title-block').length > 0) {
                gemVideoUpdate();
            }
            if ($fullwidth.length) {
                $fullwidth.on('fullwidthUpdate', gemVideoUpdate);
            } else {
                $(window).resize(gemVideoUpdate);
            }
        });
        update_fullwidths(false, true);
        $('.fullwidth-block').each(function () {
            var $item = $(this),
                mobile_enabled = $item.data('mobile-parallax-enable') || '0',
                is_custom_title = $item.hasClass('custom-title-background');
            if (!window.gemSettings.isTouch || mobile_enabled == '1') {
                if ($item.hasClass('fullwidth-block-parallax-vertical')) {
                    var parallaxOptions = {};
                    if (is_custom_title) {
                        parallaxOptions.position = 'top';
                    }
                    $('.fullwidth-block-background', $item).each(function () {
                        var backgroundImageCss = $(this).css('background-image') || '';
                        if (backgroundImageCss == 'none' || backgroundImageCss == '') {
                            $(this).on('tgpliVisible', function () {
                                $(this).parallaxVertical('50%', parallaxOptions);
                            });
                            return;
                        }
                        $(this).parallaxVertical('50%', parallaxOptions);
                    });
                } else if ($item.hasClass('fullwidth-block-parallax-horizontal')) {
                    $('.fullwidth-block-background', $item).each(function () {
                        if (!window.gemSettings.parallaxDisabled) {
                            var backgroundImageCss = $(this).css('background-image') || '';
                            if (backgroundImageCss == 'none' || backgroundImageCss == '') {
                                $(this).on('tgpliVisible', function () {
                                    $(this).parallaxHorizontal();
                                });
                                return;
                            }
                            $(this).parallaxHorizontal();
                        }
                    });
                }
            } else {
                $('.fullwidth-block-background', $item).css({
                    backgroundAttachment: 'scroll'
                });
            }
        });
        if (!window.gemSettings.isTouch) {
            $('.page-title-parallax-background').each(function () {
                var backgroundImageCss = $(this).css('background-image') || '';
                if (backgroundImageCss == 'none' || backgroundImageCss == '') {
                    $(this).on('tgpliVisible', function () {
                        $(this).parallaxVertical('50%', {
                            position: 'top'
                        });
                    });
                    return;
                }
                $(this).parallaxVertical('50%', {
                    position: 'top'
                });
            });
        } else {
            $('.page-title-parallax-background').css({
                backgroundAttachment: 'scroll'
            });
        }
        $(window).resize(function () {
            update_fullwidths(false, false);
        });
        $(window).on('load', function () {
            update_fullwidths(false, false);
        });
        jQuery('select.gem-combobox, .gem-combobox select, .widget_archive select').each(function (index) {
            $(this).combobox();
        });
        jQuery('.widget_categories select').each(function () {
            this.onchange = null;
            $(this).on('change', function () {
                if ($(this).val() != -1) {
                    $(this).closest('form').submit();
                }
            });
        });
        jQuery('input.gem-checkbox, .gem-checkbox input').checkbox();
        if (typeof ($.fn.ReStable) == "function") {
            jQuery('.gem-table-responsive').each(function (index) {
                $('> table', this).ReStable({
                    maxWidth: 768,
                    rowHeaders: $(this).hasClass('row-headers')
                });
            });
        }
        jQuery('.fancybox').each(function () {
            $(this).fancybox();
        });
        if (typeof jQuery.fn.scSticky === 'function') {
            jQuery('.panel-sidebar-sticky > .sidebar').scSticky();
        }
        jQuery('iframe + .map-locker').each(function () {
            var $locker = $(this);
            $locker.click(function (e) {
                e.preventDefault();
                if ($locker.hasClass('disabled')) {
                    $locker.prev('iframe').css({
                        'pointer-events': 'none'
                    });
                } else {
                    $locker.prev('iframe').css({
                        'pointer-events': 'auto'
                    });
                }
                $locker.toggleClass('disabled');
            });
        });
        $('.primary-navigation a.mega-no-link').closest('li').removeClass('menu-item-active current-menu-item');

        function getElementPagePosition(element) {
            var width = element.offsetWidth,
                height = element.offsetHeight,
                left = 0,
                top = 0;
            while (element && element.id != 'page') {
                left += element.offsetLeft;
                top += element.offsetTop;
                element = element.offsetParent;
            }
            return {
                "left": left,
                "top": top,
                "width": width,
                "height": height
            };
        }
        var $anhorsElements = [];
        $('.quickfinder-item a, .primary-navigation a, .gem-button, .footer-navigation a, .scroll-top-button, .scroll-to-anchor, .scroll-to-anchor a, .top-area-menu a').each(function (e) {
            var $anhor = $(this);
            var link = $anhor.attr('href');
            if (!link) return;
            link = link.split('#');
            try {
                if ($('#' + link[1]).hasClass('vc_tta-panel')) return;
                if ($('#' + link[1]).length) {
                    $anhor.closest('li').removeClass('menu-item-active current-menu-item');
                    $anhor.closest('li').parents('li').removeClass('menu-item-current');
                    $(document).on('update-page-scroller', function (e, elem) {
                        var $elem = $(elem);
                        if (!$anhor.closest('li.menu-item').length) return;
                        if ($elem.is($('#' + link[1])) || $elem.find($('#' + link[1])).length) {
                            $anhor.closest('li').addClass('menu-item-active');
                            $anhor.closest('li').parents('li').addClass('menu-item-current');
                        } else {
                            $anhor.closest('li').removeClass('menu-item-active');
                            $anhor.closest('li').parents('li.menu-item-current').each(function () {
                                if (!$('.menu-item-active', this).length) {
                                    $(this).removeClass('menu-item-current');
                                }
                            });
                        }
                    });
                    $anhor.click(function (e) {
                        e.preventDefault();
                        history.replaceState('data to be passed', $anhor.text(), $anhor.attr('href'));
                        var correction = 0;
                        var isPerspectiveMenu = $('#thegem-perspective.modalview').length;
                        if ($('#site-header.animated-header').length) {
                            var shrink = $('#site-header').hasClass('shrink');
                            $('#site-header').addClass('scroll-counting');
                            $('#site-header').addClass('fixed shrink');
                            correction = $('#site-header').outerHeight();
                            if (!isPerspectiveMenu) {
                                var siteHeaderTop = $('#site-header').position().top;
                                if ($('#site-header').hasClass('shrink')) {
                                    siteHeaderTop = 0;
                                }
                                correction += siteHeaderTop;
                            }
                            if (!shrink) {
                                $('#site-header').removeClass('fixed shrink');
                            }
                            setTimeout(function () {
                                $('#site-header').removeClass('scroll-counting');
                            }, 50);
                        }
                        var target_top = getElementPagePosition($('#' + link[1])[0]).top - correction + 1;
                        if (getElementPagePosition($('#' + link[1])[0]).top == 0) {
                            target_top = 0;
                        }
                        if ($('body').hasClass('page-scroller') && $('.page-scroller-nav-pane').is(':visible')) {
                            var $block = $('#' + link[1] + '.scroller-block').add($('#' + link[1]).closest('.scroller-block')).eq(0);
                            if ($block.length) {
                                $('.page-scroller-nav-pane .page-scroller-nav-item').eq($('.scroller-block').index($block)).trigger('click');
                            }
                            if ($anhor.closest('.overlay-menu-wrapper').length && $anhor.closest('.overlay-menu-wrapper').hasClass('active')) {
                                if ($anhor.closest('#primary-navigation').length && $anhor.closest('#primary-navigation').hasClass('responsive')) {
                                    $('.menu-toggle').trigger('click');
                                } else {
                                    $('.overlay-toggle').trigger('click');
                                }
                            }
                        } else {
                            if (isPerspectiveMenu) {
                                $('#page').stop(true, true).animate({
                                    scrollTop: target_top
                                }, 1500, 'easeInOutCubic', function () {
                                    if ($anhor.closest('#thegem-perspective').length && $anhor.closest('#thegem-perspective').hasClass('modalview')) {
                                        $('.perspective-menu-close').trigger('click');
                                    }
                                });
                            } else {
                                $('html, body').stop(true, true).animate({
                                    scrollTop: target_top
                                }, 1500, 'easeInOutCubic');
                            }
                            if ($anhor.closest('#primary-menu').length && $anhor.closest('#primary-menu').hasClass('dl-menuopen')) {
                                $('.menu-toggle').trigger('click');
                            }
                            if ($anhor.closest('.mobile-menu-slide-wrapper').length && $anhor.closest('.mobile-menu-slide-wrapper').hasClass('opened')) {
                                $('.mobile-menu-slide-close').trigger('click');
                            }
                            if ($anhor.closest('.overlay-menu-wrapper').length && $anhor.closest('.overlay-menu-wrapper').hasClass('active')) {
                                if ($anhor.closest('#primary-navigation').length && $anhor.closest('#primary-navigation').hasClass('responsive')) {
                                    $('.menu-toggle').trigger('click');
                                } else {
                                    $('.overlay-toggle').trigger('click');
                                }
                            }
                            if ($anhor.closest('#primary-navigation').length && $anhor.closest('#primary-navigation').hasClass('hamburger-active')) {
                                $('.hamburger-toggle').trigger('click');
                            }
                        }
                    });
                    $anhorsElements.push($anhor[0]);
                }
            } catch (e) {
                return;
            }
        });
        if ($anhorsElements.length) {
            function anchorLinksScroll() {
                var isPerspectiveMenu = $('#thegem-perspective.modalview').length;
                var correction = 0;
                if (!$page.hasClass('vertical-header')) {
                    correction = $('#site-header').outerHeight();
                    if (!isPerspectiveMenu) {
                        var siteHeaderTop = $('#site-header').length ? $('#site-header').position().top : 0;
                        if ($('#site-header').hasClass('shrink')) {
                            siteHeaderTop = 0;
                        }
                        correction += siteHeaderTop;
                    }
                }
                for (var i = 0; i < $anhorsElements.length; i++) {
                    var $anhor = $($anhorsElements[i]);
                    var link = $anhor.attr('href');
                    if (!link) continue;
                    link = link.split('#');
                    var scrollY = getScrollY() + $page.scrollTop();
                    if (!$anhor.closest('li.menu-item').length) continue;
                    var target_top = getElementPagePosition($('#' + link[1])[0]).top - correction;
                    if (scrollY >= target_top && scrollY <= target_top + $('#' + link[1]).outerHeight()) {
                        $anhor.closest('li').addClass('menu-item-active');
                        $anhor.closest('li').parents('li').addClass('menu-item-current');
                    } else {
                        $anhor.closest('li').removeClass('menu-item-active');
                        $anhor.closest('li').parents('li.menu-item-current').each(function () {
                            if (!$('.menu-item-active', this).length) {
                                $(this).removeClass('menu-item-current');
                            }
                        });
                    }
                }
            }
            $(window).scroll(anchorLinksScroll);
            if ($('#thegem-perspective').length) {
                $page.scroll(anchorLinksScroll);
            }
            $(window).on('load', function () {
                for (var i = 0; i < $anhorsElements.length; i++) {
                    var anhor = $anhorsElements[i];
                    if (anhor.href != undefined && anhor.href && window.location.href == anhor.href) {
                        anhor.click();
                        break;
                    }
                }
            });
        }
        $('body').on('click', '.post-footer-sharing .gem-button', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).closest('.post-footer-sharing').find('.sharing-popup').addClass('active');
        });
        $('body').on('click', function () {
            $('.sharing-popup').removeClass('active');
        });
        var scrollTimer, body = document.body;
        $(window).scroll(function () {
            clearTimeout(scrollTimer);
            if (!body.classList.contains('disable-hover')) {}
            scrollTimer = setTimeout(function () {}, 300);
            if (getScrollY() > 0) {
                $('.scroll-top-button').addClass('visible');
            } else {
                $('.scroll-top-button').removeClass('visible');
            }
        }).scroll();

        function getScrollY(elem) {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
        $('a.hidden-email').each(function () {
            $(this).attr('href', 'mailto:' + $(this).data('name') + '@' + $(this).data('domain'));
        });
        var initFooterWidgetArea = function () {
            if (window.tgpLazyItems !== undefined) {
                var isShowed = window.tgpLazyItems.checkGroupShowed(this, function (node) {
                    initFooterWidgetArea.call(node);
                });
                if (!isShowed) {
                    return;
                }
            }
            var self = this;
            $(self).thegemPreloader(function () {
                $(self).isotope({
                    itemSelector: '.widget',
                    layoutMode: 'masonry'
                });
            });
        };
        $('#colophon .footer-widget-area').each(initFooterWidgetArea);
        $('body').updateTabs();
    });
    $(document).on('show.vc.accordion', '[data-vc-accordion]', function () {
        var $target = $(this).data('vc.accordion').getContainer();
        var correction = 0;
        if (!$target.find('.vc_tta-tabs').length || !$(this).is(':visible') || $target.data('vc-tta-autoplay')) return;
        if ($('#site-header.animated-header').length && $('#site-header').hasClass('fixed')) {
            var shrink = $('#site-header').hasClass('shrink');
            $('#site-header').addClass('scroll-counting');
            $('#site-header').addClass('fixed shrink');
            correction = $('#site-header').outerHeight() + $('#site-header').position().top;
            if (!shrink) {
                $('#site-header').removeClass('fixed shrink');
            }
            $('#site-header').removeClass('scroll-counting');
        }
        var target_top = $target.offset().top - correction - 100 + 1;
        $('html, body').stop(true, true).animate({
            scrollTop: target_top
        }, 500, 'easeInOutCubic');
    });
    var vc_update_fullwidth_init = true;
    $(document).on('vc-full-width-row', function (e) {
        if (window.gemOptions.clientWidth - $page.width() > 25 || window.gemSettings.isRTL) {
            for (var i = 1; i < arguments.length; i++) {
                var $el = $(arguments[i]);
                $el.addClass("vc_hidden");
                var $el_full = $el.next(".vc_row-full-width");
                $el_full.length || ($el_full = $el.parent().next(".vc_row-full-width"));
                var el_margin_left = parseInt($el.css("margin-left"), 10),
                    el_margin_right = parseInt($el.css("margin-right"), 10),
                    offset = 0 - $el_full.offset().left - el_margin_left + $('#page').offset().left + parseInt($('#page').css('padding-left')),
                    width = $('#page').width();
                var offsetKey = window.gemSettings.isRTL ? 'right' : 'left';
                var cssData = {
                    position: "relative",
                    left: offset,
                    "box-sizing": "border-box",
                    width: $("#page").width()
                };
                cssData[offsetKey] = offset;
                if ($el.css(cssData), !$el.data("vcStretchContent")) {
                    var padding = -1 * offset;
                    0 > padding && (padding = 0);
                    var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
                    0 > paddingRight && (paddingRight = 0), $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    })
                }
                $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden");
                $el.trigger('VCRowFullwidthUpdate');
            }
        }
        update_fullwidths(true, vc_update_fullwidth_init);
        vc_update_fullwidth_init = false;
    });
    $('body').on('click', '.gem-button[href^="#give-form-"]', function (e) {
        var form_id = $(this).attr('href').replace('#give-form-', '');
        form_id = parseInt(form_id);
        if (!isNaN(form_id)) {
            $('#give-form-' + form_id + ' .give-btn-modal').click();
        }
        e.preventDefault();
        return false;
    });
})(jQuery);
(function ($) {
    $('.menu-item-search a').on('click', function (e) {
        e.preventDefault();
        if ($(this).closest('.menu-item-fullscreen-search-mobile').length) {
            return;
        }
        if ($(this).closest('.overlay-menu-wrapper.active').length) {
            var $primaryMenu = $('#primary-menu');
            $primaryMenu.addClass('overlay-search-form-show');
            if ($primaryMenu.hasClass('no-responsive')) {
                $primaryMenu.addClass('animated-minisearch');
            }
            setTimeout(function () {
                $(document).on('click.menu-item-search-close', 'body', function (e) {
                    if (!$(e.target).is('.menu-item-search .minisearch *')) {
                        var $primaryMenu = $('#primary-menu');
                        if ($primaryMenu.hasClass('animated-minisearch')) {
                            $primaryMenu.removeClass('animated-minisearch');
                            setTimeout(function () {
                                $primaryMenu.removeClass('overlay-search-form-show');
                                $(document).off('click.menu-item-search-close');
                            }, 700);
                        } else {
                            $primaryMenu.removeClass('overlay-search-form-show');
                            $(document).off('click.menu-item-search-close');
                        }
                    }
                });
            }, 500);
        } else {
            $('.menu-item-search').toggleClass('active');
        }
    });
    $(document).ready(function () {
        var localCache = {
            data: {},
            remove: function (url) {
                delete localCache.data[url];
            },
            exist: function (url) {
                return localCache.data.hasOwnProperty(url) && localCache.data[url] !== null;
            },
            get: function (url) {
                return localCache.data[url];
            },
            set: function (url, cachedData, callback) {
                localCache.remove(url);
                localCache.data[url] = cachedData;
                if ($.isFunction(callback)) callback(cachedData);
            }
        };
        var ajax;
        var ajaxActive = false;
        if (navigator.appVersion.indexOf("Win") != -1) {
            $('body').addClass('platform-Windows');
        }
        $('.menu-item-fullscreen-search a, .menu-item-fullscreen-search-mobile a').on('click', function (e) {
            e.preventDefault();
            fullscreenSearchTop();
            $('#fullscreen-search').toggleClass('active');
            if (ajaxActive) {
                ajax.abort();
                ajaxActive = false;
            }
            $('#fullscreen-searchform-input').val('');
            if ($('#site-header').hasClass('fixed')) {
                setTimeout(function () {
                    $('#fullscreen-searchform-input').focus();
                }, 500);
            } else {
                if ($(window).scrollTop() == 0) {
                    $('html, body').stop().animate({
                        scrollTop: 0
                    }, 500);
                }
                $('#fullscreen-searchform-input').focus();
            }
            $('.sf-result .preloader-new').remove();
            $('.sf-result .result-sections').html('');
            $('body').toggleClass('fullscreen-search-opened');
            $('#thegem-perspective.modalview .perspective-menu-close').trigger('click');
            if ($('.primary-navigation').hasClass('responsive')) {
                $('.menu-toggle').trigger('click');
            }
            if ($(window).width() > 767) {
                $('.overlay-toggle').trigger('click');
            }
            if ($(window).width() > 979) {
                $('.hamburger-toggle').trigger('click');
                $('.vertical-toggle').trigger('click');
            }
        });
        $('#fullscreen-search .sf-close').on('click', function (e) {
            e.preventDefault();
            $('.menu-item-fullscreen-search').removeClass('active');
            $('#fullscreen-search').removeClass('active');
            $('body').removeClass('fullscreen-search-opened');
            if (ajaxActive) {
                ajax.abort();
                ajaxActive = false;
            }
            $('#fullscreen-searchform-input').val('');
            $('.sf-result .preloader-new').remove();
            $('.sf-result .result-sections').html('');
        });
        $(document).keyup(function (e) {
            if (e.key === "Escape") {
                $('#fullscreen-search .sf-close').trigger('click');
            }
        });
        $('#fullscreen-searchform-input').on('keyup', function () {
            var $input = $(this);
            var $content = $('#fullscreen-search .sf-result');
            var query = $input.val();
            if (query.length > 2) {
                ajaxSearch(query);
            } else {
                if (ajaxActive) {
                    ajax.abort();
                    ajaxActive = false;
                }
                $content.find('.preloader-new').remove();
                $content.find('.result-sections').html('');
            }
            return false;
        });
        $('.vertical-minisearch.menu-item-ajax-search .sf-submit-icon').on('click', function () {
            if ($(this).hasClass('clear')) {
                clearAjaxMinisearch();
            }
        });
        $('.hamburger-toggle, #thegem-perspective .perspective-menu-close, .vertical-toggle').click(function () {
            clearAjaxMinisearch();
        });

        function clearAjaxMinisearch() {
            $('.vertical-minisearch.menu-item-ajax-search .sf-input').val('');
            $('.vertical-minisearch.menu-item-ajax-search .ajax-minisearch-results').html('');
            $('.vertical-minisearch.menu-item-ajax-search .sf-submit-icon').removeClass('clear');
            $('.vertical-minisearch.menu-item-ajax-search #searchform').removeClass('ajax-loading');
            if (ajaxActive) {
                ajax.abort();
                ajaxActive = false;
            }
        }
        $('.vertical-minisearch.menu-item-ajax-search .sf-input').on('keyup', function () {
            var $input = $(this);
            var $content = $('.ajax-minisearch-results');
            var query = $input.val();
            if (query.length > 0) {
                $('.vertical-minisearch.menu-item-ajax-search .sf-submit-icon').addClass('clear');
            } else {
                $('.vertical-minisearch.menu-item-ajax-search .sf-submit-icon').removeClass('clear');
            }
            if (query.length > 2) {
                ajaxMiniSearch(query);
            } else {
                if (ajaxActive) {
                    ajax.abort();
                    ajaxActive = false;
                }
                $content.html('');
                $('.vertical-minisearch.menu-item-ajax-search #searchform').removeClass('ajax-loading');
            }
            return false;
        });
        $('.ajax-search .top-search-item').on('click', function (e) {
            e.preventDefault();
            var query = $(this).data('search');
            var $input = $('#fullscreen-searchform-input');
            ajaxSearch(query);
            $input.val(query);
            return false;
        });

        function ajaxSearch(query) {
            var $input = $('#fullscreen-searchform-input');
            var $ajax_search_params = $('#ajax-search-params');
            var post_types = $ajax_search_params.data('post-types');
            var post_types_ppp = $ajax_search_params.data('post-types-ppp');
            var $content = $('#fullscreen-search .sf-result');
            if (!$input.hasClass('styled')) {
                var styles = $input.data('styles');
                styles.forEach(function (style) {
                    $('head').append('<link rel="stylesheet" type="text/css" href="' + style + '">');
                });
                $input.addClass('styled');
            }
            if (ajaxActive) {
                ajax.abort();
            } else {
                $content.prepend('<div class="preloader-new"><div class="preloader-spin"></div></div>');
            }
            ajax = $.ajax({
                type: 'post',
                url: thegem_scripts_data.ajax_url,
                data: {
                    action: 'thegem_ajax_search',
                    search: query,
                    post_types: post_types,
                    post_types_ppp: post_types_ppp,
                },
                beforeSend: function () {
                    if (localCache.exist(query)) {
                        $content.find('.preloader-new').remove();
                        $content.find('.result-sections').html(localCache.get(query));
                        return false;
                    } else {
                        ajaxActive = true;
                    }
                },
                success: function (response) {
                    ajaxActive = false;
                    $content.find('.preloader-new').remove();
                    $content.find('.result-sections').html(response);
                    localCache.set(query, response);
                }
            });
        }

        function ajaxMiniSearch(query) {
            var $ajax_search_params = $('#ajax-search-params');
            var post_types = $ajax_search_params.data('post-types');
            var post_types_ppp = $ajax_search_params.data('post-types-ppp');
            var $content = $('.ajax-minisearch-results');
            if (ajaxActive) {
                ajax.abort();
            }
            $('.vertical-minisearch.menu-item-ajax-search #searchform').addClass('ajax-loading');
            ajax = $.ajax({
                type: 'post',
                url: thegem_scripts_data.ajax_url,
                data: {
                    action: 'thegem_ajax_search_mini',
                    search: query,
                    post_types: post_types,
                    post_types_ppp: post_types_ppp,
                },
                beforeSend: function () {
                    if (localCache.exist(query)) {
                        $('.menu-item-ajax-search #searchform').removeClass('ajax-loading');
                        $content.html(localCache.get(query));
                        return false;
                    } else {
                        ajaxActive = true;
                    }
                },
                success: function (response) {
                    ajaxActive = false;
                    $content.html(response);
                    $('.menu-item-ajax-search #searchform').removeClass('ajax-loading');
                    localCache.set(query, response);
                }
            });
        }

        function fullscreenSearchTop() {
            var searchTop;
            if ($('#page').hasClass('vertical-header') && $(window).width() > 979) {
                searchTop = 0;
            } else if ($('#site-header').hasClass('fixed')) {
                searchTop = $('#site-header').outerHeight();
            } else if ($('#site-header').length > 0) {
                searchTop = $('#site-header').offset().top + $('#site-header').outerHeight() - $(window).scrollTop();
            }
            $('#fullscreen-search').css('top', searchTop);
        }
        var currentElem;
    });
})(jQuery);
(function ($) {
    $('.menu-item-search a').click(function () {
        if (!$('#primary-navigation').hasClass('overlay-active')) {
            $('#searchform-input').focus();
        }
    });
})(jQuery);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function (d) {
    function e(a) {
        var b = a || window.event,
            c = [].slice.call(arguments, 1),
            f = 0,
            e = 0,
            g = 0,
            a = d.event.fix(b);
        a.type = "mousewheel";
        b.wheelDelta && (f = b.wheelDelta / 120);
        b.detail && (f = -b.detail / 3);
        g = f;
        b.axis !== void 0 && b.axis === b.HORIZONTAL_AXIS && (g = 0, e = -1 * f);
        b.wheelDeltaY !== void 0 && (g = b.wheelDeltaY / 120);
        b.wheelDeltaX !== void 0 && (e = -1 * b.wheelDeltaX / 120);
        c.unshift(a, f, e, g);
        return (d.event.dispatch || d.event.handle).apply(this, c)
    }
    var c = ["DOMMouseScroll", "mousewheel"];
    if (d.event.fixHooks)
        for (var h = c.length; h;) d.event.fixHooks[c[--h]] = d.event.mouseHooks;
    d.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener)
                for (var a = c.length; a;) this.addEventListener(c[--a], e, false);
            else this.onmousewheel = e
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var a = c.length; a;) this.removeEventListener(c[--a], e, false);
            else this.onmousewheel = null
        }
    };
    d.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
})(jQuery);

! function (t, e, n, o) {
    "use strict";

    function i(t, e) {
        var o, i, a, s = [],
            r = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), (a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "", i ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), a = n.fancybox.open(s, e, r), a.$trigger = o))
    }
    if (t.console = t.console || {
            info: function (t) {}
        }, n) {
        if (n.fn.fancybox) return void console.info("fancyBox already initialized");
        var a = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function (t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function (t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function (t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function (t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function (t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            },
            s = n(t),
            r = n(e),
            c = 0,
            l = function (t) {
                return t && t.hasOwnProperty && t instanceof n
            },
            d = function () {
                return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
                    return t.setTimeout(e, 1e3 / 60)
                }
            }(),
            u = function () {
                return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
                    t.clearTimeout(e)
                }
            }(),
            f = function () {
                var t, n = e.createElement("fakeelement"),
                    o = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in o)
                    if (void 0 !== n.style[t]) return o[t];
                return "transitionend"
            }(),
            p = function (t) {
                return t && t.length && t[0].offsetHeight
            },
            h = function (t, e) {
                var o = n.extend(!0, {}, t, e);
                return n.each(e, function (t, e) {
                    n.isArray(e) && (o[t] = e)
                }), o
            },
            g = function (t) {
                var o, i;
                return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = {
                    x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                    y: t.getBoundingClientRect().top + t.offsetHeight / 2
                }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i)
            },
            b = function (t, e, o) {
                var i = this;
                i.opts = h({
                    index: o
                }, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = h(i.opts, e)), n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)), i.id = i.opts.id || ++c, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init()
            };
        n.extend(b.prototype, {
                init: function () {
                    var o, i, a = this,
                        s = a.group[a.currIndex],
                        r = s.opts;
                    r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(r.buttons, function (t, e) {
                        i += r.btnTpl[e] || ""
                    }), o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(r.baseClass).data("FancyBox", a).appendTo(r.parentEl), a.$refs = {
                        container: o
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                        a.$refs[t] = o.find(".fancybox-" + t)
                    }), a.trigger("onInit"), a.activate(), a.jumpTo(a.currIndex)
                },
                translate: function (t, e) {
                    var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                    return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                        return void 0 === n[e] ? t : n[e]
                    })
                },
                addContent: function (t) {
                    var e, o = this,
                        i = n.makeArray(t);
                    n.each(i, function (t, e) {
                        var i, a, s, r, c, l = {},
                            d = {};
                        n.isPlainObject(e) ? (l = e, d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), d = i.data() || {}, d = n.extend(!0, {}, d, d.options), d.$orig = i, l.src = o.opts.src || d.src || i.attr("href"), l.type || l.src || (l.type = "inline", l.src = e)) : l = {
                            type: "html",
                            src: e + ""
                        }, l.opts = n.extend(!0, {}, o.opts, d), n.isArray(d.buttons) && (l.opts.buttons = d.buttons), n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)), a = l.type || l.opts.type, r = l.src || "", !a && r && ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", l = n.extend(!0, l, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === r.charAt(0) && (a = "inline")), a ? l.type = a : o.trigger("objectNeedsType", l), l.contentType || (l.contentType = n.inArray(l.type, ["html", "inline", "ajax"]) > -1 ? "html" : l.type), l.index = o.group.length, "auto" == l.opts.smallBtn && (l.opts.smallBtn = n.inArray(l.type, ["html", "inline", "ajax"]) > -1), "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn), l.$thumb = l.opts.$thumb || null, l.opts.$trigger && l.index === o.opts.index && (l.$thumb = l.opts.$trigger.find("img:first"), l.$thumb.length && (l.opts.$orig = l.opts.$trigger)), l.$thumb && l.$thumb.length || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")), l.$thumb && !l.$thumb.length && (l.$thumb = null), l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null), "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [o, l])), "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [o, l])), l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""), "ajax" === l.type && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.filter = c.shift())), l.opts.modal && (l.opts = n.extend(!0, l.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), o.group.push(l)
                    }), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()))
                },
                addEvents: function () {
                    var e = this;
                    e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                        t.stopPropagation(), t.preventDefault(), e.close(t)
                    }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                        t.stopPropagation(), t.preventDefault(), e.previous()
                    }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                        t.stopPropagation(), t.preventDefault(), e.next()
                    }).on("click.fb", "[data-fancybox-zoom]", function (t) {
                        e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    }), s.on("orientationchange.fb resize.fb", function (t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = d(function () {
                            e.update(t)
                        })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
                            e.$refs.stage.show(), e.update(t)
                        }, n.fancybox.isMobile ? 600 : 250))
                    }), r.on("keydown.fb", function (t) {
                        var o = n.fancybox ? n.fancybox.getInstance() : null,
                            i = o.current,
                            a = t.keyCode || t.which;
                        if (9 == a) return void(i.opts.trapFocus && e.focus(t));
                        if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === a || 27 === a ? (t.preventDefault(), void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, a)
                    }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                        e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                    }), e.idleInterval = t.setInterval(function () {
                        ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                    }, 1e3))
                },
                removeEvents: function () {
                    var e = this;
                    s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
                },
                previous: function (t) {
                    return this.jumpTo(this.currPos - 1, t)
                },
                next: function (t) {
                    return this.jumpTo(this.currPos + 1, t)
                },
                jumpTo: function (t, e) {
                    var o, i, a, s, r, c, l, d, u, f = this,
                        h = f.group.length;
                    if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                        if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= h)) return !1;
                        if (o = f.firstRun = !Object.keys(f.slides).length, r = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, s = f.createSlide(t), h > 1 && ((a || s.index < h - 1) && f.createSlide(t + 1), (a || s.index > 0) && f.createSlide(t - 1)), f.current = s, f.currIndex = s.index, f.currPos = s.pos, f.trigger("beforeShow", o), f.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = f.isMoved(s), s.$slide.addClass("fancybox-slide--current"), o) return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(s), void f.preload("image");
                        c = n.fancybox.getTranslate(r.$slide), l = n.fancybox.getTranslate(f.$refs.stage), n.each(f.slides, function (t, e) {
                            n.fancybox.stop(e.$slide, !0)
                        }), r.pos !== s.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (u = c.left - (r.pos * c.width + r.pos * r.opts.gutter), n.each(f.slides, function (t, o) {
                            o.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                            });
                            var i = o.pos * c.width + o.pos * o.opts.gutter;
                            n.fancybox.setTranslate(o.$slide, {
                                top: 0,
                                left: i - l.left + u
                            }), o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")), p(o.$slide), n.fancybox.animate(o.$slide, {
                                top: 0,
                                left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter
                            }, e, function () {
                                o.$slide.css({
                                    transform: "",
                                    opacity: ""
                                }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === f.currPos && f.complete()
                            })
                        })) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")), n.fancybox.animate(r.$slide, d, e, function () {
                            r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")
                        }, !1)), s.isLoaded ? f.revealContent(s) : f.loadSlide(s), f.preload("image")
                    }
                },
                createSlide: function (t) {
                    var e, o, i = this;
                    return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), i.updateSlide(i.slides[t])), i.slides[t]
                },
                scaleToActual: function (t, e, o) {
                    var i, a, s, r, c, l = this,
                        d = l.current,
                        u = d.$content,
                        f = n.fancybox.getTranslate(d.$slide).width,
                        p = n.fancybox.getTranslate(d.$slide).height,
                        h = d.width,
                        g = d.height;
                    l.isAnimating || l.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (l.isAnimating = !0, n.fancybox.stop(u), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, i = n.fancybox.getTranslate(u), i.top -= n.fancybox.getTranslate(d.$slide).top, i.left -= n.fancybox.getTranslate(d.$slide).left, r = h / i.width, c = g / i.height, a = .5 * f - .5 * h, s = .5 * p - .5 * g, h > f && (a = i.left * r - (t * r - t), a > 0 && (a = 0), a < f - h && (a = f - h)), g > p && (s = i.top * c - (e * c - e), s > 0 && (s = 0), s < p - g && (s = p - g)), l.updateCursor(h, g), n.fancybox.animate(u, {
                        top: s,
                        left: a,
                        scaleX: r,
                        scaleY: c
                    }, o || 366, function () {
                        l.isAnimating = !1
                    }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
                },
                scaleToFit: function (t) {
                    var e, o = this,
                        i = o.current,
                        a = i.$content;
                    o.isAnimating || o.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, n.fancybox.stop(a), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / a.width(),
                        scaleY: e.height / a.height()
                    }, t || 366, function () {
                        o.isAnimating = !1
                    }))
                },
                getFitPos: function (t) {
                    var e, o, i, a, s = this,
                        r = t.$content,
                        c = t.$slide,
                        l = t.width || t.opts.width,
                        d = t.height || t.opts.height,
                        u = {};
                    return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && d || (l = e, d = o), i = Math.min(1, e / l, o / d), l *= i, d *= i, l > e - .5 && (l = e), d > o - .5 && (d = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9, d > l / a ? d = l / a : l > d * a && (l = d * a)), u.width = l, u.height = d, u)
                },
                update: function (t) {
                    var e = this;
                    n.each(e.slides, function (n, o) {
                        e.updateSlide(o, t)
                    })
                },
                updateSlide: function (t, e) {
                    var o = this,
                        i = t && t.$content,
                        a = t.width || t.opts.width,
                        s = t.height || t.opts.height,
                        r = t.$slide;
                    o.adjustCaption(t), i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t, e)
                },
                centerSlide: function (t) {
                    var e = this,
                        o = e.current,
                        i = o.$slide;
                    !e.isClosing && o && (i.siblings().css({
                        transform: "",
                        opacity: ""
                    }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, void 0 === t ? 0 : t, function () {
                        i.css({
                            transform: "",
                            opacity: ""
                        }), o.isComplete || e.complete()
                    }, !1))
                },
                isMoved: function (t) {
                    var e, o, i = t || this.current;
                    return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5))
                },
                updateCursor: function (t, e) {
                    var o, i, a = this,
                        s = a.current,
                        r = a.$refs.container;
                    s && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = a.canPan(t, e), i = !!o || a.isZoomable(), r.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? r.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || a.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"))
                },
                isZoomable: function () {
                    var t, e = this,
                        n = e.current;
                    if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                        if (!n.isLoaded) return !0;
                        if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0
                    }
                    return !1
                },
                isScaledDown: function (t, e) {
                    var o = this,
                        i = !1,
                        a = o.current,
                        s = a.$content;
                    return void 0 !== t && void 0 !== e ? i = t < a.width && e < a.height : s && (i = n.fancybox.getTranslate(s), i = i.width < a.width && i.height < a.height), i
                },
                canPan: function (t, e) {
                    var o = this,
                        i = o.current,
                        a = null,
                        s = !1;
                    return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = o.getFitPos(i), void 0 !== t && void 0 !== e ? a = {
                        width: t,
                        height: e
                    } : i.isComplete && (a = n.fancybox.getTranslate(i.$content)), a && s && (s = Math.abs(a.width - s.width) > 1.5 || Math.abs(a.height - s.height) > 1.5)), s
                },
                loadSlide: function (t) {
                    var e, o, i, a = this;
                    if (!t.isLoading && !t.isLoaded) {
                        if (t.isLoading = !0, !1 === a.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                        switch (e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                            case "image":
                                a.setImage(t);
                                break;
                            case "iframe":
                                a.setIframe(t);
                                break;
                            case "html":
                                a.setContent(t, t.src || t.content);
                                break;
                            case "video":
                                a.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                break;
                            case "inline":
                                n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                                break;
                            case "ajax":
                                a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                    url: t.src,
                                    success: function (e, n) {
                                        "success" === n && a.setContent(t, e)
                                    },
                                    error: function (e, n) {
                                        e && "abort" !== n && a.setError(t)
                                    }
                                })), o.one("onReset", function () {
                                    i.abort()
                                });
                                break;
                            default:
                                a.setError(t)
                        }
                        return !0
                    }
                },
                setImage: function (t) {
                    var o, i = this;
                    setTimeout(function () {
                        var e = t.$image;
                        i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t)
                    }, 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, o = e.createElement("img"), o.onerror = function () {
                        n(this).remove(), t.$ghost = null
                    }, o.onload = function () {
                        i.afterLoad(t)
                    }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t)
                },
                checkSrcset: function (e) {
                    var n, o, i, a, s = e.opts.srcset || e.opts.image.srcset;
                    if (s) {
                        i = t.devicePixelRatio || 1, a = t.innerWidth * i, o = s.split(",").map(function (t) {
                            var e = {};
                            return t.trim().split(/\s+/).forEach(function (t, n) {
                                var o = parseInt(t.substring(0, t.length - 1), 10);
                                if (0 === n) return e.url = t;
                                o && (e.value = o, e.postfix = t[t.length - 1])
                            }), e
                        }), o.sort(function (t, e) {
                            return t.value - e.value
                        });
                        for (var r = 0; r < o.length; r++) {
                            var c = o[r];
                            if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= i) {
                                n = c;
                                break
                            }
                        }!n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s)
                    }
                },
                setBigImage: function (t) {
                    var o = this,
                        i = e.createElement("img"),
                        a = n(i);
                    t.$image = a.one("error", function () {
                        o.setError(t)
                    }).one("load", function () {
                        var e;
                        t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && (e = t.opts.sizes, e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), a.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
                            t.$ghost && !o.isClosing && t.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t))
                    }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error")
                },
                resolveImageSlideSize: function (t, e, n) {
                    var o = parseInt(t.opts.width, 10),
                        i = parseInt(t.opts.height, 10);
                    t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i)
                },
                setIframe: function (t) {
                    var e, o = this,
                        i = t.opts.iframe,
                        a = t.$slide;
                    t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (o.showLoading(t), e.on("load.fb error.fb", function (e) {
                        this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
                    }), a.on("refresh.fb", function () {
                        var n, o, s = t.$content,
                            r = i.css.width,
                            c = i.css.height;
                        if (1 === e[0].isReady) {
                            try {
                                n = e.contents(), o = n.find("body")
                            } catch (t) {}
                            o && o.length && o.children().length && (a.css("overflow", "visible"), s.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))), s.css("width", r || "").css("max-width", ""), void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))), s.css("height", c || ""), a.css("overflow", "auto")), s.removeClass("fancybox-is-hidden")
                        }
                    })) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", function () {
                        try {
                            n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                        } catch (t) {}
                        n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                    })
                },
                setContent: function (t, e) {
                    var o = this;
                    o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
                        n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                    }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t))
                },
                setError: function (t) {
                    t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                },
                showLoading: function (t) {
                    var e = this;
                    (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                },
                hideLoading: function (t) {
                    var e = this;
                    (t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                },
                afterLoad: function (t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
                        return 2 == t.button && t.preventDefault(), !0
                    }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
                },
                adjustCaption: function (t) {
                    var e, n = this,
                        o = t || n.current,
                        i = o.opts.caption,
                        a = o.opts.preventCaptionOverlap,
                        s = n.$refs.caption,
                        r = !1;
                    s.toggleClass("fancybox-caption--separate", a), a && i && i.length && (o.pos !== n.currPos ? (e = s.clone().appendTo(s.parent()), e.children().eq(0).empty().html(i), r = e.outerHeight(!0), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)), o.$slide.css("padding-bottom", r || ""))
                },
                adjustLayout: function (t) {
                    var e, n, o, i, a = this,
                        s = t || a.current;
                    s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], i = s.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n))
                },
                revealContent: function (t) {
                    var e, o, i, a, s = this,
                        r = t.$slide,
                        c = !1,
                        l = !1,
                        d = s.isMoved(t),
                        u = t.isRevealed;
                    return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), !d && t.pos === s.currPos && i || (e = !1), "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? c = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, c.scaleX = c.width / l.width, c.scaleY = c.height / l.height, a = t.opts.zoomOpacity, "auto" == a && (a = Math.abs(t.width / t.height - l.width / l.height) > .1), a && (l.opacity = .1, c.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), p(t.$content), void n.fancybox.animate(t.$content, c, i, function () {
                        s.isAnimating = !1, s.complete()
                    })) : (s.updateSlide(t), e ? (n.fancybox.stop(r), o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(r), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(r, "fancybox-slide--current", i, function () {
                        r.removeClass(o).css({
                            transform: "",
                            opacity: ""
                        }), t.pos === s.currPos && s.complete()
                    }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === s.currPos && s.complete())))
                },
                getThumbPos: function (t) {
                    var e, o, i, a, s, r = !1,
                        c = t.$thumb;
                    return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), i = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), s = parseFloat(c.css("border-left-width") || 0), r = {
                        top: e.top + o,
                        left: e.left + s,
                        width: e.width - i - s,
                        height: e.height - o - a,
                        scaleX: 1,
                        scaleY: 1
                    }, e.width > 0 && e.height > 0 && r)
                },
                complete: function () {
                    var t, e = this,
                        o = e.current,
                        i = {};
                    !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), p(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, o) {
                        o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
                    }), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                    }), o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"), t.length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0))
                },
                preload: function (t) {
                    var e, n, o = this;
                    o.group.length < 2 || (n = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n))
                },
                focus: function (t, o) {
                    var i, a, s = this,
                        r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                    s.isClosing || (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"), i = i.filter(r).filter(function () {
                        return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                    }), i.length ? (a = i.index(e.activeElement), t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"))
                },
                activate: function () {
                    var t = this;
                    n(".fancybox-container").each(function () {
                        var e = n(this).data("FancyBox");
                        e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                    }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                },
                close: function (t, e) {
                    var o, i, a, s, r, c, l, u = this,
                        f = u.current,
                        h = function () {
                            u.cleanUp(t)
                        };
                    return !u.isClosing && (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, d(function () {
                        u.update()
                    }), !1) : (u.removeEvents(), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = {
                            top: s.top,
                            left: s.left,
                            scaleX: s.width / l.width,
                            scaleY: s.height / l.height,
                            width: l.width,
                            height: l.height
                        }, r = f.opts.zoomOpacity,
                        "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), p(a), n.fancybox.animate(a, l, i, h), !0) : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), !0)))
                },
                cleanUp: function (e) {
                    var o, i, a, s = this,
                        r = s.current.opts.$orig;
                    s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (i = t.scrollX, a = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
                },
                trigger: function (t, e) {
                    var o, i = Array.prototype.slice.call(arguments, 1),
                        a = this,
                        s = e && e.opts ? e : a.current;
                    if (s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o) return o;
                    "afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i)
                },
                updateControls: function () {
                    var t = this,
                        o = t.current,
                        i = o.index,
                        a = t.$refs.container,
                        s = t.$refs.caption,
                        r = o.opts.caption;
                    o.$slide.trigger("refresh"), r && r.length ? (t.$caption = s, s.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), a.find("[data-fancybox-count]").html(t.group.length), a.find("[data-fancybox-index]").html(i + 1), a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
                },
                hideControls: function (t) {
                    var e = this,
                        n = ["infobar", "toolbar", "nav"];
                    !t && e.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map(function (t) {
                        return "fancybox-show-" + t
                    }).join(" ")), this.hasHiddenControls = !0
                },
                showControls: function () {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        n = t.$refs.container;
                    t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
                },
                toggleControls: function () {
                    this.hasHiddenControls ? this.showControls() : this.hideControls()
                }
            }), n.fancybox = {
                version: "3.5.7",
                defaults: a,
                getInstance: function (t) {
                    var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        o = Array.prototype.slice.call(arguments, 1);
                    return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
                },
                open: function (t, e, n) {
                    return new b(t, e, n)
                },
                close: function (t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close(t))
                },
                destroy: function () {
                    this.close(!0), r.add("body").off("click.fb-start", "**")
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: function () {
                    var n = e.createElement("div");
                    return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
                }(),
                getTranslate: function (t) {
                    var e;
                    return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
                        top: e.top || 0,
                        left: e.left || 0,
                        width: e.width,
                        height: e.height,
                        opacity: parseFloat(t.css("opacity"))
                    })
                },
                setTranslate: function (t, e) {
                    var n = "",
                        o = {};
                    if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o)
                },
                animate: function (t, e, o, i, a) {
                    var s, r = this;
                    n.isFunction(o) && (i = o, o = null), r.stop(t), s = r.getTranslate(t), t.on(f, function (c) {
                        (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (r.stop(t), n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, {
                            top: e.top,
                            left: e.left,
                            width: s.width * e.scaleX,
                            height: s.height * e.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== a && t.removeClass(e), n.isFunction(i) && i(c))
                    }), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
                        t.trigger(f)
                    }, o + 33))
                },
                stop: function (t, e) {
                    t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                }
            }, n.fn.fancybox = function (t) {
                var e;
                return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, i) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, i), this
            }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
                n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: n(this)
                })
            }),
            function () {
                var t = null;
                r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
                    switch (e.type) {
                        case "mousedown":
                            t = n(this);
                            break;
                        case "mouseup":
                            t = null;
                            break;
                        case "focusin":
                            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            n(".fancybox-button").removeClass("fancybox-focus")
                    }
                })
            }()
    }
}(window, document, jQuery),
function (t) {
    "use strict";
    var e = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        },
        n = function (e, n, o) {
            if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function (t, n) {
                e = e.replace("$" + t, n || "")
            }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
        };
    t(document).on("objectNeedsType.fb", function (o, i, a) {
        var s, r, c, l, d, u, f, p = a.src || "",
            h = !1;
        s = t.extend(!0, {}, e, a.opts.media), t.each(s, function (e, o) {
            if (c = p.match(o.matcher)) {
                if (h = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
                    d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");
                    for (var i = 0; i < d.length; ++i) {
                        var s = d[i].split("=", 2);
                        2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return l = t.extend(!0, {}, o.params, a.opts[e], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1
            }
        }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), t.extend(a, {
            type: h,
            src: p,
            origSrc: a.src,
            contentSource: f,
            contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
        })) : p && (a.type = a.opts.defaultType)
    });
    var o = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function (t) {
            var e, n = this;
            if (this[t].loaded) return void setTimeout(function () {
                n.done(t)
            });
            this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
                n[t].loaded = !0, n.done(t)
            } : e.onload = function () {
                n[t].loaded = !0, n.done(t)
            }, document.body.appendChild(e))
        },
        done: function (e) {
            var n, o, i;
            "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? i = new YT.Player(o.attr("id"), {
                events: {
                    onStateChange: function (t) {
                        0 == t.data && n.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (i = new Vimeo.Player(o), i.on("ended", function () {
                n.next()
            })))
        }
    };
    t(document).on({
        "afterShow.fb": function (t, e, n) {
            e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
        }
    })
}(jQuery),
function (t, e, n) {
    "use strict";
    var o = function () {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
                return t.setTimeout(e, 1e3 / 60)
            }
        }(),
        i = function () {
            return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
                t.clearTimeout(e)
            }
        }(),
        a = function (e) {
            var n = [];
            e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
            for (var o in e) e[o].pageX ? n.push({
                x: e[o].pageX,
                y: e[o].pageY
            }) : e[o].clientX && n.push({
                x: e[o].clientX,
                y: e[o].clientY
            });
            return n
        },
        s = function (t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        r = function (t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
                if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        c = function (e) {
            var n = t.getComputedStyle(e)["overflow-y"],
                o = t.getComputedStyle(e)["overflow-x"],
                i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
            return i || a
        },
        l = function (t) {
            for (var e = !1;;) {
                if (e = c(t.get(0))) break;
                if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break
            }
            return e
        },
        d = function (t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
        };
    d.prototype.destroy = function () {
        var t = this;
        t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
    }, d.prototype.ontouchstart = function (o) {
        var i = this,
            c = n(o.target),
            d = i.instance,
            u = d.current,
            f = u.$slide,
            p = u.$content,
            h = "touchstart" == o.type;
        if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
            i.realPoints = i.startPoints = a(o), i.startPoints.length && (u.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = p, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                top: 0,
                left: 0
            }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))))
        }
    }, d.prototype.onscroll = function (t) {
        var n = this;
        n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0)
    }, d.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void(e.canTap = !1) : (e.newPoints = a(t), void((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, d.prototype.onSwipe = function (e) {
        var a, s = this,
            r = s.instance,
            c = s.isSwiping,
            l = s.sliderStartPos.left || 0;
        if (!0 !== c) "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), s.sliderLastPos = {
            top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
            left: l
        }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {
            s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
                var o = e.pos - s.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
                })
            }), s.$container.addClass("fancybox-is-sliding"))
        });
        else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1, r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void(s.isScrolling = !0);
            r.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(r.slides, function (t, e) {
                var o, i;
                n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }), e.pos === r.current.pos && (s.sliderStartPos.top = o.top - i.top, s.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, {
                    top: o.top - i.top,
                    left: o.left - i.left
                })
            }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
        }
    }, d.prototype.onPan = function () {
        var t = this;
        if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)) return void(t.startPoints = t.newPoints);
        t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, d.prototype.limitMovement = function () {
        var t, e, n, o, i, a, s = this,
            r = s.canvasWidth,
            c = s.canvasHeight,
            l = s.distanceX,
            d = s.distanceY,
            u = s.contentStartPos,
            f = u.left,
            p = u.top,
            h = u.width,
            g = u.height;
        return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
            top: a,
            left: i
        }
    }, d.prototype.limitPosition = function (t, e, n, o) {
        var i = this,
            a = i.canvasWidth,
            s = i.canvasHeight;
        return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
            top: e,
            left: t
        }
    }, d.prototype.onZoom = function () {
        var e = this,
            a = e.contentStartPos,
            r = a.width,
            c = a.height,
            l = a.left,
            d = a.top,
            u = s(e.newPoints[0], e.newPoints[1]),
            f = u / e.startDistanceBetweenFingers,
            p = Math.floor(r * f),
            h = Math.floor(c * f),
            g = (r - p) * e.percentageOfImageAtPinchPointX,
            b = (c - h) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            y = m - e.centerPointStartX,
            x = v - e.centerPointStartY,
            w = l + (g + y),
            $ = d + (b + x),
            S = {
                top: $,
                left: w,
                scaleX: f,
                scaleY: f
            };
        e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && i(e.requestId), e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, d.prototype.ontouchend = function (t) {
        var o = this,
            s = o.isSwiping,
            r = o.isPanning,
            c = o.isZooming,
            l = o.isScrolling;
        if (o.endPoints = a(t), o.dMs = Math.max((new Date).getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);
        o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l)
    }, d.prototype.endSwiping = function (t, e) {
        var o = this,
            i = !1,
            a = o.instance.group.length,
            s = Math.abs(o.distanceX),
            r = "x" == t && a > 1 && (o.dMs > 130 && s > 10 || s > 50);
        o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
            top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
            opacity: 0
        }, 200), i = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)), !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding")
    }, d.prototype.endPanning = function () {
        var t, e, o, i = this;
        i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, e = i.contentLastPos.top + 500 * i.velocityY), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 366))
    }, d.prototype.endZooming = function () {
        var t, e, o, i, a = this,
            s = a.instance.current,
            r = a.newWidth,
            c = a.newHeight;
        a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
            top: e,
            left: t,
            width: r,
            height: c,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.animate(a.$content, o, 150)))
    }, d.prototype.onTap = function (e) {
        var o, i = this,
            s = n(e.target),
            r = i.instance,
            c = r.current,
            l = e && a(e) || i.startPoints,
            d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
            u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
            f = function (t) {
                var o = c.opts[t];
                if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
                    case "close":
                        r.close(i.startEvent);
                        break;
                    case "toggleControls":
                        r.toggleControls();
                        break;
                    case "next":
                        r.next();
                        break;
                    case "nextOrClose":
                        r.group.length > 1 ? r.next() : r.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent))
                }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
            else if (s.is(".fancybox-slide")) o = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
                o = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
                f("dblclick" + o)
            } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function () {
                i.tapped = null, r.isAnimating || f("click" + o)
            }, 500) : f("click" + o);
            return this
        }
    }, n(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new d(e))
    }).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery),
function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var n = function (t) {
        this.instance = t, this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function () {
            var t = this,
                n = t.instance,
                o = n.group[n.currIndex].opts.slideShow;
            t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                t.toggle()
            }), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
        },
        set: function (t) {
            var n = this,
                o = n.instance,
                i = o.current;
            i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
                scaleX: 1
            }, i.opts.slideShow.speed), n.timer = setTimeout(function () {
                o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0)
            }, i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls())
        },
        clear: function () {
            var t = this;
            clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
        },
        start: function () {
            var t = this,
                e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
        },
        stop: function () {
            var t = this,
                e = t.instance.current;
            t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
        },
        toggle: function () {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on({
        "onInit.fb": function (t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function (t, e, n, o) {
            var i = e && e.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        },
        "afterShow.fb": function (t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        },
        "afterKeydown.fb": function (n, o, i, a, s) {
            var r = o && o.SlideShow;
            !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
            o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set())
    })
}(document, jQuery),
function (t, e) {
    "use strict";
    var n = function () {
        for (var e = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], n = {}, o = 0; o < e.length; o++) {
            var i = e[o];
            if (i && i[1] in t) {
                for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
                return n
            }
        }
        return !1
    }();
    if (n) {
        var o = {
            request: function (e) {
                e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function () {
                t[n.exitFullscreen]()
            },
            toggle: function (e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function () {
                return Boolean(t[n.fullscreenElement])
            },
            enabled: function () {
                return Boolean(t[n.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), e(t).on(n.fullscreenchange, function () {
            var t = o.isFullscreen(),
                n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })
    }
    e(t).on({
        "onInit.fb": function (t, e) {
            var i;
            if (!n) return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
            e && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle()
            }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
            e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle())
        },
        "beforeClose.fb": function (t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    })
}(document, jQuery),
function (t, e) {
    "use strict";
    var n = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var o = function (t) {
        this.init(t)
    };
    e.extend(o.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function (t) {
            var e = this,
                n = t.group,
                o = 0;
            e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(o > 1)); i++);
            o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        },
        create: function () {
            var t, o = this,
                i = o.instance,
                a = o.opts.parentEl,
                s = [];
            o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), o.$grid.on("click", "a", function () {
                i.jumpTo(e(this).attr("data-index"))
            })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, function (e, n) {
                t = n.thumb, t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0))
        },
        focus: function (t) {
            var e, n, o = this,
                i = o.$list,
                a = o.$grid;
            o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = e.position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
                scrollTop: i.scrollTop() + n.top
            }, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function () {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
        },
        hide: function () {
            this.isVisible = !1, this.update()
        },
        show: function () {
            this.isVisible = !0, this.update()
        },
        toggle: function () {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function (t, e) {
            var n;
            e && !e.Thumbs && (n = new o(e), n.isActive && !0 === n.opts.autoStart && n.show())
        },
        "beforeShow.fb": function (t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250)
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
            var a = e && e.Thumbs;
            a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
        },
        "beforeClose.fb": function (t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery),
function (t, e) {
    "use strict";

    function n(t) {
        var e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(t).replace(/[&<>"'`=\/]/g, function (t) {
            return e[t]
        })
    }
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function (t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", function () {
        var t, o, i = e.fancybox.getInstance(),
            a = i.current || null;
        a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
            src: i.translate(i, o),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function (t, e) {
                    i.$refs.container.one("beforeClose.fb", function () {
                        t.close(null, 0)
                    }), e.$content.find(".fancybox-share__button").click(function () {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function (t, e, n) {
    "use strict";

    function o() {
        var e = t.location.hash.substr(1),
            n = e.split("-"),
            o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
            i = n.join("-");
        return {
            hash: e,
            index: o < 1 ? 1 : o,
            gallery: i
        }
    }

    function i(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }

    function a(t) {
        var e, n;
        return !!t && (e = t.current ? t.current.opts : t.opts, "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n)
    }
    n.escapeSelector || (n.escapeSelector = function (t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    }), n(function () {
        !1 !== n.fancybox.defaults.hash && (n(e).on({
            "onInit.fb": function (t, e) {
                var n, i;
                !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function (n, o, i, s) {
                var r;
                i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () {
                    "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function (n, o, i) {
                i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null)
            }
        }), n(t).on("hashchange.fb", function () {
            var t = o(),
                e = null;
            n.each(n(".fancybox-container").get().reverse(), function (t, o) {
                var i = n(o).data("FancyBox");
                if (i && i.currentHash) return e = i, !1
            }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t)
        }), setTimeout(function () {
            n.fancybox.getInstance() || i(o())
        }, 50))
    })
}(window, document, jQuery),
function (t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function (t, e, o) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                var o = e.current,
                    i = (new Date).getTime();
                e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery);
(function ($) {
    $.fn.initGalleryFancybox = function () {
        $('a.fancy-gallery', this).fancybox({
            caption: function (instance, item) {
                var slideInfo = $('.slide-info', this);
                if ($('> *', slideInfo).length) {
                    return slideInfo.clone().html();
                }
            },
            onInit: function (instance) {
                instance.$refs.caption.addClass('fancybox-title');
                instance.$refs.caption.parent().addClass('slideinfo');
            }
        });
    };
    $.fn.initPortfolioFancybox = function () {
        $('a.fancy, .fancy-link-inner a', this).fancybox();
        $('.portfolio-item a.vimeo, .portfolio-item a.youtube', this).fancybox({
            type: 'iframe'
        });
        $('.portfolio-item a.self_video', this).click(function (e) {
            e.preventDefault();
            var $a = $(this);
            $.fancybox.open({
                type: 'html',
                maxWidth: 1200,
                content: '<div id="fancybox-video"><video width="100%" height="100%" autoplay="autoplay" controls="controls" src="' + $a.attr('href') + '" preload="none"></video></div>',
                afterShow: function (instance, current) {
                    $('video', current.$content).mediaelementplayer();
                }
            });
        });
    };
    $.fn.initBlogFancybox = function () {
        $('a.fancy, .fancy-link-inner a', this).fancybox();
        $('.blog article a.youtube, .blog article a.vimeo', this).fancybox({
            type: 'iframe'
        });
    };
    $.fn.initProductFancybox = function () {
        let isTouch = window.gemSettings.isTouch;
        $('a.fancy-product-gallery', this).fancybox({
            arrows: isTouch ? false : true,
            infobar: true,
            clickOutside: 'close',
            buttons: ['zoom', 'fullScreen', 'thumbs', 'close', ],
            touch: {
                vertical: false,
                momentum: false
            },
            loop: true,
            animationDuration: 300,
            backFocus: false,
            mobile: {
                fullScreen: false,
                arrows: false,
                animationEffect: 'fade',
                buttons: ['zoom', 'fullScreen', 'close', ],
                clickContent: function (current, event) {
                    return current.type === "image" ? "zoom" : false;
                },
                clickSlide: function (current, event) {
                    return "close";
                },
            },
        });
    };
    $(document).initGalleryFancybox();
    $(document).initPortfolioFancybox();
    $(document).initBlogFancybox();
    $(document).initProductFancybox();
    $('a.fancy, .fancy-link-inner a').fancybox();
})(jQuery);
! function () {
    "use strict";
    var e = function (e) {
        return Math.abs(parseInt(e, 10))
    };
    const t = (e, t) => {
        const n = new Map([
            ["init", "init"],
            ["validation_failed", "invalid"],
            ["acceptance_missing", "unaccepted"],
            ["spam", "spam"],
            ["aborted", "aborted"],
            ["mail_sent", "sent"],
            ["mail_failed", "failed"],
            ["submitting", "submitting"],
            ["resetting", "resetting"],
            ["payment_required", "payment-required"]
        ]);
        n.has(t) && (t = n.get(t)), Array.from(n.values()).includes(t) || (t = `custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);
        const r = e.getAttribute("data-status");
        return e.wpcf7.status = t, e.setAttribute("data-status", t), e.classList.add(t), r && r !== t && e.classList.remove(r), t
    };
    var n = function (e, t, n) {
        var r = new CustomEvent("wpcf7".concat(t), {
            bubbles: !0,
            detail: n
        });
        "string" == typeof e && (e = document.querySelector(e)), e.dispatchEvent(r)
    };

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(n), !0).forEach((function (t) {
                r(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var o = function (e) {
            var t = wpcf7.api,
                n = t.root,
                r = t.namespace,
                a = void 0 === r ? "contact-form-7/v1" : r;
            return i.reduceRight((function (e, t) {
                return function (n) {
                    return t(n, e)
                }
            }), (function (e) {
                var t, r, o = e.url,
                    i = e.path,
                    s = e.endpoint,
                    u = e.headers,
                    l = e.body,
                    f = e.data,
                    p = function (e, t) {
                        if (null == e) return {};
                        var n, r, a = function (e, t) {
                            if (null == e) return {};
                            var n, r, a = {},
                                c = Object.keys(e);
                            for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var c = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                        }
                        return a
                    }(e, ["url", "path", "endpoint", "headers", "body", "data"]);
                "string" == typeof s && (t = a.replace(/^\/|\/$/g, ""), i = (r = s.replace(/^\//, "")) ? t + "/" + r : t), "string" == typeof i && (-1 !== n.indexOf("?") && (i = i.replace("?", "&")), i = i.replace(/^\//, ""), o = n + i), delete(u = c({
                    Accept: "application/json, */*;q=0.1"
                }, u))["X-WP-Nonce"], f && (l = JSON.stringify(f), u["Content-Type"] = "application/json");
                var d = {
                        code: "fetch_error",
                        message: "You are probably offline."
                    },
                    w = {
                        code: "invalid_json",
                        message: "The response is not a valid JSON response."
                    };
                return window.fetch(o || i || window.location.href, c(c({}, p), {}, {
                    headers: u,
                    body: l
                })).then((function (e) {
                    return Promise.resolve(e).then((function (e) {
                        if (e.status >= 200 && e.status < 300) return e;
                        throw e
                    })).then((function (e) {
                        if (204 === e.status) return null;
                        if (e && e.json) return e.json().catch((function () {
                            throw w
                        }));
                        throw w
                    }))
                }), (function () {
                    throw d
                }))
            }))(e)
        },
        i = [];

    function s(e, r = {}) {
        if (wpcf7.blocked) return u(e), void t(e, "submitting");
        const a = new FormData(e);
        r.submitter && r.submitter.name && a.append(r.submitter.name, r.submitter.value);
        const c = {
                contactFormId: e.wpcf7.id,
                pluginVersion: e.wpcf7.pluginVersion,
                contactFormLocale: e.wpcf7.locale,
                unitTag: e.wpcf7.unitTag,
                containerPostId: e.wpcf7.containerPost,
                status: e.wpcf7.status,
                inputs: Array.from(a, (e => {
                    const t = e[0],
                        n = e[1];
                    return !t.match(/^_/) && {
                        name: t,
                        value: n
                    }
                })).filter((e => !1 !== e)),
                formData: a
            },
            i = t => {
                const n = document.createElement("li");
                n.setAttribute("id", t.error_id), t.idref ? n.insertAdjacentHTML("beforeend", `<a href="#${t.idref}">${t.message}</a>`) : n.insertAdjacentText("beforeend", t.message), e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(n)
            },
            s = t => {
                const n = e.querySelector(t.into),
                    r = n.querySelector(".wpcf7-form-control");
                r.classList.add("wpcf7-not-valid"), r.setAttribute("aria-describedby", t.error_id);
                const a = document.createElement("span");
                a.setAttribute("class", "wpcf7-not-valid-tip"), a.setAttribute("aria-hidden", "true"), a.insertAdjacentText("beforeend", t.message), n.appendChild(a), n.querySelectorAll("[aria-invalid]").forEach((e => {
                    e.setAttribute("aria-invalid", "true")
                })), r.closest(".use-floating-validation-tip") && (r.addEventListener("focus", (e => {
                    a.setAttribute("style", "display: none")
                })), a.addEventListener("mouseover", (e => {
                    a.setAttribute("style", "display: none")
                })))
            };
        o({
            endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
            method: "POST",
            body: a,
            wpcf7: {
                endpoint: "feedback",
                form: e,
                detail: c
            }
        }).then((r => {
            const a = t(e, r.status);
            return c.status = r.status, c.apiResponse = r, ["invalid", "unaccepted", "spam", "aborted"].includes(a) ? n(e, a, c) : ["sent", "failed"].includes(a) && n(e, `mail${a}`, c), n(e, "submit", c), r
        })).then((t => {
            t.posted_data_hash && (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value = t.posted_data_hash), "mail_sent" === t.status && (e.reset(), e.wpcf7.resetOnMailSent = !0), t.invalid_fields && (t.invalid_fields.forEach(i), t.invalid_fields.forEach(s)), e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend", t.message), e.querySelectorAll(".wpcf7-response-output").forEach((e => {
                e.innerText = t.message
            }))
        })).catch((e => console.error(e)))
    }
    o.use = function (e) {
        i.unshift(e)
    }, o.use(((e, r) => {
        if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
            const {
                form: r,
                detail: a
            } = e.wpcf7;
            u(r), n(r, "beforesubmit", a), t(r, "submitting")
        }
        return r(e)
    }));
    const u = e => {
        e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText = "", e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText = "", e.querySelectorAll(".wpcf7-not-valid-tip").forEach((e => {
            e.remove()
        })), e.querySelectorAll("[aria-invalid]").forEach((e => {
            e.setAttribute("aria-invalid", "false")
        })), e.querySelectorAll(".wpcf7-form-control").forEach((e => {
            e.removeAttribute("aria-describedby"), e.classList.remove("wpcf7-not-valid")
        })), e.querySelectorAll(".wpcf7-response-output").forEach((e => {
            e.innerText = ""
        }))
    };

    function l(e) {
        var r = new FormData(e),
            a = {
                contactFormId: e.wpcf7.id,
                pluginVersion: e.wpcf7.pluginVersion,
                contactFormLocale: e.wpcf7.locale,
                unitTag: e.wpcf7.unitTag,
                containerPostId: e.wpcf7.containerPost,
                status: e.wpcf7.status,
                inputs: Array.from(r, (function (e) {
                    var t = e[0],
                        n = e[1];
                    return !t.match(/^_/) && {
                        name: t,
                        value: n
                    }
                })).filter((function (e) {
                    return !1 !== e
                })),
                formData: r
            };
        o({
            endpoint: "contact-forms/".concat(e.wpcf7.id, "/refill"),
            method: "GET",
            wpcf7: {
                endpoint: "refill",
                form: e,
                detail: a
            }
        }).then((function (r) {
            e.wpcf7.resetOnMailSent ? (delete e.wpcf7.resetOnMailSent, t(e, "mail_sent")) : t(e, "init"), a.apiResponse = r, n(e, "reset", a)
        })).catch((function (e) {
            return console.error(e)
        }))
    }
    o.use((function (e, n) {
        if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
            var r = e.wpcf7,
                a = r.form;
            r.detail, u(a), t(a, "resetting")
        }
        return n(e)
    }));
    var f = function (e, t) {
            var n = function (n) {
                var r = t[n];
                e.querySelectorAll('input[name="'.concat(n, '"]')).forEach((function (e) {
                    e.value = ""
                })), e.querySelectorAll("img.wpcf7-captcha-".concat(n)).forEach((function (e) {
                    e.setAttribute("src", r)
                }));
                var a = /([0-9]+)\.(png|gif|jpeg)$/.exec(r);
                a && e.querySelectorAll('input[name="_wpcf7_captcha_challenge_'.concat(n, '"]')).forEach((function (e) {
                    e.value = a[1]
                }))
            };
            for (var r in t) n(r)
        },
        p = function (e, t) {
            var n = function (n) {
                var r = t[n][0],
                    a = t[n][1];
                e.querySelectorAll(".wpcf7-form-control-wrap.".concat(n)).forEach((function (e) {
                    e.querySelector('input[name="'.concat(n, '"]')).value = "", e.querySelector(".wpcf7-quiz-label").textContent = r, e.querySelector('input[name="_wpcf7_quiz_answer_'.concat(n, '"]')).value = a
                }))
            };
            for (var r in t) n(r)
        };

    function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function w(t) {
        const n = new FormData(t);
        t.wpcf7 = {
                id: e(n.get("_wpcf7")),
                status: t.getAttribute("data-status"),
                pluginVersion: n.get("_wpcf7_version"),
                locale: n.get("_wpcf7_locale"),
                unitTag: n.get("_wpcf7_unit_tag"),
                containerPost: e(n.get("_wpcf7_container_post")),
                parent: t.closest(".wpcf7")
            }, t.querySelectorAll(".has-spinner").forEach((e => {
                e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>')
            })),
            function (e) {
                e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((function (t) {
                    t.addEventListener("change", (function (t) {
                        var n = t.target.getAttribute("name");
                        e.querySelectorAll('input[type="checkbox"][name="'.concat(n, '"]')).forEach((function (e) {
                            e !== t.target && (e.checked = !1)
                        }))
                    }))
                }))
            }(t),
            function (e) {
                e.querySelectorAll(".has-free-text").forEach((function (t) {
                    var n = t.querySelector("input.wpcf7-free-text"),
                        r = t.querySelector('input[type="checkbox"], input[type="radio"]');
                    n.disabled = !r.checked, e.addEventListener("change", (function (e) {
                        n.disabled = !r.checked, e.target === r && r.checked && n.focus()
                    }))
                }))
            }(t),
            function (e) {
                e.querySelectorAll(".wpcf7-validates-as-url").forEach((function (e) {
                    e.addEventListener("change", (function (t) {
                        var n = e.value.trim();
                        n && !n.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== n.indexOf(".") && (n = "http://" + (n = n.replace(/^\/+/, ""))), e.value = n
                    }))
                }))
            }(t),
            function (e) {
                if (e.querySelector(".wpcf7-acceptance") && !e.classList.contains("wpcf7-acceptance-as-validation")) {
                    var t = function () {
                        var t = !0;
                        e.querySelectorAll(".wpcf7-acceptance").forEach((function (e) {
                            if (t && !e.classList.contains("optional")) {
                                var n = e.querySelector('input[type="checkbox"]');
                                (e.classList.contains("invert") && n.checked || !e.classList.contains("invert") && !n.checked) && (t = !1)
                            }
                        })), e.querySelectorAll(".wpcf7-submit").forEach((function (e) {
                            e.disabled = !t
                        }))
                    };
                    t(), e.addEventListener("change", (function (e) {
                        t()
                    })), e.addEventListener("wpcf7reset", (function (e) {
                        t()
                    }))
                }
            }(t),
            function (t) {
                var n = function (t, n) {
                        var r = e(t.getAttribute("data-starting-value")),
                            a = e(t.getAttribute("data-maximum-value")),
                            c = e(t.getAttribute("data-minimum-value")),
                            o = t.classList.contains("down") ? r - n.value.length : n.value.length;
                        t.setAttribute("data-current-value", o), t.innerText = o, a && a < n.value.length ? t.classList.add("too-long") : t.classList.remove("too-long"), c && n.value.length < c ? t.classList.add("too-short") : t.classList.remove("too-short")
                    },
                    a = function (e) {
                        e = function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? d(Object(n), !0).forEach((function (t) {
                                    r(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            init: !1
                        }, e), t.querySelectorAll(".wpcf7-character-count").forEach((function (r) {
                            var a = r.getAttribute("data-target-name"),
                                c = t.querySelector('[name="'.concat(a, '"]'));
                            c && (c.value = c.defaultValue, n(r, c), e.init && c.addEventListener("keyup", (function (e) {
                                n(r, c)
                            })))
                        }))
                    };
                a({
                    init: !0
                }), t.addEventListener("wpcf7reset", (function (e) {
                    a()
                }))
            }(t), window.addEventListener("load", (e => {
                wpcf7.cached && t.reset()
            })), t.addEventListener("reset", (e => {
                wpcf7.reset(t)
            })), t.addEventListener("submit", (e => {
                const n = e.submitter;
                wpcf7.submit(t, {
                    submitter: n
                }), e.preventDefault()
            })), t.addEventListener("wpcf7submit", (e => {
                e.detail.apiResponse.captcha && f(t, e.detail.apiResponse.captcha), e.detail.apiResponse.quiz && p(t, e.detail.apiResponse.quiz)
            })), t.addEventListener("wpcf7reset", (e => {
                e.detail.apiResponse.captcha && f(t, e.detail.apiResponse.captcha), e.detail.apiResponse.quiz && p(t, e.detail.apiResponse.quiz)
            }))
    }
    document.addEventListener("DOMContentLoaded", (e => {
        var t;
        if ("undefined" == typeof wpcf7) return void console.error("wpcf7 is not defined.");
        if (void 0 === wpcf7.api) return void console.error("wpcf7.api is not defined.");
        if ("function" != typeof window.fetch) return void console.error("Your browser doesn't support window.fetch().");
        if ("function" != typeof window.FormData) return void console.error("Your browser doesn't support window.FormData().");
        const n = document.querySelectorAll(".wpcf7 > form");
        "function" == typeof n.forEach ? (wpcf7 = {
            init: w,
            submit: s,
            reset: l,
            ...null !== (t = wpcf7) && void 0 !== t ? t : {}
        }, n.forEach((e => wpcf7.init(e)))) : console.error("Your browser doesn't support NodeList.forEach().")
    }))
}();
/*! This file is auto-generated */
! function (c, d) {
    "use strict";
    var e = !1,
        n = !1;
    if (d.querySelector)
        if (c.addEventListener) e = !0;
    if (c.wp = c.wp || {}, !c.wp.receiveEmbedMessage)
        if (c.wp.receiveEmbedMessage = function (e) {
                var t = e.data;
                if (t)
                    if (t.secret || t.message || t.value)
                        if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                            for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) n[o].style.display = "none";
                            for (o = 0; o < s.length; o++)
                                if (r = s[o], e.source === r.contentWindow) {
                                    if (r.removeAttribute("style"), "height" === t.message) {
                                        if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                        else if (~~i < 200) i = 200;
                                        r.height = i
                                    }
                                    if ("link" === t.message)
                                        if (a = d.createElement("a"), i = d.createElement("a"), a.href = r.getAttribute("src"), i.href = t.value, i.host === a.host)
                                            if (d.activeElement === r) c.top.location.href = t.value
                                }
                        }
            }, e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);

    function t() {
        if (!n) {
            n = !0;
            for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) {
                if (!(e = i[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t);
                if (r || a)(t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e)
            }
        }
    }
}(window, document);
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2021 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function () {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function ($) {
        "function" != typeof window.vc_js && (window.vc_js = function () {
            "use strict";
            vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function ($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function () {
                var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = 0 == sliderTimeout ? !1 : !0;
                this_element.is(":visible") && this_element.flexslider({
                    animation: sliderFx,
                    slideshow: slideshow,
                    slideshowSpeed: sliderTimeout,
                    sliderSpeed: 800,
                    smoothHeight: !0
                })
            })
        }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function () {
            0 < jQuery(".wpb_googleplus").length && function () {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function () {
            0 < jQuery(".wpb_pinterest").length && function () {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function () {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function () {
                var $el = jQuery(this);
                $el.vcwaypoint(function () {
                    $el.find(".vc_single_bar").each(function (index) {
                        var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function () {
                            bar.css({
                                width: val + "%"
                            })
                        }, 200 * index)
                    })
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function () {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function () {
                var $el = jQuery(this);
                $el.vcwaypoint(function () {
                    $el.addClass("wpb_start_animation animated")
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function ($el) {
            function event(content) {
                content && content.preventDefault && content.preventDefault();
                var element = jQuery(this).closest(".vc_toggle"),
                    content = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? content.slideUp({
                    duration: 300,
                    complete: function () {
                        element.removeClass("vc_toggle_active")
                    }
                }) : content.slideDown({
                    duration: 300,
                    complete: function () {
                        element.addClass("vc_toggle_active")
                    }
                })
            }($el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click") : $el.find(".vc_toggle_title").off("click") : jQuery(".vc_toggle_title").off("click")).on("click", event)
        }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function (ver) {
            var $call, old_version;
            jQuery.ui && ($call = ver || jQuery(".wpb_tabs, .wpb_tour"), ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10", old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9, $call.each(function (index) {
                var interval = jQuery(this).attr("data-interval"),
                    tabs_array = [],
                    $tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                        show: function (event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        },
                        activate: function (event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        }
                    });
                if (interval && 0 < interval) try {
                    $tabs.tabs("rotate", 1e3 * interval)
                } catch (err) {
                    window.console && window.console.warn && console.warn("tabs behaviours error", err)
                }
                jQuery(this).find(".wpb_tab").each(function () {
                    tabs_array.push(this.id)
                }), jQuery(this).find(".wpb_tabs_nav li").on("click", function (e) {
                    return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function (length) {
                    var index;
                    length && length.preventDefault && length.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
                })
            }))
        }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function () {
            jQuery(".wpb_accordion").each(function (index) {
                var $this = jQuery(this),
                    active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1),
                    $tabs = !1 === active_tab || "yes" === $this.data("collapsible"),
                    $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                        header: "> div > h3",
                        autoHeight: !1,
                        heightStyle: "content",
                        active: active_tab,
                        collapsible: $tabs,
                        navigation: !0,
                        activate: vc_accordionActivate,
                        change: function (event, ui) {
                            void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                        }
                    });
                !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function () {})
            })
        }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function () {
            var layout_modes = {
                fitrows: "fitRows",
                masonry: "masonry"
            };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function () {
                var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
                }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function ($thumbs) {
                    $thumbs && $thumbs.preventDefault && $thumbs.preventDefault();
                    $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                        filter: jQuery(this).attr("data-filter")
                    })
                }), jQuery(window).on("load resize", function () {
                    $thumbs.isotope("layout")
                })
            })
        }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function ($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function () {
                var fluid_ul = jQuery(this);
                !0 !== fluid_ul.data("carousel_enabled") && fluid_ul.is(":visible") && (fluid_ul.data("carousel_enabled", !0), getColumnsCount(jQuery(this)), jQuery(this).hasClass("columns_count_1"), (fluid_ul = jQuery(this).find(".wpb_thumbnails-fluid li")).css({
                    "margin-right": fluid_ul.css("margin-left"),
                    "margin-left": 0
                }), (fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid")).width(fluid_ul.width() + 300))
            })
        }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function () {
            jQuery(".wpb_gallery_slides").each(function (index) {
                var $imagesGrid, sliderTimeout, this_element = jQuery(this);
                this_element.hasClass("wpb_slider_nivo") ? (0 === (sliderTimeout = 1e3 * this_element.attr("data-interval")) && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                    effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: 800,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next"
                })) : this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function () {
                    $imagesGrid.isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows"
                    })
                }) : this_element.find(".wpb_image_grid_ul").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                }))
            })
        }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function () {
            try {
                jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                    animationSpeed: "normal",
                    hook: "data-rel",
                    padding: 15,
                    opacity: .7,
                    showTitle: !0,
                    allowresize: !0,
                    counter_separator_label: "/",
                    hideflash: !1,
                    deeplinking: !1,
                    modal: !1,
                    callback: function () {
                        -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                    },
                    social_tools: ""
                })
            } catch (err) {
                window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
            }
        }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function () {
            return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
        }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function () {
            var callSkrollInit, $ = window.jQuery;

            function fullWidthRow() {
                var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function (key, item) {
                    var $el = $(this);
                    $el.addClass("vc_hidden");
                    var el_margin_left, el_margin_right, offset, width, padding, paddingRight, $el_full = $el.next(".vc_row-full-width");
                    ($el_full = !$el_full.length ? $el.parent().next(".vc_row-full-width") : $el_full).length && (el_margin_left = parseInt($el.css("margin-left"), 10), el_margin_right = parseInt($el.css("margin-right"), 10), offset = 0 - $el_full.offset().left - el_margin_left, width = $(window).width(), "rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                        position: "relative",
                        left: offset,
                        "box-sizing": "border-box",
                        width: width
                    }), $el.data("vcStretchContent") || ("rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : (paddingRight = width - (padding = (padding = -1 * offset) < 0 ? 0 : padding) - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0), $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    })), $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                        el: $el,
                        offset: offset,
                        marginLeft: el_margin_left,
                        marginRight: el_margin_right,
                        elFull: $el_full,
                        width: width
                    }))
                }), $(document).trigger("vc-full-width-row", $elements)
            }

            function fullHeightRow() {
                var windowHeight, offsetTop, $element = $(".vc_row-o-full-height:first");
                $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && $element.css("min-height", 100 - offsetTop / (windowHeight / 100) + "vh")), $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function () {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function () {
                var skrollrSize, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), $parallaxElement.attr("data-bottom-top", "top: " + -(skrollrSize - 100) + "%;").attr("data-top-bottom", "top: 0%;")
            }), callSkrollInit && window.skrollr && (window.vcParallaxSkroll = skrollr.init({
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function () {
                    return !1
                }
            }), window.vcParallaxSkroll)
        }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function () {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
        }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function (el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        }), "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function (event, ui) {
            var panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $frame = panel.find(".vc_line-chart"),
                $google_maps = panel.find('[data-ride="vc_carousel"]');
            vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $frame.length && jQuery.fn.vcLineChart && $frame.vcLineChart({
                reload: !1
            }), $google_maps.length && jQuery.fn.carousel && $google_maps.carousel("resizeAction"), $frame = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $frame.length && $frame.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready") && (($frame = $google_maps.find("iframe")).attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")), panel.parents(".isotope").length && panel.parents(".isotope").each(function () {
                jQuery(this).isotope("layout")
            }), $(document).trigger("wpb_prepare_tab_content", panel)
        }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function () {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
                var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
            })
        }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function (event, ui) {
            var $pie_charts, $round_charts, $line_charts, $carousel;
            ui.newPanel.length && ui.newHeader.length && ($pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"), $round_charts = ui.newPanel.find(".vc_round-chart"), $line_charts = ui.newPanel.find(".vc_line-chart"), $carousel = ui.newPanel.find('[data-ride="vc_carousel"]'), void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                reload: !1
            }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function () {
                jQuery(this).isotope("layout")
            }))
        }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function () {
            return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
        }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function () {
            jQuery("[data-vc-video-bg]").each(function () {
                var youtubeId, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeId = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeId)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function (event, $grid) {
                    $element.has($grid).length && vcResizeVideoBackground($element)
                })) : $element.find(".vc_video-bg").remove()
            })
        }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function ($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function () {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++)
            }, 100);
            var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], {
                width: "100%",
                height: "100%",
                videoId: youtubeId,
                playerVars: {
                    playlist: youtubeId,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    wmode: "transparent"
                },
                events: {
                    onReady: function (event) {
                        event.target.mute().setLoop(!0)
                    }
                }
            }), vcResizeVideoBackground($element), jQuery(window).on("resize", function () {
                vcResizeVideoBackground($element)
            })
        }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function ($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            })
        }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function (id) {
            if (void 0 === id) return !1;
            id = id.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            return null !== id && id[1]
        }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function () {
            var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function () {
                $("iframe", this).css("pointer-events", "auto")
            }), $wpbGmapsWidget.on("mouseleave", function () {
                $("iframe", this).css("pointer-events", "none")
            }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
        }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function (hoverBox) {
            hoverBox.each(function () {
                var $this = jQuery(this),
                    width = $this.width();
                $this.css("perspective", 4 * width + "px")
            })
        }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function (hoverBox) {
            hoverBox.each(function () {
                var hoverBoxHeight = jQuery(this),
                    hoverBoxInner = hoverBoxHeight.find(".vc-hoverbox-inner");
                hoverBoxInner.css("min-height", 0);
                var frontHeight = hoverBoxHeight.find(".vc-hoverbox-front-inner").outerHeight(),
                    hoverBoxHeight = hoverBoxHeight.find(".vc-hoverbox-back-inner").outerHeight(),
                    hoverBoxHeight = hoverBoxHeight < frontHeight ? frontHeight : hoverBoxHeight;
                hoverBoxInner.css("min-height", (hoverBoxHeight = hoverBoxHeight < 250 ? 250 : hoverBoxHeight) + "px")
            })
        }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function () {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
        }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).on("resize", window.vc_prepareHoverBox), jQuery(document).ready(function ($) {
            window.vc_js()
        })
    }(window.jQuery);
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory)
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory()
    } else {
        root.Rellax = factory()
    }
})(typeof window !== "undefined" ? window : global, function () {
    var Rellax = function (el, options) {
        "use strict";
        var self = Object.create(Rellax.prototype);
        var posY = 0;
        var screenY = 0;
        var posX = 0;
        var screenX = 0;
        var blocks = [];
        var pause = true;
        var loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
            return setTimeout(callback, 1e3 / 60)
        };
        var loopId = null;
        var supportsPassive = false;
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true
                }
            });
            window.addEventListener("testPassive", null, opts);
            window.removeEventListener("testPassive", null, opts)
        } catch (e) {}
        var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;
        var transformProp = window.transformProp || function () {
            var testEl = document.createElement("div");
            if (testEl.style.transform === null) {
                var vendors = ["Webkit", "Moz", "ms"];
                for (var vendor in vendors) {
                    if (testEl.style[vendors[vendor] + "Transform"] !== undefined) {
                        return vendors[vendor] + "Transform"
                    }
                }
            }
            return "transform"
        }();
        self.options = {
            speed: -2,
            verticalSpeed: null,
            horizontalSpeed: null,
            breakpoints: [576, 768, 1201],
            center: false,
            wrapper: null,
            relativeToWrapper: false,
            round: true,
            vertical: true,
            horizontal: false,
            verticalScrollAxis: "y",
            horizontalScrollAxis: "x",
            callback: function () {}
        };
        if (options) {
            Object.keys(options).forEach(function (key) {
                self.options[key] = options[key]
            })
        }

        function validateCustomBreakpoints() {
            if (self.options.breakpoints.length === 3 && Array.isArray(self.options.breakpoints)) {
                var isAscending = true;
                var isNumerical = true;
                var lastVal;
                self.options.breakpoints.forEach(function (i) {
                    if (typeof i !== "number") isNumerical = false;
                    if (lastVal !== null) {
                        if (i < lastVal) isAscending = false
                    }
                    lastVal = i
                });
                if (isAscending && isNumerical) return
            }
            self.options.breakpoints = [576, 768, 1201];
            console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")
        }
        if (options && options.breakpoints) {
            validateCustomBreakpoints()
        }
        if (!el) {
            el = ".rellax"
        }
        var elements = typeof el === "string" ? document.querySelectorAll(el) : [el];
        if (elements.length > 0) {
            self.elems = elements
        } else {
            console.warn("Rellax: The elements you're trying to select don't exist.");
            return
        }
        if (self.options.wrapper) {
            if (!self.options.wrapper.nodeType) {
                var wrapper = document.querySelector(self.options.wrapper);
                if (wrapper) {
                    self.options.wrapper = wrapper
                } else {
                    console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                    return
                }
            }
        }
        var currentBreakpoint;
        var getCurrentBreakpoint = function (w) {
            var bp = self.options.breakpoints;
            if (w < bp[0]) return "xs";
            if (w >= bp[0] && w < bp[1]) return "sm";
            if (w >= bp[1] && w < bp[2]) return "md";
            return "lg"
        };
        var cacheBlocks = function () {
            for (var i = 0; i < self.elems.length; i++) {
                var block = createBlock(self.elems[i]);
                blocks.push(block)
            }
        };
        var init = function () {
            for (var i = 0; i < blocks.length; i++) {
                self.elems[i].style.cssText = blocks[i].style
            }
            blocks = [];
            screenY = window.innerHeight;
            screenX = window.innerWidth;
            currentBreakpoint = getCurrentBreakpoint(screenX);
            setPosition();
            cacheBlocks();
            animate();
            if (pause) {
                window.addEventListener("resize", init);
                pause = false;
                update()
            }
        };
        var createBlock = function (el) {
            var dataPercentage = el.getAttribute("data-rellax-percentage");
            var dataSpeed = el.getAttribute("data-rellax-speed");
            var dataXsSpeed = el.getAttribute("data-rellax-xs-speed");
            var dataMobileSpeed = el.getAttribute("data-rellax-mobile-speed");
            var dataTabletSpeed = el.getAttribute("data-rellax-tablet-speed");
            var dataDesktopSpeed = el.getAttribute("data-rellax-desktop-speed");
            var dataVerticalSpeed = el.getAttribute("data-rellax-vertical-speed");
            var dataHorizontalSpeed = el.getAttribute("data-rellax-horizontal-speed");
            var dataVericalScrollAxis = el.getAttribute("data-rellax-vertical-scroll-axis");
            var dataHorizontalScrollAxis = el.getAttribute("data-rellax-horizontal-scroll-axis");
            var dataZindex = el.getAttribute("data-rellax-zindex") || 0;
            var dataMin = el.getAttribute("data-rellax-min");
            var dataMax = el.getAttribute("data-rellax-max");
            var dataMinX = el.getAttribute("data-rellax-min-x");
            var dataMaxX = el.getAttribute("data-rellax-max-x");
            var dataMinY = el.getAttribute("data-rellax-min-y");
            var dataMaxY = el.getAttribute("data-rellax-max-y");
            var mapBreakpoints;
            var breakpoints = true;
            if (!dataXsSpeed && !dataMobileSpeed && !dataTabletSpeed && !dataDesktopSpeed) {
                breakpoints = false
            } else {
                mapBreakpoints = {
                    xs: dataXsSpeed,
                    sm: dataMobileSpeed,
                    md: dataTabletSpeed,
                    lg: dataDesktopSpeed
                }
            }
            var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (self.options.relativeToWrapper) {
                var scrollPosY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                wrapperPosY = scrollPosY - self.options.wrapper.offsetTop
            }
            var posY = self.options.vertical ? dataPercentage || self.options.center ? wrapperPosY : 0 : 0;
            var posX = self.options.horizontal ? dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
            var blockTop = posY + el.getBoundingClientRect().top;
            var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;
            var blockLeft = posX + el.getBoundingClientRect().left;
            var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;
            var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
            var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
            if (self.options.center) {
                percentageX = .5;
                percentageY = .5
            }
            var speed = breakpoints && mapBreakpoints[currentBreakpoint] !== null ? Number(mapBreakpoints[currentBreakpoint]) : dataSpeed ? dataSpeed : self.options.speed;
            var verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self.options.verticalSpeed;
            var horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self.options.horizontalSpeed;
            var verticalScrollAxis = dataVericalScrollAxis ? dataVericalScrollAxis : self.options.verticalScrollAxis;
            var horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self.options.horizontalScrollAxis;
            var bases = updatePosition(percentageY, percentageY, speed, verticalSpeed, horizontalSpeed);
            var style = el.style.cssText;
            var transform = "";
            var searchResult = /transform\s*:/i.exec(style);
            if (searchResult) {
                var index = searchResult.index;
                var trimmedStyle = style.slice(index);
                var delimiter = trimmedStyle.indexOf(";");
                if (delimiter) {
                    transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, "")
                } else {
                    transform = " " + trimmedStyle.slice(11).replace(/\s/g, "")
                }
            }
            return {
                baseX: bases.x,
                baseY: bases.y,
                top: blockTop,
                left: blockLeft,
                height: blockHeight,
                width: blockWidth,
                speed: speed,
                verticalSpeed: verticalSpeed,
                horizontalSpeed: horizontalSpeed,
                verticalScrollAxis: verticalScrollAxis,
                horizontalScrollAxis: horizontalScrollAxis,
                style: style,
                transform: transform,
                zindex: dataZindex,
                min: dataMin,
                max: dataMax,
                minX: dataMinX,
                maxX: dataMaxX,
                minY: dataMinY,
                maxY: dataMaxY
            }
        };
        var setPosition = function () {
            var oldY = posY;
            var oldX = posX;
            posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
            posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
            if (self.options.relativeToWrapper) {
                var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                posY = scrollPosY - self.options.wrapper.offsetTop
            }
            if (oldY != posY && self.options.vertical) {
                return true
            }
            if (oldX != posX && self.options.horizontal) {
                return true
            }
            return false
        };
        var updatePosition = function (percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {
            var result = {};
            var valueX = (horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX));
            var valueY = (verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY));
            result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
            result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;
            return result
        };
        var deferredUpdate = function () {
            window.removeEventListener("resize", deferredUpdate);
            window.removeEventListener("orientationchange", deferredUpdate);
            (self.options.wrapper ? self.options.wrapper : window).removeEventListener("scroll", deferredUpdate);
            (self.options.wrapper ? self.options.wrapper : document).removeEventListener("touchmove", deferredUpdate);
            loopId = loop(update)
        };
        var update = function () {
            if (setPosition() && pause === false) {
                animate();
                loopId = loop(update)
            } else {
                loopId = null;
                window.addEventListener("resize", deferredUpdate);
                window.addEventListener("orientationchange", deferredUpdate);
                (self.options.wrapper ? self.options.wrapper : window).addEventListener("scroll", deferredUpdate, supportsPassive ? {
                    passive: true
                } : false);
                (self.options.wrapper ? self.options.wrapper : document).addEventListener("touchmove", deferredUpdate, supportsPassive ? {
                    passive: true
                } : false)
            }
        };
        var animate = function () {
            var positions;
            for (var i = 0; i < self.elems.length; i++) {
                var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
                var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
                var verticalScrollX = verticalScrollAxis.indexOf("x") != -1 ? posY : 0;
                var verticalScrollY = verticalScrollAxis.indexOf("y") != -1 ? posY : 0;
                var horizontalScrollX = horizontalScrollAxis.indexOf("x") != -1 ? posX : 0;
                var horizontalScrollY = horizontalScrollAxis.indexOf("y") != -1 ? posX : 0;
                var percentageY = (verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY);
                var percentageX = (verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX);
                positions = updatePosition(percentageY, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);
                var positionY = positions.y - blocks[i].baseY;
                var positionX = positions.x - blocks[i].baseX;
                if (blocks[i].min !== null) {
                    if (self.options.vertical && !self.options.horizontal) {
                        positionY = positionY <= blocks[i].min ? blocks[i].min : positionY
                    }
                    if (self.options.horizontal && !self.options.vertical) {
                        positionX = positionX <= blocks[i].min ? blocks[i].min : positionX
                    }
                }
                if (blocks[i].minY != null) {
                    positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY
                }
                if (blocks[i].minX != null) {
                    positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX
                }
                if (blocks[i].max !== null) {
                    if (self.options.vertical && !self.options.horizontal) {
                        positionY = positionY >= blocks[i].max ? blocks[i].max : positionY
                    }
                    if (self.options.horizontal && !self.options.vertical) {
                        positionX = positionX >= blocks[i].max ? blocks[i].max : positionX
                    }
                }
                if (blocks[i].maxY != null) {
                    positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY
                }
                if (blocks[i].maxX != null) {
                    positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX
                }
                var zindex = blocks[i].zindex;
                var translate = "translate3d(" + (self.options.horizontal ? positionX : "0") + "px," + (self.options.vertical ? positionY : "0") + "px," + zindex + "px) " + blocks[i].transform;
                self.elems[i].style[transformProp] = translate
            }
            self.options.callback(positions)
        };
        self.destroy = function () {
            for (var i = 0; i < self.elems.length; i++) {
                self.elems[i].style.cssText = blocks[i].style
            }
            if (!pause) {
                window.removeEventListener("resize", init);
                pause = true
            }
            clearLoop(loopId);
            loopId = null
        };
        init();
        self.refresh = init;
        return self
    };
    return Rellax
});
(function ($) {
    "use strict";
    var gem = window.gem || {};
    window.gem = gem;
    gem.window = $(window);
    gem.windowWidth = gem.window.width();
    gem.scrollbarWidth = 0;
    $(document).ready(function () {
        var div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        gem.scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
    });
    var recalcWindowInit = function () {
        gem.windowWidth = gem.window.width() + gem.scrollbarWidth;
    };

    function interactions() {
        $('.gem-interactions-enabled').each(function () {
            var $self = $(this),
                vertical_scroll_speed = $self.data('vertical_scroll_speed'),
                horizontal_scroll_speed = $self.data('horizontal_scroll_speed'),
                vertical_scroll_enable = $self.data('vertical_scroll_enable'),
                horizontal_scroll_enable = $self.data('horizontal_scroll_enable'),
                mouse_effects = $self.data('mouse_effects'),
                disable_effects_desktop = $self.data('disable_effects_desktop'),
                disable_effects_tablet = $self.data('disable_effects_tablet'),
                disable_effects_mobile = $self.data('disable_effects_mobile');
            if (vertical_scroll_enable == 'yes' || horizontal_scroll_enable == 'yes') {
                if ((disable_effects_desktop == 'disable' && gem.windowWidth > 991) || (disable_effects_tablet == 'disable' && gem.windowWidth < 992 && gem.windowWidth > 767) || (disable_effects_mobile == 'disable' && gem.windowWidth < 768)) {
                    if ($self.hasClass('rellax-inited')) {
                        $self.css('transform', 'none');
                        this.rellax.destroy();
                        $self.removeClass('rellax-inited');
                    }
                } else {
                    if (!$self.hasClass('rellax-inited')) {
                        this.rellax = new Rellax(this, {
                            speed: 0,
                            verticalSpeed: vertical_scroll_speed ? vertical_scroll_speed : null,
                            horizontalSpeed: horizontal_scroll_speed ? horizontal_scroll_speed : null,
                            center: true,
                            horizontal: true,
                            verticalScrollAxis: "xy",
                            breakpoints: [767, 998, 1199]
                        });
                        $self.addClass('rellax-inited');
                    }
                }
            }
            if (mouse_effects == 'yes') {
                if ((disable_effects_desktop == 'disable' && gem.windowWidth > 991) || (disable_effects_tablet == 'disable' && gem.windowWidth < 992 && gem.windowWidth > 767) || (disable_effects_mobile == 'disable' && gem.windowWidth < 768)) {
                    var mouse_effects_speed = 0,
                        mouse_effects_direction = 0;
                    $self.css('transform', 'none');
                } else {
                    var mouse_effects_speed = $self.data('mouse_effects_speed'),
                        mouse_effects_direction = $self.data('mouse_effects_direction');
                }
                $('html').mousemove(function (e) {
                    let x_pos = (e.clientX / $(window).width() - 0.5) * 100 * mouse_effects_speed * mouse_effects_direction;
                    let y_pos = (e.clientY / $(window).height() - 0.5) * 100 * mouse_effects_speed * mouse_effects_direction;
                    $self.find('> *').css("transform", "translate3D(" + x_pos + "px, " + y_pos + "px, 0)");
                });
            }
            $(window).on('scroll', function () {
                if (($self.hasClass('vc_row') || $self.hasClass('wpb_column')) && $self.hasClass('animated')) {
                    $self.css({
                        '-webkit-animation-fill-mode': 'none',
                        'animation-fill-mode': 'none'
                    });
                    setTimeout(function () {}, 200);
                }
            });
        });
    };
    $(window).on('load resize', function () {
        recalcWindowInit();
        interactions();
    });
}(jQuery));
(function ($) {
    var prefixes = 'Webkit Moz ms Ms O'.split(' ');
    var docElemStyle = document.documentElement.style;

    function getStyleProperty(propName) {
        if (!propName) {
            return;
        }
        if (typeof docElemStyle[propName] === 'string') {
            return propName;
        }
        propName = propName.charAt(0).toUpperCase() + propName.slice(1);
        var prefixed;
        for (var i = 0, len = prefixes.length; i < len; i++) {
            prefixed = prefixes[i] + propName;
            if (typeof docElemStyle[prefixed] === 'string') {
                return prefixed;
            }
        }
    }
    var transitionProperty = getStyleProperty('transition');
    var transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'otransitionend',
        transition: 'transitionend'
    } [transitionProperty];

    function getElementData(element, attributeNameCamel, attributeName, defaultValue) {
        if (element.dataset != undefined) {
            if (element.dataset[attributeNameCamel] != undefined) {
                return element.dataset[attributeNameCamel];
            } else {
                var value = $(element).data(attributeName);
                if (value == undefined) {
                    return defaultValue;
                }
                return value;
            }
            return element.dataset[attributeNameCamel] != undefined ? element.dataset[attributeNameCamel] : defaultValue;
        }
        var value = this.getAttribute(attributeName);
        return value != null && value != '' ? value : defaultValue;
    }

    function Queue(lazyInstance) {
        this.lazyInstance = lazyInstance;
        this.queue = [];
        this.running = false;
        this.initTimer();
    }
    Queue.prototype = {
        add: function (element) {
            this.queue.push(element);
        },
        next: function () {
            if (this.running || this.queue.length == 0) return false;
            this.running = true;
            var element = this.queue.shift();
            if (element.isOnTop()) {
                element.forceShow();
                this.finishPosition();
                return;
            }
            setTimeout(function () {
                element.startAnimation();
            }, element.options['itemDelay']);
        },
        finishPosition: function () {
            this.running = false;
            this.next();
        },
        initTimer: function () {
            var self = this;
            this.timer = document.createElement('div');
            this.timer.className = 'lazy-loading-timer-element';
            document.body.appendChild(this.timer);
            this.timerCallback = function () {};
            $(this.timer).bind(transitionEndEvent, function (event) {
                self.timerCallback();
            });
            this.timer.className += ' start-timer';
        },
        startTimer: function (callback) {
            setTimeout(callback, 200);
            if (this.timer.className.indexOf('start-timer') != -1) {
                this.timer.className = this.timer.className.replace(' start-timer', '');
            } else {
                this.timer.className += ' start-timer';
            }
        }
    };

    function Group(el, lazyInstance) {
        this.el = el;
        this.$el = $(el);
        this.lazyInstance = lazyInstance;
        this.elements = [];
        this.showed = false;
        this.finishedElementsCount = 0;
        this.position = {
            left: 0,
            top: 0
        };
        this.options = {
            offset: parseFloat(getElementData(el, 'llOffset', 'll-offset', 0.7)),
            itemDelay: getElementData(el, 'llItemDelay', 'll-item-delay', -1),
            isFirst: lazyInstance.hasHeaderVisuals && this.el.className.indexOf('lazy-loading-first') != -1,
            force: getElementData(el, 'llForceStart', 'll-force-start', 0) != 0,
            finishDelay: getElementData(el, 'llFinishDelay', 'll-finish-delay', 200)
        };
        this.$el.addClass('lazy-loading-before-start-animation');
    }
    timeNow = function () {
        var newDate = new Date();
        return ((newDate.getHours() < 10) ? "0" : "") + newDate.getHours() + ":" + ((newDate.getMinutes() < 10) ? "0" : "") + newDate.getMinutes() + ":" + ((newDate.getSeconds() < 10) ? "0" : "") + newDate.getSeconds();
    }
    Group.prototype = {
        addElement: function (element) {
            this.elements.push(element);
        },
        setElements: function (elements) {
            this.elements = elements;
        },
        getElements: function () {
            return this.elements;
        },
        getElementsCount: function () {
            return this.elements.length;
        },
        getItemDelay: function () {
            return this.options.itemDelay;
        },
        updatePosition: function () {
            this.position = $(this.el).offset();
        },
        getPosition: function () {
            return this.position;
        },
        isShowed: function () {
            return this.showed;
        },
        isVisible: function () {
            if (this.options.force) return true;
            return (this.position.top + this.options.offset * this.el.offsetHeight <= this.lazyInstance.getWindowBottom()) && (this.position.top + (1 - this.options.offset) * this.el.offsetHeight >= this.lazyInstance.getWindowTop());
        },
        isOnTop: function () {
            return false;
        },
        show: function () {
            this.lazyInstance.queue.add(this);
            this.showed = true;
        },
        forceShow: function () {
            this.showed = true;
            this.el.className = this.el.className.replace('lazy-loading-before-start-animation', 'lazy-loading-end-animation');
        },
        startAnimation: function () {
            var self = this;
            self.elements.forEach(function (element) {
                element.$el.bind(transitionEndEvent, function (event) {
                    var target = event.target || event.srcElement;
                    if (target != element.el) {
                        return;
                    }
                    element.$el.unbind(transitionEndEvent);
                    self.finishedElementsCount++;
                    if (self.finishedElementsCount >= self.getElementsCount()) {
                        setTimeout(function () {
                            var className = self.el.className.replace('lazy-loading-before-start-animation', '').replace('lazy-loading-start-animation', 'lazy-loading-end-animation');
                            self.el.className = className;
                            if (window.gemSettings.fullpageEnabled) {
                                self.el.classList.add('fullpage-lazy-loading-initialized');
                            }
                        }, self.options.finishDelay);
                    }
                });
                element.show();
            });
            if (self.options.finishDelay > 0) {
                self.lazyInstance.queue.startTimer(function () {
                    self.finishAnimation();
                });
            } else {
                self.finishAnimation();
            }
            self.$el.addClass('lazy-loading-start-animation');
        },
        finishAnimation: function () {
            this.lazyInstance.queue.finishPosition();
        }
    };

    function Element(el, group) {
        this.el = el;
        this.$el = $(el);
        this.group = group;
        this.options = {
            effect: getElementData(el, 'llEffect', 'll-effect', ''),
            delay: getElementData(el, 'llItemDelay', 'll-item-delay', group.getItemDelay()),
            actionFunction: getElementData(el, 'llActionFunc', 'll-action-func', '')
        };
        this.options.queueType = this.options.delay != -1 ? 'async' : 'sync';
        if (this.options.effect != '') {
            this.$el.addClass('lazy-loading-item-' + this.getEffectClass());
        }
    }
    Element.prototype = {
        effects: {
            action: function (element) {
                if (!element.options.actionFunction || window[element.options.actionFunction] == null || window[element.options.actionFunction] == undefined) {
                    return;
                }
                window[element.options.actionFunction](element.el);
            }
        },
        getEffectClass: function () {
            var effectClass = this.options.effect;
            if (effectClass == 'drop-right-without-wrap' || effectClass == 'drop-right-unwrap') {
                return 'drop-right';
            }
            return effectClass;
        },
        show: function () {
            if (this.effects[this.options.effect] != undefined) {
                this.effects[this.options.effect](this);
            }
        }
    };
    LazyLoading.prototype = {
        initialize: function () {
            this.queue = new Queue(this);
            this.groups = [];
            this.hasHeaderVisuals = $('.ls-wp-container').length > 0;
            this.$checkPoint = $('#lazy-loading-point');
            if (!this.$checkPoint.length) {
                $('<div id="lazy-loading-point"></div>').insertAfter('#main');
                this.$checkPoint = $('#lazy-loading-point');
            }
            this.windowBottom = 0;
            this.windowHeight = 0;
            this.scrollHandle = false;
            this.perspectiveOpened = false;
            this.$page = $('#page');
            $(document).ready(this.documentReady.bind(this));
        },
        documentReady: function () {
            var self = this;
            this.updateCheckPointOffset();
            this.updateWindowHeight();
            this.buildGroups();
            this.windowScroll();
            $(window).resize(this.windowResize.bind(this));
            $(window).scroll(this.windowScroll.bind(this));
            $(window).on('perspective-modalview-opened', function () {
                self.perspectiveOpened = true;
            });
            $(window).on('perspective-modalview-closed', function () {
                self.perspectiveOpened = false;
            });
        },
        windowResize: function () {
            this.updateWindowHeight();
            this.updateGroups();
            this.windowScroll();
        },
        buildGroups: function () {
            var self = this;
            self.groups = [];
            $('.lazy-loading').each(function () {
                if (window.gemSettings.fullpageEnabled && $(this).hasClass('fullpage-lazy-loading-initialized')) {
                    return;
                }
                var group = new Group(this, self);
                group.updatePosition();
                $('.lazy-loading-item', this).each(function () {
                    group.addElement(new Element(this, group));
                });
                if (group.getElementsCount() > 0) {
                    self.groups.push(group);
                }
            });
        },
        updateGroups: function () {
            var self = this;
            self.groups.forEach(function (group) {
                if (group.isShowed()) {
                    return;
                }
                group.updatePosition();
            });
        },
        windowScroll: function () {
            if (this.scrollHandle) {}
            this.scrollHandle = true;
            this.calculateWindowTop();
            this.calculateWindowBottom();
            if (this.isGroupsPositionsChanged()) {
                this.updateGroups();
            }
            this.groups.forEach(function (group) {
                if (group.isShowed()) {
                    return;
                }
                if (group.isOnTop()) {
                    group.forceShow();
                }
                if (group.isVisible()) {
                    group.show();
                }
            });
            this.scrollHandle = false;
            this.queue.next();
        },
        calculateWindowBottom: function () {
            if (self.perspectiveOpened) {
                this.windowBottom = this.windowTop + this.$page.height();
            } else {
                this.windowBottom = this.windowTop + this.windowHeight;
            }
        },
        calculateWindowTop: function () {
            if (self.perspectiveOpened) {
                this.windowTop = this.$page.scrollTop();
            } else {
                this.windowTop = $(window).scrollTop();
            }
        },
        getWindowTop: function () {
            return this.windowTop;
        },
        getWindowBottom: function () {
            return this.windowBottom;
        },
        updateWindowHeight: function () {
            this.windowHeight = $(window).height();
        },
        getWindowHeight: function () {
            return this.windowHeight;
        },
        updateCheckPointOffset: function () {
            this.checkPointOffset = this.$checkPoint.length ? this.$checkPoint.offset().top : 0;
        },
        isGroupsPositionsChanged: function () {
            var oldCheckPointOffset = this.checkPointOffset;
            this.updateCheckPointOffset();
            return Math.abs(this.checkPointOffset - oldCheckPointOffset) > 1;
        },
        getLastGroup: function () {
            if (!this.groups.length) {
                return null;
            }
            return this.groups[this.groups.length - 1];
        }
    };

    function LazyLoading(options) {
        this.options = {};
        $.extend(this.options, options);
        this.initialize();
    }
    $.lazyLoading = function (options) {
        return new LazyLoading(options);
    }
    if (window.gemSettings !== undefined && !window.gemSettings.lasyDisabled) {
        $('.wpb_text_column.wpb_animate_when_almost_visible.wpb_fade').each(function () {
            $(this).wrap('<div class="lazy-loading"></div>').addClass('lazy-loading-item').data('ll-effect', 'fading');
        });
        $('.gem-list.lazy-loading').each(function () {
            $(this).data('ll-item-delay', '200');
            $('li', this).addClass('lazy-loading-item').data('ll-effect', 'slide-right');
            $('li', this).each(function (index) {
                $(this).attr("style", "transition-delay: " + (index + 1) * 0.2 + "s;");
            });
        });
        $.lazyLoading();
    }
})(jQuery);
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function () {
    "use strict";
    var e = 0,
        r = {};

    function i(t) {
        if (!t) throw new Error("No options passed to Waypoint constructor");
        if (!t.element) throw new Error("No element option passed to Waypoint constructor");
        if (!t.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = i.Adapter.extend({}, i.defaults, t), this.element = this.options.element, this.adapter = new i.Adapter(this.element), this.callback = t.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = i.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = i.Context.findOrCreateByElement(this.options.context), i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), r[this.key] = this, e += 1
    }
    i.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, i.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, i.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete r[this.key]
    }, i.prototype.disable = function () {
        return this.enabled = !1, this
    }, i.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, i.prototype.next = function () {
        return this.group.next(this)
    }, i.prototype.previous = function () {
        return this.group.previous(this)
    }, i.invokeAll = function (t) {
        var e = [];
        for (var i in r) e.push(r[i]);
        for (var o = 0, n = e.length; o < n; o++) e[o][t]()
    }, i.destroyAll = function () {
        i.invokeAll("destroy")
    }, i.disableAll = function () {
        i.invokeAll("disable")
    }, i.enableAll = function () {
        for (var t in i.Context.refreshAll(), r) r[t].enabled = !0;
        return this
    }, i.refreshAll = function () {
        i.Context.refreshAll()
    }, i.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, i.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, i.adapters = [], i.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, i.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.VcWaypoint = i
}(),
function () {
    "use strict";

    function e(t) {
        window.setTimeout(t, 1e3 / 60)
    }
    var i = 0,
        o = {},
        y = window.VcWaypoint,
        t = window.onload;

    function n(t) {
        this.element = t, this.Adapter = y.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, y.windowContext || (y.windowContext = !0, y.windowContext = new n(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    n.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, n.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".vcwaypoints"), delete o[this.key])
    }, n.prototype.createThrottledResizeHandler = function () {
        var t = this;

        function e() {
            t.handleResize(), t.didResize = !1
        }
        this.adapter.on("resize.vcwaypoints", function () {
            t.didResize || (t.didResize = !0, y.requestAnimationFrame(e))
        })
    }, n.prototype.createThrottledScrollHandler = function () {
        var t = this;

        function e() {
            t.handleScroll(), t.didScroll = !1
        }
        this.adapter.on("scroll.vcwaypoints", function () {
            t.didScroll && !y.isTouch || (t.didScroll = !0, y.requestAnimationFrame(e))
        })
    }, n.prototype.handleResize = function () {
        y.Context.refreshAll()
    }, n.prototype.handleScroll = function () {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll ? o.forward : o.backward;
            for (var r in this.waypoints[i]) {
                var s = this.waypoints[i][r];
                if (null !== s.triggerPoint) {
                    var a = o.oldScroll < s.triggerPoint,
                        l = o.newScroll >= s.triggerPoint;
                    (a && l || !a && !l) && (s.queueTrigger(n), t[s.group.id] = s.group)
                }
            }
        }
        for (var h in t) t[h].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, n.prototype.innerHeight = function () {
        return this.element == this.element.window ? y.viewportHeight() : this.adapter.innerHeight()
    }, n.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, n.prototype.innerWidth = function () {
        return this.element == this.element.window ? y.viewportWidth() : this.adapter.innerWidth()
    }, n.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; o < n; o++) t[o].destroy()
    }, n.prototype.refresh = function () {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        for (var n in this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
            var r = t[n];
            for (var s in this.waypoints[n]) {
                var a, l, h, p, c = this.waypoints[n][s],
                    u = c.options.offset,
                    d = c.triggerPoint,
                    f = 0,
                    w = null == d;
                c.element !== c.element.window && (f = c.adapter.offset()[r.offsetProp]), "function" == typeof u ? u = u.apply(c) : "string" == typeof u && (u = parseFloat(u), -1 < c.options.offset.indexOf("%") && (u = Math.ceil(r.contextDimension * u / 100))), a = r.contextScroll - r.contextOffset, c.triggerPoint = Math.floor(f + a - u), l = d < r.oldScroll, h = c.triggerPoint >= r.oldScroll, p = !l && !h, !w && (l && h) ? (c.queueTrigger(r.backward), o[c.group.id] = c.group) : !w && p ? (c.queueTrigger(r.forward), o[c.group.id] = c.group) : w && r.oldScroll >= c.triggerPoint && (c.queueTrigger(r.forward), o[c.group.id] = c.group)
            }
        }
        return y.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, n.findOrCreateByElement = function (t) {
        return n.findByElement(t) || new n(t)
    }, n.refreshAll = function () {
        for (var t in o) o[t].refresh()
    }, n.findByElement = function (t) {
        return o[t.waypointContextKey]
    }, window.onload = function () {
        t && t(), n.refreshAll()
    }, y.requestAnimationFrame = function (t) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
    }, y.Context = n
}(),
function () {
    "use strict";

    function s(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function a(t, e) {
        return e.triggerPoint - t.triggerPoint
    }
    var e = {
            vertical: {},
            horizontal: {}
        },
        i = window.VcWaypoint;

    function o(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), e[this.axis][this.name] = this
    }
    o.prototype.add = function (t) {
        this.waypoints.push(t)
    }, o.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, o.prototype.flushTriggers = function () {
        for (var t in this.triggerQueues) {
            var e = this.triggerQueues[t],
                i = "up" === t || "left" === t;
            e.sort(i ? a : s);
            for (var o = 0, n = e.length; o < n; o += 1) {
                var r = e[o];
                (r.options.continuous || o === e.length - 1) && r.trigger([t])
            }
        }
        this.clearTriggerQueues()
    }, o.prototype.next = function (t) {
        this.waypoints.sort(s);
        var e = i.Adapter.inArray(t, this.waypoints);
        return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1]
    }, o.prototype.previous = function (t) {
        this.waypoints.sort(s);
        var e = i.Adapter.inArray(t, this.waypoints);
        return e ? this.waypoints[e - 1] : null
    }, o.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, o.prototype.remove = function (t) {
        var e = i.Adapter.inArray(t, this.waypoints); - 1 < e && this.waypoints.splice(e, 1)
    }, o.prototype.first = function () {
        return this.waypoints[0]
    }, o.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, o.findOrCreate = function (t) {
        return e[t.axis][t.name] || new o(t)
    }, i.Group = o
}(),
function () {
    "use strict";
    var i = window.jQuery,
        t = window.VcWaypoint;

    function o(t) {
        this.$element = i(t)
    }
    i.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (t, e) {
        o.prototype[e] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[e].apply(this.$element, t)
        }
    }), i.each(["extend", "inArray", "isEmptyObject"], function (t, e) {
        o[e] = i[e]
    }), t.adapters.push({
        name: "jquery",
        Adapter: o
    }), t.Adapter = o
}(),
function () {
    "use strict";
    var n = window.VcWaypoint;

    function t(o) {
        return function () {
            var e = [],
                i = arguments[0];
            return o.isFunction(arguments[0]) && ((i = o.extend({}, arguments[1])).handler = arguments[0]), this.each(function () {
                var t = o.extend({}, i, {
                    element: this
                });
                "string" == typeof t.context && (t.context = o(this).closest(t.context)[0]), e.push(new n(t))
            }), e
        }
    }
    window.jQuery && (window.jQuery.fn.vcwaypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.vcwaypoint = t(window.Zepto))
}();
(function (a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        if (typeof module !== "undefined" && module.exports) {
            a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function (f) {
    var y = "1.6.15",
        p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        A = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        B = "tap",
        j = "doubletap",
        b = "longtap",
        z = "hold",
        E = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !a,
        d = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !a,
        C = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipe = function (H) {
        var G = f(this),
            F = G.data(C);
        if (F && typeof H === "string") {
            if (F[H]) {
                return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + H + " does not exist on jQuery.swipe")
            }
        } else {
            if (F && typeof H === "object") {
                F.option.apply(this, arguments)
            } else {
                if (!F && (typeof H === "object" || !H)) {
                    return w.apply(this, arguments)
                }
            }
        }
        return G
    };
    f.fn.swipe.version = y;
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: A
    };
    f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: E,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: i
    };

    function w(F) {
        if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
            F.allowPageScroll = m
        }
        if (F.click !== undefined && F.tap === undefined) {
            F.tap = F.click
        }
        if (!F) {
            F = {}
        }
        F = f.extend({}, f.fn.swipe.defaults, F);
        return this.each(function () {
            var H = f(this);
            var G = H.data(C);
            if (!G) {
                G = new D(this, F);
                H.data(C, G)
            }
        })
    }

    function D(a5, au) {
        var au = f.extend({}, au);
        var az = (a || d || !au.fallbackToMouseEvents),
            K = az ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            ax = az ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            V = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            T = az ? (d ? "mouseleave" : null) : "mouseleave",
            aD = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ag = 0,
            aP = null,
            a2 = null,
            ac = 0,
            a1 = 0,
            aZ = 0,
            H = 1,
            ap = 0,
            aJ = 0,
            N = null;
        var aR = f(a5);
        var aa = "start";
        var X = 0;
        var aQ = {};
        var U = 0,
            a3 = 0,
            a6 = 0,
            ay = 0,
            O = 0;
        var aW = null,
            af = null;
        try {
            aR.bind(K, aN);
            aR.bind(aD, ba)
        } catch (aj) {
            f.error("events not supported " + K + "," + aD + " on jQuery.swipe")
        }
        this.enable = function () {
            aR.bind(K, aN);
            aR.bind(aD, ba);
            return aR
        };
        this.disable = function () {
            aK();
            return aR
        };
        this.destroy = function () {
            aK();
            aR.data(C, null);
            aR = null
        };
        this.option = function (bd, bc) {
            if (typeof bd === "object") {
                au = f.extend(au, bd)
            } else {
                if (au[bd] !== undefined) {
                    if (bc === undefined) {
                        return au[bd]
                    } else {
                        au[bd] = bc
                    }
                } else {
                    if (!bd) {
                        return au
                    } else {
                        f.error("Option " + bd + " does not exist on jQuery.swipe.options")
                    }
                }
            }
            return null
        };

        function aN(be) {
            if (aB()) {
                return
            }
            if (f(be.target).closest(au.excludedElements, aR).length > 0) {
                return
            }
            var bf = be.originalEvent ? be.originalEvent : be;
            var bd, bg = bf.touches,
                bc = bg ? bg[0] : bf;
            aa = g;
            if (bg) {
                X = bg.length
            } else {
                if (au.preventDefaultEvents !== false) {
                    be.preventDefault()
                }
            }
            ag = 0;
            aP = null;
            a2 = null;
            aJ = null;
            ac = 0;
            a1 = 0;
            aZ = 0;
            H = 1;
            ap = 0;
            N = ab();
            S();
            ai(0, bc);
            if (!bg || (X === au.fingers || au.fingers === i) || aX()) {
                U = ar();
                if (X == 2) {
                    ai(1, bg[1]);
                    a1 = aZ = at(aQ[0].start, aQ[1].start)
                }
                if (au.swipeStatus || au.pinchStatus) {
                    bd = P(bf, aa)
                }
            } else {
                bd = false
            }
            if (bd === false) {
                aa = q;
                P(bf, aa);
                return bd
            } else {
                if (au.hold) {
                    af = setTimeout(f.proxy(function () {
                        aR.trigger("hold", [bf.target]);
                        if (au.hold) {
                            bd = au.hold.call(aR, bf, bf.target)
                        }
                    }, this), au.longTapThreshold)
                }
                an(true)
            }
            return null
        }

        function a4(bf) {
            var bi = bf.originalEvent ? bf.originalEvent : bf;
            if (aa === h || aa === q || al()) {
                return
            }
            var be, bj = bi.touches,
                bd = bj ? bj[0] : bi;
            var bg = aH(bd);
            a3 = ar();
            if (bj) {
                X = bj.length
            }
            if (au.hold) {
                clearTimeout(af)
            }
            aa = k;
            if (X == 2) {
                if (a1 == 0) {
                    ai(1, bj[1]);
                    a1 = aZ = at(aQ[0].start, aQ[1].start)
                } else {
                    aH(bj[1]);
                    aZ = at(aQ[0].end, aQ[1].end);
                    aJ = aq(aQ[0].end, aQ[1].end)
                }
                H = a8(a1, aZ);
                ap = Math.abs(a1 - aZ)
            }
            if ((X === au.fingers || au.fingers === i) || !bj || aX()) {
                aP = aL(bg.start, bg.end);
                a2 = aL(bg.last, bg.end);
                ak(bf, a2);
                ag = aS(bg.start, bg.end);
                ac = aM();
                aI(aP, ag);
                be = P(bi, aa);
                if (!au.triggerOnTouchEnd || au.triggerOnTouchLeave) {
                    var bc = true;
                    if (au.triggerOnTouchLeave) {
                        var bh = aY(this);
                        bc = F(bg.end, bh)
                    }
                    if (!au.triggerOnTouchEnd && bc) {
                        aa = aC(k)
                    } else {
                        if (au.triggerOnTouchLeave && !bc) {
                            aa = aC(h)
                        }
                    }
                    if (aa == q || aa == h) {
                        P(bi, aa)
                    }
                }
            } else {
                aa = q;
                P(bi, aa)
            }
            if (be === false) {
                aa = q;
                P(bi, aa)
            }
        }

        function M(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc,
                be = bd.touches;
            if (be) {
                if (be.length && !al()) {
                    G(bd);
                    return true
                } else {
                    if (be.length && al()) {
                        return true
                    }
                }
            }
            if (al()) {
                X = ay
            }
            a3 = ar();
            ac = aM();
            if (bb() || !am()) {
                aa = q;
                P(bd, aa)
            } else {
                if (au.triggerOnTouchEnd || (au.triggerOnTouchEnd == false && aa === k)) {
                    if (au.preventDefaultEvents !== false) {
                        bc.preventDefault()
                    }
                    aa = h;
                    P(bd, aa)
                } else {
                    if (!au.triggerOnTouchEnd && a7()) {
                        aa = h;
                        aF(bd, aa, B)
                    } else {
                        if (aa === k) {
                            aa = q;
                            P(bd, aa)
                        }
                    }
                }
            }
            an(false);
            return null
        }

        function ba() {
            X = 0;
            a3 = 0;
            U = 0;
            a1 = 0;
            aZ = 0;
            H = 1;
            S();
            an(false)
        }

        function L(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc;
            if (au.triggerOnTouchLeave) {
                aa = aC(h);
                P(bd, aa)
            }
        }

        function aK() {
            aR.unbind(K, aN);
            aR.unbind(aD, ba);
            aR.unbind(ax, a4);
            aR.unbind(V, M);
            if (T) {
                aR.unbind(T, L)
            }
            an(false)
        }

        function aC(bg) {
            var bf = bg;
            var be = aA();
            var bd = am();
            var bc = bb();
            if (!be || bc) {
                bf = q
            } else {
                if (bd && bg == k && (!au.triggerOnTouchEnd || au.triggerOnTouchLeave)) {
                    bf = h
                } else {
                    if (!bd && bg == h && au.triggerOnTouchLeave) {
                        bf = q
                    }
                }
            }
            return bf
        }

        function P(be, bc) {
            var bd, bf = be.touches;
            if (J() || W()) {
                bd = aF(be, bc, l)
            }
            if ((Q() || aX()) && bd !== false) {
                bd = aF(be, bc, t)
            }
            if (aG() && bd !== false) {
                bd = aF(be, bc, j)
            } else {
                if (ao() && bd !== false) {
                    bd = aF(be, bc, b)
                } else {
                    if (ah() && bd !== false) {
                        bd = aF(be, bc, B)
                    }
                }
            }
            if (bc === q) {
                if (W()) {
                    bd = aF(be, bc, l)
                }
                if (aX()) {
                    bd = aF(be, bc, t)
                }
                ba(be)
            }
            if (bc === h) {
                if (bf) {
                    if (!bf.length) {
                        ba(be)
                    }
                } else {
                    ba(be)
                }
            }
            return bd
        }

        function aF(bf, bc, be) {
            var bd;
            if (be == l) {
                aR.trigger("swipeStatus", [bc, aP || null, ag || 0, ac || 0, X, aQ, a2]);
                if (au.swipeStatus) {
                    bd = au.swipeStatus.call(aR, bf, bc, aP || null, ag || 0, ac || 0, X, aQ, a2);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && aV()) {
                    clearTimeout(aW);
                    clearTimeout(af);
                    aR.trigger("swipe", [aP, ag, ac, X, aQ, a2]);
                    if (au.swipe) {
                        bd = au.swipe.call(aR, bf, aP, ag, ac, X, aQ, a2);
                        if (bd === false) {
                            return false
                        }
                    }
                    switch (aP) {
                        case p:
                            aR.trigger("swipeLeft", [aP, ag, ac, X, aQ, a2]);
                            if (au.swipeLeft) {
                                bd = au.swipeLeft.call(aR, bf, aP, ag, ac, X, aQ, a2)
                            }
                            break;
                        case o:
                            aR.trigger("swipeRight", [aP, ag, ac, X, aQ, a2]);
                            if (au.swipeRight) {
                                bd = au.swipeRight.call(aR, bf, aP, ag, ac, X, aQ, a2)
                            }
                            break;
                        case e:
                            aR.trigger("swipeUp", [aP, ag, ac, X, aQ, a2]);
                            if (au.swipeUp) {
                                bd = au.swipeUp.call(aR, bf, aP, ag, ac, X, aQ, a2)
                            }
                            break;
                        case x:
                            aR.trigger("swipeDown", [aP, ag, ac, X, aQ, a2]);
                            if (au.swipeDown) {
                                bd = au.swipeDown.call(aR, bf, aP, ag, ac, X, aQ, a2)
                            }
                            break
                    }
                }
            }
            if (be == t) {
                aR.trigger("pinchStatus", [bc, aJ || null, ap || 0, ac || 0, X, H, aQ]);
                if (au.pinchStatus) {
                    bd = au.pinchStatus.call(aR, bf, bc, aJ || null, ap || 0, ac || 0, X, H, aQ);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && a9()) {
                    switch (aJ) {
                        case c:
                            aR.trigger("pinchIn", [aJ || null, ap || 0, ac || 0, X, H, aQ]);
                            if (au.pinchIn) {
                                bd = au.pinchIn.call(aR, bf, aJ || null, ap || 0, ac || 0, X, H, aQ)
                            }
                            break;
                        case A:
                            aR.trigger("pinchOut", [aJ || null, ap || 0, ac || 0, X, H, aQ]);
                            if (au.pinchOut) {
                                bd = au.pinchOut.call(aR, bf, aJ || null, ap || 0, ac || 0, X, H, aQ)
                            }
                            break
                    }
                }
            }
            if (be == B) {
                if (bc === q || bc === h) {
                    clearTimeout(aW);
                    clearTimeout(af);
                    if (Z() && !I()) {
                        O = ar();
                        aW = setTimeout(f.proxy(function () {
                            O = null;
                            aR.trigger("tap", [bf.target]);
                            if (au.tap) {
                                bd = au.tap.call(aR, bf, bf.target)
                            }
                        }, this), au.doubleTapThreshold)
                    } else {
                        O = null;
                        aR.trigger("tap", [bf.target]);
                        if (au.tap) {
                            bd = au.tap.call(aR, bf, bf.target)
                        }
                    }
                }
            } else {
                if (be == j) {
                    if (bc === q || bc === h) {
                        clearTimeout(aW);
                        clearTimeout(af);
                        O = null;
                        aR.trigger("doubletap", [bf.target]);
                        if (au.doubleTap) {
                            bd = au.doubleTap.call(aR, bf, bf.target)
                        }
                    }
                } else {
                    if (be == b) {
                        if (bc === q || bc === h) {
                            clearTimeout(aW);
                            O = null;
                            aR.trigger("longtap", [bf.target]);
                            if (au.longTap) {
                                bd = au.longTap.call(aR, bf, bf.target)
                            }
                        }
                    }
                }
            }
            return bd
        }

        function am() {
            var bc = true;
            if (au.threshold !== null) {
                bc = ag >= au.threshold
            }
            return bc
        }

        function bb() {
            var bc = false;
            if (au.cancelThreshold !== null && aP !== null) {
                bc = (aT(aP) - ag) >= au.cancelThreshold
            }
            return bc
        }

        function ae() {
            if (au.pinchThreshold !== null) {
                return ap >= au.pinchThreshold
            }
            return true
        }

        function aA() {
            var bc;
            if (au.maxTimeThreshold) {
                if (ac >= au.maxTimeThreshold) {
                    bc = false
                } else {
                    bc = true
                }
            } else {
                bc = true
            }
            return bc
        }

        function ak(bc, bd) {
            if (au.preventDefaultEvents === false) {
                return
            }
            if (au.allowPageScroll === m) {
                bc.preventDefault()
            } else {
                var be = au.allowPageScroll === s;
                switch (bd) {
                    case p:
                        if ((au.swipeLeft && be) || (!be && au.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case o:
                        if ((au.swipeRight && be) || (!be && au.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case e:
                        if ((au.swipeUp && be) || (!be && au.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break;
                    case x:
                        if ((au.swipeDown && be) || (!be && au.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break
                }
            }
        }

        function a9() {
            var bd = aO();
            var bc = Y();
            var be = ae();
            return bd && bc && be
        }

        function aX() {
            return !!(au.pinchStatus || au.pinchIn || au.pinchOut)
        }

        function Q() {
            return !!(a9() && aX())
        }

        function aV() {
            var bf = aA();
            var bh = am();
            var be = aO();
            var bc = Y();
            var bd = bb();
            var bg = !bd && bc && be && bh && bf;
            return bg
        }

        function W() {
            return !!(au.swipe || au.swipeStatus || au.swipeLeft || au.swipeRight || au.swipeUp || au.swipeDown)
        }

        function J() {
            return !!(aV() && W())
        }

        function aO() {
            return ((X === au.fingers || au.fingers === i) || !a)
        }

        function Y() {
            return aQ[0].end.x !== 0
        }

        function a7() {
            return !!(au.tap)
        }

        function Z() {
            return !!(au.doubleTap)
        }

        function aU() {
            return !!(au.longTap)
        }

        function R() {
            if (O == null) {
                return false
            }
            var bc = ar();
            return (Z() && ((bc - O) <= au.doubleTapThreshold))
        }

        function I() {
            return R()
        }

        function aw() {
            return ((X === 1 || !a) && (isNaN(ag) || ag < au.threshold))
        }

        function a0() {
            return ((ac > au.longTapThreshold) && (ag < r))
        }

        function ah() {
            return !!(aw() && a7())
        }

        function aG() {
            return !!(R() && Z())
        }

        function ao() {
            return !!(a0() && aU())
        }

        function G(bc) {
            a6 = ar();
            ay = bc.touches.length + 1
        }

        function S() {
            a6 = 0;
            ay = 0
        }

        function al() {
            var bc = false;
            if (a6) {
                var bd = ar() - a6;
                if (bd <= au.fingerReleaseThreshold) {
                    bc = true
                }
            }
            return bc
        }

        function aB() {
            return !!(aR.data(C + "_intouch") === true)
        }

        function an(bc) {
            if (!aR) {
                return
            }
            if (bc === true) {
                aR.bind(ax, a4);
                aR.bind(V, M);
                if (T) {
                    aR.bind(T, L)
                }
            } else {
                aR.unbind(ax, a4, false);
                aR.unbind(V, M, false);
                if (T) {
                    aR.unbind(T, L, false)
                }
            }
            aR.data(C + "_intouch", bc === true)
        }

        function ai(be, bc) {
            var bd = {
                start: {
                    x: 0,
                    y: 0
                },
                last: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            bd.start.x = bd.last.x = bd.end.x = bc.pageX || bc.clientX;
            bd.start.y = bd.last.y = bd.end.y = bc.pageY || bc.clientY;
            aQ[be] = bd;
            return bd
        }

        function aH(bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            var bd = ad(be);
            if (bd === null) {
                bd = ai(be, bc)
            }
            bd.last.x = bd.end.x;
            bd.last.y = bd.end.y;
            bd.end.x = bc.pageX || bc.clientX;
            bd.end.y = bc.pageY || bc.clientY;
            return bd
        }

        function ad(bc) {
            return aQ[bc] || null
        }

        function aI(bc, bd) {
            bd = Math.max(bd, aT(bc));
            N[bc].distance = bd
        }

        function aT(bc) {
            if (N[bc]) {
                return N[bc].distance
            }
            return undefined
        }

        function ab() {
            var bc = {};
            bc[p] = av(p);
            bc[o] = av(o);
            bc[e] = av(e);
            bc[x] = av(x);
            return bc
        }

        function av(bc) {
            return {
                direction: bc,
                distance: 0
            }
        }

        function aM() {
            return a3 - U
        }

        function at(bf, be) {
            var bd = Math.abs(bf.x - be.x);
            var bc = Math.abs(bf.y - be.y);
            return Math.round(Math.sqrt(bd * bd + bc * bc))
        }

        function a8(bc, bd) {
            var be = (bd / bc) * 1;
            return be.toFixed(2)
        }

        function aq() {
            if (H < 1) {
                return A
            } else {
                return c
            }
        }

        function aS(bd, bc) {
            return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
        }

        function aE(bf, bd) {
            var bc = bf.x - bd.x;
            var bh = bd.y - bf.y;
            var be = Math.atan2(bh, bc);
            var bg = Math.round(be * 180 / Math.PI);
            if (bg < 0) {
                bg = 360 - Math.abs(bg)
            }
            return bg
        }

        function aL(bd, bc) {
            var be = aE(bd, bc);
            if ((be <= 45) && (be >= 0)) {
                return p
            } else {
                if ((be <= 360) && (be >= 315)) {
                    return p
                } else {
                    if ((be >= 135) && (be <= 225)) {
                        return o
                    } else {
                        if ((be > 45) && (be < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function ar() {
            var bc = new Date();
            return bc.getTime()
        }

        function aY(bc) {
            bc = f(bc);
            var be = bc.offset();
            var bd = {
                left: be.left,
                right: be.left + bc.outerWidth(),
                top: be.top,
                bottom: be.top + bc.outerHeight()
            };
            return bd
        }

        function F(bc, bd) {
            return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom)
        }
    }
}));
(function ($) {
    function sc_setScroll(a, b, c) {
        return "transition" == c.transition && "swing" == b && (b = "ease"), {
            anims: [],
            duration: a,
            orgDuration: a,
            easing: b,
            startTime: getTime()
        }
    }

    function sc_startScroll(a, b) {
        for (var c = 0, d = a.anims.length; d > c; c++) {
            var e = a.anims[c];
            e && e[0][b.transition](e[1], a.duration, a.easing, e[2])
        }
    }

    function sc_stopScroll(a, b) {
        is_boolean(b) || (b = !0), is_object(a.pre) && sc_stopScroll(a.pre, b);
        for (var c = 0, d = a.anims.length; d > c; c++) {
            var e = a.anims[c];
            e[0].stop(!0), b && (e[0].css(e[1]), is_function(e[2]) && e[2]())
        }
        is_object(a.post) && sc_stopScroll(a.post, b)
    }

    function sc_afterScroll(a, b, c) {
        switch (b && b.remove(), c.fx) {
            case "fade":
            case "crossfade":
            case "cover-fade":
            case "uncover-fade":
                a.css("opacity", 1), a.css("filter", "")
        }
    }

    function sc_fireCallbacks(a, b, c, d, e) {
        if (b[c] && b[c].call(a, d), e[c].length)
            for (var f = 0, g = e[c].length; g > f; f++) e[c][f].call(a, d);
        return []
    }

    function sc_fireQueue(a, b, c) {
        return b.length && (a.trigger(cf_e(b[0][0], c), b[0][1]), b.shift()), b
    }

    function sc_hideHiddenItems(a) {
        a.each(function () {
            var a = $(this);
            a.data("_cfs_isHidden", a.is(":hidden")).hide()
        })
    }

    function sc_showHiddenItems(a) {
        a && a.each(function () {
            var a = $(this);
            a.data("_cfs_isHidden") || a.show()
        })
    }

    function sc_clearTimers(a) {
        return a.auto && clearTimeout(a.auto), a.progress && clearInterval(a.progress), a
    }

    function sc_mapCallbackArguments(a, b, c, d, e, f, g) {
        return {
            width: g.width,
            height: g.height,
            items: {
                old: a,
                skipped: b,
                visible: c
            },
            scroll: {
                items: d,
                direction: e,
                duration: f
            }
        }
    }

    function sc_getDuration(a, b, c, d) {
        var e = a.duration;
        return "none" == a.fx ? 0 : ("auto" == e ? e = b.scroll.duration / b.scroll.items * c : 10 > e && (e = d / e), 1 > e ? 0 : ("fade" == a.fx && (e /= 2), Math.round(e)))
    }

    function nv_showNavi(a, b, c) {
        var d = is_number(a.items.minimum) ? a.items.minimum : a.items.visible + 1;
        if ("show" == b || "hide" == b) var e = b;
        else if (d > b) {
            debug(c, "Not enough items (" + b + " total, " + d + " needed): Hiding navigation.");
            var e = "hide"
        } else var e = "show";
        var f = "show" == e ? "removeClass" : "addClass",
            g = cf_c("hidden", c);
        a.auto.button && a.auto.button[e]()[f](g), a.prev.button && a.prev.button[e]()[f](g), a.next.button && a.next.button[e]()[f](g), a.pagination.container && a.pagination.container[e]()[f](g)
    }

    function nv_enableNavi(a, b, c) {
        if (!a.circular && !a.infinite) {
            var d = "removeClass" == b || "addClass" == b ? b : !1,
                e = cf_c("disabled", c);
            if (a.auto.button && d && a.auto.button[d](e), a.prev.button) {
                var f = d || 0 == b ? "addClass" : "removeClass";
                a.prev.button[f](e)
            }
            if (a.next.button) {
                var f = d || b == a.items.visible ? "addClass" : "removeClass";
                a.next.button[f](e)
            }
        }
    }

    function go_getObject(a, b) {
        return is_function(b) ? b = b.call(a) : is_undefined(b) && (b = {}), b
    }

    function go_getItemsObject(a, b) {
        return b = go_getObject(a, b), is_number(b) ? b = {
            visible: b
        } : "variable" == b ? b = {
            visible: b,
            width: b,
            height: b
        } : is_object(b) || (b = {}), b
    }

    function go_getScrollObject(a, b) {
        return b = go_getObject(a, b), is_number(b) ? b = 50 >= b ? {
            items: b
        } : {
            duration: b
        } : is_string(b) ? b = {
            easing: b
        } : is_object(b) || (b = {}), b
    }

    function go_getNaviObject(a, b) {
        if (b = go_getObject(a, b), is_string(b)) {
            var c = cf_getKeyCode(b);
            b = -1 == c ? $(b) : c
        }
        return b
    }

    function go_getAutoObject(a, b) {
        return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
            button: b
        } : is_boolean(b) ? b = {
            play: b
        } : is_number(b) && (b = {
            timeoutDuration: b
        }), b.progress && (is_string(b.progress) || is_jquery(b.progress)) && (b.progress = {
            bar: b.progress
        }), b
    }

    function go_complementAutoObject(a, b) {
        return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_boolean(b.play) || (b.play = !0), is_number(b.delay) || (b.delay = 0), is_undefined(b.pauseOnEvent) && (b.pauseOnEvent = !0), is_boolean(b.pauseOnResize) || (b.pauseOnResize = !0), is_number(b.timeoutDuration) || (b.timeoutDuration = 10 > b.duration ? 2500 : 5 * b.duration), b.progress && (is_function(b.progress.bar) && (b.progress.bar = b.progress.bar.call(a)), is_string(b.progress.bar) && (b.progress.bar = $(b.progress.bar)), b.progress.bar ? (is_function(b.progress.updater) || (b.progress.updater = $.fn.carouFredSel.progressbarUpdater), is_number(b.progress.interval) || (b.progress.interval = 50)) : b.progress = !1), b
    }

    function go_getPrevNextObject(a, b) {
        return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
            button: b
        } : is_number(b) && (b = {
            key: b
        }), b
    }

    function go_complementPrevNextObject(a, b) {
        return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_string(b.key) && (b.key = cf_getKeyCode(b.key)), b
    }

    function go_getPaginationObject(a, b) {
        return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
            container: b
        } : is_boolean(b) && (b = {
            keys: b
        }), b
    }

    function go_complementPaginationObject(a, b) {
        return is_function(b.container) && (b.container = b.container.call(a)), is_string(b.container) && (b.container = $(b.container)), is_number(b.items) || (b.items = !1), is_boolean(b.keys) || (b.keys = !1), is_function(b.anchorBuilder) || is_false(b.anchorBuilder) || (b.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder), is_number(b.deviation) || (b.deviation = 0), b
    }

    function go_getSwipeObject(a, b) {
        return is_function(b) && (b = b.call(a)), is_undefined(b) && (b = {
            onTouch: !1
        }), is_true(b) ? b = {
            onTouch: b
        } : is_number(b) && (b = {
            items: b
        }), b
    }

    function go_complementSwipeObject(a, b) {
        return is_boolean(b.onTouch) || (b.onTouch = !0), is_boolean(b.onMouse) || (b.onMouse = !1), is_object(b.options) || (b.options = {}), is_boolean(b.options.triggerOnTouchEnd) || (b.options.triggerOnTouchEnd = !1), b
    }

    function go_getMousewheelObject(a, b) {
        return is_function(b) && (b = b.call(a)), is_true(b) ? b = {} : is_number(b) ? b = {
            items: b
        } : is_undefined(b) && (b = !1), b
    }

    function go_complementMousewheelObject(a, b) {
        return b
    }

    function gn_getItemIndex(a, b, c, d, e) {
        if (is_string(a) && (a = $(a, e)), is_object(a) && (a = $(a, e)), is_jquery(a) ? (a = e.children().index(a), is_boolean(c) || (c = !1)) : is_boolean(c) || (c = !0), is_number(a) || (a = 0), is_number(b) || (b = 0), c && (a += d.first), a += b, d.total > 0) {
            for (; a >= d.total;) a -= d.total;
            for (; 0 > a;) a += d.total
        }
        return a
    }

    function gn_getVisibleItemsPrev(a, b, c) {
        for (var d = 0, e = 0, f = c; f >= 0; f--) {
            var g = a.eq(f);
            if (d += g.is(":visible") ? g[b.d.outerWidth](!0) : 0, d > b.maxDimension) return e;
            0 == f && (f = a.length), e++
        }
    }

    function gn_getVisibleItemsPrevFilter(a, b, c) {
        return gn_getItemsPrevFilter(a, b.items.filter, b.items.visibleConf.org, c)
    }

    function gn_getScrollItemsPrevFilter(a, b, c, d) {
        return gn_getItemsPrevFilter(a, b.items.filter, d, c)
    }

    function gn_getItemsPrevFilter(a, b, c, d) {
        for (var e = 0, f = 0, g = d, h = a.length; g >= 0; g--) {
            if (f++, f == h) return f;
            var i = a.eq(g);
            if (i.is(b) && (e++, e == c)) return f;
            0 == g && (g = h)
        }
    }

    function gn_getVisibleOrg(a, b) {
        return b.items.visibleConf.org || a.children().slice(0, b.items.visible).filter(b.items.filter).length
    }

    function gn_getVisibleItemsNext(a, b, c) {
        for (var d = 0, e = 0, f = c, g = a.length - 1; g >= f; f++) {
            var h = a.eq(f);
            if (d += h.is(":visible") ? h[b.d.outerWidth](!0) : 0, d > b.maxDimension) return e;
            if (e++, e == g + 1) return e;
            f == g && (f = -1)
        }
    }

    function gn_getVisibleItemsNextTestCircular(a, b, c, d) {
        var e = gn_getVisibleItemsNext(a, b, c);
        return b.circular || c + e > d && (e = d - c), e
    }

    function gn_getVisibleItemsNextFilter(a, b, c) {
        return gn_getItemsNextFilter(a, b.items.filter, b.items.visibleConf.org, c, b.circular)
    }

    function gn_getScrollItemsNextFilter(a, b, c, d) {
        return gn_getItemsNextFilter(a, b.items.filter, d + 1, c, b.circular) - 1
    }

    function gn_getItemsNextFilter(a, b, c, d) {
        for (var f = 0, g = 0, h = d, i = a.length - 1; i >= h; h++) {
            if (g++, g >= i) return g;
            var j = a.eq(h);
            if (j.is(b) && (f++, f == c)) return g;
            h == i && (h = -1)
        }
    }

    function gi_getCurrentItems(a, b) {
        return a.slice(0, b.items.visible)
    }

    function gi_getOldItemsPrev(a, b, c) {
        return a.slice(c, b.items.visibleConf.old + c)
    }

    function gi_getNewItemsPrev(a, b) {
        return a.slice(0, b.items.visible)
    }

    function gi_getOldItemsNext(a, b) {
        return a.slice(0, b.items.visibleConf.old)
    }

    function gi_getNewItemsNext(a, b, c) {
        return a.slice(c, b.items.visible + c)
    }

    function sz_storeMargin(a, b, c) {
        b.usePadding && (is_string(c) || (c = "_cfs_origCssMargin"), a.each(function () {
            var a = $(this),
                d = parseInt(a.css(b.d.marginRight), 10);
            is_number(d) || (d = 0), a.data(c, d)
        }))
    }

    function sz_resetMargin(a, b, c) {
        if (b.usePadding) {
            var d = is_boolean(c) ? c : !1;
            is_number(c) || (c = 0), sz_storeMargin(a, b, "_cfs_tempCssMargin"), a.each(function () {
                var a = $(this);
                a.css(b.d.marginRight, d ? a.data("_cfs_tempCssMargin") : c + a.data("_cfs_origCssMargin"))
            })
        }
    }

    function sz_storeOrigCss(a) {
        a.each(function () {
            var a = $(this);
            a.data("_cfs_origCss", a.attr("style") || "")
        })
    }

    function sz_restoreOrigCss(a) {
        a.each(function () {
            var a = $(this);
            a.attr("style", a.data("_cfs_origCss") || "")
        })
    }

    function sz_setResponsiveSizes(a, b) {
        var d = (a.items.visible, a.items[a.d.width]),
            e = a[a.d.height],
            f = is_percentage(e);
        b.each(function () {
            var b = $(this),
                c = d - ms_getPaddingBorderMargin(b, a, "Width");
            b[a.d.width](c), f && b[a.d.height](ms_getPercentage(c, e))
        })
    }

    function sz_setSizes(a, b) {
        var c = a.parent(),
            d = a.children(),
            e = gi_getCurrentItems(d, b),
            f = cf_mapWrapperSizes(ms_getSizes(e, b, !0), b, !1);
        if (c.css(f), b.usePadding) {
            var g = b.padding,
                h = g[b.d[1]];
            b.align && 0 > h && (h = 0);
            var i = e.last();
            i.css(b.d.marginRight, i.data("_cfs_origCssMargin") + h), a.css(b.d.top, g[b.d[0]]), a.css(b.d.left, g[b.d[3]])
        }
        return a.css(b.d.width, f[b.d.width] + 2 * ms_getTotalSize(d, b, "width")), a.css(b.d.height, ms_getLargestSize(d, b, "height")), f
    }

    function ms_getSizes(a, b, c) {
        return [ms_getTotalSize(a, b, "width", c), ms_getLargestSize(a, b, "height", c)]
    }

    function ms_getLargestSize(a, b, c, d) {
        return is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d ? b[b.d[c]] : is_number(b.items[b.d[c]]) ? b.items[b.d[c]] : (c = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", ms_getTrueLargestSize(a, b, c))
    }

    function ms_getTrueLargestSize(a, b, c) {
        for (var d = 0, e = 0, f = a.length; f > e; e++) {
            var g = a.eq(e),
                h = g.is(":visible") ? g[b.d[c]](!0) : 0;
            h > d && (d = h)
        }
        return d
    }

    function ms_getTotalSize(a, b, c, d) {
        if (is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d) return b[b.d[c]];
        if (is_number(b.items[b.d[c]])) return b.items[b.d[c]] * a.length;
        for (var e = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", f = 0, g = 0, h = a.length; h > g; g++) {
            var i = a.eq(g);
            f += i.is(":visible") ? i[b.d[e]](!0) : 0
        }
        return f
    }

    function ms_getParentSize(a, b, c) {
        var d = a.is(":visible");
        d && a.hide();
        var e = a.parent()[b.d[c]]();
        return d && a.show(), e
    }

    function ms_getMaxDimension(a, b) {
        return is_number(a[a.d.width]) ? a[a.d.width] : b
    }

    function ms_hasVariableSizes(a, b, c) {
        for (var d = !1, e = !1, f = 0, g = a.length; g > f; f++) {
            var h = a.eq(f),
                i = h.is(":visible") ? h[b.d[c]](!0) : 0;
            d === !1 ? d = i : d != i && (e = !0), 0 == d && (e = !0)
        }
        return e
    }

    function ms_getPaddingBorderMargin(a, b, c) {
        return a[b.d["outer" + c]](!0) - a[b.d[c.toLowerCase()]]()
    }

    function ms_getPercentage(a, b) {
        if (is_percentage(b)) {
            if (b = parseInt(b.slice(0, -1), 10), !is_number(b)) return a;
            a *= b / 100
        }
        return a
    }

    function cf_e(a, b, c, d, e) {
        return is_boolean(c) || (c = !0), is_boolean(d) || (d = !0), is_boolean(e) || (e = !1), c && (a = b.events.prefix + a), d && (a = a + "." + b.events.namespace), d && e && (a += b.serialNumber), a
    }

    function cf_c(a, b) {
        return is_string(b.classnames[a]) ? b.classnames[a] : a
    }

    function cf_mapWrapperSizes(a, b, c) {
        is_boolean(c) || (c = !0);
        var d = b.usePadding && c ? b.padding : [0, 0, 0, 0],
            e = {};
        return e[b.d.width] = a[0] + d[1] + d[3], e[b.d.height] = a[1] + d[0] + d[2], e
    }

    function cf_sortParams(a, b) {
        for (var c = [], d = 0, e = a.length; e > d; d++)
            for (var f = 0, g = b.length; g > f; f++)
                if (b[f].indexOf(typeof a[d]) > -1 && is_undefined(c[f])) {
                    c[f] = a[d];
                    break
                } return c
    }

    function cf_getPadding(a) {
        if (is_undefined(a)) return [0, 0, 0, 0];
        if (is_number(a)) return [a, a, a, a];
        if (is_string(a) && (a = a.split("px").join("").split("em").join("").split(" ")), !is_array(a)) return [0, 0, 0, 0];
        for (var b = 0; 4 > b; b++) a[b] = parseInt(a[b], 10);
        switch (a.length) {
            case 0:
                return [0, 0, 0, 0];
            case 1:
                return [a[0], a[0], a[0], a[0]];
            case 2:
                return [a[0], a[1], a[0], a[1]];
            case 3:
                return [a[0], a[1], a[2], a[1]];
            default:
                return [a[0], a[1], a[2], a[3]]
        }
    }

    function cf_getAlignPadding(a, b) {
        var c = is_number(b[b.d.width]) ? Math.ceil(b[b.d.width] - ms_getTotalSize(a, b, "width")) : 0;
        switch (b.align) {
            case "left":
                return [0, c];
            case "right":
                return [c, 0];
            case "center":
            default:
                return [Math.ceil(c / 2), Math.floor(c / 2)]
        }
    }

    function cf_getDimensions(a) {
        for (var b = [
                ["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3],
                ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]
            ], c = b[0].length, d = "right" == a.direction || "left" == a.direction ? 0 : 1, e = {}, f = 0; c > f; f++) e[b[0][f]] = b[d][f];
        return e
    }

    function cf_getAdjust(a, b, c, d) {
        var e = a;
        if (is_function(c)) e = c.call(d, e);
        else if (is_string(c)) {
            var f = c.split("+"),
                g = c.split("-");
            if (g.length > f.length) var h = !0,
                i = g[0],
                j = g[1];
            else var h = !1,
                i = f[0],
                j = f[1];
            switch (i) {
                case "even":
                    e = 1 == a % 2 ? a - 1 : a;
                    break;
                case "odd":
                    e = 0 == a % 2 ? a - 1 : a;
                    break;
                default:
                    e = a
            }
            j = parseInt(j, 10), is_number(j) && (h && (j = -j), e += j)
        }
        return (!is_number(e) || 1 > e) && (e = 1), e
    }

    function cf_getItemsAdjust(a, b, c, d) {
        return cf_getItemAdjustMinMax(cf_getAdjust(a, b, c, d), b.items.visibleConf)
    }

    function cf_getItemAdjustMinMax(a, b) {
        return is_number(b.min) && b.min > a && (a = b.min), is_number(b.max) && a > b.max && (a = b.max), 1 > a && (a = 1), a
    }

    function cf_getSynchArr(a) {
        is_array(a) || (a = [
            [a]
        ]), is_array(a[0]) || (a = [a]);
        for (var b = 0, c = a.length; c > b; b++) is_string(a[b][0]) && (a[b][0] = $(a[b][0])), is_boolean(a[b][1]) || (a[b][1] = !0), is_boolean(a[b][2]) || (a[b][2] = !0), is_number(a[b][3]) || (a[b][3] = 0);
        return a
    }

    function cf_getKeyCode(a) {
        return "right" == a ? 39 : "left" == a ? 37 : "up" == a ? 38 : "down" == a ? 40 : -1
    }

    function cf_setCookie(a, b, c) {
        if (a) {
            var d = b.triggerHandler(cf_e("currentPosition", c));
            $.fn.carouFredSel.cookie.set(a, d)
        }
    }

    function cf_getCookie(a) {
        var b = $.fn.carouFredSel.cookie.get(a);
        return "" == b ? 0 : b
    }

    function in_mapCss(a, b) {
        for (var c = {}, d = 0, e = b.length; e > d; d++) c[b[d]] = a.css(b[d]);
        return c
    }

    function in_complementItems(a, b, c, d) {
        return is_object(a.visibleConf) || (a.visibleConf = {}), is_object(a.sizesConf) || (a.sizesConf = {}), 0 == a.start && is_number(d) && (a.start = d), is_object(a.visible) ? (a.visibleConf.min = a.visible.min, a.visibleConf.max = a.visible.max, a.visible = !1) : is_string(a.visible) ? ("variable" == a.visible ? a.visibleConf.variable = !0 : a.visibleConf.adjust = a.visible, a.visible = !1) : is_function(a.visible) && (a.visibleConf.adjust = a.visible, a.visible = !1), is_string(a.filter) || (a.filter = c.filter(":hidden").length > 0 ? ":visible" : "*"), a[b.d.width] || (b.responsive ? (debug(!0, "Set a " + b.d.width + " for the items!"), a[b.d.width] = ms_getTrueLargestSize(c, b, "outerWidth")) : a[b.d.width] = ms_hasVariableSizes(c, b, "outerWidth") ? "variable" : c[b.d.outerWidth](!0)), a[b.d.height] || (a[b.d.height] = ms_hasVariableSizes(c, b, "outerHeight") ? "variable" : c[b.d.outerHeight](!0)), a.sizesConf.width = a.width, a.sizesConf.height = a.height, a
    }

    function in_complementVisibleItems(a, b) {
        return "variable" == a.items[a.d.width] && (a.items.visibleConf.variable = !0), a.items.visibleConf.variable || (is_number(a[a.d.width]) ? a.items.visible = Math.floor(a[a.d.width] / a.items[a.d.width]) : (a.items.visible = Math.floor(b / a.items[a.d.width]), a[a.d.width] = a.items.visible * a.items[a.d.width], a.items.visibleConf.adjust || (a.align = !1)), ("Infinity" == a.items.visible || 1 > a.items.visible) && (debug(!0, 'Not a valid number of visible items: Set to "variable".'), a.items.visibleConf.variable = !0)), a
    }

    function in_complementPrimarySize(a, b, c) {
        return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerWidth")), a
    }

    function in_complementSecondarySize(a, b, c) {
        return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerHeight")), a || (a = b.items[b.d.height]), a
    }

    function in_getAlignPadding(a, b) {
        var c = cf_getAlignPadding(gi_getCurrentItems(b, a), a);
        return a.padding[a.d[1]] = c[1], a.padding[a.d[3]] = c[0], a
    }

    function in_getResponsiveValues(a, b) {
        var d = cf_getItemAdjustMinMax(Math.ceil(a[a.d.width] / a.items[a.d.width]), a.items.visibleConf);
        d > b.length && (d = b.length);
        var e = Math.floor(a[a.d.width] / d);
        return a.items.visible = d, a.items[a.d.width] = e, a[a.d.width] = d * e, a
    }

    function bt_pauseOnHoverConfig(a) {
        if (is_string(a)) var b = a.indexOf("immediate") > -1 ? !0 : !1,
            c = a.indexOf("resume") > -1 ? !0 : !1;
        else var b = c = !1;
        return [b, c]
    }

    function bt_mousesheelNumber(a) {
        return is_number(a) ? a : null
    }

    function is_null(a) {
        return null === a
    }

    function is_undefined(a) {
        return is_null(a) || a === void 0 || "" === a || "undefined" === a
    }

    function is_array(a) {
        return a instanceof Array
    }

    function is_jquery(a) {
        return a instanceof jQuery
    }

    function is_object(a) {
        return (a instanceof Object || "object" == typeof a) && !is_null(a) && !is_jquery(a) && !is_array(a) && !is_function(a)
    }

    function is_number(a) {
        return (a instanceof Number || "number" == typeof a) && !isNaN(a)
    }

    function is_string(a) {
        return (a instanceof String || "string" == typeof a) && !is_undefined(a) && !is_true(a) && !is_false(a)
    }

    function is_function(a) {
        return a instanceof Function || "function" == typeof a
    }

    function is_boolean(a) {
        return a instanceof Boolean || "boolean" == typeof a || is_true(a) || is_false(a)
    }

    function is_true(a) {
        return a === !0 || "true" === a
    }

    function is_false(a) {
        return a === !1 || "false" === a
    }

    function is_percentage(a) {
        return is_string(a) && "%" == a.slice(-1)
    }

    function getTime() {
        return (new Date).getTime()
    }

    function deprecated(a, b) {
        debug(!0, a + " is DEPRECATED, support for it will be removed. Use " + b + " instead.")
    }

    function debug(a, b) {
        if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
            if (is_object(a)) {
                var c = " (" + a.selector + ")";
                a = a.debug
            } else var c = "";
            if (!a) return !1;
            b = is_string(b) ? "carouFredSel" + c + ": " + b : ["carouFredSel" + c + ":", b], window.console.log(b)
        }
        return !1
    }
    $.fn.carouFredSel || ($.fn.caroufredsel = $.fn.carouFredSel = function (options, configs) {
        if (0 == this.length) return debug(!0, 'No element found for "' + this.selector + '".'), this;
        if (this.length > 1) return this.each(function () {
            $(this).carouFredSel(options, configs)
        });
        var $cfs = this,
            $tt0 = this[0],
            starting_position = !1;
        $cfs.data("_cfs_isCarousel") && (starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition"), $cfs.trigger("_cfs_triggerEvent", ["destroy", !0]));
        var FN = {};
        FN._init = function (a, b, c) {
            a = go_getObject($tt0, a), a.items = go_getItemsObject($tt0, a.items), a.scroll = go_getScrollObject($tt0, a.scroll), a.auto = go_getAutoObject($tt0, a.auto), a.prev = go_getPrevNextObject($tt0, a.prev), a.next = go_getPrevNextObject($tt0, a.next), a.pagination = go_getPaginationObject($tt0, a.pagination), a.swipe = go_getSwipeObject($tt0, a.swipe), a.mousewheel = go_getMousewheelObject($tt0, a.mousewheel), b && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, a)), opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, a), opts.d = cf_getDimensions(opts), crsl.direction = "up" == opts.direction || "left" == opts.direction ? "next" : "prev";
            var d = $cfs.children(),
                e = ms_getParentSize($wrp, opts, "width");
            if (is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber), opts.maxDimension = ms_getMaxDimension(opts, e), opts.items = in_complementItems(opts.items, opts, d, c), opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, d), opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, d), opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%")), is_percentage(opts[opts.d.width]) && (crsl.upDateOnWindowResize = !0, crsl.primarySizePercentage = opts[opts.d.width], opts[opts.d.width] = ms_getPercentage(e, crsl.primarySizePercentage), opts.items.visible || (opts.items.visibleConf.variable = !0)), opts.responsive ? (opts.usePadding = !1, opts.padding = [0, 0, 0, 0], opts.align = !1, opts.items.visibleConf.variable = !1) : (opts.items.visible || (opts = in_complementVisibleItems(opts, e)), opts[opts.d.width] || (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && "*" == opts.items.filter ? (opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width], opts.align = !1) : opts[opts.d.width] = "variable"), is_undefined(opts.align) && (opts.align = is_number(opts[opts.d.width]) ? "center" : !1), opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(d, opts, 0))), "*" == opts.items.filter || opts.items.visibleConf.variable || (opts.items.visibleConf.org = opts.items.visible, opts.items.visible = gn_getVisibleItemsNextFilter(d, opts, 0)), opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts.responsive) opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible), opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible), opts = in_getResponsiveValues(opts, d, e);
            else switch (opts.padding = cf_getPadding(opts.padding), "top" == opts.align ? opts.align = "left" : "bottom" == opts.align && (opts.align = "right"), opts.align) {
                case "center":
                case "left":
                case "right":
                    "variable" != opts[opts.d.width] && (opts = in_getAlignPadding(opts, d), opts.usePadding = !0);
                    break;
                default:
                    opts.align = !1, opts.usePadding = 0 == opts.padding[0] && 0 == opts.padding[1] && 0 == opts.padding[2] && 0 == opts.padding[3] ? !1 : !0
            }
            is_number(opts.scroll.duration) || (opts.scroll.duration = 500), is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || "*" != opts.items.filter ? "visible" : opts.items.visible), opts.auto = $.extend(!0, {}, opts.scroll, opts.auto), opts.prev = $.extend(!0, {}, opts.scroll, opts.prev), opts.next = $.extend(!0, {}, opts.scroll, opts.next), opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination), opts.auto = go_complementAutoObject($tt0, opts.auto), opts.prev = go_complementPrevNextObject($tt0, opts.prev), opts.next = go_complementPrevNextObject($tt0, opts.next), opts.pagination = go_complementPaginationObject($tt0, opts.pagination), opts.swipe = go_complementSwipeObject($tt0, opts.swipe), opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel), opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise)), opts.auto.onPauseStart && (opts.auto.onTimeoutStart = opts.auto.onPauseStart, deprecated("auto.onPauseStart", "auto.onTimeoutStart")), opts.auto.onPausePause && (opts.auto.onTimeoutPause = opts.auto.onPausePause, deprecated("auto.onPausePause", "auto.onTimeoutPause")), opts.auto.onPauseEnd && (opts.auto.onTimeoutEnd = opts.auto.onPauseEnd, deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")), opts.auto.pauseDuration && (opts.auto.timeoutDuration = opts.auto.pauseDuration, deprecated("auto.pauseDuration", "auto.timeoutDuration"))
        }, FN._build = function () {
            $cfs.data("_cfs_isCarousel", !0);
            var a = $cfs.children(),
                b = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]),
                c = "relative";
            switch (b.position) {
                case "absolute":
                case "fixed":
                    c = b.position
            }
            "parent" == conf.wrapper ? sz_storeOrigCss($wrp) : $wrp.css(b), $wrp.css({
                overflow: "hidden",
                position: c
            }), sz_storeOrigCss($cfs), $cfs.data("_cfs_origCssZindex", b.zIndex), $cfs.css({
                textAlign: "left",
                "float": "none",
                position: "absolute",
                top: 0,
                right: "auto",
                bottom: "auto",
                left: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0
            }), sz_storeMargin(a, opts), sz_storeOrigCss(a), opts.responsive && sz_setResponsiveSizes(opts, a)
        }, FN._bind_events = function () {
            FN._unbind_events(), $cfs.bind(cf_e("stop", conf), function (a, b) {
                return a.stopPropagation(), crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf)), crsl.isStopped = !0, opts.auto.play && (opts.auto.play = !1, $cfs.trigger(cf_e("pause", conf), b)), !0
            }), $cfs.bind(cf_e("finish", conf), function (a) {
                return a.stopPropagation(), crsl.isScrolling && sc_stopScroll(scrl), !0
            }), $cfs.bind(cf_e("pause", conf), function (a, b, c) {
                if (a.stopPropagation(), tmrs = sc_clearTimers(tmrs), b && crsl.isScrolling) {
                    scrl.isStopped = !0;
                    var d = getTime() - scrl.startTime;
                    scrl.duration -= d, scrl.pre && (scrl.pre.duration -= d), scrl.post && (scrl.post.duration -= d), sc_stopScroll(scrl, !1)
                }
                if (crsl.isPaused || crsl.isScrolling || c && (tmrs.timePassed += getTime() - tmrs.startTime), crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf)), crsl.isPaused = !0, opts.auto.onTimeoutPause) {
                    var e = opts.auto.timeoutDuration - tmrs.timePassed,
                        f = 100 - Math.ceil(100 * e / opts.auto.timeoutDuration);
                    opts.auto.onTimeoutPause.call($tt0, f, e)
                }
                return !0
            }), $cfs.bind(cf_e("play", conf), function (a, b, c, d) {
                a.stopPropagation(), tmrs = sc_clearTimers(tmrs);
                var e = [b, c, d],
                    f = ["string", "number", "boolean"],
                    g = cf_sortParams(e, f);
                if (b = g[0], c = g[1], d = g[2], "prev" != b && "next" != b && (b = crsl.direction), is_number(c) || (c = 0), is_boolean(d) || (d = !1), d && (crsl.isStopped = !1, opts.auto.play = !0), !opts.auto.play) return a.stopImmediatePropagation(), debug(conf, "Carousel stopped: Not scrolling.");
                crsl.isPaused && opts.auto.button && (opts.auto.button.removeClass(cf_c("stopped", conf)), opts.auto.button.removeClass(cf_c("paused", conf))), crsl.isPaused = !1, tmrs.startTime = getTime();
                var h = opts.auto.timeoutDuration + c;
                return dur2 = h - tmrs.timePassed, perc = 100 - Math.ceil(100 * dur2 / h), opts.auto.progress && (tmrs.progress = setInterval(function () {
                    var a = getTime() - tmrs.startTime + tmrs.timePassed,
                        b = Math.ceil(100 * a / h);
                    opts.auto.progress.updater.call(opts.auto.progress.bar[0], b)
                }, opts.auto.progress.interval)), tmrs.auto = setTimeout(function () {
                    opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100), opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2), crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), b) : $cfs.trigger(cf_e(b, conf), opts.auto)
                }, dur2), opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2), !0
            }), $cfs.bind(cf_e("resume", conf), function (a) {
                return a.stopPropagation(), scrl.isStopped ? (scrl.isStopped = !1, crsl.isPaused = !1, crsl.isScrolling = !0, scrl.startTime = getTime(), sc_startScroll(scrl, conf)) : $cfs.trigger(cf_e("play", conf)), !0
            }), $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function (a, b, c, d, e) {
                if (a.stopPropagation(), crsl.isStopped || $cfs.is(":hidden")) return a.stopImmediatePropagation(), debug(conf, "Carousel stopped or hidden: Not scrolling.");
                var f = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
                if (f > itms.total) return a.stopImmediatePropagation(), debug(conf, "Not enough items (" + itms.total + " total, " + f + " needed): Not scrolling.");
                var g = [b, c, d, e],
                    h = ["object", "number/string", "function", "boolean"],
                    i = cf_sortParams(g, h);
                b = i[0], c = i[1], d = i[2], e = i[3];
                var j = a.type.slice(conf.events.prefix.length);
                if (is_object(b) || (b = {}), is_function(d) && (b.onAfter = d), is_boolean(e) && (b.queue = e), b = $.extend(!0, {}, opts[j], b), b.conditions && !b.conditions.call($tt0, j)) return a.stopImmediatePropagation(), debug(conf, 'Callback "conditions" returned false.');
                if (!is_number(c)) {
                    if ("*" != opts.items.filter) c = "visible";
                    else
                        for (var k = [c, b.items, opts[j].items], i = 0, l = k.length; l > i; i++)
                            if (is_number(k[i]) || "page" == k[i] || "visible" == k[i]) {
                                c = k[i];
                                break
                            } switch (c) {
                        case "page":
                            return a.stopImmediatePropagation(), $cfs.triggerHandler(cf_e(j + "Page", conf), [b, d]);
                        case "visible":
                            opts.items.visibleConf.variable || "*" != opts.items.filter || (c = opts.items.visible)
                    }
                }
                if (scrl.isStopped) return $cfs.trigger(cf_e("resume", conf)), $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]]), a.stopImmediatePropagation(), debug(conf, "Carousel resumed scrolling.");
                if (b.duration > 0 && crsl.isScrolling) return b.queue && ("last" == b.queue && (queu = []), ("first" != b.queue || 0 == queu.length) && $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]])), a.stopImmediatePropagation(), debug(conf, "Carousel currently scrolling.");
                if (tmrs.timePassed = 0, $cfs.trigger(cf_e("slide_" + j, conf), [b, c]), opts.synchronise)
                    for (var m = opts.synchronise, n = [b, c], o = 0, l = m.length; l > o; o++) {
                        var p = j;
                        m[o][2] || (p = "prev" == p ? "next" : "prev"), m[o][1] || (n[0] = m[o][0].triggerHandler("_cfs_triggerEvent", ["configuration", p])), n[1] = c + m[o][3], m[o][0].trigger("_cfs_triggerEvent", ["slide_" + p, n])
                    }
                return !0
            }), $cfs.bind(cf_e("slide_prev", conf), function (a, b, c) {
                a.stopPropagation();
                var d = $cfs.children();
                if (!opts.circular && 0 == itms.first) return opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1), a.stopImmediatePropagation();
                if (sz_resetMargin(d, opts), !is_number(c)) {
                    if (opts.items.visibleConf.variable) c = gn_getVisibleItemsPrev(d, opts, itms.total - 1);
                    else if ("*" != opts.items.filter) {
                        var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
                        c = gn_getScrollItemsPrevFilter(d, opts, itms.total - 1, e)
                    } else c = opts.items.visible;
                    c = cf_getAdjust(c, opts, b.items, $tt0)
                }
                if (opts.circular || itms.total - c < itms.first && (c = itms.total - itms.first), opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                    var f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0);
                    f >= opts.items.visible + c && itms.total > c && (c++, f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0)), opts.items.visible = f
                } else if ("*" != opts.items.filter) {
                    var f = gn_getVisibleItemsNextFilter(d, opts, itms.total - c);
                    opts.items.visible = cf_getItemsAdjust(f, opts, opts.items.visibleConf.adjust, $tt0)
                }
                if (sz_resetMargin(d, opts, !0), 0 == c) return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
                for (debug(conf, "Scrolling " + c + " items backward."), itms.first += c; itms.first >= itms.total;) itms.first -= itms.total;
                opts.circular || (0 == itms.first && b.onEnd && b.onEnd.call($tt0, "prev"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), $cfs.children().slice(itms.total - c, itms.total).prependTo($cfs), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
                var d = $cfs.children(),
                    g = gi_getOldItemsPrev(d, opts, c),
                    h = gi_getNewItemsPrev(d, opts),
                    i = d.eq(c - 1),
                    j = g.last(),
                    k = h.last();
                sz_resetMargin(d, opts);
                var l = 0,
                    m = 0;
                if (opts.align) {
                    var n = cf_getAlignPadding(h, opts);
                    l = n[0], m = n[1]
                }
                var o = 0 > l ? opts.padding[opts.d[3]] : 0,
                    p = !1,
                    q = $();
                if (c > opts.items.visible && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) {
                    var r = opts.items[opts.d.width];
                    p = q, i = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable"
                }
                var s = !1,
                    t = ms_getTotalSize(d.slice(0, c), opts, "width"),
                    u = cf_mapWrapperSizes(ms_getSizes(h, opts, !0), opts, !opts.usePadding),
                    v = 0,
                    w = {},
                    x = {},
                    y = {},
                    z = {},
                    A = {},
                    B = {},
                    C = {},
                    D = sc_getDuration(b, opts, c, t);
                switch (b.fx) {
                    case "cover":
                    case "cover-fade":
                        v = ms_getTotalSize(d.slice(0, opts.items.visible), opts, "width")
                }
                p && (opts.items[opts.d.width] = r), sz_resetMargin(d, opts, !0), m >= 0 && sz_resetMargin(j, opts, opts.padding[opts.d[1]]), l >= 0 && sz_resetMargin(i, opts, opts.padding[opts.d[3]]), opts.align && (opts.padding[opts.d[1]] = m, opts.padding[opts.d[3]] = l), B[opts.d.left] = -(t - o), C[opts.d.left] = -(v - o), x[opts.d.left] = u[opts.d.width];
                var E = function () {},
                    F = function () {},
                    G = function () {},
                    H = function () {},
                    I = function () {},
                    J = function () {},
                    K = function () {},
                    L = function () {},
                    M = function () {},
                    N = function () {},
                    O = function () {};
                switch (b.fx) {
                    case "crossfade":
                    case "cover":
                    case "cover-fade":
                    case "uncover":
                    case "uncover-fade":
                        s = $cfs.clone(!0).appendTo($wrp)
                }
                switch (b.fx) {
                    case "crossfade":
                    case "uncover":
                    case "uncover-fade":
                        s.children().slice(0, c).remove(), s.children().slice(opts.items.visibleConf.old).remove();
                        break;
                    case "cover":
                    case "cover-fade":
                        s.children().slice(opts.items.visible).remove(), s.css(C)
                }
                if ($cfs.css(B), scrl = sc_setScroll(D, b.easing, conf), w[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0, ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (E = function () {
                        $wrp.css(u)
                    }, F = function () {
                        scrl.anims.push([$wrp, u])
                    }), opts.usePadding) {
                    switch (k.not(i).length && (y[opts.d.marginRight] = i.data("_cfs_origCssMargin"), 0 > l ? i.css(y) : (K = function () {
                        i.css(y)
                    }, L = function () {
                        scrl.anims.push([i, y])
                    })), b.fx) {
                        case "cover":
                        case "cover-fade":
                            s.children().eq(c - 1).css(y)
                    }
                    k.not(j).length && (z[opts.d.marginRight] = j.data("_cfs_origCssMargin"), G = function () {
                        j.css(z)
                    }, H = function () {
                        scrl.anims.push([j, z])
                    }), m >= 0 && (A[opts.d.marginRight] = k.data("_cfs_origCssMargin") + opts.padding[opts.d[1]], I = function () {
                        k.css(A)
                    }, J = function () {
                        scrl.anims.push([k, A])
                    })
                }
                O = function () {
                    $cfs.css(w)
                };
                var P = opts.items.visible + c - itms.total;
                N = function () {
                    if (P > 0 && ($cfs.children().slice(itms.total).remove(), g = $($cfs.children().slice(itms.total - (opts.items.visible - P)).get().concat($cfs.children().slice(0, P).get()))), sc_showHiddenItems(p), opts.usePadding) {
                        var a = $cfs.children().eq(opts.items.visible + c - 1);
                        a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"))
                    }
                };
                var Q = sc_mapCallbackArguments(g, q, h, c, "prev", D, u);
                switch (M = function () {
                    sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", Q, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", Q, clbk), b.fx) {
                    case "none":
                        $cfs.css(w), E(), G(), I(), K(), O(), N(), M();
                        break;
                    case "fade":
                        scrl.anims.push([$cfs, {
                            opacity: 0
                        }, function () {
                            E(), G(), I(), K(), O(), N(), scrl = sc_setScroll(D, b.easing, conf), scrl.anims.push([$cfs, {
                                opacity: 1
                            }, M]), sc_startScroll(scrl, conf)
                        }]);
                        break;
                    case "crossfade":
                        $cfs.css({
                            opacity: 0
                        }), scrl.anims.push([s, {
                            opacity: 0
                        }]), scrl.anims.push([$cfs, {
                            opacity: 1
                        }, M]), F(), G(), I(), K(), O(), N();
                        break;
                    case "cover":
                        scrl.anims.push([s, w, function () {
                            G(), I(), K(), O(), N(), M()
                        }]), F();
                        break;
                    case "cover-fade":
                        scrl.anims.push([$cfs, {
                            opacity: 0
                        }]), scrl.anims.push([s, w, function () {
                            G(), I(), K(), O(), N(), M()
                        }]), F();
                        break;
                    case "uncover":
                        scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N();
                        break;
                    case "uncover-fade":
                        $cfs.css({
                            opacity: 0
                        }), scrl.anims.push([$cfs, {
                            opacity: 1
                        }]), scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N();
                        break;
                    default:
                        scrl.anims.push([$cfs, w, function () {
                            N(), M()
                        }]), F(), H(), J(), L()
                }
                return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0
            }), $cfs.bind(cf_e("slide_next", conf), function (a, b, c) {
                a.stopPropagation();
                var d = $cfs.children();
                if (!opts.circular && itms.first == opts.items.visible) return opts.infinite && $cfs.trigger(cf_e("prev", conf), itms.total - 1), a.stopImmediatePropagation();
                if (sz_resetMargin(d, opts), !is_number(c)) {
                    if ("*" != opts.items.filter) {
                        var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
                        c = gn_getScrollItemsNextFilter(d, opts, 0, e)
                    } else c = opts.items.visible;
                    c = cf_getAdjust(c, opts, b.items, $tt0)
                }
                var f = 0 == itms.first ? itms.total : itms.first;
                if (!opts.circular) {
                    if (opts.items.visibleConf.variable) var g = gn_getVisibleItemsNext(d, opts, c),
                        e = gn_getVisibleItemsPrev(d, opts, f - 1);
                    else var g = opts.items.visible,
                        e = opts.items.visible;
                    c + g > f && (c = f - e)
                }
                if (opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                    for (var g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible - c >= g && itms.total > c;) c++, g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0);
                    opts.items.visible = g
                } else if ("*" != opts.items.filter) {
                    var g = gn_getVisibleItemsNextFilter(d, opts, c);
                    opts.items.visible = cf_getItemsAdjust(g, opts, opts.items.visibleConf.adjust, $tt0)
                }
                if (sz_resetMargin(d, opts, !0), 0 == c) return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
                for (debug(conf, "Scrolling " + c + " items forward."), itms.first -= c; 0 > itms.first;) itms.first += itms.total;
                opts.circular || (itms.first == opts.items.visible && b.onEnd && b.onEnd.call($tt0, "next"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
                var d = $cfs.children(),
                    h = gi_getOldItemsNext(d, opts),
                    i = gi_getNewItemsNext(d, opts, c),
                    j = d.eq(c - 1),
                    k = h.last(),
                    l = i.last();
                sz_resetMargin(d, opts);
                var m = 0,
                    n = 0;
                if (opts.align) {
                    var o = cf_getAlignPadding(i, opts);
                    m = o[0], n = o[1]
                }
                var p = !1,
                    q = $();
                if (c > opts.items.visibleConf.old && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) {
                    var r = opts.items[opts.d.width];
                    p = q, j = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable"
                }
                var s = !1,
                    t = ms_getTotalSize(d.slice(0, c), opts, "width"),
                    u = cf_mapWrapperSizes(ms_getSizes(i, opts, !0), opts, !opts.usePadding),
                    v = 0,
                    w = {},
                    x = {},
                    y = {},
                    z = {},
                    A = {},
                    B = sc_getDuration(b, opts, c, t);
                switch (b.fx) {
                    case "uncover":
                    case "uncover-fade":
                        v = ms_getTotalSize(d.slice(0, opts.items.visibleConf.old), opts, "width")
                }
                p && (opts.items[opts.d.width] = r), opts.align && 0 > opts.padding[opts.d[1]] && (opts.padding[opts.d[1]] = 0), sz_resetMargin(d, opts, !0), sz_resetMargin(k, opts, opts.padding[opts.d[1]]), opts.align && (opts.padding[opts.d[1]] = n, opts.padding[opts.d[3]] = m), A[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
                var C = function () {},
                    D = function () {},
                    E = function () {},
                    F = function () {},
                    G = function () {},
                    H = function () {},
                    I = function () {},
                    J = function () {},
                    K = function () {};
                switch (b.fx) {
                    case "crossfade":
                    case "cover":
                    case "cover-fade":
                    case "uncover":
                    case "uncover-fade":
                        s = $cfs.clone(!0).appendTo($wrp), s.children().slice(opts.items.visibleConf.old).remove()
                }
                switch (b.fx) {
                    case "crossfade":
                    case "cover":
                    case "cover-fade":
                        $cfs.css("zIndex", 1), s.css("zIndex", 0)
                }
                if (scrl = sc_setScroll(B, b.easing, conf), w[opts.d.left] = -t, x[opts.d.left] = -v, 0 > m && (w[opts.d.left] += m), ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (C = function () {
                        $wrp.css(u)
                    }, D = function () {
                        scrl.anims.push([$wrp, u])
                    }), opts.usePadding) {
                    var L = l.data("_cfs_origCssMargin");
                    n >= 0 && (L += opts.padding[opts.d[1]]), l.css(opts.d.marginRight, L), j.not(k).length && (z[opts.d.marginRight] = k.data("_cfs_origCssMargin")), E = function () {
                        k.css(z)
                    }, F = function () {
                        scrl.anims.push([k, z])
                    };
                    var M = j.data("_cfs_origCssMargin");
                    m > 0 && (M += opts.padding[opts.d[3]]), y[opts.d.marginRight] = M, G = function () {
                        j.css(y)
                    }, H = function () {
                        scrl.anims.push([j, y])
                    }
                }
                K = function () {
                    $cfs.css(A)
                };
                var N = opts.items.visible + c - itms.total;
                J = function () {
                    N > 0 && $cfs.children().slice(itms.total).remove();
                    var a = $cfs.children().slice(0, c).appendTo($cfs).last();
                    if (N > 0 && (i = gi_getCurrentItems(d, opts)), sc_showHiddenItems(p), opts.usePadding) {
                        if (itms.total < opts.items.visible + c) {
                            var b = $cfs.children().eq(opts.items.visible - 1);
                            b.css(opts.d.marginRight, b.data("_cfs_origCssMargin") + opts.padding[opts.d[1]])
                        }
                        a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"))
                    }
                };
                var O = sc_mapCallbackArguments(h, q, i, c, "next", B, u);
                switch (I = function () {
                    $cfs.css("zIndex", $cfs.data("_cfs_origCssZindex")), sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", O, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", O, clbk), b.fx) {
                    case "none":
                        $cfs.css(w), C(), E(), G(), K(), J(), I();
                        break;
                    case "fade":
                        scrl.anims.push([$cfs, {
                            opacity: 0
                        }, function () {
                            C(), E(), G(), K(), J(), scrl = sc_setScroll(B, b.easing, conf), scrl.anims.push([$cfs, {
                                opacity: 1
                            }, I]), sc_startScroll(scrl, conf)
                        }]);
                        break;
                    case "crossfade":
                        $cfs.css({
                            opacity: 0
                        }), scrl.anims.push([s, {
                            opacity: 0
                        }]), scrl.anims.push([$cfs, {
                            opacity: 1
                        }, I]), D(), E(), G(), K(), J();
                        break;
                    case "cover":
                        $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J();
                        break;
                    case "cover-fade":
                        $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([s, {
                            opacity: 0
                        }]), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J();
                        break;
                    case "uncover":
                        scrl.anims.push([s, x, I]), D(), E(), G(), K(), J();
                        break;
                    case "uncover-fade":
                        $cfs.css({
                            opacity: 0
                        }), scrl.anims.push([$cfs, {
                            opacity: 1
                        }]), scrl.anims.push([s, x, I]), D(), E(), G(), K(), J();
                        break;
                    default:
                        scrl.anims.push([$cfs, w, function () {
                            K(), J(), I()
                        }]), D(), F(), H()
                }
                return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0
            }), $cfs.bind(cf_e("slideTo", conf), function (a, b, c, d, e, f, g) {
                a.stopPropagation();
                var h = [b, c, d, e, f, g],
                    i = ["string/number/object", "number", "boolean", "object", "string", "function"],
                    j = cf_sortParams(h, i);
                return e = j[3], f = j[4], g = j[5], b = gn_getItemIndex(j[0], j[1], j[2], itms, $cfs), 0 == b ? !1 : (is_object(e) || (e = !1), "prev" != f && "next" != f && (f = opts.circular ? itms.total / 2 >= b ? "next" : "prev" : 0 == itms.first || itms.first > b ? "next" : "prev"), "prev" == f && (b = itms.total - b), $cfs.trigger(cf_e(f, conf), [e, b, g]), !0)
            }), $cfs.bind(cf_e("prevPage", conf), function (a, b, c) {
                a.stopPropagation();
                var d = $cfs.triggerHandler(cf_e("currentPage", conf));
                return $cfs.triggerHandler(cf_e("slideToPage", conf), [d - 1, b, "prev", c])
            }), $cfs.bind(cf_e("nextPage", conf), function (a, b, c) {
                a.stopPropagation();
                var d = $cfs.triggerHandler(cf_e("currentPage", conf));
                return $cfs.triggerHandler(cf_e("slideToPage", conf), [d + 1, b, "next", c])
            }), $cfs.bind(cf_e("slideToPage", conf), function (a, b, c, d, e) {
                a.stopPropagation(), is_number(b) || (b = $cfs.triggerHandler(cf_e("currentPage", conf)));
                var f = opts.pagination.items || opts.items.visible,
                    g = Math.ceil(itms.total / f) - 1;
                return 0 > b && (b = g), b > g && (b = 0), $cfs.triggerHandler(cf_e("slideTo", conf), [b * f, 0, !0, c, d, e])
            }), $cfs.bind(cf_e("jumpToStart", conf), function (a, b) {
                if (a.stopPropagation(), b = b ? gn_getItemIndex(b, 0, !0, itms, $cfs) : 0, b += itms.first, 0 != b) {
                    if (itms.total > 0)
                        for (; b > itms.total;) b -= itms.total;
                    $cfs.prepend($cfs.children().slice(b, itms.total))
                }
                return !0
            }), $cfs.bind(cf_e("synchronise", conf), function (a, b) {
                if (a.stopPropagation(), b) b = cf_getSynchArr(b);
                else {
                    if (!opts.synchronise) return debug(conf, "No carousel to synchronise.");
                    b = opts.synchronise
                }
                for (var c = $cfs.triggerHandler(cf_e("currentPosition", conf)), d = !0, e = 0, f = b.length; f > e; e++) b[e][0].triggerHandler(cf_e("slideTo", conf), [c, b[e][3], !0]) || (d = !1);
                return d
            }), $cfs.bind(cf_e("queue", conf), function (a, b, c) {
                return a.stopPropagation(), is_function(b) ? b.call($tt0, queu) : is_array(b) ? queu = b : is_undefined(b) || queu.push([b, c]), queu
            }), $cfs.bind(cf_e("insertItem", conf), function (a, b, c, d, e) {
                a.stopPropagation();
                var f = [b, c, d, e],
                    g = ["string/object", "string/number/object", "boolean", "number"],
                    h = cf_sortParams(f, g);
                if (b = h[0], c = h[1], d = h[2], e = h[3], is_object(b) && !is_jquery(b) ? b = $(b) : is_string(b) && (b = $(b)), !is_jquery(b) || 0 == b.length) return debug(conf, "Not a valid object.");
                is_undefined(c) && (c = "end"), sz_storeMargin(b, opts), sz_storeOrigCss(b);
                var i = c,
                    j = "before";
                "end" == c ? d ? (0 == itms.first ? (c = itms.total - 1, j = "after") : (c = itms.first, itms.first += b.length), 0 > c && (c = 0)) : (c = itms.total - 1, j = "after") : c = gn_getItemIndex(c, e, d, itms, $cfs);
                var k = $cfs.children().eq(c);
                return k.length ? k[j](b) : (debug(conf, "Correct insert-position not found! Appending item to the end."), $cfs.append(b)), "end" == i || d || itms.first > c && (itms.first += b.length), itms.total = $cfs.children().length, itms.first >= itms.total && (itms.first -= itms.total), $cfs.trigger(cf_e("updateSizes", conf)), $cfs.trigger(cf_e("linkAnchors", conf)), !0
            }), $cfs.bind(cf_e("removeItem", conf), function (a, b, c, d) {
                a.stopPropagation();
                var e = [b, c, d],
                    f = ["string/number/object", "boolean", "number"],
                    g = cf_sortParams(e, f);
                if (b = g[0], c = g[1], d = g[2], b instanceof $ && b.length > 1) return i = $(), b.each(function () {
                    var e = $cfs.trigger(cf_e("removeItem", conf), [$(this), c, d]);
                    e && (i = i.add(e))
                }), i;
                if (is_undefined(b) || "end" == b) i = $cfs.children().last();
                else {
                    b = gn_getItemIndex(b, d, c, itms, $cfs);
                    var i = $cfs.children().eq(b);
                    i.length && itms.first > b && (itms.first -= i.length)
                }
                return i && i.length && (i.detach(), itms.total = $cfs.children().length, $cfs.trigger(cf_e("updateSizes", conf))), i
            }), $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function (a, b) {
                a.stopPropagation();
                var c = a.type.slice(conf.events.prefix.length);
                return is_array(b) && (clbk[c] = b), is_function(b) && clbk[c].push(b), clbk[c]
            }), $cfs.bind(cf_e("currentPosition", conf), function (a, b) {
                if (a.stopPropagation(), 0 == itms.first) var c = 0;
                else var c = itms.total - itms.first;
                return is_function(b) && b.call($tt0, c), c
            }), $cfs.bind(cf_e("currentPage", conf), function (a, b) {
                a.stopPropagation();
                var e, c = opts.pagination.items || opts.items.visible,
                    d = Math.ceil(itms.total / c - 1);
                return e = 0 == itms.first ? 0 : itms.first < itms.total % c ? 0 : itms.first != c || opts.circular ? Math.round((itms.total - itms.first) / c) : d, 0 > e && (e = 0), e > d && (e = d), is_function(b) && b.call($tt0, e), e
            }), $cfs.bind(cf_e("currentVisible", conf), function (a, b) {
                a.stopPropagation();
                var c = gi_getCurrentItems($cfs.children(), opts);
                return is_function(b) && b.call($tt0, c), c
            }), $cfs.bind(cf_e("slice", conf), function (a, b, c, d) {
                if (a.stopPropagation(), 0 == itms.total) return !1;
                var e = [b, c, d],
                    f = ["number", "number", "function"],
                    g = cf_sortParams(e, f);
                if (b = is_number(g[0]) ? g[0] : 0, c = is_number(g[1]) ? g[1] : itms.total, d = g[2], b += itms.first, c += itms.first, itms.total > 0) {
                    for (; b > itms.total;) b -= itms.total;
                    for (; c > itms.total;) c -= itms.total;
                    for (; 0 > b;) b += itms.total;
                    for (; 0 > c;) c += itms.total
                }
                var i, h = $cfs.children();
                return i = c > b ? h.slice(b, c) : $(h.slice(b, itms.total).get().concat(h.slice(0, c).get())), is_function(d) && d.call($tt0, i), i
            }), $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function (a, b) {
                a.stopPropagation();
                var c = a.type.slice(conf.events.prefix.length),
                    d = crsl[c];
                return is_function(b) && b.call($tt0, d), d
            }), $cfs.bind(cf_e("configuration", conf), function (e, a, b, c) {
                e.stopPropagation();
                var reInit = !1;
                if (is_function(a)) a.call($tt0, opts);
                else if (is_object(a)) opts_orig = $.extend(!0, {}, opts_orig, a), b !== !1 ? reInit = !0 : opts = $.extend(!0, {}, opts, a);
                else if (!is_undefined(a))
                    if (is_function(b)) {
                        var val = eval("opts." + a);
                        is_undefined(val) && (val = ""), b.call($tt0, val)
                    } else {
                        if (is_undefined(b)) return eval("opts." + a);
                        "boolean" != typeof c && (c = !0), eval("opts_orig." + a + " = b"), c !== !1 ? reInit = !0 : eval("opts." + a + " = b")
                    } if (reInit) {
                    sz_resetMargin($cfs.children(), opts), FN._init(opts_orig), FN._bind_buttons();
                    var sz = sz_setSizes($cfs, opts);
                    $cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz])
                }
                return opts
            }), $cfs.bind(cf_e("linkAnchors", conf), function (a, b, c) {
                return a.stopPropagation(), is_undefined(b) ? b = $("body") : is_string(b) && (b = $(b)), is_jquery(b) && 0 != b.length ? (is_string(c) || (c = "a.caroufredsel"), b.find(c).each(function () {
                    var a = this.hash || "";
                    a.length > 0 && -1 != $cfs.children().index($(a)) && $(this).unbind("click").click(function (b) {
                        b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), a)
                    })
                }), !0) : debug(conf, "Not a valid object.")
            }), $cfs.bind(cf_e("updatePageStatus", conf), function (a, b) {
                if (a.stopPropagation(), opts.pagination.container) {
                    var d = opts.pagination.items || opts.items.visible,
                        e = Math.ceil(itms.total / d);
                    b && (opts.pagination.anchorBuilder && (opts.pagination.container.children().remove(), opts.pagination.container.each(function () {
                        for (var a = 0; e > a; a++) {
                            var b = $cfs.children().eq(gn_getItemIndex(a * d, 0, !0, itms, $cfs));
                            $(this).append(opts.pagination.anchorBuilder.call(b[0], a + 1))
                        }
                    })), opts.pagination.container.each(function () {
                        $(this).children().unbind(opts.pagination.event).each(function (a) {
                            $(this).bind(opts.pagination.event, function (b) {
                                b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [a * d, -opts.pagination.deviation, !0, opts.pagination])
                            })
                        })
                    }));
                    var f = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
                    return f >= e && (f = 0), 0 > f && (f = e - 1), opts.pagination.container.each(function () {
                        $(this).children().removeClass(cf_c("selected", conf)).eq(f).addClass(cf_c("selected", conf))
                    }), !0
                }
            }), $cfs.bind(cf_e("updateSizes", conf), function () {
                var b = opts.items.visible,
                    c = $cfs.children(),
                    d = ms_getParentSize($wrp, opts, "width");
                if (itms.total = c.length, crsl.primarySizePercentage ? (opts.maxDimension = d, opts[opts.d.width] = ms_getPercentage(d, crsl.primarySizePercentage)) : opts.maxDimension = ms_getMaxDimension(opts, d), opts.responsive ? (opts.items.width = opts.items.sizesConf.width, opts.items.height = opts.items.sizesConf.height, opts = in_getResponsiveValues(opts, c, d), b = opts.items.visible, sz_setResponsiveSizes(opts, c)) : opts.items.visibleConf.variable ? b = gn_getVisibleItemsNext(c, opts, 0) : "*" != opts.items.filter && (b = gn_getVisibleItemsNextFilter(c, opts, 0)), !opts.circular && 0 != itms.first && b > itms.first) {
                    if (opts.items.visibleConf.variable) var e = gn_getVisibleItemsPrev(c, opts, itms.first) - itms.first;
                    else if ("*" != opts.items.filter) var e = gn_getVisibleItemsPrevFilter(c, opts, itms.first) - itms.first;
                    else var e = opts.items.visible - itms.first;
                    debug(conf, "Preventing non-circular: sliding " + e + " items backward."), $cfs.trigger(cf_e("prev", conf), e)
                }
                opts.items.visible = cf_getItemsAdjust(b, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts = in_getAlignPadding(opts, c);
                var f = sz_setSizes($cfs, opts);
                return $cfs.trigger(cf_e("updatePageStatus", conf), [!0, f]), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), f
            }), $cfs.bind(cf_e("destroy", conf), function (a, b) {
                return a.stopPropagation(), tmrs = sc_clearTimers(tmrs), $cfs.data("_cfs_isCarousel", !1), $cfs.trigger(cf_e("finish", conf)), b && $cfs.trigger(cf_e("jumpToStart", conf)), sz_restoreOrigCss($cfs.children()), sz_restoreOrigCss($cfs), FN._unbind_events(), FN._unbind_buttons(), "parent" == conf.wrapper ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs), !0
            }), $cfs.bind(cf_e("debug", conf), function () {
                return debug(conf, "Carousel width: " + opts.width), debug(conf, "Carousel height: " + opts.height), debug(conf, "Item widths: " + opts.items.width), debug(conf, "Item heights: " + opts.items.height), debug(conf, "Number of items visible: " + opts.items.visible), opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items), opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items), opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items), conf.debug
            }), $cfs.bind("_cfs_triggerEvent", function (a, b, c) {
                return a.stopPropagation(), $cfs.triggerHandler(cf_e(b, conf), c)
            })
        }, FN._unbind_events = function () {
            $cfs.unbind(cf_e("", conf)), $cfs.unbind(cf_e("", conf, !1)), $cfs.unbind("_cfs_triggerEvent")
        }, FN._bind_buttons = function () {
            if (FN._unbind_buttons(), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), opts.auto.pauseOnHover) {
                var a = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
                $wrp.bind(cf_e("mouseenter", conf, !1), function () {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function () {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function (a) {
                    a.preventDefault();
                    var b = !1,
                        c = null;
                    crsl.isPaused ? b = "play" : opts.auto.pauseOnEvent && (b = "pause", c = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)), b && $cfs.trigger(cf_e(b, conf), c)
                }), opts.prev.button && (opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function (a) {
                    a.preventDefault(), $cfs.trigger(cf_e("prev", conf))
                }), opts.prev.pauseOnHover)) {
                var a = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
                opts.prev.button.bind(cf_e("mouseenter", conf, !1), function () {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function () {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.next.button && (opts.next.button.bind(cf_e(opts.next.event, conf, !1), function (a) {
                    a.preventDefault(), $cfs.trigger(cf_e("next", conf))
                }), opts.next.pauseOnHover)) {
                var a = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
                opts.next.button.bind(cf_e("mouseenter", conf, !1), function () {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function () {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.pagination.container && opts.pagination.pauseOnHover) {
                var a = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
                opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function () {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function () {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if ((opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function (a) {
                    var b = a.keyCode;
                    b == opts.next.key && (a.preventDefault(), $cfs.trigger(cf_e("next", conf))), b == opts.prev.key && (a.preventDefault(), $cfs.trigger(cf_e("prev", conf)))
                }), opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function (a) {
                    var b = a.keyCode;
                    b >= 49 && 58 > b && (b = (b - 49) * opts.items.visible, itms.total >= b && (a.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [b, 0, !0, opts.pagination])))
                }), $.fn.swipe) {
                var b = "ontouchstart" in window;
                if (b && opts.swipe.onTouch || !b && opts.swipe.onMouse) {
                    var c = $.extend(!0, {}, opts.prev, opts.swipe),
                        d = $.extend(!0, {}, opts.next, opts.swipe),
                        e = function () {
                            $cfs.trigger(cf_e("prev", conf), [c])
                        },
                        f = function () {
                            $cfs.trigger(cf_e("next", conf), [d])
                        };
                    switch (opts.direction) {
                        case "up":
                        case "down":
                            opts.swipe.options.swipeUp = f, opts.swipe.options.swipeDown = e;
                            break;
                        default:
                            opts.swipe.options.swipeLeft = f, opts.swipe.options.swipeRight = e
                    }
                    crsl.swipe && $cfs.swipe("destroy"), $wrp.swipe(opts.swipe.options), $wrp.css("cursor", "move"), crsl.swipe = !0
                }
            }
            if ($.fn.mousewheel && opts.mousewheel) {
                var g = $.extend(!0, {}, opts.prev, opts.mousewheel),
                    h = $.extend(!0, {}, opts.next, opts.mousewheel);
                crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1)), $wrp.bind(cf_e("mousewheel", conf, !1), function (a, b) {
                    a.preventDefault(), b > 0 ? $cfs.trigger(cf_e("prev", conf), [g]) : $cfs.trigger(cf_e("next", conf), [h])
                }), crsl.mousewheel = !0
            }
            if (opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay), crsl.upDateOnWindowResize) {
                var i = function () {
                        $cfs.trigger(cf_e("finish", conf)), opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf)), sz_resetMargin($cfs.children(), opts), $cfs.trigger(cf_e("updateSizes", conf))
                    },
                    j = $(window),
                    k = null;
                if ($.debounce && "debounce" == conf.onWindowResize) k = $.debounce(200, i);
                else if ($.throttle && "throttle" == conf.onWindowResize) k = $.throttle(300, i);
                else {
                    var l = 0,
                        m = 0;
                    k = function () {
                        var a = j.width(),
                            b = j.height();
                        (a != l || b != m) && (i(), l = a, m = b)
                    }
                }
                j.bind(cf_e("resize", conf, !1, !0, !0), k)
            }
        }, FN._unbind_buttons = function () {
            var b = (cf_e("", conf), cf_e("", conf, !1));
            var ns3 = cf_e("", conf, !1, !0, !0);
            $(document).unbind(ns3), $(window).unbind(ns3), $wrp.unbind(b), opts.auto.button && opts.auto.button.unbind(b), opts.prev.button && opts.prev.button.unbind(b), opts.next.button && opts.next.button.unbind(b), opts.pagination.container && (opts.pagination.container.unbind(b), opts.pagination.anchorBuilder && opts.pagination.container.children().remove()), crsl.swipe && ($cfs.swipe("destroy"), $wrp.css("cursor", "default"), crsl.swipe = !1), crsl.mousewheel && (crsl.mousewheel = !1), nv_showNavi(opts, "hide", conf), nv_enableNavi(opts, "removeClass", conf)
        }, is_boolean(configs) && (configs = {
            debug: configs
        });
        var crsl = {
                direction: "next",
                isPaused: !0,
                isScrolling: !1,
                isStopped: !1,
                mousewheel: !1,
                swipe: !1
            },
            itms = {
                total: $cfs.children().length,
                first: 0
            },
            tmrs = {
                auto: null,
                progress: null,
                startTime: getTime(),
                timePassed: 0
            },
            scrl = {
                isStopped: !1,
                duration: 0,
                startTime: 0,
                easing: "",
                anims: []
            },
            clbk = {
                onBefore: [],
                onAfter: []
            },
            queu = [],
            conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs),
            opts = {},
            opts_orig = $.extend(!0, {}, options),
            $wrp = "parent" == conf.wrapper ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
        if (conf.selector = $cfs.selector, conf.serialNumber = $.fn.carouFredSel.serialNumber++, conf.transition = conf.transition && $.fn.transition ? "transition" : "animate", FN._init(opts_orig, !0, starting_position), FN._build(), FN._bind_events(), FN._bind_buttons(), is_array(opts.items.start)) var start_arr = opts.items.start;
        else {
            var start_arr = [];
            0 != opts.items.start && start_arr.push(opts.items.start)
        }
        if (opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10)), start_arr.length > 0)
            for (var a = 0, l = start_arr.length; l > a; a++) {
                var s = start_arr[a];
                if (0 != s) {
                    if (s === !0) {
                        if (s = window.location.hash, 1 > s.length) continue
                    } else "random" === s && (s = Math.floor(Math.random() * itms.total));
                    if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, {
                            fx: "none"
                        }])) break
                }
            }
        var siz = sz_setSizes($cfs, opts),
            itm = gi_getCurrentItems($cfs.children(), opts);
        return opts.onCreate && opts.onCreate.call($tt0, {
            width: siz.width,
            height: siz.height,
            items: itm
        }), $cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]), $cfs.trigger(cf_e("linkAnchors", conf)), conf.debug && $cfs.trigger(cf_e("debug", conf)), $cfs
    }, $.fn.carouFredSel.serialNumber = 1, $.fn.carouFredSel.defaults = {
        synchronise: !1,
        infinite: !0,
        circular: !0,
        responsive: !1,
        direction: "left",
        items: {
            start: 0
        },
        scroll: {
            easing: "swing",
            duration: 500,
            pauseOnHover: !1,
            event: "click",
            queue: !1
        }
    }, $.fn.carouFredSel.configs = {
        debug: !1,
        transition: !1,
        onWindowResize: "throttle",
        events: {
            prefix: "",
            namespace: "cfs"
        },
        wrapper: {
            element: "div",
            classname: "caroufredsel_wrapper"
        },
        classnames: {}
    }, $.fn.carouFredSel.pageAnchorBuilder = function (a) {
        return '<a href="#"><span>' + a + "</span></a>"
    }, $.fn.carouFredSel.progressbarUpdater = function (a) {
        $(this).css("width", a + "%")
    }, $.fn.carouFredSel.cookie = {
        get: function (a) {
            a += "=";
            for (var b = document.cookie.split(";"), c = 0, d = b.length; d > c; c++) {
                for (var e = b[c];
                    " " == e.charAt(0);) e = e.slice(1);
                if (0 == e.indexOf(a)) return e.slice(a.length)
            }
            return 0
        },
        set: function (a, b, c) {
            var d = "";
            if (c) {
                var e = new Date;
                e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * c), d = "; expires=" + e.toGMTString()
            }
            document.cookie = a + "=" + b + d + "; path=/"
        },
        remove: function (a) {
            $.fn.carouFredSel.cookie.set(a, "", -1)
        }
    }, $.extend($.easing, {
        quadratic: function (a) {
            var b = a * a;
            return a * (-b * a + 4 * b - 6 * a + 4)
        },
        cubic: function (a) {
            return a * (4 * a * a - 9 * a + 6)
        },
        elastic: function (a) {
            var b = a * a;
            return a * (33 * b * b - 106 * b * a + 126 * b - 67 * a + 15)
        }
    }))
})(jQuery);
(function ($) {
    $.fn.updateTestimonialsCarousel = function () {
        function initTestimonialsCarousel() {
            if (window.tgpLazyItems !== undefined) {
                var isShowed = window.tgpLazyItems.checkGroupShowed(this, function (node) {
                    initTestimonialsCarousel.call(node);
                });
                if (!isShowed) {
                    return;
                }
            }
            var $testimonialsElement = $(this);
            var $testimonialsCarousel = $('.gem-testimonials-carousel', $testimonialsElement);
            var $testimonials = $('.gem-testimonial-item', $testimonialsCarousel);
            var $testimonialsPrev = $('.gem-testimonials-prev', $testimonialsElement);
            var $testimonialsNext = $('.gem-testimonials-next', $testimonialsElement);
            $testimonialsElement.thegemPreloader(function () {
                var $testimonialsView = $testimonialsCarousel.carouFredSel({
                    auto: ($testimonialsElement.data('autoscroll') > 0 ? $testimonialsElement.data('autoscroll') : false),
                    circular: true,
                    infinite: true,
                    width: '100%',
                    height: 'auto',
                    items: 1,
                    align: 'center',
                    responsive: true,
                    swipe: true,
                    prev: $testimonialsPrev,
                    next: $testimonialsNext,
                    scroll: {
                        pauseOnHover: true,
                        fx: 'scroll',
                        easing: 'easeInOutCubic',
                        duration: 1000,
                        onBefore: function (data) {
                            data.items.old.css({
                                opacity: 1
                            }).animate({
                                opacity: 0
                            }, 500, 'linear');
                            data.items.visible.css({
                                opacity: 0
                            }).animate({
                                opacity: 1
                            }, 1000, 'linear');
                        }
                    }
                });
            });
        }
        $('.gem-testimonials', this).add($(this).filter('.gem-testimonials')).each(initTestimonialsCarousel);
    }
    $(function () {
        $('.gem-testimonials').each(function () {
            var $testimonialsElement = $(this);
            var $testimonials = $('.gem-testimonial-item', $testimonialsElement);
            var $testimonialsWrap = $('<div class="gem-testimonials-carousel-wrap"/>').appendTo($testimonialsElement);
            var $testimonialsCarousel = $('<div class="gem-testimonials-carousel"/>').appendTo($testimonialsWrap);
            if ($testimonialsElement.hasClass('fullwidth-block')) {
                $testimonialsCarousel.wrap('<div class="container" />');
            }
            var $testimonialsNavigation = $('<div class="gem-testimonials-navigation"/>').appendTo($testimonialsWrap);
            var $testimonialsPrev = $('<a href="javascript:void(0);" class="gem-prev gem-testimonials-prev"/></a>').appendTo($testimonialsNavigation);
            var $testimonialsNext = $('<a href="javascript:void(0);" class="gem-next gem-testimonials-next"/></a>').appendTo($testimonialsNavigation);
            $testimonials.appendTo($testimonialsCarousel);
        });
        $('body').updateTestimonialsCarousel();
        $('.fullwidth-block').each(function () {
            $(this).on('updateTestimonialsCarousel', function () {
                $(this).updateTestimonialsCarousel();
            });
        });
        $('.gem_tab').on('tab-update', function () {
            $(this).updateTestimonialsCarousel();
        });
    });
})(jQuery);
(function ($) {
    var $container = $('.style-changer-holder'),
        $buttons = $('.tsc-button', $container),
        $boxes = $('.tsc-content-box', $container);
    window.runStyleChanger = function () {
        if (!window.styleChangerAjaxLoaded || window.styleChangerRun) return;
        window.styleChangerRun = true;
        $container = $('.style-changer-holder');
        $buttons = $('.tsc-button', $container);
        $boxes = $('.tsc-content-box', $container);
        setTimeout(run, 10);
    }
    window.runStyleChanger();

    function run() {
        setTimeout(function () {}, 100);
        setTimeout(init, 100);
    }

    function fixDoubleScroll() {
        if ($container.is('.collapsed')) {
            var scrollWidth = 0;
            $('.tsc-content-box-scroll', $boxes).each(function () {
                if (this.offsetWidth > this.clientWidth) {
                    scrollWidth = this.offsetWidth - this.clientWidth;
                    return false;
                }
            });
            if (scrollWidth > 0) {
                $container.css('width', (377 - scrollWidth) + 'px');
                $('.tsc-content-box-scroll', $boxes).each(function () {
                    if (this.offsetWidth > this.clientWidth) {
                        $(this).css('padding-right', '');
                    } else {
                        $(this).css('padding-right', scrollWidth + 'px');
                    }
                });
            } else {
                $container.css('width', '362px');
                $('.tsc-content-box-scroll', $boxes).css('padding-right', '15px');
            }
        } else {
            $container.css('width', '');
            $('.tsc-content-box-scroll', $boxes).css('padding-right', '');
        }
    }

    function activateTab($button, needSetCookie) {
        if ($button.hasClass('active')) {
            close();
            return;
        }
        $buttons.removeClass('active');
        $button.addClass('active');
        $boxes.removeClass('active');
        $boxes.filter('[data-box-id="' + $button.data('id') + '"]').addClass('active');
        if (needSetCookie === undefined) {
            needSetCookie = true;
        }
        if (!$container.hasClass('collapsed')) {
            $container.addClass('collapsed');
            fixDoubleScroll();
            if (needSetCookie) {
                setCookie('style_changer_status', 'open', {
                    path: '/',
                    SameSite: 'None',
                    Secure: true
                });
            }
            setTimeout(function () {
                $container.addClass('animated-boxes');
            }, 100);
        }
    }

    function close() {
        $container.removeClass('collapsed animated-boxes');
        fixDoubleScroll();
        $buttons.removeClass('active');
        setTimeout(function () {
            $boxes.removeClass('active');
        }, 600);
        setCookie('style_changer_status', 'closed', {
            path: '/',
            SameSite: 'None',
            Secure: true
        });
    }

    function init() {
        var status = getCookie('style_changer_status');
        if (status == undefined || status == 'open') {
            var activeBtn = $buttons.last();
            if (window.location.search.match(/tsc_options/) != null) {
                activeBtn = $buttons.first();
            }
            $('.tsc-buttons', $container).addClass('tsc-animation-enabled');
            if (status == undefined) {
                setTimeout(close, 3000);
            }
        } else {
            $('.tsc-buttons', $container).addClass('tsc-animation-enabled');
        }
        if (!getCookie('style_changer_sites_tooltip')) {
            $('.tsc-button-new-sites-tooltip', $container).fadeIn();
            $('.tsc-button-new-sites', $container).on('click', function () {
                setCookie('style_changer_sites_tooltip', 1, {
                    path: '/',
                    SameSite: 'None',
                    Secure: true
                });
                $('.tsc-button-new-sites-tooltip', $(this)).fadeOut();
            });
        }
        $buttons.on('click', function (e) {
            e.preventDefault();
            var $button = $(this);
            $button.removeClass('clicked');
            if ($container.hasClass('activated')) {
                activateTab($(this));
            } else {
                $.ajax({
                    type: 'POST',
                    url: window.fullStyleChangerLink,
                    dataType: 'json',
                    success: function (response) {
                        var styleChanger = document.querySelector('.style-changer');
                        styleChanger.insertAdjacentHTML('beforeend', response.content);
                        fullInit();
                        $container.addClass('activated');
                        $button.trigger('click');
                    }
                });
            }
        });
        $buttons.filter('.clicked').trigger('click');
        $(document).on('click', function (event) {
            if (!$(event.target).closest('.style-changer-holder').length && $container.hasClass('collapsed')) {
                close();
            }
        });

        function fullInit() {
            $boxes = $('.tsc-content-box', $container);
            $('.tsc-close', $container).on('click', function (e) {
                close();
                e.preventDefault();
            });
            $('.tsc-control-button', $container).on('click', function (e) {
                e.preventDefault();
                var $form = $(this).closest('form');
                var $field = $('[name="tsc_options[' + $(this).data('tsc-option') + ']"]', $form);
                $field.val($(this).data('tsc-value'));
                $(this).addClass('active');
                $form.submit();
            });
            $('.tsc-presale-button-popup, .tsc-presale-new-button-popup', $container).on('click', function (e) {
                e.preventDefault();
                $.fancybox.open({
                    title: false,
                    type: 'inline',
                    src: '#presale-form',
                    width: 610,
                    padding: 0,
                    autoSize: false,
                    autoHeight: true
                });
            });
            var $presaleForm = $('#presale-form div.wpcf7 > form');
            if ($presaleForm.length == 1 && window.wpcf7 !== undefined && window.wpcf7 !== null && typeof window.wpcf7.initForm === 'function') {
                window.wpcf7.initForm($presaleForm);
                if (window.wpcf7.cached) {
                    window.wpcf7.refill($presaleForm);
                }
            }
            if (wpcf7.apiSettings !== undefined) {
                var tscOldGetRouteFunction = wpcf7.apiSettings.getRoute;
                wpcf7.apiSettings.getRoute = function (path) {
                    var route = tscOldGetRouteFunction(path),
                        mainDomain = $container.data('main-domain')
                    if (mainDomain) {
                        var index = route.indexOf('/wp-json/');
                        if (index !== -1) {
                            route = mainDomain + route.substring(index);
                        }
                    }
                    return route;
                }
            }
            $('.tsc-menu-container #primary-menu', $container).on('mouseenter', '> li.menu-item-has-children', function () {
                var $menuItem = $(this),
                    $child = $('> ul', this),
                    position = $(this).position();
                $child.css('top', position.top);
                if ($(this).hasClass('megamenu-enable')) {
                    fix_megamenu_position(this, function () {
                        return window.gemOptions.clientWidth - $container.outerWidth();
                    });
                    var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                        childHeight = $child.outerHeight();
                    if (position.top + childHeight > clientHeight) {
                        $child.css('top', clientHeight - childHeight - 20);
                    }
                } else {
                    var $items = $('ul', this);
                    $items.removeClass('invert vertical-invert');
                    var topItemTranslate = 0;
                    if ($child.css('transform')) {
                        topItemTranslate = parseInt($child.css('transform').split(',')[5]);
                    }
                    if (isNaN(topItemTranslate)) {
                        topItemTranslate = 0;
                    }
                    $items.each(function () {
                        var $item = $(this);
                        var self = this;
                        var windowScroll = $(window).scrollTop(),
                            itemOffset = $item.offset(),
                            itemOffsetTop = itemOffset.top - windowScroll,
                            itemOffsetLeft = itemOffset.left,
                            itemHeight = $item.outerHeight();
                        if (itemOffsetTop - topItemTranslate + itemHeight > $(window).height()) {
                            if (self == $child[0]) {
                                var itemOffsetFix = 0;
                                if (itemOffsetTop - topItemTranslate - itemHeight > 0) {
                                    itemOffsetFix = itemHeight - $menuItem.outerHeight();
                                } else {
                                    itemOffsetFix = itemOffsetTop - topItemTranslate + itemHeight - $(window).height() + 20;
                                }
                                $item.css('top', position.top - itemOffsetFix);
                            } else {
                                if (itemOffsetTop - topItemTranslate - itemHeight > 0) {
                                    $item.addClass('vertical-invert');
                                } else {
                                    $item.css('top', -(itemOffsetTop - topItemTranslate + itemHeight - $(window).height() + 20));
                                }
                            }
                        }
                    });
                }
            });
        }
        $('.tsc-ga-event-button', $container).on('click', function (e) {
            if (typeof (gtag) !== 'function') {
                return;
            }
            var id = $(this).attr('id');
            switch (id) {
                case 'tsc-main-button':
                    gtag('event', 'click', {
                        'event_category': 'STYLE_CHANGER',
                        'event_label': 'Gear'
                    });
                    break;
                case 'tsc-sites-button':
                    gtag('event', 'click', {
                        'event_category': '400_BUTTON',
                        'event_label': '400+ Demos Button'
                    });
                    break;
                case 'tsc-purchase-button':
                    gtag('event', 'click', {
                        'event_category': 'GEAR_PURCHASE_BUTTON',
                        'event_label': 'Gear Purchase Button'
                    });
                    break;
                case 'tsc-presale-button':
                    gtag('event', 'click', {
                        'event_category': 'GEAR_PRESALE_BUTTON',
                        'event_label': 'Gear Pre-Sale Button'
                    });
                    break;
                case 'tsc-purchase-new-button':
                    gtag('event', 'click', {
                        'event_category': '400_PURCHASE_BUTTON',
                        'event_label': '400+ Purchase Button'
                    });
                    break;
                case 'tsc-presale-new-button':
                    gtag('event', 'click', {
                        'event_category': '400_PRESALE_BUTTON',
                        'event_label': '400+ Pre-Sale Button'
                    });
                    break;
                case 'tsc-showcase-button':
                    gtag('event', 'click', {
                        'event_category': 'SHOWCASE_BUTTON',
                        'event_label': 'View Showcase'
                    });
                    break;
                case 'tsc-see-all-button':
                    gtag('event', 'click', {
                        'event_category': 'SEE_ALL_BUTTON',
                        'event_label': 'See All Demos'
                    });
                    break;
                case 'tsc-blocks-button':
                    gtag('event', 'click', {
                        'event_category': 'BLOCKS_STYLE_CHANGER',
                        'event_label': 'Gear Blocks'
                    });
                    break;
                case 'tsc-blocks-new-button':
                    gtag('event', 'click', {
                        'event_category': 'BLOCKS_STYLE_CHANGER',
                        'event_label': '400 Blocks'
                    });
                    break;
            }
        });
    }

    function setCookie(name, value, options) {
        options = options || {};
        var expires = options.expires;
        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        value = encodeURIComponent(value);
        var updatedCookie = name + "=" + value;
        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
    }

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
})(jQuery);