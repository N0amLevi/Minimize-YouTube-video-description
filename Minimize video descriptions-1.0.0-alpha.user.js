// ==UserScript==
// @name         Minimize video descriptions
// @namespace    https://github.com/N0amLevi/Minimize-YouTube-video-description
// @version      1.0.0-alpha
// @description  Minimize the description of youtube videos automaticlly
// @author       Noam Levi
// @match        http://*/*
// @grant        none

// @domain          youtube.com
// @include         http*://www.youtube.com/*
// @include         http*://m.youtube.com/*
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector(`#collapse`).click();
})();
