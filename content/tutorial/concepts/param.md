---
Title: "Param"
Keywords: "param, route, customize, fortjs, node"
Description: "parameterizing route in fortjs"
---

`param` is class member of  Guard and Controller. It is used to extract route data for placeholder based routing.

e.g - consider the route - "abc.com/{value}/hi" . Here value is a placeholder and this can be extracted using param. 

```
export class FileController extends Controller {
   
    @Route("/scripts/{file}.js")
    @Worker()
    async getScripts() {
        const fileName = this.param.file;
    }
}
```

For more info about routing, please check the [route](route) doc.