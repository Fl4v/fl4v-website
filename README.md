## [Fl4v.com](https://fl4v.com)

Serveless one page website served by [AWS Lambda](https://aws.amazon.com/lambda/)

### Requirements

- [`Golang 1.x`](https://golang.org/dl/)
- [`Docker`](https://www.docker.com/products/docker-desktop)
- [`AWS SAM`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started.html) - For local development

### Build & Test Locally with SAM

```bash
make build
make run
```

Invoke Lambda via a `GET` request on `localhost:3000/index`

#### To Do

- [ ] Add api gateway stack configuration
