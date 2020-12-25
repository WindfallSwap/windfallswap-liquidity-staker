const StakingRewardsFactory = artifacts.require("StakingRewardsFactory.sol");

module.exports = async function (deployer, _network, addresses) {
  let rewardsToken = '0x4f3Ec89a44e8ec8D1Af0eecB774F37E8b79B69E6';
  let genesis = parseInt((+new Date())/1000) + 60*60;
  
  await deployer.deploy(StakingRewardsFactory, rewardsToken, genesis);
  const stakingRewardsFactory = await StakingRewardsFactory.deployed(); 
};
