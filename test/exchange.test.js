const Exchange = artifacts.require("Exchange");
const { assert } = require('console');
var expectThrow = require('./helper.js');


contract("Exchange", (accounts) => {
    let instance = null;
    let owner = accounts[0]; 
    let user1 = accounts[1];
    let user2 = accounts[2];
    let user3 = accounts[3];

    it("Exchange deployment", async () => {
        instance = await Exchange.deployed({from: owner});
        assert.notEqual(instance, null);
    });

    // it("sendViaTransfer", async () => {
    //     const response = await instance.sendViaTransfer(user2, { value: 2000000000000000000, from: user1});
    //     assert.equal(response.receipt?.status, true);
    //     // console.log(user1.getBalance());
    // });

    // it("sendEthers", async () => {
    //     const response = await instance.sendEthers(user2, 7, { from: user1});
    //     assert.equal(response.receipt?.status, true);
    // });

    it("getBalance", async () => {
        for (let account of accounts) {
            const b = await instance.getBalance(account);
            let balance = await web3.eth.getBalance(account);
            console.log(account, balance.toString(), web3.utils.fromWei(b.toString(), 'ether'));
        };
    });


});