(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{718:function(t,e,n){var content=n(747);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("610d510d",content,!0,{sourceMap:!1})},746:function(t,e,n){"use strict";n(718)},747:function(t,e,n){var r=n(3)(!1);r.push([t.i,".tm-section[data-v-6ffe18fc]{z-index:1}.section-hero[data-v-6ffe18fc]{text-align:left;position:relative}.section-hero .text[data-v-6ffe18fc]{grid-column:span 4}.section-hero .graphics[data-v-6ffe18fc]{position:unset;height:100%;width:170%;margin-top:-20%;margin-left:0;margin-bottom:-90%;overflow:visible}.content[data-v-6ffe18fc]{grid-column:span 4}.desc[data-v-6ffe18fc]{margin-top:var(--spacing-4)}.divider[data-v-6ffe18fc],.item+.item[data-v-6ffe18fc]{margin-top:var(--spacing-8)}.cta[data-v-6ffe18fc]{text-align:left;cursor:pointer}.section-cards[data-v-6ffe18fc]{margin-top:var(--spacing-10)}@media screen and (min-width:768px){.content[data-v-6ffe18fc],.section-hero .text[data-v-6ffe18fc]{grid-column:span 8}}@media screen and (min-width:1200px){.section-hero .text[data-v-6ffe18fc]{grid-column:6/12}.section-hero .graphics[data-v-6ffe18fc]{position:absolute;top:0;z-index:0;height:auto;width:auto;margin:0}.content[data-v-6ffe18fc]{grid-column:6/12}}",""]),t.exports=r},769:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(38),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).only(["title","description","img","slug","author"]).sortBy("index","asc").fetch();case 3:return c=e.sent,e.next=6,n("tags",r.slug).only(["name","description","img","slug"]).sortBy("createdAt","asc").fetch();case 6:return o=e.sent,e.abrupt("return",{articles:c,tags:o});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{currentIndex:8,cards:[{href:"https://discord.com/invite/vcExX9T",overline:"Discord",title:"Developer chat ->"},{href:"https://t.me/cosmosproject",overline:"Telegram",title:"Community chat ->"}]}},head:function(){return{title:"FAQ"}}}),o=(n(746),n(0)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"section-hero section-first"},[t._m(0),t._v(" "),n("graphics-faq-hero",{staticClass:"graphics"})],1),t._v(" "),n("div",{staticClass:"tm-wrapper tm-container tm-grid-base"},[n("div",{staticClass:"content"},[t._l(t.currentIndex,(function(e){return n("div",{key:t.articles[e-1].title,staticClass:"item"},[n("div",{staticClass:"title tm-rf2 tm-bold tm-lh-copy tm-title"},[t._v("\n          "+t._s(t.articles[e-1].title)+"\n        ")]),t._v(" "),n("div",{staticClass:"desc tm-rf0 tm-lh-copy"},[t._v("\n          "+t._s(t.articles[e-1].description)+"\n        ")]),t._v(" "),n("tm-button",{staticClass:"btn",attrs:{"to-link":"internal",to:"/learn/faq/"+t.articles[e-1].slug,size:"l",variant:"text"}},[t._v("Learn more "),n("span",{staticClass:"icon__right"},[t._v("→")])])],1)})),t._v(" "),n("div",{staticClass:"divider"},[n("svg",{attrs:{width:"16",height:"80",viewBox:"0 0 16 80",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M8 64L8 -1.50502e-06",stroke:"currentColor","stroke-opacity":"0.185"}}),t._v(" "),n("path",{attrs:{d:"M16 72H0M8 80V64",stroke:"currentColor"}})])]),t._v(" "),n("div",{staticClass:"cta"},[t.currentIndex!=t.articles.length?n("div",{on:{click:function(e){t.currentIndex=t.articles.length}}},[n("tm-button",{staticClass:"btn tm-rf1 tm-lh-copy tm-medium",attrs:{variant:"text"}},[t._v("Show all "),n("span",{staticClass:"icon__right"},[t._v("↓")])])],1):n("div",{on:{click:function(e){t.currentIndex=6}}},[n("tm-button",{staticClass:"btn tm-rf1 tm-lh-copy tm-medium",attrs:{variant:"text"}},[t._v("Show less "),n("span",{staticClass:"icon__right"},[t._v("↑")])])],1)])],2)]),t._v(" "),n("div",{staticClass:"section-cards tm-wrapper tm-container"},[n("tm-cta-cards",{attrs:{data:t.cards}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tm-wrapper tm-container tm-section tm-grid-base"},[n("div",{staticClass:"text"},[n("div",{staticClass:"title tm-rf5 tm-bold tm-lh-title tm-measure tm-title"},[t._v("\n          Frequently asked questions\n        ")])])])}],!1,null,"6ffe18fc",null);e.default=component.exports;installComponents(component,{GraphicsFaqHero:n(200).default,TmButton:n(37).default,TmCtaCards:n(189).default})}}]);