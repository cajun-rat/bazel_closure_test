//goog.setTestOnly();

goog.require('goog.testing.asserts');
goog.require('goog.testing.jsunit');

goog.require('hello.inc');
function testExample() {
  assertTrue(true);
}

function testHello() {
  var res = hello.inc(3);
  assertEquals(res, 4);
}
