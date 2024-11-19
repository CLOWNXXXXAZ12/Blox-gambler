! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9b8d43d0-d89d-4722-942c-c545cfff7466", e._sentryDebugIdIdentifier = "sentry-dbid-9b8d43d0-d89d-4722-942c-c545cfff7466")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [902], {
        902: function(e, t, a) {
            a.r(t);
            var s = a(85893),
                n = a(67294),
                d = a(83253),
                l = a.n(d),
                o = a(93967),
                r = a.n(o),
                i = a(2664),
                m = a(89755),
                c = a.n(m),
                u = a(77579),
                y = a(791),
                f = a(87116),
                h = a(8210),
                w = a.n(h),
                p = a(62961),
                x = a(11163),
                g = a(4595),
                M = a(5152),
                b = a.n(M);
            l().setAppElement("#__next");
            let j = b()(() => a.e(5386).then(a.bind(a, 25386)), {
                loadableGenerated: {
                    webpack: () => [25386]
                },
                ssr: !1
            });
            t.default = (0, i.$j)(e => ({
                showWithdraw: e.auth.showWithdraw
            }))(function(e) {
                let {
                    className: t,
                    showWithdraw: a
                } = e, [d, o] = (0, n.useState)(!1), m = (0, i.I0)(), h = (0, x.useRouter)(), M = n.useMemo(() => (0, f.P)("margin"), ["margin"]);

                function closeModal() {
                    m({
                        type: p.xm
                    }), o(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }
                return (0, n.useEffect)(() => {
                    a ? (o(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = M.gap + "px"
                    }, 0)) : closeModal()
                }, [a]), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(j, {
                        "data-sentry-element": "ModalWithdrawRobux",
                        "data-sentry-source-file": "withdraw-modal.tsx"
                    }), (0, s.jsxs)(l(), {
                        isOpen: d,
                        onRequestClose: closeModal,
                        contentLabel: "Withdraw modal",
                        className: r()(w().defaultModal, w().modalMoneyManage, w().modalMoneyManageWithdraw, t),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "withdraw-modal.tsx",
                        children: [(0, s.jsx)(y.Z, {
                            style: {
                                marginBottom: "1em"
                            },
                            element: "h2",
                            className: w().modalMoneyManageTitle,
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "withdraw-modal.tsx",
                            children: "What would you like to withdraw?"
                        }), (0, s.jsxs)("div", {
                            className: w().modalMoneyManageOptions,
                            children: [(0, s.jsxs)(g.Z, {
                                onClick: () => m({
                                    type: p.mI
                                }),
                                className: r()(w().modalMoneyManageOptionsItem),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "withdraw-modal.tsx",
                                children: [(0, s.jsx)(u.Z, {
                                    textType: "regular16",
                                    element: "p",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "withdraw-modal.tsx",
                                    children: "FlipCoins"
                                }), (0, s.jsx)("div", {
                                    className: w().modalMoneyManageOptionsItemIllustration,
                                    children: (0, s.jsx)(c(), {
                                        src: "/backgrounds/modals/deposit/options/robux.png",
                                        layout: "fill",
                                        alt: "Logotype",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "withdraw-modal.tsx"
                                    })
                                })]
                            }), (0, s.jsxs)(g.Z, {
                                onClick: () => {
                                    h.push("/marketplace"), m({
                                        type: p.xm
                                    })
                                },
                                className: r()(w().modalMoneyManageOptionsItem),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "withdraw-modal.tsx",
                                children: [(0, s.jsx)(u.Z, {
                                    textType: "regular16",
                                    element: "p",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "withdraw-modal.tsx",
                                    children: "Limiteds"
                                }), (0, s.jsx)("div", {
                                    className: w().modalMoneyManageOptionsItemIllustration,
                                    children: (0, s.jsx)(c(), {
                                        src: "/backgrounds/modals/deposit/options/limitdes.png",
                                        layout: "fill",
                                        alt: "Logotype",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "withdraw-modal.tsx"
                                    })
                                })]
                            })]
                        }), (0, s.jsx)(g.Z, {
                            onClick: closeModal,
                            className: w().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "withdraw-modal.tsx"
                        })]
                    })]
                })
            })
        }
    }
]);