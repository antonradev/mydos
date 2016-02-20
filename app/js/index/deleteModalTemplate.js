var MyDOs = (function (module) {

  'use strict';

  module.deleteModalTemplate = function () {

    var itemElem = '';
    itemElem += '<div class="edit-item-modal delete-modal" id="deleteItemModal">';
    itemElem += '<span class="close-edit-modal js-close-modal">&times;</span>';
    itemElem += '<h4>Delete Item</h4><br>';
    itemElem += '<div><button class="btn btn-danger" id="deleteItemButton">' +
            'Delete Item</button> <button class="btn js-close-modal">Cancel</button>';
    itemElem += '</div></div>';

    return itemElem;

  };

  return module;


}(MyDOs || {}));