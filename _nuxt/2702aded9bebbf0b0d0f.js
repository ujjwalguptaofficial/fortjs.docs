(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{155:function(t,e,n){var o=n(158);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(19).default)("2aa3933d",o,!0,{})},156:function(t,e,n){var o=n(160);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(19).default)("7a78b854",o,!0,{})},157:function(t,e,n){"use strict";var o=n(155);n.n(o).a},158:function(t,e,n){(t.exports=n(18)(!1)).push([t.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}",""])},159:function(t,e,n){"use strict";var o=n(156);n.n(o).a},160:function(t,e,n){(t.exports=n(18)(!1)).push([t.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},161:function(t,e,n){"use strict";var o,r=n(6),i=n(33),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeUrl="",e.expandInfo={},e}return a(e,t),e.prototype.mounted=function(){var t=this;this.items.forEach(function(e){t.$set(t.expandInfo,e.id,!1)})},e.prototype.setActiveLink=function(t){this.activeUrl=t},e.prototype.setExpandInfo=function(t){var e=this;this.items.forEach(function(n){n.id===t?1==e.expandInfo[n.id]?e.$set(e.expandInfo,t,!1):e.$set(e.expandInfo,t,!0):1==e.expandInfo[n.id]&&e.$set(e.expandInfo,n.id,!1)})},e.prototype.onMenuClick=function(t){var e=t.target,n=Number(e.dataset.id);this.setExpandInfo(n)},e=l([Object(r.Component)({props:{items:Array}})],e)}(r.Vue),p=(n(157),n(9)),u=Object(p.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"margin-top-50px"},t._l(t.items,function(e){return n("div",{key:e.id,staticClass:"treeview-parent",class:{"link-active":e.url===t.activeUrl}},[n("i",{staticClass:"material-icons",class:{"not-visible":null==e.childs||0==e.childs.length},attrs:{"data-id":e.id},on:{click:t.onMenuClick}},[t._v("\n      "+t._s(!0===t.expandInfo[e.id]?"keyboard_arrow_down":"chevron_right")+"\n    ")]),t._v(" "),n("div",{staticClass:"text",attrs:{"data-id":e.id},on:{click:t.onMenuClick}},[null!=e.url?n("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))]):n("span",[t._v(" "+t._s(e.text))])]),t._v(" "),null!=e.childs?n("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.expandInfo[e.id],expression:"expandInfo[item.id]===true"}]},t._l(e.childs,function(e){return n("li",{key:e.id,class:{"link-active":e.url===t.activeUrl}},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.text))])])})):t._e()])}))},[],!1,null,null,null);u.options.__file="treeview.vue";var c=u.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:6,text:"Components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:7,text:"Types",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"}]},{id:8,text:"Advanced",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"}]}],f=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},v=function(t){function e(){var e=t.call(this)||this;return e.version=2,e.showMenu=!1,e.searchValue="",e.searchResult="",e.catchEvents(),e}return f(e,t),e.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){},e.prototype.mounted=function(){var t,e=this,n=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(o){if(null!=o.childs){var r=o.childs.find(function(t){return n===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=r)return t=r.url,e.$refs.linkContainer.setExpandInfo(o.id),!1}else if(n===(""+e.relativeUrl+o.url.toLowerCase()).replace(/\//g,""))return t=o.url,!1;return!0}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.head=function(){return{title:"FortJs - "+this.pageTitle}},e.prototype.getVersion=function(){return"1"},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e=h([Object(r.Component)({components:{TreeView:c},props:{innerHtml:String,pageTitle:String}})],e)}(i.a),g=(n(159),Object(p.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":this.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[e("TreeView",{ref:"linkContainer",attrs:{items:this.links}})],1),this._v(" "),e("v-flex",{class:{"padding-left-15px":this.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[e("div",{staticClass:"margin-top-20px",domProps:{innerHTML:this._s(this.tutorialHtml)}})]),this._v(" "),e("v-flex",{staticClass:"md2 margin-top-50px text-center"})],1)},[],!1,null,null,null));g.options.__file="tutorial.vue";e.a=g.exports},202:function(t,e,n){"use strict";n.r(e);var o,r=n(6),i=n(161),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EThe%20type%20%3Ccode%3EappOption%3C/code%3E%20is%20used%20to%20provide%20the%20configuration%20for%20the%20app.%20%3C/p%3E%0A%3Cp%3EStructure%20of%20appOption%20is%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Etype%20AppOption%20=%20%7B%0A%20%20%20%20/**%0A%20%20%20%20%20*%20port%20at%20which%20app%20will%20listen,%20default%20-%204000%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bnumber%7D%0A%20%20%20%20%20*/%0A%20%20%20%20port%20?%20:%20number;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20view%20engine%20use%20to%20render%20the%20view%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Btypeof%20ViewEngine%7D%0A%20%20%20%20%20*/%0A%20%20%20%20viewEngine%20?%20:%20typeof%20ViewEngine;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20Whether%20to%20parse%20cookie%20or%20not,%20default%20-%20true%0A%20%20%20%20%20*%20If%20false,%20then%20session%20wont%20work.%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bboolean%7D%0A%20%20%20%20%20*/%0A%20%20%20%20shouldParseCookie%20?%20:%20boolean;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20Whether%20to%20parse%20the%20post%20data,%20default%20-%20true%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bboolean%7D%0A%20%20%20%20%20*/%0A%20%20%20%20shouldParsePost%20?%20:%20boolean;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20sessionProvider%20class,%20default%20-%20MemorySessionProvider%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Btypeof%20SessionProvider%7D%0A%20%20%20%20%20*/%0A%20%20%20%20sessionProvider%20?%20:%20typeof%20SessionProvider;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20session%20timeout%20in%20minute%20-%20default%20is%2060%20minute%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bnumber%7D%0A%20%20%20%20%20*%20@memberof%20IAppOption%0A%20%20%20%20%20*/%0A%20%20%20%20sessionTimeOut%20?%20:%20number;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20folders%20which%20should%20be%20visible%20to%20requests.%20By%20default%20nothing%20is%20allowed.%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bstring%5B%5D%7D%0A%20%20%20%20%20*/%0A%20%20%20%20foldersAllowed%20?%20:%20string%5B%5D;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20Custom%20error%20handler%20class%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Btypeof%20ErrorHandler%7D%0A%20%20%20%20%20*/%0A%20%20%20%20errorHandler%20?%20:%20typeof%20ErrorHandler;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20path%20to%20be%20used%20when%20url%20is%20root.%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bstring%7D%0A%20%20%20%20%20*%20@memberof%20IAppOption%0A%20%20%20%20%20*/%0A%20%20%20%20defaultPath%20?%20:%20string;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20name%20of%20application%20-%20default%20is%20fort.%20Visible%20in%20header%20and%20cookie.%0A%20%20%20%20%20*%20Change%20the%20name%20if%20you%20dont%20want%20to%20let%20users%20know%20the%20framework%20name.%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bstring%7D%0A%20%20%20%20%20*/%0A%20%20%20%20appName%20?%20:%20string;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20eTag%20Settings%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7BEtagOption%7D%0A%20%20%20%20%20*/%0A%20%20%20%20eTag%20?%20:%20EtagOption%0A%7D;%0A%3C/code%3E%3C/pre%3E",e.title="AppOption",e}return a(e,t),e=l([Object(r.Component)({components:{Tutorial:i.a}})],e)}(r.Vue),p=n(9),u=Object(p.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="app-option.vue";e.default=u.exports}}]);