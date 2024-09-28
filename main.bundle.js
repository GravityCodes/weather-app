(() => {
  "use strict";
  var t = {
      651: (t, e, n) => {
        n.d(e, { A: () => c });
        var r = n(601),
          a = n.n(r),
          o = n(314),
          i = n.n(o)()(a());
        i.push([
          t.id,
          "/*  \n*  Disables standard content-box sizing.\n*\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*  \n*  Removes all default margin sets the line height to meet WCAG criteria.\n*\n*/\n\n* {\n  margin: 0;\n  line-height: calc(1em + 0.5rem);\n}\n\n/*\n* Removes default inline display for media and fits media to its container.\n*\n*/\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n* Form controls will use parent's font.\n*\n*/\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n* Allows paragraphs to break words and add hyphens were necessary.\n*\n*/\n\np {\n  overflow-wrap: break-word;\n  hyphens: auto;\n}\n",
          "",
        ]);
        const c = i;
      },
      208: (t, e, n) => {
        n.d(e, { A: () => P });
        var r = n(601),
          a = n.n(r),
          o = n(314),
          i = n.n(o),
          c = n(417),
          s = n.n(c),
          u = new URL(n(816), n.b),
          d = new URL(n(982), n.b),
          l = new URL(n(950), n.b),
          f = new URL(n(916), n.b),
          h = new URL(n(981), n.b),
          m = new URL(n(749), n.b),
          g = new URL(n(633), n.b),
          p = new URL(n(249), n.b),
          w = i()(a()),
          b = s()(u),
          y = s()(d),
          v = s()(l),
          x = s()(f),
          M = s()(h),
          k = s()(m),
          S = s()(g),
          C = s()(p);
        w.push([
          t.id,
          `/* Style fonts */\n\n@font-face {\n  font-family: "montserrat_alternatesblack";\n  src:\n    url(${b}) format("woff2"),\n    url(${y}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "montserrat_alternatesXBd";\n  src:\n    url(${v}) format("woff2"),\n    url(${x}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "montserrat_alternatesLtIt";\n  src:\n    url(${M})\n      format("woff2"),\n    url(${k}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "montserrat_alternatesregular";\n  src:\n    url(${S}) format("woff2"),\n    url(${C}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n  --c-color-1: #244855;\n  --c-color-2: #e64833;\n  --c-color-3: #874f41;\n  --c-color-4: #90aead;\n  --c-color-5: #fbe9d0;\n  --c-color-6: #0912159a;\n  --c-transparent-1: #244855c3;\n  --c-transparent-2: #e64833a1;\n  --c-transparent-5: #fbe9d099;\n}\n\nhtml {\n  background-color: var(--c-color-1);\n}\n\nbody {\n  font-family: montserrat_alternatesregular;\n  background: linear-gradient(var(--c-color-4), var(--c-color-1));\n  height: 100vh;\n}\n\n#header {\n  background-color: var(--c-color-1);\n}\n\n#header-items {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  align-items: center;\n  width: clamp(450px, 75%, 2000px);\n}\n\n.logo {\n  font-size: 2.5em;\n  font-family: montserrat_alternatesblack;\n  color: var(--c-color-2);\n}\n\n#search-field {\n  position: relative;\n  width: 250px;\n  height: 50px;\n}\n\nlabel[for="search"] {\n  color: var(--c-color-5);\n  position: absolute;\n  top: 14px;\n  left: 10px;\n  user-select: none;\n  text-align: center;\n  cursor: text;\n  transition: all 0.2s;\n}\n\n#search {\n  position: absolute;\n  height: 50px;\n  border: 2px solid var(--c-color-5);\n  color: var(--c-color-2);\n  font-size: 1.2em;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: transparent;\n  outline: none;\n  width: 100%;\n}\n\n#search:focus + label,\n#search:valid + label {\n  background-color: var(--c-color-1);\n  transform: translate(-20px, -28px) scale(0.8);\n  border-left: 2px solid var(--c-color-5);\n  border-right: 2px solid var(--c-color-5);\n\n  padding: 0px 5px;\n}\n\n#main-content {\n  height: 100%;\n}\n\n#current-weather {\n  /* background-color: var(--c-color-4); */\n  height: 35%;\n  padding: 20px;\n}\n\n#current-weather-card {\n  height: 100%;\n  margin: 0 auto;\n  width: 1000px;\n  background-color: var(--c-color-6);\n  border-radius: 10px;\n  backdrop-filter: blur(20px);\n  padding: 20px;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  grid-template-rows: repeat(3, 1fr);\n}\n\n#current-weather-card-title {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  color: var(--c-color-5);\n\n  font-family: montserrat_alternatesblack;\n  font-size: 3em;\n}\n\n#current-weather-card-temperature {\n  grid-column: 1 / 2;\n  grid-row: 2 / 4;\n  color: var(--c-color-2);\n  font-size: 5.5em;\n  align-self: center;\n  justify-self: start;\n}\n\n#current-weather-card-temp-container {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n  color: var(--c-transparent-2);\n  display: flex;\n  gap: 10px;\n\n  padding: 5px 25px;\n  align-self: end;\n  justify-self: start;\n}\n\n.current-weather-card-temp-children:first-child {\n  border-right: 2px solid var(--c-transparent-1);\n  padding-right: 10px;\n}\n\n#current-weather-card-icon {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  align-self: center;\n  justify-self: center;\n}\n\n#current-weather-card-icon img {\n  height: 90%;\n  width: 50%;\n  margin: 0 auto;\n}\n\n#current-weather-card-description {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  align-self: end;\n  justify-self: center;\n\n  color: var(--c-color-5);\n}\n\n#daily-weather {\n  height: 65%;\n}\n\n#daily-weather-container {\n  width: clamp(450px, 75%, 1000px);\n  margin: 0 auto;\n  background-color: var(--c-color-6);\n  border-radius: 20px;\n  padding: 20px;\n}\n\n#daily-weather-title {\n  font-family: montserrat_alternatesblack;\n  font-size: 1.5em;\n  color: var(--c-color-2);\n}\n\n#daily-weather-card-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.daily-weather-card {\n  display: flex;\n  justify-content: space-between;\n  color: var(--c-color-5);\n  background-color: var(--c-color-1);\n  border-radius: 10px;\n  align-items: center;\n  padding: 10px;\n}\n\n.daily-weather-card-left-side-container {\n  display: flex;\n  gap: 50px;\n  align-items: center;\n}\n\n.daily-weather-card-img-container {\n  width: 50px;\n}\n\n.daily-weather-card-date {\n  width: 80px;\n}\n\n.daily-weather-card-temp {\n  color: var(--c-color-2);\n  font-size: 1.6em;\n}\n`,
          "",
        ]);
        const P = w;
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, a, o) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var d = [].concat(t[u]);
                (r && i[d[0]]) ||
                  (void 0 !== o &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = o)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = n))
                      : (d[2] = n)),
                  a &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = a))
                      : (d[4] = "".concat(a))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      417: (t) => {
        t.exports = function (t, e) {
          return (
            e || (e = {}),
            t
              ? ((t = String(t.__esModule ? t.default : t)),
                /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                e.hash && (t += e.hash),
                /["'() \t\n]|(%20)/.test(t) || e.needQuotes
                  ? '"'.concat(
                      t.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : t)
              : t
          );
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var o = {}, i = [], c = 0; c < t.length; c++) {
            var s = t[c],
              u = r.base ? s[0] + r.base : s[0],
              d = o[u] || 0,
              l = "".concat(u, " ").concat(d);
            o[u] = d + 1;
            var f = n(l),
              h = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== f) e[f].references++, e[f].updater(h);
            else {
              var m = a(h, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: l, updater: m, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function a(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, a) {
          var o = r((t = t || []), (a = a || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < o.length; i++) {
              var c = n(o[i]);
              e[c].references--;
            }
            for (var s = r(t, a), u = 0; u < o.length; u++) {
              var d = n(o[u]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            o = s;
          };
        };
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      982: (t, e, n) => {
        t.exports = n.p + "cb950a61b6c09b514321.woff";
      },
      816: (t, e, n) => {
        t.exports = n.p + "163bf0bccc9c521e9238.woff2";
      },
      916: (t, e, n) => {
        t.exports = n.p + "11994ada5a1ddff84dd9.woff";
      },
      950: (t, e, n) => {
        t.exports = n.p + "d12c203dcdef18d999cb.woff2";
      },
      749: (t, e, n) => {
        t.exports = n.p + "62ee0eedc0ec69ce133c.woff";
      },
      981: (t, e, n) => {
        t.exports = n.p + "53159437df0b7a9ba7e1.woff2";
      },
      249: (t, e, n) => {
        t.exports = n.p + "5bb7ebe839a3b8c0419f.woff";
      },
      633: (t, e, n) => {
        t.exports = n.p + "02a03b404cdf177cf367.woff2";
      },
    },
    e = {};
  function n(r) {
    var a = e[r];
    if (void 0 !== a) return a.exports;
    var o = (e[r] = { id: r, exports: {} });
    return t[r](o, o.exports, n), o.exports;
  }
  (n.m = t),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + "");
      var e = n.g.document;
      if (
        !t &&
        e &&
        (e.currentScript &&
          "SCRIPT" === e.currentScript.tagName.toUpperCase() &&
          (t = e.currentScript.src),
        !t)
      ) {
        var r = e.getElementsByTagName("script");
        if (r.length)
          for (var a = r.length - 1; a > -1 && (!t || !/^http(s?):/.test(t)); )
            t = r[a--].src;
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0);
  var r = n(72),
    a = n.n(r),
    o = n(825),
    i = n.n(o),
    c = n(659),
    s = n.n(c),
    u = n(56),
    d = n.n(u),
    l = n(540),
    f = n.n(l),
    h = n(113),
    m = n.n(h),
    g = n(651),
    p = {};
  (p.styleTagTransform = m()),
    (p.setAttributes = d()),
    (p.insert = s().bind(null, "head")),
    (p.domAPI = i()),
    (p.insertStyleElement = f()),
    a()(g.A, p),
    g.A && g.A.locals && g.A.locals;
  var w = n(208),
    b = {};
  (b.styleTagTransform = m()),
    (b.setAttributes = d()),
    (b.insert = s().bind(null, "head")),
    (b.domAPI = i()),
    (b.insertStyleElement = f()),
    a()(w.A, b),
    w.A && w.A.locals && w.A.locals;
  const y = n.p + "a82e2ffa04dca3850430.png",
    v = n.p + "088d0cd5b2aa98f4b1f2.png",
    x = n.p + "4c338ddfb8f41877a410.png",
    M = n.p + "33f6dd049411e37446cb.png",
    k = (() => {
      const t = document.querySelectorAll(".current-weather-item"),
        e = document.querySelector("#daily-weather-card-container"),
        n = { rain: y, "partly-cloudy-day": v, cloudy: x, "clear-day": M };
      return {
        addCurrentDayWeather: function (e, r, a, o, i, c) {
          (t[0].textContent = e),
            (t[1].textContent = `${r}°F`),
            (t[2].textContent = `H: ${a}°F`),
            (t[3].textContent = `L: ${o}°F`),
            (t[4].children[0].src = n[i]),
            (t[5].textContent = c);
        },
        addNextDaysWeather: function (t, r, a) {
          let o = document.createElement("div");
          o.classList.add("daily-weather-card");
          let i = document.createElement("div");
          i.classList.add("daily-weather-card-date"), (i.textContent = t);
          let c = document.createElement("div");
          c.classList.add("daily-weather-card-img-container");
          let s = document.createElement("img");
          (s.src = n[r]), (s.alt = `${r} icon`), c.appendChild(s);
          let u = document.createElement("div");
          u.classList.add("daily-weather-card-temp"),
            (u.textContent = `${a}°F`);
          let d = document.createElement("div");
          d.classList.add("daily-weather-card-left-side-container"),
            [i, c].forEach((t) => d.appendChild(t)),
            [d, u].forEach((t) => o.appendChild(t)),
            e.appendChild(o);
        },
        clearNextDaysWeather: function () {
          e.textContent = "";
        },
      };
    })(),
    S = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds",
      },
      xSeconds: { one: "1 second", other: "{{count}} seconds" },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes",
      },
      xMinutes: { one: "1 minute", other: "{{count}} minutes" },
      aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
      xHours: { one: "1 hour", other: "{{count}} hours" },
      xDays: { one: "1 day", other: "{{count}} days" },
      aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
      xWeeks: { one: "1 week", other: "{{count}} weeks" },
      aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
      xMonths: { one: "1 month", other: "{{count}} months" },
      aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
      xYears: { one: "1 year", other: "{{count}} years" },
      overXYears: { one: "over 1 year", other: "over {{count}} years" },
      almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    };
  function C(t) {
    return (e = {}) => {
      const n = e.width ? String(e.width) : t.defaultWidth;
      return t.formats[n] || t.formats[t.defaultWidth];
    };
  }
  const P = {
      date: C({
        formats: {
          full: "EEEE, MMMM do, y",
          long: "MMMM do, y",
          medium: "MMM d, y",
          short: "MM/dd/yyyy",
        },
        defaultWidth: "full",
      }),
      time: C({
        formats: {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a",
        },
        defaultWidth: "full",
      }),
      dateTime: C({
        formats: {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: "{{date}}, {{time}}",
          short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
      }),
    },
    D = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P",
    };
  function W(t) {
    return (e, n) => {
      let r;
      if (
        "formatting" === (n?.context ? String(n.context) : "standalone") &&
        t.formattingValues
      ) {
        const e = t.defaultFormattingWidth || t.defaultWidth,
          a = n?.width ? String(n.width) : e;
        r = t.formattingValues[a] || t.formattingValues[e];
      } else {
        const e = t.defaultWidth,
          a = n?.width ? String(n.width) : t.defaultWidth;
        r = t.values[a] || t.values[e];
      }
      return r[t.argumentCallback ? t.argumentCallback(e) : e];
    };
  }
  const T = {
    ordinalNumber: (t, e) => {
      const n = Number(t),
        r = n % 100;
      if (r > 20 || r < 10)
        switch (r % 10) {
          case 1:
            return n + "st";
          case 2:
            return n + "nd";
          case 3:
            return n + "rd";
        }
      return n + "th";
    },
    era: W({
      values: {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"],
      },
      defaultWidth: "wide",
    }),
    quarter: W({
      values: {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
      },
      defaultWidth: "wide",
      argumentCallback: (t) => t - 1,
    }),
    month: W({
      values: {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        wide: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      defaultWidth: "wide",
    }),
    day: W({
      values: {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      defaultWidth: "wide",
    }),
    dayPeriod: W({
      values: {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
      },
      defaultWidth: "wide",
      formattingValues: {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
      },
      defaultFormattingWidth: "wide",
    }),
  };
  function E(t) {
    return (e, n = {}) => {
      const r = n.width,
        a = (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
        o = e.match(a);
      if (!o) return null;
      const i = o[0],
        c = (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
        s = Array.isArray(c)
          ? (function (t) {
              for (let e = 0; e < t.length; e++) if (t[e].test(i)) return e;
            })(c)
          : (function (t) {
              for (const e in t)
                if (Object.prototype.hasOwnProperty.call(t, e) && t[e].test(i))
                  return e;
            })(c);
      let u;
      return (
        (u = t.valueCallback ? t.valueCallback(s) : s),
        (u = n.valueCallback ? n.valueCallback(u) : u),
        { value: u, rest: e.slice(i.length) }
      );
    };
  }
  const L = {
    ordinalNumber:
      ((A = {
        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
        parsePattern: /\d+/i,
        valueCallback: (t) => parseInt(t, 10),
      }),
      (t, e = {}) => {
        const n = t.match(A.matchPattern);
        if (!n) return null;
        const r = n[0],
          a = t.match(A.parsePattern);
        if (!a) return null;
        let o = A.valueCallback ? A.valueCallback(a[0]) : a[0];
        return (
          (o = e.valueCallback ? e.valueCallback(o) : o),
          { value: o, rest: t.slice(r.length) }
        );
      }),
    era: E({
      matchPatterns: {
        narrow: /^(b|a)/i,
        abbreviated:
          /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
      },
      defaultMatchWidth: "wide",
      parsePatterns: { any: [/^b/i, /^(a|c)/i] },
      defaultParseWidth: "any",
    }),
    quarter: E({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i,
      },
      defaultMatchWidth: "wide",
      parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
      defaultParseWidth: "any",
      valueCallback: (t) => t + 1,
    }),
    month: E({
      matchPatterns: {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [
          /^j/i,
          /^f/i,
          /^m/i,
          /^a/i,
          /^m/i,
          /^j/i,
          /^j/i,
          /^a/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
        any: [
          /^ja/i,
          /^f/i,
          /^mar/i,
          /^ap/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^au/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
      },
      defaultParseWidth: "any",
    }),
    day: E({
      matchPatterns: {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
      },
      defaultParseWidth: "any",
    }),
    dayPeriod: E({
      matchPatterns: {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
      },
      defaultMatchWidth: "any",
      parsePatterns: {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i,
        },
      },
      defaultParseWidth: "any",
    }),
  };
  var A;
  const N = {
    code: "en-US",
    formatDistance: (t, e, n) => {
      let r;
      const a = S[t];
      return (
        (r =
          "string" == typeof a
            ? a
            : 1 === e
              ? a.one
              : a.other.replace("{{count}}", e.toString())),
        n?.addSuffix
          ? n.comparison && n.comparison > 0
            ? "in " + r
            : r + " ago"
          : r
      );
    },
    formatLong: P,
    formatRelative: (t, e, n, r) => D[t],
    localize: T,
    match: L,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
  let Y = {};
  function F() {
    return Y;
  }
  Math.pow(10, 8);
  const O = 6048e5,
    j = Symbol.for("constructDateFrom");
  function q(t, e) {
    return "function" == typeof t
      ? t(e)
      : t && "object" == typeof t && j in t
        ? t[j](e)
        : t instanceof Date
          ? new t.constructor(e)
          : new Date(e);
  }
  function H(t, e) {
    return q(e || t, t);
  }
  function z(t) {
    const e = H(t),
      n = new Date(
        Date.UTC(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          e.getHours(),
          e.getMinutes(),
          e.getSeconds(),
          e.getMilliseconds(),
        ),
      );
    return n.setUTCFullYear(e.getFullYear()), +t - +n;
  }
  function $(t, e) {
    const n = H(t, e?.in);
    return n.setHours(0, 0, 0, 0), n;
  }
  function G(t, e) {
    const n = H(t, e?.in);
    return (
      (function (t, e, n) {
        const [r, a] = (function (t, ...e) {
            const n = q.bind(null, t || e.find((t) => "object" == typeof t));
            return e.map(n);
          })(n?.in, t, e),
          o = $(r),
          i = $(a),
          c = +o - z(o),
          s = +i - z(i);
        return Math.round((c - s) / 864e5);
      })(
        n,
        (function (t, e) {
          const n = H(t, e?.in);
          return (
            n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
          );
        })(n),
      ) + 1
    );
  }
  function Q(t, e) {
    const n = F(),
      r =
        e?.weekStartsOn ??
        e?.locale?.options?.weekStartsOn ??
        n.weekStartsOn ??
        n.locale?.options?.weekStartsOn ??
        0,
      a = H(t, e?.in),
      o = a.getDay(),
      i = (o < r ? 7 : 0) + o - r;
    return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
  }
  function R(t, e) {
    return Q(t, { ...e, weekStartsOn: 1 });
  }
  function U(t, e) {
    const n = H(t, e?.in),
      r = n.getFullYear(),
      a = q(n, 0);
    a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
    const o = R(a),
      i = q(n, 0);
    i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
    const c = R(i);
    return n.getTime() >= o.getTime()
      ? r + 1
      : n.getTime() >= c.getTime()
        ? r
        : r - 1;
  }
  function B(t, e) {
    const n = H(t, e?.in),
      r =
        +R(n) -
        +(function (t, e) {
          const n = U(t, e),
            r = q(e?.in || t, 0);
          return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), R(r);
        })(n);
    return Math.round(r / O) + 1;
  }
  function X(t, e) {
    const n = H(t, e?.in),
      r = n.getFullYear(),
      a = F(),
      o =
        e?.firstWeekContainsDate ??
        e?.locale?.options?.firstWeekContainsDate ??
        a.firstWeekContainsDate ??
        a.locale?.options?.firstWeekContainsDate ??
        1,
      i = q(e?.in || t, 0);
    i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
    const c = Q(i, e),
      s = q(e?.in || t, 0);
    s.setFullYear(r, 0, o), s.setHours(0, 0, 0, 0);
    const u = Q(s, e);
    return +n >= +c ? r + 1 : +n >= +u ? r : r - 1;
  }
  function I(t, e) {
    const n = H(t, e?.in),
      r =
        +Q(n, e) -
        +(function (t, e) {
          const n = F(),
            r =
              e?.firstWeekContainsDate ??
              e?.locale?.options?.firstWeekContainsDate ??
              n.firstWeekContainsDate ??
              n.locale?.options?.firstWeekContainsDate ??
              1,
            a = X(t, e),
            o = q(e?.in || t, 0);
          return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), Q(o, e);
        })(n, e);
    return Math.round(r / O) + 1;
  }
  function J(t, e) {
    return (t < 0 ? "-" : "") + Math.abs(t).toString().padStart(e, "0");
  }
  const _ = {
      y(t, e) {
        const n = t.getFullYear(),
          r = n > 0 ? n : 1 - n;
        return J("yy" === e ? r % 100 : r, e.length);
      },
      M(t, e) {
        const n = t.getMonth();
        return "M" === e ? String(n + 1) : J(n + 1, 2);
      },
      d: (t, e) => J(t.getDate(), e.length),
      a(t, e) {
        const n = t.getHours() / 12 >= 1 ? "pm" : "am";
        switch (e) {
          case "a":
          case "aa":
            return n.toUpperCase();
          case "aaa":
            return n;
          case "aaaaa":
            return n[0];
          default:
            return "am" === n ? "a.m." : "p.m.";
        }
      },
      h: (t, e) => J(t.getHours() % 12 || 12, e.length),
      H: (t, e) => J(t.getHours(), e.length),
      m: (t, e) => J(t.getMinutes(), e.length),
      s: (t, e) => J(t.getSeconds(), e.length),
      S(t, e) {
        const n = e.length,
          r = t.getMilliseconds();
        return J(Math.trunc(r * Math.pow(10, n - 3)), e.length);
      },
    },
    V = {
      G: function (t, e, n) {
        const r = t.getFullYear() > 0 ? 1 : 0;
        switch (e) {
          case "G":
          case "GG":
          case "GGG":
            return n.era(r, { width: "abbreviated" });
          case "GGGGG":
            return n.era(r, { width: "narrow" });
          default:
            return n.era(r, { width: "wide" });
        }
      },
      y: function (t, e, n) {
        if ("yo" === e) {
          const e = t.getFullYear(),
            r = e > 0 ? e : 1 - e;
          return n.ordinalNumber(r, { unit: "year" });
        }
        return _.y(t, e);
      },
      Y: function (t, e, n, r) {
        const a = X(t, r),
          o = a > 0 ? a : 1 - a;
        return "YY" === e
          ? J(o % 100, 2)
          : "Yo" === e
            ? n.ordinalNumber(o, { unit: "year" })
            : J(o, e.length);
      },
      R: function (t, e) {
        return J(U(t), e.length);
      },
      u: function (t, e) {
        return J(t.getFullYear(), e.length);
      },
      Q: function (t, e, n) {
        const r = Math.ceil((t.getMonth() + 1) / 3);
        switch (e) {
          case "Q":
            return String(r);
          case "QQ":
            return J(r, 2);
          case "Qo":
            return n.ordinalNumber(r, { unit: "quarter" });
          case "QQQ":
            return n.quarter(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "QQQQQ":
            return n.quarter(r, { width: "narrow", context: "formatting" });
          default:
            return n.quarter(r, { width: "wide", context: "formatting" });
        }
      },
      q: function (t, e, n) {
        const r = Math.ceil((t.getMonth() + 1) / 3);
        switch (e) {
          case "q":
            return String(r);
          case "qq":
            return J(r, 2);
          case "qo":
            return n.ordinalNumber(r, { unit: "quarter" });
          case "qqq":
            return n.quarter(r, {
              width: "abbreviated",
              context: "standalone",
            });
          case "qqqqq":
            return n.quarter(r, { width: "narrow", context: "standalone" });
          default:
            return n.quarter(r, { width: "wide", context: "standalone" });
        }
      },
      M: function (t, e, n) {
        const r = t.getMonth();
        switch (e) {
          case "M":
          case "MM":
            return _.M(t, e);
          case "Mo":
            return n.ordinalNumber(r + 1, { unit: "month" });
          case "MMM":
            return n.month(r, { width: "abbreviated", context: "formatting" });
          case "MMMMM":
            return n.month(r, { width: "narrow", context: "formatting" });
          default:
            return n.month(r, { width: "wide", context: "formatting" });
        }
      },
      L: function (t, e, n) {
        const r = t.getMonth();
        switch (e) {
          case "L":
            return String(r + 1);
          case "LL":
            return J(r + 1, 2);
          case "Lo":
            return n.ordinalNumber(r + 1, { unit: "month" });
          case "LLL":
            return n.month(r, { width: "abbreviated", context: "standalone" });
          case "LLLLL":
            return n.month(r, { width: "narrow", context: "standalone" });
          default:
            return n.month(r, { width: "wide", context: "standalone" });
        }
      },
      w: function (t, e, n, r) {
        const a = I(t, r);
        return "wo" === e
          ? n.ordinalNumber(a, { unit: "week" })
          : J(a, e.length);
      },
      I: function (t, e, n) {
        const r = B(t);
        return "Io" === e
          ? n.ordinalNumber(r, { unit: "week" })
          : J(r, e.length);
      },
      d: function (t, e, n) {
        return "do" === e
          ? n.ordinalNumber(t.getDate(), { unit: "date" })
          : _.d(t, e);
      },
      D: function (t, e, n) {
        const r = G(t);
        return "Do" === e
          ? n.ordinalNumber(r, { unit: "dayOfYear" })
          : J(r, e.length);
      },
      E: function (t, e, n) {
        const r = t.getDay();
        switch (e) {
          case "E":
          case "EE":
          case "EEE":
            return n.day(r, { width: "abbreviated", context: "formatting" });
          case "EEEEE":
            return n.day(r, { width: "narrow", context: "formatting" });
          case "EEEEEE":
            return n.day(r, { width: "short", context: "formatting" });
          default:
            return n.day(r, { width: "wide", context: "formatting" });
        }
      },
      e: function (t, e, n, r) {
        const a = t.getDay(),
          o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (e) {
          case "e":
            return String(o);
          case "ee":
            return J(o, 2);
          case "eo":
            return n.ordinalNumber(o, { unit: "day" });
          case "eee":
            return n.day(a, { width: "abbreviated", context: "formatting" });
          case "eeeee":
            return n.day(a, { width: "narrow", context: "formatting" });
          case "eeeeee":
            return n.day(a, { width: "short", context: "formatting" });
          default:
            return n.day(a, { width: "wide", context: "formatting" });
        }
      },
      c: function (t, e, n, r) {
        const a = t.getDay(),
          o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (e) {
          case "c":
            return String(o);
          case "cc":
            return J(o, e.length);
          case "co":
            return n.ordinalNumber(o, { unit: "day" });
          case "ccc":
            return n.day(a, { width: "abbreviated", context: "standalone" });
          case "ccccc":
            return n.day(a, { width: "narrow", context: "standalone" });
          case "cccccc":
            return n.day(a, { width: "short", context: "standalone" });
          default:
            return n.day(a, { width: "wide", context: "standalone" });
        }
      },
      i: function (t, e, n) {
        const r = t.getDay(),
          a = 0 === r ? 7 : r;
        switch (e) {
          case "i":
            return String(a);
          case "ii":
            return J(a, e.length);
          case "io":
            return n.ordinalNumber(a, { unit: "day" });
          case "iii":
            return n.day(r, { width: "abbreviated", context: "formatting" });
          case "iiiii":
            return n.day(r, { width: "narrow", context: "formatting" });
          case "iiiiii":
            return n.day(r, { width: "short", context: "formatting" });
          default:
            return n.day(r, { width: "wide", context: "formatting" });
        }
      },
      a: function (t, e, n) {
        const r = t.getHours() / 12 >= 1 ? "pm" : "am";
        switch (e) {
          case "a":
          case "aa":
            return n.dayPeriod(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "aaa":
            return n
              .dayPeriod(r, { width: "abbreviated", context: "formatting" })
              .toLowerCase();
          case "aaaaa":
            return n.dayPeriod(r, { width: "narrow", context: "formatting" });
          default:
            return n.dayPeriod(r, { width: "wide", context: "formatting" });
        }
      },
      b: function (t, e, n) {
        const r = t.getHours();
        let a;
        switch (
          ((a =
            12 === r
              ? "noon"
              : 0 === r
                ? "midnight"
                : r / 12 >= 1
                  ? "pm"
                  : "am"),
          e)
        ) {
          case "b":
          case "bb":
            return n.dayPeriod(a, {
              width: "abbreviated",
              context: "formatting",
            });
          case "bbb":
            return n
              .dayPeriod(a, { width: "abbreviated", context: "formatting" })
              .toLowerCase();
          case "bbbbb":
            return n.dayPeriod(a, { width: "narrow", context: "formatting" });
          default:
            return n.dayPeriod(a, { width: "wide", context: "formatting" });
        }
      },
      B: function (t, e, n) {
        const r = t.getHours();
        let a;
        switch (
          ((a =
            r >= 17
              ? "evening"
              : r >= 12
                ? "afternoon"
                : r >= 4
                  ? "morning"
                  : "night"),
          e)
        ) {
          case "B":
          case "BB":
          case "BBB":
            return n.dayPeriod(a, {
              width: "abbreviated",
              context: "formatting",
            });
          case "BBBBB":
            return n.dayPeriod(a, { width: "narrow", context: "formatting" });
          default:
            return n.dayPeriod(a, { width: "wide", context: "formatting" });
        }
      },
      h: function (t, e, n) {
        if ("ho" === e) {
          let e = t.getHours() % 12;
          return 0 === e && (e = 12), n.ordinalNumber(e, { unit: "hour" });
        }
        return _.h(t, e);
      },
      H: function (t, e, n) {
        return "Ho" === e
          ? n.ordinalNumber(t.getHours(), { unit: "hour" })
          : _.H(t, e);
      },
      K: function (t, e, n) {
        const r = t.getHours() % 12;
        return "Ko" === e
          ? n.ordinalNumber(r, { unit: "hour" })
          : J(r, e.length);
      },
      k: function (t, e, n) {
        let r = t.getHours();
        return (
          0 === r && (r = 24),
          "ko" === e ? n.ordinalNumber(r, { unit: "hour" }) : J(r, e.length)
        );
      },
      m: function (t, e, n) {
        return "mo" === e
          ? n.ordinalNumber(t.getMinutes(), { unit: "minute" })
          : _.m(t, e);
      },
      s: function (t, e, n) {
        return "so" === e
          ? n.ordinalNumber(t.getSeconds(), { unit: "second" })
          : _.s(t, e);
      },
      S: function (t, e) {
        return _.S(t, e);
      },
      X: function (t, e, n) {
        const r = t.getTimezoneOffset();
        if (0 === r) return "Z";
        switch (e) {
          case "X":
            return Z(r);
          case "XXXX":
          case "XX":
            return tt(r);
          default:
            return tt(r, ":");
        }
      },
      x: function (t, e, n) {
        const r = t.getTimezoneOffset();
        switch (e) {
          case "x":
            return Z(r);
          case "xxxx":
          case "xx":
            return tt(r);
          default:
            return tt(r, ":");
        }
      },
      O: function (t, e, n) {
        const r = t.getTimezoneOffset();
        switch (e) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + K(r, ":");
          default:
            return "GMT" + tt(r, ":");
        }
      },
      z: function (t, e, n) {
        const r = t.getTimezoneOffset();
        switch (e) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + K(r, ":");
          default:
            return "GMT" + tt(r, ":");
        }
      },
      t: function (t, e, n) {
        return J(Math.trunc(+t / 1e3), e.length);
      },
      T: function (t, e, n) {
        return J(+t, e.length);
      },
    };
  function K(t, e = "") {
    const n = t > 0 ? "-" : "+",
      r = Math.abs(t),
      a = Math.trunc(r / 60),
      o = r % 60;
    return 0 === o ? n + String(a) : n + String(a) + e + J(o, 2);
  }
  function Z(t, e) {
    return t % 60 == 0
      ? (t > 0 ? "-" : "+") + J(Math.abs(t) / 60, 2)
      : tt(t, e);
  }
  function tt(t, e = "") {
    const n = t > 0 ? "-" : "+",
      r = Math.abs(t);
    return n + J(Math.trunc(r / 60), 2) + e + J(r % 60, 2);
  }
  const et = (t, e) => {
      switch (t) {
        case "P":
          return e.date({ width: "short" });
        case "PP":
          return e.date({ width: "medium" });
        case "PPP":
          return e.date({ width: "long" });
        default:
          return e.date({ width: "full" });
      }
    },
    nt = (t, e) => {
      switch (t) {
        case "p":
          return e.time({ width: "short" });
        case "pp":
          return e.time({ width: "medium" });
        case "ppp":
          return e.time({ width: "long" });
        default:
          return e.time({ width: "full" });
      }
    },
    rt = {
      p: nt,
      P: (t, e) => {
        const n = t.match(/(P+)(p+)?/) || [],
          r = n[1],
          a = n[2];
        if (!a) return et(t, e);
        let o;
        switch (r) {
          case "P":
            o = e.dateTime({ width: "short" });
            break;
          case "PP":
            o = e.dateTime({ width: "medium" });
            break;
          case "PPP":
            o = e.dateTime({ width: "long" });
            break;
          default:
            o = e.dateTime({ width: "full" });
        }
        return o.replace("{{date}}", et(r, e)).replace("{{time}}", nt(a, e));
      },
    },
    at = /^D+$/,
    ot = /^Y+$/,
    it = ["D", "DD", "YY", "YYYY"];
  function ct(t) {
    return !(
      (!(
        (e = t) instanceof Date ||
        ("object" == typeof e &&
          "[object Date]" === Object.prototype.toString.call(e))
      ) &&
        "number" != typeof t) ||
      isNaN(+H(t))
    );
    var e;
  }
  const st = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    ut = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    dt = /^'([^]*?)'?$/,
    lt = /''/g,
    ft = /[a-zA-Z]/;
  function ht(t, e, n) {
    const r = F(),
      a = n?.locale ?? r.locale ?? N,
      o =
        n?.firstWeekContainsDate ??
        n?.locale?.options?.firstWeekContainsDate ??
        r.firstWeekContainsDate ??
        r.locale?.options?.firstWeekContainsDate ??
        1,
      i =
        n?.weekStartsOn ??
        n?.locale?.options?.weekStartsOn ??
        r.weekStartsOn ??
        r.locale?.options?.weekStartsOn ??
        0,
      c = H(t, n?.in);
    if (!ct(c)) throw new RangeError("Invalid time value");
    let s = e
      .match(ut)
      .map((t) => {
        const e = t[0];
        return "p" === e || "P" === e ? (0, rt[e])(t, a.formatLong) : t;
      })
      .join("")
      .match(st)
      .map((t) => {
        if ("''" === t) return { isToken: !1, value: "'" };
        const e = t[0];
        if ("'" === e) return { isToken: !1, value: mt(t) };
        if (V[e]) return { isToken: !0, value: t };
        if (e.match(ft))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              e +
              "`",
          );
        return { isToken: !1, value: t };
      });
    a.localize.preprocessor && (s = a.localize.preprocessor(c, s));
    const u = { firstWeekContainsDate: o, weekStartsOn: i, locale: a };
    return s
      .map((r) => {
        if (!r.isToken) return r.value;
        const o = r.value;
        return (
          ((!n?.useAdditionalWeekYearTokens &&
            (function (t) {
              return ot.test(t);
            })(o)) ||
            (!n?.useAdditionalDayOfYearTokens &&
              (function (t) {
                return at.test(t);
              })(o))) &&
            (function (t, e, n) {
              const r = (function (t, e, n) {
                const r = "Y" === t[0] ? "years" : "days of the month";
                return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
              })(t, e, n);
              if ((console.warn(r), it.includes(t))) throw new RangeError(r);
            })(o, e, String(t)),
          (0, V[o[0]])(c, o, a.localize, u)
        );
      })
      .join("");
  }
  function mt(t) {
    const e = t.match(dt);
    return e ? e[1].replace(lt, "'") : t;
  }
  const gt = new (class {
      constructor(t) {
        (this.url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${t}?key=LN6UDU35ETQ9B4CG3C36RJSGT`),
          this.response;
      }
      changeLocation(t) {
        return (this.url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${t.split(" ").join("+")}?key=LN6UDU35ETQ9B4CG3C36RJSGT`);
      }
      async fetchData() {
        try {
          let t = await fetch(this.url, { mode: "cors" }),
            e = await t.json();
          this.response = await e;
        } catch (t) {
          console.error(t);
        }
      }
      getWeatherDays() {
        return this.response.days;
      }
      getLocation() {
        return this.response.resolvedAddress;
      }
    })("boston"),
    pt = document.querySelector("#search");
  async function wt() {
    await gt.fetchData();
    let t = gt.getWeatherDays(),
      e = [
        gt.getLocation().split(",").splice(0, 1),
        t[0].temp,
        t[0].tempmax,
        t[0].tempmin,
        t[0].icon,
        t[0].description,
      ];
    k.addCurrentDayWeather(...e), k.clearNextDaysWeather();
    for (let e = 2; e < 15; e++)
      k.addNextDaysWeather(
        ht(new Date(t[e].datetime), "EEEE"),
        t[e].icon,
        t[e].temp,
      );
  }
  wt(),
    pt.addEventListener("keypress", (t) => {
      "Enter" === t.key && (gt.changeLocation(pt.value), wt(), (pt.value = ""));
    });
})();
