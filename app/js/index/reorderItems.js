var MyDOs = (function (module) {

  'use strict';

  module.reorderItems = function () {

    var container = this.dom.element.id(this.settings.container);

    container.innerHTML = '';

    this.data.reorderItems();

    this.renderTable();

  };

  return module;

}(MyDOs || {}));