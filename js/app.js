(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const plus = document.querySelector(".button__true");
    const minus = document.querySelector(".button__false");
    const count = document.querySelector(".count");
    const persent = document.querySelector(".persent");
    const finish = document.querySelector(".button__finish");
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((item => {
        item.addEventListener("click", (e => {
            if (e.target.closest(".button__true")) plus.innerText = ++plus.innerText; else minus.innerText = ++minus.innerText;
            count.innerText = ++count.innerText;
            getPersent();
        }));
    }));
    function getPersent() {
        persent.innerText = `${(plus.innerText / count.innerText * 100).toFixed(0)} %`;
    }
    finish.addEventListener("click", (() => {
        location.reload();
    }));
    window["FLS"] = true;
    isWebp();
    //!===============================================================================================//
    //!===============================================================================================//
})();