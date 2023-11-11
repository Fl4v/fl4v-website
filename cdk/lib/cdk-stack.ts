import { Stack, StackProps, Tags } from 'aws-cdk-lib';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
	Distribution,
	OriginAccessIdentity,
	PriceClass,
	ResponseHeadersPolicy,
	ViewerProtocolPolicy
} from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ARecord, AaaaRecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface Fl4vStackProps extends StackProps {
	environment: string;
	domain: string;
	noindex: boolean;
}

export class CdkStack extends Stack {
	constructor(scope: Construct, id: string, props: Fl4vStackProps) {
		super(scope, id, props);

		Tags.of(this).add('service', props.domain);
		Tags.of(this).add('env', props.environment);

		const canonicalUser = new OriginAccessIdentity(this, 'access-identity');
		const noIndexPolicy = new ResponseHeadersPolicy(this, 'response-header-policy', {
			responseHeadersPolicyName: 'noindex-policy',
			customHeadersBehavior: {
				customHeaders: [{ header: 'X-Robots-Tag', value: 'noindex', override: true }]
			}
		});

		const certificate = new Certificate(this, 'certificate', {
			domainName: props.domain,
			certificateName: props.domain
		});

		const cloudfrontS3Bucket = new Bucket(this, 'cloudfront-s3-bucket', {
			accessControl: BucketAccessControl.PRIVATE,
			bucketName: props.domain
		});
		cloudfrontS3Bucket.grantRead(canonicalUser);

		const cloudFrontDistribution = new Distribution(this, props.domain, {
			defaultRootObject: 'index.html',
			defaultBehavior: {
				origin: new S3Origin(cloudfrontS3Bucket, {
					originAccessIdentity: canonicalUser
				}),
				viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
				responseHeadersPolicy: props.noindex ? noIndexPolicy : undefined
			},
			priceClass: PriceClass.PRICE_CLASS_100,
			domainNames: [props.domain],
			certificate: certificate,
			errorResponses: [
				{
					httpStatus: 404,
					responsePagePath: '/4xx-errors/404/'
				}
			]
		});

		const hostedZone = HostedZone.fromLookup(this, 'hosted-zone', {
			domainName: props.domain
		});

		new ARecord(this, 'a-record-root', {
			zone: hostedZone,
			target: RecordTarget.fromAlias(new CloudFrontTarget(cloudFrontDistribution)),
			recordName: props.domain
		});
		new AaaaRecord(this, 'aaaa-record-root', {
			zone: hostedZone,
			target: RecordTarget.fromAlias(new CloudFrontTarget(cloudFrontDistribution)),
			recordName: props.domain
		});
	}
}
