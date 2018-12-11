---
Title: "Wall"
---

Wall is security layer on top of your app. It controls whether a request should be allowed to enter inside the app. It can also be used to do some tasks and pass data inside app.

There can be multiple wall for an app & all walls are called in the same order as they are defined.

Wall has two events -

* **onIncoming** - called when a request wants to enter inside the fort (app). If this events returns null means request is allowed to enter otherwise rejects with the result returned.

    If there are multiple walls then "onIncoming" is called in order as they are defined.
* **onOutgoing** - called when a request is about to leave. This is an optional event & Result returned from this event is ignored.

    If there are multiple walls then "onOutgoing" is called in reverse order as they are defined.

**Note:-** Since wall is called for every request, it might slow your app. So it is recommended to not create wall untill necessary.

A wall have access to following - 

* Request - `this.request`
* Response - `this.response`
* Cookie - `this.cookies`
* Session - `this.session`
* Query string data - `this.query`
* Post data - `this.post`
* Route parameter -  `this.params`
* Data from other components -  `this.data`

<br>
# Creating wall

<br>
Wall is a class which - Extends the class "Wall" from fortjs.

```
import { Wall } from "fortjs"

export class AppWall extends Wall {
    async onIncoming() {
        console.log("request is asking for entering into the fort");
        if (some condition) {
            // block request
            return textResult("This request is blocked by wall");
        } else {
            // allow request
            return null;
        }

    }

    async onOutgoing() {
        // this events can be used to set headers or log datas etc
        console.log("request finished");
    }
}
```