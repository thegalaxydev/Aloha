"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[851],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>b});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=u(r),c=a,b=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return r?n.createElement(b,o(o({ref:e},d),{},{components:r})):n.createElement(b,o({ref:e},d))}));function b(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},193:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},o="Bot",i={unversionedId:"lib/bot",id:"lib/bot",title:"Bot",description:"Properties",source:"@site/docs/lib/bot.md",sourceDirName:"lib",slug:"/lib/bot",permalink:"/Aloha/docs/lib/bot",draft:!1,editUrl:"https://github.com/thegalaxydev/Aloha/edit/main/docs/lib/bot.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Aloha",permalink:"/Aloha/docs/intro"}},p={},u=[{value:"Properties",id:"properties",level:2}],d={toc:u},m="wrapper";function s(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bot"},"Bot"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DISCORD_API_VERSION"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Version number for the Discord API. ",(0,a.kt)("strong",{parentName:"td"},"DO NOT CHANGE THIS."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ALOHA_VERSION"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Version number for Aloha. ",(0,a.kt)("strong",{parentName:"td"},"DO NOT CHANGE THIS."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PROCESS_ID"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"The current PID for the lune process running the bot.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TOKEN"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The token used to run the bot. This is set with ",(0,a.kt)("strong",{parentName:"td"},"Aloha.Run()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client"),(0,a.kt)("td",{parentName:"tr",align:null},"User?"),(0,a.kt)("td",{parentName:"tr",align:null},"The user object reference for the bot.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Shards"),(0,a.kt)("td",{parentName:"tr",align:null},"{","[number]",": {Sent: number, Socket: DiscordWebSocket, ResumeURL: string, SessionID: string}}"),(0,a.kt)("td",{parentName:"tr",align:null},"An array of websocket shards for the bot, indexed by Shard ID. ",(0,a.kt)("strong",{parentName:"td"},"Sent")," used for ratelimiting, and ",(0,a.kt)("strong",{parentName:"td"},"Socket")," is the websocket object for that shard.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SHARD_COUNT"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of shards for the bot.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"STARTED_AT"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"The time that the bot started at.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RATE_LIMIT"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Rate limit used for commands.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"INTENTS"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Bot intents. Defaults to ALL (53608447)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CLOSE_REASONS"),(0,a.kt)("td",{parentName:"tr",align:null},"{","[number]",": string}"),(0,a.kt)("td",{parentName:"tr",align:null},"Close reason definitions that are indexed when a websocket closes.")))))}s.isMDXComponent=!0}}]);