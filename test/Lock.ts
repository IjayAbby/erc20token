import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { MyToken } from "../typechain-types";
import { SaveERC20 } from "../typechain-types";

describe("SaveERC20" , function () {
  let saveERC20: SaveERC20;
  // let myToken : MyToken;

  this.beforeEach(async function () {
    const [owner] = await ethers.getSigners()
    const MyToken = await ethers.getContractFactory("SaveERC20");
    const myToken = await MyToken.deploy(owner);
    const save = await ethers.getContractFactory("SaveERC20");
    saveERC20 = await  save.deploy(myToken.target);

  })
}) 