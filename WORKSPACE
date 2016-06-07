git_repository(
    name = "io_bazel_rules_closure",
    remote = "https://github.com/bazelbuild/rules_closure.git",
    # Test never completes with master
    # commit = "c3468cdbf61a2781ed256734561754af3dc0c020",

    # Test fails with
    # Serving /io_bazel_rules_closure/closure/testing/phantomjs_jsunit_runner.js
    # NOT FOUND /io_bazel_rules_closure/closure/testing/phantomjs_jsunit_runner.js
    # Error: No tests found in given test case: Untitled Test Case
    tag = "0.2.0"
)


load("@io_bazel_rules_closure//closure:defs.bzl", "closure_repositories")

closure_repositories()
