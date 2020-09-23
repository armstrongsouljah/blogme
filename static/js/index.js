const $elem = (selector) => document.querySelector(selector)
const $elems = (selector) => document.querySelectorAll(selector)
const $newElem = (elem) => document.createElement(elem);
localStorage.setItem('isLoggedIn', JSON.stringify(false))
localStorage.setItem('users', JSON.stringify([]))

// check authentication
const nav = $elem('#navigation');
const intro = $elem("#intro");

const isAuthenticated = JSON.parse(localStorage.getItem('isLoggedIn'));

// hide components if not logged in
if(!isAuthenticated) {
   nav.style.display = "none";
   intro.style.display = "none";
}

let editButtons;

// initialize blog data
localStorage.setItem('blogItems', JSON.stringify([]))

// initialize tabs
const el = $elems('.tabs');
var instance = M.Tabs.init(el);

// initialize the modals
var elems = $elems('.modal');
const addFormModal = M.Modal.init(elems);
