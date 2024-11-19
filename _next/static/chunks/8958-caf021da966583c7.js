! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f8fc07cb-b959-44d5-a3a0-104bc7ce1616", e._sentryDebugIdIdentifier = "sentry-dbid-f8fc07cb-b959-44d5-a3a0-104bc7ce1616")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8958], {
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
            var a, s, r, i = n(85893),
                o = n(62961),
                l = n(93967),
                u = n.n(l),
                c = n(67294),
                m = n(2664),
                d = n(98216),
                p = n(5616),
                v = n(18413),
                y = n(34768),
                h = n(48999),
                g = n(62484);

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
                f = n(4595),
                x = n(6428),
                I = n(40400),
                b = n(39398);
            let j = (0, v.ZP)(e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, i.jsx)(y.Z, { ...n,
                    classes: {
                        popper: t
                    }
                })
            })({
                ["& .".concat(h.Z.tooltip)]: {
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
                    setIsAuto: l,
                    className: v,
                    showInfo: y = !0,
                    sideButtonType: h = "default",
                    maxProfit: _
                } = e, B = (0, m.I0)(), C = (0, x.Z)(), M = (0, m.v9)(e => e.auth.isAuthenticated), N = (0, c.useMemo)(() => C.width > 992 && C.width <= 1400, [C]);
                return (0, i.jsxs)(p.Z, {
                    display: "flex",
                    gap: "1em",
                    justifyContent: "space-between",
                    className: v,
                    width: "100%",
                    "data-sentry-element": "Box",
                    "data-sentry-component": "BetHeader",
                    "data-sentry-source-file": "BetHeader.tsx",
                    children: [(0, i.jsxs)(p.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        className: u()("gameBetTabs"),
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "BetHeader.tsx",
                        children: [(0, i.jsx)(f.Z, {
                            variant: "tab",
                            isActive: !r,
                            onClick: () => l && l(!1),
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "BetHeader.tsx",
                            children: "Manual"
                        }), s && (0, i.jsx)(f.Z, {
                            variant: "tab",
                            isActive: r,
                            onClick: () => l && l(!0),
                            children: "Auto"
                        })]
                    }), (0, i.jsxs)(p.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        className: u()("gameBetTabs"),
                        gap: "1em",
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "BetHeader.tsx",
                        children: [y && (0, i.jsx)(f.Z, {
                            onClick: () => B({
                                type: o.hj,
                                payload: (0, d.Z)(t)
                            }),
                            variant: "compact" === h ? "betOptionCompact" : "betOption",
                            children: (0, i.jsx)(g.Z, {
                                style: {
                                    height: ".75em"
                                }
                            })
                        }), !!n && (0, i.jsx)(f.Z, {
                            onClick: () => B({
                                type: o.LE,
                                payload: { ...n,
                                    gameName: t
                                }
                            }),
                            variant: "compact" === h ? "betOptionCompact" : "betOption",
                            children: N ? (0, i.jsx)(shield, {}) : "Fairness"
                        }), a && M && (0, i.jsx)(f.Z, {
                            onClick: () => B({
                                type: o.bN,
                                payload: {
                                    gameType: t
                                }
                            }),
                            variant: "compact" === h ? "betOptionCompact" : "betOption",
                            children: N ? (0, i.jsx)(icons_history, {
                                style: {
                                    transform: "scale(0.8)"
                                }
                            }) : "History"
                        }), _ && (0, i.jsx)(j, {
                            title: (0, i.jsx)("p", {
                                style: {
                                    fontSize: "12px"
                                },
                                children: _ ? "F$ ".concat((0, b.Z)((0, I.Z)(_)), " Max Profit") : "Loading.."
                            }),
                            children: (0, i.jsx)(f.Z, {
                                variant: "compact" === h ? "betOptionCompact" : "betOption",
                                children: N ? "Profit" : "Max profit"
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
                i = n(2664),
                o = n(98216),
                l = n(35328),
                u = n(7458);
            t.Z = e => {
                let {
                    className: t,
                    value: n,
                    onChange: c,
                    min: m,
                    max: d,
                    showInfo: p,
                    gameName: v,
                    defaultValue: y,
                    ...h
                } = e, g = (0, i.I0)(), f = (0, i.v9)(e => e.auth.user), x = (0, r.useMemo)(() => Math.floor((null == f ? void 0 : f.wallet) + ((null == f ? void 0 : f.bonusWallet) || 0)), [f]), I = m || .001, b = d || x, calculateBetAmount = e => {
                    if (!n) return n;
                    switch (e) {
                        case "1/2":
                            return Math.max(Math.floor(n / 2), I);
                        case "2x":
                            return Math.min(Math.max(2 * n, 0), Math.min(b, x));
                        case "max":
                            return Math.min(Math.max(x, 0), b);
                        default:
                            return n
                    }
                }, j = (0, r.useCallback)(() => {
                    void 0 !== y && "".concat(n) === "".concat(y) && c("")
                }, [y, n]), _ = (0, r.useCallback)(() => {
                    void 0 !== y && "" === n && c(y)
                }, [y, n]);
                return (0, a.jsx)(l.Z, {
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
                    }, ...x ? [{
                        label: "Max",
                        onClick: () => c(calculateBetAmount("max"))
                    }] : [], ...p && v ? [{
                        label: "?",
                        onClick: () => g({
                            type: s.hj,
                            payload: (0, o.Z)(v)
                        })
                    }] : []],
                    "data-sentry-element": "FormField",
                    "data-sentry-component": "BetInput",
                    "data-sentry-source-file": "BetInput.tsx",
                    children: (0, a.jsx)(u.Z, {
                        value: n,
                        onChange: c,
                        onFocus: j,
                        onBlur: _,
                        pauseBlurValidation: void 0 !== y && "" === n,
                        min: m,
                        max: Math.min(Math.max(x, 0), b),
                        step: 10,
                        hasCurrencyIcon: !0,
                        disableWheel: !0,
                        ...h,
                        "data-sentry-element": "NumberInput",
                        "data-sentry-source-file": "BetInput.tsx"
                    })
                })
            }
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
                i = n(26030),
                o = n.n(i),
                l = n(6428);
            let u = {
                left: o().gameLayoutColumnLeft,
                right: o().gameLayoutColumnRight,
                row: o().gameLayoutColumnRow,
                anotherLeft: o().gameLayoutColumnAnotherLeft,
                anotherRight: o().gameLayoutColumnAnotherRight
            };

            function GameLayout(e) {
                let {
                    className: t,
                    children: n,
                    ...s
                } = e;
                return (0, a.jsx)("div", {
                    className: r()(o().gameLayout, t),
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
                    customMobileOrder: i = "initial",
                    ...c
                } = e, m = (0, l.Z)();
                return (0, a.jsx)("div", {
                    className: r()(o().gameLayoutColumn, u[t], n),
                    style: {
                        order: m.width < 993 ? i : "initial"
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
                i = n(77579),
                o = n(4595),
                l = n(46826),
                u = n.n(l);
            let c = {
                primary: u().formFieldPrimary,
                secondary: u().formFieldSecondary
            };
            t.Z = e => {
                let {
                    className: t,
                    isBet: n,
                    label: s,
                    variant: l = "primary",
                    icon: m,
                    patterns: d,
                    toggleButtonsOnFocus: p,
                    children: v
                } = e;
                return (0, a.jsxs)("div", {
                    className: r()(u().formField, c[l], t),
                    "data-sentry-component": "FormField",
                    "data-sentry-source-file": "FormField.tsx",
                    children: [(0, a.jsx)(i.Z, {
                        element: "p",
                        textType: "labelsRegular",
                        "data-sentry-element": "Text",
                        "data-sentry-source-file": "FormField.tsx",
                        children: s
                    }), (0, a.jsxs)("div", {
                        className: r()("customInputInner", u().formFieldInner),
                        children: [v, (0, a.jsx)("div", {
                            className: r()("customInputInnerButtons", u().formFieldInnerButtons, p && u().formFieldInnerButtonsToggleFocus),
                            style: n ? {
                                right: "16px"
                            } : {},
                            children: d ? d.map((e, t) => (0, a.jsx)(o.Z, {
                                variant: "inputButton",
                                onClick: e.onClick,
                                className: u().innerButton,
                                children: e.label
                            }, t)) : (0, a.jsx)("div", {
                                className: r()(u().inputIcon),
                                children: m
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
                    disableWheel: i = !1,
                    pauseBlurValidation: o,
                    onBlur: l = () => {},
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
                        if (l(e), o) return;
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
                        i && (null === (e = document.activeElement) || void 0 === e || e.blur())
                    },
                    "data-sentry-element": "Input",
                    "data-sentry-component": "NumberInput",
                    "data-sentry-source-file": "NumberInput.tsx"
                })
            }
        },
        48958: function(e, t, n) {
            "use strict";
            n.d(t, {
                ag: function() {
                    return M
                },
                ZP: function() {
                    return N
                }
            });
            var a = n(85893),
                s = n(67294),
                r = n(2181),
                i = n(86501),
                o = n(2664),
                l = n(26118),
                u = n(49089),
                c = n(93967),
                m = n.n(c),
                d = n(77579),
                p = n(4595),
                v = n(58733),
                y = n(9627),
                h = n.n(y),
                g = n(62961),
                f = n(83198),
                x = n(4277),
                I = n(38178);
            let b = {
                    win: h().minesGameItemWin,
                    lossPrimary: h().minesGameItemMine,
                    lossSecondary: h().minesGameItemOtherMine
                },
                j = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

            function sleep(e) {
                return new Promise(t => setTimeout(t, e))
            }

            function MinesGame(e) {
                let {
                    className: t,
                    setMultiplier: n,
                    game: l,
                    setGame: u,
                    autoMode: c,
                    selectedMineIndexes: d,
                    setSelectedMineIndexes: p,
                    itemsRef: v,
                    loadingMineIndex: y,
                    setLoadingMineIndex: f,
                    ...x
                } = e;
                (0, s.useRef)([]);
                let _ = (0, o.I0)(),
                    handleToggleMine = e => {
                        let t = [...d];
                        t[e] = !t[e], p(t)
                    };
                async function handleCellClick(e) {
                    if (e.classList.contains(b.win) || e.classList.contains(b.lossPrimary) || e.classList.contains(b.lossSecondary)) return;
                    let t = 0;
                    if (v.current.map((n, a) => {
                            n == e && (t = a)
                        }), c) {
                        if (d[t]) {
                            handleToggleMine(t);
                            return
                        }
                        handleToggleMine(t);
                        return
                    }
                    try {
                        f(e => [...e, t]), (0, I._Q)(I.Tc.MINES.SUSPENSE);
                        let e = Date.now(),
                            a = await (0, r.J_T)(!1, t),
                            s = 600 - (Date.now() - e);
                        if (console.log("wait for " + s), s > 0 && await sleep(s), f(e => null == e ? void 0 : e.filter(e => e !== t)), a.exploded)(0, I._Q)(I.Tc.MINES.EXPLOSION), u(a.game);
                        else {
                            if (l.exploded) return;
                            (0, I._Q)(I.Tc.MINES.GOOD), u(e => ({ ...e,
                                uncoveredLocations: [...e.uncoveredLocations, t]
                            })), n(a.multiplier)
                        }
                    } catch (e) {
                        var a, s, o, m;
                        if (f(e => null == e ? void 0 : e.filter(e => e !== t)), (null == e ? void 0 : null === (s = e.response) || void 0 === s ? void 0 : null === (a = s.data) || void 0 === a ? void 0 : a.msg) === "You do not have an active mines game!" && i.Am.error("You must start the game first!", {
                                id: "mines-error"
                            }), null == e ? void 0 : null === (m = e.response) || void 0 === m ? void 0 : null === (o = m.data) || void 0 === o ? void 0 : o.msg) {
                            if (e.response.data.msg.includes("Auth")) {
                                _({
                                    type: g.gr
                                });
                                return
                            }
                        } else i.Am.error("An unknown fatal error occurred while trying to process your request. Are you connected to the internet?")
                    }
                }
                return (0, a.jsx)("div", {
                    className: m()(h().minesGame, t),
                    ...x,
                    "data-sentry-component": "MinesGame",
                    "data-sentry-source-file": "mines-game.tsx",
                    children: (0, a.jsx)("div", {
                        className: h().minesGameContainer,
                        children: j.map((e, t) => {
                            var n, s, r, i, o;
                            return y.includes(t) ? (0, a.jsx)("div", {
                                "aria-label": "Loading mine ".concat(e),
                                ref: e => v.current[t] = e,
                                className: m()(h().minesGameSpinningItem),
                                children: (0, a.jsx)("div", {
                                    "aria-label": "Loading mine ".concat(e),
                                    className: m()(h().minesGameSpinningItemLoadingSpinner)
                                })
                            }, t) : (0, a.jsx)("button", {
                                onClick: e => handleCellClick(e.target),
                                "aria-label": "Open mine ".concat(e),
                                ref: e => v.current[t] = e,
                                className: m()(h().minesGameItem, (null == l ? void 0 : null === (n = l.uncoveredLocations) || void 0 === n ? void 0 : n.includes(t)) && h().minesGameItemWin, ((null == l ? void 0 : l.exploded) || !(null == l ? void 0 : l.active)) && (null == l ? void 0 : null === (s = l.mineLocations) || void 0 === s ? void 0 : s.includes(t)) && (null == l ? void 0 : l.badMineUncovered) !== t && h().minesGameItemOtherMine, (null == l ? void 0 : l.exploded) && (null == l ? void 0 : l.badMineUncovered) == t && h().minesGameItemMine, ((null == l ? void 0 : l.exploded) || (null == l ? void 0 : l.active) === !1) && !(null == l ? void 0 : null === (r = l.uncoveredLocations) || void 0 === r ? void 0 : r.includes(t)) && !(null == l ? void 0 : null === (i = l.mineLocations) || void 0 === i ? void 0 : i.includes(t)) && h().minesGameItemWin, !(null == l ? void 0 : null === (o = l.uncoveredLocations) || void 0 === o ? void 0 : o.includes(t)) && c && d[t] && h().minesGameItemAutoMode)
                            }, t)
                        })
                    })
                })
            }
            var _ = n(11163),
                B = n(86436),
                C = n(20875);

            function MinesBet(e) {
                let {
                    user: t,
                    setGame: n,
                    setMultiplier: l,
                    multiplier: c,
                    game: y,
                    className: b,
                    isAuthenticated: j,
                    autoMode: N,
                    setAutoMode: w,
                    selectedMineIndexes: L,
                    setSelectedMineIndexes: Z,
                    itemsRef: k,
                    setLoadingMineIndex: S,
                    ...A
                } = e, [F, G] = (0, s.useState)("10"), [T, O] = (0, s.useState)("3"), [E, R] = (0, s.useState)(!1), {
                    fflags: P
                } = (0, o.v9)(e => e.auth), {
                    autoBetMine: D
                } = (0, o.v9)(e => e.auth), W = (0, s.useRef)(!1), H = (0, s.useRef)(0), Q = (0, s.useRef)(0), [$, U] = (0, s.useState)(!1), [z, J] = (0, s.useState)(!1), [K, Y] = (0, s.useState)("increase"), [q, V] = (0, s.useState)("increase"), [X, ee] = (0, s.useState)(0), [et, en] = (0, s.useState)(0), [ea, es, er, ei] = (0, x.Z)("0"), [eo, el, eu, ec] = (0, x.Z)("0"), [em, ed, ep, ev] = (0, x.Z)("0"), [ey, eh, eg, ef] = (0, x.Z)("0"), [ex, eI, eb, ej] = (0, x.Z)("0"), [e_, eB, eC, eM] = (0, x.Z)("0"), eN = (0, o.I0)(), ew = (0, _.useRouter)();
                (0, s.useEffect)(() => {
                    parseFloat(F) > (null == t ? void 0 : t.wallet) + (null == t ? void 0 : t.bonusWallet) && G(Math.floor((null == t ? void 0 : t.wallet) + (null == t ? void 0 : t.bonusWallet)).toString())
                }, [F]), (0, s.useEffect)(() => {
                    T > 24 && O(24), T < 1 && O(1)
                }, [T]);
                let setAutoBetMine = e => {
                        eI(e_), eN({
                            type: "SET_AUTO_BET_MINE",
                            payload: e
                        })
                    },
                    shouldStopGame = () => !!(parseFloat(ey) && Q.current >= parseFloat(ey) || parseFloat(em) && Q.current <= -parseFloat(em) || parseInt(ex) && H.current >= parseInt(ex)),
                    stopAutoLoop = () => {
                        setAutoBetMine(!1), Z(M)
                    },
                    eL = L.map((e, t) => !!e && t).filter(e => !1 !== e);
                (0, s.useEffect)(() => {
                    let e = !1;
                    ew.events.on("routeChangeStart", () => {
                        stopAutoLoop()
                    });
                    let runAutoModeGameLoop = async () => {
                        try {
                            for (; D && !e;) {
                                (null == y ? void 0 : y.active) || await startNewGame(), H.current++;
                                for (let e = 0; e < eL.length; e++) {
                                    let t = eL[e];
                                    if (L[t]) {
                                        let e = await uncoverTile(t);
                                        if (!e || !D) {
                                            Q.current -= parseFloat(F), W.current = !1;
                                            break
                                        }
                                        t === eL[eL.length - 1] && (await cashout(), Q.current += et - parseFloat(F) || 0, W.current = !0)
                                    }
                                }
                                if (!D) break;
                                if (await new Promise(e => setTimeout(e, 2e3)), shouldStopGame() || !D) {
                                    stopAutoLoop();
                                    break
                                }
                                W.current ? parseFloat(eo) > 0 ? G(e => (Math.floor(parseFloat(e) * (1 + parseFloat(eo) / 100) * 100) / 100).toString()) : G(X.toString()) : parseFloat(ea) > 0 ? G(e => (Math.floor(parseFloat(e) * (1 + parseFloat(ea) / 100) * 100) / 100).toString()) : G(X.toString())
                            }
                            n(void 0)
                        } catch (e) {
                            console.error("WHILE LOOP ERROR", e)
                        }
                    };
                    return D && runAutoModeGameLoop(), () => {
                        e = !0, H.current = 0, Q.current = 0
                    }
                }, [D]);
                let startNewGame = async () => {
                        try {
                            let e = await (0, r.Nhe)(T, parseFloat(F));
                            P.fe_ga_enabled && u.ZP.event({
                                category: "Mines game",
                                action: "Joined mines game",
                                value: parseFloat(F)
                            }), P.fe_mixpanel_enabled && f.Z.track("JOINED_MINES_GAME"), R(!1), l(.95), n(e.game)
                        } catch (e) {
                            console.error("Error starting new game", e), i.Am.error("Error starting new game"), R(!1)
                        }
                    },
                    uncoverTile = async e => {
                        try {
                            S(t => [...t, e]), (0, I._Q)(I.Tc.MINES.SUSPENSE);
                            let t = Date.now(),
                                a = await (0, r.J_T)(!1, e),
                                s = 600 - (Date.now() - t);
                            if (s > 0 && await sleep(s), S(t => null == t ? void 0 : t.filter(t => t !== e)), a.exploded) return (0, I._Q)(I.Tc.MINES.EXPLOSION), n(a.game), !1;
                            if (null == y ? void 0 : y.exploded) return !1;
                            return (0, I._Q)(I.Tc.MINES.GOOD), n(t => {
                                if (t) return { ...t,
                                    uncoveredLocations: [...null == t ? void 0 : t.uncoveredLocations, e]
                                }
                            }), l(a.multiplier), !0
                        } catch (n) {
                            var t, a, s, o;
                            return S(t => null == t ? void 0 : t.filter(t => t !== e)), (null == n ? void 0 : null === (a = n.response) || void 0 === a ? void 0 : null === (t = a.data) || void 0 === t ? void 0 : t.msg) === "You do not have an active mines game!" && i.Am.error("You must start the game first!", {
                                id: "mines-error"
                            }), (null == n ? void 0 : null === (o = n.response) || void 0 === o ? void 0 : null === (s = o.data) || void 0 === s ? void 0 : s.msg) ? n.response.data.msg.includes("Auth") && eN({
                                type: g.gr
                            }) : i.Am.error("An unknown fatal error occurred while trying to process your request. Are you connected to the internet?"), !1
                        }
                    },
                    cashout = async () => {
                        let e = await (0, r.J_T)(!0);
                        R(!1), e.success && ((0, I._Q)(I.Tc.MINES.BIG_CASHOUT), i.Am.success("You've won ".concat(e.winnings.toFixed(2), " F$ by cashing out at ").concat(e.multiplier.toFixed(2), "x! Good job!")), n(e.game), l(.95), en((null == e ? void 0 : e.winnings) || 0))
                    },
                    handleManualGameMode = async () => {
                        try {
                            R(!0), (null == y ? void 0 : y.active) ? await cashout() : await startNewGame()
                        } catch (n) {
                            var e, t;
                            if (R(!1), null == n ? void 0 : null === (t = n.response) || void 0 === t ? void 0 : null === (e = t.data) || void 0 === e ? void 0 : e.msg) {
                                if (n.response.data.msg.includes("Auth")) {
                                    eN({
                                        type: g.gr
                                    });
                                    return
                                }
                                i.Am.error(n.response.data.msg)
                            } else i.Am.error("An unknown fatal error occurred while trying to process your request. Are you connected to the internet?")
                        }
                    },
                    onButtonClick = async () => {
                        if (5 > parseFloat(F)) {
                            i.Am.error("The minimum bet amount is 5 F$ !");
                            return
                        }
                        N && !D ? (setAutoBetMine(!0), ee(parseFloat(F))) : handleManualGameMode()
                    };
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: m()("gameBlock gameBet", h().minesBet, b),
                        ...A,
                        children: [(0, a.jsx)("div", {
                            className: m()("gameBetTabs"),
                            style: {
                                display: "flex",
                                justifyContent: "space-between"
                            },
                            children: (0, a.jsx)(B.Z, {
                                gameName: "mines",
                                sideButtonType: "compact",
                                showAuto: !(null == P ? void 0 : P.autoMinesBetDisabled),
                                showHistory: !0,
                                lastGame: y,
                                isAuto: N,
                                setIsAuto: e => {
                                    w(e), e || Z(M), n(void 0)
                                },
                                maxProfit: 1e6,
                                "data-sentry-element": "BetHeader",
                                "data-sentry-source-file": "mines-bet.tsx"
                            })
                        }), (0, a.jsx)(C.Z, {
                            value: F,
                            defaultValue: 10,
                            onChange: e => G(e),
                            hasCurrencyIcon: !0,
                            gameName: "mines",
                            min: 5,
                            "data-sentry-element": "BetInput",
                            "data-sentry-source-file": "mines-bet.tsx"
                        }), (0, a.jsxs)("div", {
                            className: m()("customInput", "gameBetInput"),
                            children: [(0, a.jsx)(d.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: m()("customInputLabel"),
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "mines-bet.tsx",
                                children: "Mines"
                            }), (0, a.jsxs)("div", {
                                className: m()("customInputInner"),
                                children: [(0, a.jsx)(v.Z, {
                                    pattern: "^-?[0-9]\\d*\\.?\\d*$",
                                    onKeyPress: e => {
                                        /[0-9]/.test(e.key) || e.preventDefault()
                                    },
                                    onChange: e => O(e.currentTarget.value),
                                    value: T,
                                    "data-sentry-element": "Input",
                                    "data-sentry-source-file": "mines-bet.tsx"
                                }), (0, a.jsxs)("div", {
                                    className: m()("customInputInnerButtons"),
                                    children: [(0, a.jsx)(p.Z, {
                                        variant: "inputButton",
                                        onClick: () => O(1),
                                        "data-sentry-element": "Button",
                                        "data-sentry-source-file": "mines-bet.tsx",
                                        children: "1"
                                    }), (0, a.jsx)(p.Z, {
                                        variant: "inputButton",
                                        onClick: () => O(3),
                                        "data-sentry-element": "Button",
                                        "data-sentry-source-file": "mines-bet.tsx",
                                        children: "3"
                                    }), (0, a.jsx)(p.Z, {
                                        variant: "inputButton",
                                        onClick: () => O(5),
                                        "data-sentry-element": "Button",
                                        "data-sentry-source-file": "mines-bet.tsx",
                                        children: "5"
                                    }), (0, a.jsx)(p.Z, {
                                        variant: "inputButton",
                                        onClick: () => O(10),
                                        "data-sentry-element": "Button",
                                        "data-sentry-source-file": "mines-bet.tsx",
                                        children: "10"
                                    }), (0, a.jsx)(p.Z, {
                                        variant: "inputButton",
                                        onClick: () => O(15),
                                        "data-sentry-element": "Button",
                                        "data-sentry-source-file": "mines-bet.tsx",
                                        children: "15"
                                    }), (0, a.jsx)(p.Z, {
                                        variant: "inputButton",
                                        onClick: () => O(20),
                                        "data-sentry-element": "Button",
                                        "data-sentry-source-file": "mines-bet.tsx",
                                        children: "20"
                                    })]
                                })]
                            })]
                        }), N && (0, a.jsxs)("div", {
                            className: m()("customInput", "gameBetInput"),
                            children: [(0, a.jsx)(d.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: m()("customInputLabel"),
                                children: "Number of Games"
                            }), (0, a.jsx)("div", {
                                className: m()("customInputInner"),
                                children: (0, a.jsx)(v.Z, {
                                    pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                    onKeyPress: e => {
                                        /[0-9.]/.test(e.key) || e.preventDefault()
                                    },
                                    hasCurrencyIcon: !0,
                                    currencyIconUrl: "/icons/infinity.svg",
                                    onChange: e => {
                                        eI(e.currentTarget.value), eB(e.currentTarget.value)
                                    },
                                    value: e_,
                                    iconPosition: "end",
                                    onFocus: eC,
                                    onBlur: eM,
                                    placeholder: "0"
                                })
                            })]
                        }), N && (0, a.jsxs)("div", {
                            className: m()("customInput", "gameBetInput"),
                            children: [(0, a.jsx)(d.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: m()("customInputLabel"),
                                children: "On Win"
                            }), (0, a.jsxs)("div", {
                                className: m()("customInputInner"),
                                children: [(0, a.jsxs)("div", {
                                    className: m()("customInputInnerButtonsLeft"),
                                    children: [(0, a.jsx)(p.Z, {
                                        variant: "autoReset",
                                        onClick: () => {
                                            Y("reset"), el("0"), J(!0)
                                        },
                                        className: m()({
                                            clicked: "reset" === K,
                                            unclicked: "increase" === K
                                        }),
                                        children: "Reset"
                                    }), (0, a.jsx)(p.Z, {
                                        variant: "autoIncrease",
                                        onClick: () => {
                                            Y("increase"), J(!1)
                                        },
                                        className: m()("customInputInnerButtonsLeftIncrease", {
                                            clicked: "increase" === K,
                                            unclicked: "reset" === K
                                        }),
                                        children: "Increase By"
                                    })]
                                }), (0, a.jsx)(v.Z, {
                                    pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                    onKeyPress: e => {
                                        /[0-9.]/.test(e.key) || e.preventDefault()
                                    },
                                    hasCurrencyIcon: !0,
                                    currencyIconUrl: "/icons/percentage.svg",
                                    onChange: e => el(e.currentTarget.value),
                                    value: eo,
                                    iconPosition: "end",
                                    className: h().leftInput,
                                    onFocus: eu,
                                    onBlur: ec,
                                    disabled: z
                                })]
                            })]
                        }), N && (0, a.jsxs)("div", {
                            className: m()("customInput", "gameBetInput"),
                            children: [(0, a.jsx)(d.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: m()("customInputLabel"),
                                children: "On Loss"
                            }), (0, a.jsxs)("div", {
                                className: m()("customInputInner"),
                                children: [(0, a.jsxs)("div", {
                                    className: m()("customInputInnerButtonsLeft"),
                                    children: [(0, a.jsx)(p.Z, {
                                        variant: "autoReset",
                                        onClick: () => {
                                            V("reset"), es("0"), U(!0)
                                        },
                                        className: m()({
                                            clicked: "reset" === q,
                                            unclicked: "increase" === q
                                        }),
                                        children: "Reset"
                                    }), (0, a.jsx)(p.Z, {
                                        variant: "autoIncrease",
                                        onClick: () => {
                                            V("increase"), U(!1)
                                        },
                                        className: m()("customInputInnerButtonsLeftIncrease", {
                                            clicked: "increase" === q,
                                            unclicked: "reset" === q
                                        }),
                                        children: "Increase By"
                                    })]
                                }), (0, a.jsx)(v.Z, {
                                    pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                    onKeyPress: e => {
                                        /[0-9.]/.test(e.key) || e.preventDefault()
                                    },
                                    hasCurrencyIcon: !0,
                                    currencyIconUrl: "/icons/percentage.svg",
                                    onChange: e => es(e.currentTarget.value),
                                    value: ea,
                                    iconPosition: "end",
                                    className: h().leftInput,
                                    onFocus: er,
                                    onBlur: ei,
                                    disabled: $
                                })]
                            })]
                        }), N && (0, a.jsxs)("div", {
                            className: h().inputWrapper,
                            children: [(0, a.jsxs)("div", {
                                className: m()("customInput", "gameBetInput"),
                                children: [(0, a.jsx)(d.Z, {
                                    element: "p",
                                    textType: "labelsRegular",
                                    className: m()("customInputLabel"),
                                    children: "Stop on Net Gain"
                                }), (0, a.jsx)("div", {
                                    className: m()("customInputInner"),
                                    children: (0, a.jsx)(v.Z, {
                                        pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                        onKeyPress: e => {
                                            /[0-9.]/.test(e.key) || e.preventDefault()
                                        },
                                        hasCurrencyIcon: !0,
                                        onChange: e => eh(e.currentTarget.value),
                                        value: ey,
                                        iconPosition: "end",
                                        onFocus: eg,
                                        onBlur: ef
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: m()("customInput", "gameBetInput"),
                                children: [(0, a.jsx)(d.Z, {
                                    element: "p",
                                    textType: "labelsRegular",
                                    className: m()("customInputLabel"),
                                    children: "Stop on Net Loss"
                                }), (0, a.jsx)("div", {
                                    className: m()("customInputInner"),
                                    children: (0, a.jsx)(v.Z, {
                                        pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                        onKeyPress: e => {
                                            /[0-9.]/.test(e.key) || e.preventDefault()
                                        },
                                        hasCurrencyIcon: !0,
                                        onChange: e => ed(e.currentTarget.value),
                                        value: em,
                                        iconPosition: "end",
                                        onFocus: ep,
                                        onBlur: ev
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: m()("customInput", "gameBetInput"),
                            children: [(0, a.jsxs)(d.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: m()("customInputLabel"),
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "mines-bet.tsx",
                                children: ["Total earnings ", (null == y ? void 0 : y.active) && "".concat(c.toFixed(2), "x")]
                            }), (0, a.jsx)("div", {
                                className: m()("customInputInner"),
                                children: (0, a.jsx)(v.Z, {
                                    disabled: !0,
                                    value: (null == y ? void 0 : y.active) ? ((null == y ? void 0 : y.betAmount) * c).toFixed(2) : "",
                                    "data-sentry-element": "Input",
                                    "data-sentry-source-file": "mines-bet.tsx"
                                })
                            })]
                        }), N ? (0, a.jsx)(a.Fragment, {
                            children: D ? (0, a.jsx)(p.Z, {
                                variant: "secondary",
                                onClick: stopAutoLoop,
                                className: m()("gameBetSubmit", "mobileBottomMargin"),
                                children: "Stop Auto Mode"
                            }) : (0, a.jsx)(p.Z, {
                                variant: (null == y ? void 0 : y.active) ? "secondary" : "primary",
                                onClick: onButtonClick,
                                disabled: 0 === eL.length,
                                className: m()("gameBetSubmit", "mobileBottomMargin"),
                                children: "Start Auto Mode"
                            })
                        }) : (0, a.jsx)(p.Z, {
                            variant: (null == y ? void 0 : y.active) ? "secondary" : "primary",
                            disabled: E || (null == y ? void 0 : y.active) && c <= 1,
                            onClick: onButtonClick,
                            className: m()("gameBetSubmit", "mobileBottomMargin"),
                            children: (null == y ? void 0 : y.active) ? c >= 1 ? "Cashout (".concat(c.toFixed(2), " x)") : "Waiting to uncover a mine" : "Start new game"
                        })]
                    })
                })
            }
            let M = Array(25).fill(!1);
            var N = (0, o.$j)(e => ({
                user: e.auth.user,
                isAuthenticated: e.auth.isAuthenticated
            }))(e => {
                let {
                    user: t,
                    isAuthenticated: n,
                    ...o
                } = e, u = (0, s.useRef)([]), [c, m] = (0, s.useState)(), [d, p] = (0, s.useState)(.95), [v, y] = (0, s.useState)(!1), [h, g] = (0, s.useState)(M), [f, x] = (0, s.useState)([]), fetchData = async () => {
                    try {
                        let e = await (0, r.Plg)();
                        e.hasGame && (m(e.game), p(e.multiplier))
                    } catch (e) {
                        i.Am.error("Failed to load actvie mines game, please refresh the page and try again!")
                    }
                };
                return (0, s.useEffect)(() => {
                    n && fetchData()
                }, [n]), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(l.Z, { ...o,
                        "data-sentry-element": "GameLayout",
                        "data-sentry-source-file": "mines.tsx",
                        children: [(0, a.jsx)(l.Z.Column, {
                            type: "left",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "mines.tsx",
                            children: (0, a.jsx)(MinesBet, {
                                style: {
                                    animation: "bottomTop .3s"
                                },
                                user: t,
                                isAuthenticated: n,
                                game: c,
                                setGame: m,
                                multiplier: d,
                                setMultiplier: p,
                                autoMode: v,
                                setAutoMode: y,
                                selectedMineIndexes: h,
                                setSelectedMineIndexes: g,
                                itemsRef: u,
                                setLoadingMineIndex: x,
                                "data-sentry-element": "MinesBet",
                                "data-sentry-source-file": "mines.tsx"
                            })
                        }), (0, a.jsx)(l.Z.Column, {
                            customMobileOrder: "-1",
                            type: "right",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "mines.tsx",
                            children: (0, a.jsx)(MinesGame, {
                                style: {
                                    animation: "bottomTop .5s"
                                },
                                game: c,
                                setGame: m,
                                setMultiplier: p,
                                autoMode: v,
                                selectedMineIndexes: h,
                                setSelectedMineIndexes: g,
                                itemsRef: u,
                                loadingMineIndex: f,
                                setLoadingMineIndex: x,
                                "data-sentry-element": "MinesGame",
                                "data-sentry-source-file": "mines.tsx"
                            })
                        })]
                    })
                })
            })
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
        9627: function(e) {
            e.exports = {
                minesBetInputAmount: "mines_minesBetInputAmount__GyH73",
                minesGame: "mines_minesGame__6Bltb",
                minesGameContainer: "mines_minesGameContainer__Ih15s",
                minesGameSpinningItem: "mines_minesGameSpinningItem__1uz91",
                spinning: "mines_spinning__s1DfQ",
                minesGameSpinningItemLoadingSpinner: "mines_minesGameSpinningItemLoadingSpinner__J_bLZ",
                minesGameItem: "mines_minesGameItem__S2ytQ",
                minesGameItemWin: "mines_minesGameItemWin__4kRNF",
                minesGameItemMine: "mines_minesGameItemMine__NeRa4",
                minesGameItemOtherMine: "mines_minesGameItemOtherMine__cOPla",
                minesGameItemAutoMode: "mines_minesGameItemAutoMode__FFjg4",
                leftInput: "mines_leftInput__2DBam",
                inputWrapper: "mines_inputWrapper__P5doB"
            }
        }
    }
]);