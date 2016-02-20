var MyDOs = (function (module) {

  'use strict';

  module.rowTemplate = function (item, array) {

    var itemElem = '';
    itemElem += '<div class="item-row">';
    itemElem += '<div class="item-id">' + (item.id || item[array].id) + '</div>';
    itemElem += '<div class="item-title">' + (item.title || item[array].title || 'No title') + '</div>';
    itemElem += '<div class="item-content">' + (item.content || item[array].content || 'No content yet') + '</div>';
    itemElem += '<div class="delete-item"><span class="delete-icon" onclick="MyDOs.deleteRow(event)">&times;</span></div>';
    itemElem += '<div class="edit-item"><span class="edit-icon" onclick="MyDOs.editRow(event)">&#9998;</span></div>';
    itemElem += '</div>';

    return itemElem;

  };

  return module;


}(MyDOs || {}));

