---
title: "Three OCI specs"
date: 2021-07-27T21:15:53-07:00
---

Open Container Initiative (OCI) defines three specifications around containers. I often forget which spec is which. So here is the brief note for myself.

### [Runtime Specification](https://github.com/opencontainers/runtime-spec/blob/master/spec.md)

Runtime Specification defines basically [a big JSON configuration file](https://github.com/opencontainers/runtime-spec/blob/master/config.md#configuration-schema-example) for OCI runtimes such as runc, crun and youki. It has sections for [Linux](https://github.com/opencontainers/runtime-spec/blob/master/config-linux.md), [Windows](https://github.com/opencontainers/runtime-spec/blob/master/config-windows.md) and [Solaris](https://github.com/opencontainers/runtime-spec/blob/master/config-solaris.md).

### [Image Format Specification](https://github.com/opencontainers/image-spec/blob/main/spec.md)

Image Format Specification defines a way to package a container image. It also defines [media types](https://github.com/opencontainers/image-spec/blob/main/media-types.md) such as `application/vnd.oci.descriptor.v1+json`.

When you use Docker, you often need to think about image layers. The layer structure is seen in this Image Format Specification, but not in the Runtime Specification.

### [Distribution Specification](https://github.com/opencontainers/distribution-spec/blob/main/spec.md)

Distribution Specification defines a way to distribute container images. This is basically HTTP API for uploading/downloading container images.
