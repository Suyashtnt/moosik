function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e,o){if(t){const r=s(t,n,e,o);return t[0](r)}}function s(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function f(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t){return Array.from(t.childNodes)}function x(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):p(n)}function k(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function E(t){return k(t," ")}function _(t,n){n=""+n,t.data!==n&&(t.data=n)}function w(t,n){(null!=n||t.value)&&(t.value=n)}let j;function A(t){j=t}function C(){if(!j)throw new Error("Function called outside component initialization");return j}function N(){const t=C();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach(n=>{n.call(t,r)})}}}function S(t,n){C().$$.context.set(t,n)}const q=[],z=[],B=[],F=[],L=Promise.resolve();let M=!1;function O(t){B.push(t)}function T(){const t=new Set;do{for(;q.length;){const t=q.shift();A(t),D(t.$$)}for(;z.length;)z.pop()();for(let n=0;n<B.length;n+=1){const e=B[n];t.has(e)||(e(),t.add(e))}B.length=0}while(q.length);for(;F.length;)F.pop()();M=!1}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}const G=new Set;let H;function I(){H={r:0,c:[],p:H}}function J(){H.r||r(H.c),H=H.p}function K(t,n){t&&t.i&&(G.delete(t),t.i(n))}function P(t,n,e,o){if(t&&t.o){if(G.has(t))return;G.add(t),H.c.push(()=>{G.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function Q(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let u=n.ctx;void 0!==r&&(u=u.slice(),u[r]=c);const i=t&&(n.current=t)(u);let s=!1;n.block&&(n.blocks?n.blocks.forEach((t,e)=>{e!==o&&t&&(I(),P(t,1,1,()=>{n.blocks[e]=null}),J())}):n.block.d(1),i.c(),K(i,1),i.m(n.mount(),n.anchor),s=!0),n.block=i,n.blocks&&(n.blocks[o]=i),s&&T()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=C();if(t.then(t=>{A(e),o(n.then,1,n.value,t),A(null)},t=>{A(e),o(n.catch,2,n.error,t),A(null)}),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}function R(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],i=n[c];if(i){for(const t in u)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[c]=i}else for(const t in u)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function U(t){return"object"==typeof t&&null!==t?t:{}}function V(t){t&&t.c()}function W(t,n){t&&t.l(n)}function X(t,n,o){const{fragment:u,on_mount:i,on_destroy:s,after_update:a}=t.$$;u&&u.m(n,o),O(()=>{const n=i.map(e).filter(c);s?s.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(O)}function Y(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Z(t,n){-1===t.$$.dirty[0]&&(q.push(t),M||(M=!0,L.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function tt(n,e,c,u,i,s,a=[-1]){const f=j;A(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:a};let h=!1;d.ctx=c?c(n,l,(t,e,o=e)=>(d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&Z(n,t)),e)):[],d.update(),h=!0,r(d.before_update),d.fragment=!!u&&u(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(v(e.target)):d.fragment&&d.fragment.c(),e.intro&&K(n.$$.fragment),X(n,e.target,e.anchor),T()),A(f)}class nt{$destroy(){Y(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{R as A,U as B,S as C,I as D,J as E,b as F,w as G,r as H,Q as I,N as J,h as K,nt as S,g as a,v as b,x as c,k as d,p as e,d as f,E as g,y as h,tt as i,l as j,f as k,i as l,V as m,t as n,W as o,X as p,s as q,a as r,u as s,m as t,K as u,P as v,Y as w,_ as x,$ as y,n as z};