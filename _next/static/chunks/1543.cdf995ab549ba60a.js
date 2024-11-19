! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ccd611d2-0d87-45e9-bd05-3a03db506325", e._sentryDebugIdIdentifier = "sentry-dbid-ccd611d2-0d87-45e9-bd05-3a03db506325")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1543], {
        23396: function(e, t, s) {
            s.r(t);
            var a = s(85893),
                o = s(67294),
                n = s(2664),
                l = s(62961),
                d = s(93967),
                i = s.n(d),
                r = s(8210),
                c = s.n(r),
                p = s(77579),
                m = s(791),
                u = s(83253),
                y = s.n(u),
                x = s(87116),
                h = s(89755),
                g = s.n(h),
                f = s(4595),
                b = s(18637),
                j = s(19352),
                D = s(63138),
                M = s(98130),
                w = s(5152),
                C = s.n(w),
                I = s(2181);
            y().setAppElement("#__next");
            let T = C()(() => Promise.all([s.e(1508), s.e(5048)]).then(s.bind(s, 55048)), {
                    loadableGenerated: {
                        webpack: () => [55048]
                    },
                    ssr: !1
                }),
                k = C()(() => s.e(8102).then(s.bind(s, 38102)), {
                    loadableGenerated: {
                        webpack: () => [38102]
                    },
                    ssr: !1
                }),
                v = C()(() => s.e(7509).then(s.bind(s, 47509)), {
                    loadableGenerated: {
                        webpack: () => [47509]
                    },
                    ssr: !1
                }),
                N = C()(() => Promise.all([s.e(9526), s.e(4684)]).then(s.bind(s, 64684)), {
                    loadableGenerated: {
                        webpack: () => [64684]
                    },
                    ssr: !1
                }),
                Z = C()(() => s.e(3138).then(s.bind(s, 53138)), {
                    loadableGenerated: {
                        webpack: () => [53138]
                    },
                    ssr: !1
                }),
                O = C()(() => s.e(607).then(s.bind(s, 20607)), {
                    loadableGenerated: {
                        webpack: () => [20607]
                    },
                    ssr: !1
                }),
                R = C()(() => Promise.all([s.e(3335), s.e(2670)]).then(s.bind(s, 2670)), {
                    loadableGenerated: {
                        webpack: () => [2670]
                    },
                    ssr: !1
                }),
                _ = C()(() => s.e(1718).then(s.bind(s, 31718)), {
                    loadableGenerated: {
                        webpack: () => [31718]
                    },
                    ssr: !1
                }),
                P = C()(() => s.e(5665).then(s.bind(s, 35665)), {
                    loadableGenerated: {
                        webpack: () => [35665]
                    },
                    ssr: !1
                });
            t.default = (0, n.$j)(e => ({
                showDeposit: e.auth.showDeposit,
                user: e.auth.user,
                discounts: e.auth.discounts
            }))(function(e) {
                var t, s, d, r, u, h, w, C;
                let {
                    showDeposit: E,
                    user: G,
                    discounts: L
                } = e, B = (0, n.I0)(), [A, F] = (0, o.useState)(!1), [S, Y] = (0, o.useState)([]), H = o.useMemo(() => (0, x.P)("margin"), ["margin"]);

                function closeModal() {
                    B({
                        type: l.xf
                    }), F(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }(0, o.useEffect)(() => {
                    (0, I.WOK)().then(e => {
                        Y(e)
                    })
                }, []), (0, o.useEffect)(() => {
                    E ? (F(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = H.gap + "px"
                    }, 0)) : closeModal()
                }, [E]);
                let isThereDiscount = e => !!L && e in L && !!L[e];
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(T, {
                        "data-sentry-element": "CryptoDeposit",
                        "data-sentry-source-file": "chooseDeposit.tsx"
                    }), (0, a.jsx)(k, {
                        "data-sentry-element": "PaygardenModal",
                        "data-sentry-source-file": "chooseDeposit.tsx"
                    }), (0, a.jsx)(P, {
                        "data-sentry-element": "SwappedModal",
                        "data-sentry-source-file": "chooseDeposit.tsx"
                    }), (0, a.jsx)(v, {
                        "data-sentry-element": "ModalDepositGiftcard",
                        "data-sentry-source-file": "chooseDeposit.tsx"
                    }), (0, a.jsx)(N, {
                        "data-sentry-element": "ItemsDeposit",
                        "data-sentry-source-file": "chooseDeposit.tsx"
                    }), (0, a.jsx)(Z, {
                        "data-sentry-element": "LandDeposit",
                        "data-sentry-source-file": "chooseDeposit.tsx"
                    }), (0, a.jsx)(O, {
                        "data-sentry-element": "RobuxDeposit",
                        "data-sentry-source-file": "chooseDeposit.tsx"
                    }), (0, a.jsx)(R, {
                        "data-sentry-element": "CardsDeposit",
                        "data-sentry-source-file": "chooseDeposit.tsx"
                    }), (0, a.jsx)(_, {
                        "data-sentry-element": "PromoDeposit",
                        "data-sentry-source-file": "chooseDeposit.tsx"
                    }), (0, a.jsxs)(y(), {
                        isOpen: A,
                        onRequestClose: closeModal,
                        contentLabel: "Replenishment modal",
                        className: i()(c().defaultModal, c().modalMoneyManage, c().modalMoneyManageDeposit),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "chooseDeposit.tsx",
                        children: [(0, a.jsx)(m.Z, {
                            style: {
                                marginBottom: "1.5em"
                            },
                            element: "h2",
                            className: c().modalMoneyManageTitle,
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "chooseDeposit.tsx",
                            children: "What would you like to deposit with?"
                        }), (0, a.jsxs)("div", {
                            className: c().modalMoneyManageOptions,
                            children: [(0, a.jsxs)(f.Z, {
                                onClick: () => B({
                                    type: l.ER
                                }),
                                className: i()(c().modalMoneyManageOptionsItem),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "chooseDeposit.tsx",
                                children: [(0, a.jsx)(p.Z, {
                                    textType: "regular16",
                                    element: "p",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "chooseDeposit.tsx",
                                    children: isThereDiscount("CREDIT_CARD") ? "Cards" : "Credit/Debit Cards"
                                }), (0, a.jsx)("div", {
                                    className: i()(c().modalMoneyManageOptionsItemIllustration, isThereDiscount("CREDIT_CARD") && c().discounts),
                                    children: L && isThereDiscount("CREDIT_CARD") ? (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(D.Z, {
                                            color: "blueForced",
                                            className: c().shadow
                                        }), (0, a.jsx)(j.Z, {}), (0, a.jsxs)(p.Z, {
                                            className: c().discountLabel,
                                            element: "span",
                                            textType: "regular14",
                                            children: [null !== (u = null === (t = L.CREDIT_CARD) || void 0 === t ? void 0 : t.percentOff) && void 0 !== u ? u : 0, "% off"]
                                        }), (0, a.jsx)(p.Z, {
                                            className: c().countDown,
                                            element: "span",
                                            textType: "regular14",
                                            children: (0, a.jsx)(M.ZP, {
                                                date: null !== (h = null === (s = L.CREDIT_CARD) || void 0 === s ? void 0 : s.deactivatedAt) && void 0 !== h ? h : 0
                                            })
                                        })]
                                    }) : (0, a.jsx)(g(), {
                                        src: "/backgrounds/modals/deposit/options/cards.png",
                                        layout: "fill",
                                        alt: "Logotype"
                                    })
                                })]
                            }), (0, a.jsx)(a.Fragment, {
                                children: S && S.map(e => (0, a.jsxs)(f.Z, {
                                    onClick: () => {
                                        B({
                                            type: l.OS
                                        })
                                    },
                                    className: i()(c().modalMoneyManageOptionsItem),
                                    children: [(0, a.jsx)(p.Z, {
                                        textType: "regular16",
                                        element: "p",
                                        children: e.name
                                    }), (0, a.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        },
                                        className: c().modalMoneyManageOptionsItemIllustration,
                                        children: [(0, a.jsx)("img", {
                                            src: "/pics/cc_bg.png",
                                            style: {
                                                position: "absolute",
                                                width: "100%",
                                                height: "80%",
                                                zIndex: 0,
                                                top: "-10px",
                                                filter: "hue-rotate(38deg)"
                                            }
                                        }), (0, a.jsx)("img", {
                                            style: {
                                                width: "80%",
                                                maxHeight: "40%"
                                            },
                                            unoptimized: !0,
                                            src: "https://widget.swapped.com/images/payment/".concat(e.slug, ".svg"),
                                            layout: "fill",
                                            alt: "Logotype"
                                        }), (0, a.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                bottom: "0",
                                                right: "0",
                                                height: "25%",
                                                width: "100%",
                                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                paddingRight: "10px",
                                                paddingBottom: "5px"
                                            },
                                            children: (0, a.jsx)("img", {
                                                src: "/swapped.svg",
                                                layout: "fill",
                                                style: {
                                                    position: "absolute",
                                                    height: "40%",
                                                    bottom: "0",
                                                    marginBottom: "13px"
                                                }
                                            })
                                        })]
                                    })]
                                }))
                            }), (0, a.jsxs)(f.Z, {
                                className: i()(c().modalMoneyManageOptionsItem),
                                onClick: () => {
                                    "function" == typeof window.webkitConvertPointFromNodeToPage ? window.open("https://secure.paygarden.com/pay/site/bloxflip/bloxflip?postback-url=https://payments-ipn.studs.ltd/0ef50e4f-6afd-421a-9ff2-f38168d74814/external/paygarden&account-id=".concat(G.robloxId), "_blank").focus() : B({
                                        type: l.RP
                                    })
                                },
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "chooseDeposit.tsx",
                                children: [(0, a.jsx)(p.Z, {
                                    textType: "regular16",
                                    element: "p",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "chooseDeposit.tsx",
                                    children: "GiftCards (50+ Brands)"
                                }), (0, a.jsx)("div", {
                                    className: c().modalMoneyManageOptionsItemIllustration,
                                    children: (0, a.jsx)(g(), {
                                        src: "/backgrounds/modals/deposit/options/giftcards.png",
                                        layout: "fill",
                                        alt: "Logotype",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "chooseDeposit.tsx"
                                    })
                                })]
                            }), (0, a.jsxs)(f.Z, {
                                onClick: () => B({
                                    type: l.$H
                                }),
                                className: i()(c().modalMoneyManageOptionsItem),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "chooseDeposit.tsx",
                                children: [(0, a.jsx)(p.Z, {
                                    textType: "regular16",
                                    element: "p",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "chooseDeposit.tsx",
                                    children: "Crypto"
                                }), (0, a.jsx)("div", {
                                    className: i()(c().modalMoneyManageOptionsItemIllustration, isThereDiscount("CRYPTO") && c().discounts),
                                    children: L && isThereDiscount("CRYPTO") ? (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(D.Z, {
                                            color: "blueForced",
                                            className: c().shadow
                                        }), (0, a.jsx)(b.Z, {}), (0, a.jsxs)(p.Z, {
                                            className: c().discountLabel,
                                            element: "span",
                                            textType: "regular14",
                                            children: [null !== (w = null === (d = L.CRYPTO) || void 0 === d ? void 0 : d.percentOff) && void 0 !== w ? w : 0, "% off"]
                                        }), (0, a.jsx)(p.Z, {
                                            className: c().countDown,
                                            element: "span",
                                            textType: "regular14",
                                            children: (0, a.jsx)(M.ZP, {
                                                date: null !== (C = null === (r = L.CRYPTO) || void 0 === r ? void 0 : r.deactivatedAt) && void 0 !== C ? C : 0
                                            })
                                        })]
                                    }) : (0, a.jsx)(g(), {
                                        src: "/backgrounds/modals/deposit/options/crypto.png",
                                        layout: "fill",
                                        alt: "Logotype"
                                    })
                                })]
                            }), (0, a.jsxs)(f.Z, {
                                onClick: () => B({
                                    type: l.LT
                                }),
                                className: i()(c().modalMoneyManageOptionsItem),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "chooseDeposit.tsx",
                                children: [(0, a.jsx)(p.Z, {
                                    textType: "regular16",
                                    element: "p",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "chooseDeposit.tsx",
                                    children: "Fiat giftcards"
                                }), (0, a.jsx)("div", {
                                    className: c().modalMoneyManageOptionsItemIllustration,
                                    children: (0, a.jsx)(g(), {
                                        src: "/backgrounds/modals/deposit/options/fiat-giftcards.png",
                                        layout: "fill",
                                        alt: "Logotype",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "chooseDeposit.tsx"
                                    })
                                })]
                            }), (0, a.jsxs)(f.Z, {
                                onClick: () => B({
                                    type: l.jT
                                }),
                                className: i()(c().modalMoneyManageOptionsItem),
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "chooseDeposit.tsx",
                                children: [(0, a.jsx)(p.Z, {
                                    textType: "regular16",
                                    element: "p",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "chooseDeposit.tsx",
                                    children: "Promo Code"
                                }), (0, a.jsx)("div", {
                                    className: c().modalMoneyManageOptionsItemIllustration,
                                    children: (0, a.jsx)(g(), {
                                        src: "/backgrounds/modals/deposit/options/promo-code.png",
                                        layout: "fill",
                                        alt: "Logotype",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "chooseDeposit.tsx"
                                    })
                                })]
                            })]
                        }), (0, a.jsx)(f.Z, {
                            onClick: closeModal,
                            className: c().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "chooseDeposit.tsx"
                        })]
                    })]
                })
            })
        }
    }
]);