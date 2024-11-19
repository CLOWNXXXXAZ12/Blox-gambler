! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3b3974a2-06c9-4bf1-9862-797b4f642196", e._sentryDebugIdIdentifier = "sentry-dbid-3b3974a2-06c9-4bf1-9862-797b4f642196")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5386], {
        60970: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return Checkbox
                }
            });
            var s = a(85893);
            a(67294);
            var r = a(93967),
                n = a.n(r),
                l = a(90381),
                i = a.n(l);

            function Checkbox(e) {
                let {
                    className: t,
                    type: a = "checkbox",
                    ...r
                } = e;
                return (0, s.jsx)("input", {
                    type: a,
                    className: n()(i().checkbox, t),
                    ...r,
                    "data-sentry-component": "Checkbox",
                    "data-sentry-source-file": "checkbox.tsx"
                })
            }
        },
        25386: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a(85893),
                r = a(67294),
                n = a(83253),
                l = a.n(n),
                i = a(93967),
                o = a.n(i),
                d = a(4595),
                c = a(77579),
                u = a(791),
                h = a(58733),
                m = a(87116),
                x = a(8210),
                p = a.n(x),
                w = a(2664),
                y = a(62961),
                b = a(2181),
                f = a(86501),
                g = a(6428),
                j = a(41664),
                I = a.n(j),
                v = a(39398),
                Z = a(40400),
                C = a(60970);
            l().setAppElement("#__next");
            let k = [5, 10];
            t.default = (0, w.$j)(e => ({
                showRobuxWithdraw: e.auth.showRobuxWithdraw,
                fflags: e.auth.fflags
            }))(function(e) {
                let {
                    className: t,
                    showRobuxWithdraw: a,
                    fflags: n
                } = e, [i, x] = (0, r.useState)(!1), [j, N] = (0, r.useState)(!1), [T, R] = (0, r.useState)(!1), [_, W] = (0, r.useState)(0), B = (0, w.I0)(), M = r.useMemo(() => (0, m.P)("margin"), ["margin"]), [P, D] = (0, r.useState)(0), [L, S] = (0, r.useState)(null), E = (0, g.Z)(), [F, A] = (0, r.useState)(!1), [H, G] = (0, r.useState)("standard"), [O, X] = (0, r.useState)(4.05), [Y, q] = (0, r.useState)(0), addUp = e => {
                    W(t => {
                        let a = ("string" == typeof t ? parseInt(t) : t) || 0;
                        return "number" == typeof a || a > -1 ? a + e : e
                    })
                };

                function closeModal() {
                    B({
                        type: y.BG
                    }), B({
                        type: y.i8
                    }), R(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }
                async function fetchData() {
                    try {
                        let a = await (0, b.nXh)();
                        D(a.user.withdrawalRemaining), S(a.user);
                        var e = a.user.withdrawalRate || 0,
                            t = !1;
                        for (let a in n.premium_withdrawals_presets)
                            if (n.premium_withdrawals_presets[a] === e) {
                                G(a), console.log("withdrawrate detected to " + a), t = !0;
                                break
                            }
                        t || G("standard")
                    } catch (e) {
                        e.response && 400 === e.response.status ? f.ZP.error(e.response.data.error) : f.ZP.error("There was an error while fetching your RBLX information. Please try again later!")
                    }
                }(0, r.useEffect)(() => {
                    if (!n || !n.premium_withdrawals_presets) return;
                    var e = n.premium_withdrawals_presets[H];
                    if (void 0 === e) {
                        q(-1);
                        return
                    }
                    let t = .002125 * _;
                    var a = Math.round(t / (e / 1e3));
                    a -= .3 * a, q(a = Math.floor(a))
                }, [_, H, n]), (0, r.useEffect)(() => {
                    a ? (fetchData(), R(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = M.gap + "px"
                    }, 0)) : !1 === a && closeModal()
                }, [a]);
                let handleWithdraw = async e => {
                    try {
                        if ("CANCEL_PENDING" === e) {
                            N(!0);
                            let e = await (0, b.B4p)(0, H);
                            D(0), e.success ? f.ZP.success("Cancelled all pending requests.") : f.ZP.error(e.msg)
                        } else if ("WITHDRAW" === e) {
                            if (_ < 10) {
                                f.ZP.error("Minimum withdrawal amount is 10 FlipCoins");
                                return
                            }
                            if (_ >= 1e4 && !F) {
                                f.ZP.error("Please read and agree with the disclaimer first.");
                                return
                            }
                            x(!0);
                            let e = await (0, b.B4p)(_, H);
                            D(_), e.success ? f.ZP.success(e.msg) : f.ZP.error(e.msg || e.error), e.promptLogin && B({
                                type: y.gr
                            })
                        }
                        N(!1), x(!1)
                    } catch (e) {
                        N(!1), x(!1), e.response && 400 === e.response.status ? f.ZP.error(e.response.data.error) : f.ZP.error("There was an error while fetching your RBLX information. Please try again later!")
                    }
                };
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(l(), {
                        isOpen: T,
                        onRequestClose: closeModal,
                        contentLabel: "Withdraw modal",
                        className: o()(p().defaultModal, p().modalWithdraw, t),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "withdraw-robux.tsx",
                        children: [(0, s.jsxs)("div", {
                            className: p().defaultModalBreadcrumbs,
                            children: [(0, s.jsx)(d.Z, {
                                onClick: closeModal,
                                className: p().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "withdraw-robux.tsx",
                                children: (0, s.jsx)(c.Z, {
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "withdraw-robux.tsx",
                                    children: "Withdraw"
                                })
                            }), (0, s.jsx)(d.Z, {
                                className: p().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "withdraw-robux.tsx",
                                children: (0, s.jsx)(c.Z, {
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "withdraw-robux.tsx",
                                    children: "FlipCoins"
                                })
                            })]
                        }), (0, s.jsx)(u.Z, {
                            element: "h2",
                            className: p().modalDepositTitle,
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "withdraw-robux.tsx",
                            children: "Withdraw FlipCoins"
                        }), (0, s.jsxs)(c.Z, {
                            className: p().modalWithdrawText,
                            element: "p",
                            textType: "regular14",
                            style: {
                                margin: "2em 0"
                            },
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "withdraw-robux.tsx",
                            children: ["Please specify the amount of FlipCoins you would like to withdraw.", " ", (0, s.jsx)("strong", {
                                children: "Your balance may withdraw instantly, or a few hours depending on demand and your delivery choice."
                            }), " ", "Once your balance is withdrawn, it will appear in your pending FlipCoins balance", " ", (0, s.jsx)("a", {
                                href: "https://www.roblox.com/transactions",
                                target: "_blank",
                                children: "here"
                            }), ".", " ", (0, s.jsx)("br", {})]
                        }), (0, s.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            children: [(0, s.jsxs)("div", {
                                className: o()("customInput", p().modalWithdrawInput),
                                style: {
                                    width: "100%"
                                },
                                children: [(0, s.jsx)(c.Z, {
                                    element: "p",
                                    textType: "labelsRegular",
                                    className: o()("customInputLabel"),
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "withdraw-robux.tsx",
                                    children: "Amount of FlipCoins"
                                }), (0, s.jsxs)("div", {
                                    className: o()("customInputInner"),
                                    children: [(0, s.jsx)(h.Z, {
                                        hasCurrencyIcon: !0,
                                        placeholder: "Enter Amount of FlipCoins",
                                        value: _,
                                        type: "number",
                                        onChange: e => {
                                            var t;
                                            if ((null === (t = e.target.value) || void 0 === t ? void 0 : t.length) === 0) {
                                                W(0);
                                                return
                                            }
                                            let a = parseInt(e.target.value);
                                            if (a < 0) {
                                                f.ZP.error("Minimum withdrawal amount is 10 FlipCoins!"), W(0);
                                                return
                                            }
                                            W(a)
                                        },
                                        "data-sentry-element": "Input",
                                        "data-sentry-source-file": "withdraw-robux.tsx"
                                    }), (0, s.jsx)("div", {
                                        className: o()("customInputInnerButtons"),
                                        children: k.map((e, t) => (0, s.jsxs)(d.Z, {
                                            onClick: () => addUp(e),
                                            variant: "inputButton",
                                            children: ["+", e]
                                        }, t))
                                    })]
                                })]
                            }), (0, s.jsx)(c.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                style: {
                                    marginTop: "16px",
                                    fontSize: "3em",
                                    textAlign: "center",
                                    color: "#5F6892",
                                    fontWeight: "bold",
                                    padding: "0 1em"
                                },
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "withdraw-robux.tsx",
                                children: "="
                            }), (0, s.jsxs)("div", {
                                className: o()("customInput", p().modalWithdrawInput),
                                style: {
                                    width: "100%"
                                },
                                children: [(0, s.jsx)(c.Z, {
                                    element: "p",
                                    textType: "labelsRegular",
                                    className: o()("customInputLabel"),
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "withdraw-robux.tsx",
                                    children: "You Receive"
                                }), (0, s.jsxs)("div", {
                                    className: o()("customInputInner"),
                                    children: [(0, s.jsx)(h.Z, {
                                        hasCurrencyIcon: !0,
                                        value: Y,
                                        type: "number",
                                        disabled: !0,
                                        "data-sentry-element": "Input",
                                        "data-sentry-source-file": "withdraw-robux.tsx"
                                    }), (0, s.jsx)("div", {
                                        className: o()("customInputInnerButtons")
                                    })]
                                })]
                            })]
                        }), (0, s.jsxs)(c.Z, {
                            className: p().modalWithdrawText,
                            element: "p",
                            textType: "regular14",
                            style: {
                                margin: "1em 0"
                            },
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "withdraw-robux.tsx",
                            children: ["The amount you receive already includes the ", (0, s.jsx)("strong", {
                                children: "30% Roblox Marketplace Fee"
                            }), " along with the delivery fee.", " ", "It is what you will receive in your Roblox account.", " ", (0, s.jsx)("br", {})]
                        }), (0, s.jsxs)("div", {
                            className: o()("customInput", p().modalWithdrawInput),
                            style: {
                                marginTop: "2em"
                            },
                            children: [(0, s.jsx)(c.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: o()("customInputLabel"),
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "withdraw-robux.tsx",
                                children: "Delivery"
                            }), (0, s.jsxs)("div", {
                                className: o()("customInputInner"),
                                children: [(0, s.jsx)(d.Z, {
                                    as: "a",
                                    variant: "tab",
                                    isActive: "standard" === H,
                                    onClick: () => G("standard"),
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "withdraw-robux.tsx",
                                    children: "Standard Delivery"
                                }), (0, s.jsx)(d.Z, {
                                    as: "a",
                                    variant: "tab",
                                    isActive: "instant" === H,
                                    onClick: () => G("instant"),
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "withdraw-robux.tsx",
                                    children: "Instant Delivery"
                                })]
                            })]
                        }), L && L.bonusWallet ? (0, s.jsxs)(c.Z, {
                            element: "p",
                            textType: "labelsRegular",
                            className: o()("customInputLabel"),
                            children: ["You have", " ", (0, s.jsxs)("b", {
                                children: [(0, v.Z)((0, Z.Z)(L.bonusWallet)), " "]
                            }), "Robux that need to be wagered before they can be withdrawn."]
                        }) : "", _ && _ >= 1e4 ? (0, s.jsxs)("div", {
                            style: {
                                display: "flex",
                                marginTop: "1em"
                            },
                            children: [(0, s.jsx)(C.Z, {
                                type: "checkbox",
                                checked: F,
                                onChange: e => {
                                    A(e.target.checked)
                                }
                            }), (0, s.jsxs)(c.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: o()("customInputLabel"),
                                style: {
                                    marginLeft: "1em"
                                },
                                children: ["I agree that withdrawing more than 10,000 Robux will be slower, depending on the delivery choice. ", (0, s.jsx)("br", {}), 'since Bflip will "drip-feed" the payout to keep my Roblox account safe. ', (0, s.jsx)("br", {}), "Instead, I can use the", " ", (0, s.jsx)(I(), {
                                    passHref: !0,
                                    onClick: closeModal,
                                    href: "/marketplace",
                                    style: {
                                        textDecoration: "none",
                                        color: "#fcb122"
                                    },
                                    children: "Limiteds Shop, where I can withdraw millions of Robux instantly."
                                })]
                            })]
                        }) : "", (0, s.jsx)(d.Z, {
                            onClick: () => handleWithdraw("WITHDRAW"),
                            variant: "primary",
                            disabled: i || j,
                            className: p().modalWithdrawButton,
                            style: E.width < 767 ? {
                                width: "100%"
                            } : {},
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "withdraw-robux.tsx",
                            children: i ? "Please wait..." : "Withdraw Robux"
                        }), P > 10 && (0, s.jsx)(d.Z, {
                            className: "",
                            onClick: () => handleWithdraw("CANCEL_PENDING"),
                            disabled: i || j,
                            style: E.width < 767 ? {
                                marginTop: "1em"
                            } : {
                                marginLeft: "2em"
                            },
                            variant: "danger",
                            children: j ? "Cancelling..." : "Cancel all pending withdrawals"
                        }), (0, s.jsx)(d.Z, {
                            onClick: closeModal,
                            className: p().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "withdraw-robux.tsx"
                        })]
                    })
                })
            })
        },
        90381: function(e) {
            e.exports = {
                checkbox: "checkbox_checkbox__O5kmi"
            }
        }
    }
]);