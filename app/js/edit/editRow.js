var MyDOs = (function (module) {

  'use strict';

  var app = MyDOs;

  /** @function editRow
   *
   * @description Edits selected item in the view table. Updates the html values and sends item object to database editing method `data.editItem()`
   * @example
   * <span onclick="MyDOs.editRow(event)">Edit</span>
   * @param {object} row - Event object
   */
  module.editRow = function (row) {

    var data = {
      id: row.path[2].childNodes[0].innerText,
      name: row.path[2].childNodes[1].innerText,
      content: row.path[2].childNodes[2].innerText
    };

    // Modal
    var modal = app.dom.element.id('modalPlaceholder');

    // Opens Modal with the values prefilled
    modal.innerHTML = this.editModalTemplate(data.name, data.content);

    // Close Buttons
    var closeBtns = document.getElementsByClassName('js-close-modal');

    // Save Button
    var saveBtn = app.dom.element.id('saveEditedItem');

    // Input Name
    var itemInputName = app.dom.element.id('editedItemName');
    var itemContent = app.dom.element.id('editedItemContent');

    app.dom.event(itemInputName, 'keyup', function () {
      data.name = itemInputName.value;
      app.dom.activateButton(itemInputName, itemContent, saveBtn);
    });

    app.dom.event(itemContent, 'keyup', function () {
      data.content = itemContent.value;
      app.dom.activateButton(itemInputName, itemContent, saveBtn);
    });

    // Custom Event for Edit
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('editedRow', true, true, data);

    // Call Data Edit function
    app.dom.event(saveBtn, 'click', function () {

      // Saving in database
      app.data.editItem();

      modal.innerHTML = '';
      row.path[2].childNodes[1].innerText = data.name;
      row.path[2].childNodes[2].innerText = data.content;
      // Remove the Custom Event
      window.dispatchEvent(event);
    });

    // Closing Modal
    for (var btn in closeBtns) {
      if (closeBtns.hasOwnProperty(btn))
        closeModalEvent(closeBtns, btn);
    }

    function closeModalEvent(closeBtns, btn) {
      app.dom.event(closeBtns[btn], 'click', function () {
        modal.innerHTML = '';
      });
    }

  };

  return module;

}(MyDOs || {}));