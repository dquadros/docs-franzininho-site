(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{141:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return s})),n.d(i,"metadata",(function(){return c})),n.d(i,"toc",(function(){return l})),n.d(i,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(165)),t=["components"],s={id:"franzininho-wifi",title:"Placa Franzininho WiFi",slug:"/franzininho-wifi/franzininho-wifi",description:"Conhe\xe7a todos os recursos da placa brasileira Franzininho WiFi. Vem ESP32-S2 e pode ser usada de iniciantes a desenvolvedores experientes."},c={unversionedId:"FranzininhoWifi/franzininho-wifi",id:"FranzininhoWifi/franzininho-wifi",isDocsHomePage:!1,title:"Placa Franzininho WiFi",description:"Conhe\xe7a todos os recursos da placa brasileira Franzininho WiFi. Vem ESP32-S2 e pode ser usada de iniciantes a desenvolvedores experientes.",source:"@site/docs/FranzininhoWifi/franzininho-wifi.md",slug:"/franzininho-wifi/franzininho-wifi",permalink:"/docs/franzininho-wifi/franzininho-wifi",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/franzininho-wifi.md",version:"current",sidebar:"docs",previous:{title:"Franzininho DIY no PICSimLab",permalink:"/docs/franzininho-diy/picsimlab/primeiros-passos"},next:{title:"Placa Franzininho WiFi dev Edition",permalink:"/docs/franzininho-wifi/franzininho-wifi-dev-edition"}},l=[{value:"Resumo de recursos da placa Franzininho WiFi:",id:"resumo-de-recursos-da-placa-franzininho-wifi",children:[]},{value:"Pinout da Franzininho WiFi",id:"pinout-da-franzininho-wifi",children:[]},{value:"Licen\xe7a",id:"licen\xe7a",children:[]},{value:"Simula\xe7\xe3o da Franzininho WiFi no Wokwi",id:"simula\xe7\xe3o-da-franzininho-wifi-no-wokwi",children:[]},{value:"Componente para o Fritzing",id:"componente-para-o-fritzing",children:[]}],d={toc:l};function p(e){var i=e.components,s=Object(o.a)(e,t);return Object(r.b)("wrapper",Object(a.a)({},d,s,{components:i,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A Franzininho WIFI \xe9 uma placa de desenvolvimento de hardware de c\xf3digo aberto, baseada no ESP32-S2 e criada no Brasil. A sua finalidade principal \xe9 tornar o desenvolvimento de projetos eletr\xf4nicos mais acess\xedvel a makers, entusiastas e desenvolvedores brasileiros."),Object(r.b)("p",null,"A placa pode ser programada de v\xe1rias maneiras, adequando-se tanto a iniciantes quanto a desenvolvedores experientes."),Object(r.b)("p",null,"Neste texto, apresentaremos os recursos dispon\xedveis, as formas de programa\xe7\xe3o e informa\xe7\xf5es relevantes para aqueles que est\xe3o iniciando o uso da Franzininho WiFi ou t\xeam interesse em conhec\xea-la."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://sacola.pagseguro.uol.com.br/e9bdf81f-339f-4b36-951c-88c69240e0e7"},"Compre sua Franzininho WiFi (com frete gratis) clicando neste link")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Placa Franzininho WiFi",src:n(403).default})),Object(r.b)("h2",{id:"resumo-de-recursos-da-placa-franzininho-wifi"},"Resumo de recursos da placa Franzininho WiFi:"),Object(r.b)("p",null,"A Franzininho WiFi possui os seguintes recursos:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"M\xf3dulo ESP32-S2",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Microcontrolador Xtensa\xae single-core32-bit LX7 operando em at\xe9 240 MHz"),Object(r.b)("li",{parentName:"ul"},"Mem\xf3rias: 128 KB de ROM, 320 KB de SRAM, 16 KB SRAM no RTC, 4MB de Flash"),Object(r.b)("li",{parentName:"ul"},"WiFi 802.11 b/g/n"),Object(r.b)("li",{parentName:"ul"},"Interfaces: GPIO, SPI, LCD, UART, I2C, I2S, Camera, IR,contador de pulsos, LED PWM, TWAI(CAN), USB 1.1 OTG, ADC, DAC, touch, sensor de temperatura interno."))),Object(r.b)("li",{parentName:"ul"},"Pinout:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"40 pinos divididos em 2\xd720 headers de 2,54 mm"),Object(r.b)("li",{parentName:"ul"},"35 GPIOs"),Object(r.b)("li",{parentName:"ul"},"Compat\xedvel com protoboard"))),Object(r.b)("li",{parentName:"ul"},"2 LEDS de uso geral"),Object(r.b)("li",{parentName:"ul"},"Bot\xf5es: 1xReset, 1 x Boot"),Object(r.b)("li",{parentName:"ul"},"USB: conector micro USB \u2013 OTG 1.1"),Object(r.b)("li",{parentName:"ul"},"Alimenta\xe7\xe3o:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"5V via conector USB"),Object(r.b)("li",{parentName:"ul"},"5V e GND via pinos"),Object(r.b)("li",{parentName:"ul"},"3V3 e GND via pinos"))),Object(r.b)("li",{parentName:"ul"},"Formas de programa\xe7\xe3o:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ESP-IDF,"),Object(r.b)("li",{parentName:"ul"},"Arduino,"),Object(r.b)("li",{parentName:"ul"},"CircuitPyhton,"),Object(r.b)("li",{parentName:"ul"},"MicroPython,"),Object(r.b)("li",{parentName:"ul"},"Zephyr,"),Object(r.b)("li",{parentName:"ul"},"NuttX")))),Object(r.b)("h2",{id:"pinout-da-franzininho-wifi"},"Pinout da Franzininho WiFi"),Object(r.b)("p",null,"A imagem a seguir exibe o pinout da Franzininho WiFi com mapeamento dos pinos e recursos:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Franzininho/imagens-franzininho/main/franzininho-wifi/pinagem-franzininho-wifi.png",alt:"Nova Franzininho WiFI: pinout"})),Object(r.b)("h2",{id:"licen\xe7a"},"Licen\xe7a"),Object(r.b)("p",null,"A placa Franzininho WiFi \xe9 um projeto de hardware de c\xf3digo aberto, licenciado sob a ",Object(r.b)("strong",{parentName:"p"},"CERN Open Hardware License"),". Essa licen\xe7a \xe9 utilizada em projetos de hardware que s\xe3o desenvolvidos e disponibilizados como c\xf3digo aberto, permitindo que outras pessoas possam reproduzir e criar deriva\xe7\xf5es do projeto. Para garantir a conformidade com a licen\xe7a, \xe9 importante que os desenvolvedores consultem e sigam os requisitos especificados na mesma antes de reproduzir ou criar deriva\xe7\xf5es do projeto. Dessa forma, podem garantir que est\xe3o seguindo as diretrizes corretas e respeitando a licen\xe7a escolhida para o projeto."),Object(r.b)("p",null,"Voc\xea encontra o projeto do hardware no Github organiza\xe7\xe3o Franzininho: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Franzininho/Franzininho-WiFi"},"https://github.com/Franzininho/Franzininho-WiFi")),Object(r.b)("h2",{id:"simula\xe7\xe3o-da-franzininho-wifi-no-wokwi"},"Simula\xe7\xe3o da Franzininho WiFi no Wokwi"),Object(r.b)("p",null,"O Wokwi \xe9 uma ferramenta de simula\xe7\xe3o online e gratuita que permite que desenvolvedores de projetos eletr\xf4nicos testem suas cria\xe7\xf5es em um ambiente leve e intuitivo. Com suporte a diversas placas de desenvolvimento, incluindo o Arduino Uno, ESP32, RP2040, e muitas outras, o simulador \xe9 um diferencial na \xe1rea. A ferramenta oferece recursos exclusivos, como simula\xe7\xe3o de Wi-Fi, Analisador L\xf3gico Virtual, Depura\xe7\xe3o avan\xe7ada com GDB, simula\xe7\xe3o de cart\xe3o SD, API dos chips (cria\xe7\xe3o de chips personalizados) e integra\xe7\xe3o com o Visual Studio Code."),Object(r.b)("p",null,"A placa Franzininho WiFi tamb\xe9m \xe9 suportada no simulador. Para come\xe7ar a criar projetos, acesse a lista de placas suportadas pelo Wokwi e comece a testar suas cria\xe7\xf5es em um ambiente seguro e de f\xe1cil acesso. Al\xe9m disso, compartilhar seus projetos com a comunidade pode ajudar outros desenvolvedores a iniciarem no universo da eletr\xf4nica, permitindo que cres\xe7am juntos e desenvolvam solu\xe7\xf5es cada vez mais inovadoras."),Object(r.b)("p",null,"A figura a seguir exibe a Franzininho WiFi no ambiente de simula\xe7\xe3o do Wokwi:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Franzininho WiFi",src:n(404).default})),Object(r.b)("p",null,"Entenda melhor sobre a ferramenta, acessando os links abaixo:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.wokwi.com/pt-BR/"},"Documenta\xe7\xe3o do Wokwi")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://wokwi.com/projects/new/franzininho-wifi"},"Simula\xe7\xe3o Franzininho WiFi")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.franzininho.com.br/docs/franzininho-wifi/wokwi/primeiros-passos"},"Documenta\xe7\xe3o da Franzininho Wokwi")),Object(r.b)("h2",{id:"componente-para-o-fritzing"},"Componente para o Fritzing"),Object(r.b)("p",null,"O ",Object(r.b)("a",{parentName:"p",href:"https://fritzing.org/"},"Fritzing")," \xe9 uma ferramenta open-source que permite a intera\xe7\xe3o com o hardware, possibilitando a montagem de circuitos eletr\xf4nicos, cria\xe7\xe3o de placas de circuito impresso e inclus\xe3o do c\xf3digo-fonte do projeto proposto. Com sua riqueza de detalhes e ampla variedade de componentes, o Fritzing \xe9 uma op\xe7\xe3o ideal para documenta\xe7\xe3o de projetos. Para facilitar a documenta\xe7\xe3o de projetos, criamos um ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Franzininho/franzininho-fritzing/tree/master/Franzininho-WiFi"},"componente para ser adicionado")," ao Fritzing:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Franzininho WiFi",src:n(405).default})))}p.isMDXComponent=!0},165:function(e,i,n){"use strict";n.d(i,"a",(function(){return p})),n.d(i,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function t(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?t(Object(n),!0).forEach((function(i){r(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function c(e,i){if(null==e)return{};var n,a,o=function(e,i){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],i.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var i=o.a.useContext(l),n=i;return e&&(n="function"==typeof e?e(i):s(s({},i),e)),n},p=function(e){var i=d(e.components);return o.a.createElement(l.Provider,{value:i},e.children)},u={inlineCode:"code",wrapper:function(e){var i=e.children;return o.a.createElement(o.a.Fragment,{},i)}},m=o.a.forwardRef((function(e,i){var n=e.components,a=e.mdxType,r=e.originalType,t=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,b=p["".concat(t,".").concat(m)]||p[m]||u[m]||r;return n?o.a.createElement(b,s(s({ref:i},l),{},{components:n})):o.a.createElement(b,s({ref:i},l))}));function b(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var r=n.length,t=new Array(r);t[0]=m;var s={};for(var c in i)hasOwnProperty.call(i,c)&&(s[c]=i[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,t[1]=s;for(var l=2;l<r;l++)t[l]=n[l];return o.a.createElement.apply(null,t)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},403:function(e,i,n){"use strict";n.r(i),i.default=n.p+"assets/images/franzininho-wifi-new-726cd0edc1ae88b9f789475b6d5797de.jpg"},404:function(e,i,n){"use strict";n.r(i),i.default=n.p+"assets/images/image-8.png-b399947d2d8d238d7e1e8b03130218a8.webp"},405:function(e,i,n){"use strict";n.r(i),i.default=n.p+"assets/images/image-9.png-b4e173c5e8b330e9ded7940fa1c12717.webp"}}]);