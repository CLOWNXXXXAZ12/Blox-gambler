! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a4b22790-a256-4aa9-989e-3c46ca4185fe", e._sentryDebugIdIdentifier = "sentry-dbid-a4b22790-a256-4aa9-989e-3c46ca4185fe")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9396], {
        94217: function(e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/privacy-policy", function() {
                return r(13134)
            }])
        },
        13134: function(e, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return TosPage
                }
            });
            var t = r(85893),
                a = r(67294),
                i = r(80615);

            function TosPage() {
                let [e, n] = (0, a.useState)("0px"), r = (0, a.useRef)(), onResize = () => {
                    n(r.current.contentWindow.document.body.scrollHeight + "px")
                };
                return (0, a.useEffect)(() => {
                    let e = setInterval(async () => {
                        onResize()
                    }, 50);
                    return () => {
                        clearInterval(e)
                    }
                }, [r]), (0, t.jsx)("div", {
                    "data-sentry-component": "TosPage",
                    "data-sentry-source-file": "privacy-policy.tsx",
                    children: (0, t.jsx)("iframe", {
                        ref: r,
                        frameBorder: "0",
                        scrolling: "no",
                        id: "fc-iframe-wrap",
                        className: "fc-iframe-wrap",
                        referrerPolicy: "no-referrer",
                        "aria-label": " ",
                        height: e,
                        style: {
                            width: "100%"
                        },
                        src: "/legal/privacy.html"
                    })
                })
            }
            TosPage.getLayout = function(e) {
                return (0, t.jsx)(i.Z, {
                    children: e
                })
            }
        }
    },
    function(e) {
        e.O(0, [4885, 205, 7661, 9774, 2888, 179], function() {
            return e(e.s = 94217)
        }), _N_E = e.O()
    }
]);