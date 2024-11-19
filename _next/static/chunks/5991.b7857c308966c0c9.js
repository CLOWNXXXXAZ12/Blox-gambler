! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "19b7c97c-9585-4616-ab46-d37f4b130eb1", e._sentryDebugIdIdentifier = "sentry-dbid-19b7c97c-9585-4616-ab46-d37f4b130eb1")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5991], {
        95991: function(e, t, o) {
            o.r(t);
            var n = o(85893),
                a = o(67294),
                s = o(83253),
                l = o.n(s),
                d = o(93967),
                r = o.n(d),
                i = o(2664),
                c = o(791),
                u = o(87116),
                m = o(8210),
                y = o.n(m),
                f = o(62961),
                g = o(11163),
                b = o(4595);
            l().setAppElement("#__next"), t.default = (0, i.$j)(e => ({
                showConfirmLogout: e.auth.showConfirmLogout
            }))(function(e) {
                let {
                    className: t,
                    showConfirmLogout: o
                } = e, [s, d] = (0, a.useState)(!1), m = (0, i.I0)(), h = (0, g.useRouter)(), p = a.useMemo(() => (0, u.P)("margin"), ["margin"]);

                function closeModal() {
                    m({
                        type: f._x
                    }), d(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }
                return (0, a.useEffect)(() => {
                    o ? (d(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = p.gap + "px"
                    }, 0)) : closeModal()
                }, [o]), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(l(), {
                        isOpen: s,
                        onRequestClose: closeModal,
                        contentLabel: "Withdraw modal",
                        className: r()(y().defaultModal, y().modalMoneyManage, y().modalMoneyManageWithdraw, t),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "confirm-logout.tsx",
                        children: [(0, n.jsx)(c.Z, {
                            style: {
                                marginBottom: "2em"
                            },
                            element: "h2",
                            className: y().modalMoneyManageTitle,
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "confirm-logout.tsx",
                            children: "Do you want to logout?"
                        }), (0, n.jsxs)("div", {
                            className: y().modalMoneyManageOptions,
                            children: [(0, n.jsx)(b.Z, {
                                onClick: () => closeModal(),
                                variant: "primary",
                                className: y().modalWithdrawButton,
                                style: {
                                    marginTop: "0"
                                },
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "confirm-logout.tsx",
                                children: "No"
                            }), (0, n.jsx)(b.Z, {
                                onClick: () => {
                                    m({
                                        type: f.Nv
                                    }), closeModal(), h.push("/")
                                },
                                variant: "danger",
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "confirm-logout.tsx",
                                children: "Yes"
                            })]
                        }), (0, n.jsx)(b.Z, {
                            onClick: closeModal,
                            className: y().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "confirm-logout.tsx"
                        })]
                    })
                })
            })
        }
    }
]);