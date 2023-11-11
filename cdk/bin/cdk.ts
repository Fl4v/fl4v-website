import { App } from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';

const app = new App();

new CdkStack(app, 'fl4v-prod', {
	env: {
		account: process.env.CDK_DEFAULT_ACCOUNT,
		region: process.env.CDK_DEFAULT_REGION
	}
});
