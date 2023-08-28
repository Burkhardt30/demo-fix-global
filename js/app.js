(() => {
    var __webpack_modules__ = {
        755: function(module, exports) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */            (function(global, factory) {
                "use strict";
                if (true && "object" === typeof module.exports) module.exports = global.document ? factory(global, true) : function(w) {
                    if (!w.document) throw new Error("jQuery requires a window with a document");
                    return factory(w);
                }; else factory(global);
            })("undefined" !== typeof window ? window : this, (function(window, noGlobal) {
                "use strict";
                var arr = [];
                var getProto = Object.getPrototypeOf;
                var slice = arr.slice;
                var flat = arr.flat ? function(array) {
                    return arr.flat.call(array);
                } : function(array) {
                    return arr.concat.apply([], array);
                };
                var push = arr.push;
                var indexOf = arr.indexOf;
                var class2type = {};
                var toString = class2type.toString;
                var hasOwn = class2type.hasOwnProperty;
                var fnToString = hasOwn.toString;
                var ObjectFunctionString = fnToString.call(Object);
                var support = {};
                var isFunction = function isFunction(obj) {
                    return "function" === typeof obj && "number" !== typeof obj.nodeType && "function" !== typeof obj.item;
                };
                var isWindow = function isWindow(obj) {
                    return null != obj && obj === obj.window;
                };
                var document = window.document;
                var preservedScriptAttributes = {
                    type: true,
                    src: true,
                    nonce: true,
                    noModule: true
                };
                function DOMEval(code, node, doc) {
                    doc = doc || document;
                    var i, val, script = doc.createElement("script");
                    script.text = code;
                    if (node) for (i in preservedScriptAttributes) {
                        val = node[i] || node.getAttribute && node.getAttribute(i);
                        if (val) script.setAttribute(i, val);
                    }
                    doc.head.appendChild(script).parentNode.removeChild(script);
                }
                function toType(obj) {
                    if (null == obj) return obj + "";
                    return "object" === typeof obj || "function" === typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj;
                }
                var version = "3.6.1", jQuery = function(selector, context) {
                    return new jQuery.fn.init(selector, context);
                };
                jQuery.fn = jQuery.prototype = {
                    jquery: version,
                    constructor: jQuery,
                    length: 0,
                    toArray: function() {
                        return slice.call(this);
                    },
                    get: function(num) {
                        if (null == num) return slice.call(this);
                        return num < 0 ? this[num + this.length] : this[num];
                    },
                    pushStack: function(elems) {
                        var ret = jQuery.merge(this.constructor(), elems);
                        ret.prevObject = this;
                        return ret;
                    },
                    each: function(callback) {
                        return jQuery.each(this, callback);
                    },
                    map: function(callback) {
                        return this.pushStack(jQuery.map(this, (function(elem, i) {
                            return callback.call(elem, i, elem);
                        })));
                    },
                    slice: function() {
                        return this.pushStack(slice.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    even: function() {
                        return this.pushStack(jQuery.grep(this, (function(_elem, i) {
                            return (i + 1) % 2;
                        })));
                    },
                    odd: function() {
                        return this.pushStack(jQuery.grep(this, (function(_elem, i) {
                            return i % 2;
                        })));
                    },
                    eq: function(i) {
                        var len = this.length, j = +i + (i < 0 ? len : 0);
                        return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor();
                    },
                    push,
                    sort: arr.sort,
                    splice: arr.splice
                };
                jQuery.extend = jQuery.fn.extend = function() {
                    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
                    if ("boolean" === typeof target) {
                        deep = target;
                        target = arguments[i] || {};
                        i++;
                    }
                    if ("object" !== typeof target && !isFunction(target)) target = {};
                    if (i === length) {
                        target = this;
                        i--;
                    }
                    for (;i < length; i++) if (null != (options = arguments[i])) for (name in options) {
                        copy = options[name];
                        if ("__proto__" === name || target === copy) continue;
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                            src = target[name];
                            if (copyIsArray && !Array.isArray(src)) clone = []; else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {}; else clone = src;
                            copyIsArray = false;
                            target[name] = jQuery.extend(deep, clone, copy);
                        } else if (void 0 !== copy) target[name] = copy;
                    }
                    return target;
                };
                jQuery.extend({
                    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
                    isReady: true,
                    error: function(msg) {
                        throw new Error(msg);
                    },
                    noop: function() {},
                    isPlainObject: function(obj) {
                        var proto, Ctor;
                        if (!obj || "[object Object]" !== toString.call(obj)) return false;
                        proto = getProto(obj);
                        if (!proto) return true;
                        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                        return "function" === typeof Ctor && fnToString.call(Ctor) === ObjectFunctionString;
                    },
                    isEmptyObject: function(obj) {
                        var name;
                        for (name in obj) return false;
                        return true;
                    },
                    globalEval: function(code, options, doc) {
                        DOMEval(code, {
                            nonce: options && options.nonce
                        }, doc);
                    },
                    each: function(obj, callback) {
                        var length, i = 0;
                        if (isArrayLike(obj)) {
                            length = obj.length;
                            for (;i < length; i++) if (false === callback.call(obj[i], i, obj[i])) break;
                        } else for (i in obj) if (false === callback.call(obj[i], i, obj[i])) break;
                        return obj;
                    },
                    makeArray: function(arr, results) {
                        var ret = results || [];
                        if (null != arr) if (isArrayLike(Object(arr))) jQuery.merge(ret, "string" === typeof arr ? [ arr ] : arr); else push.call(ret, arr);
                        return ret;
                    },
                    inArray: function(elem, arr, i) {
                        return null == arr ? -1 : indexOf.call(arr, elem, i);
                    },
                    merge: function(first, second) {
                        var len = +second.length, j = 0, i = first.length;
                        for (;j < len; j++) first[i++] = second[j];
                        first.length = i;
                        return first;
                    },
                    grep: function(elems, callback, invert) {
                        var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                        for (;i < length; i++) {
                            callbackInverse = !callback(elems[i], i);
                            if (callbackInverse !== callbackExpect) matches.push(elems[i]);
                        }
                        return matches;
                    },
                    map: function(elems, callback, arg) {
                        var length, value, i = 0, ret = [];
                        if (isArrayLike(elems)) {
                            length = elems.length;
                            for (;i < length; i++) {
                                value = callback(elems[i], i, arg);
                                if (null != value) ret.push(value);
                            }
                        } else for (i in elems) {
                            value = callback(elems[i], i, arg);
                            if (null != value) ret.push(value);
                        }
                        return flat(ret);
                    },
                    guid: 1,
                    support
                });
                if ("function" === typeof Symbol) jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
                jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(_i, name) {
                    class2type["[object " + name + "]"] = name.toLowerCase();
                }));
                function isArrayLike(obj) {
                    var length = !!obj && "length" in obj && obj.length, type = toType(obj);
                    if (isFunction(obj) || isWindow(obj)) return false;
                    return "array" === type || 0 === length || "number" === typeof length && length > 0 && length - 1 in obj;
                }
                var Sizzle = 
                /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
                function(window) {
                    var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date, preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
                        if (a === b) hasDuplicate = true;
                        return 0;
                    }, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, pushNative = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
                        var i = 0, len = list.length;
                        for (;i < len; i++) if (list[i] === elem) return i;
                        return -1;
                    }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                        ID: new RegExp("^#(" + identifier + ")"),
                        CLASS: new RegExp("^\\.(" + identifier + ")"),
                        TAG: new RegExp("^(" + identifier + "|[*])"),
                        ATTR: new RegExp("^" + attributes),
                        PSEUDO: new RegExp("^" + pseudos),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + booleans + ")$", "i"),
                        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                    }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
                        var high = "0x" + escape.slice(1) - 65536;
                        return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
                    }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
                        if (asCodePoint) {
                            if ("\0" === ch) return "�";
                            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                        }
                        return "\\" + ch;
                    }, unloadHandler = function() {
                        setDocument();
                    }, inDisabledFieldset = addCombinator((function(elem) {
                        return true === elem.disabled && "fieldset" === elem.nodeName.toLowerCase();
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                        arr[preferredDoc.childNodes.length].nodeType;
                    } catch (e) {
                        push = {
                            apply: arr.length ? function(target, els) {
                                pushNative.apply(target, slice.call(els));
                            } : function(target, els) {
                                var j = target.length, i = 0;
                                while (target[j++] = els[i++]) ;
                                target.length = j - 1;
                            }
                        };
                    }
                    function Sizzle(selector, context, results, seed) {
                        var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
                        results = results || [];
                        if ("string" !== typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;
                        if (!seed) {
                            setDocument(context);
                            context = context || document;
                            if (documentIsHTML) {
                                if (11 !== nodeType && (match = rquickExpr.exec(selector))) if (m = match[1]) {
                                    if (9 === nodeType) if (elem = context.getElementById(m)) {
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else return results; else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                } else if (match[2]) {
                                    push.apply(results, context.getElementsByTagName(selector));
                                    return results;
                                } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                    push.apply(results, context.getElementsByClassName(m));
                                    return results;
                                }
                                if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (1 !== nodeType || "object" !== context.nodeName.toLowerCase())) {
                                    newSelector = selector;
                                    newContext = context;
                                    if (1 === nodeType && (rdescend.test(selector) || rcombinators.test(selector))) {
                                        newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                                        if (newContext !== context || !support.scope) if (nid = context.getAttribute("id")) nid = nid.replace(rcssescape, fcssescape); else context.setAttribute("id", nid = expando);
                                        groups = tokenize(selector);
                                        i = groups.length;
                                        while (i--) groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                                        newSelector = groups.join(",");
                                    }
                                    try {
                                        push.apply(results, newContext.querySelectorAll(newSelector));
                                        return results;
                                    } catch (qsaError) {
                                        nonnativeSelectorCache(selector, true);
                                    } finally {
                                        if (nid === expando) context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                        return select(selector.replace(rtrim, "$1"), context, results, seed);
                    }
                    function createCache() {
                        var keys = [];
                        function cache(key, value) {
                            if (keys.push(key + " ") > Expr.cacheLength) delete cache[keys.shift()];
                            return cache[key + " "] = value;
                        }
                        return cache;
                    }
                    function markFunction(fn) {
                        fn[expando] = true;
                        return fn;
                    }
                    function assert(fn) {
                        var el = document.createElement("fieldset");
                        try {
                            return !!fn(el);
                        } catch (e) {
                            return false;
                        } finally {
                            if (el.parentNode) el.parentNode.removeChild(el);
                            el = null;
                        }
                    }
                    function addHandle(attrs, handler) {
                        var arr = attrs.split("|"), i = arr.length;
                        while (i--) Expr.attrHandle[arr[i]] = handler;
                    }
                    function siblingCheck(a, b) {
                        var cur = b && a, diff = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                        if (diff) return diff;
                        if (cur) while (cur = cur.nextSibling) if (cur === b) return -1;
                        return a ? 1 : -1;
                    }
                    function createInputPseudo(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return "input" === name && elem.type === type;
                        };
                    }
                    function createButtonPseudo(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return ("input" === name || "button" === name) && elem.type === type;
                        };
                    }
                    function createDisabledPseudo(disabled) {
                        return function(elem) {
                            if ("form" in elem) {
                                if (elem.parentNode && false === elem.disabled) {
                                    if ("label" in elem) if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled; else return elem.disabled === disabled;
                                    return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                                }
                                return elem.disabled === disabled;
                            } else if ("label" in elem) return elem.disabled === disabled;
                            return false;
                        };
                    }
                    function createPositionalPseudo(fn) {
                        return markFunction((function(argument) {
                            argument = +argument;
                            return markFunction((function(seed, matches) {
                                var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                                while (i--) if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                            }));
                        }));
                    }
                    function testContext(context) {
                        return context && "undefined" !== typeof context.getElementsByTagName && context;
                    }
                    support = Sizzle.support = {};
                    isXML = Sizzle.isXML = function(elem) {
                        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
                        return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
                    };
                    setDocument = Sizzle.setDocument = function(node) {
                        var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                        if (doc == document || 9 !== doc.nodeType || !doc.documentElement) return document;
                        document = doc;
                        docElem = document.documentElement;
                        documentIsHTML = !isXML(document);
                        if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) if (subWindow.addEventListener) subWindow.addEventListener("unload", unloadHandler, false); else if (subWindow.attachEvent) subWindow.attachEvent("onunload", unloadHandler);
                        support.scope = assert((function(el) {
                            docElem.appendChild(el).appendChild(document.createElement("div"));
                            return "undefined" !== typeof el.querySelectorAll && !el.querySelectorAll(":scope fieldset div").length;
                        }));
                        support.attributes = assert((function(el) {
                            el.className = "i";
                            return !el.getAttribute("className");
                        }));
                        support.getElementsByTagName = assert((function(el) {
                            el.appendChild(document.createComment(""));
                            return !el.getElementsByTagName("*").length;
                        }));
                        support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                        support.getById = assert((function(el) {
                            docElem.appendChild(el).id = expando;
                            return !document.getElementsByName || !document.getElementsByName(expando).length;
                        }));
                        if (support.getById) {
                            Expr.filter["ID"] = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    return elem.getAttribute("id") === attrId;
                                };
                            };
                            Expr.find["ID"] = function(id, context) {
                                if ("undefined" !== typeof context.getElementById && documentIsHTML) {
                                    var elem = context.getElementById(id);
                                    return elem ? [ elem ] : [];
                                }
                            };
                        } else {
                            Expr.filter["ID"] = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    var node = "undefined" !== typeof elem.getAttributeNode && elem.getAttributeNode("id");
                                    return node && node.value === attrId;
                                };
                            };
                            Expr.find["ID"] = function(id, context) {
                                if ("undefined" !== typeof context.getElementById && documentIsHTML) {
                                    var node, i, elems, elem = context.getElementById(id);
                                    if (elem) {
                                        node = elem.getAttributeNode("id");
                                        if (node && node.value === id) return [ elem ];
                                        elems = context.getElementsByName(id);
                                        i = 0;
                                        while (elem = elems[i++]) {
                                            node = elem.getAttributeNode("id");
                                            if (node && node.value === id) return [ elem ];
                                        }
                                    }
                                    return [];
                                }
                            };
                        }
                        Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                            if ("undefined" !== typeof context.getElementsByTagName) return context.getElementsByTagName(tag); else if (support.qsa) return context.querySelectorAll(tag);
                        } : function(tag, context) {
                            var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                            if ("*" === tag) {
                                while (elem = results[i++]) if (1 === elem.nodeType) tmp.push(elem);
                                return tmp;
                            }
                            return results;
                        };
                        Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                            if ("undefined" !== typeof context.getElementsByClassName && documentIsHTML) return context.getElementsByClassName(className);
                        };
                        rbuggyMatches = [];
                        rbuggyQSA = [];
                        if (support.qsa = rnative.test(document.querySelectorAll)) {
                            assert((function(el) {
                                var input;
                                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                                if (el.querySelectorAll("[msallowcapture^='']").length) rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                                if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                                if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                                input = document.createElement("input");
                                input.setAttribute("name", "");
                                el.appendChild(input);
                                if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
                                if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                                if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                                el.querySelectorAll("\\\f");
                                rbuggyQSA.push("[\\r\\n\\f]");
                            }));
                            assert((function(el) {
                                el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                                var input = document.createElement("input");
                                input.setAttribute("type", "hidden");
                                el.appendChild(input).setAttribute("name", "D");
                                if (el.querySelectorAll("[name=d]").length) rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                                if (2 !== el.querySelectorAll(":enabled").length) rbuggyQSA.push(":enabled", ":disabled");
                                docElem.appendChild(el).disabled = true;
                                if (2 !== el.querySelectorAll(":disabled").length) rbuggyQSA.push(":enabled", ":disabled");
                                el.querySelectorAll("*,:x");
                                rbuggyQSA.push(",.*:");
                            }));
                        }
                        if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) assert((function(el) {
                            support.disconnectedMatch = matches.call(el, "*");
                            matches.call(el, "[s!='']:x");
                            rbuggyMatches.push("!=", pseudos);
                        }));
                        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                        hasCompare = rnative.test(docElem.compareDocumentPosition);
                        contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                            var adown = 9 === a.nodeType ? a.documentElement : a, bup = b && b.parentNode;
                            return a === bup || !!(bup && 1 === bup.nodeType && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
                        } : function(a, b) {
                            if (b) while (b = b.parentNode) if (b === a) return true;
                            return false;
                        };
                        sortOrder = hasCompare ? function(a, b) {
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                            if (compare) return compare;
                            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                            if (1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                                if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) return -1;
                                if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) return 1;
                                return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                            }
                            return 4 & compare ? -1 : 1;
                        } : function(a, b) {
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                            if (!aup || !bup) return a == document ? -1 : b == document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; else if (aup === bup) return siblingCheck(a, b);
                            cur = a;
                            while (cur = cur.parentNode) ap.unshift(cur);
                            cur = b;
                            while (cur = cur.parentNode) bp.unshift(cur);
                            while (ap[i] === bp[i]) i++;
                            return i ? siblingCheck(ap[i], bp[i]) : ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : 0;
                        };
                        return document;
                    };
                    Sizzle.matches = function(expr, elements) {
                        return Sizzle(expr, null, null, elements);
                    };
                    Sizzle.matchesSelector = function(elem, expr) {
                        setDocument(elem);
                        if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                            var ret = matches.call(elem, expr);
                            if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret;
                        } catch (e) {
                            nonnativeSelectorCache(expr, true);
                        }
                        return Sizzle(expr, document, null, [ elem ]).length > 0;
                    };
                    Sizzle.contains = function(context, elem) {
                        if ((context.ownerDocument || context) != document) setDocument(context);
                        return contains(context, elem);
                    };
                    Sizzle.attr = function(elem, name) {
                        if ((elem.ownerDocument || elem) != document) setDocument(elem);
                        var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                        return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    };
                    Sizzle.escape = function(sel) {
                        return (sel + "").replace(rcssescape, fcssescape);
                    };
                    Sizzle.error = function(msg) {
                        throw new Error("Syntax error, unrecognized expression: " + msg);
                    };
                    Sizzle.uniqueSort = function(results) {
                        var elem, duplicates = [], j = 0, i = 0;
                        hasDuplicate = !support.detectDuplicates;
                        sortInput = !support.sortStable && results.slice(0);
                        results.sort(sortOrder);
                        if (hasDuplicate) {
                            while (elem = results[i++]) if (elem === results[i]) j = duplicates.push(i);
                            while (j--) results.splice(duplicates[j], 1);
                        }
                        sortInput = null;
                        return results;
                    };
                    getText = Sizzle.getText = function(elem) {
                        var node, ret = "", i = 0, nodeType = elem.nodeType;
                        if (!nodeType) while (node = elem[i++]) ret += getText(node); else if (1 === nodeType || 9 === nodeType || 11 === nodeType) if ("string" === typeof elem.textContent) return elem.textContent; else for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem); else if (3 === nodeType || 4 === nodeType) return elem.nodeValue;
                        return ret;
                    };
                    Expr = Sizzle.selectors = {
                        cacheLength: 50,
                        createPseudo: markFunction,
                        match: matchExpr,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: true
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: true
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(match) {
                                match[1] = match[1].replace(runescape, funescape);
                                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                                if ("~=" === match[2]) match[3] = " " + match[3] + " ";
                                return match.slice(0, 4);
                            },
                            CHILD: function(match) {
                                match[1] = match[1].toLowerCase();
                                if ("nth" === match[1].slice(0, 3)) {
                                    if (!match[3]) Sizzle.error(match[0]);
                                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3]));
                                    match[5] = +(match[7] + match[8] || "odd" === match[3]);
                                } else if (match[3]) Sizzle.error(match[0]);
                                return match;
                            },
                            PSEUDO: function(match) {
                                var excess, unquoted = !match[6] && match[2];
                                if (matchExpr["CHILD"].test(match[0])) return null;
                                if (match[3]) match[2] = match[4] || match[5] || ""; else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                                    match[0] = match[0].slice(0, excess);
                                    match[2] = unquoted.slice(0, excess);
                                }
                                return match.slice(0, 3);
                            }
                        },
                        filter: {
                            TAG: function(nodeNameSelector) {
                                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                                return "*" === nodeNameSelector ? function() {
                                    return true;
                                } : function(elem) {
                                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                                };
                            },
                            CLASS: function(className) {
                                var pattern = classCache[className + " "];
                                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, (function(elem) {
                                    return pattern.test("string" === typeof elem.className && elem.className || "undefined" !== typeof elem.getAttribute && elem.getAttribute("class") || "");
                                }));
                            },
                            ATTR: function(name, operator, check) {
                                return function(elem) {
                                    var result = Sizzle.attr(elem, name);
                                    if (null == result) return "!=" === operator;
                                    if (!operator) return true;
                                    result += "";
                                    return "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : "|=" === operator ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                                };
                            },
                            CHILD: function(type, what, _argument, first, last) {
                                var simple = "nth" !== type.slice(0, 3), forward = "last" !== type.slice(-4), ofType = "of-type" === what;
                                return 1 === first && 0 === last ? function(elem) {
                                    return !!elem.parentNode;
                                } : function(elem, _context, xml) {
                                    var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                                    if (parent) {
                                        if (simple) {
                                            while (dir) {
                                                node = elem;
                                                while (node = node[dir]) if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return false;
                                                start = dir = "only" === type && !start && "nextSibling";
                                            }
                                            return true;
                                        }
                                        start = [ forward ? parent.firstChild : parent.lastChild ];
                                        if (forward && useCache) {
                                            node = parent;
                                            outerCache = node[expando] || (node[expando] = {});
                                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                            cache = uniqueCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex && cache[2];
                                            node = nodeIndex && parent.childNodes[nodeIndex];
                                            while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if (1 === node.nodeType && ++diff && node === elem) {
                                                uniqueCache[type] = [ dirruns, nodeIndex, diff ];
                                                break;
                                            }
                                        } else {
                                            if (useCache) {
                                                node = elem;
                                                outerCache = node[expando] || (node[expando] = {});
                                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                cache = uniqueCache[type] || [];
                                                nodeIndex = cache[0] === dirruns && cache[1];
                                                diff = nodeIndex;
                                            }
                                            if (false === diff) while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if ((ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) && ++diff) {
                                                if (useCache) {
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                    uniqueCache[type] = [ dirruns, diff ];
                                                }
                                                if (node === elem) break;
                                            }
                                        }
                                        diff -= last;
                                        return diff === first || diff % first === 0 && diff / first >= 0;
                                    }
                                };
                            },
                            PSEUDO: function(pseudo, argument) {
                                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                                if (fn[expando]) return fn(argument);
                                if (fn.length > 1) {
                                    args = [ pseudo, pseudo, "", argument ];
                                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction((function(seed, matches) {
                                        var idx, matched = fn(seed, argument), i = matched.length;
                                        while (i--) {
                                            idx = indexOf(seed, matched[i]);
                                            seed[idx] = !(matches[idx] = matched[i]);
                                        }
                                    })) : function(elem) {
                                        return fn(elem, 0, args);
                                    };
                                }
                                return fn;
                            }
                        },
                        pseudos: {
                            not: markFunction((function(selector) {
                                var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                                return matcher[expando] ? markFunction((function(seed, matches, _context, xml) {
                                    var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                                    while (i--) if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                                })) : function(elem, _context, xml) {
                                    input[0] = elem;
                                    matcher(input, null, xml, results);
                                    input[0] = null;
                                    return !results.pop();
                                };
                            })),
                            has: markFunction((function(selector) {
                                return function(elem) {
                                    return Sizzle(selector, elem).length > 0;
                                };
                            })),
                            contains: markFunction((function(text) {
                                text = text.replace(runescape, funescape);
                                return function(elem) {
                                    return (elem.textContent || getText(elem)).indexOf(text) > -1;
                                };
                            })),
                            lang: markFunction((function(lang) {
                                if (!ridentifier.test(lang || "")) Sizzle.error("unsupported lang: " + lang);
                                lang = lang.replace(runescape, funescape).toLowerCase();
                                return function(elem) {
                                    var elemLang;
                                    do {
                                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                            elemLang = elemLang.toLowerCase();
                                            return elemLang === lang || 0 === elemLang.indexOf(lang + "-");
                                        }
                                    } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                                    return false;
                                };
                            })),
                            target: function(elem) {
                                var hash = window.location && window.location.hash;
                                return hash && hash.slice(1) === elem.id;
                            },
                            root: function(elem) {
                                return elem === docElem;
                            },
                            focus: function(elem) {
                                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                            },
                            enabled: createDisabledPseudo(false),
                            disabled: createDisabledPseudo(true),
                            checked: function(elem) {
                                var nodeName = elem.nodeName.toLowerCase();
                                return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected;
                            },
                            selected: function(elem) {
                                if (elem.parentNode) elem.parentNode.selectedIndex;
                                return true === elem.selected;
                            },
                            empty: function(elem) {
                                for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return false;
                                return true;
                            },
                            parent: function(elem) {
                                return !Expr.pseudos["empty"](elem);
                            },
                            header: function(elem) {
                                return rheader.test(elem.nodeName);
                            },
                            input: function(elem) {
                                return rinputs.test(elem.nodeName);
                            },
                            button: function(elem) {
                                var name = elem.nodeName.toLowerCase();
                                return "input" === name && "button" === elem.type || "button" === name;
                            },
                            text: function(elem) {
                                var attr;
                                return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase());
                            },
                            first: createPositionalPseudo((function() {
                                return [ 0 ];
                            })),
                            last: createPositionalPseudo((function(_matchIndexes, length) {
                                return [ length - 1 ];
                            })),
                            eq: createPositionalPseudo((function(_matchIndexes, length, argument) {
                                return [ argument < 0 ? argument + length : argument ];
                            })),
                            even: createPositionalPseudo((function(matchIndexes, length) {
                                var i = 0;
                                for (;i < length; i += 2) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            odd: createPositionalPseudo((function(matchIndexes, length) {
                                var i = 1;
                                for (;i < length; i += 2) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            lt: createPositionalPseudo((function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument > length ? length : argument;
                                for (;--i >= 0; ) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            gt: createPositionalPseudo((function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument;
                                for (;++i < length; ) matchIndexes.push(i);
                                return matchIndexes;
                            }))
                        }
                    };
                    Expr.pseudos["nth"] = Expr.pseudos["eq"];
                    for (i in {
                        radio: true,
                        checkbox: true,
                        file: true,
                        password: true,
                        image: true
                    }) Expr.pseudos[i] = createInputPseudo(i);
                    for (i in {
                        submit: true,
                        reset: true
                    }) Expr.pseudos[i] = createButtonPseudo(i);
                    function setFilters() {}
                    setFilters.prototype = Expr.filters = Expr.pseudos;
                    Expr.setFilters = new setFilters;
                    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                        if (cached) return parseOnly ? 0 : cached.slice(0);
                        soFar = selector;
                        groups = [];
                        preFilters = Expr.preFilter;
                        while (soFar) {
                            if (!matched || (match = rcomma.exec(soFar))) {
                                if (match) soFar = soFar.slice(match[0].length) || soFar;
                                groups.push(tokens = []);
                            }
                            matched = false;
                            if (match = rcombinators.exec(soFar)) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type: match[0].replace(rtrim, " ")
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            for (type in Expr.filter) if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type,
                                    matches: match
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            if (!matched) break;
                        }
                        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
                    };
                    function toSelector(tokens) {
                        var i = 0, len = tokens.length, selector = "";
                        for (;i < len; i++) selector += tokens[i].value;
                        return selector;
                    }
                    function addCombinator(matcher, combinator, base) {
                        var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && "parentNode" === key, doneName = done++;
                        return combinator.first ? function(elem, context, xml) {
                            while (elem = elem[dir]) if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml);
                            return false;
                        } : function(elem, context, xml) {
                            var oldCache, uniqueCache, outerCache, newCache = [ dirruns, doneName ];
                            if (xml) {
                                while (elem = elem[dir]) if (1 === elem.nodeType || checkNonElements) if (matcher(elem, context, xml)) return true;
                            } else while (elem = elem[dir]) if (1 === elem.nodeType || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                if (skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem; else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2]; else {
                                    uniqueCache[key] = newCache;
                                    if (newCache[2] = matcher(elem, context, xml)) return true;
                                }
                            }
                            return false;
                        };
                    }
                    function elementMatcher(matchers) {
                        return matchers.length > 1 ? function(elem, context, xml) {
                            var i = matchers.length;
                            while (i--) if (!matchers[i](elem, context, xml)) return false;
                            return true;
                        } : matchers[0];
                    }
                    function multipleContexts(selector, contexts, results) {
                        var i = 0, len = contexts.length;
                        for (;i < len; i++) Sizzle(selector, contexts[i], results);
                        return results;
                    }
                    function condense(unmatched, map, filter, context, xml) {
                        var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map;
                        for (;i < len; i++) if (elem = unmatched[i]) if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) map.push(i);
                        }
                        return newUnmatched;
                    }
                    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                        if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
                        if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
                        return markFunction((function(seed, results, context, xml) {
                            var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                            if (matcher) matcher(matcherIn, matcherOut, context, xml);
                            if (postFilter) {
                                temp = condense(matcherOut, postMap);
                                postFilter(temp, [], context, xml);
                                i = temp.length;
                                while (i--) if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                            if (seed) {
                                if (postFinder || preFilter) {
                                    if (postFinder) {
                                        temp = [];
                                        i = matcherOut.length;
                                        while (i--) if (elem = matcherOut[i]) temp.push(matcherIn[i] = elem);
                                        postFinder(null, matcherOut = [], temp, xml);
                                    }
                                    i = matcherOut.length;
                                    while (i--) if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                                }
                            } else {
                                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                                if (postFinder) postFinder(null, results, matcherOut, xml); else push.apply(results, matcherOut);
                            }
                        }));
                    }
                    function matcherFromTokens(tokens) {
                        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator((function(elem) {
                            return elem === checkContext;
                        }), implicitRelative, true), matchAnyContext = addCombinator((function(elem) {
                            return indexOf(checkContext, elem) > -1;
                        }), implicitRelative, true), matchers = [ function(elem, context, xml) {
                            var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                            checkContext = null;
                            return ret;
                        } ];
                        for (;i < len; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [ addCombinator(elementMatcher(matchers), matcher) ]; else {
                            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                            if (matcher[expando]) {
                                j = ++i;
                                for (;j < len; j++) if (Expr.relative[tokens[j].type]) break;
                                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                    value: " " === tokens[i - 2].type ? "*" : ""
                                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                            }
                            matchers.push(matcher);
                        }
                        return elementMatcher(matchers);
                    }
                    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                            var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1, len = elems.length;
                            if (outermost) outermostContext = context == document || context || outermost;
                            for (;i !== len && null != (elem = elems[i]); i++) {
                                if (byElement && elem) {
                                    j = 0;
                                    if (!context && elem.ownerDocument != document) {
                                        setDocument(elem);
                                        xml = !documentIsHTML;
                                    }
                                    while (matcher = elementMatchers[j++]) if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                    if (outermost) dirruns = dirrunsUnique;
                                }
                                if (bySet) {
                                    if (elem = !matcher && elem) matchedCount--;
                                    if (seed) unmatched.push(elem);
                                }
                            }
                            matchedCount += i;
                            if (bySet && i !== matchedCount) {
                                j = 0;
                                while (matcher = setMatchers[j++]) matcher(unmatched, setMatched, context, xml);
                                if (seed) {
                                    if (matchedCount > 0) while (i--) if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                                    setMatched = condense(setMatched);
                                }
                                push.apply(results, setMatched);
                                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) Sizzle.uniqueSort(results);
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                                outermostContext = contextBackup;
                            }
                            return unmatched;
                        };
                        return bySet ? markFunction(superMatcher) : superMatcher;
                    }
                    compile = Sizzle.compile = function(selector, match) {
                        var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                        if (!cached) {
                            if (!match) match = tokenize(selector);
                            i = match.length;
                            while (i--) {
                                cached = matcherFromTokens(match[i]);
                                if (cached[expando]) setMatchers.push(cached); else elementMatchers.push(cached);
                            }
                            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                            cached.selector = selector;
                        }
                        return cached;
                    };
                    select = Sizzle.select = function(selector, context, results, seed) {
                        var i, tokens, token, type, find, compiled = "function" === typeof selector && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                        results = results || [];
                        if (1 === match.length) {
                            tokens = match[0] = match[0].slice(0);
                            if (tokens.length > 2 && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                                if (!context) return results; else if (compiled) context = context.parentNode;
                                selector = selector.slice(tokens.shift().value.length);
                            }
                            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                            while (i--) {
                                token = tokens[i];
                                if (Expr.relative[type = token.type]) break;
                                if (find = Expr.find[type]) if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                                    tokens.splice(i, 1);
                                    selector = seed.length && toSelector(tokens);
                                    if (!selector) {
                                        push.apply(results, seed);
                                        return results;
                                    }
                                    break;
                                }
                            }
                        }
                        (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                        return results;
                    };
                    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
                    support.detectDuplicates = !!hasDuplicate;
                    setDocument();
                    support.sortDetached = assert((function(el) {
                        return 1 & el.compareDocumentPosition(document.createElement("fieldset"));
                    }));
                    if (!assert((function(el) {
                        el.innerHTML = "<a href='#'></a>";
                        return "#" === el.firstChild.getAttribute("href");
                    }))) addHandle("type|href|height|width", (function(elem, name, isXML) {
                        if (!isXML) return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2);
                    }));
                    if (!support.attributes || !assert((function(el) {
                        el.innerHTML = "<input/>";
                        el.firstChild.setAttribute("value", "");
                        return "" === el.firstChild.getAttribute("value");
                    }))) addHandle("value", (function(elem, _name, isXML) {
                        if (!isXML && "input" === elem.nodeName.toLowerCase()) return elem.defaultValue;
                    }));
                    if (!assert((function(el) {
                        return null == el.getAttribute("disabled");
                    }))) addHandle(booleans, (function(elem, name, isXML) {
                        var val;
                        if (!isXML) return true === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    }));
                    return Sizzle;
                }(window);
                jQuery.find = Sizzle;
                jQuery.expr = Sizzle.selectors;
                jQuery.expr[":"] = jQuery.expr.pseudos;
                jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
                jQuery.text = Sizzle.getText;
                jQuery.isXMLDoc = Sizzle.isXML;
                jQuery.contains = Sizzle.contains;
                jQuery.escapeSelector = Sizzle.escape;
                var dir = function(elem, dir, until) {
                    var matched = [], truncate = void 0 !== until;
                    while ((elem = elem[dir]) && 9 !== elem.nodeType) if (1 === elem.nodeType) {
                        if (truncate && jQuery(elem).is(until)) break;
                        matched.push(elem);
                    }
                    return matched;
                };
                var siblings = function(n, elem) {
                    var matched = [];
                    for (;n; n = n.nextSibling) if (1 === n.nodeType && n !== elem) matched.push(n);
                    return matched;
                };
                var rneedsContext = jQuery.expr.match.needsContext;
                function nodeName(elem, name) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
                }
                var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function winnow(elements, qualifier, not) {
                    if (isFunction(qualifier)) return jQuery.grep(elements, (function(elem, i) {
                        return !!qualifier.call(elem, i, elem) !== not;
                    }));
                    if (qualifier.nodeType) return jQuery.grep(elements, (function(elem) {
                        return elem === qualifier !== not;
                    }));
                    if ("string" !== typeof qualifier) return jQuery.grep(elements, (function(elem) {
                        return indexOf.call(qualifier, elem) > -1 !== not;
                    }));
                    return jQuery.filter(qualifier, elements, not);
                }
                jQuery.filter = function(expr, elems, not) {
                    var elem = elems[0];
                    if (not) expr = ":not(" + expr + ")";
                    if (1 === elems.length && 1 === elem.nodeType) return jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [];
                    return jQuery.find.matches(expr, jQuery.grep(elems, (function(elem) {
                        return 1 === elem.nodeType;
                    })));
                };
                jQuery.fn.extend({
                    find: function(selector) {
                        var i, ret, len = this.length, self = this;
                        if ("string" !== typeof selector) return this.pushStack(jQuery(selector).filter((function() {
                            for (i = 0; i < len; i++) if (jQuery.contains(self[i], this)) return true;
                        })));
                        ret = this.pushStack([]);
                        for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
                        return len > 1 ? jQuery.uniqueSort(ret) : ret;
                    },
                    filter: function(selector) {
                        return this.pushStack(winnow(this, selector || [], false));
                    },
                    not: function(selector) {
                        return this.pushStack(winnow(this, selector || [], true));
                    },
                    is: function(selector) {
                        return !!winnow(this, "string" === typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
                    }
                });
                var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
                    var match, elem;
                    if (!selector) return this;
                    root = root || rootjQuery;
                    if ("string" === typeof selector) {
                        if ("<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3) match = [ null, selector, null ]; else match = rquickExpr.exec(selector);
                        if (match && (match[1] || !context)) if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
                            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) if (isFunction(this[match])) this[match](context[match]); else this.attr(match, context[match]);
                            return this;
                        } else {
                            elem = document.getElementById(match[2]);
                            if (elem) {
                                this[0] = elem;
                                this.length = 1;
                            }
                            return this;
                        } else if (!context || context.jquery) return (context || root).find(selector); else return this.constructor(context).find(selector);
                    } else if (selector.nodeType) {
                        this[0] = selector;
                        this.length = 1;
                        return this;
                    } else if (isFunction(selector)) return void 0 !== root.ready ? root.ready(selector) : selector(jQuery);
                    return jQuery.makeArray(selector, this);
                };
                init.prototype = jQuery.fn;
                rootjQuery = jQuery(document);
                var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
                jQuery.fn.extend({
                    has: function(target) {
                        var targets = jQuery(target, this), l = targets.length;
                        return this.filter((function() {
                            var i = 0;
                            for (;i < l; i++) if (jQuery.contains(this, targets[i])) return true;
                        }));
                    },
                    closest: function(selectors, context) {
                        var cur, i = 0, l = this.length, matched = [], targets = "string" !== typeof selectors && jQuery(selectors);
                        if (!rneedsContext.test(selectors)) for (;i < l; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break;
                        }
                        return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
                    },
                    index: function(elem) {
                        if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        if ("string" === typeof elem) return indexOf.call(jQuery(elem), this[0]);
                        return indexOf.call(this, elem.jquery ? elem[0] : elem);
                    },
                    add: function(selector, context) {
                        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
                    },
                    addBack: function(selector) {
                        return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
                    }
                });
                function sibling(cur, dir) {
                    while ((cur = cur[dir]) && 1 !== cur.nodeType) ;
                    return cur;
                }
                jQuery.each({
                    parent: function(elem) {
                        var parent = elem.parentNode;
                        return parent && 11 !== parent.nodeType ? parent : null;
                    },
                    parents: function(elem) {
                        return dir(elem, "parentNode");
                    },
                    parentsUntil: function(elem, _i, until) {
                        return dir(elem, "parentNode", until);
                    },
                    next: function(elem) {
                        return sibling(elem, "nextSibling");
                    },
                    prev: function(elem) {
                        return sibling(elem, "previousSibling");
                    },
                    nextAll: function(elem) {
                        return dir(elem, "nextSibling");
                    },
                    prevAll: function(elem) {
                        return dir(elem, "previousSibling");
                    },
                    nextUntil: function(elem, _i, until) {
                        return dir(elem, "nextSibling", until);
                    },
                    prevUntil: function(elem, _i, until) {
                        return dir(elem, "previousSibling", until);
                    },
                    siblings: function(elem) {
                        return siblings((elem.parentNode || {}).firstChild, elem);
                    },
                    children: function(elem) {
                        return siblings(elem.firstChild);
                    },
                    contents: function(elem) {
                        if (null != elem.contentDocument && getProto(elem.contentDocument)) return elem.contentDocument;
                        if (nodeName(elem, "template")) elem = elem.content || elem;
                        return jQuery.merge([], elem.childNodes);
                    }
                }, (function(name, fn) {
                    jQuery.fn[name] = function(until, selector) {
                        var matched = jQuery.map(this, fn, until);
                        if ("Until" !== name.slice(-5)) selector = until;
                        if (selector && "string" === typeof selector) matched = jQuery.filter(selector, matched);
                        if (this.length > 1) {
                            if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                            if (rparentsprev.test(name)) matched.reverse();
                        }
                        return this.pushStack(matched);
                    };
                }));
                var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
                function createOptions(options) {
                    var object = {};
                    jQuery.each(options.match(rnothtmlwhite) || [], (function(_, flag) {
                        object[flag] = true;
                    }));
                    return object;
                }
                jQuery.Callbacks = function(options) {
                    options = "string" === typeof options ? createOptions(options) : jQuery.extend({}, options);
                    var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
                        locked = locked || options.once;
                        fired = firing = true;
                        for (;queue.length; firingIndex = -1) {
                            memory = queue.shift();
                            while (++firingIndex < list.length) if (false === list[firingIndex].apply(memory[0], memory[1]) && options.stopOnFalse) {
                                firingIndex = list.length;
                                memory = false;
                            }
                        }
                        if (!options.memory) memory = false;
                        firing = false;
                        if (locked) if (memory) list = []; else list = "";
                    }, self = {
                        add: function() {
                            if (list) {
                                if (memory && !firing) {
                                    firingIndex = list.length - 1;
                                    queue.push(memory);
                                }
                                (function add(args) {
                                    jQuery.each(args, (function(_, arg) {
                                        if (isFunction(arg)) {
                                            if (!options.unique || !self.has(arg)) list.push(arg);
                                        } else if (arg && arg.length && "string" !== toType(arg)) add(arg);
                                    }));
                                })(arguments);
                                if (memory && !firing) fire();
                            }
                            return this;
                        },
                        remove: function() {
                            jQuery.each(arguments, (function(_, arg) {
                                var index;
                                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                    list.splice(index, 1);
                                    if (index <= firingIndex) firingIndex--;
                                }
                            }));
                            return this;
                        },
                        has: function(fn) {
                            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                        },
                        empty: function() {
                            if (list) list = [];
                            return this;
                        },
                        disable: function() {
                            locked = queue = [];
                            list = memory = "";
                            return this;
                        },
                        disabled: function() {
                            return !list;
                        },
                        lock: function() {
                            locked = queue = [];
                            if (!memory && !firing) list = memory = "";
                            return this;
                        },
                        locked: function() {
                            return !!locked;
                        },
                        fireWith: function(context, args) {
                            if (!locked) {
                                args = args || [];
                                args = [ context, args.slice ? args.slice() : args ];
                                queue.push(args);
                                if (!firing) fire();
                            }
                            return this;
                        },
                        fire: function() {
                            self.fireWith(this, arguments);
                            return this;
                        },
                        fired: function() {
                            return !!fired;
                        }
                    };
                    return self;
                };
                function Identity(v) {
                    return v;
                }
                function Thrower(ex) {
                    throw ex;
                }
                function adoptValue(value, resolve, reject, noValue) {
                    var method;
                    try {
                        if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject); else if (value && isFunction(method = value.then)) method.call(value, resolve, reject); else resolve.apply(void 0, [ value ].slice(noValue));
                    } catch (value) {
                        reject.apply(void 0, [ value ]);
                    }
                }
                jQuery.extend({
                    Deferred: function(func) {
                        var tuples = [ [ "notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2 ], [ "resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected" ] ], state = "pending", promise = {
                            state: function() {
                                return state;
                            },
                            always: function() {
                                deferred.done(arguments).fail(arguments);
                                return this;
                            },
                            catch: function(fn) {
                                return promise.then(null, fn);
                            },
                            pipe: function() {
                                var fns = arguments;
                                return jQuery.Deferred((function(newDefer) {
                                    jQuery.each(tuples, (function(_i, tuple) {
                                        var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                        deferred[tuple[1]]((function() {
                                            var returned = fn && fn.apply(this, arguments);
                                            if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject); else newDefer[tuple[0] + "With"](this, fn ? [ returned ] : arguments);
                                        }));
                                    }));
                                    fns = null;
                                })).promise();
                            },
                            then: function(onFulfilled, onRejected, onProgress) {
                                var maxDepth = 0;
                                function resolve(depth, deferred, handler, special) {
                                    return function() {
                                        var that = this, args = arguments, mightThrow = function() {
                                            var returned, then;
                                            if (depth < maxDepth) return;
                                            returned = handler.apply(that, args);
                                            if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                            then = returned && ("object" === typeof returned || "function" === typeof returned) && returned.then;
                                            if (isFunction(then)) if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); else {
                                                maxDepth++;
                                                then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                            } else {
                                                if (handler !== Identity) {
                                                    that = void 0;
                                                    args = [ returned ];
                                                }
                                                (special || deferred.resolveWith)(that, args);
                                            }
                                        }, process = special ? mightThrow : function() {
                                            try {
                                                mightThrow();
                                            } catch (e) {
                                                if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                                if (depth + 1 >= maxDepth) {
                                                    if (handler !== Thrower) {
                                                        that = void 0;
                                                        args = [ e ];
                                                    }
                                                    deferred.rejectWith(that, args);
                                                }
                                            }
                                        };
                                        if (depth) process(); else {
                                            if (jQuery.Deferred.getStackHook) process.stackTrace = jQuery.Deferred.getStackHook();
                                            window.setTimeout(process);
                                        }
                                    };
                                }
                                return jQuery.Deferred((function(newDefer) {
                                    tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                                    tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                                    tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                                })).promise();
                            },
                            promise: function(obj) {
                                return null != obj ? jQuery.extend(obj, promise) : promise;
                            }
                        }, deferred = {};
                        jQuery.each(tuples, (function(i, tuple) {
                            var list = tuple[2], stateString = tuple[5];
                            promise[tuple[1]] = list.add;
                            if (stateString) list.add((function() {
                                state = stateString;
                            }), tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
                            list.add(tuple[3].fire);
                            deferred[tuple[0]] = function() {
                                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                                return this;
                            };
                            deferred[tuple[0] + "With"] = list.fireWith;
                        }));
                        promise.promise(deferred);
                        if (func) func.call(deferred, deferred);
                        return deferred;
                    },
                    when: function(singleValue) {
                        var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i) {
                            return function(value) {
                                resolveContexts[i] = this;
                                resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                                if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                            };
                        };
                        if (remaining <= 1) {
                            adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                            if ("pending" === primary.state() || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
                        }
                        while (i--) adoptValue(resolveValues[i], updateFunc(i), primary.reject);
                        return primary.promise();
                    }
                });
                var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                jQuery.Deferred.exceptionHook = function(error, stack) {
                    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
                };
                jQuery.readyException = function(error) {
                    window.setTimeout((function() {
                        throw error;
                    }));
                };
                var readyList = jQuery.Deferred();
                jQuery.fn.ready = function(fn) {
                    readyList.then(fn).catch((function(error) {
                        jQuery.readyException(error);
                    }));
                    return this;
                };
                jQuery.extend({
                    isReady: false,
                    readyWait: 1,
                    ready: function(wait) {
                        if (true === wait ? --jQuery.readyWait : jQuery.isReady) return;
                        jQuery.isReady = true;
                        if (true !== wait && --jQuery.readyWait > 0) return;
                        readyList.resolveWith(document, [ jQuery ]);
                    }
                });
                jQuery.ready.then = readyList.then;
                function completed() {
                    document.removeEventListener("DOMContentLoaded", completed);
                    window.removeEventListener("load", completed);
                    jQuery.ready();
                }
                if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) window.setTimeout(jQuery.ready); else {
                    document.addEventListener("DOMContentLoaded", completed);
                    window.addEventListener("load", completed);
                }
                var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                    var i = 0, len = elems.length, bulk = null == key;
                    if ("object" === toType(key)) {
                        chainable = true;
                        for (i in key) access(elems, fn, i, key[i], true, emptyGet, raw);
                    } else if (void 0 !== value) {
                        chainable = true;
                        if (!isFunction(value)) raw = true;
                        if (bulk) if (raw) {
                            fn.call(elems, value);
                            fn = null;
                        } else {
                            bulk = fn;
                            fn = function(elem, _key, value) {
                                return bulk.call(jQuery(elem), value);
                            };
                        }
                        if (fn) for (;i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                    if (chainable) return elems;
                    if (bulk) return fn.call(elems);
                    return len ? fn(elems[0], key) : emptyGet;
                };
                var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
                function fcamelCase(_all, letter) {
                    return letter.toUpperCase();
                }
                function camelCase(string) {
                    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
                }
                var acceptData = function(owner) {
                    return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType;
                };
                function Data() {
                    this.expando = jQuery.expando + Data.uid++;
                }
                Data.uid = 1;
                Data.prototype = {
                    cache: function(owner) {
                        var value = owner[this.expando];
                        if (!value) {
                            value = {};
                            if (acceptData(owner)) if (owner.nodeType) owner[this.expando] = value; else Object.defineProperty(owner, this.expando, {
                                value,
                                configurable: true
                            });
                        }
                        return value;
                    },
                    set: function(owner, data, value) {
                        var prop, cache = this.cache(owner);
                        if ("string" === typeof data) cache[camelCase(data)] = value; else for (prop in data) cache[camelCase(prop)] = data[prop];
                        return cache;
                    },
                    get: function(owner, key) {
                        return void 0 === key ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
                    },
                    access: function(owner, key, value) {
                        if (void 0 === key || key && "string" === typeof key && void 0 === value) return this.get(owner, key);
                        this.set(owner, key, value);
                        return void 0 !== value ? value : key;
                    },
                    remove: function(owner, key) {
                        var i, cache = owner[this.expando];
                        if (void 0 === cache) return;
                        if (void 0 !== key) {
                            if (Array.isArray(key)) key = key.map(camelCase); else {
                                key = camelCase(key);
                                key = key in cache ? [ key ] : key.match(rnothtmlwhite) || [];
                            }
                            i = key.length;
                            while (i--) delete cache[key[i]];
                        }
                        if (void 0 === key || jQuery.isEmptyObject(cache)) if (owner.nodeType) owner[this.expando] = void 0; else delete owner[this.expando];
                    },
                    hasData: function(owner) {
                        var cache = owner[this.expando];
                        return void 0 !== cache && !jQuery.isEmptyObject(cache);
                    }
                };
                var dataPriv = new Data;
                var dataUser = new Data;
                var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
                function getData(data) {
                    if ("true" === data) return true;
                    if ("false" === data) return false;
                    if ("null" === data) return null;
                    if (data === +data + "") return +data;
                    if (rbrace.test(data)) return JSON.parse(data);
                    return data;
                }
                function dataAttr(elem, key, data) {
                    var name;
                    if (void 0 === data && 1 === elem.nodeType) {
                        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                        data = elem.getAttribute(name);
                        if ("string" === typeof data) {
                            try {
                                data = getData(data);
                            } catch (e) {}
                            dataUser.set(elem, key, data);
                        } else data = void 0;
                    }
                    return data;
                }
                jQuery.extend({
                    hasData: function(elem) {
                        return dataUser.hasData(elem) || dataPriv.hasData(elem);
                    },
                    data: function(elem, name, data) {
                        return dataUser.access(elem, name, data);
                    },
                    removeData: function(elem, name) {
                        dataUser.remove(elem, name);
                    },
                    _data: function(elem, name, data) {
                        return dataPriv.access(elem, name, data);
                    },
                    _removeData: function(elem, name) {
                        dataPriv.remove(elem, name);
                    }
                });
                jQuery.fn.extend({
                    data: function(key, value) {
                        var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                        if (void 0 === key) {
                            if (this.length) {
                                data = dataUser.get(elem);
                                if (1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs")) {
                                    i = attrs.length;
                                    while (i--) if (attrs[i]) {
                                        name = attrs[i].name;
                                        if (0 === name.indexOf("data-")) {
                                            name = camelCase(name.slice(5));
                                            dataAttr(elem, name, data[name]);
                                        }
                                    }
                                    dataPriv.set(elem, "hasDataAttrs", true);
                                }
                            }
                            return data;
                        }
                        if ("object" === typeof key) return this.each((function() {
                            dataUser.set(this, key);
                        }));
                        return access(this, (function(value) {
                            var data;
                            if (elem && void 0 === value) {
                                data = dataUser.get(elem, key);
                                if (void 0 !== data) return data;
                                data = dataAttr(elem, key);
                                if (void 0 !== data) return data;
                                return;
                            }
                            this.each((function() {
                                dataUser.set(this, key, value);
                            }));
                        }), null, value, arguments.length > 1, null, true);
                    },
                    removeData: function(key) {
                        return this.each((function() {
                            dataUser.remove(this, key);
                        }));
                    }
                });
                jQuery.extend({
                    queue: function(elem, type, data) {
                        var queue;
                        if (elem) {
                            type = (type || "fx") + "queue";
                            queue = dataPriv.get(elem, type);
                            if (data) if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data)); else queue.push(data);
                            return queue || [];
                        }
                    },
                    dequeue: function(elem, type) {
                        type = type || "fx";
                        var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                            jQuery.dequeue(elem, type);
                        };
                        if ("inprogress" === fn) {
                            fn = queue.shift();
                            startLength--;
                        }
                        if (fn) {
                            if ("fx" === type) queue.unshift("inprogress");
                            delete hooks.stop;
                            fn.call(elem, next, hooks);
                        }
                        if (!startLength && hooks) hooks.empty.fire();
                    },
                    _queueHooks: function(elem, type) {
                        var key = type + "queueHooks";
                        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                            empty: jQuery.Callbacks("once memory").add((function() {
                                dataPriv.remove(elem, [ type + "queue", key ]);
                            }))
                        });
                    }
                });
                jQuery.fn.extend({
                    queue: function(type, data) {
                        var setter = 2;
                        if ("string" !== typeof type) {
                            data = type;
                            type = "fx";
                            setter--;
                        }
                        if (arguments.length < setter) return jQuery.queue(this[0], type);
                        return void 0 === data ? this : this.each((function() {
                            var queue = jQuery.queue(this, type, data);
                            jQuery._queueHooks(this, type);
                            if ("fx" === type && "inprogress" !== queue[0]) jQuery.dequeue(this, type);
                        }));
                    },
                    dequeue: function(type) {
                        return this.each((function() {
                            jQuery.dequeue(this, type);
                        }));
                    },
                    clearQueue: function(type) {
                        return this.queue(type || "fx", []);
                    },
                    promise: function(type, obj) {
                        var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                            if (!--count) defer.resolveWith(elements, [ elements ]);
                        };
                        if ("string" !== typeof type) {
                            obj = type;
                            type = void 0;
                        }
                        type = type || "fx";
                        while (i--) {
                            tmp = dataPriv.get(elements[i], type + "queueHooks");
                            if (tmp && tmp.empty) {
                                count++;
                                tmp.empty.add(resolve);
                            }
                        }
                        resolve();
                        return defer.promise(obj);
                    }
                });
                var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
                var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
                var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
                var documentElement = document.documentElement;
                var isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem);
                }, composed = {
                    composed: true
                };
                if (documentElement.getRootNode) isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
                };
                var isHiddenWithinTree = function(elem, el) {
                    elem = el || elem;
                    return "none" === elem.style.display || "" === elem.style.display && isAttached(elem) && "none" === jQuery.css(elem, "display");
                };
                function adjustCSS(elem, prop, valueParts, tween) {
                    var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
                        return tween.cur();
                    } : function() {
                        return jQuery.css(elem, prop, "");
                    }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || "px" !== unit && +initial) && rcssNum.exec(jQuery.css(elem, prop));
                    if (initialInUnit && initialInUnit[3] !== unit) {
                        initial /= 2;
                        unit = unit || initialInUnit[3];
                        initialInUnit = +initial || 1;
                        while (maxIterations--) {
                            jQuery.style(elem, prop, initialInUnit + unit);
                            if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) maxIterations = 0;
                            initialInUnit /= scale;
                        }
                        initialInUnit *= 2;
                        jQuery.style(elem, prop, initialInUnit + unit);
                        valueParts = valueParts || [];
                    }
                    if (valueParts) {
                        initialInUnit = +initialInUnit || +initial || 0;
                        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                        if (tween) {
                            tween.unit = unit;
                            tween.start = initialInUnit;
                            tween.end = adjusted;
                        }
                    }
                    return adjusted;
                }
                var defaultDisplayMap = {};
                function getDefaultDisplay(elem) {
                    var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
                    if (display) return display;
                    temp = doc.body.appendChild(doc.createElement(nodeName));
                    display = jQuery.css(temp, "display");
                    temp.parentNode.removeChild(temp);
                    if ("none" === display) display = "block";
                    defaultDisplayMap[nodeName] = display;
                    return display;
                }
                function showHide(elements, show) {
                    var display, elem, values = [], index = 0, length = elements.length;
                    for (;index < length; index++) {
                        elem = elements[index];
                        if (!elem.style) continue;
                        display = elem.style.display;
                        if (show) {
                            if ("none" === display) {
                                values[index] = dataPriv.get(elem, "display") || null;
                                if (!values[index]) elem.style.display = "";
                            }
                            if ("" === elem.style.display && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
                        } else if ("none" !== display) {
                            values[index] = "none";
                            dataPriv.set(elem, "display", display);
                        }
                    }
                    for (index = 0; index < length; index++) if (null != values[index]) elements[index].style.display = values[index];
                    return elements;
                }
                jQuery.fn.extend({
                    show: function() {
                        return showHide(this, true);
                    },
                    hide: function() {
                        return showHide(this);
                    },
                    toggle: function(state) {
                        if ("boolean" === typeof state) return state ? this.show() : this.hide();
                        return this.each((function() {
                            if (isHiddenWithinTree(this)) jQuery(this).show(); else jQuery(this).hide();
                        }));
                    }
                });
                var rcheckableType = /^(?:checkbox|radio)$/i;
                var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
                var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
                (function() {
                    var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
                    input.setAttribute("type", "radio");
                    input.setAttribute("checked", "checked");
                    input.setAttribute("name", "t");
                    div.appendChild(input);
                    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
                    div.innerHTML = "<textarea>x</textarea>";
                    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
                    div.innerHTML = "<option></option>";
                    support.option = !!div.lastChild;
                })();
                var wrapMap = {
                    thead: [ 1, "<table>", "</table>" ],
                    col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                    _default: [ 0, "", "" ]
                };
                wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
                wrapMap.th = wrapMap.td;
                if (!support.option) wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
                function getAll(context, tag) {
                    var ret;
                    if ("undefined" !== typeof context.getElementsByTagName) ret = context.getElementsByTagName(tag || "*"); else if ("undefined" !== typeof context.querySelectorAll) ret = context.querySelectorAll(tag || "*"); else ret = [];
                    if (void 0 === tag || tag && nodeName(context, tag)) return jQuery.merge([ context ], ret);
                    return ret;
                }
                function setGlobalEval(elems, refElements) {
                    var i = 0, l = elems.length;
                    for (;i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
                }
                var rhtml = /<|&#?\w+;/;
                function buildFragment(elems, context, scripts, selection, ignored) {
                    var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
                    for (;i < l; i++) {
                        elem = elems[i];
                        if (elem || 0 === elem) if ("object" === toType(elem)) jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem); else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem)); else {
                            tmp = tmp || fragment.appendChild(context.createElement("div"));
                            tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                            wrap = wrapMap[tag] || wrapMap._default;
                            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                            j = wrap[0];
                            while (j--) tmp = tmp.lastChild;
                            jQuery.merge(nodes, tmp.childNodes);
                            tmp = fragment.firstChild;
                            tmp.textContent = "";
                        }
                    }
                    fragment.textContent = "";
                    i = 0;
                    while (elem = nodes[i++]) {
                        if (selection && jQuery.inArray(elem, selection) > -1) {
                            if (ignored) ignored.push(elem);
                            continue;
                        }
                        attached = isAttached(elem);
                        tmp = getAll(fragment.appendChild(elem), "script");
                        if (attached) setGlobalEval(tmp);
                        if (scripts) {
                            j = 0;
                            while (elem = tmp[j++]) if (rscriptType.test(elem.type || "")) scripts.push(elem);
                        }
                    }
                    return fragment;
                }
                var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
                function returnTrue() {
                    return true;
                }
                function returnFalse() {
                    return false;
                }
                function expectSync(elem, type) {
                    return elem === safeActiveElement() === ("focus" === type);
                }
                function safeActiveElement() {
                    try {
                        return document.activeElement;
                    } catch (err) {}
                }
                function on(elem, types, selector, data, fn, one) {
                    var origFn, type;
                    if ("object" === typeof types) {
                        if ("string" !== typeof selector) {
                            data = data || selector;
                            selector = void 0;
                        }
                        for (type in types) on(elem, type, selector, data, types[type], one);
                        return elem;
                    }
                    if (null == data && null == fn) {
                        fn = selector;
                        data = selector = void 0;
                    } else if (null == fn) if ("string" === typeof selector) {
                        fn = data;
                        data = void 0;
                    } else {
                        fn = data;
                        data = selector;
                        selector = void 0;
                    }
                    if (false === fn) fn = returnFalse; else if (!fn) return elem;
                    if (1 === one) {
                        origFn = fn;
                        fn = function(event) {
                            jQuery().off(event);
                            return origFn.apply(this, arguments);
                        };
                        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                    }
                    return elem.each((function() {
                        jQuery.event.add(this, types, fn, data, selector);
                    }));
                }
                jQuery.event = {
                    global: {},
                    add: function(elem, types, handler, data, selector) {
                        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                        if (!acceptData(elem)) return;
                        if (handler.handler) {
                            handleObjIn = handler;
                            handler = handleObjIn.handler;
                            selector = handleObjIn.selector;
                        }
                        if (selector) jQuery.find.matchesSelector(documentElement, selector);
                        if (!handler.guid) handler.guid = jQuery.guid++;
                        if (!(events = elemData.events)) events = elemData.events = Object.create(null);
                        if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                            return "undefined" !== typeof jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
                        };
                        types = (types || "").match(rnothtmlwhite) || [ "" ];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            if (!type) continue;
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            special = jQuery.event.special[type] || {};
                            handleObj = jQuery.extend({
                                type,
                                origType,
                                data,
                                handler,
                                guid: handler.guid,
                                selector,
                                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                                namespace: namespaces.join(".")
                            }, handleObjIn);
                            if (!(handlers = events[type])) {
                                handlers = events[type] = [];
                                handlers.delegateCount = 0;
                                if (!special.setup || false === special.setup.call(elem, data, namespaces, eventHandle)) if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                            }
                            if (special.add) {
                                special.add.call(elem, handleObj);
                                if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                            }
                            if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj); else handlers.push(handleObj);
                            jQuery.event.global[type] = true;
                        }
                    },
                    remove: function(elem, types, handler, selector, mappedTypes) {
                        var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                        if (!elemData || !(events = elemData.events)) return;
                        types = (types || "").match(rnothtmlwhite) || [ "" ];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            if (!type) {
                                for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, true);
                                continue;
                            }
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            handlers = events[type] || [];
                            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            origCount = j = handlers.length;
                            while (j--) {
                                handleObj = handlers[j];
                                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || "**" === selector && handleObj.selector)) {
                                    handlers.splice(j, 1);
                                    if (handleObj.selector) handlers.delegateCount--;
                                    if (special.remove) special.remove.call(elem, handleObj);
                                }
                            }
                            if (origCount && !handlers.length) {
                                if (!special.teardown || false === special.teardown.call(elem, namespaces, elemData.handle)) jQuery.removeEvent(elem, type, elemData.handle);
                                delete events[type];
                            }
                        }
                        if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
                    },
                    dispatch: function(nativeEvent) {
                        var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
                        args[0] = event;
                        for (i = 1; i < arguments.length; i++) args[i] = arguments[i];
                        event.delegateTarget = this;
                        if (special.preDispatch && false === special.preDispatch.call(this, event)) return;
                        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                        i = 0;
                        while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                            event.currentTarget = matched.elem;
                            j = 0;
                            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) if (!event.rnamespace || false === handleObj.namespace || event.rnamespace.test(handleObj.namespace)) {
                                event.handleObj = handleObj;
                                event.data = handleObj.data;
                                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                                if (void 0 !== ret) if (false === (event.result = ret)) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                        if (special.postDispatch) special.postDispatch.call(this, event);
                        return event.result;
                    },
                    handlers: function(event, handlers) {
                        var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                        if (delegateCount && cur.nodeType && !("click" === event.type && event.button >= 1)) for (;cur !== this; cur = cur.parentNode || this) if (1 === cur.nodeType && !("click" === event.type && true === cur.disabled)) {
                            matchedHandlers = [];
                            matchedSelectors = {};
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
                                sel = handleObj.selector + " ";
                                if (void 0 === matchedSelectors[sel]) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [ cur ]).length;
                                if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                            }
                            if (matchedHandlers.length) handlerQueue.push({
                                elem: cur,
                                handlers: matchedHandlers
                            });
                        }
                        cur = this;
                        if (delegateCount < handlers.length) handlerQueue.push({
                            elem: cur,
                            handlers: handlers.slice(delegateCount)
                        });
                        return handlerQueue;
                    },
                    addProp: function(name, hook) {
                        Object.defineProperty(jQuery.Event.prototype, name, {
                            enumerable: true,
                            configurable: true,
                            get: isFunction(hook) ? function() {
                                if (this.originalEvent) return hook(this.originalEvent);
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[name];
                            },
                            set: function(value) {
                                Object.defineProperty(this, name, {
                                    enumerable: true,
                                    configurable: true,
                                    writable: true,
                                    value
                                });
                            }
                        });
                    },
                    fix: function(originalEvent) {
                        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
                    },
                    special: {
                        load: {
                            noBubble: true
                        },
                        click: {
                            setup: function(data) {
                                var el = this || data;
                                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click", returnTrue);
                                return false;
                            },
                            trigger: function(data) {
                                var el = this || data;
                                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                                return true;
                            },
                            _default: function(event) {
                                var target = event.target;
                                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                            }
                        },
                        beforeunload: {
                            postDispatch: function(event) {
                                if (void 0 !== event.result && event.originalEvent) event.originalEvent.returnValue = event.result;
                            }
                        }
                    }
                };
                function leverageNative(el, type, expectSync) {
                    if (!expectSync) {
                        if (void 0 === dataPriv.get(el, type)) jQuery.event.add(el, type, returnTrue);
                        return;
                    }
                    dataPriv.set(el, type, false);
                    jQuery.event.add(el, type, {
                        namespace: false,
                        handler: function(event) {
                            var notAsync, result, saved = dataPriv.get(this, type);
                            if (1 & event.isTrigger && this[type]) {
                                if (!saved.length) {
                                    saved = slice.call(arguments);
                                    dataPriv.set(this, type, saved);
                                    notAsync = expectSync(this, type);
                                    this[type]();
                                    result = dataPriv.get(this, type);
                                    if (saved !== result || notAsync) dataPriv.set(this, type, false); else result = {};
                                    if (saved !== result) {
                                        event.stopImmediatePropagation();
                                        event.preventDefault();
                                        return result && result.value;
                                    }
                                } else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
                            } else if (saved.length) {
                                dataPriv.set(this, type, {
                                    value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                                });
                                event.stopImmediatePropagation();
                            }
                        }
                    });
                }
                jQuery.removeEvent = function(elem, type, handle) {
                    if (elem.removeEventListener) elem.removeEventListener(type, handle);
                };
                jQuery.Event = function(src, props) {
                    if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
                    if (src && src.type) {
                        this.originalEvent = src;
                        this.type = src.type;
                        this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && false === src.returnValue ? returnTrue : returnFalse;
                        this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target;
                        this.currentTarget = src.currentTarget;
                        this.relatedTarget = src.relatedTarget;
                    } else this.type = src;
                    if (props) jQuery.extend(this, props);
                    this.timeStamp = src && src.timeStamp || Date.now();
                    this[jQuery.expando] = true;
                };
                jQuery.Event.prototype = {
                    constructor: jQuery.Event,
                    isDefaultPrevented: returnFalse,
                    isPropagationStopped: returnFalse,
                    isImmediatePropagationStopped: returnFalse,
                    isSimulated: false,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = returnTrue;
                        if (e && !this.isSimulated) e.preventDefault();
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = returnTrue;
                        if (e && !this.isSimulated) e.stopPropagation();
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = returnTrue;
                        if (e && !this.isSimulated) e.stopImmediatePropagation();
                        this.stopPropagation();
                    }
                };
                jQuery.each({
                    altKey: true,
                    bubbles: true,
                    cancelable: true,
                    changedTouches: true,
                    ctrlKey: true,
                    detail: true,
                    eventPhase: true,
                    metaKey: true,
                    pageX: true,
                    pageY: true,
                    shiftKey: true,
                    view: true,
                    char: true,
                    code: true,
                    charCode: true,
                    key: true,
                    keyCode: true,
                    button: true,
                    buttons: true,
                    clientX: true,
                    clientY: true,
                    offsetX: true,
                    offsetY: true,
                    pointerId: true,
                    pointerType: true,
                    screenX: true,
                    screenY: true,
                    targetTouches: true,
                    toElement: true,
                    touches: true,
                    which: true
                }, jQuery.event.addProp);
                jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(type, delegateType) {
                    jQuery.event.special[type] = {
                        setup: function() {
                            leverageNative(this, type, expectSync);
                            return false;
                        },
                        trigger: function() {
                            leverageNative(this, type);
                            return true;
                        },
                        _default: function(event) {
                            return dataPriv.get(event.target, type);
                        },
                        delegateType
                    };
                }));
                jQuery.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(orig, fix) {
                    jQuery.event.special[orig] = {
                        delegateType: fix,
                        bindType: fix,
                        handle: function(event) {
                            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                            if (!related || related !== target && !jQuery.contains(target, related)) {
                                event.type = handleObj.origType;
                                ret = handleObj.handler.apply(this, arguments);
                                event.type = fix;
                            }
                            return ret;
                        }
                    };
                }));
                jQuery.fn.extend({
                    on: function(types, selector, data, fn) {
                        return on(this, types, selector, data, fn);
                    },
                    one: function(types, selector, data, fn) {
                        return on(this, types, selector, data, fn, 1);
                    },
                    off: function(types, selector, fn) {
                        var handleObj, type;
                        if (types && types.preventDefault && types.handleObj) {
                            handleObj = types.handleObj;
                            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                            return this;
                        }
                        if ("object" === typeof types) {
                            for (type in types) this.off(type, selector, types[type]);
                            return this;
                        }
                        if (false === selector || "function" === typeof selector) {
                            fn = selector;
                            selector = void 0;
                        }
                        if (false === fn) fn = returnFalse;
                        return this.each((function() {
                            jQuery.event.remove(this, types, fn, selector);
                        }));
                    }
                });
                var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                function manipulationTarget(elem, content) {
                    if (nodeName(elem, "table") && nodeName(11 !== content.nodeType ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
                    return elem;
                }
                function disableScript(elem) {
                    elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type;
                    return elem;
                }
                function restoreScript(elem) {
                    if ("true/" === (elem.type || "").slice(0, 5)) elem.type = elem.type.slice(5); else elem.removeAttribute("type");
                    return elem;
                }
                function cloneCopyEvent(src, dest) {
                    var i, l, type, pdataOld, udataOld, udataCur, events;
                    if (1 !== dest.nodeType) return;
                    if (dataPriv.hasData(src)) {
                        pdataOld = dataPriv.get(src);
                        events = pdataOld.events;
                        if (events) {
                            dataPriv.remove(dest, "handle events");
                            for (type in events) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
                        }
                    }
                    if (dataUser.hasData(src)) {
                        udataOld = dataUser.access(src);
                        udataCur = jQuery.extend({}, udataOld);
                        dataUser.set(dest, udataCur);
                    }
                }
                function fixInput(src, dest) {
                    var nodeName = dest.nodeName.toLowerCase();
                    if ("input" === nodeName && rcheckableType.test(src.type)) dest.checked = src.checked; else if ("input" === nodeName || "textarea" === nodeName) dest.defaultValue = src.defaultValue;
                }
                function domManip(collection, args, callback, ignored) {
                    args = flat(args);
                    var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
                    if (valueIsFunction || l > 1 && "string" === typeof value && !support.checkClone && rchecked.test(value)) return collection.each((function(index) {
                        var self = collection.eq(index);
                        if (valueIsFunction) args[0] = value.call(this, index, self.html());
                        domManip(self, args, callback, ignored);
                    }));
                    if (l) {
                        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                        first = fragment.firstChild;
                        if (1 === fragment.childNodes.length) fragment = first;
                        if (first || ignored) {
                            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                            hasScripts = scripts.length;
                            for (;i < l; i++) {
                                node = fragment;
                                if (i !== iNoClone) {
                                    node = jQuery.clone(node, true, true);
                                    if (hasScripts) jQuery.merge(scripts, getAll(node, "script"));
                                }
                                callback.call(collection[i], node, i);
                            }
                            if (hasScripts) {
                                doc = scripts[scripts.length - 1].ownerDocument;
                                jQuery.map(scripts, restoreScript);
                                for (i = 0; i < hasScripts; i++) {
                                    node = scripts[i];
                                    if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) if (node.src && "module" !== (node.type || "").toLowerCase()) {
                                        if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                            nonce: node.nonce || node.getAttribute("nonce")
                                        }, doc);
                                    } else DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                                }
                            }
                        }
                    }
                    return collection;
                }
                function remove(elem, selector, keepData) {
                    var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
                    for (;null != (node = nodes[i]); i++) {
                        if (!keepData && 1 === node.nodeType) jQuery.cleanData(getAll(node));
                        if (node.parentNode) {
                            if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                            node.parentNode.removeChild(node);
                        }
                    }
                    return elem;
                }
                jQuery.extend({
                    htmlPrefilter: function(html) {
                        return html;
                    },
                    clone: function(elem, dataAndEvents, deepDataAndEvents) {
                        var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
                        if (!support.noCloneChecked && (1 === elem.nodeType || 11 === elem.nodeType) && !jQuery.isXMLDoc(elem)) {
                            destElements = getAll(clone);
                            srcElements = getAll(elem);
                            for (i = 0, l = srcElements.length; i < l; i++) fixInput(srcElements[i], destElements[i]);
                        }
                        if (dataAndEvents) if (deepDataAndEvents) {
                            srcElements = srcElements || getAll(elem);
                            destElements = destElements || getAll(clone);
                            for (i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]);
                        } else cloneCopyEvent(elem, clone);
                        destElements = getAll(clone, "script");
                        if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                        return clone;
                    },
                    cleanData: function(elems) {
                        var data, elem, type, special = jQuery.event.special, i = 0;
                        for (;void 0 !== (elem = elems[i]); i++) if (acceptData(elem)) {
                            if (data = elem[dataPriv.expando]) {
                                if (data.events) for (type in data.events) if (special[type]) jQuery.event.remove(elem, type); else jQuery.removeEvent(elem, type, data.handle);
                                elem[dataPriv.expando] = void 0;
                            }
                            if (elem[dataUser.expando]) elem[dataUser.expando] = void 0;
                        }
                    }
                });
                jQuery.fn.extend({
                    detach: function(selector) {
                        return remove(this, selector, true);
                    },
                    remove: function(selector) {
                        return remove(this, selector);
                    },
                    text: function(value) {
                        return access(this, (function(value) {
                            return void 0 === value ? jQuery.text(this) : this.empty().each((function() {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = value;
                            }));
                        }), null, value, arguments.length);
                    },
                    append: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var target = manipulationTarget(this, elem);
                                target.appendChild(elem);
                            }
                        }));
                    },
                    prepend: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var target = manipulationTarget(this, elem);
                                target.insertBefore(elem, target.firstChild);
                            }
                        }));
                    },
                    before: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this);
                        }));
                    },
                    after: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
                        }));
                    },
                    empty: function() {
                        var elem, i = 0;
                        for (;null != (elem = this[i]); i++) if (1 === elem.nodeType) {
                            jQuery.cleanData(getAll(elem, false));
                            elem.textContent = "";
                        }
                        return this;
                    },
                    clone: function(dataAndEvents, deepDataAndEvents) {
                        dataAndEvents = null == dataAndEvents ? false : dataAndEvents;
                        deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents;
                        return this.map((function() {
                            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                        }));
                    },
                    html: function(value) {
                        return access(this, (function(value) {
                            var elem = this[0] || {}, i = 0, l = this.length;
                            if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;
                            if ("string" === typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                                value = jQuery.htmlPrefilter(value);
                                try {
                                    for (;i < l; i++) {
                                        elem = this[i] || {};
                                        if (1 === elem.nodeType) {
                                            jQuery.cleanData(getAll(elem, false));
                                            elem.innerHTML = value;
                                        }
                                    }
                                    elem = 0;
                                } catch (e) {}
                            }
                            if (elem) this.empty().append(value);
                        }), null, value, arguments.length);
                    },
                    replaceWith: function() {
                        var ignored = [];
                        return domManip(this, arguments, (function(elem) {
                            var parent = this.parentNode;
                            if (jQuery.inArray(this, ignored) < 0) {
                                jQuery.cleanData(getAll(this));
                                if (parent) parent.replaceChild(elem, this);
                            }
                        }), ignored);
                    }
                });
                jQuery.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(name, original) {
                    jQuery.fn[name] = function(selector) {
                        var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
                        for (;i <= last; i++) {
                            elems = i === last ? this : this.clone(true);
                            jQuery(insert[i])[original](elems);
                            push.apply(ret, elems.get());
                        }
                        return this.pushStack(ret);
                    };
                }));
                var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
                var rcustomProp = /^--/;
                var getStyles = function(elem) {
                    var view = elem.ownerDocument.defaultView;
                    if (!view || !view.opener) view = window;
                    return view.getComputedStyle(elem);
                };
                var swap = function(elem, options, callback) {
                    var ret, name, old = {};
                    for (name in options) {
                        old[name] = elem.style[name];
                        elem.style[name] = options[name];
                    }
                    ret = callback.call(elem);
                    for (name in options) elem.style[name] = old[name];
                    return ret;
                };
                var rboxStyle = new RegExp(cssExpand.join("|"), "i");
                var whitespace = "[\\x20\\t\\r\\n\\f]";
                var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
                (function() {
                    function computeStyleTests() {
                        if (!div) return;
                        container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
                        div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
                        documentElement.appendChild(container).appendChild(div);
                        var divStyle = window.getComputedStyle(div);
                        pixelPositionVal = "1%" !== divStyle.top;
                        reliableMarginLeftVal = 12 === roundPixelMeasures(divStyle.marginLeft);
                        div.style.right = "60%";
                        pixelBoxStylesVal = 36 === roundPixelMeasures(divStyle.right);
                        boxSizingReliableVal = 36 === roundPixelMeasures(divStyle.width);
                        div.style.position = "absolute";
                        scrollboxSizeVal = 12 === roundPixelMeasures(div.offsetWidth / 3);
                        documentElement.removeChild(container);
                        div = null;
                    }
                    function roundPixelMeasures(measure) {
                        return Math.round(parseFloat(measure));
                    }
                    var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
                    if (!div.style) return;
                    div.style.backgroundClip = "content-box";
                    div.cloneNode(true).style.backgroundClip = "";
                    support.clearCloneStyle = "content-box" === div.style.backgroundClip;
                    jQuery.extend(support, {
                        boxSizingReliable: function() {
                            computeStyleTests();
                            return boxSizingReliableVal;
                        },
                        pixelBoxStyles: function() {
                            computeStyleTests();
                            return pixelBoxStylesVal;
                        },
                        pixelPosition: function() {
                            computeStyleTests();
                            return pixelPositionVal;
                        },
                        reliableMarginLeft: function() {
                            computeStyleTests();
                            return reliableMarginLeftVal;
                        },
                        scrollboxSize: function() {
                            computeStyleTests();
                            return scrollboxSizeVal;
                        },
                        reliableTrDimensions: function() {
                            var table, tr, trChild, trStyle;
                            if (null == reliableTrDimensionsVal) {
                                table = document.createElement("table");
                                tr = document.createElement("tr");
                                trChild = document.createElement("div");
                                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                                tr.style.cssText = "border:1px solid";
                                tr.style.height = "1px";
                                trChild.style.height = "9px";
                                trChild.style.display = "block";
                                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                                trStyle = window.getComputedStyle(tr);
                                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                                documentElement.removeChild(table);
                            }
                            return reliableTrDimensionsVal;
                        }
                    });
                })();
                function curCSS(elem, name, computed) {
                    var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
                    computed = computed || getStyles(elem);
                    if (computed) {
                        ret = computed.getPropertyValue(name) || computed[name];
                        if (isCustomProp) ret = ret.replace(rtrimCSS, "$1");
                        if ("" === ret && !isAttached(elem)) ret = jQuery.style(elem, name);
                        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                            width = style.width;
                            minWidth = style.minWidth;
                            maxWidth = style.maxWidth;
                            style.minWidth = style.maxWidth = style.width = ret;
                            ret = computed.width;
                            style.width = width;
                            style.minWidth = minWidth;
                            style.maxWidth = maxWidth;
                        }
                    }
                    return void 0 !== ret ? ret + "" : ret;
                }
                function addGetHookIf(conditionFn, hookFn) {
                    return {
                        get: function() {
                            if (conditionFn()) {
                                delete this.get;
                                return;
                            }
                            return (this.get = hookFn).apply(this, arguments);
                        }
                    };
                }
                var cssPrefixes = [ "Webkit", "Moz", "ms" ], emptyStyle = document.createElement("div").style, vendorProps = {};
                function vendorPropName(name) {
                    var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
                    while (i--) {
                        name = cssPrefixes[i] + capName;
                        if (name in emptyStyle) return name;
                    }
                }
                function finalPropName(name) {
                    var final = jQuery.cssProps[name] || vendorProps[name];
                    if (final) return final;
                    if (name in emptyStyle) return name;
                    return vendorProps[name] = vendorPropName(name) || name;
                }
                var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, cssNormalTransform = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function setPositiveNumber(_elem, value, subtract) {
                    var matches = rcssNum.exec(value);
                    return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
                }
                function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
                    var i = "width" === dimension ? 1 : 0, extra = 0, delta = 0;
                    if (box === (isBorderBox ? "border" : "content")) return 0;
                    for (;i < 4; i += 2) {
                        if ("margin" === box) delta += jQuery.css(elem, box + cssExpand[i], true, styles);
                        if (!isBorderBox) {
                            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            if ("padding" !== box) delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        } else {
                            if ("content" === box) delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            if ("margin" !== box) delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        }
                    }
                    if (!isBorderBox && computedVal >= 0) delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - .5)) || 0;
                    return delta;
                }
                function getWidthOrHeight(elem, dimension, extra) {
                    var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && "border-box" === jQuery.css(elem, "boxSizing", false, styles), valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
                    if (rnumnonpx.test(val)) {
                        if (!extra) return val;
                        val = "auto";
                    }
                    if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || "auto" === val || !parseFloat(val) && "inline" === jQuery.css(elem, "display", false, styles)) && elem.getClientRects().length) {
                        isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
                        valueIsBorderBox = offsetProp in elem;
                        if (valueIsBorderBox) val = elem[offsetProp];
                    }
                    val = parseFloat(val) || 0;
                    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
                }
                jQuery.extend({
                    cssHooks: {
                        opacity: {
                            get: function(elem, computed) {
                                if (computed) {
                                    var ret = curCSS(elem, "opacity");
                                    return "" === ret ? "1" : ret;
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: true,
                        columnCount: true,
                        fillOpacity: true,
                        flexGrow: true,
                        flexShrink: true,
                        fontWeight: true,
                        gridArea: true,
                        gridColumn: true,
                        gridColumnEnd: true,
                        gridColumnStart: true,
                        gridRow: true,
                        gridRowEnd: true,
                        gridRowStart: true,
                        lineHeight: true,
                        opacity: true,
                        order: true,
                        orphans: true,
                        widows: true,
                        zIndex: true,
                        zoom: true
                    },
                    cssProps: {},
                    style: function(elem, name, value, extra) {
                        if (!elem || 3 === elem.nodeType || 8 === elem.nodeType || !elem.style) return;
                        var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                        if (!isCustomProp) name = finalPropName(origName);
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        if (void 0 !== value) {
                            type = typeof value;
                            if ("string" === type && (ret = rcssNum.exec(value)) && ret[1]) {
                                value = adjustCSS(elem, name, ret);
                                type = "number";
                            }
                            if (null == value || value !== value) return;
                            if ("number" === type && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                            if (!support.clearCloneStyle && "" === value && 0 === name.indexOf("background")) style[name] = "inherit";
                            if (!hooks || !("set" in hooks) || void 0 !== (value = hooks.set(elem, value, extra))) if (isCustomProp) style.setProperty(name, value); else style[name] = value;
                        } else {
                            if (hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, false, extra))) return ret;
                            return style[name];
                        }
                    },
                    css: function(elem, name, extra, styles) {
                        var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
                        if (!isCustomProp) name = finalPropName(origName);
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
                        if (void 0 === val) val = curCSS(elem, name, styles);
                        if ("normal" === val && name in cssNormalTransform) val = cssNormalTransform[name];
                        if ("" === extra || extra) {
                            num = parseFloat(val);
                            return true === extra || isFinite(num) ? num || 0 : val;
                        }
                        return val;
                    }
                });
                jQuery.each([ "height", "width" ], (function(_i, dimension) {
                    jQuery.cssHooks[dimension] = {
                        get: function(elem, computed, extra) {
                            if (computed) return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, (function() {
                                return getWidthOrHeight(elem, dimension, extra);
                            })) : getWidthOrHeight(elem, dimension, extra);
                        },
                        set: function(elem, value, extra) {
                            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && "absolute" === styles.position, boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && "border-box" === jQuery.css(elem, "boxSizing", false, styles), subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                            if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - .5);
                            if (subtract && (matches = rcssNum.exec(value)) && "px" !== (matches[3] || "px")) {
                                elem.style[dimension] = value;
                                value = jQuery.css(elem, dimension);
                            }
                            return setPositiveNumber(elem, value, subtract);
                        }
                    };
                }));
                jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, (function(elem, computed) {
                    if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                        marginLeft: 0
                    }, (function() {
                        return elem.getBoundingClientRect().left;
                    }))) + "px";
                }));
                jQuery.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(prefix, suffix) {
                    jQuery.cssHooks[prefix + suffix] = {
                        expand: function(value) {
                            var i = 0, expanded = {}, parts = "string" === typeof value ? value.split(" ") : [ value ];
                            for (;i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                            return expanded;
                        }
                    };
                    if ("margin" !== prefix) jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                }));
                jQuery.fn.extend({
                    css: function(name, value) {
                        return access(this, (function(elem, name, value) {
                            var styles, len, map = {}, i = 0;
                            if (Array.isArray(name)) {
                                styles = getStyles(elem);
                                len = name.length;
                                for (;i < len; i++) map[name[i]] = jQuery.css(elem, name[i], false, styles);
                                return map;
                            }
                            return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                        }), name, value, arguments.length > 1);
                    }
                });
                function Tween(elem, options, prop, end, easing) {
                    return new Tween.prototype.init(elem, options, prop, end, easing);
                }
                jQuery.Tween = Tween;
                Tween.prototype = {
                    constructor: Tween,
                    init: function(elem, options, prop, end, easing, unit) {
                        this.elem = elem;
                        this.prop = prop;
                        this.easing = easing || jQuery.easing._default;
                        this.options = options;
                        this.start = this.now = this.cur();
                        this.end = end;
                        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                    },
                    cur: function() {
                        var hooks = Tween.propHooks[this.prop];
                        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
                    },
                    run: function(percent) {
                        var eased, hooks = Tween.propHooks[this.prop];
                        if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration); else this.pos = eased = percent;
                        this.now = (this.end - this.start) * eased + this.start;
                        if (this.options.step) this.options.step.call(this.elem, this.now, this);
                        if (hooks && hooks.set) hooks.set(this); else Tween.propHooks._default.set(this);
                        return this;
                    }
                };
                Tween.prototype.init.prototype = Tween.prototype;
                Tween.propHooks = {
                    _default: {
                        get: function(tween) {
                            var result;
                            if (1 !== tween.elem.nodeType || null != tween.elem[tween.prop] && null == tween.elem.style[tween.prop]) return tween.elem[tween.prop];
                            result = jQuery.css(tween.elem, tween.prop, "");
                            return !result || "auto" === result ? 0 : result;
                        },
                        set: function(tween) {
                            if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween); else if (1 === tween.elem.nodeType && (jQuery.cssHooks[tween.prop] || null != tween.elem.style[finalPropName(tween.prop)])) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit); else tween.elem[tween.prop] = tween.now;
                        }
                    }
                };
                Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                    set: function(tween) {
                        if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
                    }
                };
                jQuery.easing = {
                    linear: function(p) {
                        return p;
                    },
                    swing: function(p) {
                        return .5 - Math.cos(p * Math.PI) / 2;
                    },
                    _default: "swing"
                };
                jQuery.fx = Tween.prototype.init;
                jQuery.fx.step = {};
                var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
                function schedule() {
                    if (inProgress) {
                        if (false === document.hidden && window.requestAnimationFrame) window.requestAnimationFrame(schedule); else window.setTimeout(schedule, jQuery.fx.interval);
                        jQuery.fx.tick();
                    }
                }
                function createFxNow() {
                    window.setTimeout((function() {
                        fxNow = void 0;
                    }));
                    return fxNow = Date.now();
                }
                function genFx(type, includeWidth) {
                    var which, i = 0, attrs = {
                        height: type
                    };
                    includeWidth = includeWidth ? 1 : 0;
                    for (;i < 4; i += 2 - includeWidth) {
                        which = cssExpand[i];
                        attrs["margin" + which] = attrs["padding" + which] = type;
                    }
                    if (includeWidth) attrs.opacity = attrs.width = type;
                    return attrs;
                }
                function createTween(value, prop, animation) {
                    var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
                    for (;index < length; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
                }
                function defaultPrefilter(elem, props, opts) {
                    var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
                    if (!opts.queue) {
                        hooks = jQuery._queueHooks(elem, "fx");
                        if (null == hooks.unqueued) {
                            hooks.unqueued = 0;
                            oldfire = hooks.empty.fire;
                            hooks.empty.fire = function() {
                                if (!hooks.unqueued) oldfire();
                            };
                        }
                        hooks.unqueued++;
                        anim.always((function() {
                            anim.always((function() {
                                hooks.unqueued--;
                                if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                            }));
                        }));
                    }
                    for (prop in props) {
                        value = props[prop];
                        if (rfxtypes.test(value)) {
                            delete props[prop];
                            toggle = toggle || "toggle" === value;
                            if (value === (hidden ? "hide" : "show")) if ("show" === value && dataShow && void 0 !== dataShow[prop]) hidden = true; else continue;
                            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                        }
                    }
                    propTween = !jQuery.isEmptyObject(props);
                    if (!propTween && jQuery.isEmptyObject(orig)) return;
                    if (isBox && 1 === elem.nodeType) {
                        opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
                        restoreDisplay = dataShow && dataShow.display;
                        if (null == restoreDisplay) restoreDisplay = dataPriv.get(elem, "display");
                        display = jQuery.css(elem, "display");
                        if ("none" === display) if (restoreDisplay) display = restoreDisplay; else {
                            showHide([ elem ], true);
                            restoreDisplay = elem.style.display || restoreDisplay;
                            display = jQuery.css(elem, "display");
                            showHide([ elem ]);
                        }
                        if ("inline" === display || "inline-block" === display && null != restoreDisplay) if ("none" === jQuery.css(elem, "float")) {
                            if (!propTween) {
                                anim.done((function() {
                                    style.display = restoreDisplay;
                                }));
                                if (null == restoreDisplay) {
                                    display = style.display;
                                    restoreDisplay = "none" === display ? "" : display;
                                }
                            }
                            style.display = "inline-block";
                        }
                    }
                    if (opts.overflow) {
                        style.overflow = "hidden";
                        anim.always((function() {
                            style.overflow = opts.overflow[0];
                            style.overflowX = opts.overflow[1];
                            style.overflowY = opts.overflow[2];
                        }));
                    }
                    propTween = false;
                    for (prop in orig) {
                        if (!propTween) {
                            if (dataShow) {
                                if ("hidden" in dataShow) hidden = dataShow.hidden;
                            } else dataShow = dataPriv.access(elem, "fxshow", {
                                display: restoreDisplay
                            });
                            if (toggle) dataShow.hidden = !hidden;
                            if (hidden) showHide([ elem ], true);
                            anim.done((function() {
                                if (!hidden) showHide([ elem ]);
                                dataPriv.remove(elem, "fxshow");
                                for (prop in orig) jQuery.style(elem, prop, orig[prop]);
                            }));
                        }
                        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                        if (!(prop in dataShow)) {
                            dataShow[prop] = propTween.start;
                            if (hidden) {
                                propTween.end = propTween.start;
                                propTween.start = 0;
                            }
                        }
                    }
                }
                function propFilter(props, specialEasing) {
                    var index, name, easing, value, hooks;
                    for (index in props) {
                        name = camelCase(index);
                        easing = specialEasing[name];
                        value = props[index];
                        if (Array.isArray(value)) {
                            easing = value[1];
                            value = props[index] = value[0];
                        }
                        if (index !== name) {
                            props[name] = value;
                            delete props[index];
                        }
                        hooks = jQuery.cssHooks[name];
                        if (hooks && "expand" in hooks) {
                            value = hooks.expand(value);
                            delete props[name];
                            for (index in value) if (!(index in props)) {
                                props[index] = value[index];
                                specialEasing[index] = easing;
                            }
                        } else specialEasing[name] = easing;
                    }
                }
                function Animation(elem, properties, options) {
                    var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always((function() {
                        delete tick.elem;
                    })), tick = function() {
                        if (stopped) return false;
                        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
                        for (;index < length; index++) animation.tweens[index].run(percent);
                        deferred.notifyWith(elem, [ animation, percent, remaining ]);
                        if (percent < 1 && length) return remaining;
                        if (!length) deferred.notifyWith(elem, [ animation, 1, 0 ]);
                        deferred.resolveWith(elem, [ animation ]);
                        return false;
                    }, animation = deferred.promise({
                        elem,
                        props: jQuery.extend({}, properties),
                        opts: jQuery.extend(true, {
                            specialEasing: {},
                            easing: jQuery.easing._default
                        }, options),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function(prop, end) {
                            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                            animation.tweens.push(tween);
                            return tween;
                        },
                        stop: function(gotoEnd) {
                            var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                            if (stopped) return this;
                            stopped = true;
                            for (;index < length; index++) animation.tweens[index].run(1);
                            if (gotoEnd) {
                                deferred.notifyWith(elem, [ animation, 1, 0 ]);
                                deferred.resolveWith(elem, [ animation, gotoEnd ]);
                            } else deferred.rejectWith(elem, [ animation, gotoEnd ]);
                            return this;
                        }
                    }), props = animation.props;
                    propFilter(props, animation.opts.specialEasing);
                    for (;index < length; index++) {
                        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                        if (result) {
                            if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                            return result;
                        }
                    }
                    jQuery.map(props, createTween, animation);
                    if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
                    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
                    jQuery.fx.timer(jQuery.extend(tick, {
                        elem,
                        anim: animation,
                        queue: animation.opts.queue
                    }));
                    return animation;
                }
                jQuery.Animation = jQuery.extend(Animation, {
                    tweeners: {
                        "*": [ function(prop, value) {
                            var tween = this.createTween(prop, value);
                            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                            return tween;
                        } ]
                    },
                    tweener: function(props, callback) {
                        if (isFunction(props)) {
                            callback = props;
                            props = [ "*" ];
                        } else props = props.match(rnothtmlwhite);
                        var prop, index = 0, length = props.length;
                        for (;index < length; index++) {
                            prop = props[index];
                            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                            Animation.tweeners[prop].unshift(callback);
                        }
                    },
                    prefilters: [ defaultPrefilter ],
                    prefilter: function(callback, prepend) {
                        if (prepend) Animation.prefilters.unshift(callback); else Animation.prefilters.push(callback);
                    }
                });
                jQuery.speed = function(speed, easing, fn) {
                    var opt = speed && "object" === typeof speed ? jQuery.extend({}, speed) : {
                        complete: fn || !fn && easing || isFunction(speed) && speed,
                        duration: speed,
                        easing: fn && easing || easing && !isFunction(easing) && easing
                    };
                    if (jQuery.fx.off) opt.duration = 0; else if ("number" !== typeof opt.duration) if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration]; else opt.duration = jQuery.fx.speeds._default;
                    if (null == opt.queue || true === opt.queue) opt.queue = "fx";
                    opt.old = opt.complete;
                    opt.complete = function() {
                        if (isFunction(opt.old)) opt.old.call(this);
                        if (opt.queue) jQuery.dequeue(this, opt.queue);
                    };
                    return opt;
                };
                jQuery.fn.extend({
                    fadeTo: function(speed, to, easing, callback) {
                        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                            opacity: to
                        }, speed, easing, callback);
                    },
                    animate: function(prop, speed, easing, callback) {
                        var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                            var anim = Animation(this, jQuery.extend({}, prop), optall);
                            if (empty || dataPriv.get(this, "finish")) anim.stop(true);
                        };
                        doAnimation.finish = doAnimation;
                        return empty || false === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
                    },
                    stop: function(type, clearQueue, gotoEnd) {
                        var stopQueue = function(hooks) {
                            var stop = hooks.stop;
                            delete hooks.stop;
                            stop(gotoEnd);
                        };
                        if ("string" !== typeof type) {
                            gotoEnd = clearQueue;
                            clearQueue = type;
                            type = void 0;
                        }
                        if (clearQueue) this.queue(type || "fx", []);
                        return this.each((function() {
                            var dequeue = true, index = null != type && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                            if (index) {
                                if (data[index] && data[index].stop) stopQueue(data[index]);
                            } else for (index in data) if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                            for (index = timers.length; index--; ) if (timers[index].elem === this && (null == type || timers[index].queue === type)) {
                                timers[index].anim.stop(gotoEnd);
                                dequeue = false;
                                timers.splice(index, 1);
                            }
                            if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
                        }));
                    },
                    finish: function(type) {
                        if (false !== type) type = type || "fx";
                        return this.each((function() {
                            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                            data.finish = true;
                            jQuery.queue(this, type, []);
                            if (hooks && hooks.stop) hooks.stop.call(this, true);
                            for (index = timers.length; index--; ) if (timers[index].elem === this && timers[index].queue === type) {
                                timers[index].anim.stop(true);
                                timers.splice(index, 1);
                            }
                            for (index = 0; index < length; index++) if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                            delete data.finish;
                        }));
                    }
                });
                jQuery.each([ "toggle", "show", "hide" ], (function(_i, name) {
                    var cssFn = jQuery.fn[name];
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return null == speed || "boolean" === typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
                    };
                }));
                jQuery.each({
                    slideDown: genFx("show"),
                    slideUp: genFx("hide"),
                    slideToggle: genFx("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(name, props) {
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return this.animate(props, speed, easing, callback);
                    };
                }));
                jQuery.timers = [];
                jQuery.fx.tick = function() {
                    var timer, i = 0, timers = jQuery.timers;
                    fxNow = Date.now();
                    for (;i < timers.length; i++) {
                        timer = timers[i];
                        if (!timer() && timers[i] === timer) timers.splice(i--, 1);
                    }
                    if (!timers.length) jQuery.fx.stop();
                    fxNow = void 0;
                };
                jQuery.fx.timer = function(timer) {
                    jQuery.timers.push(timer);
                    jQuery.fx.start();
                };
                jQuery.fx.interval = 13;
                jQuery.fx.start = function() {
                    if (inProgress) return;
                    inProgress = true;
                    schedule();
                };
                jQuery.fx.stop = function() {
                    inProgress = null;
                };
                jQuery.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                };
                jQuery.fn.delay = function(time, type) {
                    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                    type = type || "fx";
                    return this.queue(type, (function(next, hooks) {
                        var timeout = window.setTimeout(next, time);
                        hooks.stop = function() {
                            window.clearTimeout(timeout);
                        };
                    }));
                };
                (function() {
                    var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
                    input.type = "checkbox";
                    support.checkOn = "" !== input.value;
                    support.optSelected = opt.selected;
                    input = document.createElement("input");
                    input.value = "t";
                    input.type = "radio";
                    support.radioValue = "t" === input.value;
                })();
                var boolHook, attrHandle = jQuery.expr.attrHandle;
                jQuery.fn.extend({
                    attr: function(name, value) {
                        return access(this, jQuery.attr, name, value, arguments.length > 1);
                    },
                    removeAttr: function(name) {
                        return this.each((function() {
                            jQuery.removeAttr(this, name);
                        }));
                    }
                });
                jQuery.extend({
                    attr: function(elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        if (3 === nType || 8 === nType || 2 === nType) return;
                        if ("undefined" === typeof elem.getAttribute) return jQuery.prop(elem, name, value);
                        if (1 !== nType || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
                        if (void 0 !== value) {
                            if (null === value) {
                                jQuery.removeAttr(elem, name);
                                return;
                            }
                            if (hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name))) return ret;
                            elem.setAttribute(name, value + "");
                            return value;
                        }
                        if (hooks && "get" in hooks && null !== (ret = hooks.get(elem, name))) return ret;
                        ret = jQuery.find.attr(elem, name);
                        return null == ret ? void 0 : ret;
                    },
                    attrHooks: {
                        type: {
                            set: function(elem, value) {
                                if (!support.radioValue && "radio" === value && nodeName(elem, "input")) {
                                    var val = elem.value;
                                    elem.setAttribute("type", value);
                                    if (val) elem.value = val;
                                    return value;
                                }
                            }
                        }
                    },
                    removeAttr: function(elem, value) {
                        var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
                        if (attrNames && 1 === elem.nodeType) while (name = attrNames[i++]) elem.removeAttribute(name);
                    }
                });
                boolHook = {
                    set: function(elem, value, name) {
                        if (false === value) jQuery.removeAttr(elem, name); else elem.setAttribute(name, name);
                        return name;
                    }
                };
                jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), (function(_i, name) {
                    var getter = attrHandle[name] || jQuery.find.attr;
                    attrHandle[name] = function(elem, name, isXML) {
                        var ret, handle, lowercaseName = name.toLowerCase();
                        if (!isXML) {
                            handle = attrHandle[lowercaseName];
                            attrHandle[lowercaseName] = ret;
                            ret = null != getter(elem, name, isXML) ? lowercaseName : null;
                            attrHandle[lowercaseName] = handle;
                        }
                        return ret;
                    };
                }));
                var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
                jQuery.fn.extend({
                    prop: function(name, value) {
                        return access(this, jQuery.prop, name, value, arguments.length > 1);
                    },
                    removeProp: function(name) {
                        return this.each((function() {
                            delete this[jQuery.propFix[name] || name];
                        }));
                    }
                });
                jQuery.extend({
                    prop: function(elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        if (3 === nType || 8 === nType || 2 === nType) return;
                        if (1 !== nType || !jQuery.isXMLDoc(elem)) {
                            name = jQuery.propFix[name] || name;
                            hooks = jQuery.propHooks[name];
                        }
                        if (void 0 !== value) {
                            if (hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name))) return ret;
                            return elem[name] = value;
                        }
                        if (hooks && "get" in hooks && null !== (ret = hooks.get(elem, name))) return ret;
                        return elem[name];
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(elem) {
                                var tabindex = jQuery.find.attr(elem, "tabindex");
                                if (tabindex) return parseInt(tabindex, 10);
                                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                                return -1;
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                });
                if (!support.optSelected) jQuery.propHooks.selected = {
                    get: function(elem) {
                        var parent = elem.parentNode;
                        if (parent && parent.parentNode) parent.parentNode.selectedIndex;
                        return null;
                    },
                    set: function(elem) {
                        var parent = elem.parentNode;
                        if (parent) {
                            parent.selectedIndex;
                            if (parent.parentNode) parent.parentNode.selectedIndex;
                        }
                    }
                };
                jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                    jQuery.propFix[this.toLowerCase()] = this;
                }));
                function stripAndCollapse(value) {
                    var tokens = value.match(rnothtmlwhite) || [];
                    return tokens.join(" ");
                }
                function getClass(elem) {
                    return elem.getAttribute && elem.getAttribute("class") || "";
                }
                function classesToArray(value) {
                    if (Array.isArray(value)) return value;
                    if ("string" === typeof value) return value.match(rnothtmlwhite) || [];
                    return [];
                }
                jQuery.fn.extend({
                    addClass: function(value) {
                        var classNames, cur, curValue, className, i, finalValue;
                        if (isFunction(value)) return this.each((function(j) {
                            jQuery(this).addClass(value.call(this, j, getClass(this)));
                        }));
                        classNames = classesToArray(value);
                        if (classNames.length) return this.each((function() {
                            curValue = getClass(this);
                            cur = 1 === this.nodeType && " " + stripAndCollapse(curValue) + " ";
                            if (cur) {
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    if (cur.indexOf(" " + className + " ") < 0) cur += className + " ";
                                }
                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) this.setAttribute("class", finalValue);
                            }
                        }));
                        return this;
                    },
                    removeClass: function(value) {
                        var classNames, cur, curValue, className, i, finalValue;
                        if (isFunction(value)) return this.each((function(j) {
                            jQuery(this).removeClass(value.call(this, j, getClass(this)));
                        }));
                        if (!arguments.length) return this.attr("class", "");
                        classNames = classesToArray(value);
                        if (classNames.length) return this.each((function() {
                            curValue = getClass(this);
                            cur = 1 === this.nodeType && " " + stripAndCollapse(curValue) + " ";
                            if (cur) {
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    while (cur.indexOf(" " + className + " ") > -1) cur = cur.replace(" " + className + " ", " ");
                                }
                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) this.setAttribute("class", finalValue);
                            }
                        }));
                        return this;
                    },
                    toggleClass: function(value, stateVal) {
                        var classNames, className, i, self, type = typeof value, isValidValue = "string" === type || Array.isArray(value);
                        if (isFunction(value)) return this.each((function(i) {
                            jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                        }));
                        if ("boolean" === typeof stateVal && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
                        classNames = classesToArray(value);
                        return this.each((function() {
                            if (isValidValue) {
                                self = jQuery(this);
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    if (self.hasClass(className)) self.removeClass(className); else self.addClass(className);
                                }
                            } else if (void 0 === value || "boolean" === type) {
                                className = getClass(this);
                                if (className) dataPriv.set(this, "__className__", className);
                                if (this.setAttribute) this.setAttribute("class", className || false === value ? "" : dataPriv.get(this, "__className__") || "");
                            }
                        }));
                    },
                    hasClass: function(selector) {
                        var className, elem, i = 0;
                        className = " " + selector + " ";
                        while (elem = this[i++]) if (1 === elem.nodeType && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
                        return false;
                    }
                });
                var rreturn = /\r/g;
                jQuery.fn.extend({
                    val: function(value) {
                        var hooks, ret, valueIsFunction, elem = this[0];
                        if (!arguments.length) {
                            if (elem) {
                                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                                if (hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value"))) return ret;
                                ret = elem.value;
                                if ("string" === typeof ret) return ret.replace(rreturn, "");
                                return null == ret ? "" : ret;
                            }
                            return;
                        }
                        valueIsFunction = isFunction(value);
                        return this.each((function(i) {
                            var val;
                            if (1 !== this.nodeType) return;
                            if (valueIsFunction) val = value.call(this, i, jQuery(this).val()); else val = value;
                            if (null == val) val = ""; else if ("number" === typeof val) val += ""; else if (Array.isArray(val)) val = jQuery.map(val, (function(value) {
                                return null == value ? "" : value + "";
                            }));
                            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                            if (!hooks || !("set" in hooks) || void 0 === hooks.set(this, val, "value")) this.value = val;
                        }));
                    }
                });
                jQuery.extend({
                    valHooks: {
                        option: {
                            get: function(elem) {
                                var val = jQuery.find.attr(elem, "value");
                                return null != val ? val : stripAndCollapse(jQuery.text(elem));
                            }
                        },
                        select: {
                            get: function(elem) {
                                var value, option, i, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type, values = one ? null : [], max = one ? index + 1 : options.length;
                                if (index < 0) i = max; else i = one ? index : 0;
                                for (;i < max; i++) {
                                    option = options[i];
                                    if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                        value = jQuery(option).val();
                                        if (one) return value;
                                        values.push(value);
                                    }
                                }
                                return values;
                            },
                            set: function(elem, value) {
                                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                                while (i--) {
                                    option = options[i];
                                    if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                                }
                                if (!optionSet) elem.selectedIndex = -1;
                                return values;
                            }
                        }
                    }
                });
                jQuery.each([ "radio", "checkbox" ], (function() {
                    jQuery.valHooks[this] = {
                        set: function(elem, value) {
                            if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                        }
                    };
                    if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
                        return null === elem.getAttribute("value") ? "on" : elem.value;
                    };
                }));
                support.focusin = "onfocusin" in window;
                var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
                    e.stopPropagation();
                };
                jQuery.extend(jQuery.event, {
                    trigger: function(event, data, elem, onlyHandlers) {
                        var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                        cur = lastElement = tmp = elem = elem || document;
                        if (3 === elem.nodeType || 8 === elem.nodeType) return;
                        if (rfocusMorph.test(type + jQuery.event.triggered)) return;
                        if (type.indexOf(".") > -1) {
                            namespaces = type.split(".");
                            type = namespaces.shift();
                            namespaces.sort();
                        }
                        ontype = type.indexOf(":") < 0 && "on" + type;
                        event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" === typeof event && event);
                        event.isTrigger = onlyHandlers ? 2 : 3;
                        event.namespace = namespaces.join(".");
                        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        event.result = void 0;
                        if (!event.target) event.target = elem;
                        data = null == data ? [ event ] : jQuery.makeArray(data, [ event ]);
                        special = jQuery.event.special[type] || {};
                        if (!onlyHandlers && special.trigger && false === special.trigger.apply(elem, data)) return;
                        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                            bubbleType = special.delegateType || type;
                            if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                            for (;cur; cur = cur.parentNode) {
                                eventPath.push(cur);
                                tmp = cur;
                            }
                            if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                        }
                        i = 0;
                        while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                            lastElement = cur;
                            event.type = i > 1 ? bubbleType : special.bindType || type;
                            handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                            if (handle) handle.apply(cur, data);
                            handle = ontype && cur[ontype];
                            if (handle && handle.apply && acceptData(cur)) {
                                event.result = handle.apply(cur, data);
                                if (false === event.result) event.preventDefault();
                            }
                        }
                        event.type = type;
                        if (!onlyHandlers && !event.isDefaultPrevented()) if ((!special._default || false === special._default.apply(eventPath.pop(), data)) && acceptData(elem)) if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) elem[ontype] = null;
                            jQuery.event.triggered = type;
                            if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                            elem[type]();
                            if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                            jQuery.event.triggered = void 0;
                            if (tmp) elem[ontype] = tmp;
                        }
                        return event.result;
                    },
                    simulate: function(type, elem, event) {
                        var e = jQuery.extend(new jQuery.Event, event, {
                            type,
                            isSimulated: true
                        });
                        jQuery.event.trigger(e, null, elem);
                    }
                });
                jQuery.fn.extend({
                    trigger: function(type, data) {
                        return this.each((function() {
                            jQuery.event.trigger(type, data, this);
                        }));
                    },
                    triggerHandler: function(type, data) {
                        var elem = this[0];
                        if (elem) return jQuery.event.trigger(type, data, elem, true);
                    }
                });
                if (!support.focusin) jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(orig, fix) {
                    var handler = function(event) {
                        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                    };
                    jQuery.event.special[fix] = {
                        setup: function() {
                            var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                            if (!attaches) doc.addEventListener(orig, handler, true);
                            dataPriv.access(doc, fix, (attaches || 0) + 1);
                        },
                        teardown: function() {
                            var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                            if (!attaches) {
                                doc.removeEventListener(orig, handler, true);
                                dataPriv.remove(doc, fix);
                            } else dataPriv.access(doc, fix, attaches);
                        }
                    };
                }));
                var location = window.location;
                var nonce = {
                    guid: Date.now()
                };
                var rquery = /\?/;
                jQuery.parseXML = function(data) {
                    var xml, parserErrorElem;
                    if (!data || "string" !== typeof data) return null;
                    try {
                        xml = (new window.DOMParser).parseFromString(data, "text/xml");
                    } catch (e) {}
                    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
                    if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, (function(el) {
                        return el.textContent;
                    })).join("\n") : data));
                    return xml;
                };
                var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
                function buildParams(prefix, obj, traditional, add) {
                    var name;
                    if (Array.isArray(obj)) jQuery.each(obj, (function(i, v) {
                        if (traditional || rbracket.test(prefix)) add(prefix, v); else buildParams(prefix + "[" + ("object" === typeof v && null != v ? i : "") + "]", v, traditional, add);
                    })); else if (!traditional && "object" === toType(obj)) for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add); else add(prefix, obj);
                }
                jQuery.param = function(a, traditional) {
                    var prefix, s = [], add = function(key, valueOrFunction) {
                        var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(null == value ? "" : value);
                    };
                    if (null == a) return "";
                    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, (function() {
                        add(this.name, this.value);
                    })); else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
                    return s.join("&");
                };
                jQuery.fn.extend({
                    serialize: function() {
                        return jQuery.param(this.serializeArray());
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var elements = jQuery.prop(this, "elements");
                            return elements ? jQuery.makeArray(elements) : this;
                        })).filter((function() {
                            var type = this.type;
                            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                        })).map((function(_i, elem) {
                            var val = jQuery(this).val();
                            if (null == val) return null;
                            if (Array.isArray(val)) return jQuery.map(val, (function(val) {
                                return {
                                    name: elem.name,
                                    value: val.replace(rCRLF, "\r\n")
                                };
                            }));
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            };
                        })).get();
                    }
                });
                var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
                originAnchor.href = location.href;
                function addToPrefiltersOrTransports(structure) {
                    return function(dataTypeExpression, func) {
                        if ("string" !== typeof dataTypeExpression) {
                            func = dataTypeExpression;
                            dataTypeExpression = "*";
                        }
                        var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                        if (isFunction(func)) while (dataType = dataTypes[i++]) if ("+" === dataType[0]) {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func);
                        } else (structure[dataType] = structure[dataType] || []).push(func);
                    };
                }
                function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                    var inspected = {}, seekingTransport = structure === transports;
                    function inspect(dataType) {
                        var selected;
                        inspected[dataType] = true;
                        jQuery.each(structure[dataType] || [], (function(_, prefilterOrFactory) {
                            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                            if ("string" === typeof dataTypeOrTransport && !seekingTransport && !inspected[dataTypeOrTransport]) {
                                options.dataTypes.unshift(dataTypeOrTransport);
                                inspect(dataTypeOrTransport);
                                return false;
                            } else if (seekingTransport) return !(selected = dataTypeOrTransport);
                        }));
                        return selected;
                    }
                    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
                }
                function ajaxExtend(target, src) {
                    var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
                    for (key in src) if (void 0 !== src[key]) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
                    if (deep) jQuery.extend(true, target, deep);
                    return target;
                }
                function ajaxHandleResponses(s, jqXHR, responses) {
                    var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
                    while ("*" === dataTypes[0]) {
                        dataTypes.shift();
                        if (void 0 === ct) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                    }
                    if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    }
                    if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
                        for (type in responses) {
                            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                                finalDataType = type;
                                break;
                            }
                            if (!firstDataType) firstDataType = type;
                        }
                        finalDataType = finalDataType || firstDataType;
                    }
                    if (finalDataType) {
                        if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
                        return responses[finalDataType];
                    }
                }
                function ajaxConvert(s, response, jqXHR, isSuccess) {
                    var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
                    if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
                    current = dataTypes.shift();
                    while (current) {
                        if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
                        if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
                        prev = current;
                        current = dataTypes.shift();
                        if (current) if ("*" === current) current = prev; else if ("*" !== prev && prev !== current) {
                            conv = converters[prev + " " + current] || converters["* " + current];
                            if (!conv) for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (true === conv) conv = converters[conv2]; else if (true !== converters[conv2]) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1]);
                                        }
                                        break;
                                    }
                                }
                            }
                            if (true !== conv) if (conv && s.throws) response = conv(response); else try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                    return {
                        state: "success",
                        data: response
                    };
                }
                jQuery.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: location.href,
                        type: "GET",
                        isLocal: rlocalProtocol.test(location.protocol),
                        global: true,
                        processData: true,
                        async: true,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": allTypes,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": true,
                            "text json": JSON.parse,
                            "text xml": jQuery.parseXML
                        },
                        flatOptions: {
                            url: true,
                            context: true
                        }
                    },
                    ajaxSetup: function(target, settings) {
                        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
                    },
                    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                    ajaxTransport: addToPrefiltersOrTransports(transports),
                    ajax: function(url, options) {
                        if ("object" === typeof url) {
                            options = url;
                            url = void 0;
                        }
                        options = options || {};
                        var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                            readyState: 0,
                            getResponseHeader: function(key) {
                                var match;
                                if (completed) {
                                    if (!responseHeaders) {
                                        responseHeaders = {};
                                        while (match = rheaders.exec(responseHeadersString)) responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                                    }
                                    match = responseHeaders[key.toLowerCase() + " "];
                                }
                                return null == match ? null : match.join(", ");
                            },
                            getAllResponseHeaders: function() {
                                return completed ? responseHeadersString : null;
                            },
                            setRequestHeader: function(name, value) {
                                if (null == completed) {
                                    name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                                    requestHeaders[name] = value;
                                }
                                return this;
                            },
                            overrideMimeType: function(type) {
                                if (null == completed) s.mimeType = type;
                                return this;
                            },
                            statusCode: function(map) {
                                var code;
                                if (map) if (completed) jqXHR.always(map[jqXHR.status]); else for (code in map) statusCode[code] = [ statusCode[code], map[code] ];
                                return this;
                            },
                            abort: function(statusText) {
                                var finalText = statusText || strAbort;
                                if (transport) transport.abort(finalText);
                                done(0, finalText);
                                return this;
                            }
                        };
                        deferred.promise(jqXHR);
                        s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
                        s.type = options.method || options.type || s.method || s.type;
                        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [ "" ];
                        if (null == s.crossDomain) {
                            urlAnchor = document.createElement("a");
                            try {
                                urlAnchor.href = s.url;
                                urlAnchor.href = urlAnchor.href;
                                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                            } catch (e) {
                                s.crossDomain = true;
                            }
                        }
                        if (s.data && s.processData && "string" !== typeof s.data) s.data = jQuery.param(s.data, s.traditional);
                        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                        if (completed) return jqXHR;
                        fireGlobals = jQuery.event && s.global;
                        if (fireGlobals && 0 === jQuery.active++) jQuery.event.trigger("ajaxStart");
                        s.type = s.type.toUpperCase();
                        s.hasContent = !rnoContent.test(s.type);
                        cacheURL = s.url.replace(rhash, "");
                        if (!s.hasContent) {
                            uncached = s.url.slice(cacheURL.length);
                            if (s.data && (s.processData || "string" === typeof s.data)) {
                                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                                delete s.data;
                            }
                            if (false === s.cache) {
                                cacheURL = cacheURL.replace(rantiCache, "$1");
                                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                            }
                            s.url = cacheURL + uncached;
                        } else if (s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded")) s.data = s.data.replace(r20, "+");
                        if (s.ifModified) {
                            if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                            if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                        }
                        if (s.data && s.hasContent && false !== s.contentType || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
                        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                        for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                        if (s.beforeSend && (false === s.beforeSend.call(callbackContext, jqXHR, s) || completed)) return jqXHR.abort();
                        strAbort = "abort";
                        completeDeferred.add(s.complete);
                        jqXHR.done(s.success);
                        jqXHR.fail(s.error);
                        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                        if (!transport) done(-1, "No Transport"); else {
                            jqXHR.readyState = 1;
                            if (fireGlobals) globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                            if (completed) return jqXHR;
                            if (s.async && s.timeout > 0) timeoutTimer = window.setTimeout((function() {
                                jqXHR.abort("timeout");
                            }), s.timeout);
                            try {
                                completed = false;
                                transport.send(requestHeaders, done);
                            } catch (e) {
                                if (completed) throw e;
                                done(-1, e);
                            }
                        }
                        function done(status, nativeStatusText, responses, headers) {
                            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                            if (completed) return;
                            completed = true;
                            if (timeoutTimer) window.clearTimeout(timeoutTimer);
                            transport = void 0;
                            responseHeadersString = headers || "";
                            jqXHR.readyState = status > 0 ? 4 : 0;
                            isSuccess = status >= 200 && status < 300 || 304 === status;
                            if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                            if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {};
                            response = ajaxConvert(s, response, jqXHR, isSuccess);
                            if (isSuccess) {
                                if (s.ifModified) {
                                    modified = jqXHR.getResponseHeader("Last-Modified");
                                    if (modified) jQuery.lastModified[cacheURL] = modified;
                                    modified = jqXHR.getResponseHeader("etag");
                                    if (modified) jQuery.etag[cacheURL] = modified;
                                }
                                if (204 === status || "HEAD" === s.type) statusText = "nocontent"; else if (304 === status) statusText = "notmodified"; else {
                                    statusText = response.state;
                                    success = response.data;
                                    error = response.error;
                                    isSuccess = !error;
                                }
                            } else {
                                error = statusText;
                                if (status || !statusText) {
                                    statusText = "error";
                                    if (status < 0) status = 0;
                                }
                            }
                            jqXHR.status = status;
                            jqXHR.statusText = (nativeStatusText || statusText) + "";
                            if (isSuccess) deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]); else deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                            jqXHR.statusCode(statusCode);
                            statusCode = void 0;
                            if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                            completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                            if (fireGlobals) {
                                globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                                if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                            }
                        }
                        return jqXHR;
                    },
                    getJSON: function(url, data, callback) {
                        return jQuery.get(url, data, callback, "json");
                    },
                    getScript: function(url, callback) {
                        return jQuery.get(url, void 0, callback, "script");
                    }
                });
                jQuery.each([ "get", "post" ], (function(_i, method) {
                    jQuery[method] = function(url, data, callback, type) {
                        if (isFunction(data)) {
                            type = type || callback;
                            callback = data;
                            data = void 0;
                        }
                        return jQuery.ajax(jQuery.extend({
                            url,
                            type: method,
                            dataType: type,
                            data,
                            success: callback
                        }, jQuery.isPlainObject(url) && url));
                    };
                }));
                jQuery.ajaxPrefilter((function(s) {
                    var i;
                    for (i in s.headers) if ("content-type" === i.toLowerCase()) s.contentType = s.headers[i] || "";
                }));
                jQuery._evalUrl = function(url, options, doc) {
                    return jQuery.ajax({
                        url,
                        type: "GET",
                        dataType: "script",
                        cache: true,
                        async: false,
                        global: false,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(response) {
                            jQuery.globalEval(response, options, doc);
                        }
                    });
                };
                jQuery.fn.extend({
                    wrapAll: function(html) {
                        var wrap;
                        if (this[0]) {
                            if (isFunction(html)) html = html.call(this[0]);
                            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                            if (this[0].parentNode) wrap.insertBefore(this[0]);
                            wrap.map((function() {
                                var elem = this;
                                while (elem.firstElementChild) elem = elem.firstElementChild;
                                return elem;
                            })).append(this);
                        }
                        return this;
                    },
                    wrapInner: function(html) {
                        if (isFunction(html)) return this.each((function(i) {
                            jQuery(this).wrapInner(html.call(this, i));
                        }));
                        return this.each((function() {
                            var self = jQuery(this), contents = self.contents();
                            if (contents.length) contents.wrapAll(html); else self.append(html);
                        }));
                    },
                    wrap: function(html) {
                        var htmlIsFunction = isFunction(html);
                        return this.each((function(i) {
                            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                        }));
                    },
                    unwrap: function(selector) {
                        this.parent(selector).not("body").each((function() {
                            jQuery(this).replaceWith(this.childNodes);
                        }));
                        return this;
                    }
                });
                jQuery.expr.pseudos.hidden = function(elem) {
                    return !jQuery.expr.pseudos.visible(elem);
                };
                jQuery.expr.pseudos.visible = function(elem) {
                    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
                };
                jQuery.ajaxSettings.xhr = function() {
                    try {
                        return new window.XMLHttpRequest;
                    } catch (e) {}
                };
                var xhrSuccessStatus = {
                    0: 200,
                    1223: 204
                }, xhrSupported = jQuery.ajaxSettings.xhr();
                support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
                support.ajax = xhrSupported = !!xhrSupported;
                jQuery.ajaxTransport((function(options) {
                    var callback, errorCallback;
                    if (support.cors || xhrSupported && !options.crossDomain) return {
                        send: function(headers, complete) {
                            var i, xhr = options.xhr();
                            xhr.open(options.type, options.url, options.async, options.username, options.password);
                            if (options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                            if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                            if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                            for (i in headers) xhr.setRequestHeader(i, headers[i]);
                            callback = function(type) {
                                return function() {
                                    if (callback) {
                                        callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                                        if ("abort" === type) xhr.abort(); else if ("error" === type) if ("number" !== typeof xhr.status) complete(0, "error"); else complete(xhr.status, xhr.statusText); else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" !== typeof xhr.responseText ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders());
                                    }
                                };
                            };
                            xhr.onload = callback();
                            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                            if (void 0 !== xhr.onabort) xhr.onabort = errorCallback; else xhr.onreadystatechange = function() {
                                if (4 === xhr.readyState) window.setTimeout((function() {
                                    if (callback) errorCallback();
                                }));
                            };
                            callback = callback("abort");
                            try {
                                xhr.send(options.hasContent && options.data || null);
                            } catch (e) {
                                if (callback) throw e;
                            }
                        },
                        abort: function() {
                            if (callback) callback();
                        }
                    };
                }));
                jQuery.ajaxPrefilter((function(s) {
                    if (s.crossDomain) s.contents.script = false;
                }));
                jQuery.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(text) {
                            jQuery.globalEval(text);
                            return text;
                        }
                    }
                });
                jQuery.ajaxPrefilter("script", (function(s) {
                    if (void 0 === s.cache) s.cache = false;
                    if (s.crossDomain) s.type = "GET";
                }));
                jQuery.ajaxTransport("script", (function(s) {
                    if (s.crossDomain || s.scriptAttrs) {
                        var script, callback;
                        return {
                            send: function(_, complete) {
                                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                                    charset: s.scriptCharset,
                                    src: s.url
                                }).on("load error", callback = function(evt) {
                                    script.remove();
                                    callback = null;
                                    if (evt) complete("error" === evt.type ? 404 : 200, evt.type);
                                });
                                document.head.appendChild(script[0]);
                            },
                            abort: function() {
                                if (callback) callback();
                            }
                        };
                    }
                }));
                var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
                jQuery.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
                        this[callback] = true;
                        return callback;
                    }
                });
                jQuery.ajaxPrefilter("json jsonp", (function(s, originalSettings, jqXHR) {
                    var callbackName, overwritten, responseContainer, jsonProp = false !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" === typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
                    if (jsonProp || "jsonp" === s.dataTypes[0]) {
                        callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                        if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName); else if (false !== s.jsonp) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                        s.converters["script json"] = function() {
                            if (!responseContainer) jQuery.error(callbackName + " was not called");
                            return responseContainer[0];
                        };
                        s.dataTypes[0] = "json";
                        overwritten = window[callbackName];
                        window[callbackName] = function() {
                            responseContainer = arguments;
                        };
                        jqXHR.always((function() {
                            if (void 0 === overwritten) jQuery(window).removeProp(callbackName); else window[callbackName] = overwritten;
                            if (s[callbackName]) {
                                s.jsonpCallback = originalSettings.jsonpCallback;
                                oldCallbacks.push(callbackName);
                            }
                            if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                            responseContainer = overwritten = void 0;
                        }));
                        return "script";
                    }
                }));
                support.createHTMLDocument = function() {
                    var body = document.implementation.createHTMLDocument("").body;
                    body.innerHTML = "<form></form><form></form>";
                    return 2 === body.childNodes.length;
                }();
                jQuery.parseHTML = function(data, context, keepScripts) {
                    if ("string" !== typeof data) return [];
                    if ("boolean" === typeof context) {
                        keepScripts = context;
                        context = false;
                    }
                    var base, parsed, scripts;
                    if (!context) if (support.createHTMLDocument) {
                        context = document.implementation.createHTMLDocument("");
                        base = context.createElement("base");
                        base.href = document.location.href;
                        context.head.appendChild(base);
                    } else context = document;
                    parsed = rsingleTag.exec(data);
                    scripts = !keepScripts && [];
                    if (parsed) return [ context.createElement(parsed[1]) ];
                    parsed = buildFragment([ data ], context, scripts);
                    if (scripts && scripts.length) jQuery(scripts).remove();
                    return jQuery.merge([], parsed.childNodes);
                };
                jQuery.fn.load = function(url, params, callback) {
                    var selector, type, response, self = this, off = url.indexOf(" ");
                    if (off > -1) {
                        selector = stripAndCollapse(url.slice(off));
                        url = url.slice(0, off);
                    }
                    if (isFunction(params)) {
                        callback = params;
                        params = void 0;
                    } else if (params && "object" === typeof params) type = "POST";
                    if (self.length > 0) jQuery.ajax({
                        url,
                        type: type || "GET",
                        dataType: "html",
                        data: params
                    }).done((function(responseText) {
                        response = arguments;
                        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                    })).always(callback && function(jqXHR, status) {
                        self.each((function() {
                            callback.apply(this, response || [ jqXHR.responseText, status, jqXHR ]);
                        }));
                    });
                    return this;
                };
                jQuery.expr.pseudos.animated = function(elem) {
                    return jQuery.grep(jQuery.timers, (function(fn) {
                        return elem === fn.elem;
                    })).length;
                };
                jQuery.offset = {
                    setOffset: function(elem, options, i) {
                        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                        if ("static" === position) elem.style.position = "relative";
                        curOffset = curElem.offset();
                        curCSSTop = jQuery.css(elem, "top");
                        curCSSLeft = jQuery.css(elem, "left");
                        calculatePosition = ("absolute" === position || "fixed" === position) && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                        if (calculatePosition) {
                            curPosition = curElem.position();
                            curTop = curPosition.top;
                            curLeft = curPosition.left;
                        } else {
                            curTop = parseFloat(curCSSTop) || 0;
                            curLeft = parseFloat(curCSSLeft) || 0;
                        }
                        if (isFunction(options)) options = options.call(elem, i, jQuery.extend({}, curOffset));
                        if (null != options.top) props.top = options.top - curOffset.top + curTop;
                        if (null != options.left) props.left = options.left - curOffset.left + curLeft;
                        if ("using" in options) options.using.call(elem, props); else curElem.css(props);
                    }
                };
                jQuery.fn.extend({
                    offset: function(options) {
                        if (arguments.length) return void 0 === options ? this : this.each((function(i) {
                            jQuery.offset.setOffset(this, options, i);
                        }));
                        var rect, win, elem = this[0];
                        if (!elem) return;
                        if (!elem.getClientRects().length) return {
                            top: 0,
                            left: 0
                        };
                        rect = elem.getBoundingClientRect();
                        win = elem.ownerDocument.defaultView;
                        return {
                            top: rect.top + win.pageYOffset,
                            left: rect.left + win.pageXOffset
                        };
                    },
                    position: function() {
                        if (!this[0]) return;
                        var offsetParent, offset, doc, elem = this[0], parentOffset = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === jQuery.css(elem, "position")) offset = elem.getBoundingClientRect(); else {
                            offset = this.offset();
                            doc = elem.ownerDocument;
                            offsetParent = elem.offsetParent || doc.documentElement;
                            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && "static" === jQuery.css(offsetParent, "position")) offsetParent = offsetParent.parentNode;
                            if (offsetParent && offsetParent !== elem && 1 === offsetParent.nodeType) {
                                parentOffset = jQuery(offsetParent).offset();
                                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                            }
                        }
                        return {
                            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                        };
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            var offsetParent = this.offsetParent;
                            while (offsetParent && "static" === jQuery.css(offsetParent, "position")) offsetParent = offsetParent.offsetParent;
                            return offsetParent || documentElement;
                        }));
                    }
                });
                jQuery.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(method, prop) {
                    var top = "pageYOffset" === prop;
                    jQuery.fn[method] = function(val) {
                        return access(this, (function(elem, method, val) {
                            var win;
                            if (isWindow(elem)) win = elem; else if (9 === elem.nodeType) win = elem.defaultView;
                            if (void 0 === val) return win ? win[prop] : elem[method];
                            if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset); else elem[method] = val;
                        }), method, val, arguments.length);
                    };
                }));
                jQuery.each([ "top", "left" ], (function(_i, prop) {
                    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, (function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                        }
                    }));
                }));
                jQuery.each({
                    Height: "height",
                    Width: "width"
                }, (function(name, type) {
                    jQuery.each({
                        padding: "inner" + name,
                        content: type,
                        "": "outer" + name
                    }, (function(defaultExtra, funcName) {
                        jQuery.fn[funcName] = function(margin, value) {
                            var chainable = arguments.length && (defaultExtra || "boolean" !== typeof margin), extra = defaultExtra || (true === margin || true === value ? "margin" : "border");
                            return access(this, (function(elem, type, value) {
                                var doc;
                                if (isWindow(elem)) return 0 === funcName.indexOf("outer") ? elem["inner" + name] : elem.document.documentElement["client" + name];
                                if (9 === elem.nodeType) {
                                    doc = elem.documentElement;
                                    return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                                }
                                return void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                            }), type, chainable ? margin : void 0, chainable);
                        };
                    }));
                }));
                jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(_i, type) {
                    jQuery.fn[type] = function(fn) {
                        return this.on(type, fn);
                    };
                }));
                jQuery.fn.extend({
                    bind: function(types, data, fn) {
                        return this.on(types, null, data, fn);
                    },
                    unbind: function(types, fn) {
                        return this.off(types, null, fn);
                    },
                    delegate: function(selector, types, data, fn) {
                        return this.on(types, selector, data, fn);
                    },
                    undelegate: function(selector, types, fn) {
                        return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn);
                    },
                    hover: function(fnOver, fnOut) {
                        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                    }
                });
                jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), (function(_i, name) {
                    jQuery.fn[name] = function(data, fn) {
                        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
                    };
                }));
                var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                jQuery.proxy = function(fn, context) {
                    var tmp, args, proxy;
                    if ("string" === typeof context) {
                        tmp = fn[context];
                        context = fn;
                        fn = tmp;
                    }
                    if (!isFunction(fn)) return;
                    args = slice.call(arguments, 2);
                    proxy = function() {
                        return fn.apply(context || this, args.concat(slice.call(arguments)));
                    };
                    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                    return proxy;
                };
                jQuery.holdReady = function(hold) {
                    if (hold) jQuery.readyWait++; else jQuery.ready(true);
                };
                jQuery.isArray = Array.isArray;
                jQuery.parseJSON = JSON.parse;
                jQuery.nodeName = nodeName;
                jQuery.isFunction = isFunction;
                jQuery.isWindow = isWindow;
                jQuery.camelCase = camelCase;
                jQuery.type = toType;
                jQuery.now = Date.now;
                jQuery.isNumeric = function(obj) {
                    var type = jQuery.type(obj);
                    return ("number" === type || "string" === type) && !isNaN(obj - parseFloat(obj));
                };
                jQuery.trim = function(text) {
                    return null == text ? "" : (text + "").replace(rtrim, "$1");
                };
                if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return jQuery;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                var _jQuery = window.jQuery, _$ = window.$;
                jQuery.noConflict = function(deep) {
                    if (window.$ === jQuery) window.$ = _$;
                    if (deep && window.jQuery === jQuery) window.jQuery = _jQuery;
                    return jQuery;
                };
                if ("undefined" === typeof noGlobal) window.jQuery = window.$ = jQuery;
                return jQuery;
            }));
        },
        128: (module, exports, __webpack_require__) => {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            (function() {
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
                    excluded: ""
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
                    if (options.keyboardSupport) addEvent("keydown", keydown);
                }
                function init() {
                    if (initDone || !document.body) return;
                    initDone = true;
                    var body = document.body;
                    var html = document.documentElement;
                    var windowHeight = window.innerHeight;
                    var scrollHeight = body.scrollHeight;
                    root = document.compatMode.indexOf("CSS") >= 0 ? html : body;
                    activeElement = body;
                    initTest();
                    if (top != self) isFrame = true; else if (isOldSafari && scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {
                        var fullPageElem = document.createElement("div");
                        fullPageElem.style.cssText = "position:absolute; z-index:-10000; " + "top:0; left:0; right:0; height:" + root.scrollHeight + "px";
                        document.body.appendChild(fullPageElem);
                        var pendingRefresh;
                        refreshSize = function() {
                            if (pendingRefresh) return;
                            pendingRefresh = setTimeout((function() {
                                if (isExcluded) return;
                                fullPageElem.style.height = "0";
                                fullPageElem.style.height = root.scrollHeight + "px";
                                pendingRefresh = null;
                            }), 500);
                        };
                        setTimeout(refreshSize, 10);
                        addEvent("resize", refreshSize);
                        var config = {
                            attributes: true,
                            childList: true,
                            characterData: false
                        };
                        observer = new MutationObserver(refreshSize);
                        observer.observe(body, config);
                        if (root.offsetHeight <= windowHeight) {
                            var clearfix = document.createElement("div");
                            clearfix.style.clear = "both";
                            body.appendChild(clearfix);
                        }
                    }
                    if (!options.fixedBackground && !isExcluded) {
                        body.style.backgroundAttachment = "scroll";
                        html.style.backgroundAttachment = "scroll";
                    }
                }
                function cleanup() {
                    observer && observer.disconnect();
                    removeEvent(wheelEvent, wheel);
                    removeEvent("mousedown", mousedown);
                    removeEvent("keydown", keydown);
                    removeEvent("resize", refreshSize);
                    removeEvent("load", init);
                }
                var que = [];
                var pending = false;
                var lastScroll = Date.now();
                function scrollArray(elem, left, top) {
                    directionCheck(left, top);
                    if (1 != options.accelerationMax) {
                        var now = Date.now();
                        var elapsed = now - lastScroll;
                        if (elapsed < options.accelerationDelta) {
                            var factor = (1 + 50 / elapsed) / 2;
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
                        lastX: left < 0 ? .99 : -.99,
                        lastY: top < 0 ? .99 : -.99,
                        start: Date.now()
                    });
                    if (pending) return;
                    var scrollRoot = getScrollRoot();
                    var isWindowScroll = elem === scrollRoot || elem === document.body;
                    if (null == elem.$scrollBehavior && isScrollBehaviorSmooth(elem)) {
                        elem.$scrollBehavior = elem.style.scrollBehavior;
                        elem.style.scrollBehavior = "auto";
                    }
                    var step = function(time) {
                        var now = Date.now();
                        var scrollX = 0;
                        var scrollY = 0;
                        for (var i = 0; i < que.length; i++) {
                            var item = que[i];
                            var elapsed = now - item.start;
                            var finished = elapsed >= options.animationTime;
                            var position = finished ? 1 : elapsed / options.animationTime;
                            if (options.pulseAlgorithm) position = pulse(position);
                            var x = item.x * position - item.lastX >> 0;
                            var y = item.y * position - item.lastY >> 0;
                            scrollX += x;
                            scrollY += y;
                            item.lastX += x;
                            item.lastY += y;
                            if (finished) {
                                que.splice(i, 1);
                                i--;
                            }
                        }
                        if (isWindowScroll) window.scrollBy(scrollX, scrollY); else {
                            if (scrollX) elem.scrollLeft += scrollX;
                            if (scrollY) elem.scrollTop += scrollY;
                        }
                        if (!left && !top) que = [];
                        if (que.length) requestFrame(step, elem, 1e3 / options.frameRate + 1); else {
                            pending = false;
                            if (null != elem.$scrollBehavior) {
                                elem.style.scrollBehavior = elem.$scrollBehavior;
                                elem.$scrollBehavior = null;
                            }
                        }
                    };
                    requestFrame(step, elem, 0);
                    pending = true;
                }
                function wheel(event) {
                    if (!initDone) init();
                    var target = event.target;
                    if (event.defaultPrevented || event.ctrlKey) return true;
                    if (isNodeName(activeElement, "embed") || isNodeName(target, "embed") && /\.pdf/i.test(target.src) || isNodeName(activeElement, "object") || target.shadowRoot) return true;
                    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
                    var deltaY = -event.wheelDeltaY || event.deltaY || 0;
                    if (isMac) {
                        if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
                        if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
                    }
                    if (!deltaX && !deltaY) deltaY = -event.wheelDelta || 0;
                    if (1 === event.deltaMode) {
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
                    if (isTouchpad(deltaY)) return true;
                    if (Math.abs(deltaX) > 1.2) deltaX *= options.stepSize / 120;
                    if (Math.abs(deltaY) > 1.2) deltaY *= options.stepSize / 120;
                    scrollArray(overflowing, deltaX, deltaY);
                    event.preventDefault();
                    scheduleClearCache();
                }
                function keydown(event) {
                    var target = event.target;
                    var modifier = event.ctrlKey || event.altKey || event.metaKey || event.shiftKey && event.keyCode !== key.spacebar;
                    if (!document.body.contains(activeElement)) activeElement = document.activeElement;
                    var inputNodeNames = /^(textarea|select|embed|object)$/i;
                    var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
                    if (event.defaultPrevented || inputNodeNames.test(target.nodeName) || isNodeName(target, "input") && !buttonTypes.test(target.type) || isNodeName(activeElement, "video") || isInsideYoutubeVideo(event) || target.isContentEditable || modifier) return true;
                    if ((isNodeName(target, "button") || isNodeName(target, "input") && buttonTypes.test(target.type)) && event.keyCode === key.spacebar) return true;
                    if (isNodeName(target, "input") && "radio" == target.type && arrowKeys[event.keyCode]) return true;
                    var shift, x = 0, y = 0;
                    var overflowing = overflowingAncestor(activeElement);
                    if (!overflowing) return isFrame && isChrome ? parent.keydown(event) : true;
                    var clientHeight = overflowing.clientHeight;
                    if (overflowing == document.body) clientHeight = window.innerHeight;
                    switch (event.keyCode) {
                      case key.up:
                        y = -options.arrowScroll;
                        break;

                      case key.down:
                        y = options.arrowScroll;
                        break;

                      case key.spacebar:
                        shift = event.shiftKey ? 1 : -1;
                        y = -shift * clientHeight * .9;
                        break;

                      case key.pageup:
                        y = .9 * -clientHeight;
                        break;

                      case key.pagedown:
                        y = .9 * clientHeight;
                        break;

                      case key.home:
                        if (overflowing == document.body && document.scrollingElement) overflowing = document.scrollingElement;
                        y = -overflowing.scrollTop;
                        break;

                      case key.end:
                        var scroll = overflowing.scrollHeight - overflowing.scrollTop;
                        var scrollRemaining = scroll - clientHeight;
                        y = scrollRemaining > 0 ? scrollRemaining + 10 : 0;
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
                var uniqueID = function() {
                    var i = 0;
                    return function(el) {
                        return el.uniqueID || (el.uniqueID = i++);
                    };
                }();
                var cacheX = {};
                var cacheY = {};
                var clearCacheTimer;
                var smoothBehaviorForElement = {};
                function scheduleClearCache() {
                    clearTimeout(clearCacheTimer);
                    clearCacheTimer = setInterval((function() {
                        cacheX = cacheY = smoothBehaviorForElement = {};
                    }), 1 * 1e3);
                }
                function setCache(elems, overflowing, x) {
                    var cache = x ? cacheX : cacheY;
                    for (var i = elems.length; i--; ) cache[uniqueID(elems[i])] = overflowing;
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
                        if (cached) return setCache(elems, cached);
                        elems.push(el);
                        if (rootScrollHeight === el.scrollHeight) {
                            var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
                            var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
                            if (isFrame && isContentOverflowing(root) || !isFrame && isOverflowCSS) return setCache(elems, getScrollRoot());
                        } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) return setCache(elems, el);
                    } while (el = el.parentElement);
                }
                function isContentOverflowing(el) {
                    return el.clientHeight + 10 < el.scrollHeight;
                }
                function overflowNotHidden(el) {
                    var overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
                    return "hidden" !== overflow;
                }
                function overflowAutoOrScroll(el) {
                    var overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
                    return "scroll" === overflow || "auto" === overflow;
                }
                function isScrollBehaviorSmooth(el) {
                    var id = uniqueID(el);
                    if (null == smoothBehaviorForElement[id]) {
                        var scrollBehavior = getComputedStyle(el, "")["scroll-behavior"];
                        smoothBehaviorForElement[id] = "smooth" == scrollBehavior;
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
                    return el && (el.nodeName || "").toLowerCase() === tag.toLowerCase();
                }
                function directionCheck(x, y) {
                    x = x > 0 ? 1 : -1;
                    y = y > 0 ? 1 : -1;
                    if (direction.x !== x || direction.y !== y) {
                        direction.x = x;
                        direction.y = y;
                        que = [];
                        lastScroll = 0;
                    }
                }
                if (window.localStorage && localStorage.SS_deltaBuffer) try {
                    deltaBuffer = localStorage.SS_deltaBuffer.split(",");
                } catch (e) {}
                function isTouchpad(deltaY) {
                    if (!deltaY) return;
                    if (!deltaBuffer.length) deltaBuffer = [ deltaY, deltaY, deltaY ];
                    deltaY = Math.abs(deltaY);
                    deltaBuffer.push(deltaY);
                    deltaBuffer.shift();
                    clearTimeout(deltaBufferTimer);
                    deltaBufferTimer = setTimeout((function() {
                        try {
                            localStorage.SS_deltaBuffer = deltaBuffer.join(",");
                        } catch (e) {}
                    }), 1e3);
                    var dpiScaledWheelDelta = deltaY > 120 && allDeltasDivisableBy(deltaY);
                    var tp = !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100) && !dpiScaledWheelDelta;
                    if (deltaY < 50) return true;
                    return tp;
                }
                function isDivisible(n, divisor) {
                    return Math.floor(n / divisor) == n / divisor;
                }
                function allDeltasDivisableBy(divisor) {
                    return isDivisible(deltaBuffer[0], divisor) && isDivisible(deltaBuffer[1], divisor) && isDivisible(deltaBuffer[2], divisor);
                }
                function isInsideYoutubeVideo(event) {
                    var elem = event.target;
                    var isControl = false;
                    if (-1 != document.URL.indexOf("www.youtube.com/watch")) do {
                        isControl = elem.classList && elem.classList.contains("html5-video-controls");
                        if (isControl) break;
                    } while (elem = elem.parentNode);
                    return isControl;
                }
                var requestFrame = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback, element, delay) {
                        window.setTimeout(callback, delay || 1e3 / 60);
                    };
                }();
                var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                var getScrollRoot = function() {
                    var SCROLL_ROOT = document.scrollingElement;
                    return function() {
                        if (!SCROLL_ROOT) {
                            var dummy = document.createElement("div");
                            dummy.style.cssText = "height:10000px;width:1px;";
                            document.body.appendChild(dummy);
                            var bodyScrollTop = document.body.scrollTop;
                            document.documentElement.scrollTop;
                            window.scrollBy(0, 3);
                            if (document.body.scrollTop != bodyScrollTop) SCROLL_ROOT = document.body; else SCROLL_ROOT = document.documentElement;
                            window.scrollBy(0, -3);
                            document.body.removeChild(dummy);
                        }
                        return SCROLL_ROOT;
                    };
                }();
                function pulse_(x) {
                    var val, start, expx;
                    x *= options.pulseScale;
                    if (x < 1) val = x - (1 - Math.exp(-x)); else {
                        start = Math.exp(-1);
                        x -= 1;
                        expx = 1 - Math.exp(-x);
                        val = start + expx * (1 - start);
                    }
                    return val * options.pulseNormalize;
                }
                function pulse(x) {
                    if (x >= 1) return 1;
                    if (x <= 0) return 0;
                    if (1 == options.pulseNormalize) options.pulseNormalize /= pulse_(1);
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
                    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function() {
                            supportsPassive = true;
                        }
                    }));
                } catch (e) {}
                var wheelOpt = supportsPassive ? {
                    passive: false
                } : false;
                var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
                if (wheelEvent && isEnabledForBrowser) {
                    addEvent(wheelEvent, wheel, wheelOpt);
                    addEvent("mousedown", mousedown);
                    addEvent("load", init);
                }
                function SmoothScroll(optionsToSet) {
                    for (var key in optionsToSet) if (defaultOptions.hasOwnProperty(key)) options[key] = optionsToSet[key];
                }
                SmoothScroll.destroy = cleanup;
                if (window.SmoothScrollOptions) SmoothScroll(window.SmoothScrollOptions);
                if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return SmoothScroll;
                }.call(exports, __webpack_require__, exports, module), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            })();
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function functions_getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        if (spollersBlock.classList.contains("_spoller-init")) {
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }
                    }));
                }));
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = functions_getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".burger")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".burger")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (void 0 === delay) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (void 0 === axis) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = void 0 === _temp ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (void 0 === overrides) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (void 0 === options) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate) {
            if (void 0 === translate) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (void 0 === axis) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (void 0 === translate) translate = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === translateBounds) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            const translate = -snapGrid[snapIndex];
            swiper.updateProgress(translate);
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === threshold) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                dom(el).attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < swiper.loopedSlides; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                appendSlides.push(slides.eq(index)[0]);
                prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
            }
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (void 0 === base) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = dom(event.path[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (void 0 === base) base = "window";
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: true,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (void 0 === obj) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (void 0 === view) view = "current";
                if (void 0 === exact) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (void 0 === needUpdate) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && "rtl" === direction || !swiper.rtl && "ltr" === direction) return;
                swiper.rtl = "rtl" === direction;
                swiper.rtlTranslate = "horizontal" === swiper.params.direction && swiper.rtl;
                if (swiper.rtl) {
                    swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (void 0 === deleteInstance) deleteInstance = true;
                if (void 0 === cleanStyles) cleanStyles = true;
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                let $el;
                if (el) {
                    $el = dom(el);
                    if (swiper.params.uniqueNavElements && "string" === typeof el && $el.length > 1 && 1 === swiper.$el.find(el).length) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                    if ($el[0] && "BUTTON" === $el[0].tagName) $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            }
            function update() {
                if (swiper.params.loop) return;
                const {$nextEl, $prevEl} = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on("init", (() => {
                if (false === swiper.params.navigation.enabled) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            }));
            on("click", ((_s, e) => {
                const {$nextEl, $prevEl} = swiper.navigation;
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (true === isHidden) emit("navigationShow"); else emit("navigationHide");
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
                init();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (void 0 === classes) classes = "";
            return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length;
            }
            function setSideBullets($bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let current;
                const total = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                    if (current > slidesLength - 1 - 2 * swiper.loopedSlides) current -= slidesLength - 2 * swiper.loopedSlides;
                    if (current > total - 1) current -= total;
                    if (current < 0 && "bullets" !== swiper.params.paginationType) current = total + current;
                } else if ("undefined" !== typeof swiper.snapIndex) current = swiper.snapIndex; else current = swiper.activeIndex || 0;
                if ("bullets" === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                        $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                        if (params.dynamicMainBullets > 1 && void 0 !== swiper.previousIndex) {
                            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.removeClass([ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)).join(" "));
                    if ($el.length > 1) bullets.each((bullet => {
                        const $bullet = dom(bullet);
                        const bulletIndex = $bullet.index();
                        if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                            if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                        }
                    })); else {
                        const $bullet = bullets.eq(current);
                        const bulletIndex = $bullet.index();
                        $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            const $firstDisplayedBullet = bullets.eq(firstIndex);
                            const $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (let i = firstIndex; i <= lastIndex; i += 1) bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                            if (swiper.params.loop) if (bulletIndex >= bullets.length) {
                                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            }
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
                    }
                }
                if ("fraction" === params.type) {
                    $el.find(classes_to_selector_classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find(classes_to_selector_classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
                }
                if ("progressbar" === params.type) {
                    let progressbarDirection;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if ("horizontal" === progressbarDirection) scaleX = scale; else scaleY = scale;
                    $el.find(classes_to_selector_classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
                }
                if ("custom" === params.type && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    emit("paginationRender", $el[0]);
                } else emit("paginationUpdate", $el[0]);
                if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let paginationHTML = "";
                if ("bullets" === params.type) {
                    let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(classes_to_selector_classesToSelector(params.bulletClass));
                }
                if ("fraction" === params.type) {
                    if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("progressbar" === params.type) {
                    if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("custom" !== params.type) emit("paginationRender", swiper.pagination.$el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let $el = dom(params.el);
                if (0 === $el.length) return;
                if (swiper.params.uniqueNavElements && "string" === typeof params.el && $el.length > 1) {
                    $el = swiper.$el.find(params.el);
                    if ($el.length > 1) $el = $el.filter((el => {
                        if (dom(el).parents(".swiper")[0] !== swiper.el) return false;
                        return true;
                    }));
                }
                if ("bullets" === params.type && params.clickable) $el.addClass(params.clickableClass);
                $el.addClass(params.modifierClass + params.type);
                $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if ("bullets" === params.type && params.dynamicBullets) {
                    $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if ("progressbar" === params.type && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
                if (params.clickable) $el.on("click", classes_to_selector_classesToSelector(params.bulletClass), (function onClick(e) {
                    e.preventDefault();
                    let index = dom(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                }));
                Object.assign(swiper.pagination, {
                    $el,
                    el: $el[0]
                });
                if (!swiper.enabled) $el.addClass(params.lockClass);
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
                if (params.clickable) $el.off("click", classes_to_selector_classesToSelector(params.bulletClass));
            }
            on("init", (() => {
                if (false === swiper.params.pagination.enabled) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (swiper.params.loop) update(); else if ("undefined" === typeof swiper.snapIndex) update();
            }));
            on("snapIndexChange", (() => {
                if (!swiper.params.loop) update();
            }));
            on("slidesLengthChange", (() => {
                if (swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("snapGridLengthChange", (() => {
                if (!swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$el} = swiper.pagination;
                if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const {$el} = swiper.pagination;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                    if (true === isHidden) emit("paginationShow"); else emit("paginationHide");
                    $el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                if (swiper.pagination.$el) swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                if (swiper.pagination.$el) swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function Lazy(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                lazy: {
                    checkInView: false,
                    enabled: false,
                    loadPrevNext: false,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: false,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            });
            swiper.lazy = {};
            let scrollHandlerAttached = false;
            let initialImageLoaded = false;
            function loadInSlide(index, loadInDuplicate) {
                if (void 0 === loadInDuplicate) loadInDuplicate = true;
                const params = swiper.params.lazy;
                if ("undefined" === typeof index) return;
                if (0 === swiper.slides.length) return;
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
                const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
                if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
                if (0 === $images.length) return;
                $images.each((imageEl => {
                    const $imageEl = dom(imageEl);
                    $imageEl.addClass(params.loadingClass);
                    const background = $imageEl.attr("data-background");
                    const src = $imageEl.attr("data-src");
                    const srcset = $imageEl.attr("data-srcset");
                    const sizes = $imageEl.attr("data-sizes");
                    const $pictureEl = $imageEl.parent("picture");
                    swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, (() => {
                        if ("undefined" === typeof swiper || null === swiper || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                        if (background) {
                            $imageEl.css("background-image", `url("${background}")`);
                            $imageEl.removeAttr("data-background");
                        } else {
                            if (srcset) {
                                $imageEl.attr("srcset", srcset);
                                $imageEl.removeAttr("data-srcset");
                            }
                            if (sizes) {
                                $imageEl.attr("sizes", sizes);
                                $imageEl.removeAttr("data-sizes");
                            }
                            if ($pictureEl.length) $pictureEl.children("source").each((sourceEl => {
                                const $source = dom(sourceEl);
                                if ($source.attr("data-srcset")) {
                                    $source.attr("srcset", $source.attr("data-srcset"));
                                    $source.removeAttr("data-srcset");
                                }
                            }));
                            if (src) {
                                $imageEl.attr("src", src);
                                $imageEl.removeAttr("data-src");
                            }
                        }
                        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                        $slideEl.find(`.${params.preloaderClass}`).remove();
                        if (swiper.params.loop && loadInDuplicate) {
                            const slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");
                            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                                const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                                loadInSlide(originalSlide.index(), false);
                            } else {
                                const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                                loadInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        emit("lazyImageReady", $slideEl[0], $imageEl[0]);
                        if (swiper.params.autoHeight) swiper.updateAutoHeight();
                    }));
                    emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
                }));
            }
            function load() {
                const {$wrapperEl, params: swiperParams, slides, activeIndex} = swiper;
                const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
                const params = swiperParams.lazy;
                let slidesPerView = swiperParams.slidesPerView;
                if ("auto" === slidesPerView) slidesPerView = 0;
                function slideExist(index) {
                    if (isVirtual) {
                        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) return true;
                    } else if (slides[index]) return true;
                    return false;
                }
                function slideIndex(slideEl) {
                    if (isVirtual) return dom(slideEl).attr("data-swiper-slide-index");
                    return dom(slideEl).index();
                }
                if (!initialImageLoaded) initialImageLoaded = true;
                if (swiper.params.watchSlidesProgress) $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((slideEl => {
                    const index = isVirtual ? dom(slideEl).attr("data-swiper-slide-index") : dom(slideEl).index();
                    loadInSlide(index);
                })); else if (slidesPerView > 1) {
                    for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) if (slideExist(i)) loadInSlide(i);
                } else loadInSlide(activeIndex);
                if (params.loadPrevNext) if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                    const amount = params.loadPrevNextAmount;
                    const spv = Math.ceil(slidesPerView);
                    const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                    const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
                    for (let i = activeIndex + spv; i < maxIndex; i += 1) if (slideExist(i)) loadInSlide(i);
                    for (let i = minIndex; i < activeIndex; i += 1) if (slideExist(i)) loadInSlide(i);
                } else {
                    const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                    if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                    const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                    if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
                }
            }
            function checkInViewOnLoad() {
                const window = ssr_window_esm_getWindow();
                if (!swiper || swiper.destroyed) return;
                const $scrollElement = swiper.params.lazy.scrollingElement ? dom(swiper.params.lazy.scrollingElement) : dom(window);
                const isWindow = $scrollElement[0] === window;
                const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
                const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
                const swiperOffset = swiper.$el.offset();
                const {rtlTranslate: rtl} = swiper;
                let inView = false;
                if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                const swiperCoord = [ [ swiperOffset.left, swiperOffset.top ], [ swiperOffset.left + swiper.width, swiperOffset.top ], [ swiperOffset.left, swiperOffset.top + swiper.height ], [ swiperOffset.left + swiper.width, swiperOffset.top + swiper.height ] ];
                for (let i = 0; i < swiperCoord.length; i += 1) {
                    const point = swiperCoord[i];
                    if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                        if (0 === point[0] && 0 === point[1]) continue;
                        inView = true;
                    }
                }
                const passiveListener = "touchstart" === swiper.touchEvents.start && swiper.support.passiveListener && swiper.params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                if (inView) {
                    load();
                    $scrollElement.off("scroll", checkInViewOnLoad, passiveListener);
                } else if (!scrollHandlerAttached) {
                    scrollHandlerAttached = true;
                    $scrollElement.on("scroll", checkInViewOnLoad, passiveListener);
                }
            }
            on("beforeInit", (() => {
                if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
            }));
            on("init", (() => {
                if (swiper.params.lazy.enabled) if (swiper.params.lazy.checkInView) checkInViewOnLoad(); else load();
            }));
            on("scroll", (() => {
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) load();
            }));
            on("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
                if (swiper.params.lazy.enabled) if (swiper.params.lazy.checkInView) checkInViewOnLoad(); else load();
            }));
            on("transitionStart", (() => {
                if (swiper.params.lazy.enabled) if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) if (swiper.params.lazy.checkInView) checkInViewOnLoad(); else load();
            }));
            on("transitionEnd", (() => {
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) if (swiper.params.lazy.checkInView) checkInViewOnLoad(); else load();
            }));
            on("slideChange", (() => {
                const {lazy, cssMode, watchSlidesProgress, touchReleaseOnEdges, resistanceRatio} = swiper.params;
                if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || 0 === resistanceRatio))) load();
            }));
            on("destroy", (() => {
                if (!swiper.$el) return;
                swiper.$el.find(`.${swiper.params.lazy.loadingClass}`).removeClass(swiper.params.lazy.loadingClass);
            }));
            Object.assign(swiper.lazy, {
                load,
                loadInSlide
            });
        }
        function Autoplay(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            let timeout;
            swiper.autoplay = {
                running: false,
                paused: false
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            function run() {
                if (!swiper.size) {
                    swiper.autoplay.running = false;
                    swiper.autoplay.paused = false;
                    return;
                }
                const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                let delay = swiper.params.autoplay.delay;
                if ($activeSlideEl.attr("data-swiper-autoplay")) delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
                clearTimeout(timeout);
                timeout = utils_nextTick((() => {
                    let autoplayResult;
                    if (swiper.params.autoplay.reverseDirection) if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isBeginning) {
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop(); else if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isEnd) {
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop();
                    if (swiper.params.cssMode && swiper.autoplay.running) run(); else if (false === autoplayResult) run();
                }), delay);
            }
            function start() {
                if ("undefined" !== typeof timeout) return false;
                if (swiper.autoplay.running) return false;
                swiper.autoplay.running = true;
                emit("autoplayStart");
                run();
                return true;
            }
            function stop() {
                if (!swiper.autoplay.running) return false;
                if ("undefined" === typeof timeout) return false;
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = void 0;
                }
                swiper.autoplay.running = false;
                emit("autoplayStop");
                return true;
            }
            function pause(speed) {
                if (!swiper.autoplay.running) return;
                if (swiper.autoplay.paused) return;
                if (timeout) clearTimeout(timeout);
                swiper.autoplay.paused = true;
                if (0 === speed || !swiper.params.autoplay.waitForTransition) {
                    swiper.autoplay.paused = false;
                    run();
                } else [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
                }));
            }
            function onVisibilityChange() {
                const document = ssr_window_esm_getDocument();
                if ("hidden" === document.visibilityState && swiper.autoplay.running) pause();
                if ("visible" === document.visibilityState && swiper.autoplay.paused) {
                    run();
                    swiper.autoplay.paused = false;
                }
            }
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
                if (e.target !== swiper.$wrapperEl[0]) return;
                [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                }));
                swiper.autoplay.paused = false;
                if (!swiper.autoplay.running) stop(); else run();
            }
            function onMouseEnter() {
                if (swiper.params.autoplay.disableOnInteraction) stop(); else {
                    emit("autoplayPause");
                    pause();
                }
                [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                }));
            }
            function onMouseLeave() {
                if (swiper.params.autoplay.disableOnInteraction) return;
                swiper.autoplay.paused = false;
                emit("autoplayResume");
                run();
            }
            function attachMouseEvents() {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.$el.on("mouseenter", onMouseEnter);
                    swiper.$el.on("mouseleave", onMouseLeave);
                }
            }
            function detachMouseEvents() {
                swiper.$el.off("mouseenter", onMouseEnter);
                swiper.$el.off("mouseleave", onMouseLeave);
            }
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    start();
                    const document = ssr_window_esm_getDocument();
                    document.addEventListener("visibilitychange", onVisibilityChange);
                    attachMouseEvents();
                }
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.autoplay.running) if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.autoplay.running) if (swiper.params.autoplay.disableOnInteraction) stop(); else pause();
            }));
            on("touchEnd", (() => {
                if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
            }));
            on("destroy", (() => {
                detachMouseEvents();
                if (swiper.autoplay.running) stop();
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            }));
            Object.assign(swiper.autoplay, {
                pause,
                run,
                start,
                stop
            });
        }
        function initSliders() {
            if (document.querySelector(".ticker__slider")) new core(".ticker__slider", {
                modules: [ Autoplay ],
                observer: true,
                observeParents: true,
                slidesPerView: 3,
                spaceBetween: 15,
                loop: true,
                allowTouchMove: false,
                autoplay: {
                    delay: 0
                },
                speed: 5e3,
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                },
                breakpoints: {
                    480: {
                        slidesPerView: 4
                    }
                }
            });
            if (document.querySelector(".members__slider-inner")) new core(".members__slider-inner", {
                modules: [ Navigation, Pagination, Autoplay, Lazy ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 15,
                speed: 800,
                centeredSlides: true,
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true,
                    dynamicBullets: true
                },
                navigation: {
                    prevEl: ".members__prev",
                    nextEl: ".members__next"
                },
                autoplay: {
                    delay: 2e3
                },
                breakpoints: {
                    480: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    }
                },
                lazy: true
            });
            if (document.querySelector(".tabs-nft__navigation")) new core(".tabs-nft__navigation", {
                slidesPerView: "auto",
                spaceBetween: 20
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Проснулся, слежу за объектами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if ("null" !== paramsWatch.root) this.scrollWatcherLogging(`Эмм... родительского объекта ${paramsWatch.root} нет на странице`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`Ой ой, настройку data-watch-margin нужно задавать в PX или %`);
                    return;
                }
                if ("prx" === paramsWatch.threshold) {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я вижу ${targetElement.classList}, добавил класс _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не вижу ${targetElement.classList}, убрал класс _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестал следить за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? functions_FLS(`[Наблюдатель]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        modules_flsModules.watcher = new ScrollWatcher({});
        let addWindowScrollEvent = false;
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        /*!
 * lightgallery | 2.6.0 | August 29th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var __assign = function() {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        }
        var lGEvents = {
            afterAppendSlide: "lgAfterAppendSlide",
            init: "lgInit",
            hasVideo: "lgHasVideo",
            containerResize: "lgContainerResize",
            updateSlides: "lgUpdateSlides",
            afterAppendSubHtml: "lgAfterAppendSubHtml",
            beforeOpen: "lgBeforeOpen",
            afterOpen: "lgAfterOpen",
            slideItemLoad: "lgSlideItemLoad",
            beforeSlide: "lgBeforeSlide",
            afterSlide: "lgAfterSlide",
            posterClick: "lgPosterClick",
            dragStart: "lgDragStart",
            dragMove: "lgDragMove",
            dragEnd: "lgDragEnd",
            beforeNextSlide: "lgBeforeNextSlide",
            beforePrevSlide: "lgBeforePrevSlide",
            beforeClose: "lgBeforeClose",
            afterClose: "lgAfterClose",
            rotateLeft: "lgRotateLeft",
            rotateRight: "lgRotateRight",
            flipHorizontal: "lgFlipHorizontal",
            flipVertical: "lgFlipVertical",
            autoplay: "lgAutoplay",
            autoplayStart: "lgAutoplayStart",
            autoplayStop: "lgAutoplayStop"
        };
        var lightGalleryCoreSettings = {
            mode: "lg-slide",
            easing: "ease",
            speed: 400,
            licenseKey: "0000-0000-000-0000",
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 300,
            container: "",
            startAnimationDuration: 400,
            zoomFromOrigin: true,
            hideBarsDelay: 0,
            showBarsAfter: 1e4,
            slideDelay: 0,
            supportLegacyBrowser: true,
            allowMediaOverlap: false,
            videoMaxSize: "1280-720",
            loadYouTubePoster: true,
            defaultCaptionHeight: 0,
            ariaLabelledby: "",
            ariaDescribedby: "",
            resetScrollPosition: true,
            hideScrollbar: false,
            closable: true,
            swipeToClose: true,
            closeOnTap: true,
            showCloseIcon: true,
            showMaximizeIcon: false,
            loop: true,
            escKey: true,
            keyPress: true,
            trapFocus: true,
            controls: true,
            slideEndAnimation: true,
            hideControlOnEnd: false,
            mousewheel: false,
            getCaptionFromTitleOrAlt: true,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: false,
            preload: 2,
            numberOfSlideItemsInDom: 10,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: 0,
            iframeWidth: "100%",
            iframeHeight: "100%",
            iframeMaxWidth: "100%",
            iframeMaxHeight: "100%",
            download: true,
            counter: true,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: true,
            enableDrag: true,
            dynamic: false,
            dynamicEl: [],
            extraProps: [],
            exThumbImage: "",
            isMobile: void 0,
            mobileSettings: {
                controls: false,
                showCloseIcon: false,
                download: false
            },
            plugins: [],
            strings: {
                closeGallery: "Close gallery",
                toggleMaximize: "Toggle maximize",
                previousSlide: "Previous slide",
                nextSlide: "Next slide",
                download: "Download",
                playVideo: "Play video"
            }
        };
        function initLgPolyfills() {
            (function() {
                if ("function" === typeof window.CustomEvent) return false;
                function CustomEvent(event, params) {
                    params = params || {
                        bubbles: false,
                        cancelable: false,
                        detail: null
                    };
                    var evt = document.createEvent("CustomEvent");
                    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                    return evt;
                }
                window.CustomEvent = CustomEvent;
            })();
            (function() {
                if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
            })();
        }
        var lgQuery = function() {
            function lgQuery(selector) {
                this.cssVenderPrefixes = [ "TransitionDuration", "TransitionTimingFunction", "Transform", "Transition" ];
                this.selector = this._getSelector(selector);
                this.firstElement = this._getFirstEl();
                return this;
            }
            lgQuery.generateUUID = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(c) {
                    var r = 16 * Math.random() | 0, v = "x" == c ? r : 3 & r | 8;
                    return v.toString(16);
                }));
            };
            lgQuery.prototype._getSelector = function(selector, context) {
                if (void 0 === context) context = document;
                if ("string" !== typeof selector) return selector;
                context = context || document;
                var fl = selector.substring(0, 1);
                if ("#" === fl) return context.querySelector(selector); else return context.querySelectorAll(selector);
            };
            lgQuery.prototype._each = function(func) {
                if (!this.selector) return this;
                if (void 0 !== this.selector.length) [].forEach.call(this.selector, func); else func(this.selector, 0);
                return this;
            };
            lgQuery.prototype._setCssVendorPrefix = function(el, cssProperty, value) {
                var property = cssProperty.replace(/-([a-z])/gi, (function(s, group1) {
                    return group1.toUpperCase();
                }));
                if (-1 !== this.cssVenderPrefixes.indexOf(property)) {
                    el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
                    el.style["webkit" + property] = value;
                    el.style["moz" + property] = value;
                    el.style["ms" + property] = value;
                    el.style["o" + property] = value;
                } else el.style[property] = value;
            };
            lgQuery.prototype._getFirstEl = function() {
                if (this.selector && void 0 !== this.selector.length) return this.selector[0]; else return this.selector;
            };
            lgQuery.prototype.isEventMatched = function(event, eventName) {
                var eventNamespace = eventName.split(".");
                return event.split(".").filter((function(e) {
                    return e;
                })).every((function(e) {
                    return -1 !== eventNamespace.indexOf(e);
                }));
            };
            lgQuery.prototype.attr = function(attr, value) {
                if (void 0 === value) {
                    if (!this.firstElement) return "";
                    return this.firstElement.getAttribute(attr);
                }
                this._each((function(el) {
                    el.setAttribute(attr, value);
                }));
                return this;
            };
            lgQuery.prototype.find = function(selector) {
                return $LG(this._getSelector(selector, this.selector));
            };
            lgQuery.prototype.first = function() {
                if (this.selector && void 0 !== this.selector.length) return $LG(this.selector[0]); else return $LG(this.selector);
            };
            lgQuery.prototype.eq = function(index) {
                return $LG(this.selector[index]);
            };
            lgQuery.prototype.parent = function() {
                return $LG(this.selector.parentElement);
            };
            lgQuery.prototype.get = function() {
                return this._getFirstEl();
            };
            lgQuery.prototype.removeAttr = function(attributes) {
                var attrs = attributes.split(" ");
                this._each((function(el) {
                    attrs.forEach((function(attr) {
                        return el.removeAttribute(attr);
                    }));
                }));
                return this;
            };
            lgQuery.prototype.wrap = function(className) {
                if (!this.firstElement) return this;
                var wrapper = document.createElement("div");
                wrapper.className = className;
                this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
                this.firstElement.parentNode.removeChild(this.firstElement);
                wrapper.appendChild(this.firstElement);
                return this;
            };
            lgQuery.prototype.addClass = function(classNames) {
                if (void 0 === classNames) classNames = "";
                this._each((function(el) {
                    classNames.split(" ").forEach((function(className) {
                        if (className) el.classList.add(className);
                    }));
                }));
                return this;
            };
            lgQuery.prototype.removeClass = function(classNames) {
                this._each((function(el) {
                    classNames.split(" ").forEach((function(className) {
                        if (className) el.classList.remove(className);
                    }));
                }));
                return this;
            };
            lgQuery.prototype.hasClass = function(className) {
                if (!this.firstElement) return false;
                return this.firstElement.classList.contains(className);
            };
            lgQuery.prototype.hasAttribute = function(attribute) {
                if (!this.firstElement) return false;
                return this.firstElement.hasAttribute(attribute);
            };
            lgQuery.prototype.toggleClass = function(className) {
                if (!this.firstElement) return this;
                if (this.hasClass(className)) this.removeClass(className); else this.addClass(className);
                return this;
            };
            lgQuery.prototype.css = function(property, value) {
                var _this = this;
                this._each((function(el) {
                    _this._setCssVendorPrefix(el, property, value);
                }));
                return this;
            };
            lgQuery.prototype.on = function(events, listener) {
                var _this = this;
                if (!this.selector) return this;
                events.split(" ").forEach((function(event) {
                    if (!Array.isArray(lgQuery.eventListeners[event])) lgQuery.eventListeners[event] = [];
                    lgQuery.eventListeners[event].push(listener);
                    _this.selector.addEventListener(event.split(".")[0], listener);
                }));
                return this;
            };
            lgQuery.prototype.once = function(event, listener) {
                var _this = this;
                this.on(event, (function() {
                    _this.off(event);
                    listener(event);
                }));
                return this;
            };
            lgQuery.prototype.off = function(event) {
                var _this = this;
                if (!this.selector) return this;
                Object.keys(lgQuery.eventListeners).forEach((function(eventName) {
                    if (_this.isEventMatched(event, eventName)) {
                        lgQuery.eventListeners[eventName].forEach((function(listener) {
                            _this.selector.removeEventListener(eventName.split(".")[0], listener);
                        }));
                        lgQuery.eventListeners[eventName] = [];
                    }
                }));
                return this;
            };
            lgQuery.prototype.trigger = function(event, detail) {
                if (!this.firstElement) return this;
                var customEvent = new CustomEvent(event.split(".")[0], {
                    detail: detail || null
                });
                this.firstElement.dispatchEvent(customEvent);
                return this;
            };
            lgQuery.prototype.load = function(url) {
                var _this = this;
                fetch(url).then((function(res) {
                    return res.text();
                })).then((function(html) {
                    _this.selector.innerHTML = html;
                }));
                return this;
            };
            lgQuery.prototype.html = function(html) {
                if (void 0 === html) {
                    if (!this.firstElement) return "";
                    return this.firstElement.innerHTML;
                }
                this._each((function(el) {
                    el.innerHTML = html;
                }));
                return this;
            };
            lgQuery.prototype.append = function(html) {
                this._each((function(el) {
                    if ("string" === typeof html) el.insertAdjacentHTML("beforeend", html); else el.appendChild(html);
                }));
                return this;
            };
            lgQuery.prototype.prepend = function(html) {
                this._each((function(el) {
                    el.insertAdjacentHTML("afterbegin", html);
                }));
                return this;
            };
            lgQuery.prototype.remove = function() {
                this._each((function(el) {
                    el.parentNode.removeChild(el);
                }));
                return this;
            };
            lgQuery.prototype.empty = function() {
                this._each((function(el) {
                    el.innerHTML = "";
                }));
                return this;
            };
            lgQuery.prototype.scrollTop = function(scrollTop) {
                if (void 0 !== scrollTop) {
                    document.body.scrollTop = scrollTop;
                    document.documentElement.scrollTop = scrollTop;
                    return this;
                } else return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            };
            lgQuery.prototype.scrollLeft = function(scrollLeft) {
                if (void 0 !== scrollLeft) {
                    document.body.scrollLeft = scrollLeft;
                    document.documentElement.scrollLeft = scrollLeft;
                    return this;
                } else return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            };
            lgQuery.prototype.offset = function() {
                if (!this.firstElement) return {
                    left: 0,
                    top: 0
                };
                var rect = this.firstElement.getBoundingClientRect();
                var bodyMarginLeft = $LG("body").style().marginLeft;
                return {
                    left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
                    top: rect.top + this.scrollTop()
                };
            };
            lgQuery.prototype.style = function() {
                if (!this.firstElement) return {};
                return this.firstElement.currentStyle || window.getComputedStyle(this.firstElement);
            };
            lgQuery.prototype.width = function() {
                var style = this.style();
                return this.firstElement.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
            };
            lgQuery.prototype.height = function() {
                var style = this.style();
                return this.firstElement.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
            };
            lgQuery.eventListeners = {};
            return lgQuery;
        }();
        function $LG(selector) {
            initLgPolyfills();
            return new lgQuery(selector);
        }
        var defaultDynamicOptions = [ "src", "sources", "subHtml", "subHtmlUrl", "html", "video", "poster", "slideName", "responsive", "srcset", "sizes", "iframe", "downloadUrl", "download", "width", "facebookShareUrl", "tweetText", "iframeTitle", "twitterShareUrl", "pinterestShareUrl", "pinterestText", "fbHtml", "disqusIdentifier", "disqusUrl" ];
        function convertToData(attr) {
            if ("href" === attr) return "src";
            attr = attr.replace("data-", "");
            attr = attr.charAt(0).toLowerCase() + attr.slice(1);
            attr = attr.replace(/-([a-z])/g, (function(g) {
                return g[1].toUpperCase();
            }));
            return attr;
        }
        var utils = {
            getSize: function(el, container, spacing, defaultLgSize) {
                if (void 0 === spacing) spacing = 0;
                var LGel = $LG(el);
                var lgSize = LGel.attr("data-lg-size") || defaultLgSize;
                if (!lgSize) return;
                var isResponsiveSizes = lgSize.split(",");
                if (isResponsiveSizes[1]) {
                    var wWidth = window.innerWidth;
                    for (var i = 0; i < isResponsiveSizes.length; i++) {
                        var size_1 = isResponsiveSizes[i];
                        var responsiveWidth = parseInt(size_1.split("-")[2], 10);
                        if (responsiveWidth > wWidth) {
                            lgSize = size_1;
                            break;
                        }
                        if (i === isResponsiveSizes.length - 1) lgSize = size_1;
                    }
                }
                var size = lgSize.split("-");
                var width = parseInt(size[0], 10);
                var height = parseInt(size[1], 10);
                var cWidth = container.width();
                var cHeight = container.height() - spacing;
                var maxWidth = Math.min(cWidth, width);
                var maxHeight = Math.min(cHeight, height);
                var ratio = Math.min(maxWidth / width, maxHeight / height);
                return {
                    width: width * ratio,
                    height: height * ratio
                };
            },
            getTransform: function(el, container, top, bottom, imageSize) {
                if (!imageSize) return;
                var LGel = $LG(el).find("img").first();
                if (!LGel.get()) return;
                var containerRect = container.get().getBoundingClientRect();
                var wWidth = containerRect.width;
                var wHeight = container.height() - (top + bottom);
                var elWidth = LGel.width();
                var elHeight = LGel.height();
                var elStyle = LGel.style();
                var x = (wWidth - elWidth) / 2 - LGel.offset().left + (parseFloat(elStyle.paddingLeft) || 0) + (parseFloat(elStyle.borderLeft) || 0) + $LG(window).scrollLeft() + containerRect.left;
                var y = (wHeight - elHeight) / 2 - LGel.offset().top + (parseFloat(elStyle.paddingTop) || 0) + (parseFloat(elStyle.borderTop) || 0) + $LG(window).scrollTop() + top;
                var scX = elWidth / imageSize.width;
                var scY = elHeight / imageSize.height;
                var transform = "translate3d(" + (x *= -1) + "px, " + (y *= -1) + "px, 0) scale3d(" + scX + ", " + scY + ", 1)";
                return transform;
            },
            getIframeMarkup: function(iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
                var title = iframeTitle ? 'title="' + iframeTitle + '"' : "";
                return '<div class="lg-video-cont lg-has-iframe" style="width:' + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + '">\n                    <iframe class="lg-object" frameborder="0" ' + title + ' src="' + src + '"  allowfullscreen="true"></iframe>\n                </div>';
            },
            getImgMarkup: function(index, src, altAttr, srcset, sizes, sources) {
                var srcsetAttr = srcset ? 'srcset="' + srcset + '"' : "";
                var sizesAttr = sizes ? 'sizes="' + sizes + '"' : "";
                var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + ' class="lg-object lg-image" data-index="' + index + '" src="' + src + '" />';
                var sourceTag = "";
                if (sources) {
                    var sourceObj = "string" === typeof sources ? JSON.parse(sources) : sources;
                    sourceTag = sourceObj.map((function(source) {
                        var attrs = "";
                        Object.keys(source).forEach((function(key) {
                            attrs += " " + key + '="' + source[key] + '"';
                        }));
                        return "<source " + attrs + "></source>";
                    }));
                }
                return "" + sourceTag + imgMarkup;
            },
            getResponsiveSrc: function(srcItms) {
                var rsWidth = [];
                var rsSrc = [];
                var src = "";
                for (var i = 0; i < srcItms.length; i++) {
                    var _src = srcItms[i].split(" ");
                    if ("" === _src[0]) _src.splice(0, 1);
                    rsSrc.push(_src[0]);
                    rsWidth.push(_src[1]);
                }
                var wWidth = window.innerWidth;
                for (var j = 0; j < rsWidth.length; j++) if (parseInt(rsWidth[j], 10) > wWidth) {
                    src = rsSrc[j];
                    break;
                }
                return src;
            },
            isImageLoaded: function(img) {
                if (!img) return false;
                if (!img.complete) return false;
                if (0 === img.naturalWidth) return false;
                return true;
            },
            getVideoPosterMarkup: function(_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
                var videoClass = "";
                if (_isVideo && _isVideo.youtube) videoClass = "lg-has-youtube"; else if (_isVideo && _isVideo.vimeo) videoClass = "lg-has-vimeo"; else videoClass = "lg-has-html5";
                return '<div class="lg-video-cont ' + videoClass + '" style="' + videoContStyle + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' + playVideoString + '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' + playVideoString + '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + (dummyImg || "") + '\n            <img class="lg-object lg-video-poster" src="' + _poster + '" />\n        </div>';
            },
            getFocusableElements: function(container) {
                var elements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
                var visibleElements = [].filter.call(elements, (function(element) {
                    var style = window.getComputedStyle(element);
                    return "none" !== style.display && "hidden" !== style.visibility;
                }));
                return visibleElements;
            },
            getDynamicOptions: function(items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
                var dynamicElements = [];
                var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
                [].forEach.call(items, (function(item) {
                    var dynamicEl = {};
                    for (var i = 0; i < item.attributes.length; i++) {
                        var attr = item.attributes[i];
                        if (attr.specified) {
                            var dynamicAttr = convertToData(attr.name);
                            var label = "";
                            if (availableDynamicOptions.indexOf(dynamicAttr) > -1) label = dynamicAttr;
                            if (label) dynamicEl[label] = attr.value;
                        }
                    }
                    var currentItem = $LG(item);
                    var alt = currentItem.find("img").first().attr("alt");
                    var title = currentItem.attr("title");
                    var thumb = exThumbImage ? currentItem.attr(exThumbImage) : currentItem.find("img").first().attr("src");
                    dynamicEl.thumb = thumb;
                    if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) dynamicEl.subHtml = title || alt || "";
                    dynamicEl.alt = alt || title || "";
                    dynamicElements.push(dynamicEl);
                }));
                return dynamicElements;
            },
            isMobile: function() {
                return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            },
            isVideo: function(src, isHTML5VIdeo, index) {
                if (!src) if (isHTML5VIdeo) return {
                    html5: true
                }; else {
                    console.error("lightGallery :- data-src is not provided on slide item " + (index + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
                    return;
                }
                var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
                var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
                var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
                if (youtube) return {
                    youtube
                }; else if (vimeo) return {
                    vimeo
                }; else if (wistia) return {
                    wistia
                };
            }
        };
        var lgId = 0;
        var LightGallery = function() {
            function LightGallery(element, options) {
                this.lgOpened = false;
                this.index = 0;
                this.plugins = [];
                this.lGalleryOn = false;
                this.lgBusy = false;
                this.currentItemsInDom = [];
                this.prevScrollTop = 0;
                this.bodyPaddingRight = 0;
                this.isDummyImageRemoved = false;
                this.dragOrSwipeEnabled = false;
                this.mediaContainerPosition = {
                    top: 0,
                    bottom: 0
                };
                if (!element) return this;
                lgId++;
                this.lgId = lgId;
                this.el = element;
                this.LGel = $LG(element);
                this.generateSettings(options);
                this.buildModules();
                if (this.settings.dynamic && void 0 !== this.settings.dynamicEl && !Array.isArray(this.settings.dynamicEl)) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                this.galleryItems = this.getItems();
                this.normalizeSettings();
                this.init();
                this.validateLicense();
                return this;
            }
            LightGallery.prototype.generateSettings = function(options) {
                this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
                if (this.settings.isMobile && "function" === typeof this.settings.isMobile ? this.settings.isMobile() : utils.isMobile()) {
                    var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
                    this.settings = __assign(__assign({}, this.settings), mobileSettings);
                }
            };
            LightGallery.prototype.normalizeSettings = function() {
                if (this.settings.slideEndAnimation) this.settings.hideControlOnEnd = false;
                if (!this.settings.closable) this.settings.swipeToClose = false;
                this.zoomFromOrigin = this.settings.zoomFromOrigin;
                if (this.settings.dynamic) this.zoomFromOrigin = false;
                if (!this.settings.container) this.settings.container = document.body;
                this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
            };
            LightGallery.prototype.init = function() {
                var _this = this;
                this.addSlideVideoInfo(this.galleryItems);
                this.buildStructure();
                this.LGel.trigger(lGEvents.init, {
                    instance: this
                });
                if (this.settings.keyPress) this.keyPress();
                setTimeout((function() {
                    _this.enableDrag();
                    _this.enableSwipe();
                    _this.triggerPosterClick();
                }), 50);
                this.arrow();
                if (this.settings.mousewheel) this.mousewheel();
                if (!this.settings.dynamic) this.openGalleryOnItemClick();
            };
            LightGallery.prototype.openGalleryOnItemClick = function() {
                var _this = this;
                var _loop_1 = function(index) {
                    var element = this_1.items[index];
                    var $element = $LG(element);
                    var uuid = lgQuery.generateUUID();
                    $element.attr("data-lg-id", uuid).on("click.lgcustom-item-" + uuid, (function(e) {
                        e.preventDefault();
                        var currentItemIndex = _this.settings.index || index;
                        _this.openGallery(currentItemIndex, element);
                    }));
                };
                var this_1 = this;
                for (var index = 0; index < this.items.length; index++) _loop_1(index);
            };
            LightGallery.prototype.buildModules = function() {
                var _this = this;
                this.settings.plugins.forEach((function(plugin) {
                    _this.plugins.push(new plugin(_this, $LG));
                }));
            };
            LightGallery.prototype.validateLicense = function() {
                if (!this.settings.licenseKey) console.error("Please provide a valid license key"); else if ("0000-0000-000-0000" === this.settings.licenseKey) console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
            };
            LightGallery.prototype.getSlideItem = function(index) {
                return $LG(this.getSlideItemId(index));
            };
            LightGallery.prototype.getSlideItemId = function(index) {
                return "#lg-item-" + this.lgId + "-" + index;
            };
            LightGallery.prototype.getIdName = function(id) {
                return id + "-" + this.lgId;
            };
            LightGallery.prototype.getElementById = function(id) {
                return $LG("#" + this.getIdName(id));
            };
            LightGallery.prototype.manageSingleSlideClassName = function() {
                if (this.galleryItems.length < 2) this.outer.addClass("lg-single-item"); else this.outer.removeClass("lg-single-item");
            };
            LightGallery.prototype.buildStructure = function() {
                var _this = this;
                var container = this.$container && this.$container.get();
                if (container) return;
                var controls = "";
                var subHtmlCont = "";
                if (this.settings.controls) controls = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings["previousSlide"] + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings["nextSlide"] + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>";
                if (".lg-item" !== this.settings.appendSubHtmlTo) subHtmlCont = '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
                var addClasses = "";
                if (this.settings.allowMediaOverlap) addClasses += "lg-media-overlap ";
                var ariaLabelledby = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : "";
                var ariaDescribedby = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : "";
                var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : "");
                var closeIcon = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings["closeGallery"] + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : "";
                var maximizeIcon = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings["toggleMaximize"] + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : "";
                var template = '\n        <div class="' + containerClassName + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + ariaLabelledby + " " + ariaDescribedby + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + addClasses + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + controls + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (".lg-outer" === this.settings.appendSubHtmlTo ? subHtmlCont : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (".lg-sub-html" === this.settings.appendSubHtmlTo ? subHtmlCont : "") + "\n                </div>\n            </div>\n        </div>\n        ";
                $LG(this.settings.container).append(template);
                if (document.body !== this.settings.container) $LG(this.settings.container).css("position", "relative");
                this.outer = this.getElementById("lg-outer");
                this.$lgComponents = this.getElementById("lg-components");
                this.$backdrop = this.getElementById("lg-backdrop");
                this.$container = this.getElementById("lg-container");
                this.$inner = this.getElementById("lg-inner");
                this.$content = this.getElementById("lg-content");
                this.$toolbar = this.getElementById("lg-toolbar");
                this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
                var outerClassNames = this.settings.mode + " ";
                this.manageSingleSlideClassName();
                if (this.settings.enableDrag) outerClassNames += "lg-grab ";
                this.outer.addClass(outerClassNames);
                this.$inner.css("transition-timing-function", this.settings.easing);
                this.$inner.css("transition-duration", this.settings.speed + "ms");
                if (this.settings.download) this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings["download"] + '" download class="lg-download lg-icon"></a>');
                this.counter();
                $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, (function() {
                    _this.refreshOnResize();
                }));
                this.hideBars();
                this.manageCloseGallery();
                this.toggleMaximize();
                this.initModules();
            };
            LightGallery.prototype.refreshOnResize = function() {
                if (this.lgOpened) {
                    var currentGalleryItem = this.galleryItems[this.index];
                    var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
                    this.mediaContainerPosition = this.getMediaContainerPosition();
                    var _a = this.mediaContainerPosition, top_1 = _a.top, bottom = _a.bottom;
                    this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
                    if (__slideVideoInfo) this.resizeVideoSlide(this.index, this.currentImageSize);
                    if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
                        var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                        this.outer.find(".lg-current .lg-dummy-img").first().attr("style", imgStyle);
                    }
                    this.LGel.trigger(lGEvents.containerResize);
                }
            };
            LightGallery.prototype.resizeVideoSlide = function(index, imageSize) {
                var lgVideoStyle = this.getVideoContStyle(imageSize);
                var currentSlide = this.getSlideItem(index);
                currentSlide.find(".lg-video-cont").attr("style", lgVideoStyle);
            };
            LightGallery.prototype.updateSlides = function(items, index) {
                if (this.index > items.length - 1) this.index = items.length - 1;
                if (1 === items.length) this.index = 0;
                if (!items.length) {
                    this.closeGallery();
                    return;
                }
                var currentSrc = this.galleryItems[index].src;
                this.galleryItems = items;
                this.updateControls();
                this.$inner.empty();
                this.currentItemsInDom = [];
                var _index = 0;
                this.galleryItems.some((function(galleryItem, itemIndex) {
                    if (galleryItem.src === currentSrc) {
                        _index = itemIndex;
                        return true;
                    }
                    return false;
                }));
                this.currentItemsInDom = this.organizeSlideItems(_index, -1);
                this.loadContent(_index, true);
                this.getSlideItem(_index).addClass("lg-current");
                this.index = _index;
                this.updateCurrentCounter(_index);
                this.LGel.trigger(lGEvents.updateSlides);
            };
            LightGallery.prototype.getItems = function() {
                this.items = [];
                if (!this.settings.dynamic) {
                    if ("this" === this.settings.selector) this.items.push(this.el); else if (this.settings.selector) if ("string" === typeof this.settings.selector) if (this.settings.selectWithin) {
                        var selectWithin = $LG(this.settings.selectWithin);
                        this.items = selectWithin.find(this.settings.selector).get();
                    } else this.items = this.el.querySelectorAll(this.settings.selector); else this.items = this.settings.selector; else this.items = this.el.children;
                    return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
                } else return this.settings.dynamicEl || [];
            };
            LightGallery.prototype.shouldHideScrollbar = function() {
                return this.settings.hideScrollbar && document.body === this.settings.container;
            };
            LightGallery.prototype.hideScrollbar = function() {
                if (!this.shouldHideScrollbar()) return;
                this.bodyPaddingRight = parseFloat($LG("body").style().paddingRight);
                var bodyRect = document.documentElement.getBoundingClientRect();
                var scrollbarWidth = window.innerWidth - bodyRect.width;
                $LG(document.body).css("padding-right", scrollbarWidth + this.bodyPaddingRight + "px");
                $LG(document.body).addClass("lg-overlay-open");
            };
            LightGallery.prototype.resetScrollBar = function() {
                if (!this.shouldHideScrollbar()) return;
                $LG(document.body).css("padding-right", this.bodyPaddingRight + "px");
                $LG(document.body).removeClass("lg-overlay-open");
            };
            LightGallery.prototype.openGallery = function(index, element) {
                var _this = this;
                if (void 0 === index) index = this.settings.index;
                if (this.lgOpened) return;
                this.lgOpened = true;
                this.outer.removeClass("lg-hide-items");
                this.hideScrollbar();
                this.$container.addClass("lg-show");
                var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
                this.currentItemsInDom = itemsToBeInsertedToDom;
                var items = "";
                itemsToBeInsertedToDom.forEach((function(item) {
                    items = items + '<div id="' + item + '" class="lg-item"></div>';
                }));
                this.$inner.append(items);
                this.addHtml(index);
                var transform = "";
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
                if (!this.settings.allowMediaOverlap) this.setMediaContainerPosition(top, bottom);
                var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
                if (this.zoomFromOrigin && element) {
                    this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
                    transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
                }
                if (!this.zoomFromOrigin || !transform) {
                    this.outer.addClass(this.settings.startClass);
                    this.getSlideItem(index).removeClass("lg-complete");
                }
                var timeout = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
                setTimeout((function() {
                    _this.outer.addClass("lg-components-open");
                }), timeout);
                this.index = index;
                this.LGel.trigger(lGEvents.beforeOpen);
                this.getSlideItem(index).addClass("lg-current");
                this.lGalleryOn = false;
                this.prevScrollTop = $LG(window).scrollTop();
                setTimeout((function() {
                    if (_this.zoomFromOrigin && transform) {
                        var currentSlide_1 = _this.getSlideItem(index);
                        currentSlide_1.css("transform", transform);
                        setTimeout((function() {
                            currentSlide_1.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", _this.settings.startAnimationDuration + "ms");
                            _this.outer.addClass("lg-zoom-from-image");
                        }));
                        setTimeout((function() {
                            currentSlide_1.css("transform", "translate3d(0, 0, 0)");
                        }), 100);
                    }
                    setTimeout((function() {
                        _this.$backdrop.addClass("in");
                        _this.$container.addClass("lg-show-in");
                    }), 10);
                    setTimeout((function() {
                        if (_this.settings.trapFocus && document.body === _this.settings.container) _this.trapFocus();
                    }), _this.settings.backdropDuration + 50);
                    if (!_this.zoomFromOrigin || !transform) setTimeout((function() {
                        _this.outer.addClass("lg-visible");
                    }), _this.settings.backdropDuration);
                    _this.slide(index, false, false, false);
                    _this.LGel.trigger(lGEvents.afterOpen);
                }));
                if (document.body === this.settings.container) $LG("html").addClass("lg-on");
            };
            LightGallery.prototype.getMediaContainerPosition = function() {
                if (this.settings.allowMediaOverlap) return {
                    top: 0,
                    bottom: 0
                };
                var top = this.$toolbar.get().clientHeight || 0;
                var subHtml = this.outer.find(".lg-components .lg-sub-html").get();
                var captionHeight = this.settings.defaultCaptionHeight || subHtml && subHtml.clientHeight || 0;
                var thumbContainer = this.outer.find(".lg-thumb-outer").get();
                var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
                var bottom = thumbHeight + captionHeight;
                return {
                    top,
                    bottom
                };
            };
            LightGallery.prototype.setMediaContainerPosition = function(top, bottom) {
                if (void 0 === top) top = 0;
                if (void 0 === bottom) bottom = 0;
                this.$content.css("top", top + "px").css("bottom", bottom + "px");
            };
            LightGallery.prototype.hideBars = function() {
                var _this = this;
                setTimeout((function() {
                    _this.outer.removeClass("lg-hide-items");
                    if (_this.settings.hideBarsDelay > 0) {
                        _this.outer.on("mousemove.lg click.lg touchstart.lg", (function() {
                            _this.outer.removeClass("lg-hide-items");
                            clearTimeout(_this.hideBarTimeout);
                            _this.hideBarTimeout = setTimeout((function() {
                                _this.outer.addClass("lg-hide-items");
                            }), _this.settings.hideBarsDelay);
                        }));
                        _this.outer.trigger("mousemove.lg");
                    }
                }), this.settings.showBarsAfter);
            };
            LightGallery.prototype.initPictureFill = function($img) {
                if (this.settings.supportLegacyBrowser) try {
                    picturefill({
                        elements: [ $img.get() ]
                    });
                } catch (e) {
                    console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.");
                }
            };
            LightGallery.prototype.counter = function() {
                if (this.settings.counter) {
                    var counterHtml = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
                    this.outer.find(this.settings.appendCounterTo).append(counterHtml);
                }
            };
            LightGallery.prototype.addHtml = function(index) {
                var subHtml;
                var subHtmlUrl;
                if (this.galleryItems[index].subHtmlUrl) subHtmlUrl = this.galleryItems[index].subHtmlUrl; else subHtml = this.galleryItems[index].subHtml;
                if (!subHtmlUrl) if (subHtml) {
                    var fL = subHtml.substring(0, 1);
                    if ("." === fL || "#" === fL) if (this.settings.subHtmlSelectorRelative && !this.settings.dynamic) subHtml = $LG(this.items).eq(index).find(subHtml).first().html(); else subHtml = $LG(subHtml).first().html();
                } else subHtml = "";
                if (".lg-item" !== this.settings.appendSubHtmlTo) if (subHtmlUrl) this.outer.find(".lg-sub-html").load(subHtmlUrl); else this.outer.find(".lg-sub-html").html(subHtml); else {
                    var currentSlide = $LG(this.getSlideItemId(index));
                    if (subHtmlUrl) currentSlide.load(subHtmlUrl); else currentSlide.append('<div class="lg-sub-html">' + subHtml + "</div>");
                }
                if ("undefined" !== typeof subHtml && null !== subHtml) if ("" === subHtml) this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html"); else this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html");
                this.LGel.trigger(lGEvents.afterAppendSubHtml, {
                    index
                });
            };
            LightGallery.prototype.preload = function(index) {
                for (var i = 1; i <= this.settings.preload; i++) {
                    if (i >= this.galleryItems.length - index) break;
                    this.loadContent(index + i, false);
                }
                for (var j = 1; j <= this.settings.preload; j++) {
                    if (index - j < 0) break;
                    this.loadContent(index - j, false);
                }
            };
            LightGallery.prototype.getDummyImgStyles = function(imageSize) {
                if (!imageSize) return "";
                return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
            };
            LightGallery.prototype.getVideoContStyle = function(imageSize) {
                if (!imageSize) return "";
                return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
            };
            LightGallery.prototype.getDummyImageContent = function($currentSlide, index, alt) {
                var $currentItem;
                if (!this.settings.dynamic) $currentItem = $LG(this.items).eq(index);
                if ($currentItem) {
                    var _dummyImgSrc = void 0;
                    if (!this.settings.exThumbImage) _dummyImgSrc = $currentItem.find("img").first().attr("src"); else _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
                    if (!_dummyImgSrc) return "";
                    var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                    var dummyImgContent = "<img " + alt + ' style="' + imgStyle + '" class="lg-dummy-img" src="' + _dummyImgSrc + '" />';
                    $currentSlide.addClass("lg-first-slide");
                    this.outer.addClass("lg-first-slide-loading");
                    return dummyImgContent;
                }
                return "";
            };
            LightGallery.prototype.setImgMarkup = function(src, $currentSlide, index) {
                var currentGalleryItem = this.galleryItems[index];
                var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
                var imgContent = "";
                var altAttr = alt ? 'alt="' + alt + '"' : "";
                if (this.isFirstSlideWithZoomAnimation()) imgContent = this.getDummyImageContent($currentSlide, index, altAttr); else imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
                var imgMarkup = '<picture class="lg-img-wrap"> ' + imgContent + "</picture>";
                $currentSlide.prepend(imgMarkup);
            };
            LightGallery.prototype.onSlideObjectLoad = function($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
                var mediaObject = $slide.find(".lg-object").first();
                if (utils.isImageLoaded(mediaObject.get()) || isHTML5VideoWithoutPoster) onLoad(); else {
                    mediaObject.on("load.lg error.lg", (function() {
                        onLoad && onLoad();
                    }));
                    mediaObject.on("error.lg", (function() {
                        onError && onError();
                    }));
                }
            };
            LightGallery.prototype.onLgObjectLoad = function(currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
                var _this = this;
                this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, (function() {
                    _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
                }), (function() {
                    currentSlide.addClass("lg-complete lg-complete_");
                    currentSlide.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
                }));
            };
            LightGallery.prototype.triggerSlideItemLoad = function($currentSlide, index, delay, speed, isFirstSlide) {
                var _this = this;
                var currentGalleryItem = this.galleryItems[index];
                var _speed = isFirstSlide && "video" === this.getSlideType(currentGalleryItem) && !currentGalleryItem.poster ? speed : 0;
                setTimeout((function() {
                    $currentSlide.addClass("lg-complete lg-complete_");
                    _this.LGel.trigger(lGEvents.slideItemLoad, {
                        index,
                        delay: delay || 0,
                        isFirstSlide
                    });
                }), _speed);
            };
            LightGallery.prototype.isFirstSlideWithZoomAnimation = function() {
                return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize);
            };
            LightGallery.prototype.addSlideVideoInfo = function(items) {
                var _this = this;
                items.forEach((function(element, index) {
                    element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
                    if (element.__slideVideoInfo && _this.settings.loadYouTubePoster && !element.poster && element.__slideVideoInfo.youtube) element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
                }));
            };
            LightGallery.prototype.loadContent = function(index, rec) {
                var _this = this;
                var currentGalleryItem = this.galleryItems[index];
                var $currentSlide = $LG(this.getSlideItemId(index));
                var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
                var src = currentGalleryItem.src;
                var video = currentGalleryItem.video;
                var _html5Video = video && "string" === typeof video ? JSON.parse(video) : video;
                if (currentGalleryItem.responsive) {
                    var srcDyItms = currentGalleryItem.responsive.split(",");
                    src = utils.getResponsiveSrc(srcDyItms) || src;
                }
                var videoInfo = currentGalleryItem.__slideVideoInfo;
                var lgVideoStyle = "";
                var iframe = !!currentGalleryItem.iframe;
                var isFirstSlide = !this.lGalleryOn;
                var delay = 0;
                if (isFirstSlide) if (this.zoomFromOrigin && this.currentImageSize) delay = this.settings.startAnimationDuration + 10; else delay = this.settings.backdropDuration + 10;
                if (!$currentSlide.hasClass("lg-loaded")) {
                    if (videoInfo) {
                        var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
                        var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
                        lgVideoStyle = this.getVideoContStyle(videoSize);
                    }
                    if (iframe) {
                        var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
                        $currentSlide.prepend(markup);
                    } else if (poster) {
                        var dummyImg = "";
                        var hasStartAnimation = isFirstSlide && this.zoomFromOrigin && this.currentImageSize;
                        if (hasStartAnimation) dummyImg = this.getDummyImageContent($currentSlide, index, "");
                        markup = utils.getVideoPosterMarkup(poster, dummyImg || "", lgVideoStyle, this.settings.strings["playVideo"], videoInfo);
                        $currentSlide.prepend(markup);
                    } else if (videoInfo) {
                        markup = '<div class="lg-video-cont " style="' + lgVideoStyle + '"></div>';
                        $currentSlide.prepend(markup);
                    } else {
                        this.setImgMarkup(src, $currentSlide, index);
                        if (srcset || sources) {
                            var $img = $currentSlide.find(".lg-object");
                            this.initPictureFill($img);
                        }
                    }
                    if (poster || videoInfo) this.LGel.trigger(lGEvents.hasVideo, {
                        index,
                        src,
                        html5Video: _html5Video,
                        hasPoster: !!poster
                    });
                    this.LGel.trigger(lGEvents.afterAppendSlide, {
                        index
                    });
                    if (this.lGalleryOn && ".lg-item" === this.settings.appendSubHtmlTo) this.addHtml(index);
                }
                var _speed = 0;
                if (delay && !$LG(document.body).hasClass("lg-from-hash")) _speed = delay;
                if (this.isFirstSlideWithZoomAnimation()) {
                    setTimeout((function() {
                        $currentSlide.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style");
                    }), this.settings.startAnimationDuration + 100);
                    if (!$currentSlide.hasClass("lg-loaded")) setTimeout((function() {
                        if ("image" === _this.getSlideType(currentGalleryItem)) {
                            var alt = currentGalleryItem.alt;
                            var altAttr = alt ? 'alt="' + alt + '"' : "";
                            $currentSlide.find(".lg-img-wrap").append(utils.getImgMarkup(index, src, altAttr, srcset, sizes, currentGalleryItem.sources));
                            if (srcset || sources) {
                                var $img = $currentSlide.find(".lg-object");
                                _this.initPictureFill($img);
                            }
                        }
                        if ("image" === _this.getSlideType(currentGalleryItem) || "video" === _this.getSlideType(currentGalleryItem) && poster) {
                            _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
                            _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), (function() {
                                _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                            }), (function() {
                                _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                            }));
                        }
                    }), this.settings.startAnimationDuration + 100);
                }
                $currentSlide.addClass("lg-loaded");
                if (!this.isFirstSlideWithZoomAnimation() || "video" === this.getSlideType(currentGalleryItem) && !poster) this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
                if ((!this.zoomFromOrigin || !this.currentImageSize) && $currentSlide.hasClass("lg-complete_") && !this.lGalleryOn) setTimeout((function() {
                    $currentSlide.addClass("lg-complete");
                }), this.settings.backdropDuration);
                this.lGalleryOn = true;
                if (true === rec) if (!$currentSlide.hasClass("lg-complete_")) $currentSlide.find(".lg-object").first().on("load.lg error.lg", (function() {
                    _this.preload(index);
                })); else this.preload(index);
            };
            LightGallery.prototype.loadContentOnFirstSlideLoad = function(index, $currentSlide, speed) {
                var _this = this;
                setTimeout((function() {
                    $currentSlide.find(".lg-dummy-img").remove();
                    $currentSlide.removeClass("lg-first-slide");
                    _this.outer.removeClass("lg-first-slide-loading");
                    _this.isDummyImageRemoved = true;
                    _this.preload(index);
                }), speed + 300);
            };
            LightGallery.prototype.getItemsToBeInsertedToDom = function(index, prevIndex, numberOfItems) {
                var _this = this;
                if (void 0 === numberOfItems) numberOfItems = 0;
                var itemsToBeInsertedToDom = [];
                var possibleNumberOfItems = Math.max(numberOfItems, 3);
                possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
                var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
                if (this.galleryItems.length <= 3) {
                    this.galleryItems.forEach((function(_element, index) {
                        itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
                    }));
                    return itemsToBeInsertedToDom;
                }
                if (index < (this.galleryItems.length - 1) / 2) {
                    for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
                    var numberOfExistingItems = itemsToBeInsertedToDom.length;
                    for (idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
                } else {
                    for (idx = index; idx <= this.galleryItems.length - 1 && idx < index + possibleNumberOfItems / 2; idx++) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
                    numberOfExistingItems = itemsToBeInsertedToDom.length;
                    for (idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
                }
                if (this.settings.loop) if (index === this.galleryItems.length - 1) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0); else if (0 === index) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
                if (-1 === itemsToBeInsertedToDom.indexOf(prevIndexItem)) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
                return itemsToBeInsertedToDom;
            };
            LightGallery.prototype.organizeSlideItems = function(index, prevIndex) {
                var _this = this;
                var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
                itemsToBeInsertedToDom.forEach((function(item) {
                    if (-1 === _this.currentItemsInDom.indexOf(item)) _this.$inner.append('<div id="' + item + '" class="lg-item"></div>');
                }));
                this.currentItemsInDom.forEach((function(item) {
                    if (-1 === itemsToBeInsertedToDom.indexOf(item)) $LG("#" + item).remove();
                }));
                return itemsToBeInsertedToDom;
            };
            LightGallery.prototype.getPreviousSlideIndex = function() {
                var prevIndex = 0;
                try {
                    var currentItemId = this.outer.find(".lg-current").first().attr("id");
                    prevIndex = parseInt(currentItemId.split("-")[3]) || 0;
                } catch (error) {
                    prevIndex = 0;
                }
                return prevIndex;
            };
            LightGallery.prototype.setDownloadValue = function(index) {
                if (this.settings.download) {
                    var currentGalleryItem = this.galleryItems[index];
                    var hideDownloadBtn = false === currentGalleryItem.downloadUrl || "false" === currentGalleryItem.downloadUrl;
                    if (hideDownloadBtn) this.outer.addClass("lg-hide-download"); else {
                        var $download = this.getElementById("lg-download");
                        this.outer.removeClass("lg-hide-download");
                        $download.attr("href", currentGalleryItem.downloadUrl || currentGalleryItem.src);
                        if (currentGalleryItem.download) $download.attr("download", currentGalleryItem.download);
                    }
                }
            };
            LightGallery.prototype.makeSlideAnimation = function(direction, currentSlideItem, previousSlideItem) {
                var _this = this;
                if (this.lGalleryOn) previousSlideItem.addClass("lg-slide-progress");
                setTimeout((function() {
                    _this.outer.addClass("lg-no-trans");
                    _this.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide");
                    if ("prev" === direction) {
                        currentSlideItem.addClass("lg-prev-slide");
                        previousSlideItem.addClass("lg-next-slide");
                    } else {
                        currentSlideItem.addClass("lg-next-slide");
                        previousSlideItem.addClass("lg-prev-slide");
                    }
                    setTimeout((function() {
                        _this.outer.find(".lg-item").removeClass("lg-current");
                        currentSlideItem.addClass("lg-current");
                        _this.outer.removeClass("lg-no-trans");
                    }), 50);
                }), this.lGalleryOn ? this.settings.slideDelay : 0);
            };
            LightGallery.prototype.slide = function(index, fromTouch, fromThumb, direction) {
                var _this = this;
                var prevIndex = this.getPreviousSlideIndex();
                this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
                if (this.lGalleryOn && prevIndex === index) return;
                var numberOfGalleryItems = this.galleryItems.length;
                if (!this.lgBusy) {
                    if (this.settings.counter) this.updateCurrentCounter(index);
                    var currentSlideItem = this.getSlideItem(index);
                    var previousSlideItem_1 = this.getSlideItem(prevIndex);
                    var currentGalleryItem = this.galleryItems[index];
                    var videoInfo = currentGalleryItem.__slideVideoInfo;
                    this.outer.attr("data-lg-slide-type", this.getSlideType(currentGalleryItem));
                    this.setDownloadValue(index);
                    if (videoInfo) {
                        var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
                        var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
                        this.resizeVideoSlide(index, videoSize);
                    }
                    this.LGel.trigger(lGEvents.beforeSlide, {
                        prevIndex,
                        index,
                        fromTouch: !!fromTouch,
                        fromThumb: !!fromThumb
                    });
                    this.lgBusy = true;
                    clearTimeout(this.hideBarTimeout);
                    this.arrowDisable(index);
                    if (!direction) if (index < prevIndex) direction = "prev"; else if (index > prevIndex) direction = "next";
                    if (!fromTouch) this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1); else {
                        this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                        var touchPrev = void 0;
                        var touchNext = void 0;
                        if (numberOfGalleryItems > 2) {
                            touchPrev = index - 1;
                            touchNext = index + 1;
                            if (0 === index && prevIndex === numberOfGalleryItems - 1) {
                                touchNext = 0;
                                touchPrev = numberOfGalleryItems - 1;
                            } else if (index === numberOfGalleryItems - 1 && 0 === prevIndex) {
                                touchNext = 0;
                                touchPrev = numberOfGalleryItems - 1;
                            }
                        } else {
                            touchPrev = 0;
                            touchNext = 1;
                        }
                        if ("prev" === direction) this.getSlideItem(touchNext).addClass("lg-next-slide"); else this.getSlideItem(touchPrev).addClass("lg-prev-slide");
                        currentSlideItem.addClass("lg-current");
                    }
                    if (!this.lGalleryOn) this.loadContent(index, true); else setTimeout((function() {
                        _this.loadContent(index, true);
                        if (".lg-item" !== _this.settings.appendSubHtmlTo) _this.addHtml(index);
                    }), this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
                    setTimeout((function() {
                        _this.lgBusy = false;
                        previousSlideItem_1.removeClass("lg-slide-progress");
                        _this.LGel.trigger(lGEvents.afterSlide, {
                            prevIndex,
                            index,
                            fromTouch,
                            fromThumb
                        });
                    }), (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
                }
                this.index = index;
            };
            LightGallery.prototype.updateCurrentCounter = function(index) {
                this.getElementById("lg-counter-current").html(index + 1 + "");
            };
            LightGallery.prototype.updateCounterTotal = function() {
                this.getElementById("lg-counter-all").html(this.galleryItems.length + "");
            };
            LightGallery.prototype.getSlideType = function(item) {
                if (item.__slideVideoInfo) return "video"; else if (item.iframe) return "iframe"; else return "image";
            };
            LightGallery.prototype.touchMove = function(startCoords, endCoords, e) {
                var distanceX = endCoords.pageX - startCoords.pageX;
                var distanceY = endCoords.pageY - startCoords.pageY;
                var allowSwipe = false;
                if (this.swipeDirection) allowSwipe = true; else if (Math.abs(distanceX) > 15) {
                    this.swipeDirection = "horizontal";
                    allowSwipe = true;
                } else if (Math.abs(distanceY) > 15) {
                    this.swipeDirection = "vertical";
                    allowSwipe = true;
                }
                if (!allowSwipe) return;
                var $currentSlide = this.getSlideItem(this.index);
                if ("horizontal" === this.swipeDirection) {
                    null === e || void 0 === e ? void 0 : e.preventDefault();
                    this.outer.addClass("lg-dragging");
                    this.setTranslate($currentSlide, distanceX, 0);
                    var width = $currentSlide.get().offsetWidth;
                    var slideWidthAmount = 15 * width / 100;
                    var gutter = slideWidthAmount - Math.abs(10 * distanceX / 100);
                    this.setTranslate(this.outer.find(".lg-prev-slide").first(), -width + distanceX - gutter, 0);
                    this.setTranslate(this.outer.find(".lg-next-slide").first(), width + distanceX + gutter, 0);
                } else if ("vertical" === this.swipeDirection) if (this.settings.swipeToClose) {
                    null === e || void 0 === e ? void 0 : e.preventDefault();
                    this.$container.addClass("lg-dragging-vertical");
                    var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
                    this.$backdrop.css("opacity", opacity);
                    var scale = 1 - Math.abs(distanceY) / (2 * window.innerWidth);
                    this.setTranslate($currentSlide, 0, distanceY, scale, scale);
                    if (Math.abs(distanceY) > 100) this.outer.addClass("lg-hide-items").removeClass("lg-components-open");
                }
            };
            LightGallery.prototype.touchEnd = function(endCoords, startCoords, event) {
                var _this = this;
                var distance;
                if ("lg-slide" !== this.settings.mode) this.outer.addClass("lg-slide");
                setTimeout((function() {
                    _this.$container.removeClass("lg-dragging-vertical");
                    _this.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
                    var triggerClick = true;
                    if ("horizontal" === _this.swipeDirection) {
                        distance = endCoords.pageX - startCoords.pageX;
                        var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
                        if (distance < 0 && distanceAbs > _this.settings.swipeThreshold) {
                            _this.goToNextSlide(true);
                            triggerClick = false;
                        } else if (distance > 0 && distanceAbs > _this.settings.swipeThreshold) {
                            _this.goToPrevSlide(true);
                            triggerClick = false;
                        }
                    } else if ("vertical" === _this.swipeDirection) {
                        distance = Math.abs(endCoords.pageY - startCoords.pageY);
                        if (_this.settings.closable && _this.settings.swipeToClose && distance > 100) {
                            _this.closeGallery();
                            return;
                        } else _this.$backdrop.css("opacity", 1);
                    }
                    _this.outer.find(".lg-item").removeAttr("style");
                    if (triggerClick && Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
                        var target = $LG(event.target);
                        if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                    }
                    _this.swipeDirection = void 0;
                }));
                setTimeout((function() {
                    if (!_this.outer.hasClass("lg-dragging") && "lg-slide" !== _this.settings.mode) _this.outer.removeClass("lg-slide");
                }), this.settings.speed + 100);
            };
            LightGallery.prototype.enableSwipe = function() {
                var _this = this;
                var startCoords = {};
                var endCoords = {};
                var isMoved = false;
                var isSwiping = false;
                if (this.settings.enableSwipe) {
                    this.$inner.on("touchstart.lg", (function(e) {
                        _this.dragOrSwipeEnabled = true;
                        var $item = _this.getSlideItem(_this.index);
                        if (($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) && !_this.outer.hasClass("lg-zoomed") && !_this.lgBusy && 1 === e.touches.length) {
                            isSwiping = true;
                            _this.touchAction = "swipe";
                            _this.manageSwipeClass();
                            startCoords = {
                                pageX: e.touches[0].pageX,
                                pageY: e.touches[0].pageY
                            };
                        }
                    }));
                    this.$inner.on("touchmove.lg", (function(e) {
                        if (isSwiping && "swipe" === _this.touchAction && 1 === e.touches.length) {
                            endCoords = {
                                pageX: e.touches[0].pageX,
                                pageY: e.touches[0].pageY
                            };
                            _this.touchMove(startCoords, endCoords, e);
                            isMoved = true;
                        }
                    }));
                    this.$inner.on("touchend.lg", (function(event) {
                        if ("swipe" === _this.touchAction) {
                            if (isMoved) {
                                isMoved = false;
                                _this.touchEnd(endCoords, startCoords, event);
                            } else if (isSwiping) {
                                var target = $LG(event.target);
                                if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                            }
                            _this.touchAction = void 0;
                            isSwiping = false;
                        }
                    }));
                }
            };
            LightGallery.prototype.enableDrag = function() {
                var _this = this;
                var startCoords = {};
                var endCoords = {};
                var isDraging = false;
                var isMoved = false;
                if (this.settings.enableDrag) {
                    this.outer.on("mousedown.lg", (function(e) {
                        _this.dragOrSwipeEnabled = true;
                        var $item = _this.getSlideItem(_this.index);
                        if ($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) if (!_this.outer.hasClass("lg-zoomed") && !_this.lgBusy) {
                            e.preventDefault();
                            if (!_this.lgBusy) {
                                _this.manageSwipeClass();
                                startCoords = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                };
                                isDraging = true;
                                _this.outer.get().scrollLeft += 1;
                                _this.outer.get().scrollLeft -= 1;
                                _this.outer.removeClass("lg-grab").addClass("lg-grabbing");
                                _this.LGel.trigger(lGEvents.dragStart);
                            }
                        }
                    }));
                    $LG(window).on("mousemove.lg.global" + this.lgId, (function(e) {
                        if (isDraging && _this.lgOpened) {
                            isMoved = true;
                            endCoords = {
                                pageX: e.pageX,
                                pageY: e.pageY
                            };
                            _this.touchMove(startCoords, endCoords);
                            _this.LGel.trigger(lGEvents.dragMove);
                        }
                    }));
                    $LG(window).on("mouseup.lg.global" + this.lgId, (function(event) {
                        if (!_this.lgOpened) return;
                        var target = $LG(event.target);
                        if (isMoved) {
                            isMoved = false;
                            _this.touchEnd(endCoords, startCoords, event);
                            _this.LGel.trigger(lGEvents.dragEnd);
                        } else if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                        if (isDraging) {
                            isDraging = false;
                            _this.outer.removeClass("lg-grabbing").addClass("lg-grab");
                        }
                    }));
                }
            };
            LightGallery.prototype.triggerPosterClick = function() {
                var _this = this;
                this.$inner.on("click.lg", (function(event) {
                    if (!_this.dragOrSwipeEnabled && _this.isPosterElement($LG(event.target))) _this.LGel.trigger(lGEvents.posterClick);
                }));
            };
            LightGallery.prototype.manageSwipeClass = function() {
                var _touchNext = this.index + 1;
                var _touchPrev = this.index - 1;
                if (this.settings.loop && this.galleryItems.length > 2) if (0 === this.index) _touchPrev = this.galleryItems.length - 1; else if (this.index === this.galleryItems.length - 1) _touchNext = 0;
                this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide");
                if (_touchPrev > -1) this.getSlideItem(_touchPrev).addClass("lg-prev-slide");
                this.getSlideItem(_touchNext).addClass("lg-next-slide");
            };
            LightGallery.prototype.goToNextSlide = function(fromTouch) {
                var _this = this;
                var _loop = this.settings.loop;
                if (fromTouch && this.galleryItems.length < 3) _loop = false;
                if (!this.lgBusy) if (this.index + 1 < this.galleryItems.length) {
                    this.index++;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index
                    });
                    this.slide(this.index, !!fromTouch, false, "next");
                } else if (_loop) {
                    this.index = 0;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index
                    });
                    this.slide(this.index, !!fromTouch, false, "next");
                } else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass("lg-right-end");
                    setTimeout((function() {
                        _this.outer.removeClass("lg-right-end");
                    }), 400);
                }
            };
            LightGallery.prototype.goToPrevSlide = function(fromTouch) {
                var _this = this;
                var _loop = this.settings.loop;
                if (fromTouch && this.galleryItems.length < 3) _loop = false;
                if (!this.lgBusy) if (this.index > 0) {
                    this.index--;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch
                    });
                    this.slide(this.index, !!fromTouch, false, "prev");
                } else if (_loop) {
                    this.index = this.galleryItems.length - 1;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch
                    });
                    this.slide(this.index, !!fromTouch, false, "prev");
                } else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass("lg-left-end");
                    setTimeout((function() {
                        _this.outer.removeClass("lg-left-end");
                    }), 400);
                }
            };
            LightGallery.prototype.keyPress = function() {
                var _this = this;
                $LG(window).on("keydown.lg.global" + this.lgId, (function(e) {
                    if (_this.lgOpened && true === _this.settings.escKey && 27 === e.keyCode) {
                        e.preventDefault();
                        if (_this.settings.allowMediaOverlap && _this.outer.hasClass("lg-can-toggle") && _this.outer.hasClass("lg-components-open")) _this.outer.removeClass("lg-components-open"); else _this.closeGallery();
                    }
                    if (_this.lgOpened && _this.galleryItems.length > 1) {
                        if (37 === e.keyCode) {
                            e.preventDefault();
                            _this.goToPrevSlide();
                        }
                        if (39 === e.keyCode) {
                            e.preventDefault();
                            _this.goToNextSlide();
                        }
                    }
                }));
            };
            LightGallery.prototype.arrow = function() {
                var _this = this;
                this.getElementById("lg-prev").on("click.lg", (function() {
                    _this.goToPrevSlide();
                }));
                this.getElementById("lg-next").on("click.lg", (function() {
                    _this.goToNextSlide();
                }));
            };
            LightGallery.prototype.arrowDisable = function(index) {
                if (!this.settings.loop && this.settings.hideControlOnEnd) {
                    var $prev = this.getElementById("lg-prev");
                    var $next = this.getElementById("lg-next");
                    if (index + 1 === this.galleryItems.length) $next.attr("disabled", "disabled").addClass("disabled"); else $next.removeAttr("disabled").removeClass("disabled");
                    if (0 === index) $prev.attr("disabled", "disabled").addClass("disabled"); else $prev.removeAttr("disabled").removeClass("disabled");
                }
            };
            LightGallery.prototype.setTranslate = function($el, xValue, yValue, scaleX, scaleY) {
                if (void 0 === scaleX) scaleX = 1;
                if (void 0 === scaleY) scaleY = 1;
                $el.css("transform", "translate3d(" + xValue + "px, " + yValue + "px, 0px) scale3d(" + scaleX + ", " + scaleY + ", 1)");
            };
            LightGallery.prototype.mousewheel = function() {
                var _this = this;
                var lastCall = 0;
                this.outer.on("wheel.lg", (function(e) {
                    if (!e.deltaY || _this.galleryItems.length < 2) return;
                    e.preventDefault();
                    var now = (new Date).getTime();
                    if (now - lastCall < 1e3) return;
                    lastCall = now;
                    if (e.deltaY > 0) _this.goToNextSlide(); else if (e.deltaY < 0) _this.goToPrevSlide();
                }));
            };
            LightGallery.prototype.isSlideElement = function(target) {
                return target.hasClass("lg-outer") || target.hasClass("lg-item") || target.hasClass("lg-img-wrap");
            };
            LightGallery.prototype.isPosterElement = function(target) {
                var playButton = this.getSlideItem(this.index).find(".lg-video-play-button").get();
                return target.hasClass("lg-video-poster") || target.hasClass("lg-video-play-button") || playButton && playButton.contains(target.get());
            };
            LightGallery.prototype.toggleMaximize = function() {
                var _this = this;
                this.getElementById("lg-maximize").on("click.lg", (function() {
                    _this.$container.toggleClass("lg-inline");
                    _this.refreshOnResize();
                }));
            };
            LightGallery.prototype.invalidateItems = function() {
                for (var index = 0; index < this.items.length; index++) {
                    var element = this.items[index];
                    var $element = $LG(element);
                    $element.off("click.lgcustom-item-" + $element.attr("data-lg-id"));
                }
            };
            LightGallery.prototype.trapFocus = function() {
                var _this = this;
                this.$container.get().focus({
                    preventScroll: true
                });
                $LG(window).on("keydown.lg.global" + this.lgId, (function(e) {
                    if (!_this.lgOpened) return;
                    var isTabPressed = "Tab" === e.key || 9 === e.keyCode;
                    if (!isTabPressed) return;
                    var focusableEls = utils.getFocusableElements(_this.$container.get());
                    var firstFocusableEl = focusableEls[0];
                    var lastFocusableEl = focusableEls[focusableEls.length - 1];
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusableEl) {
                            lastFocusableEl.focus();
                            e.preventDefault();
                        }
                    } else if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus();
                        e.preventDefault();
                    }
                }));
            };
            LightGallery.prototype.manageCloseGallery = function() {
                var _this = this;
                if (!this.settings.closable) return;
                var mousedown = false;
                this.getElementById("lg-close").on("click.lg", (function() {
                    _this.closeGallery();
                }));
                if (this.settings.closeOnTap) {
                    this.outer.on("mousedown.lg", (function(e) {
                        var target = $LG(e.target);
                        if (_this.isSlideElement(target)) mousedown = true; else mousedown = false;
                    }));
                    this.outer.on("mousemove.lg", (function() {
                        mousedown = false;
                    }));
                    this.outer.on("mouseup.lg", (function(e) {
                        var target = $LG(e.target);
                        if (_this.isSlideElement(target) && mousedown) if (!_this.outer.hasClass("lg-dragging")) _this.closeGallery();
                    }));
                }
            };
            LightGallery.prototype.closeGallery = function(force) {
                var _this = this;
                if (!this.lgOpened || !this.settings.closable && !force) return 0;
                this.LGel.trigger(lGEvents.beforeClose);
                if (this.settings.resetScrollPosition && !this.settings.hideScrollbar) $LG(window).scrollTop(this.prevScrollTop);
                var currentItem = this.items[this.index];
                var transform;
                if (this.zoomFromOrigin && currentItem) {
                    var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
                    var _b = this.galleryItems[this.index], __slideVideoInfo = _b.__slideVideoInfo, poster = _b.poster;
                    var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
                    transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
                }
                if (this.zoomFromOrigin && transform) {
                    this.outer.addClass("lg-closing lg-zoom-from-image");
                    this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", transform);
                } else {
                    this.outer.addClass("lg-hide-items");
                    this.outer.removeClass("lg-zoom-from-image");
                }
                this.destroyModules();
                this.lGalleryOn = false;
                this.isDummyImageRemoved = false;
                this.zoomFromOrigin = this.settings.zoomFromOrigin;
                clearTimeout(this.hideBarTimeout);
                this.hideBarTimeout = false;
                $LG("html").removeClass("lg-on");
                this.outer.removeClass("lg-visible lg-components-open");
                this.$backdrop.removeClass("in").css("opacity", 0);
                var removeTimeout = this.zoomFromOrigin && transform ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
                this.$container.removeClass("lg-show-in");
                setTimeout((function() {
                    if (_this.zoomFromOrigin && transform) _this.outer.removeClass("lg-zoom-from-image");
                    _this.$container.removeClass("lg-show");
                    _this.resetScrollBar();
                    _this.$backdrop.removeAttr("style").css("transition-duration", _this.settings.backdropDuration + "ms");
                    _this.outer.removeClass("lg-closing " + _this.settings.startClass);
                    _this.getSlideItem(_this.index).removeClass("lg-start-end-progress");
                    _this.$inner.empty();
                    if (_this.lgOpened) _this.LGel.trigger(lGEvents.afterClose, {
                        instance: _this
                    });
                    if (_this.$container.get()) _this.$container.get().blur();
                    _this.lgOpened = false;
                }), removeTimeout + 100);
                return removeTimeout + 100;
            };
            LightGallery.prototype.initModules = function() {
                this.plugins.forEach((function(module) {
                    try {
                        module.init();
                    } catch (err) {
                        console.warn("lightGallery:- make sure lightGallery module is properly initiated");
                    }
                }));
            };
            LightGallery.prototype.destroyModules = function(destroy) {
                this.plugins.forEach((function(module) {
                    try {
                        if (destroy) module.destroy(); else module.closeGallery && module.closeGallery();
                    } catch (err) {
                        console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
                    }
                }));
            };
            LightGallery.prototype.refresh = function(galleryItems) {
                if (!this.settings.dynamic) this.invalidateItems();
                if (galleryItems) this.galleryItems = galleryItems; else this.galleryItems = this.getItems();
                this.updateControls();
                this.openGalleryOnItemClick();
                this.LGel.trigger(lGEvents.updateSlides);
            };
            LightGallery.prototype.updateControls = function() {
                this.addSlideVideoInfo(this.galleryItems);
                this.updateCounterTotal();
                this.manageSingleSlideClassName();
            };
            LightGallery.prototype.destroyGallery = function() {
                this.destroyModules(true);
                if (!this.settings.dynamic) this.invalidateItems();
                $LG(window).off(".lg.global" + this.lgId);
                this.LGel.off(".lg");
                this.$container.remove();
            };
            LightGallery.prototype.destroy = function() {
                var closeTimeout = this.closeGallery(true);
                if (closeTimeout) setTimeout(this.destroyGallery.bind(this), closeTimeout); else this.destroyGallery();
                return closeTimeout;
            };
            return LightGallery;
        }();
        function lightGallery(el, options) {
            return new LightGallery(el, options);
        }
        const lightgallery_es5 = lightGallery;
        const galleries = document.querySelectorAll("[data-gallery]");
        if (galleries.length) {
            let galleyItems = [];
            galleries.forEach((gallery => {
                galleyItems.push({
                    gallery,
                    galleryClass: lightgallery_es5(gallery, {
                        licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
                        speed: 500
                    })
                });
            }));
            modules_flsModules.gallery = galleyItems;
        }
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if ("last" === place || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if ("first" === place) {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (void 0 !== parent.children[index]) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if ("min" === this.type) Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if ("first" === a.place || "last" === b.place) return -1;
                    if ("last" === a.place || "first" === b.place) return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if ("first" === a.place || "last" === b.place) return 1;
                        if ("last" === a.place || "first" === b.place) return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        var smoothscroll_for_websites_SmoothScroll = __webpack_require__(128);
        var jquery = __webpack_require__(755);
        /*! DataTables 1.13.1
 * ©2008-2022 SpryMedia Ltd - datatables.net/license
 */
        let jquery_dataTables_$ = jquery;
        var jquery_dataTables_DataTable = function(selector, options) {
            if (this instanceof jquery_dataTables_DataTable) return jquery_dataTables_$(selector).DataTable(options); else options = selector;
            this.$ = function(sSelector, oOpts) {
                return this.api(true).$(sSelector, oOpts);
            };
            this._ = function(sSelector, oOpts) {
                return this.api(true).rows(sSelector, oOpts).data();
            };
            this.api = function(traditional) {
                return traditional ? new _Api(_fnSettingsFromNode(this[_ext.iApiIndex])) : new _Api(this);
            };
            this.fnAddData = function(data, redraw) {
                var api = this.api(true);
                var rows = Array.isArray(data) && (Array.isArray(data[0]) || jquery_dataTables_$.isPlainObject(data[0])) ? api.rows.add(data) : api.row.add(data);
                if (void 0 === redraw || redraw) api.draw();
                return rows.flatten().toArray();
            };
            this.fnAdjustColumnSizing = function(bRedraw) {
                var api = this.api(true).columns.adjust();
                var settings = api.settings()[0];
                var scroll = settings.oScroll;
                if (void 0 === bRedraw || bRedraw) api.draw(false); else if ("" !== scroll.sX || "" !== scroll.sY) _fnScrollDraw(settings);
            };
            this.fnClearTable = function(bRedraw) {
                var api = this.api(true).clear();
                if (void 0 === bRedraw || bRedraw) api.draw();
            };
            this.fnClose = function(nTr) {
                this.api(true).row(nTr).child.hide();
            };
            this.fnDeleteRow = function(target, callback, redraw) {
                var api = this.api(true);
                var rows = api.rows(target);
                var settings = rows.settings()[0];
                var data = settings.aoData[rows[0][0]];
                rows.remove();
                if (callback) callback.call(this, settings, data);
                if (void 0 === redraw || redraw) api.draw();
                return data;
            };
            this.fnDestroy = function(remove) {
                this.api(true).destroy(remove);
            };
            this.fnDraw = function(complete) {
                this.api(true).draw(complete);
            };
            this.fnFilter = function(sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive) {
                var api = this.api(true);
                if (null === iColumn || void 0 === iColumn) api.search(sInput, bRegex, bSmart, bCaseInsensitive); else api.column(iColumn).search(sInput, bRegex, bSmart, bCaseInsensitive);
                api.draw();
            };
            this.fnGetData = function(src, col) {
                var api = this.api(true);
                if (void 0 !== src) {
                    var type = src.nodeName ? src.nodeName.toLowerCase() : "";
                    return void 0 !== col || "td" == type || "th" == type ? api.cell(src, col).data() : api.row(src).data() || null;
                }
                return api.data().toArray();
            };
            this.fnGetNodes = function(iRow) {
                var api = this.api(true);
                return void 0 !== iRow ? api.row(iRow).node() : api.rows().nodes().flatten().toArray();
            };
            this.fnGetPosition = function(node) {
                var api = this.api(true);
                var nodeName = node.nodeName.toUpperCase();
                if ("TR" == nodeName) return api.row(node).index(); else if ("TD" == nodeName || "TH" == nodeName) {
                    var cell = api.cell(node).index();
                    return [ cell.row, cell.columnVisible, cell.column ];
                }
                return null;
            };
            this.fnIsOpen = function(nTr) {
                return this.api(true).row(nTr).child.isShown();
            };
            this.fnOpen = function(nTr, mHtml, sClass) {
                return this.api(true).row(nTr).child(mHtml, sClass).show().child()[0];
            };
            this.fnPageChange = function(mAction, bRedraw) {
                var api = this.api(true).page(mAction);
                if (void 0 === bRedraw || bRedraw) api.draw(false);
            };
            this.fnSetColumnVis = function(iCol, bShow, bRedraw) {
                var api = this.api(true).column(iCol).visible(bShow);
                if (void 0 === bRedraw || bRedraw) api.columns.adjust().draw();
            };
            this.fnSettings = function() {
                return _fnSettingsFromNode(this[_ext.iApiIndex]);
            };
            this.fnSort = function(aaSort) {
                this.api(true).order(aaSort).draw();
            };
            this.fnSortListener = function(nNode, iColumn, fnCallback) {
                this.api(true).order.listener(nNode, iColumn, fnCallback);
            };
            this.fnUpdate = function(mData, mRow, iColumn, bRedraw, bAction) {
                var api = this.api(true);
                if (void 0 === iColumn || null === iColumn) api.row(mRow).data(mData); else api.cell(mRow, iColumn).data(mData);
                if (void 0 === bAction || bAction) api.columns.adjust();
                if (void 0 === bRedraw || bRedraw) api.draw();
                return 0;
            };
            this.fnVersionCheck = _ext.fnVersionCheck;
            var _that = this;
            var emptyInit = void 0 === options;
            var len = this.length;
            if (emptyInit) options = {};
            this.oApi = this.internal = _ext.internal;
            for (var fn in jquery_dataTables_DataTable.ext.internal) if (fn) this[fn] = _fnExternApiFunc(fn);
            this.each((function() {
                var o = {};
                var oInit = len > 1 ? _fnExtend(o, options, true) : options;
                var iLen, i = 0;
                var sId = this.getAttribute("id");
                var bInitHandedOff = false;
                var defaults = jquery_dataTables_DataTable.defaults;
                var $this = jquery_dataTables_$(this);
                if ("table" != this.nodeName.toLowerCase()) {
                    _fnLog(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                    return;
                }
                _fnCompatOpts(defaults);
                _fnCompatCols(defaults.column);
                _fnCamelToHungarian(defaults, defaults, true);
                _fnCamelToHungarian(defaults.column, defaults.column, true);
                _fnCamelToHungarian(defaults, jquery_dataTables_$.extend(oInit, $this.data()), true);
                var allSettings = jquery_dataTables_DataTable.settings;
                for (i = 0, iLen = allSettings.length; i < iLen; i++) {
                    var s = allSettings[i];
                    if (s.nTable == this || s.nTHead && s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
                        var bRetrieve = void 0 !== oInit.bRetrieve ? oInit.bRetrieve : defaults.bRetrieve;
                        var bDestroy = void 0 !== oInit.bDestroy ? oInit.bDestroy : defaults.bDestroy;
                        if (emptyInit || bRetrieve) return s.oInstance; else if (bDestroy) {
                            s.oInstance.fnDestroy();
                            break;
                        } else {
                            _fnLog(s, 0, "Cannot reinitialise DataTable", 3);
                            return;
                        }
                    }
                    if (s.sTableId == this.id) {
                        allSettings.splice(i, 1);
                        break;
                    }
                }
                if (null === sId || "" === sId) {
                    sId = "DataTables_Table_" + jquery_dataTables_DataTable.ext._unique++;
                    this.id = sId;
                }
                var oSettings = jquery_dataTables_$.extend(true, {}, jquery_dataTables_DataTable.models.oSettings, {
                    sDestroyWidth: $this[0].style.width,
                    sInstance: sId,
                    sTableId: sId
                });
                oSettings.nTable = this;
                oSettings.oApi = _that.internal;
                oSettings.oInit = oInit;
                allSettings.push(oSettings);
                oSettings.oInstance = 1 === _that.length ? _that : $this.dataTable();
                _fnCompatOpts(oInit);
                _fnLanguageCompat(oInit.oLanguage);
                if (oInit.aLengthMenu && !oInit.iDisplayLength) oInit.iDisplayLength = Array.isArray(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
                oInit = _fnExtend(jquery_dataTables_$.extend(true, {}, defaults), oInit);
                _fnMap(oSettings.oFeatures, oInit, [ "bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender" ]);
                _fnMap(oSettings, oInit, [ "asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", [ "iCookieDuration", "iStateDuration" ], [ "oSearch", "oPreviousSearch" ], [ "aoSearchCols", "aoPreSearchCols" ], [ "iDisplayLength", "_iDisplayLength" ] ]);
                _fnMap(oSettings.oScroll, oInit, [ [ "sScrollX", "sX" ], [ "sScrollXInner", "sXInner" ], [ "sScrollY", "sY" ], [ "bScrollCollapse", "bCollapse" ] ]);
                _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");
                _fnCallbackReg(oSettings, "aoDrawCallback", oInit.fnDrawCallback, "user");
                _fnCallbackReg(oSettings, "aoServerParams", oInit.fnServerParams, "user");
                _fnCallbackReg(oSettings, "aoStateSaveParams", oInit.fnStateSaveParams, "user");
                _fnCallbackReg(oSettings, "aoStateLoadParams", oInit.fnStateLoadParams, "user");
                _fnCallbackReg(oSettings, "aoStateLoaded", oInit.fnStateLoaded, "user");
                _fnCallbackReg(oSettings, "aoRowCallback", oInit.fnRowCallback, "user");
                _fnCallbackReg(oSettings, "aoRowCreatedCallback", oInit.fnCreatedRow, "user");
                _fnCallbackReg(oSettings, "aoHeaderCallback", oInit.fnHeaderCallback, "user");
                _fnCallbackReg(oSettings, "aoFooterCallback", oInit.fnFooterCallback, "user");
                _fnCallbackReg(oSettings, "aoInitComplete", oInit.fnInitComplete, "user");
                _fnCallbackReg(oSettings, "aoPreDrawCallback", oInit.fnPreDrawCallback, "user");
                oSettings.rowIdFn = _fnGetObjectDataFn(oInit.rowId);
                _fnBrowserDetect(oSettings);
                var oClasses = oSettings.oClasses;
                jquery_dataTables_$.extend(oClasses, jquery_dataTables_DataTable.ext.classes, oInit.oClasses);
                $this.addClass(oClasses.sTable);
                if (void 0 === oSettings.iInitDisplayStart) {
                    oSettings.iInitDisplayStart = oInit.iDisplayStart;
                    oSettings._iDisplayStart = oInit.iDisplayStart;
                }
                if (null !== oInit.iDeferLoading) {
                    oSettings.bDeferLoading = true;
                    var tmp = Array.isArray(oInit.iDeferLoading);
                    oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
                    oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
                }
                var oLanguage = oSettings.oLanguage;
                jquery_dataTables_$.extend(true, oLanguage, oInit.oLanguage);
                if (oLanguage.sUrl) {
                    jquery_dataTables_$.ajax({
                        dataType: "json",
                        url: oLanguage.sUrl,
                        success: function(json) {
                            _fnCamelToHungarian(defaults.oLanguage, json);
                            _fnLanguageCompat(json);
                            jquery_dataTables_$.extend(true, oLanguage, json, oSettings.oInit.oLanguage);
                            _fnCallbackFire(oSettings, null, "i18n", [ oSettings ]);
                            _fnInitialise(oSettings);
                        },
                        error: function() {
                            _fnInitialise(oSettings);
                        }
                    });
                    bInitHandedOff = true;
                } else _fnCallbackFire(oSettings, null, "i18n", [ oSettings ]);
                if (null === oInit.asStripeClasses) oSettings.asStripeClasses = [ oClasses.sStripeOdd, oClasses.sStripeEven ];
                var stripeClasses = oSettings.asStripeClasses;
                var rowOne = $this.children("tbody").find("tr").eq(0);
                if (-1 !== jquery_dataTables_$.inArray(true, jquery_dataTables_$.map(stripeClasses, (function(el, i) {
                    return rowOne.hasClass(el);
                })))) {
                    jquery_dataTables_$("tbody tr", this).removeClass(stripeClasses.join(" "));
                    oSettings.asDestroyStripes = stripeClasses.slice();
                }
                var anThs = [];
                var aoColumnsInit;
                var nThead = this.getElementsByTagName("thead");
                if (0 !== nThead.length) {
                    _fnDetectHeader(oSettings.aoHeader, nThead[0]);
                    anThs = _fnGetUniqueThs(oSettings);
                }
                if (null === oInit.aoColumns) {
                    aoColumnsInit = [];
                    for (i = 0, iLen = anThs.length; i < iLen; i++) aoColumnsInit.push(null);
                } else aoColumnsInit = oInit.aoColumns;
                for (i = 0, iLen = aoColumnsInit.length; i < iLen; i++) _fnAddColumn(oSettings, anThs ? anThs[i] : null);
                _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, aoColumnsInit, (function(iCol, oDef) {
                    _fnColumnOptions(oSettings, iCol, oDef);
                }));
                if (rowOne.length) {
                    var a = function(cell, name) {
                        return null !== cell.getAttribute("data-" + name) ? name : null;
                    };
                    jquery_dataTables_$(rowOne[0]).children("th, td").each((function(i, cell) {
                        var col = oSettings.aoColumns[i];
                        if (!col) _fnLog(oSettings, 0, "Incorrect column count", 18);
                        if (col.mData === i) {
                            var sort = a(cell, "sort") || a(cell, "order");
                            var filter = a(cell, "filter") || a(cell, "search");
                            if (null !== sort || null !== filter) {
                                col.mData = {
                                    _: i + ".display",
                                    sort: null !== sort ? i + ".@data-" + sort : void 0,
                                    type: null !== sort ? i + ".@data-" + sort : void 0,
                                    filter: null !== filter ? i + ".@data-" + filter : void 0
                                };
                                _fnColumnOptions(oSettings, i);
                            }
                        }
                    }));
                }
                var features = oSettings.oFeatures;
                var loadedInit = function() {
                    if (void 0 === oInit.aaSorting) {
                        var sorting = oSettings.aaSorting;
                        for (i = 0, iLen = sorting.length; i < iLen; i++) sorting[i][1] = oSettings.aoColumns[i].asSorting[0];
                    }
                    _fnSortingClasses(oSettings);
                    if (features.bSort) _fnCallbackReg(oSettings, "aoDrawCallback", (function() {
                        if (oSettings.bSorted) {
                            var aSort = _fnSortFlatten(oSettings);
                            var sortedColumns = {};
                            jquery_dataTables_$.each(aSort, (function(i, val) {
                                sortedColumns[val.src] = val.dir;
                            }));
                            _fnCallbackFire(oSettings, null, "order", [ oSettings, aSort, sortedColumns ]);
                            _fnSortAria(oSettings);
                        }
                    }));
                    _fnCallbackReg(oSettings, "aoDrawCallback", (function() {
                        if (oSettings.bSorted || "ssp" === _fnDataSource(oSettings) || features.bDeferRender) _fnSortingClasses(oSettings);
                    }), "sc");
                    var captions = $this.children("caption").each((function() {
                        this._captionSide = jquery_dataTables_$(this).css("caption-side");
                    }));
                    var thead = $this.children("thead");
                    if (0 === thead.length) thead = jquery_dataTables_$("<thead/>").appendTo($this);
                    oSettings.nTHead = thead[0];
                    var tbody = $this.children("tbody");
                    if (0 === tbody.length) tbody = jquery_dataTables_$("<tbody/>").insertAfter(thead);
                    oSettings.nTBody = tbody[0];
                    var tfoot = $this.children("tfoot");
                    if (0 === tfoot.length && captions.length > 0 && ("" !== oSettings.oScroll.sX || "" !== oSettings.oScroll.sY)) tfoot = jquery_dataTables_$("<tfoot/>").appendTo($this);
                    if (0 === tfoot.length || 0 === tfoot.children().length) $this.addClass(oClasses.sNoFooter); else if (tfoot.length > 0) {
                        oSettings.nTFoot = tfoot[0];
                        _fnDetectHeader(oSettings.aoFooter, oSettings.nTFoot);
                    }
                    if (oInit.aaData) for (i = 0; i < oInit.aaData.length; i++) _fnAddData(oSettings, oInit.aaData[i]); else if (oSettings.bDeferLoading || "dom" == _fnDataSource(oSettings)) _fnAddTr(oSettings, jquery_dataTables_$(oSettings.nTBody).children("tr"));
                    oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
                    oSettings.bInitialised = true;
                    if (false === bInitHandedOff) _fnInitialise(oSettings);
                };
                _fnCallbackReg(oSettings, "aoDrawCallback", _fnSaveState, "state_save");
                if (oInit.bStateSave) {
                    features.bStateSave = true;
                    _fnLoadState(oSettings, oInit, loadedInit);
                } else loadedInit();
            }));
            _that = null;
            return this;
        };
        var _ext;
        var _Api;
        var _api_register;
        var _api_registerPlural;
        var _re_dic = {};
        var _re_new_lines = /[\r\n\u2028]/g;
        var _re_html = /<.*?>/g;
        var _re_date = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;
        var _re_escape_regex = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-" ].join("|\\") + ")", "g");
        var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
        var _empty = function(d) {
            return !d || true === d || "-" === d ? true : false;
        };
        var _intVal = function(s) {
            var integer = parseInt(s, 10);
            return !isNaN(integer) && isFinite(s) ? integer : null;
        };
        var _numToDecimal = function(num, decimalPoint) {
            if (!_re_dic[decimalPoint]) _re_dic[decimalPoint] = new RegExp(_fnEscapeRegex(decimalPoint), "g");
            return "string" === typeof num && "." !== decimalPoint ? num.replace(/\./g, "").replace(_re_dic[decimalPoint], ".") : num;
        };
        var _isNumber = function(d, decimalPoint, formatted) {
            var strType = "string" === typeof d;
            if (_empty(d)) return true;
            if (decimalPoint && strType) d = _numToDecimal(d, decimalPoint);
            if (formatted && strType) d = d.replace(_re_formatted_numeric, "");
            return !isNaN(parseFloat(d)) && isFinite(d);
        };
        var _isHtml = function(d) {
            return _empty(d) || "string" === typeof d;
        };
        var _htmlNumeric = function(d, decimalPoint, formatted) {
            if (_empty(d)) return true;
            var html = _isHtml(d);
            return !html ? null : _isNumber(_stripHtml(d), decimalPoint, formatted) ? true : null;
        };
        var _pluck = function(a, prop, prop2) {
            var out = [];
            var i = 0, ien = a.length;
            if (void 0 !== prop2) {
                for (;i < ien; i++) if (a[i] && a[i][prop]) out.push(a[i][prop][prop2]);
            } else for (;i < ien; i++) if (a[i]) out.push(a[i][prop]);
            return out;
        };
        var _pluck_order = function(a, order, prop, prop2) {
            var out = [];
            var i = 0, ien = order.length;
            if (void 0 !== prop2) {
                for (;i < ien; i++) if (a[order[i]][prop]) out.push(a[order[i]][prop][prop2]);
            } else for (;i < ien; i++) out.push(a[order[i]][prop]);
            return out;
        };
        var _range = function(len, start) {
            var out = [];
            var end;
            if (void 0 === start) {
                start = 0;
                end = len;
            } else {
                end = start;
                start = len;
            }
            for (var i = start; i < end; i++) out.push(i);
            return out;
        };
        var _removeEmpty = function(a) {
            var out = [];
            for (var i = 0, ien = a.length; i < ien; i++) if (a[i]) out.push(a[i]);
            return out;
        };
        var _stripHtml = function(d) {
            return d.replace(_re_html, "");
        };
        var _areAllUnique = function(src) {
            if (src.length < 2) return true;
            var sorted = src.slice().sort();
            var last = sorted[0];
            for (var i = 1, ien = sorted.length; i < ien; i++) {
                if (sorted[i] === last) return false;
                last = sorted[i];
            }
            return true;
        };
        var _unique = function(src) {
            if (_areAllUnique(src)) return src.slice();
            var val, i, j, out = [], ien = src.length, k = 0;
            again: for (i = 0; i < ien; i++) {
                val = src[i];
                for (j = 0; j < k; j++) if (out[j] === val) continue again;
                out.push(val);
                k++;
            }
            return out;
        };
        var _flatten = function(out, val) {
            if (Array.isArray(val)) for (var i = 0; i < val.length; i++) _flatten(out, val[i]); else out.push(val);
            return out;
        };
        var _includes = function(search, start) {
            if (void 0 === start) start = 0;
            return -1 !== this.indexOf(search, start);
        };
        if (!Array.isArray) Array.isArray = function(arg) {
            return "[object Array]" === Object.prototype.toString.call(arg);
        };
        if (!Array.prototype.includes) Array.prototype.includes = _includes;
        if (!String.prototype.trim) String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        };
        if (!String.prototype.includes) String.prototype.includes = _includes;
        jquery_dataTables_DataTable.util = {
            throttle: function(fn, freq) {
                var last, timer, frequency = void 0 !== freq ? freq : 200;
                return function() {
                    var that = this, now = +new Date, args = arguments;
                    if (last && now < last + frequency) {
                        clearTimeout(timer);
                        timer = setTimeout((function() {
                            last = void 0;
                            fn.apply(that, args);
                        }), frequency);
                    } else {
                        last = now;
                        fn.apply(that, args);
                    }
                };
            },
            escapeRegex: function(val) {
                return val.replace(_re_escape_regex, "\\$1");
            },
            set: function(source) {
                if (jquery_dataTables_$.isPlainObject(source)) return jquery_dataTables_DataTable.util.set(source._); else if (null === source) return function() {}; else if ("function" === typeof source) return function(data, val, meta) {
                    source(data, "set", val, meta);
                }; else if ("string" === typeof source && (-1 !== source.indexOf(".") || -1 !== source.indexOf("[") || -1 !== source.indexOf("("))) {
                    var setData = function(data, val, src) {
                        var b, a = _fnSplitObjNotation(src);
                        var aLast = a[a.length - 1];
                        var arrayNotation, funcNotation, o, innerSrc;
                        for (var i = 0, iLen = a.length - 1; i < iLen; i++) {
                            if ("__proto__" === a[i] || "constructor" === a[i]) throw new Error("Cannot set prototype values");
                            arrayNotation = a[i].match(__reArray);
                            funcNotation = a[i].match(__reFn);
                            if (arrayNotation) {
                                a[i] = a[i].replace(__reArray, "");
                                data[a[i]] = [];
                                b = a.slice();
                                b.splice(0, i + 1);
                                innerSrc = b.join(".");
                                if (Array.isArray(val)) for (var j = 0, jLen = val.length; j < jLen; j++) {
                                    o = {};
                                    setData(o, val[j], innerSrc);
                                    data[a[i]].push(o);
                                } else data[a[i]] = val;
                                return;
                            } else if (funcNotation) {
                                a[i] = a[i].replace(__reFn, "");
                                data = data[a[i]](val);
                            }
                            if (null === data[a[i]] || void 0 === data[a[i]]) data[a[i]] = {};
                            data = data[a[i]];
                        }
                        if (aLast.match(__reFn)) data = data[aLast.replace(__reFn, "")](val); else data[aLast.replace(__reArray, "")] = val;
                    };
                    return function(data, val) {
                        return setData(data, val, source);
                    };
                } else return function(data, val) {
                    data[source] = val;
                };
            },
            get: function(source) {
                if (jquery_dataTables_$.isPlainObject(source)) {
                    var o = {};
                    jquery_dataTables_$.each(source, (function(key, val) {
                        if (val) o[key] = jquery_dataTables_DataTable.util.get(val);
                    }));
                    return function(data, type, row, meta) {
                        var t = o[type] || o._;
                        return void 0 !== t ? t(data, type, row, meta) : data;
                    };
                } else if (null === source) return function(data) {
                    return data;
                }; else if ("function" === typeof source) return function(data, type, row, meta) {
                    return source(data, type, row, meta);
                }; else if ("string" === typeof source && (-1 !== source.indexOf(".") || -1 !== source.indexOf("[") || -1 !== source.indexOf("("))) {
                    var fetchData = function(data, type, src) {
                        var arrayNotation, funcNotation, out, innerSrc;
                        if ("" !== src) {
                            var a = _fnSplitObjNotation(src);
                            for (var i = 0, iLen = a.length; i < iLen; i++) {
                                arrayNotation = a[i].match(__reArray);
                                funcNotation = a[i].match(__reFn);
                                if (arrayNotation) {
                                    a[i] = a[i].replace(__reArray, "");
                                    if ("" !== a[i]) data = data[a[i]];
                                    out = [];
                                    a.splice(0, i + 1);
                                    innerSrc = a.join(".");
                                    if (Array.isArray(data)) for (var j = 0, jLen = data.length; j < jLen; j++) out.push(fetchData(data[j], type, innerSrc));
                                    var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
                                    data = "" === join ? out : out.join(join);
                                    break;
                                } else if (funcNotation) {
                                    a[i] = a[i].replace(__reFn, "");
                                    data = data[a[i]]();
                                    continue;
                                }
                                if (null === data || void 0 === data[a[i]]) return;
                                data = data[a[i]];
                            }
                        }
                        return data;
                    };
                    return function(data, type) {
                        return fetchData(data, type, source);
                    };
                } else return function(data, type) {
                    return data[source];
                };
            }
        };
        function _fnHungarianMap(o) {
            var match, newKey, hungarian = "a aa ai ao as b fn i m o s ", map = {};
            jquery_dataTables_$.each(o, (function(key, val) {
                match = key.match(/^([^A-Z]+?)([A-Z])/);
                if (match && -1 !== hungarian.indexOf(match[1] + " ")) {
                    newKey = key.replace(match[0], match[2].toLowerCase());
                    map[newKey] = key;
                    if ("o" === match[1]) _fnHungarianMap(o[key]);
                }
            }));
            o._hungarianMap = map;
        }
        function _fnCamelToHungarian(src, user, force) {
            if (!src._hungarianMap) _fnHungarianMap(src);
            var hungarianKey;
            jquery_dataTables_$.each(user, (function(key, val) {
                hungarianKey = src._hungarianMap[key];
                if (void 0 !== hungarianKey && (force || void 0 === user[hungarianKey])) if ("o" === hungarianKey.charAt(0)) {
                    if (!user[hungarianKey]) user[hungarianKey] = {};
                    jquery_dataTables_$.extend(true, user[hungarianKey], user[key]);
                    _fnCamelToHungarian(src[hungarianKey], user[hungarianKey], force);
                } else user[hungarianKey] = user[key];
            }));
        }
        function _fnLanguageCompat(lang) {
            var defaults = jquery_dataTables_DataTable.defaults.oLanguage;
            var defaultDecimal = defaults.sDecimal;
            if (defaultDecimal) _addNumericSort(defaultDecimal);
            if (lang) {
                var zeroRecords = lang.sZeroRecords;
                if (!lang.sEmptyTable && zeroRecords && "No data available in table" === defaults.sEmptyTable) _fnMap(lang, lang, "sZeroRecords", "sEmptyTable");
                if (!lang.sLoadingRecords && zeroRecords && "Loading..." === defaults.sLoadingRecords) _fnMap(lang, lang, "sZeroRecords", "sLoadingRecords");
                if (lang.sInfoThousands) lang.sThousands = lang.sInfoThousands;
                var decimal = lang.sDecimal;
                if (decimal && defaultDecimal !== decimal) _addNumericSort(decimal);
            }
        }
        var _fnCompatMap = function(o, knew, old) {
            if (void 0 !== o[knew]) o[old] = o[knew];
        };
        function _fnCompatOpts(init) {
            _fnCompatMap(init, "ordering", "bSort");
            _fnCompatMap(init, "orderMulti", "bSortMulti");
            _fnCompatMap(init, "orderClasses", "bSortClasses");
            _fnCompatMap(init, "orderCellsTop", "bSortCellsTop");
            _fnCompatMap(init, "order", "aaSorting");
            _fnCompatMap(init, "orderFixed", "aaSortingFixed");
            _fnCompatMap(init, "paging", "bPaginate");
            _fnCompatMap(init, "pagingType", "sPaginationType");
            _fnCompatMap(init, "pageLength", "iDisplayLength");
            _fnCompatMap(init, "searching", "bFilter");
            if ("boolean" === typeof init.sScrollX) init.sScrollX = init.sScrollX ? "100%" : "";
            if ("boolean" === typeof init.scrollX) init.scrollX = init.scrollX ? "100%" : "";
            var searchCols = init.aoSearchCols;
            if (searchCols) for (var i = 0, ien = searchCols.length; i < ien; i++) if (searchCols[i]) _fnCamelToHungarian(jquery_dataTables_DataTable.models.oSearch, searchCols[i]);
        }
        function _fnCompatCols(init) {
            _fnCompatMap(init, "orderable", "bSortable");
            _fnCompatMap(init, "orderData", "aDataSort");
            _fnCompatMap(init, "orderSequence", "asSorting");
            _fnCompatMap(init, "orderDataType", "sortDataType");
            var dataSort = init.aDataSort;
            if ("number" === typeof dataSort && !Array.isArray(dataSort)) init.aDataSort = [ dataSort ];
        }
        function _fnBrowserDetect(settings) {
            if (!jquery_dataTables_DataTable.__browser) {
                var browser = {};
                jquery_dataTables_DataTable.__browser = browser;
                var n = jquery_dataTables_$("<div/>").css({
                    position: "fixed",
                    top: 0,
                    left: -1 * jquery_dataTables_$(window).scrollLeft(),
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(jquery_dataTables_$("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(jquery_dataTables_$("<div/>").css({
                    width: "100%",
                    height: 10
                }))).appendTo("body");
                var outer = n.children();
                var inner = outer.children();
                browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
                browser.bScrollOversize = 100 === inner[0].offsetWidth && 100 !== outer[0].clientWidth;
                browser.bScrollbarLeft = 1 !== Math.round(inner.offset().left);
                browser.bBounding = n[0].getBoundingClientRect().width ? true : false;
                n.remove();
            }
            jquery_dataTables_$.extend(settings.oBrowser, jquery_dataTables_DataTable.__browser);
            settings.oScroll.iBarWidth = jquery_dataTables_DataTable.__browser.barWidth;
        }
        function _fnReduce(that, fn, init, start, end, inc) {
            var value, i = start, isSet = false;
            if (void 0 !== init) {
                value = init;
                isSet = true;
            }
            while (i !== end) {
                if (!that.hasOwnProperty(i)) continue;
                value = isSet ? fn(value, that[i], i, that) : that[i];
                isSet = true;
                i += inc;
            }
            return value;
        }
        function _fnAddColumn(oSettings, nTh) {
            var oDefaults = jquery_dataTables_DataTable.defaults.column;
            var iCol = oSettings.aoColumns.length;
            var oCol = jquery_dataTables_$.extend({}, jquery_dataTables_DataTable.models.oColumn, oDefaults, {
                nTh: nTh ? nTh : document.createElement("th"),
                sTitle: oDefaults.sTitle ? oDefaults.sTitle : nTh ? nTh.innerHTML : "",
                aDataSort: oDefaults.aDataSort ? oDefaults.aDataSort : [ iCol ],
                mData: oDefaults.mData ? oDefaults.mData : iCol,
                idx: iCol
            });
            oSettings.aoColumns.push(oCol);
            var searchCols = oSettings.aoPreSearchCols;
            searchCols[iCol] = jquery_dataTables_$.extend({}, jquery_dataTables_DataTable.models.oSearch, searchCols[iCol]);
            _fnColumnOptions(oSettings, iCol, jquery_dataTables_$(nTh).data());
        }
        function _fnColumnOptions(oSettings, iCol, oOptions) {
            var oCol = oSettings.aoColumns[iCol];
            var oClasses = oSettings.oClasses;
            var th = jquery_dataTables_$(oCol.nTh);
            if (!oCol.sWidthOrig) {
                oCol.sWidthOrig = th.attr("width") || null;
                var t = (th.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                if (t) oCol.sWidthOrig = t[1];
            }
            if (void 0 !== oOptions && null !== oOptions) {
                _fnCompatCols(oOptions);
                _fnCamelToHungarian(jquery_dataTables_DataTable.defaults.column, oOptions, true);
                if (void 0 !== oOptions.mDataProp && !oOptions.mData) oOptions.mData = oOptions.mDataProp;
                if (oOptions.sType) oCol._sManualType = oOptions.sType;
                if (oOptions.className && !oOptions.sClass) oOptions.sClass = oOptions.className;
                if (oOptions.sClass) th.addClass(oOptions.sClass);
                var origClass = oCol.sClass;
                jquery_dataTables_$.extend(oCol, oOptions);
                _fnMap(oCol, oOptions, "sWidth", "sWidthOrig");
                if (origClass !== oCol.sClass) oCol.sClass = origClass + " " + oCol.sClass;
                if (void 0 !== oOptions.iDataSort) oCol.aDataSort = [ oOptions.iDataSort ];
                _fnMap(oCol, oOptions, "aDataSort");
            }
            var mDataSrc = oCol.mData;
            var mData = _fnGetObjectDataFn(mDataSrc);
            var mRender = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
            var attrTest = function(src) {
                return "string" === typeof src && -1 !== src.indexOf("@");
            };
            oCol._bAttrSrc = jquery_dataTables_$.isPlainObject(mDataSrc) && (attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter));
            oCol._setter = null;
            oCol.fnGetData = function(rowData, type, meta) {
                var innerData = mData(rowData, type, void 0, meta);
                return mRender && type ? mRender(innerData, type, rowData, meta) : innerData;
            };
            oCol.fnSetData = function(rowData, val, meta) {
                return _fnSetObjectDataFn(mDataSrc)(rowData, val, meta);
            };
            if ("number" !== typeof mDataSrc) oSettings._rowReadObject = true;
            if (!oSettings.oFeatures.bSort) {
                oCol.bSortable = false;
                th.addClass(oClasses.sSortableNone);
            }
            var bAsc = -1 !== jquery_dataTables_$.inArray("asc", oCol.asSorting);
            var bDesc = -1 !== jquery_dataTables_$.inArray("desc", oCol.asSorting);
            if (!oCol.bSortable || !bAsc && !bDesc) {
                oCol.sSortingClass = oClasses.sSortableNone;
                oCol.sSortingClassJUI = "";
            } else if (bAsc && !bDesc) {
                oCol.sSortingClass = oClasses.sSortableAsc;
                oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
            } else if (!bAsc && bDesc) {
                oCol.sSortingClass = oClasses.sSortableDesc;
                oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
            } else {
                oCol.sSortingClass = oClasses.sSortable;
                oCol.sSortingClassJUI = oClasses.sSortJUI;
            }
        }
        function _fnAdjustColumnSizing(settings) {
            if (false !== settings.oFeatures.bAutoWidth) {
                var columns = settings.aoColumns;
                _fnCalculateColumnWidths(settings);
                for (var i = 0, iLen = columns.length; i < iLen; i++) columns[i].nTh.style.width = columns[i].sWidth;
            }
            var scroll = settings.oScroll;
            if ("" !== scroll.sY || "" !== scroll.sX) _fnScrollDraw(settings);
            _fnCallbackFire(settings, null, "column-sizing", [ settings ]);
        }
        function _fnVisibleToColumnIndex(oSettings, iMatch) {
            var aiVis = _fnGetColumns(oSettings, "bVisible");
            return "number" === typeof aiVis[iMatch] ? aiVis[iMatch] : null;
        }
        function _fnColumnIndexToVisible(oSettings, iMatch) {
            var aiVis = _fnGetColumns(oSettings, "bVisible");
            var iPos = jquery_dataTables_$.inArray(iMatch, aiVis);
            return -1 !== iPos ? iPos : null;
        }
        function _fnVisbleColumns(oSettings) {
            var vis = 0;
            jquery_dataTables_$.each(oSettings.aoColumns, (function(i, col) {
                if (col.bVisible && "none" !== jquery_dataTables_$(col.nTh).css("display")) vis++;
            }));
            return vis;
        }
        function _fnGetColumns(oSettings, sParam) {
            var a = [];
            jquery_dataTables_$.map(oSettings.aoColumns, (function(val, i) {
                if (val[sParam]) a.push(i);
            }));
            return a;
        }
        function _fnColumnTypes(settings) {
            var columns = settings.aoColumns;
            var data = settings.aoData;
            var types = jquery_dataTables_DataTable.ext.type.detect;
            var i, ien, j, jen, k, ken;
            var col, detectedType, cache;
            for (i = 0, ien = columns.length; i < ien; i++) {
                col = columns[i];
                cache = [];
                if (!col.sType && col._sManualType) col.sType = col._sManualType; else if (!col.sType) {
                    for (j = 0, jen = types.length; j < jen; j++) {
                        for (k = 0, ken = data.length; k < ken; k++) {
                            if (void 0 === cache[k]) cache[k] = _fnGetCellData(settings, k, i, "type");
                            detectedType = types[j](cache[k], settings);
                            if (!detectedType && j !== types.length - 1) break;
                            if ("html" === detectedType && !_empty(cache[k])) break;
                        }
                        if (detectedType) {
                            col.sType = detectedType;
                            break;
                        }
                    }
                    if (!col.sType) col.sType = "string";
                }
            }
        }
        function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, fn) {
            var i, iLen, j, jLen, k, kLen, def;
            var columns = oSettings.aoColumns;
            if (aoColDefs) for (i = aoColDefs.length - 1; i >= 0; i--) {
                def = aoColDefs[i];
                var aTargets = void 0 !== def.target ? def.target : void 0 !== def.targets ? def.targets : def.aTargets;
                if (!Array.isArray(aTargets)) aTargets = [ aTargets ];
                for (j = 0, jLen = aTargets.length; j < jLen; j++) if ("number" === typeof aTargets[j] && aTargets[j] >= 0) {
                    while (columns.length <= aTargets[j]) _fnAddColumn(oSettings);
                    fn(aTargets[j], def);
                } else if ("number" === typeof aTargets[j] && aTargets[j] < 0) fn(columns.length + aTargets[j], def); else if ("string" === typeof aTargets[j]) for (k = 0, 
                kLen = columns.length; k < kLen; k++) if ("_all" == aTargets[j] || jquery_dataTables_$(columns[k].nTh).hasClass(aTargets[j])) fn(k, def);
            }
            if (aoCols) for (i = 0, iLen = aoCols.length; i < iLen; i++) fn(i, aoCols[i]);
        }
        function _fnAddData(oSettings, aDataIn, nTr, anTds) {
            var iRow = oSettings.aoData.length;
            var oData = jquery_dataTables_$.extend(true, {}, jquery_dataTables_DataTable.models.oRow, {
                src: nTr ? "dom" : "data",
                idx: iRow
            });
            oData._aData = aDataIn;
            oSettings.aoData.push(oData);
            var columns = oSettings.aoColumns;
            for (var i = 0, iLen = columns.length; i < iLen; i++) columns[i].sType = null;
            oSettings.aiDisplayMaster.push(iRow);
            var id = oSettings.rowIdFn(aDataIn);
            if (void 0 !== id) oSettings.aIds[id] = oData;
            if (nTr || !oSettings.oFeatures.bDeferRender) _fnCreateTr(oSettings, iRow, nTr, anTds);
            return iRow;
        }
        function _fnAddTr(settings, trs) {
            var row;
            if (!(trs instanceof jquery_dataTables_$)) trs = jquery_dataTables_$(trs);
            return trs.map((function(i, el) {
                row = _fnGetRowElements(settings, el);
                return _fnAddData(settings, row.data, el, row.cells);
            }));
        }
        function _fnNodeToDataIndex(oSettings, n) {
            return void 0 !== n._DT_RowIndex ? n._DT_RowIndex : null;
        }
        function _fnNodeToColumnIndex(oSettings, iRow, n) {
            return jquery_dataTables_$.inArray(n, oSettings.aoData[iRow].anCells);
        }
        function _fnGetCellData(settings, rowIdx, colIdx, type) {
            if ("search" === type) type = "filter"; else if ("order" === type) type = "sort";
            var draw = settings.iDraw;
            var col = settings.aoColumns[colIdx];
            var rowData = settings.aoData[rowIdx]._aData;
            var defaultContent = col.sDefaultContent;
            var cellData = col.fnGetData(rowData, type, {
                settings,
                row: rowIdx,
                col: colIdx
            });
            if (void 0 === cellData) {
                if (settings.iDrawError != draw && null === defaultContent) {
                    _fnLog(settings, 0, "Requested unknown parameter " + ("function" == typeof col.mData ? "{function}" : "'" + col.mData + "'") + " for row " + rowIdx + ", column " + colIdx, 4);
                    settings.iDrawError = draw;
                }
                return defaultContent;
            }
            if ((cellData === rowData || null === cellData) && null !== defaultContent && void 0 !== type) cellData = defaultContent; else if ("function" === typeof cellData) return cellData.call(rowData);
            if (null === cellData && "display" === type) return "";
            if ("filter" === type) {
                var fomatters = jquery_dataTables_DataTable.ext.type.search;
                if (fomatters[col.sType]) cellData = fomatters[col.sType](cellData);
            }
            return cellData;
        }
        function _fnSetCellData(settings, rowIdx, colIdx, val) {
            var col = settings.aoColumns[colIdx];
            var rowData = settings.aoData[rowIdx]._aData;
            col.fnSetData(rowData, val, {
                settings,
                row: rowIdx,
                col: colIdx
            });
        }
        var __reArray = /\[.*?\]$/;
        var __reFn = /\(\)$/;
        function _fnSplitObjNotation(str) {
            return jquery_dataTables_$.map(str.match(/(\\.|[^\.])+/g) || [ "" ], (function(s) {
                return s.replace(/\\\./g, ".");
            }));
        }
        var _fnGetObjectDataFn = jquery_dataTables_DataTable.util.get;
        var _fnSetObjectDataFn = jquery_dataTables_DataTable.util.set;
        function _fnGetDataMaster(settings) {
            return _pluck(settings.aoData, "_aData");
        }
        function _fnClearTable(settings) {
            settings.aoData.length = 0;
            settings.aiDisplayMaster.length = 0;
            settings.aiDisplay.length = 0;
            settings.aIds = {};
        }
        function _fnDeleteIndex(a, iTarget, splice) {
            var iTargetIndex = -1;
            for (var i = 0, iLen = a.length; i < iLen; i++) if (a[i] == iTarget) iTargetIndex = i; else if (a[i] > iTarget) a[i]--;
            if (-1 != iTargetIndex && void 0 === splice) a.splice(iTargetIndex, 1);
        }
        function _fnInvalidate(settings, rowIdx, src, colIdx) {
            var row = settings.aoData[rowIdx];
            var i, ien;
            var cellWrite = function(cell, col) {
                while (cell.childNodes.length) cell.removeChild(cell.firstChild);
                cell.innerHTML = _fnGetCellData(settings, rowIdx, col, "display");
            };
            if ("dom" === src || (!src || "auto" === src) && "dom" === row.src) row._aData = _fnGetRowElements(settings, row, colIdx, void 0 === colIdx ? void 0 : row._aData).data; else {
                var cells = row.anCells;
                if (cells) if (void 0 !== colIdx) cellWrite(cells[colIdx], colIdx); else for (i = 0, 
                ien = cells.length; i < ien; i++) cellWrite(cells[i], i);
            }
            row._aSortData = null;
            row._aFilterData = null;
            var cols = settings.aoColumns;
            if (void 0 !== colIdx) cols[colIdx].sType = null; else {
                for (i = 0, ien = cols.length; i < ien; i++) cols[i].sType = null;
                _fnRowAttributes(settings, row);
            }
        }
        function _fnGetRowElements(settings, row, colIdx, d) {
            var name, col, contents, tds = [], td = row.firstChild, i = 0, columns = settings.aoColumns, objectRead = settings._rowReadObject;
            d = void 0 !== d ? d : objectRead ? {} : [];
            var attr = function(str, td) {
                if ("string" === typeof str) {
                    var idx = str.indexOf("@");
                    if (-1 !== idx) {
                        var attr = str.substring(idx + 1);
                        var setter = _fnSetObjectDataFn(str);
                        setter(d, td.getAttribute(attr));
                    }
                }
            };
            var cellProcess = function(cell) {
                if (void 0 === colIdx || colIdx === i) {
                    col = columns[i];
                    contents = cell.innerHTML.trim();
                    if (col && col._bAttrSrc) {
                        var setter = _fnSetObjectDataFn(col.mData._);
                        setter(d, contents);
                        attr(col.mData.sort, cell);
                        attr(col.mData.type, cell);
                        attr(col.mData.filter, cell);
                    } else if (objectRead) {
                        if (!col._setter) col._setter = _fnSetObjectDataFn(col.mData);
                        col._setter(d, contents);
                    } else d[i] = contents;
                }
                i++;
            };
            if (td) while (td) {
                name = td.nodeName.toUpperCase();
                if ("TD" == name || "TH" == name) {
                    cellProcess(td);
                    tds.push(td);
                }
                td = td.nextSibling;
            } else {
                tds = row.anCells;
                for (var j = 0, jen = tds.length; j < jen; j++) cellProcess(tds[j]);
            }
            var rowNode = row.firstChild ? row : row.nTr;
            if (rowNode) {
                var id = rowNode.getAttribute("id");
                if (id) _fnSetObjectDataFn(settings.rowId)(d, id);
            }
            return {
                data: d,
                cells: tds
            };
        }
        function _fnCreateTr(oSettings, iRow, nTrIn, anTds) {
            var nTr, nTd, oCol, i, iLen, create, row = oSettings.aoData[iRow], rowData = row._aData, cells = [];
            if (null === row.nTr) {
                nTr = nTrIn || document.createElement("tr");
                row.nTr = nTr;
                row.anCells = cells;
                nTr._DT_RowIndex = iRow;
                _fnRowAttributes(oSettings, row);
                for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
                    oCol = oSettings.aoColumns[i];
                    create = nTrIn ? false : true;
                    nTd = create ? document.createElement(oCol.sCellType) : anTds[i];
                    if (!nTd) _fnLog(oSettings, 0, "Incorrect column count", 18);
                    nTd._DT_CellIndex = {
                        row: iRow,
                        column: i
                    };
                    cells.push(nTd);
                    if (create || (oCol.mRender || oCol.mData !== i) && (!jquery_dataTables_$.isPlainObject(oCol.mData) || oCol.mData._ !== i + ".display")) nTd.innerHTML = _fnGetCellData(oSettings, iRow, i, "display");
                    if (oCol.sClass) nTd.className += " " + oCol.sClass;
                    if (oCol.bVisible && !nTrIn) nTr.appendChild(nTd); else if (!oCol.bVisible && nTrIn) nTd.parentNode.removeChild(nTd);
                    if (oCol.fnCreatedCell) oCol.fnCreatedCell.call(oSettings.oInstance, nTd, _fnGetCellData(oSettings, iRow, i), rowData, iRow, i);
                }
                _fnCallbackFire(oSettings, "aoRowCreatedCallback", null, [ nTr, rowData, iRow, cells ]);
            }
        }
        function _fnRowAttributes(settings, row) {
            var tr = row.nTr;
            var data = row._aData;
            if (tr) {
                var id = settings.rowIdFn(data);
                if (id) tr.id = id;
                if (data.DT_RowClass) {
                    var a = data.DT_RowClass.split(" ");
                    row.__rowc = row.__rowc ? _unique(row.__rowc.concat(a)) : a;
                    jquery_dataTables_$(tr).removeClass(row.__rowc.join(" ")).addClass(data.DT_RowClass);
                }
                if (data.DT_RowAttr) jquery_dataTables_$(tr).attr(data.DT_RowAttr);
                if (data.DT_RowData) jquery_dataTables_$(tr).data(data.DT_RowData);
            }
        }
        function _fnBuildHead(oSettings) {
            var i, ien, cell, row, column;
            var thead = oSettings.nTHead;
            var tfoot = oSettings.nTFoot;
            var createHeader = 0 === jquery_dataTables_$("th, td", thead).length;
            var classes = oSettings.oClasses;
            var columns = oSettings.aoColumns;
            if (createHeader) row = jquery_dataTables_$("<tr/>").appendTo(thead);
            for (i = 0, ien = columns.length; i < ien; i++) {
                column = columns[i];
                cell = jquery_dataTables_$(column.nTh).addClass(column.sClass);
                if (createHeader) cell.appendTo(row);
                if (oSettings.oFeatures.bSort) {
                    cell.addClass(column.sSortingClass);
                    if (false !== column.bSortable) {
                        cell.attr("tabindex", oSettings.iTabIndex).attr("aria-controls", oSettings.sTableId);
                        _fnSortAttachListener(oSettings, column.nTh, i);
                    }
                }
                if (column.sTitle != cell[0].innerHTML) cell.html(column.sTitle);
                _fnRenderer(oSettings, "header")(oSettings, cell, column, classes);
            }
            if (createHeader) _fnDetectHeader(oSettings.aoHeader, thead);
            jquery_dataTables_$(thead).children("tr").children("th, td").addClass(classes.sHeaderTH);
            jquery_dataTables_$(tfoot).children("tr").children("th, td").addClass(classes.sFooterTH);
            if (null !== tfoot) {
                var cells = oSettings.aoFooter[0];
                for (i = 0, ien = cells.length; i < ien; i++) {
                    column = columns[i];
                    if (column) {
                        column.nTf = cells[i].cell;
                        if (column.sClass) jquery_dataTables_$(column.nTf).addClass(column.sClass);
                    } else _fnLog(oSettings, 0, "Incorrect column count", 18);
                }
            }
        }
        function _fnDrawHead(oSettings, aoSource, bIncludeHidden) {
            var i, iLen, j, jLen, k, n, nLocalTr;
            var aoLocal = [];
            var aApplied = [];
            var iColumns = oSettings.aoColumns.length;
            var iRowspan, iColspan;
            if (!aoSource) return;
            if (void 0 === bIncludeHidden) bIncludeHidden = false;
            for (i = 0, iLen = aoSource.length; i < iLen; i++) {
                aoLocal[i] = aoSource[i].slice();
                aoLocal[i].nTr = aoSource[i].nTr;
                for (j = iColumns - 1; j >= 0; j--) if (!oSettings.aoColumns[j].bVisible && !bIncludeHidden) aoLocal[i].splice(j, 1);
                aApplied.push([]);
            }
            for (i = 0, iLen = aoLocal.length; i < iLen; i++) {
                nLocalTr = aoLocal[i].nTr;
                if (nLocalTr) while (n = nLocalTr.firstChild) nLocalTr.removeChild(n);
                for (j = 0, jLen = aoLocal[i].length; j < jLen; j++) {
                    iRowspan = 1;
                    iColspan = 1;
                    if (void 0 === aApplied[i][j]) {
                        nLocalTr.appendChild(aoLocal[i][j].cell);
                        aApplied[i][j] = 1;
                        while (void 0 !== aoLocal[i + iRowspan] && aoLocal[i][j].cell == aoLocal[i + iRowspan][j].cell) {
                            aApplied[i + iRowspan][j] = 1;
                            iRowspan++;
                        }
                        while (void 0 !== aoLocal[i][j + iColspan] && aoLocal[i][j].cell == aoLocal[i][j + iColspan].cell) {
                            for (k = 0; k < iRowspan; k++) aApplied[i + k][j + iColspan] = 1;
                            iColspan++;
                        }
                        jquery_dataTables_$(aoLocal[i][j].cell).attr("rowspan", iRowspan).attr("colspan", iColspan);
                    }
                }
            }
        }
        function _fnDraw(oSettings, ajaxComplete) {
            _fnStart(oSettings);
            var aPreDraw = _fnCallbackFire(oSettings, "aoPreDrawCallback", "preDraw", [ oSettings ]);
            if (-1 !== jquery_dataTables_$.inArray(false, aPreDraw)) {
                _fnProcessingDisplay(oSettings, false);
                return;
            }
            var anRows = [];
            var iRowCount = 0;
            var asStripeClasses = oSettings.asStripeClasses;
            var iStripes = asStripeClasses.length;
            var oLang = oSettings.oLanguage;
            var bServerSide = "ssp" == _fnDataSource(oSettings);
            var aiDisplay = oSettings.aiDisplay;
            var iDisplayStart = oSettings._iDisplayStart;
            var iDisplayEnd = oSettings.fnDisplayEnd();
            oSettings.bDrawing = true;
            if (oSettings.bDeferLoading) {
                oSettings.bDeferLoading = false;
                oSettings.iDraw++;
                _fnProcessingDisplay(oSettings, false);
            } else if (!bServerSide) oSettings.iDraw++; else if (!oSettings.bDestroying && !ajaxComplete) {
                _fnAjaxUpdate(oSettings);
                return;
            }
            if (0 !== aiDisplay.length) {
                var iStart = bServerSide ? 0 : iDisplayStart;
                var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
                for (var j = iStart; j < iEnd; j++) {
                    var iDataIndex = aiDisplay[j];
                    var aoData = oSettings.aoData[iDataIndex];
                    if (null === aoData.nTr) _fnCreateTr(oSettings, iDataIndex);
                    var nRow = aoData.nTr;
                    if (0 !== iStripes) {
                        var sStripe = asStripeClasses[iRowCount % iStripes];
                        if (aoData._sRowStripe != sStripe) {
                            jquery_dataTables_$(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);
                            aoData._sRowStripe = sStripe;
                        }
                    }
                    _fnCallbackFire(oSettings, "aoRowCallback", null, [ nRow, aoData._aData, iRowCount, j, iDataIndex ]);
                    anRows.push(nRow);
                    iRowCount++;
                }
            } else {
                var sZero = oLang.sZeroRecords;
                if (1 == oSettings.iDraw && "ajax" == _fnDataSource(oSettings)) sZero = oLang.sLoadingRecords; else if (oLang.sEmptyTable && 0 === oSettings.fnRecordsTotal()) sZero = oLang.sEmptyTable;
                anRows[0] = jquery_dataTables_$("<tr/>", {
                    class: iStripes ? asStripeClasses[0] : ""
                }).append(jquery_dataTables_$("<td />", {
                    valign: "top",
                    colSpan: _fnVisbleColumns(oSettings),
                    class: oSettings.oClasses.sRowEmpty
                }).html(sZero))[0];
            }
            _fnCallbackFire(oSettings, "aoHeaderCallback", "header", [ jquery_dataTables_$(oSettings.nTHead).children("tr")[0], _fnGetDataMaster(oSettings), iDisplayStart, iDisplayEnd, aiDisplay ]);
            _fnCallbackFire(oSettings, "aoFooterCallback", "footer", [ jquery_dataTables_$(oSettings.nTFoot).children("tr")[0], _fnGetDataMaster(oSettings), iDisplayStart, iDisplayEnd, aiDisplay ]);
            var body = jquery_dataTables_$(oSettings.nTBody);
            body.children().detach();
            body.append(jquery_dataTables_$(anRows));
            _fnCallbackFire(oSettings, "aoDrawCallback", "draw", [ oSettings ]);
            oSettings.bSorted = false;
            oSettings.bFiltered = false;
            oSettings.bDrawing = false;
        }
        function _fnReDraw(settings, holdPosition) {
            var features = settings.oFeatures, sort = features.bSort, filter = features.bFilter;
            if (sort) _fnSort(settings);
            if (filter) _fnFilterComplete(settings, settings.oPreviousSearch); else settings.aiDisplay = settings.aiDisplayMaster.slice();
            if (true !== holdPosition) settings._iDisplayStart = 0;
            settings._drawHold = holdPosition;
            _fnDraw(settings);
            settings._drawHold = false;
        }
        function _fnAddOptionsHtml(oSettings) {
            var classes = oSettings.oClasses;
            var table = jquery_dataTables_$(oSettings.nTable);
            var holding = jquery_dataTables_$("<div/>").insertBefore(table);
            var features = oSettings.oFeatures;
            var insert = jquery_dataTables_$("<div/>", {
                id: oSettings.sTableId + "_wrapper",
                class: classes.sWrapper + (oSettings.nTFoot ? "" : " " + classes.sNoFooter)
            });
            oSettings.nHolding = holding[0];
            oSettings.nTableWrapper = insert[0];
            oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
            var aDom = oSettings.sDom.split("");
            var featureNode, cOption, nNewNode, cNext, sAttr, j;
            for (var i = 0; i < aDom.length; i++) {
                featureNode = null;
                cOption = aDom[i];
                if ("<" == cOption) {
                    nNewNode = jquery_dataTables_$("<div/>")[0];
                    cNext = aDom[i + 1];
                    if ("'" == cNext || '"' == cNext) {
                        sAttr = "";
                        j = 2;
                        while (aDom[i + j] != cNext) {
                            sAttr += aDom[i + j];
                            j++;
                        }
                        if ("H" == sAttr) sAttr = classes.sJUIHeader; else if ("F" == sAttr) sAttr = classes.sJUIFooter;
                        if (-1 != sAttr.indexOf(".")) {
                            var aSplit = sAttr.split(".");
                            nNewNode.id = aSplit[0].substr(1, aSplit[0].length - 1);
                            nNewNode.className = aSplit[1];
                        } else if ("#" == sAttr.charAt(0)) nNewNode.id = sAttr.substr(1, sAttr.length - 1); else nNewNode.className = sAttr;
                        i += j;
                    }
                    insert.append(nNewNode);
                    insert = jquery_dataTables_$(nNewNode);
                } else if (">" == cOption) insert = insert.parent(); else if ("l" == cOption && features.bPaginate && features.bLengthChange) featureNode = _fnFeatureHtmlLength(oSettings); else if ("f" == cOption && features.bFilter) featureNode = _fnFeatureHtmlFilter(oSettings); else if ("r" == cOption && features.bProcessing) featureNode = _fnFeatureHtmlProcessing(oSettings); else if ("t" == cOption) featureNode = _fnFeatureHtmlTable(oSettings); else if ("i" == cOption && features.bInfo) featureNode = _fnFeatureHtmlInfo(oSettings); else if ("p" == cOption && features.bPaginate) featureNode = _fnFeatureHtmlPaginate(oSettings); else if (0 !== jquery_dataTables_DataTable.ext.feature.length) {
                    var aoFeatures = jquery_dataTables_DataTable.ext.feature;
                    for (var k = 0, kLen = aoFeatures.length; k < kLen; k++) if (cOption == aoFeatures[k].cFeature) {
                        featureNode = aoFeatures[k].fnInit(oSettings);
                        break;
                    }
                }
                if (featureNode) {
                    var aanFeatures = oSettings.aanFeatures;
                    if (!aanFeatures[cOption]) aanFeatures[cOption] = [];
                    aanFeatures[cOption].push(featureNode);
                    insert.append(featureNode);
                }
            }
            holding.replaceWith(insert);
            oSettings.nHolding = null;
        }
        function _fnDetectHeader(aLayout, nThead) {
            var nTrs = jquery_dataTables_$(nThead).children("tr");
            var nTr, nCell;
            var i, k, l, iLen, iColShifted, iColumn, iColspan, iRowspan;
            var bUnique;
            var fnShiftCol = function(a, i, j) {
                var k = a[i];
                while (k[j]) j++;
                return j;
            };
            aLayout.splice(0, aLayout.length);
            for (i = 0, iLen = nTrs.length; i < iLen; i++) aLayout.push([]);
            for (i = 0, iLen = nTrs.length; i < iLen; i++) {
                nTr = nTrs[i];
                iColumn = 0;
                nCell = nTr.firstChild;
                while (nCell) {
                    if ("TD" == nCell.nodeName.toUpperCase() || "TH" == nCell.nodeName.toUpperCase()) {
                        iColspan = 1 * nCell.getAttribute("colspan");
                        iRowspan = 1 * nCell.getAttribute("rowspan");
                        iColspan = !iColspan || 0 === iColspan || 1 === iColspan ? 1 : iColspan;
                        iRowspan = !iRowspan || 0 === iRowspan || 1 === iRowspan ? 1 : iRowspan;
                        iColShifted = fnShiftCol(aLayout, i, iColumn);
                        bUnique = 1 === iColspan ? true : false;
                        for (l = 0; l < iColspan; l++) for (k = 0; k < iRowspan; k++) {
                            aLayout[i + k][iColShifted + l] = {
                                cell: nCell,
                                unique: bUnique
                            };
                            aLayout[i + k].nTr = nTr;
                        }
                    }
                    nCell = nCell.nextSibling;
                }
            }
        }
        function _fnGetUniqueThs(oSettings, nHeader, aLayout) {
            var aReturn = [];
            if (!aLayout) {
                aLayout = oSettings.aoHeader;
                if (nHeader) {
                    aLayout = [];
                    _fnDetectHeader(aLayout, nHeader);
                }
            }
            for (var i = 0, iLen = aLayout.length; i < iLen; i++) for (var j = 0, jLen = aLayout[i].length; j < jLen; j++) if (aLayout[i][j].unique && (!aReturn[j] || !oSettings.bSortCellsTop)) aReturn[j] = aLayout[i][j].cell;
            return aReturn;
        }
        function _fnStart(oSettings) {
            var bServerSide = "ssp" == _fnDataSource(oSettings);
            var iInitDisplayStart = oSettings.iInitDisplayStart;
            if (void 0 !== iInitDisplayStart && -1 !== iInitDisplayStart) {
                oSettings._iDisplayStart = bServerSide ? iInitDisplayStart : iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : iInitDisplayStart;
                oSettings.iInitDisplayStart = -1;
            }
        }
        function _fnBuildAjax(oSettings, data, fn) {
            _fnCallbackFire(oSettings, "aoServerParams", "serverParams", [ data ]);
            if (data && Array.isArray(data)) {
                var tmp = {};
                var rbracket = /(.*?)\[\]$/;
                jquery_dataTables_$.each(data, (function(key, val) {
                    var match = val.name.match(rbracket);
                    if (match) {
                        var name = match[0];
                        if (!tmp[name]) tmp[name] = [];
                        tmp[name].push(val.value);
                    } else tmp[val.name] = val.value;
                }));
                data = tmp;
            }
            var ajaxData;
            var ajax = oSettings.ajax;
            var instance = oSettings.oInstance;
            var callback = function(json) {
                var status = oSettings.jqXHR ? oSettings.jqXHR.status : null;
                if (null === json || "number" === typeof status && 204 == status) {
                    json = {};
                    _fnAjaxDataSrc(oSettings, json, []);
                }
                var error = json.error || json.sError;
                if (error) _fnLog(oSettings, 0, error);
                oSettings.json = json;
                _fnCallbackFire(oSettings, null, "xhr", [ oSettings, json, oSettings.jqXHR ]);
                fn(json);
            };
            if (jquery_dataTables_$.isPlainObject(ajax) && ajax.data) {
                ajaxData = ajax.data;
                var newData = "function" === typeof ajaxData ? ajaxData(data, oSettings) : ajaxData;
                data = "function" === typeof ajaxData && newData ? newData : jquery_dataTables_$.extend(true, data, newData);
                delete ajax.data;
            }
            var baseAjax = {
                data,
                success: callback,
                dataType: "json",
                cache: false,
                type: oSettings.sServerMethod,
                error: function(xhr, error, thrown) {
                    var ret = _fnCallbackFire(oSettings, null, "xhr", [ oSettings, null, oSettings.jqXHR ]);
                    if (-1 === jquery_dataTables_$.inArray(true, ret)) if ("parsererror" == error) _fnLog(oSettings, 0, "Invalid JSON response", 1); else if (4 === xhr.readyState) _fnLog(oSettings, 0, "Ajax error", 7);
                    _fnProcessingDisplay(oSettings, false);
                }
            };
            oSettings.oAjaxData = data;
            _fnCallbackFire(oSettings, null, "preXhr", [ oSettings, data ]);
            if (oSettings.fnServerData) oSettings.fnServerData.call(instance, oSettings.sAjaxSource, jquery_dataTables_$.map(data, (function(val, key) {
                return {
                    name: key,
                    value: val
                };
            })), callback, oSettings); else if (oSettings.sAjaxSource || "string" === typeof ajax) oSettings.jqXHR = jquery_dataTables_$.ajax(jquery_dataTables_$.extend(baseAjax, {
                url: ajax || oSettings.sAjaxSource
            })); else if ("function" === typeof ajax) oSettings.jqXHR = ajax.call(instance, data, callback, oSettings); else {
                oSettings.jqXHR = jquery_dataTables_$.ajax(jquery_dataTables_$.extend(baseAjax, ajax));
                ajax.data = ajaxData;
            }
        }
        function _fnAjaxUpdate(settings) {
            settings.iDraw++;
            _fnProcessingDisplay(settings, true);
            _fnBuildAjax(settings, _fnAjaxParameters(settings), (function(json) {
                _fnAjaxUpdateDraw(settings, json);
            }));
        }
        function _fnAjaxParameters(settings) {
            var i, dataProp, column, columnSearch, columns = settings.aoColumns, columnCount = columns.length, features = settings.oFeatures, preSearch = settings.oPreviousSearch, preColSearch = settings.aoPreSearchCols, data = [], sort = _fnSortFlatten(settings), displayStart = settings._iDisplayStart, displayLength = false !== features.bPaginate ? settings._iDisplayLength : -1;
            var param = function(name, value) {
                data.push({
                    name,
                    value
                });
            };
            param("sEcho", settings.iDraw);
            param("iColumns", columnCount);
            param("sColumns", _pluck(columns, "sName").join(","));
            param("iDisplayStart", displayStart);
            param("iDisplayLength", displayLength);
            var d = {
                draw: settings.iDraw,
                columns: [],
                order: [],
                start: displayStart,
                length: displayLength,
                search: {
                    value: preSearch.sSearch,
                    regex: preSearch.bRegex
                }
            };
            for (i = 0; i < columnCount; i++) {
                column = columns[i];
                columnSearch = preColSearch[i];
                dataProp = "function" == typeof column.mData ? "function" : column.mData;
                d.columns.push({
                    data: dataProp,
                    name: column.sName,
                    searchable: column.bSearchable,
                    orderable: column.bSortable,
                    search: {
                        value: columnSearch.sSearch,
                        regex: columnSearch.bRegex
                    }
                });
                param("mDataProp_" + i, dataProp);
                if (features.bFilter) {
                    param("sSearch_" + i, columnSearch.sSearch);
                    param("bRegex_" + i, columnSearch.bRegex);
                    param("bSearchable_" + i, column.bSearchable);
                }
                if (features.bSort) param("bSortable_" + i, column.bSortable);
            }
            if (features.bFilter) {
                param("sSearch", preSearch.sSearch);
                param("bRegex", preSearch.bRegex);
            }
            if (features.bSort) {
                jquery_dataTables_$.each(sort, (function(i, val) {
                    d.order.push({
                        column: val.col,
                        dir: val.dir
                    });
                    param("iSortCol_" + i, val.col);
                    param("sSortDir_" + i, val.dir);
                }));
                param("iSortingCols", sort.length);
            }
            var legacy = jquery_dataTables_DataTable.ext.legacy.ajax;
            if (null === legacy) return settings.sAjaxSource ? data : d;
            return legacy ? data : d;
        }
        function _fnAjaxUpdateDraw(settings, json) {
            var compat = function(old, modern) {
                return void 0 !== json[old] ? json[old] : json[modern];
            };
            var data = _fnAjaxDataSrc(settings, json);
            var draw = compat("sEcho", "draw");
            var recordsTotal = compat("iTotalRecords", "recordsTotal");
            var recordsFiltered = compat("iTotalDisplayRecords", "recordsFiltered");
            if (void 0 !== draw) {
                if (1 * draw < settings.iDraw) return;
                settings.iDraw = 1 * draw;
            }
            if (!data) data = [];
            _fnClearTable(settings);
            settings._iRecordsTotal = parseInt(recordsTotal, 10);
            settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
            for (var i = 0, ien = data.length; i < ien; i++) _fnAddData(settings, data[i]);
            settings.aiDisplay = settings.aiDisplayMaster.slice();
            _fnDraw(settings, true);
            if (!settings._bInitComplete) _fnInitComplete(settings, json);
            _fnProcessingDisplay(settings, false);
        }
        function _fnAjaxDataSrc(oSettings, json, write) {
            var dataSrc = jquery_dataTables_$.isPlainObject(oSettings.ajax) && void 0 !== oSettings.ajax.dataSrc ? oSettings.ajax.dataSrc : oSettings.sAjaxDataProp;
            if (!write) {
                if ("data" === dataSrc) return json.aaData || json[dataSrc];
                return "" !== dataSrc ? _fnGetObjectDataFn(dataSrc)(json) : json;
            }
            _fnSetObjectDataFn(dataSrc)(json, write);
        }
        function _fnFeatureHtmlFilter(settings) {
            var classes = settings.oClasses;
            var tableId = settings.sTableId;
            var language = settings.oLanguage;
            var previousSearch = settings.oPreviousSearch;
            var features = settings.aanFeatures;
            var input = '<input type="search" class="' + classes.sFilterInput + '"/>';
            var str = language.sSearch;
            str = str.match(/_INPUT_/) ? str.replace("_INPUT_", input) : str + input;
            var filter = jquery_dataTables_$("<div/>", {
                id: !features.f ? tableId + "_filter" : null,
                class: classes.sFilter
            }).append(jquery_dataTables_$("<label/>").append(str));
            var searchFn = function(event) {
                features.f;
                var val = !this.value ? "" : this.value;
                if (previousSearch.return && "Enter" !== event.key) return;
                if (val != previousSearch.sSearch) {
                    _fnFilterComplete(settings, {
                        sSearch: val,
                        bRegex: previousSearch.bRegex,
                        bSmart: previousSearch.bSmart,
                        bCaseInsensitive: previousSearch.bCaseInsensitive,
                        return: previousSearch.return
                    });
                    settings._iDisplayStart = 0;
                    _fnDraw(settings);
                }
            };
            var searchDelay = null !== settings.searchDelay ? settings.searchDelay : "ssp" === _fnDataSource(settings) ? 400 : 0;
            var jqFilter = jquery_dataTables_$("input", filter).val(previousSearch.sSearch).attr("placeholder", language.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", searchDelay ? _fnThrottle(searchFn, searchDelay) : searchFn).on("mouseup", (function(e) {
                setTimeout((function() {
                    searchFn.call(jqFilter[0], e);
                }), 10);
            })).on("keypress.DT", (function(e) {
                if (13 == e.keyCode) return false;
            })).attr("aria-controls", tableId);
            jquery_dataTables_$(settings.nTable).on("search.dt.DT", (function(ev, s) {
                if (settings === s) try {
                    if (jqFilter[0] !== document.activeElement) jqFilter.val(previousSearch.sSearch);
                } catch (e) {}
            }));
            return filter[0];
        }
        function _fnFilterComplete(oSettings, oInput, iForce) {
            var oPrevSearch = oSettings.oPreviousSearch;
            var aoPrevSearch = oSettings.aoPreSearchCols;
            var fnSaveFilter = function(oFilter) {
                oPrevSearch.sSearch = oFilter.sSearch;
                oPrevSearch.bRegex = oFilter.bRegex;
                oPrevSearch.bSmart = oFilter.bSmart;
                oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
                oPrevSearch.return = oFilter.return;
            };
            var fnRegex = function(o) {
                return void 0 !== o.bEscapeRegex ? !o.bEscapeRegex : o.bRegex;
            };
            _fnColumnTypes(oSettings);
            if ("ssp" != _fnDataSource(oSettings)) {
                _fnFilter(oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive, oInput.return);
                fnSaveFilter(oInput);
                for (var i = 0; i < aoPrevSearch.length; i++) _fnFilterColumn(oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]), aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive);
                _fnFilterCustom(oSettings);
            } else fnSaveFilter(oInput);
            oSettings.bFiltered = true;
            _fnCallbackFire(oSettings, null, "search", [ oSettings ]);
        }
        function _fnFilterCustom(settings) {
            var filters = jquery_dataTables_DataTable.ext.search;
            var displayRows = settings.aiDisplay;
            var row, rowIdx;
            for (var i = 0, ien = filters.length; i < ien; i++) {
                var rows = [];
                for (var j = 0, jen = displayRows.length; j < jen; j++) {
                    rowIdx = displayRows[j];
                    row = settings.aoData[rowIdx];
                    if (filters[i](settings, row._aFilterData, rowIdx, row._aData, j)) rows.push(rowIdx);
                }
                displayRows.length = 0;
                jquery_dataTables_$.merge(displayRows, rows);
            }
        }
        function _fnFilterColumn(settings, searchStr, colIdx, regex, smart, caseInsensitive) {
            if ("" === searchStr) return;
            var data;
            var out = [];
            var display = settings.aiDisplay;
            var rpSearch = _fnFilterCreateSearch(searchStr, regex, smart, caseInsensitive);
            for (var i = 0; i < display.length; i++) {
                data = settings.aoData[display[i]]._aFilterData[colIdx];
                if (rpSearch.test(data)) out.push(display[i]);
            }
            settings.aiDisplay = out;
        }
        function _fnFilter(settings, input, force, regex, smart, caseInsensitive) {
            var rpSearch = _fnFilterCreateSearch(input, regex, smart, caseInsensitive);
            var prevSearch = settings.oPreviousSearch.sSearch;
            var displayMaster = settings.aiDisplayMaster;
            var display, invalidated, i;
            var filtered = [];
            if (0 !== jquery_dataTables_DataTable.ext.search.length) force = true;
            invalidated = _fnFilterData(settings);
            if (input.length <= 0) settings.aiDisplay = displayMaster.slice(); else {
                if (invalidated || force || regex || prevSearch.length > input.length || 0 !== input.indexOf(prevSearch) || settings.bSorted) settings.aiDisplay = displayMaster.slice();
                display = settings.aiDisplay;
                for (i = 0; i < display.length; i++) if (rpSearch.test(settings.aoData[display[i]]._sFilterRow)) filtered.push(display[i]);
                settings.aiDisplay = filtered;
            }
        }
        function _fnFilterCreateSearch(search, regex, smart, caseInsensitive) {
            search = regex ? search : _fnEscapeRegex(search);
            if (smart) {
                var a = jquery_dataTables_$.map(search.match(/"[^"]+"|[^ ]+/g) || [ "" ], (function(word) {
                    if ('"' === word.charAt(0)) {
                        var m = word.match(/^"(.*)"$/);
                        word = m ? m[1] : word;
                    }
                    return word.replace('"', "");
                }));
                search = "^(?=.*?" + a.join(")(?=.*?") + ").*$";
            }
            return new RegExp(search, caseInsensitive ? "i" : "");
        }
        var _fnEscapeRegex = jquery_dataTables_DataTable.util.escapeRegex;
        var __filter_div = jquery_dataTables_$("<div>")[0];
        var __filter_div_textContent = void 0 !== __filter_div.textContent;
        function _fnFilterData(settings) {
            var columns = settings.aoColumns;
            var column;
            var i, j, ien, jen, filterData, cellData, row;
            var wasInvalidated = false;
            for (i = 0, ien = settings.aoData.length; i < ien; i++) {
                row = settings.aoData[i];
                if (!row._aFilterData) {
                    filterData = [];
                    for (j = 0, jen = columns.length; j < jen; j++) {
                        column = columns[j];
                        if (column.bSearchable) {
                            cellData = _fnGetCellData(settings, i, j, "filter");
                            if (null === cellData) cellData = "";
                            if ("string" !== typeof cellData && cellData.toString) cellData = cellData.toString();
                        } else cellData = "";
                        if (cellData.indexOf && -1 !== cellData.indexOf("&")) {
                            __filter_div.innerHTML = cellData;
                            cellData = __filter_div_textContent ? __filter_div.textContent : __filter_div.innerText;
                        }
                        if (cellData.replace) cellData = cellData.replace(/[\r\n\u2028]/g, "");
                        filterData.push(cellData);
                    }
                    row._aFilterData = filterData;
                    row._sFilterRow = filterData.join("  ");
                    wasInvalidated = true;
                }
            }
            return wasInvalidated;
        }
        function _fnSearchToCamel(obj) {
            return {
                search: obj.sSearch,
                smart: obj.bSmart,
                regex: obj.bRegex,
                caseInsensitive: obj.bCaseInsensitive
            };
        }
        function _fnSearchToHung(obj) {
            return {
                sSearch: obj.search,
                bSmart: obj.smart,
                bRegex: obj.regex,
                bCaseInsensitive: obj.caseInsensitive
            };
        }
        function _fnFeatureHtmlInfo(settings) {
            var tid = settings.sTableId, nodes = settings.aanFeatures.i, n = jquery_dataTables_$("<div/>", {
                class: settings.oClasses.sInfo,
                id: !nodes ? tid + "_info" : null
            });
            if (!nodes) {
                settings.aoDrawCallback.push({
                    fn: _fnUpdateInfo,
                    sName: "information"
                });
                n.attr("role", "status").attr("aria-live", "polite");
                jquery_dataTables_$(settings.nTable).attr("aria-describedby", tid + "_info");
            }
            return n[0];
        }
        function _fnUpdateInfo(settings) {
            var nodes = settings.aanFeatures.i;
            if (0 === nodes.length) return;
            var lang = settings.oLanguage, start = settings._iDisplayStart + 1, end = settings.fnDisplayEnd(), max = settings.fnRecordsTotal(), total = settings.fnRecordsDisplay(), out = total ? lang.sInfo : lang.sInfoEmpty;
            if (total !== max) out += " " + lang.sInfoFiltered;
            out += lang.sInfoPostFix;
            out = _fnInfoMacros(settings, out);
            var callback = lang.fnInfoCallback;
            if (null !== callback) out = callback.call(settings.oInstance, settings, start, end, max, total, out);
            jquery_dataTables_$(nodes).html(out);
        }
        function _fnInfoMacros(settings, str) {
            var formatter = settings.fnFormatNumber, start = settings._iDisplayStart + 1, len = settings._iDisplayLength, vis = settings.fnRecordsDisplay(), all = -1 === len;
            return str.replace(/_START_/g, formatter.call(settings, start)).replace(/_END_/g, formatter.call(settings, settings.fnDisplayEnd())).replace(/_MAX_/g, formatter.call(settings, settings.fnRecordsTotal())).replace(/_TOTAL_/g, formatter.call(settings, vis)).replace(/_PAGE_/g, formatter.call(settings, all ? 1 : Math.ceil(start / len))).replace(/_PAGES_/g, formatter.call(settings, all ? 1 : Math.ceil(vis / len)));
        }
        function _fnInitialise(settings) {
            var i, iLen, iAjaxStart = settings.iInitDisplayStart;
            var column, columns = settings.aoColumns;
            var features = settings.oFeatures;
            var deferLoading = settings.bDeferLoading;
            if (!settings.bInitialised) {
                setTimeout((function() {
                    _fnInitialise(settings);
                }), 200);
                return;
            }
            _fnAddOptionsHtml(settings);
            _fnBuildHead(settings);
            _fnDrawHead(settings, settings.aoHeader);
            _fnDrawHead(settings, settings.aoFooter);
            _fnProcessingDisplay(settings, true);
            if (features.bAutoWidth) _fnCalculateColumnWidths(settings);
            for (i = 0, iLen = columns.length; i < iLen; i++) {
                column = columns[i];
                if (column.sWidth) column.nTh.style.width = _fnStringToCss(column.sWidth);
            }
            _fnCallbackFire(settings, null, "preInit", [ settings ]);
            _fnReDraw(settings);
            var dataSrc = _fnDataSource(settings);
            if ("ssp" != dataSrc || deferLoading) if ("ajax" == dataSrc) _fnBuildAjax(settings, [], (function(json) {
                var aData = _fnAjaxDataSrc(settings, json);
                for (i = 0; i < aData.length; i++) _fnAddData(settings, aData[i]);
                settings.iInitDisplayStart = iAjaxStart;
                _fnReDraw(settings);
                _fnProcessingDisplay(settings, false);
                _fnInitComplete(settings, json);
            }), settings); else {
                _fnProcessingDisplay(settings, false);
                _fnInitComplete(settings);
            }
        }
        function _fnInitComplete(settings, json) {
            settings._bInitComplete = true;
            if (json || settings.oInit.aaData) _fnAdjustColumnSizing(settings);
            _fnCallbackFire(settings, null, "plugin-init", [ settings, json ]);
            _fnCallbackFire(settings, "aoInitComplete", "init", [ settings, json ]);
        }
        function _fnLengthChange(settings, val) {
            var len = parseInt(val, 10);
            settings._iDisplayLength = len;
            _fnLengthOverflow(settings);
            _fnCallbackFire(settings, null, "length", [ settings, len ]);
        }
        function _fnFeatureHtmlLength(settings) {
            var classes = settings.oClasses, tableId = settings.sTableId, menu = settings.aLengthMenu, d2 = Array.isArray(menu[0]), lengths = d2 ? menu[0] : menu, language = d2 ? menu[1] : menu;
            var select = jquery_dataTables_$("<select/>", {
                name: tableId + "_length",
                "aria-controls": tableId,
                class: classes.sLengthSelect
            });
            for (var i = 0, ien = lengths.length; i < ien; i++) select[0][i] = new Option("number" === typeof language[i] ? settings.fnFormatNumber(language[i]) : language[i], lengths[i]);
            var div = jquery_dataTables_$("<div><label/></div>").addClass(classes.sLength);
            if (!settings.aanFeatures.l) div[0].id = tableId + "_length";
            div.children().append(settings.oLanguage.sLengthMenu.replace("_MENU_", select[0].outerHTML));
            jquery_dataTables_$("select", div).val(settings._iDisplayLength).on("change.DT", (function(e) {
                _fnLengthChange(settings, jquery_dataTables_$(this).val());
                _fnDraw(settings);
            }));
            jquery_dataTables_$(settings.nTable).on("length.dt.DT", (function(e, s, len) {
                if (settings === s) jquery_dataTables_$("select", div).val(len);
            }));
            return div[0];
        }
        function _fnFeatureHtmlPaginate(settings) {
            var type = settings.sPaginationType, plugin = jquery_dataTables_DataTable.ext.pager[type], modern = "function" === typeof plugin, redraw = function(settings) {
                _fnDraw(settings);
            }, node = jquery_dataTables_$("<div/>").addClass(settings.oClasses.sPaging + type)[0], features = settings.aanFeatures;
            if (!modern) plugin.fnInit(settings, node, redraw);
            if (!features.p) {
                node.id = settings.sTableId + "_paginate";
                settings.aoDrawCallback.push({
                    fn: function(settings) {
                        if (modern) {
                            var i, ien, start = settings._iDisplayStart, len = settings._iDisplayLength, visRecords = settings.fnRecordsDisplay(), all = -1 === len, page = all ? 0 : Math.ceil(start / len), pages = all ? 1 : Math.ceil(visRecords / len), buttons = plugin(page, pages);
                            for (i = 0, ien = features.p.length; i < ien; i++) _fnRenderer(settings, "pageButton")(settings, features.p[i], i, buttons, page, pages);
                        } else plugin.fnUpdate(settings, redraw);
                    },
                    sName: "pagination"
                });
            }
            return node;
        }
        function _fnPageChange(settings, action, redraw) {
            var start = settings._iDisplayStart, len = settings._iDisplayLength, records = settings.fnRecordsDisplay();
            if (0 === records || -1 === len) start = 0; else if ("number" === typeof action) {
                start = action * len;
                if (start > records) start = 0;
            } else if ("first" == action) start = 0; else if ("previous" == action) {
                start = len >= 0 ? start - len : 0;
                if (start < 0) start = 0;
            } else if ("next" == action) {
                if (start + len < records) start += len;
            } else if ("last" == action) start = Math.floor((records - 1) / len) * len; else _fnLog(settings, 0, "Unknown paging action: " + action, 5);
            var changed = settings._iDisplayStart !== start;
            settings._iDisplayStart = start;
            if (changed) {
                _fnCallbackFire(settings, null, "page", [ settings ]);
                if (redraw) _fnDraw(settings);
            } else _fnCallbackFire(settings, null, "page-nc", [ settings ]);
            return changed;
        }
        function _fnFeatureHtmlProcessing(settings) {
            return jquery_dataTables_$("<div/>", {
                id: !settings.aanFeatures.r ? settings.sTableId + "_processing" : null,
                class: settings.oClasses.sProcessing
            }).html(settings.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(settings.nTable)[0];
        }
        function _fnProcessingDisplay(settings, show) {
            if (settings.oFeatures.bProcessing) jquery_dataTables_$(settings.aanFeatures.r).css("display", show ? "block" : "none");
            _fnCallbackFire(settings, null, "processing", [ settings, show ]);
        }
        function _fnFeatureHtmlTable(settings) {
            var table = jquery_dataTables_$(settings.nTable);
            var scroll = settings.oScroll;
            if ("" === scroll.sX && "" === scroll.sY) return settings.nTable;
            var scrollX = scroll.sX;
            var scrollY = scroll.sY;
            var classes = settings.oClasses;
            var caption = table.children("caption");
            var captionSide = caption.length ? caption[0]._captionSide : null;
            var headerClone = jquery_dataTables_$(table[0].cloneNode(false));
            var footerClone = jquery_dataTables_$(table[0].cloneNode(false));
            var footer = table.children("tfoot");
            var _div = "<div/>";
            var size = function(s) {
                return !s ? null : _fnStringToCss(s);
            };
            if (!footer.length) footer = null;
            var scroller = jquery_dataTables_$(_div, {
                class: classes.sScrollWrapper
            }).append(jquery_dataTables_$(_div, {
                class: classes.sScrollHead
            }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: scrollX ? size(scrollX) : "100%"
            }).append(jquery_dataTables_$(_div, {
                class: classes.sScrollHeadInner
            }).css({
                "box-sizing": "content-box",
                width: scroll.sXInner || "100%"
            }).append(headerClone.removeAttr("id").css("margin-left", 0).append("top" === captionSide ? caption : null).append(table.children("thead"))))).append(jquery_dataTables_$(_div, {
                class: classes.sScrollBody
            }).css({
                position: "relative",
                overflow: "auto",
                width: size(scrollX)
            }).append(table));
            if (footer) scroller.append(jquery_dataTables_$(_div, {
                class: classes.sScrollFoot
            }).css({
                overflow: "hidden",
                border: 0,
                width: scrollX ? size(scrollX) : "100%"
            }).append(jquery_dataTables_$(_div, {
                class: classes.sScrollFootInner
            }).append(footerClone.removeAttr("id").css("margin-left", 0).append("bottom" === captionSide ? caption : null).append(table.children("tfoot")))));
            var children = scroller.children();
            var scrollHead = children[0];
            var scrollBody = children[1];
            var scrollFoot = footer ? children[2] : null;
            if (scrollX) jquery_dataTables_$(scrollBody).on("scroll.DT", (function(e) {
                var scrollLeft = this.scrollLeft;
                scrollHead.scrollLeft = scrollLeft;
                if (footer) scrollFoot.scrollLeft = scrollLeft;
            }));
            jquery_dataTables_$(scrollBody).css("max-height", scrollY);
            if (!scroll.bCollapse) jquery_dataTables_$(scrollBody).css("height", scrollY);
            settings.nScrollHead = scrollHead;
            settings.nScrollBody = scrollBody;
            settings.nScrollFoot = scrollFoot;
            settings.aoDrawCallback.push({
                fn: _fnScrollDraw,
                sName: "scrolling"
            });
            return scroller[0];
        }
        function _fnScrollDraw(settings) {
            var headerTrgEls, footerTrgEls, headerSrcEls, footerSrcEls, headerCopy, footerCopy, idx, correction, sanityWidth, scroll = settings.oScroll, scrollX = scroll.sX, scrollXInner = scroll.sXInner, scrollY = scroll.sY, barWidth = scroll.iBarWidth, divHeader = jquery_dataTables_$(settings.nScrollHead), divHeaderStyle = divHeader[0].style, divHeaderInner = divHeader.children("div"), divHeaderInnerStyle = divHeaderInner[0].style, divHeaderTable = divHeaderInner.children("table"), divBodyEl = settings.nScrollBody, divBody = jquery_dataTables_$(divBodyEl), divBodyStyle = divBodyEl.style, divFooter = jquery_dataTables_$(settings.nScrollFoot), divFooterInner = divFooter.children("div"), divFooterTable = divFooterInner.children("table"), header = jquery_dataTables_$(settings.nTHead), table = jquery_dataTables_$(settings.nTable), tableEl = table[0], tableStyle = tableEl.style, footer = settings.nTFoot ? jquery_dataTables_$(settings.nTFoot) : null, browser = settings.oBrowser, ie67 = browser.bScrollOversize, headerWidths = (_pluck(settings.aoColumns, "nTh"), 
            []), footerWidths = [], headerContent = [], footerContent = [], zeroOut = function(nSizer) {
                var style = nSizer.style;
                style.paddingTop = "0";
                style.paddingBottom = "0";
                style.borderTopWidth = "0";
                style.borderBottomWidth = "0";
                style.height = 0;
            };
            var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
            if (settings.scrollBarVis !== scrollBarVis && void 0 !== settings.scrollBarVis) {
                settings.scrollBarVis = scrollBarVis;
                _fnAdjustColumnSizing(settings);
                return;
            } else settings.scrollBarVis = scrollBarVis;
            table.children("thead, tfoot").remove();
            if (footer) {
                footerCopy = footer.clone().prependTo(table);
                footerTrgEls = footer.find("tr");
                footerSrcEls = footerCopy.find("tr");
                footerCopy.find("[id]").removeAttr("id");
            }
            headerCopy = header.clone().prependTo(table);
            headerTrgEls = header.find("tr");
            headerSrcEls = headerCopy.find("tr");
            headerCopy.find("th, td").removeAttr("tabindex");
            headerCopy.find("[id]").removeAttr("id");
            if (!scrollX) {
                divBodyStyle.width = "100%";
                divHeader[0].style.width = "100%";
            }
            jquery_dataTables_$.each(_fnGetUniqueThs(settings, headerCopy), (function(i, el) {
                idx = _fnVisibleToColumnIndex(settings, i);
                el.style.width = settings.aoColumns[idx].sWidth;
            }));
            if (footer) _fnApplyToChildren((function(n) {
                n.style.width = "";
            }), footerSrcEls);
            sanityWidth = table.outerWidth();
            if ("" === scrollX) {
                tableStyle.width = "100%";
                if (ie67 && (table.find("tbody").height() > divBodyEl.offsetHeight || "scroll" == divBody.css("overflow-y"))) tableStyle.width = _fnStringToCss(table.outerWidth() - barWidth);
                sanityWidth = table.outerWidth();
            } else if ("" !== scrollXInner) {
                tableStyle.width = _fnStringToCss(scrollXInner);
                sanityWidth = table.outerWidth();
            }
            _fnApplyToChildren(zeroOut, headerSrcEls);
            _fnApplyToChildren((function(nSizer) {
                var style = window.getComputedStyle ? window.getComputedStyle(nSizer).width : _fnStringToCss(jquery_dataTables_$(nSizer).width());
                headerContent.push(nSizer.innerHTML);
                headerWidths.push(style);
            }), headerSrcEls);
            _fnApplyToChildren((function(nToSize, i) {
                nToSize.style.width = headerWidths[i];
            }), headerTrgEls);
            jquery_dataTables_$(headerSrcEls).css("height", 0);
            if (footer) {
                _fnApplyToChildren(zeroOut, footerSrcEls);
                _fnApplyToChildren((function(nSizer) {
                    footerContent.push(nSizer.innerHTML);
                    footerWidths.push(_fnStringToCss(jquery_dataTables_$(nSizer).css("width")));
                }), footerSrcEls);
                _fnApplyToChildren((function(nToSize, i) {
                    nToSize.style.width = footerWidths[i];
                }), footerTrgEls);
                jquery_dataTables_$(footerSrcEls).height(0);
            }
            _fnApplyToChildren((function(nSizer, i) {
                nSizer.innerHTML = '<div class="dataTables_sizing">' + headerContent[i] + "</div>";
                nSizer.childNodes[0].style.height = "0";
                nSizer.childNodes[0].style.overflow = "hidden";
                nSizer.style.width = headerWidths[i];
            }), headerSrcEls);
            if (footer) _fnApplyToChildren((function(nSizer, i) {
                nSizer.innerHTML = '<div class="dataTables_sizing">' + footerContent[i] + "</div>";
                nSizer.childNodes[0].style.height = "0";
                nSizer.childNodes[0].style.overflow = "hidden";
                nSizer.style.width = footerWidths[i];
            }), footerSrcEls);
            if (Math.round(table.outerWidth()) < Math.round(sanityWidth)) {
                correction = divBodyEl.scrollHeight > divBodyEl.offsetHeight || "scroll" == divBody.css("overflow-y") ? sanityWidth + barWidth : sanityWidth;
                if (ie67 && (divBodyEl.scrollHeight > divBodyEl.offsetHeight || "scroll" == divBody.css("overflow-y"))) tableStyle.width = _fnStringToCss(correction - barWidth);
                if ("" === scrollX || "" !== scrollXInner) _fnLog(settings, 1, "Possible column misalignment", 6);
            } else correction = "100%";
            divBodyStyle.width = _fnStringToCss(correction);
            divHeaderStyle.width = _fnStringToCss(correction);
            if (footer) settings.nScrollFoot.style.width = _fnStringToCss(correction);
            if (!scrollY) if (ie67) divBodyStyle.height = _fnStringToCss(tableEl.offsetHeight + barWidth);
            var iOuterWidth = table.outerWidth();
            divHeaderTable[0].style.width = _fnStringToCss(iOuterWidth);
            divHeaderInnerStyle.width = _fnStringToCss(iOuterWidth);
            var bScrolling = table.height() > divBodyEl.clientHeight || "scroll" == divBody.css("overflow-y");
            var padding = "padding" + (browser.bScrollbarLeft ? "Left" : "Right");
            divHeaderInnerStyle[padding] = bScrolling ? barWidth + "px" : "0px";
            if (footer) {
                divFooterTable[0].style.width = _fnStringToCss(iOuterWidth);
                divFooterInner[0].style.width = _fnStringToCss(iOuterWidth);
                divFooterInner[0].style[padding] = bScrolling ? barWidth + "px" : "0px";
            }
            table.children("colgroup").insertBefore(table.children("thead"));
            divBody.trigger("scroll");
            if ((settings.bSorted || settings.bFiltered) && !settings._drawHold) divBodyEl.scrollTop = 0;
        }
        function _fnApplyToChildren(fn, an1, an2) {
            var index = 0, i = 0, iLen = an1.length;
            var nNode1, nNode2;
            while (i < iLen) {
                nNode1 = an1[i].firstChild;
                nNode2 = an2 ? an2[i].firstChild : null;
                while (nNode1) {
                    if (1 === nNode1.nodeType) {
                        if (an2) fn(nNode1, nNode2, index); else fn(nNode1, index);
                        index++;
                    }
                    nNode1 = nNode1.nextSibling;
                    nNode2 = an2 ? nNode2.nextSibling : null;
                }
                i++;
            }
        }
        var __re_html_remove = /<.*?>/g;
        function _fnCalculateColumnWidths(oSettings) {
            var i, column, columnIdx, table = oSettings.nTable, columns = oSettings.aoColumns, scroll = oSettings.oScroll, scrollY = scroll.sY, scrollX = scroll.sX, scrollXInner = scroll.sXInner, columnCount = columns.length, visibleColumns = _fnGetColumns(oSettings, "bVisible"), headerCells = jquery_dataTables_$("th", oSettings.nTHead), tableWidthAttr = table.getAttribute("width"), tableContainer = table.parentNode, userInputs = false, browser = oSettings.oBrowser, ie67 = browser.bScrollOversize;
            var styleWidth = table.style.width;
            if (styleWidth && -1 !== styleWidth.indexOf("%")) tableWidthAttr = styleWidth;
            for (i = 0; i < visibleColumns.length; i++) {
                column = columns[visibleColumns[i]];
                if (null !== column.sWidth) {
                    column.sWidth = _fnConvertToWidth(column.sWidthOrig, tableContainer);
                    userInputs = true;
                }
            }
            if (ie67 || !userInputs && !scrollX && !scrollY && columnCount == _fnVisbleColumns(oSettings) && columnCount == headerCells.length) for (i = 0; i < columnCount; i++) {
                var colIdx = _fnVisibleToColumnIndex(oSettings, i);
                if (null !== colIdx) columns[colIdx].sWidth = _fnStringToCss(headerCells.eq(i).width());
            } else {
                var tmpTable = jquery_dataTables_$(table).clone().css("visibility", "hidden").removeAttr("id");
                tmpTable.find("tbody tr").remove();
                var tr = jquery_dataTables_$("<tr/>").appendTo(tmpTable.find("tbody"));
                tmpTable.find("thead, tfoot").remove();
                tmpTable.append(jquery_dataTables_$(oSettings.nTHead).clone()).append(jquery_dataTables_$(oSettings.nTFoot).clone());
                tmpTable.find("tfoot th, tfoot td").css("width", "");
                headerCells = _fnGetUniqueThs(oSettings, tmpTable.find("thead")[0]);
                for (i = 0; i < visibleColumns.length; i++) {
                    column = columns[visibleColumns[i]];
                    headerCells[i].style.width = null !== column.sWidthOrig && "" !== column.sWidthOrig ? _fnStringToCss(column.sWidthOrig) : "";
                    if (column.sWidthOrig && scrollX) jquery_dataTables_$(headerCells[i]).append(jquery_dataTables_$("<div/>").css({
                        width: column.sWidthOrig,
                        margin: 0,
                        padding: 0,
                        border: 0,
                        height: 1
                    }));
                }
                if (oSettings.aoData.length) for (i = 0; i < visibleColumns.length; i++) {
                    columnIdx = visibleColumns[i];
                    column = columns[columnIdx];
                    jquery_dataTables_$(_fnGetWidestNode(oSettings, columnIdx)).clone(false).append(column.sContentPadding).appendTo(tr);
                }
                jquery_dataTables_$("[name]", tmpTable).removeAttr("name");
                var holder = jquery_dataTables_$("<div/>").css(scrollX || scrollY ? {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 1,
                    right: 0,
                    overflow: "hidden"
                } : {}).append(tmpTable).appendTo(tableContainer);
                if (scrollX && scrollXInner) tmpTable.width(scrollXInner); else if (scrollX) {
                    tmpTable.css("width", "auto");
                    tmpTable.removeAttr("width");
                    if (tmpTable.width() < tableContainer.clientWidth && tableWidthAttr) tmpTable.width(tableContainer.clientWidth);
                } else if (scrollY) tmpTable.width(tableContainer.clientWidth); else if (tableWidthAttr) tmpTable.width(tableWidthAttr);
                var total = 0;
                for (i = 0; i < visibleColumns.length; i++) {
                    var cell = jquery_dataTables_$(headerCells[i]);
                    var border = cell.outerWidth() - cell.width();
                    var bounding = browser.bBounding ? Math.ceil(headerCells[i].getBoundingClientRect().width) : cell.outerWidth();
                    total += bounding;
                    columns[visibleColumns[i]].sWidth = _fnStringToCss(bounding - border);
                }
                table.style.width = _fnStringToCss(total);
                holder.remove();
            }
            if (tableWidthAttr) table.style.width = _fnStringToCss(tableWidthAttr);
            if ((tableWidthAttr || scrollX) && !oSettings._reszEvt) {
                var bindResize = function() {
                    jquery_dataTables_$(window).on("resize.DT-" + oSettings.sInstance, _fnThrottle((function() {
                        _fnAdjustColumnSizing(oSettings);
                    })));
                };
                if (ie67) setTimeout(bindResize, 1e3); else bindResize();
                oSettings._reszEvt = true;
            }
        }
        var _fnThrottle = jquery_dataTables_DataTable.util.throttle;
        function _fnConvertToWidth(width, parent) {
            if (!width) return 0;
            var n = jquery_dataTables_$("<div/>").css("width", _fnStringToCss(width)).appendTo(parent || document.body);
            var val = n[0].offsetWidth;
            n.remove();
            return val;
        }
        function _fnGetWidestNode(settings, colIdx) {
            var idx = _fnGetMaxLenString(settings, colIdx);
            if (idx < 0) return null;
            var data = settings.aoData[idx];
            return !data.nTr ? jquery_dataTables_$("<td/>").html(_fnGetCellData(settings, idx, colIdx, "display"))[0] : data.anCells[colIdx];
        }
        function _fnGetMaxLenString(settings, colIdx) {
            var s, max = -1, maxIdx = -1;
            for (var i = 0, ien = settings.aoData.length; i < ien; i++) {
                s = _fnGetCellData(settings, i, colIdx, "display") + "";
                s = s.replace(__re_html_remove, "");
                s = s.replace(/&nbsp;/g, " ");
                if (s.length > max) {
                    max = s.length;
                    maxIdx = i;
                }
            }
            return maxIdx;
        }
        function _fnStringToCss(s) {
            if (null === s) return "0px";
            if ("number" == typeof s) return s < 0 ? "0px" : s + "px";
            return s.match(/\d$/) ? s + "px" : s;
        }
        function _fnSortFlatten(settings) {
            var i, k, kLen, aDataSort, iCol, sType, srcCol, aSort = [], aoColumns = settings.aoColumns, fixed = settings.aaSortingFixed, fixedObj = jquery_dataTables_$.isPlainObject(fixed), nestedSort = [], add = function(a) {
                if (a.length && !Array.isArray(a[0])) nestedSort.push(a); else jquery_dataTables_$.merge(nestedSort, a);
            };
            if (Array.isArray(fixed)) add(fixed);
            if (fixedObj && fixed.pre) add(fixed.pre);
            add(settings.aaSorting);
            if (fixedObj && fixed.post) add(fixed.post);
            for (i = 0; i < nestedSort.length; i++) {
                srcCol = nestedSort[i][0];
                aDataSort = aoColumns[srcCol].aDataSort;
                for (k = 0, kLen = aDataSort.length; k < kLen; k++) {
                    iCol = aDataSort[k];
                    sType = aoColumns[iCol].sType || "string";
                    if (void 0 === nestedSort[i]._idx) nestedSort[i]._idx = jquery_dataTables_$.inArray(nestedSort[i][1], aoColumns[iCol].asSorting);
                    aSort.push({
                        src: srcCol,
                        col: iCol,
                        dir: nestedSort[i][1],
                        index: nestedSort[i]._idx,
                        type: sType,
                        formatter: jquery_dataTables_DataTable.ext.type.order[sType + "-pre"]
                    });
                }
            }
            return aSort;
        }
        function _fnSort(oSettings) {
            var i, ien, iLen, sortCol, aSort, aiOrig = [], oExtSort = jquery_dataTables_DataTable.ext.type.order, aoData = oSettings.aoData, formatters = (oSettings.aoColumns, 
            0), displayMaster = oSettings.aiDisplayMaster;
            _fnColumnTypes(oSettings);
            aSort = _fnSortFlatten(oSettings);
            for (i = 0, ien = aSort.length; i < ien; i++) {
                sortCol = aSort[i];
                if (sortCol.formatter) formatters++;
                _fnSortData(oSettings, sortCol.col);
            }
            if ("ssp" != _fnDataSource(oSettings) && 0 !== aSort.length) {
                for (i = 0, iLen = displayMaster.length; i < iLen; i++) aiOrig[displayMaster[i]] = i;
                if (formatters === aSort.length) displayMaster.sort((function(a, b) {
                    var x, y, k, test, sort, len = aSort.length, dataA = aoData[a]._aSortData, dataB = aoData[b]._aSortData;
                    for (k = 0; k < len; k++) {
                        sort = aSort[k];
                        x = dataA[sort.col];
                        y = dataB[sort.col];
                        test = x < y ? -1 : x > y ? 1 : 0;
                        if (0 !== test) return "asc" === sort.dir ? test : -test;
                    }
                    x = aiOrig[a];
                    y = aiOrig[b];
                    return x < y ? -1 : x > y ? 1 : 0;
                })); else displayMaster.sort((function(a, b) {
                    var x, y, k, test, sort, fn, len = aSort.length, dataA = aoData[a]._aSortData, dataB = aoData[b]._aSortData;
                    for (k = 0; k < len; k++) {
                        sort = aSort[k];
                        x = dataA[sort.col];
                        y = dataB[sort.col];
                        fn = oExtSort[sort.type + "-" + sort.dir] || oExtSort["string-" + sort.dir];
                        test = fn(x, y);
                        if (0 !== test) return test;
                    }
                    x = aiOrig[a];
                    y = aiOrig[b];
                    return x < y ? -1 : x > y ? 1 : 0;
                }));
            }
            oSettings.bSorted = true;
        }
        function _fnSortAria(settings) {
            var label;
            var nextSort;
            var columns = settings.aoColumns;
            var aSort = _fnSortFlatten(settings);
            var oAria = settings.oLanguage.oAria;
            for (var i = 0, iLen = columns.length; i < iLen; i++) {
                var col = columns[i];
                var asSorting = col.asSorting;
                var sTitle = col.ariaTitle || col.sTitle.replace(/<.*?>/g, "");
                var th = col.nTh;
                th.removeAttribute("aria-sort");
                if (col.bSortable) {
                    if (aSort.length > 0 && aSort[0].col == i) {
                        th.setAttribute("aria-sort", "asc" == aSort[0].dir ? "ascending" : "descending");
                        nextSort = asSorting[aSort[0].index + 1] || asSorting[0];
                    } else nextSort = asSorting[0];
                    label = sTitle + ("asc" === nextSort ? oAria.sSortAscending : oAria.sSortDescending);
                } else label = sTitle;
                th.setAttribute("aria-label", label);
            }
        }
        function _fnSortListener(settings, colIdx, append, callback) {
            var col = settings.aoColumns[colIdx];
            var sorting = settings.aaSorting;
            var asSorting = col.asSorting;
            var nextSortIdx;
            var next = function(a, overflow) {
                var idx = a._idx;
                if (void 0 === idx) idx = jquery_dataTables_$.inArray(a[1], asSorting);
                return idx + 1 < asSorting.length ? idx + 1 : overflow ? null : 0;
            };
            if ("number" === typeof sorting[0]) sorting = settings.aaSorting = [ sorting ];
            if (append && settings.oFeatures.bSortMulti) {
                var sortIdx = jquery_dataTables_$.inArray(colIdx, _pluck(sorting, "0"));
                if (-1 !== sortIdx) {
                    nextSortIdx = next(sorting[sortIdx], true);
                    if (null === nextSortIdx && 1 === sorting.length) nextSortIdx = 0;
                    if (null === nextSortIdx) sorting.splice(sortIdx, 1); else {
                        sorting[sortIdx][1] = asSorting[nextSortIdx];
                        sorting[sortIdx]._idx = nextSortIdx;
                    }
                } else {
                    sorting.push([ colIdx, asSorting[0], 0 ]);
                    sorting[sorting.length - 1]._idx = 0;
                }
            } else if (sorting.length && sorting[0][0] == colIdx) {
                nextSortIdx = next(sorting[0]);
                sorting.length = 1;
                sorting[0][1] = asSorting[nextSortIdx];
                sorting[0]._idx = nextSortIdx;
            } else {
                sorting.length = 0;
                sorting.push([ colIdx, asSorting[0] ]);
                sorting[0]._idx = 0;
            }
            _fnReDraw(settings);
            if ("function" == typeof callback) callback(settings);
        }
        function _fnSortAttachListener(settings, attachTo, colIdx, callback) {
            var col = settings.aoColumns[colIdx];
            _fnBindAction(attachTo, {}, (function(e) {
                if (false === col.bSortable) return;
                if (settings.oFeatures.bProcessing) {
                    _fnProcessingDisplay(settings, true);
                    setTimeout((function() {
                        _fnSortListener(settings, colIdx, e.shiftKey, callback);
                        if ("ssp" !== _fnDataSource(settings)) _fnProcessingDisplay(settings, false);
                    }), 0);
                } else _fnSortListener(settings, colIdx, e.shiftKey, callback);
            }));
        }
        function _fnSortingClasses(settings) {
            var oldSort = settings.aLastSort;
            var sortClass = settings.oClasses.sSortColumn;
            var sort = _fnSortFlatten(settings);
            var features = settings.oFeatures;
            var i, ien, colIdx;
            if (features.bSort && features.bSortClasses) {
                for (i = 0, ien = oldSort.length; i < ien; i++) {
                    colIdx = oldSort[i].src;
                    jquery_dataTables_$(_pluck(settings.aoData, "anCells", colIdx)).removeClass(sortClass + (i < 2 ? i + 1 : 3));
                }
                for (i = 0, ien = sort.length; i < ien; i++) {
                    colIdx = sort[i].src;
                    jquery_dataTables_$(_pluck(settings.aoData, "anCells", colIdx)).addClass(sortClass + (i < 2 ? i + 1 : 3));
                }
            }
            settings.aLastSort = sort;
        }
        function _fnSortData(settings, idx) {
            var column = settings.aoColumns[idx];
            var customSort = jquery_dataTables_DataTable.ext.order[column.sSortDataType];
            var customData;
            if (customSort) customData = customSort.call(settings.oInstance, settings, idx, _fnColumnIndexToVisible(settings, idx));
            var row, cellData;
            var formatter = jquery_dataTables_DataTable.ext.type.order[column.sType + "-pre"];
            for (var i = 0, ien = settings.aoData.length; i < ien; i++) {
                row = settings.aoData[i];
                if (!row._aSortData) row._aSortData = [];
                if (!row._aSortData[idx] || customSort) {
                    cellData = customSort ? customData[i] : _fnGetCellData(settings, i, idx, "sort");
                    row._aSortData[idx] = formatter ? formatter(cellData) : cellData;
                }
            }
        }
        function _fnSaveState(settings) {
            if (settings._bLoadingState) return;
            var state = {
                time: +new Date,
                start: settings._iDisplayStart,
                length: settings._iDisplayLength,
                order: jquery_dataTables_$.extend(true, [], settings.aaSorting),
                search: _fnSearchToCamel(settings.oPreviousSearch),
                columns: jquery_dataTables_$.map(settings.aoColumns, (function(col, i) {
                    return {
                        visible: col.bVisible,
                        search: _fnSearchToCamel(settings.aoPreSearchCols[i])
                    };
                }))
            };
            settings.oSavedState = state;
            _fnCallbackFire(settings, "aoStateSaveParams", "stateSaveParams", [ settings, state ]);
            if (settings.oFeatures.bStateSave && !settings.bDestroying) settings.fnStateSaveCallback.call(settings.oInstance, settings, state);
        }
        function _fnLoadState(settings, oInit, callback) {
            if (!settings.oFeatures.bStateSave) {
                callback();
                return;
            }
            var loaded = function(state) {
                _fnImplementState(settings, state, callback);
            };
            var state = settings.fnStateLoadCallback.call(settings.oInstance, settings, loaded);
            if (void 0 !== state) _fnImplementState(settings, state, callback);
            return true;
        }
        function _fnImplementState(settings, s, callback) {
            var i, ien;
            var columns = settings.aoColumns;
            settings._bLoadingState = true;
            var api = settings._bInitComplete ? new jquery_dataTables_DataTable.Api(settings) : null;
            if (!s || !s.time) {
                settings._bLoadingState = false;
                callback();
                return;
            }
            var abStateLoad = _fnCallbackFire(settings, "aoStateLoadParams", "stateLoadParams", [ settings, s ]);
            if (-1 !== jquery_dataTables_$.inArray(false, abStateLoad)) {
                settings._bLoadingState = false;
                callback();
                return;
            }
            var duration = settings.iStateDuration;
            if (duration > 0 && s.time < +new Date - 1e3 * duration) {
                settings._bLoadingState = false;
                callback();
                return;
            }
            if (s.columns && columns.length !== s.columns.length) {
                settings._bLoadingState = false;
                callback();
                return;
            }
            settings.oLoadedState = jquery_dataTables_$.extend(true, {}, s);
            if (void 0 !== s.length) if (api) api.page.len(s.length); else settings._iDisplayLength = s.length;
            if (void 0 !== s.start) if (null === api) {
                settings._iDisplayStart = s.start;
                settings.iInitDisplayStart = s.start;
            } else _fnPageChange(settings, s.start / settings._iDisplayLength);
            if (void 0 !== s.order) {
                settings.aaSorting = [];
                jquery_dataTables_$.each(s.order, (function(i, col) {
                    settings.aaSorting.push(col[0] >= columns.length ? [ 0, col[1] ] : col);
                }));
            }
            if (void 0 !== s.search) jquery_dataTables_$.extend(settings.oPreviousSearch, _fnSearchToHung(s.search));
            if (s.columns) {
                for (i = 0, ien = s.columns.length; i < ien; i++) {
                    var col = s.columns[i];
                    if (void 0 !== col.visible) if (api) api.column(i).visible(col.visible, false); else columns[i].bVisible = col.visible;
                    if (void 0 !== col.search) jquery_dataTables_$.extend(settings.aoPreSearchCols[i], _fnSearchToHung(col.search));
                }
                if (api) api.columns.adjust();
            }
            settings._bLoadingState = false;
            _fnCallbackFire(settings, "aoStateLoaded", "stateLoaded", [ settings, s ]);
            callback();
        }
        function _fnSettingsFromNode(table) {
            var settings = jquery_dataTables_DataTable.settings;
            var idx = jquery_dataTables_$.inArray(table, _pluck(settings, "nTable"));
            return -1 !== idx ? settings[idx] : null;
        }
        function _fnLog(settings, level, msg, tn) {
            msg = "DataTables warning: " + (settings ? "table id=" + settings.sTableId + " - " : "") + msg;
            if (tn) msg += ". For more information about this error, please see " + "http://datatables.net/tn/" + tn;
            if (!level) {
                var ext = jquery_dataTables_DataTable.ext;
                var type = ext.sErrMode || ext.errMode;
                if (settings) _fnCallbackFire(settings, null, "error", [ settings, tn, msg ]);
                if ("alert" == type) alert(msg); else if ("throw" == type) throw new Error(msg); else if ("function" == typeof type) type(settings, tn, msg);
            } else if (window.console && console.log) console.log(msg);
        }
        function _fnMap(ret, src, name, mappedName) {
            if (Array.isArray(name)) {
                jquery_dataTables_$.each(name, (function(i, val) {
                    if (Array.isArray(val)) _fnMap(ret, src, val[0], val[1]); else _fnMap(ret, src, val);
                }));
                return;
            }
            if (void 0 === mappedName) mappedName = name;
            if (void 0 !== src[name]) ret[mappedName] = src[name];
        }
        function _fnExtend(out, extender, breakRefs) {
            var val;
            for (var prop in extender) if (extender.hasOwnProperty(prop)) {
                val = extender[prop];
                if (jquery_dataTables_$.isPlainObject(val)) {
                    if (!jquery_dataTables_$.isPlainObject(out[prop])) out[prop] = {};
                    jquery_dataTables_$.extend(true, out[prop], val);
                } else if (breakRefs && "data" !== prop && "aaData" !== prop && Array.isArray(val)) out[prop] = val.slice(); else out[prop] = val;
            }
            return out;
        }
        function _fnBindAction(n, oData, fn) {
            jquery_dataTables_$(n).on("click.DT", oData, (function(e) {
                jquery_dataTables_$(n).trigger("blur");
                fn(e);
            })).on("keypress.DT", oData, (function(e) {
                if (13 === e.which) {
                    e.preventDefault();
                    fn(e);
                }
            })).on("selectstart.DT", (function() {
                return false;
            }));
        }
        function _fnCallbackReg(oSettings, sStore, fn, sName) {
            if (fn) oSettings[sStore].push({
                fn,
                sName
            });
        }
        function _fnCallbackFire(settings, callbackArr, eventName, args) {
            var ret = [];
            if (callbackArr) ret = jquery_dataTables_$.map(settings[callbackArr].slice().reverse(), (function(val, i) {
                return val.fn.apply(settings.oInstance, args);
            }));
            if (null !== eventName) {
                var e = jquery_dataTables_$.Event(eventName + ".dt");
                jquery_dataTables_$(settings.nTable).trigger(e, args);
                ret.push(e.result);
            }
            return ret;
        }
        function _fnLengthOverflow(settings) {
            var start = settings._iDisplayStart, end = settings.fnDisplayEnd(), len = settings._iDisplayLength;
            if (start >= end) start = end - len;
            start -= start % len;
            if (-1 === len || start < 0) start = 0;
            settings._iDisplayStart = start;
        }
        function _fnRenderer(settings, type) {
            var renderer = settings.renderer;
            var host = jquery_dataTables_DataTable.ext.renderer[type];
            if (jquery_dataTables_$.isPlainObject(renderer) && renderer[type]) return host[renderer[type]] || host._; else if ("string" === typeof renderer) return host[renderer] || host._;
            return host._;
        }
        function _fnDataSource(settings) {
            if (settings.oFeatures.bServerSide) return "ssp"; else if (settings.ajax || settings.sAjaxSource) return "ajax";
            return "dom";
        }
        var __apiStruct = [];
        var __arrayProto = Array.prototype;
        var _toSettings = function(mixed) {
            var idx, jq;
            var settings = jquery_dataTables_DataTable.settings;
            var tables = jquery_dataTables_$.map(settings, (function(el, i) {
                return el.nTable;
            }));
            if (!mixed) return []; else if (mixed.nTable && mixed.oApi) return [ mixed ]; else if (mixed.nodeName && "table" === mixed.nodeName.toLowerCase()) {
                idx = jquery_dataTables_$.inArray(mixed, tables);
                return -1 !== idx ? [ settings[idx] ] : null;
            } else if (mixed && "function" === typeof mixed.settings) return mixed.settings().toArray(); else if ("string" === typeof mixed) jq = jquery_dataTables_$(mixed); else if (mixed instanceof jquery_dataTables_$) jq = mixed;
            if (jq) return jq.map((function(i) {
                idx = jquery_dataTables_$.inArray(this, tables);
                return -1 !== idx ? settings[idx] : null;
            })).toArray();
        };
        _Api = function(context, data) {
            if (!(this instanceof _Api)) return new _Api(context, data);
            var settings = [];
            var ctxSettings = function(o) {
                var a = _toSettings(o);
                if (a) settings.push.apply(settings, a);
            };
            if (Array.isArray(context)) for (var i = 0, ien = context.length; i < ien; i++) ctxSettings(context[i]); else ctxSettings(context);
            this.context = _unique(settings);
            if (data) jquery_dataTables_$.merge(this, data);
            this.selector = {
                rows: null,
                cols: null,
                opts: null
            };
            _Api.extend(this, this, __apiStruct);
        };
        jquery_dataTables_DataTable.Api = _Api;
        jquery_dataTables_$.extend(_Api.prototype, {
            any: function() {
                return 0 !== this.count();
            },
            concat: __arrayProto.concat,
            context: [],
            count: function() {
                return this.flatten().length;
            },
            each: function(fn) {
                for (var i = 0, ien = this.length; i < ien; i++) fn.call(this, this[i], i, this);
                return this;
            },
            eq: function(idx) {
                var ctx = this.context;
                return ctx.length > idx ? new _Api(ctx[idx], this[idx]) : null;
            },
            filter: function(fn) {
                var a = [];
                if (__arrayProto.filter) a = __arrayProto.filter.call(this, fn, this); else for (var i = 0, ien = this.length; i < ien; i++) if (fn.call(this, this[i], i, this)) a.push(this[i]);
                return new _Api(this.context, a);
            },
            flatten: function() {
                var a = [];
                return new _Api(this.context, a.concat.apply(a, this.toArray()));
            },
            join: __arrayProto.join,
            indexOf: __arrayProto.indexOf || function(obj, start) {
                for (var i = start || 0, ien = this.length; i < ien; i++) if (this[i] === obj) return i;
                return -1;
            },
            iterator: function(flatten, type, fn, alwaysNew) {
                var ret, i, ien, j, jen, rows, items, item, a = [], context = this.context, selector = this.selector;
                if ("string" === typeof flatten) {
                    alwaysNew = fn;
                    fn = type;
                    type = flatten;
                    flatten = false;
                }
                for (i = 0, ien = context.length; i < ien; i++) {
                    var apiInst = new _Api(context[i]);
                    if ("table" === type) {
                        ret = fn.call(apiInst, context[i], i);
                        if (void 0 !== ret) a.push(ret);
                    } else if ("columns" === type || "rows" === type) {
                        ret = fn.call(apiInst, context[i], this[i], i);
                        if (void 0 !== ret) a.push(ret);
                    } else if ("column" === type || "column-rows" === type || "row" === type || "cell" === type) {
                        items = this[i];
                        if ("column-rows" === type) rows = _selector_row_indexes(context[i], selector.opts);
                        for (j = 0, jen = items.length; j < jen; j++) {
                            item = items[j];
                            if ("cell" === type) ret = fn.call(apiInst, context[i], item.row, item.column, i, j); else ret = fn.call(apiInst, context[i], item, i, j, rows);
                            if (void 0 !== ret) a.push(ret);
                        }
                    }
                }
                if (a.length || alwaysNew) {
                    var api = new _Api(context, flatten ? a.concat.apply([], a) : a);
                    var apiSelector = api.selector;
                    apiSelector.rows = selector.rows;
                    apiSelector.cols = selector.cols;
                    apiSelector.opts = selector.opts;
                    return api;
                }
                return this;
            },
            lastIndexOf: __arrayProto.lastIndexOf || function(obj, start) {
                return this.indexOf.apply(this.toArray.reverse(), arguments);
            },
            length: 0,
            map: function(fn) {
                var a = [];
                if (__arrayProto.map) a = __arrayProto.map.call(this, fn, this); else for (var i = 0, ien = this.length; i < ien; i++) a.push(fn.call(this, this[i], i));
                return new _Api(this.context, a);
            },
            pluck: function(prop) {
                let fn = jquery_dataTables_DataTable.util.get(prop);
                return this.map((function(el) {
                    return fn(el);
                }));
            },
            pop: __arrayProto.pop,
            push: __arrayProto.push,
            reduce: __arrayProto.reduce || function(fn, init) {
                return _fnReduce(this, fn, init, 0, this.length, 1);
            },
            reduceRight: __arrayProto.reduceRight || function(fn, init) {
                return _fnReduce(this, fn, init, this.length - 1, -1, -1);
            },
            reverse: __arrayProto.reverse,
            selector: null,
            shift: __arrayProto.shift,
            slice: function() {
                return new _Api(this.context, this);
            },
            sort: __arrayProto.sort,
            splice: __arrayProto.splice,
            toArray: function() {
                return __arrayProto.slice.call(this);
            },
            to$: function() {
                return jquery_dataTables_$(this);
            },
            toJQuery: function() {
                return jquery_dataTables_$(this);
            },
            unique: function() {
                return new _Api(this.context, _unique(this));
            },
            unshift: __arrayProto.unshift
        });
        _Api.extend = function(scope, obj, ext) {
            if (!ext.length || !obj || !(obj instanceof _Api) && !obj.__dt_wrapper) return;
            var i, ien, struct, methodScoping = function(scope, fn, struc) {
                return function() {
                    var ret = fn.apply(scope, arguments);
                    _Api.extend(ret, ret, struc.methodExt);
                    return ret;
                };
            };
            for (i = 0, ien = ext.length; i < ien; i++) {
                struct = ext[i];
                obj[struct.name] = "function" === struct.type ? methodScoping(scope, struct.val, struct) : "object" === struct.type ? {} : struct.val;
                obj[struct.name].__dt_wrapper = true;
                _Api.extend(scope, obj[struct.name], struct.propExt);
            }
        };
        _Api.register = _api_register = function(name, val) {
            if (Array.isArray(name)) {
                for (var j = 0, jen = name.length; j < jen; j++) _Api.register(name[j], val);
                return;
            }
            var i, ien, key, method, heir = name.split("."), struct = __apiStruct;
            var find = function(src, name) {
                for (var i = 0, ien = src.length; i < ien; i++) if (src[i].name === name) return src[i];
                return null;
            };
            for (i = 0, ien = heir.length; i < ien; i++) {
                method = -1 !== heir[i].indexOf("()");
                key = method ? heir[i].replace("()", "") : heir[i];
                var src = find(struct, key);
                if (!src) {
                    src = {
                        name: key,
                        val: {},
                        methodExt: [],
                        propExt: [],
                        type: "object"
                    };
                    struct.push(src);
                }
                if (i === ien - 1) {
                    src.val = val;
                    src.type = "function" === typeof val ? "function" : jquery_dataTables_$.isPlainObject(val) ? "object" : "other";
                } else struct = method ? src.methodExt : src.propExt;
            }
        };
        _Api.registerPlural = _api_registerPlural = function(pluralName, singularName, val) {
            _Api.register(pluralName, val);
            _Api.register(singularName, (function() {
                var ret = val.apply(this, arguments);
                if (ret === this) return this; else if (ret instanceof _Api) return ret.length ? Array.isArray(ret[0]) ? new _Api(ret.context, ret[0]) : ret[0] : void 0;
                return ret;
            }));
        };
        var __table_selector = function(selector, a) {
            if (Array.isArray(selector)) return jquery_dataTables_$.map(selector, (function(item) {
                return __table_selector(item, a);
            }));
            if ("number" === typeof selector) return [ a[selector] ];
            var nodes = jquery_dataTables_$.map(a, (function(el, i) {
                return el.nTable;
            }));
            return jquery_dataTables_$(nodes).filter(selector).map((function(i) {
                var idx = jquery_dataTables_$.inArray(this, nodes);
                return a[idx];
            })).toArray();
        };
        _api_register("tables()", (function(selector) {
            return void 0 !== selector && null !== selector ? new _Api(__table_selector(selector, this.context)) : this;
        }));
        _api_register("table()", (function(selector) {
            var tables = this.tables(selector);
            var ctx = tables.context;
            return ctx.length ? new _Api(ctx[0]) : tables;
        }));
        _api_registerPlural("tables().nodes()", "table().node()", (function() {
            return this.iterator("table", (function(ctx) {
                return ctx.nTable;
            }), 1);
        }));
        _api_registerPlural("tables().body()", "table().body()", (function() {
            return this.iterator("table", (function(ctx) {
                return ctx.nTBody;
            }), 1);
        }));
        _api_registerPlural("tables().header()", "table().header()", (function() {
            return this.iterator("table", (function(ctx) {
                return ctx.nTHead;
            }), 1);
        }));
        _api_registerPlural("tables().footer()", "table().footer()", (function() {
            return this.iterator("table", (function(ctx) {
                return ctx.nTFoot;
            }), 1);
        }));
        _api_registerPlural("tables().containers()", "table().container()", (function() {
            return this.iterator("table", (function(ctx) {
                return ctx.nTableWrapper;
            }), 1);
        }));
        _api_register("draw()", (function(paging) {
            return this.iterator("table", (function(settings) {
                if ("page" === paging) _fnDraw(settings); else {
                    if ("string" === typeof paging) paging = "full-hold" === paging ? false : true;
                    _fnReDraw(settings, false === paging);
                }
            }));
        }));
        _api_register("page()", (function(action) {
            if (void 0 === action) return this.page.info().page;
            return this.iterator("table", (function(settings) {
                _fnPageChange(settings, action);
            }));
        }));
        _api_register("page.info()", (function(action) {
            if (0 === this.context.length) return;
            var settings = this.context[0], start = settings._iDisplayStart, len = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1, visRecords = settings.fnRecordsDisplay(), all = -1 === len;
            return {
                page: all ? 0 : Math.floor(start / len),
                pages: all ? 1 : Math.ceil(visRecords / len),
                start,
                end: settings.fnDisplayEnd(),
                length: len,
                recordsTotal: settings.fnRecordsTotal(),
                recordsDisplay: visRecords,
                serverSide: "ssp" === _fnDataSource(settings)
            };
        }));
        _api_register("page.len()", (function(len) {
            if (void 0 === len) return 0 !== this.context.length ? this.context[0]._iDisplayLength : void 0;
            return this.iterator("table", (function(settings) {
                _fnLengthChange(settings, len);
            }));
        }));
        var __reload = function(settings, holdPosition, callback) {
            if (callback) {
                var api = new _Api(settings);
                api.one("draw", (function() {
                    callback(api.ajax.json());
                }));
            }
            if ("ssp" == _fnDataSource(settings)) _fnReDraw(settings, holdPosition); else {
                _fnProcessingDisplay(settings, true);
                var xhr = settings.jqXHR;
                if (xhr && 4 !== xhr.readyState) xhr.abort();
                _fnBuildAjax(settings, [], (function(json) {
                    _fnClearTable(settings);
                    var data = _fnAjaxDataSrc(settings, json);
                    for (var i = 0, ien = data.length; i < ien; i++) _fnAddData(settings, data[i]);
                    _fnReDraw(settings, holdPosition);
                    _fnProcessingDisplay(settings, false);
                }));
            }
        };
        _api_register("ajax.json()", (function() {
            var ctx = this.context;
            if (ctx.length > 0) return ctx[0].json;
        }));
        _api_register("ajax.params()", (function() {
            var ctx = this.context;
            if (ctx.length > 0) return ctx[0].oAjaxData;
        }));
        _api_register("ajax.reload()", (function(callback, resetPaging) {
            return this.iterator("table", (function(settings) {
                __reload(settings, false === resetPaging, callback);
            }));
        }));
        _api_register("ajax.url()", (function(url) {
            var ctx = this.context;
            if (void 0 === url) {
                if (0 === ctx.length) return;
                ctx = ctx[0];
                return ctx.ajax ? jquery_dataTables_$.isPlainObject(ctx.ajax) ? ctx.ajax.url : ctx.ajax : ctx.sAjaxSource;
            }
            return this.iterator("table", (function(settings) {
                if (jquery_dataTables_$.isPlainObject(settings.ajax)) settings.ajax.url = url; else settings.ajax = url;
            }));
        }));
        _api_register("ajax.url().load()", (function(callback, resetPaging) {
            return this.iterator("table", (function(ctx) {
                __reload(ctx, false === resetPaging, callback);
            }));
        }));
        var _selector_run = function(type, selector, selectFn, settings, opts) {
            var res, a, i, ien, j, jen, out = [], selectorType = typeof selector;
            if (!selector || "string" === selectorType || "function" === selectorType || void 0 === selector.length) selector = [ selector ];
            for (i = 0, ien = selector.length; i < ien; i++) {
                a = selector[i] && selector[i].split && !selector[i].match(/[\[\(:]/) ? selector[i].split(",") : [ selector[i] ];
                for (j = 0, jen = a.length; j < jen; j++) {
                    res = selectFn("string" === typeof a[j] ? a[j].trim() : a[j]);
                    if (res && res.length) out = out.concat(res);
                }
            }
            var ext = _ext.selector[type];
            if (ext.length) for (i = 0, ien = ext.length; i < ien; i++) out = ext[i](settings, opts, out);
            return _unique(out);
        };
        var _selector_opts = function(opts) {
            if (!opts) opts = {};
            if (opts.filter && void 0 === opts.search) opts.search = opts.filter;
            return jquery_dataTables_$.extend({
                search: "none",
                order: "current",
                page: "all"
            }, opts);
        };
        var _selector_first = function(inst) {
            for (var i = 0, ien = inst.length; i < ien; i++) if (inst[i].length > 0) {
                inst[0] = inst[i];
                inst[0].length = 1;
                inst.length = 1;
                inst.context = [ inst.context[i] ];
                return inst;
            }
            inst.length = 0;
            return inst;
        };
        var _selector_row_indexes = function(settings, opts) {
            var tmp, a = [], displayFiltered = settings.aiDisplay, displayMaster = settings.aiDisplayMaster;
            var search = opts.search, order = opts.order, page = opts.page;
            if ("ssp" == _fnDataSource(settings)) return "removed" === search ? [] : _range(0, displayMaster.length); else if ("current" == page) for (i = settings._iDisplayStart, 
            ien = settings.fnDisplayEnd(); i < ien; i++) a.push(displayFiltered[i]); else if ("current" == order || "applied" == order) {
                if ("none" == search) a = displayMaster.slice(); else if ("applied" == search) a = displayFiltered.slice(); else if ("removed" == search) {
                    var displayFilteredMap = {};
                    for (var i = 0, ien = displayFiltered.length; i < ien; i++) displayFilteredMap[displayFiltered[i]] = null;
                    a = jquery_dataTables_$.map(displayMaster, (function(el) {
                        return !displayFilteredMap.hasOwnProperty(el) ? el : null;
                    }));
                }
            } else if ("index" == order || "original" == order) for (i = 0, ien = settings.aoData.length; i < ien; i++) if ("none" == search) a.push(i); else {
                tmp = jquery_dataTables_$.inArray(i, displayFiltered);
                if (-1 === tmp && "removed" == search || tmp >= 0 && "applied" == search) a.push(i);
            }
            return a;
        };
        var __row_selector = function(settings, selector, opts) {
            var rows;
            var run = function(sel) {
                var selInt = _intVal(sel);
                var aoData = settings.aoData;
                if (null !== selInt && !opts) return [ selInt ];
                if (!rows) rows = _selector_row_indexes(settings, opts);
                if (null !== selInt && -1 !== jquery_dataTables_$.inArray(selInt, rows)) return [ selInt ]; else if (null === sel || void 0 === sel || "" === sel) return rows;
                if ("function" === typeof sel) return jquery_dataTables_$.map(rows, (function(idx) {
                    var row = aoData[idx];
                    return sel(idx, row._aData, row.nTr) ? idx : null;
                }));
                if (sel.nodeName) {
                    var rowIdx = sel._DT_RowIndex;
                    var cellIdx = sel._DT_CellIndex;
                    if (void 0 !== rowIdx) return aoData[rowIdx] && aoData[rowIdx].nTr === sel ? [ rowIdx ] : []; else if (cellIdx) return aoData[cellIdx.row] && aoData[cellIdx.row].nTr === sel.parentNode ? [ cellIdx.row ] : []; else {
                        var host = jquery_dataTables_$(sel).closest("*[data-dt-row]");
                        return host.length ? [ host.data("dt-row") ] : [];
                    }
                }
                if ("string" === typeof sel && "#" === sel.charAt(0)) {
                    var rowObj = settings.aIds[sel.replace(/^#/, "")];
                    if (void 0 !== rowObj) return [ rowObj.idx ];
                }
                var nodes = _removeEmpty(_pluck_order(settings.aoData, rows, "nTr"));
                return jquery_dataTables_$(nodes).filter(sel).map((function() {
                    return this._DT_RowIndex;
                })).toArray();
            };
            return _selector_run("row", selector, run, settings, opts);
        };
        _api_register("rows()", (function(selector, opts) {
            if (void 0 === selector) selector = ""; else if (jquery_dataTables_$.isPlainObject(selector)) {
                opts = selector;
                selector = "";
            }
            opts = _selector_opts(opts);
            var inst = this.iterator("table", (function(settings) {
                return __row_selector(settings, selector, opts);
            }), 1);
            inst.selector.rows = selector;
            inst.selector.opts = opts;
            return inst;
        }));
        _api_register("rows().nodes()", (function() {
            return this.iterator("row", (function(settings, row) {
                return settings.aoData[row].nTr || void 0;
            }), 1);
        }));
        _api_register("rows().data()", (function() {
            return this.iterator(true, "rows", (function(settings, rows) {
                return _pluck_order(settings.aoData, rows, "_aData");
            }), 1);
        }));
        _api_registerPlural("rows().cache()", "row().cache()", (function(type) {
            return this.iterator("row", (function(settings, row) {
                var r = settings.aoData[row];
                return "search" === type ? r._aFilterData : r._aSortData;
            }), 1);
        }));
        _api_registerPlural("rows().invalidate()", "row().invalidate()", (function(src) {
            return this.iterator("row", (function(settings, row) {
                _fnInvalidate(settings, row, src);
            }));
        }));
        _api_registerPlural("rows().indexes()", "row().index()", (function() {
            return this.iterator("row", (function(settings, row) {
                return row;
            }), 1);
        }));
        _api_registerPlural("rows().ids()", "row().id()", (function(hash) {
            var a = [];
            var context = this.context;
            for (var i = 0, ien = context.length; i < ien; i++) for (var j = 0, jen = this[i].length; j < jen; j++) {
                var id = context[i].rowIdFn(context[i].aoData[this[i][j]]._aData);
                a.push((true === hash ? "#" : "") + id);
            }
            return new _Api(context, a);
        }));
        _api_registerPlural("rows().remove()", "row().remove()", (function() {
            var that = this;
            this.iterator("row", (function(settings, row, thatIdx) {
                var data = settings.aoData;
                var rowData = data[row];
                var i, ien, j, jen;
                var loopRow, loopCells;
                data.splice(row, 1);
                for (i = 0, ien = data.length; i < ien; i++) {
                    loopRow = data[i];
                    loopCells = loopRow.anCells;
                    if (null !== loopRow.nTr) loopRow.nTr._DT_RowIndex = i;
                    if (null !== loopCells) for (j = 0, jen = loopCells.length; j < jen; j++) loopCells[j]._DT_CellIndex.row = i;
                }
                _fnDeleteIndex(settings.aiDisplayMaster, row);
                _fnDeleteIndex(settings.aiDisplay, row);
                _fnDeleteIndex(that[thatIdx], row, false);
                if (settings._iRecordsDisplay > 0) settings._iRecordsDisplay--;
                _fnLengthOverflow(settings);
                var id = settings.rowIdFn(rowData._aData);
                if (void 0 !== id) delete settings.aIds[id];
            }));
            this.iterator("table", (function(settings) {
                for (var i = 0, ien = settings.aoData.length; i < ien; i++) settings.aoData[i].idx = i;
            }));
            return this;
        }));
        _api_register("rows.add()", (function(rows) {
            var newRows = this.iterator("table", (function(settings) {
                var row, i, ien;
                var out = [];
                for (i = 0, ien = rows.length; i < ien; i++) {
                    row = rows[i];
                    if (row.nodeName && "TR" === row.nodeName.toUpperCase()) out.push(_fnAddTr(settings, row)[0]); else out.push(_fnAddData(settings, row));
                }
                return out;
            }), 1);
            var modRows = this.rows(-1);
            modRows.pop();
            jquery_dataTables_$.merge(modRows, newRows);
            return modRows;
        }));
        _api_register("row()", (function(selector, opts) {
            return _selector_first(this.rows(selector, opts));
        }));
        _api_register("row().data()", (function(data) {
            var ctx = this.context;
            if (void 0 === data) return ctx.length && this.length ? ctx[0].aoData[this[0]]._aData : void 0;
            var row = ctx[0].aoData[this[0]];
            row._aData = data;
            if (Array.isArray(data) && row.nTr && row.nTr.id) _fnSetObjectDataFn(ctx[0].rowId)(data, row.nTr.id);
            _fnInvalidate(ctx[0], this[0], "data");
            return this;
        }));
        _api_register("row().node()", (function() {
            var ctx = this.context;
            return ctx.length && this.length ? ctx[0].aoData[this[0]].nTr || null : null;
        }));
        _api_register("row.add()", (function(row) {
            if (row instanceof jquery_dataTables_$ && row.length) row = row[0];
            var rows = this.iterator("table", (function(settings) {
                if (row.nodeName && "TR" === row.nodeName.toUpperCase()) return _fnAddTr(settings, row)[0];
                return _fnAddData(settings, row);
            }));
            return this.row(rows[0]);
        }));
        jquery_dataTables_$(document).on("plugin-init.dt", (function(e, context) {
            var api = new _Api(context);
            const namespace = "on-plugin-init";
            const stateSaveParamsEvent = `stateSaveParams.${namespace}`;
            const destroyEvent = `destroy.${namespace}`;
            api.on(stateSaveParamsEvent, (function(e, settings, d) {
                var idFn = settings.rowIdFn;
                var data = settings.aoData;
                var ids = [];
                for (var i = 0; i < data.length; i++) if (data[i]._detailsShow) ids.push("#" + idFn(data[i]._aData));
                d.childRows = ids;
            }));
            api.on(destroyEvent, (function() {
                api.off(`${stateSaveParamsEvent} ${destroyEvent}`);
            }));
            var loaded = api.state.loaded();
            if (loaded && loaded.childRows) api.rows(jquery_dataTables_$.map(loaded.childRows, (function(id) {
                return id.replace(/:/g, "\\:");
            }))).every((function() {
                _fnCallbackFire(context, null, "requestChild", [ this ]);
            }));
        }));
        var __details_add = function(ctx, row, data, klass) {
            var rows = [];
            var addRow = function(r, k) {
                if (Array.isArray(r) || r instanceof jquery_dataTables_$) {
                    for (var i = 0, ien = r.length; i < ien; i++) addRow(r[i], k);
                    return;
                }
                if (r.nodeName && "tr" === r.nodeName.toLowerCase()) rows.push(r); else {
                    var created = jquery_dataTables_$("<tr><td></td></tr>").addClass(k);
                    jquery_dataTables_$("td", created).addClass(k).html(r)[0].colSpan = _fnVisbleColumns(ctx);
                    rows.push(created[0]);
                }
            };
            addRow(data, klass);
            if (row._details) row._details.detach();
            row._details = jquery_dataTables_$(rows);
            if (row._detailsShow) row._details.insertAfter(row.nTr);
        };
        var __details_state = jquery_dataTables_DataTable.util.throttle((function(ctx) {
            _fnSaveState(ctx[0]);
        }), 500);
        var __details_remove = function(api, idx) {
            var ctx = api.context;
            if (ctx.length) {
                var row = ctx[0].aoData[void 0 !== idx ? idx : api[0]];
                if (row && row._details) {
                    row._details.remove();
                    row._detailsShow = void 0;
                    row._details = void 0;
                    jquery_dataTables_$(row.nTr).removeClass("dt-hasChild");
                    __details_state(ctx);
                }
            }
        };
        var __details_display = function(api, show) {
            var ctx = api.context;
            if (ctx.length && api.length) {
                var row = ctx[0].aoData[api[0]];
                if (row._details) {
                    row._detailsShow = show;
                    if (show) {
                        row._details.insertAfter(row.nTr);
                        jquery_dataTables_$(row.nTr).addClass("dt-hasChild");
                    } else {
                        row._details.detach();
                        jquery_dataTables_$(row.nTr).removeClass("dt-hasChild");
                    }
                    _fnCallbackFire(ctx[0], null, "childRow", [ show, api.row(api[0]) ]);
                    __details_events(ctx[0]);
                    __details_state(ctx);
                }
            }
        };
        var __details_events = function(settings) {
            var api = new _Api(settings);
            var namespace = ".dt.DT_details";
            var drawEvent = "draw" + namespace;
            var colvisEvent = "column-sizing" + namespace;
            var destroyEvent = "destroy" + namespace;
            var data = settings.aoData;
            api.off(drawEvent + " " + colvisEvent + " " + destroyEvent);
            if (_pluck(data, "_details").length > 0) {
                api.on(drawEvent, (function(e, ctx) {
                    if (settings !== ctx) return;
                    api.rows({
                        page: "current"
                    }).eq(0).each((function(idx) {
                        var row = data[idx];
                        if (row._detailsShow) row._details.insertAfter(row.nTr);
                    }));
                }));
                api.on(colvisEvent, (function(e, ctx, idx, vis) {
                    if (settings !== ctx) return;
                    var row, visible = _fnVisbleColumns(ctx);
                    for (var i = 0, ien = data.length; i < ien; i++) {
                        row = data[i];
                        if (row._details) row._details.children("td[colspan]").attr("colspan", visible);
                    }
                }));
                api.on(destroyEvent, (function(e, ctx) {
                    if (settings !== ctx) return;
                    for (var i = 0, ien = data.length; i < ien; i++) if (data[i]._details) __details_remove(api, i);
                }));
            }
        };
        var _emp = "";
        var _child_obj = _emp + "row().child";
        var _child_mth = _child_obj + "()";
        _api_register(_child_mth, (function(data, klass) {
            var ctx = this.context;
            if (void 0 === data) return ctx.length && this.length ? ctx[0].aoData[this[0]]._details : void 0; else if (true === data) this.child.show(); else if (false === data) __details_remove(this); else if (ctx.length && this.length) __details_add(ctx[0], ctx[0].aoData[this[0]], data, klass);
            return this;
        }));
        _api_register([ _child_obj + ".show()", _child_mth + ".show()" ], (function(show) {
            __details_display(this, true);
            return this;
        }));
        _api_register([ _child_obj + ".hide()", _child_mth + ".hide()" ], (function() {
            __details_display(this, false);
            return this;
        }));
        _api_register([ _child_obj + ".remove()", _child_mth + ".remove()" ], (function() {
            __details_remove(this);
            return this;
        }));
        _api_register(_child_obj + ".isShown()", (function() {
            var ctx = this.context;
            if (ctx.length && this.length) return ctx[0].aoData[this[0]]._detailsShow || false;
            return false;
        }));
        var __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;
        var __columnData = function(settings, column, r1, r2, rows) {
            var a = [];
            for (var row = 0, ien = rows.length; row < ien; row++) a.push(_fnGetCellData(settings, rows[row], column));
            return a;
        };
        var __column_selector = function(settings, selector, opts) {
            var columns = settings.aoColumns, names = _pluck(columns, "sName"), nodes = _pluck(columns, "nTh");
            var run = function(s) {
                var selInt = _intVal(s);
                if ("" === s) return _range(columns.length);
                if (null !== selInt) return [ selInt >= 0 ? selInt : columns.length + selInt ];
                if ("function" === typeof s) {
                    var rows = _selector_row_indexes(settings, opts);
                    return jquery_dataTables_$.map(columns, (function(col, idx) {
                        return s(idx, __columnData(settings, idx, 0, 0, rows), nodes[idx]) ? idx : null;
                    }));
                }
                var match = "string" === typeof s ? s.match(__re_column_selector) : "";
                if (match) switch (match[2]) {
                  case "visIdx":
                  case "visible":
                    var idx = parseInt(match[1], 10);
                    if (idx < 0) {
                        var visColumns = jquery_dataTables_$.map(columns, (function(col, i) {
                            return col.bVisible ? i : null;
                        }));
                        return [ visColumns[visColumns.length + idx] ];
                    }
                    return [ _fnVisibleToColumnIndex(settings, idx) ];

                  case "name":
                    return jquery_dataTables_$.map(names, (function(name, i) {
                        return name === match[1] ? i : null;
                    }));

                  default:
                    return [];
                }
                if (s.nodeName && s._DT_CellIndex) return [ s._DT_CellIndex.column ];
                var jqResult = jquery_dataTables_$(nodes).filter(s).map((function() {
                    return jquery_dataTables_$.inArray(this, nodes);
                })).toArray();
                if (jqResult.length || !s.nodeName) return jqResult;
                var host = jquery_dataTables_$(s).closest("*[data-dt-column]");
                return host.length ? [ host.data("dt-column") ] : [];
            };
            return _selector_run("column", selector, run, settings, opts);
        };
        var __setColumnVis = function(settings, column, vis) {
            var cells, i, ien, tr, cols = settings.aoColumns, col = cols[column], data = settings.aoData;
            if (void 0 === vis) return col.bVisible;
            if (col.bVisible === vis) return;
            if (vis) {
                var insertBefore = jquery_dataTables_$.inArray(true, _pluck(cols, "bVisible"), column + 1);
                for (i = 0, ien = data.length; i < ien; i++) {
                    tr = data[i].nTr;
                    cells = data[i].anCells;
                    if (tr) tr.insertBefore(cells[column], cells[insertBefore] || null);
                }
            } else jquery_dataTables_$(_pluck(settings.aoData, "anCells", column)).detach();
            col.bVisible = vis;
        };
        _api_register("columns()", (function(selector, opts) {
            if (void 0 === selector) selector = ""; else if (jquery_dataTables_$.isPlainObject(selector)) {
                opts = selector;
                selector = "";
            }
            opts = _selector_opts(opts);
            var inst = this.iterator("table", (function(settings) {
                return __column_selector(settings, selector, opts);
            }), 1);
            inst.selector.cols = selector;
            inst.selector.opts = opts;
            return inst;
        }));
        _api_registerPlural("columns().header()", "column().header()", (function(selector, opts) {
            return this.iterator("column", (function(settings, column) {
                return settings.aoColumns[column].nTh;
            }), 1);
        }));
        _api_registerPlural("columns().footer()", "column().footer()", (function(selector, opts) {
            return this.iterator("column", (function(settings, column) {
                return settings.aoColumns[column].nTf;
            }), 1);
        }));
        _api_registerPlural("columns().data()", "column().data()", (function() {
            return this.iterator("column-rows", __columnData, 1);
        }));
        _api_registerPlural("columns().dataSrc()", "column().dataSrc()", (function() {
            return this.iterator("column", (function(settings, column) {
                return settings.aoColumns[column].mData;
            }), 1);
        }));
        _api_registerPlural("columns().cache()", "column().cache()", (function(type) {
            return this.iterator("column-rows", (function(settings, column, i, j, rows) {
                return _pluck_order(settings.aoData, rows, "search" === type ? "_aFilterData" : "_aSortData", column);
            }), 1);
        }));
        _api_registerPlural("columns().nodes()", "column().nodes()", (function() {
            return this.iterator("column-rows", (function(settings, column, i, j, rows) {
                return _pluck_order(settings.aoData, rows, "anCells", column);
            }), 1);
        }));
        _api_registerPlural("columns().visible()", "column().visible()", (function(vis, calc) {
            var that = this;
            var ret = this.iterator("column", (function(settings, column) {
                if (void 0 === vis) return settings.aoColumns[column].bVisible;
                __setColumnVis(settings, column, vis);
            }));
            if (void 0 !== vis) this.iterator("table", (function(settings) {
                _fnDrawHead(settings, settings.aoHeader);
                _fnDrawHead(settings, settings.aoFooter);
                if (!settings.aiDisplay.length) jquery_dataTables_$(settings.nTBody).find("td[colspan]").attr("colspan", _fnVisbleColumns(settings));
                _fnSaveState(settings);
                that.iterator("column", (function(settings, column) {
                    _fnCallbackFire(settings, null, "column-visibility", [ settings, column, vis, calc ]);
                }));
                if (void 0 === calc || calc) that.columns.adjust();
            }));
            return ret;
        }));
        _api_registerPlural("columns().indexes()", "column().index()", (function(type) {
            return this.iterator("column", (function(settings, column) {
                return "visible" === type ? _fnColumnIndexToVisible(settings, column) : column;
            }), 1);
        }));
        _api_register("columns.adjust()", (function() {
            return this.iterator("table", (function(settings) {
                _fnAdjustColumnSizing(settings);
            }), 1);
        }));
        _api_register("column.index()", (function(type, idx) {
            if (0 !== this.context.length) {
                var ctx = this.context[0];
                if ("fromVisible" === type || "toData" === type) return _fnVisibleToColumnIndex(ctx, idx); else if ("fromData" === type || "toVisible" === type) return _fnColumnIndexToVisible(ctx, idx);
            }
        }));
        _api_register("column()", (function(selector, opts) {
            return _selector_first(this.columns(selector, opts));
        }));
        var __cell_selector = function(settings, selector, opts) {
            var data = settings.aoData;
            var rows = _selector_row_indexes(settings, opts);
            var cells = _removeEmpty(_pluck_order(data, rows, "anCells"));
            var allCells = jquery_dataTables_$(_flatten([], cells));
            var row;
            var columns = settings.aoColumns.length;
            var a, i, ien, j, o, host;
            var run = function(s) {
                var fnSelector = "function" === typeof s;
                if (null === s || void 0 === s || fnSelector) {
                    a = [];
                    for (i = 0, ien = rows.length; i < ien; i++) {
                        row = rows[i];
                        for (j = 0; j < columns; j++) {
                            o = {
                                row,
                                column: j
                            };
                            if (fnSelector) {
                                host = data[row];
                                if (s(o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null)) a.push(o);
                            } else a.push(o);
                        }
                    }
                    return a;
                }
                if (jquery_dataTables_$.isPlainObject(s)) return void 0 !== s.column && void 0 !== s.row && -1 !== jquery_dataTables_$.inArray(s.row, rows) ? [ s ] : [];
                var jqResult = allCells.filter(s).map((function(i, el) {
                    return {
                        row: el._DT_CellIndex.row,
                        column: el._DT_CellIndex.column
                    };
                })).toArray();
                if (jqResult.length || !s.nodeName) return jqResult;
                host = jquery_dataTables_$(s).closest("*[data-dt-row]");
                return host.length ? [ {
                    row: host.data("dt-row"),
                    column: host.data("dt-column")
                } ] : [];
            };
            return _selector_run("cell", selector, run, settings, opts);
        };
        _api_register("cells()", (function(rowSelector, columnSelector, opts) {
            if (jquery_dataTables_$.isPlainObject(rowSelector)) if (void 0 === rowSelector.row) {
                opts = rowSelector;
                rowSelector = null;
            } else {
                opts = columnSelector;
                columnSelector = null;
            }
            if (jquery_dataTables_$.isPlainObject(columnSelector)) {
                opts = columnSelector;
                columnSelector = null;
            }
            if (null === columnSelector || void 0 === columnSelector) return this.iterator("table", (function(settings) {
                return __cell_selector(settings, rowSelector, _selector_opts(opts));
            }));
            var internalOpts = opts ? {
                page: opts.page,
                order: opts.order,
                search: opts.search
            } : {};
            var columns = this.columns(columnSelector, internalOpts);
            var rows = this.rows(rowSelector, internalOpts);
            var i, ien, j, jen;
            var cellsNoOpts = this.iterator("table", (function(settings, idx) {
                var a = [];
                for (i = 0, ien = rows[idx].length; i < ien; i++) for (j = 0, jen = columns[idx].length; j < jen; j++) a.push({
                    row: rows[idx][i],
                    column: columns[idx][j]
                });
                return a;
            }), 1);
            var cells = opts && opts.selected ? this.cells(cellsNoOpts, opts) : cellsNoOpts;
            jquery_dataTables_$.extend(cells.selector, {
                cols: columnSelector,
                rows: rowSelector,
                opts
            });
            return cells;
        }));
        _api_registerPlural("cells().nodes()", "cell().node()", (function() {
            return this.iterator("cell", (function(settings, row, column) {
                var data = settings.aoData[row];
                return data && data.anCells ? data.anCells[column] : void 0;
            }), 1);
        }));
        _api_register("cells().data()", (function() {
            return this.iterator("cell", (function(settings, row, column) {
                return _fnGetCellData(settings, row, column);
            }), 1);
        }));
        _api_registerPlural("cells().cache()", "cell().cache()", (function(type) {
            type = "search" === type ? "_aFilterData" : "_aSortData";
            return this.iterator("cell", (function(settings, row, column) {
                return settings.aoData[row][type][column];
            }), 1);
        }));
        _api_registerPlural("cells().render()", "cell().render()", (function(type) {
            return this.iterator("cell", (function(settings, row, column) {
                return _fnGetCellData(settings, row, column, type);
            }), 1);
        }));
        _api_registerPlural("cells().indexes()", "cell().index()", (function() {
            return this.iterator("cell", (function(settings, row, column) {
                return {
                    row,
                    column,
                    columnVisible: _fnColumnIndexToVisible(settings, column)
                };
            }), 1);
        }));
        _api_registerPlural("cells().invalidate()", "cell().invalidate()", (function(src) {
            return this.iterator("cell", (function(settings, row, column) {
                _fnInvalidate(settings, row, src, column);
            }));
        }));
        _api_register("cell()", (function(rowSelector, columnSelector, opts) {
            return _selector_first(this.cells(rowSelector, columnSelector, opts));
        }));
        _api_register("cell().data()", (function(data) {
            var ctx = this.context;
            var cell = this[0];
            if (void 0 === data) return ctx.length && cell.length ? _fnGetCellData(ctx[0], cell[0].row, cell[0].column) : void 0;
            _fnSetCellData(ctx[0], cell[0].row, cell[0].column, data);
            _fnInvalidate(ctx[0], cell[0].row, "data", cell[0].column);
            return this;
        }));
        _api_register("order()", (function(order, dir) {
            var ctx = this.context;
            if (void 0 === order) return 0 !== ctx.length ? ctx[0].aaSorting : void 0;
            if ("number" === typeof order) order = [ [ order, dir ] ]; else if (order.length && !Array.isArray(order[0])) order = Array.prototype.slice.call(arguments);
            return this.iterator("table", (function(settings) {
                settings.aaSorting = order.slice();
            }));
        }));
        _api_register("order.listener()", (function(node, column, callback) {
            return this.iterator("table", (function(settings) {
                _fnSortAttachListener(settings, node, column, callback);
            }));
        }));
        _api_register("order.fixed()", (function(set) {
            if (!set) {
                var ctx = this.context;
                var fixed = ctx.length ? ctx[0].aaSortingFixed : void 0;
                return Array.isArray(fixed) ? {
                    pre: fixed
                } : fixed;
            }
            return this.iterator("table", (function(settings) {
                settings.aaSortingFixed = jquery_dataTables_$.extend(true, {}, set);
            }));
        }));
        _api_register([ "columns().order()", "column().order()" ], (function(dir) {
            var that = this;
            return this.iterator("table", (function(settings, i) {
                var sort = [];
                jquery_dataTables_$.each(that[i], (function(j, col) {
                    sort.push([ col, dir ]);
                }));
                settings.aaSorting = sort;
            }));
        }));
        _api_register("search()", (function(input, regex, smart, caseInsen) {
            var ctx = this.context;
            if (void 0 === input) return 0 !== ctx.length ? ctx[0].oPreviousSearch.sSearch : void 0;
            return this.iterator("table", (function(settings) {
                if (!settings.oFeatures.bFilter) return;
                _fnFilterComplete(settings, jquery_dataTables_$.extend({}, settings.oPreviousSearch, {
                    sSearch: input + "",
                    bRegex: null === regex ? false : regex,
                    bSmart: null === smart ? true : smart,
                    bCaseInsensitive: null === caseInsen ? true : caseInsen
                }), 1);
            }));
        }));
        _api_registerPlural("columns().search()", "column().search()", (function(input, regex, smart, caseInsen) {
            return this.iterator("column", (function(settings, column) {
                var preSearch = settings.aoPreSearchCols;
                if (void 0 === input) return preSearch[column].sSearch;
                if (!settings.oFeatures.bFilter) return;
                jquery_dataTables_$.extend(preSearch[column], {
                    sSearch: input + "",
                    bRegex: null === regex ? false : regex,
                    bSmart: null === smart ? true : smart,
                    bCaseInsensitive: null === caseInsen ? true : caseInsen
                });
                _fnFilterComplete(settings, settings.oPreviousSearch, 1);
            }));
        }));
        _api_register("state()", (function() {
            return this.context.length ? this.context[0].oSavedState : null;
        }));
        _api_register("state.clear()", (function() {
            return this.iterator("table", (function(settings) {
                settings.fnStateSaveCallback.call(settings.oInstance, settings, {});
            }));
        }));
        _api_register("state.loaded()", (function() {
            return this.context.length ? this.context[0].oLoadedState : null;
        }));
        _api_register("state.save()", (function() {
            return this.iterator("table", (function(settings) {
                _fnSaveState(settings);
            }));
        }));
        jquery_dataTables_DataTable.versionCheck = jquery_dataTables_DataTable.fnVersionCheck = function(version) {
            var aThis = jquery_dataTables_DataTable.version.split(".");
            var aThat = version.split(".");
            var iThis, iThat;
            for (var i = 0, iLen = aThat.length; i < iLen; i++) {
                iThis = parseInt(aThis[i], 10) || 0;
                iThat = parseInt(aThat[i], 10) || 0;
                if (iThis === iThat) continue;
                return iThis > iThat;
            }
            return true;
        };
        jquery_dataTables_DataTable.isDataTable = jquery_dataTables_DataTable.fnIsDataTable = function(table) {
            var t = jquery_dataTables_$(table).get(0);
            var is = false;
            if (table instanceof jquery_dataTables_DataTable.Api) return true;
            jquery_dataTables_$.each(jquery_dataTables_DataTable.settings, (function(i, o) {
                var head = o.nScrollHead ? jquery_dataTables_$("table", o.nScrollHead)[0] : null;
                var foot = o.nScrollFoot ? jquery_dataTables_$("table", o.nScrollFoot)[0] : null;
                if (o.nTable === t || head === t || foot === t) is = true;
            }));
            return is;
        };
        jquery_dataTables_DataTable.tables = jquery_dataTables_DataTable.fnTables = function(visible) {
            var api = false;
            if (jquery_dataTables_$.isPlainObject(visible)) {
                api = visible.api;
                visible = visible.visible;
            }
            var a = jquery_dataTables_$.map(jquery_dataTables_DataTable.settings, (function(o) {
                if (!visible || visible && jquery_dataTables_$(o.nTable).is(":visible")) return o.nTable;
            }));
            return api ? new _Api(a) : a;
        };
        jquery_dataTables_DataTable.camelToHungarian = _fnCamelToHungarian;
        _api_register("$()", (function(selector, opts) {
            var rows = this.rows(opts).nodes(), jqRows = jquery_dataTables_$(rows);
            return jquery_dataTables_$([].concat(jqRows.filter(selector).toArray(), jqRows.find(selector).toArray()));
        }));
        jquery_dataTables_$.each([ "on", "one", "off" ], (function(i, key) {
            _api_register(key + "()", (function() {
                var args = Array.prototype.slice.call(arguments);
                args[0] = jquery_dataTables_$.map(args[0].split(/\s/), (function(e) {
                    return !e.match(/\.dt\b/) ? e + ".dt" : e;
                })).join(" ");
                var inst = jquery_dataTables_$(this.tables().nodes());
                inst[key].apply(inst, args);
                return this;
            }));
        }));
        _api_register("clear()", (function() {
            return this.iterator("table", (function(settings) {
                _fnClearTable(settings);
            }));
        }));
        _api_register("settings()", (function() {
            return new _Api(this.context, this.context);
        }));
        _api_register("init()", (function() {
            var ctx = this.context;
            return ctx.length ? ctx[0].oInit : null;
        }));
        _api_register("data()", (function() {
            return this.iterator("table", (function(settings) {
                return _pluck(settings.aoData, "_aData");
            })).flatten();
        }));
        _api_register("destroy()", (function(remove) {
            remove = remove || false;
            return this.iterator("table", (function(settings) {
                var classes = settings.oClasses;
                var table = settings.nTable;
                var tbody = settings.nTBody;
                var thead = settings.nTHead;
                var tfoot = settings.nTFoot;
                var jqTable = jquery_dataTables_$(table);
                var jqTbody = jquery_dataTables_$(tbody);
                var jqWrapper = jquery_dataTables_$(settings.nTableWrapper);
                var rows = jquery_dataTables_$.map(settings.aoData, (function(r) {
                    return r.nTr;
                }));
                var ien;
                settings.bDestroying = true;
                _fnCallbackFire(settings, "aoDestroyCallback", "destroy", [ settings ]);
                if (!remove) new _Api(settings).columns().visible(true);
                jqWrapper.off(".DT").find(":not(tbody *)").off(".DT");
                jquery_dataTables_$(window).off(".DT-" + settings.sInstance);
                if (table != thead.parentNode) {
                    jqTable.children("thead").detach();
                    jqTable.append(thead);
                }
                if (tfoot && table != tfoot.parentNode) {
                    jqTable.children("tfoot").detach();
                    jqTable.append(tfoot);
                }
                settings.aaSorting = [];
                settings.aaSortingFixed = [];
                _fnSortingClasses(settings);
                jquery_dataTables_$(rows).removeClass(settings.asStripeClasses.join(" "));
                jquery_dataTables_$("th, td", thead).removeClass(classes.sSortable + " " + classes.sSortableAsc + " " + classes.sSortableDesc + " " + classes.sSortableNone);
                jqTbody.children().detach();
                jqTbody.append(rows);
                var orig = settings.nTableWrapper.parentNode;
                var removedMethod = remove ? "remove" : "detach";
                jqTable[removedMethod]();
                jqWrapper[removedMethod]();
                if (!remove && orig) {
                    orig.insertBefore(table, settings.nTableReinsertBefore);
                    jqTable.css("width", settings.sDestroyWidth).removeClass(classes.sTable);
                    ien = settings.asDestroyStripes.length;
                    if (ien) jqTbody.children().each((function(i) {
                        jquery_dataTables_$(this).addClass(settings.asDestroyStripes[i % ien]);
                    }));
                }
                var idx = jquery_dataTables_$.inArray(settings, jquery_dataTables_DataTable.settings);
                if (-1 !== idx) jquery_dataTables_DataTable.settings.splice(idx, 1);
            }));
        }));
        jquery_dataTables_$.each([ "column", "row", "cell" ], (function(i, type) {
            _api_register(type + "s().every()", (function(fn) {
                var opts = this.selector.opts;
                var api = this;
                return this.iterator(type, (function(settings, arg1, arg2, arg3, arg4) {
                    fn.call(api[type](arg1, "cell" === type ? arg2 : opts, "cell" === type ? opts : void 0), arg1, arg2, arg3, arg4);
                }));
            }));
        }));
        _api_register("i18n()", (function(token, def, plural) {
            var ctx = this.context[0];
            var resolved = _fnGetObjectDataFn(token)(ctx.oLanguage);
            if (void 0 === resolved) resolved = def;
            if (void 0 !== plural && jquery_dataTables_$.isPlainObject(resolved)) resolved = void 0 !== resolved[plural] ? resolved[plural] : resolved._;
            return resolved.replace("%d", plural);
        }));
        jquery_dataTables_DataTable.version = "1.13.1";
        jquery_dataTables_DataTable.settings = [];
        jquery_dataTables_DataTable.models = {};
        jquery_dataTables_DataTable.models.oSearch = {
            bCaseInsensitive: true,
            sSearch: "",
            bRegex: false,
            bSmart: true,
            return: false
        };
        jquery_dataTables_DataTable.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null,
            idx: -1
        };
        jquery_dataTables_DataTable.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: false,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        };
        jquery_dataTables_DataTable.defaults = {
            aaData: null,
            aaSorting: [ [ 0, "asc" ] ],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [ 10, 25, 50, 100 ],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: true,
            bDeferRender: false,
            bDestroy: false,
            bFilter: true,
            bInfo: true,
            bLengthChange: true,
            bPaginate: true,
            bProcessing: false,
            bRetrieve: false,
            bScrollCollapse: false,
            bServerSide: false,
            bSort: true,
            bSortMulti: true,
            bSortCellsTop: false,
            bSortClasses: true,
            bStateSave: false,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(toFormat) {
                return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function(settings) {
                try {
                    return JSON.parse((-1 === settings.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + settings.sInstance + "_" + location.pathname));
                } catch (e) {
                    return {};
                }
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function(settings, data) {
                try {
                    (-1 === settings.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + settings.sInstance + "_" + location.pathname, JSON.stringify(data));
                } catch (e) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "",
                sSearch: "Search:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: jquery_dataTables_$.extend({}, jquery_dataTables_DataTable.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null,
            rowId: "DT_RowId"
        };
        _fnHungarianMap(jquery_dataTables_DataTable.defaults);
        jquery_dataTables_DataTable.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: [ "asc", "desc" ],
            bSearchable: true,
            bSortable: true,
            bVisible: true,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        };
        _fnHungarianMap(jquery_dataTables_DataTable.defaults.column);
        jquery_dataTables_DataTable.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: false,
                bScrollbarLeft: false,
                bBounding: false,
                barWidth: 0
            },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aIds: {},
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: false,
            bInitialised: false,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            jqXHR: null,
            json: void 0,
            oAjaxData: void 0,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: false,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            oClasses: {},
            bFiltered: false,
            bSorted: false,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() {
                return "ssp" == _fnDataSource(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length;
            },
            fnRecordsDisplay: function() {
                return "ssp" == _fnDataSource(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length;
            },
            fnDisplayEnd: function() {
                var len = this._iDisplayLength, start = this._iDisplayStart, calc = start + len, records = this.aiDisplay.length, features = this.oFeatures, paginate = features.bPaginate;
                if (features.bServerSide) return false === paginate || -1 === len ? start + records : Math.min(start + len, this._iRecordsDisplay); else return !paginate || calc > records || -1 === len ? records : calc;
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {},
            rowIdFn: null,
            rowId: null
        };
        jquery_dataTables_DataTable.ext = _ext = {
            buttons: {},
            classes: {},
            builder: "-source-",
            errMode: "alert",
            feature: [],
            search: [],
            selector: {
                cell: [],
                column: [],
                row: []
            },
            internal: {},
            legacy: {
                ajax: null
            },
            pager: {},
            renderer: {
                pageButton: {},
                header: {}
            },
            order: {},
            type: {
                detect: [],
                search: {},
                order: {}
            },
            _unique: 0,
            fnVersionCheck: jquery_dataTables_DataTable.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: jquery_dataTables_DataTable.version
        };
        jquery_dataTables_$.extend(_ext, {
            afnFiltering: _ext.search,
            aTypes: _ext.type.detect,
            ofnSearch: _ext.type.search,
            oSort: _ext.type.order,
            afnSortData: _ext.order,
            aoFeatures: _ext.feature,
            oApi: _ext.internal,
            oStdClasses: _ext.classes,
            oPagination: _ext.pager
        });
        jquery_dataTables_$.extend(jquery_dataTables_DataTable.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_desc_disabled",
            sSortableDesc: "sorting_asc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        });
        var extPagination = jquery_dataTables_DataTable.ext.pager;
        function _numbers(page, pages) {
            var numbers = [], buttons = extPagination.numbers_length, half = Math.floor(buttons / 2);
            if (pages <= buttons) numbers = _range(0, pages); else if (page <= half) {
                numbers = _range(0, buttons - 2);
                numbers.push("ellipsis");
                numbers.push(pages - 1);
            } else if (page >= pages - 1 - half) {
                numbers = _range(pages - (buttons - 2), pages);
                numbers.splice(0, 0, "ellipsis");
                numbers.splice(0, 0, 0);
            } else {
                numbers = _range(page - half + 2, page + half - 1);
                numbers.push("ellipsis");
                numbers.push(pages - 1);
                numbers.splice(0, 0, "ellipsis");
                numbers.splice(0, 0, 0);
            }
            numbers.DT_el = "span";
            return numbers;
        }
        jquery_dataTables_$.extend(extPagination, {
            simple: function(page, pages) {
                return [ "previous", "next" ];
            },
            full: function(page, pages) {
                return [ "first", "previous", "next", "last" ];
            },
            numbers: function(page, pages) {
                return [ _numbers(page, pages) ];
            },
            simple_numbers: function(page, pages) {
                return [ "previous", _numbers(page, pages), "next" ];
            },
            full_numbers: function(page, pages) {
                return [ "first", "previous", _numbers(page, pages), "next", "last" ];
            },
            first_last_numbers: function(page, pages) {
                return [ "first", _numbers(page, pages), "last" ];
            },
            _numbers,
            numbers_length: 7
        });
        jquery_dataTables_$.extend(true, jquery_dataTables_DataTable.ext.renderer, {
            pageButton: {
                _: function(settings, host, idx, buttons, page, pages) {
                    var classes = settings.oClasses;
                    var lang = settings.oLanguage.oPaginate;
                    var aria = settings.oLanguage.oAria.paginate || {};
                    var btnDisplay, btnClass;
                    var attach = function(container, buttons) {
                        var i, ien, node, button, tabIndex;
                        var disabledClass = classes.sPageButtonDisabled;
                        var clickHandler = function(e) {
                            _fnPageChange(settings, e.data.action, true);
                        };
                        for (i = 0, ien = buttons.length; i < ien; i++) {
                            button = buttons[i];
                            if (Array.isArray(button)) {
                                var inner = jquery_dataTables_$("<" + (button.DT_el || "div") + "/>").appendTo(container);
                                attach(inner, button);
                            } else {
                                btnDisplay = null;
                                btnClass = button;
                                tabIndex = settings.iTabIndex;
                                switch (button) {
                                  case "ellipsis":
                                    container.append('<span class="ellipsis">&#x2026;</span>');
                                    break;

                                  case "first":
                                    btnDisplay = lang.sFirst;
                                    if (0 === page) {
                                        tabIndex = -1;
                                        btnClass += " " + disabledClass;
                                    }
                                    break;

                                  case "previous":
                                    btnDisplay = lang.sPrevious;
                                    if (0 === page) {
                                        tabIndex = -1;
                                        btnClass += " " + disabledClass;
                                    }
                                    break;

                                  case "next":
                                    btnDisplay = lang.sNext;
                                    if (0 === pages || page === pages - 1) {
                                        tabIndex = -1;
                                        btnClass += " " + disabledClass;
                                    }
                                    break;

                                  case "last":
                                    btnDisplay = lang.sLast;
                                    if (0 === pages || page === pages - 1) {
                                        tabIndex = -1;
                                        btnClass += " " + disabledClass;
                                    }
                                    break;

                                  default:
                                    btnDisplay = settings.fnFormatNumber(button + 1);
                                    btnClass = page === button ? classes.sPageButtonActive : "";
                                    break;
                                }
                                if (null !== btnDisplay) {
                                    node = jquery_dataTables_$("<a>", {
                                        class: classes.sPageButton + " " + btnClass,
                                        "aria-controls": settings.sTableId,
                                        "aria-label": aria[button],
                                        "data-dt-idx": button,
                                        tabindex: tabIndex,
                                        id: 0 === idx && "string" === typeof button ? settings.sTableId + "_" + button : null
                                    }).html(btnDisplay).appendTo(container);
                                    _fnBindAction(node, {
                                        action: button
                                    }, clickHandler);
                                }
                            }
                        }
                    };
                    var activeEl;
                    try {
                        activeEl = jquery_dataTables_$(host).find(document.activeElement).data("dt-idx");
                    } catch (e) {}
                    attach(jquery_dataTables_$(host).empty(), buttons);
                    if (void 0 !== activeEl) jquery_dataTables_$(host).find("[data-dt-idx=" + activeEl + "]").trigger("focus");
                }
            }
        });
        jquery_dataTables_$.extend(jquery_dataTables_DataTable.ext.type.detect, [ function(d, settings) {
            var decimal = settings.oLanguage.sDecimal;
            return _isNumber(d, decimal) ? "num" + decimal : null;
        }, function(d, settings) {
            if (d && !(d instanceof Date) && !_re_date.test(d)) return null;
            var parsed = Date.parse(d);
            return null !== parsed && !isNaN(parsed) || _empty(d) ? "date" : null;
        }, function(d, settings) {
            var decimal = settings.oLanguage.sDecimal;
            return _isNumber(d, decimal, true) ? "num-fmt" + decimal : null;
        }, function(d, settings) {
            var decimal = settings.oLanguage.sDecimal;
            return _htmlNumeric(d, decimal) ? "html-num" + decimal : null;
        }, function(d, settings) {
            var decimal = settings.oLanguage.sDecimal;
            return _htmlNumeric(d, decimal, true) ? "html-num-fmt" + decimal : null;
        }, function(d, settings) {
            return _empty(d) || "string" === typeof d && -1 !== d.indexOf("<") ? "html" : null;
        } ]);
        jquery_dataTables_$.extend(jquery_dataTables_DataTable.ext.type.search, {
            html: function(data) {
                return _empty(data) ? data : "string" === typeof data ? data.replace(_re_new_lines, " ").replace(_re_html, "") : "";
            },
            string: function(data) {
                return _empty(data) ? data : "string" === typeof data ? data.replace(_re_new_lines, " ") : data;
            }
        });
        var __numericReplace = function(d, decimalPlace, re1, re2) {
            if (0 !== d && (!d || "-" === d)) return -1 / 0;
            if (decimalPlace) d = _numToDecimal(d, decimalPlace);
            if (d.replace) {
                if (re1) d = d.replace(re1, "");
                if (re2) d = d.replace(re2, "");
            }
            return 1 * d;
        };
        function _addNumericSort(decimalPlace) {
            jquery_dataTables_$.each({
                num: function(d) {
                    return __numericReplace(d, decimalPlace);
                },
                "num-fmt": function(d) {
                    return __numericReplace(d, decimalPlace, _re_formatted_numeric);
                },
                "html-num": function(d) {
                    return __numericReplace(d, decimalPlace, _re_html);
                },
                "html-num-fmt": function(d) {
                    return __numericReplace(d, decimalPlace, _re_html, _re_formatted_numeric);
                }
            }, (function(key, fn) {
                _ext.type.order[key + decimalPlace + "-pre"] = fn;
                if (key.match(/^html\-/)) _ext.type.search[key + decimalPlace] = _ext.type.search.html;
            }));
        }
        jquery_dataTables_$.extend(_ext.type.order, {
            "date-pre": function(d) {
                var ts = Date.parse(d);
                return isNaN(ts) ? -1 / 0 : ts;
            },
            "html-pre": function(a) {
                return _empty(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "";
            },
            "string-pre": function(a) {
                return _empty(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString();
            },
            "string-asc": function(x, y) {
                return x < y ? -1 : x > y ? 1 : 0;
            },
            "string-desc": function(x, y) {
                return x < y ? 1 : x > y ? -1 : 0;
            }
        });
        _addNumericSort("");
        jquery_dataTables_$.extend(true, jquery_dataTables_DataTable.ext.renderer, {
            header: {
                _: function(settings, cell, column, classes) {
                    jquery_dataTables_$(settings.nTable).on("order.dt.DT", (function(e, ctx, sorting, columns) {
                        if (settings !== ctx) return;
                        var colIdx = column.idx;
                        cell.removeClass(classes.sSortAsc + " " + classes.sSortDesc).addClass("asc" == columns[colIdx] ? classes.sSortAsc : "desc" == columns[colIdx] ? classes.sSortDesc : column.sSortingClass);
                    }));
                },
                jqueryui: function(settings, cell, column, classes) {
                    jquery_dataTables_$("<div/>").addClass(classes.sSortJUIWrapper).append(cell.contents()).append(jquery_dataTables_$("<span/>").addClass(classes.sSortIcon + " " + column.sSortingClassJUI)).appendTo(cell);
                    jquery_dataTables_$(settings.nTable).on("order.dt.DT", (function(e, ctx, sorting, columns) {
                        if (settings !== ctx) return;
                        var colIdx = column.idx;
                        cell.removeClass(classes.sSortAsc + " " + classes.sSortDesc).addClass("asc" == columns[colIdx] ? classes.sSortAsc : "desc" == columns[colIdx] ? classes.sSortDesc : column.sSortingClass);
                        cell.find("span." + classes.sSortIcon).removeClass(classes.sSortJUIAsc + " " + classes.sSortJUIDesc + " " + classes.sSortJUI + " " + classes.sSortJUIAscAllowed + " " + classes.sSortJUIDescAllowed).addClass("asc" == columns[colIdx] ? classes.sSortJUIAsc : "desc" == columns[colIdx] ? classes.sSortJUIDesc : column.sSortingClassJUI);
                    }));
                }
            }
        });
        var __htmlEscapeEntities = function(d) {
            if (Array.isArray(d)) d = d.join(",");
            return "string" === typeof d ? d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : d;
        };
        function __mld(dt, momentFn, luxonFn, dateFn, arg1) {
            if (window.moment) return dt[momentFn](arg1); else if (window.luxon) return dt[luxonFn](arg1);
            return dateFn ? dt[dateFn](arg1) : dt;
        }
        var __mlWarning = false;
        function __mldObj(d, format, locale) {
            var dt;
            if (window.moment) {
                dt = window.moment.utc(d, format, locale, true);
                if (!dt.isValid()) return null;
            } else if (window.luxon) {
                dt = format && "string" === typeof d ? window.luxon.DateTime.fromFormat(d, format) : window.luxon.DateTime.fromISO(d);
                if (!dt.isValid) return null;
                dt.setLocale(locale);
            } else if (!format) dt = new Date(d); else {
                if (!__mlWarning) alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17");
                __mlWarning = true;
            }
            return dt;
        }
        function __mlHelper(localeString) {
            return function(from, to, locale, def) {
                if (0 === arguments.length) {
                    locale = "en";
                    to = null;
                    from = null;
                } else if (1 === arguments.length) {
                    locale = "en";
                    to = from;
                    from = null;
                } else if (2 === arguments.length) {
                    locale = to;
                    to = from;
                    from = null;
                }
                var typeName = "datetime-" + to;
                if (!jquery_dataTables_DataTable.ext.type.order[typeName]) {
                    jquery_dataTables_DataTable.ext.type.detect.unshift((function(d) {
                        return d === typeName ? typeName : false;
                    }));
                    jquery_dataTables_DataTable.ext.type.order[typeName + "-asc"] = function(a, b) {
                        var x = a.valueOf();
                        var y = b.valueOf();
                        return x === y ? 0 : x < y ? -1 : 1;
                    };
                    jquery_dataTables_DataTable.ext.type.order[typeName + "-desc"] = function(a, b) {
                        var x = a.valueOf();
                        var y = b.valueOf();
                        return x === y ? 0 : x > y ? -1 : 1;
                    };
                }
                return function(d, type) {
                    if (null === d || void 0 === d) if ("--now" === def) {
                        var local = new Date;
                        d = new Date(Date.UTC(local.getFullYear(), local.getMonth(), local.getDate(), local.getHours(), local.getMinutes(), local.getSeconds()));
                    } else d = "";
                    if ("type" === type) return typeName;
                    if ("" === d) return "sort" !== type ? "" : __mldObj("0000-01-01 00:00:00", null, locale);
                    if (null !== to && from === to && "sort" !== type && "type" !== type && !(d instanceof Date)) return d;
                    var dt = __mldObj(d, from, locale);
                    if (null === dt) return d;
                    if ("sort" === type) return dt;
                    var formatted = null === to ? __mld(dt, "toDate", "toJSDate", "")[localeString]() : __mld(dt, "format", "toFormat", "toISOString", to);
                    return "display" === type ? __htmlEscapeEntities(formatted) : formatted;
                };
            };
        }
        var __thousands = ",";
        var __decimal = ".";
        if (Intl) try {
            var num = (new Intl.NumberFormat).formatToParts(100000.1);
            for (var i = 0; i < num.length; i++) if ("group" === num[i].type) __thousands = num[i].value; else if ("decimal" === num[i].type) __decimal = num[i].value;
        } catch (e) {}
        jquery_dataTables_DataTable.datetime = function(format, locale) {
            var typeName = "datetime-detect-" + format;
            if (!locale) locale = "en";
            if (!jquery_dataTables_DataTable.ext.type.order[typeName]) {
                jquery_dataTables_DataTable.ext.type.detect.unshift((function(d) {
                    var dt = __mldObj(d, format, locale);
                    return "" === d || dt ? typeName : false;
                }));
                jquery_dataTables_DataTable.ext.type.order[typeName + "-pre"] = function(d) {
                    return __mldObj(d, format, locale) || 0;
                };
            }
        };
        jquery_dataTables_DataTable.render = {
            date: __mlHelper("toLocaleDateString"),
            datetime: __mlHelper("toLocaleString"),
            time: __mlHelper("toLocaleTimeString"),
            number: function(thousands, decimal, precision, prefix, postfix) {
                if (null === thousands || void 0 === thousands) thousands = __thousands;
                if (null === decimal || void 0 === decimal) decimal = __decimal;
                return {
                    display: function(d) {
                        if ("number" !== typeof d && "string" !== typeof d) return d;
                        if ("" === d || null === d) return d;
                        var negative = d < 0 ? "-" : "";
                        var flo = parseFloat(d);
                        if (isNaN(flo)) return __htmlEscapeEntities(d);
                        flo = flo.toFixed(precision);
                        d = Math.abs(flo);
                        var intPart = parseInt(d, 10);
                        var floatPart = precision ? decimal + (d - intPart).toFixed(precision).substring(2) : "";
                        if (0 === intPart && 0 === parseFloat(floatPart)) negative = "";
                        return negative + (prefix || "") + intPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousands) + floatPart + (postfix || "");
                    }
                };
            },
            text: function() {
                return {
                    display: __htmlEscapeEntities,
                    filter: __htmlEscapeEntities
                };
            }
        };
        function _fnExternApiFunc(fn) {
            return function() {
                var args = [ _fnSettingsFromNode(this[jquery_dataTables_DataTable.ext.iApiIndex]) ].concat(Array.prototype.slice.call(arguments));
                return jquery_dataTables_DataTable.ext.internal[fn].apply(this, args);
            };
        }
        jquery_dataTables_$.extend(jquery_dataTables_DataTable.ext.internal, {
            _fnExternApiFunc,
            _fnBuildAjax,
            _fnAjaxUpdate,
            _fnAjaxParameters,
            _fnAjaxUpdateDraw,
            _fnAjaxDataSrc,
            _fnAddColumn,
            _fnColumnOptions,
            _fnAdjustColumnSizing,
            _fnVisibleToColumnIndex,
            _fnColumnIndexToVisible,
            _fnVisbleColumns,
            _fnGetColumns,
            _fnColumnTypes,
            _fnApplyColumnDefs,
            _fnHungarianMap,
            _fnCamelToHungarian,
            _fnLanguageCompat,
            _fnBrowserDetect,
            _fnAddData,
            _fnAddTr,
            _fnNodeToDataIndex,
            _fnNodeToColumnIndex,
            _fnGetCellData,
            _fnSetCellData,
            _fnSplitObjNotation,
            _fnGetObjectDataFn,
            _fnSetObjectDataFn,
            _fnGetDataMaster,
            _fnClearTable,
            _fnDeleteIndex,
            _fnInvalidate,
            _fnGetRowElements,
            _fnCreateTr,
            _fnBuildHead,
            _fnDrawHead,
            _fnDraw,
            _fnReDraw,
            _fnAddOptionsHtml,
            _fnDetectHeader,
            _fnGetUniqueThs,
            _fnFeatureHtmlFilter,
            _fnFilterComplete,
            _fnFilterCustom,
            _fnFilterColumn,
            _fnFilter,
            _fnFilterCreateSearch,
            _fnEscapeRegex,
            _fnFilterData,
            _fnFeatureHtmlInfo,
            _fnUpdateInfo,
            _fnInfoMacros,
            _fnInitialise,
            _fnInitComplete,
            _fnLengthChange,
            _fnFeatureHtmlLength,
            _fnFeatureHtmlPaginate,
            _fnPageChange,
            _fnFeatureHtmlProcessing,
            _fnProcessingDisplay,
            _fnFeatureHtmlTable,
            _fnScrollDraw,
            _fnApplyToChildren,
            _fnCalculateColumnWidths,
            _fnThrottle,
            _fnConvertToWidth,
            _fnGetWidestNode,
            _fnGetMaxLenString,
            _fnStringToCss,
            _fnSortFlatten,
            _fnSort,
            _fnSortAria,
            _fnSortListener,
            _fnSortAttachListener,
            _fnSortingClasses,
            _fnSortData,
            _fnSaveState,
            _fnLoadState,
            _fnImplementState,
            _fnSettingsFromNode,
            _fnLog,
            _fnMap,
            _fnBindAction,
            _fnCallbackReg,
            _fnCallbackFire,
            _fnLengthOverflow,
            _fnRenderer,
            _fnDataSource,
            _fnRowAttributes,
            _fnExtend,
            _fnCalculateEnd: function() {}
        });
        jquery_dataTables_$.fn.dataTable = jquery_dataTables_DataTable;
        jquery_dataTables_DataTable.$ = jquery_dataTables_$;
        jquery_dataTables_$.fn.dataTableSettings = jquery_dataTables_DataTable.settings;
        jquery_dataTables_$.fn.dataTableExt = jquery_dataTables_DataTable.ext;
        jquery_dataTables_$.fn.DataTable = function(opts) {
            return jquery_dataTables_$(this).dataTable(opts).api();
        };
        jquery_dataTables_$.each(jquery_dataTables_DataTable, (function(prop, val) {
            jquery_dataTables_$.fn.DataTable[prop] = val;
        }));
        jquery_dataTables_DataTable.use = function(module, type) {
            if ("lib" === type || module.fn) jquery_dataTables_$ = module; else if ("win" == type || module.document) window = module;
        };
        const jquery_dataTables = jquery_dataTables_DataTable;
        /*! Responsive 2.4.0
 * 2014-2022 SpryMedia Ltd - datatables.net/license
 */
        var Responsive = function(settings, opts) {
            if (!jquery_dataTables.versionCheck || !jquery_dataTables.versionCheck("1.10.10")) throw "DataTables Responsive requires DataTables 1.10.10 or newer";
            this.s = {
                childNodeStore: {},
                columns: [],
                current: [],
                dt: new jquery_dataTables.Api(settings)
            };
            if (this.s.dt.settings()[0].responsive) return;
            if (opts && "string" === typeof opts.details) opts.details = {
                type: opts.details
            }; else if (opts && false === opts.details) opts.details = {
                type: false
            }; else if (opts && true === opts.details) opts.details = {
                type: "inline"
            };
            this.c = jquery.extend(true, {}, Responsive.defaults, jquery_dataTables.defaults.responsive, opts);
            settings.responsive = this;
            this._constructor();
        };
        jquery.extend(Responsive.prototype, {
            _constructor: function() {
                var that = this;
                var dt = this.s.dt;
                var dtPrivateSettings = dt.settings()[0];
                var oldWindowWidth = jquery(window).innerWidth();
                dt.settings()[0]._responsive = this;
                jquery(window).on("resize.dtr orientationchange.dtr", jquery_dataTables.util.throttle((function() {
                    var width = jquery(window).innerWidth();
                    if (width !== oldWindowWidth) {
                        that._resize();
                        oldWindowWidth = width;
                    }
                })));
                dtPrivateSettings.oApi._fnCallbackReg(dtPrivateSettings, "aoRowCreatedCallback", (function(tr, data, idx) {
                    if (-1 !== jquery.inArray(false, that.s.current)) jquery(">td, >th", tr).each((function(i) {
                        var idx = dt.column.index("toData", i);
                        if (false === that.s.current[idx]) jquery(this).css("display", "none");
                    }));
                }));
                dt.on("destroy.dtr", (function() {
                    dt.off(".dtr");
                    jquery(dt.table().body()).off(".dtr");
                    jquery(window).off("resize.dtr orientationchange.dtr");
                    dt.cells(".dtr-control").nodes().to$().removeClass("dtr-control");
                    jquery.each(that.s.current, (function(i, val) {
                        if (false === val) that._setColumnVis(i, true);
                    }));
                }));
                this.c.breakpoints.sort((function(a, b) {
                    return a.width < b.width ? 1 : a.width > b.width ? -1 : 0;
                }));
                this._classLogic();
                this._resizeAuto();
                var details = this.c.details;
                if (false !== details.type) {
                    that._detailsInit();
                    dt.on("column-visibility.dtr", (function() {
                        if (that._timer) clearTimeout(that._timer);
                        that._timer = setTimeout((function() {
                            that._timer = null;
                            that._classLogic();
                            that._resizeAuto();
                            that._resize(true);
                            that._redrawChildren();
                        }), 100);
                    }));
                    dt.on("draw.dtr", (function() {
                        that._redrawChildren();
                    }));
                    jquery(dt.table().node()).addClass("dtr-" + details.type);
                }
                dt.on("column-reorder.dtr", (function(e, settings, details) {
                    that._classLogic();
                    that._resizeAuto();
                    that._resize(true);
                }));
                dt.on("column-sizing.dtr", (function() {
                    that._resizeAuto();
                    that._resize();
                }));
                dt.on("column-calc.dt", (function(e, d) {
                    var curr = that.s.current;
                    for (var i = 0; i < curr.length; i++) {
                        var idx = d.visible.indexOf(i);
                        if (false === curr[i] && idx >= 0) d.visible.splice(idx, 1);
                    }
                }));
                dt.on("preXhr.dtr", (function() {
                    var rowIds = [];
                    dt.rows().every((function() {
                        if (this.child.isShown()) rowIds.push(this.id(true));
                    }));
                    dt.one("draw.dtr", (function() {
                        that._resizeAuto();
                        that._resize();
                        dt.rows(rowIds).every((function() {
                            that._detailsDisplay(this, false);
                        }));
                    }));
                }));
                dt.on("draw.dtr", (function() {
                    that._controlClass();
                })).on("init.dtr", (function(e, settings, details) {
                    if ("dt" !== e.namespace) return;
                    that._resizeAuto();
                    that._resize();
                    if (jquery.inArray(false, that.s.current)) dt.columns.adjust();
                }));
                this._resize();
            },
            _childNodes: function(dt, row, col) {
                var name = row + "-" + col;
                if (this.s.childNodeStore[name]) return this.s.childNodeStore[name];
                var nodes = [];
                var children = dt.cell(row, col).node().childNodes;
                for (var i = 0, ien = children.length; i < ien; i++) nodes.push(children[i]);
                this.s.childNodeStore[name] = nodes;
                return nodes;
            },
            _childNodesRestore: function(dt, row, col) {
                var name = row + "-" + col;
                if (!this.s.childNodeStore[name]) return;
                var node = dt.cell(row, col).node();
                var store = this.s.childNodeStore[name];
                var parent = store[0].parentNode;
                var parentChildren = parent.childNodes;
                var a = [];
                for (var i = 0, ien = parentChildren.length; i < ien; i++) a.push(parentChildren[i]);
                for (var j = 0, jen = a.length; j < jen; j++) node.appendChild(a[j]);
                this.s.childNodeStore[name] = void 0;
            },
            _columnsVisiblity: function(breakpoint) {
                var dt = this.s.dt;
                var columns = this.s.columns;
                var i, ien;
                var order = columns.map((function(col, idx) {
                    return {
                        columnIdx: idx,
                        priority: col.priority
                    };
                })).sort((function(a, b) {
                    if (a.priority !== b.priority) return a.priority - b.priority;
                    return a.columnIdx - b.columnIdx;
                }));
                var display = jquery.map(columns, (function(col, i) {
                    if (false === dt.column(i).visible()) return "not-visible";
                    return col.auto && null === col.minWidth ? false : true === col.auto ? "-" : -1 !== jquery.inArray(breakpoint, col.includeIn);
                }));
                var requiredWidth = 0;
                for (i = 0, ien = display.length; i < ien; i++) if (true === display[i]) requiredWidth += columns[i].minWidth;
                var scrolling = dt.settings()[0].oScroll;
                var bar = scrolling.sY || scrolling.sX ? scrolling.iBarWidth : 0;
                var widthAvailable = dt.table().container().offsetWidth - bar;
                var usedWidth = widthAvailable - requiredWidth;
                for (i = 0, ien = display.length; i < ien; i++) if (columns[i].control) usedWidth -= columns[i].minWidth;
                var empty = false;
                for (i = 0, ien = order.length; i < ien; i++) {
                    var colIdx = order[i].columnIdx;
                    if ("-" === display[colIdx] && !columns[colIdx].control && columns[colIdx].minWidth) {
                        if (empty || usedWidth - columns[colIdx].minWidth < 0) {
                            empty = true;
                            display[colIdx] = false;
                        } else display[colIdx] = true;
                        usedWidth -= columns[colIdx].minWidth;
                    }
                }
                var showControl = false;
                for (i = 0, ien = columns.length; i < ien; i++) if (!columns[i].control && !columns[i].never && false === display[i]) {
                    showControl = true;
                    break;
                }
                for (i = 0, ien = columns.length; i < ien; i++) {
                    if (columns[i].control) display[i] = showControl;
                    if ("not-visible" === display[i]) display[i] = false;
                }
                if (-1 === jquery.inArray(true, display)) display[0] = true;
                return display;
            },
            _classLogic: function() {
                var that = this;
                var breakpoints = this.c.breakpoints;
                var dt = this.s.dt;
                var columns = dt.columns().eq(0).map((function(i) {
                    var column = this.column(i);
                    var className = column.header().className;
                    var priority = dt.settings()[0].aoColumns[i].responsivePriority;
                    var dataPriority = column.header().getAttribute("data-priority");
                    if (void 0 === priority) priority = void 0 === dataPriority || null === dataPriority ? 1e4 : 1 * dataPriority;
                    return {
                        className,
                        includeIn: [],
                        auto: false,
                        control: false,
                        never: className.match(/\b(dtr\-)?never\b/) ? true : false,
                        priority
                    };
                }));
                var add = function(colIdx, name) {
                    var includeIn = columns[colIdx].includeIn;
                    if (-1 === jquery.inArray(name, includeIn)) includeIn.push(name);
                };
                var column = function(colIdx, name, operator, matched) {
                    var size, i, ien;
                    if (!operator) columns[colIdx].includeIn.push(name); else if ("max-" === operator) {
                        size = that._find(name).width;
                        for (i = 0, ien = breakpoints.length; i < ien; i++) if (breakpoints[i].width <= size) add(colIdx, breakpoints[i].name);
                    } else if ("min-" === operator) {
                        size = that._find(name).width;
                        for (i = 0, ien = breakpoints.length; i < ien; i++) if (breakpoints[i].width >= size) add(colIdx, breakpoints[i].name);
                    } else if ("not-" === operator) for (i = 0, ien = breakpoints.length; i < ien; i++) if (-1 === breakpoints[i].name.indexOf(matched)) add(colIdx, breakpoints[i].name);
                };
                columns.each((function(col, i) {
                    var classNames = col.className.split(" ");
                    var hasClass = false;
                    for (var k = 0, ken = classNames.length; k < ken; k++) {
                        var className = classNames[k].trim();
                        if ("all" === className || "dtr-all" === className) {
                            hasClass = true;
                            col.includeIn = jquery.map(breakpoints, (function(a) {
                                return a.name;
                            }));
                            return;
                        } else if ("none" === className || "dtr-none" === className || col.never) {
                            hasClass = true;
                            return;
                        } else if ("control" === className || "dtr-control" === className) {
                            hasClass = true;
                            col.control = true;
                            return;
                        }
                        jquery.each(breakpoints, (function(j, breakpoint) {
                            var brokenPoint = breakpoint.name.split("-");
                            var re = new RegExp("(min\\-|max\\-|not\\-)?(" + brokenPoint[0] + ")(\\-[_a-zA-Z0-9])?");
                            var match = className.match(re);
                            if (match) {
                                hasClass = true;
                                if (match[2] === brokenPoint[0] && match[3] === "-" + brokenPoint[1]) column(i, breakpoint.name, match[1], match[2] + match[3]); else if (match[2] === brokenPoint[0] && !match[3]) column(i, breakpoint.name, match[1], match[2]);
                            }
                        }));
                    }
                    if (!hasClass) col.auto = true;
                }));
                this.s.columns = columns;
            },
            _controlClass: function() {
                if ("inline" === this.c.details.type) {
                    var dt = this.s.dt;
                    var columnsVis = this.s.current;
                    var firstVisible = jquery.inArray(true, columnsVis);
                    dt.cells(null, (function(idx) {
                        return idx !== firstVisible;
                    }), {
                        page: "current"
                    }).nodes().to$().filter(".dtr-control").removeClass("dtr-control");
                    dt.cells(null, firstVisible, {
                        page: "current"
                    }).nodes().to$().addClass("dtr-control");
                }
            },
            _detailsDisplay: function(row, update) {
                var that = this;
                var dt = this.s.dt;
                var details = this.c.details;
                if (details && false !== details.type) {
                    var renderer = "string" === typeof details.renderer ? Responsive.renderer[details.renderer]() : details.renderer;
                    var res = details.display(row, update, (function() {
                        return renderer.call(that, dt, row[0], that._detailsObj(row[0]));
                    }));
                    if (true === res || false === res) jquery(dt.table().node()).triggerHandler("responsive-display.dt", [ dt, row, res, update ]);
                }
            },
            _detailsInit: function() {
                var that = this;
                var dt = this.s.dt;
                var details = this.c.details;
                if ("inline" === details.type) details.target = "td.dtr-control, th.dtr-control";
                dt.on("draw.dtr", (function() {
                    that._tabIndexes();
                }));
                that._tabIndexes();
                jquery(dt.table().body()).on("keyup.dtr", "td, th", (function(e) {
                    if (13 === e.keyCode && jquery(this).data("dtr-keyboard")) jquery(this).click();
                }));
                var target = details.target;
                var selector = "string" === typeof target ? target : "td, th";
                if (void 0 !== target || null !== target) jquery(dt.table().body()).on("click.dtr mousedown.dtr mouseup.dtr", selector, (function(e) {
                    if (!jquery(dt.table().node()).hasClass("collapsed")) return;
                    if (-1 === jquery.inArray(jquery(this).closest("tr").get(0), dt.rows().nodes().toArray())) return;
                    if ("number" === typeof target) {
                        var targetIdx = target < 0 ? dt.columns().eq(0).length + target : target;
                        if (dt.cell(this).index().column !== targetIdx) return;
                    }
                    var row = dt.row(jquery(this).closest("tr"));
                    if ("click" === e.type) that._detailsDisplay(row, false); else if ("mousedown" === e.type) jquery(this).css("outline", "none"); else if ("mouseup" === e.type) jquery(this).trigger("blur").css("outline", "");
                }));
            },
            _detailsObj: function(rowIdx) {
                var that = this;
                var dt = this.s.dt;
                return jquery.map(this.s.columns, (function(col, i) {
                    if (col.never || col.control) return;
                    var dtCol = dt.settings()[0].aoColumns[i];
                    return {
                        className: dtCol.sClass,
                        columnIndex: i,
                        data: dt.cell(rowIdx, i).render(that.c.orthogonal),
                        hidden: dt.column(i).visible() && !that.s.current[i],
                        rowIndex: rowIdx,
                        title: null !== dtCol.sTitle ? dtCol.sTitle : jquery(dt.column(i).header()).text()
                    };
                }));
            },
            _find: function(name) {
                var breakpoints = this.c.breakpoints;
                for (var i = 0, ien = breakpoints.length; i < ien; i++) if (breakpoints[i].name === name) return breakpoints[i];
            },
            _redrawChildren: function() {
                var that = this;
                var dt = this.s.dt;
                dt.rows({
                    page: "current"
                }).iterator("row", (function(settings, idx) {
                    dt.row(idx);
                    that._detailsDisplay(dt.row(idx), true);
                }));
            },
            _resize: function(forceRedraw) {
                var that = this;
                var dt = this.s.dt;
                var width = jquery(window).innerWidth();
                var breakpoints = this.c.breakpoints;
                var breakpoint = breakpoints[0].name;
                var columns = this.s.columns;
                var i, ien;
                var oldVis = this.s.current.slice();
                for (i = breakpoints.length - 1; i >= 0; i--) if (width <= breakpoints[i].width) {
                    breakpoint = breakpoints[i].name;
                    break;
                }
                var columnsVis = this._columnsVisiblity(breakpoint);
                this.s.current = columnsVis;
                var collapsedClass = false;
                for (i = 0, ien = columns.length; i < ien; i++) if (false === columnsVis[i] && !columns[i].never && !columns[i].control && false === !dt.column(i).visible()) {
                    collapsedClass = true;
                    break;
                }
                jquery(dt.table().node()).toggleClass("collapsed", collapsedClass);
                var changed = false;
                var visible = 0;
                dt.columns().eq(0).each((function(colIdx, i) {
                    if (true === columnsVis[i]) visible++;
                    if (forceRedraw || columnsVis[i] !== oldVis[i]) {
                        changed = true;
                        that._setColumnVis(colIdx, columnsVis[i]);
                    }
                }));
                this._redrawChildren();
                if (changed) {
                    jquery(dt.table().node()).trigger("responsive-resize.dt", [ dt, this.s.current ]);
                    if (0 === dt.page.info().recordsDisplay) jquery("td", dt.table().body()).eq(0).attr("colspan", visible);
                }
                that._controlClass();
            },
            _resizeAuto: function() {
                var dt = this.s.dt;
                var columns = this.s.columns;
                var that = this;
                if (!this.c.auto) return;
                if (-1 === jquery.inArray(true, jquery.map(columns, (function(c) {
                    return c.auto;
                })))) return;
                if (!jquery.isEmptyObject(this.s.childNodeStore)) jquery.each(this.s.childNodeStore, (function(key) {
                    var idx = key.split("-");
                    that._childNodesRestore(dt, 1 * idx[0], 1 * idx[1]);
                }));
                dt.table().node().offsetWidth;
                dt.columns;
                var clonedTable = dt.table().node().cloneNode(false);
                var clonedHeader = jquery(dt.table().header().cloneNode(false)).appendTo(clonedTable);
                var clonedBody = jquery(dt.table().body()).clone(false, false).empty().appendTo(clonedTable);
                clonedTable.style.width = "auto";
                var headerCells = dt.columns().header().filter((function(idx) {
                    return dt.column(idx).visible();
                })).to$().clone(false).css("display", "table-cell").css("width", "auto").css("min-width", 0);
                jquery(clonedBody).append(jquery(dt.rows({
                    page: "current"
                }).nodes()).clone(false)).find("th, td").css("display", "");
                var footer = dt.table().footer();
                if (footer) {
                    var clonedFooter = jquery(footer.cloneNode(false)).appendTo(clonedTable);
                    var footerCells = dt.columns().footer().filter((function(idx) {
                        return dt.column(idx).visible();
                    })).to$().clone(false).css("display", "table-cell");
                    jquery("<tr/>").append(footerCells).appendTo(clonedFooter);
                }
                jquery("<tr/>").append(headerCells).appendTo(clonedHeader);
                if ("inline" === this.c.details.type) jquery(clonedTable).addClass("dtr-inline collapsed");
                jquery(clonedTable).find("[name]").removeAttr("name");
                jquery(clonedTable).css("position", "relative");
                var inserted = jquery("<div/>").css({
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                    clear: "both"
                }).append(clonedTable);
                inserted.insertBefore(dt.table().node());
                headerCells.each((function(i) {
                    var idx = dt.column.index("fromVisible", i);
                    columns[idx].minWidth = this.offsetWidth || 0;
                }));
                inserted.remove();
            },
            _responsiveOnlyHidden: function() {
                var dt = this.s.dt;
                return jquery.map(this.s.current, (function(v, i) {
                    if (false === dt.column(i).visible()) return true;
                    return v;
                }));
            },
            _setColumnVis: function(col, showHide) {
                var that = this;
                var dt = this.s.dt;
                var display = showHide ? "" : "none";
                jquery(dt.column(col).header()).css("display", display).toggleClass("dtr-hidden", !showHide);
                jquery(dt.column(col).footer()).css("display", display).toggleClass("dtr-hidden", !showHide);
                dt.column(col).nodes().to$().css("display", display).toggleClass("dtr-hidden", !showHide);
                if (!jquery.isEmptyObject(this.s.childNodeStore)) dt.cells(null, col).indexes().each((function(idx) {
                    that._childNodesRestore(dt, idx.row, idx.column);
                }));
            },
            _tabIndexes: function() {
                var dt = this.s.dt;
                var cells = dt.cells({
                    page: "current"
                }).nodes().to$();
                var ctx = dt.settings()[0];
                var target = this.c.details.target;
                cells.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");
                if ("number" === typeof target) dt.cells(null, target, {
                    page: "current"
                }).nodes().to$().attr("tabIndex", ctx.iTabIndex).data("dtr-keyboard", 1); else {
                    if ("td:first-child, th:first-child" === target) target = ">td:first-child, >th:first-child";
                    jquery(target, dt.rows({
                        page: "current"
                    }).nodes()).attr("tabIndex", ctx.iTabIndex).data("dtr-keyboard", 1);
                }
            }
        });
        Responsive.breakpoints = [ {
            name: "desktop",
            width: 1 / 0
        }, {
            name: "tablet-l",
            width: 1024
        }, {
            name: "tablet-p",
            width: 768
        }, {
            name: "mobile-l",
            width: 480
        }, {
            name: "mobile-p",
            width: 320
        } ];
        Responsive.display = {
            childRow: function(row, update, render) {
                if (update) {
                    if (jquery(row.node()).hasClass("parent")) {
                        row.child(render(), "child").show();
                        return true;
                    }
                } else if (!row.child.isShown()) {
                    row.child(render(), "child").show();
                    jquery(row.node()).addClass("parent");
                    return true;
                } else {
                    row.child(false);
                    jquery(row.node()).removeClass("parent");
                    return false;
                }
            },
            childRowImmediate: function(row, update, render) {
                if (!update && row.child.isShown() || !row.responsive.hasHidden()) {
                    row.child(false);
                    jquery(row.node()).removeClass("parent");
                    return false;
                } else {
                    row.child(render(), "child").show();
                    jquery(row.node()).addClass("parent");
                    return true;
                }
            },
            modal: function(options) {
                return function(row, update, render) {
                    if (!update) {
                        var close = function() {
                            modal.remove();
                            jquery(document).off("keypress.dtr");
                        };
                        var modal = jquery('<div class="dtr-modal"/>').append(jquery('<div class="dtr-modal-display"/>').append(jquery('<div class="dtr-modal-content"/>').append(render())).append(jquery('<div class="dtr-modal-close">&times;</div>').click((function() {
                            close();
                        })))).append(jquery('<div class="dtr-modal-background"/>').click((function() {
                            close();
                        }))).appendTo("body");
                        jquery(document).on("keyup.dtr", (function(e) {
                            if (27 === e.keyCode) {
                                e.stopPropagation();
                                close();
                            }
                        }));
                    } else jquery("div.dtr-modal-content").empty().append(render());
                    if (options && options.header) jquery("div.dtr-modal-content").prepend("<h2>" + options.header(row) + "</h2>");
                };
            }
        };
        Responsive.renderer = {
            listHiddenNodes: function() {
                return function(api, rowIdx, columns) {
                    var that = this;
                    var ul = jquery('<ul data-dtr-index="' + rowIdx + '" class="dtr-details"/>');
                    var found = false;
                    jquery.each(columns, (function(i, col) {
                        if (col.hidden) {
                            var klass = col.className ? 'class="' + col.className + '"' : "";
                            jquery("<li " + klass + ' data-dtr-index="' + col.columnIndex + '" data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' + '<span class="dtr-title">' + col.title + "</span> " + "</li>").append(jquery('<span class="dtr-data"/>').append(that._childNodes(api, col.rowIndex, col.columnIndex))).appendTo(ul);
                            found = true;
                        }
                    }));
                    return found ? ul : false;
                };
            },
            listHidden: function() {
                return function(api, rowIdx, columns) {
                    var data = jquery.map(columns, (function(col) {
                        var klass = col.className ? 'class="' + col.className + '"' : "";
                        return col.hidden ? "<li " + klass + ' data-dtr-index="' + col.columnIndex + '" data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' + '<span class="dtr-title">' + col.title + "</span> " + '<span class="dtr-data">' + col.data + "</span>" + "</li>" : "";
                    })).join("");
                    return data ? jquery('<ul data-dtr-index="' + rowIdx + '" class="dtr-details"/>').append(data) : false;
                };
            },
            tableAll: function(options) {
                options = jquery.extend({
                    tableClass: ""
                }, options);
                return function(api, rowIdx, columns) {
                    var data = jquery.map(columns, (function(col) {
                        var klass = col.className ? 'class="' + col.className + '"' : "";
                        return "<tr " + klass + ' data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' + "<td>" + col.title + ":" + "</td> " + "<td>" + col.data + "</td>" + "</tr>";
                    })).join("");
                    return jquery('<table class="' + options.tableClass + ' dtr-details" width="100%"/>').append(data);
                };
            }
        };
        Responsive.defaults = {
            breakpoints: Responsive.breakpoints,
            auto: true,
            details: {
                display: Responsive.display.childRow,
                renderer: Responsive.renderer.listHidden(),
                target: 0,
                type: "inline"
            },
            orthogonal: "display"
        };
        var Api = jquery.fn.dataTable.Api;
        Api.register("responsive()", (function() {
            return this;
        }));
        Api.register("responsive.index()", (function(li) {
            li = jquery(li);
            return {
                column: li.data("dtr-index"),
                row: li.parent().data("dtr-index")
            };
        }));
        Api.register("responsive.rebuild()", (function() {
            return this.iterator("table", (function(ctx) {
                if (ctx._responsive) ctx._responsive._classLogic();
            }));
        }));
        Api.register("responsive.recalc()", (function() {
            return this.iterator("table", (function(ctx) {
                if (ctx._responsive) {
                    ctx._responsive._resizeAuto();
                    ctx._responsive._resize();
                }
            }));
        }));
        Api.register("responsive.hasHidden()", (function() {
            var ctx = this.context[0];
            return ctx._responsive ? -1 !== jquery.inArray(false, ctx._responsive._responsiveOnlyHidden()) : false;
        }));
        Api.registerPlural("columns().responsiveHidden()", "column().responsiveHidden()", (function() {
            return this.iterator("column", (function(settings, column) {
                return settings._responsive ? settings._responsive._responsiveOnlyHidden()[column] : false;
            }), 1);
        }));
        Responsive.version = "2.4.0";
        jquery.fn.dataTable.Responsive = Responsive;
        jquery.fn.DataTable.Responsive = Responsive;
        jquery(document).on("preInit.dt.dtr", (function(e, settings, json) {
            if ("dt" !== e.namespace) return;
            if (jquery(settings.nTable).hasClass("responsive") || jquery(settings.nTable).hasClass("dt-responsive") || settings.oInit.responsive || jquery_dataTables.defaults.responsive) {
                var init = settings.oInit.responsive;
                if (false !== init) new Responsive(settings, jquery.isPlainObject(init) ? init : {});
            }
        }));
        null && DataTable;
        smoothscroll_for_websites_SmoothScroll({
            animationTime: 600,
            stepSize: 75,
            accelerationDelta: 30,
            accelerationMax: 2,
            keyboardSupport: true,
            arrowScroll: 50,
            pulseAlgorithm: true,
            pulseScale: 4,
            pulseNormalize: 1
        });
        const rotate3d = (elSelector, {sensitivity = .6, thickness = 3.625} = "") => {
            const targets = document.querySelectorAll(elSelector);
            if (0 === targets.length) return;
            for (let el of targets) {
                let layers;
                createLayers();
                function createLayers() {
                    el.style.perspective = "900px";
                    const innerHTML = el.innerHTML;
                    layers = document.createElement("div");
                    layers.className = "z-layers";
                    layers.innerHTML = innerHTML;
                    layers.style.position = "relative";
                    layers.style.transformStyle = "preserve-3d";
                    layers.style.width = "100%";
                    layers.style.height = "100%";
                    el.innerHTML = "";
                    el.append(layers);
                    for (let i = 0; i < 7; i++) {
                        const clone = layers.cloneNode();
                        clone.classList.remove("z-layers");
                        clone.classList.add("z-layer");
                        clone.innerHTML = innerHTML;
                        clone.style.position = "absolute";
                        clone.style.top = 0;
                        clone.style.left = 0;
                        clone.style.right = 0;
                        clone.style.bottom = 0;
                        clone.style.pointerEvents = "none";
                        clone.style.userSelect = "none";
                        clone.style.transform = `translateZ(-${(i + 1) * thickness}px)`;
                        clone.style.opacity = `${.0625 * (7 - i)}`;
                        layers.append(clone);
                    }
                }
            }
        };
        rotate3d(".home-hero__img-diamond");
        rotate3d(".global-hero__img-diamond");
        rotate3d(".charac__img-diamond");
        new jquery_dataTables("#bid-table", {
            responsive: true,
            paging: false,
            searching: false,
            info: false,
            ordering: false,
            columns: [ {
                width: "33.333%"
            }, {
                width: "33.333%"
            }, {
                width: "33.333%"
            } ]
        });
        new jquery_dataTables("#additional-table", {
            responsive: true,
            paging: false,
            searching: false,
            info: false,
            ordering: false,
            columns: [ {
                width: "50%"
            }, {
                width: "50%"
            } ]
        });
        hoverInit();
        function hoverInit() {
            const data = document.querySelector(".data-tokenomics");
            if (!data) return;
            let currentElem = null;
            data.onmouseover = function(event) {
                if (currentElem) return;
                let target = event.target.closest(".data-tokenomics__item");
                if (!target) return;
                if (!data.contains(target)) return;
                currentElem = target;
                document.querySelector(`#${target.dataset.piece}`).classList.add("pie__piece--hover");
            };
            data.onmouseout = function(event) {
                if (!currentElem) return;
                let relatedTarget = event.relatedTarget;
                while (relatedTarget) {
                    if (relatedTarget == currentElem) return;
                    relatedTarget = relatedTarget.parentNode;
                }
                document.querySelector(`#${currentElem.dataset.piece}`).classList.remove("pie__piece--hover");
                currentElem = null;
            };
        }
        window.addEventListener("scroll", showUpBtn);
        function showUpBtn() {
            const upBtn = document.querySelector(".up-button");
            if (!upBtn) return;
            if (window.pageYOffset > document.documentElement.clientHeight / 2) upBtn.classList.add("up-button--show"); else upBtn.classList.remove("up-button--show");
        }
        document.addEventListener("click", smoothScrollToAnchor);
        function smoothScrollToAnchor(e) {
            const target = e.target.closest("[data-anchor]");
            if (!target) return;
            e.preventDefault();
            const triggerClass = document.querySelector(".menu-open");
            if (triggerClass) triggerClass.classList.remove("menu-open");
            const headerTopHeight = 45;
            const id = target.getAttribute("href");
            const top = document.querySelector(id).getBoundingClientRect().top - headerTopHeight + window.pageYOffset;
            window.scrollTo({
                top,
                behavior: "smooth"
            });
        }
        window["FLS"] = false;
        isWebp();
        menuInit();
        spollers();
        tabs();
        headerScroll();
    })();
})();