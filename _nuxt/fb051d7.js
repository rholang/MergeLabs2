(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{717:function(t,e,r){var content=r(745);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("26d44c64",content,!0,{sourceMap:!1})},744:function(t,e,r){"use strict";r(717)},745:function(t,e,r){var n=r(3)(!1);n.push([t.i,".btn-group[data-v-037907f1]{display:flex;flex-direction:column;margin-top:var(--spacing-8);grid-gap:0 var(--spacing-7);gap:0 var(--spacing-7)}.grid-col-2[data-v-037907f1]{display:grid;grid-template-columns:repeat(1,1fr)}.center[data-v-037907f1]{display:grid;align-items:center;justify-items:center;place-items:center;margin-right:auto;margin-left:auto;width:100%}.crosshair[data-v-037907f1]{margin-bottom:7rem}.section-hero[data-v-037907f1]{text-align:center}.section-hero .demo[data-v-037907f1],.section-hero .text[data-v-037907f1]{grid-column:1/-1;position:relative;z-index:1}.section-hero .overline[data-v-037907f1]{color:var(--white-500)}.section-hero .title[data-v-037907f1]{margin-top:var(--spacing-5)}.section-hero .subtitle[data-v-037907f1]{margin-top:var(--spacing-7);margin-right:auto;margin-left:auto}@media screen and (min-width:576px){.btn-group[data-v-037907f1]{display:block}.grid-col-2[data-v-037907f1]{grid-template-columns:repeat(2,1fr)}}@media screen and (min-width:1200px){.section-hero .text[data-v-037907f1]{grid-column:2/span 10}}",""]),t.exports=n},768:function(t,e,r){"use strict";r.r(e);r(24),r(16),r(29),r(30);var n=r(6),o=r(10),l=(r(38),r(23),r(61),r(43),r(266)),c=r(27);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{SectionItems:r(192).default},data:function(){return{cards:[{href:"/learn/get-atom",graphics:"graphics-cta-token-holders",overline:"Token Holders",title:"Start staking ->"},{href:"/starport",graphics:"graphics-cta-developers",overline:"Developers",title:"Start building ->"}]}},computed:m(m({},Object(c.b)(["wallets"])),{},{allWallets:function(){return this.hubWallets(this.wallets)},webWallets:function(){return this.hubWallets(this.wallets).filter((function(t){return t.fields.platforms.includes("Web")}))},iosWallets:function(){return this.hubWallets(this.wallets).filter((function(t){return t.fields.platforms.includes("iOS")}))},androidWallets:function(){return this.hubWallets(this.wallets).filter((function(t){return t.fields.platforms.includes("Android")}))}}),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("initApps");case 2:case"end":return e.stop()}}),e)})))()},methods:{hubWallets:function(t){if(t&&t&&t.length>0){var e=t.filter((function(t){return t.fields.active})).filter((function(t){return t.fields})).filter((function(t){return t.fields.tokens&&t.fields.tokens.length>0})).filter((function(t){return t.fields.tokens.includes("ATOM - Cosmos Hub")}));return Object(l.orderBy)(e,["fields.name"],["asc"])}return[]}},head:function(){return{title:"Wallets & Block Explorers - Ecosystem"}}},v=(r(744),r(0)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("div",{staticClass:"section-hero section-first"},[r("div",{staticClass:"tm-wrapper tm-section tm-container tm-grid-base"},[r("div",{staticClass:"text"},[r("div",{staticClass:"overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-muted"},[t._v("\n          Ecosystem\n        ")]),t._v(" "),r("h1",{staticClass:"title tm-rf6 tm-bold tm-lh-title tm-title"},[t._v("\n          "+t._s(t.allWallets.length)+" wallets and block explorers for Cosmos\n        ")]),t._v(" "),r("p",{staticClass:"subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure"},[t._v("\n          Discover a wide variety of apps, blockchains, wallets and explorers,\n          built in the Cosmos ecosystem by developers and contributors from\n          across the globe.\n        ")]),t._v(" "),r("div",{staticClass:"btn-group"},[r("tm-button",{staticClass:"btn",attrs:{"to-link":"internal",to:"/ecosystem/tokens",size:"m",variant:"text"}},[t._v("Tokens\n          ")]),t._v(" "),r("tm-button",{staticClass:"btn",attrs:{"to-link":"internal",to:"/ecosystem/apps",size:"m",variant:"text"}},[t._v("Apps & Services\n          ")]),t._v(" "),r("tm-button",{staticClass:"btn",attrs:{"to-link":"internal",to:"/ecosystem/wallets",size:"m"}},[t._v("Wallets\n          ")])],1)])])]),t._v(" "),r("section-items",{attrs:{"section-title":"Web Wallets",items:t.webWallets}}),t._v(" "),r("section-items",{attrs:{"section-title":"iOS Wallets",items:t.iosWallets}}),t._v(" "),r("section-items",{attrs:{"section-title":"Android Wallets",items:t.androidWallets}}),t._v(" "),r("div",{staticClass:"tm-wrapper tm-container tm-section"},[r("tm-crosshair",{staticClass:"center crosshair"}),t._v(" "),r("tm-cta-cards",{attrs:{data:t.cards}})],1)],1)}),[],!1,null,"037907f1",null);e.default=component.exports;installComponents(component,{TmButton:r(37).default,TmCrosshair:r(86).default,TmCtaCards:r(189).default})}}]);