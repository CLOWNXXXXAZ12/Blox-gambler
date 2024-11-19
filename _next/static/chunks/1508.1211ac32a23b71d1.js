! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "adffc439-1d78-4b2c-87d9-773a25c018f9", t._sentryDebugIdIdentifier = "sentry-dbid-adffc439-1d78-4b2c-87d9-773a25c018f9")
    } catch (t) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1508], {
        71508: function(t, e, r) {
            r.d(e, {
                tv: function() {
                    return QRCodeSVG
                }
            });
            var i, n, s, o = r(67294),
                a = Object.defineProperty,
                l = Object.getOwnPropertySymbols,
                h = Object.prototype.hasOwnProperty,
                u = Object.prototype.propertyIsEnumerable,
                __defNormalProp = (t, e, r) => e in t ? a(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                __spreadValues = (t, e) => {
                    for (var r in e || (e = {})) h.call(e, r) && __defNormalProp(t, r, e[r]);
                    if (l)
                        for (var r of l(e)) u.call(e, r) && __defNormalProp(t, r, e[r]);
                    return t
                },
                __objRest = (t, e) => {
                    var r = {};
                    for (var i in t) h.call(t, i) && 0 > e.indexOf(i) && (r[i] = t[i]);
                    if (null != t && l)
                        for (var i of l(t)) 0 > e.indexOf(i) && u.call(t, i) && (r[i] = t[i]);
                    return r
                };
            (t => {
                let e = class {
                    constructor(t, r, i, n) {
                        if (this.version = t, this.errorCorrectionLevel = r, this.modules = [], this.isFunction = [], t < e.MIN_VERSION || t > e.MAX_VERSION) throw RangeError("Version value out of range");
                        if (n < -1 || n > 7) throw RangeError("Mask value out of range");
                        this.size = 4 * t + 17;
                        let s = [];
                        for (let t = 0; t < this.size; t++) s.push(!1);
                        for (let t = 0; t < this.size; t++) this.modules.push(s.slice()), this.isFunction.push(s.slice());
                        this.drawFunctionPatterns();
                        let o = this.addEccAndInterleave(i);
                        if (this.drawCodewords(o), -1 == n) {
                            let t = 1e9;
                            for (let e = 0; e < 8; e++) {
                                this.applyMask(e), this.drawFormatBits(e);
                                let r = this.getPenaltyScore();
                                r < t && (n = e, t = r), this.applyMask(e)
                            }
                        }
                        assert(0 <= n && n <= 7), this.mask = n, this.applyMask(n), this.drawFormatBits(n), this.isFunction = []
                    }
                    static encodeText(r, i) {
                        let n = t.QrSegment.makeSegments(r);
                        return e.encodeSegments(n, i)
                    }
                    static encodeBinary(r, i) {
                        let n = t.QrSegment.makeBytes(r);
                        return e.encodeSegments([n], i)
                    }
                    static encodeSegments(t, r, n = 1, s = 40, o = -1, a = !0) {
                        let l, h;
                        if (!(e.MIN_VERSION <= n && n <= s && s <= e.MAX_VERSION) || o < -1 || o > 7) throw RangeError("Invalid value");
                        for (l = n;; l++) {
                            let n = 8 * e.getNumDataCodewords(l, r),
                                o = i.getTotalBits(t, l);
                            if (o <= n) {
                                h = o;
                                break
                            }
                            if (l >= s) throw RangeError("Data too long")
                        }
                        for (let t of [e.Ecc.MEDIUM, e.Ecc.QUARTILE, e.Ecc.HIGH]) a && h <= 8 * e.getNumDataCodewords(l, t) && (r = t);
                        let u = [];
                        for (let e of t)
                            for (let t of (appendBits(e.mode.modeBits, 4, u), appendBits(e.numChars, e.mode.numCharCountBits(l), u), e.getData())) u.push(t);
                        assert(u.length == h);
                        let d = 8 * e.getNumDataCodewords(l, r);
                        assert(u.length <= d), appendBits(0, Math.min(4, d - u.length), u), appendBits(0, (8 - u.length % 8) % 8, u), assert(u.length % 8 == 0);
                        for (let t = 236; u.length < d; t ^= 253) appendBits(t, 8, u);
                        let c = [];
                        for (; 8 * c.length < u.length;) c.push(0);
                        return u.forEach((t, e) => c[e >>> 3] |= t << 7 - (7 & e)), new e(l, r, c, o)
                    }
                    getModule(t, e) {
                        return 0 <= t && t < this.size && 0 <= e && e < this.size && this.modules[e][t]
                    }
                    getModules() {
                        return this.modules
                    }
                    drawFunctionPatterns() {
                        for (let t = 0; t < this.size; t++) this.setFunctionModule(6, t, t % 2 == 0), this.setFunctionModule(t, 6, t % 2 == 0);
                        this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
                        let t = this.getAlignmentPatternPositions(),
                            e = t.length;
                        for (let r = 0; r < e; r++)
                            for (let i = 0; i < e; i++) 0 == r && 0 == i || 0 == r && i == e - 1 || r == e - 1 && 0 == i || this.drawAlignmentPattern(t[r], t[i]);
                        this.drawFormatBits(0), this.drawVersion()
                    }
                    drawFormatBits(t) {
                        let e = this.errorCorrectionLevel.formatBits << 3 | t,
                            r = e;
                        for (let t = 0; t < 10; t++) r = r << 1 ^ (r >>> 9) * 1335;
                        let i = (e << 10 | r) ^ 21522;
                        assert(i >>> 15 == 0);
                        for (let t = 0; t <= 5; t++) this.setFunctionModule(8, t, getBit(i, t));
                        this.setFunctionModule(8, 7, getBit(i, 6)), this.setFunctionModule(8, 8, getBit(i, 7)), this.setFunctionModule(7, 8, getBit(i, 8));
                        for (let t = 9; t < 15; t++) this.setFunctionModule(14 - t, 8, getBit(i, t));
                        for (let t = 0; t < 8; t++) this.setFunctionModule(this.size - 1 - t, 8, getBit(i, t));
                        for (let t = 8; t < 15; t++) this.setFunctionModule(8, this.size - 15 + t, getBit(i, t));
                        this.setFunctionModule(8, this.size - 8, !0)
                    }
                    drawVersion() {
                        if (this.version < 7) return;
                        let t = this.version;
                        for (let e = 0; e < 12; e++) t = t << 1 ^ (t >>> 11) * 7973;
                        let e = this.version << 12 | t;
                        assert(e >>> 18 == 0);
                        for (let t = 0; t < 18; t++) {
                            let r = getBit(e, t),
                                i = this.size - 11 + t % 3,
                                n = Math.floor(t / 3);
                            this.setFunctionModule(i, n, r), this.setFunctionModule(n, i, r)
                        }
                    }
                    drawFinderPattern(t, e) {
                        for (let r = -4; r <= 4; r++)
                            for (let i = -4; i <= 4; i++) {
                                let n = Math.max(Math.abs(i), Math.abs(r)),
                                    s = t + i,
                                    o = e + r;
                                0 <= s && s < this.size && 0 <= o && o < this.size && this.setFunctionModule(s, o, 2 != n && 4 != n)
                            }
                    }
                    drawAlignmentPattern(t, e) {
                        for (let r = -2; r <= 2; r++)
                            for (let i = -2; i <= 2; i++) this.setFunctionModule(t + i, e + r, 1 != Math.max(Math.abs(i), Math.abs(r)))
                    }
                    setFunctionModule(t, e, r) {
                        this.modules[e][t] = r, this.isFunction[e][t] = !0
                    }
                    addEccAndInterleave(t) {
                        let r = this.version,
                            i = this.errorCorrectionLevel;
                        if (t.length != e.getNumDataCodewords(r, i)) throw RangeError("Invalid argument");
                        let n = e.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][r],
                            s = e.ECC_CODEWORDS_PER_BLOCK[i.ordinal][r],
                            o = Math.floor(e.getNumRawDataModules(r) / 8),
                            a = n - o % n,
                            l = Math.floor(o / n),
                            h = [],
                            u = e.reedSolomonComputeDivisor(s);
                        for (let r = 0, i = 0; r < n; r++) {
                            let n = t.slice(i, i + l - s + (r < a ? 0 : 1));
                            i += n.length;
                            let o = e.reedSolomonComputeRemainder(n, u);
                            r < a && n.push(0), h.push(n.concat(o))
                        }
                        let d = [];
                        for (let t = 0; t < h[0].length; t++) h.forEach((e, r) => {
                            (t != l - s || r >= a) && d.push(e[t])
                        });
                        return assert(d.length == o), d
                    }
                    drawCodewords(t) {
                        if (t.length != Math.floor(e.getNumRawDataModules(this.version) / 8)) throw RangeError("Invalid argument");
                        let r = 0;
                        for (let e = this.size - 1; e >= 1; e -= 2) {
                            6 == e && (e = 5);
                            for (let i = 0; i < this.size; i++)
                                for (let n = 0; n < 2; n++) {
                                    let s = e - n,
                                        o = (e + 1 & 2) == 0,
                                        a = o ? this.size - 1 - i : i;
                                    !this.isFunction[a][s] && r < 8 * t.length && (this.modules[a][s] = getBit(t[r >>> 3], 7 - (7 & r)), r++)
                                }
                        }
                        assert(r == 8 * t.length)
                    }
                    applyMask(t) {
                        if (t < 0 || t > 7) throw RangeError("Mask value out of range");
                        for (let e = 0; e < this.size; e++)
                            for (let r = 0; r < this.size; r++) {
                                let i;
                                switch (t) {
                                    case 0:
                                        i = (r + e) % 2 == 0;
                                        break;
                                    case 1:
                                        i = e % 2 == 0;
                                        break;
                                    case 2:
                                        i = r % 3 == 0;
                                        break;
                                    case 3:
                                        i = (r + e) % 3 == 0;
                                        break;
                                    case 4:
                                        i = (Math.floor(r / 3) + Math.floor(e / 2)) % 2 == 0;
                                        break;
                                    case 5:
                                        i = r * e % 2 + r * e % 3 == 0;
                                        break;
                                    case 6:
                                        i = (r * e % 2 + r * e % 3) % 2 == 0;
                                        break;
                                    case 7:
                                        i = ((r + e) % 2 + r * e % 3) % 2 == 0;
                                        break;
                                    default:
                                        throw Error("Unreachable")
                                }!this.isFunction[e][r] && i && (this.modules[e][r] = !this.modules[e][r])
                            }
                    }
                    getPenaltyScore() {
                        let t = 0;
                        for (let r = 0; r < this.size; r++) {
                            let i = !1,
                                n = 0,
                                s = [0, 0, 0, 0, 0, 0, 0];
                            for (let o = 0; o < this.size; o++) this.modules[r][o] == i ? 5 == ++n ? t += e.PENALTY_N1 : n > 5 && t++ : (this.finderPenaltyAddHistory(n, s), i || (t += this.finderPenaltyCountPatterns(s) * e.PENALTY_N3), i = this.modules[r][o], n = 1);
                            t += this.finderPenaltyTerminateAndCount(i, n, s) * e.PENALTY_N3
                        }
                        for (let r = 0; r < this.size; r++) {
                            let i = !1,
                                n = 0,
                                s = [0, 0, 0, 0, 0, 0, 0];
                            for (let o = 0; o < this.size; o++) this.modules[o][r] == i ? 5 == ++n ? t += e.PENALTY_N1 : n > 5 && t++ : (this.finderPenaltyAddHistory(n, s), i || (t += this.finderPenaltyCountPatterns(s) * e.PENALTY_N3), i = this.modules[o][r], n = 1);
                            t += this.finderPenaltyTerminateAndCount(i, n, s) * e.PENALTY_N3
                        }
                        for (let r = 0; r < this.size - 1; r++)
                            for (let i = 0; i < this.size - 1; i++) {
                                let n = this.modules[r][i];
                                n == this.modules[r][i + 1] && n == this.modules[r + 1][i] && n == this.modules[r + 1][i + 1] && (t += e.PENALTY_N2)
                            }
                        let r = 0;
                        for (let t of this.modules) r = t.reduce((t, e) => t + (e ? 1 : 0), r);
                        let i = this.size * this.size,
                            n = Math.ceil(Math.abs(20 * r - 10 * i) / i) - 1;
                        return assert(0 <= n && n <= 9), assert(0 <= (t += n * e.PENALTY_N4) && t <= 2568888), t
                    }
                    getAlignmentPatternPositions() {
                        if (1 == this.version) return []; {
                            let t = Math.floor(this.version / 7) + 2,
                                e = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * t - 2)),
                                r = [6];
                            for (let i = this.size - 7; r.length < t; i -= e) r.splice(1, 0, i);
                            return r
                        }
                    }
                    static getNumRawDataModules(t) {
                        if (t < e.MIN_VERSION || t > e.MAX_VERSION) throw RangeError("Version number out of range");
                        let r = (16 * t + 128) * t + 64;
                        if (t >= 2) {
                            let e = Math.floor(t / 7) + 2;
                            r -= (25 * e - 10) * e - 55, t >= 7 && (r -= 36)
                        }
                        return assert(208 <= r && r <= 29648), r
                    }
                    static getNumDataCodewords(t, r) {
                        return Math.floor(e.getNumRawDataModules(t) / 8) - e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t] * e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t]
                    }
                    static reedSolomonComputeDivisor(t) {
                        if (t < 1 || t > 255) throw RangeError("Degree out of range");
                        let r = [];
                        for (let e = 0; e < t - 1; e++) r.push(0);
                        r.push(1);
                        let i = 1;
                        for (let n = 0; n < t; n++) {
                            for (let t = 0; t < r.length; t++) r[t] = e.reedSolomonMultiply(r[t], i), t + 1 < r.length && (r[t] ^= r[t + 1]);
                            i = e.reedSolomonMultiply(i, 2)
                        }
                        return r
                    }
                    static reedSolomonComputeRemainder(t, r) {
                        let i = r.map(t => 0);
                        for (let n of t) {
                            let t = n ^ i.shift();
                            i.push(0), r.forEach((r, n) => i[n] ^= e.reedSolomonMultiply(r, t))
                        }
                        return i
                    }
                    static reedSolomonMultiply(t, e) {
                        if (t >>> 8 != 0 || e >>> 8 != 0) throw RangeError("Byte out of range");
                        let r = 0;
                        for (let i = 7; i >= 0; i--) r = r << 1 ^ (r >>> 7) * 285 ^ (e >>> i & 1) * t;
                        return assert(r >>> 8 == 0), r
                    }
                    finderPenaltyCountPatterns(t) {
                        let e = t[1];
                        assert(e <= 3 * this.size);
                        let r = e > 0 && t[2] == e && t[3] == 3 * e && t[4] == e && t[5] == e;
                        return (r && t[0] >= 4 * e && t[6] >= e ? 1 : 0) + (r && t[6] >= 4 * e && t[0] >= e ? 1 : 0)
                    }
                    finderPenaltyTerminateAndCount(t, e, r) {
                        return t && (this.finderPenaltyAddHistory(e, r), e = 0), e += this.size, this.finderPenaltyAddHistory(e, r), this.finderPenaltyCountPatterns(r)
                    }
                    finderPenaltyAddHistory(t, e) {
                        0 == e[0] && (t += this.size), e.pop(), e.unshift(t)
                    }
                };

                function appendBits(t, e, r) {
                    if (e < 0 || e > 31 || t >>> e != 0) throw RangeError("Value out of range");
                    for (let i = e - 1; i >= 0; i--) r.push(t >>> i & 1)
                }

                function getBit(t, e) {
                    return (t >>> e & 1) != 0
                }

                function assert(t) {
                    if (!t) throw Error("Assertion error")
                }
                e.MIN_VERSION = 1, e.MAX_VERSION = 40, e.PENALTY_N1 = 3, e.PENALTY_N2 = 3, e.PENALTY_N3 = 40, e.PENALTY_N4 = 10, e.ECC_CODEWORDS_PER_BLOCK = [
                    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
                    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
                ], e.NUM_ERROR_CORRECTION_BLOCKS = [
                    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
                    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
                    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
                    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
                ], t.QrCode = e;
                let r = class {
                        constructor(t, e, r) {
                            if (this.mode = t, this.numChars = e, this.bitData = r, e < 0) throw RangeError("Invalid argument");
                            this.bitData = r.slice()
                        }
                        static makeBytes(t) {
                            let e = [];
                            for (let r of t) appendBits(r, 8, e);
                            return new r(r.Mode.BYTE, t.length, e)
                        }
                        static makeNumeric(t) {
                            if (!r.isNumeric(t)) throw RangeError("String contains non-numeric characters");
                            let e = [];
                            for (let r = 0; r < t.length;) {
                                let i = Math.min(t.length - r, 3);
                                appendBits(parseInt(t.substr(r, i), 10), 3 * i + 1, e), r += i
                            }
                            return new r(r.Mode.NUMERIC, t.length, e)
                        }
                        static makeAlphanumeric(t) {
                            let e;
                            if (!r.isAlphanumeric(t)) throw RangeError("String contains unencodable characters in alphanumeric mode");
                            let i = [];
                            for (e = 0; e + 2 <= t.length; e += 2) {
                                let n = 45 * r.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e));
                                appendBits(n += r.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e + 1)), 11, i)
                            }
                            return e < t.length && appendBits(r.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e)), 6, i), new r(r.Mode.ALPHANUMERIC, t.length, i)
                        }
                        static makeSegments(t) {
                            return "" == t ? [] : r.isNumeric(t) ? [r.makeNumeric(t)] : r.isAlphanumeric(t) ? [r.makeAlphanumeric(t)] : [r.makeBytes(r.toUtf8ByteArray(t))]
                        }
                        static makeEci(t) {
                            let e = [];
                            if (t < 0) throw RangeError("ECI assignment value out of range");
                            if (t < 128) appendBits(t, 8, e);
                            else if (t < 16384) appendBits(2, 2, e), appendBits(t, 14, e);
                            else if (t < 1e6) appendBits(6, 3, e), appendBits(t, 21, e);
                            else throw RangeError("ECI assignment value out of range");
                            return new r(r.Mode.ECI, 0, e)
                        }
                        static isNumeric(t) {
                            return r.NUMERIC_REGEX.test(t)
                        }
                        static isAlphanumeric(t) {
                            return r.ALPHANUMERIC_REGEX.test(t)
                        }
                        getData() {
                            return this.bitData.slice()
                        }
                        static getTotalBits(t, e) {
                            let r = 0;
                            for (let i of t) {
                                let t = i.mode.numCharCountBits(e);
                                if (i.numChars >= 1 << t) return 1 / 0;
                                r += 4 + t + i.bitData.length
                            }
                            return r
                        }
                        static toUtf8ByteArray(t) {
                            t = encodeURI(t);
                            let e = [];
                            for (let r = 0; r < t.length; r++) "%" != t.charAt(r) ? e.push(t.charCodeAt(r)) : (e.push(parseInt(t.substr(r + 1, 2), 16)), r += 2);
                            return e
                        }
                    },
                    i = r;
                i.NUMERIC_REGEX = /^[0-9]*$/, i.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, i.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", t.QrSegment = i
            })(s || (s = {})), (t => {
                let e = class {
                    constructor(t, e) {
                        this.ordinal = t, this.formatBits = e
                    }
                };
                e.LOW = new e(0, 1), e.MEDIUM = new e(1, 0), e.QUARTILE = new e(2, 3), e.HIGH = new e(3, 2), t.Ecc = e
            })((i = s || (s = {})).QrCode || (i.QrCode = {})), (t => {
                let e = class {
                    constructor(t, e) {
                        this.modeBits = t, this.numBitsCharCount = e
                    }
                    numCharCountBits(t) {
                        return this.numBitsCharCount[Math.floor((t + 7) / 17)]
                    }
                };
                e.NUMERIC = new e(1, [10, 12, 14]), e.ALPHANUMERIC = new e(2, [9, 11, 13]), e.BYTE = new e(4, [8, 16, 16]), e.KANJI = new e(8, [8, 10, 12]), e.ECI = new e(7, [0, 0, 0]), t.Mode = e
            })((n = s || (s = {})).QrSegment || (n.QrSegment = {}));
            var d = s,
                c = {
                    L: d.QrCode.Ecc.LOW,
                    M: d.QrCode.Ecc.MEDIUM,
                    Q: d.QrCode.Ecc.QUARTILE,
                    H: d.QrCode.Ecc.HIGH
                };

            function QRCodeSVG(t) {
                let {
                    value: e,
                    size: r = 128,
                    level: i = "L",
                    bgColor: n = "#FFFFFF",
                    fgColor: s = "#000000",
                    includeMargin: a = !1,
                    imageSettings: l
                } = t, h = __objRest(t, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"]), u = d.QrCode.encodeText(e, c[i]).getModules(), f = a ? 4 : 0, g = u.length + 2 * f, m = function(t, e, r, i) {
                    if (null == i) return null;
                    let n = t.length + 2 * (r ? 4 : 0),
                        s = Math.floor(.1 * e),
                        o = n / e,
                        a = (i.width || s) * o,
                        l = (i.height || s) * o,
                        h = null == i.x ? t.length / 2 - a / 2 : i.x * o,
                        u = null == i.y ? t.length / 2 - l / 2 : i.y * o,
                        d = null;
                    if (i.excavate) {
                        let t = Math.floor(h),
                            e = Math.floor(u);
                        d = {
                            x: t,
                            y: e,
                            w: Math.ceil(a + h - t),
                            h: Math.ceil(l + u - e)
                        }
                    }
                    return {
                        x: h,
                        y: u,
                        h: l,
                        w: a,
                        excavation: d
                    }
                }(u, r, a, l), E = null;
                if (null != l && null != m) {
                    if (null != m.excavation) {
                        var p, M;
                        p = u, M = m.excavation, u = p.slice().map((t, e) => e < M.y || e >= M.y + M.h ? t : t.map((t, e) => (e < M.x || e >= M.x + M.w) && t))
                    }
                    E = o.createElement("image", {
                        xlinkHref: l.src,
                        height: m.h,
                        width: m.w,
                        x: m.x + f,
                        y: m.y + f,
                        preserveAspectRatio: "none"
                    })
                }
                let C = function(t, e = 0) {
                    let r = [];
                    return t.forEach(function(t, i) {
                        let n = null;
                        t.forEach(function(s, o) {
                            if (!s && null !== n) {
                                r.push(`M${n+e} ${i+e}h${o-n}v1H${n+e}z`), n = null;
                                return
                            }
                            if (o === t.length - 1) {
                                if (!s) return;
                                null === n ? r.push(`M${o+e},${i+e} h1v1H${o+e}z`) : r.push(`M${n+e},${i+e} h${o+1-n}v1H${n+e}z`);
                                return
                            }
                            s && null === n && (n = o)
                        })
                    }), r.join("")
                }(u, f);
                return o.createElement("svg", __spreadValues({
                    height: r,
                    width: r,
                    viewBox: `0 0 ${g} ${g}`
                }, h), o.createElement("path", {
                    fill: n,
                    d: `M0,0 h${g}v${g}H0z`,
                    shapeRendering: "crispEdges"
                }), o.createElement("path", {
                    fill: s,
                    d: C,
                    shapeRendering: "crispEdges"
                }), E)
            }! function() {
                try {
                    new Path2D().addPath(new Path2D)
                } catch (t) {
                    return !1
                }
            }()
        }
    }
]);