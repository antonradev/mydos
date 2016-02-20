var MyDOs = (function (module) {

  'use strict';

  module.editModalTemplate = function (itemName, itemContent) {

    if (!itemName || !itemContent) {
      itemName = '';
      itemContent = '';
    }

    var itemElem = '';
    itemElem += '<div class="edit-item-modal" id="editItemModal">';
    itemElem += '<span class="close-edit-modal js-close-modal" id="closeEditModal">&times;</span>';
    itemElem += '<h4>Edit Item</h4>';
    itemElem += '<div><input type="text" class="form-control" ' +
            'value="' + itemName + '" id="editedItemName" maxlength="30"></div>';
    itemElem += '<div><textarea class="form-control" ' +
            ' id="editedItemContent" maxlength="50">' + itemContent + '</textarea></div>';
    itemElem += '<div><button class="btn btn-primary" id="saveEditedItem">' +
            'Save Item</button> <button class="btn js-close-modal" id="cancelEditedItem">Cancel</button>';
    itemElem += '</div></div>';

    return itemElem;

  };

  return module;


}(MyDOs || {}));