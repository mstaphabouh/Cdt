/*
 Jssor */
(function(f,g,c,h,e,k,i){new function(){};var d={Yc:function(a){return-c.cos(a*c.PI)/2+.5},ad:function(a){return a},Be:function(a){return-a*(a-2)}};var b=new function(){var j=this,xb=/\S+/g,F=1,wb=2,cb=3,bb=4,fb=5,G,r=0,l=0,s=0,Y=0,A=0,I=navigator,kb=I.appName,o=I.userAgent,p=parseFloat;function Fb(){if(!G){G={Se:"ontouchstart"in f||"createTouch"in g};var a;if(I.pointerEnabled||(a=I.msPointerEnabled))G.td=a?"msTouchAction":"touchAction"}return G}function v(i){if(!r){r=-1;if(kb=="Microsoft Internet Explorer"&&
!!f.attachEvent&&!!f.ActiveXObject){var e=o.indexOf("MSIE");r=F;s=p(o.substring(e+5,o.indexOf(";",e)));l=g.documentMode||s}else if(kb=="Netscape"&&!!f.addEventListener){var d=o.indexOf("Firefox"),b=o.indexOf("Safari"),h=o.indexOf("Chrome"),c=o.indexOf("AppleWebKit");if(d>=0){r=wb;l=p(o.substring(d+8))}else if(b>=0){var j=o.substring(0,b).lastIndexOf("/");r=h>=0?bb:cb;l=p(o.substring(j+1,b))}else{var a=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);if(a){r=F;l=s=p(a[1])}}if(c>=0)A=p(o.substring(c+
12))}else{var a=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);if(a){r=fb;l=p(a[2])}}}return i==r}function q(){return v(F)}function vb(){return q()&&(l<6||g.compatMode=="BackCompat")}function ab(){return v(cb)}function eb(){return v(fb)}function rb(){return ab()&&A>534&&A<535}function J(){v();return A>537||l>42||r==F&&l>=11}function tb(){return q()&&l<9}function sb(a){var b,c;return function(f){if(!b){b=e;var d=a.substr(0,1).toUpperCase()+a.substr(1);n([a].concat(["WebKit","ms","Moz","O","webkit"]),
function(g,e){var b=a;if(e)b=g+d;if(f.style[b]!=i)return c=b})}return c}}function qb(b){var a;return function(c){a=a||sb(b)(c)||b;return a}}var K=qb("transform");function jb(a){return{}.toString.call(a)}var gb={};n(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){gb["[object "+a+"]"]=a.toLowerCase()});function n(b,d){var a,c;if(jb(b)=="[object Array]")for(a=0;a<b.length;a++){if(c=d(b[a],a,b))return c}else for(a in b)if(c=d(b[a],a,b))return c}function D(a){return a==
h?String(a):gb[jb(a)]||"object"}function hb(a){for(var b in a)return e}function B(a){try{return D(a)=="object"&&!a.nodeType&&a!=a.window&&(!a.constructor||{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))}catch(b$0){}}function u(a,b){return{x:a,y:b}}function nb(b,a){setTimeout(b,a||0)}function H(b,d,c){var a=!b||b=="inherit"?"":b;n(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.index+b[0].length+1,a.length-1);a=d+e}});a=c+(!a.indexOf(" ")?"":" ")+a;return a}
function pb(b,a){if(l<9)b.style.filter=a}j.rf=Fb;j.ud=q;j.pf=ab;j.Bd=eb;j.tf=J;j.Qb=tb;sb("transform");j.Hd=function(){return l};j.sf=function(){v();return A};j.Tb=nb;function V(a){a.constructor===V.caller&&a.Ad&&a.Ad.apply(a,V.caller.arguments)}j.Ad=V;j.ub=function(a){if(j.nf(a))a=g.getElementById(a);return a};function t(a){return a||f.event}j.xd=t;j.ac=function(b){b=t(b);var a=b.target||b.srcElement||g;if(a.nodeType==3)a=j.sd(a);return a};j.fd=function(a){a=t(a);return{x:a.pageX||a.clientX||0,y:a.pageY||
a.clientY||0}};function w(c,d,a){if(a!==i)c.style[d]=a==i?"":a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&f.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,h);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function X(b,c,a,d){if(a!==i){if(a==h)a="";else d&&(a+="px");w(b,c,a)}else return p(w(b,c))}function m(c,a){var d=a?X:w,b;if(a&4)b=qb(c);return function(e,f){return d(e,b?b(e):c,f,a&2)}}function Ab(b){if(q()&&s<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?
p(a[1])/100:1}else return p(b.style.opacity||"1")}function Cb(b,a,f){if(q()&&s<9){var h=b.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=c.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=H(h,[i],d);pb(b,g)}else b.style.opacity=a==1?"":c.round(a*100)/100}var L={K:["rotate"],U:["rotateX"],V:["rotateY"],Lb:["skewX"],Hb:["skewY"]};if(!J())L=C(L,{B:["scaleX",2],q:["scaleY",2],H:["translateZ",1]});function M(d,a){var c="";if(a){if(q()&&l&&l<10){delete a.U;delete a.V;delete a.H}b.f(a,
function(d,b){var a=L[b];if(a){var e=a[1]||0;if(N[b]!=d)c+=" "+a[0]+"("+d+["deg","px",""][e]+")"}});if(J()){if(a.pb||a.ob||a.H!=i)c+=" translate3d("+(a.pb||0)+"px,"+(a.ob||0)+"px,"+(a.H||0)+"px)";if(a.B==i)a.B=1;if(a.q==i)a.q=1;if(a.B!=1||a.q!=1)c+=" scale3d("+a.B+", "+a.q+", 1)"}}d.style[K(d)]=c}j.Hc=m("transformOrigin",4);j.ge=m("backfaceVisibility",4);j.kf=m("transformStyle",4);j.jf=m("perspective",6);j.Te=m("perspectiveOrigin",4);j.Ue=function(a,b){if(q()&&s<9||s<10&&vb())a.style.zoom=b==1?"":
b;else{var c=K(a),f="scale("+b+")",e=a.style[c],g=new RegExp(/[\s]*scale\(.*?\)/g),d=H(e,[g],f);a.style[c]=d}};j.Wb=function(b,a){return function(c){c=t(c);var e=c.type,d=c.relatedTarget||(e=="mouseout"?c.toElement:c.fromElement);(!d||d!==a&&!j.Ve(a,d))&&b(c)}};j.c=function(a,d,b,c){a=j.ub(a);if(a.addEventListener){d=="mousewheel"&&a.addEventListener("DOMMouseScroll",b,c);a.addEventListener(d,b,c)}else if(a.attachEvent){a.attachEvent("on"+d,b);c&&a.setCapture&&a.setCapture()}};j.P=function(a,c,d,
b){a=j.ub(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};j.Gb=function(a){a=t(a);a.preventDefault&&a.preventDefault();a.cancel=e;a.returnValue=k};j.Xe=function(a){a=t(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=e};j.R=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,
b)};return b};j.Ye=function(a,b){if(b==i)return a.textContent||a.innerText;var c=g.createTextNode(b);j.Xb(a);a.appendChild(c)};j.Ib=function(d,c){for(var b=[],a=d.firstChild;a;a=a.nextSibling)(c||a.nodeType==1)&&b.push(a);return b};function ib(a,c,e,b){b=b||"u";for(a=a?a.firstChild:h;a;a=a.nextSibling)if(a.nodeType==1){if(S(a,b)==c)return a;if(!e){var d=ib(a,c,e,b);if(d)return d}}}j.F=ib;function Q(a,d,f,b){b=b||"u";var c=[];for(a=a?a.firstChild:h;a;a=a.nextSibling)if(a.nodeType==1){S(a,b)==d&&c.push(a);
if(!f){var e=Q(a,d,f,b);if(e.length)c=c.concat(e)}}return c}function db(a,c,d){for(a=a?a.firstChild:h;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(!d){var b=db(a,c,d);if(b)return b}}}j.df=db;function ub(a,c,e){var b=[];for(a=a?a.firstChild:h;a;a=a.nextSibling)if(a.nodeType==1){(!c||a.tagName==c)&&b.push(a);if(!e){var d=ub(a,c,e);if(d.length)b=b.concat(d)}}return b}j.ef=ub;j.ff=function(b,a){return b.getElementsByTagName(a)};function C(){var e=arguments,d,c,b,a,g=1&e[0],f=1+g;d=
e[f-1]||{};for(;f<e.length;f++)if(c=e[f])for(b in c){a=c[b];if(a!==i){a=c[b];var h=d[b];d[b]=g&&(B(h)||B(a))?C(g,{},h,a):a}}return d}j.G=C;function W(f,g){var d={},c,a,b;for(c in f){a=f[c];b=g[c];if(a!==b){var e;if(B(a)&&B(b)){a=W(a,b);e=!hb(a)}!e&&(d[c]=a)}}return d}j.Pc=function(a){return D(a)=="function"};j.nf=function(a){return D(a)=="string"};j.Nc=function(a){return!isNaN(p(a))&&isFinite(a)};j.f=n;j.Ae=B;function P(a){return g.createElement(a)}j.Nb=function(){return P("DIV")};j.fe=function(){return P("SPAN")};
j.Mc=function(){};function T(b,c,a){if(a==i)return b.getAttribute(c);b.setAttribute(c,a)}function S(a,b){return T(a,b)||T(a,"data-"+b)}j.A=T;j.j=S;function y(b,a){if(a==i)return b.className;b.className=a}j.Rc=y;function mb(b){var a={};n(b,function(b){if(b!=i)a[b]=b});return a}function ob(b,a){return b.match(a||xb)}function O(b,a){return mb(ob(b||"",a))}j.Jd=ob;function Z(b,c){var a="";n(c,function(c){a&&(a+=b);a+=c});return a}function E(a,c,b){y(a,Z(" ",C(W(O(y(a)),O(c)),O(b))))}j.sd=function(a){return a.parentNode};
j.Q=function(a){j.db(a,"none")};j.C=function(a,b){j.db(a,b?"none":"")};j.Wd=function(b,a){b.removeAttribute(a)};j.be=function(){return q()&&l<10};j.de=function(d,a){if(a)d.style.clip="rect("+c.round(a.i||a.p||0)+"px "+c.round(a.n)+"px "+c.round(a.o)+"px "+c.round(a.g||a.s||0)+"px)";else if(a!==i){var g=d.style.cssText,f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],
e=H(g,f,"");b.Pb(d,e)}};j.W=function(){return+new Date};j.I=function(b,a){b.appendChild(a)};j.Rb=function(b,a,c){(c||a.parentNode).insertBefore(b,a)};j.Sb=function(b,a){a=a||b.parentNode;a&&a.removeChild(b)};j.ae=function(a,b){n(a,function(a){j.Sb(a,b)})};j.Xb=function(a){j.ae(j.Ib(a,e),a)};j.Yd=function(a,b){var c=j.sd(a);b&1&&j.O(a,(j.l(c)-j.l(a))/2);b&2&&j.L(a,(j.m(c)-j.m(a))/2)};j.Vd=function(b,a){return parseInt(b,a||10)};j.Ud=p;j.Ve=function(b,a){var c=g.body;while(a&&b!==a&&c!==a)try{a=a.parentNode}catch(d$1){return k}return b===
a};function U(d,c,b){var a=d.cloneNode(!c);!b&&j.Wd(a,"id");return a}j.T=U;j.yb=function(d,f){var a=new Image;function b(e,d){j.P(a,"load",b);j.P(a,"abort",c);j.P(a,"error",c);f&&f(a,d)}function c(a){b(a,e)}if(eb()&&l<11.6||!d)b(!d);else{j.c(a,"load",b);j.c(a,"abort",c);j.c(a,"error",c);a.src=d}};j.Qd=function(d,a,e){var c=d.length+1;function b(b){c--;if(a&&b&&b.src==a.src)a=b;!c&&e&&e(a)}n(d,function(a){j.yb(a.src,b)});b()};j.ee=function(a,g,i,h){if(h)a=U(a);var c=Q(a,g);if(!c.length)c=b.ff(a,g);
for(var f=c.length-1;f>-1;f--){var d=c[f],e=U(i);y(e,y(d));b.Pb(e,d.style.cssText);b.Rb(e,d);b.Sb(d)}return a};function Db(a){var l=this,p="",r=["av","pv","ds","dn"],e=[],q,k=0,f=0,d=0;function h(){E(a,q,e[d||k||f&2||f]);b.fb(a,"pointer-events",d?"none":"")}function c(){k=0;h();j.P(g,"mouseup",c);j.P(g,"touchend",c);j.P(g,"touchcancel",c)}function o(a){if(d)j.Gb(a);else{k=4;h();j.c(g,"mouseup",c);j.c(g,"touchend",c);j.c(g,"touchcancel",c)}}l.Od=function(a){if(a===i)return f;f=a&2||a&1;h()};l.Fb=function(a){if(a===
i)return!d;d=a?0:3;h()};l.mb=a=j.ub(a);var m=b.Jd(y(a));if(m)p=m.shift();n(r,function(a){e.push(p+a)});q=Z(" ",e);e.unshift("");j.c(a,"mousedown",o);j.c(a,"touchstart",o)}j.Vb=function(a){return new Db(a)};j.fb=w;j.rb=m("overflow");j.L=m("top",2);j.O=m("left",2);j.l=m("width",2);j.m=m("height",2);j.gc=m("marginLeft",2);j.fc=m("marginTop",2);j.u=m("position");j.db=m("display");j.E=m("zIndex",1);j.tb=function(b,a,c){if(a!=i)Cb(b,a,c);else return Ab(b)};j.Pb=function(a,b){if(b!=i)a.style.cssText=b;else return a.style.cssText};
j.Nd=function(b,a){if(a===i){a=w(b,"backgroundImage")||"";var c=/\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a)||[];return c[1]}w(b,"backgroundImage",a?"url('"+a+"')":"")};var R={J:j.tb,i:j.L,g:j.O,Z:j.l,X:j.m,wb:j.u,Df:j.db,M:j.E};function x(f,l){var e=tb(),b=J(),d=rb(),g=K(f);function k(b,d,a){var e=b.gb(u(-d/2,-a/2)),f=b.gb(u(d/2,-a/2)),g=b.gb(u(d/2,a/2)),h=b.gb(u(-d/2,a/2));b.gb(u(300,300));return u(c.min(e.x,f.x,g.x,h.x)+d/2,c.min(e.y,f.y,g.y,h.y)+a/2)}function a(d,a){a=a||{};var n=a.H||
0,p=(a.U||0)%360,q=(a.V||0)%360,u=(a.K||0)%360,l=a.B,m=a.q,f=a.Cf;if(l==i)l=1;if(m==i)m=1;if(f==i)f=1;if(e){n=0;p=0;q=0;f=0}var c=new zb(a.pb,a.ob,n);c.U(p);c.V(q);c.Rd(u);c.Td(a.Lb,a.Hb);c.kc(l,m,f);if(b){c.ib(a.s,a.p);d.style[g]=c.ce()}else if(!Y||Y<9){var o="",h={x:0,y:0};if(a.cb)h=k(c,a.cb,a.hb);j.fc(d,h.y);j.gc(d,h.x);o=c.Pd();var s=d.style.filter,t=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),r=H(s,[t],o);pb(d,r)}}x=function(e,c){c=c||{};var g=c.s,k=c.p,f;n(R,function(a,
b){f=c[b];f!==i&&a(e,f)});j.de(e,c.a);if(!b){g!=i&&j.O(e,(c.zd||0)+g);k!=i&&j.L(e,(c.Dd||0)+k)}if(c.Xd)if(d)nb(j.R(h,M,e,c));else a(e,c)};j.jb=M;if(d)j.jb=x;if(e)j.jb=a;else if(!b)a=M;j.D=x;x(f,l)}j.jb=x;j.D=x;function zb(j,k,o){var d=this,b=[1,0,0,0,0,1,0,0,0,0,1,0,j||0,k||0,o||0,1],i=c.sin,g=c.cos,l=c.tan;function f(a){return a*c.PI/180}function n(a,b){return{x:a,y:b}}function m(c,e,l,m,o,r,t,u,w,z,A,C,E,b,f,k,a,g,i,n,p,q,s,v,x,y,B,D,F,d,h,j){return[c*a+e*p+l*x+m*F,c*g+e*q+l*y+m*d,c*i+e*s+l*B+m*
h,c*n+e*v+l*D+m*j,o*a+r*p+t*x+u*F,o*g+r*q+t*y+u*d,o*i+r*s+t*B+u*h,o*n+r*v+t*D+u*j,w*a+z*p+A*x+C*F,w*g+z*q+A*y+C*d,w*i+z*s+A*B+C*h,w*n+z*v+A*D+C*j,E*a+b*p+f*x+k*F,E*g+b*q+f*y+k*d,E*i+b*s+f*B+k*h,E*n+b*v+f*D+k*j]}function e(c,a){return m.apply(h,(a||b).concat(c))}d.kc=function(a,c,d){if(a!=1||c!=1||d!=1)b=e([a,0,0,0,0,c,0,0,0,0,d,0,0,0,0,1])};d.ib=function(a,c,d){b[12]+=a||0;b[13]+=c||0;b[14]+=d||0};d.U=function(c){if(c){a=f(c);var d=g(a),h=i(a);b=e([1,0,0,0,0,d,h,0,0,-h,d,0,0,0,0,1])}};d.V=function(c){if(c){a=
f(c);var d=g(a),h=i(a);b=e([d,0,-h,0,0,1,0,0,h,0,d,0,0,0,0,1])}};d.Rd=function(c){if(c){a=f(c);var d=g(a),h=i(a);b=e([d,h,0,0,-h,d,0,0,0,0,1,0,0,0,0,1])}};d.Td=function(a,c){if(a||c){j=f(a);k=f(c);b=e([1,l(k),0,0,l(j),1,0,0,0,0,1,0,0,0,0,1])}};d.gb=function(c){var a=e(b,[1,0,0,0,0,1,0,0,0,0,1,0,c.x,c.y,0,1]);return n(a[12],a[13])};d.ce=function(){return"matrix3d("+b.join(",")+")"};d.Pd=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+b[0]+", M12="+b[4]+", M21="+b[1]+", M22="+b[5]+
", SizingMethod='auto expand')"}}new function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.B=function(b,c){return a.Fd(b,c,0)};a.q=function(b,c){return a.Fd(b,0,c)};a.Fd=function(a,c,d){return b(a,[[c,0],[0,d]])};a.gb=function(d,c){var a=b(d,[[c.x],[c.y]]);return u(a[0][0],a[1][0])}};var N={zd:0,Dd:0,s:0,p:0,v:1,B:1,q:1,K:0,U:0,V:0,pb:0,ob:0,H:0,Lb:0,Hb:0};j.wd=
function(c,d){var a=c||{};if(c)if(b.Pc(c))a={S:a};else if(b.Pc(c.a))a.a={S:c.a};a.S=a.S||d;if(a.a)a.a.S=a.a.S||d;return a};j.Cd=function(l,m,x,q,z,A,n){var a=m;if(l){a={};for(var g in m){var B=A[g]||1,w=z[g]||[0,1],f=(x-w[0])/w[1];f=c.min(c.max(f,0),1);f=f*B;var u=c.floor(f);if(f!=u)f-=u;var j=q.S||d.ad,k,C=l[g],o=m[g];if(b.Nc(o)){j=q[g]||j;var y=j(f);k=C+o*y}else{k=b.G({Ob:{}},l[g]);var v=q[g]||{};b.f(o.Ob||o,function(d,a){j=v[a]||v.S||j;var c=j(f),b=d*c;k.Ob[a]=b;k[a]+=b})}a[g]=k}var t=b.f(m,function(b,
a){return N[a]!=i});t&&b.f(N,function(c,b){if(a[b]==i&&l[b]!==i)a[b]=l[b]});if(t){if(a.v)a.B=a.q=a.v;a.cb=n.cb;a.hb=n.hb;a.Xd=e}}if(m.a&&n.ib){var p=a.a.Ob,s=(p.i||0)+(p.o||0),r=(p.g||0)+(p.n||0);a.g=(a.g||0)+r;a.i=(a.i||0)+s;a.a.g-=r;a.a.n-=r;a.a.i-=s;a.a.o-=s}if(a.a&&b.be()&&!a.a.i&&!a.a.g&&!a.a.p&&!a.a.s&&a.a.n==n.cb&&a.a.o==n.hb)a.a=h;return a}};function m(){var a=this,d=[];function i(a,b){d.push({vc:a,zc:b})}function h(a,c){b.f(d,function(b,e){b.vc==a&&b.zc===c&&d.splice(e,1)})}a.xb=a.addEventListener=
i;a.removeEventListener=h;a.k=function(a){var c=[].slice.call(arguments,1);b.f(d,function(b){b.vc==a&&b.zc.apply(f,c)})}}var l=function(z,E,g,K,N,M){z=z||0;var a=this,q,o,p,u,B=0,H,I,G,C,y=0,j=0,m=0,F,l,i,d,n,D,w=[],x;function P(a){i+=a;d+=a;l+=a;j+=a;m+=a;y+=a}function t(p){var f=p;if(n)if(!D&&(f>=d||f<i)||D&&f>=n)f=((f-i)%n+n)%n+i;if(!F||u||j!=f){var h=c.min(f,d);h=c.max(h,i);if(!F||u||h!=m){if(M){var k=(h-l)/(E||1);if(g.Ic)k=1-k;var o=b.Cd(N,M,k,H,G,I,g);if(x)b.f(o,function(b,a){x[a]&&x[a](K,b)});
else b.D(K,o)}a.nc(m-l,h-l);var r=m,q=m=h;b.f(w,function(b,c){var a=f<=j?w[w.length-c-1]:b;a.bb(m-y)});j=f;F=e;a.Jb(r,q)}}}function A(a,b,e){b&&a.Mb(d);if(!e){i=c.min(i,a.Bc()+y);d=c.max(d,a.ic()+y)}w.push(a)}var r=f.requestAnimationFrame||f.webkitRequestAnimationFrame||f.mozRequestAnimationFrame||f.msRequestAnimationFrame;if(b.pf()&&b.Hd()<7)r=h;r=r||function(a){b.Tb(a,g.eb)};function J(){if(q){var d=b.W(),e=c.min(d-B,g.dd),a=j+e*p;B=d;if(a*p>=o*p)a=o;t(a);if(!u&&a*p>=o*p)L(C);else r(J)}}function s(f,
g,h){if(!q){q=e;u=h;C=g;f=c.max(f,i);f=c.min(f,d);o=f;p=o<j?-1:1;a.Lc();B=b.W();r(J)}}function L(b){if(q){u=q=C=k;a.cd();b&&b()}}a.bd=function(a,b,c){s(a?j+a:d,b,c)};a.Sc=s;a.lb=L;a.Kd=function(a){s(a)};a.ab=function(){return j};a.Qc=function(){return o};a.sb=function(){return m};a.bb=t;a.ib=function(a){t(j+a)};a.Fc=function(){return q};a.lf=function(a){n=a};a.Mb=P;a.Oc=function(a,b){A(a,0,b)};a.uc=function(a){A(a,1)};a.Bc=function(){return i};a.ic=function(){return d};a.Jb=a.Lc=a.cd=a.nc=b.Mc;a.wc=
b.W();g=b.G({eb:16,dd:50},g);n=g.qc;D=g.Ld;x=g.Id;i=l=z;d=z+E;I=g.gd||{};G=g.yd||{};H=b.wd(g.Y)};var o=new function(){var h=this;function g(b,a,c){c.push(a);b[a]=b[a]||[];b[a].push(c)}h.Zd=function(d){for(var e=[],a,b=0;b<d.nb;b++)for(a=0;a<d.z;a++)g(e,c.ceil(1E5*c.random())%13,[b,a]);return e}},r=function(n,s,q,u,z){var f=this,v,g,a,y=0,x=u.Sd,r,i=8;function t(a){if(a.i)a.p=a.i;if(a.g)a.s=a.g;b.f(a,function(a){b.Ae(a)&&t(a)})}function j(g,f){var a={eb:f,bc:1,Tb:0,z:1,nb:1,J:0,v:0,a:0,ib:k,dc:k,Ic:k,
ye:o.Zd,ed:{he:0,hf:0},Y:d.Yc,gd:{},Eb:[],yd:{}};b.G(a,g);t(a);a.Y=b.wd(a.Y,d.Yc);a.gf=c.ceil(a.bc/a.eb);a.cf=function(c,b){c/=a.z;b/=a.nb;var f=c+"x"+b;if(!a.Eb[f]){a.Eb[f]={Z:c,X:b};for(var d=0;d<a.z;d++)for(var e=0;e<a.nb;e++)a.Eb[f][e+","+d]={i:e*b,n:d*c+c,o:e*b+b,g:d*c}}return a.Eb[f]};if(a.ec){a.ec=j(a.ec,f);a.dc=e}return a}function p(B,i,a,w,o,m){var z=this,u,v={},j={},n=[],f,d,s,q=a.ed.he||0,r=a.ed.hf||0,g=a.cf(o,m),p=C(a),D=p.length-1,t=a.bc+a.Tb*D,x=w+t,l=a.dc,y;x+=50;function C(a){var b=
a.ye(a);return a.Ic?b.reverse():b}z.Wc=x;z.Ub=function(d){d-=w;var e=d<t;if(e||y){y=e;if(!l)d=t-d;var f=c.ceil(d/a.eb);b.f(j,function(a,e){var d=c.max(f,a.bf);d=c.min(d,a.length-1);if(a.Zc!=d){if(!a.Zc&&!l)b.C(n[e]);else d==a.af&&l&&b.Q(n[e]);a.Zc=d;b.D(n[e],a[d])}})}};i=b.T(i);b.jb(i,h);if(b.Qb()){var E=!i["no-image"],A=b.ef(i);b.f(A,function(a){(E||a["jssor-slider"])&&b.tb(a,b.tb(a),e)})}b.f(p,function(h,i){b.f(h,function(G){var K=G[0],J=G[1],t=K+","+J,n=k,p=k,x=k;if(q&&J%2){if(q&3)n=!n;if(q&12)p=
!p;if(q&16)x=!x}if(r&&K%2){if(r&3)n=!n;if(r&12)p=!p;if(r&16)x=!x}a.i=a.i||a.a&4;a.o=a.o||a.a&8;a.g=a.g||a.a&1;a.n=a.n||a.a&2;var E=p?a.o:a.i,B=p?a.i:a.o,D=n?a.n:a.g,C=n?a.g:a.n;a.a=E||B||D||C;s={};d={p:0,s:0,J:1,Z:o,X:m};f=b.G({},d);u=b.G({},g[t]);if(a.J)d.J=2-a.J;if(a.M){d.M=a.M;f.M=0}var I=a.z*a.nb>1||a.a;if(a.v||a.K){var H=e;if(b.Qb())if(a.z*a.nb>1)H=k;else I=k;if(H){d.v=a.v?a.v-1:1;f.v=1;if(b.Qb()||b.Bd())d.v=c.min(d.v,2);var N=a.K||0;d.K=N*360*(x?-1:1);f.K=0}}if(I){var h=u.Ob={};if(a.a){var w=
a.Bf||1;if(E&&B){h.i=g.X/2*w;h.o=-h.i}else if(E)h.o=-g.X*w;else if(B)h.i=g.X*w;if(D&&C){h.g=g.Z/2*w;h.n=-h.g}else if(D)h.n=-g.Z*w;else if(C)h.g=g.Z*w}s.a=u;f.a=g[t]}var L=n?1:-1,M=p?1:-1;if(a.x)d.s+=o*a.x*L;if(a.y)d.p+=m*a.y*M;b.f(d,function(a,c){if(b.Nc(a))if(a!=f[c])s[c]=a-f[c]});v[t]=l?f:d;var F=a.gf,A=c.round(i*a.Tb/a.eb);j[t]=new Array(A);j[t].bf=A;j[t].af=A+F-1;for(var z=0;z<=F;z++){var y=b.Cd(f,s,z/F,a.Y,a.yd,a.gd,{ib:a.ib,cb:o,hb:m});y.M=y.M||1;j[t].push(y)}})});p.reverse();b.f(p,function(a){b.f(a,
function(c){var f=c[0],e=c[1],d=f+","+e,a=i;if(e||f)a=b.T(i);b.D(a,v[d]);b.rb(a,"hidden");b.u(a,"absolute");B.We(a);n[d]=a;b.C(a,!l)})})}function w(){var b=this,c=0;l.call(b,0,v);b.Jb=function(d,b){if(b-c>i){c=b;a&&a.Ub(b);g&&g.Ub(b)}};b.Cc=r}f.mf=function(){var a=0,b=u.Ab,d=b.length;if(x)a=y++%d;else a=c.floor(c.random()*d);b[a]&&(b[a].kb=a);return b[a]};f.of=function(w,x,k,l,b){r=b;b=j(b,i);var h=l.Ed,e=k.Ed;h["no-image"]=!l.cc;e["no-image"]=!k.cc;var m=h,o=e,u=b,d=b.ec||j({},i);if(!b.dc){m=e;o=
h}var t=d.Mb||0;g=new p(n,o,d,c.max(t-d.eb,0),s,q);a=new p(n,m,u,c.max(d.eb-t,0),s,q);g.Ub(0);a.Ub(0);v=c.max(g.Wc,a.Wc);f.kb=w};f.vb=function(){n.vb();g=h;a=h};f.uf=function(){var b=h;if(a)b=new w;return b};if(b.Qb()||b.Bd()||z&&b.sf()<537)i=16;m.call(f);l.call(f,-1E7,1E7)},j=function(q,fc){var o=this;function Bc(){var a=this;l.call(a,-1E8,2E8);a.qf=function(){var b=a.sb(),d=c.floor(b),f=t(d),e=b-c.floor(b);return{kb:f,Ze:d,wb:e}};a.Jb=function(b,a){var d=c.floor(a);if(d!=a&&a>b)d++;Tb(d,e);o.k(j.Qe,
t(a),t(b),a,b)}}function Ac(){var a=this;l.call(a,0,0,{qc:r});b.f(C,function(b){D&1&&b.lf(r);a.uc(b);b.Mb(kb/bc)})}function zc(){var a=this,b=Ub.mb;l.call(a,-1,2,{Y:d.ad,Id:{wb:Zb},qc:r},b,{wb:1},{wb:-2});a.Yb=b}function mc(n,m){var b=this,d,f,g,i,c;l.call(b,-1E8,2E8,{dd:100});b.Lc=function(){O=e;R=h;o.k(j.Pe,t(w.ab()),w.ab())};b.cd=function(){O=k;i=k;var a=w.qf();o.k(j.ve,t(w.ab()),w.ab());!a.wb&&Dc(a.Ze,s)};b.Jb=function(j,h){var b;if(i)b=c;else{b=f;if(g){var e=h/g;b=a.ue(e)*(f-d)+d}}w.bb(b)};b.Db=
function(a,e,c,h){d=a;f=e;g=c;w.bb(a);b.bb(0);b.Sc(c,h)};b.te=function(a){i=e;c=a;b.bd(a,h,e)};b.se=function(a){c=a};w=new Bc;w.Oc(n);w.Oc(m)}function oc(){var c=this,a=Xb();b.E(a,0);b.fb(a,"pointerEvents","none");c.mb=a;c.We=function(c){b.I(a,c);b.C(a)};c.vb=function(){b.Q(a);b.Xb(a)}}function xc(n,f){var d=this,q,N,v,i,y=[],x,B,W,H,S,F,g,w,p;l.call(d,-u,u+1,{});function E(a){q&&q.qd();T(n,a,0);F=e;q=new I.N(n,I,b.Ud(b.j(n,"idle"))||lc,!L);q.bb(0)}function Z(){q.wc<I.wc&&E()}function O(p,r,n){if(!H){H=
e;if(i&&n){var g=n.width,c=n.height,m=g,l=c;if(g&&c&&a.Cb){if(a.Cb&3&&(!(a.Cb&4)||g>K||c>J)){var h=k,q=K/J*c/g;if(a.Cb&1)h=q>1;else if(a.Cb&2)h=q<1;m=h?g*J/c:K;l=h?J:c*K/g}b.l(i,m);b.m(i,l);b.L(i,(J-l)/2);b.O(i,(K-m)/2)}b.u(i,"absolute");o.k(j.re,f)}}b.Q(r);p&&p(d)}function Y(b,c,e,g){if(g==R&&s==f&&L)if(!Cc){var a=t(b);A.of(a,f,c,d,e);c.qe();U.Mb(a-U.Bc()-1);U.bb(a);z.Db(b,b,0)}}function bb(b){if(b==R&&s==f){if(!g){var a=h;if(A)if(A.kb==f)a=A.uf();else A.vb();Z();g=new vc(n,f,a,q);g.md(p)}!g.Fc()&&
g.Zb()}}function G(e,i,l){if(e==f){if(e!=i)C[i]&&C[i].kd();else!l&&g&&g.we();p&&p.Fb();var m=R=b.W();d.yb(b.R(h,bb,m))}else{var k=c.min(f,e),j=c.max(f,e),o=c.min(j-k,k+r-j),n=u+a.pe-1;(!S||o<=n)&&d.yb()}}function db(){if(s==f&&g){g.lb();p&&p.ne();p&&p.me();g.hd()}}function eb(){s==f&&g&&g.lb()}function ab(a){!P&&o.k(j.le,f,a)}function Q(){p=w.pInstance;g&&g.md(p)}d.yb=function(c,a){a=a||v;if(y.length&&!H){b.C(a);if(!W){W=e;o.k(j.ke,f);b.f(y,function(a){if(!b.A(a,"src")){a.src=b.j(a,"src2")||"";b.db(a,
a["display-origin"])}})}b.Qd(y,i,b.R(h,O,c,a))}else O(c,a)};d.je=function(){var j=f;if(a.Ac<0)j-=r;var e=j+a.Ac*tc;if(D&2)e=t(e);if(!(D&1)&&!ib)e=c.max(0,c.min(e,r-u));if(e!=f){if(A){var g=A.mf(r);if(g){var k=R=b.W(),i=C[t(e)];return i.yb(b.R(h,Y,e,i,g,k),v)}}cb(e)}else if(a.qb){d.kd();G(f,f)}};d.xc=function(){G(f,f,e)};d.kd=function(){p&&p.ne();p&&p.me();d.id();g&&g.ie();g=h;E()};d.qe=function(){b.Q(n)};d.id=function(){b.C(n)};d.oe=function(){p&&p.Fb()};function T(a,c,d){if(b.A(a,"jssor-slider"))return;
if(!F){if(a.tagName=="IMG"){y.push(a);if(!b.A(a,"src")){S=e;a["display-origin"]=b.db(a);b.Q(a)}}var f=b.Nd(a);if(f){var g=new Image;b.j(g,"src2",f);y.push(g)}if(d){b.E(a,(b.E(a)||0)+1);b.fc(a,b.fc(a)||0);b.gc(a,b.gc(a)||0);b.jb(a,{H:0})}}var h=b.Ib(a);b.f(h,function(f){var h=f.tagName,j=b.j(f,"u");if(j=="player"&&!w){w=f;if(w.pInstance)Q();else b.c(w,"dataavailable",Q)}if(j=="caption")if(c){b.Hc(f,b.j(f,"to"));b.ge(f,b.j(f,"bf"));b.j(f,"3d")&&b.kf(f,"preserve-3d")}else{if(!b.ud()){var g=b.T(f,k,e);
b.Rb(g,f,a);b.Sb(f,a);f=g;c=e}}else if(!F&&!d&&!i){if(h=="A"){if(b.j(f,"u")=="image")i=b.df(f,"IMG");else i=b.F(f,"image",e);if(i){x=f;b.db(x,"block");b.D(x,V);B=b.T(x,e);b.u(x,"relative");b.tb(B,0);b.fb(B,"backgroundColor","#000")}}else if(h=="IMG"&&b.j(f,"u")=="image")i=f;if(i){i.border=0;b.D(i,V)}}T(f,c,d+1)})}d.nc=function(c,b){var a=u-b;Zb(N,a)};d.kb=f;m.call(d);b.jf(n,b.j(n,"p"));b.Te(n,b.j(n,"po"));var M=b.F(n,"thumb",e);if(M){b.T(M);b.Q(M)}b.C(n);v=b.T(gb);b.E(v,1E3);b.c(n,"click",ab);E(e);
d.cc=i;d.jd=B;d.Ed=n;d.Yb=N=n;b.I(N,v);o.xb(203,G);o.xb(28,eb);o.xb(24,db)}function vc(y,f,p,q){var a=this,m=0,u=0,g,h,d,c,i,t,r,n=C[f];l.call(a,0,0);function v(){b.Xb(N);cc&&i&&n.jd&&b.I(N,n.jd);b.C(N,!i&&n.cc)}function w(){a.Zb()}function x(b){r=b;a.lb();a.Zb()}a.Zb=function(){var b=a.sb();if(!B&&!O&&!r&&s==f){if(!b){if(g&&!i){i=e;a.hd(e);o.k(j.xe,f,m,u,g,c)}v()}var k,p=j.ld;if(b!=c)if(b==d)k=c;else if(b==h)k=d;else if(!b)k=h;else k=a.Qc();o.k(p,f,b,m,h,d,c);var l=L&&(!E||F);if(b==c)(d!=c&&!(E&
12)||l)&&n.je();else(l||b!=c)&&a.Sc(k,w)}};a.we=function(){d==c&&d==a.sb()&&a.bb(h)};a.ie=function(){A&&A.kb==f&&A.vb();var b=a.sb();b<c&&o.k(j.ld,f,-b-1,m,h,d,c)};a.hd=function(a){p&&b.rb(lb,a&&p.Cc.zf?"":"hidden")};a.nc=function(b,a){if(i&&a>=g){i=k;v();n.id();A.vb();o.k(j.Re,f,m,u,g,c)}o.k(j.ze,f,a,m,h,d,c)};a.md=function(a){if(a&&!t){t=a;a.xb($JssorPlayer$.Md,x)}};p&&a.uc(p);g=a.ic();a.uc(q);h=g+q.nd;d=g+q.od;c=a.ic()}function Kb(a,c,d){b.O(a,c);b.L(a,d)}function Zb(c,b){var a=x>0?x:fb,d=zb*b*
(a&1),e=Ab*b*(a>>1&1);Kb(c,d,e)}function Pb(){qb=O;Ib=z.Qc();G=w.ab()}function gc(){Pb();if(B||!F&&E&12){z.lb();o.k(j.Oe)}}function ec(f){if(!B&&(F||!(E&12))&&!z.Fc()){var d=w.ab(),b=c.ceil(G);if(f&&c.abs(H)>=a.pd){b=c.ceil(d);b+=jb}if(!(D&1))b=c.min(r-u,c.max(b,0));var e=c.abs(b-d);e=1-c.pow(1-e,5);if(!P&&qb)z.Kd(Ib);else if(d==b){tb.oe();tb.xc()}else z.Db(d,b,e*Vb)}}function Hb(a){!b.j(b.ac(a),"nodrag")&&b.Gb(a)}function rc(a){Yb(a,1)}function Yb(a,c){a=b.xd(a);var i=b.ac(a);if(!M&&!b.j(i,"nodrag")&&
sc()&&(!c||a.touches.length==1)){B=e;yb=k;R=h;b.c(g,c?"touchmove":"mousemove",Bb);b.W();P=0;gc();if(!qb)x=0;if(c){var f=a.touches[0];ub=f.clientX;vb=f.clientY}else{var d=b.fd(a);ub=d.x;vb=d.y}H=0;hb=0;jb=0;o.k(j.Ne,t(G),G,a)}}function Bb(d){if(B){d=b.xd(d);var f;if(d.type!="mousemove"){var l=d.touches[0];f={x:l.clientX,y:l.clientY}}else f=b.fd(d);if(f){var j=f.x-ub,k=f.y-vb;if(c.floor(G)!=G)x=x||fb&M;if((j||k)&&!x){if(M==3)if(c.abs(k)>c.abs(j))x=2;else x=1;else x=M;if(ob&&x==1&&c.abs(k)-c.abs(j)>
3)yb=e}if(x){var a=k,i=Ab;if(x==1){a=j;i=zb}if(!(D&1)){if(a>0){var g=i*s,h=a-g;if(h>0)a=g+c.sqrt(h)*5}if(a<0){var g=i*(r-u-s),h=-a-g;if(h>0)a=-g-c.sqrt(h)*5}}if(H-hb<-2)jb=0;else if(H-hb>2)jb=-1;hb=H;H=a;sb=G-H/i/(Y||1);if(H&&x&&!yb){b.Gb(d);if(!O)z.te(sb);else z.se(sb)}}}}}function bb(){qc();if(B){B=k;b.W();b.P(g,"mousemove",Bb);b.P(g,"touchmove",Bb);P=H;z.lb();var a=w.ab();o.k(j.Me,t(a),a,t(G),G);E&12&&Pb();ec(e)}}function jc(c){if(P){b.Xe(c);var a=b.ac(c);while(a&&v!==a){a.tagName=="A"&&b.Gb(c);
try{a=a.parentNode}catch(d$2){break}}}}function Jb(a){C[s];s=t(a);tb=C[s];Tb(a);return s}function Dc(a,b){x=0;Jb(a);o.k(j.Le,t(a),b)}function Tb(a,c){wb=a;b.f(S,function(b){b.pc(t(a),a,c)})}function sc(){var b=j.rd||0,a=X;if(ob)a&1&&(a&=1);j.rd|=a;return M=a&~b}function qc(){if(M){j.rd&=~X;M=0}}function Xb(){var a=b.Nb();b.D(a,V);b.u(a,"absolute");return a}function t(a){return(a%r+r)%r}function kc(b,d){if(d)if(!D){b=c.min(c.max(b+wb,0),r-u);d=k}else if(D&2){b=t(b+wb);d=k}cb(b,a.mc,d)}function xb(){b.f(S,
function(a){a.lc(a.Kb.Af<=F)})}function hc(){if(!F){F=1;xb();if(!B){E&12&&ec();E&3&&C[s].xc()}}}function Ec(){if(F){F=0;xb();B||!(E&12)||gc()}}function ic(){V={Z:K,X:J,i:0,g:0};b.f(T,function(a){b.D(a,V);b.u(a,"absolute");b.rb(a,"hidden");b.Q(a)});b.D(gb,V)}function ab(b,a){cb(b,a,e)}function cb(g,f,l){if(Rb&&(!B&&(F||!(E&12))||a.vd)){O=e;B=k;z.lb();if(f==i)f=Vb;var d=Cb.sb(),b=g;if(l){b=d+g;if(g>0)b=c.ceil(b);else b=c.floor(b)}if(D&2)b=t(b);if(!(D&1))b=c.max(0,c.min(b,r-u));var j=(b-d)%r;b=d+j;var h=
d==b?0:f*c.abs(j);h=c.min(h,f*u*1.5);z.Db(d,b,h||1)}}o.bd=function(){if(!L){L=e;C[s]&&C[s].xc()}};function W(){return b.l(y||q)}function nb(){return b.m(y||q)}o.cb=W;o.hb=nb;function Eb(c,d){if(c==i)return b.l(q);if(!y){var a=b.Nb(g);b.Rc(a,b.Rc(q));b.Pb(a,b.Pb(q));b.db(a,"block");b.u(a,"relative");b.L(a,0);b.O(a,0);b.rb(a,"visible");y=b.Nb(g);b.u(y,"absolute");b.L(y,0);b.O(y,0);b.l(y,b.l(q));b.m(y,b.m(q));b.Hc(y,"0 0");b.I(y,a);var h=b.Ib(q);b.I(q,y);b.fb(q,"backgroundImage","");b.f(h,function(c){b.I(b.j(c,
"noscale")?q:a,c);b.j(c,"autocenter")&&Lb.push(c)})}Y=c/(d?b.m:b.l)(y);b.Ue(y,Y);var f=d?Y*W():c,e=d?c:Y*nb();b.l(q,f);b.m(q,e);b.f(Lb,function(a){var c=b.Vd(b.j(a,"autocenter"));b.Yd(a,c)})}o.Je=Eb;m.call(o);o.mb=q=b.ub(q);var a=b.G({Cb:0,pe:1,jc:1,hc:0,yc:k,qb:1,zb:e,vd:e,Ac:1,Jc:3E3,Gc:1,mc:500,ue:d.Be,pd:20,Dc:0,z:1,Ec:0,Ie:1,sc:1,Kc:1},fc);a.zb=a.zb&&b.tf();if(a.He!=i)a.Jc=a.He;if(a.Ge!=i)a.Ec=a.Ge;var fb=a.sc&3,tc=(a.sc&4)/-4||1,mb=a.Ke,I=b.G({N:p,zb:a.zb},a.xf);I.Ab=I.Ab||I.wf;var Fb=a.Fe,
Z=a.Ee,eb=a.vf,Q=!a.Ie,y,v=b.F(q,"slides",Q),gb=b.F(q,"loading",Q)||b.Nb(g),Nb=b.F(q,"navigator",Q),dc=b.F(q,"arrowleft",Q),ac=b.F(q,"arrowright",Q),Mb=b.F(q,"thumbnavigator",Q),pc=b.l(v),nc=b.m(v),V,T=[],uc=b.Ib(v);b.f(uc,function(a){a.tagName=="DIV"&&!b.j(a,"u")&&T.push(a);b.E(a,(b.E(a)||0)+1)});var s=-1,wb,tb,r=T.length,K=a.De||pc,J=a.Ce||nc,Wb=a.Dc,zb=K+Wb,Ab=J+Wb,bc=fb&1?zb:Ab,u=c.min(a.z,r),lb,x,M,yb,S=[],Qb,Sb,Ob,cc,Cc,L,E=a.Gc,lc=a.Jc,Vb=a.mc,rb,ib,kb,Rb=u<r,D=Rb?a.qb:0,X,P,F=1,O,B,R,ub=0,
vb=0,H,hb,jb,Cb,w,U,z,Ub=new oc,Y,Lb=[];if(r){if(a.zb)Kb=function(a,c,d){b.jb(a,{pb:c,ob:d})};L=a.yc;o.Kb=fc;ic();b.A(q,"jssor-slider",e);b.E(v,b.E(v)||0);b.u(v,"absolute");lb=b.T(v,e);b.Rb(lb,v);if(mb){cc=mb.yf;rb=mb.N;ib=u==1&&r>1&&rb&&(!b.ud()||b.Hd()>=8)}kb=ib||u>=r||!(D&1)?0:a.Ec;X=(u>1||kb?fb:-1)&a.Kc;var Gb=v,C=[],A,N,Db=b.rf(),ob=Db.Se,G,qb,Ib,sb;Db.td&&b.fb(Gb,Db.td,[h,"pan-y","pan-x","none"][X]||"");U=new zc;if(ib)A=new rb(Ub,K,J,mb,ob);b.I(lb,U.Yb);b.rb(v,"hidden");N=Xb();b.fb(N,"backgroundColor",
"#000");b.tb(N,0);b.Rb(N,Gb.firstChild,Gb);for(var db=0;db<T.length;db++){var wc=T[db],yc=new xc(wc,db);C.push(yc)}b.Q(gb);Cb=new Ac;z=new mc(Cb,U);b.c(v,"click",jc,e);b.c(q,"mouseout",b.Wb(hc,q));b.c(q,"mouseover",b.Wb(Ec,q));if(X){b.c(v,"mousedown",Yb);b.c(v,"touchstart",rc);b.c(v,"dragstart",Hb);b.c(v,"selectstart",Hb);b.c(g,"mouseup",bb);b.c(g,"touchend",bb);b.c(g,"touchcancel",bb);b.c(f,"blur",bb)}E&=ob?10:5;if(Nb&&Fb){Qb=new Fb.N(Nb,Fb,W(),nb());S.push(Qb)}if(Z&&dc&&ac){Z.qb=D;Z.z=u;Sb=new Z.N(dc,
ac,Z,W(),nb());S.push(Sb)}if(Mb&&eb){eb.hc=a.hc;Ob=new eb.N(Mb,eb);S.push(Ob)}b.f(S,function(a){a.rc(r,C,gb);a.xb(n.tc,kc)});b.fb(q,"visibility","visible");Eb(W());xb();a.jc&&b.c(g,"keydown",function(b){if(b.keyCode==37)ab(-a.jc);else b.keyCode==39&&ab(a.jc)});var pb=a.hc;if(!(D&1))pb=c.max(0,c.min(pb,r-u));z.Db(pb,pb,0)}};j.le=21;j.Ne=22;j.Me=23;j.Pe=24;j.ve=25;j.ke=26;j.re=27;j.Oe=28;j.Qe=202;j.Le=203;j.xe=206;j.Re=207;j.ze=208;j.ld=209;var n={tc:1},q=function(d,C){var f=this;m.call(f);d=b.ub(d);
var s,A,z,r,l=0,a,o,j,w,x,i,g,q,p,B=[],y=[];function v(a){a!=-1&&y[a].Od(a==l)}function t(a){f.k(n.tc,a*o)}f.mb=d;f.pc=function(a){if(a!=r){var d=l,b=c.floor(a/o);l=b;r=a;v(d);v(b)}};f.lc=function(a){b.C(d,a)};var u;f.rc=function(D){if(!u){s=c.ceil(D/o);l=0;var n=q+w,r=p+x,m=c.ceil(s/j)-1;A=q+n*(!i?m:j-1);z=p+r*(i?m:j-1);b.l(d,A);b.m(d,z);for(var f=0;f<s;f++){var C=b.fe();b.Ye(C,f+1);var k=b.ee(g,"numbertemplate",C,e);b.u(k,"absolute");var v=f%(m+1);b.O(k,!i?n*v:f%j*n);b.L(k,i?r*v:c.floor(f/(m+1))*
r);b.I(d,k);B[f]=k;a.oc&1&&b.c(k,"click",b.R(h,t,f));a.oc&2&&b.c(k,"mouseover",b.Wb(b.R(h,t,f),k));y[f]=b.Vb(k)}u=e}};f.Kb=a=b.G({Xc:10,Vc:10,Uc:1,oc:1},C);g=b.F(d,"prototype");q=b.l(g);p=b.m(g);b.Sb(g,d);o=a.Tc||1;j=a.nb||1;w=a.Xc;x=a.Vc;i=a.Uc-1;a.kc==k&&b.A(d,"noscale",e);a.Bb&&b.A(d,"autocenter",a.Bb)},s=function(a,g,i){var c=this;m.call(c);var r,d,f,j;b.l(a);b.m(a);var p,o;function l(a){c.k(n.tc,a,e)}function t(c){b.C(a,c);b.C(g,c)}function s(){p.Fb(i.qb||d>0);o.Fb(i.qb||d<r-i.z)}c.pc=function(b,
a,c){if(c)d=a;else{d=b;s()}};c.lc=t;var q;c.rc=function(c){r=c;d=0;if(!q){b.c(a,"click",b.R(h,l,-j));b.c(g,"click",b.R(h,l,j));p=b.Vb(a);o=b.Vb(g);q=e}};c.Kb=f=b.G({Tc:1},i);j=f.Tc;if(f.kc==k){b.A(a,"noscale",e);b.A(g,"noscale",e)}if(f.Bb){b.A(a,"autocenter",f.Bb);b.A(g,"autocenter",f.Bb)}};function p(e,d,c){var a=this;l.call(a,0,c);a.qd=b.Mc;a.nd=0;a.od=c}jssor_1_slider_init=function(){var g=[{bc:1200,J:2}],h={yc:e,Ke:{N:r,Ab:g,Sd:1},Ee:{N:s},Fe:{N:q}},d=new j("jssor_1",h);function a(){var b=d.mb.parentNode.clientWidth;
if(b){b=c.min(b,600);d.Je(b)}else f.setTimeout(a,30)}a();b.c(f,"load",a);b.c(f,"resize",a);b.c(f,"orientationchange",a)}})(window,document,Math,null,true,false);
