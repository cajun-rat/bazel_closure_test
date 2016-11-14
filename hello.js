goog.provide('hello.inc');
goog.provide('hello.main');

goog.require('goog.events');
goog.require('goog.soy');
goog.require('goog.ui.Dialog');
goog.require('hello.templates');

/**
  * Increment
  * @param {number} x number
  * @returns {number}
  * @export
  */
hello.inc = function(x) {
  return x+1;
};

/**
  * Main entry point
  * @export
  */
hello.main = function() {
  goog.soy.renderElement(goog.global. document.body, hello.templates.helloWorld, {});
  setTimeout(function() {
    var dialog1 = new goog.ui.Dialog();
    dialog1.setTextContent('hello world');
    dialog1.setTitle('Hello');

    dialog1.setButtonSet(goog.ui.Dialog.ButtonSet.createContinueSaveCancel());

    goog.events.listen(dialog1, goog.ui.Dialog.EventType.SELECT, function( /** goog.ui.Dialog.Event! */ e) {
      alert('You chose: ' + e.key);
    });

    dialog1.setVisible(true);
  }, 2000);
};
