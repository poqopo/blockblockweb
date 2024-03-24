import { SSTConfig } from 'sst';
import { StaticSite } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 'blockblockweb',
      region: 'ap-northeast-2',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new StaticSite(stack, 'react', {
        buildOutput: 'dist',
        buildCommand: 'tsc && vite build',
        customDomain: {
          domainName:
            stack.stage === 'prod'
              ? 'ysblockblock.com'
              : 'dev.ysblockblock.com',
          hostedZone: 'ysblockblock.com',
        },
      });
      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
