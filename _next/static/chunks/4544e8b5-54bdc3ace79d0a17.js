! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6bc27e38-3db9-4c71-ae20-bfed4bb579dc", e._sentryDebugIdIdentifier = "sentry-dbid-6bc27e38-3db9-4c71-ae20-bfed4bb579dc")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5611], {
        89842: function(e, t, n) {
            e.exports = (function r(e, t, n) {
                function o(s, a) {
                    if (!t[s]) {
                        if (!e[s]) {
                            if (i) return i(s, !0);
                            var l = Error("Cannot find module '" + s + "'");
                            throw l.code = "MODULE_NOT_FOUND", l
                        }
                        var c = t[s] = {
                            exports: {}
                        };
                        e[s][0].call(c.exports, function(t) {
                            return o(e[s][1][t] || t)
                        }, c, c.exports, r, e, t, n)
                    }
                    return t[s].exports
                }
                for (var i = void 0, s = 0; s < n.length; s++) o(n[s]);
                return o
            })({
                1: [function(e, t, n) {
                    var i, s = {};
                    t.exports = s;
                    var a = e("../geometry/Vertices"),
                        l = e("../geometry/Vector"),
                        c = e("../core/Sleeping");
                    e("../render/Render");
                    var d = e("../core/Common"),
                        u = e("../geometry/Bounds"),
                        p = e("../geometry/Axes");
                    s._inertiaScale = 4, s._nextCollidingGroupId = 1, s._nextNonCollidingGroupId = -1, s._nextCategory = 1, s.create = function(e) {
                        var t = {
                                id: d.nextId(),
                                type: "body",
                                label: "Body",
                                parts: [],
                                plugin: {},
                                angle: 0,
                                vertices: a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                                position: {
                                    x: 0,
                                    y: 0
                                },
                                force: {
                                    x: 0,
                                    y: 0
                                },
                                torque: 0,
                                positionImpulse: {
                                    x: 0,
                                    y: 0
                                },
                                constraintImpulse: {
                                    x: 0,
                                    y: 0,
                                    angle: 0
                                },
                                totalContacts: 0,
                                speed: 0,
                                angularSpeed: 0,
                                velocity: {
                                    x: 0,
                                    y: 0
                                },
                                angularVelocity: 0,
                                isSensor: !1,
                                isStatic: !1,
                                isSleeping: !1,
                                motion: 0,
                                sleepThreshold: 60,
                                density: .001,
                                restitution: 0,
                                friction: .1,
                                frictionStatic: .5,
                                frictionAir: .01,
                                collisionFilter: {
                                    category: 1,
                                    mask: 4294967295,
                                    group: 0
                                },
                                slop: .05,
                                timeScale: 1,
                                render: {
                                    visible: !0,
                                    opacity: 1,
                                    sprite: {
                                        xScale: 1,
                                        yScale: 1,
                                        xOffset: 0,
                                        yOffset: 0
                                    },
                                    lineWidth: 0
                                }
                            },
                            n = d.extend(t, e);
                        return i(n, e), n
                    }, s.nextGroup = function(e) {
                        return e ? s._nextNonCollidingGroupId-- : s._nextCollidingGroupId++
                    }, s.nextCategory = function() {
                        return s._nextCategory = s._nextCategory << 1, s._nextCategory
                    }, i = function(e, t) {
                        t = t || {}, s.set(e, {
                            bounds: e.bounds || u.create(e.vertices),
                            positionPrev: e.positionPrev || l.clone(e.position),
                            anglePrev: e.anglePrev || e.angle,
                            vertices: e.vertices,
                            parts: e.parts || [e],
                            isStatic: e.isStatic,
                            isSleeping: e.isSleeping,
                            parent: e.parent || e
                        }), a.rotate(e.vertices, e.angle, e.position), p.rotate(e.axes, e.angle), u.update(e.bounds, e.vertices, e.velocity), s.set(e, {
                            axes: t.axes || e.axes,
                            area: t.area || e.area,
                            mass: t.mass || e.mass,
                            inertia: t.inertia || e.inertia
                        });
                        var n = e.isStatic ? "#2e2b44" : d.choose(["#006BA6", "#0496FF", "#FFBC42", "#D81159", "#8F2D56"]);
                        e.render.fillStyle = e.render.fillStyle || n, e.render.strokeStyle = e.render.strokeStyle || "#000", e.render.sprite.xOffset += -(e.bounds.min.x - e.position.x) / (e.bounds.max.x - e.bounds.min.x), e.render.sprite.yOffset += -(e.bounds.min.y - e.position.y) / (e.bounds.max.y - e.bounds.min.y)
                    }, s.set = function(e, t, n) {
                        var i;
                        for (i in "string" == typeof t && (i = t, (t = {})[i] = n), t)
                            if (n = t[i], t.hasOwnProperty(i)) switch (i) {
                                case "isStatic":
                                    s.setStatic(e, n);
                                    break;
                                case "isSleeping":
                                    c.set(e, n);
                                    break;
                                case "mass":
                                    s.setMass(e, n);
                                    break;
                                case "density":
                                    s.setDensity(e, n);
                                    break;
                                case "inertia":
                                    s.setInertia(e, n);
                                    break;
                                case "vertices":
                                    s.setVertices(e, n);
                                    break;
                                case "position":
                                    s.setPosition(e, n);
                                    break;
                                case "angle":
                                    s.setAngle(e, n);
                                    break;
                                case "velocity":
                                    s.setVelocity(e, n);
                                    break;
                                case "angularVelocity":
                                    s.setAngularVelocity(e, n);
                                    break;
                                case "parts":
                                    s.setParts(e, n);
                                    break;
                                default:
                                    e[i] = n
                            }
                    }, s.setStatic = function(e, t) {
                        for (var n = 0; n < e.parts.length; n++) {
                            var i = e.parts[n];
                            i.isStatic = t, t ? (i._original = {
                                restitution: i.restitution,
                                friction: i.friction,
                                mass: i.mass,
                                inertia: i.inertia,
                                density: i.density,
                                inverseMass: i.inverseMass,
                                inverseInertia: i.inverseInertia
                            }, i.restitution = 0, i.friction = 1, i.mass = i.inertia = i.density = 1 / 0, i.inverseMass = i.inverseInertia = 0, i.positionPrev.x = i.position.x, i.positionPrev.y = i.position.y, i.anglePrev = i.angle, i.angularVelocity = 0, i.speed = 0, i.angularSpeed = 0, i.motion = 0) : i._original && (i.restitution = i._original.restitution, i.friction = i._original.friction, i.mass = i._original.mass, i.inertia = i._original.inertia, i.density = i._original.density, i.inverseMass = i._original.inverseMass, i.inverseInertia = i._original.inverseInertia, delete i._original)
                        }
                    }, s.setMass = function(e, t) {
                        var n = e.inertia / (e.mass / 6);
                        e.inertia = n * (t / 6), e.inverseInertia = 1 / e.inertia, e.mass = t, e.inverseMass = 1 / e.mass, e.density = e.mass / e.area
                    }, s.setDensity = function(e, t) {
                        s.setMass(e, t * e.area), e.density = t
                    }, s.setInertia = function(e, t) {
                        e.inertia = t, e.inverseInertia = 1 / e.inertia
                    }, s.setVertices = function(e, t) {
                        t[0].body === e ? e.vertices = t : e.vertices = a.create(t, e), e.axes = p.fromVertices(e.vertices), e.area = a.area(e.vertices), s.setMass(e, e.density * e.area);
                        var n = a.centre(e.vertices);
                        a.translate(e.vertices, n, -1), s.setInertia(e, s._inertiaScale * a.inertia(e.vertices, e.mass)), a.translate(e.vertices, e.position), u.update(e.bounds, e.vertices, e.velocity)
                    }, s.setParts = function(e, t, n) {
                        for (t = t.slice(0), e.parts.length = 0, e.parts.push(e), e.parent = e, i = 0; i < t.length; i++) {
                            var i, l = t[i];
                            l !== e && (l.parent = e, e.parts.push(l))
                        }
                        if (1 !== e.parts.length) {
                            if (n = void 0 === n || n) {
                                var c = [];
                                for (i = 0; i < t.length; i++) c = c.concat(t[i].vertices);
                                a.clockwiseSort(c);
                                var d = a.hull(c),
                                    u = a.centre(d);
                                s.setVertices(e, d), a.translate(e.vertices, u)
                            }
                            var p = s._totalProperties(e);
                            e.area = p.area, e.parent = e, e.position.x = p.centre.x, e.position.y = p.centre.y, e.positionPrev.x = p.centre.x, e.positionPrev.y = p.centre.y, s.setMass(e, p.mass), s.setInertia(e, p.inertia), s.setPosition(e, p.centre)
                        }
                    }, s.setPosition = function(e, t) {
                        var n = l.sub(t, e.position);
                        e.positionPrev.x += n.x, e.positionPrev.y += n.y;
                        for (var i = 0; i < e.parts.length; i++) {
                            var s = e.parts[i];
                            s.position.x += n.x, s.position.y += n.y, a.translate(s.vertices, n), u.update(s.bounds, s.vertices, e.velocity)
                        }
                    }, s.setAngle = function(e, t) {
                        var n = t - e.angle;
                        e.anglePrev += n;
                        for (var i = 0; i < e.parts.length; i++) {
                            var s = e.parts[i];
                            s.angle += n, a.rotate(s.vertices, n, e.position), p.rotate(s.axes, n), u.update(s.bounds, s.vertices, e.velocity), i > 0 && l.rotateAbout(s.position, n, e.position, s.position)
                        }
                    }, s.setVelocity = function(e, t) {
                        e.positionPrev.x = e.position.x - t.x, e.positionPrev.y = e.position.y - t.y, e.velocity.x = t.x, e.velocity.y = t.y, e.speed = l.magnitude(e.velocity)
                    }, s.setAngularVelocity = function(e, t) {
                        e.anglePrev = e.angle - t, e.angularVelocity = t, e.angularSpeed = Math.abs(e.angularVelocity)
                    }, s.translate = function(e, t) {
                        s.setPosition(e, l.add(e.position, t))
                    }, s.rotate = function(e, t, n) {
                        if (n) {
                            var i = Math.cos(t),
                                a = Math.sin(t),
                                l = e.position.x - n.x,
                                c = e.position.y - n.y;
                            s.setPosition(e, {
                                x: n.x + (l * i - c * a),
                                y: n.y + (l * a + c * i)
                            }), s.setAngle(e, e.angle + t)
                        } else s.setAngle(e, e.angle + t)
                    }, s.scale = function(e, t, n, i) {
                        var l = 0,
                            c = 0;
                        i = i || e.position;
                        for (var d = 0; d < e.parts.length; d++) {
                            var m = e.parts[d];
                            a.scale(m.vertices, t, n, i), m.axes = p.fromVertices(m.vertices), m.area = a.area(m.vertices), s.setMass(m, e.density * m.area), a.translate(m.vertices, {
                                x: -m.position.x,
                                y: -m.position.y
                            }), s.setInertia(m, s._inertiaScale * a.inertia(m.vertices, m.mass)), a.translate(m.vertices, {
                                x: m.position.x,
                                y: m.position.y
                            }), d > 0 && (l += m.area, c += m.inertia), m.position.x = i.x + (m.position.x - i.x) * t, m.position.y = i.y + (m.position.y - i.y) * n, u.update(m.bounds, m.vertices, e.velocity)
                        }
                        e.parts.length > 1 && (e.area = l, e.isStatic || (s.setMass(e, e.density * l), s.setInertia(e, c))), e.circleRadius && (t === n ? e.circleRadius *= t : e.circleRadius = null)
                    }, s.update = function(e, t, n, i) {
                        var s = Math.pow(t * n * e.timeScale, 2),
                            c = 1 - e.frictionAir * n * e.timeScale,
                            d = e.position.x - e.positionPrev.x,
                            m = e.position.y - e.positionPrev.y;
                        e.velocity.x = d * c * i + e.force.x / e.mass * s, e.velocity.y = m * c * i + e.force.y / e.mass * s, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.position.x += e.velocity.x, e.position.y += e.velocity.y, e.angularVelocity = (e.angle - e.anglePrev) * c * i + e.torque / e.inertia * s, e.anglePrev = e.angle, e.angle += e.angularVelocity, e.speed = l.magnitude(e.velocity), e.angularSpeed = Math.abs(e.angularVelocity);
                        for (var f = 0; f < e.parts.length; f++) {
                            var v = e.parts[f];
                            a.translate(v.vertices, e.velocity), f > 0 && (v.position.x += e.velocity.x, v.position.y += e.velocity.y), 0 !== e.angularVelocity && (a.rotate(v.vertices, e.angularVelocity, e.position), p.rotate(v.axes, e.angularVelocity), f > 0 && l.rotateAbout(v.position, e.angularVelocity, e.position, v.position)), u.update(v.bounds, v.vertices, e.velocity)
                        }
                    }, s.applyForce = function(e, t, n) {
                        e.force.x += n.x, e.force.y += n.y;
                        var i = {
                            x: t.x - e.position.x,
                            y: t.y - e.position.y
                        };
                        e.torque += i.x * n.y - i.y * n.x
                    }, s._totalProperties = function(e) {
                        for (var t = {
                                mass: 0,
                                area: 0,
                                inertia: 0,
                                centre: {
                                    x: 0,
                                    y: 0
                                }
                            }, n = 1 === e.parts.length ? 0 : 1; n < e.parts.length; n++) {
                            var i = e.parts[n],
                                s = i.mass !== 1 / 0 ? i.mass : 1;
                            t.mass += s, t.area += i.area, t.inertia += i.inertia, t.centre = l.add(t.centre, l.mult(i.position, s))
                        }
                        return t.centre = l.div(t.centre, t.mass), t
                    }
                }, {
                    "../core/Common": 14,
                    "../core/Sleeping": 22,
                    "../geometry/Axes": 25,
                    "../geometry/Bounds": 26,
                    "../geometry/Vector": 28,
                    "../geometry/Vertices": 29,
                    "../render/Render": 31
                }],
                2: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("../core/Events"),
                        a = e("../core/Common"),
                        l = e("../geometry/Bounds"),
                        c = e("./Body");
                    i.create = function(e) {
                        return a.extend({
                            id: a.nextId(),
                            type: "composite",
                            parent: null,
                            isModified: !1,
                            bodies: [],
                            constraints: [],
                            composites: [],
                            label: "Composite",
                            plugin: {}
                        }, e)
                    }, i.setModified = function(e, t, n, s) {
                        if (e.isModified = t, n && e.parent && i.setModified(e.parent, t, n, s), s)
                            for (var a = 0; a < e.composites.length; a++) {
                                var l = e.composites[a];
                                i.setModified(l, t, n, s)
                            }
                    }, i.add = function(e, t) {
                        var n = [].concat(t);
                        s.trigger(e, "beforeAdd", {
                            object: t
                        });
                        for (var l = 0; l < n.length; l++) {
                            var c = n[l];
                            switch (c.type) {
                                case "body":
                                    if (c.parent !== c) {
                                        a.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                                        break
                                    }
                                    i.addBody(e, c);
                                    break;
                                case "constraint":
                                    i.addConstraint(e, c);
                                    break;
                                case "composite":
                                    i.addComposite(e, c);
                                    break;
                                case "mouseConstraint":
                                    i.addConstraint(e, c.constraint)
                            }
                        }
                        return s.trigger(e, "afterAdd", {
                            object: t
                        }), e
                    }, i.remove = function(e, t, n) {
                        var a = [].concat(t);
                        s.trigger(e, "beforeRemove", {
                            object: t
                        });
                        for (var l = 0; l < a.length; l++) {
                            var c = a[l];
                            switch (c.type) {
                                case "body":
                                    i.removeBody(e, c, n);
                                    break;
                                case "constraint":
                                    i.removeConstraint(e, c, n);
                                    break;
                                case "composite":
                                    i.removeComposite(e, c, n);
                                    break;
                                case "mouseConstraint":
                                    i.removeConstraint(e, c.constraint)
                            }
                        }
                        return s.trigger(e, "afterRemove", {
                            object: t
                        }), e
                    }, i.addComposite = function(e, t) {
                        return e.composites.push(t), t.parent = e, i.setModified(e, !0, !0, !1), e
                    }, i.removeComposite = function(e, t, n) {
                        var s = a.indexOf(e.composites, t);
                        if (-1 !== s && (i.removeCompositeAt(e, s), i.setModified(e, !0, !0, !1)), n)
                            for (var l = 0; l < e.composites.length; l++) i.removeComposite(e.composites[l], t, !0);
                        return e
                    }, i.removeCompositeAt = function(e, t) {
                        return e.composites.splice(t, 1), i.setModified(e, !0, !0, !1), e
                    }, i.addBody = function(e, t) {
                        return e.bodies.push(t), i.setModified(e, !0, !0, !1), e
                    }, i.removeBody = function(e, t, n) {
                        var s = a.indexOf(e.bodies, t);
                        if (-1 !== s && (i.removeBodyAt(e, s), i.setModified(e, !0, !0, !1)), n)
                            for (var l = 0; l < e.composites.length; l++) i.removeBody(e.composites[l], t, !0);
                        return e
                    }, i.removeBodyAt = function(e, t) {
                        return e.bodies.splice(t, 1), i.setModified(e, !0, !0, !1), e
                    }, i.addConstraint = function(e, t) {
                        return e.constraints.push(t), i.setModified(e, !0, !0, !1), e
                    }, i.removeConstraint = function(e, t, n) {
                        var s = a.indexOf(e.constraints, t);
                        if (-1 !== s && i.removeConstraintAt(e, s), n)
                            for (var l = 0; l < e.composites.length; l++) i.removeConstraint(e.composites[l], t, !0);
                        return e
                    }, i.removeConstraintAt = function(e, t) {
                        return e.constraints.splice(t, 1), i.setModified(e, !0, !0, !1), e
                    }, i.clear = function(e, t, n) {
                        if (n)
                            for (var s = 0; s < e.composites.length; s++) i.clear(e.composites[s], t, !0);
                        return t ? e.bodies = e.bodies.filter(function(e) {
                            return e.isStatic
                        }) : e.bodies.length = 0, e.constraints.length = 0, e.composites.length = 0, i.setModified(e, !0, !0, !1), e
                    }, i.allBodies = function(e) {
                        for (var t = [].concat(e.bodies), n = 0; n < e.composites.length; n++) t = t.concat(i.allBodies(e.composites[n]));
                        return t
                    }, i.allConstraints = function(e) {
                        for (var t = [].concat(e.constraints), n = 0; n < e.composites.length; n++) t = t.concat(i.allConstraints(e.composites[n]));
                        return t
                    }, i.allComposites = function(e) {
                        for (var t = [].concat(e.composites), n = 0; n < e.composites.length; n++) t = t.concat(i.allComposites(e.composites[n]));
                        return t
                    }, i.get = function(e, t, n) {
                        var s, a;
                        switch (n) {
                            case "body":
                                s = i.allBodies(e);
                                break;
                            case "constraint":
                                s = i.allConstraints(e);
                                break;
                            case "composite":
                                s = i.allComposites(e).concat(e)
                        }
                        return s ? 0 === (a = s.filter(function(e) {
                            return e.id.toString() === t.toString()
                        })).length ? null : a[0] : null
                    }, i.move = function(e, t, n) {
                        return i.remove(e, t), i.add(n, t), e
                    }, i.rebase = function(e) {
                        for (var t = i.allBodies(e).concat(i.allConstraints(e)).concat(i.allComposites(e)), n = 0; n < t.length; n++) t[n].id = a.nextId();
                        return i.setModified(e, !0, !0, !1), e
                    }, i.translate = function(e, t, n) {
                        for (var s = n ? i.allBodies(e) : e.bodies, a = 0; a < s.length; a++) c.translate(s[a], t);
                        return i.setModified(e, !0, !0, !1), e
                    }, i.rotate = function(e, t, n, s) {
                        for (var a = Math.cos(t), l = Math.sin(t), d = s ? i.allBodies(e) : e.bodies, u = 0; u < d.length; u++) {
                            var p = d[u],
                                m = p.position.x - n.x,
                                f = p.position.y - n.y;
                            c.setPosition(p, {
                                x: n.x + (m * a - f * l),
                                y: n.y + (m * l + f * a)
                            }), c.rotate(p, t)
                        }
                        return i.setModified(e, !0, !0, !1), e
                    }, i.scale = function(e, t, n, s, a) {
                        for (var l = a ? i.allBodies(e) : e.bodies, d = 0; d < l.length; d++) {
                            var u = l[d],
                                p = u.position.x - s.x,
                                m = u.position.y - s.y;
                            c.setPosition(u, {
                                x: s.x + p * t,
                                y: s.y + m * n
                            }), c.scale(u, t, n)
                        }
                        return i.setModified(e, !0, !0, !1), e
                    }, i.bounds = function(e) {
                        for (var t = i.allBodies(e), n = [], s = 0; s < t.length; s += 1) {
                            var a = t[s];
                            n.push(a.bounds.min, a.bounds.max)
                        }
                        return l.create(n)
                    }
                }, {
                    "../core/Common": 14,
                    "../core/Events": 16,
                    "../geometry/Bounds": 26,
                    "./Body": 1
                }],
                3: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("./Composite");
                    e("../constraint/Constraint");
                    var a = e("../core/Common");
                    i.create = function(e) {
                        var t = s.create();
                        return a.extend(t, {
                            label: "World",
                            gravity: {
                                x: 0,
                                y: 1,
                                scale: .001
                            },
                            bounds: {
                                min: {
                                    x: -1 / 0,
                                    y: -1 / 0
                                },
                                max: {
                                    x: 1 / 0,
                                    y: 1 / 0
                                }
                            }
                        }, e)
                    }
                }, {
                    "../constraint/Constraint": 12,
                    "../core/Common": 14,
                    "./Composite": 2
                }],
                4: [function(e, t, n) {
                    var i = {};
                    t.exports = i, i.create = function(e) {
                        return {
                            id: i.id(e),
                            vertex: e,
                            normalImpulse: 0,
                            tangentImpulse: 0
                        }
                    }, i.id = function(e) {
                        return e.body.id + "_" + e.index
                    }
                }, {}],
                5: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("./SAT"),
                        a = e("./Pair"),
                        l = e("../geometry/Bounds");
                    i.collisions = function(e, t) {
                        for (var n = [], c = t.pairs.table, d = 0; d < e.length; d++) {
                            var u = e[d][0],
                                p = e[d][1];
                            if ((!u.isStatic && !u.isSleeping || !p.isStatic && !p.isSleeping) && i.canCollide(u.collisionFilter, p.collisionFilter) && l.overlaps(u.bounds, p.bounds))
                                for (var m = u.parts.length > 1 ? 1 : 0; m < u.parts.length; m++)
                                    for (var f = u.parts[m], v = p.parts.length > 1 ? 1 : 0; v < p.parts.length; v++) {
                                        var y = p.parts[v];
                                        if (f === u && y === p || l.overlaps(f.bounds, y.bounds)) {
                                            var g, x = c[a.id(f, y)];
                                            g = x && x.isActive ? x.collision : null;
                                            var h = s.collides(f, y, g);
                                            h.collided && n.push(h)
                                        }
                                    }
                        }
                        return n
                    }, i.canCollide = function(e, t) {
                        return e.group === t.group && 0 !== e.group ? e.group > 0 : (e.mask & t.category) != 0 && (t.mask & e.category) != 0
                    }
                }, {
                    "../geometry/Bounds": 26,
                    "./Pair": 7,
                    "./SAT": 11
                }],
                6: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("./Pair"),
                        a = e("./Detector"),
                        l = e("../core/Common");
                    i.create = function(e) {
                        var t = {
                            controller: i,
                            detector: a.collisions,
                            buckets: {},
                            pairs: {},
                            pairsList: [],
                            bucketWidth: 48,
                            bucketHeight: 48
                        };
                        return l.extend(t, e)
                    }, i.update = function(e, t, n, s) {
                        var a, l, c, d, u, p = n.world,
                            m = e.buckets,
                            f = !1;
                        for (a = 0; a < t.length; a++) {
                            var v = t[a];
                            if ((!v.isSleeping || s) && !(v.bounds.max.x < p.bounds.min.x) && !(v.bounds.min.x > p.bounds.max.x) && !(v.bounds.max.y < p.bounds.min.y) && !(v.bounds.min.y > p.bounds.max.y)) {
                                var y = i._getRegion(e, v);
                                if (!v.region || y.id !== v.region.id || s) {
                                    (!v.region || s) && (v.region = y);
                                    var g = i._regionUnion(y, v.region);
                                    for (l = g.startCol; l <= g.endCol; l++)
                                        for (c = g.startRow; c <= g.endRow; c++) {
                                            d = m[u = i._getBucketId(l, c)];
                                            var x = l >= y.startCol && l <= y.endCol && c >= y.startRow && c <= y.endRow,
                                                h = l >= v.region.startCol && l <= v.region.endCol && c >= v.region.startRow && c <= v.region.endRow;
                                            !x && h && h && d && i._bucketRemoveBody(e, d, v), (v.region === y || x && !h || s) && (d || (d = i._createBucket(m, u)), i._bucketAddBody(e, d, v))
                                        }
                                    v.region = y, f = !0
                                }
                            }
                        }
                        f && (e.pairsList = i._createActivePairsList(e))
                    }, i.clear = function(e) {
                        e.buckets = {}, e.pairs = {}, e.pairsList = []
                    }, i._regionUnion = function(e, t) {
                        var n = Math.min(e.startCol, t.startCol),
                            s = Math.max(e.endCol, t.endCol),
                            a = Math.min(e.startRow, t.startRow),
                            l = Math.max(e.endRow, t.endRow);
                        return i._createRegion(n, s, a, l)
                    }, i._getRegion = function(e, t) {
                        var n = t.bounds,
                            s = Math.floor(n.min.x / e.bucketWidth),
                            a = Math.floor(n.max.x / e.bucketWidth),
                            l = Math.floor(n.min.y / e.bucketHeight),
                            c = Math.floor(n.max.y / e.bucketHeight);
                        return i._createRegion(s, a, l, c)
                    }, i._createRegion = function(e, t, n, i) {
                        return {
                            id: e + "," + t + "," + n + "," + i,
                            startCol: e,
                            endCol: t,
                            startRow: n,
                            endRow: i
                        }
                    }, i._getBucketId = function(e, t) {
                        return "C" + e + "R" + t
                    }, i._createBucket = function(e, t) {
                        return e[t] = []
                    }, i._bucketAddBody = function(e, t, n) {
                        for (var i = 0; i < t.length; i++) {
                            var a = t[i];
                            if (n.id !== a.id && (!n.isStatic || !a.isStatic)) {
                                var l = s.id(n, a),
                                    c = e.pairs[l];
                                c ? c[2] += 1 : e.pairs[l] = [n, a, 1]
                            }
                        }
                        t.push(n)
                    }, i._bucketRemoveBody = function(e, t, n) {
                        t.splice(l.indexOf(t, n), 1);
                        for (var i = 0; i < t.length; i++) {
                            var a = t[i],
                                c = s.id(n, a),
                                d = e.pairs[c];
                            d && (d[2] -= 1)
                        }
                    }, i._createActivePairsList = function(e) {
                        var t, n, i = [];
                        t = l.keys(e.pairs);
                        for (var s = 0; s < t.length; s++)(n = e.pairs[t[s]])[2] > 0 ? i.push(n) : delete e.pairs[t[s]];
                        return i
                    }
                }, {
                    "../core/Common": 14,
                    "./Detector": 5,
                    "./Pair": 7
                }],
                7: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("./Contact");
                    i.create = function(e, t) {
                        var n = e.bodyA,
                            s = e.bodyB,
                            a = e.parentA,
                            l = e.parentB,
                            c = {
                                id: i.id(n, s),
                                bodyA: n,
                                bodyB: s,
                                contacts: {},
                                activeContacts: [],
                                separation: 0,
                                isActive: !0,
                                isSensor: n.isSensor || s.isSensor,
                                timeCreated: t,
                                timeUpdated: t,
                                inverseMass: a.inverseMass + l.inverseMass,
                                friction: Math.min(a.friction, l.friction),
                                frictionStatic: Math.max(a.frictionStatic, l.frictionStatic),
                                restitution: Math.max(a.restitution, l.restitution),
                                slop: Math.max(a.slop, l.slop)
                            };
                        return i.update(c, e, t), c
                    }, i.update = function(e, t, n) {
                        var a = e.contacts,
                            l = t.supports,
                            c = e.activeContacts,
                            d = t.parentA,
                            u = t.parentB;
                        if (e.collision = t, e.inverseMass = d.inverseMass + u.inverseMass, e.friction = Math.min(d.friction, u.friction), e.frictionStatic = Math.max(d.frictionStatic, u.frictionStatic), e.restitution = Math.max(d.restitution, u.restitution), e.slop = Math.max(d.slop, u.slop), c.length = 0, t.collided) {
                            for (var p = 0; p < l.length; p++) {
                                var m = l[p],
                                    f = s.id(m),
                                    v = a[f];
                                v ? c.push(v) : c.push(a[f] = s.create(m))
                            }
                            e.separation = t.depth, i.setActive(e, !0, n)
                        } else !0 === e.isActive && i.setActive(e, !1, n)
                    }, i.setActive = function(e, t, n) {
                        t ? (e.isActive = !0, e.timeUpdated = n) : (e.isActive = !1, e.activeContacts.length = 0)
                    }, i.id = function(e, t) {
                        return e.id < t.id ? "A" + e.id + "B" + t.id : "A" + t.id + "B" + e.id
                    }
                }, {
                    "./Contact": 4
                }],
                8: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("./Pair"),
                        a = e("../core/Common");
                    i._pairMaxIdleLife = 1e3, i.create = function(e) {
                        return a.extend({
                            table: {},
                            list: [],
                            collisionStart: [],
                            collisionActive: [],
                            collisionEnd: []
                        }, e)
                    }, i.update = function(e, t, n) {
                        var i, l, c, d, u = e.list,
                            p = e.table,
                            m = e.collisionStart,
                            f = e.collisionEnd,
                            v = e.collisionActive,
                            y = [];
                        for (d = 0, m.length = 0, f.length = 0, v.length = 0; d < t.length; d++)(i = t[d]).collided && (l = s.id(i.bodyA, i.bodyB), y.push(l), (c = p[l]) ? (c.isActive ? v.push(c) : m.push(c), s.update(c, i, n)) : (c = s.create(i, n), p[l] = c, m.push(c), u.push(c)));
                        for (d = 0; d < u.length; d++)(c = u[d]).isActive && -1 === a.indexOf(y, c.id) && (s.setActive(c, !1, n), f.push(c))
                    }, i.removeOld = function(e, t) {
                        var n, s, a, l, c = e.list,
                            d = e.table,
                            u = [];
                        for (l = 0; l < c.length; l++) {
                            if ((s = (n = c[l]).collision).bodyA.isSleeping || s.bodyB.isSleeping) {
                                n.timeUpdated = t;
                                continue
                            }
                            t - n.timeUpdated > i._pairMaxIdleLife && u.push(l)
                        }
                        for (l = 0; l < u.length; l++) n = c[a = u[l] - l], delete d[n.id], c.splice(a, 1)
                    }, i.clear = function(e) {
                        return e.table = {}, e.list.length = 0, e.collisionStart.length = 0, e.collisionActive.length = 0, e.collisionEnd.length = 0, e
                    }
                }, {
                    "../core/Common": 14,
                    "./Pair": 7
                }],
                9: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("../geometry/Vector"),
                        a = e("./SAT"),
                        l = e("../geometry/Bounds"),
                        c = e("../factory/Bodies"),
                        d = e("../geometry/Vertices");
                    i.collides = function(e, t) {
                        for (var n = [], i = 0; i < t.length; i++) {
                            var s = t[i];
                            if (l.overlaps(s.bounds, e.bounds))
                                for (var c = 1 === s.parts.length ? 0 : 1; c < s.parts.length; c++) {
                                    var d = s.parts[c];
                                    if (l.overlaps(d.bounds, e.bounds)) {
                                        var u = a.collides(d, e);
                                        if (u.collided) {
                                            n.push(u);
                                            break
                                        }
                                    }
                                }
                        }
                        return n
                    }, i.ray = function(e, t, n, a) {
                        a = a || 1e-100;
                        for (var l = s.angle(t, n), d = s.magnitude(s.sub(t, n)), u = (n.x + t.x) * .5, p = (n.y + t.y) * .5, m = c.rectangle(u, p, d, a, {
                                angle: l
                            }), f = i.collides(m, e), v = 0; v < f.length; v += 1) {
                            var y = f[v];
                            y.body = y.bodyB = y.bodyA
                        }
                        return f
                    }, i.region = function(e, t, n) {
                        for (var i = [], s = 0; s < e.length; s++) {
                            var a = e[s],
                                c = l.overlaps(a.bounds, t);
                            (c && !n || !c && n) && i.push(a)
                        }
                        return i
                    }, i.point = function(e, t) {
                        for (var n = [], i = 0; i < e.length; i++) {
                            var s = e[i];
                            if (l.contains(s.bounds, t))
                                for (var a = 1 === s.parts.length ? 0 : 1; a < s.parts.length; a++) {
                                    var c = s.parts[a];
                                    if (l.contains(c.bounds, t) && d.contains(c.vertices, t)) {
                                        n.push(s);
                                        break
                                    }
                                }
                        }
                        return n
                    }
                }, {
                    "../factory/Bodies": 23,
                    "../geometry/Bounds": 26,
                    "../geometry/Vector": 28,
                    "../geometry/Vertices": 29,
                    "./SAT": 11
                }],
                10: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("../geometry/Vertices"),
                        a = e("../geometry/Vector"),
                        l = e("../core/Common"),
                        c = e("../geometry/Bounds");
                    i._restingThresh = 4, i._restingThreshTangent = 6, i._positionDampen = .9, i._positionWarming = .8, i._frictionNormalMultiplier = 5, i.preSolvePosition = function(e) {
                        var t, n, i;
                        for (t = 0; t < e.length; t++)(n = e[t]).isActive && (i = n.activeContacts.length, n.collision.parentA.totalContacts += i, n.collision.parentB.totalContacts += i)
                    }, i.solvePosition = function(e, t) {
                        var n, s, l, c, d, u, p, m, f, v = a._temp[0],
                            y = a._temp[1],
                            g = a._temp[2],
                            x = a._temp[3];
                        for (n = 0; n < e.length; n++)(s = e[n]).isActive && !s.isSensor && (c = (l = s.collision).parentA, d = l.parentB, u = l.normal, p = a.sub(a.add(d.positionImpulse, d.position, v), a.add(c.positionImpulse, a.sub(d.position, l.penetration, y), g), x), s.separation = a.dot(u, p));
                        for (n = 0; n < e.length; n++) !(s = e[n]).isActive || s.isSensor || (c = (l = s.collision).parentA, d = l.parentB, u = l.normal, f = (s.separation - s.slop) * t, (c.isStatic || d.isStatic) && (f *= 2), c.isStatic || c.isSleeping || (m = i._positionDampen / c.totalContacts, c.positionImpulse.x += u.x * f * m, c.positionImpulse.y += u.y * f * m), d.isStatic || d.isSleeping || (m = i._positionDampen / d.totalContacts, d.positionImpulse.x -= u.x * f * m, d.positionImpulse.y -= u.y * f * m))
                    }, i.postSolvePosition = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            if (n.totalContacts = 0, 0 !== n.positionImpulse.x || 0 !== n.positionImpulse.y) {
                                for (var l = 0; l < n.parts.length; l++) {
                                    var d = n.parts[l];
                                    s.translate(d.vertices, n.positionImpulse), c.update(d.bounds, d.vertices, n.velocity), d.position.x += n.positionImpulse.x, d.position.y += n.positionImpulse.y
                                }
                                n.positionPrev.x += n.positionImpulse.x, n.positionPrev.y += n.positionImpulse.y, 0 > a.dot(n.positionImpulse, n.velocity) ? (n.positionImpulse.x = 0, n.positionImpulse.y = 0) : (n.positionImpulse.x *= i._positionWarming, n.positionImpulse.y *= i._positionWarming)
                            }
                        }
                    }, i.preSolveVelocity = function(e) {
                        var t, n, i, s, l, c, d, u, p, m, f, v, y, g, x = a._temp[0],
                            h = a._temp[1];
                        for (t = 0; t < e.length; t++)
                            if ((i = e[t]).isActive && !i.isSensor)
                                for (n = 0, s = i.activeContacts, c = (l = i.collision).parentA, d = l.parentB, u = l.normal, p = l.tangent; n < s.length; n++) f = (m = s[n]).vertex, v = m.normalImpulse, y = m.tangentImpulse, 0 === v && 0 === y || (x.x = u.x * v + p.x * y, x.y = u.y * v + p.y * y, c.isStatic || c.isSleeping || (g = a.sub(f, c.position, h), c.positionPrev.x += x.x * c.inverseMass, c.positionPrev.y += x.y * c.inverseMass, c.anglePrev += a.cross(g, x) * c.inverseInertia), d.isStatic || d.isSleeping || (g = a.sub(f, d.position, h), d.positionPrev.x -= x.x * d.inverseMass, d.positionPrev.y -= x.y * d.inverseMass, d.anglePrev -= a.cross(g, x) * d.inverseInertia))
                    }, i.solveVelocity = function(e, t) {
                        for (var n = t * t, s = a._temp[0], c = a._temp[1], d = a._temp[2], u = a._temp[3], p = a._temp[4], m = a._temp[5], f = 0; f < e.length; f++) {
                            var v = e[f];
                            if (v.isActive && !v.isSensor) {
                                var y = v.collision,
                                    g = y.parentA,
                                    x = y.parentB,
                                    h = y.normal,
                                    b = y.tangent,
                                    w = v.activeContacts,
                                    S = 1 / w.length;
                                g.velocity.x = g.position.x - g.positionPrev.x, g.velocity.y = g.position.y - g.positionPrev.y, x.velocity.x = x.position.x - x.positionPrev.x, x.velocity.y = x.position.y - x.positionPrev.y, g.angularVelocity = g.angle - g.anglePrev, x.angularVelocity = x.angle - x.anglePrev;
                                for (var C = 0; C < w.length; C++) {
                                    var A = w[C],
                                        P = A.vertex,
                                        B = a.sub(P, g.position, c),
                                        M = a.sub(P, x.position, d),
                                        k = a.add(g.velocity, a.mult(a.perp(B), g.angularVelocity), u),
                                        I = a.add(x.velocity, a.mult(a.perp(M), x.angularVelocity), p),
                                        _ = a.sub(k, I, m),
                                        T = a.dot(h, _),
                                        R = a.dot(b, _),
                                        V = Math.abs(R),
                                        E = l.sign(R),
                                        L = (1 + v.restitution) * T,
                                        F = l.clamp(v.separation + T, 0, 1) * i._frictionNormalMultiplier,
                                        O = R,
                                        W = 1 / 0;
                                    V > v.friction * v.frictionStatic * F * n && (W = V, O = l.clamp(v.friction * E * n, -W, W));
                                    var q = a.cross(B, h),
                                        D = a.cross(M, h),
                                        N = S / (g.inverseMass + x.inverseMass + g.inverseInertia * q * q + x.inverseInertia * D * D);
                                    if (L *= N, O *= N, T < 0 && T * T > i._restingThresh * n) A.normalImpulse = 0;
                                    else {
                                        var G = A.normalImpulse;
                                        A.normalImpulse = Math.min(A.normalImpulse + L, 0), L = A.normalImpulse - G
                                    }
                                    if (R * R > i._restingThreshTangent * n) A.tangentImpulse = 0;
                                    else {
                                        var j = A.tangentImpulse;
                                        A.tangentImpulse = l.clamp(A.tangentImpulse + O, -W, W), O = A.tangentImpulse - j
                                    }
                                    s.x = h.x * L + b.x * O, s.y = h.y * L + b.y * O, g.isStatic || g.isSleeping || (g.positionPrev.x += s.x * g.inverseMass, g.positionPrev.y += s.y * g.inverseMass, g.anglePrev += a.cross(B, s) * g.inverseInertia), x.isStatic || x.isSleeping || (x.positionPrev.x -= s.x * x.inverseMass, x.positionPrev.y -= s.y * x.inverseMass, x.anglePrev -= a.cross(M, s) * x.inverseInertia)
                                }
                            }
                        }
                    }
                }, {
                    "../core/Common": 14,
                    "../geometry/Bounds": 26,
                    "../geometry/Vector": 28,
                    "../geometry/Vertices": 29
                }],
                11: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("../geometry/Vertices"),
                        a = e("../geometry/Vector");
                    i.collides = function(e, t, n) {
                        var l, c, d, u, p = !1;
                        if (n) {
                            var m = e.parent,
                                f = t.parent,
                                v = m.speed * m.speed + m.angularSpeed * m.angularSpeed + f.speed * f.speed + f.angularSpeed * f.angularSpeed;
                            p = n && n.collided && v < .2, u = n
                        } else u = {
                            collided: !1,
                            bodyA: e,
                            bodyB: t
                        };
                        if (n && p) {
                            var y = u.axisBody,
                                g = y === e ? t : e,
                                x = [y.axes[n.axisNumber]];
                            if (d = i._overlapAxes(y.vertices, g.vertices, x), u.reused = !0, d.overlap <= 0) return u.collided = !1, u
                        } else {
                            if ((l = i._overlapAxes(e.vertices, t.vertices, e.axes)).overlap <= 0 || (c = i._overlapAxes(t.vertices, e.vertices, t.axes)).overlap <= 0) return u.collided = !1, u;
                            l.overlap < c.overlap ? (d = l, u.axisBody = e) : (d = c, u.axisBody = t), u.axisNumber = d.axisNumber
                        }
                        u.bodyA = e.id < t.id ? e : t, u.bodyB = e.id < t.id ? t : e, u.collided = !0, u.depth = d.overlap, u.parentA = u.bodyA.parent, u.parentB = u.bodyB.parent, e = u.bodyA, t = u.bodyB, 0 > a.dot(d.axis, a.sub(t.position, e.position)) ? u.normal = {
                            x: d.axis.x,
                            y: d.axis.y
                        } : u.normal = {
                            x: -d.axis.x,
                            y: -d.axis.y
                        }, u.tangent = a.perp(u.normal), u.penetration = u.penetration || {}, u.penetration.x = u.normal.x * u.depth, u.penetration.y = u.normal.y * u.depth;
                        var h = i._findSupports(e, t, u.normal),
                            b = [];
                        if (s.contains(e.vertices, h[0]) && b.push(h[0]), s.contains(e.vertices, h[1]) && b.push(h[1]), b.length < 2) {
                            var w = i._findSupports(t, e, a.neg(u.normal));
                            s.contains(t.vertices, w[0]) && b.push(w[0]), b.length < 2 && s.contains(t.vertices, w[1]) && b.push(w[1])
                        }
                        return b.length < 1 && (b = [h[0]]), u.supports = b, u
                    }, i._overlapAxes = function(e, t, n) {
                        for (var s, l, c = a._temp[0], d = a._temp[1], u = {
                                overlap: Number.MAX_VALUE
                            }, p = 0; p < n.length; p++) {
                            if (l = n[p], i._projectToAxis(c, e, l), i._projectToAxis(d, t, l), (s = Math.min(c.max - d.min, d.max - c.min)) <= 0) {
                                u.overlap = s;
                                break
                            }
                            s < u.overlap && (u.overlap = s, u.axis = l, u.axisNumber = p)
                        }
                        return u
                    }, i._projectToAxis = function(e, t, n) {
                        for (var i = a.dot(t[0], n), s = i, l = 1; l < t.length; l += 1) {
                            var c = a.dot(t[l], n);
                            c > s ? s = c : c < i && (i = c)
                        }
                        e.min = i, e.max = s
                    }, i._findSupports = function(e, t, n) {
                        for (var i, s, l, c, d = Number.MAX_VALUE, u = a._temp[0], p = t.vertices, m = e.position, f = 0; f < p.length; f++) s = p[f], u.x = s.x - m.x, u.y = s.y - m.y, (i = -a.dot(n, u)) < d && (d = i, l = s);
                        var v = l.index - 1 >= 0 ? l.index - 1 : p.length - 1;
                        s = p[v], u.x = s.x - m.x, u.y = s.y - m.y, d = -a.dot(n, u), c = s;
                        var y = (l.index + 1) % p.length;
                        return s = p[y], u.x = s.x - m.x, u.y = s.y - m.y, (i = -a.dot(n, u)) < d && (c = s), [l, c]
                    }
                }, {
                    "../geometry/Vector": 28,
                    "../geometry/Vertices": 29
                }],
                12: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("../geometry/Vertices"),
                        a = e("../geometry/Vector"),
                        l = e("../core/Sleeping"),
                        c = e("../geometry/Bounds"),
                        d = e("../geometry/Axes"),
                        u = e("../core/Common");
                    i._warming = .4, i._torqueDampen = 1, i._minLength = 1e-6, i.create = function(e) {
                        e.bodyA && !e.pointA && (e.pointA = {
                            x: 0,
                            y: 0
                        }), e.bodyB && !e.pointB && (e.pointB = {
                            x: 0,
                            y: 0
                        });
                        var t = e.bodyA ? a.add(e.bodyA.position, e.pointA) : e.pointA,
                            n = e.bodyB ? a.add(e.bodyB.position, e.pointB) : e.pointB,
                            i = a.magnitude(a.sub(t, n));
                        e.length = void 0 !== e.length ? e.length : i, e.id = e.id || u.nextId(), e.label = e.label || "Constraint", e.type = "constraint", e.stiffness = e.stiffness || (e.length > 0 ? 1 : .7), e.damping = e.damping || 0, e.angularStiffness = e.angularStiffness || 0, e.angleA = e.bodyA ? e.bodyA.angle : e.angleA, e.angleB = e.bodyB ? e.bodyB.angle : e.angleB, e.plugin = {};
                        var s = {
                            visible: !0,
                            lineWidth: 2,
                            strokeStyle: "#ffffff",
                            type: "line",
                            anchors: !0
                        };
                        return 0 === e.length && e.stiffness > .1 ? (s.type = "pin", s.anchors = !1) : e.stiffness < .9 && (s.type = "spring"), e.render = u.extend(s, e.render), e
                    }, i.preSolveAll = function(e) {
                        for (var t = 0; t < e.length; t += 1) {
                            var n = e[t],
                                i = n.constraintImpulse;
                            n.isStatic || 0 === i.x && 0 === i.y && 0 === i.angle || (n.position.x += i.x, n.position.y += i.y, n.angle += i.angle)
                        }
                    }, i.solveAll = function(e, t) {
                        for (var n = 0; n < e.length; n += 1) {
                            var s = e[n],
                                a = !s.bodyA || s.bodyA && s.bodyA.isStatic,
                                l = !s.bodyB || s.bodyB && s.bodyB.isStatic;
                            (a || l) && i.solve(e[n], t)
                        }
                        for (n = 0; n < e.length; n += 1) a = !(s = e[n]).bodyA || s.bodyA && s.bodyA.isStatic, l = !s.bodyB || s.bodyB && s.bodyB.isStatic, a || l || i.solve(e[n], t)
                    }, i.solve = function(e, t) {
                        var n = e.bodyA,
                            s = e.bodyB,
                            l = e.pointA,
                            c = e.pointB;
                        if (n || s) {
                            n && !n.isStatic && (a.rotate(l, n.angle - e.angleA, l), e.angleA = n.angle), s && !s.isStatic && (a.rotate(c, s.angle - e.angleB, c), e.angleB = s.angle);
                            var d = l,
                                u = c;
                            if (n && (d = a.add(n.position, l)), s && (u = a.add(s.position, c)), d && u) {
                                var p = a.sub(d, u),
                                    m = a.magnitude(p);
                                m < i._minLength && (m = i._minLength);
                                var f, v, y, g, x, h = (m - e.length) / m,
                                    b = e.stiffness < 1 ? e.stiffness * t : e.stiffness,
                                    w = a.mult(p, h * b),
                                    S = (n ? n.inverseMass : 0) + (s ? s.inverseMass : 0),
                                    C = S + ((n ? n.inverseInertia : 0) + (s ? s.inverseInertia : 0));
                                if (e.damping) {
                                    var A = a.create();
                                    y = a.div(p, m), x = a.sub(s && a.sub(s.position, s.positionPrev) || A, n && a.sub(n.position, n.positionPrev) || A), g = a.dot(y, x)
                                }
                                n && !n.isStatic && (v = n.inverseMass / S, n.constraintImpulse.x -= w.x * v, n.constraintImpulse.y -= w.y * v, n.position.x -= w.x * v, n.position.y -= w.y * v, e.damping && (n.positionPrev.x -= e.damping * y.x * g * v, n.positionPrev.y -= e.damping * y.y * g * v), f = a.cross(l, w) / C * i._torqueDampen * n.inverseInertia * (1 - e.angularStiffness), n.constraintImpulse.angle -= f, n.angle -= f), s && !s.isStatic && (v = s.inverseMass / S, s.constraintImpulse.x += w.x * v, s.constraintImpulse.y += w.y * v, s.position.x += w.x * v, s.position.y += w.y * v, e.damping && (s.positionPrev.x += e.damping * y.x * g * v, s.positionPrev.y += e.damping * y.y * g * v), f = a.cross(c, w) / C * i._torqueDampen * s.inverseInertia * (1 - e.angularStiffness), s.constraintImpulse.angle += f, s.angle += f)
                            }
                        }
                    }, i.postSolveAll = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t],
                                u = n.constraintImpulse;
                            if (!n.isStatic && (0 !== u.x || 0 !== u.y || 0 !== u.angle)) {
                                l.set(n, !1);
                                for (var p = 0; p < n.parts.length; p++) {
                                    var m = n.parts[p];
                                    s.translate(m.vertices, u), p > 0 && (m.position.x += u.x, m.position.y += u.y), 0 !== u.angle && (s.rotate(m.vertices, u.angle, n.position), d.rotate(m.axes, u.angle), p > 0 && a.rotateAbout(m.position, u.angle, n.position, m.position)), c.update(m.bounds, m.vertices, n.velocity)
                                }
                                u.angle *= i._warming, u.x *= i._warming, u.y *= i._warming
                            }
                        }
                    }
                }, {
                    "../core/Common": 14,
                    "../core/Sleeping": 22,
                    "../geometry/Axes": 25,
                    "../geometry/Bounds": 26,
                    "../geometry/Vector": 28,
                    "../geometry/Vertices": 29
                }],
                13: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("../geometry/Vertices"),
                        a = e("../core/Sleeping"),
                        l = e("../core/Mouse"),
                        c = e("../core/Events"),
                        d = e("../collision/Detector"),
                        u = e("./Constraint"),
                        p = e("../body/Composite"),
                        m = e("../core/Common"),
                        f = e("../geometry/Bounds");
                    i.create = function(e, t) {
                        var n = (e ? e.mouse : null) || (t ? t.mouse : null);
                        n || (e && e.render && e.render.canvas ? n = l.create(e.render.canvas) : t && t.element ? n = l.create(t.element) : (n = l.create(), m.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
                        var s = u.create({
                                label: "Mouse Constraint",
                                pointA: n.position,
                                pointB: {
                                    x: 0,
                                    y: 0
                                },
                                length: .01,
                                stiffness: .1,
                                angularStiffness: 1,
                                render: {
                                    strokeStyle: "#90EE90",
                                    lineWidth: 3
                                }
                            }),
                            a = {
                                type: "mouseConstraint",
                                mouse: n,
                                element: null,
                                body: null,
                                constraint: s,
                                collisionFilter: {
                                    category: 1,
                                    mask: 4294967295,
                                    group: 0
                                }
                            },
                            d = m.extend(a, t);
                        return c.on(e, "beforeUpdate", function() {
                            var t = p.allBodies(e.world);
                            i.update(d, t), i._triggerEvents(d)
                        }), d
                    }, i.update = function(e, t) {
                        var n = e.mouse,
                            i = e.constraint,
                            l = e.body;
                        if (0 === n.button) {
                            if (i.bodyB) a.set(i.bodyB, !1), i.pointA = n.position;
                            else
                                for (var u = 0; u < t.length; u++)
                                    if (l = t[u], f.contains(l.bounds, n.position) && d.canCollide(l.collisionFilter, e.collisionFilter))
                                        for (var p = l.parts.length > 1 ? 1 : 0; p < l.parts.length; p++) {
                                            var m = l.parts[p];
                                            if (s.contains(m.vertices, n.position)) {
                                                i.pointA = n.position, i.bodyB = e.body = l, i.pointB = {
                                                    x: n.position.x - l.position.x,
                                                    y: n.position.y - l.position.y
                                                }, i.angleB = l.angle, a.set(l, !1), c.trigger(e, "startdrag", {
                                                    mouse: n,
                                                    body: l
                                                });
                                                break
                                            }
                                        }
                        } else i.bodyB = e.body = null, i.pointB = null, l && c.trigger(e, "enddrag", {
                            mouse: n,
                            body: l
                        })
                    }, i._triggerEvents = function(e) {
                        var t = e.mouse,
                            n = t.sourceEvents;
                        n.mousemove && c.trigger(e, "mousemove", {
                            mouse: t
                        }), n.mousedown && c.trigger(e, "mousedown", {
                            mouse: t
                        }), n.mouseup && c.trigger(e, "mouseup", {
                            mouse: t
                        }), l.clearSourceEvents(t)
                    }
                }, {
                    "../body/Composite": 2,
                    "../collision/Detector": 5,
                    "../core/Common": 14,
                    "../core/Events": 16,
                    "../core/Mouse": 19,
                    "../core/Sleeping": 22,
                    "../geometry/Bounds": 26,
                    "../geometry/Vertices": 29,
                    "./Constraint": 12
                }],
                14: [function(e, t, i) {
                    (function(n) {
                        var i, s = {};
                        t.exports = s, s._nextId = 0, s._seed = 0, s._nowStartTime = +new Date, s.extend = function(e, t) {
                            var n, i;
                            "boolean" == typeof t ? (n = 2, i = t) : (n = 1, i = !0);
                            for (var a = n; a < arguments.length; a++) {
                                var l = arguments[a];
                                if (l)
                                    for (var c in l) i && l[c] && l[c].constructor === Object ? e[c] && e[c].constructor !== Object ? e[c] = l[c] : (e[c] = e[c] || {}, s.extend(e[c], i, l[c])) : e[c] = l[c]
                            }
                            return e
                        }, s.clone = function(e, t) {
                            return s.extend({}, t, e)
                        }, s.keys = function(e) {
                            if (Object.keys) return Object.keys(e);
                            var t = [];
                            for (var n in e) t.push(n);
                            return t
                        }, s.values = function(e) {
                            var t = [];
                            if (Object.keys) {
                                for (var n = Object.keys(e), i = 0; i < n.length; i++) t.push(e[n[i]]);
                                return t
                            }
                            for (var s in e) t.push(e[s]);
                            return t
                        }, s.get = function(e, t, n, i) {
                            t = t.split(".").slice(n, i);
                            for (var s = 0; s < t.length; s += 1) e = e[t[s]];
                            return e
                        }, s.set = function(e, t, n, i, a) {
                            var l = t.split(".").slice(i, a);
                            return s.get(e, t, 0, -1)[l[l.length - 1]] = n, n
                        }, s.shuffle = function(e) {
                            for (var t = e.length - 1; t > 0; t--) {
                                var n = Math.floor(s.random() * (t + 1)),
                                    i = e[t];
                                e[t] = e[n], e[n] = i
                            }
                            return e
                        }, s.choose = function(e) {
                            return e[Math.floor(s.random() * e.length)]
                        }, s.isElement = function(e) {
                            return "undefined" != typeof HTMLElement ? e instanceof HTMLElement : !!(e && e.nodeType && e.nodeName)
                        }, s.isArray = function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }, s.isFunction = function(e) {
                            return "function" == typeof e
                        }, s.isPlainObject = function(e) {
                            return "object" == typeof e && e.constructor === Object
                        }, s.isString = function(e) {
                            return "[object String]" === toString.call(e)
                        }, s.clamp = function(e, t, n) {
                            return e < t ? t : e > n ? n : e
                        }, s.sign = function(e) {
                            return e < 0 ? -1 : 1
                        }, s.now = function() {
                            if (window.performance) {
                                if (window.performance.now) return window.performance.now();
                                if (window.performance.webkitNow) return window.performance.webkitNow()
                            }
                            return new Date - s._nowStartTime
                        }, s.random = function(e, t) {
                            return t = void 0 !== t ? t : 1, (e = void 0 !== e ? e : 0) + i() * (t - e)
                        }, i = function() {
                            return s._seed = (9301 * s._seed + 49297) % 233280, s._seed / 233280
                        }, s.colorToNumber = function(e) {
                            return 3 == (e = e.replace("#", "")).length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)), parseInt(e, 16)
                        }, s.logLevel = 1, s.log = function() {
                            console && s.logLevel > 0 && s.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                        }, s.info = function() {
                            console && s.logLevel > 0 && s.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                        }, s.warn = function() {
                            console && s.logLevel > 0 && s.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                        }, s.nextId = function() {
                            return s._nextId++
                        }, s.indexOf = function(e, t) {
                            if (e.indexOf) return e.indexOf(t);
                            for (var n = 0; n < e.length; n++)
                                if (e[n] === t) return n;
                            return -1
                        }, s.map = function(e, t) {
                            if (e.map) return e.map(t);
                            for (var n = [], i = 0; i < e.length; i += 1) n.push(t(e[i]));
                            return n
                        }, s.topologicalSort = function(e) {
                            var t = [],
                                n = [],
                                i = [];
                            for (var a in e) n[a] || i[a] || s._topologicalSort(a, n, i, e, t);
                            return t
                        }, s._topologicalSort = function(e, t, n, i, a) {
                            var l = i[e] || [];
                            n[e] = !0;
                            for (var c = 0; c < l.length; c += 1) {
                                var d = l[c];
                                !n[d] && (t[d] || s._topologicalSort(d, t, n, i, a))
                            }
                            n[e] = !1, t[e] = !0, a.push(e)
                        }, s.chain = function() {
                            for (var e = [], t = 0; t < arguments.length; t += 1) {
                                var n = arguments[t];
                                n._chained ? e.push.apply(e, n._chained) : e.push(n)
                            }
                            var chain = function() {
                                for (var t, n = Array(arguments.length), i = 0, s = arguments.length; i < s; i++) n[i] = arguments[i];
                                for (i = 0; i < e.length; i += 1) {
                                    var a = e[i].apply(t, n);
                                    void 0 !== a && (t = a)
                                }
                                return t
                            };
                            return chain._chained = e, chain
                        }, s.chainPathBefore = function(e, t, n) {
                            return s.set(e, t, s.chain(n, s.get(e, t)))
                        }, s.chainPathAfter = function(e, t, n) {
                            return s.set(e, t, s.chain(s.get(e, t), n))
                        }, s._requireGlobal = function(t, i) {
                            return ("undefined" != typeof window ? window[t] : void 0 !== n ? n[t] : null) || e(i)
                        }
                    }).call(this, void 0 !== n.g ? n.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {}],
                15: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("../body/World"),
                        a = e("./Sleeping"),
                        l = e("../collision/Resolver"),
                        c = e("../render/Render"),
                        d = e("../collision/Pairs");
                    e("./Metrics");
                    var u = e("../collision/Grid"),
                        p = e("./Events"),
                        m = e("../body/Composite"),
                        f = e("../constraint/Constraint"),
                        v = e("./Common"),
                        y = e("../body/Body");
                    i.create = function(e, t) {
                        t = v.isElement(e) ? t : e, e = v.isElement(e) ? e : null, t = t || {}, (e || t.render) && v.warn("Engine.create: engine.render is deprecated (see docs)");
                        var n = v.extend({
                            positionIterations: 6,
                            velocityIterations: 4,
                            constraintIterations: 2,
                            enableSleeping: !1,
                            events: [],
                            plugin: {},
                            timing: {
                                timestamp: 0,
                                timeScale: 1
                            },
                            broadphase: {
                                controller: u
                            }
                        }, t);
                        if (e || n.render) {
                            var i = {
                                element: e,
                                controller: c
                            };
                            n.render = v.extend(i, n.render)
                        }
                        return n.render && n.render.controller && (n.render = n.render.controller.create(n.render)), n.render && (n.render.engine = n), n.world = t.world || s.create(n.world), n.pairs = d.create(), n.broadphase = n.broadphase.controller.create(n.broadphase), n.metrics = n.metrics || {
                            extended: !1
                        }, n
                    }, i.update = function(e, t, n) {
                        t = t || 1e3 / 60, n = n || 1;
                        var s, c = e.world,
                            u = e.timing,
                            v = e.broadphase,
                            y = [];
                        u.timestamp += t * u.timeScale;
                        var g = {
                            timestamp: u.timestamp
                        };
                        p.trigger(e, "beforeUpdate", g);
                        var x = m.allBodies(c),
                            h = m.allConstraints(c);
                        for (e.enableSleeping && a.update(x, u.timeScale), i._bodiesApplyGravity(x, c.gravity), i._bodiesUpdate(x, t, u.timeScale, n, c.bounds), f.preSolveAll(x), s = 0; s < e.constraintIterations; s++) f.solveAll(h, u.timeScale);
                        f.postSolveAll(x), v.controller ? (c.isModified && v.controller.clear(v), v.controller.update(v, x, e, c.isModified), y = v.pairsList) : y = x, c.isModified && m.setModified(c, !1, !1, !0);
                        var b = v.detector(y, e),
                            w = e.pairs,
                            S = u.timestamp;
                        for (d.update(w, b, S), d.removeOld(w, S), e.enableSleeping && a.afterCollisions(w.list, u.timeScale), w.collisionStart.length > 0 && p.trigger(e, "collisionStart", {
                                pairs: w.collisionStart
                            }), l.preSolvePosition(w.list), s = 0; s < e.positionIterations; s++) l.solvePosition(w.list, u.timeScale);
                        for (l.postSolvePosition(x), f.preSolveAll(x), s = 0; s < e.constraintIterations; s++) f.solveAll(h, u.timeScale);
                        for (f.postSolveAll(x), l.preSolveVelocity(w.list), s = 0; s < e.velocityIterations; s++) l.solveVelocity(w.list, u.timeScale);
                        return w.collisionActive.length > 0 && p.trigger(e, "collisionActive", {
                            pairs: w.collisionActive
                        }), w.collisionEnd.length > 0 && p.trigger(e, "collisionEnd", {
                            pairs: w.collisionEnd
                        }), i._bodiesClearForces(x), p.trigger(e, "afterUpdate", g), e
                    }, i.merge = function(e, t) {
                        if (v.extend(e, t), t.world) {
                            e.world = t.world, i.clear(e);
                            for (var n = m.allBodies(e.world), s = 0; s < n.length; s++) {
                                var l = n[s];
                                a.set(l, !1), l.id = v.nextId()
                            }
                        }
                    }, i.clear = function(e) {
                        var t = e.world;
                        d.clear(e.pairs);
                        var n = e.broadphase;
                        if (n.controller) {
                            var i = m.allBodies(t);
                            n.controller.clear(n), n.controller.update(n, i, e, !0)
                        }
                    }, i._bodiesClearForces = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.force.x = 0, n.force.y = 0, n.torque = 0
                        }
                    }, i._bodiesApplyGravity = function(e, t) {
                        var n = void 0 !== t.scale ? t.scale : .001;
                        if ((0 !== t.x || 0 !== t.y) && 0 !== n)
                            for (var i = 0; i < e.length; i++) {
                                var s = e[i];
                                s.isStatic || s.isSleeping || (s.force.y += s.mass * t.y * n, s.force.x += s.mass * t.x * n)
                            }
                    }, i._bodiesUpdate = function(e, t, n, i, s) {
                        for (var a = 0; a < e.length; a++) {
                            var l = e[a];
                            l.isStatic || l.isSleeping || y.update(l, t, n, i)
                        }
                    }
                }, {
                    "../body/Body": 1,
                    "../body/Composite": 2,
                    "../body/World": 3,
                    "../collision/Grid": 6,
                    "../collision/Pairs": 8,
                    "../collision/Resolver": 10,
                    "../constraint/Constraint": 12,
                    "../render/Render": 31,
                    "./Common": 14,
                    "./Events": 16,
                    "./Metrics": 18,
                    "./Sleeping": 22
                }],
                16: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("./Common");
                    i.on = function(e, t, n) {
                        for (var i, s = t.split(" "), a = 0; a < s.length; a++) i = s[a], e.events = e.events || {}, e.events[i] = e.events[i] || [], e.events[i].push(n);
                        return n
                    }, i.off = function(e, t, n) {
                        if (!t) {
                            e.events = {};
                            return
                        }
                        "function" == typeof t && (n = t, t = s.keys(e.events).join(" "));
                        for (var i = t.split(" "), a = 0; a < i.length; a++) {
                            var l = e.events[i[a]],
                                c = [];
                            if (n && l)
                                for (var d = 0; d < l.length; d++) l[d] !== n && c.push(l[d]);
                            e.events[i[a]] = c
                        }
                    }, i.trigger = function(e, t, n) {
                        var i, a, l, c;
                        if (e.events) {
                            n || (n = {}), i = t.split(" ");
                            for (var d = 0; d < i.length; d++)
                                if (a = i[d], l = e.events[a]) {
                                    (c = s.clone(n, !1)).name = a, c.source = e;
                                    for (var u = 0; u < l.length; u++) l[u].apply(e, [c])
                                }
                        }
                    }
                }, {
                    "./Common": 14
                }],
                17: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("./Plugin"),
                        a = e("./Common");
                    i.name = "matter-js", i.version = "0.14.2", i.uses = [], i.used = [], i.use = function() {
                        s.use(i, Array.prototype.slice.call(arguments))
                    }, i.before = function(e, t) {
                        return e = e.replace(/^Matter./, ""), a.chainPathBefore(i, e, t)
                    }, i.after = function(e, t) {
                        return e = e.replace(/^Matter./, ""), a.chainPathAfter(i, e, t)
                    }
                }, {
                    "./Common": 14,
                    "./Plugin": 20
                }],
                18: [function(e, t, n) {}, {
                    "../body/Composite": 2,
                    "./Common": 14
                }],
                19: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("../core/Common");
                    i.create = function(e) {
                        var t = {};
                        return e || s.log("Mouse.create: element was undefined, defaulting to document.body", "warn"), t.element = e || document.body, t.absolute = {
                            x: 0,
                            y: 0
                        }, t.position = {
                            x: 0,
                            y: 0
                        }, t.mousedownPosition = {
                            x: 0,
                            y: 0
                        }, t.mouseupPosition = {
                            x: 0,
                            y: 0
                        }, t.offset = {
                            x: 0,
                            y: 0
                        }, t.scale = {
                            x: 1,
                            y: 1
                        }, t.wheelDelta = 0, t.button = -1, t.pixelRatio = t.element.getAttribute("data-pixel-ratio") || 1, t.sourceEvents = {
                            mousemove: null,
                            mousedown: null,
                            mouseup: null,
                            mousewheel: null
                        }, t.mousemove = function(e) {
                            var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio);
                            e.changedTouches && (t.button = 0, e.preventDefault()), t.absolute.x = n.x, t.absolute.y = n.y, t.position.x = t.absolute.x * t.scale.x + t.offset.x, t.position.y = t.absolute.y * t.scale.y + t.offset.y, t.sourceEvents.mousemove = e
                        }, t.mousedown = function(e) {
                            var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio);
                            e.changedTouches ? (t.button = 0, e.preventDefault()) : t.button = e.button, t.absolute.x = n.x, t.absolute.y = n.y, t.position.x = t.absolute.x * t.scale.x + t.offset.x, t.position.y = t.absolute.y * t.scale.y + t.offset.y, t.mousedownPosition.x = t.position.x, t.mousedownPosition.y = t.position.y, t.sourceEvents.mousedown = e
                        }, t.mouseup = function(e) {
                            var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio);
                            e.changedTouches && e.preventDefault(), t.button = -1, t.absolute.x = n.x, t.absolute.y = n.y, t.position.x = t.absolute.x * t.scale.x + t.offset.x, t.position.y = t.absolute.y * t.scale.y + t.offset.y, t.mouseupPosition.x = t.position.x, t.mouseupPosition.y = t.position.y, t.sourceEvents.mouseup = e
                        }, t.mousewheel = function(e) {
                            t.wheelDelta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)), e.preventDefault()
                        }, i.setElement(t, t.element), t
                    }, i.setElement = function(e, t) {
                        e.element = t, t.addEventListener("mousemove", e.mousemove), t.addEventListener("mousedown", e.mousedown), t.addEventListener("mouseup", e.mouseup), t.addEventListener("mousewheel", e.mousewheel), t.addEventListener("DOMMouseScroll", e.mousewheel), t.addEventListener("touchmove", e.mousemove), t.addEventListener("touchstart", e.mousedown), t.addEventListener("touchend", e.mouseup)
                    }, i.clearSourceEvents = function(e) {
                        e.sourceEvents.mousemove = null, e.sourceEvents.mousedown = null, e.sourceEvents.mouseup = null, e.sourceEvents.mousewheel = null, e.wheelDelta = 0
                    }, i.setOffset = function(e, t) {
                        e.offset.x = t.x, e.offset.y = t.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y
                    }, i.setScale = function(e, t) {
                        e.scale.x = t.x, e.scale.y = t.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y
                    }, i._getRelativeMousePosition = function(e, t, n) {
                        var i, s, a = t.getBoundingClientRect(),
                            l = document.documentElement || document.body.parentNode || document.body,
                            c = void 0 !== window.pageXOffset ? window.pageXOffset : l.scrollLeft,
                            d = void 0 !== window.pageYOffset ? window.pageYOffset : l.scrollTop,
                            u = e.changedTouches;
                        return u ? (i = u[0].pageX - a.left - c, s = u[0].pageY - a.top - d) : (i = e.pageX - a.left - c, s = e.pageY - a.top - d), {
                            x: i / (t.clientWidth / (t.width || t.clientWidth) * n),
                            y: s / (t.clientHeight / (t.height || t.clientHeight) * n)
                        }
                    }
                }, {
                    "../core/Common": 14
                }],
                20: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("./Common");
                    i._registry = {}, i.register = function(e) {
                        if (i.isPlugin(e) || s.warn("Plugin.register:", i.toString(e), "does not implement all required fields."), e.name in i._registry) {
                            var t = i._registry[e.name],
                                n = i.versionParse(e.version).number,
                                a = i.versionParse(t.version).number;
                            n > a ? (s.warn("Plugin.register:", i.toString(t), "was upgraded to", i.toString(e)), i._registry[e.name] = e) : n < a ? s.warn("Plugin.register:", i.toString(t), "can not be downgraded to", i.toString(e)) : e !== t && s.warn("Plugin.register:", i.toString(e), "is already registered to different plugin object")
                        } else i._registry[e.name] = e;
                        return e
                    }, i.resolve = function(e) {
                        return i._registry[i.dependencyParse(e).name]
                    }, i.toString = function(e) {
                        return "string" == typeof e ? e : (e.name || "anonymous") + "@" + (e.version || e.range || "0.0.0")
                    }, i.isPlugin = function(e) {
                        return e && e.name && e.version && e.install
                    }, i.isUsed = function(e, t) {
                        return e.used.indexOf(t) > -1
                    }, i.isFor = function(e, t) {
                        var n = e.for && i.dependencyParse(e.for);
                        return !e.for || t.name === n.name && i.versionSatisfies(t.version, n.range)
                    }, i.use = function(e, t) {
                        if (e.uses = (e.uses || []).concat(t || []), 0 === e.uses.length) {
                            s.warn("Plugin.use:", i.toString(e), "does not specify any dependencies to install.");
                            return
                        }
                        for (var n = i.dependencies(e), a = s.topologicalSort(n), l = [], c = 0; c < a.length; c += 1)
                            if (a[c] !== e.name) {
                                var d = i.resolve(a[c]);
                                if (!d) {
                                    l.push("❌ " + a[c]);
                                    continue
                                }
                                i.isUsed(e, d.name) || (i.isFor(d, e) || (s.warn("Plugin.use:", i.toString(d), "is for", d.for, "but installed on", i.toString(e) + "."), d._warned = !0), d.install ? d.install(e) : (s.warn("Plugin.use:", i.toString(d), "does not specify an install function."), d._warned = !0), d._warned ? (l.push("\uD83D\uDD36 " + i.toString(d)), delete d._warned) : l.push("✅ " + i.toString(d)), e.used.push(d.name))
                            }
                        l.length > 0 && s.info(l.join("  "))
                    }, i.dependencies = function(e, t) {
                        var n = i.dependencyParse(e),
                            a = n.name;
                        if (!(a in (t = t || {}))) {
                            e = i.resolve(e) || e, t[a] = s.map(e.uses || [], function(t) {
                                i.isPlugin(t) && i.register(t);
                                var a = i.dependencyParse(t),
                                    l = i.resolve(t);
                                return l && !i.versionSatisfies(l.version, a.range) ? (s.warn("Plugin.dependencies:", i.toString(l), "does not satisfy", i.toString(a), "used by", i.toString(n) + "."), l._warned = !0, e._warned = !0) : l || (s.warn("Plugin.dependencies:", i.toString(t), "used by", i.toString(n), "could not be resolved."), e._warned = !0), a.name
                            });
                            for (var l = 0; l < t[a].length; l += 1) i.dependencies(t[a][l], t);
                            return t
                        }
                    }, i.dependencyParse = function(e) {
                        return s.isString(e) ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/.test(e) || s.warn("Plugin.dependencyParse:", e, "is not a valid dependency string."), {
                            name: e.split("@")[0],
                            range: e.split("@")[1] || "*"
                        }) : {
                            name: e.name,
                            range: e.range || e.version
                        }
                    }, i.versionParse = function(e) {
                        /^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/.test(e) || s.warn("Plugin.versionParse:", e, "is not a valid version or range.");
                        var t = e.split("-"),
                            n = isNaN(Number((e = t[0])[0])),
                            i = n ? e.substr(1) : e,
                            a = s.map(i.split("."), function(e) {
                                return Number(e)
                            });
                        return {
                            isRange: n,
                            version: i,
                            range: e,
                            operator: n ? e[0] : "",
                            parts: a,
                            prerelease: t[1],
                            number: 1e8 * a[0] + 1e4 * a[1] + a[2]
                        }
                    }, i.versionSatisfies = function(e, t) {
                        t = t || "*";
                        var n = i.versionParse(t),
                            s = n.parts,
                            a = i.versionParse(e),
                            l = a.parts;
                        if (n.isRange) {
                            if ("*" === n.operator || "*" === e) return !0;
                            if ("~" === n.operator) return l[0] === s[0] && l[1] === s[1] && l[2] >= s[2];
                            if ("^" === n.operator) return s[0] > 0 ? l[0] === s[0] && a.number >= n.number : s[1] > 0 ? l[1] === s[1] && l[2] >= s[2] : l[2] === s[2]
                        }
                        return e === t || "*" === e
                    }
                }, {
                    "./Common": 14
                }],
                21: [function(e, t, n) {
                    var i, s, a, l = {};
                    t.exports = l;
                    var c = e("./Events"),
                        d = e("./Engine"),
                        u = e("./Common");
                    "undefined" != typeof window && (i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame, s = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), i || (i = function(e) {
                        a = setTimeout(function() {
                            e(u.now())
                        }, 1e3 / 60)
                    }, s = function() {
                        clearTimeout(a)
                    }), l.create = function(e) {
                        var t = u.extend({
                            fps: 60,
                            correction: 1,
                            deltaSampleSize: 60,
                            counterTimestamp: 0,
                            frameCounter: 0,
                            deltaHistory: [],
                            timePrev: null,
                            timeScalePrev: 1,
                            frameRequestId: null,
                            isFixed: !1,
                            enabled: !0
                        }, e);
                        return t.delta = t.delta || 1e3 / t.fps, t.deltaMin = t.deltaMin || 1e3 / t.fps, t.deltaMax = t.deltaMax || 1e3 / (.5 * t.fps), t.fps = 1e3 / t.delta, t
                    }, l.run = function(e, t) {
                        return void 0 !== e.positionIterations && (t = e, e = l.create()),
                            function render(n) {
                                e.frameRequestId = i(render), n && e.enabled && l.tick(e, t, n)
                            }(), e
                    }, l.tick = function(e, t, n) {
                        var i, s = t.timing,
                            a = 1,
                            l = {
                                timestamp: s.timestamp
                            };
                        c.trigger(e, "beforeTick", l), c.trigger(t, "beforeTick", l), e.isFixed ? i = e.delta : (i = n - e.timePrev || e.delta, e.timePrev = n, e.deltaHistory.push(i), e.deltaHistory = e.deltaHistory.slice(-e.deltaSampleSize), a = (i = (i = (i = Math.min.apply(null, e.deltaHistory)) < e.deltaMin ? e.deltaMin : i) > e.deltaMax ? e.deltaMax : i) / e.delta, e.delta = i), 0 !== e.timeScalePrev && (a *= s.timeScale / e.timeScalePrev), 0 === s.timeScale && (a = 0), e.timeScalePrev = s.timeScale, e.correction = a, e.frameCounter += 1, n - e.counterTimestamp >= 1e3 && (e.fps = e.frameCounter * ((n - e.counterTimestamp) / 1e3), e.counterTimestamp = n, e.frameCounter = 0), c.trigger(e, "tick", l), c.trigger(t, "tick", l), t.world.isModified && t.render && t.render.controller && t.render.controller.clear && t.render.controller.clear(t.render), c.trigger(e, "beforeUpdate", l), d.update(t, i, a), c.trigger(e, "afterUpdate", l), t.render && t.render.controller && (c.trigger(e, "beforeRender", l), c.trigger(t, "beforeRender", l), t.render.controller.world(t.render), c.trigger(e, "afterRender", l), c.trigger(t, "afterRender", l)), c.trigger(e, "afterTick", l), c.trigger(t, "afterTick", l)
                    }, l.stop = function(e) {
                        s(e.frameRequestId)
                    }, l.start = function(e, t) {
                        l.run(e, t)
                    }
                }, {
                    "./Common": 14,
                    "./Engine": 15,
                    "./Events": 16
                }],
                22: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("./Events");
                    i._motionWakeThreshold = .18, i._motionSleepThreshold = .08, i._minBias = .9, i.update = function(e, t) {
                        for (var n = t * t * t, s = 0; s < e.length; s++) {
                            var a = e[s],
                                l = a.speed * a.speed + a.angularSpeed * a.angularSpeed;
                            if (0 !== a.force.x || 0 !== a.force.y) {
                                i.set(a, !1);
                                continue
                            }
                            var c = Math.min(a.motion, l),
                                d = Math.max(a.motion, l);
                            a.motion = i._minBias * c + (1 - i._minBias) * d, a.sleepThreshold > 0 && a.motion < i._motionSleepThreshold * n ? (a.sleepCounter += 1, a.sleepCounter >= a.sleepThreshold && i.set(a, !0)) : a.sleepCounter > 0 && (a.sleepCounter -= 1)
                        }
                    }, i.afterCollisions = function(e, t) {
                        for (var n = t * t * t, s = 0; s < e.length; s++) {
                            var a = e[s];
                            if (a.isActive) {
                                var l = a.collision,
                                    c = l.bodyA.parent,
                                    d = l.bodyB.parent;
                                if ((!c.isSleeping || !d.isSleeping) && !c.isStatic && !d.isStatic && (c.isSleeping || d.isSleeping)) {
                                    var u = c.isSleeping && !c.isStatic ? c : d,
                                        p = u === c ? d : c;
                                    !u.isStatic && p.motion > i._motionWakeThreshold * n && i.set(u, !1)
                                }
                            }
                        }
                    }, i.set = function(e, t) {
                        var n = e.isSleeping;
                        t ? (e.isSleeping = !0, e.sleepCounter = e.sleepThreshold, e.positionImpulse.x = 0, e.positionImpulse.y = 0, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.anglePrev = e.angle, e.speed = 0, e.angularSpeed = 0, e.motion = 0, n || s.trigger(e, "sleepStart")) : (e.isSleeping = !1, e.sleepCounter = 0, n && s.trigger(e, "sleepEnd"))
                    }
                }, {
                    "./Events": 16
                }],
                23: [function(e, t, n) {
                    var i, s = {};
                    t.exports = s;
                    var a = e("../geometry/Vertices"),
                        l = e("../core/Common"),
                        c = e("../body/Body"),
                        d = e("../geometry/Bounds"),
                        u = e("../geometry/Vector");
                    s.rectangle = function(e, t, n, i, s) {
                        s = s || {};
                        var d = {
                            label: "Rectangle Body",
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: a.fromPath("L 0 0 L " + n + " 0 L " + n + " " + i + " L 0 " + i)
                        };
                        if (s.chamfer) {
                            var u = s.chamfer;
                            d.vertices = a.chamfer(d.vertices, u.radius, u.quality, u.qualityMin, u.qualityMax), delete s.chamfer
                        }
                        return c.create(l.extend({}, d, s))
                    }, s.trapezoid = function(e, t, n, i, s, d) {
                        d = d || {};
                        var u, p = (1 - 2 * (s *= .5)) * n,
                            m = n * s,
                            f = m + p,
                            v = f + m;
                        u = s < .5 ? "L 0 0 L " + m + " " + -i + " L " + f + " " + -i + " L " + v + " 0" : "L 0 0 L " + f + " " + -i + " L " + v + " 0";
                        var y = {
                            label: "Trapezoid Body",
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: a.fromPath(u)
                        };
                        if (d.chamfer) {
                            var g = d.chamfer;
                            y.vertices = a.chamfer(y.vertices, g.radius, g.quality, g.qualityMin, g.qualityMax), delete d.chamfer
                        }
                        return c.create(l.extend({}, y, d))
                    }, s.circle = function(e, t, n, i, a) {
                        i = i || {};
                        var c = Math.ceil(Math.max(10, Math.min(a = a || 25, n)));
                        return c % 2 == 1 && (c += 1), s.polygon(e, t, c, n, l.extend({}, {
                            label: "Circle Body",
                            circleRadius: n
                        }, i))
                    }, s.polygon = function(e, t, n, i, d) {
                        if (d = d || {}, n < 3) return s.circle(e, t, i, d);
                        for (var u = 2 * Math.PI / n, p = "", m = .5 * u, f = 0; f < n; f += 1) {
                            var v = m + f * u,
                                y = Math.cos(v) * i,
                                g = Math.sin(v) * i;
                            p += "L " + y.toFixed(3) + " " + g.toFixed(3) + " "
                        }
                        var x = {
                            label: "Polygon Body",
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: a.fromPath(p)
                        };
                        if (d.chamfer) {
                            var h = d.chamfer;
                            x.vertices = a.chamfer(x.vertices, h.radius, h.quality, h.qualityMin, h.qualityMax), delete d.chamfer
                        }
                        return c.create(l.extend({}, x, d))
                    }, s.fromVertices = function(e, t, n, s, p, m, f) {
                        for (i || (i = l._requireGlobal("decomp", "poly-decomp")), s = s || {}, y = [], p = void 0 !== p && p, m = void 0 !== m ? m : .01, f = void 0 !== f ? f : 10, i || l.warn("Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull."), l.isArray(n[0]) || (n = [n]), S = 0; S < n.length; S += 1)
                            if (x = n[S], (g = a.isConvex(x)) || !i) x = g ? a.clockwiseSort(x) : a.hull(x), y.push({
                                position: {
                                    x: e,
                                    y: t
                                },
                                vertices: x
                            });
                            else {
                                var v, y, g, x, h, b, w, S, C, A = x.map(function(e) {
                                    return [e.x, e.y]
                                });
                                i.makeCCW(A), !1 !== m && i.removeCollinearPoints(A, m);
                                var P = i.quickDecomp(A);
                                for (h = 0; h < P.length; h++) {
                                    var B = P[h].map(function(e) {
                                        return {
                                            x: e[0],
                                            y: e[1]
                                        }
                                    });
                                    f > 0 && a.area(B) < f || y.push({
                                        position: a.centre(B),
                                        vertices: B
                                    })
                                }
                            }
                        for (h = 0; h < y.length; h++) y[h] = c.create(l.extend(y[h], s));
                        if (p)
                            for (h = 0; h < y.length; h++) {
                                var M = y[h];
                                for (b = h + 1; b < y.length; b++) {
                                    var k = y[b];
                                    if (d.overlaps(M.bounds, k.bounds)) {
                                        var I = M.vertices,
                                            _ = k.vertices;
                                        for (w = 0; w < M.vertices.length; w++)
                                            for (C = 0; C < k.vertices.length; C++) {
                                                var T = u.magnitudeSquared(u.sub(I[(w + 1) % I.length], _[C])),
                                                    R = u.magnitudeSquared(u.sub(I[w], _[(C + 1) % _.length]));
                                                T < 5 && R < 5 && (I[w].isInternal = !0, _[C].isInternal = !0)
                                            }
                                    }
                                }
                            }
                        return y.length > 1 ? (v = c.create(l.extend({
                            parts: y.slice(0)
                        }, s)), c.setPosition(v, {
                            x: e,
                            y: t
                        }), v) : y[0]
                    }
                }, {
                    "../body/Body": 1,
                    "../core/Common": 14,
                    "../geometry/Bounds": 26,
                    "../geometry/Vector": 28,
                    "../geometry/Vertices": 29
                }],
                24: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("../body/Composite"),
                        a = e("../constraint/Constraint"),
                        l = e("../core/Common"),
                        c = e("../body/Body"),
                        d = e("./Bodies");
                    i.stack = function(e, t, n, i, a, l, d) {
                        for (var u, p = s.create({
                                label: "Stack"
                            }), m = e, f = t, v = 0, y = 0; y < i; y++) {
                            for (var g = 0, x = 0; x < n; x++) {
                                var h = d(m, f, x, y, u, v);
                                if (h) {
                                    var b = h.bounds.max.y - h.bounds.min.y,
                                        w = h.bounds.max.x - h.bounds.min.x;
                                    b > g && (g = b), c.translate(h, {
                                        x: .5 * w,
                                        y: .5 * b
                                    }), m = h.bounds.max.x + a, s.addBody(p, h), u = h, v += 1
                                } else m += a
                            }
                            f += g + l, m = e
                        }
                        return p
                    }, i.chain = function(e, t, n, i, c, d) {
                        for (var u = e.bodies, p = 1; p < u.length; p++) {
                            var m = u[p - 1],
                                f = u[p],
                                v = m.bounds.max.y - m.bounds.min.y,
                                y = m.bounds.max.x - m.bounds.min.x,
                                g = f.bounds.max.y - f.bounds.min.y,
                                x = f.bounds.max.x - f.bounds.min.x,
                                h = {
                                    bodyA: m,
                                    pointA: {
                                        x: y * t,
                                        y: v * n
                                    },
                                    bodyB: f,
                                    pointB: {
                                        x: x * i,
                                        y: g * c
                                    }
                                },
                                b = l.extend(h, d);
                            s.addConstraint(e, a.create(b))
                        }
                        return e.label += " Chain", e
                    }, i.mesh = function(e, t, n, i, c) {
                        var d, u, p, m, f, v = e.bodies;
                        for (d = 0; d < n; d++) {
                            for (u = 1; u < t; u++) p = v[u - 1 + d * t], m = v[u + d * t], s.addConstraint(e, a.create(l.extend({
                                bodyA: p,
                                bodyB: m
                            }, c)));
                            if (d > 0)
                                for (u = 0; u < t; u++) p = v[u + (d - 1) * t], m = v[u + d * t], s.addConstraint(e, a.create(l.extend({
                                    bodyA: p,
                                    bodyB: m
                                }, c))), i && u > 0 && (f = v[u - 1 + (d - 1) * t], s.addConstraint(e, a.create(l.extend({
                                    bodyA: f,
                                    bodyB: m
                                }, c)))), i && u < t - 1 && (f = v[u + 1 + (d - 1) * t], s.addConstraint(e, a.create(l.extend({
                                    bodyA: f,
                                    bodyB: m
                                }, c))))
                        }
                        return e.label += " Mesh", e
                    }, i.pyramid = function(e, t, n, s, a, l, d) {
                        return i.stack(e, t, n, s, a, l, function(t, i, l, u, p, m) {
                            var f = Math.min(s, Math.ceil(n / 2)),
                                v = p ? p.bounds.max.x - p.bounds.min.x : 0;
                            if (!(u > f)) {
                                var y = u = f - u,
                                    g = n - 1 - u;
                                if (!(l < y) && !(l > g)) return 1 === m && c.translate(p, {
                                    x: (l + (n % 2 == 1 ? 1 : -1)) * v,
                                    y: 0
                                }), d(e + (p ? l * v : 0) + l * a, i, l, u, p, m)
                            }
                        })
                    }, i.newtonsCradle = function(e, t, n, i, l) {
                        for (var c = s.create({
                                label: "Newtons Cradle"
                            }), u = 0; u < n; u++) {
                            var p = d.circle(e + u * (1.9 * i), t + l, i, {
                                    inertia: 1 / 0,
                                    restitution: 1,
                                    friction: 0,
                                    frictionAir: 1e-4,
                                    slop: 1
                                }),
                                m = a.create({
                                    pointA: {
                                        x: e + u * (1.9 * i),
                                        y: t
                                    },
                                    bodyB: p
                                });
                            s.addBody(c, p), s.addConstraint(c, m)
                        }
                        return c
                    }, i.car = function(e, t, n, i, l) {
                        var u = c.nextGroup(!0),
                            p = -(.5 * n) + 20,
                            m = .5 * n - 20,
                            f = s.create({
                                label: "Car"
                            }),
                            v = d.rectangle(e, t, n, i, {
                                collisionFilter: {
                                    group: u
                                },
                                chamfer: {
                                    radius: .5 * i
                                },
                                density: 2e-4
                            }),
                            y = d.circle(e + p, t + 0, l, {
                                collisionFilter: {
                                    group: u
                                },
                                friction: .8
                            }),
                            g = d.circle(e + m, t + 0, l, {
                                collisionFilter: {
                                    group: u
                                },
                                friction: .8
                            }),
                            x = a.create({
                                bodyB: v,
                                pointB: {
                                    x: p,
                                    y: 0
                                },
                                bodyA: y,
                                stiffness: 1,
                                length: 0
                            }),
                            h = a.create({
                                bodyB: v,
                                pointB: {
                                    x: m,
                                    y: 0
                                },
                                bodyA: g,
                                stiffness: 1,
                                length: 0
                            });
                        return s.addBody(f, v), s.addBody(f, y), s.addBody(f, g), s.addConstraint(f, x), s.addConstraint(f, h), f
                    }, i.softBody = function(e, t, n, s, a, c, u, p, m, f) {
                        m = l.extend({
                            inertia: 1 / 0
                        }, m), f = l.extend({
                            stiffness: .2,
                            render: {
                                type: "line",
                                anchors: !1
                            }
                        }, f);
                        var v = i.stack(e, t, n, s, a, c, function(e, t) {
                            return d.circle(e, t, p, m)
                        });
                        return i.mesh(v, n, s, u, f), v.label = "Soft Body", v
                    }
                }, {
                    "../body/Body": 1,
                    "../body/Composite": 2,
                    "../constraint/Constraint": 12,
                    "../core/Common": 14,
                    "./Bodies": 23
                }],
                25: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("../geometry/Vector"),
                        a = e("../core/Common");
                    i.fromVertices = function(e) {
                        for (var t = {}, n = 0; n < e.length; n++) {
                            var i = (n + 1) % e.length,
                                l = s.normalise({
                                    x: e[i].y - e[n].y,
                                    y: e[n].x - e[i].x
                                }),
                                c = 0 === l.y ? 1 / 0 : l.x / l.y;
                            t[c = c.toFixed(3).toString()] = l
                        }
                        return a.values(t)
                    }, i.rotate = function(e, t) {
                        if (0 !== t)
                            for (var n = Math.cos(t), i = Math.sin(t), s = 0; s < e.length; s++) {
                                var a, l = e[s];
                                a = l.x * n - l.y * i, l.y = l.x * i + l.y * n, l.x = a
                            }
                    }
                }, {
                    "../core/Common": 14,
                    "../geometry/Vector": 28
                }],
                26: [function(e, t, n) {
                    var i = {};
                    t.exports = i, i.create = function(e) {
                        var t = {
                            min: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: 0,
                                y: 0
                            }
                        };
                        return e && i.update(t, e), t
                    }, i.update = function(e, t, n) {
                        e.min.x = 1 / 0, e.max.x = -1 / 0, e.min.y = 1 / 0, e.max.y = -1 / 0;
                        for (var i = 0; i < t.length; i++) {
                            var s = t[i];
                            s.x > e.max.x && (e.max.x = s.x), s.x < e.min.x && (e.min.x = s.x), s.y > e.max.y && (e.max.y = s.y), s.y < e.min.y && (e.min.y = s.y)
                        }
                        n && (n.x > 0 ? e.max.x += n.x : e.min.x += n.x, n.y > 0 ? e.max.y += n.y : e.min.y += n.y)
                    }, i.contains = function(e, t) {
                        return t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
                    }, i.overlaps = function(e, t) {
                        return e.min.x <= t.max.x && e.max.x >= t.min.x && e.max.y >= t.min.y && e.min.y <= t.max.y
                    }, i.translate = function(e, t) {
                        e.min.x += t.x, e.max.x += t.x, e.min.y += t.y, e.max.y += t.y
                    }, i.shift = function(e, t) {
                        var n = e.max.x - e.min.x,
                            i = e.max.y - e.min.y;
                        e.min.x = t.x, e.max.x = t.x + n, e.min.y = t.y, e.max.y = t.y + i
                    }
                }, {}],
                27: [function(e, t, n) {
                    var i = {};
                    t.exports = i, e("../geometry/Bounds");
                    var s = e("../core/Common");
                    i.pathToVertices = function(e, t) {
                        "undefined" == typeof window || "SVGPathSeg" in window || s.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                        var n, a, l, c, d, u, p, m, f, v, y, g = [],
                            x = 0,
                            h = 0,
                            b = 0;
                        t = t || 15;
                        var addPoint = function(e, t, n) {
                                var i = n % 2 == 1 && n > 1;
                                if (!f || e != f.x || t != f.y) {
                                    f && i ? (v = f.x, y = f.y) : (v = 0, y = 0);
                                    var s = {
                                        x: v + e,
                                        y: y + t
                                    };
                                    (i || !f) && (f = s), g.push(s), h = v + e, b = y + t
                                }
                            },
                            addSegmentPoint = function(e) {
                                var t = e.pathSegTypeAsLetter.toUpperCase();
                                if ("Z" !== t) {
                                    switch (t) {
                                        case "M":
                                        case "L":
                                        case "T":
                                        case "C":
                                        case "S":
                                        case "Q":
                                            h = e.x, b = e.y;
                                            break;
                                        case "H":
                                            h = e.x;
                                            break;
                                        case "V":
                                            b = e.y
                                    }
                                    addPoint(h, b, e.pathSegType)
                                }
                            };
                        for (i._svgPathToAbsolute(e), l = e.getTotalLength(), u = [], n = 0; n < e.pathSegList.numberOfItems; n += 1) u.push(e.pathSegList.getItem(n));
                        for (p = u.concat(); x < l;) {
                            if ((d = u[e.getPathSegAtLength(x)]) != m) {
                                for (; p.length && p[0] != d;) addSegmentPoint(p.shift());
                                m = d
                            }
                            switch (d.pathSegTypeAsLetter.toUpperCase()) {
                                case "C":
                                case "T":
                                case "S":
                                case "Q":
                                case "A":
                                    addPoint((c = e.getPointAtLength(x)).x, c.y, 0)
                            }
                            x += t
                        }
                        for (n = 0, a = p.length; n < a; ++n) addSegmentPoint(p[n]);
                        return g
                    }, i._svgPathToAbsolute = function(e) {
                        for (var t, n, i, s, a, l, c = e.pathSegList, d = 0, u = 0, p = c.numberOfItems, m = 0; m < p; ++m) {
                            var f = c.getItem(m),
                                v = f.pathSegTypeAsLetter;
                            if (/[MLHVCSQTA]/.test(v)) "x" in f && (d = f.x), "y" in f && (u = f.y);
                            else switch ("x1" in f && (i = d + f.x1), "x2" in f && (a = d + f.x2), "y1" in f && (s = u + f.y1), "y2" in f && (l = u + f.y2), "x" in f && (d += f.x), "y" in f && (u += f.y), v) {
                                case "m":
                                    c.replaceItem(e.createSVGPathSegMovetoAbs(d, u), m);
                                    break;
                                case "l":
                                    c.replaceItem(e.createSVGPathSegLinetoAbs(d, u), m);
                                    break;
                                case "h":
                                    c.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(d), m);
                                    break;
                                case "v":
                                    c.replaceItem(e.createSVGPathSegLinetoVerticalAbs(u), m);
                                    break;
                                case "c":
                                    c.replaceItem(e.createSVGPathSegCurvetoCubicAbs(d, u, i, s, a, l), m);
                                    break;
                                case "s":
                                    c.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(d, u, a, l), m);
                                    break;
                                case "q":
                                    c.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(d, u, i, s), m);
                                    break;
                                case "t":
                                    c.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(d, u), m);
                                    break;
                                case "a":
                                    c.replaceItem(e.createSVGPathSegArcAbs(d, u, f.r1, f.r2, f.angle, f.largeArcFlag, f.sweepFlag), m);
                                    break;
                                case "z":
                                case "Z":
                                    d = t, u = n
                            }("M" == v || "m" == v) && (t = d, n = u)
                        }
                    }
                }, {
                    "../core/Common": 14,
                    "../geometry/Bounds": 26
                }],
                28: [function(e, t, n) {
                    var i = {};
                    t.exports = i, i.create = function(e, t) {
                        return {
                            x: e || 0,
                            y: t || 0
                        }
                    }, i.clone = function(e) {
                        return {
                            x: e.x,
                            y: e.y
                        }
                    }, i.magnitude = function(e) {
                        return Math.sqrt(e.x * e.x + e.y * e.y)
                    }, i.magnitudeSquared = function(e) {
                        return e.x * e.x + e.y * e.y
                    }, i.rotate = function(e, t, n) {
                        var i = Math.cos(t),
                            s = Math.sin(t);
                        n || (n = {});
                        var a = e.x * i - e.y * s;
                        return n.y = e.x * s + e.y * i, n.x = a, n
                    }, i.rotateAbout = function(e, t, n, i) {
                        var s = Math.cos(t),
                            a = Math.sin(t);
                        i || (i = {});
                        var l = n.x + ((e.x - n.x) * s - (e.y - n.y) * a);
                        return i.y = n.y + ((e.x - n.x) * a + (e.y - n.y) * s), i.x = l, i
                    }, i.normalise = function(e) {
                        var t = i.magnitude(e);
                        return 0 === t ? {
                            x: 0,
                            y: 0
                        } : {
                            x: e.x / t,
                            y: e.y / t
                        }
                    }, i.dot = function(e, t) {
                        return e.x * t.x + e.y * t.y
                    }, i.cross = function(e, t) {
                        return e.x * t.y - e.y * t.x
                    }, i.cross3 = function(e, t, n) {
                        return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x)
                    }, i.add = function(e, t, n) {
                        return n || (n = {}), n.x = e.x + t.x, n.y = e.y + t.y, n
                    }, i.sub = function(e, t, n) {
                        return n || (n = {}), n.x = e.x - t.x, n.y = e.y - t.y, n
                    }, i.mult = function(e, t) {
                        return {
                            x: e.x * t,
                            y: e.y * t
                        }
                    }, i.div = function(e, t) {
                        return {
                            x: e.x / t,
                            y: e.y / t
                        }
                    }, i.perp = function(e, t) {
                        return {
                            x: -((t = !0 === t ? -1 : 1) * e.y),
                            y: t * e.x
                        }
                    }, i.neg = function(e) {
                        return {
                            x: -e.x,
                            y: -e.y
                        }
                    }, i.angle = function(e, t) {
                        return Math.atan2(t.y - e.y, t.x - e.x)
                    }, i._temp = [i.create(), i.create(), i.create(), i.create(), i.create(), i.create()]
                }, {}],
                29: [function(e, t, n) {
                    var i = {};
                    t.exports = i;
                    var s = e("../geometry/Vector"),
                        a = e("../core/Common");
                    i.create = function(e, t) {
                        for (var n = [], i = 0; i < e.length; i++) {
                            var s = e[i],
                                a = {
                                    x: s.x,
                                    y: s.y,
                                    index: i,
                                    body: t,
                                    isInternal: !1
                                };
                            n.push(a)
                        }
                        return n
                    }, i.fromPath = function(e, t) {
                        var n = [];
                        return e.replace(/L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/ig, function(e, t, i) {
                            n.push({
                                x: parseFloat(t),
                                y: parseFloat(i)
                            })
                        }), i.create(n, t)
                    }, i.centre = function(e) {
                        for (var t, n, a, l = i.area(e, !0), c = {
                                x: 0,
                                y: 0
                            }, d = 0; d < e.length; d++) a = (d + 1) % e.length, t = s.cross(e[d], e[a]), n = s.mult(s.add(e[d], e[a]), t), c = s.add(c, n);
                        return s.div(c, 6 * l)
                    }, i.mean = function(e) {
                        for (var t = {
                                x: 0,
                                y: 0
                            }, n = 0; n < e.length; n++) t.x += e[n].x, t.y += e[n].y;
                        return s.div(t, e.length)
                    }, i.area = function(e, t) {
                        for (var n = 0, i = e.length - 1, s = 0; s < e.length; s++) n += (e[i].x - e[s].x) * (e[i].y + e[s].y), i = s;
                        return t ? n / 2 : Math.abs(n) / 2
                    }, i.inertia = function(e, t) {
                        for (var n, i, a = 0, l = 0, c = 0; c < e.length; c++) i = (c + 1) % e.length, a += (n = Math.abs(s.cross(e[i], e[c]))) * (s.dot(e[i], e[i]) + s.dot(e[i], e[c]) + s.dot(e[c], e[c])), l += n;
                        return t / 6 * (a / l)
                    }, i.translate = function(e, t, n) {
                        var i;
                        if (n)
                            for (i = 0; i < e.length; i++) e[i].x += t.x * n, e[i].y += t.y * n;
                        else
                            for (i = 0; i < e.length; i++) e[i].x += t.x, e[i].y += t.y;
                        return e
                    }, i.rotate = function(e, t, n) {
                        if (0 !== t) {
                            for (var i = Math.cos(t), s = Math.sin(t), a = 0; a < e.length; a++) {
                                var l = e[a],
                                    c = l.x - n.x,
                                    d = l.y - n.y;
                                l.x = n.x + (c * i - d * s), l.y = n.y + (c * s + d * i)
                            }
                            return e
                        }
                    }, i.contains = function(e, t) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n],
                                s = e[(n + 1) % e.length];
                            if ((t.x - i.x) * (s.y - i.y) + (t.y - i.y) * (i.x - s.x) > 0) return !1
                        }
                        return !0
                    }, i.scale = function(e, t, n, a) {
                        if (1 === t && 1 === n) return e;
                        a = a || i.centre(e);
                        for (var l, c, d = 0; d < e.length; d++) l = e[d], c = s.sub(l, a), e[d].x = a.x + c.x * t, e[d].y = a.y + c.y * n;
                        return e
                    }, i.chamfer = function(e, t, n, i, l) {
                        t = "number" == typeof t ? [t] : t || [8], n = void 0 !== n ? n : -1, i = i || 2, l = l || 14;
                        for (var c = [], d = 0; d < e.length; d++) {
                            var u = e[d - 1 >= 0 ? d - 1 : e.length - 1],
                                p = e[d],
                                m = e[(d + 1) % e.length],
                                f = t[d < t.length ? d : t.length - 1];
                            if (0 === f) {
                                c.push(p);
                                continue
                            }
                            var v = s.normalise({
                                    x: p.y - u.y,
                                    y: u.x - p.x
                                }),
                                y = s.normalise({
                                    x: m.y - p.y,
                                    y: p.x - m.x
                                }),
                                g = Math.sqrt(2 * Math.pow(f, 2)),
                                x = s.mult(a.clone(v), f),
                                h = s.normalise(s.mult(s.add(v, y), .5)),
                                b = s.sub(p, s.mult(h, g)),
                                w = n; - 1 === n && (w = 1.75 * Math.pow(f, .32)), (w = a.clamp(w, i, l)) % 2 == 1 && (w += 1);
                            for (var S = Math.acos(s.dot(v, y)) / w, C = 0; C < w; C++) c.push(s.add(s.rotate(x, S * C), b))
                        }
                        return c
                    }, i.clockwiseSort = function(e) {
                        var t = i.mean(e);
                        return e.sort(function(e, n) {
                            return s.angle(t, e) - s.angle(t, n)
                        }), e
                    }, i.isConvex = function(e) {
                        var t, n, i, s, a = 0,
                            l = e.length;
                        if (l < 3) return null;
                        for (t = 0; t < l; t++)
                            if (n = (t + 1) % l, i = (t + 2) % l, (s = (e[n].x - e[t].x) * (e[i].y - e[n].y) - (e[n].y - e[t].y) * (e[i].x - e[n].x)) < 0 ? a |= 1 : s > 0 && (a |= 2), 3 === a) return !1;
                        return 0 !== a || null
                    }, i.hull = function(e) {
                        var t, n, i = [],
                            a = [];
                        for ((e = e.slice(0)).sort(function(e, t) {
                                var n = e.x - t.x;
                                return 0 !== n ? n : e.y - t.y
                            }), n = 0; n < e.length; n += 1) {
                            for (t = e[n]; a.length >= 2 && 0 >= s.cross3(a[a.length - 2], a[a.length - 1], t);) a.pop();
                            a.push(t)
                        }
                        for (n = e.length - 1; n >= 0; n -= 1) {
                            for (t = e[n]; i.length >= 2 && 0 >= s.cross3(i[i.length - 2], i[i.length - 1], t);) i.pop();
                            i.push(t)
                        }
                        return i.pop(), a.pop(), i.concat(a)
                    }
                }, {
                    "../core/Common": 14,
                    "../geometry/Vector": 28
                }],
                30: [function(e, t, n) {
                    var i = t.exports = e("../core/Matter");
                    i.Body = e("../body/Body"), i.Composite = e("../body/Composite"), i.World = e("../body/World"), i.Contact = e("../collision/Contact"), i.Detector = e("../collision/Detector"), i.Grid = e("../collision/Grid"), i.Pairs = e("../collision/Pairs"), i.Pair = e("../collision/Pair"), i.Query = e("../collision/Query"), i.Resolver = e("../collision/Resolver"), i.SAT = e("../collision/SAT"), i.Constraint = e("../constraint/Constraint"), i.MouseConstraint = e("../constraint/MouseConstraint"), i.Common = e("../core/Common"), i.Engine = e("../core/Engine"), i.Events = e("../core/Events"), i.Mouse = e("../core/Mouse"), i.Runner = e("../core/Runner"), i.Sleeping = e("../core/Sleeping"), i.Plugin = e("../core/Plugin"), i.Bodies = e("../factory/Bodies"), i.Composites = e("../factory/Composites"), i.Axes = e("../geometry/Axes"), i.Bounds = e("../geometry/Bounds"), i.Svg = e("../geometry/Svg"), i.Vector = e("../geometry/Vector"), i.Vertices = e("../geometry/Vertices"), i.Render = e("../render/Render"), i.RenderPixi = e("../render/RenderPixi"), i.World.add = i.Composite.add, i.World.remove = i.Composite.remove, i.World.addComposite = i.Composite.addComposite, i.World.addBody = i.Composite.addBody, i.World.addConstraint = i.Composite.addConstraint, i.World.clear = i.Composite.clear, i.Engine.run = i.Runner.run
                }, {
                    "../body/Body": 1,
                    "../body/Composite": 2,
                    "../body/World": 3,
                    "../collision/Contact": 4,
                    "../collision/Detector": 5,
                    "../collision/Grid": 6,
                    "../collision/Pair": 7,
                    "../collision/Pairs": 8,
                    "../collision/Query": 9,
                    "../collision/Resolver": 10,
                    "../collision/SAT": 11,
                    "../constraint/Constraint": 12,
                    "../constraint/MouseConstraint": 13,
                    "../core/Common": 14,
                    "../core/Engine": 15,
                    "../core/Events": 16,
                    "../core/Matter": 17,
                    "../core/Metrics": 18,
                    "../core/Mouse": 19,
                    "../core/Plugin": 20,
                    "../core/Runner": 21,
                    "../core/Sleeping": 22,
                    "../factory/Bodies": 23,
                    "../factory/Composites": 24,
                    "../geometry/Axes": 25,
                    "../geometry/Bounds": 26,
                    "../geometry/Svg": 27,
                    "../geometry/Vector": 28,
                    "../geometry/Vertices": 29,
                    "../render/Render": 31,
                    "../render/RenderPixi": 32
                }],
                31: [function(e, t, n) {
                    var i, s, a, l, c, d, u = {};
                    t.exports = u;
                    var p = e("../core/Common"),
                        m = e("../body/Composite"),
                        f = e("../geometry/Bounds"),
                        v = e("../core/Events"),
                        y = e("../collision/Grid"),
                        g = e("../geometry/Vector"),
                        x = e("../core/Mouse");
                    "undefined" != typeof window && (i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                        window.setTimeout(function() {
                            e(p.now())
                        }, 1e3 / 60)
                    }, s = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), u.create = function(e) {
                        var t = {
                                controller: u,
                                engine: null,
                                element: null,
                                canvas: null,
                                mouse: null,
                                frameRequestId: null,
                                options: {
                                    width: 800,
                                    height: 600,
                                    pixelRatio: 1,
                                    background: "#18181d",
                                    wireframeBackground: "#0f0f13",
                                    hasBounds: !!e.bounds,
                                    enabled: !0,
                                    wireframes: !0,
                                    showSleeping: !0,
                                    showDebug: !1,
                                    showBroadphase: !1,
                                    showBounds: !1,
                                    showVelocity: !1,
                                    showCollisions: !1,
                                    showSeparations: !1,
                                    showAxes: !1,
                                    showPositions: !1,
                                    showAngleIndicator: !1,
                                    showIds: !1,
                                    showShadows: !1,
                                    showVertexNumbers: !1,
                                    showConvexHulls: !1,
                                    showInternalEdges: !1,
                                    showMousePosition: !1
                                }
                            },
                            n = p.extend(t, e);
                        return n.canvas && (n.canvas.width = n.options.width || n.canvas.width, n.canvas.height = n.options.height || n.canvas.height), n.mouse = e.mouse, n.engine = e.engine, n.canvas = n.canvas || a(n.options.width, n.options.height), n.context = n.canvas.getContext("2d"), n.textures = {}, n.bounds = n.bounds || {
                            min: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: n.canvas.width,
                                y: n.canvas.height
                            }
                        }, 1 !== n.options.pixelRatio && u.setPixelRatio(n, n.options.pixelRatio), p.isElement(n.element) ? n.element.appendChild(n.canvas) : n.canvas.parentNode || p.log("Render.create: options.element was undefined, render.canvas was created but not appended", "warn"), n
                    }, u.run = function(e) {
                        ! function loop(t) {
                            e.frameRequestId = i(loop), u.world(e)
                        }()
                    }, u.stop = function(e) {
                        s(e.frameRequestId)
                    }, u.setPixelRatio = function(e, t) {
                        var n = e.options,
                            i = e.canvas;
                        "auto" === t && (t = l(i)), n.pixelRatio = t, i.setAttribute("data-pixel-ratio", t), i.width = n.width * t, i.height = n.height * t, i.style.width = n.width + "px", i.style.height = n.height + "px", e.context.scale(t, t)
                    }, u.lookAt = function(e, t, n, i) {
                        i = void 0 === i || i, t = p.isArray(t) ? t : [t], n = n || {
                            x: 0,
                            y: 0
                        };
                        for (var s = {
                                min: {
                                    x: 1 / 0,
                                    y: 1 / 0
                                },
                                max: {
                                    x: -1 / 0,
                                    y: -1 / 0
                                }
                            }, a = 0; a < t.length; a += 1) {
                            var l = t[a],
                                c = l.bounds ? l.bounds.min : l.min || l.position || l,
                                d = l.bounds ? l.bounds.max : l.max || l.position || l;
                            c && d && (c.x < s.min.x && (s.min.x = c.x), d.x > s.max.x && (s.max.x = d.x), c.y < s.min.y && (s.min.y = c.y), d.y > s.max.y && (s.max.y = d.y))
                        }
                        var u = s.max.x - s.min.x + 2 * n.x,
                            m = s.max.y - s.min.y + 2 * n.y,
                            f = e.canvas.height,
                            v = e.canvas.width / f,
                            y = u / m,
                            g = 1,
                            h = 1;
                        y > v ? h = y / v : g = v / y, e.options.hasBounds = !0, e.bounds.min.x = s.min.x, e.bounds.max.x = s.min.x + u * g, e.bounds.min.y = s.min.y, e.bounds.max.y = s.min.y + m * h, i && (e.bounds.min.x += .5 * u - u * g * .5, e.bounds.max.x += .5 * u - u * g * .5, e.bounds.min.y += .5 * m - m * h * .5, e.bounds.max.y += .5 * m - m * h * .5), e.bounds.min.x -= n.x, e.bounds.max.x -= n.x, e.bounds.min.y -= n.y, e.bounds.max.y -= n.y, e.mouse && (x.setScale(e.mouse, {
                            x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                            y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                        }), x.setOffset(e.mouse, e.bounds.min))
                    }, u.startViewTransform = function(e) {
                        var t = e.bounds.max.x - e.bounds.min.x,
                            n = e.bounds.max.y - e.bounds.min.y,
                            i = t / e.options.width,
                            s = n / e.options.height;
                        e.context.scale(1 / i, 1 / s), e.context.translate(-e.bounds.min.x, -e.bounds.min.y)
                    }, u.endViewTransform = function(e) {
                        e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0)
                    }, u.world = function(e) {
                        var t, n = e.engine,
                            i = n.world,
                            s = e.canvas,
                            a = e.context,
                            l = e.options,
                            c = m.allBodies(i),
                            p = m.allConstraints(i),
                            h = l.wireframes ? l.wireframeBackground : l.background,
                            b = [],
                            w = [],
                            S = {
                                timestamp: n.timing.timestamp
                            };
                        if (v.trigger(e, "beforeRender", S), e.currentBackground !== h && d(e, h), a.globalCompositeOperation = "source-in", a.fillStyle = "transparent", a.fillRect(0, 0, s.width, s.height), a.globalCompositeOperation = "source-over", l.hasBounds) {
                            for (t = 0; t < c.length; t++) {
                                var C = c[t];
                                f.overlaps(C.bounds, e.bounds) && b.push(C)
                            }
                            for (t = 0; t < p.length; t++) {
                                var A = p[t],
                                    P = A.bodyA,
                                    B = A.bodyB,
                                    M = A.pointA,
                                    k = A.pointB;
                                P && (M = g.add(P.position, A.pointA)), B && (k = g.add(B.position, A.pointB)), M && k && (f.contains(e.bounds, M) || f.contains(e.bounds, k)) && w.push(A)
                            }
                            u.startViewTransform(e), e.mouse && (x.setScale(e.mouse, {
                                x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                                y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                            }), x.setOffset(e.mouse, e.bounds.min))
                        } else w = p, b = c;
                        !l.wireframes || n.enableSleeping && l.showSleeping ? u.bodies(e, b, a) : (l.showConvexHulls && u.bodyConvexHulls(e, b, a), u.bodyWireframes(e, b, a)), l.showBounds && u.bodyBounds(e, b, a), (l.showAxes || l.showAngleIndicator) && u.bodyAxes(e, b, a), l.showPositions && u.bodyPositions(e, b, a), l.showVelocity && u.bodyVelocity(e, b, a), l.showIds && u.bodyIds(e, b, a), l.showSeparations && u.separations(e, n.pairs.list, a), l.showCollisions && u.collisions(e, n.pairs.list, a), l.showVertexNumbers && u.vertexNumbers(e, b, a), l.showMousePosition && u.mousePosition(e, e.mouse, a), u.constraints(w, a), l.showBroadphase && n.broadphase.controller === y && u.grid(e, n.broadphase, a), l.showDebug && u.debug(e, a), l.hasBounds && u.endViewTransform(e), v.trigger(e, "afterRender", S)
                    }, u.debug = function(e, t) {
                        var n = e.engine,
                            i = n.world,
                            s = n.metrics,
                            a = e.options;
                        if (m.allBodies(i), n.timing.timestamp - (e.debugTimestamp || 0) >= 500) {
                            var l = "";
                            s.timing && (l += "fps: " + Math.round(s.timing.fps) + "    "), e.debugString = l, e.debugTimestamp = n.timing.timestamp
                        }
                        if (e.debugString) {
                            t.font = "12px Arial", a.wireframes ? t.fillStyle = "rgba(255,255,255,0.5)" : t.fillStyle = "rgba(0,0,0,0.5)";
                            for (var c = e.debugString.split("\n"), d = 0; d < c.length; d++) t.fillText(c[d], 50, 50 + 18 * d)
                        }
                    }, u.constraints = function(e, t) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            if (i.render.visible && i.pointA && i.pointB) {
                                var s, a, l = i.bodyA,
                                    c = i.bodyB;
                                if (s = l ? g.add(l.position, i.pointA) : i.pointA, "pin" === i.render.type) t.beginPath(), t.arc(s.x, s.y, 3, 0, 2 * Math.PI), t.closePath();
                                else {
                                    if (a = c ? g.add(c.position, i.pointB) : i.pointB, t.beginPath(), t.moveTo(s.x, s.y), "spring" === i.render.type)
                                        for (var d, u = g.sub(a, s), m = g.perp(g.normalise(u)), f = Math.ceil(p.clamp(i.length / 5, 12, 20)), v = 1; v < f; v += 1) d = v % 2 == 0 ? 1 : -1, t.lineTo(s.x + u.x * (v / f) + m.x * d * 4, s.y + u.y * (v / f) + m.y * d * 4);
                                    t.lineTo(a.x, a.y)
                                }
                                i.render.lineWidth && (t.lineWidth = i.render.lineWidth, t.strokeStyle = i.render.strokeStyle, t.stroke()), i.render.anchors && (t.fillStyle = i.render.strokeStyle, t.beginPath(), t.arc(s.x, s.y, 3, 0, 2 * Math.PI), t.arc(a.x, a.y, 3, 0, 2 * Math.PI), t.closePath(), t.fill())
                            }
                        }
                    }, u.bodyShadows = function(e, t, n) {
                        e.engine;
                        for (var i = 0; i < t.length; i++) {
                            var s = t[i];
                            if (s.render.visible) {
                                if (s.circleRadius) n.beginPath(), n.arc(s.position.x, s.position.y, s.circleRadius, 0, 2 * Math.PI), n.closePath();
                                else {
                                    n.beginPath(), n.moveTo(s.vertices[0].x, s.vertices[0].y);
                                    for (var a = 1; a < s.vertices.length; a++) n.lineTo(s.vertices[a].x, s.vertices[a].y);
                                    n.closePath()
                                }
                                var l = s.position.x - .5 * e.options.width,
                                    c = s.position.y - .2 * e.options.height,
                                    d = Math.abs(l) + Math.abs(c);
                                n.shadowColor = "rgba(0,0,0,0.15)", n.shadowOffsetX = .05 * l, n.shadowOffsetY = .05 * c, n.shadowBlur = 1 + 12 * Math.min(1, d / 1e3), n.fill(), n.shadowColor = null, n.shadowOffsetX = null, n.shadowOffsetY = null, n.shadowBlur = null
                            }
                        }
                    }, u.bodies = function(e, t, n) {
                        e.engine;
                        var i, s, a, l, d = e.options,
                            u = d.showInternalEdges || !d.wireframes;
                        for (a = 0; a < t.length; a++)
                            if ((i = t[a]).render.visible) {
                                for (l = i.parts.length > 1 ? 1 : 0; l < i.parts.length; l++)
                                    if ((s = i.parts[l]).render.visible) {
                                        if (d.showSleeping && i.isSleeping ? n.globalAlpha = .5 * s.render.opacity : 1 !== s.render.opacity && (n.globalAlpha = s.render.opacity), s.render.sprite && s.render.sprite.texture && !d.wireframes) {
                                            var p = s.render.sprite,
                                                m = c(e, p.texture);
                                            n.translate(s.position.x, s.position.y), n.rotate(s.angle), n.drawImage(m, -(m.width * p.xOffset) * p.xScale, -(m.height * p.yOffset) * p.yScale, m.width * p.xScale, m.height * p.yScale), n.rotate(-s.angle), n.translate(-s.position.x, -s.position.y)
                                        } else {
                                            if (s.circleRadius) n.beginPath(), n.arc(s.position.x, s.position.y, s.circleRadius, 0, 2 * Math.PI);
                                            else {
                                                n.beginPath(), n.moveTo(s.vertices[0].x, s.vertices[0].y);
                                                for (var f = 1; f < s.vertices.length; f++) !s.vertices[f - 1].isInternal || u ? n.lineTo(s.vertices[f].x, s.vertices[f].y) : n.moveTo(s.vertices[f].x, s.vertices[f].y), s.vertices[f].isInternal && !u && n.moveTo(s.vertices[(f + 1) % s.vertices.length].x, s.vertices[(f + 1) % s.vertices.length].y);
                                                n.lineTo(s.vertices[0].x, s.vertices[0].y), n.closePath()
                                            }
                                            d.wireframes ? (n.lineWidth = 1, n.strokeStyle = "#bbb", n.stroke()) : (n.fillStyle = s.render.fillStyle, s.render.lineWidth && (n.lineWidth = s.render.lineWidth, n.strokeStyle = s.render.strokeStyle, n.stroke()), n.fill())
                                        }
                                        n.globalAlpha = 1
                                    }
                            }
                    }, u.bodyWireframes = function(e, t, n) {
                        var i, s, a, l, c, d = e.options.showInternalEdges;
                        for (n.beginPath(), a = 0; a < t.length; a++)
                            if ((i = t[a]).render.visible)
                                for (c = i.parts.length > 1 ? 1 : 0; c < i.parts.length; c++) {
                                    for (s = i.parts[c], n.moveTo(s.vertices[0].x, s.vertices[0].y), l = 1; l < s.vertices.length; l++) !s.vertices[l - 1].isInternal || d ? n.lineTo(s.vertices[l].x, s.vertices[l].y) : n.moveTo(s.vertices[l].x, s.vertices[l].y), s.vertices[l].isInternal && !d && n.moveTo(s.vertices[(l + 1) % s.vertices.length].x, s.vertices[(l + 1) % s.vertices.length].y);
                                    n.lineTo(s.vertices[0].x, s.vertices[0].y)
                                }
                        n.lineWidth = 1, n.strokeStyle = "#bbb", n.stroke()
                    }, u.bodyConvexHulls = function(e, t, n) {
                        var i, s, a;
                        for (n.beginPath(), s = 0; s < t.length; s++)
                            if ((i = t[s]).render.visible && 1 !== i.parts.length) {
                                for (n.moveTo(i.vertices[0].x, i.vertices[0].y), a = 1; a < i.vertices.length; a++) n.lineTo(i.vertices[a].x, i.vertices[a].y);
                                n.lineTo(i.vertices[0].x, i.vertices[0].y)
                            }
                        n.lineWidth = 1, n.strokeStyle = "rgba(255,255,255,0.2)", n.stroke()
                    }, u.vertexNumbers = function(e, t, n) {
                        var i, s, a;
                        for (i = 0; i < t.length; i++) {
                            var l = t[i].parts;
                            for (a = l.length > 1 ? 1 : 0; a < l.length; a++) {
                                var c = l[a];
                                for (s = 0; s < c.vertices.length; s++) n.fillStyle = "rgba(255,255,255,0.2)", n.fillText(i + "_" + s, c.position.x + (c.vertices[s].x - c.position.x) * .8, c.position.y + (c.vertices[s].y - c.position.y) * .8)
                            }
                        }
                    }, u.mousePosition = function(e, t, n) {
                        n.fillStyle = "rgba(255,255,255,0.8)", n.fillText(t.position.x + "  " + t.position.y, t.position.x + 5, t.position.y - 5)
                    }, u.bodyBounds = function(e, t, n) {
                        e.engine;
                        var i = e.options;
                        n.beginPath();
                        for (var s = 0; s < t.length; s++)
                            if (t[s].render.visible)
                                for (var a = t[s].parts, l = a.length > 1 ? 1 : 0; l < a.length; l++) {
                                    var c = a[l];
                                    n.rect(c.bounds.min.x, c.bounds.min.y, c.bounds.max.x - c.bounds.min.x, c.bounds.max.y - c.bounds.min.y)
                                }
                        i.wireframes ? n.strokeStyle = "rgba(255,255,255,0.08)" : n.strokeStyle = "rgba(0,0,0,0.1)", n.lineWidth = 1, n.stroke()
                    }, u.bodyAxes = function(e, t, n) {
                        e.engine;
                        var i, s, a, l, c = e.options;
                        for (n.beginPath(), s = 0; s < t.length; s++) {
                            var d = t[s],
                                u = d.parts;
                            if (d.render.visible) {
                                if (c.showAxes)
                                    for (a = u.length > 1 ? 1 : 0; a < u.length; a++)
                                        for (l = 0, i = u[a]; l < i.axes.length; l++) {
                                            var p = i.axes[l];
                                            n.moveTo(i.position.x, i.position.y), n.lineTo(i.position.x + 20 * p.x, i.position.y + 20 * p.y)
                                        } else
                                            for (a = u.length > 1 ? 1 : 0; a < u.length; a++)
                                                for (l = 0, i = u[a]; l < i.axes.length; l++) n.moveTo(i.position.x, i.position.y), n.lineTo((i.vertices[0].x + i.vertices[i.vertices.length - 1].x) / 2, (i.vertices[0].y + i.vertices[i.vertices.length - 1].y) / 2)
                            }
                        }
                        c.wireframes ? (n.strokeStyle = "indianred", n.lineWidth = 1) : (n.strokeStyle = "rgba(255, 255, 255, 0.4)", n.globalCompositeOperation = "overlay", n.lineWidth = 2), n.stroke(), n.globalCompositeOperation = "source-over"
                    }, u.bodyPositions = function(e, t, n) {
                        e.engine;
                        var i, s, a, l, c = e.options;
                        for (n.beginPath(), a = 0; a < t.length; a++)
                            if ((i = t[a]).render.visible)
                                for (l = 0; l < i.parts.length; l++) s = i.parts[l], n.arc(s.position.x, s.position.y, 3, 0, 2 * Math.PI, !1), n.closePath();
                        for (c.wireframes ? n.fillStyle = "indianred" : n.fillStyle = "rgba(0,0,0,0.5)", n.fill(), n.beginPath(), a = 0; a < t.length; a++)(i = t[a]).render.visible && (n.arc(i.positionPrev.x, i.positionPrev.y, 2, 0, 2 * Math.PI, !1), n.closePath());
                        n.fillStyle = "rgba(255,165,0,0.8)", n.fill()
                    }, u.bodyVelocity = function(e, t, n) {
                        n.beginPath();
                        for (var i = 0; i < t.length; i++) {
                            var s = t[i];
                            s.render.visible && (n.moveTo(s.position.x, s.position.y), n.lineTo(s.position.x + (s.position.x - s.positionPrev.x) * 2, s.position.y + (s.position.y - s.positionPrev.y) * 2))
                        }
                        n.lineWidth = 3, n.strokeStyle = "cornflowerblue", n.stroke()
                    }, u.bodyIds = function(e, t, n) {
                        var i, s;
                        for (i = 0; i < t.length; i++)
                            if (t[i].render.visible) {
                                var a = t[i].parts;
                                for (s = a.length > 1 ? 1 : 0; s < a.length; s++) {
                                    var l = a[s];
                                    n.font = "12px Arial", n.fillStyle = "rgba(255,255,255,0.5)", n.fillText(l.id, l.position.x + 10, l.position.y - 10)
                                }
                            }
                    }, u.collisions = function(e, t, n) {
                        var i, s, a, l, c = e.options;
                        for (n.beginPath(), a = 0; a < t.length; a++)
                            if ((i = t[a]).isActive)
                                for (l = 0, s = i.collision; l < i.activeContacts.length; l++) {
                                    var d = i.activeContacts[l].vertex;
                                    n.rect(d.x - 1.5, d.y - 1.5, 3.5, 3.5)
                                }
                        for (c.wireframes ? n.fillStyle = "rgba(255,255,255,0.7)" : n.fillStyle = "orange", n.fill(), n.beginPath(), a = 0; a < t.length; a++)
                            if ((i = t[a]).isActive && (s = i.collision, i.activeContacts.length > 0)) {
                                var u = i.activeContacts[0].vertex.x,
                                    p = i.activeContacts[0].vertex.y;
                                2 === i.activeContacts.length && (u = (i.activeContacts[0].vertex.x + i.activeContacts[1].vertex.x) / 2, p = (i.activeContacts[0].vertex.y + i.activeContacts[1].vertex.y) / 2), s.bodyB === s.supports[0].body || !0 === s.bodyA.isStatic ? n.moveTo(u - 8 * s.normal.x, p - 8 * s.normal.y) : n.moveTo(u + 8 * s.normal.x, p + 8 * s.normal.y), n.lineTo(u, p)
                            }
                        c.wireframes ? n.strokeStyle = "rgba(255,165,0,0.7)" : n.strokeStyle = "orange", n.lineWidth = 1, n.stroke()
                    }, u.separations = function(e, t, n) {
                        var i, s, a, l, c, d = e.options;
                        for (n.beginPath(), c = 0; c < t.length; c++)
                            if ((i = t[c]).isActive) {
                                a = (s = i.collision).bodyA;
                                var u = 1;
                                (l = s.bodyB).isStatic || a.isStatic || (u = .5), l.isStatic && (u = 0), n.moveTo(l.position.x, l.position.y), n.lineTo(l.position.x - s.penetration.x * u, l.position.y - s.penetration.y * u), u = 1, l.isStatic || a.isStatic || (u = .5), a.isStatic && (u = 0), n.moveTo(a.position.x, a.position.y), n.lineTo(a.position.x + s.penetration.x * u, a.position.y + s.penetration.y * u)
                            }
                        d.wireframes ? n.strokeStyle = "rgba(255,165,0,0.5)" : n.strokeStyle = "orange", n.stroke()
                    }, u.grid = function(e, t, n) {
                        e.options.wireframes ? n.strokeStyle = "rgba(255,180,0,0.1)" : n.strokeStyle = "rgba(255,180,0,0.5)", n.beginPath();
                        for (var i = p.keys(t.buckets), s = 0; s < i.length; s++) {
                            var a = i[s];
                            if (!(t.buckets[a].length < 2)) {
                                var l = a.split(/C|R/);
                                n.rect(.5 + parseInt(l[1], 10) * t.bucketWidth, .5 + parseInt(l[2], 10) * t.bucketHeight, t.bucketWidth, t.bucketHeight)
                            }
                        }
                        n.lineWidth = 1, n.stroke()
                    }, u.inspector = function(e, t) {
                        e.engine;
                        var n, i = e.selected,
                            s = e.render,
                            a = s.options;
                        if (a.hasBounds) {
                            var l = s.bounds.max.x - s.bounds.min.x,
                                c = s.bounds.max.y - s.bounds.min.y,
                                d = l / s.options.width,
                                u = c / s.options.height;
                            t.scale(1 / d, 1 / u), t.translate(-s.bounds.min.x, -s.bounds.min.y)
                        }
                        for (var p = 0; p < i.length; p++) {
                            var m = i[p].data;
                            switch (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.9)", t.setLineDash([1, 2]), m.type) {
                                case "body":
                                    n = m.bounds, t.beginPath(), t.rect(Math.floor(n.min.x - 3), Math.floor(n.min.y - 3), Math.floor(n.max.x - n.min.x + 6), Math.floor(n.max.y - n.min.y + 6)), t.closePath(), t.stroke();
                                    break;
                                case "constraint":
                                    var f = m.pointA;
                                    m.bodyA && (f = m.pointB), t.beginPath(), t.arc(f.x, f.y, 10, 0, 2 * Math.PI), t.closePath(), t.stroke()
                            }
                            t.setLineDash([]), t.translate(-.5, -.5)
                        }
                        null !== e.selectStart && (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.6)", t.fillStyle = "rgba(255,165,0,0.1)", n = e.selectBounds, t.beginPath(), t.rect(Math.floor(n.min.x), Math.floor(n.min.y), Math.floor(n.max.x - n.min.x), Math.floor(n.max.y - n.min.y)), t.closePath(), t.stroke(), t.fill(), t.translate(-.5, -.5)), a.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0)
                    }, a = function(e, t) {
                        var n = document.createElement("canvas");
                        return n.width = e, n.height = t, n.oncontextmenu = function() {
                            return !1
                        }, n.onselectstart = function() {
                            return !1
                        }, n
                    }, l = function(e) {
                        var t = e.getContext("2d");
                        return (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)
                    }, c = function(e, t) {
                        var n = e.textures[t];
                        return n || ((n = e.textures[t] = new Image).src = t), n
                    }, d = function(e, t) {
                        var n = t;
                        /(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"), e.canvas.style.background = n, e.canvas.style.backgroundSize = "contain", e.currentBackground = t
                    }
                }, {
                    "../body/Composite": 2,
                    "../collision/Grid": 6,
                    "../core/Common": 14,
                    "../core/Events": 16,
                    "../core/Mouse": 19,
                    "../geometry/Bounds": 26,
                    "../geometry/Vector": 28
                }],
                32: [function(e, t, n) {
                    var i, s, a, l, c, d = {};
                    t.exports = d;
                    var u = e("../geometry/Bounds"),
                        p = e("../body/Composite"),
                        m = e("../core/Common"),
                        f = e("../core/Events"),
                        v = e("../geometry/Vector");
                    "undefined" != typeof window && (i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                        window.setTimeout(function() {
                            e(m.now())
                        }, 1e3 / 60)
                    }, s = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), d.create = function(e) {
                        m.warn("RenderPixi.create: Matter.RenderPixi is deprecated (see docs)");
                        var t = m.extend({
                                controller: d,
                                engine: null,
                                element: null,
                                frameRequestId: null,
                                canvas: null,
                                renderer: null,
                                container: null,
                                spriteContainer: null,
                                pixiOptions: null,
                                options: {
                                    width: 800,
                                    height: 600,
                                    background: "#fafafa",
                                    wireframeBackground: "#222",
                                    hasBounds: !1,
                                    enabled: !0,
                                    wireframes: !0,
                                    showSleeping: !0,
                                    showDebug: !1,
                                    showBroadphase: !1,
                                    showBounds: !1,
                                    showVelocity: !1,
                                    showCollisions: !1,
                                    showAxes: !1,
                                    showPositions: !1,
                                    showAngleIndicator: !1,
                                    showIds: !1,
                                    showShadows: !1
                                }
                            }, e),
                            n = !t.options.wireframes && "transparent" === t.options.background;
                        return t.pixiOptions = t.pixiOptions || {
                            view: t.canvas,
                            transparent: n,
                            antialias: !0,
                            backgroundColor: e.background
                        }, t.mouse = e.mouse, t.engine = e.engine, t.renderer = t.renderer || new PIXI.WebGLRenderer(t.options.width, t.options.height, t.pixiOptions), t.container = t.container || new PIXI.Container, t.spriteContainer = t.spriteContainer || new PIXI.Container, t.canvas = t.canvas || t.renderer.view, t.bounds = t.bounds || {
                            min: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: t.options.width,
                                y: t.options.height
                            }
                        }, f.on(t.engine, "beforeUpdate", function() {
                            d.clear(t)
                        }), t.textures = {}, t.sprites = {}, t.primitives = {}, t.container.addChild(t.spriteContainer), m.isElement(t.element) ? t.element.appendChild(t.canvas) : m.warn('No "render.element" passed, "render.canvas" was not inserted into document.'), t.canvas.oncontextmenu = function() {
                            return !1
                        }, t.canvas.onselectstart = function() {
                            return !1
                        }, t
                    }, d.run = function(e) {
                        ! function loop(t) {
                            e.frameRequestId = i(loop), d.world(e)
                        }()
                    }, d.stop = function(e) {
                        s(e.frameRequestId)
                    }, d.clear = function(e) {
                        for (var t = e.container, n = e.spriteContainer; t.children[0];) t.removeChild(t.children[0]);
                        for (; n.children[0];) n.removeChild(n.children[0]);
                        var i = e.sprites["bg-0"];
                        e.textures = {}, e.sprites = {}, e.primitives = {}, e.sprites["bg-0"] = i, i && t.addChildAt(i, 0), e.container.addChild(e.spriteContainer), e.currentBackground = null, t.scale.set(1, 1), t.position.set(0, 0)
                    }, d.setBackground = function(e, t) {
                        if (e.currentBackground !== t) {
                            var n = t.indexOf && -1 !== t.indexOf("#"),
                                i = e.sprites["bg-0"];
                            if (n) {
                                var s = m.colorToNumber(t);
                                e.renderer.backgroundColor = s, i && e.container.removeChild(i)
                            } else if (!i) {
                                var a = c(e, t);
                                (i = e.sprites["bg-0"] = new PIXI.Sprite(a)).position.x = 0, i.position.y = 0, e.container.addChildAt(i, 0)
                            }
                            e.currentBackground = t
                        }
                    }, d.world = function(e) {
                        var t, n = e.engine.world,
                            i = e.renderer,
                            s = e.container,
                            a = e.options,
                            l = p.allBodies(n),
                            c = p.allConstraints(n),
                            m = [];
                        a.wireframes ? d.setBackground(e, a.wireframeBackground) : d.setBackground(e, a.background);
                        var f = e.bounds.max.x - e.bounds.min.x,
                            y = e.bounds.max.y - e.bounds.min.y,
                            g = f / e.options.width,
                            x = y / e.options.height;
                        if (a.hasBounds) {
                            for (t = 0; t < l.length; t++) {
                                var h = l[t];
                                h.render.sprite.visible = u.overlaps(h.bounds, e.bounds)
                            }
                            for (t = 0; t < c.length; t++) {
                                var b = c[t],
                                    w = b.bodyA,
                                    S = b.bodyB,
                                    C = b.pointA,
                                    A = b.pointB;
                                w && (C = v.add(w.position, b.pointA)), S && (A = v.add(S.position, b.pointB)), C && A && (u.contains(e.bounds, C) || u.contains(e.bounds, A)) && m.push(b)
                            }
                            s.scale.set(1 / g, 1 / x), s.position.set(-e.bounds.min.x * (1 / g), -e.bounds.min.y * (1 / x))
                        } else m = c;
                        for (t = 0; t < l.length; t++) d.body(e, l[t]);
                        for (t = 0; t < m.length; t++) d.constraint(e, m[t]);
                        i.render(s)
                    }, d.constraint = function(e, t) {
                        e.engine;
                        var n = t.bodyA,
                            i = t.bodyB,
                            s = t.pointA,
                            a = t.pointB,
                            l = e.container,
                            c = t.render,
                            d = "c-" + t.id,
                            u = e.primitives[d];
                        if (u || (u = e.primitives[d] = new PIXI.Graphics), !c.visible || !t.pointA || !t.pointB) {
                            u.clear();
                            return
                        } - 1 === m.indexOf(l.children, u) && l.addChild(u), u.clear(), u.beginFill(0, 0), u.lineStyle(c.lineWidth, m.colorToNumber(c.strokeStyle), 1), n ? u.moveTo(n.position.x + s.x, n.position.y + s.y) : u.moveTo(s.x, s.y), i ? u.lineTo(i.position.x + a.x, i.position.y + a.y) : u.lineTo(a.x, a.y), u.endFill()
                    }, d.body = function(e, t) {
                        e.engine;
                        var n = t.render;
                        if (n.visible) {
                            if (n.sprite && n.sprite.texture) {
                                var i = "b-" + t.id,
                                    s = e.sprites[i],
                                    c = e.spriteContainer;
                                s || (s = e.sprites[i] = a(e, t)), -1 === m.indexOf(c.children, s) && c.addChild(s), s.position.x = t.position.x, s.position.y = t.position.y, s.rotation = t.angle, s.scale.x = n.sprite.xScale || 1, s.scale.y = n.sprite.yScale || 1
                            } else {
                                var d = "b-" + t.id,
                                    u = e.primitives[d],
                                    p = e.container;
                                u || ((u = e.primitives[d] = l(e, t)).initialAngle = t.angle), -1 === m.indexOf(p.children, u) && p.addChild(u), u.position.x = t.position.x, u.position.y = t.position.y, u.rotation = t.angle - u.initialAngle
                            }
                        }
                    }, a = function(e, t) {
                        var n = c(e, t.render.sprite.texture),
                            i = new PIXI.Sprite(n);
                        return i.anchor.x = t.render.sprite.xOffset, i.anchor.y = t.render.sprite.yOffset, i
                    }, l = function(e, t) {
                        var n, i = t.render,
                            s = e.options,
                            a = new PIXI.Graphics,
                            l = m.colorToNumber(i.fillStyle),
                            c = m.colorToNumber(i.strokeStyle),
                            d = m.colorToNumber(i.strokeStyle),
                            u = m.colorToNumber("#bbb"),
                            p = m.colorToNumber("#CD5C5C");
                        a.clear();
                        for (var f = t.parts.length > 1 ? 1 : 0; f < t.parts.length; f++) {
                            n = t.parts[f], s.wireframes ? (a.beginFill(0, 0), a.lineStyle(1, u, 1)) : (a.beginFill(l, 1), a.lineStyle(i.lineWidth, c, 1)), a.moveTo(n.vertices[0].x - t.position.x, n.vertices[0].y - t.position.y);
                            for (var v = 1; v < n.vertices.length; v++) a.lineTo(n.vertices[v].x - t.position.x, n.vertices[v].y - t.position.y);
                            a.lineTo(n.vertices[0].x - t.position.x, n.vertices[0].y - t.position.y), a.endFill(), (s.showAngleIndicator || s.showAxes) && (a.beginFill(0, 0), s.wireframes ? a.lineStyle(1, p, 1) : a.lineStyle(1, d), a.moveTo(n.position.x - t.position.x, n.position.y - t.position.y), a.lineTo((n.vertices[0].x + n.vertices[n.vertices.length - 1].x) / 2 - t.position.x, (n.vertices[0].y + n.vertices[n.vertices.length - 1].y) / 2 - t.position.y), a.endFill())
                        }
                        return a
                    }, c = function(e, t) {
                        var n = e.textures[t];
                        return n || (n = e.textures[t] = PIXI.Texture.fromImage(t)), n
                    }
                }, {
                    "../body/Composite": 2,
                    "../core/Common": 14,
                    "../core/Events": 16,
                    "../geometry/Bounds": 26,
                    "../geometry/Vector": 28
                }]
            }, {}, [30])(30)
        }
    }
]);