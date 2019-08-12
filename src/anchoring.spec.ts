import 'mocha';
import { expect } from 'chai';

import { Anchoring } from './anchoring';
import { ApiPromise } from '@polkadot/api';
import { connect } from './connect';

// TODO read from env
const WS_PROVIDER='ws://127.0.0.1:9944';

// TODO generate accounts and use
const SUBSTRATE_ACCOUNT='//Alice';

describe('Anchoring', async () => {

  let api: ApiPromise;

  before(async () => {
    api = await connect(WS_PROVIDER);
  });

  describe('Commit', async () => {

    it('should commit anchor', async () => {
       const [chain, nodeName, nodeVersion] = await Promise.all([
          api.rpc.system.chain(),
          api.rpc.system.name(),
          api.rpc.system.version()
      ]);
      console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
      const result = new Anchoring();
      //result.commit();
      expect(result).to.equal('Hello world!');
    });

  });

  after(async () => {
    api.disconnect();
  });

});