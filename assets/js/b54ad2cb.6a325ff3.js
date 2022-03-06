"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[662],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=l,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27204:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=["components"],i={sort:6},d="Handlers",p={unversionedId:"usage/handlers",id:"usage/handlers",title:"Handlers",description:"Concept",source:"@site/docs/usage/handlers.md",sourceDirName:"usage",slug:"/usage/handlers",permalink:"/docs/usage/handlers",editUrl:"https://github.com/nutgram/docs/tree/master/docs/usage/handlers.md",tags:[],version:"current",frontMatter:{sort:6},sidebar:"tutorialSidebar",previous:{title:"Getting Updates",permalink:"/docs/usage/getting_updates"},next:{title:"Inline Menu",permalink:"/docs/usage/inline_menu"}},m={},s=[{value:"Concept",id:"concept",level:2},{value:"Available Handlers",id:"available-handlers",level:2},{value:"Specific &amp; Special Handlers",id:"specific--special-handlers",level:2},{value:"<code>onCommand</code>",id:"oncommand",level:3},{value:"Automatically register bot commands",id:"automatically-register-bot-commands",level:4},{value:"<code>onText</code>",id:"ontext",level:3},{value:"<code>onMessageType</code>",id:"onmessagetype",level:3},{value:"<code>onCallbackQueryData</code>",id:"oncallbackquerydata",level:3},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"<code>fallbackOn</code>",id:"fallbackon",level:3},{value:"<code>onException</code>",id:"onexception",level:3},{value:"<code>onApiError</code>",id:"onapierror",level:3},{value:"OOP",id:"oop",level:2},{value:"Update Helpers",id:"update-helpers",level:2},{value:"Available helpers",id:"available-helpers",level:3},{value:"Persisting data",id:"persisting-data",level:2},{value:"Available methods",id:"available-methods",level:3}],u={toc:s};function c(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"handlers"},"Handlers"),(0,r.kt)("h2",{id:"concept"},"Concept"),(0,r.kt)("p",null,"The framework provides to you a nice API event-like to handling incoming updates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onMessage(function (Nutgram $bot) {\n    $bot->sendMessage('You sent a message!');\n});\n\n$bot->run();\n")),(0,r.kt)("p",null,"Every ",(0,r.kt)("inlineCode",{parentName:"p"},"->on*")," handler is called based on the update type defined\nin ",(0,r.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots/api#update"},"Telegram's update object"),", there are also some specific handlers, which\nmay respond based on specific patterns or types of messages."),(0,r.kt)("p",null,"As you can also see from the example above, some required parameters (like the ",(0,r.kt)("inlineCode",{parentName:"p"},"chat_id"),") can be ",(0,r.kt)("strong",{parentName:"p"},"omitted"),", while the\nbot is in the context of managing an update, so those fields ",(0,r.kt)("strong",{parentName:"p"},"are automatically extracted from the current update"),"."),(0,r.kt)("p",null,"Of course, ",(0,r.kt)("strong",{parentName:"p"},"you can override them at any time"),", simply by specifying them in the ",(0,r.kt)("inlineCode",{parentName:"p"},"$opt")," array."),(0,r.kt)("h2",{id:"available-handlers"},"Available Handlers"),(0,r.kt)("p",null,"Here a full list of all the handler that listens to specific type of updates:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Handler Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onCommand(string $command, $callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Specific")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles text messages that begin with ",(0,r.kt)("inlineCode",{parentName:"td"},"/"),".",(0,r.kt)("br",null),"Automatically parses commands like ",(0,r.kt)("inlineCode",{parentName:"td"},"cmd@botname"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onText(string $pattern, $callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Specific")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles text messages that match the given pattern (regex or parameters).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onMessageType(string $type, $callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Specific")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles messages defined by type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onCallbackQueryData(string $pattern, $callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Specific")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles callback query with a specific pattern, similar to ",(0,r.kt)("inlineCode",{parentName:"td"},"onText"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onMessage($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any incoming message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onCallbackQuery($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any incoming callback query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onEditedMessage($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any incoming edited message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onChannelPost($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any message posted in a channel where the bot is administrator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onEditedChannelPost($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any message edited in a channel where the bot is administrator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onInlineQuery($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any incoming inline query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onChosenInlineResult($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any incoming chosen inline result.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onShippingQuery($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any incoming shipping query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onPreCheckoutQuery($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any incoming pre checkout query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onPoll($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any incoming poll.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onPollAnswer($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any incoming poll answer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onMyChatMember($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any chat member when updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onChatMember($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generic")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles any chat member in other chats when updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onException($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Special")),(0,r.kt)("td",{parentName:"tr",align:null},"This handler will be called whenever the handling of an update throws an exception, if undefined the exception will not be caught.",(0,r.kt)("br",null),"Check the next paragraph for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onApiError($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Special")),(0,r.kt)("td",{parentName:"tr",align:null},"This handler will be called every time a call to Telegram's api fails, if undefined the exception will not be caught.",(0,r.kt)("br",null),"Check the next paragraph for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fallback($callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Special")),(0,r.kt)("td",{parentName:"tr",align:null},"This handler if defined will be called if no handler, specific or generic, has been found for the current update.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fallbackOn(string $type, $callable)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Special")),(0,r.kt)("td",{parentName:"tr",align:null},"This handler has the same behavior as the previous one, but allows you to put a filter on the type of updates it can handle.")))),(0,r.kt)("h2",{id:"specific--special-handlers"},"Specific & Special Handlers"),(0,r.kt)("h3",{id:"oncommand"},(0,r.kt)("inlineCode",{parentName:"h3"},"onCommand")),(0,r.kt)("p",null,"It's possible to handle to specific commands, also with named parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// Called when a message contains the command \"/start someParameter\"\n$bot->onCommand('start {parameter}', function (Nutgram $bot, $parameter) {\n    $bot->sendMessage(\"The parameter is {$parameter}\");\n});\n\n// Called on command \"/help\"\n$bot->onCommand('help', function (Nutgram $bot) {\n    $bot->sendMessage('Help me!');\n});\n\n$bot->run();\n")),(0,r.kt)("h4",{id:"automatically-register-bot-commands"},"Automatically register bot commands"),(0,r.kt)("p",null,"The framework can also automatically set the bot commands for you, if you configure the description on it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// Called on command \"/start\"\n// It's possible to set a description for each command\n// this WILL be automatically registered\n$bot->onCommand('start', function (Nutgram $bot) {\n    return $bot->sendMessage('Hello, world!');\n})->description('The start command!');\n\n// Called on command \"/secret\"\n// this WILL NOT be automatically registered\n$bot->onCommand('secret', function (Nutgram $bot) {\n    return $bot->sendMessage('Shhh');\n});\n\n// automatically calls the setMyCommands method\n$bot->registerMyCommands();\n")),(0,r.kt)("p",null,"And the result will be:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/65ofrw7.png",alt:"commands"})),(0,r.kt)("h3",{id:"ontext"},(0,r.kt)("inlineCode",{parentName:"h3"},"onText")),(0,r.kt)("p",null,"For text messages, is possible also put parameters to match a regex, or to match part of text:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV[\'TOKEN\']);\n\n// ex. called when a message contains "My name is Mario"\n$bot->onText(\'My name is {name}\', function (Nutgram $bot, $name) {\n    $bot->sendMessage("Hi {$name}");\n});\n\n// ex. called when a message contains "I want 6 pizzas"\n$bot->onText(\'I want ([0-9]+) pizzas\', function (Nutgram $bot, $n) {\n    $bot->sendMessage("You will get {$n} pizzas!");\n});\n\n$bot->onText(\'I want ([0-9]+) portions of (pizza|cake)\', function (Nutgram $bot, $amount, $dish) {\n    $bot->sendMessage("You will get {$amount} portions of {$dish}!");\n});\n\n$bot->run();\n')),(0,r.kt)("h3",{id:"onmessagetype"},(0,r.kt)("inlineCode",{parentName:"h3"},"onMessageType")),(0,r.kt)("p",null,"It's like the ",(0,r.kt)("inlineCode",{parentName:"p"},"onMessage")," handler, but you can specify to which type of message you should handle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Attributes\\MessageTypes;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// Called only when you send a photo\n$bot->onMessageType(MessageTypes::PHOTO, function (Nutgram $bot) {\n    $photos = $bot->message()->photo;\n    $bot->sendMessage('Nice pic!');\n});\n\n// Called only when you send an audio file\n$bot->onMessageType(MessageTypes::AUDIO, function (Nutgram $bot) {\n    $audio = $bot->message()->audio;\n    $bot->sendMessage('I love this song!');\n});\n\n$bot->run();\n")),(0,r.kt)("p",null,"You can see all the constants, in\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SergiX44/Nutgram/blob/master/src/Telegram/Attributes/MessageTypes.php"},"MessageTypes::class"),"."),(0,r.kt)("h3",{id:"oncallbackquerydata"},(0,r.kt)("inlineCode",{parentName:"h3"},"onCallbackQueryData")),(0,r.kt)("p",null,"It's like the ",(0,r.kt)("inlineCode",{parentName:"p"},"onText")," handler, but you can specify to which ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," contained in CallbackQuery to handle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', function (Nutgram $bot) {\n    $bot->sendMessage('Choose an option:', [\n        'reply_markup' => json_encode([\n            'inline_keyboard' => [\n                [\n                    ['text' => 'One', 'callback_data' => 'one'],\n                    ['text' => 'Two', 'callback_data' => 'two'],\n                    ['text' => 'Cancel', 'callback_data' => 'cancel'],\n                ],\n            ],\n        ])\n    ]);\n});\n\n$bot->onCallbackQueryData('one|two', function (Nutgram $bot) {\n    $bot->sendMessage('Nice!');\n});\n\n$bot->onCallbackQueryData('cancel', function (Nutgram $bot) {\n    $bot->sendMessage('Canceled!');\n});\n\n$bot->run();\n")),(0,r.kt)("p",null,"The same thing also applies for custom parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', function (Nutgram $bot) {\n    $bot->sendMessage('Choose an option:', [\n        'reply_markup' => json_encode([\n            'inline_keyboard' => [\n                [\n                    ['text' => 'One', 'callback_data' => 'number 1'],\n                    ['text' => 'Two', 'callback_data' => 'number 2'],\n                    ['text' => 'Cancel', 'callback_data' => 'cancel'],\n                ],\n            ],\n        ])\n    ]);\n});\n\n$bot->onCallbackQueryData('number {param}', function (Nutgram $bot, $param) {\n    $bot->sendMessage($param); // 1 or 2\n});\n\n$bot->onCallbackQueryData('cancel', function (Nutgram $bot) {\n    $bot->sendMessage('Canceled!');\n});\n\n$bot->run();\n")),(0,r.kt)("h3",{id:"fallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,r.kt)("p",null,"This handler, if defined, will be called every time an ",(0,r.kt)("inlineCode",{parentName:"p"},"Update")," will not match any other defined handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// But the user send something else than /start\n$bot->onCommand('start', function (Nutgram $bot) {\n    $bot->sendMessage('Started!');\n});\n\n$bot->fallback(function (Nutgram $bot) {\n    $bot->sendMessage('Sorry, I don\\'t understand.');\n});\n\n$bot->run();\n")),(0,r.kt)("h3",{id:"fallbackon"},(0,r.kt)("inlineCode",{parentName:"h3"},"fallbackOn")),(0,r.kt)("p",null,"This has the same behaviour of the ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback"),", but allow you to define handlers based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Update")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Attributes\\UpdateTypes;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// define some handlers ...\n\n// Called only for unmatched callback queries\n$bot->fallbackOn(UpdateTypes::CALLBACK_QUERY, function (Nutgram $bot) {\n    $bot->answerCallbackQuery();\n    $bot->editMessageReplyMarkup([/* ... */]);\n});\n\n// Called only for unmatched messages\n$bot->fallbackOn(UpdateTypes::MESSAGE, function (Nutgram $bot) {\n    $bot->sendMessage('Sorry, I don\\'t understand.');\n});\n\n$bot->run();\n")),(0,r.kt)("p",null,"You can see all the constants, in\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SergiX44/Nutgram/blob/master/src/Telegram/Attributes/UpdateTypes.php"},"UpdateTypes::class"),"."),(0,r.kt)("h3",{id:"onexception"},(0,r.kt)("inlineCode",{parentName:"h3"},"onException")),(0,r.kt)("p",null,"This handler, if defined, will be called if something on your other handlers goes wrong, passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"$exception")," as\nsecond argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// define some handlers ...\n\n// and exception is thrown...\n$bot->onMessage(function (Nutgram $bot) {\n    // do stuff\n    throw new Exception('Oh no!');\n});\n\n// ... and passed to the exception handler\n$bot->onException(function (Nutgram $bot, \\Throwable $exception) {\n    echo $exception->getMessage(); // Oh no!\n    error_log($exception);\n    $bot->sendMessage('Whoops!');\n});\n\n$bot->run();\n")),(0,r.kt)("h3",{id:"onapierror"},(0,r.kt)("inlineCode",{parentName:"h3"},"onApiError")),(0,r.kt)("p",null,"The same concept of the ",(0,r.kt)("inlineCode",{parentName:"p"},"onException"),", but for outgoing requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Exceptions\\TelegramException;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onMessage(function (Nutgram $bot) {\n    $bot->sendMessage('Invalid call!', ['chat_id' => null]);\n});\n\n$bot->onApiError(function (Nutgram $bot, TelegramException $exception) {\n    echo $exception->getMessage(); // TelegramException: ...\n    error_log($exception);\n});\n\n$bot->run();\n")),(0,r.kt)("h2",{id:"oop"},"OOP"),(0,r.kt)("p",null,"So far you have seen handlers defined only as closures. But the framework, any definition that accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"$callable"),", also\naccepts a class-method definition, or invokable classes, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\nclass MyCommand {\n\n    public function __invoke(Nutgram $bot, $param)\n    {\n      //do stuff\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start {param}', MyCommand::class);\n\n$bot->run();\n")),(0,r.kt)("h2",{id:"update-helpers"},"Update Helpers"),(0,r.kt)("p",null,"When dealing with updates, sometimes you may need to access data that is nested in the update structure, which can be\ntedious and produce ",(0,r.kt)("em",{parentName:"p"},"a lot")," of boilerplate, since the same objects can often be nested in other objects, depending on\nthe type of update. For this reason, the framework provides a number of ",(0,r.kt)("strong",{parentName:"p"},"support methods to quickly access the most\nused data, no matter the update type"),", like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('help', function (Nutgram $bot) {\n    // Get the Message object\n    $bot->message();\n\n    // Access the Chat object\n    $bot->chat();\n});\n\n$bot->onCommand('my_chat', function (Nutgram $bot) {\n    $bot->sendMessage('Your chat id is ' . $bot->chatId());\n});\n\n$bot->run();\n")),(0,r.kt)("h3",{id:"available-helpers"},"Available helpers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Return type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"update()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?Update")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"Update")," object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chatId()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?int")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"chat_id")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chat()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?Chat")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"Chat")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"userId()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?int")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"from"),".",(0,r.kt)("inlineCode",{parentName:"td"},"id")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?User")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"User")," (",(0,r.kt)("inlineCode",{parentName:"td"},"from")," Telegram's object) if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"messageId()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?int")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"message"),".",(0,r.kt)("inlineCode",{parentName:"td"},"message_id")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"message()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?Message")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"Message")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isCallbackQuery()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"If the current update contains a ",(0,r.kt)("inlineCode",{parentName:"td"},"callback_query"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"callbackQuery()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?CallbackQuery")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"CallbackQuery")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isInlineQuery()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"If the current update contains an ",(0,r.kt)("inlineCode",{parentName:"td"},"inline_query"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inlineQuery()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?InlineQuery")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"InlineQuery")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chosenInlineResult()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?ChosenInlineResult")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"ChosenInlineResult")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shippingQuery()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?ShippingQuery")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"ShippingQuery")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isPreCheckoutQuery()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"If the current update contains a ",(0,r.kt)("inlineCode",{parentName:"td"},"pre_checkout_query"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"preCheckoutQuery()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?PreCheckoutQuery")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"PreCheckoutQuery")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"poll()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?Poll")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"Poll")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pollAnswer()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?PollAnswer")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"PollAnswer")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isMyChatMember()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"If the current ",(0,r.kt)("inlineCode",{parentName:"td"},"ChatMemberUpdated")," is in the ",(0,r.kt)("inlineCode",{parentName:"td"},"my_chat_member"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chatMember()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?ChatMemberUpdated")),(0,r.kt)("td",{parentName:"tr",align:null},"The current ",(0,r.kt)("inlineCode",{parentName:"td"},"ChatMemberUpdated")," if available, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," otherwise.")))),(0,r.kt)("h2",{id:"persisting-data"},"Persisting data"),(0,r.kt)("p",null,"The framework gives you the ability to store data based on the update context: you can store data as ",(0,r.kt)("strong",{parentName:"p"},"globally"),"\nor ",(0,r.kt)("strong",{parentName:"p"},"per-user"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->setGlobalData('mykey', 'Hi!');\n$bot->setUserData('mykey', 'Ciao!', $userId);\n\n$value = $bot->getGlobalData('mykey'); // Hi!\n$value = $bot->getUserData('mykey', $userId); // Ciao!\n\n// when used inside a context, the $userId can be omitted.\n$bot->onCommand('help', function (Nutgram $bot) {\n    $bot->setUserData('mykey', 'called help!');\n    $value = $bot->getUserData('mykey'); // called help!\n});\n\n$bot->run();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tip"},"If you need to persist data on disk, be sure to choose an appropriate cache adapter!\n")),(0,r.kt)("h3",{id:"available-methods"},"Available methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getGlobalData($key, $default = null)")),(0,r.kt)("td",{parentName:"tr",align:null},"The data associated to the ",(0,r.kt)("inlineCode",{parentName:"td"},"$key"),", if null ",(0,r.kt)("inlineCode",{parentName:"td"},"$default")," is returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setGlobalData($key, $value)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deleteGlobalData($key)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getUserData($key, ?int $userId = null, $default = null)")),(0,r.kt)("td",{parentName:"tr",align:null},"The data associated to the ",(0,r.kt)("inlineCode",{parentName:"td"},"$key"),", if null ",(0,r.kt)("inlineCode",{parentName:"td"},"$default")," is returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setUserData($key, $value, ?int $userId = null)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deleteUserData($key, ?int $userId = null)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))))))}c.isMDXComponent=!0}}]);