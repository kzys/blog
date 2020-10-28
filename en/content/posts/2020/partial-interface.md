---
title: "Go Patterns: Partial Interface"
date: 2020-10-28T06:45:32-07:00
tags: ["100DaysToOffload", "Go"]
---

amazon-ecr-cotnainerd-resolver defines [ecrAPI](https://github.com/awslabs/amazon-ecr-containerd-resolver/blob/bbd7175f7bd0bc03080d290a885a62d05b0a5a29/ecr/base.go#L53) like below;

```go
// ecrAPI contains only the ECR APIs that are called by the resolver
// See https://docs.aws.amazon.com/sdk-for-go/api/service/ecr/ecriface/ for the
// full interface from the SDK.
type ecrAPI interface {
	BatchGetImageWithContext(aws.Context, *ecr.BatchGetImageInput, ...request.Option) (*ecr.BatchGetImageOutput, error)
	GetDownloadUrlForLayerWithContext(aws.Context, *ecr.GetDownloadUrlForLayerInput, ...request.Option) (*ecr.GetDownloadUrlForLayerOutput, error)
	BatchCheckLayerAvailabilityWithContext(aws.Context, *ecr.BatchCheckLayerAvailabilityInput, ...request.Option) (*ecr.BatchCheckLayerAvailabilityOutput, error)
	InitiateLayerUpload(*ecr.InitiateLayerUploadInput) (*ecr.InitiateLayerUploadOutput, error)
	UploadLayerPart(*ecr.UploadLayerPartInput) (*ecr.UploadLayerPartOutput, error)
	CompleteLayerUpload(*ecr.CompleteLayerUploadInput) (*ecr.CompleteLayerUploadOutput, error)
	PutImageWithContext(aws.Context, *ecr.PutImageInput, ...request.Option) (*ecr.PutImageOutput, error)
}
```

Defining a smaller, limited interface is always nice. It clearly shows what your code needs. However, in interface-first languages such as Java, having a smaller interface means you need to define your own wrapper interface. Go's interface provides a better alternative that doesn't add an unnecessary abstraction layer.

In addition to that, small interface is easier to write [test doubles](https://martinfowler.com/bliki/TestDouble.html). While tools like [gomock](https://github.com/golang/mock) makes mocking a big interface easier, pre-programmed mocks are cumbersome to maintain. Other test doubles such as fake objects are often useful to make sure your implementation correctly call its collaborators.
