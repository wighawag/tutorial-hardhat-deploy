import {expect} from "./chai-setup";

import {ethers, deployments, getNamedAccounts} from 'hardhat';

describe("Token contract", function() {
  it("Deployment should assign the total supply of tokens to the owner", async function() {
    await deployments.fixture(["Token"]);
    const {tokenOwner} = await getNamedAccounts();
    const Token = await ethers.getContract("Token");
    const ownerBalance = await Token.balanceOf(tokenOwner);
    const supply = await Token.totalSupply();
    expect(ownerBalance).to.equal(supply);
  });
});
