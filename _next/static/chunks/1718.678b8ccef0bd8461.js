! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0eeedf60-caff-439e-a19a-e33d7f682a29", e._sentryDebugIdIdentifier = "sentry-dbid-0eeedf60-caff-439e-a19a-e33d7f682a29")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1718], {
        31718: function(e, t, s) {
            s.r(t);
            var a = s(85893),
                o = s(67294),
                r = s(83253),
                n = s.n(r),
                l = s(93967),
                d = s.n(l),
                i = s(2664),
                c = s(4595),
                m = s(77579),
                p = s(791),
                u = s(58733),
                y = s(8210),
                f = s.n(y),
                x = s(87116),
                h = s(62961),
                g = s(2181),
                b = s(86501);
            n().setAppElement("#__next"), t.default = (0, i.$j)(e => ({
                showPromoDeposit: e.auth.showPromoDeposit
            }))(function(e) {
                let {
                    className: t,
                    showPromoDeposit: s
                } = e, [r, l] = (0, o.useState)(!1), [y, j] = (0, o.useState)(""), [w, M] = (0, o.useState)(!1), N = o.useMemo(() => (0, x.P)("margin"), ["margin"]), Z = (0, i.I0)(), handleRedeem = async () => {
                    if (!y) return b.ZP.error("Please enter valid coupon code");
                    l(!0);
                    try {
                        let e = await (0, g.oux)(y);
                        l(!1);
                        let t = "string" == typeof e.message ? e.message : "Redeeemed successfully";
                        b.ZP.success(null != t ? t : ""), Z({
                            type: h.xf
                        }), Z({
                            type: h.Fv
                        }), Z({
                            type: h.nX
                        }), Z({
                            type: h.Nq
                        })
                    } catch (e) {
                        if (l(!1), e.response && e.response.data && e.response.data.errors)
                            for (let t = 0; t < e.response.data.errors.length; t++) {
                                let s = e.response.data.errors[t];
                                b.ZP.error(s.msg)
                            } else e.response && e.response.data && e.response.data.error ? b.ZP.error(e.response.data.error) : b.ZP.error("There was an error while claiming this coupon code. Please try again later!")
                    }
                };

                function closeModal() {
                    Z({
                        type: h.Nq
                    }), Z({
                        type: h.Mr
                    }), M(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }
                return (0, o.useEffect)(() => {
                    s ? (M(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = N.gap + "px"
                    }, 0)) : !1 === s && closeModal()
                }, [s]), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(n(), {
                        isOpen: w,
                        onRequestClose: closeModal,
                        contentLabel: "Replenishment modal",
                        className: d()(f().defaultModal, f().modalDeposit, t),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "promo-deposit.tsx",
                        children: [(0, a.jsxs)("div", {
                            className: f().defaultModalBreadcrumbs,
                            children: [(0, a.jsx)(c.Z, {
                                className: f().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "promo-deposit.tsx",
                                children: (0, a.jsx)(m.Z, {
                                    onClick: closeModal,
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "promo-deposit.tsx",
                                    children: "Deposit"
                                })
                            }), (0, a.jsx)(c.Z, {
                                className: f().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "promo-deposit.tsx",
                                children: (0, a.jsx)(m.Z, {
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "promo-deposit.tsx",
                                    children: "Promocode"
                                })
                            })]
                        }), (0, a.jsx)("br", {}), (0, a.jsx)(p.Z, {
                            element: "h2",
                            className: f().modalDepositTitle,
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "promo-deposit.tsx",
                            children: "Promo code"
                        }), (0, a.jsx)(m.Z, {
                            element: "p",
                            textType: "regular14",
                            className: f().modalDepositText,
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "promo-deposit.tsx",
                            children: "Discounts or FlipCoins from a promo code that you have"
                        }), (0, a.jsx)("br", {}), (0, a.jsx)("div", {
                            className: d()("customInput", f().modalDepositInput),
                            children: (0, a.jsx)("div", {
                                className: d()("customInputInner"),
                                children: (0, a.jsx)(u.Z, {
                                    placeholder: "Enter your Promo Code",
                                    value: y,
                                    onChange: e => j(e.target.value),
                                    "data-sentry-element": "Input",
                                    "data-sentry-source-file": "promo-deposit.tsx"
                                })
                            })
                        }), (0, a.jsx)(c.Z, {
                            onClick: handleRedeem,
                            variant: "primary",
                            className: f().modalDepositButton,
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "promo-deposit.tsx",
                            children: r ? "Redeeming" : "Redeem"
                        }), (0, a.jsx)(c.Z, {
                            onClick: closeModal,
                            className: f().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "promo-deposit.tsx"
                        })]
                    })
                })
            })
        }
    }
]);