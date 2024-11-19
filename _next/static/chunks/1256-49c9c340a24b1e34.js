! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "13a1eca0-0f5a-42bd-a1ec-966a898161c6", t._sentryDebugIdIdentifier = "sentry-dbid-13a1eca0-0f5a-42bd-a1ec-966a898161c6")
    } catch (t) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1256], {
        63138: function(t, e, s) {
            "use strict";
            s.d(e, {
                Z: function() {
                    return ShadowByColor
                }
            });
            var a = s(85893),
                o = s(93967),
                r = s.n(o),
                n = s(67294),
                d = s(75613),
                l = s.n(d);
            let ShadowByColor = t => {
                var e, s;
                let {
                    color: o,
                    className: d,
                    animation: i,
                    disableOuterShadow: p,
                    customColor: c
                } = t, [f, _] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    o && c && !f && _(Object.keys(c)[0])
                }, [o, c, f]);
                let y = Object.assign({}, {
                    yellow: "#paint0_radial_422_227605",
                    red: "#paint1_radial_422_227605",
                    blue: "#paint2_radial_422_227605",
                    purple: "#paint3_radial_422_227605",
                    blueForced: "#paint4_radial_422_227605",
                    blueOpened: "#paint5_radial_422_227605",
                    fuchsia: "#paint6_radial_422_227605"
                }, f ? {
                    [f]: "#".concat(f)
                } : {});
                return o ? (0, a.jsx)("div", {
                    className: r()(l().circleHoverAnimation, d),
                    "data-sentry-component": "ShadowByColor",
                    "data-sentry-source-file": "Shadow.tsx",
                    children: (0, a.jsxs)("svg", {
                        width: "231",
                        height: "238",
                        viewBox: "0 0 231 238",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: !1 === i ? l().noAnimation : "",
                        "data-sentry-element": "svg",
                        "data-sentry-source-file": "Shadow.tsx",
                        children: [(0, a.jsx)("path", {
                            opacity: "0.3",
                            fill: "transparent" === o ? "transparent" : "url(".concat(y[null != f ? f : o], ")"),
                            d: "M135.318 236.602L115.121 118.999L154.514 231.283L135.318 236.602ZM105.183 238L135.318 236.602L115.121 119.002L105.183 238ZM94.9217 236.602L115.118 118.999L75.725 231.287L94.9217 236.602ZM75.725 231.287L115.121 118.999L48.9555 216.921L75.725 231.287ZM40.7424 210.41L115.118 119.002L26.6911 195.881L40.7424 210.41ZM26.6911 195.881L115.121 118.999L10.4543 169.604L26.6911 195.881ZM6.49473 159.719L115.118 118.999L0 129.272L6.49473 159.719ZM0 129.272L115.118 119.002L0 108.729V129.272ZM1.35252 98.1213L115.121 118.999L9.73728 67.861L1.35252 98.1213ZM10.4543 68.3962L115.118 119.002L20.3924 50.6057L10.4543 68.3962ZM26.6911 42.1157L115.118 118.999L40.7424 27.5908L26.6911 42.1157ZM40.7424 27.5908L115.121 119.002L66.1659 10.8067L40.7424 27.5908ZM75.725 6.71366L115.118 118.999L94.9217 1.39812L75.725 6.71366ZM94.9217 1.39812L115.118 118.999L125.056 0L94.9217 1.39812ZM135.318 1.39474L115.121 118.999L154.511 6.71366L135.318 1.39474ZM154.511 6.71366L115.118 118.999L181.284 21.0798L154.511 6.71366ZM189.494 27.5908L115.118 118.999L203.545 42.1157L189.494 27.5908ZM203.545 42.1157L115.118 118.999L219.782 68.3928L203.545 42.1157ZM223.745 78.2776L115.118 118.999L228.887 98.1213L223.745 78.2776ZM228.887 98.1213L115.121 118.999L230.24 129.268L228.887 98.1213ZM228.887 139.879L115.118 119.002L223.742 159.723L228.887 139.879ZM223.742 159.723L115.118 118.999L209.847 187.395L223.742 159.723ZM203.548 195.881L115.118 118.999L189.494 210.406L203.548 195.881ZM189.494 210.406L115.118 118.999L164.074 227.19L189.494 210.406Z",
                            "data-sentry-element": "path",
                            "data-sentry-source-file": "Shadow.tsx"
                        }), (0, a.jsxs)("defs", {
                            "data-sentry-element": "defs",
                            "data-sentry-source-file": "Shadow.tsx",
                            children: [(0, a.jsxs)("radialGradient", {
                                id: "paint0_radial_422_227605",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(115.329 118.783) scale(100.022 103.394)",
                                "data-sentry-element": "radialGradient",
                                "data-sentry-source-file": "Shadow.tsx",
                                children: [(0, a.jsx)("stop", {
                                    stopColor: "#FC9114",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.46875",
                                    stopColor: "#694B39",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#322B42",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "transparent",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                })]
                            }), (0, a.jsxs)("radialGradient", {
                                id: "paint1_radial_422_227605",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(115.329 118.783) scale(100.022 103.394)",
                                "data-sentry-element": "radialGradient",
                                "data-sentry-source-file": "Shadow.tsx",
                                children: [(0, a.jsx)("stop", {
                                    stopColor: "#ec3f86",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.46875",
                                    stopColor: "#783953",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#322B42",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "transparent",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                })]
                            }), (0, a.jsxs)("radialGradient", {
                                id: "paint2_radial_422_227605",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(115.329 118.783) scale(100.022 103.394)",
                                "data-sentry-element": "radialGradient",
                                "data-sentry-source-file": "Shadow.tsx",
                                children: [(0, a.jsx)("stop", {
                                    stopColor: "#5720ea",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.46875",
                                    stopColor: "#4a328d",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#322B42",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "transparent",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                })]
                            }), (0, a.jsxs)("radialGradient", {
                                id: "paint3_radial_422_227605",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(115.329 118.783) scale(100.022 103.394)",
                                "data-sentry-element": "radialGradient",
                                "data-sentry-source-file": "Shadow.tsx",
                                children: [(0, a.jsx)("stop", {
                                    stopColor: "#9634da",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.46875",
                                    stopColor: "#5b3674",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#322B42",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "transparent",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                })]
                            }), (0, a.jsxs)("radialGradient", {
                                id: "paint4_radial_422_227605",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(115.329 118.783) scale(100.022 103.394)",
                                "data-sentry-element": "radialGradient",
                                "data-sentry-source-file": "Shadow.tsx",
                                children: [(0, a.jsx)("stop", {
                                    stopColor: "#4B51F5",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.46875",
                                    stopColor: "#284DCF",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#353B67",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#252A4F",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                })]
                            }), (0, a.jsxs)("radialGradient", {
                                id: "paint5_radial_422_227605",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(115.329 118.783) scale(100.022 103.394)",
                                "data-sentry-element": "radialGradient",
                                "data-sentry-source-file": "Shadow.tsx",
                                children: [(0, a.jsx)("stop", {
                                    stopColor: "#54ADFF",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.46875",
                                    stopColor: "#3171AB",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#353B67",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#252A4F",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                })]
                            }), (0, a.jsxs)("radialGradient", {
                                id: "paint6_radial_422_227605",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(115.329 118.783) scale(100.022 103.394)",
                                "data-sentry-element": "radialGradient",
                                "data-sentry-source-file": "Shadow.tsx",
                                children: [(0, a.jsx)("stop", {
                                    "stop-color": "#F252AC",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.46875",
                                    "stop-color": "#F444A1",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "0.734375",
                                    "stop-color": "#314564",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                }), (0, a.jsx)("stop", {
                                    offset: "1",
                                    "stop-color": "#282E54",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "Shadow.tsx"
                                })]
                            }), f && c && c[f] ? (0, a.jsxs)("radialGradient", {
                                id: f,
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(115.329 118.783) scale(100.022 103.394)",
                                children: [(0, a.jsx)("stop", {
                                    stopColor: null !== (e = c[f][0]) && void 0 !== e ? e : ""
                                }), (0, a.jsx)("stop", {
                                    offset: "0.46875",
                                    stopColor: null !== (s = c[f][1]) && void 0 !== s ? s : ""
                                }), (0, a.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: 2 in c[f] ? c[f][2] : p ? "transparent" : "#353B67"
                                }), (0, a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: p ? "transparent" : "#252A4F"
                                })]
                            }) : null]
                        })]
                    })
                }) : null
            }
        },
        75613: function(t) {
            t.exports = {
                flash: "shadow_flash__GKwww",
                pulse: "shadow_pulse__2dDqa",
                circleHoverAnimation: "shadow_circleHoverAnimation__qIlHq",
                rotate: "shadow_rotate__7aDXd",
                noAnimation: "shadow_noAnimation__Htvta",
                bottomTop: "shadow_bottomTop__ICWYf",
                flipCard: "shadow_flipCard__Jv2HY",
                bottomTopFlip: "shadow_bottomTopFlip__BbNfC",
                fade: "shadow_fade__PP23d",
                cupOut: "shadow_cupOut__xv1za",
                gloss: "shadow_gloss__qqZvS",
                shake: "shadow_shake__HvoRZ",
                rotateY: "shadow_rotateY__DHiJY",
                animateArrow: "shadow_animateArrow__7vxbc",
                selectionArrowRight: "shadow_selectionArrowRight__2NVHm",
                selectionArrowLeft: "shadow_selectionArrowLeft___RxK5",
                coinExplode: "shadow_coinExplode__2Nhjd"
            }
        }
    }
]);