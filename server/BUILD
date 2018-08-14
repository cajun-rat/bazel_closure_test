cc_binary(
    name = "hello",
    srcs = [
        "hello.cc",
    ],
    deps = ["@boost//:asio", "@boost//:beast"],
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