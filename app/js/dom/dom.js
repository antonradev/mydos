var MyDOs = (function (module) {

  'use strict';

  module.dom = {};

  module.dom.element = {};

  /** @function id
   *
   * @description Gets DOM element by id
   * @example
   * var selector = app.dom.element.id('someElementId');
   * @param {string} id - The id of the html element
   * @returns {object}
   */
  module.dom.element.id = function (id) {

    return document.getElementById(id);

  };


  /** @function addClass
   *
   * @description Adds class to DOM element
   * @example
   * app.dom.element.addClass('className', selector);
   * @param {string} className - Class name string
   * @param {object} element - The element
   * @returns {string}
   */
  module.dom.element.addClass = function (className, element) {

    return element.className = className;

  };


  /** @function div
   *
   * @description Creates DIV element. Adds element attributes if passed as object parameters
   * @example
   * var wrapper = this.dom.div({class: 'item-rows', id: 'itemsListWrapper'});
   * @param {object} options - Parameters to be added as element attributes
   * @param {function} callback - Callback function
   * @returns {object}
   */
  module.dom.div = function (options, callback) {

    var div = document.createElement("DIV");

    for (var attr in options)
      div.setAttribute(attr, options[attr]);

    if (callback)
      callback();

    return div;

  };


  /** @function input
   *
   * @description Creates INPUT element. Adds element attributes if passed as object parameters
   * @example
   * var input = app.dom.input({
   *  id: 'itemNameField',
   *  placeholder: 'Note Name:',
   *  class: 'form-control item-name-field',
   *  maxlength: '30'
   * });
   * @param {object} options - Parameters to be added as element attributes
   * @returns {object}
   */
  module.dom.input = function (options) {

    var input = document.createElement("INPUT");

    if (!options.type)
      input.setAttribute('type', 'text');

    for (var attr in options)
      input.setAttribute(attr, options[attr]);

    return input;

  };


  /** @function textarea
   *
   * @description Creates TEXTAREA element. Adds element attributes if passed as object parameters
   * @example
   * var textArea = app.dom.textarea({
   *    id: 'itemContentField',
   *    placeholder: 'Description:',
   *    class: 'form-control item-description-field',
   *    maxlength: '50'
   * });
   * @param {object} options - Parameters to be added as element attributes
   * @returns {object}
   */
  module.dom.textarea = function (options) {

    var textarea = document.createElement("TEXTAREA");

    for (var attr in options)
      textarea.setAttribute(attr, options[attr]);

    return textarea;

  };


  /** @function button
   *
   * @description Creates BUTTON element. Adds element attributes if passed as object parameters
   * @example
   * var button = app.dom.button({
   *    id: 'itemSaveButton',
   *    class: 'btn btn-primary disabled',
   *    disabled: true
   * }, 'Button text');
   * @param {object} options - Parameters to be added as element attributes
   * @param {string} text - Text for the button label
   * @returns {object}
   */
  module.dom.button = function (options, text) {

    var button = document.createElement("BUTTON");

    for (var attr in options)
      button.setAttribute(attr, options[attr]);

    if (text)
      button.innerHTML = text;

    return button;

  };


  /** @function append
   *
   * @description Appends html elements inside parent selector. Can append one or multiple elements
   * @example
   * app.dom.append([input, textArea, button], form);
   * @param {array} elements - Array of html elements
   * @param {object} parent - Parent selector
   * @returns {object}
   */
  module.dom.append = function (elements, parent) {

    if (!elements || !parent)
      throw new Error('dom.append() requires wrapper element and element to be appended');

    if (elements.length)
      for (var i = 0; i <= elements.length - 1; i++) {
        if (elements[i].nodeType === 1) {
          parent.appendChild(elements[i]);
        } else {
          throw new Error('Some of ' + '"' + elements + '"' +
                  ' are not nodes (nodeType). \n You need to use DOM elements');
        }
      }
    else {
      if (elements.nodeType === 1) {
        parent.appendChild(elements);
      } else {
        throw new Error(elements + ' is not a node (nodeType). \n You need to use DOM element');
      }
    }

    return parent;

  };


  /** @function event
   *
   * @description Add event listener. Can add multiple events to single element
   * @example
   * app.dom.event(input, 'blur keyup', function () {
   *   ...
   * });
   * @param {object} elem - HTML selector
   * @param {string} events - String with events or single event
   * @param {function} fn - Event function
   */
  module.dom.event = function (elem, events, fn) {

    if (!elem)
      throw new Error('module.dom.event() - First argument is "' + elem +
              '". An element passed is needed for the event function.' +
              ' Check your passed variable/scope');

    var eventsList = events.split(' ');
    for (var i = 0, length = eventsList.length; i < length; i++) {
      elem.addEventListener(eventsList[i], fn, false);
    }

  };


  /** @function activateButton
   *
   * @description Enables or disables button if conditions are passed (Inputs are filled)
   * @example
   * app.dom.activateButton(input, textArea, button);
   * @param {object} input - Input element, expecting to be filled in order the button to be activated
   * @param {object} textarea - Textarea element, expecting to be filled in order the button to be activated
   * @param {object} button - The button element
   */
  module.dom.activateButton = function (input, textarea, button) {

    if (input.value.length > 0 && textarea.value.length > 0) {
      this.element.addClass('btn btn-primary', button);
      button.removeAttribute('disabled');
    } else {
      this.element.addClass('btn btn-primary disabled', button);
      button.setAttribute('disabled', true);
    }

  };



  return module;

}(MyDOs || {}));