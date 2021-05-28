(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{193:function(e,t,r){"use strict";r.r(t);var n={components:{Layout:r(170).a}},o=r(12),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",{attrs:{title:"Swagger Model",description:"Swagger model in fortjs",keywords:"swagger, automatic generate, integrate, fortjs, node",contentSrc:"/home/travis/build/ujjwalguptaofficial/fortjs.docs/out/content/tutorial/swagger/model.md"}},[r("p",[e._v("A model in swagger is a class. But you may want to have some configuration for your models. ")]),e._v(" "),r("p",[r("strong",[e._v("Note :-")]),e._v("  No configuration is required to use a class as model.")]),e._v(" "),r("p",[e._v("Fortjs-Swagger provides following configuration - ")]),e._v(" "),r("ul",[r("li",[e._v("Optional Property")]),e._v(" "),r("li",[e._v("Ignore Property")]),e._v(" "),r("li",[e._v("Example")])]),e._v(" "),r("p",[r("br")]),e._v(" "),r("h2",{attrs:{id:"letsseewhataretheusesoftheseconfigurationhowtouse"}},[e._v("Let's see what are the uses of these configuration & how to use -")]),e._v(" "),r("p",[r("br"),e._v('\nConsider a model "User" which has following structure - ')]),e._v(" "),r("pre",[r("code",[e._v("class User {\n    id: string;\n\n    name : String;\n    address: string;\n    gender: string;\n\n    isValidUser : Function;\n}\n")])]),e._v(" "),r("h4",{attrs:{id:"optionalproperty"}},[e._v("OptionalProperty")]),e._v(" "),r("p",[e._v("Consider the property "),r("code",[e._v("id")]),e._v(' in the model "User" is a primary key which means its automatically generated, In that case - ')]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("id")]),e._v(' is not required in a "POST" request, since new record will be created and new id will be generated for that request.')])]),e._v(" "),r("li",[r("p",[e._v('But it can be a required field in "PUT" request to identify the record.')])])]),e._v(" "),r("p",[e._v("So from above statement we found that id is sometimes required & sometimes not. For this condition - we can use decorator "),r("code",[e._v("OptionalProperty")]),e._v(" which will mark the field as optional in swagger doc.")]),e._v(" "),r("p",[r("br")]),e._v(" "),r("h4",{attrs:{id:"ignoreproperty"}},[e._v("IgnoreProperty")]),e._v(" "),r("p",[e._v("Now let's focus on property "),r("code",[e._v("isValidUser")]),e._v(", its a method which is being used internally in the application but it doesn't need to be specified in the swagger doc. So we can use decorator "),r("code",[e._v("IgnoreProperty")]),e._v(" which will ignore this property.")]),e._v(" "),r("p",[e._v("After changes - our class will look something like this - ")]),e._v(" "),r("pre",[r("code",[e._v('import { IgnoreProperty, OptionalProperty } from "fortjs-swagger";\n\nclass User {\n\n    @OptionalProperty\n    id: string;\n\n    name : String;\n    address: string;\n    gender: string;\n\n    @IgnoreProperty\n    isValidUser : Function;\n}\n')])]),e._v(" "),r("p",[r("br")]),e._v(" "),r("h4",{attrs:{id:"example"}},[e._v("Example")]),e._v(" "),r("p",[e._v("Fortjs-Swagger calls "),r("code",[e._v("getExample")]),e._v(" to generate the example for your model.")]),e._v(" "),r("p",[e._v('e.g - Let\'s see how we can provide an example for our model "User" ')]),e._v(" "),r("pre",[r("code",[e._v('import { IgnoreProperty, OptionalProperty, SwaggerModel } from "fortjs-swagger";\n\nclass User implements SwaggerModel {\n\n    @OptionalProperty\n    id: string;\n\n    name : String;\n    address: string;\n    gender: string;\n\n    @IgnoreProperty\n    isValidUser : Function;\n\n    // initialize the fields which we want to show in example  \n    getExample(){\n        this.id = 0;\n        this.name = "ujjwal";\n        this.address = "Planet earth";\n        this.gender = "male";\n    }\n}\n')])])])}),[],!1,null,null,null);t.default=component.exports}}]);