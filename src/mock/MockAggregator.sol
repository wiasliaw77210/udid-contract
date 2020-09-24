pragma solidity ^0.6.7;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract MockAggregator is AggregatorV3Interface {
    function decimals() public override view returns (uint8) {
        return uint8(8);
    }

    function description() public override view returns (string memory) {
        return "test version";
    }

    function version() public override view returns (uint256) {
        return uint256(1);
    }

    function getRoundData(uint80 _roundId)
        public
        override
        view
        returns (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        )
    {
        return (1, 1, 1, 1, 1);
    }

    function latestRoundData()
        public
        override
        view
        returns (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        )
    {
        return (2, 2, 2, 2, 2);
    }
}
