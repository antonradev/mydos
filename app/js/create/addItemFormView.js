(function () {

  'use strict';

  var app = MyDOs;

  var form = app.dom.element.id('saveItemForm');

  app.dom.element.addClass('item-save-form', form);

  var input = app.dom.input({
    id: 'itemNameField',
    placeholder: 'Note Name:',
    class: 'form-control item-name-field',
    maxlength: '30'
  });

  var textArea = app.dom.textarea({
    id: 'itemContentField',
    placeholder: 'Description:',
    class: 'form-control item-description-field',
    maxlength: '50'
  });

  var button = app.dom.button({
    id: 'itemSaveButton',
    class: 'btn btn-primary disabled',
    disabled: true
  }, 'Save item');

  app.dom.append([input, textArea, button], form);



  // Events
  app.dom.event(button, 'click', function () {
    app.saveItem(input.value, textArea.value);
    input.value = '';
    textArea.value = '';
  });

  app.dom.event(input, 'blur keyup', function () {
    app.dom.activateButton(input, textArea, button);
  });

  app.dom.event(textArea, 'blur keyup', function () {
    app.dom.activateButton(input, textArea, button);
  });



}());