var MyDOs = (function (module) {

  'use strict';
  
  /** @function saveItem
   *
   * @description Sends the item data to the database saving method this.data.save() and executes addLastItem() function to render the item in the view
   * @example app.saveItem(input.value, textArea.value);
   * @param {string} itemName - The item title
   * @param {string} content - The item content
   */
  module.saveItem = function (itemName, content) {

    var id = this.data.getLastItemId(this.settings.dataTableName) + 1;

    var itemObj = {
      id: id,
      title: itemName,
      content: content
    };

    this.data.save(this.settings.dataTableName, itemObj, function () {
      this.addLastItem(itemObj);
    }.bind(this));

  };

  return module;


}(MyDOs || {}));