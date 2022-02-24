const SimpleStorage = artifacts.require('SimpleStorage');

contract('SimpleStorage', (accounts) => {
    let instance = null;
    return

    accounts.forEach(account => {
        console.log(account);
    });

    it("SimpleStorage deployment test case", async function() {
        instance = await SimpleStorage.deployed();
        console.log(instance.address);
        assert.notEqual(instance, null);
    });

    it("Setting value test case", async function() {
        await instance.set(10);
        let value = await instance.get();
        assert.equal(value, 10);
    })

    it("Getting value test case", async function() {
        let value = await instance.get();
        assert.equal(value, 10);
    })
});