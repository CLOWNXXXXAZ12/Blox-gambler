! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "13bbd222-6c30-4b56-b6e9-d90675e0facb", e._sentryDebugIdIdentifier = "sentry-dbid-13bbd222-6c30-4b56-b6e9-d90675e0facb")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2724], {
        230: function(e, t, a) {
            a.d(t, {
                C: function() {
                    return s
                }
            });
            var n = a(2664);
            let s = n.v9
        },
        82724: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return MuteModal
                }
            });
            var n = a(85893),
                s = a(67294),
                l = a(2664),
                o = a(83253),
                d = a.n(o),
                u = a(93967),
                r = a.n(u),
                i = a(74344),
                c = a(230),
                m = a(62961),
                f = a(87116),
                y = a(4595),
                M = a(77579),
                b = a(791),
                h = a(58733),
                p = a(8210),
                g = a.n(p);

            function MuteModal(e) {
                let {
                    className: t
                } = e, a = (0, l.I0)(), o = (0, c.C)(e => e.auth.showMuteModal), [u, p] = (0, s.useState)(!1), [x, w] = (0, s.useState)(null), [v, C] = (0, s.useState)(""), _ = s.useMemo(() => (0, f.P)("margin"), ["margin"]);

                function closeModal() {
                    a({
                        type: m.SM
                    }), p(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }
                return (0, s.useEffect)(() => {
                    w(o.message)
                }, [null == o ? void 0 : o.message]), (0, s.useEffect)(() => {
                    o.show ? (p(!0), C(""), document.body.style.overflow = "hidden", document.body.style.paddingRight = _.gap + "px") : closeModal()
                }, [null == o ? void 0 : o.show]), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(d(), {
                        isOpen: u,
                        onRequestClose: closeModal,
                        contentLabel: "Mute modal",
                        className: r()(g().defaultModal, g().modalChatRules, g().modalWithdraw, t),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "MuteModal.tsx",
                        children: [(0, n.jsx)(b.Z, {
                            element: "h2",
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "MuteModal.tsx",
                            children: "Mute user"
                        }), (0, n.jsxs)(M.Z, {
                            element: "p",
                            textType: "regular14",
                            style: {
                                marginTop: "20px"
                            },
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "MuteModal.tsx",
                            children: ["You are about to mute the user ", (0, n.jsx)("b", {
                                children: null == x ? void 0 : x.username
                            }), "! Please enter a reason:"]
                        }), (0, n.jsx)(h.Z, {
                            onChange: e => C(e.currentTarget.value),
                            value: v,
                            style: {
                                marginTop: "10px"
                            },
                            "data-sentry-element": "Input",
                            "data-sentry-source-file": "MuteModal.tsx"
                        }), (0, n.jsx)(y.Z, {
                            style: {
                                width: "100%",
                                marginTop: "1em"
                            },
                            variant: "primary",
                            onClick: function() {
                                i.pi.emit("send-chat-message", ".mute-user " + (null == x ? void 0 : x.userId) + " " + v), closeModal()
                            },
                            className: g().modalWithdrawButton,
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "MuteModal.tsx",
                            children: "Mute"
                        }), (0, n.jsx)(y.Z, {
                            onClick: closeModal,
                            className: g().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "MuteModal.tsx"
                        })]
                    })
                })
            }
            d().setAppElement("#__next")
        }
    }
]);