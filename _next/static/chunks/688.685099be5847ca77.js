! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "753b9af3-48ea-4b75-b905-3406508b36ff", e._sentryDebugIdIdentifier = "sentry-dbid-753b9af3-48ea-4b75-b905-3406508b36ff")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [688], {
        230: function(e, t, a) {
            "use strict";
            a.d(t, {
                C: function() {
                    return n
                }
            });
            var s = a(2664);
            let n = s.v9
        },
        60970: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return Checkbox
                }
            });
            var s = a(85893);
            a(67294);
            var n = a(93967),
                l = a.n(n),
                o = a(90381),
                d = a.n(o);

            function Checkbox(e) {
                let {
                    className: t,
                    type: a = "checkbox",
                    ...n
                } = e;
                return (0, s.jsx)("input", {
                    type: a,
                    className: l()(d().checkbox, t),
                    ...n,
                    "data-sentry-component": "Checkbox",
                    "data-sentry-source-file": "checkbox.tsx"
                })
            }
        },
        80688: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return DeleteModal
                }
            });
            var s = a(85893),
                n = a(67294),
                l = a(2664),
                o = a(83253),
                d = a.n(o),
                r = a(93967),
                c = a.n(r),
                i = a(74344),
                u = a(230),
                m = a(62961),
                f = a(87116),
                y = a(4595),
                x = a(77579),
                h = a(791),
                g = a(60970),
                p = a(58733),
                b = a(8210),
                M = a.n(b);

            function DeleteModal(e) {
                let {
                    className: t
                } = e, a = (0, l.I0)(), o = (0, u.C)(e => e.auth.showDeleteModal), [r, b] = (0, n.useState)(!1), [k, v] = (0, n.useState)(null), [D, C] = (0, n.useState)(""), [w, _] = (0, n.useState)(!1), j = n.useMemo(() => (0, f.P)("margin"), ["margin"]);

                function closeModal() {
                    a({
                        type: m.CP
                    }), b(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }
                return (0, n.useEffect)(() => {
                    v(o.message)
                }, [null == o ? void 0 : o.message]), (0, n.useEffect)(() => {
                    o.show ? (b(!0), _(!1), document.body.style.overflow = "hidden", document.body.style.paddingRight = j.gap + "px") : closeModal()
                }, [null == o ? void 0 : o.show]), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(d(), {
                        isOpen: r,
                        onRequestClose: closeModal,
                        contentLabel: "Delete modal",
                        className: c()(M().defaultModal, M().modalChatRules, M().modalWithdraw, t),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "DeleteModal.tsx",
                        children: [(0, s.jsx)(h.Z, {
                            element: "h2",
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "DeleteModal.tsx",
                            children: "Delete message"
                        }), (0, s.jsxs)(x.Z, {
                            element: "p",
                            textType: "regular14",
                            style: {
                                marginTop: "20px"
                            },
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "DeleteModal.tsx",
                            children: ["You are about to delete a message from the user ", (0, s.jsx)("b", {
                                children: null == k ? void 0 : k.username
                            }), "! Please enter a reason:"]
                        }), (0, s.jsx)(p.Z, {
                            onChange: e => C(e.currentTarget.value),
                            value: D,
                            style: {
                                marginTop: "10px"
                            },
                            "data-sentry-element": "Input",
                            "data-sentry-source-file": "DeleteModal.tsx"
                        }), (0, s.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                marginTop: "15px"
                            },
                            children: [(0, s.jsx)(g.Z, {
                                checked: w,
                                onChange: e => _(e.target.checked),
                                "data-sentry-element": "Checkbox",
                                "data-sentry-source-file": "DeleteModal.tsx"
                            }), (0, s.jsx)(x.Z, {
                                element: "p",
                                textType: "regular14",
                                style: {
                                    marginLeft: "8px"
                                },
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "DeleteModal.tsx",
                                children: "Remove all messages from user"
                            })]
                        }), (0, s.jsx)(y.Z, {
                            style: {
                                width: "100%",
                                marginTop: "1em"
                            },
                            variant: "primary",
                            onClick: function() {
                                w ? i.pi.emit("send-chat-message", ".remove-all-messages " + (null == k ? void 0 : k.userId) + " " + D) : i.pi.emit("send-chat-message", ".remove-message " + (null == k ? void 0 : k.messageId) + " " + D), closeModal()
                            },
                            className: M().modalWithdrawButton,
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "DeleteModal.tsx",
                            children: "Delete"
                        }), (0, s.jsx)(y.Z, {
                            onClick: closeModal,
                            className: M().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "DeleteModal.tsx"
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