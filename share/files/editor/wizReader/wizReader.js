! function e(t, n, r) {
    function o(a, u) {
        if (!n[a]) {
            if (!t[a]) {
                var l = "function" == typeof require && require;
                if (!u && l) return l(a, !0);
                if (i) return i(a, !0);
                var d = new Error("Cannot find module '" + a + "'");
                throw d.code = "MODULE_NOT_FOUND", d
            }
            var s = n[a] = {
                exports: {}
            };
            t[a][0].call(s.exports, function (e) {
                var n = t[a][1][e];
                return o(n ? n : e)
            }, s, s.exports, e, t, n, r)
        }
        return n[a].exports
    }
    for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
    return o
}({
    1: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function o() {
            var e, t = p["default"].doc.getElementById(m["default"].ID.AMEND_INFO);
            return t || (t = p["default"].doc.createElement("div"), e = p["default"].doc.createElement("div"), e.setAttribute("contenteditable", "false"), t.appendChild(e), t.id = m["default"].ID.AMEND_INFO, x["default"].css(t, {
                position: "absolute",
                display: "none",
                padding: "6px",
                "font-family": '"Microsoft Yahei","微软雅黑",Helvetica,SimSun,SimHei'
            }, !1), e.innerHTML = i(), x["default"].css(e, {
                "background-color": "white",
                padding: "0px",
                "font-size": "12px",
                border: "1px solid #D8D8D8",
                "-webkit-border-radius": "4px",
                "-moz-border-radius": "4px",
                "-border-radius": "4px",
                "-webkit-box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 3px",
                "-moz-box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 3px",
                "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 3px",
                "min-width": "160px",
                "max-width": "280px",
                "min-height": "50px"
            }, !1), k.template.appendChild(t)), t
        }
        function i() {
            return p["default"].client.type.isIOS || p["default"].client.type.isMac || p["default"].client.type.isAndroid ? '<div id="' + m["default"].ID.AMEND_INFO_SINGLE + '" style="display:none; padding: 8px 16px;"><img id="' + m["default"].ID.AMEND_INFO_IMG + '" class="' + m["default"].CLASS.IMG_NOT_DRAG + '" style="width: 40px; height: 40px !important; position: absolute; -webkit-border-radius: 40px;-moz-border-radius:40px;border-radius:40px;"><ul style="list-style-type: none;margin: 4px 0 0 50px;padding-left: 0;"><li style="line-height: 18px;white-space: nowrap;padding: 2px 0;"><span id="' + m["default"].ID.AMEND_INFO_NAME + '" style="color:#000;font-size:12px;font-weight:bold;max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;"></span><span id="' + m["default"].ID.AMEND_INFO_CONTENT + '" style="color:#000;font-size:12px;margin-left:.5em;display:inline-block;overflow:hidden;float:right"></span></li><li style="line-height: 18px;text-align: right;"><span id="' + m["default"].ID.AMEND_INFO_TIME + '" style="color:#A3A3A3;font-size:12px;"></span></li></ul></div><div id="' + m["default"].ID.AMEND_INFO_MULTI + '" style="display:none; padding: 8px 16px;"><p style="margin: 4px 16px;">' + y["default"].Amend.MultiInfo + '</p></div><div id="' + m["default"].ID.AMEND_INFO_TOOLS + '" style="padding:0;margin:0;box-sizing: border-box;"><div style="line-height: 26px;width: 50%;display:inline-block;text-align: center;padding:0 8px;margin:0;box-sizing: border-box;"><a id="' + m["default"].ID.AMEND_INFO_REFUSE + '" href="javascript:void(0);" style="font-size:12px;display:block;cursor:pointer;color:#447BD8;text-decoration: blink;">' + y["default"].Amend.BtnRefuse + '</a></div><div style="line-height: 26px;width: 50%;display:inline-block;text-align: center;padding:0 8px;margin:0;box-sizing: border-box;"><a id="' + m["default"].ID.AMEND_INFO_ACCEPT + '" href="javascript:void(0);" style="font-size:12px;display:block;cursor:pointer;color:#447BD8;text-decoration: blink;">' + y["default"].Amend.BtnAccept + "</a></div></div>" : '<div id="' + m["default"].ID.AMEND_INFO_SINGLE + '" style="display:none; padding: 8px 16px;"><img id="' + m["default"].ID.AMEND_INFO_IMG + '" class="' + m["default"].CLASS.IMG_NOT_DRAG + '" style="width: 40px; height: 40px !important; position: absolute;"><ul style="list-style-type: none;margin: 4px 0 0 50px;padding-left: 0;"><li style="line-height: 18px;white-space: nowrap;padding: 2px 0;"><span id="' + m["default"].ID.AMEND_INFO_NAME + '" style="color:#000;font-size:12px;font-weight:bold;max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;"></span><span id="' + m["default"].ID.AMEND_INFO_CONTENT + '" style="color:#000;font-size:12px;margin-left:.5em;display:inline-block;overflow:hidden;float:right"></span></li><li style="line-height: 18px;text-align: right;"><span id="' + m["default"].ID.AMEND_INFO_TIME + '" style="color:#A3A3A3;font-size:12px;"></span></li></ul></div><div id="' + m["default"].ID.AMEND_INFO_MULTI + '" style="display:none; padding: 8px 16px;"><p style="margin: 4px 16px;">' + y["default"].Amend.MultiInfo + '</p></div><div id="' + m["default"].ID.AMEND_INFO_TOOLS + '" style="padding:0;margin:0;box-sizing:border-box;border-top:1px solid #D8D8D8"><div style="line-height: 26px;width: 50%;display:inline-block;text-align: center;padding:0 8px;margin:0;box-sizing: border-box;border-right: 1px solid #D8D8D8"><a id="' + m["default"].ID.AMEND_INFO_ACCEPT + '" href="javascript:void(0);" style="font-size:12px;display:block;cursor:pointer;color:#447BD8;text-decoration: blink;">' + y["default"].Amend.BtnAccept + '</a></div><div style="line-height: 26px;width: 50%;display:inline-block;text-align: center;padding:0 8px;margin:0;box-sizing: border-box;"><a id="' + m["default"].ID.AMEND_INFO_REFUSE + '" href="javascript:void(0);" style="font-size:12px;display:block;cursor:pointer;color:#447BD8;text-decoration: blink;">' + y["default"].Amend.BtnRefuse + "</a></div></div>"
        }
        function a() {
            return {
                dom: k.cur,
                isSelection: !! k.isSelection
            }
        }
        function u(e) {
            var t = k.cur,
                n = t.getAttribute(m["default"].ATTR.SPAN_USERID),
                r = S["default"].getUserByGuid(n),
                o = r ? r.name : y["default"].Amend.UserNameDefault,
                i = t.getAttribute(m["default"].ATTR.SPAN_TIMESTAMP),
                a = !! t.getAttribute(m["default"].ATTR.SPAN_DELETE),
                r = S["default"].getUserByGuid(n);
            i = i.substring(0, i.length - 3), k.curPos = e, k.img.src = r ? r.imgUrl : "", k.name.innerText = o, k.name.setAttribute("title", o), k.content.innerText = a ? y["default"].Amend.Delete : y["default"].Amend.Edit, k.time.innerText = i, k.multiUser.style.display = "none", k.singleUser.style.display = "block"
        }
        function l(e) {
            k.curPos = e, k.singleUser.style.display = "none", k.multiUser.style.display = "block"
        }
        function d(e) {
            k.main.parentNode == k.template && (p["default"].doc.body.appendChild(k.main), k.singleUser = p["default"].doc.getElementById(m["default"].ID.AMEND_INFO_SINGLE), k.multiUser = p["default"].doc.getElementById(m["default"].ID.AMEND_INFO_MULTI), k.img = p["default"].doc.getElementById(m["default"].ID.AMEND_INFO_IMG), k.name = p["default"].doc.getElementById(m["default"].ID.AMEND_INFO_NAME), k.content = p["default"].doc.getElementById(m["default"].ID.AMEND_INFO_CONTENT), k.time = p["default"].doc.getElementById(m["default"].ID.AMEND_INFO_TIME), k.tools = p["default"].doc.getElementById(m["default"].ID.AMEND_INFO_TOOLS), k.btnAccept = p["default"].doc.getElementById(m["default"].ID.AMEND_INFO_ACCEPT), k.btnRefuse = p["default"].doc.getElementById(m["default"].ID.AMEND_INFO_REFUSE)), k.cur ? u(e) : l(e), O.bindInfoBtn(), k.tools.style.display = k.readonly ? "none" : "block", x["default"].css(k.main, {
                top: "0px",
                left: "0px",
                display: "block",
                visibility: "hidden"
            }, !1), x["default"].setLayout({
                layerObj: k.main,
                target: e,
                layout: m["default"].TYPE.POS.upLeft,
                fixed: !1,
                noSpace: !1,
                reverse: !0
            }), x["default"].css(k.main, {
                display: "block",
                visibility: "visible"
            }, !1)
        }
        function s() {
            k.main && (O.unbindInfoBtn(), k.cur = null, k.curPos = null, k.isMulti = !1, k.isSelection = !1, k.img.src = "", k.name.innerText = "", k.name.setAttribute("title", ""), k.content.innerText = "", x["default"].css(k.main, {
                display: "none"
            }, !1), k.template.appendChild(k.main))
        }
        function f() {
            var e = p["default"].doc.getElementById(m["default"].ID.AMEND_INFO);
            e && e.parentNode.removeChild(e)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = e("../common/env"),
            p = r(c),
            g = e("../common/const"),
            m = r(g),
            h = e("../common/utils"),
            b = r(h),
            v = e("../common/lang"),
            y = r(v),
            A = e("../domUtils/domBase"),
            x = r(A),
            T = e("./amendUtils/amendBase"),
            E = r(T),
            N = e("./amendUser"),
            S = r(N),
            w = e("../common/wizUserAction"),
            _ = r(w),
            C = {
                onAccept: null,
                onRefuse: null
            }, I = !1,
            D = {
                x: null,
                y: null
            }, k = {
                cur: null,
                curPos: null,
                isMulti: !1,
                isSelection: !1,
                template: null,
                main: null,
                img: null,
                name: null,
                content: null,
                time: null,
                btnAccept: null,
                btnRefuse: null,
                init: function (e, t) {
                    k.template = p["default"].doc.createElement("div"), k.main = o(), k.readonly = !(!e || !e.readonly), k.main.setAttribute("contenteditable", "false"), t && t.onAccept && (C.onAccept = t.onAccept), t && t.onRefuse && (C.onRefuse = t.onRefuse), O.unbind(), O.bind()
                },
                remove: function () {
                    O.unbind(), f(), k.main = null, k.img = null, k.name = null, k.content = null, k.time = null, k.btnAccept = null, k.btnRefuse = null
                },
                show: function (e, t) {
                    clearTimeout(k.showTimer), clearTimeout(k.hideTimer);
                    var n = b["default"].isArray(e),
                        r = n && e.length > 1,
                        o = n ? r ? null : e[0] : e,
                        i = !1;
                    k.isSelection = n, k.isMulti !== r || o !== k.cur ? (k.hide(!0), i = !0) : (!k.curPos || Math.abs(k.curPos.left - t.left) > 75 || Math.abs(k.curPos.top - t.top) > 24) && (i = !0), i && (k.showTimer = setTimeout(function () {
                        k.isMulti = r, k.cur = o, d(t)
                    }, 2 * m["default"].AMEND.INFO_TIMER))
                },
                hide: function (e) {
                    clearTimeout(k.showTimer), clearTimeout(k.hideTimer), (k.cur || k.isMulti) && (e ? s() : k.hideTimer = setTimeout(s, m["default"].AMEND.INFO_TIMER))
                },
                isInfo: function (e) {
                    var t = x["default"].getParentByFilter(e, function (e) {
                        return e == k.main
                    }, !0);
                    return !!t
                },
                start: function () {
                    I = !1
                },
                stop: function () {
                    k.hide(!0), I = !0
                }
            }, O = {
                bind: function () {
                    p["default"].client.type.isIOS || p["default"].client.type.isAndroid ? (p["default"].doc.addEventListener("touchstart", O.handler.onTouchstart), p["default"].doc.addEventListener("touchend", O.handler.onMouseMove)) : p["default"].doc.addEventListener("mousemove", O.handler.onMouseMove)
                },
                unbind: function () {
                    p["default"].client.type.isIOS || p["default"].client.type.isAndroid ? (p["default"].doc.removeEventListener("touchstart", O.handler.onTouchstart), p["default"].doc.removeEventListener("touchend", O.handler.onMouseMove)) : p["default"].doc.removeEventListener("mousemove", O.handler.onMouseMove)
                },
                bindInfoBtn: function () {
                    O.unbindInfoBtn(), p["default"].client.type.isIOS || p["default"].client.type.isAndroid ? k.main.addEventListener("touchend", O.handler.onClick) : k.main.addEventListener("click", O.handler.onClick)
                },
                unbindInfoBtn: function () {
                    p["default"].client.type.isIOS || p["default"].client.type.isAndroid ? k.main.removeEventListener("touchend", O.handler.onClick) : k.main.removeEventListener("click", O.handler.onClick)
                },
                getEventPos: function (e) {
                    return {
                        x: e.changedTouches ? e.changedTouches[0].clientX : e.clientX,
                        y: e.changedTouches ? e.changedTouches[0].clientY : e.clientY
                    }
                },
                handler: {
                    onMouseMove: function (e) {
                        var t = O.getEventPos(e);
                        if ((D.x !== t.x || D.y !== t.y) && (D = t, !I)) {
                            var n, r = e.target,
                                o = k.isInfo(r),
                                i = {
                                    width: 20,
                                    height: 20
                                };
                            if (o) return clearTimeout(k.showTimer), void clearTimeout(k.hideTimer);
                            var a, u = p["default"].doc.getSelection(),
                                l = E["default"].getWizDeleteParent(r) || E["default"].getWizInsertParent(r);
                            !u.isCollapsed && l && u.containsNode(l, !0) && (a = u.isCollapsed ? null : E["default"].getAmendDoms({
                                selection: !0,
                                selectAll: !1
                            })), a && (a = a.deletedInsertList.concat(a.insertList, a.deleteList), 0 === a.length && (a = null));
                            var d;
                            a || l ? (d = parseInt(p["default"].win.getComputedStyle(l)["font-size"]), isNaN(d) && (d = 14), n = x["default"].getPageScroll(), i.left = t.x + n.left, i.top = t.y + n.top - d, i.top < l.offsetTop && (i.top = l.offsetTop), k.show(a || l, i)) : k.hide(!1)
                        }
                    },
                    onTouchstart: function (e) {
                        var t = e.target,
                            n = k.isInfo(t);
                        n || k.hide(!1)
                    },
                    onClick: function (e) {
                        var t;
                        t = e.changedTouches ? e.changedTouches[0].target : e.target, t.id == m["default"].ID.AMEND_INFO_ACCEPT ? O.handler.onAccept(e) : t.id == m["default"].ID.AMEND_INFO_REFUSE && O.handler.onRefuse(e), b["default"].stopEvent(e)
                    },
                    onAccept: function (e) {
                        C.onAccept && C.onAccept(a()), k.hide(!0), _["default"].save(_["default"].ActionId.ClickAcceptFromAmendInfo)
                    },
                    onRefuse: function (e) {
                        C.onRefuse && C.onRefuse(a()), k.hide(!0), _["default"].save(_["default"].ActionId.ClickRefuseFromAmendInfo)
                    }
                }
            };
        n["default"] = k, t.exports = n["default"]
    }, {
        "../common/const": 4,
        "../common/env": 6,
        "../common/lang": 7,
        "../common/utils": 8,
        "../common/wizUserAction": 10,
        "../domUtils/domBase": 12,
        "./amendUser": 2,
        "./amendUtils/amendBase": 3
    }],
    2: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function o(e) {
            return e
        }
        function i(e) {
            if (g["default"].client.type.isWeb) return "/wizas/a/users/avatar/" + e + "?default=true&_" + (new Date).valueOf();
            if (g["default"].client.type.isWin) try {
                var t = external.GetAvatarByUserGUID(e);
                return t ? t : v
            } catch (n) {
                console.log(n)
            } else g["default"].client.type.isMac || g["default"].client.type.isIOS || g["default"].client.type.isAndroid;
            return v
        }
        function a(e) {
            if (g["default"].client.type.isWeb);
            else if (g["default"].client.type.isWin) try {
                var t = external.GetAliasByUserGUID(e);
                return t
            } catch (n) {
                console.log(n)
            } else g["default"].client.type.isMac || g["default"].client.type.isIOS || g["default"].client.type.isAndroid;
            return null
        }
        function u() {
            return x ? x : x = g["default"].doc.getElementById(h["default"].ID.AMEND_USER_INFO)
        }
        function l() {
            x = g["default"].doc.createElement("meta"), x.id = h["default"].ID.AMEND_USER_INFO, x.name = h["default"].ID.AMEND_USER_INFO, g["default"].doc.getElementsByTagName("HEAD")[0].insertBefore(x, null)
        }
        function d() {
            if (!T) {
                var e, t, n;
                if (T = {}, E = {}, x = u()) try {
                    E = JSON.parse(x.content);
                    for (e in E) E.hasOwnProperty(e) && (t = E[e], t.user_guid = e, n = a(e), t.user_name = n ? n : t.name, T[e] = new y(t))
                } catch (r) {}
            }
        }
        function s(e) {
            var t, n, r = e.hash,
                o = h["default"].COLOR.length,
                i = {};
            if (d(), T[r]) return T[r].color;
            for (t in T) T.hasOwnProperty(t) && (n = T[t].color, i[n] = !0);
            for (t = 0; o > t; t++) if (n = h["default"].COLOR[t], !i[n]) return n;
            return h["default"].COLOR[0]
        }
        function f(e) {
            T[e.guid] = e, E[e.guid] = {
                color: e.color,
                name: e.name
            }
        }
        function c() {
            x || l(), x.content = JSON.stringify(E)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var p = e("../common/env"),
            g = r(p),
            m = e("../common/const"),
            h = r(m),
            b = e("../common/utils"),
            v = (r(b), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAExUlEQVRYR9WZz08bRxTHvya1CHbUSHXCiZzCIaaBBOUUEveQSORWYwwRxRCpqtIqjZL8XQkEUppAbQMX6hgh5UetRiFV4MABQXoK2AgUx1vNzs7u7Hpmf3m3Vc3Blm2Gz/vOd95784goiqLgf/aIhAVdrVaxu7sLKomC7u7uwKQJBPrFi5eoVvfx6VMdZONOnIhjf78KBQoINQEnrwcuD+DkyS9bhvcNfXR0hFKppEKqWqp8BE0l1N7XgPXvKOjq6kJfX29L4L6hCfDh4aEnYBbQjRuD+PhxD4nEV77gfUEvLy/rXm1S2GIJQ3VtJ9TdoFtDfuKxOK5fv+YJ3jM0BfZmCd4y5tcUPp3+Njzo1dVV1Go1X5Yw+Z1oTOLWVI91HMfg4KBrcE9KLy0tq+mrVUvwwGSxzs5ODAxcDgt6yXWWcLIEVd5QezgzFA704iKBdk5rQmCLJdRzwYEPD2fCgS4WF408LMkSooOmhsl5mBYcTmlFQTY7HA50oVi0LRxeLcHDj4QGXShKK50jsGpfsyWY2uR5dCQbjtL5QsHUSzgVDidL8AcxNOiVlRXUagdccTEfSqGfLVmCt4RRpBTcHB0JR+lS6Tn29va04iIBdsgSvCVoxlMQ/SKKTCYdPPT29jb+qFSEB5HvJbxYgnqctq2958+jpyfpCtx1RVxY+M1eYUsKYyrqAWmf85ZgwAx+bOxm8ND0D4rLOK+wXZbQg+F6bALfQAOj2Syi0agjuGul5+cXTA1+EJbg7UFeZ4bS6OjoCA762fy87udWsoTMHkT43PiYIzD5gmul19bW8OHD36Yy7tUSVg/T8q6VeCjIjX8XLDRZ/OkzojZNdX6zhNUSzOPEGrFYLFhotlpxcQkHBwdaZTS3l7LCYWeJeDyGoTBvLgy8XC5jl1jFppeQZQm/luC3wLWn+V9qNBqYm/u1qb3kewmZDXjVe5JJ9PdfdGWJlqHJAk9+mQOBl1nC6dCRTZrIuTt41qh8Kc0WmZmZ1dXmFbTzMCtOly71I3nunGeVPaU80eo7Ozv4vfRcvzY1WULrK8wBqW7HRG7cF3DL0GSBqenHRk9iKc3WQ8eGka0ABwZtpzADNZ4VTE7kfKscCPSjqWm9vZRnDGoJVv1uTf7H0A8fTen24DOGSGH23q3JiX9f6Xq9jnfv/sKfb954BmbTqYsX+nDmTBcSiYTnAFynvK2tLZDhef3zZ60S0huHLNXxHrZTnXwWiUTQffYsUqkrrgKQQpMLbD6fF+ZhN4WD9zB/cTC/ZsN3YwysN1CZNE6fOiUMwgT99u061tfXjRmb4IrkpnCIgOVBNAObdg/A1z1JfJO6qgegQ5fLqyDFwnqnY/M2L4WD75GZh5nCIqWlFqOyq7sdaWvDnZ9uq+A69Ozsk1AUtt4rhd2fNkpg4wWzULT9JZ/d/uF7tLe3U+iNjU1tPGAMBu1uzbJKZ1W4FUuIhpQX+nqRSl2l0O/fb6BSqZhbTX32xmUJm14iVGCN5VjbMfx850cK/erVa2xuburb4LaBl6U1mSVE6zpZwphhE4s0cP/eXQqdzxewX61Kcy6bS9ComPLm0ixKa34PXXMyoMDkoUNPP56Rt5fcITGUEgMH6mGLPdl/fh/cv4t/ANultPKz243RAAAAAElFTkSuQmCC"),
            y = function (e) {
                e || (e = {}), this.guid = e.user_guid || "", this.hash = o(this.guid), this.name = e.user_name || "", this.imgUrl = e.img_url ? e.img_url : i(this.guid), this.color = e.color || s(this)
            }, A = null,
            x = null,
            T = null,
            E = null,
            N = {
                initUser: function (e) {
                    return d(), e ? (A = new y(e), void f(A)) : null
                },
                getCurUser: function () {
                    return c(), A
                },
                getUserByGuid: function (e) {
                    return A && e === A.guid ? A : T && T[e] ? T[e] : (d(), T[e])
                },
                removeAllUserInfo: function () {
                    var e = g["default"].doc.getElementById(h["default"].ID.AMEND_USER_INFO);
                    e && e.parentNode.removeChild(e), x = null, T = null, E = null
                },
                setUsersData: function (e) {
                    var t, n, r, o, i;
                    if (e) for (t = 0, n = e.length; n > t; t++) r = e[t], o = T[r.user_guid], i = E[r.user_guid], o && r.user_name && (o.name = r.user_name), o && r.img_url && (o.imgUrl = r.img_url), i && r.user_name && (i.name = r.user_name)
                }
            };
        n["default"] = N, t.exports = n["default"]
    }, {
        "../common/const": 4,
        "../common/env": 6,
        "../common/utils": 8
    }],
    3: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../common/env"),
            i = r(o),
            a = e("../../common/const"),
            u = r(a),
            l = e("../../common/utils"),
            d = r(l),
            s = e("../../domUtils/domBase"),
            f = r(s),
            c = e("../../rangeUtils/rangeBase"),
            p = r(c),
            g = e("./../amendUser"),
            m = (r(g), {
                getAmendDoms: function (e) {
                    var t, n, r, o = {}, i = {}, a = {
                        insertList: [],
                        deleteList: [],
                        deletedInsertList: []
                    }, l = [];
                    if (e.selection) o[u["default"].ATTR.SPAN_INSERT] = "", a.insertList = m.getWizSpanFromRange(e.selectAll, o), a.deletedInsertList = f["default"].removeListFilter(a.insertList, function (e) {
                        return e.getAttribute(u["default"].ATTR.SPAN_DELETE)
                    }), i[u["default"].ATTR.SPAN_DELETE] = "", a.deleteList = m.getWizSpanFromRange(e.selectAll, i), l = f["default"].removeListFilter(a.deleteList, function (e) {
                        return e.getAttribute(u["default"].ATTR.SPAN_INSERT)
                    }), a.deletedInsertList = d["default"].removeDup(a.deletedInsertList.concat(l));
                    else for (t = 0, n = e.domList.length; n > t; t++) r = e.domList[t], r.getAttribute(u["default"].ATTR.SPAN_DELETE) && r.getAttribute(u["default"].ATTR.SPAN_INSERT) ? a.deletedInsertList.push(r) : r.getAttribute(u["default"].ATTR.SPAN_DELETE) ? a.deleteList.push(r) : r.getAttribute(u["default"].ATTR.SPAN_INSERT) && a.insertList.push(r);
                    return a
                },
                getSameTimeStampDom: function (e) {
                    function t(e, t, o) {
                        var i, a, l, s = n(e),
                            f = e.getAttribute(u["default"].ATTR.SPAN_TIMESTAMP),
                            c = e.getAttribute(u["default"].ATTR.SPAN_USERID);
                        if (f) for (var p = r(e, t); p;) i = m.getWizInsertParent(p) || m.getWizDeleteParent(p), p = i, p && p.getAttribute(u["default"].ATTR.SPAN_USERID) !== c ? p = null : p && (a = p.getAttribute(u["default"].ATTR.SPAN_TIMESTAMP), l = n(p), s === l && d["default"].isSameAmendTime(p.getAttribute(u["default"].ATTR.SPAN_TIMESTAMP), f) ? (t ? o.splice(0, 0, p) : o.push(p), p = r(p, t)) : p = null)
                    }
                    function n(e) {
                        return e.getAttribute(u["default"].ATTR.SPAN_DELETE) && e.getAttribute(u["default"].ATTR.SPAN_INSERT) ? 1 : e.getAttribute(u["default"].ATTR.SPAN_INSERT) ? 2 : e.getAttribute(u["default"].ATTR.SPAN_DELETE) ? 3 : 0
                    }
                    function r(e, t) {
                        return t ? f["default"].getPreviousNode(e, !1, null) : f["default"].getNextNode(e, !1, null)
                    }
                    if (!e || 1 != e.nodeType) return [];
                    var o = [];
                    return t(e, !0, o), o.push(e), t(e, !1, o), o
                },
                getSelectedAmendDoms: function () {
                    function e(e, t, n) {
                        if (0 === e.length || 0 === n) return null;
                        var r = e[0];
                        return r === t || f["default"].contains(r, t) ? (e.splice(0, 1), {
                            dom: t,
                            offset: n
                        }) : null
                    }
                    function t(e, t, n) {
                        if (0 === e.length) return null;
                        var r = 3 === t.nodeType ? t.length : t.childNodes.length;
                        if (n === r) return null;
                        var o = e[e.length - 1];
                        return o === t || f["default"].contains(o, t) ? (e.splice(e.length - 1, 1), {
                            dom: t,
                            offset: n
                        }) : null
                    }
                    var n, r, o, a, u = i["default"].doc.getSelection(),
                        l = u.getRangeAt(0),
                        d = m.getAmendDoms({
                            selection: !0,
                            selectAll: !1
                        });
                    if (0 === d.insertList.length && 0 === d.deleteList.length && 0 === d.deletedInsertList.length) return null;
                    if (u.isCollapsed) return d;
                    n = l.startContainer, o = l.startOffset, r = l.endContainer, a = l.endOffset;
                    var s = e(d.deleteList, n, o);
                    s || (s = e(d.insertList, n, o), s || (s = e(d.deletedInsertList, n, o)));
                    var c = {};
                    return r === n && s ? (c.dom = s.dom, c.offset = a) : (c = t(d.deleteList, r, a), c || (c = t(d.insertList, r, a), c || (c = t(d.deletedInsertList, r, a)))), d.start = s, d.end = c, d
                },
                getWizAmendImgParent: function (e) {
                    return f["default"].getParentByFilter(e, function (e) {
                        return e && 1 === e.nodeType && e.getAttribute(u["default"].ATTR.IMG)
                    }, !0)
                },
                getWizAmendParent: function (e) {
                    return f["default"].getParentByFilter(e, function (e) {
                        return e && 1 === e.nodeType && (e.getAttribute(u["default"].ATTR.SPAN_INSERT) || e.getAttribute(u["default"].ATTR.SPAN_DELETE))
                    }, !0)
                },
                getWizDeleteParent: function (e) {
                    return f["default"].getParentByFilter(e, function (e) {
                        return e && 1 === e.nodeType && e.getAttribute(u["default"].ATTR.SPAN_DELETE)
                    }, !0)
                },
                getWizInsertParent: function (e) {
                    return f["default"].getParentByFilter(e, function (e) {
                        return e && 1 === e.nodeType && e.getAttribute(u["default"].ATTR.SPAN_INSERT) && !e.getAttribute(u["default"].ATTR.SPAN_DELETE) && e.childNodes.length > 0
                    }, !0)
                },
                getWizSpanFromRange: function (e, t) {
                    function n(e) {
                        if (!e || 1 !== e.nodeType) return !1;
                        var n;
                        for (n in t) if (t.hasOwnProperty(n) && (!e.getAttribute(n) || t[n] && e.getAttribute(n) != t[n])) return !1;
                        return !0
                    }
                    var r, o, a, u = "span";
                    if (!t) return [];
                    for (r in t) t.hasOwnProperty(r) && (u += t[r] ? "[" + r + '="' + t[r] + '"]' : "[" + r + "]");
                    var l, d, s, c, g, m, h, b, v, y = i["default"].doc.getSelection(),
                        A = [];
                    if (e) {
                        var x = i["default"].doc.querySelectorAll(u);
                        for (r = 0, o = x.length; o > r; r++) A.push(x[r]);
                        return A
                    }
                    if (0 === y.rangeCount) return [];
                    if (y.isCollapsed) return d = p["default"].getRangeAnchor(!1), l = f["default"].getPreviousNode(d, !1, null), d && (d = f["default"].getParentByFilter(d, n, !0), d && A.push(d)), A;
                    if (l = p["default"].getRangeAnchor(!0), d = p["default"].getRangeAnchor(!1), !l || !d) return [];
                    if (s = f["default"].getParentByFilter(l, n, !0), c = f["default"].getParentByFilter(d, n, !0), s && s == c) return [s];
                    for (g = f["default"].getParentRoot([l, d]), m = g.querySelectorAll(u), h = f["default"].getIndexListByDom(l), b = f["default"].getIndexListByDom(d), s && A.push(s), r = 0, o = m.length; o > r; r++) a = m[r], v = f["default"].getIndexListByDom(a), f["default"].compareIndexList(h, v) <= 0 && f["default"].compareIndexList(b, v) >= 0 && A.push(a);
                    return A
                },
                isAmendEdited: function () {
                    var e = m.getAmendDoms({
                        selection: !0,
                        selectAll: !0
                    });
                    return !!e && (e.deleteList.length > 0 || e.insertList.length > 0 || e.deletedInsertList.length > 0)
                },
                isWizAmend: function (e) {
                    return m.getWizAmendParent(e)
                },
                isWizDelete: function (e) {
                    return !!m.getWizDeleteParent(e)
                },
                isWizInsert: function (e) {
                    return !!m.getWizInsertParent(e)
                }
            });
        n["default"] = m, t.exports = n["default"]
    }, {
        "../../common/const": 4,
        "../../common/env": 6,
        "../../common/utils": 8,
        "../../domUtils/domBase": 12,
        "../../rangeUtils/rangeBase": 18,
        "./../amendUser": 2
    }],
    4: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = "​",
            o = {
                FILL_CHAR: r,
                FILL_CHAR_REG: new RegExp(r, "ig"),
                AMEND_TIME_SPACE: 18e4,
                AMEND_BATCH_TIME_SPACE: 3e4,
                COMPOSITION_START: !1,
                CLASS: {
                    IMG_NOT_DRAG: "wiz-img-cannot-drag"
                },
                ATTR: {
                    IMG: "data-wiz-img",
                    IMG_MASK: "data-wiz-img-mask",
                    SPAN: "data-wiz-span",
                    SPAN_USERID: "data-wiz-user-id",
                    SPAN_INSERT: "data-wiz-insert",
                    SPAN_DELETE: "data-wiz-delete",
                    SPAN_PASTE: "data-wiz-paste",
                    SPAN_PASTE_TYPE: "data-wiz-paste-type",
                    SPAN_PASTE_ID: "data-wiz-paste-id",
                    SPAN_TIMESTAMP: "data-wiz-amend-time"
                },
                ID: {
                    AMEND_INFO: "wiz-amend-info",
                    AMEND_INFO_SINGLE: "wiz-amend-info-single",
                    AMEND_INFO_MULTI: "wiz-amend-info-multi",
                    AMEND_INFO_NAME: "wiz-amend-info-name",
                    AMEND_INFO_IMG: "wiz-amend-info-image",
                    AMEND_INFO_CONTENT: "wiz-amend-info-content",
                    AMEND_INFO_TIME: "wiz-amend-info-time",
                    AMEND_INFO_TOOLS: "wiz-amend-info-tools",
                    AMEND_INFO_ACCEPT: "wiz-amend-info-accept",
                    AMEND_INFO_REFUSE: "wiz-amend-info-refuse",
                    AMEND_USER_INFO: "wiz-amend-user"
                },
                TYPE: {
                    IMG_DELETE: "delete",
                    IMG_INSERT: "insert",
                    PASTE: {
                        START: "start",
                        END: "end",
                        CONTENT: "content"
                    },
                    POS: {
                        upLeft: "up-left",
                        downLeft: "down-left",
                        leftUp: "left-up",
                        rightUp: "right-up",
                        upRight: "up-right",
                        downRight: "down-right",
                        leftDown: "left-down",
                        rightDown: "right-down"
                    }
                },
                COLOR: ["#CB3C3C", "#0C9460", "#FF3399", "#FF6005", "#8058BD", "#009999", "#8AA725", "#339900", "#CC6600", "#3BBABA", "#D4CA1A", "#2389B0", "#006699", "#FF8300", "#2C6ED5", "#FF0000", "#B07CFF", "#CC3399", "#EB4847", "#3917E6"],
                CSS: {
                    IMG: {
                        SPAN: {
                            position: "relative",
                            display: "inline-block"
                        },
                        MASK: {
                            position: "absolute",
                            width: "100% !important",
                            height: "100% !important",
                            top: "0",
                            left: "0",
                            opacity: ".5",
                            filter: "alpha(opacity=50)",
                            border: "2px solid",
                            "box-sizing": "border-box",
                            "-webkit-box-sizing": "border-box",
                            "-moz-box-sizing": "border-box"
                        }
                    },
                    IMG_DELETED: {
                        background: "#fdc6c6 url(data:image/gif;base64,R0lGODlhDwAPAIABAIcUFP///yH5BAEKAAEALAAAAAAPAA8AAAIajI8IybadHjxyhjox1I0zH1mU6JCXCSpmUAAAOw==)",
                        "border-color": "#E47070"
                    },
                    IMG_INSERT: {
                        background: "#ccffcc",
                        "border-color": "#00AA00"
                    }
                },
                EVENT: {
                    WizEditorPaste: "wizEditorPaste",
                    wizReaderClickImg: "wizReaderClickImg",
                    wizMarkdownRender: "wizMarkdownRender",
                    wizEditorTrackEvent: "wizEditorTrackEvent"
                },
                GLOBAL_EVENT: {
                    BEFORE_SAVESNAP: "BEFORE_SAVESNAP",
                    AFTER_RESTORE_HISTORY: "AFTER_RESTORE_HISTORY"
                },
                AMEND: {
                    INFO_SPACE: 0,
                    INFO_TIMER: 300
                }
            };
        n["default"] = o, t.exports = n["default"]
    }, {}],
    5: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function o(e, t, n) {
            u["default"].loadJs(e, t, n)
        }
        function i(e, t, n) {
            var r = 0,
                i = t.length,
                a = function u() {
                    i > r ? o(e, t[r++], u) : n && n()
                };
            return a
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./utils"),
            u = r(a),
            l = {
                loadJs: function (e, t, n) {
                    var r = i(e, t, n);
                    r()
                },
                loadCss: function (e, t) {
                    var n, r;
                    for (n = 0, r = t.length; r > n; n++) u["default"].loadSingleCss(e, t[n])
                }
            };
        n["default"] = l, t.exports = n["default"]
    }, {
        "./utils": 8
    }],
    6: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./const"),
            i = r(o),
            a = {}, u = "wiznotecmd://",
            l = {
                win: null,
                doc: null,
                dependency: {
                    files: {
                        css: {
                            github2: "",
                            wizToc: ""
                        },
                        js: {
                            jquery: "",
                            prettify: "",
                            raphael: "",
                            underscore: "",
                            flowchart: "",
                            sequence: "",
                            mathJax: "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"
                        },
                        init: function (e, t) {
                            function n(e, t, n) {
                                t && n && t[e] && (n[e] = t[e])
                            }
                            n("github2", e, l.dependency.files.css), n("wizToc", e, l.dependency.files.css), n("jquery", t, l.dependency.files.js), n("prettify", t, l.dependency.files.js), n("raphael", t, l.dependency.files.js), n("underscore", t, l.dependency.files.js), n("flowchart", t, l.dependency.files.js), n("sequence", t, l.dependency.files.js), n("mathJax", t, l.dependency.files.js)
                        }
                    },
                    css: {
                        markdown: ["github2", "wizToc"]
                    },
                    js: {
                        markdown: [
                            ["jquery"],
                            ["prettify", "raphael", "underscore"],
                            ["flowchart", "sequence"]
                        ],
                        mathJax: [
                            ["jquery"],
                            ["mathJax"]
                        ]
                    }
                },
                setDoc: function (e) {
                    e && (l.doc = e, l.win = l.doc.defaultView)
                },
                client: {
                    type: {
                        isWeb: function () {
                            return location && 0 === location.protocol.indexOf("http")
                        }(),
                        isWin: !1,
                        isMac: !1,
                        isIOS: !1,
                        isAndroid: !1,
                        isPad: !1,
                        isPhone: !1
                    },
                    sendCmdToWiznote: function () {},
                    setType: function (e) {
                        e && (e = e.toLowerCase(), e.indexOf("windows") > -1 ? l.client.type.isWin = !0 : e.indexOf("ios") > -1 ? (l.client.type.isIOS = !0, l.client.sendCmdToWiznote = function (e, t) {
                            var n;
                            n = e == i["default"].EVENT.wizReaderClickImg ? u + e + "?src=" + encodeURIComponent(t.src) : e == i["default"].EVENT.wizEditorTrackEvent ? u + e + "?id=" + encodeURIComponent(t.id) + "&e=" + encodeURIComponent(t.event) : u + e;
                            var r = document.createElement("iframe");
                            r.setAttribute("src", n), document.documentElement.appendChild(r), r.parentNode.removeChild(r), r = null
                        }) : e.indexOf("android") > -1 ? (l.client.type.isAndroid = !0, l.client.sendCmdToWiznote = function (e, t) {
                            e == i["default"].EVENT.wizReaderClickImg && window.WizNote.onClickImg(t.src, t.imgList)
                        }) : e.indexOf("mac") > -1 && (l.client.type.isMac = !0), (l.client.type.isIOS || l.client.type.isAndroid) && (e.indexOf("pad") > -1 ? l.client.type.isPad = !0 : l.client.type.isPhone = !0))
                    }
                },
                globalEvent: {
                    call: function (e) {
                        var t, n, r = [],
                            o = a[e];
                        if (o && 0 !== o.length) {
                            for (t = 1, n = arguments.length; n > t; t++) r.push(arguments[t]);
                            for (t = 0, n = o.length; n > t; t++) o[t].apply(this, r)
                        }
                    },
                    add: function (e, t) {
                        if (e && t && !l.globalEvent.checkFun(e, t)) {
                            var n = a[e];
                            n || (n = []), n.push(t), a[e] = n
                        }
                    },
                    checkFun: function (e, t) {
                        if (!e || !t) return !1;
                        var n, r, o = a[e];
                        if (!o || 0 === o.length) return !1;
                        for (n = 0, r = o.length; r > n; n++) if (o[n] === t) return !0;
                        return !1
                    },
                    remove: function (e, t) {
                        if (e && t) {
                            var n, r, o = a[e];
                            if (o && 0 !== o.length) for (n = 0, r = o.length; r > n; n++) o[n] === t && o.splice(n, 1)
                        }
                    }
                }
            };
        n["default"] = l, t.exports = n["default"]
    }, {
        "./const": 4
    }],
    7: [function (e, t, n) {
        "use strict";

        function r(e) {
            e || (e = "en"), e = e.toLowerCase(), o[e] ? i = e : e = "en";
            var t;
            for (t in o[e]) o[e].hasOwnProperty(t) && (a[t] = o[e][t])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = {}, i = "en",
            a = {};
        o.en = {
            Amend: {
                Edit: "Inserted contents",
                Delete: "Deleted contents",
                BtnAccept: "Accept",
                BtnRefuse: "Reject",
                Accept: "Accept all changes? Or partially select the changes which need to be accepted.",
                Refuse: "Reject all changes? Or partially select the changes which need to be rejected.",
                MultiInfo: "Multiple changes are selected",
                UserNameDefault: "someone"
            },
            Err: {
                Copy_Null: "Copy of deleted changes not allowed",
                Cut_Null: "Cut of deleted changes not allowed"
            }
        }, o["zh-cn"] = {
            Amend: {
                Edit: "插入了内容",
                Delete: "删除了内容",
                BtnAccept: "接受修订",
                BtnRefuse: "拒绝修订",
                Accept: "是否确认接受全部修订内容？ 如需接受部分内容请使用鼠标进行选择",
                Refuse: "是否确认拒绝全部修订内容？ 如需拒绝部分内容请使用鼠标进行选择",
                MultiInfo: "您选中了多处修订",
                UserNameDefault: "有人"
            },
            Err: {
                Copy_Null: "无法复制已删除的内容",
                Cut_Null: "无法剪切已删除的内容"
            }
        }, o["zh-tw"] = {
            Amend: {
                Edit: "插入了內容",
                Delete: "刪除了內容",
                BtnAccept: "接受修訂",
                BtnRefuse: "拒絕修訂",
                Accept: "是否確認接受全部修訂內容？ 如需接受部分內容請使用滑鼠進行選擇",
                Refuse: "是否確認拒絕全部修訂內容？ 如需拒絕部分內容請使用滑鼠進行選擇",
                MultiInfo: "您選中了多處修訂",
                UserNameDefault: "有人"
            },
            Err: {
                Copy_Null: "無法複製已刪除的內容",
                Cut_Null: "無法剪切已刪除的內容"
            }
        }, n["default"] = a;
        var u = function (e) {
            r(e)
        };
        n.initLang = u
    }, {}],
    8: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./const"),
            i = r(o);
        String.prototype.trim || (String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, "")
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
            for (var t = 0; t < this.length; t++) if (this[t] == e) return t;
            return -1
        });
        var a = {
            isArray: function (e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            isEmpty: function (e) {
                if (!e) return !0;
                var t = /\r?\n/gi,
                    n = new RegExp("[\r\n" + i["default"].FILL_CHAR + "]", "ig"),
                    r = t.test(e),
                    o = e.replace(n, ""),
                    a = 0 === e.replace(n, "").trim().length;
                return 0 === o.length || r && a
            },
            isSameAmendTime: function (e, t) {
                if (!e || !t) return !1;
                var n = a.getDateForTimeStr(e),
                    r = a.getDateForTimeStr(t);
                return Math.abs(n - r) <= i["default"].AMEND_BATCH_TIME_SPACE
            },
            getHash: function (e) {
                var t, n, r = 1315423911;
                for (t = e.length - 1; t >= 0; t--) n = e.charCodeAt(t), r ^= (r << 5) + n + (r >> 2);
                return 2147483647 & r
            },
            getTime: function () {
                function e(e) {
                    var t = e.toString();
                    return 1 == t.length ? "0" + t : t
                }
                var t = new Date;
                return t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " " + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds())
            },
            getDateForTimeStr: function (e) {
                return new Date(Date.parse(e.replace(/-/g, "/")))
            },
            listToMap: function (e) {
                if (!e) return {};
                e = a.isArray(e) ? e : e.split(",");
                var t, n, r, o = {};
                for (t = 0, n = e.length; n > t; t++) r = e[t], o[r.toUpperCase()] = o[r] = 1;
                return o
            },
            removeDup: function (e) {
                var t, n, r, o = [];
                for (t = 0, n = e.length; n > t; t++) r = e[t], o.indexOf(r) < 0 && o.push(r);
                return o
            },
            stopEvent: function (e) {
                e.stopPropagation(), e.preventDefault()
            },
            PcCustomTagClass: "wiz-html-render-unsave",
            loadCount: {},
            loadJs: function (e, t, n) {
                if (t) {
                    var r, o, i, a = (new Date).valueOf(),
                        u = !0;
                    for (r = 0, o = t.length; o > r; r++) i = this.loadSingleJs(e, t[r]), i !== !0 && (i.onload = this.makeLoadHandle(a, n), u = !1);
                    u && n()
                }
            },
            makeLoadHandle: function (e, t) {
                this.loadCount[e] || (this.loadCount[e] = 0), this.loadCount[e]++;
                var n = this;
                return function () {
                    n.loadCount[e]--, 0 === n.loadCount[e] && (n.loadCount[e] = null, t && t())
                }
            },
            loadSingleCss: function (e, t) {
                var n = "wiz_" + t;
                if (e.getElementById(n)) return !0;
                var r = e.createElement("link");
                return r.rel = "stylesheet", r.href = t.replace(/\\/g, "/"), e.getElementsByTagName("head")[0].insertBefore(r, null), r
            },
            loadSingleJs: function (e, t) {
                var n = "wiz_" + t;
                if (e.getElementById(n)) return !0;
                var r = e.createElement("script");
                return r.type = "text/javascript", r.src = t.replace(/\\/g, "/"), r.id = n, r.className = this.PcCustomTagClass, e.getElementsByTagName("head")[0].insertBefore(r, null), r
            },
            appendJsCode: function (e, t, n) {
                var r = e.createElement("script");
                r.type = n, r.text = t, r.className = this.PcCustomTagClass, e.getElementsByTagName("head")[0].appendChild(r)
            },
            appendCssCode: function (e, t, n) {
                var r = e.createElement("style");
                r.type = n, r.text = t, e.getElementsByTagName("head")[0].appendChild(r)
            },
            getInnerText: function (e) {
                var t = "",
                    n = function (e) {
                        return e ? e.replace(/ +/gm, " ").replace(/[\t]+/gm, "").replace(/[ ]+$/gm, "").replace(/^[ ]+/gm, "").replace(/\n+/gm, "\n").replace(/\n+$/, "").replace(/^\n+/, "").replace(/NEWLINE/gm, "\n") : ""
                    }, r = function (e) {
                        var t = function (e) {
                            return !/[^\t\n\r ]/.test(e.nodeValue)
                        }, n = [],
                            r = function i(e) {
                                for (var r = 0; r < e.childNodes.length; r++) {
                                    var o = e.childNodes[r];
                                    3 == o.nodeType && t(o) ? n.push(o) : o.hasChildNodes() && i(o)
                                }
                            };
                        r(e);
                        for (var o = 0; o < n.length; o++) n[o].parentNode.removeChild(n[o])
                    }, o = function (e, t) {
                        if (e.style[t]) return e.style[t];
                        var n = e.currentStyle || e.ownerDocument.defaultView.getComputedStyle(e, null);
                        return "SCRIPT" == e.tagName ? "none" : n[t] ? "block" == n[t] && "TD" == e.tagName ? "feaux-inline" : n[t] : "LI,P,TR".indexOf(e.tagName) > -1 ? "block" : e.style[t]
                    }, i = "table-row,block,list-item",
                    a = function (e) {
                        var t = o(e, "display") || "feaux-inline";
                        return i.indexOf(t) > -1
                    }, u = function d(e) {
                        if (/pre/.test(o(e, "whiteSpace"))) return t += e.innerHTML.replace(/\t/g, " "),
                            "";
                        var n = o(e, "display");
                        if ("none" == n) return "";
                        var r = a(e) ? "\n" : " ";
                        t += r;
                        for (var i = 0; i < e.childNodes.length; i++) {
                            var u = e.childNodes[i];
                            3 == u.nodeType && (t += u.nodeValue), u.childNodes.length && d(u)
                        }
                        return t += r
                    }, l = e.cloneNode(!0);
                return l.innerHTML = l.innerHTML.replace(/<br[\/]?>/gi, "NEWLINE"), r(l), n(u(l))
            },
            markdownPreProcess: function (e) {
                function t(e) {
                    return String(e).replace(/\&amp;/g, "&").replace(/\&gt;/g, ">").replace(/\&lt;/g, "<").replace(/\&quot;/g, '"').replace(/\&&#39;/g, "'")
                }
                var n = $(e);
                n.find("label.wiz-todo-label").each(function (e) {
                    var n = $("<span></span>");
                    n.text(t($(this)[0].outerHTML)), n.insertAfter($(this)), $(this).remove()
                }), n.find("img").each(function (e) {
                    var n = $("<span></span>");
                    n.text(t($(this)[0].outerHTML)), n.insertAfter($(this)), $(this).remove()
                }), n.find("a").each(function (e, n) {
                    var r = $(n),
                        o = r.attr("href");
                    if (o && 0 === o.indexOf("wiz:")) {
                        var i = $("<span></span>");
                        i.text(t(r[0].outerHTML)), i.insertAfter(r), r.remove()
                    }
                }), n.find("p").each(function () {
                    $(this).replaceWith($("<div>" + this.innerHTML + "</div>"))
                })
            }
        };
        n["default"] = a, t.exports = n["default"]
    }, {
        "./const": 4
    }],
    9: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function o(e, t, n) {
            n = !! n;
            var r = d["default"].doc.getElementById(e);
            r || n || (r = d["default"].doc.createElement("style"), r.id = e, d["default"].doc.getElementsByTagName("HEAD")[0].insertBefore(r, null)), r && (r.innerHTML = t)
        }
        function i(e, t) {
            var n = d["default"].doc.createElement("style");
            n.name = e, d["default"].doc.getElementsByTagName("HEAD")[0].insertBefore(n, null), n.innerHTML = t
        }
        function a(e) {
            var t, n, r = d["default"].doc.getElementsByName(e);
            for (t = r.length - 1; t >= 0; t--) n = r[t], n.parentNode.removeChild(n)
        }
        function u(e, t) {
            var n = new RegExp("<style[^<>]*[ ]+name *= *['\"]" + t + "['\"][^<>]*>[^<>]*</style>", "ig");
            return e.replace(n, "")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = e("./env"),
            d = r(l),
            s = "wiz_tmp_editor_style",
            f = {
                phone: "body {overflow-y:scroll;-webkit-overflow-scrolling: touch;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}",
                pad: "body {min-width: 90%;max-width: 100%;min-height: 100%;background: #ffffff;overflow-y:scroll;-webkit-overflow-scrolling: touch;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}"
            }, c = {
                phone: "img {max-width: 100%;height: auto !important;margin: 0px auto;}a {word-wrap: break-word;}body {word-wrap: break-word;}"
            }, p = "wiz_custom_css",
            g = 'Helvetica, "Hiragino Sans GB", "Microsoft Yahei", SimSun, SimHei, arial, sans-serif;',
            m = {
                common: "html, body {font-size: 15px;}body {font-family: " + g + "line-height: 1.6;padding: 0;margin: 20px 36px;margin: 1.33rem 2.4rem;}h1, h2, h3, h4, h5, h6 {margin:20px 0 10px;margin:1.33rem 0 0.667rem;padding: 0;font-weight: bold;}h1 {font-size:21px;font-size:1.4rem;}h2 {font-size:20px;font-size:1.33rem;}h3 {font-size:18px;font-size:1.2rem;}h4 {font-size:17px;font-size:1.13rem;}h5 {font-size:15px;font-size:1rem;}h6 {font-size:15px;font-size:1rem;color: #777777;margin: 1rem 0;}div, p, blockquote, ul, ol, dl, table, pre {margin:10px 0;margin:0.667rem 0;}ul, ol {padding-left:32px;padding-left:2.13rem;}blockquote {border-left:4px solid #dddddd;padding:0 12px;padding:0 0.8rem;color: #aaa;}blockquote > :first-child {margin-top:0;}blockquote > :last-child {margin-bottom:0;}img {border:0;max-width:100%;height:auto !important;}table {border-collapse:collapse;border:1px solid #bbbbbb;}td {border-collapse:collapse;border:1px solid #bbbbbb;}@media screen and (max-width: 660px) {body {margin:20px 18px;margin:1.33rem 1.2rem;}}@media only screen and (-webkit-max-device-width: 1024px), only screen and (-o-max-device-width: 1024px), only screen and (max-device-width: 1024px), only screen and (-webkit-min-device-pixel-ratio: 3), only screen and (-o-min-device-pixel-ratio: 3), only screen and (min-device-pixel-ratio: 3) {html,body {font-size:17px;}body {line-height:1.7;margin:12px 15px;margin:0.75rem 0.9375rem;color:#353c47;}h1 {font-size:34px;font-size:2.125rem;}h2 {font-size:30px;font-size:1.875rem;}h3 {font-size:26px;font-size:1.625rem;}h4 {font-size:22px;font-size:1.375rem;}h5 {font-size:18px;font-size:1.125rem;}h6 {color: inherit;}div, p, blockquote, ul, ol, dl, table, pre {margin:0;}ul, ol {padding-left:40px;padding-left:2.5rem;}blockquote {border-left:4px solid #c8d4e8;padding:0 15px;padding:0 0.9375rem;color: #b3c2dd;}}"
            }, h = {
                insertDefaultStyle: function (e, t) {
                    if (o(p, m.common, e), t) {
                        var n, r, a = !1;
                        if ("string" == typeof t) n = t, a = !0;
                        else {
                            n = "html, body{";
                            for (r in t) t.hasOwnProperty(r) && (n += "font-family" == r.toLowerCase() ? r + ":" + t[r] + "," + g + ";" : r + ":" + t[r] + ";", a = !0);
                            n += "}"
                        }
                        a && i(s, n)
                    }
                },
                insertTmpEditorStyle: function () {
                    d["default"].client.type.isIOS && d["default"].client.type.isPhone ? i(s, f.phone) : d["default"].client.type.isIOS && d["default"].client.type.isPad && i(s, f.pad)
                },
                insertTmpReaderStyle: function () {
                    d["default"].client.type.isIOS && i(s, c.phone)
                },
                removeTmpStyle: function () {
                    a(s)
                },
                removeTmpStyleFromHtml: function (e) {
                    return u(e, s)
                }
            };
        n["default"] = h, t.exports = n["default"]
    }, {
        "./env": 6
    }],
    10: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../common/env"),
            i = r(o),
            a = {
                ClickAcceptFromAmendInfo: "ClickAcceptFromAmendInfo",
                ClickRefuseFromAmendInfo: "ClickRefuseFromAmendInfo"
            }, u = {
                save: function (e) {
                    if (i["default"].client.type.isWin) try {
                        external && external.LogAction && external.LogAction(e)
                    } catch (t) {
                        console.log(t.toString())
                    }
                }
            }, l = {
                ActionId: a,
                save: u.save
            };
        n["default"] = l, t.exports = n["default"]
    }, {
        "../common/env": 6
    }],
    11: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r;
        ! function o(e, t, n) {
            function r(a, u) {
                if (!t[a]) {
                    if (!e[a]) {
                        var l = "function" == typeof _require && _require;
                        if (!u && l) return l(a, !0);
                        if (i) return i(a, !0);
                        var d = new Error("Cannot find module '" + a + "'");
                        throw d.code = "MODULE_NOT_FOUND", d
                    }
                    var s = t[a] = {
                        exports: {}
                    };
                    e[a][0].call(s.exports, function (t) {
                        var n = e[a][1][t];
                        return r(n ? n : t)
                    }, s, s.exports, o, e, t, n)
                }
                return t[a].exports
            }
            for (var i = "function" == typeof _require && _require, a = 0; a < n.length; a++) r(n[a]);
            return r
        }({
            1: [function (e, t, n) {
                function r(e, t, n) {}
                function o(e, t, n) {}
                function i(e, t, n) {}
                function a(e, t, n) {}
                function u(e) {
                    return e.replace(N, "&lt;").replace(S, "&gt;")
                }
                function l(e, t, n, r) {
                    if (r = r || E, n = g(n), "href" === t || "src" === t) {
                        if (n = x.trim(n), "#" === n) return "#";
                        if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "/" !== n[0]) return ""
                    } else if ("background" === t) {
                        if (k.lastIndex = 0, k.test(n)) return ""
                    } else if ("style" === t) {
                        if (O.lastIndex = 0, O.test(n)) return "";
                        if (P.lastIndex = 0, P.test(n) && (k.lastIndex = 0, k.test(n))) return "";
                        n = r.process(n)
                    }
                    return n = m(n)
                }
                function d(e) {
                    return e.replace(w, "&quot;")
                }
                function s(e) {
                    return e.replace(_, '"')
                }
                function f(e) {
                    return e.replace(C, function (e, t) {
                        return String.fromCharCode("x" === t[0] || "X" === t[0] ? parseInt(t.substr(1), 16) : parseInt(t, 10))
                    })
                }
                function c(e) {
                    return e.replace(I, ":").replace(D, " ")
                }
                function p(e) {
                    for (var t = "", n = 0, r = e.length; r > n; n++) t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
                    return x.trim(t)
                }
                function g(e) {
                    return e = s(e), e = f(e), e = c(e), e = p(e)
                }
                function m(e) {
                    return e = d(e), e = u(e)
                }
                function h() {
                    return ""
                }
                function b(e, t) {
                    function n(t) {
                        return r ? !0 : -1 !== x.indexOf(e, t)
                    }
                    "function" != typeof t && (t = function () {});
                    var r = !Array.isArray(e),
                        o = [],
                        i = !1;
                    return {
                        onIgnoreTag: function (e, r, a) {
                            if (n(e)) {
                                if (a.isClosing) {
                                    var u = "[/removed]",
                                        l = a.position + u.length;
                                    return o.push([i !== !1 ? i : a.position, l]), i = !1, u
                                }
                                return i || (i = a.position), "[removed]"
                            }
                            return t(e, r, a)
                        },
                        remove: function (e) {
                            var t = "",
                                n = 0;
                            return x.forEach(o, function (r) {
                                t += e.slice(n, r[0]), n = r[1]
                            }), t += e.slice(n)
                        }
                    }
                }
                function v(e) {
                    return e.replace(R, "")
                }
                function y(e) {
                    var t = e.split("");
                    return t = t.filter(function (e) {
                        var t = e.charCodeAt(0);
                        return 127 === t ? !1 : 31 >= t ? 10 === t || 13 === t ? !0 : !1 : !0
                    }), t.join("")
                }
                var A = e("cssfilter").FilterCSS,
                    x = e("./util"),
                    T = {
                        a: ["target", "href", "title"],
                        abbr: ["title"],
                        address: [],
                        area: ["shape", "coords", "href", "alt"],
                        article: [],
                        aside: [],
                        audio: ["autoplay", "controls", "loop", "preload", "src"],
                        b: [],
                        bdi: ["dir"],
                        bdo: ["dir"],
                        big: [],
                        blockquote: ["cite"],
                        br: [],
                        caption: [],
                        center: [],
                        cite: [],
                        code: [],
                        col: ["align", "valign", "span", "width"],
                        colgroup: ["align", "valign", "span", "width"],
                        dd: [],
                        del: ["datetime"],
                        details: ["open"],
                        div: [],
                        dl: [],
                        dt: [],
                        em: [],
                        font: ["color", "size", "face"],
                        footer: [],
                        h1: [],
                        h2: [],
                        h3: [],
                        h4: [],
                        h5: [],
                        h6: [],
                        header: [],
                        hr: [],
                        i: [],
                        img: ["src", "alt", "title", "width", "height"],
                        ins: ["datetime"],
                        li: [],
                        mark: [],
                        nav: [],
                        ol: [],
                        p: [],
                        pre: [],
                        s: [],
                        section: [],
                        small: [],
                        span: [],
                        sub: [],
                        sup: [],
                        strong: [],
                        table: ["width", "border", "align", "valign"],
                        tbody: ["align", "valign"],
                        td: ["width", "colspan", "align", "valign", "rowspan"],
                        tfoot: ["align", "valign"],
                        th: ["width", "colspan", "align", "valign", "rowspan"],
                        thead: ["align", "valign"],
                        tr: ["rowspan", "align", "valign"],
                        tt: [],
                        u: [],
                        ul: [],
                        video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
                    }, E = new A,
                    N = /</g,
                    S = />/g,
                    w = /"/g,
                    _ = /&quot;/g,
                    C = /&#([a-zA-Z0-9]*);?/gim,
                    I = /&colon;?/gim,
                    D = /&newline;?/gim,
                    k = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
                    O = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
                    P = /u\s*r\s*l\s*\(.*/gi,
                    R = /<!--[\s\S]*?-->/g;
                n.whiteList = T, n.onTag = r, n.onIgnoreTag = o, n.onTagAttr = i, n.onIgnoreTagAttr = a, n.safeAttrValue = l, n.escapeHtml = u, n.escapeQuote = d, n.unescapeQuote = s, n.escapeHtmlEntities = f, n.escapeDangerHtml5Entities = c, n.clearNonPrintableCharacter = p, n.friendlyAttrValue = g, n.escapeAttrValue = m, n.onIgnoreTagStripAll = h, n.StripTagBody = b, n.stripCommentTag = v, n.stripBlankChar = y, n.cssFilter = E
            }, {
                "./util": 4,
                cssfilter: 8
            }],
            2: [function (e, t, n) {
                var o = e("./default"),
                    i = e("./parser"),
                    a = e("./xss");
                r = function (e, t) {
                    var n = new a(t);
                    return n.process(e)
                }, n = t.exports = r, n.FilterXSS = a;
                for (var u in o) n[u] = o[u];
                for (var u in i) n[u] = i[u];
                "function" == typeof define && define.amd && define(function () {
                    return t.exports
                }), "undefined" != typeof window && (window.filterXSS = t.exports)
            }, {
                "./default": 1,
                "./parser": 3,
                "./xss": 5
            }],
            3: [function (e, t, n) {
                function r(e) {
                    var t = e.indexOf(" ");
                    if (-1 === t) var n = e.slice(1, -1);
                    else var n = e.slice(1, t + 1);
                    return n = f.trim(n).toLowerCase(), "/" === n.slice(0, 1) && (n = n.slice(1)), "/" === n.slice(-1) && (n = n.slice(0, -1)), n
                }
                function o(e) {
                    return "</" === e.slice(0, 2)
                }
                function i(e, t, n) {
                    "user strict";
                    var i = "",
                        a = 0,
                        u = !1,
                        l = !1,
                        d = 0,
                        s = e.length,
                        f = "",
                        c = "";
                    for (d = 0; s > d; d++) {
                        var p = e.charAt(d);
                        if (u === !1) {
                            if ("<" === p) {
                                u = d;
                                continue
                            }
                        } else if (l === !1) {
                            if ("<" === p) {
                                i += n(e.slice(a, d)), u = d, a = d;
                                continue
                            }
                            if (">" === p) {
                                i += n(e.slice(a, u)), f = e.slice(u, d + 1), c = r(f), i += t(u, i.length, c, f, o(f)), a = d + 1, u = !1;
                                continue
                            }
                            if (('"' === p || "'" === p) && "=" === e.charAt(d - 1)) {
                                l = p;
                                continue
                            }
                        } else if (p === l) {
                            l = !1;
                            continue
                        }
                    }
                    return a < e.length && (i += n(e.substr(a))), i
                }
                function a(e, t) {
                    "user strict";

                    function n(e, n) {
                        if (e = f.trim(e), e = e.replace(c, "").toLowerCase(), !(e.length < 1)) {
                            var r = t(e, n || "");
                            r && o.push(r)
                        }
                    }
                    for (var r = 0, o = [], i = !1, a = e.length, d = 0; a > d; d++) {
                        var p, g, m = e.charAt(d);
                        if (i !== !1 || "=" !== m) if (i === !1 || d !== r || '"' !== m && "'" !== m || "=" !== e.charAt(d - 1)) if (" " !== m);
                        else {
                            if (i === !1) {
                                if (g = u(e, d), -1 === g) {
                                    p = f.trim(e.slice(r, d)), n(p), i = !1, r = d + 1;
                                    continue
                                }
                                d = g - 1;
                                continue
                            }
                            if (g = l(e, d - 1), -1 === g) {
                                p = f.trim(e.slice(r, d)), p = s(p), n(i, p), i = !1, r = d + 1;
                                continue
                            }
                        } else {
                            if (g = e.indexOf(m, d + 1), -1 === g) break;
                            p = f.trim(e.slice(r + 1, g)), n(i, p), i = !1, d = g, r = d + 1
                        } else i = e.slice(r, d), r = d + 1
                    }
                    return r < e.length && (i === !1 ? n(e.slice(r)) : n(i, s(f.trim(e.slice(r))))), f.trim(o.join(" "))
                }
                function u(e, t) {
                    for (; t < e.length; t++) {
                        var n = e[t];
                        if (" " !== n) return "=" === n ? t : -1
                    }
                }
                function l(e, t) {
                    for (; t > 0; t--) {
                        var n = e[t];
                        if (" " !== n) return "=" === n ? t : -1
                    }
                }
                function d(e) {
                    return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1] ? !0 : !1
                }
                function s(e) {
                    return d(e) ? e.substr(1, e.length - 2) : e
                }
                var f = e("./util"),
                    c = /[^a-zA-Z0-9_:\.\-]/gim;
                n.parseTag = i, n.parseAttr = a
            }, {
                "./util": 4
            }],
            4: [function (e, t, n) {
                t.exports = {
                    indexOf: function (e, t) {
                        var n, r;
                        if (Array.prototype.indexOf) return e.indexOf(t);
                        for (n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
                        return -1
                    },
                    forEach: function (e, t, n) {
                        var r, o;
                        if (Array.prototype.forEach) return e.forEach(t, n);
                        for (r = 0, o = e.length; o > r; r++) t.call(n, e[r], r, e)
                    },
                    trim: function (e) {
                        return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
                    }
                }
            }, {}],
            5: [function (e, t, n) {
                function r(e) {
                    return void 0 === e || null === e
                }
                function o(e) {
                    var t = e.indexOf(" ");
                    if (-1 === t) return {
                        html: "",
                        closing: "/" === e[e.length - 2]
                    };
                    e = f.trim(e.slice(t + 1, -1));
                    var n = "/" === e[e.length - 1];
                    return n && (e = f.trim(e.slice(0, -1))), {
                        html: e,
                        closing: n
                    }
                }
                function i(e) {
                    e = e || {}, e.stripIgnoreTag && (e.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), e.onIgnoreTag = u.onIgnoreTagStripAll), e.whiteList = e.whiteList || u.whiteList, e.onTag = e.onTag || u.onTag, e.onTagAttr = e.onTagAttr || u.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || u.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || u.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || u.safeAttrValue, e.escapeHtml = e.escapeHtml || u.escapeHtml, e.css = e.css || {}, this.options = e, this.cssFilter = new a(e.css)
                }
                var a = e("cssfilter").FilterCSS,
                    u = e("./default"),
                    l = e("./parser"),
                    d = l.parseTag,
                    s = l.parseAttr,
                    f = e("./util");
                i.prototype.process = function (e) {
                    if (e = e || "", e = e.toString(), !e) return "";
                    var t = this,
                        n = t.options,
                        i = n.whiteList,
                        a = n.onTag,
                        l = n.onIgnoreTag,
                        c = n.onTagAttr,
                        p = n.onIgnoreTagAttr,
                        g = n.safeAttrValue,
                        m = n.escapeHtml,
                        h = t.cssFilter;
                    if (n.stripBlankChar && (e = u.stripBlankChar(e)), n.allowCommentTag || (e = u.stripCommentTag(e)), n.stripIgnoreTagBody) {
                        var b = u.StripTagBody(n.stripIgnoreTagBody, l);
                        l = b.onIgnoreTag
                    } else b = !1;
                    var v = d(e, function (e, t, n, u, d) {
                        var b = {
                            sourcePosition: e,
                            position: t,
                            isClosing: d,
                            isWhite: n in i
                        }, v = a(n, u, b);
                        if (!r(v)) return v;
                        if (b.isWhite) {
                            if (b.isClosing) return "</" + n + ">";
                            var y = o(u),
                                A = i[n],
                                x = s(y.html, function (e, t) {
                                    var o = -1 !== f.indexOf(A, e),
                                        i = c(n, e, t, o);
                                    if (!r(i)) return i;
                                    if (o) return t = g(n, e, t, h), t ? e + '="' + t + '"' : e;
                                    var i = p(n, e, t, o);
                                    return r(i) ? void 0 : i
                                }),
                                u = "<" + n;
                            return x && (u += " " + x), y.closing && (u += " /"), u += ">"
                        }
                        var v = l(n, u, b);
                        return r(v) ? m(u) : v
                    }, m);
                    return b && (v = b.remove(v)), v
                }, t.exports = i
            }, {
                "./default": 1,
                "./parser": 3,
                "./util": 4,
                cssfilter: 8
            }],
            6: [function (e, t, n) {
                function r(e) {
                    return void 0 === e || null === e
                }
                function o(e) {
                    e = e || {}, e.whiteList = e.whiteList || i.whiteList, e.onAttr = e.onAttr || i.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || i.onIgnoreAttr, this.options = e
                } {
                    var i = e("./default"),
                        a = e("./parser");
                    e("./util")
                }
                o.prototype.process = function (e) {
                    if (e = e || "", e = e.toString(), !e) return "";
                    var t = this,
                        n = t.options,
                        o = n.whiteList,
                        i = n.onAttr,
                        u = n.onIgnoreAttr,
                        l = a(e, function (e, t, n, a, l) {
                            var d = o[n],
                                s = !1;
                            d === !0 ? s = d : "function" == typeof d ? s = d(a) : d instanceof RegExp && (s = d.test(a)), s !== !0 && (s = !1);
                            var f = {
                                position: t,
                                sourcePosition: e,
                                source: l,
                                isWhite: s
                            };
                            if (s) {
                                var c = i(n, a, f);
                                return r(c) ? n + ":" + a : c
                            }
                            var c = u(n, a, f);
                            return r(c) ? void 0 : c
                        });
                    return l
                }, t.exports = o
            }, {
                "./default": 7,
                "./parser": 9,
                "./util": 10
            }],
            7: [function (e, t, n) {
                function r(e, t, n) {}
                function o(e, t, n) {}
                var i = {};
                i["align-content"] = !1, i["align-items"] = !1, i["align-self"] = !1, i["alignment-adjust"] = !1, i["alignment-baseline"] = !1, i.all = !1, i["anchor-point"] = !1, i.animation = !1, i["animation-delay"] = !1, i["animation-direction"] = !1, i["animation-duration"] = !1, i["animation-fill-mode"] = !1, i["animation-iteration-count"] = !1, i["animation-name"] = !1, i["animation-play-state"] = !1, i["animation-timing-function"] = !1, i.azimuth = !1, i["backface-visibility"] = !1, i.background = !0, i["background-attachment"] = !0, i["background-clip"] = !0, i["background-color"] = !0, i["background-image"] = !0, i["background-origin"] = !0, i["background-position"] = !0, i["background-repeat"] = !0, i["background-size"] = !0, i["baseline-shift"] = !1, i.binding = !1, i.bleed = !1, i["bookmark-label"] = !1, i["bookmark-level"] = !1, i["bookmark-state"] = !1, i.border = !0, i["border-bottom"] = !0, i["border-bottom-color"] = !0, i["border-bottom-left-radius"] = !0, i["border-bottom-right-radius"] = !0, i["border-bottom-style"] = !0, i["border-bottom-width"] = !0, i["border-collapse"] = !0, i["border-color"] = !0, i["border-image"] = !0, i["border-image-outset"] = !0, i["border-image-repeat"] = !0, i["border-image-slice"] = !0, i["border-image-source"] = !0, i["border-image-width"] = !0, i["border-left"] = !0, i["border-left-color"] = !0, i["border-left-style"] = !0, i["border-left-width"] = !0, i["border-radius"] = !0, i["border-right"] = !0, i["border-right-color"] = !0, i["border-right-style"] = !0, i["border-right-width"] = !0, i["border-spacing"] = !0, i["border-style"] = !0, i["border-top"] = !0, i["border-top-color"] = !0, i["border-top-left-radius"] = !0, i["border-top-right-radius"] = !0, i["border-top-style"] = !0, i["border-top-width"] = !0, i["border-width"] = !0, i.bottom = !1, i["box-decoration-break"] = !0, i["box-shadow"] = !0, i["box-sizing"] = !0, i["box-snap"] = !0, i["box-suppress"] = !0, i["break-after"] = !0, i["break-before"] = !0, i["break-inside"] = !0, i["caption-side"] = !1, i.chains = !1, i.clear = !0, i.clip = !1, i["clip-path"] = !1, i["clip-rule"] = !1, i.color = !0, i["color-interpolation-filters"] = !0, i["column-count"] = !1, i["column-fill"] = !1, i["column-gap"] = !1, i["column-rule"] = !1, i["column-rule-color"] = !1, i["column-rule-style"] = !1, i["column-rule-width"] = !1, i["column-span"] = !1, i["column-width"] = !1, i.columns = !1, i.contain = !1, i.content = !1, i["counter-increment"] = !1, i["counter-reset"] = !1, i["counter-set"] = !1, i.crop = !1, i.cue = !1, i["cue-after"] = !1, i["cue-before"] = !1, i.cursor = !1, i.direction = !1, i.display = !0, i["display-inside"] = !0, i["display-list"] = !0, i["display-outside"] = !0, i["dominant-baseline"] = !1, i.elevation = !1, i["empty-cells"] = !1, i.filter = !1, i.flex = !1, i["flex-basis"] = !1, i["flex-direction"] = !1, i["flex-flow"] = !1, i["flex-grow"] = !1, i["flex-shrink"] = !1, i["flex-wrap"] = !1, i["float"] = !1, i["float-offset"] = !1, i["flood-color"] = !1, i["flood-opacity"] = !1, i["flow-from"] = !1, i["flow-into"] = !1, i.font = !0, i["font-family"] = !0, i["font-feature-settings"] = !0, i["font-kerning"] = !0, i["font-language-override"] = !0, i["font-size"] = !0, i["font-size-adjust"] = !0, i["font-stretch"] = !0, i["font-style"] = !0, i["font-synthesis"] = !0, i["font-variant"] = !0, i["font-variant-alternates"] = !0, i["font-variant-caps"] = !0, i["font-variant-east-asian"] = !0, i["font-variant-ligatures"] = !0, i["font-variant-numeric"] = !0, i["font-variant-position"] = !0, i["font-weight"] = !0, i.grid = !1, i["grid-area"] = !1, i["grid-auto-columns"] = !1, i["grid-auto-flow"] = !1, i["grid-auto-rows"] = !1, i["grid-column"] = !1, i["grid-column-end"] = !1, i["grid-column-start"] = !1, i["grid-row"] = !1, i["grid-row-end"] = !1, i["grid-row-start"] = !1, i["grid-template"] = !1, i["grid-template-areas"] = !1, i["grid-template-columns"] = !1, i["grid-template-rows"] = !1, i["hanging-punctuation"] = !1, i.height = !0, i.hyphens = !1, i.icon = !1, i["image-orientation"] = !1, i["image-resolution"] = !1, i["ime-mode"] = !1, i["initial-letters"] = !1, i["inline-box-align"] = !1, i["justify-content"] = !1, i["justify-items"] = !1, i["justify-self"] = !1, i.left = !1, i["letter-spacing"] = !0, i["lighting-color"] = !0, i["line-box-contain"] = !1, i["line-break"] = !1, i["line-grid"] = !1, i["line-height"] = !1, i["line-snap"] = !1, i["line-stacking"] = !1, i["line-stacking-ruby"] = !1, i["line-stacking-shift"] = !1, i["line-stacking-strategy"] = !1, i["list-style"] = !0, i["list-style-image"] = !0, i["list-style-position"] = !0, i["list-style-type"] = !0, i.margin = !0, i["margin-bottom"] = !0, i["margin-left"] = !0, i["margin-right"] = !0, i["margin-top"] = !0, i["marker-offset"] = !1, i["marker-side"] = !1, i.marks = !1, i.mask = !1, i["mask-box"] = !1, i["mask-box-outset"] = !1, i["mask-box-repeat"] = !1, i["mask-box-slice"] = !1, i["mask-box-source"] = !1, i["mask-box-width"] = !1, i["mask-clip"] = !1, i["mask-image"] = !1, i["mask-origin"] = !1, i["mask-position"] = !1, i["mask-repeat"] = !1, i["mask-size"] = !1, i["mask-source-type"] = !1, i["mask-type"] = !1, i["max-height"] = !0, i["max-lines"] = !1, i["max-width"] = !0, i["min-height"] = !0, i["min-width"] = !0, i["move-to"] = !1, i["nav-down"] = !1, i["nav-index"] = !1, i["nav-left"] = !1, i["nav-right"] = !1, i["nav-up"] = !1, i["object-fit"] = !1, i["object-position"] = !1, i.opacity = !1, i.order = !1, i.orphans = !1, i.outline = !1, i["outline-color"] = !1, i["outline-offset"] = !1, i["outline-style"] = !1, i["outline-width"] = !1, i.overflow = !1, i["overflow-wrap"] = !1, i["overflow-x"] = !1, i["overflow-y"] = !1, i.padding = !0, i["padding-bottom"] = !0, i["padding-left"] = !0, i["padding-right"] = !0, i["padding-top"] = !0, i.page = !1, i["page-break-after"] = !1, i["page-break-before"] = !1, i["page-break-inside"] = !1, i["page-policy"] = !1, i.pause = !1, i["pause-after"] = !1, i["pause-before"] = !1, i.perspective = !1, i["perspective-origin"] = !1, i.pitch = !1, i["pitch-range"] = !1, i["play-during"] = !1, i.position = !1, i["presentation-level"] = !1, i.quotes = !1, i["region-fragment"] = !1, i.resize = !1, i.rest = !1, i["rest-after"] = !1, i["rest-before"] = !1, i.richness = !1, i.right = !1, i.rotation = !1, i["rotation-point"] = !1, i["ruby-align"] = !1, i["ruby-merge"] = !1, i["ruby-position"] = !1, i["shape-image-threshold"] = !1, i["shape-outside"] = !1, i["shape-margin"] = !1, i.size = !1, i.speak = !1, i["speak-as"] = !1, i["speak-header"] = !1, i["speak-numeral"] = !1, i["speak-punctuation"] = !1, i["speech-rate"] = !1, i.stress = !1, i["string-set"] = !1, i["tab-size"] = !1, i["table-layout"] = !1, i["text-align"] = !0, i["text-align-last"] = !0, i["text-combine-upright"] = !0, i["text-decoration"] = !0, i["text-decoration-color"] = !0, i["text-decoration-line"] = !0, i["text-decoration-skip"] = !0, i["text-decoration-style"] = !0, i["text-emphasis"] = !0, i["text-emphasis-color"] = !0, i["text-emphasis-position"] = !0, i["text-emphasis-style"] = !0, i["text-height"] = !0, i["text-indent"] = !0, i["text-justify"] = !0, i["text-orientation"] = !0, i["text-overflow"] = !0, i["text-shadow"] = !0, i["text-space-collapse"] = !0, i["text-transform"] = !0, i["text-underline-position"] = !0, i["text-wrap"] = !0, i.top = !1, i.transform = !1, i["transform-origin"] = !1, i["transform-style"] = !1, i.transition = !1, i["transition-delay"] = !1, i["transition-duration"] = !1, i["transition-property"] = !1, i["transition-timing-function"] = !1, i["unicode-bidi"] = !1, i["vertical-align"] = !1, i.visibility = !1, i["voice-balance"] = !1, i["voice-duration"] = !1, i["voice-family"] = !1, i["voice-pitch"] = !1, i["voice-range"] = !1, i["voice-rate"] = !1, i["voice-stress"] = !1, i["voice-volume"] = !1, i.volume = !1, i["white-space"] = !1, i.widows = !1, i.width = !0, i["will-change"] = !1, i["word-break"] = !0, i["word-spacing"] = !0, i["word-wrap"] = !0, i["wrap-flow"] = !1, i["wrap-through"] = !1, i["writing-mode"] = !1, i["z-index"] = !1, n.whiteList = i, n.onAttr = r, n.onIgnoreAttr = o
            }, {}],
            8: [function (e, t, n) {
                function r(e, t) {
                    var n = new i(t);
                    return n.process(e)
                }
                var o = e("./default"),
                    i = e("./css");
                n = t.exports = r, n.FilterCSS = i;
                for (var a in o) n[a] = o[a];
                "function" == typeof define && define.amd && define(function () {
                    return t.exports
                }), "undefined" != typeof window && (window.filterCSS = t.exports)
            }, {
                "./css": 6,
                "./default": 7
            }],
            9: [function (e, t, n) {
                function r(e, t) {
                    function n() {
                        if (!i) {
                            var n = o.trim(e.slice(a, u)),
                                r = n.indexOf(":");
                            if (-1 !== r) {
                                var d = o.trim(n.slice(0, r)),
                                    s = o.trim(n.slice(r + 1));
                                if (d) {
                                    var f = t(a, l.length, d, s, n);
                                    f && (l += f + "; ")
                                }
                            }
                        }
                        a = u + 1
                    }
                    e = o.trimRight(e), ";" !== e[e.length - 1] && (e += ";");
                    for (var r = e.length, i = !1, a = 0, u = 0, l = ""; r > u; u++) {
                        var d = e[u];
                        if ("/" === d && "*" === e[u + 1]) {
                            var s = e.indexOf("*/", u + 2);
                            if (-1 === s) break;
                            u = s + 1, a = u + 1, i = !1
                        } else "(" === d ? i = !0 : ")" === d ? i = !1 : ";" === d ? i || n() : "\n" === d && n()
                    }
                    return o.trim(l)
                }
                var o = e("./util");
                t.exports = r
            }, {
                "./util": 10
            }],
            10: [function (e, t, n) {
                t.exports = {
                    indexOf: function (e, t) {
                        var n, r;
                        if (Array.prototype.indexOf) return e.indexOf(t);
                        for (n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
                        return -1
                    },
                    forEach: function (e, t, n) {
                        var r, o;
                        if (Array.prototype.forEach) return e.forEach(t, n);
                        for (r = 0, o = e.length; o > r; r++) t.call(n, e[r], r, e)
                    },
                    trim: function (e) {
                        return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
                    },
                    trimRight: function (e) {
                        return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
                    }
                }
            }, {}]
        }, {}, [2]), n["default"] = r, t.exports = n["default"]
    }, {}],
    12: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./../common/env"),
            i = r(o),
            a = e("./../common/const"),
            u = r(a),
            l = e("./../common/utils"),
            d = r(l),
            s = {
                appendStyle: function (e, t) {
                    if (e) {
                        var n, r, o, i = e.split(";");
                        for (n = 0, r = i.length; r > n; n++) i[n].indexOf(":") > 0 && (o = i[n].split(":"), t[o[0].trim()] = o[1].trim())
                    }
                },
                clearStyle: function (e, t) {
                    for (var n; e.getAttribute(u["default"].ATTR.SPAN) === u["default"].ATTR.SPAN && (e.style[t] = "", n = e.parentNode, n.getAttribute(u["default"].ATTR.SPAN) === u["default"].ATTR.SPAN);) if (e.previousSibling || e.nextSibling) if (e.previousSibling) if (e.nextSibling) {
                        var r, o = s.createSpan();
                        for (o.setAttribute("style", n.getAttribute("style")); e.nextSibling;) r = e.nextSibling, o.insertBefore(r), s.mergeAtoB(n, r, !1);
                        s.insert(n, e, !0), s.insert(e, o, !0), s.mergeAtoB(n, e, !1), s.mergeAtoB(n, o, !1)
                    } else s.insert(n, e, !0), s.mergeAtoB(n, e, !1), e.style[t] = "";
                    else s.insert(n, e, !1), s.mergeAtoB(n, e, !1), e.style[t] = "";
                    else e = n
                },
                compareIndexList: function (e, t) {
                    var n, r, o, i = Math.min(e.length, t.length);
                    for (n = 0; i > n; n++) {
                        if (r = e[n], o = t[n], o > r) return -1;
                        if (r > o) return 1
                    }
                    return e.length < t.length ? -1 : e.length > t.length ? 1 : 0
                },
                contains: function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                },
                createSpan: function () {
                    var e = i["default"].doc.createElement("span");
                    return e.setAttribute(u["default"].ATTR.SPAN, u["default"].ATTR.SPAN), e
                },
                css: function (e, t, n) {
                    if (e && t) {
                        n = !! n;
                        var r, o;
                        for (r in t) t.hasOwnProperty(r) && "string" == typeof r && (o = t[r], n && !o ? s.clearStyle(e, r) : o.indexOf("!important") > 0 ? (s.clearStyle(e, r), e.style.cssText += r + ":" + o) : e.style[r] = o)
                    }
                },
                getDomByIndexList: function (e) {
                    if (!e || 0 === e.length) return null;
                    var t, n, r, o;
                    r = i["default"].doc.body;
                    try {
                        for (t = 0, n = e.length - 1; n > t; t++) r = r.childNodes[e[t]];
                        return o = e[t], {
                            dom: r,
                            offset: o
                        }
                    } catch (a) {
                        return null
                    }
                },
                getDomEndOffset: function (e) {
                    return e ? 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length : 0
                },
                getDomIndex: function (e) {
                    if (!e || !e.parentNode) return -1;
                    for (var t = 0, n = e; n = n.previousSibling;)++t;
                    return t
                },
                getDomListA2B: function (e) {
                    function t(e, t) {
                        e.push(t)
                    }
                    var n, r = e.startDom,
                        o = e.startOffset,
                        i = e.endDom,
                        a = e.endOffset,
                        l = !1,
                        d = !1;
                    1 == r.nodeType && o > 0 && o < r.childNodes.length && (r = r.childNodes[o], o = 0), 1 == i.nodeType && a > 0 && a < i.childNodes.length && (i = i.childNodes[a], a = 0), r !== i && 0 === a && (i = s.getPreviousNode(i, !1, r), a = s.isSelfClosingTag(i) ? 1 : s.getDomEndOffset(i)), r == i && o != a ? (n = 3 == r.nodeType, n && !r.parentNode.getAttribute(u["default"].ATTR.SPAN_DELETE) ? (r = s.splitRangeText(r, o, a), i = r, l = !0, d = !0) : 1 == r.nodeType && r.childNodes.length > 0 && !s.isSelfClosingTag(r) && (r = r.childNodes[o], i = i.childNodes[a - 1], l = !0, d = !0)) : r !== i && (3 != r.nodeType || r.parentNode.getAttribute(u["default"].ATTR.SPAN_DELETE) ? 1 == r.nodeType && r.childNodes.length > 0 && o < r.childNodes.length && (r = r.childNodes[o], l = !0) : (r = s.splitRangeText(r, o, null), l = !0), 3 == i.nodeType && a > 0 && !i.parentNode.getAttribute(u["default"].ATTR.SPAN_DELETE) ? (i = s.splitRangeText(i, 0, a), d = !0) : !s.isSelfClosingTag(i) && 1 == i.nodeType && a > 0 && (i = s.getLastDeepChild(i.childNodes[a - 1]), d = !0)), l && (o = 0), d && (a = s.getDomEndOffset(i));
                    var f = r,
                        c = [];
                    for (o == r.length && (f = s.getNextNode(f, !1, i)); f && (r != i || o != a);) {
                        if (f == i || f == i.parentNode) {
                            t(c, i);
                            break
                        }
                        if (s.isBody(f)) {
                            t(c, f);
                            break
                        }
                        t(c, f), f = s.getNextNode(f, !1, i)
                    }
                    var p = s.getPreviousNode(c[0], !1, null),
                        g = s.getNextNode(c[c.length - 1], !1, null);
                    p && 1 == p.nodeType && p.firstChild && (p = p.firstChild), g && 1 == g.nodeType && g.lastChild && (g = g.lastChild);
                    var m = s.getDomEndOffset(p),
                        h = 0;
                    return {
                        list: c,
                        startDom: r,
                        startOffset: o,
                        endDom: i,
                        endOffset: a,
                        startDomBak: p,
                        startOffsetBak: m,
                        endDomBak: g,
                        endOffsetBak: h
                    }
                },
                getDomPosition: function (e) {
                    return e ? {
                        top: e.offsetTop,
                        left: e.offsetLeft,
                        height: e.offsetHeight,
                        width: e.offsetWidth
                    } : null
                },
                getFirstDeepChild: function (e) {
                    if (!e) return null;
                    for (; e.childNodes && e.childNodes.length > 0;) e = e.childNodes[0];
                    return e
                },
                getLastDeepChild: function (e) {
                    if (!e) return null;
                    for (; e.childNodes && e.childNodes.length > 0;) e = e.childNodes[e.childNodes.length - 1];
                    return e
                },
                getImageData: function (e) {
                    var t = s.getImageSize(e.src),
                        n = i["default"].doc.createElement("canvas");
                    n.width = t.width, n.height = t.height;
                    var r = n.getContext("2d");
                    r.drawImage(e, 0, 0);
                    var o = n.toDataURL("image/png");
                    return o.replace(/^data:image\/(png|jpg);base64,/, "")
                },
                getImageSize: function (e) {
                    var t = new Image;
                    t.src = e;
                    var n = t.height,
                        r = t.width;
                    return {
                        width: r,
                        height: n
                    }
                },
                getIndexListByDom: function (e) {
                    for (var t = e, n = []; t && !s.isBody(t);) n.splice(0, 0, s.getDomIndex(t)), t = t.parentNode;
                    return n
                },
                getNextNode: function (e, t, n) {
                    function r(e) {
                        return t ? e.nextElementSibling : e.nextSibling
                    }
                    function o(e) {
                        return t ? e.firstElementChild : e.firstChild
                    }
                    if (e == n) return null;
                    if (t = !! t, !r(e) && !e.parentNode) return null;
                    if (r(e)) e = r(e);
                    else for (; e.parentNode && (e = e.parentNode, e != n);) {
                        if (s.isBody(e)) {
                            e = null;
                            break
                        }
                        if (r(e)) {
                            e = r(e);
                            break
                        }
                    }
                    if (e == n) return e;
                    var i;
                    if (i = o(e), e && i) for (; i && (e = i, e != n);) i = o(i);
                    return e
                },
                getPageScroll: function () {
                    var e = {};
                    return "undefined" != typeof i["default"].win.pageYOffset ? (e.left = i["default"].win.pageXOffset, e.top = i["default"].win.pageYOffset) : "undefined" != typeof i["default"].doc.compatMode && "BackCompat" != i["default"].doc.compatMode ? (e.left = i["default"].doc.documentElement.scrollLeft, e.top = i["default"].doc.documentElement.scrollTop) : "undefined" != typeof i["default"].doc.body && (e.left = i["default"].doc.body.scrollLeft, e.top = i["default"].doc.body.scrollTop), e
                },
                getParentByFilter: function (e, t, n) {
                    if (e && !s.isBody(e)) for (e = n ? e : e.parentNode; e;) {
                        if (!t || t(e)) return e;
                        if (s.isBody(e)) return null;
                        e = e.parentNode
                    }
                    return null
                },
                getParentByTagName: function (e, t, n, r) {
                    return t = d["default"].listToMap(d["default"].isArray(t) ? t : [t]), s.getParentByFilter(e, function (e) {
                        return t[e.tagName] && !(r && r(e))
                    }, n)
                },
                getParentRoot: function (e) {
                    if (!e || 0 === e.length) return null;
                    var t, n, r, o, a = [];
                    for (o = 1 == e[0].nodeType ? e[0] : e[0].parentNode; o && !s.isBody(o);) a.push(o), o = o.parentNode;
                    for (t = 1, n = e.length; n > t; t++) for (o = e[t]; o;) {
                        if (s.isBody(o)) return i["default"].doc.body;
                        if (r = a.indexOf(o), r > -1) {
                            a.splice(0, r);
                            break
                        }
                        o = o.parentNode
                    }
                    return 0 === a.length ? i["default"].doc.body : a[0]
                },
                getPreviousNode: function (e, t, n) {
                    function r(e) {
                        return t ? e.previousElementSibling : e.previousSibling
                    }
                    function o(e) {
                        return t ? e.lastElementChild : e.lastChild
                    }
                    if (e == n) return null;
                    if (t = !! t, r(e)) e = r(e);
                    else for (; e.parentNode && (e = e.parentNode, e != n);) {
                        if (s.isBody(e)) {
                            e = null;
                            break
                        }
                        if (r(e)) {
                            e = r(e);
                            break
                        }
                    }
                    if (!e) return null;
                    if (e == n && (3 === e.nodeType || 1 === e.nodeType && 0 === e.childNodes.length)) return e;
                    var i;
                    if (i = o(e), e && i) for (; i && (e = i, e != n || 3 !== e.nodeType && (1 !== e.nodeType || 0 !== e.childNodes.length));) i = o(i);
                    return e
                },
                getTab: function () {
                    var e = i["default"].doc.createElement("span");
                    return e.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;", e.childNodes[0]
                },
                getTdIndex: function (e) {
                    return {
                        x: e.cellIndex,
                        y: e.parentNode.rowIndex,
                        maxX: e.parentNode.cells.length,
                        maxY: e.parentNode.parentNode.rows.length
                    }
                },
                getWizAmendParent: function (e) {
                    return s.getParentByFilter(e, function (e) {
                        return e && 1 === e.nodeType && (e.getAttribute(u["default"].ATTR.SPAN_INSERT) || e.getAttribute(u["default"].ATTR.SPAN_DELETE))
                    }, !0)
                },
                insert: function (e, t, n) {
                    if (n = !! n, e && t) {
                        var r, o, a, u = e === i["default"].doc.body,
                            l = u ? e : e.parentNode,
                            s = u ? n ? null : i["default"].doc.body.childNodes[0] : n ? e.nextSibling : e;
                        if (d["default"].isArray(t)) for (a = s, r = t.length - 1; r >= 0; r--) o = t[r], l.insertBefore(o, a), a = o;
                        else l.insertBefore(t, s)
                    }
                },
                isBody: function (e) {
                    return e && e == i["default"].doc.body
                },
                isEmptyDom: function (e) {
                    var t, n, r;
                    if (3 === e.nodeType) return r = e.nodeValue, d["default"].isEmpty(r);
                    if (1 !== e.nodeType) return !0;
                    if (0 === e.childNodes.length) return s.isTag(e, "br") || !s.isSelfClosingTag(e);
                    for (t = 0, n = e.childNodes.length; n > t; t++) if (!s.isEmptyDom(e.childNodes[t])) return !1;
                    return !0
                },
                isFillChar: function (e, t) {
                    return 3 == e.nodeType && !e.nodeValue.replace(new RegExp((t ? "^" : "") + u["default"].FILL_CHAR), "").length
                },
                isSelfClosingTag: function (e) {
                    var t = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
                    return 1 === e.nodeType && t.test(e.tagName)
                },
                isSameSpan: function (e, t) {
                    return !!e && !! t && 1 == e.nodeType && 1 == t.nodeType && s.isTag(e, "span") && e.tagName == t.tagName && e.getAttribute(u["default"].ATTR.SPAN) == u["default"].ATTR.SPAN && s.isSameStyle(e, t) && s.isSameAttr(e, t)
                },
                isSameAttr: function (e, t) {
                    var n = e.attributes,
                        r = t.attributes;
                    if (n.length != r.length) return !1;
                    var o, i, a;
                    for (o = 0, i = n.length; i > o; o++) if (a = n[o], "style" != a.name) if (a.name !== u["default"].ATTR.SPAN_TIMESTAMP) {
                        if (!r[a.name] || r[a.name].value != a.value) return !1
                    } else if (!d["default"].isSameAmendTime(a.value, r[a.name].value)) return !1;
                    return !0
                },
                isSameStyle: function (e, t) {
                    var n = {}, r = {};
                    s.appendStyle(e.getAttribute("style"), n), s.appendStyle(t.getAttribute("style"), r);
                    var o;
                    for (o in n) if (n.hasOwnProperty(o)) {
                        if (r[o] !== n[o]) return !1;
                        delete n[o], delete r[o]
                    }
                    for (o in r) if (r.hasOwnProperty(o)) return !1;
                    return !0
                },
                isTag: function (e, t) {
                    return !!e && 1 === e.nodeType && e.tagName.toLowerCase() === t.toLowerCase()
                },
                isUsableTextNode: function (e) {
                    return 3 == e.nodeType && !d["default"].isEmpty(e.nodeValue)
                },
                isWizSpan: function (e) {
                    return !!e && !! e.getAttribute(u["default"].ATTR.SPAN)
                },
                mergeAtoB: function (e, t, n) {
                    s.mergeStyleAToB(e, t, n), s.mergeAttrAtoB(e, t, n)
                },
                mergeAttrAtoB: function (e, t, n) {
                    if (1 == e.nodeType && 1 == t.nodeType) {
                        var r, o, i, a = e.attributes,
                            u = t.attributes;
                        for (r = 0, o = a.length; o > r; r++) i = a[r], "style" != i.name && (!u[i.name] || n) && t.setAttribute(i.name, i.value)
                    }
                },
                mergeStyleAToB: function (e, t, n) {
                    if (1 == e.nodeType && 1 == t.nodeType) {
                        var r = e.getAttribute("style"),
                            o = t.getAttribute("style") || "";
                        if (r) {
                            var i = {};
                            n ? (s.appendStyle(o, i), s.appendStyle(r, i)) : (s.appendStyle(r, i), s.appendStyle(o, i));
                            var a = [];
                            for (var u in i) i.hasOwnProperty(u) && a.push(u + ":" + i[u]);
                            t.setAttribute("style", a.join(";"))
                        }
                    }
                },
                removeListFilter: function (e, t) {
                    var n, r, o = [];
                    if (!e || !t) return o;
                    for (n = e.length - 1; n >= 0; n--) r = e[n], t(r) && o.unshift(e.splice(n, 1)[0]);
                    return o
                },
                search: function (e, t, n) {
                    var r, o, i, a = e.querySelectorAll(t);
                    for (n = n ? n : [], r = 0, o = a.length; o > r; r++) i = a[r], n.push(i)
                },
                setLayout: function (e) {
                    var t, n, r, o, a = e.layerObj,
                        l = e.target,
                        d = e.layout,
                        f = !! e.fixed,
                        c = !! e.noSpace,
                        p = !! e.reverse,
                        g = s.getDomPosition(a),
                        m = l.nodeType ? s.getDomPosition(l) : l,
                        h = s.getPageScroll(),
                        b = i["default"].doc.documentElement.clientWidth,
                        v = i["default"].doc.documentElement.clientHeight,
                        y = window.getComputedStyle ? i["default"].win.getComputedStyle(i["default"].doc.body, null)["margin-top"] : 0,
                        A = "50%",
                        x = "30%",
                        T = 0,
                        E = -g.width / 2;
                    y && (y = parseInt(y), isNaN(y) && (y = 0)), f ? (t = 0, n = b - 5, r = 0 + y, o = v) : (t = 0 + h.left, n = b + h.left - 5, r = 0 + (h.top <= y ? 0 : Math.abs(h.top - y)) + y, o = v + h.top), m && d && (T = 0, E = 0, d == u["default"].TYPE.POS.upLeft || d == u["default"].TYPE.POS.upRight ? x = m.top - g.height - (c ? 0 : u["default"].AMEND.INFO_SPACE) : d == u["default"].TYPE.POS.downLeft || d == u["default"].TYPE.POS.downRight ? x = m.top + m.height + (c ? 0 : u["default"].AMEND.INFO_SPACE) : d == u["default"].TYPE.POS.leftUp || d == u["default"].TYPE.POS.leftDown ? A = m.left - g.width - (c ? 0 : u["default"].AMEND.INFO_SPACE) : (d == u["default"].TYPE.POS.rightUp || d == u["default"].TYPE.POS.rightDown) && (A = m.left + m.width + (c ? 0 : u["default"].AMEND.INFO_SPACE)), d == u["default"].TYPE.POS.upLeft || d == u["default"].TYPE.POS.downLeft ? (A = m.left, f && (A -= h.left)) : d == u["default"].TYPE.POS.upRight || d == u["default"].TYPE.POS.downRight ? (A = m.left + m.width - g.width, f && (A -= h.left)) : d == u["default"].TYPE.POS.leftUp || d == u["default"].TYPE.POS.rightUp ? (x = m.top, f && (x -= h.top)) : (d == u["default"].TYPE.POS.leftDown || d == u["default"].TYPE.POS.rightDown) && (x = m.top + m.height - g.height, f && (x -= h.top)), A + g.width > n && (A = n - g.width), t > A && (A = t), x + g.height > o && (x = o - g.height), p && r > x && (x = m.top + m.height), (r > x || x + g.height > o) && (x = r)), s.css(a, {
                        left: A + "px",
                        top: x + "px",
                        "margin-top": T + "px",
                        "margin-left": E + "px"
                    }, !1)
                },
                splitRangeText: function (e, t, n) {
                    if (!s.isUsableTextNode(e)) return e;
                    var r, o, a, u = e.nodeValue;
                    return r = e.parentNode, o = s.createSpan(), !t && !n || 0 === t && n === e.nodeValue.length ? r.childNodes.length > 1 ? (r.insertBefore(o, e), o.appendChild(e)) : o = r : 0 === t ? (r.insertBefore(o, e), o.innerText = u.substring(t, n), e.nodeValue = u.substring(n)) : n && n !== e.nodeValue.length ? (a = i["default"].doc.createTextNode(u.substring(n)), r.insertBefore(o, e.nextSibling), o.innerText = u.substring(t, n), e.nodeValue = u.substring(0, t), r.insertBefore(a, o.nextSibling)) : (r.insertBefore(o, e.nextSibling), o.innerText = u.substring(t), e.nodeValue = u.substring(0, t)), o
                }
            };
        n["default"] = s, t.exports = n["default"]
    }, {
        "./../common/const": 4,
        "./../common/env": 6,
        "./../common/utils": 8
    }],
    13: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./../common/env"),
            i = r(o),
            a = e("./../common/const"),
            u = r(a),
            l = e("./../common/utils"),
            d = (r(l), e("./domBase")),
            s = r(d);
        s["default"].clearChild = function (e, t) {
            if (e) {
                var n = t.indexOf(e) >= 0;
                if (!n && 3 == e.nodeType && !s["default"].isUsableTextNode(e)) return void e.parentNode.removeChild(e);
                if (!n && 3 == e.nodeType) return void(e.nodeValue = e.nodeValue.replace(u["default"].FILL_CHAR_REG, ""));
                if (!n && 1 == e.nodeType) {
                    var r, o, i = e.childNodes;
                    for (r = i.length - 1; r >= 0; r--) o = i[r], s["default"].clearChild(o, t);
                    s["default"].mergeChildSpan(e, t), t.indexOf(e) < 0 && 0 === e.childNodes.length && 1 == e.nodeType && !s["default"].isSelfClosingTag(e) && e.getAttribute(u["default"].ATTR.SPAN) && e.parentNode.removeChild(e)
                }
            }
        }, s["default"].mergeChildSpan = function (e, t) {
            if (e && 1 === e.nodeType) {
                var n, r;
                for (n = 0, r = e.children.length; r > n; n++) s["default"].mergeChildSpan(e.children[n], t);
                s["default"].mergeSiblingSpan(e, t);
                var o, i = e.children[0];
                if (i && t.indexOf(i) < 0 && 1 == e.childNodes.length && e.getAttribute(u["default"].ATTR.SPAN) == u["default"].ATTR.SPAN && i.getAttribute(u["default"].ATTR.SPAN) == u["default"].ATTR.SPAN) s["default"].mergeChildToParent(e, i);
                else for (; i;) t.indexOf(i) < 0 && t.indexOf(e) < 0 && s["default"].isSameSpan(e, i) ? (o = i.previousElementSibling, s["default"].mergeChildToParent(e, i), i = o ? o.nextElementSibling : e.children[0]) : i = i.nextElementSibling
            }
        }, s["default"].mergeChildToParent = function (e, t) {
            if (e && t && t.parentNode === e) {
                for (; t.childNodes.length > 0;) s["default"].insert(t, t.childNodes[0], !1);
                s["default"].mergeAtoB(e, t, !1), s["default"].mergeAtoB(t, e, !0), e.removeChild(t)
            }
        }, s["default"].mergeSiblingSpan = function (e, t) {
            var n, r, o = e.childNodes[0];
            if (o) for (; o;) if (n = o.nextSibling, n && t.indexOf(n) < 0 && t.indexOf(o) < 0 && s["default"].isSameSpan(o, n)) {
                for (; n.childNodes.length;) r = n.childNodes[0], r && (r.innerHTML || r.nodeValue && r.nodeValue != u["default"].FILL_CHAR) ? o.appendChild(r) : n.removeChild(r);
                n.parentNode.removeChild(n)
            } else o = n
        }, s["default"].modifyChildNodesStyle = function (e, t, n) {
            if (e) {
                var r, o, i = e.childNodes,
                    a = !1;
                for (r = 0; r < i.length; r++) o = i[r], !a && s["default"].isUsableTextNode(o) ? (a = !0, s["default"].modifyStyle(e, t, n)) : 1 == o.nodeType && s["default"].modifyChildNodesStyle(o, t, n)
            }
        }, s["default"].modifyNodeStyle = function (e, t, n) {
            return 1 == e.nodeType ? s["default"].isSelfClosingTag(e) ? s["default"].modifyStyle(e, t, n) : s["default"].modifyChildNodesStyle(e, t, n) : s["default"].isUsableTextNode(e) && (e = s["default"].splitRangeText(e, null, null), s["default"].modifyStyle(e, t, n)), e
        }, s["default"].modifyNodesStyle = function (e, t, n) {
            if (0 !== e.length) {
                var r, o, i;
                for (r = 0, o = e.length; o > r; r++) i = e[r], e[r] = s["default"].modifyNodeStyle(i, t, n)
            }
        }, s["default"].modifyStyle = function (e, t, n) {
            var r = s["default"].isSelfClosingTag(e);
            if (!(n && n[u["default"].ATTR.SPAN_INSERT] && r)) {
                var o = e;
                if (n && (n[u["default"].ATTR.SPAN_INSERT] || n[u["default"].ATTR.SPAN_DELETE]) && (o = s["default"].getWizAmendParent(e), o ? e = null : o = e), e && !r && (!s["default"].isTag(e, "span") || e.getAttribute(u["default"].ATTR.SPAN) !== u["default"].ATTR.SPAN)) for (o = s["default"].createSpan(), e.insertBefore(o, null); e.childNodes.length > 1;) o.insertBefore(e.childNodes[0], null);
                var i, a;
                if (s["default"].css(o, t, !1), n) for (i in n) n.hasOwnProperty(i) && "string" == typeof i && (a = n[i], a ? o.setAttribute(i, a) : o.removeAttribute(i))
            }
        }, s["default"].removeEmptyParent = function (e) {
            if (e) {
                var t;
                s["default"].isEmptyDom(e) && (e === i["default"].doc.body || s["default"].isTag(e, "td") ? e.innerHTML = "<br/>" : (t = e.parentNode, t && (t.removeChild(e), s["default"].removeEmptyParent(t))))
            }
        }, s["default"].splitDom = function (e, t) {
            if (e && t && t.previousSibling) {
                for (var n, r = e.parentNode, o = e.cloneNode(!1); t;) n = t.nextSibling, o.appendChild(t), t = n;
                r.insertBefore(o, e.nextSibling)
            }
        }, n["default"] = s["default"], t.exports = n["default"]
    }, {
        "./../common/const": 4,
        "./../common/env": 6,
        "./../common/utils": 8,
        "./domBase": 12
    }],
    14: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function o(e, t) {
            if (!e || e.className && e.className.indexOf("wiz-todo") > -1) return !1;
            var n = e.src;
            if (!n) return !1;
            var r, o = /^(http|https|ftp):/,
                i = /^(data):/;
            return r = !i.test(n), r && t ? !o.test(n) : r
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./../common/env"),
            a = r(i),
            u = e("./../common/const"),
            l = (r(u), e("./../common/utils")),
            d = (r(l), e("./../domUtils/domExtend")),
            s = (r(d), e("./../rangeUtils/rangeExtend")),
            f = (r(s), {
                getAll: function (e) {
                    var t, n, r = a["default"].doc.images,
                        i = [],
                        u = {};
                    for (t in r) r.hasOwnProperty(t) && (n = r[t].src, o(r[t], e) && !u[n] && (i.push(n), u[n] = !0));
                    return i
                },
                makeAttachmentHtml: function (e, t) {
                    return '<div style="margin: 15px auto;"><a href="wiz:open_attachment?guid=' + e + '"><img src="' + t + '" style="width: 280px; height:auto;"></a></div><div><br/></div>'
                },
                makeDomByPath: function (e) {
                    var t, n, r, o, i = [],
                        u = [];
                    for (e.indexOf("*") ? u = e.split("*") : u.push(e), t = a["default"].doc.createElement("div"), t.style.margin = "15px auto", i.push(t), r = 0, o = u.length; o > r; r++) n = a["default"].doc.createElement("img"), n.src = u[r], n.style.maxWidth = "100%", t.insertBefore(n, null), o - 1 > r && t.insertBefore(a["default"].doc.createElement("br"), null);
                    return t = a["default"].doc.createElement("div"), t.insertBefore(a["default"].doc.createElement("br"), null), i.push(t), i
                }
            });
        n["default"] = f, t.exports = n["default"]
    }, {
        "./../common/const": 4,
        "./../common/env": 6,
        "./../common/utils": 8,
        "./../domUtils/domExtend": 13,
        "./../rangeUtils/rangeExtend": 19
    }],
    15: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r;
        r = "object" == typeof n && "function" == typeof e ? n : {},
        function () {
            function e(e) {
                return e
            }
            function t(e) {
                return !1
            }
            function n() {}
            function o() {}
            n.prototype = {
                chain: function (t, n) {
                    var r = this[t];
                    if (!r) throw new Error("unknown hook " + t);
                    this[t] = r === e ? n : function (e) {
                        var t = Array.prototype.slice.call(arguments, 0);
                        return t[0] = r.apply(null, t), n.apply(null, t)
                    }
                },
                set: function (e, t) {
                    if (!this[e]) throw new Error("unknown hook " + e);
                    this[e] = t
                },
                addNoop: function (t) {
                    this[t] = e
                },
                addFalse: function (e) {
                    this[e] = t
                }
            }, r.HookCollection = n, o.prototype = {
                set: function (e, t) {
                    this["s_" + e] = t
                },
                get: function (e) {
                    return this["s_" + e]
                }
            }, r.Converter = function (t) {
                function r(e) {
                    return e = e.replace(/^[ ]{0,3}\[([^\[\]]+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(\n+)/gm, function (e, t, n, r, o, i, a) {
                        return t = t.toLowerCase(), z.set(t, _(n)), o ? r + a : (i && F.set(t, i.replace(/"/g, "&quot;")), "")
                    })
                }
                function i(e) {
                    return e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, u), e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm, u), e = e.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, u), e = e.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g, u), e = e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, u)
                }
                function a(e) {
                    return e = e.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (U.push(e) - 1) + "K\n\n"
                }
                function u(e, t) {
                    return a(t)
                }
                function l(e, t, n) {
                    e = B.preBlockGamut(e, q), e = h(e);
                    var r = "<hr />\n";
                    return e = e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, r), e = e.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm, r), e = e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, r), e = b(e), e = A(e), e = S(e), e = B.postBlockGamut(e, q), e = i(e), e = w(e, t, n)
                }
                function d(e) {
                    return e = B.preSpanGamut(e), e = x(e), e = s(e), e = C(e), e = p(e), e = f(e), e = D(e), e = e.replace(/~P/g, "://"), e = _(e), e = H(e), e = e.replace(/  +\n/g, " <br>\n"), e = B.postSpanGamut(e)
                }
                function s(e) {
                    var t = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;
                    return e = e.replace(t, function (e) {
                        var t = e.replace(/(.)<\/?code>(?=.)/g, "$1`");
                        return t = L(t, "!" == e.charAt(1) ? "\\`*_/" : "\\`*_")
                    })
                }
                function f(e) {
                    return -1 === e.indexOf("[") ? e : (e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, c), e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, c), e = e.replace(/(\[([^\[\]]+)\])()()()()()/g, c))
                }
                function c(e, t, n, r, o, i, a, u) {
                    void 0 == u && (u = "");
                    var l = t,
                        d = n.replace(/:\/\//g, "~P"),
                        s = r.toLowerCase(),
                        f = o,
                        c = u;
                    if ("" == f) if ("" == s && (s = d.toLowerCase().replace(/ ?\n/g, " ")), f = "#" + s, void 0 != z.get(s)) f = z.get(s), void 0 != F.get(s) && (c = F.get(s));
                    else {
                        if (!(l.search(/\(\s*\)$/m) > -1)) return l;
                        f = ""
                    }
                    f = R(f);
                    var p = '<a href="' + f + '"';
                    return "" != c && (c = g(c), c = L(c, "*_"), p += ' title="' + c + '"'), p += ">" + d + "</a>"
                }
                function p(e) {
                    return -1 === e.indexOf("![") ? e : (e = e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, m), e = e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, m))
                }
                function g(e) {
                    return e.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
                }
                function m(e, t, n, r, o, i, a, u) {
                    var l = t,
                        d = n,
                        s = r.toLowerCase(),
                        f = o,
                        c = u;
                    if (c || (c = ""), "" == f) {
                        if ("" == s && (s = d.toLowerCase().replace(/ ?\n/g, " ")), f = "#" + s, void 0 == z.get(s)) return l;
                        f = z.get(s), void 0 != F.get(s) && (c = F.get(s))
                    }
                    d = L(g(d), "*_[]()"), f = L(f, "*_");
                    var p = '<img src="' + f + '" alt="' + d + '"';
                    return c = g(c), c = L(c, "*_"), p += ' title="' + c + '"', p += " />"
                }
                function h(e) {
                    return e = e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function (e, t) {
                        return "<h1>" + d(t) + "</h1>\n\n"
                    }), e = e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function (e, t) {
                        return "<h2>" + d(t) + "</h2>\n\n"
                    }), e = e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function (e, t, n) {
                        var r = t.length;
                        return "<h" + r + ">" + d(n) + "</h" + r + ">\n\n"
                    })
                }
                function b(e, t) {
                    e += "~0";
                    var n, r = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
                    return $ ? e = e.replace(r, function (e, r, o) {
                        var i = r;
                        n = v(o);
                        var a = y(i, n, t),
                            u = a.list_str.replace(/\s+$/, ""),
                            l = "<" + n;
                        return u = l + ">" + u + "</" + a.list_type + ">\n", n = a.list_type, u
                    }) : (r = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, e = e.replace(r, function (e, t, r, o) {
                        var i = t,
                            a = r;
                        n = v(o);
                        var u = y(a, n),
                            l = "<" + n,
                            d = i + l + ">\n" + u.list_str + "</" + u.list_type + ">\n";
                        return n = u.list_type, d
                    })), e = e.replace(/~0/, "")
                }
                function v(e) {
                    return e.search(/[*+-]/g) > -1 ? "ul" : "ol"
                }
                function y(e, t, n) {
                    $++, e = e.replace(/\n{2,}$/, "\n"), e += "~0";
                    var r = new RegExp("(^[ \\t]*)([*+-]|\\d+[.])[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1([*+-]|\\d+[.])[ \\t]+))", "gm"),
                        o = !1;
                    return e = e.replace(r, function (e, n, r, i) {
                        var a = i,
                            u = v(r),
                            d = /\n\n$/.test(a),
                            s = d || a.search(/\n{2,}/) > -1,
                            f = s || o;
                        a = l(O(a), !0, !f);
                        var c = "";
                        return u != t && (c = "</" + t + ">\n<" + u + ">\n", t = u), c += "<li>" + a + "</li>\n", o = d, c
                    }), e = e.replace(/~0/g, ""), $--, {
                        list_str: e,
                        list_type: t
                    }
                }
                function A(e) {
                    return e += "~0", e = e.replace(/(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function (e, t, n) {
                        var r = t,
                            o = n;
                        return r = T(O(r)), r = P(r), r = r.replace(/^\n+/g, ""), r = r.replace(/\n+$/g, ""), r = "<pre><code>" + r + "\n</code></pre>", "\n\n" + r + "\n\n" + o
                    }), e = e.replace(/~0/, "")
                }
                function x(e) {
                    return e = e.replace(/(^|[^\\`])(`+)(?!`)([^\r]*?[^`])\2(?!`)/gm, function (e, t, n, r, o) {
                        var i = r;
                        return i = i.replace(/^([ \t]*)/g, ""), i = i.replace(/[ \t]*$/g, ""), i = T(i), i = i.replace(/:\/\//g, "~P"), t + "<code>" + i + "</code>"
                    })
                }
                function T(e) {
                    return e = e.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = L(e, "*_{}[]\\", !1)
                }
                function E(e) {
                    return -1 === e.indexOf("*") && -1 === e.indexOf("_") ? e : (e = j(e), e = e.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)\2(?=\S)([^\r]*?\S)\2\2(?!\2)(?=[\W_]|$)/g, "$1<strong>$3</strong>"), e = e.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)(?=\S)((?:(?!\2)[^\r])*?\S)\2(?!\2)(?=[\W_]|$)/g, "$1<em>$3</em>"), W(e))
                }
                function N(e) {
                    return -1 === e.indexOf("*") && -1 === e.indexOf("_") ? e : (e = j(e), e = e.replace(/(?=[^\r][*_]|[*_])(^|(?=\W__|(?!\*)[\w\W_]\*\*|\w\*\*\w)[^\r])(\*\*|__)(?!\2)(?=\S)((?:|[^\r]*?(?!\2)[^\r])(?=\S_|\w|.\*\*(?:[\w\W_]|$)).)(?=__(?:\W|$)|\*\*(?:[^*]|$))\2/g, "$1<strong>$3</strong>"), e = e.replace(/(?=[^\r][*_]|[*_])(^|(?=\W_|(?!\*)(?:[\w\W_]\*|\D\*(?=\w)\D))[^\r])(\*|_)(?!\2\2\2)(?=\S)((?:(?!\2)[^\r])*?(?=[^\s_]_|(?=[\w\W])\D\*\D|[^\s*]\*(?:[\w\W_]|$)).)(?=_(?:\W|$)|\*(?:[^*]|$))\2/g, "$1<em>$3</em>"), W(e))
                }
                function S(e) {
                    return e = e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function (e, t) {
                        var n = t;
                        return n = n.replace(/^[ \t]*>[ \t]?/gm, "~0"), n = n.replace(/~0/g, ""), n = n.replace(/^[ \t]+$/gm, ""), n = l(n), n = n.replace(/(^|\n)/g, "$1  "), n = n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (e, t) {
                            var n = t;
                            return n = n.replace(/^  /gm, "~0"), n = n.replace(/~0/g, "")
                        }), a("<blockquote>\n" + n + "\n</blockquote>")
                    })
                }
                function w(e, t, n) {
                    e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, "");
                    for (var r = e.split(/\n{2,}/g), o = [], i = /~K(\d+)K/, a = r.length, u = 0; a > u; u++) {
                        var l = r[u];
                        i.test(l) ? o.push(l) : /\S/.test(l) && (l = d(l), l = l.replace(/^([ \t]*)/g, n ? "" : "<p>"), n || (l += "</p>"), o.push(l))
                    }
                    if (!t) {
                        a = o.length;
                        for (var u = 0; a > u; u++) for (var s = !0; s;) s = !1, o[u] = o[u].replace(/~K(\d+)K/g, function (e, t) {
                            return s = !0, U[t]
                        })
                    }
                    return o.join("\n\n")
                }
                function _(e) {
                    return e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), e = e.replace(/<(?![a-z\/?!]|~D)/gi, "&lt;")
                }
                function C(e) {
                    return e = e.replace(/\\(\\)/g, M), e = e.replace(/\\([`*_{}\[\]()>#+-.!])/g, M)
                }
                function I(e, t, n, r, o, i) {
                    if (/^<[^<>]*(https?|ftp)/.test(i)) return e;
                    if (t) return e;
                    if (")" !== r.charAt(r.length - 1)) return "<" + n + r + ">";
                    for (var a = r.match(/[()]/g), u = 0, l = 0; l < a.length; l++) "(" === a[l] ? 0 >= u ? u = 1 : u++ : u--;
                    var d = "";
                    if (0 > u) {
                        var s = new RegExp("\\){1," + -u + "}$");
                        r = r.replace(s, function (e) {
                            return d = e, ""
                        })
                    }
                    if (d) {
                        var f = r.charAt(r.length - 1);
                        J.test(f) || (d = f + d, r = r.substr(0, r.length - 1))
                    }
                    return "<" + n + r + ">" + d
                }
                function D(e) {
                    e = e.replace(X, I);
                    var t = function (e, t) {
                        var n = R(t);
                        return '<a href="' + n + '">' + B.plainLinkText(t) + "</a>"
                    };
                    return e = e.replace(/<((https?|ftp):[^'">\s]+)>/gi, t)
                }
                function k(e) {
                    return e = e.replace(/~E(\d+)E/g, function (e, t) {
                        var n = parseInt(t);
                        return String.fromCharCode(n)
                    })
                }
                function O(e) {
                    return e = e.replace(/^(\t|[ ]{1,4})/gm, "~0"), e = e.replace(/~0/g, "")
                }
                function P(e) {
                    if (!/\t/.test(e)) return e;
                    var t, n = ["    ", "   ", "  ", " "],
                        r = 0;
                    return e.replace(/[\n\t]/g, function (e, o) {
                        return "\n" === e ? (r = o + 1, e) : (t = (o - r) % 4, r = o + 1, n[t])
                    })
                }
                function R(e) {
                    return e = g(e), e = L(e, "*_:()[]")
                }
                function L(e, t, n) {
                    var r = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
                    n && (r = "\\\\" + r);
                    var o = new RegExp(r, "g");
                    return e = e.replace(o, M)
                }
                function M(e, t) {
                    var n = t.charCodeAt(0);
                    return "~E" + n + "E"
                }
                var B = this.hooks = new n;
                B.addNoop("plainLinkText"), B.addNoop("preConversion"), B.addNoop("postNormalization"), B.addNoop("preBlockGamut"), B.addNoop("postBlockGamut"), B.addNoop("preSpanGamut"), B.addNoop("postSpanGamut"), B.addNoop("postConversion");
                var z, F, U, $;
                t = t || {};
                var j = e,
                    W = e;
                t.nonAsciiLetters && ! function () {
                    var e = /[Q\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u064a\u0660-\u0669\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07c0-\u07ea\u07f4-\u07f5\u07fa\u0904-\u0939\u093d\u0950\u0958-\u0961\u0966-\u096f\u0971-\u0972\u097b-\u097f\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09e6-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0ae6-\u0aef\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b66-\u0b6f\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0be6-\u0bef\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c66-\u0c6f\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0ce6-\u0cef\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d3d\u0d60-\u0d61\u0d66-\u0d6f\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edd\u0f00\u0f20-\u0f29\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8b\u1000-\u102a\u103f-\u1049\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u1090-\u1099\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1877\u1880-\u18a8\u18aa\u1900-\u191c\u1946-\u196d\u1970-\u1974\u1980-\u19a9\u19c1-\u19c7\u19d0-\u19d9\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b50-\u1b59\u1b83-\u1ba0\u1bae-\u1bb9\u1c00-\u1c23\u1c40-\u1c49\u1c4d-\u1c7d\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u203f-\u2040\u2054\u2071\u207f\u2090-\u2094\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183-\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c6f\u2c71-\u2c7d\u2c80-\u2ce4\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3006\u3031-\u3035\u303b-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31b7\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fc3\ua000-\ua48c\ua500-\ua60c\ua610-\ua62b\ua640-\ua65f\ua662-\ua66e\ua67f-\ua697\ua717-\ua71f\ua722-\ua788\ua78b-\ua78c\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8d0-\ua8d9\ua900-\ua925\ua930-\ua946\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa50-\uaa59\uac00-\ud7a3\uf900-\ufa2d\ufa30-\ufa6a\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]/g,
                        t = "Q".charCodeAt(0),
                        n = "A".charCodeAt(0),
                        r = "Z".charCodeAt(0),
                        o = "a".charCodeAt(0) - r - 1;
                    j = function (i) {
                        return i.replace(e, function (e) {
                            for (var i, a = e.charCodeAt(0), u = ""; a > 0;) i = a % 51 + n, i >= t && i++, i > r && (i += o), u = String.fromCharCode(i) + u, a = a / 51 | 0;
                            return "Q" + u + "Q"
                        })
                    }, W = function (e) {
                        return e.replace(/Q([A-PR-Za-z]{1,3})Q/g, function (e, i) {
                            for (var a, u = 0, l = 0; l < i.length; l++) a = i.charCodeAt(l), a > r && (a -= o), a > t && a--, a -= n, u = 51 * u + a;
                            return String.fromCharCode(u)
                        })
                    }
                }();
                var H = t.asteriskIntraWordEmphasis ? N : E;
                this.makeHtml = function (e) {
                    if (z) throw new Error("Recursive call to converter.makeHtml");
                    return z = new o, F = new o, U = [], $ = 0, e = B.preConversion(e), e = e.replace(/~/g, "~T"), e = e.replace(/\$/g, "~D"), e = e.replace(/\r\n/g, "\n"), e = e.replace(/\r/g, "\n"), e = "\n\n" + e + "\n\n", e = P(e), e = e.replace(/^[ \t]+$/gm, ""), e = B.postNormalization(e), e = i(e), e = r(e), e = l(e), e = k(e), e = e.replace(/~D/g, "$$"), e = e.replace(/~T/g, "~"), e = B.postConversion(e), U = F = z = null, e
                };
                var q = function (e) {
                    return l(e)
                }, V = "[-A-Z0-9+&@#/%?=~_|[\\]()!:,.;]",
                    G = "[-A-Z0-9+&@#/%=~_|[\\])]",
                    X = new RegExp('(="|<)?\\b(https?|ftp)(://' + V + "*" + G + ")(?=$|\\W)", "gi"),
                    J = new RegExp(G, "i")
            }
        }(), n["default"] = r, t.exports = n["default"]
    }, {}],
    16: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = {};
        ! function () {
            function e(e) {
                return e.replace(/^\s+|\s+$/g, "")
            }
            function t(e) {
                return e.replace(/\s+$/g, "")
            }
            function n(e) {
                return e.replace(new RegExp("^(\\t|[ ]{1,4})", "gm"), "")
            }
            function o(e, t) {
                return -1 != e.indexOf(t)
            }
            function i(e, t) {
                return e.replace(/<[^>]*>?/gi, function (e) {
                    return e.match(t) ? e : ""
                })
            }
            function a(e, t) {
                for (var n = {}, r = 0; r < e.length; r++) n[e[r]] = e[r];
                for (r = 0; r < t.length; r++) n[t[r]] = t[r];
                var o = [];
                for (var i in n) n.hasOwnProperty(i) && o.push(n[i]);
                return o
            }
            function u(e) {
                return "" != e.charAt(0) && (e = "" + e), "" != e.charAt(e.length - 1) && (e += ""), e
            }
            function l(e) {
                return "" == e.charAt(0) && (e = e.substr(1)), "" == e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), e
            }
            function d(e, t) {
                return i(s(e, t), h)
            }
            function s(e, t) {
                var n = t.blockGamutHookCallback(e);
                return n = p(n), n = n.replace(/~D/g, "$$").replace(/~T/g, "~"), n = t.previousPostConversion(n)
            }
            function f(e) {
                return e.replace(/\\\|/g, "~I").replace(/\\:/g, "~i")
            }
            function c(e) {
                return e.replace(/~I/g, "|").replace(/~i/g, ":")
            }
            function p(e) {
                return e = e.replace(/~E(\d+)E/g, function (e, t) {
                    var n = parseInt(t);
                    return String.fromCharCode(n)
                })
            }
            function g(e) {
                return e.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            }
            function m(e, t) {
                var n = t;
                return n = n.replace(/&\#8220;/g, '"'), n = n.replace(/&\#8221;/g, '"'), n = n.replace(/&\#8216;/g, "'"), n = n.replace(/&\#8217;/g, "'"), n = n.replace(/&\#8212;/g, "---"), n = n.replace(/&\#8211;/g, "--"), n = n.replace(/&\#8230;/g, "...")
            }
            var h = new RegExp(["^(<\\/?(a|abbr|acronym|applet|area|b|basefont|", "bdo|big|button|cite|code|del|dfn|em|figcaption|", "font|i|iframe|img|input|ins|kbd|label|map|", "mark|meter|object|param|progress|q|ruby|rp|rt|s|", "samp|script|select|small|span|strike|strong|", "sub|sup|textarea|time|tt|u|var|wbr)[^>]*>|", "<(br)\\s?\\/?>)$"].join(""), "i");
            Array.indexOf || (Array.prototype.indexOf = function (e) {
                for (var t = 0; t < this.length; t++) if (this[t] == e) return t;
                return -1
            }), r.Extra = function () {
                this.converter = null, this.hashBlocks = [], this.footnotes = {}, this.usedFootnotes = [], this.attributeBlocks = !1, this.googleCodePrettify = !1, this.highlightJs = !1, this.tableClass = "", this.tabWidth = 4
            }, r.Extra.init = function (e, t) {
                var n = new r.Extra,
                    i = [],
                    a = [],
                    u = [],
                    l = ["unHashExtraBlocks"];
                return t = t || {}, t.extensions = t.extensions || ["all"], o(t.extensions, "all") && (t.extensions = ["tables", "fenced_code_gfm", "def_list", "attr_list", "footnotes", "smartypants", "strikethrough", "newlines"]), a.push("wrapHeaders"), o(t.extensions, "attr_list") && (i.push("hashFcbAttributeBlocks"), a.push("hashHeaderAttributeBlocks"), l.push("applyAttributeBlocks"), n.attributeBlocks = !0), o(t.extensions, "fenced_code_gfm") && (a.push("fencedCodeBlocks"), i.push("fencedCodeBlocks")), o(t.extensions, "tables") && a.push("tables"), o(t.extensions, "def_list") && a.push("definitionLists"), o(t.extensions, "footnotes") && (i.push("stripFootnoteDefinitions"), a.push("doFootnotes"), l.push("printFootnotes")), o(t.extensions, "smartypants") && l.push("runSmartyPants"), o(t.extensions, "strikethrough") && u.push("strikethrough"), o(t.extensions, "newlines") && u.push("newlines"), e.hooks.chain("postNormalization", function (e) {
                    return n.doTransform(i, e) + "\n"
                }), e.hooks.chain("preBlockGamut", function (e, t) {
                    return n.blockGamutHookCallback = t, e = f(e), e = n.doTransform(a, e) + "\n", e = c(e)
                }), e.hooks.chain("postSpanGamut", function (e) {
                    return n.doTransform(u, e)
                }), n.previousPostConversion = e.hooks.postConversion, e.hooks.chain("postConversion", function (e) {
                    return e = n.doTransform(l, e), n.hashBlocks = [], n.footnotes = {}, n.usedFootnotes = [], e
                }), "highlighter" in t && (n.googleCodePrettify = "prettify" === t.highlighter, n.highlightJs = "highlight" === t.highlighter), "table_class" in t && (n.tableClass = t.table_class), n.converter = e, n
            }, r.Extra.prototype.doTransform = function (e, t) {
                for (var n = 0; n < e.length; n++) t = this[e[n]](t);
                return t
            }, r.Extra.prototype.hashExtraBlock = function (e) {
                return "\n<p>~X" + (this.hashBlocks.push(e) - 1) + "X</p>\n"
            }, r.Extra.prototype.hashExtraInline = function (e) {
                return "~X" + (this.hashBlocks.push(e) - 1) + "X"
            }, r.Extra.prototype.unHashExtraBlocks = function (e) {
                function t() {
                    var r = !1;
                    e = e.replace(/(?:<p>)?~X(\d+)X(?:<\/p>)?/g, function (e, t) {
                        r = !0;
                        var o = parseInt(t, 10);
                        return n.hashBlocks[o]
                    }), r === !0 && t()
                }
                var n = this;
                return t(), e
            }, r.Extra.prototype.wrapHeaders = function (e) {
                function t(e) {
                    return "\n" + e + "\n"
                }
                return e = e.replace(/^.+[ \t]*\n=+[ \t]*\n+/gm, t), e = e.replace(/^.+[ \t]*\n-+[ \t]*\n+/gm, t), e = e.replace(/^\#{1,6}[ \t]*.+?[ \t]*\#*\n+/gm, t)
            };
            var b = "\\{[ \\t]*((?:[#.][-_:a-zA-Z0-9]+[ \\t]*)+)\\}",
                v = new RegExp("^(#{1,6}.*#{0,6})[ \\t]+" + b + "[ \\t]*(?:\\n|0x03)", "gm"),
                y = new RegExp("^(.*)[ \\t]+" + b + "[ \\t]*\\n(?=[\\-|=]+\\s*(?:\\n|0x03))", "gm"),
                A = new RegExp("^(```[ \\t]*[^{\\s]*)[ \\t]+" + b + "[ \\t]*\\n(?=([\\s\\S]*?)\\n```[ \\t]*(\\n|0x03))", "gm");
            r.Extra.prototype.hashHeaderAttributeBlocks = function (e) {
                function t(e, t, r) {
                    return "<p>~XX" + (n.hashBlocks.push(r) - 1) + "XX</p>\n" + t + "\n"
                }
                var n = this;
                return e = e.replace(v, t), e = e.replace(y, t)
            }, r.Extra.prototype.hashFcbAttributeBlocks = function (e) {
                function t(e, t, r) {
                    return "<p>~XX" + (n.hashBlocks.push(r) - 1) + "XX</p>\n" + t + "\n"
                }
                var n = this;
                return e.replace(A, t)
            }, r.Extra.prototype.applyAttributeBlocks = function (e) {
                var t = this,
                    n = new RegExp('<p>~XX(\\d+)XX</p>[\\s]*(?:<(h[1-6]|pre)(?: +class="(\\S+)")?(>[\\s\\S]*?</\\2>))', "gm");
                return e = e.replace(n, function (e, n, r, o, i) {
                    if (!r) return "";
                    for (var u = parseInt(n, 10), l = t.hashBlocks[u], d = l.match(/#[^\s#.]+/g) || [], s = d[0] ? ' id="' + d[0].substr(1, d[0].length - 1) + '"' : "", f = l.match(/\.[^\s#.]+/g) || [], c = 0; c < f.length; c++) f[c] = f[c].substr(1, f[c].length - 1);
                    var p = "";
                    return o && (f = a(f, [o])), f.length > 0 && (p = ' class="' + f.join(" ") + '"'), "<" + r + s + p + i
                })
            }, r.Extra.prototype.tables = function (t) {
                function n(t, n, o, i, a, u) {
                    n = n.replace(/^ *[|]/m, ""), o = o.replace(/^ *[|]/m, ""), i = i.replace(/^ *[|]/gm, ""), n = n.replace(/[|] *$/m, ""), o = o.replace(/[|] *$/m, ""), i = i.replace(/[|] *$/gm, "");
                    for (var l = o.split(/ *[|] */), s = [], f = 0; f < l.length; f++) {
                        var c = l[f];
                        s[f] = c.match(/^ *-+: *$/m) ? ' align="right"' : c.match(/^ *:-+: *$/m) ? ' align="center"' : c.match(/^ *:-+ *$/m) ? ' align="left"' : ""
                    }
                    var p = n.split(/ *[|] */),
                        g = p.length,
                        m = r.tableClass ? ' class="' + r.tableClass + '"' : "",
                        h = ["<table", m, ">\n", "<thead>\n", "<tr>\n"].join("");
                    for (f = 0; g > f; f++) {
                        var b = d(e(p[f]), r);
                        h += ["  <th", s[f], ">", b, "</th>\n"].join("")
                    }
                    h += "</tr>\n</thead>\n";

                    var v = i.split("\n");
                    var re_row = /!rowspan *= *(\d+)/;
                    var re_col = /!colspan *= *(\d+)/;

                    for (f = 0; f < v.length; f++) if (!v[f].match(/^\s*$/)) {
                        var y = v[f].split(/ *[|] */);
                        var x = 0;
                        for (h += "<tr>\n", x = 0; g > x && x < y.length; x++) {
                            var T = d(e(y[x]), r);

                            var rowspans = T.match(re_row);
                            var colspans = T.match(re_col);
                            var rs = "";
                            var cs = "";
                            if (rowspans != null) {
                                rs = " rowspan='" + rowspans[1] + "' ";
                                T = T.replace(re_row, '');
                            }
                            if (colspans != null) {
                                cs = " colspan='" + colspans[1] + "'";
                                T = T.replace(re_col, '');
                            }

                            h += ["  <td", s[x], rs, cs, ">", T, "</td>\n"].join("");
                        }
                        h += "</tr>\n"
                    }
                    return h += "</table>\n", r.hashExtraBlock(h)
                }
                var r = this,
                    o = new RegExp(["^", "[ ]{0,3}", "[|]", "(.+)\\n", "[ ]{0,3}", "[|]([ ]*[-:]+[-| :]*)\\n", "(", "(?:[ ]*[|].*\\n?)*", ")", "(?:\\n|$)"].join(""), "gm"),
                    i = new RegExp(["^", "[ ]{0,3}", "(\\S.*[|].*)\\n", "[ ]{0,3}", "([-:]+[ ]*[|][-| :]*)\\n", "(", "(?:.*[|].*\\n?)*", ")", "(?:\\n|$)"].join(""), "gm");
                return t = t.replace(o, n), t = t.replace(i, n)
            }, r.Extra.prototype.stripFootnoteDefinitions = function (e) {
                var t = this;
                return e = e.replace(/\n[ ]{0,3}\[\^(.+?)\]\:[ \t]*\n?([\s\S]*?)\n{1,2}((?=\n[ ]{0,3}\S)|$)/g, function (e, n, r) {
                    return n = g(n), r += "\n", r = r.replace(/^[ ]{0,3}/g, ""), t.footnotes[n] = r, "\n"
                })
            }, r.Extra.prototype.doFootnotes = function (e) {
                var t = this;
                if (t.isConvertingFootnote === !0) return e;
                var n = 0;
                return e = e.replace(/\[\^(.+?)\]/g, function (e, r) {
                    var o = g(r),
                        i = t.footnotes[o];
                    if (void 0 === i) return e;
                    n++, t.usedFootnotes.push(o);
                    var a = '<a href="#fn_' + o + '" id="fnref_' + o + '" title="See footnote" class="footnote">' + n + "</a>";
                    return t.hashExtraInline(a)
                })
            }, r.Extra.prototype.printFootnotes = function (e) {
                var t = this;
                if (0 === t.usedFootnotes.length) return e;
                e += '\n\n<div class="footnotes">\n<hr>\n<ol>\n\n';
                for (var n = 0; n < t.usedFootnotes.length; n++) {
                    var r = t.usedFootnotes[n],
                        o = t.footnotes[r];
                    t.isConvertingFootnote = !0;
                    var i = d(o, t);
                    delete t.isConvertingFootnote, e += '<li id="fn_' + r + '">' + i + ' <a href="#fnref_' + r + '" title="Return to article" class="reversefootnote">&#8617;</a></li>\n\n'
                }
                return e += "</ol>\n</div>"
            }, r.Extra.prototype.fencedCodeBlocks = function (e) {
                function t(e) {
                    return e = e.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = e.replace(/~D/g, "$$"), e = e.replace(/~T/g, "~")
                }
                var n = this;
                return e = e.replace(/(?:^|\n)```[ \t]*(\S*)[ \t]*\n([\s\S]*?)\n```[ \t]*(?=\n)/g, function (e, r, o) {
                    var i = r,
                        a = o,
                        u = n.googleCodePrettify ? ' class="prettyprint linenums"' : "",
                        l = "";
                    i && (l = n.googleCodePrettify || n.highlightJs ? ' class="language-' + i + '"' : ' class="' + i + '"');
                    var d = ["<pre", u, "><code", l, ">", t(a), "</code></pre>"].join("");
                    return n.hashExtraBlock(d)
                })
            }, r.Extra.prototype.educatePants = function (e) {
                var t = this,
                    n = "",
                    r = 0;
                e.replace(/(?:<!--[\s\S]*?-->)|(<)([a-zA-Z1-6]+)([^\n]*?>)([\s\S]*?)(<\/\2>)/g, function (o, i, a, u, l, d, s) {
                    var f = e.substring(r, s);
                    return n += t.applyPants(f), t.smartyPantsLastChar = n.substring(n.length - 1), r = s + o.length, i ? (/code|kbd|pre|script|noscript|iframe|math|ins|del|pre/i.test(a) ? t.smartyPantsLastChar = l.substring(l.length - 1) : l = t.educatePants(l), void(n += i + a + u + l + d)) : void(n += o)
                });
                var o = e.substring(r);
                return n += t.applyPants(o), t.smartyPantsLastChar = n.substring(n.length - 1), n
            }, r.Extra.prototype.applyPants = function (e) {
                return e = e.replace(/---/g, "&#8212;").replace(/--/g, "&#8211;"), e = e.replace(/\.\.\./g, "&#8230;").replace(/\.\s\.\s\./g, "&#8230;"), e = e.replace(/``/g, "&#8220;").replace(/''/g, "&#8221;"), /^'$/.test(e) ? /\S/.test(this.smartyPantsLastChar) ? "&#8217;" : "&#8216;" : /^"$/.test(e) ? /\S/.test(this.smartyPantsLastChar) ? "&#8221;" : "&#8220;" : (e = e.replace(/^'(?=[!"#\$\%'()*+,\-.\/:;<=>?\@\[\\]\^_`{|}~]\B)/, "&#8217;"),
                e = e.replace(/^"(?=[!"#\$\%'()*+,\-.\/:;<=>?\@\[\\]\^_`{|}~]\B)/, "&#8221;"), e = e.replace(/"'(?=\w)/g, "&#8220;&#8216;"), e = e.replace(/'"(?=\w)/g, "&#8216;&#8220;"), e = e.replace(/'(?=\d{2}s)/g, "&#8217;"), e = e.replace(/(\s|&nbsp;|--|&[mn]dash;|&\#8211;|&\#8212;|&\#x201[34];)'(?=\w)/g, "$1&#8216;"), e = e.replace(/([^\s\[\{\(\-])'/g, "$1&#8217;"), e = e.replace(/'(?=\s|s\b)/g, "&#8217;"), e = e.replace(/'/g, "&#8216;"), e = e.replace(/(\s|&nbsp;|--|&[mn]dash;|&\#8211;|&\#8212;|&\#x201[34];)"(?=\w)/g, "$1&#8220;"), e = e.replace(/([^\s\[\{\(\-])"/g, "$1&#8221;"), e = e.replace(/"(?=\s)/g, "&#8221;"), e = e.replace(/"/gi, "&#8220;"))
            }, r.Extra.prototype.runSmartyPants = function (e) {
                return this.smartyPantsLastChar = "", e = this.educatePants(e), e = e.replace(/(<([a-zA-Z1-6]+)\b([^\n>]*?)(\/)?>)/g, m)
            }, r.Extra.prototype.definitionLists = function (t) {
                var n = new RegExp(["(\\x02\\n?|\\n\\n)", "(?:", "(", "(", "[ ]{0,3}", "((?:[ \\t]*\\S.*\\n)+)", "\\n?", "[ ]{0,3}:[ ]+", ")", "([\\s\\S]+?)", "(", "(?=\\0x03)", "|", "(?=", "\\n{2,}", "(?=\\S)", "(?!", "[ ]{0,3}", "(?:\\S.*\\n)+?", "\\n?", "[ ]{0,3}:[ ]+", ")", "(?!", "[ ]{0,3}:[ ]+", ")", ")", ")", ")", ")"].join(""), "gm"),
                    r = this;
                return t = u(t), t = t.replace(n, function (t, n, o) {
                    var i = e(r.processDefListItems(o));
                    return i = "<dl>\n" + i + "\n</dl>", n + r.hashExtraBlock(i) + "\n\n"
                }), l(t)
            }, r.Extra.prototype.processDefListItems = function (r) {
                var o = this,
                    i = new RegExp(["(\\x02\\n?|\\n\\n+)", "(", "[ ]{0,3}", "(?![:][ ]|[ ])", "(?:\\S.*\\n)+?", ")", "(?=\\n?[ ]{0,3}:[ ])"].join(""), "gm"),
                    a = new RegExp(["\\n(\\n+)?", "(", "[ ]{0,3}", "[:][ ]+", ")", "([\\s\\S]+?)", "(?=\\n*", "(?:", "\\n[ ]{0,3}[:][ ]|", "<dt>|\\x03", ")", ")"].join(""), "gm");
                return r = u(r), r = r.replace(/\n{2,}(?=\\x03)/, "\n"), r = r.replace(i, function (t, n, r) {
                    for (var i = e(r).split("\n"), a = "", u = 0; u < i.length; u++) {
                        var l = i[u];
                        l = d(e(l), o), a += "\n<dt>" + l + "</dt>"
                    }
                    return a + "\n"
                }), r = r.replace(a, function (e, r, i, a) {
                    return r || a.match(/\n{2,}/) ? (a = Array(i.length + 1).join(" ") + a, a = n(a) + "\n\n", a = "\n" + s(a, o) + "\n") : (a = t(a), a = d(n(a), o)), "\n<dd>" + a + "</dd>\n"
                }), l(r)
            }, r.Extra.prototype.strikethrough = function (e) {
                return e.replace(/([\W_]|^)~T~T(?=\S)([^\r]*?\S[\*_]*)~T~T([\W_]|$)/g, "$1<del>$2</del>$3")
            }, r.Extra.prototype.newlines = function (e) {
                return e.replace(/(<(?:br|\/li)>)?\n/g, function (e, t) {
                    return t ? e : " <br>\n"
                })
            }
        }(), n["default"] = r.Extra, t.exports = n["default"]
    }, {}],
    17: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./../common/env"),
            i = r(o),
            a = e("./../common/const"),
            u = (r(a), e("./../common/utils")),
            l = r(u),
            d = e("./../common/xss"),
            s = r(d),
            f = e("./../common/dependLoader"),
            c = r(f),
            p = e("./Markdown.Converter"),
            g = r(p),
            m = e("./Markdown.Extra"),
            h = r(m),
            b = !1,
            v = "#wizToc",
            y = {
                markdown: function () {
                    x.Utils.appendJsCode(x.Document, "prettyPrint();", "text/javascript"), x.tocRender(), x.flowRender(), x.sequenceRender()
                },
                mathJax: function () {}
            }, A = {
                init: function () {
                    return x.Win = i["default"].win, x.Document = i["default"].doc, x.Dependency = i["default"].dependency, A
                },
                markdown: function (e) {
                    e && (x.callback.markdown = x.addCb(y.markdown, e.markdown), x.callback.mathJax = x.addCb(y.mathJax, e.mathJax)), c["default"].loadCss(x.Document, x.getDependcyFiles("css", "markdown")), c["default"].loadJs(x.Document, x.getDependcyFiles("js", "markdown"), function () {
                        x.markdownConvert({}), b && x.mathJaxRender()
                    })
                },
                mathJax: function () {
                    x.mathJaxRender()
                }
            }, x = {
                Utils: l["default"],
                Win: null,
                Document: null,
                Dependency: null,
                callback: {
                    markdown: null,
                    mathJax: null
                },
                getDependcyFiles: function (e, t) {
                    var n, r, o, i, a, u, l, d = [];
                    for (n = 0, r = x.Dependency[e][t].length; r > n; n++) if (o = x.Dependency[e][t][n], "css" == e) d.push(x.Dependency.files[e][o]);
                    else {
                        for (l = [], i = 0, a = o.length; a > i; i++) u = o[i], l.push(x.Dependency.files[e][u]);
                        d.push(l)
                    }
                    return d
                },
                addCb: function (e, t) {
                    return t ? function () {
                        e(), t()
                    } : e
                },
                cb: function (e, t) {
                    e && e.apply(this, t ? t : [])
                },
                getBodyTxt: function (e) {
                    var t = e.innerText;
                    return t || (t = x.Utils.getInnerText($body[0])), t.replace(/\u00a0/g, " ")
                },
                markdownConvert: function (e) {
                    function t(e) {
                        return e = e.replace(/@@(\d+)@@/g, function (e, t) {
                            return l[t]
                        }), l = null, e
                    }
                    function n(e, t) {
                        for (var n = u.slice(e, t + 1).join("").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); t > e;) u[t] = "", t--;
                        u[e] = "@@" + l.length + "@@", l.push(n), o = i = a = null
                    }
                    function r(e) {
                        o = i = a = null, l = [], u = e.replace(/\r\n?/g, "\n").split(s);
                        for (var t = 1, r = u.length; r > t; t += 2) {
                            var f = u[t];
                            "@" === f.charAt(0) ? (u[t] = "@@" + l.length + "@@", l.push(f)) : o ? f === i ? d ? a = t : n(o, t) : f.match(/\n.*\n/) ? (a && (t = a, n(o, t)), o = i = a = null, d = 0) : "{" === f ? d++ : "}" === f && d && d-- : "$$" === f ? (o = t, i = f, d = 0) : "begin" === f.substr(1, 5) && (o = t, i = "\\end" + f.substr(6), d = 0)
                        }
                        return a && n(o, a), u.join("")
                    }
                    var o, i, a, u, l, d, s = /(\$\$?|\\(?:begin|end)\{[a-z]*\*?\}|\\[\\{}$]|[{}]|(?:\n\s*)+|@@\d+@@)/i,
                        f = $(x.Document),
                        c = e.container ? e.container : f.find("body");
                    c.addClass("markdown-body");
                    var p = new g["default"].Converter({
                        nonAsciiLetters: !0,
                        asteriskIntraWordEmphasis: !0
                    });
                    h["default"].init(p, {
                        extensions: "all",
                        highlighter: "prettify"
                    });
                    var m;
                    try {
                        x.Utils.markdownPreProcess(c[0]), m = x.tocReady(x.getBodyTxt(c[0]));
                        var v = m.replace(/\n/g, "\\n").replace(/\r\n?/g, "\n").replace(/```(.*\n)+?```/gm, "");
                        b = /(\$\$?)[^$\n]+\1/.test(v), b && (m = r(m)), m = p.makeHtml(m), b && (m = t(m)), m = x.xssFilter(m), c[0].innerHTML = m, x.cb(x.callback.markdown);
                    } catch (y) {
                        x.cb(x.callback.markdown)
                    }
                },
                tocReady: function (e) {
                    return e.replace(/(^[ ]*)\[toc\]([ ]*(\n|$))/gim, "$1[](" + v + ")$2")
                },
                tocRender: function () {
                    var e = [];
                    $("h1,h2,h3,h4,h5,h6", x.Document.body).each(function (t, n) {
                        var r = "wiz_toc_" + t,
                            o = $(n);
                        o.attr("id", r), e.push('<a class="wiz_toc ' + n.tagName.toLowerCase() + '" href="#' + r + '">' + o.text() + "</a>")
                    }), e = '<div class="wiz_toc_layer">' + e.join("<br/>") + "</div>", $("a", x.Document.body).each(function (t, n) {
                        n = $(n), n.attr("href") == v && n.before(e)
                    })
                },
                flowRender: function () {
                    var e = $(".language-flow", x.Document.body).parents("pre");
                    e.each(function (e, t) {
                        var n = "wiz-flow-" + e,
                            r = $("li", t),
                            o = "";
                        if (r.each(function (e, t) {
                            var n = $(t).text();
                            n.length > 0 && (o += n + "\n")
                        }), o.length > 0) try {
                            t.style.display = "none";
                            var a = x.Win.flowchart.parse(o),
                                u = x.Document.createElement("div");
                            if (u.id = n, t.parentNode.insertBefore(u, t), a.drawSVG(n), i["default"].client.isPhone) {
                                var l = $("svg", u);
                                l.attr("width") && l.css({
                                    "max-width": l.attr("width")
                                }).attr({
                                    height: null,
                                    width: "95%"
                                })
                            }
                        } catch (d) {
                            console.error(d)
                        }
                    })
                },
                sequenceRender: function () {
                    var e = $(".language-sequence", x.Document.body).parents("pre");
                    e.each(function (e, t) {
                        var n = "wiz-sequence-" + e,
                            r = $("li", t),
                            o = "";
                        if (r.each(function (e, t) {
                            var n = $(t).text();
                            n.length > 0 && (o += n + "\n")
                        }), o.length > 0) try {
                            t.style.display = "none";
                            var a = x.Win.Diagram.parse(o),
                                u = x.Document.createElement("div");
                            if (u.id = n, t.parentNode.insertBefore(u, t), a.drawSVG(n, {
                                theme: "simple"
                            }), i["default"].client.isPhone) {
                                var l = $("svg", u);
                                l.attr("width") && (l.get(0).setAttribute("viewBox", "0 0 " + l.attr("width") + " " + l.attr("height")), l.css({
                                    "max-width": l.attr("width")
                                }).attr({
                                    preserveAspectRatio: "xMidYMid meet",
                                    height: null,
                                    width: "95%"
                                }))
                            }
                        } catch (d) {
                            console.error(d)
                        }
                    })
                },
                mathJaxRender: function () {
                    function e() {
                        var e = 'MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.body]);';
                        x.Utils.appendJsCode(x.Document, e, "text/javascript"), x.cb(x.callback.mathJax)
                    }
                    var t = 'MathJax.Hub.Config({\r\n                            skipStartupTypeset: true,\r\n                            "HTML-CSS": {\r\n                                preferredFont: "TeX",\r\n                                availableFonts: [\r\n                                    "STIX",\r\n                                    "TeX"\r\n                                ],\r\n                                linebreaks: {\r\n                                    automatic: true\r\n                                },\r\n                                EqnChunk: 10,\r\n                                imageFont: null\r\n                            },\r\n                            tex2jax: {\r\n                                inlineMath: [["$","$"],["\\\\\\\\(","\\\\\\\\)"]],\r\n                                displayMath: [["$$","$$"],["\\\\[","\\\\]"]],\r\n                                processEscapes: true },\r\n                            TeX: {\r\n                                equationNumbers: {\r\n                                    autoNumber: "AMS"\r\n                                },\r\n                                noUndefined: {\r\n                                    attributes: {\r\n                                        mathcolor: "red",\r\n                                        mathbackground: "#FFEEEE",\r\n                                        mathsize: "90%"\r\n                                    }\r\n                                },\r\n                                Safe: {\r\n                                    allow: {\r\n                                        URLs: "safe",\r\n                                        classes: "safe",\r\n                                        cssIDs: "safe",\r\n                                        styles: "safe",\r\n                                        fontsize: "all"\r\n                                    }\r\n                                }\r\n                            },\r\n                            messageStyle: "none"\r\n                        });';
                    x.Utils.appendJsCode(x.Document, "MathJax = null", "text/javascript"), x.Utils.appendJsCode(x.Document, t, "text/x-mathjax-config"), c["default"].loadJs(x.Document, x.getDependcyFiles("js", "mathJax"), e)
                },
                xssFilter: function () {
                    if ("undefined" == typeof s["default"]) return null;
                    var e = new s["default"].FilterXSS({
                        onIgnoreTag: function (e, t, n) {
                            if (/script/gi.test(e)) return s["default"].escapeAttrValue(t);
                            if (n.isClosing) return "</" + e + ">";
                            var r = s["default"].parseAttr(t, function (t, n) {
                                return n = s["default"].safeAttrValue(e, t, n, s["default"].FilterXSS), /^on/i.test(t) ? "" : n ? t + '="' + n + '"' : t
                            });
                            return r = /^<!/i.test(t) ? "<!" + r : "<" + r, "/" === t[t.length - 2] && (r += "/"), r += ">"
                        },
                        onIgnoreTagAttr: function (e, t, n, r) {
                            return n && /^(id|class|style|data|width|height)/i.test(t) ? t + '="' + n + '"' : ""
                        },
                        safeAttrValue: function (e, t, n) {
                            if ("a" === e && "href" === t) {
                                if (/^((file|wiz(note)?):\/\/)/.test(n) || /^(#|index_files\/)/.test(n)) return s["default"].escapeAttrValue(n)
                            } else if ("src" === t && (/^(file:\/\/)/.test(n) || /^index_files\//.test(n))) return s["default"].escapeAttrValue(n);
                            return s["default"].safeAttrValue(e, t, n)
                        }
                    });
                    return function (t) {
                        return e.process(t)
                    }
                }()
            };
        n["default"] = A, t.exports = n["default"]
    }, {
        "./../common/const": 4,
        "./../common/dependLoader": 5,
        "./../common/env": 6,
        "./../common/utils": 8,
        "./../common/xss": 11,
        "./Markdown.Converter": 15,
        "./Markdown.Extra": 16
    }],
    18: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./../common/env"),
            i = r(o),
            a = e("./../common/const"),
            u = r(a),
            l = e("./../common/utils"),
            d = (r(l), e("./../domUtils/domBase")),
            s = r(d),
            f = {
                caretFocus: function () {
                    var e = i["default"].doc.getSelection(),
                        t = e.rangeCount > 0 ? e.getRangeAt(0) : null,
                        n = t ? t.getClientRects() : null,
                        r = n && n.length > 0 ? n[0] : null,
                        o = i["default"].doc.documentElement.clientHeight;
                    r && r.top < 0 ? i["default"].doc.body.scrollTop += r.top : r && r.top + r.height > o && (i["default"].doc.body.scrollTop += r.top + r.height - o), r && r.left < 0 ? i["default"].doc.body.scrollLeft += r.left : r && r.left + r.width > o && (i["default"].doc.body.scrollLeft += r.left + r.width - o)
                },
                getRangeAnchor: function (e) {
                    var t = i["default"].doc.getSelection(),
                        n = t.getRangeAt(0),
                        r = e ? n.startContainer : n.endContainer,
                        o = e ? n.startOffset : n.endOffset;
                    return t.isCollapsed || e ? 3 === r.nodeType && o < r.nodeValue.length ? r : 3 === r.nodeType ? s["default"].getNextNode(r, !1, null) : 0 === r.childNodes.length ? r : o == r.childNodes.length ? s["default"].getNextNode(r.childNodes[o - 1], !1, null) : s["default"].getFirstDeepChild(r.childNodes[o]) : 3 === r.nodeType && o > 0 ? r : 3 === r.nodeType ? s["default"].getPreviousNode(r, !1, null) : o > 0 ? s["default"].getLastDeepChild(r.childNodes[o - 1]) : s["default"].getPreviousNode(r, !1, null)
                },
                getRangeDomList: function () {
                    var e = i["default"].doc.getSelection(),
                        t = e.getRangeAt(0),
                        n = t.startContainer,
                        r = t.startOffset,
                        o = t.endContainer,
                        a = t.endOffset;
                    return s["default"].getDomListA2B({
                        startDom: n,
                        startOffset: r,
                        endDom: o,
                        endOffset: a
                    })
                },
                getRangeParentRoot: function () {
                    var e, t, n, r = i["default"].doc.getSelection();
                    return 0 === r.rangeCount ? null : (e = r.getRangeAt(0), t = e.startContainer, n = e.endContainer, s["default"].getParentRoot([t, n]))
                },
                isRangeEdge: function (e) {
                    var t = {
                        isStart: !1,
                        isEnd: !1
                    }, n = i["default"].doc.getSelection();
                    if (0 !== n.rangeCount) {
                        var r = n.getRangeAt(0);
                        t.isCollapsed = n.isCollapsed, t.startDom = r.startContainer, t.startOffset = r.startOffset, t.endDom = r.endContainer, t.endOffset = r.endOffset;
                        var o, a;
                        return 1 == t.startDom.nodeType && t.startOffset < t.startDom.childNodes.length ? o = s["default"].getFirstDeepChild(t.startDom.childNodes[t.startOffset]) : 1 == t.startDom.nodeType && (o = s["default"].getNextNode(t.startDom.childNodes[t.startOffset - 1], !1, null)), 1 == t.endDom.nodeType && t.endOffset > 0 ? a = s["default"].getLastDeepChild(t.endDom.childNodes[t.endOffset - 1]) : 1 == t.endDom.nodeType && (a = s["default"].getPreviousNode(t.endDom, !1, null)), t.isStart = t.startDom == e || t.startDom == o, t.isEnd = t.endDom == e || t.endDom == a, t
                    }
                },
                selectElementContents: function (e) {
                    var t = i["default"].doc.createRange();
                    t.selectNodeContents(e);
                    var n = window.getSelection();
                    n.removeAllRanges(), n.addRange(t)
                },
                selectCharIncludeFillChar: function (e) {
                    var t, n, r, o, a = i["default"].doc.getSelection(),
                        l = a.getRangeAt(0),
                        d = e ? "backward" : "forward";
                    if (1 === l.startContainer.nodeType) {
                        if (t = f.getRangeAnchor(!1), l.startContainer == t && s["default"].isTag(t, "br") && s["default"].isEmptyDom(t.parentNode)) return void(t.parentNode.nextSibling ? f.setRange(t.parentNode, 0, t.parentNode.nextSibling, 0) : (a.modify("move", "forward", "character"), a.modify("extend", "backward", "character"), t.nextSibling && a.modify("extend", "backward", "character")));
                        s["default"].isTag(t, "br") && a.modify("extend", d, "character")
                    }
                    a.modify("extend", d, "character"), l = a.getRangeAt(0), o = l.toString(), t = f.getRangeAnchor(e), t && (n = e && t == l.startContainer ? l.startOffset : e || t != l.endContainer ? -1 : l.endOffset, r = 3 === t.nodeType && n > 0 && n < t.nodeValue.length ? t : e ? s["default"].getPreviousNode(t, !1, null) : s["default"].getNextNode(t, !1, null), 0 === o.length ? t && !s["default"].isSelfClosingTag(t) && r && (1 !== r.nodeType || 1 === r.nodeType && s["default"].isSelfClosingTag(r)) && a.modify("extend", d, "character") : o.indexOf(u["default"].FILL_CHAR) > -1 && "" === o.replace(u["default"].FILL_CHAR_REG, "") && a.modify("extend", d, "character"))
                },
                setRange: function (e, t, n, r) {
                    if (e || n) {
                        var o = s["default"].getDomEndOffset(e),
                            a = s["default"].getDomEndOffset(n);
                        0 > t ? t = 0 : t > o && (t = o), 0 > r ? r = s["default"].getDomEndOffset(n) : r > a && (r = a);
                        var u = i["default"].doc.getSelection();
                        e || (e = i["default"].doc.body, t = 0), u.collapse(e, t), n && u.extend(n, r)
                    }
                }
            };
        n["default"] = f, t.exports = n["default"]
    }, {
        "./../common/const": 4,
        "./../common/env": 6,
        "./../common/utils": 8,
        "./../domUtils/domBase": 12
    }],
    19: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, i = e("./../common/env"),
            a = r(i),
            u = e("./../common/const"),
            l = r(u),
            d = e("./../common/utils"),
            s = r(d),
            f = e("./../domUtils/domExtend"),
            c = r(f),
            p = e("./rangeBase"),
            g = r(p);
        g["default"].backupCaret = function () {
            var e = a["default"].doc.getSelection();
            if (0 == e.rangeCount) {
                if (o) return !0;
                if (a["default"].doc.body.focus(), e = a["default"].doc.getSelection(), 0 == e.rangeCount) return !1
            }
            return o = e.getRangeAt(0), !0
        }, g["default"].restoreCaret = function () {
            if (!o) return !1;
            var e = a["default"].doc.getSelection();
            return 0 == e.rangeCount && a["default"].doc.body.focus(), e.removeAllRanges(), e.addRange(o), o = null, !0
        }, g["default"].modifyCaretStyle = function (e, t) {
            var n, r, o, i, u = a["default"].doc.getSelection(),
                d = u.focusNode,
                f = !0;
            3 == d.nodeType && (d = d.parentNode);
            for (r in e) e.hasOwnProperty(r) && "string" == typeof r && (o = e[r], d.style[r] !== o && (f = !1));
            if (!f) {
                c["default"].isTag(d, "span") && s["default"].isEmpty(d.innerHTML) ? (c["default"].modifyStyle(d, e, t), i = d) : (n = u.getRangeAt(0), n.deleteContents(), i = c["default"].createSpan(), i.innerHTML = l["default"].FILL_CHAR, n.insertNode(i), c["default"].modifyStyle(i, e, t));
                var p = d.parentNode ? d.parentNode : d;
                c["default"].clearChild(p, [i]), g["default"].setRange(i.childNodes[0], 1, i.childNodes[0], 1)
            }
        }, g["default"].modifyRangeStyle = function (e, t) {
            var n, r, o;
            if (n = g["default"].getRangeDomList(), r = n.list, o = r.length, 0 !== o) {
                c["default"].modifyNodesStyle(r, e, t);
                var i, a, u, l, d = [];
                for (i = 0, a = o; a > i; i++) u = r[i].parentNode, u && d.indexOf(u) < 0 && d.push(u);
                u = c["default"].getParentRoot(d), l = c["default"].getWizAmendParent(u), u = l ? l.parentNode : u, c["default"].clearChild(u, [n.startDomBak, n.endDomBak]);
                var s = !n.startDom.parentNode,
                    f = !n.endDom.parentNode,
                    p = c["default"].isSelfClosingTag(n.endDom);
                s && c["default"].isSelfClosingTag(n.startDomBak) && (n.startDomBak = c["default"].getNextNode(n.startDomBak, !1, n.endDomBak), n.startOffsetBak = 0), g["default"].setRange(s ? n.startDomBak : n.startDom, s ? n.startOffsetBak : n.startOffset, f || p ? n.endDomBak : n.endDom, f || p ? n.endOffsetBak : n.endOffset)
            }
        }, g["default"].modifySelectionDom = function (e, t) {
            var n = a["default"].doc.getSelection();
            n.isCollapsed ? g["default"].modifyCaretStyle(e, t) : g["default"].modifyRangeStyle(e, t)
        }, n["default"] = g["default"], t.exports = n["default"]
    }, {
        "./../common/const": 4,
        "./../common/env": 6,
        "./../common/utils": 8,
        "./../domUtils/domExtend": 13,
        "./rangeBase": 18
    }],
    20: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function o(e, t) {
            var n, r, o = document.getElementsByTagName(e);
            for (n = 0; n < o.length; n++) r = o[n], r.readOnly = t
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../common/env"),
            a = (r(i), e("../common/const")),
            u = (r(a), e("../common/utils")),
            l = (r(u), e("../domUtils/domExtend")),
            d = (r(l), e("../common/wizStyle")),
            s = r(d),
            f = e("./readerEvent"),
            c = r(f),
            p = {
                init: function () {
                    s["default"].insertTmpReaderStyle(), c["default"].init(), o("input", !0), o("textarea", !0)
                },
                insertDefaultStyle: function (e, t) {
                    s["default"].insertDefaultStyle(e, t)
                }
            };
        n["default"] = p, t.exports = n["default"]
    }, {
        "../common/const": 4,
        "../common/env": 6,
        "../common/utils": 8,
        "../common/wizStyle": 9,
        "../domUtils/domExtend": 13,
        "./readerEvent": 21
    }],
    21: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../common/env"),
            i = r(o),
            a = e("../common/const"),
            u = r(a),
            l = e("../common/utils"),
            d = r(l),
            s = e("../domUtils/domExtend"),
            f = r(s),
            c = e("../imgUtils/imgUtils"),
            p = r(c),
            g = {
                init: function () {
                    (i["default"].client.type.isIOS || i["default"].client.type.isAndroid) && g.bindTouch()
                },
                bindTouch: function () {
                    i["default"].doc.addEventListener("click", m.onTouch)
                },
                unbind: function () {
                    i["default"].doc.removeEventListener("click", m.onTouch)
                }
            }, m = {
                onTouch: function (e) {
                    var t = e.target;
                    if (t && f["default"].isTag(t, "img") && !(t.className.indexOf("wiz-todo") > -1)) {
                        var n = f["default"].getParentByFilter(t, function (e) {
                            return e && f["default"].isTag(e, "a") && /^(http|https|wiz|wiznote|wiznotecmd):/.test(e.getAttribute("href"))
                        }, !0);
                        if (!n) return i["default"].client.sendCmdToWiznote(u["default"].EVENT.wizReaderClickImg, {
                            src: t.src,
                            imgList: i["default"].client.type.isAndroid ? p["default"].getAll(!0).join(",") : null
                        }), d["default"].stopEvent(e), !1
                    }
                }
            };
        n["default"] = g, t.exports = n["default"]
    }, {
        "../common/const": 4,
        "../common/env": 6,
        "../common/utils": 8,
        "../domUtils/domExtend": 13,
        "../imgUtils/imgUtils": 14
    }],
    22: [function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var o = e("./common/env"),
            i = r(o),
            a = e("./common/const"),
            u = r(a),
            l = e("./common/lang"),
            d = (r(l), e("./common/utils")),
            s = (r(d), e("./domUtils/domExtend")),
            f = (r(s), e("./imgUtils/imgUtils")),
            c = r(f),
            p = e("./amend/amendInfo"),
            g = r(p),
            m = e("./amend/amendUser"),
            h = r(m),
            b = e("./reader/base"),
            v = r(b),
            y = e("./markdown/markdownRender"),
            A = r(y),
            x = {
                init: function (e) {
                    i["default"].setDoc(e.document || window.document), l.initLang(e.lang), i["default"].client.setType(e.clientType), i["default"].dependency.files.init(e.dependencyCss, e.dependencyJs), v["default"].init(), A["default"].init(), e.noAmend || (h["default"].initUser(e.userInfo), h["default"].setUsersData(e.usersData), x.amendInfo.on())
                },
                insertDefaultStyle: function (e, t) {
                    v["default"].insertDefaultStyle(e, t)
                },
                markdown: function () {
                    A["default"].markdown({
                        markdown: function () {
                            i["default"].client.sendCmdToWiznote(u["default"].EVENT.wizMarkdownRender)
                        }
                    })
                },
                mathJax: function () {
                    A["default"].mathJax()
                },
                amendInfo: {
                    on: function () {
                        g["default"].init({
                            readonly: !0
                        }, {
                            onAccept: null,
                            onRefuse: null
                        })
                    },
                    off: function () {
                        g["default"].remove()
                    }
                },
                img: {
                    getAll: function (e) {
                        return c["default"].getAll(e).join(",")
                    }
                }
            };
        window.WizReader = x
    }, {
        "./amend/amendInfo": 1,
        "./amend/amendUser": 2,
        "./common/const": 4,
        "./common/env": 6,
        "./common/lang": 7,
        "./common/utils": 8,
        "./domUtils/domExtend": 13,
        "./imgUtils/imgUtils": 14,
        "./markdown/markdownRender": 17,
        "./reader/base": 20
    }]
}, {}, [22]);
