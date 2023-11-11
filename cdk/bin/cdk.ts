import { App } from 'aws-cdk-lib';
import { config } from 'dotenv';
import { CdkStack, Fl4vStackProps } from '../lib/cdk-stack';

config();

const app = new App();

export const prodStackProperties: Fl4vStackProps = {
	environment: 'prod',
	env: {
		account: process.env.CDK_PROD_ACCOUNT,
		region: 'us-east-1'
	},
	domain: 'fl4v.com',
	noindex: true
};

new CdkStack(app, 'prod-fl4v', prodStackProperties);
