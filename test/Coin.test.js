const Coin = artifacts.require("Coin");
var expectThrow = require('./helper.js');


contract("Coin", (accounts) => {
    return;
    let instance = null;
    let owner = accounts[0]; 
    let user1 = accounts[1];
    let user2 = accounts[2];
    let user3 = accounts[3];

    it("Coin deployment", async () => {
        instance = await Coin.deployed({from: owner});
        assert.notEqual(instance, null);
    });

    it("Coin owner can mint", async () => {
        const response = await instance.mint(owner, 1000, {from: owner});
        // console.log(response);
        assert.equal(response.receipt?.status, true);
    });

    it("Coin user1 cannot mint", async () => {
        const tx = instance.mint(owner, 1000, {from: user1});
        expectThrow(tx);
    });

    it("Send coin to user1", async () => {
        const response = await instance.send(user1, 100, {from: owner});
        assert.equal(response.receipt?.status, true);
    });

    it("User1 balance is 100", async () => {
        const response = await instance.balancesOf(user1);
        assert.equal(response.toString(), 100);
    });

    it("Owner balance is 900", async () => {
        const response = await instance.balancesOf(owner);
        assert.equal(response.toString(), 900);
    });

    it("Insufficient balance", async () => {
        const tx = instance.send(user2, 102, {from: user1});
        await expectThrow(tx);
    });


});