!function(){"use strict";function i(i,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}var n=function(){function n(i){var t=this;!function(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.el=i,this.summary=i.querySelector("summary"),this.content=i.querySelector(".sc_fs_faq__content"),this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.summary.addEventListener("click",(function(i){return t.onClick(i)}))}var t,e,s;return t=n,(e=[{key:"onClick",value:function(i){i.preventDefault(),this.el.style.overflow="hidden",this.isClosing||!this.el.open?this.open():(this.isExpanding||this.el.open)&&this.shrink()}},{key:"shrink",value:function(){var i=this;this.isClosing=!0;var n="".concat(this.el.offsetHeight,"px"),t="".concat(this.summary.offsetHeight,"px");this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[n,t]},{duration:400,easing:"ease-out"}),this.animation.onfinish=function(){return i.onAnimationFinish(!1)},this.animation.oncancel=function(){return i.isClosing=!1}}},{key:"open",value:function(){var i=this;this.el.style.height="".concat(this.el.offsetHeight,"px"),this.el.open=!0,window.requestAnimationFrame((function(){return i.expand()}))}},{key:"expand",value:function(){var i=this;this.isExpanding=!0;var n="".concat(this.el.offsetHeight,"px"),t="".concat(this.summary.offsetHeight+this.content.offsetHeight,"px");this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[n,t]},{duration:400,easing:"ease-out"}),this.animation.onfinish=function(){return i.onAnimationFinish(!0)},this.animation.oncancel=function(){return i.isExpanding=!1}}},{key:"onAnimationFinish",value:function(i){this.el.open=i,this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.el.style.height=this.el.style.overflow=""}}])&&i(t.prototype,e),s&&i(t,s),Object.defineProperty(t,"prototype",{writable:!1}),n}();document.querySelectorAll(".sc_fs_card__animate").forEach((function(i){new n(i)}))}()