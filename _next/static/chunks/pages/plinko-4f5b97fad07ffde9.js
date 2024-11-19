! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "09390b6f-e18f-4fbc-a902-37541e48823f", e._sentryDebugIdIdentifier = "sentry-dbid-09390b6f-e18f-4fbc-a902-37541e48823f")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [213], {
        62484: function(e, t, n) {
            "use strict";
            var a, s = n(67294);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            t.Z = function(e) {
                return s.createElement("svg", _extends({
                    fill: "#8690bf",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 318.293 318.293",
                    style: {
                        enableBackground: "new 0 0 318.293 318.293"
                    },
                    xmlSpace: "preserve"
                }, e), a || (a = s.createElement("path", {
                    d: "M159.148 0c-52.696 0-95.544 39.326-95.544 87.662h47.736c0-22.007 21.438-39.927 47.808-39.927 26.367 0 47.804 17.92 47.804 39.927v6.929c0 23.39-10.292 34.31-25.915 50.813-20.371 21.531-45.744 48.365-45.744 105.899h47.745c0-38.524 15.144-54.568 32.692-73.12 17.368-18.347 38.96-41.192 38.96-83.592v-6.929C254.689 39.326 211.845 0 159.148 0zM134.475 277.996h49.968v40.297h-49.968z"
                })))
            }
        },
        9387: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/plinko", function() {
                return n(39050)
            }])
        },
        4277: function(e, t, n) {
            "use strict";
            var a = n(67294);
            t.Z = e => {
                let [t, n] = (0, a.useState)(e), s = (0, a.useCallback)(t => {
                    t.target.value === e && n("")
                }, [e]), r = (0, a.useCallback)(t => {
                    "" === t.target.value && n(e)
                }, [e]);
                return [t, n, s, r]
            }
        },
        86436: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return bet_BetHeader
                }
            });
            var a, s, r, o = n(85893),
                l = n(62961),
                i = n(93967),
                u = n.n(i),
                c = n(67294),
                d = n(2664),
                m = n(98216),
                h = n(5616),
                p = n(18413),
                y = n(34768),
                g = n(48999),
                f = n(62484);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var shield = function(e) {
                return c.createElement("svg", _extends({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 20,
                    height: 20,
                    fill: "none"
                }, e), a || (a = c.createElement("path", {
                    d: "M14.85 5.68a.396.396 0 0 0-.29-.324L9.608 4.014a.413.413 0 0 0-.216 0L4.44 5.356a.396.396 0 0 0-.29.323c-.03.202-.684 4.954.996 7.319 1.679 2.361 4.155 2.966 4.26 2.991a.413.413 0 0 0 .189 0c.104-.025 2.58-.63 4.259-2.991 1.68-2.365 1.025-7.117.997-7.319Zm-2.157 2.774-3.377 3.29a.407.407 0 0 1-.57 0L6.658 9.71a.387.387 0 0 1 0-.555l.415-.404a.41.41 0 0 1 .569 0l1.389 1.353 2.678-2.608a.408.408 0 0 1 .57 0l.414.404a.385.385 0 0 1 0 .554Z",
                    fill: "#8F88A8"
                })))
            };

            function history_extends() {
                return (history_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var icons_history = function(e) {
                    return c.createElement("svg", history_extends({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "#8F88A8",
                        strokeWidth: 0
                    }, e), s || (s = c.createElement("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                    })), r || (r = c.createElement("path", {
                        d: "M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
                    })))
                },
                x = n(4595),
                v = n(6428),
                b = n(40400),
                I = n(39398);
            let _ = (0, p.ZP)(e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, o.jsx)(y.Z, { ...n,
                    classes: {
                        popper: t
                    }
                })
            })({
                ["& .".concat(g.Z.tooltip)]: {
                    maxWidth: 500,
                    backgroundColor: "#353b61",
                    fontWeight: 500
                }
            });
            var bet_BetHeader = e => {
                let {
                    gameName: t,
                    lastGame: n,
                    showHistory: a = !0,
                    showAuto: s = !1,
                    isAuto: r = !1,
                    setIsAuto: i,
                    className: p,
                    showInfo: y = !0,
                    sideButtonType: g = "default",
                    maxProfit: k
                } = e, C = (0, d.I0)(), w = (0, v.Z)(), j = (0, d.v9)(e => e.auth.isAuthenticated), B = (0, c.useMemo)(() => w.width > 992 && w.width <= 1400, [w]);
                return (0, o.jsxs)(h.Z, {
                    display: "flex",
                    gap: "1em",
                    justifyContent: "space-between",
                    className: p,
                    width: "100%",
                    "data-sentry-element": "Box",
                    "data-sentry-component": "BetHeader",
                    "data-sentry-source-file": "BetHeader.tsx",
                    children: [(0, o.jsxs)(h.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        className: u()("gameBetTabs"),
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "BetHeader.tsx",
                        children: [(0, o.jsx)(x.Z, {
                            variant: "tab",
                            isActive: !r,
                            onClick: () => i && i(!1),
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "BetHeader.tsx",
                            children: "Manual"
                        }), s && (0, o.jsx)(x.Z, {
                            variant: "tab",
                            isActive: r,
                            onClick: () => i && i(!0),
                            children: "Auto"
                        })]
                    }), (0, o.jsxs)(h.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        className: u()("gameBetTabs"),
                        gap: "1em",
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "BetHeader.tsx",
                        children: [y && (0, o.jsx)(x.Z, {
                            onClick: () => C({
                                type: l.hj,
                                payload: (0, m.Z)(t)
                            }),
                            variant: "compact" === g ? "betOptionCompact" : "betOption",
                            children: (0, o.jsx)(f.Z, {
                                style: {
                                    height: ".75em"
                                }
                            })
                        }), !!n && (0, o.jsx)(x.Z, {
                            onClick: () => C({
                                type: l.LE,
                                payload: { ...n,
                                    gameName: t
                                }
                            }),
                            variant: "compact" === g ? "betOptionCompact" : "betOption",
                            children: B ? (0, o.jsx)(shield, {}) : "Fairness"
                        }), a && j && (0, o.jsx)(x.Z, {
                            onClick: () => C({
                                type: l.bN,
                                payload: {
                                    gameType: t
                                }
                            }),
                            variant: "compact" === g ? "betOptionCompact" : "betOption",
                            children: B ? (0, o.jsx)(icons_history, {
                                style: {
                                    transform: "scale(0.8)"
                                }
                            }) : "History"
                        }), k && (0, o.jsx)(_, {
                            title: (0, o.jsx)("p", {
                                style: {
                                    fontSize: "12px"
                                },
                                children: k ? "F$ ".concat((0, I.Z)((0, b.Z)(k)), " Max Profit") : "Loading.."
                            }),
                            children: (0, o.jsx)(x.Z, {
                                variant: "compact" === g ? "betOptionCompact" : "betOption",
                                children: B ? "Profit" : "Max profit"
                            })
                        })]
                    })]
                })
            }
        },
        20875: function(e, t, n) {
            "use strict";
            var a = n(85893),
                s = n(62961),
                r = n(67294),
                o = n(2664),
                l = n(98216),
                i = n(35328),
                u = n(7458);
            t.Z = e => {
                let {
                    className: t,
                    value: n,
                    onChange: c,
                    min: d,
                    max: m,
                    showInfo: h,
                    gameName: p,
                    defaultValue: y,
                    ...g
                } = e, f = (0, o.I0)(), x = (0, o.v9)(e => e.auth.user), v = (0, r.useMemo)(() => Math.floor((null == x ? void 0 : x.wallet) + ((null == x ? void 0 : x.bonusWallet) || 0)), [x]), b = d || .001, I = m || v, calculateBetAmount = e => {
                    if (!n) return n;
                    switch (e) {
                        case "1/2":
                            return Math.max(Math.floor(n / 2), b);
                        case "2x":
                            return Math.min(Math.max(2 * n, 0), Math.min(I, v));
                        case "max":
                            return Math.min(Math.max(v, 0), I);
                        default:
                            return n
                    }
                }, _ = (0, r.useCallback)(() => {
                    void 0 !== y && "".concat(n) === "".concat(y) && c("")
                }, [y, n]), k = (0, r.useCallback)(() => {
                    void 0 !== y && "" === n && c(y)
                }, [y, n]);
                return (0, a.jsx)(i.Z, {
                    label: "Bet amount",
                    variant: "secondary",
                    toggleButtonsOnFocus: !0,
                    isBet: !0,
                    patterns: [{
                        label: "1/2",
                        onClick: () => n && c(calculateBetAmount("1/2"))
                    }, {
                        label: "2x",
                        onClick: () => n && c(calculateBetAmount("2x"))
                    }, ...v ? [{
                        label: "Max",
                        onClick: () => c(calculateBetAmount("max"))
                    }] : [], ...h && p ? [{
                        label: "?",
                        onClick: () => f({
                            type: s.hj,
                            payload: (0, l.Z)(p)
                        })
                    }] : []],
                    "data-sentry-element": "FormField",
                    "data-sentry-component": "BetInput",
                    "data-sentry-source-file": "BetInput.tsx",
                    children: (0, a.jsx)(u.Z, {
                        value: n,
                        onChange: c,
                        onFocus: _,
                        onBlur: k,
                        pauseBlurValidation: void 0 !== y && "" === n,
                        min: d,
                        max: Math.min(Math.max(v, 0), I),
                        step: 10,
                        hasCurrencyIcon: !0,
                        disableWheel: !0,
                        ...g,
                        "data-sentry-element": "NumberInput",
                        "data-sentry-source-file": "BetInput.tsx"
                    })
                })
            }
        },
        52537: function(e, t, n) {
            "use strict";
            var a = n(85893),
                s = n(62961),
                r = n(93967),
                o = n.n(r),
                l = n(67294),
                i = n(2664),
                u = n(65899),
                c = n.n(u),
                d = n(6428);
            t.Z = l.memo(function(e) {
                let {
                    historyValues: t,
                    forRoulette: n
                } = e, r = (0, d.Z)(), l = (0, i.I0)(), getProperColor = e => e > 2 && e < 7 ? "gameLatestItemYellow" : e >= 7 ? "gameLatestItemBlue" : "purple" === e ? "gameLatestItemPurple" : "red" === e ? "gameLatestItemRed" : "yellow" === e ? "gameLatestItemYellow" : "gameLatestItemNeutral", getRouletteX = e => "purple" === e ? "2X" : "yellow" === e ? "14X" : "red" === e ? "2x" : void 0;
                return (null == t ? void 0 : t.length) ? (0, a.jsx)("div", {
                    className: o()(n && c().rouletteGameLatest, "gameLatest gameLatestHorizontal", !n && "lastestHistory"),
                    children: (n ? t.slice(-3) : r.width < 768 ? t.slice(-6) : t.slice(-7)).map((e, t) => {
                        var n, r;
                        return (0, a.jsx)("div", {
                            onClick: () => l({
                                type: s.LE,
                                payload: { ...e,
                                    gameName: "roulette"
                                }
                            }),
                            style: {
                                cursor: "pointer"
                            },
                            className: o()("gameLatestItem ".concat(getProperColor(null !== (n = e.crashPoint) && void 0 !== n ? n : e.winningColor))),
                            children: null !== (r = e.crashPoint) && void 0 !== r ? r : getRouletteX(e.winningColor)
                        }, t)
                    })
                }) : (0, a.jsx)(a.Fragment, {})
            })
        },
        26118: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return GameLayout
                }
            });
            var a = n(85893),
                s = n(93967),
                r = n.n(s),
                o = n(26030),
                l = n.n(o),
                i = n(6428);
            let u = {
                left: l().gameLayoutColumnLeft,
                right: l().gameLayoutColumnRight,
                row: l().gameLayoutColumnRow,
                anotherLeft: l().gameLayoutColumnAnotherLeft,
                anotherRight: l().gameLayoutColumnAnotherRight
            };

            function GameLayout(e) {
                let {
                    className: t,
                    children: n,
                    ...s
                } = e;
                return (0, a.jsx)("div", {
                    className: r()(l().gameLayout, t),
                    ...s,
                    "data-sentry-component": "GameLayout",
                    "data-sentry-source-file": "game-layout.tsx",
                    children: n
                })
            }
            GameLayout.Column = function(e) {
                let {
                    type: t,
                    className: n,
                    children: s,
                    customMobileOrder: o = "initial",
                    ...c
                } = e, d = (0, i.Z)();
                return (0, a.jsx)("div", {
                    className: r()(l().gameLayoutColumn, u[t], n),
                    style: {
                        order: d.width < 993 ? o : "initial"
                    },
                    ...c,
                    "data-sentry-component": "Column",
                    "data-sentry-source-file": "game-layout-column.tsx",
                    children: s
                })
            }
        },
        35328: function(e, t, n) {
            "use strict";
            var a = n(85893),
                s = n(93967),
                r = n.n(s),
                o = n(77579),
                l = n(4595),
                i = n(46826),
                u = n.n(i);
            let c = {
                primary: u().formFieldPrimary,
                secondary: u().formFieldSecondary
            };
            t.Z = e => {
                let {
                    className: t,
                    isBet: n,
                    label: s,
                    variant: i = "primary",
                    icon: d,
                    patterns: m,
                    toggleButtonsOnFocus: h,
                    children: p
                } = e;
                return (0, a.jsxs)("div", {
                    className: r()(u().formField, c[i], t),
                    "data-sentry-component": "FormField",
                    "data-sentry-source-file": "FormField.tsx",
                    children: [(0, a.jsx)(o.Z, {
                        element: "p",
                        textType: "labelsRegular",
                        "data-sentry-element": "Text",
                        "data-sentry-source-file": "FormField.tsx",
                        children: s
                    }), (0, a.jsxs)("div", {
                        className: r()("customInputInner", u().formFieldInner),
                        children: [p, (0, a.jsx)("div", {
                            className: r()("customInputInnerButtons", u().formFieldInnerButtons, h && u().formFieldInnerButtonsToggleFocus),
                            style: n ? {
                                right: "16px"
                            } : {},
                            children: m ? m.map((e, t) => (0, a.jsx)(l.Z, {
                                variant: "inputButton",
                                onClick: e.onClick,
                                className: u().innerButton,
                                children: e.label
                            }, t)) : (0, a.jsx)("div", {
                                className: r()(u().inputIcon),
                                children: d
                            })
                        })]
                    })]
                })
            }
        },
        7458: function(e, t, n) {
            "use strict";
            var a = n(85893),
                s = n(58733);
            t.Z = e => {
                let {
                    value: t,
                    onChange: n,
                    precision: r = 2,
                    disableWheel: o = !1,
                    pauseBlurValidation: l,
                    onBlur: i = () => {},
                    ...u
                } = e;
                return (0, a.jsx)(s.Z, {
                    type: "number",
                    value: 0 === t ? "0" : null != t ? t : "",
                    ...u,
                    onChange: e => {
                        "" === e.currentTarget.value ? n("") : "0" === e.currentTarget.value ? n(0) : "0.0" === e.currentTarget.value || "0,0" === e.currentTarget.value ? n("0.0") : n(parseFloat(Number(e.currentTarget.value).toFixed(r)))
                    },
                    onBlur: e => {
                        if (i(e), l) return;
                        let t = parseFloat(Number(e.currentTarget.value).toFixed(r));
                        if (e.currentTarget.min) {
                            let a = Number(e.currentTarget.min);
                            t < a && n(a)
                        }
                        if (e.currentTarget.max) {
                            let a = Number(e.currentTarget.max);
                            t > a && n(a)
                        }
                    },
                    onWheel: () => {
                        var e;
                        o && (null === (e = document.activeElement) || void 0 === e || e.blur())
                    },
                    "data-sentry-element": "Input",
                    "data-sentry-component": "NumberInput",
                    "data-sentry-source-file": "NumberInput.tsx"
                })
            }
        },
        39050: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return plinko_PlinkoGame
                }
            });
            var a = n(85893),
                s = n(67294),
                r = n(80615),
                o = n(26118),
                l = n(2664),
                i = n(93967),
                u = n.n(i),
                c = n(49089),
                d = n(77579),
                m = n(4595),
                h = n(58733),
                p = n(37282),
                y = n.n(p),
                g = n(4277),
                f = n(11163),
                x = n(86436),
                v = n(20875);

            function PlinkoBet(e) {
                let {
                    user: t,
                    gameEngineRef: n,
                    className: r,
                    ...o
                } = e, i = (0, l.I0)(), p = (0, f.useRouter)(), [b, I] = (0, s.useState)(0), [_, k] = (0, s.useState)(10), [C, w] = (0, s.useState)("easy"), {
                    autoBetPlinko: j
                } = (0, l.v9)(e => e.auth), {
                    fflags: B
                } = (0, l.v9)(e => e.auth), [T, N] = (0, s.useState)(!1), [P, S] = (0, s.useState)(!1), [R, L] = (0, s.useState)(!1), [E, A] = (0, s.useState)("increase"), [Z, O] = (0, s.useState)("increase"), [F, G] = (0, s.useState)(0), [M, D] = (0, s.useState)("10"), [W, H, U, V] = (0, g.Z)("0"), [q, J, z, X] = (0, g.Z)("0"), [K, $, Y, Q] = (0, g.Z)("0"), [ee, et, en, ea] = (0, g.Z)("0"), [es, er, eo, el] = (0, g.Z)("0"), [ei, eu, ec, ed] = (0, g.Z)("0");
                (0, s.useEffect)(() => {
                    var e;
                    _ >= 8 && _ <= 16 && (null === (e = n.current) || void 0 === e || e.changeRows(parseInt(_)))
                }, [_]), (0, s.useEffect)(() => {
                    var e;
                    let t = "low";
                    "normal" === C && (t = "medium"), "hard" === C && (t = "high"), null === (e = n.current) || void 0 === e || e.changeRisk(t)
                }, [C]), (0, s.useEffect)(() => {
                    var e;
                    null === (e = n.current) || void 0 === e || e.changeBet(M)
                }, [M]);
                let requestRowsChange = function(e) {
                        n.current.betdisabeled || k(e)
                    },
                    setAutoBet = e => {
                        er(ei), i({
                            type: "SET_AUTO_BET_PLINKO",
                            payload: e
                        })
                    },
                    em = (0, s.useRef)(0),
                    eh = (0, s.useRef)(0);
                return (0, s.useEffect)(() => {
                    let e = !1;
                    p.events.on("routeChangeStart", () => {
                        setAutoBet(!1)
                    });
                    let autoBet = async () => {
                        for (; j && ("0" === es || em.current < parseInt(es)) && !e;) {
                            await new Promise(e => setTimeout(e, 600));
                            let e = await n.current.dropChips("manualbet");
                            if (em.current++, eh.current += e.wallet, parseFloat(ee) > 0 && eh.current >= parseFloat(ee) || parseFloat(K) > 0 && eh.current <= -parseFloat(K) || (e.wallet > 0 && (parseFloat(q) > 0 ? D(e => (Math.floor(parseFloat(e) * (1 + parseFloat(q) / 100) * 100) / 100).toString()) : D(F.toString())), e.wallet < 0 && (parseFloat(W) > 0 ? D(e => (Math.floor(parseFloat(e) * (1 + parseFloat(W) / 100) * 100) / 100).toString()) : D(F.toString())), parseInt(es) > 0 && em.current >= parseInt(es))) {
                                setAutoBet(!1);
                                break
                            }
                        }
                    };
                    return j && ("0" === es || parseInt(es) > 0) && autoBet(), () => {
                        e = !0, em.current = 0, eh.current = 0
                    }
                }, [j, ee, K, es]), (0, a.jsxs)("div", {
                    className: u()("gameBlock gameBet", y().plinkoBet, r),
                    ...o,
                    "data-sentry-component": "PlinkoBet",
                    "data-sentry-source-file": "plinko-bet.tsx",
                    children: [(0, a.jsx)("div", {
                        className: u()("gameBetTabs"),
                        style: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: (0, a.jsx)(x.Z, {
                            gameName: "plinko",
                            sideButtonType: "compact",
                            showAuto: !0,
                            showHistory: !0,
                            isAuto: T,
                            setIsAuto: N,
                            maxProfit: 1e6,
                            "data-sentry-element": "BetHeader",
                            "data-sentry-source-file": "plinko-bet.tsx"
                        })
                    }), (0, a.jsxs)("div", {
                        className: u()("customInput", "gameBetInput"),
                        children: [(0, a.jsx)(d.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: u()("customInputLabel"),
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "plinko-bet.tsx",
                            children: "Difficulty"
                        }), (0, a.jsxs)("div", {
                            className: u()("customInputOptions"),
                            children: [(0, a.jsx)(m.Z, {
                                variant: "betOption",
                                isActive: "easy" === C,
                                onClick: () => w("easy"),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "plinko-bet.tsx",
                                children: "Easy"
                            }), (0, a.jsx)(m.Z, {
                                variant: "betOption",
                                isActive: "normal" === C,
                                onClick: () => w("normal"),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "plinko-bet.tsx",
                                children: "Normal"
                            }), (0, a.jsx)(m.Z, {
                                variant: "betOption",
                                isActive: "hard" === C,
                                onClick: () => w("hard"),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "plinko-bet.tsx",
                                children: "Hard"
                            })]
                        })]
                    }), (0, a.jsx)(v.Z, {
                        value: M,
                        defaultValue: 10,
                        onChange: e => D(e),
                        hasCurrencyIcon: !0,
                        gameName: "plinko",
                        min: 1,
                        max: 5e4,
                        "data-sentry-element": "BetInput",
                        "data-sentry-source-file": "plinko-bet.tsx"
                    }), (0, a.jsxs)("div", {
                        className: u()("customInput", "gameBetInput"),
                        children: [(0, a.jsx)(d.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: u()("customInputLabel"),
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "plinko-bet.tsx",
                            children: "Amount of rows"
                        }), (0, a.jsxs)("div", {
                            className: u()("customInputInner"),
                            children: [(0, a.jsx)(h.Z, {
                                onChange: e => requestRowsChange(e.currentTarget.value),
                                value: _,
                                "data-sentry-element": "Input",
                                "data-sentry-source-file": "plinko-bet.tsx"
                            }), (0, a.jsxs)("div", {
                                className: u()("customInputInnerButtons"),
                                children: [(0, a.jsx)(m.Z, {
                                    variant: "inputButton",
                                    onClick: () => requestRowsChange(8),
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "plinko-bet.tsx",
                                    children: "8"
                                }), (0, a.jsx)(m.Z, {
                                    variant: "inputButton",
                                    onClick: () => requestRowsChange(10),
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "plinko-bet.tsx",
                                    children: "10"
                                }), (0, a.jsx)(m.Z, {
                                    variant: "inputButton",
                                    onClick: () => requestRowsChange(12),
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "plinko-bet.tsx",
                                    children: "12"
                                }), (0, a.jsx)(m.Z, {
                                    variant: "inputButton",
                                    onClick: () => requestRowsChange(14),
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "plinko-bet.tsx",
                                    children: "14"
                                }), (0, a.jsx)(m.Z, {
                                    variant: "inputButton",
                                    onClick: () => requestRowsChange(16),
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "plinko-bet.tsx",
                                    children: "16"
                                })]
                            })]
                        })]
                    }), T && (0, a.jsxs)("div", {
                        className: u()("customInput", "gameBetInput"),
                        children: [(0, a.jsx)(d.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: u()("customInputLabel"),
                            children: "Number of Games"
                        }), (0, a.jsx)("div", {
                            className: u()("customInputInner"),
                            children: (0, a.jsx)(h.Z, {
                                pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                onKeyPress: e => {
                                    /[0-9.]/.test(e.key) || e.preventDefault()
                                },
                                hasCurrencyIcon: !0,
                                currencyIconUrl: "/icons/infinity.svg",
                                onChange: e => {
                                    er(e.currentTarget.value), eu(e.currentTarget.value)
                                },
                                value: ei,
                                iconPosition: "end",
                                onFocus: ec,
                                onBlur: ed,
                                placeholder: "0"
                            })
                        })]
                    }), T && (0, a.jsxs)("div", {
                        className: u()("customInput", "gameBetInput"),
                        children: [(0, a.jsx)(d.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: u()("customInputLabel"),
                            children: "On Win"
                        }), (0, a.jsxs)("div", {
                            className: u()("customInputInner"),
                            children: [(0, a.jsxs)("div", {
                                className: u()("customInputInnerButtonsLeft"),
                                children: [(0, a.jsx)(m.Z, {
                                    variant: "autoReset",
                                    onClick: () => {
                                        A("reset"), J("0"), L(!0)
                                    },
                                    className: u()({
                                        clicked: "reset" === E,
                                        unclicked: "increase" === E
                                    }),
                                    children: "Reset"
                                }), (0, a.jsx)(m.Z, {
                                    variant: "autoIncrease",
                                    onClick: () => {
                                        A("increase"), L(!1)
                                    },
                                    className: u()("customInputInnerButtonsLeftIncrease", {
                                        clicked: "increase" === E,
                                        unclicked: "reset" === E
                                    }),
                                    children: "Increase By"
                                })]
                            }), (0, a.jsx)(h.Z, {
                                pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                onKeyPress: e => {
                                    /[0-9.]/.test(e.key) || e.preventDefault()
                                },
                                hasCurrencyIcon: !0,
                                currencyIconUrl: "/icons/percentage.svg",
                                onChange: e => J(e.currentTarget.value),
                                value: q,
                                iconPosition: "end",
                                className: y().leftInput,
                                onFocus: z,
                                onBlur: X,
                                disabled: R
                            })]
                        })]
                    }), T && (0, a.jsxs)("div", {
                        className: u()("customInput", "gameBetInput"),
                        children: [(0, a.jsx)(d.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: u()("customInputLabel"),
                            children: "On Loss"
                        }), (0, a.jsxs)("div", {
                            className: u()("customInputInner"),
                            children: [(0, a.jsxs)("div", {
                                className: u()("customInputInnerButtonsLeft"),
                                children: [(0, a.jsx)(m.Z, {
                                    variant: "autoReset",
                                    onClick: () => {
                                        O("reset"), H("0"), S(!0)
                                    },
                                    className: u()({
                                        clicked: "reset" === Z,
                                        unclicked: "increase" === Z
                                    }),
                                    children: "Reset"
                                }), (0, a.jsx)(m.Z, {
                                    variant: "autoIncrease",
                                    onClick: () => {
                                        O("increase"), S(!1)
                                    },
                                    className: u()("customInputInnerButtonsLeftIncrease", {
                                        clicked: "increase" === Z,
                                        unclicked: "reset" === Z
                                    }),
                                    children: "Increase By"
                                })]
                            }), (0, a.jsx)(h.Z, {
                                pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                onKeyPress: e => {
                                    /[0-9.]/.test(e.key) || e.preventDefault()
                                },
                                hasCurrencyIcon: !0,
                                currencyIconUrl: "/icons/percentage.svg",
                                onChange: e => H(e.currentTarget.value),
                                value: W,
                                iconPosition: "end",
                                className: y().leftInput,
                                onFocus: U,
                                onBlur: V,
                                disabled: P
                            })]
                        })]
                    }), T && (0, a.jsxs)("div", {
                        className: y().inputWrapper,
                        children: [(0, a.jsxs)("div", {
                            className: u()("customInput", "gameBetInput"),
                            children: [(0, a.jsx)(d.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: u()("customInputLabel"),
                                children: "Stop on Net Gain"
                            }), (0, a.jsx)("div", {
                                className: u()("customInputInner"),
                                children: (0, a.jsx)(h.Z, {
                                    pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                    onKeyPress: e => {
                                        /[0-9.]/.test(e.key) || e.preventDefault()
                                    },
                                    hasCurrencyIcon: !0,
                                    onChange: e => et(e.currentTarget.value),
                                    value: ee,
                                    iconPosition: "end",
                                    onFocus: en,
                                    onBlur: ea
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: u()("customInput", "gameBetInput"),
                            children: [(0, a.jsx)(d.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: u()("customInputLabel"),
                                children: "Stop on Net Loss"
                            }), (0, a.jsx)("div", {
                                className: u()("customInputInner"),
                                children: (0, a.jsx)(h.Z, {
                                    pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                    onKeyPress: e => {
                                        /[0-9.]/.test(e.key) || e.preventDefault()
                                    },
                                    hasCurrencyIcon: !0,
                                    onChange: e => $(e.currentTarget.value),
                                    value: K,
                                    iconPosition: "end",
                                    onFocus: Y,
                                    onBlur: Q
                                })
                            })]
                        })]
                    }), T ? (0, a.jsx)(a.Fragment, {
                        children: j ? (0, a.jsx)(m.Z, {
                            variant: "danger",
                            onClick: () => {
                                setAutoBet(!1), eu("0")
                            },
                            className: u()("gameBetSubmit", "mobileBottomMargin"),
                            children: "Cancel auto"
                        }) : (0, a.jsx)(m.Z, {
                            variant: "primary",
                            onClick: () => {
                                setAutoBet(!0), I(t.wallet), G(parseFloat(M))
                            },
                            className: u()("gameBetSubmit", "mobileBottomMargin"),
                            children: "Start Autoplay"
                        })
                    }) : (0, a.jsx)(m.Z, {
                        variant: "primary",
                        onClick: () => {
                            n.current.changeBet(M), n.current.dropChips("manualbet"), B.fe_ga_enabled && c.ZP.event({
                                category: "Plinko game",
                                action: "Joined plinko game",
                                value: parseFloat(M)
                            })
                        },
                        className: u()("gameBetSubmit", "mobileBottomMargin"),
                        children: "Start new game"
                    })]
                })
            }
            var b = n(89842);
            let I = {
                FRICTION: .9,
                RESTITUTION: .8,
                RADIUS: 5,
                FILL: "#5F6892"
            };
            I.DIAMETER = 2 * I.RADIUS;
            let _ = {
                DENSITY: .1,
                FRICTION: .9,
                RESTITUTION: .8,
                RADIUS: 7,
                FILL: "#ff4827"
            };
            _.DIAMETER = 2 * _.RADIUS;
            var k = n(14670),
                C = n.n(k);
            let GameObject = class GameObject {
                addToEngine(e) {
                    b.World.add(e, this.body)
                }
                constructor({
                    id: e,
                    x: t,
                    y: n,
                    r: a
                }) {
                    this.id = e, this.x = t, this.y = n, this.r = a, this.renderId = C().generate()
                }
            };
            let Plinko = class Plinko extends GameObject {
                createPhysics() {
                    let e = {
                        friction: I.FRICTION,
                        restitution: I.RESTITUTION
                    };
                    this.body = b.Bodies.circle(this.x, this.y, this.r, e), b.Body.setDensity(this.body, 1), this.body.isStatic = !0, this.body.position.x = this.x, this.body.position.y = this.y, this.body.label = this.type, this.body.isShrinking = !0, this.body.render.strokeStyle = "hsla(0, 0%, 100%, 0.2)", this.body.render.fillStyle = I.FILL
                }
                constructor({
                    id: e,
                    x: t,
                    y: n,
                    r: a
                }) {
                    super({
                        id: e,
                        x: t,
                        y: n,
                        r: a
                    }), this.type = "plinko", this.createPhysics(), this.body.parentObject = this
                }
            };
            let Particle = class Particle extends GameObject {
                createPhysics() {
                    let e = {
                        restitution: _.RESTITUTION,
                        friction: _.FRICTION
                    };
                    this.body = b.Bodies.circle(this.x, this.y, this.r, e), this.area = this.body.area, b.Body.setDensity(this.body, _.DENSITY), this.body.label = this.type, this.body.position.x = this.x, this.body.position.y = this.y, this.body.render.fillStyle = _.FILL
                }
                constructor({
                    id: e,
                    x: t,
                    y: n,
                    r: a
                }) {
                    super({
                        id: e,
                        x: t,
                        y: n,
                        r: a
                    }), this.type = "particle", this.diameter = _.DIAMETER, this.fillStyle = Particle.fillStyles[Math.floor(Math.random() * Particle.fillStyles.length)], this.angle = 0, this.createPhysics(), this.body.parentObject = this, Particle.count++, this.img = null
                }
            };
            Particle.count = 0, Particle.fillStyles = ["solid"];
            var w = n(2181),
                j = n(62961),
                B = n(86501),
                T = n(54847);
            let GameEngine = class GameEngine extends s.Component {
                init(e, t) {
                    this.particles = {}, this.plinkos = {}, this.lastParticleId = 0, this.isRunning = !1, this.createEnvironment(e, t)
                }
                createEnvironment(e, t) {
                    this._createPlinkos(e, t), b.Events.on(this.engine, "collisionStart", this.onCollisionStart)
                }
                IiJ(e) {
                    try {
                        let t = this.state.multipliers["".concat(this.state.ROWS, "-").concat(this.state.risk)].length;
                        if (!t) throw Error("rows is not defined");
                        let n = ~~(t / 2),
                            a = Math.min(Math.abs(e - n), n) / n * (this.state.colorScales.length - 1),
                            s = this.state.colorScales[Math.round(a)];
                        return s
                    } catch (t) {
                        return console.error(t), e + 1
                    }
                }
                render() {
                    return (0, a.jsxs)("div", {
                        className: "plinko-grid",
                        "data-sentry-component": "GameEngine",
                        "data-sentry-source-file": "GameEngine.jsx",
                        children: [(0, a.jsx)("div", {
                            className: "main_section",
                            children: (0, a.jsxs)("div", {
                                className: "canvas-container",
                                id: "canvasWrapper",
                                children: [(0, a.jsx)("div", {
                                    id: "techvr"
                                }), (0, a.jsx)("div", {
                                    className: "pegs rows".concat(this.state.ROWS),
                                    children: (0, a.jsx)("div", {
                                        className: "pegs_wrapper",
                                        children: this.state.multipliers["".concat(this.state.ROWS, "-").concat(this.state.risk)].map((e, t) => (0, a.jsx)("div", {
                                            className: "peg peg".concat(this.IiJ(t)),
                                            style: {
                                                top: this.state["peg".concat(t + 1)] ? "10px" : "0px"
                                            },
                                            children: (0, a.jsxs)("span", {
                                                className: "pegtext",
                                                children: [e, "\xd7"]
                                            })
                                        }, t))
                                    })
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "plinko_tab_sidepanel"
                        })]
                    })
                }
                constructor(e) {
                    super(e), this.createCanvas = () => {
                        console.log("creating canvas"), this.engine = b.Engine.create(document.getElementById("techvr")), this.engine.world.gravity.y = 1.5, this.engine.render.canvas.height = this.state.CANVAS_HEIGHT, this.engine.render.canvas.width = this.state.CANVAS_WIDTH, this.engine.render.options.wireframes = !1, this.engine.render.options.background = this.state.CANVAS_COLOR, this.runner = b.Runner.create({
                            isFixed: !0
                        }), b.Runner.run(this.runner, this.engine), console.log("created")
                    }, this.dropChips = async e => {
                        if ("manualbet" === e) try {
                            let e = await (0, w.orI)(this.state.ROWS, this.state.risk, this.state.betAmount);
                            if (e.success) return this._createParticle(e), e;
                            return e.msg.includes("afford this") && (console.debug("show deposit modal"), this.setAutoBet(!1), this.props.dispatch({
                                type: j.Mr,
                                shouldSendEvent: !0
                            })), B.ZP.error(e.msg), {
                                success: !1,
                                wallet: 0
                            }
                        } catch (e) {
                            if (console.log("There was an error while rolling plinko !:", e), e.response && 400 === e.response.status) {
                                var t;
                                if (e.response.data.error.includes("Auth")) {
                                    this.setAutoBet(!1), this.props.dispatch({
                                        type: j.gr
                                    });
                                    return
                                }
                                e.response.data.error.includes("afford this") && (console.debug("show deposit modal"), this.setAutoBet(!1), this.props.dispatch({
                                    type: j.Mr,
                                    shouldSendEvent: !0
                                })), B.ZP.error(null !== (t = e.response.data.error) && void 0 !== t ? t : "There was an error while rolling this game!")
                            } else B.ZP.error("There was an error while rolling this game! Please try again later!");
                            return {
                                success: !1,
                                wallet: 0
                            }
                        }
                        "autobet" !== e || this.state.betdisabeled || (this._createParticle(), this.setState({
                            betdisabeled: !0
                        }, () => {
                            setTimeout(() => {
                                this.setState({
                                    betdisabeled: !1
                                })
                            }, 1e3)
                        }))
                    }, this.changeBet = e => {
                        this.state.betAmount = Number(e)
                    }, this.changeRisk = e => {
                        var t;
                        document.getElementById("canvasWrapper").style.display = "none", document.getElementById("techvr").innerHTML = "", b.World.remove(null === (t = this.engine) || void 0 === t ? void 0 : t.world, "composite"), b.Render.stop(this.render), b.Engine.clear(this.engine), b.Events.off(this.engine, "collisionStart", this.onCollisionStart), this.setState({
                            risk: e
                        }, () => {
                            this.createCanvas(), this.init(this.state.ROWS, this.state.plinkoradius), document.getElementById("canvasWrapper").style.display = "block"
                        })
                    }, this.changeRows = e => {
                        document.getElementById("canvasWrapper").style.display = "none", document.getElementById("techvr").innerHTML = "", b.World.remove(this.engine.world, "composite"), b.Render.stop(this.render), b.Engine.clear(this.engine), b.Events.off(this.engine, "collisionStart", this.onCollisionStart), this.setState({
                            ROWS: e
                        }, () => {
                            this.createCanvas(), this.init(this.state.ROWS, this.state.plinkoradius), document.getElementById("canvasWrapper").style.display = "block"
                        })
                    }, this.setAutoBet = e => {
                        T.Z.dispatch({
                            type: "SET_AUTO_BET_PLINKO",
                            payload: e
                        })
                    }, this.componentDidMount = async () => {
                        let fetchData = async () => {
                                try {
                                    let e = await (0, w.spc)();
                                    return e
                                } catch (e) {}
                            },
                            e = await fetchData();
                        var t = {};
                        if (!e || !("payouts" in e)) return B.ZP.error("There was an error while fetching plinko multipliers!");
                        for (var n = 0; n < e.payouts.length; n++) {
                            var a = e.payouts[n];
                            t[a.rows + "-" + a.risk] = a.payouts
                        }
                        this.createCanvas(), this.init(this.state.ROWS, this.state.plinkoradius)
                    }, this.loadData = async () => {
                        try {
                            let e = await (0, w.spc)();
                            console.debug(e)
                        } catch (e) {
                            console.log("There was an error while loading user vip data:", e)
                        }
                    }, this._createParticle = e => {
                        let t = this.lastParticleId++ % 255;
                        var n = this.state.dropPositions[String(e.game.rows)][e.position][Math.floor(Math.random() * this.state.dropPositions[String(e.game.rows)][e.position].length)];
                        let a = 350 + n,
                            s = this.state.particleradius,
                            r = new Particle({
                                id: t,
                                x: a,
                                y: 18,
                                r: s
                            });
                        r.recentlyDropped = !0, r.dropX = a, r.walletChange = e.wallet, r.game = e.game, r.body.collisionFilter = {
                            mask: 1,
                            category: 2,
                            group: 0
                        }, this.particles[String(t)] = r, r.addToEngine(this.engine.world);
                        let o = setInterval(() => {
                            this.engine.world.bodies.forEach(e => {
                                if ("particle" === e.label && e.position.y > this.state.CANVAS_HEIGHT - 5 - this.state.particleradius) {
                                    let t = e.parentObject,
                                        n = [],
                                        a = 0,
                                        s = this.engine.world.bodies.filter(e => "plinko" === e.label);
                                    for (let e = s.length - 1; e >= 0; e--)(a += 1) <= this.state.ROWS + 2 && n.push(s[e]);
                                    let r = null;
                                    if (n.reverse().filter((e, n) => {
                                            if (e.position.x > t.body.position.x && null === r) return r = n, e
                                        }), null !== r) {
                                        let e = "peg".concat(r);
                                        this.setState({
                                            [e]: !0
                                        }, () => {
                                            setTimeout(() => {
                                                this.setState({
                                                    [e]: !1
                                                })
                                            }, 100)
                                        }), this.props.dispatch({
                                            type: j.Uk,
                                            payload: t.walletChange
                                        })
                                    }
                                    b.World.remove(this.engine.world, t.body);
                                    let l = this.engine.world.bodies.filter(e => "particle" === e.label);
                                    setTimeout(() => {
                                        0 === l.length && clearInterval(o)
                                    }, 10)
                                }
                            })
                        }, this.state.TIMESTEP)
                    }, this.onCollisionStart = e => {
                        let t = e.pairs;
                        for (let e = 0; e < t.length; e++) {
                            let n = t[e],
                                a = n.bodyA,
                                s = n.bodyB;
                            "plinko" === a.label && s.label, "plinko" === a.label && (a.render.lineWidth = 15, setTimeout(() => {
                                a.render.lineWidth = 0
                            }, 90))
                        }
                    }, this._createPlinkos = (e, t) => {
                        let n = this.state.CANVAS_HEIGHT / e * this.state.ROW_ADJUSTMENT,
                            a = this.state.CANVAS_WIDTH / (e + 2) * this.state.COL_ADJUSTMENT;
                        this.setState({
                            COL_SPACING: a,
                            particleradius: a / 4.4
                        });
                        let s = 1.5 * n,
                            r = a / 2,
                            o = 0,
                            l = 2;
                        for (; l < e + 2; l++) {
                            let i = (e + 2 - l) * r + 90 * this.state.COL_ADJUSTMENT + 4;
                            for (let r = 0; r <= l; r++) {
                                let u = r * a + i,
                                    c = s + e + (l - 2) * n,
                                    d = new Plinko({
                                        id: o,
                                        x: u,
                                        y: c,
                                        r: t
                                    });
                                this.plinkos[o] = d, d.body.collisionFilter = {
                                    mask: 2,
                                    category: 1
                                }, d.addToEngine(this.engine.world), o++
                            }
                        }
                    }, console.debug(e), this.state = {
                        ROWS: 10,
                        betAmount: 10,
                        betdisabeled: !1,
                        plinkoradius: 5,
                        particleradius: 7,
                        risk: "low",
                        colorScales: Array(7).fill(null).map((e, t) => 7 - t),
                        multipliers: {
                            "8-low": [5.6, 2.1, 1.1, 1, .5, 1, 1.1, 2.1, 5.6],
                            "8-medium": [13, 3, 1.3, .7, .4, .7, 1.3, 3, 13],
                            "8-high": [29, 4, 1.5, .3, .2, .3, 1.5, 4, 29],
                            "9-low": [5.6, 2, 1.6, 1, .7, .7, 1, 1.6, 2, 5.6],
                            "9-medium": [18, 4, 1.7, .9, .5, .5, .9, 1.7, 4, 18],
                            "9-high": [43, 7, 2, .6, .2, .2, .6, 2, 7, 43],
                            "10-low": [8.9, 3, 1.4, 1.1, 1, .5, 1, 1.1, 1.4, 3, 8.9],
                            "10-medium": [22, 5, 2, 1.4, .6, .4, .6, 1.4, 2, 5, 22],
                            "10-high": [76, 10, 3, .9, .3, .2, .3, .9, 3, 10, 76],
                            "11-low": [8.4, 3, 1.9, 1.3, 1, .7, .7, 1, 1.3, 1.9, 3, 8.4],
                            "11-medium": [24, 6, 3, 1.8, .7, .5, .5, .7, 1.8, 3, 6, 24],
                            "11-high": [120, 14, 5.2, 1.4, .4, .2, .2, .4, 1.4, 5.2, 14, 120],
                            "12-low": [10, 3, 1.6, 1.4, 1.1, 1, .5, 1, 1.1, 1.4, 1.6, 3, 10],
                            "12-medium": [33, 11, 4, 2, 1.1, .6, .3, .6, 1.1, 2, 4, 11, 33],
                            "12-high": [170, 24, 8.1, 2, .7, .2, .2, .2, .7, 2, 8.1, 24, 170],
                            "13-low": [8.1, 4, 3, 1.9, 1.2, .9, .7, .7, .9, 1.2, 1.9, 3, 4, 8.1],
                            "13-medium": [43, 13, 6, 3, 1.3, .7, .4, .4, .7, 1.3, 3, 6, 13, 43],
                            "13-high": [260, 37, 11, 4, 1, .2, .2, .2, .2, 1, 4, 11, 37, 260],
                            "14-low": [7.1, 4, 1.9, 1.4, 1.3, 1.1, 1, .5, 1, 1.1, 1.3, 1.4, 1.9, 4, 7.1],
                            "14-medium": [58, 15, 7, 4, 1.9, 1, .5, .2, .5, 1, 1.9, 4, 7, 15, 58],
                            "14-high": [420, 56, 18, 5, 1.9, .3, .2, .2, .2, .3, 1.9, 5, 18, 56, 420],
                            "15-low": [15, 8, 3, 2, 1.5, 1.1, 1, .7, .7, 1, 1.1, 1.5, 2, 3, 8, 15],
                            "15-medium": [88, 18, 11, 5, 3, 1.3, .5, .3, .3, .5, 1.3, 3, 5, 11, 18, 88],
                            "15-high": [620, 83, 27, 8, 3, .5, .2, .2, .2, .2, .5, 3, 8, 27, 83, 620],
                            "16-low": [16, 9, 2, 1.4, 1.4, 1.2, 1.1, 1, .5, 1, 1.1, 1.2, 1.4, 1.4, 2, 9, 16],
                            "16-medium": [110, 41, 10, 5, 3, 1.5, 1, .5, .3, .5, 1, 1.5, 3, 5, 10, 41, 110],
                            "16-high": [1e3, 130, 26, 9, 4, 2, .2, .2, .2, .2, .2, 2, 4, 9, 26, 130, 1e3]
                        },
                        dropPositions: {
                            8: {
                                1: [14.550000000000068, 19.550000000000125, 24.600000000000193, 29.600000000000307],
                                2: [.05000000000001137, 13.60000000000008, 20.600000000000136, 28.35000000000025, 45.59999999999957],
                                3: [.14999999999997726, 13.500000000000057, 45.499999999999545, 51.299999999999216, 57.44999999999885],
                                4: [.25, 60.94999999999868, 74.29999999999791],
                                5: [59.39999999999878],
                                6: [59.74999999999875],
                                7: [.10000000000002274, 6.149999999999977, 14.500000000000057, 41.549999999999784, 59.849999999998715],
                                8: [.8999999999999773, 5.949999999999989, 10.950000000000045, 31.65000000000032, 39.39999999999992],
                                9: [30.100000000000307, 35.40000000000015, 40.44999999999982, 60.49999999999869, 65.79999999999842]
                            },
                            9: {
                                1: [.05000000000001137, 15.400000000000091, 20.45000000000016, 25.55000000000024],
                                2: [.14999999999997726, 15.050000000000068, 21.300000000000182, 27.500000000000227, 34.80000000000018],
                                3: [.30000000000001137, 5.849999999999966, 16.60000000000008, 22.100000000000193, 27.30000000000024],
                                4: [5.699999999999989, 17.40000000000009, 23.700000000000216, 45.04999999999956, 51.14999999999924],
                                5: [8.349999999999966, 19.650000000000148, 50.44999999999925, 61.04999999999865, 75.64999999999782],
                                6: [8.800000000000011, 40.24999999999983, 47.99999999999943, 67.09999999999832, 75.04999999999791],
                                7: [4.349999999999966, 12.400000000000034, 35.600000000000136, 42.59999999999974, 54.299999999999045],
                                8: [6, 11.700000000000045, 29.750000000000284, 35.15000000000015, 42.04999999999973],
                                9: [2.6999999999999886, 7.7999999999999545, 12.900000000000034, 25.200000000000216, 30.65000000000032],
                                10: [30.450000000000273, 35.65000000000009, 40.74999999999983, 57.64999999999884, 62.69999999999857]
                            },
                            10: {
                                1: [.05000000000001137, 16.450000000000102, 21.50000000000017, 26.500000000000227],
                                2: [.6000000000000227, 16.950000000000102, 22.950000000000216, 28.250000000000284, 43.59999999999968],
                                3: [1.9499999999999886, 16.250000000000114, 22.900000000000205, 32.70000000000027, 43.99999999999966],
                                4: [2.4499999999999886, 8.5, 15.800000000000068, 20.850000000000136, 28.550000000000296],
                                5: [4.099999999999966, 21.800000000000182, 44.29999999999961, 52.24999999999915, 58.59999999999883],
                                6: [5.199999999999989, 12.850000000000023, 22.600000000000193, 37.400000000000034, 46.44999999999948],
                                7: [1.3999999999999773, 6.849999999999966, 13.950000000000045, 37.150000000000034, 53.99999999999909],
                                8: [.6999999999999886, 25.750000000000227, 31.45000000000033, 38.94999999999993, 44.19999999999965],
                                9: [6.300000000000011, 12.150000000000034, 25.80000000000024, 36.2000000000001, 41.44999999999976],
                                10: [4.699999999999989, 9.75, 14.750000000000057, 27.200000000000273, 33.10000000000025],
                                11: [30.100000000000307, 35.15000000000015, 40.199999999999875, 55.349999999999]
                            },
                            11: {
                                1: [.14999999999997726, 5.25, 16.85000000000008, 22.300000000000182, 27.500000000000227],
                                2: [.10000000000002274, 5.849999999999966, 15.400000000000091, 20.650000000000148, 25.650000000000205],
                                3: [.5500000000000114, 10.050000000000011, 15.35000000000008, 22.150000000000205, 28.15000000000026],
                                4: [3.25, 12.950000000000045, 18.300000000000125, 25.10000000000025, 46.69999999999948],
                                5: [2.6999999999999886, 12.600000000000023, 19.800000000000125, 27.65000000000026, 34.25000000000017],
                                6: [1.1499999999999773, 9.149999999999977, 18.550000000000125, 24.250000000000227, 34.200000000000216],
                                7: [.05000000000001137, 8.899999999999977, 14.450000000000045, 25.80000000000024, 34.75000000000017],
                                8: [.25, 9.550000000000011, 23.150000000000205, 32.35000000000031, 38.84999999999991],
                                9: [3.1499999999999773, 13.300000000000068, 32.20000000000033, 40.59999999999985, 47.04999999999944],
                                10: [3.1000000000000227, 12.700000000000045, 28.250000000000284, 35.90000000000009, 44.64999999999958],
                                11: [7.2999999999999545, 12.450000000000045, 31.50000000000034, 36.900000000000034, 43.24999999999966],
                                12: [30.750000000000284, 36.450000000000045, 41.94999999999976, 53.49999999999909, 58.59999999999883]
                            },
                            12: {
                                1: [.05000000000001137, 5.199999999999989, 16.15000000000009, 21.800000000000182, 26.85000000000025],
                                2: [.14999999999997726, 5.399999999999977, 15.10000000000008, 22.25000000000017, 27.30000000000024],
                                3: [.75, 5.899999999999977, 11.850000000000023, 18.600000000000136, 25.900000000000205],
                                4: [1.8500000000000227, 7.149999999999977, 13.000000000000057, 22.900000000000205, 28.450000000000273],
                                5: [.8999999999999773, 6.550000000000011, 13.650000000000034, 20.75000000000017, 26.000000000000227],
                                6: [2.25, 7.399999999999977, 12.650000000000034, 19.050000000000125, 24.700000000000216],
                                7: [2.5, 7.75, 16.200000000000102, 21.400000000000148, 27.90000000000026],
                                8: [1, 11.200000000000045, 18.450000000000102, 25.10000000000025, 30.65000000000032],
                                9: [2.8500000000000227, 8.349999999999966, 13.500000000000057, 23.00000000000017, 28.000000000000284],
                                10: [3.3999999999999773, 9.199999999999989, 16.500000000000114, 25.250000000000227, 30.500000000000284],
                                11: [.35000000000002274, 8.449999999999989, 13.800000000000068, 26.10000000000025, 31.65000000000032],
                                12: [1.5500000000000114, 8.599999999999966, 14.500000000000057, 25.450000000000216, 30.800000000000296],
                                13: [9.300000000000011, 14.750000000000057, 30.200000000000273, 36.40000000000009, 42.39999999999975]
                            },
                            13: {
                                0: [2.6000000000000227, 17.90000000000009, 23.350000000000193, 29.750000000000284],
                                1: [2.1999999999999886, 7.2999999999999545, 14.550000000000068, 19.850000000000136, 24.950000000000216],
                                2: [2.6499999999999773, 7.949999999999989, 14.500000000000057, 19.550000000000125, 24.650000000000205],
                                3: [.30000000000001137, 6.300000000000011, 11.400000000000034, 16.60000000000008, 23.600000000000193],
                                4: [.44999999999998863, 8.599999999999966, 16.15000000000009, 22.25000000000017, 29.700000000000273],
                                5: [.6000000000000227, 7.099999999999966, 13.200000000000045, 19.300000000000125, 25.55000000000024],
                                6: [2.8000000000000114, 8.649999999999977, 14.10000000000008, 19.600000000000136, 25.000000000000227],
                                7: [.8999999999999773, 6.149999999999977, 11.350000000000023, 16.450000000000102, 22.050000000000182],
                                8: [.14999999999997726, 6.800000000000011, 12.200000000000045, 18.100000000000136, 23.200000000000216],
                                9: [1.1000000000000227, 6.25, 11.950000000000045, 17.000000000000114, 24.400000000000205],
                                10: [1.1499999999999773, 7.25, 13.050000000000068, 18.900000000000148, 24.050000000000182],
                                11: [1.3500000000000227, 7.399999999999977, 13.800000000000068, 18.800000000000125, 30.300000000000296],
                                12: [1, 7.449999999999989, 13.35000000000008, 26.55000000000024, 33.30000000000024],
                                13: [1.0500000000000114, 9.800000000000011, 15.10000000000008, 27.500000000000227, 32.70000000000027],
                                14: [.05000000000001137, 9.949999999999989, 15.150000000000091, 30.450000000000273, 36.25000000000006]
                            },
                            14: {
                                1: [3.5, 9.050000000000011, 18.850000000000136, 25.200000000000216, 45.84999999999951],
                                2: [1.5, 7.75, 18.200000000000102, 23.650000000000205, 28.800000000000296],
                                3: [1.6999999999999886, 6.899999999999977, 13.000000000000057, 19.400000000000148, 24.900000000000205],
                                4: [1.4499999999999886, 8, 17.600000000000136, 24.350000000000193, 29.500000000000284],
                                5: [.19999999999998863, 7, 12.000000000000057, 17.250000000000114, 22.850000000000193],
                                6: [.05000000000001137, 5.550000000000011, 12.650000000000034, 18.300000000000125, 24.850000000000193],
                                7: [.44999999999998863, 7.449999999999989, 13.550000000000068, 20.00000000000017, 25.750000000000227],
                                8: [.9499999999999886, 7.0499999999999545, 13.200000000000045, 18.70000000000016, 24.250000000000227],
                                9: [.5500000000000114, 7.25, 12.250000000000057, 18.400000000000148, 23.550000000000182],
                                10: [.35000000000002274, 7.349999999999966, 12.400000000000034, 18.600000000000136, 25.900000000000205],
                                11: [.6000000000000227, 9.25, 14.250000000000057, 20.550000000000182, 27.30000000000024],
                                12: [.25, 9, 15.950000000000102, 23.500000000000227, 30.500000000000284],
                                13: [.10000000000002274, 11, 16.15000000000009, 24.200000000000216, 31.300000000000296],
                                14: [.5, 11.450000000000045, 18.500000000000114, 29.65000000000026, 35.00000000000017],
                                15: [2.1499999999999773, 14.150000000000091, 30.700000000000273, 36.2000000000001, 41.94999999999976]
                            },
                            15: {
                                1: [7.5499999999999545, 18.300000000000125, 23.450000000000216, 29.90000000000032],
                                2: [3.25, 8.399999999999977, 17.200000000000102, 22.900000000000205, 27.90000000000026],
                                3: [3, 8.349999999999966, 17.950000000000102, 24.55000000000024, 33.20000000000027],
                                4: [.30000000000001137, 5.75, 13.000000000000057, 19.400000000000148, 24.750000000000227],
                                5: [.39999999999997726, 6.449999999999989, 11.450000000000045, 17.500000000000114, 23.700000000000216],
                                6: [.6999999999999886, 7.699999999999989, 12.800000000000068, 18.250000000000114, 24.250000000000227],
                                7: [.25, 5.550000000000011, 14.60000000000008, 19.70000000000016, 26.05000000000024],
                                8: [.8500000000000227, 6.149999999999977, 11.400000000000034, 16.40000000000009, 24.450000000000216],
                                9: [.14999999999997726, 6.550000000000011, 11.900000000000034, 17.300000000000125, 23.900000000000205],
                                10: [.9499999999999886, 6.399999999999977, 11.5, 17.40000000000009, 22.850000000000193],
                                11: [.10000000000002274, 5.599999999999966, 11, 16.450000000000102, 22.100000000000193],
                                12: [1.1999999999999886, 11.200000000000045, 16.950000000000102, 25.650000000000205, 31.050000000000296],
                                13: [.05000000000001137, 5.349999999999966, 12.050000000000011, 17.550000000000125, 23.750000000000227],
                                14: [1.6000000000000227, 7.0499999999999545, 13.800000000000068, 20.350000000000136, 26.80000000000024],
                                15: [.6000000000000227, 5.849999999999966, 13.250000000000057, 30.40000000000032, 36.15000000000009],
                                16: [.5500000000000114, 13.550000000000068, 26.85000000000025, 32.20000000000033, 37.60000000000002]
                            },
                            16: {
                                0: [9.550000000000011, 15.150000000000091, 20.25000000000017, 25.85000000000025, 41.99999999999977],
                                1: [2, 9.649999999999977, 18.600000000000136, 23.750000000000227, 29.40000000000026],
                                2: [2.4499999999999886, 15.300000000000068, 20.550000000000182, 25.700000000000216, 35.65000000000009],
                                3: [.10000000000002274, 5.349999999999966, 10.850000000000023, 17.65000000000009, 22.800000000000182],
                                4: [2.6000000000000227, 9.800000000000011, 15.400000000000091, 20.800000000000182, 27.450000000000273],
                                5: [.6999999999999886, 6.25, 11.450000000000045, 17.500000000000114, 23.100000000000193],
                                6: [.5, 5.849999999999966, 11.350000000000023, 16.35000000000008, 22.950000000000216],
                                7: [.6499999999999773, 6.349999999999966, 11.400000000000034, 16.500000000000114, 21.70000000000016],
                                8: [.75, 6.599999999999966, 11.700000000000045, 16.750000000000114, 21.900000000000205],
                                9: [.19999999999998863, 6.050000000000011, 11.850000000000023, 17.100000000000136, 22.550000000000182],
                                10: [1.75, 6.949999999999989, 12.200000000000045, 18.050000000000125, 24.250000000000227],
                                11: [.5500000000000114, 5.949999999999989, 12.100000000000023, 17.40000000000009, 24.400000000000205],
                                12: [.44999999999998863, 7.75, 13.900000000000091, 20.00000000000017, 25.000000000000227],
                                13: [.30000000000001137, 5.800000000000011, 11.150000000000034, 19.050000000000125, 24.650000000000205],
                                14: [.14999999999997726, 5.599999999999966, 13.250000000000057, 19.75000000000017, 25.400000000000205],
                                15: [.05000000000001137, 5.550000000000011, 10.900000000000034, 15.900000000000091, 24.050000000000182],
                                16: [1.3000000000000114, 7.399999999999977, 14.550000000000068, 23.00000000000017, 34.30000000000018],
                                17: [2.1999999999999886, 7.849999999999966, 15.050000000000068, 24.350000000000193, 30.600000000000307]
                            }
                        },
                        ROW_ADJUSTMENT: .9,
                        COL_ADJUSTMENT: .8,
                        CANVAS_WIDTH: 760,
                        CANVAS_HEIGHT: 570,
                        CANVAS_COLOR: "transparent",
                        TIMESTEP: 4e3 / 60,
                        PARTICLE: _
                    }, this.changeRows = this.changeRows.bind(this)
                }
            };
            var plinko_GameEngine = function(e) {
                let t = (0, l.I0)();
                return (0, a.jsx)(GameEngine, { ...e,
                    ref: e.innerRef,
                    dispatch: t
                })
            };
            n(52537);
            let plinko_Plinko = class plinko_Plinko extends s.Component {
                render() {
                    return (0, a.jsx)("div", {
                        className: "plinko",
                        "data-sentry-component": "Plinko",
                        "data-sentry-source-file": "index.jsx",
                        children: (0, a.jsx)(plinko_GameEngine, {
                            innerRef: this.PlinkoRef,
                            "data-sentry-element": "GameEngine",
                            "data-sentry-source-file": "index.jsx"
                        })
                    })
                }
                constructor(e) {
                    super(e), this.PlinkoRef = s.createRef()
                }
            };

            function PlinkoGame(e) {
                let {
                    gameEngineRef: t,
                    className: n,
                    ...r
                } = e, o = (0, s.useRef)();
                return (0, s.useEffect)(() => {
                    t.current = o.current.PlinkoRef.current
                }, []), (0, a.jsx)("div", {
                    className: u()(y().plinkoGame, n),
                    ...r,
                    "data-sentry-component": "PlinkoGame",
                    "data-sentry-source-file": "plinko-game.tsx",
                    children: (0, a.jsx)("div", {
                        className: y().plinkoGameInner,
                        children: (0, a.jsx)(plinko_Plinko, {
                            ref: o,
                            "data-sentry-element": "Plinko",
                            "data-sentry-source-file": "plinko-game.tsx"
                        })
                    })
                })
            }
            var N = (0, l.$j)(e => ({
                user: e.auth.user,
                isAuthenticated: e.auth.isAuthenticated
            }))(e => {
                let {
                    user: t,
                    ...n
                } = e, r = (0, s.useRef)();
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(o.Z, { ...n,
                        "data-sentry-element": "GameLayout",
                        "data-sentry-source-file": "plinko.tsx",
                        children: [(0, a.jsx)(o.Z.Column, {
                            type: "left",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "plinko.tsx",
                            children: (0, a.jsx)(PlinkoBet, {
                                gameEngineRef: r,
                                user: t,
                                "data-sentry-element": "PlinkoBet",
                                "data-sentry-source-file": "plinko.tsx"
                            })
                        }), (0, a.jsx)(o.Z.Column, {
                            customMobileOrder: "-1",
                            type: "right",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "plinko.tsx",
                            children: (0, a.jsx)(PlinkoGame, {
                                gameEngineRef: r,
                                "data-sentry-element": "PlinkoGame",
                                "data-sentry-source-file": "plinko.tsx"
                            })
                        })]
                    })
                })
            });

            function plinko_PlinkoGame() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(N, {
                        "data-sentry-element": "Plinko",
                        "data-sentry-source-file": "plinko.tsx"
                    })
                })
            }
            plinko_PlinkoGame.getLayout = function(e) {
                return (0, a.jsx)(r.Z, {
                    children: e
                })
            }
        },
        26030: function(e) {
            e.exports = {
                gameLayout: "game-layout_gameLayout__bgIOR",
                gameLayoutColumnRow: "game-layout_gameLayoutColumnRow__0wXiL",
                gameLayoutColumn: "game-layout_gameLayoutColumn__q01vS",
                gameLayoutColumnLeft: "game-layout_gameLayoutColumnLeft__55fuZ",
                gameLayoutColumnRight: "game-layout_gameLayoutColumnRight__oj_7g",
                gameLayoutColumnAnotherLeft: "game-layout_gameLayoutColumnAnotherLeft__uOx3g",
                gameLayoutColumnAnotherRight: "game-layout_gameLayoutColumnAnotherRight__j_wQx"
            }
        },
        37282: function(e) {
            e.exports = {
                plinkoGame: "plinko_plinkoGame___gj2t",
                plinkoGameInner: "plinko_plinkoGameInner__THlF9",
                leftInput: "plinko_leftInput__EbV3J",
                inputWrapper: "plinko_inputWrapper__5A2WL"
            }
        },
        65899: function(e) {
            e.exports = {
                rouletteGame: "roulette_rouletteGame__60JcH",
                rouletteGameLatest: "roulette_rouletteGameLatest__LhUg4",
                rouletteGameStatus: "roulette_rouletteGameStatus__bDP2x",
                rouletteGameTrack: "roulette_rouletteGameTrack__Gy3SC",
                rouletteGameTrackInner: "roulette_rouletteGameTrackInner__z_usk",
                rouletteGameTrackItem: "roulette_rouletteGameTrackItem__Dvguo",
                isWin: "roulette_isWin__jZsDR",
                rouletteGameTrackItemYellow: "roulette_rouletteGameTrackItemYellow__SO6Fe",
                rouletteGameTrackItemRed: "roulette_rouletteGameTrackItemRed__dSEzZ",
                rouletteGameTrackItemPurple: "roulette_rouletteGameTrackItemPurple__wRH_J",
                rouletteGameAmount: "roulette_rouletteGameAmount__hHF2j",
                rouletteGameAmountInput: "roulette_rouletteGameAmountInput__u_Qwt",
                rouletteGameInfo: "roulette_rouletteGameInfo__Rwy4c",
                roulettePlayers: "roulette_roulettePlayers__pRhtK",
                roulettePlayersColumn: "roulette_roulettePlayersColumn__iBsQD",
                yellow: "roulette_yellow__Eykdl",
                red: "roulette_red__VdQkc",
                purple: "roulette_purple__Bqk8z",
                roulettePlayersColumnBet: "roulette_roulettePlayersColumnBet__cMNoI",
                roulettePlayersColumnList: "roulette_roulettePlayersColumnList__1P8kU",
                roulettePlayersColumnItem: "roulette_roulettePlayersColumnItem__PD_XB",
                roulettePlayersColumnItemPlayer: "roulette_roulettePlayersColumnItemPlayer__gWklH",
                roulettePlayersColumnItemAmount: "roulette_roulettePlayersColumnItemAmount__lOTx6",
                roulettePlayersColumnItemPlayerAvatar: "roulette_roulettePlayersColumnItemPlayerAvatar__oTsB5",
                roulettePlayersColumnItemPlayerName: "roulette_roulettePlayersColumnItemPlayerName__lTQqL",
                rouletteBet: "roulette_rouletteBet__bwqE5"
            }
        },
        14670: function(e, t, n) {
            "use strict";
            e.exports = n(95607)
        },
        79829: function(e, t, n) {
            "use strict";
            var a, s, r, o = n(48946),
                l = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

            function setCharacters(e) {
                if (!e) {
                    a !== l && (a = l, r = !1);
                    return
                }
                if (e !== a) {
                    if (e.length !== l.length) throw Error("Custom alphabet for shortid must be " + l.length + " unique characters. You submitted " + e.length + " characters: " + e);
                    var t = e.split("").filter(function(e, t, n) {
                        return t !== n.lastIndexOf(e)
                    });
                    if (t.length) throw Error("Custom alphabet for shortid must be " + l.length + " unique characters. These characters were not unique: " + t.join(", "));
                    a = e, r = !1
                }
            }

            function getShuffled() {
                return r || (r = function() {
                    a || setCharacters(l), o.nextValue();
                    for (var e, t = a.split(""), n = []; t.length > 0;) e = Math.floor(o.nextValue() * t.length), n.push(t.splice(e, 1)[0]);
                    return n.join("")
                }())
            }
            e.exports = {
                get: function() {
                    return a || l
                },
                characters: function(e) {
                    return setCharacters(e), a
                },
                seed: function(e) {
                    o.seed(e), s !== e && (r = !1, s = e)
                },
                lookup: function(e) {
                    return getShuffled()[e]
                },
                shuffled: getShuffled
            }
        },
        90480: function(e, t, n) {
            "use strict";
            var a, s, r = n(98416);
            n(79829), e.exports = function(e) {
                var t = "",
                    n = Math.floor((Date.now() - 1567752802062) * .001);
                return n === s ? a++ : (a = 0, s = n), t += r(7) + r(e), a > 0 && (t += r(a)), t += r(n)
            }
        },
        98416: function(e, t, n) {
            "use strict";
            var a = n(79829),
                s = n(13766),
                r = n(50296);
            e.exports = function(e) {
                for (var t, n = 0, o = ""; !t;) o += r(s, a.get(), 1), t = e < Math.pow(16, n + 1), n++;
                return o
            }
        },
        95607: function(e, t, n) {
            "use strict";
            var a = n(79829),
                s = n(90480),
                r = n(41082),
                o = n(15636) || 0;

            function generate() {
                return s(o)
            }
            e.exports = generate, e.exports.generate = generate, e.exports.seed = function(t) {
                return a.seed(t), e.exports
            }, e.exports.worker = function(t) {
                return o = t, e.exports
            }, e.exports.characters = function(e) {
                return void 0 !== e && a.characters(e), a.shuffled()
            }, e.exports.isValid = r
        },
        41082: function(e, t, n) {
            "use strict";
            var a = n(79829);
            e.exports = function(e) {
                return !!e && "string" == typeof e && !(e.length < 6) && !RegExp("[^" + a.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]").test(e)
            }
        },
        13766: function(e) {
            "use strict";
            var t, n = "object" == typeof window && (window.crypto || window.msCrypto);
            t = n && n.getRandomValues ? function(e) {
                return n.getRandomValues(new Uint8Array(e))
            } : function(e) {
                for (var t = [], n = 0; n < e; n++) t.push(Math.floor(256 * Math.random()));
                return t
            }, e.exports = t
        },
        48946: function(e) {
            "use strict";
            var t = 1;
            e.exports = {
                nextValue: function() {
                    return (t = (9301 * t + 49297) % 233280) / 233280
                },
                seed: function(e) {
                    t = e
                }
            }
        },
        15636: function(e) {
            "use strict";
            e.exports = 0
        },
        50296: function(e) {
            e.exports = function(e, t, n) {
                for (var a = (2 << Math.log(t.length - 1) / Math.LN2) - 1, s = -~(1.6 * a * n / t.length), r = "";;)
                    for (var o = e(s), l = s; l--;)
                        if ((r += t[o[l] & a] || "").length === +n) return r
            }
        }
    },
    function(e) {
        e.O(0, [4885, 5611, 205, 4768, 7661, 9774, 2888, 179], function() {
            return e(e.s = 9387)
        }), _N_E = e.O()
    }
]);