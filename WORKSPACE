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

git_repository(
    name = "io_bazel_rules_python",
    remote = "https://github.com/bazelbuild/rules_python.git",
    commit = "8b5d0683a7d878b28fffe464779c8a53659fc645",
)

# Only needed for PIP support:
load("@io_bazel_rules_python//python:pip.bzl", "pip_repositories")

pip_repositories()


load("@io_bazel_rules_python//python:pip.bzl", "pip_import")

# This rule translates the specified requirements.txt into
# @pip_deps//:requirements.bzl, which itself exposes a pip_install method.
pip_import(
   name = "pip_deps",
   requirements = "//:requirements.txt",
)

# Load the pip_install symbol for my_deps, and create the dependencies'
# repositories.
load("@pip_deps//:requirements.bzl", "pip_install")
pip_install()


load("@com_github_nelhage_rules_boost//:boost/boost.bzl", "boost_deps")
boost_deps()