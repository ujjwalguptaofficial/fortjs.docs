(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{155:function(e,t,r){var o=r(158);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(19).default)("2aa3933d",o,!0,{})},156:function(e,t,r){var o=r(160);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(19).default)("7a78b854",o,!0,{})},157:function(e,t,r){"use strict";var o=r(155);r.n(o).a},158:function(e,t,r){(e.exports=r(18)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}",""])},159:function(e,t,r){"use strict";var o=r(156);r.n(o).a},160:function(e,t,r){(e.exports=r(18)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},161:function(e,t,r){"use strict";var o,n=r(6),i=r(33),l=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e,t,r,o){var n,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(l=(i<3?n(l):i>3?n(t,r,l):n(t,r))||l);return i>3&&l&&Object.defineProperty(t,r,l),l},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return l(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(r){r.id===e?1==t.expandInfo[r.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[r.id]&&t.$set(t.expandInfo,r.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,r=Number(t.dataset.id);this.setExpandInfo(r)},t=a([Object(n.Component)({props:{items:Array}})],t)}(n.Vue),u=(r(157),r(9)),c=Object(u.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"margin-top-50px"},e._l(e.items,function(t){return r("div",{key:t.id,staticClass:"treeview-parent",class:{"link-active":t.url===e.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n      "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n    ")]),e._v(" "),r("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[null!=t.url?r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):r("span",[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id]===true"}]},e._l(t.childs,function(t){return r("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);c.options.__file="treeview.vue";var p=c.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View Engine",url:"view-engine"},{id:8,text:"Components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:9,text:"Types",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:10,text:"Advanced",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"}]}],f=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),h=function(e,t,r,o){var n,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(l=(i<3?n(l):i>3?n(t,r,l):n(t,r))||l);return i>3&&l&&Object.defineProperty(t,r,l),l},C=function(e){function t(){var t=e.call(this)||this;return t.version=2,t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return f(t,e),t.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){},t.prototype.mounted=function(){var e,t=this,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(o){if(null!=o.childs){var n=o.childs.find(function(e){return r===(""+t.relativeUrl+e.url.toLowerCase()).replace(/\//g,"")});if(null!=n)return e=n.url,t.$refs.linkContainer.setExpandInfo(o.id),!1}else if(r===(""+t.relativeUrl+o.url.toLowerCase()).replace(/\//g,""))return e=o.url,!1;return!0}),e&&e.length>0&&this.$refs.linkContainer.setActiveLink(e)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"FortJs - "+this.pageTitle}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t=h([Object(n.Component)({components:{TreeView:p},props:{innerHtml:String,pageTitle:String}})],t)}(i.a),E=(r(159),Object(u.a)(C,function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":this.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[t("TreeView",{ref:"linkContainer",attrs:{items:this.links}})],1),this._v(" "),t("v-flex",{class:{"padding-left-15px":this.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[t("div",{staticClass:"margin-top-20px",domProps:{innerHTML:this._s(this.tutorialHtml)}})]),this._v(" "),t("v-flex",{staticClass:"md2 margin-top-50px text-center"})],1)},[],!1,null,null,null));E.options.__file="tutorial.vue";t.a=E.exports},193:function(e,t,r){"use strict";r.r(t);var o,n=r(6),i=r(161),l=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e,t,r,o){var n,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(l=(i<3?n(l):i>3?n(t,r,l):n(t,r))||l);return i>3&&l&&Object.defineProperty(t,r,l),l},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EWorker%20is%20a%20method%20which%20does%20particular%20task%20and%20return%20the%20final%20result.%20%3C/p%3E%0A%3Cp%3EA%20worker%20method%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Emust%20be%20async%20or%20return%20a%20promise%20(since%20async%20is%20built%20on%20top%20of%20promises).%3C/li%3E%0A%3Cli%3EThe%20result%20retruned%20by%20worker%20method%20must%20be%20promise%20of%20type%20%3Ca%20href=%22http-result%22%3EHttpResult%3C/a%3E.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0ASince%20a%20worker%20is%20part%20of%20controller,%20it%20have%20the%20access%20to%20all%20the%20things%20which%20a%20controller%20has%20i.e%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ERequest%20-%20%3Ccode%3Ethis.request%3C/code%3E%3C/li%3E%0A%3Cli%3EResponse%20-%20%3Ccode%3Ethis.response%3C/code%3E%3C/li%3E%0A%3Cli%3ECookie%20-%20%3Ccode%3Ethis.cookies%3C/code%3E%3C/li%3E%0A%3Cli%3ESession%20-%20%3Ccode%3Ethis.session%3C/code%3E%3C/li%3E%0A%3Cli%3EQuery%20string%20data%20-%20%3Ccode%3Ethis.query%3C/code%3E%3C/li%3E%0A%3Cli%3EPost%20data%20-%20%3Ccode%3Ethis.post%3C/code%3E%3C/li%3E%0A%3Cli%3ERoute%20parameter%20-%20%20%3Ccode%3Ethis.params%3C/code%3E%3C/li%3E%0A%3Cli%3EData%20from%20other%20components%20-%20%20%3Ccode%3Ethis.data%3C/code%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22creatingworker%22%3ECreating%20worker%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AWorker%20is%20created%20by%20using%20decorator%20-%20%3Ccode%3Eworker%3C/code%3E%20or%20%3Ccode%3EdefaultWorker%3C/code%3E.%3C/p%3E%0A%3Ch2%20id=%22example%22%3EExample%3C/h2%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20worker,%20defaultWorker,%20textResult%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@defaultWorker()%0A%20%20%20%20async%20default%20()%20%7B%0A%20%20%20%20%20%20%20return%20textResult(%22This%20is%20default%20worker%20for%20section%20user%22);%0A%20%20%20%20%7D%0A%0A%20%20%20%20@worker()%0A%20%20%20%20async%20getUser()%20%7B%0A%20%20%20%20%20%20%20%20return%20textResult(%22This%20is%20a%20worker%20for%20section%20user%22);%0A%20%20%20%20%7D%0A%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ELets%20consider%20that%20controller%20-%20'UserController'%20is%20associated%20with%20path%20'/user'%20and%20our%20domain%20is%20abc.com.%3C/p%3E%0A%3Cp%3ESo%20what%20these%20decorators%20-%20%3Ccode%3Eworker%3C/code%3E%20and%20%3Ccode%3EdefaultWorker%3C/code%3E%20do%20?%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3Eworker%3C/strong%3E%20-%20method%20having%20decorator%20worker%20is%20added%20to%20route%20with%20all%20http%20methods%20(GET,POST%20etc).And%20the%20route%20is%20'/$%7Bmethod_name%7D'.%20For%20our%20example%20-%20route%20will%20be%20:%20'/getuser'.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EdefaultWorker%3C/strong%3E%20-%20method%20having%20decorator%20defaultWorker%20is%20added%20to%20route%20with%20one%20http%20method%20GET.%20And%20the%20route%20is%20'/'.%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0ASo%20when%20url%20will%20be%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Eabc.com/user%20-%20method%20default%20will%20be%20called.%3C/li%3E%0A%3Cli%3Eabc.com/getuser%20-%20method%20getuser%20will%20be%20called.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22howtodeclareamethodasdefaultworkerwithoutusingdecoratordefaultworker%22%3EHow%20to%20declare%20a%20method%20as%20default%20worker%20without%20using%20decorator%20-%20defaultWorker%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AA%20method%20can%20be%20declared%20as%20default%20worker%20by%20using%20decorators%20-%20%3Ccode%3Eworker%3C/code%3E%20&amp;%20%3Ccode%3Eroute%3C/code%3E.%3C/p%3E%0A%3Cp%3ELets%20update%20the%20example%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20worker,%20textResult,%20HTTP_METHOD,%20route%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20//%20@defaultWorker()%0A%20%20%20%20@worker(%5BHTTP_METHOD.Get%5D)%0A%20%20%20%20@route(%22/%22)%0A%20%20%20%20async%20default%20()%20%7B%0A%20%20%20%20%20%20%20return%20textResult(%22This%20is%20default%20worker%20for%20section%20user%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E",t.title="Worker",t}return l(t,e),t=a([Object(n.Component)({components:{Tutorial:i.a}})],t)}(n.Vue),u=r(9),c=Object(u.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="worker.vue";t.default=c.exports}}]);