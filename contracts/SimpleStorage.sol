pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
    uint number;

    function set(uint value) public {
        number = value;
    }

    function get() public view returns (uint) { 
        return number;
    }
}