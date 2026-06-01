import { jsxs as l, jsx as e, Fragment as W } from "react/jsx-runtime";
import st from "../files/directional-arrow.1d595d66.svg";
import lt from "../files/beast-ruta.a92bcc27.svg";
import ot from "../files/beast-medoh.751d89f1.svg";
import it from "../files/beast-naboris.bb2324b7.svg";
import ct from "../files/beast-rudania.8f64b6ae.svg";
import rt from "../files/horse-spur-normal.ead36af1.svg";
import dt from "../files/illustration-sword.0d38b51d.svg";
import mt from "../files/illustration-rupee.c128164f.svg";
import ht from "../files/illustration-slate.a20defcf.svg";
import pt from "../files/illustration-memories.0e105887.svg";
import ut from "../files/loading-icon-shrine.dfdbe1b7.svg";
import { useEffect as De, useState as Ct } from "react";
import Nt from "../files/quick-selector-center.8ab70476.svg";
import gt from "../files/quick-selector-right.ba145b2a.svg";
import vt from "../files/quick-selector-left.422e7e51.svg";
import Lt from "../files/quick-selector-top.8a86ac33.svg";
import K from "../files/ability-round-bomb-plus.2128a04a.svg";
import yt from "../files/ability-round-bomb.a1cf4cd3.svg";
import nt from "../files/ability-stasis.f39b2cca.svg";
import Ne from "../files/ability-cryonis.a9f3b669.svg";
import at from "../files/ability-magnesis.0aabe9da.svg";
import zt from "../files/sheikah-bg-dark.837da1c5.png";
import ft from "../files/sheikah-symbol.3b10717e.svg";
import bt from "../files/sound-bg.be371ec7.svg";
import wt from "../files/sound-meter-low.aa43a851.svg";
import $t from "../files/sound-meter-high.85423969.svg";
import Bt from "../files/starburst-1.f8a59ca7.svg";
import xt from "../files/starburst-2.ce78d73f.svg";
import Ee from "../files/temp-regular.383a4567.svg";
import kt from "../files/temp-cold.ce6db22a.svg";
import Mt from "../files/text-ornament-corner.457d3da4.svg";
import St from "../files/timer-ornament-right.dd4f7456.svg";
function Tt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Le = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Fe;
function At() {
  return Fe || (Fe = 1, (function(t) {
    (function() {
      var n = {}.hasOwnProperty;
      function a() {
        for (var i = "", r = 0; r < arguments.length; r++) {
          var d = arguments[r];
          d && (i = o(i, s(d)));
        }
        return i;
      }
      function s(i) {
        if (typeof i == "string" || typeof i == "number")
          return i;
        if (typeof i != "object")
          return "";
        if (Array.isArray(i))
          return a.apply(null, i);
        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
          return i.toString();
        var r = "";
        for (var d in i)
          n.call(i, d) && i[d] && (r = o(r, d));
        return r;
      }
      function o(i, r) {
        return r ? i ? i + " " + r : i + r : i;
      }
      t.exports ? (a.default = a, t.exports = a) : window.classNames = a;
    })();
  })(Le)), Le.exports;
}
var Ht = At();
const c = /* @__PURE__ */ Tt(Ht), Zt = "zelda-button-Oba89", Ot = "zelda-disabled-Y5Jr7", It = "zelda-small-SXyAB", Dt = "zelda-middle-MubWf", Et = "zelda-large-xMYFS", Ft = "zelda-sheikah-iD87k", Vt = "zelda-ghost-qqoXH", Rt = "zelda-danger-hy3of", Wt = "zelda-selected-pzDm5", Gt = "zelda-block-2kS9W", Ut = "zelda-loading-yUQ8I", Qt = "zelda-icon-cUHcu", Pt = "zelda-content-cD3m4", qt = "zelda-spinner-DW9qQ", _t = "zelda-hyrule-spin-LIPri", f = {
  button: Zt,
  disabled: Ot,
  small: It,
  middle: Dt,
  large: Et,
  sheikah: Ft,
  ghost: Vt,
  danger: Rt,
  selected: Wt,
  block: Gt,
  loading: Ut,
  icon: Qt,
  content: Pt,
  spinner: qt,
  "hyrule-spin": "zelda-hyrule-spin-LIPri",
  hyruleSpin: _t
}, Yt = ({
  variant: t = "primary",
  size: n = "middle",
  htmlType: a = "button",
  block: s = !1,
  loading: o = !1,
  disabled: i = !1,
  icon: r,
  children: d,
  className: v,
  style: g,
  ...ge
}) => {
  const ve = c(
    f.button,
    f[t],
    f[n],
    {
      [f.block]: s,
      [f.loading]: o,
      [f.disabled]: i
    },
    v
  );
  return /* @__PURE__ */ l(
    "button",
    {
      className: ve,
      style: g,
      type: a,
      disabled: i || o,
      ...ge,
      children: [
        o && /* @__PURE__ */ e("span", { className: f.spinner }),
        r && !o && /* @__PURE__ */ e("span", { className: f.icon, children: r }),
        d && /* @__PURE__ */ e("span", { className: f.content, children: d })
      ]
    }
  );
};
Yt.displayName = "Button";
const jt = "zelda-card-DJ515", Kt = "zelda-sheikah-L79bI", Xt = "zelda-item--cjj5", Jt = "zelda-selected-gmKIm", en = "zelda-golden-4zeKK", tn = "zelda-title-vqtUd", nn = "zelda-body-u037m", G = {
  card: jt,
  default: "zelda-default--fyzt",
  sheikah: Kt,
  item: Xt,
  selected: Jt,
  golden: en,
  title: tn,
  body: nn
}, an = ({
  variant: t = "default",
  title: n,
  selected: a = !1,
  children: s,
  className: o,
  style: i,
  ...r
}) => {
  const d = c(
    G.card,
    G[t],
    { [G.selected]: a },
    o
  );
  return /* @__PURE__ */ l("div", { className: d, style: i, ...r, children: [
    n && /* @__PURE__ */ e("div", { className: G.title, children: n }),
    /* @__PURE__ */ e("div", { className: G.body, children: s })
  ] });
};
an.displayName = "Card";
const sn = "zelda-dialog-281l4", ln = "zelda-bg-6WhhC", on = "zelda-written-rehvK", cn = "zelda-sheikah-FUYct", rn = "zelda-speaker-IxNBi", dn = "zelda-content-BzhfF", mn = "zelda-continueArrow-weIsn", hn = "zelda-hyrule-blink-OOLz9", A = {
  dialog: sn,
  bg: ln,
  written: on,
  sheikah: cn,
  speaker: rn,
  content: dn,
  continueArrow: mn,
  "hyrule-blink": "zelda-hyrule-blink-OOLz9",
  hyruleBlink: hn
}, pn = "M0 90C0 40.2944 40.2944 0 90 0H820C869.706 0 910 40.2944 910 90V95C910 144.706 869.706 185 820 185H90C40.2944 185 0 144.706 0 95V90ZM21.8372 85.7898C21.7117 86.7497 22.4442 87.5827 23.3745 87.5827H24.385C25.2104 87.5827 25.894 86.9212 25.9877 86.0673C26.9015 77.7396 30.0223 70.1101 34.7259 63.8289C35.513 62.7778 34.4479 61.384 33.5138 62.2951C27.2995 68.3565 23.0426 76.5678 21.8372 85.7898ZM21.8437 99.3087C21.6896 98.3355 22.4273 97.4734 23.3745 97.4734H24.3603C25.1713 97.4734 25.8479 98.1128 25.9585 98.9494C27.0069 106.881 30.0623 114.146 34.5738 120.171C35.3609 121.222 34.2958 122.616 33.3616 121.705C27.3951 115.885 23.2331 108.084 21.8437 99.3087ZM23.0253 89.9675C23.4158 89.5769 24.0489 89.5769 24.4395 89.9675L26.293 91.821C26.6835 92.2115 26.6835 92.8447 26.293 93.2352L24.4395 95.0888C24.0489 95.4793 23.4158 95.4793 23.0253 95.0888L21.1717 93.2352C20.7812 92.8447 20.7812 92.2115 21.1717 91.821L23.0253 89.9675ZM886.625 86.5266C887.573 86.5266 888.31 85.6645 888.156 84.6913C886.767 75.9163 882.605 68.1148 876.638 62.2951C875.704 61.384 874.639 62.7778 875.426 63.8288C879.938 69.8535 882.993 77.1187 884.042 85.0506C884.152 85.8872 884.829 86.5266 885.64 86.5266H886.625ZM886.625 96.4173C887.556 96.4173 888.288 97.2503 888.163 98.2102C886.957 107.432 882.701 115.644 876.486 121.705C875.552 122.616 874.487 121.222 875.274 120.171C879.978 113.89 883.098 106.26 884.012 97.9327C884.106 97.0788 884.79 96.4173 885.615 96.4173H886.625ZM885.561 94.0325C885.951 94.4231 886.584 94.4231 886.975 94.0325L888.828 92.179C889.219 91.7885 889.219 91.1553 888.828 90.7648L886.975 88.9112C886.584 88.5207 885.951 88.5207 885.561 88.9112L883.707 90.7648C883.316 91.1553 883.316 91.7885 883.707 92.179L885.561 94.0325Z", un = "M0 90C0 40.2944 40.2944 0 90 0H820C869.706 0 910 40.2944 910 90V95C910 144.706 869.706 185 820 185H90C40.2944 185 0 144.706 0 95V90Z", Cn = ({ type: t = "speech", speaker: n, children: a, showContinue: s = !0, className: o, style: i }) => /* @__PURE__ */ l("div", { className: c(A.dialog, A[t], o), style: i, role: "region", "aria-label": n ? `${n} dialog` : "Dialog", children: [
  /* @__PURE__ */ l("svg", { className: A.bg, viewBox: "0 0 910 185", fill: "none", preserveAspectRatio: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ e("path", { fillRule: "evenodd", clipRule: "evenodd", d: pn, fill: "black", fillOpacity: "0.5" }),
    t === "sheikah" && /* @__PURE__ */ e("path", { d: un, fill: "none", stroke: "rgba(60,211,252,0.6)", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" })
  ] }),
  n && /* @__PURE__ */ e("div", { className: A.speaker, children: n }),
  /* @__PURE__ */ e("div", { className: A.content, children: a }),
  s && /* @__PURE__ */ e("span", { className: A.continueArrow, "aria-hidden": "true", children: /* @__PURE__ */ e("svg", { width: "40", height: "26", viewBox: "0 0 38 25.4", fill: "none", children: /* @__PURE__ */ e("path", { d: "M19 25.4L0 6.4L6.4 0L19 12.6L31.6 0L38 6.4L19 25.4Z", fill: "rgba(226,222,211,0.5)" }) }) })
] });
Cn.displayName = "Dialog";
const Nn = "zelda-overlay-vkbz2", gn = "zelda-modal-d0zyM", vn = "zelda-header-udOSi", Ln = "zelda-title-s6pv3", yn = "zelda-closeBtn-bC575", zn = "zelda-body--aiyx", fn = "zelda-footer-9Ib-a", bn = "zelda-cancelBtn-CaI2C", wn = "zelda-confirmBtn-0WUfE", b = {
  overlay: Nn,
  modal: gn,
  header: vn,
  title: Ln,
  closeBtn: yn,
  body: zn,
  footer: fn,
  cancelBtn: bn,
  confirmBtn: wn
}, $n = ({
  open: t,
  title: n,
  width: a = 480,
  maskClosable: s = !0,
  footer: o,
  onClose: i,
  onOk: r,
  children: d,
  className: v
}) => {
  if (De(() => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [t]), !t) return null;
  const g = () => {
    s && i && i();
  }, ge = /* @__PURE__ */ l(W, { children: [
    /* @__PURE__ */ e("button", { className: b.cancelBtn, onClick: i, children: "Cancel" }),
    /* @__PURE__ */ e("button", { className: b.confirmBtn, onClick: r, children: "Confirm" })
  ] });
  return /* @__PURE__ */ e("div", { className: b.overlay, onClick: g, role: "presentation", children: /* @__PURE__ */ l(
    "div",
    {
      className: c(b.modal, v),
      style: { width: a },
      onClick: (ve) => ve.stopPropagation(),
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": n ? "modal-title" : void 0,
      children: [
        n && /* @__PURE__ */ l("div", { className: b.header, children: [
          /* @__PURE__ */ e("h3", { className: b.title, id: "modal-title", children: n }),
          /* @__PURE__ */ e("button", { className: b.closeBtn, onClick: i, "aria-label": "Close", children: "✕" })
        ] }),
        /* @__PURE__ */ e("div", { className: b.body, children: d }),
        o !== null && /* @__PURE__ */ e("div", { className: b.footer, children: o === void 0 ? ge : o })
      ]
    }
  ) });
};
$n.displayName = "Modal";
const Bn = "zelda-divider-ZBhpE", xn = "zelda-subtle-CD99A", kn = "zelda-sheikah--QPwh", Mn = "zelda-golden-3mReN", Sn = "zelda-ornament-oYQfM", Tn = "zelda-ornamentImg-mc407", An = "zelda-line-iVjuv", U = {
  divider: Bn,
  subtle: xn,
  sheikah: kn,
  golden: Mn,
  ornament: Sn,
  ornamentImg: Tn,
  line: An
}, Hn = "M31.451 9.13059C30.8963 7.24598 29.2323 5.86136 27.2117 5.63059C27.0928 5.63059 26.974 5.51521 26.9343 5.39983C26.4589 2.20752 23.4874 -0.215561 20.0009 0.0152088C16.7521 0.245978 14.1372 2.89982 14.0183 6.09213C13.9391 8.09213 14.89 9.93829 16.3559 11.1306C16.554 11.2844 16.554 11.5921 16.3163 11.746L15.9993 11.9767C15.8408 12.0921 15.6824 12.0537 15.5635 11.8998C13.8599 9.55367 10.928 8.13059 7.71881 8.43829C3.91532 8.78444 0.389173 12.2844 0.0325957 15.9767C-0.44284 21.3614 4.35114 25.7844 9.93751 24.8998C13.8599 24.2844 17.1483 20.4383 17.1087 16.5921C17.1087 16.2075 17.069 15.7844 16.9898 15.3998C16.9502 15.246 17.0294 15.0537 17.1879 14.9768L20.3179 12.7844C20.516 12.6691 20.7141 12.5921 20.9122 12.5921C21.1499 12.5921 21.348 12.5537 21.5857 12.5152C21.7838 12.4767 21.9819 12.5921 22.0611 12.7844C22.8931 14.3614 24.5968 15.4383 26.5381 15.4383C28.4795 15.4383 30.1435 14.3998 30.9755 12.8614C31.0152 12.7844 31.134 12.7075 31.2133 12.7075L49.3194 12.1306C49.676 12.1306 49.9534 11.8614 49.9534 11.5152V10.4767C49.9534 10.1306 49.676 9.86136 49.3194 9.86136L31.7283 9.36136C31.6095 9.36136 31.4906 9.24598 31.451 9.13059ZM8.59044 20.8614C6.21326 20.8614 4.31152 19.0152 4.31152 16.7075C4.31152 14.3998 6.25288 12.5537 8.59044 12.5537C10.9676 12.5537 12.8694 14.4383 12.8694 16.7075C12.8694 18.9768 10.9676 20.8614 8.59044 20.8614ZM23.1705 6.89983C23.012 7.59213 22.5762 8.16906 21.9819 8.51521C21.5461 8.78444 21.0706 8.93829 20.516 8.93829C20.4763 8.93829 20.3971 8.93829 20.3575 8.93829C18.9312 8.86136 17.8218 7.70752 17.8218 6.3229C17.8218 4.86136 19.05 3.66906 20.5556 3.66906C22.0611 3.66906 23.2893 4.86136 23.2893 6.3229C23.2497 6.51521 23.2101 6.70752 23.1705 6.89983ZM26.6174 12.6306C25.6665 12.6306 24.8741 12.0537 24.5572 11.246C24.4779 11.0152 24.4383 10.7844 24.4383 10.5152C24.4383 9.36136 25.4288 8.39982 26.6174 8.39982H26.657C27.8456 8.39982 28.7965 9.36136 28.7965 10.5152C28.7965 11.6691 27.806 12.6306 26.6174 12.6306Z", Ve = ({ flip: t }) => /* @__PURE__ */ e(
  "svg",
  {
    width: "50",
    height: "25",
    viewBox: "0 0 49.95 25.01",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t ? { transform: "scaleX(-1)" } : void 0,
    children: /* @__PURE__ */ e("path", { d: Hn, fill: "#E2DED3" })
  }
), Zn = ({
  variant: t = "subtle",
  className: n,
  style: a
}) => t === "ornament" ? /* @__PURE__ */ l("div", { className: c(U.divider, U.ornament, n), style: a, children: [
  /* @__PURE__ */ e(Ve, {}),
  /* @__PURE__ */ e("span", { className: U.line }),
  /* @__PURE__ */ e(Ve, { flip: !0 })
] }) : /* @__PURE__ */ e("div", { className: c(U.divider, U[t], n), style: a });
Zn.displayName = "Divider";
const On = "zelda-container-7dWc0", In = "zelda-spinner-mPDrH", Dn = "zelda-ring-REC19", En = "zelda-sheikah-spin-VxKDx", Fn = "zelda-eye-G3H-U", Vn = "zelda-sheikah-pulse-f495D", Rn = "zelda-small-H-C6q", Wn = "zelda-middle-x-cVd", Gn = "zelda-large-RukB5", Un = "zelda-tip-MXmJL", H = {
  container: On,
  spinner: In,
  ring: Dn,
  "sheikah-spin": "zelda-sheikah-spin-VxKDx",
  sheikahSpin: En,
  eye: Fn,
  "sheikah-pulse": "zelda-sheikah-pulse-f495D",
  sheikahPulse: Vn,
  small: Rn,
  middle: Wn,
  large: Gn,
  tip: Un
}, Qn = ({
  tip: t,
  size: n = "middle",
  className: a,
  style: s
}) => /* @__PURE__ */ l("div", { className: c(H.container, H[n], a), style: s, children: [
  /* @__PURE__ */ l("div", { className: H.spinner, children: [
    /* @__PURE__ */ e("div", { className: H.ring }),
    /* @__PURE__ */ e("div", { className: H.eye })
  ] }),
  t && /* @__PURE__ */ e("span", { className: H.tip, children: t })
] });
Qn.displayName = "Loading";
const Pn = "zelda-container-Fpag9", qn = "zelda-heart-7Ac9U", _n = "zelda-filled-8OAa6", Yn = "zelda-empty-B6bD-", jn = "zelda-bonus-i9-bV", Z = {
  container: Pn,
  heart: qn,
  filled: _n,
  empty: Yn,
  bonus: jn
}, Kn = "M21.7675 12.7969L12.1037 21.7487L2.05872 11.598C-0.686241 8.82416 -0.686239 4.35741 2.05872 1.58356C4.14815 -0.527857 7.55918 -0.527854 9.64861 1.58357L12.1037 4.06447L14.0676 2.0798C16.3794 -0.256337 20.1909 -0.129535 22.3423 2.35509C24.9973 5.42139 24.7431 10.0406 21.7675 12.7969Z", Re = ({ type: t }) => /* @__PURE__ */ e("svg", { width: "30", height: "24", viewBox: "0 0 24.18 21.75", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e("path", { d: Kn, fill: t === "filled" ? "#F1362F" : t === "bonus" ? "#FFE465" : "#363930" }) }), Xn = ({
  current: t,
  max: n,
  bonus: a = 0,
  className: s,
  style: o
}) => {
  const i = [];
  for (let r = 0; r < n; r++) {
    const d = r < t;
    i.push(
      /* @__PURE__ */ e("span", { className: c(Z.heart, {
        [Z.filled]: d,
        [Z.empty]: !d
      }), children: /* @__PURE__ */ e(Re, { type: d ? "filled" : "empty" }) }, `heart-${r}`)
    );
  }
  for (let r = 0; r < a; r++)
    i.push(
      /* @__PURE__ */ e("span", { className: c(Z.heart, Z.bonus), children: /* @__PURE__ */ e(Re, { type: "bonus" }) }, `bonus-${r}`)
    );
  return /* @__PURE__ */ e("div", { className: c(Z.container, s), style: o, children: i });
};
Xn.displayName = "HealthBar";
const Jn = "zelda-container-AXh04", ea = "zelda-track-tyc-w", ta = "zelda-wheelWrapper-MQOcg", na = "zelda-wheel-c4a-D", aa = "zelda-bonus-WpW8t", sa = "zelda-depleted-YkJhU", O = {
  container: Jn,
  track: ea,
  wheelWrapper: ta,
  wheel: na,
  bonus: aa,
  depleted: sa
}, We = "M60.75 30.375C60.75 47.1506 47.1506 60.75 30.375 60.75C13.5994 60.75 0 47.1506 0 30.375C0 13.5994 13.5994 0 30.375 0C47.1506 0 60.75 13.5994 60.75 30.375ZM19.7438 30.375C19.7438 36.2465 24.5035 41.0062 30.375 41.0062C36.2465 41.0062 41.0062 36.2465 41.0062 30.375C41.0062 24.5035 36.2465 19.7438 30.375 19.7438C24.5035 19.7438 19.7438 24.5035 19.7438 30.375Z", la = ({
  value: t,
  size: n = 90,
  bonus: a = !1,
  className: s,
  style: o
}) => {
  const i = t <= 0.2 && !a, r = Math.max(0, Math.min(1, t)) * 360, d = n * 0.675, v = a ? "#FFE465" : i ? "#F15050" : "#13FF59", g = a ? "rgba(255, 228, 96, 0.6)" : i ? "rgba(241, 80, 80, 0.6)" : "rgba(19, 255, 89, 0.6)";
  return /* @__PURE__ */ l(
    "div",
    {
      className: c(
        O.container,
        { [O.bonus]: a, [O.depleted]: i },
        s
      ),
      style: { width: n, height: n, ...o },
      children: [
        /* @__PURE__ */ e(
          "svg",
          {
            className: O.track,
            viewBox: "0 0 60.75 60.75",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: d, height: d },
            children: /* @__PURE__ */ e("path", { d: We, fill: "black", fillOpacity: "0.6" })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: O.wheelWrapper,
            style: {
              width: d,
              height: d,
              maskImage: `conic-gradient(from -90deg, black ${r}deg, transparent ${r}deg)`,
              WebkitMaskImage: `conic-gradient(from -90deg, black ${r}deg, transparent ${r}deg)`
            },
            children: /* @__PURE__ */ e(
              "svg",
              {
                className: O.wheel,
                viewBox: "0 0 60.75 60.75",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                  width: "100%",
                  height: "100%",
                  filter: `drop-shadow(0 0 4px ${g})`
                },
                children: /* @__PURE__ */ e("path", { d: We, fill: v })
              }
            )
          }
        )
      ]
    }
  );
};
la.displayName = "StaminaWheel";
const oa = "zelda-container-CmEjp", ia = "zelda-icon-J47bX", ca = "zelda-glowing-ZCKIk", ye = {
  container: oa,
  icon: ia,
  glowing: ca
}, ra = {
  clear: {
    viewBox: "0 0 20.88 23.2",
    path: "M15.1938 11.6C15.1938 14.268 13.0478 16.414 10.4378 16.414C7.82776 16.414 5.68176 14.268 5.68176 11.6C5.68176 8.932 7.82776 6.786 10.4378 6.786C13.0478 6.786 15.1938 8.932 15.1938 11.6ZM10.4378 0C9.10376 0 8.05976 1.102 8.05976 2.378C8.05976 3.654 9.10376 4.756 10.4378 4.756C11.7718 4.756 12.8158 3.654 12.8158 2.378C12.8158 1.102 11.7718 0 10.4378 0ZM10.4378 18.386C9.10376 18.386 8.05976 19.488 8.05976 20.764C8.05976 22.04 9.10376 23.2 10.4378 23.2C11.7718 23.2 12.8158 22.098 12.8158 20.822C12.8158 19.546 11.7718 18.386 10.4378 18.386ZM0.287758 16.994C0.867758 18.154 2.31776 18.618 3.47776 17.98C4.63776 17.342 5.10176 15.892 4.46376 14.732C3.82576 13.572 2.43376 13.108 1.27376 13.746C0.113758 14.384 -0.350242 15.834 0.287758 16.994ZM16.4118 8.41C17.0498 9.57 18.4418 10.034 19.6018 9.396C20.7618 8.758 21.2258 7.308 20.5878 6.148C19.9498 4.988 18.5578 4.582 17.3978 5.22C16.2378 5.858 15.7738 7.25 16.4118 8.41ZM0.635758 5.22C-0.0602417 6.38 0.345758 7.83 1.44776 8.526C2.54976 9.222 4.05776 8.874 4.69576 7.714C5.33376 6.554 4.98576 5.104 3.88376 4.408C2.78176 3.712 1.27376 4.118 0.635758 5.22ZM16.1798 14.732C15.4838 15.892 15.8898 17.342 16.9918 18.038C18.0938 18.734 19.6018 18.386 20.2398 17.226C20.9358 16.066 20.5298 14.616 19.4278 13.92C18.3258 13.224 16.8758 13.63 16.1798 14.732Z"
  },
  storm: {
    viewBox: "0 0 19.71 23.22",
    path: "M6.33724 0H13.5292C14.1672 0 14.5153 0.696 14.2253 1.218L11.0352 6.38H18.9232C19.6192 6.38 19.9672 7.192 19.5032 7.714L3.55325 23.026C3.03125 23.548 2.16125 22.91 2.50925 22.214L7.96125 11.89H0.711246C0.189246 11.89 -0.158754 11.31 0.0732464 10.846L5.58325 0.464C5.75725 0.174 6.04724 0 6.33724 0Z"
  },
  rain: {
    viewBox: "0 0 19.2 20.85",
    path: "M19.198 14.877C19.198 18.183 16.588 20.851 13.34 20.851C10.092 20.851 7.482 18.183 7.482 14.877C7.482 10.817 11.194 3.335 12.76 0.493C13.05 -0.0289999 13.746 -0.0289999 14.036 0.493C15.428 3.393 19.198 10.875 19.198 14.877ZM4.234 0.609C3.828 -0.203 2.668 -0.203 2.262 0.609C1.334 2.523 0 5.481 0 7.279C0 9.077 1.45 10.527 3.248 10.527C5.046 10.527 6.496 9.077 6.496 7.279C6.496 5.481 5.22 2.523 4.234 0.609Z"
  },
  cloudy: {
    viewBox: "0 0 23.66 19.08",
    path: "M20.648 15.138C20.648 17.342 18.792 19.082 16.53 19.082H3.132C2.958 19.082 2.842 19.082 2.726 19.024C1.218 18.85 0 17.574 0 16.066C0 14.558 1.16 13.282 2.726 13.108C2.784 9.976 5.51 7.424 8.816 7.424C11.6 7.424 13.92 9.164 14.616 11.6C15.196 11.31 15.834 11.136 16.53 11.136C18.792 11.194 20.648 12.992 20.648 15.138ZM20.3 2.436C19.14 0.928 17.342 0 15.254 0C13.166 0 11.368 0.986 10.208 2.436H10.15C8.178 2.436 6.612 3.886 6.438 5.742C7.366 5.394 8.352 5.22 9.338 5.22C12.006 5.22 14.5 6.554 15.95 8.7L16.124 8.99L16.472 8.932C16.646 8.932 16.82 8.932 16.994 8.932C18.096 8.932 19.024 9.106 20.068 9.512C22.04 9.396 23.664 7.946 23.664 6.032C23.664 4.118 22.214 2.552 20.3 2.436Z"
  }
}, da = ({
  weather: t,
  glowing: n = !0,
  size: a = 29,
  className: s,
  style: o
}) => {
  const { path: i, viewBox: r } = ra[t];
  return /* @__PURE__ */ e(
    "div",
    {
      className: c(ye.container, { [ye.glowing]: n }, s),
      style: { width: a, height: a, ...o },
      children: /* @__PURE__ */ e(
        "svg",
        {
          viewBox: r,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: ye.icon,
          children: /* @__PURE__ */ e("path", { d: i, fill: "#C9FAFF", fillOpacity: 0.8 })
        }
      )
    }
  );
};
da.displayName = "WeatherIcon";
const ma = "zelda-container-iLitg", ha = "zelda-amount-L5TnF", Ge = {
  container: ma,
  amount: ha
}, pa = {
  green: ["#0F2810", "#173515"],
  blue: ["#0C1A3A", "#142D5C"],
  red: ["#3A0C0C", "#5C1414"],
  purple: ["#2A0C3A", "#4A145C"],
  silver: ["#2A2A2A", "#4A4A4A"],
  gold: ["#3A2A0C", "#5C4A14"]
}, X = "M0 10.8611V0L12.5 10.8611L6.25 15.9722L0 10.8611Z", ua = ({ color: t, id: n }) => {
  const [a, s] = pa[t];
  return /* @__PURE__ */ l("svg", { width: "25", height: "46", viewBox: "0 0 25 46", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ e("g", { transform: "translate(0, 0)", children: /* @__PURE__ */ e("path", { d: X, fill: `url(#${n}-grad)` }) }),
    /* @__PURE__ */ e("g", { transform: "translate(0, 30) scale(1, -1)", children: /* @__PURE__ */ e("path", { d: X, fill: `url(#${n}-grad)` }) }),
    /* @__PURE__ */ e("g", { transform: "translate(25, 0) scale(-1, 1)", children: /* @__PURE__ */ e("path", { d: X, fill: `url(#${n}-grad2)` }) }),
    /* @__PURE__ */ e("g", { transform: "translate(25, 30) scale(-1, -1)", children: /* @__PURE__ */ e("path", { d: X, fill: `url(#${n}-grad2)` }) }),
    /* @__PURE__ */ e("rect", { x: "6", y: "11", width: "13", height: "24", rx: "1", fill: s, opacity: "0.4" }),
    /* @__PURE__ */ l("defs", { children: [
      /* @__PURE__ */ l("linearGradient", { id: `${n}-grad`, x1: "0", y1: "0", x2: "10", y2: "14", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ e("stop", { stopColor: a }),
        /* @__PURE__ */ e("stop", { offset: "1", stopColor: s })
      ] }),
      /* @__PURE__ */ l("linearGradient", { id: `${n}-grad2`, x1: "0", y1: "0", x2: "10", y2: "14", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ e("stop", { stopColor: s }),
        /* @__PURE__ */ e("stop", { offset: "1", stopColor: a })
      ] })
    ] })
  ] });
}, Ca = ({
  amount: t,
  color: n = "green",
  showLabel: a = !0,
  className: s,
  style: o
}) => {
  const i = t.toLocaleString();
  return /* @__PURE__ */ l("div", { className: c(Ge.container, s), style: o, children: [
    /* @__PURE__ */ e(ua, { color: n, id: `rupee-${n}` }),
    a && /* @__PURE__ */ e("span", { className: Ge.amount, children: i })
  ] });
};
Ca.displayName = "RupeeCounter";
const Na = "zelda-container-rjEAr", ga = "zelda-icon-YTHTW", va = "zelda-charges-6fQ4R", La = "zelda-times-LsWfh", ya = "zelda-count-jQIaa", za = "zelda-recharging-MkDd5", I = {
  container: Na,
  icon: ga,
  charges: va,
  times: La,
  count: ya,
  recharging: za
}, fa = {
  ruta: lt,
  medoh: ot,
  naboris: it,
  rudania: ct
}, ba = {
  ruta: "0 0 4px #27CBFF, 0 0 5px #27CBFF, 0 0 15px #27CBFF",
  medoh: "0 0 4px #7CFF4E, 0 0 5px #7CFF4E, 0 0 15px #7CFF4E",
  naboris: "0 0 4px #FCC63D, 0 0 5px #F8AF42, 0 0 15px #BD8B28",
  rudania: "0 0 4px #EB4713, 0 0 5px #EB4815, 0 0 15px #EC4916"
}, wa = ({
  beast: t,
  recharging: n = !1,
  charges: a = 1,
  size: s = 75,
  className: o,
  style: i
}) => {
  const r = n ? "0 0 4px #FF0000, 0 0 5px #FF0000, 0 0 15px #FF0000" : ba[t];
  return /* @__PURE__ */ l(
    "div",
    {
      className: c(I.container, { [I.recharging]: n }, o),
      style: { width: s, height: s, boxShadow: r, ...i },
      children: [
        /* @__PURE__ */ e("img", { src: fa[t], alt: "", className: I.icon }),
        a > 0 && /* @__PURE__ */ l("span", { className: I.charges, children: [
          /* @__PURE__ */ e("span", { className: I.times, children: "×" }),
          /* @__PURE__ */ e("span", { className: I.count, children: a })
        ] })
      ]
    }
  );
};
wa.displayName = "DivineBeast";
const $a = "zelda-container-QiE49", Ba = "zelda-icon-g301V", xa = "zelda-plusBadge-kXVok", ka = "zelda-rechargeOverlay-AytsX", Ma = "zelda-recharging-4nh8q", Q = {
  container: $a,
  icon: Ba,
  plusBadge: xa,
  rechargeOverlay: ka,
  recharging: Ma
}, Sa = {
  roundBomb: yt,
  cubeBomb: K,
  // cube bomb 用 plus 版本的 SVG
  magnesis: at,
  stasis: nt,
  cryonis: Ne,
  camera: Ne,
  // camera 暂用 cryonis 替代
  masterCycle: K
  // masterCycle 暂用 bomb plus 替代
}, Ta = {
  roundBomb: K,
  cubeBomb: K,
  magnesis: at,
  stasis: nt,
  cryonis: Ne,
  camera: Ne,
  masterCycle: K
}, Aa = ({
  ability: t,
  recharging: n = !1,
  plus: a = !1,
  size: s = 70,
  className: o,
  style: i
}) => /* @__PURE__ */ l(
  "div",
  {
    className: c(Q.container, { [Q.recharging]: n }, o),
    style: { width: s, height: s, ...i },
    children: [
      /* @__PURE__ */ e(
        "img",
        {
          src: a ? Ta[t] : Sa[t],
          alt: "",
          className: Q.icon
        }
      ),
      a && /* @__PURE__ */ e("span", { className: Q.plusBadge, children: "+" }),
      n && /* @__PURE__ */ e("div", { className: Q.rechargeOverlay })
    ]
  }
);
Aa.displayName = "SheikahAbility";
const Ha = "zelda-container-8lM7a", Za = {
  container: Ha
}, Oa = {
  green: { light: "#4CAF50", dark: "#173515" },
  blue: { light: "#42A5F5", dark: "#0D2B5C" },
  red: { light: "#EF5350", dark: "#5C1414" },
  purple: { light: "#AB47BC", dark: "#3A0C5C" },
  silver: { light: "#BDBDBD", dark: "#424242" },
  gold: { light: "#FFD54F", dark: "#5C4A14" }
}, Ia = ({ type: t, size: n = 46, className: a, style: s }) => {
  const { light: o, dark: i } = Oa[t], r = n * (25 / 46), d = `rupee-type-${t}`;
  return /* @__PURE__ */ e("div", { className: c(Za.container, a), style: { width: r, height: n, ...s }, children: /* @__PURE__ */ l("svg", { width: r, height: n, viewBox: "0 0 25 46", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ e("path", { d: "M12.5 0L25 16L12.5 24L12.5 0Z", fill: `url(#${d}-1)` }),
    /* @__PURE__ */ e("path", { d: "M12.5 0L0 16L12.5 24L12.5 0Z", fill: `url(#${d}-2)` }),
    /* @__PURE__ */ e("path", { d: "M12.5 46L25 30L12.5 22L12.5 46Z", fill: `url(#${d}-3)` }),
    /* @__PURE__ */ e("path", { d: "M12.5 46L0 30L12.5 22L12.5 46Z", fill: `url(#${d}-4)` }),
    /* @__PURE__ */ e("path", { d: "M0 16L12.5 24L25 16L25 30L12.5 22L0 30Z", fill: o, opacity: "0.6" }),
    /* @__PURE__ */ l("defs", { children: [
      /* @__PURE__ */ l("linearGradient", { id: `${d}-1`, x1: "18", y1: "0", x2: "18", y2: "24", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ e("stop", { stopColor: o }),
        /* @__PURE__ */ e("stop", { offset: "1", stopColor: i })
      ] }),
      /* @__PURE__ */ l("linearGradient", { id: `${d}-2`, x1: "6", y1: "0", x2: "6", y2: "24", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ e("stop", { stopColor: i }),
        /* @__PURE__ */ e("stop", { offset: "1", stopColor: o, stopOpacity: "0.7" })
      ] }),
      /* @__PURE__ */ l("linearGradient", { id: `${d}-3`, x1: "18", y1: "22", x2: "18", y2: "46", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ e("stop", { stopColor: i }),
        /* @__PURE__ */ e("stop", { offset: "1", stopColor: o, stopOpacity: "0.5" })
      ] }),
      /* @__PURE__ */ l("linearGradient", { id: `${d}-4`, x1: "6", y1: "22", x2: "6", y2: "46", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ e("stop", { stopColor: o, stopOpacity: "0.7" }),
        /* @__PURE__ */ e("stop", { offset: "1", stopColor: i })
      ] })
    ] })
  ] }) });
};
Ia.displayName = "RupeeType";
const Da = "zelda-container-WyZcX", Ea = "zelda-icon-GzOs5", Fa = "zelda-hot-2f8kQ", ze = {
  container: Da,
  icon: Ea,
  hot: Fa
}, Va = {
  regular: Ee,
  cold: kt,
  hot: Ee
  // hot 用 regular 的 SVG + CSS 色相旋转
}, Ra = ({ value: t = "regular", size: n = 50, className: a, style: s }) => /* @__PURE__ */ e(
  "div",
  {
    className: c(ze.container, ze[t], a),
    style: { width: n, height: n, ...s },
    children: /* @__PURE__ */ e("img", { src: Va[t], alt: "", className: ze.icon })
  }
);
Ra.displayName = "Temperature";
const Wa = "zelda-container-kaABu", Ga = "zelda-bg-bBdid", Ua = "zelda-meter-wr6K-", fe = {
  container: Wa,
  bg: Ga,
  meter: Ua
}, Qa = ({ level: t = "low", size: n = 50, className: a, style: s }) => /* @__PURE__ */ l("div", { className: c(fe.container, a), style: { width: n, height: n, ...s }, children: [
  /* @__PURE__ */ e("img", { src: bt, alt: "", className: fe.bg }),
  /* @__PURE__ */ e("img", { src: t === "high" ? $t : wt, alt: "", className: fe.meter })
] });
Qa.displayName = "SoundMeter";
const Pa = "zelda-container-sFoyO", qa = "zelda-bg-UFg-s", _a = "zelda-icon-LX1XJ", Ya = "zelda-active-X38io", ja = "zelda-plusBadge-WUpwk", P = {
  container: Pa,
  bg: qa,
  icon: _a,
  active: Ya,
  plusBadge: ja
}, Ka = [
  "M29.9407 16.5394C29.6813 10.0177 24.4565 4.64465 17.9718 4.19999C10.4125 3.64416 4.15015 9.64712 4.15015 17.0952C4.15015 22.2459 7.15163 26.6555 11.4871 28.7677C11.7094 28.8788 11.9318 28.7677 12.0059 28.5454L12.3764 27.1743C12.4135 26.989 12.3394 26.8408 12.1912 26.7296C8.41151 24.8028 5.9288 20.8008 6.29936 16.2059C6.70696 10.907 11.0424 6.64564 16.3414 6.31214C22.6037 5.90453 27.8285 10.907 27.8285 17.0952C27.8285 21.2454 25.457 24.8769 22.0108 26.6926C21.8626 26.7667 21.7885 26.952 21.8255 27.1002L22.1961 28.4712C22.2702 28.6936 22.4925 28.8047 22.7149 28.7306C27.1615 26.5444 30.163 21.8754 29.9407 16.5394Z",
  "M22.2704 17.0582C22.2704 13.9826 19.6024 11.537 16.4527 11.8705C14.1183 12.1299 12.2284 13.9826 11.8949 16.3171C11.5614 18.7628 12.9325 20.949 15.0076 21.8384C15.1558 21.9125 15.267 22.0607 15.2299 22.246L13.4142 36.2529C13.3401 36.6976 13.7106 37.1052 14.1553 37.1052H19.973C20.4177 37.1052 20.7512 36.6976 20.7141 36.2529L18.8984 22.246C18.8613 22.0607 18.9725 21.9125 19.1207 21.8384C20.9735 21.0602 22.2704 19.2074 22.2704 17.0582Z"
], Xa = ({ active: t = !0, plus: n = !1, size: a = 50, className: s, style: o }) => {
  const i = t ? "#9DECFD" : "#658D95";
  return /* @__PURE__ */ l("div", { className: c(P.container, { [P.active]: t }, s), style: { width: a, height: a, ...o }, children: [
    /* @__PURE__ */ e("svg", { viewBox: "0 0 50 50", fill: "none", className: P.bg, children: /* @__PURE__ */ e("circle", { cx: "25", cy: "25", r: "25", fill: "black", fillOpacity: "0.8" }) }),
    /* @__PURE__ */ e("svg", { viewBox: "0 0 34 37", fill: "none", className: P.icon, children: Ka.map((r, d) => /* @__PURE__ */ e("path", { d: r, fill: i }, d)) }),
    n && /* @__PURE__ */ e("span", { className: P.plusBadge, children: "+" })
  ] });
};
Xa.displayName = "Sensor";
const Ja = "zelda-container--1Hwe", es = "zelda-icon-HUaNc", ts = "zelda-name-N9K3B", ns = "zelda-time-xONwS", J = {
  container: Ja,
  icon: es,
  name: ts,
  time: ns
}, as = ({ name: t, timeRemaining: n, icon: a, className: s, style: o }) => /* @__PURE__ */ l("div", { className: c(J.container, s), style: o, children: [
  a && /* @__PURE__ */ e("span", { className: J.icon, children: a }),
  /* @__PURE__ */ e("span", { className: J.name, children: t }),
  /* @__PURE__ */ e("span", { className: J.time, children: n })
] });
as.displayName = "EffectDuration";
const ss = "zelda-container-YWmgc", ls = "zelda-icon-yl14Q", os = "zelda-arrow-uWCsW", be = {
  container: ss,
  icon: ls,
  arrow: os
}, is = "M37.6577 10.7938L18.2909 28.9313L14.4762 25.0869L23.8172 15.6732L24.5019 13.6031L22.4479 14.2931L13.1068 23.7069L9.29215 19.8625L27.2896 0.345006L38 0L37.6577 10.7938ZM18.6821 32.3813L5.57529 19.1725C4.89061 18.4825 3.81467 18.4825 3.12999 19.1725L2.15187 20.1582C1.46718 20.8483 1.46718 21.9326 2.15187 22.6226L6.79794 27.3048L0.586873 33.5642C-0.195624 34.3528 -0.195624 35.6835 0.586873 36.4721L1.51609 37.4086C2.29858 38.1971 3.61905 38.1971 4.40154 37.4086L10.5637 31.1984L15.2098 35.8807C15.8945 36.5707 16.9704 36.5707 17.6551 35.8807L18.6332 34.8949C19.3668 34.1556 19.3668 33.0713 18.6821 32.3813Z", cs = {
  attackUp: { path: is, viewBox: "0 0 38 38" },
  defenseUp: { path: "M19 2L4 10V22L19 36L34 22V10L19 2ZM19 6L30 12V20L19 30L8 20V12L19 6Z", viewBox: "0 0 38 38" },
  speedUp: { path: "M4 19L14 4L19 14L34 4L24 19L19 9L4 19ZM4 34L14 19L19 29L34 19L24 34L19 24L4 34Z", viewBox: "0 0 38 38" },
  heatResist: { path: "M19 2C19 2 8 14 8 22C8 28 13 34 19 34C25 34 30 28 30 22C30 14 19 2 19 2ZM19 30C15 30 12 26 12 22C12 17 17 9 19 6C21 9 26 17 26 22C26 26 23 30 19 30Z", viewBox: "0 0 38 38" },
  coldResist: { path: "M19 0L21 7L28 4L23 10L30 12L23 14L28 20L21 17L19 24L17 17L10 20L15 14L8 12L15 10L10 4L17 7L19 0ZM19 28L21 32L24 30L22 33L26 34L22 35L24 38L21 36L19 38L17 36L14 38L16 35L12 34L16 33L14 30L17 32L19 28Z", viewBox: "0 0 38 38" },
  electricResist: { path: "M22 2L10 20H18L14 36L28 16H20L22 2Z", viewBox: "0 0 38 38" },
  quietUp: { path: "M6 14V24H12L22 32V6L12 14H6ZM26 10V28M30 14V24", viewBox: "0 0 38 38" },
  fireResist: { path: "M19 2C19 2 8 14 8 22C8 28 13 34 19 34C25 34 30 28 30 22C30 14 19 2 19 2Z", viewBox: "0 0 38 38" },
  durabilityUp: { path: "M10 4L6 8V30L10 34H28L32 30V8L28 4H10ZM12 8H26V12H12V8ZM12 16H26V20H12V16Z", viewBox: "0 0 38 38" },
  criticalHit: { path: "M19 2L22 14L34 14L24 22L28 34L19 26L10 34L14 22L4 14L16 14L19 2Z", viewBox: "0 0 38 38" },
  longThrow: { path: "M4 19H28M28 19L20 12M28 19L20 26M32 12V26", viewBox: "0 0 38 38" },
  climbSpeedUp: { path: "M19 34V10M19 10L12 17M19 10L26 17M8 4H30", viewBox: "0 0 38 38" },
  swimSpeedUp: { path: "M4 14C8 10 12 14 16 10C20 6 24 10 28 6C32 2 36 6 36 6M4 22C8 18 12 22 16 18C20 14 24 18 28 14C32 10 36 14 36 14M4 30C8 26 12 30 16 26C20 22 24 26 28 22C32 18 36 22 36 22", viewBox: "0 0 38 38" },
  bonusHeart: { path: "M19 32L4 18C0 14 0 8 4 4C8 0 14 0 18 4L19 5L20 4C24 0 30 0 34 4C38 8 38 14 34 18L19 32Z", viewBox: "0 0 38 38" },
  staminaUp: { path: "M19 2C10 2 2 10 2 19C2 28 10 36 19 36C28 36 36 28 36 19C36 10 28 2 19 2ZM19 8C24.5 8 29 12.5 29 19C29 25.5 24.5 30 19 30C13.5 30 9 25.5 9 19C9 12.5 13.5 8 19 8Z", viewBox: "0 0 38 38" }
}, rs = ({ icon: t, arrow: n = !1, size: a = 50, className: s, style: o }) => {
  const { path: i, viewBox: r } = cs[t];
  return /* @__PURE__ */ l("div", { className: c(be.container, s), style: { width: a, height: a, ...o }, children: [
    /* @__PURE__ */ e("svg", { viewBox: r, fill: "none", className: be.icon, children: /* @__PURE__ */ e("path", { d: i, fill: "white" }) }),
    n && /* @__PURE__ */ e("svg", { viewBox: "0 0 10 8", fill: "none", className: be.arrow, children: /* @__PURE__ */ e("path", { d: "M5 0L10 8H0L5 0Z", fill: "white" }) })
  ] });
};
rs.displayName = "BonusEffectIcon";
const ds = "zelda-container-p7EHP", ms = "zelda-icon-MQ-7M", hs = "zelda-orb-dx5L6", ps = "zelda-rupee-FH9T4", us = "zelda-korok-jXca6", Cs = "zelda-stamina-5JA7D", Ns = "zelda-quantity-j7h79", ee = {
  container: ds,
  icon: ms,
  orb: hs,
  rupee: ps,
  korok: us,
  stamina: Cs,
  quantity: Ns
}, gs = ({ icon: t, showQuantity: n = !1, quantity: a, size: s = 40, className: o, style: i }) => /* @__PURE__ */ l("div", { className: c(ee.container, ee[t], o), style: { width: s, height: s, ...i }, children: [
  /* @__PURE__ */ e("img", { src: ut, alt: "", className: ee.icon }),
  n && a !== void 0 && /* @__PURE__ */ e("span", { className: ee.quantity, children: a })
] });
gs.displayName = "LoadingIcon";
const vs = "zelda-container-Ol24c", Ls = "zelda-hidden--of9t", Ue = {
  container: vs,
  hidden: Ls
}, ys = "M21.7675 12.7969L12.1037 21.7487L2.05872 11.598C-0.686241 8.82416 -0.686239 4.35741 2.05872 1.58356C4.14815 -0.527857 7.55918 -0.527854 9.64861 1.58357L12.1037 4.06447L14.0676 2.0798C16.3794 -0.256337 20.1909 -0.129535 22.3423 2.35509C24.9973 5.42139 24.7431 10.0406 21.7675 12.7969Z", zs = ({ shown: t = !0, className: n, style: a }) => /* @__PURE__ */ e("div", { className: c(Ue.container, { [Ue.hidden]: !t }, n), style: a, children: /* @__PURE__ */ e("svg", { width: "24", height: "20", viewBox: "0 0 24.18 21.75", fill: "none", children: /* @__PURE__ */ e("path", { d: ys, fill: t ? "#F1362F" : "#363930" }) }) });
zs.displayName = "LoadingHeart";
const fs = "zelda-container-9mb1L", bs = "zelda-icon-CsNds", ws = "zelda-normal-2VBnJ", $s = "zelda-ancient-aOYQs", Bs = "zelda-endura-Yy1nG", xs = "zelda-used-awD1K", te = {
  container: fs,
  icon: bs,
  normal: ws,
  ancient: $s,
  endura: Bs,
  used: xs
}, ks = ({ type: t = "normal", used: n = !1, size: a = 84, className: s, style: o }) => /* @__PURE__ */ e(
  "div",
  {
    className: c(te.container, te[t], { [te.used]: n }, s),
    style: { width: a, height: a, ...o },
    children: /* @__PURE__ */ e("img", { src: rt, alt: "", className: te.icon })
  }
);
ks.displayName = "HorseSpur";
const Ms = "zelda-container-rfu3j", Ss = "zelda-center-93poy", Ts = "zelda-top-8zENW", As = "zelda-right-4fsRV", Hs = "zelda-left-AI8-R", q = {
  container: Ms,
  center: Ss,
  top: Ts,
  right: As,
  left: Hs
}, Zs = ({ className: t, style: n }) => /* @__PURE__ */ l("div", { className: c(q.container, t), style: n, children: [
  /* @__PURE__ */ e("img", { src: Nt, alt: "", className: q.center }),
  /* @__PURE__ */ e("img", { src: Lt, alt: "", className: q.top }),
  /* @__PURE__ */ e("img", { src: gt, alt: "", className: q.right }),
  /* @__PURE__ */ e("img", { src: vt, alt: "", className: q.left })
] });
Zs.displayName = "QuickSelector";
const Os = "zelda-container--wcUe", Is = "zelda-item-KWmiG", Ds = "zelda-icon-0mtvy", Es = "zelda-active-4-ueE", ne = {
  container: Os,
  item: Is,
  icon: Ds,
  active: Es
}, Fs = {
  weapons: {
    viewBox: "0 0 42.22 42.22",
    path: "M41.8418 11.9931L20.3232 32.1458L16.0847 27.8743L26.4636 17.4146L27.2244 15.1146L24.9421 15.8813L14.5631 26.341L10.3246 22.0695L30.3217 0.38334L42.2222 0L41.8418 11.9931ZM20.7579 35.9793L6.19477 21.3028C5.43401 20.5361 4.23852 20.5361 3.47776 21.3028L2.39096 22.398C1.6302 23.1647 1.6302 24.3695 2.39096 25.1362L7.55327 30.3387L0.652081 37.2936C-0.21736 38.1698 -0.21736 39.6484 0.652081 40.5246L1.68454 41.5651C2.55398 42.4413 4.02116 42.4413 4.8906 41.5651L11.7375 34.6649L16.8998 39.8674C17.6605 40.6341 18.856 40.6341 19.6168 39.8674L20.7036 38.7722C21.5187 37.9507 21.5187 36.7459 20.7579 35.9793Z"
  },
  bows: {
    viewBox: "0 0 46.67 46.67",
    path: "M41.0476 30.8942V35.2641H35.2507V41.0541H30.8757V39.0877V36.9574V34.0078L7.36026 10.5198L6.37589 12.4862L5.5009 14.1795C5.22746 14.7258 4.40715 14.6712 4.1884 14.0703L0.0321811 0.851491C-0.13188 0.359882 0.360304 -0.131726 0.852489 0.0321434L14.0868 4.1835C14.6883 4.34737 14.743 5.16672 14.1962 5.43984L12.3915 6.36843L10.4227 7.40627L33.9929 30.9489H39.0788L41.0476 30.8942ZM13.5946 20.5158C13.7587 20.1335 13.704 19.6965 13.4305 19.4234L9.98525 15.9821C9.71181 15.709 9.329 15.7636 9.11025 16.0367C4.13371 23.5201 4.02434 32.6968 9.49306 38.1591C10.0399 38.7053 10.5868 39.1423 11.1884 39.5793L8.12588 42.6382C7.41494 43.3483 7.41494 44.4954 8.12588 45.2601L9.00088 46.1341C9.71181 46.8442 10.8602 46.8442 11.6259 46.1341L25.243 32.5329C25.6258 32.1506 25.6258 31.5497 25.243 31.1673L23.1102 29.037C22.7274 28.6547 22.1258 28.6547 21.743 29.037L16.5477 34.2262C15.8915 33.8439 15.3446 33.4069 14.7977 32.8607C11.6259 29.911 11.3524 24.9403 13.5946 20.5158ZM42.5788 8.22562L39.5163 11.2845C39.0788 10.6837 38.6413 10.1374 38.0945 9.5912C32.6804 4.18351 23.6024 4.1835 16.1102 9.09959C15.8368 9.31808 15.7821 9.70044 16.0008 9.97356L19.4461 13.4148C19.7196 13.6879 20.1571 13.7972 20.5399 13.6333C24.9148 11.503 29.782 11.8307 32.8445 14.8896C33.3914 15.4359 33.8289 15.9821 34.2117 16.6376L29.1258 21.7175C28.743 22.0999 28.743 22.7008 29.1258 23.0831L31.2586 25.2134C31.6414 25.5958 32.2429 25.5958 32.6257 25.2134L46.1335 11.7215C46.8444 11.0114 46.8444 9.86431 46.1335 9.09959L45.2585 8.22562C44.4929 7.51552 43.2897 7.51552 42.5788 8.22562Z"
  },
  shields: {
    viewBox: "0 0 33.33 38.89",
    path: "M31.8889 0H1.44445C0.66667 0 0 0.676328 0 1.46538V17.19C0 22.4316 1.83333 27.5604 5.22222 31.562C8.33333 35.2254 11.6667 38.8889 16.6667 38.8889C21.6667 38.8889 24.7778 35.3945 27.8889 31.8438C31.3889 27.7858 33.3333 22.5443 33.3333 17.1337V1.46538C33.3333 0.676328 32.7222 0 31.8889 0ZM28.3333 17.19C28.3333 21.3607 26.8333 25.4187 24.1111 28.5185C21 32.1256 19.2222 33.8164 16.6667 33.8164C14.1667 33.8164 12.2222 32.0129 9.00001 28.2367C6.44445 25.2496 5 21.3043 5 17.19V6.42512C5 5.69243 5.55555 5.12882 6.27777 5.12882H27C27.7222 5.12882 28.2778 5.74879 28.2778 6.42512V17.19H28.3333ZM24.3333 8.45411C24.7222 8.45411 25 8.79227 25 9.13044V17.1337C25 20.4589 23.7778 23.7279 21.6111 26.2077C18.8333 29.4203 17.7222 30.3784 16.6667 30.3784C15.6667 30.3784 14.2778 29.1948 11.5 25.9823C9.44445 23.5588 8.33333 20.4589 8.33333 17.1337V9.1868C8.33333 8.79227 8.66667 8.51047 9.00001 8.51047H24.3333V8.45411Z"
  },
  clothing: { viewBox: "0 0 40 40", path: "M30 5H26C26 8.3 23.3 11 20 11C16.7 11 14 8.3 14 5H10L2 10V18H8V38H32V18H38V10L30 5Z" },
  materials: { viewBox: "0 0 40 40", path: "M20 2L4 12V28L20 38L36 28V12L20 2ZM20 6L32 13V27L20 34L8 27V13L20 6Z" },
  food: { viewBox: "0 0 40 40", path: "M20 4C11.2 4 4 11.2 4 20C4 28.8 11.2 36 20 36C28.8 36 36 28.8 36 20C36 11.2 28.8 4 20 4ZM20 32C13.4 32 8 26.6 8 20C8 13.4 13.4 8 20 8C26.6 8 32 13.4 32 20C32 26.6 26.6 32 20 32ZM18 12H22V22H18V12ZM18 26H22V30H18V26Z" },
  special: { viewBox: "0 0 40 40", path: "M20 2L24.5 15H38L27 23.5L31 37L20 29L9 37L13 23.5L2 15H15.5L20 2Z" }
}, Vs = ["weapons", "bows", "shields", "clothing", "materials", "food", "special"], Rs = ({
  activeSection: t,
  onSelect: n,
  className: a,
  style: s
}) => /* @__PURE__ */ e("div", { className: c(ne.container, a), style: s, children: Vs.map((o) => {
  const { viewBox: i, path: r } = Fs[o], d = o === t;
  return /* @__PURE__ */ e(
    "button",
    {
      className: c(ne.item, { [ne.active]: d }),
      onClick: () => n == null ? void 0 : n(o),
      children: /* @__PURE__ */ e("svg", { viewBox: i, fill: "none", xmlns: "http://www.w3.org/2000/svg", className: ne.icon, children: /* @__PURE__ */ e("path", { d: r, fill: d ? "#E2DED3" : "rgba(226,222,211,0.4)" }) })
    },
    o
  );
}) });
Rs.displayName = "MenuSections";
const Ws = "zelda-container-iOT--", Gs = "zelda-innerBorder-MrMdJ", Us = "zelda-content-cJhkz", Qs = "zelda-empty-ngs-3", Ps = "zelda-filled--J-KK", qs = "zelda-selected-XNWv3", _s = "zelda-equipped-S1uH-", Ys = "zelda-sheikahSelect-Zn5m-", js = "zelda-cornerTR-Gu-bY", Ks = "zelda-cornerTR-Gu-bY", Xs = "zelda-cornerTL-q3DI7", Js = "zelda-cornerTL-q3DI7", e1 = "zelda-cornerBL-j-Fp-", t1 = "zelda-cornerBL-j-Fp-", n1 = "zelda-cornerBR-1EzYT", a1 = "zelda-cornerBR-1EzYT", $ = {
  container: Ws,
  innerBorder: Gs,
  content: Us,
  empty: Qs,
  filled: Ps,
  selected: qs,
  equipped: _s,
  sheikahSelect: Ys,
  cornerTR: js,
  cornerTr: Ks,
  cornerTL: Xs,
  cornerTl: Js,
  cornerBL: e1,
  cornerBl: t1,
  cornerBR: n1,
  cornerBr: a1
}, ae = ({ rotation: t }) => /* @__PURE__ */ e(
  "svg",
  {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { transform: `rotate(${t}deg)` },
    children: /* @__PURE__ */ e("path", { d: "M12 0V12H0L12 0Z", fill: "#E2DED3" })
  }
), s1 = ({
  state: t = "empty",
  size: n = 130,
  children: a,
  onClick: s,
  className: o,
  style: i
}) => {
  const r = t === "selected" || t === "sheikahSelect";
  return /* @__PURE__ */ l(
    "div",
    {
      className: c($.container, $[t], o),
      style: { width: n, height: n, ...i },
      onClick: s,
      children: [
        /* @__PURE__ */ e("div", { className: $.innerBorder }),
        r && /* @__PURE__ */ l(W, { children: [
          /* @__PURE__ */ e("span", { className: $.cornerTR, children: /* @__PURE__ */ e(ae, { rotation: -90 }) }),
          /* @__PURE__ */ e("span", { className: $.cornerTL, children: /* @__PURE__ */ e(ae, { rotation: 180 }) }),
          /* @__PURE__ */ e("span", { className: $.cornerBL, children: /* @__PURE__ */ e(ae, { rotation: 90 }) }),
          /* @__PURE__ */ e("span", { className: $.cornerBR, children: /* @__PURE__ */ e(ae, { rotation: 0 }) })
        ] }),
        a && /* @__PURE__ */ e("div", { className: $.content, children: a })
      ]
    }
  );
};
s1.displayName = "ItemBG";
const l1 = "zelda-container-kN0tC", o1 = "zelda-dot-iCowu", i1 = "zelda-active-gEWBt", we = {
  container: l1,
  dot: o1,
  active: i1
}, c1 = ({
  totalPages: t,
  currentPage: n,
  className: a,
  style: s
}) => {
  const o = Math.min(Math.max(t, 1), 6), i = Math.min(Math.max(n, 1), o);
  return /* @__PURE__ */ e("div", { className: c(we.container, a), style: s, children: Array.from({ length: o }, (r, d) => /* @__PURE__ */ e(
    "span",
    {
      className: c(we.dot, {
        [we.active]: d + 1 === i
      })
    },
    d
  )) });
};
c1.displayName = "Pagination";
const r1 = "zelda-button-MJoh6", d1 = "zelda-innerBorder-cfIlb", m1 = "zelda-label-jA0sZ", h1 = "zelda-selected-b0ny5", se = {
  button: r1,
  innerBorder: d1,
  label: m1,
  selected: h1
}, p1 = ({
  selected: t = !1,
  children: n,
  onClick: a,
  className: s,
  style: o
}) => /* @__PURE__ */ l(
  "button",
  {
    className: c(se.button, { [se.selected]: t }, s),
    style: o,
    onClick: a,
    children: [
      /* @__PURE__ */ e("span", { className: se.innerBorder }),
      /* @__PURE__ */ e("span", { className: se.label, children: n })
    ]
  }
);
p1.displayName = "ModalButton";
const u1 = "zelda-container-7dlMu", C1 = "zelda-track-CQBhW", N1 = "zelda-thumb-GdSGk", $e = {
  container: u1,
  track: C1,
  thumb: N1
}, g1 = ({ location: t, maxSections: n, width: a = 500, className: s, style: o }) => {
  const i = Math.max(0, Math.min(1, (t - 1) / (n - 1))), r = a / n;
  return /* @__PURE__ */ l("div", { className: c($e.container, s), style: { width: a, ...o }, children: [
    /* @__PURE__ */ e("div", { className: $e.track }),
    /* @__PURE__ */ e(
      "div",
      {
        className: $e.thumb,
        style: { width: r, left: `${i * (a - r)}px` }
      }
    )
  ] });
};
g1.displayName = "Scrollbar";
const v1 = "zelda-container-1tWBC", L1 = "zelda-innerBorder-tQNLa", y1 = "zelda-time-FV44y", z1 = "zelda-red-MkXtd", le = {
  container: v1,
  innerBorder: L1,
  time: y1,
  red: z1
}, f1 = ({ time: t, red: n = !1, className: a, style: s }) => /* @__PURE__ */ l("div", { className: c(le.container, { [le.red]: n }, a), style: s, children: [
  /* @__PURE__ */ e("div", { className: le.innerBorder }),
  /* @__PURE__ */ e("span", { className: le.time, children: t })
] });
f1.displayName = "ModalTimer";
const b1 = "zelda-container-T-r8e", w1 = "zelda-label-Hwe9-", $1 = "zelda-value-Aqs4t", B1 = "zelda-diff-OvDiI", x1 = "zelda-positive-L1xP2", k1 = "zelda-negative-0pihb", M1 = "zelda-trait-ZmZoN", k = {
  container: b1,
  label: w1,
  value: $1,
  diff: B1,
  positive: x1,
  negative: k1,
  trait: M1
}, S1 = { weapon: "Attack", armor: "Defense", shield: "Guard", healing: "Restore" }, T1 = ({ type: t, value: n, comparison: a, trait: s, className: o, style: i }) => {
  const r = a !== void 0 ? a - n : void 0;
  return /* @__PURE__ */ l("div", { className: c(k.container, o), style: i, children: [
    /* @__PURE__ */ e("span", { className: k.label, children: S1[t] }),
    /* @__PURE__ */ e("span", { className: k.value, children: n }),
    r !== void 0 && /* @__PURE__ */ e("span", { className: c(k.diff, { [k.positive]: r > 0, [k.negative]: r < 0 }), children: r > 0 ? `+${r}` : r }),
    s && /* @__PURE__ */ e("span", { className: k.trait, children: s })
  ] });
};
T1.displayName = "StatsStack";
const A1 = "zelda-overlay-dqXuc", H1 = "zelda-modal-WhEA5", Z1 = "zelda-text-cfAxE", O1 = "zelda-continueBtn-kJxAk", I1 = "zelda-arrow-1pBFy", _ = {
  overlay: A1,
  modal: H1,
  text: Z1,
  continueBtn: O1,
  arrow: I1
}, D1 = ({
  text: t,
  continueLabel: n = "Continue",
  visible: a = !0,
  onContinue: s,
  className: o,
  style: i
}) => a ? /* @__PURE__ */ e("div", { className: c(_.overlay, o), style: i, children: /* @__PURE__ */ l("div", { className: _.modal, children: [
  /* @__PURE__ */ e("p", { className: _.text, children: t }),
  /* @__PURE__ */ l("button", { className: _.continueBtn, onClick: s, children: [
    /* @__PURE__ */ e("span", { children: n }),
    /* @__PURE__ */ e(
      "svg",
      {
        className: _.arrow,
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ e(
          "path",
          {
            d: "M2 6H10M10 6L7 3M10 6L7 9",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      }
    )
  ] })
] }) }) : null;
D1.displayName = "ModalTutorial";
const E1 = "zelda-container-58n2B", F1 = "zelda-name-BhVx1", Qe = {
  container: E1,
  name: F1
}, V1 = "M23.6417 5.48531L6.78497 9.98084C6.50324 10.0319 6.22151 9.98084 6.03369 9.82759L0.211297 5.43423C-0.0704322 5.22988 -0.0704322 4.8212 0.211297 4.61686L5.98674 0.172414C6.22151 0.0191571 6.50324 -0.0319285 6.73801 0.0191571L9.50834 0.785441L3.77986 4.97446L5.79892 5.84291L12.1378 1.44955L23.6887 4.4636C24.1113 4.61686 24.1113 5.38314 23.6417 5.48531Z", Pe = ({ flip: t }) => /* @__PURE__ */ e(
  "svg",
  {
    width: "24",
    height: "10",
    viewBox: "0 0 24 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t ? { transform: "scaleX(-1)" } : void 0,
    children: /* @__PURE__ */ e("path", { d: V1, fill: "#E2DED3" })
  }
), R1 = ({
  name: t,
  className: n,
  style: a
}) => /* @__PURE__ */ l("div", { className: c(Qe.container, n), style: a, children: [
  /* @__PURE__ */ e(Pe, { flip: !0 }),
  /* @__PURE__ */ e("span", { className: Qe.name, children: t }),
  /* @__PURE__ */ e(Pe, {})
] });
R1.displayName = "TitleLocation";
const W1 = "zelda-container-XaaI2", G1 = "zelda-subtitle-5N-jd", U1 = "zelda-questIcon-7OwVN", Q1 = "zelda-questLabel-6q-M7", P1 = "zelda-nameWrapper-YZcy2", q1 = "zelda-name-Oegn8", _1 = "zelda-complete-yAs3u", Y1 = "zelda-completeBadge-UViMj", B = {
  container: W1,
  subtitle: G1,
  questIcon: U1,
  questLabel: Q1,
  nameWrapper: P1,
  name: q1,
  complete: _1,
  completeBadge: Y1
}, j1 = {
  main: "Main Quest",
  side: "Side Quest",
  shrine: "Shrine Quest"
}, K1 = {
  main: "#FFEA2E",
  side: "#54C0FD",
  shrine: "#54C0FD"
}, X1 = ({
  name: t,
  questType: n = "main",
  complete: a = !1,
  className: s,
  style: o
}) => {
  const i = K1[n];
  return /* @__PURE__ */ l("div", { className: c(B.container, s), style: o, children: [
    /* @__PURE__ */ l("div", { className: B.subtitle, children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: B.questIcon,
          style: { boxShadow: `0 0 23px ${i}, 0 0 18px black` }
        }
      ),
      /* @__PURE__ */ e("span", { className: B.questLabel, children: j1[n] })
    ] }),
    /* @__PURE__ */ e("div", { className: B.nameWrapper, children: /* @__PURE__ */ e("span", { className: c(B.name, { [B.complete]: a }), children: t }) }),
    a && /* @__PURE__ */ e("div", { className: B.completeBadge, children: "COMPLETE" })
  ] });
};
X1.displayName = "TitleQuest";
const J1 = "zelda-container-WjOlm", el = "zelda-name-jKujl", tl = "zelda-subtitle-YyJl7", Be = {
  container: J1,
  name: el,
  subtitle: tl
}, nl = ({ name: t, subtitle: n, className: a, style: s }) => /* @__PURE__ */ l("div", { className: c(Be.container, a), style: s, children: [
  /* @__PURE__ */ e("h2", { className: Be.name, children: t }),
  n && /* @__PURE__ */ e("p", { className: Be.subtitle, children: n })
] });
nl.displayName = "TitleShrine";
const al = "zelda-container-9FLEm", sl = "zelda-name-6fAbb", qe = {
  container: al,
  name: sl
}, ll = ({ name: t, className: n, style: a }) => /* @__PURE__ */ e("div", { className: c(qe.container, n), style: a, children: /* @__PURE__ */ e("h1", { className: qe.name, children: t }) });
ll.displayName = "TitleLocationLarge";
const ol = "zelda-container-cujQl", il = "zelda-title-ezq7B", cl = "zelda-subtitle-NcYH0", rl = "zelda-poi-EdwRY", dl = "zelda-bossName-AJdsW", ml = "zelda-poiWithHealth-THbFb", hl = "zelda-healthBar-2Lcve", pl = "zelda-healthFill-pYF5K", D = {
  container: ol,
  title: il,
  subtitle: cl,
  poi: rl,
  bossName: dl,
  poiWithHealth: ml,
  healthBar: hl,
  healthFill: pl
}, ul = ({
  title: t,
  subtitle: n,
  variant: a = "poi",
  healthPercent: s = 100,
  className: o,
  style: i
}) => {
  const r = c(D.container, D[a], o);
  return /* @__PURE__ */ l("div", { className: r, style: i, children: [
    /* @__PURE__ */ e("span", { className: D.title, children: t }),
    n && /* @__PURE__ */ e("span", { className: D.subtitle, children: n }),
    a === "poiWithHealth" && /* @__PURE__ */ e("div", { className: D.healthBar, children: /* @__PURE__ */ e(
      "div",
      {
        className: D.healthFill,
        style: { width: `${Math.max(0, Math.min(100, s))}%` }
      }
    ) })
  ] });
};
ul.displayName = "TitlePointOfInterest";
const Cl = "zelda-container-t6s1-", Nl = "zelda-option-e6JPt", gl = "zelda-selected-YJRTJ", vl = "zelda-arrow-mhsCw", Ll = "zelda-label-1E9np", Y = {
  container: Cl,
  option: Nl,
  selected: gl,
  arrow: vl,
  label: Ll
}, yl = ({ options: t, selectedIndex: n = 0, onSelect: a, className: s, style: o }) => /* @__PURE__ */ e("div", { className: c(Y.container, s), style: o, children: t.map((i, r) => /* @__PURE__ */ l("button", { className: c(Y.option, { [Y.selected]: r === n }), onClick: () => a == null ? void 0 : a(i.value, r), children: [
  r === n && /* @__PURE__ */ e("span", { className: Y.arrow, children: "▶" }),
  /* @__PURE__ */ e("span", { className: Y.label, children: i.label })
] }, i.value)) });
yl.displayName = "DialogChoice";
const zl = "zelda-container--DckY", fl = "zelda-dialog-t4-cQ", bl = "zelda-bg-Khxbz", wl = "zelda-text-0fI9f", $l = "zelda-name-4poZm", Bl = "zelda-nameText-gOUf1", xl = "zelda-arrow-A29ja", E = {
  container: zl,
  dialog: fl,
  bg: bl,
  text: wl,
  name: $l,
  nameText: Bl,
  arrow: xl
}, kl = "M35.0534 0C15.7235 0 0.0534337 15.67 0.0534337 35C0.0534337 42.6033 2.4779 49.6404 6.59591 55.3803C5.01152 59.3704 2.25893 64.2087 0.229117 67.5837C-0.504363 69.0082 0.579748 70.5902 2.67405 69.7205C8.37584 67.3527 11.9815 64.6802 13.9506 62.925C19.8177 67.3657 27.128 70 35.0535 70H275C294.33 70 310 54.33 310 35C310 15.67 294.33 0 275 0H35.0534Z", Ml = ({ text: t, type: n = "dialog", className: a, style: s }) => /* @__PURE__ */ e("div", { className: c(E.container, E[n], a), style: s, children: n === "dialog" ? /* @__PURE__ */ l(W, { children: [
  /* @__PURE__ */ e("svg", { viewBox: "0 0 310 70", fill: "none", className: E.bg, preserveAspectRatio: "none", children: /* @__PURE__ */ e("path", { fillRule: "evenodd", clipRule: "evenodd", d: kl, fill: "black", fillOpacity: "0.5" }) }),
  /* @__PURE__ */ e("span", { className: E.text, children: t })
] }) : /* @__PURE__ */ l(W, { children: [
  /* @__PURE__ */ e("span", { className: E.nameText, children: t }),
  /* @__PURE__ */ e("span", { className: E.arrow, children: "▼" })
] }) });
Ml.displayName = "DialogFloating";
const Sl = "zelda-container-UOAVE", Tl = "zelda-innerBorder-CWKsK", Al = "zelda-icon-60VHZ", Hl = "zelda-content-QyLnG", Zl = "zelda-title-lvJ8m", Ol = "zelda-location-DWMxV", Il = "zelda-marker-PyIAk", Dl = "zelda-dot-10M4f", El = "zelda-hovered-GKZoq", Fl = "zelda-completed-pDzQ0", z = {
  container: Sl,
  innerBorder: Tl,
  icon: Al,
  content: Hl,
  title: Zl,
  location: Ol,
  marker: Il,
  dot: Dl,
  hovered: El,
  completed: Fl
}, Vl = (t) => /* @__PURE__ */ l("svg", { viewBox: "0 0 77 45.2", fill: "none", style: { width: "100%", height: "100%" }, children: [
  /* @__PURE__ */ e("path", { d: "M38.512 0L32.5925 8.943H44.3963L38.512 0", fill: t }),
  /* @__PURE__ */ e("path", { d: "M26.7084 17.8509L32.5926 8.943L38.5122 17.8509H26.7084Z", fill: t }),
  /* @__PURE__ */ e("path", { d: "M38.5122 17.8509H50.3513L44.3965 8.943L38.5122 17.8509Z", fill: t }),
  /* @__PURE__ */ e("path", { d: "M0 2.765L2.89 11.445L23.02 14.47V16.603L4.933 18.587L8.521 25.58L23.52 19.976L24.467 21.811L13.006 30.44L17.939 33.912L26.31 24.638L27.606 25.878L23.52 35.549L28.453 36.541L30.197 27.713C31.749 27.923 34.028 27.713 33.967 25.58C33.937 24.541 33.45 23.267 31.648 22.713C23.875 20.326 25.463 10.651 27.905 6.634C24.986 8.943 24.779 10.109 23.968 11.197C22.635 10.843 0 2.765 0 2.765Z", fill: t }),
  /* @__PURE__ */ e("path", { d: "M77 2.765L74.11 11.445L53.978 14.47V16.603L72.067 18.587L68.479 25.58L53.48 19.976L52.533 21.811L63.994 30.44L59.061 33.912L50.69 24.638L49.394 25.878L53.48 35.549L48.547 36.541L46.803 27.713C45.251 27.923 42.972 27.713 43.033 25.58C43.063 24.541 43.55 23.267 45.352 22.713C53.125 20.326 51.537 10.651 49.095 6.634C52.014 8.943 52.221 10.109 53.032 11.197C54.365 10.843 77 2.765 77 2.765Z", fill: t }),
  /* @__PURE__ */ e("path", { d: "M38.512 20.604C38.459 21.656 37.049 24.251 36.679 24.638C36.382 24.948 35.974 25.58 35.146 27.713C34.318 29.845 34.66 29.946 32.944 31.195C40.002 34.425 35.974 37.702 35.974 38.456C36.858 40.68 38.512 45.171 38.512 45.171C38.512 45.171 40.164 40.68 41.047 38.456C41.047 37.702 37.02 34.425 44.078 31.195C42.362 29.946 42.704 29.845 41.876 27.713C41.048 25.58 40.64 24.948 40.343 24.638C39.973 24.251 38.565 21.656 38.512 20.604Z", fill: t })
] }), Rl = (t) => /* @__PURE__ */ l("svg", { viewBox: "0 0 40 40", fill: "none", style: { width: "60%", height: "60%" }, children: [
  /* @__PURE__ */ e("path", { d: "M20 4C11.2 4 4 10 4 17.5C4 21.5 6 25 9 27.5L7 34L14 30.5C16 31.5 18 32 20 32C28.8 32 36 26 36 18.5C36 11 28.8 4 20 4Z", fill: t }),
  /* @__PURE__ */ e("circle", { cx: "13", cy: "18", r: "2.5", fill: "black", opacity: "0.4" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "18", r: "2.5", fill: "black", opacity: "0.4" }),
  /* @__PURE__ */ e("circle", { cx: "27", cy: "18", r: "2.5", fill: "black", opacity: "0.4" })
] }), Wl = (t) => /* @__PURE__ */ l("svg", { viewBox: "0 0 40 40", fill: "none", style: { width: "60%", height: "60%" }, children: [
  /* @__PURE__ */ e("path", { d: "M20 4L4 20L20 36L36 20L20 4ZM20 10L30 20L20 30L10 20L20 10Z", fill: t }),
  /* @__PURE__ */ e("path", { d: "M20 14L14 20L20 26L26 20L20 14Z", fill: t, opacity: "0.5" })
] }), Gl = (t) => /* @__PURE__ */ l("svg", { viewBox: "0 0 40 40", fill: "none", style: { width: "60%", height: "60%" }, children: [
  /* @__PURE__ */ e("rect", { x: "6", y: "8", width: "28", height: "24", rx: "2", fill: t }),
  /* @__PURE__ */ e("rect", { x: "8", y: "6", width: "4", height: "4", rx: "1", fill: t }),
  /* @__PURE__ */ e("rect", { x: "14", y: "6", width: "4", height: "4", rx: "1", fill: t }),
  /* @__PURE__ */ e("rect", { x: "20", y: "6", width: "4", height: "4", rx: "1", fill: t }),
  /* @__PURE__ */ e("rect", { x: "26", y: "6", width: "4", height: "4", rx: "1", fill: t }),
  /* @__PURE__ */ e("rect", { x: "8", y: "30", width: "4", height: "4", rx: "1", fill: t }),
  /* @__PURE__ */ e("rect", { x: "14", y: "30", width: "4", height: "4", rx: "1", fill: t }),
  /* @__PURE__ */ e("rect", { x: "20", y: "30", width: "4", height: "4", rx: "1", fill: t }),
  /* @__PURE__ */ e("rect", { x: "26", y: "30", width: "4", height: "4", rx: "1", fill: t }),
  /* @__PURE__ */ e("rect", { x: "10", y: "12", width: "20", height: "16", rx: "1", fill: "black", opacity: "0.3" })
] }), Ul = () => /* @__PURE__ */ e("svg", { width: "50", height: "50", viewBox: "0 0 47 47", fill: "none", className: z.marker, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.5294 32.3529C28.4025 32.3529 32.3529 28.4025 32.3529 23.5294C32.3529 18.6563 28.4025 14.7059 23.5294 14.7059C18.6563 14.7059 14.7059 18.6563 14.7059 23.5294C14.7059 28.4025 18.6563 32.3529 23.5294 32.3529ZM23.5294 28.8235C20.6056 28.8235 18.2353 26.4533 18.2353 23.5294C18.2353 20.6056 20.6056 18.2353 23.5294 18.2353C26.4533 18.2353 28.8235 20.6056 28.8235 23.5294C28.8235 26.4533 26.4533 28.8235 23.5294 28.8235ZM23.5295 26.4706C25.1538 26.4706 26.4706 25.1538 26.4706 23.5294C26.4706 21.9051 25.1538 20.5882 23.5295 20.5882C21.9051 20.5882 20.5883 21.9051 20.5883 23.5294C20.5883 25.1538 21.9051 26.4706 23.5295 26.4706Z", fill: "#FFF381" }) }), Ql = {
  main: Vl,
  side: Rl,
  shrine: Wl,
  memory: Gl
}, Pl = ({
  title: t,
  location: n,
  questType: a = "main",
  state: s = "default",
  hovered: o = !1,
  onClick: i,
  className: r,
  style: d
}) => {
  const g = s === "completed" ? "rgba(226,222,211,0.3)" : "#E2DED3";
  return /* @__PURE__ */ l(
    "div",
    {
      className: c(z.container, z[s], { [z.hovered]: o }, r),
      style: d,
      onClick: i,
      children: [
        /* @__PURE__ */ e("div", { className: z.innerBorder }),
        /* @__PURE__ */ e("div", { className: z.icon, children: Ql[a](g) }),
        /* @__PURE__ */ l("div", { className: z.content, children: [
          /* @__PURE__ */ e("span", { className: z.title, children: t }),
          n && /* @__PURE__ */ e("span", { className: z.location, children: n })
        ] }),
        s === "marked" && /* @__PURE__ */ e(Ul, {}),
        s === "unmarked" && /* @__PURE__ */ e("span", { className: z.dot })
      ]
    }
  );
};
Pl.displayName = "QuestListItem";
const ql = "zelda-container-xhXQT", _l = "zelda-innerBorder-0MB1D", Yl = "zelda-content-ShY8c", jl = "zelda-title-GsFu4", Kl = "zelda-dividerLine-ExpuZ", Xl = "zelda-meta-81bpi", Jl = "zelda-npc-Lzreu", eo = "zelda-location-UC-B8", to = "zelda-description-1ifwI", no = "zelda-cleared-LHMpC", y = {
  container: ql,
  innerBorder: _l,
  content: Yl,
  title: jl,
  dividerLine: Kl,
  meta: Xl,
  npc: Jl,
  location: eo,
  description: to,
  cleared: no
}, ao = ({
  title: t,
  description: n,
  location: a,
  npc: s,
  cleared: o,
  className: i,
  style: r
}) => /* @__PURE__ */ l("div", { className: c(y.container, i), style: r, children: [
  /* @__PURE__ */ e("div", { className: y.innerBorder }),
  /* @__PURE__ */ l("div", { className: y.content, children: [
    /* @__PURE__ */ e("h3", { className: y.title, children: t }),
    /* @__PURE__ */ e("div", { className: y.dividerLine }),
    (s || a) && /* @__PURE__ */ l("div", { className: y.meta, children: [
      s && /* @__PURE__ */ e("span", { className: y.npc, children: s }),
      a && /* @__PURE__ */ e("span", { className: y.location, children: a })
    ] }),
    /* @__PURE__ */ e("div", { className: y.description, children: n }),
    o && /* @__PURE__ */ e("div", { className: y.cleared, children: o })
  ] })
] });
ao.displayName = "QuestDescription";
const so = "zelda-container-OTlZN", lo = "zelda-icon--9whY", _e = {
  container: so,
  icon: lo
}, oo = {
  main: { glow: "#FFEA2E", fill: "#FFD700" },
  side: { glow: "#54C0FD", fill: "#3CD3FC" },
  shrine: { glow: "#54C0FD", fill: "#3CD3FC" },
  memory: { glow: "#FCC413", fill: "#FCC413" }
}, io = ({ type: t, size: n = 77, className: a, style: s }) => {
  const { glow: o, fill: i } = oo[t];
  return /* @__PURE__ */ e(
    "div",
    {
      className: c(_e.container, a),
      style: { width: n, height: n, boxShadow: `0 0 23px ${o}, 0 0 18px black`, ...s },
      children: /* @__PURE__ */ l("svg", { viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: _e.icon, children: [
        t === "main" && /* @__PURE__ */ e("path", { d: "M20 4L8 12V28L20 36L32 28V12L20 4ZM20 8L28 13V27L20 32L12 27V13L20 8Z", fill: i }),
        t === "side" && /* @__PURE__ */ e("path", { d: "M20 2C10 2 2 10 2 20C2 30 10 38 20 38C30 38 38 30 38 20C38 10 30 2 20 2ZM20 6C27.7 6 34 12.3 34 20C34 27.7 27.7 34 20 34C12.3 34 6 27.7 6 20C6 12.3 12.3 6 20 6ZM18 12V22L26 27L28 24L22 20V12H18Z", fill: i }),
        t === "shrine" && /* @__PURE__ */ e("path", { d: "M20 2L4 20L20 38L36 20L20 2ZM20 8L30 20L20 32L10 20L20 8ZM20 14L14 20L20 26L26 20L20 14Z", fill: i }),
        t === "memory" && /* @__PURE__ */ e("path", { d: "M20 4C11.2 4 4 11.2 4 20C4 28.8 11.2 36 20 36C28.8 36 36 28.8 36 20C36 11.2 28.8 4 20 4ZM20 8C26.6 8 32 13.4 32 20C32 26.6 26.6 32 20 32C13.4 32 8 26.6 8 20C8 13.4 13.4 8 20 8ZM16 14V26L28 20L16 14Z", fill: i })
      ] })
    }
  );
};
io.displayName = "QuestTypeIcon";
const co = "zelda-container-YRUe6", ro = "zelda-icon-LnF1Y", mo = "zelda-iconSvg-HdgO2", ho = "zelda-label-EY6ZC", oe = {
  container: co,
  icon: ro,
  iconSvg: mo,
  label: ho
}, po = ({ showLabel: t = !1, label: n, className: a, style: s }) => /* @__PURE__ */ l("div", { className: c(oe.container, a), style: s, children: [
  /* @__PURE__ */ e("div", { className: oe.icon, children: /* @__PURE__ */ l("svg", { viewBox: "0 0 26 26", fill: "none", className: oe.iconSvg, children: [
    /* @__PURE__ */ e("circle", { cx: "13", cy: "13", r: "12", fill: "#FCC413", opacity: "0.8" }),
    /* @__PURE__ */ e("path", { d: "M12 7H14V15H12V7ZM12 17H14V19H12V17Z", fill: "black" })
  ] }) }),
  t && n && /* @__PURE__ */ e("span", { className: oe.label, children: n })
] });
po.displayName = "QuestNotification";
const uo = "zelda-wrapper-AgLU0", Co = "zelda-button-SEGsF", No = "zelda-letter-UJf1-", go = "zelda-label-0jGdu", ie = {
  wrapper: uo,
  button: Co,
  letter: No,
  label: go
}, vo = {
  A: "A",
  B: "B",
  X: "X",
  Y: "Y",
  L: "L",
  R: "R",
  ZL: "ZL",
  ZR: "ZR",
  Plus: "+",
  Minus: "−"
}, Lo = ({
  button: t,
  label: n,
  size: a = 40,
  className: s,
  style: o
}) => /* @__PURE__ */ l("div", { className: c(ie.wrapper, s), style: o, children: [
  /* @__PURE__ */ e("div", { className: ie.button, style: { width: a, height: a }, children: /* @__PURE__ */ e("span", { className: ie.letter, children: vo[t] }) }),
  n && /* @__PURE__ */ e("span", { className: ie.label, children: n })
] });
Lo.displayName = "ControllerButton";
const yo = "zelda-container-1Xg5f", zo = "zelda-item-NyY5N", fo = "zelda-label-GlXSi", bo = "zelda-button-txhMn", ce = {
  container: yo,
  item: zo,
  label: fo,
  button: bo
}, wo = ({ actions: t, className: n, style: a }) => /* @__PURE__ */ e("div", { className: c(ce.container, n), style: a, children: t.map((s, o) => /* @__PURE__ */ l("div", { className: ce.item, children: [
  /* @__PURE__ */ e("span", { className: ce.label, children: s.label }),
  /* @__PURE__ */ e("span", { className: ce.button, children: s.button })
] }, o)) });
wo.displayName = "ActionSet";
const $o = "zelda-container-FklVc", Bo = "zelda-icon-KGLVH", Ye = {
  container: $o,
  icon: Bo
}, xe = "M16.2067 0.34L0.34 16.2067C-0.113333 16.66 -0.113333 17.34 0.34 17.7933L16.2067 33.66C16.66 34.1133 17.34 34.1133 17.7933 33.66L33.66 17.7933C34.1133 17.34 34.1133 16.66 33.66 16.2067L17.7933 0.34C17.34 -0.113333 16.66 -0.113333 16.2067 0.34ZM17.68 28.8433H16.32C15.7533 28.8433 15.1867 28.6167 14.7333 28.22L14.3367 27.8233C13.77 27.2567 13.4867 26.4067 13.6 25.6133L13.77 24.1967C13.8833 23.5167 14.11 22.8367 14.5067 22.27C14.9033 21.7033 15.4133 21.25 16.0367 20.91C16.32 20.74 16.66 20.6833 17 20.6833C17.34 20.6833 17.68 20.74 17.9633 20.91C19.21 21.59 20.0033 22.78 20.1733 24.1967L20.3433 25.6133C20.4567 26.4067 20.1733 27.2567 19.6067 27.8233L19.2667 28.22C18.8133 28.6167 18.2467 28.8433 17.68 28.8433ZM23.97 18.4733C22.5533 17.1133 21.4767 15.4133 20.91 13.4867L20.1167 10.7667C19.9467 10.2 19.4367 9.80333 18.8133 9.80333H15.13C14.5067 9.80333 13.9967 10.2 13.8267 10.7667L13.0333 13.4867C12.4667 15.3567 11.4467 17.1133 9.97333 18.4733L7.42333 20.91L3.91 17.3967C3.68333 17.17 3.68333 16.83 3.91 16.6033L16.6033 3.91C16.83 3.68333 17.17 3.68333 17.3967 3.91L30.0333 16.6033C30.26 16.83 30.26 17.17 30.0333 17.3967L26.52 20.91L23.97 18.4733Z", xo = "M34.6617 15.3589L29.4361 10.3238C29.0977 9.9978 28.5338 10.2151 28.5338 10.6861V12.8957C28.5338 13.258 28.6842 13.584 28.9474 13.8375L30.9399 15.7574C31.1654 15.9748 31.1654 16.3008 30.9399 16.5543L27.6316 19.6696V9.2371C27.6316 4.12953 23.2707 0 17.8571 0C12.4436 0 8.08271 4.12953 8.08271 9.2371V20.3941L4.02256 16.5181C3.79699 16.3008 3.79699 15.9385 4.02256 15.7212L6.69173 13.1493C6.95489 12.8957 7.10526 12.5697 7.10526 12.2075V10.034C7.10526 9.59934 6.54135 9.382 6.20301 9.67179L0.338346 15.3589C-0.112782 15.7936 -0.112782 16.4819 0.338346 16.9166L16.6917 32.674C17.1429 33.1087 17.8571 33.1087 18.3083 32.674L34.6617 16.9166C35.1128 16.4819 35.1128 15.7936 34.6617 15.3589ZM20.8647 22.0966C20.8647 22.4951 20.5263 22.8211 20.1128 22.8211H14.8496C14.4361 22.8211 14.0977 22.4951 14.0977 22.0966V13.7651C14.0977 11.9539 15.6015 10.5049 17.4812 10.5049C19.3609 10.5049 20.8647 11.9539 20.8647 13.7651V22.0966Z", ko = {
  shrine: { path: xe, viewBox: "0 0 34 34", fill: "#3CD3FC" },
  resurrection: { path: xo, viewBox: "0 0 35 33", fill: "#ADEFFF" },
  lab: { path: xe, viewBox: "0 0 34 34", fill: "#FCC413" },
  tower: { path: xe, viewBox: "0 0 34 34", fill: "#FFE460" }
}, Mo = ({ icon: t, size: n = 50, className: a, style: s }) => {
  const { path: o, viewBox: i, fill: r } = ko[t];
  return /* @__PURE__ */ e("div", { className: c(Ye.container, a), style: { width: n, height: n, ...s }, children: /* @__PURE__ */ e("svg", { viewBox: i, fill: "none", xmlns: "http://www.w3.org/2000/svg", className: Ye.icon, children: /* @__PURE__ */ e("path", { d: o, fill: r }) }) });
};
Mo.displayName = "MapIcon";
const So = "zelda-container-s-s98", To = "zelda-pin-KNQec", Ao = "zelda-beam-B3pwM", Ho = "zelda-flare-93a65", re = {
  container: So,
  pin: To,
  beam: Ao,
  flare: Ho
}, Zo = {
  red: "#FF4444",
  blue: "#44AAFF",
  yellow: "#FFDD44",
  green: "#44DD88",
  pink: "#FF88CC"
}, Oo = ({ color: t, flare: n = !1, size: a = 30, className: s, style: o }) => {
  const i = Zo[t];
  return /* @__PURE__ */ l("div", { className: c(re.container, { [re.flare]: n }, s), style: { width: a, height: n ? a * 3 : a, ...o }, children: [
    n && /* @__PURE__ */ e("div", { className: re.beam, style: { background: `linear-gradient(to top, ${i}, transparent)` } }),
    /* @__PURE__ */ l("svg", { viewBox: "0 0 30 30", fill: "none", className: re.pin, children: [
      /* @__PURE__ */ e("path", { d: "M15 2L8 12L15 28L22 12L15 2Z", fill: i }),
      /* @__PURE__ */ e("circle", { cx: "15", cy: "12", r: "4", fill: "white", fillOpacity: "0.6" })
    ] })
  ] });
};
Oo.displayName = "MapBeacon";
const Io = "zelda-container-eZ5qh", Do = "zelda-icon-ju3px", Eo = "zelda-pulse-HBGXo", ke = {
  container: Io,
  icon: Do,
  pulse: Eo
}, Fo = ({ pulse: t = !1, size: n = 75, className: a, style: s }) => /* @__PURE__ */ e("div", { className: c(ke.container, { [ke.pulse]: t }, a), style: { width: n, height: n, ...s }, children: /* @__PURE__ */ l("svg", { viewBox: "0 0 40 40", fill: "none", className: ke.icon, children: [
  /* @__PURE__ */ e("path", { d: "M20 4L8 12V28L20 36L32 28V12L20 4Z", fill: "none", stroke: "#FCC413", strokeWidth: "2.5" }),
  /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "5", fill: "#FCC413" })
] }) });
Fo.displayName = "MapQuestMarker";
const Vo = "zelda-container-bLHtV", Ro = "zelda-name-kgjOS", Wo = "zelda-small-5RQNL", Go = "zelda-medium-tpukq", Uo = "zelda-large-KRpJM", Me = {
  container: Vo,
  name: Ro,
  small: Wo,
  medium: Go,
  large: Uo
}, Qo = ({ name: t, size: n = "medium", className: a, style: s }) => /* @__PURE__ */ e("div", { className: c(Me.container, Me[n], a), style: s, children: /* @__PURE__ */ e("span", { className: Me.name, children: t }) });
Qo.displayName = "MapLocationName";
const Po = "zelda-container-J4POL", qo = "zelda-right-96Yz7", _o = "zelda-cursor-pf4Mm", Yo = "zelda-crosshair-yQcaA", jo = "zelda-info-885wk", Ko = "zelda-name-fvJyi", Xo = "zelda-action-f192X", M = {
  container: Po,
  right: qo,
  cursor: _o,
  crosshair: Yo,
  info: jo,
  name: Ko,
  action: Xo
}, Jo = ({ rightSide: t = !0, action: n = !1, locationName: a = "Location", className: s, style: o }) => /* @__PURE__ */ l("div", { className: c(M.container, { [M.right]: t }, s), style: o, children: [
  /* @__PURE__ */ e("div", { className: M.cursor, children: /* @__PURE__ */ l("svg", { viewBox: "0 0 20 20", fill: "none", className: M.crosshair, children: [
    /* @__PURE__ */ e("circle", { cx: "10", cy: "10", r: "8", stroke: "#E2DED3", strokeWidth: "1.5", fill: "none" }),
    /* @__PURE__ */ e("line", { x1: "10", y1: "2", x2: "10", y2: "6", stroke: "#E2DED3", strokeWidth: "1.5" }),
    /* @__PURE__ */ e("line", { x1: "10", y1: "14", x2: "10", y2: "18", stroke: "#E2DED3", strokeWidth: "1.5" }),
    /* @__PURE__ */ e("line", { x1: "2", y1: "10", x2: "6", y2: "10", stroke: "#E2DED3", strokeWidth: "1.5" }),
    /* @__PURE__ */ e("line", { x1: "14", y1: "10", x2: "18", y2: "10", stroke: "#E2DED3", strokeWidth: "1.5" })
  ] }) }),
  /* @__PURE__ */ l("div", { className: M.info, children: [
    /* @__PURE__ */ e("span", { className: M.name, children: a }),
    n && /* @__PURE__ */ e("span", { className: M.action, children: "A Travel" })
  ] })
] });
Jo.displayName = "MapCursor";
const e2 = "zelda-container-hjQ0l", t2 = "zelda-arrow-8tKLo", n2 = "zelda-vision-IuBTF", Se = {
  container: e2,
  arrow: t2,
  vision: n2
}, a2 = ({ vision: t = !1, rotation: n = 0, className: a, style: s }) => /* @__PURE__ */ l("div", { className: c(Se.container, a), style: { transform: `rotate(${n}deg)`, ...s }, children: [
  /* @__PURE__ */ e("svg", { viewBox: "0 0 18 25", fill: "none", className: Se.arrow, children: /* @__PURE__ */ e("path", { d: "M9 0L0 25L9 20L18 25L9 0Z", fill: "#3CD3FC" }) }),
  t && /* @__PURE__ */ e("div", { className: Se.vision })
] });
a2.displayName = "MapHeroLocation";
const s2 = "zelda-grid-Jvpw-", l2 = "zelda-svg-rmfo5", o2 = "zelda-small-JyujM", i2 = "zelda-large-iyNq7", Te = {
  grid: s2,
  svg: l2,
  small: o2,
  large: i2
}, c2 = ({
  variant: t = "small",
  columns: n = 8,
  rows: a = 8,
  className: s,
  style: o
}) => {
  const i = c(Te.grid, Te[t], s);
  return /* @__PURE__ */ e("div", { className: i, style: o, children: /* @__PURE__ */ l(
    "svg",
    {
      className: Te.svg,
      viewBox: `0 0 ${n * 100} ${a * 100}`,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "none",
      children: [
        Array.from({ length: n + 1 }, (r, d) => /* @__PURE__ */ e(
          "line",
          {
            x1: d * 100,
            y1: 0,
            x2: d * 100,
            y2: a * 100,
            stroke: "currentColor",
            strokeOpacity: 0.2,
            strokeWidth: t === "large" ? 2 : 1
          },
          `v-${d}`
        )),
        Array.from({ length: a + 1 }, (r, d) => /* @__PURE__ */ e(
          "line",
          {
            x1: 0,
            y1: d * 100,
            x2: n * 100,
            y2: d * 100,
            stroke: "currentColor",
            strokeOpacity: 0.2,
            strokeWidth: t === "large" ? 2 : 1
          },
          `h-${d}`
        ))
      ]
    }
  ) });
};
c2.displayName = "MapGrid";
const r2 = "zelda-container-bCUhi", d2 = "zelda-symbol-R8Odx", m2 = "zelda-outline-M2ivt", Ae = {
  container: r2,
  symbol: d2,
  outline: m2
}, h2 = ({ outline: t = !0, size: n = 380, className: a, style: s }) => /* @__PURE__ */ e("div", { className: c(Ae.container, { [Ae.outline]: t }, a), style: { width: n, height: n, ...s }, children: /* @__PURE__ */ e("img", { src: ft, alt: "Sheikah Symbol", className: Ae.symbol }) });
h2.displayName = "SheikahSymbol";
const p2 = "zelda-container-GYSat", u2 = "zelda-texture-ar4nU", C2 = "zelda-content-P34TE", N2 = "zelda-darkBlue-oCL-S", g2 = "zelda-blueGrey-W1pU4", de = {
  container: p2,
  texture: u2,
  content: C2,
  darkBlue: N2,
  blueGrey: g2
}, v2 = ({
  color: t = "darkBlue",
  children: n,
  className: a,
  style: s
}) => /* @__PURE__ */ l("div", { className: c(de.container, de[t], a), style: s, children: [
  /* @__PURE__ */ e("div", { className: de.texture, style: { backgroundImage: `url(${zt})` } }),
  /* @__PURE__ */ e("div", { className: de.content, children: n })
] });
v2.displayName = "SheikahBackground";
const L2 = "zelda-container-JEJje", y2 = "zelda-animated-YS4q-", je = {
  container: L2,
  animated: y2
}, z2 = ({
  opacity: t = 0.15,
  animated: n = !1,
  className: a,
  style: s
}) => /* @__PURE__ */ e(
  "div",
  {
    className: c(je.container, { [je.animated]: n }, a),
    style: { opacity: t, ...s }
  }
);
z2.displayName = "SheikahScanlines";
const f2 = "zelda-container-tK55E", b2 = "zelda-rune-oPuGn", w2 = "zelda-active-Paq-Q", $2 = "zelda-icon-i9jKA", me = {
  container: f2,
  rune: b2,
  active: w2,
  icon: $2
}, B2 = {
  roundBomb: "●",
  cubeBomb: "■",
  magnesis: "⊕",
  stasis: "◇",
  cryonis: "⬡",
  camera: "📷"
}, x2 = ({
  activeRune: t = "roundBomb",
  runes: n = ["roundBomb", "cubeBomb", "magnesis", "stasis", "cryonis", "camera"],
  onSelect: a,
  className: s,
  style: o
}) => /* @__PURE__ */ e("div", { className: c(me.container, s), style: o, children: n.map((i) => /* @__PURE__ */ e(
  "button",
  {
    className: c(me.rune, { [me.active]: i === t }),
    onClick: () => a == null ? void 0 : a(i),
    children: /* @__PURE__ */ e("span", { className: me.icon, children: B2[i] })
  },
  i
)) });
x2.displayName = "SheikahRune";
const k2 = "zelda-container-II1jz", M2 = "zelda-innerBorder-pOAur", S2 = "zelda-hovered-18K0g", T2 = "zelda-image-lx2-S", A2 = "zelda-unknown-IBaac", H2 = "zelda-revealed-JekD0", Z2 = "zelda-number-YzEvx", S = {
  container: k2,
  innerBorder: M2,
  hovered: S2,
  image: T2,
  unknown: A2,
  revealed: H2,
  number: Z2
}, O2 = ({
  revealed: t = !1,
  hovered: n = !1,
  image: a,
  number: s,
  onClick: o,
  className: i,
  style: r
}) => /* @__PURE__ */ l("div", { className: c(S.container, { [S.revealed]: t, [S.hovered]: n }, i), style: r, onClick: o, children: [
  /* @__PURE__ */ e("div", { className: S.innerBorder }),
  t && a ? /* @__PURE__ */ e("div", { className: S.image, children: a }) : /* @__PURE__ */ e("span", { className: S.unknown, children: "?" }),
  s !== void 0 && /* @__PURE__ */ e("span", { className: S.number, children: String(s).padStart(3, "0") })
] });
O2.displayName = "SheikahCompendiumEntry";
const I2 = "zelda-container-TOrZS", D2 = "zelda-titleRow-1kxUv", E2 = "zelda-ornament-x1OuW", F2 = "zelda-title-lSQBQ", V2 = "zelda-description--r3er", F = {
  container: I2,
  titleRow: D2,
  ornament: E2,
  title: F2,
  description: V2
}, R2 = ({ title: t, description: n, className: a, style: s }) => /* @__PURE__ */ l("div", { className: c(F.container, a), style: s, children: [
  /* @__PURE__ */ l("div", { className: F.titleRow, children: [
    /* @__PURE__ */ e("span", { className: F.ornament, children: "◆" }),
    /* @__PURE__ */ e("h3", { className: F.title, children: t }),
    /* @__PURE__ */ e("span", { className: F.ornament, children: "◆" })
  ] }),
  n && /* @__PURE__ */ e("p", { className: F.description, children: n })
] });
R2.displayName = "SheikahTextTitle";
const W2 = "zelda-container-UQ--5", G2 = "zelda-filter-YNVMq", U2 = "zelda-active-fAIYe", Q2 = "zelda-icon-rDBlK", he = {
  container: W2,
  filter: G2,
  active: U2,
  icon: Q2
}, P2 = [
  { key: "creatures", label: "🐾" },
  { key: "enemies", label: "👹" },
  { key: "materials", label: "🌿" },
  { key: "weapons", label: "⚔" },
  { key: "treasure", label: "💎" }
], q2 = ({ activeFilter: t, onSelect: n, className: a, style: s }) => /* @__PURE__ */ e("div", { className: c(he.container, a), style: s, children: P2.map(({ key: o, label: i }) => /* @__PURE__ */ e("button", { className: c(he.filter, { [he.active]: o === t }), onClick: () => n == null ? void 0 : n(o), children: /* @__PURE__ */ e("span", { className: he.icon, children: i }) }, o)) });
q2.displayName = "SheikahCompendiumFilters";
const _2 = "zelda-button-7Bocu", Y2 = "zelda-innerBorder-xKzBR", j2 = "zelda-selected-8TalG", K2 = "zelda-label-MvyhH", pe = {
  button: _2,
  innerBorder: Y2,
  selected: j2,
  label: K2
}, X2 = ({ label: t, selected: n = !1, onClick: a, className: s, style: o }) => /* @__PURE__ */ l("button", { className: c(pe.button, { [pe.selected]: n }, s), style: o, onClick: a, children: [
  /* @__PURE__ */ e("span", { className: pe.innerBorder }),
  /* @__PURE__ */ e("span", { className: pe.label, children: t })
] });
X2.displayName = "SheikahAlbumButton";
const J2 = "zelda-container-lnuMc", ei = "zelda-innerBorder-lkkhb", ti = "zelda-message--ctTW", He = {
  container: J2,
  innerBorder: ei,
  message: ti
}, ni = ({ message: t, visible: n = !0, duration: a = 3e3, onClose: s, className: o, style: i }) => {
  const [r, d] = Ct(n);
  return De(() => {
    d(n);
  }, [n]), De(() => {
    if (r && a > 0) {
      const v = setTimeout(() => {
        d(!1), s == null || s();
      }, a);
      return () => clearTimeout(v);
    }
  }, [r, a, s]), r ? /* @__PURE__ */ l("div", { className: c(He.container, o), style: i, role: "alert", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: He.innerBorder }),
    /* @__PURE__ */ e("span", { className: He.message, children: t })
  ] }) : null;
};
ni.displayName = "Toast";
const ai = "zelda-container-n0JyM", si = {
  container: ai
}, li = "M31.451 9.13059C30.8963 7.24598 29.2323 5.86136 27.2117 5.63059C27.0928 5.63059 26.974 5.51521 26.9343 5.39983C26.4589 2.20752 23.4874 -0.215561 20.0009 0.0152088C16.7521 0.245978 14.1372 2.89982 14.0183 6.09213C13.9391 8.09213 14.89 9.93829 16.3559 11.1306C16.554 11.2844 16.554 11.5921 16.3163 11.746L15.9993 11.9767C15.8408 12.0921 15.6824 12.0537 15.5635 11.8998C13.8599 9.55367 10.928 8.13059 7.71881 8.43829C3.91532 8.78444 0.389173 12.2844 0.0325957 15.9767C-0.44284 21.3614 4.35114 25.7844 9.93751 24.8998C13.8599 24.2844 17.1483 20.4383 17.1087 16.5921C17.1087 16.2075 17.069 15.7844 16.9898 15.3998C16.9502 15.246 17.0294 15.0537 17.1879 14.9768L20.3179 12.7844C20.516 12.6691 20.7141 12.5921 20.9122 12.5921C21.1499 12.5921 21.348 12.5537 21.5857 12.5152C21.7838 12.4767 21.9819 12.5921 22.0611 12.7844C22.8931 14.3614 24.5968 15.4383 26.5381 15.4383C28.4795 15.4383 30.1435 14.3998 30.9755 12.8614C31.0152 12.7844 31.134 12.7075 31.2133 12.7075L49.3194 12.1306C49.676 12.1306 49.9534 11.8614 49.9534 11.5152V10.4767C49.9534 10.1306 49.676 9.86136 49.3194 9.86136L31.7283 9.36136C31.6095 9.36136 31.4906 9.24598 31.451 9.13059ZM8.59044 20.8614C6.21326 20.8614 4.31152 19.0152 4.31152 16.7075C4.31152 14.3998 6.25288 12.5537 8.59044 12.5537C10.9676 12.5537 12.8694 14.4383 12.8694 16.7075C12.8694 18.9768 10.9676 20.8614 8.59044 20.8614ZM23.1705 6.89983C23.012 7.59213 22.5762 8.16906 21.9819 8.51521C21.5461 8.78444 21.0706 8.93829 20.516 8.93829C20.4763 8.93829 20.3971 8.93829 20.3575 8.93829C18.9312 8.86136 17.8218 7.70752 17.8218 6.3229C17.8218 4.86136 19.05 3.66906 20.5556 3.66906C22.0611 3.66906 23.2893 4.86136 23.2893 6.3229C23.2497 6.51521 23.2101 6.70752 23.1705 6.89983ZM26.6174 12.6306C25.6665 12.6306 24.8741 12.0537 24.5572 11.246C24.4779 11.0152 24.4383 10.7844 24.4383 10.5152C24.4383 9.36136 25.4288 8.39982 26.6174 8.39982H26.657C27.8456 8.39982 28.7965 9.36136 28.7965 10.5152C28.7965 11.6691 27.806 12.6306 26.6174 12.6306Z", oi = ({ side: t = "left", scale: n = 1, className: a, style: s }) => /* @__PURE__ */ e("div", { className: c(si.container, a), style: { transform: `scale(${n})`, ...s }, children: /* @__PURE__ */ e(
  "svg",
  {
    width: "50",
    height: "25",
    viewBox: "0 0 49.95 25.01",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t === "right" ? { transform: "scaleX(-1)" } : void 0,
    children: /* @__PURE__ */ e("path", { d: li, fill: "#E2DED3" })
  }
) });
oi.displayName = "TitleOrnament";
const ii = "zelda-container-d2DUG", ci = "zelda-icon-S7Dne", Ke = {
  container: ii,
  icon: ci
}, ri = { up: 0, right: 90, down: 180, left: 270 }, di = ({ direction: t = "up", size: n = 18, className: a, style: s }) => /* @__PURE__ */ e(
  "div",
  {
    className: c(Ke.container, a),
    style: { width: n * (10 / 18), height: n, transform: `rotate(${ri[t]}deg)`, ...s },
    children: /* @__PURE__ */ e("img", { src: st, alt: "", className: Ke.icon })
  }
);
di.displayName = "DirectionalArrow";
const mi = "zelda-container-qXuGN", hi = "zelda-layer1-gF--Y", pi = "zelda-layer2-qI-05", Ze = {
  container: mi,
  layer1: hi,
  layer2: pi
}, ui = ({ size: t = 200, className: n, style: a }) => /* @__PURE__ */ l("div", { className: c(Ze.container, n), style: { width: t, height: t, ...a }, children: [
  /* @__PURE__ */ e("img", { src: Bt, alt: "", className: Ze.layer1 }),
  /* @__PURE__ */ e("img", { src: xt, alt: "", className: Ze.layer2 })
] });
ui.displayName = "Starburst";
const Ci = "zelda-container-nsFol", Ni = "zelda-icon-XMiDq", Xe = {
  container: Ci,
  icon: Ni
}, gi = {
  topLeft: 180,
  topRight: -90,
  bottomRight: 0,
  bottomLeft: 90
}, vi = ({ position: t = "bottomRight", size: n = 35, className: a, style: s }) => /* @__PURE__ */ e(
  "div",
  {
    className: c(Xe.container, a),
    style: { width: n, height: n, transform: `rotate(${gi[t]}deg)`, ...s },
    children: /* @__PURE__ */ e("img", { src: Mt, alt: "", className: Xe.icon })
  }
);
vi.displayName = "TextOrnamentCorner";
const Li = "zelda-container-FlXy5", yi = "zelda-icon-Hk1-o", Je = {
  container: Li,
  icon: yi
}, zi = ({ side: t = "right", className: n, style: a }) => /* @__PURE__ */ e(
  "div",
  {
    className: c(Je.container, n),
    style: { transform: t === "left" ? "scaleX(-1)" : void 0, ...a },
    children: /* @__PURE__ */ e("img", { src: St, alt: "", className: Je.icon })
  }
);
zi.displayName = "TimerOrnament";
const fi = "zelda-container-2XxVV", bi = "zelda-image-Q8tWh", et = {
  container: fi,
  image: bi
}, wi = {
  sword: dt,
  rupee: mt,
  slate: ht,
  memories: pt
}, $i = ({
  illustration: t,
  opacity: n = 0.6,
  className: a,
  style: s
}) => /* @__PURE__ */ e("div", { className: c(et.container, a), style: s, children: /* @__PURE__ */ e(
  "img",
  {
    src: wi[t],
    alt: "",
    className: et.image,
    style: { opacity: n }
  }
) });
$i.displayName = "Illustration";
const Bi = "zelda-logo-UOylc", xi = "zelda-svg-77UNs", ue = {
  logo: Bi,
  svg: xi
}, ki = ({
  variant: t = "full",
  width: n,
  height: a,
  className: s,
  style: o
}) => {
  const i = c(ue.logo, ue[t], s);
  return /* @__PURE__ */ e("div", { className: i, style: { width: n ?? (t === "full" ? 200 : 48), height: a ?? (t === "full" ? 80 : 48), ...o }, children: t === "full" ? /* @__PURE__ */ l(
    "svg",
    {
      className: ue.svg,
      viewBox: "0 0 200 80",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ e(
          "path",
          {
            d: "M100 8L108 22H92L100 8Z",
            fill: "currentColor",
            fillOpacity: 0.9
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M92 22L84 36H100L92 22Z",
            fill: "currentColor",
            fillOpacity: 0.7
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M108 22L100 36H116L108 22Z",
            fill: "currentColor",
            fillOpacity: 0.7
          }
        ),
        /* @__PURE__ */ e(
          "text",
          {
            x: "100",
            y: "58",
            textAnchor: "middle",
            fontFamily: "Hylia Serif, Cinzel, serif",
            fontSize: "18",
            fontWeight: "700",
            fill: "currentColor",
            letterSpacing: "0.15em",
            children: "ZELDA"
          }
        ),
        /* @__PURE__ */ e(
          "text",
          {
            x: "100",
            y: "74",
            textAnchor: "middle",
            fontFamily: "Roboto, sans-serif",
            fontSize: "8",
            fontWeight: "500",
            fontStyle: "italic",
            fill: "currentColor",
            fillOpacity: 0.6,
            letterSpacing: "0.3em",
            children: "BREATH OF THE WILD"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ l(
    "svg",
    {
      className: ue.svg,
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ e(
          "path",
          {
            d: "M24 6L34 24H14L24 6Z",
            fill: "currentColor",
            fillOpacity: 0.9
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M14 24L4 42H24L14 24Z",
            fill: "currentColor",
            fillOpacity: 0.7
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M34 24L24 42H44L34 24Z",
            fill: "currentColor",
            fillOpacity: 0.7
          }
        )
      ]
    }
  ) });
};
ki.displayName = "Logo";
const Mi = "zelda-container-QK6WI", Si = "zelda-diamond-fQF4e", Ti = "zelda-filled-Co-Yv", Oe = {
  container: Mi,
  diamond: Si,
  filled: Ti
}, Ai = ({ quality: t, className: n, style: a }) => /* @__PURE__ */ e("div", { className: c(Oe.container, n), style: a, children: Array.from({ length: 3 }, (s, o) => /* @__PURE__ */ e("span", { className: c(Oe.diamond, { [Oe.filled]: o < t }) }, o)) });
Ai.displayName = "ItemEnchantment";
const Hi = "zelda-container-CXkz-", Zi = "zelda-plus-hJjdE", tt = {
  container: Hi,
  plus: Zi
}, Oi = "M21.7675 12.7969L12.1037 21.7487L2.05872 11.598C-0.686241 8.82416 -0.686239 4.35741 2.05872 1.58356C4.14815 -0.527857 7.55918 -0.527854 9.64861 1.58357L12.1037 4.06447L14.0676 2.0798C16.3794 -0.256337 20.1909 -0.129535 22.3423 2.35509C24.9973 5.42139 24.7431 10.0406 21.7675 12.7969Z", Ii = {
  "5+Hearts": 6,
  "5Hearts": 5,
  "4Hearts": 4,
  "3Hearts": 3,
  "2Hearts": 2,
  "1Hearts": 1,
  "0Hearts": 0,
  fullRecovery: 7,
  bonusHearts: 4,
  stamina: 0
}, Di = ({ type: t, className: n, style: a }) => {
  const s = Ii[t], o = t === "bonusHearts", i = t === "stamina";
  return /* @__PURE__ */ l("div", { className: c(tt.container, n), style: a, children: [
    i ? /* @__PURE__ */ e("svg", { width: "30", height: "30", viewBox: "0 0 60.75 60.75", fill: "none", children: /* @__PURE__ */ e("path", { d: "M60.75 30.375C60.75 47.1506 47.1506 60.75 30.375 60.75C13.5994 60.75 0 47.1506 0 30.375C0 13.5994 13.5994 0 30.375 0C47.1506 0 60.75 13.5994 60.75 30.375ZM19.7438 30.375C19.7438 36.2465 24.5035 41.0062 30.375 41.0062C36.2465 41.0062 41.0062 36.2465 41.0062 30.375C41.0062 24.5035 36.2465 19.7438 30.375 19.7438C24.5035 19.7438 19.7438 24.5035 19.7438 30.375Z", fill: "#13FF59" }) }) : Array.from({ length: Math.min(s, 6) }, (r, d) => /* @__PURE__ */ e("svg", { width: "24", height: "20", viewBox: "0 0 24.18 21.75", fill: "none", children: /* @__PURE__ */ e("path", { d: Oi, fill: o ? "#FFE465" : "#F1362F" }) }, d)),
    t === "fullRecovery" && /* @__PURE__ */ e("span", { className: tt.plus, children: "+" })
  ] });
};
Di.displayName = "StatusHealing";
const Ei = "zelda-reticle-TrJ4T", Fi = "zelda-icon-GAfUT", Vi = "zelda-bow-2XITj", Ri = "zelda-sheikahAbility-v12t0", Ie = {
  reticle: Ei,
  icon: Fi,
  bow: Vi,
  sheikahAbility: Ri
}, Wi = ({
  variant: t = "bow",
  size: n = 64,
  className: a,
  style: s
}) => {
  const o = c(Ie.reticle, Ie[t], a);
  return /* @__PURE__ */ e("div", { className: o, style: { width: n, height: n, ...s }, children: /* @__PURE__ */ l(
    "svg",
    {
      className: Ie.icon,
      viewBox: "0 0 64 64",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ e("circle", { cx: "32", cy: "32", r: "28", stroke: "currentColor", strokeWidth: "1.5", strokeOpacity: 0.6 }),
        /* @__PURE__ */ e("circle", { cx: "32", cy: "32", r: "12", stroke: "currentColor", strokeWidth: "1", strokeOpacity: 0.8 }),
        /* @__PURE__ */ e("circle", { cx: "32", cy: "32", r: "2", fill: "currentColor" }),
        /* @__PURE__ */ e("line", { x1: "32", y1: "4", x2: "32", y2: "20", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ e("line", { x1: "32", y1: "44", x2: "32", y2: "60", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ e("line", { x1: "4", y1: "32", x2: "20", y2: "32", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ e("line", { x1: "44", y1: "32", x2: "60", y2: "32", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        t === "sheikahAbility" && /* @__PURE__ */ l(W, { children: [
          /* @__PURE__ */ e("line", { x1: "10", y1: "10", x2: "18", y2: "18", stroke: "currentColor", strokeWidth: "1", strokeOpacity: 0.5 }),
          /* @__PURE__ */ e("line", { x1: "54", y1: "10", x2: "46", y2: "18", stroke: "currentColor", strokeWidth: "1", strokeOpacity: 0.5 }),
          /* @__PURE__ */ e("line", { x1: "10", y1: "54", x2: "18", y2: "46", stroke: "currentColor", strokeWidth: "1", strokeOpacity: 0.5 }),
          /* @__PURE__ */ e("line", { x1: "54", y1: "54", x2: "46", y2: "46", stroke: "currentColor", strokeWidth: "1", strokeOpacity: 0.5 })
        ] })
      ]
    }
  ) });
};
Wi.displayName = "AimingReticle";
const Gi = "zelda-container-kRVWY", Ui = "zelda-icon-Ul49D", Qi = "zelda-value-YsWxc", Pi = "zelda-attack-rlchj", qi = "zelda-defense-mMlDn", _i = "zelda-bonus-DWSGF", Yi = "zelda-penalty--BqQo", V = {
  container: Gi,
  icon: Ui,
  value: Qi,
  attack: Pi,
  defense: qi,
  bonus: _i,
  penalty: Yi
}, ji = ({
  type: t,
  value: n,
  modifier: a = "normal",
  className: s,
  style: o
}) => {
  const i = c(
    V.container,
    V[t],
    { [V.bonus]: a === "bonus", [V.penalty]: a === "penalty" },
    s
  );
  return /* @__PURE__ */ l("div", { className: i, style: o, children: [
    /* @__PURE__ */ e("span", { className: V.icon, children: t === "attack" ? /* @__PURE__ */ e("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
      "path",
      {
        d: "M14 2L9 7M14 2L11 2M14 2L14 5M2 14L7 9M5 14H2V11",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) : /* @__PURE__ */ e("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
      "path",
      {
        d: "M8 1L2 5V9C2 12 4.5 14.5 8 15C11.5 14.5 14 12 14 9V5L8 1Z",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }),
    /* @__PURE__ */ e("span", { className: V.value, children: n })
  ] });
};
ji.displayName = "AttackDefenseValues";
const Ki = "zelda-container-Zvycq", Xi = "zelda-selected-nfZZY", Ji = "zelda-selectedBorder-K4I3A", ec = "zelda-cornerTL-hzquN", tc = "zelda-cornerTR-hEYnn", nc = "zelda-cornerBL-Soyx3", ac = "zelda-cornerBR-todoz", sc = "zelda-label-fpbqp", lc = "zelda-toggleArea-HGUoR", oc = "zelda-toggleBg-yUfp9", ic = "zelda-toggleInnerBorder-4ugz2", cc = "zelda-twoOption-PXBuf", rc = "zelda-optionBtn-DcokK", dc = "zelda-activeOption-RH0nG", mc = "zelda-highlight-My41T", hc = "zelda-multiOption-wUuYP", pc = "zelda-arrowBtn-e2GO4", uc = "zelda-optionValue-e59Ao", m = {
  container: Ki,
  selected: Xi,
  selectedBorder: Ji,
  cornerTL: ec,
  cornerTR: tc,
  cornerBL: nc,
  cornerBR: ac,
  label: sc,
  toggleArea: lc,
  toggleBg: oc,
  toggleInnerBorder: ic,
  twoOption: cc,
  optionBtn: rc,
  activeOption: dc,
  highlight: mc,
  multiOption: hc,
  arrowBtn: pc,
  optionValue: uc
}, Cc = ({
  selected: t = !1,
  label: n,
  options: a = ["ON", "OFF"],
  value: s,
  onChange: o,
  className: i,
  style: r
}) => {
  const d = a.length > 2, v = s ? a.indexOf(s) : 0;
  return /* @__PURE__ */ l("div", { className: c(m.container, { [m.selected]: t }, i), style: r, role: "group", "aria-label": n || "Settings toggle", children: [
    t && /* @__PURE__ */ l(W, { children: [
      /* @__PURE__ */ e("div", { className: m.selectedBorder }),
      /* @__PURE__ */ e("span", { className: m.cornerTL }),
      /* @__PURE__ */ e("span", { className: m.cornerTR }),
      /* @__PURE__ */ e("span", { className: m.cornerBL }),
      /* @__PURE__ */ e("span", { className: m.cornerBR })
    ] }),
    n && /* @__PURE__ */ e("span", { className: m.label, children: n }),
    /* @__PURE__ */ l("div", { className: m.toggleArea, children: [
      /* @__PURE__ */ e("div", { className: m.toggleBg, children: /* @__PURE__ */ e("div", { className: m.toggleInnerBorder }) }),
      d ? (
        /* 多选模式：◀ 文字 ▶ */
        /* @__PURE__ */ l("div", { className: m.multiOption, children: [
          /* @__PURE__ */ e("button", { className: m.arrowBtn, onClick: () => o == null ? void 0 : o(a[Math.max(0, v - 1)]), "aria-label": "Previous option", children: "◀" }),
          /* @__PURE__ */ e("span", { className: m.optionValue, children: s || a[0] }),
          /* @__PURE__ */ e("button", { className: m.arrowBtn, onClick: () => o == null ? void 0 : o(a[Math.min(a.length - 1, v + 1)]), "aria-label": "Next option", children: "▶" })
        ] })
      ) : (
        /* 二选模式：ON | OFF */
        /* @__PURE__ */ l("div", { className: m.twoOption, children: [
          a.map((g) => /* @__PURE__ */ e(
            "button",
            {
              className: c(m.optionBtn, { [m.activeOption]: g === (s || a[0]) }),
              onClick: () => o == null ? void 0 : o(g),
              children: g
            },
            g
          )),
          /* @__PURE__ */ e(
            "div",
            {
              className: m.highlight,
              style: { left: (s || a[0]) === a[0] ? "6px" : "50%" }
            }
          )
        ] })
      )
    ] })
  ] });
};
Cc.displayName = "SettingsToggle";
const Nc = "zelda-container-uZSpM", gc = "zelda-innerBorder-tn3UC", vc = "zelda-hovered-5vMbI", Lc = "zelda-name-UlckG", yc = "zelda-price-ei5RV", j = {
  container: Nc,
  innerBorder: gc,
  hovered: vc,
  name: Lc,
  price: yc
}, zc = ({ name: t, price: n, hovered: a = !1, onClick: s, className: o, style: i }) => /* @__PURE__ */ l("div", { className: c(j.container, { [j.hovered]: a }, o), style: i, onClick: s, children: [
  /* @__PURE__ */ e("div", { className: j.innerBorder }),
  /* @__PURE__ */ e("span", { className: j.name, children: t }),
  /* @__PURE__ */ e("span", { className: j.price, children: n })
] });
zc.displayName = "ShopListItem";
const fc = "zelda-container-eVuEm", bc = "zelda-row-FAocO", wc = "zelda-label-osCIh", $c = "zelda-value-gxmQw", T = {
  container: fc,
  row: bc,
  label: wc,
  value: $c
}, Bc = ({ price: t, quantity: n, className: a, style: s }) => /* @__PURE__ */ l("div", { className: c(T.container, a), style: s, children: [
  /* @__PURE__ */ l("div", { className: T.row, children: [
    /* @__PURE__ */ e("span", { className: T.label, children: "Price" }),
    /* @__PURE__ */ e("span", { className: T.value, children: t })
  ] }),
  /* @__PURE__ */ l("div", { className: T.row, children: [
    /* @__PURE__ */ e("span", { className: T.label, children: "Qty" }),
    /* @__PURE__ */ e("span", { className: T.value, children: n })
  ] })
] });
Bc.displayName = "ShopPriceQuantity";
const xc = "zelda-container-I8GX7", kc = "zelda-btn-NRHwT", Mc = "zelda-value-FC8Ip", Ce = {
  container: xc,
  btn: kc,
  value: Mc
}, Sc = ({ value: t, min: n = 1, max: a = 99, onChange: s, className: o, style: i }) => /* @__PURE__ */ l("div", { className: c(Ce.container, o), style: i, children: [
  /* @__PURE__ */ e("button", { className: Ce.btn, onClick: () => s == null ? void 0 : s(Math.max(n, t - 1)), children: "▼" }),
  /* @__PURE__ */ e("span", { className: Ce.value, children: t }),
  /* @__PURE__ */ e("button", { className: Ce.btn, onClick: () => s == null ? void 0 : s(Math.min(a, t + 1)), children: "▲" })
] });
Sc.displayName = "NumberInput";
const Tc = "zelda-container--fvoi", Ac = "zelda-header-j7XsV", Hc = "zelda-sectionNav-UNNxG", Zc = "zelda-body-t3-lT", Oc = "zelda-itemGrid-li-rb", Ic = "zelda-gridInner-iVfUF", Dc = "zelda-descriptionPanel-vN0pn", Ec = "zelda-itemName-IElZk", Fc = "zelda-itemDesc-kmrzI", Vc = "zelda-itemStats-WMQSH", Rc = "zelda-footer-7-3uj", L = {
  container: Tc,
  header: Ac,
  sectionNav: Hc,
  body: Zc,
  itemGrid: Oc,
  gridInner: Ic,
  descriptionPanel: Dc,
  itemName: Ec,
  itemDesc: Fc,
  itemStats: Vc,
  footer: Rc
}, Wc = ({ children: t, className: n, style: a }) => /* @__PURE__ */ l("div", { className: c(L.container, n), style: a, children: [
  /* @__PURE__ */ e("div", { className: L.header, children: /* @__PURE__ */ e("div", { className: L.sectionNav }) }),
  /* @__PURE__ */ l("div", { className: L.body, children: [
    /* @__PURE__ */ e("div", { className: L.itemGrid, children: /* @__PURE__ */ e("div", { className: L.gridInner }) }),
    /* @__PURE__ */ l("div", { className: L.descriptionPanel, children: [
      /* @__PURE__ */ e("div", { className: L.itemName }),
      /* @__PURE__ */ e("div", { className: L.itemDesc }),
      /* @__PURE__ */ e("div", { className: L.itemStats })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: L.footer }),
  t
] });
Wc.displayName = "MenuScreen";
const Gc = "zelda-container-tHJ0U", Uc = "zelda-header-issYy", Qc = "zelda-title-dDq87", Pc = "zelda-body-nT6j7", qc = "zelda-questList-JH56g", _c = "zelda-questTabs-gvuVS", Yc = "zelda-tab-djvrf", jc = "zelda-tabActive-YgQbA", Kc = "zelda-listContent-ZzQL6", Xc = "zelda-questDetail-uLh7i", Jc = "zelda-detailTitle--rngq", er = "zelda-detailDescription-W8g9k", tr = "zelda-detailObjective-RIgib", u = {
  container: Gc,
  header: Uc,
  title: Qc,
  body: Pc,
  questList: qc,
  questTabs: _c,
  tab: Yc,
  tabActive: jc,
  listContent: Kc,
  questDetail: Xc,
  detailTitle: Jc,
  detailDescription: er,
  detailObjective: tr
}, nr = ({ children: t, className: n, style: a }) => /* @__PURE__ */ l("div", { className: c(u.container, n), style: a, children: [
  /* @__PURE__ */ e("div", { className: u.header, children: /* @__PURE__ */ e("h1", { className: u.title, children: "Adventure Log" }) }),
  /* @__PURE__ */ l("div", { className: u.body, children: [
    /* @__PURE__ */ l("div", { className: u.questList, children: [
      /* @__PURE__ */ l("div", { className: u.questTabs, children: [
        /* @__PURE__ */ e("span", { className: u.tabActive, children: "Main Quests" }),
        /* @__PURE__ */ e("span", { className: u.tab, children: "Side Quests" }),
        /* @__PURE__ */ e("span", { className: u.tab, children: "Shrine Quests" })
      ] }),
      /* @__PURE__ */ e("div", { className: u.listContent })
    ] }),
    /* @__PURE__ */ l("div", { className: u.questDetail, children: [
      /* @__PURE__ */ e("div", { className: u.detailTitle }),
      /* @__PURE__ */ e("div", { className: u.detailDescription }),
      /* @__PURE__ */ e("div", { className: u.detailObjective })
    ] })
  ] }),
  t
] });
nr.displayName = "QuestScreen";
const ar = "zelda-container-SDYpf", sr = "zelda-beastIcons-Dr8a4", lr = "zelda-beastIcon-6TDhL", or = "zelda-center-KIzOb", ir = "zelda-hearts-hcQPo", cr = "zelda-heart-kc73w", rr = "zelda-tipText-RB5i2", dr = "zelda-footer-YddKU", mr = "zelda-hint-do887", C = {
  container: ar,
  beastIcons: sr,
  beastIcon: lr,
  center: or,
  hearts: ir,
  heart: cr,
  tipText: rr,
  footer: dr,
  hint: mr
}, hr = ({ children: t, className: n, style: a }) => /* @__PURE__ */ l("div", { className: c(C.container, n), style: a, children: [
  /* @__PURE__ */ l("div", { className: C.beastIcons, children: [
    /* @__PURE__ */ e("div", { className: C.beastIcon }),
    /* @__PURE__ */ e("div", { className: C.beastIcon }),
    /* @__PURE__ */ e("div", { className: C.beastIcon }),
    /* @__PURE__ */ e("div", { className: C.beastIcon })
  ] }),
  /* @__PURE__ */ l("div", { className: C.center, children: [
    /* @__PURE__ */ l("div", { className: C.hearts, children: [
      /* @__PURE__ */ e("span", { className: C.heart }),
      /* @__PURE__ */ e("span", { className: C.heart }),
      /* @__PURE__ */ e("span", { className: C.heart })
    ] }),
    /* @__PURE__ */ e("p", { className: C.tipText, children: "Loading..." })
  ] }),
  /* @__PURE__ */ e("div", { className: C.footer, children: /* @__PURE__ */ e("p", { className: C.hint }) }),
  t
] });
hr.displayName = "LoadingScreen";
const pr = "zelda-container-SugTM", ur = "zelda-logoArea-lNm2k", Cr = "zelda-logo-1oQAX", Nr = "zelda-menu-g0VOm", gr = "zelda-menuItem-2lc--", vr = "zelda-footer-zQ-zj", Lr = "zelda-copyright-eGdw5", w = {
  container: pr,
  logoArea: ur,
  logo: Cr,
  menu: Nr,
  menuItem: gr,
  footer: vr,
  copyright: Lr
}, yr = ({ children: t, className: n, style: a }) => /* @__PURE__ */ l("div", { className: c(w.container, n), style: a, children: [
  /* @__PURE__ */ e("div", { className: w.logoArea, children: /* @__PURE__ */ e("div", { className: w.logo }) }),
  /* @__PURE__ */ l("nav", { className: w.menu, children: [
    /* @__PURE__ */ e("div", { className: w.menuItem, children: "Continue" }),
    /* @__PURE__ */ e("div", { className: w.menuItem, children: "New Game" }),
    /* @__PURE__ */ e("div", { className: w.menuItem, children: "Options" })
  ] }),
  /* @__PURE__ */ e("div", { className: w.footer, children: /* @__PURE__ */ e("span", { className: w.copyright }) }),
  t
] });
yr.displayName = "TitleScreen";
const zr = "zelda-container-UoPQC", fr = "zelda-content-XD9qB", br = "zelda-gameOverText-Ug6l3", wr = "zelda-options-WHgee", $r = "zelda-option-JXx8E", R = {
  container: zr,
  content: fr,
  gameOverText: br,
  options: wr,
  option: $r
}, Br = ({ children: t, className: n, style: a }) => /* @__PURE__ */ l("div", { className: c(R.container, n), style: a, children: [
  /* @__PURE__ */ l("div", { className: R.content, children: [
    /* @__PURE__ */ e("h1", { className: R.gameOverText, children: "Game Over" }),
    /* @__PURE__ */ l("div", { className: R.options, children: [
      /* @__PURE__ */ e("span", { className: R.option, children: "Continue" }),
      /* @__PURE__ */ e("span", { className: R.option, children: "Load Save" })
    ] })
  ] }),
  t
] });
Br.displayName = "GameOverScreen";
const xr = "zelda-container-WlExr", kr = "zelda-header-3EyTS", Mr = "zelda-title-5MWAd", Sr = "zelda-body-TZz5r", Tr = "zelda-settingsList-toVU7", Ar = "zelda-settingsGroup-1gYGG", Hr = "zelda-groupTitle-UiZoq", Zr = "zelda-groupContent-CScOS", Or = "zelda-footer-CljD2", p = {
  container: xr,
  header: kr,
  title: Mr,
  body: Sr,
  settingsList: Tr,
  settingsGroup: Ar,
  groupTitle: Hr,
  groupContent: Zr,
  footer: Or
}, Ir = ({ children: t, className: n, style: a }) => /* @__PURE__ */ l("div", { className: c(p.container, n), style: a, children: [
  /* @__PURE__ */ e("div", { className: p.header, children: /* @__PURE__ */ e("h1", { className: p.title, children: "System Settings" }) }),
  /* @__PURE__ */ e("div", { className: p.body, children: /* @__PURE__ */ l("div", { className: p.settingsList, children: [
    /* @__PURE__ */ l("div", { className: p.settingsGroup, children: [
      /* @__PURE__ */ e("h2", { className: p.groupTitle, children: "Display" }),
      /* @__PURE__ */ e("div", { className: p.groupContent })
    ] }),
    /* @__PURE__ */ l("div", { className: p.settingsGroup, children: [
      /* @__PURE__ */ e("h2", { className: p.groupTitle, children: "Audio" }),
      /* @__PURE__ */ e("div", { className: p.groupContent })
    ] }),
    /* @__PURE__ */ l("div", { className: p.settingsGroup, children: [
      /* @__PURE__ */ e("h2", { className: p.groupTitle, children: "Controls" }),
      /* @__PURE__ */ e("div", { className: p.groupContent })
    ] })
  ] }) }),
  /* @__PURE__ */ e("div", { className: p.footer }),
  t
] });
Ir.displayName = "SystemScreen";
const Dr = "zelda-container-pCLHC", Er = "zelda-header-yRu39", Fr = "zelda-shopName--vCKl", Vr = "zelda-rupeeDisplay-opZGR", Rr = "zelda-rupeeIcon-4ABSH", Wr = "zelda-rupeeAmount-QbiI-", Gr = "zelda-body-g5lad", Ur = "zelda-itemList-yMTWH", Qr = "zelda-listContent-nMJgY", Pr = "zelda-itemDetail-vMFZA", qr = "zelda-itemPreview-TZ8-7", _r = "zelda-itemInfo-KKvpA", Yr = "zelda-itemName-bUWKw", jr = "zelda-itemDescription-yOrko", Kr = "zelda-priceArea-kh7lO", Xr = "zelda-priceTag-wKx9L", Jr = "zelda-quantityControl-C302o", e3 = "zelda-footer--1nio", h = {
  container: Dr,
  header: Er,
  shopName: Fr,
  rupeeDisplay: Vr,
  rupeeIcon: Rr,
  rupeeAmount: Wr,
  body: Gr,
  itemList: Ur,
  listContent: Qr,
  itemDetail: Pr,
  itemPreview: qr,
  itemInfo: _r,
  itemName: Yr,
  itemDescription: jr,
  priceArea: Kr,
  priceTag: Xr,
  quantityControl: Jr,
  footer: e3
}, t3 = ({ children: t, className: n, style: a }) => /* @__PURE__ */ l("div", { className: c(h.container, n), style: a, children: [
  /* @__PURE__ */ l("div", { className: h.header, children: [
    /* @__PURE__ */ e("h1", { className: h.shopName, children: "General Store" }),
    /* @__PURE__ */ l("div", { className: h.rupeeDisplay, children: [
      /* @__PURE__ */ e("span", { className: h.rupeeIcon }),
      /* @__PURE__ */ e("span", { className: h.rupeeAmount, children: "0" })
    ] })
  ] }),
  /* @__PURE__ */ l("div", { className: h.body, children: [
    /* @__PURE__ */ e("div", { className: h.itemList, children: /* @__PURE__ */ e("div", { className: h.listContent }) }),
    /* @__PURE__ */ l("div", { className: h.itemDetail, children: [
      /* @__PURE__ */ e("div", { className: h.itemPreview }),
      /* @__PURE__ */ l("div", { className: h.itemInfo, children: [
        /* @__PURE__ */ e("div", { className: h.itemName }),
        /* @__PURE__ */ e("div", { className: h.itemDescription })
      ] }),
      /* @__PURE__ */ l("div", { className: h.priceArea, children: [
        /* @__PURE__ */ e("div", { className: h.priceTag }),
        /* @__PURE__ */ e("div", { className: h.quantityControl })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: h.footer }),
  t
] });
t3.displayName = "ShopScreen";
const n3 = "zelda-container-W9k1T", a3 = "zelda-mapArea-Tzni-", s3 = "zelda-mapGrid-JLw3f", l3 = "zelda-mapIcons-dE6WW", o3 = "zelda-mapCursor-SHzWb", i3 = "zelda-cursorInner-Y7pCP", c3 = "zelda-infoPanel-ukhuL", r3 = "zelda-locationName-qv36w", d3 = "zelda-coordinates-E2etI", m3 = "zelda-toolbar-QMZrm", h3 = "zelda-toolButton-TMcnK", p3 = "zelda-footer-GOqJ5", N = {
  container: n3,
  mapArea: a3,
  mapGrid: s3,
  mapIcons: l3,
  mapCursor: o3,
  cursorInner: i3,
  infoPanel: c3,
  locationName: r3,
  coordinates: d3,
  toolbar: m3,
  toolButton: h3,
  footer: p3
}, u3 = ({ children: t, className: n, style: a }) => /* @__PURE__ */ l("div", { className: c(N.container, n), style: a, children: [
  /* @__PURE__ */ l("div", { className: N.mapArea, children: [
    /* @__PURE__ */ e("div", { className: N.mapGrid }),
    /* @__PURE__ */ e("div", { className: N.mapIcons }),
    /* @__PURE__ */ e("div", { className: N.mapCursor, children: /* @__PURE__ */ e("div", { className: N.cursorInner }) })
  ] }),
  /* @__PURE__ */ l("div", { className: N.infoPanel, children: [
    /* @__PURE__ */ e("div", { className: N.locationName }),
    /* @__PURE__ */ e("div", { className: N.coordinates })
  ] }),
  /* @__PURE__ */ l("div", { className: N.toolbar, children: [
    /* @__PURE__ */ e("div", { className: N.toolButton }),
    /* @__PURE__ */ e("div", { className: N.toolButton }),
    /* @__PURE__ */ e("div", { className: N.toolButton })
  ] }),
  /* @__PURE__ */ e("div", { className: N.footer }),
  t
] });
u3.displayName = "SheikahMapScreen";
const C3 = "zelda-container-t5JtE", N3 = "zelda-backdrop-s-4te", g3 = "zelda-selectorArea-Kvriq", v3 = "zelda-wheel-NeVdD", L3 = "zelda-wheelCenter-wh-0Y", y3 = "zelda-slots--9eZn", z3 = "zelda-slot-eDK1n", f3 = "zelda-selectedName-57dFr", x = {
  container: C3,
  backdrop: N3,
  selectorArea: g3,
  wheel: v3,
  wheelCenter: L3,
  slots: y3,
  slot: z3,
  selectedName: f3
}, b3 = ({ children: t, className: n, style: a }) => /* @__PURE__ */ l("div", { className: c(x.container, n), style: a, children: [
  /* @__PURE__ */ e("div", { className: x.backdrop }),
  /* @__PURE__ */ l("div", { className: x.selectorArea, children: [
    /* @__PURE__ */ l("div", { className: x.wheel, children: [
      /* @__PURE__ */ e("div", { className: x.wheelCenter }),
      /* @__PURE__ */ e("div", { className: x.slots, children: Array.from({ length: 8 }).map((s, o) => /* @__PURE__ */ e("div", { className: x.slot }, o)) })
    ] }),
    /* @__PURE__ */ e("div", { className: x.selectedName })
  ] }),
  t
] });
b3.displayName = "QuickSelectorScreen";
export {
  wo as ActionSet,
  Wi as AimingReticle,
  ji as AttackDefenseValues,
  rs as BonusEffectIcon,
  Yt as Button,
  an as Card,
  Lo as ControllerButton,
  Cn as Dialog,
  yl as DialogChoice,
  Ml as DialogFloating,
  di as DirectionalArrow,
  Zn as Divider,
  wa as DivineBeast,
  as as EffectDuration,
  Br as GameOverScreen,
  Xn as HealthBar,
  ks as HorseSpur,
  $i as Illustration,
  s1 as ItemBG,
  Ai as ItemEnchantment,
  Qn as Loading,
  zs as LoadingHeart,
  gs as LoadingIcon,
  hr as LoadingScreen,
  ki as Logo,
  Oo as MapBeacon,
  Jo as MapCursor,
  c2 as MapGrid,
  a2 as MapHeroLocation,
  Mo as MapIcon,
  Qo as MapLocationName,
  Fo as MapQuestMarker,
  Wc as MenuScreen,
  Rs as MenuSections,
  $n as Modal,
  p1 as ModalButton,
  f1 as ModalTimer,
  D1 as ModalTutorial,
  Sc as NumberInput,
  c1 as Pagination,
  ao as QuestDescription,
  Pl as QuestListItem,
  po as QuestNotification,
  nr as QuestScreen,
  io as QuestTypeIcon,
  Zs as QuickSelector,
  b3 as QuickSelectorScreen,
  Ca as RupeeCounter,
  Ia as RupeeType,
  g1 as Scrollbar,
  Xa as Sensor,
  Cc as SettingsToggle,
  Aa as SheikahAbility,
  X2 as SheikahAlbumButton,
  v2 as SheikahBackground,
  O2 as SheikahCompendiumEntry,
  q2 as SheikahCompendiumFilters,
  u3 as SheikahMapScreen,
  x2 as SheikahRune,
  z2 as SheikahScanlines,
  h2 as SheikahSymbol,
  R2 as SheikahTextTitle,
  zc as ShopListItem,
  Bc as ShopPriceQuantity,
  t3 as ShopScreen,
  Qa as SoundMeter,
  la as StaminaWheel,
  ui as Starburst,
  T1 as StatsStack,
  Di as StatusHealing,
  Ir as SystemScreen,
  Ra as Temperature,
  vi as TextOrnamentCorner,
  zi as TimerOrnament,
  R1 as TitleLocation,
  ll as TitleLocationLarge,
  oi as TitleOrnament,
  ul as TitlePointOfInterest,
  X1 as TitleQuest,
  yr as TitleScreen,
  nl as TitleShrine,
  ni as Toast,
  da as WeatherIcon
};
