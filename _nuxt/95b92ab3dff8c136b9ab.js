(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{155:function(e,t,r){var o=r(158);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(19).default)("2aa3933d",o,!0,{})},156:function(e,t,r){var o=r(160);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(19).default)("7a78b854",o,!0,{})},157:function(e,t,r){"use strict";var o=r(155);r.n(o).a},158:function(e,t,r){(e.exports=r(18)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}",""])},159:function(e,t,r){"use strict";var o=r(156);r.n(o).a},160:function(e,t,r){(e.exports=r(18)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},161:function(e,t,r){"use strict";var o,n=r(6),i=r(33),l=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e,t,r,o){var n,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(l=(i<3?n(l):i>3?n(t,r,l):n(t,r))||l);return i>3&&l&&Object.defineProperty(t,r,l),l},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return l(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(r){r.id===e?1==t.expandInfo[r.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[r.id]&&t.$set(t.expandInfo,r.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,r=Number(t.dataset.id);this.setExpandInfo(r)},t=a([Object(n.Component)({props:{items:Array}})],t)}(n.Vue),u=(r(157),r(9)),p=Object(u.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"margin-top-50px"},e._l(e.items,function(t){return r("div",{key:t.id,staticClass:"treeview-parent",class:{"link-active":t.url===e.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n      "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n    ")]),e._v(" "),r("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[null!=t.url?r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):r("span",[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id]===true"}]},e._l(t.childs,function(t){return r("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);p.options.__file="treeview.vue";var c=p.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View Engine",url:"view-engine"},{id:8,text:"Components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:9,text:"Types",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:10,text:"Advanced",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"}]}],h=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),f=function(e,t,r,o){var n,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(l=(i<3?n(l):i>3?n(t,r,l):n(t,r))||l);return i>3&&l&&Object.defineProperty(t,r,l),l},C=function(e){function t(){var t=e.call(this)||this;return t.version=2,t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return h(t,e),t.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){},t.prototype.mounted=function(){var e,t=this,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(o){if(null!=o.childs){var n=o.childs.find(function(e){return r===(""+t.relativeUrl+e.url.toLowerCase()).replace(/\//g,"")});if(null!=n)return e=n.url,t.$refs.linkContainer.setExpandInfo(o.id),!1}else if(r===(""+t.relativeUrl+o.url.toLowerCase()).replace(/\//g,""))return e=o.url,!1;return!0}),e&&e.length>0&&this.$refs.linkContainer.setActiveLink(e)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"FortJs - "+this.pageTitle}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t=f([Object(n.Component)({components:{TreeView:c},props:{innerHtml:String,pageTitle:String}})],t)}(i.a),A=(r(159),Object(u.a)(C,function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":this.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[t("TreeView",{ref:"linkContainer",attrs:{items:this.links}})],1),this._v(" "),t("v-flex",{class:{"padding-left-15px":this.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[t("div",{staticClass:"margin-top-20px",domProps:{innerHTML:this._s(this.tutorialHtml)}})]),this._v(" "),t("v-flex",{staticClass:"md2 margin-top-50px text-center"})],1)},[],!1,null,null,null));A.options.__file="tutorial.vue";t.a=A.exports},192:function(e,t,r){"use strict";r.r(t);var o,n=r(6),i=r(161),l=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e,t,r,o){var n,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(l=(i<3?n(l):i>3?n(t,r,l):n(t,r))||l);return i>3&&l&&Object.defineProperty(t,r,l),l},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EThere%20are%20two%20parts%20of%20route%20in%20fortjs%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EParent%20Route%3C/li%3E%0A%3Cli%3EChild%20Route%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0Ae.g%20-%20Consider%20an%20url%20-%20%22abc.com/user/add%22%20and%20let's%20split%20it%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Eabc.com%20-%20domain%20of%20the%20website%20%3C/li%3E%0A%3Cli%3Euser%20-%20parent%20route%3C/li%3E%0A%3Cli%3Eadd%20-%20child%20route%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0ALet's%20take%20another%20example%20-%20%22abc.com/user/1/2/3%22%20and%20split%20it%20again%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Eabc.com%20-%20domain%20of%20the%20website%3C/li%3E%0A%3Cli%3Euser%20-%20parent%20route%3C/li%3E%0A%3Cli%3E1%20-%20child%20route%3C/li%3E%0A%3Cli%3E2%20-%20child%20route%3C/li%3E%0A%3Cli%3E3%20-%20child%20route%20%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0ANow%20you%20must%20have%20understood,%20how%20parent%20and%20child%20route%20is%20divided.%3C/p%3E%0A%3Cp%3ELet's%20see%20how%20this%20route%20is%20configured%20in%20fortjs%20-%20%3C/p%3E%0A%3Ch2%20id=%22parentroute%22%3EParent%20Route%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AIn%20order%20to%20create%20a%20parent%20route%20we%20must%20have%20a%20%3Ca%20href=%22controller%22%3Econtroller%3C/a%3E.%20This%20controller%20is%20mapped%20with%20a%20path.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Consider%20you%20have%20created%20a%20controller,%20let's%20say%20-%20%22UserController%22.%3C/p%3E%0A%3Cp%3ENow%20you%20need%20to%20map%20this%20with%20a%20path%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Fort%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20UserController%20%7D%20from%20%22./controllers%22;%0A%0Aclass%20App%20extends%20Fort%20%7B%0A%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20//%20here%20we%20have%20mapped%20UserController%20with%20path%20%22/user%22%0A%20%20%20%20%20%20%20%20this.routers%20=%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20controller:%20UserController,%0A%20%20%20%20%20%20%20%20%20%20%20%20path:%20%22/user%22%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20If%20you%20have%20large%20no%20of%20controller%20(let's%20say%20more%20than%2010),%20it%20is%20recommended%20to%20define%20routers%20in%20a%20file%20as%20array%20(you%20can%20also%20divide%20your%20routers%20into%20multiple%20files)and%20then%20import%20those%20inside%20class%20App.%20The%20motive%20of%20this%20note%20is%20to%20keep%20your%20routers%20clean.%3C/p%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22childroute%22%3EChild%20Route%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AChild%20route%20is%20nothing%20but%20a%20%3Ca%20href=%22worker%22%3EWorker%3C/a%3E%20inside%20a%20Controller.%0Ae.g%20-%20%3C/p%3E%0A%3Cp%3ESince%20UserController%20is%20mapped%20with%20%22/user%22,%20so%20parent%20route%20is%20-%20%22user%22.%20Now%20let's%20say%20we%20want%20to%20create%20the%20child%20route%20-%20%22add%22.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20worker,%20textResult%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%20%20%20%20@worker()%0A%20%20%20%20async%20add%20()%20%7B%0A%20%20%20%20%20%20%20return%20textResult(%22add%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EWhen%20url%20will%20be%20-%20%22abc.com/user/add%22%20then%20add%20method%20will%20be%20called.%3C/p%3E%0A%3Cp%3EHere%20you%20can%20see%20method%20name%20is%20used%20to%20create%20the%20child%20route.%20But%20you%20can%20change%20the%20route%20name%20manually%20also.%20Let's%20see%20how%20?%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20worker,%20textResult,%20route%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%20%20%20%20@worker()%0A%20%20%20%20@route(%22/add%22)%0A%20%20%20%20async%20add%20()%20%7B%0A%20%20%20%20%20%20%20return%20textResult(%22add%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EYou%20can%20see%20in%20the%20code%20,%20we%20have%20used%20'route'%20decorator%20to%20override%20the%20route.%3C/p%3E%0A%3Cp%3ECurrently%20with%20any%20of%20http%20methods%20(GET,POST,%20etc.)%20add%20method%20will%20be%20hit.%20But%20let's%20say%20you%20want%20to%20hit%20this%20only%20when%20http%20method%20is%20POST.%3C/p%3E%0A%3Cp%3EIn%20this%20case%20-%20you%20need%20to%20provide%20desired%20http%20methods%20to%20worker.%20Let's%20see%20an%20example%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20worker,textResult,HTTP_METHOD%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%20%20%20%20@worker(%5BHTTP_METHOD.POST%5D)%20//%20This%20method%20will%20be%20only%20hit%20when%20any%20of%20the%20http%20method%20specified%20in%20worker%20will%20match.%0A%20%20%20%20async%20add%20()%20%7B%0A%20%20%20%20%20%20%20return%20textResult(%22add%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EHow%20about%20you%20want%20to%20create%20a%20route%20%22add%22%20which%20will%20hit%20different%20methods%20based%20on%20http%20methods.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20worker,%20textResult,HTTP_METHOD,%20route%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@worker(%5BHTTP_METHOD.GET%5D)%0A%20%20%20%20@route(%22/add%22)%0A%20%20%20%20async%20addWithGet()%20%7B%20//%20This%20will%20be%20called%20when%20method%20will%20be%20GET%0A%20%20%20%20%20%20%20return%20textResult(%22add%20with%20method%20get%20is%20called%22);%0A%20%20%20%20%7D%0A%0A%20%20%20%20@worker(%5BHTTP_METHOD.POST%5D)%0A%20%20%20%20@route(%22/add%22)%0A%20%20%20%20async%20addWithPost()%20%7B%20//%20This%20will%20be%20called%20when%20method%20will%20be%20POST%0A%20%20%20%20%20%20%20return%20textResult(%22add%20with%20method%20post%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ESo%20far%20we%20have%20created%20a%20route%20-%20%22abc.com/user/add%22.%20How%20about%20little%20more%20complex%20route%20-%20%22abc.com/user/add/1%22.%20%3C/p%3E%0A%3Cp%3EFor%20this,%20we%20just%20need%20to%20modify%20our%20route.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20worker,%20textResult,HTTP_METHOD,%20route%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@worker()%0A%20%20%20%20@route(%22/add/1%22)%0A%20%20%20%20async%20add%20()%20%7B%0A%20%20%20%20%20%20%20return%20textResult(%22add%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20url%20-%20you%20can%20see%20%221%22%20is%20the%20constant%20value%20but%20in%20real%20life%20-%20the%20place%20where%201%20is%20present%20can%20be%20any%20value.%20%3C/p%3E%0A%3Cp%3Ee.g%20-%20%22abc.com/user/add/2%22,%20%22abc.com/user/add/hi%22,%20%22abc.com/user/add/1000%22%20etc.%3C/p%3E%0A%3Cp%3EBasically%20a%20part%20of%20the%20url%20is%20like%20a%20placeholder%20where%20different%20values%20are%20being%20placed.%3C/p%3E%0A%3Cp%3ESo%20now%20the%20question%20should%20be%20how%20to%20create%20a%20placeholder%20in%20a%20route.%20Let's%20see%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20worker,%20textResult,HTTP_METHOD,%20route%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@worker()%0A%20%20%20%20@route(%22/add/%7Bvalue%7D%22)%0A%20%20%20%20async%20add%20()%20%7B%0A%20%20%20%20%20%20%20const%20value%20=%20this.params.value;%20//%20placeholder%20values%20are%20present%20in%20'params'%20member%20of%20the%20controller.%0A%20%20%20%20%20%20%20return%20textResult(%22add%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EI%20promise%20-%20this%20will%20be%20last.%20How%20about%20a%20route%20where%20you%20want%20to%20return%20some%20file%20based%20on%20some%20extension.%20%3C/p%3E%0A%3Cp%3Ee.g%20-%20%22abc.com/file/scripts/jquery.js%22%20.%20In%20this%20example%20-%20%22jquery%22%20is%20dynmaic%20value%20means%20value%20can%20be%20anything%20like%20-%20%22jsstore%22,%20%22vue%22%20,%20%22underscore%22%20etc.%20So%20that%20place%20is%20basically%20a%20placeholder.%3C/p%3E%0A%3Cp%3ESo%20here%20:%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Eparent%20route%20is%20-%20'file'%3C/li%3E%0A%3Cli%3Echild%20route%20is%20-%20'scripts/jquery.js'%3C/li%3E%0A%3C/ul%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20worker,%20textResult,HTTP_METHOD,%20route%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20FileController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@worker()%0A%20%20%20%20@route(%22/scripts/%7BfileName%7D.js%22)%0A%20%20%20%20async%20getScripts%20()%20%7B%0A%20%20%20%20%20%20%20const%20value%20=%20this.params.value;%20//%20placeholder%20values%20are%20present%20in%20'params'%20member%20of%20the%20controller.%0A%20%20%20%20%20%20%20return%20textResult(%22add%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E",t.title="Route",t}return l(t,e),t=a([Object(n.Component)({components:{Tutorial:i.a}})],t)}(n.Vue),u=r(9),p=Object(u.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);p.options.__file="route.vue";t.default=p.exports}}]);