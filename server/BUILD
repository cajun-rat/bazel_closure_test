


cc_binary(
    name = "hello",
    srcs = [
        "hello.cc",
    ],
    deps = ["@boost//:asio", "@boost//:beast"],
    visibility = ["//visibility:public"],
)


cc_binary(
    name = "server",
    srcs = [
        "server.cc",
    ],
    deps = [
        "@boost//:asio",
        "@boost//:beast",
        "@boost//:filesystem",
        "@boost//:program_options"
    ],
    data = [
      "//web_app:javascript_bin",
      "//web_app:php_srcs",
      "//web_app:styles_bin",
    ],
    visibility = ["//visibility:public"],
)

cc_test (
    name = "hello_test",
    srcs = [
        "hello_test.cc",
    ],
    deps = [
        "@gtest//:gtest",
        "@gtest//:gtest_main"
    ],
)