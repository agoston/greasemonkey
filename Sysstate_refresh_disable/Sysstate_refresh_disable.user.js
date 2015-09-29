// ==UserScript==
// @name        Sysstate refresh disable
// @namespace   horvath.agoston@gmail.com
// @include     http*://sysstate.dev.bol.com/
// @version     1
// @grant       none
// ==/UserScript==

window.addEventListener ("load", Greasemonkey_main, false);

function Greasemonkey_main () {
  window.refresh = false;
}

