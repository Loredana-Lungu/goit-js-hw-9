!function(){var t;document.querySelector("[data-start]").addEventListener("click",(function(){this.disabled=!0,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),document.querySelector("[data-stop]").addEventListener("click",(function(){clearInterval(t),document.querySelector("[data-start]").disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.e691cee0.js.map