(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{156:function(t,e,n){var r=n(159);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(20).default)("2aa3933d",r,!0,{})},157:function(t,e,n){var r=n(161);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(20).default)("7a78b854",r,!0,{})},158:function(t,e,n){"use strict";var r=n(156);n.n(r).a},159:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},160:function(t,e,n){"use strict";var r=n(157);n.n(r).a},161:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},162:function(t,e,n){"use strict";var r,o=n(6),i=n(33),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,r){var o,i=arguments.length,l=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,n,l):o(e,n))||l);return i>3&&l&&Object.defineProperty(e,n,l),l},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeUrl="",e.expandInfo={},e}return l(e,t),e.prototype.mounted=function(){var t=this;this.items.forEach(function(e){t.$set(t.expandInfo,e.id,!1)})},e.prototype.setActiveLink=function(t){this.activeUrl=t},e.prototype.setExpandInfo=function(t){var e=this;this.items.forEach(function(n){n.id===t?1==e.expandInfo[n.id]?e.$set(e.expandInfo,t,!1):e.$set(e.expandInfo,t,!0):1==e.expandInfo[n.id]&&e.$set(e.expandInfo,n.id,!1)})},e.prototype.onMenuClick=function(t){var e=t.target,n=Number(e.dataset.id);this.setExpandInfo(n)},e=a([Object(o.Component)({props:{items:Array}})],e)}(o.Vue),p=(n(158),n(9)),u=Object(p.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"margin-top-50px"},t._l(t.items,function(e){return n("div",{key:e.id,staticClass:"treeview-parent",class:{active:e.url===t.activeUrl}},[n("i",{staticClass:"material-icons",class:{"not-visible":null==e.childs||0==e.childs.length},attrs:{"data-id":e.id},on:{click:t.onMenuClick}},[t._v("\n            "+t._s(!0===t.expandInfo[e.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),t._v(" "),n("div",{staticClass:"text",attrs:{"data-id":e.id},on:{click:t.onMenuClick}},["null"!=e.url?n("a",{attrs:{"data-id":e.id,href:"/tutorial/"+e.url}},[t._v(t._s(e.text))]):n("span",{attrs:{"data-id":e.id}},[t._v(" "+t._s(e.text))])]),t._v(" "),null!=e.childs?n("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.expandInfo[e.id],expression:"expandInfo[item.id] === true"}]},t._l(e.childs,function(e){return n("li",{key:e.id,class:{"link-active":e.url===t.activeUrl}},[n("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))])])})):t._e()])}))},[],!1,null,null,null);u.options.__file="treeview.vue";var c=u.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View",url:"view"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Components",url:"components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:10,text:"Concepts",url:"null",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"}]},{id:11,text:"Types",url:"null",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:12,text:"Advanced",url:"null",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"},{id:4,text:"View Engine",url:"view-engine"},{id:5,text:"Swagger",url:"swagger"},{id:6,text:"GraphQl",url:"graphql"},{id:7,text:"Socket.io",url:"socket-io"}]},{id:13,text:"Deployment",url:"deployment"}],f=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(t,e,n,r){var o,i=arguments.length,l=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,n,l):o(e,n))||l);return i>3&&l&&Object.defineProperty(e,n,l),l},g=function(t){function e(){var e=t.call(this)||this;return e.version=1,e.showMenu=!1,e.searchValue="",e.searchResult="",e.catchEvents(),e}return f(e,t),e.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){},e.prototype.isNullOrEmpty=function(t){return null==t||0==t.length},e.prototype.mounted=function(){var t,e=this,n=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(r){if(null!=r.childs){var o=r.childs.find(function(t){return n===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=o)return t=o.url,e.$refs.linkContainer.setExpandInfo(r.id),!1}return!e.isNullOrEmpty(t)||n!==(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")||(t=r.url,r.childs&&r.childs.length>0&&e.$refs.linkContainer.setExpandInfo(r.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.head=function(){return{title:"FortJs - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords}]}},e.prototype.getVersion=function(){return"1"},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e=h([Object(o.Component)({components:{TreeView:c},props:{innerHtml:String,pageTitle:String,pageKeywords:String}})],e)}(i.a),x=(n(160),Object(p.a)(g,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":this.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[e("TreeView",{ref:"linkContainer",attrs:{items:this.links}})],1),this._v(" "),e("v-flex",{class:{"padding-left-15px":this.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[e("div",{staticClass:"margin-top-20px",domProps:{innerHTML:this._s(this.tutorialHtml)}})]),this._v(" "),e("v-flex",{staticClass:"md2 margin-top-50px text-center"})],1)},[],!1,null,null,null));x.options.__file="tutorial.vue";e.a=x.exports},222:function(t,e,n){"use strict";n.r(e);var r,o=n(6),i=n(162),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,r){var o,i=arguments.length,l=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,n,l):o(e,n))||l);return i>3&&l&&Object.defineProperty(e,n,l),l},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EWall%20is%20security%20layer%20on%20top%20of%20your%20app.%20It%20controls%20whether%20a%20request%20should%20be%20allowed%20to%20enter%20inside%20the%20app.%20It%20can%20also%20be%20used%20to%20do%20some%20tasks%20and%20pass%20data%20inside%20app.%3C/p%3E%0A%3Cp%3EThere%20can%20be%20multiple%20wall%20for%20an%20app%20&amp;%20all%20walls%20are%20called%20in%20the%20same%20order%20as%20they%20are%20defined.%3C/p%3E%0A%3Cp%3EWall%20has%20two%20events%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EonIncoming%3C/strong%3E%20-%20called%20when%20a%20request%20wants%20to%20enter%20inside%20the%20fort%20(app).%20If%20this%20events%20returns%20null%20means%20request%20is%20allowed%20to%20enter%20otherwise%20rejects%20with%20the%20result%20returned.%3C/p%3E%0A%3Cp%3EIf%20there%20are%20multiple%20walls%20then%20%22onIncoming%22%20is%20called%20in%20order%20as%20they%20are%20defined.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EonOutgoing%3C/strong%3E%20-%20called%20when%20a%20request%20is%20about%20to%20leave.%20This%20is%20an%20optional%20event%20&amp;%20Result%20returned%20from%20this%20event%20is%20ignored.%3C/p%3E%0A%3Cp%3EIf%20there%20are%20multiple%20walls%20then%20%22onOutgoing%22%20is%20called%20in%20reverse%20order%20as%20they%20are%20defined.%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3EA%20wall%20have%20access%20to%20following%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ERequest%20-%20%3Ca%20href=%22/tutorial/http-request%22%3Erequest%3C/a%3E%3C/li%3E%0A%3Cli%3EResponse%20-%20%3Ca%20href=%22/tutorial/http-response%22%3Eresponse%3C/a%3E%3C/li%3E%0A%3Cli%3ECookie%20-%20%3Ca%20href=%22/tutorial/cookie%22%3Ecookie%3C/a%3E%3C/li%3E%0A%3Cli%3ESession%20-%20%3Ca%20href=%22/tutorial/session%22%3Esession%3C/a%3E%3C/li%3E%0A%3Cli%3EQuery%20string%20data%20-%20%3Ca%20href=%22/tutorial/query%22%3Equery%3C/a%3E%3C/li%3E%0A%3Cli%3EData%20from%20other%20components%20-%20%3Ca%20href=%22/tutorial/data%22%3Edata%3C/a%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22creatingwall%22%3ECreating%20wall%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AWall%20is%20a%20class%20which%20-%20Extends%20the%20class%20%22Wall%22%20from%20fortjs.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Wall%20%7D%20from%20%22fortjs%22%0A%0Aexport%20class%20AppWall%20extends%20Wall%20%7B%0A%20%20%20%20async%20onIncoming()%20%7B%0A%20%20%20%20%20%20%20%20console.log(%22request%20is%20asking%20for%20entering%20into%20the%20fort%22);%0A%20%20%20%20%20%20%20%20if%20(some%20condition)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20block%20request%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20textResult(%22This%20request%20is%20blocked%20by%20wall%22);%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20allow%20request%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20null;%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%7D%0A%0A%20%20%20%20async%20onOutgoing()%20%7B%0A%20%20%20%20%20%20%20%20//%20this%20events%20can%20be%20used%20to%20set%20headers%20or%20log%20datas%20etc%0A%20%20%20%20%20%20%20%20console.log(%22request%20finished%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20you%20have%20defined%20the%20wall%20but%20in%20order%20to%20use%20this%20wall,%20you%20need%20to%20assign%20it%20to%20App.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Fort%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20UserController%20%7D%20from%20%22./controllers%22;%0Aimport%20%7B%20AppWall%20%7D%20from%20%22./walls/app_wall%22;%0A%0Aclass%20App%20extends%20Fort%20%7B%0A%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20//add%20routers%0A%20%20%20%20%20%20%20%20this.routers%20=%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20controller:%20UserController,%0A%20%20%20%20%20%20%20%20%20%20%20%20path:%20%22/user%22%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%20%20//%20adding%20AppWall%20to%20the%20walls%20array%0A%20%20%20%20%20%20%20%20this.walls%20=%20%5BAppWall%5D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E",e.title="Wall",e.keywords="wall, component, options, fortjs, node",e}return l(e,t),e=a([Object(o.Component)({components:{Tutorial:i.a}})],e)}(o.Vue),p=n(9),u=Object(p.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="wall.vue";e.default=u.exports}}]);