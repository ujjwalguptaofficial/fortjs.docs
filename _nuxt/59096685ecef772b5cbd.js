(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{156:function(t,e,n){var r=n(159);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(20).default)("2aa3933d",r,!0,{})},157:function(t,e,n){var r=n(161);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(20).default)("7a78b854",r,!0,{})},158:function(t,e,n){"use strict";var r=n(156);n.n(r).a},159:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},160:function(t,e,n){"use strict";var r=n(157);n.n(r).a},161:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},162:function(t,e,n){"use strict";var r,o=n(6),i=n(33),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,r){var o,i=arguments.length,l=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,n,l):o(e,n))||l);return i>3&&l&&Object.defineProperty(e,n,l),l},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeUrl="",e.expandInfo={},e}return l(e,t),e.prototype.mounted=function(){var t=this;this.items.forEach(function(e){t.$set(t.expandInfo,e.id,!1)})},e.prototype.setActiveLink=function(t){this.activeUrl=t},e.prototype.setExpandInfo=function(t){var e=this;this.items.forEach(function(n){n.id===t?1==e.expandInfo[n.id]?e.$set(e.expandInfo,t,!1):e.$set(e.expandInfo,t,!0):1==e.expandInfo[n.id]&&e.$set(e.expandInfo,n.id,!1)})},e.prototype.onMenuClick=function(t){var e=t.target,n=Number(e.dataset.id);this.setExpandInfo(n)},e=a([Object(o.Component)({props:{items:Array}})],e)}(o.Vue),u=(n(158),n(9)),p=Object(u.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"margin-top-50px"},t._l(t.items,function(e){return n("div",{key:e.id,staticClass:"treeview-parent",class:{active:e.url===t.activeUrl}},[n("i",{staticClass:"material-icons",class:{"not-visible":null==e.childs||0==e.childs.length},attrs:{"data-id":e.id},on:{click:t.onMenuClick}},[t._v("\n            "+t._s(!0===t.expandInfo[e.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),t._v(" "),n("div",{staticClass:"text",attrs:{"data-id":e.id},on:{click:t.onMenuClick}},["null"!=e.url?n("a",{attrs:{"data-id":e.id,href:"/tutorial/"+e.url}},[t._v(t._s(e.text))]):n("span",{attrs:{"data-id":e.id}},[t._v(" "+t._s(e.text))])]),t._v(" "),null!=e.childs?n("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.expandInfo[e.id],expression:"expandInfo[item.id] === true"}]},t._l(e.childs,function(e){return n("li",{key:e.id,class:{"link-active":e.url===t.activeUrl}},[n("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))])])})):t._e()])}))},[],!1,null,null,null);p.options.__file="treeview.vue";var c=p.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View",url:"view"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Components",url:"components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:10,text:"Concepts",url:"null",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"}]},{id:11,text:"Types",url:"null",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:12,text:"Advanced",url:"null",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"},{id:4,text:"View Engine",url:"view-engine"},{id:5,text:"Swagger",url:"swagger"},{id:6,text:"GraphQl",url:"graphql"},{id:7,text:"Socket.io",url:"socket-io"}]},{id:13,text:"Deployment",url:"deployment"}],f=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(t,e,n,r){var o,i=arguments.length,l=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,n,l):o(e,n))||l);return i>3&&l&&Object.defineProperty(e,n,l),l},C=function(t){function e(){var e=t.call(this)||this;return e.version=2,e.showMenu=!1,e.searchValue="",e.searchResult="",e.catchEvents(),e}return f(e,t),e.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){},e.prototype.isNullOrEmpty=function(t){return null==t||0==t.length},e.prototype.mounted=function(){var t,e=this,n=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(r){if(null!=r.childs){var o=r.childs.find(function(t){return n===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=o)return t=o.url,e.$refs.linkContainer.setExpandInfo(r.id),!1}return!e.isNullOrEmpty(t)||n!==(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")||(t=r.url,r.childs&&r.childs.length>0&&e.$refs.linkContainer.setExpandInfo(r.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.head=function(){return{title:"FortJs - "+this.pageTitle}},e.prototype.getVersion=function(){return"1"},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e=h([Object(o.Component)({components:{TreeView:c},props:{innerHtml:String,pageTitle:String}})],e)}(i.a),g=(n(160),Object(u.a)(C,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":this.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[e("TreeView",{ref:"linkContainer",attrs:{items:this.links}})],1),this._v(" "),e("v-flex",{class:{"padding-left-15px":this.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[e("div",{staticClass:"margin-top-20px",domProps:{innerHTML:this._s(this.tutorialHtml)}})]),this._v(" "),e("v-flex",{staticClass:"md2 margin-top-50px text-center"})],1)},[],!1,null,null,null));g.options.__file="tutorial.vue";e.a=g.exports},202:function(t,e,n){"use strict";n.r(e);var r,o=n(6),i=n(162),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,r){var o,i=arguments.length,l=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,n,l):o(e,n))||l);return i>3&&l&&Object.defineProperty(e,n,l),l},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EFortJs%20is%20built%20using%20typescript%20and%20uses%20es6%20pattern.%20That's%20why%20we%20need%20webpack%20or%20babel%20to%20transpile%20es6%20codes%20to%20nodejs%20compatible%20code.%3C/p%3E%0A%3Cp%3EBut%20dont%20worry%20about%20all%20the%20configuration,%20we%20we%20have%20created%20different%20starter%20template%20for%20you.%20You%20just%20need%20to%20download/clone%20the%20repo%20based%20on%20your%20preferred%20language%20and%20start%20writing%20your%20code.%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3ETypescript%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/fortjs-typescript-starter%22%3Ehttps://github.com/ujjwalguptaofficial/fortjs-typescript-starter%3C/a%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EJavascript%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/fortjs-javascript-starter%22%3Ehttps://github.com/ujjwalguptaofficial/fortjs-javascript-starter%3C/a%3E%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0AAfter%20downloading%20the%20repo%20-%20open%20the%20console,%20move%20to%20project%20directory%20and%20run%20the%20commands%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Ccode%3Enpm%20install%3C/code%3E%20-%20It%20will%20install%20all%20the%20dependency%3C/li%3E%0A%3Cli%3E%3Ccode%3Enpm%20run%20start%3C/code%3E%20-%20It%20will%20run%20the%20app.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0ABrowser%20the%20url%20mentioned%20in%20the%20console%20(http://localhost:4000/)%3C/p%3E%0A%3Cp%3EYou%20will%20see%20something%20like%20below%20-%20%3C/p%3E%0A%3Cdiv%20style=%22text-align:center;%22%3E%0A%3Cimg%20src=%22/img/starter_screenshot.png%22%20style=%22height:400px%22%3E%0A%3C/div%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22understandingproject%22%3EUnderstanding%20project%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0ANow%20you%20must%20be%20thinking%20-%20where%20is%20the%20code%20which%20is%20rendering%20output%20to%20browser%20?%20Let's%20see%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3EOpen%20%20folder%20controllers.%20Inside%20the%20controllers%20you%20will%20see%20a%20file%20name%20-%20default_controller,%20lets%20open%20it%20and%20observe%20the%20code.%20The%20file%20contains%20a%20class%20DefaultController%20-%20this%20is%20a%20controller%20class%20and%20it%20contains%20list%20of%20resources%20of%20particular%20type.%20Please%20check%20out%20%3Ca%20href=%22/tutorial/controller%22%3Econtroller%3C/a%3E%20doc%20for%20knowing%20about%20controller.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EInside%20the%20class%20DefaultController%20-&gt;%20%20you%20will%20see%20a%20method%20'index'%20-%20this%20is%20the%20one%20which%20is%20rendering%20output%20to%20browser.%20On%20top%20of%20'index'%20method%20we%20are%20using%20decorator%20'defaultWorker'.%20It%20tells%20fortjs%20to%20make%20this%20method%20visible%20for%20http%20request.%20Please%20check%20out%20%3Ca%20href=%22/tutorial/worker%22%3Eworker%3C/a%3E%20doc%20for%20more%20info%20about%20worker.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EInside%20the%20method,%20we%20are%20using%20%3Ccode%3EviewResult%3C/code%3E%20to%20return%20a%20view%20with%20location%20%22default/index.html%22.%20But%20where%20is%20the%20view%20code%20?%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EUnder%20Views%20folder%20-%20&gt;%20open%20default%20folder%20-%20&gt;%20open%20index.html.%20This%20%20is%20our%20view%20code.%20Please%20check%20%3Ca%20href=%22/tutorial/view%22%3Eview%3C/a%3E%20doc%20for%20more%20info.%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22checkoutsomeotherlinks%22%3E*Check%20out%20some%20other%20links%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22https://medium.com/fortjs/rest-api-using-typescript-94004d9ae5e6%22%3ECreating%20REST%20API%20using%20Typescript%3C/a%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22https://medium.com/fortjs/rest-api-in-nodejs-using-es6-227765440b2b%22%3ECreating%20REST%20API%20using%20es6%3C/a%3E%3C/p%3E%3C/li%3E%0A%3C/ul%3E",e.title="Get Started",e}return l(e,t),e=a([Object(o.Component)({components:{Tutorial:i.a}})],e)}(o.Vue),u=n(9),p=Object(u.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);p.options.__file="get-started.vue";e.default=p.exports}}]);