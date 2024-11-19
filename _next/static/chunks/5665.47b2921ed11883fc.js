! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f0a14dde-1ae5-475a-9777-dcf99ecc3b12", e._sentryDebugIdIdentifier = "sentry-dbid-f0a14dde-1ae5-475a-9777-dcf99ecc3b12")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5665], {
        35665: function(e, a, t) {
            t.r(a);
            var s = t(85893),
                n = t(67294),
                r = t(83253),
                l = t.n(r),
                d = t(93967),
                i = t.n(d),
                o = t(4595),
                c = t(77579),
                p = t(791),
                u = t(62961),
                m = t(87116),
                h = t(2664),
                f = t(8210),
                y = t.n(f),
                g = t(2181),
                x = t(86501);
            l().setAppElement("#__next"), a.default = (0, h.$j)(e => ({
                showSwappedDeposit: e.auth.showSwappedDeposit,
                isAuthenticated: e.auth.isAuthenticated,
                user: e.auth.user
            }))(function(e) {
                let {
                    className: a,
                    showSwappedDeposit: t,
                    isAuthenticated: r,
                    user: d
                } = e, [f, b] = (0, n.useState)(!1), [w, j] = (0, n.useState)(!0), [M, N] = (0, n.useState)(!0), v = (0, h.I0)(), T = n.useMemo(() => (0, m.P)("margin"), ["margin"]), [C, Z] = (0, n.useState)(void 0);

                function closeModal() {
                    v({
                        type: u.cp
                    }), b(!1), Z(void 0), document.body.style.overflow = "initial", document.body.style.paddingRight = "0px"
                }
                return (0, n.useEffect)(() => {
                    if (d && !C && f) {
                        let fetchData = async e => {
                            if (e) {
                                N(!0);
                                try {
                                    let a = await (0, g.MeR)(e);
                                    a.success && Z(a.swappedUrl)
                                } catch (e) {
                                    closeModal(), console.log("There was an error while generating the swapped deposit. Please try again!!"), e.response && 400 === e.response.status ? x.ZP.error(e.response.data.error) : x.ZP.error("There was an error while generating the swapped deposit. Please try again!!")
                                }
                            }
                        };
                        fetchData("LTC")
                    }
                }, [d, C, f]), (0, n.useEffect)(() => {
                    t ? (b(!0), N(!0), setTimeout(() => {
                        document.body.style.overflow = "hidden", document.body.style.paddingRight = T.gap + "px"
                    }, 0)) : !1 === t && closeModal()
                }, [t]), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(l(), {
                        isOpen: f,
                        onRequestClose: closeModal,
                        contentLabel: "Replenishment modal",
                        className: i()(y().defaultModal, y().paygardenModal, y().cryptoModal, a),
                        style: {
                            content: {
                                padding: "0px",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                maxHeight: "585px",
                                maxWidth: "445px",
                                minHeight: "initial",
                                background: "transparent"
                            }
                        },
                        closeTimeoutMS: 200,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "swapped-modal.tsx",
                        children: [w && d ? (0, s.jsxs)("div", {
                            style: {
                                minHeight: "585px"
                            },
                            children: [M && (0, s.jsx)(c.Z, {
                                textType: "labelsSemibold",
                                className: y().waitText,
                                element: "p",
                                children: "Loading..."
                            }), (0, s.jsx)("iframe", {
                                frameBorder: "0",
                                referrerPolicy: "no-referrer",
                                "aria-label": " ",
                                onLoad: () => N(!1),
                                className: y().paygardenIframe,
                                src: C,
                                style: {
                                    borderRadius: "10px",
                                    background: M ? "white" : "transparent",
                                    minWidth: "445px",
                                    minHeight: "585px",
                                    height: "initial"
                                }
                            })]
                        }) : (0, s.jsxs)("div", {
                            children: [(0, s.jsx)("span", {
                                className: y().spinner
                            }), (0, s.jsxs)("div", {
                                className: y().defaultModalBreadcrumbs,
                                children: [(0, s.jsx)(o.Z, {
                                    className: y().defaultModalBreadcrumbsItem,
                                    children: (0, s.jsx)(c.Z, {
                                        onClick: closeModal,
                                        element: "span",
                                        textType: "labelsRegular",
                                        children: "Deposit"
                                    })
                                }), (0, s.jsx)(o.Z, {
                                    className: y().defaultModalBreadcrumbsItem,
                                    children: (0, s.jsx)(c.Z, {
                                        element: "span",
                                        textType: "labelsRegular",
                                        children: "Giftcard deposit"
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: y().headingWrapper,
                                children: [(0, s.jsx)(p.Z, {
                                    element: "h2",
                                    className: y().headingWrapperTitle,
                                    children: "Paygarden giftcard depsoits"
                                }), (0, s.jsx)(c.Z, {
                                    className: y().headingWrapperSecondary,
                                    element: "p",
                                    textType: "regular14",
                                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum"
                                })]
                            }), (0, s.jsx)(c.Z, {
                                element: "p",
                                textType: "semibold14",
                                className: y().rateText,
                                children: "Current Rate: $4.25 = 1000 F$"
                            }), (0, s.jsx)(o.Z, {
                                onClick: () => {
                                    r && j(!0)
                                },
                                style: {
                                    width: "100%"
                                },
                                variant: "primary",
                                children: "Verify your giftcard"
                            })]
                        }), (0, s.jsx)(o.Z, {
                            onClick: closeModal,
                            className: i()(y().defaultModalClose, y().paygardenClose),
                            "aria-label": "Close",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "swapped-modal.tsx"
                        })]
                    })
                })
            })
        }
    }
]);