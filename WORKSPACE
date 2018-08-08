git_repository(
    name = "io_bazel_rules_closure",
    remote = "https://github.com/bazelbuild/rules_closure.git",
    commit = "3555e5ba61fdcc17157dd833eaf7d19b313b1bca",
)

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_repositories")
closure_repositories()


git_repository(
    name = "com_github_nelhage_rules_boost",
    commit = "b8ff8b2b43ba3525dd3f3cfe5af78e74cb082cb8",
    remote = "https://github.com/cajun-rat/rules_boost",
)

load("@com_github_nelhage_rules_boost//:boost/boost.bzl", "boost_deps")
boost_deps()