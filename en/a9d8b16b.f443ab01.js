(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),a=(t(0),t(131)),o={id:"0x04_timer0",title:"04 - Timer 0",slug:"/franzininho-diy/exemplos-avr-libc/0x04_timer0",description:"Vamos aprender usar o timer 0 como temporizador",authors:"F\xe1bio Souza",date:"24/04/2021",some_url:"https://github.com/FBSeletronica"},c={unversionedId:"FranzininhoDIY/exemplos-avr-libc/0x04_timer0",id:"FranzininhoDIY/exemplos-avr-libc/0x04_timer0",isDocsHomePage:!1,title:"04 - Timer 0",description:"Vamos aprender usar o timer 0 como temporizador",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/0x04_timer0.md",slug:"/franzininho-diy/exemplos-avr-libc/0x04_timer0",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/exemplos-avr-libc/0x04_timer0",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/master/docs/FranzininhoDIY/exemplos-avr-libc/0x04_timer0.md",version:"current",sidebar:"docs",previous:{title:"03 - Entrada Digital",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/exemplos-avr-libc/0x03_entrada_digital"},next:{title:"05 - Timer 0 - Interrup\xe7\xe3o",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/exemplos-avr-libc/0x05_timer0_int"}},s=[],p={toc:s};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"TBD"))))}l.isMDXComponent=!0},131:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,b=m["".concat(o,".").concat(u)]||m[u]||d[u]||a;return t?i.a.createElement(b,c(c({ref:n},p),{},{components:t})):i.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);