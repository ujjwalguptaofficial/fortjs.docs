(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{226:function(e,t,r){"use strict";r.r(t);var o={components:{Layout:r(170).a}},n=r(12),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",{attrs:{title:"Route",description:"Different types of route and how to customize them in fortjs",keywords:"route, customize, options, fortjs, node",contentSrc:"/home/travis/build/ujjwalguptaofficial/fortjs.docs/out/content/tutorial/route.md"}},[r("p",[e._v("FortJs is a MVC framework which means the application will be divided into three parts - Controller, view, model.")]),e._v(" "),r("p",[e._v("A route is mapped with Controller and will target a Controller method.")]),e._v(" "),r("p",[e._v("So route in fortjs has two parts - ")]),e._v(" "),r("ul",[r("li",[e._v("Controller - A class")]),e._v(" "),r("li",[e._v("Worker - A method inside a class")])]),e._v(" "),r("p",[r("br")]),e._v(" "),r("h2",{attrs:{id:"howtodecidewhatpartofroutewilltargetcontrollerandworker"}},[e._v("How to decide what part of route will target controller and worker ?")]),e._v(" "),r("p",[r("br"),e._v('\nConsider an url - "abc.com/user/add" and let\'s split it - ')]),e._v(" "),r("ul",[r("li",[e._v("abc.com - domain of the website ")]),e._v(" "),r("li",[e._v("/user - controller route")]),e._v(" "),r("li",[e._v("/add - worker route")])]),e._v(" "),r("p",[r("br"),e._v('\nLet\'s take another example - "abc.com/user/1/2/3" and split it again - ')]),e._v(" "),r("ul",[r("li",[e._v("abc.com - domain of the website")]),e._v(" "),r("li",[e._v("/user - controller route")]),e._v(" "),r("li",[e._v("/1/2/3 - worker route")])]),e._v(" "),r("p",[r("br"),e._v("\nbut you can also make some part of worker route as controller depends upon the requirement")]),e._v(" "),r("p",[e._v("e.g - The above route can be also breaked as - ")]),e._v(" "),r("ul",[r("li",[e._v("abc.com - domain of the website")]),e._v(" "),r("li",[e._v("/user/1 - controller route")]),e._v(" "),r("li",[e._v("/2/3 - worker route")])]),e._v(" "),r("p",[r("br"),e._v("\nLet's see how the route is configured in fortjs - ")]),e._v(" "),r("h2",{attrs:{id:"controllerroute"}},[e._v("Controller Route")]),e._v(" "),r("p",[r("br"),e._v("\nIn order to create a controller route we must have a "),r("a",{attrs:{href:"/tutorial/controller"}},[e._v("controller")]),e._v(". This controller is mapped with a path.")]),e._v(" "),r("p",[e._v('e.g - Consider you have created a controller, let\'s say - "UserController".')]),e._v(" "),r("p",[e._v("You need to map Controller with a path. ")]),e._v(" "),r("pre",[r("code",[e._v('import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\n\n// here we have mapped UserController with path "/user"\nFort.routes = [{\n    controller: UserController,\n    path: "/user"\n}]\n\nFort.create();\n')])]),e._v(" "),r("p",[e._v('In the above example we are mapping "UserContoller" with a path "/user" inside the "routers" member of App. Since UserController is mapped with "/user", so controller route is - "user".')]),e._v(" "),r("p",[r("strong",[e._v("Note :-")]),e._v(" If you have large no of controller (let's say more than 10), it is recommended to define routers in a file as array (you can also divide your routers into multiple files)and then import those inside class App. The motive of this note is to keep your routers clean.")]),e._v(" "),r("p",[r("br")]),e._v(" "),r("h2",{attrs:{id:"workerroute"}},[e._v("Worker Route")]),e._v(" "),r("p",[r("br"),e._v("\nWorker route is mapped to a "),r("a",{attrs:{href:"/tutorial/worker"}},[e._v("Worker")]),e._v(" inside Controller.\ne.g - ")]),e._v(" "),r("p",[r("strong",[r("u",[e._v("Creating Worker Route")])]),e._v(" "),r("br"),r("br"),e._v('\nLet\'s say we want to create the worker route "add" - you need to create a method with the name "add" and add decoarator "Worker" above it . The decorator "Worker" add the method to route list with method name -')]),e._v(" "),r("pre",[r("code",[e._v('import { Controller, Worker, textResult } from "fortjs";\n\nexport class UserController extends Controller {\n    @Worker()\n    async add () {\n       return textResult("add is called");\n    }\n}\n')])]),e._v(" "),r("p",[e._v('So, When url will be - "abc.com/user/add" then add method will be called.')]),e._v(" "),r("div",{staticClass:"top-border"},[r("br")]),e._v(" "),r("p",[r("strong",[r("u",[e._v("Customizing route")])]),e._v(" "),r("br"),r("br"),e._v('\nBy default route is name of method, but you can customize the route using decorator "Route". The "Route" decorator is used to customize the route in multiple ways -  ')]),e._v(" "),r("pre",[r("code",[e._v('import { Controller, Worker, textResult, Route } from "fortjs";\n\nexport class UserController extends Controller {\n\n    @Worker()\n    @Route("/addCustom") // changing the route name\n    async add () {\n       return textResult("add is called");\n    }\n}\n')])]),e._v(" "),r("p",[e._v("You can see in the code , we have used 'Route' decorator to override the route. So, now when url will be - \"abc.com/user/addCustom\" then add method will be called.")]),e._v(" "),r("div",{staticClass:"top-border"},[r("br")]),e._v(" "),r("p",[r("strong",[r("u",[e._v("Restricting the worker based on http method")])]),e._v(" "),r("br"),r("br")]),e._v(" "),r("p",[e._v('Currently with any of http methods (GET,POST, etc.) "add" method will be hit. But let\'s say you want to hit this only when http method is POST.')]),e._v(" "),r("p",[e._v("In this case - you need to provide desired http methods to worker. Let's see an example - ")]),e._v(" "),r("pre",[r("code",[e._v('import { Controller, Worker,textResult,HTTP_METHOD } from "fortjs";\n\nexport class UserController extends Controller {\n\n    @Worker(HTTP_METHOD.POST) // This method will be only hit when any of the http method specified in worker will match.\n    async add () {\n       return textResult("add is called");\n    }\n}\n')])]),e._v(" "),r("div",{staticClass:"top-border"},[r("br")]),e._v(" "),r("p",[r("strong",[r("u",[e._v("Single route & multiple http method")])]),e._v(" "),r("br"),r("br")]),e._v(" "),r("p",[e._v('How about you want to create a route "add" which will hit different worker based on http methods. This pattern is highly used in rest api implementation . Let\'s see an example -')]),e._v(" "),r("pre",[r("code",[e._v('import { Controller, Worker, textResult,HTTP_METHOD, Route } from "fortjs";\n\nexport class UserController extends Controller {\n\n    @Worker(HTTP_METHOD.GET)\n    @Route("/add")\n    async addWithGet() { // This will be called when method will be GET\n       return textResult("add with method get is called");\n    }\n\n    @Worker(HTTP_METHOD.POST)\n    @Route("/add")\n    async addWithPost() { // This will be called when method will be POST\n       return textResult("add with method post is called");\n    }\n}\n')])]),e._v(" "),r("div",{staticClass:"top-border"},[r("br")]),e._v(" "),r("p",[r("strong",[r("u",[e._v("Params in route")])]),e._v(" "),r("br"),r("br"),e._v(" "),r("b",[e._v("1. Constant param : ")]),e._v(" "),r("br"),r("br"),e._v('\nSo far we have created a route - "abc.com/user/add". How about little more complex route - "abc.com/user/add/1". ')]),e._v(" "),r("p",[e._v("For this, we just need to modify our route.")]),e._v(" "),r("pre",[r("code",[e._v('import { Controller, Worker, textResult,HTTP_METHOD, Route } from "fortjs";\n\nexport class UserController extends Controller {\n\n    @Worker()\n    @Route("/add/1")\n    async add () {\n       return textResult("add is called");\n    }\n}\n')])]),e._v(" "),r("p",[r("b",[e._v("2. Variable param :")]),e._v(" "),r("br"),r("br"),e._v('In the url - you can see "1" is the constant value but for certain requirements - the place where 1 is present can be any value. ')]),e._v(" "),r("p",[e._v('e.g - "abc.com/user/add/2", "abc.com/user/add/hi", "abc.com/user/add/1000" etc.')]),e._v(" "),r("p",[e._v("Basically a part of the url is a variable which can hold any value.")]),e._v(" "),r("p",[e._v("You can declare a variable in a route by using "),r("code",[e._v("{}")]),e._v(". Let's see - ")]),e._v(" "),r("pre",[r("code",[e._v('import { Controller, Worker, textResult,HTTP_METHOD, Route } from "fortjs";\n\nexport class UserController extends Controller {\n\n    @Worker()\n    @Route("/add/{value}")\n    async add () {\n       const value = this.param.value; // placeholder values are present in \'param\' member of the controller.\n       return textResult("add is called");\n    }\n}\n')])]),e._v(" "),r("p",[r("b",[e._v("3. Variable & Constant :")]),e._v(" "),r("br"),r("br"),e._v("How about a route where you want to return some file based on some extension. ")]),e._v(" "),r("p",[e._v('e.g - "abc.com/file/scripts/jquery.js" . In this example - "jquery" is variable value and ".js" is constant value')]),e._v(" "),r("p",[e._v("So here :")]),e._v(" "),r("ul",[r("li",[e._v("controller route is - 'file'")]),e._v(" "),r("li",[e._v("worker route is - 'scripts/jquery.js'")])]),e._v(" "),r("pre",[r("code",[e._v('import { Controller, Worker, textResult,HTTP_METHOD, Route } from "fortjs";\n\nexport class FileController extends Controller {\n\n    @Worker()\n    @Route("/scripts/{fileName}.js")\n    async getScripts () {\n       const value = this.param.value; // placeholder values are present in \'param\' member of the controller.\n       return textResult("add is called");\n    }\n}\n')])])])}),[],!1,null,null,null);t.default=component.exports}}]);