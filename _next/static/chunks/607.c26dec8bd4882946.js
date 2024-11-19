! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "730f62e7-0426-4186-945b-6cf19ba65894", e._sentryDebugIdIdentifier = "sentry-dbid-730f62e7-0426-4186-945b-6cf19ba65894")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [607], {
        20607: function(e, t, s) {
            s.r(t);
            var a = s(85893),
                o = s(83253),
                n = s.n(o),
                r = s(93967),
                l = s.n(r),
                i = s(4595),
                u = s(77579),
                d = s(791),
                c = s(58733),
                m = s(62961),
                p = s(87116),
                h = s(8210),
                x = s.n(h),
                y = s(67294),
                b = s(2664),
                f = s(2181),
                g = s(86501),
                j = s(39398),
                R = s(40400);
            n().setAppElement("#__next"), t.default = (0, b.$j)(e => ({
                user: e.auth.user,
                showRobuxDeposit: e.auth.showRobuxDeposit,
                lastSessionRefresh: e.auth.lastSessionRefresh
            }))(function(e) {
                let {
                    className: t,
                    showRobuxDeposit: s,
                    lastSessionRefresh: o,
                    user: r
                } = e, h = (0, b.I0)(), [D, Z] = (0, y.useState)(!1), [w, v] = (0, y.useState)(10), [C, I] = (0, y.useState)(0), [M, N] = (0, y.useState)(!1), [k, B] = (0, y.useState)(), [T, P] = (0, y.useState)([10, 15, 20, 25, 30]), F = y.useMemo(() => (0, p.P)("margin"), ["margin"]), fetchData = async () => {
                    N(!0);
                    try {
                        let e = await (0, f.C6)(),
                            t = await (0, f.nXh)(),
                            s = Math.max(w, 10);
                        t.user.liquidityRemaining >= 10 && (s = t.user.liquidityRemaining), v(s), B(e.rbx), I(t.user.liquidityRemaining), P([Math.floor(e.rbx / 4), Math.floor(e.rbx / 3), Math.floor(e.rbx / 2), Math.floor(e.rbx)]), N(!1)
                    } catch (e) {
                        console.log(e), N(!1), e.response && 400 === e.response.status ? g.ZP.error(e.response.data.error) : g.ZP.error("There was an error while fetching your RBLX information. Please try again later!")
                    }
                };

                function closeModal() {
                    h({
                        type: m.Tk
                    }), h({
                        type: m.Mr
                    }), Z(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }(0, y.useEffect)(() => {
                    D && fetchData()
                }, [r, D]), (0, y.useEffect)(() => {
                    D && fetchData()
                }, [o]), (0, y.useEffect)(() => {
                    s ? (Z(!0), fetchData(), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = F.gap + "px"
                    }, 0)) : !1 === s && closeModal()
                }, [s]);
                let handleRobuxDeposit = async e => {
                    try {
                        if (void 0 !== k && e > k) {
                            g.ZP.error("You don't have that much FlipCoins");
                            return
                        }
                        if (e < 10 && e > 0) {
                            g.ZP.error("You have to liquidate at least 10 robux!");
                            return
                        }
                        N(!0);
                        let t = await (0, f.RZ0)(e);
                        if (N(!1), t.success) g.ZP.success(t.msg);
                        else {
                            g.ZP.error(t.msg);
                            return
                        }
                        v(e), I(e)
                    } catch (e) {
                        N(!1), e.response && 400 === e.response.status ? g.ZP.error(e.response.data.error) : g.ZP.error("There was an error while updating your F$ liquidation information. Please try again later!")
                    }
                };
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(n(), {
                        isOpen: D,
                        onRequestClose: closeModal,
                        contentLabel: "Replenishment modal",
                        className: l()(x().defaultModal, x().modalDeposit, t),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "robux-deposit.tsx",
                        children: [(0, a.jsxs)("div", {
                            className: x().defaultModalBreadcrumbs,
                            children: [(0, a.jsx)(i.Z, {
                                className: x().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "robux-deposit.tsx",
                                children: (0, a.jsx)(u.Z, {
                                    onClick: closeModal,
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "robux-deposit.tsx",
                                    children: "Deposit"
                                })
                            }), (0, a.jsx)(i.Z, {
                                className: x().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "robux-deposit.tsx",
                                children: (0, a.jsx)(u.Z, {
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "robux-deposit.tsx",
                                    children: "FlipCoins"
                                })
                            })]
                        }), (0, a.jsx)(d.Z, {
                            style: {
                                margin: ".3em 0 1em 0"
                            },
                            element: "h2",
                            className: x().modalDepositTitle,
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "robux-deposit.tsx",
                            children: "Deposit FlipCoins"
                        }), -1 === k ? (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: x().modalDepositOptions,
                                children: r && r._fromGameAuth ? (0, a.jsxs)(u.Z, {
                                    element: "p",
                                    textType: "regular16",
                                    className: x().modalDepositOptionsLabel,
                                    children: ["It is not possible to deposit FlipCoins from your Roblox account when you have authenticated by joining our verification game.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Bflip needs access to your Roblox account to automatically buy gamepasses on your behalf.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "You're able to set the maximum amount of FlipCoins that you want to deposit, and our system won't take more than it.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), (0, a.jsx)(i.Z, {
                                        onClick: () => {
                                            h({
                                                type: m.gr
                                            })
                                        },
                                        variant: "primary",
                                        className: x().modalDepositButton,
                                        children: "Login securely to my Roblox account"
                                    })]
                                }) : (0, a.jsxs)(u.Z, {
                                    element: "p",
                                    textType: "regular16",
                                    className: x().modalDepositOptionsLabel,
                                    children: ["It seems that your Roblox session has been ", (0, a.jsx)("u", {
                                        children: "invalidated"
                                    }), ". This can happen if you change your Roblox security settings or if you logout from all other devices.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "In order to continue with your deposit, you will have to login again to your Roblox account.", (0, a.jsx)(i.Z, {
                                        onClick: () => {
                                            h({
                                                type: m.gr
                                            })
                                        },
                                        variant: "primary",
                                        className: x().modalDepositButton,
                                        children: "Login securely to my Roblox account"
                                    })]
                                })
                            })
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("div", {
                                className: l()("customInput", x().modalDepositInput),
                                children: [(0, a.jsx)(u.Z, {
                                    element: "p",
                                    textType: "labelsRegular",
                                    className: l()("customInputLabel"),
                                    children: "Amount of FlipCoins"
                                }), (0, a.jsxs)("div", {
                                    className: l()("customInputInner"),
                                    children: [(0, a.jsx)(c.Z, {
                                        hasCurrencyIcon: !0,
                                        placeholder: "Enter Amount of FlipCoins",
                                        value: w,
                                        type: "number",
                                        onChange: e => v(parseInt(e.target.value))
                                    }), (0, a.jsx)("div", {
                                        className: l()("customInputInnerButtons"),
                                        children: T.map((e, t) => (0, a.jsx)(i.Z, {
                                            disabled: M,
                                            onClick: () => v(e),
                                            variant: "inputButton",
                                            children: (0, j.Z)((0, R.Z)(e))
                                        }, t))
                                    })]
                                })]
                            }), (0, a.jsx)(i.Z, {
                                onClick: () => handleRobuxDeposit(w),
                                variant: "primary",
                                disabled: M,
                                className: x().modalDepositButton,
                                children: M ? "Please wait..." : C >= 10 ? "Update Robux" : "Deposit Robux"
                            }), C >= 10 && !M && (0, a.jsx)(i.Z, {
                                onClick: () => handleRobuxDeposit(0),
                                variant: "danger",
                                style: {
                                    marginLeft: "1rem"
                                },
                                disabled: M,
                                className: x().modalDepositButton,
                                children: M ? "Please wait..." : "Cancel deposit"
                            })]
                        }), (0, a.jsx)(i.Z, {
                            onClick: closeModal,
                            className: x().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "robux-deposit.tsx"
                        })]
                    })
                })
            })
        }
    }
]);