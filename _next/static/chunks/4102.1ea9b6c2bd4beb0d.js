! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8dcc17ce-abfa-4b3a-9fdc-745ec9aa3c62", e._sentryDebugIdIdentifier = "sentry-dbid-8dcc17ce-abfa-4b3a-9fdc-745ec9aa3c62")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4102], {
        74102: function(e, t, o) {
            o.r(t);
            var a = o(85893),
                s = o(67294),
                i = o(83253),
                l = o.n(i),
                n = o(93967),
                r = o.n(n),
                d = o(4595),
                u = o(77579),
                c = o(791),
                h = o(87116),
                m = o(8210),
                p = o.n(m),
                y = o(2664),
                f = o(62961);
            let w = [{
                label: "What is Bflip?",
                values: ["Bflip is the #1 social casino for wagering FlipCoins! Deposit fiat, crypto, FlipCoins, and limiteds to receive a balance on the site to start playing! Cashout your FlipCoins into your account or choose from our large selection of Limiteds to cash out to as well."]
            }, {
                label: "Why do you need my password/cookie?",
                values: ["This is needed so that you can deposit FlipCoins from your account with your onsite balance. We don’t hold your FlipCoins when you deposit it, but rather we utilize a p2p system for our withdraws which would not be possible without access to your account. It also makes it more convenient and faster to receive your FlipCoins and Limiteds from withdraws. We use state-of-the-art encryption and security measures to store your cookie and we do not have access to your password. With millions of FlipCoins processed through our website every day, rest assured that you will not need to worry."]
            }, {
                label: "How do I deposit FlipCoins to play?",
                values: ["Click on the top right and press the plus button, you will have different options for depositing on the website."]
            }, {
                label: "How do I know that the games are fair?",
                values: ["At Bflip, we utilize probability fair for all our game modes so it’s mathematically proven that all our games are fair. We utilize the EOS blockchain to make sure random numbers are generated for each. We have a flat 5% house edge on all our game modes."]
            }, {
                label: "Help! There is an issue with the site and I’m not sure what to do!",
                values: ["Contact our support team by clicking the intercom button on the bottom right of the page. You’ll have a support agent that should guide you through solving whatever problem you’re experiencing. Alternatively, you can join our Discord and ask for help there."]
            }, {
                label: "How do I tip?",
                values: ["Use the command “.tip (username) (amount)” in the chat without quotes to send a tip to another user. This sends FlipCoins to their account. Please note, if you have more than three accounts you will be prohibited from tipping!"]
            }, {
                label: "How do I rain?",
                values: ["Use the command “.rain (amount)” in the chat without quotes to rain your FlipCoins to other users!"]
            }, {
                label: "Is this legal?",
                values: ["Bflip is a completely legal social casino and is registered under the company entity “Based Plate Studios LLC”. For more information, view our terms of service."]
            }, {
                label: "I have a business or legal inquiry",
                values: ["support@bflip.gg"]
            }];
            l().setAppElement("#__next"), t.default = (0, y.$j)(e => ({
                showFaq: e.auth.showFaq
            }))(function(e) {
                let {
                    className: t,
                    showFaq: o
                } = e, [i, n] = (0, s.useState)(!1), m = (0, y.I0)(), b = s.useMemo(() => (0, h.P)("margin"), ["margin"]);

                function closeModal() {
                    m({
                        type: f.we
                    }), n(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }
                return (0, s.useEffect)(() => {
                    o ? (n(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = b.gap + "px"
                    }, 0)) : !1 === o && closeModal()
                }, [o]), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(l(), {
                        isOpen: i,
                        onRequestClose: closeModal,
                        contentLabel: "Withdraw modal",
                        className: r()(p().defaultModal, p().modalWithdraw, t),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "faq-modal.tsx",
                        children: [(0, a.jsx)(c.Z, {
                            element: "h2",
                            className: p().modalDepositTitle,
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "faq-modal.tsx",
                            children: "FAQ"
                        }), w.map((e, t) => {
                            let {
                                label: o,
                                values: s
                            } = e;
                            return (0, a.jsxs)(u.Z, {
                                className: p().modalWithdrawText,
                                element: "p",
                                textType: "regular14",
                                style: {
                                    margin: "2em 0"
                                },
                                children: [(0, a.jsxs)("b", {
                                    children: [t + 1, " - ", o]
                                }), ".", (0, a.jsx)("div", {
                                    style: {
                                        width: "100%"
                                    },
                                    children: s.map((e, t) => (0, a.jsx)("p", {
                                        style: {
                                            margin: ".7em 0"
                                        },
                                        children: e
                                    }, t))
                                })]
                            }, t)
                        }), (0, a.jsx)(d.Z, {
                            style: {
                                width: "100%",
                                marginTop: "0em"
                            },
                            variant: "primary",
                            onClick: closeModal,
                            className: p().modalWithdrawButton,
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "faq-modal.tsx",
                            children: "Close"
                        }), (0, a.jsx)(d.Z, {
                            onClick: closeModal,
                            className: p().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "faq-modal.tsx"
                        })]
                    })
                })
            })
        }
    }
]);