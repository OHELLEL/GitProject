(this.webpackJsonpmatajiri=this.webpackJsonpmatajiri||[]).push([[21],{80:function(i,t,o){"use strict";o.r(t),o.d(t,"ion_icon",(function(){return l}));var e=o(40),n=o(77),r=function i(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var o=0;o<t.attributes.length;o++){var e=t.attributes[o].value;if(Object(n.e)(e)&&0===e.toLowerCase().indexOf("on"))return!1}for(o=0;o<t.childNodes.length;o++)if(!i(t.childNodes[o]))return!1}return!0},s=new Map,c=new Map,a=function(i,t){var o=c.get(i);if(!o){if("undefined"===typeof fetch||"undefined"===typeof document)return s.set(i,""),Promise.resolve();o=fetch(i).then((function(o){if(o.ok)return o.text().then((function(o){o&&!1!==t&&(o=function(i){var t=document.createElement("div");t.innerHTML=i;for(var o=t.childNodes.length-1;o>=0;o--)"svg"!==t.childNodes[o].nodeName.toLowerCase()&&t.removeChild(t.childNodes[o]);var e=t.firstElementChild;if(e&&"svg"===e.nodeName.toLowerCase()){var n=e.getAttribute("class")||"";if(e.setAttribute("class",(n+" s-ion-icon").trim()),r(e))return t.innerHTML}return""}(o)),s.set(i,o||"")}));s.set(i,"")})),c.set(i,o)}return o},l=function(){function i(i){var t=this;Object(e.e)(this,i),this.iconName=null,this.inheritedAttributes={},this.isVisible=!1,this.mode=h(),this.lazy=!1,this.sanitize=!0,this.hasAriaHidden=function(){var i=t.el;return i.hasAttribute("aria-hidden")&&"true"===i.getAttribute("aria-hidden")}}return i.prototype.componentWillLoad=function(){this.inheritedAttributes=Object(n.b)(this.el,["aria-label"])},i.prototype.connectedCallback=function(){var i=this;this.waitUntilVisible(this.el,"50px",(function(){i.isVisible=!0,i.loadIcon()}))},i.prototype.disconnectedCallback=function(){this.io&&(this.io.disconnect(),this.io=void 0)},i.prototype.waitUntilVisible=function(i,t,o){var e=this;if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){var n=this.io=new window.IntersectionObserver((function(i){i[0].isIntersecting&&(n.disconnect(),e.io=void 0,o())}),{rootMargin:t});n.observe(i)}else o()},i.prototype.loadIcon=function(){var i=this;if(this.isVisible){var t=Object(n.d)(this);t&&(s.has(t)?this.svgContent=s.get(t):a(t,this.sanitize).then((function(){return i.svgContent=s.get(t)})))}var o=this.iconName=Object(n.c)(this.name,this.icon,this.mode,this.ios,this.md);o&&(this.ariaLabel=o.replace(/\-/g," "))},i.prototype.render=function(){var i,t,o=this,n=o.iconName,r=o.ariaLabel,s=o.inheritedAttributes,c=this.mode||"md",a=this.flipRtl||n&&(n.indexOf("arrow")>-1||n.indexOf("chevron")>-1)&&!1!==this.flipRtl;return Object(e.d)(e.a,Object.assign({"aria-label":void 0===r||this.hasAriaHidden()?null:r,role:"img",class:Object.assign(Object.assign((i={},i[c]=!0,i),d(this.color)),(t={},t["icon-"+this.size]=!!this.size,t["flip-rtl"]=!!a&&"rtl"===this.el.ownerDocument.dir,t))},s),this.svgContent?Object(e.d)("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(e.d)("div",{class:"icon-inner"}))},Object.defineProperty(i,"assetsDirs",{get:function(){return["svg"]},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"el",{get:function(){return Object(e.b)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(i,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}},enumerable:!1,configurable:!0}),i}(),h=function(){return"undefined"!==typeof document&&document.documentElement.getAttribute("mode")||"md"},d=function(i){var t;return i?((t={"ion-color":!0})["ion-color-"+i]=!0,t):null};l.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"}}]);
//# sourceMappingURL=21.e34338ed.chunk.js.map