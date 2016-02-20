var MyDOs = (function (module) {

  'use strict';
  
  /** @function addLastItem
   * 
   * @description Adds the newly created item to the DOM table.
   * @example
   * this.addLastItem({
      id: id,
      title: itemName,
      content: content
    });
   * @param {object} item - {id: number, title: "String", content: "String"}
   * @returns {object}
   */
  module.addLastItem = function (item) {

    var wrapper = this.dom.element.id('itemsListWrapper');

    var itemRow = this.dom.div();

    itemRow.innerHTML = this.rowTemplate(item);

    return wrapper.insertBefore(itemRow, wrapper.firstChild);

  };

  return module;


}(MyDOs || {}));