const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Escrow', () => {

    it('Returns NFT Address' ,  async() => {
        RealEstate = await ethers.getContractFactory('RealEstate')
        RealEstate  = await RealEstate.deploy()

        console.log(RealEstate.address)
    })

})
