!function (e) { 
    "use strict";
     var r = e.querySelector("#app"); 
    r.displayInstalledToast = function () {
        e.querySelector("#caching-complete").show() 
    },
    r.addEventListener("dom-change",
    function () { 
        console.log("Our app is ready to rock!")
    }),
    window.addEventListener("WebComponentsReady", 
    function () {
        e.querySelector("body").removeAttribute("unresolved"); 
        var r = e.querySelector("#paperDrawerPanel"); 
        r.forceNarrow = !0 
    }),
    r.onMenuSelect = function () { 
    var r = e.querySelector("#paperDrawerPanel"); 
    r.narrow && r.closeDrawer() 
    }
}(document);
