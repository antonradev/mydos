var MyDOs = (function (module) {

  'use strict';

  var dataTableName = MyDOs.settings.dataTableName;

  module.data = {};

  module.data.exampleRows = function () {

    localStorage.setItem('items', JSON.stringify(
            [{
                id: 3,
                title: 'Just a title',
                content: 'This is the content for this item'
              }, {
                id: 2,
                title: 'Another item',
                content: 'The item just went to the river by its horse'
              }, {
                id: 1,
                title: 'The 3th item here',
                content: 'The very first item with the id 1. This is an item in the local-Storage array.'
              }]
            ));

    MyDOs.renderTable();

  };

  //module.data.exampleRows();


  /** @function parse
   *
   * @description Gets JSON and do JSON Parse to Array
   * @param {object} data - The JSON object to be parsed to JavaScript Array
   * @returns {array}
   */
  module.data.parse = function (data) {

    return JSON.parse(data);

  };

  /** @function write
   *
   * @description Gets Array JSON Stringify
   * @param {array} data - The javascript Array to be JSON stringified
   * @returns {json}
   */
  module.data.write = function (data) {

    console.log(JSON.stringify(data));
    return JSON.stringify(data);

  };

  /** @function getLastItemId
   *
   * @description Gets last item ID from the database. If no current items are inserted, returns 0
   * @example
   * this.data.getLastItemId('items'); // 5
   * @param {string} key - The name of the database table (The LocalStorage key name)
   * @returns {number}
   */
  module.data.getLastItemId = function (key) {

    var id = null;

    if (!this.parse(localStorage.getItem(key)) ||
            this.parse(localStorage.getItem(key)).length === 0)
      id = 0;
    else
      id = this.parse(localStorage.getItem(key))[0].id;
    return id;

  };

  /** @function getAllItems
   *
   * @description Gets All items from the database
   * @example
   * this.data.getAllItems('items');
   * @param {string} key - The name of the database table (The LocalStorage key name)
   * @returns {array}
   */
  module.data.getAllItems = function (key) {

    var retrievedObject = localStorage.getItem(key);

    var itemsArray = this.parse(retrievedObject);

    return itemsArray;

  };


  /** @function save
   *
   * @description Saves the inserted item in the database. Gets all the items from the localstorage and unshifts the new item, then saves the newly updated object to the localstorage
   * @example
   * var itemObj = {
   *   id: id,
   *   title: itemName,
   *   content: content
   * };
   * this.data.save('items', itemObj, function () {
   *   this.addLastItem(itemObj);
   * });
   * @param {string} key - The name of the database table (The LocalStorage key name)
   * @param {object} item - The item object, contains id, title, content...
   * @param {function} callback - Callback function to do something after the item is saved, like updating the view etc.
   */
  module.data.save = function (key, item, callback) {

    var currentLocalStorageObject = this.getAllItems(dataTableName);

    if (typeof currentLocalStorageObject === 'object' &&
            currentLocalStorageObject === null)
      currentLocalStorageObject = [];

    currentLocalStorageObject.unshift(item);

    localStorage.setItem(key, this.write(currentLocalStorageObject));

    if (callback)
      callback();

  };


  /** @function deleteItem
   *
   * @description Deletes item from the localstorage. Gets all items, deletes one, cleans from `null` values and then saves it again. The id is passed by event data transfer
   * @example
   * app.data.deleteItem();
   */
  module.data.deleteItem = function () {

    MyDOs.dom.event(window, 'deletedRow', function (e) {

      var id = e.detail.id;

      var currentLocalStorageObject = this.getAllItems(dataTableName);

      for (var object in currentLocalStorageObject) {

        if (parseInt(currentLocalStorageObject[object].id) === parseInt(id))
          currentLocalStorageObject[object] = null;
      }

      currentLocalStorageObject = currentLocalStorageObject.filter(function (item) {
        return item !== null;
      });

      localStorage.setItem(dataTableName, this.write(currentLocalStorageObject));

    }.bind(this));

  };


  /** @function editItem
   *
   * @description Edits the currently selected item. The data is passed by event data transfer
   * @example
   * app.data.editItem();
   */
  module.data.editItem = function () {

    MyDOs.dom.event(window, 'editedRow', function (e) {

      var data = e.detail;

      var currentLocalStorageObject = this.getAllItems(dataTableName);

      for (var object in currentLocalStorageObject) {

        if (parseInt(currentLocalStorageObject[object].id) === parseInt(data.id)) {
          currentLocalStorageObject[object].title = data.name.toString();
          currentLocalStorageObject[object].content = data.content;
        }

      }

      localStorage.setItem(dataTableName, this.write(currentLocalStorageObject));

    }.bind(this));

  };



  module.data.reorderItems = function () {

    var currentLocalStorageObject = this.getAllItems(dataTableName);

    currentLocalStorageObject.reverse();

    localStorage.setItem(dataTableName, this.write(currentLocalStorageObject));

  };


  return module;


}(MyDOs || {}));