! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2fb2998c-3bd4-49ae-923e-d72af4c90419", e._sentryDebugIdIdentifier = "sentry-dbid-2fb2998c-3bd4-49ae-923e-d72af4c90419")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [719], {
        30719: function(e, t, i) {
            i.d(t, {
                tq: function() {
                    return o
                },
                o5: function() {
                    return d
                }
            });
            var s = i(67294),
                r = i(71911);

            function isObject(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function extend(e, t) {
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : isObject(t[i]) && isObject(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : extend(e[i], t[i]) : e[i] = t[i]
                })
            }

            function needsNavigation(e = {}) {
                return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function needsPagination(e = {}) {
                return e.pagination && void 0 === e.pagination.el
            }

            function needsScrollbar(e = {}) {
                return e.scrollbar && void 0 === e.scrollbar.el
            }

            function uniqueClasses(e = "") {
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    i = [];
                return t.forEach(e => {
                    0 > i.indexOf(e) && i.push(e)
                }), i.join(" ")
            }
            let n = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"],
                calcLoopedSlides = (e, t) => {
                    let i = t.slidesPerView;
                    if (t.breakpoints) {
                        let e = r.ZP.prototype.getBreakpoint(t.breakpoints),
                            s = e in t.breakpoints ? t.breakpoints[e] : void 0;
                        s && s.slidesPerView && (i = s.slidesPerView)
                    }
                    let s = Math.ceil(parseFloat(t.loopedSlides || i, 10));
                    return (s += t.loopAdditionalSlides) > e.length && t.loopedSlidesLimit && (s = e.length), s
                };

            function isChildSwiperSlide(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }
            let updateOnVirtualData = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function useIsomorphicLayoutEffect(e, t) {
                return "undefined" == typeof window ? (0, s.useEffect)(e, t) : (0, s.useLayoutEffect)(e, t)
            }
            let l = (0, s.createContext)(null),
                a = (0, s.createContext)(null);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            let o = (0, s.forwardRef)(function(e, t) {
                let {
                    className: i,
                    tag: l = "div",
                    wrapperTag: o = "div",
                    children: d,
                    onSwiper: c,
                    ...p
                } = void 0 === e ? {} : e, u = !1, [h, m] = (0, s.useState)("swiper"), [f, g] = (0, s.useState)(null), [v, w] = (0, s.useState)(!1), b = (0, s.useRef)(!1), _ = (0, s.useRef)(null), C = (0, s.useRef)(null), S = (0, s.useRef)(null), y = (0, s.useRef)(null), T = (0, s.useRef)(null), E = (0, s.useRef)(null), x = (0, s.useRef)(null), $ = (0, s.useRef)(null), {
                    params: k,
                    passedParams: P,
                    rest: M,
                    events: O
                } = function(e = {}, t = !0) {
                    let i = {
                            on: {}
                        },
                        s = {},
                        l = {};
                    extend(i, r.ZP.defaults), extend(i, r.ZP.extendedDefaults), i._emitClasses = !0, i.init = !1;
                    let a = {},
                        o = n.map(e => e.replace(/_/, "")),
                        d = Object.assign({}, e);
                    return Object.keys(d).forEach(r => {
                        void 0 !== e[r] && (o.indexOf(r) >= 0 ? isObject(e[r]) ? (i[r] = {}, l[r] = {}, extend(i[r], e[r]), extend(l[r], e[r])) : (i[r] = e[r], l[r] = e[r]) : 0 === r.search(/on[A-Z]/) && "function" == typeof e[r] ? t ? s[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : i.on[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : a[r] = e[r])
                    }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                        !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                    }), {
                        params: i,
                        passedParams: l,
                        rest: a,
                        events: s
                    }
                }(p), {
                    slides: L,
                    slots: D
                } = function(e) {
                    let t = [],
                        i = {
                            "container-start": [],
                            "container-end": [],
                            "wrapper-start": [],
                            "wrapper-end": []
                        };
                    return s.Children.toArray(e).forEach(e => {
                        if (isChildSwiperSlide(e)) t.push(e);
                        else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                        else if (e.props && e.props.children) {
                            let r = function processChildren(e) {
                                let t = [];
                                return s.Children.toArray(e).forEach(e => {
                                    isChildSwiperSlide(e) ? t.push(e) : e.props && e.props.children && processChildren(e.props.children).forEach(e => t.push(e))
                                }), t
                            }(e.props.children);
                            r.length > 0 ? r.forEach(e => t.push(e)) : i["container-end"].push(e)
                        } else i["container-end"].push(e)
                    }), {
                        slides: t,
                        slots: i
                    }
                }(d), onBeforeBreakpoint = () => {
                    w(!v)
                };
                Object.assign(k.on, {
                    _containerClasses(e, t) {
                        m(t)
                    }
                });
                let initSwiper = () => {
                    if (Object.assign(k.on, O), u = !0, C.current = new r.ZP(k), C.current.loopCreate = () => {}, C.current.loopDestroy = () => {}, k.loop && (C.current.loopedSlides = calcLoopedSlides(L, k)), C.current.virtual && C.current.params.virtual.enabled) {
                        C.current.virtual.slides = L;
                        let e = {
                            cache: !1,
                            slides: L,
                            renderExternal: g,
                            renderExternalUpdate: !1
                        };
                        extend(C.current.params.virtual, e), extend(C.current.originalParams.virtual, e)
                    }
                };
                _.current || initSwiper(), C.current && C.current.on("_beforeBreakpoint", onBeforeBreakpoint);
                let attachEvents = () => {
                        !u && O && C.current && Object.keys(O).forEach(e => {
                            C.current.on(e, O[e])
                        })
                    },
                    detachEvents = () => {
                        O && C.current && Object.keys(O).forEach(e => {
                            C.current.off(e, O[e])
                        })
                    };
                return (0, s.useEffect)(() => () => {
                    C.current && C.current.off("_beforeBreakpoint", onBeforeBreakpoint)
                }), (0, s.useEffect)(() => {
                    !b.current && C.current && (C.current.emitSlidesClasses(), b.current = !0)
                }), useIsomorphicLayoutEffect(() => {
                    if (t && (t.current = _.current), _.current) return C.current.destroyed && initSwiper(),
                        function({
                            el: e,
                            nextEl: t,
                            prevEl: i,
                            paginationEl: s,
                            scrollbarEl: r,
                            swiper: n
                        }, l) {
                            needsNavigation(l) && t && i && (n.params.navigation.nextEl = t, n.originalParams.navigation.nextEl = t, n.params.navigation.prevEl = i, n.originalParams.navigation.prevEl = i), needsPagination(l) && s && (n.params.pagination.el = s, n.originalParams.pagination.el = s), needsScrollbar(l) && r && (n.params.scrollbar.el = r, n.originalParams.scrollbar.el = r), n.init(e)
                        }({
                            el: _.current,
                            nextEl: T.current,
                            prevEl: E.current,
                            paginationEl: x.current,
                            scrollbarEl: $.current,
                            swiper: C.current
                        }, k), c && c(C.current), () => {
                            C.current && !C.current.destroyed && C.current.destroy(!0, !1)
                        }
                }, []), useIsomorphicLayoutEffect(() => {
                    attachEvents();
                    let e = function(e, t, i, s, r) {
                        let l = [];
                        if (!t) return l;
                        let addKey = e => {
                            0 > l.indexOf(e) && l.push(e)
                        };
                        if (i && s) {
                            let e = s.map(r),
                                t = i.map(r);
                            e.join("") !== t.join("") && addKey("children"), s.length !== i.length && addKey("children")
                        }
                        let a = n.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                        return a.forEach(i => {
                            if (i in e && i in t) {
                                if (isObject(e[i]) && isObject(t[i])) {
                                    let s = Object.keys(e[i]),
                                        r = Object.keys(t[i]);
                                    s.length !== r.length ? addKey(i) : (s.forEach(s => {
                                        e[i][s] !== t[i][s] && addKey(i)
                                    }), r.forEach(s => {
                                        e[i][s] !== t[i][s] && addKey(i)
                                    }))
                                } else e[i] !== t[i] && addKey(i)
                            }
                        }), l
                    }(P, S.current, L, y.current, e => e.key);
                    return S.current = P, y.current = L, e.length && C.current && !C.current.destroyed && function({
                        swiper: e,
                        slides: t,
                        passedParams: i,
                        changedParams: s,
                        nextEl: r,
                        prevEl: n,
                        scrollbarEl: l,
                        paginationEl: a
                    }) {
                        let o, d, c, p, u;
                        let h = s.filter(e => "children" !== e && "direction" !== e),
                            {
                                params: m,
                                pagination: f,
                                navigation: g,
                                scrollbar: v,
                                virtual: w,
                                thumbs: b
                            } = e;
                        s.includes("thumbs") && i.thumbs && i.thumbs.swiper && m.thumbs && !m.thumbs.swiper && (o = !0), s.includes("controller") && i.controller && i.controller.control && m.controller && !m.controller.control && (d = !0), s.includes("pagination") && i.pagination && (i.pagination.el || a) && (m.pagination || !1 === m.pagination) && f && !f.el && (c = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || l) && (m.scrollbar || !1 === m.scrollbar) && v && !v.el && (p = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || n) && (i.navigation.nextEl || r) && (m.navigation || !1 === m.navigation) && g && !g.prevEl && !g.nextEl && (u = !0);
                        let destroyModule = t => {
                            e[t] && (e[t].destroy(), "navigation" === t ? (m[t].prevEl = void 0, m[t].nextEl = void 0, e[t].prevEl = void 0, e[t].nextEl = void 0) : (m[t].el = void 0, e[t].el = void 0))
                        };
                        if (h.forEach(e => {
                                if (isObject(m[e]) && isObject(i[e])) extend(m[e], i[e]);
                                else {
                                    let t = i[e];
                                    (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && destroyModule(e): m[e] = i[e]
                                }
                            }), h.includes("controller") && !d && e.controller && e.controller.control && m.controller && m.controller.control && (e.controller.control = m.controller.control), s.includes("children") && t && w && m.virtual.enabled ? (w.slides = t, w.update(!0)) : s.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(), o) {
                            let e = b.init();
                            e && b.update(!0)
                        }
                        d && (e.controller.control = m.controller.control), c && (a && (m.pagination.el = a), f.init(), f.render(), f.update()), p && (l && (m.scrollbar.el = l), v.init(), v.updateSize(), v.setTranslate()), u && (r && (m.navigation.nextEl = r), n && (m.navigation.prevEl = n), g.init(), g.update()), s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && e.changeDirection(i.direction, !1), e.update()
                    }({
                        swiper: C.current,
                        slides: L,
                        passedParams: P,
                        changedParams: e,
                        nextEl: T.current,
                        prevEl: E.current,
                        scrollbarEl: $.current,
                        paginationEl: x.current
                    }), () => {
                        detachEvents()
                    }
                }), useIsomorphicLayoutEffect(() => {
                    updateOnVirtualData(C.current)
                }, [f]), s.createElement(l, _extends({
                    ref: _,
                    className: uniqueClasses(`${h}${i?` ${i}`:""}`)
                }, M), s.createElement(a.Provider, {
                    value: C.current
                }, D["container-start"], s.createElement(o, {
                    className: "swiper-wrapper"
                }, D["wrapper-start"], k.virtual ? function(e, t, i) {
                    if (!i) return null;
                    let r = e.isHorizontal() ? {
                        [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                    } : {
                        top: `${i.offset}px`
                    };
                    return t.filter((e, t) => t >= i.from && t <= i.to).map(t => s.cloneElement(t, {
                        swiper: e,
                        style: r
                    }))
                }(C.current, L, f) : !k.loop || C.current && C.current.destroyed ? L.map(e => s.cloneElement(e, {
                    swiper: C.current
                })) : function(e, t, i) {
                    let r = t.map((t, i) => s.cloneElement(t, {
                        swiper: e,
                        "data-swiper-slide-index": i
                    }));

                    function duplicateSlide(e, t, r) {
                        return s.cloneElement(e, {
                            key: `${e.key}-duplicate-${t}-${r}`,
                            className: `${e.props.className||""} ${i.slideDuplicateClass}`
                        })
                    }
                    if (i.loopFillGroupWithBlank) {
                        let e = i.slidesPerGroup - r.length % i.slidesPerGroup;
                        if (e !== i.slidesPerGroup)
                            for (let t = 0; t < e; t += 1) {
                                let e = s.createElement("div", {
                                    className: `${i.slideClass} ${i.slideBlankClass}`
                                });
                                r.push(e)
                            }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length);
                    let n = calcLoopedSlides(r, i),
                        l = [],
                        a = [];
                    for (let e = 0; e < n; e += 1) {
                        let t = e - Math.floor(e / r.length) * r.length;
                        a.push(duplicateSlide(r[t], e, "append")), l.unshift(duplicateSlide(r[r.length - t - 1], e, "prepend"))
                    }
                    return e && (e.loopedSlides = n), [...l, ...r, ...a]
                }(C.current, L, k), D["wrapper-end"]), needsNavigation(k) && s.createElement(s.Fragment, null, s.createElement("div", {
                    ref: E,
                    className: "swiper-button-prev"
                }), s.createElement("div", {
                    ref: T,
                    className: "swiper-button-next"
                })), needsScrollbar(k) && s.createElement("div", {
                    ref: $,
                    className: "swiper-scrollbar"
                }), needsPagination(k) && s.createElement("div", {
                    ref: x,
                    className: "swiper-pagination"
                }), D["container-end"]))
            });

            function swiper_slide_extends() {
                return (swiper_slide_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            o.displayName = "Swiper";
            let d = (0, s.forwardRef)(function(e, t) {
                let {
                    tag: i = "div",
                    children: r,
                    className: n = "",
                    swiper: a,
                    zoom: o,
                    virtualIndex: d,
                    ...c
                } = void 0 === e ? {} : e, p = (0, s.useRef)(null), [u, h] = (0, s.useState)("swiper-slide");

                function updateClasses(e, t, i) {
                    t === p.current && h(i)
                }
                useIsomorphicLayoutEffect(() => {
                    if (t && (t.current = p.current), p.current && a) {
                        if (a.destroyed) {
                            "swiper-slide" !== u && h("swiper-slide");
                            return
                        }
                        return a.on("_slideClass", updateClasses), () => {
                            a && a.off("_slideClass", updateClasses)
                        }
                    }
                }), useIsomorphicLayoutEffect(() => {
                    a && p.current && !a.destroyed && h(a.getSlideClasses(p.current))
                }, [a]);
                let m = {
                        isActive: u.indexOf("swiper-slide-active") >= 0 || u.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: u.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: u.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: u.indexOf("swiper-slide-prev") >= 0 || u.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: u.indexOf("swiper-slide-next") >= 0 || u.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    renderChildren = () => "function" == typeof r ? r(m) : r;
                return s.createElement(i, swiper_slide_extends({
                    ref: p,
                    className: uniqueClasses(`${u}${n?` ${n}`:""}`),
                    "data-swiper-slide-index": d
                }, c), s.createElement(l.Provider, {
                    value: m
                }, o ? s.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof o ? o : void 0
                }, renderChildren()) : renderChildren()))
            });
            d.displayName = "SwiperSlide"
        },
        71911: function(e, t, i) {
            let s, r, n;

            function ssr_window_esm_isObject(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function extend(e = {}, t = {}) {
                Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : ssr_window_esm_isObject(t[i]) && ssr_window_esm_isObject(e[i]) && Object.keys(t[i]).length > 0 && extend(e[i], t[i])
                })
            }
            i.d(t, {
                W_: function() {
                    return Navigation
                },
                tl: function() {
                    return Pagination
                },
                ZP: function() {
                    return m
                }
            });
            let l = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
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
                let e = "undefined" != typeof document ? document : {};
                return extend(e, l), e
            }
            let a = {
                document: l,
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
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function ssr_window_esm_getWindow() {
                let e = "undefined" != typeof window ? window : {};
                return extend(e, a), e
            }
            let Dom7 = class Dom7 extends Array {
                constructor(e) {
                    "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                        let t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
                }
            };

            function arrayFlat(e = []) {
                let t = [];
                return e.forEach(e => {
                    Array.isArray(e) ? t.push(...arrayFlat(e)) : t.push(e)
                }), t
            }

            function arrayFilter(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function dom7_esm_$(e, t) {
                let i = ssr_window_esm_getWindow(),
                    s = ssr_window_esm_getDocument(),
                    r = [];
                if (!t && e instanceof Dom7) return e;
                if (!e) return new Dom7(r);
                if ("string" == typeof e) {
                    let i = e.trim();
                    if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
                        let e = "div";
                        0 === i.indexOf("<li") && (e = "ul"), 0 === i.indexOf("<tr") && (e = "tbody"), (0 === i.indexOf("<td") || 0 === i.indexOf("<th")) && (e = "tr"), 0 === i.indexOf("<tbody") && (e = "table"), 0 === i.indexOf("<option") && (e = "select");
                        let t = s.createElement(e);
                        t.innerHTML = i;
                        for (let e = 0; e < t.childNodes.length; e += 1) r.push(t.childNodes[e])
                    } else r = function(e, t) {
                        if ("string" != typeof e) return [e];
                        let i = [],
                            s = t.querySelectorAll(e);
                        for (let e = 0; e < s.length; e += 1) i.push(s[e]);
                        return i
                    }(e.trim(), t || s)
                } else if (e.nodeType || e === i || e === s) r.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof Dom7) return e;
                    r = e
                }
                return new Dom7(function(e) {
                    let t = [];
                    for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                    return t
                }(r))
            }
            dom7_esm_$.fn = Dom7.prototype;
            let o = "resize scroll".split(" ");

            function shortcut(e) {
                return function(...t) {
                    if (void 0 === t[0]) {
                        for (let t = 0; t < this.length; t += 1) 0 > o.indexOf(e) && (e in this[t] ? this[t][e]() : dom7_esm_$(this[t]).trigger(e));
                        return this
                    }
                    return this.on(e, ...t)
                }
            }
            shortcut("click"), shortcut("blur"), shortcut("focus"), shortcut("focusin"), shortcut("focusout"), shortcut("keyup"), shortcut("keydown"), shortcut("keypress"), shortcut("submit"), shortcut("change"), shortcut("mousedown"), shortcut("mousemove"), shortcut("mouseup"), shortcut("mouseenter"), shortcut("mouseleave"), shortcut("mouseout"), shortcut("mouseover"), shortcut("touchstart"), shortcut("touchend"), shortcut("touchmove"), shortcut("resize"), shortcut("scroll");
            let d = {
                addClass: function(...e) {
                    let t = arrayFlat(e.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.add(...t)
                    }), this
                },
                removeClass: function(...e) {
                    let t = arrayFlat(e.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.remove(...t)
                    }), this
                },
                hasClass: function(...e) {
                    let t = arrayFlat(e.map(e => e.split(" ")));
                    return arrayFilter(this, e => t.filter(t => e.classList.contains(t)).length > 0).length > 0
                },
                toggleClass: function(...e) {
                    let t = arrayFlat(e.map(e => e.split(" ")));
                    this.forEach(e => {
                        t.forEach(t => {
                            e.classList.toggle(t)
                        })
                    })
                },
                attr: function(e, t) {
                    if (1 == arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let i = 0; i < this.length; i += 1)
                        if (2 == arguments.length) this[i].setAttribute(e, t);
                        else
                            for (let t in e) this[i][t] = e[t], this[i].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                    return this
                },
                on: function(...e) {
                    let t, [i, s, r, n] = e;

                    function handleLiveEvent(e) {
                        let t = e.target;
                        if (!t) return;
                        let i = e.target.dom7EventData || [];
                        if (0 > i.indexOf(e) && i.unshift(e), dom7_esm_$(t).is(s)) r.apply(t, i);
                        else {
                            let e = dom7_esm_$(t).parents();
                            for (let t = 0; t < e.length; t += 1) dom7_esm_$(e[t]).is(s) && r.apply(e[t], i)
                        }
                    }

                    function handleEvent(e) {
                        let t = e && e.target && e.target.dom7EventData || [];
                        0 > t.indexOf(e) && t.unshift(e), r.apply(this, t)
                    }
                    "function" == typeof e[1] && ([i, r, n] = e, s = void 0), n || (n = !1);
                    let l = i.split(" ");
                    for (let e = 0; e < this.length; e += 1) {
                        let i = this[e];
                        if (s)
                            for (t = 0; t < l.length; t += 1) {
                                let e = l[t];
                                i.dom7LiveListeners || (i.dom7LiveListeners = {}), i.dom7LiveListeners[e] || (i.dom7LiveListeners[e] = []), i.dom7LiveListeners[e].push({
                                    listener: r,
                                    proxyListener: handleLiveEvent
                                }), i.addEventListener(e, handleLiveEvent, n)
                            } else
                                for (t = 0; t < l.length; t += 1) {
                                    let e = l[t];
                                    i.dom7Listeners || (i.dom7Listeners = {}), i.dom7Listeners[e] || (i.dom7Listeners[e] = []), i.dom7Listeners[e].push({
                                        listener: r,
                                        proxyListener: handleEvent
                                    }), i.addEventListener(e, handleEvent, n)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, i, s, r] = e;
                    "function" == typeof e[1] && ([t, s, r] = e, i = void 0), r || (r = !1);
                    let n = t.split(" ");
                    for (let e = 0; e < n.length; e += 1) {
                        let t = n[e];
                        for (let e = 0; e < this.length; e += 1) {
                            let n;
                            let l = this[e];
                            if (!i && l.dom7Listeners ? n = l.dom7Listeners[t] : i && l.dom7LiveListeners && (n = l.dom7LiveListeners[t]), n && n.length)
                                for (let e = n.length - 1; e >= 0; e -= 1) {
                                    let i = n[e];
                                    s && i.listener === s ? (l.removeEventListener(t, i.proxyListener, r), n.splice(e, 1)) : s && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === s ? (l.removeEventListener(t, i.proxyListener, r), n.splice(e, 1)) : s || (l.removeEventListener(t, i.proxyListener, r), n.splice(e, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    let t = ssr_window_esm_getWindow(),
                        i = e[0].split(" "),
                        s = e[1];
                    for (let r = 0; r < i.length; r += 1) {
                        let n = i[r];
                        for (let i = 0; i < this.length; i += 1) {
                            let r = this[i];
                            if (t.CustomEvent) {
                                let i = new t.CustomEvent(n, {
                                    detail: s,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                r.dom7EventData = e.filter((e, t) => t > 0), r.dispatchEvent(i), r.dom7EventData = [], delete r.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    let t = this;
                    return e && t.on("transitionend", function fireCallBack(i) {
                        i.target === this && (e.call(this, i), t.off("transitionend", fireCallBack))
                    }), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            let e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            let e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    let e = ssr_window_esm_getWindow();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        let e = ssr_window_esm_getWindow(),
                            t = ssr_window_esm_getDocument(),
                            i = this[0],
                            s = i.getBoundingClientRect(),
                            r = t.body,
                            n = i.clientTop || r.clientTop || 0,
                            l = i.clientLeft || r.clientLeft || 0,
                            a = i === e ? e.scrollY : i.scrollTop,
                            o = i === e ? e.scrollX : i.scrollLeft;
                        return {
                            top: s.top + a - n,
                            left: s.left + o - l
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    let i;
                    let s = ssr_window_esm_getWindow();
                    if (1 == arguments.length) {
                        if ("string" == typeof e) {
                            if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
                        } else {
                            for (i = 0; i < this.length; i += 1)
                                for (let t in e) this[i].style[t] = e[t];
                            return this
                        }
                    }
                    if (2 == arguments.length && "string" == typeof e)
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this
                },
                each: function(e) {
                    return e && this.forEach((t, i) => {
                        e.apply(t, [t, i])
                    }), this
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    let t, i;
                    let s = ssr_window_esm_getWindow(),
                        r = ssr_window_esm_getDocument(),
                        n = this[0];
                    if (!n || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (n.matches) return n.matches(e);
                        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                        if (n.msMatchesSelector) return n.msMatchesSelector(e);
                        for (i = 0, t = dom7_esm_$(e); i < t.length; i += 1)
                            if (t[i] === n) return !0;
                        return !1
                    }
                    if (e === r) return n === r;
                    if (e === s) return n === s;
                    if (e.nodeType || e instanceof Dom7) {
                        for (i = 0, t = e.nodeType ? [e] : e; i < t.length; i += 1)
                            if (t[i] === n) return !0
                    }
                    return !1
                },
                index: function() {
                    let e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    let t = this.length;
                    if (e > t - 1) return dom7_esm_$([]);
                    if (e < 0) {
                        let i = t + e;
                        return i < 0 ? dom7_esm_$([]) : dom7_esm_$([this[i]])
                    }
                    return dom7_esm_$([this[e]])
                },
                append: function(...e) {
                    let t;
                    let i = ssr_window_esm_getDocument();
                    for (let s = 0; s < e.length; s += 1) {
                        t = e[s];
                        for (let e = 0; e < this.length; e += 1)
                            if ("string" == typeof t) {
                                let s = i.createElement("div");
                                for (s.innerHTML = t; s.firstChild;) this[e].appendChild(s.firstChild)
                            } else if (t instanceof Dom7)
                            for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
                        else this[e].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    let t, i;
                    let s = ssr_window_esm_getDocument();
                    for (t = 0; t < this.length; t += 1)
                        if ("string" == typeof e) {
                            let r = s.createElement("div");
                            for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(r.childNodes[i], this[t].childNodes[0])
                        } else if (e instanceof Dom7)
                        for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this
                },
                next: function(e) {
                    if (this.length > 0) {
                        if (e) return this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(e) ? dom7_esm_$([this[0].nextElementSibling]) : dom7_esm_$([]);
                        if (this[0].nextElementSibling) return dom7_esm_$([this[0].nextElementSibling])
                    }
                    return dom7_esm_$([])
                },
                nextAll: function(e) {
                    let t = [],
                        i = this[0];
                    if (!i) return dom7_esm_$([]);
                    for (; i.nextElementSibling;) {
                        let s = i.nextElementSibling;
                        e ? dom7_esm_$(s).is(e) && t.push(s) : t.push(s), i = s
                    }
                    return dom7_esm_$(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        let t = this[0];
                        if (e) return t.previousElementSibling && dom7_esm_$(t.previousElementSibling).is(e) ? dom7_esm_$([t.previousElementSibling]) : dom7_esm_$([]);
                        if (t.previousElementSibling) return dom7_esm_$([t.previousElementSibling])
                    }
                    return dom7_esm_$([])
                },
                prevAll: function(e) {
                    let t = [],
                        i = this[0];
                    if (!i) return dom7_esm_$([]);
                    for (; i.previousElementSibling;) {
                        let s = i.previousElementSibling;
                        e ? dom7_esm_$(s).is(e) && t.push(s) : t.push(s), i = s
                    }
                    return dom7_esm_$(t)
                },
                parent: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? dom7_esm_$(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                    return dom7_esm_$(t)
                },
                parents: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].parentNode;
                        for (; s;) e ? dom7_esm_$(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
                    }
                    return dom7_esm_$(t)
                },
                closest: function(e) {
                    let t = this;
                    return void 0 === e ? dom7_esm_$([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].querySelectorAll(e);
                        for (let e = 0; e < s.length; e += 1) t.push(s[e])
                    }
                    return dom7_esm_$(t)
                },
                children: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].children;
                        for (let i = 0; i < s.length; i += 1)(!e || dom7_esm_$(s[i]).is(e)) && t.push(s[i])
                    }
                    return dom7_esm_$(t)
                },
                filter: function(e) {
                    let t = arrayFilter(this, e);
                    return dom7_esm_$(t)
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };

            function utils_nextTick(e, t = 0) {
                return setTimeout(e, t)
            }

            function utils_now() {
                return Date.now()
            }

            function utils_isObject(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function utils_extend(...e) {
                let t = Object(e[0]),
                    i = ["__proto__", "constructor", "prototype"];
                for (let s = 1; s < e.length; s += 1) {
                    let r = e[s];
                    if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                        let e = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                        for (let i = 0, s = e.length; i < s; i += 1) {
                            let s = e[i],
                                n = Object.getOwnPropertyDescriptor(r, s);
                            void 0 !== n && n.enumerable && (utils_isObject(t[s]) && utils_isObject(r[s]) ? r[s].__swiper__ ? t[s] = r[s] : utils_extend(t[s], r[s]) : !utils_isObject(t[s]) && utils_isObject(r[s]) ? (t[s] = {}, r[s].__swiper__ ? t[s] = r[s] : utils_extend(t[s], r[s])) : t[s] = r[s])
                        }
                    }
                }
                return t
            }

            function utils_setCSSProperty(e, t, i) {
                e.style.setProperty(t, i)
            }

            function animateCSSModeScroll({
                swiper: e,
                targetPosition: t,
                side: i
            }) {
                let s;
                let r = ssr_window_esm_getWindow(),
                    n = -e.translate,
                    l = null,
                    a = e.params.speed;
                e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
                let o = t > n ? "next" : "prev",
                    isOutOfBound = (e, t) => "next" === o && e >= t || "prev" === o && e <= t,
                    animate = () => {
                        s = new Date().getTime(), null === l && (l = s);
                        let o = Math.max(Math.min((s - l) / a, 1), 0),
                            d = n + (.5 - Math.cos(o * Math.PI) / 2) * (t - n);
                        if (isOutOfBound(d, t) && (d = t), e.wrapperEl.scrollTo({
                                [i]: d
                            }), isOutOfBound(d, t)) {
                            e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                                    [i]: d
                                })
                            }), r.cancelAnimationFrame(e.cssModeFrameID);
                            return
                        }
                        e.cssModeFrameID = r.requestAnimationFrame(animate)
                    };
                animate()
            }

            function getSupport() {
                return s || (s = function() {
                    let e = ssr_window_esm_getWindow(),
                        t = ssr_window_esm_getDocument();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            let t = !1;
                            try {
                                let i = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, i)
                            } catch (e) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), s
            }

            function transitionEmit({
                swiper: e,
                runCallbacks: t,
                direction: i,
                step: s
            }) {
                let {
                    activeIndex: r,
                    previousIndex: n
                } = e, l = i;
                if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), e.emit(`transition${s}`), t && r !== n) {
                    if ("reset" === l) {
                        e.emit(`slideResetTransition${s}`);
                        return
                    }
                    e.emit(`slideChangeTransition${s}`), "next" === l ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
                }
            }

            function onTouchStart(e) {
                let t = ssr_window_esm_getDocument(),
                    i = ssr_window_esm_getWindow(),
                    s = this.touchEventsData,
                    {
                        params: r,
                        touches: n,
                        enabled: l
                    } = this;
                if (!l || this.animating && r.preventInteractionOnTransition) return;
                !this.animating && r.cssMode && r.loop && this.loopFix();
                let a = e;
                a.originalEvent && (a = a.originalEvent);
                let o = dom7_esm_$(a.target);
                if ("wrapper" === r.touchEventsTarget && !o.closest(this.wrapperEl).length || (s.isTouchEvent = "touchstart" === a.type, !s.isTouchEvent && "which" in a && 3 === a.which || !s.isTouchEvent && "button" in a && a.button > 0 || s.isTouched && s.isMoved)) return;
                let d = !!r.noSwipingClass && "" !== r.noSwipingClass,
                    c = e.composedPath ? e.composedPath() : e.path;
                d && a.target && a.target.shadowRoot && c && (o = dom7_esm_$(c[0]));
                let p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                    u = !!(a.target && a.target.shadowRoot);
                if (r.noSwiping && (u ? function(e, t = this) {
                        return function __closestFrom(t) {
                            if (!t || t === ssr_window_esm_getDocument() || t === ssr_window_esm_getWindow()) return null;
                            t.assignedSlot && (t = t.assignedSlot);
                            let i = t.closest(e);
                            return i || t.getRootNode ? i || __closestFrom(t.getRootNode().host) : null
                        }(t)
                    }(p, o[0]) : o.closest(p)[0])) {
                    this.allowClick = !0;
                    return
                }
                if (r.swipeHandler && !o.closest(r.swipeHandler)[0]) return;
                n.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, n.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                let h = n.currentX,
                    m = n.currentY,
                    f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    g = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (f && (h <= g || h >= i.innerWidth - g)) {
                    if ("prevent" !== f) return;
                    e.preventDefault()
                }
                if (Object.assign(s, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), n.startX = h, n.startY = m, s.touchStartTime = utils_now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== a.type) {
                    let e = !0;
                    o.is(s.focusableElements) && (e = !1, "SELECT" === o[0].nodeName && (s.isTouched = !1)), t.activeElement && dom7_esm_$(t.activeElement).is(s.focusableElements) && t.activeElement !== o[0] && t.activeElement.blur();
                    let i = e && this.allowTouchMove && r.touchStartPreventDefault;
                    (r.touchStartForcePreventDefault || i) && !o[0].isContentEditable && a.preventDefault()
                }
                this.params.freeMode && this.params.freeMode.enabled && this.freeMode && this.animating && !r.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", a)
            }

            function onTouchMove(e) {
                let t = ssr_window_esm_getDocument(),
                    i = this.touchEventsData,
                    {
                        params: s,
                        touches: r,
                        rtlTranslate: n,
                        enabled: l
                    } = this;
                if (!l) return;
                let a = e;
                if (a.originalEvent && (a = a.originalEvent), !i.isTouched) {
                    i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", a);
                    return
                }
                if (i.isTouchEvent && "touchmove" !== a.type) return;
                let o = "touchmove" === a.type && a.targetTouches && (a.targetTouches[0] || a.changedTouches[0]),
                    d = "touchmove" === a.type ? o.pageX : a.pageX,
                    c = "touchmove" === a.type ? o.pageY : a.pageY;
                if (a.preventedByNestedSwiper) {
                    r.startX = d, r.startY = c;
                    return
                }
                if (!this.allowTouchMove) {
                    dom7_esm_$(a.target).is(i.focusableElements) || (this.allowClick = !1), i.isTouched && (Object.assign(r, {
                        startX: d,
                        startY: c,
                        currentX: d,
                        currentY: c
                    }), i.touchStartTime = utils_now());
                    return
                }
                if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
                    if (this.isVertical()) {
                        if (c < r.startY && this.translate <= this.maxTranslate() || c > r.startY && this.translate >= this.minTranslate()) {
                            i.isTouched = !1, i.isMoved = !1;
                            return
                        }
                    } else if (d < r.startX && this.translate <= this.maxTranslate() || d > r.startX && this.translate >= this.minTranslate()) return
                }
                if (i.isTouchEvent && t.activeElement && a.target === t.activeElement && dom7_esm_$(a.target).is(i.focusableElements)) {
                    i.isMoved = !0, this.allowClick = !1;
                    return
                }
                if (i.allowTouchCallbacks && this.emit("touchMove", a), a.targetTouches && a.targetTouches.length > 1) return;
                r.currentX = d, r.currentY = c;
                let p = r.currentX - r.startX,
                    u = r.currentY - r.startY;
                if (this.params.threshold && Math.sqrt(p ** 2 + u ** 2) < this.params.threshold) return;
                if (void 0 === i.isScrolling) {
                    let e;
                    this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (e = 180 * Math.atan2(Math.abs(u), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
                }
                if (i.isScrolling && this.emit("touchMoveOpposite", a), void 0 === i.startMoving && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0), i.isScrolling) {
                    i.isTouched = !1;
                    return
                }
                if (!i.startMoving) return;
                this.allowClick = !1, !s.cssMode && a.cancelable && a.preventDefault(), s.touchMoveStopPropagation && !s.nested && a.stopPropagation(), i.isMoved || (s.loop && !s.cssMode && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, s.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", a)), this.emit("sliderMove", a), i.isMoved = !0;
                let h = this.isHorizontal() ? p : u;
                r.diff = h, h *= s.touchRatio, n && (h = -h), this.swipeDirection = h > 0 ? "prev" : "next", i.currentTranslate = h + i.startTranslate;
                let m = !0,
                    f = s.resistanceRatio;
                if (s.touchReleaseOnEdges && (f = 0), h > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + i.startTranslate + h) ** f)) : h < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - i.startTranslate - h) ** f)), m && (a.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), this.allowSlidePrev || this.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                    if (Math.abs(h) > s.threshold || i.allowThresholdMove) {
                        if (!i.allowThresholdMove) {
                            i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                            return
                        }
                    } else {
                        i.currentTranslate = i.startTranslate;
                        return
                    }
                }
                s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && this.freeMode || s.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), this.params.freeMode && s.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
            }

            function onTouchEnd(e) {
                let t;
                let i = this,
                    s = i.touchEventsData,
                    {
                        params: r,
                        touches: n,
                        rtlTranslate: l,
                        slidesGrid: a,
                        enabled: o
                    } = i;
                if (!o) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && i.emit("touchEnd", d), s.allowTouchCallbacks = !1, !s.isTouched) {
                    s.isMoved && r.grabCursor && i.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
                    return
                }
                r.grabCursor && s.isMoved && s.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
                let c = utils_now(),
                    p = c - s.touchStartTime;
                if (i.allowClick) {
                    let e = d.path || d.composedPath && d.composedPath();
                    i.updateClickedSlide(e && e[0] || d.target), i.emit("tap click", d), p < 300 && c - s.lastClickTime < 300 && i.emit("doubleTap doubleClick", d)
                }
                if (s.lastClickTime = utils_now(), utils_nextTick(() => {
                        i.destroyed || (i.allowClick = !0)
                    }), !s.isTouched || !s.isMoved || !i.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate) {
                    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
                    return
                }
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, t = r.followFinger ? l ? i.translate : -i.translate : -s.currentTranslate, r.cssMode) return;
                if (i.params.freeMode && r.freeMode.enabled) {
                    i.freeMode.onTouchEnd({
                        currentPos: t
                    });
                    return
                }
                let u = 0,
                    h = i.slidesSizesGrid[0];
                for (let e = 0; e < a.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                    let i = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                    void 0 !== a[e + i] ? t >= a[e] && t < a[e + i] && (u = e, h = a[e + i] - a[e]) : t >= a[e] && (u = e, h = a[a.length - 1] - a[a.length - 2])
                }
                let m = null,
                    f = null;
                r.rewind && (i.isBeginning ? f = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (m = 0));
                let g = (t - a[u]) / h,
                    v = u < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                if (p > r.longSwipesMs) {
                    if (!r.longSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    "next" === i.swipeDirection && (g >= r.longSwipesRatio ? i.slideTo(r.rewind && i.isEnd ? m : u + v) : i.slideTo(u)), "prev" === i.swipeDirection && (g > 1 - r.longSwipesRatio ? i.slideTo(u + v) : null !== f && g < 0 && Math.abs(g) > r.longSwipesRatio ? i.slideTo(f) : i.slideTo(u))
                } else {
                    if (!r.shortSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    let e = i.navigation && (d.target === i.navigation.nextEl || d.target === i.navigation.prevEl);
                    e ? d.target === i.navigation.nextEl ? i.slideTo(u + v) : i.slideTo(u) : ("next" === i.swipeDirection && i.slideTo(null !== m ? m : u + v), "prev" === i.swipeDirection && i.slideTo(null !== f ? f : u))
                }
            }

            function onResize() {
                let {
                    params: e,
                    el: t
                } = this;
                if (t && 0 === t.offsetWidth) return;
                e.breakpoints && this.setBreakpoint();
                let {
                    allowSlideNext: i,
                    allowSlidePrev: s,
                    snapGrid: r
                } = this;
                this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && r !== this.snapGrid && this.checkOverflow()
            }

            function onClick(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function onScroll() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: i
                } = this;
                if (!i) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let s = this.maxTranslate() - this.minTranslate();
                (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }
            Object.keys(d).forEach(e => {
                Object.defineProperty(dom7_esm_$.fn, e, {
                    value: d[e],
                    writable: !0
                })
            });
            let c = !1;

            function dummyEventListener() {}
            let events = (e, t) => {
                    let i = ssr_window_esm_getDocument(),
                        {
                            params: s,
                            touchEvents: r,
                            el: n,
                            wrapperEl: l,
                            device: a,
                            support: o
                        } = e,
                        d = !!s.nested,
                        c = "on" === t ? "addEventListener" : "removeEventListener";
                    if (o.touch) {
                        let t = "touchstart" === r.start && !!o.passiveListener && !!s.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                        n[c](r.start, e.onTouchStart, t), n[c](r.move, e.onTouchMove, o.passiveListener ? {
                            passive: !1,
                            capture: d
                        } : d), n[c](r.end, e.onTouchEnd, t), r.cancel && n[c](r.cancel, e.onTouchEnd, t)
                    } else n[c](r.start, e.onTouchStart, !1), i[c](r.move, e.onTouchMove, d), i[c](r.end, e.onTouchEnd, !1);
                    (s.preventClicks || s.preventClicksPropagation) && n[c]("click", e.onClick, !0), s.cssMode && l[c]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : e[t]("observerUpdate", onResize, !0)
                },
                isGridEnabled = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var p = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
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
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let u = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function onceHandler(...i) {
                                s.off(e, onceHandler), onceHandler.__emitterProxy && delete onceHandler.__emitterProxy, t.apply(s, i)
                            }
                            return onceHandler.__emitterProxy = t, s.on(e, onceHandler, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit(...e) {
                            let t, i, s;
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
                            "string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0], i = e.slice(1, e.length), s = r) : (t = e[0].events, i = e[0].data, s = e[0].context || r), i.unshift(s);
                            let n = Array.isArray(t) ? t : t.split(" ");
                            return n.forEach(e => {
                                r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(t => {
                                    t.apply(s, [e, ...i])
                                }), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(e => {
                                    e.apply(s, i)
                                })
                            }), r
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.$el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function getDirectionLabel(e) {
                                return t.isHorizontal() ? e : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[e]
                            }

                            function getDirectionPropertyValue(e, t) {
                                return parseFloat(e.getPropertyValue(getDirectionLabel(t)) || 0)
                            }
                            let i = t.params,
                                {
                                    $wrapperEl: s,
                                    size: r,
                                    rtlTranslate: n,
                                    wrongRTL: l
                                } = t,
                                a = t.virtual && i.virtual.enabled,
                                o = a ? t.virtual.slides.length : t.slides.length,
                                d = s.children(`.${t.params.slideClass}`),
                                c = a ? t.virtual.slides.length : d.length,
                                p = [],
                                u = [],
                                h = [],
                                m = i.slidesOffsetBefore;
                            "function" == typeof m && (m = i.slidesOffsetBefore.call(t));
                            let f = i.slidesOffsetAfter;
                            "function" == typeof f && (f = i.slidesOffsetAfter.call(t));
                            let g = t.snapGrid.length,
                                v = t.slidesGrid.length,
                                w = i.spaceBetween,
                                b = -m,
                                _ = 0,
                                C = 0;
                            if (void 0 === r) return;
                            "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * r), t.virtualSize = -w, n ? d.css({
                                marginLeft: "",
                                marginBottom: "",
                                marginTop: ""
                            }) : d.css({
                                marginRight: "",
                                marginBottom: "",
                                marginTop: ""
                            }), i.centeredSlides && i.cssMode && (utils_setCSSProperty(t.wrapperEl, "--swiper-centered-offset-before", ""), utils_setCSSProperty(t.wrapperEl, "--swiper-centered-offset-after", ""));
                            let S = i.grid && i.grid.rows > 1 && t.grid;
                            S && t.grid.initSlides(c);
                            let y = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(e => void 0 !== i.breakpoints[e].slidesPerView).length > 0;
                            for (let s = 0; s < c; s += 1) {
                                e = 0;
                                let n = d.eq(s);
                                if (S && t.grid.updateSlide(s, n, c, getDirectionLabel), "none" !== n.css("display")) {
                                    if ("auto" === i.slidesPerView) {
                                        y && (d[s].style[getDirectionLabel("width")] = "");
                                        let r = getComputedStyle(n[0]),
                                            l = n[0].style.transform,
                                            a = n[0].style.webkitTransform;
                                        if (l && (n[0].style.transform = "none"), a && (n[0].style.webkitTransform = "none"), i.roundLengths) e = t.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                        else {
                                            let t = getDirectionPropertyValue(r, "width"),
                                                i = getDirectionPropertyValue(r, "padding-left"),
                                                s = getDirectionPropertyValue(r, "padding-right"),
                                                l = getDirectionPropertyValue(r, "margin-left"),
                                                a = getDirectionPropertyValue(r, "margin-right"),
                                                o = r.getPropertyValue("box-sizing");
                                            if (o && "border-box" === o) e = t + l + a;
                                            else {
                                                let {
                                                    clientWidth: r,
                                                    offsetWidth: o
                                                } = n[0];
                                                e = t + i + s + l + a + (o - r)
                                            }
                                        }
                                        l && (n[0].style.transform = l), a && (n[0].style.webkitTransform = a), i.roundLengths && (e = Math.floor(e))
                                    } else e = (r - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (e = Math.floor(e)), d[s] && (d[s].style[getDirectionLabel("width")] = `${e}px`);
                                    d[s] && (d[s].swiperSlideSize = e), h.push(e), i.centeredSlides ? (b = b + e / 2 + _ / 2 + w, 0 === _ && 0 !== s && (b = b - r / 2 - w), 0 === s && (b = b - r / 2 - w), .001 > Math.abs(b) && (b = 0), i.roundLengths && (b = Math.floor(b)), C % i.slidesPerGroup == 0 && p.push(b), u.push(b)) : (i.roundLengths && (b = Math.floor(b)), (C - Math.min(t.params.slidesPerGroupSkip, C)) % t.params.slidesPerGroup == 0 && p.push(b), u.push(b), b = b + e + w), t.virtualSize += e + w, _ = e, C += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, r) + f, n && l && ("slide" === i.effect || "coverflow" === i.effect) && s.css({
                                    width: `${t.virtualSize+i.spaceBetween}px`
                                }), i.setWrapperSize && s.css({
                                    [getDirectionLabel("width")]: `${t.virtualSize+i.spaceBetween}px`
                                }), S && t.grid.updateWrapperSize(e, p, getDirectionLabel), !i.centeredSlides) {
                                let e = [];
                                for (let s = 0; s < p.length; s += 1) {
                                    let n = p[s];
                                    i.roundLengths && (n = Math.floor(n)), p[s] <= t.virtualSize - r && e.push(n)
                                }
                                p = e, Math.floor(t.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(t.virtualSize - r)
                            }
                            if (0 === p.length && (p = [0]), 0 !== i.spaceBetween) {
                                let e = t.isHorizontal() && n ? "marginLeft" : getDirectionLabel("marginRight");
                                d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
                                    [e]: `${w}px`
                                })
                            }
                            if (i.centeredSlides && i.centeredSlidesBounds) {
                                let e = 0;
                                h.forEach(t => {
                                    e += t + (i.spaceBetween ? i.spaceBetween : 0)
                                }), e -= i.spaceBetween;
                                let t = e - r;
                                p = p.map(e => e < 0 ? -m : e > t ? t + f : e)
                            }
                            if (i.centerInsufficientSlides) {
                                let e = 0;
                                if (h.forEach(t => {
                                        e += t + (i.spaceBetween ? i.spaceBetween : 0)
                                    }), (e -= i.spaceBetween) < r) {
                                    let t = (r - e) / 2;
                                    p.forEach((e, i) => {
                                        p[i] = e - t
                                    }), u.forEach((e, i) => {
                                        u[i] = e + t
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: d,
                                    snapGrid: p,
                                    slidesGrid: u,
                                    slidesSizesGrid: h
                                }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                                utils_setCSSProperty(t.wrapperEl, "--swiper-centered-offset-before", `${-p[0]}px`), utils_setCSSProperty(t.wrapperEl, "--swiper-centered-offset-after", `${t.size/2-h[h.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    i = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
                            }
                            if (c !== o && t.emit("slidesLengthChange"), p.length !== g && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), u.length !== v && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), !a && !i.cssMode && ("slide" === i.effect || "fade" === i.effect)) {
                                let e = `${i.containerModifierClass}backface-hidden`,
                                    s = t.$el.hasClass(e);
                                c <= i.maxBackfaceHiddenSlides ? s || t.$el.addClass(e) : s && t.$el.removeClass(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                s = [],
                                r = i.virtual && i.params.virtual.enabled,
                                n = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let getSlideByIndex = e => r ? i.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : i.slides.eq(e)[0];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || dom7_esm_$([])).each(e => {
                                    s.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let e = i.activeIndex + t;
                                        if (e > i.slides.length && !r) break;
                                        s.push(getSlideByIndex(e))
                                    }
                            } else s.push(getSlideByIndex(i.activeIndex));
                            for (t = 0; t < s.length; t += 1)
                                if (void 0 !== s[t]) {
                                    let e = s[t].offsetHeight;
                                    n = e > n ? e : n
                                }(n || 0 === n) && i.$wrapperEl.css("height", `${n}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides;
                            for (let t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                        },
                        updateSlidesProgress: function(e = this && this.translate || 0) {
                            let t = this.params,
                                {
                                    slides: i,
                                    rtlTranslate: s,
                                    snapGrid: r
                                } = this;
                            if (0 === i.length) return;
                            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                            let n = -e;
                            s && (n = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            for (let e = 0; e < i.length; e += 1) {
                                let l = i[e],
                                    a = l.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (a -= i[0].swiperSlideOffset);
                                let o = (n + (t.centeredSlides ? this.minTranslate() : 0) - a) / (l.swiperSlideSize + t.spaceBetween),
                                    d = (n - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - a) / (l.swiperSlideSize + t.spaceBetween),
                                    c = -(n - a),
                                    p = c + this.slidesSizesGrid[e],
                                    u = c >= 0 && c < this.size - 1 || p > 1 && p <= this.size || c <= 0 && p >= this.size;
                                u && (this.visibleSlides.push(l), this.visibleSlidesIndexes.push(e), i.eq(e).addClass(t.slideVisibleClass)), l.progress = s ? -o : o, l.originalProgress = s ? -d : d
                            }
                            this.visibleSlides = dom7_esm_$(this.visibleSlides)
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                i = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: s,
                                    isBeginning: r,
                                    isEnd: n
                                } = this,
                                l = r,
                                a = n;
                            0 === i ? (s = 0, r = !0, n = !0) : (r = (s = (e - this.minTranslate()) / i) <= 0, n = s >= 1), Object.assign(this, {
                                progress: s,
                                isBeginning: r,
                                isEnd: n
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), n && !a && this.emit("reachEnd toEdge"), (l && !r || a && !n) && this.emit("fromEdge"), this.emit("progress", s)
                        },
                        updateSlidesClasses: function() {
                            let e;
                            let {
                                slides: t,
                                params: i,
                                $wrapperEl: s,
                                activeIndex: r,
                                realIndex: n
                            } = this, l = this.virtual && i.virtual.enabled;
                            t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), (e = l ? this.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${r}"]`) : t.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(i.slideDuplicateActiveClass));
                            let a = e.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
                            i.loop && 0 === a.length && (a = t.eq(0)).addClass(i.slideNextClass);
                            let o = e.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
                            i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (a.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t;
                            let i = this.rtlTranslate ? this.translate : -this.translate,
                                {
                                    slidesGrid: s,
                                    snapGrid: r,
                                    params: n,
                                    activeIndex: l,
                                    realIndex: a,
                                    snapIndex: o
                                } = this,
                                d = e;
                            if (void 0 === d) {
                                for (let e = 0; e < s.length; e += 1) void 0 !== s[e + 1] ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2 ? d = e : i >= s[e] && i < s[e + 1] && (d = e + 1) : i >= s[e] && (d = e);
                                n.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                            }
                            if (r.indexOf(i) >= 0) t = r.indexOf(i);
                            else {
                                let e = Math.min(n.slidesPerGroupSkip, d);
                                t = e + Math.floor((d - e) / n.slidesPerGroup)
                            }
                            if (t >= r.length && (t = r.length - 1), d === l) {
                                t !== o && (this.snapIndex = t, this.emit("snapIndexChange"));
                                return
                            }
                            let c = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                            Object.assign(this, {
                                snapIndex: t,
                                realIndex: c,
                                previousIndex: l,
                                activeIndex: d
                            }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), a !== c && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            let t;
                            let i = this.params,
                                s = dom7_esm_$(e).closest(`.${i.slideClass}`)[0],
                                r = !1;
                            if (s) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === s) {
                                        r = !0, t = e;
                                        break
                                    }
                            }
                            if (s && r) this.clickedSlide = s, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(dom7_esm_$(s).attr("data-swiper-slide-index"), 10) : this.clickedIndex = t;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                $wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let n = function(e, t = "x") {
                                let i, s, r;
                                let n = ssr_window_esm_getWindow(),
                                    l = function(e) {
                                        let t;
                                        let i = ssr_window_esm_getWindow();
                                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                                    }(e, null);
                                return n.WebKitCSSMatrix ? ((s = l.transform || l.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new n.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = n.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
                            }(r[0], e);
                            return i && (n = -n), n || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: i,
                                params: s,
                                $wrapperEl: r,
                                wrapperEl: n,
                                progress: l
                            } = this, a = 0, o = 0;
                            this.isHorizontal() ? a = i ? -e : e : o = e, s.roundLengths && (a = Math.floor(a), o = Math.floor(o)), s.cssMode ? n[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -a : -o : s.virtualTranslate || r.transform(`translate3d(${a}px, ${o}px, 0px)`), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? a : o;
                            let d = this.maxTranslate() - this.minTranslate();
                            (0 === d ? 0 : (e - this.minTranslate()) / d) !== l && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e = 0, t = this.params.speed, i = !0, s = !0, r) {
                            let n;
                            let l = this,
                                {
                                    params: a,
                                    wrapperEl: o
                                } = l;
                            if (l.animating && a.preventInteractionOnTransition) return !1;
                            let d = l.minTranslate(),
                                c = l.maxTranslate();
                            if (n = s && e > d ? d : s && e < c ? c : e, l.updateProgress(n), a.cssMode) {
                                let e = l.isHorizontal();
                                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -n;
                                else {
                                    if (!l.support.smoothScroll) return animateCSSModeScroll({
                                        swiper: l,
                                        targetPosition: -n,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    o.scrollTo({
                                        [e ? "left" : "top"]: -n,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (l.setTransition(0), l.setTranslate(n), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(n), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.$wrapperEl[0].removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.$wrapperEl[0].removeEventListener("webkitTransitionEnd", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, i && l.emit("transitionEnd"))
                            }), l.$wrapperEl[0].addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.$wrapperEl[0].addEventListener("webkitTransitionEnd", l.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), transitionEmit({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e = !0, t) {
                            let {
                                params: i
                            } = this;
                            this.animating = !1, i.cssMode || (this.setTransition(0), transitionEmit({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e = 0, t = this.params.speed, i = !0, s, r) {
                            let n;
                            if ("number" != typeof e && "string" != typeof e) throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                            if ("string" == typeof e) {
                                let t = parseInt(e, 10),
                                    i = isFinite(t);
                                if (!i) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = t
                            }
                            let l = this,
                                a = e;
                            a < 0 && (a = 0);
                            let {
                                params: o,
                                snapGrid: d,
                                slidesGrid: c,
                                previousIndex: p,
                                activeIndex: u,
                                rtlTranslate: h,
                                wrapperEl: m,
                                enabled: f
                            } = l;
                            if (l.animating && o.preventInteractionOnTransition || !f && !s && !r) return !1;
                            let g = Math.min(l.params.slidesPerGroupSkip, a),
                                v = g + Math.floor((a - g) / l.params.slidesPerGroup);
                            v >= d.length && (v = d.length - 1);
                            let w = -d[v];
                            if (o.normalizeSlideIndex)
                                for (let e = 0; e < c.length; e += 1) {
                                    let t = -Math.floor(100 * w),
                                        i = Math.floor(100 * c[e]),
                                        s = Math.floor(100 * c[e + 1]);
                                    void 0 !== c[e + 1] ? t >= i && t < s - (s - i) / 2 ? a = e : t >= i && t < s && (a = e + 1) : t >= i && (a = e)
                                }
                            if (l.initialized && a !== u && (!l.allowSlideNext && w < l.translate && w < l.minTranslate() || !l.allowSlidePrev && w > l.translate && w > l.maxTranslate() && (u || 0) !== a)) return !1;
                            if (a !== (p || 0) && i && l.emit("beforeSlideChangeStart"), l.updateProgress(w), n = a > u ? "next" : a < u ? "prev" : "reset", h && -w === l.translate || !h && w === l.translate) return l.updateActiveIndex(a), o.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== o.effect && l.setTranslate(w), "reset" !== n && (l.transitionStart(i, n), l.transitionEnd(i, n)), !1;
                            if (o.cssMode) {
                                let e = l.isHorizontal(),
                                    i = h ? w : -w;
                                if (0 === t) {
                                    let t = l.virtual && l.params.virtual.enabled;
                                    t && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), m[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
                                        l.wrapperEl.style.scrollSnapType = "", l._swiperImmediateVirtual = !1
                                    })
                                } else {
                                    if (!l.support.smoothScroll) return animateCSSModeScroll({
                                        swiper: l,
                                        targetPosition: i,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    m.scrollTo({
                                        [e ? "left" : "top"]: i,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return l.setTransition(t), l.setTranslate(w), l.updateActiveIndex(a), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, s), l.transitionStart(i, n), 0 === t ? l.transitionEnd(i, n) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.$wrapperEl[0].removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.$wrapperEl[0].removeEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(i, n))
                            }), l.$wrapperEl[0].addEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.$wrapperEl[0].addEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
                            if ("string" == typeof e) {
                                let t = parseInt(e, 10),
                                    i = isFinite(t);
                                if (!i) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = t
                            }
                            let r = e;
                            return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, i, s)
                        },
                        slideNext: function(e = this.params.speed, t = !0, i) {
                            let {
                                animating: s,
                                enabled: r,
                                params: n
                            } = this;
                            if (!r) return this;
                            let l = n.slidesPerGroup;
                            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(this.slidesPerViewDynamic("current", !0), 1));
                            let a = this.activeIndex < n.slidesPerGroupSkip ? 1 : l;
                            if (n.loop) {
                                if (s && n.loopPreventsSlide) return !1;
                                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                            }
                            return n.rewind && this.isEnd ? this.slideTo(0, e, t, i) : this.slideTo(this.activeIndex + a, e, t, i)
                        },
                        slidePrev: function(e = this.params.speed, t = !0, i) {
                            let {
                                params: s,
                                animating: r,
                                snapGrid: n,
                                slidesGrid: l,
                                rtlTranslate: a,
                                enabled: o
                            } = this;
                            if (!o) return this;
                            if (s.loop) {
                                if (r && s.loopPreventsSlide) return !1;
                                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                            }
                            let d = a ? this.translate : -this.translate;

                            function normalize(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let c = normalize(d),
                                p = n.map(e => normalize(e)),
                                u = n[p.indexOf(c) - 1];
                            if (void 0 === u && s.cssMode) {
                                let e;
                                n.forEach((t, i) => {
                                    c >= t && (e = i)
                                }), void 0 !== e && (u = n[e > 0 ? e - 1 : e])
                            }
                            let h = 0;
                            if (void 0 !== u && ((h = l.indexOf(u)) < 0 && (h = this.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (h = Math.max(h = h - this.slidesPerViewDynamic("previous", !0) + 1, 0))), s.rewind && this.isBeginning) {
                                let s = this.params.virtual && this.params.virtual.enabled && this.virtual ? this.virtual.slides.length - 1 : this.slides.length - 1;
                                return this.slideTo(s, e, t, i)
                            }
                            return this.slideTo(h, e, t, i)
                        },
                        slideReset: function(e = this.params.speed, t = !0, i) {
                            return this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e = this.params.speed, t = !0, i, s = .5) {
                            let r = this.activeIndex,
                                n = Math.min(this.params.slidesPerGroupSkip, r),
                                l = n + Math.floor((r - n) / this.params.slidesPerGroup),
                                a = this.rtlTranslate ? this.translate : -this.translate;
                            if (a >= this.snapGrid[l]) {
                                let e = this.snapGrid[l],
                                    t = this.snapGrid[l + 1];
                                a - e > (t - e) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[l - 1],
                                    t = this.snapGrid[l];
                                a - e <= (t - e) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this,
                                {
                                    params: i,
                                    $wrapperEl: s
                                } = t,
                                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                                n = t.clickedIndex;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(dom7_esm_$(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = s.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(), utils_nextTick(() => {
                                    t.slideTo(n)
                                })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = s.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(), utils_nextTick(() => {
                                    t.slideTo(n)
                                })) : t.slideTo(n)
                            } else t.slideTo(n)
                        }
                    },
                    loop: {
                        loopCreate: function() {
                            let e = ssr_window_esm_getDocument(),
                                {
                                    params: t,
                                    $wrapperEl: i
                                } = this,
                                s = i.children().length > 0 ? dom7_esm_$(i.children()[0].parentNode) : i;
                            s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
                            let r = s.children(`.${t.slideClass}`);
                            if (t.loopFillGroupWithBlank) {
                                let i = t.slidesPerGroup - r.length % t.slidesPerGroup;
                                if (i !== t.slidesPerGroup) {
                                    for (let r = 0; r < i; r += 1) {
                                        let i = dom7_esm_$(e.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                                        s.append(i)
                                    }
                                    r = s.children(`.${t.slideClass}`)
                                }
                            }
                            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = r.length), this.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), this.loopedSlides += t.loopAdditionalSlides, this.loopedSlides > r.length && this.params.loopedSlidesLimit && (this.loopedSlides = r.length);
                            let n = [],
                                l = [];
                            r.each((e, t) => {
                                let i = dom7_esm_$(e);
                                i.attr("data-swiper-slide-index", t)
                            });
                            for (let e = 0; e < this.loopedSlides; e += 1) {
                                let t = e - Math.floor(e / r.length) * r.length;
                                l.push(r.eq(t)[0]), n.unshift(r.eq(r.length - t - 1)[0])
                            }
                            for (let e = 0; e < l.length; e += 1) s.append(dom7_esm_$(l[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
                            for (let e = n.length - 1; e >= 0; e -= 1) s.prepend(dom7_esm_$(n[e].cloneNode(!0)).addClass(t.slideDuplicateClass))
                        },
                        loopFix: function() {
                            let e;
                            this.emit("beforeLoopFix");
                            let {
                                activeIndex: t,
                                slides: i,
                                loopedSlides: s,
                                allowSlidePrev: r,
                                allowSlideNext: n,
                                snapGrid: l,
                                rtlTranslate: a
                            } = this;
                            this.allowSlidePrev = !0, this.allowSlideNext = !0;
                            let o = -l[t],
                                d = o - this.getTranslate();
                            if (t < s) {
                                e = i.length - 3 * s + t + s;
                                let r = this.slideTo(e, 0, !1, !0);
                                r && 0 !== d && this.setTranslate((a ? -this.translate : this.translate) - d)
                            } else if (t >= i.length - s) {
                                e = -i.length + t + s + s;
                                let r = this.slideTo(e, 0, !1, !0);
                                r && 0 !== d && this.setTranslate((a ? -this.translate : this.translate) - d)
                            }
                            this.allowSlidePrev = r, this.allowSlideNext = n, this.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                $wrapperEl: e,
                                params: t,
                                slides: i
                            } = this;
                            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
                            let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                            t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = ssr_window_esm_getDocument(),
                                {
                                    params: t,
                                    support: i
                                } = this;
                            this.onTouchStart = onTouchStart.bind(this), this.onTouchMove = onTouchMove.bind(this), this.onTouchEnd = onTouchEnd.bind(this), t.cssMode && (this.onScroll = onScroll.bind(this)), this.onClick = onClick.bind(this), i.touch && !c && (e.addEventListener("touchstart", dummyEventListener), c = !0), events(this, "on")
                        },
                        detachEvents: function() {
                            events(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    activeIndex: t,
                                    initialized: i,
                                    loopedSlides: s = 0,
                                    params: r,
                                    $el: n
                                } = e,
                                l = r.breakpoints;
                            if (!l || l && 0 === Object.keys(l).length) return;
                            let a = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                            if (!a || e.currentBreakpoint === a) return;
                            let o = a in l ? l[a] : void 0,
                                d = o || e.originalParams,
                                c = isGridEnabled(e, r),
                                p = isGridEnabled(e, d),
                                u = r.enabled;
                            c && !p ? (n.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && p && (n.addClass(`${r.containerModifierClass}grid`), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === r.grid.fill) && n.addClass(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                let i = r[t] && r[t].enabled,
                                    s = d[t] && d[t].enabled;
                                i && !s && e[t].disable(), !i && s && e[t].enable()
                            });
                            let h = d.direction && d.direction !== r.direction,
                                m = r.loop && (d.slidesPerView !== r.slidesPerView || h);
                            h && i && e.changeDirection(), utils_extend(e.params, d);
                            let f = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), u && !f ? e.disable() : !u && f && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", d), m && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
                        },
                        getBreakpoint: function(e, t = "window", i) {
                            if (!e || "container" === t && !i) return;
                            let s = !1,
                                r = ssr_window_esm_getWindow(),
                                n = "window" === t ? r.innerHeight : i.clientHeight,
                                l = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: n * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < l.length; e += 1) {
                                let {
                                    point: n,
                                    value: a
                                } = l[e];
                                "window" === t ? r.matchMedia(`(min-width: ${a}px)`).matches && (s = n) : a <= i.clientWidth && (s = n)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: i
                            } = t;
                            if (i) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                $el: s,
                                device: r,
                                support: n
                            } = this, l = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "pointer-events": !n.touch
                            }, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...l), s.addClass([...e].join(" ")), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                $el: e,
                                classNames: t
                            } = this;
                            e.removeClass(t.join(" ")), this.emitContainerClasses()
                        }
                    },
                    images: {
                        loadImage: function(e, t, i, s, r, n) {
                            let l;
                            let a = ssr_window_esm_getWindow();

                            function onReady() {
                                n && n()
                            }
                            let o = dom7_esm_$(e).parent("picture")[0];
                            o || e.complete && r ? onReady() : t ? ((l = new a.Image).onload = onReady, l.onerror = onReady, s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : onReady()
                        },
                        preloadImages: function() {
                            let e = this;

                            function onReady() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let t = 0; t < e.imagesToLoad.length; t += 1) {
                                let i = e.imagesToLoad[t];
                                e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, onReady)
                            }
                        }
                    }
                },
                h = {};
            let Swiper = class Swiper {
                constructor(...e) {
                    let t, i;
                    if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t, i] = e, i || (i = {}), i = utils_extend({}, i), t && !i.el && (i.el = t), i.el && dom7_esm_$(i.el).length > 1) {
                        let e = [];
                        return dom7_esm_$(i.el).each(t => {
                            let s = utils_extend({}, i, {
                                el: t
                            });
                            e.push(new Swiper(s))
                        }), e
                    }
                    let s = this;
                    s.__swiper__ = !0, s.support = getSupport(), s.device = function(e = {}) {
                        return r || (r = function({
                            userAgent: e
                        } = {}) {
                            let t = getSupport(),
                                i = ssr_window_esm_getWindow(),
                                s = i.navigator.platform,
                                r = e || i.navigator.userAgent,
                                n = {
                                    ios: !1,
                                    android: !1
                                },
                                l = i.screen.width,
                                a = i.screen.height,
                                o = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                                d = r.match(/(iPad).*OS\s([\d_]+)/),
                                c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                                p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                u = "MacIntel" === s;
                            return !d && u && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${a}`) >= 0 && ((d = r.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), u = !1), o && "Win32" !== s && (n.os = "android", n.android = !0), (d || p || c) && (n.os = "ios", n.ios = !0), n
                        }(e)), r
                    }({
                        userAgent: i.userAgent
                    }), s.browser = (n || (n = function() {
                        let e = ssr_window_esm_getWindow();
                        return {
                            isSafari: function() {
                                let t = e.navigator.userAgent.toLowerCase();
                                return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                            }(),
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()), n), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], i.modules && Array.isArray(i.modules) && s.modules.push(...i.modules);
                    let l = {};
                    s.modules.forEach(e => {
                        var t;
                        e({
                            swiper: s,
                            extendParams: (t = i, function(e = {}) {
                                let i = Object.keys(e)[0],
                                    s = e[i];
                                if ("object" != typeof s || null === s || (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === t[i] && (t[i] = {
                                        auto: !0
                                    }), !(i in t && "enabled" in s))) {
                                    utils_extend(l, e);
                                    return
                                }!0 === t[i] && (t[i] = {
                                    enabled: !0
                                }), "object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0), t[i] || (t[i] = {
                                    enabled: !1
                                }), utils_extend(l, e)
                            }),
                            on: s.on.bind(s),
                            once: s.once.bind(s),
                            off: s.off.bind(s),
                            emit: s.emit.bind(s)
                        })
                    });
                    let a = utils_extend({}, p, l);
                    return s.params = utils_extend({}, a, h, i), s.originalParams = utils_extend({}, s.params), s.passedParams = utils_extend({}, i), s.params && s.params.on && Object.keys(s.params.on).forEach(e => {
                        s.on(e, s.params.on[e])
                    }), s.params && s.params.onAny && s.onAny(s.params.onAny), s.$ = dom7_esm_$, Object.assign(s, {
                        enabled: s.params.enabled,
                        el: t,
                        classNames: [],
                        slides: dom7_esm_$(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === s.params.direction,
                        isVertical: () => "vertical" === s.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: s.params.allowSlideNext,
                        allowSlidePrev: s.params.allowSlidePrev,
                        touchEvents: (s.touchEventsTouch = {
                            start: "touchstart",
                            move: "touchmove",
                            end: "touchend",
                            cancel: "touchcancel"
                        }, s.touchEventsDesktop = {
                            start: "pointerdown",
                            move: "pointermove",
                            end: "pointerup"
                        }, s.support.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: s.params.focusableElements,
                            lastClickTime: utils_now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: s.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), s.emit("_swiper"), s.params.init && s.init(), s
                }
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = this.maxTranslate(),
                        r = (s - i) * e + i;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.each(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: n,
                        size: l,
                        activeIndex: a
                    } = this, o = 1;
                    if (i.centeredSlides) {
                        let e, t = s[a].swiperSlideSize;
                        for (let i = a + 1; i < s.length; i += 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0));
                        for (let i = a - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0))
                    } else if ("current" === e)
                        for (let e = a + 1; e < s.length; e += 1) {
                            let i = t ? r[e] + n[e] - r[a] < l : r[e] - r[a] < l;
                            i && (o += 1)
                        } else
                            for (let e = a - 1; e >= 0; e -= 1) {
                                let t = r[a] - r[e] < l;
                                t && (o += 1)
                            }
                    return o
                }
                update() {
                    let e = this;
                    if (!e || e.destroyed) return;
                    let {
                        snapGrid: t,
                        params: i
                    } = e;

                    function setTranslate() {
                        let t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (setTranslate(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || setTranslate(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    let i = this.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass(`${this.params.containerModifierClass}${i}`).addClass(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.each(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.$el.addClass(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.$el.removeClass(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = dom7_esm_$(e || t.params.el);
                    if (!(e = i[0])) return !1;
                    e.swiper = t;
                    let getWrapperSelector = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        s = (() => {
                            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                                let t = dom7_esm_$(e.shadowRoot.querySelector(getWrapperSelector()));
                                return t.children = e => i.children(e), t
                            }
                            return i.children ? i.children(getWrapperSelector()) : dom7_esm_$(i).children(getWrapperSelector())
                        })();
                    if (0 === s.length && t.params.createElements) {
                        let e = ssr_window_esm_getDocument(),
                            r = e.createElement("div");
                        s = dom7_esm_$(r), r.className = t.params.wrapperClass, i.append(r), i.children(`.${t.params.slideClass}`).each(e => {
                            s.append(e)
                        })
                    }
                    return Object.assign(t, {
                        $el: i,
                        el: e,
                        $wrapperEl: s,
                        wrapperEl: s[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                        wrongRTL: "-webkit-box" === s.css("display")
                    }), !0
                }
                init(e) {
                    if (this.initialized) return this;
                    let t = this.mount(e);
                    return !1 === t || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.enabled && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit, !1, !0) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit, !1, !0), this.attachEvents(), this.initialized = !0, this.emit("init"), this.emit("afterInit")), this
                }
                destroy(e = !0, t = !0) {
                    let i = this,
                        {
                            params: s,
                            $el: r,
                            $wrapperEl: n,
                            slides: l
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.$el[0].swiper = null, function(e) {
                        Object.keys(e).forEach(t => {
                            try {
                                e[t] = null
                            } catch (e) {}
                            try {
                                delete e[t]
                            } catch (e) {}
                        })
                    }(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    utils_extend(h, e)
                }
                static get extendedDefaults() {
                    return h
                }
                static get defaults() {
                    return p
                }
                static installModule(e) {
                    Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
                    let t = Swiper.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach(e => Swiper.installModule(e)) : Swiper.installModule(e), Swiper
                }
            };
            Object.keys(u).forEach(e => {
                Object.keys(u[e]).forEach(t => {
                    Swiper.prototype[t] = u[e][t]
                })
            }), Swiper.use([function({
                swiper: e,
                on: t,
                emit: i
            }) {
                let s = ssr_window_esm_getWindow(),
                    r = null,
                    n = null,
                    resizeHandler = () => {
                        e && !e.destroyed && e.initialized && (i("beforeResize"), i("resize"))
                    },
                    createObserver = () => {
                        e && !e.destroyed && e.initialized && (r = new ResizeObserver(t => {
                            n = s.requestAnimationFrame(() => {
                                let {
                                    width: i,
                                    height: s
                                } = e, r = i, n = s;
                                t.forEach(({
                                    contentBoxSize: t,
                                    contentRect: i,
                                    target: s
                                }) => {
                                    s && s !== e.el || (r = i ? i.width : (t[0] || t).inlineSize, n = i ? i.height : (t[0] || t).blockSize)
                                }), (r !== i || n !== s) && resizeHandler()
                            })
                        })).observe(e.el)
                    },
                    removeObserver = () => {
                        n && s.cancelAnimationFrame(n), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
                    },
                    orientationChangeHandler = () => {
                        e && !e.destroyed && e.initialized && i("orientationchange")
                    };
                t("init", () => {
                    if (e.params.resizeObserver && void 0 !== s.ResizeObserver) {
                        createObserver();
                        return
                    }
                    s.addEventListener("resize", resizeHandler), s.addEventListener("orientationchange", orientationChangeHandler)
                }), t("destroy", () => {
                    removeObserver(), s.removeEventListener("resize", resizeHandler), s.removeEventListener("orientationchange", orientationChangeHandler)
                })
            }, function({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r = [],
                    n = ssr_window_esm_getWindow(),
                    attach = (e, t = {}) => {
                        let i = n.MutationObserver || n.WebkitMutationObserver,
                            l = new i(e => {
                                if (1 === e.length) {
                                    s("observerUpdate", e[0]);
                                    return
                                }
                                let observerUpdate = function() {
                                    s("observerUpdate", e[0])
                                };
                                n.requestAnimationFrame ? n.requestAnimationFrame(observerUpdate) : n.setTimeout(observerUpdate, 0)
                            });
                        l.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }), r.push(l)
                    };
                t({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", () => {
                    if (e.params.observer) {
                        if (e.params.observeParents) {
                            let t = e.$el.parents();
                            for (let e = 0; e < t.length; e += 1) attach(t[e])
                        }
                        attach(e.$el[0], {
                            childList: e.params.observeSlideChildren
                        }), attach(e.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                }), i("destroy", () => {
                    r.forEach(e => {
                        e.disconnect()
                    }), r.splice(0, r.length)
                })
            }]);
            var m = Swiper;

            function create_element_if_not_defined_createElementIfNotDefined(e, t, i, s) {
                let r = ssr_window_esm_getDocument();
                return e.params.createElements && Object.keys(s).forEach(n => {
                    if (!i[n] && !0 === i.auto) {
                        let l = e.$el.children(`.${s[n]}`)[0];
                        l || ((l = r.createElement("div")).className = s[n], e.$el.append(l)), i[n] = l, t[n] = l
                    }
                }), i
            }

            function Navigation({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                function getEl(t) {
                    let i;
                    return t && (i = dom7_esm_$(t), e.params.uniqueNavElements && "string" == typeof t && i.length > 1 && 1 === e.$el.find(t).length && (i = e.$el.find(t))), i
                }

                function toggleEl(t, i) {
                    let s = e.params.navigation;
                    t && t.length > 0 && (t[i ? "addClass" : "removeClass"](s.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](s.lockClass))
                }

                function update() {
                    if (e.params.loop) return;
                    let {
                        $nextEl: t,
                        $prevEl: i
                    } = e.navigation;
                    toggleEl(i, e.isBeginning && !e.params.rewind), toggleEl(t, e.isEnd && !e.params.rewind)
                }

                function onPrevClick(t) {
                    t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), s("navigationPrev"))
                }

                function onNextClick(t) {
                    t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), s("navigationNext"))
                }

                function init() {
                    let t = e.params.navigation;
                    if (e.params.navigation = create_element_if_not_defined_createElementIfNotDefined(e, e.originalParams.navigation, e.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !(t.nextEl || t.prevEl)) return;
                    let i = getEl(t.nextEl),
                        s = getEl(t.prevEl);
                    i && i.length > 0 && i.on("click", onNextClick), s && s.length > 0 && s.on("click", onPrevClick), Object.assign(e.navigation, {
                        $nextEl: i,
                        nextEl: i && i[0],
                        $prevEl: s,
                        prevEl: s && s[0]
                    }), !e.enabled && (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass))
                }

                function destroy() {
                    let {
                        $nextEl: t,
                        $prevEl: i
                    } = e.navigation;
                    t && t.length && (t.off("click", onNextClick), t.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", onPrevClick), i.removeClass(e.params.navigation.disabledClass))
                }
                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), e.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, i("init", () => {
                    !1 === e.params.navigation.enabled ? disable() : (init(), update())
                }), i("toEdge fromEdge lock unlock", () => {
                    update()
                }), i("destroy", () => {
                    destroy()
                }), i("enable disable", () => {
                    let {
                        $nextEl: t,
                        $prevEl: i
                    } = e.navigation;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
                }), i("click", (t, i) => {
                    let {
                        $nextEl: r,
                        $prevEl: n
                    } = e.navigation, l = i.target;
                    if (e.params.navigation.hideOnClick && !dom7_esm_$(l).is(n) && !dom7_esm_$(l).is(r)) {
                        let t;
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === l || e.pagination.el.contains(l))) return;
                        r ? t = r.hasClass(e.params.navigation.hiddenClass) : n && (t = n.hasClass(e.params.navigation.hiddenClass)), !0 === t ? s("navigationShow") : s("navigationHide"), r && r.toggleClass(e.params.navigation.hiddenClass), n && n.toggleClass(e.params.navigation.hiddenClass)
                    }
                });
                let disable = () => {
                    e.$el.addClass(e.params.navigation.navigationDisabledClass), destroy()
                };
                Object.assign(e.navigation, {
                    enable: () => {
                        e.$el.removeClass(e.params.navigation.navigationDisabledClass), init(), update()
                    },
                    disable,
                    update,
                    init,
                    destroy
                })
            }

            function classes_to_selector_classesToSelector(e = "") {
                return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function Pagination({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r;
                let n = "swiper-pagination";
                t({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${n}-bullet`,
                        bulletActiveClass: `${n}-bullet-active`,
                        modifierClass: `${n}-`,
                        currentClass: `${n}-current`,
                        totalClass: `${n}-total`,
                        hiddenClass: `${n}-hidden`,
                        progressbarFillClass: `${n}-progressbar-fill`,
                        progressbarOppositeClass: `${n}-progressbar-opposite`,
                        clickableClass: `${n}-clickable`,
                        lockClass: `${n}-lock`,
                        horizontalClass: `${n}-horizontal`,
                        verticalClass: `${n}-vertical`,
                        paginationDisabledClass: `${n}-disabled`
                    }
                }), e.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let l = 0;

                function isPaginationDisabled() {
                    return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
                }

                function setSideBullets(t, i) {
                    let {
                        bulletActiveClass: s
                    } = e.params.pagination;
                    t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`)
                }

                function update() {
                    let t;
                    let i = e.rtl,
                        n = e.params.pagination;
                    if (isPaginationDisabled()) return;
                    let a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        o = e.pagination.$el,
                        d = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((t = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (t -= a - 2 * e.loopedSlides), t > d - 1 && (t -= d), t < 0 && "bullets" !== e.params.paginationType && (t = d + t)) : t = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        let s, a, d;
                        let c = e.pagination.bullets;
                        if (n.dynamicBullets && (r = c.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), o.css(e.isHorizontal() ? "width" : "height", `${r*(n.dynamicMainBullets+4)}px`), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && ((l += t - (e.previousIndex - e.loopedSlides || 0)) > n.dynamicMainBullets - 1 ? l = n.dynamicMainBullets - 1 : l < 0 && (l = 0)), d = ((a = (s = Math.max(t - l, 0)) + (Math.min(c.length, n.dynamicMainBullets) - 1)) + s) / 2), c.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${n.bulletActiveClass}${e}`).join(" ")), o.length > 1) c.each(e => {
                            let i = dom7_esm_$(e),
                                r = i.index();
                            r === t && i.addClass(n.bulletActiveClass), n.dynamicBullets && (r >= s && r <= a && i.addClass(`${n.bulletActiveClass}-main`), r === s && setSideBullets(i, "prev"), r === a && setSideBullets(i, "next"))
                        });
                        else {
                            let i = c.eq(t),
                                r = i.index();
                            if (i.addClass(n.bulletActiveClass), n.dynamicBullets) {
                                let t = c.eq(s),
                                    i = c.eq(a);
                                for (let e = s; e <= a; e += 1) c.eq(e).addClass(`${n.bulletActiveClass}-main`);
                                if (e.params.loop) {
                                    if (r >= c.length) {
                                        for (let e = n.dynamicMainBullets; e >= 0; e -= 1) c.eq(c.length - e).addClass(`${n.bulletActiveClass}-main`);
                                        c.eq(c.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
                                    } else setSideBullets(t, "prev"), setSideBullets(i, "next")
                                } else setSideBullets(t, "prev"), setSideBullets(i, "next")
                            }
                        }
                        if (n.dynamicBullets) {
                            let t = Math.min(c.length, n.dynamicMainBullets + 4),
                                s = (r * t - r) / 2 - d * r;
                            c.css(e.isHorizontal() ? i ? "right" : "left" : "top", `${s}px`)
                        }
                    }
                    if ("fraction" === n.type && (o.find(classes_to_selector_classesToSelector(n.currentClass)).text(n.formatFractionCurrent(t + 1)), o.find(classes_to_selector_classesToSelector(n.totalClass)).text(n.formatFractionTotal(d))), "progressbar" === n.type) {
                        let i;
                        i = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        let s = (t + 1) / d,
                            r = 1,
                            l = 1;
                        "horizontal" === i ? r = s : l = s, o.find(classes_to_selector_classesToSelector(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${l})`).transition(e.params.speed)
                    }
                    "custom" === n.type && n.renderCustom ? (o.html(n.renderCustom(e, t + 1, d)), s("paginationRender", o[0])) : s("paginationUpdate", o[0]), e.params.watchOverflow && e.enabled && o[e.isLocked ? "addClass" : "removeClass"](n.lockClass)
                }

                function render() {
                    let t = e.params.pagination;
                    if (isPaginationDisabled()) return;
                    let i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        r = e.pagination.$el,
                        n = "";
                    if ("bullets" === t.type) {
                        let s = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && s > i && (s = i);
                        for (let i = 0; i < s; i += 1) t.renderBullet ? n += t.renderBullet.call(e, i, t.bulletClass) : n += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                        r.html(n), e.pagination.bullets = r.find(classes_to_selector_classesToSelector(t.bulletClass))
                    }
                    "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, r.html(n)), "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, r.html(n)), "custom" !== t.type && s("paginationRender", e.pagination.$el[0])
                }

                function init() {
                    e.params.pagination = create_element_if_not_defined_createElementIfNotDefined(e, e.originalParams.pagination, e.params.pagination, {
                        el: "swiper-pagination"
                    });
                    let t = e.params.pagination;
                    if (!t.el) return;
                    let i = dom7_esm_$(t.el);
                    0 === i.length || (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)).length > 1 && (i = i.filter(t => dom7_esm_$(t).parents(".swiper")[0] === e.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`), l = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", classes_to_selector_classesToSelector(t.bulletClass), function(t) {
                        t.preventDefault();
                        let i = dom7_esm_$(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    }), Object.assign(e.pagination, {
                        $el: i,
                        el: i[0]
                    }), e.enabled || i.addClass(t.lockClass))
                }

                function destroy() {
                    let t = e.params.pagination;
                    if (isPaginationDisabled()) return;
                    let i = e.pagination.$el;
                    i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), i.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", classes_to_selector_classesToSelector(t.bulletClass))
                }
                i("init", () => {
                    !1 === e.params.pagination.enabled ? disable() : (init(), render(), update())
                }), i("activeIndexChange", () => {
                    e.params.loop ? update() : void 0 === e.snapIndex && update()
                }), i("snapIndexChange", () => {
                    e.params.loop || update()
                }), i("slidesLengthChange", () => {
                    e.params.loop && (render(), update())
                }), i("snapGridLengthChange", () => {
                    e.params.loop || (render(), update())
                }), i("destroy", () => {
                    destroy()
                }), i("enable disable", () => {
                    let {
                        $el: t
                    } = e.pagination;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
                }), i("lock unlock", () => {
                    update()
                }), i("click", (t, i) => {
                    let r = i.target,
                        {
                            $el: n
                        } = e.pagination;
                    if (e.params.pagination.el && e.params.pagination.hideOnClick && n && n.length > 0 && !dom7_esm_$(r).hasClass(e.params.pagination.bulletClass)) {
                        if (e.navigation && (e.navigation.nextEl && r === e.navigation.nextEl || e.navigation.prevEl && r === e.navigation.prevEl)) return;
                        let t = n.hasClass(e.params.pagination.hiddenClass);
                        !0 === t ? s("paginationShow") : s("paginationHide"), n.toggleClass(e.params.pagination.hiddenClass)
                    }
                });
                let disable = () => {
                    e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), destroy()
                };
                Object.assign(e.pagination, {
                    enable: () => {
                        e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), init(), render(), update()
                    },
                    disable,
                    render,
                    update,
                    init,
                    destroy
                })
            }
        }
    }
]);