! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "eea3cb59-ea3f-4d9d-ac8a-52f70095ea6e", e._sentryDebugIdIdentifier = "sentry-dbid-eea3cb59-ea3f-4d9d-ac8a-52f70095ea6e")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4684], {
        64684: function(e, a, s) {
            "use strict";
            s.r(a), s.d(a, {
                default: function() {
                    return T
                }
            });
            var t, r = s(85893),
                n = s(83253),
                l = s.n(n),
                i = s(93967),
                o = s.n(i),
                c = s(77579),
                d = s(791),
                m = s(69981),
                u = s.n(m),
                _ = s(58733),
                p = s(1773),
                C = s(66713),
                h = s(87116),
                g = s(67294),
                y = s(62961),
                x = s(2664),
                f = s(8210),
                b = s.n(f),
                G = s(2181),
                v = s(86501),
                j = s(4595);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var a = 1; a < arguments.length; a++) {
                        var s = arguments[a];
                        for (var t in s)({}).hasOwnProperty.call(s, t) && (e[t] = s[t])
                    }
                    return e
                }).apply(null, arguments)
            }
            var input_icons_currency = function(e) {
                    return g.createElement("svg", _extends({
                        width: 17,
                        height: 19,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), t || (t = g.createElement("g", {
                        clipPath: "url(#currency_svg__clip0_1_2)",
                        fill: "#000"
                    }, g.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.975 5.35 8.836 1.788a.67.67 0 0 0-.672 0L2.025 5.351a.677.677 0 0 0-.336.585v7.128c0 .241.128.465.336.585l6.139 3.564a.67.67 0 0 0 .672 0l6.139-3.564a.677.677 0 0 0 .336-.585V5.936a.677.677 0 0 0-.336-.585ZM9.509.616a2.009 2.009 0 0 0-2.018 0L1.353 4.18a2.032 2.032 0 0 0-1.01 1.757v7.128c0 .725.385 1.395 1.01 1.757l6.138 3.564a2.009 2.009 0 0 0 2.018 0l6.139-3.564a2.031 2.031 0 0 0 1.009-1.757V5.936c0-.725-.385-1.395-1.01-1.757L9.51.615Z"
                    }), g.createElement("path", {
                        d: "M3.74 13V6.2h4.34v1.2H5.12v2h2.42v1.2H5.12V13H3.74ZM13.393 11.01c0 .693-.21 1.22-.63 1.58-.42.353-.97.53-1.65.53h-.01l-.15 1.18c-.494-.02-.74-.043-.74-.07l.14-1.16c-.494-.06-.907-.13-1.24-.21l-.2-.04.13-1.04a18.68 18.68 0 0 0 1.46.15l.22-1.74c-.687-.207-1.174-.457-1.46-.75-.287-.293-.43-.693-.43-1.2 0-.66.2-1.15.6-1.47.4-.327.95-.49 1.65-.49h.13l.18-1.38h.74l-.18 1.44c.413.04.793.093 1.14.16l.17.04-.11 1.06a30.48 30.48 0 0 0-1.35-.12l-.2 1.61c.693.22 1.163.463 1.41.73.253.26.38.657.38 1.19Zm-3.23-2.86c0 .16.05.29.15.39.1.1.293.203.58.31l.17-1.39c-.6.027-.9.257-.9.69Zm1.9 2.95c0-.16-.047-.29-.14-.39-.087-.107-.247-.207-.48-.3l-.19 1.53c.54-.06.81-.34.81-.84Z"
                    }))))
                },
                Z = s(6428);
            l().setAppElement("#__next");
            var S = (0, x.$j)(e => ({
                    showItemsSemiDeposit: e.auth.showItemsSemiDeposit
                }))(function(e) {
                    let {
                        className: a,
                        showItemsSemiDeposit: s,
                        itemClicked: t
                    } = e, [n, i] = (0, g.useState)(!1), [m, u] = (0, g.useState)(!1), [f, S] = (0, g.useState)(0), [P, I] = (0, g.useState)(!1), [w, T] = (0, g.useState)(!1), [M, B] = (0, g.useState)(""), [L, N] = (0, g.useState)(), k = (0, x.I0)(), H = g.useMemo(() => (0, h.P)("margin"), ["margin"]), R = (0, Z.Z)(), {
                        fflags: A
                    } = (0, x.v9)(e => e.auth), fetchData = async e => {
                        if (!t) return;
                        let a = await (0, G.GVV)(e);
                        a.listed ? S(a.listing.itemPrice) : -1 != t.assignedValue ? S(t.assignedValue) : S(t.recentAveragePrice), N(a)
                    };

                    function closeModal() {
                        k({
                            type: y.R_
                        }), k({
                            type: y.vB
                        }), i(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                    }(0, g.useEffect)(() => (s ? (t && fetchData(null == t ? void 0 : t.userAssetId), i(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = H.gap + "px"
                    }, 0)) : !1 === s && closeModal(), () => {
                        S(0)
                    }), [s]);
                    let submitListing = async () => {
                            try {
                                if (!t) return;
                                I(!0), await (0, G.Lti)();
                                let e = await (0, G.QZi)(t.userAssetId, f);
                                I(!1), A && "limited-deposits-enabled" in A && A["limited-deposits-enabled"] && "prompt2FASecretKey" in e && e.prompt2FASecretKey && u(!0), e.success ? (v.ZP.success(e.msg), fetchData(t.userAssetId)) : v.ZP.error(e.data.error)
                            } catch (e) {
                                if (I(!1), e.response && e.response.data && e.response.data.errors)
                                    for (let a = 0; a < e.response.data.errors.length; a++) {
                                        let s = e.response.data.errors[a];
                                        v.ZP.error(s.msg)
                                    } else e.response && e.response.data && e.response.data.error ? v.ZP.error(e.response.data.error) : v.ZP.error("There was an error while trying to list your item. Please try again later!")
                            }
                        },
                        unlistItemButton = async () => {
                            I(!0);
                            try {
                                if (!t) return;
                                let e = await (0, G._Mv)(t.userAssetId);
                                I(!1), e.success ? (v.ZP.success(e.msg), fetchData(t.userAssetId)) : v.ZP.error(e.data.error)
                            } catch (e) {
                                if (I(!1), e.response && e.response.data && e.response.data.errors)
                                    for (let a = 0; a < e.response.data.errors.length; a++) {
                                        let s = e.response.data.errors[a];
                                        v.ZP.error(s.msg)
                                    } else e.response && e.response.data && e.response.data.error ? v.ZP.error(e.response.data.error) : v.ZP.error("There was an error while trying to unlist your item. Please try again later!")
                            }
                        },
                        handle2FA = async () => {
                            try {
                                if (!M) return v.ZP.error("Please enter 2FA manual key");
                                T(!0);
                                let a = await (0, G.ve9)(M);
                                if (T(!1), a) {
                                    var e;
                                    v.ZP.success(null !== (e = null == a ? void 0 : a.msg) && void 0 !== e ? e : "Your manual key was validated successfully"), t && await fetchData(t.userAssetId), u(!1), closeModal()
                                } else B(""), v.ZP.error("You have to complete the trading second factor authentication challenge before you can do this!")
                            } catch (e) {
                                T(!1), console.log(e)
                            }
                        };
                    return t ? (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(l(), {
                            isOpen: n,
                            onRequestClose: closeModal,
                            contentLabel: "Replenishment modal",
                            className: o()(b().defaultModal, b().modalSetPrice, a),
                            closeTimeoutMS: 200,
                            children: [(0, r.jsxs)("div", {
                                className: b().defaultModalBreadcrumbs,
                                children: [(0, r.jsx)(j.Z, {
                                    className: b().defaultModalBreadcrumbsItem,
                                    children: (0, r.jsx)(c.Z, {
                                        element: "span",
                                        textType: "labelsRegular",
                                        children: "Deposit"
                                    })
                                }), (0, r.jsx)(j.Z, {
                                    className: b().defaultModalBreadcrumbsItem,
                                    children: (0, r.jsx)(c.Z, {
                                        element: "span",
                                        textType: "labelsRegular",
                                        children: "Roblox Item"
                                    })
                                }), (0, r.jsx)(j.Z, {
                                    className: b().defaultModalBreadcrumbsItem,
                                    children: (0, r.jsx)(c.Z, {
                                        element: "span",
                                        textType: "labelsRegular",
                                        children: "Item Value"
                                    })
                                }), m && (0, r.jsx)(j.Z, {
                                    className: b().defaultModalBreadcrumbsItem,
                                    children: (0, r.jsx)(c.Z, {
                                        element: "span",
                                        textType: "labelsRegular",
                                        children: "Roblox 2FA Panel"
                                    })
                                }) || null]
                            }), m ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(d.Z, {
                                    style: {
                                        margin: "1.1em 0 0 0 "
                                    },
                                    element: "h2",
                                    className: o()(b().modalSetPriceTitle, b().addMargin),
                                    children: "2FA Roblox"
                                }), (0, r.jsx)(c.Z, {
                                    className: b().modalSetPriceGridMainText,
                                    element: "p",
                                    textType: "regular14",
                                    style: {
                                        margin: "5px 0"
                                    },
                                    children: "Please enter your manual two factor authentication (2FA) Key:"
                                }), (0, r.jsx)("br", {}), (0, r.jsxs)("div", {
                                    className: o()("customInput", b().modalSetPriceGridMainInput),
                                    style: {
                                        marginBottom: "20px"
                                    },
                                    children: [(0, r.jsx)(c.Z, {
                                        element: "p",
                                        textType: "labelsRegular",
                                        className: o()("customInputLabel"),
                                        children: "Manual 2FA key"
                                    }), (0, r.jsx)("div", {
                                        className: o()("customInputInner"),
                                        children: (0, r.jsx)(_.Z, {
                                            placeholder: "Manual 2FA key",
                                            type: "text",
                                            value: M,
                                            onChange: e => B(e.target.value.trim())
                                        })
                                    })]
                                }), (0, r.jsx)(j.Z, {
                                    onClick: () => handle2FA(),
                                    variant: "primary",
                                    disabled: w,
                                    children: w ? "Loading.." : "Validate"
                                })]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(d.Z, {
                                    style: {
                                        margin: "1.1em"
                                    },
                                    element: "h2",
                                    className: o()(b().modalSetPriceTitle, b().addMargin),
                                    children: "Deposit Roblox Item"
                                }), (0, r.jsxs)("div", {
                                    className: b().modalSetPriceGrid,
                                    children: [(0, r.jsx)("div", {
                                        className: b().modalSetPriceGridItem,
                                        children: (0, r.jsxs)(p.Z, {
                                            noHover: !0,
                                            itemHolder: !0,
                                            accentColor: t.color,
                                            previewUrl: "https://api.bloxflip.com/render/".concat(t.assetId),
                                            children: [(0, r.jsx)(p.Z.Title, {
                                                children: t.name
                                            }), (0, r.jsxs)(p.Z.Subtitle, {
                                                children: [-1 == t.marketValue ? t.recentAveragePrice : t.marketValue, (0, r.jsx)(C.Z, {})]
                                            })]
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: b().modalSetPriceGridMain,
                                        children: [(0, r.jsx)(c.Z, {
                                            className: b().modalSetPriceGridMainText,
                                            element: "p",
                                            textType: "regular14",
                                            style: {
                                                margin: "1em 0"
                                            },
                                            children: "Please specify the F$ price for this item:"
                                        }), (0, r.jsxs)("div", {
                                            className: o()("customInput", b().modalSetPriceGridMainInput),
                                            children: [(0, r.jsx)(c.Z, {
                                                element: "p",
                                                textType: "labelsRegular",
                                                className: o()("customInputLabel"),
                                                children: "Amount of FlipCoins"
                                            }), (0, r.jsxs)("div", {
                                                className: o()("customInputInner"),
                                                children: [(0, r.jsx)("div", {
                                                    className: o()("customInputIcon"),
                                                    children: (0, r.jsx)(input_icons_currency, {})
                                                }), (0, r.jsx)(_.Z, {
                                                    placeholder: "Amount of FlipCoins here",
                                                    style: {
                                                        paddingLeft: 39
                                                    },
                                                    type: "number",
                                                    value: f,
                                                    onChange: e => S(parseInt(e.target.value))
                                                })]
                                            })]
                                        }), (0, r.jsx)(j.Z, {
                                            onClick: submitListing,
                                            style: R.width < 767 ? {
                                                width: "100%"
                                            } : {},
                                            variant: "primary",
                                            children: P ? "Loading" : L && L.listing && L.listed ? "Update listing" : "List item"
                                        }), L && L.listing && L.listed && (0, r.jsx)(j.Z, {
                                            style: R.width < 767 ? {
                                                marginTop: "1em",
                                                width: "100%"
                                            } : {
                                                marginLeft: "2em"
                                            },
                                            variant: "danger",
                                            onClick: unlistItemButton,
                                            children: "Unlist"
                                        })]
                                    })]
                                })]
                            }), (0, r.jsx)(j.Z, {
                                onClick: closeModal,
                                className: b().defaultModalClose,
                                "aria-label": "Close"
                            })]
                        })
                    }) : (0, r.jsx)(r.Fragment, {})
                }),
                P = s(9526),
                I = s(39398),
                w = s(40400);
            l().setAppElement("#__next");
            var T = (0, x.$j)(e => ({
                showItemsDeposit: e.auth.showItemsDeposit
            }))(function(e) {
                let {
                    className: a,
                    showItemsDeposit: s
                } = e, [t, n] = (0, g.useState)(!1), i = (0, x.I0)(), [m, f] = (0, g.useState)(!1), [Z, T] = (0, g.useState)(""), M = g.useMemo(() => (0, h.P)("margin"), ["margin"]), [B, L] = (0, g.useState)(), [N, k] = (0, g.useState)([]), fetchLims = async () => {
                    f(!0);
                    try {
                        let e = await (0, G.reb)();
                        if (!e.success) throw Error("");
                        k(e.inventory), f(!1)
                    } catch (e) {
                        f(!1), console.log(e), e.response && 400 === e.response.status ? v.ZP.error(e.response.data.error) : v.ZP.error("There was an error while fetching your RBLX information. Please try again later!")
                    }
                };

                function closeModal() {
                    console.log("raan"), i({
                        type: y.Z8
                    }), i({
                        type: y.Mr
                    }), n(!1), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }
                return (0, g.useEffect)(() => {
                    !0 === s ? (fetchLims(), n(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = M.gap + "px"
                    }, 0)) : !1 === s && closeModal()
                }, [s]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(S, {
                        itemClicked: B,
                        "data-sentry-element": "ModalSetPriceDeposit",
                        "data-sentry-source-file": "items-deposit.tsx"
                    }), (0, r.jsxs)(l(), {
                        isOpen: t,
                        onRequestClose: () => closeModal(),
                        contentLabel: "Replenishment modal",
                        className: o()(b().defaultModal, b().modalListing, a),
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "items-deposit.tsx",
                        children: [(0, r.jsxs)("div", {
                            className: b().defaultModalBreadcrumbs,
                            children: [(0, r.jsx)(j.Z, {
                                className: b().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "items-deposit.tsx",
                                children: (0, r.jsx)(c.Z, {
                                    onClick: closeModal,
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "items-deposit.tsx",
                                    children: "Deposit"
                                })
                            }), (0, r.jsx)(j.Z, {
                                className: b().defaultModalBreadcrumbsItem,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "items-deposit.tsx",
                                children: (0, r.jsx)(c.Z, {
                                    element: "span",
                                    textType: "labelsRegular",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "items-deposit.tsx",
                                    children: "Roblox Item"
                                })
                            })]
                        }), (0, r.jsx)(d.Z, {
                            style: {
                                margin: "1em"
                            },
                            element: "h2",
                            className: b().modalListingTitle,
                            "data-sentry-element": "Heading",
                            "data-sentry-source-file": "items-deposit.tsx",
                            children: "Deposit Roblox Item"
                        }), (0, r.jsx)(_.Z, {
                            placeholder: "Search name of the Roblox item",
                            className: b().modalListingSearch,
                            onChange: e => T(e.target.value),
                            value: Z,
                            "data-sentry-element": "Input",
                            "data-sentry-source-file": "items-deposit.tsx"
                        }), (0, r.jsx)("div", {
                            className: o()(u().casesList, b().modalListingGrid),
                            children: m ? Array(20).fill(0).map((e, a) => (0, r.jsx)(P.Z, {
                                style: {
                                    marginBottom: "1rem",
                                    borderRadius: "15px"
                                },
                                variant: "rectangular",
                                width: "100%",
                                height: 250
                            })) : N.sort((e, a) => {
                                let s = -1 === e.marketValue ? "recentAveragePrice" : "marketValue";
                                return a[s] - e[s]
                            }).filter(e => {
                                let {
                                    name: a
                                } = e;
                                return a.toLowerCase().includes(Z.toLocaleLowerCase()) || "" === Z
                            }).map((e, a) => (0, r.jsxs)(p.Z, {
                                onClick: () => {
                                    L(e), i({
                                        type: y.hH
                                    })
                                },
                                noHover: !0,
                                itemHolder: !0,
                                accentColor: e.color,
                                previewUrl: "https://api.bloxflip.com/render/".concat(e.assetId),
                                disableOptimizations: !0,
                                children: [(0, r.jsx)(p.Z.Title, {
                                    children: e.name
                                }), (0, r.jsxs)(p.Z.Subtitle, {
                                    children: [(0, I.Z)((0, w.Z)(-1 === e.marketValue ? e.recentAveragePrice : e.marketValue)), (0, r.jsx)(C.Z, {})]
                                })]
                            }))
                        }), (0, r.jsx)(j.Z, {
                            onClick: () => closeModal(),
                            className: b().defaultModalClose,
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "items-deposit.tsx"
                        })]
                    })]
                })
            })
        },
        69981: function(e) {
            e.exports = {
                cases: "CasesGeneral_cases__gxjgN",
                casesTop: "CasesGeneral_casesTop__A_TEb",
                casesTopNav: "CasesGeneral_casesTopNav__dZj5b",
                casesTopOptions: "CasesGeneral_casesTopOptions__U5Fki",
                casesTopOptionsSearch: "CasesGeneral_casesTopOptionsSearch__buvLW",
                casesList: "CasesGeneral_casesList__7o5bF",
                casesListLink: "CasesGeneral_casesListLink__FO0pt",
                casesBreadcrumbs: "CasesGeneral_casesBreadcrumbs__ilsID",
                casesBreadcrumbsLink: "CasesGeneral_casesBreadcrumbsLink__kbqdS",
                casesScroller: "CasesGeneral_casesScroller__kkadv",
                isDisabled: "CasesGeneral_isDisabled__BybT9",
                casesScrollerBlurred: "CasesGeneral_casesScrollerBlurred___YzVV",
                casesScrollerPointersSingle: "CasesGeneral_casesScrollerPointersSingle__iSJO6",
                casesScrollerPointers: "CasesGeneral_casesScrollerPointers__FbwSs",
                casesScrollerTrack: "CasesGeneral_casesScrollerTrack__AGf4c",
                casesContaimentHeading: "CasesGeneral_casesContaimentHeading__z_Zrj",
                casesContaimentHeadingPercents: "CasesGeneral_casesContaimentHeadingPercents__gFBMW",
                casesContaimentHeadingPercentsItem: "CasesGeneral_casesContaimentHeadingPercentsItem__14dG4",
                isGold: "CasesGeneral_isGold__Bfs2_",
                isOrange: "CasesGeneral_isOrange__t1N4L",
                isRed: "CasesGeneral_isRed__ANH2y",
                isPurple: "CasesGeneral_isPurple__n0avh",
                isPink: "CasesGeneral_isPink__DN2Il",
                isBlue: "CasesGeneral_isBlue__CQx_c",
                isLasure: "CasesGeneral_isLasure__tq3qU",
                cardsList: "CasesGeneral_cardsList__zFJ91",
                cardsLabel: "CasesGeneral_cardsLabel__yQuZy",
                createCaseHeading: "CasesGeneral_createCaseHeading__hgs4c",
                createCaseHeadingTitle: "CasesGeneral_createCaseHeadingTitle__x3FhI",
                createCaseHeadingSubtitle: "CasesGeneral_createCaseHeadingSubtitle__hrIu3",
                createCaseHeadingAmount: "CasesGeneral_createCaseHeadingAmount__m_NwU",
                createCaseHeadingAmountPre: "CasesGeneral_createCaseHeadingAmountPre__Dj0hx",
                createCaseHeadingAmountFinal: "CasesGeneral_createCaseHeadingAmountFinal__qD_6R",
                createCaseHeadingCommission: "CasesGeneral_createCaseHeadingCommission__duOfK",
                createCaseHeadingCommissionEarn: "CasesGeneral_createCaseHeadingCommissionEarn__I0keW",
                createCaseHeadingCommissionEarnValue: "CasesGeneral_createCaseHeadingCommissionEarnValue__98OG2",
                createCaseHeadingCommissionChange: "CasesGeneral_createCaseHeadingCommissionChange__jd1pc",
                createCaseOptions: "CasesGeneral_createCaseOptions__cPpEy",
                createCaseOptionsRow: "CasesGeneral_createCaseOptionsRow__9_82N",
                createCaseOptionsRowSwitcher: "CasesGeneral_createCaseOptionsRowSwitcher__IrCMn",
                createCaseButton: "CasesGeneral_createCaseButton__Jauvv",
                createCaseButtonText: "CasesGeneral_createCaseButtonText__G_piO",
                createCaseGamemode: "CasesGeneral_createCaseGamemode__JVSjD",
                createCaseGamemodeButtons: "CasesGeneral_createCaseGamemodeButtons__t1Pi6",
                createCaseGamemodeButtonsButton: "CasesGeneral_createCaseGamemodeButtonsButton__C2Psm",
                isChosen: "CasesGeneral_isChosen__U3eun",
                createCaseSubmit: "CasesGeneral_createCaseSubmit__oJ51J",
                createCaseSubmitSubmitBtn: "CasesGeneral_createCaseSubmitSubmitBtn__dTrNT",
                createCaseCounter: "CasesGeneral_createCaseCounter__BY981",
                createCaseCounterText: "CasesGeneral_createCaseCounterText__R8TDE",
                createCaseCounterButton: "CasesGeneral_createCaseCounterButton__dfitG",
                createCaseManage: "CasesGeneral_createCaseManage__Clyft",
                createCaseManageButton: "CasesGeneral_createCaseManageButton__6Dui3",
                isTrash: "CasesGeneral_isTrash__puO1Z"
            }
        }
    }
]);