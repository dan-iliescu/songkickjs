var widget = (function (t) {
  var o = {};
  function r(e) {
    if (o[e]) return o[e].exports;
    var n = (o[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  return (
    (r.m = t),
    (r.c = o),
    (r.d = function (e, n, t) {
      r.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (n, e) {
      if ((1 & e && (n = r(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var o in n)
          r.d(
            t,
            o,
            function (e) {
              return n[e];
            }.bind(null, o)
          );
      return t;
    }),
    (r.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(n, "a", n), n;
    }),
    (r.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (r.p = "dist/"),
    r((r.s = 0))
  );
})({
  0: function (e, n, t) {
    t("AP8v"), t("ttiD"), (e.exports = t("xDiN"));
  },
  AP8v: function (e, n) {
    function B(e) {
      return (B =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    !(function (h, u, p, m, d, f) {
      var s,
        l,
        g,
        v,
        y,
        w = this,
        k = Math.floor(1e4 * Math.random()),
        b = Function.prototype,
        _ = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
        t = /[\-\w]+\/\.\.\//,
        o = /([^:])\/\//g,
        O = "",
        x = {},
        n = h.easyXDM,
        S = "easyXDM_",
        M = !1;
      function T(e, n) {
        var t = B(e[n]);
        return "function" == t || !("object" != t || !e[n]) || "unknown" == t;
      }
      function N() {
        var e,
          n = "Shockwave Flash",
          t = "application/x-shockwave-flash";
        if (!R(navigator.plugins) && "object" == B(navigator.plugins[n])) {
          var o = navigator.plugins[n].description;
          o &&
            !R(navigator.mimeTypes) &&
            navigator.mimeTypes[t] &&
            navigator.mimeTypes[t].enabledPlugin &&
            (l = o.match(/\d+/g));
        }
        if (!l)
          try {
            (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")),
              (l = Array.prototype.slice.call(
                e.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),
                1
              )),
              (e = null);
          } catch (e) {}
        if (!l) return !1;
        var r = parseInt(l[0], 10),
          a = parseInt(l[1], 10);
        return (g = 9 < r && 0 < a), !0;
      }
      if (T(h, "addEventListener"))
        (v = function (e, n, t) {
          e.addEventListener(n, t, !1);
        }),
          (y = function (e, n, t) {
            e.removeEventListener(n, t, !1);
          });
      else {
        if (!T(h, "attachEvent")) throw new Error("Browser not supported");
        (v = function (e, n, t) {
          e.attachEvent("on" + n, t);
        }),
          (y = function (e, n, t) {
            e.detachEvent("on" + n, t);
          });
      }
      var e,
        r = !1,
        a = [];
      function i() {
        if (!r) {
          r = !0;
          for (var e = 0; e < a.length; e++) a[e]();
          a.length = 0;
        }
      }
      if (
        !(r =
          "readyState" in u
            ? "complete" == (e = u.readyState) ||
              (~navigator.userAgent.indexOf("AppleWebKit/") &&
                ("loaded" == e || "interactive" == e))
            : !!u.body)
      ) {
        if (T(h, "addEventListener")) v(u, "DOMContentLoaded", i);
        else if (
          (v(u, "readystatechange", function () {
            "complete" == u.readyState && i();
          }),
          u.documentElement.doScroll && h === top)
        ) {
          !(function n() {
            if (!r) {
              try {
                u.documentElement.doScroll("left");
              } catch (e) {
                return void m(n, 1);
              }
              i();
            }
          })();
        }
        v(h, "load", i);
      }
      function I(e, n) {
        r
          ? e.call(n)
          : a.push(function () {
              e.call(n);
            });
      }
      function D(e) {
        return e.match(_)[3];
      }
      function P(e) {
        var n = e.toLowerCase().match(_),
          t = n[2],
          o = n[3],
          r = n[4] || "";
        return (
          (("http:" == t && ":80" == r) || ("https:" == t && ":443" == r)) &&
            (r = ""),
          t + "//" + o + r
        );
      }
      function C(e) {
        if (!(e = e.replace(o, "$1/")).match(/^(http||https):\/\//)) {
          var n = "/" === e.substring(0, 1) ? "" : p.pathname;
          "/" !== n.substring(n.length - 1) &&
            (n = n.substring(0, n.lastIndexOf("/") + 1)),
            (e = p.protocol + "//" + p.host + n + e);
        }
        for (; t.test(e); ) e = e.replace(t, "");
        return e;
      }
      function A(e, n) {
        var t = "",
          o = e.indexOf("#");
        -1 !== o && ((t = e.substring(o)), (e = e.substring(0, o)));
        var r = [];
        for (var a in n) n.hasOwnProperty(a) && r.push(a + "=" + f(n[a]));
        return (
          e + (M ? "#" : -1 == e.indexOf("?") ? "?" : "&") + r.join("&") + t
        );
      }
      var E = (function (e) {
        for (var n, t = {}, o = (e = e.substring(1).split("&")).length; o--; )
          t[(n = e[o].split("="))[0]] = d(n[1]);
        return t;
      })(/xdm_e=/.test(p.search) ? p.search : p.hash);
      function R(e) {
        return void 0 === e;
      }
      var c,
        j = function () {
          var e = {},
            n = { a: [1, 2, 3] },
            t = '{"a":[1,2,3]}';
          return "undefined" != typeof JSON &&
            "function" == typeof JSON.stringify &&
            JSON.stringify(n).replace(/\s/g, "") === t
            ? JSON
            : (Object.toJSON &&
                Object.toJSON(n).replace(/\s/g, "") === t &&
                (e.stringify = Object.toJSON),
              "function" == typeof String.prototype.evalJSON &&
                (n = t.evalJSON()).a &&
                3 === n.a.length &&
                3 === n.a[2] &&
                (e.parse = function (e) {
                  return e.evalJSON();
                }),
              e.stringify && e.parse
                ? ((j = function () {
                    return e;
                  }),
                  e)
                : null);
        };
      function F(e, n, t) {
        var o;
        for (var r in n)
          n.hasOwnProperty(r) &&
            (r in e
              ? "object" === B((o = n[r]))
                ? F(e[r], o, t)
                : t || (e[r] = n[r])
              : (e[r] = n[r]));
        return e;
      }
      function H(e) {
        var n, t, o;
        R(s) &&
          ((n = u.body.appendChild(u.createElement("form"))),
          ((t = n.appendChild(u.createElement("input"))).name = S + "TEST" + k),
          (s = t !== n.elements[t.name]),
          u.body.removeChild(n)),
          s
            ? (o = u.createElement(
                '<iframe  sandbox="allow-same-origin allow-scripts allow-popups allow-forms" name="' +
                  e.props.name +
                  '"/>'
              ))
            : ((o = u.createElement("IFRAME")).name = e.props.name),
          (o.id = o.name = e.props.name),
          delete e.props.name,
          "string" == typeof e.container &&
            (e.container = u.getElementById(e.container)),
          e.container ||
            (F(o.style, { position: "absolute", top: "-2000px", left: "0px" }),
            (e.container = u.body));
        var r = e.props.src;
        if (
          ((e.props.src = "javascript:false"),
          F(o, e.props),
          (o.border = o.frameBorder = 0),
          (o.allowTransparency = !0),
          e.container.appendChild(o),
          e.onLoad && v(o, "load", e.onLoad),
          e.usePost)
        ) {
          var a,
            i = e.container.appendChild(u.createElement("form"));
          if (
            ((i.target = o.name),
            (i.action = r),
            (i.method = "POST"),
            "object" === B(e.usePost))
          )
            for (var c in e.usePost)
              e.usePost.hasOwnProperty(c) &&
                (s
                  ? (a = u.createElement('<input name="' + c + '"/>'))
                  : ((a = u.createElement("INPUT")).name = c),
                (a.value = e.usePost[c]),
                i.appendChild(a));
          i.submit(), i.parentNode.removeChild(i);
        } else o.src = r;
        return (e.props.src = r), o;
      }
      function L(e) {
        var n,
          t = e.protocol;
        if (
          ((e.isHost = e.isHost || R(E.xdm_p)),
          (M = e.hash || !1),
          e.props || (e.props = {}),
          e.isHost)
        )
          (e.remote = C(e.remote)),
            (e.channel = e.channel || "default" + k++),
            (e.secret = Math.random().toString(16).substring(2)),
            R(t) &&
              (t =
                P(p.href) == P(e.remote)
                  ? "4"
                  : T(h, "postMessage") || T(u, "postMessage")
                  ? "1"
                  : e.swf && T(h, "ActiveXObject") && N()
                  ? "6"
                  : "Gecko" === navigator.product &&
                    "frameElement" in h &&
                    -1 == navigator.userAgent.indexOf("WebKit")
                  ? "5"
                  : e.remoteHelper
                  ? "2"
                  : "0");
        else if (
          ((e.channel = E.xdm_c.replace(/["'<>\\]/g, "")),
          (e.secret = E.xdm_s),
          (e.remote = E.xdm_e.replace(/["'<>\\]/g, "")),
          (t = E.xdm_p),
          e.acl &&
            !(function (e, n) {
              "string" == typeof e && (e = [e]);
              for (var t, o = e.length; o--; )
                if (
                  ((t = e[o]),
                  (t = new RegExp(
                    "^" == t.substr(0, 1)
                      ? t
                      : "^" +
                        t.replace(/(\*)/g, ".$1").replace(/\?/g, ".") +
                        "$"
                  )).test(n))
                )
                  return !0;
              return !1;
            })(e.acl, e.remote))
        )
          throw new Error("Access denied for " + e.remote);
        switch ((e.protocol = t)) {
          case "0":
            if (
              (F(
                e,
                {
                  interval: 100,
                  delay: 2e3,
                  useResize: !0,
                  useParent: !1,
                  usePolling: !1,
                },
                !0
              ),
              e.isHost)
            ) {
              if (!e.local) {
                for (
                  var o,
                    r = p.protocol + "//" + p.host,
                    a = u.body.getElementsByTagName("img"),
                    i = a.length;
                  i--;

                )
                  if ((o = a[i]).src.substring(0, r.length) === r) {
                    e.local = o.src;
                    break;
                  }
                e.local || (e.local = h);
              }
              var c = { xdm_c: e.channel, xdm_p: 0 };
              e.local === h
                ? ((e.usePolling = !0),
                  (e.useParent = !0),
                  (e.local =
                    p.protocol + "//" + p.host + p.pathname + p.search),
                  (c.xdm_e = e.local),
                  (c.xdm_pa = 1))
                : (c.xdm_e = C(e.local)),
                e.container && ((e.useResize = !1), (c.xdm_po = 1)),
                (e.remote = A(e.remote, c));
            } else
              F(e, {
                channel: E.xdm_c,
                remote: E.xdm_e,
                useParent: !R(E.xdm_pa),
                usePolling: !R(E.xdm_po),
                useResize: !e.useParent && e.useResize,
              });
            n = [
              new x.stack.HashTransport(e),
              new x.stack.ReliableBehavior({}),
              new x.stack.QueueBehavior({
                encode: !0,
                maxLength: 4e3 - e.remote.length,
              }),
              new x.stack.VerifyBehavior({ initiate: e.isHost }),
            ];
            break;
          case "1":
            n = [new x.stack.PostMessageTransport(e)];
            break;
          case "2":
            e.isHost && (e.remoteHelper = C(e.remoteHelper)),
              (n = [
                new x.stack.NameTransport(e),
                new x.stack.QueueBehavior(),
                new x.stack.VerifyBehavior({ initiate: e.isHost }),
              ]);
            break;
          case "3":
            n = [new x.stack.NixTransport(e)];
            break;
          case "4":
            n = [new x.stack.SameOriginTransport(e)];
            break;
          case "5":
            n = [new x.stack.FrameElementTransport(e)];
            break;
          case "6":
            l || N(), (n = [new x.stack.FlashTransport(e)]);
        }
        return (
          n.push(new x.stack.QueueBehavior({ lazy: e.lazy, remove: !0 })), n
        );
      }
      function W(e) {
        for (
          var n,
            t = {
              incoming: function (e, n) {
                this.up.incoming(e, n);
              },
              outgoing: function (e, n) {
                this.down.outgoing(e, n);
              },
              callback: function (e) {
                this.up.callback(e);
              },
              init: function () {
                this.down.init();
              },
              destroy: function () {
                this.down.destroy();
              },
            },
            o = 0,
            r = e.length;
          o < r;
          o++
        )
          F((n = e[o]), t, !0),
            0 !== o && (n.down = e[o - 1]),
            o !== r - 1 && (n.up = e[o + 1]);
        return n;
      }
      F(x, {
        version: "2.4.19.3",
        query: E,
        stack: {},
        apply: F,
        getJSONObject: j,
        whenReady: I,
        noConflict: function (e) {
          return (
            (h.easyXDM = n),
            (O = e) && (S = "easyXDM_" + O.replace(".", "_") + "_"),
            x
          );
        },
      }),
        (x.DomHelper = {
          on: v,
          un: y,
          requiresJSON: function (e) {
            var n, t;
            ("object" == B((n = h)[(t = "JSON")]) && n[t]) ||
              u.write(
                '<script type="text/javascript" src="' + e + '"></script>'
              );
          },
        }),
        (c = {}),
        (x.Fn = {
          set: function (e, n) {
            c[e] = n;
          },
          get: function (e, n) {
            if (c.hasOwnProperty(e)) {
              var t = c[e];
              return n && delete c[e], t;
            }
          },
        }),
        (x.Socket = function (t) {
          var n = W(
              L(t).concat([
                {
                  incoming: function (e, n) {
                    t.onMessage(e, n);
                  },
                  callback: function (e) {
                    t.onReady && t.onReady(e);
                  },
                },
              ])
            ),
            o = P(t.remote);
          (this.origin = P(t.remote)),
            (this.destroy = function () {
              n.destroy();
            }),
            (this.postMessage = function (e) {
              n.outgoing(e, o);
            }),
            n.init();
        }),
        (x.Rpc = function (n, e) {
          if (e.local)
            for (var t in e.local)
              if (e.local.hasOwnProperty(t)) {
                var o = e.local[t];
                "function" == typeof o && (e.local[t] = { method: o });
              }
          var r = W(
            L(n).concat([
              new x.stack.RpcBehavior(this, e),
              {
                callback: function (e) {
                  n.onReady && n.onReady(e);
                },
              },
            ])
          );
          (this.origin = P(n.remote)),
            (this.destroy = function () {
              r.destroy();
            }),
            r.init();
        }),
        (x.stack.SameOriginTransport = function (e) {
          console.log("Gotcha");
          //   var n, t, o, r;
          //   return (n = {
          //     outgoing: function (e, n, t) {
          //       o(e), t && t();
          //     },
          //     destroy: function () {
          //       t && (t.parentNode.removeChild(t), (t = null));
          //     },
          //     onDOMReady: function () {
          //       (r = P(e.remote)),
          //         e.isHost
          //           ? (F(e.props, {
          //               src: A(e.remote, {
          //                 xdm_e: p.protocol + "//" + p.host + p.pathname,
          //                 xdm_c: e.channel,
          //                 xdm_p: 4,
          //               }),
          //               name: S + e.channel + "_provider",
          //             }),
          //             (t = H(e)),
          //             x.Fn.set(e.channel, function (e) {
          //               return (
          //                 (o = e),
          //                 m(function () {
          //                   n.up.callback(!0);
          //                 }, 0),
          //                 function (e) {
          //                   n.up.incoming(e, r);
          //                 }
          //               );
          //             }))
          //           : ((o = (function () {
          //               var e = parent;
          //               if ("" !== O)
          //                 for (var n = 0, t = O.split("."); n < t.length; n++)
          //                   e = e[t[n]];
          //               return e.easyXDM;
          //             })().Fn.get(
          //               e.channel,
          //               !0
          //             )(function (e) {
          //               n.up.incoming(e, r);
          //             })),
          //             m(function () {
          //               n.up.callback(!0);
          //             }, 0));
          //     },
          //     init: function () {
          //       I(n.onDOMReady, n);
          //     },
          //   });
        }),
        (x.stack.FlashTransport = function (r) {
          var t, o, a, i, c;
          function s(e, n) {
            m(function () {
              t.up.incoming(e, a);
            }, 0);
          }
          function l(t) {
            var e = r.swf + "?host=" + r.isHost,
              n = "easyXDM_swf_" + Math.floor(1e4 * Math.random());
            x.Fn.set("flash_loaded" + t.replace(/[\-.]/g, "_"), function () {
              x.stack.FlashTransport[t].swf = i = c.firstChild;
              for (
                var e = x.stack.FlashTransport[t].queue, n = 0;
                n < e.length;
                n++
              )
                e[n]();
              e.length = 0;
            }),
              r.swfContainer
                ? (c =
                    "string" == typeof r.swfContainer
                      ? u.getElementById(r.swfContainer)
                      : r.swfContainer)
                : (F(
                    (c = u.createElement("div")).style,
                    g && r.swfNoThrottle
                      ? {
                          height: "20px",
                          width: "20px",
                          position: "fixed",
                          right: 0,
                          top: 0,
                        }
                      : {
                          height: "1px",
                          width: "1px",
                          position: "absolute",
                          overflow: "hidden",
                          right: 0,
                          top: 0,
                        }
                  ),
                  u.body.appendChild(c));
            var o =
              "callback=flash_loaded" +
              f(t.replace(/[\-.]/g, "_")) +
              "&proto=" +
              w.location.protocol +
              "&domain=" +
              f(D(w.location.href)) +
              "&port=" +
              f(w.location.href.match(_)[4] || "") +
              "&ns=" +
              f(O);
            c.innerHTML =
              "<object height='20' width='20' type='application/x-shockwave-flash' id='" +
              n +
              "' data='" +
              e +
              "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" +
              e +
              "'></param><param name='flashvars' value='" +
              o +
              "'></param><embed type='application/x-shockwave-flash' FlashVars='" +
              o +
              "' allowScriptAccess='always' wmode='transparent' src='" +
              e +
              "' height='1' width='1'></embed></object>";
          }
          return (t = {
            outgoing: function (e, n, t) {
              i.postMessage(r.channel, e.toString()), t && t();
            },
            destroy: function () {
              try {
                i.destroyChannel(r.channel);
              } catch (e) {}
              (i = null), o && (o.parentNode.removeChild(o), (o = null));
            },
            onDOMReady: function () {
              (a = r.remote),
                x.Fn.set("flash_" + r.channel + "_init", function () {
                  m(function () {
                    t.up.callback(!0);
                  });
                }),
                x.Fn.set("flash_" + r.channel + "_onMessage", s),
                (r.swf = C(r.swf));
              var e = D(r.swf),
                n = function () {
                  (x.stack.FlashTransport[e].init = !0),
                    (i = x.stack.FlashTransport[e].swf).createChannel(
                      r.channel,
                      r.secret,
                      P(r.remote),
                      r.isHost
                    ),
                    r.isHost &&
                      (g &&
                        r.swfNoThrottle &&
                        F(r.props, {
                          position: "fixed",
                          right: 0,
                          top: 0,
                          height: "20px",
                          width: "20px",
                        }),
                      F(r.props, {
                        src: A(r.remote, {
                          xdm_e: P(p.href),
                          xdm_c: r.channel,
                          xdm_p: 6,
                          xdm_s: r.secret,
                        }),
                        name: S + r.channel + "_provider",
                      }),
                      (o = H(r)));
                };
              x.stack.FlashTransport[e] && x.stack.FlashTransport[e].init
                ? n()
                : x.stack.FlashTransport[e]
                ? x.stack.FlashTransport[e].queue.push(n)
                : ((x.stack.FlashTransport[e] = { queue: [n] }), l(e));
            },
            init: function () {
              I(t.onDOMReady, t);
            },
          });
        }),
        (x.stack.PostMessageTransport = function (o) {
          var t, r, a, i;
          function c(e) {
            var n = (function (e) {
              if (e.origin) return P(e.origin);
              if (e.uri) return P(e.uri);
              if (e.domain) return p.protocol + "//" + e.domain;
              throw "Unable to retrieve the origin of the event";
            })(e);
            n == i &&
              e.data.substring(0, o.channel.length + 1) == o.channel + " " &&
              t.up.incoming(e.data.substring(o.channel.length + 1), n);
          }
          return (t = {
            outgoing: function (e, n, t) {
              a.postMessage(o.channel + " " + e, n || i), t && t();
            },
            destroy: function () {
              y(h, "message", c),
                r && ((a = null), r.parentNode.removeChild(r), (r = null));
            },
            onDOMReady: function () {
              if (((i = P(o.remote)), o.isHost)) {
                v(h, "message", function e(n) {
                  n.data == o.channel + "-ready" &&
                    ((a =
                      "postMessage" in r.contentWindow
                        ? r.contentWindow
                        : r.contentWindow.document),
                    y(h, "message", e),
                    v(h, "message", c),
                    m(function () {
                      t.up.callback(!0);
                    }, 0));
                }),
                  F(o.props, {
                    src: A(o.remote, {
                      xdm_e: P(p.href),
                      xdm_c: o.channel,
                      xdm_p: 1,
                    }),
                    name: S + o.channel + "_provider",
                  }),
                  (r = H(o));
              } else
                v(h, "message", c),
                  (a =
                    "postMessage" in h.parent
                      ? h.parent
                      : h.parent.document).postMessage(o.channel + "-ready", i),
                  m(function () {
                    t.up.callback(!0);
                  }, 0);
            },
            init: function () {
              I(t.onDOMReady, t);
            },
          });
        }),
        (x.stack.FrameElementTransport = function (e) {
          var n, t, o, r;
          return (n = {
            outgoing: function (e, n, t) {
              o.call(this, e), t && t();
            },
            destroy: function () {
              t && (t.parentNode.removeChild(t), (t = null));
            },
            onDOMReady: function () {
              (r = P(e.remote)),
                e.isHost
                  ? (F(e.props, {
                      src: A(e.remote, {
                        xdm_e: P(p.href),
                        xdm_c: e.channel,
                        xdm_p: 5,
                      }),
                      name: S + e.channel + "_provider",
                    }),
                    ((t = H(e)).fn = function (e) {
                      return (
                        delete t.fn,
                        (o = e),
                        m(function () {
                          n.up.callback(!0);
                        }, 0),
                        function (e) {
                          n.up.incoming(e, r);
                        }
                      );
                    }))
                  : (u.referrer &&
                      P(u.referrer) != E.xdm_e &&
                      (h.top.location = E.xdm_e),
                    (o = h.frameElement.fn(function (e) {
                      n.up.incoming(e, r);
                    })),
                    n.up.callback(!0));
            },
            init: function () {
              I(n.onDOMReady, n);
            },
          });
        }),
        (x.stack.NameTransport = function (t) {
          var n, o, r, e, a, i, c, s;
          function l(e) {
            var n = t.remoteHelper + (o ? "#_3" : "#_2") + t.channel;
            r.contentWindow.sendMessage(e, n);
          }
          function u() {
            o
              ? (2 != ++a && o) || n.up.callback(!0)
              : (l("ready"), n.up.callback(!0));
          }
          function p(e) {
            n.up.incoming(e, c);
          }
          function d() {
            i &&
              m(function () {
                i(!0);
              }, 0);
          }
          return (n = {
            outgoing: function (e, n, t) {
              (i = t), l(e);
            },
            destroy: function () {
              r.parentNode.removeChild(r),
                (r = null),
                o && (e.parentNode.removeChild(e), (e = null));
            },
            onDOMReady: function () {
              (o = t.isHost),
                (a = 0),
                (c = P(t.remote)),
                (t.local = C(t.local)),
                o
                  ? (x.Fn.set(t.channel, function (e) {
                      o && "ready" === e && (x.Fn.set(t.channel, p), u());
                    }),
                    (s = A(t.remote, {
                      xdm_e: t.local,
                      xdm_c: t.channel,
                      xdm_p: 2,
                    })),
                    F(t.props, {
                      src: s + "#" + t.channel,
                      name: S + t.channel + "_provider",
                    }),
                    (e = H(t)))
                  : ((t.remoteHelper = t.remote), x.Fn.set(t.channel, p));
              r = H({
                props: { src: t.local + "#_4" + t.channel },
                onLoad: function e() {
                  var n = r || this;
                  y(n, "load", e),
                    x.Fn.set(t.channel + "_load", d),
                    (function e() {
                      "function" == typeof n.contentWindow.sendMessage
                        ? u()
                        : m(e, 50);
                    })();
                },
              });
            },
            init: function () {
              I(n.onDOMReady, n);
            },
          });
        }),
        (x.stack.HashTransport = function (o) {
          var r, a, e, i, c, s, l, u, p, d;
          function n() {
            if (l) {
              var e = l.location.href,
                n = "",
                t = e.indexOf("#");
              -1 != t && (n = e.substring(t)),
                n &&
                  n != c &&
                  ((c = n), r.up.incoming(c.substring(c.indexOf("_") + 1), d));
            }
          }
          function f() {
            e = setInterval(n, i);
          }
          return (r = {
            outgoing: function (e, n) {
              !(function (e) {
                if (u) {
                  var n = o.remote + "#" + s++ + "_" + e;
                  (a || !p ? u.contentWindow : u).location = n;
                }
              })(e);
            },
            destroy: function () {
              h.clearInterval(e),
                (!a && p) || u.parentNode.removeChild(u),
                (u = null);
            },
            onDOMReady: function () {
              if (
                ((a = o.isHost),
                (i = o.interval),
                (c = "#" + o.channel),
                (s = 0),
                (p = o.useParent),
                (d = P(o.remote)),
                a)
              ) {
                if (
                  (F(o.props, {
                    src: o.remote,
                    name: S + o.channel + "_provider",
                  }),
                  p)
                )
                  o.onLoad = function () {
                    (l = h), f(), r.up.callback(!0);
                  };
                else {
                  var n = 0,
                    t = o.delay / 50;
                  !(function e() {
                    if (++n > t)
                      throw new Error("Unable to reference listenerwindow");
                    try {
                      l = u.contentWindow.frames[S + o.channel + "_consumer"];
                    } catch (e) {}
                    l ? (f(), r.up.callback(!0)) : m(e, 50);
                  })();
                }
                u = H(o);
              } else
                (l = h),
                  f(),
                  p
                    ? ((u = parent), r.up.callback(!0))
                    : (F(o, {
                        props: {
                          src: o.remote + "#" + o.channel + new Date(),
                          name: S + o.channel + "_consumer",
                        },
                        onLoad: function () {
                          r.up.callback(!0);
                        },
                      }),
                      (u = H(o)));
            },
            init: function () {
              I(r.onDOMReady, r);
            },
          });
        }),
        (x.stack.ReliableBehavior = function (e) {
          var r,
            a,
            i = 0,
            c = 0,
            s = "";
          return (r = {
            incoming: function (e, n) {
              var t = e.indexOf("_"),
                o = e.substring(0, t).split(",");
              (e = e.substring(t + 1)),
                o[0] == i && ((s = ""), a && a(!0)),
                0 < e.length &&
                  (r.down.outgoing(o[1] + "," + i + "_" + s, n),
                  c != o[1] && ((c = o[1]), r.up.incoming(e, n)));
            },
            outgoing: function (e, n, t) {
              (s = e), (a = t), r.down.outgoing(c + "," + ++i + "_" + e, n);
            },
          });
        }),
        (x.stack.QueueBehavior = function (a) {
          var i,
            t,
            c = [],
            o = !0,
            r = "",
            s = 0,
            l = !1,
            u = !1;
          function p() {
            if (a.remove && 0 === c.length)
              return (
                ((e = i).up.down = e.down),
                (e.down.up = e.up),
                void (e.up = e.down = null)
              );
            var e;
            if (!o && 0 !== c.length && !t) {
              o = !0;
              var n = c.shift();
              i.down.outgoing(n.data, n.origin, function (e) {
                (o = !1),
                  n.callback &&
                    m(function () {
                      n.callback(e);
                    }, 0),
                  p();
              });
            }
          }
          return (i = {
            init: function () {
              R(a) && (a = {}),
                a.maxLength && ((s = a.maxLength), (u = !0)),
                a.lazy ? (l = !0) : i.down.init();
            },
            callback: function (e) {
              o = !1;
              var n = i.up;
              p(), n.callback(e);
            },
            incoming: function (e, n) {
              if (u) {
                var t = e.indexOf("_"),
                  o = parseInt(e.substring(0, t), 10);
                (r += e.substring(t + 1)),
                  0 === o &&
                    (a.encode && (r = d(r)), i.up.incoming(r, n), (r = ""));
              } else i.up.incoming(e, n);
            },
            outgoing: function (e, n, t) {
              a.encode && (e = f(e));
              var o,
                r = [];
              if (u) {
                for (; 0 !== e.length; )
                  (o = e.substring(0, s)),
                    (e = e.substring(o.length)),
                    r.push(o);
                for (; (o = r.shift()); )
                  c.push({
                    data: r.length + "_" + o,
                    origin: n,
                    callback: 0 === r.length ? t : null,
                  });
              } else c.push({ data: e, origin: n, callback: t });
              l ? i.down.init() : p();
            },
            destroy: function () {
              (t = !0), i.down.destroy();
            },
          });
        }),
        (x.stack.VerifyBehavior = function (o) {
          var r, a, i;
          function c() {
            (a = Math.random().toString(16).substring(2)), r.down.outgoing(a);
          }
          return (r = {
            incoming: function (e, n) {
              var t = e.indexOf("_");
              -1 === t
                ? e === a
                  ? r.up.callback(!0)
                  : i || ((i = e), o.initiate || c(), r.down.outgoing(e))
                : e.substring(0, t) === i &&
                  r.up.incoming(e.substring(t + 1), n);
            },
            outgoing: function (e, n, t) {
              r.down.outgoing(a + "_" + e, n, t);
            },
            callback: function (e) {
              o.initiate && c();
            },
          });
        }),
        (x.stack.RpcBehavior = function (n, r) {
          var t,
            a = r.serializer || j(),
            i = 0,
            c = {};
          function s(e) {
            (e.jsonrpc = "2.0"), t.down.outgoing(a.stringify(e));
          }
          function o(o, r) {
            var a = Array.prototype.slice;
            return function () {
              var e,
                n = arguments.length,
                t = { method: r };
              0 < n && "function" == typeof arguments[n - 1]
                ? (1 < n && "function" == typeof arguments[n - 2]
                    ? ((e = {
                        success: arguments[n - 2],
                        error: arguments[n - 1],
                      }),
                      (t.params = a.call(arguments, 0, n - 2)))
                    : ((e = { success: arguments[n - 1] }),
                      (t.params = a.call(arguments, 0, n - 1))),
                  (c["" + ++i] = e),
                  (t.id = i))
                : (t.params = a.call(arguments, 0)),
                o.namedParams &&
                  1 === t.params.length &&
                  (t.params = t.params[0]),
                s(t);
            };
          }
          function l(e, o, n, t) {
            if (n) {
              var r, a, i;
              o
                ? ((r = function (e) {
                    (r = b), s({ id: o, result: e });
                  }),
                  (a = function (e, n) {
                    a = b;
                    var t = { id: o, error: { code: -32099, message: e } };
                    n && (t.error.data = n), s(t);
                  }))
                : (r = a = b),
                (i = t),
                "[object Array]" !== Object.prototype.toString.call(i) &&
                  (t = [t]);
              try {
                var c = n.method.apply(n.scope, t.concat([r, a]));
                R(c) || r(c);
              } catch (e) {
                a(e.message);
              }
            } else
              o &&
                s({
                  id: o,
                  error: { code: -32601, message: "Procedure not found." },
                });
          }
          return (t = {
            incoming: function (e, n) {
              var t = a.parse(e);
              if (t.method)
                r.handle
                  ? r.handle(t, s)
                  : l(t.method, t.id, r.local[t.method], t.params);
              else {
                var o = c[t.id];
                t.error
                  ? o.error && o.error(t.error)
                  : o.success && o.success(t.result),
                  delete c[t.id];
              }
            },
            init: function () {
              if (r.remote)
                for (var e in r.remote)
                  r.remote.hasOwnProperty(e) && (n[e] = o(r.remote[e], e));
              t.down.init();
            },
            destroy: function () {
              for (var e in r.remote)
                r.remote.hasOwnProperty(e) &&
                  n.hasOwnProperty(e) &&
                  delete n[e];
              t.down.destroy();
            },
          });
        }),
        (w.easyXDM = x);
    })(
      window,
      document,
      location,
      window.setTimeout,
      decodeURIComponent,
      encodeURIComponent
    );
  },
  ttiD: function (e, n) {
    "undefined" == typeof SongkickWidget && (SongkickWidget = {});
  },
  xDiN: function (e, n) {
    (SongkickWidget.Injector = function () {
      (this._widgetAnchor = document.querySelector("a.songkick-widget")),
        this._widgetAnchor &&
          ((this._detectStyle =
            "true" === this._widgetAnchor.getAttribute("data-detect-style")),
          this._detectStyle &&
            (this._parentStyle = window.getComputedStyle(
              this._widgetAnchor.parentNode
            )));
    }),
      (SongkickWidget.Injector.prototype = {
        CUSTOM_OPTIONS_WHITELIST: [
          "background-color",
          "font-color",
          "font-family",
          "font-size",
          "font-weight",
          "locale",
          "other-artists",
          "theme",
          "text-shadow",
          "text-transform",
          "track-button",
        ],
        getCustomOptions: function () {
          var e = "";
          if (!this._widgetAnchor) return e;
          for (var n = 0; n < this.CUSTOM_OPTIONS_WHITELIST.length; n++) {
            var t = this.CUSTOM_OPTIONS_WHITELIST[n],
              o = this._widgetAnchor.getAttribute("data-" + t);
            !o &&
              this._detectStyle &&
              this._parentStyle &&
              ((cssProperty = "font-color" === t ? "color" : t),
              (o = this._parentStyle.getPropertyValue(cssProperty))),
              o && (e += "&" + t + "=" + encodeURIComponent(o));
          }
          return e;
        },
        PRODUCTION_DOMAIN: "www.songkick.com",
        STAGING_DOMAIN: "www.staging.songkick.net",
        DEV_DOMAIN: "dev.staging.songkick.net",
        getRequestInformation: function (e) {
          var n = new RegExp(
            "^https?://(" +
              [
                this.PRODUCTION_DOMAIN,
                this.STAGING_DOMAIN,
                this.DEV_DOMAIN,
              ].join("|") +
              ")/(artists|users|venues)/([0-9a-zA-Z-+._]+|[0-9]+)$"
          ).exec(e);
          if (n) {
            var t = "";
            switch (n[1]) {
              case this.PRODUCTION_DOMAIN:
                t = "widget.songkick.com";
                break;
              case this.STAGING_DOMAIN:
                t = "widget.staging.songkick.net";
                break;
              case this.DEV_DOMAIN:
                t = "localhost:3000";
            }
            var o = null,
              r = null;
            switch (n[2]) {
              case "venues":
                (o = "venue"), (r = n[3].match(/^\d+/)[0]);
                break;
              case "users":
                (o = "username"), (r = n[3]);
                break;
              case "artists":
                (o = "artist"), (r = n[3].match(/^\d+/)[0]);
            }
            return {
              targetDomain: t,
              stagingEnv: !!t.match(/staging\.songkick\.net/),
              devEnv: !!t.match(/localhost\:3000/),
              resourceType: o,
              resourceId: r,
            };
          }
          return null;
        },
        loadIFrame: function () {
          if (this._widgetAnchor) {
            var e = this.getRequestInformation(this._widgetAnchor.href);
            if (e) {
              var n = this._widgetAnchor.style.width;
              n || (n = "100%");
              var t =
                this._widgetAnchor.textContent || this._widgetAnchor.innerText;
              t || (t = "");
              var o = document.createElement("div");
              this._widgetAnchor.parentNode.replaceChild(o, this._widgetAnchor);
              var r = e.resourceType,
                a = e.resourceId,
                i = "https:" == document.location.protocol ? "https:" : "http:",
                c = e.targetDomain,
                s = [
                  i,
                  "//",
                  c,
                  "/",
                  encodeURIComponent(a),
                  "/songkick-widget.html?",
                  r,
                  "=",
                  encodeURIComponent(a),
                  "&header=",
                  encodeURIComponent(t),
                  this.getCustomOptions(),
                ].join("");
              e.stagingEnv &&
                (s = (s += "&staging=true").replace(
                  /net\/.*\/songkick/,
                  "net/songkick"
                )),
                e.devEnv &&
                  (s = (s += "&staging=true").replace(
                    /3000\/.*\/songkick/,
                    "3000/songkick"
                  )),
                new easyXDM.Socket({
                  remote: s,
                  container: o,
                  hash: !0,
                  channel: a + "_" + Math.floor(1e4 * Math.random() + 1),
                  swf: i + "//" + c + "/easyxdm.swf",
                  props: { className: "songkick-widget", style: { width: n } },
                  onMessage: function (e) {
                    o.firstChild.style.height = e + "px";
                  },
                });
            }
          }
        },
      }),
      new SongkickWidget.Injector().loadIFrame();
    window.onload = function exampleFunction() {
      console.log("test");
      const ticket = document.body.querySelector(".ticket-link");
      if (ticket) {
        console.log("Test");
        ticket.textContent = "Cumpară bilet";
      }
      // Function to be executed
    };
  },
});
