(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{191:function(e,n,t){"use strict";t.r(n);var r={components:{Layout:t(170).a}},o=t(12),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Layout",{attrs:{title:"e2e Test",description:"Setting up e2e test in fortjs",keywords:"test, unit, e2e, fortjs, node",contentSrc:"/home/travis/build/ujjwalguptaofficial/fortjs.docs/out/content/tutorial/test/e2e-test.md"}},[t("p",[e._v("For e2e test - we recommend to use Axios. But feel free to use your favourite http client library.")]),e._v(" "),t("p",[e._v("Let's see an example - Consider UserController implments Rest Api & codes are - ")]),e._v(" "),t("pre",[t("code",[e._v('import { Controller, textResult, DefaultWorker, jsonResult, Worker, Route, HTTP_STATUS_CODE, HTTP_METHOD, Guards, Singleton } from \'fortjs\';\nimport { UserService } from \'../services/user_service\';\nimport { ModelUserGuard } from \'../guards/model_user_guard\';\nimport { User } from \'../models/user\';\n\nexport class UserController extends Controller {\n\n    service: UserService;\n    constructor(@Singleton(UserService) service: UserService) {\n        super();\n        this.service = service;\n    }\n\n    @DefaultWorker()\n    async getUsers() {\n        return jsonResult(this.service.getUsers());\n    }\n\n    @Worker(HTTP_METHOD.Post)\n    @Route("/")\n    @Guards(ModelUserGuard)\n    async addUser() {\n        const user = this.data.user;\n        const newUser = this.service.addUser(user);\n        return jsonResult(newUser, HTTP_STATUS_CODE.Created);\n    }\n\n    @Worker(HTTP_METHOD.Put)\n    @Route("/")\n    async updateUser() {\n        const user = new User().init(this.body);\n        const userUpdated = this.service.updateUser(user);\n        if (userUpdated === true) {\n            return textResult("user updated");\n        }\n        else {\n            return textResult("invalid user");\n        }\n\n    }\n\n    @Worker(HTTP_METHOD.Get)\n    @Route("/{id}")\n    async getUser() {\n\n        const userId = Number(this.param.id);\n        const user = new UserService().getUser(userId);\n        if (user == null) {\n            return textResult("invalid user id", HTTP_STATUS_CODE.NotFound);\n        }\n        return jsonResult(user);\n\n    }\n\n}\n')])]),e._v(" "),t("h2",{attrs:{id:"testcode"}},[e._v("Test code -")]),e._v(" "),t("pre",[t("code",[e._v('import axios from "axios";\nimport { createApp } from "../index";\n\ndescribe(\'/user\', () => {\n\n    let httpRequest;\n    beforeAll(async () => {\n         await createApp();\n        httpRequest = axios.create({\n            baseURL: process.env.APP_URL + "/user",\n            timeout: 1000\n        });\n    });\n\n    it(\'/get all users\', async () => {\n        const response = await httpRequest.get(\'/\', {\n            headers: {\n                accept: \'application/json\'\n            }\n        });\n        expect(response.status).toEqual(200);\n        expect(response.headers[\'content-type\']).toEqual(\'application/json\');\n        expect(response.data).toEqual([\n            { "address": "bhubaneswar india", "emailId": "ujjwal@mg.com", "gender": "male", "id": 1, "name": "ujjwal", "password": "admin" }\n        ]);\n    });\n\n    it(\'/add user\', async () => {\n        const user = {\n            "name": "ujjwal",\n            "emailId": "ujjwal@m.com",\n            "password": "12345as",\n            "gender": "male",\n            "address": "sadfsgbhfgtbrg"\n        };\n        const response = await httpRequest.post(\'/\', user, {\n            headers: {\n                accept: \'application/json\'\n            }\n        });\n        expect(response.status).toEqual(201);\n        expect(response.headers[\'content-type\']).toEqual(\'application/json\');\n\n        expect(response.data).toEqual({ id: 2, ...user });\n    });\n\n    it(\'/update user\', async () => {\n        const user = {\n            "name": "ujjwal gupta",\n            "emailId": "ujjwal@m.com",\n            "password": "12345as",\n            "gender": "male",\n            "address": "sadfsgbhfgtbrg",\n            "id": 2\n        };\n        const response = await httpRequest.put(\'/\', user, {\n            headers: {\n                accept: \'*/*\'\n            }\n        });\n        expect(response.status).toEqual(200);\n        expect(response.data).toEqual("user updated");\n    });\n});\n')])]),e._v(" "),t("p",[e._v("In the above code - ")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("We are initializing our app and creating an axios instance in beforeAll hook of jest. This will ensure that our app is initialized before any test case is executed.")])]),e._v(" "),t("li",[t("p",[e._v('In test case "get all users" - we create a get request to user end point and then send the request, after response is received we compare it against expected output.')])])])])}),[],!1,null,null,null);n.default=component.exports}}]);