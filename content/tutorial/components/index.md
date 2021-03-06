---
Title: "Components"
Keywords: "components, modularize, app, fortjs, node"
Description: "Description about components of fortjs"
---

Components are most important part of fort application. They are independent & every component has its own lifecycle and scope. It helps you to modularize your app & reutilize codes.

There are three types of components - 

1. [Wall](/tutorial/components/wall)

2. [Shield](/tutorial/components/shield)

3. [Guard](/tutorial/components/guard)

# Concept 

<img src="/img/fort_component.png" alt="FortJs Architecture" style="height:600px;"/>

**The above picture shows the architecture of fortjs app and flow of http request inside app -** 

<ul>
    <li>
    When a http request comes to your app - it has to go through sequence of components i.e <a href="/tutorial/components/wall">Wall</a>, <a target="_blank" href="/tutorial/components/shield">Shield</a> & <a target="_blank" href="/tutorial/components/guard">Guard</a> and if everyone allows then request is transferred to Worker inside <a target="_blank" href="/tutorial/controller">Controller</a> where the actual resource is present.
    </li>
    <li>The Http Request has to first go through component <a href="/tutorial/components/wall">Wall</a>. The incoming event of wall is called and if wall 
        <ul>
            <li>Allows - It is sent to next lower level component which is <a target="_blank" href="/tutorial/components/shield">Shield</a></li>
            <li>Rejects - The result is considered as final result and result is sent as http response & its lifecycle is ended there.</li>
        </ul>
    </li>
    <li>
        After <a href="/tutorial/wall">Wall</a> allows the request, it is sent to <a target="_blank" href="/tutorial/components/shield">Shield</a> and if shield 
        <ul>
            <li>Allows - It is sent to next component which is <a target="_blank" href="/tutorial/components/guard">Guard</a> </li>
            <li> Rejects - The result is considered as final result. The result has to go through wall outgoing event and finally http response is sent.</li>
        </ul>
    </li>
    <li>
        After <a target="_blank" href="/tutorial/components/shield">Shield</a> allows - the request is allowed to go inside <a target="_blank" href="/tutorial/controller">Controller</a> & control is transferred to <a target="_blank" href="/tutorial/components/guard">Guard</a> & if guard
        <ul>
            <li>Allows - It is sent to Worker where the actual resource is present.</li>
            <li> Rejects - The result is considered as final result. The result has to go through wall outgoing event and finally http response is sent.</li>
        </ul>
    </li>
</ul>

<br>
# Important points
<br>

* It is not necessary to create any components, you can have just Controller and Worker. But it is highly recommended to use components since components helps to modularize your app into small dedicated features making your code cleaner, reutilizable & testable.

* Here we saw Components are being used to block the request, but it can be also used to do some work and pass the result from one component to another. Check out particular component to know more. 

e.g - The validation of data, extracting some information like ip address & passing from one component to another etc.

<style>
li{
    padding-top:10px;
}
ul{
    margin-left:10px;
}
</style>


 