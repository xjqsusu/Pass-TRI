'use strict';

let pass = document.getElementById('Pass');

pass.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file:"/passall.js"});
  });
};
