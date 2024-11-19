! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "51f728df-dbd2-4fe2-a872-29c05e60484d", e._sentryDebugIdIdentifier = "sentry-dbid-51f728df-dbd2-4fe2-a872-29c05e60484d")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7509], {
        47509: function(e, t, a) {
            a.r(t);
            var s = a(85893),
                r = a(83253),
                n = a.n(r),
                d = a(93967),
                l = a.n(d),
                i = a(67294),
                o = a(62961),
                c = a(2664),
                u = a(39398),
                p = a(40400),
                f = a(4595),
                m = a(77579),
                g = a(791),
                y = a(58733),
                x = a(87116),
                b = a(66713),
                h = a(2181),
                w = a(8210),
                j = a.n(w),
                Z = a(86501),
                C = a(54847);
            n().setAppElement("#__next"), t.default = (0, c.$j)(e => ({
                showGiftcardDeposit: e.auth.showGiftcardDeposit
            }))(function(e) {
                let {
                    className: t,
                    showGiftcardDeposit: a
                } = e, [r, d] = (0, i.useState)(!1), [w, v] = (0, i.useState)(1666), [k, D] = (0, i.useState)(""), [I, N] = (0, i.useState)(!1), [M] = (0, i.useState)([{
                    robux: 1111,
                    giftCardUrl: "https://www.kinguin.net/category/119488/bloxflip-5-robux-balance-gift-card"
                }, {
                    robux: 2222,
                    giftCardUrl: "https://www.kinguin.net/category/119875/bloxflip-10-robux-balance-gift-card"
                }, {
                    robux: 5555,
                    giftCardUrl: "https://www.kinguin.net/category/119876/bloxflip-25-robux-balance-gift-card"
                }, {
                    robux: 11111,
                    giftCardUrl: "https://www.kinguin.net/category/119877/bloxflip-50-robux-balance-gift-card"
                }, {
                    robux: 22222,
                    giftCardUrl: "https://www.kinguin.net/category/119878/bloxflip-100-robux-balance-gift-card"
                }, {
                    robux: 55555,
                    giftCardUrl: "https://www.kinguin.net/category/119879/bloxflip-250-robux-balance-gift-card"
                }]), T = (0, c.I0)(), R = i.useMemo(() => (0, x.P)("margin"), ["margin"]);

                function closeModal() {
                    T({
                        type: o.jg
                    }), T({
                        type: o.Mr
                    }), d(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }(0, i.useEffect)(() => {
                    a ? (d(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = R.gap + "px"
                    }, 0)) : !1 === a && closeModal()
                }, [a]);
                let openLink = (e, t) => {
                        v(e), window.open(t, "_blank", "noopener,noreferrer")
                    },
                    handleDepositGiftNum = async () => {
                        N(!0);
                        try {
                            var e, t, a;
                            let s = null !== (t = C.Z.getState().auth.analyticsId2) && void 0 !== t ? t : window.analyticsId2,
                                r = await (0, h.ZO7)(k, s, window.ga4ClientId);
                            N(!1), r.success ? Z.ZP.success("Successfully deposited F$ ".concat(r.depositAmount.toFixed(2))) : Z.ZP.error(null !== (a = null == r ? void 0 : null === (e = r.data) || void 0 === e ? void 0 : e.error) && void 0 !== a ? a : "Something went wrong...")
                        } catch (e) {
                            if (N(!1), e.response && e.response.data && e.response.data.errors)
                                for (let t = 0; t < e.response.data.errors.length; t++) {
                                    let a = e.response.data.errors[t];
                                    Z.ZP.error(a.msg)
                                } else e.response && e.response.data && e.response.data.error ? Z.ZP.error(e.response.data.error) : Z.ZP.error("There was an error while requesting this withdrawal. Please try again later!")
                        }
                    };
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(n(), {
                        isOpen: r,
                        onRequestClose: closeModal,
                        contentLabel: "Replenishment modal",
                        className: l()(j().defaultModal, j().modalDeposit, j().giftcardModal, t),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "giftcard-deposit.tsx",
                        children: [(0, s.jsxs)("div", {
                            className: j().defaultModalBreadcrumbs,
                            children: [(0, s.jsx)(f.Z, {
                                className: j().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "giftcard-deposit.tsx",
                                children: (0, s.jsx)(m.Z, {
                                    onClick: closeModal,
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "giftcard-deposit.tsx",
                                    children: "Deposit"
                                })
                            }), (0, s.jsx)(f.Z, {
                                className: j().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "giftcard-deposit.tsx",
                                children: (0, s.jsx)(m.Z, {
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "giftcard-deposit.tsx",
                                    children: "Gift card"
                                })
                            })]
                        }), (0, s.jsx)(g.Z, {
                            style: {
                                margin: "1em 0"
                            },
                            element: "h2",
                            className: j().modalDepositTitle,
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "giftcard-deposit.tsx",
                            children: "Deposit Gift Card"
                        }), (0, s.jsxs)("div", {
                            className: j().modalDepositOptions,
                            children: [(0, s.jsx)(m.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: j().modalDepositOptionsLabel,
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "giftcard-deposit.tsx",
                                children: "Deposit F$ by redeeming a Ro.Market giftcard! You can buy with PayPal, credit/debit cards and other"
                            }), (0, s.jsx)("div", {
                                className: j().modalDepositOptionsList,
                                children: M.map((e, t) => {
                                    let {
                                        robux: a,
                                        giftCardUrl: r
                                    } = e;
                                    return (0, s.jsxs)(f.Z, {
                                        onClick: () => {
                                            openLink(a, r)
                                        },
                                        style: {
                                            marginTop: "1.5em"
                                        },
                                        variant: "tab",
                                        isActive: a === w,
                                        children: [(0, u.Z)((0, p.Z)(a)), " ", (0, s.jsx)(b.Z, {})]
                                    }, t)
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: l()("customInput", j().modalDepositInput),
                            children: [(0, s.jsx)(m.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: l()("customInputLabel"),
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "giftcard-deposit.tsx",
                                children: "Gift Card number"
                            }), (0, s.jsxs)("div", {
                                className: l()("customInputInner"),
                                children: [(0, s.jsx)(y.Z, {
                                    placeholder: "Enter your Gift Card number",
                                    onChange: e => D(e.target.value),
                                    value: k,
                                    "data-sentry-element": "Input",
                                    "data-sentry-source-file": "giftcard-deposit.tsx"
                                }), (0, s.jsxs)(m.Z, {
                                    element: "p",
                                    textType: "regular14",
                                    className: j().modalDepositInputAmount,
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "giftcard-deposit.tsx",
                                    children: [(0, s.jsx)(b.Z, {
                                        "data-sentry-element": "CurrencyIcon",
                                        "data-sentry-source-file": "giftcard-deposit.tsx"
                                    }), " ", w]
                                })]
                            })]
                        }), (0, s.jsx)(f.Z, {
                            onClick: handleDepositGiftNum,
                            disabled: I,
                            variant: "primary",
                            className: j().modalDepositButton,
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "giftcard-deposit.tsx",
                            children: I ? "Redeeming..." : "Redeem Giftcard"
                        }), (0, s.jsx)(f.Z, {
                            onClick: closeModal,
                            className: j().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "giftcard-deposit.tsx"
                        })]
                    })
                })
            })
        }
    }
]);