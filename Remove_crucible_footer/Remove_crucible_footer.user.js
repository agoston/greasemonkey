// ==UserScript==
// @name        Remove crucible footer
// @namespace   horvath.agoston@gmail.com
// @include     /^https?://crucible\.tools\.bol\.com//
// @version     1
// @grant       none
// ==/UserScript==

window.addEventListener ("load", Greasemonkey_main, false);

function Greasemonkey_main () {
$('div#page div#footer').remove();
}
