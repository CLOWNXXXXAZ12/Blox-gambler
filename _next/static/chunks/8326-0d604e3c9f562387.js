! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c5ad57fc-b684-40c5-9d76-c4232f609574", e._sentryDebugIdIdentifier = "sentry-dbid-c5ad57fc-b684-40c5-9d76-c4232f609574")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8326], {
        98326: function(e, t, s) {
            "use strict";
            s.d(t, {
                Xu: function() {
                    return R
                },
                ZP: function() {
                    return C
                }
            });
            var n, a, r = s(85893),
                o = s(67294),
                l = s(86501),
                i = s(2664),
                c = s(2181),
                u = s(26118),
                d = s(49089),
                m = s(93967),
                w = s.n(m),
                p = s(77579),
                v = s(4595),
                h = s(58733),
                g = s(19881),
                y = s.n(g),
                f = s(62961),
                x = s(83198),
                _ = s(4277),
                j = s(38178),
                G = s(11163),
                I = s(86436),
                T = s(20875);

            function TowersBet(e) {
                let {
                    setGame: t,
                    setDifficulty: s,
                    setBetAmount: n,
                    user: a,
                    game: u,
                    betAmount: m,
                    difficulty: g,
                    autoMode: b,
                    setAutoMode: B,
                    selectedTowerIndexes: S,
                    setSelectedTowerIndexes: Z,
                    loadingTile: N,
                    setLoadingTile: C,
                    completedLevels: A,
                    setCompletedLevels: k,
                    className: L,
                    ...E
                } = e, {
                    autoBetTower: F
                } = (0, i.v9)(e => e.auth), M = (0, o.useRef)(!1), O = (0, o.useRef)(0), P = (0, o.useRef)(0), [D, W] = (0, o.useState)(!1), [H, J] = (0, o.useState)(!1), [K, U] = (0, o.useState)(!1), [$, q] = (0, o.useState)("increase"), [Q, Y] = (0, o.useState)("increase"), [V, X] = (0, o.useState)(0), [z, ee] = (0, o.useState)(0), [et, es, en, ea] = (0, _.Z)("0"), [er, eo, el, ei] = (0, _.Z)("0"), [ec, eu, ed, em] = (0, _.Z)("0"), [ew, ep, ev, eh] = (0, _.Z)("0"), [eg, ey, ef, ex] = (0, _.Z)("0"), [e_, ej, eG, eI] = (0, _.Z)("0"), eT = (0, i.I0)(), eb = (0, G.useRouter)(), {
                    fflags: eB
                } = (0, i.v9)(e => e.auth);
                (0, o.useEffect)(() => {
                    (null == u ? void 0 : u.difficulty) && s(u.difficulty)
                }, [u]);
                let startNewGame = async () => {
                        try {
                            W(!0);
                            let e = await (0, c.Ab4)(g, parseFloat(m));
                            eB.fe_ga_enabled && d.ZP.event({
                                category: "Towers game",
                                action: "Joined tower game",
                                value: m
                            }), eB.fe_mixpanel_enabled && x.Z.track("JOINED_TOWERS_GAME", {
                                amount: m
                            }), t(e.game), W(!1)
                        } catch (e) {
                            console.error("Failed to create new game:", e), l.Am.error("Error starting a new game in auto mode."), W(!1)
                        }
                    },
                    uncoverTile = async (e, s) => {
                        try {
                            console.debug("Uncovering tile ".concat(e, " at tower level ").concat(s)), C(e);
                            let n = await (0, c.J6H)(!1, e, s);
                            if (C(-1), n.completedLevels && k(n.completedLevels), n.game && t(n.game), n.exploded) return (0, j._Q)(j.Tc.TOWERS.BREAK), !1;
                            return (0, j._Q)(j.Tc.TOWERS.STOMP), !0
                        } catch (e) {
                            return console.error("Error uncovering tile:", e), C(-1), l.Am.error("Error uncovering tile. Please try again."), !1
                        }
                    },
                    requestSetDifficulty = e => {
                        (null == u ? void 0 : u.active) ? l.Am.error("You can not change the round settings while there's an active game!"): (t(void 0), s(e))
                    },
                    setAutoBetTower = e => {
                        ey(e_), eT({
                            type: "SET_AUTO_BET_TOWER",
                            payload: e
                        })
                    },
                    shouldStopGame = () => !!(parseFloat(ew) && P.current >= parseFloat(ew) || parseFloat(ec) && P.current <= -parseFloat(ec) || parseInt(eg) && O.current >= parseInt(eg)),
                    stopAutoLoop = () => {
                        setAutoBetTower(!1), t(void 0), Z(R)
                    },
                    eS = Object.entries(S).filter(e => {
                        let [, t] = e;
                        return null !== t
                    });
                (0, o.useEffect)(() => {
                    let e = !1;
                    eb.events.on("routeChangeStart", () => {
                        stopAutoLoop()
                    });
                    let runAutoModeGameLoop = async () => {
                        try {
                            for (; F && !e;) {
                                for (let [e, t] of ((null == u ? void 0 : u.active) || await startNewGame(), O.current++, eS)) {
                                    let s = parseInt(e, 10);
                                    if (null !== t) {
                                        let n = await uncoverTile(t, s);
                                        if (!n || !F) {
                                            P.current -= m, M.current = !1;
                                            break
                                        }
                                        eS[eS.length - 1][0] === e && (await cashout(), P.current += z - m || 0, M.current = !0)
                                    }
                                }
                                if (!F) break;
                                if (await new Promise(e => setTimeout(e, 2e3)), shouldStopGame() || !F) {
                                    stopAutoLoop();
                                    break
                                }
                                M.current ? parseFloat(er) > 0 ? n(e => (Math.floor(parseFloat(e) * (1 + parseFloat(er) / 100) * 100) / 100).toString()) : n(V.toString()) : parseFloat(et) > 0 ? n(e => (Math.floor(parseFloat(e) * (1 + parseFloat(et) / 100) * 100) / 100).toString()) : n(V.toString())
                            }
                        } catch (e) {
                            console.error("WHILE LOOP ERROR", e)
                        }
                    };
                    return F && runAutoModeGameLoop(), () => {
                        e = !0, O.current = 0, P.current = 0
                    }
                }, [F]);
                let cashout = async () => {
                        let e = await (0, c.J6H)(!0);
                        W(!1), e.success && ((0, j._Q)(j.Tc.TOWERS.BIG_CASHOUT), l.Am.success("You've won " + e.winnings.toFixed(2) + " F$ by playing towers! Good job!"), t(e.game), ee(e.winnings))
                    },
                    handleManualGameMode = async () => {
                        try {
                            if (W(!0), null == u ? void 0 : u.active) await cashout();
                            else {
                                let e = await (0, c.Ab4)(g, parseFloat(m));
                                eB.fe_ga_enabled && d.ZP.event({
                                    category: "Towers game",
                                    action: "Joined tower game",
                                    value: m
                                }), eB.fe_mixpanel_enabled && x.Z.track("JOINED_TOWERS_GAME", {
                                    amount: m
                                }), W(!1), t(e.game)
                            }
                        } catch (t) {
                            var e, s;
                            if (W(!1), null == t ? void 0 : null === (s = t.response) || void 0 === s ? void 0 : null === (e = s.data) || void 0 === e ? void 0 : e.msg) {
                                if (t.response.data.msg.includes("Auth")) {
                                    eT({
                                        type: f.gr
                                    });
                                    return
                                }
                                l.Am.error(t.response.data.msg)
                            } else l.Am.error("An unknown fatal error occurred while trying to process your request. Are you connected to the internet?")
                        }
                    },
                    onButtonClick = async () => {
                        if (m < 5) {
                            l.Am.error("The minimum bet amount is 5 F$ !");
                            return
                        }
                        b && !F ? (setAutoBetTower(!0), X(parseFloat(m))) : await handleManualGameMode()
                    };
                return (0, r.jsxs)("div", {
                    className: w()("gameBlock gameBet", y().towersBet, L),
                    ...E,
                    "data-sentry-component": "TowersBet",
                    "data-sentry-source-file": "towers-bet.tsx",
                    children: [(0, r.jsx)("div", {
                        className: w()("gameBetTabs"),
                        style: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: (0, r.jsx)(I.Z, {
                            gameName: "mines",
                            sideButtonType: "compact",
                            showAuto: !(null == eB ? void 0 : eB.autoTowersBetDisabled),
                            showHistory: !0,
                            lastGame: u,
                            isAuto: b,
                            setIsAuto: e => {
                                B(e), e || Z(R), t(void 0)
                            },
                            maxProfit: 1e6,
                            "data-sentry-element": "BetHeader",
                            "data-sentry-source-file": "towers-bet.tsx"
                        })
                    }), (0, r.jsx)(T.Z, {
                        value: m,
                        onChange: e => n(e),
                        hasCurrencyIcon: !0,
                        min: 5,
                        max: 5e4,
                        "data-sentry-element": "BetInput",
                        "data-sentry-source-file": "towers-bet.tsx"
                    }), (0, r.jsxs)("div", {
                        className: w()("customInput", "gameBetInput"),
                        children: [(0, r.jsx)(p.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: w()("customInputLabel"),
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "towers-bet.tsx",
                            children: "Difficulty"
                        }), (0, r.jsxs)("div", {
                            className: w()("customInputOptions"),
                            children: [(0, r.jsx)(v.Z, {
                                variant: "betOption",
                                isActive: "easy" === g,
                                onClick: () => requestSetDifficulty("easy"),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "towers-bet.tsx",
                                children: "Easy"
                            }), (0, r.jsx)(v.Z, {
                                variant: "betOption",
                                isActive: "normal" === g,
                                onClick: () => requestSetDifficulty("normal"),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "towers-bet.tsx",
                                children: "Normal"
                            }), (0, r.jsx)(v.Z, {
                                variant: "betOption",
                                isActive: "hard" === g,
                                onClick: () => requestSetDifficulty("hard"),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "towers-bet.tsx",
                                children: "Hard"
                            })]
                        })]
                    }), b && (0, r.jsxs)("div", {
                        className: w()("customInput", "gameBetInput"),
                        children: [(0, r.jsx)(p.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: w()("customInputLabel"),
                            children: "Number of Games"
                        }), (0, r.jsx)("div", {
                            className: w()("customInputInner"),
                            children: (0, r.jsx)(h.Z, {
                                pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                onKeyPress: e => {
                                    /[0-9.]/.test(e.key) || e.preventDefault()
                                },
                                hasCurrencyIcon: !0,
                                currencyIconUrl: "/icons/infinity.svg",
                                onChange: e => {
                                    ey(e.currentTarget.value), ej(e.currentTarget.value)
                                },
                                value: e_,
                                iconPosition: "end",
                                onFocus: eG,
                                onBlur: eI,
                                placeholder: "0"
                            })
                        })]
                    }), b && (0, r.jsxs)("div", {
                        className: w()("customInput", "gameBetInput"),
                        children: [(0, r.jsx)(p.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: w()("customInputLabel"),
                            children: "On Win"
                        }), (0, r.jsxs)("div", {
                            className: w()("customInputInner"),
                            children: [(0, r.jsxs)("div", {
                                className: w()("customInputInnerButtonsLeft"),
                                children: [(0, r.jsx)(v.Z, {
                                    variant: "autoReset",
                                    onClick: () => {
                                        q("reset"), eo("0"), U(!0)
                                    },
                                    className: w()({
                                        clicked: "reset" === $,
                                        unclicked: "increase" === $
                                    }),
                                    children: "Reset"
                                }), (0, r.jsx)(v.Z, {
                                    variant: "autoIncrease",
                                    onClick: () => {
                                        q("increase"), U(!1)
                                    },
                                    className: w()("customInputInnerButtonsLeftIncrease", {
                                        clicked: "increase" === $,
                                        unclicked: "reset" === $
                                    }),
                                    children: "Increase By"
                                })]
                            }), (0, r.jsx)(h.Z, {
                                pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                onKeyPress: e => {
                                    /[0-9.]/.test(e.key) || e.preventDefault()
                                },
                                hasCurrencyIcon: !0,
                                currencyIconUrl: "/icons/percentage.svg",
                                onChange: e => eo(e.currentTarget.value),
                                value: er,
                                iconPosition: "end",
                                className: y().leftInput,
                                onFocus: el,
                                onBlur: ei,
                                disabled: K
                            })]
                        })]
                    }), b && (0, r.jsxs)("div", {
                        className: w()("customInput", "gameBetInput"),
                        children: [(0, r.jsx)(p.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: w()("customInputLabel"),
                            children: "On Loss"
                        }), (0, r.jsxs)("div", {
                            className: w()("customInputInner"),
                            children: [(0, r.jsxs)("div", {
                                className: w()("customInputInnerButtonsLeft"),
                                children: [(0, r.jsx)(v.Z, {
                                    variant: "autoReset",
                                    onClick: () => {
                                        Y("reset"), es("0"), J(!0)
                                    },
                                    className: w()({
                                        clicked: "reset" === Q,
                                        unclicked: "increase" === Q
                                    }),
                                    children: "Reset"
                                }), (0, r.jsx)(v.Z, {
                                    variant: "autoIncrease",
                                    onClick: () => {
                                        Y("increase"), J(!1)
                                    },
                                    className: w()("customInputInnerButtonsLeftIncrease", {
                                        clicked: "increase" === Q,
                                        unclicked: "reset" === Q
                                    }),
                                    children: "Increase By"
                                })]
                            }), (0, r.jsx)(h.Z, {
                                pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                onKeyPress: e => {
                                    /[0-9.]/.test(e.key) || e.preventDefault()
                                },
                                hasCurrencyIcon: !0,
                                currencyIconUrl: "/icons/percentage.svg",
                                onChange: e => es(e.currentTarget.value),
                                value: et,
                                iconPosition: "end",
                                className: y().leftInput,
                                onFocus: en,
                                onBlur: ea,
                                disabled: H
                            })]
                        })]
                    }), b && (0, r.jsxs)("div", {
                        className: y().inputWrapper,
                        children: [(0, r.jsxs)("div", {
                            className: w()("customInput", "gameBetInput"),
                            children: [(0, r.jsx)(p.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: w()("customInputLabel"),
                                children: "Stop on Net Gain"
                            }), (0, r.jsx)("div", {
                                className: w()("customInputInner"),
                                children: (0, r.jsx)(h.Z, {
                                    pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                    onKeyPress: e => {
                                        /[0-9.]/.test(e.key) || e.preventDefault()
                                    },
                                    hasCurrencyIcon: !0,
                                    onChange: e => ep(e.currentTarget.value),
                                    value: ew,
                                    iconPosition: "end",
                                    onFocus: ev,
                                    onBlur: eh
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: w()("customInput", "gameBetInput"),
                            children: [(0, r.jsx)(p.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: w()("customInputLabel"),
                                children: "Stop on Net Loss"
                            }), (0, r.jsx)("div", {
                                className: w()("customInputInner"),
                                children: (0, r.jsx)(h.Z, {
                                    pattern: "^-?[0-9]\\d*(\\.\\d+)?$",
                                    onKeyPress: e => {
                                        /[0-9.]/.test(e.key) || e.preventDefault()
                                    },
                                    hasCurrencyIcon: !0,
                                    onChange: e => eu(e.currentTarget.value),
                                    value: ec,
                                    iconPosition: "end",
                                    onFocus: ed,
                                    onBlur: em
                                })
                            })]
                        })]
                    }), b ? (0, r.jsx)(r.Fragment, {
                        children: F ? (0, r.jsx)(v.Z, {
                            variant: "secondary",
                            onClick: stopAutoLoop,
                            className: w()("gameBetSubmit", "mobileBottomMargin"),
                            children: "Stop Auto Mode"
                        }) : (0, r.jsx)(v.Z, {
                            variant: (null == u ? void 0 : u.active) ? "secondary" : "primary",
                            onClick: onButtonClick,
                            disabled: 0 === eS.length,
                            className: w()("gameBetSubmit", "mobileBottomMargin"),
                            children: "Start Auto Mode"
                        })
                    }) : (0, r.jsx)(v.Z, {
                        variant: (null == u ? void 0 : u.active) ? "secondary" : "primary",
                        disabled: D,
                        onClick: onButtonClick,
                        className: w()("gameBetSubmit", "mobileBottomMargin"),
                        children: (null == u ? void 0 : u.active) ? "Cashout" : "Start new game"
                    })]
                })
            }
            var b = s(39398),
                B = s(40400),
                S = s(66713),
                Z = s(91897);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s)({}).hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            var star = function(e) {
                return o.createElement("svg", _extends({
                    width: 22,
                    height: 20,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), n || (n = o.createElement("path", {
                    d: "M5.397 20c-.293 0-.58-.09-.818-.254a1.434 1.434 0 0 1-.468-.571 1.364 1.364 0 0 1-.112-.718l.51-5.469L.851 8.875a1.402 1.402 0 0 1-.325-.654c-.048-.24-.03-.49.052-.722a1.37 1.37 0 0 1 .394-.591c.183-.162.406-.275.648-.33l5.33-1.202L9.748.702c.124-.213.306-.39.526-.514a1.486 1.486 0 0 1 1.452 0c.22.124.402.3.526.514l2.798 4.707 5.33 1.202c.242.055.465.168.648.33.183.161.318.365.394.592.082.232.1.48.052.722-.048.24-.16.466-.325.653l-3.637 4.08.51 5.47c.025.247-.02.496-.127.722a1.439 1.439 0 0 1-.488.566 1.459 1.459 0 0 1-1.399.134l-5.015-2.164-5.008 2.164c-.184.08-.385.121-.588.12Z",
                    fill: "url(#star_svg__a)"
                })), a || (a = o.createElement("defs", null, o.createElement("linearGradient", {
                    id: "star_svg__a",
                    x1: 11,
                    y1: 0,
                    x2: 11,
                    y2: 20,
                    gradientUnits: "userSpaceOnUse"
                }, o.createElement("stop", {
                    stopColor: "#FBD03B"
                }), o.createElement("stop", {
                    offset: 1,
                    stopColor: "#FD9E12"
                })))))
            };
            let N = {
                    easy: 2 / 3,
                    normal: .5,
                    hard: 1 / 3
                },
                calculateMultiplier = function(e, t, s) {
                    let n = t * (1 / Math.pow(N[e], s) * (1 - .05 * s));
                    return n
                };

            function TowersGame(e) {
                let {
                    game: t,
                    setGame: s,
                    difficulty: n,
                    betAmount: a,
                    selectedTowerIndexes: i,
                    setSelectedTowerIndexes: u,
                    autoMode: d,
                    loadingTile: m,
                    setLoadingTile: h,
                    completedLevels: g,
                    setCompletedLevels: f,
                    className: x,
                    ..._
                } = e, uncoverTile = async (e, t) => {
                    if (d) {
                        if (t > 0 && null === i[t - 1]) {
                            l.ZP.error("Please select the previous tower before selecting this one.");
                            return
                        }
                        if (i[t] === e) {
                            let e = Object.keys(i).slice(t + 1).some(e => null !== i[e]);
                            if (e) {
                                l.ZP.error("Please deselect the higher tower levels first.");
                                return
                            }
                            u(e => ({ ...e,
                                [t]: null
                            }));
                            return
                        }
                        u(s => ({ ...s,
                            [t]: e
                        }));
                        return
                    }
                    console.debug("Uncovering tile ".concat(e, " at tower level ").concat(t)), h(e);
                    let n = await (0, c.J6H)(!1, e, t);
                    h(-1), n.completedLevels && f(n.completedLevels), n.game && s(n.game), n.exploded ? (0, j._Q)(j.Tc.TOWERS.BREAK) : (0, j._Q)(j.Tc.TOWERS.STOMP)
                };
                return (0, o.useEffect)(() => {
                    (null == t ? void 0 : t.completedLevels) && f(t.completedLevels), t || f([])
                }, [t]), (0, r.jsx)("div", {
                    className: w()(y().towersGame, x),
                    ..._,
                    "data-sentry-component": "TowersGame",
                    "data-sentry-source-file": "towers-game.tsx",
                    children: (0, r.jsx)("div", {
                        className: y().towersGameInner,
                        children: Array(8).fill(0).map((e, s) => {
                            var o, l, c;
                            return (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsxs)("div", {
                                    className: w()(y().towersGameRow, "normal" === n ? y().towersGameTwoRows : y().towersGameThreeRows, (null == t ? void 0 : t.active) && (null == g ? void 0 : g.length) + 1 == 8 - s && y().towersGameRowActive, (null == t ? void 0 : t.active) && (null == g ? void 0 : g.length) + 1 != 8 - s && (null == g ? void 0 : g.length) > 7 - s && y().towersGameRowSuccess, d && y().towersGameRowAutoMode),
                                    children: [(0, r.jsx)("div", {
                                        className: y().towersGameRowContainer,
                                        children: (null == g ? void 0 : g.length) + 1 != 8 - s && (null == g ? void 0 : g.length) > 7 - s && 0 == g[7 - s] ? (0, r.jsx)("div", {
                                            className: y().towersGameStar,
                                            children: (0, r.jsx)(star, {})
                                        }) : (null == t ? void 0 : t.active) === !1 && (null == t ? void 0 : null === (o = t.towerLevels) || void 0 === o ? void 0 : o[7 - s][0]) == 1 ? (0, r.jsx)("div", {
                                            className: y().towersGameCross,
                                            children: (0, r.jsx)(Z.Z, {})
                                        }) : (0, r.jsx)(v.Z, {
                                            className: w()(0 == m && (null == g ? void 0 : g.length) == 7 - s ? y().towersGameSpinningButton : y().towersGameButton, 0 === i[8 - s - 1] && y().towersGameButtonSelected),
                                            onClick: () => uncoverTile(0, 8 - s - 1),
                                            children: (0 != m || (null == g ? void 0 : g.length) != 7 - s) && (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)(p.Z, {
                                                    element: "span",
                                                    textType: "regular14",
                                                    children: (0, b.Z)((0, B.Z)(calculateMultiplier(n, a, 8 - s)))
                                                }), (0, r.jsx)(S.Z, {})]
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: y().towersGameRowContainer,
                                        children: (null == g ? void 0 : g.length) + 1 != 8 - s && (null == g ? void 0 : g.length) > 7 - s && 1 == g[7 - s] ? (0, r.jsx)("div", {
                                            className: y().towersGameStar,
                                            children: (0, r.jsx)(star, {})
                                        }) : (null == t ? void 0 : t.active) === !1 && (null == t ? void 0 : null === (l = t.towerLevels) || void 0 === l ? void 0 : l[7 - s][1]) == 1 ? (0, r.jsx)("div", {
                                            className: y().towersGameCross,
                                            children: (0, r.jsx)(Z.Z, {})
                                        }) : (0, r.jsx)(v.Z, {
                                            className: w()(1 == m && (null == g ? void 0 : g.length) == 7 - s ? y().towersGameSpinningButton : y().towersGameButton, 1 === i[8 - s - 1] && y().towersGameButtonSelected),
                                            onClick: () => uncoverTile(1, 8 - s - 1),
                                            children: (1 != m || (null == g ? void 0 : g.length) != 7 - s) && (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)(p.Z, {
                                                    element: "span",
                                                    textType: "regular14",
                                                    children: (0, b.Z)((0, B.Z)(calculateMultiplier(n, a, 8 - s)))
                                                }), (0, r.jsx)(S.Z, {})]
                                            })
                                        })
                                    }), "normal" !== n && (0, r.jsx)("div", {
                                        className: y().towersGameRowContainer,
                                        children: (null == g ? void 0 : g.length) + 1 != 8 - s && (null == g ? void 0 : g.length) > 7 - s && 2 == g[7 - s] ? (0, r.jsx)("div", {
                                            className: y().towersGameStar,
                                            children: (0, r.jsx)(star, {})
                                        }) : (null == t ? void 0 : t.active) === !1 && (null == t ? void 0 : null === (c = t.towerLevels) || void 0 === c ? void 0 : c[7 - s][2]) == 1 ? (0, r.jsx)("div", {
                                            className: y().towersGameCross,
                                            children: (0, r.jsx)(Z.Z, {})
                                        }) : (0, r.jsx)(v.Z, {
                                            className: w()(2 == m && (null == g ? void 0 : g.length) == 7 - s ? y().towersGameSpinningButton : y().towersGameButton, 2 === i[8 - s - 1] && y().towersGameButtonSelected),
                                            onClick: () => uncoverTile(2, 8 - s - 1),
                                            children: (2 != m || (null == g ? void 0 : g.length) != 7 - s) && (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)(p.Z, {
                                                    element: "span",
                                                    textType: "regular14",
                                                    children: (0, b.Z)((0, B.Z)(calculateMultiplier(n, a, 8 - s)))
                                                }), (0, r.jsx)(S.Z, {})]
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            }
            let R = {
                0: null,
                1: null,
                2: null,
                3: null,
                4: null,
                5: null,
                6: null,
                7: null
            };
            var C = (0, i.$j)(e => ({
                user: e.auth.user,
                isAuthenticated: e.auth.isAuthenticated
            }))(e => {
                let {
                    user: t,
                    isAuthenticated: s,
                    ...n
                } = e, [a, i] = (0, o.useState)(), [d, m] = (0, o.useState)("30"), [w, p] = (0, o.useState)("easy"), [v, h] = (0, o.useState)(!1), [g, y] = (0, o.useState)([]), [f, x] = (0, o.useState)(-1), [_, j] = (0, o.useState)(R);
                return (0, o.useEffect)(() => {
                    if (s) {
                        let fetchData = async () => {
                            try {
                                let e = await (0, c.ikH)();
                                e.hasGame && i(e.game)
                            } catch (e) {
                                l.Am.error("Failed to laod active towers game, please refresh the page and try again!")
                            }
                        };
                        fetchData()
                    }
                }, [s]), (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(u.Z, { ...n,
                        "data-sentry-element": "GameLayout",
                        "data-sentry-source-file": "towers.tsx",
                        children: [(0, r.jsx)(u.Z.Column, {
                            type: "left",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "towers.tsx",
                            children: (0, r.jsx)(TowersBet, {
                                style: {
                                    animation: "bottomTop .3s"
                                },
                                user: t,
                                game: a,
                                setGame: i,
                                betAmount: d,
                                setBetAmount: m,
                                difficulty: w,
                                setDifficulty: p,
                                autoMode: v,
                                setAutoMode: h,
                                selectedTowerIndexes: _,
                                setSelectedTowerIndexes: j,
                                loadingTile: f,
                                setLoadingTile: x,
                                completedLevels: g,
                                setCompletedLevels: y,
                                "data-sentry-element": "TowersBet",
                                "data-sentry-source-file": "towers.tsx"
                            })
                        }), (0, r.jsx)(u.Z.Column, {
                            customMobileOrder: "-1",
                            type: "right",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "towers.tsx",
                            children: (0, r.jsx)(TowersGame, {
                                style: {
                                    animation: "bottomTop .3s",
                                    position: "relative"
                                },
                                game: a,
                                setGame: i,
                                betAmount: d,
                                difficulty: w,
                                selectedTowerIndexes: _,
                                setSelectedTowerIndexes: j,
                                autoMode: v,
                                loadingTile: f,
                                setLoadingTile: x,
                                completedLevels: g,
                                setCompletedLevels: y,
                                "data-sentry-element": "TowersGame",
                                "data-sentry-source-file": "towers.tsx"
                            })
                        })]
                    })
                })
            })
        },
        19881: function(e) {
            e.exports = {
                towersBet: "towers_towersBet__irweK",
                towersPlayers: "towers_towersPlayers__s3w_2",
                towersGame: "towers_towersGame__4VfYK",
                towersGameInner: "towers_towersGameInner__gbFa9",
                towersGameSpinningButton: "towers_towersGameSpinningButton___uxEq",
                spinning: "towers_spinning__KzbYX",
                towersGameButton: "towers_towersGameButton__xLe_v",
                towersGameTwoRows: "towers_towersGameTwoRows__FdQB8",
                towersGameThreeRows: "towers_towersGameThreeRows__FLXL1",
                towersGameRow: "towers_towersGameRow__flu2C",
                towersGameRowContainer: "towers_towersGameRowContainer__HCJog",
                towersGameRowAutoMode: "towers_towersGameRowAutoMode__TPCJE",
                towersGameButtonSelected: "towers_towersGameButtonSelected__RiqLH",
                towersGameRowActive: "towers_towersGameRowActive__BIMrx",
                towersGameRowSuccess: "towers_towersGameRowSuccess__Ux4Wu",
                towersGameText: "towers_towersGameText__1Gr7Q",
                towersGameRowFailed: "towers_towersGameRowFailed__Lb6PL",
                towersGameStar: "towers_towersGameStar__ZVPVJ",
                towersGameCross: "towers_towersGameCross__Fhj1y",
                leftInput: "towers_leftInput__FRvop",
                inputWrapper: "towers_inputWrapper__Wp418"
            }
        }
    }
]);