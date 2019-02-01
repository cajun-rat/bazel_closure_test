load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

git_repository(
    name = "io_bazel_rules_closure",
    remote = "https://github.com/bazelbuild/rules_closure.git",
    commit = "1e531288a47623c6631cadfc4c18aa08edc30895", # 2019-02-01
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
    commit = "ebd7adcbcafcc8abe3fd8e5b0e42e10ced1bfe27",
)

# Disabled. Needs Python3 support
# Only needed for PIP support:
# load("@io_bazel_rules_python//python:pip.bzl", "pip_repositories")
# pip_repositories()
# load("@io_bazel_rules_python//python:pip.bzl", "pip_import")

# This rule translates the specified requirements.txt into
# @pip_deps//:requirements.bzl, which itself exposes a pip_install method.
#pip_import(
#   name = "pip_deps",
#   requirements = "//:requirements.txt",
#)

# Load the pip_install symbol for my_deps, and create the dependencies'
# repositories.
#load("@pip_deps//:requirements.bzl", "pip_install")
#pip_install()


load("@com_github_nelhage_rules_boost//:boost/boost.bzl", "boost_deps")
boost_deps()


git_repository(
    name = "gtest",
    remote = "https://github.com/google/googletest",
    commit = "3306848f697568aacf4bcca330f6bdd5ce671899",
)


git_repository (
    name = "bazel_compilation_database",
    remote = "https://github.com/grailbio/bazel-compilation-database",
    commit = "7bc80f9355b09466fffabce24d463d65e37fcc0f",
)