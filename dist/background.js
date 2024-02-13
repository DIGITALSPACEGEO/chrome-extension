(()=>{"use strict";var e="https://api.cookiemonster.masa.finance";function o(o,n,a){if("pageView"===n){var s={type:"pageView",client_id:"d3859a90-3d1e-44bf-8925-eb14935442c8",event_data:{client_app:"Masa Chrome Extension",client_name:"Masa",page:o.url}};a&&(console.log("User address before sending:",a),s.user_address=a),console.log("Payload to be sent:",s),fetch("".concat(e,"/tracking"),{method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"},body:JSON.stringify(s)}).then((function(e){console.log("Data sent successfully:",e)})).catch((function(e){console.error("Error sending data:",e)}))}}function n(e){chrome.storage.local.get(["trackingEnabled","userAddress"],(function(n){if(console.log("Storage result:",n),console.log("Tracking enabled:",n.trackingEnabled),console.log("User address from storage:",n.userAddress),n.trackingEnabled){var a={url:e};console.log("Sending page view for URL:",e),n.userAddress?(console.log("User address is available:",n.userAddress),o(a,"pageView",n.userAddress)):(console.log("User address is not available, not sending user address."),o(a,"pageView"))}else console.log("Tracking is disabled, not sending page view.")}))}console.log("Background script loaded."),chrome.webNavigation.onCompleted.addListener((function(e){0===e.frameId?(console.log("Main frame navigation completed:",e),n(e.url)):console.log("Subframe navigation completed, ignored.")})),chrome.runtime.onMessage.addListener((function(e,o,a){var s;"urlChange"===e.type?(console.log("URL changed to:",e.url),n(e.url)):"onClick"===e.type&&(console.log("Click event detected:",e.clickData),s=e.clickData,chrome.storage.local.get(["trackingEnabled"],(function(e){e.trackingEnabled&&console.log("Sending click event data:",s)})))}))})();