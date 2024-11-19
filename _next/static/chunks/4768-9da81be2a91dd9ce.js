! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9f402e40-a313-4539-9e8b-7d750c8e9df1", e._sentryDebugIdIdentifier = "sentry-dbid-9f402e40-a313-4539-9e8b-7d750c8e9df1")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4768], {
        34768: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return z
                }
            });
            var o = n(63366),
                r = n(87462),
                i = n(67294),
                a = n.t(i, 2),
                l = n(90512),
                s = n(46271),
                u = n(94780),
                p = n(2101),
                c = n(82056),
                d = n(86542),
                m = n(18413),
                h = n(2734),
                f = n(85845),
                g = n(98216),
                v = n(98885),
                y = n(30577),
                Z = n(51705),
                b = n(85893);
            let w = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

            function getScale(e) {
                return `scale(${e}, ${e**2})`
            }
            let T = {
                    entering: {
                        opacity: 1,
                        transform: getScale(1)
                    },
                    entered: {
                        opacity: 1,
                        transform: "none"
                    }
                },
                E = "undefined" != typeof navigator && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
                x = i.forwardRef(function(e, t) {
                    let {
                        addEndListener: n,
                        appear: a = !0,
                        children: l,
                        easing: u,
                        in: p,
                        onEnter: c,
                        onEntered: d,
                        onEntering: m,
                        onExit: f,
                        onExited: g,
                        onExiting: x,
                        style: R,
                        timeout: C = "auto",
                        TransitionComponent: M = v.ZP
                    } = e, k = (0, o.Z)(e, w), I = (0, s.Z)(), L = i.useRef(), O = (0, h.Z)(), P = i.useRef(null), S = (0, Z.Z)(P, l.ref, t), normalizedTransitionCallback = e => t => {
                        if (e) {
                            let n = P.current;
                            void 0 === t ? e(n) : e(n, t)
                        }
                    }, D = normalizedTransitionCallback(m), A = normalizedTransitionCallback((e, t) => {
                        let n;
                        (0, y.n)(e);
                        let {
                            duration: o,
                            delay: r,
                            easing: i
                        } = (0, y.C)({
                            style: R,
                            timeout: C,
                            easing: u
                        }, {
                            mode: "enter"
                        });
                        "auto" === C ? (n = O.transitions.getAutoHeightDuration(e.clientHeight), L.current = n) : n = o, e.style.transition = [O.transitions.create("opacity", {
                            duration: n,
                            delay: r
                        }), O.transitions.create("transform", {
                            duration: E ? n : .666 * n,
                            delay: r,
                            easing: i
                        })].join(","), c && c(e, t)
                    }), F = normalizedTransitionCallback(d), N = normalizedTransitionCallback(x), $ = normalizedTransitionCallback(e => {
                        let t;
                        let {
                            duration: n,
                            delay: o,
                            easing: r
                        } = (0, y.C)({
                            style: R,
                            timeout: C,
                            easing: u
                        }, {
                            mode: "exit"
                        });
                        "auto" === C ? (t = O.transitions.getAutoHeightDuration(e.clientHeight), L.current = t) : t = n, e.style.transition = [O.transitions.create("opacity", {
                            duration: t,
                            delay: o
                        }), O.transitions.create("transform", {
                            duration: E ? t : .666 * t,
                            delay: E ? o : o || .333 * t,
                            easing: r
                        })].join(","), e.style.opacity = 0, e.style.transform = getScale(.75), f && f(e)
                    }), B = normalizedTransitionCallback(g);
                    return (0, b.jsx)(M, (0, r.Z)({
                        appear: a,
                        in: p,
                        nodeRef: P,
                        onEnter: A,
                        onEntered: F,
                        onEntering: D,
                        onExit: $,
                        onExited: B,
                        onExiting: N,
                        addEndListener: e => {
                            "auto" === C && I.start(L.current || 0, e), n && n(P.current, e)
                        },
                        timeout: "auto" === C ? null : C
                    }, k, {
                        children: (e, t) => i.cloneElement(l, (0, r.Z)({
                            style: (0, r.Z)({
                                opacity: 0,
                                transform: getScale(.75),
                                visibility: "exited" !== e || p ? void 0 : "hidden"
                            }, T[e], R, l.props.style),
                            ref: S
                        }, t))
                    }))
                });
            x.muiSupportAuto = !0;
            var R = n(42885),
                C = n(2068);
            let M = 0,
                k = a["useId".toString()];
            var utils_useId = function(e) {
                    if (void 0 !== k) {
                        let t = k();
                        return null != e ? e : t
                    }
                    return function(e) {
                        let [t, n] = i.useState(e), o = e || t;
                        return i.useEffect(() => {
                            null == t && (M += 1, n(`mui-${M}`))
                        }, [t]), o
                    }(e)
                },
                I = n(79674),
                L = n(19032).Z,
                O = n(48999);
            let P = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"],
                useUtilityClasses = e => {
                    let {
                        classes: t,
                        disableInteractive: n,
                        arrow: o,
                        touch: r,
                        placement: i
                    } = e, a = {
                        popper: ["popper", !n && "popperInteractive", o && "popperArrow"],
                        tooltip: ["tooltip", o && "tooltipArrow", r && "touch", `tooltipPlacement${(0,g.Z)(i.split("-")[0])}`],
                        arrow: ["arrow"]
                    };
                    return (0, u.Z)(a, O.Q, t)
                },
                S = (0, m.ZP)(R.Z, {
                    name: "MuiTooltip",
                    slot: "Popper",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: n
                        } = e;
                        return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose]
                    }
                })(({
                    theme: e,
                    ownerState: t,
                    open: n
                }) => (0, r.Z)({
                    zIndex: (e.vars || e).zIndex.tooltip,
                    pointerEvents: "none"
                }, !t.disableInteractive && {
                    pointerEvents: "auto"
                }, !n && {
                    pointerEvents: "none"
                }, t.arrow && {
                    [`&[data-popper-placement*="bottom"] .${O.Z.arrow}`]: {
                        top: 0,
                        marginTop: "-0.71em",
                        "&::before": {
                            transformOrigin: "0 100%"
                        }
                    },
                    [`&[data-popper-placement*="top"] .${O.Z.arrow}`]: {
                        bottom: 0,
                        marginBottom: "-0.71em",
                        "&::before": {
                            transformOrigin: "100% 0"
                        }
                    },
                    [`&[data-popper-placement*="right"] .${O.Z.arrow}`]: (0, r.Z)({}, t.isRtl ? {
                        right: 0,
                        marginRight: "-0.71em"
                    } : {
                        left: 0,
                        marginLeft: "-0.71em"
                    }, {
                        height: "1em",
                        width: "0.71em",
                        "&::before": {
                            transformOrigin: "100% 100%"
                        }
                    }),
                    [`&[data-popper-placement*="left"] .${O.Z.arrow}`]: (0, r.Z)({}, t.isRtl ? {
                        left: 0,
                        marginLeft: "-0.71em"
                    } : {
                        right: 0,
                        marginRight: "-0.71em"
                    }, {
                        height: "1em",
                        width: "0.71em",
                        "&::before": {
                            transformOrigin: "0 0"
                        }
                    })
                })),
                D = (0, m.ZP)("div", {
                    name: "MuiTooltip",
                    slot: "Tooltip",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: n
                        } = e;
                        return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${(0,g.Z)(n.placement.split("-")[0])}`]]
                    }
                })(({
                    theme: e,
                    ownerState: t
                }) => (0, r.Z)({
                    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : (0, p.Fq)(e.palette.grey[700], .92),
                    borderRadius: (e.vars || e).shape.borderRadius,
                    color: (e.vars || e).palette.common.white,
                    fontFamily: e.typography.fontFamily,
                    padding: "4px 8px",
                    fontSize: e.typography.pxToRem(11),
                    maxWidth: 300,
                    margin: 2,
                    wordWrap: "break-word",
                    fontWeight: e.typography.fontWeightMedium
                }, t.arrow && {
                    position: "relative",
                    margin: 0
                }, t.touch && {
                    padding: "8px 16px",
                    fontSize: e.typography.pxToRem(14),
                    lineHeight: `${Math.round(1e5*(16/14))/1e5}em`,
                    fontWeight: e.typography.fontWeightRegular
                }, {
                    [`.${O.Z.popper}[data-popper-placement*="left"] &`]: (0, r.Z)({
                        transformOrigin: "right center"
                    }, t.isRtl ? (0, r.Z)({
                        marginLeft: "14px"
                    }, t.touch && {
                        marginLeft: "24px"
                    }) : (0, r.Z)({
                        marginRight: "14px"
                    }, t.touch && {
                        marginRight: "24px"
                    })),
                    [`.${O.Z.popper}[data-popper-placement*="right"] &`]: (0, r.Z)({
                        transformOrigin: "left center"
                    }, t.isRtl ? (0, r.Z)({
                        marginRight: "14px"
                    }, t.touch && {
                        marginRight: "24px"
                    }) : (0, r.Z)({
                        marginLeft: "14px"
                    }, t.touch && {
                        marginLeft: "24px"
                    })),
                    [`.${O.Z.popper}[data-popper-placement*="top"] &`]: (0, r.Z)({
                        transformOrigin: "center bottom",
                        marginBottom: "14px"
                    }, t.touch && {
                        marginBottom: "24px"
                    }),
                    [`.${O.Z.popper}[data-popper-placement*="bottom"] &`]: (0, r.Z)({
                        transformOrigin: "center top",
                        marginTop: "14px"
                    }, t.touch && {
                        marginTop: "24px"
                    })
                })),
                A = (0, m.ZP)("span", {
                    name: "MuiTooltip",
                    slot: "Arrow",
                    overridesResolver: (e, t) => t.arrow
                })(({
                    theme: e
                }) => ({
                    overflow: "hidden",
                    position: "absolute",
                    width: "1em",
                    height: "0.71em",
                    boxSizing: "border-box",
                    color: e.vars ? e.vars.palette.Tooltip.bg : (0, p.Fq)(e.palette.grey[700], .9),
                    "&::before": {
                        content: '""',
                        margin: "auto",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "currentColor",
                        transform: "rotate(45deg)"
                    }
                })),
                F = !1,
                N = new s.V,
                $ = {
                    x: 0,
                    y: 0
                };

            function composeEventHandler(e, t) {
                return (n, ...o) => {
                    t && t(n, ...o), e(n, ...o)
                }
            }
            let B = i.forwardRef(function(e, t) {
                var n, a, u, p, m, g, v, y, w, T, E, M, k, O, B, z, H, _, V;
                let W = (0, f.i)({
                        props: e,
                        name: "MuiTooltip"
                    }),
                    {
                        arrow: j = !1,
                        children: U,
                        components: K = {},
                        componentsProps: q = {},
                        describeChild: Q = !1,
                        disableFocusListener: X = !1,
                        disableHoverListener: Y = !1,
                        disableInteractive: G = !1,
                        disableTouchListener: J = !1,
                        enterDelay: ee = 100,
                        enterNextDelay: et = 0,
                        enterTouchDelay: en = 700,
                        followCursor: eo = !1,
                        id: er,
                        leaveDelay: ei = 0,
                        leaveTouchDelay: ea = 1500,
                        onClose: el,
                        onOpen: es,
                        open: eu,
                        placement: ep = "bottom",
                        PopperComponent: ec,
                        PopperProps: ed = {},
                        slotProps: em = {},
                        slots: eh = {},
                        title: ef,
                        TransitionComponent: eg = x,
                        TransitionProps: ev
                    } = W,
                    ey = (0, o.Z)(W, P),
                    eZ = i.isValidElement(U) ? U : (0, b.jsx)("span", {
                        children: U
                    }),
                    eb = (0, h.Z)(),
                    ew = (0, c.V)(),
                    [eT, eE] = i.useState(),
                    [ex, eR] = i.useState(null),
                    eC = i.useRef(!1),
                    eM = G || eo,
                    ek = (0, s.Z)(),
                    eI = (0, s.Z)(),
                    eL = (0, s.Z)(),
                    eO = (0, s.Z)(),
                    [eP, eS] = L({
                        controlled: eu,
                        default: !1,
                        name: "Tooltip",
                        state: "open"
                    }),
                    eD = eP,
                    eA = utils_useId(er),
                    eF = i.useRef(),
                    eN = (0, C.Z)(() => {
                        void 0 !== eF.current && (document.body.style.WebkitUserSelect = eF.current, eF.current = void 0), eO.clear()
                    });
                i.useEffect(() => eN, [eN]);
                let handleOpen = e => {
                        N.clear(), F = !0, eS(!0), es && !eD && es(e)
                    },
                    e$ = (0, C.Z)(e => {
                        N.start(800 + ei, () => {
                            F = !1
                        }), eS(!1), el && eD && el(e), ek.start(eb.transitions.duration.shortest, () => {
                            eC.current = !1
                        })
                    }),
                    handleMouseOver = e => {
                        eC.current && "touchstart" !== e.type || (eT && eT.removeAttribute("title"), eI.clear(), eL.clear(), ee || F && et ? eI.start(F ? et : ee, () => {
                            handleOpen(e)
                        }) : handleOpen(e))
                    },
                    handleMouseLeave = e => {
                        eI.clear(), eL.start(ei, () => {
                            e$(e)
                        })
                    },
                    {
                        isFocusVisibleRef: eB,
                        onBlur: ez,
                        onFocus: eH,
                        ref: e_
                    } = (0, I.Z)(),
                    [, eV] = i.useState(!1),
                    handleBlur = e => {
                        ez(e), !1 === eB.current && (eV(!1), handleMouseLeave(e))
                    },
                    handleFocus = e => {
                        eT || eE(e.currentTarget), eH(e), !0 === eB.current && (eV(!0), handleMouseOver(e))
                    },
                    detectTouchStart = e => {
                        eC.current = !0;
                        let t = eZ.props;
                        t.onTouchStart && t.onTouchStart(e)
                    };
                i.useEffect(() => {
                    if (eD) return document.addEventListener("keydown", handleKeyDown), () => {
                        document.removeEventListener("keydown", handleKeyDown)
                    };

                    function handleKeyDown(e) {
                        ("Escape" === e.key || "Esc" === e.key) && e$(e)
                    }
                }, [e$, eD]);
                let eW = (0, Z.Z)(eZ.ref, e_, eE, t);
                ef || 0 === ef || (eD = !1);
                let ej = i.useRef(),
                    eU = {},
                    eK = "string" == typeof ef;
                Q ? (eU.title = eD || !eK || Y ? null : ef, eU["aria-describedby"] = eD ? eA : null) : (eU["aria-label"] = eK ? ef : null, eU["aria-labelledby"] = eD && !eK ? eA : null);
                let eq = (0, r.Z)({}, eU, ey, eZ.props, {
                        className: (0, l.Z)(ey.className, eZ.props.className),
                        onTouchStart: detectTouchStart,
                        ref: eW
                    }, eo ? {
                        onMouseMove: e => {
                            let t = eZ.props;
                            t.onMouseMove && t.onMouseMove(e), $ = {
                                x: e.clientX,
                                y: e.clientY
                            }, ej.current && ej.current.update()
                        }
                    } : {}),
                    eQ = {};
                J || (eq.onTouchStart = e => {
                    detectTouchStart(e), eL.clear(), ek.clear(), eN(), eF.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", eO.start(en, () => {
                        document.body.style.WebkitUserSelect = eF.current, handleMouseOver(e)
                    })
                }, eq.onTouchEnd = e => {
                    eZ.props.onTouchEnd && eZ.props.onTouchEnd(e), eN(), eL.start(ea, () => {
                        e$(e)
                    })
                }), Y || (eq.onMouseOver = composeEventHandler(handleMouseOver, eq.onMouseOver), eq.onMouseLeave = composeEventHandler(handleMouseLeave, eq.onMouseLeave), eM || (eQ.onMouseOver = handleMouseOver, eQ.onMouseLeave = handleMouseLeave)), X || (eq.onFocus = composeEventHandler(handleFocus, eq.onFocus), eq.onBlur = composeEventHandler(handleBlur, eq.onBlur), eM || (eQ.onFocus = handleFocus, eQ.onBlur = handleBlur));
                let eX = i.useMemo(() => {
                        var e;
                        let t = [{
                            name: "arrow",
                            enabled: !!ex,
                            options: {
                                element: ex,
                                padding: 4
                            }
                        }];
                        return null != (e = ed.popperOptions) && e.modifiers && (t = t.concat(ed.popperOptions.modifiers)), (0, r.Z)({}, ed.popperOptions, {
                            modifiers: t
                        })
                    }, [ex, ed]),
                    eY = (0, r.Z)({}, W, {
                        isRtl: ew,
                        arrow: j,
                        disableInteractive: eM,
                        placement: ep,
                        PopperComponentProp: ec,
                        touch: eC.current
                    }),
                    eG = useUtilityClasses(eY),
                    eJ = null != (n = null != (a = eh.popper) ? a : K.Popper) ? n : S,
                    e0 = null != (u = null != (p = null != (m = eh.transition) ? m : K.Transition) ? p : eg) ? u : x,
                    e1 = null != (g = null != (v = eh.tooltip) ? v : K.Tooltip) ? g : D,
                    e4 = null != (y = null != (w = eh.arrow) ? w : K.Arrow) ? y : A,
                    e7 = (0, d.Z)(eJ, (0, r.Z)({}, ed, null != (T = em.popper) ? T : q.popper, {
                        className: (0, l.Z)(eG.popper, null == ed ? void 0 : ed.className, null == (E = null != (M = em.popper) ? M : q.popper) ? void 0 : E.className)
                    }), eY),
                    e8 = (0, d.Z)(e0, (0, r.Z)({}, ev, null != (k = em.transition) ? k : q.transition), eY),
                    e2 = (0, d.Z)(e1, (0, r.Z)({}, null != (O = em.tooltip) ? O : q.tooltip, {
                        className: (0, l.Z)(eG.tooltip, null == (B = null != (z = em.tooltip) ? z : q.tooltip) ? void 0 : B.className)
                    }), eY),
                    e6 = (0, d.Z)(e4, (0, r.Z)({}, null != (H = em.arrow) ? H : q.arrow, {
                        className: (0, l.Z)(eG.arrow, null == (_ = null != (V = em.arrow) ? V : q.arrow) ? void 0 : _.className)
                    }), eY);
                return (0, b.jsxs)(i.Fragment, {
                    children: [i.cloneElement(eZ, eq), (0, b.jsx)(eJ, (0, r.Z)({
                        as: null != ec ? ec : R.Z,
                        placement: ep,
                        anchorEl: eo ? {
                            getBoundingClientRect: () => ({
                                top: $.y,
                                left: $.x,
                                right: $.x,
                                bottom: $.y,
                                width: 0,
                                height: 0
                            })
                        } : eT,
                        popperRef: ej,
                        open: !!eT && eD,
                        id: eA,
                        transition: !0
                    }, eQ, e7, {
                        popperOptions: eX,
                        children: ({
                            TransitionProps: e
                        }) => (0, b.jsx)(e0, (0, r.Z)({
                            timeout: eb.transitions.duration.shorter
                        }, e, e8, {
                            children: (0, b.jsxs)(e1, (0, r.Z)({}, e2, {
                                children: [ef, j ? (0, b.jsx)(e4, (0, r.Z)({}, e6, {
                                    ref: eR
                                })) : null]
                            }))
                        }))
                    }))]
                })
            });
            var z = B
        },
        48999: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return getTooltipUtilityClass
                }
            });
            var o = n(1588),
                r = n(34867);

            function getTooltipUtilityClass(e) {
                return (0, r.ZP)("MuiTooltip", e)
            }
            let i = (0, o.Z)("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
            t.Z = i
        },
        98216: function(e, t, n) {
            var o = n(14142);
            t.Z = o.Z
        },
        2068: function(e, t, n) {
            var o = n(59948);
            t.Z = o.Z
        },
        79674: function(e, t, n) {
            var o = n(36728);
            t.Z = o.Z
        },
        82056: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return useRtl
                }
            });
            var o = n(67294);
            n(85893);
            let r = o.createContext(),
                useRtl = () => {
                    let e = o.useContext(r);
                    return null != e && e
                }
        },
        59948: function(e, t, n) {
            var o = n(67294),
                r = n(73546);
            t.Z = function(e) {
                let t = o.useRef(e);
                return (0, r.Z)(() => {
                    t.current = e
                }), o.useRef((...e) => (0, t.current)(...e)).current
            }
        },
        36728: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return useIsFocusVisible
                }
            });
            var o = n(67294),
                r = n(46271);
            let i = !0,
                a = !1,
                l = new r.V,
                s = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };

            function handleKeyDown(e) {
                e.metaKey || e.altKey || e.ctrlKey || (i = !0)
            }

            function handlePointerDown() {
                i = !1
            }

            function handleVisibilityChange() {
                "hidden" === this.visibilityState && a && (i = !0)
            }

            function useIsFocusVisible() {
                let e = o.useCallback(e => {
                        if (null != e) {
                            var t;
                            (t = e.ownerDocument).addEventListener("keydown", handleKeyDown, !0), t.addEventListener("mousedown", handlePointerDown, !0), t.addEventListener("pointerdown", handlePointerDown, !0), t.addEventListener("touchstart", handlePointerDown, !0), t.addEventListener("visibilitychange", handleVisibilityChange, !0)
                        }
                    }, []),
                    t = o.useRef(!1);
                return {
                    isFocusVisibleRef: t,
                    onFocus: function(e) {
                        return !! function(e) {
                            let {
                                target: t
                            } = e;
                            try {
                                return t.matches(":focus-visible")
                            } catch (e) {}
                            return i || function(e) {
                                let {
                                    type: t,
                                    tagName: n
                                } = e;
                                return "INPUT" === n && !!s[t] && !e.readOnly || "TEXTAREA" === n && !e.readOnly || !!e.isContentEditable
                            }(t)
                        }(e) && (t.current = !0, !0)
                    },
                    onBlur: function() {
                        return !!t.current && (a = !0, l.start(100, () => {
                            a = !1
                        }), t.current = !1, !0)
                    },
                    ref: e
                }
            }
        },
        46271: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return Timeout
                },
                Z: function() {
                    return useTimeout
                }
            });
            var o = n(67294);
            let r = {},
                i = [];
            let Timeout = class Timeout {
                constructor() {
                    this.currentId = null, this.clear = () => {
                        null !== this.currentId && (clearTimeout(this.currentId), this.currentId = null)
                    }, this.disposeEffect = () => this.clear
                }
                static create() {
                    return new Timeout
                }
                start(e, t) {
                    this.clear(), this.currentId = setTimeout(() => {
                        this.currentId = null, t()
                    }, e)
                }
            };

            function useTimeout() {
                var e;
                let t = function(e, t) {
                    let n = o.useRef(r);
                    return n.current === r && (n.current = e(void 0)), n
                }(Timeout.create).current;
                return e = t.disposeEffect, o.useEffect(e, i), t
            }
        }
    }
]);