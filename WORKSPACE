load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

git_repository(
    name = "com_github_nelhage_rules_boost",
    commit = "1e3a69bf2d5cd10c34b74f066054cd335d033d71",
    remote = "https://github.com/nelhage/rules_boost",
    shallow_since = "1591047380 -0700",
)

load("@com_github_nelhage_rules_boost//:boost/boost.bzl", "boost_deps")
boost_deps()


load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "io_bazel_rules_closure",
    sha256 = "7d206c2383811f378a5ef03f4aacbcf5f47fd8650f6abbc3fa89f3a27dd8b176",
    strip_prefix = "rules_closure-0.10.0",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_closure/archive/0.10.0.tar.gz",
        "https://github.com/bazelbuild/rules_closure/archive/0.10.0.tar.gz",
    ],
)

load("@io_bazel_rules_closure//closure:repositories.bzl", "rules_closure_dependencies", "rules_closure_toolchains")

rules_closure_dependencies()

rules_closure_toolchains()

#git_repository(
#    name = "io_bazel_rules_python",
#    commit = "ebd7adcbcafcc8abe3fd8e5b0e42e10ced1bfe27",
#    remote = "https://github.com/bazelbuild/rules_python.git",
#)

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

git_repository(
    name = "gtest",
    commit = "3306848f697568aacf4bcca330f6bdd5ce671899",
    remote = "https://github.com/google/googletest",
)

git_repository(
    name = "bazel_compilation_database",
    commit = "aa58494efdf31c3e3525832b3d44d48bb3bc2b0b",
    remote = "https://github.com/grailbio/bazel-compilation-database",
)
