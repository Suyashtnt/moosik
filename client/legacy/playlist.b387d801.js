import{_ as t,a as n,b as e,c as a,i as r,s,d as o,S as c,e as i,f as l,t as u,g as f,h as d,l as h,j as p,k as v,m,N as g,o as w,p as b,q as y,C as x,n as U,R as E,u as L,v as V,w as k,F as T,G as $,z as I,A as R,B as D,D as A,O as B,J as N,T as P,P as j,E as O,I as q,K as G,L as z,U as F}from"./index.3514dc66.js";function M(t){var n,e,a,r,s,o,c,E,L,V,k,T,$,I,R;return{c:function(){n=i("div"),e=i("div"),a=i("img"),s=l(),o=i("div"),c=i("h2"),E=u(t[0]),L=l(),V=i("div"),k=u(t[2]),T=l(),$=i("button"),I=u("play"),this.h()},l:function(r){n=f(r,"DIV",{class:!0});var i=d(n);e=f(i,"DIV",{class:!0});var l=d(e);a=f(l,"IMG",{class:!0,src:!0,alt:!0}),s=h(l),o=f(l,"DIV",{class:!0});var u=d(o);c=f(u,"H2",{class:!0});var m=d(c);E=p(m,t[0]),m.forEach(v),L=h(u),V=f(u,"DIV",{class:!0});var g=d(V);k=p(g,t[2]),g.forEach(v),T=h(u),$=f(u,"BUTTON",{class:!0});var w=d($);I=p(w,"play"),w.forEach(v),u.forEach(v),l.forEach(v),i.forEach(v),this.h()},h:function(){m(a,"class","h-16 w-16 md:h-24 md:w-24 rounded mx-auto md:mx-0 md:mr-6"),a.src!==(r=t[1])&&m(a,"src",r),m(a,"alt","Avatar"),m(c,"class","text-lg capitalize"),m(V,"class","text-gray-600"),m($,"class","btn btn-primary mt-2"),m(o,"class","text-center md:text-left"),m(e,"class","md:flex bg-white rounded-lg p-6"),m(n,"class","shadow-lg leading-normal self-end bg-white rounded-lg m-10 relative"),R=g($,"click",t[3])},m:function(t,r){w(t,n,r),b(n,e),b(e,a),b(e,s),b(e,o),b(o,c),b(c,E),b(o,L),b(o,V),b(V,k),b(o,T),b(o,$),b($,I)},p:function(t,n){var e=y(n,1)[0];2&e&&a.src!==(r=t[1])&&m(a,"src",r),1&e&&x(E,t[0]),4&e&&x(k,t[2])},i:U,o:U,d:function(t){t&&v(n),R()}}}function C(t,n,e){var a=E(),r=n.name,s=n.parsedUrl,o=n.thumb,c=n.VideoURL;return t.$set=function(t){"name"in t&&e(0,r=t.name),"parsedUrl"in t&&e(4,s=t.parsedUrl),"thumb"in t&&e(1,o=t.thumb),"VideoURL"in t&&e(2,c=t.VideoURL)},[r,o,c,function(){a("play",{url:s})},s]}var H=function(i){function l(t){var c;return n(this,l),c=e(this,a(l).call(this)),r(o(c),t,C,M,s,{name:0,parsedUrl:4,thumb:1,VideoURL:2}),c}return t(l,c),l}();function J(t,n,e){var a=t.slice();return a[7]=n[e],a}function K(t){for(var n,e=[t[7]],a={},r=0;r<e.length;r+=1)a=O(a,e[r]);var s=new H({props:a});return s.$on("play",Q),{c:function(){L(s.$$.fragment)},l:function(t){V(s.$$.fragment,t)},m:function(t,e){k(s,t,e),n=!0},p:function(t,n){var a=1&n?T(e,[$(t[7])]):{};s.$set(a)},i:function(t){n||(I(s.$$.fragment,t),n=!0)},o:function(t){R(s.$$.fragment,t),n=!1},d:function(t){D(s,t)}}}function S(t){for(var n,e,a,r,s,o,c,x,U,E,L,V,k,T,$,D,O,G,z=t[0],F=[],M=0;M<z.length;M+=1)F[M]=K(J(t,z,M));var C=function(t){return R(F[t],1,1,(function(){F[t]=null}))};return{c:function(){n=l(),e=i("div"),a=i("form"),r=i("div"),s=i("label"),o=u("URL"),c=l(),x=i("input"),U=l(),E=i("button"),L=u("Add to playlist"),V=l(),k=i("button"),T=u("Play all"),$=l();for(var t=0;t<F.length;t+=1)F[t].c();D=A(),this.h()},l:function(t){n=h(t),e=f(t,"DIV",{class:!0});var i=d(e);a=f(i,"FORM",{class:!0});var l=d(a);r=f(l,"DIV",{class:!0});var u=d(r);s=f(u,"LABEL",{class:!0,for:!0});var m=d(s);o=p(m,"URL"),m.forEach(v),c=h(u),x=f(u,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),u.forEach(v),U=h(l),E=f(l,"BUTTON",{class:!0});var g=d(E);L=p(g,"Add to playlist"),g.forEach(v),V=h(l),k=f(l,"BUTTON",{class:!0});var w=d(k);T=p(w,"Play all"),w.forEach(v),l.forEach(v),i.forEach(v),$=h(t);for(var b=0;b<F.length;b+=1)F[b].l(t);D=A(),this.h()},h:function(){document.title="Playlist",m(s,"class","block text-gray-700 text-sm font-bold mb-2"),m(s,"for","username"),m(x,"class","shadow appearance-none border rounded w-full py-2 px-3\n        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"),m(x,"id","username"),m(x,"type","text"),m(x,"placeholder","Youtube Video URL"),m(r,"class","mb-4"),m(E,"class","btn btn-primary mt-2 float-left"),m(k,"class","btn btn-primary mt-2 float-right"),m(a,"class","bg-white shadow-md clearfix rounded px-8 pt-6 pb-8 mb-4 svelte-1erwrqy"),m(e,"class","w-full center clearfix svelte-1erwrqy"),G=[g(x,"input",t[4]),g(E,"click",t[5]),g(k,"click",t[6])]},m:function(i,l){w(i,n,l),w(i,e,l),b(e,a),b(a,r),b(r,s),b(s,o),b(r,c),b(r,x),B(x,t[1]),b(a,U),b(a,E),b(E,L),b(a,V),b(a,k),b(k,T),w(i,$,l);for(var u=0;u<F.length;u+=1)F[u].m(i,l);w(i,D,l),O=!0},p:function(t,n){var e=y(n,1)[0];if(2&e&&x.value!==t[1]&&B(x,t[1]),1&e){var a;for(z=t[0],a=0;a<z.length;a+=1){var r=J(t,z,a);F[a]?(F[a].p(r,e),I(F[a],1)):(F[a]=K(r),F[a].c(),I(F[a],1),F[a].m(D.parentNode,D))}for(q(),a=z.length;a<F.length;a+=1)C(a);N()}},i:function(t){if(!O){for(var n=0;n<z.length;n+=1)I(F[n]);O=!0}},o:function(t){F=F.filter(Boolean);for(var n=0;n<F.length;n+=1)R(F[n]);O=!1},d:function(t){t&&v(n),t&&v(e),t&&v($),P(F,t),t&&v(D),j(G)}}}function Y(t){return _.apply(this,arguments)}function _(){return(_=G(z.mark((function t(n){var e,a,r,s,o,c,i;return z.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0,l=void 0,/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,l=n.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/),e=!(!l||11!=l[7].length)&&l[7],console.log(e),console.log("https://www.yt-mp3s.com/@api/json/mp3/".concat(e)),t.next=5,fetch("https://www.yt-mp3s.com/@api/json/mp3/".concat(e),{method:"GET",mode:"cors",headers:{}});case 5:return a=t.sent,t.next=8,a.json();case 8:return r=t.sent,t.next=11,r.vidInfo[0].dloadUrl;case 11:return s=t.sent,t.next=14,r.vidTitle;case 14:return o=t.sent,t.next=17,r.vidThumb;case 17:return c=t.sent,i={parsedUrl:s,name:o,thumb:c,VideoURL:n},console.log(i),t.abrupt("return",i);case 21:case"end":return t.stop()}var l}),t)})))).apply(this,arguments)}function Q(t){return W.apply(this,arguments)}function W(){return(W=G(z.mark((function t(n){var e;return z.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Audio,t.next=3,n.detail.url;case 3:return t.t1=t.sent,e=new t.t0(t.t1),t.next=7,e.play();case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function X(t){return t.play().then((function(){return new Promise((function(n,e){function a(){t.removeEventListener("error",r),n()}function r(){t.removeEventListener("ended",a),e(err)}t.addEventListener("ended",a,{once:!0}),t.addEventListener("error",r,{once:!0})}))}))}function Z(t,n,e){var a,r=[];function s(t){return o.apply(this,arguments)}function o(){return(o=G(z.mark((function t(n){var a;return z.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y(n);case 2:return a=t.sent,t.t0=e,t.t1=[],t.t2=F(r),t.next=8,a;case 8:t.t3=t.sent,t.t4=[t.t3],t.t5=r=t.t1.concat.call(t.t1,t.t2,t.t4),(0,t.t0)(0,t.t5),console.log(r);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return i.apply(this,arguments)}function i(){return(i=G(z.mark((function t(){var n,e;return z.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<r.length)){t.next=8;break}return e=new Audio(r[n].parsedUrl),t.next=5,X(e);case 5:n++,t.next=1;break;case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return[r,a,s,c,function(){a=this.value,e(1,a)},function(t){t.preventDefault(),s(a)},function(t){t.preventDefault(),c()}]}var tt=function(i){function l(t){var c;return n(this,l),c=e(this,a(l).call(this)),r(o(c),t,Z,S,s,{}),c}return t(l,c),l}();export default tt;