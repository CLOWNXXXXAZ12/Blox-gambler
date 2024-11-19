! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8a2f63f5-31a8-4121-ae54-08cfa72e345e", e._sentryDebugIdIdentifier = "sentry-dbid-8a2f63f5-31a8-4121-ae54-08cfa72e345e")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8102], {
        38102: function(e, a, t) {
            t.r(a);
            var s = t(85893),
                l = t(67294),
                n = t(83253),
                d = t.n(n),
                i = t(93967),
                r = t.n(i),
                o = t(4595),
                c = t(77579),
                u = t(791),
                p = t(62961),
                m = t(87116),
                y = t(2664),
                f = t(8210),
                h = t.n(f),
                x = t(2181),
                g = t(86501);
            d().setAppElement("#__next"), a.default = (0, y.$j)(e => ({
                showPaygardenDeposit: e.auth.showPaygardenDeposit,
                isAuthenticated: e.auth.isAuthenticated,
                user: e.auth.user
            }))(function(e) {
                let {
                    className: a,
                    showPaygardenDeposit: t,
                    isAuthenticated: n,
                    user: i
                } = e, [f, b] = (0, l.useState)(!1), [j, M] = (0, l.useState)(!0), [w, v] = (0, l.useState)(!0), [N, T] = (0, l.useState)(!0), Z = (0, y.I0)(), D = l.useMemo(() => (0, m.P)("margin"), ["margin"]), validatePayGardenDailyDepositLimit = async () => {
                    try {
                        let e = await (0, x.Qiv)();
                        if (!e.success) {
                            T(!0), v(!1);
                            return
                        }
                        e.hitPayGardenLimit ? (T(!0), v(!1), g.ZP.error("The daily limit for PayGarden deposits has been reached. Retry later.")) : T(!1)
                    } catch (e) {
                        console.log(e), T(!0), v(!1)
                    }
                };
                async function openModal() {
                    b(!0), v(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = D.gap + "px"
                    }, 0), await validatePayGardenDailyDepositLimit()
                }

                function closeModal() {
                    Z({
                        type: p.vO
                    }), b(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }
                return (0, l.useEffect)(() => {
                    t ? openModal() : !1 === t && closeModal()
                }, [t]), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(d(), {
                        isOpen: f,
                        onRequestClose: closeModal,
                        contentLabel: "Replenishment modal",
                        className: r()(h().defaultModal, h().paygardenModal, h().cryptoModal, a),
                        style: {
                            content: j ? {
                                padding: "0"
                            } : {}
                        },
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "paygarden-modal.tsx",
                        children: [w ? (0, s.jsx)(c.Z, {
                            textType: "labelsSemibold",
                            className: h().waitText,
                            element: "p",
                            children: "Loading..."
                        }) : N ? (0, s.jsx)(c.Z, {
                            textType: "labelsSemibold",
                            className: h().waitText,
                            element: "p",
                            children: "The daily limit for PayGarden deposits has been reached. Retry later."
                        }) : null, !N && (j && i ? (0, s.jsx)("div", {
                            children: (0, s.jsx)("iframe", {
                                frameBorder: "0",
                                referrerPolicy: "no-referrer",
                                "aria-label": " ",
                                onLoad: () => v(!1),
                                className: h().paygardenIframe,
                                src: "https://secure.paygarden.com/pay/site/bloxflip/bloxflip?postback-url=https://payments-ipn.studs.ltd/0ef50e4f-6afd-421a-9ff2-f38168d74814/external/paygarden&account-id=".concat(i.robloxId)
                            })
                        }) : (0, s.jsxs)("div", {
                            children: [(0, s.jsx)("span", {
                                className: h().spinner
                            }), (0, s.jsxs)("div", {
                                className: h().defaultModalBreadcrumbs,
                                children: [(0, s.jsx)(o.Z, {
                                    className: h().defaultModalBreadcrumbsItem,
                                    children: (0, s.jsx)(c.Z, {
                                        onClick: closeModal,
                                        element: "span",
                                        textType: "labelsRegular",
                                        children: "Deposit"
                                    })
                                }), (0, s.jsx)(o.Z, {
                                    className: h().defaultModalBreadcrumbsItem,
                                    children: (0, s.jsx)(c.Z, {
                                        element: "span",
                                        textType: "labelsRegular",
                                        children: "Giftcard deposit"
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: h().headingWrapper,
                                children: [(0, s.jsx)(u.Z, {
                                    element: "h2",
                                    className: h().headingWrapperTitle,
                                    children: "Paygarden giftcard deposits"
                                }), (0, s.jsx)(c.Z, {
                                    className: h().headingWrapperSecondary,
                                    element: "p",
                                    textType: "regular14",
                                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum"
                                })]
                            }), (0, s.jsx)(c.Z, {
                                element: "p",
                                textType: "semibold14",
                                className: h().rateText,
                                children: "Current Rate: $4.25 = 1000 F$"
                            }), (0, s.jsx)(o.Z, {
                                onClick: () => {
                                    n && M(!0)
                                },
                                style: {
                                    width: "100%"
                                },
                                variant: "primary",
                                children: "Verify your giftcard"
                            })]
                        })), (0, s.jsx)(o.Z, {
                            onClick: closeModal,
                            className: r()(h().defaultModalClose, h().paygardenClose),
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "paygarden-modal.tsx"
                        })]
                    })
                })
            })
        }
    }
]);