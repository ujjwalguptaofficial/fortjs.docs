(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{155:function(e,t,r){var n=r(158);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(19).default)("2aa3933d",n,!0,{})},156:function(e,t,r){var n=r(160);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(19).default)("7a78b854",n,!0,{})},157:function(e,t,r){"use strict";var n=r(155);r.n(n).a},158:function(e,t,r){(e.exports=r(18)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}",""])},159:function(e,t,r){"use strict";var n=r(156);r.n(n).a},160:function(e,t,r){(e.exports=r(18)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},161:function(e,t,r){"use strict";var n,o=r(6),i=r(33),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return a(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(r){r.id===e?1==t.expandInfo[r.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[r.id]&&t.$set(t.expandInfo,r.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,r=Number(t.dataset.id);this.setExpandInfo(r)},t=l([Object(o.Component)({props:{items:Array}})],t)}(o.Vue),u=(r(157),r(9)),c=Object(u.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"margin-top-50px"},e._l(e.items,function(t){return r("div",{key:t.id,staticClass:"treeview-parent",class:{"link-active":t.url===e.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n      "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n    ")]),e._v(" "),r("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[null!=t.url?r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):r("span",[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id]===true"}]},e._l(t.childs,function(t){return r("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);c.options.__file="treeview.vue";var p=c.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:6,text:"Components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:7,text:"Types",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"}]},{id:8,text:"Advanced",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"}]}],f=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),h=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},C=function(e){function t(){var t=e.call(this)||this;return t.version=2,t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return f(t,e),t.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){},t.prototype.mounted=function(){var e,t=this,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(n){if(null!=n.childs){var o=n.childs.find(function(e){return r===(""+t.relativeUrl+e.url.toLowerCase()).replace(/\//g,"")});if(null!=o)return e=o.url,t.$refs.linkContainer.setExpandInfo(n.id),!1}else if(r===(""+t.relativeUrl+n.url.toLowerCase()).replace(/\//g,""))return e=n.url,!1;return!0}),e&&e.length>0&&this.$refs.linkContainer.setActiveLink(e)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"FortJs - "+this.pageTitle}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t=h([Object(o.Component)({components:{TreeView:p},props:{innerHtml:String,pageTitle:String}})],t)}(i.a),g=(r(159),Object(u.a)(C,function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":this.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[t("TreeView",{ref:"linkContainer",attrs:{items:this.links}})],1),this._v(" "),t("v-flex",{class:{"padding-left-15px":this.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[t("div",{staticClass:"margin-top-20px",domProps:{innerHTML:this._s(this.tutorialHtml)}})]),this._v(" "),t("v-flex",{staticClass:"md2 margin-top-50px text-center"})],1)},[],!1,null,null,null));g.options.__file="tutorial.vue";t.a=g.exports},198:function(e,t,r){"use strict";r.r(t);var n,o=r(6),i=r(161),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EGuard%20is%20security%20layer%20on%20top%20of%20Worker.%20It%20contols%20whether%20a%20request%20should%20be%20allowed%20to%20call%20the%20%3Cstrong%3EWorker%3C/strong%3E.%3C/p%3E%0A%3Cp%3EThe%20guard%20is%20useful%20for%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EValidation%20of%20data.%20%3C/li%3E%0A%3Cli%3EAuthentication%20at%20Worker%20level.%3C/li%3E%0A%3Cli%3EDoing%20some%20task%20and%20passing%20it%20to%20worker.%20In%20this%20case%20-%20guard%20will%20be%20used%20as%20subordinate.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0AThere%20can%20be%20multiple%20guards%20for%20a%20worker%20&amp;%20they%20are%20called%20in%20respective%20order,%20when%20a%20request%20wants%20to%20access%20the%20particular%20worker.%3C/p%3E%0A%3Cp%3EA%20guard%20have%20access%20to%20following%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ERequest%20-%20%3Ccode%3Ethis.request%3C/code%3E%3C/li%3E%0A%3Cli%3EResponse%20-%20%3Ccode%3Ethis.response%3C/code%3E%3C/li%3E%0A%3Cli%3ECookie%20-%20%3Ccode%3Ethis.cookies%3C/code%3E%3C/li%3E%0A%3Cli%3ESession%20-%20%3Ccode%3Ethis.session%3C/code%3E%3C/li%3E%0A%3Cli%3EQuery%20string%20data%20-%20%3Ccode%3Ethis.query%3C/code%3E%3C/li%3E%0A%3Cli%3EPost%20data%20-%20%3Ccode%3Ethis.post%3C/code%3E%3C/li%3E%0A%3Cli%3ERoute%20parameter%20-%20%20%3Ccode%3Ethis.params%3C/code%3E%3C/li%3E%0A%3Cli%3EData%20from%20other%20components%20-%20%20%3Ccode%3Ethis.data%3C/code%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22creatingguard%22%3ECreating%20guard%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AGuard%20is%20a%20class%20which%20extends%20the%20class%20%22Guard%22%20from%20fortjs.%3C/p%3E%0A%3Ch2%20id=%22example%22%3EExample%3C/h2%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Guard,%20HttpResult,%20MIME_TYPE,%20HTTP_STATUS_CODE%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20validate%20%7D%20from%20%22class-validator%22;%0Aimport%20%7B%20User%20%7D%20from%20%22../../models/user%22;%0A%0Aexport%20class%20ModelUserGuard%20extends%20Guard%20%7B%0A%20%20%20%20async%20check()%20%7B%0A%20%20%20%20%20%20%20%20const%20user:%20User%20=%20%7B%20//%20extracted%20the%20info%20from%20request%20body%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20this.body.name,%0A%20%20%20%20%20%20%20%20%20%20%20%20gender:%20this.body.gender,%0A%20%20%20%20%20%20%20%20%20%20%20%20address:%20this.body.address,%0A%20%20%20%20%20%20%20%20%20%20%20%20emailId:%20this.body.emailId%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20const%20errors%20=%20await%20validate(user);%0A%20%20%20%20%20%20%20%20if%20(errors.length%20===%200)%20%7B%20//%20user%20is%20valid%20so%20allow%20to%20call%20the%20worker%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20null;%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20else%20%7B%20//%20user%20is%20not%20valid,%20so%20block%20the%20call%20to%20worker%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20contentType:%20MIME_TYPE.Text,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20statusCode:%20HTTP_STATUS_CODE.BadRequest,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20responseData:%20%22Invalid%20Request%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20as%20HttpResult;%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20you%20have%20defined%20the%20guard%20but%20in%20order%20to%20use%20this%20guard,%20you%20need%20to%20assign%20it%20to%20some%20worker.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%0A%20%20%20%20Controller,%0A%20%20%20%20shields,%0A%20%20%20%20section%0A%7D%20from%20%22fortjs%22;%0Aimport%20%7B%0A%20%20%20%20ModelUserGuard%0A%7D%20from%20%22location%20where%20guard%20is%20defined%22;%0A%0A%0A@section()%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%20%20%20@guards(%5BModelUserGuard%5D)%0A%20%20%20%20addUser()%7B%0A%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3ENote:-%3C/strong%3E%20A%20guard%20can%20be%20assigned%20to%20multiple%20worker.%3C/p%3E",t.title="Guard",t}return a(t,e),t=l([Object(o.Component)({components:{Tutorial:i.a}})],t)}(o.Vue),u=r(9),c=Object(u.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="guard.vue";t.default=c.exports}}]);