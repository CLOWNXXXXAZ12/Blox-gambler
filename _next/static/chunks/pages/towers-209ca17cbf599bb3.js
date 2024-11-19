! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "301cafc6-088b-41ce-a720-cf176cd4c2b8", e._sentryDebugIdIdentifier = "sentry-dbid-301cafc6-088b-41ce-a720-cf176cd4c2b8")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9240], {
        62484: function(e, t, a) {
            "use strict";
            var n, r = a(67294);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a)({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            t.Z = function(e) {
                return r.createElement("svg", _extends({
                    fill: "#8690bf",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 318.293 318.293",
                    style: {
                        enableBackground: "new 0 0 318.293 318.293"
                    },
                    xmlSpace: "preserve"
                }, e), n || (n = r.createElement("path", {
                    d: "M159.148 0c-52.696 0-95.544 39.326-95.544 87.662h47.736c0-22.007 21.438-39.927 47.808-39.927 26.367 0 47.804 17.92 47.804 39.927v6.929c0 23.39-10.292 34.31-25.915 50.813-20.371 21.531-45.744 48.365-45.744 105.899h47.745c0-38.524 15.144-54.568 32.692-73.12 17.368-18.347 38.96-41.192 38.96-83.592v-6.929C254.689 39.326 211.845 0 159.148 0zM134.475 277.996h49.968v40.297h-49.968z"
                })))
            }
        },
        99238: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/towers", function() {
                return a(76520)
            }])
        },
        4277: function(e, t, a) {
            "use strict";
            var n = a(67294);
            t.Z = e => {
                let [t, a] = (0, n.useState)(e), r = (0, n.useCallback)(t => {
                    t.target.value === e && a("")
                }, [e]), o = (0, n.useCallback)(t => {
                    "" === t.target.value && a(e)
                }, [e]);
                return [t, a, r, o]
            }
        },
        86436: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return bet_BetHeader
                }
            });
            var n, r, o, l = a(85893),
                s = a(62961),
                u = a(93967),
                i = a.n(u),
                c = a(67294),
                m = a(2664),
                d = a(98216),
                y = a(5616),
                f = a(18413),
                h = a(34768),
                g = a(48999),
                p = a(62484);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a)({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
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
                }, e), n || (n = c.createElement("path", {
                    d: "M14.85 5.68a.396.396 0 0 0-.29-.324L9.608 4.014a.413.413 0 0 0-.216 0L4.44 5.356a.396.396 0 0 0-.29.323c-.03.202-.684 4.954.996 7.319 1.679 2.361 4.155 2.966 4.26 2.991a.413.413 0 0 0 .189 0c.104-.025 2.58-.63 4.259-2.991 1.68-2.365 1.025-7.117.997-7.319Zm-2.157 2.774-3.377 3.29a.407.407 0 0 1-.57 0L6.658 9.71a.387.387 0 0 1 0-.555l.415-.404a.41.41 0 0 1 .569 0l1.389 1.353 2.678-2.608a.408.408 0 0 1 .57 0l.414.404a.385.385 0 0 1 0 .554Z",
                    fill: "#8F88A8"
                })))
            };

            function history_extends() {
                return (history_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a)({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
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
                    }, e), r || (r = c.createElement("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                    })), o || (o = c.createElement("path", {
                        d: "M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
                    })))
                },
                x = a(4595),
                v = a(6428),
                b = a(40400),
                _ = a(39398);
            let w = (0, f.ZP)(e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, l.jsx)(h.Z, { ...a,
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
                    lastGame: a,
                    showHistory: n = !0,
                    showAuto: r = !1,
                    isAuto: o = !1,
                    setIsAuto: u,
                    className: f,
                    showInfo: h = !0,
                    sideButtonType: g = "default",
                    maxProfit: C
                } = e, j = (0, m.I0)(), L = (0, v.Z)(), Z = (0, m.v9)(e => e.auth.isAuthenticated), B = (0, c.useMemo)(() => L.width > 992 && L.width <= 1400, [L]);
                return (0, l.jsxs)(y.Z, {
                    display: "flex",
                    gap: "1em",
                    justifyContent: "space-between",
                    className: f,
                    width: "100%",
                    "data-sentry-element": "Box",
                    "data-sentry-component": "BetHeader",
                    "data-sentry-source-file": "BetHeader.tsx",
                    children: [(0, l.jsxs)(y.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        className: i()("gameBetTabs"),
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "BetHeader.tsx",
                        children: [(0, l.jsx)(x.Z, {
                            variant: "tab",
                            isActive: !o,
                            onClick: () => u && u(!1),
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "BetHeader.tsx",
                            children: "Manual"
                        }), r && (0, l.jsx)(x.Z, {
                            variant: "tab",
                            isActive: o,
                            onClick: () => u && u(!0),
                            children: "Auto"
                        })]
                    }), (0, l.jsxs)(y.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        className: i()("gameBetTabs"),
                        gap: "1em",
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "BetHeader.tsx",
                        children: [h && (0, l.jsx)(x.Z, {
                            onClick: () => j({
                                type: s.hj,
                                payload: (0, d.Z)(t)
                            }),
                            variant: "compact" === g ? "betOptionCompact" : "betOption",
                            children: (0, l.jsx)(p.Z, {
                                style: {
                                    height: ".75em"
                                }
                            })
                        }), !!a && (0, l.jsx)(x.Z, {
                            onClick: () => j({
                                type: s.LE,
                                payload: { ...a,
                                    gameName: t
                                }
                            }),
                            variant: "compact" === g ? "betOptionCompact" : "betOption",
                            children: B ? (0, l.jsx)(shield, {}) : "Fairness"
                        }), n && Z && (0, l.jsx)(x.Z, {
                            onClick: () => j({
                                type: s.bN,
                                payload: {
                                    gameType: t
                                }
                            }),
                            variant: "compact" === g ? "betOptionCompact" : "betOption",
                            children: B ? (0, l.jsx)(icons_history, {
                                style: {
                                    transform: "scale(0.8)"
                                }
                            }) : "History"
                        }), C && (0, l.jsx)(w, {
                            title: (0, l.jsx)("p", {
                                style: {
                                    fontSize: "12px"
                                },
                                children: C ? "F$ ".concat((0, _.Z)((0, b.Z)(C)), " Max Profit") : "Loading.."
                            }),
                            children: (0, l.jsx)(x.Z, {
                                variant: "compact" === g ? "betOptionCompact" : "betOption",
                                children: B ? "Profit" : "Max profit"
                            })
                        })]
                    })]
                })
            }
        },
        20875: function(e, t, a) {
            "use strict";
            var n = a(85893),
                r = a(62961),
                o = a(67294),
                l = a(2664),
                s = a(98216),
                u = a(35328),
                i = a(7458);
            t.Z = e => {
                let {
                    className: t,
                    value: a,
                    onChange: c,
                    min: m,
                    max: d,
                    showInfo: y,
                    gameName: f,
                    defaultValue: h,
                    ...g
                } = e, p = (0, l.I0)(), x = (0, l.v9)(e => e.auth.user), v = (0, o.useMemo)(() => Math.floor((null == x ? void 0 : x.wallet) + ((null == x ? void 0 : x.bonusWallet) || 0)), [x]), b = m || .001, _ = d || v, calculateBetAmount = e => {
                    if (!a) return a;
                    switch (e) {
                        case "1/2":
                            return Math.max(Math.floor(a / 2), b);
                        case "2x":
                            return Math.min(Math.max(2 * a, 0), Math.min(_, v));
                        case "max":
                            return Math.min(Math.max(v, 0), _);
                        default:
                            return a
                    }
                }, w = (0, o.useCallback)(() => {
                    void 0 !== h && "".concat(a) === "".concat(h) && c("")
                }, [h, a]), C = (0, o.useCallback)(() => {
                    void 0 !== h && "" === a && c(h)
                }, [h, a]);
                return (0, n.jsx)(u.Z, {
                    label: "Bet amount",
                    variant: "secondary",
                    toggleButtonsOnFocus: !0,
                    isBet: !0,
                    patterns: [{
                        label: "1/2",
                        onClick: () => a && c(calculateBetAmount("1/2"))
                    }, {
                        label: "2x",
                        onClick: () => a && c(calculateBetAmount("2x"))
                    }, ...v ? [{
                        label: "Max",
                        onClick: () => c(calculateBetAmount("max"))
                    }] : [], ...y && f ? [{
                        label: "?",
                        onClick: () => p({
                            type: r.hj,
                            payload: (0, s.Z)(f)
                        })
                    }] : []],
                    "data-sentry-element": "FormField",
                    "data-sentry-component": "BetInput",
                    "data-sentry-source-file": "BetInput.tsx",
                    children: (0, n.jsx)(i.Z, {
                        value: a,
                        onChange: c,
                        onFocus: w,
                        onBlur: C,
                        pauseBlurValidation: void 0 !== h && "" === a,
                        min: m,
                        max: Math.min(Math.max(v, 0), _),
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
        26118: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return GameLayout
                }
            });
            var n = a(85893),
                r = a(93967),
                o = a.n(r),
                l = a(26030),
                s = a.n(l),
                u = a(6428);
            let i = {
                left: s().gameLayoutColumnLeft,
                right: s().gameLayoutColumnRight,
                row: s().gameLayoutColumnRow,
                anotherLeft: s().gameLayoutColumnAnotherLeft,
                anotherRight: s().gameLayoutColumnAnotherRight
            };

            function GameLayout(e) {
                let {
                    className: t,
                    children: a,
                    ...r
                } = e;
                return (0, n.jsx)("div", {
                    className: o()(s().gameLayout, t),
                    ...r,
                    "data-sentry-component": "GameLayout",
                    "data-sentry-source-file": "game-layout.tsx",
                    children: a
                })
            }
            GameLayout.Column = function(e) {
                let {
                    type: t,
                    className: a,
                    children: r,
                    customMobileOrder: l = "initial",
                    ...c
                } = e, m = (0, u.Z)();
                return (0, n.jsx)("div", {
                    className: o()(s().gameLayoutColumn, i[t], a),
                    style: {
                        order: m.width < 993 ? l : "initial"
                    },
                    ...c,
                    "data-sentry-component": "Column",
                    "data-sentry-source-file": "game-layout-column.tsx",
                    children: r
                })
            }
        },
        35328: function(e, t, a) {
            "use strict";
            var n = a(85893),
                r = a(93967),
                o = a.n(r),
                l = a(77579),
                s = a(4595),
                u = a(46826),
                i = a.n(u);
            let c = {
                primary: i().formFieldPrimary,
                secondary: i().formFieldSecondary
            };
            t.Z = e => {
                let {
                    className: t,
                    isBet: a,
                    label: r,
                    variant: u = "primary",
                    icon: m,
                    patterns: d,
                    toggleButtonsOnFocus: y,
                    children: f
                } = e;
                return (0, n.jsxs)("div", {
                    className: o()(i().formField, c[u], t),
                    "data-sentry-component": "FormField",
                    "data-sentry-source-file": "FormField.tsx",
                    children: [(0, n.jsx)(l.Z, {
                        element: "p",
                        textType: "labelsRegular",
                        "data-sentry-element": "Text",
                        "data-sentry-source-file": "FormField.tsx",
                        children: r
                    }), (0, n.jsxs)("div", {
                        className: o()("customInputInner", i().formFieldInner),
                        children: [f, (0, n.jsx)("div", {
                            className: o()("customInputInnerButtons", i().formFieldInnerButtons, y && i().formFieldInnerButtonsToggleFocus),
                            style: a ? {
                                right: "16px"
                            } : {},
                            children: d ? d.map((e, t) => (0, n.jsx)(s.Z, {
                                variant: "inputButton",
                                onClick: e.onClick,
                                className: i().innerButton,
                                children: e.label
                            }, t)) : (0, n.jsx)("div", {
                                className: o()(i().inputIcon),
                                children: m
                            })
                        })]
                    })]
                })
            }
        },
        7458: function(e, t, a) {
            "use strict";
            var n = a(85893),
                r = a(58733);
            t.Z = e => {
                let {
                    value: t,
                    onChange: a,
                    precision: o = 2,
                    disableWheel: l = !1,
                    pauseBlurValidation: s,
                    onBlur: u = () => {},
                    ...i
                } = e;
                return (0, n.jsx)(r.Z, {
                    type: "number",
                    value: 0 === t ? "0" : null != t ? t : "",
                    ...i,
                    onChange: e => {
                        "" === e.currentTarget.value ? a("") : "0" === e.currentTarget.value ? a(0) : "0.0" === e.currentTarget.value || "0,0" === e.currentTarget.value ? a("0.0") : a(parseFloat(Number(e.currentTarget.value).toFixed(o)))
                    },
                    onBlur: e => {
                        if (u(e), s) return;
                        let t = parseFloat(Number(e.currentTarget.value).toFixed(o));
                        if (e.currentTarget.min) {
                            let n = Number(e.currentTarget.min);
                            t < n && a(n)
                        }
                        if (e.currentTarget.max) {
                            let n = Number(e.currentTarget.max);
                            t > n && a(n)
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
        76520: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return TowersPage
                }
            });
            var n = a(85893);
            a(67294);
            var r = a(80615),
                o = a(98326);

            function TowersPage() {
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(o.ZP, {
                        "data-sentry-element": "Towers",
                        "data-sentry-source-file": "towers.tsx"
                    })
                })
            }
            TowersPage.getLayout = function(e) {
                return (0, n.jsx)(r.Z, {
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
        }
    },
    function(e) {
        e.O(0, [4885, 205, 4768, 7661, 8326, 9774, 2888, 179], function() {
            return e(e.s = 99238)
        }), _N_E = e.O()
    }
]);