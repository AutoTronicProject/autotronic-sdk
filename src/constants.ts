import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  ETH = 1,
  MUMBAI = 80001,
  MAINNET = 56,
  TESTNET = 97,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0xe8c08E062ADb7b07B89D8Fb543dE4424B15F14FF'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: '0xe8c08E062ADb7b07B89D8Fb543dE4424B15F14FF',
  [ChainId.ETH]: '',
  [ChainId.MUMBAI]: '0xe8c08E062ADb7b07B89D8Fb543dE4424B15F14FF',
}

export const INIT_CODE_HASH = '0x0774d52e64195f689e3cbaafd0130eb55a222cb7218ba9dfbbb5b949820ac60b'

export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: '0x0774d52e64195f689e3cbaafd0130eb55a222cb7218ba9dfbbb5b949820ac60b',
  [ChainId.ETH]: '',
  [ChainId.MUMBAI]: '0x0774d52e64195f689e3cbaafd0130eb55a222cb7218ba9dfbbb5b949820ac60b',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
