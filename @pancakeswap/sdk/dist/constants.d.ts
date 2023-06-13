import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 56,
    TESTNET = 42161
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
// mainnet
// export declare const FACTORY_ADDRESS = "0x90b7E5854a856e56B3a0a45c742EbC9AD55738F1";
// export declare const INIT_CODE_HASH = "0xdcf0e6f0f04466327c127ce2e7cf2f97358f5c5c48521cedc97c0707b44a6f44";

// testnet
export declare const FACTORY_ADDRESS = "0x82637dCCc4Aa3A8Bd0266e95A301ed22c40E3064";
export declare const INIT_CODE_HASH = "0x939d5e48b00f483cfd8a6875460ed5a65b1851705cf95d8c8e6187778886802f ";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
