import{r as Xo,g as Qo}from"./react-vendor-BvtREbXf.js";var yn={exports:{}},vn={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr;function Zo(){if(Jr)return vn;Jr=1;var t=Xo();function e(c,l){return c===l&&(c!==0||1/c===1/l)||c!==c&&l!==l}var n=typeof Object.is=="function"?Object.is:e,r=t.useSyncExternalStore,i=t.useRef,a=t.useEffect,s=t.useMemo,o=t.useDebugValue;return vn.useSyncExternalStoreWithSelector=function(c,l,d,f,u){var p=i(null);if(p.current===null){var g={hasValue:!1,value:null};p.current=g}else g=p.current;p=s(function(){function T(P){if(!E){if(E=!0,S=P,P=f(P),u!==void 0&&g.hasValue){var D=g.value;if(u(D,P))return k=D}return k=P}if(D=k,n(S,P))return D;var K=f(P);return u!==void 0&&u(D,K)?(S=P,D):(S=P,k=K)}var E=!1,S,k,O=d===void 0?null:d;return[function(){return T(l())},O===null?void 0:function(){return T(O())}]},[l,d,f,u]);var v=r(c,p[0],p[1]);return a(function(){g.hasValue=!0,g.value=v},[v]),o(v),v},vn}var Xr;function ec(){return Xr||(Xr=1,yn.exports=Zo()),yn.exports}var Yg=ec(),Ta=Symbol.for("immer-nothing"),Qr=Symbol.for("immer-draftable"),U=Symbol.for("immer-state");function W(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Ge=Object.getPrototypeOf;function Ke(t){return!!t&&!!t[U]}function ke(t){return t?Aa(t)||Array.isArray(t)||!!t[Qr]||!!t.constructor?.[Qr]||Zt(t)||en(t):!1}var tc=Object.prototype.constructor.toString();function Aa(t){if(!t||typeof t!="object")return!1;const e=Ge(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===tc}function Ft(t,e){Qt(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Qt(t){const e=t[U];return e?e.type_:Array.isArray(t)?1:Zt(t)?2:en(t)?3:0}function Bn(t,e){return Qt(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function ka(t,e,n){const r=Qt(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function nc(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Zt(t){return t instanceof Map}function en(t){return t instanceof Set}function Ee(t){return t.copy_||t.base_}function Hn(t,e){if(Zt(t))return new Map(t);if(en(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=Aa(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[U];let i=Reflect.ownKeys(r);for(let a=0;a<i.length;a++){const s=i[a],o=r[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(Ge(t),r)}else{const r=Ge(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function br(t,e=!1){return tn(t)||Ke(t)||!ke(t)||(Qt(t)>1&&(t.set=t.add=t.clear=t.delete=rc),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>br(r,!0))),t}function rc(){W(2)}function tn(t){return Object.isFrozen(t)}var ic={};function Pe(t){const e=ic[t];return e||W(0,t),e}var ct;function Pa(){return ct}function ac(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Zr(t,e){e&&(Pe("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Vn(t){qn(t),t.drafts_.forEach(sc),t.drafts_=null}function qn(t){t===ct&&(ct=t.parent_)}function ei(t){return ct=ac(ct,t)}function sc(t){const e=t[U];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function ti(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[U].modified_&&(Vn(e),W(4)),ke(t)&&(t=Ut(e,t),e.parent_||$t(e,t)),e.patches_&&Pe("Patches").generateReplacementPatches_(n[U].base_,t,e.patches_,e.inversePatches_)):t=Ut(e,n,[]),Vn(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==Ta?t:void 0}function Ut(t,e,n){if(tn(e))return e;const r=e[U];if(!r)return Ft(e,(i,a)=>ni(t,r,e,i,a,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return $t(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let a=i,s=!1;r.type_===3&&(a=new Set(i),i.clear(),s=!0),Ft(a,(o,c)=>ni(t,r,i,o,c,n,s)),$t(t,i,!1),n&&t.patches_&&Pe("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function ni(t,e,n,r,i,a,s){if(Ke(i)){const o=a&&e&&e.type_!==3&&!Bn(e.assigned_,r)?a.concat(r):void 0,c=Ut(t,i,o);if(ka(n,r,c),Ke(c))t.canAutoFreeze_=!1;else return}else s&&n.add(i);if(ke(i)&&!tn(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Ut(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&$t(t,i)}}function $t(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&br(e,n)}function oc(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:Pa(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=_r;n&&(i=[r],a=lt);const{revoke:s,proxy:o}=Proxy.revocable(i,a);return r.draft_=o,r.revoke_=s,o}var _r={get(t,e){if(e===U)return t;const n=Ee(t);if(!Bn(n,e))return cc(t,n,e);const r=n[e];return t.finalized_||!ke(r)?r:r===bn(t.base_,e)?(_n(t),t.copy_[e]=Kn(r,t)):r},has(t,e){return e in Ee(t)},ownKeys(t){return Reflect.ownKeys(Ee(t))},set(t,e,n){const r=Ca(Ee(t),e);if(r?.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=bn(Ee(t),e),a=i?.[U];if(a&&a.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(nc(n,i)&&(n!==void 0||Bn(t.base_,e)))return!0;_n(t),Gn(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return bn(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,_n(t),Gn(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Ee(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){W(11)},getPrototypeOf(t){return Ge(t.base_)},setPrototypeOf(){W(12)}},lt={};Ft(_r,(t,e)=>{lt[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});lt.deleteProperty=function(t,e){return lt.set.call(this,t,e,void 0)};lt.set=function(t,e,n){return _r.set.call(this,t[0],e,n,t[0])};function bn(t,e){const n=t[U];return(n?Ee(n):t)[e]}function cc(t,e,n){const r=Ca(e,n);return r?"value"in r?r.value:r.get?.call(t.draft_):void 0}function Ca(t,e){if(!(e in t))return;let n=Ge(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Ge(n)}}function Gn(t){t.modified_||(t.modified_=!0,t.parent_&&Gn(t.parent_))}function _n(t){t.copy_||(t.copy_=Hn(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var lc=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const a=n;n=e;const s=this;return function(c=a,...l){return s.produce(c,d=>n.call(this,d,...l))}}typeof n!="function"&&W(6),r!==void 0&&typeof r!="function"&&W(7);let i;if(ke(e)){const a=ei(this),s=Kn(e,void 0);let o=!0;try{i=n(s),o=!1}finally{o?Vn(a):qn(a)}return Zr(a,r),ti(i,a)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===Ta&&(i=void 0),this.autoFreeze_&&br(i,!0),r){const a=[],s=[];Pe("Patches").generateReplacementPatches_(e,i,a,s),r(a,s)}return i}else W(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(s,...o)=>this.produceWithPatches(s,c=>e(c,...o));let r,i;return[this.produce(e,n,(s,o)=>{r=s,i=o}),r,i]},typeof t?.autoFreeze=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof t?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){ke(t)||W(8),Ke(t)&&(t=uc(t));const e=ei(this),n=Kn(t,void 0);return n[U].isManual_=!0,qn(e),n}finishDraft(t,e){const n=t&&t[U];(!n||!n.isManual_)&&W(9);const{scope_:r}=n;return Zr(r,e),ti(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Pe("Patches").applyPatches_;return Ke(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Kn(t,e){const n=Zt(t)?Pe("MapSet").proxyMap_(t,e):en(t)?Pe("MapSet").proxySet_(t,e):oc(t,e);return(e?e.scope_:Pa()).drafts_.push(n),n}function uc(t){return Ke(t)||W(10,t),Ra(t)}function Ra(t){if(!ke(t)||tn(t))return t;const e=t[U];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Hn(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Hn(t,!0);return Ft(n,(r,i)=>{ka(n,r,Ra(i))}),e&&(e.finalized_=!1),n}var $=new lc,Jg=$.produce;$.produceWithPatches.bind($);$.setAutoFreeze.bind($);$.setUseStrictShallowCopy.bind($);$.applyPatches.bind($);$.createDraft.bind($);$.finishDraft.bind($);function fc(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function dc(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function hc(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var ri=t=>Array.isArray(t)?t:[t];function pc(t){const e=Array.isArray(t[0])?t[0]:t;return hc(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function mc(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var gc=class{constructor(t){this.value=t}deref(){return this.value}},yc=typeof WeakRef<"u"?WeakRef:gc,vc=0,ii=1;function At(){return{s:vc,v:void 0,o:null,p:null}}function Oa(t,e={}){let n=At();const{resultEqualityCheck:r}=e;let i,a=0;function s(){let o=n;const{length:c}=arguments;for(let f=0,u=c;f<u;f++){const p=arguments[f];if(typeof p=="function"||typeof p=="object"&&p!==null){let g=o.o;g===null&&(o.o=g=new WeakMap);const v=g.get(p);v===void 0?(o=At(),g.set(p,o)):o=v}else{let g=o.p;g===null&&(o.p=g=new Map);const v=g.get(p);v===void 0?(o=At(),g.set(p,o)):o=v}}const l=o;let d;if(o.s===ii)d=o.v;else if(d=t.apply(null,arguments),a++,r){const f=i?.deref?.()??i;f!=null&&r(f,d)&&(d=f,a!==0&&a--),i=typeof d=="object"&&d!==null||typeof d=="function"?new yc(d):d}return l.s=ii,l.v=d,d}return s.clearCache=()=>{n=At(),s.resetResultsCount()},s.resultsCount=()=>a,s.resetResultsCount=()=>{a=0},s}function bc(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let a=0,s=0,o,c={},l=i.pop();typeof l=="object"&&(c=l,l=i.pop()),fc(l,`createSelector expects an output function after the inputs, but received: [${typeof l}]`);const d={...n,...c},{memoize:f,memoizeOptions:u=[],argsMemoize:p=Oa,argsMemoizeOptions:g=[]}=d,v=ri(u),T=ri(g),E=pc(i),S=f(function(){return a++,l.apply(null,arguments)},...v),k=p(function(){s++;const P=mc(E,arguments);return o=S.apply(null,P),o},...T);return Object.assign(k,{resultFunc:l,memoizedResultFunc:S,dependencies:E,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>o,recomputations:()=>a,resetRecomputations:()=>{a=0},memoize:f,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var _c=bc(Oa),wc=Object.assign((t,e=_c)=>{dc(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(a=>t[a]);return e(r,(...a)=>a.reduce((s,o,c)=>(s[n[c]]=o,s),{}))},{withTypes:()=>wc});const Ic=()=>{};var ai={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ec=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[n++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[n++],s=t[n++],o=t[n++],c=((i&7)<<18|(a&63)<<12|(s&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const a=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return e.join("")},Da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const a=t[i],s=i+1<t.length,o=s?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,d=a>>2,f=(a&3)<<4|o>>4;let u=(o&15)<<2|l>>6,p=l&63;c||(p=64,s||(u=64)),r.push(n[d],n[f],n[u],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Na(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ec(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const a=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,a==null||o==null||l==null||f==null)throw new Sc;const u=a<<2|o>>4;if(r.push(u),l!==64){const p=o<<4&240|l>>2;if(r.push(p),f!==64){const g=l<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tc=function(t){const e=Na(t);return Da.encodeByteArray(e,!0)},xa=function(t){return Tc(t).replace(/\./g,"")},Ma=function(t){try{return Da.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=()=>Ac().__FIREBASE_DEFAULTS__,Pc=()=>{if(typeof process>"u"||typeof ai>"u")return;const t=ai.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Cc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ma(t[1]);return e&&JSON.parse(e)},wr=()=>{try{return Ic()||kc()||Pc()||Cc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rc=t=>wr()?.emulatorHosts?.[t],La=()=>wr()?.config,Fa=t=>wr()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nc(t){return(await fetch(t,{credentials:"include"})).ok}const rt={};function Dc(){const t={prod:[],emulator:[]};for(const e of Object.keys(rt))rt[e]?t.emulator.push(e):t.prod.push(e);return t}function xc(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let si=!1;function Mc(t,e){if(typeof window>"u"||typeof document>"u"||!nn(window.location.host)||rt[t]===e||rt[t]||si)return;rt[t]=e;function n(u){return`__firebase__banner__${u}`}const r="__firebase__banner",a=Dc().prod.length>0;function s(){const u=document.getElementById(r);u&&u.remove()}function o(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function c(u,p){u.setAttribute("width","24"),u.setAttribute("id",p),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function l(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{si=!0,s()},u}function d(u,p){u.setAttribute("id",p),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function f(){const u=xc(r),p=n("text"),g=document.getElementById(p)||document.createElement("span"),v=n("learnmore"),T=document.getElementById(v)||document.createElement("a"),E=n("preprendIcon"),S=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const k=u.element;o(k),d(T,v);const O=l();c(S,E),k.append(S,g,T,O),document.body.appendChild(k)}a?(g.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(S.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(M())}function Fc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ua(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $c(){const t=M();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $a(){try{return typeof indexedDB=="object"}catch{return!1}}function ja(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}function jc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="FirebaseError";class ee extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zc,Object.setPrototypeOf(this,ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Le.prototype.create)}}class Le{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,a=this.errors[e],s=a?Wc(a,r):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new ee(i,o,r)}}function Wc(t,e){return t.replace(Bc,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Bc=/\{\$([^}]+)}/g;function Hc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ce(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const a=t[i],s=e[i];if(oi(a)&&oi(s)){if(!Ce(a,s))return!1}else if(a!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function oi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function et(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function tt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Vc(t,e){const n=new qc(t,e);return n.subscribe.bind(n)}class qc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gc(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wn),i.error===void 0&&(i.error=wn),i.complete===void 0&&(i.complete=wn);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gc(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wn(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=1e3,Yc=2,Jc=14400*1e3,Xc=.5;function ci(t,e=Kc,n=Yc){const r=e*Math.pow(n,t),i=Math.round(Xc*r*(Math.random()-.5)*2);return Math.min(Jc,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){return t&&t._delegate?t._delegate:t}class Z{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Oc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(el(e))try{this.getOrInitializeService({instanceIdentifier:Se})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Se){return this.instances.has(e)}getOptions(e=Se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);r===o&&s.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zc(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Se){return this.component?this.component.multipleInstances?e:Se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zc(t){return t===Se?void 0:t}function el(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(A||(A={}));const nl={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},rl=A.INFO,il={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},al=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=il[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ir{constructor(e){this.name=e,this._logLevel=rl,this._logHandler=al,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const sl=(t,e)=>e.some(n=>t instanceof n);let li,ui;function ol(){return li||(li=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cl(){return ui||(ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const za=new WeakMap,Yn=new WeakMap,Wa=new WeakMap,In=new WeakMap,Er=new WeakMap;function ll(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{n(ge(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&za.set(n,t)}).catch(()=>{}),Er.set(e,t),e}function ul(t){if(Yn.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});Yn.set(t,e)}let Jn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ge(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fl(t){Jn=t(Jn)}function dl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(En(this),e,...n);return Wa.set(r,e.sort?e.sort():[e]),ge(r)}:cl().includes(t)?function(...e){return t.apply(En(this),e),ge(za.get(this))}:function(...e){return ge(t.apply(En(this),e))}}function hl(t){return typeof t=="function"?dl(t):(t instanceof IDBTransaction&&ul(t),sl(t,ol())?new Proxy(t,Jn):t)}function ge(t){if(t instanceof IDBRequest)return ll(t);if(In.has(t))return In.get(t);const e=hl(t);return e!==t&&(In.set(t,e),Er.set(e,t)),e}const En=t=>Er.get(t);function Ba(t,e,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(t,e),o=ge(s);return r&&s.addEventListener("upgradeneeded",c=>{r(ge(s.result),c.oldVersion,c.newVersion,ge(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{a&&c.addEventListener("close",()=>a()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const pl=["get","getKey","getAll","getAllKeys","count"],ml=["put","add","delete","clear"],Sn=new Map;function fi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sn.get(e))return Sn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ml.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pl.includes(n)))return;const a=async function(s,...o){const c=this.transaction(s,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return Sn.set(e,a),a}fl(t=>({...t,get:(e,n,r)=>fi(e,n)||t.get(e,n,r),has:(e,n)=>!!fi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yl(t){return t.getComponent()?.type==="VERSION"}const Xn="@firebase/app",di="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Ir("@firebase/app"),vl="@firebase/app-compat",bl="@firebase/analytics-compat",_l="@firebase/analytics",wl="@firebase/app-check-compat",Il="@firebase/app-check",El="@firebase/auth",Sl="@firebase/auth-compat",Tl="@firebase/database",Al="@firebase/data-connect",kl="@firebase/database-compat",Pl="@firebase/functions",Cl="@firebase/functions-compat",Rl="@firebase/installations",Ol="@firebase/installations-compat",Nl="@firebase/messaging",Dl="@firebase/messaging-compat",xl="@firebase/performance",Ml="@firebase/performance-compat",Ll="@firebase/remote-config",Fl="@firebase/remote-config-compat",Ul="@firebase/storage",$l="@firebase/storage-compat",jl="@firebase/firestore",zl="@firebase/ai",Wl="@firebase/firestore-compat",Bl="firebase",Hl="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]",Vl={[Xn]:"fire-core",[vl]:"fire-core-compat",[_l]:"fire-analytics",[bl]:"fire-analytics-compat",[Il]:"fire-app-check",[wl]:"fire-app-check-compat",[El]:"fire-auth",[Sl]:"fire-auth-compat",[Tl]:"fire-rtdb",[Al]:"fire-data-connect",[kl]:"fire-rtdb-compat",[Pl]:"fire-fn",[Cl]:"fire-fn-compat",[Rl]:"fire-iid",[Ol]:"fire-iid-compat",[Nl]:"fire-fcm",[Dl]:"fire-fcm-compat",[xl]:"fire-perf",[Ml]:"fire-perf-compat",[Ll]:"fire-rc",[Fl]:"fire-rc-compat",[Ul]:"fire-gcs",[$l]:"fire-gcs-compat",[jl]:"fire-fst",[Wl]:"fire-fst-compat",[zl]:"fire-vertex","fire-js":"fire-js",[Bl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Map,ql=new Map,Zn=new Map;function hi(t,e){try{t.container.addComponent(e)}catch(n){ie.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ae(t){const e=t.name;if(Zn.has(e))return ie.debug(`There were multiple attempts to register component ${e}.`),!1;Zn.set(e,t);for(const n of jt.values())hi(n,t);for(const n of ql.values())hi(n,t);return!0}function Xe(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function B(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ye=new Le("app","Firebase",Gl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ye.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=Hl;function Yl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Qn,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ye.create("bad-app-name",{appName:String(i)});if(n||(n=La()),!n)throw ye.create("no-options");const a=jt.get(i);if(a){if(Ce(n,a.options)&&Ce(r,a.config))return a;throw ye.create("duplicate-app",{appName:i})}const s=new tl(i);for(const c of Zn.values())s.addComponent(c);const o=new Kl(n,r,s);return jt.set(i,o),o}function Ha(t=Qn){const e=jt.get(t);if(!e&&t===Qn&&La())return Yl();if(!e)throw ye.create("no-app",{appName:t});return e}function J(t,e,n){let r=Vl[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const s=[`Unable to register library "${r}" with version "${e}":`];i&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&s.push("and"),a&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ie.warn(s.join(" "));return}ae(new Z(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="firebase-heartbeat-database",Xl=1,ut="firebase-heartbeat-store";let Tn=null;function Va(){return Tn||(Tn=Ba(Jl,Xl,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ut)}catch(n){console.warn(n)}}}}).catch(t=>{throw ye.create("idb-open",{originalErrorMessage:t.message})})),Tn}async function Ql(t){try{const n=(await Va()).transaction(ut),r=await n.objectStore(ut).get(qa(t));return await n.done,r}catch(e){if(e instanceof ee)ie.warn(e.message);else{const n=ye.create("idb-get",{originalErrorMessage:e?.message});ie.warn(n.message)}}}async function pi(t,e){try{const r=(await Va()).transaction(ut,"readwrite");await r.objectStore(ut).put(e,qa(t)),await r.done}catch(n){if(n instanceof ee)ie.warn(n.message);else{const r=ye.create("idb-set",{originalErrorMessage:n?.message});ie.warn(r.message)}}}function qa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=1024,eu=30;class tu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ru(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=mi();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>eu){const i=iu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ie.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mi(),{heartbeatsToSend:n,unsentEntries:r}=nu(this._heartbeatsCache.heartbeats),i=xa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ie.warn(e),""}}}function mi(){return new Date().toISOString().substring(0,10)}function nu(t,e=Zl){const n=[];let r=t.slice();for(const i of t){const a=n.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),gi(n)>e){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ru{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $a()?ja().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ql(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return pi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return pi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gi(t){return xa(JSON.stringify({version:2,heartbeats:t})).length}function iu(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){ae(new Z("platform-logger",e=>new gl(e),"PRIVATE")),ae(new Z("heartbeat",e=>new tu(e),"PRIVATE")),J(Xn,di,t),J(Xn,di,"esm2020"),J("fire-js","")}au("");var su="firebase",ou="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */J(su,ou,"app");const Ga="@firebase/installations",Sr="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=1e4,Ya=`w:${Sr}`,Ja="FIS_v2",cu="https://firebaseinstallations.googleapis.com/v1",lu=3600*1e3,uu="installations",fu="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Re=new Le(uu,fu,du);function Xa(t){return t instanceof ee&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa({projectId:t}){return`${cu}/projects/${t}/installations`}function Za(t){return{token:t.token,requestStatus:2,expiresIn:pu(t.expiresIn),creationTime:Date.now()}}async function es(t,e){const r=(await e.json()).error;return Re.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ts({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function hu(t,{refreshToken:e}){const n=ts(t);return n.append("Authorization",mu(e)),n}async function ns(t){const e=await t();return e.status>=500&&e.status<600?t():e}function pu(t){return Number(t.replace("s","000"))}function mu(t){return`${Ja} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gu({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Qa(t),i=ts(t),a=e.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const s={fid:n,authVersion:Ja,appId:t.appId,sdkVersion:Ya},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await ns(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Za(l.authToken)}}else throw await es("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=/^[cdef][\w-]{21}$/,er="";function bu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=_u(t);return vu.test(n)?n:er}catch{return er}}function _u(t){return yu(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new Map;function as(t,e){const n=rn(t);ss(n,e),wu(n,e)}function ss(t,e){const n=is.get(t);if(n)for(const r of n)r(e)}function wu(t,e){const n=Iu();n&&n.postMessage({key:t,fid:e}),Eu()}let Te=null;function Iu(){return!Te&&"BroadcastChannel"in self&&(Te=new BroadcastChannel("[Firebase] FID Change"),Te.onmessage=t=>{ss(t.data.key,t.data.fid)}),Te}function Eu(){is.size===0&&Te&&(Te.close(),Te=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="firebase-installations-database",Tu=1,Oe="firebase-installations-store";let An=null;function Tr(){return An||(An=Ba(Su,Tu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oe)}}})),An}async function zt(t,e){const n=rn(t),i=(await Tr()).transaction(Oe,"readwrite"),a=i.objectStore(Oe),s=await a.get(n);return await a.put(e,n),await i.done,(!s||s.fid!==e.fid)&&as(t,e.fid),e}async function os(t){const e=rn(t),r=(await Tr()).transaction(Oe,"readwrite");await r.objectStore(Oe).delete(e),await r.done}async function an(t,e){const n=rn(t),i=(await Tr()).transaction(Oe,"readwrite"),a=i.objectStore(Oe),s=await a.get(n),o=e(s);return o===void 0?await a.delete(n):await a.put(o,n),await i.done,o&&(!s||s.fid!==o.fid)&&as(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t){let e;const n=await an(t.appConfig,r=>{const i=Au(r),a=ku(t,i);return e=a.registrationPromise,a.installationEntry});return n.fid===er?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Au(t){const e=t||{fid:bu(),registrationStatus:0};return cs(e)}function ku(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Re.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Pu(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Cu(t)}:{installationEntry:e}}async function Pu(t,e){try{const n=await gu(t,e);return zt(t.appConfig,n)}catch(n){throw Xa(n)&&n.customData.serverCode===409?await os(t.appConfig):await zt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Cu(t){let e=await yi(t.appConfig);for(;e.registrationStatus===1;)await rs(100),e=await yi(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ar(t);return r||n}return e}function yi(t){return an(t,e=>{if(!e)throw Re.create("installation-not-found");return cs(e)})}function cs(t){return Ru(t)?{fid:t.fid,registrationStatus:0}:t}function Ru(t){return t.registrationStatus===1&&t.registrationTime+Ka<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou({appConfig:t,heartbeatServiceProvider:e},n){const r=Nu(t,n),i=hu(t,n),a=e.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const s={installation:{sdkVersion:Ya,appId:t.appId}},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await ns(()=>fetch(r,o));if(c.ok){const l=await c.json();return Za(l)}else throw await es("Generate Auth Token",c)}function Nu(t,{fid:e}){return`${Qa(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(t,e=!1){let n;const r=await an(t.appConfig,a=>{if(!ls(a))throw Re.create("not-registered");const s=a.authToken;if(!e&&Mu(s))return a;if(s.requestStatus===1)return n=Du(t,e),a;{if(!navigator.onLine)throw Re.create("app-offline");const o=Fu(a);return n=xu(t,o),o}});return n?await n:r.authToken}async function Du(t,e){let n=await vi(t.appConfig);for(;n.authToken.requestStatus===1;)await rs(100),n=await vi(t.appConfig);const r=n.authToken;return r.requestStatus===0?kr(t,e):r}function vi(t){return an(t,e=>{if(!ls(e))throw Re.create("not-registered");const n=e.authToken;return Uu(n)?{...e,authToken:{requestStatus:0}}:e})}async function xu(t,e){try{const n=await Ou(t,e),r={...e,authToken:n};return await zt(t.appConfig,r),n}catch(n){if(Xa(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await os(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await zt(t.appConfig,r)}throw n}}function ls(t){return t!==void 0&&t.registrationStatus===2}function Mu(t){return t.requestStatus===2&&!Lu(t)}function Lu(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+lu}function Fu(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Uu(t){return t.requestStatus===1&&t.requestTime+Ka<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $u(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ar(e);return r?r.catch(console.error):kr(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(t,e=!1){const n=t;return await zu(n),(await kr(n,e)).token}async function zu(t){const{registrationPromise:e}=await Ar(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){if(!t||!t.options)throw kn("App Configuration");if(!t.name)throw kn("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw kn(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function kn(t){return Re.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="installations",Bu="installations-internal",Hu=t=>{const e=t.getProvider("app").getImmediate(),n=Wu(e),r=Xe(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Vu=t=>{const e=t.getProvider("app").getImmediate(),n=Xe(e,us).getImmediate();return{getId:()=>$u(n),getToken:i=>ju(n,i)}};function qu(){ae(new Z(us,Hu,"PUBLIC")),ae(new Z(Bu,Vu,"PRIVATE"))}qu();J(Ga,Sr);J(Ga,Sr,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="analytics",Gu="firebase_id",Ku="origin",Yu=60*1e3,Ju="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pr="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=new Ir("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},F=new Le("analytics","Analytics",Xu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t){if(!t.startsWith(Pr)){const e=F.create("invalid-gtag-resource",{gtagURL:t});return L.warn(e.message),""}return t}function fs(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Zu(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ef(t,e){const n=Zu("firebase-js-sdk-policy",{createScriptURL:Qu}),r=document.createElement("script"),i=`${Pr}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function tf(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function nf(t,e,n,r,i,a){const s=r[i];try{if(s)await e[s];else{const c=(await fs(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(o){L.error(o)}t("config",i,a)}async function rf(t,e,n,r,i){try{let a=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const o=await fs(n);for(const c of s){const l=o.find(f=>f.measurementId===c),d=l&&e[l.appId];if(d)a.push(d);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),t("event",r,i||{})}catch(a){L.error(a)}}function af(t,e,n,r){async function i(a,...s){try{if(a==="event"){const[o,c]=s;await rf(t,e,n,o,c)}else if(a==="config"){const[o,c]=s;await nf(t,e,n,r,o,c)}else if(a==="consent"){const[o,c]=s;t("consent",o,c)}else if(a==="get"){const[o,c,l]=s;t("get",o,c,l)}else if(a==="set"){const[o]=s;t("set",o)}else t(a,...s)}catch(o){L.error(o)}}return i}function sf(t,e,n,r,i){let a=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=af(a,t,e,n),{gtagCore:a,wrappedGtag:window[i]}}function of(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Pr)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=30,lf=1e3;class uf{constructor(e={},n=lf){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ds=new uf;function ff(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function df(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:ff(n)},i=Ju.replace("{app-id}",e),a=await fetch(i,r);if(a.status!==200&&a.status!==304){let s="";try{const o=await a.json();o.error?.message&&(s=o.error.message)}catch{}throw F.create("config-fetch-failed",{httpStatus:a.status,responseMessage:s})}return a.json()}async function hf(t,e=ds,n){const{appId:r,apiKey:i,measurementId:a}=t.options;if(!r)throw F.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw F.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new gf;return setTimeout(async()=>{o.abort()},Yu),hs({appId:r,apiKey:i,measurementId:a},s,o,e)}async function hs(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=ds){const{appId:a,measurementId:s}=t;try{await pf(r,e)}catch(o){if(s)return L.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${o?.message}]`),{appId:a,measurementId:s};throw o}try{const o=await df(t);return i.deleteThrottleMetadata(a),o}catch(o){const c=o;if(!mf(c)){if(i.deleteThrottleMetadata(a),s)return L.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:a,measurementId:s};throw o}const l=Number(c?.customData?.httpStatus)===503?ci(n,i.intervalMillis,cf):ci(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(a,d),L.debug(`Calling attemptFetch again in ${l} millis`),hs(t,d,r,i)}}function pf(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),a=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(a),r(F.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function mf(t){if(!(t instanceof ee)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class gf{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function yf(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const a=await e,s={...r,send_to:a};t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vf(){if($a())try{await ja()}catch(t){return L.warn(F.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return L.warn(F.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bf(t,e,n,r,i,a,s){const o=hf(t);o.then(u=>{n[u.measurementId]=u.appId,t.options.measurementId&&u.measurementId!==t.options.measurementId&&L.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${u.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(u=>L.error(u)),e.push(o);const c=vf().then(u=>{if(u)return r.getId()}),[l,d]=await Promise.all([o,c]);of(a)||ef(a,l.measurementId),i("js",new Date);const f=s?.config??{};return f[Ku]="firebase",f.update=!0,d!=null&&(f[Gu]=d),i("config",l.measurementId,f),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.app=e}_delete(){return delete it[this.app.options.appId],Promise.resolve()}}let it={},bi=[];const _i={};let Pn="dataLayer",wf="gtag",wi,ps,Ii=!1;function If(){const t=[];if(Ua()&&t.push("This is a browser extension environment."),jc()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=F.create("invalid-analytics-context",{errorInfo:e});L.warn(n.message)}}function Ef(t,e,n){If();const r=t.options.appId;if(!r)throw F.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)L.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw F.create("no-api-key");if(it[r]!=null)throw F.create("already-exists",{id:r});if(!Ii){tf(Pn);const{wrappedGtag:a,gtagCore:s}=sf(it,bi,_i,Pn,wf);ps=a,wi=s,Ii=!0}return it[r]=bf(t,bi,_i,e,wi,Pn,n),new _f(t)}function Xg(t=Ha()){t=z(t);const e=Xe(t,Wt);return e.isInitialized()?e.getImmediate():Sf(t)}function Sf(t,e={}){const n=Xe(t,Wt);if(n.isInitialized()){const i=n.getImmediate();if(Ce(e,n.getOptions()))return i;throw F.create("already-initialized")}return n.initialize({options:e})}function Tf(t,e,n,r){t=z(t),yf(ps,it[t.app.options.appId],e,n,r).catch(i=>L.error(i))}const Ei="@firebase/analytics",Si="0.10.18";function Af(){ae(new Z(Wt,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Ef(r,i,n)},"PUBLIC")),ae(new Z("analytics-internal",t,"PRIVATE")),J(Ei,Si),J(Ei,Si,"esm2020");function t(e){try{const n=e.getProvider(Wt).getImmediate();return{logEvent:(r,i,a)=>Tf(n,r,i,a)}}catch(n){throw F.create("interop-component-reg-failed",{reason:n})}}}Af();function ms(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kf=ms,gs=new Le("auth","Firebase",ms());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Ir("@firebase/auth");function Pf(t,...e){Bt.logLevel<=A.WARN&&Bt.warn(`Auth (${pt}): ${t}`,...e)}function Rt(t,...e){Bt.logLevel<=A.ERROR&&Bt.error(`Auth (${pt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t,...e){throw Cr(t,...e)}function X(t,...e){return Cr(t,...e)}function ys(t,e,n){const r={...kf(),[e]:n};return new Le("auth","Firebase",r).create(e,{appName:t.name})}function re(t){return ys(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cr(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gs.create(t,...e)}function b(t,e,...n){if(!t)throw Cr(e,...n)}function te(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rt(e),new Error(e)}function se(t,e){t||te(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return typeof self<"u"&&self.location?.href||""}function Cf(){return Ti()==="http:"||Ti()==="https:"}function Ti(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cf()||Ua()||"connection"in navigator)?navigator.onLine:!0}function Of(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){this.shortDelay=e,this.longDelay=n,se(n>e,"Short delay should be less than long delay!"),this.isMobile=Lc()||Uc()}get(){return Rf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t,e){se(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xf=new mt(3e4,6e4);function we(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function le(t,e,n,r,i={}){return bs(t,i,async()=>{let a={},s={};r&&(e==="GET"?s=r:a={body:JSON.stringify(r)});const o=ht({key:t.config.apiKey,...s}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...a};return Fc()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&nn(t.emulatorConfig.host)&&(l.credentials="include"),vs.fetch()(await _s(t,t.config.apiHost,n,o),l)})}async function bs(t,e,n){t._canInitEmulator=!1;const r={...Nf,...e};try{const i=new Lf(t),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw kt(t,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const o=a.ok?s.errorMessage:s.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw kt(t,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw kt(t,"email-already-in-use",s);if(c==="USER_DISABLED")throw kt(t,"user-disabled",s);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ys(t,d,l);q(t,d)}}catch(i){if(i instanceof ee)throw i;q(t,"network-request-failed",{message:String(i)})}}async function gt(t,e,n,r,i={}){const a=await le(t,e,n,r,i);return"mfaPendingCredential"in a&&q(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function _s(t,e,n,r){const i=`${e}${n}?${r}`,a=t,s=a.config.emulator?Rr(t.config,i):`${t.config.apiScheme}://${i}`;return Df.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(s).toString():s}function Mf(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Lf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(X(this.auth,"network-request-failed")),xf.get())})}}function kt(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=X(t,e,r);return i.customData._tokenResponse=n,i}function Ai(t){return t!==void 0&&t.enterprise!==void 0}class Ff{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Mf(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Uf(t,e){return le(t,"GET","/v2/recaptchaConfig",we(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $f(t,e){return le(t,"POST","/v1/accounts:delete",e)}async function Ht(t,e){return le(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jf(t,e=!1){const n=z(t),r=await n.getIdToken(e),i=Or(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,s=a?.sign_in_provider;return{claims:i,token:r,authTime:at(Cn(i.auth_time)),issuedAtTime:at(Cn(i.iat)),expirationTime:at(Cn(i.exp)),signInProvider:s||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Cn(t){return Number(t)*1e3}function Or(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Rt("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ma(n);return i?JSON.parse(i):(Rt("Failed to decode base64 JWT payload"),null)}catch(i){return Rt("Caught error parsing JWT payload as JSON",i?.toString()),null}}function ki(t){const e=Or(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ee&&zf(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zf({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=at(this.lastLoginAt),this.creationTime=at(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(t){const e=t.auth,n=await t.getIdToken(),r=await Ye(t,Ht(e,{idToken:n}));b(r?.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const a=i.providerUserInfo?.length?ws(i.providerUserInfo):[],s=Hf(t.providerData,a),o=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!s?.length,l=o?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new nr(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function Bf(t){const e=z(t);await Vt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hf(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ws(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vf(t,e){const n=await bs(t,{},async()=>{const r=ht({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,s=await _s(t,i,"/v1/token",`key=${a}`),o=await t._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:o,body:r};return t.emulatorConfig&&nn(t.emulatorConfig.host)&&(c.credentials="include"),vs.fetch()(s,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qf(t,e){return le(t,"POST","/v2/accounts:revokeToken",we(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ki(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=ki(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await Vf(e,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,s=new Be;return r&&(b(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),a&&(b(typeof a=="number","internal-error",{appName:e}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Be,this.toJSON())}_performRefresh(){return te("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class H{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Wf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ye(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jf(this,e)}reload(){return Bf(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new H({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(B(this.auth.app))return Promise.reject(re(this.auth));const e=await this.getIdToken();return await Ye(this,$f(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,a=n.phoneNumber??void 0,s=n.photoURL??void 0,o=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:u,isAnonymous:p,providerData:g,stsTokenManager:v}=n;b(f&&v,e,"internal-error");const T=Be.fromJSON(this.name,v);b(typeof f=="string",e,"internal-error"),fe(r,e.name),fe(i,e.name),b(typeof u=="boolean",e,"internal-error"),b(typeof p=="boolean",e,"internal-error"),fe(a,e.name),fe(s,e.name),fe(o,e.name),fe(c,e.name),fe(l,e.name),fe(d,e.name);const E=new H({uid:f,auth:e,email:i,emailVerified:u,displayName:r,isAnonymous:p,photoURL:s,phoneNumber:a,tenantId:o,stsTokenManager:T,createdAt:l,lastLoginAt:d});return g&&Array.isArray(g)&&(E.providerData=g.map(S=>({...S}))),c&&(E._redirectEventId=c),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Be;i.updateFromServerResponse(n);const a=new H({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vt(a),a}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];b(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?ws(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!a?.length,o=new Be;o.updateFromIdToken(r);const c=new H({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:s}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new nr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Map;function ne(t){se(t instanceof Function,"Expected a class definition");let e=Pi.get(t);return e?(se(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pi.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Is.type="NONE";const Ci=Is;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,e,n){return`firebase:${t}:${e}:${n}`}class He{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Ot(this.userKey,i.apiKey,a),this.fullPersistenceKey=Ot("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ht(this.auth,{idToken:e}).catch(()=>{});return n?H._fromGetAccountInfoResponse(this.auth,n,e):null}return H._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new He(ne(Ci),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let a=i[0]||ne(Ci);const s=Ot(r,e.config.apiKey,e.name);let o=null;for(const l of n)try{const d=await l._get(s);if(d){let f;if(typeof d=="string"){const u=await Ht(e,{idToken:d}).catch(()=>{});if(!u)break;f=await H._fromGetAccountInfoResponse(e,u,d)}else f=H._fromJSON(e,d);l!==a&&(o=f),a=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!a._shouldAllowMigration||!c.length?new He(a,e,r):(a=c[0],o&&await a._set(s,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==a)try{await l._remove(s)}catch{}})),new He(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(As(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Es(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ps(e))return"Blackberry";if(Cs(e))return"Webos";if(Ss(e))return"Safari";if((e.includes("chrome/")||Ts(e))&&!e.includes("edge/"))return"Chrome";if(ks(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Es(t=M()){return/firefox\//i.test(t)}function Ss(t=M()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ts(t=M()){return/crios\//i.test(t)}function As(t=M()){return/iemobile/i.test(t)}function ks(t=M()){return/android/i.test(t)}function Ps(t=M()){return/blackberry/i.test(t)}function Cs(t=M()){return/webos/i.test(t)}function Nr(t=M()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gf(t=M()){return Nr(t)&&!!window.navigator?.standalone}function Kf(){return $c()&&document.documentMode===10}function Rs(t=M()){return Nr(t)||ks(t)||Cs(t)||Ps(t)||/windows phone/i.test(t)||As(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t,e=[]){let n;switch(t){case"Browser":n=Ri(M());break;case"Worker":n=`${Ri(M())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=a=>new Promise((s,o)=>{try{const c=e(a);s(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jf(t,e={}){return le(t,"GET","/v2/passwordPolicy",we(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=6;class Qf{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Xf,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oi(this),this.idTokenSubscription=new Oi(this),this.beforeStateQueue=new Yf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ne(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await He.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ht(this,{idToken:e}),r=await H._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(B(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(s,s))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,s=r?._redirectEventId,o=await this.tryRedirectSignIn(e);(!a||a===s)&&o?.user&&(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vt(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Of()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(B(this.app))return Promise.reject(re(this));const n=e?z(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return B(this.app)?Promise.reject(re(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return B(this.app)?Promise.reject(re(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ne(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jf(this),n=new Qf(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Le("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qf(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ne(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await He.create(this,[ne(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(o,this,"internal-error"),o.then(()=>{s||a(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{s=!0,c()}}else{const c=e.addObserver(n);return()=>{s=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Os(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(B(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Pf(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Fe(t){return z(t)}class Oi{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vc(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ed(t){sn=t}function Ns(t){return sn.loadJS(t)}function td(){return sn.recaptchaEnterpriseScript}function nd(){return sn.gapiScript}function rd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class id{constructor(){this.enterprise=new ad}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ad{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const sd="recaptcha-enterprise",Ds="NO_RECAPTCHA";class od{constructor(e){this.type=sd,this.auth=Fe(e)}async verify(e="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(s,o)=>{Uf(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ff(c);return a.tenantId==null?a._agentRecaptchaConfig=l:a._tenantRecaptchaConfigs[a.tenantId]=l,s(l.siteKey)}}).catch(c=>{o(c)})})}function i(a,s,o){const c=window.grecaptcha;Ai(c)?c.enterprise.ready(()=>{c.enterprise.execute(a,{action:e}).then(l=>{s(l)}).catch(()=>{s(Ds)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new id().execute("siteKey",{action:"verify"}):new Promise((a,s)=>{r(this.auth).then(o=>{if(!n&&Ai(window.grecaptcha))i(o,a,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let c=td();c.length!==0&&(c+=o),Ns(c).then(()=>{i(o,a,s)}).catch(l=>{s(l)})}}).catch(o=>{s(o)})})}}async function Ni(t,e,n,r=!1,i=!1){const a=new od(t);let s;if(i)s=Ds;else try{s=await a.verify(n)}catch{s=await a.verify(n,!0)}const o={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const c=o.phoneEnrollmentInfo.phoneNumber,l=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const c=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function rr(t,e,n,r,i){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ni(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Ni(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t,e){const n=Xe(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(Ce(a,e??{}))return i;q(i,"already-initialized")}return n.initialize({options:e})}function ld(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(ne);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function ud(t,e,n){const r=Fe(t);b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=xs(e),{host:s,port:o}=fd(e),c=o===null?"":`:${o}`,l={url:`${a}//${s}${c}/`},d=Object.freeze({host:s,port:o,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){b(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),b(Ce(l,r.config.emulator)&&Ce(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,nn(s)?(Nc(`${a}//${s}${c}`),Mc("Auth",!0)):dd()}function xs(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fd(t){const e=xs(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Di(r.substr(a.length+1))}}else{const[a,s]=r.split(":");return{host:a,port:Di(s)}}}function Di(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dd(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return te("not implemented")}_getIdTokenResponse(e){return te("not implemented")}_linkToIdToken(e,n){return te("not implemented")}_getReauthenticationResolver(e){return te("not implemented")}}async function hd(t,e){return le(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(t,e){return gt(t,"POST","/v1/accounts:signInWithPassword",we(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function md(t,e){return gt(t,"POST","/v1/accounts:signInWithEmailLink",we(t,e))}async function gd(t,e){return gt(t,"POST","/v1/accounts:signInWithEmailLink",we(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Dr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ft(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ft(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rr(e,n,"signInWithPassword",pd);case"emailLink":return md(e,{email:this._email,oobCode:this._password});default:q(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rr(e,r,"signUpPassword",hd);case"emailLink":return gd(e,{idToken:n,email:this._email,oobCode:this._password});default:q(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(t,e){return gt(t,"POST","/v1/accounts:signInWithIdp",we(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="http://localhost";class Ne extends Dr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ne(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):q("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=n;if(!r||!i)return null;const s=new Ne(r,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Ve(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ve(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ve(e,n)}buildRequest(){const e={requestUri:yd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ht(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bd(t){const e=et(tt(t)).link,n=e?et(tt(e)).deep_link_id:null,r=et(tt(t)).deep_link_id;return(r?et(tt(r)).link:null)||r||n||e||t}class xr{constructor(e){const n=et(tt(e)),r=n.apiKey??null,i=n.oobCode??null,a=vd(n.mode??null);b(r&&i&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=bd(e);try{return new xr(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(){this.providerId=Qe.PROVIDER_ID}static credential(e,n){return ft._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xr.parseLink(n);return b(r,"argument-error"),ft._fromEmailAndCode(e,r.code,r.tenantId)}}Qe.PROVIDER_ID="password";Qe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Ms{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends yt{constructor(){super("facebook.com")}static credential(e){return Ne._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return de.credential(e.oauthAccessToken)}catch{return null}}}de.FACEBOOK_SIGN_IN_METHOD="facebook.com";de.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends yt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ne._fromParams({providerId:he.PROVIDER_ID,signInMethod:he.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return he.credentialFromTaggedObject(e)}static credentialFromError(e){return he.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return he.credential(n,r)}catch{return null}}}he.GOOGLE_SIGN_IN_METHOD="google.com";he.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends yt{constructor(){super("github.com")}static credential(e){return Ne._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pe.credentialFromTaggedObject(e)}static credentialFromError(e){return pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pe.credential(e.oauthAccessToken)}catch{return null}}}pe.GITHUB_SIGN_IN_METHOD="github.com";pe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends yt{constructor(){super("twitter.com")}static credential(e,n){return Ne._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return me.credentialFromTaggedObject(e)}static credentialFromError(e){return me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return me.credential(n,r)}catch{return null}}}me.TWITTER_SIGN_IN_METHOD="twitter.com";me.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _d(t,e){return gt(t,"POST","/v1/accounts:signUp",we(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const a=await H._fromIdTokenResponse(e,r,i),s=xi(r);return new De({user:a,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xi(r);return new De({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends ee{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qt(e,n,r,i)}}function Ls(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?qt._fromErrorAndOperation(t,a,e,r):a})}async function wd(t,e,n=!1){const r=await Ye(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return De._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(t,e,n=!1){const{auth:r}=t;if(B(r.app))return Promise.reject(re(r));const i="reauthenticate";try{const a=await Ye(t,Ls(r,i,e,t),n);b(a.idToken,r,"internal-error");const s=Or(a.idToken);b(s,r,"internal-error");const{sub:o}=s;return b(t.uid===o,r,"user-mismatch"),De._forOperation(t,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&q(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t,e,n=!1){if(B(t.app))return Promise.reject(re(t));const r="signIn",i=await Ls(t,r,e),a=await De._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(a.user),a}async function Ed(t,e){return Fs(Fe(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t){const e=Fe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Qg(t,e,n){if(B(t.app))return Promise.reject(re(t));const r=Fe(t),s=await rr(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_d).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Us(t),c}),o=await De._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(o.user),o}function Zg(t,e,n){return B(t.app)?Promise.reject(re(t)):Ed(z(t),Qe.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Us(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sd(t,e){return le(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=z(t),a={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Ye(r,Sd(r.auth,a));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find(({providerId:c})=>c==="password");o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function Td(t,e,n,r){return z(t).onIdTokenChanged(e,n,r)}function Ad(t,e,n){return z(t).beforeAuthStateChanged(e,n)}function ty(t,e,n,r){return z(t).onAuthStateChanged(e,n,r)}function ny(t){return z(t).signOut()}const Gt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gt,"1"),this.storage.removeItem(Gt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=1e3,Pd=10;class js extends $s{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,o,c)=>{this.notifyListeners(s,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},a=this.storage.getItem(r);Kf()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Pd):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}js.type="LOCAL";const Cd=js;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends $s{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zs.type="SESSION";const Ws=zs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new on(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:a}=n.data,s=this.handlersMap[i];if(!s?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(s).map(async l=>l(n.origin,a)),c=await Rd(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}on.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,s;return new Promise((o,c)=>{const l=Mr("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const u=f;if(u.data.eventId===l)switch(u.data.status){case"ack":clearTimeout(d),a=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),o(u.data.response);break;default:clearTimeout(d),clearTimeout(a),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return window}function Nd(t){Q().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(){return typeof Q().WorkerGlobalScope<"u"&&typeof Q().importScripts=="function"}async function Dd(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xd(){return navigator?.serviceWorker?.controller||null}function Md(){return Bs()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="firebaseLocalStorageDb",Ld=1,Kt="firebaseLocalStorage",Vs="fbase_key";class vt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cn(t,e){return t.transaction([Kt],e?"readwrite":"readonly").objectStore(Kt)}function Fd(){const t=indexedDB.deleteDatabase(Hs);return new vt(t).toPromise()}function ir(){const t=indexedDB.open(Hs,Ld);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kt,{keyPath:Vs})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kt)?e(r):(r.close(),await Fd(),e(await ir()))})})}async function Mi(t,e,n){const r=cn(t,!0).put({[Vs]:e,value:n});return new vt(r).toPromise()}async function Ud(t,e){const n=cn(t,!1).get(e),r=await new vt(n).toPromise();return r===void 0?null:r.value}function Li(t,e){const n=cn(t,!0).delete(e);return new vt(n).toPromise()}const $d=800,jd=3;class qs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ir(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jd)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=on._getInstance(Md()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Dd(),!this.activeServiceWorker)return;this.sender=new Od(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ir();return await Mi(e,Gt,"1"),await Li(e,Gt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mi(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ud(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Li(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=cn(i,!1).getAll();return new vt(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$d)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qs.type="LOCAL";const zd=qs;new mt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t,e){return e?ne(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Dr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ve(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ve(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bd(t){return Fs(t.auth,new Lr(t),t.bypassAuthState)}function Hd(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),Id(n,new Lr(t),t.bypassAuthState)}async function Vd(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),wd(n,new Lr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:s,type:o}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bd;case"linkViaPopup":case"linkViaRedirect":return Vd;case"reauthViaPopup":case"reauthViaRedirect":return Hd;default:q(this.auth,"internal-error")}}resolve(e){se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new mt(2e3,1e4);class ze extends Gs{constructor(e,n,r,i,a){super(e,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,ze.currentPopupAction&&ze.currentPopupAction.cancel(),ze.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){se(this.filter.length===1,"Popup operations only handle one event");const e=Mr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(X(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(X(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ze.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(X(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qd.get())};e()}}ze.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="pendingRedirect",Nt=new Map;class Kd extends Gs{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Nt.get(this.auth._key());if(!e){try{const r=await Yd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Nt.set(this.auth._key(),e)}return this.bypassAuthState||Nt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yd(t,e){const n=Qd(e),r=Xd(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Jd(t,e){Nt.set(t._key(),e)}function Xd(t){return ne(t._redirectPersistence)}function Qd(t){return Ot(Gd,t.config.apiKey,t.name)}async function Zd(t,e,n=!1){if(B(t.app))return Promise.reject(re(t));const r=Fe(t),i=Wd(r,e),s=await new Kd(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=600*1e3;class th{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Ks(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(X(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fi(e))}saveEventToCache(e){this.cachedEventUids.add(Fi(e)),this.lastProcessedEventTime=Date.now()}}function Fi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ks({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function nh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ks(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(t,e={}){return le(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ah=/^https?/;async function sh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rh(t);for(const n of e)try{if(oh(n))return}catch{}q(t,"unauthorized-domain")}function oh(t){const e=tr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!ah.test(n))return!1;if(ih.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=new mt(3e4,6e4);function Ui(){const t=Q().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lh(t){return new Promise((e,n)=>{function r(){Ui(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ui(),n(X(t,"network-request-failed"))},timeout:ch.get()})}if(Q().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Q().gapi?.load)r();else{const i=rd("iframefcb");return Q()[i]=()=>{gapi.load?r():n(X(t,"network-request-failed"))},Ns(`${nd()}?onload=${i}`).catch(a=>n(a))}}).catch(e=>{throw Dt=null,e})}let Dt=null;function uh(t){return Dt=Dt||lh(t),Dt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new mt(5e3,15e3),dh="__/auth/iframe",hh="emulator/auth/iframe",ph={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gh(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rr(e,hh):`https://${t.config.authDomain}/${dh}`,r={apiKey:e.apiKey,appName:t.name,v:pt},i=mh.get(t.config.apiHost);i&&(r.eid=i);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${ht(r).slice(1)}`}async function yh(t){const e=await uh(t),n=Q().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:gh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ph,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const s=X(t,"network-request-failed"),o=Q().setTimeout(()=>{a(s)},fh.get());function c(){Q().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{a(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bh=500,_h=600,wh="_blank",Ih="http://localhost";class $i{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Eh(t,e,n,r=bh,i=_h){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c={...vh,width:r.toString(),height:i.toString(),top:a,left:s},l=M().toLowerCase();n&&(o=Ts(l)?wh:n),Es(l)&&(e=e||Ih,c.scrollbars="yes");const d=Object.entries(c).reduce((u,[p,g])=>`${u}${p}=${g},`,"");if(Gf(l)&&o!=="_self")return Sh(e||"",o),new $i(null);const f=window.open(e||"",o,d);b(f,t,"popup-blocked");try{f.focus()}catch{}return new $i(f)}function Sh(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="__/auth/handler",Ah="emulator/auth/handler",kh=encodeURIComponent("fac");async function ji(t,e,n,r,i,a){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pt,eventId:i};if(e instanceof Ms){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Hc(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))s[d]=f}if(e instanceof yt){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const o=s;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const c=await t._getAppCheckToken(),l=c?`#${kh}=${encodeURIComponent(c)}`:"";return`${Ph(t)}?${ht(o).slice(1)}${l}`}function Ph({config:t}){return t.emulator?Rr(t,Ah):`https://${t.authDomain}/${Th}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="webStorageSupport";class Ch{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ws,this._completeRedirectFn=Zd,this._overrideRedirectResult=Jd}async _openPopup(e,n,r,i){se(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await ji(e,n,r,tr(),i);return Eh(e,a,Mr())}async _openRedirect(e,n,r,i){await this._originValidation(e);const a=await ji(e,n,r,tr(),i);return Nd(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(se(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yh(e),r=new th(e);return n.register("authEvent",i=>(b(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rn,{type:Rn},i=>{const a=i?.[0]?.[Rn];a!==void 0&&n(!!a),q(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rs()||Ss()||Nr()}}const Rh=Ch;var zi="@firebase/auth",Wi="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dh(t){ae(new Z("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=r.options;b(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Os(t)},l=new Zf(r,i,a,c);return ld(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ae(new Z("auth-internal",e=>{const n=Fe(e.getProvider("auth").getImmediate());return(r=>new Oh(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),J(zi,Wi,Nh(t)),J(zi,Wi,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=300,Mh=Fa("authIdTokenMaxAge")||xh;let Bi=null;const Lh=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mh)return;const i=n?.token;Bi!==i&&(Bi=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ry(t=Ha()){const e=Xe(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cd(t,{popupRedirectResolver:Rh,persistence:[zd,Cd,Ws]}),r=Fa("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const s=Lh(a.toString());Ad(n,s,()=>s(n.currentUser)),Td(n,o=>s(o))}}const i=Rc("auth");return i&&ud(n,`http://${i}`),n}function Fh(){return document.getElementsByTagName("head")?.[0]??document}ed({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const a=X("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",Fh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dh("Browser");/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function ar(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Uh(t){if(Array.isArray(t))return t}function $h(t){if(Array.isArray(t))return ar(t)}function jh(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function zh(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Ys(r.key),r)}}function Wh(t,e,n){return e&&zh(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function xt(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Fr(t))||e){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,s=!0,o=!1;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return s=c.done,c},e:function(c){o=!0,a=c},f:function(){try{s||n.return==null||n.return()}finally{if(o)throw a}}}}function I(t,e,n){return(e=Ys(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Bh(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Hh(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,a,s,o=[],c=!0,l=!1;try{if(a=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(o.push(r.value),o.length!==e);c=!0);}catch(d){l=!0,i=d}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw i}}return o}}function Vh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hi(Object(n),!0).forEach(function(r){I(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ln(t,e){return Uh(t)||Hh(t,e)||Fr(t,e)||Vh()}function G(t){return $h(t)||Bh(t)||Fr(t)||qh()}function Gh(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ys(t){var e=Gh(t,"string");return typeof e=="symbol"?e:e+""}function Yt(t){"@babel/helpers - typeof";return Yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yt(t)}function Fr(t,e){if(t){if(typeof t=="string")return ar(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ar(t,e):void 0}}var Vi=function(){},Ur={},Js={},Xs=null,Qs={mark:Vi,measure:Vi};try{typeof window<"u"&&(Ur=window),typeof document<"u"&&(Js=document),typeof MutationObserver<"u"&&(Xs=MutationObserver),typeof performance<"u"&&(Qs=performance)}catch{}var Kh=Ur.navigator||{},qi=Kh.userAgent,Gi=qi===void 0?"":qi,ve=Ur,C=Js,Ki=Xs,Pt=Qs;ve.document;var ue=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",Zs=~Gi.indexOf("MSIE")||~Gi.indexOf("Trident/"),On,Yh=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Jh=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,eo={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},Xh={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},to=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],x="classic",bt="duotone",no="sharp",ro="sharp-duotone",io="chisel",ao="etch",so="jelly",oo="jelly-duo",co="jelly-fill",lo="notdog",uo="notdog-duo",fo="slab",ho="slab-press",po="thumbprint",mo="whiteboard",Qh="Classic",Zh="Duotone",ep="Sharp",tp="Sharp Duotone",np="Chisel",rp="Etch",ip="Jelly",ap="Jelly Duo",sp="Jelly Fill",op="Notdog",cp="Notdog Duo",lp="Slab",up="Slab Press",fp="Thumbprint",dp="Whiteboard",go=[x,bt,no,ro,io,ao,so,oo,co,lo,uo,fo,ho,po,mo];On={},I(I(I(I(I(I(I(I(I(I(On,x,Qh),bt,Zh),no,ep),ro,tp),io,np),ao,rp),so,ip),oo,ap),co,sp),lo,op),I(I(I(I(I(On,uo,cp),fo,lp),ho,up),po,fp),mo,dp);var hp={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},pp={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},mp=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),gp={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},yo=["fak","fa-kit","fakd","fa-kit-duotone"],Yi={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},yp=["kit"],vp="kit",bp="kit-duotone",_p="Kit",wp="Kit Duotone";I(I({},vp,_p),bp,wp);var Ip={kit:{"fa-kit":"fak"}},Ep={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Sp={kit:{fak:"fa-kit"}},Ji={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Nn,Ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Tp=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Ap="classic",kp="duotone",Pp="sharp",Cp="sharp-duotone",Rp="chisel",Op="etch",Np="jelly",Dp="jelly-duo",xp="jelly-fill",Mp="notdog",Lp="notdog-duo",Fp="slab",Up="slab-press",$p="thumbprint",jp="whiteboard",zp="Classic",Wp="Duotone",Bp="Sharp",Hp="Sharp Duotone",Vp="Chisel",qp="Etch",Gp="Jelly",Kp="Jelly Duo",Yp="Jelly Fill",Jp="Notdog",Xp="Notdog Duo",Qp="Slab",Zp="Slab Press",em="Thumbprint",tm="Whiteboard";Nn={},I(I(I(I(I(I(I(I(I(I(Nn,Ap,zp),kp,Wp),Pp,Bp),Cp,Hp),Rp,Vp),Op,qp),Np,Gp),Dp,Kp),xp,Yp),Mp,Jp),I(I(I(I(I(Nn,Lp,Xp),Fp,Qp),Up,Zp),$p,em),jp,tm);var nm="kit",rm="kit-duotone",im="Kit",am="Kit Duotone";I(I({},nm,im),rm,am);var sm={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},om={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},sr={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},cm=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],vo=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Tp,cm),lm=["solid","regular","light","thin","duotone","brands","semibold"],bo=[1,2,3,4,5,6,7,8,9,10],um=bo.concat([11,12,13,14,15,16,17,18,19,20]),fm=["aw","fw","pull-left","pull-right"],dm=[].concat(G(Object.keys(om)),lm,fm,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ct.GROUP,Ct.SWAP_OPACITY,Ct.PRIMARY,Ct.SECONDARY]).concat(bo.map(function(t){return"".concat(t,"x")})).concat(um.map(function(t){return"w-".concat(t)})),hm={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},oe="___FONT_AWESOME___",or=16,_o="fa",wo="svg-inline--fa",xe="data-fa-i2svg",cr="data-fa-pseudo-element",pm="data-fa-pseudo-element-pending",$r="data-prefix",jr="data-icon",Xi="fontawesome-i2svg",mm="async",gm=["HTML","HEAD","STYLE","SCRIPT"],Io=["::before","::after",":before",":after"],Eo=(function(){try{return!0}catch{return!1}})();function _t(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[x]}})}var So=h({},eo);So[x]=h(h(h(h({},{"fa-duotone":"duotone"}),eo[x]),Yi.kit),Yi["kit-duotone"]);var ym=_t(So),lr=h({},gp);lr[x]=h(h(h(h({},{duotone:"fad"}),lr[x]),Ji.kit),Ji["kit-duotone"]);var Qi=_t(lr),ur=h({},sr);ur[x]=h(h({},ur[x]),Sp.kit);var To=_t(ur),fr=h({},sm);fr[x]=h(h({},fr[x]),Ip.kit);_t(fr);var vm=Yh,Ao="fa-layers-text",bm=Jh,_m=h({},hp);_t(_m);var wm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Dn=Xh,Im=[].concat(G(yp),G(dm)),st=ve.FontAwesomeConfig||{};function Em(t){var e=C.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Sm(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(C&&typeof C.querySelector=="function"){var Tm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Tm.forEach(function(t){var e=ln(t,2),n=e[0],r=e[1],i=Sm(Em(n));i!=null&&(st[r]=i)})}var ko={styleDefault:"solid",familyDefault:x,cssPrefix:_o,replacementClass:wo,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);var Je=h(h({},ko),st);Je.autoReplaceSvg||(Je.observeMutations=!1);var y={};Object.keys(ko).forEach(function(t){Object.defineProperty(y,t,{enumerable:!0,set:function(n){Je[t]=n,ot.forEach(function(r){return r(y)})},get:function(){return Je[t]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(e){Je.cssPrefix=e,ot.forEach(function(n){return n(y)})},get:function(){return Je.cssPrefix}});ve.FontAwesomeConfig=y;var ot=[];function Am(t){return ot.push(t),function(){ot.splice(ot.indexOf(t),1)}}var je=or,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function km(t){if(!(!t||!ue)){var e=C.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=C.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=a)}return C.head.insertBefore(e,r),t}}var Pm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zi(){for(var t=12,e="";t-- >0;)e+=Pm[Math.random()*62|0];return e}function Ze(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function zr(t){return t.classList?Ze(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Po(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Cm(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Po(t[n]),'" ')},"").trim()}function un(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Wr(t){return t.size!==Y.size||t.x!==Y.x||t.y!==Y.y||t.rotate!==Y.rotate||t.flipX||t.flipY}function Rm(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(a," ").concat(s," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function Om(t){var e=t.transform,n=t.width,r=n===void 0?or:n,i=t.height,a=i===void 0?or:i,s="";return Zs?s+="translate(".concat(e.x/je-r/2,"em, ").concat(e.y/je-a/2,"em) "):s+="translate(calc(-50% + ".concat(e.x/je,"em), calc(-50% + ").concat(e.y/je,"em)) "),s+="scale(".concat(e.size/je*(e.flipX?-1:1),", ").concat(e.size/je*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Nm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;function Co(){var t=_o,e=wo,n=y.cssPrefix,r=y.replacementClass,i=Nm;if(n!==t||r!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");i=i.replace(a,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var ea=!1;function xn(){y.autoAddCss&&!ea&&(km(Co()),ea=!0)}var Dm={mixout:function(){return{dom:{css:Co,insertCss:xn}}},hooks:function(){return{beforeDOMElementCreation:function(){xn()},beforeI2svg:function(){xn()}}}},ce=ve||{};ce[oe]||(ce[oe]={});ce[oe].styles||(ce[oe].styles={});ce[oe].hooks||(ce[oe].hooks={});ce[oe].shims||(ce[oe].shims=[]);var V=ce[oe],Ro=[],Oo=function(){C.removeEventListener("DOMContentLoaded",Oo),Jt=1,Ro.map(function(e){return e()})},Jt=!1;ue&&(Jt=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Jt||C.addEventListener("DOMContentLoaded",Oo));function xm(t){ue&&(Jt?setTimeout(t,0):Ro.push(t))}function wt(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,a=i===void 0?[]:i;return typeof t=="string"?Po(t):"<".concat(e," ").concat(Cm(r),">").concat(a.map(wt).join(""),"</").concat(e,">")}function ta(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Mn=function(e,n,r,i){var a=Object.keys(e),s=a.length,o=n,c,l,d;for(r===void 0?(c=1,d=e[a[0]]):(c=0,d=r);c<s;c++)l=a[c],d=o(d,e[l],l,e);return d};function No(t){return G(t).length!==1?null:t.codePointAt(0).toString(16)}function na(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Do(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=na(e);typeof V.hooks.addPack=="function"&&!i?V.hooks.addPack(t,na(e)):V.styles[t]=h(h({},V.styles[t]||{}),a),t==="fas"&&Do("fa",e)}var dt=V.styles,Mm=V.shims,xo=Object.keys(To),Lm=xo.reduce(function(t,e){return t[e]=Object.keys(To[e]),t},{}),Br=null,Mo={},Lo={},Fo={},Uo={},$o={};function Fm(t){return~Im.indexOf(t)}function Um(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Fm(i)?i:null}var jo=function(){var e=function(a){return Mn(dt,function(s,o,c){return s[c]=Mn(o,a,{}),s},{})};Mo=e(function(i,a,s){if(a[3]&&(i[a[3]]=s),a[2]){var o=a[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=s})}return i}),Lo=e(function(i,a,s){if(i[s]=s,a[2]){var o=a[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=s})}return i}),$o=e(function(i,a,s){var o=a[2];return i[s]=s,o.forEach(function(c){i[c]=s}),i});var n="far"in dt||y.autoFetchSvg,r=Mn(Mm,function(i,a){var s=a[0],o=a[1],c=a[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:c}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});Fo=r.names,Uo=r.unicodes,Br=fn(y.styleDefault,{family:y.familyDefault})};Am(function(t){Br=fn(t.styleDefault,{family:y.familyDefault})});jo();function Hr(t,e){return(Mo[t]||{})[e]}function $m(t,e){return(Lo[t]||{})[e]}function Ae(t,e){return($o[t]||{})[e]}function zo(t){return Fo[t]||{prefix:null,iconName:null}}function jm(t){var e=Uo[t],n=Hr("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function be(){return Br}var Wo=function(){return{prefix:null,iconName:null,rest:[]}};function zm(t){var e=x,n=xo.reduce(function(r,i){return r[i]="".concat(y.cssPrefix,"-").concat(i),r},{});return go.forEach(function(r){(t.includes(n[r])||t.some(function(i){return Lm[r].includes(i)}))&&(e=r)}),e}function fn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?x:n,i=ym[r][t];if(r===bt&&!t)return"fad";var a=Qi[r][t]||Qi[r][i],s=t in V.styles?t:null,o=a||s||null;return o}function Wm(t){var e=[],n=null;return t.forEach(function(r){var i=Um(y.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function ra(t){return t.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var ia=vo.concat(yo);function dn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,a=ra(t.filter(function(p){return ia.includes(p)})),s=ra(t.filter(function(p){return!ia.includes(p)})),o=a.filter(function(p){return i=p,!to.includes(p)}),c=ln(o,1),l=c[0],d=l===void 0?null:l,f=zm(a),u=h(h({},Wm(s)),{},{prefix:fn(d,{family:f})});return h(h(h({},u),qm({values:t,family:f,styles:dt,config:y,canonical:u,givenPrefix:i})),Bm(r,i,u))}function Bm(t,e,n){var r=n.prefix,i=n.iconName;if(t||!r||!i)return{prefix:r,iconName:i};var a=e==="fa"?zo(i):{},s=Ae(r,i);return i=a.iconName||s||i,r=a.prefix||r,r==="far"&&!dt.far&&dt.fas&&!y.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}var Hm=go.filter(function(t){return t!==x||t!==bt}),Vm=Object.keys(sr).filter(function(t){return t!==x}).map(function(t){return Object.keys(sr[t])}).flat();function qm(t){var e=t.values,n=t.family,r=t.canonical,i=t.givenPrefix,a=i===void 0?"":i,s=t.styles,o=s===void 0?{}:s,c=t.config,l=c===void 0?{}:c,d=n===bt,f=e.includes("fa-duotone")||e.includes("fad"),u=l.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(f||u||p)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Hm.includes(n)){var g=Object.keys(o).find(function(T){return Vm.includes(T)});if(g||l.autoFetchSvg){var v=mp.get(n).defaultShortPrefixId;r.prefix=v,r.iconName=Ae(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||a==="fa")&&(r.prefix=be()||"fas"),r}var Gm=(function(){function t(){jh(this,t),this.definitions={}}return Wh(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=h(h({},n.definitions[o]||{}),s[o]),Do(o,s[o]),jo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var s=i[a],o=s.prefix,c=s.iconName,l=s.icon,d=l[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(n[o][f]=l)}),n[o][c]=l}),n}}])})(),aa=[],We={},qe={},Km=Object.keys(qe);function Ym(t,e){var n=e.mixoutsTo;return aa=t,We={},Object.keys(qe).forEach(function(r){Km.indexOf(r)===-1&&delete qe[r]}),aa.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Yt(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(s){We[s]||(We[s]=[]),We[s].push(a[s])})}r.provides&&r.provides(qe)}),n}function dr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=We[t]||[];return a.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function Me(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=We[t]||[];i.forEach(function(a){a.apply(null,n)})}function _e(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return qe[t]?qe[t].apply(null,e):void 0}function hr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||be();if(e)return e=Ae(n,e)||e,ta(Bo.definitions,n,e)||ta(V.styles,n,e)}var Bo=new Gm,Jm=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,Me("noAuto")},Xm={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ue?(Me("beforeI2svg",e),_e("pseudoElements2svg",e),_e("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,xm(function(){Zm({autoReplaceSvgRoot:n}),Me("watch",e)})}},Qm={icon:function(e){if(e===null)return null;if(Yt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ae(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=fn(e[0]);return{prefix:r,iconName:Ae(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(y.cssPrefix,"-"))>-1||e.match(vm))){var i=dn(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||be(),iconName:Ae(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var a=be();return{prefix:a,iconName:Ae(a,e)||e}}}},j={noAuto:Jm,config:y,dom:Xm,parse:Qm,library:Bo,findIconDefinition:hr,toHtml:wt},Zm=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?C:n;(Object.keys(V.styles).length>0||y.autoFetchSvg)&&ue&&y.autoReplaceSvg&&j.dom.i2svg({node:r})};function hn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return wt(r)})}}),Object.defineProperty(t,"node",{get:function(){if(ue){var r=C.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function eg(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,a=t.styles,s=t.transform;if(Wr(s)&&n.found&&!r.found){var o=n.width,c=n.height,l={x:o/c/2,y:.5};i.style=un(h(h({},a),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function tg(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,a=t.symbol,s=a===!0?"".concat(e,"-").concat(y.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},i),{},{id:s}),children:r}]}]}function ng(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function Vr(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,a=t.iconName,s=t.transform,o=t.symbol,c=t.maskId,l=t.extra,d=t.watchable,f=d===void 0?!1:d,u=r.found?r:n,p=u.width,g=u.height,v=[y.replacementClass,a?"".concat(y.cssPrefix,"-").concat(a):""].filter(function(P){return l.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(l.classes).join(" "),T={children:[],attributes:h(h({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:v,role:l.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(g)})};!ng(l.attributes)&&!l.attributes["aria-hidden"]&&(T.attributes["aria-hidden"]="true"),f&&(T.attributes[xe]="");var E=h(h({},T),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:h({},l.styles)}),S=r.found&&n.found?_e("generateAbstractMask",E)||{children:[],attributes:{}}:_e("generateAbstractIcon",E)||{children:[],attributes:{}},k=S.children,O=S.attributes;return E.children=k,E.attributes=O,o?tg(E):eg(E)}function sa(t){var e=t.content,n=t.width,r=t.height,i=t.transform,a=t.extra,s=t.watchable,o=s===void 0?!1:s,c=h(h({},a.attributes),{},{class:a.classes.join(" ")});o&&(c[xe]="");var l=h({},a.styles);Wr(i)&&(l.transform=Om({transform:i,width:n,height:r}),l["-webkit-transform"]=l.transform);var d=un(l);d.length>0&&(c.style=d);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),f}function rg(t){var e=t.content,n=t.extra,r=h(h({},n.attributes),{},{class:n.classes.join(" ")}),i=un(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:"span",attributes:r,children:[e]}),a}var Ln=V.styles;function pr(t){var e=t[0],n=t[1],r=t.slice(4),i=ln(r,1),a=i[0],s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(Dn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Dn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Dn.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:s}}var ig={found:!1,width:512,height:512};function ag(t,e){!Eo&&!y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function mr(t,e){var n=e;return e==="fa"&&y.styleDefault!==null&&(e=be()),new Promise(function(r,i){if(n==="fa"){var a=zo(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Ln[e]&&Ln[e][t]){var s=Ln[e][t];return r(pr(s))}ag(t,e),r(h(h({},ig),{},{icon:y.showMissingIcons&&t?_e("missingIconAbstract")||{}:{}}))})}var oa=function(){},gr=y.measurePerformance&&Pt&&Pt.mark&&Pt.measure?Pt:{mark:oa,measure:oa},nt='FA "7.0.0"',sg=function(e){return gr.mark("".concat(nt," ").concat(e," begins")),function(){return Ho(e)}},Ho=function(e){gr.mark("".concat(nt," ").concat(e," ends")),gr.measure("".concat(nt," ").concat(e),"".concat(nt," ").concat(e," begins"),"".concat(nt," ").concat(e," ends"))},qr={begin:sg,end:Ho},Mt=function(){};function ca(t){var e=t.getAttribute?t.getAttribute(xe):null;return typeof e=="string"}function og(t){var e=t.getAttribute?t.getAttribute($r):null,n=t.getAttribute?t.getAttribute(jr):null;return e&&n}function cg(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(y.replacementClass)}function lg(){if(y.autoReplaceSvg===!0)return Lt.replace;var t=Lt[y.autoReplaceSvg];return t||Lt.replace}function ug(t){return C.createElementNS("http://www.w3.org/2000/svg",t)}function fg(t){return C.createElement(t)}function Vo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?ug:fg:n;if(typeof t=="string")return C.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var a=t.children||[];return a.forEach(function(s){i.appendChild(Vo(s,{ceFn:r}))}),i}function dg(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Lt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Vo(i),n)}),n.getAttribute(xe)===null&&y.keepOriginalSource){var r=C.createComment(dg(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~zr(n).indexOf(y.replacementClass))return Lt.replace(e);var i=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(o,c){return c===y.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var s=r.map(function(o){return wt(o)}).join(`
`);n.setAttribute(xe,""),n.innerHTML=s}};function la(t){t()}function qo(t,e){var n=typeof e=="function"?e:Mt;if(t.length===0)n();else{var r=la;y.mutateApproach===mm&&(r=ve.requestAnimationFrame||la),r(function(){var i=lg(),a=qr.begin("mutate");t.map(i),a(),n()})}}var Gr=!1;function Go(){Gr=!0}function yr(){Gr=!1}var Xt=null;function ua(t){if(Ki&&y.observeMutations){var e=t.treeCallback,n=e===void 0?Mt:e,r=t.nodeCallback,i=r===void 0?Mt:r,a=t.pseudoElementsCallback,s=a===void 0?Mt:a,o=t.observeMutationsRoot,c=o===void 0?C:o;Xt=new Ki(function(l){if(!Gr){var d=be();Ze(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!ca(f.addedNodes[0])&&(y.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&y.searchPseudoElements&&s([f.target],!0),f.type==="attributes"&&ca(f.target)&&~wm.indexOf(f.attributeName))if(f.attributeName==="class"&&og(f.target)){var u=dn(zr(f.target)),p=u.prefix,g=u.iconName;f.target.setAttribute($r,p||d),g&&f.target.setAttribute(jr,g)}else cg(f.target)&&i(f.target)})}}),ue&&Xt.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hg(){Xt&&Xt.disconnect()}function pg(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function mg(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=dn(zr(t));return i.prefix||(i.prefix=be()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=$m(i.prefix,t.innerText)||Hr(i.prefix,No(t.innerText))),!i.iconName&&y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function gg(t){var e=Ze(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function yg(){return{iconName:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=mg(t),r=n.iconName,i=n.prefix,a=n.rest,s=gg(t),o=dr("parseNodeAttributes",{},t),c=e.styleParser?pg(t):[];return h({iconName:r,prefix:i,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:s}},o)}var vg=V.styles;function Ko(t){var e=y.autoReplaceSvg==="nest"?fa(t,{styleParser:!1}):fa(t);return~e.extra.classes.indexOf(Ao)?_e("generateLayersText",t,e):_e("generateSvgReplacementMutation",t,e)}function bg(){return[].concat(G(yo),G(vo))}function da(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ue)return Promise.resolve();var n=C.documentElement.classList,r=function(f){return n.add("".concat(Xi,"-").concat(f))},i=function(f){return n.remove("".concat(Xi,"-").concat(f))},a=y.autoFetchSvg?bg():to.concat(Object.keys(vg));a.includes("fa")||a.push("fa");var s=[".".concat(Ao,":not([").concat(xe,"])")].concat(a.map(function(d){return".".concat(d,":not([").concat(xe,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Ze(t.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=qr.begin("onTree"),l=o.reduce(function(d,f){try{var u=Ko(f);u&&d.push(u)}catch(p){Eo||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise(function(d,f){Promise.all(l).then(function(u){qo(u,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),d()})}).catch(function(u){c(),f(u)})})}function _g(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ko(t).then(function(n){n&&qo([n],e)})}function wg(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:hr(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:hr(i||{})),t(r,h(h({},n),{},{mask:i}))}}var Ig=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Y:r,a=n.symbol,s=a===void 0?!1:a,o=n.mask,c=o===void 0?null:o,l=n.maskId,d=l===void 0?null:l,f=n.classes,u=f===void 0?[]:f,p=n.attributes,g=p===void 0?{}:p,v=n.styles,T=v===void 0?{}:v;if(e){var E=e.prefix,S=e.iconName,k=e.icon;return hn(h({type:"icon"},e),function(){return Me("beforeDOMElementCreation",{iconDefinition:e,params:n}),Vr({icons:{main:pr(k),mask:c?pr(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:S,transform:h(h({},Y),i),symbol:s,maskId:d,extra:{attributes:g,styles:T,classes:u}})})}},Eg={mixout:function(){return{icon:wg(Ig)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=da,n.nodeCallback=_g,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?C:r,a=n.callback,s=a===void 0?function(){}:a;return da(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.prefix,s=r.transform,o=r.symbol,c=r.mask,l=r.maskId,d=r.extra;return new Promise(function(f,u){Promise.all([mr(i,a),c.iconName?mr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var g=ln(p,2),v=g[0],T=g[1];f([n,Vr({icons:{main:v,mask:T},prefix:a,iconName:i,transform:s,symbol:o,maskId:l,extra:d,watchable:!0})])}).catch(u)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.transform,o=n.styles,c=un(o);c.length>0&&(i.style=c);var l;return Wr(s)&&(l=_e("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),r.push(l||a.icon),{children:r,attributes:i}}}},Sg={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return hn({type:"layer"},function(){Me("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(c){s=s.concat(c.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(G(a)).join(" ")},children:s}]})}}}},Tg={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var i=r.classes,a=i===void 0?[]:i,s=r.attributes,o=s===void 0?{}:s,c=r.styles,l=c===void 0?{}:c;return hn({type:"counter",content:n},function(){return Me("beforeDOMElementCreation",{content:n,params:r}),rg({content:n.toString(),extra:{attributes:o,styles:l,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(G(a))}})})}}}},Ag={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Y:i,s=r.classes,o=s===void 0?[]:s,c=r.attributes,l=c===void 0?{}:c,d=r.styles,f=d===void 0?{}:d;return hn({type:"text",content:n},function(){return Me("beforeDOMElementCreation",{content:n,params:r}),sa({content:n,transform:h(h({},Y),a),extra:{attributes:l,styles:f,classes:["".concat(y.cssPrefix,"-layers-text")].concat(G(o))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.transform,a=r.extra,s=null,o=null;if(Zs){var c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/c,o=l.height/c}return Promise.resolve([n,sa({content:n.innerHTML,width:s,height:o,transform:i,extra:a,watchable:!0})])}}},Yo=new RegExp('"',"ug"),ha=[1105920,1112319],pa=h(h(h(h({},{FontAwesome:{normal:"fas",400:"fas"}}),pp),hm),Ep),vr=Object.keys(pa).reduce(function(t,e){return t[e.toLowerCase()]=pa[e],t},{}),kg=Object.keys(vr).reduce(function(t,e){var n=vr[e];return t[e]=n[900]||G(Object.entries(n))[0][1],t},{});function Pg(t){var e=t.replace(Yo,"");return No(G(e)[0]||"")}function Cg(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),r=n.replace(Yo,""),i=r.codePointAt(0),a=i>=ha[0]&&i<=ha[1],s=r.length===2?r[0]===r[1]:!1;return a||s||e}function Rg(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(vr[n]||{})[i]||kg[n]}function ma(t,e){var n="".concat(pm).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var a=Ze(t.children),s=a.filter(function(D){return D.getAttribute(cr)===e})[0],o=ve.getComputedStyle(t,e),c=o.getPropertyValue("font-family"),l=c.match(bm),d=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),r();if(l&&f!=="none"&&f!==""){var u=o.getPropertyValue("content"),p=Rg(c,d),g=Pg(u),v=l[0].startsWith("FontAwesome"),T=Cg(o),E=Hr(p,g),S=E;if(v){var k=jm(g);k.iconName&&k.prefix&&(E=k.iconName,p=k.prefix)}if(E&&!T&&(!s||s.getAttribute($r)!==p||s.getAttribute(jr)!==S)){t.setAttribute(n,S),s&&t.removeChild(s);var O=yg(),P=O.extra;P.attributes[cr]=e,mr(E,p).then(function(D){var K=Vr(h(h({},O),{},{icons:{main:D,mask:Wo()},prefix:p,iconName:S,extra:P,watchable:!0})),Ue=C.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Ue,t.firstChild):t.appendChild(Ue),Ue.outerHTML=K.map(function(It){return wt(It)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Og(t){return Promise.all([ma(t,"::before"),ma(t,"::after")])}function Ng(t){return t.parentNode!==document.head&&!~gm.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(cr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var Dg=function(e){return!!e&&Io.some(function(n){return e.includes(n)})},xg=function(e){if(!e)return[];for(var n=new Set,r=[e],i=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],a=function(){var p=o[s];r=r.flatMap(function(g){return g.split(p).map(function(v){return v.replace(/,\s*$/,"").trim()})})},s=0,o=i;s<o.length;s++)a();r=r.flatMap(function(u){return u.includes("(")?u:u.split(",").map(function(p){return p.trim()})});var c=xt(r),l;try{for(c.s();!(l=c.n()).done;){var d=l.value;if(Dg(d)){var f=Io.reduce(function(u,p){return u.replace(p,"")},d);f!==""&&f!=="*"&&n.add(f)}}}catch(u){c.e(u)}finally{c.f()}return n};function ga(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(ue){var n;if(e)n=t;else if(y.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var r=new Set,i=xt(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var s=a.value;try{var o=xt(s.cssRules),c;try{for(o.s();!(c=o.n()).done;){var l=c.value,d=xg(l.selectorText),f=xt(d),u;try{for(f.s();!(u=f.n()).done;){var p=u.value;r.add(p)}}catch(v){f.e(v)}finally{f.f()}}}catch(v){o.e(v)}finally{o.f()}}catch(v){y.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){i.e(v)}finally{i.f()}if(!r.size)return;var g=Array.from(r).join(", ");try{n=t.querySelectorAll(g)}catch{}}return new Promise(function(v,T){var E=Ze(n).filter(Ng).map(Og),S=qr.begin("searchPseudoElements");Go(),Promise.all(E).then(function(){S(),yr(),v()}).catch(function(){S(),yr(),T()})})}}var Mg={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ga,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?C:r;y.searchPseudoElements&&ga(i)}}},ya=!1,Lg={mixout:function(){return{dom:{unwatch:function(){Go(),ya=!0}}}},hooks:function(){return{bootstrap:function(){ua(dr("mutationObserverCallbacks",{}))},noAuto:function(){hg()},watch:function(n){var r=n.observeMutationsRoot;ya?yr():ua(dr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},va=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),s=a[0],o=a.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Fg={mixout:function(){return{parse:{transform:function(n){return va(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=va(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(a/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(d)},u={transform:"translate(".concat(s/2*-1," -256)")},p={outer:o,inner:f,path:u};return{tag:"g",attributes:h({},p.outer),children:[{tag:"g",attributes:h({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:h(h({},r.icon.attributes),p.path)}]}]}}}},Fn={x:0,y:0,width:"100%",height:"100%"};function ba(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ug(t){return t.tag==="g"?t.children:[t]}var $g={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?dn(i.split(" ").map(function(s){return s.trim()})):Wo();return a.prefix||(a.prefix=be()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.mask,o=n.maskId,c=n.transform,l=a.width,d=a.icon,f=s.width,u=s.icon,p=Rm({transform:c,containerWidth:f,iconWidth:l}),g={tag:"rect",attributes:h(h({},Fn),{},{fill:"white"})},v=d.children?{children:d.children.map(ba)}:{},T={tag:"g",attributes:h({},p.inner),children:[ba(h({tag:d.tag,attributes:h(h({},d.attributes),p.path)},v))]},E={tag:"g",attributes:h({},p.outer),children:[T]},S="mask-".concat(o||Zi()),k="clip-".concat(o||Zi()),O={tag:"mask",attributes:h(h({},Fn),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,E]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Ug(u)},O]};return r.push(P,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(S,")")},Fn)}),{children:r,attributes:i}}}},jg={provides:function(e){var n=!1;ve.matchMedia&&(n=ve.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:h(h({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=h(h({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:h(h({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:h(h({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:h(h({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:h(h({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:h(h({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},zg={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Wg=[Dm,Eg,Sg,Tg,Ag,Mg,Lg,Fg,$g,jg,zg];Ym(Wg,{mixoutsTo:j});j.noAuto;j.config;j.library;j.dom;var iy=j.parse;j.findIconDefinition;j.toHtml;var ay=j.icon;j.layer;j.text;j.counter;var Un={exports:{}},$n,_a;function Bg(){if(_a)return $n;_a=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return $n=t,$n}var jn,wa;function Hg(){if(wa)return jn;wa=1;var t=Bg();function e(){}function n(){}return n.resetWarningCache=e,jn=function(){function r(s,o,c,l,d,f){if(f!==t){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}r.isRequired=r;function i(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return a.PropTypes=a,a},jn}var Ia;function Vg(){return Ia||(Ia=1,Un.exports=Hg()()),Un.exports}var qg=Vg();const sy=Qo(qg);/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var oy={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]},cy={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},zn={exports:{}},Wn={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea;function Gg(){return Ea||(Ea=1,(function(t){function e(m,w){var _=m.length;m.push(w);e:for(;0<_;){var R=_-1>>>1,N=m[R];if(0<i(N,w))m[R]=w,m[_]=N,_=R;else break e}}function n(m){return m.length===0?null:m[0]}function r(m){if(m.length===0)return null;var w=m[0],_=m.pop();if(_!==w){m[0]=_;e:for(var R=0,N=m.length,Et=N>>>1;R<Et;){var St=2*(R+1)-1,gn=m[St],Ie=St+1,Tt=m[Ie];if(0>i(gn,_))Ie<N&&0>i(Tt,gn)?(m[R]=Tt,m[Ie]=_,R=Ie):(m[R]=gn,m[St]=_,R=St);else if(Ie<N&&0>i(Tt,_))m[R]=Tt,m[Ie]=_,R=Ie;else break e}}return w}function i(m,w){var _=m.sortIndex-w.sortIndex;return _!==0?_:m.id-w.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var c=[],l=[],d=1,f=null,u=3,p=!1,g=!1,v=!1,T=!1,E=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function O(m){for(var w=n(l);w!==null;){if(w.callback===null)r(l);else if(w.startTime<=m)r(l),w.sortIndex=w.expirationTime,e(c,w);else break;w=n(l)}}function P(m){if(v=!1,O(m),!g)if(n(c)!==null)g=!0,D||(D=!0,$e());else{var w=n(l);w!==null&&mn(P,w.startTime-m)}}var D=!1,K=-1,Ue=5,It=-1;function Kr(){return T?!0:!(t.unstable_now()-It<Ue)}function pn(){if(T=!1,D){var m=t.unstable_now();It=m;var w=!0;try{e:{g=!1,v&&(v=!1,S(K),K=-1),p=!0;var _=u;try{t:{for(O(m),f=n(c);f!==null&&!(f.expirationTime>m&&Kr());){var R=f.callback;if(typeof R=="function"){f.callback=null,u=f.priorityLevel;var N=R(f.expirationTime<=m);if(m=t.unstable_now(),typeof N=="function"){f.callback=N,O(m),w=!0;break t}f===n(c)&&r(c),O(m)}else r(c);f=n(c)}if(f!==null)w=!0;else{var Et=n(l);Et!==null&&mn(P,Et.startTime-m),w=!1}}break e}finally{f=null,u=_,p=!1}w=void 0}}finally{w?$e():D=!1}}}var $e;if(typeof k=="function")$e=function(){k(pn)};else if(typeof MessageChannel<"u"){var Yr=new MessageChannel,Jo=Yr.port2;Yr.port1.onmessage=pn,$e=function(){Jo.postMessage(null)}}else $e=function(){E(pn,0)};function mn(m,w){K=E(function(){m(t.unstable_now())},w)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(m){m.callback=null},t.unstable_forceFrameRate=function(m){0>m||125<m?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<m?Math.floor(1e3/m):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_next=function(m){switch(u){case 1:case 2:case 3:var w=3;break;default:w=u}var _=u;u=w;try{return m()}finally{u=_}},t.unstable_requestPaint=function(){T=!0},t.unstable_runWithPriority=function(m,w){switch(m){case 1:case 2:case 3:case 4:case 5:break;default:m=3}var _=u;u=m;try{return w()}finally{u=_}},t.unstable_scheduleCallback=function(m,w,_){var R=t.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?R+_:R):_=R,m){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=_+N,m={id:d++,callback:w,priorityLevel:m,startTime:_,expirationTime:N,sortIndex:-1},_>R?(m.sortIndex=_,e(l,m),n(c)===null&&m===n(l)&&(v?(S(K),K=-1):v=!0,mn(P,_-R))):(m.sortIndex=N,e(c,m),g||p||(g=!0,D||(D=!0,$e()))),m},t.unstable_shouldYield=Kr,t.unstable_wrapCallback=function(m){var w=u;return function(){var _=u;u=w;try{return m.apply(this,arguments)}finally{u=_}}}})(Wn)),Wn}var Sa;function ly(){return Sa||(Sa=1,zn.exports=Gg()),zn.exports}export{sy as P,Jg as a,ke as b,Ke as c,Yl as d,ry as e,Zg as f,Xg as g,Qg as h,ay as i,Bf as j,oy as k,cy as l,ty as o,iy as p,ly as r,ny as s,ey as u,Yg as w};
