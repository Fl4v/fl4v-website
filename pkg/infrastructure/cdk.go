package main

import (
	"os"

	"github.com/aws/aws-cdk-go/awscdk"
	"github.com/aws/aws-cdk-go/awscdk/awslambda"
	"github.com/aws/aws-cdk-go/awscdk/awslambdago"
	"github.com/aws/constructs-go/constructs/v3"
	"github.com/aws/jsii-runtime-go"
)

type stackProps struct {
	awscdk.StackProps
}

func lambdaStack(scope constructs.Construct, id string, props *stackProps) awscdk.Stack {
	var sprops awscdk.StackProps
	if props != nil {
		sprops = props.StackProps
	}
	stack := awscdk.NewStack(scope, &id, &sprops)

	// AWS lambda function definition
	awslambdago.NewGoFunction(stack, jsii.String("fl4v-web"), &awslambdago.GoFunctionProps{
		FunctionName: jsii.String("fl4v-web"),
		Entry:        jsii.String("../lambda/lambda.go"),
		Runtime:      awslambda.Runtime_GO_1_X(),
	})

	return stack
}

func main() {
	app := awscdk.NewApp(nil)

	// Stack properties
	props := stackProps{
		awscdk.StackProps{
			Env: &awscdk.Environment{
				Account: jsii.String(os.Getenv("CDK_DEFAULT_ACCOUNT")),
				Region:  jsii.String(os.Getenv("CDK_DEFAULT_REGION")),
			},
		},
	}

	lambdaStack(app, "Fl4vWeb", &props)

	app.Synth(nil)
}
