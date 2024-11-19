! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c26f12b6-b55a-4f59-ae25-ea70104e8614", e._sentryDebugIdIdentifier = "sentry-dbid-c26f12b6-b55a-4f59-ae25-ea70104e8614")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2670], {
        2670: function(e, t, a) {
            a.r(t);
            var s = a(85893),
                n = a(83253),
                o = a.n(n),
                r = a(93967),
                l = a.n(r),
                i = a(67294),
                d = a(2664),
                c = a(86664),
                u = a(54465),
                p = a(86501),
                m = a(24762),
                h = a(62961),
                y = a(39398),
                f = a(40400),
                g = a(87116),
                x = a(2181),
                w = a(8210),
                b = a.n(w),
                v = a(77579),
                C = a(791),
                S = a(58733),
                P = a(4595),
                M = a(66713),
                j = a(3558),
                _ = a.n(j);
            o().setAppElement("#__next");
            let calcFee = function(e) {
                    let t = "number" == typeof e ? e : parseFloat(e),
                        a = (t + .3) / (1 - 2.9 / 100);
                    return {
                        amount: t,
                        fee: (a - t).toFixed(2),
                        total: a.toFixed(2)
                    }
                },
                A = {
                    style: {
                        base: {
                            backgroundColor: "#282e54",
                            lineHeight: "2em",
                            borderRadius: "25px",
                            color: "#ffffff",
                            fontSize: "20px",
                            fontFamily: "Titillium Web, Roboto, Open Sans, Segoe UI, sans-serif"
                        },
                        invalid: {
                            color: "#fa755a",
                            fontSize: "20px"
                        }
                    }
                },
                decodeHash = e => e.replace(/[a-zA-Z]/g, function(e) {
                    return String.fromCharCode((e <= "Z" ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26)
                }),
                CheckoutForm = e => {
                    let {
                        rbxAmount: t,
                        fee: a,
                        rate: n,
                        setLoading: o,
                        setBtnDisabled: r,
                        btnDisabled: l,
                        stripePromise: u,
                        btnText: y,
                        sponsorCode: f,
                        pmMethod: g,
                        setPmMethod: w
                    } = e, v = (0, c.useStripe)(), C = (0, c.useElements)(), S = (0, d.I0)(), handleAttempt = () => {
                        (0, x.FOM)("Stripe").then(console.log).catch(console.error)
                    };
                    (0, i.useEffect)(() => {
                        null != g && "" != g && handleSubmit(null, g)
                    }, [g]);
                    let handleSubmit = async (e, a) => {
                        var s, n, o;
                        if (null != e && e.preventDefault(), u) {
                            if (r(!0), (s = a && "" != a ? {
                                    paymentMethod: {
                                        id: a
                                    }
                                } : await v.createPaymentMethod({
                                    type: "card",
                                    card: C.getElement(c.CardElement)
                                })).error) r(!1), console.debug(s.error.message);
                            else {
                                let e = await window.grecaptcha.enterprise.execute("6Lf3jaQpAAAAAMC8nWH5T7XlLvKxMZQva59PfzwP", {
                                    action: "PURCHASE"
                                });
                                try {
                                    let a = await (0, x.Z5X)(t / 2, s.paymentMethod.id, f, window.ga4ClientId, e);
                                    if (console.debug(a), a.success) {
                                        r(!1);
                                        try {
                                            C.getElement(c.CardElement).clear()
                                        } catch (e) {}
                                        w(null), p.ZP.success("Thank you very much for the payment! The FlipCoins have been credited to your account!")
                                    } else if (a.requires_action) {
                                        let e = await v.handleCardAction(a.payment_intent_client_secret),
                                            s = await window.grecaptcha.enterprise.execute("6Lf3jaQpAAAAAMC8nWH5T7XlLvKxMZQva59PfzwP", {
                                                action: "PURCHASE"
                                            });
                                        try {
                                            let a = await (0, x.KX5)(t / 2, e.paymentIntent.id, f, window.ga4ClientId, s);
                                            console.debug(a);
                                            try {
                                                C.getElement(c.CardElement).clear()
                                            } catch (e) {}
                                            if (w(null), a.success) {
                                                try {
                                                    let s = parseFloat(a.amount);
                                                    s && s > 0 && window.ttq && (window.ttq.track("CompletePayment", {
                                                        value: null != s ? s : 0,
                                                        currency: "USD",
                                                        content_name: "Robux",
                                                        content_type: "product",
                                                        content_id: null !== (o = null === (n = e.paymentIntent) || void 0 === n ? void 0 : n.id) && void 0 !== o ? o : "L".concat(Date.now()),
                                                        quantity: 1
                                                    }), window._tfa.push({
                                                        notify: "event",
                                                        name: "CompletePayment",
                                                        id: t
                                                    }), window.uetq.push("event", "CompletePayment", {
                                                        event_category: "",
                                                        event_label: "",
                                                        event_value: t
                                                    }))
                                                } catch (e) {
                                                    console.log(e)
                                                }
                                                r(!1), p.ZP.success("Thank you very much for the payment! The FlipCoins have been credited to your account!")
                                            } else r(!1), p.ZP.error("An unknown error occurred while trying to charge your card!")
                                        } catch (e) {
                                            r(!1), w(null);
                                            try {
                                                C.getElement(c.CardElement).clear()
                                            } catch (e) {}
                                            e.response && 400 === e.response.status ? p.ZP.error(e.response.data.error) : p.ZP.error("There was an error while depositing with your card. Please try again!!")
                                        }
                                    }
                                } catch (e) {
                                    w(null);
                                    try {
                                        C.getElement(c.CardElement).clear()
                                    } catch (e) {}
                                    r(!1), console.log("There was an error while fetching card deposit information:", e), e.response && 400 === e.response.status ? p.ZP.error(e.response.data.error) : p.ZP.error("There was an error while processing the payment. Please try again!")
                                }
                            }
                        }
                    };
                    return (0, s.jsxs)("form", {
                        "data-sentry-component": "CheckoutForm",
                        "data-sentry-source-file": "cards-deposit.tsx",
                        children: [(0, s.jsx)("div", {
                            style: {
                                borderRadius: "8px",
                                textAlign: "center",
                                backgroundColor: "#282e54"
                            },
                            children: (0, s.jsx)("div", {
                                style: {
                                    width: "98%",
                                    margin: "auto"
                                },
                                children: g && "" != g ? (0, s.jsx)("p", {
                                    children: "Please wait, we're processing your payment..."
                                }) : (0, s.jsx)(s.Fragment, {
                                    children: u && (0, s.jsx)(c.CardElement, {
                                        options: A,
                                        onFocus: () => handleAttempt()
                                    })
                                })
                            })
                        }), (0, s.jsx)(m.Z, {
                            place: "right",
                            effect: "solid",
                            textColor: "#fff",
                            className: "custom-tooltip",
                            multiline: !0,
                            backgroundColor: "#282e54",
                            "data-sentry-element": "ReactTooltip",
                            "data-sentry-source-file": "cards-deposit.tsx"
                        }), (0, s.jsxs)("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: [(0, s.jsx)(P.Z, {
                                style: {
                                    marginBottom: "2rem"
                                },
                                variant: "secondary",
                                className: b().modalDepositButton,
                                onClick: e => {
                                    e.preventDefault(), S({
                                        type: h.xf
                                    }), S({
                                        type: h.jT
                                    })
                                },
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "cards-deposit.tsx",
                                children: "Redeem Discount"
                            }), (0, s.jsx)(P.Z, {
                                "data-tip": "\n                            F$ Rate: $".concat(+(n / 2).toFixed(2), " per 1,000\n                            <br/>\n                            Fee: $0.3 + 2.9% of the amount\n                            <br />\n                            Calculated fee: $").concat(a, "\n                        "),
                                style: {
                                    marginBottom: "2rem",
                                    marginLeft: "1rem"
                                },
                                onClick: handleSubmit,
                                variant: "primary",
                                disabled: l,
                                className: b().modalDepositButton,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "cards-deposit.tsx",
                                children: y
                            })]
                        })]
                    })
                };
            t.default = (0, d.$j)(e => ({
                showCardsModal: e.auth.showCardsModal,
                fflags: e.auth.fflags
            }))(function(e) {
                var t;
                let {
                    className: a,
                    showCardsModal: n,
                    fflags: r
                } = e, [m, w] = (0, i.useState)(4.25), [j, A] = (0, i.useState)(!1), [F, T] = (0, i.useState)(""), [Z, D] = (0, i.useState)(!1), [I, E] = (0, i.useState)(!1), [k, B] = (0, i.useState)(void 0), [R, N] = (0, i.useState)(4.25), [L, U] = (0, i.useState)(0), [$, z] = (0, i.useState)(""), [q, O] = (0, i.useState)(3e3), [W, H] = (0, i.useState)(!1), G = (0, i.useRef)(null), K = (0, i.useRef)(null), [X, Q] = (0, i.useState)("https://secure.bloxbill.com/integration/bloxflip?hideCard=true"), [V, J] = (0, i.useState)({
                    width: "100%",
                    height: "50px"
                });
                (0, i.useEffect)(() => {
                    let eventListener = e => {
                        if ("bloxbill_process_alternative" === e.data.event_id) {
                            var t = e.data.pm;
                            et(1), eS(t), console.log("processing")
                        }
                        if ("bloxbill_show_3ds" === e.data.event_id) {
                            ew(!0), ev({
                                width: -1 == e.data.width ? "100%" : e.data.width + "px",
                                height: -1 == e.data.height ? "100%" : e.data.height + "px"
                            });
                            var a = e.data.acsUrl,
                                s = e.data.creq;
                            let t = document.getElementById("challengeForm");
                            t.elements.creq.value = s, t.action = a, t.submit()
                        }
                        if ("bloxbill_show_3ds_fingerprint" === e.data.event_id) {
                            ew(!0);
                            var n = e.data.methodURL,
                                o = e.data.threeDSMethodData;
                            let t = document.getElementById("challengeForm");
                            t.elements.threeDSMethodData.value = o, t.action = n, t.submit()
                        }
                        if ("bloxbill_hide_3ds" === e.data.event_id && ew(!1), "bloxbill_failure" === e.data.event_id && H(!1), "bloxbill_finalize_payment" === e.data.event_id) {
                            let postData = async () => {
                                try {
                                    let t = await (0, x._Lu)(e.data.transactionId);
                                    t && t.success ? (p.ZP.success("Thank you very much for the payment! The FlipCoins have been credited to your account! This payment was processed by BloxBill, a trusted and certified payment processor brought to you by Bflip!"), Q(X + "&t=" + Date.now()), H(!1)) : t.msg && p.ZP.error(t.msg)
                                } catch (e) {
                                    H(!1), console.log("There was an error while processing payment"), e.response && 400 === e.response.status ? p.ZP.error(e.response.data.error) : p.ZP.error("There was an error while processing the payment. Please try again!!")
                                }
                            };
                            postData()
                        }
                    };
                    return window.addEventListener("message", eventListener), () => {
                        window.removeEventListener("message", eventListener)
                    }
                }, []);
                let finalizeGooglePay = async e => {
                        H(!1), console.log("got token passed", e);
                        try {
                            let t = await (0, x.PlH)(e, calcFee(Math.round(q / 2 / 1e3 * R * 100) / 100).total);
                            t.success ? (H(!1), p.ZP.success("Thank you very much for using BloxBill, your Google Pay deposit has been processed")) : (p.ZP.error("An error occurred while processing the payment. Please try again!"), em(!1))
                        } catch (e) {
                            H(!1), e.response && 400 === e.response.status && p.ZP.error(e.response.data.error, {
                                duration: 1e4
                            })
                        }
                    },
                    finalizeApplePay = async (e, t) => {
                        H(!1), console.log("got token passed", e);
                        try {
                            let t = await (0, x.vuG)(e, calcFee(Math.round(q / 2 / 1e3 * R * 100) / 100).total);
                            if (t.success) {
                                H(!1), p.ZP.success("Thank you very much for using BloxBill, your Apple Pay deposit has been processed");
                                try {
                                    let e = {
                                        status: window.ApplePaySession.STATUS_SUCCESS
                                    };
                                    K.current.contentWindow.pspSession.completePayment(e)
                                } catch (e) {
                                    console.error(e)
                                }
                            } else {
                                let e = {
                                    status: window.ApplePaySession.STATUS_FAILURE
                                };
                                K.current.contentWindow.pspSession.completePayment(e)
                            }
                        } catch (t) {
                            H(!1);
                            let e = {
                                status: window.ApplePaySession.STATUS_FAILURE
                            };
                            K.current.contentWindow.pspSession.completePayment(e), t.response && 400 === t.response.status && p.ZP.error(t.response.data.error, {
                                duration: 1e4
                            })
                        }
                    },
                    [Y] = (0, i.useState)([2e4, 15e3, 1e4, 8e3, 6e3]),
                    [ee, et] = (0, i.useState)(0),
                    [ea, es] = (0, i.useState)(null),
                    [en, eo] = (0, i.useState)(null),
                    [er, el] = (0, i.useState)(!1),
                    [ei, ed] = (0, i.useState)(!0),
                    [ec, eu] = (0, i.useState)(!1),
                    [ep, em] = (0, i.useState)(!0),
                    [eh, ey] = (0, i.useState)(!1),
                    ef = (0, i.useRef)(null),
                    eg = (0, d.v9)(e => e.auth.user),
                    [ex, ew] = (0, i.useState)(!1),
                    [eb, ev] = (0, i.useState)({
                        width: "250px",
                        height: "400px"
                    }),
                    [eC, eS] = (0, i.useState)(null),
                    eP = (0, d.I0)(),
                    eM = i.useMemo(() => (0, g.P)("margin"), ["margin"]);

                function closeModal() {
                    eP({
                        type: h.Fv
                    }), eP({
                        type: h.Mr
                    }), A(!1), eu(!1), ed(!0), em(!0), ey(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }(0, i.useEffect)(() => {
                    r.enable_applepay2 && j && window.ApplePaySession && (window.ApplePaySession.canMakePaymentsWithActiveCard(r.applepay_merchant) ? (console.log("i can make payments!!"), ed(!0), eu(!0)) : window.ApplePaySession.canMakePayments() && (console.log("have to allow"), ed(!0), eu(!0)))
                }, [j]), (0, i.useEffect)(() => {
                    let onWindowMessage = async e => {
                        if (j && "bloxbill_applepay_payment_complete" === e.data.event_id) {
                            console.log("got data", e.data.data);
                            let t = e.data.data.token;
                            finalizeApplePay(JSON.parse(t), q)
                        }
                    };
                    return j && (console.log(r), window.addEventListener("message", onWindowMessage)), () => {
                        window.removeEventListener("message", onWindowMessage)
                    }
                }, [j, q]), (0, i.useEffect)(() => {
                    window.applePayRequest = {
                        countryCode: "DE",
                        currencyCode: "USD",
                        merchantCapabilities: ["supports3DS"],
                        supportedNetworks: ["visa", "masterCard", "amex", "discover"],
                        total: {
                            label: (0, y.Z)((0, f.Z)(q) + " F$"),
                            type: "final",
                            amount: calcFee(Math.round(q / 2 / 1e3 * R * 100) / 100).total
                        }
                    }, window.applePayRbx = q
                }, [L, q, R]);
                let getPriceEeachchange = async () => {
                    try {
                        if (2 === ee) {
                            let e = document.URL.replace("localhost", "127.0.0.1"),
                                t = await (0, x.st5)(null, q / 2, e);
                            t && "rate" in t && eo(t.rate)
                        }
                    } catch (e) {
                        console.log(e)
                    }
                };
                (0, i.useEffect)(() => {
                    j && 2 === ee && getPriceEeachchange()
                }, [j, ee, I]);
                let handleCheckoutClick = async () => {
                    if (2 === ee) try {
                        el(!0);
                        let t = document.URL.replace("localhost", "127.0.0.1"),
                            a = await (0, x.tbP)(encodeURIComponent(t), q / 2);
                        if (el(!1), a) {
                            var e;
                            let t = null !== (e = null == a ? void 0 : a.url) && void 0 !== e ? e : null;
                            t && ((0, x.FOM)("CoastalPay").then(console.log).catch(console.error), window.location.href = t)
                        }
                    } catch (e) {
                        el(!1), p.ZP.error(String(e)), console.log(e)
                    }
                };
                return ((0, i.useEffect)(() => {
                    n ? (A(!0), H(!1), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = eM.gap + "px"
                    }, 0)) : !1 === n && closeModal();
                    let fetchData = async () => {
                        try {
                            let e = await (0, x.VD)();
                            e && e.success && (null == e ? void 0 : e.preferred_method) && (null == e ? void 0 : e.available_methods) && ("CoastalPay" === e.preferred_method ? et(2) : "BloxBill" === e.preferred_method ? et(3) : et(1))
                        } catch (e) {
                            console.log(e)
                        }
                        try {
                            let e = await (0, x.jS6)();
                            if (e.success) {
                                let t = e.pKey;
                                t = decodeHash(e.pKey.substring(8)), t = e.pKey.substring(0, 8) + t, B((0, u.J)(t)), N(e.rate);
                                let a = calcFee(Math.round(q / 2 / 1e3 * e.rate * 100) / 100);
                                U(a.fee);
                                let s = calcFee(Math.round(q / 2 / 1e3 * 425) / 100);
                                z("Buy for $" + s.total)
                            } else p.ZP.error(e.msg), eP({
                                type: h.Fv
                            })
                        } catch (e) {
                            console.log("There was an error while fetching card deposit information:"), e.response && 400 === e.response.status ? p.ZP.error(e.response.data.error) : p.ZP.error("There was an error while generating the Coinbase deposit. Please try again!!"), eP({
                                type: h.Fv
                            })
                        }
                    };
                    n && fetchData()
                }, [n]), k) ? (0, s.jsx)(c.Elements, {
                    stripe: k,
                    "data-sentry-element": "Elements",
                    "data-sentry-component": "CardsDeposit",
                    "data-sentry-source-file": "cards-deposit.tsx",
                    children: (0, s.jsxs)(o(), {
                        isOpen: j,
                        onRequestClose: closeModal,
                        contentLabel: "Replenishment modal",
                        className: l()(b().defaultModal, b().modalDeposit, b().giftcardModal, a),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "cards-deposit.tsx",
                        children: [(0, s.jsxs)("div", {
                            id: "displayBox",
                            style: {
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                display: ex ? "flex" : "none",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 999999999999,
                                backdropFilter: "blur(5px)"
                            },
                            children: [(0, s.jsx)("iframe", {
                                style: {
                                    width: "".concat(eb.width),
                                    height: "".concat(eb.height),
                                    zIndex: 999999999999,
                                    border: "none",
                                    borderRadius: "8px"
                                },
                                name: "challengeIframe",
                                title: "Challenge iframe"
                            }), (0, s.jsxs)("form", {
                                id: "challengeForm",
                                target: "challengeIframe",
                                method: "post",
                                children: [(0, s.jsx)("input", {
                                    type: "hidden",
                                    name: "creq",
                                    id: "creq"
                                }), (0, s.jsx)("input", {
                                    type: "hidden",
                                    name: "threeDSMethodData",
                                    id: "threeDSMethodData"
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: b().defaultModalBreadcrumbs,
                            children: [(0, s.jsx)(P.Z, {
                                className: b().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "cards-deposit.tsx",
                                children: (0, s.jsx)(v.Z, {
                                    onClick: closeModal,
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "cards-deposit.tsx",
                                    children: "Deposit"
                                })
                            }), (0, s.jsx)(P.Z, {
                                className: b().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "cards-deposit.tsx",
                                children: (0, s.jsx)(v.Z, {
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "cards-deposit.tsx",
                                    children: "Secure Card Deposit"
                                })
                            })]
                        }), (0, s.jsx)(C.Z, {
                            style: {
                                margin: "1em 0"
                            },
                            element: "h2",
                            className: b().modalDepositTitle,
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "cards-deposit.tsx",
                            children: "Secure Card Deposit"
                        }), (0, s.jsx)("div", {
                            className: b().modalDepositOptions,
                            children: (0, s.jsxs)(v.Z, {
                                element: "p",
                                textType: "regular16",
                                className: b().modalDepositOptionsLabel,
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "cards-deposit.tsx",
                                children: ["Card payments are processed through a ", (0, s.jsx)("u", {
                                    children: "secure"
                                }), " third-party processor. Bflip does not store or process your card details."]
                            })
                        }), (0, s.jsxs)("div", {
                            className: b().modalDepositOptionsList,
                            children: [(0, s.jsxs)(P.Z, {
                                style: {
                                    marginTop: "1.5em"
                                },
                                variant: "tab",
                                onClick: () => {
                                    var e;
                                    return null === (e = G.current) || void 0 === e ? void 0 : e.focus()
                                },
                                isActive: !Y.includes(q),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "cards-deposit.tsx",
                                children: ["Custom ", (0, s.jsx)(M.Z, {
                                    "data-sentry-element": "CurrencyIcon",
                                    "data-sentry-source-file": "cards-deposit.tsx"
                                })]
                            }), Y.map((e, t) => (0, s.jsxs)(P.Z, {
                                onClick: () => {
                                    O(e);
                                    let t = calcFee(Math.round(e / 2 / 1e3 * R * 100) / 100);
                                    U(t.fee);
                                    let a = calcFee(Math.round(e / 2 / 1e3 * 425) / 100);
                                    z("Buy for $" + a.total)
                                },
                                style: {
                                    marginTop: "1.5em"
                                },
                                variant: "tab",
                                isActive: q === e,
                                children: [(0, y.Z)((0, f.Z)(e)), " ", (0, s.jsx)(M.Z, {})]
                            }, t))]
                        }), (0, s.jsxs)("div", {
                            className: l()("customInput", b().modalDepositInput),
                            style: {
                                marginBottom: 2 !== ee ? "5em" : "2.5em"
                            },
                            children: [(0, s.jsx)(v.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: l()("customInputLabel"),
                                ref: G,
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "cards-deposit.tsx",
                                children: "FlipCoins amount"
                            }), (0, s.jsxs)("div", {
                                className: l()("customInputInner"),
                                children: [(0, s.jsx)(S.Z, {
                                    type: "number",
                                    max: 5e4,
                                    min: 100,
                                    step: 100,
                                    placeholder: "Enter the amount of FlipCoins you want to buy",
                                    value: q,
                                    onBlur: e => {
                                        if (e.target.value > 1e7) {
                                            O(1e7);
                                            let e = calcFee(Math.round(50 * R * 100) / 100);
                                            U(e.fee);
                                            let t = calcFee(Math.round(21250) / 100);
                                            z("Buy for $" + t.total);
                                            return
                                        }
                                        if (e.target.value < 100) {
                                            O(100);
                                            let e = calcFee(Math.round(.05 * R * 100) / 100);
                                            U(e.fee);
                                            let t = calcFee(Math.round(21.250000000000004) / 100);
                                            z("Buy for $" + t.total);
                                            return
                                        }
                                        O(100 * Math.round(e.target.value / 100))
                                    },
                                    onChange: e => {
                                        O(e.target.value);
                                        let t = calcFee(Math.round(e.target.value / 2 / 1e3 * R * 100) / 100);
                                        U(t.fee);
                                        let a = calcFee(Math.round(e.target.value / 2 / 1e3 * 425) / 100);
                                        z("Buy for $" + a.total)
                                    },
                                    "data-sentry-element": "Input",
                                    "data-sentry-source-file": "cards-deposit.tsx"
                                }), (0, s.jsx)(v.Z, {
                                    element: "p",
                                    textType: "regular14",
                                    className: b().modalDepositInputAmount,
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "cards-deposit.tsx",
                                    children: (0, s.jsx)(M.Z, {
                                        "data-sentry-element": "CurrencyIcon",
                                        "data-sentry-source-file": "cards-deposit.tsx"
                                    })
                                })]
                            }), (0, s.jsxs)(v.Z, {
                                element: "p",
                                textType: "labelsRegular",
                                className: l()("customInputLabel"),
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "cards-deposit.tsx",
                                children: ["Enjoy the cheapest rates,", " ", (0, s.jsx)("b", {
                                    children: (0, y.Z)((0, f.Z)(.75 * q))
                                }), " ", "of those FlipCoins need to be wagered before withdrawal. The rest can be withdrawn immediately."]
                            }), ep && !ec && (0, s.jsxs)("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: [(0, s.jsx)(_(), {
                                    environment: "PRODUCTION",
                                    buttonColor: "white",
                                    onReadyToPayChange: e => {
                                        e.isReadyToPay ? (em(!0), ey(!0)) : em(!1), console.log("gpay event is", e)
                                    },
                                    paymentRequest: {
                                        apiVersion: 2,
                                        apiVersionMinor: 0,
                                        allowedPaymentMethods: [{
                                            type: "CARD",
                                            parameters: {
                                                allowedAuthMethods: ["CRYPTOGRAM_3DS"],
                                                allowedCardNetworks: ["MASTERCARD", "VISA"]
                                            },
                                            tokenizationSpecification: {
                                                type: "PAYMENT_GATEWAY",
                                                parameters: {
                                                    gateway: "acceptblue",
                                                    gatewayMerchantId: "gp_ea516d7d1673396240931156e8d1bbfa"
                                                }
                                            }
                                        }],
                                        merchantInfo: {
                                            merchantId: "BCR2DN4TSXKNX3IG",
                                            merchantName: "BloxBill"
                                        },
                                        transactionInfo: {
                                            totalPriceStatus: "FINAL",
                                            totalPriceLabel: "Total",
                                            totalPrice: calcFee(Math.round(q / 2 / 1e3 * R * 100) / 100).total,
                                            currencyCode: "USD",
                                            countryCode: "US"
                                        }
                                    },
                                    onLoadPaymentData: e => {
                                        W || (H(!0), p.ZP.loading("BloxBill is processing your payment, please wait..."), console.log("load payment data", e), finalizeGooglePay(JSON.parse(e.paymentMethodData.tokenizationData.token)))
                                    }
                                }), eh && (0, s.jsx)("div", {
                                    className: "separator",
                                    children: "Alternatively"
                                })]
                            }), ec && (0, s.jsxs)("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: [(0, s.jsx)("iframe", {
                                    ref: K,
                                    frameBorder: "0",
                                    scrolling: "no",
                                    id: "fc-iframe-wrap",
                                    className: "fc-iframe-wrap",
                                    referrerPolicy: "no-referrer",
                                    "aria-label": " ",
                                    style: {
                                        width: "200px",
                                        height: "50px",
                                        overflow: "hidden"
                                    },
                                    src: "/apple-pay.html"
                                }), ei && (0, s.jsx)("div", {
                                    className: "separator",
                                    children: "Alternatively"
                                })]
                            })]
                        }), 1 === ee && ei && k && (0, s.jsx)(CheckoutForm, {
                            fee: L,
                            rate: R,
                            sponsorCode: "",
                            stripePromise: k,
                            btnText: $,
                            setBtnDisabled: H,
                            rbxAmount: q,
                            btnDisabled: W,
                            pmMethod: eC,
                            setPmMethod: eS
                        }), 3 === ee && ei && (0, s.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: [(0, s.jsx)("iframe", {
                                src: X,
                                ref: ef,
                                style: {
                                    width: "100%",
                                    border: "none",
                                    height: "70px",
                                    display: "block",
                                    margin: "0 auto"
                                }
                            }), (0, s.jsx)(P.Z, {
                                "data-tip": "\n                            F$ Rate: $".concat(+(R / 2).toFixed(2), " per 1,000\n                            <br/>\n                            Fee: $0.3 + 2.9% of the amount\n                            <br />\n                            Calculated fee: $").concat(L, "\n                        "),
                                style: {},
                                onClick: async () => {
                                    H(!0);
                                    var e = "";
                                    try {
                                        e = await window.seon.getSession()
                                    } catch (e) {}
                                    ef.current.contentWindow.postMessage({
                                        event_id: "bloxbill_process_payment",
                                        data: {
                                            usdAmount: calcFee(Math.round(q / 2 / 1e3 * R * 100) / 100).total,
                                            merchantRef: eg.robloxId,
                                            session: e
                                        }
                                    }, "*")
                                },
                                variant: "primary",
                                disabled: W,
                                className: b().modalDepositButton,
                                children: $
                            })]
                        }), 2 === ee && (0, s.jsxs)(P.Z, {
                            style: {
                                margin: "0 auto",
                                width: "max-content"
                            },
                            variant: "primary",
                            onClick: () => handleCheckoutClick(),
                            disabled: er,
                            children: ["Buy for $", "number" == typeof en ? Math.max(0, parseFloat(null !== (t = calcFee(Math.round(q / 2 / 1e3 * en * 100) / 100).total) && void 0 !== t ? t : 0)).toFixed(2) : "--"]
                        }), (0, s.jsx)(P.Z, {
                            onClick: closeModal,
                            className: b().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "cards-deposit.tsx"
                        })]
                    })
                }) : (0, s.jsx)(s.Fragment, {})
            })
        }
    }
]);