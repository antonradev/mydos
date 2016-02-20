var MyDOs = (function (module) {

  'use strict';

  module.renderTable = function () {

    var container = this.dom.element.id(this.settings.container);
    container.innerHTML = '';

    // Create DIV element for all the items rows
    var wrapper = this.dom.div({class: 'item-rows', id: 'itemsListWrapper'});

    // Array with items content objects
    var allItems = this.data.getAllItems(this.settings.dataTableName);

    for (var prop in allItems) {

      if (allItems.hasOwnProperty(prop)) {

        var itemRow = this.dom.div();

        itemRow.innerHTML = this.rowTemplate(allItems, prop);

        while (itemRow.firstChild) {
          this.dom.append(itemRow.firstChild, wrapper);
        }

      }
    }

    this.dom.append(wrapper, container);

  };

  return module;

}(MyDOs || {}));