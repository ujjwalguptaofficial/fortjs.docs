(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{190:function(o,t,r){"use strict";r.r(t);var e={components:{Layout:r(170).a}},n=r(12),component=Object(n.a)(e,(function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("Layout",{attrs:{title:"Bootstrap",description:"fortjs bootstrap information & how to bootstrap",keywords:"bootstrap, initiate, start, fortjs, node",contentSrc:"/home/travis/build/ujjwalguptaofficial/fortjs.docs/out/content/tutorial/bootstrap.md"}},[r("pre",[r("code",[o._v('import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\n\n// add routes\nFort.routes = [{\n    controller: UserController,\n    path: "/user"\n}]\n\n// initiate app\nFort.create().then(()=>{\n    Fort.logger.info("App is started");\n})\n')])]),o._v(" "),r("h2",{attrs:{id:"configuringapp"}},[o._v("Configuring App")]),o._v(" "),r("p",[r("br"),o._v("\nFortJs provides different configurations like - port, folders, appName etc.")]),o._v(" "),r("pre",[r("code",[o._v('import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\n\nFort.appName = "MyAwesomeApp";\nFort.port = 8080\nFort.routes = [{\n    controller: UserController,\n    path: "/user"\n}]\nFort.create();\n')])]),o._v(" "),r("h3",{attrs:{id:"configurationlist"}},[o._v("Configuration list")]),o._v(" "),r("p",[r("br")]),o._v(" "),r("ol",[r("li",[o._v("appName - name of application - default is fort. Visible in header and cookie. Change name if you dont want any one to know the framework name.")]),o._v(" "),r("li",[o._v("port - Port at which app will listen, default - 4000")]),o._v(" "),r("li",[o._v("logger - ")]),o._v(" "),r("li",[o._v("viewPath - Views folder location. By default it is - views.")]),o._v(" "),r("li",[o._v("httpServer -  Confiure http server")]),o._v(" "),r("li",[o._v("folders - folders which should be visible to requests. By default nothing is allowed.")]),o._v(" "),r("li",[o._v("eTag - eTag Settings")]),o._v(" "),r("li",[o._v("logger -  Supply your custom logger.")]),o._v(" "),r("li",[o._v("walls - List of walls")]),o._v(" "),r("li",[o._v("customErrorHandler - A custom error handler class which will be used when framework detects error.")])])])}),[],!1,null,null,null);t.default=component.exports}}]);