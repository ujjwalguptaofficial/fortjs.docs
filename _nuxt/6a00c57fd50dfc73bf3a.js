(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{159:function(t,e,r){var o=r(162);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,r(18).default)("2aa3933d",o,!0,{})},160:function(t,e,r){var o=r(164);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,r(18).default)("478f6032",o,!0,{})},161:function(t,e,r){"use strict";var o=r(159);r.n(o).a},162:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},163:function(t,e,r){"use strict";var o=r(160);r.n(o).a},164:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100%;height:auto\n}",""])},165:function(t,e,r){"use strict";var o,i=r(6),n=r(33),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),l=function(t,e,r,o){var i,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(n<3?i(a):n>3?i(e,r,a):i(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeUrl="",e.expandInfo={},e}return a(e,t),e.prototype.mounted=function(){var t=this;this.items.forEach(function(e){t.$set(t.expandInfo,e.id,!1)})},e.prototype.setActiveLink=function(t){this.activeUrl=t},e.prototype.setExpandInfo=function(t){var e=this;this.items.forEach(function(r){r.id===t?1==e.expandInfo[r.id]?e.$set(e.expandInfo,t,!1):e.$set(e.expandInfo,t,!0):1==e.expandInfo[r.id]&&e.$set(e.expandInfo,r.id,!1)})},e.prototype.onMenuClick=function(t){var e=t.target,r=Number(e.dataset.id);this.setExpandInfo(r)},e=l([Object(i.Component)({props:{items:Array}})],e)}(i.Vue),c=(r(161),r(9)),p=Object(c.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"margin-top-50px"},t._l(t.items,function(e){return r("div",{key:e.id,staticClass:"treeview-parent",class:{active:e.url===t.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==e.childs||0==e.childs.length},attrs:{"data-id":e.id},on:{click:t.onMenuClick}},[t._v("\n            "+t._s(!0===t.expandInfo[e.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),t._v(" "),r("div",{staticClass:"text",attrs:{"data-id":e.id},on:{click:t.onMenuClick}},["null"!=e.url?r("a",{attrs:{"data-id":e.id,href:"/tutorial/"+e.url}},[t._v(t._s(e.text))]):r("span",{attrs:{"data-id":e.id}},[t._v(" "+t._s(e.text))])]),t._v(" "),null!=e.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.expandInfo[e.id],expression:"expandInfo[item.id] === true"}]},t._l(e.childs,function(e){return r("li",{key:e.id,class:{"link-active":e.url===t.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))])])})):t._e()])}))},[],!1,null,null,null);p.options.__file="treeview.vue";var d=p.exports,u=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View",url:"view"},{id:"validation",text:"Validation",url:"validation"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Logger",url:"logger"},{id:"middleware",text:"Middleware",url:"middleware"},{id:10,text:"Components",url:"components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:"decorator",text:"Decorators",url:"decorator",childs:[{id:"expect_body",url:"decorator/expect-body",text:"ExpectBody"},{id:"expect_query",url:"decorator/expect-query",text:"ExpectQuery"}]},{id:11,text:"Concepts",url:"null",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"},{id:8,text:"Dependency Injection",url:"dependency-injection"}]},{id:12,text:"Types",url:"null",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:13,text:"Advanced",url:"null",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"},{id:4,text:"View Engine",url:"view-engine"},{id:6,text:"GraphQl",url:"graphql"},{id:7,text:"Socket.io",url:"socket-io"}]},{id:14,text:"Swagger / Open API",url:"swagger",childs:[{id:1,text:"Initiate",url:"swagger/initiate"},{id:2,text:"Swagger Model",url:"swagger/model"}]},{id:15,text:"Deployment",url:"deployment"},{id:16,text:"Test",url:"test"}],f=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),h=function(t,e,r,o){var i,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(n<3?i(a):n>3?i(e,r,a):i(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a},C=function(t){function e(){var e=t.call(this)||this;return e.version=1,e.jsstoreText=["Store data in browser using jsstore","Improve your web app performance by storing data in client side","Easy indexeddb development using jsstore"],e.adIndex=-1,e.showMenu=!1,e.searchValue="",e.searchResult="",e.catchEvents(),e}return f(e,t),e.prototype.catchEvents=function(){n.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){},e.prototype.isNullOrEmpty=function(t){return null==t||0==t.length},e.prototype.mounted=function(){var t=this;this.showAds();var e,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(o){if(null!=o.childs){var i=o.childs.find(function(e){return r===(""+t.relativeUrl+e.url.toLowerCase()).replace(/\//g,"")});if(null!=i)return e=i.url,t.$refs.linkContainer.setExpandInfo(o.id),!1}return!t.isNullOrEmpty(e)||r!==(""+t.relativeUrl+o.url.toLowerCase()).replace(/\//g,"")||(e=o.url,o.childs&&o.childs.length>0&&t.$refs.linkContainer.setExpandInfo(o.id),!1)}),e&&e.length>0&&this.$refs.linkContainer.setActiveLink(e)},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.head=function(){return{title:"FortJs - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},e.prototype.getVersion=function(){return"1"},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.getCurrentUrlIndex=function(){var t=this,e=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(e.prototype,"docToEdit",{get:function(){var t=this.allLinks_[this.getCurrentUrlIndex()];return t?t.url:null},enumerable:!0,configurable:!0}),e.prototype.showAds=function(){var t=this,e=++this.adIndex;e>=this.jsstoreText.length&&(e=this.adIndex=0),this.adIndex=e,setTimeout(function(){t.showAds()},2e3)},e=h([Object(i.Component)({components:{TreeView:d},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],e)}(n.a),g=(r(163),Object(c.a)(C,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),t._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("TreeView",{ref:"linkContainer",attrs:{items:t.links}})],1),t._v(" "),r("v-flex",{class:{"padding-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://jsstore.net/"}},[r("img",{staticClass:"ad-image",attrs:{src:"http://jsstore.net/img/JsStore_350_155.png"}}),t._v(" "),r("div",[t._v(t._s(t.jsstoreText[t.adIndex]))])]),t._v(" "),null!=t.docToEdit?r("v-btn",{staticClass:"margin-bottom-140px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/fortjs/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):t._e(),t._v(" "),null!=t.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/fortjs.docs/edit/master/docs/tutorial/"+t.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",{staticStyle:{display:"inline-flex"}},[t._v("edit")])],1):t._e(),t._v(" "),null!=t.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://twitter.com/ujjwal_kr_gupta",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-twitter"})]):t._e()],1)],1)},[],!1,null,null,null));g.options.__file="tutorial.vue";e.a=g.exports},234:function(t,e,r){"use strict";r.r(e);var o,i=r(6),n=r(165),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),l=function(t,e,r,o){var i,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(n<3?i(a):n>3?i(e,r,a):i(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EThe%20easiest%20way%20to%20use%20fortjs%20is%20by%20installing%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/fort-creator%22%3Efort-creator%3C/a%3E.%20fort-creator%20is%20a%20cli%20package%20which%20helps%20you%20with%20fortjs%20development.%3C/p%3E%0A%3Cp%3ESo,%20Install%20the%20fort-creator%20globally%20by%20runing%20command%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3EUsing%20npm%20-%20%3Ccode%3Enpm%20i%20fort-creator%20-g%3C/code%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EUsing%20yarn%20-%20%3Ccode%3Eyarn%20global%20add%20fort-creator%3C/code%3E%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3EAfter%20you%20have%20successfully%20installed,%20run%20the%20below%20commands%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3Ecreate%20new%20project%20-%20%20%3Ccode%3Efort-creator%20new%20my-app%3C/code%3E,%20here%20%22my-app%22%20is%20name%20of%20the%20project.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3Emove%20to%20project%20directory%20-%20%3Ccode%3Ecd%20my-app%3C/code%3E%20%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3Estart%20dev%20server%20-%20%3Ccode%3Efort-creator%20start%3C/code%3E%20%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0ABrowse%20the%20url%20-%20%3Ca%20href=%22http://localhost:4000%22%20target=%22_blank%22%3Ehttp://localhost:4000%3C/a%3E%3C/p%3E%0A%3Cp%3EYou%20will%20see%20something%20like%20below%20-%20%3C/p%3E%0A%3Cdiv%20style=%22text-align:center;%22%3E%0A%3Cimg%20src=%22/img/starter_screenshot.png%22%20style=%22height:400px%22%3E%0A%3C/div%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22understandingproject%22%3EUnderstanding%20project%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0ALet's%20understand%20the%20project%20structures%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3EOpen%20the%20project%20folder%20in%20your%20favourite%20code%20editor.%20You%20will%20see%20many%20folders%20inside%20project%20root%20such%20as%20controllers,%20views,%20etc.%20Every%20folder%20is%20grouped%20by%20their%20use%20like%20controllers%20folder%20contains%20all%20controller%20&amp;%20views%20folder%20contains%20all%20view.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EOpen%20%20folder%20controllers.%20Inside%20the%20controllers%20you%20will%20see%20a%20file%20name%20-%20default_controller,%20lets%20open%20it%20and%20observe%20the%20code.%20The%20file%20contains%20a%20class%20DefaultController%20-%20this%20is%20a%20controller%20class%20and%20it%20contains%20list%20of%20resources%20of%20particular%20type.%20Please%20check%20out%20%3Ca%20href=%22/tutorial/controller%22%3Econtroller%3C/a%3E%20doc%20for%20knowing%20about%20controller.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EInside%20the%20class%20DefaultController%20-&gt;%20%20you%20will%20see%20a%20method%20'index'%20with%20decorator%20'DefaultWorker'%20-%20this%20is%20the%20one%20which%20is%20rendering%20output%20to%20browser.%20The%20method%20is%20known%20as%20worker%20in%20fortjs%20because%20it%20does%20some%20work%20&amp;%20return%20result.%20We%20have%20marked%20it%20as%20worker%20by%20using%20decorator%20'DefaultWorker'.%20Please%20check%20out%20%3Ca%20href=%22/tutorial/worker%22%3Eworker%3C/a%3E%20doc%20for%20more%20info%20about%20worker.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3ELet's%20observe%20the%20index%20method%20code:%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cpre%3E%3Ccode%3Econst%20data=%20%7B%0A%20%20%20%20title:%20'FortJs'%0A%7D;%0Aconst%20result%20=%20await%20viewResult('default/index.html',%20data);%0Areturn%20result;%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIt%20creates%20a%20data%20object%20and%20passes%20that%20object%20into%20viewResult%20method.%20The%20viewResult%20method%20takes%20the%20view%20location%20and%20view%20data.%20The%20work%20of%20viewResult%20is%20to%20render%20the%20view%20and%20return%20response.%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EThe%20view%20files%20are%20inside%20Views%20folder.%20Let's%20observe%20it%20-%0Aopen%20Views%20Folder%20-&gt;%20open%20default%20folder%20-%20&gt;%20open%20index.html.%20This%20is%20our%20view%20code%20-%20it%20contain%20simple%20html%20code%20with%20some%20mustache%20syntax.%20Please%20check%20%3Ca%20href=%22/tutorial/view%22%3Eview%3C/a%3E%20doc%20for%20more%20info.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3EHope%20this%20will%20give%20you%20a%20good%20idea%20about%20fortjs.%20%3C/p%3E%0A%3Cp%3E%3Cbr%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22checkoutsomeotherlinks%22%3E*Check%20out%20some%20other%20links%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22https://medium.com/fortjs/rest-api-using-typescript-94004d9ae5e6%22%3ECreating%20REST%20API%20using%20Typescript%3C/a%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22https://medium.com/fortjs/rest-api-in-nodejs-using-es6-227765440b2b%22%3ECreating%20REST%20API%20using%20es6%3C/a%3E%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cdiv%20class=%22top-border%22%20style=%22margin:%2025px%200;%22%3E%3C/div%3E%0A%3Cp%3EAlternatively%20you%20can%20also%20clone/download%20starter%20template%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3ETypescript%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/fortjs-typescript-starter%22%3Ehttps://github.com/ujjwalguptaofficial/fortjs-typescript-starter%3C/a%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EJavascript%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/fortjs-javascript-starter%22%3Ehttps://github.com/ujjwalguptaofficial/fortjs-javascript-starter%3C/a%3E%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0AAfter%20downloading%20the%20repo%20-%20open%20the%20console,%20move%20to%20project%20directory%20and%20run%20the%20commands%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Ccode%3Enpm%20install%3C/code%3E%20-%20It%20will%20install%20all%20the%20dependency%3C/li%3E%0A%3Cli%3E%3Ccode%3Enpm%20run%20start%3C/code%3E%20-%20It%20will%20run%20the%20app.%3C/li%3E%0A%3C/ul%3E",e.title="Get Started",e.keywords="get started, fort-creator, introduction, fortjs, node",e.description="Fortjs introduction & how to use.",e}return a(e,t),e=l([Object(i.Component)({components:{Tutorial:n.a}})],e)}(i.Vue),c=r(9),p=Object(c.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);p.options.__file="get-started.vue";e.default=p.exports}}]);