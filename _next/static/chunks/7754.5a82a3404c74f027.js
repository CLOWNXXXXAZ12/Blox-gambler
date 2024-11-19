! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c8f0f3e7-4cd5-490b-8479-b6b63f546a56", e._sentryDebugIdIdentifier = "sentry-dbid-c8f0f3e7-4cd5-490b-8479-b6b63f546a56")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7754], {
        60970: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return Checkbox
                }
            });
            var s = a(85893);
            a(67294);
            var l = a(93967),
                n = a.n(l),
                o = a(90381),
                d = a.n(o);

            function Checkbox(e) {
                let {
                    className: t,
                    type: a = "checkbox",
                    ...l
                } = e;
                return (0, s.jsx)("input", {
                    type: a,
                    className: n()(d().checkbox, t),
                    ...l,
                    "data-sentry-component": "Checkbox",
                    "data-sentry-source-file": "checkbox.tsx"
                })
            }
        },
        6009: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return TipModal
                }
            });
            var s = a(85893),
                l = a(67294),
                n = a(2664),
                o = a(83253),
                d = a.n(o),
                i = a(93967),
                r = a.n(i),
                c = a(74344),
                u = a(62961),
                p = a(87116),
                m = a(4595),
                f = a(77579),
                y = a(791),
                x = a(8210),
                h = a.n(x),
                g = a(60970),
                b = a(30381),
                v = a.n(b);

            function TipModal(e) {
                var t;
                let {
                    className: a
                } = e, o = (0, n.I0)(), {
                    showTipModal: i
                } = (0, n.v9)(e => e.auth), [x, b] = (0, l.useState)(!1), [T, k] = (0, l.useState)(""), [M, w] = (0, l.useState)(!1), C = l.useMemo(() => (0, p.P)("margin"), ["margin"]), openModal = () => {
                    b(!0), document.body.style.overflow = "hidden", document.body.style.paddingRight = C.gap + "px"
                }, closeModal = () => {
                    o({
                        type: u.NZ
                    }), b(!1), w(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                };
                return (0, l.useEffect)(() => {
                    var e, t;
                    (null == i ? void 0 : null === (e = i.message) || void 0 === e ? void 0 : e.message) && k(null == i ? void 0 : null === (t = i.message) || void 0 === t ? void 0 : t.message)
                }, [null == i ? void 0 : null === (t = i.message) || void 0 === t ? void 0 : t.message]), (0, l.useEffect)(() => {
                    i.show ? openModal() : closeModal()
                }, [null == i ? void 0 : i.show]), (0, l.useEffect)(() => {
                    let e = localStorage.getItem("fastTipBypass");
                    if (e) {
                        let {
                            value: t,
                            expiry: a
                        } = JSON.parse(e);
                        v()().isBefore(a) ? w(t) : (localStorage.removeItem("fastTipBypass"), w(!1))
                    }
                }, []), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(d(), {
                        isOpen: x,
                        onRequestClose: closeModal,
                        contentLabel: "Tip modal",
                        className: r()(h().defaultModal, h().modalChatRules, h().modalWithdraw, a),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "TipModal.tsx",
                        children: [(0, s.jsx)(y.Z, {
                            element: "h2",
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "TipModal.tsx",
                            children: "Tip user"
                        }), (0, s.jsxs)(f.Z, {
                            element: "p",
                            textType: "regular14",
                            style: {
                                marginTop: "20px"
                            },
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "TipModal.tsx",
                            children: ["You are about to tip ", (0, s.jsx)("b", {
                                children: T.split(" ")[1]
                            }), " ", T.split(" ")[2], " F$ from your balance"]
                        }), (0, s.jsxs)(f.Z, {
                            element: "p",
                            textType: "regular14",
                            style: {
                                marginTop: "20px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            },
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "TipModal.tsx",
                            children: [(0, s.jsx)(g.Z, {
                                type: "checkbox",
                                checked: M,
                                onChange: e => w(e.target.checked),
                                "data-sentry-element": "Checkbox",
                                "data-sentry-source-file": "TipModal.tsx"
                            }), "Don't ask me for tip confirmations"]
                        }), (0, s.jsxs)("div", {
                            className: h().btnWrapper,
                            children: [(0, s.jsx)(m.Z, {
                                style: {
                                    width: "100%",
                                    marginTop: "1em"
                                },
                                variant: "primary",
                                onClick: () => {
                                    if (M) {
                                        let e = v()().add(30, "days").valueOf();
                                        localStorage.setItem("fastTipBypass", JSON.stringify({
                                            value: !0,
                                            expiry: e
                                        }))
                                    } else localStorage.removeItem("fastTipBypass");
                                    c.pi.emit("send-chat-message", T), closeModal()
                                },
                                className: h().modalWithdrawButton,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "TipModal.tsx",
                                children: "Tip"
                            }), (0, s.jsx)(m.Z, {
                                style: {
                                    width: "100%",
                                    marginTop: "1em"
                                },
                                variant: "danger",
                                onClick: closeModal,
                                className: h().modalWithdrawButton,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "TipModal.tsx",
                                children: "Cancel"
                            })]
                        }), (0, s.jsx)(m.Z, {
                            onClick: closeModal,
                            className: h().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "TipModal.tsx"
                        })]
                    })
                })
            }
            d().setAppElement("#__next")
        },
        90381: function(e) {
            e.exports = {
                checkbox: "checkbox_checkbox__O5kmi"
            }
        }
    }
]);