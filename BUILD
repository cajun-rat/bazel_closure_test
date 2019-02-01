

load("@bazel_compilation_database//:aspects.bzl", "compilation_database")

compilation_database(
    name = "compilation_database",
    targets = [
        "//server:hello",
        "//server:server",
    ],
    # ideally should be the same as `bazel info execution_root`.
    exec_root = "/home/phil/.cache/bazel/_bazel_phil/7a0a3fce9466c5669459d49aa0461110/execroot/__main__",
)
