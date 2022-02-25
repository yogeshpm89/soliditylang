pragma solidity >=0.4.22 <0.9.0;

contract Exchange {
    
    function sendViaTransfer(address payable to) public payable {
        to.transfer(msg.value);
    }

    function sendEthers(address payable to, uint ethers) public payable {
        uint amount = ethers * 1000000000000000000;
        to.transfer(amount);
    }

    function getBalance(address user) public view returns (uint) {
        return address(user).balance;
    }
}