// ==UserScript==
// @name         Lazy steam price converter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @downloadURL  https://github.com/AlivE-git/lazy-steam-price-converter/raw/master/lazy-steam-price-converter.user.js
// @author       AlivE_
// @match        https://store.steampowered.com/*
// @match        https://steamcommunity.com/market/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let coef = 0.18;

    conv("discount_original_price");
    conv("discount_final_price");
    conv("game_purchase_price");
    conv("game_area_dlc_price");

    function conv(div_name)
    {
        var ths = document.getElementsByClassName(div_name);
        for (var i = 0; i < ths.length; i++) {
            let prc_orig = ths[i].textContent;
            let prc = ths[i].textContent;
            prc = prc.replace(' ', '')
            prc = prc.replace(',', '.')
            prc = prc.replace('₸', '') * coef;
            //console.log(prc);
            ths[i].innerHTML = prc_orig + "\n(" + Math.round(prc) + 'Р)';
        }
    }

})();