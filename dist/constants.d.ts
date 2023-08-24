import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | number | string;
export declare enum ChainId {
    ETH = 1,
    MUMBAI = 80001,
    MAINNET = 8453,
    TESTNET = 97
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
export declare const FACTORY_ADDRESS = "0x55b3409335B81E7A8B7C085Bbb4047DDc23f7257";
export declare const FACTORY_ADDRESS_MAP: {
    8453: string;
    97: string;
    1: string;
    80001: string;
};
export declare const INIT_CODE_HASH = "0x64607b9f5010cb84cb06f6f736569f3683fb93582f6b5c32ca2858222856e1ec";
export declare const INIT_CODE_HASH_MAP: {
    8453: string;
    97: string;
    1: string;
    80001: string;
};
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
