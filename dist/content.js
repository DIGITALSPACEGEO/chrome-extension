(()=>{"use strict";var e={4309:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sendClickData=void 0,t.sendClickData=function(e){var t;const n=e.target.closest(".css-1rynq56");if(n&&n.className.includes("r-bcqeeo r-qvutc0")){const e={tagName:n.tagName,id:n.id,classNames:n.className,textContent:null===(t=n.textContent)||void 0===t?void 0:t.trim().substring(0,100),url:window.location.href,timestamp:(new Date).toISOString()};chrome.runtime.sendMessage({type:"onClick",clickData:e})}}},345:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.trackUrlChanges=void 0,t.trackUrlChanges=function(){let e=location.href;new MutationObserver((()=>{const t=location.href;t!==e&&(e=t,chrome.runtime.sendMessage({type:"urlChange",url:t}))})).observe(document.body,{subtree:!0,childList:!0}),window.addEventListener("popstate",(()=>{chrome.runtime.sendMessage({type:"urlChange",url:location.href})})),window.addEventListener("hashchange",(()=>{chrome.runtime.sendMessage({type:"urlChange",url:location.href})}))}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{const e=n(4309),t=n(345);document.addEventListener("click",e.sendClickData),(0,t.trackUrlChanges)()})()})();