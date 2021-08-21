package main

import (
	"errors"
	"io/ioutil"
	"net/http"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func lambdaHandler() (events.APIGatewayProxyResponse, error) {

	var lambdaError error

	resp, err := http.Get("https://fl4v-web.s3.eu-west-1.amazonaws.com/home/index.html")

	if err != nil {
		lambdaError = err
	}

	data, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		lambdaError = err
	}

	if resp.StatusCode != 200 {
		lambdaError = errors.New(string(data))
	}

	if lambdaError != nil {
		return events.APIGatewayProxyResponse{
			Body:       lambdaError.Error(),
			StatusCode: 500,
			Headers: map[string]string{
				"Content-Type": "text/plain",
			},
		}, nil
	}

	return events.APIGatewayProxyResponse{
		Body:       string(data),
		StatusCode: 200,
		Headers: map[string]string{
			"Content-Type": "text/html",
		},
	}, nil
}

func main() {
	lambda.Start(lambdaHandler)
}
