package main

import (
	"io/ioutil"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func lambdaHandler() (events.APIGatewayProxyResponse, error) {

	data, err := ioutil.ReadFile("index.html")

	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       err.Error(),
			StatusCode: 404,
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
