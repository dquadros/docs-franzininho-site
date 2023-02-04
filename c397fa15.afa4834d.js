(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{135:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return c})),o.d(a,"metadata",(function(){return s})),o.d(a,"toc",(function(){return p})),o.d(a,"default",(function(){return l}));var t=o(3),r=o(7),i=(o(0),o(163)),n=["components"],c={id:"circuitpython-primeiros-passos",title:"Primeiros Passos",slug:"/franzininho-wifi/exemplos-circuitpython/primeiros-passos",description:"Aprenda dar os primeiros passo no uso do CircuitPython na Franzininho WiFi",author:"Diana Santos"},s={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-primeiros-passos",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-primeiros-passos",isDocsHomePage:!1,title:"Primeiros Passos",description:"Aprenda dar os primeiros passo no uso do CircuitPython na Franzininho WiFi",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/circuitpython.md",slug:"/franzininho-wifi/exemplos-circuitpython/primeiros-passos",permalink:"/docs/franzininho-wifi/exemplos-circuitpython/primeiros-passos",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/circuitpython.md",version:"current",sidebar:"docs",previous:{title:"Primeiros passos com a AWS",permalink:"/docs/franzininho-wifi/exemplos-espidf/aws"},next:{title:"Instalando as ferramentas",permalink:"/docs/franzininho-wifi/exemplos-circuitpython/ferramentas"}},p=[{value:"O que \xe9 CircuitPython?",id:"o-que-\xe9-circuitpython",children:[]},{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",children:[]},{value:"Grava\xe7\xe3o do CircuitPython na Franzininho WiFi",id:"grava\xe7\xe3o-do-circuitpython-na-franzininho-wifi",children:[]}],u={toc:p};function l(e){var a=e.components,o=Object(r.a)(e,n);return Object(i.b)("wrapper",Object(t.a)({},u,o,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Este documento pretende ajud\xe1-lo a configurar a placa Franzininho WiFi para ser programada usando o CircuitPython."),Object(i.b)("p",null,"O CircuitPython \xe9 um fork do projeto MicroPython, realizado pela empresa Adafruit. A Adafruit vem desenvolvendo diversas bibliotecas e recursos para programa\xe7\xe3o de microcontroladores com Python. Saiba mais sobre o projeto em: ",Object(i.b)("a",{parentName:"p",href:"https://circuitpython.org/"},"CircuitPython"),"."),Object(i.b)("p",null,"A seguir apresentamos os passos para grava\xe7\xe3o do CircuitPython na Franzininho WiFi e preparar o ambiente."),Object(i.b)("h2",{id:"o-que-\xe9-circuitpython"},"O que \xe9 CircuitPython?"),Object(i.b)("p",null,"CircuitPython \xe9 uma linguagem de programa\xe7\xe3o projetada para simplificar a experimenta\xe7\xe3o e o aprendizado de programa\xe7\xe3o em placas com microcontroladores de baixo custo. Isso torna os primeiros passos mais f\xe1ceis do que nunca, sem a necessidade de downloads iniciais no computador de trabalho. Assim, ap\xf3s configurar a placa, abra qualquer editor de texto e comece a editar o c\xf3digo."),Object(i.b)("p",null,"O CircuitPython traz o Python para dentro dos microcontroladores. Voc\xea pode saber mais sobre o projeto CircuitPython aqui: ",Object(i.b)("a",{parentName:"p",href:"http://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython"},"learn.adafruit.com/circuitpython")),Object(i.b)("p",null,"A placa Franzininho WiFi foi ",Object(i.b)("a",{parentName:"p",href:"https://circuitpython.org/downloads?q=franzininho"},"adicionada ao CircuitPython")," e todas as releases do CircuitPyhton ser\xe3o compilados para ela. Esse foi um passo muito importante para o projeto e possibilitar\xe1 o desenvolvimento de aplica\xe7\xf5es com o ESP32-S2 usando a linguagem Python."),Object(i.b)("h2",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),Object(i.b)("p",null,"Antes de come\xe7ar a divers\xe3o de programar a Franzininho WIFI com o CircuitPython, precisamos realizar alguns passos para configura\xe7\xe3o. Nesta etapa gravaremos o firmware do CircuitPython na Franzininho WiFi e prepararemos o ambiente para voc\xea usar sua placa."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Se sua placa j\xe1 est\xe1 com o CircuitPython, voc\xea n\xe3o precisa fazer essa etapa. Para verificar se sua placa est\xe1 com CircuitPython plugue-a no computador e veja se \xe9 criado um dispositivo de armazenamento chamado CIRCUITPY. Caso contr\xe1rio, fa\xe7a o procedimento abaixo."))),Object(i.b)("p",null,"Nesse momento voc\xea precisar\xe1 apenas de um computador com o sistema operacional que voc\xea est\xe1 acostumado a usar e a placa Franzininho WiFi."),Object(i.b)("p",null,"Bora! Colocar a m\xe3o na massa?"),Object(i.b)("h2",{id:"grava\xe7\xe3o-do-circuitpython-na-franzininho-wifi"},"Grava\xe7\xe3o do CircuitPython na Franzininho WiFi"),Object(i.b)("iframe",{width:"809",height:"455",src:"https://www.youtube.com/embed/wU7wvfxmcS0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("p",null,"Ferramenta de grava\xe7\xe3o: ",Object(i.b)("a",{parentName:"p",href:"https://franzininho.github.io/webdfu-franzininho-wifi/dfu-util/"},"https://franzininho.github.io/webdfu-franzininho-wifi/dfu-util/")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Autor"),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"th",href:"https://github.com/FBSeletronica"},"F\xe1bio Souza")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Data:"),Object(i.b)("td",{parentName:"tr",align:null},"16/09/2021")))))}l.isMDXComponent=!0},163:function(e,a,o){"use strict";o.d(a,"a",(function(){return l})),o.d(a,"b",(function(){return b}));var t=o(0),r=o.n(t);function i(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){i(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=r.a.createContext({}),u=function(e){var a=r.a.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):c(c({},a),e)),o},l=function(e){var a=u(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var o=e.components,t=e.mdxType,i=e.originalType,n=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(o),d=t,b=l["".concat(n,".").concat(d)]||l[d]||m[d]||i;return o?r.a.createElement(b,c(c({ref:a},p),{},{components:o})):r.a.createElement(b,c({ref:a},p))}));function b(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=o.length,n=new Array(i);n[0]=d;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,n[1]=c;for(var p=2;p<i;p++)n[p]=o[p];return r.a.createElement.apply(null,n)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);