! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9d18f604-d1af-4c11-80c4-e080328b0ff6", e._sentryDebugIdIdentifier = "sentry-dbid-9d18f604-d1af-4c11-80c4-e080328b0ff6")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9462], {
        98216: function(e, t, a) {
            "use strict";
            var s = a(14142);
            t.Z = s.Z
        },
        1490: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/cups", function() {
                return a(55970)
            }])
        },
        20875: function(e, t, a) {
            "use strict";
            var s = a(85893),
                n = a(62961),
                o = a(67294),
                l = a(2664),
                r = a(98216),
                u = a(35328),
                i = a(7458);
            t.Z = e => {
                let {
                    className: t,
                    value: a,
                    onChange: c,
                    min: m,
                    max: d,
                    showInfo: p,
                    gameName: y,
                    defaultValue: _,
                    ...x
                } = e, f = (0, l.I0)(), g = (0, l.v9)(e => e.auth.user), h = (0, o.useMemo)(() => Math.floor((null == g ? void 0 : g.wallet) + ((null == g ? void 0 : g.bonusWallet) || 0)), [g]), v = m || .001, C = d || h, calculateBetAmount = e => {
                    if (!a) return a;
                    switch (e) {
                        case "1/2":
                            return Math.max(Math.floor(a / 2), v);
                        case "2x":
                            return Math.min(Math.max(2 * a, 0), Math.min(C, h));
                        case "max":
                            return Math.min(Math.max(h, 0), C);
                        default:
                            return a
                    }
                }, j = (0, o.useCallback)(() => {
                    void 0 !== _ && "".concat(a) === "".concat(_) && c("")
                }, [_, a]), I = (0, o.useCallback)(() => {
                    void 0 !== _ && "" === a && c(_)
                }, [_, a]);
                return (0, s.jsx)(u.Z, {
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
                    }, ...h ? [{
                        label: "Max",
                        onClick: () => c(calculateBetAmount("max"))
                    }] : [], ...p && y ? [{
                        label: "?",
                        onClick: () => f({
                            type: n.hj,
                            payload: (0, r.Z)(y)
                        })
                    }] : []],
                    "data-sentry-element": "FormField",
                    "data-sentry-component": "BetInput",
                    "data-sentry-source-file": "BetInput.tsx",
                    children: (0, s.jsx)(i.Z, {
                        value: a,
                        onChange: c,
                        onFocus: j,
                        onBlur: I,
                        pauseBlurValidation: void 0 !== _ && "" === a,
                        min: m,
                        max: Math.min(Math.max(h, 0), C),
                        step: 10,
                        hasCurrencyIcon: !0,
                        disableWheel: !0,
                        ...x,
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
            var s = a(85893),
                n = a(93967),
                o = a.n(n),
                l = a(26030),
                r = a.n(l),
                u = a(6428);
            let i = {
                left: r().gameLayoutColumnLeft,
                right: r().gameLayoutColumnRight,
                row: r().gameLayoutColumnRow,
                anotherLeft: r().gameLayoutColumnAnotherLeft,
                anotherRight: r().gameLayoutColumnAnotherRight
            };

            function GameLayout(e) {
                let {
                    className: t,
                    children: a,
                    ...n
                } = e;
                return (0, s.jsx)("div", {
                    className: o()(r().gameLayout, t),
                    ...n,
                    "data-sentry-component": "GameLayout",
                    "data-sentry-source-file": "game-layout.tsx",
                    children: a
                })
            }
            GameLayout.Column = function(e) {
                let {
                    type: t,
                    className: a,
                    children: n,
                    customMobileOrder: l = "initial",
                    ...c
                } = e, m = (0, u.Z)();
                return (0, s.jsx)("div", {
                    className: o()(r().gameLayoutColumn, i[t], a),
                    style: {
                        order: m.width < 993 ? l : "initial"
                    },
                    ...c,
                    "data-sentry-component": "Column",
                    "data-sentry-source-file": "game-layout-column.tsx",
                    children: n
                })
            }
        },
        35328: function(e, t, a) {
            "use strict";
            var s = a(85893),
                n = a(93967),
                o = a.n(n),
                l = a(77579),
                r = a(4595),
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
                    label: n,
                    variant: u = "primary",
                    icon: m,
                    patterns: d,
                    toggleButtonsOnFocus: p,
                    children: y
                } = e;
                return (0, s.jsxs)("div", {
                    className: o()(i().formField, c[u], t),
                    "data-sentry-component": "FormField",
                    "data-sentry-source-file": "FormField.tsx",
                    children: [(0, s.jsx)(l.Z, {
                        element: "p",
                        textType: "labelsRegular",
                        "data-sentry-element": "Text",
                        "data-sentry-source-file": "FormField.tsx",
                        children: n
                    }), (0, s.jsxs)("div", {
                        className: o()("customInputInner", i().formFieldInner),
                        children: [y, (0, s.jsx)("div", {
                            className: o()("customInputInnerButtons", i().formFieldInnerButtons, p && i().formFieldInnerButtonsToggleFocus),
                            style: a ? {
                                right: "16px"
                            } : {},
                            children: d ? d.map((e, t) => (0, s.jsx)(r.Z, {
                                variant: "inputButton",
                                onClick: e.onClick,
                                className: i().innerButton,
                                children: e.label
                            }, t)) : (0, s.jsx)("div", {
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
            var s = a(85893),
                n = a(58733);
            t.Z = e => {
                let {
                    value: t,
                    onChange: a,
                    precision: o = 2,
                    disableWheel: l = !1,
                    pauseBlurValidation: r,
                    onBlur: u = () => {},
                    ...i
                } = e;
                return (0, s.jsx)(n.Z, {
                    type: "number",
                    value: 0 === t ? "0" : null != t ? t : "",
                    ...i,
                    onChange: e => {
                        "" === e.currentTarget.value ? a("") : "0" === e.currentTarget.value ? a(0) : "0.0" === e.currentTarget.value || "0,0" === e.currentTarget.value ? a("0.0") : a(parseFloat(Number(e.currentTarget.value).toFixed(o)))
                    },
                    onBlur: e => {
                        if (u(e), r) return;
                        let t = parseFloat(Number(e.currentTarget.value).toFixed(o));
                        if (e.currentTarget.min) {
                            let s = Number(e.currentTarget.min);
                            t < s && a(s)
                        }
                        if (e.currentTarget.max) {
                            let s = Number(e.currentTarget.max);
                            t > s && a(s)
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
        55970: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return CupsPage
                }
            });
            var s = a(85893),
                n = a(67294),
                o = a(80615),
                l = a(65425),
                r = a(86299),
                u = a.n(r),
                i = a(2664),
                c = a(26118),
                m = a(6428),
                d = a(93967),
                p = a.n(d),
                y = a(83198),
                _ = a(49089),
                x = a(86501),
                f = a(20875),
                g = a(4595),
                h = a(77579),
                v = a(74344);

            function CupsBet(e) {
                let {
                    className: t,
                    user: a,
                    ...o
                } = e;
                (0, i.I0)();
                let [l, r] = (0, n.useState)("red"), [c, m] = (0, n.useState)(2), [d, C] = (0, n.useState)("10"), {
                    fflags: j
                } = (0, i.v9)(e => e.auth), onColorChange = e => {
                    r(e.currentTarget.value)
                }, onCreationError = e => x.Am.error(e);
                return (0, n.useEffect)(() => (v.ki.on("game-creation-error", onCreationError), () => {
                    v.ki.off("game-creation-error", onCreationError)
                }), []), (0, s.jsxs)("div", {
                    className: p()("gameBlock gameBet", u().cupsBet, t),
                    ...o,
                    "data-sentry-component": "CupsBet",
                    "data-sentry-source-file": "cups-bet.tsx",
                    children: [(0, s.jsx)(f.Z, {
                        value: d,
                        defaultValue: 10,
                        onChange: C,
                        hasCurrencyIcon: !0,
                        showInfo: !0,
                        gameName: "cups",
                        min: 10,
                        "data-sentry-element": "BetInput",
                        "data-sentry-source-file": "cups-bet.tsx"
                    }), (0, s.jsxs)("div", {
                        className: p()("customInput", "gameBetInput"),
                        children: [(0, s.jsx)(h.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: p()("customInputLabel"),
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "cups-bet.tsx",
                            children: "Bet on color"
                        }), (0, s.jsxs)("div", {
                            className: p()("customInputColorPicker"),
                            children: [c > 1 && (0, s.jsx)("label", {
                                className: p()("customInputColorPickerItem"),
                                style: {
                                    "--color": "#F03276"
                                },
                                children: (0, s.jsx)("input", {
                                    type: "radio",
                                    onChange: onColorChange,
                                    checked: "red" === l,
                                    value: "red",
                                    name: "colorPicker"
                                })
                            }), c >= 2 && (0, s.jsx)("label", {
                                className: p()("customInputColorPickerItem"),
                                style: {
                                    "--color": "#3656FF"
                                },
                                children: (0, s.jsx)("input", {
                                    type: "radio",
                                    onChange: onColorChange,
                                    checked: "blue" === l,
                                    value: "blue",
                                    name: "colorPicker"
                                })
                            }), c >= 3 && (0, s.jsx)("label", {
                                className: p()("customInputColorPickerItem"),
                                style: {
                                    "--color": "#AF3BD8"
                                },
                                children: (0, s.jsx)("input", {
                                    type: "radio",
                                    onChange: onColorChange,
                                    checked: "green" === l,
                                    value: "green",
                                    name: "colorPicker"
                                })
                            }), c >= 4 && (0, s.jsx)("label", {
                                className: p()("customInputColorPickerItem"),
                                style: {
                                    "--color": "#FCB122"
                                },
                                children: (0, s.jsx)("input", {
                                    type: "radio",
                                    onChange: onColorChange,
                                    checked: "yellow" === l,
                                    value: "yellow",
                                    name: "colorPicker"
                                })
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: p()("customInput", "gameBetInput"),
                        children: [(0, s.jsx)(h.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: p()("customInputLabel"),
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "cups-bet.tsx",
                            children: "Amount of cups"
                        }), (0, s.jsxs)("div", {
                            className: p()("customInputOptions"),
                            children: [(0, s.jsx)(g.Z, {
                                variant: "betOption",
                                isActive: 2 == c,
                                onClick: () => m(2),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "cups-bet.tsx",
                                children: "2"
                            }), (0, s.jsx)(g.Z, {
                                variant: "betOption",
                                isActive: 3 == c,
                                onClick: () => m(3),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "cups-bet.tsx",
                                children: "3"
                            }), (0, s.jsx)(g.Z, {
                                variant: "betOption",
                                isActive: 4 == c,
                                onClick: () => m(4),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "cups-bet.tsx",
                                children: "4"
                            })]
                        })]
                    }), (0, s.jsx)(g.Z, {
                        variant: "primary",
                        onClick: () => {
                            j.fe_ga_enabled && _.ZP.event({
                                category: "Cups game",
                                action: "Created cups game",
                                value: -1
                            }), j.fe_mixpanel_enabled && y.Z.track("CREATED_CUPS_GAME"), v.ki.emit("create-new-game", {
                                numberOfPlayers: c,
                                color: l,
                                betAmount: parseFloat(d),
                                privateGame: !1,
                                competitorCost: 0
                            })
                        },
                        className: p()("gameBetSubmit", "mobileBottomMargin"),
                        "data-sentry-element": "Button",
                        "data-sentry-source-file": "cups-bet.tsx",
                        children: "Start new game"
                    })]
                })
            }
            var C = a(73350),
                j = a(76743),
                I = a(9526),
                b = a(791),
                w = a(64325),
                Z = a(66713),
                N = a(2181),
                G = a(40400),
                A = a(39398),
                P = a(10990);

            function getRandomInt(e, t, a) {
                e = Math.ceil(e);
                let s = Math.floor(Math.random() * ((t = Math.floor(t)) - e + 1)) + e;
                do s = Math.floor(Math.random() * (t - e + 1)) + e; while (s === a);
                return s
            }
            let k = ["red", "blue", "purple", "yellow"];

            function CupsAnimation(e) {
                let {
                    selectedColor: t,
                    cupsAmount: a = 2,
                    isAnimating: o = !1,
                    onEnd: l
                } = e, [r, i] = (0, n.useState)([]), [c, m] = (0, n.useState)(!1), [d, y] = (0, n.useState)(10), _ = (0, n.useRef)([]), x = (0, n.useRef)(null);
                return (0, n.useEffect)(() => {
                    i(k.slice(0, a < 2 ? 2 : a)), m(!1), _.current.map(e => {
                        e && P.ZP.set(e, {
                            x: 0
                        })
                    })
                }, [a, t]), (0, n.useEffect)(() => {
                    if (!1 === o || "unset" === t) return;
                    if (0 === d) {
                        m(!0), null == l || l();
                        return
                    }
                    let e = x.current.offsetWidth,
                        a = window.setTimeout(() => {
                            i(t => {
                                let a = [...t],
                                    s = a.length - 1,
                                    n = getRandomInt(0, s),
                                    o = getRandomInt(0, s, n),
                                    l = a[n],
                                    r = a[o];
                                a[o] = l, a[n] = r;
                                let u = _.current[k.indexOf(l)],
                                    i = _.current[k.indexOf(r)],
                                    c = Math.abs(n - o) * (1 / a.length) * e;
                                c.toFixed(2), P.ZP.ticker.lagSmoothing(!1);
                                let m = P.ZP.getProperty(u, "x"),
                                    d = P.ZP.getProperty(i, "x"),
                                    p = m + (n > o ? -c : c),
                                    y = d + (o > n ? -c : c);
                                return P.ZP.to(u, {
                                    x: p,
                                    duration: .39
                                }), P.ZP.to(i, {
                                    x: y,
                                    duration: .39
                                }), a
                            }), y(d - 1)
                        }, 400);
                    return () => {
                        window.clearTimeout(a)
                    }
                }, [d, o, l]), (0, n.useLayoutEffect)(() => {
                    !1 === o && (m(!1), y(10))
                }, [o]), (0, s.jsx)("div", {
                    ref: x,
                    className: u().cupsGameItemAnimation,
                    "data-sentry-component": "CupsAnimation",
                    "data-sentry-source-file": "cups-animation.tsx",
                    children: k.map((e, a) => {
                        if (!(a > 1) || !(r.length < a + 1)) return (0, s.jsx)("div", {
                            ref: e => _.current[a] = e,
                            className: p()(u().cupsGameItemAnimationItem, u().HolidayEvent, u()[e], t === e && c && u().isOpened)
                        }, a)
                    })
                })
            }
            var B = a(62961),
                R = a(83253),
                T = a.n(R),
                L = a(92581),
                F = a.n(L),
                M = a(87116),
                S = a(8210),
                E = a.n(S),
                O = a(63138);

            function ModelCupWinner(e) {
                let {
                    className: t,
                    winningCup: a,
                    onClose: o,
                    amount: l
                } = e, [r, u] = (0, n.useState)(!1), i = (0, n.useMemo)(() => (0, M.P)("margin"), ["margin"]);

                function closeModal() {
                    u(!1), o && o(), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }
                return (0, n.useEffect)(() => (u(!0), setTimeout(() => {
                    document.body.style.overflow = "hidden", document.body.style.paddingRight = i.gap + "px"
                }, 0), () => {
                    closeModal()
                }), []), (0, s.jsxs)(T(), {
                    isOpen: r,
                    onRequestClose: closeModal,
                    contentLabel: "Withdraw modal",
                    className: p()(E().defaultModal, F().modalWinnerCups, t),
                    closeTimeoutMS: 200,
                    "data-sentry-element": "Modal",
                    "data-sentry-component": "ModelCupWinner",
                    "data-sentry-source-file": "WinnerModal.tsx",
                    children: [(0, s.jsx)("br", {}), (0, s.jsx)("br", {}), (0, s.jsx)(b.Z, {
                        element: "h3",
                        className: p()(E().modalCasesAmountTitle, F().titleBox),
                        "data-sentry-element": "Heading",
                        "data-sentry-source-file": "WinnerModal.tsx",
                        children: "You Won!"
                    }), (0, s.jsx)(g.Z, {
                        onClick: closeModal,
                        className: E().defaultModalClose,
                        "aria-label": "Close",
                        "data-sentry-element": "Button",
                        "data-sentry-source-file": "WinnerModal.tsx"
                    }), (0, s.jsx)("br", {}), (0, s.jsx)("p", {
                        children: "Congratulations for winning."
                    }), (0, s.jsx)("p", {
                        children: "The won value has been credited to your balance!"
                    }), (0, s.jsxs)("div", {
                        className: F().animationSection,
                        children: [(0, s.jsx)(O.Z, {
                            color: null != a ? a : "",
                            "data-sentry-element": "ShadowByColor",
                            "data-sentry-source-file": "WinnerModal.tsx"
                        }), (0, s.jsxs)("div", {
                            className: F().cupSection,
                            children: [(0, s.jsx)("div", {
                                className: p()(F().cup, F()["".concat(a, "One")])
                            }), (0, s.jsx)("div", {
                                className: F().cupSectionBall
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: F().amountCollected,
                        children: [(0, s.jsx)(h.Z, {
                            element: "span",
                            className: F().amountText,
                            textType: "regular14",
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "WinnerModal.tsx",
                            children: l
                        }), (0, s.jsx)(Z.Z, {
                            "data-sentry-element": "CurrencyIcon",
                            "data-sentry-source-file": "WinnerModal.tsx"
                        })]
                    })]
                })
            }

            function CupsGameItem(e) {
                let {
                    className: t,
                    user: a,
                    ...o
                } = e, [l, r] = (0, n.useState)(null), [c, m] = (0, n.useState)(null), [d, f] = (0, n.useState)([]), {
                    fflags: P
                } = (0, i.v9)(e => e.auth), [k, R] = (0, n.useState)(!1), T = (0, i.I0)(), joinGame = (e, t) => {
                    P.fe_ga_enabled && _.ZP.event({
                        category: "Cups game",
                        action: "Joined cups game",
                        value: -1
                    }), P.fe_mixpanel_enabled && y.Z.track("JOINED_CUPS_GAME"), v.ki.emit("join-game", {
                        gameId: e,
                        color: t
                    })
                }, eosCommitted = e => {
                    let {
                        _id: t,
                        blockNumber: a
                    } = e;
                    f(e => null == e ? void 0 : e.map(e => e._id === t ? { ...e,
                        committedEosBlock: a
                    } : e))
                }, gameJoined = e => {
                    let {
                        _id: t,
                        newPlayer: a
                    } = e;
                    f(e => null == e ? void 0 : e.map(e => e._id === t ? { ...e,
                        players: [...e.players, a]
                    } : e))
                }, addGame = e => {
                    f(t => t ? [e, ...t] : [])
                };
                (0, n.useEffect)(() => {
                    f(e => {
                        let t = [];
                        return e.forEach(e => {
                            e._creator === (null == a ? void 0 : a.robloxId) && t.push(e)
                        }), e.forEach(e => {
                            e._creator !== (null == a ? void 0 : a.robloxId) && t.push(e)
                        }), t
                    })
                }, [null == d ? void 0 : d.length]), (0, n.useEffect)(() => {
                    a && r(a)
                }, [a]);
                let gameRolled = e => {
                    f(t => null == t ? void 0 : t.map(t => t._id === e._id ? { ...t,
                        ...e,
                        status: 3
                    } : t)), setTimeout(() => {
                        f(t => null == t ? void 0 : t.map(t => t._id === e._id ? (r(e => {
                            if (e && t.players.length) {
                                for (let a of t.players)
                                    if (a._id === e.robloxId && a.color === t.winningCup) {
                                        m({
                                            amount: (0, A.Z)((0, G.Z)(t.betAmount * t.players.length)),
                                            color: t.winningCup
                                        });
                                        break
                                    }
                            }
                            return e
                        }), { ...t,
                            ...e,
                            ended: !0
                        }) : t)), setTimeout(() => {
                            f(t => null == t ? void 0 : t.filter(t => t._id !== e._id))
                        }, 2e3)
                    }, 5e3)
                };
                return (0, n.useEffect)(() => (v.ki.on("new-cups-game", addGame), v.ki.on("game-rolled", gameRolled), v.ki.on("game-joined", gameJoined), v.ki.on("eos-commit", eosCommitted), () => {
                    v.ki.off("new-cups-game", addGame), v.ki.off("game-rolled", gameRolled), v.ki.off("game-joined", gameJoined), v.ki.off("eos-commit", eosCommitted)
                }), []), (0, n.useEffect)(() => {
                    let fetchData = async () => {
                        try {
                            R(!0);
                            let e = await (0, N.zeD)();
                            R(!1), f(e)
                        } catch (e) {
                            x.Am.error("Failed to load active cups games, please refresh the page and try again!")
                        }
                    };
                    fetchData()
                }, []), (0, s.jsx)(s.Fragment, {
                    children: k ? [, , ].fill(0).map((e, t) => (0, s.jsx)(I.Z, {
                        style: {
                            marginBottom: "1rem",
                            borderRadius: "12px"
                        },
                        variant: "rectangular",
                        width: "100%",
                        height: 220
                    }, t)) : (0, s.jsxs)(s.Fragment, {
                        children: [c && (0, s.jsx)(ModelCupWinner, {
                            onClose: () => m(null),
                            winningCup: c.color,
                            amount: c.amount
                        }), (0, s.jsx)(C.Z, {
                            className: "cups-list",
                            children: null == d ? void 0 : d.map(e => {
                                var a, n, l, r, i, c, m, d, y, _;
                                return (0, s.jsx)(j.Z, {
                                    timeout: 500,
                                    classNames: "item",
                                    children: (0, s.jsxs)("div", {
                                        className: p()(u().cupsGameItem, t),
                                        style: e.ended ? {
                                            opacity: .4,
                                            transition: "all 0.3s ease",
                                            position: "relative"
                                        } : {
                                            position: "relative"
                                        },
                                        ...o,
                                        children: [(0, s.jsx)(g.Z, {
                                            onClick: () => T({
                                                type: B.LE,
                                                payload: { ...e,
                                                    gameName: "cups"
                                                }
                                            }),
                                            variant: "betOption",
                                            style: {
                                                position: "absolute",
                                                top: "1em",
                                                right: "1.5em",
                                                zIndex: "99"
                                            },
                                            children: "Fairness"
                                        }), (0, s.jsxs)("div", {
                                            className: u().cupsGameItemPlayers,
                                            children: [e.players.find(e => "red" === e.color) ? (0, s.jsxs)("div", {
                                                className: u().cupsGameItemPlayersRow,
                                                style: {
                                                    "--row-color": "#F03276"
                                                },
                                                children: [(0, s.jsx)(w.Z, {
                                                    className: u().cupsGameItemPlayersRowAvatar,
                                                    userId: null === (a = e.players.find(e => "red" === e.color)) || void 0 === a ? void 0 : a._id,
                                                    isPrivateMode: (null === (n = e.players.find(e => "red" === e.color)) || void 0 === n ? void 0 : n.username.toLowerCase()) === "anonymous",
                                                    imageAlt: "User avatar",
                                                    boxSize: "medium"
                                                }), (0, s.jsx)(h.Z, {
                                                    className: u().cupsGameItemPlayersRowText,
                                                    element: "p",
                                                    textType: "regular14",
                                                    children: null === (l = e.players.find(e => "red" === e.color)) || void 0 === l ? void 0 : l.username
                                                })]
                                            }) : (0, s.jsxs)("div", {
                                                className: u().cupsGameItemPlayersRow,
                                                style: {
                                                    "--row-color": "#F03276"
                                                },
                                                children: [(0, s.jsx)(w.Z, {
                                                    className: u().cupsGameItemPlayersRowAvatar,
                                                    userId: 1,
                                                    imageAlt: "User avatar",
                                                    boxSize: "medium"
                                                }), (0, s.jsxs)(g.Z, {
                                                    variant: "primary",
                                                    className: u().cupsGameItemPlayersRowButton,
                                                    onClick: () => {
                                                        joinGame(e._id, "red")
                                                    },
                                                    children: ["Join for", " ", (0, A.Z)((0, G.Z)(e.betAmount)), (0, s.jsx)(Z.Z, {})]
                                                })]
                                            }), e.players.find(e => "blue" === e.color) ? (0, s.jsxs)("div", {
                                                className: u().cupsGameItemPlayersRow,
                                                style: {
                                                    "--row-color": "#3656FF"
                                                },
                                                children: [(0, s.jsx)(w.Z, {
                                                    className: u().cupsGameItemPlayersRowAvatar,
                                                    userId: null === (r = e.players.find(e => "blue" === e.color)) || void 0 === r ? void 0 : r._id,
                                                    isPrivateMode: (null === (i = e.players.find(e => "blue" === e.color)) || void 0 === i ? void 0 : i.username.toLowerCase()) === "anonymous",
                                                    imageAlt: "User avatar",
                                                    boxSize: "medium"
                                                }), (0, s.jsx)(h.Z, {
                                                    className: u().cupsGameItemPlayersRowText,
                                                    element: "p",
                                                    textType: "regular14",
                                                    children: null === (c = e.players.find(e => "blue" === e.color)) || void 0 === c ? void 0 : c.username
                                                })]
                                            }) : (0, s.jsxs)("div", {
                                                className: u().cupsGameItemPlayersRow,
                                                style: {
                                                    "--row-color": "#3656FF"
                                                },
                                                children: [(0, s.jsx)(w.Z, {
                                                    className: u().cupsGameItemPlayersRowAvatar,
                                                    userId: 1,
                                                    imageAlt: "User avatar",
                                                    boxSize: "medium"
                                                }), (0, s.jsxs)(g.Z, {
                                                    variant: "primary",
                                                    className: u().cupsGameItemPlayersRowButton,
                                                    onClick: () => {
                                                        joinGame(e._id, "blue")
                                                    },
                                                    children: ["Join for", " ", (0, A.Z)((0, G.Z)(e.betAmount)), (0, s.jsx)(Z.Z, {})]
                                                })]
                                            }), 2 === e.playerAmount ? void 0 : e.players.find(e => "green" === e.color) ? (0, s.jsxs)("div", {
                                                className: u().cupsGameItemPlayersRow,
                                                style: {
                                                    "--row-color": "#AF3BD8"
                                                },
                                                children: [(0, s.jsx)(w.Z, {
                                                    className: u().cupsGameItemPlayersRowAvatar,
                                                    userId: null === (m = e.players.find(e => "green" === e.color)) || void 0 === m ? void 0 : m._id,
                                                    imageAlt: "User avatar",
                                                    boxSize: "medium"
                                                }), (0, s.jsx)(h.Z, {
                                                    className: u().cupsGameItemPlayersRowText,
                                                    element: "p",
                                                    textType: "regular14",
                                                    children: null === (d = e.players.find(e => "green" === e.color)) || void 0 === d ? void 0 : d.username
                                                })]
                                            }) : (0, s.jsxs)("div", {
                                                className: u().cupsGameItemPlayersRow,
                                                style: {
                                                    "--row-color": "#AF3BD8"
                                                },
                                                children: [(0, s.jsx)(w.Z, {
                                                    className: u().cupsGameItemPlayersRowAvatar,
                                                    userId: 1,
                                                    imageAlt: "User avatar",
                                                    boxSize: "medium"
                                                }), (0, s.jsxs)(g.Z, {
                                                    variant: "primary",
                                                    className: u().cupsGameItemPlayersRowButton,
                                                    onClick: () => {
                                                        joinGame(e._id, "green")
                                                    },
                                                    children: ["Join for", " ", (0, A.Z)((0, G.Z)(e.betAmount)), (0, s.jsx)(Z.Z, {})]
                                                })]
                                            }), 4 !== e.playerAmount ? void 0 : e.players.find(e => "yellow" === e.color) ? (0, s.jsxs)("div", {
                                                className: u().cupsGameItemPlayersRow,
                                                style: {
                                                    "--row-color": "#FCB122"
                                                },
                                                children: [(0, s.jsx)(w.Z, {
                                                    className: u().cupsGameItemPlayersRowAvatar,
                                                    userId: null === (y = e.players.find(e => "yellow" === e.color)) || void 0 === y ? void 0 : y._id,
                                                    imageAlt: "User avatar",
                                                    boxSize: "medium"
                                                }), (0, s.jsx)(h.Z, {
                                                    className: u().cupsGameItemPlayersRowText,
                                                    element: "p",
                                                    textType: "regular14",
                                                    children: null === (_ = e.players.find(e => "yellow" === e.color)) || void 0 === _ ? void 0 : _.username
                                                })]
                                            }) : (0, s.jsxs)("div", {
                                                className: u().cupsGameItemPlayersRow,
                                                style: {
                                                    "--row-color": "#FCB122"
                                                },
                                                children: [(0, s.jsx)(w.Z, {
                                                    className: u().cupsGameItemPlayersRowAvatar,
                                                    userId: 1,
                                                    imageAlt: "User avatar",
                                                    boxSize: "medium"
                                                }), (0, s.jsxs)(g.Z, {
                                                    variant: "primary",
                                                    className: u().cupsGameItemPlayersRowButton,
                                                    onClick: () => {
                                                        joinGame(e._id, "yellow")
                                                    },
                                                    children: ["Join for", " ", (0, A.Z)((0, G.Z)(e.betAmount)), (0, s.jsx)(Z.Z, {})]
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: u().cupsGameItemMain,
                                            children: [(0, s.jsxs)("div", {
                                                className: u().cupsGameItemAmount,
                                                children: [(0, s.jsx)(b.Z, {
                                                    element: "h2",
                                                    children: (0, A.Z)((0, G.Z)(e.betAmount * e.playerAmount))
                                                }), (0, s.jsx)(Z.Z, {})]
                                            }), (0, s.jsx)(h.Z, {
                                                textType: "regular14",
                                                element: "p",
                                                style: {
                                                    color: "#5f6892",
                                                    marginTop: "-4.5rem",
                                                    marginBottom: "1.2rem"
                                                },
                                                children: e.status < 3 && e.committedEosBlock > 0 && "Waiting for EOS block #".concat(e.committedEosBlock)
                                            }), (0, s.jsx)(CupsAnimation, {
                                                cupsAmount: e.playerAmount,
                                                selectedColor: e.winningCup,
                                                isAnimating: 3 == e.status
                                            })]
                                        })]
                                    })
                                }, e._id)
                            })
                        })]
                    })
                })
            }

            function CupsGame(e) {
                let {
                    className: t,
                    user: a,
                    ...n
                } = e;
                return (0, s.jsx)("div", {
                    className: p()(u().cupsGame, t),
                    ...n,
                    "data-sentry-component": "CupsGame",
                    "data-sentry-source-file": "cups-game.tsx",
                    children: (0, s.jsx)(CupsGameItem, {
                        user: a,
                        "data-sentry-element": "CupsGameItem",
                        "data-sentry-source-file": "cups-game.tsx"
                    })
                })
            }
            var W = (0, i.$j)(e => ({
                user: e.auth.user,
                isAuthenticated: e.auth.isAuthenticated
            }))(e => {
                let {
                    user: t,
                    ...a
                } = e, n = (0, m.Z)();
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(c.Z, { ...a,
                        "data-sentry-element": "GameLayout",
                        "data-sentry-source-file": "cups.tsx",
                        children: [(0, s.jsx)(c.Z.Column, {
                            type: "anotherLeft",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "cups.tsx",
                            children: (0, s.jsx)(l.Z, {
                                className: u().cupsSticky,
                                offsetTop: n.width > 1170 ? 96 : 72,
                                offsetBottom: 24,
                                "data-sentry-element": "StickyBox",
                                "data-sentry-source-file": "cups.tsx",
                                children: (0, s.jsx)(CupsBet, {
                                    user: t,
                                    "data-sentry-element": "CupsBet",
                                    "data-sentry-source-file": "cups.tsx"
                                })
                            })
                        }), (0, s.jsx)(c.Z.Column, {
                            type: "anotherRight",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "cups.tsx",
                            children: (0, s.jsx)(CupsGame, {
                                user: t,
                                "data-sentry-element": "CupsGame",
                                "data-sentry-source-file": "cups.tsx"
                            })
                        })]
                    })
                })
            });

            function CupsPage() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(W, {
                        "data-sentry-element": "Cups",
                        "data-sentry-source-file": "cups.tsx"
                    })
                })
            }
            CupsPage.getLayout = function(e) {
                return (0, s.jsx)(o.Z, {
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
        92581: function(e) {
            e.exports = {
                flash: "cups_flash__y0THj",
                pulse: "cups_pulse__K_1co",
                modalWinnerCups: "cups_modalWinnerCups__QnY_q",
                animationSection: "cups_animationSection___Cy1b",
                cupSection: "cups_cupSection__9YxLX",
                cup: "cups_cup__E0YvB",
                cupOut: "cups_cupOut__Z5doS",
                redOne: "cups_redOne__dVZ6Q",
                blueOne: "cups_blueOne___D3_S",
                purpleOne: "cups_purpleOne__nvY3u",
                yellowOne: "cups_yellowOne__T6t55",
                cupSectionBall: "cups_cupSectionBall__LK79W",
                amountCollected: "cups_amountCollected___FU6U",
                amountText: "cups_amountText__FiX1D",
                bottomTop: "cups_bottomTop__pLwfH",
                flipCard: "cups_flipCard__zsf2M",
                bottomTopFlip: "cups_bottomTopFlip__YljBu",
                fade: "cups_fade__7hNJc",
                rotate: "cups_rotate__IK0lt",
                gloss: "cups_gloss__P0sWa",
                shake: "cups_shake__1O6_N",
                rotateY: "cups_rotateY___qKgJ",
                animateArrow: "cups_animateArrow__gErzf",
                selectionArrowRight: "cups_selectionArrowRight__akg0o",
                selectionArrowLeft: "cups_selectionArrowLeft__0yE__",
                coinExplode: "cups_coinExplode__p2I1J"
            }
        },
        86299: function(e) {
            e.exports = {
                cupsGameItem: "cups_cupsGameItem___wVx6",
                cupsGameItemPlayers: "cups_cupsGameItemPlayers__FtuBq",
                cupsGameItemPlayersRow: "cups_cupsGameItemPlayersRow__5Vj2O",
                cupsGameItemPlayersRowAvatar: "cups_cupsGameItemPlayersRowAvatar__ck6j8",
                cupsGameItemPlayersRowButton: "cups_cupsGameItemPlayersRowButton___GG_8",
                cupsGameItemPlayersRowText: "cups_cupsGameItemPlayersRowText__Ab0Ph",
                cupsGameItemMain: "cups_cupsGameItemMain__lG3gj",
                cupsGameItemAmount: "cups_cupsGameItemAmount__uhOaK",
                cupsGameItemAnimation: "cups_cupsGameItemAnimation__IAB5s",
                cupsGameItemAnimationItem: "cups_cupsGameItemAnimationItem__Je3Cy",
                red: "cups_red__LsJkq",
                blue: "cups_blue__XX6rh",
                purple: "cups_purple___ctV2",
                yellow: "cups_yellow__P3lPf",
                isOpened: "cups_isOpened__vki7v",
                cupsBet: "cups_cupsBet__ulyxs",
                cupsSticky: "cups_cupsSticky__oRohL"
            }
        }
    },
    function(e) {
        e.O(0, [4885, 8802, 205, 9526, 990, 215, 7661, 1256, 9774, 2888, 179], function() {
            return e(e.s = 1490)
        }), _N_E = e.O()
    }
]);