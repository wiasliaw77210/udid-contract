import { ethers, deployments } from '@nomiclabs/buidler';
import assert from 'assert';

describe('Test:SimpleStorage', async () => {
  beforeEach(async () => {
    await deployments.fixture();
  });

  it('SimpleStorage:Get', async () => {
    const Contract = await ethers.getContract('SimpleStorage');
    assert.equal(await Contract.get(), 0);
  });

  it('SimpleStorage:Set', async () => {
    const Contract = await ethers.getContract('SimpleStorage');
    await Contract.set(25);
    assert.equal(await Contract.get(), 25);
  });
})
