(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{773:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(38),n(17),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("tags").where({slug:{$contains:r.tag}}).limit(1).fetch();case 3:return c=e.sent,o=c.length>0?c[0]:{},e.next=7,n("articles",r.slug).where({tags:{$contains:o.name}}).sortBy("createdAt","asc").fetch();case 7:return l=e.sent,e.abrupt("return",{articles:l,tag:o});case 9:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),o=n(0),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tm-section tm-wrapper tm-container"},[n("div",[n("nuxt-link",{attrs:{to:"/"}},[n("Logo")],1),t._v(" "),n("div",[n("div",[n("h1",[t._v("\n          "+t._s(t.tag.name)+"\n        ")]),t._v(" "),n("p",[t._v(t._s(t.tag.description))]),t._v(" "),n("nuxt-content",{attrs:{document:t.tag}})],1)])],1),t._v(" "),n("div",[n("nuxt-link",{attrs:{to:"/learn/faq"}},[n("p",[t._v("Back to All Articles")])]),t._v(" "),n("h3",[t._v("Articles tagged "+t._s(t.tag.name)+":")]),t._v(" "),n("ul",t._l(t.articles,(function(article){return n("li",{key:article.slug},[n("nuxt-link",{attrs:{to:"/learn/faq/"+article.slug}},[n("div",[n("h2",[t._v(t._s(article.title))]),t._v(" "),n("p",[t._v(t._s(article.description))]),t._v(" "),n("p",[t._v("\n              "+t._s(t.formatDate(article.updatedAt))+"\n            ")])])])],1)})),0)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);