
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_binary")
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_test")
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_css_library")
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_css_binary")
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_template_library")
load("@bazel_tools//tools/build_defs/pkg:pkg.bzl", "pkg_tar", "pkg_deb")



filegroup(
    visibility=["//visibility:public"],
    name = "php_srcs",
    srcs = [
      "index.php",
    ]
)

sh_binary(
    name = "run-httpd",
    srcs = ["run-httpd.sh"],
    data = [
      ":javascript_bin",
      ":styles_bin",
      ":php_srcs"
    ]
)

closure_js_library(
  name = "javascript_lib",
  srcs = [
    "hello.js",
  ],
  deps = [
    ":styles_lib",
    ":templates_lib",
    "@io_bazel_rules_closure//closure/library:library",
    "@io_bazel_rules_closure//closure/library/ui:dialog",
  ],
)


closure_js_template_library(
  name = "templates_lib",
  srcs = [
    "hello.soy"
  ]
)

closure_js_binary(
  name = "javascript_bin",
  deps = [
    ":javascript_lib",
    ":styles_lib",
  ],
  entry_points = [
    "goog:hello.inc",
    "goog:hello.main"
  ],
  css = ":styles_bin",
  # output_wrapper = "%output%\n//#sourceMappingURL=javascript_bin.js.map"
  visibility = ["//visibility:public"],
)

closure_js_test(
  name="javascript_test",
  srcs=["hello_test.js"],
  deps=[
    ":javascript_lib",
    "@io_bazel_rules_closure//closure/library:testing",
  ],
  css = ":styles_bin"
);

closure_css_library(
  name = "styles_lib",
  srcs = [
    "main.css",
  ],
  deps = [
    "@io_bazel_rules_closure//closure/library:css",
  ]
)

# Final minified CSS
closure_css_binary(
  name = "styles_bin",
  deps = [
    ":styles_lib"
  ],
  visibility = ["//visibility:public"],
)

# Packaging Rules

pkg_tar(
  name = "php_tar",
  package_dir = "/var/www/bazeltest/www-root",
  strip_prefix = "/php",
  srcs = [
    ":php_srcs",
    ":styles_bin",
    ":javascript_bin",
  ]
)

pkg_deb(
  name = "bazeltest",
  architecture = "all",
  built_using = "bazel",
  data = ":php_tar",
  depends = [
    "php"
  ],
  description = "Hello World Web Application",
  homepage = "http://example.com",
  maintainer = "Phil Wise <phil@phil-wise.com>",
  package = "bazeltest",
  version = "0.0.1",
)
