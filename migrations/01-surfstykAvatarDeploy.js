const SurfstykAvatars = artifacts.require("SurfstykAvatar");

module.exports = function(deployer, network, accounts){
    deployer.deploy(SurfstykAvatars, {from: accounts[0]});
}