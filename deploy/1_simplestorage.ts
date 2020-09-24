import {
  BuidlerRuntimeEnvironment,
  DeployFunction,
} from "@nomiclabs/buidler/types";

const func: DeployFunction = async (bre: BuidlerRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = bre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const result = await deploy('SimpleStorage', {
    from: deployer,
    args: [(await deployments.get('MockAggregator')).address],
  });
  console.table({
    Contract: 'SimpleStorage',
    address: result.address,
    tsHash: result.transactionHash,
  });
}

export default func;
