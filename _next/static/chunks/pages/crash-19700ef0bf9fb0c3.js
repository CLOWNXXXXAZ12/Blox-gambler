! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "882ca1a5-7d2e-45e4-9eb2-db9db3c19bab", e._sentryDebugIdIdentifier = "sentry-dbid-882ca1a5-7d2e-45e4-9eb2-db9db3c19bab")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8798], {
        62484: function(e, t, a) {
            "use strict";
            var r, s = a(67294);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
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
                }, e), r || (r = s.createElement("path", {
                    d: "M159.148 0c-52.696 0-95.544 39.326-95.544 87.662h47.736c0-22.007 21.438-39.927 47.808-39.927 26.367 0 47.804 17.92 47.804 39.927v6.929c0 23.39-10.292 34.31-25.915 50.813-20.371 21.531-45.744 48.365-45.744 105.899h47.745c0-38.524 15.144-54.568 32.692-73.12 17.368-18.347 38.96-41.192 38.96-83.592v-6.929C254.689 39.326 211.845 0 159.148 0zM134.475 277.996h49.968v40.297h-49.968z"
                })))
            }
        },
        63781: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/crash", function() {
                return a(17834)
            }])
        },
        86436: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return bet_BetHeader
                }
            });
            var r, s, n, l = a(85893),
                o = a(62961),
                c = a(93967),
                i = a.n(c),
                u = a(67294),
                m = a(2664),
                h = a(98216),
                d = a(5616),
                y = a(18413),
                g = a(34768),
                f = a(48999),
                p = a(62484);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(null, arguments)
            }
            var shield = function(e) {
                return u.createElement("svg", _extends({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 20,
                    height: 20,
                    fill: "none"
                }, e), r || (r = u.createElement("path", {
                    d: "M14.85 5.68a.396.396 0 0 0-.29-.324L9.608 4.014a.413.413 0 0 0-.216 0L4.44 5.356a.396.396 0 0 0-.29.323c-.03.202-.684 4.954.996 7.319 1.679 2.361 4.155 2.966 4.26 2.991a.413.413 0 0 0 .189 0c.104-.025 2.58-.63 4.259-2.991 1.68-2.365 1.025-7.117.997-7.319Zm-2.157 2.774-3.377 3.29a.407.407 0 0 1-.57 0L6.658 9.71a.387.387 0 0 1 0-.555l.415-.404a.41.41 0 0 1 .569 0l1.389 1.353 2.678-2.608a.408.408 0 0 1 .57 0l.414.404a.385.385 0 0 1 0 .554Z",
                    fill: "#8F88A8"
                })))
            };

            function history_extends() {
                return (history_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(null, arguments)
            }
            var icons_history = function(e) {
                    return u.createElement("svg", history_extends({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "#8F88A8",
                        strokeWidth: 0
                    }, e), s || (s = u.createElement("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                    })), n || (n = u.createElement("path", {
                        d: "M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
                    })))
                },
                x = a(4595),
                _ = a(6428),
                C = a(40400),
                b = a(39398);
            let v = (0, y.ZP)(e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, l.jsx)(g.Z, { ...a,
                    classes: {
                        popper: t
                    }
                })
            })({
                ["& .".concat(f.Z.tooltip)]: {
                    maxWidth: 500,
                    backgroundColor: "#353b61",
                    fontWeight: 500
                }
            });
            var bet_BetHeader = e => {
                let {
                    gameName: t,
                    lastGame: a,
                    showHistory: r = !0,
                    showAuto: s = !1,
                    isAuto: n = !1,
                    setIsAuto: c,
                    className: y,
                    showInfo: g = !0,
                    sideButtonType: f = "default",
                    maxProfit: P
                } = e, w = (0, m.I0)(), j = (0, _.Z)(), I = (0, m.v9)(e => e.auth.isAuthenticated), S = (0, u.useMemo)(() => j.width > 992 && j.width <= 1400, [j]);
                return (0, l.jsxs)(d.Z, {
                    display: "flex",
                    gap: "1em",
                    justifyContent: "space-between",
                    className: y,
                    width: "100%",
                    "data-sentry-element": "Box",
                    "data-sentry-component": "BetHeader",
                    "data-sentry-source-file": "BetHeader.tsx",
                    children: [(0, l.jsxs)(d.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        className: i()("gameBetTabs"),
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "BetHeader.tsx",
                        children: [(0, l.jsx)(x.Z, {
                            variant: "tab",
                            isActive: !n,
                            onClick: () => c && c(!1),
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "BetHeader.tsx",
                            children: "Manual"
                        }), s && (0, l.jsx)(x.Z, {
                            variant: "tab",
                            isActive: n,
                            onClick: () => c && c(!0),
                            children: "Auto"
                        })]
                    }), (0, l.jsxs)(d.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        className: i()("gameBetTabs"),
                        gap: "1em",
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "BetHeader.tsx",
                        children: [g && (0, l.jsx)(x.Z, {
                            onClick: () => w({
                                type: o.hj,
                                payload: (0, h.Z)(t)
                            }),
                            variant: "compact" === f ? "betOptionCompact" : "betOption",
                            children: (0, l.jsx)(p.Z, {
                                style: {
                                    height: ".75em"
                                }
                            })
                        }), !!a && (0, l.jsx)(x.Z, {
                            onClick: () => w({
                                type: o.LE,
                                payload: { ...a,
                                    gameName: t
                                }
                            }),
                            variant: "compact" === f ? "betOptionCompact" : "betOption",
                            children: S ? (0, l.jsx)(shield, {}) : "Fairness"
                        }), r && I && (0, l.jsx)(x.Z, {
                            onClick: () => w({
                                type: o.bN,
                                payload: {
                                    gameType: t
                                }
                            }),
                            variant: "compact" === f ? "betOptionCompact" : "betOption",
                            children: S ? (0, l.jsx)(icons_history, {
                                style: {
                                    transform: "scale(0.8)"
                                }
                            }) : "History"
                        }), P && (0, l.jsx)(v, {
                            title: (0, l.jsx)("p", {
                                style: {
                                    fontSize: "12px"
                                },
                                children: P ? "F$ ".concat((0, b.Z)((0, C.Z)(P)), " Max Profit") : "Loading.."
                            }),
                            children: (0, l.jsx)(x.Z, {
                                variant: "compact" === f ? "betOptionCompact" : "betOption",
                                children: S ? "Profit" : "Max profit"
                            })
                        })]
                    })]
                })
            }
        },
        20875: function(e, t, a) {
            "use strict";
            var r = a(85893),
                s = a(62961),
                n = a(67294),
                l = a(2664),
                o = a(98216),
                c = a(35328),
                i = a(7458);
            t.Z = e => {
                let {
                    className: t,
                    value: a,
                    onChange: u,
                    min: m,
                    max: h,
                    showInfo: d,
                    gameName: y,
                    defaultValue: g,
                    ...f
                } = e, p = (0, l.I0)(), x = (0, l.v9)(e => e.auth.user), _ = (0, n.useMemo)(() => Math.floor((null == x ? void 0 : x.wallet) + ((null == x ? void 0 : x.bonusWallet) || 0)), [x]), C = m || .001, b = h || _, calculateBetAmount = e => {
                    if (!a) return a;
                    switch (e) {
                        case "1/2":
                            return Math.max(Math.floor(a / 2), C);
                        case "2x":
                            return Math.min(Math.max(2 * a, 0), Math.min(b, _));
                        case "max":
                            return Math.min(Math.max(_, 0), b);
                        default:
                            return a
                    }
                }, v = (0, n.useCallback)(() => {
                    void 0 !== g && "".concat(a) === "".concat(g) && u("")
                }, [g, a]), P = (0, n.useCallback)(() => {
                    void 0 !== g && "" === a && u(g)
                }, [g, a]);
                return (0, r.jsx)(c.Z, {
                    label: "Bet amount",
                    variant: "secondary",
                    toggleButtonsOnFocus: !0,
                    isBet: !0,
                    patterns: [{
                        label: "1/2",
                        onClick: () => a && u(calculateBetAmount("1/2"))
                    }, {
                        label: "2x",
                        onClick: () => a && u(calculateBetAmount("2x"))
                    }, ..._ ? [{
                        label: "Max",
                        onClick: () => u(calculateBetAmount("max"))
                    }] : [], ...d && y ? [{
                        label: "?",
                        onClick: () => p({
                            type: s.hj,
                            payload: (0, o.Z)(y)
                        })
                    }] : []],
                    "data-sentry-element": "FormField",
                    "data-sentry-component": "BetInput",
                    "data-sentry-source-file": "BetInput.tsx",
                    children: (0, r.jsx)(i.Z, {
                        value: a,
                        onChange: u,
                        onFocus: v,
                        onBlur: P,
                        pauseBlurValidation: void 0 !== g && "" === a,
                        min: m,
                        max: Math.min(Math.max(_, 0), b),
                        step: 10,
                        hasCurrencyIcon: !0,
                        disableWheel: !0,
                        ...f,
                        "data-sentry-element": "NumberInput",
                        "data-sentry-source-file": "BetInput.tsx"
                    })
                })
            }
        },
        52537: function(e, t, a) {
            "use strict";
            var r = a(85893),
                s = a(62961),
                n = a(93967),
                l = a.n(n),
                o = a(67294),
                c = a(2664),
                i = a(65899),
                u = a.n(i),
                m = a(6428);
            t.Z = o.memo(function(e) {
                let {
                    historyValues: t,
                    forRoulette: a
                } = e, n = (0, m.Z)(), o = (0, c.I0)(), getProperColor = e => e > 2 && e < 7 ? "gameLatestItemYellow" : e >= 7 ? "gameLatestItemBlue" : "purple" === e ? "gameLatestItemPurple" : "red" === e ? "gameLatestItemRed" : "yellow" === e ? "gameLatestItemYellow" : "gameLatestItemNeutral", getRouletteX = e => "purple" === e ? "2X" : "yellow" === e ? "14X" : "red" === e ? "2x" : void 0;
                return (null == t ? void 0 : t.length) ? (0, r.jsx)("div", {
                    className: l()(a && u().rouletteGameLatest, "gameLatest gameLatestHorizontal", !a && "lastestHistory"),
                    children: (a ? t.slice(-3) : n.width < 768 ? t.slice(-6) : t.slice(-7)).map((e, t) => {
                        var a, n;
                        return (0, r.jsx)("div", {
                            onClick: () => o({
                                type: s.LE,
                                payload: { ...e,
                                    gameName: "roulette"
                                }
                            }),
                            style: {
                                cursor: "pointer"
                            },
                            className: l()("gameLatestItem ".concat(getProperColor(null !== (a = e.crashPoint) && void 0 !== a ? a : e.winningColor))),
                            children: null !== (n = e.crashPoint) && void 0 !== n ? n : getRouletteX(e.winningColor)
                        }, t)
                    })
                }) : (0, r.jsx)(r.Fragment, {})
            })
        },
        26118: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return GameLayout
                }
            });
            var r = a(85893),
                s = a(93967),
                n = a.n(s),
                l = a(26030),
                o = a.n(l),
                c = a(6428);
            let i = {
                left: o().gameLayoutColumnLeft,
                right: o().gameLayoutColumnRight,
                row: o().gameLayoutColumnRow,
                anotherLeft: o().gameLayoutColumnAnotherLeft,
                anotherRight: o().gameLayoutColumnAnotherRight
            };

            function GameLayout(e) {
                let {
                    className: t,
                    children: a,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    className: n()(o().gameLayout, t),
                    ...s,
                    "data-sentry-component": "GameLayout",
                    "data-sentry-source-file": "game-layout.tsx",
                    children: a
                })
            }
            GameLayout.Column = function(e) {
                let {
                    type: t,
                    className: a,
                    children: s,
                    customMobileOrder: l = "initial",
                    ...u
                } = e, m = (0, c.Z)();
                return (0, r.jsx)("div", {
                    className: n()(o().gameLayoutColumn, i[t], a),
                    style: {
                        order: m.width < 993 ? l : "initial"
                    },
                    ...u,
                    "data-sentry-component": "Column",
                    "data-sentry-source-file": "game-layout-column.tsx",
                    children: s
                })
            }
        },
        35328: function(e, t, a) {
            "use strict";
            var r = a(85893),
                s = a(93967),
                n = a.n(s),
                l = a(77579),
                o = a(4595),
                c = a(46826),
                i = a.n(c);
            let u = {
                primary: i().formFieldPrimary,
                secondary: i().formFieldSecondary
            };
            t.Z = e => {
                let {
                    className: t,
                    isBet: a,
                    label: s,
                    variant: c = "primary",
                    icon: m,
                    patterns: h,
                    toggleButtonsOnFocus: d,
                    children: y
                } = e;
                return (0, r.jsxs)("div", {
                    className: n()(i().formField, u[c], t),
                    "data-sentry-component": "FormField",
                    "data-sentry-source-file": "FormField.tsx",
                    children: [(0, r.jsx)(l.Z, {
                        element: "p",
                        textType: "labelsRegular",
                        "data-sentry-element": "Text",
                        "data-sentry-source-file": "FormField.tsx",
                        children: s
                    }), (0, r.jsxs)("div", {
                        className: n()("customInputInner", i().formFieldInner),
                        children: [y, (0, r.jsx)("div", {
                            className: n()("customInputInnerButtons", i().formFieldInnerButtons, d && i().formFieldInnerButtonsToggleFocus),
                            style: a ? {
                                right: "16px"
                            } : {},
                            children: h ? h.map((e, t) => (0, r.jsx)(o.Z, {
                                variant: "inputButton",
                                onClick: e.onClick,
                                className: i().innerButton,
                                children: e.label
                            }, t)) : (0, r.jsx)("div", {
                                className: n()(i().inputIcon),
                                children: m
                            })
                        })]
                    })]
                })
            }
        },
        7458: function(e, t, a) {
            "use strict";
            var r = a(85893),
                s = a(58733);
            t.Z = e => {
                let {
                    value: t,
                    onChange: a,
                    precision: n = 2,
                    disableWheel: l = !1,
                    pauseBlurValidation: o,
                    onBlur: c = () => {},
                    ...i
                } = e;
                return (0, r.jsx)(s.Z, {
                    type: "number",
                    value: 0 === t ? "0" : null != t ? t : "",
                    ...i,
                    onChange: e => {
                        "" === e.currentTarget.value ? a("") : "0" === e.currentTarget.value ? a(0) : "0.0" === e.currentTarget.value || "0,0" === e.currentTarget.value ? a("0.0") : a(parseFloat(Number(e.currentTarget.value).toFixed(n)))
                    },
                    onBlur: e => {
                        if (c(e), o) return;
                        let t = parseFloat(Number(e.currentTarget.value).toFixed(n));
                        if (e.currentTarget.min) {
                            let r = Number(e.currentTarget.min);
                            t < r && a(r)
                        }
                        if (e.currentTarget.max) {
                            let r = Number(e.currentTarget.max);
                            t > r && a(r)
                        }
                    },
                    onWheel: () => {
                        var e;
                        l && (null === (e = document.activeElement) || void 0 === e || e.blur())
                    },
                    "data-sentry-element": "Input",
                    "data-sentry-component": "NumberInput",
                    "data-sentry-source-file": "NumberInput.tsx"
                })
            }
        },
        17834: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return CrashPage
                }
            });
            var r = a(85893),
                s = a(67294),
                n = a(80615),
                l = a(49089),
                o = a(26118),
                c = a(74344),
                i = a(36005),
                u = a(2664),
                m = a(62961),
                h = a(86501),
                d = a(2181),
                y = a(93967),
                g = a.n(y),
                f = a(10990),
                p = a(77579),
                x = a(13806),
                _ = a.n(x),
                C = a(52537),
                b = a(98130),
                v = a(66713),
                P = a(39398),
                w = a(40400),
                j = a(19242);
            let I = {
                default: .2,
                medium: 2
            };

            function getChartLabels(e, t, a) {
                let r = [];
                for (let s = 0; s < e; s++) r[s] = t - a * (e - 1 - s);
                return r
            }
            let loadImage = e => new Promise(t => {
                    let a = new Image;
                    a.src = e, a.onload = () => t(a)
                }),
                loadImages = e => new Promise(async t => {
                    let a = await Promise.all(e.map(e => loadImage(e)));
                    t(a)
                }),
                S = [3, 6, 9, 12, 15, 18, 21],
                G = [1, 1.4, 1.8, 2, 2.4, 2.8, 3, 3.2],
                setHistoryClassName = e => e.crashPoint ? e.crashPoint > 2 && e.crashPoint < 7 ? "gameLatestItemYellow" : e.crashPoint > 7 ? "gameLatestItemBlue" : "gameLatestItemNeutral" : "gameLatestItemNeutral";

            function CrashGame(e) {
                let {
                    className: t,
                    history: a,
                    setHistory: n,
                    setPlayers: l,
                    startTime: o,
                    ownBet: i,
                    gameState: u,
                    committedEosBlock: m,
                    ...h
                } = e, d = (0, s.useRef)(null), y = (0, s.useRef)(null), x = (0, s.useRef)(null), N = (0, s.useRef)(null), Z = (0, s.useRef)(null), [T, B] = (0, s.useState)(0), [k, A] = (0, s.useState)(0), [L, F] = (0, s.useState)(!1), [E, R] = (0, s.useState)(!1), [O, M] = (0, s.useState)(!1), [D, H] = (0, s.useState)(!1), [K, W] = (0, s.useState)(0), [z, X] = (0, s.useState)(0), [J, Y] = (0, s.useState)(1), [q, U] = (0, s.useState)(""), [V, Q] = (0, s.useState)(1), [$, ee] = (0, s.useState)(0), [et, ea] = (0, s.useState)(S), [er, es] = (0, s.useState)(G), [en, el] = (0, s.useState)(!1), [eo, ec] = (0, s.useState)(!1), [ei, eu] = (0, s.useState)(5e3), [em, eh] = (0, s.useState)(!0);
                return (0, s.useEffect)(() => {
                    function setSizes() {
                        var e;
                        let t = {
                            width: null == (e = d.current) ? void 0 : e.clientWidth,
                            height: null == e ? void 0 : e.clientHeight
                        };
                        A(Math.floor(.826 * t.width)), B(Math.floor(.826 * t.width * .421))
                    }
                    return setSizes(), window.addEventListener("resize", setSizes), () => {
                        window.removeEventListener("resize", setSizes)
                    }
                }, []), (0, s.useEffect)(() => {
                    let e;
                    if (!0 === O && R(!1), !1 === E) return;
                    let t = 0,
                        a = 0 !== z || z ? z : Date.now();
                    X(a);
                    let r = 0,
                        s = 0,
                        l = 0,
                        o = 0;

                    function gameElapsed(e) {
                        o = e, s = parseFloat((s = (r = parseFloat((100 * Math.pow(Math.E, 6e-5 * e) / 100).toFixed(4))) < 3 ? (r - 1) / 2 : 1).toFixed(4)), l = Date.now()
                    }

                    function gameEnd(t) {
                        window.clearInterval(e), e = 0, o = -1, console.log("game end with " + t.crashPoint + " and type is " + typeof t.crashPoint), "number" == typeof t.crashPoint && void 0 !== t.crashPoint && Y(t.crashPoint), M(!0), n(e => (t.historyClassName = setHistoryClassName(t), e.length >= 7 ? [...e.slice(1, e.length), t] : [...e, t]))
                    }
                    let crashAnimation = () => {
                        if (u !== j.w.InProgress) return;
                        W(s), Y(r);
                        let e = (Date.now() - a) / 1e3;
                        if (e > 18) {
                            let t = 1 - (e - 18) * .02;
                            Q(Math.max(t, .5)), ee((e - 18) * 20)
                        } else Q(1), ee(0);
                        t = requestAnimationFrame(crashAnimation)
                    };
                    return e = setInterval(function() {
                        if (E && 0 != l && u == j.w.InProgress) {
                            let e = Date.now() - l;
                            gameElapsed(o += e), l = Date.now()
                        }
                    }, 50), t = requestAnimationFrame(crashAnimation), c.KP.on("game-elapsed", gameElapsed), c.KP.on("game-end", gameEnd), () => {
                        c.KP.off("game-elapsed", gameElapsed), c.KP.off("game-end", gameEnd), window.clearInterval(e), window.cancelAnimationFrame(t)
                    }
                }, [E, O]), (0, s.useEffect)(() => {
                    u === j.w.Starting && (Y(1), H(!0)), u === j.w.InProgress && R(!0)
                }, [u]), (0, s.useEffect)(() => {
                    var e, t;
                    if (!E) return;
                    let a = Math.floor((Date.now() - z) / 1e3),
                        r = null === (e = y.current) || void 0 === e ? void 0 : e.childNodes,
                        s = parseFloat(J.toFixed(1)),
                        n = null === (t = x.current) || void 0 === t ? void 0 : t.childNodes,
                        l = I.default;
                    J > 12 && (l = I.medium);
                    let o = [...et],
                        c = [...er];
                    a > 18 && a % 3 == 0 && (o = getChartLabels(7, a + 3, 3))[0] !== et[0] && et !== o && (null == r || r.forEach((e, t) => {
                        var a, s;
                        let n = -1 * ((null !== (s = null === (a = y.current) || void 0 === a ? void 0 : a.clientWidth) && void 0 !== s ? s : 0) / 5) + 6;
                        eo || f.ZP.fromTo(e, {
                            x: 0,
                            opacity: t === r.length - 1 ? 0 : 1
                        }, {
                            x: n,
                            opacity: 0 === t ? 0 : 1,
                            duration: .3,
                            onStart: () => {
                                0 === t && ec(!0)
                            },
                            onComplete: () => {
                                6 === t && setTimeout(() => {
                                    r.forEach(e => f.ZP.set(e, {
                                        x: 0,
                                        opacity: 1
                                    })), ea(o), ec(!1)
                                }, 0)
                            }
                        })
                    })), s > 3 && s * (.2 === l ? 10 : 1) % 2 == 0 && (c = getChartLabels(8, s + l, l))[0] !== er[0] && er !== c && (null == n || n.forEach((e, t) => {
                        var a, r;
                        let s = (null !== (r = null === (a = x.current) || void 0 === a ? void 0 : a.clientHeight) && void 0 !== r ? r : 0) / 6 - 4;
                        en || f.ZP.fromTo(e, {
                            y: 0,
                            opacity: t === n.length - 1 ? 0 : 1
                        }, {
                            y: s,
                            opacity: 0 === t ? 0 : 1,
                            duration: .3,
                            onStart: () => {
                                0 === t && el(!0)
                            },
                            onComplete: () => {
                                7 === t && setTimeout(() => {
                                    n.forEach(e => f.ZP.set(e, {
                                        y: 0,
                                        opacity: 1
                                    })), es(c), el(!1)
                                }, 0)
                            }
                        })
                    }))
                }, [J]), (0, s.useEffect)(() => {
                    if (K <= 0 || K >= 1) {
                        U("translateY(0px) rotate(0deg) scale(1)");
                        return
                    }
                    let e = 0,
                        t = (1 - K) * 45,
                        a = K <= .05 ? .95 + K : 1;
                    switch (!0) {
                        case K < .5:
                            e = (.5 + K) * (.13 * k);
                            break;
                        case K >= .5 && K <= .7:
                            e = .13 * k;
                            break;
                        case K > .7:
                            e = (1 - K) * (3.33 * (.13 * k));
                            break;
                        default:
                            console.error("Unreachable branch")
                    }
                    U("translate(".concat($, "px, ").concat(parseFloat(e.toFixed(1)), "px) rotate(").concat(parseFloat(t.toFixed(2)), "deg) scale(").concat(parseFloat(a.toFixed(3)), ")"))
                }, [K, k, $]), (0, s.useEffect)(() => {
                    let pingListener = e => {
                        let t = new Date().getTime() - e;
                        eu(t)
                    };
                    c.KP.emit("ping-req", new Date().getTime());
                    let e = setInterval(() => {
                        c.KP.emit("ping-req", new Date().getTime())
                    }, 1e3);
                    return c.KP.on("ping-back", pingListener), () => {
                        c.KP.off("ping-back", pingListener), clearInterval(e)
                    }
                }, []), (0, s.useEffect)(() => {
                    !0 === D && (R(!1), M(!1), H(!1), X(0), Y(1), W(0), ea(S), es(G), U(""), el(!1), ec(!1))
                }, [D]), (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        ref: d,
                        className: g()(_().crashGame, t),
                        ...h,
                        children: [(0, r.jsx)("div", {
                            className: _().crashGameChartAnimation,
                            children: (0, r.jsx)("div", {
                                style: {
                                    width: "".concat(parseFloat((k * K).toFixed(1)), "px"),
                                    height: "".concat(parseFloat((T * K).toFixed(1)), "px"),
                                    transform: "scale(".concat(V, ")"),
                                    transformOrigin: "top left"
                                },
                                className: _().crashGameChartContainer,
                                ref: N,
                                children: (E || O) && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        className: _().crashGameChartContainerWrapper,
                                        children: (0, r.jsx)("div", {
                                            style: {
                                                width: "".concat(k, "px"),
                                                height: "".concat(T, "px")
                                            },
                                            className: _().crashGameChartInner,
                                            ref: Z
                                        })
                                    }), (0, r.jsx)("div", {
                                        style: {
                                            width: "".concat(Math.floor(.29 * k), "px"),
                                            height: "".concat(Math.floor(.3045 * k), "px"),
                                            top: "-".concat(Math.floor(.44 * T), "px"),
                                            right: "-".concat(Math.floor(.17 * k), "px"),
                                            transform: q,
                                            opacity: K > 0 ? 1 : 0
                                        },
                                        className: g()(_().crashGameChartRocket, O && _().isCrashed),
                                        children: (0, r.jsx)("div", {
                                            className: _().crashGameChartRocketWrapper,
                                            children: (0, r.jsxs)("div", {
                                                className: _().crashGameChartRocketFire,
                                                children: [(0, r.jsx)("div", {
                                                    className: g()(_().flameRed, _().flame)
                                                }), (0, r.jsx)("div", {
                                                    className: g()(_().flameOrange, _().flame)
                                                }), (0, r.jsx)("div", {
                                                    className: g()(_().flameYellow, _().flame)
                                                }), (0, r.jsx)("div", {
                                                    className: g()(_().flameWhite, _().flame)
                                                }), (0, r.jsx)("div", {
                                                    className: g()(_().flameBlue, _().circle)
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        }), (0, r.jsx)(C.Z, {
                            historyValues: a,
                            className: "",
                            "data-sentry-element": "GameHistory",
                            "data-sentry-source-file": "crash-game.tsx"
                        }), (0, r.jsxs)(p.Z, {
                            className: g()(_().crashGameStatus),
                            element: "p",
                            textType: "regular16",
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "crash-game.tsx",
                            children: ["Network status", " ", (0, r.jsx)("span", {
                                className: ei <= 300 ? _().crashGameStatusPerfect : ei <= 500 ? _().crashGameStatusGood : ei <= 1e3 ? _().crashGameStatusMedium : _().crashGameStatusBad
                            })]
                        }), u == j.w.Starting ? (0, r.jsxs)("div", {
                            className: g()(_().crashGameCoefficient),
                            style: u == j.w.Starting && m > 0 ? {
                                fontSize: "4rem"
                            } : {},
                            children: [(0, r.jsx)(b.ZP, {
                                date: o,
                                renderer: e => {
                                    let {
                                        minutes: t,
                                        seconds: a,
                                        completed: r
                                    } = e;
                                    return r && m > 0 ? "# " + m : "".concat(t, ":").concat(a < 10 ? "0" + a : a)
                                }
                            }, o), (0, r.jsx)(p.Z, {
                                className: _().crashGameCoefficientSubtitle,
                                element: "p",
                                textType: "smHeadlines",
                                children: u == j.w.Starting && m > 0 ? "Waiting for EOS block to be mined..." : "Starting..."
                            })]
                        }) : u == j.w.InProgress || u == j.w.Over ? i ? (0, r.jsxs)("div", {
                            className: g()(_().crashGameCoefficient, O && i.status != j.R.CashedOut && _().isCrashed, i.status == j.R.CashedOut && _().isCashed),
                            children: [J.toFixed(2), "x", " ", (0, r.jsxs)(p.Z, {
                                className: _().crashGameCoefficientSubtitle,
                                element: "p",
                                textType: "smHeadlines",
                                children: ["+", " ", i.status === j.R.Playing ? (0, P.Z)((0, w.Z)((i.betAmount * J).toFixed(7))) : (0, P.Z)((0, w.Z)(i.winningAmount.toFixed(7))), " ", (0, r.jsx)(v.Z, {
                                    className: O && i.status != j.R.CashedOut ? _().robuxCurrencyCrashed : i.status == j.R.CashedOut ? _().robuxCurrencyCashed : _().robuxCurrency
                                })]
                            })]
                        }) : (0, r.jsxs)("div", {
                            className: g()(_().crashGameCoefficient, O && _().isCrashed),
                            children: [J.toFixed(2), "x", " ", (0, r.jsx)(p.Z, {
                                className: _().crashGameCoefficientSubtitle,
                                element: "p",
                                textType: "smHeadlines",
                                children: "Current payout"
                            })]
                        }) : void 0, (0, r.jsx)("div", {
                            className: _().crashGameTimes,
                            ref: y,
                            children: et.map((e, t) => (0, r.jsxs)(p.Z, {
                                style: {
                                    transform: "none"
                                },
                                textType: "regular16",
                                element: "span",
                                children: [e, "s"]
                            }, t))
                        }), (0, r.jsx)("div", {
                            className: _().crashGameCoefficients,
                            ref: x,
                            children: er.map((e, t) => (0, r.jsxs)(p.Z, {
                                style: {
                                    transform: "none"
                                },
                                textType: "regular16",
                                element: "span",
                                children: [e.toFixed(1), "x"]
                            }, t))
                        })]
                    })
                })
            }
            var N = a(791),
                Z = a(64325),
                T = a(4595);

            function CrashPlayers(e) {
                let {
                    className: t,
                    players: a,
                    ...n
                } = e, [l, o] = (0, s.useState)(!1);
                return (0, r.jsx)("div", {
                    className: g()("gameBlock gamePlayers gamePlayersScrollable", _().crashPlayers, t),
                    ...n,
                    "data-sentry-component": "CrashPlayers",
                    "data-sentry-source-file": "crash-players.tsx",
                    children: (0, r.jsxs)("div", {
                        className: g()("gamePlayersScroller"),
                        children: [(0, r.jsxs)("table", {
                            className: g()("gamePlayersTable", !l && "gamePlayersTableHidden"),
                            children: [(0, r.jsx)("thead", {
                                className: g()("gamePlayersTableHead"),
                                children: (0, r.jsxs)("tr", {
                                    className: g()("gamePlayersTableRow"),
                                    children: [(0, r.jsx)("td", {
                                        className: g()("gamePlayersTableItem"),
                                        children: (0, r.jsxs)(N.Z, {
                                            element: "h3",
                                            "data-sentry-element": "Heading",
                                            "data-sentry-source-file": "crash-players.tsx",
                                            children: [a.length, " Players"]
                                        })
                                    }), (0, r.jsx)("td", {
                                        className: g()("gamePlayersTableItem")
                                    }), (0, r.jsx)("td", {
                                        className: g()("gamePlayersTableItem")
                                    }), (0, r.jsx)("td", {
                                        className: g()("gamePlayersTableItem"),
                                        children: (0, r.jsxs)(p.Z, {
                                            element: "p",
                                            textType: "regular14",
                                            "data-sentry-element": "Text",
                                            "data-sentry-source-file": "crash-players.tsx",
                                            children: [(0, P.Z)((0, w.Z)(a.map(e => e.betAmount).reduce((e, t) => e + t, 0))), " ", (0, r.jsx)(v.Z, {
                                                "data-sentry-element": "CurrencyIcon",
                                                "data-sentry-source-file": "crash-players.tsx"
                                            })]
                                        })
                                    })]
                                })
                            }), (0, r.jsx)("tbody", {
                                className: g()("gamePlayersTableBody"),
                                children: a.sort((e, t) => t.betAmount - e.betAmount).map(e => (0, r.jsxs)("tr", {
                                    className: g()("gamePlayersTableRow"),
                                    children: [(0, r.jsx)("td", {
                                        className: g()("gamePlayersTableItem gamePlayersTableUser"),
                                        children: (0, r.jsxs)(p.Z, {
                                            element: "p",
                                            textType: "regular14",
                                            children: [(0, r.jsx)(Z.Z, {
                                                className: g()("gamePlayersTableItemAvatar"),
                                                userId: e.playerID,
                                                isPrivateMode: "anonymous" === e.username.toLowerCase(),
                                                imageAlt: "User avatar",
                                                boxSize: "medium"
                                            }), " ", (0, r.jsx)("span", {
                                                children: e.username
                                            })]
                                        })
                                    }), (0, r.jsx)("td", {
                                        className: g()("gamePlayersTableItem gamePlayersTableItemCoeff"),
                                        children: (0, r.jsx)(p.Z, {
                                            element: "p",
                                            style: {
                                                width: "3em"
                                            },
                                            textType: "textNumber",
                                            children: e.stoppedAt && (0, r.jsxs)(r.Fragment, {
                                                children: [(e.stoppedAt / 100).toFixed(2), (0, r.jsx)("span", {
                                                    children: "X"
                                                })]
                                            })
                                        })
                                    }), (0, r.jsx)("td", {
                                        className: g()("gamePlayersTableItem gamePlayersTableItemAmount"),
                                        children: (0, r.jsx)(p.Z, {
                                            style: {
                                                color: "#05d3dd"
                                            },
                                            element: "p",
                                            textType: "semibold14",
                                            children: e.winningAmount && (0, r.jsxs)(r.Fragment, {
                                                children: [(0, P.Z)((0, w.Z)(e.winningAmount)), (0, r.jsx)(v.Z, {
                                                    className: "temp"
                                                })]
                                            })
                                        })
                                    }), (0, r.jsx)("td", {
                                        className: g()("gamePlayersTableItem gamePlayersTableItemAmount"),
                                        children: (0, r.jsx)(p.Z, {
                                            element: "p",
                                            textType: "semibold14",
                                            children: e.betAmount && (0, r.jsxs)(r.Fragment, {
                                                children: [(0, P.Z)((0, w.Z)(e.betAmount)), (0, r.jsx)(v.Z, {})]
                                            })
                                        })
                                    })]
                                }, e.playerID))
                            })]
                        }), (0, r.jsx)(T.Z, {
                            onClick: () => o(!l),
                            variant: "secondary",
                            className: g()("gamePlayersExpand"),
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "crash-players.tsx",
                            children: l ? "Show Less" : "Show more"
                        })]
                    })
                })
            }
            var B = a(86436),
                k = a(20875),
                A = a(58733),
                hooks_useDebouncer = function(e, t) {
                    let a = (0, s.useRef)(null);
                    return (0, s.useCallback)(function() {
                        for (var r = arguments.length, s = Array(r), n = 0; n < r; n++) s[n] = arguments[n];
                        a.current && clearTimeout(a.current), a.current = setTimeout(() => {
                            e(...s)
                        }, t)
                    }, [e, t])
                };

            function CrashBet(e) {
                let {
                    maxProfit: t,
                    user: a,
                    joining: n,
                    gameState: l,
                    setJoining: o,
                    setPlannedBet: i,
                    plannedBet: m,
                    imagesLoaded: d,
                    cashedOut: y,
                    betting: f,
                    autoCashoutTarget: x,
                    setAutoCashoutTarget: C,
                    autoCashoutEnabled: b,
                    setAutoCashoutEnabled: v,
                    betAmount: P,
                    setBetAmount: w,
                    autoBetEnabled: I,
                    className: S,
                    setAutoBetEnabled: G,
                    currentGame: N,
                    ...Z
                } = e;
                (0, u.I0)();
                let [L, F] = (0, s.useState)(x), requestBetAmountChange = e => {
                    n || f || m || w(e)
                }, [E, R] = (0, s.useState)(!0), O = hooks_useDebouncer(e => {
                    if (l !== j.w.InProgress && l !== j.w.Starting || !f) {
                        if (e && e.length > 0) {
                            if (1.01 > parseFloat(e)) {
                                R(!1), h.ZP.error("Auto cashout must be at least 1.01x");
                                return
                            }
                            R(!0), C(e)
                        } else C(""), R(!0)
                    }
                }, 500), handleAutoCashoutInputChange = e => {
                    F(e), O(e)
                };
                return (0, s.useEffect)(() => () => {}, []), (0, r.jsxs)("div", {
                    className: g()("gameBlock gameBet", _().crashBet, S),
                    ...Z,
                    "data-sentry-component": "CrashBet",
                    "data-sentry-source-file": "crash-bet.tsx",
                    children: [(0, r.jsx)("div", {
                        className: g()("gameBetTabs"),
                        style: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: (0, r.jsx)(B.Z, {
                            className: _().header,
                            gameName: "crash",
                            sideButtonType: "compact",
                            showAuto: !0,
                            showHistory: !1,
                            lastGame: N,
                            isAuto: I,
                            setIsAuto: G,
                            maxProfit: 1e6,
                            "data-sentry-element": "BetHeader",
                            "data-sentry-source-file": "crash-bet.tsx"
                        })
                    }), (0, r.jsx)(k.Z, {
                        value: P,
                        defaultValue: 30,
                        onChange: e => requestBetAmountChange(e),
                        hasCurrencyIcon: !0,
                        "data-sentry-element": "BetInput",
                        "data-sentry-source-file": "crash-bet.tsx"
                    }), (0, r.jsxs)("div", {
                        className: g()(_().cashoutWrapper, "customInput", "gameBetInput"),
                        children: [(0, r.jsx)(p.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: g()("customInputLabel"),
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "crash-bet.tsx",
                            children: "Auto cashout (multiplier)"
                        }), (0, r.jsxs)("div", {
                            className: g()("customInputInner"),
                            children: [(0, r.jsx)(A.Z, {
                                onChange: e => handleAutoCashoutInputChange(e.currentTarget.value),
                                value: L,
                                "data-sentry-element": "Input",
                                "data-sentry-source-file": "crash-bet.tsx"
                            }), (0, r.jsxs)("div", {
                                className: g()("customInputInnerButtons"),
                                children: [(0, r.jsx)(T.Z, {
                                    variant: "inputButton",
                                    onClick: () => handleAutoCashoutInputChange(""),
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "crash-bet.tsx",
                                    children: "Disable"
                                }), (0, r.jsx)(T.Z, {
                                    variant: "inputButton",
                                    onClick: () => handleAutoCashoutInputChange("2"),
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "crash-bet.tsx",
                                    children: "2.00x"
                                }), (0, r.jsx)(T.Z, {
                                    variant: "inputButton",
                                    onClick: () => handleAutoCashoutInputChange("10"),
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "crash-bet.tsx",
                                    children: "10.00x"
                                })]
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: _().buttonWrapper,
                        children: f ? (0, r.jsx)(T.Z, {
                            onClick: () => c.KP.emit("bet-cashout"),
                            variant: y ? "secondary" : "danger",
                            className: g()("gameBetSubmit", "mobileBottomMargin"),
                            children: y ? "Cashed out" : "Cashout"
                        }) : (0, r.jsx)(T.Z, {
                            onClick: () => {
                                0 >= parseFloat(P) || (console.log("game state is " + l), l === j.w.Starting ? (o(!0), c.KP.emit("join-game", {
                                    autoCashoutPoint: x > 0 ? 100 * parseFloat(x) : -1,
                                    betAmount: parseFloat(P)
                                })) : m ? (console.log("cancelling"), i(!1)) : I || (console.log("set planned bet true"), i(!0)))
                            },
                            disabled: !d || n || I || !E,
                            variant: "primary",
                            className: g()("gameBetSubmit", "mobileBottomMargin"),
                            children: n ? "Joining..." : m ? "Cancel bet" : l === j.w.InProgress ? "Join next game" : "Join game"
                        })
                    })]
                })
            }
            var L = a(5152),
                F = a.n(L);
            let E = F()(() => Promise.all([a.e(989), a.e(2593)]).then(a.bind(a, 82593)), {
                loadableGenerated: {
                    webpack: () => [82593]
                },
                ssr: !1
            });
            var R = (0, u.$j)(e => ({
                    user: e.auth.user,
                    isAuthenticated: e.auth.isAuthenticated
                }))(function(e) {
                    let {
                        isAuthenticated: t,
                        user: a
                    } = e;
                    return (0, r.jsx)(E, {
                        user: a,
                        isAuthenticated: t,
                        "data-sentry-element": "DynamicComponentWithNoSSR",
                        "data-sentry-component": "DynamicCrashGame",
                        "data-sentry-source-file": "DynamicCrashGame.tsx"
                    })
                }),
                O = a(81361),
                M = (0, u.$j)(e => ({
                    user: e.auth.user,
                    isAuthenticated: e.auth.isAuthenticated
                }))(e => {
                    var t;
                    let {
                        user: a,
                        isAuthenticated: n,
                        ...y
                    } = e, [g, f] = (0, s.useState)([]), [p, x] = (0, s.useState)(1), [_, C] = (0, s.useState)(!1), [b, v] = (0, s.useState)(!1), [P, w] = (0, s.useState)(!1), [I, S] = (0, s.useState)(null), [G, N] = (0, s.useState)(!1), [Z, T] = (0, s.useState)(!1), [B, k] = (0, s.useState)(!1), [A, L] = (0, s.useState)("30"), [F, E] = (0, s.useState)(""), [M, D] = (0, s.useState)(0), [H, K] = (0, s.useState)(0), [W, z] = (0, s.useState)([]), [X, J] = (0, s.useState)(), [Y, q] = (0, s.useState)(null), U = null !== (t = (0, O.cC)("crash_v2_enabled")) && void 0 !== t && t, V = (0, u.I0)();
                    return (0, s.useEffect)(() => {
                        let fetchData = async () => {
                            try {
                                let e = await (0, d.NPu)();
                                D(new Date(e.current.startingAt)), e.current.players && f(e.current.players), e.current.status && x(e.current.status), K(e.current.commitedEosBlock), J(e.current), q(e.options.maxProfit), z(e.history.reverse().map(e => ({ ...e,
                                    historyClassName: setHistoryClassName(e)
                                })).slice(-7)), await loadImages(["/items/crash/chart.png", "/items/crash/rocket.png", "/items/crash/rocket-explosion.svg"]), T(!0)
                            } catch (e) {
                                console.log("There was an error while loading crash schema:", e)
                            }
                        };
                        fetchData()
                    }, []), (0, s.useEffect)(() => {
                        let fetchData = async () => {
                            try {
                                let e = await (0, d.FzF)();
                                e.bet && (w(!0), S(e.bet))
                            } catch (e) {
                                console.log("There was an error while loading crash schema:", e)
                            }
                        };
                        n && fetchData()
                    }, [n]), (0, s.useEffect)(() => {
                        let addNewPlayer = e => {
                                f(t => {
                                    let a = t.findIndex(t => {
                                        let {
                                            playerID: a
                                        } = t;
                                        return a === e.playerID
                                    });
                                    return -1 !== a ? t : [...t, e]
                                })
                            },
                            gameBets = e => {
                                i.ZP.forEach(e, e => addNewPlayer(e))
                            },
                            gameStart = e => {
                                D(Date.now()), J(t => ({ ...t,
                                    publicSeed: e.publicSeed
                                })), x(j.w.InProgress)
                            },
                            gameStarting = e => {
                                f([]), J(t => ({ ...null != t ? t : {},
                                    _id: e._id,
                                    privateHash: e.privateHash
                                })), D(new Date(Date.now() + e.timeUntilStart)), S(null), x(j.w.Starting), K(!1), w(!1), (Z && _ || b) && (k(!0), c.KP.emit("join-game", {
                                    autoCashoutPoint: F > 0 ? 100 * parseFloat(F) : -1,
                                    betAmount: parseFloat(A)
                                }), b && (console.log("cancelling planned bet"), v(!1)))
                            },
                            gameEnd = e => {
                                J(!1), x(j.w.Over), N(!1)
                            },
                            betCashout = e => {
                                null != a && e.playerID === a.robloxId && (N(!0), S(Object.assign(I, e)), setTimeout(() => {
                                    w(!1)
                                }, 1500)), f(t => t.map(t => t.playerID === e.playerID ? Object.assign(t, e) : t))
                            },
                            joinError = e => {
                                e.includes("afford this") && (console.debug("show deposit modal"), V({
                                    type: m.Mr,
                                    shouldSendEvent: !0
                                })), k(!1), h.ZP.error(e)
                            },
                            joinSuccess = e => {
                                k(!1), S(e), w(!0), l.ZP.event({
                                    category: "Crash game",
                                    action: "Joined crash game",
                                    value: null != e ? e : 0
                                }), h.ZP.success("Successfully joined the game!")
                            },
                            cashoutError = e => {
                                h.ZP.error(e)
                            },
                            cashoutSuccess = () => {
                                h.ZP.success("Successfully cashed out!"), setTimeout(() => {
                                    w(!1)
                                }, 1500)
                            };
                        return c.KP.on("game-bets", gameBets), c.KP.on("game-start", gameStart), c.KP.on("game-end", gameEnd), c.KP.on("game-starting", gameStarting), c.KP.on("bet-cashout", betCashout), c.KP.on("game-join-error", joinError), c.KP.on("game-join-success", joinSuccess), c.KP.on("bet-cashout-error", cashoutError), c.KP.on("bet-cashout-success", cashoutSuccess), c.KP.on("eos-commit", K), () => {
                            c.KP.off("game-bets", gameBets), c.KP.off("game-start", gameStart), c.KP.on("game-end", gameEnd), c.KP.off("game-starting", gameStarting), c.KP.off("bet-cashout", betCashout), c.KP.off("game-join-error", joinError), c.KP.off("game-join-success", joinSuccess), c.KP.off("bet-cashout-error", cashoutError), c.KP.off("bet-cashout-success", cashoutSuccess), c.KP.off("eos-commit", K)
                        }
                    }, [p, b, _, Z, F, A, I, a]), (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(o.Z, { ...y,
                            "data-sentry-element": "GameLayout",
                            "data-sentry-source-file": "crash.tsx",
                            children: [(0, r.jsxs)(o.Z.Column, {
                                type: "left",
                                "data-sentry-element": "unknown",
                                "data-sentry-source-file": "crash.tsx",
                                children: [(0, r.jsx)(CrashBet, {
                                    maxProfit: Y,
                                    imagesLoaded: Z,
                                    currentGame: X,
                                    autoBetEnabled: _,
                                    setAutoBetEnabled: C,
                                    joining: B,
                                    setJoining: k,
                                    plannedBet: b,
                                    betting: P,
                                    cashedOut: G,
                                    gameState: p,
                                    setPlannedBet: v,
                                    autoCashoutTarget: F,
                                    setAutoCashoutTarget: E,
                                    betAmount: A,
                                    setBetAmount: L,
                                    user: a,
                                    style: {
                                        animation: "bottomTop .3s"
                                    },
                                    "data-sentry-element": "CrashBet",
                                    "data-sentry-source-file": "crash.tsx"
                                }), (0, r.jsx)(CrashPlayers, {
                                    style: {
                                        animation: "bottomTop .5s"
                                    },
                                    players: g,
                                    "data-sentry-element": "CrashPlayers",
                                    "data-sentry-source-file": "crash.tsx"
                                })]
                            }), (0, r.jsx)(o.Z.Column, {
                                customMobileOrder: "-1",
                                type: "right",
                                "data-sentry-element": "unknown",
                                "data-sentry-source-file": "crash.tsx",
                                children: U ? (0, r.jsx)(R, {
                                    user: a,
                                    isAuthenticated: n
                                }) : (0, r.jsx)(CrashGame, {
                                    style: {
                                        animation: "bottomTop .7s"
                                    },
                                    gameState: p,
                                    history: W,
                                    startTime: M,
                                    committedEosBlock: H,
                                    ownBet: I,
                                    setHistory: z,
                                    setPlayers: f
                                })
                            })]
                        })
                    })
                });

            function CrashPage() {
                return (0, r.jsx)(M, {
                    "data-sentry-element": "Crash",
                    "data-sentry-component": "CrashPage",
                    "data-sentry-source-file": "crash.tsx"
                })
            }
            CrashPage.getLayout = function(e) {
                return (0, r.jsx)(n.Z, {
                    children: e
                })
            }
        },
        19242: function(e, t, a) {
            "use strict";
            a.d(t, {
                R: function() {
                    return s
                },
                w: function() {
                    return r
                }
            });
            let r = {
                    NotStarted: 1,
                    Starting: 2,
                    InProgress: 3,
                    Over: 4,
                    Blocking: 5,
                    Refunded: 6
                },
                s = {
                    Playing: 1,
                    CashedOut: 2
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
        13806: function(e) {
            e.exports = {
                crashGame: "crash_crashGame__8up4O",
                robuxCurrency: "crash_robuxCurrency__btK5a",
                robuxCurrencyCashed: "crash_robuxCurrencyCashed__4psW1",
                robuxCurrencyCrashed: "crash_robuxCurrencyCrashed__Vc2uM",
                crashGameTimes: "crash_crashGameTimes__JiAFS",
                crashGameChart: "crash_crashGameChart__VxmCc",
                crashGameChartAnimation: "crash_crashGameChartAnimation__sbyXi",
                crashGameChartContainer: "crash_crashGameChartContainer__RhVBY",
                crashGameChartContainerWrapper: "crash_crashGameChartContainerWrapper__0L_8T",
                crashGameChartInner: "crash_crashGameChartInner__XD2_W",
                crashGameChartRocket: "crash_crashGameChartRocket__XXCtf",
                isCrashed: "crash_isCrashed__SZ7Ki",
                crashGameChartRocketWrapper: "crash_crashGameChartRocketWrapper__vEci_",
                rocketFlicker: "crash_rocketFlicker__5xfCp",
                crashGameChartRocketFire: "crash_crashGameChartRocketFire__J1jTZ",
                flicker: "crash_flicker__mvwmZ",
                flame: "crash_flame__G3aBw",
                flameYellow: "crash_flameYellow__uwrG7",
                flameOrange: "crash_flameOrange__iNHsG",
                flameRed: "crash_flameRed__Zkwy9",
                flameWhite: "crash_flameWhite__vkGOJ",
                flameBlue: "crash_flameBlue__hUbiQ",
                circle: "crash_circle__DbmKx",
                crashGameCoefficients: "crash_crashGameCoefficients__w1meu",
                crashGameCoefficient: "crash_crashGameCoefficient___OC_b",
                crashGameCountdown: "crash_crashGameCountdown__M57_m",
                crashGameCoefficientSubtitle: "crash_crashGameCoefficientSubtitle__Amh76",
                crashGameCountdownSubtitle: "crash_crashGameCountdownSubtitle__fR8k_",
                isCashed: "crash_isCashed__9GOJR",
                crashGameStatus: "crash_crashGameStatus__2FrTA",
                crashGameStatusPerfect: "crash_crashGameStatusPerfect__PYJUo",
                ripple: "crash_ripple__wHZkS",
                crashGameStatusGood: "crash_crashGameStatusGood__SzwwH",
                crashGameStatusMedium: "crash_crashGameStatusMedium__P_UbU",
                crashGameStatusBad: "crash_crashGameStatusBad__VcGki",
                crashBet: "crash_crashBet__otdiy",
                cashoutWrapper: "crash_cashoutWrapper__onmyx",
                buttonWrapper: "crash_buttonWrapper__Q4m64",
                crashPlayers: "crash_crashPlayers__msMym"
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
        }
    },
    function(e) {
        e.O(0, [4885, 8802, 205, 4768, 990, 4493, 7661, 9774, 2888, 179], function() {
            return e(e.s = 63781)
        }), _N_E = e.O()
    }
]);