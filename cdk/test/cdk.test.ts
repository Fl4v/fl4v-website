import { App } from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';
import { prodStackProperties } from '../bin/cdk';
import { Template } from 'aws-cdk-lib/assertions';

describe('Stack snapshot tests', () => {
	test('Prod stack', () => {
		const stack = new CdkStack(new App(), 'fl4v-prod', prodStackProperties);
		const template = Template.fromStack(stack);

		expect(template).toMatchSnapshot();
	});
});
