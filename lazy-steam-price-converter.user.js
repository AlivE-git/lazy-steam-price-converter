// ==UserScript==
// @name         Lazy steam price converter
// @description  too lazy
// @namespace    http://tampermonkey.net/
// @version      0.7
// @downloadURL  https://github.com/AlivE-git/lazy-steam-price-converter/raw/main/lazy-steam-price-converter.user.js
// @author       AlivE_
// @match        https://store.steampowered.com/*
// @match        https://steamcommunity.com/market/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let coef = 0.197;

    conv("discount_original_price"); //цена на главной магазина
    conv("discount_final_price"); //цена со скидкой на главной магазина
    //conv("game_purchase_price price");
    conv("game_area_dlc_price"); //длц

    //conv("original_price price");
    conv("price");
    conv("cart_estimated_total"); //общая сумма в корзине


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
			if (prc_orig != 'Бесплатно')
                ths[i].innerHTML = prc_orig + "\n(" + Math.round(prc) + 'Р)';
        }
    }

})();