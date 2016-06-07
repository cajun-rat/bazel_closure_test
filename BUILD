
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_binary")
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_test")

package(default_testonly = True)

closure_js_test(
  name="hello_test",
  srcs=["hello_test.js"],
  deps=[
    "@io_bazel_rules_closure//closure/library:testing",
  ]
);
