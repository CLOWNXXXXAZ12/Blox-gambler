! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b4c50f23-9dff-499c-8041-8c2efdf19d21", e._sentryDebugIdIdentifier = "sentry-dbid-b4c50f23-9dff-499c-8041-8c2efdf19d21")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3138], {
        53138: function(e, t, s) {
            s.r(t);
            var a = s(85893),
                n = s(83253),
                l = s.n(n),
                o = s(93967),
                r = s.n(o),
                d = s(4595),
                i = s(77579),
                c = s(791),
                u = s(58733),
                p = s(87116),
                m = s(8210),
                y = s.n(m),
                f = s(67294),
                x = s(62961),
                h = s(2664),
                b = s(2181),
                g = s(86501);
            l().setAppElement("#__next"), t.default = (0, h.$j)(e => ({
                showLandDeposit: e.auth.showLandDeposit
            }))(function(e) {
                let {
                    className: t,
                    showLandDeposit: s
                } = e, [n, o] = (0, f.useState)(!1), m = (0, h.I0)(), j = f.useMemo(() => (0, p.P)("margin"), ["margin"]), B = (0, f.useRef)([10, 15, 20, 25, 30]), [D, I] = (0, f.useState)(10), [w, Z] = (0, f.useState)(!1);

                function closeModal() {
                    m({
                        type: x.By
                    }), m({
                        type: x.Mr
                    }), o(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }(0, f.useEffect)(() => {
                    s ? (o(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = j.gap + "px"
                    }, 0)) : !1 === s && closeModal()
                }, [s]);
                let handleLandDeposit = async () => {
                    Z(!0);
                    try {
                        let e = await (0, b.x$_)(D);
                        Z(!1), e.success ? g.ZP.success("Successfully deposited F$ ".concat(e.depositAmount.toFixed(2), " from Blox.Land. Thank you!")) : g.ZP.error(e.data.error)
                    } catch (e) {
                        if (Z(!1), e.response && e.response.data && e.response.data.errors)
                            for (let t = 0; t < e.response.data.errors.length; t++) {
                                let s = e.response.data.errors[t];
                                g.ZP.error(s.msg)
                            } else e.response && e.response.data && e.response.data.error ? g.ZP.error(e.response.data.error) : g.ZP.error("There was an error while requesting this withdrawal. Please try again later!")
                    }
                };
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(l(), {
                        isOpen: n,
                        onRequestClose: closeModal,
                        contentLabel: "Replenishment modal",
                        className: r()(y().defaultModal, y().modalDeposit, t),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "land-deposit.tsx",
                        children: [(0, a.jsxs)("div", {
                            className: y().defaultModalBreadcrumbs,
                            children: [(0, a.jsx)(d.Z, {
                                className: y().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "land-deposit.tsx",
                                children: (0, a.jsx)(i.Z, {
                                    onClick: closeModal,
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "land-deposit.tsx",
                                    children: "Deposit"
                                })
                            }), (0, a.jsx)(d.Z, {
                                className: y().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "land-deposit.tsx",
                                children: (0, a.jsx)(i.Z, {
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "land-deposit.tsx",
                                    children: "Blox.land"
                                })
                            })]
                        }), (0, a.jsx)(c.Z, {
                            style: {
                                margin: "1em 0"
                            },
                            element: "h2",
                            className: y().modalDepositTitle,
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "land-deposit.tsx",
                            children: "Deposit From Blox.Land"
                        }), (0, a.jsxs)(i.Z, {
                            element: "p",
                            textType: "regular14",
                            className: y().modalDepositText,
                            style: {
                                marginBottom: "1.5em"
                            },
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "land-deposit.tsx",
                            children: ["Deposit F$ from your Blox.Land balance. Blox.Land is a quick and easy way to earn free F$ ", (0, a.jsx)("br", {}), " by completing fun tasks and offers!"]
                        }), (0, a.jsxs)("div", {
                            className: r()("customInput", y().modalDepositInput),
                            children: [(0, a.jsx)(i.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: r()("customInputLabel"),
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "land-deposit.tsx",
                                children: "Amount of FlipCoins"
                            }), (0, a.jsxs)("div", {
                                className: r()("customInputInner"),
                                children: [(0, a.jsx)(u.Z, {
                                    hasCurrencyIcon: !0,
                                    placeholder: "Enter Amount of FlipCoins",
                                    value: D,
                                    type: "number",
                                    onChange: e => I(parseInt(e.target.value)),
                                    "data-sentry-element": "Input",
                                    "data-sentry-source-file": "land-deposit.tsx"
                                }), (0, a.jsx)("div", {
                                    className: r()("customInputInnerButtons"),
                                    children: B.current.map((e, t) => (0, a.jsx)(d.Z, {
                                        onClick: () => I(e),
                                        variant: "inputButton",
                                        children: e
                                    }, t))
                                })]
                            })]
                        }), (0, a.jsx)(d.Z, {
                            variant: "primary",
                            className: y().modalDepositButton,
                            onClick: handleLandDeposit,
                            disabled: w,
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "land-deposit.tsx",
                            children: w ? "Depositing..." : "Deposit from Blox.Land"
                        }), (0, a.jsx)(d.Z, {
                            onClick: closeModal,
                            className: y().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "land-deposit.tsx"
                        })]
                    })
                })
            })
        }
    }
]);