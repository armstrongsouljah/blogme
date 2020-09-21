const $elem = (selector) => document.querySelector(selector)
const $elems = (selector) => document.querySelectorAll(selector)
const $newElem = (elem) => document.createElement(elem);

// initialize blog data
localStorage.setItem('blogItems', JSON.stringify([]))

// initialize tabs
const el = $elems('.tabs');
var instance = M.Tabs.init(el);

// initialize the modals
var elems = $elems('.modal');
const addFormModal = M.Modal.init(elems);
