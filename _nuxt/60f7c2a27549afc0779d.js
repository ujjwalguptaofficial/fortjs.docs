(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{159:function(t,e,n){var r=n(162);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(18).default)("2aa3933d",r,!0,{})},160:function(t,e,n){var r=n(164);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(18).default)("7a78b854",r,!0,{})},161:function(t,e,n){"use strict";var r=n(159);n.n(r).a},162:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},163:function(t,e,n){"use strict";var r=n(160);n.n(r).a},164:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},165:function(t,e,n){"use strict";var r,i=n(6),o=n(33),s=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeUrl="",e.expandInfo={},e}return s(e,t),e.prototype.mounted=function(){var t=this;this.items.forEach(function(e){t.$set(t.expandInfo,e.id,!1)})},e.prototype.setActiveLink=function(t){this.activeUrl=t},e.prototype.setExpandInfo=function(t){var e=this;this.items.forEach(function(n){n.id===t?1==e.expandInfo[n.id]?e.$set(e.expandInfo,t,!1):e.$set(e.expandInfo,t,!0):1==e.expandInfo[n.id]&&e.$set(e.expandInfo,n.id,!1)})},e.prototype.onMenuClick=function(t){var e=t.target,n=Number(e.dataset.id);this.setExpandInfo(n)},e=a([Object(i.Component)({props:{items:Array}})],e)}(i.Vue),u=(n(161),n(9)),c=Object(u.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"margin-top-50px"},t._l(t.items,function(e){return n("div",{key:e.id,staticClass:"treeview-parent",class:{active:e.url===t.activeUrl}},[n("i",{staticClass:"material-icons",class:{"not-visible":null==e.childs||0==e.childs.length},attrs:{"data-id":e.id},on:{click:t.onMenuClick}},[t._v("\n            "+t._s(!0===t.expandInfo[e.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),t._v(" "),n("div",{staticClass:"text",attrs:{"data-id":e.id},on:{click:t.onMenuClick}},["null"!=e.url?n("a",{attrs:{"data-id":e.id,href:"/tutorial/"+e.url}},[t._v(t._s(e.text))]):n("span",{attrs:{"data-id":e.id}},[t._v(" "+t._s(e.text))])]),t._v(" "),null!=e.childs?n("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.expandInfo[e.id],expression:"expandInfo[item.id] === true"}]},t._l(e.childs,function(e){return n("li",{key:e.id,class:{"link-active":e.url===t.activeUrl}},[n("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))])])})):t._e()])}))},[],!1,null,null,null);c.options.__file="treeview.vue";var p=c.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View",url:"view"},{id:"validation",text:"Validation",url:"validation"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Logger",url:"logger"},{id:"middleware",text:"Middleware",url:"middleware"},{id:10,text:"Components",url:"components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:"decorator",text:"Decorators",url:"decorator",childs:[{id:"expect_body",url:"decorator/expect-body",text:"ExpectBody"},{id:"expect_query",url:"decorator/expect-query",text:"ExpectQuery"}]},{id:11,text:"Concepts",url:"null",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"},{id:8,text:"Dependency Injection",url:"dependency-injection"}]},{id:12,text:"Types",url:"null",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:13,text:"Advanced",url:"null",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"},{id:4,text:"View Engine",url:"view-engine"},{id:6,text:"GraphQl",url:"graphql"},{id:7,text:"Socket.io",url:"socket-io"}]},{id:14,text:"Swagger / Open API",url:"swagger",childs:[{id:1,text:"Initiate",url:"swagger/initiate"},{id:2,text:"Swagger Model",url:"swagger/model"}]},{id:15,text:"Deployment",url:"deployment"},{id:16,text:"Test",url:"test"}],f=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},x=function(t){function e(){var e=t.call(this)||this;return e.version=1,e.showMenu=!1,e.searchValue="",e.searchResult="",e.catchEvents(),e}return f(e,t),e.prototype.catchEvents=function(){o.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){},e.prototype.isNullOrEmpty=function(t){return null==t||0==t.length},e.prototype.mounted=function(){var t,e=this,n=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(r){if(null!=r.childs){var i=r.childs.find(function(t){return n===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=i)return t=i.url,e.$refs.linkContainer.setExpandInfo(r.id),!1}return!e.isNullOrEmpty(t)||n!==(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")||(t=r.url,r.childs&&r.childs.length>0&&e.$refs.linkContainer.setExpandInfo(r.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.head=function(){return{title:"FortJs - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},e.prototype.getVersion=function(){return"1"},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.getCurrentUrlIndex=function(){var t=this,e=this.$route.path;this.relativeUrl;return this.links.findIndex(function(n){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(e.prototype,"docToEdit",{get:function(){var t=this.allLinks_[this.getCurrentUrlIndex()];return t?t.url:null},enumerable:!0,configurable:!0}),e=h([Object(i.Component)({components:{TreeView:p},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],e)}(o.a),g=(n(163),Object(u.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[n("TreeView",{ref:"linkContainer",attrs:{items:t.links}})],1),t._v(" "),n("v-flex",{class:{"padding-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[n("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),n("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[null!=t.docToEdit?n("v-btn",{staticClass:"margin-bottom-140px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/fortjs/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("i",{staticClass:"fab fa-gitter"})]):t._e(),t._v(" "),null!=t.docToEdit?n("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/fortjs.docs/edit/master/docs/tutorial/"+t.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("v-icon",{staticStyle:{display:"inline-flex"}},[t._v("edit")])],1):t._e(),t._v(" "),null!=t.docToEdit?n("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://twitter.com/ujjwal_kr_gupta",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("i",{staticClass:"fab fa-twitter"})]):t._e()],1)],1)},[],!1,null,null,null));g.options.__file="tutorial.vue";e.a=g.exports},225:function(t,e,n){"use strict";n.r(e);var r,i=n(6),o=n(165),s=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3E%3Ccode%3Esession%3C/code%3E%20is%20class%20member%20of%20Wall,%20Guard%20,%20Shield%20and%20Controller.%20%3C/p%3E%0A%3Cp%3ELet's%20see%20how%20we%20can%20use%20session%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20DefaultWorker,%20textResult,%20viewResult%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20DefaultController%20extends%20Controller%20%7B%0A%20%20%20%20@DefaultWorker()%0A%20%20%20%20async%20default()%20%7B%0A%20%20%20%20%20%20%20%20//%20check%20if%20session%20exist%0A%20%20%20%20%20%20%20%20const%20isSessionExist%20=%20await%20this.session.isExist('userId');%0A%0A%20%20%20%20%20%20%20%20//%20add%20value%20to%20session%0A%20%20%20%20%20%20%20%20await%20this.session.set('userId',%2045);%0A%0A%20%20%20%20%20%20%20%20//%20get%20session%20value%0A%20%20%20%20%20%20%20%20const%20userIdFromSession%20=%20await%20this.session.get('userId');%0A%0A%20%20%20%20%20%20%20%20//%20remove%20session%0A%20%20%20%20%20%20%20%20await%20this.session.remove('session_name');%0A%0A%20%20%20%20%20%20%20%20//%20set%20multiple%20session%20at%20a%20time%0A%20%20%20%20%20%20%20%20this.session.setMany(%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20key:%20'user_id',%0A%20%20%20%20%20%20%20%20%20%20%20%20value:%201%0A%20%20%20%20%20%20%20%20%7D,%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20key:%20'name',%0A%20%20%20%20%20%20%20%20%20%20%20%20value:%20'ujjwal%20gupta'%0A%20%20%20%20%20%20%20%20%7D%5D)%0A%0A%20%20%20%20%20%20%20%20const%20result%20=%20await%20viewResult('controller:default,action:default');%0A%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E",e.title="Session",e.keywords="session, uses, example, fortjs, node",e.description="Using session in fortjs",e}return s(e,t),e=a([Object(i.Component)({components:{Tutorial:o.a}})],e)}(i.Vue),u=n(9),c=Object(u.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="session.vue";e.default=c.exports}}]);