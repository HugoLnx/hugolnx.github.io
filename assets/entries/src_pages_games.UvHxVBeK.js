import{m as v,p as G,o as a,c as r,a as e,n as w,t as u,j as b,q as S,s as R,l as h,v as Y,x as X,y as ee,h as V,w as D,k as te,b as t,F as M,r as E,z as se,d as F,g as ie,e as oe,i as ae,f as ne,_ as re}from"../chunks/chunk-0_U9u2KQ.js";import{a as le,_ as ce}from"../chunks/chunk-t1-SwxbV.js";import"../chunks/chunk-QuKujmCy.js";const de=["preload","autoplay"],pe=["src"],me=e("i",{class:"fa-solid fa-video fa-beat-fade video-spinner"},null,-1),ue=[me],ge=["loading","fetchpriority","src"],he={__name:"AutoplayVideo",props:{src:{type:String,required:!0},poster:{type:String,required:!0},doPreloadPoster:{type:Boolean,required:!1,default:!1},doPreloadVideo:{type:Boolean,required:!1,default:!1}},setup(s){const c=v(null),l=v(!1),o=v(!1),p=()=>{l.value=!0,setTimeout(()=>{c.value.play()},0)};return G(()=>{const n={root:null,rootMargin:"100px",threshold:0};new IntersectionObserver(([i])=>{!i.isIntersecting||l.value||o.value||(o.value=!0,setTimeout(()=>{c.value.load()},0))},n).observe(c.value)}),(n,i)=>(a(),r("div",{class:w(["autoplay-video",{"is-playing":l.value,"is-loading":o.value}])},[e("video",{ref_key:"videoElement",ref:c,muted:"",loop:"",playsinline:"",preload:s.doPreloadVideo?"auto":"none",autoplay:s.doPreloadVideo?!0:null,onLoadeddata:p},[e("source",{src:s.src,type:"video/mp4"},null,8,pe)],40,de),e("div",{class:w(["video-overlay",{"is-hidden":l.value}])},ue,2),e("img",{loading:s.doPreloadPoster?"eager":"lazy",fetchpriority:s.doPreloadPoster?"high":"auto",src:s.poster,class:"video-poster"},null,8,ge)],2))}},ve=["href"],fe={class:"icon"},ye={class:"icon-raw-text"},U={__name:"GameLink",props:{title:{type:String,required:!0},href:{type:String,required:!0},iconClasses:{type:String,required:!0}},setup(s){return(c,l)=>(a(),r("a",{href:s.href,class:"game-link icon-text",target:"_blank",rel:"noopener noreferrer"},[e("span",fe,[e("i",{class:w(["inner-icon fa-xl",s.iconClasses])},null,2)]),e("span",ye,u(s.title),1)],8,ve))}},we={key:0,class:"icon"},_e=e("i",{class:"toggle-icon fa-solid fa-chevron-down"},null,-1),be=[_e],Se={class:"toggle-label-wrapper"},Te={class:"toggle-off-label"},Le={class:"toggle-on-label"},N={__name:"ToggableContentButton",props:{showLabel:{type:String,required:!1,default:"Show Details"},hideLabel:{type:String,required:!1,default:"Hide Details"},hideIcon:{type:Boolean,required:!1,default:!1}},setup(s){return(c,l)=>(a(),r("a",{href:"#",class:"toggle-button",onClick:l[0]||(l[0]=S(()=>{},["prevent"]))},[s.hideIcon?b("",!0):(a(),r("span",we,be)),e("span",Se,[e("span",Te,u(s.showLabel),1),e("span",Le,u(s.hideLabel),1)])]))}},Ce={class:"inner-content"},ke={__name:"ToggableContent",props:{showLabel:{type:String,required:!1,default:"Show Details"},hideLabel:{type:String,required:!1,default:"Hide Details"}},emits:["toggled"],setup(s,{expose:c,emit:l}){const o=v(!1),p=l;function n({forceValue:i}={}){i===void 0?o.value=!o.value:o.value=i,p("toggled",o.value)}return c({toggle:n,isContentOn:()=>o.value}),(i,f)=>(a(),r("div",{class:w(["toggable-content",{"is-content-on":o.value}]),onClick:S(n,["stop","prevent"])},[e("div",Ce,[R(i.$slots,"default")]),h(N,{"show-label":s.showLabel,"hide-label":s.hideLabel,class:w({"is-content-on":o.value})},null,8,["show-label","hide-label","class"])],2))}};function I(s){var c=Math.round(parseInt(s,10));return"".concat(c,"px")}function Pe(s){var c=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=l.timeout,p=o===void 0?500:o,n=null;return function(){for(var i=arguments.length,f=new Array(i),d=0;d<i;d++)f[d]=arguments[d];n&&(clearTimeout(n),n=null),n=setTimeout(function(){s.apply(c,f)},p)}}const xe={__name:"GameToggableContent",props:{gameBox:{type:Object,required:!1,default:null}},setup(s,{expose:c}){const l=v(null),o=v("bottom"),n=Y(s,"gameBox"),i=Pe(()=>{const d=n.value;if(!d)return;const T=document.body.clientWidth,L=d.getBoundingClientRect(),P=L.left,x=T-L.right,A=L.right-L.left;x>=P&&x>=A?o.value="right":P>x&&P>=A?o.value="left":o.value="bottom"});function f(...d){i(),l.value.toggle(...d)}return G(()=>{window.addEventListener("resize",i),window.addEventListener("orientationchange",i),window.addEventListener("load",i),window.addEventListener("DOMContentLoaded",i),i()}),X(()=>{window.removeEventListener("resize",i),window.removeEventListener("orientationchange",i),window.removeEventListener("load",i),window.removeEventListener("DOMContentLoaded",i)}),ee(n,i),c({toggle:f,isContentOn:()=>{var d;return(d=l.value)==null?void 0:d.isContentOn()}}),(d,T)=>(a(),V(ke,{ref_key:"toggableContent",ref:l,class:w(["game-toggable-content",{"is-open-to-bottom":o.value==="bottom","is-open-to-right":o.value==="right","is-open-to-left":o.value==="left"}])},{default:D(()=>[R(d.$slots,"default")]),_:3},8,["class"]))}},Ae=e("div",{class:"screen-overlay"},null,-1),Me={class:"game-box-content"},Ee={class:"game-box-middle"},Ue={class:"video-header"},Ie={class:"game-title title page-section-subtitle"},$e={class:"game-preview-section"},De=e("h3",{class:"title"}," Preview ",-1),Be={class:"game-links-section"},ze=e("h3",{class:"title"}," Links ",-1),Ve={class:"game-links"},Oe={key:0,class:"game-link-wrapper"},We={key:1,class:"game-link-wrapper"},je={key:2,class:"game-link-wrapper"},Ge={key:3,class:"game-link-wrapper"},Re={class:"game-sections"},Fe={class:"game-section game-highlights"},Ne=e("h3",{class:"title game-section-title"}," Highlights ",-1),qe={key:0,class:"game-section game-integrations"},Je=e("h3",{class:"title game-section-title"}," Integrations ",-1),Ke={class:"inline-list"},Ze={class:"game-section game-details"},He={class:"game-details-wrapper"},Qe=e("h3",{class:"title game-section-title"}," Details ",-1),Ye={key:0,class:"game-details-section"},Xe=e("h5",{class:"game-details-section-title"}," Genres ",-1),et={class:"inline-list game-details-section-content"},tt={class:"game-details-section"},st=e("h5",{class:"game-details-section-title"}," Made with ",-1),it={class:"game-details-section-content"},ot={class:"game-details-section"},at=e("h5",{class:"game-details-section-title"}," Platforms ",-1),nt={class:"inline-list game-details-section-content"},rt={class:"game-details-section"},lt=e("h5",{class:"game-details-section-title"}," Commercial Context ",-1),ct={class:"game-details-section-content"},dt={__name:"GameBox",props:{game:{type:Object,required:!0}},setup(s){te(_=>({"1972b03e":t(I)(t(C).width),"3d58175b":t(C).width,"53dbda32":t(C).height,"77ad1c1c":t(I)(t(C).width*1.3),"77ae0420":t(I)(t(C).width*.6),"41ddf39e":t(I)(t(C).width*.4)}));const c={width:640,height:360},l={width:270,height:480},o={"self-published":"Self-Published Indie","freelance-job":"Freelance Job","royalty-earning":"Royalty Earning",personal:"Personal Demo",prototype:"Personal Prototype"},{game:p}=s,n=v(!1),i=v(null),f=v(null),{shortTitle:d,isMobile:T,doPreloadVideo:L,doPreloadPoster:P,platforms:x,genres:A,links:g,engine:q}=p,{previewLow:J}=g,{technical:K,integrations:O}=p.bullets,Z=o[p.commercial],C=T?l:c;function H(){var _;(_=i.value)==null||_.toggle()}function Q(){var _;n.value=(_=i.value)==null?void 0:_.isContentOn()}return(_,y)=>(a(),r("article",{ref_key:"gameBox",ref:f,class:w(["game-box",{"is-vertical-video":t(T),"is-horizontal-video":!t(T),"is-selected":n.value,"is-not-selected":!n.value}]),onClick:S(H,["prevent","stop"])},[Ae,e("div",Me,[e("div",Ee,[e("header",Ue,[e("h2",Ie,u(t(d)),1)]),e("section",$e,[De,h(he,{class:"game-preview",src:t(J),poster:t(g).poster,"do-preload-video":t(L),"do-preload-poster":t(P)},null,8,["src","poster","do-preload-video","do-preload-poster"])]),e("nav",Be,[ze,e("div",Ve,[t(g).steam?(a(),r("div",Oe,[h(U,{title:"Steam",href:t(g).steam,"icon-classes":"fa-brands fa-steam-symbol",onClick:y[0]||(y[0]=S(()=>{},["stop"]))},null,8,["href"])])):b("",!0),t(g).googlePlay?(a(),r("div",We,[h(U,{title:"Store",href:t(g).googlePlay,"icon-classes":"fa-brands fa-google-play",onClick:y[1]||(y[1]=S(()=>{},["stop"]))},null,8,["href"])])):b("",!0),t(g).trailer?(a(),r("div",je,[h(U,{title:"Trailer",href:t(g).trailer,"icon-classes":"fa-solid fa-play",onClick:y[2]||(y[2]=S(()=>{},["stop"]))},null,8,["href"])])):b("",!0),t(g).gameplay?(a(),r("div",Ge,[h(U,{title:"Gameplay",href:t(g).gameplay,"icon-classes":"fa-solid fa-gamepad",onClick:y[3]||(y[3]=S(()=>{},["stop"]))},null,8,["href"])])):b("",!0)])]),h(N,{class:w(["outer-toggle-button",{"is-content-on":n.value}]),"hide-icon":"","show-label":"Show Info","hide-label":"Hide Info"},null,8,["class"])]),h(xe,{ref_key:"toggableContent",ref:i,class:"game-box-bottom","game-box":f.value,"show-label":`${t(d)} Info`,"hide-label":`${t(d)} Info`,onToggled:Q},{default:D(()=>{var W,j;return[e("div",Re,[e("section",Fe,[Ne,h(le,{"icon-classes":"fa-solid fa-star"},{default:D(()=>[(a(!0),r(M,null,E(t(K),m=>(a(),V(ce,{key:m},{default:D(()=>[se(u(m),1)]),_:2},1024))),128))]),_:1})]),((W=t(O))==null?void 0:W.length)>0?(a(),r("section",qe,[Je,e("ul",Ke,[(a(!0),r(M,null,E(t(O),m=>(a(),r("li",{key:m,class:"list-item"},u(m),1))),128))])])):b("",!0),e("section",Ze,[e("div",He,[Qe,((j=t(A))==null?void 0:j.length)>0?(a(),r("section",Ye,[Xe,e("ul",et,[(a(!0),r(M,null,E(t(A),m=>(a(),r("li",{key:m,class:"list-item"},u(m),1))),128))])])):b("",!0),e("section",tt,[st,e("p",it,u(t(q)),1)]),e("section",ot,[at,e("ul",nt,[(a(!0),r(M,null,E(t(x),m=>(a(),r("li",{key:m,class:"list-item"},u(m),1))),128))])]),e("section",rt,[lt,e("p",ct,u(t(Z)),1)])])])])]}),_:1},8,["game-box","show-label","hide-label"])])],2))}},pt={shortTitle:"Spooky Typing",fullTitle:"Spooky Typing: The Ghost Plague",engine:"Unity 3D",commercial:"self-published",platforms:["Windows","Linux","Mac"],genres:["Typing","Runner"],links:{steam:"https://store.steampowered.com/app/1791870/Spooky_Typing_The_Ghost_Plague/",trailer:"https://www.youtube.com/watch?v=WZTmxcAN0J0",gameplay:"https://www.youtube.com/watch?v=oEwrwlJ9jWk",previewLow:"/videos/spooky-typing-preview-360p-low.mp4",previewMid:"/videos/spooky-typing-preview-360p-mid.mp4",poster:"/images/spooky-typing-preview-poster-360p.jpg"},bullets:{technical:["Typing system made from scratch","Smart enemy scheduler","Event-based architecture"],integrations:["Steam","Leaderboards","Achievements","Stats","Cloud Save"],other:["Configuration via scriptable objects"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Typing","Runner","Achievements","Leaderboards","Cloud Save"]},mt={shortTitle:"Smashing Spirits",fullTitle:"Smashing Spirits: Brazil's First Boxer",engine:"Unity 3D",commercial:"self-published",platforms:["Windows","Linux","Mac"],genres:["Action Platformer","Fighting"],links:{steam:"https://store.steampowered.com/app/1263200/Smashing_Spirits_Brazils_First_Boxer/",trailer:"https://www.youtube.com/watch?v=hpYTGMcTAV4",gameplay:"https://youtu.be/lMQL3Aq-cYU",previewLow:"/videos/smashing-spirits-preview-360p-low.mp4",previewMid:"/videos/smashing-spirits-preview-360p-mid.mp4",poster:"/images/smashing-spirits-preview-poster-360p.jpg"},bullets:{technical:["Platforming/Combat systems made from scratch","Gamepad support (via InControl)","Localization (15 languages)"],integrations:["Steam","Achievements","Stats","Cloud Save"],other:["State Machine","Command Queue"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Action Platformer","Fighting","Boxing Combat","Gamepad Support","Achievements","Cloud Save"]},ut={shortTitle:"Tyfortress",fullTitle:"Tyfortress: Tactical Typing",engine:"Unity 3D",commercial:"self-published",platforms:["Windows","Linux","Mac"],genres:["Tower Defense","Typing"],links:{steam:"https://store.steampowered.com/app/1661700/Tyfortress_Tactical_Typing/",trailer:"https://www.youtube.com/watch?v=FtdJSk4B41k",gameplay:"https://www.youtube.com/watch?v=OurOSsgrPLI",previewLow:"/videos/tyfortress-preview-360p-low.mp4",previewMid:"/videos/tyfortress-preview-360p-mid.mp4",poster:"/images/tyfortress-preview-poster-360p.jpg"},bullets:{technical:["Tower defense system made from scratch","Smart enemy scheduler","Configuration via scriptable objects"],integrations:["Steam","Leaderboards","Achievements","Stats","Cloud Save"],other:["Event-based architecture","Steam integration"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Typing Game","Tower Defense","Achievements","Leaderboards","Cloud Save"]},gt={shortTitle:"Tybot Invasion",fullTitle:"Tybot Invasion: The Typing Runner",engine:"Unity 3D",commercial:"self-published",platforms:["Windows","Linux","Mac"],genres:["Typing","Runner"],links:{steam:"https://store.steampowered.com/app/1636000/Tybot_Invasion_The_Typing_Runner/",trailer:"https://youtu.be/4Kq6gm5CvU4?si=-IWdaEa4vZsats_n",gameplay:"https://youtu.be/OfLBQZMVVUQ",previewLow:"/videos/tybot-preview-360p-low.mp4",previewMid:"/videos/tybot-preview-360p-mid.mp4",poster:"/images/tybot-preview-poster-360p.jpg"},bullets:{technical:["Typing system made from scratch","Procedural level generation","Configuration via scriptable objects"],integrations:["Steam","Leaderboards","Achievements","Stats","Cloud Save"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Typing Game","Runner","Achievements","Leaderboards","Cloud Save"]},ht={shortTitle:"Neon Ships",fullTitle:"Neon Ships: The Type'em Up Shooter",engine:"Unity 3D",commercial:"self-published",platforms:["Windows","Linux","Mac"],genres:["Typing","Shoot'em Up"],links:{steam:"https://store.steampowered.com/app/1528580/Neon_Ships_The_Typeem_Up_Shooter",trailer:"https://youtu.be/MYc81JHaO3A",gameplay:"https://youtu.be/TmkhOMJtYmU",previewLow:"/videos/neonships-preview-360p-low.mp4",previewMid:"/videos/neonships-preview-360p-mid.mp4",poster:"/images/neonships-preview-poster-360p.jpg"},bullets:{technical:["Shoot'em up system made from scratch","Composable shooting patterns","Typing system made from scratch"],integrations:["Steam","Leaderboards","Achievements","Stats","Cloud Save"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Typing Game","Shoot'em Up","Achievements","Leaderboards","Cloud Save"]},vt={shortTitle:"Typomancer",fullTitle:"Typomancer in the Feather's Way",engine:"Unity 3D",commercial:"self-published",platforms:["Windows","Linux","Mac"],genres:["Action Platformer","Shooter","Typing"],links:{steam:"https://store.steampowered.com/app/1714300/Typomancer_in_the_Feathers_Way",trailer:"https://youtu.be/r-heFArzPqI?si=5R6Ev6J13BYeDatI",gameplay:"https://youtu.be/kQzl2wnoM0c?si=135dvP9GoFB45F2W",previewLow:"/videos/typomancer-preview-360p-low.mp4",previewMid:"/videos/typomancer-preview-360p-mid.mp4",poster:"/images/typomancer-preview-poster-360p.jpg"},bullets:{technical:["Typing system made from scratch","Integration between typing and platformer","Corgi customization"],integrations:["Steam","Corgi","Leaderboards","Achievements","Stats","Cloud Save"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Typing Game","Platformer","Achievements","Leaderboards","Cloud Save"]},ft={shortTitle:"King Bullseye",fullTitle:"King Bullseye: The Chess Strike",engine:"Unity 3D",commercial:"self-published",platforms:["Windows","Linux","Mac"],genres:["Shooter"],links:{steam:"https://store.steampowered.com/app/1600870/King_Bullseye_The_Chess_Strike",trailer:"https://youtu.be/GBDkMf0BGyw?si=0m9njEetBE4W-NNb",gameplay:"https://www.youtube.com/watch?v=mXcG0rBt1Wo",previewLow:"/videos/kingbullseye-preview-360p-low.mp4",previewMid:"/videos/kingbullseye-preview-360p-mid.mp4",poster:"/images/kingbullseye-preview-poster-360p.jpg"},bullets:{technical:["Shooter made from scratch","Smart enemy scheduler","Enemies AI with chess-inspired behaviors"],integrations:["Steam","Leaderboards","Achievements","Stats","Cloud Save"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","Shooter","Achievements","Leaderboards","Cloud Save"]},yt={shortTitle:"Sniper Ships",fullTitle:"Sniper Ships: Shoot'em Up on Rails",engine:"Unity 3D",commercial:"self-published",platforms:["Windows","Linux","Mac"],genres:["Shoot'em Up","On-Rails Shooter"],links:{steam:"https://store.steampowered.com/app/1555080/Sniper_Ships_Shootem_Up_on_Rails",trailer:"https://youtu.be/9SAh5-r_C1c?si=q7mjfHBKJsbBSzeN",gameplay:"https://youtu.be/1odKuYLuY64?si=YnQjHMV0ZxDDgLVN",previewLow:"/videos/sniperships-preview-360p-low.mp4",previewMid:"/videos/sniperships-preview-360p-mid.mp4",poster:"/images/sniperships-preview-poster-360p.jpg"},bullets:{technical:["On-Rails Shooter & Shoot'em up systems","Smart enemy scheduler","Composable shooting patterns"],integrations:["Steam","Leaderboards","Achievements","Stats","Cloud Save"]},tags:["Unity","Steam","Windows","Linux","Mac","Indie","On-Rails Shooter","Shoot'em Up","Achievements","Leaderboards","Cloud Save"]},wt={shortTitle:"Xan's Adventure",fullTitle:"Xan's Adventure in the Algy World",engine:"Unity 3D",commercial:"royalty-earning",platforms:["WebGL"],genres:["Educational","Math"],links:{steam:null,trailer:null,gameplay:"https://youtu.be/M1vvi4pJK8A",previewLow:"/videos/xan-preview-360p-low.mp4",previewMid:"/videos/xan-preview-360p-mid.mp4",poster:"/images/xan-preview-poster-360p.jpg"},bullets:{technical:["Expression solver UI made from scratch","Educational game","Internationalization"],integrations:["Legends of Learning SDK"]},tags:["Unity","WebGL","Educational Game","Legends of Learning"]},_t={shortTitle:"Witch Circles",fullTitle:"Witch Circles",engine:"Unity 3D",commercial:"royalty-earning",platforms:["WebGL"],genres:["Educational","Math"],links:{steam:null,trailer:null,gameplay:"https://youtu.be/ZX8zFkrlRZc",previewLow:"/videos/witch-circles-preview-360p-low.mp4",previewMid:"/videos/witch-circles-preview-360p-mid.mp4",poster:"/images/witch-circles-preview-poster-360p.jpg"},bullets:{technical:["Circle math solver UI made from scratch","Educational game","Internationalization"],integrations:["Legends of Learning SDK"]},tags:["Unity","WebGL","Educational Game","Legends of Learning"]},bt={shortTitle:"Sunseek",fullTitle:"Sunseek",engine:"Unity 3D",commercial:"prototype",platforms:["Windows"],genres:["Platformer"],links:{steam:null,trailer:null,gameplay:"https://www.youtube.com/watch?v=-h1pDEJCxKM",previewLow:"/videos/sunseek-preview-360p-low.mp4",previewMid:"/videos/sunseek-preview-360p-mid.mp4",poster:"/images/sunseek-preview-poster-360p.jpg"},bullets:{technical:["Puzzle platformer made from scratch","Personal prototype"]},tags:["Unity","Windows","Personal","Prototype"]},St={shortTitle:"Garby",fullTitle:"Garby Recycling",engine:"Unity 3D",commercial:"self-published",isMobile:!0,platforms:["Android"],genres:["Educational","Recycling"],links:{steam:"",trailer:"",gameplay:"https://youtube.com/shorts/dIAXF-qFObo",previewLow:"/videos/garby-preview-270p-low-vertical.mp4",previewMid:"/videos/garby-preview-270p-mid-vertical.mp4",poster:"/images/garby-preview-poster-360p.jpg"},bullets:{technical:["Smart ad-hoc level generation","Ads and In-App Purchases","Automatic level difficulty scaling"],integrations:["Unity Ads","Unity In-App Purchases"]},tags:["Unity","Android","Mobile","Indie","Recycling","Educational"]},Tt={shortTitle:"Trivia Maze",fullTitle:"Trivia Maze: A Fun Quiz Game",engine:"Unity 3D",commercial:"freelance-job",isMobile:!0,platforms:["Android"],genres:["Trivia","Quiz","Puzzle"],links:{steam:"",trailer:"",gameplay:"https://youtu.be/PCFfw68AC7A",googlePlay:"https://play.google.com/store/apps/details?id=com.neomindgames.triviamaze&hl=pt&gl=US",previewLow:"/videos/triviamaze-preview-270p-low-vertical.mp4",previewMid:"/videos/triviamaze-preview-270p-mid-vertical.mp4",poster:"/images/triviamaze-preview-poster-405p.jpg"},bullets:{technical:["In-game quiz generation via Chat GPT","Authentication with Firebase","Ads and In-App Purchases"],integrations:["Chat GPT","Firebase Auth","Google AdMob","Unity In-App Purchases"]},tags:["Unity","Android","Mobile","Freelancer","Trivia Game","Educational"]};var Lt="games",Ct=0,kt=5,Pt=F.pages.find(function(s){return s.id===Lt}),k=[mt,ht,Tt,ut,St,pt,vt,ft,_t,bt,wt,gt,yt];for(var $=0;$<k.length;$+=1)k[$]=JSON.parse(JSON.stringify(k[$]));for(var B=0;B<Ct;B+=1)k[B].doPreloadVideo=!0;for(var z=0;z<kt;z+=1)k[z].doPreloadPoster=!0;const xt={games:k,title:Pt.subtitle},At={class:"games-page-section page-section"},Mt={class:"title page-section-title"},Et={class:"game-boxes"},Ut={__name:"+Page",setup(s){const{games:c,title:l}=xt;return(o,p)=>(a(),r("section",At,[e("h1",Mt,u(t(l)),1),e("div",Et,[(a(!0),r(M,null,E(t(c),n=>(a(),V(dt,{key:n.shortTitle,game:n},null,8,["game"]))),128))])]))}},It=Object.freeze(Object.defineProperty({__proto__:null,default:Ut},Symbol.toStringTag,{value:"Module"}));var $t=ie("games",F),Dt=$t.title;const Bt=Object.freeze(Object.defineProperty({__proto__:null,title:Dt},Symbol.toStringTag,{value:"Module"})),Wt=[{configName:"onRenderClient",importPath:"vike-vue/renderer/onRenderClient",isValueFile:!1,exportValue:oe,exportName:"onRenderClient"},{configName:"onPageTransitionStart",importPath:"/src/renderer/+onPageTransitionStart.js",isValueFile:!0,exportValues:ae},{configName:"onPageTransitionEnd",importPath:"/src/renderer/+onPageTransitionEnd.js",isValueFile:!0,exportValues:ne},{configName:"Page",importPath:"/src/pages/games/+Page.vue",isValueFile:!0,exportValues:It},{configName:"Layout",importPath:"/src/pages/_layout/Layout.vue",isValueFile:!1,exportValue:re,exportName:"default"},{configName:"title",importPath:"/src/pages/games/+title.js",isValueFile:!0,exportValues:Bt}],jt={onBeforeRenderEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},dataEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},hydrationCanBeAborted:{definedAt:{filePathToShowToUser:"/node_modules/vike-vue/dist/+config.js",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:"true"},favicon:{definedAt:{filePathToShowToUser:"/src/pages/+config.h.js",fileExportPathToShowToUser:["default","favicon"]},valueSerialized:'"/favicon.ico"'}};export{Wt as configValuesImported,jt as configValuesSerialized};