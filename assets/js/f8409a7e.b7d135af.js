"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[206],{9568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=n(7462),o=(n(7294),n(3905));const r={},l="Aloha",i={unversionedId:"intro",id:"intro",title:"Aloha",description:"The base for the entire library, and the engine that makes it all run.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/Aloha/docs/intro",draft:!1,editUrl:"https://github.com/thegalaxydev/Aloha/edit/main/docs/intro.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar"},s={},m=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Run",id:"run",level:3},{value:"RegisterDefaultCommands",id:"registerdefaultcommands",level:3},{value:"RegisterCommandsIn",id:"registercommandsin",level:3},{value:"Command format example:",id:"command-format-example",level:4},{value:"ClearTemp",id:"cleartemp",level:3}],d={toc:m},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aloha"},"Aloha"),(0,o.kt)("p",null,"The base for the entire library, and the engine that makes it all run."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"None")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"run"},"Run"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Aloha.Run(token: string, intents: number?)")),(0,o.kt)("p",null,"This is what gets your bot running. The first argument is required, and is your bot token, formatted ",(0,o.kt)("strong",{parentName:"p"},"without")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bot ")," prefix. It adds it for you!"),(0,o.kt)("p",null,"Takes an optional second parameter for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/events/gateway#gateway-intents"},"intents")),". Aloha provides you with some base intents to use in the ",(0,o.kt)("strong",{parentName:"p"},"Enum")," module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-luau"},"Aloha.Run(BOT_TOKEN_STRING, Enum.INTENTS.ALL)\n-- Let's get this ball rolling!\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"registerdefaultcommands"},"RegisterDefaultCommands"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Aloha.RegisterDefaultCommands(options: DefaultCommandOptions?) : {Command}"),"\nAloha comes with a few built-in application commands to make your life easier. This function will register all of them for you and allow them to be used on your bot. ",(0,o.kt)("strong",{parentName:"p"},"Note: None of these commands require privileged intents.")),(0,o.kt)("p",null,"Takes an optional dictionary of options, and returns an array of all the commands registered."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-luau"},"Aloha.RegisterDefaultCommands({rateLimit = 5})\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"registercommandsin"},"RegisterCommandsIn"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Aloha.RegisterCommandsIn(directory: string)"),"\nThis will allow you to register commands in a given directory. An example of command formatting is shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-luau"},'Aloha.RegisterCommandsIn("./Commands")\n')),(0,o.kt)("h4",{id:"command-format-example"},"Command format example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-luau"},'return {\n    Data = {\n        name = "uptime",\n        description = "shows the uptime of Aloha.",\n        type = Enum.APPLICATION_COMMAND_TYPE.CHAT_INPUT\n    },\n\n    Response = function(data: DiscordTypes.ApplicationCommandInteractionData)\n        return {\n            type = Enum.INTERACTION_CALLBACK_TYPE.CHANNEL_MESSAGE_WITH_SOURCE,\n            data = {\n                embeds = {\n                    Embed.new().setColor(Color3.new(252/255, 152/255, 3/255))\n                    .setDescription(`Aloha has been online for {Misc.FormatTime(os.time() - Bot.STARTED_AT)}`).finish()\n                },\n                flags = Enum.MESSAGE_FLAGS.EPHEMERAL\n            }\n        }\n        \n    end\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"cleartemp"},"ClearTemp"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Aloha.ClearTemp()"),"\nClears the ",(0,o.kt)("inlineCode",{parentName:"p"},"/temp")," folder. This is automatically called in ",(0,o.kt)("inlineCode",{parentName:"p"},"Run"),", but if for whatever reason you need to do it on runtime, you can!"))}p.isMDXComponent=!0}}]);