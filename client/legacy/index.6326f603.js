import{_ as t,a as n,b as e,c,i as r,d as a,S as o,s,e as u,f as i,q as l,g as f,h,j as d,k as p,n as v,l as m,t as b,m as g,o as y,p as x,r as k,u as w,v as E,w as R,x as U,y as D,z as I}from"./client.7c552dfd.js";import{p as L,A as N,g as T}from"./shared-code.f1067ec2.js";function j(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=n(t);if(c){var o=n(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return e(this,r)}}function S(t){var n,e,c,r,a,o,s,i,l,p,v,D;return{c:function(){n=m("div"),e=m("form"),c=m("div"),r=m("label"),a=b("URL"),o=u(),s=m("input"),i=u(),l=m("button"),p=b("Get song"),this.h()},l:function(t){n=g(t,"DIV",{class:!0});var u=y(n);e=g(u,"FORM",{class:!0});var d=y(e);c=g(d,"DIV",{class:!0});var v=y(c);r=g(v,"LABEL",{class:!0,for:!0});var m=y(r);a=x(m,"URL"),m.forEach(f),o=h(v),s=g(v,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),v.forEach(f),i=h(d),l=g(d,"BUTTON",{class:!0});var b=y(l);p=x(b,"Get song"),b.forEach(f),d.forEach(f),u.forEach(f),this.h()},h:function(){k(r,"class","block text-gray-700 text-md font-bold mb-2"),k(r,"for","username"),k(s,"class","shadow appearance-none border rounded w-full py-2 px-3\n\t\t\t\t\t\ttext-gray-700 leading-tight focus:outline-none focus:shadow-outline"),k(s,"id","username"),k(s,"type","text"),k(s,"placeholder","Youtube Video URL"),k(c,"class","mb-4"),k(l,"class","inline-block align-baseline font-bold text-sm hover:text-md\n\t\t\t\t\ttext-blue-500 hover:text-blue-800 mx-auto"),k(e,"class","bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"),k(n,"class","centered svelte-126kkwf")},m:function(u,f){d(u,n,f),w(n,e),w(e,c),w(c,r),w(r,a),w(c,o),w(c,s),E(s,t[0]),w(e,i),w(e,l),w(l,p),v||(D=[R(s,"input",t[4]),R(l,"click",t[2])],v=!0)},p:function(t,n){1&n&&s.value!==t[0]&&E(s,t[0])},d:function(t){t&&f(n),v=!1,U(D)}}}function V(t){var n,e,c={ctx:t,current:null,token:null,pending:G,then:B,catch:A,value:5,error:6};return D(e=T(t[0]),c),{c:function(){n=i(),c.block.c()},l:function(t){n=i(),c.block.l(t)},m:function(t,e){d(t,n,e),c.block.m(t,c.anchor=e),c.mount=function(){return n.parentNode},c.anchor=n},p:function(n,r){if(t=n,c.ctx=t,1&r&&e!==(e=T(t[0]))&&D(e,c));else{var a=t.slice();a[5]=c.resolved,c.block.p(a,r)}},d:function(t){t&&f(n),c.block.d(t),c.token=null,c=null}}}function A(t){return{c:v,l:v,m:v,p:v,d:v}}function B(t){var n,e,c,r,a,o,s,i,l,p,v,E=t[5].name+"";function U(){for(var n,e=arguments.length,c=new Array(e),r=0;r<e;r++)c[r]=arguments[r];return(n=t)[3].apply(n,[t[5]].concat(c))}return{c:function(){n=m("div"),e=m("h1"),c=b(E),r=u(),a=m("img"),s=u(),i=m("button"),l=b("play"),this.h()},l:function(t){n=g(t,"DIV",{class:!0});var o=y(n);e=g(o,"H1",{class:!0});var u=y(e);c=x(u,E),u.forEach(f),r=h(o),a=g(o,"IMG",{class:!0,src:!0,alt:!0}),s=h(o),i=g(o,"BUTTON",{class:!0});var d=y(i);l=x(d,"play"),d.forEach(f),o.forEach(f),this.h()},h:function(){k(e,"class","svelte-126kkwf"),k(a,"class","rounded center"),a.src!==(o=t[5].thumb)&&k(a,"src",o),k(a,"alt","thumbnail"),k(i,"class","bg-blue-600 hover:bg-gray-100 text-gray-800 font-semibold py-2\n\t\t\t\t\tpx-4 border border-gray-400 rounded shadow btn-center text-center\n\t\t\t\t\tcenter2"),k(n,"class","bg-white shadow rounded content-center items-center")},m:function(t,o){d(t,n,o),w(n,e),w(e,c),w(n,r),w(n,a),w(n,s),w(n,i),w(i,l),p||(v=R(i,"click",U),p=!0)},p:function(n,e){t=n,1&e&&E!==(E=t[5].name+"")&&I(c,E),1&e&&a.src!==(o=t[5].thumb)&&k(a,"src",o)},d:function(t){t&&f(n),p=!1,v()}}}function G(t){var n,e;return{c:function(){n=m("h1"),e=b("getting song"),this.h()},l:function(t){n=g(t,"H1",{class:!0});var c=y(n);e=x(c,"getting song"),c.forEach(f),this.h()},h:function(){k(n,"class","svelte-126kkwf")},m:function(t,c){d(t,n,c),w(n,e)},p:v,d:function(t){t&&f(n)}}}function O(t){var n,e;function c(t,n){return t[1]?V:S}var r=c(t),a=r(t);return{c:function(){n=u(),a.c(),e=i(),this.h()},l:function(t){l('[data-svelte="svelte-1s2duvj"]',document.head).forEach(f),n=h(t),a.l(t),e=i(),this.h()},h:function(){document.title="Single Song"},m:function(t,c){d(t,n,c),a.m(t,c),d(t,e,c)},p:function(t,n){var o=p(n,1)[0];r===(r=c(t))&&a?a.p(t,o):(a.d(1),(a=r(t))&&(a.c(),a.m(e.parentNode,e)))},i:v,o:v,d:function(t){t&&f(n),a.d(t),t&&f(e)}}}function H(t,n,e){var c,r=!1;return[c,r,function(){e(1,r=!0)},function(t,n){return L(N(t.parsedUrl))},function(){c=this.value,e(0,c)}]}var M=function(n){t(u,o);var e=j(u);function u(t){var n;return c(this,u),n=e.call(this),r(a(n),t,H,O,s,{}),n}return u}();export default M;