(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = t(i);
    fetch(i.href, r);
  }
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Ho = "150",
  Bi = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  Gi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  vf = 0,
  Cl = 1,
  yf = 2,
  Eh = 1,
  Ah = 2,
  Vr = 3,
  ci = 0,
  Jt = 1,
  Qn = 2,
  ai = 0,
  ur = 1,
  Pl = 2,
  Ll = 3,
  Rl = 4,
  Mf = 5,
  ir = 100,
  bf = 101,
  Sf = 102,
  Dl = 103,
  Il = 104,
  wf = 200,
  Tf = 201,
  Ef = 202,
  Af = 203,
  Ch = 204,
  Ph = 205,
  Cf = 206,
  Pf = 207,
  Lf = 208,
  Rf = 209,
  Df = 210,
  If = 0,
  Ff = 1,
  Of = 2,
  vo = 3,
  Nf = 4,
  kf = 5,
  Uf = 6,
  zf = 7,
  ha = 0,
  Bf = 1,
  Gf = 2,
  Hn = 0,
  Vf = 1,
  Wf = 2,
  Hf = 3,
  Xf = 4,
  qf = 5,
  Lh = 300,
  _r = 301,
  xr = 302,
  Zs = 303,
  yo = 304,
  ua = 306,
  ns = 1e3,
  Ot = 1001,
  Mo = 1002,
  xt = 1003,
  Fl = 1004,
  wa = 1005,
  Kt = 1006,
  Yf = 1007,
  is = 1008,
  jf = 1008,
  Ii = 1009,
  Zf = 1010,
  Kf = 1011,
  Rh = 1012,
  $f = 1013,
  Ai = 1014,
  ei = 1015,
  rs = 1016,
  Jf = 1017,
  Qf = 1018,
  fr = 1020,
  ed = 1021,
  on = 1023,
  td = 1024,
  nd = 1025,
  Pi = 1026,
  vr = 1027,
  id = 1028,
  rd = 1029,
  sd = 1030,
  ad = 1031,
  od = 1033,
  Ta = 33776,
  Ea = 33777,
  Aa = 33778,
  Ca = 33779,
  Ol = 35840,
  Nl = 35841,
  kl = 35842,
  Ul = 35843,
  ld = 36196,
  zl = 37492,
  Bl = 37496,
  Gl = 37808,
  Vl = 37809,
  Wl = 37810,
  Hl = 37811,
  Xl = 37812,
  ql = 37813,
  Yl = 37814,
  jl = 37815,
  Zl = 37816,
  Kl = 37817,
  $l = 37818,
  Jl = 37819,
  Ql = 37820,
  ec = 37821,
  Pa = 36492,
  cd = 36283,
  tc = 36284,
  nc = 36285,
  ic = 36286,
  hd = 2200,
  ud = 2201,
  fd = 2202,
  Ks = 2300,
  $s = 2301,
  La = 2302,
  sr = 2400,
  ar = 2401,
  Js = 2402,
  Xo = 2500,
  dd = 2501,
  Fi = 3e3,
  Be = 3001,
  pd = 3200,
  md = 3201,
  qo = 0,
  gd = 1,
  Sn = "srgb",
  ss = "srgb-linear",
  Dh = "display-p3",
  Ra = 7680,
  _d = 519,
  rc = 35044,
  sc = "300 es",
  bo = 1035;
class fi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const bt = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let ac = 1234567;
const Zr = Math.PI / 180,
  as = 180 / Math.PI;
function di() {
  const o = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    bt[o & 255] +
    bt[(o >> 8) & 255] +
    bt[(o >> 16) & 255] +
    bt[(o >> 24) & 255] +
    "-" +
    bt[e & 255] +
    bt[(e >> 8) & 255] +
    "-" +
    bt[((e >> 16) & 15) | 64] +
    bt[(e >> 24) & 255] +
    "-" +
    bt[(t & 63) | 128] +
    bt[(t >> 8) & 255] +
    "-" +
    bt[(t >> 16) & 255] +
    bt[(t >> 24) & 255] +
    bt[n & 255] +
    bt[(n >> 8) & 255] +
    bt[(n >> 16) & 255] +
    bt[(n >> 24) & 255]
  ).toLowerCase();
}
function vt(o, e, t) {
  return Math.max(e, Math.min(t, o));
}
function Yo(o, e) {
  return ((o % e) + e) % e;
}
function xd(o, e, t, n, i) {
  return n + ((o - e) * (i - n)) / (t - e);
}
function vd(o, e, t) {
  return o !== e ? (t - o) / (e - o) : 0;
}
function Kr(o, e, t) {
  return (1 - t) * o + t * e;
}
function yd(o, e, t, n) {
  return Kr(o, e, 1 - Math.exp(-t * n));
}
function Md(o, e = 1) {
  return e - Math.abs(Yo(o, e * 2) - e);
}
function bd(o, e, t) {
  return o <= e
    ? 0
    : o >= t
    ? 1
    : ((o = (o - e) / (t - e)), o * o * (3 - 2 * o));
}
function Sd(o, e, t) {
  return o <= e
    ? 0
    : o >= t
    ? 1
    : ((o = (o - e) / (t - e)), o * o * o * (o * (o * 6 - 15) + 10));
}
function wd(o, e) {
  return o + Math.floor(Math.random() * (e - o + 1));
}
function Td(o, e) {
  return o + Math.random() * (e - o);
}
function Ed(o) {
  return o * (0.5 - Math.random());
}
function Ad(o) {
  o !== void 0 && (ac = o);
  let e = (ac += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function Cd(o) {
  return o * Zr;
}
function Pd(o) {
  return o * as;
}
function So(o) {
  return (o & (o - 1)) === 0 && o !== 0;
}
function Ih(o) {
  return Math.pow(2, Math.ceil(Math.log(o) / Math.LN2));
}
function Fh(o) {
  return Math.pow(2, Math.floor(Math.log(o) / Math.LN2));
}
function Ld(o, e, t, n, i) {
  const r = Math.cos,
    a = Math.sin,
    s = r(t / 2),
    l = a(t / 2),
    c = r((e + n) / 2),
    h = a((e + n) / 2),
    u = r((e - n) / 2),
    f = a((e - n) / 2),
    p = r((n - e) / 2),
    g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      o.set(s * h, l * u, l * f, s * c);
      break;
    case "YZY":
      o.set(l * f, s * h, l * u, s * c);
      break;
    case "ZXZ":
      o.set(l * u, l * f, s * h, s * c);
      break;
    case "XZX":
      o.set(s * h, l * g, l * p, s * c);
      break;
    case "YXY":
      o.set(l * p, s * h, l * g, s * c);
      break;
    case "ZYZ":
      o.set(l * g, l * p, s * h, s * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i
      );
  }
}
function Wr(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return o / 65535;
    case Uint8Array:
      return o / 255;
    case Int16Array:
      return Math.max(o / 32767, -1);
    case Int8Array:
      return Math.max(o / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ut(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return Math.round(o * 65535);
    case Uint8Array:
      return Math.round(o * 255);
    case Int16Array:
      return Math.round(o * 32767);
    case Int8Array:
      return Math.round(o * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Tn = {
  DEG2RAD: Zr,
  RAD2DEG: as,
  generateUUID: di,
  clamp: vt,
  euclideanModulo: Yo,
  mapLinear: xd,
  inverseLerp: vd,
  lerp: Kr,
  damp: yd,
  pingpong: Md,
  smoothstep: bd,
  smootherstep: Sd,
  randInt: wd,
  randFloat: Td,
  randFloatSpread: Ed,
  seededRandom: Ad,
  degToRad: Cd,
  radToDeg: Pd,
  isPowerOfTwo: So,
  ceilPowerOfTwo: Ih,
  floorPowerOfTwo: Fh,
  setQuaternionFromProperEuler: Ld,
  normalize: Ut,
  denormalize: Wr,
};
class Se {
  constructor(e = 0, t = 0) {
    (Se.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (this.x = r * n - a * i + e.x), (this.y = r * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Tt {
  constructor() {
    (Tt.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, n, i, r, a, s, l, c) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[1] = i),
      (h[2] = s),
      (h[3] = t),
      (h[4] = r),
      (h[5] = l),
      (h[6] = n),
      (h[7] = a),
      (h[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      s = n[3],
      l = n[6],
      c = n[1],
      h = n[4],
      u = n[7],
      f = n[2],
      p = n[5],
      g = n[8],
      d = i[0],
      m = i[3],
      _ = i[6],
      b = i[1],
      x = i[4],
      y = i[7],
      M = i[2],
      E = i[5],
      C = i[8];
    return (
      (r[0] = a * d + s * b + l * M),
      (r[3] = a * m + s * x + l * E),
      (r[6] = a * _ + s * y + l * C),
      (r[1] = c * d + h * b + u * M),
      (r[4] = c * m + h * x + u * E),
      (r[7] = c * _ + h * y + u * C),
      (r[2] = f * d + p * b + g * M),
      (r[5] = f * m + p * x + g * E),
      (r[8] = f * _ + p * y + g * C),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      l = e[6],
      c = e[7],
      h = e[8];
    return (
      t * a * h - t * s * c - n * r * h + n * s * l + i * r * c - i * a * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      l = e[6],
      c = e[7],
      h = e[8],
      u = h * a - s * c,
      f = s * l - h * r,
      p = c * r - a * l,
      g = t * u + n * f + i * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const d = 1 / g;
    return (
      (e[0] = u * d),
      (e[1] = (i * c - h * n) * d),
      (e[2] = (s * n - i * a) * d),
      (e[3] = f * d),
      (e[4] = (h * t - i * l) * d),
      (e[5] = (i * r - s * t) * d),
      (e[6] = p * d),
      (e[7] = (n * l - c * t) * d),
      (e[8] = (a * t - n * r) * d),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, r, a, s) {
    const l = Math.cos(r),
      c = Math.sin(r);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * a + c * s) + a + e,
        -i * c,
        i * l,
        -i * (-c * a + l * s) + s + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(Da.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Da.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Da.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Da = new Tt();
function Oh(o) {
  for (let e = o.length - 1; e >= 0; --e) if (o[e] >= 65535) return !0;
  return !1;
}
function os(o) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", o);
}
class Nt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, r, a, s) {
    let l = n[i + 0],
      c = n[i + 1],
      h = n[i + 2],
      u = n[i + 3];
    const f = r[a + 0],
      p = r[a + 1],
      g = r[a + 2],
      d = r[a + 3];
    if (s === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = h), (e[t + 3] = u);
      return;
    }
    if (s === 1) {
      (e[t + 0] = f), (e[t + 1] = p), (e[t + 2] = g), (e[t + 3] = d);
      return;
    }
    if (u !== d || l !== f || c !== p || h !== g) {
      let m = 1 - s;
      const _ = l * f + c * p + h * g + u * d,
        b = _ >= 0 ? 1 : -1,
        x = 1 - _ * _;
      if (x > Number.EPSILON) {
        const M = Math.sqrt(x),
          E = Math.atan2(M, _ * b);
        (m = Math.sin(m * E) / M), (s = Math.sin(s * E) / M);
      }
      const y = s * b;
      if (
        ((l = l * m + f * y),
        (c = c * m + p * y),
        (h = h * m + g * y),
        (u = u * m + d * y),
        m === 1 - s)
      ) {
        const M = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        (l *= M), (c *= M), (h *= M), (u *= M);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = h), (e[t + 3] = u);
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const s = n[i],
      l = n[i + 1],
      c = n[i + 2],
      h = n[i + 3],
      u = r[a],
      f = r[a + 1],
      p = r[a + 2],
      g = r[a + 3];
    return (
      (e[t] = s * g + h * u + l * p - c * f),
      (e[t + 1] = l * g + h * f + c * u - s * p),
      (e[t + 2] = c * g + h * p + s * f - l * u),
      (e[t + 3] = h * g - s * u - l * f - c * p),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._order,
      s = Math.cos,
      l = Math.sin,
      c = s(n / 2),
      h = s(i / 2),
      u = s(r / 2),
      f = l(n / 2),
      p = l(i / 2),
      g = l(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = f * h * u + c * p * g),
          (this._y = c * p * u - f * h * g),
          (this._z = c * h * g + f * p * u),
          (this._w = c * h * u - f * p * g);
        break;
      case "YXZ":
        (this._x = f * h * u + c * p * g),
          (this._y = c * p * u - f * h * g),
          (this._z = c * h * g - f * p * u),
          (this._w = c * h * u + f * p * g);
        break;
      case "ZXY":
        (this._x = f * h * u - c * p * g),
          (this._y = c * p * u + f * h * g),
          (this._z = c * h * g + f * p * u),
          (this._w = c * h * u - f * p * g);
        break;
      case "ZYX":
        (this._x = f * h * u - c * p * g),
          (this._y = c * p * u + f * h * g),
          (this._z = c * h * g - f * p * u),
          (this._w = c * h * u + f * p * g);
        break;
      case "YZX":
        (this._x = f * h * u + c * p * g),
          (this._y = c * p * u + f * h * g),
          (this._z = c * h * g - f * p * u),
          (this._w = c * h * u - f * p * g);
        break;
      case "XZY":
        (this._x = f * h * u - c * p * g),
          (this._y = c * p * u - f * h * g),
          (this._z = c * h * g + f * p * u),
          (this._w = c * h * u + f * p * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      r = t[8],
      a = t[1],
      s = t[5],
      l = t[9],
      c = t[2],
      h = t[6],
      u = t[10],
      f = n + s + u;
    if (f > 0) {
      const p = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / p),
        (this._x = (h - l) * p),
        (this._y = (r - c) * p),
        (this._z = (a - i) * p);
    } else if (n > s && n > u) {
      const p = 2 * Math.sqrt(1 + n - s - u);
      (this._w = (h - l) / p),
        (this._x = 0.25 * p),
        (this._y = (i + a) / p),
        (this._z = (r + c) / p);
    } else if (s > u) {
      const p = 2 * Math.sqrt(1 + s - n - u);
      (this._w = (r - c) / p),
        (this._x = (i + a) / p),
        (this._y = 0.25 * p),
        (this._z = (l + h) / p);
    } else {
      const p = 2 * Math.sqrt(1 + u - n - s);
      (this._w = (a - i) / p),
        (this._x = (r + c) / p),
        (this._y = (l + h) / p),
        (this._z = 0.25 * p);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(vt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._w,
      s = t._x,
      l = t._y,
      c = t._z,
      h = t._w;
    return (
      (this._x = n * h + a * s + i * c - r * l),
      (this._y = i * h + a * l + r * s - n * c),
      (this._z = r * h + a * c + n * l - i * s),
      (this._w = a * h - n * s - i * l - r * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      r = this._z,
      a = this._w;
    let s = a * e._w + n * e._x + i * e._y + r * e._z;
    if (
      (s < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (s = -s))
        : this.copy(e),
      s >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
    const l = 1 - s * s;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return (
        (this._w = p * a + t * this._w),
        (this._x = p * n + t * this._x),
        (this._y = p * i + t * this._y),
        (this._z = p * r + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      h = Math.atan2(c, s),
      u = Math.sin((1 - t) * h) / c,
      f = Math.sin(t * h) / c;
    return (
      (this._w = a * u + this._w * f),
      (this._x = n * u + this._x * f),
      (this._y = i * u + this._y * f),
      (this._z = r * u + this._z * f),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    (R.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(oc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(oc.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * i),
      (this.y = r[1] * t + r[4] * n + r[7] * i),
      (this.z = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a),
      (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a),
      (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.x,
      a = e.y,
      s = e.z,
      l = e.w,
      c = l * t + a * i - s * n,
      h = l * n + s * t - r * i,
      u = l * i + r * n - a * t,
      f = -r * t - a * n - s * i;
    return (
      (this.x = c * l + f * -r + h * -s - u * -a),
      (this.y = h * l + f * -a + u * -r - c * -s),
      (this.z = u * l + f * -s + c * -a - h * -r),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i),
      (this.y = r[1] * t + r[5] * n + r[9] * i),
      (this.z = r[2] * t + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      r = e.z,
      a = t.x,
      s = t.y,
      l = t.z;
    return (
      (this.x = i * l - r * s),
      (this.y = r * a - n * l),
      (this.z = n * s - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ia.copy(this).projectOnVector(e), this.sub(Ia);
  }
  reflect(e) {
    return this.sub(Ia.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(vt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ia = new R(),
  oc = new Nt();
function dr(o) {
  return o < 0.04045
    ? o * 0.0773993808
    : Math.pow(o * 0.9478672986 + 0.0521327014, 2.4);
}
function Fa(o) {
  return o < 0.0031308 ? o * 12.92 : 1.055 * Math.pow(o, 0.41666) - 0.055;
}
const Rd = new Tt().fromArray([
    0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7,
    1e-7, 0.9105199,
  ]),
  Dd = new Tt().fromArray([
    1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361, 1e-7,
    0, 1.0982735,
  ]),
  ti = new R();
function Id(o) {
  return (
    o.convertSRGBToLinear(),
    ti.set(o.r, o.g, o.b).applyMatrix3(Dd),
    o.setRGB(ti.x, ti.y, ti.z)
  );
}
function Fd(o) {
  return (
    ti.set(o.r, o.g, o.b).applyMatrix3(Rd),
    o.setRGB(ti.x, ti.y, ti.z).convertLinearToSRGB()
  );
}
const Od = { [ss]: (o) => o, [Sn]: (o) => o.convertSRGBToLinear(), [Dh]: Id },
  Nd = { [ss]: (o) => o, [Sn]: (o) => o.convertLinearToSRGB(), [Dh]: Fd },
  Dt = {
    enabled: !1,
    get legacyMode() {
      return (
        console.warn(
          "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
        ),
        !this.enabled
      );
    },
    set legacyMode(o) {
      console.warn(
        "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
      ),
        (this.enabled = !o);
    },
    get workingColorSpace() {
      return ss;
    },
    set workingColorSpace(o) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (o, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return o;
      const n = Od[e],
        i = Nd[t];
      if (n === void 0 || i === void 0)
        throw new Error(
          `Unsupported color space conversion, "${e}" to "${t}".`
        );
      return i(n(o));
    },
    fromWorkingColorSpace: function (o, e) {
      return this.convert(o, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (o, e) {
      return this.convert(o, e, this.workingColorSpace);
    },
  };
let Vi;
class Nh {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Vi === void 0 && (Vi = os("canvas")),
        (Vi.width = e.width),
        (Vi.height = e.height);
      const n = Vi.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = Vi);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = os("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        r = i.data;
      for (let a = 0; a < r.length; a++) r[a] = dr(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(dr(t[n] / 255) * 255))
          : (t[n] = dr(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
class kh {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = di()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, s = i.length; a < s; a++)
          i[a].isDataTexture ? r.push(Oa(i[a].image)) : r.push(Oa(i[a]));
      } else r = Oa(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Oa(o) {
  return (typeof HTMLImageElement < "u" && o instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && o instanceof ImageBitmap)
    ? Nh.getDataURL(o)
    : o.data
    ? {
        data: Array.from(o.data),
        width: o.width,
        height: o.height,
        type: o.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let kd = 0;
class Mt extends fi {
  constructor(
    e = Mt.DEFAULT_IMAGE,
    t = Mt.DEFAULT_MAPPING,
    n = Ot,
    i = Ot,
    r = Kt,
    a = is,
    s = on,
    l = Ii,
    c = Mt.DEFAULT_ANISOTROPY,
    h = Fi
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: kd++ }),
      (this.uuid = di()),
      (this.name = ""),
      (this.source = new kh(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = s),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Se(0, 0)),
      (this.repeat = new Se(1, 1)),
      (this.center = new Se(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Tt()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = h),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Lh) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case ns:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ot:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Mo:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case ns:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ot:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Mo:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
Mt.DEFAULT_IMAGE = null;
Mt.DEFAULT_MAPPING = Lh;
Mt.DEFAULT_ANISOTROPY = 1;
class ze {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (ze.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const l = e.elements,
      c = l[0],
      h = l[4],
      u = l[8],
      f = l[1],
      p = l[5],
      g = l[9],
      d = l[2],
      m = l[6],
      _ = l[10];
    if (
      Math.abs(h - f) < 0.01 &&
      Math.abs(u - d) < 0.01 &&
      Math.abs(g - m) < 0.01
    ) {
      if (
        Math.abs(h + f) < 0.1 &&
        Math.abs(u + d) < 0.1 &&
        Math.abs(g + m) < 0.1 &&
        Math.abs(c + p + _ - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const x = (c + 1) / 2,
        y = (p + 1) / 2,
        M = (_ + 1) / 2,
        E = (h + f) / 4,
        C = (u + d) / 4,
        v = (g + m) / 4;
      return (
        x > y && x > M
          ? x < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(x)), (i = E / n), (r = C / n))
          : y > M
          ? y < 0.01
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(y)), (n = E / i), (r = v / i))
          : M < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(M)), (n = C / r), (i = v / r)),
        this.set(n, i, r, t),
        this
      );
    }
    let b = Math.sqrt(
      (m - g) * (m - g) + (u - d) * (u - d) + (f - h) * (f - h)
    );
    return (
      Math.abs(b) < 0.001 && (b = 1),
      (this.x = (m - g) / b),
      (this.y = (u - d) / b),
      (this.z = (f - h) / b),
      (this.w = Math.acos((c + p + _ - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Oi extends fi {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new ze(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new ze(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    (this.texture = new Mt(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Kt),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new kh(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Uh extends Mt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = xt),
      (this.minFilter = xt),
      (this.wrapR = Ot),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Ud extends Mt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = xt),
      (this.minFilter = xt),
      (this.wrapR = Ot),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Ln {
  constructor(
    e = new R(1 / 0, 1 / 0, 1 / 0),
    t = new R(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      r = -1 / 0,
      a = -1 / 0,
      s = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const h = e[l],
        u = e[l + 1],
        f = e[l + 2];
      h < t && (t = h),
        u < n && (n = u),
        f < i && (i = f),
        h > r && (r = h),
        u > a && (a = u),
        f > s && (s = f);
    }
    return this.min.set(t, n, i), this.max.set(r, a, s), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      r = -1 / 0,
      a = -1 / 0,
      s = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const h = e.getX(l),
        u = e.getY(l),
        f = e.getZ(l);
      h < t && (t = h),
        u < n && (n = u),
        f < i && (i = f),
        h > r && (r = h),
        u > a && (a = u),
        f > s && (s = f);
    }
    return this.min.set(t, n, i), this.max.set(r, a, s), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = xi.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const r = n.attributes.position;
        for (let a = 0, s = r.count; a < s; a++)
          xi.fromBufferAttribute(r, a).applyMatrix4(e.matrixWorld),
            this.expandByPoint(xi);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          Na.copy(n.boundingBox),
          Na.applyMatrix4(e.matrixWorld),
          this.union(Na);
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, xi),
      xi.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Ir),
      Ms.subVectors(this.max, Ir),
      Wi.subVectors(e.a, Ir),
      Hi.subVectors(e.b, Ir),
      Xi.subVectors(e.c, Ir),
      Yn.subVectors(Hi, Wi),
      jn.subVectors(Xi, Hi),
      vi.subVectors(Wi, Xi);
    let t = [
      0,
      -Yn.z,
      Yn.y,
      0,
      -jn.z,
      jn.y,
      0,
      -vi.z,
      vi.y,
      Yn.z,
      0,
      -Yn.x,
      jn.z,
      0,
      -jn.x,
      vi.z,
      0,
      -vi.x,
      -Yn.y,
      Yn.x,
      0,
      -jn.y,
      jn.x,
      0,
      -vi.y,
      vi.x,
      0,
    ];
    return !ka(t, Wi, Hi, Xi, Ms) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !ka(t, Wi, Hi, Xi, Ms))
      ? !1
      : (bs.crossVectors(Yn, jn),
        (t = [bs.x, bs.y, bs.z]),
        ka(t, Wi, Hi, Xi, Ms));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, xi).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(xi).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Fn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Fn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Fn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Fn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Fn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Fn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Fn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Fn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Fn),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Fn = [
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
  ],
  xi = new R(),
  Na = new Ln(),
  Wi = new R(),
  Hi = new R(),
  Xi = new R(),
  Yn = new R(),
  jn = new R(),
  vi = new R(),
  Ir = new R(),
  Ms = new R(),
  bs = new R(),
  yi = new R();
function ka(o, e, t, n, i) {
  for (let r = 0, a = o.length - 3; r <= a; r += 3) {
    yi.fromArray(o, r);
    const s =
        i.x * Math.abs(yi.x) + i.y * Math.abs(yi.y) + i.z * Math.abs(yi.z),
      l = e.dot(yi),
      c = t.dot(yi),
      h = n.dot(yi);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > s) return !1;
  }
  return !0;
}
const zd = new Ln(),
  Fr = new R(),
  Ua = new R();
class fa {
  constructor(e = new R(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : zd.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    Fr.subVectors(e, this.center);
    const t = Fr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Fr, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Ua.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(Fr.copy(e.center).add(Ua)),
            this.expandByPoint(Fr.copy(e.center).sub(Ua))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const On = new R(),
  za = new R(),
  Ss = new R(),
  Zn = new R(),
  Ba = new R(),
  ws = new R(),
  Ga = new R();
class zh {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, On)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = On.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (On.copy(this.origin).addScaledVector(this.direction, t),
        On.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    za.copy(e).add(t).multiplyScalar(0.5),
      Ss.copy(t).sub(e).normalize(),
      Zn.copy(this.origin).sub(za);
    const r = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Ss),
      s = Zn.dot(this.direction),
      l = -Zn.dot(Ss),
      c = Zn.lengthSq(),
      h = Math.abs(1 - a * a);
    let u, f, p, g;
    if (h > 0)
      if (((u = a * l - s), (f = a * s - l), (g = r * h), u >= 0))
        if (f >= -g)
          if (f <= g) {
            const d = 1 / h;
            (u *= d),
              (f *= d),
              (p = u * (u + a * f + 2 * s) + f * (a * u + f + 2 * l) + c);
          } else
            (f = r),
              (u = Math.max(0, -(a * f + s))),
              (p = -u * u + f * (f + 2 * l) + c);
        else
          (f = -r),
            (u = Math.max(0, -(a * f + s))),
            (p = -u * u + f * (f + 2 * l) + c);
      else
        f <= -g
          ? ((u = Math.max(0, -(-a * r + s))),
            (f = u > 0 ? -r : Math.min(Math.max(-r, -l), r)),
            (p = -u * u + f * (f + 2 * l) + c))
          : f <= g
          ? ((u = 0),
            (f = Math.min(Math.max(-r, -l), r)),
            (p = f * (f + 2 * l) + c))
          : ((u = Math.max(0, -(a * r + s))),
            (f = u > 0 ? r : Math.min(Math.max(-r, -l), r)),
            (p = -u * u + f * (f + 2 * l) + c));
    else
      (f = a > 0 ? -r : r),
        (u = Math.max(0, -(a * f + s))),
        (p = -u * u + f * (f + 2 * l) + c);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, u),
      i && i.copy(za).addScaledVector(Ss, f),
      p
    );
  }
  intersectSphere(e, t) {
    On.subVectors(e.center, this.origin);
    const n = On.dot(this.direction),
      i = On.dot(On) - n * n,
      r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i),
      s = n - a,
      l = n + a;
    return l < 0 ? null : s < 0 ? this.at(l, t) : this.at(s, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, s, l;
    const c = 1 / this.direction.x,
      h = 1 / this.direction.y,
      u = 1 / this.direction.z,
      f = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - f.x) * c), (i = (e.max.x - f.x) * c))
        : ((n = (e.max.x - f.x) * c), (i = (e.min.x - f.x) * c)),
      h >= 0
        ? ((r = (e.min.y - f.y) * h), (a = (e.max.y - f.y) * h))
        : ((r = (e.max.y - f.y) * h), (a = (e.min.y - f.y) * h)),
      n > a ||
      r > i ||
      ((r > n || isNaN(n)) && (n = r),
      (a < i || isNaN(i)) && (i = a),
      u >= 0
        ? ((s = (e.min.z - f.z) * u), (l = (e.max.z - f.z) * u))
        : ((s = (e.max.z - f.z) * u), (l = (e.min.z - f.z) * u)),
      n > l || s > i) ||
      ((s > n || n !== n) && (n = s), (l < i || i !== i) && (i = l), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, On) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Ba.subVectors(t, e), ws.subVectors(n, e), Ga.crossVectors(Ba, ws);
    let a = this.direction.dot(Ga),
      s;
    if (a > 0) {
      if (i) return null;
      s = 1;
    } else if (a < 0) (s = -1), (a = -a);
    else return null;
    Zn.subVectors(this.origin, e);
    const l = s * this.direction.dot(ws.crossVectors(Zn, ws));
    if (l < 0) return null;
    const c = s * this.direction.dot(Ba.cross(Zn));
    if (c < 0 || l + c > a) return null;
    const h = -s * Zn.dot(Ga);
    return h < 0 ? null : this.at(h / a, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ve {
  constructor() {
    (ve.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, n, i, r, a, s, l, c, h, u, f, p, g, d, m) {
    const _ = this.elements;
    return (
      (_[0] = e),
      (_[4] = t),
      (_[8] = n),
      (_[12] = i),
      (_[1] = r),
      (_[5] = a),
      (_[9] = s),
      (_[13] = l),
      (_[2] = c),
      (_[6] = h),
      (_[10] = u),
      (_[14] = f),
      (_[3] = p),
      (_[7] = g),
      (_[11] = d),
      (_[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ve().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / qi.setFromMatrixColumn(e, 0).length(),
      r = 1 / qi.setFromMatrixColumn(e, 1).length(),
      a = 1 / qi.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z,
      a = Math.cos(n),
      s = Math.sin(n),
      l = Math.cos(i),
      c = Math.sin(i),
      h = Math.cos(r),
      u = Math.sin(r);
    if (e.order === "XYZ") {
      const f = a * h,
        p = a * u,
        g = s * h,
        d = s * u;
      (t[0] = l * h),
        (t[4] = -l * u),
        (t[8] = c),
        (t[1] = p + g * c),
        (t[5] = f - d * c),
        (t[9] = -s * l),
        (t[2] = d - f * c),
        (t[6] = g + p * c),
        (t[10] = a * l);
    } else if (e.order === "YXZ") {
      const f = l * h,
        p = l * u,
        g = c * h,
        d = c * u;
      (t[0] = f + d * s),
        (t[4] = g * s - p),
        (t[8] = a * c),
        (t[1] = a * u),
        (t[5] = a * h),
        (t[9] = -s),
        (t[2] = p * s - g),
        (t[6] = d + f * s),
        (t[10] = a * l);
    } else if (e.order === "ZXY") {
      const f = l * h,
        p = l * u,
        g = c * h,
        d = c * u;
      (t[0] = f - d * s),
        (t[4] = -a * u),
        (t[8] = g + p * s),
        (t[1] = p + g * s),
        (t[5] = a * h),
        (t[9] = d - f * s),
        (t[2] = -a * c),
        (t[6] = s),
        (t[10] = a * l);
    } else if (e.order === "ZYX") {
      const f = a * h,
        p = a * u,
        g = s * h,
        d = s * u;
      (t[0] = l * h),
        (t[4] = g * c - p),
        (t[8] = f * c + d),
        (t[1] = l * u),
        (t[5] = d * c + f),
        (t[9] = p * c - g),
        (t[2] = -c),
        (t[6] = s * l),
        (t[10] = a * l);
    } else if (e.order === "YZX") {
      const f = a * l,
        p = a * c,
        g = s * l,
        d = s * c;
      (t[0] = l * h),
        (t[4] = d - f * u),
        (t[8] = g * u + p),
        (t[1] = u),
        (t[5] = a * h),
        (t[9] = -s * h),
        (t[2] = -c * h),
        (t[6] = p * u + g),
        (t[10] = f - d * u);
    } else if (e.order === "XZY") {
      const f = a * l,
        p = a * c,
        g = s * l,
        d = s * c;
      (t[0] = l * h),
        (t[4] = -u),
        (t[8] = c * h),
        (t[1] = f * u + d),
        (t[5] = a * h),
        (t[9] = p * u - g),
        (t[2] = g * u - p),
        (t[6] = s * h),
        (t[10] = d * u + f);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Bd, e, Gd);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      Yt.subVectors(e, t),
      Yt.lengthSq() === 0 && (Yt.z = 1),
      Yt.normalize(),
      Kn.crossVectors(n, Yt),
      Kn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Yt.x += 1e-4) : (Yt.z += 1e-4),
        Yt.normalize(),
        Kn.crossVectors(n, Yt)),
      Kn.normalize(),
      Ts.crossVectors(Yt, Kn),
      (i[0] = Kn.x),
      (i[4] = Ts.x),
      (i[8] = Yt.x),
      (i[1] = Kn.y),
      (i[5] = Ts.y),
      (i[9] = Yt.y),
      (i[2] = Kn.z),
      (i[6] = Ts.z),
      (i[10] = Yt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      s = n[4],
      l = n[8],
      c = n[12],
      h = n[1],
      u = n[5],
      f = n[9],
      p = n[13],
      g = n[2],
      d = n[6],
      m = n[10],
      _ = n[14],
      b = n[3],
      x = n[7],
      y = n[11],
      M = n[15],
      E = i[0],
      C = i[4],
      v = i[8],
      S = i[12],
      L = i[1],
      V = i[5],
      G = i[9],
      F = i[13],
      D = i[2],
      B = i[6],
      H = i[10],
      Z = i[14],
      W = i[3],
      J = i[7],
      K = i[11],
      ue = i[15];
    return (
      (r[0] = a * E + s * L + l * D + c * W),
      (r[4] = a * C + s * V + l * B + c * J),
      (r[8] = a * v + s * G + l * H + c * K),
      (r[12] = a * S + s * F + l * Z + c * ue),
      (r[1] = h * E + u * L + f * D + p * W),
      (r[5] = h * C + u * V + f * B + p * J),
      (r[9] = h * v + u * G + f * H + p * K),
      (r[13] = h * S + u * F + f * Z + p * ue),
      (r[2] = g * E + d * L + m * D + _ * W),
      (r[6] = g * C + d * V + m * B + _ * J),
      (r[10] = g * v + d * G + m * H + _ * K),
      (r[14] = g * S + d * F + m * Z + _ * ue),
      (r[3] = b * E + x * L + y * D + M * W),
      (r[7] = b * C + x * V + y * B + M * J),
      (r[11] = b * v + x * G + y * H + M * K),
      (r[15] = b * S + x * F + y * Z + M * ue),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      r = e[12],
      a = e[1],
      s = e[5],
      l = e[9],
      c = e[13],
      h = e[2],
      u = e[6],
      f = e[10],
      p = e[14],
      g = e[3],
      d = e[7],
      m = e[11],
      _ = e[15];
    return (
      g *
        (+r * l * u -
          i * c * u -
          r * s * f +
          n * c * f +
          i * s * p -
          n * l * p) +
      d *
        (+t * l * p -
          t * c * f +
          r * a * f -
          i * a * p +
          i * c * h -
          r * l * h) +
      m *
        (+t * c * u -
          t * s * p -
          r * a * u +
          n * a * p +
          r * s * h -
          n * c * h) +
      _ *
        (-i * s * h - t * l * u + t * s * f + i * a * u - n * a * f + n * l * h)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      l = e[6],
      c = e[7],
      h = e[8],
      u = e[9],
      f = e[10],
      p = e[11],
      g = e[12],
      d = e[13],
      m = e[14],
      _ = e[15],
      b = u * m * c - d * f * c + d * l * p - s * m * p - u * l * _ + s * f * _,
      x = g * f * c - h * m * c - g * l * p + a * m * p + h * l * _ - a * f * _,
      y = h * d * c - g * u * c + g * s * p - a * d * p - h * s * _ + a * u * _,
      M = g * u * l - h * d * l - g * s * f + a * d * f + h * s * m - a * u * m,
      E = t * b + n * x + i * y + r * M;
    if (E === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / E;
    return (
      (e[0] = b * C),
      (e[1] =
        (d * f * r -
          u * m * r -
          d * i * p +
          n * m * p +
          u * i * _ -
          n * f * _) *
        C),
      (e[2] =
        (s * m * r -
          d * l * r +
          d * i * c -
          n * m * c -
          s * i * _ +
          n * l * _) *
        C),
      (e[3] =
        (u * l * r -
          s * f * r -
          u * i * c +
          n * f * c +
          s * i * p -
          n * l * p) *
        C),
      (e[4] = x * C),
      (e[5] =
        (h * m * r -
          g * f * r +
          g * i * p -
          t * m * p -
          h * i * _ +
          t * f * _) *
        C),
      (e[6] =
        (g * l * r -
          a * m * r -
          g * i * c +
          t * m * c +
          a * i * _ -
          t * l * _) *
        C),
      (e[7] =
        (a * f * r -
          h * l * r +
          h * i * c -
          t * f * c -
          a * i * p +
          t * l * p) *
        C),
      (e[8] = y * C),
      (e[9] =
        (g * u * r -
          h * d * r -
          g * n * p +
          t * d * p +
          h * n * _ -
          t * u * _) *
        C),
      (e[10] =
        (a * d * r -
          g * s * r +
          g * n * c -
          t * d * c -
          a * n * _ +
          t * s * _) *
        C),
      (e[11] =
        (h * s * r -
          a * u * r -
          h * n * c +
          t * u * c +
          a * n * p -
          t * s * p) *
        C),
      (e[12] = M * C),
      (e[13] =
        (h * d * i -
          g * u * i +
          g * n * f -
          t * d * f -
          h * n * m +
          t * u * m) *
        C),
      (e[14] =
        (g * s * i -
          a * d * i -
          g * n * l +
          t * d * l +
          a * n * m -
          t * s * m) *
        C),
      (e[15] =
        (a * u * i -
          h * s * i +
          h * n * l -
          t * u * l -
          a * n * f +
          t * s * f) *
        C),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = 1 - n,
      a = e.x,
      s = e.y,
      l = e.z,
      c = r * a,
      h = r * s;
    return (
      this.set(
        c * a + n,
        c * s - i * l,
        c * l + i * s,
        0,
        c * s + i * l,
        h * s + n,
        h * l - i * a,
        0,
        c * l - i * s,
        h * l + i * a,
        r * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      r = t._x,
      a = t._y,
      s = t._z,
      l = t._w,
      c = r + r,
      h = a + a,
      u = s + s,
      f = r * c,
      p = r * h,
      g = r * u,
      d = a * h,
      m = a * u,
      _ = s * u,
      b = l * c,
      x = l * h,
      y = l * u,
      M = n.x,
      E = n.y,
      C = n.z;
    return (
      (i[0] = (1 - (d + _)) * M),
      (i[1] = (p + y) * M),
      (i[2] = (g - x) * M),
      (i[3] = 0),
      (i[4] = (p - y) * E),
      (i[5] = (1 - (f + _)) * E),
      (i[6] = (m + b) * E),
      (i[7] = 0),
      (i[8] = (g + x) * C),
      (i[9] = (m - b) * C),
      (i[10] = (1 - (f + d)) * C),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = qi.set(i[0], i[1], i[2]).length();
    const a = qi.set(i[4], i[5], i[6]).length(),
      s = qi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      mn.copy(this);
    const c = 1 / r,
      h = 1 / a,
      u = 1 / s;
    return (
      (mn.elements[0] *= c),
      (mn.elements[1] *= c),
      (mn.elements[2] *= c),
      (mn.elements[4] *= h),
      (mn.elements[5] *= h),
      (mn.elements[6] *= h),
      (mn.elements[8] *= u),
      (mn.elements[9] *= u),
      (mn.elements[10] *= u),
      t.setFromRotationMatrix(mn),
      (n.x = r),
      (n.y = a),
      (n.z = s),
      this
    );
  }
  makePerspective(e, t, n, i, r, a) {
    const s = this.elements,
      l = (2 * r) / (t - e),
      c = (2 * r) / (n - i),
      h = (t + e) / (t - e),
      u = (n + i) / (n - i),
      f = -(a + r) / (a - r),
      p = (-2 * a * r) / (a - r);
    return (
      (s[0] = l),
      (s[4] = 0),
      (s[8] = h),
      (s[12] = 0),
      (s[1] = 0),
      (s[5] = c),
      (s[9] = u),
      (s[13] = 0),
      (s[2] = 0),
      (s[6] = 0),
      (s[10] = f),
      (s[14] = p),
      (s[3] = 0),
      (s[7] = 0),
      (s[11] = -1),
      (s[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, r, a) {
    const s = this.elements,
      l = 1 / (t - e),
      c = 1 / (n - i),
      h = 1 / (a - r),
      u = (t + e) * l,
      f = (n + i) * c,
      p = (a + r) * h;
    return (
      (s[0] = 2 * l),
      (s[4] = 0),
      (s[8] = 0),
      (s[12] = -u),
      (s[1] = 0),
      (s[5] = 2 * c),
      (s[9] = 0),
      (s[13] = -f),
      (s[2] = 0),
      (s[6] = 0),
      (s[10] = -2 * h),
      (s[14] = -p),
      (s[3] = 0),
      (s[7] = 0),
      (s[11] = 0),
      (s[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const qi = new R(),
  mn = new ve(),
  Bd = new R(0, 0, 0),
  Gd = new R(1, 1, 1),
  Kn = new R(),
  Ts = new R(),
  Yt = new R(),
  lc = new ve(),
  cc = new Nt();
class cn {
  constructor(e = 0, t = 0, n = 0, i = cn.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      r = i[0],
      a = i[4],
      s = i[8],
      l = i[1],
      c = i[5],
      h = i[9],
      u = i[2],
      f = i[6],
      p = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(vt(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(-h, p)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(f, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-vt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(s, p)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-u, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(vt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-u, p)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-vt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(f, p)), (this._z = Math.atan2(l, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c)));
        break;
      case "YZX":
        (this._z = Math.asin(vt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-h, c)), (this._y = Math.atan2(-u, r)))
            : ((this._x = 0), (this._y = Math.atan2(s, p)));
        break;
      case "XZY":
        (this._z = Math.asin(-vt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(f, c)), (this._y = Math.atan2(s, r)))
            : ((this._x = Math.atan2(-h, p)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      lc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(lc, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return cc.setFromEuler(this), this.setFromQuaternion(cc, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
cn.DEFAULT_ORDER = "XYZ";
class Bh {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Vd = 0;
const hc = new R(),
  Yi = new Nt(),
  Nn = new ve(),
  Es = new R(),
  Or = new R(),
  Wd = new R(),
  Hd = new Nt(),
  uc = new R(1, 0, 0),
  fc = new R(0, 1, 0),
  dc = new R(0, 0, 1),
  Xd = { type: "added" },
  pc = { type: "removed" };
class je extends fi {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Vd++ }),
      (this.uuid = di()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = je.DEFAULT_UP.clone());
    const e = new R(),
      t = new cn(),
      n = new Nt(),
      i = new R(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new ve() },
        normalMatrix: { value: new Tt() },
      }),
      (this.matrix = new ve()),
      (this.matrixWorld = new ve()),
      (this.matrixAutoUpdate = je.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.layers = new Bh()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Yi.setFromAxisAngle(e, t), this.quaternion.multiply(Yi), this;
  }
  rotateOnWorldAxis(e, t) {
    return Yi.setFromAxisAngle(e, t), this.quaternion.premultiply(Yi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(uc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(fc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(dc, e);
  }
  translateOnAxis(e, t) {
    return (
      hc.copy(e).applyQuaternion(this.quaternion),
      this.position.add(hc.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(uc, e);
  }
  translateY(e) {
    return this.translateOnAxis(fc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(dc, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(Nn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Es.copy(e) : Es.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      Or.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Nn.lookAt(Or, Es, this.up)
        : Nn.lookAt(Es, Or, this.up),
      this.quaternion.setFromRotationMatrix(Nn),
      i &&
        (Nn.extractRotation(i.matrixWorld),
        Yi.setFromRotationMatrix(Nn),
        this.quaternion.premultiply(Yi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Xd))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(pc)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(pc);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Nn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), Nn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Nn),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, r = this.children.length; i < r; i++) {
      const a = this.children[i].getObjectsByProperty(e, t);
      a.length > 0 && (n = n.concat(a));
    }
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Or, e, Wd), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Or, Hd, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++) {
        const s = i[r];
        s.matrixWorldAutoUpdate === !0 && s.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function r(s, l) {
      return s[l.uuid] === void 0 && (s[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const s = this.geometry.parameters;
      if (s !== void 0 && s.shapes !== void 0) {
        const l = s.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            r(e.shapes, u);
          }
        else r(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const s = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          s.push(r(e.materials, this.material[l]));
        i.material = s;
      } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let s = 0; s < this.children.length; s++)
        i.children.push(this.children[s].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let s = 0; s < this.animations.length; s++) {
        const l = this.animations[s];
        i.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const s = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        h = a(e.images),
        u = a(e.shapes),
        f = a(e.skeletons),
        p = a(e.animations),
        g = a(e.nodes);
      s.length > 0 && (n.geometries = s),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        h.length > 0 && (n.images = h),
        u.length > 0 && (n.shapes = u),
        f.length > 0 && (n.skeletons = f),
        p.length > 0 && (n.animations = p),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function a(s) {
      const l = [];
      for (const c in s) {
        const h = s[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
je.DEFAULT_UP = new R(0, 1, 0);
je.DEFAULT_MATRIX_AUTO_UPDATE = !0;
je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const gn = new R(),
  kn = new R(),
  Va = new R(),
  Un = new R(),
  ji = new R(),
  Zi = new R(),
  mc = new R(),
  Wa = new R(),
  Ha = new R(),
  Xa = new R();
class Vn {
  constructor(e = new R(), t = new R(), n = new R()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), gn.subVectors(e, t), i.cross(gn);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    gn.subVectors(i, t), kn.subVectors(n, t), Va.subVectors(e, t);
    const a = gn.dot(gn),
      s = gn.dot(kn),
      l = gn.dot(Va),
      c = kn.dot(kn),
      h = kn.dot(Va),
      u = a * c - s * s;
    if (u === 0) return r.set(-2, -1, -1);
    const f = 1 / u,
      p = (c * l - s * h) * f,
      g = (a * h - s * l) * f;
    return r.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, Un),
      Un.x >= 0 && Un.y >= 0 && Un.x + Un.y <= 1
    );
  }
  static getUV(e, t, n, i, r, a, s, l) {
    return (
      this.getBarycoord(e, t, n, i, Un),
      l.set(0, 0),
      l.addScaledVector(r, Un.x),
      l.addScaledVector(a, Un.y),
      l.addScaledVector(s, Un.z),
      l
    );
  }
  static isFrontFacing(e, t, n, i) {
    return gn.subVectors(n, t), kn.subVectors(e, t), gn.cross(kn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      gn.subVectors(this.c, this.b),
      kn.subVectors(this.a, this.b),
      gn.cross(kn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Vn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Vn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return Vn.getUV(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Vn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Vn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let a, s;
    ji.subVectors(i, n), Zi.subVectors(r, n), Wa.subVectors(e, n);
    const l = ji.dot(Wa),
      c = Zi.dot(Wa);
    if (l <= 0 && c <= 0) return t.copy(n);
    Ha.subVectors(e, i);
    const h = ji.dot(Ha),
      u = Zi.dot(Ha);
    if (h >= 0 && u <= h) return t.copy(i);
    const f = l * u - h * c;
    if (f <= 0 && l >= 0 && h <= 0)
      return (a = l / (l - h)), t.copy(n).addScaledVector(ji, a);
    Xa.subVectors(e, r);
    const p = ji.dot(Xa),
      g = Zi.dot(Xa);
    if (g >= 0 && p <= g) return t.copy(r);
    const d = p * c - l * g;
    if (d <= 0 && c >= 0 && g <= 0)
      return (s = c / (c - g)), t.copy(n).addScaledVector(Zi, s);
    const m = h * g - p * u;
    if (m <= 0 && u - h >= 0 && p - g >= 0)
      return (
        mc.subVectors(r, i),
        (s = (u - h) / (u - h + (p - g))),
        t.copy(i).addScaledVector(mc, s)
      );
    const _ = 1 / (m + d + f);
    return (
      (a = d * _),
      (s = f * _),
      t.copy(n).addScaledVector(ji, a).addScaledVector(Zi, s)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let qd = 0;
class Ui extends fi {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: qd++ }),
      (this.uuid = di()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = ur),
      (this.side = ci),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = Ch),
      (this.blendDst = Ph),
      (this.blendEquation = ir),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = vo),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = _d),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Ra),
      (this.stencilZFail = Ra),
      (this.stencilZPass = Ra),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              t +
              "' is not a property of this material."
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== ur && (n.blending = this.blending),
      this.side !== ci && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const s in r) {
        const l = r[s];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures),
        a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const Gh = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  _n = { h: 0, s: 0, l: 0 },
  As = { h: 0, s: 0, l: 0 };
function qa(o, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? o + (e - o) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? o + (e - o) * 6 * (2 / 3 - t)
      : o
  );
}
class Me {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Sn) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Dt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = Dt.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      Dt.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = Dt.workingColorSpace) {
    if (((e = Yo(e, 1)), (t = vt(t, 0, 1)), (n = vt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r;
      (this.r = qa(a, r, e + 1 / 3)),
        (this.g = qa(a, r, e)),
        (this.b = qa(a, r, e - 1 / 3));
    }
    return Dt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Sn) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let r;
      const a = i[1],
        s = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(r[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(r[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(r[3], 10)) / 255),
              Dt.toWorkingColorSpace(this, t),
              n(r[4]),
              this
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(r[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(r[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(r[3], 10)) / 100),
              Dt.toWorkingColorSpace(this, t),
              n(r[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          ) {
            const l = parseFloat(r[1]) / 360,
              c = parseFloat(r[2]) / 100,
              h = parseFloat(r[3]) / 100;
            return n(r[4]), this.setHSL(l, c, h, t);
          }
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = i[1],
        a = r.length;
      if (a === 3)
        return (
          (this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255),
          (this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255),
          (this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255),
          Dt.toWorkingColorSpace(this, t),
          this
        );
      if (a === 6)
        return (
          (this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255),
          (this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255),
          (this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255),
          Dt.toWorkingColorSpace(this, t),
          this
        );
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Sn) {
    const n = Gh[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = dr(e.r)), (this.g = dr(e.g)), (this.b = dr(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Fa(e.r)), (this.g = Fa(e.g)), (this.b = Fa(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Sn) {
    return (
      Dt.fromWorkingColorSpace(St.copy(this), e),
      (vt(St.r * 255, 0, 255) << 16) ^
        (vt(St.g * 255, 0, 255) << 8) ^
        (vt(St.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = Sn) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Dt.workingColorSpace) {
    Dt.fromWorkingColorSpace(St.copy(this), t);
    const n = St.r,
      i = St.g,
      r = St.b,
      a = Math.max(n, i, r),
      s = Math.min(n, i, r);
    let l, c;
    const h = (s + a) / 2;
    if (s === a) (l = 0), (c = 0);
    else {
      const u = a - s;
      switch (((c = h <= 0.5 ? u / (a + s) : u / (2 - a - s)), a)) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = h), e;
  }
  getRGB(e, t = Dt.workingColorSpace) {
    return (
      Dt.fromWorkingColorSpace(St.copy(this), t),
      (e.r = St.r),
      (e.g = St.g),
      (e.b = St.b),
      e
    );
  }
  getStyle(e = Sn) {
    Dt.fromWorkingColorSpace(St.copy(this), e);
    const t = St.r,
      n = St.g,
      i = St.b;
    return e !== Sn
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${(t * 255) | 0},${(n * 255) | 0},${(i * 255) | 0})`;
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(_n),
      (_n.h += e),
      (_n.s += t),
      (_n.l += n),
      this.setHSL(_n.h, _n.s, _n.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(_n), e.getHSL(As);
    const n = Kr(_n.h, As.h, t),
      i = Kr(_n.s, As.s, t),
      r = Kr(_n.l, As.l, t);
    return this.setHSL(n, i, r), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const St = new Me();
Me.NAMES = Gh;
class Vh extends Ui {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Me(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = ha),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const at = new R(),
  Cs = new Se();
class Cn {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = rc),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Cs.fromBufferAttribute(this, t),
          Cs.applyMatrix3(e),
          this.setXY(t, Cs.x, Cs.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        at.fromBufferAttribute(this, t),
          at.applyMatrix3(e),
          this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      at.fromBufferAttribute(this, t),
        at.applyMatrix4(e),
        this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      at.fromBufferAttribute(this, t),
        at.applyNormalMatrix(e),
        this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      at.fromBufferAttribute(this, t),
        at.transformDirection(e),
        this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Wr(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Ut(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Wr(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = Ut(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Wr(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Ut(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Wr(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = Ut(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Ut(t, this.array)), (n = Ut(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Ut(t, this.array)),
        (n = Ut(n, this.array)),
        (i = Ut(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Ut(t, this.array)),
        (n = Ut(n, this.array)),
        (i = Ut(i, this.array)),
        (r = Ut(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== rc && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
  copyColorsArray() {
    console.error(
      "THREE.BufferAttribute: copyColorsArray() was removed in r144."
    );
  }
  copyVector2sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
    );
  }
  copyVector3sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
    );
  }
  copyVector4sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
    );
  }
}
class jo extends Cn {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Wh extends Cn {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Je extends Cn {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Yd = 0;
const rn = new ve(),
  Ya = new je(),
  Ki = new R(),
  jt = new Ln(),
  Nr = new Ln(),
  gt = new R();
class kt extends fi {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Yd++ }),
      (this.uuid = di()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Oh(e) ? Wh : jo)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Tt().getNormalMatrix(e);
      n.applyNormalMatrix(r), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return rn.makeRotationFromQuaternion(e), this.applyMatrix4(rn), this;
  }
  rotateX(e) {
    return rn.makeRotationX(e), this.applyMatrix4(rn), this;
  }
  rotateY(e) {
    return rn.makeRotationY(e), this.applyMatrix4(rn), this;
  }
  rotateZ(e) {
    return rn.makeRotationZ(e), this.applyMatrix4(rn), this;
  }
  translate(e, t, n) {
    return rn.makeTranslation(e, t, n), this.applyMatrix4(rn), this;
  }
  scale(e, t, n) {
    return rn.makeScale(e, t, n), this.applyMatrix4(rn), this;
  }
  lookAt(e) {
    return Ya.lookAt(e), Ya.updateMatrix(), this.applyMatrix4(Ya.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Ki).negate(),
      this.translate(Ki.x, Ki.y, Ki.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Je(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ln());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new R(-1 / 0, -1 / 0, -1 / 0),
          new R(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          jt.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (gt.addVectors(this.boundingBox.min, jt.min),
                this.boundingBox.expandByPoint(gt),
                gt.addVectors(this.boundingBox.max, jt.max),
                this.boundingBox.expandByPoint(gt))
              : (this.boundingBox.expandByPoint(jt.min),
                this.boundingBox.expandByPoint(jt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new fa());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((jt.setFromBufferAttribute(e), t))
        for (let r = 0, a = t.length; r < a; r++) {
          const s = t[r];
          Nr.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (gt.addVectors(jt.min, Nr.min),
                jt.expandByPoint(gt),
                gt.addVectors(jt.max, Nr.max),
                jt.expandByPoint(gt))
              : (jt.expandByPoint(Nr.min), jt.expandByPoint(Nr.max));
        }
      jt.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        gt.fromBufferAttribute(e, r),
          (i = Math.max(i, n.distanceToSquared(gt)));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const s = t[r],
            l = this.morphTargetsRelative;
          for (let c = 0, h = s.count; c < h; c++)
            gt.fromBufferAttribute(s, c),
              l && (Ki.fromBufferAttribute(e, c), gt.add(Ki)),
              (i = Math.max(i, n.distanceToSquared(gt)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      r = t.normal.array,
      a = t.uv.array,
      s = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Cn(new Float32Array(4 * s), 4));
    const l = this.getAttribute("tangent").array,
      c = [],
      h = [];
    for (let L = 0; L < s; L++) (c[L] = new R()), (h[L] = new R());
    const u = new R(),
      f = new R(),
      p = new R(),
      g = new Se(),
      d = new Se(),
      m = new Se(),
      _ = new R(),
      b = new R();
    function x(L, V, G) {
      u.fromArray(i, L * 3),
        f.fromArray(i, V * 3),
        p.fromArray(i, G * 3),
        g.fromArray(a, L * 2),
        d.fromArray(a, V * 2),
        m.fromArray(a, G * 2),
        f.sub(u),
        p.sub(u),
        d.sub(g),
        m.sub(g);
      const F = 1 / (d.x * m.y - m.x * d.y);
      isFinite(F) &&
        (_.copy(f)
          .multiplyScalar(m.y)
          .addScaledVector(p, -d.y)
          .multiplyScalar(F),
        b
          .copy(p)
          .multiplyScalar(d.x)
          .addScaledVector(f, -m.x)
          .multiplyScalar(F),
        c[L].add(_),
        c[V].add(_),
        c[G].add(_),
        h[L].add(b),
        h[V].add(b),
        h[G].add(b));
    }
    let y = this.groups;
    y.length === 0 && (y = [{ start: 0, count: n.length }]);
    for (let L = 0, V = y.length; L < V; ++L) {
      const G = y[L],
        F = G.start,
        D = G.count;
      for (let B = F, H = F + D; B < H; B += 3) x(n[B + 0], n[B + 1], n[B + 2]);
    }
    const M = new R(),
      E = new R(),
      C = new R(),
      v = new R();
    function S(L) {
      C.fromArray(r, L * 3), v.copy(C);
      const V = c[L];
      M.copy(V),
        M.sub(C.multiplyScalar(C.dot(V))).normalize(),
        E.crossVectors(v, V);
      const F = E.dot(h[L]) < 0 ? -1 : 1;
      (l[L * 4] = M.x),
        (l[L * 4 + 1] = M.y),
        (l[L * 4 + 2] = M.z),
        (l[L * 4 + 3] = F);
    }
    for (let L = 0, V = y.length; L < V; ++L) {
      const G = y[L],
        F = G.start,
        D = G.count;
      for (let B = F, H = F + D; B < H; B += 3)
        S(n[B + 0]), S(n[B + 1]), S(n[B + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new Cn(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let f = 0, p = n.count; f < p; f++) n.setXYZ(f, 0, 0, 0);
      const i = new R(),
        r = new R(),
        a = new R(),
        s = new R(),
        l = new R(),
        c = new R(),
        h = new R(),
        u = new R();
      if (e)
        for (let f = 0, p = e.count; f < p; f += 3) {
          const g = e.getX(f + 0),
            d = e.getX(f + 1),
            m = e.getX(f + 2);
          i.fromBufferAttribute(t, g),
            r.fromBufferAttribute(t, d),
            a.fromBufferAttribute(t, m),
            h.subVectors(a, r),
            u.subVectors(i, r),
            h.cross(u),
            s.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, d),
            c.fromBufferAttribute(n, m),
            s.add(h),
            l.add(h),
            c.add(h),
            n.setXYZ(g, s.x, s.y, s.z),
            n.setXYZ(d, l.x, l.y, l.z),
            n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let f = 0, p = t.count; f < p; f += 3)
          i.fromBufferAttribute(t, f + 0),
            r.fromBufferAttribute(t, f + 1),
            a.fromBufferAttribute(t, f + 2),
            h.subVectors(a, r),
            u.subVectors(i, r),
            h.cross(u),
            n.setXYZ(f + 0, h.x, h.y, h.z),
            n.setXYZ(f + 1, h.x, h.y, h.z),
            n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge() {
    return (
      console.error(
        "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."
      ),
      this
    );
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      gt.fromBufferAttribute(e, t),
        gt.normalize(),
        e.setXYZ(t, gt.x, gt.y, gt.z);
  }
  toNonIndexed() {
    function e(s, l) {
      const c = s.array,
        h = s.itemSize,
        u = s.normalized,
        f = new c.constructor(l.length * h);
      let p = 0,
        g = 0;
      for (let d = 0, m = l.length; d < m; d++) {
        s.isInterleavedBufferAttribute
          ? (p = l[d] * s.data.stride + s.offset)
          : (p = l[d] * h);
        for (let _ = 0; _ < h; _++) f[g++] = c[p++];
      }
      return new Cn(f, h, u);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new kt(),
      n = this.index.array,
      i = this.attributes;
    for (const s in i) {
      const l = i[s],
        c = e(l, n);
      t.setAttribute(s, c);
    }
    const r = this.morphAttributes;
    for (const s in r) {
      const l = [],
        c = r[s];
      for (let h = 0, u = c.length; h < u; h++) {
        const f = c[h],
          p = e(f, n);
        l.push(p);
      }
      t.morphAttributes[s] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let s = 0, l = a.length; s < l; s++) {
      const c = a[s];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        h = [];
      for (let u = 0, f = c.length; u < f; u++) {
        const p = c[u];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && ((i[l] = h), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const s = this.boundingSphere;
    return (
      s !== null &&
        (e.data.boundingSphere = {
          center: s.center.toArray(),
          radius: s.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const h = [],
        u = r[c];
      for (let f = 0, p = u.length; f < p; f++) h.push(u[f].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const s = e.boundingBox;
    s !== null && (this.boundingBox = s.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const gc = new ve(),
  bn = new zh(),
  Ps = new fa(),
  _c = new R(),
  kr = new R(),
  Ur = new R(),
  zr = new R(),
  ja = new R(),
  Ls = new R(),
  Rs = new Se(),
  Ds = new Se(),
  Is = new Se(),
  Za = new R(),
  Fs = new R();
class hn extends je {
  constructor(e = new kt(), t = new Vh()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const s = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[s] = r);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      r = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const s = this.morphTargetInfluences;
    if (r && s) {
      Ls.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = s[l],
          u = r[l];
        h !== 0 &&
          (ja.fromBufferAttribute(u, e),
          a ? Ls.addScaledVector(ja, h) : Ls.addScaledVector(ja.sub(t), h));
      }
      t.add(Ls);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ps.copy(n.boundingSphere),
      Ps.applyMatrix4(r),
      bn.copy(e.ray).recast(e.near),
      Ps.containsPoint(bn.origin) === !1 &&
        (bn.intersectSphere(Ps, _c) === null ||
          bn.origin.distanceToSquared(_c) > (e.far - e.near) ** 2)) ||
      (gc.copy(r).invert(),
      bn.copy(e.ray).applyMatrix4(gc),
      n.boundingBox !== null && bn.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let a;
    const s = n.index,
      l = n.attributes.position,
      c = n.attributes.uv,
      h = n.attributes.uv2,
      u = n.groups,
      f = n.drawRange;
    if (s !== null)
      if (Array.isArray(i))
        for (let p = 0, g = u.length; p < g; p++) {
          const d = u[p],
            m = i[d.materialIndex],
            _ = Math.max(d.start, f.start),
            b = Math.min(
              s.count,
              Math.min(d.start + d.count, f.start + f.count)
            );
          for (let x = _, y = b; x < y; x += 3) {
            const M = s.getX(x),
              E = s.getX(x + 1),
              C = s.getX(x + 2);
            (a = Os(this, m, e, bn, c, h, M, E, C)),
              a &&
                ((a.faceIndex = Math.floor(x / 3)),
                (a.face.materialIndex = d.materialIndex),
                t.push(a));
          }
        }
      else {
        const p = Math.max(0, f.start),
          g = Math.min(s.count, f.start + f.count);
        for (let d = p, m = g; d < m; d += 3) {
          const _ = s.getX(d),
            b = s.getX(d + 1),
            x = s.getX(d + 2);
          (a = Os(this, i, e, bn, c, h, _, b, x)),
            a && ((a.faceIndex = Math.floor(d / 3)), t.push(a));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(i))
        for (let p = 0, g = u.length; p < g; p++) {
          const d = u[p],
            m = i[d.materialIndex],
            _ = Math.max(d.start, f.start),
            b = Math.min(
              l.count,
              Math.min(d.start + d.count, f.start + f.count)
            );
          for (let x = _, y = b; x < y; x += 3) {
            const M = x,
              E = x + 1,
              C = x + 2;
            (a = Os(this, m, e, bn, c, h, M, E, C)),
              a &&
                ((a.faceIndex = Math.floor(x / 3)),
                (a.face.materialIndex = d.materialIndex),
                t.push(a));
          }
        }
      else {
        const p = Math.max(0, f.start),
          g = Math.min(l.count, f.start + f.count);
        for (let d = p, m = g; d < m; d += 3) {
          const _ = d,
            b = d + 1,
            x = d + 2;
          (a = Os(this, i, e, bn, c, h, _, b, x)),
            a && ((a.faceIndex = Math.floor(d / 3)), t.push(a));
        }
      }
  }
}
function jd(o, e, t, n, i, r, a, s) {
  let l;
  if (
    (e.side === Jt
      ? (l = n.intersectTriangle(a, r, i, !0, s))
      : (l = n.intersectTriangle(i, r, a, e.side === ci, s)),
    l === null)
  )
    return null;
  Fs.copy(s), Fs.applyMatrix4(o.matrixWorld);
  const c = t.ray.origin.distanceTo(Fs);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: Fs.clone(), object: o };
}
function Os(o, e, t, n, i, r, a, s, l) {
  o.getVertexPosition(a, kr),
    o.getVertexPosition(s, Ur),
    o.getVertexPosition(l, zr);
  const c = jd(o, e, t, n, kr, Ur, zr, Za);
  if (c) {
    i &&
      (Rs.fromBufferAttribute(i, a),
      Ds.fromBufferAttribute(i, s),
      Is.fromBufferAttribute(i, l),
      (c.uv = Vn.getUV(Za, kr, Ur, zr, Rs, Ds, Is, new Se()))),
      r &&
        (Rs.fromBufferAttribute(r, a),
        Ds.fromBufferAttribute(r, s),
        Is.fromBufferAttribute(r, l),
        (c.uv2 = Vn.getUV(Za, kr, Ur, zr, Rs, Ds, Is, new Se())));
    const h = { a, b: s, c: l, normal: new R(), materialIndex: 0 };
    Vn.getNormal(kr, Ur, zr, h.normal), (c.face = h);
  }
  return c;
}
class _s extends kt {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a,
      });
    const s = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
    const l = [],
      c = [],
      h = [],
      u = [];
    let f = 0,
      p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0),
      g("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, r, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
      this.setIndex(l),
      this.setAttribute("position", new Je(c, 3)),
      this.setAttribute("normal", new Je(h, 3)),
      this.setAttribute("uv", new Je(u, 2));
    function g(d, m, _, b, x, y, M, E, C, v, S) {
      const L = y / C,
        V = M / v,
        G = y / 2,
        F = M / 2,
        D = E / 2,
        B = C + 1,
        H = v + 1;
      let Z = 0,
        W = 0;
      const J = new R();
      for (let K = 0; K < H; K++) {
        const ue = K * V - F;
        for (let U = 0; U < B; U++) {
          const $ = U * L - G;
          (J[d] = $ * b),
            (J[m] = ue * x),
            (J[_] = D),
            c.push(J.x, J.y, J.z),
            (J[d] = 0),
            (J[m] = 0),
            (J[_] = E > 0 ? 1 : -1),
            h.push(J.x, J.y, J.z),
            u.push(U / C),
            u.push(1 - K / v),
            (Z += 1);
        }
      }
      for (let K = 0; K < v; K++)
        for (let ue = 0; ue < C; ue++) {
          const U = f + ue + B * K,
            $ = f + ue + B * (K + 1),
            ee = f + (ue + 1) + B * (K + 1),
            O = f + (ue + 1) + B * K;
          l.push(U, $, O), l.push($, ee, O), (W += 6);
        }
      s.addGroup(p, W, S), (p += W), (f += Z);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new _s(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function yr(o) {
  const e = {};
  for (const t in o) {
    e[t] = {};
    for (const n in o[t]) {
      const i = o[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function It(o) {
  const e = {};
  for (let t = 0; t < o.length; t++) {
    const n = yr(o[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function Zd(o) {
  const e = [];
  for (let t = 0; t < o.length; t++) e.push(o[t].clone());
  return e;
}
function Hh(o) {
  return o.getRenderTarget() === null && o.outputEncoding === Be ? Sn : ss;
}
const Kd = { clone: yr, merge: It };
var $d = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Jd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ni extends Ui {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = $d),
      (this.fragmentShader = Jd),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = yr(e.uniforms)),
      (this.uniformsGroups = Zd(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture
        ? (t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[i] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[i] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[i] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[i] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: a.toArray() })
        : (t.uniforms[i] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Zo extends je {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new ve()),
      (this.projectionMatrix = new ve()),
      (this.projectionMatrixInverse = new ve());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ft extends Zo {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = as * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Zr * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return as * 2 * Math.atan(Math.tan(Zr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, r, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Zr * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      (r += (a.offsetX * i) / l),
        (t -= (a.offsetY * n) / c),
        (i *= a.width / l),
        (n *= a.height / c);
    }
    const s = this.filmOffset;
    s !== 0 && (r += (e * s) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const $i = -90,
  Ji = 1;
class Qd extends je {
  constructor(e, t, n) {
    super(), (this.type = "CubeCamera"), (this.renderTarget = n);
    const i = new Ft($i, Ji, e, t);
    (i.layers = this.layers), i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const r = new Ft($i, Ji, e, t);
    (r.layers = this.layers),
      r.up.set(0, 1, 0),
      r.lookAt(-1, 0, 0),
      this.add(r);
    const a = new Ft($i, Ji, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, -1),
      a.lookAt(0, 1, 0),
      this.add(a);
    const s = new Ft($i, Ji, e, t);
    (s.layers = this.layers),
      s.up.set(0, 0, 1),
      s.lookAt(0, -1, 0),
      this.add(s);
    const l = new Ft($i, Ji, e, t);
    (l.layers = this.layers), l.up.set(0, 1, 0), l.lookAt(0, 0, 1), this.add(l);
    const c = new Ft($i, Ji, e, t);
    (c.layers = this.layers),
      c.up.set(0, 1, 0),
      c.lookAt(0, 0, -1),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, r, a, s, l, c] = this.children,
      h = e.getRenderTarget(),
      u = e.toneMapping,
      f = e.xr.enabled;
    (e.toneMapping = Hn), (e.xr.enabled = !1);
    const p = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, r),
      e.setRenderTarget(n, 2),
      e.render(t, a),
      e.setRenderTarget(n, 3),
      e.render(t, s),
      e.setRenderTarget(n, 4),
      e.render(t, l),
      (n.texture.generateMipmaps = p),
      e.setRenderTarget(n, 5),
      e.render(t, c),
      e.setRenderTarget(h),
      (e.toneMapping = u),
      (e.xr.enabled = f),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Ko extends Mt {
  constructor(e, t, n, i, r, a, s, l, c, h) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : _r),
      super(e, t, n, i, r, a, s, l, c, h),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ep extends Oi {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new Ko(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Kt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new _s(5, 5, 5),
      r = new Ni({
        name: "CubemapFromEquirect",
        uniforms: yr(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Jt,
        blending: ai,
      });
    r.uniforms.tEquirect.value = t;
    const a = new hn(i, r),
      s = t.minFilter;
    return (
      t.minFilter === is && (t.minFilter = Kt),
      new Qd(1, 10, this).update(e, a),
      (t.minFilter = s),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Ka = new R(),
  tp = new R(),
  np = new Tt();
class Si {
  constructor(e = new R(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Ka.subVectors(n, t).cross(tp.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Ka),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || np.getNormalMatrix(e),
      i = this.coplanarPoint(Ka).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Qi = new fa(),
  Ns = new R();
class $o {
  constructor(
    e = new Si(),
    t = new Si(),
    n = new Si(),
    i = new Si(),
    r = new Si(),
    a = new Si()
  ) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const s = this.planes;
    return (
      s[0].copy(e),
      s[1].copy(t),
      s[2].copy(n),
      s[3].copy(i),
      s[4].copy(r),
      s[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      r = n[1],
      a = n[2],
      s = n[3],
      l = n[4],
      c = n[5],
      h = n[6],
      u = n[7],
      f = n[8],
      p = n[9],
      g = n[10],
      d = n[11],
      m = n[12],
      _ = n[13],
      b = n[14],
      x = n[15];
    return (
      t[0].setComponents(s - i, u - l, d - f, x - m).normalize(),
      t[1].setComponents(s + i, u + l, d + f, x + m).normalize(),
      t[2].setComponents(s + r, u + c, d + p, x + _).normalize(),
      t[3].setComponents(s - r, u - c, d - p, x - _).normalize(),
      t[4].setComponents(s - a, u - h, d - g, x - b).normalize(),
      t[5].setComponents(s + a, u + h, d + g, x + b).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Qi)
    );
  }
  intersectsSprite(e) {
    return (
      Qi.center.set(0, 0, 0),
      (Qi.radius = 0.7071067811865476),
      Qi.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Qi)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((Ns.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (Ns.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (Ns.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(Ns) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Xh() {
  let o = null,
    e = !1,
    t = null,
    n = null;
  function i(r, a) {
    t(r, a), (n = o.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = o.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      o.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      o = r;
    },
  };
}
function ip(o, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(c, h) {
    const u = c.array,
      f = c.usage,
      p = o.createBuffer();
    o.bindBuffer(h, p), o.bufferData(h, u, f), c.onUploadCallback();
    let g;
    if (u instanceof Float32Array) g = 5126;
    else if (u instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) g = 5131;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else g = 5123;
    else if (u instanceof Int16Array) g = 5122;
    else if (u instanceof Uint32Array) g = 5125;
    else if (u instanceof Int32Array) g = 5124;
    else if (u instanceof Int8Array) g = 5120;
    else if (u instanceof Uint8Array) g = 5121;
    else if (u instanceof Uint8ClampedArray) g = 5121;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + u
      );
    return {
      buffer: p,
      type: g,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function r(c, h, u) {
    const f = h.array,
      p = h.updateRange;
    o.bindBuffer(u, c),
      p.count === -1
        ? o.bufferSubData(u, 0, f)
        : (t
            ? o.bufferSubData(
                u,
                p.offset * f.BYTES_PER_ELEMENT,
                f,
                p.offset,
                p.count
              )
            : o.bufferSubData(
                u,
                p.offset * f.BYTES_PER_ELEMENT,
                f.subarray(p.offset, p.offset + p.count)
              ),
          (p.count = -1)),
      h.onUploadCallback();
  }
  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function s(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h && (o.deleteBuffer(h.buffer), n.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const f = n.get(c);
      (!f || f.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u === void 0
      ? n.set(c, i(c, h))
      : u.version < c.version && (r(u.buffer, c, h), (u.version = c.version));
  }
  return { get: a, remove: s, update: l };
}
class Jo extends kt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const r = e / 2,
      a = t / 2,
      s = Math.floor(n),
      l = Math.floor(i),
      c = s + 1,
      h = l + 1,
      u = e / s,
      f = t / l,
      p = [],
      g = [],
      d = [],
      m = [];
    for (let _ = 0; _ < h; _++) {
      const b = _ * f - a;
      for (let x = 0; x < c; x++) {
        const y = x * u - r;
        g.push(y, -b, 0), d.push(0, 0, 1), m.push(x / s), m.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let b = 0; b < s; b++) {
        const x = b + c * _,
          y = b + c * (_ + 1),
          M = b + 1 + c * (_ + 1),
          E = b + 1 + c * _;
        p.push(x, y, E), p.push(y, M, E);
      }
    this.setIndex(p),
      this.setAttribute("position", new Je(g, 3)),
      this.setAttribute("normal", new Je(d, 3)),
      this.setAttribute("uv", new Je(m, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Jo(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var rp = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  sp = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  ap = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  op = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  lp = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  cp = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  hp = "vec3 transformed = vec3( position );",
  up = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  fp = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  dp = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  pp = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  mp = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  gp = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  _p = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  xp = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  vp = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  yp = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Mp = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  bp = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  Sp = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
  wp = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Tp = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Ep = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Ap = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  Cp = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Pp = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Lp = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Rp = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Dp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Ip = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Fp = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Op = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Np = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  kp = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Up = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  zp = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Bp = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Gp = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Vp = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Wp = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Hp = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Xp = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  qp = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  Yp = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  jp = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Zp = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Kp = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  $p = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Jp = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
  Qp = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  em = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  tm = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  nm = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  im = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  rm = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  sm = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  am = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  om = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  lm = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  cm = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  hm = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  um = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  fm = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  dm = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  pm = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  mm = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  gm = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  _m = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  xm = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  vm = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  ym = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Mm = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  bm = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
  Sm = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  wm = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  Tm = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  Em = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Am = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Cm = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  Pm = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Lm = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Rm = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Dm = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Im = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Fm = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Om = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  Nm = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  km = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  Um = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  zm = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Bm = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  Gm = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Vm = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Wm = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Hm = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Xm = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  qm = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Ym = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,
  jm = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  Zm = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  Km = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  $m = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  Jm = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  Qm = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  eg = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  tg = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ng = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  ig = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  rg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  sg = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  ag = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  og = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  lg = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  cg = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  hg = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  ug = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  fg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  dg = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  pg = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  mg = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  gg = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  _g = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  xg = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  vg = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  yg = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Mg = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  bg = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Sg = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  wg = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Tg = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Eg = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  Ag = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Cg = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Pg = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Lg = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Rg = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Dg = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Ig = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Fg = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Og = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Te = {
    alphamap_fragment: rp,
    alphamap_pars_fragment: sp,
    alphatest_fragment: ap,
    alphatest_pars_fragment: op,
    aomap_fragment: lp,
    aomap_pars_fragment: cp,
    begin_vertex: hp,
    beginnormal_vertex: up,
    bsdfs: fp,
    iridescence_fragment: dp,
    bumpmap_pars_fragment: pp,
    clipping_planes_fragment: mp,
    clipping_planes_pars_fragment: gp,
    clipping_planes_pars_vertex: _p,
    clipping_planes_vertex: xp,
    color_fragment: vp,
    color_pars_fragment: yp,
    color_pars_vertex: Mp,
    color_vertex: bp,
    common: Sp,
    cube_uv_reflection_fragment: wp,
    defaultnormal_vertex: Tp,
    displacementmap_pars_vertex: Ep,
    displacementmap_vertex: Ap,
    emissivemap_fragment: Cp,
    emissivemap_pars_fragment: Pp,
    encodings_fragment: Lp,
    encodings_pars_fragment: Rp,
    envmap_fragment: Dp,
    envmap_common_pars_fragment: Ip,
    envmap_pars_fragment: Fp,
    envmap_pars_vertex: Op,
    envmap_physical_pars_fragment: Yp,
    envmap_vertex: Np,
    fog_vertex: kp,
    fog_pars_vertex: Up,
    fog_fragment: zp,
    fog_pars_fragment: Bp,
    gradientmap_pars_fragment: Gp,
    lightmap_fragment: Vp,
    lightmap_pars_fragment: Wp,
    lights_lambert_fragment: Hp,
    lights_lambert_pars_fragment: Xp,
    lights_pars_begin: qp,
    lights_toon_fragment: jp,
    lights_toon_pars_fragment: Zp,
    lights_phong_fragment: Kp,
    lights_phong_pars_fragment: $p,
    lights_physical_fragment: Jp,
    lights_physical_pars_fragment: Qp,
    lights_fragment_begin: em,
    lights_fragment_maps: tm,
    lights_fragment_end: nm,
    logdepthbuf_fragment: im,
    logdepthbuf_pars_fragment: rm,
    logdepthbuf_pars_vertex: sm,
    logdepthbuf_vertex: am,
    map_fragment: om,
    map_pars_fragment: lm,
    map_particle_fragment: cm,
    map_particle_pars_fragment: hm,
    metalnessmap_fragment: um,
    metalnessmap_pars_fragment: fm,
    morphcolor_vertex: dm,
    morphnormal_vertex: pm,
    morphtarget_pars_vertex: mm,
    morphtarget_vertex: gm,
    normal_fragment_begin: _m,
    normal_fragment_maps: xm,
    normal_pars_fragment: vm,
    normal_pars_vertex: ym,
    normal_vertex: Mm,
    normalmap_pars_fragment: bm,
    clearcoat_normal_fragment_begin: Sm,
    clearcoat_normal_fragment_maps: wm,
    clearcoat_pars_fragment: Tm,
    iridescence_pars_fragment: Em,
    output_fragment: Am,
    packing: Cm,
    premultiplied_alpha_fragment: Pm,
    project_vertex: Lm,
    dithering_fragment: Rm,
    dithering_pars_fragment: Dm,
    roughnessmap_fragment: Im,
    roughnessmap_pars_fragment: Fm,
    shadowmap_pars_fragment: Om,
    shadowmap_pars_vertex: Nm,
    shadowmap_vertex: km,
    shadowmask_pars_fragment: Um,
    skinbase_vertex: zm,
    skinning_pars_vertex: Bm,
    skinning_vertex: Gm,
    skinnormal_vertex: Vm,
    specularmap_fragment: Wm,
    specularmap_pars_fragment: Hm,
    tonemapping_fragment: Xm,
    tonemapping_pars_fragment: qm,
    transmission_fragment: Ym,
    transmission_pars_fragment: jm,
    uv_pars_fragment: Zm,
    uv_pars_vertex: Km,
    uv_vertex: $m,
    uv2_pars_fragment: Jm,
    uv2_pars_vertex: Qm,
    uv2_vertex: eg,
    worldpos_vertex: tg,
    background_vert: ng,
    background_frag: ig,
    backgroundCube_vert: rg,
    backgroundCube_frag: sg,
    cube_vert: ag,
    cube_frag: og,
    depth_vert: lg,
    depth_frag: cg,
    distanceRGBA_vert: hg,
    distanceRGBA_frag: ug,
    equirect_vert: fg,
    equirect_frag: dg,
    linedashed_vert: pg,
    linedashed_frag: mg,
    meshbasic_vert: gg,
    meshbasic_frag: _g,
    meshlambert_vert: xg,
    meshlambert_frag: vg,
    meshmatcap_vert: yg,
    meshmatcap_frag: Mg,
    meshnormal_vert: bg,
    meshnormal_frag: Sg,
    meshphong_vert: wg,
    meshphong_frag: Tg,
    meshphysical_vert: Eg,
    meshphysical_frag: Ag,
    meshtoon_vert: Cg,
    meshtoon_frag: Pg,
    points_vert: Lg,
    points_frag: Rg,
    shadow_vert: Dg,
    shadow_frag: Ig,
    sprite_vert: Fg,
    sprite_frag: Og,
  },
  ie = {
    common: {
      diffuse: { value: new Me(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new Tt() },
      uv2Transform: { value: new Tt() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new Se(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Me(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Me(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Tt() },
    },
    sprite: {
      diffuse: { value: new Me(16777215) },
      opacity: { value: 1 },
      center: { value: new Se(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Tt() },
    },
  },
  wn = {
    basic: {
      uniforms: It([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.fog,
      ]),
      vertexShader: Te.meshbasic_vert,
      fragmentShader: Te.meshbasic_frag,
    },
    lambert: {
      uniforms: It([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        ie.lights,
        { emissive: { value: new Me(0) } },
      ]),
      vertexShader: Te.meshlambert_vert,
      fragmentShader: Te.meshlambert_frag,
    },
    phong: {
      uniforms: It([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        ie.lights,
        {
          emissive: { value: new Me(0) },
          specular: { value: new Me(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Te.meshphong_vert,
      fragmentShader: Te.meshphong_frag,
    },
    standard: {
      uniforms: It([
        ie.common,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.roughnessmap,
        ie.metalnessmap,
        ie.fog,
        ie.lights,
        {
          emissive: { value: new Me(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Te.meshphysical_vert,
      fragmentShader: Te.meshphysical_frag,
    },
    toon: {
      uniforms: It([
        ie.common,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.gradientmap,
        ie.fog,
        ie.lights,
        { emissive: { value: new Me(0) } },
      ]),
      vertexShader: Te.meshtoon_vert,
      fragmentShader: Te.meshtoon_frag,
    },
    matcap: {
      uniforms: It([
        ie.common,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Te.meshmatcap_vert,
      fragmentShader: Te.meshmatcap_frag,
    },
    points: {
      uniforms: It([ie.points, ie.fog]),
      vertexShader: Te.points_vert,
      fragmentShader: Te.points_frag,
    },
    dashed: {
      uniforms: It([
        ie.common,
        ie.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Te.linedashed_vert,
      fragmentShader: Te.linedashed_frag,
    },
    depth: {
      uniforms: It([ie.common, ie.displacementmap]),
      vertexShader: Te.depth_vert,
      fragmentShader: Te.depth_frag,
    },
    normal: {
      uniforms: It([
        ie.common,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Te.meshnormal_vert,
      fragmentShader: Te.meshnormal_frag,
    },
    sprite: {
      uniforms: It([ie.sprite, ie.fog]),
      vertexShader: Te.sprite_vert,
      fragmentShader: Te.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Tt() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Te.background_vert,
      fragmentShader: Te.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Te.backgroundCube_vert,
      fragmentShader: Te.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Te.cube_vert,
      fragmentShader: Te.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Te.equirect_vert,
      fragmentShader: Te.equirect_frag,
    },
    distanceRGBA: {
      uniforms: It([
        ie.common,
        ie.displacementmap,
        {
          referencePosition: { value: new R() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Te.distanceRGBA_vert,
      fragmentShader: Te.distanceRGBA_frag,
    },
    shadow: {
      uniforms: It([
        ie.lights,
        ie.fog,
        { color: { value: new Me(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Te.shadow_vert,
      fragmentShader: Te.shadow_frag,
    },
  };
wn.physical = {
  uniforms: It([
    wn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Se(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new Me(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new Se() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Me(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new Me(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: Te.meshphysical_vert,
  fragmentShader: Te.meshphysical_frag,
};
const ks = { r: 0, b: 0, g: 0 };
function Ng(o, e, t, n, i, r, a) {
  const s = new Me(0);
  let l = r === !0 ? 0 : 1,
    c,
    h,
    u = null,
    f = 0,
    p = null;
  function g(m, _) {
    let b = !1,
      x = _.isScene === !0 ? _.background : null;
    x && x.isTexture && (x = (_.backgroundBlurriness > 0 ? t : e).get(x));
    const y = o.xr,
      M = y.getSession && y.getSession();
    M && M.environmentBlendMode === "additive" && (x = null),
      x === null ? d(s, l) : x && x.isColor && (d(x, 1), (b = !0)),
      (o.autoClear || b) &&
        o.clear(o.autoClearColor, o.autoClearDepth, o.autoClearStencil),
      x && (x.isCubeTexture || x.mapping === ua)
        ? (h === void 0 &&
            ((h = new hn(
              new _s(1, 1, 1),
              new Ni({
                name: "BackgroundCubeMaterial",
                uniforms: yr(wn.backgroundCube.uniforms),
                vertexShader: wn.backgroundCube.vertexShader,
                fragmentShader: wn.backgroundCube.fragmentShader,
                side: Jt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            h.geometry.deleteAttribute("normal"),
            h.geometry.deleteAttribute("uv"),
            (h.onBeforeRender = function (E, C, v) {
              this.matrixWorld.copyPosition(v.matrixWorld);
            }),
            Object.defineProperty(h.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(h)),
          (h.material.uniforms.envMap.value = x),
          (h.material.uniforms.flipEnvMap.value =
            x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1),
          (h.material.uniforms.backgroundBlurriness.value =
            _.backgroundBlurriness),
          (h.material.uniforms.backgroundIntensity.value =
            _.backgroundIntensity),
          (h.material.toneMapped = x.encoding !== Be),
          (u !== x || f !== x.version || p !== o.toneMapping) &&
            ((h.material.needsUpdate = !0),
            (u = x),
            (f = x.version),
            (p = o.toneMapping)),
          h.layers.enableAll(),
          m.unshift(h, h.geometry, h.material, 0, 0, null))
        : x &&
          x.isTexture &&
          (c === void 0 &&
            ((c = new hn(
              new Jo(2, 2),
              new Ni({
                name: "BackgroundMaterial",
                uniforms: yr(wn.background.uniforms),
                vertexShader: wn.background.vertexShader,
                fragmentShader: wn.background.fragmentShader,
                side: ci,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(c)),
          (c.material.uniforms.t2D.value = x),
          (c.material.uniforms.backgroundIntensity.value =
            _.backgroundIntensity),
          (c.material.toneMapped = x.encoding !== Be),
          x.matrixAutoUpdate === !0 && x.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(x.matrix),
          (u !== x || f !== x.version || p !== o.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (u = x),
            (f = x.version),
            (p = o.toneMapping)),
          c.layers.enableAll(),
          m.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function d(m, _) {
    m.getRGB(ks, Hh(o)), n.buffers.color.setClear(ks.r, ks.g, ks.b, _, a);
  }
  return {
    getClearColor: function () {
      return s;
    },
    setClearColor: function (m, _ = 1) {
      s.set(m), (l = _), d(s, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (m) {
      (l = m), d(s, l);
    },
    render: g,
  };
}
function kg(o, e, t, n) {
  const i = o.getParameter(34921),
    r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    a = n.isWebGL2 || r !== null,
    s = {},
    l = m(null);
  let c = l,
    h = !1;
  function u(D, B, H, Z, W) {
    let J = !1;
    if (a) {
      const K = d(Z, H, B);
      c !== K && ((c = K), p(c.object)),
        (J = _(D, Z, H, W)),
        J && b(D, Z, H, W);
    } else {
      const K = B.wireframe === !0;
      (c.geometry !== Z.id || c.program !== H.id || c.wireframe !== K) &&
        ((c.geometry = Z.id), (c.program = H.id), (c.wireframe = K), (J = !0));
    }
    W !== null && t.update(W, 34963),
      (J || h) &&
        ((h = !1),
        v(D, B, H, Z),
        W !== null && o.bindBuffer(34963, t.get(W).buffer));
  }
  function f() {
    return n.isWebGL2 ? o.createVertexArray() : r.createVertexArrayOES();
  }
  function p(D) {
    return n.isWebGL2 ? o.bindVertexArray(D) : r.bindVertexArrayOES(D);
  }
  function g(D) {
    return n.isWebGL2 ? o.deleteVertexArray(D) : r.deleteVertexArrayOES(D);
  }
  function d(D, B, H) {
    const Z = H.wireframe === !0;
    let W = s[D.id];
    W === void 0 && ((W = {}), (s[D.id] = W));
    let J = W[B.id];
    J === void 0 && ((J = {}), (W[B.id] = J));
    let K = J[Z];
    return K === void 0 && ((K = m(f())), (J[Z] = K)), K;
  }
  function m(D) {
    const B = [],
      H = [],
      Z = [];
    for (let W = 0; W < i; W++) (B[W] = 0), (H[W] = 0), (Z[W] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: H,
      attributeDivisors: Z,
      object: D,
      attributes: {},
      index: null,
    };
  }
  function _(D, B, H, Z) {
    const W = c.attributes,
      J = B.attributes;
    let K = 0;
    const ue = H.getAttributes();
    for (const U in ue)
      if (ue[U].location >= 0) {
        const ee = W[U];
        let O = J[U];
        if (
          (O === void 0 &&
            (U === "instanceMatrix" &&
              D.instanceMatrix &&
              (O = D.instanceMatrix),
            U === "instanceColor" && D.instanceColor && (O = D.instanceColor)),
          ee === void 0 || ee.attribute !== O || (O && ee.data !== O.data))
        )
          return !0;
        K++;
      }
    return c.attributesNum !== K || c.index !== Z;
  }
  function b(D, B, H, Z) {
    const W = {},
      J = B.attributes;
    let K = 0;
    const ue = H.getAttributes();
    for (const U in ue)
      if (ue[U].location >= 0) {
        let ee = J[U];
        ee === void 0 &&
          (U === "instanceMatrix" &&
            D.instanceMatrix &&
            (ee = D.instanceMatrix),
          U === "instanceColor" && D.instanceColor && (ee = D.instanceColor));
        const O = {};
        (O.attribute = ee),
          ee && ee.data && (O.data = ee.data),
          (W[U] = O),
          K++;
      }
    (c.attributes = W), (c.attributesNum = K), (c.index = Z);
  }
  function x() {
    const D = c.newAttributes;
    for (let B = 0, H = D.length; B < H; B++) D[B] = 0;
  }
  function y(D) {
    M(D, 0);
  }
  function M(D, B) {
    const H = c.newAttributes,
      Z = c.enabledAttributes,
      W = c.attributeDivisors;
    (H[D] = 1),
      Z[D] === 0 && (o.enableVertexAttribArray(D), (Z[D] = 1)),
      W[D] !== B &&
        ((n.isWebGL2 ? o : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](D, B),
        (W[D] = B));
  }
  function E() {
    const D = c.newAttributes,
      B = c.enabledAttributes;
    for (let H = 0, Z = B.length; H < Z; H++)
      B[H] !== D[H] && (o.disableVertexAttribArray(H), (B[H] = 0));
  }
  function C(D, B, H, Z, W, J) {
    n.isWebGL2 === !0 && (H === 5124 || H === 5125)
      ? o.vertexAttribIPointer(D, B, H, W, J)
      : o.vertexAttribPointer(D, B, H, Z, W, J);
  }
  function v(D, B, H, Z) {
    if (
      n.isWebGL2 === !1 &&
      (D.isInstancedMesh || Z.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    x();
    const W = Z.attributes,
      J = H.getAttributes(),
      K = B.defaultAttributeValues;
    for (const ue in J) {
      const U = J[ue];
      if (U.location >= 0) {
        let $ = W[ue];
        if (
          ($ === void 0 &&
            (ue === "instanceMatrix" &&
              D.instanceMatrix &&
              ($ = D.instanceMatrix),
            ue === "instanceColor" && D.instanceColor && ($ = D.instanceColor)),
          $ !== void 0)
        ) {
          const ee = $.normalized,
            O = $.itemSize,
            le = t.get($);
          if (le === void 0) continue;
          const ce = le.buffer,
            he = le.type,
            fe = le.bytesPerElement;
          if ($.isInterleavedBufferAttribute) {
            const ye = $.data,
              we = ye.stride,
              Ee = $.offset;
            if (ye.isInstancedInterleavedBuffer) {
              for (let Oe = 0; Oe < U.locationSize; Oe++)
                M(U.location + Oe, ye.meshPerAttribute);
              D.isInstancedMesh !== !0 &&
                Z._maxInstanceCount === void 0 &&
                (Z._maxInstanceCount = ye.meshPerAttribute * ye.count);
            } else
              for (let Oe = 0; Oe < U.locationSize; Oe++) y(U.location + Oe);
            o.bindBuffer(34962, ce);
            for (let Oe = 0; Oe < U.locationSize; Oe++)
              C(
                U.location + Oe,
                O / U.locationSize,
                he,
                ee,
                we * fe,
                (Ee + (O / U.locationSize) * Oe) * fe
              );
          } else {
            if ($.isInstancedBufferAttribute) {
              for (let ye = 0; ye < U.locationSize; ye++)
                M(U.location + ye, $.meshPerAttribute);
              D.isInstancedMesh !== !0 &&
                Z._maxInstanceCount === void 0 &&
                (Z._maxInstanceCount = $.meshPerAttribute * $.count);
            } else
              for (let ye = 0; ye < U.locationSize; ye++) y(U.location + ye);
            o.bindBuffer(34962, ce);
            for (let ye = 0; ye < U.locationSize; ye++)
              C(
                U.location + ye,
                O / U.locationSize,
                he,
                ee,
                O * fe,
                (O / U.locationSize) * ye * fe
              );
          }
        } else if (K !== void 0) {
          const ee = K[ue];
          if (ee !== void 0)
            switch (ee.length) {
              case 2:
                o.vertexAttrib2fv(U.location, ee);
                break;
              case 3:
                o.vertexAttrib3fv(U.location, ee);
                break;
              case 4:
                o.vertexAttrib4fv(U.location, ee);
                break;
              default:
                o.vertexAttrib1fv(U.location, ee);
            }
        }
      }
    }
    E();
  }
  function S() {
    G();
    for (const D in s) {
      const B = s[D];
      for (const H in B) {
        const Z = B[H];
        for (const W in Z) g(Z[W].object), delete Z[W];
        delete B[H];
      }
      delete s[D];
    }
  }
  function L(D) {
    if (s[D.id] === void 0) return;
    const B = s[D.id];
    for (const H in B) {
      const Z = B[H];
      for (const W in Z) g(Z[W].object), delete Z[W];
      delete B[H];
    }
    delete s[D.id];
  }
  function V(D) {
    for (const B in s) {
      const H = s[B];
      if (H[D.id] === void 0) continue;
      const Z = H[D.id];
      for (const W in Z) g(Z[W].object), delete Z[W];
      delete H[D.id];
    }
  }
  function G() {
    F(), (h = !0), c !== l && ((c = l), p(c.object));
  }
  function F() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: u,
    reset: G,
    resetDefaultState: F,
    dispose: S,
    releaseStatesOfGeometry: L,
    releaseStatesOfProgram: V,
    initAttributes: x,
    enableAttribute: y,
    disableUnusedAttributes: E,
  };
}
function Ug(o, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function a(c) {
    r = c;
  }
  function s(c, h) {
    o.drawArrays(r, c, h), t.update(h, r, 1);
  }
  function l(c, h, u) {
    if (u === 0) return;
    let f, p;
    if (i) (f = o), (p = "drawArraysInstanced");
    else if (
      ((f = e.get("ANGLE_instanced_arrays")),
      (p = "drawArraysInstancedANGLE"),
      f === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    f[p](r, c, h, u), t.update(h, r, u);
  }
  (this.setMode = a), (this.render = s), (this.renderInstances = l);
}
function zg(o, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const C = e.get("EXT_texture_filter_anisotropic");
      n = o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function r(C) {
    if (C === "highp") {
      if (
        o.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        o.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      C = "mediump";
    }
    return C === "mediump" &&
      o.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      o.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const a =
    typeof WebGL2RenderingContext < "u" && o instanceof WebGL2RenderingContext;
  let s = t.precision !== void 0 ? t.precision : "highp";
  const l = r(s);
  l !== s &&
    (console.warn(
      "THREE.WebGLRenderer:",
      s,
      "not supported, using",
      l,
      "instead."
    ),
    (s = l));
  const c = a || e.has("WEBGL_draw_buffers"),
    h = t.logarithmicDepthBuffer === !0,
    u = o.getParameter(34930),
    f = o.getParameter(35660),
    p = o.getParameter(3379),
    g = o.getParameter(34076),
    d = o.getParameter(34921),
    m = o.getParameter(36347),
    _ = o.getParameter(36348),
    b = o.getParameter(36349),
    x = f > 0,
    y = a || e.has("OES_texture_float"),
    M = x && y,
    E = a ? o.getParameter(36183) : 0;
  return {
    isWebGL2: a,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: s,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: f,
    maxTextureSize: p,
    maxCubemapSize: g,
    maxAttributes: d,
    maxVertexUniforms: m,
    maxVaryings: _,
    maxFragmentUniforms: b,
    vertexTextures: x,
    floatFragmentTextures: y,
    floatVertexTextures: M,
    maxSamples: E,
  };
}
function Bg(o) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    r = !1;
  const a = new Si(),
    s = new Tt(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (u, f) {
      const p = u.length !== 0 || f || n !== 0 || i;
      return (i = f), (n = u.length), p;
    }),
    (this.beginShadows = function () {
      (r = !0), h(null);
    }),
    (this.endShadows = function () {
      r = !1;
    }),
    (this.setGlobalState = function (u, f) {
      t = h(u, f, 0);
    }),
    (this.setState = function (u, f, p) {
      const g = u.clippingPlanes,
        d = u.clipIntersection,
        m = u.clipShadows,
        _ = o.get(u);
      if (!i || g === null || g.length === 0 || (r && !m)) r ? h(null) : c();
      else {
        const b = r ? 0 : n,
          x = b * 4;
        let y = _.clippingState || null;
        (l.value = y), (y = h(g, f, x, p));
        for (let M = 0; M !== x; ++M) y[M] = t[M];
        (_.clippingState = y),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += b);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function h(u, f, p, g) {
    const d = u !== null ? u.length : 0;
    let m = null;
    if (d !== 0) {
      if (((m = l.value), g !== !0 || m === null)) {
        const _ = p + d * 4,
          b = f.matrixWorldInverse;
        s.getNormalMatrix(b),
          (m === null || m.length < _) && (m = new Float32Array(_));
        for (let x = 0, y = p; x !== d; ++x, y += 4)
          a.copy(u[x]).applyMatrix4(b, s),
            a.normal.toArray(m, y),
            (m[y + 3] = a.constant);
      }
      (l.value = m), (l.needsUpdate = !0);
    }
    return (e.numPlanes = d), (e.numIntersection = 0), m;
  }
}
function Gg(o) {
  let e = new WeakMap();
  function t(a, s) {
    return s === Zs ? (a.mapping = _r) : s === yo && (a.mapping = xr), a;
  }
  function n(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const s = a.mapping;
      if (s === Zs || s === yo)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new ep(l.height / 2);
            return (
              c.fromEquirectangularTexture(o, a),
              e.set(a, c),
              a.addEventListener("dispose", i),
              t(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function i(a) {
    const s = a.target;
    s.removeEventListener("dispose", i);
    const l = e.get(s);
    l !== void 0 && (e.delete(s), l.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: n, dispose: r };
}
class Qo extends Zo {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - e,
      a = n + e,
      s = i + t,
      l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += c * this.view.offsetX),
        (a = r + c * this.view.width),
        (s -= h * this.view.offsetY),
        (l = s - h * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(r, a, s, l, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const or = 4,
  xc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Ei = 20,
  $a = new Qo(),
  vc = new Me();
let Ja = null;
const wi = (1 + Math.sqrt(5)) / 2,
  er = 1 / wi,
  yc = [
    new R(1, 1, 1),
    new R(-1, 1, 1),
    new R(1, 1, -1),
    new R(-1, 1, -1),
    new R(0, wi, er),
    new R(0, wi, -er),
    new R(er, 0, wi),
    new R(-er, 0, wi),
    new R(wi, er, 0),
    new R(-wi, er, 0),
  ];
class Mc {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (Ja = this._renderer.getRenderTarget()), this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, r),
      t > 0 && this._blur(r, 0, 0, t),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = wc()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Sc()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Ja),
      (e.scissorTest = !1),
      Us(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === _r || e.mapping === xr
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (Ja = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: Kt,
        minFilter: Kt,
        generateMipmaps: !1,
        type: rs,
        format: on,
        encoding: Fi,
        depthBuffer: !1,
      },
      i = bc(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = bc(e, t, n));
      const { _lodMax: r } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Vg(r)),
        (this._blurMaterial = Wg(r, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new hn(this._lodPlanes[0], e);
    this._renderer.compile(t, $a);
  }
  _sceneToCubeUV(e, t, n, i) {
    const s = new Ft(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      h = this._renderer,
      u = h.autoClear,
      f = h.toneMapping;
    h.getClearColor(vc), (h.toneMapping = Hn), (h.autoClear = !1);
    const p = new Vh({
        name: "PMREM.Background",
        side: Jt,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new hn(new _s(), p);
    let d = !1;
    const m = e.background;
    m
      ? m.isColor && (p.color.copy(m), (e.background = null), (d = !0))
      : (p.color.copy(vc), (d = !0));
    for (let _ = 0; _ < 6; _++) {
      const b = _ % 3;
      b === 0
        ? (s.up.set(0, l[_], 0), s.lookAt(c[_], 0, 0))
        : b === 1
        ? (s.up.set(0, 0, l[_]), s.lookAt(0, c[_], 0))
        : (s.up.set(0, l[_], 0), s.lookAt(0, 0, c[_]));
      const x = this._cubeSize;
      Us(i, b * x, _ > 2 ? x : 0, x, x),
        h.setRenderTarget(i),
        d && h.render(g, s),
        h.render(e, s);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (h.toneMapping = f),
      (h.autoClear = u),
      (e.background = m);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === _r || e.mapping === xr;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = wc()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Sc());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new hn(this._lodPlanes[0], r),
      s = r.uniforms;
    s.envMap.value = e;
    const l = this._cubeSize;
    Us(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, $a);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        a = yc[(i - 1) % yc.length];
      this._blur(e, i - 1, i, r, a);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", r),
      this._halfBlur(a, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, a, s) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const h = 3,
      u = new hn(this._lodPlanes[i], c),
      f = c.uniforms,
      p = this._sizeLods[n] - 1,
      g = isFinite(r) ? Math.PI / (2 * p) : (2 * Math.PI) / (2 * Ei - 1),
      d = r / g,
      m = isFinite(r) ? 1 + Math.floor(h * d) : Ei;
    m > Ei &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`
      );
    const _ = [];
    let b = 0;
    for (let C = 0; C < Ei; ++C) {
      const v = C / d,
        S = Math.exp((-v * v) / 2);
      _.push(S), C === 0 ? (b += S) : C < m && (b += 2 * S);
    }
    for (let C = 0; C < _.length; C++) _[C] = _[C] / b;
    (f.envMap.value = e.texture),
      (f.samples.value = m),
      (f.weights.value = _),
      (f.latitudinal.value = a === "latitudinal"),
      s && (f.poleAxis.value = s);
    const { _lodMax: x } = this;
    (f.dTheta.value = g), (f.mipInt.value = x - n);
    const y = this._sizeLods[i],
      M = 3 * y * (i > x - or ? i - x + or : 0),
      E = 4 * (this._cubeSize - y);
    Us(t, M, E, 3 * y, 2 * y), l.setRenderTarget(t), l.render(u, $a);
  }
}
function Vg(o) {
  const e = [],
    t = [],
    n = [];
  let i = o;
  const r = o - or + 1 + xc.length;
  for (let a = 0; a < r; a++) {
    const s = Math.pow(2, i);
    t.push(s);
    let l = 1 / s;
    a > o - or ? (l = xc[a - o + or - 1]) : a === 0 && (l = 0), n.push(l);
    const c = 1 / (s - 2),
      h = -c,
      u = 1 + c,
      f = [h, h, u, h, u, u, h, h, u, u, h, u],
      p = 6,
      g = 6,
      d = 3,
      m = 2,
      _ = 1,
      b = new Float32Array(d * g * p),
      x = new Float32Array(m * g * p),
      y = new Float32Array(_ * g * p);
    for (let E = 0; E < p; E++) {
      const C = ((E % 3) * 2) / 3 - 1,
        v = E > 2 ? 0 : -1,
        S = [
          C,
          v,
          0,
          C + 2 / 3,
          v,
          0,
          C + 2 / 3,
          v + 1,
          0,
          C,
          v,
          0,
          C + 2 / 3,
          v + 1,
          0,
          C,
          v + 1,
          0,
        ];
      b.set(S, d * g * E), x.set(f, m * g * E);
      const L = [E, E, E, E, E, E];
      y.set(L, _ * g * E);
    }
    const M = new kt();
    M.setAttribute("position", new Cn(b, d)),
      M.setAttribute("uv", new Cn(x, m)),
      M.setAttribute("faceIndex", new Cn(y, _)),
      e.push(M),
      i > or && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function bc(o, e, t) {
  const n = new Oi(o, e, t);
  return (
    (n.texture.mapping = ua),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function Us(o, e, t, n, i) {
  o.viewport.set(e, t, n, i), o.scissor.set(e, t, n, i);
}
function Wg(o, e, t) {
  const n = new Float32Array(Ei),
    i = new R(0, 1, 0);
  return new Ni({
    name: "SphericalGaussianBlur",
    defines: {
      n: Ei,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${o}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: el(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: ai,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Sc() {
  return new Ni({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: el(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: ai,
    depthTest: !1,
    depthWrite: !1,
  });
}
function wc() {
  return new Ni({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: el(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: ai,
    depthTest: !1,
    depthWrite: !1,
  });
}
function el() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Hg(o) {
  let e = new WeakMap(),
    t = null;
  function n(s) {
    if (s && s.isTexture) {
      const l = s.mapping,
        c = l === Zs || l === yo,
        h = l === _r || l === xr;
      if (c || h)
        if (s.isRenderTargetTexture && s.needsPMREMUpdate === !0) {
          s.needsPMREMUpdate = !1;
          let u = e.get(s);
          return (
            t === null && (t = new Mc(o)),
            (u = c ? t.fromEquirectangular(s, u) : t.fromCubemap(s, u)),
            e.set(s, u),
            u.texture
          );
        } else {
          if (e.has(s)) return e.get(s).texture;
          {
            const u = s.image;
            if ((c && u && u.height > 0) || (h && u && i(u))) {
              t === null && (t = new Mc(o));
              const f = c ? t.fromEquirectangular(s) : t.fromCubemap(s);
              return e.set(s, f), s.addEventListener("dispose", r), f.texture;
            } else return null;
          }
        }
    }
    return s;
  }
  function i(s) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) s[h] !== void 0 && l++;
    return l === c;
  }
  function r(s) {
    const l = s.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function Xg(o) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          o.getExtension("WEBGL_depth_texture") ||
          o.getExtension("MOZ_WEBGL_depth_texture") ||
          o.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          o.getExtension("EXT_texture_filter_anisotropic") ||
          o.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          o.getExtension("WEBGL_compressed_texture_s3tc") ||
          o.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          o.getExtension("WEBGL_compressed_texture_pvrtc") ||
          o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = o.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function qg(o, e, t, n) {
  const i = {},
    r = new WeakMap();
  function a(u) {
    const f = u.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    f.removeEventListener("dispose", a), delete i[f.id];
    const p = r.get(f);
    p && (e.remove(p), r.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--;
  }
  function s(u, f) {
    return (
      i[f.id] === !0 ||
        (f.addEventListener("dispose", a),
        (i[f.id] = !0),
        t.memory.geometries++),
      f
    );
  }
  function l(u) {
    const f = u.attributes;
    for (const g in f) e.update(f[g], 34962);
    const p = u.morphAttributes;
    for (const g in p) {
      const d = p[g];
      for (let m = 0, _ = d.length; m < _; m++) e.update(d[m], 34962);
    }
  }
  function c(u) {
    const f = [],
      p = u.index,
      g = u.attributes.position;
    let d = 0;
    if (p !== null) {
      const b = p.array;
      d = p.version;
      for (let x = 0, y = b.length; x < y; x += 3) {
        const M = b[x + 0],
          E = b[x + 1],
          C = b[x + 2];
        f.push(M, E, E, C, C, M);
      }
    } else {
      const b = g.array;
      d = g.version;
      for (let x = 0, y = b.length / 3 - 1; x < y; x += 3) {
        const M = x + 0,
          E = x + 1,
          C = x + 2;
        f.push(M, E, E, C, C, M);
      }
    }
    const m = new (Oh(f) ? Wh : jo)(f, 1);
    m.version = d;
    const _ = r.get(u);
    _ && e.remove(_), r.set(u, m);
  }
  function h(u) {
    const f = r.get(u);
    if (f) {
      const p = u.index;
      p !== null && f.version < p.version && c(u);
    } else c(u);
    return r.get(u);
  }
  return { get: s, update: l, getWireframeAttribute: h };
}
function Yg(o, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function a(f) {
    r = f;
  }
  let s, l;
  function c(f) {
    (s = f.type), (l = f.bytesPerElement);
  }
  function h(f, p) {
    o.drawElements(r, p, s, f * l), t.update(p, r, 1);
  }
  function u(f, p, g) {
    if (g === 0) return;
    let d, m;
    if (i) (d = o), (m = "drawElementsInstanced");
    else if (
      ((d = e.get("ANGLE_instanced_arrays")),
      (m = "drawElementsInstancedANGLE"),
      d === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    d[m](r, p, s, f * l, g), t.update(p, r, g);
  }
  (this.setMode = a),
    (this.setIndex = c),
    (this.render = h),
    (this.renderInstances = u);
}
function jg(o) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, s) {
    switch ((t.calls++, a)) {
      case 4:
        t.triangles += s * (r / 3);
        break;
      case 1:
        t.lines += s * (r / 2);
        break;
      case 3:
        t.lines += s * (r - 1);
        break;
      case 2:
        t.lines += s * r;
        break;
      case 0:
        t.points += s * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function Zg(o, e) {
  return o[0] - e[0];
}
function Kg(o, e) {
  return Math.abs(e[1]) - Math.abs(o[1]);
}
function $g(o, e, t) {
  const n = {},
    i = new Float32Array(8),
    r = new WeakMap(),
    a = new ze(),
    s = [];
  for (let c = 0; c < 8; c++) s[c] = [c, 0];
  function l(c, h, u) {
    const f = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g =
          h.morphAttributes.position ||
          h.morphAttributes.normal ||
          h.morphAttributes.color,
        d = g !== void 0 ? g.length : 0;
      let m = r.get(h);
      if (m === void 0 || m.count !== d) {
        let B = function () {
          F.dispose(), r.delete(h), h.removeEventListener("dispose", B);
        };
        var p = B;
        m !== void 0 && m.texture.dispose();
        const x = h.morphAttributes.position !== void 0,
          y = h.morphAttributes.normal !== void 0,
          M = h.morphAttributes.color !== void 0,
          E = h.morphAttributes.position || [],
          C = h.morphAttributes.normal || [],
          v = h.morphAttributes.color || [];
        let S = 0;
        x === !0 && (S = 1), y === !0 && (S = 2), M === !0 && (S = 3);
        let L = h.attributes.position.count * S,
          V = 1;
        L > e.maxTextureSize &&
          ((V = Math.ceil(L / e.maxTextureSize)), (L = e.maxTextureSize));
        const G = new Float32Array(L * V * 4 * d),
          F = new Uh(G, L, V, d);
        (F.type = ei), (F.needsUpdate = !0);
        const D = S * 4;
        for (let H = 0; H < d; H++) {
          const Z = E[H],
            W = C[H],
            J = v[H],
            K = L * V * 4 * H;
          for (let ue = 0; ue < Z.count; ue++) {
            const U = ue * D;
            x === !0 &&
              (a.fromBufferAttribute(Z, ue),
              (G[K + U + 0] = a.x),
              (G[K + U + 1] = a.y),
              (G[K + U + 2] = a.z),
              (G[K + U + 3] = 0)),
              y === !0 &&
                (a.fromBufferAttribute(W, ue),
                (G[K + U + 4] = a.x),
                (G[K + U + 5] = a.y),
                (G[K + U + 6] = a.z),
                (G[K + U + 7] = 0)),
              M === !0 &&
                (a.fromBufferAttribute(J, ue),
                (G[K + U + 8] = a.x),
                (G[K + U + 9] = a.y),
                (G[K + U + 10] = a.z),
                (G[K + U + 11] = J.itemSize === 4 ? a.w : 1));
          }
        }
        (m = { count: d, texture: F, size: new Se(L, V) }),
          r.set(h, m),
          h.addEventListener("dispose", B);
      }
      let _ = 0;
      for (let x = 0; x < f.length; x++) _ += f[x];
      const b = h.morphTargetsRelative ? 1 : 1 - _;
      u.getUniforms().setValue(o, "morphTargetBaseInfluence", b),
        u.getUniforms().setValue(o, "morphTargetInfluences", f),
        u.getUniforms().setValue(o, "morphTargetsTexture", m.texture, t),
        u.getUniforms().setValue(o, "morphTargetsTextureSize", m.size);
    } else {
      const g = f === void 0 ? 0 : f.length;
      let d = n[h.id];
      if (d === void 0 || d.length !== g) {
        d = [];
        for (let y = 0; y < g; y++) d[y] = [y, 0];
        n[h.id] = d;
      }
      for (let y = 0; y < g; y++) {
        const M = d[y];
        (M[0] = y), (M[1] = f[y]);
      }
      d.sort(Kg);
      for (let y = 0; y < 8; y++)
        y < g && d[y][1]
          ? ((s[y][0] = d[y][0]), (s[y][1] = d[y][1]))
          : ((s[y][0] = Number.MAX_SAFE_INTEGER), (s[y][1] = 0));
      s.sort(Zg);
      const m = h.morphAttributes.position,
        _ = h.morphAttributes.normal;
      let b = 0;
      for (let y = 0; y < 8; y++) {
        const M = s[y],
          E = M[0],
          C = M[1];
        E !== Number.MAX_SAFE_INTEGER && C
          ? (m &&
              h.getAttribute("morphTarget" + y) !== m[E] &&
              h.setAttribute("morphTarget" + y, m[E]),
            _ &&
              h.getAttribute("morphNormal" + y) !== _[E] &&
              h.setAttribute("morphNormal" + y, _[E]),
            (i[y] = C),
            (b += C))
          : (m &&
              h.hasAttribute("morphTarget" + y) === !0 &&
              h.deleteAttribute("morphTarget" + y),
            _ &&
              h.hasAttribute("morphNormal" + y) === !0 &&
              h.deleteAttribute("morphNormal" + y),
            (i[y] = 0));
      }
      const x = h.morphTargetsRelative ? 1 : 1 - b;
      u.getUniforms().setValue(o, "morphTargetBaseInfluence", x),
        u.getUniforms().setValue(o, "morphTargetInfluences", i);
    }
  }
  return { update: l };
}
function Jg(o, e, t, n) {
  let i = new WeakMap();
  function r(l) {
    const c = n.render.frame,
      h = l.geometry,
      u = e.get(l, h);
    return (
      i.get(u) !== c && (e.update(u), i.set(u, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", s) === !1 &&
          l.addEventListener("dispose", s),
        t.update(l.instanceMatrix, 34962),
        l.instanceColor !== null && t.update(l.instanceColor, 34962)),
      u
    );
  }
  function a() {
    i = new WeakMap();
  }
  function s(l) {
    const c = l.target;
    c.removeEventListener("dispose", s),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: a };
}
const qh = new Mt(),
  Yh = new Uh(),
  jh = new Ud(),
  Zh = new Ko(),
  Tc = [],
  Ec = [],
  Ac = new Float32Array(16),
  Cc = new Float32Array(9),
  Pc = new Float32Array(4);
function Cr(o, e, t) {
  const n = o[0];
  if (n <= 0 || n > 0) return o;
  const i = e * t;
  let r = Tc[i];
  if ((r === void 0 && ((r = new Float32Array(i)), (Tc[i] = r)), e !== 0)) {
    n.toArray(r, 0);
    for (let a = 1, s = 0; a !== e; ++a) (s += t), o[a].toArray(r, s);
  }
  return r;
}
function ct(o, e) {
  if (o.length !== e.length) return !1;
  for (let t = 0, n = o.length; t < n; t++) if (o[t] !== e[t]) return !1;
  return !0;
}
function ht(o, e) {
  for (let t = 0, n = e.length; t < n; t++) o[t] = e[t];
}
function da(o, e) {
  let t = Ec[e];
  t === void 0 && ((t = new Int32Array(e)), (Ec[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = o.allocateTextureUnit();
  return t;
}
function Qg(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1f(this.addr, e), (t[0] = e));
}
function e_(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (o.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ct(t, e)) return;
    o.uniform2fv(this.addr, e), ht(t, e);
  }
}
function t_(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (o.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (o.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (ct(t, e)) return;
    o.uniform3fv(this.addr, e), ht(t, e);
  }
}
function n_(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (o.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ct(t, e)) return;
    o.uniform4fv(this.addr, e), ht(t, e);
  }
}
function i_(o, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    o.uniformMatrix2fv(this.addr, !1, e), ht(t, e);
  } else {
    if (ct(t, n)) return;
    Pc.set(n), o.uniformMatrix2fv(this.addr, !1, Pc), ht(t, n);
  }
}
function r_(o, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    o.uniformMatrix3fv(this.addr, !1, e), ht(t, e);
  } else {
    if (ct(t, n)) return;
    Cc.set(n), o.uniformMatrix3fv(this.addr, !1, Cc), ht(t, n);
  }
}
function s_(o, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    o.uniformMatrix4fv(this.addr, !1, e), ht(t, e);
  } else {
    if (ct(t, n)) return;
    Ac.set(n), o.uniformMatrix4fv(this.addr, !1, Ac), ht(t, n);
  }
}
function a_(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1i(this.addr, e), (t[0] = e));
}
function o_(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (o.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ct(t, e)) return;
    o.uniform2iv(this.addr, e), ht(t, e);
  }
}
function l_(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (o.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (ct(t, e)) return;
    o.uniform3iv(this.addr, e), ht(t, e);
  }
}
function c_(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (o.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ct(t, e)) return;
    o.uniform4iv(this.addr, e), ht(t, e);
  }
}
function h_(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1ui(this.addr, e), (t[0] = e));
}
function u_(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (o.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ct(t, e)) return;
    o.uniform2uiv(this.addr, e), ht(t, e);
  }
}
function f_(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (o.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (ct(t, e)) return;
    o.uniform3uiv(this.addr, e), ht(t, e);
  }
}
function d_(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (o.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ct(t, e)) return;
    o.uniform4uiv(this.addr, e), ht(t, e);
  }
}
function p_(o, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || qh, i);
}
function m_(o, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || jh, i);
}
function g_(o, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || Zh, i);
}
function __(o, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || Yh, i);
}
function x_(o) {
  switch (o) {
    case 5126:
      return Qg;
    case 35664:
      return e_;
    case 35665:
      return t_;
    case 35666:
      return n_;
    case 35674:
      return i_;
    case 35675:
      return r_;
    case 35676:
      return s_;
    case 5124:
    case 35670:
      return a_;
    case 35667:
    case 35671:
      return o_;
    case 35668:
    case 35672:
      return l_;
    case 35669:
    case 35673:
      return c_;
    case 5125:
      return h_;
    case 36294:
      return u_;
    case 36295:
      return f_;
    case 36296:
      return d_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return p_;
    case 35679:
    case 36299:
    case 36307:
      return m_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return g_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return __;
  }
}
function v_(o, e) {
  o.uniform1fv(this.addr, e);
}
function y_(o, e) {
  const t = Cr(e, this.size, 2);
  o.uniform2fv(this.addr, t);
}
function M_(o, e) {
  const t = Cr(e, this.size, 3);
  o.uniform3fv(this.addr, t);
}
function b_(o, e) {
  const t = Cr(e, this.size, 4);
  o.uniform4fv(this.addr, t);
}
function S_(o, e) {
  const t = Cr(e, this.size, 4);
  o.uniformMatrix2fv(this.addr, !1, t);
}
function w_(o, e) {
  const t = Cr(e, this.size, 9);
  o.uniformMatrix3fv(this.addr, !1, t);
}
function T_(o, e) {
  const t = Cr(e, this.size, 16);
  o.uniformMatrix4fv(this.addr, !1, t);
}
function E_(o, e) {
  o.uniform1iv(this.addr, e);
}
function A_(o, e) {
  o.uniform2iv(this.addr, e);
}
function C_(o, e) {
  o.uniform3iv(this.addr, e);
}
function P_(o, e) {
  o.uniform4iv(this.addr, e);
}
function L_(o, e) {
  o.uniform1uiv(this.addr, e);
}
function R_(o, e) {
  o.uniform2uiv(this.addr, e);
}
function D_(o, e) {
  o.uniform3uiv(this.addr, e);
}
function I_(o, e) {
  o.uniform4uiv(this.addr, e);
}
function F_(o, e, t) {
  const n = this.cache,
    i = e.length,
    r = da(t, i);
  ct(n, r) || (o.uniform1iv(this.addr, r), ht(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || qh, r[a]);
}
function O_(o, e, t) {
  const n = this.cache,
    i = e.length,
    r = da(t, i);
  ct(n, r) || (o.uniform1iv(this.addr, r), ht(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || jh, r[a]);
}
function N_(o, e, t) {
  const n = this.cache,
    i = e.length,
    r = da(t, i);
  ct(n, r) || (o.uniform1iv(this.addr, r), ht(n, r));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || Zh, r[a]);
}
function k_(o, e, t) {
  const n = this.cache,
    i = e.length,
    r = da(t, i);
  ct(n, r) || (o.uniform1iv(this.addr, r), ht(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || Yh, r[a]);
}
function U_(o) {
  switch (o) {
    case 5126:
      return v_;
    case 35664:
      return y_;
    case 35665:
      return M_;
    case 35666:
      return b_;
    case 35674:
      return S_;
    case 35675:
      return w_;
    case 35676:
      return T_;
    case 5124:
    case 35670:
      return E_;
    case 35667:
    case 35671:
      return A_;
    case 35668:
    case 35672:
      return C_;
    case 35669:
    case 35673:
      return P_;
    case 5125:
      return L_;
    case 36294:
      return R_;
    case 36295:
      return D_;
    case 36296:
      return I_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return F_;
    case 35679:
    case 36299:
    case 36307:
      return O_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return N_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return k_;
  }
}
class z_ {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = x_(t.type));
  }
}
class B_ {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = U_(t.type));
  }
}
class G_ {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const s = i[r];
      s.setValue(e, t[s.id], n);
    }
  }
}
const Qa = /(\w+)(\])?(\[|\.)?/g;
function Lc(o, e) {
  o.seq.push(e), (o.map[e.id] = e);
}
function V_(o, e, t) {
  const n = o.name,
    i = n.length;
  for (Qa.lastIndex = 0; ; ) {
    const r = Qa.exec(n),
      a = Qa.lastIndex;
    let s = r[1];
    const l = r[2] === "]",
      c = r[3];
    if ((l && (s = s | 0), c === void 0 || (c === "[" && a + 2 === i))) {
      Lc(t, c === void 0 ? new z_(s, o, e) : new B_(s, o, e));
      break;
    } else {
      let u = t.map[s];
      u === void 0 && ((u = new G_(s)), Lc(t, u)), (t = u);
    }
  }
}
class Xs {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i),
        a = e.getUniformLocation(t, r.name);
      V_(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const s = t[r],
        l = n[s.id];
      l.needsUpdate !== !1 && s.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Rc(o, e, t) {
  const n = o.createShader(e);
  return o.shaderSource(n, t), o.compileShader(n), n;
}
let W_ = 0;
function H_(o, e) {
  const t = o.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const s = a + 1;
    n.push(`${s === e ? ">" : " "} ${s}: ${t[a]}`);
  }
  return n.join(`
`);
}
function X_(o) {
  switch (o) {
    case Fi:
      return ["Linear", "( value )"];
    case Be:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", o),
        ["Linear", "( value )"]
      );
  }
}
function Dc(o, e, t) {
  const n = o.getShaderParameter(e, 35713),
    i = o.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      H_(o.getShaderSource(e), a)
    );
  } else return i;
}
function q_(o, e) {
  const t = X_(e);
  return "vec4 " + o + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Y_(o, e) {
  let t;
  switch (e) {
    case Vf:
      t = "Linear";
      break;
    case Wf:
      t = "Reinhard";
      break;
    case Hf:
      t = "OptimizedCineon";
      break;
    case Xf:
      t = "ACESFilmic";
      break;
    case qf:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + o + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function j_(o) {
  return [
    o.extensionDerivatives ||
    o.envMapCubeUVHeight ||
    o.bumpMap ||
    o.tangentSpaceNormalMap ||
    o.clearcoatNormalMap ||
    o.flatShading ||
    o.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (o.extensionFragDepth || o.logarithmicDepthBuffer) &&
    o.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    o.extensionDrawBuffers && o.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (o.extensionShaderTextureLOD || o.envMap || o.transmission) &&
    o.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(Hr).join(`
`);
}
function Z_(o) {
  const e = [];
  for (const t in o) {
    const n = o[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function K_(o, e) {
  const t = {},
    n = o.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const r = o.getActiveAttrib(e, i),
      a = r.name;
    let s = 1;
    r.type === 35674 && (s = 2),
      r.type === 35675 && (s = 3),
      r.type === 35676 && (s = 4),
      (t[a] = {
        type: r.type,
        location: o.getAttribLocation(e, a),
        locationSize: s,
      });
  }
  return t;
}
function Hr(o) {
  return o !== "";
}
function Ic(o, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return o
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Fc(o, e) {
  return o
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const $_ = /^[ \t]*#include +<([\w\d./]+)>/gm;
function wo(o) {
  return o.replace($_, J_);
}
function J_(o, e) {
  const t = Te[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return wo(t);
}
const Q_ =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Oc(o) {
  return o.replace(Q_, e0);
}
function e0(o, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Nc(o) {
  let e =
    "precision " +
    o.precision +
    ` float;
precision ` +
    o.precision +
    " int;";
  return (
    o.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : o.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : o.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function t0(o) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    o.shadowMapType === Eh
      ? (e = "SHADOWMAP_TYPE_PCF")
      : o.shadowMapType === Ah
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : o.shadowMapType === Vr && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function n0(o) {
  let e = "ENVMAP_TYPE_CUBE";
  if (o.envMap)
    switch (o.envMapMode) {
      case _r:
      case xr:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case ua:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function i0(o) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (o.envMap)
    switch (o.envMapMode) {
      case xr:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function r0(o) {
  let e = "ENVMAP_BLENDING_NONE";
  if (o.envMap)
    switch (o.combine) {
      case ha:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Bf:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Gf:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function s0(o) {
  const e = o.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function a0(o, e, t, n) {
  const i = o.getContext(),
    r = t.defines;
  let a = t.vertexShader,
    s = t.fragmentShader;
  const l = t0(t),
    c = n0(t),
    h = i0(t),
    u = r0(t),
    f = s0(t),
    p = t.isWebGL2 ? "" : j_(t),
    g = Z_(r),
    d = i.createProgram();
  let m,
    _,
    b = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((m = [g].filter(Hr).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (_ = [p, g].filter(Hr).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((m = [
        Nc(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + h : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.displacementMap && t.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Hr).join(`
`)),
      (_ = [
        p,
        Nc(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + h : "",
        t.envMap ? "#define " + u : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Hn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Hn ? Te.tonemapping_pars_fragment : "",
        t.toneMapping !== Hn ? Y_("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Te.encodings_pars_fragment,
        q_("linearToOutputTexel", t.outputEncoding),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Hr).join(`
`))),
    (a = wo(a)),
    (a = Ic(a, t)),
    (a = Fc(a, t)),
    (s = wo(s)),
    (s = Ic(s, t)),
    (s = Fc(s, t)),
    (a = Oc(a)),
    (s = Oc(s)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((b = `#version 300 es
`),
      (m =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        m),
      (_ =
        [
          "#define varying in",
          t.glslVersion === sc
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === sc ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        _));
  const x = b + m + a,
    y = b + _ + s,
    M = Rc(i, 35633, x),
    E = Rc(i, 35632, y);
  if (
    (i.attachShader(d, M),
    i.attachShader(d, E),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(d, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(d, 0, "position"),
    i.linkProgram(d),
    o.debug.checkShaderErrors)
  ) {
    const S = i.getProgramInfoLog(d).trim(),
      L = i.getShaderInfoLog(M).trim(),
      V = i.getShaderInfoLog(E).trim();
    let G = !0,
      F = !0;
    if (i.getProgramParameter(d, 35714) === !1) {
      G = !1;
      const D = Dc(i, M, "vertex"),
        B = Dc(i, E, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          i.getError() +
          " - VALIDATE_STATUS " +
          i.getProgramParameter(d, 35715) +
          `

Program Info Log: ` +
          S +
          `
` +
          D +
          `
` +
          B
      );
    } else
      S !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", S)
        : (L === "" || V === "") && (F = !1);
    F &&
      (this.diagnostics = {
        runnable: G,
        programLog: S,
        vertexShader: { log: L, prefix: m },
        fragmentShader: { log: V, prefix: _ },
      });
  }
  i.deleteShader(M), i.deleteShader(E);
  let C;
  this.getUniforms = function () {
    return C === void 0 && (C = new Xs(i, d)), C;
  };
  let v;
  return (
    (this.getAttributes = function () {
      return v === void 0 && (v = K_(i, d)), v;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(d),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = W_++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = d),
    (this.vertexShader = M),
    (this.fragmentShader = E),
    this
  );
}
let o0 = 0;
class l0 {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(i) === !1 && (a.add(i), i.usedTimes++),
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new c0(e)), t.set(e, n)), n;
  }
}
class c0 {
  constructor(e) {
    (this.id = o0++), (this.code = e), (this.usedTimes = 0);
  }
}
function h0(o, e, t, n, i, r, a) {
  const s = new Bh(),
    l = new l0(),
    c = [],
    h = i.isWebGL2,
    u = i.logarithmicDepthBuffer,
    f = i.vertexTextures;
  let p = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function d(v, S, L, V, G) {
    const F = V.fog,
      D = G.geometry,
      B = v.isMeshStandardMaterial ? V.environment : null,
      H = (v.isMeshStandardMaterial ? t : e).get(v.envMap || B),
      Z = H && H.mapping === ua ? H.image.height : null,
      W = g[v.type];
    v.precision !== null &&
      ((p = i.getMaxPrecision(v.precision)),
      p !== v.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          v.precision,
          "not supported, using",
          p,
          "instead."
        ));
    const J =
        D.morphAttributes.position ||
        D.morphAttributes.normal ||
        D.morphAttributes.color,
      K = J !== void 0 ? J.length : 0;
    let ue = 0;
    D.morphAttributes.position !== void 0 && (ue = 1),
      D.morphAttributes.normal !== void 0 && (ue = 2),
      D.morphAttributes.color !== void 0 && (ue = 3);
    let U, $, ee, O;
    if (W) {
      const we = wn[W];
      (U = we.vertexShader), ($ = we.fragmentShader);
    } else
      (U = v.vertexShader),
        ($ = v.fragmentShader),
        l.update(v),
        (ee = l.getVertexShaderID(v)),
        (O = l.getFragmentShaderID(v));
    const le = o.getRenderTarget(),
      ce = v.alphaTest > 0,
      he = v.clearcoat > 0,
      fe = v.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: W,
      shaderName: v.type,
      vertexShader: U,
      fragmentShader: $,
      defines: v.defines,
      customVertexShaderID: ee,
      customFragmentShaderID: O,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: p,
      instancing: G.isInstancedMesh === !0,
      instancingColor: G.isInstancedMesh === !0 && G.instanceColor !== null,
      supportsVertexTextures: f,
      outputEncoding:
        le === null
          ? o.outputEncoding
          : le.isXRRenderTarget === !0
          ? le.texture.encoding
          : Fi,
      map: !!v.map,
      matcap: !!v.matcap,
      envMap: !!H,
      envMapMode: H && H.mapping,
      envMapCubeUVHeight: Z,
      lightMap: !!v.lightMap,
      aoMap: !!v.aoMap,
      emissiveMap: !!v.emissiveMap,
      bumpMap: !!v.bumpMap,
      normalMap: !!v.normalMap,
      objectSpaceNormalMap: v.normalMapType === gd,
      tangentSpaceNormalMap: v.normalMapType === qo,
      decodeVideoTexture:
        !!v.map && v.map.isVideoTexture === !0 && v.map.encoding === Be,
      clearcoat: he,
      clearcoatMap: he && !!v.clearcoatMap,
      clearcoatRoughnessMap: he && !!v.clearcoatRoughnessMap,
      clearcoatNormalMap: he && !!v.clearcoatNormalMap,
      iridescence: fe,
      iridescenceMap: fe && !!v.iridescenceMap,
      iridescenceThicknessMap: fe && !!v.iridescenceThicknessMap,
      displacementMap: !!v.displacementMap,
      roughnessMap: !!v.roughnessMap,
      metalnessMap: !!v.metalnessMap,
      specularMap: !!v.specularMap,
      specularIntensityMap: !!v.specularIntensityMap,
      specularColorMap: !!v.specularColorMap,
      opaque: v.transparent === !1 && v.blending === ur,
      alphaMap: !!v.alphaMap,
      alphaTest: ce,
      gradientMap: !!v.gradientMap,
      sheen: v.sheen > 0,
      sheenColorMap: !!v.sheenColorMap,
      sheenRoughnessMap: !!v.sheenRoughnessMap,
      transmission: v.transmission > 0,
      transmissionMap: !!v.transmissionMap,
      thicknessMap: !!v.thicknessMap,
      combine: v.combine,
      vertexTangents: !!v.normalMap && !!D.attributes.tangent,
      vertexColors: v.vertexColors,
      vertexAlphas:
        v.vertexColors === !0 &&
        !!D.attributes.color &&
        D.attributes.color.itemSize === 4,
      vertexUvs:
        !!v.map ||
        !!v.bumpMap ||
        !!v.normalMap ||
        !!v.specularMap ||
        !!v.alphaMap ||
        !!v.emissiveMap ||
        !!v.roughnessMap ||
        !!v.metalnessMap ||
        !!v.clearcoatMap ||
        !!v.clearcoatRoughnessMap ||
        !!v.clearcoatNormalMap ||
        !!v.iridescenceMap ||
        !!v.iridescenceThicknessMap ||
        !!v.displacementMap ||
        !!v.transmissionMap ||
        !!v.thicknessMap ||
        !!v.specularIntensityMap ||
        !!v.specularColorMap ||
        !!v.sheenColorMap ||
        !!v.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          v.map ||
          v.bumpMap ||
          v.normalMap ||
          v.specularMap ||
          v.alphaMap ||
          v.emissiveMap ||
          v.roughnessMap ||
          v.metalnessMap ||
          v.clearcoatNormalMap ||
          v.iridescenceMap ||
          v.iridescenceThicknessMap ||
          v.transmission > 0 ||
          v.transmissionMap ||
          v.thicknessMap ||
          v.specularIntensityMap ||
          v.specularColorMap ||
          v.sheen > 0 ||
          v.sheenColorMap ||
          v.sheenRoughnessMap
        ) && !!v.displacementMap,
      fog: !!F,
      useFog: v.fog === !0,
      fogExp2: F && F.isFogExp2,
      flatShading: !!v.flatShading,
      sizeAttenuation: v.sizeAttenuation,
      logarithmicDepthBuffer: u,
      skinning: G.isSkinnedMesh === !0,
      morphTargets: D.morphAttributes.position !== void 0,
      morphNormals: D.morphAttributes.normal !== void 0,
      morphColors: D.morphAttributes.color !== void 0,
      morphTargetsCount: K,
      morphTextureStride: ue,
      numDirLights: S.directional.length,
      numPointLights: S.point.length,
      numSpotLights: S.spot.length,
      numSpotLightMaps: S.spotLightMap.length,
      numRectAreaLights: S.rectArea.length,
      numHemiLights: S.hemi.length,
      numDirLightShadows: S.directionalShadowMap.length,
      numPointLightShadows: S.pointShadowMap.length,
      numSpotLightShadows: S.spotShadowMap.length,
      numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: o.shadowMap.enabled && L.length > 0,
      shadowMapType: o.shadowMap.type,
      toneMapping: v.toneMapped ? o.toneMapping : Hn,
      useLegacyLights: o.useLegacyLights,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === Qn,
      flipSided: v.side === Jt,
      useDepthPacking: !!v.depthPacking,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionDerivatives: v.extensions && v.extensions.derivatives,
      extensionFragDepth: v.extensions && v.extensions.fragDepth,
      extensionDrawBuffers: v.extensions && v.extensions.drawBuffers,
      extensionShaderTextureLOD: v.extensions && v.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: v.customProgramCacheKey(),
    };
  }
  function m(v) {
    const S = [];
    if (
      (v.shaderID
        ? S.push(v.shaderID)
        : (S.push(v.customVertexShaderID), S.push(v.customFragmentShaderID)),
      v.defines !== void 0)
    )
      for (const L in v.defines) S.push(L), S.push(v.defines[L]);
    return (
      v.isRawShaderMaterial === !1 &&
        (_(S, v), b(S, v), S.push(o.outputEncoding)),
      S.push(v.customProgramCacheKey),
      S.join()
    );
  }
  function _(v, S) {
    v.push(S.precision),
      v.push(S.outputEncoding),
      v.push(S.envMapMode),
      v.push(S.envMapCubeUVHeight),
      v.push(S.combine),
      v.push(S.vertexUvs),
      v.push(S.fogExp2),
      v.push(S.sizeAttenuation),
      v.push(S.morphTargetsCount),
      v.push(S.morphAttributeCount),
      v.push(S.numDirLights),
      v.push(S.numPointLights),
      v.push(S.numSpotLights),
      v.push(S.numSpotLightMaps),
      v.push(S.numHemiLights),
      v.push(S.numRectAreaLights),
      v.push(S.numDirLightShadows),
      v.push(S.numPointLightShadows),
      v.push(S.numSpotLightShadows),
      v.push(S.numSpotLightShadowsWithMaps),
      v.push(S.shadowMapType),
      v.push(S.toneMapping),
      v.push(S.numClippingPlanes),
      v.push(S.numClipIntersection),
      v.push(S.depthPacking);
  }
  function b(v, S) {
    s.disableAll(),
      S.isWebGL2 && s.enable(0),
      S.supportsVertexTextures && s.enable(1),
      S.instancing && s.enable(2),
      S.instancingColor && s.enable(3),
      S.map && s.enable(4),
      S.matcap && s.enable(5),
      S.envMap && s.enable(6),
      S.lightMap && s.enable(7),
      S.aoMap && s.enable(8),
      S.emissiveMap && s.enable(9),
      S.bumpMap && s.enable(10),
      S.normalMap && s.enable(11),
      S.objectSpaceNormalMap && s.enable(12),
      S.tangentSpaceNormalMap && s.enable(13),
      S.clearcoat && s.enable(14),
      S.clearcoatMap && s.enable(15),
      S.clearcoatRoughnessMap && s.enable(16),
      S.clearcoatNormalMap && s.enable(17),
      S.iridescence && s.enable(18),
      S.iridescenceMap && s.enable(19),
      S.iridescenceThicknessMap && s.enable(20),
      S.displacementMap && s.enable(21),
      S.specularMap && s.enable(22),
      S.roughnessMap && s.enable(23),
      S.metalnessMap && s.enable(24),
      S.gradientMap && s.enable(25),
      S.alphaMap && s.enable(26),
      S.alphaTest && s.enable(27),
      S.vertexColors && s.enable(28),
      S.vertexAlphas && s.enable(29),
      S.vertexUvs && s.enable(30),
      S.vertexTangents && s.enable(31),
      S.uvsVertexOnly && s.enable(32),
      v.push(s.mask),
      s.disableAll(),
      S.fog && s.enable(0),
      S.useFog && s.enable(1),
      S.flatShading && s.enable(2),
      S.logarithmicDepthBuffer && s.enable(3),
      S.skinning && s.enable(4),
      S.morphTargets && s.enable(5),
      S.morphNormals && s.enable(6),
      S.morphColors && s.enable(7),
      S.premultipliedAlpha && s.enable(8),
      S.shadowMapEnabled && s.enable(9),
      S.useLegacyLights && s.enable(10),
      S.doubleSided && s.enable(11),
      S.flipSided && s.enable(12),
      S.useDepthPacking && s.enable(13),
      S.dithering && s.enable(14),
      S.specularIntensityMap && s.enable(15),
      S.specularColorMap && s.enable(16),
      S.transmission && s.enable(17),
      S.transmissionMap && s.enable(18),
      S.thicknessMap && s.enable(19),
      S.sheen && s.enable(20),
      S.sheenColorMap && s.enable(21),
      S.sheenRoughnessMap && s.enable(22),
      S.decodeVideoTexture && s.enable(23),
      S.opaque && s.enable(24),
      v.push(s.mask);
  }
  function x(v) {
    const S = g[v.type];
    let L;
    if (S) {
      const V = wn[S];
      L = Kd.clone(V.uniforms);
    } else L = v.uniforms;
    return L;
  }
  function y(v, S) {
    let L;
    for (let V = 0, G = c.length; V < G; V++) {
      const F = c[V];
      if (F.cacheKey === S) {
        (L = F), ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && ((L = new a0(o, S, v, r)), c.push(L)), L;
  }
  function M(v) {
    if (--v.usedTimes === 0) {
      const S = c.indexOf(v);
      (c[S] = c[c.length - 1]), c.pop(), v.destroy();
    }
  }
  function E(v) {
    l.remove(v);
  }
  function C() {
    l.dispose();
  }
  return {
    getParameters: d,
    getProgramCacheKey: m,
    getUniforms: x,
    acquireProgram: y,
    releaseProgram: M,
    releaseShaderCache: E,
    programs: c,
    dispose: C,
  };
}
function u0() {
  let o = new WeakMap();
  function e(r) {
    let a = o.get(r);
    return a === void 0 && ((a = {}), o.set(r, a)), a;
  }
  function t(r) {
    o.delete(r);
  }
  function n(r, a, s) {
    o.get(r)[a] = s;
  }
  function i() {
    o = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function f0(o, e) {
  return o.groupOrder !== e.groupOrder
    ? o.groupOrder - e.groupOrder
    : o.renderOrder !== e.renderOrder
    ? o.renderOrder - e.renderOrder
    : o.material.id !== e.material.id
    ? o.material.id - e.material.id
    : o.z !== e.z
    ? o.z - e.z
    : o.id - e.id;
}
function kc(o, e) {
  return o.groupOrder !== e.groupOrder
    ? o.groupOrder - e.groupOrder
    : o.renderOrder !== e.renderOrder
    ? o.renderOrder - e.renderOrder
    : o.z !== e.z
    ? e.z - o.z
    : o.id - e.id;
}
function Uc() {
  const o = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function r() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function a(u, f, p, g, d, m) {
    let _ = o[e];
    return (
      _ === void 0
        ? ((_ = {
            id: u.id,
            object: u,
            geometry: f,
            material: p,
            groupOrder: g,
            renderOrder: u.renderOrder,
            z: d,
            group: m,
          }),
          (o[e] = _))
        : ((_.id = u.id),
          (_.object = u),
          (_.geometry = f),
          (_.material = p),
          (_.groupOrder = g),
          (_.renderOrder = u.renderOrder),
          (_.z = d),
          (_.group = m)),
      e++,
      _
    );
  }
  function s(u, f, p, g, d, m) {
    const _ = a(u, f, p, g, d, m);
    p.transmission > 0
      ? n.push(_)
      : p.transparent === !0
      ? i.push(_)
      : t.push(_);
  }
  function l(u, f, p, g, d, m) {
    const _ = a(u, f, p, g, d, m);
    p.transmission > 0
      ? n.unshift(_)
      : p.transparent === !0
      ? i.unshift(_)
      : t.unshift(_);
  }
  function c(u, f) {
    t.length > 1 && t.sort(u || f0),
      n.length > 1 && n.sort(f || kc),
      i.length > 1 && i.sort(f || kc);
  }
  function h() {
    for (let u = e, f = o.length; u < f; u++) {
      const p = o[u];
      if (p.id === null) break;
      (p.id = null),
        (p.object = null),
        (p.geometry = null),
        (p.material = null),
        (p.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: s,
    unshift: l,
    finish: h,
    sort: c,
  };
}
function d0() {
  let o = new WeakMap();
  function e(n, i) {
    const r = o.get(n);
    let a;
    return (
      r === void 0
        ? ((a = new Uc()), o.set(n, [a]))
        : i >= r.length
        ? ((a = new Uc()), r.push(a))
        : (a = r[i]),
      a
    );
  }
  function t() {
    o = new WeakMap();
  }
  return { get: e, dispose: t };
}
function p0() {
  const o = {};
  return {
    get: function (e) {
      if (o[e.id] !== void 0) return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new R(), color: new Me() };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new Me(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new R(), color: new Me(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new R(), skyColor: new Me(), groundColor: new Me() };
          break;
        case "RectAreaLight":
          t = {
            color: new Me(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R(),
          };
          break;
      }
      return (o[e.id] = t), t;
    },
  };
}
function m0() {
  const o = {};
  return {
    get: function (e) {
      if (o[e.id] !== void 0) return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Se(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Se(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Se(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (o[e.id] = t), t;
    },
  };
}
let g0 = 0;
function _0(o, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (o.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (o.map ? 1 : 0)
  );
}
function x0(o, e) {
  const t = new p0(),
    n = m0(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let h = 0; h < 9; h++) i.probe.push(new R());
  const r = new R(),
    a = new ve(),
    s = new ve();
  function l(h, u) {
    let f = 0,
      p = 0,
      g = 0;
    for (let V = 0; V < 9; V++) i.probe[V].set(0, 0, 0);
    let d = 0,
      m = 0,
      _ = 0,
      b = 0,
      x = 0,
      y = 0,
      M = 0,
      E = 0,
      C = 0,
      v = 0;
    h.sort(_0);
    const S = u === !0 ? Math.PI : 1;
    for (let V = 0, G = h.length; V < G; V++) {
      const F = h[V],
        D = F.color,
        B = F.intensity,
        H = F.distance,
        Z = F.shadow && F.shadow.map ? F.shadow.map.texture : null;
      if (F.isAmbientLight)
        (f += D.r * B * S), (p += D.g * B * S), (g += D.b * B * S);
      else if (F.isLightProbe)
        for (let W = 0; W < 9; W++)
          i.probe[W].addScaledVector(F.sh.coefficients[W], B);
      else if (F.isDirectionalLight) {
        const W = t.get(F);
        if (
          (W.color.copy(F.color).multiplyScalar(F.intensity * S), F.castShadow)
        ) {
          const J = F.shadow,
            K = n.get(F);
          (K.shadowBias = J.bias),
            (K.shadowNormalBias = J.normalBias),
            (K.shadowRadius = J.radius),
            (K.shadowMapSize = J.mapSize),
            (i.directionalShadow[d] = K),
            (i.directionalShadowMap[d] = Z),
            (i.directionalShadowMatrix[d] = F.shadow.matrix),
            y++;
        }
        (i.directional[d] = W), d++;
      } else if (F.isSpotLight) {
        const W = t.get(F);
        W.position.setFromMatrixPosition(F.matrixWorld),
          W.color.copy(D).multiplyScalar(B * S),
          (W.distance = H),
          (W.coneCos = Math.cos(F.angle)),
          (W.penumbraCos = Math.cos(F.angle * (1 - F.penumbra))),
          (W.decay = F.decay),
          (i.spot[_] = W);
        const J = F.shadow;
        if (
          (F.map &&
            ((i.spotLightMap[C] = F.map),
            C++,
            J.updateMatrices(F),
            F.castShadow && v++),
          (i.spotLightMatrix[_] = J.matrix),
          F.castShadow)
        ) {
          const K = n.get(F);
          (K.shadowBias = J.bias),
            (K.shadowNormalBias = J.normalBias),
            (K.shadowRadius = J.radius),
            (K.shadowMapSize = J.mapSize),
            (i.spotShadow[_] = K),
            (i.spotShadowMap[_] = Z),
            E++;
        }
        _++;
      } else if (F.isRectAreaLight) {
        const W = t.get(F);
        W.color.copy(D).multiplyScalar(B),
          W.halfWidth.set(F.width * 0.5, 0, 0),
          W.halfHeight.set(0, F.height * 0.5, 0),
          (i.rectArea[b] = W),
          b++;
      } else if (F.isPointLight) {
        const W = t.get(F);
        if (
          (W.color.copy(F.color).multiplyScalar(F.intensity * S),
          (W.distance = F.distance),
          (W.decay = F.decay),
          F.castShadow)
        ) {
          const J = F.shadow,
            K = n.get(F);
          (K.shadowBias = J.bias),
            (K.shadowNormalBias = J.normalBias),
            (K.shadowRadius = J.radius),
            (K.shadowMapSize = J.mapSize),
            (K.shadowCameraNear = J.camera.near),
            (K.shadowCameraFar = J.camera.far),
            (i.pointShadow[m] = K),
            (i.pointShadowMap[m] = Z),
            (i.pointShadowMatrix[m] = F.shadow.matrix),
            M++;
        }
        (i.point[m] = W), m++;
      } else if (F.isHemisphereLight) {
        const W = t.get(F);
        W.skyColor.copy(F.color).multiplyScalar(B * S),
          W.groundColor.copy(F.groundColor).multiplyScalar(B * S),
          (i.hemi[x] = W),
          x++;
      }
    }
    b > 0 &&
      (e.isWebGL2 || o.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = ie.LTC_FLOAT_1), (i.rectAreaLTC2 = ie.LTC_FLOAT_2))
        : o.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = ie.LTC_HALF_1), (i.rectAreaLTC2 = ie.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = f),
      (i.ambient[1] = p),
      (i.ambient[2] = g);
    const L = i.hash;
    (L.directionalLength !== d ||
      L.pointLength !== m ||
      L.spotLength !== _ ||
      L.rectAreaLength !== b ||
      L.hemiLength !== x ||
      L.numDirectionalShadows !== y ||
      L.numPointShadows !== M ||
      L.numSpotShadows !== E ||
      L.numSpotMaps !== C) &&
      ((i.directional.length = d),
      (i.spot.length = _),
      (i.rectArea.length = b),
      (i.point.length = m),
      (i.hemi.length = x),
      (i.directionalShadow.length = y),
      (i.directionalShadowMap.length = y),
      (i.pointShadow.length = M),
      (i.pointShadowMap.length = M),
      (i.spotShadow.length = E),
      (i.spotShadowMap.length = E),
      (i.directionalShadowMatrix.length = y),
      (i.pointShadowMatrix.length = M),
      (i.spotLightMatrix.length = E + C - v),
      (i.spotLightMap.length = C),
      (i.numSpotLightShadowsWithMaps = v),
      (L.directionalLength = d),
      (L.pointLength = m),
      (L.spotLength = _),
      (L.rectAreaLength = b),
      (L.hemiLength = x),
      (L.numDirectionalShadows = y),
      (L.numPointShadows = M),
      (L.numSpotShadows = E),
      (L.numSpotMaps = C),
      (i.version = g0++));
  }
  function c(h, u) {
    let f = 0,
      p = 0,
      g = 0,
      d = 0,
      m = 0;
    const _ = u.matrixWorldInverse;
    for (let b = 0, x = h.length; b < x; b++) {
      const y = h[b];
      if (y.isDirectionalLight) {
        const M = i.directional[f];
        M.direction.setFromMatrixPosition(y.matrixWorld),
          r.setFromMatrixPosition(y.target.matrixWorld),
          M.direction.sub(r),
          M.direction.transformDirection(_),
          f++;
      } else if (y.isSpotLight) {
        const M = i.spot[g];
        M.position.setFromMatrixPosition(y.matrixWorld),
          M.position.applyMatrix4(_),
          M.direction.setFromMatrixPosition(y.matrixWorld),
          r.setFromMatrixPosition(y.target.matrixWorld),
          M.direction.sub(r),
          M.direction.transformDirection(_),
          g++;
      } else if (y.isRectAreaLight) {
        const M = i.rectArea[d];
        M.position.setFromMatrixPosition(y.matrixWorld),
          M.position.applyMatrix4(_),
          s.identity(),
          a.copy(y.matrixWorld),
          a.premultiply(_),
          s.extractRotation(a),
          M.halfWidth.set(y.width * 0.5, 0, 0),
          M.halfHeight.set(0, y.height * 0.5, 0),
          M.halfWidth.applyMatrix4(s),
          M.halfHeight.applyMatrix4(s),
          d++;
      } else if (y.isPointLight) {
        const M = i.point[p];
        M.position.setFromMatrixPosition(y.matrixWorld),
          M.position.applyMatrix4(_),
          p++;
      } else if (y.isHemisphereLight) {
        const M = i.hemi[m];
        M.direction.setFromMatrixPosition(y.matrixWorld),
          M.direction.transformDirection(_),
          m++;
      }
    }
  }
  return { setup: l, setupView: c, state: i };
}
function zc(o, e) {
  const t = new x0(o, e),
    n = [],
    i = [];
  function r() {
    (n.length = 0), (i.length = 0);
  }
  function a(u) {
    n.push(u);
  }
  function s(u) {
    i.push(u);
  }
  function l(u) {
    t.setup(n, u);
  }
  function c(u) {
    t.setupView(n, u);
  }
  return {
    init: r,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: s,
  };
}
function v0(o, e) {
  let t = new WeakMap();
  function n(r, a = 0) {
    const s = t.get(r);
    let l;
    return (
      s === void 0
        ? ((l = new zc(o, e)), t.set(r, [l]))
        : a >= s.length
        ? ((l = new zc(o, e)), s.push(l))
        : (l = s[a]),
      l
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class y0 extends Ui {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = pd),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class M0 extends Ui {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new R()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const b0 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  S0 = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function w0(o, e, t) {
  let n = new $o();
  const i = new Se(),
    r = new Se(),
    a = new ze(),
    s = new y0({ depthPacking: md }),
    l = new M0(),
    c = {},
    h = t.maxTextureSize,
    u = { [ci]: Jt, [Jt]: ci, [Qn]: Qn },
    f = new Ni({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Se() },
        radius: { value: 4 },
      },
      vertexShader: b0,
      fragmentShader: S0,
    }),
    p = f.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new kt();
  g.setAttribute(
    "position",
    new Cn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const d = new hn(g, f),
    m = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Eh),
    (this.render = function (y, M, E) {
      if (
        m.enabled === !1 ||
        (m.autoUpdate === !1 && m.needsUpdate === !1) ||
        y.length === 0
      )
        return;
      const C = o.getRenderTarget(),
        v = o.getActiveCubeFace(),
        S = o.getActiveMipmapLevel(),
        L = o.state;
      L.setBlending(ai),
        L.buffers.color.setClear(1, 1, 1, 1),
        L.buffers.depth.setTest(!0),
        L.setScissorTest(!1);
      for (let V = 0, G = y.length; V < G; V++) {
        const F = y[V],
          D = F.shadow;
        if (D === void 0) {
          console.warn("THREE.WebGLShadowMap:", F, "has no shadow.");
          continue;
        }
        if (D.autoUpdate === !1 && D.needsUpdate === !1) continue;
        i.copy(D.mapSize);
        const B = D.getFrameExtents();
        if (
          (i.multiply(B),
          r.copy(D.mapSize),
          (i.x > h || i.y > h) &&
            (i.x > h &&
              ((r.x = Math.floor(h / B.x)),
              (i.x = r.x * B.x),
              (D.mapSize.x = r.x)),
            i.y > h &&
              ((r.y = Math.floor(h / B.y)),
              (i.y = r.y * B.y),
              (D.mapSize.y = r.y))),
          D.map === null)
        ) {
          const Z = this.type !== Vr ? { minFilter: xt, magFilter: xt } : {};
          (D.map = new Oi(i.x, i.y, Z)),
            (D.map.texture.name = F.name + ".shadowMap"),
            D.camera.updateProjectionMatrix();
        }
        o.setRenderTarget(D.map), o.clear();
        const H = D.getViewportCount();
        for (let Z = 0; Z < H; Z++) {
          const W = D.getViewport(Z);
          a.set(r.x * W.x, r.y * W.y, r.x * W.z, r.y * W.w),
            L.viewport(a),
            D.updateMatrices(F, Z),
            (n = D.getFrustum()),
            x(M, E, D.camera, F, this.type);
        }
        D.isPointLightShadow !== !0 && this.type === Vr && _(D, E),
          (D.needsUpdate = !1);
      }
      (m.needsUpdate = !1), o.setRenderTarget(C, v, S);
    });
  function _(y, M) {
    const E = e.update(d);
    f.defines.VSM_SAMPLES !== y.blurSamples &&
      ((f.defines.VSM_SAMPLES = y.blurSamples),
      (p.defines.VSM_SAMPLES = y.blurSamples),
      (f.needsUpdate = !0),
      (p.needsUpdate = !0)),
      y.mapPass === null && (y.mapPass = new Oi(i.x, i.y)),
      (f.uniforms.shadow_pass.value = y.map.texture),
      (f.uniforms.resolution.value = y.mapSize),
      (f.uniforms.radius.value = y.radius),
      o.setRenderTarget(y.mapPass),
      o.clear(),
      o.renderBufferDirect(M, null, E, f, d, null),
      (p.uniforms.shadow_pass.value = y.mapPass.texture),
      (p.uniforms.resolution.value = y.mapSize),
      (p.uniforms.radius.value = y.radius),
      o.setRenderTarget(y.map),
      o.clear(),
      o.renderBufferDirect(M, null, E, p, d, null);
  }
  function b(y, M, E, C, v, S) {
    let L = null;
    const V =
      E.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (V !== void 0) L = V;
    else if (
      ((L = E.isPointLight === !0 ? l : s),
      (o.localClippingEnabled &&
        M.clipShadows === !0 &&
        Array.isArray(M.clippingPlanes) &&
        M.clippingPlanes.length !== 0) ||
        (M.displacementMap && M.displacementScale !== 0) ||
        (M.alphaMap && M.alphaTest > 0) ||
        (M.map && M.alphaTest > 0))
    ) {
      const G = L.uuid,
        F = M.uuid;
      let D = c[G];
      D === void 0 && ((D = {}), (c[G] = D));
      let B = D[F];
      B === void 0 && ((B = L.clone()), (D[F] = B)), (L = B);
    }
    return (
      (L.visible = M.visible),
      (L.wireframe = M.wireframe),
      S === Vr
        ? (L.side = M.shadowSide !== null ? M.shadowSide : M.side)
        : (L.side = M.shadowSide !== null ? M.shadowSide : u[M.side]),
      (L.alphaMap = M.alphaMap),
      (L.alphaTest = M.alphaTest),
      (L.map = M.map),
      (L.clipShadows = M.clipShadows),
      (L.clippingPlanes = M.clippingPlanes),
      (L.clipIntersection = M.clipIntersection),
      (L.displacementMap = M.displacementMap),
      (L.displacementScale = M.displacementScale),
      (L.displacementBias = M.displacementBias),
      (L.wireframeLinewidth = M.wireframeLinewidth),
      (L.linewidth = M.linewidth),
      E.isPointLight === !0 &&
        L.isMeshDistanceMaterial === !0 &&
        (L.referencePosition.setFromMatrixPosition(E.matrixWorld),
        (L.nearDistance = C),
        (L.farDistance = v)),
      L
    );
  }
  function x(y, M, E, C, v) {
    if (y.visible === !1) return;
    if (
      y.layers.test(M.layers) &&
      (y.isMesh || y.isLine || y.isPoints) &&
      (y.castShadow || (y.receiveShadow && v === Vr)) &&
      (!y.frustumCulled || n.intersectsObject(y))
    ) {
      y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, y.matrixWorld);
      const V = e.update(y),
        G = y.material;
      if (Array.isArray(G)) {
        const F = V.groups;
        for (let D = 0, B = F.length; D < B; D++) {
          const H = F[D],
            Z = G[H.materialIndex];
          if (Z && Z.visible) {
            const W = b(y, Z, C, E.near, E.far, v);
            o.renderBufferDirect(E, null, V, W, y, H);
          }
        }
      } else if (G.visible) {
        const F = b(y, G, C, E.near, E.far, v);
        o.renderBufferDirect(E, null, V, F, y, null);
      }
    }
    const L = y.children;
    for (let V = 0, G = L.length; V < G; V++) x(L[V], M, E, C, v);
  }
}
function T0(o, e, t) {
  const n = t.isWebGL2;
  function i() {
    let I = !1;
    const Y = new ze();
    let Q = null;
    const oe = new ze(0, 0, 0, 0);
    return {
      setMask: function (de) {
        Q !== de && !I && (o.colorMask(de, de, de, de), (Q = de));
      },
      setLocked: function (de) {
        I = de;
      },
      setClear: function (de, Xe, pt, Lt, yn) {
        yn === !0 && ((de *= Lt), (Xe *= Lt), (pt *= Lt)),
          Y.set(de, Xe, pt, Lt),
          oe.equals(Y) === !1 && (o.clearColor(de, Xe, pt, Lt), oe.copy(Y));
      },
      reset: function () {
        (I = !1), (Q = null), oe.set(-1, 0, 0, 0);
      },
    };
  }
  function r() {
    let I = !1,
      Y = null,
      Q = null,
      oe = null;
    return {
      setTest: function (de) {
        de ? ce(2929) : he(2929);
      },
      setMask: function (de) {
        Y !== de && !I && (o.depthMask(de), (Y = de));
      },
      setFunc: function (de) {
        if (Q !== de) {
          switch (de) {
            case If:
              o.depthFunc(512);
              break;
            case Ff:
              o.depthFunc(519);
              break;
            case Of:
              o.depthFunc(513);
              break;
            case vo:
              o.depthFunc(515);
              break;
            case Nf:
              o.depthFunc(514);
              break;
            case kf:
              o.depthFunc(518);
              break;
            case Uf:
              o.depthFunc(516);
              break;
            case zf:
              o.depthFunc(517);
              break;
            default:
              o.depthFunc(515);
          }
          Q = de;
        }
      },
      setLocked: function (de) {
        I = de;
      },
      setClear: function (de) {
        oe !== de && (o.clearDepth(de), (oe = de));
      },
      reset: function () {
        (I = !1), (Y = null), (Q = null), (oe = null);
      },
    };
  }
  function a() {
    let I = !1,
      Y = null,
      Q = null,
      oe = null,
      de = null,
      Xe = null,
      pt = null,
      Lt = null,
      yn = null;
    return {
      setTest: function (et) {
        I || (et ? ce(2960) : he(2960));
      },
      setMask: function (et) {
        Y !== et && !I && (o.stencilMask(et), (Y = et));
      },
      setFunc: function (et, nn, Mn) {
        (Q !== et || oe !== nn || de !== Mn) &&
          (o.stencilFunc(et, nn, Mn), (Q = et), (oe = nn), (de = Mn));
      },
      setOp: function (et, nn, Mn) {
        (Xe !== et || pt !== nn || Lt !== Mn) &&
          (o.stencilOp(et, nn, Mn), (Xe = et), (pt = nn), (Lt = Mn));
      },
      setLocked: function (et) {
        I = et;
      },
      setClear: function (et) {
        yn !== et && (o.clearStencil(et), (yn = et));
      },
      reset: function () {
        (I = !1),
          (Y = null),
          (Q = null),
          (oe = null),
          (de = null),
          (Xe = null),
          (pt = null),
          (Lt = null),
          (yn = null);
      },
    };
  }
  const s = new i(),
    l = new r(),
    c = new a(),
    h = new WeakMap(),
    u = new WeakMap();
  let f = {},
    p = {},
    g = new WeakMap(),
    d = [],
    m = null,
    _ = !1,
    b = null,
    x = null,
    y = null,
    M = null,
    E = null,
    C = null,
    v = null,
    S = !1,
    L = null,
    V = null,
    G = null,
    F = null,
    D = null;
  const B = o.getParameter(35661);
  let H = !1,
    Z = 0;
  const W = o.getParameter(7938);
  W.indexOf("WebGL") !== -1
    ? ((Z = parseFloat(/^WebGL (\d)/.exec(W)[1])), (H = Z >= 1))
    : W.indexOf("OpenGL ES") !== -1 &&
      ((Z = parseFloat(/^OpenGL ES (\d)/.exec(W)[1])), (H = Z >= 2));
  let J = null,
    K = {};
  const ue = o.getParameter(3088),
    U = o.getParameter(2978),
    $ = new ze().fromArray(ue),
    ee = new ze().fromArray(U);
  function O(I, Y, Q) {
    const oe = new Uint8Array(4),
      de = o.createTexture();
    o.bindTexture(I, de),
      o.texParameteri(I, 10241, 9728),
      o.texParameteri(I, 10240, 9728);
    for (let Xe = 0; Xe < Q; Xe++)
      o.texImage2D(Y + Xe, 0, 6408, 1, 1, 0, 6408, 5121, oe);
    return de;
  }
  const le = {};
  (le[3553] = O(3553, 3553, 1)),
    (le[34067] = O(34067, 34069, 6)),
    s.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    ce(2929),
    l.setFunc(vo),
    ft(!1),
    dt(Cl),
    ce(2884),
    ut(ai);
  function ce(I) {
    f[I] !== !0 && (o.enable(I), (f[I] = !0));
  }
  function he(I) {
    f[I] !== !1 && (o.disable(I), (f[I] = !1));
  }
  function fe(I, Y) {
    return p[I] !== Y
      ? (o.bindFramebuffer(I, Y),
        (p[I] = Y),
        n && (I === 36009 && (p[36160] = Y), I === 36160 && (p[36009] = Y)),
        !0)
      : !1;
  }
  function ye(I, Y) {
    let Q = d,
      oe = !1;
    if (I)
      if (
        ((Q = g.get(Y)),
        Q === void 0 && ((Q = []), g.set(Y, Q)),
        I.isWebGLMultipleRenderTargets)
      ) {
        const de = I.texture;
        if (Q.length !== de.length || Q[0] !== 36064) {
          for (let Xe = 0, pt = de.length; Xe < pt; Xe++) Q[Xe] = 36064 + Xe;
          (Q.length = de.length), (oe = !0);
        }
      } else Q[0] !== 36064 && ((Q[0] = 36064), (oe = !0));
    else Q[0] !== 1029 && ((Q[0] = 1029), (oe = !0));
    oe &&
      (t.isWebGL2
        ? o.drawBuffers(Q)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q));
  }
  function we(I) {
    return m !== I ? (o.useProgram(I), (m = I), !0) : !1;
  }
  const Ee = { [ir]: 32774, [bf]: 32778, [Sf]: 32779 };
  if (n) (Ee[Dl] = 32775), (Ee[Il] = 32776);
  else {
    const I = e.get("EXT_blend_minmax");
    I !== null && ((Ee[Dl] = I.MIN_EXT), (Ee[Il] = I.MAX_EXT));
  }
  const Oe = {
    [wf]: 0,
    [Tf]: 1,
    [Ef]: 768,
    [Ch]: 770,
    [Df]: 776,
    [Lf]: 774,
    [Cf]: 772,
    [Af]: 769,
    [Ph]: 771,
    [Rf]: 775,
    [Pf]: 773,
  };
  function ut(I, Y, Q, oe, de, Xe, pt, Lt) {
    if (I === ai) {
      _ === !0 && (he(3042), (_ = !1));
      return;
    }
    if ((_ === !1 && (ce(3042), (_ = !0)), I !== Mf)) {
      if (I !== b || Lt !== S) {
        if (
          ((x !== ir || E !== ir) &&
            (o.blendEquation(32774), (x = ir), (E = ir)),
          Lt)
        )
          switch (I) {
            case ur:
              o.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Pl:
              o.blendFunc(1, 1);
              break;
            case Ll:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Rl:
              o.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        else
          switch (I) {
            case ur:
              o.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Pl:
              o.blendFunc(770, 1);
              break;
            case Ll:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Rl:
              o.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        (y = null), (M = null), (C = null), (v = null), (b = I), (S = Lt);
      }
      return;
    }
    (de = de || Y),
      (Xe = Xe || Q),
      (pt = pt || oe),
      (Y !== x || de !== E) &&
        (o.blendEquationSeparate(Ee[Y], Ee[de]), (x = Y), (E = de)),
      (Q !== y || oe !== M || Xe !== C || pt !== v) &&
        (o.blendFuncSeparate(Oe[Q], Oe[oe], Oe[Xe], Oe[pt]),
        (y = Q),
        (M = oe),
        (C = Xe),
        (v = pt)),
      (b = I),
      (S = !1);
  }
  function Ct(I, Y) {
    I.side === Qn ? he(2884) : ce(2884);
    let Q = I.side === Jt;
    Y && (Q = !Q),
      ft(Q),
      I.blending === ur && I.transparent === !1
        ? ut(ai)
        : ut(
            I.blending,
            I.blendEquation,
            I.blendSrc,
            I.blendDst,
            I.blendEquationAlpha,
            I.blendSrcAlpha,
            I.blendDstAlpha,
            I.premultipliedAlpha
          ),
      l.setFunc(I.depthFunc),
      l.setTest(I.depthTest),
      l.setMask(I.depthWrite),
      s.setMask(I.colorWrite);
    const oe = I.stencilWrite;
    c.setTest(oe),
      oe &&
        (c.setMask(I.stencilWriteMask),
        c.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask),
        c.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)),
      He(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits),
      I.alphaToCoverage === !0 ? ce(32926) : he(32926);
  }
  function ft(I) {
    L !== I && (I ? o.frontFace(2304) : o.frontFace(2305), (L = I));
  }
  function dt(I) {
    I !== vf
      ? (ce(2884),
        I !== V &&
          (I === Cl
            ? o.cullFace(1029)
            : I === yf
            ? o.cullFace(1028)
            : o.cullFace(1032)))
      : he(2884),
      (V = I);
  }
  function Ye(I) {
    I !== G && (H && o.lineWidth(I), (G = I));
  }
  function He(I, Y, Q) {
    I
      ? (ce(32823),
        (F !== Y || D !== Q) && (o.polygonOffset(Y, Q), (F = Y), (D = Q)))
      : he(32823);
  }
  function Ht(I) {
    I ? ce(3089) : he(3089);
  }
  function Pt(I) {
    I === void 0 && (I = 33984 + B - 1),
      J !== I && (o.activeTexture(I), (J = I));
  }
  function A(I, Y, Q) {
    Q === void 0 && (J === null ? (Q = 33984 + B - 1) : (Q = J));
    let oe = K[Q];
    oe === void 0 && ((oe = { type: void 0, texture: void 0 }), (K[Q] = oe)),
      (oe.type !== I || oe.texture !== Y) &&
        (J !== Q && (o.activeTexture(Q), (J = Q)),
        o.bindTexture(I, Y || le[I]),
        (oe.type = I),
        (oe.texture = Y));
  }
  function w() {
    const I = K[J];
    I !== void 0 &&
      I.type !== void 0 &&
      (o.bindTexture(I.type, null), (I.type = void 0), (I.texture = void 0));
  }
  function q() {
    try {
      o.compressedTexImage2D.apply(o, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function te() {
    try {
      o.compressedTexImage3D.apply(o, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ne() {
    try {
      o.texSubImage2D.apply(o, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function se() {
    try {
      o.texSubImage3D.apply(o, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function _e() {
    try {
      o.compressedTexSubImage2D.apply(o, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function P() {
    try {
      o.compressedTexSubImage3D.apply(o, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function N() {
    try {
      o.texStorage2D.apply(o, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ae() {
    try {
      o.texStorage3D.apply(o, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function re() {
    try {
      o.texImage2D.apply(o, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function pe() {
    try {
      o.texImage3D.apply(o, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ge(I) {
    $.equals(I) === !1 && (o.scissor(I.x, I.y, I.z, I.w), $.copy(I));
  }
  function me(I) {
    ee.equals(I) === !1 && (o.viewport(I.x, I.y, I.z, I.w), ee.copy(I));
  }
  function Le(I, Y) {
    let Q = u.get(Y);
    Q === void 0 && ((Q = new WeakMap()), u.set(Y, Q));
    let oe = Q.get(I);
    oe === void 0 && ((oe = o.getUniformBlockIndex(Y, I.name)), Q.set(I, oe));
  }
  function Ne(I, Y) {
    const oe = u.get(Y).get(I);
    h.get(Y) !== oe &&
      (o.uniformBlockBinding(Y, oe, I.__bindingPointIndex), h.set(Y, oe));
  }
  function Ge() {
    o.disable(3042),
      o.disable(2884),
      o.disable(2929),
      o.disable(32823),
      o.disable(3089),
      o.disable(2960),
      o.disable(32926),
      o.blendEquation(32774),
      o.blendFunc(1, 0),
      o.blendFuncSeparate(1, 0, 1, 0),
      o.colorMask(!0, !0, !0, !0),
      o.clearColor(0, 0, 0, 0),
      o.depthMask(!0),
      o.depthFunc(513),
      o.clearDepth(1),
      o.stencilMask(4294967295),
      o.stencilFunc(519, 0, 4294967295),
      o.stencilOp(7680, 7680, 7680),
      o.clearStencil(0),
      o.cullFace(1029),
      o.frontFace(2305),
      o.polygonOffset(0, 0),
      o.activeTexture(33984),
      o.bindFramebuffer(36160, null),
      n === !0 &&
        (o.bindFramebuffer(36009, null), o.bindFramebuffer(36008, null)),
      o.useProgram(null),
      o.lineWidth(1),
      o.scissor(0, 0, o.canvas.width, o.canvas.height),
      o.viewport(0, 0, o.canvas.width, o.canvas.height),
      (f = {}),
      (J = null),
      (K = {}),
      (p = {}),
      (g = new WeakMap()),
      (d = []),
      (m = null),
      (_ = !1),
      (b = null),
      (x = null),
      (y = null),
      (M = null),
      (E = null),
      (C = null),
      (v = null),
      (S = !1),
      (L = null),
      (V = null),
      (G = null),
      (F = null),
      (D = null),
      $.set(0, 0, o.canvas.width, o.canvas.height),
      ee.set(0, 0, o.canvas.width, o.canvas.height),
      s.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: s, depth: l, stencil: c },
    enable: ce,
    disable: he,
    bindFramebuffer: fe,
    drawBuffers: ye,
    useProgram: we,
    setBlending: ut,
    setMaterial: Ct,
    setFlipSided: ft,
    setCullFace: dt,
    setLineWidth: Ye,
    setPolygonOffset: He,
    setScissorTest: Ht,
    activeTexture: Pt,
    bindTexture: A,
    unbindTexture: w,
    compressedTexImage2D: q,
    compressedTexImage3D: te,
    texImage2D: re,
    texImage3D: pe,
    updateUBOMapping: Le,
    uniformBlockBinding: Ne,
    texStorage2D: N,
    texStorage3D: ae,
    texSubImage2D: ne,
    texSubImage3D: se,
    compressedTexSubImage2D: _e,
    compressedTexSubImage3D: P,
    scissor: ge,
    viewport: me,
    reset: Ge,
  };
}
function E0(o, e, t, n, i, r, a) {
  const s = i.isWebGL2,
    l = i.maxTextures,
    c = i.maxCubemapSize,
    h = i.maxTextureSize,
    u = i.maxSamples,
    f = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    p =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    g = new WeakMap();
  let d;
  const m = new WeakMap();
  let _ = !1;
  try {
    _ =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function b(A, w) {
    return _ ? new OffscreenCanvas(A, w) : os("canvas");
  }
  function x(A, w, q, te) {
    let ne = 1;
    if (
      ((A.width > te || A.height > te) &&
        (ne = te / Math.max(A.width, A.height)),
      ne < 1 || w === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && A instanceof ImageBitmap)
      ) {
        const se = w ? Fh : Math.floor,
          _e = se(ne * A.width),
          P = se(ne * A.height);
        d === void 0 && (d = b(_e, P));
        const N = q ? b(_e, P) : d;
        return (
          (N.width = _e),
          (N.height = P),
          N.getContext("2d").drawImage(A, 0, 0, _e, P),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              A.width +
              "x" +
              A.height +
              ") to (" +
              _e +
              "x" +
              P +
              ")."
          ),
          N
        );
      } else
        return (
          "data" in A &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                A.width +
                "x" +
                A.height +
                ")."
            ),
          A
        );
    return A;
  }
  function y(A) {
    return So(A.width) && So(A.height);
  }
  function M(A) {
    return s
      ? !1
      : A.wrapS !== Ot ||
          A.wrapT !== Ot ||
          (A.minFilter !== xt && A.minFilter !== Kt);
  }
  function E(A, w) {
    return A.generateMipmaps && w && A.minFilter !== xt && A.minFilter !== Kt;
  }
  function C(A) {
    o.generateMipmap(A);
  }
  function v(A, w, q, te, ne = !1) {
    if (s === !1) return w;
    if (A !== null) {
      if (o[A] !== void 0) return o[A];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          A +
          "'"
      );
    }
    let se = w;
    return (
      w === 6403 &&
        (q === 5126 && (se = 33326),
        q === 5131 && (se = 33325),
        q === 5121 && (se = 33321)),
      w === 33319 &&
        (q === 5126 && (se = 33328),
        q === 5131 && (se = 33327),
        q === 5121 && (se = 33323)),
      w === 6408 &&
        (q === 5126 && (se = 34836),
        q === 5131 && (se = 34842),
        q === 5121 && (se = te === Be && ne === !1 ? 35907 : 32856),
        q === 32819 && (se = 32854),
        q === 32820 && (se = 32855)),
      (se === 33325 ||
        se === 33326 ||
        se === 33327 ||
        se === 33328 ||
        se === 34842 ||
        se === 34836) &&
        e.get("EXT_color_buffer_float"),
      se
    );
  }
  function S(A, w, q) {
    return E(A, q) === !0 ||
      (A.isFramebufferTexture && A.minFilter !== xt && A.minFilter !== Kt)
      ? Math.log2(Math.max(w.width, w.height)) + 1
      : A.mipmaps !== void 0 && A.mipmaps.length > 0
      ? A.mipmaps.length
      : A.isCompressedTexture && Array.isArray(A.image)
      ? w.mipmaps.length
      : 1;
  }
  function L(A) {
    return A === xt || A === Fl || A === wa ? 9728 : 9729;
  }
  function V(A) {
    const w = A.target;
    w.removeEventListener("dispose", V), F(w), w.isVideoTexture && g.delete(w);
  }
  function G(A) {
    const w = A.target;
    w.removeEventListener("dispose", G), B(w);
  }
  function F(A) {
    const w = n.get(A);
    if (w.__webglInit === void 0) return;
    const q = A.source,
      te = m.get(q);
    if (te) {
      const ne = te[w.__cacheKey];
      ne.usedTimes--,
        ne.usedTimes === 0 && D(A),
        Object.keys(te).length === 0 && m.delete(q);
    }
    n.remove(A);
  }
  function D(A) {
    const w = n.get(A);
    o.deleteTexture(w.__webglTexture);
    const q = A.source,
      te = m.get(q);
    delete te[w.__cacheKey], a.memory.textures--;
  }
  function B(A) {
    const w = A.texture,
      q = n.get(A),
      te = n.get(w);
    if (
      (te.__webglTexture !== void 0 &&
        (o.deleteTexture(te.__webglTexture), a.memory.textures--),
      A.depthTexture && A.depthTexture.dispose(),
      A.isWebGLCubeRenderTarget)
    )
      for (let ne = 0; ne < 6; ne++)
        o.deleteFramebuffer(q.__webglFramebuffer[ne]),
          q.__webglDepthbuffer &&
            o.deleteRenderbuffer(q.__webglDepthbuffer[ne]);
    else {
      if (
        (o.deleteFramebuffer(q.__webglFramebuffer),
        q.__webglDepthbuffer && o.deleteRenderbuffer(q.__webglDepthbuffer),
        q.__webglMultisampledFramebuffer &&
          o.deleteFramebuffer(q.__webglMultisampledFramebuffer),
        q.__webglColorRenderbuffer)
      )
        for (let ne = 0; ne < q.__webglColorRenderbuffer.length; ne++)
          q.__webglColorRenderbuffer[ne] &&
            o.deleteRenderbuffer(q.__webglColorRenderbuffer[ne]);
      q.__webglDepthRenderbuffer &&
        o.deleteRenderbuffer(q.__webglDepthRenderbuffer);
    }
    if (A.isWebGLMultipleRenderTargets)
      for (let ne = 0, se = w.length; ne < se; ne++) {
        const _e = n.get(w[ne]);
        _e.__webglTexture &&
          (o.deleteTexture(_e.__webglTexture), a.memory.textures--),
          n.remove(w[ne]);
      }
    n.remove(w), n.remove(A);
  }
  let H = 0;
  function Z() {
    H = 0;
  }
  function W() {
    const A = H;
    return (
      A >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            A +
            " texture units while this GPU supports only " +
            l
        ),
      (H += 1),
      A
    );
  }
  function J(A) {
    const w = [];
    return (
      w.push(A.wrapS),
      w.push(A.wrapT),
      w.push(A.wrapR || 0),
      w.push(A.magFilter),
      w.push(A.minFilter),
      w.push(A.anisotropy),
      w.push(A.internalFormat),
      w.push(A.format),
      w.push(A.type),
      w.push(A.generateMipmaps),
      w.push(A.premultiplyAlpha),
      w.push(A.flipY),
      w.push(A.unpackAlignment),
      w.push(A.encoding),
      w.join()
    );
  }
  function K(A, w) {
    const q = n.get(A);
    if (
      (A.isVideoTexture && Ht(A),
      A.isRenderTargetTexture === !1 &&
        A.version > 0 &&
        q.__version !== A.version)
    ) {
      const te = A.image;
      if (te === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (te.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        he(q, A, w);
        return;
      }
    }
    t.bindTexture(3553, q.__webglTexture, 33984 + w);
  }
  function ue(A, w) {
    const q = n.get(A);
    if (A.version > 0 && q.__version !== A.version) {
      he(q, A, w);
      return;
    }
    t.bindTexture(35866, q.__webglTexture, 33984 + w);
  }
  function U(A, w) {
    const q = n.get(A);
    if (A.version > 0 && q.__version !== A.version) {
      he(q, A, w);
      return;
    }
    t.bindTexture(32879, q.__webglTexture, 33984 + w);
  }
  function $(A, w) {
    const q = n.get(A);
    if (A.version > 0 && q.__version !== A.version) {
      fe(q, A, w);
      return;
    }
    t.bindTexture(34067, q.__webglTexture, 33984 + w);
  }
  const ee = { [ns]: 10497, [Ot]: 33071, [Mo]: 33648 },
    O = {
      [xt]: 9728,
      [Fl]: 9984,
      [wa]: 9986,
      [Kt]: 9729,
      [Yf]: 9985,
      [is]: 9987,
    };
  function le(A, w, q) {
    if (
      (q
        ? (o.texParameteri(A, 10242, ee[w.wrapS]),
          o.texParameteri(A, 10243, ee[w.wrapT]),
          (A === 32879 || A === 35866) &&
            o.texParameteri(A, 32882, ee[w.wrapR]),
          o.texParameteri(A, 10240, O[w.magFilter]),
          o.texParameteri(A, 10241, O[w.minFilter]))
        : (o.texParameteri(A, 10242, 33071),
          o.texParameteri(A, 10243, 33071),
          (A === 32879 || A === 35866) && o.texParameteri(A, 32882, 33071),
          (w.wrapS !== Ot || w.wrapT !== Ot) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          o.texParameteri(A, 10240, L(w.magFilter)),
          o.texParameteri(A, 10241, L(w.minFilter)),
          w.minFilter !== xt &&
            w.minFilter !== Kt &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const te = e.get("EXT_texture_filter_anisotropic");
      if (
        w.magFilter === xt ||
        (w.minFilter !== wa && w.minFilter !== is) ||
        (w.type === ei && e.has("OES_texture_float_linear") === !1) ||
        (s === !1 &&
          w.type === rs &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (w.anisotropy > 1 || n.get(w).__currentAnisotropy) &&
        (o.texParameterf(
          A,
          te.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(w.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(w).__currentAnisotropy = w.anisotropy));
    }
  }
  function ce(A, w) {
    let q = !1;
    A.__webglInit === void 0 &&
      ((A.__webglInit = !0), w.addEventListener("dispose", V));
    const te = w.source;
    let ne = m.get(te);
    ne === void 0 && ((ne = {}), m.set(te, ne));
    const se = J(w);
    if (se !== A.__cacheKey) {
      ne[se] === void 0 &&
        ((ne[se] = { texture: o.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (q = !0)),
        ne[se].usedTimes++;
      const _e = ne[A.__cacheKey];
      _e !== void 0 &&
        (ne[A.__cacheKey].usedTimes--, _e.usedTimes === 0 && D(w)),
        (A.__cacheKey = se),
        (A.__webglTexture = ne[se].texture);
    }
    return q;
  }
  function he(A, w, q) {
    let te = 3553;
    (w.isDataArrayTexture || w.isCompressedArrayTexture) && (te = 35866),
      w.isData3DTexture && (te = 32879);
    const ne = ce(A, w),
      se = w.source;
    t.bindTexture(te, A.__webglTexture, 33984 + q);
    const _e = n.get(se);
    if (se.version !== _e.__version || ne === !0) {
      t.activeTexture(33984 + q),
        o.pixelStorei(37440, w.flipY),
        o.pixelStorei(37441, w.premultiplyAlpha),
        o.pixelStorei(3317, w.unpackAlignment),
        o.pixelStorei(37443, 0);
      const P = M(w) && y(w.image) === !1;
      let N = x(w.image, P, !1, h);
      N = Pt(w, N);
      const ae = y(N) || s,
        re = r.convert(w.format, w.encoding);
      let pe = r.convert(w.type),
        ge = v(w.internalFormat, re, pe, w.encoding, w.isVideoTexture);
      le(te, w, ae);
      let me;
      const Le = w.mipmaps,
        Ne = s && w.isVideoTexture !== !0,
        Ge = _e.__version === void 0 || ne === !0,
        I = S(w, N, ae);
      if (w.isDepthTexture)
        (ge = 6402),
          s
            ? w.type === ei
              ? (ge = 36012)
              : w.type === Ai
              ? (ge = 33190)
              : w.type === fr
              ? (ge = 35056)
              : (ge = 33189)
            : w.type === ei &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          w.format === Pi &&
            ge === 6402 &&
            w.type !== Rh &&
            w.type !== Ai &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (w.type = Ai),
            (pe = r.convert(w.type))),
          w.format === vr &&
            ge === 6402 &&
            ((ge = 34041),
            w.type !== fr &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (w.type = fr),
              (pe = r.convert(w.type)))),
          Ge &&
            (Ne
              ? t.texStorage2D(3553, 1, ge, N.width, N.height)
              : t.texImage2D(3553, 0, ge, N.width, N.height, 0, re, pe, null));
      else if (w.isDataTexture)
        if (Le.length > 0 && ae) {
          Ne && Ge && t.texStorage2D(3553, I, ge, Le[0].width, Le[0].height);
          for (let Y = 0, Q = Le.length; Y < Q; Y++)
            (me = Le[Y]),
              Ne
                ? t.texSubImage2D(
                    3553,
                    Y,
                    0,
                    0,
                    me.width,
                    me.height,
                    re,
                    pe,
                    me.data
                  )
                : t.texImage2D(
                    3553,
                    Y,
                    ge,
                    me.width,
                    me.height,
                    0,
                    re,
                    pe,
                    me.data
                  );
          w.generateMipmaps = !1;
        } else
          Ne
            ? (Ge && t.texStorage2D(3553, I, ge, N.width, N.height),
              t.texSubImage2D(3553, 0, 0, 0, N.width, N.height, re, pe, N.data))
            : t.texImage2D(3553, 0, ge, N.width, N.height, 0, re, pe, N.data);
      else if (w.isCompressedTexture)
        if (w.isCompressedArrayTexture) {
          Ne &&
            Ge &&
            t.texStorage3D(35866, I, ge, Le[0].width, Le[0].height, N.depth);
          for (let Y = 0, Q = Le.length; Y < Q; Y++)
            (me = Le[Y]),
              w.format !== on
                ? re !== null
                  ? Ne
                    ? t.compressedTexSubImage3D(
                        35866,
                        Y,
                        0,
                        0,
                        0,
                        me.width,
                        me.height,
                        N.depth,
                        re,
                        me.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        35866,
                        Y,
                        ge,
                        me.width,
                        me.height,
                        N.depth,
                        0,
                        me.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Ne
                ? t.texSubImage3D(
                    35866,
                    Y,
                    0,
                    0,
                    0,
                    me.width,
                    me.height,
                    N.depth,
                    re,
                    pe,
                    me.data
                  )
                : t.texImage3D(
                    35866,
                    Y,
                    ge,
                    me.width,
                    me.height,
                    N.depth,
                    0,
                    re,
                    pe,
                    me.data
                  );
        } else {
          Ne && Ge && t.texStorage2D(3553, I, ge, Le[0].width, Le[0].height);
          for (let Y = 0, Q = Le.length; Y < Q; Y++)
            (me = Le[Y]),
              w.format !== on
                ? re !== null
                  ? Ne
                    ? t.compressedTexSubImage2D(
                        3553,
                        Y,
                        0,
                        0,
                        me.width,
                        me.height,
                        re,
                        me.data
                      )
                    : t.compressedTexImage2D(
                        3553,
                        Y,
                        ge,
                        me.width,
                        me.height,
                        0,
                        me.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Ne
                ? t.texSubImage2D(
                    3553,
                    Y,
                    0,
                    0,
                    me.width,
                    me.height,
                    re,
                    pe,
                    me.data
                  )
                : t.texImage2D(
                    3553,
                    Y,
                    ge,
                    me.width,
                    me.height,
                    0,
                    re,
                    pe,
                    me.data
                  );
        }
      else if (w.isDataArrayTexture)
        Ne
          ? (Ge && t.texStorage3D(35866, I, ge, N.width, N.height, N.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              N.width,
              N.height,
              N.depth,
              re,
              pe,
              N.data
            ))
          : t.texImage3D(
              35866,
              0,
              ge,
              N.width,
              N.height,
              N.depth,
              0,
              re,
              pe,
              N.data
            );
      else if (w.isData3DTexture)
        Ne
          ? (Ge && t.texStorage3D(32879, I, ge, N.width, N.height, N.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              N.width,
              N.height,
              N.depth,
              re,
              pe,
              N.data
            ))
          : t.texImage3D(
              32879,
              0,
              ge,
              N.width,
              N.height,
              N.depth,
              0,
              re,
              pe,
              N.data
            );
      else if (w.isFramebufferTexture) {
        if (Ge)
          if (Ne) t.texStorage2D(3553, I, ge, N.width, N.height);
          else {
            let Y = N.width,
              Q = N.height;
            for (let oe = 0; oe < I; oe++)
              t.texImage2D(3553, oe, ge, Y, Q, 0, re, pe, null),
                (Y >>= 1),
                (Q >>= 1);
          }
      } else if (Le.length > 0 && ae) {
        Ne && Ge && t.texStorage2D(3553, I, ge, Le[0].width, Le[0].height);
        for (let Y = 0, Q = Le.length; Y < Q; Y++)
          (me = Le[Y]),
            Ne
              ? t.texSubImage2D(3553, Y, 0, 0, re, pe, me)
              : t.texImage2D(3553, Y, ge, re, pe, me);
        w.generateMipmaps = !1;
      } else
        Ne
          ? (Ge && t.texStorage2D(3553, I, ge, N.width, N.height),
            t.texSubImage2D(3553, 0, 0, 0, re, pe, N))
          : t.texImage2D(3553, 0, ge, re, pe, N);
      E(w, ae) && C(te),
        (_e.__version = se.version),
        w.onUpdate && w.onUpdate(w);
    }
    A.__version = w.version;
  }
  function fe(A, w, q) {
    if (w.image.length !== 6) return;
    const te = ce(A, w),
      ne = w.source;
    t.bindTexture(34067, A.__webglTexture, 33984 + q);
    const se = n.get(ne);
    if (ne.version !== se.__version || te === !0) {
      t.activeTexture(33984 + q),
        o.pixelStorei(37440, w.flipY),
        o.pixelStorei(37441, w.premultiplyAlpha),
        o.pixelStorei(3317, w.unpackAlignment),
        o.pixelStorei(37443, 0);
      const _e = w.isCompressedTexture || w.image[0].isCompressedTexture,
        P = w.image[0] && w.image[0].isDataTexture,
        N = [];
      for (let Y = 0; Y < 6; Y++)
        !_e && !P
          ? (N[Y] = x(w.image[Y], !1, !0, c))
          : (N[Y] = P ? w.image[Y].image : w.image[Y]),
          (N[Y] = Pt(w, N[Y]));
      const ae = N[0],
        re = y(ae) || s,
        pe = r.convert(w.format, w.encoding),
        ge = r.convert(w.type),
        me = v(w.internalFormat, pe, ge, w.encoding),
        Le = s && w.isVideoTexture !== !0,
        Ne = se.__version === void 0 || te === !0;
      let Ge = S(w, ae, re);
      le(34067, w, re);
      let I;
      if (_e) {
        Le && Ne && t.texStorage2D(34067, Ge, me, ae.width, ae.height);
        for (let Y = 0; Y < 6; Y++) {
          I = N[Y].mipmaps;
          for (let Q = 0; Q < I.length; Q++) {
            const oe = I[Q];
            w.format !== on
              ? pe !== null
                ? Le
                  ? t.compressedTexSubImage2D(
                      34069 + Y,
                      Q,
                      0,
                      0,
                      oe.width,
                      oe.height,
                      pe,
                      oe.data
                    )
                  : t.compressedTexImage2D(
                      34069 + Y,
                      Q,
                      me,
                      oe.width,
                      oe.height,
                      0,
                      oe.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : Le
              ? t.texSubImage2D(
                  34069 + Y,
                  Q,
                  0,
                  0,
                  oe.width,
                  oe.height,
                  pe,
                  ge,
                  oe.data
                )
              : t.texImage2D(
                  34069 + Y,
                  Q,
                  me,
                  oe.width,
                  oe.height,
                  0,
                  pe,
                  ge,
                  oe.data
                );
          }
        }
      } else {
        (I = w.mipmaps),
          Le &&
            Ne &&
            (I.length > 0 && Ge++,
            t.texStorage2D(34067, Ge, me, N[0].width, N[0].height));
        for (let Y = 0; Y < 6; Y++)
          if (P) {
            Le
              ? t.texSubImage2D(
                  34069 + Y,
                  0,
                  0,
                  0,
                  N[Y].width,
                  N[Y].height,
                  pe,
                  ge,
                  N[Y].data
                )
              : t.texImage2D(
                  34069 + Y,
                  0,
                  me,
                  N[Y].width,
                  N[Y].height,
                  0,
                  pe,
                  ge,
                  N[Y].data
                );
            for (let Q = 0; Q < I.length; Q++) {
              const de = I[Q].image[Y].image;
              Le
                ? t.texSubImage2D(
                    34069 + Y,
                    Q + 1,
                    0,
                    0,
                    de.width,
                    de.height,
                    pe,
                    ge,
                    de.data
                  )
                : t.texImage2D(
                    34069 + Y,
                    Q + 1,
                    me,
                    de.width,
                    de.height,
                    0,
                    pe,
                    ge,
                    de.data
                  );
            }
          } else {
            Le
              ? t.texSubImage2D(34069 + Y, 0, 0, 0, pe, ge, N[Y])
              : t.texImage2D(34069 + Y, 0, me, pe, ge, N[Y]);
            for (let Q = 0; Q < I.length; Q++) {
              const oe = I[Q];
              Le
                ? t.texSubImage2D(34069 + Y, Q + 1, 0, 0, pe, ge, oe.image[Y])
                : t.texImage2D(34069 + Y, Q + 1, me, pe, ge, oe.image[Y]);
            }
          }
      }
      E(w, re) && C(34067),
        (se.__version = ne.version),
        w.onUpdate && w.onUpdate(w);
    }
    A.__version = w.version;
  }
  function ye(A, w, q, te, ne) {
    const se = r.convert(q.format, q.encoding),
      _e = r.convert(q.type),
      P = v(q.internalFormat, se, _e, q.encoding);
    n.get(w).__hasExternalTextures ||
      (ne === 32879 || ne === 35866
        ? t.texImage3D(ne, 0, P, w.width, w.height, w.depth, 0, se, _e, null)
        : t.texImage2D(ne, 0, P, w.width, w.height, 0, se, _e, null)),
      t.bindFramebuffer(36160, A),
      He(w)
        ? f.framebufferTexture2DMultisampleEXT(
            36160,
            te,
            ne,
            n.get(q).__webglTexture,
            0,
            Ye(w)
          )
        : (ne === 3553 || (ne >= 34069 && ne <= 34074)) &&
          o.framebufferTexture2D(36160, te, ne, n.get(q).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function we(A, w, q) {
    if ((o.bindRenderbuffer(36161, A), w.depthBuffer && !w.stencilBuffer)) {
      let te = 33189;
      if (q || He(w)) {
        const ne = w.depthTexture;
        ne &&
          ne.isDepthTexture &&
          (ne.type === ei ? (te = 36012) : ne.type === Ai && (te = 33190));
        const se = Ye(w);
        He(w)
          ? f.renderbufferStorageMultisampleEXT(
              36161,
              se,
              te,
              w.width,
              w.height
            )
          : o.renderbufferStorageMultisample(36161, se, te, w.width, w.height);
      } else o.renderbufferStorage(36161, te, w.width, w.height);
      o.framebufferRenderbuffer(36160, 36096, 36161, A);
    } else if (w.depthBuffer && w.stencilBuffer) {
      const te = Ye(w);
      q && He(w) === !1
        ? o.renderbufferStorageMultisample(36161, te, 35056, w.width, w.height)
        : He(w)
        ? f.renderbufferStorageMultisampleEXT(
            36161,
            te,
            35056,
            w.width,
            w.height
          )
        : o.renderbufferStorage(36161, 34041, w.width, w.height),
        o.framebufferRenderbuffer(36160, 33306, 36161, A);
    } else {
      const te =
        w.isWebGLMultipleRenderTargets === !0 ? w.texture : [w.texture];
      for (let ne = 0; ne < te.length; ne++) {
        const se = te[ne],
          _e = r.convert(se.format, se.encoding),
          P = r.convert(se.type),
          N = v(se.internalFormat, _e, P, se.encoding),
          ae = Ye(w);
        q && He(w) === !1
          ? o.renderbufferStorageMultisample(36161, ae, N, w.width, w.height)
          : He(w)
          ? f.renderbufferStorageMultisampleEXT(36161, ae, N, w.width, w.height)
          : o.renderbufferStorage(36161, N, w.width, w.height);
      }
    }
    o.bindRenderbuffer(36161, null);
  }
  function Ee(A, w) {
    if (w && w.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(36160, A),
      !(w.depthTexture && w.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(w.depthTexture).__webglTexture ||
      w.depthTexture.image.width !== w.width ||
      w.depthTexture.image.height !== w.height) &&
      ((w.depthTexture.image.width = w.width),
      (w.depthTexture.image.height = w.height),
      (w.depthTexture.needsUpdate = !0)),
      K(w.depthTexture, 0);
    const te = n.get(w.depthTexture).__webglTexture,
      ne = Ye(w);
    if (w.depthTexture.format === Pi)
      He(w)
        ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, te, 0, ne)
        : o.framebufferTexture2D(36160, 36096, 3553, te, 0);
    else if (w.depthTexture.format === vr)
      He(w)
        ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, te, 0, ne)
        : o.framebufferTexture2D(36160, 33306, 3553, te, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Oe(A) {
    const w = n.get(A),
      q = A.isWebGLCubeRenderTarget === !0;
    if (A.depthTexture && !w.__autoAllocateDepthBuffer) {
      if (q)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      Ee(w.__webglFramebuffer, A);
    } else if (q) {
      w.__webglDepthbuffer = [];
      for (let te = 0; te < 6; te++)
        t.bindFramebuffer(36160, w.__webglFramebuffer[te]),
          (w.__webglDepthbuffer[te] = o.createRenderbuffer()),
          we(w.__webglDepthbuffer[te], A, !1);
    } else
      t.bindFramebuffer(36160, w.__webglFramebuffer),
        (w.__webglDepthbuffer = o.createRenderbuffer()),
        we(w.__webglDepthbuffer, A, !1);
    t.bindFramebuffer(36160, null);
  }
  function ut(A, w, q) {
    const te = n.get(A);
    w !== void 0 && ye(te.__webglFramebuffer, A, A.texture, 36064, 3553),
      q !== void 0 && Oe(A);
  }
  function Ct(A) {
    const w = A.texture,
      q = n.get(A),
      te = n.get(w);
    A.addEventListener("dispose", G),
      A.isWebGLMultipleRenderTargets !== !0 &&
        (te.__webglTexture === void 0 &&
          (te.__webglTexture = o.createTexture()),
        (te.__version = w.version),
        a.memory.textures++);
    const ne = A.isWebGLCubeRenderTarget === !0,
      se = A.isWebGLMultipleRenderTargets === !0,
      _e = y(A) || s;
    if (ne) {
      q.__webglFramebuffer = [];
      for (let P = 0; P < 6; P++)
        q.__webglFramebuffer[P] = o.createFramebuffer();
    } else {
      if (((q.__webglFramebuffer = o.createFramebuffer()), se))
        if (i.drawBuffers) {
          const P = A.texture;
          for (let N = 0, ae = P.length; N < ae; N++) {
            const re = n.get(P[N]);
            re.__webglTexture === void 0 &&
              ((re.__webglTexture = o.createTexture()), a.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (s && A.samples > 0 && He(A) === !1) {
        const P = se ? w : [w];
        (q.__webglMultisampledFramebuffer = o.createFramebuffer()),
          (q.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, q.__webglMultisampledFramebuffer);
        for (let N = 0; N < P.length; N++) {
          const ae = P[N];
          (q.__webglColorRenderbuffer[N] = o.createRenderbuffer()),
            o.bindRenderbuffer(36161, q.__webglColorRenderbuffer[N]);
          const re = r.convert(ae.format, ae.encoding),
            pe = r.convert(ae.type),
            ge = v(
              ae.internalFormat,
              re,
              pe,
              ae.encoding,
              A.isXRRenderTarget === !0
            ),
            me = Ye(A);
          o.renderbufferStorageMultisample(36161, me, ge, A.width, A.height),
            o.framebufferRenderbuffer(
              36160,
              36064 + N,
              36161,
              q.__webglColorRenderbuffer[N]
            );
        }
        o.bindRenderbuffer(36161, null),
          A.depthBuffer &&
            ((q.__webglDepthRenderbuffer = o.createRenderbuffer()),
            we(q.__webglDepthRenderbuffer, A, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (ne) {
      t.bindTexture(34067, te.__webglTexture), le(34067, w, _e);
      for (let P = 0; P < 6; P++)
        ye(q.__webglFramebuffer[P], A, w, 36064, 34069 + P);
      E(w, _e) && C(34067), t.unbindTexture();
    } else if (se) {
      const P = A.texture;
      for (let N = 0, ae = P.length; N < ae; N++) {
        const re = P[N],
          pe = n.get(re);
        t.bindTexture(3553, pe.__webglTexture),
          le(3553, re, _e),
          ye(q.__webglFramebuffer, A, re, 36064 + N, 3553),
          E(re, _e) && C(3553);
      }
      t.unbindTexture();
    } else {
      let P = 3553;
      (A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) &&
        (s
          ? (P = A.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(P, te.__webglTexture),
        le(P, w, _e),
        ye(q.__webglFramebuffer, A, w, 36064, P),
        E(w, _e) && C(P),
        t.unbindTexture();
    }
    A.depthBuffer && Oe(A);
  }
  function ft(A) {
    const w = y(A) || s,
      q = A.isWebGLMultipleRenderTargets === !0 ? A.texture : [A.texture];
    for (let te = 0, ne = q.length; te < ne; te++) {
      const se = q[te];
      if (E(se, w)) {
        const _e = A.isWebGLCubeRenderTarget ? 34067 : 3553,
          P = n.get(se).__webglTexture;
        t.bindTexture(_e, P), C(_e), t.unbindTexture();
      }
    }
  }
  function dt(A) {
    if (s && A.samples > 0 && He(A) === !1) {
      const w = A.isWebGLMultipleRenderTargets ? A.texture : [A.texture],
        q = A.width,
        te = A.height;
      let ne = 16384;
      const se = [],
        _e = A.stencilBuffer ? 33306 : 36096,
        P = n.get(A),
        N = A.isWebGLMultipleRenderTargets === !0;
      if (N)
        for (let ae = 0; ae < w.length; ae++)
          t.bindFramebuffer(36160, P.__webglMultisampledFramebuffer),
            o.framebufferRenderbuffer(36160, 36064 + ae, 36161, null),
            t.bindFramebuffer(36160, P.__webglFramebuffer),
            o.framebufferTexture2D(36009, 36064 + ae, 3553, null, 0);
      t.bindFramebuffer(36008, P.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, P.__webglFramebuffer);
      for (let ae = 0; ae < w.length; ae++) {
        se.push(36064 + ae), A.depthBuffer && se.push(_e);
        const re =
          P.__ignoreDepthValues !== void 0 ? P.__ignoreDepthValues : !1;
        if (
          (re === !1 &&
            (A.depthBuffer && (ne |= 256), A.stencilBuffer && (ne |= 1024)),
          N &&
            o.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              P.__webglColorRenderbuffer[ae]
            ),
          re === !0 &&
            (o.invalidateFramebuffer(36008, [_e]),
            o.invalidateFramebuffer(36009, [_e])),
          N)
        ) {
          const pe = n.get(w[ae]).__webglTexture;
          o.framebufferTexture2D(36009, 36064, 3553, pe, 0);
        }
        o.blitFramebuffer(0, 0, q, te, 0, 0, q, te, ne, 9728),
          p && o.invalidateFramebuffer(36008, se);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), N))
        for (let ae = 0; ae < w.length; ae++) {
          t.bindFramebuffer(36160, P.__webglMultisampledFramebuffer),
            o.framebufferRenderbuffer(
              36160,
              36064 + ae,
              36161,
              P.__webglColorRenderbuffer[ae]
            );
          const re = n.get(w[ae]).__webglTexture;
          t.bindFramebuffer(36160, P.__webglFramebuffer),
            o.framebufferTexture2D(36009, 36064 + ae, 3553, re, 0);
        }
      t.bindFramebuffer(36009, P.__webglMultisampledFramebuffer);
    }
  }
  function Ye(A) {
    return Math.min(u, A.samples);
  }
  function He(A) {
    const w = n.get(A);
    return (
      s &&
      A.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      w.__useRenderToTexture !== !1
    );
  }
  function Ht(A) {
    const w = a.render.frame;
    g.get(A) !== w && (g.set(A, w), A.update());
  }
  function Pt(A, w) {
    const q = A.encoding,
      te = A.format,
      ne = A.type;
    return (
      A.isCompressedTexture === !0 ||
        A.isVideoTexture === !0 ||
        A.format === bo ||
        (q !== Fi &&
          (q === Be
            ? s === !1
              ? e.has("EXT_sRGB") === !0 && te === on
                ? ((A.format = bo),
                  (A.minFilter = Kt),
                  (A.generateMipmaps = !1))
                : (w = Nh.sRGBToLinear(w))
              : (te !== on || ne !== Ii) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                q
              ))),
      w
    );
  }
  (this.allocateTextureUnit = W),
    (this.resetTextureUnits = Z),
    (this.setTexture2D = K),
    (this.setTexture2DArray = ue),
    (this.setTexture3D = U),
    (this.setTextureCube = $),
    (this.rebindTextures = ut),
    (this.setupRenderTarget = Ct),
    (this.updateRenderTargetMipmap = ft),
    (this.updateMultisampleRenderTarget = dt),
    (this.setupDepthRenderbuffer = Oe),
    (this.setupFrameBufferTexture = ye),
    (this.useMultisampledRTT = He);
}
function A0(o, e, t) {
  const n = t.isWebGL2;
  function i(r, a = null) {
    let s;
    if (r === Ii) return 5121;
    if (r === Jf) return 32819;
    if (r === Qf) return 32820;
    if (r === Zf) return 5120;
    if (r === Kf) return 5122;
    if (r === Rh) return 5123;
    if (r === $f) return 5124;
    if (r === Ai) return 5125;
    if (r === ei) return 5126;
    if (r === rs)
      return n
        ? 5131
        : ((s = e.get("OES_texture_half_float")),
          s !== null ? s.HALF_FLOAT_OES : null);
    if (r === ed) return 6406;
    if (r === on) return 6408;
    if (r === td) return 6409;
    if (r === nd) return 6410;
    if (r === Pi) return 6402;
    if (r === vr) return 34041;
    if (r === bo)
      return (s = e.get("EXT_sRGB")), s !== null ? s.SRGB_ALPHA_EXT : null;
    if (r === id) return 6403;
    if (r === rd) return 36244;
    if (r === sd) return 33319;
    if (r === ad) return 33320;
    if (r === od) return 36249;
    if (r === Ta || r === Ea || r === Aa || r === Ca)
      if (a === Be)
        if (((s = e.get("WEBGL_compressed_texture_s3tc_srgb")), s !== null)) {
          if (r === Ta) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Ea) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Aa) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === Ca) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((s = e.get("WEBGL_compressed_texture_s3tc")), s !== null)) {
        if (r === Ta) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Ea) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Aa) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === Ca) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (r === Ol || r === Nl || r === kl || r === Ul)
      if (((s = e.get("WEBGL_compressed_texture_pvrtc")), s !== null)) {
        if (r === Ol) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === Nl) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === kl) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Ul) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (r === ld)
      return (
        (s = e.get("WEBGL_compressed_texture_etc1")),
        s !== null ? s.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (r === zl || r === Bl)
      if (((s = e.get("WEBGL_compressed_texture_etc")), s !== null)) {
        if (r === zl)
          return a === Be ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (r === Bl)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      r === Gl ||
      r === Vl ||
      r === Wl ||
      r === Hl ||
      r === Xl ||
      r === ql ||
      r === Yl ||
      r === jl ||
      r === Zl ||
      r === Kl ||
      r === $l ||
      r === Jl ||
      r === Ql ||
      r === ec
    )
      if (((s = e.get("WEBGL_compressed_texture_astc")), s !== null)) {
        if (r === Gl)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === Vl)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === Wl)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === Hl)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === Xl)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === ql)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === Yl)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === jl)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === Zl)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === Kl)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === $l)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === Jl)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === Ql)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === ec)
          return a === Be
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (r === Pa)
      if (((s = e.get("EXT_texture_compression_bptc")), s !== null)) {
        if (r === Pa)
          return a === Be
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    if (r === cd || r === tc || r === nc || r === ic)
      if (((s = e.get("EXT_texture_compression_rgtc")), s !== null)) {
        if (r === Pa) return s.COMPRESSED_RED_RGTC1_EXT;
        if (r === tc) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === nc) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === ic) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return r === fr
      ? n
        ? 34042
        : ((s = e.get("WEBGL_depth_texture")),
          s !== null ? s.UNSIGNED_INT_24_8_WEBGL : null)
      : o[r] !== void 0
      ? o[r]
      : null;
  }
  return { convert: i };
}
class C0 extends Ft {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class lr extends je {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const P0 = { type: "move" };
class eo {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new lr()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new lr()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new R()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new R())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new lr()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new R()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new R())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      r = null,
      a = null;
    const s = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const d of e.hand.values()) {
          const m = t.getJointPose(d, n),
            _ = this._getHandJoint(c, d);
          m !== null &&
            (_.matrix.fromArray(m.transform.matrix),
            _.matrix.decompose(_.position, _.rotation, _.scale),
            (_.jointRadius = m.radius)),
            (_.visible = m !== null);
        }
        const h = c.joints["index-finger-tip"],
          u = c.joints["thumb-tip"],
          f = h.position.distanceTo(u.position),
          p = 0.02,
          g = 0.005;
        c.inputState.pinching && f > p + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            f <= p - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          r !== null &&
            (l.matrix.fromArray(r.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            r.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(r.linearVelocity))
              : (l.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(r.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      s !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && r !== null && (i = r),
        i !== null &&
          (s.matrix.fromArray(i.transform.matrix),
          s.matrix.decompose(s.position, s.rotation, s.scale),
          i.linearVelocity
            ? ((s.hasLinearVelocity = !0),
              s.linearVelocity.copy(i.linearVelocity))
            : (s.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((s.hasAngularVelocity = !0),
              s.angularVelocity.copy(i.angularVelocity))
            : (s.hasAngularVelocity = !1),
          this.dispatchEvent(P0)));
    }
    return (
      s !== null && (s.visible = i !== null),
      l !== null && (l.visible = r !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new lr();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class L0 extends Mt {
  constructor(e, t, n, i, r, a, s, l, c, h) {
    if (((h = h !== void 0 ? h : Pi), h !== Pi && h !== vr))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && h === Pi && (n = Ai),
      n === void 0 && h === vr && (n = fr),
      super(null, i, r, a, s, l, h, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = s !== void 0 ? s : xt),
      (this.minFilter = l !== void 0 ? l : xt),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class R0 extends fi {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      r = 1,
      a = null,
      s = "local-floor",
      l = 1,
      c = null,
      h = null,
      u = null,
      f = null,
      p = null,
      g = null;
    const d = t.getContextAttributes();
    let m = null,
      _ = null;
    const b = [],
      x = [],
      y = new Set(),
      M = new Map(),
      E = new Ft();
    E.layers.enable(1), (E.viewport = new ze());
    const C = new Ft();
    C.layers.enable(2), (C.viewport = new ze());
    const v = [E, C],
      S = new C0();
    S.layers.enable(1), S.layers.enable(2);
    let L = null,
      V = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (U) {
        let $ = b[U];
        return (
          $ === void 0 && (($ = new eo()), (b[U] = $)), $.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (U) {
        let $ = b[U];
        return $ === void 0 && (($ = new eo()), (b[U] = $)), $.getGripSpace();
      }),
      (this.getHand = function (U) {
        let $ = b[U];
        return $ === void 0 && (($ = new eo()), (b[U] = $)), $.getHandSpace();
      });
    function G(U) {
      const $ = x.indexOf(U.inputSource);
      if ($ === -1) return;
      const ee = b[$];
      ee !== void 0 && ee.dispatchEvent({ type: U.type, data: U.inputSource });
    }
    function F() {
      i.removeEventListener("select", G),
        i.removeEventListener("selectstart", G),
        i.removeEventListener("selectend", G),
        i.removeEventListener("squeeze", G),
        i.removeEventListener("squeezestart", G),
        i.removeEventListener("squeezeend", G),
        i.removeEventListener("end", F),
        i.removeEventListener("inputsourceschange", D);
      for (let U = 0; U < b.length; U++) {
        const $ = x[U];
        $ !== null && ((x[U] = null), b[U].disconnect($));
      }
      (L = null),
        (V = null),
        e.setRenderTarget(m),
        (p = null),
        (f = null),
        (u = null),
        (i = null),
        (_ = null),
        ue.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (U) {
      (r = U),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (U) {
        (s = U),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return c || a;
      }),
      (this.setReferenceSpace = function (U) {
        c = U;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : p;
      }),
      (this.getBinding = function () {
        return u;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (U) {
        if (((i = U), i !== null)) {
          if (
            ((m = e.getRenderTarget()),
            i.addEventListener("select", G),
            i.addEventListener("selectstart", G),
            i.addEventListener("selectend", G),
            i.addEventListener("squeeze", G),
            i.addEventListener("squeezestart", G),
            i.addEventListener("squeezeend", G),
            i.addEventListener("end", F),
            i.addEventListener("inputsourceschange", D),
            d.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const $ = {
              antialias: i.renderState.layers === void 0 ? d.antialias : !0,
              alpha: d.alpha,
              depth: d.depth,
              stencil: d.stencil,
              framebufferScaleFactor: r,
            };
            (p = new XRWebGLLayer(i, t, $)),
              i.updateRenderState({ baseLayer: p }),
              (_ = new Oi(p.framebufferWidth, p.framebufferHeight, {
                format: on,
                type: Ii,
                encoding: e.outputEncoding,
                stencilBuffer: d.stencil,
              }));
          } else {
            let $ = null,
              ee = null,
              O = null;
            d.depth &&
              ((O = d.stencil ? 35056 : 33190),
              ($ = d.stencil ? vr : Pi),
              (ee = d.stencil ? fr : Ai));
            const le = { colorFormat: 32856, depthFormat: O, scaleFactor: r };
            (u = new XRWebGLBinding(i, t)),
              (f = u.createProjectionLayer(le)),
              i.updateRenderState({ layers: [f] }),
              (_ = new Oi(f.textureWidth, f.textureHeight, {
                format: on,
                type: Ii,
                depthTexture: new L0(
                  f.textureWidth,
                  f.textureHeight,
                  ee,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  $
                ),
                stencilBuffer: d.stencil,
                encoding: e.outputEncoding,
                samples: d.antialias ? 4 : 0,
              }));
            const ce = e.properties.get(_);
            ce.__ignoreDepthValues = f.ignoreDepthValues;
          }
          (_.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (a = await i.requestReferenceSpace(s)),
            ue.setContext(i),
            ue.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      });
    function D(U) {
      for (let $ = 0; $ < U.removed.length; $++) {
        const ee = U.removed[$],
          O = x.indexOf(ee);
        O >= 0 && ((x[O] = null), b[O].disconnect(ee));
      }
      for (let $ = 0; $ < U.added.length; $++) {
        const ee = U.added[$];
        let O = x.indexOf(ee);
        if (O === -1) {
          for (let ce = 0; ce < b.length; ce++)
            if (ce >= x.length) {
              x.push(ee), (O = ce);
              break;
            } else if (x[ce] === null) {
              (x[ce] = ee), (O = ce);
              break;
            }
          if (O === -1) break;
        }
        const le = b[O];
        le && le.connect(ee);
      }
    }
    const B = new R(),
      H = new R();
    function Z(U, $, ee) {
      B.setFromMatrixPosition($.matrixWorld),
        H.setFromMatrixPosition(ee.matrixWorld);
      const O = B.distanceTo(H),
        le = $.projectionMatrix.elements,
        ce = ee.projectionMatrix.elements,
        he = le[14] / (le[10] - 1),
        fe = le[14] / (le[10] + 1),
        ye = (le[9] + 1) / le[5],
        we = (le[9] - 1) / le[5],
        Ee = (le[8] - 1) / le[0],
        Oe = (ce[8] + 1) / ce[0],
        ut = he * Ee,
        Ct = he * Oe,
        ft = O / (-Ee + Oe),
        dt = ft * -Ee;
      $.matrixWorld.decompose(U.position, U.quaternion, U.scale),
        U.translateX(dt),
        U.translateZ(ft),
        U.matrixWorld.compose(U.position, U.quaternion, U.scale),
        U.matrixWorldInverse.copy(U.matrixWorld).invert();
      const Ye = he + ft,
        He = fe + ft,
        Ht = ut - dt,
        Pt = Ct + (O - dt),
        A = ((ye * fe) / He) * Ye,
        w = ((we * fe) / He) * Ye;
      U.projectionMatrix.makePerspective(Ht, Pt, A, w, Ye, He);
    }
    function W(U, $) {
      $ === null
        ? U.matrixWorld.copy(U.matrix)
        : U.matrixWorld.multiplyMatrices($.matrixWorld, U.matrix),
        U.matrixWorldInverse.copy(U.matrixWorld).invert();
    }
    (this.updateCamera = function (U) {
      if (i === null) return;
      (S.near = C.near = E.near = U.near),
        (S.far = C.far = E.far = U.far),
        (L !== S.near || V !== S.far) &&
          (i.updateRenderState({ depthNear: S.near, depthFar: S.far }),
          (L = S.near),
          (V = S.far));
      const $ = U.parent,
        ee = S.cameras;
      W(S, $);
      for (let le = 0; le < ee.length; le++) W(ee[le], $);
      S.matrixWorld.decompose(S.position, S.quaternion, S.scale),
        U.matrix.copy(S.matrix),
        U.matrix.decompose(U.position, U.quaternion, U.scale);
      const O = U.children;
      for (let le = 0, ce = O.length; le < ce; le++)
        O[le].updateMatrixWorld(!0);
      ee.length === 2
        ? Z(S, E, C)
        : S.projectionMatrix.copy(E.projectionMatrix);
    }),
      (this.getCamera = function () {
        return S;
      }),
      (this.getFoveation = function () {
        if (!(f === null && p === null)) return l;
      }),
      (this.setFoveation = function (U) {
        (l = U),
          f !== null && (f.fixedFoveation = U),
          p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = U);
      }),
      (this.getPlanes = function () {
        return y;
      });
    let J = null;
    function K(U, $) {
      if (((h = $.getViewerPose(c || a)), (g = $), h !== null)) {
        const ee = h.views;
        p !== null &&
          (e.setRenderTargetFramebuffer(_, p.framebuffer),
          e.setRenderTarget(_));
        let O = !1;
        ee.length !== S.cameras.length && ((S.cameras.length = 0), (O = !0));
        for (let le = 0; le < ee.length; le++) {
          const ce = ee[le];
          let he = null;
          if (p !== null) he = p.getViewport(ce);
          else {
            const ye = u.getViewSubImage(f, ce);
            (he = ye.viewport),
              le === 0 &&
                (e.setRenderTargetTextures(
                  _,
                  ye.colorTexture,
                  f.ignoreDepthValues ? void 0 : ye.depthStencilTexture
                ),
                e.setRenderTarget(_));
          }
          let fe = v[le];
          fe === void 0 &&
            ((fe = new Ft()),
            fe.layers.enable(le),
            (fe.viewport = new ze()),
            (v[le] = fe)),
            fe.matrix.fromArray(ce.transform.matrix),
            fe.projectionMatrix.fromArray(ce.projectionMatrix),
            fe.viewport.set(he.x, he.y, he.width, he.height),
            le === 0 && S.matrix.copy(fe.matrix),
            O === !0 && S.cameras.push(fe);
        }
      }
      for (let ee = 0; ee < b.length; ee++) {
        const O = x[ee],
          le = b[ee];
        O !== null && le !== void 0 && le.update(O, $, c || a);
      }
      if ((J && J(U, $), $.detectedPlanes)) {
        n.dispatchEvent({ type: "planesdetected", data: $.detectedPlanes });
        let ee = null;
        for (const O of y)
          $.detectedPlanes.has(O) || (ee === null && (ee = []), ee.push(O));
        if (ee !== null)
          for (const O of ee)
            y.delete(O),
              M.delete(O),
              n.dispatchEvent({ type: "planeremoved", data: O });
        for (const O of $.detectedPlanes)
          if (!y.has(O))
            y.add(O),
              M.set(O, $.lastChangedTime),
              n.dispatchEvent({ type: "planeadded", data: O });
          else {
            const le = M.get(O);
            O.lastChangedTime > le &&
              (M.set(O, O.lastChangedTime),
              n.dispatchEvent({ type: "planechanged", data: O }));
          }
      }
      g = null;
    }
    const ue = new Xh();
    ue.setAnimationLoop(K),
      (this.setAnimationLoop = function (U) {
        J = U;
      }),
      (this.dispose = function () {});
  }
}
function D0(o, e) {
  function t(d, m) {
    m.color.getRGB(d.fogColor.value, Hh(o)),
      m.isFog
        ? ((d.fogNear.value = m.near), (d.fogFar.value = m.far))
        : m.isFogExp2 && (d.fogDensity.value = m.density);
  }
  function n(d, m, _, b, x) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial
      ? i(d, m)
      : m.isMeshToonMaterial
      ? (i(d, m), h(d, m))
      : m.isMeshPhongMaterial
      ? (i(d, m), c(d, m))
      : m.isMeshStandardMaterial
      ? (i(d, m), u(d, m), m.isMeshPhysicalMaterial && f(d, m, x))
      : m.isMeshMatcapMaterial
      ? (i(d, m), p(d, m))
      : m.isMeshDepthMaterial
      ? i(d, m)
      : m.isMeshDistanceMaterial
      ? (i(d, m), g(d, m))
      : m.isMeshNormalMaterial
      ? i(d, m)
      : m.isLineBasicMaterial
      ? (r(d, m), m.isLineDashedMaterial && a(d, m))
      : m.isPointsMaterial
      ? s(d, m, _, b)
      : m.isSpriteMaterial
      ? l(d, m)
      : m.isShadowMaterial
      ? (d.color.value.copy(m.color), (d.opacity.value = m.opacity))
      : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function i(d, m) {
    (d.opacity.value = m.opacity),
      m.color && d.diffuse.value.copy(m.color),
      m.emissive &&
        d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),
      m.map && (d.map.value = m.map),
      m.alphaMap && (d.alphaMap.value = m.alphaMap),
      m.bumpMap &&
        ((d.bumpMap.value = m.bumpMap),
        (d.bumpScale.value = m.bumpScale),
        m.side === Jt && (d.bumpScale.value *= -1)),
      m.displacementMap &&
        ((d.displacementMap.value = m.displacementMap),
        (d.displacementScale.value = m.displacementScale),
        (d.displacementBias.value = m.displacementBias)),
      m.emissiveMap && (d.emissiveMap.value = m.emissiveMap),
      m.normalMap &&
        ((d.normalMap.value = m.normalMap),
        d.normalScale.value.copy(m.normalScale),
        m.side === Jt && d.normalScale.value.negate()),
      m.specularMap && (d.specularMap.value = m.specularMap),
      m.alphaTest > 0 && (d.alphaTest.value = m.alphaTest);
    const _ = e.get(m).envMap;
    if (
      (_ &&
        ((d.envMap.value = _),
        (d.flipEnvMap.value =
          _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
        (d.reflectivity.value = m.reflectivity),
        (d.ior.value = m.ior),
        (d.refractionRatio.value = m.refractionRatio)),
      m.lightMap)
    ) {
      d.lightMap.value = m.lightMap;
      const y = o.useLegacyLights === !0 ? Math.PI : 1;
      d.lightMapIntensity.value = m.lightMapIntensity * y;
    }
    m.aoMap &&
      ((d.aoMap.value = m.aoMap), (d.aoMapIntensity.value = m.aoMapIntensity));
    let b;
    m.map
      ? (b = m.map)
      : m.specularMap
      ? (b = m.specularMap)
      : m.displacementMap
      ? (b = m.displacementMap)
      : m.normalMap
      ? (b = m.normalMap)
      : m.bumpMap
      ? (b = m.bumpMap)
      : m.roughnessMap
      ? (b = m.roughnessMap)
      : m.metalnessMap
      ? (b = m.metalnessMap)
      : m.alphaMap
      ? (b = m.alphaMap)
      : m.emissiveMap
      ? (b = m.emissiveMap)
      : m.clearcoatMap
      ? (b = m.clearcoatMap)
      : m.clearcoatNormalMap
      ? (b = m.clearcoatNormalMap)
      : m.clearcoatRoughnessMap
      ? (b = m.clearcoatRoughnessMap)
      : m.iridescenceMap
      ? (b = m.iridescenceMap)
      : m.iridescenceThicknessMap
      ? (b = m.iridescenceThicknessMap)
      : m.specularIntensityMap
      ? (b = m.specularIntensityMap)
      : m.specularColorMap
      ? (b = m.specularColorMap)
      : m.transmissionMap
      ? (b = m.transmissionMap)
      : m.thicknessMap
      ? (b = m.thicknessMap)
      : m.sheenColorMap
      ? (b = m.sheenColorMap)
      : m.sheenRoughnessMap && (b = m.sheenRoughnessMap),
      b !== void 0 &&
        (b.isWebGLRenderTarget && (b = b.texture),
        b.matrixAutoUpdate === !0 && b.updateMatrix(),
        d.uvTransform.value.copy(b.matrix));
    let x;
    m.aoMap ? (x = m.aoMap) : m.lightMap && (x = m.lightMap),
      x !== void 0 &&
        (x.isWebGLRenderTarget && (x = x.texture),
        x.matrixAutoUpdate === !0 && x.updateMatrix(),
        d.uv2Transform.value.copy(x.matrix));
  }
  function r(d, m) {
    d.diffuse.value.copy(m.color), (d.opacity.value = m.opacity);
  }
  function a(d, m) {
    (d.dashSize.value = m.dashSize),
      (d.totalSize.value = m.dashSize + m.gapSize),
      (d.scale.value = m.scale);
  }
  function s(d, m, _, b) {
    d.diffuse.value.copy(m.color),
      (d.opacity.value = m.opacity),
      (d.size.value = m.size * _),
      (d.scale.value = b * 0.5),
      m.map && (d.map.value = m.map),
      m.alphaMap && (d.alphaMap.value = m.alphaMap),
      m.alphaTest > 0 && (d.alphaTest.value = m.alphaTest);
    let x;
    m.map ? (x = m.map) : m.alphaMap && (x = m.alphaMap),
      x !== void 0 &&
        (x.matrixAutoUpdate === !0 && x.updateMatrix(),
        d.uvTransform.value.copy(x.matrix));
  }
  function l(d, m) {
    d.diffuse.value.copy(m.color),
      (d.opacity.value = m.opacity),
      (d.rotation.value = m.rotation),
      m.map && (d.map.value = m.map),
      m.alphaMap && (d.alphaMap.value = m.alphaMap),
      m.alphaTest > 0 && (d.alphaTest.value = m.alphaTest);
    let _;
    m.map ? (_ = m.map) : m.alphaMap && (_ = m.alphaMap),
      _ !== void 0 &&
        (_.matrixAutoUpdate === !0 && _.updateMatrix(),
        d.uvTransform.value.copy(_.matrix));
  }
  function c(d, m) {
    d.specular.value.copy(m.specular),
      (d.shininess.value = Math.max(m.shininess, 1e-4));
  }
  function h(d, m) {
    m.gradientMap && (d.gradientMap.value = m.gradientMap);
  }
  function u(d, m) {
    (d.roughness.value = m.roughness),
      (d.metalness.value = m.metalness),
      m.roughnessMap && (d.roughnessMap.value = m.roughnessMap),
      m.metalnessMap && (d.metalnessMap.value = m.metalnessMap),
      e.get(m).envMap && (d.envMapIntensity.value = m.envMapIntensity);
  }
  function f(d, m, _) {
    (d.ior.value = m.ior),
      m.sheen > 0 &&
        (d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),
        (d.sheenRoughness.value = m.sheenRoughness),
        m.sheenColorMap && (d.sheenColorMap.value = m.sheenColorMap),
        m.sheenRoughnessMap &&
          (d.sheenRoughnessMap.value = m.sheenRoughnessMap)),
      m.clearcoat > 0 &&
        ((d.clearcoat.value = m.clearcoat),
        (d.clearcoatRoughness.value = m.clearcoatRoughness),
        m.clearcoatMap && (d.clearcoatMap.value = m.clearcoatMap),
        m.clearcoatRoughnessMap &&
          (d.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap),
        m.clearcoatNormalMap &&
          (d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),
          (d.clearcoatNormalMap.value = m.clearcoatNormalMap),
          m.side === Jt && d.clearcoatNormalScale.value.negate())),
      m.iridescence > 0 &&
        ((d.iridescence.value = m.iridescence),
        (d.iridescenceIOR.value = m.iridescenceIOR),
        (d.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0]),
        (d.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1]),
        m.iridescenceMap && (d.iridescenceMap.value = m.iridescenceMap),
        m.iridescenceThicknessMap &&
          (d.iridescenceThicknessMap.value = m.iridescenceThicknessMap)),
      m.transmission > 0 &&
        ((d.transmission.value = m.transmission),
        (d.transmissionSamplerMap.value = _.texture),
        d.transmissionSamplerSize.value.set(_.width, _.height),
        m.transmissionMap && (d.transmissionMap.value = m.transmissionMap),
        (d.thickness.value = m.thickness),
        m.thicknessMap && (d.thicknessMap.value = m.thicknessMap),
        (d.attenuationDistance.value = m.attenuationDistance),
        d.attenuationColor.value.copy(m.attenuationColor)),
      (d.specularIntensity.value = m.specularIntensity),
      d.specularColor.value.copy(m.specularColor),
      m.specularIntensityMap &&
        (d.specularIntensityMap.value = m.specularIntensityMap),
      m.specularColorMap && (d.specularColorMap.value = m.specularColorMap);
  }
  function p(d, m) {
    m.matcap && (d.matcap.value = m.matcap);
  }
  function g(d, m) {
    d.referencePosition.value.copy(m.referencePosition),
      (d.nearDistance.value = m.nearDistance),
      (d.farDistance.value = m.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: n };
}
function I0(o, e, t, n) {
  let i = {},
    r = {},
    a = [];
  const s = t.isWebGL2 ? o.getParameter(35375) : 0;
  function l(b, x) {
    const y = x.program;
    n.uniformBlockBinding(b, y);
  }
  function c(b, x) {
    let y = i[b.id];
    y === void 0 &&
      (g(b), (y = h(b)), (i[b.id] = y), b.addEventListener("dispose", m));
    const M = x.program;
    n.updateUBOMapping(b, M);
    const E = e.render.frame;
    r[b.id] !== E && (f(b), (r[b.id] = E));
  }
  function h(b) {
    const x = u();
    b.__bindingPointIndex = x;
    const y = o.createBuffer(),
      M = b.__size,
      E = b.usage;
    return (
      o.bindBuffer(35345, y),
      o.bufferData(35345, M, E),
      o.bindBuffer(35345, null),
      o.bindBufferBase(35345, x, y),
      y
    );
  }
  function u() {
    for (let b = 0; b < s; b++) if (a.indexOf(b) === -1) return a.push(b), b;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function f(b) {
    const x = i[b.id],
      y = b.uniforms,
      M = b.__cache;
    o.bindBuffer(35345, x);
    for (let E = 0, C = y.length; E < C; E++) {
      const v = y[E];
      if (p(v, E, M) === !0) {
        const S = v.__offset,
          L = Array.isArray(v.value) ? v.value : [v.value];
        let V = 0;
        for (let G = 0; G < L.length; G++) {
          const F = L[G],
            D = d(F);
          typeof F == "number"
            ? ((v.__data[0] = F), o.bufferSubData(35345, S + V, v.__data))
            : F.isMatrix3
            ? ((v.__data[0] = F.elements[0]),
              (v.__data[1] = F.elements[1]),
              (v.__data[2] = F.elements[2]),
              (v.__data[3] = F.elements[0]),
              (v.__data[4] = F.elements[3]),
              (v.__data[5] = F.elements[4]),
              (v.__data[6] = F.elements[5]),
              (v.__data[7] = F.elements[0]),
              (v.__data[8] = F.elements[6]),
              (v.__data[9] = F.elements[7]),
              (v.__data[10] = F.elements[8]),
              (v.__data[11] = F.elements[0]))
            : (F.toArray(v.__data, V),
              (V += D.storage / Float32Array.BYTES_PER_ELEMENT));
        }
        o.bufferSubData(35345, S, v.__data);
      }
    }
    o.bindBuffer(35345, null);
  }
  function p(b, x, y) {
    const M = b.value;
    if (y[x] === void 0) {
      if (typeof M == "number") y[x] = M;
      else {
        const E = Array.isArray(M) ? M : [M],
          C = [];
        for (let v = 0; v < E.length; v++) C.push(E[v].clone());
        y[x] = C;
      }
      return !0;
    } else if (typeof M == "number") {
      if (y[x] !== M) return (y[x] = M), !0;
    } else {
      const E = Array.isArray(y[x]) ? y[x] : [y[x]],
        C = Array.isArray(M) ? M : [M];
      for (let v = 0; v < E.length; v++) {
        const S = E[v];
        if (S.equals(C[v]) === !1) return S.copy(C[v]), !0;
      }
    }
    return !1;
  }
  function g(b) {
    const x = b.uniforms;
    let y = 0;
    const M = 16;
    let E = 0;
    for (let C = 0, v = x.length; C < v; C++) {
      const S = x[C],
        L = { boundary: 0, storage: 0 },
        V = Array.isArray(S.value) ? S.value : [S.value];
      for (let G = 0, F = V.length; G < F; G++) {
        const D = V[G],
          B = d(D);
        (L.boundary += B.boundary), (L.storage += B.storage);
      }
      if (
        ((S.__data = new Float32Array(
          L.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (S.__offset = y),
        C > 0)
      ) {
        E = y % M;
        const G = M - E;
        E !== 0 && G - L.boundary < 0 && ((y += M - E), (S.__offset = y));
      }
      y += L.storage;
    }
    return (
      (E = y % M), E > 0 && (y += M - E), (b.__size = y), (b.__cache = {}), this
    );
  }
  function d(b) {
    const x = { boundary: 0, storage: 0 };
    return (
      typeof b == "number"
        ? ((x.boundary = 4), (x.storage = 4))
        : b.isVector2
        ? ((x.boundary = 8), (x.storage = 8))
        : b.isVector3 || b.isColor
        ? ((x.boundary = 16), (x.storage = 12))
        : b.isVector4
        ? ((x.boundary = 16), (x.storage = 16))
        : b.isMatrix3
        ? ((x.boundary = 48), (x.storage = 48))
        : b.isMatrix4
        ? ((x.boundary = 64), (x.storage = 64))
        : b.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            b
          ),
      x
    );
  }
  function m(b) {
    const x = b.target;
    x.removeEventListener("dispose", m);
    const y = a.indexOf(x.__bindingPointIndex);
    a.splice(y, 1), o.deleteBuffer(i[x.id]), delete i[x.id], delete r[x.id];
  }
  function _() {
    for (const b in i) o.deleteBuffer(i[b]);
    (a = []), (i = {}), (r = {});
  }
  return { bind: l, update: c, dispose: _ };
}
function F0() {
  const o = os("canvas");
  return (o.style.display = "block"), o;
}
function tl(o = {}) {
  this.isWebGLRenderer = !0;
  const e = o.canvas !== void 0 ? o.canvas : F0(),
    t = o.context !== void 0 ? o.context : null,
    n = o.depth !== void 0 ? o.depth : !0,
    i = o.stencil !== void 0 ? o.stencil : !0,
    r = o.antialias !== void 0 ? o.antialias : !1,
    a = o.premultipliedAlpha !== void 0 ? o.premultipliedAlpha : !0,
    s = o.preserveDrawingBuffer !== void 0 ? o.preserveDrawingBuffer : !1,
    l = o.powerPreference !== void 0 ? o.powerPreference : "default",
    c =
      o.failIfMajorPerformanceCaveat !== void 0
        ? o.failIfMajorPerformanceCaveat
        : !1;
  let h;
  t !== null
    ? (h = t.getContextAttributes().alpha)
    : (h = o.alpha !== void 0 ? o.alpha : !1);
  let u = null,
    f = null;
  const p = [],
    g = [];
  (this.domElement = e),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = Fi),
    (this.useLegacyLights = !0),
    (this.toneMapping = Hn),
    (this.toneMappingExposure = 1);
  const d = this;
  let m = !1,
    _ = 0,
    b = 0,
    x = null,
    y = -1,
    M = null;
  const E = new ze(),
    C = new ze();
  let v = null,
    S = e.width,
    L = e.height,
    V = 1,
    G = null,
    F = null;
  const D = new ze(0, 0, S, L),
    B = new ze(0, 0, S, L);
  let H = !1;
  const Z = new $o();
  let W = !1,
    J = !1,
    K = null;
  const ue = new ve(),
    U = new R(),
    $ = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function ee() {
    return x === null ? V : 1;
  }
  let O = t;
  function le(T, z) {
    for (let X = 0; X < T.length; X++) {
      const k = T[X],
        j = e.getContext(k, z);
      if (j !== null) return j;
    }
    return null;
  }
  try {
    const T = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: r,
      premultipliedAlpha: a,
      preserveDrawingBuffer: s,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c,
    };
    if (
      ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Ho}`),
      e.addEventListener("webglcontextlost", pe, !1),
      e.addEventListener("webglcontextrestored", ge, !1),
      e.addEventListener("webglcontextcreationerror", me, !1),
      O === null)
    ) {
      const z = ["webgl2", "webgl", "experimental-webgl"];
      if ((d.isWebGL1Renderer === !0 && z.shift(), (O = le(z, T)), O === null))
        throw le(z)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    O.getShaderPrecisionFormat === void 0 &&
      (O.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (T) {
    throw (console.error("THREE.WebGLRenderer: " + T.message), T);
  }
  let ce,
    he,
    fe,
    ye,
    we,
    Ee,
    Oe,
    ut,
    Ct,
    ft,
    dt,
    Ye,
    He,
    Ht,
    Pt,
    A,
    w,
    q,
    te,
    ne,
    se,
    _e,
    P,
    N;
  function ae() {
    (ce = new Xg(O)),
      (he = new zg(O, ce, o)),
      ce.init(he),
      (_e = new A0(O, ce, he)),
      (fe = new T0(O, ce, he)),
      (ye = new jg()),
      (we = new u0()),
      (Ee = new E0(O, ce, fe, we, he, _e, ye)),
      (Oe = new Gg(d)),
      (ut = new Hg(d)),
      (Ct = new ip(O, he)),
      (P = new kg(O, ce, Ct, he)),
      (ft = new qg(O, Ct, ye, P)),
      (dt = new Jg(O, ft, Ct, ye)),
      (te = new $g(O, he, Ee)),
      (A = new Bg(we)),
      (Ye = new h0(d, Oe, ut, ce, he, P, A)),
      (He = new D0(d, we)),
      (Ht = new d0()),
      (Pt = new v0(ce, he)),
      (q = new Ng(d, Oe, ut, fe, dt, h, a)),
      (w = new w0(d, dt, he)),
      (N = new I0(O, ye, he, fe)),
      (ne = new Ug(O, ce, ye, he)),
      (se = new Yg(O, ce, ye, he)),
      (ye.programs = Ye.programs),
      (d.capabilities = he),
      (d.extensions = ce),
      (d.properties = we),
      (d.renderLists = Ht),
      (d.shadowMap = w),
      (d.state = fe),
      (d.info = ye);
  }
  ae();
  const re = new R0(d, O);
  (this.xr = re),
    (this.getContext = function () {
      return O;
    }),
    (this.getContextAttributes = function () {
      return O.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const T = ce.get("WEBGL_lose_context");
      T && T.loseContext();
    }),
    (this.forceContextRestore = function () {
      const T = ce.get("WEBGL_lose_context");
      T && T.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return V;
    }),
    (this.setPixelRatio = function (T) {
      T !== void 0 && ((V = T), this.setSize(S, L, !1));
    }),
    (this.getSize = function (T) {
      return T.set(S, L);
    }),
    (this.setSize = function (T, z, X = !0) {
      if (re.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (S = T),
        (L = z),
        (e.width = Math.floor(T * V)),
        (e.height = Math.floor(z * V)),
        X === !0 && ((e.style.width = T + "px"), (e.style.height = z + "px")),
        this.setViewport(0, 0, T, z);
    }),
    (this.getDrawingBufferSize = function (T) {
      return T.set(S * V, L * V).floor();
    }),
    (this.setDrawingBufferSize = function (T, z, X) {
      (S = T),
        (L = z),
        (V = X),
        (e.width = Math.floor(T * X)),
        (e.height = Math.floor(z * X)),
        this.setViewport(0, 0, T, z);
    }),
    (this.getCurrentViewport = function (T) {
      return T.copy(E);
    }),
    (this.getViewport = function (T) {
      return T.copy(D);
    }),
    (this.setViewport = function (T, z, X, k) {
      T.isVector4 ? D.set(T.x, T.y, T.z, T.w) : D.set(T, z, X, k),
        fe.viewport(E.copy(D).multiplyScalar(V).floor());
    }),
    (this.getScissor = function (T) {
      return T.copy(B);
    }),
    (this.setScissor = function (T, z, X, k) {
      T.isVector4 ? B.set(T.x, T.y, T.z, T.w) : B.set(T, z, X, k),
        fe.scissor(C.copy(B).multiplyScalar(V).floor());
    }),
    (this.getScissorTest = function () {
      return H;
    }),
    (this.setScissorTest = function (T) {
      fe.setScissorTest((H = T));
    }),
    (this.setOpaqueSort = function (T) {
      G = T;
    }),
    (this.setTransparentSort = function (T) {
      F = T;
    }),
    (this.getClearColor = function (T) {
      return T.copy(q.getClearColor());
    }),
    (this.setClearColor = function () {
      q.setClearColor.apply(q, arguments);
    }),
    (this.getClearAlpha = function () {
      return q.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      q.setClearAlpha.apply(q, arguments);
    }),
    (this.clear = function (T = !0, z = !0, X = !0) {
      let k = 0;
      T && (k |= 16384), z && (k |= 256), X && (k |= 1024), O.clear(k);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener("webglcontextlost", pe, !1),
        e.removeEventListener("webglcontextrestored", ge, !1),
        e.removeEventListener("webglcontextcreationerror", me, !1),
        Ht.dispose(),
        Pt.dispose(),
        we.dispose(),
        Oe.dispose(),
        ut.dispose(),
        dt.dispose(),
        P.dispose(),
        N.dispose(),
        Ye.dispose(),
        re.dispose(),
        re.removeEventListener("sessionstart", Q),
        re.removeEventListener("sessionend", oe),
        K && (K.dispose(), (K = null)),
        de.stop();
    });
  function pe(T) {
    T.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (m = !0);
  }
  function ge() {
    console.log("THREE.WebGLRenderer: Context Restored."), (m = !1);
    const T = ye.autoReset,
      z = w.enabled,
      X = w.autoUpdate,
      k = w.needsUpdate,
      j = w.type;
    ae(),
      (ye.autoReset = T),
      (w.enabled = z),
      (w.autoUpdate = X),
      (w.needsUpdate = k),
      (w.type = j);
  }
  function me(T) {
    console.error(
      "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
      T.statusMessage
    );
  }
  function Le(T) {
    const z = T.target;
    z.removeEventListener("dispose", Le), Ne(z);
  }
  function Ne(T) {
    Ge(T), we.remove(T);
  }
  function Ge(T) {
    const z = we.get(T).programs;
    z !== void 0 &&
      (z.forEach(function (X) {
        Ye.releaseProgram(X);
      }),
      T.isShaderMaterial && Ye.releaseShaderCache(T));
  }
  (this.renderBufferDirect = function (T, z, X, k, j, xe) {
    z === null && (z = $);
    const be = j.isMesh && j.matrixWorld.determinant() < 0,
      Ae = mf(T, z, X, k, j);
    fe.setMaterial(k, be);
    let Ce = X.index,
      Ue = 1;
    k.wireframe === !0 && ((Ce = ft.getWireframeAttribute(X)), (Ue = 2));
    const De = X.drawRange,
      Ie = X.attributes.position;
    let rt = De.start * Ue,
      Xt = (De.start + De.count) * Ue;
    xe !== null &&
      ((rt = Math.max(rt, xe.start * Ue)),
      (Xt = Math.min(Xt, (xe.start + xe.count) * Ue))),
      Ce !== null
        ? ((rt = Math.max(rt, 0)), (Xt = Math.min(Xt, Ce.count)))
        : Ie != null && ((rt = Math.max(rt, 0)), (Xt = Math.min(Xt, Ie.count)));
    const In = Xt - rt;
    if (In < 0 || In === 1 / 0) return;
    P.setup(j, k, Ae, X, Ce);
    let mi,
      st = ne;
    if (
      (Ce !== null && ((mi = Ct.get(Ce)), (st = se), st.setIndex(mi)), j.isMesh)
    )
      k.wireframe === !0
        ? (fe.setLineWidth(k.wireframeLinewidth * ee()), st.setMode(1))
        : st.setMode(4);
    else if (j.isLine) {
      let Fe = k.linewidth;
      Fe === void 0 && (Fe = 1),
        fe.setLineWidth(Fe * ee()),
        j.isLineSegments
          ? st.setMode(1)
          : j.isLineLoop
          ? st.setMode(2)
          : st.setMode(3);
    } else j.isPoints ? st.setMode(0) : j.isSprite && st.setMode(4);
    if (j.isInstancedMesh) st.renderInstances(rt, In, j.count);
    else if (X.isInstancedBufferGeometry) {
      const Fe = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0,
        ya = Math.min(X.instanceCount, Fe);
      st.renderInstances(rt, In, ya);
    } else st.render(rt, In);
  }),
    (this.compile = function (T, z) {
      function X(k, j, xe) {
        k.transparent === !0 && k.side === Qn && k.forceSinglePass === !1
          ? ((k.side = Jt),
            (k.needsUpdate = !0),
            nn(k, j, xe),
            (k.side = ci),
            (k.needsUpdate = !0),
            nn(k, j, xe),
            (k.side = Qn))
          : nn(k, j, xe);
      }
      (f = Pt.get(T)),
        f.init(),
        g.push(f),
        T.traverseVisible(function (k) {
          k.isLight &&
            k.layers.test(z.layers) &&
            (f.pushLight(k), k.castShadow && f.pushShadow(k));
        }),
        f.setupLights(d.useLegacyLights),
        T.traverse(function (k) {
          const j = k.material;
          if (j)
            if (Array.isArray(j))
              for (let xe = 0; xe < j.length; xe++) {
                const be = j[xe];
                X(be, T, k);
              }
            else X(j, T, k);
        }),
        g.pop(),
        (f = null);
    });
  let I = null;
  function Y(T) {
    I && I(T);
  }
  function Q() {
    de.stop();
  }
  function oe() {
    de.start();
  }
  const de = new Xh();
  de.setAnimationLoop(Y),
    typeof self < "u" && de.setContext(self),
    (this.setAnimationLoop = function (T) {
      (I = T), re.setAnimationLoop(T), T === null ? de.stop() : de.start();
    }),
    re.addEventListener("sessionstart", Q),
    re.addEventListener("sessionend", oe),
    (this.render = function (T, z) {
      if (z !== void 0 && z.isCamera !== !0) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (m === !0) return;
      T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(),
        z.parent === null &&
          z.matrixWorldAutoUpdate === !0 &&
          z.updateMatrixWorld(),
        re.enabled === !0 &&
          re.isPresenting === !0 &&
          (re.cameraAutoUpdate === !0 && re.updateCamera(z),
          (z = re.getCamera())),
        T.isScene === !0 && T.onBeforeRender(d, T, z, x),
        (f = Pt.get(T, g.length)),
        f.init(),
        g.push(f),
        ue.multiplyMatrices(z.projectionMatrix, z.matrixWorldInverse),
        Z.setFromProjectionMatrix(ue),
        (J = this.localClippingEnabled),
        (W = A.init(this.clippingPlanes, J)),
        (u = Ht.get(T, p.length)),
        u.init(),
        p.push(u),
        Xe(T, z, 0, d.sortObjects),
        u.finish(),
        d.sortObjects === !0 && u.sort(G, F),
        W === !0 && A.beginShadows();
      const X = f.state.shadowsArray;
      if (
        (w.render(X, T, z),
        W === !0 && A.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        q.render(u, T),
        f.setupLights(d.useLegacyLights),
        z.isArrayCamera)
      ) {
        const k = z.cameras;
        for (let j = 0, xe = k.length; j < xe; j++) {
          const be = k[j];
          pt(u, T, be, be.viewport);
        }
      } else pt(u, T, z);
      x !== null &&
        (Ee.updateMultisampleRenderTarget(x), Ee.updateRenderTargetMipmap(x)),
        T.isScene === !0 && T.onAfterRender(d, T, z),
        P.resetDefaultState(),
        (y = -1),
        (M = null),
        g.pop(),
        g.length > 0 ? (f = g[g.length - 1]) : (f = null),
        p.pop(),
        p.length > 0 ? (u = p[p.length - 1]) : (u = null);
    });
  function Xe(T, z, X, k) {
    if (T.visible === !1) return;
    if (T.layers.test(z.layers)) {
      if (T.isGroup) X = T.renderOrder;
      else if (T.isLOD) T.autoUpdate === !0 && T.update(z);
      else if (T.isLight) f.pushLight(T), T.castShadow && f.pushShadow(T);
      else if (T.isSprite) {
        if (!T.frustumCulled || Z.intersectsSprite(T)) {
          k && U.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);
          const be = dt.update(T),
            Ae = T.material;
          Ae.visible && u.push(T, be, Ae, X, U.z, null);
        }
      } else if (
        (T.isMesh || T.isLine || T.isPoints) &&
        (T.isSkinnedMesh &&
          T.skeleton.frame !== ye.render.frame &&
          (T.skeleton.update(), (T.skeleton.frame = ye.render.frame)),
        !T.frustumCulled || Z.intersectsObject(T))
      ) {
        k && U.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);
        const be = dt.update(T),
          Ae = T.material;
        if (Array.isArray(Ae)) {
          const Ce = be.groups;
          for (let Ue = 0, De = Ce.length; Ue < De; Ue++) {
            const Ie = Ce[Ue],
              rt = Ae[Ie.materialIndex];
            rt && rt.visible && u.push(T, be, rt, X, U.z, Ie);
          }
        } else Ae.visible && u.push(T, be, Ae, X, U.z, null);
      }
    }
    const xe = T.children;
    for (let be = 0, Ae = xe.length; be < Ae; be++) Xe(xe[be], z, X, k);
  }
  function pt(T, z, X, k) {
    const j = T.opaque,
      xe = T.transmissive,
      be = T.transparent;
    f.setupLightsView(X),
      W === !0 && A.setGlobalState(d.clippingPlanes, X),
      xe.length > 0 && Lt(j, z, X),
      k && fe.viewport(E.copy(k)),
      j.length > 0 && yn(j, z, X),
      xe.length > 0 && yn(xe, z, X),
      be.length > 0 && yn(be, z, X),
      fe.buffers.depth.setTest(!0),
      fe.buffers.depth.setMask(!0),
      fe.buffers.color.setMask(!0),
      fe.setPolygonOffset(!1);
  }
  function Lt(T, z, X) {
    const k = he.isWebGL2;
    K === null &&
      (K = new Oi(1024, 1024, {
        generateMipmaps: !0,
        type: ce.has("EXT_color_buffer_half_float") ? rs : Ii,
        minFilter: is,
        samples: k && r === !0 ? 4 : 0,
      }));
    const j = d.getRenderTarget();
    d.setRenderTarget(K), d.clear();
    const xe = d.toneMapping;
    (d.toneMapping = Hn),
      yn(T, z, X),
      (d.toneMapping = xe),
      Ee.updateMultisampleRenderTarget(K),
      Ee.updateRenderTargetMipmap(K),
      d.setRenderTarget(j);
  }
  function yn(T, z, X) {
    const k = z.isScene === !0 ? z.overrideMaterial : null;
    for (let j = 0, xe = T.length; j < xe; j++) {
      const be = T[j],
        Ae = be.object,
        Ce = be.geometry,
        Ue = k === null ? be.material : k,
        De = be.group;
      Ae.layers.test(X.layers) && et(Ae, z, X, Ce, Ue, De);
    }
  }
  function et(T, z, X, k, j, xe) {
    T.onBeforeRender(d, z, X, k, j, xe),
      T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, T.matrixWorld),
      T.normalMatrix.getNormalMatrix(T.modelViewMatrix),
      j.onBeforeRender(d, z, X, k, T, xe),
      j.transparent === !0 && j.side === Qn && j.forceSinglePass === !1
        ? ((j.side = Jt),
          (j.needsUpdate = !0),
          d.renderBufferDirect(X, z, k, j, T, xe),
          (j.side = ci),
          (j.needsUpdate = !0),
          d.renderBufferDirect(X, z, k, j, T, xe),
          (j.side = Qn))
        : d.renderBufferDirect(X, z, k, j, T, xe),
      T.onAfterRender(d, z, X, k, j, xe);
  }
  function nn(T, z, X) {
    z.isScene !== !0 && (z = $);
    const k = we.get(T),
      j = f.state.lights,
      xe = f.state.shadowsArray,
      be = j.state.version,
      Ae = Ye.getParameters(T, j.state, xe, z, X),
      Ce = Ye.getProgramCacheKey(Ae);
    let Ue = k.programs;
    (k.environment = T.isMeshStandardMaterial ? z.environment : null),
      (k.fog = z.fog),
      (k.envMap = (T.isMeshStandardMaterial ? ut : Oe).get(
        T.envMap || k.environment
      )),
      Ue === void 0 &&
        (T.addEventListener("dispose", Le),
        (Ue = new Map()),
        (k.programs = Ue));
    let De = Ue.get(Ce);
    if (De !== void 0) {
      if (k.currentProgram === De && k.lightsStateVersion === be)
        return Mn(T, Ae), De;
    } else
      (Ae.uniforms = Ye.getUniforms(T)),
        T.onBuild(X, Ae, d),
        T.onBeforeCompile(Ae, d),
        (De = Ye.acquireProgram(Ae, Ce)),
        Ue.set(Ce, De),
        (k.uniforms = Ae.uniforms);
    const Ie = k.uniforms;
    ((!T.isShaderMaterial && !T.isRawShaderMaterial) || T.clipping === !0) &&
      (Ie.clippingPlanes = A.uniform),
      Mn(T, Ae),
      (k.needsLights = _f(T)),
      (k.lightsStateVersion = be),
      k.needsLights &&
        ((Ie.ambientLightColor.value = j.state.ambient),
        (Ie.lightProbe.value = j.state.probe),
        (Ie.directionalLights.value = j.state.directional),
        (Ie.directionalLightShadows.value = j.state.directionalShadow),
        (Ie.spotLights.value = j.state.spot),
        (Ie.spotLightShadows.value = j.state.spotShadow),
        (Ie.rectAreaLights.value = j.state.rectArea),
        (Ie.ltc_1.value = j.state.rectAreaLTC1),
        (Ie.ltc_2.value = j.state.rectAreaLTC2),
        (Ie.pointLights.value = j.state.point),
        (Ie.pointLightShadows.value = j.state.pointShadow),
        (Ie.hemisphereLights.value = j.state.hemi),
        (Ie.directionalShadowMap.value = j.state.directionalShadowMap),
        (Ie.directionalShadowMatrix.value = j.state.directionalShadowMatrix),
        (Ie.spotShadowMap.value = j.state.spotShadowMap),
        (Ie.spotLightMatrix.value = j.state.spotLightMatrix),
        (Ie.spotLightMap.value = j.state.spotLightMap),
        (Ie.pointShadowMap.value = j.state.pointShadowMap),
        (Ie.pointShadowMatrix.value = j.state.pointShadowMatrix));
    const rt = De.getUniforms(),
      Xt = Xs.seqWithValue(rt.seq, Ie);
    return (k.currentProgram = De), (k.uniformsList = Xt), De;
  }
  function Mn(T, z) {
    const X = we.get(T);
    (X.outputEncoding = z.outputEncoding),
      (X.instancing = z.instancing),
      (X.skinning = z.skinning),
      (X.morphTargets = z.morphTargets),
      (X.morphNormals = z.morphNormals),
      (X.morphColors = z.morphColors),
      (X.morphTargetsCount = z.morphTargetsCount),
      (X.numClippingPlanes = z.numClippingPlanes),
      (X.numIntersection = z.numClipIntersection),
      (X.vertexAlphas = z.vertexAlphas),
      (X.vertexTangents = z.vertexTangents),
      (X.toneMapping = z.toneMapping);
  }
  function mf(T, z, X, k, j) {
    z.isScene !== !0 && (z = $), Ee.resetTextureUnits();
    const xe = z.fog,
      be = k.isMeshStandardMaterial ? z.environment : null,
      Ae =
        x === null
          ? d.outputEncoding
          : x.isXRRenderTarget === !0
          ? x.texture.encoding
          : Fi,
      Ce = (k.isMeshStandardMaterial ? ut : Oe).get(k.envMap || be),
      Ue =
        k.vertexColors === !0 &&
        !!X.attributes.color &&
        X.attributes.color.itemSize === 4,
      De = !!k.normalMap && !!X.attributes.tangent,
      Ie = !!X.morphAttributes.position,
      rt = !!X.morphAttributes.normal,
      Xt = !!X.morphAttributes.color,
      In = k.toneMapped ? d.toneMapping : Hn,
      mi =
        X.morphAttributes.position ||
        X.morphAttributes.normal ||
        X.morphAttributes.color,
      st = mi !== void 0 ? mi.length : 0,
      Fe = we.get(k),
      ya = f.state.lights;
    if (W === !0 && (J === !0 || T !== M)) {
      const qt = T === M && k.id === y;
      A.setState(k, T, qt);
    }
    let mt = !1;
    k.version === Fe.__version
      ? ((Fe.needsLights && Fe.lightsStateVersion !== ya.state.version) ||
          Fe.outputEncoding !== Ae ||
          (j.isInstancedMesh && Fe.instancing === !1) ||
          (!j.isInstancedMesh && Fe.instancing === !0) ||
          (j.isSkinnedMesh && Fe.skinning === !1) ||
          (!j.isSkinnedMesh && Fe.skinning === !0) ||
          Fe.envMap !== Ce ||
          (k.fog === !0 && Fe.fog !== xe) ||
          (Fe.numClippingPlanes !== void 0 &&
            (Fe.numClippingPlanes !== A.numPlanes ||
              Fe.numIntersection !== A.numIntersection)) ||
          Fe.vertexAlphas !== Ue ||
          Fe.vertexTangents !== De ||
          Fe.morphTargets !== Ie ||
          Fe.morphNormals !== rt ||
          Fe.morphColors !== Xt ||
          Fe.toneMapping !== In ||
          (he.isWebGL2 === !0 && Fe.morphTargetsCount !== st)) &&
        (mt = !0)
      : ((mt = !0), (Fe.__version = k.version));
    let gi = Fe.currentProgram;
    mt === !0 && (gi = nn(k, z, j));
    let El = !1,
      Dr = !1,
      Ma = !1;
    const Rt = gi.getUniforms(),
      _i = Fe.uniforms;
    if (
      (fe.useProgram(gi.program) && ((El = !0), (Dr = !0), (Ma = !0)),
      k.id !== y && ((y = k.id), (Dr = !0)),
      El || M !== T)
    ) {
      if (
        (Rt.setValue(O, "projectionMatrix", T.projectionMatrix),
        he.logarithmicDepthBuffer &&
          Rt.setValue(O, "logDepthBufFC", 2 / (Math.log(T.far + 1) / Math.LN2)),
        M !== T && ((M = T), (Dr = !0), (Ma = !0)),
        k.isShaderMaterial ||
          k.isMeshPhongMaterial ||
          k.isMeshToonMaterial ||
          k.isMeshStandardMaterial ||
          k.envMap)
      ) {
        const qt = Rt.map.cameraPosition;
        qt !== void 0 && qt.setValue(O, U.setFromMatrixPosition(T.matrixWorld));
      }
      (k.isMeshPhongMaterial ||
        k.isMeshToonMaterial ||
        k.isMeshLambertMaterial ||
        k.isMeshBasicMaterial ||
        k.isMeshStandardMaterial ||
        k.isShaderMaterial) &&
        Rt.setValue(O, "isOrthographic", T.isOrthographicCamera === !0),
        (k.isMeshPhongMaterial ||
          k.isMeshToonMaterial ||
          k.isMeshLambertMaterial ||
          k.isMeshBasicMaterial ||
          k.isMeshStandardMaterial ||
          k.isShaderMaterial ||
          k.isShadowMaterial ||
          j.isSkinnedMesh) &&
          Rt.setValue(O, "viewMatrix", T.matrixWorldInverse);
    }
    if (j.isSkinnedMesh) {
      Rt.setOptional(O, j, "bindMatrix"),
        Rt.setOptional(O, j, "bindMatrixInverse");
      const qt = j.skeleton;
      qt &&
        (he.floatVertexTextures
          ? (qt.boneTexture === null && qt.computeBoneTexture(),
            Rt.setValue(O, "boneTexture", qt.boneTexture, Ee),
            Rt.setValue(O, "boneTextureSize", qt.boneTextureSize))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
            ));
    }
    const ba = X.morphAttributes;
    if (
      ((ba.position !== void 0 ||
        ba.normal !== void 0 ||
        (ba.color !== void 0 && he.isWebGL2 === !0)) &&
        te.update(j, X, gi),
      (Dr || Fe.receiveShadow !== j.receiveShadow) &&
        ((Fe.receiveShadow = j.receiveShadow),
        Rt.setValue(O, "receiveShadow", j.receiveShadow)),
      k.isMeshGouraudMaterial &&
        k.envMap !== null &&
        ((_i.envMap.value = Ce),
        (_i.flipEnvMap.value =
          Ce.isCubeTexture && Ce.isRenderTargetTexture === !1 ? -1 : 1)),
      Dr &&
        (Rt.setValue(O, "toneMappingExposure", d.toneMappingExposure),
        Fe.needsLights && gf(_i, Ma),
        xe && k.fog === !0 && He.refreshFogUniforms(_i, xe),
        He.refreshMaterialUniforms(_i, k, V, L, K),
        Xs.upload(O, Fe.uniformsList, _i, Ee)),
      k.isShaderMaterial &&
        k.uniformsNeedUpdate === !0 &&
        (Xs.upload(O, Fe.uniformsList, _i, Ee), (k.uniformsNeedUpdate = !1)),
      k.isSpriteMaterial && Rt.setValue(O, "center", j.center),
      Rt.setValue(O, "modelViewMatrix", j.modelViewMatrix),
      Rt.setValue(O, "normalMatrix", j.normalMatrix),
      Rt.setValue(O, "modelMatrix", j.matrixWorld),
      k.isShaderMaterial || k.isRawShaderMaterial)
    ) {
      const qt = k.uniformsGroups;
      for (let Sa = 0, xf = qt.length; Sa < xf; Sa++)
        if (he.isWebGL2) {
          const Al = qt[Sa];
          N.update(Al, gi), N.bind(Al, gi);
        } else
          console.warn(
            "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
          );
    }
    return gi;
  }
  function gf(T, z) {
    (T.ambientLightColor.needsUpdate = z),
      (T.lightProbe.needsUpdate = z),
      (T.directionalLights.needsUpdate = z),
      (T.directionalLightShadows.needsUpdate = z),
      (T.pointLights.needsUpdate = z),
      (T.pointLightShadows.needsUpdate = z),
      (T.spotLights.needsUpdate = z),
      (T.spotLightShadows.needsUpdate = z),
      (T.rectAreaLights.needsUpdate = z),
      (T.hemisphereLights.needsUpdate = z);
  }
  function _f(T) {
    return (
      T.isMeshLambertMaterial ||
      T.isMeshToonMaterial ||
      T.isMeshPhongMaterial ||
      T.isMeshStandardMaterial ||
      T.isShadowMaterial ||
      (T.isShaderMaterial && T.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return _;
  }),
    (this.getActiveMipmapLevel = function () {
      return b;
    }),
    (this.getRenderTarget = function () {
      return x;
    }),
    (this.setRenderTargetTextures = function (T, z, X) {
      (we.get(T.texture).__webglTexture = z),
        (we.get(T.depthTexture).__webglTexture = X);
      const k = we.get(T);
      (k.__hasExternalTextures = !0),
        k.__hasExternalTextures &&
          ((k.__autoAllocateDepthBuffer = X === void 0),
          k.__autoAllocateDepthBuffer ||
            (ce.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (k.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (T, z) {
      const X = we.get(T);
      (X.__webglFramebuffer = z), (X.__useDefaultFramebuffer = z === void 0);
    }),
    (this.setRenderTarget = function (T, z = 0, X = 0) {
      (x = T), (_ = z), (b = X);
      let k = !0,
        j = null,
        xe = !1,
        be = !1;
      if (T) {
        const Ce = we.get(T);
        Ce.__useDefaultFramebuffer !== void 0
          ? (fe.bindFramebuffer(36160, null), (k = !1))
          : Ce.__webglFramebuffer === void 0
          ? Ee.setupRenderTarget(T)
          : Ce.__hasExternalTextures &&
            Ee.rebindTextures(
              T,
              we.get(T.texture).__webglTexture,
              we.get(T.depthTexture).__webglTexture
            );
        const Ue = T.texture;
        (Ue.isData3DTexture ||
          Ue.isDataArrayTexture ||
          Ue.isCompressedArrayTexture) &&
          (be = !0);
        const De = we.get(T).__webglFramebuffer;
        T.isWebGLCubeRenderTarget
          ? ((j = De[z]), (xe = !0))
          : he.isWebGL2 && T.samples > 0 && Ee.useMultisampledRTT(T) === !1
          ? (j = we.get(T).__webglMultisampledFramebuffer)
          : (j = De),
          E.copy(T.viewport),
          C.copy(T.scissor),
          (v = T.scissorTest);
      } else
        E.copy(D).multiplyScalar(V).floor(),
          C.copy(B).multiplyScalar(V).floor(),
          (v = H);
      if (
        (fe.bindFramebuffer(36160, j) &&
          he.drawBuffers &&
          k &&
          fe.drawBuffers(T, j),
        fe.viewport(E),
        fe.scissor(C),
        fe.setScissorTest(v),
        xe)
      ) {
        const Ce = we.get(T.texture);
        O.framebufferTexture2D(36160, 36064, 34069 + z, Ce.__webglTexture, X);
      } else if (be) {
        const Ce = we.get(T.texture),
          Ue = z || 0;
        O.framebufferTextureLayer(36160, 36064, Ce.__webglTexture, X || 0, Ue);
      }
      y = -1;
    }),
    (this.readRenderTargetPixels = function (T, z, X, k, j, xe, be) {
      if (!(T && T.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let Ae = we.get(T).__webglFramebuffer;
      if ((T.isWebGLCubeRenderTarget && be !== void 0 && (Ae = Ae[be]), Ae)) {
        fe.bindFramebuffer(36160, Ae);
        try {
          const Ce = T.texture,
            Ue = Ce.format,
            De = Ce.type;
          if (Ue !== on && _e.convert(Ue) !== O.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          const Ie =
            De === rs &&
            (ce.has("EXT_color_buffer_half_float") ||
              (he.isWebGL2 && ce.has("EXT_color_buffer_float")));
          if (
            De !== Ii &&
            _e.convert(De) !== O.getParameter(35738) &&
            !(
              De === ei &&
              (he.isWebGL2 ||
                ce.has("OES_texture_float") ||
                ce.has("WEBGL_color_buffer_float"))
            ) &&
            !Ie
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          z >= 0 &&
            z <= T.width - k &&
            X >= 0 &&
            X <= T.height - j &&
            O.readPixels(z, X, k, j, _e.convert(Ue), _e.convert(De), xe);
        } finally {
          const Ce = x !== null ? we.get(x).__webglFramebuffer : null;
          fe.bindFramebuffer(36160, Ce);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (T, z, X = 0) {
      const k = Math.pow(2, -X),
        j = Math.floor(z.image.width * k),
        xe = Math.floor(z.image.height * k);
      Ee.setTexture2D(z, 0),
        O.copyTexSubImage2D(3553, X, 0, 0, T.x, T.y, j, xe),
        fe.unbindTexture();
    }),
    (this.copyTextureToTexture = function (T, z, X, k = 0) {
      const j = z.image.width,
        xe = z.image.height,
        be = _e.convert(X.format),
        Ae = _e.convert(X.type);
      Ee.setTexture2D(X, 0),
        O.pixelStorei(37440, X.flipY),
        O.pixelStorei(37441, X.premultiplyAlpha),
        O.pixelStorei(3317, X.unpackAlignment),
        z.isDataTexture
          ? O.texSubImage2D(3553, k, T.x, T.y, j, xe, be, Ae, z.image.data)
          : z.isCompressedTexture
          ? O.compressedTexSubImage2D(
              3553,
              k,
              T.x,
              T.y,
              z.mipmaps[0].width,
              z.mipmaps[0].height,
              be,
              z.mipmaps[0].data
            )
          : O.texSubImage2D(3553, k, T.x, T.y, be, Ae, z.image),
        k === 0 && X.generateMipmaps && O.generateMipmap(3553),
        fe.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (T, z, X, k, j = 0) {
      if (d.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      const xe = T.max.x - T.min.x + 1,
        be = T.max.y - T.min.y + 1,
        Ae = T.max.z - T.min.z + 1,
        Ce = _e.convert(k.format),
        Ue = _e.convert(k.type);
      let De;
      if (k.isData3DTexture) Ee.setTexture3D(k, 0), (De = 32879);
      else if (k.isDataArrayTexture) Ee.setTexture2DArray(k, 0), (De = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      O.pixelStorei(37440, k.flipY),
        O.pixelStorei(37441, k.premultiplyAlpha),
        O.pixelStorei(3317, k.unpackAlignment);
      const Ie = O.getParameter(3314),
        rt = O.getParameter(32878),
        Xt = O.getParameter(3316),
        In = O.getParameter(3315),
        mi = O.getParameter(32877),
        st = X.isCompressedTexture ? X.mipmaps[0] : X.image;
      O.pixelStorei(3314, st.width),
        O.pixelStorei(32878, st.height),
        O.pixelStorei(3316, T.min.x),
        O.pixelStorei(3315, T.min.y),
        O.pixelStorei(32877, T.min.z),
        X.isDataTexture || X.isData3DTexture
          ? O.texSubImage3D(De, j, z.x, z.y, z.z, xe, be, Ae, Ce, Ue, st.data)
          : X.isCompressedArrayTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            O.compressedTexSubImage3D(
              De,
              j,
              z.x,
              z.y,
              z.z,
              xe,
              be,
              Ae,
              Ce,
              st.data
            ))
          : O.texSubImage3D(De, j, z.x, z.y, z.z, xe, be, Ae, Ce, Ue, st),
        O.pixelStorei(3314, Ie),
        O.pixelStorei(32878, rt),
        O.pixelStorei(3316, Xt),
        O.pixelStorei(3315, In),
        O.pixelStorei(32877, mi),
        j === 0 && k.generateMipmaps && O.generateMipmap(De),
        fe.unbindTexture();
    }),
    (this.initTexture = function (T) {
      T.isCubeTexture
        ? Ee.setTextureCube(T, 0)
        : T.isData3DTexture
        ? Ee.setTexture3D(T, 0)
        : T.isDataArrayTexture || T.isCompressedArrayTexture
        ? Ee.setTexture2DArray(T, 0)
        : Ee.setTexture2D(T, 0),
        fe.unbindTexture();
    }),
    (this.resetState = function () {
      (_ = 0), (b = 0), (x = null), fe.reset(), P.reset();
    }),
    typeof __THREE_DEVTOOLS__ < "u" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
Object.defineProperties(tl.prototype, {
  physicallyCorrectLights: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
        ),
        !this.useLegacyLights
      );
    },
    set: function (o) {
      console.warn(
        "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
      ),
        (this.useLegacyLights = !o);
    },
  },
});
class O0 extends tl {}
O0.prototype.isWebGL1Renderer = !0;
class N0 extends je {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
  get autoUpdate() {
    return (
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
      this.matrixWorldAutoUpdate
    );
  }
  set autoUpdate(e) {
    console.warn(
      "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
    ),
      (this.matrixWorldAutoUpdate = e);
  }
}
const Bc = new R(),
  Gc = new ze(),
  Vc = new ze(),
  k0 = new R(),
  Wc = new ve();
class U0 extends hn {
  constructor(e, t) {
    super(e, t),
      (this.isSkinnedMesh = !0),
      (this.type = "SkinnedMesh"),
      (this.bindMode = "attached"),
      (this.bindMatrix = new ve()),
      (this.bindMatrixInverse = new ve());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      this
    );
  }
  bind(e, t) {
    (this.skeleton = e),
      t === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new ze(),
      t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0),
        t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.bindMode === "attached"
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === "detached"
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  boneTransform(e, t) {
    const n = this.skeleton,
      i = this.geometry;
    Gc.fromBufferAttribute(i.attributes.skinIndex, e),
      Vc.fromBufferAttribute(i.attributes.skinWeight, e),
      Bc.copy(t).applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = Vc.getComponent(r);
      if (a !== 0) {
        const s = Gc.getComponent(r);
        Wc.multiplyMatrices(n.bones[s].matrixWorld, n.boneInverses[s]),
          t.addScaledVector(k0.copy(Bc).applyMatrix4(Wc), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class To extends je {
  constructor() {
    super(), (this.isBone = !0), (this.type = "Bone");
  }
}
class z0 extends Mt {
  constructor(e = null, t = 1, n = 1, i, r, a, s, l, c = xt, h = xt, u, f) {
    super(null, a, s, l, c, h, i, r, u, f),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const Hc = new ve(),
  B0 = new ve();
class nl {
  constructor(e = [], t = []) {
    (this.uuid = di()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      (this.boneTextureSize = 0),
      (this.frame = -1),
      this.init();
  }
  init() {
    const e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0))
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn(
        "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new ve());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new ve();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n &&
        (n.parent && n.parent.isBone
          ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld))
          : n.matrix.copy(n.matrixWorld),
        n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones,
      t = this.boneInverses,
      n = this.boneMatrices,
      i = this.boneTexture;
    for (let r = 0, a = e.length; r < a; r++) {
      const s = e[r] ? e[r].matrixWorld : B0;
      Hc.multiplyMatrices(s, t[r]), Hc.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new nl(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    (e = Ih(e)), (e = Math.max(e, 4));
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new z0(t, e, e, on, ei);
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = t),
      (this.boneTexture = n),
      (this.boneTextureSize = e),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let a = t[r];
      a === void 0 &&
        (console.warn("THREE.Skeleton: No bone found with UUID:", r),
        (a = new To())),
        this.bones.push(a),
        this.boneInverses.push(new ve().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    const t = this.bones,
      n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const s = n[i];
      e.boneInverses.push(s.toArray());
    }
    return e;
  }
}
class pa extends Ui {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new Me(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Xc = new R(),
  qc = new R(),
  Yc = new ve(),
  to = new zh(),
  zs = new fa();
class Qs extends je {
  constructor(e = new kt(), t = new pa()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        Xc.fromBufferAttribute(t, i - 1),
          qc.fromBufferAttribute(t, i),
          (n[i] = n[i - 1]),
          (n[i] += Xc.distanceTo(qc));
      e.setAttribute("lineDistance", new Je(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      zs.copy(n.boundingSphere),
      zs.applyMatrix4(i),
      (zs.radius += r),
      e.ray.intersectsSphere(zs) === !1)
    )
      return;
    Yc.copy(i).invert(), to.copy(e.ray).applyMatrix4(Yc);
    const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = s * s,
      c = new R(),
      h = new R(),
      u = new R(),
      f = new R(),
      p = this.isLineSegments ? 2 : 1,
      g = n.index,
      m = n.attributes.position;
    if (g !== null) {
      const _ = Math.max(0, a.start),
        b = Math.min(g.count, a.start + a.count);
      for (let x = _, y = b - 1; x < y; x += p) {
        const M = g.getX(x),
          E = g.getX(x + 1);
        if (
          (c.fromBufferAttribute(m, M),
          h.fromBufferAttribute(m, E),
          to.distanceSqToSegment(c, h, f, u) > l)
        )
          continue;
        f.applyMatrix4(this.matrixWorld);
        const v = e.ray.origin.distanceTo(f);
        v < e.near ||
          v > e.far ||
          t.push({
            distance: v,
            point: u.clone().applyMatrix4(this.matrixWorld),
            index: x,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      const _ = Math.max(0, a.start),
        b = Math.min(m.count, a.start + a.count);
      for (let x = _, y = b - 1; x < y; x += p) {
        if (
          (c.fromBufferAttribute(m, x),
          h.fromBufferAttribute(m, x + 1),
          to.distanceSqToSegment(c, h, f, u) > l)
        )
          continue;
        f.applyMatrix4(this.matrixWorld);
        const E = e.ray.origin.distanceTo(f);
        E < e.near ||
          E > e.far ||
          t.push({
            distance: E,
            point: u.clone().applyMatrix4(this.matrixWorld),
            index: x,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const s = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[s] = r);
        }
      }
    }
  }
}
const jc = new R(),
  Zc = new R();
class G0 extends Qs {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        jc.fromBufferAttribute(t, i),
          Zc.fromBufferAttribute(t, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + jc.distanceTo(Zc));
      e.setAttribute("lineDistance", new Je(n, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class V0 {
  constructor() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === e + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n,
      i = this.getPoint(0),
      r = 0;
    t.push(0);
    for (let a = 1; a <= e; a++)
      (n = this.getPoint(a / e)), (r += n.distanceTo(i)), t.push(r), (i = n);
    return (this.cacheArcLengths = t), t;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const r = n.length;
    let a;
    t ? (a = t) : (a = e * n[r - 1]);
    let s = 0,
      l = r - 1,
      c;
    for (; s <= l; )
      if (((i = Math.floor(s + (l - s) / 2)), (c = n[i] - a), c < 0)) s = i + 1;
      else if (c > 0) l = i - 1;
      else {
        l = i;
        break;
      }
    if (((i = l), n[i] === a)) return i / (r - 1);
    const h = n[i],
      f = n[i + 1] - h,
      p = (a - h) / f;
    return (i + p) / (r - 1);
  }
  getTangent(e, t) {
    let i = e - 1e-4,
      r = e + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const a = this.getPoint(i),
      s = this.getPoint(r),
      l = t || (a.isVector2 ? new Se() : new R());
    return l.copy(s).sub(a).normalize(), l;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new R(),
      i = [],
      r = [],
      a = [],
      s = new R(),
      l = new ve();
    for (let p = 0; p <= e; p++) {
      const g = p / e;
      i[p] = this.getTangentAt(g, new R());
    }
    (r[0] = new R()), (a[0] = new R());
    let c = Number.MAX_VALUE;
    const h = Math.abs(i[0].x),
      u = Math.abs(i[0].y),
      f = Math.abs(i[0].z);
    h <= c && ((c = h), n.set(1, 0, 0)),
      u <= c && ((c = u), n.set(0, 1, 0)),
      f <= c && n.set(0, 0, 1),
      s.crossVectors(i[0], n).normalize(),
      r[0].crossVectors(i[0], s),
      a[0].crossVectors(i[0], r[0]);
    for (let p = 1; p <= e; p++) {
      if (
        ((r[p] = r[p - 1].clone()),
        (a[p] = a[p - 1].clone()),
        s.crossVectors(i[p - 1], i[p]),
        s.length() > Number.EPSILON)
      ) {
        s.normalize();
        const g = Math.acos(vt(i[p - 1].dot(i[p]), -1, 1));
        r[p].applyMatrix4(l.makeRotationAxis(s, g));
      }
      a[p].crossVectors(i[p], r[p]);
    }
    if (t === !0) {
      let p = Math.acos(vt(r[0].dot(r[e]), -1, 1));
      (p /= e), i[0].dot(s.crossVectors(r[0], r[e])) > 0 && (p = -p);
      for (let g = 1; g <= e; g++)
        r[g].applyMatrix4(l.makeRotationAxis(i[g], p * g)),
          a[g].crossVectors(i[g], r[g]);
    }
    return { tangents: i, normals: r, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
  toJSON() {
    const e = {
      metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" },
    };
    return (
      (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e
    );
  }
  fromJSON(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
}
class ea extends kt {
  constructor(
    e = 1,
    t = 1,
    n = 1,
    i = 32,
    r = 1,
    a = !1,
    s = 0,
    l = Math.PI * 2
  ) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: i,
        heightSegments: r,
        openEnded: a,
        thetaStart: s,
        thetaLength: l,
      });
    const c = this;
    (i = Math.floor(i)), (r = Math.floor(r));
    const h = [],
      u = [],
      f = [],
      p = [];
    let g = 0;
    const d = [],
      m = n / 2;
    let _ = 0;
    b(),
      a === !1 && (e > 0 && x(!0), t > 0 && x(!1)),
      this.setIndex(h),
      this.setAttribute("position", new Je(u, 3)),
      this.setAttribute("normal", new Je(f, 3)),
      this.setAttribute("uv", new Je(p, 2));
    function b() {
      const y = new R(),
        M = new R();
      let E = 0;
      const C = (t - e) / n;
      for (let v = 0; v <= r; v++) {
        const S = [],
          L = v / r,
          V = L * (t - e) + e;
        for (let G = 0; G <= i; G++) {
          const F = G / i,
            D = F * l + s,
            B = Math.sin(D),
            H = Math.cos(D);
          (M.x = V * B),
            (M.y = -L * n + m),
            (M.z = V * H),
            u.push(M.x, M.y, M.z),
            y.set(B, C, H).normalize(),
            f.push(y.x, y.y, y.z),
            p.push(F, 1 - L),
            S.push(g++);
        }
        d.push(S);
      }
      for (let v = 0; v < i; v++)
        for (let S = 0; S < r; S++) {
          const L = d[S][v],
            V = d[S + 1][v],
            G = d[S + 1][v + 1],
            F = d[S][v + 1];
          h.push(L, V, F), h.push(V, G, F), (E += 6);
        }
      c.addGroup(_, E, 0), (_ += E);
    }
    function x(y) {
      const M = g,
        E = new Se(),
        C = new R();
      let v = 0;
      const S = y === !0 ? e : t,
        L = y === !0 ? 1 : -1;
      for (let G = 1; G <= i; G++)
        u.push(0, m * L, 0), f.push(0, L, 0), p.push(0.5, 0.5), g++;
      const V = g;
      for (let G = 0; G <= i; G++) {
        const D = (G / i) * l + s,
          B = Math.cos(D),
          H = Math.sin(D);
        (C.x = S * H),
          (C.y = m * L),
          (C.z = S * B),
          u.push(C.x, C.y, C.z),
          f.push(0, L, 0),
          (E.x = B * 0.5 + 0.5),
          (E.y = H * 0.5 * L + 0.5),
          p.push(E.x, E.y),
          g++;
      }
      for (let G = 0; G < i; G++) {
        const F = M + G,
          D = V + G;
        y === !0 ? h.push(D, D + 1, F) : h.push(D + 1, D, F), (v += 3);
      }
      c.addGroup(_, v, y === !0 ? 1 : 2), (_ += v);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new ea(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class $r extends Ui {
  constructor(e) {
    super(),
      (this.isMeshPhongMaterial = !0),
      (this.type = "MeshPhongMaterial"),
      (this.color = new Me(16777215)),
      (this.specular = new Me(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Me(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = qo),
      (this.normalScale = new Se(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = ha),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      this.specular.copy(e.specular),
      (this.shininess = e.shininess),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class W0 extends Ui {
  constructor(e) {
    super(),
      (this.isMeshLambertMaterial = !0),
      (this.type = "MeshLambertMaterial"),
      (this.color = new Me(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Me(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = qo),
      (this.normalScale = new Se(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = ha),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
function $n(o, e, t) {
  return Kh(o)
    ? new o.constructor(o.subarray(e, t !== void 0 ? t : o.length))
    : o.slice(e, t);
}
function Bs(o, e, t) {
  return !o || (!t && o.constructor === e)
    ? o
    : typeof e.BYTES_PER_ELEMENT == "number"
    ? new e(o)
    : Array.prototype.slice.call(o);
}
function Kh(o) {
  return ArrayBuffer.isView(o) && !(o instanceof DataView);
}
function H0(o) {
  function e(i, r) {
    return o[i] - o[r];
  }
  const t = o.length,
    n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Kc(o, e, t) {
  const n = o.length,
    i = new o.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const s = t[r] * e;
    for (let l = 0; l !== e; ++l) i[a++] = o[s + l];
  }
  return i;
}
function $h(o, e, t, n) {
  let i = 1,
    r = o[0];
  for (; r !== void 0 && r[n] === void 0; ) r = o[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        (a = r[n]),
          a !== void 0 && (e.push(r.time), t.push.apply(t, a)),
          (r = o[i++]);
      while (r !== void 0);
    else if (a.toArray !== void 0)
      do
        (a = r[n]),
          a !== void 0 && (e.push(r.time), a.toArray(t, t.length)),
          (r = o[i++]);
      while (r !== void 0);
    else
      do (a = r[n]), a !== void 0 && (e.push(r.time), t.push(a)), (r = o[i++]);
      while (r !== void 0);
}
class ma {
  constructor(e, t, n, i) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = i !== void 0 ? i : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex,
      i = t[n],
      r = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i: if (!(e < i)) {
            for (let s = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
              }
              if (n === s) break;
              if (((r = i), (i = t[++n]), e < i)) break t;
            }
            a = t.length;
            break n;
          }
          if (!(e >= r)) {
            const s = t[1];
            e < s && ((n = 2), (r = s));
            for (let l = n - 2; ; ) {
              if (r === void 0)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (n === l) break;
              if (((i = r), (r = t[--n - 1]), e >= r)) break t;
            }
            (a = n), (n = 0);
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          const s = (n + a) >>> 1;
          e < t[s] ? (a = s) : (n = s + 1);
        }
        if (((i = t[n]), (r = t[n - 1]), r === void 0))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (i === void 0)
          return (
            (n = t.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i;
    for (let a = 0; a !== i; ++a) t[a] = n[r + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
class X0 extends ma {
  constructor(e, t, n, i) {
    super(e, t, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: sr, endingEnd: sr });
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2,
      a = e + 1,
      s = i[r],
      l = i[a];
    if (s === void 0)
      switch (this.getSettings_().endingStart) {
        case ar:
          (r = e), (s = 2 * t - n);
          break;
        case Js:
          (r = i.length - 2), (s = t + i[r] - i[r + 1]);
          break;
        default:
          (r = e), (s = n);
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case ar:
          (a = e), (l = 2 * n - t);
          break;
        case Js:
          (a = 1), (l = n + i[1] - i[0]);
          break;
        default:
          (a = e - 1), (l = t);
      }
    const c = (n - t) * 0.5,
      h = this.valueSize;
    (this._weightPrev = c / (t - s)),
      (this._weightNext = c / (l - n)),
      (this._offsetPrev = r * h),
      (this._offsetNext = a * h);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      l = e * s,
      c = l - s,
      h = this._offsetPrev,
      u = this._offsetNext,
      f = this._weightPrev,
      p = this._weightNext,
      g = (n - t) / (i - t),
      d = g * g,
      m = d * g,
      _ = -f * m + 2 * f * d - f * g,
      b = (1 + f) * m + (-1.5 - 2 * f) * d + (-0.5 + f) * g + 1,
      x = (-1 - p) * m + (1.5 + p) * d + 0.5 * g,
      y = p * m - p * d;
    for (let M = 0; M !== s; ++M)
      r[M] = _ * a[h + M] + b * a[c + M] + x * a[l + M] + y * a[u + M];
    return r;
  }
}
class Jh extends ma {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      l = e * s,
      c = l - s,
      h = (n - t) / (i - t),
      u = 1 - h;
    for (let f = 0; f !== s; ++f) r[f] = a[c + f] * u + a[l + f] * h;
    return r;
  }
}
class q0 extends ma {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Dn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = Bs(t, this.TimeBufferType)),
      (this.values = Bs(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Bs(e.times, Array),
        values: Bs(e.values, Array),
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return (n.type = e.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new q0(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Jh(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new X0(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Ks:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case $s:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case La:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Ks;
      case this.InterpolantFactoryMethodLinear:
        return $s;
      case this.InterpolantFactoryMethodSmooth:
        return La;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times,
      i = n.length;
    let r = 0,
      a = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; a !== -1 && n[a] > t; ) --a;
    if ((++a, r !== 0 || a !== i)) {
      r >= a && ((a = Math.max(a, 1)), (r = a - 1));
      const s = this.getValueSize();
      (this.times = $n(n, r, a)), (this.values = $n(this.values, r * s, a * s));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    const n = this.times,
      i = this.values,
      r = n.length;
    r === 0 &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let s = 0; s !== r; s++) {
      const l = n[s];
      if (typeof l == "number" && isNaN(l)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          s,
          l
        ),
          (e = !1);
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, s, l, a),
          (e = !1);
        break;
      }
      a = l;
    }
    if (i !== void 0 && Kh(i))
      for (let s = 0, l = i.length; s !== l; ++s) {
        const c = i[s];
        if (isNaN(c)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            s,
            c
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = $n(this.times),
      t = $n(this.values),
      n = this.getValueSize(),
      i = this.getInterpolation() === La,
      r = e.length - 1;
    let a = 1;
    for (let s = 1; s < r; ++s) {
      let l = !1;
      const c = e[s],
        h = e[s + 1];
      if (c !== h && (s !== 1 || c !== e[0]))
        if (i) l = !0;
        else {
          const u = s * n,
            f = u - n,
            p = u + n;
          for (let g = 0; g !== n; ++g) {
            const d = t[u + g];
            if (d !== t[f + g] || d !== t[p + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (s !== a) {
          e[a] = e[s];
          const u = s * n,
            f = a * n;
          for (let p = 0; p !== n; ++p) t[f + p] = t[u + p];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let s = r * n, l = a * n, c = 0; c !== n; ++c) t[l + c] = t[s + c];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = $n(e, 0, a)), (this.values = $n(t, 0, a * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = $n(this.times, 0),
      t = $n(this.values, 0),
      n = this.constructor,
      i = new n(this.name, e, t);
    return (i.createInterpolant = this.createInterpolant), i;
  }
}
Dn.prototype.TimeBufferType = Float32Array;
Dn.prototype.ValueBufferType = Float32Array;
Dn.prototype.DefaultInterpolation = $s;
class Pr extends Dn {}
Pr.prototype.ValueTypeName = "bool";
Pr.prototype.ValueBufferType = Array;
Pr.prototype.DefaultInterpolation = Ks;
Pr.prototype.InterpolantFactoryMethodLinear = void 0;
Pr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Qh extends Dn {}
Qh.prototype.ValueTypeName = "color";
class ls extends Dn {}
ls.prototype.ValueTypeName = "number";
class Y0 extends ma {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      l = (n - t) / (i - t);
    let c = e * s;
    for (let h = c + s; c !== h; c += 4) Nt.slerpFlat(r, 0, a, c - s, a, c, l);
    return r;
  }
}
class Lr extends Dn {
  InterpolantFactoryMethodLinear(e) {
    return new Y0(this.times, this.values, this.getValueSize(), e);
  }
}
Lr.prototype.ValueTypeName = "quaternion";
Lr.prototype.DefaultInterpolation = $s;
Lr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Rr extends Dn {}
Rr.prototype.ValueTypeName = "string";
Rr.prototype.ValueBufferType = Array;
Rr.prototype.DefaultInterpolation = Ks;
Rr.prototype.InterpolantFactoryMethodLinear = void 0;
Rr.prototype.InterpolantFactoryMethodSmooth = void 0;
class cs extends Dn {}
cs.prototype.ValueTypeName = "vector";
class Eo {
  constructor(e, t = -1, n, i = Xo) {
    (this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = i),
      (this.uuid = di()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [],
      n = e.tracks,
      i = 1 / (e.fps || 1);
    for (let a = 0, s = n.length; a !== s; ++a) t.push(Z0(n[a]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return (r.uuid = e.uuid), r;
  }
  static toJSON(e) {
    const t = [],
      n = e.tracks,
      i = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let r = 0, a = n.length; r !== a; ++r) t.push(Dn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length,
      a = [];
    for (let s = 0; s < r; s++) {
      let l = [],
        c = [];
      l.push((s + r - 1) % r, s, (s + 1) % r), c.push(0, 1, 0);
      const h = H0(l);
      (l = Kc(l, 1, h)),
        (c = Kc(c, 1, h)),
        !i && l[0] === 0 && (l.push(r), c.push(c[0])),
        a.push(
          new ls(".morphTargetInfluences[" + t[s].name + "]", l, c).scale(1 / n)
        );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = (i.geometry && i.geometry.animations) || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {},
      r = /^([\w-]*?)([\d]+)$/;
    for (let s = 0, l = e.length; s < l; s++) {
      const c = e[s],
        h = c.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let f = i[u];
        f || (i[u] = f = []), f.push(c);
      }
    }
    const a = [];
    for (const s in i)
      a.push(this.CreateFromMorphTargetSequence(s, i[s], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    const n = function (u, f, p, g, d) {
        if (p.length !== 0) {
          const m = [],
            _ = [];
          $h(p, m, _, g), m.length !== 0 && d.push(new u(f, m, _));
        }
      },
      i = [],
      r = e.name || "default",
      a = e.fps || 30,
      s = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const f = c[u].keys;
      if (!(!f || f.length === 0))
        if (f[0].morphTargets) {
          const p = {};
          let g;
          for (g = 0; g < f.length; g++)
            if (f[g].morphTargets)
              for (let d = 0; d < f[g].morphTargets.length; d++)
                p[f[g].morphTargets[d]] = -1;
          for (const d in p) {
            const m = [],
              _ = [];
            for (let b = 0; b !== f[g].morphTargets.length; ++b) {
              const x = f[g];
              m.push(x.time), _.push(x.morphTarget === d ? 1 : 0);
            }
            i.push(new ls(".morphTargetInfluence[" + d + "]", m, _));
          }
          l = p.length * a;
        } else {
          const p = ".bones[" + t[u].name + "]";
          n(cs, p + ".position", f, "pos", i),
            n(Lr, p + ".quaternion", f, "rot", i),
            n(cs, p + ".scale", f, "scl", i);
        }
    }
    return i.length === 0 ? null : new this(r, l, i, s);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function j0(o) {
  switch (o.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ls;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return cs;
    case "color":
      return Qh;
    case "quaternion":
      return Lr;
    case "bool":
    case "boolean":
      return Pr;
    case "string":
      return Rr;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + o);
}
function Z0(o) {
  if (o.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = j0(o.type);
  if (o.times === void 0) {
    const t = [],
      n = [];
    $h(o.keys, t, n, "value"), (o.times = t), (o.values = n);
  }
  return e.parse !== void 0
    ? e.parse(o)
    : new e(o.name, o.times, o.values, o.interpolation);
}
const ta = {
  enabled: !1,
  files: {},
  add: function (o, e) {
    this.enabled !== !1 && (this.files[o] = e);
  },
  get: function (o) {
    if (this.enabled !== !1) return this.files[o];
  },
  remove: function (o) {
    delete this.files[o];
  },
  clear: function () {
    this.files = {};
  },
};
class il {
  constructor(e, t, n) {
    const i = this;
    let r = !1,
      a = 0,
      s = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (h) {
        s++, r === !1 && i.onStart !== void 0 && i.onStart(h, a, s), (r = !0);
      }),
      (this.itemEnd = function (h) {
        a++,
          i.onProgress !== void 0 && i.onProgress(h, a, s),
          a === s && ((r = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (h) {
        i.onError !== void 0 && i.onError(h);
      }),
      (this.resolveURL = function (h) {
        return l ? l(h) : h;
      }),
      (this.setURLModifier = function (h) {
        return (l = h), this;
      }),
      (this.addHandler = function (h, u) {
        return c.push(h, u), this;
      }),
      (this.removeHandler = function (h) {
        const u = c.indexOf(h);
        return u !== -1 && c.splice(u, 2), this;
      }),
      (this.getHandler = function (h) {
        for (let u = 0, f = c.length; u < f; u += 2) {
          const p = c[u],
            g = c[u + 1];
          if ((p.global && (p.lastIndex = 0), p.test(h))) return g;
        }
        return null;
      });
  }
}
const K0 = new il();
class xs {
  constructor(e) {
    (this.manager = e !== void 0 ? e : K0),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
const zn = {};
class $0 extends Error {
  constructor(e, t) {
    super(e), (this.response = t);
  }
}
class J0 extends xs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = ta.get(e);
    if (r !== void 0)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(r), this.manager.itemEnd(e);
        }, 0),
        r
      );
    if (zn[e] !== void 0) {
      zn[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    (zn[e] = []), zn[e].push({ onLoad: t, onProgress: n, onError: i });
    const a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      s = this.mimeType,
      l = this.responseType;
    fetch(a)
      .then((c) => {
        if (c.status === 200 || c.status === 0) {
          if (
            (c.status === 0 &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            typeof ReadableStream > "u" ||
              c.body === void 0 ||
              c.body.getReader === void 0)
          )
            return c;
          const h = zn[e],
            u = c.body.getReader(),
            f = c.headers.get("Content-Length") || c.headers.get("X-File-Size"),
            p = f ? parseInt(f) : 0,
            g = p !== 0;
          let d = 0;
          const m = new ReadableStream({
            start(_) {
              b();
              function b() {
                u.read().then(({ done: x, value: y }) => {
                  if (x) _.close();
                  else {
                    d += y.byteLength;
                    const M = new ProgressEvent("progress", {
                      lengthComputable: g,
                      loaded: d,
                      total: p,
                    });
                    for (let E = 0, C = h.length; E < C; E++) {
                      const v = h[E];
                      v.onProgress && v.onProgress(M);
                    }
                    _.enqueue(y), b();
                  }
                });
              }
            },
          });
          return new Response(m);
        } else
          throw new $0(
            `fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,
            c
          );
      })
      .then((c) => {
        switch (l) {
          case "arraybuffer":
            return c.arrayBuffer();
          case "blob":
            return c.blob();
          case "document":
            return c.text().then((h) => new DOMParser().parseFromString(h, s));
          case "json":
            return c.json();
          default:
            if (s === void 0) return c.text();
            {
              const u = /charset="?([^;"\s]*)"?/i.exec(s),
                f = u && u[1] ? u[1].toLowerCase() : void 0,
                p = new TextDecoder(f);
              return c.arrayBuffer().then((g) => p.decode(g));
            }
        }
      })
      .then((c) => {
        ta.add(e, c);
        const h = zn[e];
        delete zn[e];
        for (let u = 0, f = h.length; u < f; u++) {
          const p = h[u];
          p.onLoad && p.onLoad(c);
        }
      })
      .catch((c) => {
        const h = zn[e];
        if (h === void 0) throw (this.manager.itemError(e), c);
        delete zn[e];
        for (let u = 0, f = h.length; u < f; u++) {
          const p = h[u];
          p.onError && p.onError(c);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class eu extends xs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      a = ta.get(e);
    if (a !== void 0)
      return (
        r.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), r.manager.itemEnd(e);
        }, 0),
        a
      );
    const s = os("img");
    function l() {
      h(), ta.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      s.removeEventListener("load", l, !1),
        s.removeEventListener("error", c, !1);
    }
    return (
      s.addEventListener("load", l, !1),
      s.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (s.crossOrigin = this.crossOrigin),
      r.manager.itemStart(e),
      (s.src = e),
      s
    );
  }
}
class Q0 extends xs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new Ko(),
      a = new eu(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    let s = 0;
    function l(c) {
      a.load(
        e[c],
        function (h) {
          (r.images[c] = h), s++, s === 6 && ((r.needsUpdate = !0), t && t(r));
        },
        void 0,
        i
      );
    }
    for (let c = 0; c < e.length; ++c) l(c);
    return r;
  }
}
class ex extends xs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new Mt(),
      a = new eu(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (s) {
          (r.image = s), (r.needsUpdate = !0), t !== void 0 && t(r);
        },
        n,
        i
      ),
      r
    );
  }
}
class ga extends je {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Me(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const no = new ve(),
  $c = new R(),
  Jc = new R();
class rl {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Se(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new ve()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new $o()),
      (this._frameExtents = new Se(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new ze(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    $c.setFromMatrixPosition(e.matrixWorld),
      t.position.copy($c),
      Jc.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Jc),
      t.updateMatrixWorld(),
      no.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(no),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(no);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class tx extends rl {
  constructor() {
    super(new Ft(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      n = as * 2 * e.angle * this.focus,
      i = this.mapSize.width / this.mapSize.height,
      r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) &&
      ((t.fov = n), (t.aspect = i), (t.far = r), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
class nx extends ga {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(je.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new je()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = r),
      (this.decay = a),
      (this.map = null),
      (this.shadow = new tx());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
const Qc = new ve(),
  Br = new R(),
  io = new R();
class ix extends rl {
  constructor() {
    super(new Ft(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new Se(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new ze(2, 1, 1, 1),
        new ze(0, 1, 1, 1),
        new ze(3, 1, 1, 1),
        new ze(1, 1, 1, 1),
        new ze(3, 0, 1, 1),
        new ze(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new R(1, 0, 0),
        new R(-1, 0, 0),
        new R(0, 0, 1),
        new R(0, 0, -1),
        new R(0, 1, 0),
        new R(0, -1, 0),
      ]),
      (this._cubeUps = [
        new R(0, 1, 0),
        new R(0, 1, 0),
        new R(0, 1, 0),
        new R(0, 1, 0),
        new R(0, 0, 1),
        new R(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      i = this.matrix,
      r = e.distance || n.far;
    r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
      Br.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(Br),
      io.copy(n.position),
      io.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(io),
      n.updateMatrixWorld(),
      i.makeTranslation(-Br.x, -Br.y, -Br.z),
      Qc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Qc);
  }
}
class eh extends ga {
  constructor(e, t, n = 0, i = 2) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new ix());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class rx extends rl {
  constructor() {
    super(new Qo(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class tu extends ga {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(je.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new je()),
      (this.shadow = new rx());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class nu extends ga {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class sx {
  static decodeText(e) {
    if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === ""
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
        /^data:.*,.*$/i.test(e) ||
        /^blob:.*$/i.test(e)
          ? e
          : t + e);
  }
}
class ax {
  constructor(e, t, n) {
    (this.binding = e), (this.valueSize = n);
    let i, r, a;
    switch (t) {
      case "quaternion":
        (i = this._slerp),
          (r = this._slerpAdditive),
          (a = this._setAdditiveIdentityQuaternion),
          (this.buffer = new Float64Array(n * 6)),
          (this._workIndex = 5);
        break;
      case "string":
      case "bool":
        (i = this._select),
          (r = this._select),
          (a = this._setAdditiveIdentityOther),
          (this.buffer = new Array(n * 5));
        break;
      default:
        (i = this._lerp),
          (r = this._lerpAdditive),
          (a = this._setAdditiveIdentityNumeric),
          (this.buffer = new Float64Array(n * 5));
    }
    (this._mixBufferRegion = i),
      (this._mixBufferRegionAdditive = r),
      (this._setIdentity = a),
      (this._origIndex = 3),
      (this._addIndex = 4),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0),
      (this.useCount = 0),
      (this.referenceCount = 0);
  }
  accumulate(e, t) {
    const n = this.buffer,
      i = this.valueSize,
      r = e * i + i;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let s = 0; s !== i; ++s) n[r + s] = n[s];
      a = t;
    } else {
      a += t;
      const s = t / a;
      this._mixBufferRegion(n, r, 0, s, i);
    }
    this.cumulativeWeight = a;
  }
  accumulateAdditive(e) {
    const t = this.buffer,
      n = this.valueSize,
      i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(),
      this._mixBufferRegionAdditive(t, i, 0, e, n),
      (this.cumulativeWeightAdditive += e);
  }
  apply(e) {
    const t = this.valueSize,
      n = this.buffer,
      i = e * t + t,
      r = this.cumulativeWeight,
      a = this.cumulativeWeightAdditive,
      s = this.binding;
    if (
      ((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), r < 1)
    ) {
      const l = t * this._origIndex;
      this._mixBufferRegion(n, i, l, 1 - r, t);
    }
    a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l)
      if (n[l] !== n[l + t]) {
        s.setValue(n, i);
        break;
      }
  }
  saveOriginalState() {
    const e = this.binding,
      t = this.buffer,
      n = this.valueSize,
      i = n * this._origIndex;
    e.getValue(t, i);
    for (let r = n, a = i; r !== a; ++r) t[r] = t[i + (r % n)];
    this._setIdentity(),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0);
  }
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize,
      t = e + this.valueSize;
    for (let n = e; n < t; n++) this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(),
      (this.buffer[this._addIndex * this.valueSize + 3] = 1);
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize,
      t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  _select(e, t, n, i, r) {
    if (i >= 0.5) for (let a = 0; a !== r; ++a) e[t + a] = e[n + a];
  }
  _slerp(e, t, n, i) {
    Nt.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, r) {
    const a = this._workIndex * r;
    Nt.multiplyQuaternionsFlat(e, a, e, t, e, n),
      Nt.slerpFlat(e, t, e, t, e, a, i);
  }
  _lerp(e, t, n, i, r) {
    const a = 1 - i;
    for (let s = 0; s !== r; ++s) {
      const l = t + s;
      e[l] = e[l] * a + e[n + s] * i;
    }
  }
  _lerpAdditive(e, t, n, i, r) {
    for (let a = 0; a !== r; ++a) {
      const s = t + a;
      e[s] = e[s] + e[n + a] * i;
    }
  }
}
const sl = "\\[\\]\\.:\\/",
  ox = new RegExp("[" + sl + "]", "g"),
  al = "[^" + sl + "]",
  lx = "[^" + sl.replace("\\.", "") + "]",
  cx = /((?:WC+[\/:])*)/.source.replace("WC", al),
  hx = /(WCOD+)?/.source.replace("WCOD", lx),
  ux = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", al),
  fx = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", al),
  dx = new RegExp("^" + cx + hx + ux + fx + "$"),
  px = ["material", "materials", "bones", "map"];
class mx {
  constructor(e, t, n) {
    const i = n || ke.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class ke {
  constructor(e, t, n) {
    (this.path = t),
      (this.parsedPath = n || ke.parseTrackName(t)),
      (this.node = ke.findNode(e, this.parsedPath.nodeName)),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new ke.Composite(e, t, n)
      : new ke(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(ox, "");
  }
  static parseTrackName(e) {
    const t = dx.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      px.indexOf(r) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = r));
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return n;
  }
  static findNode(e, t) {
    if (
      t === void 0 ||
      t === "" ||
      t === "." ||
      t === -1 ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function (r) {
          for (let a = 0; a < r.length; a++) {
            const s = r[a];
            if (s.name === t || s.uuid === t) return s;
            const l = n(s.children);
            if (l) return l;
          }
          return null;
        },
        i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      n = t.objectName,
      i = t.propertyName;
    let r = t.propertyIndex;
    if (
      (e || ((e = ke.findNode(this.rootNode, t.nodeName)), (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      console.error(
        "THREE.PropertyBinding: Trying to update node for track: " +
          this.path +
          " but it wasn't found."
      );
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === c) {
              c = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.map) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this
            );
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
          return;
        }
        e = e[c];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          c +
          "." +
          i +
          " but it wasn't found.",
        e
      );
      return;
    }
    let s = this.Versioning.None;
    (this.targetObject = e),
      e.needsUpdate !== void 0
        ? (s = this.Versioning.NeedsUpdate)
        : e.matrixWorldNeedsUpdate !== void 0 &&
          (s = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
          return;
        }
        e.morphTargetDictionary[r] !== void 0 &&
          (r = e.morphTargetDictionary[r]);
      }
      (l = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = r);
    } else
      a.fromArray !== void 0 && a.toArray !== void 0
        ? ((l = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((l = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[l]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[l][s]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
ke.Composite = mx;
ke.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
ke.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
ke.prototype.GetterByBindingType = [
  ke.prototype._getValue_direct,
  ke.prototype._getValue_array,
  ke.prototype._getValue_arrayElement,
  ke.prototype._getValue_toArray,
];
ke.prototype.SetterByBindingTypeAndVersioning = [
  [
    ke.prototype._setValue_direct,
    ke.prototype._setValue_direct_setNeedsUpdate,
    ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    ke.prototype._setValue_array,
    ke.prototype._setValue_array_setNeedsUpdate,
    ke.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    ke.prototype._setValue_arrayElement,
    ke.prototype._setValue_arrayElement_setNeedsUpdate,
    ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    ke.prototype._setValue_fromArray,
    ke.prototype._setValue_fromArray_setNeedsUpdate,
    ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
class gx {
  constructor(e, t, n = null, i = t.blendMode) {
    (this._mixer = e),
      (this._clip = t),
      (this._localRoot = n),
      (this.blendMode = i);
    const r = t.tracks,
      a = r.length,
      s = new Array(a),
      l = { endingStart: sr, endingEnd: sr };
    for (let c = 0; c !== a; ++c) {
      const h = r[c].createInterpolant(null);
      (s[c] = h), (h.settings = l);
    }
    (this._interpolantSettings = l),
      (this._interpolants = s),
      (this._propertyBindings = new Array(a)),
      (this._cacheIndex = null),
      (this._byClipCacheIndex = null),
      (this._timeScaleInterpolant = null),
      (this._weightInterpolant = null),
      (this.loop = ud),
      (this._loopCount = -1),
      (this._startTime = null),
      (this.time = 0),
      (this.timeScale = 1),
      (this._effectiveTimeScale = 1),
      (this.weight = 1),
      (this._effectiveWeight = 1),
      (this.repetitions = 1 / 0),
      (this.paused = !1),
      (this.enabled = !0),
      (this.clampWhenFinished = !1),
      (this.zeroSlopeAtStart = !0),
      (this.zeroSlopeAtEnd = !0);
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return (
      (this.paused = !1),
      (this.enabled = !0),
      (this.time = 0),
      (this._loopCount = -1),
      (this._startTime = null),
      this.stopFading().stopWarping()
    );
  }
  isRunning() {
    return (
      this.enabled &&
      !this.paused &&
      this.timeScale !== 0 &&
      this._startTime === null &&
      this._mixer._isActiveAction(this)
    );
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return (this._startTime = e), this;
  }
  setLoop(e, t) {
    return (this.loop = e), (this.repetitions = t), this;
  }
  setEffectiveWeight(e) {
    return (
      (this.weight = e),
      (this._effectiveWeight = this.enabled ? e : 0),
      this.stopFading()
    );
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if ((e.fadeOut(t), this.fadeIn(t), n)) {
      const i = this._clip.duration,
        r = e._clip.duration,
        a = r / i,
        s = i / r;
      e.warp(1, a, t), this.warp(s, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return (
      e !== null &&
        ((this._weightInterpolant = null),
        this._mixer._takeBackControlInterpolant(e)),
      this
    );
  }
  setEffectiveTimeScale(e) {
    return (
      (this.timeScale = e),
      (this._effectiveTimeScale = this.paused ? 0 : e),
      this.stopWarping()
    );
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return (this.timeScale = this._clip.duration / e), this.stopWarping();
  }
  syncWith(e) {
    return (
      (this.time = e.time), (this.timeScale = e.timeScale), this.stopWarping()
    );
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer,
      r = i.time,
      a = this.timeScale;
    let s = this._timeScaleInterpolant;
    s === null &&
      ((s = i._lendControlInterpolant()), (this._timeScaleInterpolant = s));
    const l = s.parameterPositions,
      c = s.sampleValues;
    return (l[0] = r), (l[1] = r + n), (c[0] = e / a), (c[1] = t / a), this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return (
      e !== null &&
        ((this._timeScaleInterpolant = null),
        this._mixer._takeBackControlInterpolant(e)),
      this
    );
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const r = this._startTime;
    if (r !== null) {
      const l = (e - r) * n;
      l < 0 || n === 0 ? (t = 0) : ((this._startTime = null), (t = n * l));
    }
    t *= this._updateTimeScale(e);
    const a = this._updateTime(t),
      s = this._updateWeight(e);
    if (s > 0) {
      const l = this._interpolants,
        c = this._propertyBindings;
      switch (this.blendMode) {
        case dd:
          for (let h = 0, u = l.length; h !== u; ++h)
            l[h].evaluate(a), c[h].accumulateAdditive(s);
          break;
        case Xo:
        default:
          for (let h = 0, u = l.length; h !== u; ++h)
            l[h].evaluate(a), c[h].accumulate(i, s);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        (t *= i),
          e > n.parameterPositions[1] &&
            (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return (this._effectiveWeight = t), t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        (t *= i),
          e > n.parameterPositions[1] &&
            (this.stopWarping(),
            t === 0 ? (this.paused = !0) : (this.timeScale = t));
      }
    }
    return (this._effectiveTimeScale = t), t;
  }
  _updateTime(e) {
    const t = this._clip.duration,
      n = this.loop;
    let i = this.time + e,
      r = this._loopCount;
    const a = n === fd;
    if (e === 0) return r === -1 ? i : a && (r & 1) === 1 ? t - i : i;
    if (n === hd) {
      r === -1 && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
      e: {
        if (i >= t) i = t;
        else if (i < 0) i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
          (this.time = i),
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e < 0 ? -1 : 1,
          });
      }
    } else {
      if (
        (r === -1 &&
          (e >= 0
            ? ((r = 0), this._setEndings(!0, this.repetitions === 0, a))
            : this._setEndings(this.repetitions === 0, !0, a)),
        i >= t || i < 0)
      ) {
        const s = Math.floor(i / t);
        (i -= t * s), (r += Math.abs(s));
        const l = this.repetitions - r;
        if (l <= 0)
          this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (i = e > 0 ? t : 0),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: e > 0 ? 1 : -1,
            });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, a);
          } else this._setEndings(!1, !1, a);
          (this._loopCount = r),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: s,
            });
        }
      } else this.time = i;
      if (a && (r & 1) === 1) return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n
      ? ((i.endingStart = ar), (i.endingEnd = ar))
      : (e
          ? (i.endingStart = this.zeroSlopeAtStart ? ar : sr)
          : (i.endingStart = Js),
        t ? (i.endingEnd = this.zeroSlopeAtEnd ? ar : sr) : (i.endingEnd = Js));
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer,
      r = i.time;
    let a = this._weightInterpolant;
    a === null &&
      ((a = i._lendControlInterpolant()), (this._weightInterpolant = a));
    const s = a.parameterPositions,
      l = a.sampleValues;
    return (s[0] = r), (l[0] = t), (s[1] = r + e), (l[1] = n), this;
  }
}
const _x = new Float32Array(1);
class ol extends fi {
  constructor(e) {
    super(),
      (this._root = e),
      this._initMemoryManager(),
      (this._accuIndex = 0),
      (this.time = 0),
      (this.timeScale = 1);
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root,
      i = e._clip.tracks,
      r = i.length,
      a = e._propertyBindings,
      s = e._interpolants,
      l = n.uuid,
      c = this._bindingsByRootAndName;
    let h = c[l];
    h === void 0 && ((h = {}), (c[l] = h));
    for (let u = 0; u !== r; ++u) {
      const f = i[u],
        p = f.name;
      let g = h[p];
      if (g !== void 0) ++g.referenceCount, (a[u] = g);
      else {
        if (((g = a[u]), g !== void 0)) {
          g._cacheIndex === null &&
            (++g.referenceCount, this._addInactiveBinding(g, l, p));
          continue;
        }
        const d = t && t._propertyBindings[u].binding.parsedPath;
        (g = new ax(ke.create(n, p, d), f.ValueTypeName, f.getValueSize())),
          ++g.referenceCount,
          this._addInactiveBinding(g, l, p),
          (a[u] = g);
      }
      s[u].resultBuffer = g.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid,
          i = e._clip.uuid,
          r = this._actionsByClip[i];
        this._bindAction(e, r && r.knownActions[0]),
          this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const r = t[n];
        r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const r = t[n];
        --r.useCount === 0 &&
          (r.restoreOriginalState(), this._takeBackBinding(r));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    (this._actions = []),
      (this._nActiveActions = 0),
      (this._actionsByClip = {}),
      (this._bindings = []),
      (this._nActiveBindings = 0),
      (this._bindingsByRootAndName = {}),
      (this._controlInterpolants = []),
      (this._nActiveControlInterpolants = 0);
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        },
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        },
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        },
      },
    };
  }
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions,
      r = this._actionsByClip;
    let a = r[t];
    if (a === void 0)
      (a = { knownActions: [e], actionByRoot: {} }),
        (e._byClipCacheIndex = 0),
        (r[t] = a);
    else {
      const s = a.knownActions;
      (e._byClipCacheIndex = s.length), s.push(e);
    }
    (e._cacheIndex = i.length), i.push(e), (a.actionByRoot[n] = e);
  }
  _removeInactiveAction(e) {
    const t = this._actions,
      n = t[t.length - 1],
      i = e._cacheIndex;
    (n._cacheIndex = i), (t[i] = n), t.pop(), (e._cacheIndex = null);
    const r = e._clip.uuid,
      a = this._actionsByClip,
      s = a[r],
      l = s.knownActions,
      c = l[l.length - 1],
      h = e._byClipCacheIndex;
    (c._byClipCacheIndex = h),
      (l[h] = c),
      l.pop(),
      (e._byClipCacheIndex = null);
    const u = s.actionByRoot,
      f = (e._localRoot || this._root).uuid;
    delete u[f],
      l.length === 0 && delete a[r],
      this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const r = t[n];
      --r.referenceCount === 0 && this._removeInactiveBinding(r);
    }
  }
  _lendAction(e) {
    const t = this._actions,
      n = e._cacheIndex,
      i = this._nActiveActions++,
      r = t[i];
    (e._cacheIndex = i), (t[i] = e), (r._cacheIndex = n), (t[n] = r);
  }
  _takeBackAction(e) {
    const t = this._actions,
      n = e._cacheIndex,
      i = --this._nActiveActions,
      r = t[i];
    (e._cacheIndex = i), (t[i] = e), (r._cacheIndex = n), (t[n] = r);
  }
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName,
      r = this._bindings;
    let a = i[t];
    a === void 0 && ((a = {}), (i[t] = a)),
      (a[n] = e),
      (e._cacheIndex = r.length),
      r.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings,
      n = e.binding,
      i = n.rootNode.uuid,
      r = n.path,
      a = this._bindingsByRootAndName,
      s = a[i],
      l = t[t.length - 1],
      c = e._cacheIndex;
    (l._cacheIndex = c),
      (t[c] = l),
      t.pop(),
      delete s[r],
      Object.keys(s).length === 0 && delete a[i];
  }
  _lendBinding(e) {
    const t = this._bindings,
      n = e._cacheIndex,
      i = this._nActiveBindings++,
      r = t[i];
    (e._cacheIndex = i), (t[i] = e), (r._cacheIndex = n), (t[n] = r);
  }
  _takeBackBinding(e) {
    const t = this._bindings,
      n = e._cacheIndex,
      i = --this._nActiveBindings,
      r = t[i];
    (e._cacheIndex = i), (t[i] = e), (r._cacheIndex = n), (t[n] = r);
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants,
      t = this._nActiveControlInterpolants++;
    let n = e[t];
    return (
      n === void 0 &&
        ((n = new Jh(new Float32Array(2), new Float32Array(2), 1, _x)),
        (n.__cacheIndex = t),
        (e[t] = n)),
      n
    );
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants,
      n = e.__cacheIndex,
      i = --this._nActiveControlInterpolants,
      r = t[i];
    (e.__cacheIndex = i), (t[i] = e), (r.__cacheIndex = n), (t[n] = r);
  }
  clipAction(e, t, n) {
    const i = t || this._root,
      r = i.uuid;
    let a = typeof e == "string" ? Eo.findByName(i, e) : e;
    const s = a !== null ? a.uuid : e,
      l = this._actionsByClip[s];
    let c = null;
    if (
      (n === void 0 && (a !== null ? (n = a.blendMode) : (n = Xo)),
      l !== void 0)
    ) {
      const u = l.actionByRoot[r];
      if (u !== void 0 && u.blendMode === n) return u;
      (c = l.knownActions[0]), a === null && (a = c._clip);
    }
    if (a === null) return null;
    const h = new gx(this, a, t, n);
    return this._bindAction(h, c), this._addInactiveAction(h, s, r), h;
  }
  existingAction(e, t) {
    const n = t || this._root,
      i = n.uuid,
      r = typeof e == "string" ? Eo.findByName(n, e) : e,
      a = r ? r.uuid : e,
      s = this._actionsByClip[a];
    return (s !== void 0 && s.actionByRoot[i]) || null;
  }
  stopAllAction() {
    const e = this._actions,
      t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n) e[n].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions,
      n = this._nActiveActions,
      i = (this.time += e),
      r = Math.sign(e),
      a = (this._accuIndex ^= 1);
    for (let c = 0; c !== n; ++c) t[c]._update(i, e, r, a);
    const s = this._bindings,
      l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c) s[c].apply(a);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    const t = this._actions,
      n = e.uuid,
      i = this._actionsByClip,
      r = i[n];
    if (r !== void 0) {
      const a = r.knownActions;
      for (let s = 0, l = a.length; s !== l; ++s) {
        const c = a[s];
        this._deactivateAction(c);
        const h = c._cacheIndex,
          u = t[t.length - 1];
        (c._cacheIndex = null),
          (c._byClipCacheIndex = null),
          (u._cacheIndex = h),
          (t[h] = u),
          t.pop(),
          this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid,
      n = this._actionsByClip;
    for (const a in n) {
      const s = n[a].actionByRoot,
        l = s[t];
      l !== void 0 &&
        (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const i = this._bindingsByRootAndName,
      r = i[t];
    if (r !== void 0)
      for (const a in r) {
        const s = r[a];
        s.restoreOriginalState(), this._removeInactiveBinding(s);
      }
  }
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
class th {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(vt(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const nh = new R(),
  Gs = new R(),
  ih = new R();
class xx extends je {
  constructor(e, t, n) {
    super(),
      (this.light = e),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = n),
      (this.type = "DirectionalLightHelper"),
      t === void 0 && (t = 1);
    let i = new kt();
    i.setAttribute(
      "position",
      new Je([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3)
    );
    const r = new pa({ fog: !1, toneMapped: !1 });
    (this.lightPlane = new Qs(i, r)),
      this.add(this.lightPlane),
      (i = new kt()),
      i.setAttribute("position", new Je([0, 0, 0, 0, 0, 1], 3)),
      (this.targetLine = new Qs(i, r)),
      this.add(this.targetLine),
      this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(),
      this.lightPlane.material.dispose(),
      this.targetLine.geometry.dispose(),
      this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1),
      this.light.target.updateWorldMatrix(!0, !1),
      nh.setFromMatrixPosition(this.light.matrixWorld),
      Gs.setFromMatrixPosition(this.light.target.matrixWorld),
      ih.subVectors(Gs, nh),
      this.lightPlane.lookAt(Gs),
      this.color !== void 0
        ? (this.lightPlane.material.color.set(this.color),
          this.targetLine.material.color.set(this.color))
        : (this.lightPlane.material.color.copy(this.light.color),
          this.targetLine.material.color.copy(this.light.color)),
      this.targetLine.lookAt(Gs),
      (this.targetLine.scale.z = ih.length());
  }
}
const Vs = new R(),
  $e = new Zo();
class vx extends G0 {
  constructor(e) {
    const t = new kt(),
      n = new pa({ color: 16777215, vertexColors: !0, toneMapped: !1 }),
      i = [],
      r = [],
      a = {};
    s("n1", "n2"),
      s("n2", "n4"),
      s("n4", "n3"),
      s("n3", "n1"),
      s("f1", "f2"),
      s("f2", "f4"),
      s("f4", "f3"),
      s("f3", "f1"),
      s("n1", "f1"),
      s("n2", "f2"),
      s("n3", "f3"),
      s("n4", "f4"),
      s("p", "n1"),
      s("p", "n2"),
      s("p", "n3"),
      s("p", "n4"),
      s("u1", "u2"),
      s("u2", "u3"),
      s("u3", "u1"),
      s("c", "t"),
      s("p", "c"),
      s("cn1", "cn2"),
      s("cn3", "cn4"),
      s("cf1", "cf2"),
      s("cf3", "cf4");
    function s(g, d) {
      l(g), l(d);
    }
    function l(g) {
      i.push(0, 0, 0),
        r.push(0, 0, 0),
        a[g] === void 0 && (a[g] = []),
        a[g].push(i.length / 3 - 1);
    }
    t.setAttribute("position", new Je(i, 3)),
      t.setAttribute("color", new Je(r, 3)),
      super(t, n),
      (this.type = "CameraHelper"),
      (this.camera = e),
      this.camera.updateProjectionMatrix &&
        this.camera.updateProjectionMatrix(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.pointMap = a),
      this.update();
    const c = new Me(16755200),
      h = new Me(16711680),
      u = new Me(43775),
      f = new Me(16777215),
      p = new Me(3355443);
    this.setColors(c, h, u, f, p);
  }
  setColors(e, t, n, i, r) {
    const s = this.geometry.getAttribute("color");
    s.setXYZ(0, e.r, e.g, e.b),
      s.setXYZ(1, e.r, e.g, e.b),
      s.setXYZ(2, e.r, e.g, e.b),
      s.setXYZ(3, e.r, e.g, e.b),
      s.setXYZ(4, e.r, e.g, e.b),
      s.setXYZ(5, e.r, e.g, e.b),
      s.setXYZ(6, e.r, e.g, e.b),
      s.setXYZ(7, e.r, e.g, e.b),
      s.setXYZ(8, e.r, e.g, e.b),
      s.setXYZ(9, e.r, e.g, e.b),
      s.setXYZ(10, e.r, e.g, e.b),
      s.setXYZ(11, e.r, e.g, e.b),
      s.setXYZ(12, e.r, e.g, e.b),
      s.setXYZ(13, e.r, e.g, e.b),
      s.setXYZ(14, e.r, e.g, e.b),
      s.setXYZ(15, e.r, e.g, e.b),
      s.setXYZ(16, e.r, e.g, e.b),
      s.setXYZ(17, e.r, e.g, e.b),
      s.setXYZ(18, e.r, e.g, e.b),
      s.setXYZ(19, e.r, e.g, e.b),
      s.setXYZ(20, e.r, e.g, e.b),
      s.setXYZ(21, e.r, e.g, e.b),
      s.setXYZ(22, e.r, e.g, e.b),
      s.setXYZ(23, e.r, e.g, e.b),
      s.setXYZ(24, t.r, t.g, t.b),
      s.setXYZ(25, t.r, t.g, t.b),
      s.setXYZ(26, t.r, t.g, t.b),
      s.setXYZ(27, t.r, t.g, t.b),
      s.setXYZ(28, t.r, t.g, t.b),
      s.setXYZ(29, t.r, t.g, t.b),
      s.setXYZ(30, t.r, t.g, t.b),
      s.setXYZ(31, t.r, t.g, t.b),
      s.setXYZ(32, n.r, n.g, n.b),
      s.setXYZ(33, n.r, n.g, n.b),
      s.setXYZ(34, n.r, n.g, n.b),
      s.setXYZ(35, n.r, n.g, n.b),
      s.setXYZ(36, n.r, n.g, n.b),
      s.setXYZ(37, n.r, n.g, n.b),
      s.setXYZ(38, i.r, i.g, i.b),
      s.setXYZ(39, i.r, i.g, i.b),
      s.setXYZ(40, r.r, r.g, r.b),
      s.setXYZ(41, r.r, r.g, r.b),
      s.setXYZ(42, r.r, r.g, r.b),
      s.setXYZ(43, r.r, r.g, r.b),
      s.setXYZ(44, r.r, r.g, r.b),
      s.setXYZ(45, r.r, r.g, r.b),
      s.setXYZ(46, r.r, r.g, r.b),
      s.setXYZ(47, r.r, r.g, r.b),
      s.setXYZ(48, r.r, r.g, r.b),
      s.setXYZ(49, r.r, r.g, r.b),
      (s.needsUpdate = !0);
  }
  update() {
    const e = this.geometry,
      t = this.pointMap,
      n = 1,
      i = 1;
    $e.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
      tt("c", t, e, $e, 0, 0, -1),
      tt("t", t, e, $e, 0, 0, 1),
      tt("n1", t, e, $e, -n, -i, -1),
      tt("n2", t, e, $e, n, -i, -1),
      tt("n3", t, e, $e, -n, i, -1),
      tt("n4", t, e, $e, n, i, -1),
      tt("f1", t, e, $e, -n, -i, 1),
      tt("f2", t, e, $e, n, -i, 1),
      tt("f3", t, e, $e, -n, i, 1),
      tt("f4", t, e, $e, n, i, 1),
      tt("u1", t, e, $e, n * 0.7, i * 1.1, -1),
      tt("u2", t, e, $e, -n * 0.7, i * 1.1, -1),
      tt("u3", t, e, $e, 0, i * 2, -1),
      tt("cf1", t, e, $e, -n, 0, 1),
      tt("cf2", t, e, $e, n, 0, 1),
      tt("cf3", t, e, $e, 0, -i, 1),
      tt("cf4", t, e, $e, 0, i, 1),
      tt("cn1", t, e, $e, -n, 0, -1),
      tt("cn2", t, e, $e, n, 0, -1),
      tt("cn3", t, e, $e, 0, -i, -1),
      tt("cn4", t, e, $e, 0, i, -1),
      (e.getAttribute("position").needsUpdate = !0);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function tt(o, e, t, n, i, r, a) {
  Vs.set(i, r, a).unproject(n);
  const s = e[o];
  if (s !== void 0) {
    const l = t.getAttribute("position");
    for (let c = 0, h = s.length; c < h; c++) l.setXYZ(s[c], Vs.x, Vs.y, Vs.z);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Ho } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Ho));
const rh = { type: "change" },
  ro = { type: "start" },
  sh = { type: "end" };
class yx extends fi {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new R()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: Bi.ROTATE,
        MIDDLE: Bi.DOLLY,
        RIGHT: Bi.PAN,
      }),
      (this.touches = { ONE: Gi.ROTATE, TWO: Gi.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return s.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return s.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (P) {
        P.addEventListener("keydown", Pt), (this._domElementKeyEvents = P);
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener("keydown", Pt),
          (this._domElementKeyEvents = null);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(rh),
          n.update(),
          (r = i.NONE);
      }),
      (this.update = (function () {
        const P = new R(),
          N = new Nt().setFromUnitVectors(e.up, new R(0, 1, 0)),
          ae = N.clone().invert(),
          re = new R(),
          pe = new Nt(),
          ge = 2 * Math.PI;
        return function () {
          const Le = n.object.position;
          P.copy(Le).sub(n.target),
            P.applyQuaternion(N),
            s.setFromVector3(P),
            n.autoRotate && r === i.NONE && S(C()),
            n.enableDamping
              ? ((s.theta += l.theta * n.dampingFactor),
                (s.phi += l.phi * n.dampingFactor))
              : ((s.theta += l.theta), (s.phi += l.phi));
          let Ne = n.minAzimuthAngle,
            Ge = n.maxAzimuthAngle;
          return (
            isFinite(Ne) &&
              isFinite(Ge) &&
              (Ne < -Math.PI ? (Ne += ge) : Ne > Math.PI && (Ne -= ge),
              Ge < -Math.PI ? (Ge += ge) : Ge > Math.PI && (Ge -= ge),
              Ne <= Ge
                ? (s.theta = Math.max(Ne, Math.min(Ge, s.theta)))
                : (s.theta =
                    s.theta > (Ne + Ge) / 2
                      ? Math.max(Ne, s.theta)
                      : Math.min(Ge, s.theta))),
            (s.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, s.phi)
            )),
            s.makeSafe(),
            (s.radius *= c),
            (s.radius = Math.max(
              n.minDistance,
              Math.min(n.maxDistance, s.radius)
            )),
            n.enableDamping === !0
              ? n.target.addScaledVector(h, n.dampingFactor)
              : n.target.add(h),
            P.setFromSpherical(s),
            P.applyQuaternion(ae),
            Le.copy(n.target).add(P),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((l.theta *= 1 - n.dampingFactor),
                (l.phi *= 1 - n.dampingFactor),
                h.multiplyScalar(1 - n.dampingFactor))
              : (l.set(0, 0, 0), h.set(0, 0, 0)),
            (c = 1),
            u ||
            re.distanceToSquared(n.object.position) > a ||
            8 * (1 - pe.dot(n.object.quaternion)) > a
              ? (n.dispatchEvent(rh),
                re.copy(n.object.position),
                pe.copy(n.object.quaternion),
                (u = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", q),
          n.domElement.removeEventListener("pointerdown", ut),
          n.domElement.removeEventListener("pointercancel", dt),
          n.domElement.removeEventListener("wheel", Ht),
          n.domElement.removeEventListener("pointermove", Ct),
          n.domElement.removeEventListener("pointerup", ft),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener("keydown", Pt),
            (n._domElementKeyEvents = null));
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let r = i.NONE;
    const a = 1e-6,
      s = new th(),
      l = new th();
    let c = 1;
    const h = new R();
    let u = !1;
    const f = new Se(),
      p = new Se(),
      g = new Se(),
      d = new Se(),
      m = new Se(),
      _ = new Se(),
      b = new Se(),
      x = new Se(),
      y = new Se(),
      M = [],
      E = {};
    function C() {
      return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function v() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function S(P) {
      l.theta -= P;
    }
    function L(P) {
      l.phi -= P;
    }
    const V = (function () {
        const P = new R();
        return function (ae, re) {
          P.setFromMatrixColumn(re, 0), P.multiplyScalar(-ae), h.add(P);
        };
      })(),
      G = (function () {
        const P = new R();
        return function (ae, re) {
          n.screenSpacePanning === !0
            ? P.setFromMatrixColumn(re, 1)
            : (P.setFromMatrixColumn(re, 0), P.crossVectors(n.object.up, P)),
            P.multiplyScalar(ae),
            h.add(P);
        };
      })(),
      F = (function () {
        const P = new R();
        return function (ae, re) {
          const pe = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const ge = n.object.position;
            P.copy(ge).sub(n.target);
            let me = P.length();
            (me *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              V((2 * ae * me) / pe.clientHeight, n.object.matrix),
              G((2 * re * me) / pe.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (V(
                  (ae * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    pe.clientWidth,
                  n.object.matrix
                ),
                G(
                  (re * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    pe.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function D(P) {
      n.object.isPerspectiveCamera
        ? (c /= P)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom * P)
          )),
          n.object.updateProjectionMatrix(),
          (u = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function B(P) {
      n.object.isPerspectiveCamera
        ? (c *= P)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom / P)
          )),
          n.object.updateProjectionMatrix(),
          (u = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function H(P) {
      f.set(P.clientX, P.clientY);
    }
    function Z(P) {
      b.set(P.clientX, P.clientY);
    }
    function W(P) {
      d.set(P.clientX, P.clientY);
    }
    function J(P) {
      p.set(P.clientX, P.clientY),
        g.subVectors(p, f).multiplyScalar(n.rotateSpeed);
      const N = n.domElement;
      S((2 * Math.PI * g.x) / N.clientHeight),
        L((2 * Math.PI * g.y) / N.clientHeight),
        f.copy(p),
        n.update();
    }
    function K(P) {
      x.set(P.clientX, P.clientY),
        y.subVectors(x, b),
        y.y > 0 ? D(v()) : y.y < 0 && B(v()),
        b.copy(x),
        n.update();
    }
    function ue(P) {
      m.set(P.clientX, P.clientY),
        _.subVectors(m, d).multiplyScalar(n.panSpeed),
        F(_.x, _.y),
        d.copy(m),
        n.update();
    }
    function U(P) {
      P.deltaY < 0 ? B(v()) : P.deltaY > 0 && D(v()), n.update();
    }
    function $(P) {
      let N = !1;
      switch (P.code) {
        case n.keys.UP:
          P.ctrlKey || P.metaKey || P.shiftKey
            ? L((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : F(0, n.keyPanSpeed),
            (N = !0);
          break;
        case n.keys.BOTTOM:
          P.ctrlKey || P.metaKey || P.shiftKey
            ? L((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : F(0, -n.keyPanSpeed),
            (N = !0);
          break;
        case n.keys.LEFT:
          P.ctrlKey || P.metaKey || P.shiftKey
            ? S((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : F(n.keyPanSpeed, 0),
            (N = !0);
          break;
        case n.keys.RIGHT:
          P.ctrlKey || P.metaKey || P.shiftKey
            ? S((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : F(-n.keyPanSpeed, 0),
            (N = !0);
          break;
      }
      N && (P.preventDefault(), n.update());
    }
    function ee() {
      if (M.length === 1) f.set(M[0].pageX, M[0].pageY);
      else {
        const P = 0.5 * (M[0].pageX + M[1].pageX),
          N = 0.5 * (M[0].pageY + M[1].pageY);
        f.set(P, N);
      }
    }
    function O() {
      if (M.length === 1) d.set(M[0].pageX, M[0].pageY);
      else {
        const P = 0.5 * (M[0].pageX + M[1].pageX),
          N = 0.5 * (M[0].pageY + M[1].pageY);
        d.set(P, N);
      }
    }
    function le() {
      const P = M[0].pageX - M[1].pageX,
        N = M[0].pageY - M[1].pageY,
        ae = Math.sqrt(P * P + N * N);
      b.set(0, ae);
    }
    function ce() {
      n.enableZoom && le(), n.enablePan && O();
    }
    function he() {
      n.enableZoom && le(), n.enableRotate && ee();
    }
    function fe(P) {
      if (M.length == 1) p.set(P.pageX, P.pageY);
      else {
        const ae = _e(P),
          re = 0.5 * (P.pageX + ae.x),
          pe = 0.5 * (P.pageY + ae.y);
        p.set(re, pe);
      }
      g.subVectors(p, f).multiplyScalar(n.rotateSpeed);
      const N = n.domElement;
      S((2 * Math.PI * g.x) / N.clientHeight),
        L((2 * Math.PI * g.y) / N.clientHeight),
        f.copy(p);
    }
    function ye(P) {
      if (M.length === 1) m.set(P.pageX, P.pageY);
      else {
        const N = _e(P),
          ae = 0.5 * (P.pageX + N.x),
          re = 0.5 * (P.pageY + N.y);
        m.set(ae, re);
      }
      _.subVectors(m, d).multiplyScalar(n.panSpeed), F(_.x, _.y), d.copy(m);
    }
    function we(P) {
      const N = _e(P),
        ae = P.pageX - N.x,
        re = P.pageY - N.y,
        pe = Math.sqrt(ae * ae + re * re);
      x.set(0, pe),
        y.set(0, Math.pow(x.y / b.y, n.zoomSpeed)),
        D(y.y),
        b.copy(x);
    }
    function Ee(P) {
      n.enableZoom && we(P), n.enablePan && ye(P);
    }
    function Oe(P) {
      n.enableZoom && we(P), n.enableRotate && fe(P);
    }
    function ut(P) {
      n.enabled !== !1 &&
        (M.length === 0 &&
          (n.domElement.setPointerCapture(P.pointerId),
          n.domElement.addEventListener("pointermove", Ct),
          n.domElement.addEventListener("pointerup", ft)),
        te(P),
        P.pointerType === "touch" ? A(P) : Ye(P));
    }
    function Ct(P) {
      n.enabled !== !1 && (P.pointerType === "touch" ? w(P) : He(P));
    }
    function ft(P) {
      ne(P),
        M.length === 0 &&
          (n.domElement.releasePointerCapture(P.pointerId),
          n.domElement.removeEventListener("pointermove", Ct),
          n.domElement.removeEventListener("pointerup", ft)),
        n.dispatchEvent(sh),
        (r = i.NONE);
    }
    function dt(P) {
      ne(P);
    }
    function Ye(P) {
      let N;
      switch (P.button) {
        case 0:
          N = n.mouseButtons.LEFT;
          break;
        case 1:
          N = n.mouseButtons.MIDDLE;
          break;
        case 2:
          N = n.mouseButtons.RIGHT;
          break;
        default:
          N = -1;
      }
      switch (N) {
        case Bi.DOLLY:
          if (n.enableZoom === !1) return;
          Z(P), (r = i.DOLLY);
          break;
        case Bi.ROTATE:
          if (P.ctrlKey || P.metaKey || P.shiftKey) {
            if (n.enablePan === !1) return;
            W(P), (r = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            H(P), (r = i.ROTATE);
          }
          break;
        case Bi.PAN:
          if (P.ctrlKey || P.metaKey || P.shiftKey) {
            if (n.enableRotate === !1) return;
            H(P), (r = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            W(P), (r = i.PAN);
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(ro);
    }
    function He(P) {
      switch (r) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          J(P);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          K(P);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          ue(P);
          break;
      }
    }
    function Ht(P) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        r !== i.NONE ||
        (P.preventDefault(), n.dispatchEvent(ro), U(P), n.dispatchEvent(sh));
    }
    function Pt(P) {
      n.enabled === !1 || n.enablePan === !1 || $(P);
    }
    function A(P) {
      switch ((se(P), M.length)) {
        case 1:
          switch (n.touches.ONE) {
            case Gi.ROTATE:
              if (n.enableRotate === !1) return;
              ee(), (r = i.TOUCH_ROTATE);
              break;
            case Gi.PAN:
              if (n.enablePan === !1) return;
              O(), (r = i.TOUCH_PAN);
              break;
            default:
              r = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Gi.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              ce(), (r = i.TOUCH_DOLLY_PAN);
              break;
            case Gi.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              he(), (r = i.TOUCH_DOLLY_ROTATE);
              break;
            default:
              r = i.NONE;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(ro);
    }
    function w(P) {
      switch ((se(P), r)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          fe(P), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          ye(P), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Ee(P), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          Oe(P), n.update();
          break;
        default:
          r = i.NONE;
      }
    }
    function q(P) {
      n.enabled !== !1 && P.preventDefault();
    }
    function te(P) {
      M.push(P);
    }
    function ne(P) {
      delete E[P.pointerId];
      for (let N = 0; N < M.length; N++)
        if (M[N].pointerId == P.pointerId) {
          M.splice(N, 1);
          return;
        }
    }
    function se(P) {
      let N = E[P.pointerId];
      N === void 0 && ((N = new Se()), (E[P.pointerId] = N)),
        N.set(P.pageX, P.pageY);
    }
    function _e(P) {
      const N = P.pointerId === M[0].pointerId ? M[1] : M[0];
      return E[N.pointerId];
    }
    n.domElement.addEventListener("contextmenu", q),
      n.domElement.addEventListener("pointerdown", ut),
      n.domElement.addEventListener("pointercancel", dt),
      n.domElement.addEventListener("wheel", Ht, { passive: !1 }),
      this.update();
  }
}
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/ var ah = function (o) {
  return URL.createObjectURL(new Blob([o], { type: "text/javascript" }));
};
try {
  URL.revokeObjectURL(ah(""));
} catch {
  ah = function (e) {
    return "data:application/javascript;charset=UTF-8," + encodeURI(e);
  };
}
var ln = Uint8Array,
  ni = Uint16Array,
  Ao = Uint32Array,
  iu = new ln([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0,
  ]),
  ru = new ln([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0,
  ]),
  Mx = new ln([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  su = function (o, e) {
    for (var t = new ni(31), n = 0; n < 31; ++n) t[n] = e += 1 << o[n - 1];
    for (var i = new Ao(t[30]), n = 1; n < 30; ++n)
      for (var r = t[n]; r < t[n + 1]; ++r) i[r] = ((r - t[n]) << 5) | n;
    return [t, i];
  },
  au = su(iu, 2),
  ou = au[0],
  bx = au[1];
(ou[28] = 258), (bx[258] = 28);
var Sx = su(ru, 0),
  wx = Sx[0],
  Co = new ni(32768);
for (var qe = 0; qe < 32768; ++qe) {
  var Jn = ((qe & 43690) >>> 1) | ((qe & 21845) << 1);
  (Jn = ((Jn & 52428) >>> 2) | ((Jn & 13107) << 2)),
    (Jn = ((Jn & 61680) >>> 4) | ((Jn & 3855) << 4)),
    (Co[qe] = (((Jn & 65280) >>> 8) | ((Jn & 255) << 8)) >>> 1);
}
var Jr = function (o, e, t) {
    for (var n = o.length, i = 0, r = new ni(e); i < n; ++i) ++r[o[i] - 1];
    var a = new ni(e);
    for (i = 0; i < e; ++i) a[i] = (a[i - 1] + r[i - 1]) << 1;
    var s;
    if (t) {
      s = new ni(1 << e);
      var l = 15 - e;
      for (i = 0; i < n; ++i)
        if (o[i])
          for (
            var c = (i << 4) | o[i],
              h = e - o[i],
              u = a[o[i] - 1]++ << h,
              f = u | ((1 << h) - 1);
            u <= f;
            ++u
          )
            s[Co[u] >>> l] = c;
    } else
      for (s = new ni(n), i = 0; i < n; ++i)
        o[i] && (s[i] = Co[a[o[i] - 1]++] >>> (15 - o[i]));
    return s;
  },
  vs = new ln(288);
for (var qe = 0; qe < 144; ++qe) vs[qe] = 8;
for (var qe = 144; qe < 256; ++qe) vs[qe] = 9;
for (var qe = 256; qe < 280; ++qe) vs[qe] = 7;
for (var qe = 280; qe < 288; ++qe) vs[qe] = 8;
var lu = new ln(32);
for (var qe = 0; qe < 32; ++qe) lu[qe] = 5;
var Tx = Jr(vs, 9, 1),
  Ex = Jr(lu, 5, 1),
  so = function (o) {
    for (var e = o[0], t = 1; t < o.length; ++t) o[t] > e && (e = o[t]);
    return e;
  },
  xn = function (o, e, t) {
    var n = (e / 8) | 0;
    return ((o[n] | (o[n + 1] << 8)) >> (e & 7)) & t;
  },
  ao = function (o, e) {
    var t = (e / 8) | 0;
    return (o[t] | (o[t + 1] << 8) | (o[t + 2] << 16)) >> (e & 7);
  },
  Ax = function (o) {
    return ((o / 8) | 0) + (o & 7 && 1);
  },
  Cx = function (o, e, t) {
    (e == null || e < 0) && (e = 0),
      (t == null || t > o.length) && (t = o.length);
    var n = new (o instanceof ni ? ni : o instanceof Ao ? Ao : ln)(t - e);
    return n.set(o.subarray(e, t)), n;
  },
  Px = function (o, e, t) {
    var n = o.length;
    if (!n || (t && !t.l && n < 5)) return e || new ln(0);
    var i = !e || t,
      r = !t || t.i;
    t || (t = {}), e || (e = new ln(n * 3));
    var a = function (le) {
        var ce = e.length;
        if (le > ce) {
          var he = new ln(Math.max(ce * 2, le));
          he.set(e), (e = he);
        }
      },
      s = t.f || 0,
      l = t.p || 0,
      c = t.b || 0,
      h = t.l,
      u = t.d,
      f = t.m,
      p = t.n,
      g = n * 8;
    do {
      if (!h) {
        t.f = s = xn(o, l, 1);
        var d = xn(o, l + 1, 3);
        if (((l += 3), d))
          if (d == 1) (h = Tx), (u = Ex), (f = 9), (p = 5);
          else if (d == 2) {
            var x = xn(o, l, 31) + 257,
              y = xn(o, l + 10, 15) + 4,
              M = x + xn(o, l + 5, 31) + 1;
            l += 14;
            for (var E = new ln(M), C = new ln(19), v = 0; v < y; ++v)
              C[Mx[v]] = xn(o, l + v * 3, 7);
            l += y * 3;
            for (
              var S = so(C), L = (1 << S) - 1, V = Jr(C, S, 1), v = 0;
              v < M;

            ) {
              var G = V[xn(o, l, L)];
              l += G & 15;
              var m = G >>> 4;
              if (m < 16) E[v++] = m;
              else {
                var F = 0,
                  D = 0;
                for (
                  m == 16
                    ? ((D = 3 + xn(o, l, 3)), (l += 2), (F = E[v - 1]))
                    : m == 17
                    ? ((D = 3 + xn(o, l, 7)), (l += 3))
                    : m == 18 && ((D = 11 + xn(o, l, 127)), (l += 7));
                  D--;

                )
                  E[v++] = F;
              }
            }
            var B = E.subarray(0, x),
              H = E.subarray(x);
            (f = so(B)), (p = so(H)), (h = Jr(B, f, 1)), (u = Jr(H, p, 1));
          } else throw "invalid block type";
        else {
          var m = Ax(l) + 4,
            _ = o[m - 4] | (o[m - 3] << 8),
            b = m + _;
          if (b > n) {
            if (r) throw "unexpected EOF";
            break;
          }
          i && a(c + _),
            e.set(o.subarray(m, b), c),
            (t.b = c += _),
            (t.p = l = b * 8);
          continue;
        }
        if (l > g) {
          if (r) throw "unexpected EOF";
          break;
        }
      }
      i && a(c + 131072);
      for (var Z = (1 << f) - 1, W = (1 << p) - 1, J = l; ; J = l) {
        var F = h[ao(o, l) & Z],
          K = F >>> 4;
        if (((l += F & 15), l > g)) {
          if (r) throw "unexpected EOF";
          break;
        }
        if (!F) throw "invalid length/literal";
        if (K < 256) e[c++] = K;
        else if (K == 256) {
          (J = l), (h = null);
          break;
        } else {
          var ue = K - 254;
          if (K > 264) {
            var v = K - 257,
              U = iu[v];
            (ue = xn(o, l, (1 << U) - 1) + ou[v]), (l += U);
          }
          var $ = u[ao(o, l) & W],
            ee = $ >>> 4;
          if (!$) throw "invalid distance";
          l += $ & 15;
          var H = wx[ee];
          if (ee > 3) {
            var U = ru[ee];
            (H += ao(o, l) & ((1 << U) - 1)), (l += U);
          }
          if (l > g) {
            if (r) throw "unexpected EOF";
            break;
          }
          i && a(c + 131072);
          for (var O = c + ue; c < O; c += 4)
            (e[c] = e[c - H]),
              (e[c + 1] = e[c + 1 - H]),
              (e[c + 2] = e[c + 2 - H]),
              (e[c + 3] = e[c + 3 - H]);
          c = O;
        }
      }
      (t.l = h),
        (t.p = J),
        (t.b = c),
        h && ((s = 1), (t.m = f), (t.d = u), (t.n = p));
    } while (!s);
    return c == e.length ? e : Cx(e, 0, c);
  },
  Lx = new ln(0),
  Rx = function (o) {
    if ((o[0] & 15) != 8 || o[0] >>> 4 > 7 || ((o[0] << 8) | o[1]) % 31)
      throw "invalid zlib data";
    if (o[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
  };
function Dx(o, e) {
  return Px((Rx(o), o.subarray(2, -4)), e);
}
var Ix = typeof TextDecoder < "u" && new TextDecoder(),
  Fx = 0;
try {
  Ix.decode(Lx, { stream: !0 }), (Fx = 1);
} catch {}
function cu(o, e, t) {
  const n = t.length - o - 1;
  if (e >= t[n]) return n - 1;
  if (e <= t[o]) return o;
  let i = o,
    r = n,
    a = Math.floor((i + r) / 2);
  for (; e < t[a] || e >= t[a + 1]; )
    e < t[a] ? (r = a) : (i = a), (a = Math.floor((i + r) / 2));
  return a;
}
function Ox(o, e, t, n) {
  const i = [],
    r = [],
    a = [];
  i[0] = 1;
  for (let s = 1; s <= t; ++s) {
    (r[s] = e - n[o + 1 - s]), (a[s] = n[o + s] - e);
    let l = 0;
    for (let c = 0; c < s; ++c) {
      const h = a[c + 1],
        u = r[s - c],
        f = i[c] / (h + u);
      (i[c] = l + h * f), (l = u * f);
    }
    i[s] = l;
  }
  return i;
}
function Nx(o, e, t, n) {
  const i = cu(o, n, e),
    r = Ox(i, n, o, e),
    a = new ze(0, 0, 0, 0);
  for (let s = 0; s <= o; ++s) {
    const l = t[i - o + s],
      c = r[s],
      h = l.w * c;
    (a.x += l.x * h), (a.y += l.y * h), (a.z += l.z * h), (a.w += l.w * c);
  }
  return a;
}
function kx(o, e, t, n, i) {
  const r = [];
  for (let u = 0; u <= t; ++u) r[u] = 0;
  const a = [];
  for (let u = 0; u <= n; ++u) a[u] = r.slice(0);
  const s = [];
  for (let u = 0; u <= t; ++u) s[u] = r.slice(0);
  s[0][0] = 1;
  const l = r.slice(0),
    c = r.slice(0);
  for (let u = 1; u <= t; ++u) {
    (l[u] = e - i[o + 1 - u]), (c[u] = i[o + u] - e);
    let f = 0;
    for (let p = 0; p < u; ++p) {
      const g = c[p + 1],
        d = l[u - p];
      s[u][p] = g + d;
      const m = s[p][u - 1] / s[u][p];
      (s[p][u] = f + g * m), (f = d * m);
    }
    s[u][u] = f;
  }
  for (let u = 0; u <= t; ++u) a[0][u] = s[u][t];
  for (let u = 0; u <= t; ++u) {
    let f = 0,
      p = 1;
    const g = [];
    for (let d = 0; d <= t; ++d) g[d] = r.slice(0);
    g[0][0] = 1;
    for (let d = 1; d <= n; ++d) {
      let m = 0;
      const _ = u - d,
        b = t - d;
      u >= d && ((g[p][0] = g[f][0] / s[b + 1][_]), (m = g[p][0] * s[_][b]));
      const x = _ >= -1 ? 1 : -_,
        y = u - 1 <= b ? d - 1 : t - u;
      for (let E = x; E <= y; ++E)
        (g[p][E] = (g[f][E] - g[f][E - 1]) / s[b + 1][_ + E]),
          (m += g[p][E] * s[_ + E][b]);
      u <= b &&
        ((g[p][d] = -g[f][d - 1] / s[b + 1][u]), (m += g[p][d] * s[u][b])),
        (a[d][u] = m);
      const M = f;
      (f = p), (p = M);
    }
  }
  let h = t;
  for (let u = 1; u <= n; ++u) {
    for (let f = 0; f <= t; ++f) a[u][f] *= h;
    h *= t - u;
  }
  return a;
}
function Ux(o, e, t, n, i) {
  const r = i < o ? i : o,
    a = [],
    s = cu(o, n, e),
    l = kx(s, n, o, r, e),
    c = [];
  for (let h = 0; h < t.length; ++h) {
    const u = t[h].clone(),
      f = u.w;
    (u.x *= f), (u.y *= f), (u.z *= f), (c[h] = u);
  }
  for (let h = 0; h <= r; ++h) {
    const u = c[s - o].clone().multiplyScalar(l[h][0]);
    for (let f = 1; f <= o; ++f)
      u.add(c[s - o + f].clone().multiplyScalar(l[h][f]));
    a[h] = u;
  }
  for (let h = r + 1; h <= i + 1; ++h) a[h] = new ze(0, 0, 0);
  return a;
}
function zx(o, e) {
  let t = 1;
  for (let i = 2; i <= o; ++i) t *= i;
  let n = 1;
  for (let i = 2; i <= e; ++i) n *= i;
  for (let i = 2; i <= o - e; ++i) n *= i;
  return t / n;
}
function Bx(o) {
  const e = o.length,
    t = [],
    n = [];
  for (let r = 0; r < e; ++r) {
    const a = o[r];
    (t[r] = new R(a.x, a.y, a.z)), (n[r] = a.w);
  }
  const i = [];
  for (let r = 0; r < e; ++r) {
    const a = t[r].clone();
    for (let s = 1; s <= r; ++s)
      a.sub(i[r - s].clone().multiplyScalar(zx(r, s) * n[s]));
    i[r] = a.divideScalar(n[0]);
  }
  return i;
}
function Gx(o, e, t, n, i) {
  const r = Ux(o, e, t, n, i);
  return Bx(r);
}
class Vx extends V0 {
  constructor(e, t, n, i, r) {
    super(),
      (this.degree = e),
      (this.knots = t),
      (this.controlPoints = []),
      (this.startKnot = i || 0),
      (this.endKnot = r || this.knots.length - 1);
    for (let a = 0; a < n.length; ++a) {
      const s = n[a];
      this.controlPoints[a] = new ze(s.x, s.y, s.z, s.w);
    }
  }
  getPoint(e, t = new R()) {
    const n = t,
      i =
        this.knots[this.startKnot] +
        e * (this.knots[this.endKnot] - this.knots[this.startKnot]),
      r = Nx(this.degree, this.knots, this.controlPoints, i);
    return r.w !== 1 && r.divideScalar(r.w), n.set(r.x, r.y, r.z);
  }
  getTangent(e, t = new R()) {
    const n = t,
      i =
        this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0]),
      r = Gx(this.degree, this.knots, this.controlPoints, i, 1);
    return n.copy(r[1]).normalize(), n;
  }
}
let Pe, nt, zt;
class ll extends xs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this,
      a = r.path === "" ? sx.extractUrlBase(e) : r.path,
      s = new J0(this.manager);
    s.setPath(r.path),
      s.setResponseType("arraybuffer"),
      s.setRequestHeader(r.requestHeader),
      s.setWithCredentials(r.withCredentials),
      s.load(
        e,
        function (l) {
          try {
            t(r.parse(l, a));
          } catch (c) {
            i ? i(c) : console.error(c), r.manager.itemError(e);
          }
        },
        n,
        i
      );
  }
  parse(e, t) {
    if (jx(e)) Pe = new Yx().parse(e);
    else {
      const i = du(e);
      if (!Zx(i)) throw new Error("THREE.FBXLoader: Unknown format.");
      if (lh(i) < 7e3)
        throw new Error(
          "THREE.FBXLoader: FBX version not supported, FileVersion: " + lh(i)
        );
      Pe = new qx().parse(i);
    }
    const n = new ex(this.manager)
      .setPath(this.resourcePath || t)
      .setCrossOrigin(this.crossOrigin);
    return new Wx(n, this.manager).parse(Pe);
  }
}
class Wx {
  constructor(e, t) {
    (this.textureLoader = e), (this.manager = t);
  }
  parse() {
    nt = this.parseConnections();
    const e = this.parseImages(),
      t = this.parseTextures(e),
      n = this.parseMaterials(t),
      i = this.parseDeformers(),
      r = new Hx().parse(i);
    return this.parseScene(i, r, n), zt;
  }
  parseConnections() {
    const e = new Map();
    return (
      "Connections" in Pe &&
        Pe.Connections.connections.forEach(function (n) {
          const i = n[0],
            r = n[1],
            a = n[2];
          e.has(i) || e.set(i, { parents: [], children: [] });
          const s = { ID: r, relationship: a };
          e.get(i).parents.push(s),
            e.has(r) || e.set(r, { parents: [], children: [] });
          const l = { ID: i, relationship: a };
          e.get(r).children.push(l);
        }),
      e
    );
  }
  parseImages() {
    const e = {},
      t = {};
    if ("Video" in Pe.Objects) {
      const n = Pe.Objects.Video;
      for (const i in n) {
        const r = n[i],
          a = parseInt(i);
        if (((e[a] = r.RelativeFilename || r.Filename), "Content" in r)) {
          const s =
              r.Content instanceof ArrayBuffer && r.Content.byteLength > 0,
            l = typeof r.Content == "string" && r.Content !== "";
          if (s || l) {
            const c = this.parseImage(n[i]);
            t[r.RelativeFilename || r.Filename] = c;
          }
        }
      }
    }
    for (const n in e) {
      const i = e[n];
      t[i] !== void 0 ? (e[n] = t[i]) : (e[n] = e[n].split("\\").pop());
    }
    return e;
  }
  parseImage(e) {
    const t = e.Content,
      n = e.RelativeFilename || e.Filename,
      i = n.slice(n.lastIndexOf(".") + 1).toLowerCase();
    let r;
    switch (i) {
      case "bmp":
        r = "image/bmp";
        break;
      case "jpg":
      case "jpeg":
        r = "image/jpeg";
        break;
      case "png":
        r = "image/png";
        break;
      case "tif":
        r = "image/tiff";
        break;
      case "tga":
        this.manager.getHandler(".tga") === null &&
          console.warn("FBXLoader: TGA loader not found, skipping ", n),
          (r = "image/tga");
        break;
      default:
        console.warn('FBXLoader: Image type "' + i + '" is not supported.');
        return;
    }
    if (typeof t == "string") return "data:" + r + ";base64," + t;
    {
      const a = new Uint8Array(t);
      return window.URL.createObjectURL(new Blob([a], { type: r }));
    }
  }
  parseTextures(e) {
    const t = new Map();
    if ("Texture" in Pe.Objects) {
      const n = Pe.Objects.Texture;
      for (const i in n) {
        const r = this.parseTexture(n[i], e);
        t.set(parseInt(i), r);
      }
    }
    return t;
  }
  parseTexture(e, t) {
    const n = this.loadTexture(e, t);
    (n.ID = e.id), (n.name = e.attrName);
    const i = e.WrapModeU,
      r = e.WrapModeV,
      a = i !== void 0 ? i.value : 0,
      s = r !== void 0 ? r.value : 0;
    if (
      ((n.wrapS = a === 0 ? ns : Ot),
      (n.wrapT = s === 0 ? ns : Ot),
      "Scaling" in e)
    ) {
      const l = e.Scaling.value;
      (n.repeat.x = l[0]), (n.repeat.y = l[1]);
    }
    if ("Translation" in e) {
      const l = e.Translation.value;
      (n.offset.x = l[0]), (n.offset.y = l[1]);
    }
    return n;
  }
  loadTexture(e, t) {
    let n;
    const i = this.textureLoader.path,
      r = nt.get(e.id).children;
    r !== void 0 &&
      r.length > 0 &&
      t[r[0].ID] !== void 0 &&
      ((n = t[r[0].ID]),
      (n.indexOf("blob:") === 0 || n.indexOf("data:") === 0) &&
        this.textureLoader.setPath(void 0));
    let a;
    const s = e.FileName.slice(-3).toLowerCase();
    if (s === "tga") {
      const l = this.manager.getHandler(".tga");
      l === null
        ? (console.warn(
            "FBXLoader: TGA loader not found, creating placeholder texture for",
            e.RelativeFilename
          ),
          (a = new Mt()))
        : (l.setPath(this.textureLoader.path), (a = l.load(n)));
    } else
      s === "psd"
        ? (console.warn(
            "FBXLoader: PSD textures are not supported, creating placeholder texture for",
            e.RelativeFilename
          ),
          (a = new Mt()))
        : (a = this.textureLoader.load(n));
    return this.textureLoader.setPath(i), a;
  }
  parseMaterials(e) {
    const t = new Map();
    if ("Material" in Pe.Objects) {
      const n = Pe.Objects.Material;
      for (const i in n) {
        const r = this.parseMaterial(n[i], e);
        r !== null && t.set(parseInt(i), r);
      }
    }
    return t;
  }
  parseMaterial(e, t) {
    const n = e.id,
      i = e.attrName;
    let r = e.ShadingModel;
    if ((typeof r == "object" && (r = r.value), !nt.has(n))) return null;
    const a = this.parseParameters(e, t, n);
    let s;
    switch (r.toLowerCase()) {
      case "phong":
        s = new $r();
        break;
      case "lambert":
        s = new W0();
        break;
      default:
        console.warn(
          'THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',
          r
        ),
          (s = new $r());
        break;
    }
    return s.setValues(a), (s.name = i), s;
  }
  parseParameters(e, t, n) {
    const i = {};
    e.BumpFactor && (i.bumpScale = e.BumpFactor.value),
      e.Diffuse
        ? (i.color = new Me().fromArray(e.Diffuse.value))
        : e.DiffuseColor &&
          (e.DiffuseColor.type === "Color" ||
            e.DiffuseColor.type === "ColorRGB") &&
          (i.color = new Me().fromArray(e.DiffuseColor.value)),
      e.DisplacementFactor &&
        (i.displacementScale = e.DisplacementFactor.value),
      e.Emissive
        ? (i.emissive = new Me().fromArray(e.Emissive.value))
        : e.EmissiveColor &&
          (e.EmissiveColor.type === "Color" ||
            e.EmissiveColor.type === "ColorRGB") &&
          (i.emissive = new Me().fromArray(e.EmissiveColor.value)),
      e.EmissiveFactor &&
        (i.emissiveIntensity = parseFloat(e.EmissiveFactor.value)),
      e.Opacity && (i.opacity = parseFloat(e.Opacity.value)),
      i.opacity < 1 && (i.transparent = !0),
      e.ReflectionFactor && (i.reflectivity = e.ReflectionFactor.value),
      e.Shininess && (i.shininess = e.Shininess.value),
      e.Specular
        ? (i.specular = new Me().fromArray(e.Specular.value))
        : e.SpecularColor &&
          e.SpecularColor.type === "Color" &&
          (i.specular = new Me().fromArray(e.SpecularColor.value));
    const r = this;
    return (
      nt.get(n).children.forEach(function (a) {
        const s = a.relationship;
        switch (s) {
          case "Bump":
            i.bumpMap = r.getTexture(t, a.ID);
            break;
          case "Maya|TEX_ao_map":
            i.aoMap = r.getTexture(t, a.ID);
            break;
          case "DiffuseColor":
          case "Maya|TEX_color_map":
            (i.map = r.getTexture(t, a.ID)),
              i.map !== void 0 && (i.map.encoding = Be);
            break;
          case "DisplacementColor":
            i.displacementMap = r.getTexture(t, a.ID);
            break;
          case "EmissiveColor":
            (i.emissiveMap = r.getTexture(t, a.ID)),
              i.emissiveMap !== void 0 && (i.emissiveMap.encoding = Be);
            break;
          case "NormalMap":
          case "Maya|TEX_normal_map":
            i.normalMap = r.getTexture(t, a.ID);
            break;
          case "ReflectionColor":
            (i.envMap = r.getTexture(t, a.ID)),
              i.envMap !== void 0 &&
                ((i.envMap.mapping = Zs), (i.envMap.encoding = Be));
            break;
          case "SpecularColor":
            (i.specularMap = r.getTexture(t, a.ID)),
              i.specularMap !== void 0 && (i.specularMap.encoding = Be);
            break;
          case "TransparentColor":
          case "TransparencyFactor":
            (i.alphaMap = r.getTexture(t, a.ID)), (i.transparent = !0);
            break;
          case "AmbientColor":
          case "ShininessExponent":
          case "SpecularFactor":
          case "VectorDisplacementColor":
          default:
            console.warn(
              "THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",
              s
            );
            break;
        }
      }),
      i
    );
  }
  getTexture(e, t) {
    return (
      "LayeredTexture" in Pe.Objects &&
        t in Pe.Objects.LayeredTexture &&
        (console.warn(
          "THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."
        ),
        (t = nt.get(t).children[0].ID)),
      e.get(t)
    );
  }
  parseDeformers() {
    const e = {},
      t = {};
    if ("Deformer" in Pe.Objects) {
      const n = Pe.Objects.Deformer;
      for (const i in n) {
        const r = n[i],
          a = nt.get(parseInt(i));
        if (r.attrType === "Skin") {
          const s = this.parseSkeleton(a, n);
          (s.ID = i),
            a.parents.length > 1 &&
              console.warn(
                "THREE.FBXLoader: skeleton attached to more than one geometry is not supported."
              ),
            (s.geometryID = a.parents[0].ID),
            (e[i] = s);
        } else if (r.attrType === "BlendShape") {
          const s = { id: i };
          (s.rawTargets = this.parseMorphTargets(a, n)),
            (s.id = i),
            a.parents.length > 1 &&
              console.warn(
                "THREE.FBXLoader: morph target attached to more than one geometry is not supported."
              ),
            (t[i] = s);
        }
      }
    }
    return { skeletons: e, morphTargets: t };
  }
  parseSkeleton(e, t) {
    const n = [];
    return (
      e.children.forEach(function (i) {
        const r = t[i.ID];
        if (r.attrType !== "Cluster") return;
        const a = {
          ID: i.ID,
          indices: [],
          weights: [],
          transformLink: new ve().fromArray(r.TransformLink.a),
        };
        "Indexes" in r &&
          ((a.indices = r.Indexes.a), (a.weights = r.Weights.a)),
          n.push(a);
      }),
      { rawBones: n, bones: [] }
    );
  }
  parseMorphTargets(e, t) {
    const n = [];
    for (let i = 0; i < e.children.length; i++) {
      const r = e.children[i],
        a = t[r.ID],
        s = {
          name: a.attrName,
          initialWeight: a.DeformPercent,
          id: a.id,
          fullWeights: a.FullWeights.a,
        };
      if (a.attrType !== "BlendShapeChannel") return;
      (s.geoID = nt.get(parseInt(r.ID)).children.filter(function (l) {
        return l.relationship === void 0;
      })[0].ID),
        n.push(s);
    }
    return n;
  }
  parseScene(e, t, n) {
    zt = new lr();
    const i = this.parseModels(e.skeletons, t, n),
      r = Pe.Objects.Model,
      a = this;
    i.forEach(function (l) {
      const c = r[l.ID];
      a.setLookAtProperties(l, c),
        nt.get(l.ID).parents.forEach(function (u) {
          const f = i.get(u.ID);
          f !== void 0 && f.add(l);
        }),
        l.parent === null && zt.add(l);
    }),
      this.bindSkeleton(e.skeletons, t, i),
      this.createAmbientLight(),
      zt.traverse(function (l) {
        if (l.userData.transformData) {
          l.parent &&
            ((l.userData.transformData.parentMatrix = l.parent.matrix),
            (l.userData.transformData.parentMatrixWorld =
              l.parent.matrixWorld));
          const c = uu(l.userData.transformData);
          l.applyMatrix4(c), l.updateWorldMatrix();
        }
      });
    const s = new Xx().parse();
    zt.children.length === 1 &&
      zt.children[0].isGroup &&
      ((zt.children[0].animations = s), (zt = zt.children[0])),
      (zt.animations = s);
  }
  parseModels(e, t, n) {
    const i = new Map(),
      r = Pe.Objects.Model;
    for (const a in r) {
      const s = parseInt(a),
        l = r[a],
        c = nt.get(s);
      let h = this.buildSkeleton(c, e, s, l.attrName);
      if (!h) {
        switch (l.attrType) {
          case "Camera":
            h = this.createCamera(c);
            break;
          case "Light":
            h = this.createLight(c);
            break;
          case "Mesh":
            h = this.createMesh(c, t, n);
            break;
          case "NurbsCurve":
            h = this.createCurve(c, t);
            break;
          case "LimbNode":
          case "Root":
            h = new To();
            break;
          case "Null":
          default:
            h = new lr();
            break;
        }
        (h.name = l.attrName ? ke.sanitizeNodeName(l.attrName) : ""),
          (h.ID = s);
      }
      this.getTransformData(h, l), i.set(s, h);
    }
    return i;
  }
  buildSkeleton(e, t, n, i) {
    let r = null;
    return (
      e.parents.forEach(function (a) {
        for (const s in t) {
          const l = t[s];
          l.rawBones.forEach(function (c, h) {
            if (c.ID === a.ID) {
              const u = r;
              (r = new To()),
                r.matrixWorld.copy(c.transformLink),
                (r.name = i ? ke.sanitizeNodeName(i) : ""),
                (r.ID = n),
                (l.bones[h] = r),
                u !== null && r.add(u);
            }
          });
        }
      }),
      r
    );
  }
  createCamera(e) {
    let t, n;
    if (
      (e.children.forEach(function (i) {
        const r = Pe.Objects.NodeAttribute[i.ID];
        r !== void 0 && (n = r);
      }),
      n === void 0)
    )
      t = new je();
    else {
      let i = 0;
      n.CameraProjectionType !== void 0 &&
        n.CameraProjectionType.value === 1 &&
        (i = 1);
      let r = 1;
      n.NearPlane !== void 0 && (r = n.NearPlane.value / 1e3);
      let a = 1e3;
      n.FarPlane !== void 0 && (a = n.FarPlane.value / 1e3);
      let s = window.innerWidth,
        l = window.innerHeight;
      n.AspectWidth !== void 0 &&
        n.AspectHeight !== void 0 &&
        ((s = n.AspectWidth.value), (l = n.AspectHeight.value));
      const c = s / l;
      let h = 45;
      n.FieldOfView !== void 0 && (h = n.FieldOfView.value);
      const u = n.FocalLength ? n.FocalLength.value : null;
      switch (i) {
        case 0:
          (t = new Ft(h, c, r, a)), u !== null && t.setFocalLength(u);
          break;
        case 1:
          t = new Qo(-s / 2, s / 2, l / 2, -l / 2, r, a);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown camera type " + i + "."),
            (t = new je());
          break;
      }
    }
    return t;
  }
  createLight(e) {
    let t, n;
    if (
      (e.children.forEach(function (i) {
        const r = Pe.Objects.NodeAttribute[i.ID];
        r !== void 0 && (n = r);
      }),
      n === void 0)
    )
      t = new je();
    else {
      let i;
      n.LightType === void 0 ? (i = 0) : (i = n.LightType.value);
      let r = 16777215;
      n.Color !== void 0 && (r = new Me().fromArray(n.Color.value));
      let a = n.Intensity === void 0 ? 1 : n.Intensity.value / 100;
      n.CastLightOnObject !== void 0 &&
        n.CastLightOnObject.value === 0 &&
        (a = 0);
      let s = 0;
      n.FarAttenuationEnd !== void 0 &&
        (n.EnableFarAttenuation !== void 0 && n.EnableFarAttenuation.value === 0
          ? (s = 0)
          : (s = n.FarAttenuationEnd.value));
      const l = 1;
      switch (i) {
        case 0:
          t = new eh(r, a, s, l);
          break;
        case 1:
          t = new tu(r, a);
          break;
        case 2:
          let c = Math.PI / 3;
          n.InnerAngle !== void 0 && (c = Tn.degToRad(n.InnerAngle.value));
          let h = 0;
          n.OuterAngle !== void 0 &&
            ((h = Tn.degToRad(n.OuterAngle.value)), (h = Math.max(h, 1))),
            (t = new nx(r, a, s, c, h, l));
          break;
        default:
          console.warn(
            "THREE.FBXLoader: Unknown light type " +
              n.LightType.value +
              ", defaulting to a PointLight."
          ),
            (t = new eh(r, a));
          break;
      }
      n.CastShadows !== void 0 &&
        n.CastShadows.value === 1 &&
        (t.castShadow = !0);
    }
    return t;
  }
  createMesh(e, t, n) {
    let i,
      r = null,
      a = null;
    const s = [];
    return (
      e.children.forEach(function (l) {
        t.has(l.ID) && (r = t.get(l.ID)), n.has(l.ID) && s.push(n.get(l.ID));
      }),
      s.length > 1
        ? (a = s)
        : s.length > 0
        ? (a = s[0])
        : ((a = new $r({ color: 13421772 })), s.push(a)),
      "color" in r.attributes &&
        s.forEach(function (l) {
          l.vertexColors = !0;
        }),
      r.FBX_Deformer
        ? ((i = new U0(r, a)), i.normalizeSkinWeights())
        : (i = new hn(r, a)),
      i
    );
  }
  createCurve(e, t) {
    const n = e.children.reduce(function (r, a) {
        return t.has(a.ID) && (r = t.get(a.ID)), r;
      }, null),
      i = new pa({ color: 3342591, linewidth: 1 });
    return new Qs(n, i);
  }
  getTransformData(e, t) {
    const n = {};
    "InheritType" in t && (n.inheritType = parseInt(t.InheritType.value)),
      "RotationOrder" in t
        ? (n.eulerOrder = fu(t.RotationOrder.value))
        : (n.eulerOrder = "ZYX"),
      "Lcl_Translation" in t && (n.translation = t.Lcl_Translation.value),
      "PreRotation" in t && (n.preRotation = t.PreRotation.value),
      "Lcl_Rotation" in t && (n.rotation = t.Lcl_Rotation.value),
      "PostRotation" in t && (n.postRotation = t.PostRotation.value),
      "Lcl_Scaling" in t && (n.scale = t.Lcl_Scaling.value),
      "ScalingOffset" in t && (n.scalingOffset = t.ScalingOffset.value),
      "ScalingPivot" in t && (n.scalingPivot = t.ScalingPivot.value),
      "RotationOffset" in t && (n.rotationOffset = t.RotationOffset.value),
      "RotationPivot" in t && (n.rotationPivot = t.RotationPivot.value),
      (e.userData.transformData = n);
  }
  setLookAtProperties(e, t) {
    "LookAtProperty" in t &&
      nt.get(e.ID).children.forEach(function (i) {
        if (i.relationship === "LookAtProperty") {
          const r = Pe.Objects.Model[i.ID];
          if ("Lcl_Translation" in r) {
            const a = r.Lcl_Translation.value;
            e.target !== void 0
              ? (e.target.position.fromArray(a), zt.add(e.target))
              : e.lookAt(new R().fromArray(a));
          }
        }
      });
  }
  bindSkeleton(e, t, n) {
    const i = this.parsePoseNodes();
    for (const r in e) {
      const a = e[r];
      nt.get(parseInt(a.ID)).parents.forEach(function (l) {
        if (t.has(l.ID)) {
          const c = l.ID;
          nt.get(c).parents.forEach(function (u) {
            n.has(u.ID) && n.get(u.ID).bind(new nl(a.bones), i[u.ID]);
          });
        }
      });
    }
  }
  parsePoseNodes() {
    const e = {};
    if ("Pose" in Pe.Objects) {
      const t = Pe.Objects.Pose;
      for (const n in t)
        if (t[n].attrType === "BindPose" && t[n].NbPoseNodes > 0) {
          const i = t[n].PoseNode;
          Array.isArray(i)
            ? i.forEach(function (r) {
                e[r.Node] = new ve().fromArray(r.Matrix.a);
              })
            : (e[i.Node] = new ve().fromArray(i.Matrix.a));
        }
    }
    return e;
  }
  createAmbientLight() {
    if ("GlobalSettings" in Pe && "AmbientColor" in Pe.GlobalSettings) {
      const e = Pe.GlobalSettings.AmbientColor.value,
        t = e[0],
        n = e[1],
        i = e[2];
      if (t !== 0 || n !== 0 || i !== 0) {
        const r = new Me(t, n, i);
        zt.add(new nu(r, 1));
      }
    }
  }
}
class Hx {
  constructor() {
    this.negativeMaterialIndices = !1;
  }
  parse(e) {
    const t = new Map();
    if ("Geometry" in Pe.Objects) {
      const n = Pe.Objects.Geometry;
      for (const i in n) {
        const r = nt.get(parseInt(i)),
          a = this.parseGeometry(r, n[i], e);
        t.set(parseInt(i), a);
      }
    }
    return (
      this.negativeMaterialIndices === !0 &&
        console.warn(
          "THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."
        ),
      t
    );
  }
  parseGeometry(e, t, n) {
    switch (t.attrType) {
      case "Mesh":
        return this.parseMeshGeometry(e, t, n);
      case "NurbsCurve":
        return this.parseNurbsGeometry(t);
    }
  }
  parseMeshGeometry(e, t, n) {
    const i = n.skeletons,
      r = [],
      a = e.parents.map(function (u) {
        return Pe.Objects.Model[u.ID];
      });
    if (a.length === 0) return;
    const s = e.children.reduce(function (u, f) {
      return i[f.ID] !== void 0 && (u = i[f.ID]), u;
    }, null);
    e.children.forEach(function (u) {
      n.morphTargets[u.ID] !== void 0 && r.push(n.morphTargets[u.ID]);
    });
    const l = a[0],
      c = {};
    "RotationOrder" in l && (c.eulerOrder = fu(l.RotationOrder.value)),
      "InheritType" in l && (c.inheritType = parseInt(l.InheritType.value)),
      "GeometricTranslation" in l &&
        (c.translation = l.GeometricTranslation.value),
      "GeometricRotation" in l && (c.rotation = l.GeometricRotation.value),
      "GeometricScaling" in l && (c.scale = l.GeometricScaling.value);
    const h = uu(c);
    return this.genGeometry(t, s, r, h);
  }
  genGeometry(e, t, n, i) {
    const r = new kt();
    e.attrName && (r.name = e.attrName);
    const a = this.parseGeoNode(e, t),
      s = this.genBuffers(a),
      l = new Je(s.vertex, 3);
    if (
      (l.applyMatrix4(i),
      r.setAttribute("position", l),
      s.colors.length > 0 && r.setAttribute("color", new Je(s.colors, 3)),
      t &&
        (r.setAttribute("skinIndex", new jo(s.weightsIndices, 4)),
        r.setAttribute("skinWeight", new Je(s.vertexWeights, 4)),
        (r.FBX_Deformer = t)),
      s.normal.length > 0)
    ) {
      const c = new Tt().getNormalMatrix(i),
        h = new Je(s.normal, 3);
      h.applyNormalMatrix(c), r.setAttribute("normal", h);
    }
    if (
      (s.uvs.forEach(function (c, h) {
        let u = "uv" + (h + 1).toString();
        h === 0 && (u = "uv"), r.setAttribute(u, new Je(s.uvs[h], 2));
      }),
      a.material && a.material.mappingType !== "AllSame")
    ) {
      let c = s.materialIndex[0],
        h = 0;
      if (
        (s.materialIndex.forEach(function (u, f) {
          u !== c && (r.addGroup(h, f - h, c), (c = u), (h = f));
        }),
        r.groups.length > 0)
      ) {
        const u = r.groups[r.groups.length - 1],
          f = u.start + u.count;
        f !== s.materialIndex.length &&
          r.addGroup(f, s.materialIndex.length - f, c);
      }
      r.groups.length === 0 &&
        r.addGroup(0, s.materialIndex.length, s.materialIndex[0]);
    }
    return this.addMorphTargets(r, e, n, i), r;
  }
  parseGeoNode(e, t) {
    const n = {};
    if (
      ((n.vertexPositions = e.Vertices !== void 0 ? e.Vertices.a : []),
      (n.vertexIndices =
        e.PolygonVertexIndex !== void 0 ? e.PolygonVertexIndex.a : []),
      e.LayerElementColor &&
        (n.color = this.parseVertexColors(e.LayerElementColor[0])),
      e.LayerElementMaterial &&
        (n.material = this.parseMaterialIndices(e.LayerElementMaterial[0])),
      e.LayerElementNormal &&
        (n.normal = this.parseNormals(e.LayerElementNormal[0])),
      e.LayerElementUV)
    ) {
      n.uv = [];
      let i = 0;
      for (; e.LayerElementUV[i]; )
        e.LayerElementUV[i].UV && n.uv.push(this.parseUVs(e.LayerElementUV[i])),
          i++;
    }
    return (
      (n.weightTable = {}),
      t !== null &&
        ((n.skeleton = t),
        t.rawBones.forEach(function (i, r) {
          i.indices.forEach(function (a, s) {
            n.weightTable[a] === void 0 && (n.weightTable[a] = []),
              n.weightTable[a].push({ id: r, weight: i.weights[s] });
          });
        })),
      n
    );
  }
  genBuffers(e) {
    const t = {
      vertex: [],
      normal: [],
      colors: [],
      uvs: [],
      materialIndex: [],
      vertexWeights: [],
      weightsIndices: [],
    };
    let n = 0,
      i = 0,
      r = !1,
      a = [],
      s = [],
      l = [],
      c = [],
      h = [],
      u = [];
    const f = this;
    return (
      e.vertexIndices.forEach(function (p, g) {
        let d,
          m = !1;
        p < 0 && ((p = p ^ -1), (m = !0));
        let _ = [],
          b = [];
        if ((a.push(p * 3, p * 3 + 1, p * 3 + 2), e.color)) {
          const x = Ws(g, n, p, e.color);
          l.push(x[0], x[1], x[2]);
        }
        if (e.skeleton) {
          if (
            (e.weightTable[p] !== void 0 &&
              e.weightTable[p].forEach(function (x) {
                b.push(x.weight), _.push(x.id);
              }),
            b.length > 4)
          ) {
            r ||
              (console.warn(
                "THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."
              ),
              (r = !0));
            const x = [0, 0, 0, 0],
              y = [0, 0, 0, 0];
            b.forEach(function (M, E) {
              let C = M,
                v = _[E];
              y.forEach(function (S, L, V) {
                if (C > S) {
                  (V[L] = C), (C = S);
                  const G = x[L];
                  (x[L] = v), (v = G);
                }
              });
            }),
              (_ = x),
              (b = y);
          }
          for (; b.length < 4; ) b.push(0), _.push(0);
          for (let x = 0; x < 4; ++x) h.push(b[x]), u.push(_[x]);
        }
        if (e.normal) {
          const x = Ws(g, n, p, e.normal);
          s.push(x[0], x[1], x[2]);
        }
        e.material &&
          e.material.mappingType !== "AllSame" &&
          ((d = Ws(g, n, p, e.material)[0]),
          d < 0 && ((f.negativeMaterialIndices = !0), (d = 0))),
          e.uv &&
            e.uv.forEach(function (x, y) {
              const M = Ws(g, n, p, x);
              c[y] === void 0 && (c[y] = []), c[y].push(M[0]), c[y].push(M[1]);
            }),
          i++,
          m &&
            (i > 4 &&
              console.warn(
                "THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."
              ),
            f.genFace(t, e, a, d, s, l, c, h, u, i),
            n++,
            (i = 0),
            (a = []),
            (s = []),
            (l = []),
            (c = []),
            (h = []),
            (u = []));
      }),
      t
    );
  }
  genFace(e, t, n, i, r, a, s, l, c, h) {
    for (let u = 2; u < h; u++)
      e.vertex.push(t.vertexPositions[n[0]]),
        e.vertex.push(t.vertexPositions[n[1]]),
        e.vertex.push(t.vertexPositions[n[2]]),
        e.vertex.push(t.vertexPositions[n[(u - 1) * 3]]),
        e.vertex.push(t.vertexPositions[n[(u - 1) * 3 + 1]]),
        e.vertex.push(t.vertexPositions[n[(u - 1) * 3 + 2]]),
        e.vertex.push(t.vertexPositions[n[u * 3]]),
        e.vertex.push(t.vertexPositions[n[u * 3 + 1]]),
        e.vertex.push(t.vertexPositions[n[u * 3 + 2]]),
        t.skeleton &&
          (e.vertexWeights.push(l[0]),
          e.vertexWeights.push(l[1]),
          e.vertexWeights.push(l[2]),
          e.vertexWeights.push(l[3]),
          e.vertexWeights.push(l[(u - 1) * 4]),
          e.vertexWeights.push(l[(u - 1) * 4 + 1]),
          e.vertexWeights.push(l[(u - 1) * 4 + 2]),
          e.vertexWeights.push(l[(u - 1) * 4 + 3]),
          e.vertexWeights.push(l[u * 4]),
          e.vertexWeights.push(l[u * 4 + 1]),
          e.vertexWeights.push(l[u * 4 + 2]),
          e.vertexWeights.push(l[u * 4 + 3]),
          e.weightsIndices.push(c[0]),
          e.weightsIndices.push(c[1]),
          e.weightsIndices.push(c[2]),
          e.weightsIndices.push(c[3]),
          e.weightsIndices.push(c[(u - 1) * 4]),
          e.weightsIndices.push(c[(u - 1) * 4 + 1]),
          e.weightsIndices.push(c[(u - 1) * 4 + 2]),
          e.weightsIndices.push(c[(u - 1) * 4 + 3]),
          e.weightsIndices.push(c[u * 4]),
          e.weightsIndices.push(c[u * 4 + 1]),
          e.weightsIndices.push(c[u * 4 + 2]),
          e.weightsIndices.push(c[u * 4 + 3])),
        t.color &&
          (e.colors.push(a[0]),
          e.colors.push(a[1]),
          e.colors.push(a[2]),
          e.colors.push(a[(u - 1) * 3]),
          e.colors.push(a[(u - 1) * 3 + 1]),
          e.colors.push(a[(u - 1) * 3 + 2]),
          e.colors.push(a[u * 3]),
          e.colors.push(a[u * 3 + 1]),
          e.colors.push(a[u * 3 + 2])),
        t.material &&
          t.material.mappingType !== "AllSame" &&
          (e.materialIndex.push(i),
          e.materialIndex.push(i),
          e.materialIndex.push(i)),
        t.normal &&
          (e.normal.push(r[0]),
          e.normal.push(r[1]),
          e.normal.push(r[2]),
          e.normal.push(r[(u - 1) * 3]),
          e.normal.push(r[(u - 1) * 3 + 1]),
          e.normal.push(r[(u - 1) * 3 + 2]),
          e.normal.push(r[u * 3]),
          e.normal.push(r[u * 3 + 1]),
          e.normal.push(r[u * 3 + 2])),
        t.uv &&
          t.uv.forEach(function (f, p) {
            e.uvs[p] === void 0 && (e.uvs[p] = []),
              e.uvs[p].push(s[p][0]),
              e.uvs[p].push(s[p][1]),
              e.uvs[p].push(s[p][(u - 1) * 2]),
              e.uvs[p].push(s[p][(u - 1) * 2 + 1]),
              e.uvs[p].push(s[p][u * 2]),
              e.uvs[p].push(s[p][u * 2 + 1]);
          });
  }
  addMorphTargets(e, t, n, i) {
    if (n.length === 0) return;
    (e.morphTargetsRelative = !0), (e.morphAttributes.position = []);
    const r = this;
    n.forEach(function (a) {
      a.rawTargets.forEach(function (s) {
        const l = Pe.Objects.Geometry[s.geoID];
        l !== void 0 && r.genMorphGeometry(e, t, l, i, s.name);
      });
    });
  }
  genMorphGeometry(e, t, n, i, r) {
    const a = t.PolygonVertexIndex !== void 0 ? t.PolygonVertexIndex.a : [],
      s = n.Vertices !== void 0 ? n.Vertices.a : [],
      l = n.Indexes !== void 0 ? n.Indexes.a : [],
      c = e.attributes.position.count * 3,
      h = new Float32Array(c);
    for (let g = 0; g < l.length; g++) {
      const d = l[g] * 3;
      (h[d] = s[g * 3]), (h[d + 1] = s[g * 3 + 1]), (h[d + 2] = s[g * 3 + 2]);
    }
    const u = { vertexIndices: a, vertexPositions: h },
      f = this.genBuffers(u),
      p = new Je(f.vertex, 3);
    (p.name = r || n.attrName),
      p.applyMatrix4(i),
      e.morphAttributes.position.push(p);
  }
  parseNormals(e) {
    const t = e.MappingInformationType,
      n = e.ReferenceInformationType,
      i = e.Normals.a;
    let r = [];
    return (
      n === "IndexToDirect" &&
        ("NormalIndex" in e
          ? (r = e.NormalIndex.a)
          : "NormalsIndex" in e && (r = e.NormalsIndex.a)),
      { dataSize: 3, buffer: i, indices: r, mappingType: t, referenceType: n }
    );
  }
  parseUVs(e) {
    const t = e.MappingInformationType,
      n = e.ReferenceInformationType,
      i = e.UV.a;
    let r = [];
    return (
      n === "IndexToDirect" && (r = e.UVIndex.a),
      { dataSize: 2, buffer: i, indices: r, mappingType: t, referenceType: n }
    );
  }
  parseVertexColors(e) {
    const t = e.MappingInformationType,
      n = e.ReferenceInformationType,
      i = e.Colors.a;
    let r = [];
    return (
      n === "IndexToDirect" && (r = e.ColorIndex.a),
      { dataSize: 4, buffer: i, indices: r, mappingType: t, referenceType: n }
    );
  }
  parseMaterialIndices(e) {
    const t = e.MappingInformationType,
      n = e.ReferenceInformationType;
    if (t === "NoMappingInformation")
      return {
        dataSize: 1,
        buffer: [0],
        indices: [0],
        mappingType: "AllSame",
        referenceType: n,
      };
    const i = e.Materials.a,
      r = [];
    for (let a = 0; a < i.length; ++a) r.push(a);
    return {
      dataSize: 1,
      buffer: i,
      indices: r,
      mappingType: t,
      referenceType: n,
    };
  }
  parseNurbsGeometry(e) {
    const t = parseInt(e.Order);
    if (isNaN(t))
      return (
        console.error(
          "THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",
          e.Order,
          e.id
        ),
        new kt()
      );
    const n = t - 1,
      i = e.KnotVector.a,
      r = [],
      a = e.Points.a;
    for (let u = 0, f = a.length; u < f; u += 4)
      r.push(new ze().fromArray(a, u));
    let s, l;
    if (e.Form === "Closed") r.push(r[0]);
    else if (e.Form === "Periodic") {
      (s = n), (l = i.length - 1 - s);
      for (let u = 0; u < n; ++u) r.push(r[u]);
    }
    const h = new Vx(n, i, r, s, l).getPoints(r.length * 12);
    return new kt().setFromPoints(h);
  }
}
class Xx {
  parse() {
    const e = [],
      t = this.parseClips();
    if (t !== void 0)
      for (const n in t) {
        const i = t[n],
          r = this.addClip(i);
        e.push(r);
      }
    return e;
  }
  parseClips() {
    if (Pe.Objects.AnimationCurve === void 0) return;
    const e = this.parseAnimationCurveNodes();
    this.parseAnimationCurves(e);
    const t = this.parseAnimationLayers(e);
    return this.parseAnimStacks(t);
  }
  parseAnimationCurveNodes() {
    const e = Pe.Objects.AnimationCurveNode,
      t = new Map();
    for (const n in e) {
      const i = e[n];
      if (i.attrName.match(/S|R|T|DeformPercent/) !== null) {
        const r = { id: i.id, attr: i.attrName, curves: {} };
        t.set(r.id, r);
      }
    }
    return t;
  }
  parseAnimationCurves(e) {
    const t = Pe.Objects.AnimationCurve;
    for (const n in t) {
      const i = {
          id: t[n].id,
          times: t[n].KeyTime.a.map(Kx),
          values: t[n].KeyValueFloat.a,
        },
        r = nt.get(i.id);
      if (r !== void 0) {
        const a = r.parents[0].ID,
          s = r.parents[0].relationship;
        s.match(/X/)
          ? (e.get(a).curves.x = i)
          : s.match(/Y/)
          ? (e.get(a).curves.y = i)
          : s.match(/Z/)
          ? (e.get(a).curves.z = i)
          : s.match(/d|DeformPercent/) &&
            e.has(a) &&
            (e.get(a).curves.morph = i);
      }
    }
  }
  parseAnimationLayers(e) {
    const t = Pe.Objects.AnimationLayer,
      n = new Map();
    for (const i in t) {
      const r = [],
        a = nt.get(parseInt(i));
      a !== void 0 &&
        (a.children.forEach(function (l, c) {
          if (e.has(l.ID)) {
            const h = e.get(l.ID);
            if (
              h.curves.x !== void 0 ||
              h.curves.y !== void 0 ||
              h.curves.z !== void 0
            ) {
              if (r[c] === void 0) {
                const u = nt.get(l.ID).parents.filter(function (f) {
                  return f.relationship !== void 0;
                })[0].ID;
                if (u !== void 0) {
                  const f = Pe.Objects.Model[u.toString()];
                  if (f === void 0) {
                    console.warn(
                      "THREE.FBXLoader: Encountered a unused curve.",
                      l
                    );
                    return;
                  }
                  const p = {
                    modelName: f.attrName
                      ? ke.sanitizeNodeName(f.attrName)
                      : "",
                    ID: f.id,
                    initialPosition: [0, 0, 0],
                    initialRotation: [0, 0, 0],
                    initialScale: [1, 1, 1],
                  };
                  zt.traverse(function (g) {
                    g.ID === f.id &&
                      ((p.transform = g.matrix),
                      g.userData.transformData &&
                        (p.eulerOrder = g.userData.transformData.eulerOrder));
                  }),
                    p.transform || (p.transform = new ve()),
                    "PreRotation" in f && (p.preRotation = f.PreRotation.value),
                    "PostRotation" in f &&
                      (p.postRotation = f.PostRotation.value),
                    (r[c] = p);
                }
              }
              r[c] && (r[c][h.attr] = h);
            } else if (h.curves.morph !== void 0) {
              if (r[c] === void 0) {
                const u = nt.get(l.ID).parents.filter(function (_) {
                    return _.relationship !== void 0;
                  })[0].ID,
                  f = nt.get(u).parents[0].ID,
                  p = nt.get(f).parents[0].ID,
                  g = nt.get(p).parents[0].ID,
                  d = Pe.Objects.Model[g],
                  m = {
                    modelName: d.attrName
                      ? ke.sanitizeNodeName(d.attrName)
                      : "",
                    morphName: Pe.Objects.Deformer[u].attrName,
                  };
                r[c] = m;
              }
              r[c][h.attr] = h;
            }
          }
        }),
        n.set(parseInt(i), r));
    }
    return n;
  }
  parseAnimStacks(e) {
    const t = Pe.Objects.AnimationStack,
      n = {};
    for (const i in t) {
      const r = nt.get(parseInt(i)).children;
      r.length > 1 &&
        console.warn(
          "THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers."
        );
      const a = e.get(r[0].ID);
      n[i] = { name: t[i].attrName, layer: a };
    }
    return n;
  }
  addClip(e) {
    let t = [];
    const n = this;
    return (
      e.layer.forEach(function (i) {
        t = t.concat(n.generateTracks(i));
      }),
      new Eo(e.name, -1, t)
    );
  }
  generateTracks(e) {
    const t = [];
    let n = new R(),
      i = new Nt(),
      r = new R();
    if (
      (e.transform && e.transform.decompose(n, i, r),
      (n = n.toArray()),
      (i = new cn().setFromQuaternion(i, e.eulerOrder).toArray()),
      (r = r.toArray()),
      e.T !== void 0 && Object.keys(e.T.curves).length > 0)
    ) {
      const a = this.generateVectorTrack(
        e.modelName,
        e.T.curves,
        n,
        "position"
      );
      a !== void 0 && t.push(a);
    }
    if (e.R !== void 0 && Object.keys(e.R.curves).length > 0) {
      const a = this.generateRotationTrack(
        e.modelName,
        e.R.curves,
        i,
        e.preRotation,
        e.postRotation,
        e.eulerOrder
      );
      a !== void 0 && t.push(a);
    }
    if (e.S !== void 0 && Object.keys(e.S.curves).length > 0) {
      const a = this.generateVectorTrack(e.modelName, e.S.curves, r, "scale");
      a !== void 0 && t.push(a);
    }
    if (e.DeformPercent !== void 0) {
      const a = this.generateMorphTrack(e);
      a !== void 0 && t.push(a);
    }
    return t;
  }
  generateVectorTrack(e, t, n, i) {
    const r = this.getTimesForAllAxes(t),
      a = this.getKeyframeTrackValues(r, t, n);
    return new cs(e + "." + i, r, a);
  }
  generateRotationTrack(e, t, n, i, r, a) {
    t.x !== void 0 &&
      (this.interpolateRotations(t.x),
      (t.x.values = t.x.values.map(Tn.degToRad))),
      t.y !== void 0 &&
        (this.interpolateRotations(t.y),
        (t.y.values = t.y.values.map(Tn.degToRad))),
      t.z !== void 0 &&
        (this.interpolateRotations(t.z),
        (t.z.values = t.z.values.map(Tn.degToRad)));
    const s = this.getTimesForAllAxes(t),
      l = this.getKeyframeTrackValues(s, t, n);
    i !== void 0 &&
      ((i = i.map(Tn.degToRad)),
      i.push(a),
      (i = new cn().fromArray(i)),
      (i = new Nt().setFromEuler(i))),
      r !== void 0 &&
        ((r = r.map(Tn.degToRad)),
        r.push(a),
        (r = new cn().fromArray(r)),
        (r = new Nt().setFromEuler(r).invert()));
    const c = new Nt(),
      h = new cn(),
      u = [];
    for (let f = 0; f < l.length; f += 3)
      h.set(l[f], l[f + 1], l[f + 2], a),
        c.setFromEuler(h),
        i !== void 0 && c.premultiply(i),
        r !== void 0 && c.multiply(r),
        c.toArray(u, (f / 3) * 4);
    return new Lr(e + ".quaternion", s, u);
  }
  generateMorphTrack(e) {
    const t = e.DeformPercent.curves.morph,
      n = t.values.map(function (r) {
        return r / 100;
      }),
      i = zt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
    return new ls(
      e.modelName + ".morphTargetInfluences[" + i + "]",
      t.times,
      n
    );
  }
  getTimesForAllAxes(e) {
    let t = [];
    if (
      (e.x !== void 0 && (t = t.concat(e.x.times)),
      e.y !== void 0 && (t = t.concat(e.y.times)),
      e.z !== void 0 && (t = t.concat(e.z.times)),
      (t = t.sort(function (n, i) {
        return n - i;
      })),
      t.length > 1)
    ) {
      let n = 1,
        i = t[0];
      for (let r = 1; r < t.length; r++) {
        const a = t[r];
        a !== i && ((t[n] = a), (i = a), n++);
      }
      t = t.slice(0, n);
    }
    return t;
  }
  getKeyframeTrackValues(e, t, n) {
    const i = n,
      r = [];
    let a = -1,
      s = -1,
      l = -1;
    return (
      e.forEach(function (c) {
        if (
          (t.x && (a = t.x.times.indexOf(c)),
          t.y && (s = t.y.times.indexOf(c)),
          t.z && (l = t.z.times.indexOf(c)),
          a !== -1)
        ) {
          const h = t.x.values[a];
          r.push(h), (i[0] = h);
        } else r.push(i[0]);
        if (s !== -1) {
          const h = t.y.values[s];
          r.push(h), (i[1] = h);
        } else r.push(i[1]);
        if (l !== -1) {
          const h = t.z.values[l];
          r.push(h), (i[2] = h);
        } else r.push(i[2]);
      }),
      r
    );
  }
  interpolateRotations(e) {
    for (let t = 1; t < e.values.length; t++) {
      const n = e.values[t - 1],
        i = e.values[t] - n,
        r = Math.abs(i);
      if (r >= 180) {
        const a = r / 180,
          s = i / a;
        let l = n + s;
        const c = e.times[t - 1],
          u = (e.times[t] - c) / a;
        let f = c + u;
        const p = [],
          g = [];
        for (; f < e.times[t]; ) p.push(f), (f += u), g.push(l), (l += s);
        (e.times = ch(e.times, t, p)), (e.values = ch(e.values, t, g));
      }
    }
  }
}
class qx {
  getPrevNode() {
    return this.nodeStack[this.currentIndent - 2];
  }
  getCurrentNode() {
    return this.nodeStack[this.currentIndent - 1];
  }
  getCurrentProp() {
    return this.currentProp;
  }
  pushStack(e) {
    this.nodeStack.push(e), (this.currentIndent += 1);
  }
  popStack() {
    this.nodeStack.pop(), (this.currentIndent -= 1);
  }
  setCurrentProp(e, t) {
    (this.currentProp = e), (this.currentPropName = t);
  }
  parse(e) {
    (this.currentIndent = 0),
      (this.allNodes = new hu()),
      (this.nodeStack = []),
      (this.currentProp = []),
      (this.currentPropName = "");
    const t = this,
      n = e.split(/[\r\n]+/);
    return (
      n.forEach(function (i, r) {
        const a = i.match(/^[\s\t]*;/),
          s = i.match(/^[\s\t]*$/);
        if (a || s) return;
        const l = i.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", ""),
          c = i.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"),
          h = i.match("^\\t{" + (t.currentIndent - 1) + "}}");
        l
          ? t.parseNodeBegin(i, l)
          : c
          ? t.parseNodeProperty(i, c, n[++r])
          : h
          ? t.popStack()
          : i.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(i);
      }),
      this.allNodes
    );
  }
  parseNodeBegin(e, t) {
    const n = t[1].trim().replace(/^"/, "").replace(/"$/, ""),
      i = t[2].split(",").map(function (l) {
        return l.trim().replace(/^"/, "").replace(/"$/, "");
      }),
      r = { name: n },
      a = this.parseNodeAttr(i),
      s = this.getCurrentNode();
    this.currentIndent === 0
      ? this.allNodes.add(n, r)
      : n in s
      ? (n === "PoseNode"
          ? s.PoseNode.push(r)
          : s[n].id !== void 0 && ((s[n] = {}), (s[n][s[n].id] = s[n])),
        a.id !== "" && (s[n][a.id] = r))
      : typeof a.id == "number"
      ? ((s[n] = {}), (s[n][a.id] = r))
      : n !== "Properties70" && (n === "PoseNode" ? (s[n] = [r]) : (s[n] = r)),
      typeof a.id == "number" && (r.id = a.id),
      a.name !== "" && (r.attrName = a.name),
      a.type !== "" && (r.attrType = a.type),
      this.pushStack(r);
  }
  parseNodeAttr(e) {
    let t = e[0];
    e[0] !== "" && ((t = parseInt(e[0])), isNaN(t) && (t = e[0]));
    let n = "",
      i = "";
    return (
      e.length > 1 && ((n = e[1].replace(/^(\w+)::/, "")), (i = e[2])),
      { id: t, name: n, type: i }
    );
  }
  parseNodeProperty(e, t, n) {
    let i = t[1].replace(/^"/, "").replace(/"$/, "").trim(),
      r = t[2].replace(/^"/, "").replace(/"$/, "").trim();
    i === "Content" &&
      r === "," &&
      (r = n.replace(/"/g, "").replace(/,$/, "").trim());
    const a = this.getCurrentNode();
    if (a.name === "Properties70") {
      this.parseNodeSpecialProperty(e, i, r);
      return;
    }
    if (i === "C") {
      const l = r.split(",").slice(1),
        c = parseInt(l[0]),
        h = parseInt(l[1]);
      let u = r.split(",").slice(3);
      (u = u.map(function (f) {
        return f.trim().replace(/^"/, "");
      })),
        (i = "connections"),
        (r = [c, h]),
        Jx(r, u),
        a[i] === void 0 && (a[i] = []);
    }
    i === "Node" && (a.id = r),
      i in a && Array.isArray(a[i])
        ? a[i].push(r)
        : i !== "a"
        ? (a[i] = r)
        : (a.a = r),
      this.setCurrentProp(a, i),
      i === "a" && r.slice(-1) !== "," && (a.a = lo(r));
  }
  parseNodePropertyContinued(e) {
    const t = this.getCurrentNode();
    (t.a += e), e.slice(-1) !== "," && (t.a = lo(t.a));
  }
  parseNodeSpecialProperty(e, t, n) {
    const i = n.split('",').map(function (h) {
        return h.trim().replace(/^\"/, "").replace(/\s/, "_");
      }),
      r = i[0],
      a = i[1],
      s = i[2],
      l = i[3];
    let c = i[4];
    switch (a) {
      case "int":
      case "enum":
      case "bool":
      case "ULongLong":
      case "double":
      case "Number":
      case "FieldOfView":
        c = parseFloat(c);
        break;
      case "Color":
      case "ColorRGB":
      case "Vector3D":
      case "Lcl_Translation":
      case "Lcl_Rotation":
      case "Lcl_Scaling":
        c = lo(c);
        break;
    }
    (this.getPrevNode()[r] = { type: a, type2: s, flag: l, value: c }),
      this.setCurrentProp(this.getPrevNode(), r);
  }
}
class Yx {
  parse(e) {
    const t = new oh(e);
    t.skip(23);
    const n = t.getUint32();
    if (n < 6400)
      throw new Error(
        "THREE.FBXLoader: FBX version not supported, FileVersion: " + n
      );
    const i = new hu();
    for (; !this.endOfContent(t); ) {
      const r = this.parseNode(t, n);
      r !== null && i.add(r.name, r);
    }
    return i;
  }
  endOfContent(e) {
    return e.size() % 16 === 0
      ? ((e.getOffset() + 160 + 16) & -16) >= e.size()
      : e.getOffset() + 160 + 16 >= e.size();
  }
  parseNode(e, t) {
    const n = {},
      i = t >= 7500 ? e.getUint64() : e.getUint32(),
      r = t >= 7500 ? e.getUint64() : e.getUint32();
    t >= 7500 ? e.getUint64() : e.getUint32();
    const a = e.getUint8(),
      s = e.getString(a);
    if (i === 0) return null;
    const l = [];
    for (let f = 0; f < r; f++) l.push(this.parseProperty(e));
    const c = l.length > 0 ? l[0] : "",
      h = l.length > 1 ? l[1] : "",
      u = l.length > 2 ? l[2] : "";
    for (
      n.singleProperty = r === 1 && e.getOffset() === i;
      i > e.getOffset();

    ) {
      const f = this.parseNode(e, t);
      f !== null && this.parseSubNode(s, n, f);
    }
    return (
      (n.propertyList = l),
      typeof c == "number" && (n.id = c),
      h !== "" && (n.attrName = h),
      u !== "" && (n.attrType = u),
      s !== "" && (n.name = s),
      n
    );
  }
  parseSubNode(e, t, n) {
    if (n.singleProperty === !0) {
      const i = n.propertyList[0];
      Array.isArray(i) ? ((t[n.name] = n), (n.a = i)) : (t[n.name] = i);
    } else if (e === "Connections" && n.name === "C") {
      const i = [];
      n.propertyList.forEach(function (r, a) {
        a !== 0 && i.push(r);
      }),
        t.connections === void 0 && (t.connections = []),
        t.connections.push(i);
    } else if (n.name === "Properties70")
      Object.keys(n).forEach(function (r) {
        t[r] = n[r];
      });
    else if (e === "Properties70" && n.name === "P") {
      let i = n.propertyList[0],
        r = n.propertyList[1];
      const a = n.propertyList[2],
        s = n.propertyList[3];
      let l;
      i.indexOf("Lcl ") === 0 && (i = i.replace("Lcl ", "Lcl_")),
        r.indexOf("Lcl ") === 0 && (r = r.replace("Lcl ", "Lcl_")),
        r === "Color" ||
        r === "ColorRGB" ||
        r === "Vector" ||
        r === "Vector3D" ||
        r.indexOf("Lcl_") === 0
          ? (l = [n.propertyList[4], n.propertyList[5], n.propertyList[6]])
          : (l = n.propertyList[4]),
        (t[i] = { type: r, type2: a, flag: s, value: l });
    } else
      t[n.name] === void 0
        ? typeof n.id == "number"
          ? ((t[n.name] = {}), (t[n.name][n.id] = n))
          : (t[n.name] = n)
        : n.name === "PoseNode"
        ? (Array.isArray(t[n.name]) || (t[n.name] = [t[n.name]]),
          t[n.name].push(n))
        : t[n.name][n.id] === void 0 && (t[n.name][n.id] = n);
  }
  parseProperty(e) {
    const t = e.getString(1);
    let n;
    switch (t) {
      case "C":
        return e.getBoolean();
      case "D":
        return e.getFloat64();
      case "F":
        return e.getFloat32();
      case "I":
        return e.getInt32();
      case "L":
        return e.getInt64();
      case "R":
        return (n = e.getUint32()), e.getArrayBuffer(n);
      case "S":
        return (n = e.getUint32()), e.getString(n);
      case "Y":
        return e.getInt16();
      case "b":
      case "c":
      case "d":
      case "f":
      case "i":
      case "l":
        const i = e.getUint32(),
          r = e.getUint32(),
          a = e.getUint32();
        if (r === 0)
          switch (t) {
            case "b":
            case "c":
              return e.getBooleanArray(i);
            case "d":
              return e.getFloat64Array(i);
            case "f":
              return e.getFloat32Array(i);
            case "i":
              return e.getInt32Array(i);
            case "l":
              return e.getInt64Array(i);
          }
        const s = Dx(new Uint8Array(e.getArrayBuffer(a))),
          l = new oh(s.buffer);
        switch (t) {
          case "b":
          case "c":
            return l.getBooleanArray(i);
          case "d":
            return l.getFloat64Array(i);
          case "f":
            return l.getFloat32Array(i);
          case "i":
            return l.getInt32Array(i);
          case "l":
            return l.getInt64Array(i);
        }
        break;
      default:
        throw new Error("THREE.FBXLoader: Unknown property type " + t);
    }
  }
}
class oh {
  constructor(e, t) {
    (this.dv = new DataView(e)),
      (this.offset = 0),
      (this.littleEndian = t !== void 0 ? t : !0),
      (this._textDecoder = new TextDecoder());
  }
  getOffset() {
    return this.offset;
  }
  size() {
    return this.dv.buffer.byteLength;
  }
  skip(e) {
    this.offset += e;
  }
  getBoolean() {
    return (this.getUint8() & 1) === 1;
  }
  getBooleanArray(e) {
    const t = [];
    for (let n = 0; n < e; n++) t.push(this.getBoolean());
    return t;
  }
  getUint8() {
    const e = this.dv.getUint8(this.offset);
    return (this.offset += 1), e;
  }
  getInt16() {
    const e = this.dv.getInt16(this.offset, this.littleEndian);
    return (this.offset += 2), e;
  }
  getInt32() {
    const e = this.dv.getInt32(this.offset, this.littleEndian);
    return (this.offset += 4), e;
  }
  getInt32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++) t.push(this.getInt32());
    return t;
  }
  getUint32() {
    const e = this.dv.getUint32(this.offset, this.littleEndian);
    return (this.offset += 4), e;
  }
  getInt64() {
    let e, t;
    return (
      this.littleEndian
        ? ((e = this.getUint32()), (t = this.getUint32()))
        : ((t = this.getUint32()), (e = this.getUint32())),
      t & 2147483648
        ? ((t = ~t & 4294967295),
          (e = ~e & 4294967295),
          e === 4294967295 && (t = (t + 1) & 4294967295),
          (e = (e + 1) & 4294967295),
          -(t * 4294967296 + e))
        : t * 4294967296 + e
    );
  }
  getInt64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++) t.push(this.getInt64());
    return t;
  }
  getUint64() {
    let e, t;
    return (
      this.littleEndian
        ? ((e = this.getUint32()), (t = this.getUint32()))
        : ((t = this.getUint32()), (e = this.getUint32())),
      t * 4294967296 + e
    );
  }
  getFloat32() {
    const e = this.dv.getFloat32(this.offset, this.littleEndian);
    return (this.offset += 4), e;
  }
  getFloat32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++) t.push(this.getFloat32());
    return t;
  }
  getFloat64() {
    const e = this.dv.getFloat64(this.offset, this.littleEndian);
    return (this.offset += 8), e;
  }
  getFloat64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++) t.push(this.getFloat64());
    return t;
  }
  getArrayBuffer(e) {
    const t = this.dv.buffer.slice(this.offset, this.offset + e);
    return (this.offset += e), t;
  }
  getString(e) {
    const t = this.offset;
    let n = new Uint8Array(this.dv.buffer, t, e);
    this.skip(e);
    const i = n.indexOf(0);
    return (
      i >= 0 && (n = new Uint8Array(this.dv.buffer, t, i)),
      this._textDecoder.decode(n)
    );
  }
}
class hu {
  add(e, t) {
    this[e] = t;
  }
}
function jx(o) {
  const e = "Kaydara FBX Binary  \0";
  return o.byteLength >= e.length && e === du(o, 0, e.length);
}
function Zx(o) {
  const e = [
    "K",
    "a",
    "y",
    "d",
    "a",
    "r",
    "a",
    "\\",
    "F",
    "B",
    "X",
    "\\",
    "B",
    "i",
    "n",
    "a",
    "r",
    "y",
    "\\",
    "\\",
  ];
  let t = 0;
  function n(i) {
    const r = o[i - 1];
    return (o = o.slice(t + i)), t++, r;
  }
  for (let i = 0; i < e.length; ++i) if (n(1) === e[i]) return !1;
  return !0;
}
function lh(o) {
  const e = /FBXVersion: (\d+)/,
    t = o.match(e);
  if (t) return parseInt(t[1]);
  throw new Error(
    "THREE.FBXLoader: Cannot find the version number for the file given."
  );
}
function Kx(o) {
  return o / 46186158e3;
}
const $x = [];
function Ws(o, e, t, n) {
  let i;
  switch (n.mappingType) {
    case "ByPolygonVertex":
      i = o;
      break;
    case "ByPolygon":
      i = e;
      break;
    case "ByVertice":
      i = t;
      break;
    case "AllSame":
      i = n.indices[0];
      break;
    default:
      console.warn(
        "THREE.FBXLoader: unknown attribute mapping type " + n.mappingType
      );
  }
  n.referenceType === "IndexToDirect" && (i = n.indices[i]);
  const r = i * n.dataSize,
    a = r + n.dataSize;
  return Qx($x, n.buffer, r, a);
}
const oo = new cn(),
  tr = new R();
function uu(o) {
  const e = new ve(),
    t = new ve(),
    n = new ve(),
    i = new ve(),
    r = new ve(),
    a = new ve(),
    s = new ve(),
    l = new ve(),
    c = new ve(),
    h = new ve(),
    u = new ve(),
    f = new ve(),
    p = o.inheritType ? o.inheritType : 0;
  if (
    (o.translation && e.setPosition(tr.fromArray(o.translation)), o.preRotation)
  ) {
    const L = o.preRotation.map(Tn.degToRad);
    L.push(o.eulerOrder || cn.DEFAULT_ORDER),
      t.makeRotationFromEuler(oo.fromArray(L));
  }
  if (o.rotation) {
    const L = o.rotation.map(Tn.degToRad);
    L.push(o.eulerOrder || cn.DEFAULT_ORDER),
      n.makeRotationFromEuler(oo.fromArray(L));
  }
  if (o.postRotation) {
    const L = o.postRotation.map(Tn.degToRad);
    L.push(o.eulerOrder || cn.DEFAULT_ORDER),
      i.makeRotationFromEuler(oo.fromArray(L)),
      i.invert();
  }
  o.scale && r.scale(tr.fromArray(o.scale)),
    o.scalingOffset && s.setPosition(tr.fromArray(o.scalingOffset)),
    o.scalingPivot && a.setPosition(tr.fromArray(o.scalingPivot)),
    o.rotationOffset && l.setPosition(tr.fromArray(o.rotationOffset)),
    o.rotationPivot && c.setPosition(tr.fromArray(o.rotationPivot)),
    o.parentMatrixWorld &&
      (u.copy(o.parentMatrix), h.copy(o.parentMatrixWorld));
  const g = t.clone().multiply(n).multiply(i),
    d = new ve();
  d.extractRotation(h);
  const m = new ve();
  m.copyPosition(h);
  const _ = m.clone().invert().multiply(h),
    b = d.clone().invert().multiply(_),
    x = r,
    y = new ve();
  if (p === 0) y.copy(d).multiply(g).multiply(b).multiply(x);
  else if (p === 1) y.copy(d).multiply(b).multiply(g).multiply(x);
  else {
    const V = new ve().scale(new R().setFromMatrixScale(u)).clone().invert(),
      G = b.clone().multiply(V);
    y.copy(d).multiply(g).multiply(G).multiply(x);
  }
  const M = c.clone().invert(),
    E = a.clone().invert();
  let C = e
    .clone()
    .multiply(l)
    .multiply(c)
    .multiply(t)
    .multiply(n)
    .multiply(i)
    .multiply(M)
    .multiply(s)
    .multiply(a)
    .multiply(r)
    .multiply(E);
  const v = new ve().copyPosition(C),
    S = h.clone().multiply(v);
  return (
    f.copyPosition(S), (C = f.clone().multiply(y)), C.premultiply(h.invert()), C
  );
}
function fu(o) {
  o = o || 0;
  const e = ["ZYX", "YZX", "XZY", "ZXY", "YXZ", "XYZ"];
  return o === 6
    ? (console.warn(
        "THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."
      ),
      e[0])
    : e[o];
}
function lo(o) {
  return o.split(",").map(function (t) {
    return parseFloat(t);
  });
}
function du(o, e, t) {
  return (
    e === void 0 && (e = 0),
    t === void 0 && (t = o.byteLength),
    new TextDecoder().decode(new Uint8Array(o, e, t))
  );
}
function Jx(o, e) {
  for (let t = 0, n = o.length, i = e.length; t < i; t++, n++) o[n] = e[t];
}
function Qx(o, e, t, n) {
  for (let i = t, r = 0; i < n; i++, r++) o[r] = e[i];
  return o;
}
function ch(o, e, t) {
  return o.slice(0, e).concat(t).concat(o.slice(e));
}
class ev {
  constructor(e, t) {
    (this.player = e),
      (this.game = t),
      (this.gameControl = t.GameControl),
      addEventListener("keydown", (n) => this.onKeydown(n)),
      addEventListener("keyup", (n) => this.onKeyup(n));
  }
  onKeydown(e) {
    switch (e.key) {
      case "w":
        (this.gameControl.gamestate === this.gameControl.GAMESTATE.GAMEOVER ||
          this.gameControl.gamestate === this.gameControl.GAMESTATE.PAUSED) &&
          (this.gameControl.MenuSelection =
            this.gameControl.MenuSelection === 0 ? 1 : 0);
        break;
      case "s":
        (this.gameControl.gamestate === this.gameControl.GAMESTATE.GAMEOVER ||
          this.gameControl.gamestate === this.gameControl.GAMESTATE.PAUSED) &&
          (this.gameControl.MenuSelection =
            this.gameControl.MenuSelection === 0 ? 1 : 0);
        break;
      case "a":
        this.gameControl.gamestate === this.gameControl.GAMESTATE.RUNNING &&
          (this.player.keyPressed.left = !0);
        break;
      case "d":
        this.gameControl.gamestate === this.gameControl.GAMESTATE.RUNNING &&
          (this.player.keyPressed.right = !0);
        break;
      case "Enter":
        if (this.gameControl.gamestate === this.gameControl.GAMESTATE.RUNNING)
          this.player.keyPressed.attack = !0;
        else if (this.gameControl.gamestate === this.gameControl.GAMESTATE.MENU)
          this.gameControl.Restart();
        else if (
          this.gameControl.gamestate === this.gameControl.GAMESTATE.GAMEOVER ||
          this.gameControl.gamestate === this.gameControl.GAMESTATE.PAUSED
        )
          if (this.gameControl.MenuSelection === 0) {
            this.gameControl.gamestate === this.gameControl.GAMESTATE.GAMEOVER
              ? this.gameControl.Restart()
              : this.gameControl.gamestate ===
                  this.gameControl.GAMESTATE.PAUSED &&
                (this.gameControl.gamestate =
                  this.gameControl.GAMESTATE.RUNNING);
            break;
          } else
            (this.gameControl.gamestate = this.gameControl.GAMESTATE.MENU),
              (document.getElementById("playerControls").style.display =
                "flex");
        break;
      case "Escape":
        this.gameControl.togglePause();
        break;
    }
  }
  onKeyup(e) {
    switch (e.key) {
      case "a":
        this.player.keyPressed.left = !1;
        break;
      case "d":
        this.player.keyPressed.right = !1;
        break;
      case "Enter":
        this.player.keyPressed.attack = !1;
        break;
    }
  }
}
class pu {
  constructor(e, t, n) {
    (this.ship = e),
      (this.shipMesh = e.mesh),
      (this.velocity = t),
      (this.game = n),
      this.createBullets();
  }
  createBullets() {
    const e = this.velocity > 0 ? 16766720 : 16711680,
      t = new Ln().setFromObject(this.shipMesh),
      n = t.min.x + 250,
      i = t.max.x - 250,
      r = this.shipMesh.position.y,
      a = this.shipMesh.position.z - 250;
    (this.mesh1 = new hn(new ea(5, 5, 50, 32), new $r({ color: e }))),
      (this.mesh2 = new hn(new ea(5, 5, 50, 32), new $r({ color: e }))),
      (this.mesh1.rotation.x = -Math.PI / 2),
      (this.mesh2.rotation.x = -Math.PI / 2),
      this.mesh1.position.set(n, r, a),
      this.mesh2.position.set(i, r, a),
      this.game.scene.add(this.mesh1),
      this.game.scene.add(this.mesh2);
  }
  updateBullets() {
    const e = this.ship.bullets;
    (this.mesh1.position.z += this.velocity),
      (this.mesh2.position.z += this.velocity),
      Math.abs(this.mesh1.position.z - this.shipMesh.position.z) > 1e4 &&
        Math.abs(this.mesh2.position.z - this.shipMesh.position.z) > 1e4 &&
        (this.ship.bullets.splice((t) => e.indexOf(this), 1),
        this.game.scene.remove(this.mesh1),
        this.game.scene.remove(this.mesh2));
  }
}
function An(o, e) {
  const t = new Ln().setFromObject(o),
    n = new Ln().setFromObject(e);
  return t.intersectsBox(n);
}
function Bn(o) {
  if (o === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return o;
}
function mu(o, e) {
  (o.prototype = Object.create(e.prototype)),
    (o.prototype.constructor = o),
    (o.__proto__ = e);
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Qt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Mr = { duration: 0.5, overwrite: !1, delay: 0 },
  cl,
  Et,
  ot,
  un = 1e8,
  We = 1 / un,
  Po = Math.PI * 2,
  tv = Po / 4,
  nv = 0,
  gu = Math.sqrt,
  iv = Math.cos,
  rv = Math.sin,
  _t = function (e) {
    return typeof e == "string";
  },
  Qe = function (e) {
    return typeof e == "function";
  },
  Xn = function (e) {
    return typeof e == "number";
  },
  hl = function (e) {
    return typeof e > "u";
  },
  Rn = function (e) {
    return typeof e == "object";
  },
  Gt = function (e) {
    return e !== !1;
  },
  _u = function () {
    return typeof window < "u";
  },
  Hs = function (e) {
    return Qe(e) || _t(e);
  },
  xu =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  At = Array.isArray,
  Lo = /(?:-?\.?\d|\.)+/gi,
  vu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  cr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  co = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  yu = /[+-]=-?[.\d]+/,
  Mu = /[^,'"\[\]\s]+/gi,
  sv = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Ze,
  an,
  Ro,
  ul,
  en = {},
  na = {},
  bu,
  Su = function (e) {
    return (na = ki(e, en)) && tn;
  },
  fl = function (e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  ia = function (e, t) {
    return !t && console.warn(e);
  },
  wu = function (e, t) {
    return (e && (en[e] = t) && na && (na[e] = t)) || en;
  },
  hs = function () {
    return 0;
  },
  av = { suppressEvents: !0, isStart: !0, kill: !1 },
  qs = { suppressEvents: !0, kill: !1 },
  ov = { suppressEvents: !0 },
  dl = {},
  oi = [],
  Do = {},
  Tu,
  Zt = {},
  ho = {},
  hh = 30,
  Ys = [],
  pl = "",
  ml = function (e) {
    var t = e[0],
      n,
      i;
    if ((Rn(t) || Qe(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (i = Ys.length; i-- && !Ys[i].targetTest(t); );
      n = Ys[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new Yu(e[i], n)))) ||
        e.splice(i, 1);
    return e;
  },
  Li = function (e) {
    return e._gsap || ml(fn(e))[0]._gsap;
  },
  Eu = function (e, t, n) {
    return (n = e[t]) && Qe(n)
      ? e[t]()
      : (hl(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  Vt = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  it = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  yt = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  pr = function (e, t) {
    var n = t.charAt(0),
      i = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i
    );
  },
  lv = function (e, t) {
    for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; );
    return i < n;
  },
  ra = function () {
    var e = oi.length,
      t = oi.slice(0),
      n,
      i;
    for (Do = {}, oi.length = 0, n = 0; n < e; n++)
      (i = t[n]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  Au = function (e, t, n, i) {
    oi.length && !Et && ra(),
      e.render(t, n, i || (Et && t < 0 && (e._initted || e._startAt))),
      oi.length && !Et && ra();
  },
  Cu = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Mu).length < 2
      ? t
      : _t(e)
      ? e.trim()
      : e;
  },
  Pu = function (e) {
    return e;
  },
  pn = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  cv = function (e) {
    return function (t, n) {
      for (var i in n)
        i in t || (i === "duration" && e) || i === "ease" || (t[i] = n[i]);
    };
  },
  ki = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  uh = function o(e, t) {
    for (var n in t)
      n !== "__proto__" &&
        n !== "constructor" &&
        n !== "prototype" &&
        (e[n] = Rn(t[n]) ? o(e[n] || (e[n] = {}), t[n]) : t[n]);
    return e;
  },
  sa = function (e, t) {
    var n = {},
      i;
    for (i in e) i in t || (n[i] = e[i]);
    return n;
  },
  Qr = function (e) {
    var t = e.parent || Ze,
      n = e.keyframes ? cv(At(e.keyframes)) : pn;
    if (Gt(e.inherit))
      for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  hv = function (e, t) {
    for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; );
    return n < 0;
  },
  Lu = function (e, t, n, i, r) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var a = e[i],
      s;
    if (r) for (s = t[r]; a && a[r] > s; ) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[i] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  _a = function (e, t, n, i) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var r = t._prev,
      a = t._next;
    r ? (r._next = a) : e[n] === t && (e[n] = a),
      a ? (a._prev = r) : e[i] === t && (e[i] = r),
      (t._next = t._prev = t.parent = null);
  },
  hi = function (e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
      (e._act = 0);
  },
  Ri = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
    return e;
  },
  uv = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  Io = function (e, t, n, i) {
    return (
      e._startAt &&
      (Et
        ? e._startAt.revert(qs)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, i))
    );
  },
  fv = function o(e) {
    return !e || (e._ts && o(e.parent));
  },
  fh = function (e) {
    return e._repeat ? br(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  br = function (e, t) {
    var n = Math.floor((e /= t));
    return e && n === e ? n - 1 : n;
  },
  aa = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  xa = function (e) {
    return (e._end = yt(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || We) || 0)
    ));
  },
  va = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = yt(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        xa(e),
        n._dirty || Ri(n, e)),
      e
    );
  },
  Ru = function (e, t) {
    var n;
    if (
      ((t._time || (t._initted && !t._dur)) &&
        ((n = aa(e.rawTime(), t)),
        (!t._dur || ys(0, t.totalDuration(), n) - t._tTime > We) &&
          t.render(n, !0)),
      Ri(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp; )
          n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
      e._zTime = -We;
    }
  },
  En = function (e, t, n, i) {
    return (
      t.parent && hi(t),
      (t._start = yt(
        (Xn(n) ? n : n || e !== Ze ? sn(e, n, t) : e._time) + t._delay
      )),
      (t._end = yt(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      Lu(e, t, "_first", "_last", e._sort ? "_start" : 0),
      Fo(t) || (e._recent = t),
      i || Ru(e, t),
      e._ts < 0 && va(e, e._tTime),
      e
    );
  },
  Du = function (e, t) {
    return (
      (en.ScrollTrigger || fl("scrollTrigger", t)) &&
      en.ScrollTrigger.create(t, e)
    );
  },
  Iu = function (e, t, n, i, r) {
    if ((_l(e, t, r), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !Et &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Tu !== $t.frame
    )
      return oi.push(e), (e._lazy = [r, i]), 1;
  },
  dv = function o(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || o(t));
  },
  Fo = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  pv = function (e, t, n, i) {
    var r = e.ratio,
      a =
        t < 0 ||
        (!t &&
          ((!e._start && dv(e) && !(!e._initted && Fo(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Fo(e))))
          ? 0
          : 1,
      s = e._rDelay,
      l = 0,
      c,
      h,
      u;
    if (
      (s &&
        e._repeat &&
        ((l = ys(0, e._tDur, t)),
        (h = br(l, s)),
        e._yoyo && h & 1 && (a = 1 - a),
        h !== br(e._tTime, s) &&
          ((r = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== r || Et || i || e._zTime === We || (!t && e._zTime))
    ) {
      if (!e._initted && Iu(e, t, i, n, l)) return;
      for (
        u = e._zTime,
          e._zTime = t || (n ? We : 0),
          n || (n = t && !u),
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = l,
          c = e._pt;
        c;

      )
        c.r(a, c.d), (c = c._next);
      t < 0 && Io(e, t, n, !0),
        e._onUpdate && !n && dn(e, "onUpdate"),
        l && e._repeat && !n && e.parent && dn(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === a &&
          (a && hi(e, 1),
          !n &&
            !Et &&
            (dn(e, a ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  mv = function (e, t, n) {
    var i;
    if (n > t)
      for (i = e._first; i && i._start <= n; ) {
        if (i.data === "isPause" && i._start > t) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= n; ) {
        if (i.data === "isPause" && i._start < t) return i;
        i = i._prev;
      }
  },
  Sr = function (e, t, n, i) {
    var r = e._repeat,
      a = yt(t) || 0,
      s = e._tTime / e._tDur;
    return (
      s && !i && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = r ? (r < 0 ? 1e10 : yt(a * (r + 1) + e._rDelay * r)) : a),
      s > 0 && !i && va(e, (e._tTime = e._tDur * s)),
      e.parent && xa(e),
      n || Ri(e.parent, e),
      e
    );
  },
  dh = function (e) {
    return e instanceof Bt ? Ri(e) : Sr(e, e._dur);
  },
  gv = { _start: 0, endTime: hs, totalDuration: hs },
  sn = function o(e, t, n) {
    var i = e.labels,
      r = e._recent || gv,
      a = e.duration() >= un ? r.endTime(!1) : e._dur,
      s,
      l,
      c;
    return _t(t) && (isNaN(t) || t in i)
      ? ((l = t.charAt(0)),
        (c = t.substr(-1) === "%"),
        (s = t.indexOf("=")),
        l === "<" || l === ">"
          ? (s >= 0 && (t = t.replace(/=/, "")),
            (l === "<" ? r._start : r.endTime(r._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (c ? (s < 0 ? r : n).totalDuration() / 100 : 1))
          : s < 0
          ? (t in i || (i[t] = a), i[t])
          : ((l = parseFloat(t.charAt(s - 1) + t.substr(s + 1))),
            c && n && (l = (l / 100) * (At(n) ? n[0] : n).totalDuration()),
            s > 1 ? o(e, t.substr(0, s - 1), n) + l : a + l))
      : t == null
      ? a
      : +t;
  },
  es = function (e, t, n) {
    var i = Xn(t[1]),
      r = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[r],
      s,
      l;
    if ((i && (a.duration = t[1]), (a.parent = n), e)) {
      for (s = a, l = n; l && !("immediateRender" in s); )
        (s = l.vars.defaults || {}), (l = Gt(l.vars.inherit) && l.parent);
      (a.immediateRender = Gt(s.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[r - 1]);
    }
    return new lt(t[0], a, t[r + 1]);
  },
  pi = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  ys = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  wt = function (e, t) {
    return !_t(e) || !(t = sv.exec(e)) ? "" : t[1];
  },
  _v = function (e, t, n) {
    return pi(n, function (i) {
      return ys(e, t, i);
    });
  },
  Oo = [].slice,
  Fu = function (e, t) {
    return (
      e &&
      Rn(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && Rn(e[0]))) &&
      !e.nodeType &&
      e !== an
    );
  },
  xv = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (i) {
        var r;
        return (_t(i) && !t) || Fu(i, 1)
          ? (r = n).push.apply(r, fn(i))
          : n.push(i);
      }) || n
    );
  },
  fn = function (e, t, n) {
    return ot && !t && ot.selector
      ? ot.selector(e)
      : _t(e) && !n && (Ro || !wr())
      ? Oo.call((t || ul).querySelectorAll(e), 0)
      : At(e)
      ? xv(e, n)
      : Fu(e)
      ? Oo.call(e, 0)
      : e
      ? [e]
      : [];
  },
  No = function (e) {
    return (
      (e = fn(e)[0] || ia("Invalid scope") || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return fn(
          t,
          n.querySelectorAll
            ? n
            : n === e
            ? ia("Invalid scope") || ul.createElement("div")
            : e
        );
      }
    );
  },
  Ou = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Nu = function (e) {
    if (Qe(e)) return e;
    var t = Rn(e) ? e : { each: e },
      n = Di(t.ease),
      i = t.from || 0,
      r = parseFloat(t.base) || 0,
      a = {},
      s = i > 0 && i < 1,
      l = isNaN(i) || s,
      c = t.axis,
      h = i,
      u = i;
    return (
      _t(i)
        ? (h = u = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !s && l && ((h = i[0]), (u = i[1])),
      function (f, p, g) {
        var d = (g || t).length,
          m = a[d],
          _,
          b,
          x,
          y,
          M,
          E,
          C,
          v,
          S;
        if (!m) {
          if (((S = t.grid === "auto" ? 0 : (t.grid || [1, un])[1]), !S)) {
            for (
              C = -un;
              C < (C = g[S++].getBoundingClientRect().left) && S < d;

            );
            S--;
          }
          for (
            m = a[d] = [],
              _ = l ? Math.min(S, d) * h - 0.5 : i % S,
              b = S === un ? 0 : l ? (d * u) / S - 0.5 : (i / S) | 0,
              C = 0,
              v = un,
              E = 0;
            E < d;
            E++
          )
            (x = (E % S) - _),
              (y = b - ((E / S) | 0)),
              (m[E] = M = c ? Math.abs(c === "y" ? y : x) : gu(x * x + y * y)),
              M > C && (C = M),
              M < v && (v = M);
          i === "random" && Ou(m),
            (m.max = C - v),
            (m.min = v),
            (m.v = d =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (S > d
                    ? d - 1
                    : c
                    ? c === "y"
                      ? d / S
                      : S
                    : Math.max(S, d / S)) ||
                0) * (i === "edges" ? -1 : 1)),
            (m.b = d < 0 ? r - d : r),
            (m.u = wt(t.amount || t.each) || 0),
            (n = n && d < 0 ? Hu(n) : n);
        }
        return (
          (d = (m[f] - m.min) / m.max || 0),
          yt(m.b + (n ? n(d) : d) * m.v) + m.u
        );
      }
    );
  },
  ko = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (n) {
      var i = yt(Math.round(parseFloat(n) / e) * e * t);
      return (i - (i % 1)) / t + (Xn(n) ? 0 : wt(n));
    };
  },
  ku = function (e, t) {
    var n = At(e),
      i,
      r;
    return (
      !n &&
        Rn(e) &&
        ((i = n = e.radius || un),
        e.values
          ? ((e = fn(e.values)), (r = !Xn(e[0])) && (i *= i))
          : (e = ko(e.increment))),
      pi(
        t,
        n
          ? Qe(e)
            ? function (a) {
                return (r = e(a)), Math.abs(r - a) <= i ? r : a;
              }
            : function (a) {
                for (
                  var s = parseFloat(r ? a.x : a),
                    l = parseFloat(r ? a.y : 0),
                    c = un,
                    h = 0,
                    u = e.length,
                    f,
                    p;
                  u--;

                )
                  r
                    ? ((f = e[u].x - s), (p = e[u].y - l), (f = f * f + p * p))
                    : (f = Math.abs(e[u] - s)),
                    f < c && ((c = f), (h = u));
                return (
                  (h = !i || c <= i ? e[h] : a),
                  r || h === a || Xn(a) ? h : h + wt(a)
                );
              }
          : ko(e)
      )
    );
  },
  Uu = function (e, t, n, i) {
    return pi(At(e) ? !t : n === !0 ? !!(n = 0) : !i, function () {
      return At(e)
        ? e[~~(Math.random() * e.length)]
        : (n = n || 1e-5) &&
            (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) *
                n *
                i
            ) / i;
    });
  },
  vv = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return function (i) {
      return t.reduce(function (r, a) {
        return a(r);
      }, i);
    };
  },
  yv = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || wt(n));
    };
  },
  Mv = function (e, t, n) {
    return Bu(e, t, 0, 1, n);
  },
  zu = function (e, t, n) {
    return pi(n, function (i) {
      return e[~~t(i)];
    });
  },
  bv = function o(e, t, n) {
    var i = t - e;
    return At(e)
      ? zu(e, o(0, e.length), t)
      : pi(n, function (r) {
          return ((i + ((r - e) % i)) % i) + e;
        });
  },
  Sv = function o(e, t, n) {
    var i = t - e,
      r = i * 2;
    return At(e)
      ? zu(e, o(0, e.length - 1), t)
      : pi(n, function (a) {
          return (a = (r + ((a - e) % r)) % r || 0), e + (a > i ? r - a : a);
        });
  },
  us = function (e) {
    for (var t = 0, n = "", i, r, a, s; ~(i = e.indexOf("random(", t)); )
      (a = e.indexOf(")", i)),
        (s = e.charAt(i + 7) === "["),
        (r = e.substr(i + 7, a - i - 7).match(s ? Mu : Lo)),
        (n +=
          e.substr(t, i - t) + Uu(s ? r : +r[0], s ? 0 : +r[1], +r[2] || 1e-5)),
        (t = a + 1);
    return n + e.substr(t, e.length - t);
  },
  Bu = function (e, t, n, i, r) {
    var a = t - e,
      s = i - n;
    return pi(r, function (l) {
      return n + (((l - e) / a) * s || 0);
    });
  },
  wv = function o(e, t, n, i) {
    var r = isNaN(e + t)
      ? 0
      : function (p) {
          return (1 - p) * e + p * t;
        };
    if (!r) {
      var a = _t(e),
        s = {},
        l,
        c,
        h,
        u,
        f;
      if ((n === !0 && (i = 1) && (n = null), a))
        (e = { p: e }), (t = { p: t });
      else if (At(e) && !At(t)) {
        for (h = [], u = e.length, f = u - 2, c = 1; c < u; c++)
          h.push(o(e[c - 1], e[c]));
        u--,
          (r = function (g) {
            g *= u;
            var d = Math.min(f, ~~g);
            return h[d](g - d);
          }),
          (n = t);
      } else i || (e = ki(At(e) ? [] : {}, e));
      if (!h) {
        for (l in t) gl.call(s, e, l, "get", t[l]);
        r = function (g) {
          return yl(g, s) || (a ? e.p : e);
        };
      }
    }
    return pi(n, r);
  },
  ph = function (e, t, n) {
    var i = e.labels,
      r = un,
      a,
      s,
      l;
    for (a in i)
      (s = i[a] - t),
        s < 0 == !!n && s && r > (s = Math.abs(s)) && ((l = a), (r = s));
    return l;
  },
  dn = function (e, t, n) {
    var i = e.vars,
      r = i[t],
      a = ot,
      s = e._ctx,
      l,
      c,
      h;
    if (r)
      return (
        (l = i[t + "Params"]),
        (c = i.callbackScope || e),
        n && oi.length && ra(),
        s && (ot = s),
        (h = l ? r.apply(c, l) : r.call(c)),
        (ot = a),
        h
      );
  },
  Xr = function (e) {
    return (
      hi(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Et),
      e.progress() < 1 && dn(e, "onInterrupt"),
      e
    );
  },
  hr,
  Tv = function (e) {
    e = (!e.name && e.default) || e;
    var t = e.name,
      n = Qe(e),
      i =
        t && !n && e.init
          ? function () {
              this._props = [];
            }
          : e,
      r = { init: hs, render: yl, add: gl, kill: Gv, modifier: Bv, rawVars: 0 },
      a = { targetTest: 0, get: 0, getSetter: vl, aliases: {}, register: 0 };
    if ((wr(), e !== i)) {
      if (Zt[t]) return;
      pn(i, pn(sa(e, r), a)),
        ki(i.prototype, ki(r, sa(e, a))),
        (Zt[(i.prop = t)] = i),
        e.targetTest && (Ys.push(i), (dl[t] = 1)),
        (t =
          (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
          "Plugin");
    }
    wu(t, i), e.register && e.register(tn, i, Wt);
  },
  Ve = 255,
  qr = {
    aqua: [0, Ve, Ve],
    lime: [0, Ve, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Ve],
    navy: [0, 0, 128],
    white: [Ve, Ve, Ve],
    olive: [128, 128, 0],
    yellow: [Ve, Ve, 0],
    orange: [Ve, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Ve, 0, 0],
    pink: [Ve, 192, 203],
    cyan: [0, Ve, Ve],
    transparent: [Ve, Ve, Ve, 0],
  },
  uo = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
        ? n
        : e * 3 < 2
        ? t + (n - t) * (2 / 3 - e) * 6
        : t) *
        Ve +
        0.5) |
        0
    );
  },
  Gu = function (e, t, n) {
    var i = e ? (Xn(e) ? [e >> 16, (e >> 8) & Ve, e & Ve] : 0) : qr.black,
      r,
      a,
      s,
      l,
      c,
      h,
      u,
      f,
      p,
      g;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), qr[e]))
        i = qr[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((r = e.charAt(1)),
            (a = e.charAt(2)),
            (s = e.charAt(3)),
            (e =
              "#" +
              r +
              r +
              a +
              a +
              s +
              s +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & Ve, i & Ve, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & Ve, e & Ve]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = g = e.match(Lo)), !t))
          (l = (+i[0] % 360) / 360),
            (c = +i[1] / 100),
            (h = +i[2] / 100),
            (a = h <= 0.5 ? h * (c + 1) : h + c - h * c),
            (r = h * 2 - a),
            i.length > 3 && (i[3] *= 1),
            (i[0] = uo(l + 1 / 3, r, a)),
            (i[1] = uo(l, r, a)),
            (i[2] = uo(l - 1 / 3, r, a));
        else if (~e.indexOf("="))
          return (i = e.match(vu)), n && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(Lo) || qr.transparent;
      i = i.map(Number);
    }
    return (
      t &&
        !g &&
        ((r = i[0] / Ve),
        (a = i[1] / Ve),
        (s = i[2] / Ve),
        (u = Math.max(r, a, s)),
        (f = Math.min(r, a, s)),
        (h = (u + f) / 2),
        u === f
          ? (l = c = 0)
          : ((p = u - f),
            (c = h > 0.5 ? p / (2 - u - f) : p / (u + f)),
            (l =
              u === r
                ? (a - s) / p + (a < s ? 6 : 0)
                : u === a
                ? (s - r) / p + 2
                : (r - a) / p + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(c * 100 + 0.5)),
        (i[2] = ~~(h * 100 + 0.5))),
      n && i.length < 4 && (i[3] = 1),
      i
    );
  },
  Vu = function (e) {
    var t = [],
      n = [],
      i = -1;
    return (
      e.split(li).forEach(function (r) {
        var a = r.match(cr) || [];
        t.push.apply(t, a), n.push((i += a.length + 1));
      }),
      (t.c = n),
      t
    );
  },
  mh = function (e, t, n) {
    var i = "",
      r = (e + i).match(li),
      a = t ? "hsla(" : "rgba(",
      s = 0,
      l,
      c,
      h,
      u;
    if (!r) return e;
    if (
      ((r = r.map(function (f) {
        return (
          (f = Gu(f, t, 1)) &&
          a +
            (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) +
            ")"
        );
      })),
      n && ((h = Vu(e)), (l = n.c), l.join(i) !== h.c.join(i)))
    )
      for (c = e.replace(li, "1").split(cr), u = c.length - 1; s < u; s++)
        i +=
          c[s] +
          (~l.indexOf(s)
            ? r.shift() || a + "0,0,0,0)"
            : (h.length ? h : r.length ? r : n).shift());
    if (!c)
      for (c = e.split(li), u = c.length - 1; s < u; s++) i += c[s] + r[s];
    return i + c[u];
  },
  li = (function () {
    var o =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in qr) o += "|" + e + "\\b";
    return new RegExp(o + ")", "gi");
  })(),
  Ev = /hsl[a]?\(/,
  Wu = function (e) {
    var t = e.join(" "),
      n;
    if (((li.lastIndex = 0), li.test(t)))
      return (
        (n = Ev.test(t)),
        (e[1] = mh(e[1], n)),
        (e[0] = mh(e[0], n, Vu(e[1]))),
        !0
      );
  },
  fs,
  $t = (function () {
    var o = Date.now,
      e = 500,
      t = 33,
      n = o(),
      i = n,
      r = 1e3 / 240,
      a = r,
      s = [],
      l,
      c,
      h,
      u,
      f,
      p,
      g = function d(m) {
        var _ = o() - i,
          b = m === !0,
          x,
          y,
          M,
          E;
        if (
          (_ > e && (n += _ - t),
          (i += _),
          (M = i - n),
          (x = M - a),
          (x > 0 || b) &&
            ((E = ++u.frame),
            (f = M - u.time * 1e3),
            (u.time = M = M / 1e3),
            (a += x + (x >= r ? 4 : r - x)),
            (y = 1)),
          b || (l = c(d)),
          y)
        )
          for (p = 0; p < s.length; p++) s[p](M, f, E, m);
      };
    return (
      (u = {
        time: 0,
        frame: 0,
        tick: function () {
          g(!0);
        },
        deltaRatio: function (m) {
          return f / (1e3 / (m || 60));
        },
        wake: function () {
          bu &&
            (!Ro &&
              _u() &&
              ((an = Ro = window),
              (ul = an.document || {}),
              (en.gsap = tn),
              (an.gsapVersions || (an.gsapVersions = [])).push(tn.version),
              Su(na || an.GreenSockGlobals || (!an.gsap && an) || {}),
              (h = an.requestAnimationFrame)),
            l && u.sleep(),
            (c =
              h ||
              function (m) {
                return setTimeout(m, (a - u.time * 1e3 + 1) | 0);
              }),
            (fs = 1),
            g(2));
        },
        sleep: function () {
          (h ? an.cancelAnimationFrame : clearTimeout)(l), (fs = 0), (c = hs);
        },
        lagSmoothing: function (m, _) {
          (e = m || 1 / 0), (t = Math.min(_ || 33, e));
        },
        fps: function (m) {
          (r = 1e3 / (m || 240)), (a = u.time * 1e3 + r);
        },
        add: function (m, _, b) {
          var x = _
            ? function (y, M, E, C) {
                m(y, M, E, C), u.remove(x);
              }
            : m;
          return u.remove(m), s[b ? "unshift" : "push"](x), wr(), x;
        },
        remove: function (m, _) {
          ~(_ = s.indexOf(m)) && s.splice(_, 1) && p >= _ && p--;
        },
        _listeners: s,
      }),
      u
    );
  })(),
  wr = function () {
    return !fs && $t.wake();
  },
  Re = {},
  Av = /^[\d.\-M][\d.\-,\s]/,
  Cv = /["']/g,
  Pv = function (e) {
    for (
      var t = {},
        n = e.substr(1, e.length - 3).split(":"),
        i = n[0],
        r = 1,
        a = n.length,
        s,
        l,
        c;
      r < a;
      r++
    )
      (l = n[r]),
        (s = r !== a - 1 ? l.lastIndexOf(",") : l.length),
        (c = l.substr(0, s)),
        (t[i] = isNaN(c) ? c.replace(Cv, "").trim() : +c),
        (i = l.substr(s + 1).trim());
    return t;
  },
  Lv = function (e) {
    var t = e.indexOf("(") + 1,
      n = e.indexOf(")"),
      i = e.indexOf("(", t);
    return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
  },
  Rv = function (e) {
    var t = (e + "").split("("),
      n = Re[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
          null,
          ~e.indexOf("{") ? [Pv(t[1])] : Lv(e).split(",").map(Cu)
        )
      : Re._CE && Av.test(e)
      ? Re._CE("", e)
      : n;
  },
  Hu = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Xu = function o(e, t) {
    for (var n = e._first, i; n; )
      n instanceof Bt
        ? o(n, t)
        : n.vars.yoyoEase &&
          (!n._yoyo || !n._repeat) &&
          n._yoyo !== t &&
          (n.timeline
            ? o(n.timeline, t)
            : ((i = n._ease),
              (n._ease = n._yEase),
              (n._yEase = i),
              (n._yoyo = t))),
        (n = n._next);
  },
  Di = function (e, t) {
    return (e && (Qe(e) ? e : Re[e] || Rv(e))) || t;
  },
  zi = function (e, t, n, i) {
    n === void 0 &&
      (n = function (l) {
        return 1 - t(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        });
    var r = { easeIn: t, easeOut: n, easeInOut: i },
      a;
    return (
      Vt(e, function (s) {
        (Re[s] = en[s] = r), (Re[(a = s.toLowerCase())] = n);
        for (var l in r)
          Re[
            a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = Re[s + "." + l] = r[l];
      }),
      r
    );
  },
  qu = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  fo = function o(e, t, n) {
    var i = t >= 1 ? t : 1,
      r = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (r / Po) * (Math.asin(1 / i) || 0),
      s = function (h) {
        return h === 1 ? 1 : i * Math.pow(2, -10 * h) * rv((h - a) * r) + 1;
      },
      l =
        e === "out"
          ? s
          : e === "in"
          ? function (c) {
              return 1 - s(1 - c);
            }
          : qu(s);
    return (
      (r = Po / r),
      (l.config = function (c, h) {
        return o(e, c, h);
      }),
      l
    );
  },
  po = function o(e, t) {
    t === void 0 && (t = 1.70158);
    var n = function (a) {
        return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
      },
      i =
        e === "out"
          ? n
          : e === "in"
          ? function (r) {
              return 1 - n(1 - r);
            }
          : qu(n);
    return (
      (i.config = function (r) {
        return o(e, r);
      }),
      i
    );
  };
Vt("Linear,Quad,Cubic,Quart,Quint,Strong", function (o, e) {
  var t = e < 5 ? e + 1 : e;
  zi(
    o + ",Power" + (t - 1),
    e
      ? function (n) {
          return Math.pow(n, t);
        }
      : function (n) {
          return n;
        },
    function (n) {
      return 1 - Math.pow(1 - n, t);
    },
    function (n) {
      return n < 0.5
        ? Math.pow(n * 2, t) / 2
        : 1 - Math.pow((1 - n) * 2, t) / 2;
    }
  );
});
Re.Linear.easeNone = Re.none = Re.Linear.easeIn;
zi("Elastic", fo("in"), fo("out"), fo());
(function (o, e) {
  var t = 1 / e,
    n = 2 * t,
    i = 2.5 * t,
    r = function (s) {
      return s < t
        ? o * s * s
        : s < n
        ? o * Math.pow(s - 1.5 / e, 2) + 0.75
        : s < i
        ? o * (s -= 2.25 / e) * s + 0.9375
        : o * Math.pow(s - 2.625 / e, 2) + 0.984375;
    };
  zi(
    "Bounce",
    function (a) {
      return 1 - r(1 - a);
    },
    r
  );
})(7.5625, 2.75);
zi("Expo", function (o) {
  return o ? Math.pow(2, 10 * (o - 1)) : 0;
});
zi("Circ", function (o) {
  return -(gu(1 - o * o) - 1);
});
zi("Sine", function (o) {
  return o === 1 ? 1 : -iv(o * tv) + 1;
});
zi("Back", po("in"), po("out"), po());
Re.SteppedEase =
  Re.steps =
  en.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e,
          i = e + (t ? 0 : 1),
          r = t ? 1 : 0,
          a = 1 - We;
        return function (s) {
          return (((i * ys(0, a, s)) | 0) + r) * n;
        };
      },
    };
Mr.ease = Re["quad.out"];
Vt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (o) {
    return (pl += o + "," + o + "Params,");
  }
);
var Yu = function (e, t) {
    (this.id = nv++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Eu),
      (this.set = t ? t.getSetter : vl);
  },
  Tr = (function () {
    function o(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        Sr(this, +t.duration, 1, 1),
        (this.data = t.data),
        ot && ((this._ctx = ot), ot.data.push(this)),
        fs || $t.wake();
    }
    var e = o.prototype;
    return (
      (e.delay = function (n) {
        return n || n === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + n - this._delay),
            (this._delay = n),
            this)
          : this._delay;
      }),
      (e.duration = function (n) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (n) {
        return arguments.length
          ? ((this._dirty = 0),
            Sr(
              this,
              this._repeat < 0
                ? n
                : (n - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (n, i) {
        if ((wr(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (va(this, n), !r._dp || r.parent || Ru(r, this); r && r.parent; )
            r.parent._time !==
              r._start +
                (r._ts >= 0
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && n < this._tDur) ||
              (this._ts < 0 && n > 0) ||
              (!this._tDur && !n)) &&
            En(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== n ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === We) ||
            (!n && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = n), Au(this, n, i)),
          this
        );
      }),
      (e.time = function (n, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), n + fh(this)) %
                (this._dur + this._rDelay) || (n ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (n, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * n, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (n, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) +
                fh(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (n, i) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (n - 1) * r, i)
          : this._repeat
          ? br(this._tTime, r) + 1
          : 1;
      }),
      (e.timeScale = function (n) {
        if (!arguments.length) return this._rts === -We ? 0 : this._rts;
        if (this._rts === n) return this;
        var i =
          this.parent && this._ts ? aa(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +n || 0),
          (this._ts = this._ps || n === -We ? 0 : this._rts),
          this.totalTime(ys(-this._delay, this._tDur, i), !0),
          xa(this),
          uv(this)
        );
      }),
      (e.paused = function (n) {
        return arguments.length
          ? (this._ps !== n &&
              ((this._ps = n),
              n
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (wr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== We &&
                      (this._tTime -= We)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (n) {
        if (arguments.length) {
          this._start = n;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && En(i, this, n - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (n) {
        return (
          this._start +
          (Gt(n) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (n) {
        var i = this.parent || this._dp;
        return i
          ? n &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? aa(i.rawTime(n), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (n) {
        n === void 0 && (n = ov);
        var i = Et;
        return (
          (Et = n),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(n),
            this.totalTime(-0.01, n.suppressEvents)),
          this.data !== "nested" && n.kill !== !1 && this.kill(),
          (Et = i),
          this
        );
      }),
      (e.globalTime = function (n) {
        for (var i = this, r = arguments.length ? n : i.rawTime(); i; )
          (r = i._start + r / (i._ts || 1)), (i = i._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1
            : this._sat.globalTime(n)
          : r;
      }),
      (e.repeat = function (n) {
        return arguments.length
          ? ((this._repeat = n === 1 / 0 ? -2 : n), dh(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (n) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = n), dh(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (n) {
        return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
      }),
      (e.seek = function (n, i) {
        return this.totalTime(sn(this, n), Gt(i));
      }),
      (e.restart = function (n, i) {
        return this.play().totalTime(n ? -this._delay : 0, Gt(i));
      }),
      (e.play = function (n, i) {
        return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (n, i) {
        return (
          n != null && this.seek(n || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (n, i) {
        return n != null && this.seek(n, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (n) {
        return arguments.length
          ? (!!n !== this.reversed() &&
              this.timeScale(-this._rts || (n ? -We : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -We), this;
      }),
      (e.isActive = function () {
        var n = this.parent || this._dp,
          i = this._start,
          r;
        return !!(
          !n ||
          (this._ts &&
            this._initted &&
            n.isActive() &&
            (r = n.rawTime(!0)) >= i &&
            r < this.endTime(!0) - We)
        );
      }),
      (e.eventCallback = function (n, i, r) {
        var a = this.vars;
        return arguments.length > 1
          ? (i
              ? ((a[n] = i),
                r && (a[n + "Params"] = r),
                n === "onUpdate" && (this._onUpdate = i))
              : delete a[n],
            this)
          : a[n];
      }),
      (e.then = function (n) {
        var i = this;
        return new Promise(function (r) {
          var a = Qe(n) ? n : Pu,
            s = function () {
              var c = i.then;
              (i.then = null),
                Qe(a) && (a = a(i)) && (a.then || a === i) && (i.then = c),
                r(a),
                (i.then = c);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? s()
            : (i._prom = s);
        });
      }),
      (e.kill = function () {
        Xr(this);
      }),
      o
    );
  })();
pn(Tr.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -We,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Bt = (function (o) {
  mu(e, o);
  function e(n, i) {
    var r;
    return (
      n === void 0 && (n = {}),
      (r = o.call(this, n) || this),
      (r.labels = {}),
      (r.smoothChildTiming = !!n.smoothChildTiming),
      (r.autoRemoveChildren = !!n.autoRemoveChildren),
      (r._sort = Gt(n.sortChildren)),
      Ze && En(n.parent || Ze, Bn(r), i),
      n.reversed && r.reverse(),
      n.paused && r.paused(!0),
      n.scrollTrigger && Du(Bn(r), n.scrollTrigger),
      r
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (i, r, a) {
      return es(0, arguments, this), this;
    }),
    (t.from = function (i, r, a) {
      return es(1, arguments, this), this;
    }),
    (t.fromTo = function (i, r, a, s) {
      return es(2, arguments, this), this;
    }),
    (t.set = function (i, r, a) {
      return (
        (r.duration = 0),
        (r.parent = this),
        Qr(r).repeatDelay || (r.repeat = 0),
        (r.immediateRender = !!r.immediateRender),
        new lt(i, r, sn(this, a), 1),
        this
      );
    }),
    (t.call = function (i, r, a) {
      return En(this, lt.delayedCall(0, i, r), a);
    }),
    (t.staggerTo = function (i, r, a, s, l, c, h) {
      return (
        (a.duration = r),
        (a.stagger = a.stagger || s),
        (a.onComplete = c),
        (a.onCompleteParams = h),
        (a.parent = this),
        new lt(i, a, sn(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (i, r, a, s, l, c, h) {
      return (
        (a.runBackwards = 1),
        (Qr(a).immediateRender = Gt(a.immediateRender)),
        this.staggerTo(i, r, a, s, l, c, h)
      );
    }),
    (t.staggerFromTo = function (i, r, a, s, l, c, h, u) {
      return (
        (s.startAt = a),
        (Qr(s).immediateRender = Gt(s.immediateRender)),
        this.staggerTo(i, r, s, l, c, h, u)
      );
    }),
    (t.render = function (i, r, a) {
      var s = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        h = i <= 0 ? 0 : yt(i),
        u = this._zTime < 0 != i < 0 && (this._initted || !c),
        f,
        p,
        g,
        d,
        m,
        _,
        b,
        x,
        y,
        M,
        E,
        C;
      if (
        (this !== Ze && h > l && i >= 0 && (h = l), h !== this._tTime || a || u)
      ) {
        if (
          (s !== this._time &&
            c &&
            ((h += this._time - s), (i += this._time - s)),
          (f = h),
          (y = this._start),
          (x = this._ts),
          (_ = !x),
          u && (c || (s = this._zTime), (i || !r) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((E = this._yoyo),
            (m = c + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(m * 100 + i, r, a);
          if (
            ((f = yt(h % m)),
            h === l
              ? ((d = this._repeat), (f = c))
              : ((d = ~~(h / m)),
                d && d === h / m && ((f = c), d--),
                f > c && (f = c)),
            (M = br(this._tTime, m)),
            !s && this._tTime && M !== d && (M = d),
            E && d & 1 && ((f = c - f), (C = 1)),
            d !== M && !this._lock)
          ) {
            var v = E && M & 1,
              S = v === (E && d & 1);
            if (
              (d < M && (v = !v),
              (s = v ? 0 : c),
              (this._lock = 1),
              (this.render(s || (C ? 0 : yt(d * m)), r, !c)._lock = 0),
              (this._tTime = h),
              !r && this.parent && dn(this, "onRepeat"),
              this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
              (s && s !== this._time) ||
                _ !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((c = this._dur),
              (l = this._tDur),
              S &&
                ((this._lock = 2),
                (s = v ? c : -1e-4),
                this.render(s, !0),
                this.vars.repeatRefresh && !C && this.invalidate()),
              (this._lock = 0),
              !this._ts && !_)
            )
              return this;
            Xu(this, C);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((b = mv(this, yt(s), yt(f))), b && (h -= f - (f = b._start))),
          (this._tTime = h),
          (this._time = f),
          (this._act = !x),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (s = 0)),
          !s && f && !r && (dn(this, "onStart"), this._tTime !== h))
        )
          return this;
        if (f >= s && i >= 0)
          for (p = this._first; p; ) {
            if (
              ((g = p._next), (p._act || f >= p._start) && p._ts && b !== p)
            ) {
              if (p.parent !== this) return this.render(i, r, a);
              if (
                (p.render(
                  p._ts > 0
                    ? (f - p._start) * p._ts
                    : (p._dirty ? p.totalDuration() : p._tDur) +
                        (f - p._start) * p._ts,
                  r,
                  a
                ),
                f !== this._time || (!this._ts && !_))
              ) {
                (b = 0), g && (h += this._zTime = -We);
                break;
              }
            }
            p = g;
          }
        else {
          p = this._last;
          for (var L = i < 0 ? i : f; p; ) {
            if (((g = p._prev), (p._act || L <= p._end) && p._ts && b !== p)) {
              if (p.parent !== this) return this.render(i, r, a);
              if (
                (p.render(
                  p._ts > 0
                    ? (L - p._start) * p._ts
                    : (p._dirty ? p.totalDuration() : p._tDur) +
                        (L - p._start) * p._ts,
                  r,
                  a || (Et && (p._initted || p._startAt))
                ),
                f !== this._time || (!this._ts && !_))
              ) {
                (b = 0), g && (h += this._zTime = L ? -We : We);
                break;
              }
            }
            p = g;
          }
        }
        if (
          b &&
          !r &&
          (this.pause(),
          (b.render(f >= s ? 0 : -We)._zTime = f >= s ? 1 : -1),
          this._ts)
        )
          return (this._start = y), xa(this), this.render(i, r, a);
        this._onUpdate && !r && dn(this, "onUpdate", !0),
          ((h === l && this._tTime >= this.totalDuration()) || (!h && s)) &&
            (y === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !c) &&
                ((h === l && this._ts > 0) || (!h && this._ts < 0)) &&
                hi(this, 1),
              !r &&
                !(i < 0 && !s) &&
                (h || s || !l) &&
                (dn(
                  this,
                  h === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(h < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (i, r) {
      var a = this;
      if ((Xn(r) || (r = sn(this, r, i)), !(i instanceof Tr))) {
        if (At(i))
          return (
            i.forEach(function (s) {
              return a.add(s, r);
            }),
            this
          );
        if (_t(i)) return this.addLabel(i, r);
        if (Qe(i)) i = lt.delayedCall(0, i);
        else return this;
      }
      return this !== i ? En(this, i, r) : this;
    }),
    (t.getChildren = function (i, r, a, s) {
      i === void 0 && (i = !0),
        r === void 0 && (r = !0),
        a === void 0 && (a = !0),
        s === void 0 && (s = -un);
      for (var l = [], c = this._first; c; )
        c._start >= s &&
          (c instanceof lt
            ? r && l.push(c)
            : (a && l.push(c), i && l.push.apply(l, c.getChildren(!0, r, a)))),
          (c = c._next);
      return l;
    }),
    (t.getById = function (i) {
      for (var r = this.getChildren(1, 1, 1), a = r.length; a--; )
        if (r[a].vars.id === i) return r[a];
    }),
    (t.remove = function (i) {
      return _t(i)
        ? this.removeLabel(i)
        : Qe(i)
        ? this.killTweensOf(i)
        : (_a(this, i),
          i === this._recent && (this._recent = this._last),
          Ri(this));
    }),
    (t.totalTime = function (i, r) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = yt(
              $t.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          o.prototype.totalTime.call(this, i, r),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (i, r) {
      return (this.labels[i] = sn(this, r)), this;
    }),
    (t.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (t.addPause = function (i, r, a) {
      var s = lt.delayedCall(0, r || hs, a);
      return (
        (s.data = "isPause"), (this._hasPause = 1), En(this, s, sn(this, i))
      );
    }),
    (t.removePause = function (i) {
      var r = this._first;
      for (i = sn(this, i); r; )
        r._start === i && r.data === "isPause" && hi(r), (r = r._next);
    }),
    (t.killTweensOf = function (i, r, a) {
      for (var s = this.getTweensOf(i, a), l = s.length; l--; )
        ii !== s[l] && s[l].kill(i, r);
      return this;
    }),
    (t.getTweensOf = function (i, r) {
      for (var a = [], s = fn(i), l = this._first, c = Xn(r), h; l; )
        l instanceof lt
          ? lv(l._targets, s) &&
            (c
              ? (!ii || (l._initted && l._ts)) &&
                l.globalTime(0) <= r &&
                l.globalTime(l.totalDuration()) > r
              : !r || l.isActive()) &&
            a.push(l)
          : (h = l.getTweensOf(s, r)).length && a.push.apply(a, h),
          (l = l._next);
      return a;
    }),
    (t.tweenTo = function (i, r) {
      r = r || {};
      var a = this,
        s = sn(a, i),
        l = r,
        c = l.startAt,
        h = l.onStart,
        u = l.onStartParams,
        f = l.immediateRender,
        p,
        g = lt.to(
          a,
          pn(
            {
              ease: r.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: s,
              overwrite: "auto",
              duration:
                r.duration ||
                Math.abs(
                  (s - (c && "time" in c ? c.time : a._time)) / a.timeScale()
                ) ||
                We,
              onStart: function () {
                if ((a.pause(), !p)) {
                  var m =
                    r.duration ||
                    Math.abs(
                      (s - (c && "time" in c ? c.time : a._time)) /
                        a.timeScale()
                    );
                  g._dur !== m && Sr(g, m, 0, 1).render(g._time, !0, !0),
                    (p = 1);
                }
                h && h.apply(g, u || []);
              },
            },
            r
          )
        );
      return f ? g.render(0) : g;
    }),
    (t.tweenFromTo = function (i, r, a) {
      return this.tweenTo(r, pn({ startAt: { time: sn(this, i) } }, a));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (i) {
      return i === void 0 && (i = this._time), ph(this, sn(this, i));
    }),
    (t.previousLabel = function (i) {
      return i === void 0 && (i = this._time), ph(this, sn(this, i), 1);
    }),
    (t.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + We);
    }),
    (t.shiftChildren = function (i, r, a) {
      a === void 0 && (a = 0);
      for (var s = this._first, l = this.labels, c; s; )
        s._start >= a && ((s._start += i), (s._end += i)), (s = s._next);
      if (r) for (c in l) l[c] >= a && (l[c] += i);
      return Ri(this);
    }),
    (t.invalidate = function (i) {
      var r = this._first;
      for (this._lock = 0; r; ) r.invalidate(i), (r = r._next);
      return o.prototype.invalidate.call(this, i);
    }),
    (t.clear = function (i) {
      i === void 0 && (i = !0);
      for (var r = this._first, a; r; ) (a = r._next), this.remove(r), (r = a);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Ri(this)
      );
    }),
    (t.totalDuration = function (i) {
      var r = 0,
        a = this,
        s = a._last,
        l = un,
        c,
        h,
        u;
      if (arguments.length)
        return a.timeScale(
          (a._repeat < 0 ? a.duration() : a.totalDuration()) /
            (a.reversed() ? -i : i)
        );
      if (a._dirty) {
        for (u = a.parent; s; )
          (c = s._prev),
            s._dirty && s.totalDuration(),
            (h = s._start),
            h > l && a._sort && s._ts && !a._lock
              ? ((a._lock = 1), (En(a, s, h - s._delay, 1)._lock = 0))
              : (l = h),
            h < 0 &&
              s._ts &&
              ((r -= h),
              ((!u && !a._dp) || (u && u.smoothChildTiming)) &&
                ((a._start += h / a._ts), (a._time -= h), (a._tTime -= h)),
              a.shiftChildren(-h, !1, -1 / 0),
              (l = 0)),
            s._end > r && s._ts && (r = s._end),
            (s = c);
        Sr(a, a === Ze && a._time > r ? a._time : r, 1, 1), (a._dirty = 0);
      }
      return a._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((Ze._ts && (Au(Ze, aa(i, Ze)), (Tu = $t.frame)), $t.frame >= hh)) {
        hh += Qt.autoSleep || 120;
        var r = Ze._first;
        if ((!r || !r._ts) && Qt.autoSleep && $t._listeners.length < 2) {
          for (; r && !r._ts; ) r = r._next;
          r || $t.sleep();
        }
      }
    }),
    e
  );
})(Tr);
pn(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Dv = function (e, t, n, i, r, a, s) {
    var l = new Wt(this._pt, e, t, 0, 1, Qu, null, r),
      c = 0,
      h = 0,
      u,
      f,
      p,
      g,
      d,
      m,
      _,
      b;
    for (
      l.b = n,
        l.e = i,
        n += "",
        i += "",
        (_ = ~i.indexOf("random(")) && (i = us(i)),
        a && ((b = [n, i]), a(b, e, t), (n = b[0]), (i = b[1])),
        f = n.match(co) || [];
      (u = co.exec(i));

    )
      (g = u[0]),
        (d = i.substring(c, u.index)),
        p ? (p = (p + 1) % 5) : d.substr(-5) === "rgba(" && (p = 1),
        g !== f[h++] &&
          ((m = parseFloat(f[h - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: d || h === 1 ? d : ",",
            s: m,
            c: g.charAt(1) === "=" ? pr(m, g) - m : parseFloat(g) - m,
            m: p && p < 4 ? Math.round : 0,
          }),
          (c = co.lastIndex));
    return (
      (l.c = c < i.length ? i.substring(c, i.length) : ""),
      (l.fp = s),
      (yu.test(i) || _) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  gl = function (e, t, n, i, r, a, s, l, c, h) {
    Qe(i) && (i = i(r || 0, e, a));
    var u = e[t],
      f =
        n !== "get"
          ? n
          : Qe(u)
          ? c
            ? e[
                t.indexOf("set") || !Qe(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](c)
            : e[t]()
          : u,
      p = Qe(u) ? (c ? kv : $u) : xl,
      g;
    if (
      (_t(i) &&
        (~i.indexOf("random(") && (i = us(i)),
        i.charAt(1) === "=" &&
          ((g = pr(f, i) + (wt(f) || 0)), (g || g === 0) && (i = g))),
      !h || f !== i || Uo)
    )
      return !isNaN(f * i) && i !== ""
        ? ((g = new Wt(
            this._pt,
            e,
            t,
            +f || 0,
            i - (f || 0),
            typeof u == "boolean" ? zv : Ju,
            0,
            p
          )),
          c && (g.fp = c),
          s && g.modifier(s, this, e),
          (this._pt = g))
        : (!u && !(t in e) && fl(t, i),
          Dv.call(this, e, t, f, i, p, l || Qt.stringFilter, c));
  },
  Iv = function (e, t, n, i, r) {
    if (
      (Qe(e) && (e = ts(e, r, t, n, i)),
      !Rn(e) || (e.style && e.nodeType) || At(e) || xu(e))
    )
      return _t(e) ? ts(e, r, t, n, i) : e;
    var a = {},
      s;
    for (s in e) a[s] = ts(e[s], r, t, n, i);
    return a;
  },
  ju = function (e, t, n, i, r, a) {
    var s, l, c, h;
    if (
      Zt[e] &&
      (s = new Zt[e]()).init(
        r,
        s.rawVars ? t[e] : Iv(t[e], i, r, a, n),
        n,
        i,
        a
      ) !== !1 &&
      ((n._pt = l = new Wt(n._pt, r, e, 0, 1, s.render, s, 0, s.priority)),
      n !== hr)
    )
      for (c = n._ptLookup[n._targets.indexOf(r)], h = s._props.length; h--; )
        c[s._props[h]] = l;
    return s;
  },
  ii,
  Uo,
  _l = function o(e, t, n) {
    var i = e.vars,
      r = i.ease,
      a = i.startAt,
      s = i.immediateRender,
      l = i.lazy,
      c = i.onUpdate,
      h = i.onUpdateParams,
      u = i.callbackScope,
      f = i.runBackwards,
      p = i.yoyoEase,
      g = i.keyframes,
      d = i.autoRevert,
      m = e._dur,
      _ = e._startAt,
      b = e._targets,
      x = e.parent,
      y = x && x.data === "nested" ? x.vars.targets : b,
      M = e._overwrite === "auto" && !cl,
      E = e.timeline,
      C,
      v,
      S,
      L,
      V,
      G,
      F,
      D,
      B,
      H,
      Z,
      W,
      J;
    if (
      (E && (!g || !r) && (r = "none"),
      (e._ease = Di(r, Mr.ease)),
      (e._yEase = p ? Hu(Di(p === !0 ? r : p, Mr.ease)) : 0),
      p &&
        e._yoyo &&
        !e._repeat &&
        ((p = e._yEase), (e._yEase = e._ease), (e._ease = p)),
      (e._from = !E && !!i.runBackwards),
      !E || (g && !i.stagger))
    ) {
      if (
        ((D = b[0] ? Li(b[0]).harness : 0),
        (W = D && i[D.prop]),
        (C = sa(i, dl)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          t < 0 && f && s && !d ? _.render(-1, !0) : _.revert(f && m ? qs : av),
          (_._lazy = 0)),
        a)
      ) {
        if (
          (hi(
            (e._startAt = lt.set(
              b,
              pn(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: x,
                  immediateRender: !0,
                  lazy: !_ && Gt(l),
                  startAt: null,
                  delay: 0,
                  onUpdate: c,
                  onUpdateParams: h,
                  callbackScope: u,
                  stagger: 0,
                },
                a
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Et || (!s && !d)) && e._startAt.revert(qs),
          s && m && t <= 0 && n <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (f && m && !_) {
        if (
          (t && (s = !1),
          (S = pn(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: s && !_ && Gt(l),
              immediateRender: s,
              stagger: 0,
              parent: x,
            },
            C
          )),
          W && (S[D.prop] = W),
          hi((e._startAt = lt.set(b, S))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Et ? e._startAt.revert(qs) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !s)
        )
          o(e._startAt, We, We);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (m && Gt(l)) || (l && !m), v = 0;
        v < b.length;
        v++
      ) {
        if (
          ((V = b[v]),
          (F = V._gsap || ml(b)[v]._gsap),
          (e._ptLookup[v] = H = {}),
          Do[F.id] && oi.length && ra(),
          (Z = y === b ? v : y.indexOf(V)),
          D &&
            (B = new D()).init(V, W || C, e, Z, y) !== !1 &&
            ((e._pt = L =
              new Wt(e._pt, V, B.name, 0, 1, B.render, B, 0, B.priority)),
            B._props.forEach(function (K) {
              H[K] = L;
            }),
            B.priority && (G = 1)),
          !D || W)
        )
          for (S in C)
            Zt[S] && (B = ju(S, C, e, Z, V, y))
              ? B.priority && (G = 1)
              : (H[S] = L =
                  gl.call(e, V, S, "get", C[S], Z, y, 0, i.stringFilter));
        e._op && e._op[v] && e.kill(V, e._op[v]),
          M &&
            e._pt &&
            ((ii = e),
            Ze.killTweensOf(V, H, e.globalTime(t)),
            (J = !e.parent),
            (ii = 0)),
          e._pt && l && (Do[F.id] = 1);
      }
      G && ef(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !J),
      g && t <= 0 && E.render(un, !0, !0);
  },
  Fv = function (e, t, n, i, r, a, s) {
    var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      c,
      h,
      u,
      f;
    if (!l)
      for (
        l = e._ptCache[t] = [], u = e._ptLookup, f = e._targets.length;
        f--;

      ) {
        if (((c = u[f][t]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
        if (!c) return (Uo = 1), (e.vars[t] = "+=0"), _l(e, s), (Uo = 0), 1;
        l.push(c);
      }
    for (f = l.length; f--; )
      (h = l[f]),
        (c = h._pt || h),
        (c.s = (i || i === 0) && !r ? i : c.s + (i || 0) + a * c.c),
        (c.c = n - c.s),
        h.e && (h.e = it(n) + wt(h.e)),
        h.b && (h.b = c.s + wt(h.b));
  },
  Ov = function (e, t) {
    var n = e[0] ? Li(e[0]).harness : 0,
      i = n && n.aliases,
      r,
      a,
      s,
      l;
    if (!i) return t;
    r = ki({}, t);
    for (a in i)
      if (a in r) for (l = i[a].split(","), s = l.length; s--; ) r[l[s]] = r[a];
    return r;
  },
  Nv = function (e, t, n, i) {
    var r = t.ease || i || "power1.inOut",
      a,
      s;
    if (At(t))
      (s = n[e] || (n[e] = [])),
        t.forEach(function (l, c) {
          return s.push({ t: (c / (t.length - 1)) * 100, v: l, e: r });
        });
    else
      for (a in t)
        (s = n[a] || (n[a] = [])),
          a === "ease" || s.push({ t: parseFloat(e), v: t[a], e: r });
  },
  ts = function (e, t, n, i, r) {
    return Qe(e)
      ? e.call(t, n, i, r)
      : _t(e) && ~e.indexOf("random(")
      ? us(e)
      : e;
  },
  Zu = pl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Ku = {};
Vt(Zu + ",id,stagger,delay,duration,paused,scrollTrigger", function (o) {
  return (Ku[o] = 1);
});
var lt = (function (o) {
  mu(e, o);
  function e(n, i, r, a) {
    var s;
    typeof i == "number" && ((r.duration = i), (i = r), (r = null)),
      (s = o.call(this, a ? i : Qr(i)) || this);
    var l = s.vars,
      c = l.duration,
      h = l.delay,
      u = l.immediateRender,
      f = l.stagger,
      p = l.overwrite,
      g = l.keyframes,
      d = l.defaults,
      m = l.scrollTrigger,
      _ = l.yoyoEase,
      b = i.parent || Ze,
      x = (At(n) || xu(n) ? Xn(n[0]) : "length" in i) ? [n] : fn(n),
      y,
      M,
      E,
      C,
      v,
      S,
      L,
      V;
    if (
      ((s._targets = x.length
        ? ml(x)
        : ia(
            "GSAP target " + n + " not found. https://greensock.com",
            !Qt.nullTargetWarn
          ) || []),
      (s._ptLookup = []),
      (s._overwrite = p),
      g || f || Hs(c) || Hs(h))
    ) {
      if (
        ((i = s.vars),
        (y = s.timeline =
          new Bt({
            data: "nested",
            defaults: d || {},
            targets: b && b.data === "nested" ? b.vars.targets : x,
          })),
        y.kill(),
        (y.parent = y._dp = Bn(s)),
        (y._start = 0),
        f || Hs(c) || Hs(h))
      ) {
        if (((C = x.length), (L = f && Nu(f)), Rn(f)))
          for (v in f) ~Zu.indexOf(v) && (V || (V = {}), (V[v] = f[v]));
        for (M = 0; M < C; M++)
          (E = sa(i, Ku)),
            (E.stagger = 0),
            _ && (E.yoyoEase = _),
            V && ki(E, V),
            (S = x[M]),
            (E.duration = +ts(c, Bn(s), M, S, x)),
            (E.delay = (+ts(h, Bn(s), M, S, x) || 0) - s._delay),
            !f &&
              C === 1 &&
              E.delay &&
              ((s._delay = h = E.delay), (s._start += h), (E.delay = 0)),
            y.to(S, E, L ? L(M, S, x) : 0),
            (y._ease = Re.none);
        y.duration() ? (c = h = 0) : (s.timeline = 0);
      } else if (g) {
        Qr(pn(y.vars.defaults, { ease: "none" })),
          (y._ease = Di(g.ease || i.ease || "none"));
        var G = 0,
          F,
          D,
          B;
        if (At(g))
          g.forEach(function (H) {
            return y.to(x, H, ">");
          }),
            y.duration();
        else {
          E = {};
          for (v in g)
            v === "ease" || v === "easeEach" || Nv(v, g[v], E, g.easeEach);
          for (v in E)
            for (
              F = E[v].sort(function (H, Z) {
                return H.t - Z.t;
              }),
                G = 0,
                M = 0;
              M < F.length;
              M++
            )
              (D = F[M]),
                (B = {
                  ease: D.e,
                  duration: ((D.t - (M ? F[M - 1].t : 0)) / 100) * c,
                }),
                (B[v] = D.v),
                y.to(x, B, G),
                (G += B.duration);
          y.duration() < c && y.to({}, { duration: c - y.duration() });
        }
      }
      c || s.duration((c = y.duration()));
    } else s.timeline = 0;
    return (
      p === !0 && !cl && ((ii = Bn(s)), Ze.killTweensOf(x), (ii = 0)),
      En(b, Bn(s), r),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      (u ||
        (!c &&
          !g &&
          s._start === yt(b._time) &&
          Gt(u) &&
          fv(Bn(s)) &&
          b.data !== "nested")) &&
        ((s._tTime = -We), s.render(Math.max(0, -h) || 0)),
      m && Du(Bn(s), m),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (i, r, a) {
      var s = this._time,
        l = this._tDur,
        c = this._dur,
        h = i < 0,
        u = i > l - We && !h ? l : i < We ? 0 : i,
        f,
        p,
        g,
        d,
        m,
        _,
        b,
        x,
        y;
      if (!c) pv(this, i, r, a);
      else if (
        u !== this._tTime ||
        !i ||
        a ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== h)
      ) {
        if (((f = u), (x = this.timeline), this._repeat)) {
          if (((d = c + this._rDelay), this._repeat < -1 && h))
            return this.totalTime(d * 100 + i, r, a);
          if (
            ((f = yt(u % d)),
            u === l
              ? ((g = this._repeat), (f = c))
              : ((g = ~~(u / d)),
                g && g === u / d && ((f = c), g--),
                f > c && (f = c)),
            (_ = this._yoyo && g & 1),
            _ && ((y = this._yEase), (f = c - f)),
            (m = br(this._tTime, d)),
            f === s && !a && this._initted)
          )
            return (this._tTime = u), this;
          g !== m &&
            (x && this._yEase && Xu(x, _),
            this.vars.repeatRefresh &&
              !_ &&
              !this._lock &&
              ((this._lock = a = 1),
              (this.render(yt(d * g), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Iu(this, h ? i : f, a, r, u)) return (this._tTime = 0), this;
          if (s !== this._time) return this;
          if (c !== this._dur) return this.render(i, r, a);
        }
        if (
          ((this._tTime = u),
          (this._time = f),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = b = (y || this._ease)(f / c)),
          this._from && (this.ratio = b = 1 - b),
          f && !s && !r && (dn(this, "onStart"), this._tTime !== u))
        )
          return this;
        for (p = this._pt; p; ) p.r(b, p.d), (p = p._next);
        (x &&
          x.render(
            i < 0 ? i : !f && _ ? -We : x._dur * x._ease(f / this._dur),
            r,
            a
          )) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !r &&
            (h && Io(this, i, r, a), dn(this, "onUpdate")),
          this._repeat &&
            g !== m &&
            this.vars.onRepeat &&
            !r &&
            this.parent &&
            dn(this, "onRepeat"),
          (u === this._tDur || !u) &&
            this._tTime === u &&
            (h && !this._onUpdate && Io(this, i, !0, !0),
            (i || !c) &&
              ((u === this._tDur && this._ts > 0) || (!u && this._ts < 0)) &&
              hi(this, 1),
            !r &&
              !(h && !s) &&
              (u || s || _) &&
              (dn(this, u === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        o.prototype.invalidate.call(this, i)
      );
    }),
    (t.resetTo = function (i, r, a, s) {
      fs || $t.wake(), this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || _l(this, l),
        (c = this._ease(l / this._dur)),
        Fv(this, i, r, a, s, c, l)
          ? this.resetTo(i, r, a, s)
          : (va(this, 0),
            this.parent ||
              Lu(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (t.kill = function (i, r) {
      if ((r === void 0 && (r = "all"), !i && (!r || r === "all")))
        return (this._lazy = this._pt = 0), this.parent ? Xr(this) : this;
      if (this.timeline) {
        var a = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, r, ii && ii.vars.overwrite !== !0)
            ._first || Xr(this),
          this.parent &&
            a !== this.timeline.totalDuration() &&
            Sr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
          this
        );
      }
      var s = this._targets,
        l = i ? fn(i) : s,
        c = this._ptLookup,
        h = this._pt,
        u,
        f,
        p,
        g,
        d,
        m,
        _;
      if ((!r || r === "all") && hv(s, l))
        return r === "all" && (this._pt = 0), Xr(this);
      for (
        u = this._op = this._op || [],
          r !== "all" &&
            (_t(r) &&
              ((d = {}),
              Vt(r, function (b) {
                return (d[b] = 1);
              }),
              (r = d)),
            (r = Ov(s, r))),
          _ = s.length;
        _--;

      )
        if (~l.indexOf(s[_])) {
          (f = c[_]),
            r === "all"
              ? ((u[_] = r), (g = f), (p = {}))
              : ((p = u[_] = u[_] || {}), (g = r));
          for (d in g)
            (m = f && f[d]),
              m &&
                ((!("kill" in m.d) || m.d.kill(d) === !0) && _a(this, m, "_pt"),
                delete f[d]),
              p !== "all" && (p[d] = 1);
        }
      return this._initted && !this._pt && h && Xr(this), this;
    }),
    (e.to = function (i, r) {
      return new e(i, r, arguments[2]);
    }),
    (e.from = function (i, r) {
      return es(1, arguments);
    }),
    (e.delayedCall = function (i, r, a, s) {
      return new e(r, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: r,
        onReverseComplete: r,
        onCompleteParams: a,
        onReverseCompleteParams: a,
        callbackScope: s,
      });
    }),
    (e.fromTo = function (i, r, a) {
      return es(2, arguments);
    }),
    (e.set = function (i, r) {
      return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(i, r);
    }),
    (e.killTweensOf = function (i, r, a) {
      return Ze.killTweensOf(i, r, a);
    }),
    e
  );
})(Tr);
pn(lt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Vt("staggerTo,staggerFrom,staggerFromTo", function (o) {
  lt[o] = function () {
    var e = new Bt(),
      t = Oo.call(arguments, 0);
    return t.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, t);
  };
});
var xl = function (e, t, n) {
    return (e[t] = n);
  },
  $u = function (e, t, n) {
    return e[t](n);
  },
  kv = function (e, t, n, i) {
    return e[t](i.fp, n);
  },
  Uv = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  vl = function (e, t) {
    return Qe(e[t]) ? $u : hl(e[t]) && e.setAttribute ? Uv : xl;
  },
  Ju = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  zv = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Qu = function (e, t) {
    var n = t._pt,
      i = "";
    if (!e && t.b) i = t.b;
    else if (e === 1 && t.e) i = t.e;
    else {
      for (; n; )
        (i =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
          i),
          (n = n._next);
      i += t.c;
    }
    t.set(t.t, t.p, i, t);
  },
  yl = function (e, t) {
    for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
  },
  Bv = function (e, t, n, i) {
    for (var r = this._pt, a; r; )
      (a = r._next), r.p === i && r.modifier(e, t, n), (r = a);
  },
  Gv = function (e) {
    for (var t = this._pt, n, i; t; )
      (i = t._next),
        (t.p === e && !t.op) || t.op === e
          ? _a(this, t, "_pt")
          : t.dep || (n = 1),
        (t = i);
    return !n;
  },
  Vv = function (e, t, n, i) {
    i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
  },
  ef = function (e) {
    for (var t = e._pt, n, i, r, a; t; ) {
      for (n = t._next, i = r; i && i.pr > t.pr; ) i = i._next;
      (t._prev = i ? i._prev : a) ? (t._prev._next = t) : (r = t),
        (t._next = i) ? (i._prev = t) : (a = t),
        (t = n);
    }
    e._pt = r;
  },
  Wt = (function () {
    function o(t, n, i, r, a, s, l, c, h) {
      (this.t = n),
        (this.s = r),
        (this.c = a),
        (this.p = i),
        (this.r = s || Ju),
        (this.d = l || this),
        (this.set = c || xl),
        (this.pr = h || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = o.prototype;
    return (
      (e.modifier = function (n, i, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = Vv),
          (this.m = n),
          (this.mt = r),
          (this.tween = i);
      }),
      o
    );
  })();
Vt(
  pl +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (o) {
    return (dl[o] = 1);
  }
);
en.TweenMax = en.TweenLite = lt;
en.TimelineLite = en.TimelineMax = Bt;
Ze = new Bt({
  sortChildren: !1,
  defaults: Mr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Qt.stringFilter = Wu;
var Er = [],
  js = {},
  Wv = [],
  gh = 0,
  mo = function (e) {
    return (js[e] || Wv).map(function (t) {
      return t();
    });
  },
  zo = function () {
    var e = Date.now(),
      t = [];
    e - gh > 2 &&
      (mo("matchMediaInit"),
      Er.forEach(function (n) {
        var i = n.queries,
          r = n.conditions,
          a,
          s,
          l,
          c;
        for (s in i)
          (a = an.matchMedia(i[s]).matches),
            a && (l = 1),
            a !== r[s] && ((r[s] = a), (c = 1));
        c && (n.revert(), l && t.push(n));
      }),
      mo("matchMediaRevert"),
      t.forEach(function (n) {
        return n.onMatch(n);
      }),
      (gh = e),
      mo("matchMedia"));
  },
  tf = (function () {
    function o(t, n) {
      (this.selector = n && No(n)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        t && this.add(t);
    }
    var e = o.prototype;
    return (
      (e.add = function (n, i, r) {
        Qe(n) && ((r = i), (i = n), (n = Qe));
        var a = this,
          s = function () {
            var c = ot,
              h = a.selector,
              u;
            return (
              c && c !== a && c.data.push(a),
              r && (a.selector = No(r)),
              (ot = a),
              (u = i.apply(a, arguments)),
              Qe(u) && a._r.push(u),
              (ot = c),
              (a.selector = h),
              (a.isReverted = !1),
              u
            );
          };
        return (a.last = s), n === Qe ? s(a) : n ? (a[n] = s) : s;
      }),
      (e.ignore = function (n) {
        var i = ot;
        (ot = null), n(this), (ot = i);
      }),
      (e.getTweens = function () {
        var n = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof o
              ? n.push.apply(n, i.getTweens())
              : i instanceof lt &&
                  !(i.parent && i.parent.data === "nested") &&
                  n.push(i);
          }),
          n
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (n, i) {
        var r = this;
        if (n) {
          var a = this.getTweens();
          this.data.forEach(function (l) {
            l.data === "isFlip" &&
              (l.revert(),
              l.getChildren(!0, !0, !1).forEach(function (c) {
                return a.splice(a.indexOf(c), 1);
              }));
          }),
            a
              .map(function (l) {
                return { g: l.globalTime(0), t: l };
              })
              .sort(function (l, c) {
                return c.g - l.g || -1;
              })
              .forEach(function (l) {
                return l.t.revert(n);
              }),
            this.data.forEach(function (l) {
              return !(l instanceof Tr) && l.revert && l.revert(n);
            }),
            this._r.forEach(function (l) {
              return l(n, r);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (l) {
            return l.kill && l.kill();
          });
        if ((this.clear(), i)) {
          var s = Er.indexOf(this);
          ~s && Er.splice(s, 1);
        }
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      o
    );
  })(),
  Hv = (function () {
    function o(t) {
      (this.contexts = []), (this.scope = t);
    }
    var e = o.prototype;
    return (
      (e.add = function (n, i, r) {
        Rn(n) || (n = { matches: n });
        var a = new tf(0, r || this.scope),
          s = (a.conditions = {}),
          l,
          c,
          h;
        this.contexts.push(a), (i = a.add("onMatch", i)), (a.queries = n);
        for (c in n)
          c === "all"
            ? (h = 1)
            : ((l = an.matchMedia(n[c])),
              l &&
                (Er.indexOf(a) < 0 && Er.push(a),
                (s[c] = l.matches) && (h = 1),
                l.addListener
                  ? l.addListener(zo)
                  : l.addEventListener("change", zo)));
        return h && i(a), this;
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      (e.kill = function (n) {
        this.contexts.forEach(function (i) {
          return i.kill(n, !0);
        });
      }),
      o
    );
  })(),
  oa = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      t.forEach(function (i) {
        return Tv(i);
      });
    },
    timeline: function (e) {
      return new Bt(e);
    },
    getTweensOf: function (e, t) {
      return Ze.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, i) {
      _t(e) && (e = fn(e)[0]);
      var r = Li(e || {}).get,
        a = n ? Pu : Cu;
      return (
        n === "native" && (n = ""),
        e &&
          (t
            ? a(((Zt[t] && Zt[t].get) || r)(e, t, n, i))
            : function (s, l, c) {
                return a(((Zt[s] && Zt[s].get) || r)(e, s, l, c));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = fn(e)), e.length > 1)) {
        var i = e.map(function (h) {
            return tn.quickSetter(h, t, n);
          }),
          r = i.length;
        return function (h) {
          for (var u = r; u--; ) i[u](h);
        };
      }
      e = e[0] || {};
      var a = Zt[t],
        s = Li(e),
        l = (s.harness && (s.harness.aliases || {})[t]) || t,
        c = a
          ? function (h) {
              var u = new a();
              (hr._pt = 0),
                u.init(e, n ? h + n : h, hr, 0, [e]),
                u.render(1, u),
                hr._pt && yl(1, hr);
            }
          : s.set(e, l);
      return a
        ? c
        : function (h) {
            return c(e, l, n ? h + n : h, s, 1);
          };
    },
    quickTo: function (e, t, n) {
      var i,
        r = tn.to(
          e,
          ki(((i = {}), (i[t] = "+=0.1"), (i.paused = !0), i), n || {})
        ),
        a = function (l, c, h) {
          return r.resetTo(t, l, c, h);
        };
      return (a.tween = r), a;
    },
    isTweening: function (e) {
      return Ze.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Di(e.ease, Mr.ease)), uh(Mr, e || {});
    },
    config: function (e) {
      return uh(Qt, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        i = e.plugins,
        r = e.defaults,
        a = e.extendTimeline;
      (i || "").split(",").forEach(function (s) {
        return (
          s && !Zt[s] && !en[s] && ia(t + " effect requires " + s + " plugin.")
        );
      }),
        (ho[t] = function (s, l, c) {
          return n(fn(s), pn(l || {}, r), c);
        }),
        a &&
          (Bt.prototype[t] = function (s, l, c) {
            return this.add(ho[t](s, Rn(l) ? l : (c = l) && {}, this), c);
          });
    },
    registerEase: function (e, t) {
      Re[e] = Di(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Di(e, t) : Re;
    },
    getById: function (e) {
      return Ze.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new Bt(e),
        i,
        r;
      for (
        n.smoothChildTiming = Gt(e.smoothChildTiming),
          Ze.remove(n),
          n._dp = 0,
          n._time = n._tTime = Ze._time,
          i = Ze._first;
        i;

      )
        (r = i._next),
          (t ||
            !(
              !i._dur &&
              i instanceof lt &&
              i.vars.onComplete === i._targets[0]
            )) &&
            En(n, i, i._start - i._delay),
          (i = r);
      return En(Ze, n, 0), n;
    },
    context: function (e, t) {
      return e ? new tf(e, t) : ot;
    },
    matchMedia: function (e) {
      return new Hv(e);
    },
    matchMediaRefresh: function () {
      return (
        Er.forEach(function (e) {
          var t = e.conditions,
            n,
            i;
          for (i in t) t[i] && ((t[i] = !1), (n = 1));
          n && e.revert();
        }) || zo()
      );
    },
    addEventListener: function (e, t) {
      var n = js[e] || (js[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = js[e],
        i = n && n.indexOf(t);
      i >= 0 && n.splice(i, 1);
    },
    utils: {
      wrap: bv,
      wrapYoyo: Sv,
      distribute: Nu,
      random: Uu,
      snap: ku,
      normalize: Mv,
      getUnit: wt,
      clamp: _v,
      splitColor: Gu,
      toArray: fn,
      selector: No,
      mapRange: Bu,
      pipe: vv,
      unitize: yv,
      interpolate: wv,
      shuffle: Ou,
    },
    install: Su,
    effects: ho,
    ticker: $t,
    updateRoot: Bt.updateRoot,
    plugins: Zt,
    globalTimeline: Ze,
    core: {
      PropTween: Wt,
      globals: wu,
      Tween: lt,
      Timeline: Bt,
      Animation: Tr,
      getCache: Li,
      _removeLinkedListItem: _a,
      reverting: function () {
        return Et;
      },
      context: function (e) {
        return e && ot && (ot.data.push(e), (e._ctx = ot)), ot;
      },
      suppressOverwrites: function (e) {
        return (cl = e);
      },
    },
  };
Vt("to,from,fromTo,delayedCall,set,killTweensOf", function (o) {
  return (oa[o] = lt[o]);
});
$t.add(Bt.updateRoot);
hr = oa.to({}, { duration: 0 });
var Xv = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
      n = n._next;
    return n;
  },
  qv = function (e, t) {
    var n = e._targets,
      i,
      r,
      a;
    for (i in t)
      for (r = n.length; r--; )
        (a = e._ptLookup[r][i]),
          a &&
            (a = a.d) &&
            (a._pt && (a = Xv(a, i)),
            a && a.modifier && a.modifier(t[i], e, n[r], i));
  },
  go = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, r, a) {
        a._onInit = function (s) {
          var l, c;
          if (
            (_t(r) &&
              ((l = {}),
              Vt(r, function (h) {
                return (l[h] = 1);
              }),
              (r = l)),
            t)
          ) {
            l = {};
            for (c in r) l[c] = t(r[c]);
            r = l;
          }
          qv(s, r);
        };
      },
    };
  },
  tn =
    oa.registerPlugin(
      {
        name: "attr",
        init: function (e, t, n, i, r) {
          var a, s, l;
          this.tween = n;
          for (a in t)
            (l = e.getAttribute(a) || ""),
              (s = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                t[a],
                i,
                r,
                0,
                0,
                a
              )),
              (s.op = a),
              (s.b = l),
              this._props.push(a);
        },
        render: function (e, t) {
          for (var n = t._pt; n; )
            Et ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var n = t.length; n--; )
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      go("roundProps", ko),
      go("modifiers"),
      go("snap", ku)
    ) || oa;
lt.version = Bt.version = tn.version = "3.11.4";
bu = 1;
_u() && wr();
Re.Power0;
Re.Power1;
Re.Power2;
Re.Power3;
Re.Power4;
Re.Linear;
Re.Quad;
Re.Cubic;
Re.Quart;
Re.Quint;
Re.Strong;
Re.Elastic;
Re.Back;
Re.SteppedEase;
Re.Bounce;
Re.Sine;
Re.Expo;
Re.Circ;
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var _h,
  ri,
  mr,
  Ml,
  Ci,
  xh,
  bl,
  Yv = function () {
    return typeof window < "u";
  },
  qn = {},
  Ti = 180 / Math.PI,
  gr = Math.PI / 180,
  nr = Math.atan2,
  vh = 1e8,
  Sl = /([A-Z])/g,
  jv = /(left|right|width|margin|padding|x)/i,
  Zv = /[\s,\(]\S/,
  Wn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Bo = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  Kv = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  $v = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  Jv = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  nf = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  rf = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  Qv = function (e, t, n) {
    return (e.style[t] = n);
  },
  ey = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  ty = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  ny = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  iy = function (e, t, n, i, r) {
    var a = e._gsap;
    (a.scaleX = a.scaleY = n), a.renderTransform(r, a);
  },
  ry = function (e, t, n, i, r) {
    var a = e._gsap;
    (a[t] = n), a.renderTransform(r, a);
  },
  Ke = "transform",
  vn = Ke + "Origin",
  sy = function (e, t) {
    var n = this,
      i = this.target,
      r = i.style;
    if (e in qn) {
      if (
        ((this.tfm = this.tfm || {}),
        e !== "transform" &&
          ((e = Wn[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (a) {
                return (n.tfm[a] = Gn(i, a));
              })
            : (this.tfm[e] = i._gsap.x ? i._gsap[e] : Gn(i, e))),
        this.props.indexOf(Ke) >= 0)
      )
        return;
      i._gsap.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(vn, t, "")),
        (e = Ke);
    }
    (r || t) && this.props.push(e, t, r[e]);
  },
  sf = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  ay = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      i = t._gsap,
      r,
      a;
    for (r = 0; r < e.length; r += 3)
      e[r + 1]
        ? (t[e[r]] = e[r + 2])
        : e[r + 2]
        ? (n[e[r]] = e[r + 2])
        : n.removeProperty(e[r].replace(Sl, "-$1").toLowerCase());
    if (this.tfm) {
      for (a in this.tfm) i[a] = this.tfm[a];
      i.svg &&
        (i.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (r = bl()),
        r && !r.isStart && !n[Ke] && (sf(n), (i.uncache = 1));
    }
  },
  af = function (e, t) {
    var n = { target: e, props: [], revert: ay, save: sy };
    return (
      t &&
        t.split(",").forEach(function (i) {
          return n.save(i);
        }),
      n
    );
  },
  of,
  Go = function (e, t) {
    var n = ri.createElementNS
      ? ri.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : ri.createElement(e);
    return n.style ? n : ri.createElement(e);
  },
  Pn = function o(e, t, n) {
    var i = getComputedStyle(e);
    return (
      i[t] ||
      i.getPropertyValue(t.replace(Sl, "-$1").toLowerCase()) ||
      i.getPropertyValue(t) ||
      (!n && o(e, Ar(t) || t, 1)) ||
      ""
    );
  },
  yh = "O,Moz,ms,Ms,Webkit".split(","),
  Ar = function (e, t, n) {
    var i = t || Ci,
      r = i.style,
      a = 5;
    if (e in r && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      a-- && !(yh[a] + e in r);

    );
    return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? yh[a] : "") + e;
  },
  Vo = function () {
    Yv() &&
      window.document &&
      ((_h = window),
      (ri = _h.document),
      (mr = ri.documentElement),
      (Ci = Go("div") || { style: {} }),
      Go("div"),
      (Ke = Ar(Ke)),
      (vn = Ke + "Origin"),
      (Ci.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (of = !!Ar("perspective")),
      (bl = tn.core.reverting),
      (Ml = 1));
  },
  _o = function o(e) {
    var t = Go(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      n = this.parentNode,
      i = this.nextSibling,
      r = this.style.cssText,
      a;
    if (
      (mr.appendChild(t),
      t.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (a = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = o);
      } catch {}
    else this._gsapBBox && (a = this._gsapBBox());
    return (
      n && (i ? n.insertBefore(this, i) : n.appendChild(this)),
      mr.removeChild(t),
      (this.style.cssText = r),
      a
    );
  },
  Mh = function (e, t) {
    for (var n = t.length; n--; )
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  lf = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = _o.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === _o || (t = _o.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Mh(e, ["x", "cx", "x1"]) || 0,
            y: +Mh(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  cf = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && lf(e));
  },
  ds = function (e, t) {
    if (t) {
      var n = e.style;
      t in qn && t !== vn && (t = Ke),
        n.removeProperty
          ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") &&
              (t = "-" + t),
            n.removeProperty(t.replace(Sl, "-$1").toLowerCase()))
          : n.removeAttribute(t);
    }
  },
  si = function (e, t, n, i, r, a) {
    var s = new Wt(e._pt, t, n, 0, 1, a ? rf : nf);
    return (e._pt = s), (s.b = i), (s.e = r), e._props.push(n), s;
  },
  bh = { deg: 1, rad: 1, turn: 1 },
  oy = { grid: 1, flex: 1 },
  ui = function o(e, t, n, i) {
    var r = parseFloat(n) || 0,
      a = (n + "").trim().substr((r + "").length) || "px",
      s = Ci.style,
      l = jv.test(t),
      c = e.tagName.toLowerCase() === "svg",
      h = (c ? "client" : "offset") + (l ? "Width" : "Height"),
      u = 100,
      f = i === "px",
      p = i === "%",
      g,
      d,
      m,
      _;
    return i === a || !r || bh[i] || bh[a]
      ? r
      : (a !== "px" && !f && (r = o(e, t, n, "px")),
        (_ = e.getCTM && cf(e)),
        (p || a === "%") && (qn[t] || ~t.indexOf("adius"))
          ? ((g = _ ? e.getBBox()[l ? "width" : "height"] : e[h]),
            it(p ? (r / g) * u : (r / 100) * g))
          : ((s[l ? "width" : "height"] = u + (f ? a : i)),
            (d =
              ~t.indexOf("adius") || (i === "em" && e.appendChild && !c)
                ? e
                : e.parentNode),
            _ && (d = (e.ownerSVGElement || {}).parentNode),
            (!d || d === ri || !d.appendChild) && (d = ri.body),
            (m = d._gsap),
            m && p && m.width && l && m.time === $t.time && !m.uncache
              ? it((r / m.width) * u)
              : ((p || a === "%") &&
                  !oy[Pn(d, "display")] &&
                  (s.position = Pn(e, "position")),
                d === e && (s.position = "static"),
                d.appendChild(Ci),
                (g = Ci[h]),
                d.removeChild(Ci),
                (s.position = "absolute"),
                l && p && ((m = Li(d)), (m.time = $t.time), (m.width = d[h])),
                it(f ? (g * r) / u : g && r ? (u / g) * r : 0))));
  },
  Gn = function (e, t, n, i) {
    var r;
    return (
      Ml || Vo(),
      t in Wn &&
        t !== "transform" &&
        ((t = Wn[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      qn[t] && t !== "transform"
        ? ((r = ms(e, i)),
          (r =
            t !== "transformOrigin"
              ? r[t]
              : r.svg
              ? r.origin
              : ca(Pn(e, vn)) + " " + r.zOrigin + "px"))
        : ((r = e.style[t]),
          (!r || r === "auto" || i || ~(r + "").indexOf("calc(")) &&
            (r =
              (la[t] && la[t](e, t, n)) ||
              Pn(e, t) ||
              Eu(e, t) ||
              (t === "opacity" ? 1 : 0))),
      n && !~(r + "").trim().indexOf(" ") ? ui(e, t, r, n) + n : r
    );
  },
  ly = function (e, t, n, i) {
    if (!n || n === "none") {
      var r = Ar(t, e, 1),
        a = r && Pn(e, r, 1);
      a && a !== n
        ? ((t = r), (n = a))
        : t === "borderColor" && (n = Pn(e, "borderTopColor"));
    }
    var s = new Wt(this._pt, e.style, t, 0, 1, Qu),
      l = 0,
      c = 0,
      h,
      u,
      f,
      p,
      g,
      d,
      m,
      _,
      b,
      x,
      y,
      M;
    if (
      ((s.b = n),
      (s.e = i),
      (n += ""),
      (i += ""),
      i === "auto" && ((e.style[t] = i), (i = Pn(e, t) || i), (e.style[t] = n)),
      (h = [n, i]),
      Wu(h),
      (n = h[0]),
      (i = h[1]),
      (f = n.match(cr) || []),
      (M = i.match(cr) || []),
      M.length)
    ) {
      for (; (u = cr.exec(i)); )
        (m = u[0]),
          (b = i.substring(l, u.index)),
          g
            ? (g = (g + 1) % 5)
            : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (g = 1),
          m !== (d = f[c++] || "") &&
            ((p = parseFloat(d) || 0),
            (y = d.substr((p + "").length)),
            m.charAt(1) === "=" && (m = pr(p, m) + y),
            (_ = parseFloat(m)),
            (x = m.substr((_ + "").length)),
            (l = cr.lastIndex - x.length),
            x ||
              ((x = x || Qt.units[t] || y),
              l === i.length && ((i += x), (s.e += x))),
            y !== x && (p = ui(e, t, d, x) || 0),
            (s._pt = {
              _next: s._pt,
              p: b || c === 1 ? b : ",",
              s: p,
              c: _ - p,
              m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
            }));
      s.c = l < i.length ? i.substring(l, i.length) : "";
    } else s.r = t === "display" && i === "none" ? rf : nf;
    return yu.test(i) && (s.e = 0), (this._pt = s), s;
  },
  Sh = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  cy = function (e) {
    var t = e.split(" "),
      n = t[0],
      i = t[1] || "50%";
    return (
      (n === "top" || n === "bottom" || i === "left" || i === "right") &&
        ((e = n), (n = i), (i = e)),
      (t[0] = Sh[n] || n),
      (t[1] = Sh[i] || i),
      t.join(" ")
    );
  },
  hy = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        i = n.style,
        r = t.u,
        a = n._gsap,
        s,
        l,
        c;
      if (r === "all" || r === !0) (i.cssText = ""), (l = 1);
      else
        for (r = r.split(","), c = r.length; --c > -1; )
          (s = r[c]),
            qn[s] && ((l = 1), (s = s === "transformOrigin" ? vn : Ke)),
            ds(n, s);
      l &&
        (ds(n, Ke),
        a &&
          (a.svg && n.removeAttribute("transform"),
          ms(n, 1),
          (a.uncache = 1),
          sf(i)));
    }
  },
  la = {
    clearProps: function (e, t, n, i, r) {
      if (r.data !== "isFromStart") {
        var a = (e._pt = new Wt(e._pt, t, n, 0, 0, hy));
        return (a.u = i), (a.pr = -10), (a.tween = r), e._props.push(n), 1;
      }
    },
  },
  ps = [1, 0, 0, 1, 0, 0],
  hf = {},
  uf = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  wh = function (e) {
    var t = Pn(e, Ke);
    return uf(t) ? ps : t.substr(7).match(vu).map(it);
  },
  wl = function (e, t) {
    var n = e._gsap || Li(e),
      i = e.style,
      r = wh(e),
      a,
      s,
      l,
      c;
    return n.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (r = [l.a, l.b, l.c, l.d, l.e, l.f]),
        r.join(",") === "1,0,0,1,0,0" ? ps : r)
      : (r === ps &&
          !e.offsetParent &&
          e !== mr &&
          !n.svg &&
          ((l = i.display),
          (i.display = "block"),
          (a = e.parentNode),
          (!a || !e.offsetParent) &&
            ((c = 1), (s = e.nextElementSibling), mr.appendChild(e)),
          (r = wh(e)),
          l ? (i.display = l) : ds(e, "display"),
          c &&
            (s
              ? a.insertBefore(e, s)
              : a
              ? a.appendChild(e)
              : mr.removeChild(e))),
        t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
  },
  Wo = function (e, t, n, i, r, a) {
    var s = e._gsap,
      l = r || wl(e, !0),
      c = s.xOrigin || 0,
      h = s.yOrigin || 0,
      u = s.xOffset || 0,
      f = s.yOffset || 0,
      p = l[0],
      g = l[1],
      d = l[2],
      m = l[3],
      _ = l[4],
      b = l[5],
      x = t.split(" "),
      y = parseFloat(x[0]) || 0,
      M = parseFloat(x[1]) || 0,
      E,
      C,
      v,
      S;
    n
      ? l !== ps &&
        (C = p * m - g * d) &&
        ((v = y * (m / C) + M * (-d / C) + (d * b - m * _) / C),
        (S = y * (-g / C) + M * (p / C) - (p * b - g * _) / C),
        (y = v),
        (M = S))
      : ((E = lf(e)),
        (y = E.x + (~x[0].indexOf("%") ? (y / 100) * E.width : y)),
        (M = E.y + (~(x[1] || x[0]).indexOf("%") ? (M / 100) * E.height : M))),
      i || (i !== !1 && s.smooth)
        ? ((_ = y - c),
          (b = M - h),
          (s.xOffset = u + (_ * p + b * d) - _),
          (s.yOffset = f + (_ * g + b * m) - b))
        : (s.xOffset = s.yOffset = 0),
      (s.xOrigin = y),
      (s.yOrigin = M),
      (s.smooth = !!i),
      (s.origin = t),
      (s.originIsAbsolute = !!n),
      (e.style[vn] = "0px 0px"),
      a &&
        (si(a, s, "xOrigin", c, y),
        si(a, s, "yOrigin", h, M),
        si(a, s, "xOffset", u, s.xOffset),
        si(a, s, "yOffset", f, s.yOffset)),
      e.setAttribute("data-svg-origin", y + " " + M);
  },
  ms = function (e, t) {
    var n = e._gsap || new Yu(e);
    if ("x" in n && !t && !n.uncache) return n;
    var i = e.style,
      r = n.scaleX < 0,
      a = "px",
      s = "deg",
      l = getComputedStyle(e),
      c = Pn(e, vn) || "0",
      h,
      u,
      f,
      p,
      g,
      d,
      m,
      _,
      b,
      x,
      y,
      M,
      E,
      C,
      v,
      S,
      L,
      V,
      G,
      F,
      D,
      B,
      H,
      Z,
      W,
      J,
      K,
      ue,
      U,
      $,
      ee,
      O;
    return (
      (h = u = f = d = m = _ = b = x = y = 0),
      (p = g = 1),
      (n.svg = !!(e.getCTM && cf(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (i[Ke] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[Ke] !== "none" ? l[Ke] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (C = wl(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((W = e.getBBox()),
            (c = n.xOrigin - W.x + "px " + (n.yOrigin - W.y) + "px"),
            (Z = ""))
          : (Z = !t && e.getAttribute("data-svg-origin")),
        Wo(e, Z || c, !!Z || n.originIsAbsolute, n.smooth !== !1, C)),
      (M = n.xOrigin || 0),
      (E = n.yOrigin || 0),
      C !== ps &&
        ((V = C[0]),
        (G = C[1]),
        (F = C[2]),
        (D = C[3]),
        (h = B = C[4]),
        (u = H = C[5]),
        C.length === 6
          ? ((p = Math.sqrt(V * V + G * G)),
            (g = Math.sqrt(D * D + F * F)),
            (d = V || G ? nr(G, V) * Ti : 0),
            (b = F || D ? nr(F, D) * Ti + d : 0),
            b && (g *= Math.abs(Math.cos(b * gr))),
            n.svg && ((h -= M - (M * V + E * F)), (u -= E - (M * G + E * D))))
          : ((O = C[6]),
            ($ = C[7]),
            (K = C[8]),
            (ue = C[9]),
            (U = C[10]),
            (ee = C[11]),
            (h = C[12]),
            (u = C[13]),
            (f = C[14]),
            (v = nr(O, U)),
            (m = v * Ti),
            v &&
              ((S = Math.cos(-v)),
              (L = Math.sin(-v)),
              (Z = B * S + K * L),
              (W = H * S + ue * L),
              (J = O * S + U * L),
              (K = B * -L + K * S),
              (ue = H * -L + ue * S),
              (U = O * -L + U * S),
              (ee = $ * -L + ee * S),
              (B = Z),
              (H = W),
              (O = J)),
            (v = nr(-F, U)),
            (_ = v * Ti),
            v &&
              ((S = Math.cos(-v)),
              (L = Math.sin(-v)),
              (Z = V * S - K * L),
              (W = G * S - ue * L),
              (J = F * S - U * L),
              (ee = D * L + ee * S),
              (V = Z),
              (G = W),
              (F = J)),
            (v = nr(G, V)),
            (d = v * Ti),
            v &&
              ((S = Math.cos(v)),
              (L = Math.sin(v)),
              (Z = V * S + G * L),
              (W = B * S + H * L),
              (G = G * S - V * L),
              (H = H * S - B * L),
              (V = Z),
              (B = W)),
            m &&
              Math.abs(m) + Math.abs(d) > 359.9 &&
              ((m = d = 0), (_ = 180 - _)),
            (p = it(Math.sqrt(V * V + G * G + F * F))),
            (g = it(Math.sqrt(H * H + O * O))),
            (v = nr(B, H)),
            (b = Math.abs(v) > 2e-4 ? v * Ti : 0),
            (y = ee ? 1 / (ee < 0 ? -ee : ee) : 0)),
        n.svg &&
          ((Z = e.getAttribute("transform")),
          (n.forceCSS = e.setAttribute("transform", "") || !uf(Pn(e, Ke))),
          Z && e.setAttribute("transform", Z))),
      Math.abs(b) > 90 &&
        Math.abs(b) < 270 &&
        (r
          ? ((p *= -1), (b += d <= 0 ? 180 : -180), (d += d <= 0 ? 180 : -180))
          : ((g *= -1), (b += b <= 0 ? 180 : -180))),
      (t = t || n.uncache),
      (n.x =
        h -
        ((n.xPercent =
          h &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-h) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        a),
      (n.y =
        u -
        ((n.yPercent =
          u &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        a),
      (n.z = f + a),
      (n.scaleX = it(p)),
      (n.scaleY = it(g)),
      (n.rotation = it(d) + s),
      (n.rotationX = it(m) + s),
      (n.rotationY = it(_) + s),
      (n.skewX = b + s),
      (n.skewY = x + s),
      (n.transformPerspective = y + a),
      (n.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (i[vn] = ca(c)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = Qt.force3D),
      (n.renderTransform = n.svg ? fy : of ? ff : uy),
      (n.uncache = 0),
      n
    );
  },
  ca = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  xo = function (e, t, n) {
    var i = wt(t);
    return it(parseFloat(t) + parseFloat(ui(e, "x", n + "px", i))) + i;
  },
  uy = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      ff(e, t);
  },
  Mi = "0deg",
  Gr = "0px",
  bi = ") ",
  ff = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      r = n.yPercent,
      a = n.x,
      s = n.y,
      l = n.z,
      c = n.rotation,
      h = n.rotationY,
      u = n.rotationX,
      f = n.skewX,
      p = n.skewY,
      g = n.scaleX,
      d = n.scaleY,
      m = n.transformPerspective,
      _ = n.force3D,
      b = n.target,
      x = n.zOrigin,
      y = "",
      M = (_ === "auto" && e && e !== 1) || _ === !0;
    if (x && (u !== Mi || h !== Mi)) {
      var E = parseFloat(h) * gr,
        C = Math.sin(E),
        v = Math.cos(E),
        S;
      (E = parseFloat(u) * gr),
        (S = Math.cos(E)),
        (a = xo(b, a, C * S * -x)),
        (s = xo(b, s, -Math.sin(E) * -x)),
        (l = xo(b, l, v * S * -x + x));
    }
    m !== Gr && (y += "perspective(" + m + bi),
      (i || r) && (y += "translate(" + i + "%, " + r + "%) "),
      (M || a !== Gr || s !== Gr || l !== Gr) &&
        (y +=
          l !== Gr || M
            ? "translate3d(" + a + ", " + s + ", " + l + ") "
            : "translate(" + a + ", " + s + bi),
      c !== Mi && (y += "rotate(" + c + bi),
      h !== Mi && (y += "rotateY(" + h + bi),
      u !== Mi && (y += "rotateX(" + u + bi),
      (f !== Mi || p !== Mi) && (y += "skew(" + f + ", " + p + bi),
      (g !== 1 || d !== 1) && (y += "scale(" + g + ", " + d + bi),
      (b.style[Ke] = y || "translate(0, 0)");
  },
  fy = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      r = n.yPercent,
      a = n.x,
      s = n.y,
      l = n.rotation,
      c = n.skewX,
      h = n.skewY,
      u = n.scaleX,
      f = n.scaleY,
      p = n.target,
      g = n.xOrigin,
      d = n.yOrigin,
      m = n.xOffset,
      _ = n.yOffset,
      b = n.forceCSS,
      x = parseFloat(a),
      y = parseFloat(s),
      M,
      E,
      C,
      v,
      S;
    (l = parseFloat(l)),
      (c = parseFloat(c)),
      (h = parseFloat(h)),
      h && ((h = parseFloat(h)), (c += h), (l += h)),
      l || c
        ? ((l *= gr),
          (c *= gr),
          (M = Math.cos(l) * u),
          (E = Math.sin(l) * u),
          (C = Math.sin(l - c) * -f),
          (v = Math.cos(l - c) * f),
          c &&
            ((h *= gr),
            (S = Math.tan(c - h)),
            (S = Math.sqrt(1 + S * S)),
            (C *= S),
            (v *= S),
            h &&
              ((S = Math.tan(h)),
              (S = Math.sqrt(1 + S * S)),
              (M *= S),
              (E *= S))),
          (M = it(M)),
          (E = it(E)),
          (C = it(C)),
          (v = it(v)))
        : ((M = u), (v = f), (E = C = 0)),
      ((x && !~(a + "").indexOf("px")) || (y && !~(s + "").indexOf("px"))) &&
        ((x = ui(p, "x", a, "px")), (y = ui(p, "y", s, "px"))),
      (g || d || m || _) &&
        ((x = it(x + g - (g * M + d * C) + m)),
        (y = it(y + d - (g * E + d * v) + _))),
      (i || r) &&
        ((S = p.getBBox()),
        (x = it(x + (i / 100) * S.width)),
        (y = it(y + (r / 100) * S.height))),
      (S =
        "matrix(" + M + "," + E + "," + C + "," + v + "," + x + "," + y + ")"),
      p.setAttribute("transform", S),
      b && (p.style[Ke] = S);
  },
  dy = function (e, t, n, i, r) {
    var a = 360,
      s = _t(r),
      l = parseFloat(r) * (s && ~r.indexOf("rad") ? Ti : 1),
      c = l - i,
      h = i + c + "deg",
      u,
      f;
    return (
      s &&
        ((u = r.split("_")[1]),
        u === "short" && ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -a)),
        u === "cw" && c < 0
          ? (c = ((c + a * vh) % a) - ~~(c / a) * a)
          : u === "ccw" && c > 0 && (c = ((c - a * vh) % a) - ~~(c / a) * a)),
      (e._pt = f = new Wt(e._pt, t, n, i, c, Kv)),
      (f.e = h),
      (f.u = "deg"),
      e._props.push(n),
      f
    );
  },
  Th = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  py = function (e, t, n) {
    var i = Th({}, n._gsap),
      r = "perspective,force3D,transformOrigin,svgOrigin",
      a = n.style,
      s,
      l,
      c,
      h,
      u,
      f,
      p,
      g;
    i.svg
      ? ((c = n.getAttribute("transform")),
        n.setAttribute("transform", ""),
        (a[Ke] = t),
        (s = ms(n, 1)),
        ds(n, Ke),
        n.setAttribute("transform", c))
      : ((c = getComputedStyle(n)[Ke]),
        (a[Ke] = t),
        (s = ms(n, 1)),
        (a[Ke] = c));
    for (l in qn)
      (c = i[l]),
        (h = s[l]),
        c !== h &&
          r.indexOf(l) < 0 &&
          ((p = wt(c)),
          (g = wt(h)),
          (u = p !== g ? ui(n, l, c, g) : parseFloat(c)),
          (f = parseFloat(h)),
          (e._pt = new Wt(e._pt, s, l, u, f - u, Bo)),
          (e._pt.u = g || 0),
          e._props.push(l));
    Th(s, i);
  };
Vt("padding,margin,Width,Radius", function (o, e) {
  var t = "Top",
    n = "Right",
    i = "Bottom",
    r = "Left",
    a = (e < 3 ? [t, n, i, r] : [t + r, t + n, i + n, i + r]).map(function (s) {
      return e < 2 ? o + s : "border" + s + o;
    });
  la[e > 1 ? "border" + o : o] = function (s, l, c, h, u) {
    var f, p;
    if (arguments.length < 4)
      return (
        (f = a.map(function (g) {
          return Gn(s, g, c);
        })),
        (p = f.join(" ")),
        p.split(f[0]).length === 5 ? f[0] : p
      );
    (f = (h + "").split(" ")),
      (p = {}),
      a.forEach(function (g, d) {
        return (p[g] = f[d] = f[d] || f[((d - 1) / 2) | 0]);
      }),
      s.init(l, p, u);
  };
});
var df = {
  name: "css",
  register: Vo,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, i, r) {
    var a = this._props,
      s = e.style,
      l = n.vars.startAt,
      c,
      h,
      u,
      f,
      p,
      g,
      d,
      m,
      _,
      b,
      x,
      y,
      M,
      E,
      C,
      v;
    Ml || Vo(),
      (this.styles = this.styles || af(e)),
      (v = this.styles.props),
      (this.tween = n);
    for (d in t)
      if (d !== "autoRound" && ((h = t[d]), !(Zt[d] && ju(d, t, n, i, e, r)))) {
        if (
          ((p = typeof h),
          (g = la[d]),
          p === "function" && ((h = h.call(n, i, e, r)), (p = typeof h)),
          p === "string" && ~h.indexOf("random(") && (h = us(h)),
          g)
        )
          g(this, e, d, h, n) && (C = 1);
        else if (d.substr(0, 2) === "--")
          (c = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
            (h += ""),
            (li.lastIndex = 0),
            li.test(c) || ((m = wt(c)), (_ = wt(h))),
            _ ? m !== _ && (c = ui(e, d, c, _) + _) : m && (h += m),
            this.add(s, "setProperty", c, h, i, r, 0, 0, d),
            a.push(d),
            v.push(d, 0, s[d]);
        else if (p !== "undefined") {
          if (
            (l && d in l
              ? ((c = typeof l[d] == "function" ? l[d].call(n, i, e, r) : l[d]),
                _t(c) && ~c.indexOf("random(") && (c = us(c)),
                wt(c + "") || (c += Qt.units[d] || wt(Gn(e, d)) || ""),
                (c + "").charAt(1) === "=" && (c = Gn(e, d)))
              : (c = Gn(e, d)),
            (f = parseFloat(c)),
            (b = p === "string" && h.charAt(1) === "=" && h.substr(0, 2)),
            b && (h = h.substr(2)),
            (u = parseFloat(h)),
            d in Wn &&
              (d === "autoAlpha" &&
                (f === 1 && Gn(e, "visibility") === "hidden" && u && (f = 0),
                v.push("visibility", 0, s.visibility),
                si(
                  this,
                  s,
                  "visibility",
                  f ? "inherit" : "hidden",
                  u ? "inherit" : "hidden",
                  !u
                )),
              d !== "scale" &&
                d !== "transform" &&
                ((d = Wn[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
            (x = d in qn),
            x)
          ) {
            if (
              (this.styles.save(d),
              y ||
                ((M = e._gsap),
                (M.renderTransform && !t.parseTransform) ||
                  ms(e, t.parseTransform),
                (E = t.smoothOrigin !== !1 && M.smooth),
                (y = this._pt =
                  new Wt(this._pt, s, Ke, 0, 1, M.renderTransform, M, 0, -1)),
                (y.dep = 1)),
              d === "scale")
            )
              (this._pt = new Wt(
                this._pt,
                M,
                "scaleY",
                M.scaleY,
                (b ? pr(M.scaleY, b + u) : u) - M.scaleY || 0,
                Bo
              )),
                (this._pt.u = 0),
                a.push("scaleY", d),
                (d += "X");
            else if (d === "transformOrigin") {
              v.push(vn, 0, s[vn]),
                (h = cy(h)),
                M.svg
                  ? Wo(e, h, 0, E, 0, this)
                  : ((_ = parseFloat(h.split(" ")[2]) || 0),
                    _ !== M.zOrigin && si(this, M, "zOrigin", M.zOrigin, _),
                    si(this, s, d, ca(c), ca(h)));
              continue;
            } else if (d === "svgOrigin") {
              Wo(e, h, 1, E, 0, this);
              continue;
            } else if (d in hf) {
              dy(this, M, d, f, b ? pr(f, b + h) : h);
              continue;
            } else if (d === "smoothOrigin") {
              si(this, M, "smooth", M.smooth, h);
              continue;
            } else if (d === "force3D") {
              M[d] = h;
              continue;
            } else if (d === "transform") {
              py(this, h, e);
              continue;
            }
          } else d in s || (d = Ar(d) || d);
          if (x || ((u || u === 0) && (f || f === 0) && !Zv.test(h) && d in s))
            (m = (c + "").substr((f + "").length)),
              u || (u = 0),
              (_ = wt(h) || (d in Qt.units ? Qt.units[d] : m)),
              m !== _ && (f = ui(e, d, c, _)),
              (this._pt = new Wt(
                this._pt,
                x ? M : s,
                d,
                f,
                (b ? pr(f, b + u) : u) - f,
                !x && (_ === "px" || d === "zIndex") && t.autoRound !== !1
                  ? Jv
                  : Bo
              )),
              (this._pt.u = _ || 0),
              m !== _ && _ !== "%" && ((this._pt.b = c), (this._pt.r = $v));
          else if (d in s) ly.call(this, e, d, c, b ? b + h : h);
          else if (d in e) this.add(e, d, c || e[d], b ? b + h : h, i, r);
          else if (d !== "parseTransform") {
            fl(d, h);
            continue;
          }
          x || (d in s ? v.push(d, 0, s[d]) : v.push(d, 1, c || e[d])),
            a.push(d);
        }
      }
    C && ef(this);
  },
  render: function (e, t) {
    if (t.tween._time || !bl())
      for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
    else t.styles.revert();
  },
  get: Gn,
  aliases: Wn,
  getSetter: function (e, t, n) {
    var i = Wn[t];
    return (
      i && i.indexOf(",") < 0 && (t = i),
      t in qn && t !== vn && (e._gsap.x || Gn(e, "x"))
        ? n && xh === n
          ? t === "scale"
            ? ny
            : ty
          : (xh = n || {}) && (t === "scale" ? iy : ry)
        : e.style && !hl(e.style[t])
        ? Qv
        : ~t.indexOf("-")
        ? ey
        : vl(e, t)
    );
  },
  core: { _removeProperty: ds, _getMatrix: wl },
};
tn.utils.checkPrefix = Ar;
tn.core.getStyleSaver = af;
(function (o, e, t, n) {
  var i = Vt(o + "," + e + "," + t, function (r) {
    qn[r] = 1;
  });
  Vt(e, function (r) {
    (Qt.units[r] = "deg"), (hf[r] = 1);
  }),
    (Wn[i[13]] = o + "," + e),
    Vt(n, function (r) {
      var a = r.split(":");
      Wn[a[1]] = i[a[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Vt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (o) {
    Qt.units[o] = "px";
  }
);
tn.registerPlugin(df);
var Tl = tn.registerPlugin(df) || tn;
Tl.core.Tween;
class my {
  constructor(e, t) {
    (this.player = e), (this.game = t), this.lastdirection;
  }
  update() {
    const e = this.player.keyPressed;
    e.left && this.movePlayer(-1),
      e.right && this.movePlayer(1),
      !e.right && !e.left && this.returnRotation(),
      e.attack &&
        !this.player.isAttacking &&
        this.player.bullets.push(new pu(this.player, 1e3, this.game)),
      this.player.mesh &&
        (this.checkBulletCollision(), this.checkAsteroidCollision());
  }
  movePlayer(e) {
    let t = Math.round(this.player.mesh.rotation.z * 100) / 100,
      n = 0.02 * e;
    const i = t + n;
    (i < -0.7 || i > 0.7) && (n = 0),
      (this.player.mesh.rotation.z += n),
      (this.player.mesh.position.x -= 30 * e),
      (this.lastdirection = e);
  }
  returnRotation() {
    let e = Math.round(this.player.mesh.rotation.z * 100) / 100;
    const t = e + 0.02 * -this.lastdirection;
    (t < -0.7 || t > 0.7) && (this.lastdirection *= -1),
      (this.player.mesh.rotation.z += e !== 0 ? 0.02 * -this.lastdirection : 0);
  }
  checkBulletCollision() {
    let e = 0,
      t = this.game.enemyShips;
    t.length < 1 ||
      (t.forEach((n, i) => {
        n.bullets.forEach((a, s) => {
          const l = An(this.player.mesh, a.mesh1),
            c = An(this.player.mesh, a.mesh2);
          (l || c) &&
            ((e += (l ? 0.2 : 0) + (c ? 0.2 : 0)),
            t[i].bullets.splice(s, 1),
            this.game.scene.remove(a.mesh1),
            this.game.scene.remove(a.mesh2));
        });
      }),
      (this.game.enemyShips = t),
      this.ReduceHealth(e));
  }
  checkAsteroidCollision() {
    let e = 0,
      t = this.game.asteroids;
    t.length < 1 ||
      (t.forEach((n, i) => {
        n.mesh &&
          An(this.player.mesh, n.mesh) &&
          ((e += 10), t.splice(i, 1), this.game.scene.remove(n.mesh));
      }),
      (this.game.asteroids = t),
      this.ReduceHealth(e));
  }
  ReduceHealth(e) {
    (this.player.health[2] -= e),
      this.player.health[2] < 0 &&
        ((this.player.health[1] += this.player.health[2]),
        (this.player.health[2] = 0),
        this.player.health[1] < 0 && (this.player.health[1] = 0));
    for (let n = 1; n < 3; n++)
      Tl.to("#" + this.player.healthBars[n], {
        height: (90 * this.player.health[n]) / 100 + "px",
      });
    this.player.health[1] + this.player.health[2] <= 0 &&
      (this.game.GameControl.gamestate =
        this.game.GameControl.GAMESTATE.GAMEOVER);
  }
}
class gy {
  constructor(e, t) {
    this.myGamepad,
      (this.player = t.player),
      (this.game = t),
      (this.gameControl = t.GameControl),
      (this.connected = !0),
      (this.gamepadIndex = e),
      (this.framesElapsed = 0),
      this.lastFramePressed,
      addEventListener("gamepadconnected", (n) => {
        console.log(n),
          !this.connected &&
            this.gamepadIndex === n.gamepad.index &&
            (this.connected = !0);
      }),
      addEventListener("gamepaddisconnected", (n) => {
        this.gamepadIndex === n.gamepad.index && (this.connected = !1);
      });
  }
  update() {
    if (
      (this.framesElapsed++,
      (this.myGamepad = navigator.getGamepads()[this.gamepadIndex]),
      Math.abs(this.framesElapsed - this.lastFramePressed) > 10 ||
        this.lastFramePressed === void 0)
    ) {
      var e = this.applyDeadzone(this.myGamepad.axes[0], 0.25),
        t = this.applyDeadzone(this.myGamepad.axes[1], 0.25),
        n = this.applyDeadzone(this.myGamepad.axes[9], 0.25);
      this.myGamepad.buttons
        .map((l) => l.pressed)
        .forEach((l, c) => {
          if (l)
            switch (c) {
              case 1:
                if (
                  ((this.lastFramePressed = this.framesElapsed),
                  this.gameControl.gamestate ===
                    this.gameControl.GAMESTATE.RUNNING)
                )
                  this.player.keyPressed.attack = !0;
                else if (
                  this.gameControl.gamestate ===
                    this.gameControl.GAMESTATE.GAMEOVER ||
                  this.gameControl.gamestate ===
                    this.gameControl.GAMESTATE.PAUSED
                )
                  if (this.gameControl.MenuSelection === 0) {
                    this.gameControl.gamestate ===
                    this.gameControl.GAMESTATE.GAMEOVER
                      ? this.gameControl.Restart()
                      : this.gameControl.gamestate ===
                          this.gameControl.GAMESTATE.PAUSED &&
                        (this.gameControl.gamestate =
                          this.gameControl.GAMESTATE.RUNNING);
                    break;
                  } else
                    (this.gameControl.gamestate =
                      this.gameControl.GAMESTATE.MENU),
                      (document.getElementById("playerControls").style.display =
                        "flex");
                break;
              case 9:
                (this.lastFramePressed = this.framesElapsed),
                  this.gameControl.gamestate === this.gameControl.GAMESTATE.MENU
                    ? this.gameControl.Restart()
                    : this.gameControl.togglePause();
                break;
            }
        }),
        this.myGamepad.buttons.every((l) => !l.pressed) &&
          (this.player.keyPressed.attack = !1);
      let i, r, a, s;
      if (
        (this.myGamepad.buttons[12] &&
        this.myGamepad.buttons[13] &&
        this.myGamepad.buttons[14] &&
        this.myGamepad.buttons[15]
          ? ((i = this.myGamepad.buttons[12].pressed || n < -0.9),
            (r = this.myGamepad.buttons[13].pressed || n === 0),
            (a = this.myGamepad.buttons[14].pressed || (n > 0 && n <= 1)),
            (s = this.myGamepad.buttons[15].pressed || (n < 0 && n > -0.9)))
          : ((i = n < -0.9),
            (r = n === 0),
            (a = n > 0 && n <= 1),
            (s = n < 0 && n > -0.9)),
        e === 0 &&
          !a &&
          !s &&
          ((this.player.keyPressed.left = !1),
          (this.player.keyPressed.right = !1)),
        t > 0 || i)
      ) {
        (this.lastFramePressed = this.framesElapsed),
          (this.gameControl.gamestate === this.gameControl.GAMESTATE.GAMEOVER ||
            this.gameControl.gamestate === this.gameControl.GAMESTATE.PAUSED) &&
            (this.gameControl.MenuSelection =
              this.gameControl.MenuSelection === 0 ? 1 : 0);
        return;
      }
      if (t < 0 || r) {
        (this.lastFramePressed = this.framesElapsed),
          (this.gameControl.gamestate === this.gameControl.GAMESTATE.GAMEOVER ||
            this.gameControl.gamestate === this.gameControl.GAMESTATE.PAUSED) &&
            (this.gameControl.MenuSelection =
              this.gameControl.MenuSelection === 0 ? 1 : 0);
        return;
      }
      if (e > 0 || s) {
        (this.lastFramePressed = this.framesElapsed),
          this.game.GameControl.gamestate ===
            this.game.GameControl.GAMESTATE.RUNNING &&
            (this.player.keyPressed.right = !0);
        return;
      }
      if (e < 0 || a) {
        (this.lastFramePressed = this.framesElapsed),
          this.game.GameControl.gamestate ===
            this.game.GameControl.GAMESTATE.RUNNING &&
            (this.player.keyPressed.left = !0);
        return;
      }
    }
  }
  applyDeadzone(e, t, n) {
    return (
      (n = (Math.abs(e) - t) / (1 - t)), n < 0 && (n = 0), n * (e > 0 ? 1 : -1)
    );
  }
}
class _y {
  constructor({ game: e }) {
    (this.scene = e.scene),
      (this.world = e.world),
      (this.manager = e.loadingManager),
      (this.game = e),
      (this.scale = 1),
      (this.loader = new ll(this.manager)),
      (this.keyPressed = { attack: !1, left: !1, right: !1 }),
      this.loadModel(),
      (this.healthBars = { 1: "playerHealth2", 2: "playerHealth1" });
  }
  loadModel() {
    this.loader.load("../resources/FBXs/SpaceShip - Blue.fbx", (e) => {
      (this.mixer = new ol(e)),
        e.scale.setScalar(this.scale),
        (this.mesh = e),
        this.scene.add(e);
    });
  }
  Restart() {
    (this.health = { 1: 100, 2: 100 }),
      (this.keyPressed = { attack: !1, left: !1, right: !1 }),
      this.mesh && this.mesh.position.set(0, 0, 0),
      (this.isAttacking = !1),
      (this.isDead = !1),
      this.bullets &&
        this.bullets.forEach((e) => {
          this.scene.remove(e.mesh1), this.scene.remove(e.mesh2);
        }),
      (this.bullets = []);
  }
  setControls() {
    const e = this.control;
    e === "Keyboard" && (this.keyInputHandler = new ev(this, this.game)),
      e !== "Keyboard" &&
        ((this.gamePadHandler = new gy(e, this.game)),
        (this.control = "Gamepad")),
      (this.playerHandler = new my(this, this.game));
  }
  update() {
    if (
      !this.control ||
      (this.control === "Gamepad" &&
        this.gamePadHandler.connected &&
        this.gamePadHandler.update(),
      this.game.GameControl.gamestate !==
        this.game.GameControl.GAMESTATE.RUNNING)
    )
      return;
    this.mesh.position.z += 100;
    const e = this.mesh.position;
    this.game.camera.position.copy(e.clone().add(new R(0, 550, -1800))),
      this.playerHandler.update(),
      this.bullets.forEach((t) => t.updateBullets());
  }
}
class xy {
  constructor(e) {
    (this.scene = e.scene),
      (this.world = e.world),
      (this.loadingManager = new il()),
      (this.player = e.player),
      (this.asteroidModels = [
        "../resources/FBXs/Asteroid.fbx",
        "../resources/FBXs/Asteroid1.fbx",
        "../resources/FBXs/Asteroid2.fbx",
        "../resources/FBXs/Asteroid3.fbx",
      ]),
      (this.game = e),
      (this.enemyShips = e.enemyShips),
      (this.scale = 1),
      (this.loader = new ll(this.loadingManager)),
      this.loadModel();
  }
  loadModel() {
    const e = Math.floor(Math.random() * 4);
    this.loader.load(this.asteroidModels[e], (t) => {
      (this.mixer = new ol(t)), t.scale.setScalar(this.scale);
      const n = this.player.mesh.position.x,
        i = this.player.mesh.position.y,
        r = this.player.mesh.position.z + 2e4;
      t.position.set(n, i, r), (this.mesh = t), this.scene.add(t);
    });
  }
  Update() {
    const e = this.game.asteroids;
    (this.mesh.position.z -= 100),
      (this.mesh.rotation.x += 0.03),
      (this.mesh.rotation.y += 0.01),
      this.player.mesh.position.z - this.mesh.position.z > 2e3 &&
        (this.game.asteroids.splice((t) => e.indexOf(this), 1),
        this.game.scene.remove(this.mesh)),
      this.mesh && (this.checkEnemiesBulletCol(), this.checkPlayerBulletCol());
  }
  checkPlayerBulletCol() {
    this.player.bullets.forEach((t, n) => {
      const i = An(this.mesh, t.mesh1),
        r = An(this.mesh, t.mesh2);
      (i || r) &&
        (this.player.bullets.splice(n, 1),
        this.game.scene.remove(t.mesh1),
        this.game.scene.remove(t.mesh2));
    });
  }
  checkEnemiesBulletCol() {
    this.enemyShips.length < 1 ||
      this.enemyShips.forEach((e, t) => {
        e.bullets.forEach((i, r) => {
          const a = An(this.mesh, i.mesh1),
            s = An(this.mesh, i.mesh2);
          (a || s) &&
            (this.enemyShips[t].bullets.splice(r, 1),
            this.game.scene.remove(i.mesh1),
            this.game.scene.remove(i.mesh2));
        });
      });
  }
}
class vy {
  constructor(e) {
    (this.game = e),
      (this.player = e.player),
      (this.scene = e.scene),
      (this.world = e.world),
      (this.loader = new ll(this.manager)),
      (this.scale = 1),
      (this.shipModels = [
        "../resources/FBXs/SpaceShip - Purple.fbx",
        "../resources/FBXs/SpaceShip - Orange.fbx",
      ]),
      this.loadModel(),
      (this.health = 100),
      (this.velocity = 0),
      (this.bullets = []),
      this.lastdirection,
      (this.conditionFulfilled = !1),
      (this.frameCounter = 0);
  }
  loadModel() {
    const e = Math.floor(Math.random() * 2);
    this.loader.load(this.shipModels[e], (t) => {
      (this.mixer = new ol(t)), t.scale.setScalar(this.scale);
      const n = this.player.mesh.position.x,
        i = this.player.mesh.position.y,
        r = this.player.mesh.position.z + 2e4;
      t.position.set(n, i, r),
        (t.rotation.y = Math.PI),
        (this.mesh = t),
        this.scene.add(t);
    });
  }
  Update(e) {
    const t = this.player.mesh.position,
      n = this.mesh.position.z - t.z;
    if (((this.mesh.position.x += this.velocity), n > 7e3))
      this.mesh.position.z -= 100;
    else if (((this.mesh.position.z += 100), this.checkAsteroid())) {
      let i;
      this.velocity === 0
        ? (i = Math.random() < 0.5 ? -1 : 1)
        : (i = this.lastdirection),
        this.moveShip(i);
    } else this.followPlayerMov();
    this.mesh && (this.checkBulletCollision(), this.checkAsteroidCollision()),
      this.health <= 0 &&
        (this.game.enemyShips.splice(() => enemyShip.indexOf(this), 1),
        this.game.scene.remove(this.mesh),
        (this.game.enemyNextTimeStamp =
          e + (Math.floor(Math.random() * (10 - 5 + 1)) + 10) * 10));
  }
  checkAsteroid() {
    return this.game.asteroids.some((n) => {
      if (!n.mesh) return;
      const i = 1,
        r = new Ln().setFromObject(n.mesh),
        a = new Ln().setFromObject(this.mesh),
        s = Math.abs(n.mesh.position.x - this.mesh.position.x),
        l = r.max.x - r.min.x + a.max.x - a.min.x,
        c = n.mesh.position.z - this.mesh.position.z,
        h = r.max.z - r.min.z + a.max.z - a.min.z;
      return s < l / 2 + i && c > h / 2 + i;
    });
  }
  followPlayerMov() {
    const e = this.player.mesh.position,
      t = e.x - this.mesh.position.x;
    e.x !== this.mesh.position.x
      ? this.conditionFulfilled ||
        (this.frameCounter++,
        this.frameCounter >= 20 && this.moveShip(t > 0 ? 1 : -1))
      : ((this.conditionFulfilled = !1),
        (this.frameCounter = 0),
        (this.velocity = 0),
        this.bullets.push(new pu(this, -5e5, this.game)),
        this.returnRotation());
  }
  moveShip(e) {
    let t = Math.round(this.mesh.rotation.z * 100) / 100;
    this.velocity = 30 * e;
    let n = 0.02 * e;
    const i = t + n;
    (i < -0.7 || i > 0.7) && (n = 0),
      (this.mesh.rotation.z += n),
      (this.lastdirection = e);
  }
  returnRotation() {
    let e = Math.round(this.mesh.rotation.z * 100) / 100;
    const t = e + 0.02 * -this.lastdirection;
    (t < -0.7 || t > 0.7) && (this.lastdirection *= -1),
      (this.mesh.rotation.z += e !== 0 ? 0.02 * -this.lastdirection : 0);
  }
  checkBulletCollision() {
    let e = 0;
    this.player.bullets.forEach((n, i) => {
      const r = An(this.mesh, n.mesh1),
        a = An(this.mesh, n.mesh2);
      (r || a) &&
        ((e += (r ? 0.25 : 0) + (a ? 0.25 : 0)),
        this.player.bullets.splice(i, 1),
        this.game.scene.remove(n.mesh1),
        this.game.scene.remove(n.mesh2));
    }),
      (this.health -= e);
  }
  checkAsteroidCollision() {
    let e = 0;
    this.game.asteroids.length < 1 ||
      (this.game.asteroids.forEach((t, n) => {
        t.mesh &&
          An(this.mesh, t.mesh) &&
          ((e += 10),
          this.game.asteroids.splice(n, 1),
          this.game.scene.remove(t.mesh));
      }),
      (this.health -= e));
  }
}
class yy {
  constructor(e) {
    this.timer,
      this.timerId,
      this.CountDownTimer,
      (this.game = e),
      (this.player = this.game.player),
      this.GetControls(),
      this.runEventListeners();
  }
  GetControls() {
    let e = document.getElementById("playerControls"),
      t = document.createElement("option");
    (t.innerHTML = "PlayerControls"),
      (t.value = "PlayerControls"),
      t.setAttribute("disabled", "disabled"),
      t.setAttribute("selected", "selected"),
      e.appendChild(t),
      this.CreateOptionElement("Keyboard");
  }
  CreateOptionElement(e, t = e) {
    let n = document.getElementById("playerControls"),
      i = document.createElement("option");
    (i.innerHTML = e), (i.value = t), n.appendChild(i);
  }
  GetSelectedOption() {
    let e = document.getElementById("playerControls"),
      t = e.selectedIndex;
    if (t > 0) {
      let n = e.options[t].value;
      (this.player.control = n), this.player.setControls();
    }
  }
  runEventListeners() {
    addEventListener("gamepadconnected", (e) => {
      let t = e.gamepad.index,
        n = navigator.getGamepads()[t].id;
      this.CreateOptionElement(n, t);
    }),
      document
        .getElementById("playerControls")
        .addEventListener("change", () => this.GetSelectedOption());
  }
  CountDown() {
    this.timerId = setInterval(() => {
      this.CountDownTimer--,
        this.CountDownTimer > 0 &&
          (document.getElementById("displayText").innerText =
            this.CountDownTimer),
        this.CountDownTimer === 0 &&
          (clearInterval(this.timerId),
          (this.game.GameControl.gamestate =
            this.game.GameControl.GAMESTATE.RUNNING),
          (document.getElementById("displayText").style.display = "none"),
          (document.getElementById("displayText").style.backgroundColor =
            "transparent"));
    }, 1e3);
  }
}
class My {
  constructor(e) {
    (this.gameWidth = e.gameWidth),
      (this.gameHeight = e.gameHeight),
      (this.utils = e.Utils),
      (this.player = e.player),
      (this.ctx = e.ctx),
      (this.GAMESTATE = {
        PAUSED: 0,
        RUNNING: 1,
        MENU: 2,
        GAMEOVER: 3,
        STARTED: 4,
        PAUSE: 5,
      }),
      (this.game = e),
      (this.gamestate = this.GAMESTATE.MENU),
      (this.MenuSelection = 0),
      (document.getElementById("playerControls").style.display = "flex");
  }
  Restart() {
    if (
      !(
        this.gamestate !== this.GAMESTATE.MENU &&
        this.gamestate !== this.GAMESTATE.GAMEOVER
      )
    ) {
      (document.getElementById("playerControls").style.display = "none"),
        this.game.Restart(),
        this.player.Restart();
      for (let e = 2; e > 0; e--)
        Tl.to("#" + this.player.healthBars[e], {
          height: (90 * this.player.health[e]) / 100 + "px",
        });
      (this.utils.CountDownTimer = 3),
        (document.getElementsByClassName("displayText")[0].style.display =
          "flex"),
        (document.getElementsByClassName(
          "displayText"
        )[0].style.backgroundColor = "rgba(0, 0, 0, 0.9)"),
        (document.getElementById("displayText").innerText =
          this.utils.CountDownTimer),
        this.utils.CountDown(),
        (this.gamestate = this.GAMESTATE.STARTED);
    }
  }
  Control() {
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight),
      (this.gamestate == this.GAMESTATE.PAUSED ||
        this.gamestate == this.GAMESTATE.PAUSE) &&
        ((this.ctx.font = "40px Arial"),
        (this.ctx.textAlign = "center"),
        (this.ctx.fillStyle = "white"),
        this.ctx.fillRect(
          this.gameWidth / 2 - 240,
          this.gameHeight / 2 - 120,
          480,
          60
        ),
        (this.ctx.fillStyle = this.MenuSelection === 0 ? "blue" : "#818CF8"),
        this.ctx.fillRect(
          this.gameWidth / 2 - 236,
          this.gameHeight / 2 - 116,
          472,
          52
        ),
        (this.ctx.fillStyle = "white"),
        this.ctx.fillText(
          "Resume",
          this.gameWidth / 2,
          this.gameHeight / 2 - 80
        ),
        (this.ctx.fillStyle = "rgba(275, 275, 275, 0.9)"),
        this.ctx.fillRect(
          this.gameWidth / 2 - 240,
          this.gameHeight / 2,
          480,
          60
        ),
        (this.ctx.fillStyle = this.MenuSelection === 1 ? "blue" : "#818CF8"),
        this.ctx.fillRect(
          this.gameWidth / 2 - 236,
          this.gameHeight / 2 + 4,
          472,
          52
        ),
        (this.ctx.fillStyle = "white"),
        this.ctx.fillText(
          "Return To Menu",
          this.gameWidth / 2,
          this.gameHeight / 2 + 40
        )),
      this.gamestate == this.GAMESTATE.MENU &&
        (this.ctx.rect(0, 0, this.gameWidth, this.gameHeight),
        (this.ctx.fillStyle = "rgba(0,0,0,1)"),
        this.ctx.fill(),
        (this.ctx.font = "30px Arial"),
        (this.ctx.fillStyle = "white"),
        (this.ctx.textAlign = "center"),
        this.ctx.fillText(
          "Press Enter or Start to Start Game",
          this.gameWidth / 2,
          this.gameHeight / 2
        )),
      this.gamestate == this.GAMESTATE.GAMEOVER &&
        ((document.getElementById("displayText").style.display = "none"),
        (this.ctx.font = "40px Arial"),
        (this.ctx.textAlign = "center"),
        (this.ctx.fillStyle = "white"),
        this.ctx.fillRect(
          this.gameWidth / 2 - 240,
          this.gameHeight / 2 - 120,
          480,
          60
        ),
        (this.ctx.fillStyle = this.MenuSelection === 0 ? "blue" : "#818CF8"),
        this.ctx.fillRect(
          this.gameWidth / 2 - 236,
          this.gameHeight / 2 - 116,
          472,
          52
        ),
        (this.ctx.fillStyle = "white"),
        this.ctx.fillText(
          "Replay",
          this.gameWidth / 2,
          this.gameHeight / 2 - 80
        ),
        (this.ctx.fillStyle = "rgba(275, 275, 275, 0.9)"),
        this.ctx.fillRect(
          this.gameWidth / 2 - 240,
          this.gameHeight / 2,
          480,
          60
        ),
        (this.ctx.fillStyle = this.MenuSelection === 1 ? "blue" : "#818CF8"),
        this.ctx.fillRect(
          this.gameWidth / 2 - 236,
          this.gameHeight / 2 + 4,
          472,
          52
        ),
        (this.ctx.fillStyle = "white"),
        this.ctx.fillText(
          "Return To Menu",
          this.gameWidth / 2,
          this.gameHeight / 2 + 40
        ));
  }
  drawButton() {}
  togglePause() {
    switch (this.gamestate) {
      case this.GAMESTATE.PAUSED:
        this.gamestate = this.GAMESTATE.RUNNING;
        break;
      case this.GAMESTATE.RUNNING:
        this.gamestate = this.GAMESTATE.PAUSED;
        break;
      case this.GAMESTATE.STARTED:
        this.gamestate = this.GAMESTATE.PAUSE;
        break;
      case this.GAMESTATE.PAUSE:
        this.gamestate = this.GAMESTATE.STARTED;
        break;
    }
  }
}
class by {
  constructor({ ctx: e, gameWidth: t, gameHeight: n }) {
    (this.ctx = e),
      (this.gameWidth = t),
      (this.gameHeight = n),
      (this.loaded = !1),
      (this.lastTimeStamp = 0),
      (this.asteroidNextTimeStamp =
        this.lastTimeStamp +
        (Math.floor(Math.random() * (30 - 20 + 1)) + 20) * 10),
      (this.asteroids = []),
      (this.enemyNextTimeStamp =
        this.lastTimeStamp +
        (Math.floor(Math.random() * (40 - 30 + 1)) + 30) * 10),
      (this.enemyShips = []),
      (this.lastTimeStamp = 0),
      this.init(),
      (this.loadingManager.onLoad = () => {
        this.loaded = !0;
      });
  }
  init() {
    (this.scene = new N0()),
      (this.camera = new Ft(30, this.gameWidth / this.gameHeight, 1, 3e4)),
      this.camera.position.set(0, 300, -1800),
      this.camera.lookAt(0, 0, 100),
      (this.cameraTarget = new R(0, 0, 0)),
      new vx(this.camera),
      (this.light = new tu(16777215, 0.6)),
      this.light.position.set(-500, 300, 500),
      (this.light.castShadow = !0),
      (this.light.shadow.bias = 0.01),
      (this.light.shadow.mapSize.width = 2048),
      (this.light.shadow.mapSize.height = 2048),
      (this.light.shadow.camera.near = 1),
      (this.light.shadow.camera.far = 500),
      (this.light.shadow.camera.left = 200),
      (this.light.shadow.camera.right = -200),
      (this.light.shadow.camera.top = 200),
      (this.light.shadow.camera.bottom = -200),
      this.scene.add(this.light);
    const e = new xx(this.light, 5);
    this.scene.add(e),
      (this.light2 = new nu(16777215, 0.6)),
      this.scene.add(this.light2),
      (this.renderer = new tl({ antialias: !0 })),
      this.renderer.setPixelRatio(devicePixelRatio),
      this.renderer.setSize(this.gameWidth, this.gameHeight),
      (this.renderer.shadowMap.enabled = !0),
      (this.renderer.shadowMap.type = Ah),
      document
        .getElementsByClassName("parent")[0]
        .appendChild(this.renderer.domElement),
      (this.loadingManager = new il());
    const n = new Q0(this.loadingManager).load([
      "../resources/Space Skybox/23-11-02-16-34-05_Right.png",
      "../resources/Space Skybox/23-11-02-16-34-05_Left.png",
      "../resources/Space Skybox/23-11-02-16-34-05_Top.png",
      "../resources/Space Skybox/23-11-02-16-34-05_Bottom.png",
      "../resources/Space Skybox/23-11-02-16-34-05_Front.png",
      "../resources/Space Skybox/23-11-02-16-34-05_Back.png",
    ]);
    (n.magFilter = Kt),
      (n.minFilter = jf),
      (n.generateMipmaps = !1),
      (n.wrapS = Ot),
      (n.wrapT = Ot),
      (this.scene.background = n),
      (this.OrbitControl = new yx(this.camera, this.renderer.domElement)),
      (this.player = new _y({ game: this })),
      (this.Utils = new yy(this)),
      (this.GameControl = new My(this));
  }
  Restart() {
    (this.lastTimeStamp = 0),
      this.asteroids.forEach((e) => {
        this.scene.remove(e.mesh);
      }),
      this.enemyShips.forEach((e) => {
        this.scene.remove(e.mesh),
          e.bullets.forEach((t) => {
            this.scene.remove(t.mesh1), this.scene.remove(t.mesh2);
          });
      }),
      (this.enemyShips = []),
      (this.asteroids = []),
      (this.asteroidNextTimeStamp =
        this.lastTimeStamp +
        (Math.floor(Math.random() * (30 - 20 + 1)) + 20) * 10),
      (this.enemyNextTimeStamp =
        this.lastTimeStamp +
        (Math.floor(Math.random() * (40 - 30 + 1)) + 30) * 10);
  }
  update() {
    this.GameControl.Control(),
      this.player.update(),
      this.GameControl.gamestate === this.GameControl.GAMESTATE.RUNNING &&
        ((this.lastTimeStamp += 1),
        this.loaded &&
          ((document.getElementsByClassName("score")[0].innerText = Math.round(
            this.lastTimeStamp / 10
          )),
          this.asteroids.forEach((e) => {
            e.mesh && e.Update();
          }),
          this.enemyShips.forEach((e) => {
            e.mesh && e.Update(this.lastTimeStamp);
          }),
          this.lastTimeStamp >= this.asteroidNextTimeStamp &&
            (this.asteroids.push(new xy(this)),
            (this.asteroidNextTimeStamp =
              this.lastTimeStamp +
              (Math.floor(Math.random() * (30 - 20 + 1)) + 30) * 10)),
          this.lastTimeStamp === this.enemyNextTimeStamp &&
            this.enemyShips.push(new vy(this))),
        this.renderer.render(this.scene, this.camera));
  }
}
let Yr = innerWidth,
  jr = innerHeight;
const gs = document.getElementsByClassName("gameMenu")[0],
  Sy = gs.getContext("2d"),
  rr = new by({ ctx: Sy, gameWidth: Yr, gameHeight: jr });
gs.width = innerWidth;
gs.height = innerHeight;
addEventListener("resize", () => {
  (Yr = innerWidth),
    (jr = innerHeight),
    (gs.width = innerWidth),
    (gs.height = innerHeight),
    (rr.gameWidth = Yr),
    (rr.gameHeight = jr),
    rr.renderer.setSize(Yr, jr),
    (rr.camera.aspect = Yr / jr),
    rr.camera.updateProjectionMatrix();
});
function pf(o) {
  rr.update(o), requestAnimationFrame(pf);
}
pf();
