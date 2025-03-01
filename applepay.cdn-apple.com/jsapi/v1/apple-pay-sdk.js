/*!
 * Copyright (c) 2021 Apple Inc. All rights reserved.
 * Apple Pay JS Software
 * 
 * **IMPORTANT:** This Apple Pay JS Software (the "Apple Software") is supplied to you by Apple Inc. ("Apple") in consideration of your agreement to the following terms, and your use, reproduction, or installation of this Apple Software constitutes acceptance of these terms. If you do not agree with these terms, do not use, reproduce or install this Apple Software.
 * 
 * This Apple Software is licensed to you solely for: (a) use with the Apple Pay button that you are authorized or legally permitted to embed or display on your website and (b) the purposes set forth above, and may not be used for other purposes or in other contexts without Apple's prior written permission. For the sake of clarity, you may not and agree not to or enable others to, modify or create derivative works of the Apple Software.
 * 
 * You may only use the Apple Software if you are a member in good standing of the Apple Developer Program and have accepted the current version of the Apple Developer Program License Agreement. Your use of the Apple Software must conform with the Acceptable Use Guidelines for Apple Pay on the Web, located at https://developer.apple.com/apple-pay/acceptable-use-guidelines-for-websites/, which terms may be updated from time to time.
 * 
 * Neither the name, trademarks, service marks or logos of Apple may be used to endorse or promote products or services without specific prior written permission from Apple. Except as expressly stated in this notice, no other rights or licenses, express or implied, are granted by Apple herein.
 * 
 * Apple may provide access to services by or through the Apple Software for you to use.  You agree that the services contain proprietary content, information and material that is owned by Apple and its licensors, and is protected by applicable intellectual property and other laws, and that you will not use such proprietary content, information or materials in any way whatsoever except for permitted use of the services or in any manner that is inconsistent with these terms or that infringes any intellectual property rights of a third party or Apple.  Except to the extent expressly permitted in the applicable terms for the services, You agree not to reproduce, modify, rent, lease, lend, sell, distribute, or create derivative works based on the services, in any manner, and you shall not exploit the services in any unauthorized way whatsoever, including but not limited to, using the services to transmit any malware, or by trespass or burdening network capacity. 
 * 
 * In addition, services that may be accessed, linked to or displayed through the Apple Software may not be available in all languages or in all countries. Apple makes no representation that any such services would be appropriate or available for use in any particular location. Apple reserves the right to change, suspend, remove, or disable access to any services at any time. In no event will Apple be liable for the removal of or disabling of access to any such services or for any updates, maintenance, warranty, technical or other support for such services. Apple may also impose limits or other restrictions on the use of or access to the services, in any case without notice or liability.  You acknowledge and agree that Apple reserves the right to revoke or remove your access to any services provided by or through the Apple Software at any time in its sole discretion.
 * 
 * THE APPLE SOFTWARE AND SERVICES ARE PROVIDED BY APPLE ON AN "AS IS" AND "AS AVAILABLE" BASIS. APPLE MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, REGARDING THE APPLE SOFTWARE OR ITS USE AND OPERATION ALONE OR IN COMBINATION WITH YOUR PRODUCTS, SYSTEMS, OR SERVICES.  APPLE DOES NOT WARRANT THAT THE APPLE SOFTWARE AND SERVICES WILL MEET YOUR REQUIREMENTS, THAT THE OPERATION OF THE APPLE SOFTWARE AND SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS IN THE APPLE  SOFTWARE WILL BE CORRECTED, OR THAT THE APPLE  SOFTWARE AND SERVICES WILL BE COMPATIBLE WITH FUTURE APPLE PRODUCTS, SOFTWARE OR SERVICES. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY APPLE OR AN APPLE AUTHORIZED REPRESENTATIVE WILL CREATE A WARRANTY.
 * 
 * IN NO EVENT SHALL APPLE BE LIABLE FOR ANY DIRECT, SPECIAL, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) RELATING TO OR ARISING IN ANY WAY OUT OF THE USE, REPRODUCTION, OR INSTALLATION, OF THE APPLE SOFTWARE AND SERVICES BY YOU OR OTHERS, HOWEVER CAUSED AND WHETHER UNDER THEORY OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, EVEN IF APPLE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. In no event shall Apple’s total liability to you for all damages (other than as may be required by applicable law in cases involving personal injury) exceed the amount of fifty dollars ($50.00). The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.
 * 
 * **ACKNOWLEDGEMENTS:**
 * https://applepay.cdn-apple.com/jsapi/v1/acknowledgements.txt
 * 
 * 6.3.2021
 */
! function(t) {
    function e(e) {
        for (var n, o, r = e[0], i = e[1], s = 0, c = []; s < r.length; s++) o = r[s], Object.prototype.hasOwnProperty.call(a, o) && a[o] && c.push(a[o][0]), a[o] = 0;
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
        for (l && l(e); c.length;) c.shift()()
    }
    var n = {},
        a = {
            0: 0
        };

    function o(e) {
        if (n[e]) return n[e].exports;
        var a = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.e = function() {
        return Promise.resolve()
    }, o.m = t, o.c = n, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) o.d(n, a, function(e) {
                return t[e]
            }.bind(null, a));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o.oe = function(t) {
        throw console.error(t), t
    };
    var r = window.webpackJsonp = window.webpackJsonp || [],
        i = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var s = 0; s < r.length; s++) e(r[s]);
    var l = i;
    o(o.s = 103)
}({
    103: function(t, e, n) {
        "use strict";
        n.r(e),
            function(t) {
                var e = n(14);

                function a(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function o(t, e) {
                    return function(t, e) {
                        if (e.get) return e.get.call(t);
                        return e.value
                    }(t, i(t, e, "get"))
                }

                function r(t, e, n) {
                    return function(t, e, n) {
                        if (e.set) e.set.call(t, n);
                        else {
                            if (!e.writable) throw new TypeError("attempted to set read only private field");
                            e.value = n
                        }
                    }(t, i(t, e, "set"), n), n
                }

                function i(t, e, n) {
                    if (!e.has(t)) throw new TypeError("attempted to " + n + " private field on non-instance");
                    return e.get(t)
                }

                function s(t, e, n, a, o, r, i) {
                    try {
                        var s = t[r](i),
                            l = s.value
                    } catch (t) {
                        return void n(t)
                    }
                    s.done ? e(l) : Promise.resolve(l).then(a, o)
                }

                function l(t) {
                    return function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(a, o) {
                            var r = t.apply(e, n);

                            function i(t) {
                                s(r, a, o, i, l, "next", t)
                            }

                            function l(t) {
                                s(r, a, o, i, l, "throw", t)
                            }
                            i(void 0)
                        }))
                    }
                }

                function c() {
                    var n, i = document.createElement("div"),
                        s = (null === (n = document.currentScript) || void 0 === n ? void 0 : n.src.slice(0, document.currentScript.src.lastIndexOf("/"))) || "",
                        c = t => {
                            for (var e in i.setAttribute("data-" + t, ""), i.dataset) return delete i.dataset[e], e
                        },
                        h = t => {
                            i.dataset[t] = "";
                            var e = i.attributes[0];
                            return i.removeAttribute(e.name), e.name.slice(5)
                        };

                    function d(t) {
                        return s + t.replace(/^\.\//, "/")
                    }

                    function p() {
                        var t;
                        try {
                            return null === (t = window.ApplePaySession) || void 0 === t ? void 0 : t.canMakePayments()
                        } catch (t) {
                            return console.warn(t), !1
                        }
                    }

                    function u(t) {
                        return !t && void 0 === window.ApplePaySession
                    }

                    function w(t) {
                        for (var e = (t + "=".repeat((4 - t.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(e), a = new Uint8Array(n.length), o = 0; o < n.length; ++o) a[o] = n.charCodeAt(o);
                        return a
                    }

                    function m(t) {
                        for (var e = new ArrayBuffer(t.length), n = new Uint8Array(e), a = 0, o = t.length; a < o; a++) n[a] = t.charCodeAt(a);
                        return e
                    }

                    function f(t, e) {
                        return g.apply(this, arguments)
                    }

                    function g() {
                        return (g = l((function*(t, e) {
                            if (!t || "string" != typeof t) throw new Error("Invalid JWT token. Please provide a valid JWT string.");
                            var [n, a, o] = t.split("."), r = m(window.atob(e)), i = yield window.crypto.subtle.importKey("spki", r, {
                                name: "ECDSA",
                                namedCurve: "P-256"
                            }, !0, ["verify"]), s = (new TextEncoder).encode("".concat(n, ".").concat(a));
                            return yield window.crypto.subtle.verify({
                                name: "ECDSA",
                                hash: {
                                    name: "SHA-256"
                                }
                            }, i, w(o), s)
                        }))).apply(this, arguments)
                    }

                    function v(t, e) {
                        if (t && e)
                            for (var [n, a] of Object.entries(e)) t.style.setProperty(n, a)
                    }

                    function y(t, e) {
                        if (t && e)
                            for (var [n, a] of Object.entries(e)) t.style[n] = a
                    }
                    var b = {
                            fontFamily: "var(--apple-pay-font-family, '-apple-system', 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif')",
                            fontSize: "var(--apple-pay-font-size, 12px)",
                            lineHeight: "1.33",
                            maxWidth: "var(--apple-pay-width, 340px)",
                            display: "inline-block"
                        },
                        $ = {
                            display: "none",
                            margin: "0"
                        },
                        C = {
                            boxSizing: "border-box"
                        },
                        L = {
                            filter: "invert(1)"
                        },
                        x = {
                            filter: "invert(1)"
                        },
                        k = {
                            display: "flex"
                        },
                        S = {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            margin: "0 auto",
                            color: "inherit",
                            gap: ".75ex"
                        },
                        M = {
                            order: "2",
                            margin: ".054em 0 0"
                        },
                        A = {
                            order: "0",
                            marginRight: ".75ex"
                        },
                        T = {
                            marginLeft: ".75ex"
                        },
                        E = {
                            display: "none"
                        },
                        z = {
                            margin: "0"
                        },
                        P = {
                            order: "1",
                            margin: "0"
                        },
                        N = {
                            flexGrow: "1",
                            margin: "0 auto",
                            alignSelf: "center"
                        },
                        R = {
                            color: "var(--apple-pay-link-color, #0066CC)",
                            textDecoration: "none"
                        },
                        B = {
                            textDecoration: "underline"
                        },
                        O = {
                            color: "var(--apple-pay-text-color-dark, #F5F5F7)"
                        },
                        j = {
                            color: "var(--apple-pay-text-color, #1D1D1F)"
                        },
                        D = {
                            color: "var(--apple-pay-link-color-dark, #2997FF)"
                        },
                        I = {
                            color: "var(--apple-pay-link-color, #0066CC)"
                        },
                        F = {
                            display: "block",
                            height: "2rem",
                            overflow: "visible"
                        };
                    var _ = !1;
                    if ("undefined" != typeof window) {
                        var Z = {
                            get passive() {
                                _ = !0
                            }
                        };
                        window.addEventListener("testPassive", null, Z), window.removeEventListener("testPassive", null, Z)
                    }
                    var W = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1),
                        H = [],
                        U = !1,
                        q = -1,
                        V = void 0,
                        K = void 0,
                        J = void 0,
                        G = function(t) {
                            return H.some((function(e) {
                                return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t))
                            }))
                        },
                        Y = function(t) {
                            var e = t || window.event;
                            return !!G(e.target) || (e.touches.length > 1 || (e.preventDefault && e.preventDefault(), !1))
                        },
                        X = function(t, e) {
                            if (t) {
                                if (!H.some((function(e) {
                                        return e.targetElement === t
                                    }))) {
                                    var n = {
                                        targetElement: t,
                                        options: e || {}
                                    };
                                    H = [].concat(function(t) {
                                        if (Array.isArray(t)) {
                                            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                                            return n
                                        }
                                        return Array.from(t)
                                    }(H), [n]), W ? window.requestAnimationFrame((function() {
                                        if (void 0 === K) {
                                            K = {
                                                position: document.body.style.position,
                                                top: document.body.style.top,
                                                left: document.body.style.left
                                            };
                                            var t = window,
                                                e = t.scrollY,
                                                n = t.scrollX,
                                                a = t.innerHeight;
                                            document.body.style.position = "fixed", document.body.style.top = -e, document.body.style.left = -n, setTimeout((function() {
                                                return window.requestAnimationFrame((function() {
                                                    var t = a - window.innerHeight;
                                                    t && e >= a && (document.body.style.top = -(e + t))
                                                }))
                                            }), 300)
                                        }
                                    })) : function(t) {
                                        if (void 0 === J) {
                                            var e = !!t && !0 === t.reserveScrollBarGap,
                                                n = window.innerWidth - document.documentElement.clientWidth;
                                            if (e && n > 0) {
                                                var a = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
                                                J = document.body.style.paddingRight, document.body.style.paddingRight = a + n + "px"
                                            }
                                        }
                                        void 0 === V && (V = document.body.style.overflow, document.body.style.overflow = "hidden")
                                    }(e), W && (t.ontouchstart = function(t) {
                                        1 === t.targetTouches.length && (q = t.targetTouches[0].clientY)
                                    }, t.ontouchmove = function(e) {
                                        1 === e.targetTouches.length && function(t, e) {
                                            var n = t.targetTouches[0].clientY - q;
                                            !G(t.target) && (e && 0 === e.scrollTop && n > 0 || function(t) {
                                                return !!t && t.scrollHeight - t.scrollTop <= t.clientHeight
                                            }(e) && n < 0 ? Y(t) : t.stopPropagation())
                                        }(e, t)
                                    }, U || (document.addEventListener("touchmove", Y, _ ? {
                                        passive: !1
                                    } : void 0), U = !0))
                                }
                            } else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")
                        },
                        Q = function(t) {
                            t ? (H = H.filter((function(e) {
                                return e.targetElement !== t
                            })), W && (t.ontouchstart = null, t.ontouchmove = null, U && 0 === H.length && (document.removeEventListener("touchmove", Y, _ ? {
                                passive: !1
                            } : void 0), U = !1)), W ? function() {
                                if (void 0 !== K) {
                                    var t = -parseInt(document.body.style.top, 10),
                                        e = -parseInt(document.body.style.left, 10);
                                    document.body.style.position = K.position, document.body.style.top = K.top, document.body.style.left = K.left, window.scrollTo(e, t), K = void 0
                                }
                            }() : (void 0 !== J && (document.body.style.paddingRight = J, J = void 0), void 0 !== V && (document.body.style.overflow = V, V = void 0))) : console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")
                        },
                        tt = {
                            fontFamily: "var(--apple-pay-font-family, '-apple-system', 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif')",
                            position: "fixed",
                            overflow: "scroll",
                            top: "0",
                            left: "0",
                            right: "0",
                            bottom: "0",
                            display: "flex",
                            visibility: "hidden",
                            backgroundColor: "rgba(50,50,50,.58)",
                            justifyContent: "center",
                            padding: "2rem 0",
                            userSelect: "text",
                            opacity: "0",
                            transition: "visibility 0s .28s, opacity .28s, z-index 0s .28s",
                            zIndex: "-1"
                        },
                        et = {
                            visibility: "visible",
                            opacity: "1",
                            transition: "visibility 0s, opacity .28s, z-index 0s 0s",
                            zIndex: "9999"
                        };

                    function nt(t) {
                        var e = "";
                        switch (t) {
                            case "dark":
                                e = "#000";
                                break;
                            case "light":
                                e = "#FFF";
                                break;
                            default:
                                e = window.matchMedia("(prefers-color-scheme: dark)").matches ? "#000" : "#FFF"
                        }
                        return {
                            borderRadius: "21px",
                            background: e,
                            border: "none",
                            padding: "0",
                            width: "fit-content",
                            height: "fit-content",
                            position: "relative",
                            margin: "auto",
                            opacity: "0",
                            transform: "scale(.97) translateZ(0)",
                            transition: "all .108s .054s"
                        }
                    }
                    var at = {
                            "--apple-pay-modal-padding-top": "22px",
                            "--apple-pay-modal-padding-bottom": "22px",
                            "--apple-pay-modal-padding-inline": "22px"
                        },
                        ot = {
                            opacity: "1",
                            transform: "scale(1) translateZ(0)"
                        },
                        rt = {
                            backgroundColor: "#FFF"
                        },
                        it = {
                            backgroundColor: "#000"
                        },
                        st = {
                            backgroundColor: "#000"
                        },
                        lt = {
                            marginInlineStart: "var(--apple-pay-modal-padding-inline)",
                            marginInlineEnd: "var(--apple-pay-modal-padding-inline)",
                            marginTop: "var(--apple-pay-modal-padding-top)",
                            marginBottom: "var(--apple-pay-modal-padding-bottom)",
                            position: "relative"
                        },
                        ct = {
                            "learn-more": {
                                border: "none",
                                width: "320px",
                                height: "983px"
                            },
                            calculator: {
                                border: "none",
                                width: "320px",
                                height: "870px"
                            }
                        },
                        ht = {
                            "learn-more": {
                                width: "360px",
                                height: "966px"
                            },
                            calculator: {
                                width: "360px",
                                height: "858px"
                            }
                        },
                        dt = {
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            width: "36px",
                            height: "36px",
                            borderRadius: "36px",
                            display: "flex",
                            backgroundColor: "rgb(232, 232, 237)",
                            color: "rgba(0, 0, 0, 0.56)",
                            justifyContent: "center",
                            alignItems: "center",
                            outline: "none"
                        },
                        pt = {
                            backgroundColor: "rgb(236, 236, 240)",
                            color: "rgba(0, 0, 0, 0.72)"
                        },
                        ut = {
                            fill: "currentColor",
                            width: "20px",
                            height: "20px"
                        },
                        wt = {
                            backgroundColor: "#333336",
                            color: "rgba(255,255,255,0.8)"
                        },
                        mt = {
                            backgroundColor: "#37373a",
                            color: "#fff"
                        },
                        ft = new WeakMap;
                    class gt extends HTMLElement {
                        constructor() {
                            super(), ft.set(this, {
                                writable: !0,
                                value: void 0
                            }), a(this, "open", !1), a(this, "ready", !1), a(this, "url", vt.url), a(this, "theme", vt.theme), a(this, "locale", vt.locale), a(this, "storedTheme", ""), this.close = this.close.bind(this)
                        }
                        connectedCallback() {
                            var t = this;
                            return l((function*() {
                                r(t, ft, t.attachShadow({
                                    mode: "closed"
                                })), t.update(), o(t, ft).addEventListener("click", e => {
                                    e.preventDefault(), e.stopPropagation();
                                    var n = e.target.closest('a[href*="'.concat("#apple-pay-close", '"]'));
                                    n && e.currentTarget.contains(n) && t.close()
                                }), t.addEventListener("click", e => t.close())
                            }))()
                        }
                        show(t) {
                            this.locale = t.locale, this.theme = t.theme, this.url = t.url;
                            var e = o(this, ft).getElementById("dialog-section");
                            this.storedTheme ? e.classList.replace("theme-".concat(this.storedTheme), "theme-".concat(t.theme)) : e.classList.add("theme-".concat(t.theme)), this.storedTheme = t.theme, this.applyAllStyles(o(this, ft)), X(this.ownerDocument.body || this.ownerDocument.documentElement), this.setAttribute("open", "");
                            var n = o(this, ft).querySelector("iframe");
                            n.src = o(this, ft).host.getAttribute("url");
                            var a = ""; - 1 !== t.url.indexOf("calculator.html") ? a = "calculator" : -1 !== t.url.indexOf("learn-more.html") && (a = "learn-more");
                            var r = () => {
                                window.matchMedia("(min-width: 376px)").matches ? y(n, ht[a]) : y(n, ct[a])
                            };
                            if (r(), window.addEventListener("resize", r), this.ready) return n.style.visibility = "visible", void this.attributesReady(n);
                            this.ready = !0, Promise.race([new Promise(t => n.onload = t), new Promise((t, e) => setTimeout(e, 10800))]).then(() => {
                                this.attributesReady(n), n.style.visibility = "visible"
                            }, () => (console.error("Modal loading timeout. Check connection or try again later."), this.close()))
                        }
                        attributesReady(t) {
                            t.contentWindow.postMessage("showing", new URL(t.src).origin);
                            var e = o(this, ft).querySelector("svg");
                            e.style.visibility = "visible", e.style.height = "36px", bt.style.visibility = "visible", this.open = !0
                        }
                        close() {
                            Q(this.ownerDocument.body || this.ownerDocument.documentElement), this.removeAttribute("open"), this.open = !1
                        }
                        update() {
                            o(this, ft).innerHTML = "";
                            var t = document.createElement("section");
                            t.className = "dialog", t.id = "dialog-section", t.setAttribute("role", "dialog"), t.setAttribute("aria-modal", "true"), o(this, ft).appendChild(t);
                            var e = document.createElement("div");
                            e.className = "content", t.appendChild(e);
                            var n = document.createElement("iframe");
                            n.src = this.url, n.frameBorder = "0", n.scrolling = "no", n.loading = "lazy", n.style.visibility = "hidden", e.appendChild(n);
                            var a = document.createElement("a");
                            a.className = "close", a.style.height = "36px", a.setAttribute("aria-label", "Close Button"), a.href = "#apple-pay-close", t.appendChild(a);
                            var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            r.setAttribute("alt", "Close Button"), r.setAttribute("xmlns", "http://www.w3.org/2000/svg"), r.setAttribute("viewBox", "0 0 20 20"), r.setAttribute("width", "36px"), r.setAttribute("height", "36px"), r.style.visibility = "hidden", a.appendChild(r);
                            var i = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            i.setAttribute("d", "M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"), r.appendChild(i), this.applyAllStyles(o(this, ft))
                        }
                        static get observedAttributes() {
                            return [yt, "open"]
                        }
                        attributeChangedCallback(t, e, n) {
                            switch (t) {
                                case "open":
                                    this.openCallBack(n);
                                    break;
                                case yt:
                                    this.dashKeysCallback(t, e, n)
                            }
                        }
                        openCallBack(t) {
                            var e = o(this, ft).querySelector(".dialog");
                            "" === t ? (y(o(this, ft).host, et), y(e, ot)) : (y(o(this, ft).host, tt), y(e, nt(this.theme)), v(e, at))
                        }
                        dashKeysCallback(t, e, n) {
                            t = c(t), null == n ? delete this[t] : this[t] = "true" === n || "false" !== n && ("" === n || n), n !== e && this.update()
                        }
                        applyAllStyles(t) {
                            var e = t.host,
                                n = t.querySelector(".dialog"),
                                a = t.querySelector(".dialog .content");
                            t.querySelector(".dialog iframe");
                            var o = t.querySelector(".dialog .close"),
                                r = t.querySelector(".dialog .close svg"),
                                i = window.matchMedia("(prefers-color-scheme: dark)").matches,
                                s = n.getAttribute("class");
                            if (y(e, tt), y(n, nt(this.theme)), v(n, at), y(a, lt), y(o, dt), y(r, ut), e.hasAttribute("open") && (y(e, et), y(n, ot)), o.addEventListener("mouseenter", () => {
                                    y(o, pt)
                                }), o.addEventListener("mouseleave", () => {
                                    y(o, dt)
                                }), t.host.classList.contains("theme-dark") && y(o, wt), "theme-dark" === s) y(n, it);
                            else if ("theme-auto" === s) {
                                window.matchMedia("(prefers-color-scheme: dark)").matches && y(n, st)
                            } else "theme-light" === s && y(n, rt);
                            (t.host.classList.contains("theme-dark") || t.host.classList.contains("theme-auto")) && (o.addEventListener("mouseenter", () => {
                                y(o, mt)
                            }), o.addEventListener("mouseleave", () => {
                                y(o, wt)
                            })), t.host.classList.contains("theme-auto") && i && y(o, wt), t.host.classList.contains("theme-auto") && i && (o.addEventListener("mouseenter", () => {
                                y(o, mt)
                            }), o.addEventListener("mouseleave", () => {
                                y(o, wt)
                            }))
                        }
                    }
                    var vt = {
                            theme: "auto",
                            locale: "en-US",
                            url: ""
                        },
                        yt = Object.keys(vt).map(h);
                    Object.assign(gt.prototype, vt), customElements.define("apple-pay-merchandising-modal", gt);
                    var bt = document.createElement("apple-pay-merchandising-modal");
                    bt.style.visibility = "hidden", document.contains(bt) || (document.body || document.documentElement).appendChild(bt);
                    var $t, Ct, Lt, xt = function(t, e) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return e.get(t)
                        },
                        kt = function(t, e, n) {
                            if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                            return e.set(t, n), n
                        },
                        St = {
                            us: {
                                text: {
                                    en: {
                                        badge: '<a class="info-circle" href="{{ modalUrl }}"><svg width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M29.9475268,59.5867724 C46.1333288,59.5867724 59.534715,46.15661 59.534715,29.9998218 C59.534715,13.8140198 46.1043387,0.412871288 29.9185367,0.412871288 C13.7617248,0.412871288 0.36059406,13.8140198 0.36059406,29.9998218 C0.36059406,46.15661 13.7907743,59.5867724 29.9475268,59.5867724 Z M29.9475268,54.6556041 C16.256299,54.6556041 5.32073466,43.6910496 5.32073466,29.9998218 C5.32073466,16.3085941 16.2273089,5.34403961 29.9185367,5.34403961 C43.6097644,5.34403961 54.5743189,16.3085941 54.6035429,29.9998218 C54.6325367,43.6910496 43.6387545,54.6556041 29.9475268,54.6556041 Z M29.6864971,19.673406 C31.8039624,19.673406 33.4573486,17.9909703 33.4573486,15.873505 C33.4573486,13.7559802 31.8039624,12.073604 29.6864971,12.073604 C27.5979624,12.073604 25.9155862,13.7559802 25.9155862,15.873505 C25.9155862,17.9909703 27.5979624,19.673406 29.6864971,19.673406 Z M24.8713486,45.9535605 L36.6770912,45.9535605 C37.8663981,45.9535605 38.7946159,45.0833585 38.7946159,43.8940991 C38.7946159,42.7628318 37.8663981,41.863604 36.6770912,41.863604 L33.0802991,41.863604 L33.0802991,27.0991486 C33.0802991,25.5327921 32.2970911,24.4885545 30.8177644,24.4885545 L25.3644773,24.4885545 C24.1751703,24.4885545 23.2469525,25.3877228 23.2469525,26.5189901 C23.2469525,27.7082971 24.1751703,28.5784753 25.3644773,28.5784753 L28.4682,28.5784753 L28.4682,41.863604 L24.8713486,41.863604 C23.6820416,41.863604 22.7538238,42.7628318 22.7538238,43.8940991 C22.7538238,45.0833585 23.6820416,45.9535605 24.8713486,45.9535605 Z" transform="translate(2 2)"></path></svg></a>',
                                        plain: 'Pay in full or split your purchase into {{ frequency }} interest-free payments with Apple Pay Later. <a href="{{ modalUrl }}"><strong>Learn&nbsp;more</strong></a>',
                                        price: 'Or {{ frequency }} interest‑free payments from {{ paymentsAmount }} with Apple Pay Later. <a href="{{ modalUrl }}"><strong>Learn&nbsp;more</strong></a>',
                                        checkout: 'Pay in full or split your purchase into {{ frequency }}&nbsp;interest‑free payments from {{ paymentsAmount }} with Apple Pay Later. <a href="{{ modalUrl }}"><strong>Learn&nbsp;more</strong></a>'
                                    }
                                },
                                legal: {
                                    default: "Apple Pay Later is currently only available to customers invited to access a prerelease version. Payment amounts shown above and on product page may exclude taxes, shipping, and other fees. Subject to eligibility and approval. Available only in the U.S., in apps and online with an iPhone or iPad updated to the latest version of iOS or iPadOS. May not be available in all states. Not available in U.S. territories. Loans made by Apple Financing LLC, NMLS #2154940. CA loans made or arranged pursuant to a California Financing Law license. For more eligibility details, see https://support.apple.com/en-us/HT212967.",
                                    calculator1: "Apple Pay Later is currently only available to customers invited to access a prerelease version. Payment amounts shown above and on product page may exclude taxes, shipping, and other fees. Subject to eligibility and approval. Available only in the U.S., in apps and online with an iPhone or iPad updated to the latest version of iOS or iPadOS. May not be available in all states. Not available in U.S. territories. Loans made by Apple Financing LLC, NMLS #2154940. CA loans made or arranged pursuant to a California Financing Law license. For more eligibility details, see https://support.apple.com/en-us/HT212967.",
                                    calculator2: "Your bank may charge you fees if your debit card account contains insufficient funds to make loan repayments.",
                                    learnMore2: "Your bank may charge you fees if your debit card account contains insufficient funds to make loan repayments.",
                                    learnMore3: "Upon purchase, your Apple Pay Later loan and payment history may be reported to credit bureaus and impact your credit."
                                },
                                nativeContent: {
                                    en: {
                                        promoText: "Pay in full or split your purchase into {frequency} interest-free payments with Apple Pay Later."
                                    }
                                },
                                nativeStyling: {
                                    width: 360,
                                    height: 750
                                },
                                modal: {
                                    en: {
                                        "large-title": "Shop now.<br/>Apple Pay Later.",
                                        intro: "<span class='inline-block'>Select Apple Pay at checkout to pay in</span> <span class='inline-block'>full or choose Pay Later to split your</span> <span class='inline-block'>purchase into 4 equal payments.<sup><a href='#footnote-1' class='footnote'>1</a></sup></span><span class='inline-block'> No fees.<sup><a href='#footnote-2' class='footnote'>2</a></sup> No interest. No surprises.</span>",
                                        payments: "Example payments for",
                                        amount: "{{ paymentsAmount }} every 2 weeks",
                                        frequency: "{{ frequency }} payments",
                                        today: 'Due Today <span class="float-right">{{ paymentsAmount }}</span>',
                                        "2weeks": 'In 2 Weeks <span class="float-right">{{ paymentsAmount }}</span>',
                                        "4weeks": 'In 4 Weeks <span class="float-right">{{ paymentsAmount }}</span>',
                                        "6weeks": 'In 6 Weeks <span class="float-right">{{ lastPaymentAmount }}</span>',
                                        total: "Total Cost {{ amount }}",
                                        interest: "No Interest"
                                    }
                                },
                                learnMore: {
                                    en: {
                                        "large-title": "Shop now.<br/>Apple Pay Later.",
                                        intro: "Pay in full with Apple Pay or split your purchase into 4 equal payments with <span class='inline-block'>Apple Pay Later.<sup><a href='#footnote-1' class='footnote'>1</a></sup></span>",
                                        headline1: "No fees.<sup><a href='#footnote-2' class='footnote'>2</a></sup> No interest. <span class='inline-block'>No surprises.</span>",
                                        subheadline1: "Get transparency into your payment <span class='inline-block'>schedule before every purchase. </span><span class='inline-block'>And no extra charges from Apple.</span>",
                                        headline2: "Easy to use.",
                                        subheadline2: "Apply in minutes with no impact to your <span class='inline-block'>credit.<sup><a href='#footnote-3' class='footnote'>3</a></sup> Choose Apple Pay at checkout, then</span> select Pay Later.",
                                        headline3: "Designed with privacy <span class='inline-block'>and security in mind.</span>",
                                        subheadline3: "Apple will never sell your data to third parties.<span class='inline-block'> All purchases are protected with Face ID,</span><span class='inline-block'> Touch ID, or passcode.</span>",
                                        headline4: "Built into Apple Wallet.",
                                        subheadline4: "Nothing to set up or download.<br/>No additional apps or passwords."
                                    }
                                },
                                accessibility: {
                                    en: {
                                        applePayLaterLogo: "Apple Pay Later",
                                        applePayIcon: "Apple Pay icon",
                                        priceTagIcon: "Price Tag icon",
                                        dollarSignIcon: "Dollar Sign icon",
                                        checkMarkIcon: "Check Mark icon",
                                        walletIcon: "Wallet icon",
                                        applePayLaterAppLogo: "Apple Pay Later Icon",
                                        closeButton: "Close Button"
                                    }
                                },
                                presets: {
                                    badge: {
                                        logoType: "pay_later",
                                        logoStyle: "none",
                                        logoAlign: "left"
                                    },
                                    plain: {
                                        logoType: "pay",
                                        logoAlign: "left",
                                        logoStyle: "white"
                                    },
                                    checkout: {
                                        logoType: "pay",
                                        logoAlign: "left",
                                        logoStyle: "white"
                                    },
                                    price: {
                                        logoType: "pay",
                                        logoAlign: "left",
                                        logoStyle: "white"
                                    },
                                    custom: {
                                        logoType: "none",
                                        logoAlign: "left",
                                        logoStyle: "none"
                                    }
                                },
                                currencyCode: "USD",
                                method: {
                                    bnpl: {
                                        minAmount: 50,
                                        maxAmount: 1e3,
                                        frequency: 4
                                    }
                                }
                            }
                        },
                        Mt = {
                            apple_pay_later_logo_black: '<svg xmlns="http://www.w3.org/2000/svg" width="476.234" height="99.409" viewBox="0 0 476.234 99.409" style="enable-background:new 0 0 476.234 99.409" xml:space="preserve"><path d="M105.946 5.505c14.176 0 24.048 9.771 24.048 23.998 0 14.277-10.074 24.1-24.402 24.1H89.896v24.96h-11.34V5.505h27.39zm-16.05 38.579h13.012c9.873 0 15.492-5.315 15.492-14.53 0-9.214-5.619-14.479-15.441-14.479H89.896v29.009zm43.164 19.341c0-9.316 7.139-15.037 19.796-15.746l14.581-.86v-4.101c0-5.924-4-9.468-10.683-9.468-6.329 0-10.278 3.037-11.24 7.797h-10.328c.607-9.62 8.81-16.708 21.973-16.708 12.911 0 21.163 6.835 21.163 17.518v36.706h-10.48v-8.759h-.253c-3.088 5.924-9.821 9.67-16.809 9.67-10.429 0-17.72-6.481-17.72-16.049zm34.377-4.81v-4.202l-13.113.81c-6.531.456-10.227 3.342-10.227 7.898 0 4.657 3.848 7.695 9.721 7.695 7.645 0 13.619-5.265 13.619-12.201zm20.779 39.541v-8.86c.81.202 2.632.202 3.544.202 5.062 0 7.797-2.126 9.467-7.594 0-.102.963-3.24.963-3.291l-19.24-53.312h11.847l13.468 43.339h.202l13.468-43.339h11.543L213.53 81.347c-4.556 12.911-9.821 17.062-20.858 17.062-.912 0-3.647-.101-4.456-.253zm112.339-19.594h-45.363V5.505h11.341V68.74h34.022v9.822zm4.937-15.137c0-9.316 7.139-15.037 19.796-15.746l14.581-.86v-4.101c0-5.924-4-9.468-10.683-9.468-6.329 0-10.278 3.037-11.24 7.797h-10.328c.607-9.62 8.81-16.708 21.973-16.708 12.911 0 21.163 6.835 21.163 17.518v36.706h-10.48v-8.759h-.253c-3.088 5.924-9.821 9.67-16.809 9.67-10.43 0-17.72-6.481-17.72-16.049zm34.377-4.81v-4.202l-13.113.81c-6.531.456-10.227 3.342-10.227 7.898 0 4.657 3.848 7.695 9.721 7.695 7.644 0 13.619-5.265 13.619-12.201zm35.649-45.921V25.3h10.125v8.658h-10.125v29.364c0 4.607 2.024 6.683 6.48 6.683 1.113 0 2.886-.101 3.594-.253v8.657c-1.215.305-3.645.507-6.075.507-10.784 0-14.986-4.101-14.986-14.379V33.959h-7.746v-8.658h7.746V12.694h10.987zm63.409 50.224c-1.519 9.721-10.733 16.657-22.935 16.657-15.645 0-25.111-10.581-25.111-27.391 0-16.707 9.619-27.846 24.656-27.846 14.783 0 23.997 10.43 23.997 26.58v3.747h-37.616v.658c0 9.265 5.568 15.391 14.327 15.391 6.228 0 10.835-3.139 12.303-7.797h10.379zM401.968 47.02h26.631c-.253-8.15-5.417-13.872-13.062-13.872s-13.012 5.823-13.569 13.872zm46.028-21.719h10.43v9.062h.253c1.772-6.227 6.531-9.923 12.81-9.923 1.569 0 2.937.253 3.746.405v10.176c-.86-.354-2.784-.607-4.911-.607-7.037 0-11.391 4.709-11.391 12.252v31.896h-10.937V25.301zm-400.1-6.172c-6.518-.482-12.048 3.641-15.133 3.641-3.13 0-7.956-3.537-13.074-3.44-6.719.098-12.912 3.91-16.377 9.926C-3.667 41.369 1.53 59.32 8.328 69.15c3.325 4.803 7.291 10.216 12.5 10.019 5.014-.197 6.911-3.243 12.972-3.243 6.057 0 7.766 3.243 13.068 3.146 5.397-.1 8.816-4.903 12.117-9.733 3.82-5.575 5.389-10.973 5.482-11.259-.119-.045-10.52-4.036-10.624-16.019-.094-10.018 8.177-14.834 8.553-15.066-4.693-6.914-11.945-7.677-14.5-7.866zm-4.022-6.489C46.642 9.294 48.505 4.634 47.992 0c-3.984.158-8.803 2.654-11.661 5.998-2.559 2.962-4.807 7.706-4.196 12.246 4.441.342 8.973-2.257 11.739-5.604z"/></svg>',
                            apple_pay_later_mark_black: '<svg viewBox="0 0 299 106" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M283.698,0 L14.823,0 C14.257,0 13.69,0 13.125,0.003 C12.648,0.007 12.172,0.012 11.695,0.025 C10.656,0.053 9.608,0.115 8.582,0.299 C7.55304935,0.475289397 6.5561053,0.803896713 5.624,1.274 C3.75016438,2.22707876 2.22707876,3.75016438 1.274,5.624 C0.803057197,6.55646163 0.474412543,7.5541931 0.299,8.584 C0.113,9.611 0.052,10.658 0.024,11.696 C0.011,12.173 0.005,12.649 0,13.126 C0,13.69 0,14.256 0,14.823 L0,91.141 C0,91.708 0,92.273 0,92.84 C0.005,93.316 0.011,93.793 0.024,94.27 C0.052,95.306 0.114,96.354 0.299,97.38 C0.474052532,98.4097641 0.802361489,99.4074997 1.273,100.34 C1.74618424,101.271314 2.36382962,102.121842 3.103,102.86 C3.84090499,103.599466 4.69148278,104.217148 5.623,104.69 C6.57,105.173 7.54,105.48 8.583,105.667 C9.608,105.85 10.656,105.912 11.695,105.94 C12.172,105.951 12.648,105.958 13.125,105.96 C13.69,105.964 14.257,105.964 14.823,105.964 L283.698,105.964 C284.263,105.964 284.83,105.964 285.395,105.96 C285.87205,105.957616 286.349069,105.950949 286.826,105.94 C287.863,105.912 288.911,105.85 289.939,105.667 C290.968174,105.490543 291.96519,105.161238 292.897,104.69 C294.769895,103.735625 296.292625,102.212895 297.247,100.34 C297.73,99.393 298.036,98.423 298.221,97.38 C298.407,96.354 298.467,95.306 298.495,94.27 C298.508,93.793 298.515,93.316 298.517,92.84 C298.521,92.273 298.521,91.708 298.521,91.141 L298.521,14.824 C298.521,14.257 298.521,13.691 298.517,13.125 C298.515064,12.6485989 298.50773,12.172235 298.495,11.696 C298.467,10.658 298.407,9.611 298.221,8.584 C298.046831,7.55401695 297.71848,6.55615176 297.247,5.624 C296.293413,3.75053315 294.770467,2.22758663 292.897,1.274 C291.964782,0.80438048 290.967861,0.476117852 289.939,0.3 C288.911,0.115 287.863,0.054 286.826,0.026 C286.349085,0.0138870152 285.872062,0.00655331365 285.395,0.004 C284.83,0 284.263,0 283.698,0 Z" id="Outline" fill="rgba(255,255,255,.075)"></path><path d="M285.37,3.535 C285.822,3.538 286.275,3.543 286.73,3.555 C287.522,3.577 288.449,3.62 289.313,3.775 C290.063,3.91 290.693,4.115 291.297,4.423 C292.505746,5.03755904 293.487734,6.0205978 294.101,7.23 C294.407,7.83 294.611,8.456 294.746,9.213 C294.9,10.067 294.943,10.996 294.964,11.793 C294.977,12.243 294.983,12.693 294.984,13.153 C294.989,13.71 294.989,14.266 294.989,14.824 L294.989,91.142 C294.989,91.7 294.989,92.256 294.985,92.824 C294.983,93.274 294.977,93.724 294.965,94.174 C294.943,94.97 294.9,95.899 294.744,96.763 C294.630594,97.4502806 294.413097,98.1162614 294.099,98.738 C293.484409,99.9478082 292.501027,100.93084 291.291,101.545 C290.691,101.851 290.063,102.057 289.32,102.19 C288.438,102.347 287.473,102.39 286.746,102.41 C286.289,102.42 285.834,102.427 285.367,102.429 C284.812,102.433 284.254,102.433 283.698,102.433 L14.801,102.433 C14.251,102.433 13.701,102.433 13.141,102.429 C12.6909551,102.427046 12.240937,102.421046 11.791,102.411 C11.047,102.391 10.081,102.347 9.207,102.191 C8.51598039,102.075842 7.84638728,101.85669 7.221,101.541 C6.62111744,101.236271 6.07359362,100.837949 5.599,100.361 C5.12290857,99.8857571 4.72529217,99.3379376 4.421,98.738 C4.10640097,98.1127736 3.88826296,97.4435248 3.774,96.753 C3.619,95.89 3.576,94.965 3.554,94.175 C3.54269765,93.7234137 3.53603063,93.2717232 3.532,92.82 L3.532,91.493 L3.532,14.474 L3.532,13.149 C3.537,12.696 3.542,12.244 3.554,11.792 C3.576,11 3.619,10.075 3.776,9.205 C3.89017322,8.51586104 4.10797216,7.84796678 4.422,7.224 C4.726,6.626 5.122,6.08 5.602,5.602 C6.07772872,5.1254978 6.62583457,4.72724354 7.226,4.422 C7.8498075,4.10823092 8.5172811,3.89012212 9.206,3.775 C10.071,3.62 10.998,3.577 11.792,3.555 C12.244,3.543 12.697,3.538 13.146,3.535 L14.823,3.532 L283.698,3.532 L285.37,3.535 Z" id="Bg" fill="#000"></path><path d="M45.186,35.64 C46.603,33.868 47.566,31.488 47.312,29.055 C45.237,29.159 42.705,30.425 41.239,32.198 C39.923,33.718 38.759,36.198 39.062,38.528 C41.392,38.73 43.718,37.363 45.186,35.641 M47.285,38.983 C43.903,38.781 41.027,40.902 39.412,40.902 C37.796,40.902 35.322,39.084 32.648,39.133 C29.166,39.184 25.935,41.153 24.168,44.283 C20.534,50.547 23.209,59.839 26.743,64.94 C28.46,67.464 30.528,70.243 33.253,70.143 C35.828,70.042 36.837,68.475 39.967,68.475 C43.095,68.475 44.004,70.143 46.73,70.092 C49.557,70.042 51.324,67.567 53.04,65.041 C55.009,62.164 55.815,59.386 55.865,59.233 C55.815,59.183 50.415,57.111 50.365,50.9 C50.314,45.699 54.605,43.225 54.806,43.072 C52.383,39.488 48.597,39.084 47.286,38.982 M76.734,31.944 C84.084,31.944 89.204,37.011 89.204,44.388 C89.204,51.792 83.979,56.885 76.55,56.885 L68.41,56.885 L68.41,69.828 L62.53,69.828 L62.53,31.944 L76.734,31.944 Z M68.41,51.949 L75.157,51.949 C80.277,51.949 83.191,49.193 83.191,44.415 C83.191,39.637 80.277,36.906 75.183,36.906 L68.41,36.906 L68.41,51.95 L68.41,51.949 Z M90.74,61.979 C90.74,57.148 94.442,54.181 101.006,53.813 L108.566,53.367 L108.566,51.241 C108.566,48.169 106.492,46.331 103.027,46.331 C99.745,46.331 97.697,47.906 97.199,50.374 L91.843,50.374 C92.158,45.386 96.411,41.71 103.237,41.71 C109.932,41.71 114.211,45.255 114.211,50.794 L114.211,69.828 L108.776,69.828 L108.776,65.286 L108.646,65.286 C107.044,68.358 103.552,70.301 99.929,70.301 C94.521,70.301 90.74,66.941 90.74,61.979 L90.74,61.979 Z M108.566,59.485 L108.566,57.305 L101.766,57.725 C98.38,57.962 96.463,59.458 96.463,61.821 C96.463,64.236 98.459,65.811 101.504,65.811 C105.468,65.811 108.566,63.081 108.566,59.485 L108.566,59.485 Z M119.342,79.989 L119.342,75.394 C119.761,75.499 120.706,75.499 121.179,75.499 C123.804,75.499 125.222,74.397 126.088,71.561 C126.088,71.509 126.588,69.881 126.588,69.855 L116.611,42.209 L122.754,42.209 L129.738,64.683 L129.842,64.683 L136.827,42.209 L142.812,42.209 L132.468,71.272 C130.106,77.967 127.375,80.12 121.652,80.12 C121.179,80.12 119.761,80.067 119.342,79.989 L119.342,79.989 Z" id="Pay" fill="#fff"></path><path d="M181.896484,70 L181.896484,64.7792969 L164.204102,64.7792969 L164.204102,31.9521484 L158.113281,31.9521484 L158.113281,70 L181.896484,70 Z M194.369219,70.5009766 C198.113359,70.5009766 201.224688,68.734375 202.859453,65.8076172 L203.149492,65.8076172 L203.149492,70 L209.003008,70 L209.003008,50.6201172 C209.003008,44.8193359 204.784258,41.2333984 197.770586,41.2333984 C191.020586,41.2333984 186.696367,44.6347656 186.142656,49.4072266 L186.116289,49.6445312 L191.706133,49.6445312 L191.7325,49.4863281 C192.312578,47.4033203 194.342852,46.0585938 197.533281,46.0585938 C201.171953,46.0585938 203.149492,47.8251953 203.149492,50.8574219 L203.149492,53.1513672 L195.555742,53.5996094 C188.805742,53.9951172 185.008867,56.9746094 185.008867,61.9580078 L185.008867,62.0107422 C185.008867,67.1259766 188.884844,70.5009766 194.369219,70.5009766 Z M196.003984,65.8339844 C192.971758,65.8339844 190.88875,64.3046875 190.88875,61.7998047 L190.88875,61.7470703 C190.88875,59.3212891 192.708086,57.8974609 196.346758,57.6601562 L203.149492,57.2382812 L203.149492,59.5322266 C203.149492,63.1181641 200.090898,65.8339844 196.003984,65.8339844 Z M225.06168,70.3691406 C226.221836,70.3691406 227.302891,70.2373047 228.120273,70.1054688 L228.120273,65.5175781 C227.513828,65.5703125 227.012852,65.6230469 226.248203,65.6230469 C223.637852,65.6230469 222.451328,64.5683594 222.451328,61.6416016 L222.451328,46.4013672 L228.120273,46.4013672 L228.120273,41.7871094 L222.451328,41.7871094 L222.451328,34.5888672 L216.439609,34.5888672 L216.439609,41.7871094 L212.220859,41.7871094 L212.220859,46.4013672 L216.439609,46.4013672 L216.439609,62.5380859 C216.439609,68.0751953 219.102695,70.3691406 225.06168,70.3691406 Z M244.23168,70.5537109 C251.377187,70.5537109 255.464102,66.3876953 256.386953,62.3007812 L256.439687,62.0634766 L250.823477,62.0634766 L250.744375,62.2480469 C250.058828,64.0146484 247.870352,65.78125 244.363516,65.78125 C239.801992,65.78125 236.901602,62.6962891 236.796133,57.3964844 L256.729727,57.3964844 L256.729727,55.3925781 C256.729727,46.9023438 251.851797,41.2333984 243.941641,41.2333984 C236.005117,41.2333984 230.889883,47.1132812 230.889883,55.9462891 L230.889883,55.9726562 C230.889883,64.9111328 235.926016,70.5537109 244.23168,70.5537109 Z M250.928945,53.2568359 L236.875234,53.2568359 C237.376211,48.5371094 240.223867,46.0058594 243.968008,46.0058594 C247.738516,46.0058594 250.480703,48.3789062 250.928945,53.2568359 Z M267.093086,70 L267.093086,53.2568359 C267.093086,49.1171875 269.703438,46.5859375 273.71125,46.5859375 C274.818672,46.5859375 275.820625,46.7177734 276.585273,46.9023438 L276.585273,41.4970703 C276.05793,41.3916016 275.187813,41.2597656 274.317695,41.2597656 C270.810859,41.2597656 268.332344,43.1582031 267.356758,46.3222656 L267.093086,46.3222656 L267.093086,41.7871094 L261.186836,41.7871094 L261.186836,70 L267.093086,70 Z" id="Later" fill="#fff"></path></svg>',
                            apple_pay_later_mark_none: '<svg viewBox="20 0 260 106" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M45.186,35.64 C46.603,33.868 47.566,31.488 47.312,29.055 C45.237,29.159 42.705,30.425 41.239,32.198 C39.923,33.718 38.759,36.198 39.062,38.528 C41.392,38.73 43.718,37.363 45.186,35.641 M47.285,38.983 C43.903,38.781 41.027,40.902 39.412,40.902 C37.796,40.902 35.322,39.084 32.648,39.133 C29.166,39.184 25.935,41.153 24.168,44.283 C20.534,50.547 23.209,59.839 26.743,64.94 C28.46,67.464 30.528,70.243 33.253,70.143 C35.828,70.042 36.837,68.475 39.967,68.475 C43.095,68.475 44.004,70.143 46.73,70.092 C49.557,70.042 51.324,67.567 53.04,65.041 C55.009,62.164 55.815,59.386 55.865,59.233 C55.815,59.183 50.415,57.111 50.365,50.9 C50.314,45.699 54.605,43.225 54.806,43.072 C52.383,39.488 48.597,39.084 47.286,38.982 M76.734,31.944 C84.084,31.944 89.204,37.011 89.204,44.388 C89.204,51.792 83.979,56.885 76.55,56.885 L68.41,56.885 L68.41,69.828 L62.53,69.828 L62.53,31.944 L76.734,31.944 Z M68.41,51.949 L75.157,51.949 C80.277,51.949 83.191,49.193 83.191,44.415 C83.191,39.637 80.277,36.906 75.183,36.906 L68.41,36.906 L68.41,51.95 L68.41,51.949 Z M90.74,61.979 C90.74,57.148 94.442,54.181 101.006,53.813 L108.566,53.367 L108.566,51.241 C108.566,48.169 106.492,46.331 103.027,46.331 C99.745,46.331 97.697,47.906 97.199,50.374 L91.843,50.374 C92.158,45.386 96.411,41.71 103.237,41.71 C109.932,41.71 114.211,45.255 114.211,50.794 L114.211,69.828 L108.776,69.828 L108.776,65.286 L108.646,65.286 C107.044,68.358 103.552,70.301 99.929,70.301 C94.521,70.301 90.74,66.941 90.74,61.979 L90.74,61.979 Z M108.566,59.485 L108.566,57.305 L101.766,57.725 C98.38,57.962 96.463,59.458 96.463,61.821 C96.463,64.236 98.459,65.811 101.504,65.811 C105.468,65.811 108.566,63.081 108.566,59.485 L108.566,59.485 Z M119.342,79.989 L119.342,75.394 C119.761,75.499 120.706,75.499 121.179,75.499 C123.804,75.499 125.222,74.397 126.088,71.561 C126.088,71.509 126.588,69.881 126.588,69.855 L116.611,42.209 L122.754,42.209 L129.738,64.683 L129.842,64.683 L136.827,42.209 L142.812,42.209 L132.468,71.272 C130.106,77.967 127.375,80.12 121.652,80.12 C121.179,80.12 119.761,80.067 119.342,79.989 L119.342,79.989 Z" id="Pay"></path><path d="M181.896484,70 L181.896484,64.7792969 L164.204102,64.7792969 L164.204102,31.9521484 L158.113281,31.9521484 L158.113281,70 L181.896484,70 Z M194.369219,70.5009766 C198.113359,70.5009766 201.224688,68.734375 202.859453,65.8076172 L203.149492,65.8076172 L203.149492,70 L209.003008,70 L209.003008,50.6201172 C209.003008,44.8193359 204.784258,41.2333984 197.770586,41.2333984 C191.020586,41.2333984 186.696367,44.6347656 186.142656,49.4072266 L186.116289,49.6445312 L191.706133,49.6445312 L191.7325,49.4863281 C192.312578,47.4033203 194.342852,46.0585938 197.533281,46.0585938 C201.171953,46.0585938 203.149492,47.8251953 203.149492,50.8574219 L203.149492,53.1513672 L195.555742,53.5996094 C188.805742,53.9951172 185.008867,56.9746094 185.008867,61.9580078 L185.008867,62.0107422 C185.008867,67.1259766 188.884844,70.5009766 194.369219,70.5009766 Z M196.003984,65.8339844 C192.971758,65.8339844 190.88875,64.3046875 190.88875,61.7998047 L190.88875,61.7470703 C190.88875,59.3212891 192.708086,57.8974609 196.346758,57.6601562 L203.149492,57.2382812 L203.149492,59.5322266 C203.149492,63.1181641 200.090898,65.8339844 196.003984,65.8339844 Z M225.06168,70.3691406 C226.221836,70.3691406 227.302891,70.2373047 228.120273,70.1054688 L228.120273,65.5175781 C227.513828,65.5703125 227.012852,65.6230469 226.248203,65.6230469 C223.637852,65.6230469 222.451328,64.5683594 222.451328,61.6416016 L222.451328,46.4013672 L228.120273,46.4013672 L228.120273,41.7871094 L222.451328,41.7871094 L222.451328,34.5888672 L216.439609,34.5888672 L216.439609,41.7871094 L212.220859,41.7871094 L212.220859,46.4013672 L216.439609,46.4013672 L216.439609,62.5380859 C216.439609,68.0751953 219.102695,70.3691406 225.06168,70.3691406 Z M244.23168,70.5537109 C251.377187,70.5537109 255.464102,66.3876953 256.386953,62.3007812 L256.439687,62.0634766 L250.823477,62.0634766 L250.744375,62.2480469 C250.058828,64.0146484 247.870352,65.78125 244.363516,65.78125 C239.801992,65.78125 236.901602,62.6962891 236.796133,57.3964844 L256.729727,57.3964844 L256.729727,55.3925781 C256.729727,46.9023438 251.851797,41.2333984 243.941641,41.2333984 C236.005117,41.2333984 230.889883,47.1132812 230.889883,55.9462891 L230.889883,55.9726562 C230.889883,64.9111328 235.926016,70.5537109 244.23168,70.5537109 Z M250.928945,53.2568359 L236.875234,53.2568359 C237.376211,48.5371094 240.223867,46.0058594 243.968008,46.0058594 C247.738516,46.0058594 250.480703,48.3789062 250.928945,53.2568359 Z M267.093086,70 L267.093086,53.2568359 C267.093086,49.1171875 269.703438,46.5859375 273.71125,46.5859375 C274.818672,46.5859375 275.820625,46.7177734 276.585273,46.9023438 L276.585273,41.4970703 C276.05793,41.3916016 275.187813,41.2597656 274.317695,41.2597656 C270.810859,41.2597656 268.332344,43.1582031 267.356758,46.3222656 L267.093086,46.3222656 L267.093086,41.7871094 L261.186836,41.7871094 L261.186836,70 L267.093086,70 Z" id="Later"></path></svg>',
                            apple_pay_later_mark_white_outline: '<svg viewBox="0 0 299 106" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M283.698,0 L14.823,0 C14.257,0 13.69,0 13.125,0.003 C12.648,0.007 12.172,0.012 11.695,0.025 C10.656,0.053 9.608,0.115 8.582,0.299 C7.55304935,0.475289397 6.5561053,0.803896713 5.624,1.274 C3.75016438,2.22707876 2.22707876,3.75016438 1.274,5.624 C0.803057197,6.55646163 0.474412543,7.5541931 0.299,8.584 C0.113,9.611 0.052,10.658 0.024,11.696 C0.011,12.173 0.005,12.649 0,13.126 C0,13.69 0,14.256 0,14.823 L0,91.141 C0,91.708 0,92.273 0,92.84 C0.005,93.316 0.011,93.793 0.024,94.27 C0.052,95.306 0.114,96.354 0.299,97.38 C0.474052532,98.4097641 0.802361489,99.4074997 1.273,100.34 C1.74618424,101.271314 2.36382962,102.121842 3.103,102.86 C3.84090499,103.599466 4.69148278,104.217148 5.623,104.69 C6.57,105.173 7.54,105.48 8.583,105.667 C9.608,105.85 10.656,105.912 11.695,105.94 C12.172,105.951 12.648,105.958 13.125,105.96 C13.69,105.964 14.257,105.964 14.823,105.964 L283.698,105.964 C284.263,105.964 284.83,105.964 285.395,105.96 C285.87205,105.957616 286.349069,105.950949 286.826,105.94 C287.863,105.912 288.911,105.85 289.939,105.667 C290.968174,105.490543 291.96519,105.161238 292.897,104.69 C294.769895,103.735625 296.292625,102.212895 297.247,100.34 C297.73,99.393 298.036,98.423 298.221,97.38 C298.407,96.354 298.467,95.306 298.495,94.27 C298.508,93.793 298.515,93.316 298.517,92.84 C298.521,92.273 298.521,91.708 298.521,91.141 L298.521,14.824 C298.521,14.257 298.521,13.691 298.517,13.125 C298.515064,12.6485989 298.50773,12.172235 298.495,11.696 C298.467,10.658 298.407,9.611 298.221,8.584 C298.046831,7.55401695 297.71848,6.55615176 297.247,5.624 C296.293413,3.75053315 294.770467,2.22758663 292.897,1.274 C291.964782,0.80438048 290.967861,0.476117852 289.939,0.3 C288.911,0.115 287.863,0.054 286.826,0.026 C286.349085,0.0138870152 285.872062,0.00655331365 285.395,0.004 C284.83,0 284.263,0 283.698,0 Z" id="Outline" fill="#000000"></path><path d="M285.37,3.535 C285.822,3.538 286.275,3.543 286.73,3.555 C287.522,3.577 288.449,3.62 289.313,3.775 C290.063,3.91 290.693,4.115 291.297,4.423 C292.505746,5.03755904 293.487734,6.0205978 294.101,7.23 C294.407,7.83 294.611,8.456 294.746,9.213 C294.9,10.067 294.943,10.996 294.964,11.793 C294.977,12.243 294.983,12.693 294.984,13.153 C294.989,13.71 294.989,14.266 294.989,14.824 L294.989,91.142 C294.989,91.7 294.989,92.256 294.985,92.824 C294.983,93.274 294.977,93.724 294.965,94.174 C294.943,94.97 294.9,95.899 294.744,96.763 C294.630594,97.4502806 294.413097,98.1162614 294.099,98.738 C293.484409,99.9478082 292.501027,100.93084 291.291,101.545 C290.691,101.851 290.063,102.057 289.32,102.19 C288.438,102.347 287.473,102.39 286.746,102.41 C286.289,102.42 285.834,102.427 285.367,102.429 C284.812,102.433 284.254,102.433 283.698,102.433 L14.801,102.433 C14.251,102.433 13.701,102.433 13.141,102.429 C12.6909551,102.427046 12.240937,102.421046 11.791,102.411 C11.047,102.391 10.081,102.347 9.207,102.191 C8.51598039,102.075842 7.84638728,101.85669 7.221,101.541 C6.62111744,101.236271 6.07359362,100.837949 5.599,100.361 C5.12290857,99.8857571 4.72529217,99.3379376 4.421,98.738 C4.10640097,98.1127736 3.88826296,97.4435248 3.774,96.753 C3.619,95.89 3.576,94.965 3.554,94.175 C3.54269765,93.7234137 3.53603063,93.2717232 3.532,92.82 L3.532,91.493 L3.532,14.474 L3.532,13.149 C3.537,12.696 3.542,12.244 3.554,11.792 C3.576,11 3.619,10.075 3.776,9.205 C3.89017322,8.51586104 4.10797216,7.84796678 4.422,7.224 C4.726,6.626 5.122,6.08 5.602,5.602 C6.07772872,5.1254978 6.62583457,4.72724354 7.226,4.422 C7.8498075,4.10823092 8.5172811,3.89012212 9.206,3.775 C10.071,3.62 10.998,3.577 11.792,3.555 C12.244,3.543 12.697,3.538 13.146,3.535 L14.823,3.532 L283.698,3.532 L285.37,3.535 Z" id="Bg" fill="#FFFFFF"></path><path d="M45.186,35.64 C46.603,33.868 47.566,31.488 47.312,29.055 C45.237,29.159 42.705,30.425 41.239,32.198 C39.923,33.718 38.759,36.198 39.062,38.528 C41.392,38.73 43.718,37.363 45.186,35.641 M47.285,38.983 C43.903,38.781 41.027,40.902 39.412,40.902 C37.796,40.902 35.322,39.084 32.648,39.133 C29.166,39.184 25.935,41.153 24.168,44.283 C20.534,50.547 23.209,59.839 26.743,64.94 C28.46,67.464 30.528,70.243 33.253,70.143 C35.828,70.042 36.837,68.475 39.967,68.475 C43.095,68.475 44.004,70.143 46.73,70.092 C49.557,70.042 51.324,67.567 53.04,65.041 C55.009,62.164 55.815,59.386 55.865,59.233 C55.815,59.183 50.415,57.111 50.365,50.9 C50.314,45.699 54.605,43.225 54.806,43.072 C52.383,39.488 48.597,39.084 47.286,38.982 M76.734,31.944 C84.084,31.944 89.204,37.011 89.204,44.388 C89.204,51.792 83.979,56.885 76.55,56.885 L68.41,56.885 L68.41,69.828 L62.53,69.828 L62.53,31.944 L76.734,31.944 Z M68.41,51.949 L75.157,51.949 C80.277,51.949 83.191,49.193 83.191,44.415 C83.191,39.637 80.277,36.906 75.183,36.906 L68.41,36.906 L68.41,51.95 L68.41,51.949 Z M90.74,61.979 C90.74,57.148 94.442,54.181 101.006,53.813 L108.566,53.367 L108.566,51.241 C108.566,48.169 106.492,46.331 103.027,46.331 C99.745,46.331 97.697,47.906 97.199,50.374 L91.843,50.374 C92.158,45.386 96.411,41.71 103.237,41.71 C109.932,41.71 114.211,45.255 114.211,50.794 L114.211,69.828 L108.776,69.828 L108.776,65.286 L108.646,65.286 C107.044,68.358 103.552,70.301 99.929,70.301 C94.521,70.301 90.74,66.941 90.74,61.979 L90.74,61.979 Z M108.566,59.485 L108.566,57.305 L101.766,57.725 C98.38,57.962 96.463,59.458 96.463,61.821 C96.463,64.236 98.459,65.811 101.504,65.811 C105.468,65.811 108.566,63.081 108.566,59.485 L108.566,59.485 Z M119.342,79.989 L119.342,75.394 C119.761,75.499 120.706,75.499 121.179,75.499 C123.804,75.499 125.222,74.397 126.088,71.561 C126.088,71.509 126.588,69.881 126.588,69.855 L116.611,42.209 L122.754,42.209 L129.738,64.683 L129.842,64.683 L136.827,42.209 L142.812,42.209 L132.468,71.272 C130.106,77.967 127.375,80.12 121.652,80.12 C121.179,80.12 119.761,80.067 119.342,79.989 L119.342,79.989 Z" id="Pay" fill="#000000"></path><path d="M181.896484,70 L181.896484,64.7792969 L164.204102,64.7792969 L164.204102,31.9521484 L158.113281,31.9521484 L158.113281,70 L181.896484,70 Z M194.369219,70.5009766 C198.113359,70.5009766 201.224688,68.734375 202.859453,65.8076172 L203.149492,65.8076172 L203.149492,70 L209.003008,70 L209.003008,50.6201172 C209.003008,44.8193359 204.784258,41.2333984 197.770586,41.2333984 C191.020586,41.2333984 186.696367,44.6347656 186.142656,49.4072266 L186.116289,49.6445312 L191.706133,49.6445312 L191.7325,49.4863281 C192.312578,47.4033203 194.342852,46.0585938 197.533281,46.0585938 C201.171953,46.0585938 203.149492,47.8251953 203.149492,50.8574219 L203.149492,53.1513672 L195.555742,53.5996094 C188.805742,53.9951172 185.008867,56.9746094 185.008867,61.9580078 L185.008867,62.0107422 C185.008867,67.1259766 188.884844,70.5009766 194.369219,70.5009766 Z M196.003984,65.8339844 C192.971758,65.8339844 190.88875,64.3046875 190.88875,61.7998047 L190.88875,61.7470703 C190.88875,59.3212891 192.708086,57.8974609 196.346758,57.6601562 L203.149492,57.2382812 L203.149492,59.5322266 C203.149492,63.1181641 200.090898,65.8339844 196.003984,65.8339844 Z M225.06168,70.3691406 C226.221836,70.3691406 227.302891,70.2373047 228.120273,70.1054688 L228.120273,65.5175781 C227.513828,65.5703125 227.012852,65.6230469 226.248203,65.6230469 C223.637852,65.6230469 222.451328,64.5683594 222.451328,61.6416016 L222.451328,46.4013672 L228.120273,46.4013672 L228.120273,41.7871094 L222.451328,41.7871094 L222.451328,34.5888672 L216.439609,34.5888672 L216.439609,41.7871094 L212.220859,41.7871094 L212.220859,46.4013672 L216.439609,46.4013672 L216.439609,62.5380859 C216.439609,68.0751953 219.102695,70.3691406 225.06168,70.3691406 Z M244.23168,70.5537109 C251.377187,70.5537109 255.464102,66.3876953 256.386953,62.3007812 L256.439687,62.0634766 L250.823477,62.0634766 L250.744375,62.2480469 C250.058828,64.0146484 247.870352,65.78125 244.363516,65.78125 C239.801992,65.78125 236.901602,62.6962891 236.796133,57.3964844 L256.729727,57.3964844 L256.729727,55.3925781 C256.729727,46.9023438 251.851797,41.2333984 243.941641,41.2333984 C236.005117,41.2333984 230.889883,47.1132812 230.889883,55.9462891 L230.889883,55.9726562 C230.889883,64.9111328 235.926016,70.5537109 244.23168,70.5537109 Z M250.928945,53.2568359 L236.875234,53.2568359 C237.376211,48.5371094 240.223867,46.0058594 243.968008,46.0058594 C247.738516,46.0058594 250.480703,48.3789062 250.928945,53.2568359 Z M267.093086,70 L267.093086,53.2568359 C267.093086,49.1171875 269.703438,46.5859375 273.71125,46.5859375 C274.818672,46.5859375 275.820625,46.7177734 276.585273,46.9023438 L276.585273,41.4970703 C276.05793,41.3916016 275.187813,41.2597656 274.317695,41.2597656 C270.810859,41.2597656 268.332344,43.1582031 267.356758,46.3222656 L267.093086,46.3222656 L267.093086,41.7871094 L261.186836,41.7871094 L261.186836,70 L267.093086,70 Z" id="Later" fill="#000000"></path></svg>',
                            apple_pay_later_mark_white: '<svg viewBox="0 0 299 106" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M283.698,0 L14.823,0 C14.257,0 13.69,0 13.125,0.003 C12.648,0.007 12.172,0.012 11.695,0.025 C10.656,0.053 9.608,0.115 8.582,0.299 C7.55304935,0.475289397 6.5561053,0.803896713 5.624,1.274 C3.75016438,2.22707876 2.22707876,3.75016438 1.274,5.624 C0.803057197,6.55646163 0.474412543,7.5541931 0.299,8.584 C0.113,9.611 0.052,10.658 0.024,11.696 C0.011,12.173 0.005,12.649 0,13.126 C0,13.69 0,14.256 0,14.823 L0,91.141 C0,91.708 0,92.273 0,92.84 C0.005,93.316 0.011,93.793 0.024,94.27 C0.052,95.306 0.114,96.354 0.299,97.38 C0.474052532,98.4097641 0.802361489,99.4074997 1.273,100.34 C1.74618424,101.271314 2.36382962,102.121842 3.103,102.86 C3.84090499,103.599466 4.69148278,104.217148 5.623,104.69 C6.57,105.173 7.54,105.48 8.583,105.667 C9.608,105.85 10.656,105.912 11.695,105.94 C12.172,105.951 12.648,105.958 13.125,105.96 C13.69,105.964 14.257,105.964 14.823,105.964 L283.698,105.964 C284.263,105.964 284.83,105.964 285.395,105.96 C285.87205,105.957616 286.349069,105.950949 286.826,105.94 C287.863,105.912 288.911,105.85 289.939,105.667 C290.968174,105.490543 291.96519,105.161238 292.897,104.69 C294.769895,103.735625 296.292625,102.212895 297.247,100.34 C297.73,99.393 298.036,98.423 298.221,97.38 C298.407,96.354 298.467,95.306 298.495,94.27 C298.508,93.793 298.515,93.316 298.517,92.84 C298.521,92.273 298.521,91.708 298.521,91.141 L298.521,14.824 C298.521,14.257 298.521,13.691 298.517,13.125 C298.515064,12.6485989 298.50773,12.172235 298.495,11.696 C298.467,10.658 298.407,9.611 298.221,8.584 C298.046831,7.55401695 297.71848,6.55615176 297.247,5.624 C296.293413,3.75053315 294.770467,2.22758663 292.897,1.274 C291.964782,0.80438048 290.967861,0.476117852 289.939,0.3 C288.911,0.115 287.863,0.054 286.826,0.026 C286.349085,0.0138870152 285.872062,0.00655331365 285.395,0.004 C284.83,0 284.263,0 283.698,0 Z" id="Outline" fill="rgba(0,0,0,.075)"></path><path d="M285.37,3.535 C285.822,3.538 286.275,3.543 286.73,3.555 C287.522,3.577 288.449,3.62 289.313,3.775 C290.063,3.91 290.693,4.115 291.297,4.423 C292.505746,5.03755904 293.487734,6.0205978 294.101,7.23 C294.407,7.83 294.611,8.456 294.746,9.213 C294.9,10.067 294.943,10.996 294.964,11.793 C294.977,12.243 294.983,12.693 294.984,13.153 C294.989,13.71 294.989,14.266 294.989,14.824 L294.989,91.142 C294.989,91.7 294.989,92.256 294.985,92.824 C294.983,93.274 294.977,93.724 294.965,94.174 C294.943,94.97 294.9,95.899 294.744,96.763 C294.630594,97.4502806 294.413097,98.1162614 294.099,98.738 C293.484409,99.9478082 292.501027,100.93084 291.291,101.545 C290.691,101.851 290.063,102.057 289.32,102.19 C288.438,102.347 287.473,102.39 286.746,102.41 C286.289,102.42 285.834,102.427 285.367,102.429 C284.812,102.433 284.254,102.433 283.698,102.433 L14.801,102.433 C14.251,102.433 13.701,102.433 13.141,102.429 C12.6909551,102.427046 12.240937,102.421046 11.791,102.411 C11.047,102.391 10.081,102.347 9.207,102.191 C8.51598039,102.075842 7.84638728,101.85669 7.221,101.541 C6.62111744,101.236271 6.07359362,100.837949 5.599,100.361 C5.12290857,99.8857571 4.72529217,99.3379376 4.421,98.738 C4.10640097,98.1127736 3.88826296,97.4435248 3.774,96.753 C3.619,95.89 3.576,94.965 3.554,94.175 C3.54269765,93.7234137 3.53603063,93.2717232 3.532,92.82 L3.532,91.493 L3.532,14.474 L3.532,13.149 C3.537,12.696 3.542,12.244 3.554,11.792 C3.576,11 3.619,10.075 3.776,9.205 C3.89017322,8.51586104 4.10797216,7.84796678 4.422,7.224 C4.726,6.626 5.122,6.08 5.602,5.602 C6.07772872,5.1254978 6.62583457,4.72724354 7.226,4.422 C7.8498075,4.10823092 8.5172811,3.89012212 9.206,3.775 C10.071,3.62 10.998,3.577 11.792,3.555 C12.244,3.543 12.697,3.538 13.146,3.535 L14.823,3.532 L283.698,3.532 L285.37,3.535 Z" id="Bg" fill="#FFFFFF"></path><path d="M45.186,35.64 C46.603,33.868 47.566,31.488 47.312,29.055 C45.237,29.159 42.705,30.425 41.239,32.198 C39.923,33.718 38.759,36.198 39.062,38.528 C41.392,38.73 43.718,37.363 45.186,35.641 M47.285,38.983 C43.903,38.781 41.027,40.902 39.412,40.902 C37.796,40.902 35.322,39.084 32.648,39.133 C29.166,39.184 25.935,41.153 24.168,44.283 C20.534,50.547 23.209,59.839 26.743,64.94 C28.46,67.464 30.528,70.243 33.253,70.143 C35.828,70.042 36.837,68.475 39.967,68.475 C43.095,68.475 44.004,70.143 46.73,70.092 C49.557,70.042 51.324,67.567 53.04,65.041 C55.009,62.164 55.815,59.386 55.865,59.233 C55.815,59.183 50.415,57.111 50.365,50.9 C50.314,45.699 54.605,43.225 54.806,43.072 C52.383,39.488 48.597,39.084 47.286,38.982 M76.734,31.944 C84.084,31.944 89.204,37.011 89.204,44.388 C89.204,51.792 83.979,56.885 76.55,56.885 L68.41,56.885 L68.41,69.828 L62.53,69.828 L62.53,31.944 L76.734,31.944 Z M68.41,51.949 L75.157,51.949 C80.277,51.949 83.191,49.193 83.191,44.415 C83.191,39.637 80.277,36.906 75.183,36.906 L68.41,36.906 L68.41,51.95 L68.41,51.949 Z M90.74,61.979 C90.74,57.148 94.442,54.181 101.006,53.813 L108.566,53.367 L108.566,51.241 C108.566,48.169 106.492,46.331 103.027,46.331 C99.745,46.331 97.697,47.906 97.199,50.374 L91.843,50.374 C92.158,45.386 96.411,41.71 103.237,41.71 C109.932,41.71 114.211,45.255 114.211,50.794 L114.211,69.828 L108.776,69.828 L108.776,65.286 L108.646,65.286 C107.044,68.358 103.552,70.301 99.929,70.301 C94.521,70.301 90.74,66.941 90.74,61.979 L90.74,61.979 Z M108.566,59.485 L108.566,57.305 L101.766,57.725 C98.38,57.962 96.463,59.458 96.463,61.821 C96.463,64.236 98.459,65.811 101.504,65.811 C105.468,65.811 108.566,63.081 108.566,59.485 L108.566,59.485 Z M119.342,79.989 L119.342,75.394 C119.761,75.499 120.706,75.499 121.179,75.499 C123.804,75.499 125.222,74.397 126.088,71.561 C126.088,71.509 126.588,69.881 126.588,69.855 L116.611,42.209 L122.754,42.209 L129.738,64.683 L129.842,64.683 L136.827,42.209 L142.812,42.209 L132.468,71.272 C130.106,77.967 127.375,80.12 121.652,80.12 C121.179,80.12 119.761,80.067 119.342,79.989 L119.342,79.989 Z" id="Pay" fill="#000000"></path><path d="M181.896484,70 L181.896484,64.7792969 L164.204102,64.7792969 L164.204102,31.9521484 L158.113281,31.9521484 L158.113281,70 L181.896484,70 Z M194.369219,70.5009766 C198.113359,70.5009766 201.224688,68.734375 202.859453,65.8076172 L203.149492,65.8076172 L203.149492,70 L209.003008,70 L209.003008,50.6201172 C209.003008,44.8193359 204.784258,41.2333984 197.770586,41.2333984 C191.020586,41.2333984 186.696367,44.6347656 186.142656,49.4072266 L186.116289,49.6445312 L191.706133,49.6445312 L191.7325,49.4863281 C192.312578,47.4033203 194.342852,46.0585938 197.533281,46.0585938 C201.171953,46.0585938 203.149492,47.8251953 203.149492,50.8574219 L203.149492,53.1513672 L195.555742,53.5996094 C188.805742,53.9951172 185.008867,56.9746094 185.008867,61.9580078 L185.008867,62.0107422 C185.008867,67.1259766 188.884844,70.5009766 194.369219,70.5009766 Z M196.003984,65.8339844 C192.971758,65.8339844 190.88875,64.3046875 190.88875,61.7998047 L190.88875,61.7470703 C190.88875,59.3212891 192.708086,57.8974609 196.346758,57.6601562 L203.149492,57.2382812 L203.149492,59.5322266 C203.149492,63.1181641 200.090898,65.8339844 196.003984,65.8339844 Z M225.06168,70.3691406 C226.221836,70.3691406 227.302891,70.2373047 228.120273,70.1054688 L228.120273,65.5175781 C227.513828,65.5703125 227.012852,65.6230469 226.248203,65.6230469 C223.637852,65.6230469 222.451328,64.5683594 222.451328,61.6416016 L222.451328,46.4013672 L228.120273,46.4013672 L228.120273,41.7871094 L222.451328,41.7871094 L222.451328,34.5888672 L216.439609,34.5888672 L216.439609,41.7871094 L212.220859,41.7871094 L212.220859,46.4013672 L216.439609,46.4013672 L216.439609,62.5380859 C216.439609,68.0751953 219.102695,70.3691406 225.06168,70.3691406 Z M244.23168,70.5537109 C251.377187,70.5537109 255.464102,66.3876953 256.386953,62.3007812 L256.439687,62.0634766 L250.823477,62.0634766 L250.744375,62.2480469 C250.058828,64.0146484 247.870352,65.78125 244.363516,65.78125 C239.801992,65.78125 236.901602,62.6962891 236.796133,57.3964844 L256.729727,57.3964844 L256.729727,55.3925781 C256.729727,46.9023438 251.851797,41.2333984 243.941641,41.2333984 C236.005117,41.2333984 230.889883,47.1132812 230.889883,55.9462891 L230.889883,55.9726562 C230.889883,64.9111328 235.926016,70.5537109 244.23168,70.5537109 Z M250.928945,53.2568359 L236.875234,53.2568359 C237.376211,48.5371094 240.223867,46.0058594 243.968008,46.0058594 C247.738516,46.0058594 250.480703,48.3789062 250.928945,53.2568359 Z M267.093086,70 L267.093086,53.2568359 C267.093086,49.1171875 269.703438,46.5859375 273.71125,46.5859375 C274.818672,46.5859375 275.820625,46.7177734 276.585273,46.9023438 L276.585273,41.4970703 C276.05793,41.3916016 275.187813,41.2597656 274.317695,41.2597656 C270.810859,41.2597656 268.332344,43.1582031 267.356758,46.3222656 L267.093086,46.3222656 L267.093086,41.7871094 L261.186836,41.7871094 L261.186836,70 L267.093086,70 Z" id="Later" fill="#000000"></path></svg>',
                            apple_pay_mark_black: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.521 105.965"><path fill="rgba(255,255,255,.075)" d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696c-.013.477-.019.953-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.018 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004a79.71 79.71 0 0 0 1.431-.02c1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.941 9.941 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.413 71.413 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"/><path fill="black" d="m150.698 3.532 1.672.003c.452.003.905.008 1.36.02.792.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.512-1.971.645-.882.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a75.086 75.086 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.647-1.985c-.155-.863-.198-1.788-.22-2.578a66.017 66.017 0 0 1-.02-1.355l-.002-1.327V14.474l.002-1.325c.003-.453.008-.905.02-1.357.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.622a6.385 6.385 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.647c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"/><path fill="white" d="M45.186 35.64c1.417-1.772 2.38-4.152 2.126-6.585-2.075.104-4.607 1.37-6.073 3.143-1.316 1.52-2.48 4-2.177 6.33 2.33.202 4.656-1.165 6.124-2.887M47.285 38.983c-3.382-.202-6.258 1.919-7.873 1.919-1.616 0-4.09-1.818-6.764-1.769-3.482.051-6.713 2.02-8.48 5.15-3.634 6.264-.959 15.556 2.575 20.657 1.717 2.524 3.785 5.303 6.51 5.203 2.575-.101 3.584-1.668 6.714-1.668 3.128 0 4.037 1.668 6.763 1.617 2.827-.05 4.594-2.525 6.31-5.051 1.969-2.877 2.775-5.655 2.825-5.808-.05-.05-5.45-2.122-5.5-8.333-.051-5.201 4.24-7.675 4.441-7.828-2.423-3.584-6.209-3.988-7.52-4.09M76.734 31.944c7.35 0 12.47 5.067 12.47 12.444 0 7.404-5.225 12.497-12.654 12.497h-8.14v12.943h-5.88V31.944h14.204zM68.41 51.949h6.747c5.12 0 8.034-2.756 8.034-7.534 0-4.778-2.914-7.509-8.008-7.509h-6.773V51.95zM90.74 61.979c0-4.831 3.702-7.798 10.266-8.166l7.56-.446v-2.126c0-3.072-2.074-4.91-5.539-4.91-3.282 0-5.33 1.575-5.828 4.043h-5.356c.315-4.988 4.568-8.664 11.394-8.664 6.695 0 10.974 3.545 10.974 9.084v19.034h-5.435v-4.542h-.13c-1.602 3.072-5.094 5.015-8.717 5.015-5.408 0-9.189-3.36-9.189-8.322zm17.826-2.494v-2.18l-6.8.42c-3.386.237-5.303 1.733-5.303 4.096 0 2.415 1.996 3.99 5.041 3.99 3.964 0 7.062-2.73 7.062-6.326zM119.342 79.989v-4.595c.419.105 1.364.105 1.837.105 2.625 0 4.043-1.102 4.909-3.938 0-.052.5-1.68.5-1.706l-9.977-27.646h6.143l6.984 22.474h.104l6.985-22.474h5.985l-10.344 29.063c-2.362 6.695-5.093 8.848-10.816 8.848-.473 0-1.891-.053-2.31-.131z"/></svg>',
                            apple_pay_mark_none: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.521 105.965"><path fill="black" d="M45.186 35.64c1.417-1.772 2.38-4.152 2.126-6.585-2.075.104-4.607 1.37-6.073 3.143-1.316 1.52-2.48 4-2.177 6.33 2.33.202 4.656-1.165 6.124-2.887M47.285 38.983c-3.382-.202-6.258 1.919-7.873 1.919-1.616 0-4.09-1.818-6.764-1.769-3.482.051-6.713 2.02-8.48 5.15-3.634 6.264-.959 15.556 2.575 20.657 1.717 2.524 3.785 5.303 6.51 5.203 2.575-.101 3.584-1.668 6.714-1.668 3.128 0 4.037 1.668 6.763 1.617 2.827-.05 4.594-2.525 6.31-5.051 1.969-2.877 2.775-5.655 2.825-5.808-.05-.05-5.45-2.122-5.5-8.333-.051-5.201 4.24-7.675 4.441-7.828-2.423-3.584-6.209-3.988-7.52-4.09M76.734 31.944c7.35 0 12.47 5.067 12.47 12.444 0 7.404-5.225 12.497-12.654 12.497h-8.14v12.943h-5.88V31.944h14.204zM68.41 51.949h6.747c5.12 0 8.034-2.756 8.034-7.534 0-4.778-2.914-7.509-8.008-7.509h-6.773V51.95zM90.74 61.979c0-4.831 3.702-7.798 10.266-8.166l7.56-.446v-2.126c0-3.072-2.074-4.91-5.539-4.91-3.282 0-5.33 1.575-5.828 4.043h-5.356c.315-4.988 4.568-8.664 11.394-8.664 6.695 0 10.974 3.545 10.974 9.084v19.034h-5.435v-4.542h-.13c-1.602 3.072-5.094 5.015-8.717 5.015-5.408 0-9.189-3.36-9.189-8.322zm17.826-2.494v-2.18l-6.8.42c-3.386.237-5.303 1.733-5.303 4.096 0 2.415 1.996 3.99 5.041 3.99 3.964 0 7.062-2.73 7.062-6.326zM119.342 79.989v-4.595c.419.105 1.364.105 1.837.105 2.625 0 4.043-1.102 4.909-3.938 0-.052.5-1.68.5-1.706l-9.977-27.646h6.143l6.984 22.474h.104l6.985-22.474h5.985l-10.344 29.063c-2.362 6.695-5.093 8.848-10.816 8.848-.473 0-1.891-.053-2.31-.131z"/></svg>',
                            apple_pay_mark_white: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.521 105.965"><path d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696c-.013.477-.019.953-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.018 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004a79.71 79.71 0 0 0 1.431-.02c1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.941 9.941 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.413 71.413 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"/><path fill="white" d="m150.698 3.532 1.672.003c.452.003.905.008 1.36.02.792.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.512-1.971.645-.882.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a75.086 75.086 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.647-1.985c-.155-.863-.198-1.788-.22-2.578a66.017 66.017 0 0 1-.02-1.355l-.002-1.327V14.474l.002-1.325c.003-.453.008-.905.02-1.357.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.622a6.385 6.385 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.647c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"/><path fill="black" d="M45.186 35.64c1.417-1.772 2.38-4.152 2.126-6.585-2.075.104-4.607 1.37-6.073 3.143-1.316 1.52-2.48 4-2.177 6.33 2.33.202 4.656-1.165 6.124-2.887M47.285 38.983c-3.382-.202-6.258 1.919-7.873 1.919-1.616 0-4.09-1.818-6.764-1.769-3.482.051-6.713 2.02-8.48 5.15-3.634 6.264-.959 15.556 2.575 20.657 1.717 2.524 3.785 5.303 6.51 5.203 2.575-.101 3.584-1.668 6.714-1.668 3.128 0 4.037 1.668 6.763 1.617 2.827-.05 4.594-2.525 6.31-5.051 1.969-2.877 2.775-5.655 2.825-5.808-.05-.05-5.45-2.122-5.5-8.333-.051-5.201 4.24-7.675 4.441-7.828-2.423-3.584-6.209-3.988-7.52-4.09M76.734 31.944c7.35 0 12.47 5.067 12.47 12.444 0 7.404-5.225 12.497-12.654 12.497h-8.14v12.943h-5.88V31.944h14.204zM68.41 51.949h6.747c5.12 0 8.034-2.756 8.034-7.534 0-4.778-2.914-7.509-8.008-7.509h-6.773V51.95zM90.74 61.979c0-4.831 3.702-7.798 10.266-8.166l7.56-.446v-2.126c0-3.072-2.074-4.91-5.539-4.91-3.282 0-5.33 1.575-5.828 4.043h-5.356c.315-4.988 4.568-8.664 11.394-8.664 6.695 0 10.974 3.545 10.974 9.084v19.034h-5.435v-4.542h-.13c-1.602 3.072-5.094 5.015-8.717 5.015-5.408 0-9.189-3.36-9.189-8.322zm17.826-2.494v-2.18l-6.8.42c-3.386.237-5.303 1.733-5.303 4.096 0 2.415 1.996 3.99 5.041 3.99 3.964 0 7.062-2.73 7.062-6.326zM119.342 79.989v-4.595c.419.105 1.364.105 1.837.105 2.625 0 4.043-1.102 4.909-3.938 0-.052.5-1.68.5-1.706l-9.977-27.646h6.143l6.984 22.474h.104l6.985-22.474h5.985l-10.344 29.063c-2.362 6.695-5.093 8.848-10.816 8.848-.473 0-1.891-.053-2.31-.131z"/></svg>',
                            apple_pay_mark_white_outline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.521 105.965"><path fill="rgba(0,0,0,.075)" d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696c-.013.477-.019.953-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.018 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004a79.71 79.71 0 0 0 1.431-.02c1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.941 9.941 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.413 71.413 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"/><path fill="white" d="m150.698 3.532 1.672.003c.452.003.905.008 1.36.02.792.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.512-1.971.645-.882.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a75.086 75.086 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.647-1.985c-.155-.863-.198-1.788-.22-2.578a66.017 66.017 0 0 1-.02-1.355l-.002-1.327V14.474l.002-1.325c.003-.453.008-.905.02-1.357.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.622a6.385 6.385 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.647c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"/><path fill="black" d="M45.186 35.64c1.417-1.772 2.38-4.152 2.126-6.585-2.075.104-4.607 1.37-6.073 3.143-1.316 1.52-2.48 4-2.177 6.33 2.33.202 4.656-1.165 6.124-2.887M47.285 38.983c-3.382-.202-6.258 1.919-7.873 1.919-1.616 0-4.09-1.818-6.764-1.769-3.482.051-6.713 2.02-8.48 5.15-3.634 6.264-.959 15.556 2.575 20.657 1.717 2.524 3.785 5.303 6.51 5.203 2.575-.101 3.584-1.668 6.714-1.668 3.128 0 4.037 1.668 6.763 1.617 2.827-.05 4.594-2.525 6.31-5.051 1.969-2.877 2.775-5.655 2.825-5.808-.05-.05-5.45-2.122-5.5-8.333-.051-5.201 4.24-7.675 4.441-7.828-2.423-3.584-6.209-3.988-7.52-4.09M76.734 31.944c7.35 0 12.47 5.067 12.47 12.444 0 7.404-5.225 12.497-12.654 12.497h-8.14v12.943h-5.88V31.944h14.204zM68.41 51.949h6.747c5.12 0 8.034-2.756 8.034-7.534 0-4.778-2.914-7.509-8.008-7.509h-6.773V51.95zM90.74 61.979c0-4.831 3.702-7.798 10.266-8.166l7.56-.446v-2.126c0-3.072-2.074-4.91-5.539-4.91-3.282 0-5.33 1.575-5.828 4.043h-5.356c.315-4.988 4.568-8.664 11.394-8.664 6.695 0 10.974 3.545 10.974 9.084v19.034h-5.435v-4.542h-.13c-1.602 3.072-5.094 5.015-8.717 5.015-5.408 0-9.189-3.36-9.189-8.322zm17.826-2.494v-2.18l-6.8.42c-3.386.237-5.303 1.733-5.303 4.096 0 2.415 1.996 3.99 5.041 3.99 3.964 0 7.062-2.73 7.062-6.326zM119.342 79.989v-4.595c.419.105 1.364.105 1.837.105 2.625 0 4.043-1.102 4.909-3.938 0-.052.5-1.68.5-1.706l-9.977-27.646h6.143l6.984 22.474h.104l6.985-22.474h5.985l-10.344 29.063c-2.362 6.695-5.093 8.848-10.816 8.848-.473 0-1.891-.053-2.31-.131z"/></svg>'
                        },
                        At = {
                            v1: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEqnB9fwF/fyjr8C5dExJEo+B31weW1wV3MtPICgKWXjTvDE37DGwIHIcbET2SYvg6c0p7HApFp2ldtUmxqxftiQ==",
                            v2: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErNhuYRPmQcawxtLzvv+4bENg0k3PQDzCTLRSAfT2G/Xx0iycyMRNGARU8Hbn3bDk84mx8TIo5kT0vhwOxhZ7ZQ=="
                        },
                        Tt = /\{\{\s*([^\s]+)\s*\}\}/gi;
                    "undefined" == typeof WEBVIEW && (t.WEBVIEW = !1);
                    class Et extends HTMLElement {
                        constructor() {
                            super(), this.locale = zt.locale, this.countryCode = zt.countryCode, this.currencyCode = zt.currencyCode, this.type = zt.type, this.modalType = zt.modalType, this.debug = !1, $t.set(this, void 0), Ct.set(this, void 0), Lt.set(this, void 0), kt(this, Lt, new Promise(t => setTimeout(t)).then(() => this.getData({
                                countryCode: this.countryCode,
                                amount: this.amount,
                                currencyCode: this.currencyCode,
                                locale: this.locale
                            })).then(t => {
                                var e = new Event("load");
                                return this.dispatchEvent(e), this.data = t, new Promise(t => setTimeout(t))
                            }, t => {
                                console.warn("Apple Pay Merchandising: unable to fetch merchandising data", t), this.disable()
                            }).then(() => {
                                this.createMerchandisingWidget(), xt(this, Ct).addEventListener("click", t => {
                                    var e, n, a = t.target.closest('a[href*="'.concat(this.data.modalUrl, '"]'));
                                    a && t.currentTarget.contains(a) && (t.preventDefault(), WEBVIEW ? null === (n = null === (e = webkit.messageHandlers) || void 0 === e ? void 0 : e.applePayDetails) || void 0 === n || n.postMessage("show-modal") : (bt.setAttribute("locale", this.locale), bt.setAttribute("theme", this.theme), bt.setAttribute("url", this.data.modalUrl), bt.show({
                                        locale: this.locale,
                                        theme: this.theme,
                                        url: this.data.modalUrl
                                    })))
                                })
                            }))
                        }
                        createMerchandisingWidget() {
                            kt(this, $t, this.ownerDocument.createElement("div")), xt(this, $t).className = "theme-".concat(this.theme, " content"), kt(this, Ct, this.attachShadow({
                                mode: "closed"
                            })), xt(this, Ct).appendChild(xt(this, $t))
                        }
                        applyAllStyles(t) {
                            var e = t.host,
                                n = t.querySelectorAll(".theme-".concat(this.theme)),
                                a = t.querySelector(".content"),
                                o = t.querySelectorAll("*"),
                                r = t.querySelectorAll("a"),
                                i = t.querySelectorAll(".content p"),
                                s = t.querySelectorAll(".payMark svg, .payMark img"),
                                l = t.querySelectorAll(".theme-dark.content .payMark"),
                                c = t.querySelectorAll(".theme-dark.content .text .info-circle");
                            this.hasAttribute("disabled") || this.hasAttribute("hidden") ? y(this, $) : y(e, b), y(a, S), n.forEach(t => {
                                "auto" === this.theme ? y(t, window.matchMedia("(prefers-color-scheme: dark)").matches ? O : j) : y(t, "dark" == this.theme ? O : j)
                            }), o.forEach(t => {
                                y(t, C)
                            }), xt(this, $t).childNodes.forEach(t => {
                                t.classList.contains("payMark") && y(t, M), t.classList.contains("align-left") ? y(t, A) : t.classList.contains("align-right") && y(t, T), t.classList.contains("type-none") && y(t, E), t.classList.contains("style-none") && y(t, z), t.classList.contains("text") && y(t, N)
                            }), i.forEach(t => {
                                y(t, P)
                            }), r.forEach(t => {
                                y(t, R), t.addEventListener("mouseover", () => y(t, B)), t.addEventListener("mouseout", () => y(t, R)), t.closest(".theme-dark") ? y(t, D) : y(t, I)
                            }), s.forEach(t => {
                                y(t, F)
                            }), l.forEach(t => {
                                y(t, L)
                            }), c.forEach(t => {
                                y(t, x), y(t, k)
                            })
                        }
                        connectedCallback() {
                            var t = this;
                            return l((function*() {
                                var e, n;
                                if (WEBVIEW) yield t.updateReadyState();
                                else {
                                    var a = Array.from(document.scripts).find(t => t.src.includes("apple-pay-sdk.js")),
                                        o = null === (e = null == a ? void 0 : a.getAttribute("data-initial-token")) || void 0 === e ? void 0 : e.trim(),
                                        r = null === (n = null == a ? void 0 : a.getAttribute("data-token-version")) || void 0 === n ? void 0 : n.trim();
                                    Promise.all([t.validate(t.decipherJWT(o)), f(o, At[r] || At.v2)]).then(e => {
                                        if (!e.every(t => !0 === t)) throw new Error("The provided token is invalid or the domain is not supported");
                                        t.updateReadyState()
                                    }).catch(e => {
                                        console.error(e.message), t.ready = !1, t.disable()
                                    })
                                }
                            }))()
                        }
                        disconnectedCallback() {
                            var t = this;
                            return l((function*() {
                                yield xt(t, Lt), t.disable()
                            }))()
                        }
                        disable() {
                            var t, e;
                            this.disabled = !0, (null === (t = xt(this, Ct)) || void 0 === t ? void 0 : t.contains(xt(this, $t))) && (null === (e = xt(this, Ct)) || void 0 === e || e.removeChild(xt(this, $t))), xt(this, $t).innerHTML = "", this.setAttribute("disabled", ""), this.setAttribute("hidden", "")
                        }
                        enable() {
                            var t;
                            null === (t = xt(this, Ct)) || void 0 === t || t.appendChild(xt(this, $t)), this.disabled = !1, this.removeAttribute("disabled"), this.removeAttribute("hidden")
                        }
                        updateReadyState() {
                            var t = this;
                            return l((function*() {
                                yield xt(t, Lt), t.ready = !0, t.classList.add("ready"), yield t.update()
                            }))()
                        }
                        update() {
                            var t = this;
                            return l((function*() {
                                if (t.ready) {
                                    var e = t.data = yield t.getData(t), n = yield Et.fetchData(t), a = n.presets[t.type || zt.type] || n.presets.custom;
                                    "custom" === t.type && (e.promoText = t.innerHTML);
                                    var o = new Intl.NumberFormat(t.locale, {
                                            style: "currency",
                                            currency: t.currencyCode,
                                            minimumFractionDigits: Number.isInteger(e.paymentsAmount) ? 0 : 2,
                                            currencyDisplay: "narrowSymbol"
                                        }),
                                        r = Object.assign(Object.assign(Object.assign({}, e), a), {
                                            paymentsAmount: o.format(e.paymentsAmount),
                                            hideLogo: e.logo ? "" : "hidden",
                                            hideText: e.promoText ? "" : "hidden",
                                            theme: t.theme || zt.theme,
                                            modalUrl: e.modalUrl
                                        }),
                                        i = '<div class="payMark align-{{ logoAlign }} type-{{ logoType }} style-{{ logoStyle }}" {{ hideLogo }}>{{ logo }}</div><p class="theme-{{ theme }} text" {{ hideText }}>'.concat(e.promoText, "</p>");
                                    if (window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({
                                            matches: e
                                        }) => {
                                            "auto" === t.theme && xt(t, Ct).querySelectorAll(".theme-".concat(t.theme)).forEach(t => {
                                                y(t, e ? O : j)
                                            })
                                        }), t.enable(), "checkout" === t.type) return t.debug || (yield Et.isEligible(t)) ? u(t.debug) ? (t.disable(), i = "") : Et.validateAmount(t.amount, r.minAmount, r.maxAmount) || (i = '<div class="payMark align-{{ logoAlign }} type-{{ logoType }} style-{{ logoStyle }}" {{ hideLogo }}>{{ logo }}</div>') : (t.disable(), i = ""), xt(t, $t).className = "theme-".concat(t.theme, " content"), xt(t, $t).innerHTML = i.replace(Tt, (t, e) => r[e]), void t.applyAllStyles(xt(t, Ct));
                                    (t.debug || (yield Et.isEligible(t))) && Et.validateAmount(t.amount, r.minAmount, r.maxAmount) ? u(t.debug) && (t.disable(), i = "") : (t.disable(), i = ""), xt(t, $t).className = "theme-".concat(t.theme, " content"), xt(t, $t).innerHTML = i.replace(Tt, (t, e) => r[e]), t.applyAllStyles(xt(t, Ct))
                                }
                            }))()
                        }
                        createElements(t) {
                            var e = document.createElement("div");
                            e.className = "payMark align-".concat(t.logoAlign, " type-").concat(t.logoType, " style-").concat(t.logoStyle), t.hideLogo && (e.style.display = "none"), e.innerHTML = t.logo;
                            var n = document.createElement("p");
                            return n.className = "theme-".concat(t.theme, " text"), t.hideText && (n.style.display = "none"), n.textContent = t.promoText, {
                                payMarkDiv: e,
                                textParagraph: n
                            }
                        }
                        static get observedAttributes() {
                            return Pt
                        }
                        attributeChangedCallback(t, e, n) {
                            t = c(t), null == n ? delete this[t] : this[t] = "true" === n || "false" !== n && ("" === n || n), e !== n && this.update()
                        }
                        decipherJWT(t) {
                            if (!t || "string" != typeof t) throw new Error("Invalid JWT token. Please provide a valid JWT string.");
                            var [e, n, a] = t.split(".");
                            if (!e || !n || !a) throw new Error("Invalid JWT token. The token contains invalid data.");
                            try {
                                var o = JSON.parse(atob(e)),
                                    r = JSON.parse(atob(n)),
                                    i = w(a);
                                return Object.assign(Object.assign(Object.assign({}, o), r), {
                                    signatureBuffer: i
                                })
                            } catch (t) {
                                throw new Error("Invalid JWT token. The token contains invalid data.")
                            }
                        }
                        validate(t) {
                            return l((function*() {
                                return t.domains.some(t => new RegExp("^" + t.replace("*", ".*") + "$", "i").test(location.hostname))
                            }))()
                        }
                        static fetchData({
                            countryCode: t
                        }) {
                            return l((function*() {
                                var e, n = t.toLowerCase();
                                try {
                                    e = St[n] || (St[n] = yield(yield fetch(d("./merchandising-".concat(n, ".json")))).json())
                                } catch (t) {
                                    throw Error("Apple Pay Merchandising: unable to fetch merchandising data")
                                }
                                return e
                            }))()
                        }
                        getData({
                            countryCode: t,
                            locale: e,
                            amount: n,
                            modalType: a = "learn-more",
                            theme: o = "light",
                            type: r = "plain"
                        }) {
                            return l((function*() {
                                var i, s = yield Et.fetchData({
                                    countryCode: t
                                }), l = (s.text[e] || s.text[e.slice(0, 2)] || s.text[Object.keys(s.text)[0]])[r] || "", c = Object.entries(s.method).find(([, t]) => t);
                                if (!c) throw Error("Apple Pay Merchandising: unable to fetch merchandising data");
                                i = c[1];
                                var h = s.presets[r || zt.type] || s.presets.custom,
                                    p = Math.round(n / i.frequency * 100) / 100,
                                    u = location.hostname || window.frames.top.document.location.hostname;
                                if (e.split("-")[1].toLowerCase() !== t.toLowerCase()) throw Error("Apple Pay Merchandising: unsupported locale");
                                return Object.assign({
                                    logo: "none" === h.logoType ? "" : Mt["apple_".concat(h.logoType, "_mark_").concat(h.logoStyle)],
                                    promoText: l,
                                    paymentsAmount: p,
                                    lastPaymentAmount: n - p * (i.frequency - 1),
                                    modalUrl: d("./".concat(a, ".html")) + "#data=".concat(btoa(JSON.stringify(Object.assign({
                                        amount: n,
                                        theme: o,
                                        locale: e,
                                        referrerUrl: u
                                    }, i))))
                                }, i)
                            }))()
                        }
                        static isEligible({
                            amount: t,
                            currencyCode: e,
                            countryCode: n
                        }) {
                            var a = this;
                            return l((function*() {
                                if (! function(t = {}) {
                                        try {
                                            return new PaymentRequest([{
                                                supportedMethods: "https://apple.com/apple-pay",
                                                data: {
                                                    version: 15,
                                                    features: ["applePayLater"],
                                                    merchantIdentifier: "",
                                                    countryCode: t.countryCode,
                                                    supportedNetworks: ["masterCard"],
                                                    merchantCapabilities: ["supports3DS"]
                                                }
                                            }], {
                                                total: {
                                                    label: "applePayLater",
                                                    amount: {
                                                        currency: t.currencyCode,
                                                        value: "0.00"
                                                    }
                                                }
                                            }), !0
                                        } catch (t) {
                                            return !1
                                        }
                                    }({
                                        currencyCode: e,
                                        countryCode: n
                                    })) return !1;
                                var o = yield Et.fetchData({
                                    countryCode: n
                                });
                                return e === o.currencyCode && Object.entries(o.method).some(([, e]) => a.validateAmount(t, e.minAmount, e.maxAmount))
                            }))()
                        }
                        static validateAmount(t, e, n) {
                            return e <= t && n >= t
                        }
                    }
                    $t = new WeakMap, Ct = new WeakMap, Lt = new WeakMap;
                    var zt = {
                            merchantToken: null,
                            amount: null,
                            type: "plain",
                            locale: "en-US",
                            modalType: "learn-more",
                            countryCode: "US",
                            currencyCode: "USD",
                            debug: !1,
                            theme: ""
                        },
                        Pt = Object.keys(zt).map(h);
                    customElements.define("apple-pay-merchandising", Et), window.ApplePayMerchandising = Et;
                    var Nt = ["ar-AB", "ca-ES", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-US", "en-AU", "en-GB", "es-ES", "es-MX", "fi-FI", "fr-CA", "fr-FR", "he-IL", "hi-IN", "hr-HR", "hu-HU", "id-ID", "it-IT", "ja-JP", "ko-KR", "ms-MY", "nb-NO", "nl-NL", "pl-PL", "pt-BR", "pt-PT", "ro-RO", "ru-RU", "sk-SK", "sv-SE", "th-TH", "tr-TR", "uk-UA", "vi-VN", "zh-CN", "zh-HK", "zh-TW"];

                    function Rt(t) {
                        return (null == t ? void 0 : t.includes("-")) && !!Nt.find(e => e === t)
                    }

                    function Bt(t) {
                        if (t) {
                            var e = t.trim().replace("_", "-").split("-"),
                                n = e[0].toLowerCase();
                            return 1 === e.length ? n : n + "-" + e[1].toUpperCase()
                        }
                    }

                    function Ot(t) {
                        var e = ((void 0 === navigator.languages ? [navigator.language] : navigator.languages) || []).map(Bt),
                            n = null == t ? void 0 : t.closest("[lang]"),
                            a = (null == n ? void 0 : n.lang) ? Bt(n.lang) : void 0;
                        return a && e.unshift(a), e
                    }

                    function jt(t, e = !0) {
                        var n = null == t ? void 0 : t.includes("-");
                        if (n) {
                            var a = Nt.find(e => e === t);
                            if (a) return a
                        }
                        if (t && (!n || e)) {
                            var o = function(t) {
                                var e = null == t ? void 0 : t.split("-")[0];
                                return Nt.find(t => new RegExp("^".concat(e), "g").test(t))
                            }(t);
                            if (o) return o
                        }
                    }

                    function Dt(t) {
                        var e = Ot(t).reduce((t, e) => {
                            if (t && t.includes("-")) return t;
                            if (!t) {
                                if (Rt(e)) return e;
                                var n = function(t) {
                                    var e = null == t ? void 0 : t.split("-")[0];
                                    return e && Nt.find(t => t.startsWith(e)) ? e : void 0
                                }(e);
                                if (n) return n
                            }
                            return t && !t.includes("-") && e.startsWith(t) && Rt(e) ? e : t
                        }, void 0);
                        return ((null == e ? void 0 : e.includes("-")) ? e : jt(e)) || "en-US"
                    }

                    function It() {
                        try {
                            return document.fonts.check("15px -apple-system")
                        } catch (t) {
                            return !1
                        }
                    }

                    function Ft(t) {
                        return !!document.getElementById(Zt(t))
                    }

                    function _t(t) {
                        var e = document.createElement("style");
                        e.id = Zt(t), e.innerHTML = "@font-face{" + "font-family:apple-pay-btn-".concat(t, ";") + "src:url(".concat(Wt("./assets/1.0.0/fonts/".concat(t, ".woff2")), ') format("woff2"),') + "url(".concat(Wt("./assets/1.0.0/fonts/".concat(t, ".woff")), ') format("woff");') + "font-display:block;}", document.head.appendChild(e)
                    }

                    function Zt(t) {
                        return "apple-pay-btn-font-".concat(t)
                    }

                    function Wt(t) {
                        return s + t.replace(/^\.\//, "/")
                    }
                    var Ht = ["add-money", "book", "buy", "check-out", "continue", "contribute", "donate", "order", "pay", "plain", "reload", "rent", "set-up", "subscribe", "support", "tip", "top-up"];

                    function Ut(t) {
                        return Ht.includes(t)
                    }

                    function qt(t) {
                        switch (t) {
                            case "add-money":
                                return "a";
                            case "book":
                                return "bo";
                            case "buy":
                                return "bu";
                            case "check-out":
                                return "ch";
                            case "continue":
                                return "ci";
                            case "contribute":
                                return "co";
                            case "donate":
                                return "d";
                            case "order":
                                return "o";
                            case "pay":
                                return "pa";
                            case "plain":
                                return "p";
                            case "reload":
                                return "rl";
                            case "rent":
                                return "rn";
                            case "set-up":
                                return "se";
                            case "subscribe":
                                return "sb";
                            case "support":
                                return "sp";
                            case "tip":
                                return "ti";
                            case "top-up":
                                return "to"
                        }
                    }

                    function Vt(t, e) {
                        var n = [...t.l[qt(e)]],
                            a = n[0].t.startsWith("%@") ? 0 : 1;
                        return (n = n.map(t => Object.assign(Object.assign({}, t), {
                            t: t.t.replace(/%@/g, "")
                        }))).splice(a, 0, {
                            t: "%@"
                        }), t.rtl && n.reverse(), n
                    }

                    function Kt(t, e) {
                        if ("plain" === e) return "Apple Pay";
                        var n = Vt(t, e);
                        return t.rtl && n.reverse(), n.reduce((t, e) => t + ("%@" === e.t ? "Apple Pay" : e.t), "")
                    }

                    function Jt(t, e, n, a, o) {
                        var r = e.t.replace(/\s/g, "&#160;");
                        return '<text x="'.concat(t, '" y="').concat(function(t) {
                            switch (t) {
                                case "ja-JP":
                                    return 20;
                                case "ko-KR":
                                    return 19.6
                            }
                            return 19.5
                        }(a), '" ') + "".concat(n ? 'direction="rtl" unicode-bidi="bidi-override" text-anchor="end"' : "", " ") + "".concat(o ? 'style="letter-spacing:'.concat(o, ';"') : "", " ") + "".concat(function(t) {
                            return "hi-IN" !== t && "th-TH" !== t
                        }(a) ? 'height="'.concat(e.h, '" width="').concat(e.w, '" ').concat(n ? "" : 'textLength="'.concat(e.w, '"')) : "", ">") + "".concat(r, "</text>")
                    }

                    function Gt(t, e, n, a, o) {
                        var r = '<?xml version="1.0" encoding="UTF-8"?>\n<svg class="logo" viewBox="0 0 105 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>Apple Logo</title>\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="#FFF">\n            <path d="M19.4028,5.5674 C20.6008,4.0684 21.4138,2.0564 21.1998,0.0004 C19.4458,0.0874 17.3058,1.1574 16.0668,2.6564 C14.9538,3.9414 13.9688,6.0374 14.2258,8.0074 C16.1948,8.1784 18.1618,7.0244 19.4028,5.5674"></path>\n            <path d="M21.1772,8.3926 C18.3182,8.2226 15.8872,10.0156 14.5212,10.0156 C13.1552,10.0156 11.0642,8.4786 8.8022,8.5196 C5.8592,8.5626 3.1282,10.2276 1.6342,12.8746 C-1.4378,18.1696 0.8232,26.0246 3.8112,30.3376 C5.2622,32.4716 7.0102,34.8206 9.3142,34.7366 C11.4912,34.6506 12.3442,33.3266 14.9902,33.3266 C17.6352,33.3266 18.4042,34.7366 20.7082,34.6936 C23.0972,34.6506 24.5922,32.5586 26.0422,30.4226 C27.7072,27.9906 28.3882,25.6426 28.4312,25.5126 C28.3882,25.4706 23.8232,23.7186 23.7812,18.4676 C23.7382,14.0706 27.3652,11.9786 27.5362,11.8496 C25.4882,8.8196 22.2872,8.4786 21.1772,8.3926"></path>\n            <path d="M85.5508,43.0381 L85.5508,39.1991 C85.8628,39.2421 86.6158,39.2871 87.0158,39.2871 C89.2138,39.2871 90.4558,38.3551 91.2108,35.9581 L91.6548,34.5371 L83.2428,11.2321 L88.4368,11.2321 L94.2958,30.1421 L94.4068,30.1421 L100.2668,11.2321 L105.3278,11.2321 L96.6048,35.7141 C94.6078,41.3291 92.3208,43.1721 87.4828,43.1721 C87.1048,43.1721 85.8838,43.1271 85.5508,43.0381"></path>\n            <path d="M42.6499,19.3555 L48.3549,19.3555 C52.6829,19.3555 55.1469,17.0255 55.1469,12.9855 C55.1469,8.9455 52.6829,6.6375 48.3769,6.6375 L42.6499,6.6375 L42.6499,19.3555 Z M49.6869,2.4425 C55.9009,2.4425 60.2289,6.7265 60.2289,12.9625 C60.2289,19.2225 55.8129,23.5285 49.5309,23.5285 L42.6499,23.5285 L42.6499,34.4705 L37.6779,34.4705 L37.6779,2.4425 L49.6869,2.4425 Z"></path>\n            <path d="M76.5547,25.7705 L76.5547,23.9715 L71.0287,24.3275 C67.9207,24.5275 66.3007,25.6815 66.3007,27.7015 C66.3007,29.6545 67.9887,30.9195 70.6287,30.9195 C74.0027,30.9195 76.5547,28.7665 76.5547,25.7705 M61.4617,27.8345 C61.4617,23.7285 64.5917,21.3755 70.3627,21.0205 L76.5547,20.6425 L76.5547,18.8675 C76.5547,16.2705 74.8457,14.8495 71.8057,14.8495 C69.2967,14.8495 67.4777,16.1375 67.0997,18.1125 L62.6167,18.1125 C62.7497,13.9615 66.6567,10.9435 71.9387,10.9435 C77.6207,10.9435 81.3267,13.9175 81.3267,18.5345 L81.3267,34.4705 L76.7327,34.4705 L76.7327,30.6305 L76.6217,30.6305 C75.3127,33.1395 72.4267,34.7145 69.2967,34.7145 C64.6807,34.7145 61.4617,31.9625 61.4617,27.8345"></path>\n        </g>\n    </g>\n</svg>'.replace("<svg", "<svg ".concat(o ? 'id="'.concat(o, '"') : "", ' x="').concat(t, '" y="').concat(e, '" height="').concat(n, '" width="').concat(35, '"'));
                        return "black" !== a && (r = r.replace('fill="#FFF"', 'fill="#000"')), r
                    }

                    function Yt(t) {
                        var e = Vt(t.metadata, t.buttonType),
                            n = t.metadata.ls,
                            {
                                width: a,
                                domStr: o
                            } = e.reduce((a, o, r) => {
                                var i;
                                if ("%@" === o.t) {
                                    r > 0 && new RegExp(/\s$/).test(a.prev) && (a.width = a.width + 1);
                                    var s = 0 === r || r === e.length - 1;
                                    return {
                                        domStr: a.domStr + Gt(a.width + .2, 7.92, 15, t.buttonStyle),
                                        width: a.width + 35 + (s ? .2 : .4),
                                        prev: o.t
                                    }
                                }
                                return "%@" === a.prev && (null === (i = o.t) || void 0 === i ? void 0 : i.startsWith(" ")) ? a.width = a.width + 1 : "%@" === a.prev && (a.width = a.width + .2), {
                                    domStr: a.domStr + Jt(a.width, o, !!t.metadata.rtl, t.locale, n),
                                    width: a.width + o.w,
                                    prev: o.t
                                }
                            }, {
                                width: 12.5,
                                domStr: "",
                                prev: ""
                            });
                        return {
                            width: a + 12.5,
                            domStr: o
                        }
                    }

                    function Xt(t, e = !1) {
                        return '<svg id="svg-logo" viewBox="0 0 '.concat(35, " ").concat(15, '" ').concat(e ? 'class="hidden"' : "", ">\n  ").concat(Gt(0, 3.85, 7.3, t, "svg-logo"), "\n  </svg>")
                    }

                    function Qt(t) {
                        if ("plain" === t.buttonType) return Xt(t.buttonStyle, !1);
                        var {
                            width: e,
                            domStr: n
                        } = Yt(t), a = It();
                        return '<svg id="svg-text" viewBox="0 0 '.concat(e, ' 28.571" aria-hidden="true">\n    <defs>\n      <style>\n        text {\n          fill: ').concat("black" === t.buttonStyle ? "#FFF" : "#000", ";\n          font-family: ").concat(a ? "-apple-system" : "apple-pay-btn-".concat(t.locale), ";\n          font-size: ").concat(t.metadata.s, ";\n          font-weight: ").concat(t.metadata.w || 500, ";\n        }\n      </style>\n    </defs>\n    <g>\n      ").concat(n, "\n    </g>\n  </svg>\n  ").concat(Xt(t.buttonStyle, !0))
                    }
                    var te, ee = {
                            "en-US": {
                                l: {
                                    a: [{
                                        w: 110.86,
                                        h: 18,
                                        t: "Add Money with %@"
                                    }],
                                    bo: [{
                                        w: 68.8,
                                        h: 18,
                                        t: "Book with %@"
                                    }],
                                    bu: [{
                                        w: 60.39,
                                        h: 18,
                                        t: "Buy with %@"
                                    }],
                                    ch: [{
                                        w: 102.89,
                                        h: 18,
                                        t: "Check out with %@"
                                    }],
                                    ci: [{
                                        w: 95.58,
                                        h: 18,
                                        t: "Continue with %@"
                                    }],
                                    co: [{
                                        w: 105.94,
                                        h: 18,
                                        t: "Contribute with %@"
                                    }],
                                    d: [{
                                        w: 83,
                                        h: 18,
                                        t: "Donate with %@"
                                    }],
                                    o: [{
                                        w: 72.86,
                                        h: 18,
                                        t: "Order with %@"
                                    }],
                                    pa: [{
                                        w: 59,
                                        h: 18,
                                        t: "Pay with %@"
                                    }],
                                    rl: [{
                                        w: 80.89,
                                        h: 18,
                                        t: "Reload with %@"
                                    }],
                                    rn: [{
                                        w: 65.67,
                                        h: 18,
                                        t: "Rent with %@"
                                    }],
                                    se: [{
                                        w: 45.88,
                                        h: 18,
                                        t: "Set up %@"
                                    }],
                                    sb: [{
                                        w: 102.14,
                                        h: 18,
                                        t: "Subscribe with %@"
                                    }],
                                    sp: [{
                                        w: 88.67,
                                        h: 18,
                                        t: "Support with %@"
                                    }],
                                    ti: [{
                                        w: 55.58,
                                        h: 18,
                                        t: "Tip with %@"
                                    }],
                                    to: [{
                                        w: 81.66,
                                        h: 18,
                                        t: "Top Up with %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "fr-FR": {
                                l: {
                                    a: [{
                                        w: 159.45,
                                        h: 18,
                                        t: "Ajouter de l’argent avec %@"
                                    }],
                                    bo: [{
                                        w: 96.92,
                                        h: 18,
                                        t: "Réserver avec %@"
                                    }],
                                    bu: [{
                                        w: 90.47,
                                        h: 18,
                                        t: "Acheter avec %@"
                                    }],
                                    ch: [{
                                        w: 75.22,
                                        h: 18,
                                        t: "Payer avec %@"
                                    }],
                                    ci: [{
                                        w: 108.56,
                                        h: 18,
                                        t: "Poursuivre avec %@"
                                    }],
                                    co: [{
                                        w: 109.41,
                                        h: 18,
                                        t: "Contribuer avec %@"
                                    }],
                                    d: [{
                                        w: 118.92,
                                        h: 18,
                                        t: "Faire un don avec %@"
                                    }],
                                    o: [{
                                        w: 120.53,
                                        h: 18,
                                        t: "Commander avec %@"
                                    }],
                                    pa: [{
                                        w: 75.22,
                                        h: 18,
                                        t: "Payer avec %@"
                                    }],
                                    rl: [{
                                        w: 106.7,
                                        h: 18,
                                        t: "Recharger avec %@"
                                    }],
                                    rn: [{
                                        w: 75.95,
                                        h: 18,
                                        t: "Louer avec %@"
                                    }],
                                    se: [{
                                        w: 74.19,
                                        h: 18,
                                        t: "Configurer %@"
                                    }],
                                    sb: [{
                                        w: 105.61,
                                        h: 18,
                                        t: "S’abonner avec %@"
                                    }],
                                    sp: [{
                                        w: 93.98,
                                        h: 18,
                                        t: "Soutenir avec %@"
                                    }],
                                    ti: [{
                                        w: 173.25,
                                        h: 18,
                                        t: "Laisser un pourboire avec %@"
                                    }],
                                    to: [{
                                        w: 106.7,
                                        h: 18,
                                        t: "Recharger avec %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "el-GR": {
                                l: {
                                    a: [{
                                        w: 190.19,
                                        h: 18,
                                        t: "Προσθήκη χρημάτων μέσω %@"
                                    }],
                                    bo: [{
                                        w: 106,
                                        h: 18,
                                        t: "Κράτηση μέσω %@"
                                    }],
                                    bu: [{
                                        w: 87.64,
                                        h: 18,
                                        t: "Αγορά μέσω %@"
                                    }],
                                    ch: [{
                                        w: 109.66,
                                        h: 18,
                                        t: "Πληρωμή μέσω %@"
                                    }],
                                    ci: [{
                                        w: 95.81,
                                        h: 18,
                                        t: "Συνέχεια με «"
                                    }, {
                                        w: 9.42,
                                        h: 18,
                                        t: "»"
                                    }],
                                    co: [{
                                        w: 127.23,
                                        h: 18,
                                        t: "Συνεισφορά μέσω %@"
                                    }],
                                    d: [{
                                        w: 90.83,
                                        h: 18,
                                        t: "Δωρεά μέσω %@"
                                    }],
                                    o: [{
                                        w: 127.36,
                                        h: 18,
                                        t: "Παραγγελία μέσω %@"
                                    }],
                                    pa: [{
                                        w: 89.17,
                                        h: 18,
                                        t: "Πληρωμή με %@"
                                    }],
                                    rl: [{
                                        w: 153.41,
                                        h: 18,
                                        t: "Επαναφόρτωση μέσω %@"
                                    }],
                                    rn: [{
                                        w: 113.61,
                                        h: 18,
                                        t: "Ενοικίαση μέσω %@"
                                    }],
                                    se: [{
                                        w: 92.92,
                                        h: 18,
                                        t: "Διαμόρφωση %@"
                                    }],
                                    sb: [{
                                        w: 112.38,
                                        h: 18,
                                        t: "Συνδρομή μέσω %@"
                                    }],
                                    sp: [{
                                        w: 126.31,
                                        h: 18,
                                        t: "Υποστήριξη μέσω %@"
                                    }],
                                    ti: [{
                                        w: 132.8,
                                        h: 18,
                                        t: "Φιλοδώρημα μέσω %@"
                                    }],
                                    to: [{
                                        w: 116.41,
                                        h: 18,
                                        t: "Ανανέωση μέσω %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "zh-HK": {
                                l: {
                                    a: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 增值"
                                    }],
                                    bo: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 訂位"
                                    }],
                                    bu: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 購買"
                                    }],
                                    ch: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 結帳"
                                    }],
                                    ci: [{
                                        w: 32.61,
                                        h: 18,
                                        t: "使用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 繼續"
                                    }],
                                    co: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 捐贈"
                                    }],
                                    d: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 捐款"
                                    }],
                                    o: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 訂購"
                                    }],
                                    pa: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 付款"
                                    }],
                                    rl: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 增值"
                                    }],
                                    rn: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 租借"
                                    }],
                                    se: [{
                                        w: 32.61,
                                        h: 18,
                                        t: "設定 %@"
                                    }],
                                    sb: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 訂閲"
                                    }],
                                    sp: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 支持"
                                    }],
                                    ti: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 62.2,
                                        h: 18,
                                        t: " 支付貼士"
                                    }],
                                    to: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 增值"
                                    }]
                                },
                                s: "14.8px"
                            },
                            "zh-CN": {
                                l: {
                                    a: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 充值"
                                    }],
                                    bo: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 预订"
                                    }],
                                    bu: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 购买"
                                    }],
                                    ch: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 结账"
                                    }],
                                    ci: [{
                                        w: 32.61,
                                        h: 18,
                                        t: "通过 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 继续"
                                    }],
                                    co: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 捐赠"
                                    }],
                                    d: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 捐款"
                                    }],
                                    o: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 订购"
                                    }],
                                    pa: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 支付"
                                    }],
                                    rl: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 充值"
                                    }],
                                    rn: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 租借"
                                    }],
                                    se: [{
                                        w: 32.61,
                                        h: 18,
                                        t: "设置 %@"
                                    }],
                                    sb: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 订阅"
                                    }],
                                    sp: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 支持"
                                    }],
                                    ti: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 47.41,
                                        h: 18,
                                        t: " 付小费"
                                    }],
                                    to: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 充值"
                                    }]
                                },
                                s: "14.8px"
                            },
                            "pt-BR": {
                                l: {
                                    a: [{
                                        w: 152.69,
                                        h: 18,
                                        t: "Adicione Dinheiro com %@"
                                    }],
                                    bo: [{
                                        w: 94.23,
                                        h: 18,
                                        t: "Reservar com %@"
                                    }],
                                    bu: [{
                                        w: 93.73,
                                        h: 18,
                                        t: "Comprar com %@"
                                    }],
                                    ch: [{
                                        w: 73.58,
                                        h: 18,
                                        t: "Pagar com %@"
                                    }],
                                    ci: [{
                                        w: 101.13,
                                        h: 18,
                                        t: "Continuar com %@"
                                    }],
                                    co: [{
                                        w: 101.52,
                                        h: 18,
                                        t: "Contribua com %@"
                                    }],
                                    d: [{
                                        w: 67.33,
                                        h: 18,
                                        t: "Doar com %@"
                                    }],
                                    o: [{
                                        w: 119.66,
                                        h: 18,
                                        t: "Encomendar com %@"
                                    }],
                                    pa: [{
                                        w: 73.58,
                                        h: 18,
                                        t: "Pagar com %@"
                                    }],
                                    rl: [{
                                        w: 108.69,
                                        h: 18,
                                        t: "Recarregar com %@"
                                    }],
                                    rn: [{
                                        w: 78.98,
                                        h: 18,
                                        t: "Alugar com %@"
                                    }],
                                    se: [{
                                        w: 74.22,
                                        h: 18,
                                        t: "Configurar %@"
                                    }],
                                    sb: [{
                                        w: 85.17,
                                        h: 18,
                                        t: "Assinar com %@"
                                    }],
                                    sp: [{
                                        w: 78.98,
                                        h: 18,
                                        t: "Apoiar com %@"
                                    }],
                                    ti: [{
                                        w: 108.94,
                                        h: 18,
                                        t: "Dar gorjeta com %@"
                                    }],
                                    to: [{
                                        w: 108.69,
                                        h: 18,
                                        t: "Recarregar com %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "en-AU": {
                                l: {
                                    a: [{
                                        w: 110.86,
                                        h: 18,
                                        t: "Add Money with %@"
                                    }],
                                    bo: [{
                                        w: 68.8,
                                        h: 18,
                                        t: "Book with %@"
                                    }],
                                    bu: [{
                                        w: 60.39,
                                        h: 18,
                                        t: "Buy with %@"
                                    }],
                                    ch: [{
                                        w: 102.89,
                                        h: 18,
                                        t: "Check out with %@"
                                    }],
                                    ci: [{
                                        w: 95.58,
                                        h: 18,
                                        t: "Continue with %@"
                                    }],
                                    co: [{
                                        w: 105.94,
                                        h: 18,
                                        t: "Contribute with %@"
                                    }],
                                    d: [{
                                        w: 83,
                                        h: 18,
                                        t: "Donate with %@"
                                    }],
                                    o: [{
                                        w: 72.86,
                                        h: 18,
                                        t: "Order with %@"
                                    }],
                                    pa: [{
                                        w: 59,
                                        h: 18,
                                        t: "Pay with %@"
                                    }],
                                    rl: [{
                                        w: 80.89,
                                        h: 18,
                                        t: "Reload with %@"
                                    }],
                                    rn: [{
                                        w: 65.67,
                                        h: 18,
                                        t: "Rent with %@"
                                    }],
                                    se: [{
                                        w: 45.88,
                                        h: 18,
                                        t: "Set up %@"
                                    }],
                                    sb: [{
                                        w: 102.14,
                                        h: 18,
                                        t: "Subscribe with %@"
                                    }],
                                    sp: [{
                                        w: 88.67,
                                        h: 18,
                                        t: "Support with %@"
                                    }],
                                    ti: [{
                                        w: 55.58,
                                        h: 18,
                                        t: "Tip with %@"
                                    }],
                                    to: [{
                                        w: 81.66,
                                        h: 18,
                                        t: "Top Up with %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "he-IL": {
                                l: {
                                    a: [{
                                        w: 148.58,
                                        h: 17.22,
                                        t: "להוסיף כסף באמצעות %@"
                                    }],
                                    bo: [{
                                        w: 111.2,
                                        h: 17.22,
                                        t: "הזמן/י באמצעות %@"
                                    }],
                                    bu: [{
                                        w: 112.61,
                                        h: 17,
                                        t: "רכישה באמצעות %@"
                                    }],
                                    ch: [{
                                        w: 68.77,
                                        h: 17.22,
                                        t: "לקופה עם %@"
                                    }],
                                    ci: [{
                                        w: 77.39,
                                        h: 17.22,
                                        t: "המשך/י עם %@"
                                    }],
                                    co: [{
                                        w: 69.34,
                                        h: 17,
                                        t: "לתרום עם %@"
                                    }],
                                    d: [{
                                        w: 70.98,
                                        h: 17,
                                        t: "תרום/י עם %@"
                                    }],
                                    o: [{
                                        w: 113.98,
                                        h: 17.22,
                                        t: "להזמין באמצעות %@"
                                    }],
                                    pa: [{
                                        w: 109.45,
                                        h: 17,
                                        t: "שלם/י באמצעות %@"
                                    }],
                                    rl: [{
                                        w: 63.39,
                                        h: 17.22,
                                        t: "לטעון עם %@"
                                    }],
                                    rn: [{
                                        w: 110.7,
                                        h: 17,
                                        t: "לשכור באמצעות %@"
                                    }],
                                    se: [{
                                        w: 76.44,
                                        h: 17,
                                        t: "להגדיר את %@"
                                    }],
                                    sb: [{
                                        w: 108.44,
                                        h: 17,
                                        t: "רישום כמינוי עם %@"
                                    }],
                                    sp: [{
                                        w: 112.34,
                                        h: 17.22,
                                        t: "לתמוך באמצעות %@"
                                    }],
                                    ti: [{
                                        w: 150.63,
                                        h: 17,
                                        t: "להשאיר טיפ באמצעות %@"
                                    }],
                                    to: [{
                                        w: 106,
                                        h: 17,
                                        t: "למלא באמצעות %@"
                                    }]
                                },
                                s: "14px",
                                rtl: !0,
                                w: 700
                            },
                            "ar-AB": {
                                l: {
                                    a: [{
                                        w: 99.73,
                                        h: 15,
                                        t: "إضافة مال باستخدام %@"
                                    }],
                                    bo: [{
                                        w: 72.73,
                                        h: 15,
                                        t: "حجز باستخدام %@"
                                    }],
                                    bu: [{
                                        w: 74.05,
                                        h: 15,
                                        t: "شراء باستخدام %@"
                                    }],
                                    ch: [{
                                        w: 111.41,
                                        h: 15,
                                        t: "دفع الحساب باستخدام %@"
                                    }],
                                    ci: [{
                                        w: 33.95,
                                        h: 15,
                                        t: "متابعة %@"
                                    }],
                                    co: [{
                                        w: 51.61,
                                        h: 15,
                                        t: "مساهمة بـ %@"
                                    }],
                                    d: [{
                                        w: 73.14,
                                        h: 15,
                                        t: "تبرع باستخدام %@"
                                    }],
                                    o: [{
                                        w: 74.09,
                                        h: 15,
                                        t: "طلب باستخدام %@"
                                    }],
                                    pa: [{
                                        w: 69.69,
                                        h: 15,
                                        t: "دفع باستخدام %@"
                                    }],
                                    rl: [{
                                        w: 112.33,
                                        h: 15,
                                        t: "إعادة التعبئة باستخدام %@"
                                    }],
                                    rn: [{
                                        w: 88.36,
                                        h: 15,
                                        t: "استئجار باستخدام %@"
                                    }],
                                    se: [{
                                        w: 29.02,
                                        h: 15,
                                        t: "إعداد %@"
                                    }],
                                    sb: [{
                                        w: 85.2,
                                        h: 15,
                                        t: "اشتراك باستخدام %@"
                                    }],
                                    sp: [{
                                        w: 71.73,
                                        h: 15.08,
                                        t: "دعم باستخدام %@"
                                    }],
                                    ti: [{
                                        w: 113.48,
                                        h: 15,
                                        t: "دفع الإكرامية باستخدام %@"
                                    }],
                                    to: [{
                                        w: 112.78,
                                        h: 15,
                                        t: "تعبئة الرصيد باستخدام %@"
                                    }]
                                },
                                s: "12px",
                                rtl: !0,
                                w: 700
                            },
                            "da-DK": {
                                l: {
                                    a: [{
                                        w: 113.38,
                                        h: 18,
                                        t: "Tilføj penge med %@"
                                    }],
                                    bo: [{
                                        w: 72.86,
                                        h: 18,
                                        t: "Bestil med %@"
                                    }],
                                    bu: [{
                                        w: 62.19,
                                        h: 18,
                                        t: "Køb med %@"
                                    }],
                                    ch: [{
                                        w: 69.8,
                                        h: 18,
                                        t: "Betal med %@"
                                    }],
                                    ci: [{
                                        w: 88.09,
                                        h: 18,
                                        t: "Fortsæt med %@"
                                    }],
                                    co: [{
                                        w: 79.16,
                                        h: 18,
                                        t: "Bidrag med %@"
                                    }],
                                    d: [{
                                        w: 76.38,
                                        h: 18,
                                        t: "Doner med %@"
                                    }],
                                    o: [{
                                        w: 72.86,
                                        h: 18,
                                        t: "Bestil med %@"
                                    }],
                                    pa: [{
                                        w: 69.8,
                                        h: 18,
                                        t: "Betal med %@"
                                    }],
                                    rl: [{
                                        w: 87.45,
                                        h: 18,
                                        t: "Tank op med %@"
                                    }],
                                    rn: [{
                                        w: 55.41,
                                        h: 18,
                                        t: "Lej med %@"
                                    }],
                                    se: [{
                                        w: 43.45,
                                        h: 18,
                                        t: "Indstil %@"
                                    }],
                                    sb: [{
                                        w: 93.02,
                                        h: 18,
                                        t: "Abonner med %@"
                                    }],
                                    sp: [{
                                        w: 63.41,
                                        h: 18,
                                        t: "Støt med %@"
                                    }],
                                    ti: [{
                                        w: 143.91,
                                        h: 18,
                                        t: "Giv drikkepenge med %@"
                                    }],
                                    to: [{
                                        w: 84.28,
                                        h: 18,
                                        t: "Fyld op med %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "es-MX": {
                                l: {
                                    a: [{
                                        w: 129.58,
                                        h: 18,
                                        t: "Agregar dinero con %@"
                                    }],
                                    bo: [{
                                        w: 90.03,
                                        h: 18,
                                        t: "Reservar con %@"
                                    }],
                                    bu: [{
                                        w: 89.53,
                                        h: 18,
                                        t: "Comprar con %@"
                                    }],
                                    ch: [{
                                        w: 69.38,
                                        h: 18,
                                        t: "Pagar con %@"
                                    }],
                                    ci: [{
                                        w: 96.92,
                                        h: 18,
                                        t: "Continuar con %@"
                                    }],
                                    co: [{
                                        w: 97.92,
                                        h: 18,
                                        t: "Contribuir con %@"
                                    }],
                                    d: [{
                                        w: 71.52,
                                        h: 18,
                                        t: "Donar con %@"
                                    }],
                                    o: [{
                                        w: 65.34,
                                        h: 18,
                                        t: "Pedir con %@"
                                    }],
                                    pa: [{
                                        w: 69.38,
                                        h: 18,
                                        t: "Pagar con %@"
                                    }],
                                    rl: [{
                                        w: 91.2,
                                        h: 18,
                                        t: "Recargar con %@"
                                    }],
                                    rn: [{
                                        w: 75.05,
                                        h: 18,
                                        t: "Rentar con %@"
                                    }],
                                    se: [{
                                        w: 74.22,
                                        h: 18,
                                        t: "Configurar %@"
                                    }],
                                    sb: [{
                                        w: 105.81,
                                        h: 18,
                                        t: "Suscribirse con %@"
                                    }],
                                    sp: [{
                                        w: 78.77,
                                        h: 18,
                                        t: "Apoyar con %@"
                                    }],
                                    ti: [{
                                        w: 108.42,
                                        h: 18,
                                        t: "Dar propina con %@"
                                    }],
                                    to: [{
                                        w: 124.44,
                                        h: 18,
                                        t: "Cubrir el resto con %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "uk-UA": {
                                l: {
                                    a: [{
                                        w: 121.47,
                                        h: 18,
                                        t: "Поповнити через %@"
                                    }],
                                    bo: [{
                                        w: 113.38,
                                        h: 18,
                                        t: "Замовити через %@"
                                    }],
                                    bu: [{
                                        w: 94.89,
                                        h: 18,
                                        t: "Купити через %@"
                                    }],
                                    ch: [{
                                        w: 119.34,
                                        h: 18,
                                        t: "Оформити через %@"
                                    }],
                                    ci: [{
                                        w: 101,
                                        h: 18,
                                        t: "Продовжити з %@"
                                    }],
                                    co: [{
                                        w: 155.2,
                                        h: 18,
                                        t: "Зробити внесок через %@"
                                    }],
                                    d: [{
                                        w: 145.48,
                                        h: 18,
                                        t: "Пожертвувати через %@"
                                    }],
                                    o: [{
                                        w: 113.38,
                                        h: 18,
                                        t: "Замовити через %@"
                                    }],
                                    pa: [{
                                        w: 96.17,
                                        h: 18,
                                        t: "Оплата через %@"
                                    }],
                                    rl: [{
                                        w: 121.47,
                                        h: 18,
                                        t: "Поповнити через %@"
                                    }],
                                    rn: [{
                                        w: 129.73,
                                        h: 18,
                                        t: "Орендувати через %@"
                                    }],
                                    se: [{
                                        w: 95.08,
                                        h: 18,
                                        t: "Налаштувати %@"
                                    }],
                                    sb: [{
                                        w: 132.28,
                                        h: 18,
                                        t: "Підписатися через %@"
                                    }],
                                    sp: [{
                                        w: 126.63,
                                        h: 18,
                                        t: "Підтримати через %@"
                                    }],
                                    ti: [{
                                        w: 161.66,
                                        h: 18,
                                        t: "Залишити чайові через %@"
                                    }],
                                    to: [{
                                        w: 121.47,
                                        h: 18,
                                        t: "Поповнити через %@"
                                    }]
                                },
                                s: "15px"
                            },
                            "tr-TR": {
                                l: {
                                    a: [{
                                        w: 82.14,
                                        h: 18,
                                        t: "%@ ile Para Ekle"
                                    }],
                                    bo: [{
                                        w: 134.94,
                                        h: 18,
                                        t: "%@ ile Rezervasyon Yap"
                                    }],
                                    bu: [{
                                        w: 72.36,
                                        h: 18,
                                        t: "%@ ile Satın Al"
                                    }],
                                    ch: [{
                                        w: 49.59,
                                        h: 18,
                                        t: "%@ ile Öde"
                                    }],
                                    ci: [{
                                        w: 64.34,
                                        h: 18,
                                        t: "%@ ile sürdür"
                                    }],
                                    co: [{
                                        w: 113.28,
                                        h: 18,
                                        t: "%@ ile Katkıda Bulun"
                                    }],
                                    d: [{
                                        w: 86.64,
                                        h: 18,
                                        t: "%@ ile Bağış Yap"
                                    }],
                                    o: [{
                                        w: 92.42,
                                        h: 18,
                                        t: "%@ ile Sipariş Ver"
                                    }],
                                    pa: [{
                                        w: 49.59,
                                        h: 18,
                                        t: "%@ ile Öde"
                                    }],
                                    rl: [{
                                        w: 114.63,
                                        h: 18,
                                        t: "%@ ile Yeniden Yükle"
                                    }],
                                    rn: [{
                                        w: 59.02,
                                        h: 18,
                                        t: "%@ ile Kirala"
                                    }],
                                    se: [{
                                        w: 48.86,
                                        h: 18,
                                        t: "Ayarla: %@"
                                    }],
                                    sb: [{
                                        w: 83.16,
                                        h: 18,
                                        t: "%@ ile Abone Ol"
                                    }],
                                    sp: [{
                                        w: 86.34,
                                        h: 18,
                                        t: "%@ ile Destek Ol"
                                    }],
                                    ti: [{
                                        w: 91.27,
                                        h: 18,
                                        t: "%@ ile Bahşiş Ver"
                                    }],
                                    to: [{
                                        w: 66.09,
                                        h: 18,
                                        t: "%@ ile Doldur"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "th-TH": {
                                l: {
                                    a: [{
                                        w: 64.11,
                                        h: 15,
                                        t: "เติมเงินด้วย %@"
                                    }],
                                    bo: [{
                                        w: 45.84,
                                        h: 15,
                                        t: "จองด้วย %@"
                                    }],
                                    bu: [{
                                        w: 40.47,
                                        h: 18.41,
                                        t: "ซื้อด้วย %@"
                                    }],
                                    ch: [{
                                        w: 69.86,
                                        h: 15,
                                        t: "ชำระเงินด้วย %@"
                                    }],
                                    ci: [{
                                        w: 96.7,
                                        h: 15,
                                        t: "ดำเนินการต่อด้วย %@"
                                    }],
                                    co: [{
                                        w: 76.97,
                                        h: 15,
                                        t: "มีส่วนร่วมด้วย %@"
                                    }],
                                    d: [{
                                        w: 61.7,
                                        h: 15,
                                        t: "บริจาคด้วย %@"
                                    }],
                                    o: [{
                                        w: 39.22,
                                        h: 17.08,
                                        t: "สั่งด้วย %@"
                                    }],
                                    pa: [{
                                        w: 51.52,
                                        h: 15,
                                        t: "ชำระด้วย %@"
                                    }],
                                    rl: [{
                                        w: 79.27,
                                        h: 15.05,
                                        t: "โหลดใหม่ด้วย %@"
                                    }],
                                    rn: [{
                                        w: 43.58,
                                        h: 15,
                                        t: "เช่าด้วย %@"
                                    }],
                                    se: [{
                                        w: 31.77,
                                        h: 17.7,
                                        t: "ตั้งค่า %@"
                                    }],
                                    sb: [{
                                        w: 70.42,
                                        h: 15,
                                        t: "สมัครรับด้วย %@"
                                    }],
                                    sp: [{
                                        w: 73.39,
                                        h: 15.64,
                                        t: "สนับสนุนด้วย %@"
                                    }],
                                    ti: [{
                                        w: 57.23,
                                        h: 15,
                                        t: "ให้ทิปด้วย %@"
                                    }],
                                    to: [{
                                        w: 45.75,
                                        h: 15,
                                        t: "เติมด้วย %@"
                                    }]
                                },
                                s: "13px"
                            },
                            "ro-RO": {
                                l: {
                                    a: [{
                                        w: 114.67,
                                        h: 18,
                                        t: "Adăugați bani cu %@"
                                    }],
                                    bo: [{
                                        w: 84.72,
                                        h: 18,
                                        t: "Rezervați cu %@"
                                    }],
                                    bu: [{
                                        w: 92.45,
                                        h: 18,
                                        t: "Cumpărați cu %@"
                                    }],
                                    ch: [{
                                        w: 151.14,
                                        h: 18,
                                        t: "Finalizați tranzacția cu %@"
                                    }],
                                    ci: [{
                                        w: 91.88,
                                        h: 18,
                                        t: "Continuați cu %@"
                                    }],
                                    co: [{
                                        w: 92.88,
                                        h: 18,
                                        t: "Contribuiți cu %@"
                                    }],
                                    d: [{
                                        w: 66.47,
                                        h: 18,
                                        t: "Donați cu %@"
                                    }],
                                    o: [{
                                        w: 95.94,
                                        h: 18,
                                        t: "Comandați cu %@"
                                    }],
                                    pa: [{
                                        w: 60.25,
                                        h: 18,
                                        t: "Plătiți cu %@"
                                    }],
                                    rl: [{
                                        w: 97.3,
                                        h: 18,
                                        t: "Reîncărcați cu %@"
                                    }],
                                    rn: [{
                                        w: 80.72,
                                        h: 18,
                                        t: "Închiriați cu %@"
                                    }],
                                    se: [{
                                        w: 77.58,
                                        h: 18,
                                        t: "Configurați %@"
                                    }],
                                    sb: [{
                                        w: 96.95,
                                        h: 18,
                                        t: "Abonați‑vă cu %@"
                                    }],
                                    sp: [{
                                        w: 92.88,
                                        h: 18,
                                        t: "Contribuiți cu %@"
                                    }],
                                    ti: [{
                                        w: 110.34,
                                        h: 18,
                                        t: "Oferiți bacșiș cu %@"
                                    }],
                                    to: [{
                                        w: 97.3,
                                        h: 18,
                                        t: "Reîncărcați cu %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "fi-FI": {
                                l: {
                                    a: [{
                                        w: 78.92,
                                        h: 18,
                                        t: "Lisää rahaa "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    bo: [{
                                        w: 74.11,
                                        h: 18,
                                        t: "Tee varaus "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    bu: [{
                                        w: 34.66,
                                        h: 18,
                                        t: "Osta "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    ch: [{
                                        w: 121.22,
                                        h: 18,
                                        t: "Siirry maksamaan "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    ci: [{
                                        w: 39.81,
                                        h: 18,
                                        t: "Jatka "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    co: [{
                                        w: 56.03,
                                        h: 18,
                                        t: "Lahjoita "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    d: [{
                                        w: 56.03,
                                        h: 18,
                                        t: "Lahjoita "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    o: [{
                                        w: 34.69,
                                        h: 18,
                                        t: "Tilaa "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    pa: [{
                                        w: 46.7,
                                        h: 18,
                                        t: "Maksa "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    rl: [{
                                        w: 40.13,
                                        h: 18,
                                        t: "Lataa "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    rn: [{
                                        w: 57.97,
                                        h: 18,
                                        t: "Vuokraa "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    se: [{
                                        w: 27.25,
                                        h: 18,
                                        t: "Ota "
                                    }, {
                                        w: 61.7,
                                        h: 18,
                                        t: " käyttöön"
                                    }],
                                    sb: [{
                                        w: 34.69,
                                        h: 18,
                                        t: "Tilaa "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    sp: [{
                                        w: 27.2,
                                        h: 18,
                                        t: "Tue "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    ti: [{
                                        w: 70.44,
                                        h: 18,
                                        t: "Anna tippi "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }],
                                    to: [{
                                        w: 68.19,
                                        h: 18,
                                        t: "Täydennä "
                                    }, {
                                        w: 14.75,
                                        h: 18,
                                        t: "lla"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "pl-PL": {
                                l: {
                                    a: [{
                                        w: 91.52,
                                        h: 18,
                                        t: "Dodaj środki ("
                                    }, {
                                        w: 5.16,
                                        h: 18,
                                        t: ")"
                                    }],
                                    bo: [{
                                        w: 146.19,
                                        h: 18,
                                        t: "Zarezerwuj, używając %@"
                                    }],
                                    bu: [{
                                        w: 98.39,
                                        h: 18,
                                        t: "Kup, używając %@"
                                    }],
                                    ch: [{
                                        w: 175.7,
                                        h: 18,
                                        t: "Sfinalizuj zakup, używając %@"
                                    }],
                                    ci: [{
                                        w: 80.53,
                                        h: 18,
                                        t: "Kontynuuj - %@"
                                    }],
                                    co: [{
                                        w: 92.56,
                                        h: 18,
                                        t: "Wnieś wkład ("
                                    }, {
                                        w: 5.16,
                                        h: 18,
                                        t: ")"
                                    }],
                                    d: [{
                                        w: 165.52,
                                        h: 18,
                                        t: "Przekaż datek, używając %@"
                                    }],
                                    o: [{
                                        w: 58.28,
                                        h: 18,
                                        t: "Zamów ("
                                    }, {
                                        w: 5.16,
                                        h: 18,
                                        t: ")"
                                    }],
                                    pa: [{
                                        w: 117.69,
                                        h: 18,
                                        t: "Zapłać, używając %@"
                                    }],
                                    rl: [{
                                        w: 114.61,
                                        h: 18,
                                        t: "Uzupełnij środki ("
                                    }, {
                                        w: 5.16,
                                        h: 18,
                                        t: ")"
                                    }],
                                    rn: [{
                                        w: 77.73,
                                        h: 18,
                                        t: "Wypożycz ("
                                    }, {
                                        w: 5.16,
                                        h: 18,
                                        t: ")"
                                    }],
                                    se: [{
                                        w: 79.19,
                                        h: 18,
                                        t: "Skonfiguruj %@"
                                    }],
                                    sb: [{
                                        w: 147.33,
                                        h: 18,
                                        t: "Subskrybuj, używając %@"
                                    }],
                                    sp: [{
                                        w: 70.06,
                                        h: 18,
                                        t: "Wesprzyj ("
                                    }, {
                                        w: 5.16,
                                        h: 18,
                                        t: ")"
                                    }],
                                    ti: [{
                                        w: 89.44,
                                        h: 18,
                                        t: "Daj napiwek ("
                                    }, {
                                        w: 5.16,
                                        h: 18,
                                        t: ")"
                                    }],
                                    to: [{
                                        w: 59.44,
                                        h: 18,
                                        t: "Doładuj ("
                                    }, {
                                        w: 5.16,
                                        h: 18,
                                        t: ")"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "zh-TW": {
                                l: {
                                    a: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 儲值"
                                    }],
                                    bo: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 預約"
                                    }],
                                    bu: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 購買"
                                    }],
                                    ch: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 結帳"
                                    }],
                                    ci: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 繼續"
                                    }],
                                    co: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 捐助"
                                    }],
                                    d: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 捐款"
                                    }],
                                    o: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 訂購"
                                    }],
                                    pa: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 付款"
                                    }],
                                    rl: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 充值"
                                    }],
                                    rn: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 租借"
                                    }],
                                    se: [{
                                        w: 32.61,
                                        h: 18,
                                        t: "設定 %@"
                                    }],
                                    sb: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 訂閱"
                                    }],
                                    sp: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 支援"
                                    }],
                                    ti: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 62.2,
                                        h: 18,
                                        t: " 支付小費"
                                    }],
                                    to: [{
                                        w: 17.81,
                                        h: 18,
                                        t: "用 "
                                    }, {
                                        w: 32.61,
                                        h: 18,
                                        t: " 加值"
                                    }]
                                },
                                s: "14.8px"
                            },
                            "fr-CA": {
                                l: {
                                    a: [{
                                        w: 154.91,
                                        h: 18,
                                        t: "Ajouter des fonds avec %@"
                                    }],
                                    bo: [{
                                        w: 96.92,
                                        h: 18,
                                        t: "Réserver avec %@"
                                    }],
                                    bu: [{
                                        w: 90.47,
                                        h: 18,
                                        t: "Acheter avec %@"
                                    }],
                                    ch: [{
                                        w: 75.22,
                                        h: 18,
                                        t: "Payer avec %@"
                                    }],
                                    ci: [{
                                        w: 108.56,
                                        h: 18,
                                        t: "Poursuivre avec %@"
                                    }],
                                    co: [{
                                        w: 109.41,
                                        h: 18,
                                        t: "Contribuer avec %@"
                                    }],
                                    d: [{
                                        w: 118.92,
                                        h: 18,
                                        t: "Faire un don avec %@"
                                    }],
                                    o: [{
                                        w: 120.53,
                                        h: 18,
                                        t: "Commander avec %@"
                                    }],
                                    pa: [{
                                        w: 75.22,
                                        h: 18,
                                        t: "Payer avec %@"
                                    }],
                                    rl: [{
                                        w: 106.7,
                                        h: 18,
                                        t: "Recharger avec %@"
                                    }],
                                    rn: [{
                                        w: 75.95,
                                        h: 18,
                                        t: "Louer avec %@"
                                    }],
                                    se: [{
                                        w: 74.19,
                                        h: 18,
                                        t: "Configurer %@"
                                    }],
                                    sb: [{
                                        w: 105.61,
                                        h: 18,
                                        t: "S’abonner avec %@"
                                    }],
                                    sp: [{
                                        w: 93.98,
                                        h: 18,
                                        t: "Soutenir avec %@"
                                    }],
                                    ti: [{
                                        w: 174.38,
                                        h: 18,
                                        t: "Donner un pourboire avec %@"
                                    }],
                                    to: [{
                                        w: 106.7,
                                        h: 18,
                                        t: "Recharger avec %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "en-GB": {
                                l: {
                                    a: [{
                                        w: 110.86,
                                        h: 18,
                                        t: "Add Money with %@"
                                    }],
                                    bo: [{
                                        w: 68.8,
                                        h: 18,
                                        t: "Book with %@"
                                    }],
                                    bu: [{
                                        w: 60.39,
                                        h: 18,
                                        t: "Buy with %@"
                                    }],
                                    ch: [{
                                        w: 102.89,
                                        h: 18,
                                        t: "Check out with %@"
                                    }],
                                    ci: [{
                                        w: 95.58,
                                        h: 18,
                                        t: "Continue with %@"
                                    }],
                                    co: [{
                                        w: 105.94,
                                        h: 18,
                                        t: "Contribute with %@"
                                    }],
                                    d: [{
                                        w: 83,
                                        h: 18,
                                        t: "Donate with %@"
                                    }],
                                    o: [{
                                        w: 72.86,
                                        h: 18,
                                        t: "Order with %@"
                                    }],
                                    pa: [{
                                        w: 59,
                                        h: 18,
                                        t: "Pay with %@"
                                    }],
                                    rl: [{
                                        w: 80.89,
                                        h: 18,
                                        t: "Reload with %@"
                                    }],
                                    rn: [{
                                        w: 65.67,
                                        h: 18,
                                        t: "Rent with %@"
                                    }],
                                    se: [{
                                        w: 45.88,
                                        h: 18,
                                        t: "Set up %@"
                                    }],
                                    sb: [{
                                        w: 102.14,
                                        h: 18,
                                        t: "Subscribe with %@"
                                    }],
                                    sp: [{
                                        w: 88.67,
                                        h: 18,
                                        t: "Support with %@"
                                    }],
                                    ti: [{
                                        w: 55.58,
                                        h: 18,
                                        t: "Tip with %@"
                                    }],
                                    to: [{
                                        w: 81.66,
                                        h: 18,
                                        t: "Top Up with %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "es-ES": {
                                l: {
                                    a: [{
                                        w: 120.05,
                                        h: 18,
                                        t: "Añadir dinero con %@"
                                    }],
                                    bo: [{
                                        w: 90.03,
                                        h: 18,
                                        t: "Reservar con %@"
                                    }],
                                    bu: [{
                                        w: 89.53,
                                        h: 18,
                                        t: "Comprar con %@"
                                    }],
                                    ch: [{
                                        w: 69.38,
                                        h: 18,
                                        t: "Pagar con %@"
                                    }],
                                    ci: [{
                                        w: 96.92,
                                        h: 18,
                                        t: "Continuar con %@"
                                    }],
                                    co: [{
                                        w: 97.92,
                                        h: 18,
                                        t: "Contribuir con %@"
                                    }],
                                    d: [{
                                        w: 71.52,
                                        h: 18,
                                        t: "Donar con %@"
                                    }],
                                    o: [{
                                        w: 65.34,
                                        h: 18,
                                        t: "Pedir con %@"
                                    }],
                                    pa: [{
                                        w: 69.38,
                                        h: 18,
                                        t: "Pagar con %@"
                                    }],
                                    rl: [{
                                        w: 91.2,
                                        h: 18,
                                        t: "Recargar con %@"
                                    }],
                                    rn: [{
                                        w: 81.73,
                                        h: 18,
                                        t: "Alquilar con %@"
                                    }],
                                    se: [{
                                        w: 74.22,
                                        h: 18,
                                        t: "Configurar %@"
                                    }],
                                    sb: [{
                                        w: 105.81,
                                        h: 18,
                                        t: "Suscribirse con %@"
                                    }],
                                    sp: [{
                                        w: 97.92,
                                        h: 18,
                                        t: "Contribuir con %@"
                                    }],
                                    ti: [{
                                        w: 108.42,
                                        h: 18,
                                        t: "Dar propina con %@"
                                    }],
                                    to: [{
                                        w: 91.2,
                                        h: 18,
                                        t: "Recargar con %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "de-DE": {
                                l: {
                                    a: [{
                                        w: 58.7,
                                        h: 18,
                                        t: "Geld mit "
                                    }, {
                                        w: 77.88,
                                        h: 18,
                                        t: " hinzufügen"
                                    }],
                                    bo: [{
                                        w: 24.41,
                                        h: 18,
                                        t: "Mit "
                                    }, {
                                        w: 53.23,
                                        h: 18,
                                        t: " buchen"
                                    }],
                                    bu: [{
                                        w: 24.41,
                                        h: 18,
                                        t: "Mit "
                                    }, {
                                        w: 48.45,
                                        h: 18,
                                        t: " kaufen"
                                    }],
                                    ch: [{
                                        w: 24.41,
                                        h: 18,
                                        t: "Mit "
                                    }, {
                                        w: 63.94,
                                        h: 18,
                                        t: " bezahlen"
                                    }],
                                    ci: [{
                                        w: 70.61,
                                        h: 18,
                                        t: "Weiter mit %@"
                                    }],
                                    co: [{
                                        w: 24.41,
                                        h: 18,
                                        t: "Mit "
                                    }, {
                                        w: 66.64,
                                        h: 18,
                                        t: " beitragen"
                                    }],
                                    d: [{
                                        w: 24.41,
                                        h: 18,
                                        t: "Mit "
                                    }, {
                                        w: 61,
                                        h: 18,
                                        t: " spenden"
                                    }],
                                    o: [{
                                        w: 24.41,
                                        h: 18,
                                        t: "Mit "
                                    }, {
                                        w: 63.91,
                                        h: 18,
                                        t: " bestellen"
                                    }],
                                    pa: [{
                                        w: 24.41,
                                        h: 18,
                                        t: "Mit "
                                    }, {
                                        w: 63.94,
                                        h: 18,
                                        t: " bezahlen"
                                    }],
                                    rl: [{
                                        w: 24.41,
                                        h: 18,
                                        t: "Mit "
                                    }, {
                                        w: 86.28,
                                        h: 18,
                                        t: " erneut laden"
                                    }],
                                    rn: [{
                                        w: 24.41,
                                        h: 18,
                                        t: "Mit "
                                    }, {
                                        w: 43.22,
                                        h: 18,
                                        t: " leihen"
                                    }],
                                    se: [{
                                        w: 69.55,
                                        h: 18,
                                        t: "%@ einrichten"
                                    }],
                                    sb: [{
                                        w: 24.41,
                                        h: 18,
                                        t: "Mit "
                                    }, {
                                        w: 77.94,
                                        h: 18,
                                        t: " abonnieren"
                                    }],
                                    sp: [{
                                        w: 24.41,
                                        h: 18,
                                        t: "Mit "
                                    }, {
                                        w: 87.59,
                                        h: 18,
                                        t: " unterstützen"
                                    }],
                                    ti: [{
                                        w: 64.16,
                                        h: 18,
                                        t: "%@ Trinkgeld"
                                    }],
                                    to: [{
                                        w: 24.41,
                                        h: 18,
                                        t: "Mit "
                                    }, {
                                        w: 61.42,
                                        h: 18,
                                        t: " auffüllen"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "nb-NO": {
                                l: {
                                    a: [{
                                        w: 135.02,
                                        h: 18,
                                        t: "Legg til penger med %@"
                                    }],
                                    bo: [{
                                        w: 76.34,
                                        h: 18,
                                        t: "Bestill med %@"
                                    }],
                                    bu: [{
                                        w: 66.05,
                                        h: 18,
                                        t: "Kjøp med %@"
                                    }],
                                    ch: [{
                                        w: 69.8,
                                        h: 18,
                                        t: "Betal med %@"
                                    }],
                                    ci: [{
                                        w: 62.28,
                                        h: 18,
                                        t: "Fortsett i %@"
                                    }],
                                    co: [{
                                        w: 70.47,
                                        h: 18,
                                        t: "Bidra med %@"
                                    }],
                                    d: [{
                                        w: 76.38,
                                        h: 18,
                                        t: "Doner med %@"
                                    }],
                                    o: [{
                                        w: 76.34,
                                        h: 18,
                                        t: "Bestill med %@"
                                    }],
                                    pa: [{
                                        w: 69.8,
                                        h: 18,
                                        t: "Betal med %@"
                                    }],
                                    rl: [{
                                        w: 78.59,
                                        h: 18,
                                        t: "Fyll på med %@"
                                    }],
                                    rn: [{
                                        w: 55.41,
                                        h: 18,
                                        t: "Lei med %@"
                                    }],
                                    se: [{
                                        w: 72.77,
                                        h: 18,
                                        t: "Konfigurer %@"
                                    }],
                                    sb: [{
                                        w: 93.02,
                                        h: 18,
                                        t: "Abonner med %@"
                                    }],
                                    sp: [{
                                        w: 68.44,
                                        h: 18,
                                        t: "Støtt med %@"
                                    }],
                                    ti: [{
                                        w: 85.83,
                                        h: 18,
                                        t: "Gi driks med %@"
                                    }],
                                    to: [{
                                        w: 78.59,
                                        h: 18,
                                        t: "Fyll på med %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "ca-ES": {
                                l: {
                                    a: [{
                                        w: 120.41,
                                        h: 18,
                                        t: "Afegir diners amb %@"
                                    }],
                                    bo: [{
                                        w: 94.61,
                                        h: 18,
                                        t: "Reservar amb %@"
                                    }],
                                    bu: [{
                                        w: 94.11,
                                        h: 18,
                                        t: "Comprar amb %@"
                                    }],
                                    ch: [{
                                        w: 73.97,
                                        h: 18,
                                        t: "Pagar amb %@"
                                    }],
                                    ci: [{
                                        w: 96.38,
                                        h: 18,
                                        t: "Continua amb %@"
                                    }],
                                    co: [{
                                        w: 102.52,
                                        h: 18,
                                        t: "Contribuir amb %@"
                                    }],
                                    d: [{
                                        w: 141.59,
                                        h: 18,
                                        t: "Fer una donació amb %@"
                                    }],
                                    o: [{
                                        w: 96.41,
                                        h: 18,
                                        t: "Demanar amb %@"
                                    }],
                                    pa: [{
                                        w: 73.97,
                                        h: 18,
                                        t: "Pagar amb %@"
                                    }],
                                    rl: [{
                                        w: 109.06,
                                        h: 18,
                                        t: "Recarregar amb %@"
                                    }],
                                    rn: [{
                                        w: 77.56,
                                        h: 18,
                                        t: "Llogar amb %@"
                                    }],
                                    se: [{
                                        w: 74.22,
                                        h: 18,
                                        t: "Configurar %@"
                                    }],
                                    sb: [{
                                        w: 117.7,
                                        h: 18,
                                        t: "Subscriure’s amb %@"
                                    }],
                                    sp: [{
                                        w: 129.63,
                                        h: 18,
                                        t: "Compatibilitat amb %@"
                                    }],
                                    ti: [{
                                        w: 132.08,
                                        h: 18,
                                        t: "Deixar propina amb %@"
                                    }],
                                    to: [{
                                        w: 109.06,
                                        h: 18,
                                        t: "Recarregar amb %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "ja-JP": {
                                l: {
                                    a: [{
                                        w: 75,
                                        h: 18,
                                        t: "%@でチャージ"
                                    }],
                                    bo: [{
                                        w: 45,
                                        h: 18,
                                        t: "%@で予約"
                                    }],
                                    bu: [{
                                        w: 45,
                                        h: 18,
                                        t: "%@で購入"
                                    }],
                                    ch: [{
                                        w: 90,
                                        h: 18,
                                        t: "%@で購入に進む"
                                    }],
                                    ci: [{
                                        w: 60,
                                        h: 18,
                                        t: "%@で続ける"
                                    }],
                                    co: [{
                                        w: 45,
                                        h: 18,
                                        t: "%@で献金"
                                    }],
                                    d: [{
                                        w: 45,
                                        h: 18,
                                        t: "%@で寄付"
                                    }],
                                    o: [{
                                        w: 45,
                                        h: 18,
                                        t: "%@で注文"
                                    }],
                                    pa: [{
                                        w: 60,
                                        h: 18,
                                        t: "%@で支払う"
                                    }],
                                    rl: [{
                                        w: 75,
                                        h: 18,
                                        t: "%@でチャージ"
                                    }],
                                    rn: [{
                                        w: 75,
                                        h: 18,
                                        t: "%@でレンタル"
                                    }],
                                    se: [{
                                        w: 45,
                                        h: 18,
                                        t: "%@を設定"
                                    }],
                                    sb: [{
                                        w: 150,
                                        h: 18,
                                        t: "%@でサブスクリプション"
                                    }],
                                    sp: [{
                                        w: 45,
                                        h: 18,
                                        t: "%@で支援"
                                    }],
                                    ti: [{
                                        w: 60,
                                        h: 18,
                                        t: "%@でチップ"
                                    }],
                                    to: [{
                                        w: 75,
                                        h: 18,
                                        t: "%@でチャージ"
                                    }]
                                },
                                s: "15px",
                                w: 600
                            },
                            "vi-VN": {
                                l: {
                                    a: [{
                                        w: 95.7,
                                        h: 18,
                                        t: "Nạp tiền bằng %@"
                                    }],
                                    bo: [{
                                        w: 91.86,
                                        h: 18,
                                        t: "Đặt chỗ bằng %@"
                                    }],
                                    bu: [{
                                        w: 69.39,
                                        h: 18,
                                        t: "Mua bằng %@"
                                    }],
                                    ch: [{
                                        w: 115.56,
                                        h: 18,
                                        t: "Thanh toán bằng %@"
                                    }],
                                    ci: [{
                                        w: 93.8,
                                        h: 18,
                                        t: "Tiếp tục bằng %@"
                                    }],
                                    co: [{
                                        w: 105.2,
                                        h: 18,
                                        t: "Đóng góp bằng %@"
                                    }],
                                    d: [{
                                        w: 113.02,
                                        h: 18,
                                        t: "Quyên góp bằng %@"
                                    }],
                                    o: [{
                                        w: 100.55,
                                        h: 18,
                                        t: "Đặt hàng bằng %@"
                                    }],
                                    pa: [{
                                        w: 115.56,
                                        h: 18,
                                        t: "Thanh toán bằng %@"
                                    }],
                                    rl: [{
                                        w: 85.63,
                                        h: 18,
                                        t: "Nạp lại bằng %@"
                                    }],
                                    rn: [{
                                        w: 74.27,
                                        h: 18,
                                        t: "Thuê bằng %@"
                                    }],
                                    se: [{
                                        w: 60.72,
                                        h: 18,
                                        t: "Thiết lập %@"
                                    }],
                                    sb: [{
                                        w: 94.59,
                                        h: 18,
                                        t: "Đăng ký bằng %@"
                                    }],
                                    sp: [{
                                        w: 81.38,
                                        h: 18,
                                        t: "Hỗ trợ bằng %@"
                                    }],
                                    ti: [{
                                        w: 61,
                                        h: 18,
                                        t: "Tip bằng %@"
                                    }],
                                    to: [{
                                        w: 95.7,
                                        h: 18,
                                        t: "Nạp tiền bằng %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "nl-NL": {
                                l: {
                                    a: [{
                                        w: 123.2,
                                        h: 18,
                                        t: "Voeg geld toe met %@"
                                    }],
                                    bo: [{
                                        w: 99.25,
                                        h: 18,
                                        t: "Reserveer met %@"
                                    }],
                                    bu: [{
                                        w: 66.8,
                                        h: 18,
                                        t: "Koop met %@"
                                    }],
                                    ch: [{
                                        w: 74.06,
                                        h: 18,
                                        t: "Betaal met %@"
                                    }],
                                    ci: [{
                                        w: 96.69,
                                        h: 18,
                                        t: "Ga verder met %@"
                                    }],
                                    co: [{
                                        w: 144.58,
                                        h: 18,
                                        t: "Doe een bijdrage met %@"
                                    }],
                                    d: [{
                                        w: 80.8,
                                        h: 18,
                                        t: "Doneer met %@"
                                    }],
                                    o: [{
                                        w: 73.63,
                                        h: 18,
                                        t: "Bestel met %@"
                                    }],
                                    pa: [{
                                        w: 74.06,
                                        h: 18,
                                        t: "Betaal met %@"
                                    }],
                                    rl: [{
                                        w: 125.09,
                                        h: 18,
                                        t: "Laad opnieuw met %@"
                                    }],
                                    rn: [{
                                        w: 64.84,
                                        h: 18,
                                        t: "Huur met %@"
                                    }],
                                    se: [{
                                        w: 82.33,
                                        h: 18,
                                        t: "Configureer %@"
                                    }],
                                    sb: [{
                                        w: 112.31,
                                        h: 18,
                                        t: "Abonneer je met %@"
                                    }],
                                    sp: [{
                                        w: 71.16,
                                        h: 18,
                                        t: "Steun met %@"
                                    }],
                                    ti: [{
                                        w: 92.61,
                                        h: 18,
                                        t: "Geef fooi met %@"
                                    }],
                                    to: [{
                                        w: 88.31,
                                        h: 18,
                                        t: "Verhoog met %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "cs-CZ": {
                                l: {
                                    a: [{
                                        w: 114.92,
                                        h: 18,
                                        t: "Přidat hotovost s %@"
                                    }],
                                    bo: [{
                                        w: 100.98,
                                        h: 18,
                                        t: "Zarezervovat s %@"
                                    }],
                                    bu: [{
                                        w: 56.98,
                                        h: 18,
                                        t: "Koupit s %@"
                                    }],
                                    ch: [{
                                        w: 65.02,
                                        h: 18,
                                        t: "Zaplatit s %@"
                                    }],
                                    ci: [{
                                        w: 88.44,
                                        h: 18,
                                        t: "Pokračovat s %@"
                                    }],
                                    co: [{
                                        w: 60.81,
                                        h: 18,
                                        t: "Přispět s %@"
                                    }],
                                    d: [{
                                        w: 65.84,
                                        h: 18,
                                        t: "Darovat s %@"
                                    }],
                                    o: [{
                                        w: 75.61,
                                        h: 18,
                                        t: "Objednat s %@"
                                    }],
                                    pa: [{
                                        w: 65.02,
                                        h: 18,
                                        t: "Zaplatit s %@"
                                    }],
                                    rl: [{
                                        w: 49.97,
                                        h: 18,
                                        t: "Dobít s %@"
                                    }],
                                    rn: [{
                                        w: 68.38,
                                        h: 18,
                                        t: "Vypůjčit s %@"
                                    }],
                                    se: [{
                                        w: 58.19,
                                        h: 18,
                                        t: "Nastavit %@"
                                    }],
                                    sb: [{
                                        w: 78.28,
                                        h: 18,
                                        t: "Předplatit s %@"
                                    }],
                                    sp: [{
                                        w: 70.45,
                                        h: 18,
                                        t: "Podpořit s %@"
                                    }],
                                    ti: [{
                                        w: 103.66,
                                        h: 18,
                                        t: "Dát spropitné s %@"
                                    }],
                                    to: [{
                                        w: 61.77,
                                        h: 18,
                                        t: "Doplnit s %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "sv-SE": {
                                l: {
                                    a: [{
                                        w: 138.39,
                                        h: 18,
                                        t: "Lägg till pengar med %@"
                                    }],
                                    bo: [{
                                        w: 69.44,
                                        h: 18,
                                        t: "Boka med %@"
                                    }],
                                    bu: [{
                                        w: 62.11,
                                        h: 18,
                                        t: "Köp med %@"
                                    }],
                                    ch: [{
                                        w: 77.78,
                                        h: 18,
                                        t: "Betala med %@"
                                    }],
                                    ci: [{
                                        w: 88.16,
                                        h: 18,
                                        t: "Fortsätt med %@"
                                    }],
                                    co: [{
                                        w: 70.47,
                                        h: 18,
                                        t: "Bidra med %@"
                                    }],
                                    d: [{
                                        w: 84.2,
                                        h: 18,
                                        t: "Donera med %@"
                                    }],
                                    o: [{
                                        w: 80.8,
                                        h: 18,
                                        t: "Beställ med %@"
                                    }],
                                    pa: [{
                                        w: 77.78,
                                        h: 18,
                                        t: "Betala med %@"
                                    }],
                                    rl: [{
                                        w: 78.59,
                                        h: 18,
                                        t: "Fyll på med %@"
                                    }],
                                    rn: [{
                                        w: 59.63,
                                        h: 18,
                                        t: "Hyr med %@"
                                    }],
                                    se: [{
                                        w: 47.42,
                                        h: 18,
                                        t: "Ställ in %@"
                                    }],
                                    sb: [{
                                        w: 121.25,
                                        h: 18,
                                        t: "Prenumerera med %@"
                                    }],
                                    sp: [{
                                        w: 67.13,
                                        h: 18,
                                        t: "Stöd med %@"
                                    }],
                                    ti: [{
                                        w: 98.45,
                                        h: 18,
                                        t: "Ge dricks med %@"
                                    }],
                                    to: [{
                                        w: 78.59,
                                        h: 18,
                                        t: "Fyll på med %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "it-IT": {
                                l: {
                                    a: [{
                                        w: 118.47,
                                        h: 18,
                                        t: "Versa denaro con %@"
                                    }],
                                    bo: [{
                                        w: 82.81,
                                        h: 18,
                                        t: "Prenota con %@"
                                    }],
                                    bu: [{
                                        w: 89.77,
                                        h: 18,
                                        t: "Acquista con %@"
                                    }],
                                    ch: [{
                                        w: 64.23,
                                        h: 18,
                                        t: "Paga con %@"
                                    }],
                                    ci: [{
                                        w: 91.78,
                                        h: 18,
                                        t: "Continua con %@"
                                    }],
                                    co: [{
                                        w: 111.69,
                                        h: 18,
                                        t: "Contribuisci con %@"
                                    }],
                                    d: [{
                                        w: 150.94,
                                        h: 18,
                                        t: "Fai una donazione con %@"
                                    }],
                                    o: [{
                                        w: 75.78,
                                        h: 18,
                                        t: "Ordina con %@"
                                    }],
                                    pa: [{
                                        w: 64.23,
                                        h: 18,
                                        t: "Paga con %@"
                                    }],
                                    rl: [{
                                        w: 84.5,
                                        h: 18,
                                        t: "Ricarica con %@"
                                    }],
                                    rn: [{
                                        w: 90.75,
                                        h: 18,
                                        t: "Noleggia con %@"
                                    }],
                                    se: [{
                                        w: 69.08,
                                        h: 18,
                                        t: "Configura %@"
                                    }],
                                    sb: [{
                                        w: 91.91,
                                        h: 18,
                                        t: "Abbonati con %@"
                                    }],
                                    sp: [{
                                        w: 84.77,
                                        h: 18,
                                        t: "Sostieni con %@"
                                    }],
                                    ti: [{
                                        w: 153.83,
                                        h: 18,
                                        t: "Lascia una mancia con %@"
                                    }],
                                    to: [{
                                        w: 84.5,
                                        h: 18,
                                        t: "Ricarica con %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "hr-HR": {
                                l: {
                                    a: [{
                                        w: 145.14,
                                        h: 18,
                                        t: "Dodaj novac koristeći %@"
                                    }],
                                    bo: [{
                                        w: 128.28,
                                        h: 18,
                                        t: "Rezerviraj koristeći %@"
                                    }],
                                    bu: [{
                                        w: 92.84,
                                        h: 18,
                                        t: "Kupi koristeći %@"
                                    }],
                                    ch: [{
                                        w: 114.06,
                                        h: 18,
                                        t: "Naplati koristeći: %@"
                                    }],
                                    ci: [{
                                        w: 63.89,
                                        h: 18,
                                        t: "Nastavi s %@"
                                    }],
                                    co: [{
                                        w: 126.33,
                                        h: 18,
                                        t: "Doprinesi koristeći %@"
                                    }],
                                    d: [{
                                        w: 109.88,
                                        h: 18,
                                        t: "Doniraj koristeći %@"
                                    }],
                                    o: [{
                                        w: 106.19,
                                        h: 18,
                                        t: "Naruči koristeći %@"
                                    }],
                                    pa: [{
                                        w: 91.72,
                                        h: 18,
                                        t: "Plati koristeći %@"
                                    }],
                                    rl: [{
                                        w: 110.16,
                                        h: 18,
                                        t: "Napuni koristeći %@"
                                    }],
                                    rn: [{
                                        w: 109.28,
                                        h: 18,
                                        t: "Unajmi koristeći %@"
                                    }],
                                    se: [{
                                        w: 48.05,
                                        h: 18,
                                        t: "Podesi %@"
                                    }],
                                    sb: [{
                                        w: 137.25,
                                        h: 18,
                                        t: "Pretplati se koristeći %@"
                                    }],
                                    sp: [{
                                        w: 104.63,
                                        h: 18,
                                        t: "Podrži koristeći %@"
                                    }],
                                    ti: [{
                                        w: 173.84,
                                        h: 18,
                                        t: "Ostavi napojnicu koristeći %@"
                                    }],
                                    to: [{
                                        w: 127.06,
                                        h: 18,
                                        t: "Nadoplati koristeći %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "id-ID": {
                                l: {
                                    a: [{
                                        w: 146.39,
                                        h: 18,
                                        t: "Tambah uang dengan %@"
                                    }],
                                    bo: [{
                                        w: 97.41,
                                        h: 18,
                                        t: "Pesan dengan %@"
                                    }],
                                    bu: [{
                                        w: 81.23,
                                        h: 18,
                                        t: "Beli dengan %@"
                                    }],
                                    ch: [{
                                        w: 138.91,
                                        h: 18,
                                        t: "Lanjut bayar dengan %@"
                                    }],
                                    ci: [{
                                        w: 122.27,
                                        h: 18,
                                        t: "Lanjutkan dengan %@"
                                    }],
                                    co: [{
                                        w: 145.36,
                                        h: 18,
                                        t: "Berkontribusi dengan %@"
                                    }],
                                    d: [{
                                        w: 102.89,
                                        h: 18,
                                        t: "Donasi dengan %@"
                                    }],
                                    o: [{
                                        w: 94.8,
                                        h: 18,
                                        t: "Order dengan %@"
                                    }],
                                    pa: [{
                                        w: 94.91,
                                        h: 18,
                                        t: "Bayar dengan %@"
                                    }],
                                    rl: [{
                                        w: 113.94,
                                        h: 18,
                                        t: "Isi Ulang dengan %@"
                                    }],
                                    rn: [{
                                        w: 93.31,
                                        h: 18,
                                        t: "Sewa dengan %@"
                                    }],
                                    se: [{
                                        w: 31.2,
                                        h: 18,
                                        t: "Atur %@"
                                    }],
                                    sb: [{
                                        w: 149.42,
                                        h: 18,
                                        t: "Berlangganan dengan %@"
                                    }],
                                    sp: [{
                                        w: 108.81,
                                        h: 18,
                                        t: "Dukung dengan %@"
                                    }],
                                    ti: [{
                                        w: 103.34,
                                        h: 18,
                                        t: "Beri tip dengan %@"
                                    }],
                                    to: [{
                                        w: 147.81,
                                        h: 18,
                                        t: "Tambah Dana dengan %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "hu-HU": {
                                l: {
                                    a: [{
                                        w: 160.58,
                                        h: 18,
                                        t: "Pénz hozzáadása ezzel: %@"
                                    }],
                                    bo: [{
                                        w: 113.28,
                                        h: 18,
                                        t: "Lefoglalás ezzel: %@"
                                    }],
                                    bu: [{
                                        w: 129.64,
                                        h: 18,
                                        t: "Megvásárlás ezzel: %@"
                                    }],
                                    ch: [{
                                        w: 116.84,
                                        h: 18,
                                        t: "Kasszához ezzel: %@"
                                    }],
                                    ci: [{
                                        w: 105.84,
                                        h: 18,
                                        t: "Folytatás ezzel: %@"
                                    }],
                                    co: [{
                                        w: 130.72,
                                        h: 18,
                                        t: "Hozzájárulás ezzel: %@"
                                    }],
                                    d: [{
                                        w: 139.45,
                                        h: 18,
                                        t: "Adományozás ezzel: %@"
                                    }],
                                    o: [{
                                        w: 131.88,
                                        h: 18,
                                        t: "Megrendelés ezzel: %@"
                                    }],
                                    pa: [{
                                        w: 92.38,
                                        h: 18,
                                        t: "Fizetés ezzel: %@"
                                    }],
                                    rl: [{
                                        w: 109.23,
                                        h: 18,
                                        t: "Újratöltés ezzel: %@"
                                    }],
                                    rn: [{
                                        w: 120.95,
                                        h: 18,
                                        t: "Kölcsönzés ezzel: %@"
                                    }],
                                    se: [{
                                        w: 66.75,
                                        h: 18,
                                        t: "%@ beállítása"
                                    }],
                                    sb: [{
                                        w: 109.69,
                                        h: 18,
                                        t: "Előfizetés ezzel: %@"
                                    }],
                                    sp: [{
                                        w: 118.05,
                                        h: 18,
                                        t: "Támogatás ezzel: %@"
                                    }],
                                    ti: [{
                                        w: 108.28,
                                        h: 18,
                                        t: "Borravaló ezzel: %@"
                                    }],
                                    to: [{
                                        w: 101.67,
                                        h: 18,
                                        t: "Feltöltés ezzel: %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "ru-RU": {
                                l: {
                                    a: [{
                                        w: 134.39,
                                        h: 18,
                                        t: "Добавить деньги с %@"
                                    }],
                                    bo: [{
                                        w: 77.81,
                                        h: 18,
                                        t: "Заказать с %@"
                                    }],
                                    bu: [{
                                        w: 63.44,
                                        h: 18,
                                        t: "Купить с %@"
                                    }],
                                    ch: [{
                                        w: 81.38,
                                        h: 18,
                                        t: "Оплатить с %@"
                                    }],
                                    ci: [{
                                        w: 103.5,
                                        h: 18,
                                        t: "Продолжить с %@"
                                    }],
                                    co: [{
                                        w: 89.8,
                                        h: 18,
                                        t: "Отправить с %@"
                                    }],
                                    d: [{
                                        w: 116.05,
                                        h: 18,
                                        t: "Пожертвовать с %@"
                                    }],
                                    o: [{
                                        w: 77.81,
                                        h: 18,
                                        t: "Заказать с %@"
                                    }],
                                    pa: [{
                                        w: 81.38,
                                        h: 18,
                                        t: "Оплатить с %@"
                                    }],
                                    rl: [{
                                        w: 90.94,
                                        h: 18,
                                        t: "Пополнить с %@"
                                    }],
                                    rn: [{
                                        w: 98.55,
                                        h: 18,
                                        t: "Арендовать с %@"
                                    }],
                                    se: [{
                                        w: 78.13,
                                        h: 18,
                                        t: "Настроить %@"
                                    }],
                                    sb: [{
                                        w: 106.73,
                                        h: 18,
                                        t: "Подписаться с %@"
                                    }],
                                    sp: [{
                                        w: 103.39,
                                        h: 18,
                                        t: "Поддержать с %@"
                                    }],
                                    ti: [{
                                        w: 144.09,
                                        h: 18,
                                        t: "Отправить чаевые с %@"
                                    }],
                                    to: [{
                                        w: 90.94,
                                        h: 18,
                                        t: "Пополнить с %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "ko-KR": {
                                l: {
                                    a: [{
                                        w: 44.6,
                                        h: 17,
                                        t: "%@ 로 충전"
                                    }],
                                    bo: [{
                                        w: 44.6,
                                        h: 17,
                                        t: "%@ 로 예약"
                                    }],
                                    bu: [{
                                        w: 44.6,
                                        h: 17,
                                        t: "%@ 로 구입"
                                    }],
                                    ch: [{
                                        w: 44.6,
                                        h: 17,
                                        t: "%@ 로 결제"
                                    }],
                                    ci: [{
                                        w: 73.04,
                                        h: 17,
                                        t: "%@ 로 계속 진행"
                                    }],
                                    co: [{
                                        w: 69.16,
                                        h: 17,
                                        t: "%@ 로 참여하기"
                                    }],
                                    d: [{
                                        w: 69.16,
                                        h: 17,
                                        t: "%@ 로 기부하기"
                                    }],
                                    o: [{
                                        w: 44.6,
                                        h: 17,
                                        t: "%@ 로 주문"
                                    }],
                                    pa: [{
                                        w: 44.6,
                                        h: 17,
                                        t: "%@ 로 지불"
                                    }],
                                    rl: [{
                                        w: 44.6,
                                        h: 17,
                                        t: "%@ 로 충전"
                                    }],
                                    rn: [{
                                        w: 44.6,
                                        h: 17,
                                        t: "%@ 로 대여"
                                    }],
                                    se: [{
                                        w: 28.45,
                                        h: 17,
                                        t: "%@ 설정"
                                    }],
                                    sb: [{
                                        w: 44.6,
                                        h: 17,
                                        t: "%@ 로 구독"
                                    }],
                                    sp: [{
                                        w: 69.16,
                                        h: 17,
                                        t: "%@ 로 지원하기"
                                    }],
                                    ti: [{
                                        w: 60.76,
                                        h: 17,
                                        t: "%@ 로 팁 지불"
                                    }],
                                    to: [{
                                        w: 104.43,
                                        h: 17,
                                        t: "%@ 로 충전(top-up)"
                                    }]
                                },
                                s: "14.2px",
                                w: 600,
                                ls: "1px"
                            },
                            "pt-PT": {
                                l: {
                                    a: [{
                                        w: 155.92,
                                        h: 18,
                                        t: "Adicionar dinheiro com %@"
                                    }],
                                    bo: [{
                                        w: 94.23,
                                        h: 18,
                                        t: "Reservar com %@"
                                    }],
                                    bu: [{
                                        w: 93.73,
                                        h: 18,
                                        t: "Comprar com %@"
                                    }],
                                    ch: [{
                                        w: 73.58,
                                        h: 18,
                                        t: "Pagar com %@"
                                    }],
                                    ci: [{
                                        w: 101.13,
                                        h: 18,
                                        t: "Continuar com %@"
                                    }],
                                    co: [{
                                        w: 102.14,
                                        h: 18,
                                        t: "Contribuir com %@"
                                    }],
                                    d: [{
                                        w: 156.5,
                                        h: 18,
                                        t: "Fazer uma doação com %@"
                                    }],
                                    o: [{
                                        w: 119.66,
                                        h: 18,
                                        t: "Encomendar com %@"
                                    }],
                                    pa: [{
                                        w: 73.58,
                                        h: 18,
                                        t: "Pagar com %@"
                                    }],
                                    rl: [{
                                        w: 108.69,
                                        h: 18,
                                        t: "Recarregar com %@"
                                    }],
                                    rn: [{
                                        w: 78.98,
                                        h: 18,
                                        t: "Alugar com %@"
                                    }],
                                    se: [{
                                        w: 74.22,
                                        h: 18,
                                        t: "Configurar %@"
                                    }],
                                    sb: [{
                                        w: 85.17,
                                        h: 18,
                                        t: "Assinar com %@"
                                    }],
                                    sp: [{
                                        w: 78.98,
                                        h: 18,
                                        t: "Apoiar com %@"
                                    }],
                                    ti: [{
                                        w: 108.94,
                                        h: 18,
                                        t: "Dar gorjeta com %@"
                                    }],
                                    to: [{
                                        w: 93.81,
                                        h: 18,
                                        t: "Carregar com %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "hi-IN": {
                                l: {
                                    a: [{
                                        w: 49.42,
                                        h: 14.28,
                                        t: "%@ से धन जोड़ें"
                                    }],
                                    bo: [{
                                        w: 47.23,
                                        h: 14.89,
                                        t: "%@ से बुक करें"
                                    }],
                                    bu: [{
                                        w: 38.5,
                                        h: 14.42,
                                        t: "%@ से ख़रीदें"
                                    }],
                                    ch: [{
                                        w: 96.38,
                                        h: 14.28,
                                        t: "%@ के साथ चेकआउट करें"
                                    }],
                                    ci: [{
                                        w: 75.66,
                                        h: 14.42,
                                        t: "%@ के साथ जारी रखें"
                                    }],
                                    co: [{
                                        w: 65.02,
                                        h: 14.28,
                                        t: "%@ से योगदान करें"
                                    }],
                                    d: [{
                                        w: 38.94,
                                        h: 14.28,
                                        t: "%@ से दान दें"
                                    }],
                                    o: [{
                                        w: 55.03,
                                        h: 14.34,
                                        t: "%@ से ऑर्डर करें"
                                    }],
                                    pa: [{
                                        w: 61.91,
                                        h: 14.89,
                                        t: "%@ से भुगतान करें"
                                    }],
                                    rl: [{
                                        w: 58.19,
                                        h: 14.42,
                                        t: "%@ से रीलोड करें"
                                    }],
                                    rn: [{
                                        w: 67.59,
                                        h: 14.42,
                                        t: "%@ से किराए पर लें"
                                    }],
                                    se: [{
                                        w: 50.67,
                                        h: 14.28,
                                        t: "%@ सेटअप करें"
                                    }],
                                    sb: [{
                                        w: 102.09,
                                        h: 14.28,
                                        t: "%@ के साथ सब्सक्राइब करें"
                                    }],
                                    sp: [{
                                        w: 61.06,
                                        h: 14.34,
                                        t: "%@ से समर्थन करें"
                                    }],
                                    ti: [{
                                        w: 39.22,
                                        h: 14.42,
                                        t: "%@ से टिप दें"
                                    }],
                                    to: [{
                                        w: 65.84,
                                        h: 14.28,
                                        t: "%@ से टॉप अप करें"
                                    }]
                                },
                                s: "12px",
                                w: 600
                            },
                            "sk-SK": {
                                l: {
                                    a: [{
                                        w: 124.89,
                                        h: 18,
                                        t: "Pridať peniaze cez %@"
                                    }],
                                    bo: [{
                                        w: 104.45,
                                        h: 18,
                                        t: "Rezervovať cez %@"
                                    }],
                                    bu: [{
                                        w: 65.42,
                                        h: 18,
                                        t: "Kúpiť cez %@"
                                    }],
                                    ch: [{
                                        w: 81.42,
                                        h: 18,
                                        t: "Zaplatiť cez %@"
                                    }],
                                    ci: [{
                                        w: 100.61,
                                        h: 18,
                                        t: "Pokračujte cez %@"
                                    }],
                                    co: [{
                                        w: 80.69,
                                        h: 18,
                                        t: "Prispieť cez %@"
                                    }],
                                    d: [{
                                        w: 80.69,
                                        h: 18,
                                        t: "Prispieť cez %@"
                                    }],
                                    o: [{
                                        w: 92.02,
                                        h: 18,
                                        t: "Objednať cez %@"
                                    }],
                                    pa: [{
                                        w: 81.42,
                                        h: 18,
                                        t: "Zaplatiť cez %@"
                                    }],
                                    rl: [{
                                        w: 66.38,
                                        h: 18,
                                        t: "Dobiť cez %@"
                                    }],
                                    rn: [{
                                        w: 79.02,
                                        h: 18,
                                        t: "Požičať cez %@"
                                    }],
                                    se: [{
                                        w: 58.52,
                                        h: 18,
                                        t: "Nastaviť %@"
                                    }],
                                    sb: [{
                                        w: 93.55,
                                        h: 18,
                                        t: "Odoberať cez %@"
                                    }],
                                    sp: [{
                                        w: 86.86,
                                        h: 18,
                                        t: "Podporiť cez %@"
                                    }],
                                    ti: [{
                                        w: 119.8,
                                        h: 18,
                                        t: "Dať sprepitné cez %@"
                                    }],
                                    to: [{
                                        w: 66.38,
                                        h: 18,
                                        t: "Dobiť cez %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            },
                            "ms-MY": {
                                l: {
                                    a: [{
                                        w: 151.3,
                                        h: 18,
                                        t: "Tambah Wang dengan %@"
                                    }],
                                    bo: [{
                                        w: 109.78,
                                        h: 18,
                                        t: "Tempah dengan %@"
                                    }],
                                    bu: [{
                                        w: 81.23,
                                        h: 18,
                                        t: "Beli dengan %@"
                                    }],
                                    ch: [{
                                        w: 94.91,
                                        h: 18,
                                        t: "Bayar dengan %@"
                                    }],
                                    ci: [{
                                        w: 117.09,
                                        h: 18,
                                        t: "Teruskan dengan %@"
                                    }],
                                    co: [{
                                        w: 144.94,
                                        h: 18,
                                        t: "Sumbangkan dengan %@"
                                    }],
                                    d: [{
                                        w: 101.03,
                                        h: 18,
                                        t: "Derma dengan %@"
                                    }],
                                    o: [{
                                        w: 97.41,
                                        h: 18,
                                        t: "Pesan dengan %@"
                                    }],
                                    pa: [{
                                        w: 94.91,
                                        h: 18,
                                        t: "Bayar dengan %@"
                                    }],
                                    rl: [{
                                        w: 122.72,
                                        h: 18,
                                        t: "Isi semula dengan %@"
                                    }],
                                    rn: [{
                                        w: 93.31,
                                        h: 18,
                                        t: "Sewa dengan %@"
                                    }],
                                    se: [{
                                        w: 64.88,
                                        h: 18,
                                        t: "Sediakan %@"
                                    }],
                                    sb: [{
                                        w: 114.98,
                                        h: 18,
                                        t: "Langgan dengan %@"
                                    }],
                                    sp: [{
                                        w: 107.3,
                                        h: 18,
                                        t: "Sokong dengan %@"
                                    }],
                                    ti: [{
                                        w: 127.48,
                                        h: 18,
                                        t: "Berikan tip dengan %@"
                                    }],
                                    to: [{
                                        w: 142.14,
                                        h: 18,
                                        t: "Tambah Nilai dengan %@"
                                    }]
                                },
                                s: "15px",
                                ls: "0.22px"
                            }
                        },
                        ne = [],
                        ae = "ResizeObserver loop completed with undelivered notifications.";
                    ! function(t) {
                        t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
                    }(te || (te = {}));
                    var oe, re, ie = function(t) {
                            return Object.freeze(t)
                        },
                        se = function(t, e) {
                            this.inlineSize = t, this.blockSize = e, ie(this)
                        },
                        le = function() {
                            function t(t, e, n, a) {
                                return this.x = t, this.y = e, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, ie(this)
                            }
                            return t.prototype.toJSON = function() {
                                var t = this;
                                return {
                                    x: t.x,
                                    y: t.y,
                                    top: t.top,
                                    right: t.right,
                                    bottom: t.bottom,
                                    left: t.left,
                                    width: t.width,
                                    height: t.height
                                }
                            }, t.fromRect = function(e) {
                                return new t(e.x, e.y, e.width, e.height)
                            }, t
                        }(),
                        ce = function(t) {
                            return t instanceof SVGElement && "getBBox" in t
                        },
                        he = function(t) {
                            if (ce(t)) {
                                var e = t.getBBox(),
                                    n = e.width,
                                    a = e.height;
                                return !n && !a
                            }
                            var o = t,
                                r = o.offsetWidth,
                                i = o.offsetHeight;
                            return !(r || i || t.getClientRects().length)
                        },
                        de = function(t) {
                            var e, n;
                            if (t instanceof Element) return !0;
                            var a = null === (n = null === (e = t) || void 0 === e ? void 0 : e.ownerDocument) || void 0 === n ? void 0 : n.defaultView;
                            return !!(a && t instanceof a.Element)
                        },
                        pe = "undefined" != typeof window ? window : {},
                        ue = new WeakMap,
                        we = /auto|scroll/,
                        me = /^tb|vertical/,
                        fe = /msie|trident/i.test(pe.navigator && pe.navigator.userAgent),
                        ge = function(t) {
                            return parseFloat(t || "0")
                        },
                        ve = function(t, e, n) {
                            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = !1), new se((n ? e : t) || 0, (n ? t : e) || 0)
                        },
                        ye = ie({
                            devicePixelContentBoxSize: ve(),
                            borderBoxSize: ve(),
                            contentBoxSize: ve(),
                            contentRect: new le(0, 0, 0, 0)
                        }),
                        be = function(t, e) {
                            if (void 0 === e && (e = !1), ue.has(t) && !e) return ue.get(t);
                            if (he(t)) return ue.set(t, ye), ye;
                            var n = getComputedStyle(t),
                                a = ce(t) && t.ownerSVGElement && t.getBBox(),
                                o = !fe && "border-box" === n.boxSizing,
                                r = me.test(n.writingMode || ""),
                                i = !a && we.test(n.overflowY || ""),
                                s = !a && we.test(n.overflowX || ""),
                                l = a ? 0 : ge(n.paddingTop),
                                c = a ? 0 : ge(n.paddingRight),
                                h = a ? 0 : ge(n.paddingBottom),
                                d = a ? 0 : ge(n.paddingLeft),
                                p = a ? 0 : ge(n.borderTopWidth),
                                u = a ? 0 : ge(n.borderRightWidth),
                                w = a ? 0 : ge(n.borderBottomWidth),
                                m = d + c,
                                f = l + h,
                                g = (a ? 0 : ge(n.borderLeftWidth)) + u,
                                v = p + w,
                                y = s ? t.offsetHeight - v - t.clientHeight : 0,
                                b = i ? t.offsetWidth - g - t.clientWidth : 0,
                                $ = o ? m + g : 0,
                                C = o ? f + v : 0,
                                L = a ? a.width : ge(n.width) - $ - b,
                                x = a ? a.height : ge(n.height) - C - y,
                                k = L + m + b + g,
                                S = x + f + y + v,
                                M = ie({
                                    devicePixelContentBoxSize: ve(Math.round(L * devicePixelRatio), Math.round(x * devicePixelRatio), r),
                                    borderBoxSize: ve(k, S, r),
                                    contentBoxSize: ve(L, x, r),
                                    contentRect: new le(d, l, L, x)
                                });
                            return ue.set(t, M), M
                        },
                        $e = function(t, e, n) {
                            var a = be(t, n),
                                o = a.borderBoxSize,
                                r = a.contentBoxSize,
                                i = a.devicePixelContentBoxSize;
                            switch (e) {
                                case te.DEVICE_PIXEL_CONTENT_BOX:
                                    return i;
                                case te.BORDER_BOX:
                                    return o;
                                default:
                                    return r
                            }
                        },
                        Ce = function(t) {
                            var e = be(t);
                            this.target = t, this.contentRect = e.contentRect, this.borderBoxSize = ie([e.borderBoxSize]), this.contentBoxSize = ie([e.contentBoxSize]), this.devicePixelContentBoxSize = ie([e.devicePixelContentBoxSize])
                        },
                        Le = function(t) {
                            if (he(t)) return 1 / 0;
                            for (var e = 0, n = t.parentNode; n;) e += 1, n = n.parentNode;
                            return e
                        },
                        xe = function() {
                            var t = 1 / 0,
                                e = [];
                            ne.forEach((function(n) {
                                if (0 !== n.activeTargets.length) {
                                    var a = [];
                                    n.activeTargets.forEach((function(e) {
                                        var n = new Ce(e.target),
                                            o = Le(e.target);
                                        a.push(n), e.lastReportedSize = $e(e.target, e.observedBox), o < t && (t = o)
                                    })), e.push((function() {
                                        n.callback.call(n.observer, a, n.observer)
                                    })), n.activeTargets.splice(0, n.activeTargets.length)
                                }
                            }));
                            for (var n = 0, a = e; n < a.length; n++) {
                                (0, a[n])()
                            }
                            return t
                        },
                        ke = function(t) {
                            ne.forEach((function(e) {
                                e.activeTargets.splice(0, e.activeTargets.length), e.skippedTargets.splice(0, e.skippedTargets.length), e.observationTargets.forEach((function(n) {
                                    n.isActive() && (Le(n.target) > t ? e.activeTargets.push(n) : e.skippedTargets.push(n))
                                }))
                            }))
                        },
                        Se = function() {
                            var t, e = 0;
                            for (ke(e); ne.some((function(t) {
                                    return t.activeTargets.length > 0
                                }));) e = xe(), ke(e);
                            return ne.some((function(t) {
                                return t.skippedTargets.length > 0
                            })) && ("function" == typeof ErrorEvent ? t = new ErrorEvent("error", {
                                message: ae
                            }) : ((t = document.createEvent("Event")).initEvent("error", !1, !1), t.message = ae), window.dispatchEvent(t)), e > 0
                        },
                        Me = [],
                        Ae = function(t) {
                            if (!oe) {
                                var e = 0,
                                    n = document.createTextNode("");
                                new MutationObserver((function() {
                                    return Me.splice(0).forEach((function(t) {
                                        return t()
                                    }))
                                })).observe(n, {
                                    characterData: !0
                                }), oe = function() {
                                    n.textContent = "" + (e ? e-- : e++)
                                }
                            }
                            Me.push(t), oe()
                        },
                        Te = 0,
                        Ee = {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0
                        },
                        ze = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
                        Pe = function(t) {
                            return void 0 === t && (t = 0), Date.now() + t
                        },
                        Ne = !1,
                        Re = new(function() {
                            function t() {
                                var t = this;
                                this.stopped = !0, this.listener = function() {
                                    return t.schedule()
                                }
                            }
                            return t.prototype.run = function(t) {
                                var e = this;
                                if (void 0 === t && (t = 250), !Ne) {
                                    Ne = !0;
                                    var n, a = Pe(t);
                                    n = function() {
                                        var n = !1;
                                        try {
                                            n = Se()
                                        } finally {
                                            if (Ne = !1, t = a - Pe(), !Te) return;
                                            n ? e.run(1e3) : t > 0 ? e.run(t) : e.start()
                                        }
                                    }, Ae((function() {
                                        requestAnimationFrame(n)
                                    }))
                                }
                            }, t.prototype.schedule = function() {
                                this.stop(), this.run()
                            }, t.prototype.observe = function() {
                                var t = this,
                                    e = function() {
                                        return t.observer && t.observer.observe(document.body, Ee)
                                    };
                                document.body ? e() : pe.addEventListener("DOMContentLoaded", e)
                            }, t.prototype.start = function() {
                                var t = this;
                                this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), ze.forEach((function(e) {
                                    return pe.addEventListener(e, t.listener, !0)
                                })))
                            }, t.prototype.stop = function() {
                                var t = this;
                                this.stopped || (this.observer && this.observer.disconnect(), ze.forEach((function(e) {
                                    return pe.removeEventListener(e, t.listener, !0)
                                })), this.stopped = !0)
                            }, t
                        }()),
                        Be = function(t) {
                            !Te && t > 0 && Re.start(), !(Te += t) && Re.stop()
                        },
                        Oe = function() {
                            function t(t, e) {
                                this.target = t, this.observedBox = e || te.CONTENT_BOX, this.lastReportedSize = {
                                    inlineSize: 0,
                                    blockSize: 0
                                }
                            }
                            return t.prototype.isActive = function() {
                                var t, e = $e(this.target, this.observedBox, !0);
                                return t = this.target, ce(t) || function(t) {
                                    switch (t.tagName) {
                                        case "INPUT":
                                            if ("image" !== t.type) break;
                                        case "VIDEO":
                                        case "AUDIO":
                                        case "EMBED":
                                        case "OBJECT":
                                        case "CANVAS":
                                        case "IFRAME":
                                        case "IMG":
                                            return !0
                                    }
                                    return !1
                                }(t) || "inline" !== getComputedStyle(t).display || (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
                            }, t
                        }(),
                        je = function(t, e) {
                            this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = e
                        },
                        De = new WeakMap,
                        Ie = function(t, e) {
                            for (var n = 0; n < t.length; n += 1)
                                if (t[n].target === e) return n;
                            return -1
                        },
                        Fe = function() {
                            function t() {}
                            return t.connect = function(t, e) {
                                var n = new je(t, e);
                                De.set(t, n)
                            }, t.observe = function(t, e, n) {
                                var a = De.get(t),
                                    o = 0 === a.observationTargets.length;
                                Ie(a.observationTargets, e) < 0 && (o && ne.push(a), a.observationTargets.push(new Oe(e, n && n.box)), Be(1), Re.schedule())
                            }, t.unobserve = function(t, e) {
                                var n = De.get(t),
                                    a = Ie(n.observationTargets, e),
                                    o = 1 === n.observationTargets.length;
                                a >= 0 && (o && ne.splice(ne.indexOf(n), 1), n.observationTargets.splice(a, 1), Be(-1))
                            }, t.disconnect = function(t) {
                                var e = this,
                                    n = De.get(t);
                                n.observationTargets.slice().forEach((function(n) {
                                    return e.unobserve(t, n.target)
                                })), n.activeTargets.splice(0, n.activeTargets.length)
                            }, t
                        }(),
                        _e = function() {
                            function t(t) {
                                if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                                if ("function" != typeof t) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                                Fe.connect(this, t)
                            }
                            return t.prototype.observe = function(t, e) {
                                if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                                if (!de(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                                Fe.observe(this, t, e)
                            }, t.prototype.unobserve = function(t) {
                                if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                                if (!de(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                                Fe.unobserve(this, t)
                            }, t.prototype.disconnect = function() {
                                Fe.disconnect(this)
                            }, t.toString = function() {
                                return "function ResizeObserver () { [polyfill code] }"
                            }, t
                        }();
                    re = Dt(document.documentElement), It() || Ft(re) || _t(re);
                    var Ze = It(),
                        We = class extends HTMLElement {
                            constructor() {
                                super(), this.__registerHost(), Object(e.b)(this), this.logoOnly = !1, this.fontLoading = !Ze, this.buttonStyle = "black", this.type = "buy"
                            }
                            checkStyle(t, e) {
                                var n = He(t, e);
                                n !== t && this.element.setAttribute("buttonstyle", n)
                            }
                            checkType(t, e) {
                                var n = Ue(t, e);
                                n !== t && this.element.setAttribute("type", n), this.metadata && (this.minButtonWidth = this.getMinButtonWidth(this.metadata))
                            }
                            verifyLocaleAndSwapMetadata(t) {
                                this._locale = this.adjustLocaleAndSetLangIfNecessary(t), Ze || this.loadFontIfNecessary(this._locale), this.metadata = ee[this._locale], this.minButtonWidth = this.getMinButtonWidth(this.metadata)
                            }
                            componentWillLoad() {
                                var t = this;
                                return l((function*() {
                                    var e = He(t.buttonStyle);
                                    e !== t.buttonStyle && t.element.setAttribute("buttonstyle", e);
                                    var n = Ue(t.type);
                                    n !== t.type && t.element.setAttribute("type", n), t.verifyLocaleAndSwapMetadata(t.locale)
                                }))()
                            }
                            componentDidRender() {
                                this.validateFontSize(this.container.offsetWidth)
                            }
                            componentDidLoad() {
                                new _e((t, e) => {
                                    for (var n of t) {
                                        var {
                                            width: a
                                        } = n.contentRect;
                                        if ("plain" === this.type) return;
                                        this.validateFontSize(a)
                                    }
                                }).observe(this.container), this.element.addEventListener("click", t => t.stopPropagation())
                            }
                            validateFontSize(t) {
                                var e, n, a, o;
                                "plain" !== this.type && (t < this.minButtonWidth ? (null === (e = this.container.querySelector("#svg-text")) || void 0 === e || e.classList.add("hidden"), null === (n = this.container.querySelector("#svg-logo")) || void 0 === n || n.classList.remove("hidden")) : (null === (a = this.container.querySelector("#svg-text")) || void 0 === a || a.classList.remove("hidden"), null === (o = this.container.querySelector("#svg-logo")) || void 0 === o || o.classList.add("hidden")))
                            }
                            getStyle(t) {
                                return ":host(apple-pay-button){display:inline-block;width:var(--apple-pay-button-width, auto);" + "min-width:".concat("plain" === t ? "100px" : "140px", ";") + "min-height:30px;" + (p() ? "" : "display:none;") + "}"
                            }
                            loadFontIfNecessary(t) {
                                try {
                                    var e = document.fonts.check("15px apple-pay-btn-".concat(t)),
                                        n = Ft(t);
                                    n || _t(t), this.fontLoading = !n || !e, this.fontLoading && document.fonts.ready.then(() => setTimeout(() => {
                                        this.fontLoading = !1
                                    }, 0))
                                } catch (t) {
                                    this.fontLoading = !1
                                }
                            }
                            getMinButtonWidth(t) {
                                var e = Ue(this.type),
                                    {
                                        width: n,
                                        height: a
                                    } = function(t, e) {
                                        return "plain" === e ? {
                                            width: 35,
                                            height: 15
                                        } : {
                                            width: Yt({
                                                metadata: t,
                                                buttonType: e
                                            }).width,
                                            height: 18
                                        }
                                    }(t, e);
                                return 15 * n / a
                            }
                            adjustLocaleAndSetLangIfNecessary(t) {
                                var e = function(t) {
                                    if (t) {
                                        var e = jt(Bt(t));
                                        if (e) return e
                                    }
                                }(t);
                                if (e) {
                                    e !== t && this.element.setAttribute("locale", e);
                                    var n = e.replace("_", "-");
                                    this.element.setAttribute("lang", n)
                                } else this.element.removeAttribute("locale"), this.element.removeAttribute("lang"), e = Dt(this.element);
                                return e
                            }
                            render() {
                                var t = He(this.buttonStyle),
                                    n = Ue(this.type);
                                return Object(e.c)(e.a, {
                                    "aria-hidden": p() ? void 0 : "true"
                                }, Object(e.c)("div", {
                                    class: "apple-pay-btn-wrapper ".concat(n, " ").concat(this._locale),
                                    style: {
                                        visibility: this.fontLoading ? "hidden" : "visible"
                                    }
                                }, Object(e.c)("style", null, this.getStyle(n)), Object(e.c)("button", {
                                    "aria-label": Kt(this.metadata, n),
                                    class: "apple-pay-btn ".concat(t)
                                }, Object(e.c)("span", {
                                    ref: t => this.container = t,
                                    innerHTML: Qt({
                                        metadata: this.metadata,
                                        locale: this._locale,
                                        buttonStyle: t,
                                        buttonType: n
                                    })
                                }))))
                            }
                            static get assetsDirs() {
                                return ["assets/1.0.0"]
                            }
                            get element() {
                                return this
                            }
                            static get watchers() {
                                return {
                                    buttonStyle: ["checkStyle"],
                                    type: ["checkType"],
                                    locale: ["verifyLocaleAndSwapMetadata"]
                                }
                            }
                            static get style() {
                                return '.apple-pay-btn-wrapper{width:100%;min-height:30px;height:var(--apple-pay-button-height, 30px)}.apple-pay-btn-wrapper.plain{min-width:100px}.plain .apple-pay-btn{--apple-pay-button-width-default:100px}.apple-pay-btn-wrapper .apple-pay-btn{background-color:black;border:none;color:white;cursor:pointer;font-synthesis:none;-ms-flex-pack:center;justify-content:center;position:relative;margin:0;-webkit-box-sizing:var(--apple-pay-button-box-sizing, content-box);box-sizing:var(--apple-pay-button-box-sizing, content-box);min-height:30px;height:calc(var(--apple-pay-button-height, 30px));min-width:var(--apple-pay-button-width-default, 140px);width:100%;border-radius:var(--apple-pay-button-border-radius, 4px);padding:var(--apple-pay-button-padding, 0);-moz-font-feature-settings:kern;-moz-osx-font-smoothing:"grayscale";-webkit-font-smoothing:antialiased}.apple-pay-btn-wrapper .apple-pay-btn.white,.apple-pay-btn-wrapper .apple-pay-btn.white-outline{background-color:white;color:black}.apple-pay-btn-wrapper .apple-pay-btn.white-outline{border:1px solid black}.apple-pay-btn-wrapper .apple-pay-btn>span{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%}.apple-pay-btn-wrapper .apple-pay-btn>span>svg{max-width:100%;min-height:24px;min-width:50%;height:100%;-webkit-transform:translateZ(0) scale(1, 1);transform:translateZ(0) scale(1, 1)}.apple-pay-btn-wrapper .apple-pay-btn #svg-text.hidden,.apple-pay-btn-wrapper .apple-pay-btn #svg-logo.hidden{display:none}'
                            }
                        };

                    function He(t, e) {
                        var n = ["black", "white-outline", "white"],
                            a = t.trim();
                        return n.includes(a) ? a : e && n.includes(e) ? e : "black"
                    }

                    function Ue(t, e) {
                        var n = t.trim();
                        return Ut(n) ? n : e && Ut(e) ? e : "buy"
                    }
                    var qe;
                    "undefined" != typeof customElements && [Object(e.d)(We, [1, "apple-pay-button", {
                        buttonStyle: [513, "buttonstyle"],
                        type: [1537],
                        locale: [1025],
                        logoOnly: [32],
                        fontLoading: [32]
                    }])].forEach(t => {
                        customElements.get(t.is) || customElements.define(t.is, t, qe)
                    })
                }
                n.p = new URL(document.currentScript.src.slice(0, document.currentScript.src.lastIndexOf("/")));
                var h = !0;
                try {
                    h = globalThis
                } catch (t) {
                    h = !1
                }
                window.customElements && window.fetch && Symbol("desc").description && h ? c() : function(t, e, n) {
                    var a = document.createElement("script");
                    a.src = t, a.onload = e, a.onreadystatechange = e, n.appendChild(a)
                }(n.p + "/polyfills.js", c, document.body)
            }.call(this, n(44))
    },
    104: function(t, e) {
        function n(t) {
            return Promise.resolve().then((function() {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }))
        }
        n.keys = function() {
            return []
        }, n.resolve = n, t.exports = n, n.id = 104
    },
    14: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return Yt
        })), n.d(e, "b", (function() {
            return qe
        })), n.d(e, "c", (function() {
            return Jt
        })), n.d(e, "d", (function() {
            return Ue
        }));
        var a, o, r, i, s = !1,
            l = !0,
            c = !1,
            h = !0,
            d = !0,
            p = !0,
            u = !0,
            w = !0,
            m = !0,
            f = !0,
            g = !0,
            v = !0,
            y = !0,
            b = !0,
            $ = !0,
            C = !1,
            L = !0,
            x = !0,
            k = !0,
            S = !0,
            M = !0,
            A = !0,
            T = !0,
            E = !0,
            z = !0,
            P = !0,
            N = !0,
            R = !0,
            B = !0,
            O = !0,
            j = !0,
            D = !0,
            I = !0,
            F = !0,
            _ = !0,
            Z = !0,
            W = !0,
            H = !0,
            U = !0,
            q = !0,
            V = !0,
            K = !0,
            J = !0,
            G = !0,
            Y = !1,
            X = !1,
            Q = !1,
            tt = !1,
            et = !1,
            nt = !1,
            at = !1,
            ot = !1,
            rt = !1,
            it = !0,
            st = !1,
            lt = !0,
            ct = !1,
            ht = !0,
            dt = !0,
            pt = !0,
            ut = !1,
            wt = !0,
            mt = !0,
            ft = !1,
            gt = !1,
            vt = !1,
            yt = !0;

        function bt(t, e, n, a, o, r, i) {
            try {
                var s = t[r](i),
                    l = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(l) : Promise.resolve(l).then(a, o)
        }

        function $t(t) {
            return function() {
                var e = this,
                    n = arguments;
                return new Promise((function(a, o) {
                    var r = t.apply(e, n);

                    function i(t) {
                        bt(r, a, o, i, s, "next", t)
                    }

                    function s(t) {
                        bt(r, a, o, i, s, "throw", t)
                    }
                    i(void 0)
                }))
            }
        }
        var Ct = 0,
            Lt = !1,
            xt = !1,
            kt = !1,
            St = !1,
            Mt = 0,
            At = !1,
            Tt = "undefined" != typeof window ? window : {},
            Et = (ut && Tt.CSS, Tt.document || {
                head: {}
            }),
            zt = (Tt.HTMLElement, {
                $flags$: 0,
                $resourcesUrl$: "",
                jmp: t => t(),
                raf: t => requestAnimationFrame(t),
                ael: (t, e, n, a) => t.addEventListener(e, n, a),
                rel: (t, e, n, a) => t.removeEventListener(e, n, a),
                ce: (t, e) => new CustomEvent(t, e)
            }),
            Pt = !ct || !z || (() => (Et.head.attachShadow + "").indexOf("[native") > -1)(),
            Nt = (() => {
                var t = !1;
                try {
                    Et.addEventListener("e", null, Object.defineProperty({}, "passive", {
                        get() {
                            t = !0
                        }
                    }))
                } catch (t) {}
                return t
            })(),
            Rt = !!wt && (() => {
                try {
                    return new CSSStyleSheet, "function" == typeof(new CSSStyleSheet).replace
                } catch (t) {}
                return !1
            })(),
            Bt = (t, e, n, a) => {
                v && n && (C && (n = a ? n.filter(([t]) => 32 & t) : n.filter(([t]) => !(32 & t))), n.map(([n, a, o]) => {
                    var r = L ? jt(t, n) : t,
                        i = Ot(e, o),
                        s = Dt(n);
                    zt.ael(r, a, i, s), (e.$rmListeners$ = e.$rmListeners$ || []).push(() => zt.rel(r, a, i, s))
                }))
            },
            Ot = (t, e) => n => {
                try {
                    ot ? 256 & t.$flags$ ? t.$lazyInstance$[e](n) : (t.$queuedListeners$ = t.$queuedListeners$ || []).push([e, n]) : t.$hostElement$[e](n)
                } catch (t) {
                    Ye(t)
                }
            },
            jt = (t, e) => b && 4 & e ? Et : y && 8 & e ? Tt : $ && 16 & e ? Et.body : C && 32 & e ? t.parentElement : t,
            Dt = t => Nt ? {
                passive: 0 != (1 & t),
                capture: 0 != (2 & t)
            } : 0 != (2 & t),
            It = "http://www.w3.org/1999/xlink",
            Ft = (t, e = "") => {
                if (rt && performance.mark) {
                    var n = "st:".concat(t, ":").concat(e, ":").concat(Ct++);
                    return performance.mark(n), () => performance.measure("[Stencil] ".concat(t, "() <").concat(e, ">"), n)
                }
                return () => {}
            },
            _t = new WeakMap,
            Zt = (t, e, n) => {
                var a = an.get(t);
                Rt && n ? (a = a || new CSSStyleSheet).replace(e) : a = e, an.set(t, a)
            },
            Wt = (t, e, n, a) => {
                var o = Ut(e, n),
                    r = an.get(o);
                if (!yt) return o;
                if (t = 11 === t.nodeType ? t : Et, r)
                    if ("string" == typeof r) {
                        t = t.head || t;
                        var i, s = _t.get(t);
                        if (s || _t.set(t, s = new Set), !s.has(o)) {
                            if (nt && t.host && (i = t.querySelector("[".concat("sty-id", '="').concat(o, '"]')))) i.innerHTML = r;
                            else {
                                if (ut && zt.$cssShim$) {
                                    var l = (i = zt.$cssShim$.createHostStyle(a, o, r, !!(10 & e.$flags$)))["s-sc"];
                                    l && (o = l, s = null)
                                } else(i = Et.createElement("style")).innerHTML = r;
                                (et || Y) && i.setAttribute("sty-id", o), t.insertBefore(i, t.querySelector("link"))
                            }
                            s && s.add(o)
                        }
                    } else wt && !t.adoptedStyleSheets.includes(r) && (t.adoptedStyleSheets = [...t.adoptedStyleSheets, r]);
                return o
            },
            Ht = t => {
                var e = t.$cmpMeta$,
                    n = t.$hostElement$,
                    a = e.$flags$,
                    o = Ft("attachStyles", e.$tagName$),
                    r = Wt(z && Pt && n.shadowRoot ? n.shadowRoot : n.getRootNode(), e, t.$modeName$, n);
                (z || E) && N && 10 & a && (n["s-sc"] = r, n.classList.add(r + "-h"), E && 2 & a && n.classList.add(r + "-s")), o()
            },
            Ut = (t, e) => "sc-" + (S && e && 32 & t.$flags$ ? t.$tagName$ + "-" + e : t.$tagName$),
            qt = t => on.map(e => e(t)).find(t => !!t),
            Vt = {},
            Kt = t => "object" === (t = typeof t) || "function" === t,
            Jt = (t, e, ...n) => {
                var a = null,
                    o = null,
                    r = null,
                    i = !1,
                    s = !1,
                    l = [],
                    c = e => {
                        for (var n = 0; n < e.length; n++) a = e[n], Array.isArray(a) ? c(a) : null != a && "boolean" != typeof a && ((i = "function" != typeof t && !Kt(a)) ? a = String(a) : Q && "function" != typeof t && void 0 === a.$flags$ && Qe("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects."), i && s ? l[l.length - 1].$text$ += a : l.push(i ? Gt(null, a) : a), s = i)
                    };
                if (c(n), e && (Q && "input" === t && ne(e), Z && e.key && (o = e.key), it && e.name && (r = e.name), F)) {
                    var h = e.className || e.class;
                    h && (e.class = "object" != typeof h ? h : Object.keys(h).filter(t => h[t]).join(" "))
                }
                if (Q && l.some(Xt) && Qe("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function."), _ && "function" == typeof t) return t(null === e ? {} : e, l, Qt);
                var d = Gt(t, null);
                return d.$attrs$ = e, l.length > 0 && (d.$children$ = l), Z && (d.$key$ = o), it && (d.$name$ = r), d
            },
            Gt = (t, e) => {
                var n = {
                    $flags$: 0,
                    $tag$: t,
                    $text$: e,
                    $elm$: null,
                    $children$: null
                };
                return D && (n.$attrs$ = null), Z && (n.$key$ = null), it && (n.$name$ = null), n
            },
            Yt = {},
            Xt = t => t && t.$tag$ === Yt,
            Qt = {
                forEach: (t, e) => t.map(te).forEach(e),
                map: (t, e) => t.map(te).map(e).map(ee)
            },
            te = t => ({
                vattrs: t.$attrs$,
                vchildren: t.$children$,
                vkey: t.$key$,
                vname: t.$name$,
                vtag: t.$tag$,
                vtext: t.$text$
            }),
            ee = t => {
                if ("function" == typeof t.vtag) {
                    var e = Object.assign({}, t.vattrs);
                    return t.vkey && (e.key = t.vkey), t.vname && (e.name = t.vname), Jt(t.vtag, e, ...t.vchildren || [])
                }
                var n = Gt(t.vtag, t.vtext);
                return n.$attrs$ = t.vattrs, n.$children$ = t.vchildren, n.$key$ = t.vkey, n.$name$ = t.vname, n
            },
            ne = t => {
                var e = Object.keys(t),
                    n = e.indexOf("type"),
                    a = e.indexOf("min"),
                    o = e.indexOf("max"),
                    r = e.indexOf("min"),
                    i = e.indexOf("value"); - 1 !== i && (i < n || i < a || i < o || i < r) && tn('The "value" prop of <input> should be set after "min", "max", "type" and "step"')
            },
            ae = (t, e, n, a, o, r) => {
                if (n !== a) {
                    var i = Ge(t, e),
                        s = e.toLowerCase();
                    if (F && "class" === e) {
                        var l = t.classList,
                            c = re(n),
                            h = re(a);
                        l.remove(...c.filter(t => t && !h.includes(t))), l.add(...h.filter(t => t && !c.includes(t)))
                    } else if (V && "style" === e) {
                        if (j)
                            for (var d in n) a && null != a[d] || (!et && d.includes("-") ? t.style.removeProperty(d) : t.style[d] = "");
                        for (var p in a) n && a[p] === n[p] || (!et && p.includes("-") ? t.style.setProperty(p, a[p]) : t.style[p] = a[p])
                    } else if (Z && "key" === e);
                    else if (H && "ref" === e) a && a(t);
                    else if (!W || (ot ? i : t.__lookupSetter__(e)) || "o" !== e[0] || "n" !== e[1]) {
                        if (U) {
                            var u = Kt(a);
                            if ((i || u && null !== a) && !o) try {
                                if (t.tagName.includes("-")) t[e] = a;
                                else {
                                    var w = null == a ? "" : a;
                                    "list" === e ? i = !1 : null != n && t[e] == w || (t[e] = w)
                                }
                            } catch (t) {}
                            var m = !1;
                            I && s !== (s = s.replace(/^xlink\:?/, "")) && (e = s, m = !0), null == a || !1 === a ? !1 === a && "" !== t.getAttribute(e) || (I && m ? t.removeAttributeNS(It, e) : t.removeAttribute(e)) : (!i || 4 & r || o) && !u && (a = !0 === a ? "" : a, I && m ? t.setAttributeNS(It, e, a) : t.setAttribute(e, a))
                        }
                    } else e = "-" === e[2] ? e.slice(3) : Ge(Tt, s) ? s.slice(2) : s[2] + e.slice(3), n && zt.rel(t, e, n, !1), a && zt.ael(t, e, a, !1)
                }
            },
            oe = /\s/,
            re = t => t ? t.split(oe) : [],
            ie = (t, e, n, a) => {
                var o = 11 === e.$elm$.nodeType && e.$elm$.host ? e.$elm$.host : e.$elm$,
                    r = t && t.$attrs$ || Vt,
                    i = e.$attrs$ || Vt;
                if (j)
                    for (a in r) a in i || ae(o, a, r[a], void 0, n, e.$flags$);
                for (a in i) ae(o, a, r[a], i[a], n, e.$flags$)
            },
            se = (t, e, n, i) => {
                var s, l, c, h = e.$children$[n],
                    d = 0;
                if (it && !Lt && (kt = !0, "slot" === h.$tag$ && (a && i.classList.add(a + "-s"), h.$flags$ |= h.$children$ ? 2 : 1)), Q && h.$elm$ && Qe("The JSX ".concat(null !== h.$text$ ? '"'.concat(h.$text$, '" text') : '"'.concat(h.$tag$, '" element'), " node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes")), K && null !== h.$text$) s = h.$elm$ = Et.createTextNode(h.$text$);
                else if (it && 1 & h.$flags$) s = h.$elm$ = X || et ? $e(h) : Et.createTextNode("");
                else {
                    if (O && !St && (St = "svg" === h.$tag$), s = h.$elm$ = O ? Et.createElementNS(St ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", it && 2 & h.$flags$ ? "slot-fb" : h.$tag$) : Et.createElement(it && 2 & h.$flags$ ? "slot-fb" : h.$tag$), O && St && "foreignObject" === h.$tag$ && (St = !1), D && ie(null, h, St), (z || E) && null != a && s["s-si"] !== a && s.classList.add(s["s-si"] = a), h.$children$)
                        for (d = 0; d < h.$children$.length; ++d)(l = se(t, h, d, s)) && s.appendChild(l);
                    O && ("svg" === h.$tag$ ? St = !1 : "foreignObject" === s.tagName && (St = !0))
                }
                return it && (s["s-hn"] = r, 3 & h.$flags$ && (s["s-sr"] = !0, s["s-cr"] = o, s["s-sn"] = h.$name$ || "", (c = t && t.$children$ && t.$children$[n]) && c.$tag$ === h.$tag$ && t.$elm$ && le(t.$elm$, !1))), s
            },
            le = (t, e) => {
                zt.$flags$ |= 1;
                for (var n = t.childNodes, a = n.length - 1; a >= 0; a--) {
                    var o = n[a];
                    o["s-hn"] !== r && o["s-ol"] && (ue(o).insertBefore(o, pe(o)), o["s-ol"].remove(), o["s-ol"] = void 0, kt = !0), e && le(o, e)
                }
                zt.$flags$ &= -2
            },
            ce = (t, e, n, a, o, i) => {
                var s, l = it && t["s-cr"] && t["s-cr"].parentNode || t;
                for (z && l.shadowRoot && l.tagName === r && (l = l.shadowRoot); o <= i; ++o) a[o] && (s = se(null, n, o, t)) && (a[o].$elm$ = s, l.insertBefore(s, it ? pe(e) : e))
            },
            he = (t, e, n, a, o) => {
                for (; e <= n; ++e)(a = t[e]) && (o = a.$elm$, ye(a), it && (xt = !0, o["s-ol"] ? o["s-ol"].remove() : le(o, !0)), o.remove())
            },
            de = (t, e) => t.$tag$ === e.$tag$ && (it && "slot" === t.$tag$ ? t.$name$ === e.$name$ : !Z || t.$key$ === e.$key$),
            pe = t => t && t["s-ol"] || t,
            ue = t => (t["s-ol"] ? t["s-ol"] : t).parentNode,
            we = (t, e) => {
                var n, a = e.$elm$ = t.$elm$,
                    o = t.$children$,
                    r = e.$children$,
                    i = e.$tag$,
                    s = e.$text$;
                K && null !== s ? K && it && (n = a["s-cr"]) ? n.parentNode.textContent = s : K && t.$text$ !== s && (a.data = s) : (O && (St = "svg" === i || "foreignObject" !== i && St), (D || T) && (P && "slot" === i || ie(t, e, St)), j && null !== o && null !== r ? ((t, e, n, a) => {
                    for (var o, r, i = 0, s = 0, l = 0, c = 0, h = e.length - 1, d = e[0], p = e[h], u = a.length - 1, w = a[0], m = a[u]; i <= h && s <= u;)
                        if (null == d) d = e[++i];
                        else if (null == p) p = e[--h];
                    else if (null == w) w = a[++s];
                    else if (null == m) m = a[--u];
                    else if (de(d, w)) we(d, w), d = e[++i], w = a[++s];
                    else if (de(p, m)) we(p, m), p = e[--h], m = a[--u];
                    else if (de(d, m)) !it || "slot" !== d.$tag$ && "slot" !== m.$tag$ || le(d.$elm$.parentNode, !1), we(d, m), t.insertBefore(d.$elm$, p.$elm$.nextSibling), d = e[++i], m = a[--u];
                    else if (de(p, w)) !it || "slot" !== d.$tag$ && "slot" !== m.$tag$ || le(p.$elm$.parentNode, !1), we(p, w), t.insertBefore(p.$elm$, d.$elm$), p = e[--h], w = a[++s];
                    else {
                        if (l = -1, Z)
                            for (c = i; c <= h; ++c)
                                if (e[c] && null !== e[c].$key$ && e[c].$key$ === w.$key$) {
                                    l = c;
                                    break
                                }
                        Z && l >= 0 ? ((r = e[l]).$tag$ !== w.$tag$ ? o = se(e && e[s], n, l, t) : (we(r, w), e[l] = void 0, o = r.$elm$), w = a[++s]) : (o = se(e && e[s], n, s, t), w = a[++s]), o && (it ? ue(d.$elm$).insertBefore(o, pe(d.$elm$)) : d.$elm$.parentNode.insertBefore(o, d.$elm$))
                    }
                    i > h ? ce(t, null == a[u + 1] ? null : a[u + 1].$elm$, n, a, s, u) : j && s > u && he(e, i, h)
                })(a, o, e, r) : null !== r ? (j && K && null !== t.$text$ && (a.textContent = ""), ce(a, null, e, r, 0, r.length - 1)) : j && null !== o && he(o, 0, o.length - 1), O && St && "svg" === i && (St = !1))
            },
            me = t => {
                var e, n, a, o, r, i, s = t.childNodes;
                for (n = 0, a = s.length; n < a; n++)
                    if (1 === (e = s[n]).nodeType) {
                        if (e["s-sr"])
                            for (r = e["s-sn"], e.hidden = !1, o = 0; o < a; o++)
                                if (i = s[o].nodeType, s[o]["s-hn"] !== e["s-hn"] || "" !== r) {
                                    if (1 === i && r === s[o].getAttribute("slot")) {
                                        e.hidden = !0;
                                        break
                                    }
                                } else if (1 === i || 3 === i && "" !== s[o].textContent.trim()) {
                            e.hidden = !0;
                            break
                        }
                        me(e)
                    }
            },
            fe = [],
            ge = t => {
                for (var e, n, a, o, r, i, s = 0, l = t.childNodes, c = l.length; s < c; s++) {
                    if ((e = l[s])["s-sr"] && (n = e["s-cr"]) && n.parentNode)
                        for (a = n.parentNode.childNodes, o = e["s-sn"], i = a.length - 1; i >= 0; i--)(n = a[i])["s-cn"] || n["s-nr"] || n["s-hn"] === e["s-hn"] || (ve(n, o) ? (r = fe.find(t => t.$nodeToRelocate$ === n), xt = !0, n["s-sn"] = n["s-sn"] || o, r ? r.$slotRefNode$ = e : fe.push({
                            $slotRefNode$: e,
                            $nodeToRelocate$: n
                        }), n["s-sr"] && fe.map(t => {
                            ve(t.$nodeToRelocate$, n["s-sn"]) && (r = fe.find(t => t.$nodeToRelocate$ === n)) && !t.$slotRefNode$ && (t.$slotRefNode$ = r.$slotRefNode$)
                        })) : fe.some(t => t.$nodeToRelocate$ === n) || fe.push({
                            $nodeToRelocate$: n
                        }));
                    1 === e.nodeType && ge(e)
                }
            },
            ve = (t, e) => 1 === t.nodeType ? null === t.getAttribute("slot") && "" === e || t.getAttribute("slot") === e : t["s-sn"] === e || "" === e,
            ye = t => {
                H && (t.$attrs$ && t.$attrs$.ref && t.$attrs$.ref(null), t.$children$ && t.$children$.map(ye))
            },
            be = (t, e) => {
                var n = t.$hostElement$,
                    i = t.$cmpMeta$,
                    s = t.$vnode$ || Gt(null, null),
                    l = Xt(e) ? e : Jt(null, null, e);
                if (r = n.tagName, Q && Array.isArray(e) && e.some(Xt)) throw new Error('The <Host> must be the single root component.\nLooks like the render() function of "'.concat(r.toLowerCase(), '" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  '));
                if (T && i.$attrsToReflect$ && (l.$attrs$ = l.$attrs$ || {}, i.$attrsToReflect$.map(([t, e]) => l.$attrs$[e] = n[t])), l.$tag$ = null, l.$flags$ |= 4, t.$vnode$ = l, l.$elm$ = s.$elm$ = z && n.shadowRoot || n, (E || z) && (a = n["s-sc"]), it && (o = n["s-cr"], Lt = Pt && 0 != (1 & i.$flags$), xt = !1), we(s, l), it) {
                    if (zt.$flags$ |= 1, kt) {
                        var c, h, d, p, u, w;
                        ge(l.$elm$);
                        for (var m = 0; m < fe.length; m++)(h = (c = fe[m]).$nodeToRelocate$)["s-ol"] || ((d = X || et ? Ce(h) : Et.createTextNode(""))["s-nr"] = h, h.parentNode.insertBefore(h["s-ol"] = d, h));
                        for (m = 0; m < fe.length; m++)
                            if (h = (c = fe[m]).$nodeToRelocate$, c.$slotRefNode$) {
                                for (p = c.$slotRefNode$.parentNode, u = c.$slotRefNode$.nextSibling, d = h["s-ol"]; d = d.previousSibling;)
                                    if ((w = d["s-nr"]) && w["s-sn"] === h["s-sn"] && p === w.parentNode && (!(w = w.nextSibling) || !w["s-nr"])) {
                                        u = w;
                                        break
                                    }(!u && p !== h.parentNode || h.nextSibling !== u) && h !== u && (!h["s-hn"] && h["s-ol"] && (h["s-hn"] = h["s-ol"].parentNode.nodeName), p.insertBefore(h, u))
                            } else 1 === h.nodeType && (h.hidden = !0)
                    }
                    xt && me(l.$elm$), zt.$flags$ &= -2, fe.length = 0
                }
            },
            $e = t => Et.createComment("<slot".concat(t.$name$ ? ' name="' + t.$name$ + '"' : "", "> (host=").concat(r.toLowerCase(), ")")),
            Ce = t => Et.createComment("org-location for " + (t.localName ? "<".concat(t.localName, "> (host=").concat(t["s-hn"], ")") : "[".concat(t.textContent, "]"))),
            Le = (t, e, n) => {
                var a = zt.ce(e, n);
                return t.dispatchEvent(a), a
            },
            xe = (t, e) => {
                gt && e && !t.$onRenderResolve$ && e["s-p"] && e["s-p"].push(new Promise(e => t.$onRenderResolve$ = e))
            },
            ke = (t, e) => {
                if (G && j && (t.$flags$ |= 16), !(gt && 4 & t.$flags$)) {
                    xe(t, t.$ancestorComponent$);
                    var n = () => Se(t, e);
                    return G ? wn(n) : n()
                }
                t.$flags$ |= 512
            },
            Se = (t, e) => {
                var n, a = t.$hostElement$,
                    o = Ft("scheduleUpdate", t.$cmpMeta$.$tagName$),
                    r = ot ? t.$lazyInstance$ : a;
                return e ? (ot && v && (t.$flags$ |= 256, t.$queuedListeners$ && (t.$queuedListeners$.map(([t, e]) => ze(r, t, e)), t.$queuedListeners$ = null)), Ne(a, "componentWillLoad"), p && (n = ze(r, "componentWillLoad"))) : (Ne(a, "componentWillUpdate"), u && (n = ze(r, "componentWillUpdate"))), Ne(a, "componentWillRender"), w && (n = Pe(n, () => ze(r, "componentWillRender"))), o(), Pe(n, () => Me(t, r, e))
            },
            Me = function() {
                var t = $t((function*(t, e, n) {
                    var a = t.$hostElement$,
                        o = Ft("update", t.$cmpMeta$.$tagName$),
                        r = a["s-rc"];
                    B && n && Ht(t);
                    var i = Ft("render", t.$cmpMeta$.$tagName$);
                    if (Q && (t.$flags$ |= 1024), et ? yield Ae(t, e, a): Ae(t, e, a), ut && zt.$cssShim$ && zt.$cssShim$.updateHost(a), Q && (t.$renderCount$++, t.$flags$ &= -1025), et) try {
                        Be(a), n && (1 & t.$cmpMeta$.$flags$ ? a["s-en"] = "" : 2 & t.$cmpMeta$.$flags$ && (a["s-en"] = "c"))
                    } catch (t) {
                        Ye(t, a)
                    }
                    if (gt && r && (r.map(t => t()), a["s-rc"] = void 0), i(), o(), gt) {
                        var s = a["s-p"],
                            l = () => Te(t);
                        0 === s.length ? l() : (Promise.all(s).then(l), t.$flags$ |= 4, s.length = 0)
                    } else Te(t)
                }));
                return function(e, n, a) {
                    return t.apply(this, arguments)
                }
            }(),
            Ae = (t, e, n) => {
                var a = !!s,
                    o = !!ot,
                    r = !!G,
                    i = !!j;
                try {
                    if (e, e = (a || e.render) && e.render(), i && r && (t.$flags$ &= -17), (i || o) && (t.$flags$ |= 2), g || T)
                        if (q || T) {
                            if (et) return Promise.resolve(e).then(e => be(t, e));
                            be(t, e)
                        } else n.textContent = e
                } catch (e) {
                    Ye(e, t.$hostElement$)
                }
                return null, null
            },
            Te = t => {
                var e = t.$cmpMeta$.$tagName$,
                    n = t.$hostElement$,
                    a = Ft("postUpdate", e),
                    o = ot ? t.$lazyInstance$ : n,
                    r = t.$ancestorComponent$;
                d && (Q && (t.$flags$ |= 1024), ze(o, "componentDidRender"), Q && (t.$flags$ &= -1025)), Ne(n, "componentDidRender"), 64 & t.$flags$ ? (h && (Q && (t.$flags$ |= 1024), ze(o, "componentDidUpdate"), Q && (t.$flags$ &= -1025)), Ne(n, "componentDidUpdate"), a()) : (t.$flags$ |= 64, gt && N && Re(n), l && (Q && (t.$flags$ |= 2048), ze(o, "componentDidLoad"), Q && (t.$flags$ &= -2049)), Ne(n, "componentDidLoad"), a(), gt && (t.$onReadyResolve$(n), r || Ee(e))), Y && n["s-hmr-load"] && n["s-hmr-load"](), k && ot && t.$onInstanceResolve$(n), gt && (t.$onRenderResolve$ && (t.$onRenderResolve$(), t.$onRenderResolve$ = void 0), 512 & t.$flags$ && un(() => ke(t, !1)), t.$flags$ &= -517)
            },
            Ee = t => {
                N && Re(Et.documentElement), vt && (zt.$flags$ |= 2), un(() => Le(Tt, "appload", {
                    detail: {
                        namespace: "app"
                    }
                })), rt && performance.measure && performance.measure("[Stencil] ".concat("app", " initial load (by ").concat(t, ")"), "st:app:start")
            },
            ze = (t, e, n) => {
                if (t && t[e]) try {
                    return t[e](n)
                } catch (t) {
                    Ye(t)
                }
            },
            Pe = (t, e) => t && t.then ? t.then(e) : e(),
            Ne = (t, e) => {
                at && Le(t, "stencil_" + e, {
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        namespace: "app"
                    }
                })
            },
            Re = t => lt ? t.classList.add("hydrated") : st ? t.setAttribute("hydrated", "") : void 0,
            Be = t => {
                var e = t.children;
                if (null != e)
                    for (var n = 0, a = e.length; n < a; n++) {
                        var o = e[n];
                        "function" == typeof o.connectedCallback && o.connectedCallback(), Be(o)
                    }
            },
            Oe = (t, e, n, a, o, r, i) => {
                var s, l, c, h;
                if (1 === r.nodeType) {
                    for ((s = r.getAttribute("c-id")) && ((l = s.split("."))[0] !== i && "0" !== l[0] || (c = {
                            $flags$: 0,
                            $hostId$: l[0],
                            $nodeId$: l[1],
                            $depth$: l[2],
                            $index$: l[3],
                            $tag$: r.tagName.toLowerCase(),
                            $elm$: r,
                            $attrs$: null,
                            $children$: null,
                            $key$: null,
                            $name$: null,
                            $text$: null
                        }, e.push(c), r.removeAttribute("c-id"), t.$children$ || (t.$children$ = []), t.$children$[c.$index$] = c, t = c, a && "0" === c.$depth$ && (a[c.$index$] = c.$elm$))), h = r.childNodes.length - 1; h >= 0; h--) Oe(t, e, n, a, o, r.childNodes[h], i);
                    if (r.shadowRoot)
                        for (h = r.shadowRoot.childNodes.length - 1; h >= 0; h--) Oe(t, e, n, a, o, r.shadowRoot.childNodes[h], i)
                } else if (8 === r.nodeType)(l = r.nodeValue.split("."))[1] !== i && "0" !== l[1] || (s = l[0], c = {
                    $flags$: 0,
                    $hostId$: l[1],
                    $nodeId$: l[2],
                    $depth$: l[3],
                    $index$: l[4],
                    $elm$: r,
                    $attrs$: null,
                    $children$: null,
                    $key$: null,
                    $name$: null,
                    $tag$: null,
                    $text$: null
                }, "t" === s ? (c.$elm$ = r.nextSibling, c.$elm$ && 3 === c.$elm$.nodeType && (c.$text$ = c.$elm$.textContent, e.push(c), r.remove(), t.$children$ || (t.$children$ = []), t.$children$[c.$index$] = c, a && "0" === c.$depth$ && (a[c.$index$] = c.$elm$))) : c.$hostId$ === i && ("s" === s ? (c.$tag$ = "slot", l[5] ? r["s-sn"] = c.$name$ = l[5] : r["s-sn"] = "", r["s-sr"] = !0, z && a && (c.$elm$ = Et.createElement(c.$tag$), c.$name$ && c.$elm$.setAttribute("name", c.$name$), r.parentNode.insertBefore(c.$elm$, r), r.remove(), "0" === c.$depth$ && (a[c.$index$] = c.$elm$)), n.push(c), t.$children$ || (t.$children$ = []), t.$children$[c.$index$] = c) : "r" === s && (z && a ? r.remove() : it && (o["s-cr"] = r, r["s-cn"] = !0))));
                else if (t && "style" === t.$tag$) {
                    var d = Gt(null, r.textContent);
                    d.$elm$ = r, d.$index$ = "0", t.$children$ = [d]
                }
            },
            je = (t, e) => {
                if (1 === t.nodeType) {
                    for (var n = 0; n < t.childNodes.length; n++) je(t.childNodes[n], e);
                    if (t.shadowRoot)
                        for (n = 0; n < t.shadowRoot.childNodes.length; n++) je(t.shadowRoot.childNodes[n], e)
                } else if (8 === t.nodeType) {
                    var a = t.nodeValue.split(".");
                    "o" === a[0] && (e.set(a[1] + "." + a[2], t), t.nodeValue = "", t["s-en"] = a[3])
                }
            },
            De = (t, e, n, a) => {
                var o, r, i = Ke(t),
                    s = ot ? i.$hostElement$ : t,
                    l = i.$instanceValues$.get(e),
                    c = i.$flags$,
                    h = ot ? i.$lazyInstance$ : s;
                if (o = n, r = a.$members$[e][0], n = null == o || Kt(o) ? o : ht && 4 & r ? "false" !== o && ("" === o || !!o) : dt && 2 & r ? parseFloat(o) : pt && 1 & r ? String(o) : o, !(ot && 8 & c && void 0 !== l || n === l) && (i.$instanceValues$.set(e, n), Q && (1024 & i.$flags$ ? tn('The state/prop "'.concat(e, '" changed during rendering. This can potentially lead to infinite-loops and other bugs.'), "\nElement", s, "\nNew value", n, "\nOld value", l) : 2048 & i.$flags$ && tn('The state/prop "'.concat(e, '" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"'), "\nElement", s, "\nNew value", n, "\nOld value", l)), !ot || h)) {
                    if (J && a.$watchers$ && 128 & c) {
                        var d = a.$watchers$[e];
                        d && d.map(t => {
                            try {
                                h[t](n, l, e)
                            } catch (t) {
                                Ye(t, s)
                            }
                        })
                    }
                    if (j && 2 == (18 & c)) {
                        if (mt && h.componentShouldUpdate && !1 === h.componentShouldUpdate(n, l, e)) return;
                        ke(i, !1)
                    }
                }
            },
            Ie = (t, e, n) => {
                if (x && e.$members$) {
                    J && t.watchers && (e.$watchers$ = t.watchers);
                    var a = Object.entries(e.$members$),
                        o = t.prototype;
                    if (a.map(([t, [a]]) => {
                            (A || R) && (31 & a || (!ot || 2 & n) && 32 & a) ? Object.defineProperty(o, t, {
                                get() {
                                    return e = t, Ke(this).$instanceValues$.get(e);
                                    var e
                                },
                                set(o) {
                                    if (Q) {
                                        var r = Ke(this);
                                        0 == (1 & n) && 0 == (8 & r.$flags$) && 0 != (31 & a) && 0 == (1024 & a) && tn('@Prop() "'.concat(t, '" on <').concat(e.$tagName$, "> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability"))
                                    }
                                    De(this, t, o, e)
                                },
                                configurable: !0,
                                enumerable: !0
                            }): ot && k && 1 & n && 64 & a && Object.defineProperty(o, t, {
                                value(...e) {
                                    var n = Ke(this);
                                    return n.$onInstancePromise$.then(() => n.$lazyInstance$[t](...e))
                                }
                            })
                        }), M && (!ot || 1 & n)) {
                        var r = new Map;
                        o.attributeChangedCallback = function(t, e, n) {
                            zt.jmp(() => {
                                var e = r.get(t);
                                this[e] = (null !== n || "boolean" != typeof this[e]) && n
                            })
                        }, t.observedAttributes = a.filter(([t, e]) => 15 & e[0]).map(([t, n]) => {
                            var a = n[1] || t;
                            return r.set(a, t), T && 512 & n[0] && e.$attrsToReflect$.push([t, a]), a
                        })
                    }
                }
                return t
            },
            Fe = function() {
                var t = $t((function*(t, e, a, o, r) {
                    if ((ot || et || B) && 0 == (32 & e.$flags$)) {
                        if (ot || nt) {
                            if (e.$flags$ |= 32, (r = nn(a, e, o)).then) {
                                var i = (d = "st:load:".concat(a.$tagName$, ":").concat(e.$modeName$), p = "[Stencil] Load module for <".concat(a.$tagName$, ">"), rt && performance.mark ? (0 === performance.getEntriesByName(d).length && performance.mark(d), () => {
                                    0 === performance.getEntriesByName(p).length && performance.measure(p, d)
                                }) : () => {});
                                r = yield r, i()
                            }
                            if ((Q || X) && !r) throw new Error('Constructor for "'.concat(a.$tagName$, "#").concat(e.$modeName$, '" was not found'));
                            x && !r.isProxied && (J && (a.$watchers$ = r.watchers), Ie(r, a, 2), r.isProxied = !0);
                            var s = Ft("createInstance", a.$tagName$);
                            x && (e.$flags$ |= 8);
                            try {
                                new r(e)
                            } catch (t) {
                                Ye(t)
                            }
                            x && (e.$flags$ &= -9), J && (e.$flags$ |= 128), s(), _e(e.$lazyInstance$)
                        } else r = t.constructor, e.$flags$ |= 160;
                        if (B && r.style) {
                            var l = r.style;
                            S && "string" != typeof l && (l = l[e.$modeName$ = qt(t)], et && e.$modeName$ && t.setAttribute("s-mode", e.$modeName$));
                            var c = Ut(a, e.$modeName$);
                            if (!an.has(c)) {
                                var h = Ft("registerStyles", a.$tagName$);
                                !et && z && ct && 8 & a.$flags$ && (l = yield Promise.resolve().then(n.bind(null, 195)).then(t => t.scopeCss(l, c, !1))), Zt(c, l, !!(1 & a.$flags$)), h()
                            }
                        }
                    }
                    var d, p, u = e.$ancestorComponent$,
                        w = () => ke(e, !0);
                    gt && u && u["s-rc"] ? u["s-rc"].push(w) : w()
                }));
                return function(e, n, a, o, r) {
                    return t.apply(this, arguments)
                }
            }(),
            _e = t => {
                ot && m && ze(t, "connectedCallback")
            },
            Ze = t => {
                if (0 == (1 & zt.$flags$)) {
                    var e = Ke(t),
                        n = e.$cmpMeta$,
                        a = Ft("connectedCallback", n.$tagName$);
                    if (C && Bt(t, e, n.$listeners$, !0), 1 & e.$flags$) Bt(t, e, n.$listeners$, !1), _e(e.$lazyInstance$);
                    else {
                        var o;
                        if (e.$flags$ |= 1, nt && (o = t.getAttribute("s-id"))) {
                            if (z && Pt && 1 & n.$flags$) {
                                var r = S ? Wt(t.shadowRoot, n, t.getAttribute("s-mode")) : Wt(t.shadowRoot, n);
                                t.classList.remove(r + "-h", r + "-s")
                            }((t, e, n, a) => {
                                var o = Ft("hydrateClient", e),
                                    r = t.shadowRoot,
                                    i = [],
                                    s = z && r ? [] : null,
                                    l = a.$vnode$ = Gt(e, null);
                                zt.$orgLocNodes$ || je(Et.body, zt.$orgLocNodes$ = new Map), t["s-id"] = n, t.removeAttribute("s-id"), Oe(l, i, [], s, t, t, n), i.map(t => {
                                    var n = t.$hostId$ + "." + t.$nodeId$,
                                        a = zt.$orgLocNodes$.get(n),
                                        o = t.$elm$;
                                    a && Pt && "" === a["s-en"] && a.parentNode.insertBefore(o, a.nextSibling), r || (o["s-hn"] = e, a && (o["s-ol"] = a, o["s-ol"]["s-nr"] = o)), zt.$orgLocNodes$.delete(n)
                                }), z && r && s.map(t => {
                                    t && r.appendChild(t)
                                }), o()
                            })(t, n.$tagName$, o, e)
                        }
                        if (it && !o && (et || (P || z) && 12 & n.$flags$) && We(t), gt)
                            for (var i = t; i = i.parentNode || i.host;)
                                if (nt && 1 === i.nodeType && i.hasAttribute("s-id") && i["s-p"] || i["s-p"]) {
                                    xe(e, e.$ancestorComponent$ = i);
                                    break
                                }
                        A && ot && !et && n.$members$ && Object.entries(n.$members$).map(([e, [n]]) => {
                            if (31 & n && t.hasOwnProperty(e)) {
                                var a = t[e];
                                delete t[e], t[e] = a
                            }
                        }), ft ? un(() => Fe(t, e, n)) : Fe(t, e, n)
                    }
                    a()
                }
            },
            We = t => {
                var e = t["s-cr"] = Et.createComment(X ? "content-ref (host=".concat(t.localName, ")") : "");
                e["s-cn"] = !0, t.insertBefore(e, t.firstChild)
            },
            He = t => {
                if (0 == (1 & zt.$flags$)) {
                    var e = Ke(t),
                        n = ot ? e.$lazyInstance$ : t;
                    v && e.$rmListeners$ && (e.$rmListeners$.map(t => t()), e.$rmListeners$ = void 0), ut && zt.$cssShim$ && zt.$cssShim$.removeHost(t), ot && f && ze(n, "disconnectedCallback"), c && ze(n, "componentDidUnload")
                }
            },
            Ue = (t, e) => {
                var n = {
                    $flags$: e[0],
                    $tagName$: e[1]
                };
                x && (n.$members$ = e[2]), v && (n.$listeners$ = e[3]), J && (n.$watchers$ = t.$watchers$), T && (n.$attrsToReflect$ = []), z && !Pt && 1 & n.$flags$ && (n.$flags$ |= 8);
                var a = t.prototype.connectedCallback,
                    o = t.prototype.disconnectedCallback;
                return Object.assign(t.prototype, {
                    __registerHost() {
                        Je(this, n)
                    },
                    connectedCallback() {
                        Ze(this), m && a && a.call(this)
                    },
                    disconnectedCallback() {
                        He(this), f && o && o.call(this)
                    }
                }), t.is = n.$tagName$, Ie(t, n, 3)
            },
            qe = t => {
                Pt ? t.attachShadow({
                    mode: "open"
                }) : t.shadowRoot = t
            },
            Ve = new WeakMap,
            Ke = t => Ve.get(t),
            Je = (t, e) => {
                var n = {
                    $flags$: 0,
                    $hostElement$: t,
                    $cmpMeta$: e,
                    $instanceValues$: new Map
                };
                return Q && (n.$renderCount$ = 0), k && ot && (n.$onInstancePromise$ = new Promise(t => n.$onInstanceResolve$ = t)), gt && (n.$onReadyPromise$ = new Promise(t => n.$onReadyResolve$ = t), t["s-p"] = [], t["s-rc"] = []), Bt(t, n, e.$listeners$, !1), Ve.set(t, n)
            },
            Ge = (t, e) => e in t,
            Ye = (t, e) => (i || console.error)(t, e),
            Xe = tt ? ["STENCIL:"] : ["%cstencil", "color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],
            Qe = (...t) => console.error(...Xe, ...t),
            tn = (...t) => console.warn(...Xe, ...t),
            en = new Map,
            nn = (t, e, a) => {
                var o = t.$tagName$.replace(/-/g, "_"),
                    r = t.$lazyBundleId$;
                if (!Q || "string" == typeof r) {
                    var i = !Y && en.get(r);
                    return i ? i[o] : n(104)("./".concat(r, ".entry.js").concat(BUILD.hotModuleReplacement && a ? "?s-hmr=" + a : "")).then(t => (Y || en.set(r, t), t[o]), Ye)
                }
                Qe("Trying to lazily load component <".concat(t.$tagName$, '> with style mode "').concat(e.$modeName$, '", but it does not exist.'))
            },
            an = new Map,
            on = [],
            rn = [],
            sn = [],
            ln = [],
            cn = (t, e) => n => {
                t.push(n), At || (At = !0, e && 4 & zt.$flags$ ? un(pn) : zt.raf(pn))
            },
            hn = t => {
                for (var e = 0; e < t.length; e++) try {
                    t[e](performance.now())
                } catch (t) {
                    Ye(t)
                }
                t.length = 0
            },
            dn = (t, e) => {
                for (var n = 0, a = 0; n < t.length && (a = performance.now()) < e;) try {
                    t[n++](a)
                } catch (t) {
                    Ye(t)
                }
                n === t.length ? t.length = 0 : 0 !== n && t.splice(0, n)
            },
            pn = () => {
                if (vt && Mt++, hn(rn), vt) {
                    var t = 2 == (6 & zt.$flags$) ? performance.now() + 14 * Math.ceil(.1 * Mt) : 1 / 0;
                    dn(sn, t), dn(ln, t), sn.length > 0 && (ln.push(...sn), sn.length = 0), (At = rn.length + sn.length + ln.length > 0) ? zt.raf(pn) : Mt = 0
                } else hn(sn), (At = rn.length > 0) && zt.raf(pn)
            },
            un = t => {
                return Promise.resolve(e).then(t);
                var e
            },
            wn = cn(sn, !0)
    },
    195: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "scopeCss", (function() {
            return S
        }));
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         *
         * This file is a port of shadowCSS from webcomponents.js to TypeScript.
         * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
         * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
         */
        var a = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",
            o = new RegExp("(-shadowcsshost" + a, "gim"),
            r = new RegExp("(-shadowcsscontext" + a, "gim"),
            i = new RegExp("(-shadowcssslotted" + a, "gim"),
            s = /-shadowcsshost-no-combinator([^\s]*)/,
            l = [/::shadow/g, /::content/g],
            c = /-shadowcsshost/gim,
            h = /:host/gim,
            d = /::slotted/gim,
            p = /:host-context/gim,
            u = /\/\*\s*[\s\S]*?\*\//g,
            w = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,
            m = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,
            f = /([{}])/g,
            g = (t, e) => {
                var n = v(t),
                    a = 0;
                return n.escapedString.replace(m, (...t) => {
                    var o = t[2],
                        r = "",
                        i = t[4],
                        s = "";
                    i && i.startsWith("{%BLOCK%") && (r = n.blocks[a++], i = i.substring("%BLOCK%".length + 1), s = "{");
                    var l = e({
                        selector: o,
                        content: r
                    });
                    return "".concat(t[1]).concat(l.selector).concat(t[3]).concat(s).concat(l.content).concat(i)
                })
            },
            v = t => {
                for (var e = t.split(f), n = [], a = [], o = 0, r = [], i = 0; i < e.length; i++) {
                    var s = e[i];
                    "}" === s && o--, o > 0 ? r.push(s) : (r.length > 0 && (a.push(r.join("")), n.push("%BLOCK%"), r = []), n.push(s)), "{" === s && o++
                }
                return r.length > 0 && (a.push(r.join("")), n.push("%BLOCK%")), {
                    escapedString: n.join(""),
                    blocks: a
                }
            },
            y = (t, e, n) => t.replace(e, (...t) => {
                if (t[2]) {
                    for (var e = t[2].split(","), a = [], o = 0; o < e.length; o++) {
                        var r = e[o].trim();
                        if (!r) break;
                        a.push(n("-shadowcsshost-no-combinator", r, t[3]))
                    }
                    return a.join(",")
                }
                return "-shadowcsshost-no-combinator" + t[3]
            }),
            b = (t, e, n) => t + e.replace("-shadowcsshost", "") + n,
            $ = (t, e, n) => e.indexOf("-shadowcsshost") > -1 ? b(t, e, n) : t + e + n + ", " + e + " " + t + n,
            C = (t, e) => !(t => (t = t.replace(/\[/g, "\\[").replace(/\]/g, "\\]"), new RegExp("^(" + t + ")([>\\s~+[.,{:][\\s\\S]*)?$", "m")))(e).test(t),
            L = (t, e, n) => {
                for (var a, o = "." + (e = e.replace(/\[is=([^\]]*)\]/g, (t, ...e) => e[0])), r = t => {
                        var a = t.trim();
                        if (!a) return "";
                        if (t.indexOf("-shadowcsshost-no-combinator") > -1) a = ((t, e, n) => {
                            if (c.lastIndex = 0, c.test(t)) {
                                var a = ".".concat(n);
                                return t.replace(s, (t, e) => e.replace(/([^:]*)(:*)(.*)/, (t, e, n, o) => e + a + n + o)).replace(c, a + " ")
                            }
                            return e + " " + t
                        })(t, e, n);
                        else {
                            var r = t.replace(c, "");
                            if (r.length > 0) {
                                var i = r.match(/([^:]*)(:*)(.*)/);
                                i && (a = i[1] + o + i[2] + i[3])
                            }
                        }
                        return a
                    }, i = (t => {
                        var e = [],
                            n = 0;
                        return {
                            content: (t = t.replace(/(\[[^\]]*\])/g, (t, a) => {
                                var o = "__ph-".concat(n, "__");
                                return e.push(a), n++, o
                            })).replace(/(:nth-[-\w]+)(\([^)]+\))/g, (t, a, o) => {
                                var r = "__ph-".concat(n, "__");
                                return e.push(o), n++, a + r
                            }),
                            placeholders: e
                        }
                    })(t), l = "", h = 0, d = /( |>|\+|~(?!=))\s*/g, p = !((t = i.content).indexOf("-shadowcsshost-no-combinator") > -1); null !== (a = d.exec(t));) {
                    var u = a[1],
                        w = t.slice(h, a.index).trim(),
                        m = (p = p || w.indexOf("-shadowcsshost-no-combinator") > -1) ? r(w) : w;
                    l += "".concat(m, " ").concat(u, " "), h = d.lastIndex
                }
                var f, g = t.substring(h);
                return l += (p = p || g.indexOf("-shadowcsshost-no-combinator") > -1) ? r(g) : g, f = i.placeholders, l.replace(/__ph-(\d+)__/g, (t, e) => f[+e])
            },
            x = (t, e, n, a, o) => g(t, t => {
                var o = t.selector,
                    r = t.content;
                return "@" !== t.selector[0] ? o = ((t, e, n, a) => t.split(",").map(t => a && t.indexOf("." + a) > -1 ? t.trim() : C(t, e) ? L(t, e, n).trim() : t.trim()).join(", "))(t.selector, e, n, a) : (t.selector.startsWith("@media") || t.selector.startsWith("@supports") || t.selector.startsWith("@page") || t.selector.startsWith("@document")) && (r = x(t.content, e, n, a)), {
                    selector: o.replace(/\s{2,}/g, " ").trim(),
                    content: r
                }
            }),
            k = (t, e, n, a, s) => {
                var c = ((t, e) => {
                    var n = "." + e + " > ",
                        a = [];
                    return t = t.replace(i, (...t) => {
                        if (t[2]) {
                            for (var e = t[2].trim(), o = t[3], r = n + e + o, i = "", s = t[4] - 1; s >= 0; s--) {
                                var l = t[5][s];
                                if ("}" === l || "," === l) break;
                                i = l + i
                            }
                            var c = i + r,
                                h = "".concat(i.trimRight()).concat(r.trim());
                            if (c.trim() !== h.trim()) {
                                var d = "".concat(h, ", ").concat(c);
                                a.push({
                                    orgSelector: c,
                                    updatedSelector: d
                                })
                            }
                            return r
                        }
                        return "-shadowcsshost-no-combinator" + t[3]
                    }), {
                        selectors: a,
                        cssText: t
                    }
                })(t = (t => y(t, r, $))(t = (t => y(t, o, b))(t = t.replace(p, "-shadowcsscontext").replace(h, "-shadowcsshost").replace(d, "-shadowcssslotted"))), a);
                return t = (t => l.reduce((t, e) => t.replace(e, " "), t))(t = c.cssText), e && (t = x(t, e, n, a)), {
                    cssText: (t = (t = t.replace(/-shadowcsshost-no-combinator/g, ".".concat(n))).replace(/>\s*\*\s+([^{, ]+)/gm, " $1 ")).trim(),
                    slottedSelectors: c.selectors
                }
            },
            S = (t, e, n) => {
                var a = e + "-h",
                    o = e + "-s",
                    r = t.match(w) || [];
                t = (t => t.replace(u, ""))(t);
                var i = [];
                if (n) {
                    var s = t => {
                        var e = "/*!@___".concat(i.length, "___*/"),
                            n = "/*!@".concat(t.selector, "*/");
                        return i.push({
                            placeholder: e,
                            comment: n
                        }), t.selector = e + t.selector, t
                    };
                    t = g(t, t => "@" !== t.selector[0] ? s(t) : t.selector.startsWith("@media") || t.selector.startsWith("@supports") || t.selector.startsWith("@page") || t.selector.startsWith("@document") ? (t.content = g(t.content, s), t) : t)
                }
                var l = k(t, e, a, o);
                return t = [l.cssText, ...r].join("\n"), n && i.forEach(({
                    placeholder: e,
                    comment: n
                }) => {
                    t = t.replace(e, n)
                }), l.slottedSelectors.forEach(e => {
                    t = t.replace(e.orgSelector, e.updatedSelector)
                }), t
            }
    },
    44: function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }
});