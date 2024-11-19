! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a67ece20-f572-4f44-b7e2-a34d82a6b5c0", e._sentryDebugIdIdentifier = "sentry-dbid-a67ece20-f572-4f44-b7e2-a34d82a6b5c0")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6650], {
        62484: function(e, t, n) {
            "use strict";
            var a, r = n(67294);

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
                return r.createElement("svg", _extends({
                    fill: "#8690bf",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 318.293 318.293",
                    style: {
                        enableBackground: "new 0 0 318.293 318.293"
                    },
                    xmlSpace: "preserve"
                }, e), a || (a = r.createElement("path", {
                    d: "M159.148 0c-52.696 0-95.544 39.326-95.544 87.662h47.736c0-22.007 21.438-39.927 47.808-39.927 26.367 0 47.804 17.92 47.804 39.927v6.929c0 23.39-10.292 34.31-25.915 50.813-20.371 21.531-45.744 48.365-45.744 105.899h47.745c0-38.524 15.144-54.568 32.692-73.12 17.368-18.347 38.96-41.192 38.96-83.592v-6.929C254.689 39.326 211.845 0 159.148 0zM134.475 277.996h49.968v40.297h-49.968z"
                })))
            }
        },
        86436: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return bet_BetHeader
                }
            });
            var a, r, l, o = n(85893),
                s = n(62961),
                u = n(93967),
                i = n.n(u),
                c = n(67294),
                d = n(2664),
                m = n(98216),
                f = n(5616),
                h = n(18413),
                p = n(34768),
                y = n(48999),
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
                    }, e), r || (r = c.createElement("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                    })), l || (l = c.createElement("path", {
                        d: "M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
                    })))
                },
                x = n(4595),
                v = n(6428),
                b = n(40400),
                _ = n(39398);
            let w = (0, h.ZP)(e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, o.jsx)(p.Z, { ...n,
                    classes: {
                        popper: t
                    }
                })
            })({
                ["& .".concat(y.Z.tooltip)]: {
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
                    showAuto: r = !1,
                    isAuto: l = !1,
                    setIsAuto: u,
                    className: h,
                    showInfo: p = !0,
                    sideButtonType: y = "default",
                    maxProfit: j
                } = e, C = (0, d.I0)(), B = (0, v.Z)(), Z = (0, d.v9)(e => e.auth.isAuthenticated), I = (0, c.useMemo)(() => B.width > 992 && B.width <= 1400, [B]);
                return (0, o.jsxs)(f.Z, {
                    display: "flex",
                    gap: "1em",
                    justifyContent: "space-between",
                    className: h,
                    width: "100%",
                    "data-sentry-element": "Box",
                    "data-sentry-component": "BetHeader",
                    "data-sentry-source-file": "BetHeader.tsx",
                    children: [(0, o.jsxs)(f.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        className: i()("gameBetTabs"),
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "BetHeader.tsx",
                        children: [(0, o.jsx)(x.Z, {
                            variant: "tab",
                            isActive: !l,
                            onClick: () => u && u(!1),
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "BetHeader.tsx",
                            children: "Manual"
                        }), r && (0, o.jsx)(x.Z, {
                            variant: "tab",
                            isActive: l,
                            onClick: () => u && u(!0),
                            children: "Auto"
                        })]
                    }), (0, o.jsxs)(f.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        className: i()("gameBetTabs"),
                        gap: "1em",
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "BetHeader.tsx",
                        children: [p && (0, o.jsx)(x.Z, {
                            onClick: () => C({
                                type: s.hj,
                                payload: (0, m.Z)(t)
                            }),
                            variant: "compact" === y ? "betOptionCompact" : "betOption",
                            children: (0, o.jsx)(g.Z, {
                                style: {
                                    height: ".75em"
                                }
                            })
                        }), !!n && (0, o.jsx)(x.Z, {
                            onClick: () => C({
                                type: s.LE,
                                payload: { ...n,
                                    gameName: t
                                }
                            }),
                            variant: "compact" === y ? "betOptionCompact" : "betOption",
                            children: I ? (0, o.jsx)(shield, {}) : "Fairness"
                        }), a && Z && (0, o.jsx)(x.Z, {
                            onClick: () => C({
                                type: s.bN,
                                payload: {
                                    gameType: t
                                }
                            }),
                            variant: "compact" === y ? "betOptionCompact" : "betOption",
                            children: I ? (0, o.jsx)(icons_history, {
                                style: {
                                    transform: "scale(0.8)"
                                }
                            }) : "History"
                        }), j && (0, o.jsx)(w, {
                            title: (0, o.jsx)("p", {
                                style: {
                                    fontSize: "12px"
                                },
                                children: j ? "F$ ".concat((0, _.Z)((0, b.Z)(j)), " Max Profit") : "Loading.."
                            }),
                            children: (0, o.jsx)(x.Z, {
                                variant: "compact" === y ? "betOptionCompact" : "betOption",
                                children: I ? "Profit" : "Max profit"
                            })
                        })]
                    })]
                })
            }
        },
        20875: function(e, t, n) {
            "use strict";
            var a = n(85893),
                r = n(62961),
                l = n(67294),
                o = n(2664),
                s = n(98216),
                u = n(35328),
                i = n(7458);
            t.Z = e => {
                let {
                    className: t,
                    value: n,
                    onChange: c,
                    min: d,
                    max: m,
                    showInfo: f,
                    gameName: h,
                    defaultValue: p,
                    ...y
                } = e, g = (0, o.I0)(), x = (0, o.v9)(e => e.auth.user), v = (0, l.useMemo)(() => Math.floor((null == x ? void 0 : x.wallet) + ((null == x ? void 0 : x.bonusWallet) || 0)), [x]), b = d || .001, _ = m || v, calculateBetAmount = e => {
                    if (!n) return n;
                    switch (e) {
                        case "1/2":
                            return Math.max(Math.floor(n / 2), b);
                        case "2x":
                            return Math.min(Math.max(2 * n, 0), Math.min(_, v));
                        case "max":
                            return Math.min(Math.max(v, 0), _);
                        default:
                            return n
                    }
                }, w = (0, l.useCallback)(() => {
                    void 0 !== p && "".concat(n) === "".concat(p) && c("")
                }, [p, n]), j = (0, l.useCallback)(() => {
                    void 0 !== p && "" === n && c(p)
                }, [p, n]);
                return (0, a.jsx)(u.Z, {
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
                    }] : [], ...f && h ? [{
                        label: "?",
                        onClick: () => g({
                            type: r.hj,
                            payload: (0, s.Z)(h)
                        })
                    }] : []],
                    "data-sentry-element": "FormField",
                    "data-sentry-component": "BetInput",
                    "data-sentry-source-file": "BetInput.tsx",
                    children: (0, a.jsx)(i.Z, {
                        value: n,
                        onChange: c,
                        onFocus: w,
                        onBlur: j,
                        pauseBlurValidation: void 0 !== p && "" === n,
                        min: d,
                        max: Math.min(Math.max(v, 0), _),
                        step: 10,
                        hasCurrencyIcon: !0,
                        disableWheel: !0,
                        ...y,
                        "data-sentry-element": "NumberInput",
                        "data-sentry-source-file": "BetInput.tsx"
                    })
                })
            }
        },
        14290: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return bet_IncreaseInput
                }
            });
            var a, r, l = n(85893),
                o = n(7458),
                s = n(93967),
                u = n.n(s),
                i = n(4595),
                c = n(35328),
                d = n(67294);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var percentage = function(e) {
                    return d.createElement("svg", _extends({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 16,
                        height: 20,
                        fill: "none"
                    }, e), a || (a = d.createElement("g", {
                        clipPath: "url(#percentage_svg__a)",
                        fill: "#818EBB"
                    }, d.createElement("path", {
                        d: "M15.133 4.633a1.252 1.252 0 0 0-1.77-1.77l-12.5 12.5a1.252 1.252 0 0 0 1.77 1.77l12.5-12.5Z"
                    }), d.createElement("g", {
                        opacity: .5
                    }, d.createElement("path", {
                        d: "M4.768 3.232a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536ZM14.768 13.232a2.5 2.5 0 1 1-3.537 3.536 2.5 2.5 0 0 1 3.537-3.536Z"
                    })))), r || (r = d.createElement("defs", null, d.createElement("clipPath", {
                        id: "percentage_svg__a"
                    }, d.createElement("path", {
                        fill: "#fff",
                        transform: "translate(.5)",
                        d: "M0 0h15v20H0z"
                    })))))
                },
                bet_IncreaseInput = e => {
                    let {
                        label: t,
                        value: n,
                        onChange: a,
                        disabled: r,
                        ...s
                    } = e;
                    return (0, l.jsxs)(c.Z, {
                        label: t,
                        variant: "secondary",
                        icon: (0, l.jsx)(percentage, {}),
                        "data-sentry-element": "FormField",
                        "data-sentry-component": "IncreaseInput",
                        "data-sentry-source-file": "IncreaseInput.tsx",
                        children: [(0, l.jsxs)("div", {
                            className: "customInputInnerButtonsLeft",
                            children: [(0, l.jsx)(i.Z, {
                                variant: "autoReset",
                                className: null === n ? "clicked" : "unclicked",
                                onClick: () => a(null),
                                disabled: r,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "IncreaseInput.tsx",
                                children: "Reset"
                            }), (0, l.jsx)(i.Z, {
                                variant: "autoIncrease",
                                className: u()("customInputInnerButtonsLeftIncrease", null === n ? "unclicked" : "clicked"),
                                onClick: () => a(0),
                                disabled: r,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "IncreaseInput.tsx",
                                children: "Increase By"
                            })]
                        }), (0, l.jsx)(o.Z, {
                            value: n,
                            onChange: a,
                            min: 0,
                            step: 10,
                            disabled: null === n || r,
                            disableWheel: !0,
                            ...s,
                            "data-sentry-element": "NumberInput",
                            "data-sentry-source-file": "IncreaseInput.tsx"
                        })]
                    })
                }
        },
        40996: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return button_SoundButton
                }
            });
            var a, r, l = n(85893),
                o = n(5616),
                s = n(67294);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var sound_v2 = function(e) {
                return s.createElement("svg", _extends({
                    width: 20,
                    height: 16,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), a || (a = s.createElement("path", {
                    d: "M10.834 1.522c0-.85-.962-1.342-1.65-.846L5.07 3.637c-.177.128-.39.196-.608.196H3.125A2.292 2.292 0 0 0 .833 6.125v3.75a2.292 2.292 0 0 0 2.292 2.292h1.338c.218 0 .431.068.608.196l4.112 2.96c.69.497 1.65.004 1.65-.845V1.522ZM15.598 1.518a.625.625 0 0 1 .884 0A9.14 9.14 0 0 1 19.167 8a9.14 9.14 0 0 1-2.685 6.482.625.625 0 1 1-.884-.884A7.89 7.89 0 0 0 17.917 8a7.89 7.89 0 0 0-2.319-5.598.625.625 0 0 1 0-.884ZM13.683 4.317a.625.625 0 0 0-.884.884 3.944 3.944 0 0 1 1.16 2.8 3.944 3.944 0 0 1-1.16 2.798.625.625 0 1 0 .884.884A5.194 5.194 0 0 0 15.209 8a5.194 5.194 0 0 0-1.526-3.683Z",
                    fill: "#818EBB"
                })))
            };

            function sound_off_extends() {
                return (sound_off_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var sound_off = function(e) {
                    return s.createElement("svg", sound_off_extends({
                        width: 20,
                        height: 16,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), r || (r = s.createElement("path", {
                        d: "M10.834 1.522c0-.85-.962-1.342-1.65-.846L5.07 3.637c-.177.128-.39.196-.608.196H3.125A2.292 2.292 0 0 0 .833 6.125v3.75a2.292 2.292 0 0 0 2.292 2.292h1.338c.218 0 .431.068.608.196l4.112 2.96c.69.497 1.65.004 1.65-.845V1.522Z",
                        stroke: "#818EBB"
                    })))
                },
                button_SoundButton = e => {
                    let {
                        className: t,
                        isActive: n,
                        setActive: a
                    } = e;
                    return (0, l.jsx)(o.Z, {
                        className: t,
                        onClick: () => a(!n),
                        sx: {
                            display: "flex",
                            padding: "6px 12px",
                            borderRadius: "8px",
                            backgroundColor: "var(--color-dark-90)",
                            cursor: "pointer",
                            alignItems: "center"
                        },
                        "data-sentry-element": "Box",
                        "data-sentry-component": "SoundButton",
                        "data-sentry-source-file": "SoundButton.tsx",
                        children: n ? (0, l.jsx)(sound_v2, {}) : (0, l.jsx)(sound_off, {})
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
                r = n(93967),
                l = n.n(r),
                o = n(26030),
                s = n.n(o),
                u = n(6428);
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
                    children: n,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    className: l()(s().gameLayout, t),
                    ...r,
                    "data-sentry-component": "GameLayout",
                    "data-sentry-source-file": "game-layout.tsx",
                    children: n
                })
            }
            GameLayout.Column = function(e) {
                let {
                    type: t,
                    className: n,
                    children: r,
                    customMobileOrder: o = "initial",
                    ...c
                } = e, d = (0, u.Z)();
                return (0, a.jsx)("div", {
                    className: l()(s().gameLayoutColumn, i[t], n),
                    style: {
                        order: d.width < 993 ? o : "initial"
                    },
                    ...c,
                    "data-sentry-component": "Column",
                    "data-sentry-source-file": "game-layout-column.tsx",
                    children: r
                })
            }
        },
        35328: function(e, t, n) {
            "use strict";
            var a = n(85893),
                r = n(93967),
                l = n.n(r),
                o = n(77579),
                s = n(4595),
                u = n(46826),
                i = n.n(u);
            let c = {
                primary: i().formFieldPrimary,
                secondary: i().formFieldSecondary
            };
            t.Z = e => {
                let {
                    className: t,
                    isBet: n,
                    label: r,
                    variant: u = "primary",
                    icon: d,
                    patterns: m,
                    toggleButtonsOnFocus: f,
                    children: h
                } = e;
                return (0, a.jsxs)("div", {
                    className: l()(i().formField, c[u], t),
                    "data-sentry-component": "FormField",
                    "data-sentry-source-file": "FormField.tsx",
                    children: [(0, a.jsx)(o.Z, {
                        element: "p",
                        textType: "labelsRegular",
                        "data-sentry-element": "Text",
                        "data-sentry-source-file": "FormField.tsx",
                        children: r
                    }), (0, a.jsxs)("div", {
                        className: l()("customInputInner", i().formFieldInner),
                        children: [h, (0, a.jsx)("div", {
                            className: l()("customInputInnerButtons", i().formFieldInnerButtons, f && i().formFieldInnerButtonsToggleFocus),
                            style: n ? {
                                right: "16px"
                            } : {},
                            children: m ? m.map((e, t) => (0, a.jsx)(s.Z, {
                                variant: "inputButton",
                                onClick: e.onClick,
                                className: i().innerButton,
                                children: e.label
                            }, t)) : (0, a.jsx)("div", {
                                className: l()(i().inputIcon),
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
                r = n(58733);
            t.Z = e => {
                let {
                    value: t,
                    onChange: n,
                    precision: l = 2,
                    disableWheel: o = !1,
                    pauseBlurValidation: s,
                    onBlur: u = () => {},
                    ...i
                } = e;
                return (0, a.jsx)(r.Z, {
                    type: "number",
                    value: 0 === t ? "0" : null != t ? t : "",
                    ...i,
                    onChange: e => {
                        "" === e.currentTarget.value ? n("") : "0" === e.currentTarget.value ? n(0) : "0.0" === e.currentTarget.value || "0,0" === e.currentTarget.value ? n("0.0") : n(parseFloat(Number(e.currentTarget.value).toFixed(l)))
                    },
                    onBlur: e => {
                        if (u(e), s) return;
                        let t = parseFloat(Number(e.currentTarget.value).toFixed(l));
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
        50931: function(e, t, n) {
            "use strict";
            let delay = async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1200;
                return new Promise(t => setTimeout(t, e))
            };
            t.ZP = delay
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
    }
]);