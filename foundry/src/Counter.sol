// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {
    uint256 public number;

    event Increment(uint256 number);
    event SetNumber(uint256 number, uint256 newNumber);

    function setNumber(uint256 newNumber) public {
        emit SetNumber(number, newNumber);
        number = newNumber;
    }

    function increment() public {
        number++;
        emit Increment(number);
    }
}
