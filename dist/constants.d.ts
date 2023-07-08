import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | number | string;
export declare enum ChainId {
    ETH = 1,
    MUMBAI = 80001,
    MAINNET = 56,
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
export declare const FACTORY_ADDRESS = "0xe8c08E062ADb7b07B89D8Fb543dE4424B15F14FF";
export declare const FACTORY_ADDRESS_MAP: {
    56: string;
    97: string;
    1: string;
    80001: string;
};
export declare const INIT_CODE_HASH = "0x0774d52e64195f689e3cbaafd0130eb55a222cb7218ba9dfbbb5b949820ac60b";
export declare const INIT_CODE_HASH_MAP: {
    56: string;
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