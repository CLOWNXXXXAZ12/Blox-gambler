! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b4b8ea95-3120-4937-ae1a-3df8f8696bcc", e._sentryDebugIdIdentifier = "sentry-dbid-b4b8ea95-3120-4937-ae1a-3df8f8696bcc")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1593], {
        76005: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/mines", function() {
                return t(60920)
            }])
        },
        60920: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return MinesGame
                }
            });
            var r = t(85893);
            t(67294);
            var s = t(80615),
                i = t(48958);

            function MinesGame() {
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(i.ZP, {
                        "data-sentry-element": "Mines",
                        "data-sentry-source-file": "mines.tsx"
                    })
                })
            }
            MinesGame.getLayout = function(e) {
                return (0, r.jsx)(s.Z, {
                    children: e
                })
            }
        }
    },
    function(e) {
        e.O(0, [4885, 205, 4768, 7661, 8958, 9774, 2888, 179], function() {
            return e(e.s = 76005)
        }), _N_E = e.O()
    }
]);