!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var a={};function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t,a){t&&n(e.prototype,t);a&&n(e,a);return e};var s=document.querySelector("body");new(function(){"use strict";function n(a,s){e(t)(this,n),this.selector=a,this.targetData=Number(new Date(s))}return e(a)(n,[{key:"residue",get:function(){return this._residue=Number(new Date(this.targetData))-Number(new Date)}},{key:"days",value:function(){return Math.floor(this.residue/864e5)}},{key:"hours",value:function(){return Math.floor(this.residue%864e5/36e5)}},{key:"mins",value:function(){return Math.floor(this.residue%36e5/6e4)}},{key:"secs",value:function(){return Math.floor(this.residue%6e4/1e3)}},{key:"start",value:function(){var e=this,t=null;if(!t){s.insertAdjacentHTML("afterbegin",'\n                    <div class="timer" id="timer-1">\n            <div class="field">\n                <span class="value" data-value="days">00</span>\n                <span class="label">Days</span>\n            </div>\n\n            <div class="field">\n                <span class="value" data-value="hours">00</span>\n                <span class="label">Hours</span>\n            </div>\n\n            <div class="field">\n                <span class="value" data-value="mins">00</span>\n                <span class="label">Minutes</span>\n            </div>\n\n            <div class="field">\n                <span class="value" data-value="secs">00</span>\n                <span class="label">Seconds</span>\n            </div>\n            </div>');var a={days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]')};t=setInterval((function(){a.days.textContent=String(e.days()).padStart(2,"0"),a.hours.textContent=String(e.hours()).padStart(2,"0"),a.mins.textContent=String(e.mins()).padStart(2,"0"),a.secs.textContent=String(e.secs()).padStart(2,"0")}),1e3)}}}]),n}())("#timer-1","Aug 11, 2023").start()}();
//# sourceMappingURL=index.e43b0042.js.map
