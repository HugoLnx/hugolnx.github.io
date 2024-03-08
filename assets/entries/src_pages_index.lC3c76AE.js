import{g as A,r as _,h as C,o as i,c as a,a as t,n as b,t as c,j as n,k,b as w,l as m,w as L,m as M,F as h,p as f,q as x,s as P,v as U,d as I,i as W,e as $,_ as G}from"../chunks/chunk-JOX8DUr_.js";import"../chunks/chunk-XOxFvcbe.js";const z={class:"video-wrapper autoplay-video"},E=["width","height"],B=["src"],j=t("i",{class:"fa-solid fa-video fa-beat-fade video-spinner"},null,-1),F=[j],V=["loading","fetchpriority","src"],q={__name:"AutoplayVideo",props:{src:{type:String,required:!0},width:{type:Number,required:!1,default:360},height:{type:Number,required:!1,default:240},poster:{type:String,required:!0},isPriority:{type:Boolean,required:!1,default:!1}},setup(e){A(u=>({"1784dc36":d,"9d08ae10":S}));const{width:l,height:p}=e,r=_(null),s=_(!1),g=_(!1),d=`${l}px`,S=`${p}px`,T=()=>{r.value.play(),s.value=!0};return C(()=>{const u={root:null,rootMargin:"100px",threshold:0};new IntersectionObserver(([v])=>{!v.isIntersecting||s.value||g.value||(r.value.load(),g.value=!0)},u).observe(r.value)}),(u,v)=>(i(),a("div",z,[t("video",{ref_key:"videoElement",ref:r,width:e.width,height:e.height,muted:"",loop:"",preload:"none",onLoadeddata:T},[t("source",{src:e.src,type:"video/mp4"},null,8,B)],40,E),t("div",{class:b(["video-overlay",{"is-hidden":s.value}])},F,2),t("img",{loading:e.isPriority?"eager":"lazy",fetchpriority:e.isPriority?"high":"auto",src:e.poster,class:b(["video-poster",{"is-hidden":s.value}])},null,10,V)]))}},D=["href"],N={class:"icon"},y={__name:"GameLink",props:{title:{type:String,required:!0},href:{type:String,required:!0},iconClasses:{type:String,required:!0}},setup(e){return(l,p)=>(i(),a("a",{href:e.href,class:"game-link icon-text",target:"_blank",rel:"noopener noreferrer"},[t("span",N,[t("i",{class:b(["fa-xl",e.iconClasses])},null,2)]),t("span",null,c(e.title),1)],8,D))}},R={class:"box-content"},O={class:"game-quick-details-middle"},K={class:"video-inner-header"},J={class:"game-title title title-simple"},Z={key:0,class:"video-inner-tag"},H={key:1,class:"video-inner-tag"},Q={class:"game-links"},Y={class:"game-quick-details-bottom"},X={class:"details-columns"},ee={class:"details-column highlights-column"},te={class:"game-highlights"},ie=t("h3",{class:"title title-simple is-5"}," Highlights ",-1),se={class:"details-column bullets-column"},ae={key:0,class:"game-integrations"},oe=t("h3",{class:"title title-simple is-5"}," Integrations ",-1),re={class:"inline-list"},ne={class:"game-specs"},le=t("h3",{class:"title title-simple is-5"}," Specs ",-1),pe={__name:"GameQuickDetailsBox",props:{title:{type:String,required:!0},videoSrc:{type:String,required:!0},highlights:{type:Array,required:!0},integrations:{type:Array,required:!0,default:()=>[]},platforms:{type:Array,required:!0},engine:{type:String,required:!0},links:{type:Object,required:!0},isPersonal:{type:Boolean,default:!1},isFreelance:{type:Boolean,default:!1},isMobile:{type:Boolean,default:!1}},setup(e){A(v=>({64309974:S,"009068b4":u,"3fe99349":T}));const{isMobile:l}=e,p={width:640,height:360},r={width:270,height:480},{colors:s}=P,g=s.yellow,d=l?r:p,S=`${d.width}px`,T=`${d.height}px`,u=`${p.width}px`;return(v,Ce)=>(i(),a("div",{class:b(["box game-quick-details",{"is-vertical-video":e.isMobile,"is-horizontal-video":!e.isMobile}])},[t("div",R,[t("div",O,[t("div",K,[t("h2",J,c(e.title),1),e.isPersonal?(i(),a("p",Z," personal prototype ")):n("",!0),e.isFreelance?(i(),a("p",H," as freelancer ")):n("",!0)]),k(q,{class:"game-video",src:e.videoSrc,width:w(d).width,height:w(d).height,poster:e.links.poster},null,8,["src","width","height","poster"]),t("div",Q,[e.links.steam?(i(),m(y,{key:0,title:"Steam",href:e.links.steam,"icon-classes":"fa-brands fa-steam-symbol"},null,8,["href"])):n("",!0),e.links.googlePlay?(i(),m(y,{key:1,title:"Store",href:e.links.googlePlay,"icon-classes":"fa-brands fa-google-play"},null,8,["href"])):n("",!0),e.links.trailer?(i(),m(y,{key:2,title:"Trailer",href:e.links.trailer,"icon-classes":"fa-solid fa-play"},null,8,["href"])):n("",!0),e.links.gameplay?(i(),m(y,{key:3,title:"Gameplay",href:e.links.gameplay,"icon-classes":"fa-solid fa-gamepad"},null,8,["href"])):n("",!0)])]),t("div",Y,[t("div",X,[t("div",ee,[t("div",te,[ie,k(M,{"icon-classes":"fa-solid fa-star","hover-color":w(g)},{default:L(()=>[(i(!0),a(h,null,f(e.highlights,o=>(i(),m(U,{key:o},{default:L(()=>[x(c(o),1)]),_:2},1024))),128))]),_:1},8,["hover-color"])])]),t("div",se,[e.integrations?(i(),a("div",ae,[oe,t("ul",re,[(i(!0),a(h,null,f(e.integrations,o=>(i(),a("li",{key:o,class:"list-item"},c(o),1))),128))])])):n("",!0),t("div",ne,[le,t("p",null,[x(" Platforms: "),(i(!0),a(h,null,f(e.platforms,o=>(i(),a("span",{key:o,class:"list-item"},c(o),1))),128))]),t("p",null," Made with: "+c(e.engine),1)])])])])])],2))}},de={shortTitle:"Spooky Typing",fullTitle:"Spooky Typing: The Ghost Plague",engine:"Unity 3D",platforms:["Windows","Linux","Mac"],links:{steam:"https://store.steampowered.com/app/1791870/Spooky_Typing_The_Ghost_Plague/",trailer:"https://www.youtube.com/watch?v=WZTmxcAN0J0",gameplay:"https://www.youtube.com/watch?v=oEwrwlJ9jWk",previewLow:"/videos/spooky-typing-preview-360p-low.mp4",previewMid:"/videos/spooky-typing-preview-360p-mid.mp4",poster:"/images/spooky-typing-preview-poster-360p.jpg"},bullets:{technical:["Typing system made from scratch","Smart enemy scheduler","Event-based architecture"],integrations:["Steam","Leaderboards","Achievements","Stats","Cloud Save"],other:["Configuration via scriptable objects"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Typing","Runner","Achievements","Leaderboards","Cloud Save"]},ce={shortTitle:"Smashing Spirits",fullTitle:"Smashing Spirits: Brazil's First Boxer",engine:"Unity 3D",platforms:["Windows","Linux","Mac"],links:{steam:"https://store.steampowered.com/app/1263200/Smashing_Spirits_Brazils_First_Boxer/",trailer:"https://www.youtube.com/watch?v=hpYTGMcTAV4",gameplay:"https://youtu.be/lMQL3Aq-cYU",previewLow:"/videos/smashing-spirits-preview-360p-low.mp4",previewMid:"/videos/smashing-spirits-preview-360p-mid.mp4",poster:"/images/smashing-spirits-preview-poster-360p.jpg"},bullets:{technical:["Platforming/Combat systems made from scratch","Gamepad support (via InControl)","Localization (15 languages)"],integrations:["Steam","Achievements","Stats","Cloud Save"],other:["State Machine","Command Queue"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Action Platformer","Fighting","Boxing Combat","Gamepad Support","Achievements","Cloud Save"]},me={shortTitle:"Tyfortress",fullTitle:"Tyfortress: Tactical Typing",engine:"Unity 3D",platforms:["Windows","Linux","Mac"],links:{steam:"https://store.steampowered.com/app/1661700/Tyfortress_Tactical_Typing/",trailer:"https://www.youtube.com/watch?v=FtdJSk4B41k",gameplay:"https://www.youtube.com/watch?v=OurOSsgrPLI",previewLow:"/videos/tyfortress-preview-360p-low.mp4",previewMid:"/videos/tyfortress-preview-360p-mid.mp4",poster:"/images/tyfortress-preview-poster-360p.jpg"},bullets:{technical:["Tower defense system made from scratch","Smart enemy scheduler","Configuration via scriptable objects"],integrations:["Steam","Leaderboards","Achievements","Stats","Cloud Save"],other:["Event-based architecture","Steam integration"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Typing Game","Tower Defense","Achievements","Leaderboards","Cloud Save"]},ue={shortTitle:"Tybot Invasion",fullTitle:"Tybot Invasion: The Typing Runner",engine:"Unity 3D",platforms:["Windows","Linux","Mac"],links:{steam:"https://store.steampowered.com/app/1636000/Tybot_Invasion_The_Typing_Runner/",trailer:"https://youtu.be/4Kq6gm5CvU4?si=-IWdaEa4vZsats_n",gameplay:"https://youtu.be/OfLBQZMVVUQ",previewLow:"/videos/tybot-preview-360p-low.mp4",previewMid:"/videos/tybot-preview-360p-mid.mp4",poster:"/images/tybot-preview-poster-360p.jpg"},bullets:{technical:["Typing system made from scratch","Procedural level generation","Configuration via scriptable objects"],integrations:["Steam","Leaderboards","Achievements","Stats","Cloud Save"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Typing Game","Runner","Achievements","Leaderboards","Cloud Save"]},he={shortTitle:"Neon Ships",fullTitle:"Neon Ships: The Type'em Up Shooter",engine:"Unity 3D",platforms:["Windows","Linux","Mac"],links:{steam:"https://store.steampowered.com/app/1528580/Neon_Ships_The_Typeem_Up_Shooter",trailer:"https://youtu.be/MYc81JHaO3A",gameplay:"https://youtu.be/TmkhOMJtYmU",previewLow:"/videos/neonships-preview-360p-low.mp4",previewMid:"/videos/neonships-preview-360p-mid.mp4",poster:"/images/neonships-preview-poster-360p.jpg"},bullets:{technical:["Shoot'em up system made from scratch","Composable shooting patterns","Typing system made from scratch"],integrations:["Steam","Leaderboards","Achievements","Stats","Cloud Save"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Typing Game","Shoot'em Up","Achievements","Leaderboards","Cloud Save"]},ge={shortTitle:"Typomancer",fullTitle:"Typomancer in the Feather's Way",engine:"Unity 3D",platforms:["Windows","Linux","Mac"],links:{steam:"https://store.steampowered.com/app/1714300/Typomancer_in_the_Feathers_Way",trailer:"https://youtu.be/r-heFArzPqI?si=5R6Ev6J13BYeDatI",gameplay:"https://youtu.be/kQzl2wnoM0c?si=135dvP9GoFB45F2W",previewLow:"/videos/typomancer-preview-360p-low.mp4",previewMid:"/videos/typomancer-preview-360p-mid.mp4",poster:"/images/typomancer-preview-poster-360p.jpg"},bullets:{technical:["Typing system made from scratch","Integration between typing and platformer","Corgi customization"],integrations:["Steam","Corgi","Leaderboards","Achievements","Stats","Cloud Save"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Typing Game","Platformer","Achievements","Leaderboards","Cloud Save"]},ve={shortTitle:"King Bullseye",fullTitle:"King Bullseye: The Chess Strike",engine:"Unity 3D",platforms:["Windows","Linux","Mac"],links:{steam:"https://store.steampowered.com/app/1600870/King_Bullseye_The_Chess_Strike",trailer:"https://youtu.be/GBDkMf0BGyw?si=0m9njEetBE4W-NNb",gameplay:"https://www.youtube.com/watch?v=mXcG0rBt1Wo",previewLow:"/videos/kingbullseye-preview-360p-low.mp4",previewMid:"/videos/kingbullseye-preview-360p-mid.mp4",poster:"/images/kingbullseye-preview-poster-360p.jpg"},bullets:{technical:["Shooter made from scratch","Smart enemy scheduler","Enemies AI with chess-inspired behaviors"],integrations:["Steam","Leaderboards","Achievements","Stats","Cloud Save"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Shooter","Achievements","Leaderboards","Cloud Save"]},ye={shortTitle:"Sniper Ships",fullTitle:"Sniper Ships: Shoot'em Up on Rails",engine:"Unity 3D",platforms:["Windows","Linux","Mac"],links:{steam:"https://store.steampowered.com/app/1555080/Sniper_Ships_Shootem_Up_on_Rails",trailer:"https://youtu.be/9SAh5-r_C1c?si=q7mjfHBKJsbBSzeN",gameplay:"https://youtu.be/1odKuYLuY64?si=YnQjHMV0ZxDDgLVN",previewLow:"/videos/sniperships-preview-360p-low.mp4",previewMid:"/videos/sniperships-preview-360p-mid.mp4",poster:"/images/sniperships-preview-poster-360p.jpg"},bullets:{technical:["On-Rails Shooter & Shoot'em up systems","Smart enemy scheduler","Composable shooting patterns"],integrations:["Steam","Leaderboards","Achievements","Stats","Cloud Save"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Typing Game","On-Rails Shooter","Shoot'em Up","Achievements","Leaderboards","Cloud Save"]},we={shortTitle:"Xan's Adventure",fullTitle:"Xan's Adventure in the Algy World",engine:"Unity 3D",platforms:["WebGL"],links:{steam:null,trailer:null,gameplay:"https://youtu.be/M1vvi4pJK8A",previewLow:"/videos/xan-preview-360p-low.mp4",previewMid:"/videos/xan-preview-360p-mid.mp4",poster:"/images/xan-preview-poster-360p.jpg"},bullets:{technical:["Expression solver UI made from scratch","Educational game","Internationalization"],integrations:["Legends of Learning SDK"]},tags:["Unity","WebGL","Educational Game","Legends of Learning"]},fe={shortTitle:"Witch Circles",fullTitle:"Witch Circles",engine:"Unity 3D",platforms:["WebGL"],links:{steam:null,trailer:null,gameplay:"https://youtu.be/ZX8zFkrlRZc",previewLow:"/videos/witch-circles-preview-360p-low.mp4",previewMid:"/videos/witch-circles-preview-360p-mid.mp4",poster:"/images/witch-circles-preview-poster-360p.jpg"},bullets:{technical:["Circle math solver UI made from scratch","Educational game","Internationalization"],integrations:["Legends of Learning SDK"]},tags:["Unity","WebGL","Educational Game","Legends of Learning"]},be={shortTitle:"Sunseek",fullTitle:"Sunseek",engine:"Unity 3D",isPersonal:!0,platforms:["Windows"],links:{steam:null,trailer:null,gameplay:"https://www.youtube.com/watch?v=-h1pDEJCxKM",previewLow:"/videos/sunseek-preview-360p-low.mp4",previewMid:"/videos/sunseek-preview-360p-mid.mp4",poster:"/images/sunseek-preview-poster-360p.jpg"},bullets:{technical:["Puzzle platformer made from scratch","Personal prototype"]},tags:["Unity","Windows","Personal","Prototype"]},Se={shortTitle:"Garby",fullTitle:"Garby Recycling",engine:"Unity 3D",isMobile:!0,platforms:["Android"],links:{steam:"",trailer:"",gameplay:"https://youtube.com/shorts/dIAXF-qFObo",previewLow:"/videos/garby-preview-270p-low-vertical.mp4",previewMid:"/videos/garby-preview-270p-mid-vertical.mp4",poster:"/images/garby-preview-poster-360p.jpg"},bullets:{technical:["Smart ad-hoc level generation","Ads and In-App Purchases","Automatic level difficulty scaling"],integrations:["Unity Ads","Unity In-App Purchases"]},tags:["Unity","Android","Mobile","Indie","Recycling","Educational"]},Te={shortTitle:"Trivia Maze",fullTitle:"Trivia Maze: A Fun Quiz Game",engine:"Unity 3D",isMobile:!0,isFreelance:!0,platforms:["Android"],links:{steam:"",trailer:"",gameplay:"https://youtu.be/PCFfw68AC7A",googlePlay:"https://play.google.com/store/apps/details?id=com.neomindgames.triviamaze&hl=pt&gl=US",previewLow:"/videos/triviamaze-preview-270p-low-vertical.mp4",previewMid:"/videos/triviamaze-preview-270p-mid-vertical.mp4",poster:"/images/triviamaze-preview-poster-405p.jpg"},bullets:{technical:["In-game quiz generation via Chat GPT","Authentication with Firebase","Ads and In-App Purchases"],integrations:["Chat GPT","Firebase Auth","Google AdMob","Unity In-App Purchases"]},tags:["Unity","Android","Mobile","Freelancer","Trivia Game","Educational"]};var _e=[de,ce,me,ue,he,ge,ve,ye,we,fe,Te,Se,be],ke={games:_e};const Le=t("h1",{class:"title"}," Game Highlights ",-1),xe={__name:"+Page",setup(e){const{games:l}=ke;return(p,r)=>(i(),a(h,null,[Le,(i(!0),a(h,null,f(w(l),s=>(i(),m(pe,{key:s.shortTitle,title:s.shortTitle+" (Low)","video-src":s.links.previewLow,highlights:s.bullets.technical,integrations:s.bullets.integrations,engine:s.engine,platforms:s.platforms,links:s.links,"is-personal":s.isPersonal,"is-mobile":s.isMobile,"is-freelance":s.isFreelance},null,8,["title","video-src","highlights","integrations","engine","platforms","links","is-personal","is-mobile","is-freelance"]))),128))],64))}},Ae=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"})),Ue=[{configName:"onRenderClient",importPath:"vike-vue/renderer/onRenderClient",isValueFile:!1,exportValue:I,exportName:"onRenderClient"},{configName:"onPageTransitionStart",importPath:"/src/renderer/+onPageTransitionStart.js",isValueFile:!0,exportValues:W},{configName:"onPageTransitionEnd",importPath:"/src/renderer/+onPageTransitionEnd.js",isValueFile:!0,exportValues:$},{configName:"Page",importPath:"/src/pages/index/+Page.vue",isValueFile:!0,exportValues:Ae},{configName:"Layout",importPath:"/src/pages/_layout/Layout.vue",isValueFile:!1,exportValue:G,exportName:"default"}],Ie={onBeforeRenderEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},dataEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},hydrationCanBeAborted:{definedAt:{filePathToShowToUser:"/node_modules/vike-vue/dist/+config.js",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:"true"},title:{definedAt:{filePathToShowToUser:"/src/pages/+config.h.js",fileExportPathToShowToUser:["default","title"]},valueSerialized:'"Hugolnx Gamedev"'},favicon:{definedAt:{filePathToShowToUser:"/src/pages/+config.h.js",fileExportPathToShowToUser:["default","favicon"]},valueSerialized:'"/favicon.ico"'}};export{Ue as configValuesImported,Ie as configValuesSerialized};
