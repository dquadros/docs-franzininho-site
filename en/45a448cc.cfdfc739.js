(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{174:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return b}));var i=n(0),r=n.n(i);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,i,r=function(e,a){if(null==e)return{};var n,i,r={},t=Object.keys(e);for(i=0;i<t.length;i++)n=t[i],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)n=t[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),c=function(e){var a=r.a.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=c(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var n=e.components,i=e.mdxType,t=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||t;return n?r.a.createElement(b,l(l({ref:a},d),{},{components:n})):r.a.createElement(b,l({ref:a},d))}));function b(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var t=n.length,o=new Array(t);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<t;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},308:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/circuito-43a970745d9aaeec4fad97f720fd8811.png"},309:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/dht-lib-09d2b21ecd6956960598384892b76762.png"},310:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/valores-lidos-3a3d40d3f6f2a3488305949443f884a9.png"},87:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return s})),n.d(a,"toc",(function(){return d})),n.d(a,"default",(function(){return u}));var i=n(3),r=n(7),t=(n(0),n(174)),o=["components"],l={id:"arduino-dht11",title:"Leitura DHT11",slug:"/franzininho-wifi/exemplos-arduino/dht11",description:"Nesse exemplo vamos fazer a leitura do sensor de temperatura e umidade, DHT11, e imprimir os valores na serial;",author:"Fabio Souza"},s={unversionedId:"FranzininhoWifi/exemplos-arduino/arduino-dht11",id:"FranzininhoWifi/exemplos-arduino/arduino-dht11",isDocsHomePage:!1,title:"Leitura DHT11",description:"Nesse exemplo vamos fazer a leitura do sensor de temperatura e umidade, DHT11, e imprimir os valores na serial;",source:"@site/docs/FranzininhoWifi/exemplos-arduino/dht11.md",slug:"/franzininho-wifi/exemplos-arduino/dht11",permalink:"/en/docs/franzininho-wifi/exemplos-arduino/dht11",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-arduino/dht11.md",version:"current",sidebar:"docs",previous:{title:"Neopixel RGB LED Onboard",permalink:"/en/docs/franzininho-wifi/exemplos-arduino/neopixel-onboard"},next:{title:"Placa Franzininho WiFi dev Edition",permalink:"/en/docs/franzininho-wifi/franzininho-wifi-dev-edition"}},d=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"C\xf3digo",id:"c\xf3digo",children:[]},{value:"An\xe1lise do c\xf3digo",id:"an\xe1lise-do-c\xf3digo",children:[]},{value:"Resultado",id:"resultado",children:[]},{value:"Conclus\xe3o",id:"conclus\xe3o",children:[]}],c={toc:d};function u(e){var a=e.components,l=Object(r.a)(e,o);return Object(t.b)("wrapper",Object(i.a)({},c,l,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Nesse exemplo vamos fazer a leitura do sensor de temperatura e umidade, DHT11, e imprimir os valores no terminal serial."),Object(t.b)("h2",{id:"materiais-necess\xe1rios"},"Materiais necess\xe1rios"),Object(t.b)("p",null,"Identifique os seguintes materiais necess\xe1rios para este projeto:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"1 Franzininho WiFi."),Object(t.b)("li",{parentName:"ul"},"1 Sensor DHT11"),Object(t.b)("li",{parentName:"ul"},"1 Resistor de 10k"),Object(t.b)("li",{parentName:"ul"},"1 Protoboard."),Object(t.b)("li",{parentName:"ul"},"Cabos de liga\xe7\xe3o.")),Object(t.b)("h2",{id:"circuito"},"Circuito"),Object(t.b)("p",null,"Realize a montagem do circuito da maneira indicada pela figura a seguir:"),Object(t.b)("p",null,Object(t.b)("img",{alt:"Circuito DHT11",src:n(308).default})),Object(t.b)("h2",{id:"c\xf3digo"},"C\xf3digo"),Object(t.b)("p",null,"Para usar o sensor DHT com a Franzininho WiFi no Arduino, precisamos instalar uma bibloteca. Vamos usar a biblioteca mantida pela Adafruit."),Object(t.b)("p",null,"Vamos instalar a biblioteca usando o gerenciador de biblitecas do Arduino. Acesso Ferramentas -> Gerenciar Bibliotecas. Procure por DHT e instale a bibloteca DHT sensor library da Adafruit:"),Object(t.b)("p",null,Object(t.b)("img",{alt:"Instala\xe7\xe3o da Biblioteca",src:n(309).default})),Object(t.b)("p",null,"Agora vamos fazer a leitura do sensor e imprimir os valores de temperatura e umidade no terminal serial."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-cpp"},'/*************************************************************************************\n * Exemplo para leitura de sensor DHT11\n * \n * \n * Bibliotecas necessarias\n * DHT da Adafruit - Instalar pelo gerenciador de bibliotecas\n *  \n *  por: F\xe1bio Souza\n *************************************************************************************/\n\n#include "DHT.h"\n \n#define DHTPIN 2 \n#define DHTTYPE DHT11\n \nDHT dht(DHTPIN, DHTTYPE);\n\n\n/*********************************************************************************\n *  Fun\xe7\xe3o Setup\n *  Configura\xe7\xf5es iniciais da aplica\xe7\xe3o\n *********************************************************************************/\nvoid setup() \n{\nSerial.begin(19200);\nSerial.println("Teste de leitura do sensor DHT11");\ndht.begin();\n}\n\n/*********************************************************************************\n *  Fun\xe7\xe3o loop\n *********************************************************************************/\nvoid loop() \n{\n\n  float umidade = dht.readHumidity();\n  float temperatura = dht.readTemperature();\n\n  delay(500);\n  \n\n  // Se as vari\xe1veis temperatura e umidade n\xe3o forem valores v\xe1lidos, acusar\xe1 falha de leitura.\n  if (isnan(temperatura) || isnan(umidade)) \n  {\n  Serial.println("Falha na leitura do dht11...");\n  } \n  else //se n\xe3o, exibir\xe1 os valores lidos \n  {\n    //Imprime os dados no monitor serial\n    Serial.print("Umidade: ");\n    Serial.print(umidade);\n    Serial.print(" %\\t"); //tab\n    Serial.print("Temperatura: ");\n    Serial.print(temperatura);\n    Serial.println(" \xb0C");\n  }\n}\n')),Object(t.b)("h2",{id:"an\xe1lise-do-c\xf3digo"},"An\xe1lise do c\xf3digo"),Object(t.b)("p",null,"Na primeira parte do c\xf3digo adicionamo as bibliotecas a serem usadas na aplica\xe7\xe3o e a instancia do DHT11:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-cpp"},"#define DHTPIN 2 \n#define DHTTYPE DHT11\n \nDHT dht(DHTPIN, DHTTYPE);\n")),Object(t.b)("p",null,"Na fun\xe7\xe3o ",Object(t.b)("inlineCode",{parentName:"p"},"setup()")," fizemos a inicializa\xe7\xe3o do DHT11 e da comunica\xe7\xe3o Serial:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-cpp"},'void setup() \n{\nSerial.begin(19200);\nSerial.println("Teste de leitura do sensor DHT11");\ndht.begin();\n}\n')),Object(t.b)("p",null,"No ",Object(t.b)("inlineCode",{parentName:"p"},"loop()")," infinito fazemos a leitura da temperatura e umidade a cada 500 ms e imprimimos na serial. Caso ocorra falha na leitura do DHT11 \xe9 exibido uma mensagem de erro:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-cpp"},'void loop() \n{\n\n  float umidade = dht.readHumidity();\n  float temperatura = dht.readTemperature();\n\n  delay(500);\n  \n\n  // Se as vari\xe1veis temperatura e umidade n\xe3o forem valores v\xe1lidos, acusar\xe1 falha de leitura.\n  if (isnan(temperatura) || isnan(umidade)) \n  {\n  Serial.println("Falha na leitura do dht11...");\n  } \n  else //se n\xe3o, exibir\xe1 os valores lidos \n  {\n    //Imprime os dados no monitor serial\n    Serial.print("Umidade: ");\n    Serial.print(umidade);\n    Serial.print(" %\\t"); //tab\n    Serial.print("Temperatura: ");\n    Serial.print(temperatura);\n    Serial.println(" \xb0C");\n  }\n}\n')),Object(t.b)("h2",{id:"resultado"},"Resultado"),Object(t.b)("p",null,"A figura a seguir exibe os valores lidos no monitor serial:"),Object(t.b)("p",null,Object(t.b)("img",{alt:"Terminal Serial",src:n(310).default})),Object(t.b)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),Object(t.b)("p",null,"O sensor DHT11( e similares) possibilita que fa\xe7amos leitura de temperatura e umidade de uma forma simples e eficiente. Atrav\xe9s de 1 fio de comunica\xe7\xe3o conseguimos fazer a leitura das duas grandezas. Como a comunica\xe7\xe3o \xe9 um pouco complexa, o  uso de uma biblioteca facilita a comunica\xe7\xe3o com o dispositivo. A biblioteca mantida pela Adafruit \xe9 muito eficiente e est\xe1vel."),Object(t.b)("div",{className:"admonition admonition-info alert alert--info"},Object(t.b)("div",{parentName:"div",className:"admonition-heading"},Object(t.b)("h5",{parentName:"div"},Object(t.b)("span",{parentName:"h5",className:"admonition-icon"},Object(t.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(t.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(t.b)("div",{parentName:"div",className:"admonition-content"},Object(t.b)("p",{parentName:"div"},"Se tiver alguma d\xfavida consulte a comunidade Franzininho no ",Object(t.b)("a",{parentName:"p",href:"https://discord.gg/H5kENmWGaz"},"Discord")))),Object(t.b)("table",null,Object(t.b)("thead",{parentName:"table"},Object(t.b)("tr",{parentName:"thead"},Object(t.b)("th",{parentName:"tr",align:null},"Autor"),Object(t.b)("th",{parentName:"tr",align:null},"F\xe1bio Souza"))),Object(t.b)("tbody",{parentName:"table"},Object(t.b)("tr",{parentName:"tbody"},Object(t.b)("td",{parentName:"tr",align:null},"Data:"),Object(t.b)("td",{parentName:"tr",align:null},"23/10/2021")))))}u.isMDXComponent=!0}}]);