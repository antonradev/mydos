var MyDOs = (function (module) {

  'use strict';

  var app = MyDOs;

  /** @function deleteRow
   *
   * @description Deletes item from the view table and sends ID number for the deleting method from database
   * @example
   * <span onclick="MyDOs.deleteRow(event)">Delete</span>
   * @param {object} row - The event object
   */
  module.deleteRow = function (row) {

    var modal = app.dom.element.id('modalPlaceholder');

    modal.innerHTML = this.deleteModalTemplate();

    // Close Buttons
    var closeBtns = document.getElementsByClassName('js-close-modal');

    var deleteBtn = app.dom.element.id('deleteItemButton');

    app.dom.event(deleteBtn, 'click', function () {

      var data = {
        id: row.path[2].childNodes[0].innerText
      };

      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('deletedRow', true, true, data);

      app.data.deleteItem();

      window.dispatchEvent(event);

      row.path[3].removeChild(row.path[2]);

      modal.innerHTML = '';

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