import {
  BuidlerRuntimeEnvironment,
  DeployFunction,
} from "@nomiclabs/buidler/types";

const func: DeployFunction = async (bre: BuidlerRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = bre;
  const { deploy, read, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const result = await deploy('SimpleStorage', {
    from: deployer,
  });
  console.table({
    address: result.address,
    tsHash: result.transactionHash,
  });
}

export default func;
