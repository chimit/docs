"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[4354],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86116:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(83117),l=n(80102),r=(n(67294),n(3905)),i=["components"],o={sidebar_position:1},u="Installation",s={unversionedId:"configuration/installation",id:"configuration/installation",title:"Installation",description:"Composer",source:"@site/docs/configuration/installation.md",sourceDirName:"configuration",slug:"/configuration/installation",permalink:"/docs/configuration/installation",editUrl:"https://github.com/nutgram/docs/tree/master/docs/configuration/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Cache",permalink:"/docs/configuration/cache"}},p={},m=[{value:"Composer",id:"composer",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>api_url</code>",id:"api_url",level:3},{value:"<code>is_local</code>",id:"is_local",level:3},{value:"<code>local_path_transformer</code>",id:"local_path_transformer",level:3},{value:"<code>test_env</code>",id:"test_env",level:3},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>cache</code>",id:"cache",level:3},{value:"<code>client</code>",id:"client",level:3},{value:"<code>polling</code>",id:"polling",level:3},{value:"<code>split_long_messages</code>",id:"split_long_messages",level:3}],c={toc:m};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"composer"},"Composer"),(0,r.kt)("p",null,"You can install the package as usual via Composer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require nutgram/nutgram\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The framework can work out-of-the-box without much configuration, the only mandatory parameter is (obviously) the\nTelegram API token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram('you telegram token here');\n")),(0,r.kt)("p",null,"In addition, it's possible to specify a list of options as second argument, like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$config = [\n    'timeout' => 10, // default in seconds, when contacting the Telegram API\n];\n\n$bot = new Nutgram('you telegram token here', $config);\n")),(0,r.kt)("p",null,"Here a list of all the options you can specify:"),(0,r.kt)("h3",{id:"api_url"},(0,r.kt)("inlineCode",{parentName:"h3"},"api_url")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type:")," string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"'https://api.telegram.org'")),(0,r.kt)("li",{parentName:"ul"},"Useful if you need to change to a local API server.")),(0,r.kt)("h3",{id:"is_local"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_local")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type:")," boolean"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Enable the local mode when used along a self-hosted Telegram Bot API server.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"Nutgram will copy the file from your Telegram Bot API server instead downloading it."))),(0,r.kt)("h3",{id:"local_path_transformer"},(0,r.kt)("inlineCode",{parentName:"h3"},"local_path_transformer")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type:")," callable(string $path): string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Useful if you need to remap a relative file path when used along ",(0,r.kt)("inlineCode",{parentName:"li"},"is_local")," config.")),(0,r.kt)("h3",{id:"test_env"},(0,r.kt)("inlineCode",{parentName:"h3"},"test_env")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type:")," boolean"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Enable test environments useful when working with ",(0,r.kt)("a",{parentName:"li",href:"https://core.telegram.org/bots/webapps#testing-web-apps"},"Web Apps"),".")),(0,r.kt)("h3",{id:"timeout"},(0,r.kt)("inlineCode",{parentName:"h3"},"timeout")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type:")," integer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"10")),(0,r.kt)("li",{parentName:"ul"},"In seconds, define the timeout when sending requests to the Telegram API.")),(0,r.kt)("h3",{id:"cache"},(0,r.kt)("inlineCode",{parentName:"h3"},"cache")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type:")," string or instance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayCache")),(0,r.kt)("li",{parentName:"ul"},"The object used to store conversation and data, must implements the PSR-16 ",(0,r.kt)("inlineCode",{parentName:"li"},"CacheInterface"),".")),(0,r.kt)("h3",{id:"client"},(0,r.kt)("inlineCode",{parentName:"h3"},"client")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type:")," array"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"[]")),(0,r.kt)("li",{parentName:"ul"},"An array of options for the underlying ",(0,r.kt)("a",{parentName:"li",href:"https://docs.guzzlephp.org/en/stable/quickstart.html"},"Guzzle HTTP client"),".\nCheckout the Guzzle documentation for further informations.")),(0,r.kt)("h3",{id:"polling"},(0,r.kt)("inlineCode",{parentName:"h3"},"polling")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type:")," array"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"['timeout' => 10, 'limit' => 100]")),(0,r.kt)("li",{parentName:"ul"},"Contains all the options that used when requesting updates to Telegram via the ",(0,r.kt)("inlineCode",{parentName:"li"},"getUpdates"),", it's possible to specify\nalso the field ",(0,r.kt)("inlineCode",{parentName:"li"},"allowed_updates")," if you want.")),(0,r.kt)("h3",{id:"split_long_messages"},(0,r.kt)("inlineCode",{parentName:"h3"},"split_long_messages")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type:")," boolean"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Split long text message to multiple messages.",(0,r.kt)("br",null),"\nThis is useful when you want to send a message longer than the maximum length allowed by Telegram.",(0,r.kt)("br",null),"\nAvailable only with the ",(0,r.kt)("inlineCode",{parentName:"li"},"sendMessage")," method. (It will returns an array of Message)",(0,r.kt)("br",null),"\nOptional ",(0,r.kt)("inlineCode",{parentName:"li"},"reply_markup")," parameter will be sent on last message.")))}d.isMDXComponent=!0}}]);