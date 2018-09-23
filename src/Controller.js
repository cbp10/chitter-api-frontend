function Controller() {}

Controller.prototype.createView = function(element, html) {
  element.innerHTML = html
};