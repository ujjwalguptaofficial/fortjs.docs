(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{155:function(e,t,n){var o=n(158);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(19).default)("2aa3933d",o,!0,{})},156:function(e,t,n){var o=n(160);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(19).default)("7a78b854",o,!0,{})},157:function(e,t,n){"use strict";var o=n(155);n.n(o).a},158:function(e,t,n){(e.exports=n(18)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}",""])},159:function(e,t,n){"use strict";var o=n(156);n.n(o).a},160:function(e,t,n){(e.exports=n(18)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},161:function(e,t,n){"use strict";var o,r=n(6),i=n(33),l=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=function(e,t,n,o){var r,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return l(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(n){n.id===e?1==t.expandInfo[n.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[n.id]&&t.$set(t.expandInfo,n.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,n=Number(t.dataset.id);this.setExpandInfo(n)},t=a([Object(r.Component)({props:{items:Array}})],t)}(r.Vue),c=(n(157),n(9)),p=Object(c.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"margin-top-50px"},e._l(e.items,function(t){return n("div",{key:t.id,staticClass:"treeview-parent",class:{"link-active":t.url===e.activeUrl}},[n("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n      "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n    ")]),e._v(" "),n("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[null!=t.url?n("a",{attrs:{href:t.url}},[e._v(e._s(t.text))]):n("span",[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?n("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id]===true"}]},e._l(t.childs,function(t){return n("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[n("a",{attrs:{href:t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);p.options.__file="treeview.vue";var u=p.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:6,text:"Components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]}],f=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=function(e,t,n,o){var r,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},C=function(e){function t(){var t=e.call(this)||this;return t.version=2,t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return f(t,e),t.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){},t.prototype.mounted=function(){var e,t=this,n=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(o){if(null!=o.childs){var r=o.childs.find(function(e){return n===(""+t.relativeUrl+e.url.toLowerCase()).replace(/\//g,"")});if(null!=r)return e=r.url,t.$refs.linkContainer.setExpandInfo(o.id),!1}else if(n===(""+t.relativeUrl+o.url.toLowerCase()).replace(/\//g,""))return e=o.url,!1;return!0}),e&&e.length>0&&this.$refs.linkContainer.setActiveLink(e)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"FortJs - "+this.pageTitle}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t=h([Object(r.Component)({components:{TreeView:u},props:{innerHtml:String,pageTitle:String}})],t)}(i.a),v=(n(159),Object(c.a)(C,function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":this.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[t("TreeView",{ref:"linkContainer",attrs:{items:this.links}})],1),this._v(" "),t("v-flex",{class:{"padding-left-15px":this.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[t("div",{staticClass:"margin-top-20px",domProps:{innerHTML:this._s(this.tutorialHtml)}})]),this._v(" "),t("v-flex",{staticClass:"md2 margin-top-50px text-center"})],1)},[],!1,null,null,null));v.options.__file="tutorial.vue";t.a=v.exports},202:function(e,t,n){"use strict";n.r(t);var o,r=n(6),i=n(161),l=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=function(e,t,n,o){var r,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EController%20is%20like%20a%20section%20where%20a%20list%20of%20resource%20of%20particular%20types%20are%20available.%3C/p%3E%0A%3Cp%3Ee.g%20-%20A%20Fort%20may%20have%20sections%20-%20WeaponSection,%20LibrarySection,%20MeetingSection%20etc.%20Now%20consider%20an%20real%20world%20application%20created%20for%20university%20may%20have%20sections%20-%20StudentSection,%20TeacherSection,%20LibrarySection%20etc.%3C/p%3E%0A%3Cp%3EA%20controller%20have%20access%20to%20following%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ERequest%20-%20%3Ccode%3Ethis.request%3C/code%3E%3C/li%3E%0A%3Cli%3EResponse%20-%20%3Ccode%3Ethis.response%3C/code%3E%3C/li%3E%0A%3Cli%3ECookie%20-%20%3Ccode%3Ethis.cookies%3C/code%3E%3C/li%3E%0A%3Cli%3ESession%20-%20%3Ccode%3Ethis.session%3C/code%3E%3C/li%3E%0A%3Cli%3EQuery%20string%20data%20-%20%3Ccode%3Ethis.query%3C/code%3E%3C/li%3E%0A%3Cli%3EPost%20data%20-%20%3Ccode%3Ethis.post%3C/code%3E%3C/li%3E%0A%3Cli%3ERoute%20parameter%20-%20%20%3Ccode%3Ethis.params%3C/code%3E%3C/li%3E%0A%3Cli%3EData%20from%20other%20components%20-%20%20%3Ccode%3Ethis.data%3C/code%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22creatingcontroller%22%3ECreating%20controller%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AController%20is%20a%20class%20which%20extends%20the%20class%20%22Controller%22%20from%20fortjs.%3C/p%3E%0A%3Ch2%20id=%22example%22%3EExample%3C/h2%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20you%20have%20created%20the%20controller%20but%20in%20order%20to%20use%20this,%20you%20need%20to%20assign%20it%20to%20routes%20where%20you%20have%20%3Ca%20href=%22bootstrap%22%3Ebootstrapped%3C/a%3E%20your%20app.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Fort%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20UserController%20%7D%20from%20%22./controllers%22;%0A%0Aclass%20App%20extends%20Fort%20%7B%0A%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20this.routers%20=%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20controller:%20UserController,%0A%20%20%20%20%20%20%20%20%20%20%20%20path:%20%22/user%22%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20code%20we%20are%20adding%20our%20controller%20into%20routers%20list%20along%20%20with%20a%20path.%20The%20path%20is%20used%20to%20associate%20the%20controller%20with%20a%20top%20level%20route.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Consider%20your%20website%20is%20abc.com%20,%20so%20when%20user%20hits%20the%20url%20-%20%22abc.com/user%22%20then%20the%20controller%20-%20'UserController'%20will%20be%20called.%20%3C/p%3E%0A%3Cp%3ENote%20:-%20You%20must%20have%20%3Ca%20href=%22worker%22%3Eworker%3C/a%3E%20inside%20the%20controller%20otherwise%20it%20wont%20work.%3C/p%3E",t.title="Controller",t}return l(t,e),t=a([Object(r.Component)({components:{Tutorial:i.a}})],t)}(r.Vue),c=n(9),p=Object(c.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);p.options.__file="controller.vue";t.default=p.exports}}]);